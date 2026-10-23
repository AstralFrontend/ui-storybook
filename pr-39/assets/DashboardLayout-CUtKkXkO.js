import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,C as n,Cn as r,Dn as i,Ln as a,On as o,Rn as s,Xt as c,an as l,bn as u,cn as d,ct as f,dt as p,ei as m,en as h,ft as g,ht as ee,it as _,ji as v,ln as te,lt as ne,mt as re,on as ie,rt as ae,wn as oe,y as se,ya as y,yn as b,za as x}from"./preview-BJz-w2gl.js";import{i as ce,n as le,r as ue,t as de}from"./useViewportType-DANAMGEq.js";import{t as S}from"./Skeleton-Be5wDgmx.js";import{t as fe}from"./Tooltip-C3D9PMdR.js";import{a as pe,i as me,r as he}from"./BottomDrawer-CNdzL1G1.js";import{n as ge,t as _e}from"./CrossOutlineMd-6o4X7YO1.js";import{t as ve}from"./Chevron-Clp22gVX.js";import{t as ye}from"./Chevron-BhzueZ7S.js";import{t as be}from"./BottomDrawer-D-tDoOw2.js";import{r as xe,t as Se}from"./personalDataSecurity-DDBficfQ.js";import{t as Ce}from"./Tooltip-ylZ_Cu1K.js";import{n as we}from"./useFirstMountState-CxVWiLn0.js";import{t as Te}from"./useFirstMountState-CenkAX-3.js";import{t as Ee}from"./OverflowTypography-CCranZ1C.js";import{t as De}from"./OverflowTypography-CYeL6BVe.js";import{i as Oe,r as ke,t as Ae}from"./Badge-DgIqvopd.js";import{r as je}from"./Alert-CYqQy3Mn.js";import{t as Me}from"./Alert-Dfft9fdC.js";import{t as Ne}from"./Popover-DxWuj5uJ.js";import{t as Pe}from"./Popover-D6QsvvhE.js";import{n as Fe}from"./useLocalStorage-BzUYjoI-.js";import{a as Ie,n as Le,o as Re,t as ze}from"./PinButton-BtO318P9.js";import{t as Be}from"./Badge-9GhaFjdD.js";import{t as Ve}from"./Skeleton-8bs1H2t0.js";import{a as He,t as Ue}from"./LoadingPlaceholder-DqSKd7rJ.js";import{i as We,n as Ge,t as C}from"./DashboardContext-CnMSO6GG.js";import{a as w,n as Ke,r as qe,t as Je}from"./NavMenu-D6D83y9c.js";import{n as Ye,t as Xe}from"./MenuOnOutlineMd-rziB7-ZF.js";import{n as Ze,t as Qe}from"./getInertProps-B9VpMg4-.js";import{t as $e}from"./Paper-CPXsa2YL.js";import{t as et}from"./Paper-C6d847La.js";import{n as tt,t as nt}from"./QuitOutlineMd-CFdXDd1V.js";import{t as rt}from"./Product-U9xrmutL.js";import{n as it,t as at}from"./Profile-Bf5goVhz.js";import{o as ot,s as T,t as st}from"./Profile-3RR6exnM.js";import{n as ct,t as lt}from"./BellOutlineMd-CnbaxZQt.js";import{n as ut,t as dt}from"./NotificationList-h_DPDJCE.js";import{r as ft,t as pt}from"./useToggle-CWoxK_ep.js";import{n as mt,r as ht}from"./constants-BGeZA9ud.js";var E,D;function O(){return(O=e((()=>{o(),E={root:i(`dashboard-layout-sidebar`),hasProfile:i(`dashboard-layout-sidebar_has-profile`),hasMenuOrganization:i(`dashboard-layout-sidebar_has-menu-organization`)},D={default:`170px`,counter:`130px`,group:`140px`,groupCounter:`100px`}})))()}var gt,_t,k,A;function vt(){return(vt=e((()=>{Ve(),b(),gt=v(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
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
`,_t=v(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  padding: ${({theme:e,$isPinned:t})=>t?e.microSpacing(12,3):e.microSpacing(12,5)};
`,k=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
`,A=v(S,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  display: ${({$isPinned:e})=>e?`unset`:`none`};
`})))()}var yt;function bt(){return(bt=e((()=>{yt=`@astral/ui::Sidebar::isPinned`})))()}var j,xt,St,Ct;function wt(){return(wt=e((()=>{ue(),j=x(),re(),Te(),Re(),de(),xt=()=>{let[e,t]=(0,j.useState)(!1);return{collapsedIn:e,onToggleSidebar:()=>{t(e=>!e)},isPinned:e,onTogglePin:()=>void 0}},St=(e,t)=>{let n=ee(),r=we(),i=ce(n.breakpoints.up(`xl`)),a=()=>typeof window>`u`||i,[o=a(),s]=Fe(e,a()),[c,l]=(0,j.useState)(!0),[u,d]=(0,j.useState)(!0);return(0,j.useEffect)(()=>{l(o),d(o)},[o]),(0,j.useEffect)(()=>{if(t){l(!1),d(!1);return}l(o),d(o)},[t]),(0,j.useEffect)(()=>{r||c&&d(!0)},[c]),{collapsedIn:u,onToggleSidebar:(e=!1)=>{c||d(e)},isPinned:c,onTogglePin:()=>{t?l(!c):s(!o)}}},Ct=(e,t)=>{let{isMobile:n}=le(),r=xt(),i=St(e,t);return n?r:i}})))()}function Tt(){return(Tt=e((()=>{wt()})))()}function Et(){return(Et=e((()=>{Tt()})))()}var M,Dt,N,Ot;function kt(){return(kt=e((()=>{M=x(),bt(),Et(),Dt=y(),N=(0,M.createContext)({collapsedIn:!1,onToggleSidebar:()=>void 0,isPinned:!0,onTogglePin:()=>void 0,isPopupOpen:!1,setIsPopupOpen:()=>void 0,popoverAnchorRef:(0,M.createRef)()}),Ot=({children:e,localStorageKey:t=yt,isFocusedMode:n=!1})=>{let r=Ct(t,n),[i,a]=(0,M.useState)(!1),o=(0,M.useRef)(null),s={...r,isPopupOpen:i,setIsPopupOpen:a,popoverAnchorRef:o};return(0,Dt.jsx)(N.Provider,{value:s,children:e})};try{N.displayName=`DashboardSidebarContext`,N.__docgenInfo={description:``,displayName:`DashboardSidebarContext`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,methods:[],props:{},tags:{}}}catch{}try{Ot.displayName=`DashboardSidebarProvider`,Ot.__docgenInfo={description:`Провайдер предназначен для проброса состояния боковой панел, а так же управления этим состоянием.
В данный провайдер обернут компонент DashboardLayout.`,displayName:`DashboardSidebarProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},localStorageKey:{defaultValue:{value:`@astral/ui::Sidebar::isPinned`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`localStorageKey`,required:!1,tags:{},type:{name:`string`}},isFocusedMode:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardSidebarProvider/DashboardSidebarProvider.tsx`,name:`TypeLiteral`}],description:``,name:`isFocusedMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function P(){return(P=e((()=>{bt(),kt()})))()}var At,jt;function Mt(){return(Mt=e((()=>{At=x(),P(),Re(),jt=()=>{let[e=!0]=Fe(yt,!0),[t,n]=(0,At.useState)(!0);return(0,At.useEffect)(()=>{n(e)},[]),{isPinned:t}}})))()}function Nt(){return(Nt=e((()=>{Mt()})))()}var F,Pt;function Ft(){return(Ft=e((()=>{O(),Ve(),m(),vt(),Nt(),F=y(),Pt=()=>{let{isPinned:e}=jt();return(0,F.jsxs)(gt,{$isPinned:e,className:t(E.root),children:[(0,F.jsx)(S,{shapeSize:e?`medium`:`small`,height:40,variant:`rounded`}),(0,F.jsxs)(_t,{$isPinned:e,children:[(0,F.jsxs)(k,{children:[(0,F.jsx)(S,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,F.jsx)(A,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),(0,F.jsxs)(k,{children:[(0,F.jsx)(S,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,F.jsx)(A,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),(0,F.jsxs)(k,{children:[(0,F.jsx)(S,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,F.jsx)(A,{height:14,width:174,variant:`rounded`,$isPinned:e})]}),e&&(0,F.jsxs)(k,{children:[(0,F.jsx)(S,{height:20,width:20,variant:`rounded`,shapeSize:`small`}),(0,F.jsx)(A,{height:14,width:174,variant:`rounded`,$isPinned:e})]})]})]})}})))()}function It(){return(It=e((()=>{Ft()})))()}function Lt(){return(Lt=e((()=>{Ke(),qe()})))()}var Rt;function zt(){return(zt=e((()=>{o(),Rt={root:i(`dashboard-layout-sidebar__navigation`)}})))()}var Bt,Vt,Ht;function Ut(){return(Ut=e((()=>{Bt=x(),zt(),Vt=y(),Ht=(0,Bt.forwardRef)((e,t)=>{let{menu:n}=e;return(0,Vt.jsx)(`nav`,{ref:t,className:Rt.root,children:n})});try{Ht.displayName=`SidebarNav`,Ht.__docgenInfo={description:``,displayName:`SidebarNav`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/SidebarNav/SidebarNav.tsx`,methods:[],props:{menu:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/SidebarNav/SidebarNav.tsx`,name:`TypeLiteral`}],description:``,name:`menu`,required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}})))()}function Wt(){return(Wt=e((()=>{Ut(),zt()})))()}var Gt,Kt,qt,Jt,I;function L(){return(L=e((()=>{o(),Gt=`Перейти к данным организации`,Kt=`Выбор организации`,qt=()=>`Нет выбранной организации`,Jt=`108px`,I={root:i(`menu-organization`),errorPlaceholder:i(`menu-organization__error-placeholder`),button:i(`menu-organization__button`),organizationData:i(`menu-organization__organization-data`)}})))()}var Yt,Xt,Zt,Qt,$t,en;function tn(){return(tn=e((()=>{be(),pe(),f(),Pe(),Ue(),se(),b(),p(),L(),Yt=v.div`
  padding: ${({theme:e})=>e.spacing(2)};

  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }
`,Xt=v.div`
  max-width: 300px;
  padding: ${({theme:e})=>e.spacing(2,3)};

  border-bottom: ${({theme:e})=>`1px solid ${e.palette.components.border.default}`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    max-width: unset;
    padding: ${({theme:e})=>e.spacing(3,4)};
  }
`,Zt=v.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: ${({$isLoading:e})=>e?`content-box`:`inherit`};
  width: 300px;
  min-height: ${({$isLoading:e})=>e?Jt:`64px`};
  max-height: 328px;

  & .${I.errorPlaceholder} {
    display: flex;
    gap: ${({theme:e})=>e.spacing(1)};

    height: ${Jt};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    height: 100%;
    max-height: unset;

    & .${He.root} {
      justify-content: unset;
    }

    & .${I.errorPlaceholder} {
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
`,Qt=v(ne)`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  padding-top: ${({theme:e})=>e.spacing(1)};
`,$t=v(g)`
  color: ${({theme:e})=>e.palette.grey[600]};
`,en=v(Ne)`

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${me.content} {
      display: flex;
      flex-direction: column;

      height: calc(100vh - ${he});

      /* Причина игнора: прогрессивное улучшение */
      /* stylelint-disable plugin/no-unsupported-browser-features */
      @supports (height: 100dvh) {
        height: calc(100dvh - ${he});
      }
      /* stylelint-enable plugin/no-unsupported-browser-features */
    }
  }

`})))()}var nn,rn,an,on;function sn(){return(sn=e((()=>{d(),ye(),c(),u(),p(),nn=v(te)`
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
`,rn=v(ve)`
  width: 24px;
  height: 24px;
`,an=v.div`
  display: flex;
  flex-direction: column;

  /* Позволяет элементу сжиматься до ширины контейнера */
  min-width: 0;
  max-width: 260px;
`,on=v(g,{shouldForwardProp:e=>![`$isDisabled`].includes(e)})`
  color: ${({$isDisabled:e})=>e&&`inherit`};
`})))()}var cn,R,ln;function un(){return(un=e((()=>{cn=x(),De(),Se(),Ce(),L(),tn(),sn(),R=y(),ln=(0,cn.forwardRef)(({onClick:e,isOpen:t,currentOrganization:n,isDisabled:r,disabledReason:i,isHidePersonalData:a,renderPreview:o},s)=>{let{name:c,inn:l,kpp:u}=n,d=xe({isEnabled:a}),f=()=>(0,R.jsx)(nn,{ref:s,variant:`text`,disabled:r,onClick:e,className:I.button,endIcon:(0,R.jsx)(rn,{isActive:t,width:24,height:24}),children:o?o(n,{className:d}):(0,R.jsxs)(an,{className:d,children:[(0,R.jsx)(Ee,{variant:`h6`,component:`div`,children:c}),(0,R.jsxs)(Qt,{className:I.organizationData,children:[(0,R.jsxs)(on,{$isDisabled:r,variant:`caption`,color:`textSecondary`,children:[`ИНН `,l]}),u&&(0,R.jsxs)(on,{$isDisabled:r,variant:`caption`,color:`textSecondary`,children:[`КПП `,u]})]})]})});return r&&i?(0,R.jsx)(fe,{title:i,withoutContainer:!1,placement:`bottom`,children:f()}):f()});try{ln.displayName=`OrganizationButton`,ln.__docgenInfo={description:``,displayName:`OrganizationButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!0,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},currentOrganization:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`currentOrganization`,required:!0,tags:{},type:{name:`Organization`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:``,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},renderPreview:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MenuOrganization/OrganizationButton/OrganizationButton.tsx`,name:`TypeLiteral`}],description:`Render-props, позволяет кастомизировать содержимое кнопки`,name:`renderPreview`,required:!1,tags:{},type:{name:`(organization: Organization & Record<string, unknown>, params: { className?: string; }) => ReactNode`}}},tags:{}}}catch{}})))()}var z;function dn(){return(dn=e((()=>{z=`68px`})))()}function fn(){return(fn=e((()=>{un(),dn()})))()}var pn,mn,B,hn;function V(){return(V=e((()=>{o(),pn=`60px`,mn=`56px`,B=`48px`,hn={root:i(`dashboard-layout`)}})))()}var gn,_n,vn,yn,bn,xn;function Sn(){return(Sn=e((()=>{c(),L(),fn(),qe(),et(),ze(),b(),V(),O(),gn=v(`div`,{shouldForwardProp:e=>![`$isPinned`,`$alertHeight`].includes(e)})`
  position: relative;

  grid-column: 1;
  grid-row: 2 / -1;

  width: ${({$isPinned:e})=>e?`242px`:`58px`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: absolute;
    z-index: ${({theme:e})=>e.zIndex.appBar-1};
    top: ${({$alertHeight:e})=>`calc(${e}px + ${B}) `};
    bottom: 0;
    transform: ${({$isPinned:e})=>e?`translateX(0px)`:`translateX(-100vw)`};

    overflow: hidden auto;

    width: 100vw;
    min-width: 100vw;

    transition: ${({theme:e})=>e.transitions.create([`transform`],{duration:e.transitions.duration.standard})};

    &.${E.hasMenuOrganization}, &.${E.hasProfile} {
      top: ${({$alertHeight:e})=>`calc(${e}px + ${B} + ${z}) `};
    }
  }
`,_n=v($e)`
  display: flex;
  flex-direction: column;

  height: 100%;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border: unset;
    border-radius: 0;
  }
`,vn=v(`aside`,{shouldForwardProp:e=>![`$isPinned`,`$collapsedIn`].includes(e)})`
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
`,yn=v.header`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    /* Причина игнора: Не критично для отображения */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    &:has(.${I.button}) {
      padding: 0;
    }

    & .${I.button} {
      height: ${z};
      padding: ${({theme:e})=>e.spacing(3,4)};
    }
  }
`,bn=v.div`
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({theme:e})=>e.spacing(4)};

  width: ${({$collapsedIn:e,$isPinned:t})=>t||!t&&e?`240px`:`56px`};
  padding: ${({theme:e})=>e.spacing(4,2,2)};

  transition: ${({theme:e})=>e.transitions.create([`width`],{duration:e.transitions.duration.standard,easing:e.transitions.easing.easeInOut})};

  & .${w.label} {
    width: ${D.default};

    &.${w.labelHasCounter} {
      width: ${D.counter};
    }
  }

  & .${w.hasGroup} {
    & .${w.label} {
      width: ${D.group};

      &.${w.labelHasCounter} {
        width: ${D.groupCounter};
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: inherit;
    padding: ${({theme:e,$hasHeader:t})=>e.spacing(t?0:2,0,0,0)};
  }
`,xn=v.footer`
  display: flex;
  flex-shrink: 0;

  box-sizing: content-box;
  height: ${l};
  margin-top: auto;

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
  border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
  
  .${Ie.root} {
    padding-left: ${({theme:e})=>e.microSpacing(9)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${ie};
  }
`})))()}var H;function Cn(){return(Cn=e((()=>{o(),H={root:i(`dashboard-layout-header`),mobileSidebarButton:i(`dashboard-layout-header__sidebar-button_mobile`),notificationList:i(`dashboard-layout-header__notification-list`),priorityFeatureMenuOrg:i(`dashboard-layout-header__priority-feature_menu-org`),priorityFeatureProfile:i(`dashboard-layout-header__priority-feature_profile`),mobileSidebarPriorityFeatureVisible:i(`dashboard-layout-header__sidebar-priority-feature_visible`),featureInSidebar:i(`dashboard-layout-header__feature-in-sidebar`),profile:i(`dashboard-layout-header__profile`),hasNotificationList:i(`dashboard-layout-header_has-notification-list`)}})))()}function wn(){return(wn=e((()=>{ut()})))()}var Tn;function En(){return(En=e((()=>{o(),Tn={root:i(`dashboard-layout-notification-list`),button:i(`dashboard-layout-notification-list__button`)}})))()}var Dn,On;function kn(){return(kn=e((()=>{Oe(),Be(),b(),Dn=v(Ae)`
  & .${ke.badge} {
    cursor: pointer;
  }
`,On=v.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var U,An;function jn(){return(jn=e((()=>{lt(),ae(),wn(),pt(),En(),kn(),U=y(),An=({unreadNotifications:e,...t})=>{let[n,r,i]=ft();return(0,U.jsxs)(On,{className:Tn.root,children:[(0,U.jsx)(_,{variant:`text`,color:`grey`,onClick:r,className:Tn.button,children:(0,U.jsx)(Dn,{badgeContent:e?.length,color:`error`,variant:`standard`,children:(0,U.jsx)(ct,{})})}),(0,U.jsx)(dt,{isOpen:n,unreadNotifications:e,onClose:i,...t})]})};try{An.displayName=`DashboardLayoutNotificationList`,An.__docgenInfo={description:`Компонент для отображения уведомлений в хедере приложения`,displayName:`DashboardLayoutNotificationList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayoutNotificationList/DashboardLayoutNotificationList.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Заголовок списка уведомлений`,name:`title`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}},headerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в заголовке`,name:`headerContent`,required:!1,tags:{},type:{name:`ReactNode`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},errorMessage:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMessage`,required:!1,tags:{},type:{name:`string`}},notifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список уведомлений`,name:`notifications`,required:!0,tags:{},type:{name:`Notification[]`}},unreadNotifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список непрочитанных уведомлений`,name:`unreadNotifications`,required:!1,tags:{},type:{name:`Notification[]`}},initialListType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные`,name:`initialListType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},footerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в подвале`,name:`footerContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSettingsButtonVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается`,name:`isSettingsButtonVisible`,required:!1,tags:{},type:{name:`boolean`}},onSettingsButtonClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается`,name:`onSettingsButtonClick`,required:!1,tags:{},type:{name:`() => void`}},onTabChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки смены вкладки`,name:`onTabChange`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function Mn(){return(Mn=e((()=>{jn(),En()})))()}var Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn;function Un(){return(Un=e((()=>{s(),c(),Mn(),ae(),L(),dn(),ot(),b(),V(),O(),Cn(),Nn=v(`header`,{shouldForwardProp:e=>![`$isFocusedMode`].includes(e)})`
  z-index: ${({theme:e})=>e.zIndex.appBar};

  display: flex;
  grid-column: 1 / -1;
  grid-row: 1;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${pn};
  margin-top: ${({$isFocusedMode:e})=>e?`-${pn}`:0};
  margin-bottom: ${({theme:e})=>e.spacing(4)};

  transition: ${({theme:e})=>e.transitions.create([`margin-top`],{duration:e.transitions.duration.complex})};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${mn};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-row: 2;
    justify-content: flex-start;

    height: ${B};
    margin-bottom: 0;
    padding: ${({theme:e})=>e.spacing(0,2,0,1)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    transition: unset;
  }
`,Pn=v.div`
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    display: none;
  }
  
  .${a.root} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
  
  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${hn.root}:not(:has(.${E.root}))
    & {
    display: none;
  }
`,Fn=v.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-shrink: 0;

    min-width: 0;
  }
`,In=v(Fn)`
  gap: ${({theme:e})=>e.spacing(6)};
  justify-content: flex-end;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-grow: 1;
    flex-shrink: unset;
    gap: ${({theme:e})=>e.spacing(2)};

    &.${H.priorityFeatureMenuOrg} {
      & .${I.organizationData} {
        display: none;
      }
      & .${I.button} {
        border-radius: ${({theme:e})=>e.shape.medium};
      }
    }
  }
`,Ln=v.div`
  &:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Rn=v(`div`,{shouldForwardProp:e=>![`$isShow`].includes(e)})`
  display: contents;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: ${({$isShow:e})=>e?`block`:`none`};
  }
`,zn=v(_,{shouldForwardProp:e=>![`$isShow`].includes(e)})`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: ${({$isShow:e})=>e?`flex`:`none`};
  }
`,Bn=v.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: 0;
  }
`,Vn=v.div`
  &&:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    justify-content: flex-end;

    min-width: 0;

    &.${H.priorityFeatureMenuOrg} {
      & .${I.button} {
        padding: ${({theme:e})=>e.spacing(2,0)};
      }
    }

    &.${H.featureInSidebar} {
      position: absolute;
      z-index: ${({theme:e})=>e.zIndex.appBar-1};
      top: calc(var(--alert-height, 0px) + ${B});
      left: 0;
      
      /* Необходимо для анимации компонента вместе с sidebar */
      transform: translateX(-100vw);

      display: flex;
      flex-direction: row;
      align-items: center;

      width: 100vw;

      background-color: ${({theme:e})=>e.palette.background.default};

      transition: ${({theme:e})=>e.transitions.create([`transform`],{duration:e.transitions.duration.standard})};

      &.${H.mobileSidebarPriorityFeatureVisible} {
        transform: translateX(0);
      }

      & .${I.button}, & .${T.button} {
        height: ${z};
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

      &.${H.hasNotificationList} {
        gap: ${({theme:e})=>e.spacing(4)};

        height: ${z};
        padding: ${({theme:e})=>e.spacing(2,3)};

        border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

        & .${I.button}, & .${T.button} {
          flex-grow: 1;

          height: unset;
          padding: unset;

          border-bottom: none;
        }
      }

      &.${H.priorityFeatureMenuOrg} {
        & .${I.button} {
          padding: ${({theme:e})=>e.spacing(2,0)};
        }

        & .${H.profile} {
          display: block;
          flex-grow: 1;
        }


        & .${T.button} {
          width: 100%;
          max-width: unset;

          border-radius: 0;
        }

        & .${T.avatar} {
          display: none;
        }

        & .${T.user} {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
        }
      }
    }
  }
`,Hn=v.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
    
    & .${Tn.root} {
      display: block;
    }
  }
`})))()}var Wn,Gn;function Kn(){return(Kn=e((()=>{Wn=x(),C(),P(),de(),Gn=({profile:e,menuOrganization:t})=>{let{isFocusedMode:n,isLoading:r,hasMenuOrganizationRef:i,hasProfileRef:a,alertHeight:o,mobileHeaderPriorityFeature:s}=(0,Wn.useContext)(We),{collapsedIn:c,onToggleSidebar:l,isPinned:u}=(0,Wn.useContext)(N);(0,Wn.useEffect)(()=>{i.current=!!t,a.current=!!e},[t,e]);let{isMobile:d}=le(),f=!!(e?.menu||e?.menuList),p=!!e&&!d||f&&d&&s===`profile`;return{isShowExitButton:d&&!f&&!!e?.exitButton&&s===`profile`,isShowProfile:p,isMobile:d,isFocusedMode:n,mobileHeaderPriorityFeature:s,isLoading:r,collapsedIn:c,onToggleSidebar:l,alertHeight:o,isPinned:u,headerStyle:{"--alert-height":`${o}px`}}}})))()}function qn(){return(qn=e((()=>{Kn()})))()}var Jn,W,Yn,G;function Xn(){return(Xn=e((()=>{Jn=x(),_e(),Xe(),nt(),d(),it(),at(),oe(),Qe(),Cn(),Un(),qn(),W=y(),Yn=r(``,{variants:{feature:{menuOrg:H.priorityFeatureMenuOrg,profile:H.priorityFeatureProfile},isPinned:{true:H.mobileSidebarPriorityFeatureVisible},featureInSidebar:{true:H.featureInSidebar},hasNotificationList:{true:H.hasNotificationList}}}),G=(0,Jn.forwardRef)((e,t)=>{let{productSwitcher:n,product:r,profile:i,menuOrganization:a,notificationList:o,children:s}=e,{isShowExitButton:c,isShowProfile:l,isFocusedMode:u,isMobile:d,collapsedIn:f,onToggleSidebar:p,isLoading:m,mobileHeaderPriorityFeature:h,headerStyle:g,isPinned:ee}=Gn(e),_=a?.();return(0,W.jsx)(Nn,{ref:t,$isFocusedMode:u,...Ze(!d&&u),className:H.root,style:g,children:(0,W.jsxs)(Bn,{children:[(0,W.jsx)(Pn,{className:H.mobileSidebarButton,children:(0,W.jsx)(te,{startIcon:f?(0,W.jsx)(ge,{}):(0,W.jsx)(Ye,{}),variant:`text`,onClick:()=>p(),title:`Переключить боковое меню`})}),(0,W.jsxs)(Fn,{children:[n&&(0,W.jsx)(Ln,{children:(0,W.jsx)(n,{})}),(0,W.jsx)(rt,{...r})]}),(0,W.jsxs)(In,{className:Yn({feature:h}),children:[s,o,_&&(0,W.jsxs)(Vn,{className:Yn({feature:h,isPinned:ee,featureInSidebar:h===`profile`,hasNotificationList:!!o}),children:[h===`profile`&&o&&(0,W.jsx)(Hn,{children:o}),_]}),i&&(0,W.jsxs)(Vn,{className:Yn({feature:h,isPinned:ee,featureInSidebar:h===`menuOrg`,hasNotificationList:!!o}),children:[h===`menuOrg`&&o&&(0,W.jsx)(Hn,{children:o}),(0,W.jsx)(Rn,{className:H.profile,$isShow:l,children:(0,W.jsx)(st,{isLoading:m,...i})})]}),(0,W.jsx)(zn,{$isShow:c,onClick:i?.exitButton?.onClick,title:`Выход`,variant:`text`,children:(0,W.jsx)(tt,{})})]})]})})});try{G.displayName=`Header`,G.__docgenInfo={description:`Основной header приложения`,displayName:`Header`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/Header.tsx`,methods:[],props:{product:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`product`,required:!0,tags:{},type:{name:`ProductProps`}},productSwitcher:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`productSwitcher`,required:!1,tags:{},type:{name:`(props: { children?: ReactNode; }) => ReactElement<unknown, string | JSXElementConstructor<any>>`}},profile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`profile`,required:!1,tags:{},type:{name:`ProfileProps`}},menuOrganization:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`menuOrganization`,required:!1,tags:{},type:{name:`() => ReactElement<unknown, string | JSXElementConstructor<any>>`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},notificationList:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Header/types.ts`,name:`TypeLiteral`}],description:``,name:`notificationList`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function K(){return(K=e((()=>{Xn(),Cn()})))()}var q;function Zn(){return(Zn=e((()=>{o(),q={main:i(`dashboard-layout-main`),alert:i(`dashboard-layout-main__alert`)}})))()}var Qn,$n,er;function tr(){return(tr=e((()=>{Me(),b(),Qn=v.main`
  overflow: hidden;
  display: flex;
  grid-column: 2;
  grid-row: 3;
  flex-direction: column;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`,$n=v.div`
  grid-column: 2;
  grid-row: 2;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-row: 1;

    background-color: ${({theme:e})=>e.palette.background.default};
  }
