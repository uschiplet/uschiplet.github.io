(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{7357:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var n=r(7462),a=r(3366),i=r(7294),o=r(6010),s=r(2848),u=r(6523),l=r(9707),h=r(9718),c=r(5893);let d=["className","component"];var p=r(7078),m=r(8629);let g=(0,m.Z)(),f=function(t={}){let{defaultTheme:e,defaultClassName:r="MuiBox-root",generateClassName:p}=t,m=(0,s.ZP)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(u.Z),g=i.forwardRef(function(t,i){let s=(0,h.Z)(e),u=(0,l.Z)(t),{className:g,component:f="div"}=u,x=(0,a.Z)(u,d);return(0,c.jsx)(m,(0,n.Z)({as:f,ref:i,className:(0,o.Z)(g,p?p(r):r),theme:s},x))});return g}({defaultTheme:g,defaultClassName:"MuiBox-root",generateClassName:p.Z.generate});var x=f},9520:function(t,e,r){"use strict";r.d(e,{Z:function(){return C}});var n=r(3366),a=r(7462),i=r(7294),o=r(6010),s=r(8320),u=r(4867),l=r(4780),h=r(5149),c=r(182);let d=(0,c.ZP)();var p=r(6500),m=r(5893);let g=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,p.Z)(),x=d("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),b=t=>(0,h.Z)({props:t,name:"MuiContainer",defaultTheme:f}),Z=(t,e)=>{let r=t=>(0,u.Z)(e,t),{classes:n,fixed:a,disableGutters:i,maxWidth:o}=t,h={root:["root",o&&`maxWidth${(0,s.Z)(String(o))}`,a&&"fixed",i&&"disableGutters"]};return(0,l.Z)(h,r,n)};var v=r(8216),y=r(948),k=r(1657);let w=function(t={}){let{createStyledComponent:e=x,useThemeProps:r=b,componentName:s="MuiContainer"}=t,u=e(({theme:t,ownerState:e})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((e,r)=>{let n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:`${n}${t.breakpoints.unit}`}),e},{}),({theme:t,ownerState:e})=>(0,a.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}})),l=i.forwardRef(function(t,e){let i=r(t),{className:l,component:h="div",disableGutters:c=!1,fixed:d=!1,maxWidth:p="lg"}=i,f=(0,n.Z)(i,g),x=(0,a.Z)({},i,{component:h,disableGutters:c,fixed:d,maxWidth:p}),b=Z(x,s);return(0,m.jsx)(u,(0,a.Z)({as:h,ownerState:x,className:(0,o.Z)(b.root,l),ref:e},f))});return l}({createStyledComponent:(0,y.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[`maxWidth${(0,v.Z)(String(r.maxWidth))}`],r.fixed&&e.fixed,r.disableGutters&&e.disableGutters]}}),useThemeProps:t=>(0,k.Z)({props:t,name:"MuiContainer"})});var C=w},5861:function(t,e,r){"use strict";r.d(e,{Z:function(){return w}});var n=r(3366),a=r(7462),i=r(7294),o=r(6010),s=r(9707),u=r(4780),l=r(948),h=r(1657),c=r(8216),d=r(1588),p=r(4867);function m(t){return(0,p.Z)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(5893);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],x=t=>{let{align:e,gutterBottom:r,noWrap:n,paragraph:a,variant:i,classes:o}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,c.Z)(e)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,u.Z)(s,m,o)},b=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e[`align${(0,c.Z)(r.align)}`],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>(0,a.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=t=>v[t]||t,k=i.forwardRef(function(t,e){let r=(0,h.Z)({props:t,name:"MuiTypography"}),i=y(r.color),u=(0,s.Z)((0,a.Z)({},r,{color:i})),{align:l="inherit",className:c,component:d,gutterBottom:p=!1,noWrap:m=!1,paragraph:v=!1,variant:k="body1",variantMapping:w=Z}=u,C=(0,n.Z)(u,f),P=(0,a.Z)({},u,{align:l,color:i,className:c,component:d,gutterBottom:p,noWrap:m,paragraph:v,variant:k,variantMapping:w}),W=d||(v?"p":w[k]||Z[k])||"span",j=x(P);return(0,g.jsx)(b,(0,a.Z)({as:W,ref:e,ownerState:P,className:(0,o.Z)(j.root,c)},C))});var w=k},8216:function(t,e,r){"use strict";var n=r(8320);e.Z=n.Z},9707:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(7462),a=r(3366),i=r(9766),o=r(4920);let s=["sx"],u=t=>{var e,r;let n={systemProps:{},otherProps:{}},a=null!=(e=null==t?void 0:null==(r=t.theme)?void 0:r.unstable_sxConfig)?e:o.Z;return Object.keys(t).forEach(e=>{a[e]?n.systemProps[e]=t[e]:n.otherProps[e]=t[e]}),n};function l(t){let e;let{sx:r}=t,o=(0,a.Z)(t,s),{systemProps:l,otherProps:h}=u(o);return e=Array.isArray(r)?[l,...r]:"function"==typeof r?(...t)=>{let e=r(...t);return(0,i.P)(e)?(0,n.Z)({},l,e):l}:(0,n.Z)({},l,r),(0,n.Z)({},h,{sx:e})}},1588:function(t,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(4867);function a(t,e,r="Mui"){let a={};return e.forEach(e=>{a[e]=(0,n.Z)(t,e,r)}),a}},3862:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modules/views/ProductHero",function(){return r(8713)}])},7351:function(t,e,r){"use strict";r.r(e);var n=r(5893);r(7294);var a=r(948),i=r(5861);let o={center:{h1:"",h2:"OnePirateTypography-markedH2Center",h3:"OnePirateTypography-markedH3Center",h4:"OnePirateTypography-markedH4Center",h5:"",h6:""},left:{h1:"",h2:"",h3:"",h4:"",h5:"",h6:"OnePirateTypography-markedH6Left"},none:{h1:"",h2:"",h3:"",h4:"",h5:"",h6:""}},s=t=>{let{theme:e}=t;return{["& .".concat(o.center.h2)]:{height:4,width:73,display:"block",margin:"".concat(e.spacing(1)," auto 0"),backgroundColor:e.palette.secondary.main},["& .".concat(o.center.h3)]:{height:4,width:55,display:"block",margin:"".concat(e.spacing(1)," auto 0"),backgroundColor:e.palette.secondary.main},["& .".concat(o.center.h4)]:{height:4,width:55,display:"block",margin:"".concat(e.spacing(1)," auto 0"),backgroundColor:e.palette.secondary.main},["& .".concat(o.left.h6)]:{height:2,width:28,display:"block",marginTop:e.spacing(.5),background:"currentColor"}}},u={h1:"h1",h2:"h1",h3:"h1",h4:"h1",h5:"h3",h6:"h2",subtitle1:"h3"};e.default=(0,a.ZP)(function(t){let{children:e,variant:r,marked:a="none",...s}=t,l="";return r&&r in o[a]&&(l=o[a][r]),(0,n.jsxs)(i.Z,{variantMapping:u,variant:r,...s,children:[e,l?(0,n.jsx)("span",{className:l}):null]})})(s)},8713:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return s}});var n=r(5893);r(7294);var a=r(7357),i=r(7351),o=r(8169);function s(){return(0,n.jsxs)(o.default,{sxBackground:{backgroundColor:"#7fc7d9",backgroundPosition:"center"},children:[(0,n.jsx)(i.default,{color:"inherit",align:"center",variant:"h2",children:"More than a system foundry"}),(0,n.jsxs)(a.Z,{sx:{flex:1,display:"flex",justifyContent:"center",columnGap:10},children:[(0,n.jsx)(i.default,{color:"inherit",variant:"h5",sx:{mt:4,mb:4},children:"Design"}),(0,n.jsx)(i.default,{color:"inherit",variant:"h5",sx:{mt:4,mb:4},children:"Architecture"}),(0,n.jsx)(i.default,{color:"inherit",variant:"h5",sx:{mt:4,mb:4},children:"Chiplet Manufacturing"})]})]})}},8169:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(5893);r(7294);var a=r(948),i=r(9520),o=r(7357);let s=(0,a.ZP)("section")(t=>{let{theme:e}=t;return{color:e.palette.common.white,position:"relative",display:"flex",alignItems:"center",[e.breakpoints.up("sm")]:{height:"75vh",minHeight:500,maxHeight:1300}}}),u=(0,a.ZP)(o.Z)({position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:-2});function l(t){let{sxBackground:e,children:r}=t;return(0,n.jsx)(s,{children:(0,n.jsxs)(i.Z,{sx:{mt:3,mb:14,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)("img",{src:"/static/themes/onepirate/productHeroWonder.png",alt:"wonder",width:"147",height:"80"}),r,(0,n.jsx)(o.Z,{sx:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"common.black",opacity:.5,zIndex:-1}}),(0,n.jsx)(u,{sx:e})]})})}}},function(t){t.O(0,[426,22,774,888,179],function(){return t(t.s=3862)}),_N_E=t.O()}]);