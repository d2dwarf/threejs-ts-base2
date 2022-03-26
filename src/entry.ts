import { BoxGeometry, DirectionalLight, Mesh, ShaderMaterial, SpotLight } from 'three'
import Canvas from './Canvas'
import vertexShader from './shader/vertexShader.vert'
import fragmentShader from './shader/fragmentShader.frag'
import './scss/main.scss'

const init = (): void => {
  console.log("start...")

  // 要素取得
  const element = document.querySelector('#root-canvas')
  if (element != null) {
    const canvas = new Canvas(element)

    // シーンの取得
    const scene = canvas.getScene()

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
    scene.add(box)

    // 平行光源
    const light = new DirectionalLight(0xffffff, 1.0)
    light.position.set(0, 0, 10000)
    scene.add(light)
    // スポットライト
    const spot = new SpotLight(0xffffff, 2.0, 2000, 90)
    spot.position.set(0, 0, 0)
    scene.add(spot)

    // リサイズイベントの設定
    window.addEventListener('resize', canvas.onResize)

    // アニメーションメソッド
    const animate = () => {
      window.requestAnimationFrame(() => animate())

      // box回転
      box.rotation.x += 0.01
      box.rotation.y += 0.01

      // レンダリング実行
      canvas.onRender()
    }

    // アニメーション実行
    animate()
  }
}

window.addEventListener('DOMContentLoaded', init)