import{_ as o}from"./index.a373723c.js";const n=(t,d)=>{if(window!=null&&window.document.getElementById(t))return;const i=window==null?void 0:window.document.getElementsByTagName("head")[0],e=window==null?void 0:window.document.createElement("style");e.setAttribute("id",t),e.textContent=d,i.appendChild(e)},a=async()=>{const{fullWidthButton:t}=await o(()=>import("./string-styles.f9eb7151.js"),[],import.meta.url);n("full-width-button",t)},r=async()=>{const{darkTheme:t}=await o(()=>import("./string-styles.f9eb7151.js"),[],import.meta.url);n("dark-theme",t)};export{r as setDarkThemeStyle,a as setFullWidthButtonStyle};