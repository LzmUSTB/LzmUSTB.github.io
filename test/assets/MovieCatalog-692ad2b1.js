import{_ as $,u as F,r as v,x as M,o as B,A as R,b as r,c as u,d as a,l as b,m as k,y as w,q as G,t as _,F as C,f as S,z as D,s as O,p as V,g as N,h as U}from"./index-8eea6d4b.js";const Y={CATALOG:{Genre:{name:"Genre",data:["Drama","Crime","Action","Biography","History","Adventure","Western","Animation","Sci-Fi","Fantasy","Mystery","Family","Thriller","War"]}}};const A=d=>(V("data-v-340b358f"),d=d(),N(),d),j={class:"maincontainer_mc"},q={class:"texture_glass catalog_form"},z={class:"catalog_raw"},E=A(()=>a("div",{class:"catalog_name"},"Year",-1)),W={class:"catalog_data_frame"},H={style:{color:"rgb(185, 0, 0)"}},X={class:"catalog_raw"},J=["onClick"],P={class:"catalog_data_frame"},Q=["onClick"],Z={class:"searchResult"},ee=["onClick"],te=A(()=>a("img",{class:"result_filter",src:U},null,-1)),se=["src"],ae={class:"resultInfo"},le={class:"resultTitle"},oe={class:"resultRate"},ne={__name:"MovieCatalog",props:["searchKey"],setup(d){const h=d,I=F(),T=Y.CATALOG,l=v(""),o=v(""),y=v(""),f=v([]),m=v({Genre:[]}),i=v({Genre:[]});M(()=>h.searchKey,(s,t)=>{p()}),B(()=>{p()});const x=s=>{i.value[s]=[],m.value[s]=[],console.log(h.searchKey),p()},K=(s,t,e)=>{const n=i.value[s].indexOf(t);n!==-1?(i.value[s].splice(n,1),m.value[s][e]=!1):(i.value[s].push(t),m.value[s][e]=!0),p()},L=async s=>{await I.push({path:"/movieDetail",query:{keyword:s}})},g=s=>{const t=/^\d{4}$/;if(s=="left"){if(!t.test(l.value)&&l.value!=""){y.value="※请输入正确的年份",l.value="";return}l.value!=""&&o.value!=""&&l.value>o.value&&(o.value=l.value)}else{if(!t.test(o.value)&&o.value!=""){y.value="※请输入正确的年份",o.value="";return}l.value!=""&&o.value!=""&&l.value>o.value&&(l.value=o.value)}y.value="",p()},p=()=>{const s=l.value==""?1930:l.value,t=o.value==""?2023:o.value,e=i.value.Genre.length==0?[""]:i.value.Genre;R({url:"/getSelected",method:"get",params:{Genre:e,Year1:s,Year2:t,Keyword:h.searchKey}}).then(n=>{console.log("/getSelected success"),f.value=n.data.SelectedMovies,f.value.forEach(c=>{c.movie_img_id=new URL("../assets/images/"+c.movie_img_id+".jpg",import.meta.url)})}).catch(n=>{console.log(n)})};return(s,t)=>(r(),u("div",j,[a("div",q,[a("div",z,[E,a("div",W,[b(a("input",{class:"catalog_datas yearInput",type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),onBlur:t[1]||(t[1]=e=>g("left")),onKeyup:t[2]||(t[2]=w(e=>g("left"),["enter"]))},null,544),[[k,l.value]]),G(" ~ "),b(a("input",{class:"catalog_datas yearInput",type:"number","onUpdate:modelValue":t[3]||(t[3]=e=>o.value=e),onBlur:t[4]||(t[4]=e=>g("right")),onKeyup:t[5]||(t[5]=w(e=>g("right"),["enter"]))},null,544),[[k,o.value]]),a("p",H,_(y.value),1)])]),(r(!0),u(C,null,S(D(T),e=>(r(),u("div",X,[a("div",{class:"catalog_name",onClick:n=>x(e.name)},_(e.name),9,J),a("div",P,[(r(!0),u(C,null,S(e.data,(n,c)=>(r(),u("div",{class:O({button_2:!m.value[e.name][c],button_1:m.value[e.name][c],catalog_datas:!0}),onClick:re=>K(e.name,n,c)},_(n),11,Q))),256))])]))),256))]),a("div",Z,[(r(!0),u(C,null,S(f.value,e=>(r(),u("div",{class:"resultTemplate",onClick:n=>L(e.movie_id)},[te,a("img",{class:"result_img",src:e.movie_img_id},null,8,se),a("div",ae,[a("div",le,[G(_(e.movie_title)+" ",1),a("p",null,_(e.movie_year),1)]),a("div",oe,"★"+_(e.movie_rate),1)])],8,ee))),256))])]))}},ie=$(ne,[["__scopeId","data-v-340b358f"]]);export{ie as default};
