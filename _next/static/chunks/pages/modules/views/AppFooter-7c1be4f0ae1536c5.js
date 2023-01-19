(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{3795:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(3366),i=n(7462),o=n(7294),a=n(6010),c=n(4780),l=n(8216),s=n(948),d=n(1657),u=n(8791),p=n(1705),h=n(5861),m=n(1588),x=n(4867);function f(e){return(0,x.Z)("MuiLink",e)}let g=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=n(4844),b=n(1796);let v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=e=>v[e]||e,w=({theme:e,ownerState:t})=>{let n=Z(t.color),r=(0,y.DW)(e,`palette.${n}`,!1)||t.color,i=(0,y.DW)(e,`palette.${n}Channel`);return"vars"in e&&i?`rgba(${i} / 0.4)`:(0,b.Fq)(r,.4)};var k=n(5893);let j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],P=e=>{let{classes:t,component:n,focusVisible:r,underline:i}=e,o={root:["root",`underline${(0,l.Z)(i)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,c.Z)(o,f,t)},C=(0,s.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>(0,i.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,i.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:w({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})),T=o.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:l="primary",component:s="a",onBlur:h,onFocus:m,TypographyClasses:x,underline:f="always",variant:g="inherit",sx:y}=n,b=(0,r.Z)(n,j),{isFocusVisibleRef:Z,onBlur:w,onFocus:T,ref:F}=(0,u.Z)(),[S,O]=o.useState(!1),L=(0,p.Z)(t,F),E=e=>{w(e),!1===Z.current&&O(!1),h&&h(e)},z=e=>{T(e),!0===Z.current&&O(!0),m&&m(e)},_=(0,i.Z)({},n,{color:l,component:s,focusVisible:S,underline:f,variant:g}),D=P(_);return(0,k.jsx)(C,(0,i.Z)({color:l,className:(0,a.Z)(D.root,c),classes:x,component:s,onBlur:E,onFocus:z,ref:L,ownerState:_,variant:g,sx:[...Object.keys(v).includes(l)?[]:[{color:l}],...Array.isArray(y)?y:[y]]},b))});var F=T},8791:function(e,t,n){"use strict";let r;n.d(t,{Z:function(){return u}});var i=n(7294);let o=!0,a=!1,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function s(){o=!1}function d(){"hidden"===this.visibilityState&&a&&(o=!0)}var u=function(){let e=i.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",s,!0),t.addEventListener("pointerdown",s,!0),t.addEventListener("touchstart",s,!0),t.addEventListener("visibilitychange",d,!0)}},[]),t=i.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return o||function(e){let{type:t,tagName:n}=e;return"INPUT"===n&&!!c[t]&&!e.readOnly||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout(()=>{a=!1},100),t.current=!1,!0)},ref:e}}},4234:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modules/views/AppFooter",function(){return n(2953)}])},1845:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var i=n(6010),o=n(948),a=n(9487),c=n(5603),l=n(3209);let s={small:"OnePirateTextField-inputSizeSmall",medium:"OnePirateTextField-inputSizeMedium",large:"OnePirateTextField-inputSizeLarge",xlarge:"OnePirateTextField-inputSizeXLarge"},d={root:"OnePirateTextField-root",input:"OnePirateTextField-input",inputBorder:"OnePirateTextField-inputBorder"},u=e=>{let{theme:t}=e;return{["& .".concat(d.root)]:{padding:0,"label + &":{marginTop:t.spacing(3)}},["& .".concat(d.input)]:{minWidth:t.spacing(6),backgroundColor:t.palette.common.white,"&.Mui-disabled":{backgroundColor:t.palette.divider}},["& .".concat(d.inputBorder)]:{border:"1px solid #e9ddd0","&:focus":{borderColor:t.palette.secondary.main}},["& .".concat(s.small)]:{fontSize:14,padding:t.spacing(1),width:"calc(100% - ".concat(t.spacing(2),")")},["& .".concat(s.medium)]:{fontSize:16,padding:t.spacing(2),width:"calc(100% - ".concat(t.spacing(4),")")},["& .".concat(s.large)]:{fontSize:18,padding:20,width:"calc(100% - ".concat(40,"px)")},["& .".concat(s.xlarge)]:{fontSize:20,padding:25,width:"calc(100% - ".concat(50,"px)")},["& .".concat(l.Z.root)]:{fontSize:18},["& .".concat(c.Z.select)]:{height:"auto",borderRadius:0},["& .".concat(c.Z.icon)]:{top:"50%",marginTop:-12}}};t.default=(0,o.ZP)(function(e){let{InputProps:t={},InputLabelProps:n,noBorder:o,size:c="medium",SelectProps:l,...u}=e,{classes:{input:p,...h}={},...m}=t;return(0,r.jsx)(a.Z,{InputProps:{classes:{root:d.root,input:(0,i.Z)(d.input,s[c],{[d.inputBorder]:!o},p),...h},disableUnderline:!0,...m},InputLabelProps:{...n,shrink:!0},SelectProps:l,...u})})(u)},7351:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var i=n(948),o=n(5861);let a={center:{h1:"",h2:"OnePirateTypography-markedH2Center",h3:"OnePirateTypography-markedH3Center",h4:"OnePirateTypography-markedH4Center",h5:"",h6:""},left:{h1:"",h2:"",h3:"",h4:"",h5:"",h6:"OnePirateTypography-markedH6Left"},none:{h1:"",h2:"",h3:"",h4:"",h5:"",h6:""}},c=e=>{let{theme:t}=e;return{["& .".concat(a.center.h2)]:{height:4,width:73,display:"block",margin:"".concat(t.spacing(1)," auto 0"),backgroundColor:t.palette.secondary.main},["& .".concat(a.center.h3)]:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1)," auto 0"),backgroundColor:t.palette.secondary.main},["& .".concat(a.center.h4)]:{height:4,width:55,display:"block",margin:"".concat(t.spacing(1)," auto 0"),backgroundColor:t.palette.secondary.main},["& .".concat(a.left.h6)]:{height:2,width:28,display:"block",marginTop:t.spacing(.5),background:"currentColor"}}},l={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};t.default=(0,i.ZP)(function(e){let{children:t,variant:n,marked:i="none",...c}=e,s="";return n&&n in a[i]&&(s=a[i][n]),(0,r.jsxs)(o.Z,{variantMapping:l,variant:n,...c,children:[t,s?(0,r.jsx)("span",{className:s}):null]})})(c)},2953:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893);n(7294);var i=n(7357),o=n(6886),a=n(3795),c=n(9520),l=n(7351),s=n(1845);function d(){return(0,r.jsxs)(l.default,{variant:"body2",color:"text.secondary",children:["Copyright \xa9 ",(0,r.jsx)(a.Z,{color:"inherit",href:"https://chiplet.us/",children:"chiplets.us"})," ",new Date().getFullYear(),"."]})}let u={width:48,height:48,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"warning.main",mr:1,"&:hover":{bgcolor:"warning.dark"}},p=[{code:"en-US",name:"English"},{code:"fr-FR",name:"Fran\xe7ais"}];function h(){return(0,r.jsx)(l.default,{component:"footer",sx:{display:"flex",bgcolor:"secondary.light",border:"1px red solid",justifyContent:"center"},children:(0,r.jsx)(c.Z,{sx:{my:2,display:"flex",flexDirection:"column",justifyContent:"center"},children:(0,r.jsxs)(o.ZP,{container:!0,spacing:5,sx:{diplay:"flex",justifyContent:"center"},children:[(0,r.jsx)(o.ZP,{item:!0,xs:6,sm:4,md:3,children:(0,r.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",spacing:2,sx:{height:120},children:[(0,r.jsxs)(o.ZP,{item:!0,sx:{display:"flex"},children:[(0,r.jsx)(i.Z,{component:"a",href:"https://chiplet.us/",sx:u,children:(0,r.jsx)("img",{src:"/static/themes/onepirate/appFooterFacebook.png",alt:"Facebook"})}),(0,r.jsx)(i.Z,{component:"a",href:"https://chiplet.us/",sx:u,children:(0,r.jsx)("img",{src:"/static/themes/onepirate/appFooterTwitter.png",alt:"Twitter"})})]}),(0,r.jsx)(o.ZP,{item:!0,children:(0,r.jsx)(d,{})})]})}),(0,r.jsxs)(o.ZP,{item:!0,xs:6,sm:4,md:2,children:[(0,r.jsx)(l.default,{variant:"h6",marked:"left",gutterBottom:!0,children:"Legal"}),(0,r.jsxs)(i.Z,{component:"ul",sx:{m:0,listStyle:"none",p:0},children:[(0,r.jsx)(i.Z,{component:"li",sx:{py:.5},children:(0,r.jsx)(a.Z,{href:"/premium-themes/onepirate/terms/",children:"Terms"})}),(0,r.jsx)(i.Z,{component:"li",sx:{py:.5},children:(0,r.jsx)(a.Z,{href:"/premium-themes/onepirate/privacy/",children:"Privacy"})})]})]}),(0,r.jsxs)(o.ZP,{item:!0,xs:6,sm:8,md:4,children:[(0,r.jsx)(l.default,{variant:"h6",marked:"left",gutterBottom:!0,children:"Language"}),(0,r.jsx)(s.default,{select:!0,size:"medium",variant:"standard",SelectProps:{native:!0},sx:{mt:1,width:150},children:p.map(e=>(0,r.jsx)("option",{value:e.code,children:e.name},e.code))})]})]})})})}}},function(e){e.O(0,[426,22,307,986,1,487,774,888,179],function(){return e(e.s=4234)}),_N_E=e.O()}]);