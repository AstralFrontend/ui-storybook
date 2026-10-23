import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,Kt as r,On as i,T as a,Va as o,Wt as s,Xt as c,cn as l,dn as u,dt as d,en as f,ft as p,it as m,ji as h,ln as ee,rt as g,w as _,wn as v,xa as y,yn as b}from"./preview-NvIN-gdT.js";import{n as x,t as S}from"./useViewportType-BjZU3eaX.js";import{i as C,t as w}from"./Tabs-BcI8zJlq.js";import{t as T}from"./Skeleton-ijYRP5Fg.js";import{a as te,i as E,r as ne}from"./BottomDrawer-CGL_GQ_M.js";import{t as re}from"./Divider-WD1zNom-.js";import{n as ie,t as ae}from"./CrossOutlineMd-Dya9HAAJ.js";import{t as oe}from"./Skeleton-CG_2cNHd.js";import{t as se}from"./ContentState-xRCK-OFR.js";import{t as ce}from"./ContentState-BBJVEE-x.js";import{t as le}from"./Divider-DeKaNgRY.js";import{a as ue,r as de,t as D}from"./SideDialogContent-Cihw7fkR.js";import{t as fe}from"./SideDialogHeader-BxrRezAy.js";import{t as pe}from"./SideDialogHeader-BFVQwsoL.js";import{n as me,t as he}from"./useIntersection-BUG5QX1a.js";import{n as ge,t as _e}from"./SettingsOutlineMd-BWtjNEs0.js";import{t as ve}from"./SideDialog-DTbg3xaH.js";import{t as ye}from"./SideDialogActions-DR6NYIcA.js";import{t as be}from"./SideDialogContent-DvzMq2yU.js";import{t as xe}from"./Tabs-w18vtwZq.js";var O;function k(){return(k=e((()=>{i(),O={root:n(`notification-list`),hasUnreadNotifications:n(`notification-list_has-unread-notifications`),error:n(`notification-list_error`),loading:n(`notification-list_loading`),loadingPlaceholder:n(`notification-list__loading-placeholder`)}})))()}var A,j;function M(){return(M=e((()=>{b(),A=h(`div`)`
  display: flex;
  flex-direction: column;
  row-gap: ${({theme:e})=>e.spacing(8)};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`,j=h(`img`)`
  max-width: 160px;
`})))()}var N,P;function F(){return(F=e((()=>{d(),M(),N=y(),P=({listType:e,noDataImgSrc:t})=>(0,N.jsxs)(A,{children:[(0,N.jsx)(j,{src:t,alt:``}),(0,N.jsx)(p,{children:`У вас пока нет ${e===`unread`?`новых`:``} уведомлений`})]});try{P.displayName=`Empty`,P.__docgenInfo={description:``,displayName:`Empty`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,methods:[],props:{listType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,name:`TypeLiteral`}],description:``,name:`listType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},noDataImgSrc:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,name:`TypeLiteral`}],description:``,name:`noDataImgSrc`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function I(){return(I=e((()=>{F()})))()}var L;function R(){return(R=e((()=>{i(),L={root:n(`notification-list__item`),hasCloseButton:n(`notification-list__item_has-close-button`)}})))()}var z,B,V,Se,Ce,we,Te,Ee;function De(){return(De=e((()=>{l(),b(),d(),R(),z=({theme:e,priority:t})=>t===`important`?e.palette.yellow[800]:t===`critical`?e.palette.red[800]:t===`success`?e.palette.success[800]:e.palette.primary[800],B=h.li`
  position: relative;

  display: grid;
  grid-template-columns: 8px 1fr;
  column-gap: ${({theme:e})=>e.spacing(4)};

  padding: ${({theme:e})=>e.spacing(4,0)};

  &.${L.hasCloseButton} {
    grid-template-columns: 8px 1fr 32px;
  }

  &:not(:last-of-type)::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${({theme:e})=>e.palette.grey[300]};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 8px 1fr;

    padding: ${({theme:e})=>e.spacing(4)};

    &.${L.hasCloseButton} {
      grid-template-columns: 8px 1fr 40px;
    }
  }
`,V=h(p)`
  margin-top: ${({theme:e})=>e.microSpacing(3)};
`,Se=h(`div`)`
  width: ${({theme:e})=>e.spacing(2)};
  height: ${({theme:e})=>e.spacing(2)};

  background-color: ${z};
  border-radius: 50%;
`,Ce=h(`div`)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${({theme:e})=>e.spacing(8)};
`,we=h(`div`)`
  display: flex;
  column-gap: ${({theme:e})=>e.spacing(2)};

  & .${u.root} {
    height: 32px;
  }
`,Te=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`,Ee=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`})))()}function Oe(){return(Oe=e((()=>{he()})))()}var H,ke;function Ae(){return(Ae=e((()=>{H=o(),Oe(),ke=({id:e,onDelete:t,onViewNotification:n,isUnread:r})=>{let i=(0,H.useRef)(null),a=me(i,{root:null,threshold:.95});return(0,H.useEffect)(()=>{n&&r&&a?.isIntersecting&&n(e)},[n,a?.isIntersecting,r,e]),{ref:i,handleDelete:()=>{t&&t(e)}}}})))()}function je(){return(je=e((()=>{Ae()})))()}var Me;function Ne(){return(Ne=e((()=>{Me=e=>e?new Date(e).toLocaleString(`ru-RU`,{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):``})))()}var U,Pe,W;function Fe(){return(Fe=e((()=>{ae(),g(),d(),v(),R(),De(),je(),Ne(),U=y(),Pe=t(L.root,{variants:{hasCloseButton:{true:L.hasCloseButton}}}),W=({id:e,title:t,date:n,text:r,priority:i=`ordinary`,actions:a,isUnread:o=!0,onViewNotification:s,isDeleteButtonVisible:c,onDelete:l})=>{let{ref:u,handleDelete:d}=ke({id:e,onDelete:l,onViewNotification:s,isUnread:o});return(0,U.jsxs)(B,{ref:u,className:Pe({hasCloseButton:c}),children:[(0,U.jsx)(Ce,{children:(0,U.jsx)(Se,{priority:i})}),(0,U.jsxs)(Ee,{children:[(0,U.jsxs)(Te,{children:[(0,U.jsx)(V,{variant:o?`h6`:`body1`,children:t}),(0,U.jsx)(p,{colorIntensity:`600`,color:`grey`,children:Me(n)})]}),(0,U.jsx)(p,{variant:`body1`,color:`grey`,colorIntensity:`800`,children:r}),a&&(0,U.jsx)(we,{children:a})]}),c&&(0,U.jsx)(m,{onClick:d,variant:`text`,color:`grey`,children:(0,U.jsx)(ie,{})})]})};try{W.displayName=`ListItem`,W.__docgenInfo={description:``,displayName:`ListItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/ListItem.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`уникальный идентификатор уведомления`,name:`id`,required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`заголовок уведомления`,name:`title`,required:!0,tags:{},type:{name:`string`}},date:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`дата создания уведомления`,name:`date`,required:!0,tags:{},type:{name:`string | Date`}},text:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`текст уведомления`,name:`text`,required:!0,tags:{},type:{name:`string`}},priority:{defaultValue:{value:`ordinary`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`приоритет уведомления`,name:`priority`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationPriority`,value:[{value:`"success"`},{value:`"ordinary"`},{value:`"important"`},{value:`"critical"`}]}},isUnread:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг показывает, что уведомление не прочитано`,name:`isUnread`,required:!1,tags:{},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`дополнительные действия`,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},isDeleteButtonVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`Флаг управляет отображение кнопки удаления уведомления`,name:`isDeleteButtonVisible`,required:!0,tags:{},type:{name:`boolean`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`Функция удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},onViewNotification:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`функция вызывается, когда уведомление полностью попало во viewport`,name:`onViewNotification`,required:!1,tags:{},type:{name:`(id: string) => void`}}},tags:{}}}catch{}})))()}function Ie(){return(Ie=e((()=>{Fe()})))()}var G,Le,Re;function ze(){return(ze=e((()=>{b(),G=h.div`
  overflow: auto;
  display: flex;
  flex-direction: column;

  width: 100%;
`,Le=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  width: 100%;
  padding: ${({theme:e})=>e.spacing(4)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};
`,Re=h.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`})))()}var K,Be;function Ve(){return(Ve=e((()=>{oe(),ze(),K=y(),Be=()=>(0,K.jsx)(G,{children:Array.from({length:10},(e,t)=>(0,K.jsxs)(Le,{children:[(0,K.jsxs)(Re,{children:[(0,K.jsx)(T,{variant:`rounded`,height:20,width:`100%`}),(0,K.jsx)(T,{variant:`rounded`,height:16,width:`25%`})]}),(0,K.jsx)(T,{variant:`rounded`,height:16,width:`50%`}),(0,K.jsx)(T,{variant:`rounded`,height:32,width:`20%`})]},t))})})))()}function He(){return(He=e((()=>{Ve()})))()}var Ue,We;function Ge(){return(Ge=e((()=>{le(),b(),Ue=h.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};

  height: 100%;
  margin-right: ${({theme:e})=>e.spacing(1)};
`,We=h(re)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var q,J;function Ke(){return(Ke=e((()=>{_e(),g(),Ge(),q=y(),J=({onClick:e})=>(0,q.jsxs)(Ue,{children:[(0,q.jsx)(m,{variant:`text`,onClick:e,children:(0,q.jsx)(ge,{})}),(0,q.jsx)(We,{orientation:`vertical`})]});try{J.displayName=`SettingsButton`,J.__docgenInfo={description:``,displayName:`SettingsButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/SettingsButton/SettingsButton.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/SettingsButton/SettingsButton.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function qe(){return(qe=e((()=>{Ke()})))()}var Je,Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{r(),te(),c(),ve(),ye(),be(),b(),k(),Je=h(`ul`)`
  margin: 0;
  padding: 0;
`,Ye=h(D)`
  overflow: hidden;

  min-height: 50px;
  max-height: 50px;
  padding: ${({theme:e})=>e.spacing(3,6,0)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    min-height: unset;
    max-height: unset;
    padding: ${({theme:e})=>e.spacing(3,4,0)};
  }
`,Xe=h(D)`
  padding-top: ${({theme:e})=>e.spacing(1)};
  padding-right: ${({theme:e})=>e.spacing(6)};
  padding-bottom: ${({theme:e})=>e.spacing(1)};

  ${f} {
    scrollbar-gutter: stable;

    padding-right: ${({theme:e})=>`calc(${e.spacing(6)} - 6px)`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0)};
  }
`,Ze=h(de)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};

    /* Уникальная тень(нет в theme) */
    box-shadow: 0 -1px 10px 0 #072D571A;

    &::after {
      display: none;
    }
  }
`,Qe=h(ue)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${s.paper} {
      height: calc(100vh - ${ne});

      /* Причина игнора: прогрессивное улучшение */
      /* stylelint-disable plugin/no-unsupported-browser-features */
      @supports (height: 100dvh) {
        height: calc(100dvh - ${ne});
      }
    }

    & .${E.content} {
      display: grid;
      grid-template-rows: auto 1fr;

      height: 100%;
    }

    &.${O.hasUnreadNotifications} {
      & .${E.content} {
        grid-template-rows: auto auto 1fr;
      }
    }

    &.${O.error},
    &.${O.loading} {
      & .${E.content} {
        grid-template-rows: auto 1fr;
      }
    }

    & .${O.loadingPlaceholder} {
      justify-content: flex-start;
    }
  }
`})))()}var Y,X;function et(){return(et=e((()=>{xe(),Y=y(),X=({listType:e,notificationsCount:t,unreadNotificationsCount:n,onChange:r})=>(0,Y.jsxs)(w,{value:e,onChange:(e,t)=>{r(t)},children:[(0,Y.jsx)(C,{value:`unread`,label:`Непрочитанные`,count:n}),(0,Y.jsx)(C,{value:`all`,label:`Все`,count:t})]});try{X.displayName=`Tabs`,X.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,methods:[],props:{listType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`listType`,required:!0,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},unreadNotificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`unreadNotificationsCount`,required:!0,tags:{},type:{name:`number`}},notificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`notificationsCount`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(listType: NotificationListType) => void`}}},tags:{}}}catch{}})))()}function tt(){return(tt=e((()=>{et()})))()}var Z,nt;function rt(){return(rt=e((()=>{Z=o(),_(),S(),nt=({initialListType:e=`all`,unreadNotifications:t,notifications:n,onTabChange:r,onClose:i,onRetry:o})=>{let{imagesMap:s}=(0,Z.useContext)(a),{isMobile:c}=x(),[l,u]=(0,Z.useState)(e),d=(0,Z.useRef)(new Set),f=(0,Z.useMemo)(()=>t&&l===`unread`?t:n,[t,l,n]);return{listType:l,data:f,isEmptyData:f.length===0,isTabsVisible:!!t,handleTabChange:e=>{u(e),r&&r()},handleView:e=>{d.current.add(e)},handleClose:()=>{i(Array.from(d.current)),d.current.clear()},handleRetry:()=>{o&&o()},imagesMap:s,isMobile:c}}})))()}function it(){return(it=e((()=>{rt()})))()}var Q,at,$;function ot(){return(ot=e((()=>{l(),ce(),pe(),v(),k(),I(),Ie(),He(),qe(),$e(),tt(),it(),Q=y(),at=t(O.root,{variants:{hasUnreadNotifications:{true:O.hasUnreadNotifications},isError:{true:O.error},isLoading:{true:O.loading}}}),$=({isOpen:e,title:t=`Уведомления`,isLoading:n,isError:r,errorMessage:i,notifications:a,unreadNotifications:o,initialListType:s,headerContent:c,footerContent:l,isSettingsButtonVisible:u=!0,onClose:d,onDelete:f,onSettingsButtonClick:p,onTabChange:m,onRetry:h})=>{let{listType:g,data:_,isEmptyData:v,isTabsVisible:y,handleTabChange:b,handleView:x,handleClose:S,handleRetry:C,imagesMap:w,isMobile:T}=nt({initialListType:s,unreadNotifications:o,notifications:a,onTabChange:m,onClose:d,onRetry:h});return(0,Q.jsxs)(Qe,{open:e,onClose:S,className:at({hasUnreadNotifications:y,isError:r,isLoading:n}),children:[(0,Q.jsxs)(fe,{title:t,onClose:S,justifyContent:`flex-end`,children:[c,u&&(0,Q.jsx)(J,{onClick:p})]}),(0,Q.jsxs)(se,{isLoading:n,isError:r,loadingContent:T&&(0,Q.jsx)(Be,{}),loadingPlaceholderClassname:O.loadingPlaceholder,errorState:{imgAlt:``,errorList:[i||``],onRetry:C,imgSrc:w.defaultErrorImgSrc,actions:(0,Q.jsx)(ee,{color:`grey`,variant:`light`,onClick:C,children:`Попробовать снова`})},children:[y&&(0,Q.jsx)(Ye,{children:(0,Q.jsx)(X,{onChange:b,listType:g,notificationsCount:a.length,unreadNotificationsCount:o?.length||0})}),(0,Q.jsx)(Xe,{children:v?(0,Q.jsx)(P,{listType:g,noDataImgSrc:w.noDataImgSrc}):(0,Q.jsx)(Je,{children:_.map(e=>(0,Q.jsx)(W,{...e,onDelete:f,onViewNotification:x,isDeleteButtonVisible:!!f},e.id))})})]}),l&&(0,Q.jsx)(Ze,{children:l})]})};try{$.displayName=`NotificationList`,$.__docgenInfo={description:``,displayName:`NotificationList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/NotificationList.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг управления отображением уведомлений`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},title:{defaultValue:{value:`Уведомления`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Заголовок списка уведомлений`,name:`title`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMessage:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMessage`,required:!1,tags:{},type:{name:`string`}},notifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список уведомлений`,name:`notifications`,required:!0,tags:{},type:{name:`Notification[]`}},unreadNotifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список непрочитанных уведомлений`,name:`unreadNotifications`,required:!1,tags:{},type:{name:`Notification[]`}},initialListType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные`,name:`initialListType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},headerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в заголовке`,name:`headerContent`,required:!1,tags:{},type:{name:`ReactNode`}},footerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в подвале`,name:`footerContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSettingsButtonVisible:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается`,name:`isSettingsButtonVisible`,required:!1,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция для закрытия уведомлений, передает id уведомлений, попавших во viewport`,name:`onClose`,required:!0,tags:{},type:{name:`(viewedIds: string[]) => void`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},onSettingsButtonClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается`,name:`onSettingsButtonClick`,required:!1,tags:{},type:{name:`() => void`}},onTabChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки смены вкладки`,name:`onTabChange`,required:!1,tags:{},type:{name:`() => void`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{ot as n,$ as t};