var a=Object.defineProperty,e=(e,n,t)=>(((e,n,t)=>{n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!=typeof n?n+"":n,t),t);import{d as n,U as t,V as i,F as r,W as o,u as g,X as l,Y as s,l as c,n as p,o as u,b as d,c as y,S as h}from"./@vue-1c025e39.js";import{a0 as m}from"./@ant-design-e3f1f052.js";import{m as O,A as f}from"./ant-design-vue-c42be130.js";import"./@ctrl-4982d949.js";import"./@babel-ffde0202.js";import"./resize-observer-polyfill-0806acab.js";import"./vue-types-6bcea8eb.js";import"./dom-align-8ffb71ea.js";import"./lodash-es-31e57f84.js";import"./dayjs-26ee319a.js";import"./async-validator-8d480e59.js";import"./scroll-into-view-if-needed-2e4c95c3.js";import"./compute-scroll-into-view-2962e95c.js";!function(){const a=document.createElement("link").relList;if(!(a&&a.supports&&a.supports("modulepreload"))){for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver((a=>{for(const n of a)if("childList"===n.type)for(const a of n.addedNodes)"LINK"===a.tagName&&"modulepreload"===a.rel&&e(a)})).observe(document,{childList:!0,subtree:!0})}function e(a){if(a.ep)return;a.ep=!0;const e=function(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),"use-credentials"===a.crossOrigin?e.credentials="include":"anonymous"===a.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(a);fetch(a.href,e)}}();const T=[{name:"Attention seekers",children:[{name:"bounce",duration:1e3},{name:"flash",duration:1e3},{name:"pulse",duration:1e3},{name:"rubberBand",duration:1e3},{name:"shakeX",duration:1e3},{name:"shakeY",duration:1e3},{name:"headShake",duration:1e3},{name:"swing",duration:1e3},{name:"tada",duration:1e3},{name:"wobble",duration:1e3},{name:"jello",duration:1e3},{name:"heartBeat",duration:1300}]},{name:"Back entrances",children:[{name:"backInDown",duration:1e3},{name:"backInLeft",duration:1e3},{name:"backInRight",duration:1e3},{name:"backInUp",duration:1e3}]},{name:"Back exits",children:[{name:"backOutDown",duration:1e3},{name:"backOutLeft",duration:1e3},{name:"backOutRight",duration:1e3},{name:"backOutUp",duration:1e3}]},{name:"Bouncing entrances",children:[{name:"bounceIn",duration:750},{name:"bounceInDown",duration:1e3},{name:"bounceInLeft",duration:1e3},{name:"bounceInRight",duration:1e3},{name:"bounceInUp",duration:1e3}]},{name:"Bouncing exits",children:[{name:"bounceOut",duration:750},{name:"bounceOutDown",duration:1e3},{name:"bounceOutLeft",duration:1e3},{name:"bounceOutRight",duration:1e3},{name:"bounceOutUp",duration:1e3}]},{name:"Fading entrances",children:[{name:"fadeIn",duration:1e3},{name:"fadeInDown",duration:1e3},{name:"fadeInDownBig",duration:1e3},{name:"fadeInLeft",duration:1e3},{name:"fadeInLeftBig",duration:1e3},{name:"fadeInRight",duration:1e3},{name:"fadeInRightBig",duration:1e3},{name:"fadeInUp",duration:1e3},{name:"fadeInUpBig",duration:1e3},{name:"fadeInTopLeft",duration:1e3},{name:"fadeInTopRight",duration:1e3},{name:"fadeInBottomLeft",duration:1e3},{name:"fadeInBottomRight",duration:1e3}]},{name:"Fading exits",children:[{name:"fadeOut",duration:1e3},{name:"fadeOutDown",duration:1e3},{name:"fadeOutDownBig",duration:1e3},{name:"fadeOutLeft",duration:1e3},{name:"fadeOutLeftBig",duration:1e3},{name:"fadeOutRight",duration:1e3},{name:"fadeOutRightBig",duration:1e3},{name:"fadeOutUp",duration:1e3},{name:"fadeOutUpBig",duration:1e3},{name:"fadeOutTopLeft",duration:1e3},{name:"fadeOutTopRight",duration:1e3},{name:"fadeOutBottomRight",duration:1e3},{name:"fadeOutBottomLeft",duration:1e3}]},{name:"Flippers",children:[{name:"flip",duration:1e3},{name:"flipInX",duration:1e3},{name:"flipInY",duration:1e3},{name:"flipOutX",duration:750},{name:"flipOutY",duration:750}]},{name:"Lightspeed",children:[{name:"lightSpeedInRight",duration:1e3},{name:"lightSpeedInLeft",duration:1e3},{name:"lightSpeedOutRight",duration:1e3},{name:"lightSpeedOutLeft",duration:1e3}]},{name:"Rotating entrances",children:[{name:"rotateIn",duration:1e3},{name:"rotateInDownLeft",duration:1e3},{name:"rotateInDownRight",duration:1e3},{name:"rotateInUpLeft",duration:1e3},{name:"rotateInUpRight",duration:1e3}]},{name:"Rotating exits",children:[{name:"rotateOut",duration:1e3},{name:"rotateOutDownLeft",duration:1e3},{name:"rotateOutDownRight",duration:1e3},{name:"rotateOutUpLeft",duration:1e3},{name:"rotateOutUpRight",duration:1e3}]},{name:"Specials",children:[{name:"hinge",duration:2e3},{name:"jackInTheBox",duration:750},{name:"rollIn",duration:750},{name:"rollOut",duration:750}]},{name:"Zooming entrances",children:[{name:"zoomIn",duration:1e3},{name:"zoomInDown",duration:1e3},{name:"zoomInLeft",duration:1e3},{name:"zoomInRight",duration:1e3},{name:"zoomInUp",duration:1e3}]},{name:"Zooming exits",children:[{name:"zoomOut",duration:1e3},{name:"zoomOutDown",duration:1e3},{name:"zoomOutLeft",duration:1e3},{name:"zoomOutRight",duration:1e3},{name:"zoomOutUp",duration:1e3}]},{name:"Sliding entrances",children:[{name:"slideInDown",duration:500},{name:"slideInLeft",duration:500},{name:"slideInRight",duration:500},{name:"slideInUp",duration:500}]},{name:"Sliding exits",children:[{name:"slideOutDown",duration:750},{name:"slideOutLeft",duration:750},{name:"slideOutRight",duration:750},{name:"slideOutUp",duration:750}]}],S={class:"animation-list"},w={class:"animation-title"},R=["onClick"],I=n({__name:"animationList",emits:["selectAnimation"],setup:(a,{emit:e})=>(a,n)=>(t(),i("div",S,[(t(!0),i(r,null,o(g(T),(a=>(t(),i("div",{class:"animation-header",key:a.name},[l("h2",w,s(a.name),1),(t(!0),i(r,null,o(a.children,(a=>(t(),i("div",{class:"animation-item",key:a.name,onClick:n=>{return t=a.name,i=a.duration,void e("selectAnimation",t,i);var t,i}},s(a.name),9,R)))),128))])))),128))]))}),k={range:[0,100],originTranslate:[0,0],translate:[0,0],originScale:[1,1],scale:[1,1],originOpacity:1,opacity:1,originRotate:0,rotate:0,originSkew:[0,0],skew:[0,0],change:!0},b={bounce:[{...k,range:[0,20],change:!1},{...k,range:[20,40],originTranslate:[0,0],translate:[0,-30],originScale:[1,1],scale:[1,1.1]},{...k,range:[40,43],translate:[0,-30],scale:[1,1.1],change:!1},{...k,range:[43,53],originTranslate:[0,-30],translate:[0,0],originScale:[1,1.1],scale:[1,1]},{...k,range:[53,70],originTranslate:[0,0],translate:[0,-15],originScale:[1,1],scale:[1,1.05]},{...k,range:[70,80],originTranslate:[0,-15],translate:[0,0],originScale:[1,1.05],scale:[1,.95]},{...k,range:[80,90],originTranslate:[0,0],translate:[0,-4],originScale:[1,.95],scale:[1,1.02]},{...k,range:[90,100],change:!1}],flash:[{...k,range:[0,25],originOpacity:1,opacity:0},{...k,range:[25,50],originOpacity:0,opacity:1},{...k,range:[50,75],originOpacity:1,opacity:0},{...k,range:[75,100],originOpacity:0,opacity:1}],pulse:[{...k,range:[0,50],originScale:[1,1],scale:[1.05,1.05]},{...k,range:[50,100],originScale:[1.05,1.05],scale:[1,1]}],rubberBand:[{...k,range:[0,30],originScale:[1,1],scale:[1.25,.75]},{...k,range:[30,40],originScale:[1.25,.75],scale:[.75,1.25]},{...k,range:[40,50],originScale:[.75,1.25],scale:[1.15,.85]},{...k,range:[50,65],originScale:[1.15,.85],scale:[.95,1.05]},{...k,range:[65,75],originScale:[.95,1.05],scale:[1.05,.95]},{...k,range:[75,100],originScale:[1.05,.95],scale:[1,1]}],shakeX:[{...k,range:[0,10],originTranslate:[0,0],translate:[-10,0]},{...k,range:[10,20],originTranslate:[-10,0],translate:[10,0]},{...k,range:[20,30],originTranslate:[10,0],translate:[-10,0]},{...k,range:[30,40],originTranslate:[-10,0],translate:[10,0]},{...k,range:[40,50],originTranslate:[10,0],translate:[-10,0]},{...k,range:[50,60],originTranslate:[-10,0],translate:[10,0]},{...k,range:[60,70],originTranslate:[10,0],translate:[-10,0]},{...k,range:[70,80],originTranslate:[-10,0],translate:[10,0]},{...k,range:[80,90],originTranslate:[10,0],translate:[-10,0]},{...k,range:[90,100],originTranslate:[-10,0],translate:[0,0]}],shakeY:[{...k,range:[0,10],originTranslate:[0,0],translate:[0,-10]},{...k,range:[10,20],originTranslate:[0,-10],translate:[0,10]},{...k,range:[20,30],originTranslate:[0,10],translate:[0,-10]},{...k,range:[30,40],originTranslate:[0,-10],translate:[0,10]},{...k,range:[40,50],originTranslate:[0,10],translate:[0,-10]},{...k,range:[50,60],originTranslate:[0,-10],translate:[0,10]},{...k,range:[60,70],originTranslate:[0,10],translate:[0,-10]},{...k,range:[70,80],originTranslate:[0,-10],translate:[0,10]},{...k,range:[80,90],originTranslate:[0,10],translate:[0,-10]},{...k,range:[90,100],originTranslate:[0,-10],translate:[0,0]}],headShake:[{...k,range:[0,6.5],originTranslate:[0,0],translate:[-6,0]},{...k,range:[6.5,18.5],originTranslate:[-6,0],translate:[5,0]},{...k,range:[18.5,31.5],originTranslate:[5,0],translate:[-3,0]},{...k,range:[31.5,43.5],originTranslate:[-3,0],translate:[2,0]},{...k,range:[43.5,50],originTranslate:[2,0],translate:[0,0]},{...k,range:[50,100],change:!1}],swing:[{...k,range:[0,20],originRotate:0,rotate:15},{...k,range:[20,40],originRotate:15,rotate:-10},{...k,range:[40,60],originRotate:-10,rotate:5},{...k,range:[60,80],originRotate:5,rotate:-5},{...k,range:[80,100],originRotate:-5,rotate:0}],tada:[{...k,range:[0,10],originScale:[1,1],scale:[.9,.9],originRotate:0,rotate:-3},{...k,range:[10,20],originScale:[.9,.9],scale:[.9,.9],originRotate:-3,rotate:-3},{...k,range:[20,30],originScale:[.9,.9],scale:[1.1,1.1],originRotate:-3,rotate:3},{...k,range:[30,40],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:3,rotate:-3},{...k,range:[40,50],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:-3,rotate:3},{...k,range:[50,60],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:3,rotate:-3},{...k,range:[60,70],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:-3,rotate:3},{...k,range:[70,80],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:3,rotate:-3},{...k,range:[80,90],originScale:[1.1,1.1],scale:[1.1,1.1],originRotate:-3,rotate:3},{...k,range:[90,100],originScale:[1.1,1.1],scale:[1,1],originRotate:3,rotate:0}],wobble:[{...k,range:[0,15],translatePercentage:!0,originTranslate:[0,0],translate:[-25,0],originRotate:0,rotate:-5},{...k,range:[15,30],translatePercentage:!0,originTranslate:[-25,0],translate:[20,0],originRotate:-5,rotate:3},{...k,range:[30,45],translatePercentage:!0,originTranslate:[20,0],translate:[-15,0],originRotate:3,rotate:-3},{...k,range:[45,60],translatePercentage:!0,originTranslate:[-15,0],translate:[10,0],originRotate:-3,rotate:2},{...k,range:[60,75],translatePercentage:!0,originTranslate:[10,0],translate:[-5,0],originRotate:2,rotate:-1},{...k,range:[75,100],translatePercentage:!0,originTranslate:[-5,0],translate:[0,0],originRotate:-1,rotate:0}],jello:[{...k,range:[0,11.1],change:!1},{...k,range:[11.1,22.2],originSkew:[0,0],skew:[-12.5,-12.5]},{...k,range:[22.2,33.3],originSkew:[-12.5,-12.5],skew:[6.25,6.25]},{...k,range:[33.3,44.4],originSkew:[6.25,6.25],skew:[-3.125,-3.125]},{...k,range:[44.4,55.5],originSkew:[-3.125,-3.125],skew:[1.5625,1.5625]},{...k,range:[55.5,66.6],originSkew:[1.5625,1.5625],skew:[-.78125,-.78125]},{...k,range:[66.6,77.7],originSkew:[-.78125,-.78125],skew:[.390625,.390625]},{...k,range:[77.7,88.8],originSkew:[.390625,.390625],skew:[-.1953125,-.1953125]},{...k,range:[88.8,100],originSkew:[-.1953125,-.1953125],skew:[0,0]}],heartBeat:[{...k,range:[0,14],originScale:[1,1],scale:[1.3,1.3]},{...k,range:[14,28],originScale:[1.3,1.3],scale:[1,1]},{...k,range:[28,42],originScale:[1,1],scale:[1.3,1.3]},{...k,range:[42,70],originScale:[1.3,1.3],scale:[1,1]},{...k,range:[70,100],change:!1}],backInDown:[{...k,range:[0,80],originTranslate:[0,-1200],translate:[0,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]},{...k,range:[80,100],originOpacity:.7,opacity:1,originScale:[.7,.7],scale:[1,1]}],backInLeft:[{...k,range:[0,80],originTranslate:[-2e3,0],translate:[0,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]},{...k,range:[80,100],originOpacity:.7,opacity:1,originScale:[.7,.7],scale:[1,1]}],backInRight:[{...k,range:[0,80],originTranslate:[2e3,0],translate:[0,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]},{...k,range:[80,100],originOpacity:.7,opacity:1,originScale:[.7,.7],scale:[1,1]}],backInUp:[{...k,range:[0,80],originTranslate:[0,1200],translate:[0,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]},{...k,range:[80,100],originOpacity:.7,opacity:1,originScale:[.7,.7],scale:[1,1]}],backOutDown:[{...k,range:[0,20],originOpacity:1,opacity:.7,originScale:[1,1],scale:[.7,.7]},{...k,range:[20,100],originTranslate:[0,0],translate:[0,1200],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]}],backOutLeft:[{...k,range:[0,20],originOpacity:1,opacity:.7,originScale:[1,1],scale:[.7,.7]},{...k,range:[20,100],originTranslate:[0,0],translate:[-2e3,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]}],backOutRight:[{...k,range:[0,20],originOpacity:1,opacity:.7,originScale:[1,1],scale:[.7,.7]},{...k,range:[20,100],originTranslate:[0,0],translate:[2e3,0],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]}],backOutUp:[{...k,range:[0,20],originOpacity:1,opacity:.7,originScale:[1,1],scale:[.7,.7]},{...k,range:[20,100],originTranslate:[0,0],translate:[0,-1200],originOpacity:.7,opacity:.7,originScale:[.7,.7],scale:[.7,.7]}],bounceIn:[{...k,range:[0,20],originScale:[.3,.3],scale:[1.1,1.1],originOpacity:0,opacity:.25},{...k,range:[20,40],originScale:[1.1,1.1],scale:[.9,.9],originOpacity:.25,opacity:.5},{...k,range:[40,60],originScale:[.9,.9],scale:[1.03,1.03],originOpacity:.5,opacity:.75},{...k,range:[60,80],originScale:[1.03,1.03],scale:[.97,.97],originOpacity:.75,opacity:1},{...k,range:[80,100],originScale:[.97,.97],scale:[1,1]}],bounceInDown:[{...k,range:[0,40],originTranslate:[0,-1200],translate:[0,25],originScale:[1,3],scale:[1,.9],originOpacity:0,opacity:1},{...k,range:[40,60],originTranslate:[0,25],translate:[0,-10],originScale:[1,.9],scale:[1,.95]},{...k,range:[60,80],originTranslate:[0,-10],translate:[0,5],originScale:[1,.95],scale:[1,.985]},{...k,range:[80,100],originTranslate:[0,5],translate:[0,0],originScale:[1,.985],scale:[1,1]}],bounceInLeft:[{...k,range:[0,70],originTranslate:[-2e3,0],translate:[25,0],originScale:[3,1],scale:[1,1],originOpacity:0,opacity:1},{...k,range:[70,80],originTranslate:[25,0],translate:[-10,0],originScale:[1,1],scale:[.98,1]},{...k,range:[80,90],originTranslate:[-10,0],translate:[5,0],originScale:[.98,1],scale:[.995,1]},{...k,range:[90,100],originTranslate:[5,0],translate:[0,0],originScale:[.995,1],scale:[1,1]}],bounceInRight:[{...k,range:[0,70],originTranslate:[2e3,0],translate:[-25,0],originScale:[3,1],scale:[1,1],originOpacity:0,opacity:1},{...k,range:[70,80],originTranslate:[-25,0],translate:[10,0],originScale:[1,1],scale:[.98,1]},{...k,range:[80,90],originTranslate:[10,0],translate:[-5,0],originScale:[.98,1],scale:[.995,1]},{...k,range:[90,100],originTranslate:[-5,0],translate:[0,0],originScale:[.995,1],scale:[1,1]}],bounceInUp:[{...k,range:[0,40],originTranslate:[0,1200],translate:[0,-25],originScale:[1,3],scale:[1,.9],originOpacity:0,opacity:1},{...k,range:[40,60],originTranslate:[0,-25],translate:[0,10],originScale:[1,.9],scale:[1,.95]},{...k,range:[60,80],originTranslate:[0,10],translate:[0,-5],originScale:[1,.95],scale:[1,.985]},{...k,range:[80,100],originTranslate:[0,-5],translate:[0,0],originScale:[1,.985],scale:[1,1]}],bounceOut:[{...k,range:[0,20],originScale:[1,1],scale:[.9,.9]},{...k,range:[20,50],originScale:[.9,.9],scale:[1.1,1.1]},{...k,range:[50,55],scale:[1.1,1.1],change:!1},{...k,range:[55,100],originScale:[1.1,1.1],scale:[.3,.3],originOpacity:1,opacity:0}],bounceOutDown:[{...k,range:[0,20],originTranslate:[0,0],translate:[0,10],originScale:[1,1],scale:[1,.985]},{...k,range:[20,40],originTranslate:[0,10],translate:[0,-20],originScale:[1,.985],scale:[1,.9]},{...k,range:[40,45],translate:[0,-20],scale:[1,.9],change:!1},{...k,range:[45,100],originTranslate:[0,-20],translate:[0,2e3],originScale:[1,.9],scale:[1,3],originOpacity:1,opacity:0}],bounceOutLeft:[{...k,range:[0,20],originTranslate:[0,0],translate:[20,0],originScale:[1,1],scale:[.9,1]},{...k,range:[20,100],originTranslate:[20,0],translate:[-2e3,0],originScale:[.9,1],scale:[2,1],originOpacity:1,opacity:0}],bounceOutRight:[{...k,range:[0,20],originTranslate:[0,0],translate:[-20,0],originScale:[1,1],scale:[.9,1]},{...k,range:[20,100],originTranslate:[-20,0],translate:[2e3,0],originScale:[.9,1],scale:[2,1],originOpacity:1,opacity:0}],bounceOutUp:[{...k,range:[0,20],originTranslate:[0,0],translate:[0,-10],originScale:[1,1],scale:[1,.985]},{...k,range:[20,40],originTranslate:[0,-10],translate:[0,20],originScale:[1,.985],scale:[1,.9]},{...k,range:[40,45],translate:[0,20],scale:[1,.9],change:!1},{...k,range:[45,100],originTranslate:[0,20],translate:[0,-2e3],originScale:[1,.9],scale:[1,3],originOpacity:1,opacity:0}],fadeIn:[{...k,range:[0,100],originOpacity:0,opacity:1}],fadeInDown:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,-100],translate:[0,0],originOpacity:0,opacity:1}],fadeInDownBig:[{...k,range:[0,100],originTranslate:[0,-2e3],translate:[0,0],originOpacity:0,opacity:1}],fadeInLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[-100,0],translate:[0,0],originOpacity:0,opacity:1}],fadeInLeftBig:[{...k,range:[0,100],originTranslate:[-2e3,0],translate:[0,0],originOpacity:0,opacity:1}],fadeInRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[100,0],translate:[0,0],originOpacity:0,opacity:1}],fadeInRightBig:[{...k,range:[0,100],originTranslate:[2e3,0],translate:[0,0],originOpacity:0,opacity:1}],fadeInUp:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,100],translate:[0,0],originOpacity:0,opacity:1}],fadeInUpBig:[{...k,range:[0,100],originTranslate:[0,2e3],translate:[0,0],originOpacity:0,opacity:1}],fadeInTopLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[-100,-100],translate:[0,0],originOpacity:0,opacity:1}],fadeInTopRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[100,-100],translate:[0,0],originOpacity:0,opacity:1}],fadeInBottomLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[-100,100],translate:[0,0],originOpacity:0,opacity:1}],fadeInBottomRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[100,100],translate:[0,0],originOpacity:0,opacity:1}],fadeOut:[{...k,range:[0,100],originOpacity:1,opacity:0}],fadeOutDown:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[0,100],originOpacity:1,opacity:0}],fadeOutDownBig:[{...k,range:[0,100],originTranslate:[0,0],translate:[0,2e3],originOpacity:1,opacity:0}],fadeOutLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[-100,0],originOpacity:1,opacity:0}],fadeOutLeftBig:[{...k,range:[0,100],originTranslate:[0,0],translate:[-2e3,0],originOpacity:1,opacity:0}],fadeOutRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,0],originOpacity:1,opacity:0}],fadeOutRightBig:[{...k,range:[0,100],originTranslate:[0,0],translate:[2e3,0],originOpacity:1,opacity:0}],fadeOutUp:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[0,-100],originOpacity:1,opacity:0}],fadeOutUpBig:[{...k,range:[0,100],originTranslate:[0,0],translate:[0,-2e3],originOpacity:1,opacity:0}],fadeOutTopLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[-100,-100],originOpacity:1,opacity:0}],fadeOutTopRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,-100],originOpacity:1,opacity:0}],fadeOutBottomLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[-100,100],originOpacity:1,opacity:0}],fadeOutBottomRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,100],originOpacity:1,opacity:0}],flip:[{...k,range:[0,50],originScale:[1.5,1],scale:[-1.5,1.5]},{...k,range:[50,100],originScale:[-1.5,1.5],scale:[1,1]}],flipInX:[{...k,range:[0,40],originScale:[1,0],scale:[1,1],originOpacity:0,opacity:1},{...k,range:[40,100],change:!1}],flipInY:[{...k,range:[0,40],originScale:[0,1],scale:[1,1],originOpacity:0,opacity:1},{...k,range:[40,100],change:!1}],flipOutX:[{...k,range:[0,40],originScale:[1,1],scale:[1,0],originOpacity:1,opacity:0},{...k,range:[40,100],opacity:0,change:!1}],flipOutY:[{...k,range:[0,40],originScale:[1,1],scale:[0,1],originOpacity:1,opacity:0},{...k,range:[40,100],opacity:0,change:!1}],lightSpeedInRight:[{...k,range:[0,60],translatePercentage:!0,originTranslate:[100,0],translate:[0,0],originOpacity:0,opacity:1,originSkew:[0,-30],skew:[0,20]},{...k,range:[60,80],originSkew:[0,20],skew:[0,-5]},{...k,range:[80,100],originSkew:[0,-5],skew:[0,0]}],lightSpeedInLeft:[{...k,range:[0,60],translatePercentage:!0,originTranslate:[-100,0],translate:[0,0],originOpacity:0,opacity:1,originSkew:[0,30],skew:[0,-20]},{...k,range:[60,80],originSkew:[0,-20],skew:[0,5]},{...k,range:[80,100],originSkew:[0,5],skew:[0,0]}],lightSpeedOutRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,0],originOpacity:1,opacity:0,originSkew:[0,0],skew:[0,30]}],lightSpeedOutLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[-100,0],originOpacity:1,opacity:0,originSkew:[0,0],skew:[0,-30]}],rotateIn:[{...k,range:[0,70],originRotate:200,rotate:0,originOpacity:0,opacity:1},{...k,range:[70,100],change:!1}],rotateInDownLeft:[{...k,range:[0,70],originRotate:-45,rotate:0,originOpacity:0,opacity:1},{...k,range:[70,100],change:!1}],rotateInDownRight:[{...k,range:[0,70],originRotate:45,rotate:0,originOpacity:0,opacity:1},{...k,range:[70,100],change:!1}],rotateInUpLeft:[{...k,range:[0,70],originRotate:45,rotate:0,originOpacity:0,opacity:1},{...k,range:[70,100],change:!1}],rotateInUpRight:[{...k,range:[0,70],originRotate:-45,rotate:0,originOpacity:0,opacity:1},{...k,range:[70,100],change:!1}],rotateOut:[{...k,range:[0,70],originRotate:0,rotate:200,originOpacity:1,opacity:0},{...k,range:[70,100],opacity:0,change:!1}],rotateOutDownLeft:[{...k,range:[0,70],originRotate:0,rotate:45,originOpacity:1,opacity:0},{...k,range:[70,100],opacity:0,change:!1}],rotateOutDownRight:[{...k,range:[0,70],originRotate:0,rotate:-45,originOpacity:1,opacity:0},{...k,range:[70,100],opacity:0,change:!1}],rotateOutUpLeft:[{...k,range:[0,70],originRotate:0,rotate:45,originOpacity:1,opacity:0},{...k,range:[70,100],opacity:0,change:!1}],rotateOutUpRight:[{...k,range:[0,70],originRotate:0,rotate:-45,originOpacity:1,opacity:0},{...k,range:[70,100],opacity:0,change:!1}],hinge:[{...k,range:[0,20],originRotate:0,rotate:80},{...k,range:[20,40],originRotate:80,rotate:60},{...k,range:[40,60],originRotate:60,rotate:80},{...k,range:[60,80],originRotate:80,rotate:60},{...k,range:[80,100],originTranslate:[0,0],translate:[0,700],originRotate:60,rotate:60,originOpacity:1,opacity:0}],jackInTheBox:[{...k,range:[0,50],originRotate:30,rotate:-10,originScale:[.1,.1],scale:[.55,.55],originOpacity:0,opacity:.5},{...k,range:[50,70],originRotate:-10,rotate:3,originScale:[.55,.55],scale:[.73,.73],originOpacity:.5,opacity:.7},{...k,range:[70,100],originRotate:3,rotate:0,originScale:[.73,.73],scale:[1,1],originOpacity:.7,opacity:1}],rollIn:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[-100,0],translate:[0,0],originRotate:-120,rotate:0,originOpacity:0,opacity:1}],rollOut:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,0],originRotate:0,rotate:120,originOpacity:1,opacity:0}],zoomIn:[{...k,range:[0,50],originScale:[.3,.3],scale:[1,1],originOpacity:0,opacity:1},{...k,range:[50,100],change:!1}],zoomInDown:[{...k,range:[0,60],originScale:[.1,.1],scale:[.475,.475],originOpacity:0,opacity:1,originTranslate:[0,-1e3],translate:[0,60]},{...k,range:[60,70],originTranslate:[0,60],translate:[0,0],originScale:[.475,.475],scale:[1,1]},{...k,range:[70,100],change:!1}],zoomInLeft:[{...k,range:[0,60],originScale:[.1,.1],scale:[.475,.475],originOpacity:0,opacity:1,originTranslate:[-1e3,0],translate:[10,0]},{...k,range:[60,70],originTranslate:[10,0],translate:[0,0],originScale:[.475,.475],scale:[1,1]},{...k,range:[70,100],change:!1}],zoomInRight:[{...k,range:[0,60],originScale:[.1,.1],scale:[.475,.475],originOpacity:0,opacity:1,originTranslate:[1e3,0],translate:[-10,0]},{...k,range:[60,70],originTranslate:[-10,0],translate:[0,0],originScale:[.475,.475],scale:[1,1]},{...k,range:[70,100],change:!1}],zoomInUp:[{...k,range:[0,60],originScale:[.1,.1],scale:[.475,.475],originOpacity:0,opacity:1,originTranslate:[0,1e3],translate:[0,-60]},{...k,range:[60,70],originTranslate:[0,-60],translate:[0,0],originScale:[.475,.475],scale:[1,1]},{...k,range:[70,100],change:!1}],zoomOut:[{...k,range:[0,50],originScale:[1,1],scale:[.3,.3],originOpacity:1,opacity:0},{...k,range:[50,100],opacity:0,change:!1}],zoomOutDown:[{...k,range:[0,40],originScale:[1,1],scale:[.475,.475],originTranslate:[0,0],translate:[0,-60]},{...k,range:[40,100],originScale:[.475,.475],scale:[.1,.1],originOpacity:1,opacity:0,originTranslate:[0,-60],translate:[0,2e3]}],zoomOutLeft:[{...k,range:[0,40],originScale:[1,1],scale:[.475,.475],originTranslate:[0,0],translate:[42,0]},{...k,range:[40,100],originScale:[.475,.475],scale:[.1,.1],originOpacity:1,opacity:0,originTranslate:[42,0],translate:[-2e3,0]}],zoomOutRight:[{...k,range:[0,40],originScale:[1,1],scale:[.475,.475],originTranslate:[0,0],translate:[-42,0]},{...k,range:[40,100],originScale:[.475,.475],scale:[.1,.1],originOpacity:1,opacity:0,originTranslate:[-42,0],translate:[2e3,0]}],zoomOutUp:[{...k,range:[0,40],originScale:[1,1],scale:[.475,.475],originTranslate:[0,0],translate:[0,60]},{...k,range:[40,100],originScale:[.475,.475],scale:[.1,.1],originOpacity:1,opacity:0,originTranslate:[0,60],translate:[0,-2e3]}],slideInDown:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,-150],translate:[0,0]}],slideInLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[-100,0],translate:[0,0]}],slideInRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[100,0],translate:[0,0]}],slideInUp:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,150],translate:[0,0]}],slideOutDown:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[0,150]}],slideOutLeft:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[-100,0]}],slideOutRight:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[100,0]}],slideOutUp:[{...k,range:[0,100],translatePercentage:!0,originTranslate:[0,0],translate:[0,-150]}]};class _{constructor(a,n,t){e(this,"_ctx"),e(this,"_duration"),e(this,"_startTime"),e(this,"_animationTyep"),e(this,"_draw"),e(this,"_clearRect"),e(this,"_progressing"),e(this,"_width"),e(this,"_height"),e(this,"onEnd",(()=>{})),this._ctx=a,this._duration=0,this._startTime=0,this._animationTyep="",this._draw=n,this._clearRect=t,this._progressing=!1,this._width=100,this._height=100}setOptions(a){this._animationTyep=a.type,this._duration=a.duration,this._width=a.width||100,this._height=a.height||100}start(){this._progressing=!0,this._startTime=Date.now(),this._action()}_action(){if(!this._progressing)return;const a=Date.now()-this._startTime;if(a>this._duration)return this._progressing=!1,void this.onEnd();const e=((a,e,n,t)=>{const i=b[a],r=i.findIndex((a=>e>=a.range[0]&&e<=a.range[1])),o=i[r];if(!o.change)return{translate:o.translate,scale:o.scale,opacity:o.opacity,rotate:o.rotate,skew:o.skew};const g=o.range[1]-o.range[0],l=(e-o.range[0])/g;return{translate:[((o.translate[0]-o.originTranslate[0])*l+o.originTranslate[0])*(o.translatePercentage?.01*n:1),((o.translate[1]-o.originTranslate[1])*l+o.originTranslate[1])*(o.translatePercentage?.01*t:1)],scale:[(o.scale[0]-o.originScale[0])*l+o.originScale[0],(o.scale[1]-o.originScale[1])*l+o.originScale[1]],opacity:(o.opacity-o.originOpacity)*l+o.originOpacity,rotate:(o.rotate-o.originRotate)*l+o.originRotate,skew:[(o.skew[0]-o.originSkew[0])*l+o.originSkew[0],(o.skew[1]-o.originSkew[1])*l+o.originSkew[1]]}})(this._animationTyep,a/this._duration*100,this._width,this._height);this._clearRect(),this._ctx.save(),"rotateInDownLeft"===this._animationTyep||"rotateInUpLeft"===this._animationTyep||"rotateOutDownLeft"===this._animationTyep||"rotateOutUpLeft"===this._animationTyep||"hinge"===this._animationTyep?this._ctx.translate(-this._width/2,this._height/2):"rotateInDownRight"!==this._animationTyep&&"rotateInUpRight"!==this._animationTyep&&"rotateOutDownRight"!==this._animationTyep&&"rotateOutUpRight"!==this._animationTyep||this._ctx.translate(this._width/2,this._height/2),this._ctx.scale(...e.scale),this._ctx.translate(...e.translate),this._ctx.globalAlpha=e.opacity,this._ctx.rotate(e.rotate*Math.PI/180),this._ctx.transform(1,e.skew[0]*Math.PI/180,e.skew[1]*Math.PI/180,1,0,0),this._draw(),this._ctx.restore(),window.requestAnimationFrame(this._action.bind(this))}stop(){this._progressing=!1}}const v={class:"canvas-animation-body"},L={class:"github-block"},P={class:"canvas-animation-list"},D="Animate.css",B=h(n({__name:"App",setup(a){const e=c(),n=c(),r=c();let o,s="",h=0,f=0,T=0,S=0;p((()=>{n.value&&e.value&&document.fonts.ready.then((()=>{if(R(),r.value){const a=r.value;o=new _(a,(()=>{B(a,D,T,S)}),k),o.onEnd=()=>{s="",k(),B(a,D,T,S)}}}))}));const w=(a,e)=>{if(!b[a])return O.error("该动画暂未实现");s=a,o.setOptions({type:a,duration:e,width:h,height:f}),o.start()},R=()=>{if(n.value&&e.value){const a=e.value.clientWidth,t=e.value.clientHeight;n.value.style.width=`${a}px`,n.value.style.height=`${t}px`;const i=window.devicePixelRatio;n.value.width=a*i,n.value.height=t*i,r.value||(r.value=n.value.getContext("2d",{willReadFrequently:!0})),r.value.scale(i,i),k(),r.value.font="normal bold 64px 'Work Sans'",r.value.fillStyle="#351c75";const o=r.value.measureText(D);h=o.actualBoundingBoxRight-o.actualBoundingBoxLeft,f=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,T=-h/2,S=f/2,r.value.translate(a/2,t/2),B(r.value,D,T,S)}},k=()=>{if(n.value&&r.value){const a=n.value.clientWidth,e=n.value.clientHeight;r.value.clearRect(-a/2,-e/2,n.value.width,n.value.height)}},B=(a,e,n,t)=>{a.save(),"rotateInDownLeft"===s||"rotateInUpLeft"===s||"rotateOutDownLeft"===s||"rotateOutUpLeft"===s||"hinge"===s?a.fillText(e,n+h/2,t-f/2):"rotateInDownRight"===s||"rotateInUpRight"===s||"rotateOutDownRight"===s||"rotateOutUpRight"===s?a.fillText(e,n-h/2,t-f/2):a.fillText(e,n,t),a.restore()},U=()=>{window.open("https://github.com/moneyinto/canvas-animation")};return u((()=>{window.addEventListener("resize",R)})),d((()=>{window.removeEventListener("resize",R)})),(a,r)=>(t(),i("div",v,[l("div",L,[y(g(m),{class:"github-icon",onClick:U})]),l("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},[l("canvas",{ref_key:"canvas",ref:n},null,512)],512),l("div",P,[y(I,{onSelectAnimation:w})])]))}}));B.use(f),B.mount("#app"),O.config({maxCount:1});