var T=Object.defineProperty;var I=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,q=(e,t)=>{for(var o in t||(t={}))U.call(t,o)&&V(e,o,t[o]);if(I)for(var o of I(t))M.call(t,o)&&V(e,o,t[o]);return e};import{o as c,c as p,r as B,n as F,u as y,a as u,w as k,v as A,b as n,d as l,e as g,f as h,F as C,g as x,h as L,i as G,j as H,t as w,k as N,l as D,m as E,p as R,T as P,q as j,s as z,x as K,y as W}from"./vendor.5269d06a.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};J();var m=(e,t)=>{const o=e.__vccOpts||e;for(const[s,a]of t)o[s]=a;return o};const Q={props:{variant:{type:String,default:"secondary"},type:{type:String,default:"button"}}},X=["type"];function Y(e,t,o,s,a,r){return c(),p("button",{type:o.type,class:F(["btn",`btn btn-${o.variant}`])},[B(e.$slots,"default")],10,X)}var b=m(Q,[["render",Y]]),Z="/tkambio-prueba-frontend/assets/logo.56c5519b.svg";const ee={components:{Btn:b},setup(){const e=y();return{handleSignOut:()=>{e.dispatch("auth/signOut")}}}},te={class:"navbar"},ne=n("div",null,null,-1),oe=n("div",{class:"brand-header"},[n("img",{src:Z,alt:""})],-1),se={style:{"text-align":"right"},class:"mr-20"},ae=h("Cerrar sesi\xF3n");function re(e,t,o,s,a,r){const i=u("Btn");return c(),p("div",te,[ne,oe,k(n("div",se,[l(i,{onClick:s.handleSignOut},{default:g(()=>[ae]),_:1},8,["onClick"])],512),[[A,e.$store.state.auth.isAuthenticated]])])}var ie=m(ee,[["render",re]]);const le={name:"App",components:{Header:ie}};function de(e,t,o,s,a,r){const i=u("Header"),d=u("router-view");return c(),p(C,null,[l(i),l(d)],64)}var ce=m(le,[["render",de]]);const ue="https://tkambio-prueba.herokuapp.com/public/";x.defaults.withCredentials=!0;const v=x.create({baseURL:ue,timeout:9e3,headers:{"Access-Control-Allow-Credentials":"True","Content-Type":"application/json"},withCredentials:!0});v.interceptors.request.use(e=>(e.headers.Authorization=`Bearer ${localStorage.getItem("access_token")}`,e));const pe=e=>{window.open(`https://tkambio-prueba.herokuapp.com/public/api/get-report/${e}`)};var _e="/tkambio-prueba-frontend/assets/download.d892e319.svg";const me={components:{Btn:b},setup(){const e=L([]),t=y();return G(()=>{t.dispatch("reports/getListFromApi")}),{items:e,getReport:pe}}},he={class:"card-table"},fe={class:"table-reports"},ge=n("thead",null,[n("tr",null,[n("th",null,"T\xEDtulo"),n("th",null,"Fecha de creaci\xF3n "),n("th",null,"Acci\xF3n")])],-1),ve={class:"border-vertical text-center"},$e={class:"border-vertical text-right"},be=n("strong",{style:{color:"white"}},"Descargar",-1),ye=n("img",{src:_e,alt:""},null,-1);function Se(e,t,o,s,a,r){const i=u("Btn");return c(),p("div",he,[n("table",fe,[ge,n("tbody",null,[(c(!0),p(C,null,H(e.$store.state.reports.items,d=>(c(),p("tr",{key:d.interface_id,style:{padding:"10px"}},[n("td",null,w(d.title),1),n("td",ve,w(d.created_at),1),n("td",$e,[l(i,{type:"link",variant:"link",onClick:_=>s.getReport(d.interface_id)},{default:g(()=>[be,ye]),_:2},1032,["onClick"])])]))),128))])])])}var ke=m(me,[["render",Se]]);const Ae={props:{label:{required:!0},type:{type:String,default:"text"},nameInput:{type:String,default:""},required:{type:Boolean,default:!1},id:{type:String,required:!0},modelValue:{type:String,required:!0}},setup(){return{input:N("")}}},Le={class:"input-group"},we=["required","type","name","id","value"],Ie=["for"];function Ve(e,t,o,s,a,r){return c(),p("div",Le,[n("input",{required:o.required,type:o.type,name:o.nameInput,id:o.id,placeholder:" ",value:o.modelValue,onInput:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value))},null,40,we),n("label",{for:o.id},w(o.label),9,Ie)])}var O=m(Ae,[["render",Ve]]);const qe={},Be={class:"lds-ellipsis"},Ce=n("div",null,null,-1),xe=n("div",null,null,-1),Re=n("div",null,null,-1),Oe=n("div",null,null,-1),Te=[Ce,xe,Re,Oe];function Ue(e,t){return c(),p("div",Be,Te)}var Me=m(qe,[["render",Ue]]);const Fe={name:"Modal",components:{Btn:b,Input:O,Loader:Me},setup(e,{emit:t}){const o=y(),s={descripcion:"",fecha_nacimiento_inicio:"",fecha_nacimiento_fin:""},a=L(q({},s)),r=d=>{o.dispatch("reports/generateReports",a),Object.assign(a,s)},i=D(()=>a.descripcion.length&&a.fecha_nacimiento_inicio.length&&a.fecha_nacimiento_fin.length);return{handleSubmit:r,form:a,canGenerate:i}}},Ge={class:"modal-backdrop"},He={class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},Ne={class:"modal-body",id:"modalDescription"},De={class:"text-right"},Ee=h(" \u274C "),Pe=n("div",{class:"text-center"},[n("div",{class:"title-mobile"}," Reporte por fecha de nacimiento "),n("div",{class:"mb-30 mt-15"}," Ingresa los siguientes datos para generar el reporte ")],-1),je={class:"grid"},ze={class:"col-span-2"},Ke=n("span",{class:"col-span-2 mt-20 mb-10"}," Fecha de nacimiento ",-1),We={class:"modal-footer text-center mt-20 mb-20"},Je=n("br",null,null,-1),Qe=h(" Generar reporte ");function Xe(e,t,o,s,a,r){const i=u("Btn"),d=u("Input"),_=u("Loader");return c(),E(P,{name:"modal-fade"},{default:g(()=>[n("div",Ge,[n("div",He,[n("section",Ne,[n("form",{onSubmit:t[4]||(t[4]=R((...f)=>s.handleSubmit&&s.handleSubmit(...f),["prevent"]))},[B(e.$slots,"body",{},()=>[n("div",De,[l(i,{variant:"link",onClick:t[0]||(t[0]=()=>e.$store.commit("ui/setModelState",!1))},{default:g(()=>[Ee]),_:1})]),Pe]),n("div",je,[n("div",ze,[l(d,{required:"",modelValue:s.form.descripcion,"onUpdate:modelValue":t[1]||(t[1]=f=>s.form.descripcion=f),label:"Descripci\xF3n del reporte",id:"input-1"},null,8,["modelValue"])]),Ke,l(d,{required:"",modelValue:s.form.fecha_nacimiento_inicio,"onUpdate:modelValue":t[2]||(t[2]=f=>s.form.fecha_nacimiento_inicio=f),type:"date",label:"Inicio",id:"input-2"},null,8,["modelValue"]),l(d,{required:"",modelValue:s.form.fecha_nacimiento_fin,"onUpdate:modelValue":t[3]||(t[3]=f=>s.form.fecha_nacimiento_fin=f),type:"date",label:"Fin",id:"input-3"},null,8,["modelValue"])]),n("footer",We,[k(l(_,null,null,512),[[A,e.$store.state.ui.loading]]),Je,l(i,{loading:e.$store.state.ui.loading,disabled:!s.canGenerate||e.$store.state.ui.loading,type:"submit","aria-label":"Close modal"},{default:g(()=>[Qe]),_:1},8,["loading","disabled"])])],32)])])])]),_:3})}var Ye=m(Fe,[["render",Xe]]);const Ze={components:{TableReports:ke,Btn:b,ReportGeneratorModal:Ye},setup(){}},et={class:"container"},tt=n("h1",{class:"text-center mt-50 mb-75"}," Generador de reportes TK ",-1),nt={class:"text-center mt-30 mb-30"},ot=h(" Crear reporte ");function st(e,t,o,s,a,r){const i=u("TableReports"),d=u("Btn"),_=u("ReportGeneratorModal");return c(),p("div",et,[tt,l(i),n("div",nt,[l(d,{onClick:t[0]||(t[0]=()=>e.$store.commit("ui/setModelState",!0))},{default:g(()=>[ot]),_:1})]),k(l(_,null,null,512),[[A,e.$store.state.ui.modalOpened]])])}var at=m(Ze,[["render",st]]);const rt={components:{Input:O,Btn:b},setup(){const e=y(),t=L({email:"admin@gmail.com",password:"admin12345"});return{form:t,handleSignIn:()=>{e.dispatch("auth/signIn",t)}}}},it={class:"container"},lt={class:"card"},dt={class:"card-content"},ct=n("div",{class:"mt-20 mb-20 text-center"},[n("h2",null,"Iniciar sesi\xF3n")],-1),ut={class:"text-center"},pt=h(" Ingresar "),_t=n("div",{class:"mt-25 mb-25 text-center"},[h(" Puedes probar con "),n("strong",null,"admin@gmail.com"),h(" y "),n("strong",null,"admin12345"),h(" solo por hoy \u{1F440} "),n("br"),n("br"),h(" Pero no se lo digas a nadie \u{1F92B} ")],-1);function mt(e,t,o,s,a,r){const i=u("Input"),d=u("Btn");return c(),p("div",it,[n("div",lt,[n("div",dt,[ct,n("form",{onSubmit:t[2]||(t[2]=R((..._)=>s.handleSignIn&&s.handleSignIn(..._),["prevent"]))},[l(i,{id:"input_email",label:"Email",modelValue:s.form.email,"onUpdate:modelValue":t[0]||(t[0]=_=>s.form.email=_)},null,8,["modelValue"]),l(i,{id:"input_contrase\xF1a",label:"Contrase\xF1a",modelValue:s.form.password,"onUpdate:modelValue":t[1]||(t[1]=_=>s.form.password=_),type:"password"},null,8,["modelValue"]),n("div",ut,[l(d,{disabled:e.$store.state.ui.loading,class:"mt-20",style:{width:"90%"},type:"submit"},{default:g(()=>[pt]),_:1},8,["disabled"])]),_t],32)])])])}var ht=m(rt,[["render",mt]]);const ft={},gt={class:"text-center mt-50"},vt=n("h4",null,"P\xE1gina no encontrada",-1),$t=[vt];function bt(e,t){return c(),p("div",gt,$t)}var yt=m(ft,[["render",bt]]),St={namespaced:!0,state:()=>({isAuthenticated:!1}),mutations:{setAuthenticated(e,t){e.isAuthenticated=t}},actions:{async signIn({commit:e,dispatch:t},o){return e("ui/setLoading",!0,{root:!0}),await v.get("/sanctum/csrf-cookie"),v.post("api/login",{params:{email:o.email,password:o.password}}).then(s=>s.data).then(s=>{s.status==1&&(localStorage.setItem("access_token",s.access_token),S.push({name:"home"}))}).catch(s=>{alert(s.response.data.msg)}).finally(()=>e("ui/setLoading",!1,{root:!0}))},async signOut({commit:e}){return e("ui/setLoading",!0,{root:!0}),v.get("api/logout").then(t=>t.data).then(t=>{e("setAuthenticated",!1),localStorage.removeItem("access_token"),S.push({name:"login"})}).finally(()=>e("ui/setLoading",!1,{root:!0}))},async getUserStatus({commit:e}){e("ui/setLoading",!0,{root:!0});try{let t=await v.get("api/user-profile");t=t.data,t.status==1&&e("setAuthenticated",!0)}catch{e("setAuthenticated",!1)}e("ui/setLoading",!1,{root:!0})},signUp({commit:e}){}},getters:{},modules:{}},kt={namespaced:!0,state:()=>({loading:!1,modalOpened:!1}),mutations:{setLoading(e,t){e.loading=t},setModelState(e,t){e.modalOpened=t}},actions:{},getters:{}},At={namespaced:!0,state:()=>({items:[]}),mutations:{setItems(e,t){e.items=t}},actions:{getListFromApi({commit:e}){e("ui/setLoading",!0,{root:!0}),v.get("api/list-reports").then(t=>t.data).then(t=>e("setItems",t.data)).finally(()=>e("ui/setLoading",!1,{root:!0}))},generateReports({commit:e,dispatch:t},o){e("ui/setLoading",!0,{root:!0}),v.post("api/generate-report",{params:{form:o}}).then(s=>s.data).then(s=>{s.ok&&t("getListFromApi"),e("ui/setModelState",!1,{root:!0})}).finally(()=>e("ui/setLoading",!1,{root:!0}))}},getters:{}},$=j({modules:{auth:St,ui:kt,reports:At}});const S=z({history:K(),routes:[{path:"",name:"home",component:at,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ht,meta:{requiresAuth:!1}},{path:"/:catchAll(.*)",name:"not_found",component:yt,meta:{requiresAuth:!1}}]});S.beforeEach((e,t,o)=>{const s=$.state.auth.isAuthenticated,a=e.matched.some(r=>r.meta.requiresAuth);e.name=="login"?$.dispatch("auth/getUserStatus").finally(()=>{$.state.auth.isAuthenticated?o({name:"home"}):o()}):a&&!s?$.dispatch("auth/getUserStatus").finally(()=>{$.state.auth.isAuthenticated?o():o({name:"login"})}):o()});W(ce).use(S).use($).mount("#app");
