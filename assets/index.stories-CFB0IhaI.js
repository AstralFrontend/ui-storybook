import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Q as n,Va as r,Z as i,cn as a,it as o,ji as s,ln as c,rt as ee,w as l,xa as u,yn as te}from"./preview-MR7j8bZ5.js";import{i as ne,r as re,t as ie}from"./Badge-BzshcKr5.js";import{t as ae}from"./Badge-ClMfZcuC.js";import{n as oe,t as se}from"./BellOutlineMd-hLaDBs1L.js";import{n as d,t as f}from"./NotificationList-CKw_8yZ0.js";var p,m,h;function ce(){return(ce=e((()=>{p=[{id:`1`,title:`Новое сообщение`,date:`2023-10-30T10:00:00`,text:`У вас новое сообщение от пользователя JohnDoe.`,priority:`ordinary`,isUnread:!0},{id:`2`,title:`Важная информация`,date:`2023-10-30T11:00:00`,text:`Сроки заказа были изменены. Пожалуйста, проверьте и подтвердите.`,priority:`important`,isUnread:!0},{id:`3`,title:`Обновление в личном кабинете`,date:`2023-10-30T12:00:00`,text:`Добавлен раздел Обмен с 1С`,priority:`ordinary`,isUnread:!0},{id:`4`,title:`Приглашение`,date:`2023-10-30T13:00:00`,text:`У вас новый запрос на роуминг`,priority:`important`,isUnread:!0},{id:`5`,title:`Срочное предупреждение`,date:`2023-10-30T16:00:00`,text:`Срочное предупреждение: необходимо изменить пароль к учетной записи.`,priority:`critical`,isUnread:!0},{id:`6`,title:`Изменен статус организации`,date:`2023-10-30T20:00:00`,text:`Организация ООО "Тестовая" подключена к личному кабинету`,priority:`ordinary`,isUnread:!0},{id:`7`,title:`Изменены данные организации`,date:`2023-10-30T21:00:00`,text:`Для организации ООО "Тестовая" изменено краткое наименование.`,priority:`ordinary`,isUnread:!0},{id:`8`,title:`Срок действия вашего сертификата истекает`,date:`2023-10-30T22:00:00`,text:`Срок действия сертификата ЭП для организации ООО "Тестовая" истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.`,priority:`ordinary`,isUnread:!0},{id:`9`,title:`Приглашение`,date:`2023-10-30T13:00:00`,text:`У вас новый запрос на роуминг`,priority:`important`,isUnread:!0},{id:`10`,title:`Срочное предупреждение`,date:`2023-10-30T16:00:00`,text:`Срочное предупреждение: необходимо изменить пароль к учетной записи.`,priority:`critical`,isUnread:!0},{id:`11`,title:`Изменен статус организации`,date:`2023-10-30T20:00:00`,text:`Организация ООО "Тестовая" подключена к личному кабинету`,priority:`ordinary`,isUnread:!0},{id:`12`,title:`Изменены данные организации`,date:`2023-10-30T21:00:00`,text:`Для организации ООО "Тестовая" изменено краткое наименование.`,priority:`ordinary`,isUnread:!0},{id:`13`,title:`Срок действия вашего сертификата истекает`,date:`2023-10-30T22:00:00`,text:`Срок действия сертификата ЭП для организации ООО "Тестовая" истекает через 30 дней. Обновите сертификат для продолжении работы с регистрацией ККТ.`,priority:`ordinary`,isUnread:!0}],m=`../../../../../../../.storybook/public/error.svg`,h=`../../../../../../.storybook/public/no-notifications.svg`})))()}var g,le,_;function v(){return(v=e((()=>{ne(),se(),ae(),ee(),te(),g=u(),le=s(ie)`

  & .${re.badge} {
    cursor: pointer;
  }
`,_=({notificationsCount:e,onClick:t})=>(0,g.jsx)(o,{variant:`text`,color:`grey`,onClick:t,children:(0,g.jsx)(le,{badgeContent:e,color:`error`,variant:`standard`,anchorOrigin:{horizontal:`right`,vertical:`top`},children:(0,g.jsx)(oe,{})})});try{_.displayName=`NotificationWidget`,_.__docgenInfo={description:``,displayName:`NotificationWidget`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,methods:[],props:{notificationsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,name:`TypeLiteral`}],description:``,name:`notificationsCount`,required:!0,tags:{},type:{name:`number`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/common/NotificationWidget.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function y(){return(y=e((()=>{ce(),v()})))()}var b,x,S;function ue(){return(ue=e((()=>{b=r(),a(),l(),d(),y(),x=u(),S=()=>{let[e,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(p.map(e=>e.id===`3`||e.id===`4`?{...e,actions:(0,x.jsx)(c,{variant:`link`,children:`Перейти в раздел`})}:e)),a=r.filter(e=>e.isUnread);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,x.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,x.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},initialListType:a.length>0?`unread`:`all`})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source},description:{story:'В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.',...S.parameters?.docs?.description}}};try{S.displayName=`Actions`,S.__docgenInfo={description:'В свойство ```actions``` типа ```Notification``` можно передавать любые элементы взаимодействия, в этом примере используется ```Button variant="link"```.',displayName:`Actions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/Actions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T;function E(){return(E=e((()=>{C=r(),a(),l(),d(),y(),w=u(),T=()=>{let[e,n]=(0,C.useState)(!1),[r,i]=(0,C.useState)(p),a=r.filter(e=>e.isUnread);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,w.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,w.jsx)(f,{isOpen:e,notifications:r,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},footerContent:(0,w.jsx)(c,{variant:`light`,children:`Кнопка в подвале списка`})})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k;function de(){return(de=e((()=>{D=r(),l(),i(),d(),y(),O=u(),k=()=>{let[e,r]=(0,D.useState)(!1),[i,a]=(0,D.useState)(p),o=i.filter(e=>e.isUnread);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(_,{notificationsCount:o.length,onClick:()=>{r(!0)}}),(0,O.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,O.jsx)(f,{isOpen:e,notifications:i,unreadNotifications:o,onClose:e=>{a(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),r(!1)},initialListType:o.length>0?`unread`:`all`,onSettingsButtonClick:()=>{},headerContent:(0,O.jsx)(n,{label:`Важный тэг`,variant:`contained`,color:`error`})})})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source},description:{story:"- В заголовке используется компонент ```SideDialogHeader```..\n- В ```headerContent``` можно передавать другие компонент. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.",...k.parameters?.docs?.description}}};try{k.displayName=`HeaderContent`,k.__docgenInfo={description:"- В заголовке используется компонент ```SideDialogHeader```..\n- В ```headerContent``` можно передавать другие компонент. Компоненты будут расположены между заголовком и кнопкой настроек или закрытия.",displayName:`HeaderContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/HeaderContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var fe,A,j;function pe(){return(pe=e((()=>{fe=r(),l(),d(),y(),A=u(),j=()=>{let[e,n]=(0,fe.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,A.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,A.jsx)(f,{isOpen:e,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)}})})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:`Определяет, какой список выводить при открытии.`,...j.parameters?.docs?.description}}};try{j.displayName=`InitialListType`,j.__docgenInfo={description:`Определяет, какой список выводить при открытии.`,displayName:`InitialListType`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/InitialListType.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var me;function he(){return(he=e((()=>{y(),me={args:{isOpen:!0,notifications:p,unreadNotifications:p.filter(e=>e.isUnread)},parameters:{docs:{disable:!0}}}})))()}var M,N,P;function F(){return(F=e((()=>{M=r(),l(),d(),y(),N=u(),P=()=>{let[e,n]=(0,M.useState)(!1),[r,i]=(0,M.useState)(!1),[a,o]=(0,M.useState)(``),s=()=>{n(!0),i(!0),o(``),setTimeout(()=>{i(!1),o(`Сообщения не получены`)},1e3)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:s}),(0,N.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,N.jsx)(f,{isOpen:e,isError:!!a,isLoading:r,errorMessage:a,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)},onRetry:s})})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}}})))()}var I,L,R;function z(){return(z=e((()=>{I=r(),l(),d(),y(),L=u(),R=()=>{let[e,n]=(0,I.useState)(!1);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,L.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,L.jsx)(f,{isOpen:e,isLoading:!0,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)}})})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}}})))()}var ge,B,V;function _e(){return(_e=e((()=>{ge=r(),l(),d(),y(),B=u(),V=()=>{let[e,n]=(0,ge.useState)(!1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,B.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,B.jsx)(f,{isOpen:e,notifications:p,unreadNotifications:p.filter(e=>e.isUnread),initialListType:`all`,onClose:()=>{n(!1)},isSettingsButtonVisible:!1})})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source},description:{story:`Управляет отображением кнопки настроек`,...V.parameters?.docs?.description}}};try{V.displayName=`IsSettingsButtonVisible`,V.__docgenInfo={description:`Управляет отображением кнопки настроек`,displayName:`IsSettingsButtonVisible`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/IsSettingsButtonVisible.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U,W;function ve(){return(ve=e((()=>{H=r(),l(),d(),y(),U=u(),W=()=>{let[e,n]=(0,H.useState)(!1),[r,i]=(0,H.useState)(p),a=r.filter(e=>e.isUnread);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,U.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,U.jsx)(f,{isOpen:e,notifications:r,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},onDelete:e=>{i(t=>t.filter(t=>t.id!==e))},initialListType:a.length>0?`unread`:`all`,onSettingsButtonClick:()=>{}})})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}}})))()}var G,K,q;function ye(){return(ye=e((()=>{G=r(),l(),d(),y(),K=u(),q=()=>{let[e,n]=(0,G.useState)(!1),[r,i]=(0,G.useState)(p),a=r.filter(e=>e.isUnread);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(_,{notificationsCount:a.length,onClick:()=>{n(!0)}}),(0,K.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,K.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},initialListType:a.length>0?`unread`:`all`})})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source},description:{story:"В компоненте есть логика прочтения уведомлений, если сообщение полностью попало во viewport, то оно считается прочитанным.\nПри вызове ```onClose``` передаются id уведомлений, которые были прочитаны.",...q.parameters?.docs?.description}}};try{q.displayName=`OnClose`,q.__docgenInfo={description:"В компоненте есть логика прочтения уведомлений, если сообщение полностью попало во viewport, то оно считается прочитанным.\nПри вызове ```onClose``` передаются id уведомлений, которые были прочитаны.",displayName:`OnClose`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/OnClose.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y,X;function be(){return(be=e((()=>{J=r(),l(),d(),y(),Y=u(),X=()=>{let[e,n]=(0,J.useState)(!1);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(_,{notificationsCount:p.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,Y.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,Y.jsx)(f,{isOpen:e,notifications:p,onClose:()=>{n(!1)},title:`Сообщения`})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}}})))()}var Z,Q,$;function xe(){return(xe=e((()=>{Z=r(),a(),l(),d(),y(),Q=u(),$=()=>{let[e,n]=(0,Z.useState)(!1),[r,i]=(0,Z.useState)(p),a=r.filter(e=>e.isUnread);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(_,{notificationsCount:r.filter(e=>e.isUnread).length,onClick:()=>{n(!0)}}),(0,Q.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,Q.jsx)(f,{isOpen:e,notifications:r,unreadNotifications:a,onClose:e=>{i(t=>t.map(t=>e.includes(t.id)?{...t,isUnread:!1}:t)),n(!1)},footerContent:a.length>0&&(0,Q.jsx)(c,{variant:`light`,color:`grey`,onClick:()=>{i(e=>e.map(e=>({...e,isUnread:!1})))},children:`Отметить все как прочитанные`})})})]})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source},description:{story:`Если передать unreadNotifications, отображаются табы переключения списка (все/непрочитанные).`,...$.parameters?.docs?.description}}};try{$.displayName=`UnreadNotifications`,$.__docgenInfo={description:`Если передать unreadNotifications, отображаются табы переключения списка (все/непрочитанные).`,displayName:`UnreadNotifications`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NotificationList/stories/UnreadNotifications.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Se,Ce;function we(){return(we=e((()=>{d(),ue(),E(),de(),pe(),he(),F(),z(),_e(),ve(),ye(),be(),xe(),Se={title:`Notifications/NotificationList`,component:f,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1294-174214)`}}}},Ce=[`Interaction`,`Notifications`,`UnreadNotifications`,`Title`,`OnClose`,`Actions`,`HeaderContent`,`FooterContent`,`InitialListType`,`IsLoading`,`IsError`,`IsSettingsButtonVisible`]})))()}we();export{S as Actions,T as FooterContent,k as HeaderContent,j as InitialListType,me as Interaction,P as IsError,R as IsLoading,V as IsSettingsButtonVisible,W as Notifications,q as OnClose,X as Title,$ as UnreadNotifications,Ce as __namedExportsOrder,Se as default};