import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,Kt as r,On as i,T as a,Wt as o,Xt as s,cn as c,dn as l,dt as u,en as d,ft as f,it as p,ji as m,ln as ee,rt as h,w as g,wn as _,ya as v,yn as y,za as b}from"./preview-DLwisTAq.js";import{n as x,t as S}from"./useViewportType-Dn6roOIh.js";import{i as C,t as w}from"./Tabs-D7Kaziet.js";import{t as T}from"./Skeleton-DkgdjuIe.js";import{a as te,i as E,r as ne}from"./BottomDrawer-DtWyItvh.js";import{t as re}from"./Divider-BrSW-4mm.js";import{n as ie,t as ae}from"./CrossOutlineMd-B--RMUjz.js";import{t as oe}from"./Skeleton-BOYR4pGO.js";import{t as se}from"./ContentState-SVrRrTAJ.js";import{t as ce}from"./ContentState-CI-pBID8.js";import{t as le}from"./Divider-B8Y7-lDY.js";import{a as ue,r as de,t as fe}from"./SideDialogContent-CK-X3YkV.js";import{t as pe}from"./SideDialogHeader-CdJFzP96.js";import{t as me}from"./SideDialogHeader-B200z7Dj.js";import{n as he,t as ge}from"./useIntersection-BPwEVBTk.js";import{n as _e,t as ve}from"./SettingsOutlineMd-ZXyY33oI.js";import{t as ye}from"./SideDialog-DtL9c5MR.js";import{t as be}from"./SideDialogActions-CUpwnI_r.js";import{t as xe}from"./SideDialogContent-C9Agx5Sp.js";import{t as Se}from"./Tabs-C0So6i4d.js";var D;function O(){return(O=e((()=>{i(),D={root:n(`notification-list`),hasUnreadNotifications:n(`notification-list_has-unread-notifications`),error:n(`notification-list_error`),loading:n(`notification-list_loading`),loadingPlaceholder:n(`notification-list__loading-placeholder`)}})))()}var k,A;function j(){return(j=e((()=>{y(),k=m(`div`)`
  display: flex;
  flex-direction: column;
  row-gap: ${({theme:e})=>e.spacing(8)};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`,A=m(`img`)`
  max-width: 160px;
`})))()}var M,N;function P(){return(P=e((()=>{u(),j(),M=v(),N=({listType:e,noDataImgSrc:t})=>(0,M.jsxs)(k,{children:[(0,M.jsx)(A,{src:t,alt:``}),(0,M.jsx)(f,{children:`У вас пока нет ${e===`unread`?`новых`:``} уведомлений`})]});try{N.displayName=`Empty`,N.__docgenInfo={description:``,displayName:`Empty`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,methods:[],props:{listType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,name:`TypeLiteral`}],description:``,name:`listType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},noDataImgSrc:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Empty/Empty.tsx`,name:`TypeLiteral`}],description:``,name:`noDataImgSrc`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function F(){return(F=e((()=>{P()})))()}var I;function L(){return(L=e((()=>{i(),I={root:n(`notification-list__item`),hasCloseButton:n(`notification-list__item_has-close-button`)}})))()}var R,z,B,Ce,we,Te,Ee,De;function Oe(){return(Oe=e((()=>{c(),y(),u(),L(),R=({theme:e,priority:t})=>t===`important`?e.palette.yellow[800]:t===`critical`?e.palette.red[800]:t===`success`?e.palette.success[800]:e.palette.primary[800],z=m.li`
  position: relative;

  display: grid;
  grid-template-columns: 8px 1fr;
  column-gap: ${({theme:e})=>e.spacing(4)};

  padding: ${({theme:e})=>e.spacing(4,0)};

  &.${I.hasCloseButton} {
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

    &.${I.hasCloseButton} {
      grid-template-columns: 8px 1fr 40px;
    }
  }
`,B=m(f)`
  margin-top: ${({theme:e})=>e.microSpacing(3)};
`,Ce=m(`div`)`
  width: ${({theme:e})=>e.spacing(2)};
  height: ${({theme:e})=>e.spacing(2)};

  background-color: ${R};
  border-radius: 50%;
`,we=m(`div`)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${({theme:e})=>e.spacing(8)};
`,Te=m(`div`)`
  display: flex;
  column-gap: ${({theme:e})=>e.spacing(2)};

  & .${l.root} {
    height: 32px;
  }
`,Ee=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`,De=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`})))()}function ke(){return(ke=e((()=>{ge()})))()}var V,Ae;function je(){return(je=e((()=>{V=b(),ke(),Ae=({id:e,onDelete:t,onViewNotification:n,isUnread:r})=>{let i=(0,V.useRef)(null),a=he(i,{root:null,threshold:.95});return(0,V.useEffect)(()=>{n&&r&&a?.isIntersecting&&n(e)},[n,a?.isIntersecting,r,e]),{ref:i,handleDelete:()=>{t&&t(e)}}}})))()}function Me(){return(Me=e((()=>{je()})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=e=>e?new Date(e).toLocaleString(`ru-RU`,{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):``})))()}var H,Fe,U;function W(){return(W=e((()=>{ae(),h(),u(),_(),L(),Oe(),Me(),Pe(),H=v(),Fe=t(I.root,{variants:{hasCloseButton:{true:I.hasCloseButton}}}),U=({id:e,title:t,date:n,text:r,priority:i=`ordinary`,actions:a,isUnread:o=!0,onViewNotification:s,isDeleteButtonVisible:c,onDelete:l})=>{let{ref:u,handleDelete:d}=Ae({id:e,onDelete:l,onViewNotification:s,isUnread:o});return(0,H.jsxs)(z,{ref:u,className:Fe({hasCloseButton:c}),children:[(0,H.jsx)(we,{children:(0,H.jsx)(Ce,{priority:i})}),(0,H.jsxs)(De,{children:[(0,H.jsxs)(Ee,{children:[(0,H.jsx)(B,{variant:o?`h6`:`body1`,children:t}),(0,H.jsx)(f,{colorIntensity:`600`,color:`grey`,children:Ne(n)})]}),(0,H.jsx)(f,{variant:`body1`,color:`grey`,colorIntensity:`800`,children:r}),a&&(0,H.jsx)(Te,{children:a})]}),c&&(0,H.jsx)(p,{onClick:d,variant:`text`,color:`grey`,children:(0,H.jsx)(ie,{})})]})};try{U.displayName=`ListItem`,U.__docgenInfo={description:``,displayName:`ListItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/ListItem.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`уникальный идентификатор уведомления`,name:`id`,required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`заголовок уведомления`,name:`title`,required:!0,tags:{},type:{name:`string`}},date:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`дата создания уведомления`,name:`date`,required:!0,tags:{},type:{name:`string | Date`}},text:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`текст уведомления`,name:`text`,required:!0,tags:{},type:{name:`string`}},priority:{defaultValue:{value:`ordinary`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`приоритет уведомления`,name:`priority`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationPriority`,value:[{value:`"success"`},{value:`"ordinary"`},{value:`"important"`},{value:`"critical"`}]}},isUnread:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг показывает, что уведомление не прочитано`,name:`isUnread`,required:!1,tags:{},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`дополнительные действия`,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},isDeleteButtonVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`Флаг управляет отображение кнопки удаления уведомления`,name:`isDeleteButtonVisible`,required:!0,tags:{},type:{name:`boolean`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`Функция удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},onViewNotification:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/ListItem/types.ts`,name:`TypeLiteral`}],description:`функция вызывается, когда уведомление полностью попало во viewport`,name:`onViewNotification`,required:!1,tags:{},type:{name:`(id: string) => void`}}},tags:{}}}catch{}})))()}function Ie(){return(Ie=e((()=>{W()})))()}var Le,Re,ze;function Be(){return(Be=e((()=>{y(),Le=m.div`
  overflow: auto;
  display: flex;
  flex-direction: column;

  width: 100%;
`,Re=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  width: 100%;
  padding: ${({theme:e})=>e.spacing(4)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};
`,ze=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`})))()}var G,Ve;function He(){return(He=e((()=>{oe(),Be(),G=v(),Ve=()=>(0,G.jsx)(Le,{children:Array.from({length:10},(e,t)=>(0,G.jsxs)(Re,{children:[(0,G.jsxs)(ze,{children:[(0,G.jsx)(T,{variant:`rounded`,height:20,width:`100%`}),(0,G.jsx)(T,{variant:`rounded`,height:16,width:`25%`})]}),(0,G.jsx)(T,{variant:`rounded`,height:16,width:`50%`}),(0,G.jsx)(T,{variant:`rounded`,height:32,width:`20%`})]},t))})})))()}function Ue(){return(Ue=e((()=>{He()})))()}var We,Ge;function Ke(){return(Ke=e((()=>{le(),y(),We=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};

  height: 100%;
  margin-right: ${({theme:e})=>e.spacing(1)};
`,Ge=m(re)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var K,q;function qe(){return(qe=e((()=>{ve(),h(),Ke(),K=v(),q=({onClick:e})=>(0,K.jsxs)(We,{children:[(0,K.jsx)(p,{variant:`text`,onClick:e,children:(0,K.jsx)(_e,{})}),(0,K.jsx)(Ge,{orientation:`vertical`})]});try{q.displayName=`SettingsButton`,q.__docgenInfo={description:``,displayName:`SettingsButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/SettingsButton/SettingsButton.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/SettingsButton/SettingsButton.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function Je(){return(Je=e((()=>{qe()})))()}var Ye,Xe,Ze,Qe,$e;function et(){return(et=e((()=>{r(),te(),s(),ye(),be(),xe(),y(),O(),Ye=m(`ul`)`
  margin: 0;
  padding: 0;
`,Xe=m(fe)`
  overflow: hidden;

  min-height: 50px;
  max-height: 50px;
  padding: ${({theme:e})=>e.spacing(3,6,0)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    min-height: unset;
    max-height: unset;
    padding: ${({theme:e})=>e.spacing(3,4,0)};
  }
`,Ze=m(fe)`
  padding-top: ${({theme:e})=>e.spacing(1)};
  padding-right: ${({theme:e})=>e.spacing(6)};
  padding-bottom: ${({theme:e})=>e.spacing(1)};

  ${d} {
    scrollbar-gutter: stable;

    padding-right: ${({theme:e})=>`calc(${e.spacing(6)} - 6px)`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0)};
  }
`,Qe=m(de)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};

    /* Уникальная тень(нет в theme) */
    box-shadow: 0 -1px 10px 0 #072D571A;

    &::after {
      display: none;
    }
  }
`,$e=m(ue)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${o.paper} {
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

    &.${D.hasUnreadNotifications} {
      & .${E.content} {
        grid-template-rows: auto auto 1fr;
      }
    }

    &.${D.error},
    &.${D.loading} {
      & .${E.content} {
        grid-template-rows: auto 1fr;
      }
    }

    & .${D.loadingPlaceholder} {
      justify-content: flex-start;
    }
  }
`})))()}var J,Y;function tt(){return(tt=e((()=>{Se(),J=v(),Y=({listType:e,notificationsCount:t,unreadNotificationsCount:n,onChange:r})=>(0,J.jsxs)(w,{value:e,onChange:(e,t)=>{r(t)},children:[(0,J.jsx)(C,{value:`unread`,label:`Непрочитанные`,count:n}),(0,J.jsx)(C,{value:`all`,label:`Все`,count:t})]});try{Y.displayName=`Tabs`,Y.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,methods:[],props:{listType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`listType`,required:!0,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},unreadNotificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`unreadNotificationsCount`,required:!0,tags:{},type:{name:`number`}},notificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`notificationsCount`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/Tabs/Tabs.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(listType: NotificationListType) => void`}}},tags:{}}}catch{}})))()}function nt(){return(nt=e((()=>{tt()})))()}var X,rt;function it(){return(it=e((()=>{X=b(),g(),S(),rt=({initialListType:e=`all`,unreadNotifications:t,notifications:n,onTabChange:r,onClose:i,onRetry:o})=>{let{imagesMap:s}=(0,X.useContext)(a),{isMobile:c}=x(),[l,u]=(0,X.useState)(e),d=(0,X.useRef)(new Set),f=(0,X.useMemo)(()=>t&&l===`unread`?t:n,[t,l,n]);return{listType:l,data:f,isEmptyData:f.length===0,isTabsVisible:!!t,handleTabChange:e=>{u(e),r&&r()},handleView:e=>{d.current.add(e)},handleClose:()=>{i(Array.from(d.current)),d.current.clear()},handleRetry:()=>{o&&o()},imagesMap:s,isMobile:c}}})))()}function at(){return(at=e((()=>{it()})))()}var Z,ot,Q;function $(){return($=e((()=>{c(),ce(),me(),_(),O(),F(),Ie(),Ue(),Je(),et(),nt(),at(),Z=v(),ot=t(D.root,{variants:{hasUnreadNotifications:{true:D.hasUnreadNotifications},isError:{true:D.error},isLoading:{true:D.loading}}}),Q=({isOpen:e,title:t=`Уведомления`,isLoading:n,isError:r,errorMessage:i,notifications:a,unreadNotifications:o,initialListType:s,headerContent:c,footerContent:l,isSettingsButtonVisible:u=!0,onClose:d,onDelete:f,onSettingsButtonClick:p,onTabChange:m,onRetry:h})=>{let{listType:g,data:_,isEmptyData:v,isTabsVisible:y,handleTabChange:b,handleView:x,handleClose:S,handleRetry:C,imagesMap:w,isMobile:T}=rt({initialListType:s,unreadNotifications:o,notifications:a,onTabChange:m,onClose:d,onRetry:h});return(0,Z.jsxs)($e,{open:e,onClose:S,className:ot({hasUnreadNotifications:y,isError:r,isLoading:n}),children:[(0,Z.jsxs)(pe,{title:t,onClose:S,justifyContent:`flex-end`,children:[c,u&&(0,Z.jsx)(q,{onClick:p})]}),(0,Z.jsxs)(se,{isLoading:n,isError:r,loadingContent:T&&(0,Z.jsx)(Ve,{}),loadingPlaceholderClassname:D.loadingPlaceholder,errorState:{imgAlt:``,errorList:[i||``],onRetry:C,imgSrc:w.defaultErrorImgSrc,actions:(0,Z.jsx)(ee,{color:`grey`,variant:`light`,onClick:C,children:`Попробовать снова`})},children:[y&&(0,Z.jsx)(Xe,{children:(0,Z.jsx)(Y,{onChange:b,listType:g,notificationsCount:a.length,unreadNotificationsCount:o?.length||0})}),(0,Z.jsx)(Ze,{children:v?(0,Z.jsx)(N,{listType:g,noDataImgSrc:w.noDataImgSrc}):(0,Z.jsx)(Ye,{children:_.map(e=>(0,Z.jsx)(U,{...e,onDelete:f,onViewNotification:x,isDeleteButtonVisible:!!f},e.id))})})]}),l&&(0,Z.jsx)(Qe,{children:l})]})};try{Q.displayName=`NotificationList`,Q.__docgenInfo={description:``,displayName:`NotificationList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/NotificationList.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг управления отображением уведомлений`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},title:{defaultValue:{value:`Уведомления`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Заголовок списка уведомлений`,name:`title`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMessage:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMessage`,required:!1,tags:{},type:{name:`string`}},notifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список уведомлений`,name:`notifications`,required:!0,tags:{},type:{name:`Notification[]`}},unreadNotifications:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`список непрочитанных уведомлений`,name:`unreadNotifications`,required:!1,tags:{},type:{name:`Notification[]`}},initialListType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные`,name:`initialListType`,required:!1,tags:{},type:{name:`enum`,raw:`NotificationListType`,value:[{value:`"all"`},{value:`"unread"`}]}},headerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в заголовке`,name:`headerContent`,required:!1,tags:{},type:{name:`ReactNode`}},footerContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`слот для отображения дополнительных компонентов в подвале`,name:`footerContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSettingsButtonVisible:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается`,name:`isSettingsButtonVisible`,required:!1,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция для закрытия уведомлений, передает id уведомлений, попавших во viewport`,name:`onClose`,required:!0,tags:{},type:{name:`(viewedIds: string[]) => void`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки удаления уведомления`,name:`onDelete`,required:!1,tags:{},type:{name:`(id: string) => void`}},onSettingsButtonClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается`,name:`onSettingsButtonClick`,required:!1,tags:{},type:{name:`() => void`}},onTabChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки смены вкладки`,name:`onTabChange`,required:!1,tags:{},type:{name:`() => void`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/types.ts`,name:`TypeLiteral`}],description:`функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{$ as n,Q as t};