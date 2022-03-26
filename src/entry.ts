import { BoxGeometry, DirectionalLight, Mesh, ShaderMaterial, SpotLight, Group, Vector3 } from 'three'
import Canvas from './Canvas'
import vertexShader from './shader/vertexShader.vert'
import fragmentShader from './shader/fragmentShader.frag'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './scss/main.scss'

// GLTFローダーメソッド
const generateGLTFLoader = (url: string): Promise<Group> => {
  return new Promise(resolve => {
    const loader = new GLTFLoader()
    loader.load(url, gltf => {
      resolve(gltf.scene)
    })
  })
}

const init = async () => {
  console.log("start...")

  // 要素取得
  const element = document.querySelector('#root-canvas')
  if (element != null) {
    const canvas = new Canvas(element)

    // シーンの取得
    const scene = canvas.getScene()
    // カメラの取得
    const camera = canvas.getCamera()

    // 初期値（角度）
    let degree = 180

    // box生成
    const box = new Mesh(
      new BoxGeometry(300, 300, 300),
      new ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        wireframe: false
      })
    )
    box.position.set(0, 0, 0)
    // scene.add(box)

    // glTFローダー
    const model = await generateGLTFLoader('./gltf/cup.gltf')
    model.scale.set(100, 100, 100)
    model.position.set(0, 200, 0)
    scene.add(model)

    // 平行光源
    const light = new DirectionalLight(0xffffff, 1.0)
    light.position.set(0, 0, 10000)
    scene.add(light)
    // スポットライト
    const spot = new SpotLight(0xffffff, 2.0, 2000, 90)
    spot.position.set(0, 300, 1000)
    scene.add(spot)
    const spot2 = new SpotLight(0xffffff, 2.0, 2000, 90)
    spot2.position.set(0, 300, -1800)
    scene.add(spot2)

    // リサイズイベントの設定
    window.addEventListener('resize', canvas.onResize)

    // アニメーションメソッド
    const animate = () => {
      window.requestAnimationFrame(() => animate())

      // box回転
      box.rotation.x += 0.01
      box.rotation.y += 0.01

      // model回転
      // model.rotation.x -= 0.01
      model.rotation.y += 0.1

      // カメラの軌道制御
      const radian = degree * Math.PI / 180
      camera.position.x = 1000 * Math.cos(radian)
      camera.position.y = 800 * Math.abs(Math.sin(radian))
      camera.position.z = 1000 * Math.sin(radian)
      camera.lookAt(0, 0, 0)
      // 角度のカウントを変更
      degree -= 1
      degree = degree < 0 ? 360 : degree

      // レンダリング実行
      canvas.onRender()
    }

    // アニメーション実行
    animate()
  }
}

window.addEventListener('DOMContentLoaded', init)