var c=Object.defineProperty;var _=(r,t,e)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var h=(r,t,e)=>(_(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const a=r=>{let t=null,e=null,s=null;const i=(...n)=>{e=n,s=r,t===null&&(t=window.requestAnimationFrame(()=>{t=null,e=null,s=null,r(...n)}))};return i.flush=()=>{if(t!==null&&(cancelAnimationFrame(t),t=null),e){const n=e,o=s;e=null,s=null,o!==null&&o(...n)}},i.cancel=()=>{e=null,s=null,t!==null&&(cancelAnimationFrame(t),t=null)},i},d=r=>{const t=Math.floor(r/3600),e=Math.floor((r-t*3600)/60),s=Math.floor(r-t*3600-e*60),i=`${t.toString().padStart(2,"0")}`;return`${i==="00"?"":i+":"}${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`};class l{constructor(t,e,s){h(this,"_canvas");h(this,"_ctx");h(this,"_video");h(this,"_x",0);h(this,"_y",0);h(this,"_width",0);h(this,"_height",0);h(this,"progressWidth",320-40);h(this,"_controlX",20);h(this,"_controlY",200-80);h(this,"playBtnActive",!1);h(this,"progressActive",!1);h(this,"progress",0);h(this,"loadProgress",0);h(this,"_autoRender",!1);this._canvas=t,this._ctx=e,this._video=s}init(){const t=this._video.clientWidth,e=this._video.clientHeight,s=this._canvas.width,i=this._canvas.height,n=e/t;s*n<=i?(this._width=s,this._height=s*n,this._x=0,this._y=(i-this._height)/2):(this._width=i/n,this._height=i,this._x=(s-this._width)/2,this._y=0),this.progressWidth=this._canvas.width-40,this._controlX=20,this._controlY=this._canvas.height-80}set autoRender(t){this._autoRender=t}clear(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}render(){this._video&&(this.clear(),this._ctx.drawImage(this._video,this._x,this._y,this._width,this._height),this.renderControlBg(),this.renderPlayBtn(),this.renderPauseBtn(),this.renderProgress(),this.renderTime(),console.log("render"))}startRender(){this._autoRender=!0,window.requestAnimationFrame(()=>{this._autoRender&&(this.render(),this.startRender())})}stopRender(){this._autoRender=!1}renderControlBg(){this._ctx.save();const t=this._ctx.createLinearGradient(this._canvas.width/2,this._canvas.height,this._canvas.width/2,this._controlY);t.addColorStop(0,"#000000b0"),t.addColorStop(1,"#00000000"),this._ctx.fillStyle=t,this._ctx.fillRect(0,this._controlY,this._canvas.width,80),this._ctx.restore()}renderPlayBtn(){!this._video.paused||(this._ctx.save(),this._ctx.translate(this._controlX+10,this._controlY+50),this._ctx.globalAlpha=this.playBtnActive?1:.8,this._ctx.lineCap="round",this._ctx.lineWidth=2,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(0,12),this._ctx.lineTo(10.392,6),this._ctx.closePath(),this._ctx.stroke(),this._ctx.restore())}renderPauseBtn(){this._video.paused||(this._ctx.save(),this._ctx.translate(this._controlX+10,this._controlY+50),this._ctx.globalAlpha=this.playBtnActive?1:.8,this._ctx.lineCap="round",this._ctx.lineWidth=2,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(2,0),this._ctx.lineTo(2,12),this._ctx.moveTo(10,0),this._ctx.lineTo(10,12),this._ctx.stroke(),this._ctx.restore())}renderProgress(){this._ctx.save(),this._ctx.translate(this._controlX,this._controlY+35),this._ctx.globalAlpha=.3,this._ctx.lineCap="round",this._ctx.lineWidth=4,this._ctx.strokeStyle="#ffffff",this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth,0),this._ctx.stroke(),this.progressActive&&(this._ctx.fillStyle="#ffffff",this._ctx.globalAlpha=1,this._ctx.beginPath(),this._ctx.arc(this.progressWidth*this.progress,0,5,0,360),this._ctx.fill()),this._ctx.globalAlpha=.5,this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth*this.loadProgress,0),this._ctx.stroke(),this._ctx.globalAlpha=1,this._ctx.beginPath(),this._ctx.moveTo(0,0),this._ctx.lineTo(this.progressWidth*this.progress,0),this._ctx.stroke(),this._ctx.restore()}renderTime(){this._ctx.save(),this._ctx.translate(this._controlX,this._controlY+50),this._ctx.fillStyle="#ffffff",this._ctx.font="12px sans-serif";const t=d(this._video.currentTime),e=d(this._video.duration);this._ctx.fillText(`${t} / ${e}`,40,11),this._ctx.restore()}}class u{constructor(t,e){h(this,"_video");h(this,"_draw");this._video=t,this._draw=e,this._video.addEventListener("play",()=>{this._draw.startRender()}),this._video.addEventListener("pause",()=>{this._draw.stopRender()}),this._video.addEventListener("ended",()=>{this._draw.stopRender(),this._draw.render()}),this._video.addEventListener("timeupdate",()=>{this._draw.progress=this._video.currentTime/this._video.duration,this._video.buffered.length>0&&(this._draw.loadProgress=this._video.buffered.end(0)/this._video.duration)})}add(t,e){this._video.addEventListener(t,e)}remove(t,e){this._video.removeEventListener(t,e)}}class v{constructor(t,e,s){h(this,"_container");h(this,"_video");h(this,"_canvas");h(this,"_ctx");h(this,"_draw");h(this,"_listener");h(this,"_width");h(this,"_height");h(this,"oncanplay");h(this,"_updateDebounce");this._container=t,this._updateDebounce=null,this._width=e||320,this._height=s||200,this.oncanplay=null;const{canvas:i,ctx:n}=this._createCanvas();this._canvas=i,this._ctx=n,this._video=this._initVideo(),this._draw=new l(this._canvas,this._ctx,this._video),this._listener=new u(this._video,this._draw),this._canvas.addEventListener("mousemove",a(this._mousemove.bind(this))),this._canvas.addEventListener("mousedown",a(this._mousedown.bind(this))),window.addEventListener("mouseout",this._leaveRender.bind(this)),window.addEventListener("blur",this._leaveRender.bind(this))}_createCanvas(){const t=document.createElement("canvas");t.style.width=`${this._width}px`,t.style.height=`${this._height}px`,this._container.appendChild(t);const e=window.devicePixelRatio;t.width=this._width*e,t.height=this._height*e;const s=t.getContext("2d",{willReadFrequently:!0});return s.scale(e,e),{ctx:s,canvas:t}}_resetCanvas(){this._canvas.style.width=`${this._width}px`,this._canvas.style.height=`${this._height}px`;const t=window.devicePixelRatio;this._canvas.width=this._width*t,this._canvas.height=this._height*t,this._ctx.scale(t,t),this._draw.init(),this._draw.render()}_initVideo(){const t=document.createElement("video");return t.style.visibility="hidden",t.style.position="absolute",t.style.zIndex="-1000",document.body.appendChild(t),t.oncanplay=()=>{setTimeout(()=>{this._draw.init(),this._draw.render(),this.oncanplay&&this.oncanplay()},100)},t}_mousedown(t){const e=t.offsetX,s=t.offsetY,i=e>=0&&s>=0&&e<=this._canvas.width&&s<=this._canvas.height-60;if(this._draw.playBtnActive||i)this._video.paused?this.play():this.pause(),this._draw.render();else if(this._draw.progressActive){const n=(e-20)/this._draw.progressWidth;this._video.currentTime=this._video.duration*n}}_leaveRender(){(this._draw.playBtnActive||this._draw.progressActive)&&(this._canvas.style.cursor="default",this._draw.playBtnActive=!1,this._draw.progressActive=!1,this._draw.render())}_mousemove(t){const e=t.offsetX,s=t.offsetY;e>=30&&e<41&&s>=this._canvas.height-30&&s<=this._canvas.height-30+12?this._draw.playBtnActive||(this._canvas.style.cursor="pointer",this._draw.playBtnActive=!0,this._draw.render()):e>=20&&e<=this._canvas.width-20&&s>=this._canvas.height-50&&s<=this._canvas.height-50+8?this._draw.progressActive||(this._canvas.style.cursor="pointer",this._draw.progressActive=!0,this._draw.render()):this._leaveRender()}play(){this._video.play()}pause(){this._video.pause()}addEventListener(t,e){this._listener.add(t,e)}removeEventListener(t,e){this._listener.remove(t,e)}get width(){return this._width}set width(t){this._width=t,this._debounce(this._resetCanvas.bind(this))}get height(){return this._height}set height(t){this._height=t,this._debounce(this._resetCanvas.bind(this))}get src(){return this._video.src}set src(t){this._video.src=t}get paused(){return this._video.paused}_debounce(t){this._updateDebounce&&(clearTimeout(this._updateDebounce),this._updateDebounce=null),this._updateDebounce=setTimeout(()=>{t(),this._updateDebounce=null},300)}}window.onload=()=>{const r=document.querySelector("#video");if(r){const t=new v(r,600,400);t.src="./video.mp4"}};
