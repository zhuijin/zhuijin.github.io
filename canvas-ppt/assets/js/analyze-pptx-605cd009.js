var t=Object.defineProperty,e=(e,i,s)=>(((e,i,s)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s})(e,"symbol"!=typeof i?i+"":i,s),s);import{J as i}from"./jszip-d3992526.js";import{X as s}from"./x2js-dc120f56.js";import{h as l}from"./d3-color-e929203e.js";class r{constructor(t){e(this,"_theme"),this._theme=t.theme.themeElements}get theme(){return this._theme}}class o{constructor(t,i){var s,r,o,a,n;if(e(this,"color",""),e(this,"_val",""),e(this,"alpha","100000"),t.schemeClr){this._val=t.schemeClr._val,this.alpha=null==(s=t.schemeClr.alpha)?void 0:s._val;const e=null==(r=i.clrScheme[this._val])?void 0:r.srgbClr;if(e){this.color=("#"+e._val).toLocaleUpperCase();let i=l(this.color);if(t.schemeClr.lumMod||t.schemeClr.lumOff){const e=(+(null==(o=t.schemeClr.lumMod)?void 0:o._val)||0)/1e5,s=(+(null==(a=t.schemeClr.lumOff)?void 0:a._val)||0)/1e5;0!=s&&(i.l=100*(i.l*(e/100)+s/100))}if(t.schemeClr.tint){const e=+t.schemeClr.tint._val/1e3,s=i.rgb();s.r=s.r*e/100+255*(1-e/100),s.g=s.g*e/100+255*(1-e/100),s.b=s.b*e/100+255*(1-e/100),i=l(s)}this.color=i.hex().toLocaleUpperCase()}}else t.srgbClr?(this.alpha=null==(n=t.srgbClr.alpha)?void 0:n._val,this.color=("#"+t.srgbClr._val).toLocaleUpperCase()):t.prstClr&&(this.color=t.prstClr._val)}}class a extends o{constructor(t,e){super(t,e)}}class n{constructor(t,i){e(this,"_blipFill"),e(this,"_relationships"),this._blipFill=t,this._relationships=i}get src(){const t=this._blipFill.blip["_r:embed"],e=this._relationships.find((e=>e._Id===t));return(null==e?void 0:e._Target)||""}get opacity(){var t;return+((null==(t=this._blipFill.blip.alphaModFix)?void 0:t._amt)||0)/1e3}get stretch(){return this._blipFill.stretch}get tile(){return this._blipFill.tile}}class h{constructor(t,i){e(this,"_gradFill"),e(this,"_theme"),this._gradFill=t,this._theme=i}get color(){return this._gradFill.gsLst.gs.map((t=>{const e=new a(t,this._theme);let i=e.color;if(e.alpha){const t=+e.alpha/1e5;i=(i+Math.floor(255*t).toString(16)).toLocaleUpperCase()}return i?{pos:t._pos,value:i}:{}})).filter((t=>!!t.value))}get rotate(){if(this._gradFill.lin){const t=+(this._gradFill.lin._ang||0)/6e4-90;return t<0?360+t:t}return 0}get type(){return this._gradFill.lin?"linear":this._gradFill.path?"radial":"linear"}}class c{constructor(t,i,s){e(this,"_type","solid"),e(this,"_solidFill",null),e(this,"_blipFill",null),e(this,"_gradFill",null),e(this,"_relationships"),this._relationships=s,t.bgPr.solidFill&&(this._solidFill=new a(t.bgPr.solidFill,i),this._type="solid"),t.bgPr.blipFill&&(this._blipFill=new n(t.bgPr.blipFill,this._relationships),this._type="image"),t.bgPr.gradFill&&(this._gradFill=new h(t.bgPr.gradFill,i),this._type="gradient")}get type(){return this._type}get color(){let t=this._solidFill.color;if(this._solidFill.alpha){const e=+this._solidFill.alpha/1e5;t=(t+Math.floor(255*e).toString(16)).toLocaleUpperCase()}return t||""}get gradientColor(){var t;return null==(t=this._gradFill)?void 0:t.color.map((t=>({offset:+t.pos/1e5,value:t.value})))}get gradientType(){return this._gradFill.type}get gradientRotate(){return this._gradFill.rotate}get imageSrc(){var t;return(null==(t=this._blipFill)?void 0:t.src.replace("..","ppt"))||""}get stretch(){var t;return(null==(t=this._blipFill)?void 0:t.stretch)||""}get tile(){var t;return(null==(t=this._blipFill)?void 0:t.tile)||""}}class p{constructor(t,i){e(this,"_style"),e(this,"_theme"),this._style=t,this._theme=i}get fill(){if(this._style&&this._style.fillRef){return new a(this._style.fillRef,this._theme).color}return""}get ln(){if(this._style&&this._style.lnRef){return new a(this._style.lnRef,this._theme).color}return""}}const d=(t=6)=>{const e="_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let s=0;s<t;s++){i+=e[Math.floor(63*Math.random())]}return i},_=t=>{if(!isNaN(t))return+t/12700/3*4},f=(t=0)=>Math.round(t/6e4);var g,m;(m=g||(g={})).rect="rect",m.roundRect="rectRadius",m.snip1Rect="rectMinusSingleAngle",m.snip2SameRect="rectMinusSameSideAngle",m.snip2DiagRect="rectMinusOppositeAngle",m.snipRoundRect="rectSingleRadiusMinusSingleAngle",m.round1Rect="rectSingleRadius",m.round2SameRect="rectSameSideRadius",m.round2DiagRect="rectOppositeRadius",m.ellipse="oval",m.triangle="triangle",m.rtTriangle="rightTriangle",m.parallelogram="parallelogram",m.trapezoid="trapezoidal",m.diamond="diamond",m.pentagon="pentagon",m.hexagon="hexagon",m.heptagon="heptagon",m.octagon="octagon",m.decagon="decagon",m.dodecagon="dodecagon",m.pie="pieShape",m.chord="chordShape",m.teardrop="teardropShape",m.frame="frameShape",m.halfFrame="halfClosedFrameShape",m.corner="horn",m.diagStripe="twill",m.plus="cross",m.plaque="cutawayRectangle",m.donut="ring";class u{constructor(t,i){e(this,"_sps",[]),e(this,"_theme"),e(this,"_ctx"),this._theme=i;const s=t instanceof Array;this._sps=s?t:[t];const l=document.createElement("canvas");l.style.width="100px",l.style.height="100px";const r=window.devicePixelRatio;l.width=100*r,l.height=100*r,this._ctx=l.getContext("2d",{willReadFrequently:!0}),this._ctx.scale(r,r)}getFontSize(t){this._ctx.font=`${t.fontStyle} ${t.fontWeight} ${t.fontSize}px ${t.fontFamily}`;const e=this._ctx.measureText(t.value);return{width:e.width,height:e.actualBoundingBoxAscent+e.actualBoundingBoxDescent}}get shapes(){var t,e,i;const s=[];for(const l of this._sps){const r=l.spPr.xfrm;let n;if(l.nvSpPr.cNvSpPr._txBox?n={id:d(),type:"text",left:_(r.off._x),top:_(r.off._y),width:_(r.ext._cx),height:_(r.ext._cy),rotate:Math.floor(+(r._rot||"0")/6e4),name:l.nvSpPr.cNvPr._name,align:"left",wordSpace:0,lineHeight:1,content:[]}:(n={id:d(),fixedRatio:!1,left:_(r.off._x),top:_(r.off._y),width:_(r.ext._cx),height:_(r.ext._cy),rotate:Math.floor(+(r._rot||"0")/6e4),type:"shape",name:l.nvSpPr.cNvPr._name,shape:g[null==(t=l.spPr.prstGeom)?void 0:t._prst]||"rect",content:[]},l.nvSpPr.cNvSpPr.spLocks&&(n.fixedRatio=!0)),l.txBody.p.r){const t=[];let i=[];i=l.txBody.p.r instanceof Array?l.txBody.p.r:[l.txBody.p.r];for(const l of i){let i="#000";if(l.rPr.solidFill){const t=new a(l.rPr.solidFill,this._theme);if(i=t.color,t.alpha){const e=+t.alpha/1e5;i=(i+Math.floor(255*e).toString(16)).toLocaleUpperCase()}}if(l.t.__text)for(const s of l.t.__text){const r={value:s,fontSize:+(l.rPr._sz||"1350")/100/3*4,width:12,height:12,fontStyle:l.rPr._i?"italic":"normal",fontWeight:l.rPr._b?"bold":"normal",fontFamily:(null==(e=l.rPr.latin)?void 0:e._typeface)||this._theme.fontScheme._name,fontColor:i,underline:!!l.rPr._u,strikout:!1},{width:o,height:a}=this.getFontSize(r);r.width=o,r.height=a,t.push(r)}}const s=t.length-1,r={fontSize:18,width:18,height:18,fontStyle:"normal",fontWeight:"normal",fontFamily:"楷体",fontColor:"#000",underline:!1,strikout:!1,...s>-1?t[s]:{},value:"\n"};t.push(r),n.content=t}const c=new p(l.style,this._theme);if(!l.spPr.noFill)if(l.spPr.solidFill){const t=new a(l.spPr.solidFill,this._theme),e=+t.alpha/1e3;n.fill={color:t.color,opacity:e}}else if(l.spPr.gradFill){const t=new h(l.spPr.gradFill,this._theme);n.gradient={type:t.type,color:t.color.map((t=>({offset:+t.pos/1e5,value:t.value}))),rotate:t.rotate}}else c.fill&&(n.fill={color:c.fill});if(l.spPr.ln){const t=l.spPr.ln;if(!t.noFill&&t.solidFill){const e=new a(t.solidFill,this._theme),i=+e.alpha/1e3,s=_(t._w||"12700");n.outline={color:e.color,opacity:i,width:s}}}else c.ln&&(n.outline={color:c.ln,width:_("12700")});if(r._flipH&&(n.flipH=-1),r._flipV&&(n.flipV=-1),null==(i=l.spPr.effectLst)?void 0:i.outerShdw){const t=l.spPr.effectLst.outerShdw,e=new o(t,this._theme),i=(e.color+Math.floor(255*+e.alpha/1e5).toString(16)).toLocaleUpperCase(),s=f(+t._dir||0),r=_(t._dist||0),a=r*Math.sin((90-s)/180*Math.PI),h=r*Math.sin(s/180*Math.PI);n.shadow={color:i,h:a,v:h,blur:_(t._blurRad||0)}}s.push(n)}return s}}class y{constructor(t,i){e(this,"_cxnSps"),e(this,"_theme"),this._theme=i;const s=t instanceof Array;this._cxnSps=s?t:[t]}get lines(){var t,e,i;const s=[];for(const l of this._cxnSps){const r=new p(l.style,this._theme),o={id:d(),left:_(l.spPr.xfrm.off._x),top:_(l.spPr.xfrm.off._y),start:[0,0],end:[_(l.spPr.xfrm.ext._cx),_(l.spPr.xfrm.ext._cy)],type:"line",name:l.nvCxnSpPr.cNvPr._name,style:"solid",color:r.ln,startStyle:"",endStyle:"",borderWidth:2,opacity:0};if(l.spPr.ln){const s=l.spPr.ln;if(s.solidFill){const t=new a(s.solidFill,this._theme);o.color=t.color,o.opacity=+t.alpha/1e3}o.style=(null==(t=s.prstDash)?void 0:t._val)||"solid",o.borderWidth=_(s._w||"12700"),o.startStyle=(null==(e=s.headEnd)?void 0:e._type)||"",o.endStyle=(null==(i=s.tailEnd)?void 0:i._type)||""}s.push(o)}return s}}class v{constructor(t,i,s){e(this,"_pics"),e(this,"_theme"),e(this,"_relationships"),this._theme=i,this._relationships=s;const l=t instanceof Array;this._pics=l?t:[t]}get pictures(){var t;const e=[];for(const i of this._pics){const s=i.spPr.xfrm,{videoFile:l,audioFile:r}=i.nvPicPr.nvPr,h={id:d(),fixedRatio:!1,left:_(s.off._x),top:_(s.off._y),width:_(s.ext._cx),height:_(s.ext._cy),type:l?"video":r?"audio":"image",name:i.nvPicPr.cNvPr._name,rotate:Math.floor(+(s._rot||"0")/6e4),streach:0,src:""};if(i.nvPicPr.cNvPicPr.picLocks&&(h.fixedRatio=!0),s._flipH&&(h.flipH=-1),s._flipV&&(h.flipV=-1),i.blipFill){const t=new n(i.blipFill,this._relationships);h.src=(null==t?void 0:t.src.replace("..","ppt"))||"",(l||r)&&(h.cover=h.src),h.opacity=t.opacity}if(l){const t=l["_r:link"],e=this._relationships.find((e=>e._Id===t));h.src=(null==e?void 0:e._Target.replace("..","ppt"))||""}if(r){const t=r["_r:link"],e=this._relationships.find((e=>e._Id===t));h.src=(null==e?void 0:e._Target.replace("..","ppt"))||""}if(i.spPr.solidFill){const t=new a(i.spPr.solidFill,this._theme),e=+t.alpha/1e3;h.fill={color:t.color,opacity:e}}if(i.spPr.ln){const t=i.spPr.ln;if(!t.noFill&&t.solidFill){const e=new a(t.solidFill,this._theme),i=+e.alpha/1e3,s=_(t._w||"12700");h.outline={color:e.color,opacity:i,width:s}}}if(null==(t=i.spPr.effectLst)?void 0:t.outerShdw){const t=i.spPr.effectLst.outerShdw,e=new o(t,this._theme),s=(e.color+Math.floor(255*+e.alpha/1e5).toString(16)).toLocaleUpperCase(),l=f(+t._dir||0),r=_(t._dist||0),a=r*Math.sin((90-l)/180*Math.PI),n=r*Math.sin(l/180*Math.PI);h.shadow={color:s,h:a,v:n,blur:_(t._blurRad||0)}}e.push(h)}return e}}class x{constructor(t,i,s,l){e(this,"_graphicFrames"),e(this,"_relationships"),e(this,"_zip"),e(this,"_x2js"),this._relationships=i,this._zip=s,this._x2js=l;const r=t instanceof Array;this._graphicFrames=r?t:[t]}dealSeries(t){let e=[];const i=[],s=[];for(const l of t)e=l.cat.strRef.strCache.pt.map((t=>t.v.__text)),i.push(l.tx.strRef.strCache.pt.v.__text),s.push(l.val.numRef.numCache.pt.map((t=>+t.v.__text)));return{labels:e,legends:i,series:s}}async getGraphicFrames(){const t=[];for(const e of this._graphicFrames){if(e.graphic.graphicData.chart){const i=e.graphic.graphicData.chart["_r:id"],s=this._relationships.find((t=>t._Id===i)),l=(null==s?void 0:s._Target.replace("..","ppt"))||"",r=await this._zip.file(l).async("string"),o=this._x2js.xml2js(r),a=e.xfrm,n={id:d(),fixedRatio:!1,left:_(a.off._x),top:_(a.off._y),width:_(a.ext._cx),height:_(a.ext._cy),type:"chart",chartType:"bar",axisTransformation:!1,src:"",streach:0,name:e.nvGraphicFramePr.cNvPr._name,rotate:Math.floor(+(a._rot||"0")/6e4),data:{labels:[],legends:[],series:[]}};if(o.chartSpace.chart.plotArea.barChart){const t=o.chartSpace.chart.plotArea.barChart;n.chartType="bar";const e=this.dealSeries(t.ser);n.axisTransformation="bar"===t.barDir._val,n.data=e}if(o.chartSpace.chart.plotArea.lineChart){const t=o.chartSpace.chart.plotArea.lineChart;n.chartType="line";const e=this.dealSeries(t.ser);n.data=e}if(o.chartSpace.chart.plotArea.pieChart){const t=o.chartSpace.chart.plotArea.pieChart;n.chartType="pie";const e=this.dealSeries([t.ser]);n.data=e}t.push(n)}e.graphic.graphicData.tbl}return t}}class S{constructor(t,i,s,l,r,o){e(this,"_slide"),e(this,"_relationships"),e(this,"_theme"),e(this,"_index",""),e(this,"_zip"),e(this,"_x2js"),this._slide=t,this._relationships=i.Relationships.Relationship,this._theme=s,this._index=l,this._zip=r,this._x2js=o}async getSlide(){let t;if(this._slide.cSld.bg){const e=new c(this._slide.cSld.bg,this._theme,this._relationships);if(t={type:e.type},"solid"===e.type&&(t.color=e.color),"image"===e.type){const i=e.imageSrc.replace(/.+\./,""),s=await this._zip.file(e.imageSrc).async("base64");t.image=`data:image/${i};base64,`+s,t.imageSize=e.stretch?"cover":"repeat"}"gradient"===e.type&&(t.gradientColor=e.gradientColor,t.gradientType=e.gradientType,t.gradientRotate=e.gradientRotate)}let e=[];if(this._slide.cSld.spTree.sp){const t=new u(this._slide.cSld.spTree.sp,this._theme);e=e.concat(t.shapes)}if(this._slide.cSld.spTree.cxnSp){const t=new y(this._slide.cSld.spTree.cxnSp,this._theme);e=e.concat(t.lines)}if(this._slide.cSld.spTree.pic){const t=new v(this._slide.cSld.spTree.pic,this._theme,this._relationships).pictures;for(const e of t){const t=e.src.replace(/.+\./,"");if("image"===e.type){const i=await this._zip.file(e.src).async("base64");e.src=`data:image/${t};base64,`+i}else{if(e.cover){const t=e.cover.replace(/.+\./,""),i=await this._zip.file(e.cover).async("base64");e.cover=`data:image/${t};base64,`+i}const i=await this._zip.file(e.src).async("base64");e.src=`data:${e.type}/${t};base64,`+i}}e=e.concat(t)}if(this._slide.cSld.spTree.graphicFrame){const t=new x(this._slide.cSld.spTree.graphicFrame,this._relationships,this._zip,this._x2js),i=await t.getGraphicFrames();e=e.concat(i)}return console.log(this._index,this._slide),{id:d(),elements:e,...t?{background:t}:{}}}}class F{constructor(){e(this,"slides",[])}async read(t){const e=new s,l=new i,o=await l.loadAsync(t),a={};for(const i in o.files)if(!o.files[i].dir){const t=o.files[i].name;if(/.xml$/.test(t)||/.rels$/.test(t)){const s=await o.file(o.files[i].name).async("string");a[t]=e.xml2js(s)}}const n=a["ppt/theme/theme1.xml"],h=new r(n).theme,c=[];try{for(const t in a)if(/ppt\/slides\/slide[\d]+.xml$/.test(t)){const i=/\d+/.exec(t)[0],s=`ppt/slides/_rels/slide${i}.xml.rels`,l=new S(a[t].sld,a[s],h,i,o,e),r=await l.getSlide();c.push(r)}return c}catch(p){return console.error(p),c}}}export{F as A};