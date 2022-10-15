import{_ as g,o as n,c,a as e,t as i,n as A,p as C,b as I,F as u,r as m,d as M,e as B,u as v,f as E,g as k,h as $}from"./index.d5b99117.js";const f="/assets/ArrowRight.602c6c2a.svg",O="/assets/Light_Arrow-white.26c0e837.svg";const L=s=>(C("data-v-0a74b905"),s=s(),I(),s),R=L(()=>e("h3",null,"\u2014\u2014",-1)),V={key:0,class:"arrow",src:O},F={key:1,class:"arrow",src:f},N={__name:"CategoryTemplate",props:["title","isChecked"],emits:["handle-select"],setup(s){const l="src/assets/images/"+s.title+"_icon.svg";return(d,o)=>(n(),c("div",{onClick:o[0]||(o[0]=p=>d.$emit("handle-select")),class:A(s.isChecked?"selected categoryContainer":"non-select categoryContainer")},[e("img",{class:"logo",src:l}),e("p",null,i(s.title),1),R,s.isChecked?(n(),c("img",V)):(n(),c("img",F))],2))}},U=g(N,[["__scopeId","data-v-0a74b905"]]),S="/assets/plus.cf5cd603.svg";const z={class:"itemContainer"},D={class:"itemInfo"},P={class:"contents"},j={class:"name"},q={class:"starRate"},G={class:"price"},J={__name:"MenuItem",props:["name","star","price"],emits:["handle-add"],setup(s){const l="/src/assets/images/"+s.name+".png";return(d,o)=>(n(),c("div",z,[e("img",{class:"itemImg",src:l}),e("div",D,[e("div",P,[e("h3",j,i(s.name),1),e("div",q,[(n(!0),c(u,null,m(Number(s.star),p=>(n(),c("span",null,"\u2605"))),256)),(n(!0),c(u,null,m(5-s.star,p=>(n(),c("span",null,"\u2606"))),256))]),e("div",G,[e("h3",null,"$"+i(s.price),1),e("img",{class:"plus",onClick:o[0]||(o[0]=p=>d.$emit("handle-add")),style:{cursor:"pointer"},src:S})])])])]))}},K=g(J,[["__scopeId","data-v-e7d473ee"]]),Q="/assets/Cartimage.26a0e48c.png",W="/assets/Deleteicon.447d4fed.svg";const T=s=>(C("data-v-f7db2e4a"),s=s(),I(),s),X={class:"cartItem"},Y=T(()=>e("img",{class:"itemImg",src:Q},null,-1)),Z={class:"textContainer"},ee={class:"text"},se={class:"name"},te={class:"count"},ne=T(()=>e("span",{class:"cross"},"\xD7",-1)),ce={class:"price"},oe={__name:"CheckOutItem",props:["name","count","price"],emits:["handle-cancel"],setup(s){const a=s,l=M(()=>(Number(a.count)*a.price).toFixed(2));return(d,o)=>(n(),c("div",X,[Y,e("div",Z,[e("div",ee,[e("h3",se,i(s.name),1),e("img",{onClick:o[0]||(o[0]=p=>d.$emit("handle-cancel")),class:"trash",src:W}),e("span",te,[ne,B(i(s.count),1)]),e("div",ce,"$"+i(v(l)),1)])])]))}},ae=g(oe,[["__scopeId","data-v-f7db2e4a"]]),le="/assets/Trendingimage.05d86b04.png";const b=s=>(C("data-v-deba98c9"),s=s(),I(),s),ie={class:"trendItem"},de={class:"texts"},re={class:"date"},_e=b(()=>e("h3",{class:"name"},"Italian Salad",-1)),ue={class:"calories"},he=b(()=>e("h4",{style:{color:"#959895"}},"\u2014\u2014\u2014",-1)),me={class:"persons"},pe={class:"price"},ve=b(()=>e("img",{class:"itemImg",src:le},null,-1)),ge={__name:"TrendItem",props:["date","persons","name","price","calories"],emits:["handle-add"],setup(s){return(a,l)=>(n(),c("div",ie,[e("div",de,[e("h4",re,"\u{1F451}Top of the "+i(s.date),1),_e,e("div",null,[e("h4",ue,i(s.calories)+" Calories",1),he,e("h4",me,i(s.persons)+" persons",1)]),e("div",pe,[e("h3",null,"$"+i(s.price),1),e("img",{class:"plus",onClick:l[0]||(l[0]=d=>a.$emit("handle-add")),style:{cursor:"pointer"},src:S})])]),ve]))}},$e=g(ge,[["__scopeId","data-v-deba98c9"]]);const _=s=>(C("data-v-d1b01d31"),s=s(),I(),s),Ce={class:"HOMEcontainer"},Ie={class:"banner"},fe={class:"texts"},ye=_(()=>e("h4",null,"\u{1F451}Deal of the weekend",-1)),ke=_(()=>e("h3",null,"\u2003\u2003FREE delivery",-1)),be=_(()=>e("button",{style:{cursor:"pointer"},class:"checkMenu"},[e("span",null,"Check Menu")],-1)),we=_(()=>e("div",{class:"coupon"},null,-1)),Se={class:"SUBcontainer"},Te={class:"menuCategory"},xe=_(()=>e("div",{class:"category"},[e("h1",null,"Menu category"),e("div",null,"View All"),e("img",{src:f})],-1)),He={class:"menuList"},Ae={class:"menuItems"},Me={class:"asideContainer"},Be={class:"cart"},Ee=_(()=>e("div",{class:"asideTitle"},[e("h2",null,"My Cart")],-1)),Oe={class:"cartItems"},Le={class:"SUBcontainer"},Re={class:"trendingOrders"},Ve=_(()=>e("div",{class:"title"},[e("h1",null,"Trending Orders"),e("div",null,"View All"),e("img",{src:f})],-1)),Fe={class:"trendingItems"},Ne={class:"asideContainer"},Ue={class:"tags"},ze=_(()=>e("div",{class:"asideTitle viewAllInTitle"},[e("h2",null,"Categories"),e("div",{class:"viewAll"},[e("span",null,"View All"),e("img",{src:f})])],-1)),De={class:"tagItems"},Pe={class:"tagButton"},je=_(()=>e("div",{class:"footer"},null,-1)),qe={__name:"Home",setup(s){const a=E(),l=k(a.menu),d=k(l.value[0].name),o=k([]),p=r=>{l.value.forEach(h=>{h.isChecked=!1}),r.isChecked=!0,d.value=r.name},w=r=>{var h=!0;o.value.forEach(t=>{t.name==r.name&&(t.count++,h=!1)}),h&&o.value.push({name:r.name,price:r.price,count:1})},x=r=>{o.value=o.value.filter(h=>h.name!=r.name)},H=()=>{console.log(o.value)};return(r,h)=>(n(),c(u,null,[e("div",Ce,[e("div",Ie,[e("div",fe,[ye,e("h1",null,"Hello,"+i(v(a).user.name),1),ke,be])]),we]),e("div",Se,[e("div",Te,[xe,e("div",He,[(n(!0),c(u,null,m(l.value,t=>(n(),$(U,{title:t.name,isChecked:t.isChecked,onHandleSelect:y=>p(t)},null,8,["title","isChecked","onHandleSelect"]))),256))]),e("div",Ae,[(n(!0),c(u,null,m(v(a).Pizza_menu,t=>(n(),$(K,{name:t.name,star:t.star,price:t.price,onHandleAdd:y=>w(t)},null,8,["name","star","price","onHandleAdd"]))),256))])]),e("div",Me,[e("div",Be,[Ee,e("div",Oe,[(n(!0),c(u,null,m(o.value,t=>(n(),$(ae,{name:t.name,price:t.price,count:t.count,onHandleCancel:y=>x(t)},null,8,["name","price","count","onHandleCancel"]))),256))]),e("button",{onClick:H,class:"cartCheckout"}," Checkout ")])])]),e("div",Le,[e("div",Re,[Ve,e("div",Fe,[(n(!0),c(u,null,m(v(a).trend_menu,t=>(n(),$($e,{date:t.date,calories:t.calories,persons:t.persons,price:t.price,onHandleAdd:y=>w(t)},null,8,["date","calories","persons","price","onHandleAdd"]))),256))])]),e("div",Ne,[e("div",Ue,[ze,e("div",De,[(n(!0),c(u,null,m(v(a).tags,t=>(n(),c("button",Pe,i(t),1))),256))])])])]),je],64))}},Je=g(qe,[["__scopeId","data-v-d1b01d31"]]);export{Je as default};
