import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,ya as o,yn as s,za as c}from"./preview-Z1rCd2zM.js";import{t as l}from"./SearchField-CGD1kS7o.js";import{t as u}from"./BottomDrawer-BHVSEGQY.js";import{n as d,t as f}from"./DownOutlineMd-B5916XZb.js";import{t as p}from"./BottomDrawer-BD0g_Am_.js";import{t as m}from"./TextField-CVT_J5qa.js";import{t as h}from"./TextField-DIpfTWTZ.js";import{n as g,t as _}from"./DotOutlineSm-BubxVrdV.js";import{r as ee,t as te}from"./useToggle-CBOBBBvd.js";import{t as v}from"./DescriptionList-DyrA6XpZ.js";import{t as y}from"./DescriptionList-DV7EyO68.js";import{t as b}from"./SearchField-AxzTdOc4.js";import{t as x}from"./PageLayout-BLX6GfO5.js";import{t as S}from"./PageLayout-2VflXQ2o.js";import{t as C}from"./PageAsideBlock-BSAuP8vM.js";import{t as w}from"./PageAsideBlock-DwbPoNt0.js";import{t as T}from"./TextArea-DG6A60bk.js";import{t as E}from"./TextArea-CKrLZjzK.js";import{a as D,c as ne,i as re,n as ie,s as ae,t as oe}from"./HistoryOutlineMd-r0Z9r8gd.js";import{n as se,t as ce}from"./DocumentOutlineMd-D1lwAOdl.js";import{U as le,rn as ue,tn as O}from"./common-BHD-Wsz_.js";import{a as k,n as A,t as j}from"./PageAsideNavigationItem-B2wg76AH.js";var M,N;function P(){return(P=e((()=>{S(),le(),M=o(),N=({aside:e})=>(0,M.jsx)(x,{header:O,content:ue,aside:e});try{N.displayName=`MockPageLayout`,N.__docgenInfo={description:``,displayName:`MockPageLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/common/MockPageLayout.tsx`,methods:[],props:{aside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/common/MockPageLayout.tsx`,name:`TypeLiteral`}],description:``,name:`aside`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var F,I;function L(){return(L=e((()=>{y(),t(),w(),E(),n(),F=o(),I=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(C,{dividerVariant:`fullWidth`,children:(0,F.jsxs)(a,{container:!0,spacing:4,children:[(0,F.jsx)(r,{variant:`h5`,children:`Чат с администратором`}),(0,F.jsx)(T,{placeholder:`Здесь вы можете оставить сообщение для администратора`})]})}),(0,F.jsx)(C,{children:(0,F.jsxs)(a,{container:!0,spacing:4,children:[(0,F.jsx)(r,{variant:`h5`,children:`Данные электронной подписи`}),(0,F.jsx)(v,{items:[{name:`Правовой статус`,value:`Физическое лицо`},{name:`Криптопровайдер`,value:`КриптоПРО CSP`}],justifyContent:`space-between`,direction:`row`})]})}),(0,F.jsx)(C,{children:(0,F.jsx)(v,{items:[{name:`Тариф`,value:`Базис`},{name:`Доп. услуги`,value:``},{name:`Расширения`,value:``}],justifyContent:`space-between`,direction:`row`})})]})})))()}var R,z,B;function V(){return(V=e((()=>{R=c(),ce(),re(),oe(),j(),z=o(),B=()=>{let[e,t]=(0,R.useState)(0);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{isActive:e===0,component:`button`,onClick:()=>t(0),icon:(0,z.jsx)(se,{}),children:`Просмотр документа`}),(0,z.jsx)(A,{isActive:e===1,component:`button`,onClick:()=>t(1),icon:(0,z.jsx)(D,{}),children:`Вложенные файлы`}),(0,z.jsx)(A,{isActive:e===2,component:`button`,onClick:()=>t(2),icon:(0,z.jsx)(ie,{}),children:`История изменений`})]})}})))()}var H,U,W,G,K,q;function J(){return(J=e((()=>{s(),j(),H=i(A)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: auto;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    & .${k.root} {
      height: 44px;

      border: unset;
      border-radius: unset;

      &:active {
        color: ${({theme:e})=>e.palette.primary[900]};
      }
    }

    & .${k.isActive} {
      background-color: ${({theme:e})=>e.palette.primary[100]};

      &::before {
        display: block;
      }
    }
  }
`,U=i.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,W=i.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  list-style: none;
`,G=i.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
  }
`,K=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  height: 40px;
  padding: ${({theme:e})=>e.microSpacing(6,5)};
`,i.div`
  padding: ${({theme:e})=>e.spacing(4)};
`,q=i.div`
  padding: ${({theme:e})=>e.spacing(3,4)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{Y=c(),ae(),_(),f(),p(),b(),h(),n(),te(),J(),X=o(),Z=()=>{let[e,t,n]=ee({initialState:!1}),[i,a]=(0,Y.useState)(`Документ 1`),o=e=>()=>{a(e),n()},s=()=>(0,X.jsxs)(W,{children:[(0,X.jsx)(H,{onClick:o(`Документ 1`),isActive:i===`Документ 1`,icon:(0,X.jsx)(g,{}),children:`Документ 1`}),(0,X.jsx)(H,{onClick:o(`Документ 2`),isActive:i===`Документ 2`,icon:(0,X.jsx)(g,{}),children:`Документ 2`}),(0,X.jsx)(H,{onClick:o(`Документ 3`),isActive:i===`Документ 3`,icon:(0,X.jsx)(g,{}),children:`Документ 3`})]});return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(U,{children:[(0,X.jsxs)(K,{children:[(0,X.jsx)(ne,{}),(0,X.jsx)(r,{children:`Пакет документов`})]}),s()]}),(0,X.jsx)(G,{children:(0,X.jsx)(m,{onClick:t,endAdornment:(0,X.jsx)(d,{}),inputProps:{readOnly:!0},fullWidth:!0,value:i,hideHelperText:!0})}),(0,X.jsxs)(u,{open:e,onClose:n,title:`Пакет документов`,children:[(0,X.jsx)(q,{children:(0,X.jsx)(l,{fullWidth:!0})}),s()]})]})}})))()}function $(){return($=e((()=>{P(),L(),V(),Q()})))()}export{V as a,N as c,B as i,P as l,Z as n,I as o,Q as r,L as s,$ as t};