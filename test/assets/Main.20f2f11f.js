import{u as Ze,t as Ee}from"./base.dadd36e8.js";import{c as oe,u as $n,a as Mn,E as kn,b as Le,O as Tn,d as Sn,w as We,F as On,e as Nn}from"./el-tooltip.a370f8d6.js";import{b as ae,i as ce,d as R,u as A,r as M,p as se,o as be,a as h,c as N,e as T,n as U,f as y,_ as L,g as Z,h as F,t as Bn,j as q,k as P,w as v,l as he,E as me,m as ue,q as fe,s as Me,v as le,x as ie,y as Pn,T as Qe,z as Rn,A as b,B as ke,C as De,D as $,F as Fn,G as de,H as ge,I as An,J as z,K as E,L as Ln,M as Dn,N as Xe,O as en,P as Kn,Q as zn,R as Hn,S as $e,U as re,V as ye,W as Ne,X as Gn,Y as Vn,Z as Ke,$ as j,a0 as pe,a1 as Fe,a2 as Ae,a3 as xe,a4 as jn,a5 as Un,a6 as Yn,a7 as Wn,a8 as xn,a9 as ve,aa as Te,ab as ze,ac as He,ad as Jn,ae as Ie,af as qn,ag as Zn}from"./index.f905c1fa.js";import{c as nn,t as we,f as Qn,E as Xn}from"./index.393c64d8.js";import{E as Ge,T as et}from"./el-button.d3b42592.js";const tn=Symbol("breadcrumbKey"),nt=ae({separator:{type:String,default:"/"},separatorIcon:{type:ce}}),tt={name:"ElBreadcrumb"},ot=R({...tt,props:nt,setup(e){const t=e,o=A("breadcrumb"),n=M();return se(tn,t),be(()=>{const s=n.value.querySelectorAll(`.${o.e("item")}`);s.length&&s[s.length-1].setAttribute("aria-current","page")}),(s,p)=>(h(),N("div",{ref_key:"breadcrumb",ref:n,class:U(y(o).b()),"aria-label":"Breadcrumb",role:"navigation"},[T(s.$slots,"default")],2))}});var st=L(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const lt=ae({to:{type:Z([String,Object]),default:""},replace:{type:Boolean,default:!1}}),at={name:"ElBreadcrumbItem"},rt=R({...at,props:lt,setup(e){const t=e,o=fe(),n=F(tn,void 0),s=A("breadcrumb"),{separator:p,separatorIcon:l}=Bn(n),a=o.appContext.config.globalProperties.$router,r=M(),d=()=>{!t.to||!a||(t.replace?a.replace(t.to):a.push(t.to))};return(c,u)=>(h(),N("span",{class:U(y(s).e("item"))},[q("span",{ref_key:"link",ref:r,class:U([y(s).e("inner"),y(s).is("link",!!c.to)]),role:"link",onClick:d},[T(c.$slots,"default")],2),y(l)?(h(),P(y(me),{key:0,class:U(y(s).e("separator"))},{default:v(()=>[(h(),P(he(y(l))))]),_:1},8,["class"])):(h(),N("span",{key:1,class:U(y(s).e("separator")),role:"presentation"},ue(y(p)),3))],2))}});var on=L(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const ut=Me(st,{BreadcrumbItem:on}),it=le(on),ct={name:"ElCollapseTransition"},dt=R({...ct,setup(e){const t=A("collapse-transition"),o={beforeEnter(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0},enter(n){n.dataset.oldOverflow=n.style.overflow,n.scrollHeight!==0?(n.style.maxHeight=`${n.scrollHeight}px`,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom):(n.style.maxHeight=0,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom),n.style.overflow="hidden"},afterEnter(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow},beforeLeave(n){n.dataset||(n.dataset={}),n.dataset.oldPaddingTop=n.style.paddingTop,n.dataset.oldPaddingBottom=n.style.paddingBottom,n.dataset.oldOverflow=n.style.overflow,n.style.maxHeight=`${n.scrollHeight}px`,n.style.overflow="hidden"},leave(n){n.scrollHeight!==0&&(n.style.maxHeight=0,n.style.paddingTop=0,n.style.paddingBottom=0)},afterLeave(n){n.style.maxHeight="",n.style.overflow=n.dataset.oldOverflow,n.style.paddingTop=n.dataset.oldPaddingTop,n.style.paddingBottom=n.dataset.oldPaddingBottom}};return(n,s)=>(h(),P(Qe,ie({name:y(t).b()},Pn(o)),{default:v(()=>[T(n.$slots,"default")]),_:3},16,["name"]))}});var Ce=L(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);Ce.install=e=>{e.component(Ce.name,Ce)};const pt=Ce,mt={name:"ElContainer"},ft=R({...mt,props:{direction:{type:String}},setup(e){const t=e,o=Rn(),n=A("container"),s=b(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:o&&o.default?o.default().some(l=>{const a=l.type.name;return a==="ElHeader"||a==="ElFooter"}):!1);return(p,l)=>(h(),N("section",{class:U([y(n).b(),y(n).is("vertical",y(s))])},[T(p.$slots,"default")],2))}});var vt=L(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const _t={name:"ElAside"},ht=R({..._t,props:{width:{type:String,default:null}},setup(e){const t=e,o=A("aside"),n=b(()=>t.width?o.cssVarBlock({width:t.width}):{});return(s,p)=>(h(),N("aside",{class:U(y(o).b()),style:ke(y(n))},[T(s.$slots,"default")],6))}});var sn=L(ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const gt={name:"ElFooter"},bt=R({...gt,props:{height:{type:String,default:null}},setup(e){const t=e,o=A("footer"),n=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(s,p)=>(h(),N("footer",{class:U(y(o).b()),style:ke(y(n))},[T(s.$slots,"default")],6))}});var ln=L(bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const yt={name:"ElHeader"},It=R({...yt,props:{height:{type:String,default:null}},setup(e){const t=e,o=A("header"),n=b(()=>t.height?o.cssVarBlock({height:t.height}):{});return(s,p)=>(h(),N("header",{class:U(y(o).b()),style:ke(y(n))},[T(s.$slots,"default")],6))}});var an=L(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const wt={name:"ElMain"},Ct=R({...wt,setup(e){const t=A("main");return(o,n)=>(h(),N("main",{class:U(y(t).b())},[T(o.$slots,"default")],2))}});var rn=L(Ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Et=Me(vt,{Aside:sn,Footer:ln,Header:an,Main:rn}),$t=le(sn);le(ln);const Mt=le(an),kt=le(rn),Tt={inheritAttrs:!1};function St(e,t,o,n,s,p){return T(e.$slots,"default")}var Ot=L(Tt,[["render",St],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const Nt={name:"ElCollectionItem",inheritAttrs:!1};function Bt(e,t,o,n,s,p){return T(e.$slots,"default")}var Pt=L(Nt,[["render",Bt],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const un="data-el-collection-item",cn=e=>{const t=`El${e}Collection`,o=`${t}Item`,n=Symbol(t),s=Symbol(o),p={...Ot,name:t,setup(){const a=M(null),r=new Map;se(n,{itemMap:r,getItems:()=>{const c=y(a);if(!c)return[];const u=Array.from(c.querySelectorAll(`[${un}]`));return[...r.values()].sort((i,w)=>u.indexOf(i.ref)-u.indexOf(w.ref))},collectionRef:a})}},l={...Pt,name:o,setup(a,{attrs:r}){const d=M(null),c=F(n,void 0);se(s,{collectionItemRef:d}),be(()=>{const u=y(d);u&&c.itemMap.set(u,{ref:u,...r})}),De(()=>{const u=y(d);c.itemMap.delete(u)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:s,ElCollection:p,ElCollectionItem:l}},Rt=ae({style:{type:Z([String,Array,Object])},currentTabId:{type:Z(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:Z(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Ft,ElCollectionItem:At,COLLECTION_INJECTION_KEY:Ve,COLLECTION_ITEM_INJECTION_KEY:Lt}=cn("RovingFocusGroup"),je=Symbol("elRovingFocusGroup"),dn=Symbol("elRovingFocusGroupItem"),Dt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Kt=(e,t)=>{if(t!=="rtl")return e;switch(e){case $.right:return $.left;case $.left:return $.right;default:return e}},zt=(e,t,o)=>{const n=Kt(e.key,o);if(!(t==="vertical"&&[$.left,$.right].includes(n))&&!(t==="horizontal"&&[$.up,$.down].includes(n)))return Dt[n]},Ht=(e,t)=>e.map((o,n)=>e[(n+t)%e.length]),Ue=e=>{const{activeElement:t}=document;for(const o of e)if(o===t||(o.focus(),t!==document.activeElement))return},Je="currentTabIdChange",qe="rovingFocusGroup.entryFocus",Gt={bubbles:!1,cancelable:!0},Vt=R({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Rt,emits:[Je,"entryFocus"],setup(e,{emit:t}){var o;const n=M((o=e.currentTabId||e.defaultCurrentTabId)!=null?o:null),s=M(!1),p=M(!1),l=M(null),{getItems:a}=F(Ve,void 0),r=b(()=>[{outline:"none"},e.style]),d=I=>{t(Je,I)},c=()=>{s.value=!0},u=oe(I=>{var k;(k=e.onMousedown)==null||k.call(e,I)},()=>{p.value=!0}),g=oe(I=>{var k;(k=e.onFocus)==null||k.call(e,I)},I=>{const k=!y(p),{target:Y,currentTarget:D}=I;if(Y===D&&k&&!y(s)){const Q=new Event(qe,Gt);if(D==null||D.dispatchEvent(Q),!Q.defaultPrevented){const B=a().filter(K=>K.focusable),J=B.find(K=>K.active),O=B.find(K=>K.id===y(n)),X=[J,O,...B].filter(Boolean).map(K=>K.ref);Ue(X)}}p.value=!1}),i=oe(I=>{var k;(k=e.onBlur)==null||k.call(e,I)},()=>{s.value=!1}),w=(...I)=>{t("entryFocus",...I)};se(je,{currentTabbedId:Fn(n),loop:de(e,"loop"),tabIndex:b(()=>y(s)?-1:0),rovingFocusGroupRef:l,rovingFocusGroupRootStyle:r,orientation:de(e,"orientation"),dir:de(e,"dir"),onItemFocus:d,onItemShiftTab:c,onBlur:i,onFocus:g,onMousedown:u}),ge(()=>e.currentTabId,I=>{n.value=I!=null?I:null}),An(l,qe,w)}});function jt(e,t,o,n,s,p){return T(e.$slots,"default")}var Ut=L(Vt,[["render",jt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const Yt=R({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Ft,ElRovingFocusGroupImpl:Ut}});function Wt(e,t,o,n,s,p){const l=z("el-roving-focus-group-impl"),a=z("el-focus-group-collection");return h(),P(a,null,{default:v(()=>[E(l,Ln(Dn(e.$attrs)),{default:v(()=>[T(e.$slots,"default")]),_:3},16)]),_:3})}var xt=L(Yt,[["render",Wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Jt=R({components:{ElRovingFocusCollectionItem:At},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:o,loop:n,onItemFocus:s,onItemShiftTab:p}=F(je,void 0),{getItems:l}=F(Ve,void 0),a=Ze(),r=M(null),d=oe(i=>{t("mousedown",i)},i=>{e.focusable?s(y(a)):i.preventDefault()}),c=oe(i=>{t("focus",i)},()=>{s(y(a))}),u=oe(i=>{t("keydown",i)},i=>{const{key:w,shiftKey:I,target:k,currentTarget:Y}=i;if(w===$.tab&&I){p();return}if(k!==Y)return;const D=zt(i);if(D){i.preventDefault();let B=l().filter(J=>J.focusable).map(J=>J.ref);switch(D){case"last":{B.reverse();break}case"prev":case"next":{D==="prev"&&B.reverse();const J=B.indexOf(Y);B=n.value?Ht(B,J+1):B.slice(J+1);break}}Xe(()=>{Ue(B)})}}),g=b(()=>o.value===y(a));return se(dn,{rovingFocusGroupItemRef:r,tabIndex:b(()=>y(g)?0:-1),handleMousedown:d,handleFocus:c,handleKeydown:u}),{id:a,handleKeydown:u,handleFocus:c,handleMousedown:d}}});function qt(e,t,o,n,s,p){const l=z("el-roving-focus-collection-item");return h(),P(l,{id:e.id,focusable:e.focusable,active:e.active},{default:v(()=>[T(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Zt=L(Jt,[["render",qt],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Qt=ae({trigger:$n.trigger,effect:{...Mn.effect,default:"light"},type:{type:Z(String)},placement:{type:Z(String),default:"bottom"},popperOptions:{type:Z(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:Z([Number,String]),default:0},maxHeight:{type:Z([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:Z(Object)}}),pn=ae({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:ce}}),Xt=ae({onKeydown:{type:Z(Function)}}),eo=[$.down,$.pageDown,$.home],mn=[$.up,$.pageUp,$.end],no=[...eo,...mn],{ElCollection:to,ElCollectionItem:oo,COLLECTION_INJECTION_KEY:so,COLLECTION_ITEM_INJECTION_KEY:lo}=cn("Dropdown"),Se=Symbol("elDropdown"),{ButtonGroup:ao}=Ge,ro=R({name:"ElDropdown",components:{ElButton:Ge,ElButtonGroup:ao,ElScrollbar:kn,ElDropdownCollection:to,ElTooltip:Le,ElRovingFocusGroup:xt,ElOnlyChild:Tn,ElIcon:me,ArrowDown:en},props:Qt,emits:["visible-change","click","command"],setup(e,{emit:t}){const o=fe(),n=A("dropdown"),{t:s}=Sn(),p=M(),l=M(),a=M(null),r=M(null),d=M(null),c=M(null),u=M(!1),g=[$.enter,$.space,$.down],i=b(()=>({maxHeight:Kn(e.maxHeight)})),w=b(()=>[n.m(B.value)]),I=Ze().value,k=b(()=>e.id||I);function Y(){D()}function D(){var C;(C=a.value)==null||C.onClose()}function Q(){var C;(C=a.value)==null||C.onOpen()}const B=zn();function J(...C){t("command",...C)}function O(){}function W(){const C=y(r);C==null||C.focus(),c.value=null}function X(C){c.value=C}function K(C){u.value||(C.preventDefault(),C.stopImmediatePropagation())}function f(){t("visible-change",!0)}function m(C){(C==null?void 0:C.type)==="keydown"&&r.value.focus()}function _(){t("visible-change",!1)}return se(Se,{contentRef:r,role:b(()=>e.role),triggerId:k,isUsingKeyboard:u,onItemEnter:O,onItemLeave:W}),se("elDropdown",{instance:o,dropdownSize:B,handleClick:Y,commandHandler:J,trigger:de(e,"trigger"),hideOnClick:de(e,"hideOnClick")}),{t:s,ns:n,scrollbar:d,wrapStyle:i,dropdownTriggerKls:w,dropdownSize:B,triggerId:k,triggerKeys:g,currentTabId:c,handleCurrentTabIdChange:X,handlerMainButtonClick:C=>{t("click",C)},handleEntryFocus:K,handleClose:D,handleOpen:Q,handleBeforeShowTooltip:f,handleShowTooltip:m,handleBeforeHideTooltip:_,onFocusAfterTrapped:C=>{var ee,ne;C.preventDefault(),(ne=(ee=r.value)==null?void 0:ee.focus)==null||ne.call(ee,{preventScroll:!0})},popperRef:a,contentRef:r,triggeringElementRef:p,referenceElementRef:l}}});function uo(e,t,o,n,s,p){var l;const a=z("el-dropdown-collection"),r=z("el-roving-focus-group"),d=z("el-scrollbar"),c=z("el-only-child"),u=z("el-tooltip"),g=z("el-button"),i=z("arrow-down"),w=z("el-icon"),I=z("el-button-group");return h(),N("div",{class:U([e.ns.b(),e.ns.is("disabled",e.disabled)])},[E(u,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(l=e.referenceElementRef)==null?void 0:l.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:"",pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},Hn({content:v(()=>[E(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:v(()=>[E(r,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:v(()=>[E(a,null,{default:v(()=>[T(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:v(()=>[E(c,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:v(()=>[T(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(h(),P(I,{key:0},{default:v(()=>[E(g,ie({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:v(()=>[T(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),E(g,ie({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:v(()=>[E(w,{class:U(e.ns.e("icon"))},{default:v(()=>[E(i)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):$e("v-if",!0)],2)}var io=L(ro,[["render",uo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const co=R({name:"DropdownItemImpl",components:{ElIcon:me},props:pn,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const o=A("dropdown"),{role:n}=F(Se,void 0),{collectionItemRef:s}=F(lo,void 0),{collectionItemRef:p}=F(Lt,void 0),{rovingFocusGroupItemRef:l,tabIndex:a,handleFocus:r,handleKeydown:d,handleMousedown:c}=F(dn,void 0),u=nn(s,p,l),g=b(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),i=oe(w=>{const{code:I}=w;if(I===$.enter||I===$.space)return w.preventDefault(),w.stopImmediatePropagation(),t("clickimpl",w),!0},d);return{ns:o,itemRef:u,dataset:{[un]:""},role:g,tabIndex:a,handleFocus:r,handleKeydown:i,handleMousedown:c}}}),po=["aria-disabled","tabindex","role"];function mo(e,t,o,n,s,p){const l=z("el-icon");return h(),N(re,null,[e.divided?(h(),N("li",ie({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):$e("v-if",!0),q("li",ie({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:t[0]||(t[0]=a=>e.$emit("clickimpl",a)),onFocus:t[1]||(t[1]=(...a)=>e.handleFocus&&e.handleFocus(...a)),onKeydown:t[2]||(t[2]=(...a)=>e.handleKeydown&&e.handleKeydown(...a)),onMousedown:t[3]||(t[3]=(...a)=>e.handleMousedown&&e.handleMousedown(...a)),onPointermove:t[4]||(t[4]=a=>e.$emit("pointermove",a)),onPointerleave:t[5]||(t[5]=a=>e.$emit("pointerleave",a))}),[e.icon?(h(),P(l,{key:0},{default:v(()=>[(h(),P(he(e.icon)))]),_:1})):$e("v-if",!0),T(e.$slots,"default")],16,po)],64)}var fo=L(co,[["render",mo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const fn=()=>{const e=F("elDropdown",{}),t=b(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:t}},vo=R({name:"ElDropdownItem",components:{ElDropdownCollectionItem:oo,ElRovingFocusItem:Zt,ElDropdownItemImpl:fo},inheritAttrs:!1,props:pn,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:o}){const{elDropdown:n}=fn(),s=fe(),p=M(null),l=b(()=>{var i,w;return(w=(i=y(p))==null?void 0:i.textContent)!=null?w:""}),{onItemEnter:a,onItemLeave:r}=F(Se,void 0),d=oe(i=>(t("pointermove",i),i.defaultPrevented),We(i=>{var w;e.disabled?r(i):(a(i),i.defaultPrevented||(w=i.currentTarget)==null||w.focus())})),c=oe(i=>(t("pointerleave",i),i.defaultPrevented),We(i=>{r(i)})),u=oe(i=>(t("click",i),i.type!=="keydown"&&i.defaultPrevented),i=>{var w,I,k;if(e.disabled){i.stopImmediatePropagation();return}(w=n==null?void 0:n.hideOnClick)!=null&&w.value&&((I=n.handleClick)==null||I.call(n)),(k=n.commandHandler)==null||k.call(n,e.command,s,i)}),g=b(()=>({...e,...o}));return{handleClick:u,handlePointerMove:d,handlePointerLeave:c,textContent:l,propsAndAttrs:g}}});function _o(e,t,o,n,s,p){var l;const a=z("el-dropdown-item-impl"),r=z("el-roving-focus-item"),d=z("el-dropdown-collection-item");return h(),P(d,{disabled:e.disabled,"text-value":(l=e.textValue)!=null?l:e.textContent},{default:v(()=>[E(r,{focusable:!e.disabled},{default:v(()=>[E(a,ie(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:v(()=>[T(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var vn=L(vo,[["render",_o],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const ho=R({name:"ElDropdownMenu",props:Xt,setup(e){const t=A("dropdown"),{_elDropdownSize:o}=fn(),n=o.value,{focusTrapRef:s,onKeydown:p}=F(On,void 0),{contentRef:l,role:a,triggerId:r}=F(Se,void 0),{collectionRef:d,getItems:c}=F(so,void 0),{rovingFocusGroupRef:u,rovingFocusGroupRootStyle:g,tabIndex:i,onBlur:w,onFocus:I,onMousedown:k}=F(je,void 0),{collectionRef:Y}=F(Ve,void 0),D=b(()=>[t.b("menu"),t.bm("menu",n==null?void 0:n.value)]),Q=nn(l,d,s,u,Y),B=oe(O=>{var W;(W=e.onKeydown)==null||W.call(e,O)},O=>{const{currentTarget:W,code:X,target:K}=O;if(W.contains(K),$.tab===X&&O.stopImmediatePropagation(),O.preventDefault(),K!==y(l)||!no.includes(X))return;const m=c().filter(_=>!_.disabled).map(_=>_.ref);mn.includes(X)&&m.reverse(),Ue(m)});return{size:n,rovingFocusGroupRootStyle:g,tabIndex:i,dropdownKls:D,role:a,triggerId:r,dropdownListWrapperRef:Q,handleKeydown:O=>{B(O),p(O)},onBlur:w,onFocus:I,onMousedown:k}}}),go=["role","aria-labelledby"];function bo(e,t,o,n,s,p){return h(),N("ul",{ref:e.dropdownListWrapperRef,class:U(e.dropdownKls),style:ke(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...l)=>e.onBlur&&e.onBlur(...l)),onFocus:t[1]||(t[1]=(...l)=>e.onFocus&&e.onFocus(...l)),onKeydown:t[2]||(t[2]=(...l)=>e.handleKeydown&&e.handleKeydown(...l)),onMousedown:t[3]||(t[3]=(...l)=>e.onMousedown&&e.onMousedown(...l))},[T(e.$slots,"default")],46,go)}var _n=L(ho,[["render",bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const yo=Me(io,{DropdownItem:vn,DropdownMenu:_n}),Io=le(vn),wo=le(_n);class Co{constructor(t,o){this.parent=t,this.domNode=o,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(t){t===this.subMenuItems.length?t=0:t<0&&(t=this.subMenuItems.length-1),this.subMenuItems[t].focus(),this.subIndex=t}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,o=>{o.addEventListener("keydown",n=>{let s=!1;switch(n.code){case $.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case $.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case $.tab:{we(t,"mouseleave");break}case $.enter:case $.space:{s=!0,n.currentTarget.click();break}}return s&&(n.preventDefault(),n.stopPropagation()),!1})})}}class Eo{constructor(t,o){this.domNode=t,this.submenu=null,this.submenu=null,this.init(o)}init(t){this.domNode.setAttribute("tabindex","0");const o=this.domNode.querySelector(`.${t}-menu`);o&&(this.submenu=new Co(this,o)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",t=>{let o=!1;switch(t.code){case $.down:{we(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),o=!0;break}case $.up:{we(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),o=!0;break}case $.tab:{we(t.currentTarget,"mouseleave");break}case $.enter:case $.space:{o=!0,t.currentTarget.click();break}}o&&t.preventDefault()})}}class $o{constructor(t,o){this.domNode=t,this.init(o)}init(t){const o=this.domNode.childNodes;Array.from(o).forEach(n=>{n.nodeType===1&&new Eo(n,t)})}}const Mo=R({name:"ElMenuCollapseTransition",setup(){const e=A("menu");return{listeners:{onBeforeEnter:o=>o.style.opacity="0.2",onEnter(o,n){ye(o,`${e.namespace.value}-opacity-transition`),o.style.opacity="1",n()},onAfterEnter(o){Ne(o,`${e.namespace.value}-opacity-transition`),o.style.opacity=""},onBeforeLeave(o){o.dataset||(o.dataset={}),Gn(o,e.m("collapse"))?(Ne(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),ye(o,e.m("collapse"))):(ye(o,e.m("collapse")),o.dataset.oldOverflow=o.style.overflow,o.dataset.scrollWidth=o.clientWidth.toString(),Ne(o,e.m("collapse"))),o.style.width=`${o.scrollWidth}px`,o.style.overflow="hidden"},onLeave(o){ye(o,"horizontal-collapse-transition"),o.style.width=`${o.dataset.scrollWidth}px`}}}}});function ko(e,t,o,n,s,p){return h(),P(Qe,ie({mode:"out-in"},e.listeners),{default:v(()=>[T(e.$slots,"default")]),_:3},16)}var To=L(Mo,[["render",ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function hn(e,t){const o=b(()=>{let s=e.parent;const p=[t.value];for(;s.type.name!=="ElMenu";)s.props.index&&p.unshift(s.props.index),s=s.parent;return p});return{parentMenu:b(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:o}}function So(e){return b(()=>{const o=e.backgroundColor;return o?new et(o).shade(20).toString():""})}const gn=(e,t)=>{const o=A("menu");return b(()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":So(e).value||"","active-color":e.activeTextColor||"",level:`${t}`}))},Oo=ae({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:ce},expandOpenIcon:{type:ce},collapseCloseIcon:{type:ce},collapseOpenIcon:{type:ce}}),Be="ElSubMenu";var Ye=R({name:Be,props:Oo,setup(e,{slots:t,expose:o}){const n=fe(),{indexPath:s,parentMenu:p}=hn(n,b(()=>e.index)),l=A("menu"),a=A("sub-menu"),r=F("rootMenu");r||Ee(Be,"can not inject root menu");const d=F(`subMenu:${p.value.uid}`);d||Ee(Be,"can not inject sub menu");const c=M({}),u=M({});let g;const i=M(!1),w=M(),I=M(null),k=b(()=>m.value==="horizontal"&&D.value?"bottom-start":"right-start"),Y=b(()=>m.value==="horizontal"&&D.value||m.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?O.value?e.expandOpenIcon:e.expandCloseIcon:en:e.collapseCloseIcon&&e.collapseOpenIcon?O.value?e.collapseOpenIcon:e.collapseCloseIcon:Vn),D=b(()=>d.level===0),Q=b(()=>e.popperAppendToBody===void 0?D.value:Boolean(e.popperAppendToBody)),B=b(()=>r.props.collapse?`${l.namespace.value}-zoom-in-left`:`${l.namespace.value}-zoom-in-top`),J=b(()=>m.value==="horizontal"&&D.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),O=b(()=>r.openedMenus.includes(e.index)),W=b(()=>{let S=!1;return Object.values(c.value).forEach(G=>{G.active&&(S=!0)}),Object.values(u.value).forEach(G=>{G.active&&(S=!0)}),S}),X=b(()=>r.props.backgroundColor||""),K=b(()=>r.props.activeTextColor||""),f=b(()=>r.props.textColor||""),m=b(()=>r.props.mode),_=Ke({index:e.index,indexPath:s,active:W}),V=b(()=>m.value!=="horizontal"?{color:f.value}:{borderBottomColor:W.value?r.props.activeTextColor?K.value:"":"transparent",color:W.value?K.value:f.value}),H=()=>{var S,G,x;return(x=(G=(S=I.value)==null?void 0:S.popperRef)==null?void 0:G.popperInstanceRef)==null?void 0:x.destroy()},C=S=>{S||H()},ee=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:s.value,active:W.value})},ne=(S,G=e.showTimeout)=>{var x;S.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(d.mouseInChild.value=!0,g==null||g(),{stop:g}=xe(()=>{r.openMenu(e.index,s.value)},G),Q.value&&((x=p.value.vnode.el)==null||x.dispatchEvent(new MouseEvent("mouseenter")))))},te=(S=!1)=>{var G,x;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(g==null||g(),d.mouseInChild.value=!1,{stop:g}=xe(()=>!i.value&&r.closeMenu(e.index,s.value),e.hideTimeout),Q.value&&S&&((G=n.parent)==null?void 0:G.type.name)==="ElSubMenu"&&((x=d.handleMouseleave)==null||x.call(d,!0)))};ge(()=>r.props.collapse,S=>C(Boolean(S)));{const S=x=>{u.value[x.index]=x},G=x=>{delete u.value[x.index]};se(`subMenu:${n.uid}`,{addSubMenu:S,removeSubMenu:G,handleMouseleave:te,mouseInChild:i,level:d.level+1})}return o({opened:O}),be(()=>{r.addSubMenu(_),d.addSubMenu(_)}),De(()=>{d.removeSubMenu(_),r.removeSubMenu(_)}),()=>{var S;const G=[(S=t.title)==null?void 0:S.call(t),j(me,{class:a.e("icon-arrow"),style:{transform:O.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>pe(Y.value)?j(n.appContext.components[Y.value]):j(Y.value)})],x=gn(r.props,d.level+1),En=r.isMenuPopup?j(Le,{ref:I,visible:O.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:k.value,teleported:Q.value,fallbackPlacements:J.value,transition:B.value,gpuAcceleration:!1},{content:()=>{var _e;return j("div",{class:[l.m(m.value),l.m("popup-container"),e.popperClass],onMouseenter:Oe=>ne(Oe,100),onMouseleave:()=>te(!0),onFocus:Oe=>ne(Oe,100)},[j("ul",{class:[l.b(),l.m("popup"),l.m(`popup-${k.value}`)],style:x.value},[(_e=t.default)==null?void 0:_e.call(t)])])},default:()=>j("div",{class:a.e("title"),style:[V.value,{backgroundColor:X.value}],onClick:ee},G)}):j(re,{},[j("div",{class:a.e("title"),style:[V.value,{backgroundColor:X.value}],ref:w,onClick:ee},G),j(pt,{},{default:()=>{var _e;return Fe(j("ul",{role:"menu",class:[l.b(),l.m("inline")],style:x.value},[(_e=t.default)==null?void 0:_e.call(t)]),[[Ae,O.value]])}})]);return j("li",{class:[a.b(),a.is("active",W.value),a.is("opened",O.value),a.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:O.value,onMouseenter:ne,onMouseleave:()=>te(!0),onFocus:ne},[En])}}});const No=ae({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Z(Array),default:()=>jn([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0}}),Pe=e=>Array.isArray(e)&&e.every(t=>pe(t)),Bo={close:(e,t)=>pe(e)&&Pe(t),open:(e,t)=>pe(e)&&Pe(t),select:(e,t,o,n)=>pe(e)&&Pe(t)&&Wn(o)&&(n===void 0||n instanceof Promise)};var Po=R({name:"ElMenu",props:No,emits:Bo,setup(e,{emit:t,slots:o,expose:n}){const s=fe(),p=s.appContext.config.globalProperties.$router,l=M(),a=A("menu"),r=A("sub-menu"),d=M(-1),c=M(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),u=M(e.defaultActive),g=M({}),i=M({}),w=b(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),I=()=>{const f=u.value&&g.value[u.value];if(!f||e.mode==="horizontal"||e.collapse)return;f.indexPath.forEach(_=>{const V=i.value[_];V&&k(_,V.indexPath)})},k=(f,m)=>{c.value.includes(f)||(e.uniqueOpened&&(c.value=c.value.filter(_=>m.includes(_))),c.value.push(f),t("open",f,m))},Y=(f,m)=>{const _=c.value.indexOf(f);_!==-1&&c.value.splice(_,1),t("close",f,m)},D=({index:f,indexPath:m})=>{c.value.includes(f)?Y(f,m):k(f,m)},Q=f=>{(e.mode==="horizontal"||e.collapse)&&(c.value=[]);const{index:m,indexPath:_}=f;if(!(m===void 0||_===void 0))if(e.router&&p){const V=f.route||m,H=p.push(V).then(C=>(C||(u.value=m),C));t("select",m,_,{index:m,indexPath:_,route:V},H)}else u.value=m,t("select",m,_,{index:m,indexPath:_})},B=f=>{const m=g.value,_=m[f]||u.value&&m[u.value]||m[e.defaultActive];_?u.value=_.index:u.value=f},J=()=>{var f,m;if(!l.value)return-1;const _=Array.from((m=(f=l.value)==null?void 0:f.childNodes)!=null?m:[]).filter(S=>S.nodeName!=="#text"||S.nodeValue),V=64,H=Number.parseInt(getComputedStyle(l.value).paddingLeft,10),C=Number.parseInt(getComputedStyle(l.value).paddingRight,10),ee=l.value.clientWidth-H-C;let ne=0,te=0;return _.forEach((S,G)=>{ne+=S.offsetWidth||0,ne<=ee-V&&(te=G+1)}),te===_.length?-1:te},O=(f,m=33.34)=>{let _;return()=>{_&&clearTimeout(_),_=setTimeout(()=>{f()},m)}};let W=!0;const X=()=>{const f=()=>{d.value=-1,Xe(()=>{d.value=J()})};W?f():O(f)(),W=!1};ge(()=>e.defaultActive,f=>{g.value[f]||(u.value=""),B(f)}),ge(()=>e.collapse,f=>{f&&(c.value=[])}),ge(g.value,I);let K;Un(()=>{e.mode==="horizontal"&&e.ellipsis?K=xn(l,X).stop:K==null||K()});{const f=H=>{i.value[H.index]=H},m=H=>{delete i.value[H.index]};se("rootMenu",Ke({props:e,openedMenus:c,items:g,subMenus:i,activeIndex:u,isMenuPopup:w,addMenuItem:H=>{g.value[H.index]=H},removeMenuItem:H=>{delete g.value[H.index]},addSubMenu:f,removeSubMenu:m,openMenu:k,closeMenu:Y,handleMenuItemClick:Q,handleSubMenuClick:D})),se(`subMenu:${s.uid}`,{addSubMenu:f,removeSubMenu:m,mouseInChild:M(!1),level:0})}return be(()=>{e.mode==="horizontal"&&new $o(s.vnode.el,a.namespace.value)}),n({open:m=>{const{indexPath:_}=i.value[m];_.forEach(V=>k(V,_))},close:Y,handleResize:X}),()=>{var f,m;let _=(m=(f=o.default)==null?void 0:f.call(o))!=null?m:[];const V=[];if(e.mode==="horizontal"&&l.value){const ee=Qn(_),ne=d.value===-1?ee:ee.slice(0,d.value),te=d.value===-1?[]:ee.slice(d.value);(te==null?void 0:te.length)&&e.ellipsis&&(_=ne,V.push(j(Ye,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>j(me,{class:r.e("icon-more")},{default:()=>j(Yn)}),default:()=>te})))}const H=gn(e,0),C=j("ul",{key:String(e.collapse),role:"menubar",ref:l,style:H.value,class:{[a.b()]:!0,[a.m(e.mode)]:!0,[a.m("collapse")]:e.collapse}},[..._,...V]);return e.collapseTransition&&e.mode==="vertical"?j(To,()=>C):C}}});const Ro=ae({index:{type:Z([String,null]),default:null},route:{type:Z([String,Object])},disabled:Boolean}),Fo={click:e=>pe(e.index)&&Array.isArray(e.indexPath)},Re="ElMenuItem",Ao=R({name:Re,components:{ElTooltip:Le},props:Ro,emits:Fo,setup(e,{emit:t}){const o=fe(),n=F("rootMenu"),s=A("menu"),p=A("menu-item");n||Ee(Re,"can not inject root menu");const{parentMenu:l,indexPath:a}=hn(o,de(e,"index")),r=F(`subMenu:${l.value.uid}`);r||Ee(Re,"can not inject sub menu");const d=b(()=>e.index===n.activeIndex),c=Ke({index:e.index,indexPath:a,active:d}),u=()=>{e.disabled||(n.handleMenuItemClick({index:e.index,indexPath:a.value,route:e.route}),t("click",c))};return be(()=>{r.addSubMenu(c),n.addMenuItem(c)}),De(()=>{r.removeSubMenu(c),n.removeMenuItem(c)}),{Effect:Nn,parentMenu:l,rootMenu:n,active:d,nsMenu:s,nsMenuItem:p,handleClick:u}}});function Lo(e,t,o,n,s,p){const l=z("el-tooltip");return h(),N("li",{class:U([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...a)=>e.handleClick&&e.handleClick(...a))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(h(),P(l,{key:0,effect:e.Effect.DARK,placement:"right","fallback-placements":["left"],persistent:""},{content:v(()=>[T(e.$slots,"title")]),default:v(()=>[q("div",{class:U(e.nsMenu.be("tooltip","trigger"))},[T(e.$slots,"default")],2)]),_:3},8,["effect"])):(h(),N(re,{key:1},[T(e.$slots,"default"),T(e.$slots,"title")],64))],2)}var bn=L(Ao,[["render",Lo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Do={title:String},Ko="ElMenuItemGroup",zo=R({name:Ko,props:Do,setup(){return{ns:A("menu-item-group")}}});function Ho(e,t,o,n,s,p){return h(),N("li",{class:U(e.ns.b())},[q("div",{class:U(e.ns.e("title"))},[e.$slots.title?T(e.$slots,"title",{key:1}):(h(),N(re,{key:0},[ve(ue(e.title),1)],64))],2),q("ul",null,[T(e.$slots,"default")])],2)}var yn=L(zo,[["render",Ho],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Go=Me(Po,{MenuItem:bn,MenuItemGroup:yn,SubMenu:Ye}),Vo=le(bn),jo=le(yn),Uo=le(Ye);const Yo={class:"tags"},Wo={__name:"CommonTab",setup(e){const t=ze(),o=He(),n=Jn(),s=o.state.tabsList,p=a=>{t.push({name:a.name})},l=(a,r)=>{let d=s.length-1;o.commit("closeTab",a),a.name===n.name&&(r===d?t.push({name:s[r-1].name}):t.push({name:s[r].name}))};return(a,r)=>{const d=Xn;return h(),N("div",Yo,[(h(!0),N(re,null,Ie(y(s),(c,u)=>(h(),P(d,{key:c.name,closable:c.name!=="home","disable-transitions":!1,effect:a.$route.name===c.name?"dark":"plain",onClick:g=>p(c),onClose:g=>l(c,u)},{default:v(()=>[ve(ue(c.label),1)]),_:2},1032,["closable","effect","onClick","onClose"]))),128))])}}},In=Te(Wo,[["__scopeId","data-v-ee7631c2"]]);const xo=""+new URL("user-default.017d77a0.png",import.meta.url).href,Jo=""+new URL("user.a429c844.png",import.meta.url).href;const qo={setup(){let e=He(),t=l=>new URL(Object.assign({"../assets/images/user-default.png":xo,"../assets/images/user.png":Jo})[`../assets/images/${l}.png`],self.location).href,o=()=>{e.commit("updateIsCollapse")};const n=b(()=>e.state.currentMenu),s=ze();return{current:n,getImgSrc:t,handleCollapse:o,handleLogout:()=>{e.commit("clearMenu"),s.push({path:"/login"})}}}},Zo={class:"l-content"},Qo=ve("\u9996\u9875"),Xo={class:"r-content"},es={class:"el-dropdown-link"},ns=["src"],ts=ve("\u4E2A\u4EBA\u4E2D\u5FC3"),os=ve("\u9000\u51FA");function ss(e,t,o,n,s,p){const l=z("Menu"),a=me,r=Ge,d=it,c=ut,u=Io,g=wo,i=yo,w=Mt;return h(),P(w,null,{default:v(()=>[q("div",Zo,[E(r,{size:"small"},{default:v(()=>[E(a,{size:"100",plain:"",onClick:n.handleCollapse},{default:v(()=>[E(l)]),_:1},8,["onClick"])]),_:1}),E(c,{separator:"/",class:"bread"},{default:v(()=>[E(d,{to:{path:"/home"}},{default:v(()=>[Qo]),_:1}),n.current?(h(),P(d,{key:0,to:n.current.path},{default:v(()=>[ve(ue(n.current.label),1)]),_:1},8,["to"])):$e("",!0)]),_:1})]),q("div",Xo,[E(i,null,{dropdown:v(()=>[E(g,null,{default:v(()=>[E(u,null,{default:v(()=>[ts]),_:1}),E(u,{onClick:n.handleLogout},{default:v(()=>[os]),_:1},8,["onClick"])]),_:1})]),default:v(()=>[q("span",es,[q("img",{class:"user",src:n.getImgSrc("user"),alt:""},null,8,ns)])]),_:1})])]),_:1})}const wn=Te(qo,[["render",ss],["__scopeId","data-v-257f8317"]]);const ls={setup(){const e=He(),t=ze(),o=e.state.menu;return{noChildren:()=>o.filter(l=>!l.children),hasChildren:()=>o.filter(l=>l.children),clickMenu:l=>{t.push({name:l.name}),e.commit("selectMenu",l)},list:o}}},as=e=>(qn("data-v-015652ee"),e=e(),Zn(),e),rs=as(()=>q("span",null,null,-1));function us(e,t,o,n,s,p){const l=Vo,a=jo,r=Uo,d=Go,c=$t;return h(),P(c,{width:e.$store.state.isCollapse?"60px":"180px"},{default:v(()=>[E(d,{class:"el-menu-vertical-demo","background-color":"#545c64","text-color":"#fff",collapse:e.$store.state.isCollapse,"collapse-transition":!1},{default:v(()=>[Fe(q("h3",null,"\u540E\u53F0\u7BA1\u7406",512),[[Ae,!e.$store.state.isCollapse]]),Fe(q("h3",null,"\u540E\u53F0",512),[[Ae,e.$store.state.isCollapse]]),(h(!0),N(re,null,Ie(n.noChildren(),u=>(h(),P(l,{index:u.path,key:u.path,onClick:g=>n.clickMenu(u)},{default:v(()=>[(h(),P(he(u.icon),{class:"icons"})),q("span",null,ue(u.label),1),rs]),_:2},1032,["index","onClick"]))),128)),(h(!0),N(re,null,Ie(n.hasChildren(),u=>(h(),P(r,{index:u.label,key:u.path},{title:v(()=>[(h(),P(he(u.icon),{class:"icons"})),q("span",null,ue(u.label),1)]),default:v(()=>[E(a,null,{default:v(()=>[(h(!0),N(re,null,Ie(u.children,(g,i)=>(h(),P(l,{index:g.path,key:i,onClick:w=>n.clickMenu(g)},{default:v(()=>[(h(),P(he(u.icon),{class:"icons"})),q("span",null,ue(g.label),1)]),_:2},1032,["index","onClick"]))),128)),E(l,{index:"1-2"})]),_:2},1024)]),_:2},1032,["index"]))),128))]),_:1},8,["collapse"])]),_:1},8,["width"])}const Cn=Te(ls,[["render",us],["__scopeId","data-v-015652ee"]]);const is=R({components:{CommonTab:In,CommonHeader:wn,CommonAside:Cn}}),cs={class:"common-layout"};function ds(e,t,o,n,s,p){const l=Cn,a=wn,r=In,d=z("router-view"),c=kt,u=Et;return h(),N("div",cs,[E(u,{class:"lay-container"},{default:v(()=>[E(l),E(u,{class:"r-container"},{default:v(()=>[E(a),E(r),E(c,null,{default:v(()=>[E(d)]),_:1})]),_:1})]),_:1})])}const hs=Te(is,[["render",ds],["__scopeId","data-v-79051114"]]);export{hs as default};
