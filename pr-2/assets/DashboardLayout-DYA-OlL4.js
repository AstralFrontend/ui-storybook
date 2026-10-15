import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,C as n,Cn as r,Dn as i,Ln as a,On as o,Rn as s,Va as c,Xt as l,an as u,bn as d,cn as f,ct as p,dt as ee,ei as m,en as h,ft as g,ht as te,it as ne,ji as _,ln as re,lt as ie,mt as ae,on as oe,rt as se,wn as ce,xa as v,y as le,yn as y}from"./preview-D2nXkflB.js";import{i as ue,n as de,r as fe,t as pe}from"./useViewportType-CVjTu23j.js";import{t as b}from"./Skeleton-DpcJaR1n.js";import{t as me}from"./Tooltip-hqXVuKvZ.js";import{a as he,i as ge,r as _e}from"./BottomDrawer-B2hq8XEb.js";import{n as ve,t as ye}from"./CrossOutlineMd-CELo1915.js";import{t as be}from"./Chevron-BJzQwtPg.js";import{t as xe}from"./Chevron-CoGU1g4E.js";import{t as Se}from"./BottomDrawer-CV5kJXk6.js";import{r as Ce,t as we}from"./personalDataSecurity-ksEhzCrO.js";import{t as Te}from"./Tooltip-BdeAh5fw.js";import{n as Ee}from"./useFirstMountState-EXhmaMHe.js";import{t as De}from"./useFirstMountState-B0lKgtPV.js";import{t as Oe}from"./OverflowTypography-Dl4FOQYg.js";import{t as ke}from"./OverflowTypography-DMVO2bDR.js";import{i as Ae,r as je,t as Me}from"./Badge-Dxex8KdF.js";import{r as Ne}from"./Alert-BGUmE7lt.js";import{t as Pe}from"./Alert-CjLk7lHU.js";import{t as Fe}from"./Popover-DkiLHE0m.js";import{t as Ie}from"./Popover-fDF-y4HE.js";import{n as Le}from"./useLocalStorage-B9_v95_3.js";import{a as Re,n as ze,o as Be,t as Ve}from"./PinButton-BIdwlysM.js";import{t as He}from"./Badge-BYb86p7M.js";import{t as Ue}from"./Skeleton-C_O3B1AV.js";import{a as We,t as Ge}from"./LoadingPlaceholder-BHY5Pwq8.js";import{i as x,n as Ke,t as S}from"./DashboardContext-B4mg2n8X.js";import{a as C,n as qe,r as Je,t as Ye}from"./NavMenu-CvIGVgVC.js";import{n as Xe,t as Ze}from"./MenuOnOutlineMd-BEmBEI1x.js";import{n as Qe,t as $e}from"./getInertProps-BI9bIdEI.js";import{t as et}from"./Paper-B9qPMTGr.js";import{t as tt}from"./Paper-Cheg_iEj.js";import{n as nt,t as rt}from"./QuitOutlineMd-CXitwaSY.js";import{t as it}from"./Product-RNU4XDXn.js";import{n as at,t as ot}from"./Profile-BY-wNeDR.js";import{o as st,s as w,t as ct}from"./Profile-toyeV3JE.js";import{n as lt,t as ut}from"./BellOutlineMd-_pRoxkgH.js";import{n as dt,t as ft}from"./NotificationList-CI1DQhUC.js";import{r as pt,t as mt}from"./useToggle-kFo4iXcO.js";import{n as ht,r as gt}from"./constants-B6DRtP3H.js";var T,_t;function E(){return(E=e((()=>{o(),T={root:i(`dashboard-layout-sidebar`),hasProfile:i(`dashboard-layout-sidebar_has-profile`),hasMenuOrganization:i(`dashboard-layout-sidebar_has-menu-organization`)},_t={default:`170px`,counter:`130px`,group:`140px`,groupCounter:`100px`}})))()}var vt,yt,D,O;function bt(){return(bt=e((()=>{Ue(),y(),vt=_(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  position: relative;

  grid-column: 1;
  grid-row: 2 / -1;

  width: ${({$isPinned:e})=>e?`242px`:`58px`};
  padding: ${({theme:e,$isPinned:t})=>t?e.spacing(4,3):e.spacing(4,2)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,yt=_(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  padding: ${({theme:e,$isPinned:t})=>t?e.microSpacing(12,3):e.microSpacing(12,5)};
`,D=_.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
`,O=_(b,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  display: ${({$isPinned:e})=>e?`unset`:`none`};
`})))()}var xt;function St(){return(St=e((()=>{xt=`@astral/ui::Sidebar::isPinned`})))()}var k,Ct,wt,Tt;function Et(){return(Et=e((()=>{fe(),k=c(),ae(),De(),Be(),pe(),Ct=()=>{let[e,t]=(0,k.useState)(!1);return{collapsedIn:e,onToggleSidebar:()=>{t(e=>!e)},isPinned:e,onTogglePin:()=>void 0}},wt=(e,t)=>{let n=te(),r=Ee(),i=ue(n.breakpoints.up(`xl`)),a=()=>typeof window>`u`||i,[o=a(),s]=Le(e,a()),[c,l]=(0,k.useState)(!0),[u,d]=(0,k.useState)(!0);return(0,k.useEffect)(()=>{l(o),d(o)},[o]),(0,k.useEffect)(()=>{if(t){l(!1),d(!1);return}l(o),d(o)},[t]),(0,k.useEffect)(()=>{r||c&&d(!0)},[c]),{collapsedIn:u,onToggleSidebar:(e=!1)=>{c||d(e)},isPinned:c,onTogglePin:()=>{t?l(!c):s(!o)}}},Tt=(e,t)=>{let{isMobile:n}=de(),r=Ct(),i=wt(e,t);return n?r:i}})))()}function Dt(){return(Dt=e((()=>{Et()})))()}function Ot(){return(Ot=e((()=>{Dt()})))()}var A,kt,j,At;function jt(){return(jt=e((()=>{A=c(),St(),Ot(),kt=v(),j=(0,A.createContext)({collapsedIn:!1,onToggleSidebar:()=>void 0,isPinned:!0,onTogglePin:()=>void 0,isPopupOpen:!1,setIsPopupOpen:()=>void 0,popoverAnchorRef:(0,A.createRef)()}),At=({children:e,localStorageKey:t=xt,isFocusedMode:n=!1})=>{let r=Tt(t,n),[i,a]=(0,A.useState)(!1),o=(0,A.useRef)(null),s={...r,isPopupOpen:i,setIsPopupOpen:a,popoverAnchorRef:o};return(0,kt.jsx)(j.Provider,{value:s,children:e})};try{j.displayName=`DashboardSidebarContext`,j.__docgenInfo={description:``,displayName:`DashboardSidebarContext`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,methods:[],props:{},tags:{}}}catch{}try{At.displayName=`DashboardSidebarProvider`,At.__docgenInfo={description:`Провайдер предназначен для проброса состояния боковой панел, а так же управления этим состоянием.
В данный провайдер обернут компонент DashboardLayout.`,displayName:`DashboardSidebarProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},localStorageKey:{defaultValue:{value:`@astral/ui::Sidebar::isPinned`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`localStorageKey`,required:!1,tags:{},type:{name:`string`}},isFocusedMode:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`isFocusedMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function M(){return(M=e((()=>{St(),jt()})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{Mt=c(),M(),Be(),Nt=()=>{let[e=!0]=Le(xt,!0),[t,n]=(0,Mt.useState)(!0);return(0,Mt.useEffect)(()=>{n(e)},[]),{isPinned:t}}})))()}function Ft(){return(Ft=e((()=>{Pt()})))()}var N,It;function Lt(){return(Lt=e((()=>{E(),Ue(),m(),bt(),Ft(),N=v(),It=()=>{let{isPinned:e}=Nt();return(0,N.jsxs)(vt,{$isPinned:e,className:t(T.root),children:[(0,N.jsx)(b,{shapeSize:e?`medium`:`small`,height:40,variant:`rounded`}),(0,N.jsxs)(yt,{$isPinned:e,children:[(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,N.jsx)(O,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,N.jsx)(O,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,N.jsx)(O,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),e&&(0,N.jsxs)(D,{children:[(0,N.jsx)(b,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,N.jsx)(O,{height:14,width:174,variant:`rounded`,$isPinned:e})]})]})]})}})))()}function Rt(){return(Rt=e((()=>{Lt()})))()}function zt(){return(zt=e((()=>{qe(),Je()})))()}var Bt;function Vt(){return(Vt=e((()=>{o(),Bt={root:i(`dashboard-layout-sidebar__navigation`)}})))()}var Ht,Ut,Wt;function Gt(){return(Gt=e((()=>{Ht=c(),Vt(),Ut=v(),Wt=(0,Ht.forwardRef)((e,t)=>{let{menu:n}=e;return(0,Ut.jsx)(`nav`,{ref:t,className:Bt.root,children:n})});try{Wt.displayName=`SidebarNav`,Wt.__docgenInfo={description:``,displayName:`SidebarNav`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/SidebarNav/SidebarNav.tsx`,methods:[],props:{menu:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/SidebarNav/SidebarNav.tsx`,name:`TypeLiteral`}],description:``,name:`menu`,required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}})))()}function Kt(){return(Kt=e((()=>{Gt(),Vt()})))()}var qt,Jt,Yt,Xt,P;function F(){return(F=e((()=>{o(),qt=`Перейти к данным организации`,Jt=`Выбор организации`,Yt=()=>`Нет выбранной организации`,Xt=`108px`,P={root:i(`menu-organization`),errorPlaceholder:i(`menu-organization__error-placeholder`),button:i(`menu-organization__button`),organizationData:i(`menu-organization__organization-data`)}})))()}var Zt,Qt,$t,en,tn,nn;function rn(){return(rn=e((()=>{Se(),he(),p(),Ie(),Ge(),le(),y(),ee(),F(),Zt=_.div`
  padding: ${({theme:e})=>e.spacing(2)};

  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }
`,Qt=_.div`
  max-width: 300px;
  padding: ${({theme:e})=>e.spacing(2,3)};

  border-bottom: ${({theme:e})=>`1px solid ${e.palette.components.border.default}`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    max-width: unset;
    padding: ${({theme:e})=>e.spacing(3,4)};
  }
`,$t=_.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: ${({$isLoading:e})=>e?`content-box`:`inherit`};
  width: 300px;
  min-height: ${({$isLoading:e})=>e?Xt:`64px`};
  max-height: 328px;

  & .${P.errorPlaceholder} {
    display: flex;
    gap: ${({theme:e})=>e.spacing(1)};

    height: ${Xt};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    height: 100%;
    max-height: unset;

    & .${We.root} {
      justify-content: unset;
    }

    & .${P.errorPlaceholder} {
      gap: ${({theme:e})=>e.spacing(6)};
      justify-content: center;

      height: 100%;

      & .${n.title} {
        margin-bottom: unset;
      }

      & .${n.footer} {
        margin-top: unset;
      }
    }
  }
`,en=_(ie)`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  padding-top: ${({theme:e})=>e.spacing(1)};
`,tn=_(g)`
  color: ${({theme:e})=>e.palette.grey[600]};
`,nn=_(Fe)`

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${ge.content} {
      display: flex;
      flex-direction: column;

      height: calc(100vh - ${_e});

      /* Причина игнора: прогрессивное улучшение */
      /* stylelint-disable plugin/no-unsupported-browser-features */
      @supports (height: 100dvh) {
        height: calc(100dvh - ${_e});
      }
      /* stylelint-enable plugin/no-unsupported-browser-features */
    }
  }

`})))()}var an,on,sn,cn;function ln(){return(ln=e((()=>{f(),xe(),l(),d(),ee(),an=_(re)`
  display: flex;
  align-items: center;

  min-width: 148px;
  max-width: 300px;
  height: auto;
  padding: ${({theme:e})=>e.microSpacing(2,1,2,4)};

  text-align: left;

  ${h} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  &:active {
    color: ${({theme:e})=>e.palette.primary[800]};

    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    justify-content: space-between;

    width: 100%;
    min-width: unset;
    max-width: unset;

    border-radius: 0;

    &:active {
      background-color: ${({theme:e})=>e.palette.primary[100]};
    }
  }
`,on=_(be)`
  width: 24px;
  height: 24px;
`,sn=_.div`
  display: flex;
  flex-direction: column;

  /* Позволяет элементу сжиматься до ширины контейнера */
  min-width: 0;
  max-width: 260px;
`,cn=_(g,{shouldForwardProp:e=>![`$isDisabled`].includes(e)})`
  color: ${({$isDisabled:e})=>e&&`inherit`};
`})))()}var un,I,dn;function fn(){return(fn=e((()=>{un=c(),ke(),we(),Te(),F(),rn(),ln(),I=v(),dn=(0,un.forwardRef)(({onClick:e,isOpen:t,currentOrganization:n,isDisabled:r,disabledReason:i,isHidePersonalData:a,renderPreview:o},s)=>{let{name:c,inn:l,kpp:u}=n,d=Ce({isEnabled:a}),f=()=>(0,I.jsx)(an,{ref:s,variant:`text`,disabled:r,onClick:e,className:P.button,endIcon:(0,I.jsx)(on,{isActive:t,width:24,height:24}),children:o?o(n,{className:d}):(0,I.jsxs)(sn,{className:d,children:[(0,I.jsx)(Oe,{variant:`h6`,component:`div`,children:c}),(0,I.jsxs)(en,{className:P.organizationData,children:[(0,I.jsxs)(cn,{$isDisabled:r,variant:`caption`,color:`textSecondary`,children:[`ИНН `,l]}),u&&(0,I.jsxs)(cn,{$isDisabled:r,variant:`caption`,color:`textSecondary`,children:[`КПП `,u]})]})]})});return r&&i?(0,I.jsx)(me,{title:i,withoutContainer:!1,placement:`bottom`,children:f()}):f()});try{dn.displayName=`OrganizationButton`,dn.__docgenInfo={description:``,displayName:`OrganizationButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!0,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},currentOrganization:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`currentOrganization`,required:!0,tags:{},type:{name:`Organization`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},renderPreview:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:`Render-props, позволяет кастомизировать содержимое кнопки`,name:`renderPreview`,required:!1,tags:{},type:{name:`(organization: Organization & Record<string, unknown>, params: { className?: string; }) => ReactNode`}}},tags:{}}}catch{}})))()}var L;function pn(){return(pn=e((()=>{L=`68px`})))()}function mn(){return(mn=e((()=>{fn(),pn()})))()}var hn,gn,R,_n;function z(){return(z=e((()=>{o(),hn=`60px`,gn=`56px`,R=`48px`,_n={root:i(`dashboard-layout`)}})))()}var vn,yn,bn,xn,Sn,Cn;function wn(){return(wn=e((()=>{l(),F(),mn(),Je(),tt(),Ve(),y(),z(),E(),vn=_(`div`,{shouldForwardProp:e=>![`$isPinned`,`$alertHeight`].includes(e)})`
  position: relative;

  grid-column: 1;
  grid-row: 2 / -1;

  width: ${({$isPinned:e})=>e?`242px`:`58px`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: absolute;
    z-index: ${({theme:e})=>e.zIndex.appBar-1};
    top: ${({$alertHeight:e})=>`calc(${e}px + ${R}) `};
    bottom: 0;
    transform: ${({$isPinned:e})=>e?`translateX(0px)`:`translateX(-100vw)`};

    overflow: hidden auto;

    width: 100vw;
    min-width: 100vw;

    transition: ${({theme:e})=>e.transitions.create([`transform`],{duration:e.transitions.duration.standard})};

    &.${T.hasMenuOrganization}, &.${T.hasProfile} {
      top: ${({$alertHeight:e})=>`calc(${e}px + ${R} + ${L}) `};
    }
  }
`,yn=_(et)`
  display: flex;
  flex-direction: column;

  height: 100%;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border: unset;
    border-radius: 0;
  }
`,bn=_(`aside`,{shouldForwardProp:e=>![`$isPinned`,`$collapsedIn`].includes(e)})`
  position: ${({$isPinned:e})=>e?`relative`:`absolute`};
  z-index: ${({theme:e})=>e.zIndex.appBar-1};

  width: ${({$collapsedIn:e,$isPinned:t})=>t||!t&&e?`242px`:`58px`};
  height: 100%;

  background-color: ${({theme:e})=>e.palette.background.default};
  border-radius: ${({theme:e})=>e.shape.medium};
  box-shadow: ${({theme:e,$isPinned:t,$collapsedIn:n})=>t||!n?`unset`:e.elevation[300]};
  
  transition: ${({theme:e})=>e.transitions.create([`min-width`,`width`,`box-shadow`],{duration:e.transitions.duration.standard,easing:e.transitions.easing.easeInOut})};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;

    width: 100vw;
    min-width: 100vw;

    background-color: ${({theme:e})=>e.palette.background.default};
    border-radius: 0;
  }
`,xn=_.header`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    /* Причина игнора: Не критично для отображения */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    &:has(.${P.button}) {
      padding: 0;
    }

    & .${P.button} {
      height: ${L};
      padding: ${({theme:e})=>e.spacing(3,4)};
    }
  }
`,Sn=_.div`
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({theme:e})=>e.spacing(4)};

  width: ${({$collapsedIn:e,$isPinned:t})=>t||!t&&e?`240px`:`56px`};
  padding: ${({theme:e})=>e.spacing(4,2,2)};

  transition: ${({theme:e})=>e.transitions.create([`width`],{duration:e.transitions.duration.standard,easing:e.transitions.easing.easeInOut})};

  & .${C.label} {
    width: ${_t.default};

    &.${C.labelHasCounter} {
      width: ${_t.counter};
    }
  }

  & .${C.hasGroup} {
    & .${C.label} {
      width: ${_t.group};

      &.${C.labelHasCounter} {
        width: ${_t.groupCounter};
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: inherit;
    padding: ${({theme:e,$hasHeader:t})=>e.spacing(t?0:2,0,0,0)};
  }
`,Cn=_.footer`
  display: flex;
  flex-shrink: 0;

  box-sizing: content-box;
  height: ${u};
  margin-top: auto;

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
  border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
  
  .${Re.root} {
    padding-left: ${({theme:e})=>e.microSpacing(9)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${oe};
  }
`})))()}var B;function Tn(){return(Tn=e((()=>{o(),B={root:i(`dashboard-layout-header`),mobileSidebarButton:i(`dashboard-layout-header__sidebar-button_mobile`),notificationList:i(`dashboard-layout-header__notification-list`),priorityFeatureMenuOrg:i(`dashboard-layout-header__priority-feature_menu-org`),priorityFeatureProfile:i(`dashboard-layout-header__priority-feature_profile`),mobileSidebarPriorityFeatureVisible:i(`dashboard-layout-header__sidebar-priority-feature_visible`),featureInSidebar:i(`dashboard-layout-header__feature-in-sidebar`),profile:i(`dashboard-layout-header__profile`),hasNotificationList:i(`dashboard-layout-header_has-notification-list`)}})))()}function En(){return(En=e((()=>{dt()})))()}var Dn;function On(){return(On=e((()=>{o(),Dn={root:i(`dashboard-layout-notification-list`),button:i(`dashboard-layout-notification-list__button`)}})))()}var kn,An;function jn(){return(jn=e((()=>{Ae(),He(),y(),kn=_(Me)`
  & .${je.badge} {
    cursor: pointer;
  }
`,An=_.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var V,Mn;function Nn(){return(Nn=e((()=>{ut(),se(),En(),mt(),On(),jn(),V=v(),Mn=({unreadNotifications:e,...t})=>{let[n,r,i]=pt();return(0,V.jsxs)(An,{className:Dn.root,children:[(0,V.jsx)(ne,{variant:`text`,color:`grey`,onClick:r,className:Dn.button,children:(0,V.jsx)(kn,{badgeContent:e?.length,color:`error`,variant:`standard`,children:(0,V.jsx)(lt,{})})}),(0,V.jsx)(ft,{isOpen:n,unreadNotifications:e,onClose:i,...t})]})};try{Mn.displayName=`DashboardLayoutNotificationList`,Mn.__docgenInfo={description:`Компонент для отображения уведомлений в хедере приложения`,displayName:`DashboardLayoutNotificationList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayoutNotificationList/DashboardLayoutNotificationList.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Заголовок списка уведомлений`,name:`title`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}},headerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в заголовке`,name:`headerContent`,required:!1,tags:{},type:{name:`ReactNode`}},errorMessage:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMessage`,required:!1,tags:{},type:{name:`string`}},notifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список уведомлений`,name:`notifications`,required:!0,tags:{},type:{name:`Notification[]`}},unreadNotifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список непрочитанных уведомлений`,name:`unreadNotifications`,required:!1,tags:{},type:{name:`Notification[]`}},initialListType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные`,name:`initialListType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},footerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в подвале`,name:`footerContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSettingsButtonVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается`,name:`isSettingsButtonVisible`,required:!1,tags:{},type:{name:`boolean`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},onSettingsButtonClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается`,name:`onSettingsButtonClick`,required:!1,tags:{},type:{name:`() => void`}},onTabChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки смены вкладки`,name:`onTabChange`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function Pn(){return(Pn=e((()=>{Nn(),On()})))()}var Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn;function Gn(){return(Gn=e((()=>{s(),l(),Pn(),se(),F(),pn(),st(),y(),z(),E(),Tn(),Fn=_(`header`,{shouldForwardProp:e=>![`$isFocusedMode`].includes(e)})`
  z-index: ${({theme:e})=>e.zIndex.appBar};

  display: flex;
  grid-column: 1 / -1;
  grid-row: 1;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${hn};
  margin-top: ${({$isFocusedMode:e})=>e?`-${hn}`:0};
  margin-bottom: ${({theme:e})=>e.spacing(4)};

  transition: ${({theme:e})=>e.transitions.create([`margin-top`],{duration:e.transitions.duration.complex})};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${gn};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-row: 2;
    justify-content: flex-start;

    height: ${R};
    margin-bottom: 0;
    padding: ${({theme:e})=>e.spacing(0,2,0,1)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    transition: unset;
  }
`,In=_.div`
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    display: none;
  }
  
  .${a.root} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
  
  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${_n.root}:not(:has(.${T.root}))
    & {
    display: none;
  }
`,Ln=_.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-shrink: 0;

    min-width: 0;
  }
`,Rn=_(Ln)`
  gap: ${({theme:e})=>e.spacing(6)};
  justify-content: flex-end;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-grow: 1;
    flex-shrink: unset;
    gap: ${({theme:e})=>e.spacing(2)};

    &.${B.priorityFeatureMenuOrg} {
      & .${P.organizationData} {
        display: none;
      }
      & .${P.button} {
        border-radius: ${({theme:e})=>e.shape.medium};
      }
    }
  }
`,zn=_.div`
  &:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Bn=_(`div`,{shouldForwardProp:e=>![`$isShow`].includes(e)})`
  display: contents;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: ${({$isShow:e})=>e?`block`:`none`};
  }
`,Vn=_(ne,{shouldForwardProp:e=>![`$isShow`].includes(e)})`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: ${({$isShow:e})=>e?`flex`:`none`};
  }
`,Hn=_.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: 0;
  }
`,Un=_.div`
  &&:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    justify-content: flex-end;

    min-width: 0;

    &.${B.priorityFeatureMenuOrg} {
      & .${P.button} {
        padding: ${({theme:e})=>e.spacing(2,0)};
      }
    }

    &.${B.featureInSidebar} {
      position: absolute;
      z-index: ${({theme:e})=>e.zIndex.appBar-1};
      top: calc(var(--alert-height, 0px) + ${R});
      left: 0;
      
      /* Необходимо для анимации компонента вместе с sidebar */
      transform: translateX(-100vw);

      display: flex;
      flex-direction: row;
      align-items: center;

      width: 100vw;

      background-color: ${({theme:e})=>e.palette.background.default};

      transition: ${({theme:e})=>e.transitions.create([`transform`],{duration:e.transitions.duration.standard})};

      &.${B.mobileSidebarPriorityFeatureVisible} {
        transform: translateX(0);
      }

      & .${P.button}, & .${w.button} {
        height: ${L};
        padding: ${({theme:e})=>e.spacing(3,4)};

        border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

        ${h} {
          &:hover {
            border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
          }
        }

        &:active {
          border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
        }
      }

      &.${B.hasNotificationList} {
        gap: ${({theme:e})=>e.spacing(4)};

        height: ${L};
        padding: ${({theme:e})=>e.spacing(2,3)};

        border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

        & .${P.button}, & .${w.button} {
          flex-grow: 1;

          height: unset;
          padding: unset;

          border-bottom: none;
        }
      }

      &.${B.priorityFeatureMenuOrg} {
        & .${P.button} {
          padding: ${({theme:e})=>e.spacing(2,0)};
        }

        & .${B.profile} {
          display: block;
          flex-grow: 1;
        }


        & .${w.button} {
          width: 100%;
          max-width: unset;

          border-radius: 0;
        }

        & .${w.avatar} {
          display: none;
        }

        & .${w.user} {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
        }
      }
    }
  }
`,Wn=_.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
    
    & .${Dn.root} {
      display: block;
    }
  }
`})))()}var Kn,qn;function Jn(){return(Jn=e((()=>{Kn=c(),S(),M(),pe(),qn=({profile:e,menuOrganization:t})=>{let{isFocusedMode:n,isLoading:r,hasMenuOrganizationRef:i,hasProfileRef:a,alertHeight:o,mobileHeaderPriorityFeature:s}=(0,Kn.useContext)(x),{collapsedIn:c,onToggleSidebar:l,isPinned:u}=(0,Kn.useContext)(j);(0,Kn.useEffect)(()=>{i.current=!!t,a.current=!!e},[t,e]);let{isMobile:d}=de(),f=!!(e?.menu||e?.menuList),p=!!e&&!d||f&&d&&s===`profile`;return{isShowExitButton:d&&!f&&!!e?.exitButton&&s===`profile`,isShowProfile:p,isMobile:d,isFocusedMode:n,mobileHeaderPriorityFeature:s,isLoading:r,collapsedIn:c,onToggleSidebar:l,alertHeight:o,isPinned:u,headerStyle:{"--alert-height":`${o}px`}}}})))()}function Yn(){return(Yn=e((()=>{Jn()})))()}var Xn,H,Zn,U;function Qn(){return(Qn=e((()=>{Xn=c(),ye(),Ze(),rt(),f(),at(),ot(),ce(),$e(),Tn(),Gn(),Yn(),H=v(),Zn=r(``,{variants:{feature:{menuOrg:B.priorityFeatureMenuOrg,profile:B.priorityFeatureProfile},isPinned:{true:B.mobileSidebarPriorityFeatureVisible},featureInSidebar:{true:B.featureInSidebar},hasNotificationList:{true:B.hasNotificationList}}}),U=(0,Xn.forwardRef)((e,t)=>{let{productSwitcher:n,product:r,profile:i,menuOrganization:a,notificationList:o,children:s}=e,{isShowExitButton:c,isShowProfile:l,isFocusedMode:u,isMobile:d,collapsedIn:f,onToggleSidebar:p,isLoading:ee,mobileHeaderPriorityFeature:m,headerStyle:h,isPinned:g}=qn(e),te=a?.();return(0,H.jsx)(Fn,{ref:t,$isFocusedMode:u,...Qe(!d&&u),className:B.root,style:h,children:(0,H.jsxs)(Hn,{children:[(0,H.jsx)(In,{className:B.mobileSidebarButton,children:(0,H.jsx)(re,{startIcon:f?(0,H.jsx)(ve,{}):(0,H.jsx)(Xe,{}),variant:`text`,onClick:()=>p(),title:`Переключить боковое меню`})}),(0,H.jsxs)(Ln,{children:[n&&(0,H.jsx)(zn,{children:(0,H.jsx)(n,{})}),(0,H.jsx)(it,{...r})]}),(0,H.jsxs)(Rn,{className:Zn({feature:m}),children:[s,o,te&&(0,H.jsxs)(Un,{className:Zn({feature:m,isPinned:g,featureInSidebar:m===`profile`,hasNotificationList:!!o}),children:[m===`profile`&&o&&(0,H.jsx)(Wn,{children:o}),te]}),i&&(0,H.jsxs)(Un,{className:Zn({feature:m,isPinned:g,featureInSidebar:m===`menuOrg`,hasNotificationList:!!o}),children:[m===`menuOrg`&&o&&(0,H.jsx)(Wn,{children:o}),(0,H.jsx)(Bn,{className:B.profile,$isShow:l,children:(0,H.jsx)(ct,{isLoading:ee,...i})})]}),(0,H.jsx)(Vn,{$isShow:c,onClick:i?.exitButton?.onClick,title:`Выход`,variant:`text`,children:(0,H.jsx)(nt,{})})]})]})})});try{U.displayName=`Header`,U.__docgenInfo={description:`Основной header приложения`,displayName:`Header`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/Header.tsx`,methods:[],props:{product:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`product`,required:!0,tags:{},type:{name:`ProductProps`}},productSwitcher:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`productSwitcher`,required:!1,tags:{},type:{name:`(props: { children?: ReactNode; }) => ReactElement<unknown, string | JSXElementConstructor<any>>`}},profile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`profile`,required:!1,tags:{},type:{name:`ProfileProps`}},menuOrganization:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`menuOrganization`,required:!1,tags:{},type:{name:`() => ReactElement<unknown, string | JSXElementConstructor<any>>`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},notificationList:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`notificationList`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function W(){return(W=e((()=>{Qn(),Tn()})))()}var G;function $n(){return($n=e((()=>{o(),G={main:i(`dashboard-layout-main`),alert:i(`dashboard-layout-main__alert`)}})))()}var er,tr,nr;function rr(){return(rr=e((()=>{Pe(),y(),er=_.main`
  overflow: hidden;
  display: flex;
  grid-column: 2;
  grid-row: 3;
  flex-direction: column;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`,tr=_.div`
  grid-column: 2;
  grid-row: 2;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-row: 1;

    background-color: ${({theme:e})=>e.palette.background.default};
  }
`,nr=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  &:empty {
    display: none;
  }

  & > *:last-child .${Ne.root} {
    margin-bottom: ${({theme:e})=>e.spacing(4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: ${({theme:e})=>e.spacing(0,4)};

    & > *:first-of-type .${Ne.root} {
      margin-top: ${({theme:e})=>e.spacing(3)};
    }

    & > *:last-child .${Ne.root} {
      margin-bottom: ${({theme:e})=>e.spacing(1)};
    }
  }
`})))()}var K,ir;function ar(){return(ar=e((()=>{K=c(),S(),ht(),ir=()=>{let{isFocusedMode:e,setAlertElement:t}=(0,K.useContext)(x),n=(0,K.useRef)(e),r=(0,K.useRef)(null),i=(0,K.useRef)(null);return(0,K.useEffect)(()=>(t?.(r.current??null),()=>t?.(null)),[t]),(0,K.useEffect)(()=>{(e||n.current&&!e)&&(i.current=document.querySelector(`.${gt.pageContent}`),i.current?.classList.add(gt.animation))},[e]),{onAnimationEnd:t=>{t.animationName===`white-flash`&&(i.current?.classList.remove(gt.animation),n.current=e)},alertContainerRef:r}}})))()}function or(){return(or=e((()=>{ar()})))()}var sr,q,cr;function lr(){return(lr=e((()=>{sr=c(),$n(),rr(),or(),q=v(),cr=(0,sr.forwardRef)(({children:e,alert:t},n)=>{let{onAnimationEnd:r,alertContainerRef:i}=ir();return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tr,{ref:i,className:G.alert,children:t&&(0,q.jsx)(nr,{children:t})}),(0,q.jsx)(er,{className:G.main,ref:n,onAnimationEnd:r,children:e})]})});try{cr.displayName=`Main`,cr.__docgenInfo={description:`Основной контент приложения`,displayName:`Main`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},alert:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,name:`TypeLiteral`}],description:`Alert приложения`,name:`alert`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ur(){return(ur=e((()=>{lr(),$n()})))()}var dr,fr;function pr(){return(pr=e((()=>{dr=c(),M(),zt(),pe(),Kt(),fr=()=>{let{isMobile:e}=de(),{collapsedIn:t,onToggleSidebar:n}=(0,dr.useContext)(j),r=()=>{n(!1)};(0,dr.useEffect)(()=>{if(!e||!t)return;let n=document.querySelector(`.${Bt.root}`);if(!n)return;let i=n.querySelectorAll(`.${C.root}:not(.${C.hasGroup})`);return i.forEach(e=>{e.addEventListener(`click`,r)}),()=>{i.forEach(e=>{e.removeEventListener(`click`,r)})}},[e,t])}})))()}function mr(){return(mr=e((()=>{pr()})))()}function hr(){return(hr=e((()=>{mr()})))()}var J,gr;function _r(){return(_r=e((()=>{J=c(),S(),M(),ae(),pe(),m(),W(),ur(),E(),hr(),gr=e=>{let{className:n,menu:r,header:i,isLoading:a}=e,{onToggleSidebar:o,isPinned:s,onTogglePin:c,collapsedIn:l,setIsPopupOpen:u}=(0,J.useContext)(j),{alertHeight:d,isLoading:f,hasMenuOrganizationRef:p,hasProfileRef:ee,mobileHeaderPriorityFeature:m}=(0,J.useContext)(x),{isMobile:h}=de();fr();let g=(0,J.useRef)(null),ne=te(),_=()=>{h||(g.current&&clearTimeout(g.current),g.current=window.setTimeout(()=>{o(!0)},ne.transitions.duration.shorter))},re=()=>{h||(g.current&&=(clearTimeout(g.current),null),o(!1),u(!1))};(0,J.useEffect)(()=>()=>{g.current&&clearTimeout(g.current)},[]),(0,J.useEffect)(()=>{if(h||s||!l&&!s)return;let e=()=>o(!1),t=document.querySelector(`.${G.main}`),n=document.querySelector(`.${G.alert}`),r=document.querySelector(`.${B.root}`);return t&&t.addEventListener(`mouseenter`,e),n&&n.addEventListener(`mouseenter`,e),r&&r.addEventListener(`mouseenter`,e),()=>{t&&t.removeEventListener(`mouseenter`,e),n&&n.removeEventListener(`mouseenter`,e),r&&r.removeEventListener(`mouseenter`,e)}},[l,s]);let ie=t(n,T.root);return{isPinned:s,isMobile:h,collapsedIn:l,onTogglePin:c,onMouseEnter:_,onMouseLeave:re,alertHeight:d,menu:r,header:i,isLoading:a||f,classnames:ie,hasMenuOrganization:p.current&&m===`profile`,hasProfile:ee.current&&m===`menuOrg`}}})))()}function vr(){return(vr=e((()=>{_r()})))()}var yr,Y,br,xr;function Sr(){return(Sr=e((()=>{yr=c(),Rt(),zt(),Ve(),ce(),$e(),E(),Kt(),wn(),vr(),Y=v(),br=r(``,{variants:{hasProfile:{true:T.hasProfile},hasMenuOrganization:{true:T.hasMenuOrganization}}}),xr=(0,yr.forwardRef)((e,t)=>{let{isPinned:n,isMobile:r,collapsedIn:i,onTogglePin:a,onMouseEnter:o,onMouseLeave:s,alertHeight:c,classnames:l,menu:u,header:d,isLoading:f,hasMenuOrganization:p,hasProfile:ee}=gr(e);return f?(0,Y.jsx)(It,{}):(0,Y.jsx)(vn,{$isPinned:n,$alertHeight:c,className:br({hasProfile:ee,hasMenuOrganization:p}),children:(0,Y.jsx)(bn,{ref:t,$isPinned:n,$collapsedIn:i,className:l,onMouseEnter:o,onMouseLeave:s,...Qe(r&&!n),children:(0,Y.jsxs)(yn,{variant:`outlined`,children:[(0,Y.jsxs)(Sn,{$collapsedIn:i,$isPinned:n,$hasHeader:!!d,children:[d&&(0,Y.jsx)(xn,{children:d}),(0,Y.jsx)(Wt,{menu:(0,Y.jsx)(Ye,{collapsedIn:i,items:u.items})})]}),(0,Y.jsx)(Cn,{children:(0,Y.jsx)(ze,{isPinned:n,collapsedIn:i,onClick:a})})]})})})});try{xr.displayName=`DashboardSidebar`,xr.__docgenInfo={description:`Основной sidebar приложения`,displayName:`DashboardSidebar`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/DashboardSidebar.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Пропс для передачи контента в заголовок сайдбара`,name:`header`,required:!1,tags:{example:`<Sidebar header={<SidebarButton />>} >`},type:{name:`ReactNode`}},menu:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Описание меню`,name:`menu`,required:!0,tags:{},type:{name:`{ items: [key: string, value: { icon: ReactElement<unknown, string | JSXElementConstructor<any>>; text: ReactNode; counter?: CounterProps; active?: boolean; items?: [key: ...][]; component?: ElementType; } & Omit<...> & { ...; }][]; }`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Cr(){return(Cr=e((()=>{Sr(),E()})))()}var X;function wr(){return(wr=e((()=>{o(),X={root:i(`dashboard-layout__container`),compact:i(`dashboard-layout__container_view-mode_compact`),wide:i(`dashboard-layout__container_view-mode_wide`),focusedMode:i(`dashboard-layout__container_focused-mode`)}})))()}var Tr;function Er(){return(Er=e((()=>{y(),Cr(),wr(),Tr=_.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  flex-grow: 1;

  height: 100vh;
  padding: ${({theme:e})=>e.spacing(0,4,4)};

  transition: ${({theme:e})=>e.transitions.create([`max-width`],{duration:e.transitions.duration.complex})};

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${T.root}) {
    column-gap: ${({theme:e})=>e.spacing(4)};

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      column-gap: 0;
    }
  }

  /* Причина игнора: Прогрессивное улучшение */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  /* stylelint-enable plugin/no-unsupported-browser-features */

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    column-gap: 0;

    min-width: unset;
    max-width: unset;
    padding: 0;
  }

  &.${X.compact} {
    max-width: 1572px;
  }

  &.${X.wide} {
    max-width: 1920px;
  }

  &.${X.focusedMode} {
    max-width: 100%;
  }
`})))()}var Dr,Or,kr,Z;function Ar(){return(Ar=e((()=>{Dr=c(),S(),ce(),wr(),Er(),Or=v(),kr=r(X.root,{variants:{desktopViewMode:{compact:X.compact,wide:X.wide},isFocusedMode:{true:X.focusedMode}}}),Z=({children:e})=>{let{isFocusedMode:t,desktopViewMode:n}=(0,Dr.useContext)(x);return(0,Or.jsx)(Tr,{className:kr({desktopViewMode:n,isFocusedMode:t}),children:e})};try{Z.displayName=`Container`,Z.__docgenInfo={description:``,displayName:`Container`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Container/Container.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Container/Container.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function jr(){return(jr=e((()=>{Ar()})))()}var Mr,Nr;function Pr(){return(Pr=e((()=>{y(),z(),Mr=_(`div`)`
  display: flex;
  justify-content: center;

  width: 100%;

  background-color: ${({theme:e})=>e.palette.background.body};
`,Nr=_.div`
  position: absolute;

  /* Header находится над декоративным элементом */
  z-index: 0;
  left: 0;

  width: 100%;
  height: ${({$isFocusedMode:e})=>e?0:hn};

  background-color: ${({theme:e})=>e.palette.background.default};
  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`height`],{duration:e.transitions.duration.complex})};

 ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${({$isFocusedMode:e})=>e?0:gn}
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var Fr,Q,Ir;function Lr(){return(Lr=e((()=>{Fr=c(),S(),M(),jr(),z(),Pr(),Q=v(),Ir=({children:e})=>{let{isFocusedMode:t}=(0,Fr.useContext)(x);return(0,Q.jsx)(At,{isFocusedMode:t,children:(0,Q.jsxs)(Mr,{className:_n.root,children:[(0,Q.jsx)(Nr,{role:`presentation`,$isFocusedMode:t}),(0,Q.jsx)(Z,{children:e})]})})};try{Ir.displayName=`DashboardWrapper`,Ir.__docgenInfo={description:``,displayName:`DashboardWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardWrapper/DashboardWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardWrapper/DashboardWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Rr(){return(Rr=e((()=>{Lr()})))()}var zr,$;function Br(){return(Br=e((()=>{S(),Cr(),Rr(),W(),ur(),zr=v(),$=({children:e,isFocusedMode:t=!1,isLoading:n=!1,mobileHeaderPriorityFeature:r=`menuOrg`,desktopViewMode:i=`compact`})=>(0,zr.jsx)(Ke,{isFocusedMode:t,isLoading:n,desktopViewMode:i,mobileHeaderPriorityFeature:r,children:(0,zr.jsx)(Ir,{children:e})}),$.Header=U,$.Sidebar=xr,$.Main=cr;try{$.displayName=`DashboardLayout`,$.__docgenInfo={description:`Общий Layout приложения`,displayName:`DashboardLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardLayout.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isFocusedMode:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Флаг режима фокусировки: убирает header, сворачивает sidebar, растягивает контент на всю ширину.
Пример использования: просмотр документа`,name:`isFocusedMode`,required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается состояние загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},mobileHeaderPriorityFeature:{defaultValue:{value:`menuOrg`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Элемент, отображаемый в мобильном хедере.
Второстепенный будет помещен в sidebar.`,name:`mobileHeaderPriorityFeature`,required:!1,tags:{},type:{name:`enum`,raw:`"profile" | "menuOrg"`,value:[{value:`"profile"`},{value:`"menuOrg"`}]}},desktopViewMode:{defaultValue:{value:`compact`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Compact - ширина layout ограничена 1572px. Необходимо для удобного чтения контента, без лишнего растягивания
Wide - ширина layout ограничена 1920px. Применяйте, когда в вашем приложении отображается много табличных данных с большим количеством колонок. Пример - админки`,name:`desktopViewMode`,required:!1,tags:{},type:{name:`enum`,raw:`"wide" | "compact"`,value:[{value:`"wide"`},{value:`"compact"`}]}}},tags:{}}}catch{}})))()}function Vr(){return(Vr=e((()=>{Br(),W(),ur(),z()})))()}export{tn as A,It as B,sn as C,$t as D,en as E,Jt as F,M as H,F as I,P as L,qt as M,Yt as N,Qt as O,Xt as P,zt as R,fn as S,Zt as T,j as U,Lt as V,jt as W,En as _,Mr as a,mn as b,Z as c,wr as d,W as f,Nn as g,Mn as h,Nr as i,rn as j,nn as k,Ar as l,Qn as m,$ as n,Pr as o,U as p,Br as r,jr as s,Vr as t,X as u,_n as v,ln as w,dn as x,z as y,Rt as z};