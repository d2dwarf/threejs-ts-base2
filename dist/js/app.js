(()=>{var e,t={306:(e,t,i)=>{"use strict";var r=i(477),a=i(365);class n{wSize={w:0,h:0};cameraState={fov:0,aspect:0,near:0,far:0,lookAt:new r.Pa4(0,0,0)};scene=null;renderer=null;camera=null;constructor(e){this.wSize.w=window.innerWidth,this.wSize.h=window.innerHeight,this.cameraState.fov=60,this.cameraState.aspect=this.wSize.w/this.wSize.h,this.cameraState.near=.1,this.cameraState.far=1e4,this.cameraState.lookAt=new r.Pa4(0,0,0),this.scene=new r.xsS,this.renderer=new r.CP7({alpha:!0,antialias:!0}),this.renderer.setSize(this.wSize.w,this.wSize.h),this.renderer.setPixelRatio(window.devicePixelRatio),this.camera=new r.cPb(this.cameraState.fov,this.cameraState.aspect,this.cameraState.near,this.cameraState.far),this.camera.position.set(0,0,1e3),this.camera.lookAt(this.cameraState.lookAt),this.scene.add(this.camera),e.appendChild(this.renderer.domElement),new a.z(this.camera,this.renderer.domElement);const t=new r.VLJ(5e3,100,65280,65433);this.scene.add(t)}getScene=()=>this.scene;getCamera=()=>this.camera;onResize=()=>{null!=this.renderer&&null!=this.camera&&(this.wSize.w=window.innerWidth,this.wSize.h=window.innerHeight,this.cameraState.aspect=this.wSize.w/this.wSize.h,this.camera.aspect=this.cameraState.aspect,this.camera.lookAt(this.cameraState.lookAt),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.wSize.w,this.wSize.h),this.renderer.setPixelRatio(window.devicePixelRatio))};onRender=()=>{null!=this.scene&&null!=this.renderer&&null!=this.camera&&this.renderer.render(this.scene,this.camera)}}var s=i(223),o=i.n(s),h=i(612),c=i.n(h);window.addEventListener("DOMContentLoaded",(()=>{console.log("start...");const e=document.querySelector("#root-canvas");if(null!=e){const t=new n(e),i=t.getScene(),a=new r.Kj0(new r.DvJ(300,300,300),new r.jyz({vertexShader:o(),fragmentShader:c(),wireframe:!1}));a.position.set(0,0,0),i.add(a);const s=new r.Ox3(16777215,1);s.position.set(0,0,1e4),i.add(s);const h=new r.PMe(16777215,2,2e3,90);h.position.set(0,0,0),i.add(h),window.addEventListener("resize",t.onResize);const d=()=>{window.requestAnimationFrame((()=>d())),a.rotation.x+=.01,a.rotation.y+=.01,t.onRender()};d()}}))},612:e=>{e.exports="varying vec2 vUv;\n\nvoid main() {\n  gl_FragColor = vec4(1.0, vUv, 1.0);\n}"},223:e=>{e.exports="// uniform mat4 modelViewMatrix;\n// uniform mat4 projectionMatrix;\n// attribute vec3 position;\n// attribute vec2 uv;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 pos = modelViewMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * pos;\n\n  vUv = uv;\n} "}},i={};function r(e){var a=i[e];if(void 0!==a)return a.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,i,a,n)=>{if(!i){var s=1/0;for(d=0;d<e.length;d++){for(var[i,a,n]=e[d],o=!0,h=0;h<i.length;h++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](i[h])))?i.splice(h--,1):(o=!1,n<s&&(s=n));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,a,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var a,n,[s,o,h]=i,c=0;if(s.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(h)var d=h(r)}for(t&&t(i);c<s.length;c++)n=s[c],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},i=self.webpackChunkvanilla_three21=self.webpackChunkvanilla_three21||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var a=r.O(void 0,[998],(()=>r(306)));a=r.O(a)})();