`,er=v.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  &:empty {
    display: none;
  }

  & > *:last-child .${je.root} {
    margin-bottom: ${({theme:e})=>e.spacing(4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: ${({theme:e})=>e.spacing(0,4)};

    & > *:first-of-type .${je.root} {
      margin-top: ${({theme:e})=>e.spacing(3)};
    }

    & > *:last-child .${je.root} {
      margin-bottom: ${({theme:e})=>e.spacing(1)};
    }
  }
`})))()}var J,nr;function rr(){return(rr=e((()=>{J=x(),C(),mt(),nr=()=>{let{isFocusedMode:e,setAlertElement:t}=(0,J.useContext)(We),n=(0,J.useRef)(e),r=(0,J.useRef)(null),i=(0,J.useRef)(null);return(0,J.useEffect)(()=>(t?.(r.current??null),()=>t?.(null)),[t]),(0,J.useEffect)(()=>{(e||n.current&&!e)&&(i.current=document.querySelector(`.${ht.pageContent}`),i.current?.classList.add(ht.animation))},[e]),{onAnimationEnd:t=>{t.animationName===`white-flash`&&(i.current?.classList.remove(ht.animation),n.current=e)},alertContainerRef:r}}})))()}function ir(){return(ir=e((()=>{rr()})))()}var ar,Y,or;function sr(){return(sr=e((()=>{ar=x(),Zn(),tr(),ir(),Y=y(),or=(0,ar.forwardRef)(({children:e,alert:t},n)=>{let{onAnimationEnd:r,alertContainerRef:i}=nr();return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)($n,{ref:i,className:q.alert,children:t&&(0,Y.jsx)(er,{children:t})}),(0,Y.jsx)(Qn,{className:q.main,ref:n,onAnimationEnd:r,children:e})]})});try{or.displayName=`Main`,or.__docgenInfo={description:`Основной контент приложения`,displayName:`Main`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},alert:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Main/Main.tsx`,name:`TypeLiteral`}],description:`Alert приложения`,name:`alert`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function cr(){return(cr=e((()=>{sr(),Zn()})))()}var lr,ur;function dr(){return(dr=e((()=>{lr=x(),P(),Lt(),de(),Wt(),ur=()=>{let{isMobile:e}=le(),{collapsedIn:t,onToggleSidebar:n}=(0,lr.useContext)(N),r=()=>{n(!1)};(0,lr.useEffect)(()=>{if(!e||!t)return;let n=document.querySelector(`.${Rt.root}`);if(!n)return;let i=n.querySelectorAll(`.${w.root}:not(.${w.hasGroup})`);return i.forEach(e=>{e.addEventListener(`click`,r)}),()=>{i.forEach(e=>{e.removeEventListener(`click`,r)})}},[e,t])}})))()}function fr(){return(fr=e((()=>{dr()})))()}function pr(){return(pr=e((()=>{fr()})))()}var X,mr;function hr(){return(hr=e((()=>{X=x(),C(),P(),re(),de(),m(),K(),cr(),O(),pr(),mr=e=>{let{className:n,menu:r,header:i,isLoading:a}=e,{onToggleSidebar:o,isPinned:s,onTogglePin:c,collapsedIn:l,setIsPopupOpen:u}=(0,X.useContext)(N),{alertHeight:d,isLoading:f,hasMenuOrganizationRef:p,hasProfileRef:m,mobileHeaderPriorityFeature:h}=(0,X.useContext)(We),{isMobile:g}=le();ur();let _=(0,X.useRef)(null),v=ee(),te=()=>{g||(_.current&&clearTimeout(_.current),_.current=window.setTimeout(()=>{o(!0)},v.transitions.duration.shorter))},ne=()=>{g||(_.current&&=(clearTimeout(_.current),null),o(!1),u(!1))};(0,X.useEffect)(()=>()=>{_.current&&clearTimeout(_.current)},[]),(0,X.useEffect)(()=>{if(g||s||!l&&!s)return;let e=()=>o(!1),t=document.querySelector(`.${q.main}`),n=document.querySelector(`.${q.alert}`),r=document.querySelector(`.${H.root}`);return t&&t.addEventListener(`mouseenter`,e),n&&n.addEventListener(`mouseenter`,e),r&&r.addEventListener(`mouseenter`,e),()=>{t&&t.removeEventListener(`mouseenter`,e),n&&n.removeEventListener(`mouseenter`,e),r&&r.removeEventListener(`mouseenter`,e)}},[l,s]);let re=t(n,E.root);return{isPinned:s,isMobile:g,collapsedIn:l,onTogglePin:c,onMouseEnter:te,onMouseLeave:ne,alertHeight:d,menu:r,header:i,isLoading:a||f,classnames:re,hasMenuOrganization:p.current&&h===`profile`,hasProfile:m.current&&h===`menuOrg`}}})))()}function gr(){return(gr=e((()=>{hr()})))()}var _r,Z,vr,yr;function br(){return(br=e((()=>{_r=x(),It(),Lt(),ze(),oe(),Qe(),O(),Wt(),Sn(),gr(),Z=y(),vr=r(``,{variants:{hasProfile:{true:E.hasProfile},hasMenuOrganization:{true:E.hasMenuOrganization}}}),yr=(0,_r.forwardRef)((e,t)=>{let{isPinned:n,isMobile:r,collapsedIn:i,onTogglePin:a,onMouseEnter:o,onMouseLeave:s,alertHeight:c,classnames:l,menu:u,header:d,isLoading:f,hasMenuOrganization:p,hasProfile:m}=mr(e);return f?(0,Z.jsx)(Pt,{}):(0,Z.jsx)(gn,{$isPinned:n,$alertHeight:c,className:vr({hasProfile:m,hasMenuOrganization:p}),children:(0,Z.jsx)(vn,{ref:t,$isPinned:n,$collapsedIn:i,className:l,onMouseEnter:o,onMouseLeave:s,...Ze(r&&!n),children:(0,Z.jsxs)(_n,{variant:`outlined`,children:[(0,Z.jsxs)(bn,{$collapsedIn:i,$isPinned:n,$hasHeader:!!d,children:[d&&(0,Z.jsx)(yn,{children:d}),(0,Z.jsx)(Ht,{menu:(0,Z.jsx)(Je,{collapsedIn:i,items:u.items})})]}),(0,Z.jsx)(xn,{children:(0,Z.jsx)(Le,{isPinned:n,collapsedIn:i,onClick:a})})]})})})});try{yr.displayName=`DashboardSidebar`,yr.__docgenInfo={description:`Основной sidebar приложения`,displayName:`DashboardSidebar`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/DashboardSidebar.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Пропс для передачи контента в заголовок сайдбара`,name:`header`,required:!1,tags:{example:`<Sidebar header={<SidebarButton />>} >`},type:{name:`ReactNode`}},menu:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Описание меню`,name:`menu`,required:!0,tags:{},type:{name:`{ items: [key: string, value: { icon: ReactElement<unknown, string | JSXElementConstructor<any>>; text: ReactNode; counter?: CounterProps; active?: boolean; items?: [key: ...][]; component?: ElementType; } & Omit<...> & { ...; }][]; }`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardSidebar/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function xr(){return(xr=e((()=>{br(),O()})))()}var Q;function Sr(){return(Sr=e((()=>{o(),Q={root:i(`dashboard-layout__container`),compact:i(`dashboard-layout__container_view-mode_compact`),wide:i(`dashboard-layout__container_view-mode_wide`),focusedMode:i(`dashboard-layout__container_focused-mode`)}})))()}var Cr;function wr(){return(wr=e((()=>{b(),xr(),Sr(),Cr=v.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  flex-grow: 1;

  height: 100vh;
  padding: ${({theme:e})=>e.spacing(0,4,4)};

  transition: ${({theme:e})=>e.transitions.create([`max-width`],{duration:e.transitions.duration.complex})};

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${E.root}) {
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

  &.${Q.compact} {
    max-width: 1572px;
  }

  &.${Q.wide} {
    max-width: 1920px;
  }

  &.${Q.focusedMode} {
    max-width: 100%;
  }
`})))()}var Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{Tr=x(),C(),oe(),Sr(),wr(),Er=y(),Dr=r(Q.root,{variants:{desktopViewMode:{compact:Q.compact,wide:Q.wide},isFocusedMode:{true:Q.focusedMode}}}),Or=({children:e})=>{let{isFocusedMode:t,desktopViewMode:n}=(0,Tr.useContext)(We);return(0,Er.jsx)(Cr,{className:Dr({desktopViewMode:n,isFocusedMode:t}),children:e})};try{Or.displayName=`Container`,Or.__docgenInfo={description:``,displayName:`Container`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Container/Container.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/Container/Container.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Ar(){return(Ar=e((()=>{kr()})))()}var jr,Mr;function Nr(){return(Nr=e((()=>{b(),V(),jr=v(`div`)`
  display: flex;
  justify-content: center;

  width: 100%;

  background-color: ${({theme:e})=>e.palette.background.body};
`,Mr=v.div`
  position: absolute;

  /* Header находится над декоративным элементом */
  z-index: 0;
  left: 0;

  width: 100%;
  height: ${({$isFocusedMode:e})=>e?0:pn};

  background-color: ${({theme:e})=>e.palette.background.default};
  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`height`],{duration:e.transitions.duration.complex})};

 ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${({$isFocusedMode:e})=>e?0:mn}
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var Pr,Fr,Ir;function Lr(){return(Lr=e((()=>{Pr=x(),C(),P(),Ar(),V(),Nr(),Fr=y(),Ir=({children:e})=>{let{isFocusedMode:t}=(0,Pr.useContext)(We);return(0,Fr.jsx)(Ot,{isFocusedMode:t,children:(0,Fr.jsxs)(jr,{className:hn.root,children:[(0,Fr.jsx)(Mr,{role:`presentation`,$isFocusedMode:t}),(0,Fr.jsx)(Or,{children:e})]})})};try{Ir.displayName=`DashboardWrapper`,Ir.__docgenInfo={description:``,displayName:`DashboardWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardWrapper/DashboardWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardWrapper/DashboardWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Rr(){return(Rr=e((()=>{Lr()})))()}var zr,$;function Br(){return(Br=e((()=>{C(),xr(),Rr(),K(),cr(),zr=y(),$=({children:e,isFocusedMode:t=!1,isLoading:n=!1,mobileHeaderPriorityFeature:r=`menuOrg`,desktopViewMode:i=`compact`})=>(0,zr.jsx)(Ge,{isFocusedMode:t,isLoading:n,desktopViewMode:i,mobileHeaderPriorityFeature:r,children:(0,zr.jsx)(Ir,{children:e})}),$.Header=G,$.Sidebar=yr,$.Main=or;try{$.displayName=`DashboardLayout`,$.__docgenInfo={description:`Общий Layout приложения`,displayName:`DashboardLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/DashboardLayout.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isFocusedMode:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Флаг режима фокусировки: убирает header, сворачивает sidebar, растягивает контент на всю ширину.
Пример использования: просмотр документа`,name:`isFocusedMode`,required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается состояние загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},mobileHeaderPriorityFeature:{defaultValue:{value:`menuOrg`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Элемент, отображаемый в мобильном хедере.
Второстепенный будет помещен в sidebar.`,name:`mobileHeaderPriorityFeature`,required:!1,tags:{},type:{name:`enum`,raw:`"profile" | "menuOrg"`,value:[{value:`"profile"`},{value:`"menuOrg"`}]}},desktopViewMode:{defaultValue:{value:`compact`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardLayout/types.ts`,name:`TypeLiteral`}],description:`Compact - ширина layout ограничена 1572px. Необходимо для удобного чтения контента, без лишнего растягивания
Wide - ширина layout ограничена 1920px. Применяйте, когда в вашем приложении отображается много табличных данных с большим количеством колонок. Пример - админки`,name:`desktopViewMode`,required:!1,tags:{},type:{name:`enum`,raw:`"wide" | "compact"`,value:[{value:`"wide"`},{value:`"compact"`}]}}},tags:{}}}catch{}})))()}function Vr(){return(Vr=e((()=>{Br(),K(),cr(),V()})))()}export{$t as A,Pt as B,an as C,Zt as D,Qt as E,Kt as F,P as H,L as I,I as L,Gt as M,qt as N,Xt as O,Jt as P,Lt as R,un as S,Yt as T,N as U,Ft as V,kt as W,wn as _,jr as a,fn as b,Or as c,Sr as d,K as f,jn as g,An as h,Mr as i,tn as j,en as k,kr as l,Xn as m,$ as n,Nr as o,G as p,Br as r,Ar as s,Vr as t,Q as u,hn as v,sn as w,ln as x,V as y,It as z};