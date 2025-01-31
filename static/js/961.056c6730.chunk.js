"use strict";(self.webpackChunkmovie_portal=self.webpackChunkmovie_portal||[]).push([[961],{6961:(t,o,e)=>{e.r(o),e.d(o,{default:()=>F});var r=e(5043),n=e(9689),i=e(6580),a=e(1e3),s=e(1637),l=e(8903),d=e(2518),c=e(4496),u=e(9379),p=e(45),m=e(8387),x=e(8610),h=e(9768);var g=e(6803),v=e(4535),A=e(6262),b=e(2445),f=e(8206),B=e(2532),j=e(2372);function y(t){return(0,j.Ay)("MuiButtonGroup",t)}const R=(0,B.A)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","horizontal","vertical","colorPrimary","colorSecondary","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var k=e(4221),C=e(3053),I=e(579);const z=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],S=(0,v.Ay)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[{["& .".concat(R.grouped)]:o.grouped},{["& .".concat(R.grouped)]:o["grouped".concat((0,g.A)(e.orientation))]},{["& .".concat(R.grouped)]:o["grouped".concat((0,g.A)(e.variant))]},{["& .".concat(R.grouped)]:o["grouped".concat((0,g.A)(e.variant)).concat((0,g.A)(e.orientation))]},{["& .".concat(R.grouped)]:o["grouped".concat((0,g.A)(e.variant)).concat((0,g.A)(e.color))]},{["& .".concat(R.firstButton)]:o.firstButton},{["& .".concat(R.lastButton)]:o.lastButton},{["& .".concat(R.middleButton)]:o.middleButton},o.root,o[e.variant],!0===e.disableElevation&&o.disableElevation,e.fullWidth&&o.fullWidth,"vertical"===e.orientation&&o.vertical]}})((0,A.A)((t=>{let{theme:o}=t;return{display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius,variants:[{props:{variant:"contained"},style:{boxShadow:(o.vars||o).shadows[2]}},{props:{disableElevation:!0},style:{boxShadow:"none"}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"vertical"},style:{flexDirection:"column",["& .".concat(R.lastButton,",& .").concat(R.middleButton)]:{borderTopRightRadius:0,borderTopLeftRadius:0},["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderBottomRightRadius:0,borderBottomLeftRadius:0}}},{props:{orientation:"horizontal"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderTopRightRadius:0,borderBottomRightRadius:0},["& .".concat(R.lastButton,",& .").concat(R.middleButton)]:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}},{props:{variant:"text",orientation:"horizontal"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderRight:o.vars?"1px solid rgba(".concat(o.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(R.disabled)]:{borderRight:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},{props:{variant:"text",orientation:"vertical"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderBottom:o.vars?"1px solid rgba(".concat(o.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(R.disabled)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},...Object.entries(o.palette).filter((0,b.A)()).flatMap((t=>{let[e]=t;return[{props:{variant:"text",color:e},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderColor:o.vars?"rgba(".concat(o.vars.palette[e].mainChannel," / 0.5)"):(0,h.X4)(o.palette[e].main,.5)}}}]})),{props:{variant:"outlined",orientation:"horizontal"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderRightColor:"transparent","&:hover":{borderRightColor:"currentColor"}},["& .".concat(R.lastButton,",& .").concat(R.middleButton)]:{marginLeft:-1}}},{props:{variant:"outlined",orientation:"vertical"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderBottomColor:"transparent","&:hover":{borderBottomColor:"currentColor"}},["& .".concat(R.lastButton,",& .").concat(R.middleButton)]:{marginTop:-1}}},{props:{variant:"contained",orientation:"horizontal"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderRight:"1px solid ".concat((o.vars||o).palette.grey[400]),["&.".concat(R.disabled)]:{borderRight:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},{props:{variant:"contained",orientation:"vertical"},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.grey[400]),["&.".concat(R.disabled)]:{borderBottom:"1px solid ".concat((o.vars||o).palette.action.disabled)}}}},...Object.entries(o.palette).filter((0,b.A)(["dark"])).map((t=>{let[e]=t;return{props:{variant:"contained",color:e},style:{["& .".concat(R.firstButton,",& .").concat(R.middleButton)]:{borderColor:(o.vars||o).palette[e].dark}}}}))],["& .".concat(R.grouped)]:{minWidth:40,boxShadow:"none",props:{variant:"contained"},style:{"&:hover":{boxShadow:"none"}}}}}))),w=r.forwardRef((function(t,o){const e=(0,f.b)({props:t,name:"MuiButtonGroup"}),{children:n,className:i,color:a="primary",component:s="div",disabled:l=!1,disableElevation:d=!1,disableFocusRipple:c=!1,disableRipple:h=!1,fullWidth:v=!1,orientation:A="horizontal",size:b="medium",variant:B="outlined"}=e,j=(0,p.A)(e,z),R=(0,u.A)((0,u.A)({},e),{},{color:a,component:s,disabled:l,disableElevation:d,disableFocusRipple:c,disableRipple:h,fullWidth:v,orientation:A,size:b,variant:B}),w=(t=>{const{classes:o,color:e,disabled:r,disableElevation:n,fullWidth:i,orientation:a,variant:s}=t,l={root:["root",s,a,i&&"fullWidth",n&&"disableElevation","color".concat((0,g.A)(e))],grouped:["grouped","grouped".concat((0,g.A)(a)),"grouped".concat((0,g.A)(s)),"grouped".concat((0,g.A)(s)).concat((0,g.A)(a)),"grouped".concat((0,g.A)(s)).concat((0,g.A)(e)),r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,x.A)(l,y,o)})(R),E=r.useMemo((()=>({className:w.grouped,color:a,disabled:l,disableElevation:d,disableFocusRipple:c,disableRipple:h,fullWidth:v,size:b,variant:B})),[a,l,d,c,h,v,b,B,w.grouped]),T=function(t){return r.Children.toArray(t).filter((t=>r.isValidElement(t)))}(n),L=T.length,W=t=>{const o=0===t,e=t===L-1;return o&&e?"":o?w.firstButton:e?w.lastButton:w.middleButton};return(0,I.jsx)(S,(0,u.A)((0,u.A)({as:s,role:"group",className:(0,m.A)(w.root,i),ref:o,ownerState:R},j),{},{children:(0,I.jsx)(k.A.Provider,{value:E,children:T.map(((t,o)=>(0,I.jsx)(C.A.Provider,{value:W(o),children:t},o)))})}))})),E=w;var T=e(7908),L=e(7332),W=e(1954);const M=(0,e(9662).A)((0,I.jsx)("path",{d:"m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"}),"Movie");var O=e(6364),H=e(1695),N=e(4117);const F=function(){const{t:t}=(0,N.Bd)(),{userItems:o}=(0,r.useContext)(H.A);(0,r.useEffect)((()=>{localStorage.setItem("userItems",JSON.stringify(o))}),[o]);const{id:e}=(0,i.g)(),u=(0,n.GX)(e),p=(0,n.US)(e),m=(0,i.Zp)();return u.isLoading||p.isLoading?(0,I.jsx)(a.A,{display:"flex",justifyContent:"center",margin:"auto",children:(0,I.jsx)(s.A,{size:"8rem"})}):u.error||p.error?(0,I.jsx)(T.A,{}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,I.jsx)(l.Ay,{item:!0,md:3,mt:"15px",sm:12,children:(0,I.jsx)("img",{src:u.data.posterUrl,alt:u.data.nameRu,width:"100%"})}),(0,I.jsxs)(l.Ay,{item:!0,md:7,sm:12,children:[(0,I.jsxs)(l.Ay,{container:!0,children:[(0,I.jsx)(l.Ay,{item:!0,xs:1,children:(0,I.jsx)(d.A,{startIcon:(0,I.jsx)(L.A,{}),size:"large",onClick:()=>m(-1)})}),(0,I.jsx)(l.Ay,{item:!0,xs:9,ml:"10px",children:(0,I.jsx)(c.A,{variant:"h5",alignContent:"center",children:u.data.nameRu})}),(0,I.jsx)(l.Ay,{item:!0,xs:1,ml:"10px",children:(0,I.jsx)(c.A,{position:"relative",variant:"h5",alignContent:"center",children:o.some((t=>!0===t.session))&&(0,I.jsx)(O.A,{movie:u.data})})})]}),(0,I.jsxs)(l.Ay,{container:!0,children:[(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{children:"\u0413\u043e\u0434"})]}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{gutterBottom:!0,children:u.data.year})]}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{children:"\u0421\u0442\u0440\u0430\u043d\u0430"})]}),(0,I.jsx)(l.Ay,{item:!0,xs:6,children:u.data.countries.map((t=>{let{country:o}=t;return(0,I.jsx)(c.A,{gutterBottom:!0,children:o},o)}))}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{children:"\u0416\u0430\u043d\u0440\u044b"})]}),(0,I.jsx)(l.Ay,{item:!0,xs:6,children:u.data.genres.map((t=>{let{genre:o}=t;return(0,I.jsx)(c.A,{gutterBottom:!0,children:o},o)}))}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{children:"\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044b"})]}),(0,I.jsx)(l.Ay,{item:!0,xs:6,children:p.data.filter((t=>"\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044b"===t.professionText)).map((t=>{let{nameRu:o}=t;return(0,I.jsx)(c.A,{gutterBottom:!0,children:o},o)}))}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsx)(c.A,{children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"})]}),(0,I.jsxs)(l.Ay,{item:!0,xs:6,children:[" ",(0,I.jsxs)(c.A,{gutterBottom:!0,children:[u.data.filmLength," \u043c\u0438\u043d"]})]}),(0,I.jsxs)(l.Ay,{item:!0,xs:12,children:[" ",(0,I.jsx)(c.A,{gutterBottom:!0,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]}),(0,I.jsxs)(l.Ay,{item:!0,xs:12,children:[" ",(0,I.jsx)(c.A,{gutterBottom:!0,children:u.data.description?u.data.description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0430 \u043f\u043e\u0440\u0442\u0430\u043b\u0435"})]})]})]}),(0,I.jsxs)(l.Ay,{item:!0,md:2,sm:12,children:[(0,I.jsx)(c.A,{variant:"h6",children:"\u0412 \u0433\u043b\u0430\u0432\u043d\u044b\u0445 \u0440\u043e\u043b\u044f\u0445:"}),p.data.filter((t=>"\u0410\u043a\u0442\u0435\u0440\u044b"===t.professionText)).slice(0,15).map((t=>{let{nameRu:o}=t;return(0,I.jsx)(c.A,{gutterBottom:!0,children:o},o)}))]})]}),(0,I.jsx)(l.Ay,{container:!0,spacing:2,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",mt:"5px",children:(0,I.jsx)(l.Ay,{item:!0,xs:12,children:(0,I.jsxs)(E,{variant:"outlined",size:"small",children:[(0,I.jsx)(d.A,{target:"_blank",component:i.N_,to:u.data.webUrl,endIcon:(0,I.jsx)(W.A,{}),children:t("kinopoisk")}),u.data.imbId&&(0,I.jsx)(d.A,{target:"_blank",component:"Link",to:"https://www.imdb.com/title/".concat(u.data.imbId),endIcon:(0,I.jsx)(M,{}),children:"IMDB"})]})})})]})}},6364:(t,o,e)=>{e.d(o,{A:()=>p});var r=e(9379),n=e(5043),i=e(1695);const a={favoriteIcon:"AddToFavorite_favoriteIcon__vGTwf"};var s=e(5244),l=e(4851),d=e(4681),c=e(4117),u=e(579);function p(t){let{movie:o}=t;const{userItems:e,movieItems:p,setMovieItems:m}=(0,n.useContext)(i.A),{t:x}=(0,c.Bd)(),[h,g]=(0,n.useState)(!1);(0,n.useEffect)((()=>{localStorage.setItem("movieItems",JSON.stringify(p))}),[p]),(0,n.useEffect)((()=>{localStorage.setItem("userItems",JSON.stringify(e))}),[e]);const v=p&&p.some((t=>t.kinopoiskId===o.kinopoiskId))?{color:l.A[500]}:{color:d.A[500]};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.A,{onClick:()=>{g(!h);try{const t=p&&p.find((t=>t.kinopoiskId===o.kinopoiskId));m(t?t=>t.filter((t=>t.kinopoiskId!==o.kinopoiskId)):t=>[...t,o])}catch(t){alert(x("likeError")),console.error(t)}},className:a.favoriteIcon,fontSize:"large",sx:(0,r.A)({},v)})})}},7332:(t,o,e)=>{e.d(o,{A:()=>i});var r=e(9662),n=e(579);const i=(0,r.A)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},5244:(t,o,e)=>{e.d(o,{A:()=>i});var r=e(9662),n=e(579);const i=(0,r.A)((0,n.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite")}}]);
//# sourceMappingURL=961.056c6730.chunk.js.map