import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{E as t,Q as n,Z as r,cn as i,it as a,ji as o,ln as s,rt as ee,w as c,ya as l,yn as te,za as u}from"./preview--MgaEBgF.js";import{i as ne,r as re,t as ie}from"./Badge-BhVpAx6M.js";import{t as ae}from"./Badge-6YEC0LBo.js";import{n as oe,t as se}from"./BellOutlineMd-B3r55Ohp.js";import{n as d,t as f}from"./NotificationList-CFp6tsTj.js";var p,m,h;function ce(){return(ce=e((()=>{p=[{id:`1`,title:`Новое сообщение`,date:`2023-10-30T10:00:00`,text:`У вас новое сообщение от пользователя JohnDoe.`,priority:`ordinary`,isUnread:!0},{id:`2`,title:`Важная информация`,date:`2023-10-30T11:00:00`,text:`Сроки заказа были изменены. Пожалуйста, проверьте и подтвердите.`,priority:`important`,isUnread:!0},{id:`3`,title:`Обновление в личном кабинете`,date:`2023-10-30T12:00:00`,text:`Добавлен раздел Обмен с 1С`,priority:`ordinary`,isUnread:!0},{id:`4`,title:`Приглашение`,date:`2023-10-30T13:00:00`,text:`У вас новый запрос на роуминг`,priority:`important`,isUnread:!0},{id:`5`,title:`Срочное предупреждение`,date:`2023-10-30T16:00:00`,text:`Срочное предупреждение: необходимо изменить пароль к учетной записи.`,priority:`critical`,isUnread:!0},{id:`6`,title:`Изменен статус организации`,date:`2023-10-30T20:00:00`,text:`Организация ООО "Тестовая" подключена к личному кабинету`,priority:`ordinary`,isUnread:!0},{id:`7`,title:`Изменены данные организации`,date:`2023-10-30T21:00:00`,text:`Для организации ООО "Тестовая" изменено краткое наименование.`,priority:`ordinary`,isUnread:!0},{id:`8`,title:`Срок действия вашего сертификата истекает`,date:`2023-10-30T22:00:00`,text:`Срок действия сертификата ЭП для организации ООО "Тестовая" истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.`,priority:`ordinary`,isUnread:!0},{id:`9`,title:`Приглашение`,date:`2023-10-30T13:00:00`,text:`У вас новый запрос на роуминг`,priority:`important`,isUnread:!0},{id:`10`,title:`Срочное предупреждение`,date:`2023-10-30T16:00:00`,text:`Срочное предупреждение: необходимо изменить пароль к учетной записи.`,priority:`critical`,isUnread:!0},{id:`11`,title:`Изменен статус организации`,date:`2023-10-30T20:00:00`,text:`Организация ООО "Тестовая" подключена к личному кабинету`,priority:`ordinary`,isUnread:!0},{id:`12`,title:`Изменены данные организации`,date:`2023-10-30T21:00:00`,text:`Для организации ООО "Тестовая" изменено краткое наименование.`,priority:`ordinary`,isUnread:!0},{id:`13`,title:`Срок действия вашего сертификата истекает`,date:`2023-10-30T22:00:00`,text:`Срок действия сертификата ЭП для организации ООО "Тестовая" истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.`,priority:`ordinary`,isUnread:!0}],m=`../../../../../../../.storybook/public/error.svg`,h=`../../../../../../.storybook/public/no-notifications.svg`})))()}var g,le,_;function v(){return(v=e((()=>{ne(),se(),ae(),ee(),te(),g=l(),le=o(ie)`

  & .${re.badge} {
    cursor: pointer;
  }
`,_=({notificationsCount:e,onClick:t})=>(0,g.jsx)(a,{variant:`text`,color:`grey`,onClick:t,children:(0,g.jsx)(le,{badgeContent:e,color:`error`,variant:`standard`,anchorOrigin:{horizontal:`right`,vertical:`top`},children:(0,g.jsx)(oe,{})})});try{_.displayName=`NotificationWidget`,_.__docgenInfo={description:``,displayName:`NotificationWidget`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,methods:[],props:{notificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,name:`TypeLiteral`}],description:``,name:`notificationsCount`,required:!0,tags:{},type:{name:`number`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function y(){return(y=e((()=>{ce(),v()})))()}var b,x,S;function C(){return(C=e((()=>{b=u(),i(),c(),d(),y(),x=l(),S=()=>{let[e,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(p.map(e=>e.id===`3`||e.id===`4`?{...e,actions:(0,x.jsx)(s,{variant:`link`,children:`Перейти в раздел`})}:e)),a=r.filter(e=>e.isUnread);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,x.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,x.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},initialListType:a.length>0?`unread`:`all`})})]})};try{S.displayName=`Actions`,S.__docgenInfo={description:'В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.',displayName:`Actions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/Actions.story.tsx`,methods:[],props:{},tags:{}}}catch{}S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data.map(n => {
    if (n.id === '3' || n.id === '4') {
      return {
        ...n,
        actions: <Button variant="link">Перейти в раздел</Button>
      };
    }
    return n;
  }));
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={unreadNotifications.length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} unreadNotifications={unreadNotifications} onClose={handleClose} initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'} />
      </ConfigProvider>
    </>;
}`,...S.parameters?.docs?.source},description:{story:'В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.',...S.parameters?.docs?.description}}}})))()}var w,T,E;function D(){return(D=e((()=>{w=u(),i(),c(),d(),y(),T=l(),E=()=>{let[e,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(p),a=r.filter(e=>e.isUnread);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,T.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,T.jsx)(f,{isOpen:e,notifications:r,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},footerContent:(0,T.jsx)(s,{variant:`light`,children:`Кнопка в подвале списка`})})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={unreadNotifications.length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} onClose={handleClose} footerContent={<Button variant="light">Кнопка в подвале списка</Button>} />
      </ConfigProvider>
    </>;
}`,...E.parameters?.docs?.source}}}})))()}var O,k,A;function ue(){return(ue=e((()=>{O=u(),c(),r(),d(),y(),k=l(),A=()=>{let[e,r]=(0,O.useState)(!1),[i,a]=(0,O.useState)(p),o=i.filter(e=>e.isUnread);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{notificationsCount:o.length,onClick:()=>{r(!0)}}),(0,k.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,k.jsx)(f,{isOpen:e,notifications:i,unreadNotifications:o,onClose:e=>{a(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),r(!1)},initialListType:o.length>0?`unread`:`all`,onSettingsButtonClick:()=>{},headerContent:(0,k.jsx)(n,{label:`Важный тэг`,variant:`contained`,color:`error`})})})]})};try{A.displayName=`HeaderContent`,A.__docgenInfo={description:"- В заголовке используется компонент ```SideDialogHeader```..\n- В ```headerContent``` можно передавать другие компонент. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.",displayName:`HeaderContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/HeaderContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: (number | string)[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={unreadNotifications.length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} unreadNotifications={unreadNotifications} onClose={handleClose} initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'} onSettingsButtonClick={() => {}} headerContent={<Tag label="Важный тэг" variant="contained" color="error" />} />
      </ConfigProvider>
    </>;
}`,...A.parameters?.docs?.source},description:{story:"- В заголовке используется компонент ```SideDialogHeader```..\n- В ```headerContent``` можно передавать другие компонент. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.",...A.parameters?.docs?.description}}}})))()}var de,j,M;function fe(){return(fe=e((()=>{de=u(),c(),d(),y(),j=l(),M=()=>{let[e,n]=(0,de.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,j.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,j.jsx)(f,{isOpen:e,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)}})})]})};try{M.displayName=`InitialListType`,M.__docgenInfo={description:`Определяет, какой список выводить при открытии.`,displayName:`InitialListType`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/InitialListType.story.tsx`,methods:[],props:{},tags:{}}}catch{}M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={data.filter(n => n.isUnread).length} onClick={handleClick} />
      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={data} unreadNotifications={data.filter(n => n.isUnread)} initialListType="all" onClose={handleClose} />
      </ConfigProvider>
    </>;
}`,...M.parameters?.docs?.source},description:{story:`Определяет, какой список выводить при открытии.`,...M.parameters?.docs?.description}}}})))()}var pe;function me(){return(me=e((()=>{y(),pe={args:{isOpen:!0,notifications:p,unreadNotifications:p.filter(e=>e.isUnread)},parameters:{docs:{disable:!0}}}})))()}var N,P,F;function I(){return(I=e((()=>{N=u(),c(),d(),y(),P=l(),F=()=>{let[e,n]=(0,N.useState)(!1),[r,i]=(0,N.useState)(!1),[a,o]=(0,N.useState)(``),s=()=>{n(!0),i(!0),o(``),setTimeout(()=>{i(!1),o(`Сообщения не получены`)},1e3)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:s}),(0,P.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,P.jsx)(f,{isOpen:e,isError:!!a,isLoading:r,errorMessage:a,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)},onRetry:s})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleClick = () => {
    setIsOpen(true);
    setIsLoading(true);
    setError('');
    setTimeout(() => {
      setIsLoading(false);
      setError('Сообщения не получены');
    }, 1000);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={data.filter(n => n.isUnread).length} onClick={handleClick} />
      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} isError={Boolean(error)} isLoading={isLoading} errorMessage={error} notifications={data} unreadNotifications={data.filter(n => n.isUnread)} initialListType="all" onClose={handleClose} onRetry={handleClick} />
      </ConfigProvider>
    </>;
}`,...F.parameters?.docs?.source}}}})))()}var L,R,z;function B(){return(B=e((()=>{L=u(),c(),d(),y(),R=l(),z=()=>{let[e,n]=(0,L.useState)(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,R.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,R.jsx)(f,{isOpen:e,isLoading:!0,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)}})})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={data.filter(n => n.isUnread).length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} isLoading notifications={data} unreadNotifications={data.filter(n => n.isUnread)} initialListType="all" onClose={handleClose} />
      </ConfigProvider>
    </>;
}`,...z.parameters?.docs?.source}}}})))()}var he,V,H;function ge(){return(ge=e((()=>{he=u(),c(),d(),y(),V=l(),H=()=>{let[e,n]=(0,he.useState)(!1);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,V.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,V.jsx)(f,{isOpen:e,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)},isSettingsButtonVisible:!1})})]})};try{H.displayName=`IsSettingsButtonVisible`,H.__docgenInfo={description:`Управляет отображением кнопки настроек`,displayName:`IsSettingsButtonVisible`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/IsSettingsButtonVisible.story.tsx`,methods:[],props:{},tags:{}}}catch{}H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={data.filter(n => n.isUnread).length} onClick={handleClick} />
      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={data} unreadNotifications={data.filter(n => n.isUnread)} initialListType="all" onClose={handleClose} isSettingsButtonVisible={false} />
      </ConfigProvider>
    </>;
}`,...H.parameters?.docs?.source},description:{story:`Управляет отображением кнопки настроек`,...H.parameters?.docs?.description}}}})))()}var U,W,G;function _e(){return(_e=e((()=>{U=u(),c(),d(),y(),W=l(),G=()=>{let[e,n]=(0,U.useState)(!1),[r,i]=(0,U.useState)(p),a=r.filter(e=>e.isUnread);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,W.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,W.jsx)(f,{isOpen:e,notifications:r,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},onDelete:e=>{i(t=>t.filter(t=>t.id!==e))},initialListType:a.length>0?`unread`:`all`,onSettingsButtonClick:()=>{}})})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(data);
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: string[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  const handleDelete = (id: string | number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  return <>
      <NotificationWidget notificationsCount={unreadNotifications.length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} onClose={handleClose} onDelete={handleDelete} initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'} onSettingsButtonClick={() => {}} />
      </ConfigProvider>
    </>;
}`,...G.parameters?.docs?.source}}}})))()}var K,q,J;function ve(){return(ve=e((()=>{K=u(),c(),d(),y(),q=l(),J=()=>{let[e,n]=(0,K.useState)(!1),[r,i]=(0,K.useState)(p),a=r.filter(e=>e.isUnread);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,q.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,q.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},initialListType:a.length>0?`unread`:`all`})})]})};try{J.displayName=`OnClose`,J.__docgenInfo={description:"В компоненте есть логика прочтения уведомлений, если сообщение полностью попало во viewport, то оно считается прочитанным.\nПри вызове ```onClose``` передаются id уведомлений, которые были прочитаны.",displayName:`OnClose`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/OnClose.story.tsx`,methods:[],props:{},tags:{}}}catch{}J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: string[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={unreadNotifications.length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} unreadNotifications={unreadNotifications} onClose={handleClose} initialListType={unreadNotifications.length > 0 ? 'unread' : 'all'} />
      </ConfigProvider>
    </>;
}`,...J.parameters?.docs?.source},description:{story:"В компоненте есть логика прочтения уведомлений, если сообщение полностью попало во viewport, то оно считается прочитанным.\nПри вызове ```onClose``` передаются id уведомлений, которые были прочитаны.",...J.parameters?.docs?.description}}}})))()}var ye,Y,X;function be(){return(be=e((()=>{ye=u(),c(),d(),y(),Y=l(),X=()=>{let[e,n]=(0,ye.useState)(!1);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,Y.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,Y.jsx)(f,{isOpen:e,notifications:p,onClose:()=>{n(!1)},title:`Сообщения`})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <NotificationWidget notificationsCount={data.filter(n => n.isUnread).length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={data} onClose={handleClose} title="Сообщения" />
      </ConfigProvider>
    </>;
}`,...X.parameters?.docs?.source}}}})))()}var Z,Q,$;function xe(){return(xe=e((()=>{Z=u(),i(),c(),d(),y(),Q=l(),$=()=>{let[e,n]=(0,Z.useState)(!1),[r,i]=(0,Z.useState)(p),a=r.filter(e=>e.isUnread);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(_,{notificationsCount:r.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,Q.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,Q.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},footerContent:a.length>0&&(0,Q.jsx)(s,{variant:`light`,color:`grey`,onClick:()=>{i(e=>e.map(e=>({...e,isUnread:!1})))},children:`Отметить все как прочитанные`})})})]})};try{$.displayName=`UnreadNotifications`,$.__docgenInfo={description:`Если передать unreadNotifications, отображаются табы переключения списка (все/непрочитанные).`,displayName:`UnreadNotifications`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/UnreadNotifications.story.tsx`,methods:[],props:{},tags:{}}}catch{}$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(data);
  const unreadNotifications = notifications.filter(notification => notification.isUnread);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = (viewedIds: string[]) => {
    setNotifications(prev => prev.map(notification => {
      if (viewedIds.includes(notification.id)) {
        return {
          ...notification,
          isUnread: false
        };
      }
      return notification;
    }));
    setIsOpen(false);
  };
  const handleReadAll = () => {
    setNotifications(prev => prev.map(notification => ({
      ...notification,
      isUnread: false
    })));
  };
  return <>
      <NotificationWidget notificationsCount={notifications.filter(n => n.isUnread).length} onClick={handleClick} />

      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noNotificationsIllustration,
      outdatedReleaseErrorImgSrc: ''
    }}>
        <NotificationList isOpen={isOpen} notifications={notifications} unreadNotifications={unreadNotifications} onClose={handleClose} footerContent={unreadNotifications.length > 0 && <Button variant="light" color="grey" onClick={handleReadAll}>
                Отметить все как прочитанные
              </Button>} />
      </ConfigProvider>
    </>;
}`,...$.parameters?.docs?.source},description:{story:`Если передать unreadNotifications, отображаются табы переключения списка (все/непрочитанные).`,...$.parameters?.docs?.description}}}})))()}var Se,Ce;function we(){return(we=e((()=>{d(),C(),D(),ue(),fe(),me(),I(),B(),ge(),_e(),ve(),be(),xe(),Se={title:`Notifications/NotificationList`,component:f,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1294-174214)`}}}},Ce=[`Interaction`,`Notifications`,`UnreadNotifications`,`Title`,`OnClose`,`Actions`,`HeaderContent`,`FooterContent`,`InitialListType`,`IsLoading`,`IsError`,`IsSettingsButtonVisible`]})))()}we();export{S as Actions,E as FooterContent,A as HeaderContent,M as InitialListType,pe as Interaction,F as IsError,z as IsLoading,H as IsSettingsButtonVisible,G as Notifications,J as OnClose,X as Title,$ as UnreadNotifications,Ce as __namedExportsOrder,Se as default};