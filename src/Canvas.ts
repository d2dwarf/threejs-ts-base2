import { GridHelper, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/**
 * Canvasクラス
 * threejsのScene, Renderer, Cameraの管理と設定
 * @params element: Canvasの要素を取得し引数として使用すること
 */
export default class Canvas {

  // properties
  protected wSize = {
    w: 0,
    h: 0
  }
  protected cameraState = {
    fov: 0,
    aspect: 0,
    near: 0,
    far: 0,
    lookAt: new Vector3(0, 0, 0)
  }
  protected scene: Scene | null = null
  protected renderer: WebGLRenderer | null = null
  protected camera: PerspectiveCamera | null = null
  
  // constructor
  constructor(canvasElement: Element) {

    // 初期設定
    this.wSize.w = window.innerWidth
    this.wSize.h = window.innerHeight
    // カメラ設定
    this.cameraState.fov = 60
    this.cameraState.aspect = this.wSize.w / this.wSize.h
    this.cameraState.near = 0.1
    this.cameraState.far = 10000
    this.cameraState.lookAt = new Vector3(0, 0, 0)
    // シーン生成
    this.scene = new Scene()
    // レンダラー生成
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(this.wSize.w, this.wSize.h)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    // カメラ生成
    this.camera = new PerspectiveCamera(this.cameraState.fov, this.cameraState.aspect, this.cameraState.near, this.cameraState.far)
    this.camera.position.set(0, 0, 1000)
    this.camera.lookAt(this.cameraState.lookAt)
    this.scene.add(this.camera)
    // キャンバス生成
    canvasElement.appendChild(this.renderer.domElement)

    // コントロール
    new OrbitControls(this.camera, this.renderer.domElement)
    // グリッドヘルパー
    const gridHelper = new GridHelper(5000, 100, 0x00ff00, 0x00ff99)
    this.scene.add(gridHelper)
  }

  // シーンの取得
  public getScene = (): Scene => {
    return this.scene as Scene
  }
  // カメラの取得
  public getCamera = (): PerspectiveCamera => {
    return this.camera as PerspectiveCamera
  }
  // リサイズメソッド
  public onResize = () => {
    if (this.renderer != null && this.camera != null) {
      this.wSize.w = window.innerWidth
      this.wSize.h = window.innerHeight
      this.cameraState.aspect = this.wSize.w / this.wSize.h
      this.camera.aspect = this.cameraState.aspect
      this.camera.lookAt(this.cameraState.lookAt)
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.wSize.w, this.wSize.h)
      this.renderer.setPixelRatio(window.devicePixelRatio)
    }
  }
  // レンダーメソッド
  public onRender = () => {
    if (this.scene != null && this.renderer != null && this.camera != null) {
      this.renderer.render(this.scene, this.camera)
    }
  }
}