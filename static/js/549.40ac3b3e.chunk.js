"use strict";(self.webpackChunkmovie_portal=self.webpackChunkmovie_portal||[]).push([[549],{6549:(e,s,t)=>{t.r(s),t.d(s,{default:()=>d});var a=t(4600),r=t(3360),l=t(2518),o=t(8446),n=t(5043),u=t(1695),i=t(4117),c=t(6580),p=t(579);const d=function(){const e=(0,c.Zp)(),{t:s}=(0,i.Bd)(),[t,d]=(0,n.useState)(""),[g,m]=(0,n.useState)(""),[x,h]=(0,n.useState)(""),[v,w]=(0,n.useState)(!1),[S,f]=(0,n.useState)(!1),[j,A]=(0,n.useState)(!1),[b,k]=(0,n.useState)(s("emailNull")),[C,I]=(0,n.useState)(s("passwordNull")),[y,E]=(0,n.useState)(s("passwordEqual")),[D,T]=(0,n.useState)(!1),{userItems:B,setUserItems:N}=(0,n.useContext)(u.A);(0,n.useEffect)((()=>{localStorage.setItem("userItems",JSON.stringify(B))}),[B]),(0,n.useEffect)((()=>{T(!(b||C||y))}),[b,C,y]);const q=e=>{switch(e.target.name){case"email":w(!0);break;case"password":f(!0);break;case"passwordDouble":A(!0)}};return(0,p.jsxs)(a.A,{alignItems:"center",children:[(0,p.jsx)("h1",{children:s("registrationAccount")}),(0,p.jsxs)(a.A,{flexDirection:"column",children:[b&&v&&(0,p.jsx)("div",{style:{color:"red"},children:b}),(0,p.jsx)(r.A,{onChange:e=>(e=>{d(e.target.value),B.some((s=>s.email===e.target.value))?k(s("emailDuplicate")):/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e.target.value).toLocaleLowerCase())?k(""):k(s("emailIncorrect"))})(e),value:t,sx:{marginTop:"25px"},onBlur:e=>q(e),name:"email",type:"text",placeholder:s("logEnter")}),C&&S&&(0,p.jsx)("div",{style:{color:"red"},children:C}),(0,p.jsx)(r.A,{onChange:e=>(e=>{m(e.target.value),e.target.value.length>8||e.target.value.length<3?(I(s("passwordIncorrect")),e.target.value.length||I(s("passwordNull"))):I("")})(e),value:g,sx:{marginTop:"25px"},onBlur:e=>q(e),name:"password",type:"password",placeholder:s("passwordEnter")}),y&&j&&(0,p.jsx)("div",{style:{color:"red"},children:y}),(0,p.jsx)(r.A,{onChange:e=>(e=>{h(e.target.value),e.target.value===g?E(""):E(s("passwordEqual"))})(e),value:x,sx:{marginTop:"25px"},onBlur:e=>q(e),name:"passwordDouble",type:"passwordDouble",placeholder:s("passwordEnter")}),(0,p.jsx)(l.A,{disabled:!D,sx:{marginTop:"25px"},onClick:()=>{N((e=>[...e,{email:t,password:g,session:!0,like:[]}])),d(""),m(""),h(""),e("/user")},children:s("confirm")}),(0,p.jsx)(l.A,{component:o.A,to:"/autorization",sx:{marginTop:"25px"},children:s("logInHaveAcc")})]})]})}}}]);
//# sourceMappingURL=549.40ac3b3e.chunk.js.map