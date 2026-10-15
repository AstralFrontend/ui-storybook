import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ft as t,Ht as n,It as r,M as i,Ut as a,Va as o,ct as s,dt as c,ft as l,it as u,j as d,ji as f,lt as p,rt as m,xa as h,yn as g}from"./preview-De2xeSj1.js";import{t as _}from"./MenuItem-D992jMJ2.js";import{t as v}from"./Menu-IexNVN2a.js";import{t as y}from"./Menu-CTrl745g.js";import{n as b}from"./useMenu-Cnzp3ps7.js";import{t as x}from"./useMenu-2i1Ht40M.js";import{t as S}from"./MenuItem-DEFYfwK-.js";import{n as C,t as w}from"./ErrorFillSm-B5krxjdU.js";import{t as T}from"./ContentState-C4_A1N-E.js";import{t as E}from"./ContentState-BPDoLQv4.js";import{n as D,t as O}from"./MenuGroup-DDDnF78N.js";import{n as k,t as A}from"./ProductsFillMd-BMbQrbVg.js";function j(){return(j=e((()=>{D()})))()}var M,N,P,F;function I(){return(I=e((()=>{t(),s(),S(),g(),c(),M=f(_)`
  &.${r.gutters} {
    min-height: 56px;
    padding: ${({theme:e})=>e.spacing(2,3)};
  }
`,N=f(`img`,{shouldForwardProp:e=>e!==`color`})`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  margin-right: ${({theme:e})=>e.spacing(2)};

  background-color: ${({color:e})=>e};
  border-radius: ${({theme:e})=>e.shape.small};
`,P=f(p)`
  grid-auto-flow: column;
  column-gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.palette.error.dark};
`,F=f(l)`
  overflow: hidden;

  text-overflow: ellipsis;
`})))()}var L,R;function z(){return(z=e((()=>{w(),E(),j(),c(),I(),L=h(),R=({isLoading:e,isError:t,products:n=[]})=>(0,L.jsx)(T,{isLoading:e,isCustom:t,customState:{imgAlt:`Что-то пошло не так`,title:(0,L.jsxs)(P,{container:!0,component:`span`,children:[(0,L.jsx)(C,{color:`inherit`}),(0,L.jsx)(l,{variant:`h6`,color:`grey`,colorIntensity:`900`,children:`Что-то пошло не так`})]}),description:`Произошла ошибка. Повторите попытку позже.`},children:(0,L.jsx)(O,{label:`Продукты экосистемы`,children:n.map(e=>(0,L.jsxs)(M,{component:`a`,href:e.url,children:[(0,L.jsx)(N,{src:e.logoUrl,color:e.color}),(0,L.jsx)(F,{variant:`subtitle1`,color:`grey`,colorIntensity:`900`,children:e.name})]},e.id))})});try{R.displayName=`Content`,R.__docgenInfo={description:``,displayName:`Content`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/Content/Content.tsx`,methods:[],props:{isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/Content/Content.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!0,tags:{},type:{name:`boolean`}},products:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/Content/Content.tsx`,name:`TypeLiteral`}],description:``,name:`products`,required:!1,tags:{},type:{name:`WidgetProduct[]`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/Content/Content.tsx`,name:`TypeLiteral`}],description:``,name:`isError`,required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function B(){return(B=e((()=>{z()})))()}var V;function H(){return(H=e((()=>{n(),y(),g(),V=f(v)`
  .MuiPaper-root > .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 285px;
    max-width: 320px;
    min-height: 100px;

    &.${a.padding} {
      padding: ${({theme:e})=>e.spacing(3,0)};
    }
  }
`})))()}var U,W;function G(){return(G=e((()=>{U=o(),i(),x(),W=({getProducts:e,filter:t})=>{let[n,r]=(0,U.useState)([]),[i,a]=(0,U.useState)(!1),[o,s]=(0,U.useState)(!1),{open:c,anchorRef:l,handleOpenMenu:u,handleCloseMenu:f}=b(),p=e=>{let{hostname:t}=new URL(window.origin);return e.filter(e=>new URL(e.url).hostname!==t)},m=async()=>{try{return await e()}catch{return await e()}},h=async()=>{a(!0),s(!1);try{let e=await m(),n=t?t(e):p(e);r(n)}catch(e){s(!0),d.getInstance().captureException(e,{place:`ProductSwitcher`})}finally{a(!1)}};return{anchorRef:l,openMenu:()=>{u(),n.length||h().then()},closeMenu:f,isLoading:i,isError:o,products:n,open:c}}})))()}function K(){return(K=e((()=>{G()})))()}var q,J;function Y(){return(Y=e((()=>{A(),m(),B(),H(),K(),q=h(),J=e=>{let{anchorRef:t,openMenu:n,closeMenu:r,isLoading:i,isError:a,products:o,open:s}=W(e);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(u,{ref:t,variant:`text`,selected:s,onClick:n,children:(0,q.jsx)(k,{})}),(0,q.jsx)(V,{open:s,anchorEl:t.current,onClose:r,children:(0,q.jsx)(R,{isLoading:i,isError:a,products:o})})]})};try{J.displayName=`ProductSwitcher`,J.__docgenInfo={description:``,displayName:`ProductSwitcher`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/ProductSwitcher.tsx`,methods:[],props:{getProducts:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/types.ts`,name:`TypeLiteral`}],description:``,name:`getProducts`,required:!0,tags:{},type:{name:`() => Promise<WidgetProduct[]>`}},filter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ProductSwitcher/types.ts`,name:`TypeLiteral`}],description:`Альтернативная функция для фильтрации продуктов`,name:`filter`,required:!1,tags:{},type:{name:`(products: WidgetProduct[]) => WidgetProduct[]`}}},tags:{}}}catch{}})))()}export{Y as n,j as r,J as t};