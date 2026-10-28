import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{T as t,ft as n,it as r,ji as i,lt as a,ya as o,za as s}from"./preview-BabqIrZj.js";import{i as c,t as l}from"./ToggleButton-DrtRjk6r.js";import{t as u}from"./MenuItem-D-WxfPqp.js";import{t as d}from"./Menu-DCx1BJQD.js";import{n as f}from"./useMenu-CFIOu0ww.js";import{n as p}from"./ErrorFillSm-CYzmrSca.js";import{a as m,n as h,t as g}from"./getIdentityProducts-Cg7yFV7C.js";import{t as _}from"./ContentState-CHPguuJv.js";import{t as v}from"./MenuGroup-CwPweqPY.js";import{n as y}from"./ProductsFillMd-BlThu2tG.js";var b;function x(){return(x=e((()=>{b=async e=>fetch(`${e}/api/tenants/widget`).then(e=>{if(!e.ok)throw Error(e.statusText);return e.json()})})))()}var S;function C(){return(C=e((()=>{h(),S=async(e,t)=>{let{hostname:n}=new URL(window.origin),r=t.map(async t=>[t,await g(e,t).then(e=>e.filter(e=>new URL(e.url).hostname!==n))]),i=await Promise.all(r);return Object.fromEntries(i)}})))()}var w,T;function E(){return(E=e((()=>{m(),w=s(),z(),x(),C(),T=(e,n)=>{let{captureException:r}=(0,w.useContext)(t),[i,a]=(0,w.useState)(),[o,s]=(0,w.useState)(),[c,l]=(0,w.useState)(L),[u,d]=(0,w.useState)(!1),[f,p]=(0,w.useState)(!1),m=(0,w.useMemo)(()=>i?.[c],[i,c]),h=async()=>{try{let t=await b(e),n=t.map(({id:e})=>e),r=await S(e,n);n[0]!==c&&l(n[0]),s(t),a(r)}catch(e){p(!0),r(e)}finally{d(!1)}};return{handleShowProducts:()=>{p(!1),n(),i||(d(!0),h().then())},isLoading:u,isError:f,tenants:o,handleChangeTenant:(e,t)=>{t&&l(t)},tenantId:c,productList:m,isShowToggleButton:!!o?.length&&Number(o?.length)>1}}})))()}function D(){return(D=e((()=>{E()})))()}function O(){return(O=e((()=>{D()})))()}var k,A,j,M,N,P;function F(){return(F=e((()=>{m(),k=i(d)`
  .MuiPaper-root > .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 285px;
    min-height: 100px;
    padding: ${({theme:e})=>e.spacing(3,0)};
  }
`,A=i(u)`
  &.MuiMenuItem-gutters {
    min-height: 56px;
    padding-left: ${({theme:e})=>e.spacing(4)};
  }
`,j=i(`img`,{shouldForwardProp:e=>e!==`color`})`
  width: 32px;
  height: 32px;
  margin-right: ${({theme:e})=>e.spacing(2)};

  background-color: ${({color:e})=>e};
  border-radius: ${({theme:e})=>e.shape.small};
`,M=i(a)`
  grid-auto-flow: column;
  column-gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.palette.error.dark};
`,N=i(c)`
  width: 100%;
  padding: ${({theme:e})=>e.spacing(1,4,4)};
`,P=i(l)`
  flex: 1;

  text-transform: uppercase;
`})))()}var I,L,R;function z(){return(z=e((()=>{m(),O(),F(),I=o(),L=`astral`,R=({identityUrl:e})=>{let{open:t,anchorRef:i,handleOpenMenu:a,handleCloseMenu:o}=f(),{isLoading:s,isError:c,tenantId:l,tenants:u,productList:d,handleChangeTenant:m,handleShowProducts:h,isShowToggleButton:g}=T(e,a);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(r,{ref:i,selected:t,variant:`text`,onClick:h,children:(0,I.jsx)(y,{})}),(0,I.jsx)(k,{open:t,anchorEl:i.current,onClose:o,children:(0,I.jsx)(v,{label:`Продукты экосистемы`,children:(0,I.jsxs)(_,{isLoading:s,isCustom:c,customState:{imgAlt:`Что-то пошло не так`,title:(0,I.jsxs)(M,{container:!0,component:`span`,children:[(0,I.jsx)(p,{color:`inherit`}),(0,I.jsx)(n,{variant:`h6`,color:`grey`,colorIntensity:`900`,children:`Что-то пошло не так`})]}),description:`Произошла ошибка. Повторите попытку позже.`},children:[g&&(0,I.jsx)(N,{exclusive:!0,onChange:m,value:l,children:u?.map(({id:e,name:t})=>(0,I.jsx)(P,{value:e,children:t},e))}),d?.map(e=>(0,I.jsxs)(A,{component:`a`,href:e.url,children:[(0,I.jsx)(j,{src:e.logoUrl,color:e.color}),(0,I.jsx)(n,{variant:`body1`,color:`grey`,colorIntensity:`900`,children:e.name})]},e.id))]})})})]})};try{R.displayName=`IdentityProductSwitcher`,R.__docgenInfo={description:``,displayName:`IdentityProductSwitcher`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/features/src/productSwitcher/IdentityProductSwitcher/IdentityProductSwitcher.tsx`,methods:[],props:{identityUrl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/features/src/productSwitcher/IdentityProductSwitcher/IdentityProductSwitcher.tsx`,name:`TypeLiteral`}],description:`Адрес identity`,name:`identityUrl`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{z as n,R as t};