"use strict";(self.webpackChunkmovie_portal=self.webpackChunkmovie_portal||[]).push([[362],{6362:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var i=t(4600),s=t(8446),n=t(7739),r=t(1e3),a=t(6682),c=t(5043),l=t(6580),m=t(9163),d=t(1695),p=t(8293),k=t(579);const f=function(){const{movieItems:e}=(0,c.useContext)(d.A);return(0,c.useEffect)((()=>{localStorage.setItem("movieItems",JSON.stringify(e))}),[e]),(0,k.jsx)(i.A,{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",children:e.map((e=>(0,k.jsxs)(i.A,{alignItems:"center",sx:{position:"relative"},children:[(0,k.jsx)(p.A,{movie:e}),(0,k.jsx)(l.N_,{to:"/movie/".concat(e.kinopoiskId||e.filmId),children:(0,k.jsx)("img",{src:e.posterUrlPreview,alt:e.nameRu,className:m.A.img})}),(0,k.jsx)(s.A,{component:l.N_,to:"/movie/".concat(e.kinopoiskId||e.filmId),className:m.A.textTypography,children:e.nameRu?e.nameRu:e.nameEng}),e.ratingKinopoisk&&(0,k.jsx)(i.A,{children:(0,k.jsx)(n.A,{title:"".concat(e.ratingKinopoisk," / 10"),children:(0,k.jsx)(r.A,{children:(0,k.jsx)(a.A,{name:"read-only",value:e.ratingKinopoisk/2,precision:.1,readOnly:!0})})})})]},e.kinopoiskId)))})}},6364:(e,o,t)=>{t.d(o,{A:()=>p});var i=t(9379),s=t(5043),n=t(1695);const r={favoriteIcon:"AddToFavorite_favoriteIcon__vGTwf"};var a=t(5244),c=t(4851),l=t(4681),m=t(4117),d=t(579);function p(e){let{movie:o}=e;const{userItems:t,movieItems:p,setMovieItems:k}=(0,s.useContext)(n.A),{t:f}=(0,m.Bd)(),[I,v]=(0,s.useState)(!1);(0,s.useEffect)((()=>{localStorage.setItem("movieItems",JSON.stringify(p))}),[p]),(0,s.useEffect)((()=>{localStorage.setItem("userItems",JSON.stringify(t))}),[t]);const u=p&&p.some((e=>e.kinopoiskId===o.kinopoiskId))?{color:c.A[500]}:{color:l.A[500]};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.A,{onClick:()=>{v(!I);try{const e=p&&p.find((e=>e.kinopoiskId===o.kinopoiskId));k(e?e=>e.filter((e=>e.kinopoiskId!==o.kinopoiskId)):e=>[...e,o])}catch(e){alert(f("likeError")),console.error(e)}},className:r.favoriteIcon,fontSize:"large",sx:(0,i.A)({},u)})})}},8293:(e,o,t)=>{t.d(o,{A:()=>i});const i=t(6364).A},9163:(e,o,t)=>{t.d(o,{A:()=>i});const i={img:"MoviesCard_img__mrpe7",textTypography:"MoviesCard_textTypography__eihA1"}}}]);
//# sourceMappingURL=362.bc0009b1.chunk.js.map