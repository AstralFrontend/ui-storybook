import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Sa as a,Va as o,Xt as s,an as ee,cn as c,cr as te,dt as ne,ei as l,en as u,ft as re,in as ie,ji as d,ln as ae,lr as oe,on as se,wn as ce,xa as f,yn as p}from"./preview-BJt2oHan.js";import{n as le,t as ue}from"./useViewportType-CJp1JNBL.js";import{t as de}from"./Skeleton-1-z37sDt.js";import{a as fe,r as pe,t as me}from"./BottomDrawer-C91oQK52.js";import{t as he}from"./Divider-DPKjfRdU.js";import{n as ge,t as _e}from"./ChevronDOutlineMd-Dk68R4OA.js";import{t as ve}from"./BottomDrawer-YpC0rzpo.js";import{t as ye}from"./OverflowTypography-C9wWjEf6.js";import{t as be}from"./OverflowTypography-BKsgtBlr.js";import{D as m,E as xe,O as h,T as Se,f as Ce,h as we,l as Te,o as Ee,s as De,t as Oe,u as ke,v as Ae}from"./PageContentHeaderActions-VSxhWVI4.js";import{t as je}from"./Skeleton-By67765y.js";import{t as Me}from"./Paper-qQtnKC0-.js";import{t as Ne}from"./Paper-a1Oaf4zu.js";import{t as Pe}from"./Divider-B57a88Nu.js";import{r as Fe,t as Ie}from"./useToggle-DQVAtcuE.js";import{n as g,r as _,t as Le}from"./constants-mqUD7iyQ.js";import{n as Re,t as v}from"./constants-CKE0pQme.js";import{l as ze,u as Be}from"./constants-DEPY63Uw.js";var Ve,He;function Ue(){return(Ue=e((()=>{Ne(),p(),v(),Ve=d.div`
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
`,He=d(Me)`
  height: 100%;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border: unset;

    .${Re.withoutHeader} {
      padding-top: ${({theme:e})=>e.spacing(4)};
    }
  }
`})))()}var We,y,b;function x(){return(x=e((()=>{We=o(),l(),v(),Ue(),y=f(),b=(0,We.forwardRef)(({children:e,className:n},r)=>(0,y.jsx)(He,{variant:`outlined`,children:(0,y.jsx)(Ve,{className:t(n,Re.root),ref:r,children:e})}));try{b.displayName=`PageLayoutContainer`,b.__docgenInfo={description:``,displayName:`PageLayoutContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutContainer/PageLayoutContainer.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Ge(){return(Ge=e((()=>{x(),v()})))()}var S,C;function w(){return(w=e((()=>{S=o(),Ce(),C=({navigation:e})=>{let[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{if(!e)return;let t=document.querySelector(`.${Se.root}`);n(t)},[]),{pageHeaderContainer:t,isMobileNavigationVisible:e&&t}}})))()}function Ke(){return(Ke=e((()=>{w()})))()}function T(){return(T=e((()=>{Ke()})))()}var qe,Je,Ye;function Xe(){return(Xe=e((()=>{te(),ve(),fe(),c(),p(),qe=d(ae)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    order: 3;

    margin: ${({theme:e})=>e.spacing(0,4,4)};

    background-color: ${({theme:e})=>e.palette.background.default};
  }
`,Je=d.div`
  padding: ${({theme:e})=>e.spacing(4)};
`,Ye=d(me)`
  & .${oe.root} {
     height: calc(100vh - ${pe});

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable plugin/no-unsupported-browser-features */
    @supports (height: 100dvh) {
      height: calc(100dvh - ${pe});
    }
  }
`})))()}var E,D;function O(){return(O=e((()=>{_e(),Ie(),Xe(),E=f(),D=({content:e})=>{let[t,n,r]=Fe({initialState:!1});return e?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(qe,{variant:`outlined`,color:`grey`,endIcon:(0,E.jsx)(ge,{}),onClick:n,children:`Подробная информация`}),(0,E.jsx)(Ye,{title:`Подробная информация`,open:t,onClose:r,children:(0,E.jsx)(Je,{children:e})})]}):null};try{D.displayName=`MobileAsideButton`,D.__docgenInfo={description:``,displayName:`MobileAsideButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAside/MobileAsideButton/MobileAsideButton.tsx`,methods:[],props:{content:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/MobileAsideButton/MobileAsideButton.tsx`,name:`TypeLiteral`}],description:``,name:`content`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Ze(){return(Ze=e((()=>{O()})))()}var Qe;function k(){return(k=e((()=>{i(),Qe={root:r(`page-aside-navigation`)}})))()}var $e,A,j,M,N;function P(){return(P=e((()=>{Pe(),k(),p(),m(),$e=d.aside`
  overflow: auto;
  grid-column: 2;
  grid-row: 2;

  width: ${xe};
  padding: ${({theme:e})=>e.spacing(4,6)};

  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

  &.${h.withHeader} {
    & .${Qe.root} {
      padding-top: ${({theme:e})=>e.spacing(5)};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,A=d.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
    order: 3;

    padding: ${({theme:e})=>e.microSpacing(0,8,5)};
  }
`,j=d.div`
  position: relative;

  padding: ${({theme:e})=>e.spacing(1,0,4)};
`,M=d(he)`
  position: absolute;
  bottom: 0;
  left: ${({theme:e})=>e.spacing(-6)};

  width: ${({theme:e})=>`calc(100% + ${e.spacing(12)})`};
`,N=d.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
  }
`})))()}var et,F,tt,I;function L(){return(L=e((()=>{et=a(),l(),ce(),m(),T(),Ze(),P(),F=f(),tt=n(h.root,{variants:{withHeader:{true:h.withHeader}}}),I=({children:e,className:n,header:r,navigation:i})=>{let{pageHeaderContainer:a,isMobileNavigationVisible:o}=C({navigation:i});return(0,F.jsxs)(F.Fragment,{children:[o&&(0,et.createPortal)((0,F.jsx)(N,{className:h.mobileNavigation,children:i}),a),r&&(0,F.jsx)(A,{children:r}),(0,F.jsx)(D,{content:e}),(0,F.jsxs)($e,{className:t(n,tt({withHeader:!!r})),children:[r&&(0,F.jsxs)(j,{children:[r,(0,F.jsx)(M,{})]}),i,e]})]})};try{I.displayName=`PageAside`,I.__docgenInfo={description:``,displayName:`PageAside`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAside/PageAside.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Заголовок боковой панели`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},navigation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAside/types.ts`,name:`TypeLiteral`}],description:`Компонент для отображения навигации`,name:`navigation`,required:!1,tags:{example:`<PageAside navigation={
  <PageAsideNavigation>
    <PageAsideNavigationItem>
      Home
    </PageAsideNavigationItem>
  </PageAsideNavigation>}
/>`},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function nt(){return(nt=e((()=>{m(),L(),T(),Ze()})))()}var rt;function it(){return(it=e((()=>{s(),p(),rt=d.footer`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: center;
  justify-content: flex-end;

  min-height: ${ee};
  padding: ${({theme:e})=>e.spacing(0,6)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-bottom-right-radius: ${({theme:e,$hasAside:t})=>t?0:e.shape.medium};
  border-bottom-left-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    min-height: ${se};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`})))()}var R,at,z;function B(){return(B=e((()=>{R=o(),we(),it(),at=f(),z=(0,R.forwardRef)((e,t)=>{let{children:n,className:r}=e,{hasAside:i}=(0,R.useContext)(Ae);return(0,at.jsx)(rt,{ref:t,className:r,$hasAside:i,children:n})});try{z.displayName=`PageLayoutFooter`,z.__docgenInfo={description:`Footer страницы`,displayName:`PageLayoutFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutFooter/PageLayoutFooter.tsx`,name:`TypeLiteral`}],description:`Содержимое футера`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function V(){return(V=e((()=>{B()})))()}var ot,st;function ct(){return(ct=e((()=>{s(),ze(),p(),g(),ot=d(`article`,{shouldForwardProp:e=>![`$isFullHeight`,`$isSeparatorShown`].includes(e)})`
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

  @keyframes ${Le} {
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

  &.${_.animation} > * {
    animation: ${({theme:e})=>`${Le} ${e.transitions.duration.complex*2}ms`};
  }
`,st=d.div`
  scroll-behavior: smooth;

  overflow: auto;
  flex-grow: 1;

  padding: ${({theme:e})=>e.spacing(0,6,4)};

  ${u} {
    scrollbar-gutter: stable;

    padding-right: ${({theme:e})=>`calc(${e.spacing(6)} - 6px)`};
  }

  &.${_.contentHasHeader}, &.${_.hasAside} {
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

    &.${_.contentHasHeader}, &.${_.hasAside} {
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
    
    &.${_.contentHasHeader}, &.${_.hasAside} {
      ${u} {
        padding-right: ${({theme:e})=>e.spacing(4)};
      }
    }

    &.${_.contentHasHeader} {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    /* Причина игнора: Не критично для отображения */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    &.${_.isUnconstrained}, &:has(> .${ie}) {
      margin: 0;
      padding: 0;

      background-color: unset;
      border: none;
      border-radius: 0;
    }
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${Be.document}.${Be.zoom}) {
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
    &&.${_.withPdfViewer} {
      margin: 0;
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;

      background-color: ${({theme:e})=>e.palette.background.body};
      border: unset;
      border-radius: 0;
    }
  }
`})))()}var H,U,lt,W;function G(){return(G=e((()=>{H=o(),we(),V(),l(),ce(),g(),ct(),U=f(),lt=n(_.content,{variants:{isUnconstrained:{true:_.isUnconstrained},hasHeader:{true:_.contentHasHeader},hasAside:{true:_.hasAside}}}),W=(0,H.forwardRef)((e,n)=>{let{hasAside:r}=(0,H.useContext)(Ae),{className:i,children:a,isFullHeight:o=!0,footer:s,scrollRef:ee,header:c,isUnconstrained:te=!1}=e;return(0,U.jsxs)(ot,{className:t(i,_.pageContent),ref:n,$isFullHeight:o,$isSeparatorShown:r||!!c,children:[c&&c,(0,U.jsx)(st,{ref:ee,className:lt({isUnconstrained:te,hasHeader:!!c,hasAside:r}),children:a}),s&&!(0,H.isValidElement)(s)&&(0,U.jsx)(z,{...s}),(0,H.isValidElement)(s)&&s]})});try{W.displayName=`PageContent`,W.__docgenInfo={description:``,displayName:`PageContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContent.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isFullHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Флаг, растягивающий контейнер на 100% высоты`,name:`isFullHeight`,required:!1,tags:{deprecated:`Не поддерживается, контейнер всегда растянут на 100% независимо от флага`},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Конфигурация PageLayoutFooter`,name:`footer`,required:!1,tags:{example:`<PageLayout footer={{
children: 'Нижняя панель страницы',
}} />`},type:{name:`ReactNode | PageLayoutFooterProps`}},isFormPaddingDisable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Если true, убирает отступы для Content`,name:`isFormPaddingDisable`,required:!1,tags:{},type:{name:`boolean`}},scrollRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Ref на скролл контейнер`,name:`scrollRef`,required:!1,tags:{},type:{name:`RefObject<HTMLDivElement>`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Header контентной части`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},isUnconstrained:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/types.ts`,name:`TypeLiteral`}],description:`Флаг, позволяющий контенту занимать всю доступную ширину контейнера`,name:`isUnconstrained`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var K;function q(){return(q=e((()=>{i(),K={pageContentHeader:r(`page-content-header`),description:r(`page-content-header__description`)}})))()}var ut,dt;function ft(){return(ft=e((()=>{p(),q(),ut=d.header`
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
`,dt=d.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;

    & .${K.description} {
      display: none;
    }
  }
`})))()}var J,pt;function mt(){return(mt=e((()=>{je(),p(),ne(),J=d(re)`
  overflow: hidden;
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;
`,pt=d(de)`
  width: 200px;
  height: 20px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`})))()}var Y,X;function ht(){return(ht=e((()=>{be(),mt(),Y=f(),X=({title:e,isLoading:t,children:n})=>!e&&!n&&t?(0,Y.jsx)(pt,{variant:`rounded`}):typeof e==`string`?(0,Y.jsxs)(J,{component:`h3`,variant:`h5`,children:[(0,Y.jsx)(ye,{component:`div`,variant:`inherit`,children:e}),n]}):(0,Y.jsxs)(J,{component:`div`,role:`heading`,"aria-level":3,variant:`h5`,children:[e,n]});try{X.displayName=`Title`,X.__docgenInfo={description:``,displayName:`Title`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function gt(){return(gt=e((()=>{ht()})))()}var Z,_t;function vt(){return(vt=e((()=>{Z=o(),Ce(),ue(),_t=()=>{let[e,t]=(0,Z.useState)(null),{isMobile:n}=le();return(0,Z.useEffect)(()=>{let e=document.querySelector(`.${Se.root}`);t(e)},[]),{pageHeaderContainer:e,isMobile:n}}})))()}function yt(){return(yt=e((()=>{vt()})))()}var bt,Q,$;function xt(){return(xt=e((()=>{bt=a(),q(),Te(),Ee(),ft(),gt(),yt(),Q=f(),$=({title:e,description:t,actions:n,children:r,isLoading:i})=>{let{pageHeaderContainer:a,isMobile:o}=_t(),s=(0,Q.jsx)(De,{title:e,description:t,children:(0,Q.jsxs)(ut,{className:K.pageContentHeader,children:[(0,Q.jsxs)(dt,{children:[(0,Q.jsx)(X,{title:e,isLoading:i,children:r}),(0,Q.jsx)(ke,{className:K.description,description:t,isLoading:i})]}),n]})});return o&&a?(0,bt.createPortal)(s,a):s};try{$.displayName=`PageContentHeader`,$.__docgenInfo={description:``,displayName:`PageContentHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Заголовок контентной части`,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Описание контентной части`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:`Действия контентной части`,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeader.tsx`,name:`TypeLiteral`}],description:"Кастомный контент, отображаемый рядом с `title`.\nЕсли `title` не указан, `children` будет использоваться вместо него.",name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function St(){return(St=e((()=>{xt(),Oe()})))()}function Ct(){return(Ct=e((()=>{g(),G(),St()})))()}export{Ge as C,C as S,x as T,k as _,G as a,O as b,B as c,L as d,j as f,P as g,M as h,W as i,nt as l,N as m,$ as n,V as o,A as p,xt as r,z as s,Ct as t,I as u,Qe as v,b as w,w as x,D as y};