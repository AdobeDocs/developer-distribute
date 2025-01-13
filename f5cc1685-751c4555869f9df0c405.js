"use strict";(self.webpackChunkadobe_dev_distribution=self.webpackChunkadobe_dev_distribution||[]).push([[522],{34075:function(e,t,a){a.d(t,{y:function(){return P}});var i=a(54506),s=a(54705),r=a(88763),n=a(15912),o=a(767),l=a(28227),c=a(16992),d=a(73355),m=a(46942),p=a.n(m),u=a(89745),g=a(42877),b=a.n(g);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}const f=[{title:"Last updated",value:"last_updated",filter:e=>e.sort(((e,t)=>{let{lastUpdated:a}=e,{lastUpdated:i}=t;return new Date(i)>new Date(a)?1:new Date(i)<new Date(a)?-1:0}))},{title:"Name",value:"name",filter:e=>e.sort(((e,t)=>{let{name:a}=e,{name:i}=t;return a.localeCompare(i)}))},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);const a=[];return t.forEach((t=>{const i=e.find((e=>{let{id:a}=e;return a===t}));i&&a.push(i)})),a}}];var h={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},y={name:"1gtmncz",styles:"border-color:#4b4b4b!important;border-width:2px"},w={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},x={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},z={name:"10385fy",styles:"font-size:var(--spectrum-global-dimension-size-200);padding-right:0"},Y={name:"11ck1mg",styles:"height:var(--spectrum-global-dimension-size-600);justify-content:center;align-items:center;margin-top:0!important;margin-bottom:var(\n                          --spectrum-global-dimension-size-100\n                        )!important"},j={name:"hsewg1",styles:"height:var(--spectrum-global-dimension-size-4000);overflow:auto;padding-top:0;padding-bottom:0;align-items:center;display:flex;flex-direction:column"},O={name:"82a6rk",styles:"flex:1"},k={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},C={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},H={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},A={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},D={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"};const P=e=>{let{clouds:t=[],products:a=[],interaction:m=!1,orderBy:g="last_updated",filterByCloud:P=[],filterByIds:S=[],buttonName:_="Learn more",showName:B=!0,showDescription:V=!0,showBorder:E=!0,imgHeight:I="1000",isCentered:L=!1,className:q,containerWidth:F=u.fy,theme:Q="light",enablePicker:U=!1}=e;S.length&&(g="id");const X=f.find((e=>{let{value:t}=e;return t===g}));X.ids=S;const{0:M,1:T}=(0,r.useState)(X.value),{0:W,1:G}=(0,r.useState)(X.filter(a,X.ids)),{0:J,1:K}=(0,r.useState)(P);(0,r.useEffect)((()=>{((e,t,a,i)=>{const s=e.filter((e=>{let{cloud:a}=e;return t.some((e=>a===e))}));i(b()(s,["id"],["asc"]))})(a,J.length?J:t,0,G)}),[J,M,a,t]);const R="calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-600))",Z="calc(var(--spectrum-global-dimension-size-3600) - var(--spectrum-global-dimension-size-900))",$=U?"":"padding-top: var(--spectrum-global-dimension-size-1000)";return(0,n.Y)("section",{className:p()(q,"spectrum--"+Q),css:(0,n.AH)("background:var(--spectrum-global-color-gray-100);padding-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Vh,"){width:",(0,u.I6)(2),"!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}@media screen and (max-width: ",u.TN,") and (min-width: ",u.Vh,"){width:100%!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}","")},(0,n.Y)("div",{css:(0,n.AH)("max-width:",F,";margin:auto;@media screen and (max-width: ",u.Vh,"){width:",(0,u.I6)(3),"!important;background:var(--spectrum-global-color-gray-100);}",$,";","")},m&&U&&(0,n.Y)("div",{css:D},(0,n.Y)(c.L,{isQuiet:!0,items:f.slice(0,2).map((e=>e.value===g?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){(0,s.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({selected:!0},e):e)),"aria-label":"Filter by name or last updated product",onChange:e=>{T(f[e].value)}})),(0,n.Y)("div",{css:(0,n.AH)("display:flex;@media screen and (max-width: ",u.fy,"){align-items:flex-start;flex-wrap:wrap;}","")},m&&(0,n.Y)("div",{css:A},(0,n.Y)("div",{css:H},(0,n.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:N},"Filter by"),(0,n.Y)("div",{css:C},t.map(((e,t)=>(0,n.Y)(l.S,{key:t,value:e,onChange:t=>{K(t?[].concat((0,i.A)(J),[e]):J.filter((t=>t!==e)))},css:k},e)))))),(0,n.Y)("div",{css:O},(0,n.Y)("div",{css:(0,n.AH)("display:grid;grid-template-columns:repeat(auto-fit, ",Z,");grid-auto-rows:",R,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",u.fy,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}@media screen and (max-width: ",u.Vh,"){overflow:hidden;width:",(0,u.I6)(3),";background:var(--spectrum-global-color-gray-100);}","")},W.map((e=>(0,n.Y)("div",{key:e.id,className:"spectrum-Card spectrum-Card--sizeM",css:(0,n.AH)("width:",Z,";height:",R,";border:",E?"none":"var(--spectrum-global-color-gray-200)",";background:var(--spectrum-global-color-gray-100);align-items:center;&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",u.fy,"){width:0;}@media screen and (max-width: ",u.Vh,"){height:calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-1700));}","")},(0,n.Y)("div",{className:"spectrum-Card-body",css:j},e.icon&&(0,n.Y)("div",{css:(0,n.AH)("height:var(\n                          --spectrum-global-dimension-size-",I,"\n                        );width:140px;margin-bottom:var(\n                          --spectrum-global-dimension-size-200\n                        );","")},(0,n.Y)(d._,{src:e.icon,"aria-hidden":"true",alt:"",title:""})),B&&(0,n.Y)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXS",css:Y},(0,n.Y)("div",{className:"spectrum-Card-title",css:z},(0,n.Y)("strong",null,e.name))),V&&(0,n.Y)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:x},e.description)),(0,n.Y)("div",{className:E?"spectrum-Card-footer":"",css:(0,n.AH)("display:flex;justify-content:",L?"center":"flex-end",";flex-wrap:wrap;@media screen and (max-width: ",u.fy,"){justify-content:center;}padding-top:0;padding-bottom:0;","")},e.discover&&(0,n.Y)("div",{css:w},(0,n.Y)(o.A,{isQuiet:!0,href:e.discover,variant:"primary",css:y},_)),e.docs&&(0,n.Y)("div",{css:h},(0,n.Y)(o.A,{href:e.docs,variant:"primary"},"View docs")))))))))))}}}]);
//# sourceMappingURL=f5cc1685-751c4555869f9df0c405.js.map