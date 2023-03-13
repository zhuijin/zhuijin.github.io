var d=Object.defineProperty;var _=(i,t,e)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var h=(i,t,e)=>(_(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const a=i=>{let t=null,e=null,s=null;const n=(...r)=>{e=r,s=i,t===null&&(t=window.requestAnimationFrame(()=>{t=null,e=null,s=null,i(...r)}))};return n.flush=()=>{if(t!==null&&(cancelAnimationFrame(t),t=null),e){const r=e,o=s;e=null,s=null,o!==null&&o(...r)}},n.cancel=()=>{e=null,s=null,t!==null&&(cancelAnimationFrame(t),t=null)},n},c=i=>{const t=Math.floor(i/3600),e=Math.floor((i-t*3600)/60),s=Math.floor(i-t*3600-e*60),n=`${t.toString().padStart(2,"0")}`;return`${n==="00"?"":n+":"}${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`},u=()=>{const i=document.documentElement;i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen?i.webkitRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen()},v=()=>{const i=document;i.exitFullscreen?i.exitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitCancelFullScreen?i.webkitCancelFullScreen():i.msExitFullscreen&&i.msExitFullscreen()},l=()=>{const i=document;return!!(i.mozFullScreen||i.webkitIsFullScreen||i.webkitFullScreen||i.msFullScreen)};class f{constructor(t,e,s){h(this,"_canvas");h(this,"_ctx");h(this,"_video");h(this,"_x",0);h(this,"_y",0);h(this,"_width",0);h(this,"_height",0);h(this,"progressWidth",320-40);h(this,"controlX",20);h(this,"controlY",200-80);h(this,"playBtnActive",!1);h(this,"progressActive",!1);h(this,"fullScreenActive",!1);h(this,"progress",0);h(this,"loadProgress",0);h(this,"_autoRender",!1);this._canvas=t,this._ctx=e,this._video=s}init(){const t=this._video.clientWidth,e=this._video.clientHeight,s=this._canvas.width,n=this._canvas.height,r=e/t;s*r<=n?(this._width=s,this._height=s*r,this._x=0,this._y=(n-this._height)/2):(this._width=n/r,this._height=n,this._x=(s-this._width)/2,this._y=0),this.progressWidth=this._canvas.width-40,this.controlX=20,this.controlY=this._canvas.height-80}set autoRender(t){this._autoRender=t}clear(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}render(){this._video&&(this.clear(),this._ctx.fillStyle="#000000",this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height),this._ctx.drawImage(this._video,this._x,this._y,this._width,this._height),this._renderControl())}_renderControl(){this.renderControlBg(),this.renderPlayBtn(),this.renderPauseBtn(),this.renderProgress(),this.renderTime(),this.renderFullScreen()}startRender(){this._autoRender=!0,window.requestAnimationFrame(()=>{this._autoRender&&(this.render(),this.startRender())})}stopRender(){this._autoRender=!1}renderControlBg(){this._ctx.save();const t=this._ctx.createLinearGradient(this._canvas.width/2,this._canvas.height,this._canvas.width/2,this.controlY);t.addColorStop(0,"#000000b0"),t.addColorStop(1,"#00000000"),this._ctx.fillStyle=t,this._ctx.fillRect(0,this.controlY,this._canvas.width,80),this._ctx.restore()}renderPlayBtn(){!this._video.paused||(this._ctx.save(),this._ctx.translate(this.controlX+10,this.controlY+50),this._ctx.globalAlpha=this.playBtnActive?1:.8,this._ctx.lineCap="round",this._ctx.lineWidth=2,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(0,12),this._ctx.lineTo(10.392,6),this._ctx.closePath(),this._ctx.stroke(),this._ctx.restore())}renderPauseBtn(){this._video.paused||(this._ctx.save(),this._ctx.translate(this.controlX+10,this.controlY+50),this._ctx.globalAlpha=this.playBtnActive?1:.8,this._ctx.lineCap="round",this._ctx.lineWidth=2,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(2,0),this._ctx.lineTo(2,12),this._ctx.moveTo(10,0),this._ctx.lineTo(10,12),this._ctx.stroke(),this._ctx.restore())}renderProgress(){this._ctx.save(),this._ctx.translate(this.controlX,this.controlY+35),this._ctx.globalAlpha=.3,this._ctx.lineCap="round",this._ctx.lineWidth=4,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth,0),this._ctx.stroke(),this.progressActive&&(this._ctx.fillStyle="#ffffff",this._ctx.globalAlpha=1,this._ctx.beginPath(),this._ctx.arc(this.progressWidth*this.progress,0,5,0,360),this._ctx.fill()),this._ctx.globalAlpha=.5,this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth*this.loadProgress,0),this._ctx.stroke(),this._ctx.globalAlpha=1,this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth*this.progress,0),this._ctx.stroke(),this._ctx.restore()}renderTime(){this._ctx.save(),this._ctx.translate(this.controlX,this.controlY+50),this._ctx.fillStyle="#ffffff",this._ctx.font="12px sans-serif";const t=c(this._video.currentTime),e=c(this._video.duration);this._ctx.fillText(`${t} / ${e}`,40,11),this._ctx.restore()}renderFullScreen(){this._ctx.save(),this._ctx.translate(this._canvas.width-this.controlX-22,this.controlY+50),this._ctx.globalAlpha=this.fullScreenActive?1:.8,this._ctx.lineCap="round",this._ctx.lineWidth=2,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),l()?(this._ctx.moveTo(0,3),this._ctx.lineTo(3,3),this._ctx.lineTo(3,0),this._ctx.moveTo(9,0),this._ctx.lineTo(9,3),this._ctx.lineTo(12,3),this._ctx.moveTo(12,9),this._ctx.lineTo(9,9),this._ctx.lineTo(9,12),this._ctx.moveTo(3,12),this._ctx.lineTo(3,9),this._ctx.lineTo(0,9)):(this._ctx.moveTo(0,3),this._ctx.lineTo(0,0),this._ctx.lineTo(3,0),this._ctx.moveTo(9,0),this._ctx.lineTo(12,0),this._ctx.lineTo(12,3),this._ctx.moveTo(12,9),this._ctx.lineTo(12,12),this._ctx.lineTo(9,12),this._ctx.moveTo(3,12),this._ctx.lineTo(0,12),this._ctx.lineTo(0,9)),this._ctx.stroke(),this._ctx.restore()}}class x{constructor(t,e){h(this,"_video");h(this,"_draw");this._video=t,this._draw=e,this._video.addEventListener("play",()=>{this._draw.startRender()}),this._video.addEventListener("pause",()=>{this._draw.stopRender()}),this._video.addEventListener("ended",()=>{this._draw.stopRender(),this._draw.render()}),this._video.addEventListener("timeupdate",()=>{this._draw.progress=this._video.currentTime/this._video.duration,this._video.buffered.length>0&&(this._draw.loadProgress=this._video.buffered.end(0)/this._video.duration)})}add(t,e){this._video.addEventListener(t,e)}remove(t,e){this._video.removeEventListener(t,e)}}class p{constructor(t,e,s){h(this,"_container");h(this,"_video");h(this,"_canvas");h(this,"_ctx");h(this,"_draw");h(this,"_listener");h(this,"_width");h(this,"_height");h(this,"oncanplay");h(this,"_updateDebounce");h(this,"_renderInterval",0);h(this,"_renderTimeout",0);this._container=t,this._updateDebounce=null,this._width=e||320,this._height=s||200,this.oncanplay=null;const{canvas:n,ctx:r}=this._createCanvas();this._canvas=n,this._ctx=r,this._video=this._initVideo(),this._draw=new f(this._canvas,this._ctx,this._video),this._listener=new x(this._video,this._draw),this._canvas.addEventListener("mousemove",a(this._mousemove.bind(this))),this._canvas.addEventListener("mousedown",a(this._mousedown.bind(this))),this._canvas.addEventListener("mouseenter",a(this._mouseenter.bind(this))),this._canvas.addEventListener("mouseleave",a(this._mouseleave.bind(this))),window.addEventListener("mouseout",this._leaveRender.bind(this)),window.addEventListener("blur",this._leaveRender.bind(this))}_createCanvas(){const t=document.createElement("canvas");t.style.width=`${this._width}px`,t.style.height=`${this._height}px`,t.style.zIndex="100000",t.style.transition="0.3s all",this._container.appendChild(t);const e=window.devicePixelRatio;t.width=this._width*e,t.height=this._height*e;const s=t.getContext("2d",{willReadFrequently:!0});return s.scale(e,e),{ctx:s,canvas:t}}_resetCanvas(t,e){this._canvas.style.width=`${t}px`,this._canvas.style.height=`${e}px`;const s=window.devicePixelRatio;this._canvas.width=t*s,this._canvas.height=e*s,this._ctx.scale(s,s),this._draw.init(),this._draw.render()}_initVideo(){const t=document.createElement("video");return t.style.visibility="hidden",t.style.position="absolute",t.style.zIndex="-1000",document.body.appendChild(t),t.oncanplay=()=>{setTimeout(()=>{this._draw.init(),this._draw.render(),this.oncanplay&&this.oncanplay()},100)},t}_mousedown(t){const e=t.offsetX,s=t.offsetY,n=e>=0&&s>=0&&e<=this._canvas.width&&s<=this._canvas.height-60;if(this._draw.playBtnActive||n)this._video.paused?this.play():this.pause(),this._draw.render();else if(this._draw.progressActive){const r=(e-20)/this._draw.progressWidth;this._video.currentTime=this._video.duration*r}else this._draw.fullScreenActive&&(l()?(v(),this._canvas.style.position="relative",setTimeout(()=>{this._resetCanvas(this._width,this._height)},300)):(u(),this._canvas.style.position="absolute",setTimeout(()=>{this._resetCanvas(window.innerWidth,window.innerHeight)},300)))}_leaveRender(){(this._draw.playBtnActive||this._draw.progressActive||this._draw.fullScreenActive)&&(this._canvas.style.cursor="default",this._draw.fullScreenActive=!1,this._draw.playBtnActive=!1,this._draw.progressActive=!1,this._draw.render())}_mouseenter(){clearInterval(this._renderInterval),clearTimeout(this._renderTimeout),this._draw.controlY=this._canvas.height-80,this._draw.render()}_mouseleave(){this._video.paused||(this._renderTimeout=setTimeout(()=>{clearInterval(this._renderInterval),this._renderInterval=setInterval(()=>{this._draw.controlY<this._canvas.height+10?this._draw.controlY+=3:clearInterval(this._renderInterval)},30)},3e3))}_mousemove(t){const e=t.offsetX,s=t.offsetY;e>=30&&e<41&&s>=this._canvas.height-30&&s<=this._canvas.height-30+12?this._draw.playBtnActive||(this._canvas.style.cursor="pointer",this._draw.playBtnActive=!0,this._draw.render()):e>=20&&e<=this._canvas.width-20&&s>=this._canvas.height-50&&s<=this._canvas.height-50+8?this._draw.progressActive||(this._canvas.style.cursor="pointer",this._draw.progressActive=!0,this._draw.render()):e<=this._canvas.width-30&&e>=this._canvas.width-30-12&&s<=this._canvas.height-30+12&&s>=this._canvas.height-30?this._draw.fullScreenActive||(this._canvas.style.cursor="pointer",this._draw.fullScreenActive=!0,this._draw.render()):this._leaveRender()}play(){this._video.play()}pause(){this._video.pause()}addEventListener(t,e){this._listener.add(t,e)}removeEventListener(t,e){this._listener.remove(t,e)}get width(){return this._width}set width(t){this._width=t,this._debounce(this._resetCanvas.bind(this,t,this._height))}get height(){return this._height}set height(t){this._height=t,this._debounce(this._resetCanvas.bind(this,this._width,t))}get src(){return this._video.src}set src(t){this._video.src=t}get paused(){return this._video.paused}_debounce(t){this._updateDebounce&&(clearTimeout(this._updateDebounce),this._updateDebounce=null),this._updateDebounce=setTimeout(()=>{t(),this._updateDebounce=null},300)}}window.onload=()=>{const i=document.querySelector("#video");if(i){const t=new p(i,600,400);t.src="./video.mp4"}};
