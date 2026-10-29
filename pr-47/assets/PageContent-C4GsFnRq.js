import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{$r as t,Cn as n,Dn as r,On as i,Xt as a,an as o,ba as s,cn as ee,cr as c,dt as te,ei as l,en as u,ft as ne,in as re,ji as d,ln as ie,lr as ae,on as oe,wn as se,ya as f,yn as p,za as m}from"./preview-BY-1Z8yT.js";import{n as ce,t as le}from"./useViewportType-BoWN9doH.js";import{t as ue}from"./Skeleton-Bba8jBU8.js";import{a as de,r as fe,t as pe}from"./BottomDrawer-C0cPbNZG.js";import{t as me}from"./Divider-DU4xp7Tc.js";import{n as he,t as ge}from"./ChevronDOutlineMd-BvJZtBET.js";import{t as _e}from"./BottomDrawer-CCi_dIPF.js";import{t as ve}from"./OverflowTypography-DhTf_HbW.js";import{t as ye}from"./OverflowTypography-Dc4IYSWm.js";import{D as h,E as be,O as g,T as xe,f as Se,h as Ce,l as we,o as Te,s as Ee,t as De,u as Oe,v as ke}from"./PageContentHeaderActions-D6qgd0fe.js";import{t as Ae}from"./Skeleton-6R4BDyrW.js";import{t as je}from"./Paper-Dk9oTu8z.js";import{t as Me}from"./Paper-CbLAvcVk.js";import{t as Ne}from"./Divider-B9C-vIr2.js";import{r as Pe,t as Fe}from"./useToggle-DWyzy7ir.js";import{n as _,r as v,t as Ie}from"./constants-BrxR8ep1.js";import{n as Le,t as y}from"./constants-BSAlUWpk.js";import{l as Re,u as ze}from"./constants-CK_Zaqja.js";var Be,Ve;function He(){return(He=e((()=>{Me(),p(),y(),Be=d.div`
  display: grid;
  grid-row-gap: ${({theme:e})=>e.spacing(4)};
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  flex-grow: 1;

  height: 100%;
  min-height: 0;
  padding-top: ${({theme:e})=>e.spacing(4)};

  background-color: ${({theme:e})=>e.palette.common.white};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    grid-row-gap: ${({theme:e})=>e.spacing(2)};

    padding-top: ${({theme:e})=>e.spacing(3)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    scroll-behavior: smooth;

    overflow: hidden auto;
    display: flex;
    grid-row-gap: 0;
    flex-direction: column;

    margin-bottom: 0;
    padding-top: 0;

    background-color: ${({theme:e})=>e.palette.background.body};
    border: unset;
  }
`,Ve=d(je)`
  height: 100%;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border: unset;

    .${Le.withoutHeader} {
      padding-top: ${({theme:e})=>e.spacing(4)};
    }
  }
`})))()}var Ue,b,x;function S(){return(S=e((()=>{Ue=m(),l(),y(),He(),b=f(),x=(0,Ue.forwardRef)(({children:e,className:n},r)=>(0,b.jsx)(Ve,{variant:`outlined`,children:(0,b.jsx)(Be,{className:t(n,Le.root),ref:r,children:e})}));try{x.displayName=`PageLayoutContainer`,x.__docgenInfo={description:``,displayName:`PageLayoutContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function We(){return(We=e((()=>{S(),y()})))()}var C,w;function T(){return(T=e((()=>{C=m(),Se(),w=({navigation:e})=>{let[t,n]=(0,C.useState)(null);return(0,C.useEffect)(()=>{if(!e)return;let t=document.querySelector(`.${xe.root}`);n(t)},[]),{pageHeaderContainer:t,isMobileNavigationVisible:e&&t}}})))()}function Ge(){return(Ge=e((()=>{T()})))()}function E(){return(E=e((()=>{Ge()})))()}var Ke,qe,Je;function Ye(){return(Ye=e((()=>{c(),_e(),de(),ee(),p(),Ke=d(ie)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    order: 3;

    margin: ${({theme:e})=>e.spacing(0,4,4)};

    background-color: ${({theme:e})=>e.palette.background.default};
  }
`,qe=d.div`
  padding: ${({theme:e})=>e.spacing(4)};
`,Je=d(pe)`
  & .${ae.root} {
     height: calc(100vh - ${fe});

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable plugin/no-unsupported-browser-features */
    @supports (height: 100dvh) {
      height: calc(100dvh - ${fe});
    }
  }
`})))()}var D,O;function k(){return(k=e((()=>{ge(),Fe(),Ye(),D=f(),O=({content:e})=>{let[t,n,r]=Pe({initialState:!1});return e?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ke,{variant:`outlined`,color:`grey`,endIcon:(0,D.jsx)(he,{}),onClick:n,children:`Подробная информация`}),(0,D.jsx)(Je,{title:`Подробная информация`,open:t,onClose:r,children:(0,D.jsx)(qe,{children:e})})]}):null};try{O.displayName=`MobileAsideButton`,O.__docgenInfo={description:``,displayName:`MobileAsideButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAside/MobileAsideButton/MobileAsideButton.tsx`,methods:[],props:{content:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/MobileAsideButton/MobileAsideButton.tsx`,name:`TypeLiteral`}],description:``,name:`content`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Xe(){return(Xe=e((()=>{k()})))()}var Ze;function A(){return(A=e((()=>{i(),Ze={root:r(`page-aside-navigation`)}})))()}var Qe,j,M,N,P;function F(){return(F=e((()=>{Ne(),A(),p(),h(),Qe=d.aside`
  overflow: auto;
  grid-column: 2;
  grid-row: 2;

  width: ${be};
  padding: ${({theme:e})=>e.spacing(4,6)};

  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

  &.${g.withHeader} {
    & .${Ze.root} {
      padding-top: ${({theme:e})=>e.spacing(5)};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,j=d.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
    order: 3;

    padding: ${({theme:e})=>e.microSpacing(0,8,5)};
  }
`,M=d.div`
  position: relative;

  padding: ${({theme:e})=>e.spacing(1,0,4)};
`,N=d(me)`
  position: absolute;
  bottom: 0;
  left: ${({theme:e})=>e.spacing(-6)};

  width: ${({theme:e})=>`calc(100% + ${e.spacing(12)})`};
`,P=d.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
  }
`})))()}var $e,I,et,L;function R(){return(R=e((()=>{$e=s(),l(),se(),h(),E(),Xe(),F(),I=f(),et=n(g.root,{variants:{withHeader:{true:g.withHeader}}}),L=({children:e,className:n,header:r,navigation:i})=>{let{pageHeaderContainer:a,isMobileNavigationVisible:o}=w({navigation:i});return(0,I.jsxs)(I.Fragment,{children:[o&&(0,$e.createPortal)((0,I.jsx)(P,{className:g.mobileNavigation,children:i}),a),r&&(0,I.jsx)(j,{children:r}),(0,I.jsx)(O,{content:e}),(0,I.jsxs)(Qe,{className:t(n,et({withHeader:!!r})),children:[r&&(0,I.jsxs)(M,{children:[r,(0,I.jsx)(N,{})]}),i,e]})]})};try{L.displayName=`PageAside`,L.__docgenInfo={description:``,displayName:`PageAside`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAside/PageAside.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Заголовок боковой панели`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},navigation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Компонент для отображения навигации`,name:`navigation`,required:!1,tags:{example:`<PageAside navigation={
  <PageAsideNavigation>
    <PageAsideNavigationItem>
      Home
    </PageAsideNavigationItem>
  </PageAsideNavigation>}
/>`},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function tt(){return(tt=e((()=>{h(),R(),E(),Xe()})))()}var nt;function rt(){return(rt=e((()=>{a(),p(),nt=d.footer`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: center;
  justify-content: flex-end;

  min-height: ${o};
  padding: ${({theme:e})=>e.spacing(0,6)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-bottom-right-radius: ${({theme:e,$hasAside:t})=>t?0:e.shape.medium};
  border-bottom-left-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    min-height: ${oe};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`})))()}var z,it,B;function V(){return(V=e((()=>{z=m(),Ce(),rt(),it=f(),B=(0,z.forwardRef)((e,t)=>{let{children:n,className:r}=e,{hasAside:i}=(0,z.useContext)(ke);return(0,it.jsx)(nt,{ref:t,className:r,$hasAside:i,children:n})});try{B.displayName=`PageLayoutFooter`,B.__docgenInfo={description:`Footer страницы`,displayName:`PageLayoutFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,name:`TypeLiteral`}],description:`Содержимое футера`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function H(){return(H=e((()=>{V()})))()}var at,ot;function st(){return(st=e((()=>{a(),Re(),p(),_(),at=d(`article`,{shouldForwardProp:e=>![`$isFullHeight`,`$isSeparatorShown`].includes(e)})`
  scroll-behavior: smooth;
  scrollbar-gutter: unset;

  overflow: hidden;
  display: flex;
  grid-column: 1;
  grid-row: 2;
  flex-direction: column;

  border-top: ${({$isSeparatorShown:e,theme:t})=>e?`1px solid ${t.palette.components.border.default}`:`none`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: unset;
    flex-grow: 1;
    order: 4;

    height: ${({$isFullHeight:e})=>e?`auto`:`100%`};

    border-top: none;
  }

  @keyframes ${Ie} {
    0% {
      display: none;

      opacity: 0;
    }

    50% {
      display: none;

      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &.${v.animation} > * {
    animation: ${({theme:e})=>`${Ie} ${e.transitions.duration.complex*2}ms`};
  }
`,ot=d.div`
  scroll-behavior: smooth;

  overflow: auto;
  flex-grow: 1;

  padding: ${({theme:e})=>e.spacing(0,6,4)};

  ${u} {
    scrollbar-gutter: stable;

    padding-right: ${({theme:e})=>`calc(${e.spacing(6)} - 6px)`};
  }

  &.${v.contentHasHeader}, &.${v.hasAside} {
    padding: ${({theme:e})=>e.spacing(4,6,4)};

    ${u} {
      padding-right: ${({theme:e})=>`calc(${e.spacing(6)} - 6px)`};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding-right: ${({theme:e})=>e.spacing(4)};
    padding-bottom: ${({theme:e})=>e.spacing(3)};
    padding-left: ${({theme:e})=>e.spacing(4)};

    ${u} {
      padding-right: ${({theme:e})=>`calc(${e.spacing(4)} - 6px)`};
    }

    &.${v.contentHasHeader}, &.${v.hasAside} {
      padding: ${({theme:e})=>e.spacing(4,4,3)};

      ${u} {
        padding-right: ${({theme:e})=>`calc(${e.spacing(4)} - 6px)`};
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    scrollbar-gutter: unset;
    
    overflow: hidden;

    margin: ${({theme:e})=>e.spacing(0,4,4)};
    padding: ${({theme:e})=>e.spacing(4,4,3)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};

    ${u} {
      padding-right: ${({theme:e})=>e.spacing(4)};
    }
    
    &.${v.contentHasHeader}, &.${v.hasAside} {
      ${u} {
        padding-right: ${({theme:e})=>e.spacing(4)};
      }
    }

    &.${v.contentHasHeader} {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    /* Причина игнора: Не критично для отображения */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    &.${v.isUnconstrained}, &:has(> .${re}) {
      margin: 0;
      padding: 0;

      background-color: unset;
      border: none;
      border-radius: 0;
    }
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${ze.document}.${ze.zoom}) {
    scroll-behavior: auto;
    scrollbar-gutter: auto;

    overflow: auto;

    padding-right: 0;

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      scrollbar-gutter: auto;

      padding: ${({theme:e})=>e.spacing(4,4,3)};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &&.${v.withPdfViewer} {
      margin: 0;
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;

      background-color: ${({theme:e})=>e.palette.background.body};
      border: unset;
      border-radius: 0;
    }
  }
`})))()}var U,W,ct,G;function K(){return(K=e((()=>{U=m(),Ce(),H(),l(),se(),_(),st(),W=f(),ct=n(v.content,{variants:{isUnconstrained:{true:v.isUnconstrained},hasHeader:{true:v.contentHasHeader},hasAside:{true:v.hasAside}}}),G=(0,U.forwardRef)((e,n)=>{let{hasAside:r}=(0,U.useContext)(ke),{className:i,children:a,isFullHeight:o=!0,footer:s,scrollRef:ee,header:c,isUnconstrained:te=!1}=e;return(0,W.jsxs)(at,{className:t(i,v.pageContent),ref:n,$isFullHeight:o,$isSeparatorShown:r||!!c,children:[c&&c,(0,W.jsx)(ot,{ref:ee,className:ct({isUnconstrained:te,hasHeader:!!c,hasAside:r}),children:a}),s&&!(0,U.isValidElement)(s)&&(0,W.jsx)(B,{...s}),(0,U.isValidElement)(s)&&s]})});try{G.displayName=`PageContent`,G.__docgenInfo={description:``,displayName:`PageContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContent.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isFullHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Флаг, растягивающий контейнер на 100% высоты`,name:`isFullHeight`,required:!1,tags:{deprecated:`Не поддерживается, контейнер всегда растянут на 100% независимо от флага`},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Конфигурация PageLayoutFooter`,name:`footer`,required:!1,tags:{example:`<PageLayout footer={{
children: 'Нижняя панель страницы',
}} />`},type:{name:`ReactNode | PageLayoutFooterProps`}},isFormPaddingDisable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Если true, убирает отступы для Content`,name:`isFormPaddingDisable`,required:!1,tags:{},type:{name:`boolean`}},scrollRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Ref на скролл контейнер`,name:`scrollRef`,required:!1,tags:{},type:{name:`RefObject<HTMLDivElement>`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Header контентной части`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},isUnconstrained:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Флаг, позволяющий контенту занимать всю доступную ширину контейнера`,name:`isUnconstrained`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var q;function J(){return(J=e((()=>{i(),q={pageContentHeader:r(`page-content-header`),description:r(`page-content-header__description`)}})))()}var lt,ut;function dt(){return(dt=e((()=>{p(),J(),lt=d.header`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;
  justify-content: space-between;

  padding: ${({theme:e})=>e.spacing(4,6)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(5)};

    height: 48px;
    padding: ${({theme:e})=>e.spacing(0,1,0,4)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }
`,ut=d.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;

    & .${q.description} {
      display: none;
    }
  }
`})))()}var Y,ft;function pt(){return(pt=e((()=>{Ae(),p(),te(),Y=d(ne)`
  overflow: hidden;
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;
`,ft=d(ue)`
  width: 200px;
  height: 20px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`})))()}var X,Z;function mt(){return(mt=e((()=>{ye(),pt(),X=f(),Z=({title:e,isLoading:t,children:n})=>!e&&!n&&t?(0,X.jsx)(ft,{variant:`rounded`}):typeof e==`string`?(0,X.jsxs)(Y,{component:`h3`,variant:`h5`,children:[(0,X.jsx)(ve,{component:`div`,variant:`inherit`,children:e}),n]}):(0,X.jsxs)(Y,{component:`div`,role:`heading`,"aria-level":3,variant:`h5`,children:[e,n]});try{Z.displayName=`Title`,Z.__docgenInfo={description:``,displayName:`Title`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ht(){return(ht=e((()=>{mt()})))()}var gt,_t;function vt(){return(vt=e((()=>{gt=m(),Se(),le(),_t=()=>{let[e,t]=(0,gt.useState)(null),{isMobile:n}=ce();return(0,gt.useEffect)(()=>{let e=document.querySelector(`.${xe.root}`);t(e)},[]),{pageHeaderContainer:e,isMobile:n}}})))()}function yt(){return(yt=e((()=>{vt()})))()}var bt,Q,$;function xt(){return(xt=e((()=>{bt=s(),J(),we(),Te(),dt(),ht(),yt(),Q=f(),$=({title:e,description:t,actions:n,children:r,isLoading:i})=>{let{pageHeaderContainer:a,isMobile:o}=_t(),s=(0,Q.jsx)(Ee,{title:e,description:t,children:(0,Q.jsxs)(lt,{className:q.pageContentHeader,children:[(0,Q.jsxs)(ut,{children:[(0,Q.jsx)(Z,{title:e,isLoading:i,children:r}),(0,Q.jsx)(Oe,{className:q.description,description:t,isLoading:i})]}),n]})});return o&&a?(0,bt.createPortal)(s,a):s};try{$.displayName=`PageContentHeader`,$.__docgenInfo={description:``,displayName:`PageContentHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Заголовок контентной части`,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Описание контентной части`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Действия контентной части`,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:"Кастомный контент, отображаемый рядом с `title`.\nЕсли `title` не указан, `children` будет использоваться вместо него.",name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function St(){return(St=e((()=>{xt(),De()})))()}function Ct(){return(Ct=e((()=>{_(),K(),St()})))()}export{We as C,w as S,S as T,A as _,K as a,k as b,V as c,R as d,M as f,F as g,N as h,G as i,tt as l,P as m,$ as n,H as o,j as p,xt as r,B as s,Ct as t,L as u,Ze as v,x as w,T as x,O as y};