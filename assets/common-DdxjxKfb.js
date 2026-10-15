import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,dt as r,ft as i,ji as a,lt as o,xa as s,yn as c}from"./preview-CbDtIhIo.js";import{t as l}from"./SearchField-hlb5hlbz.js";import{t as u}from"./BottomDrawer-DBZTkFWW.js";import{n as d,t as f}from"./DownOutlineMd-BjALzFgN.js";import{t as p}from"./BottomDrawer-BE4WI0BX.js";import{t as m}from"./TextField-DoE73nR2.js";import{t as h}from"./TextField-Do9-_Zf7.js";import{n as g,t as _}from"./DotOutlineSm-CI-16gxw.js";import{r as ee,t as te}from"./useToggle-DD3u6UYj.js";import{t as v}from"./DescriptionList-CvVxvgAW.js";import{t as y}from"./DescriptionList-DFBe9PWY.js";import{t as b}from"./SearchField-BvovuLqa.js";import{t as x}from"./PageLayout-CzwRkq19.js";import{t as S}from"./PageLayout-Dfb2oAVs.js";import{t as C}from"./PageAsideBlock-BbyhbT6a.js";import{t as w}from"./PageAsideBlock-DyElMAa7.js";import{t as T}from"./TextArea-CosMWSMS.js";import{t as E}from"./TextArea-CsVvEfbN.js";import{a as ne,c as re,i as ie,n as ae,s as oe,t as se}from"./HistoryOutlineMd-CXGcRhxC.js";import{n as ce,t as le}from"./DocumentOutlineMd-BElYt-2K.js";import{$t as ue,U as D,tn as O}from"./common-Bo0TB53D.js";import{a as k,n as A,t as j}from"./PageAsideNavigationItem-B1Wk_i7p.js";var M,N;function P(){return(P=e((()=>{S(),D(),M=s(),N=({aside:e})=>(0,M.jsx)(x,{header:ue,content:O,aside:e});try{N.displayName=`MockPageLayout`,N.__docgenInfo={description:``,displayName:`MockPageLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/common/MockPageLayout.tsx`,methods:[],props:{aside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/common/MockPageLayout.tsx`,name:`TypeLiteral`}],description:``,name:`aside`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var F,I;function L(){return(L=e((()=>{y(),n(),w(),E(),r(),F=s(),I=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(C,{dividerVariant:`fullWidth`,children:(0,F.jsxs)(o,{container:!0,spacing:4,children:[(0,F.jsx)(i,{variant:`h5`,children:`Чат с администратором`}),(0,F.jsx)(T,{placeholder:`Здесь вы можете оставить сообщение для администратора`})]})}),(0,F.jsx)(C,{children:(0,F.jsxs)(o,{container:!0,spacing:4,children:[(0,F.jsx)(i,{variant:`h5`,children:`Данные электронной подписи`}),(0,F.jsx)(v,{items:[{name:`Правовой статус`,value:`Физическое лицо`},{name:`Криптопровайдер`,value:`КриптоПРО CSP`}],justifyContent:`space-between`,direction:`row`})]})}),(0,F.jsx)(C,{children:(0,F.jsx)(v,{items:[{name:`Тариф`,value:`Базис`},{name:`Доп. услуги`,value:``},{name:`Расширения`,value:``}],justifyContent:`space-between`,direction:`row`})})]})})))()}var R,z,B;function V(){return(V=e((()=>{R=t(),le(),ie(),se(),j(),z=s(),B=()=>{let[e,t]=(0,R.useState)(0);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{isActive:e===0,component:`button`,onClick:()=>t(0),icon:(0,z.jsx)(ce,{}),children:`Просмотр документа`}),(0,z.jsx)(A,{isActive:e===1,component:`button`,onClick:()=>t(1),icon:(0,z.jsx)(ne,{}),children:`Вложенные файлы`}),(0,z.jsx)(A,{isActive:e===2,component:`button`,onClick:()=>t(2),icon:(0,z.jsx)(ae,{}),children:`История изменений`})]})}})))()}var H,U,W,G,K,q;function J(){return(J=e((()=>{c(),j(),H=a(A)`
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
`,U=a.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,W=a.ul`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  list-style: none;
`,G=a.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
  }
`,K=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  height: 40px;
  padding: ${({theme:e})=>e.microSpacing(6,5)};
`,a.div`
  padding: ${({theme:e})=>e.spacing(4)};
`,q=a.div`
  padding: ${({theme:e})=>e.spacing(3,4)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
`})))()}var Y,X,Z;function Q(){return(Q=e((()=>{Y=t(),oe(),_(),f(),p(),b(),h(),r(),te(),J(),X=s(),Z=()=>{let[e,t,n]=ee({initialState:!1}),[r,a]=(0,Y.useState)(`Документ 1`),o=e=>()=>{a(e),n()},s=()=>(0,X.jsxs)(W,{children:[(0,X.jsx)(H,{onClick:o(`Документ 1`),isActive:r===`Документ 1`,icon:(0,X.jsx)(g,{}),children:`Документ 1`}),(0,X.jsx)(H,{onClick:o(`Документ 2`),isActive:r===`Документ 2`,icon:(0,X.jsx)(g,{}),children:`Документ 2`}),(0,X.jsx)(H,{onClick:o(`Документ 3`),isActive:r===`Документ 3`,icon:(0,X.jsx)(g,{}),children:`Документ 3`})]});return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(U,{children:[(0,X.jsxs)(K,{children:[(0,X.jsx)(re,{}),(0,X.jsx)(i,{children:`Пакет документов`})]}),s()]}),(0,X.jsx)(G,{children:(0,X.jsx)(m,{onClick:t,endAdornment:(0,X.jsx)(d,{}),inputProps:{readOnly:!0},fullWidth:!0,value:r,hideHelperText:!0})}),(0,X.jsxs)(u,{open:e,onClose:n,title:`Пакет документов`,children:[(0,X.jsx)(q,{children:(0,X.jsx)(l,{fullWidth:!0})}),s()]})]})}})))()}function $(){return($=e((()=>{P(),L(),V(),Q()})))()}export{V as a,N as c,B as i,P as l,Z as n,I as o,Q as r,L as s,$ as t};