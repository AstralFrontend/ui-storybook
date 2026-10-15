import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Bi as t,Ii as n,Pi as r,Va as i,Vi as a,cn as o,dt as ee,ft as te,ji as s,ln as c,mn as l,pn as u,xa as d,yn as ne}from"./preview-BIb1pB2R.js";import{n as f,t as p}from"./Stack-BYA4p2HT.js";import{t as re}from"./TextField-D1f0QafJ.js";import{t as ie}from"./TextField-DZcqDIWI.js";import{t as ae}from"./Paper-BPrDDblc.js";import{t as oe}from"./Paper-5fLfuomh.js";import{a as m,c as h,g as se,h as ce,i as g,l as _,n as v,o as le,s as ue,t as y}from"./NotificationStackContainer-BcNeWghD.js";function b(){return(b=e((()=>{ue()})))()}var x,S;function C(){return(C=e((()=>{a(),r(),x=d(),S=[(e,r)=>{let i=t({key:`prop-like`,prepend:!0});return(0,x.jsx)(n,{value:i,children:(0,x.jsx)(e,{...r})})}]})))()}var w,T;function de(){return(de=e((()=>{f(),oe(),ne(),w=s(ae)`
  padding: ${({theme:e})=>e.spacing(4)};
`,T=s(p)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-top: ${({theme:e})=>e.spacing(50)};
  }
`})))()}function E(){return(E=e((()=>{C(),de()})))()}var D,O;function fe(){return(fe=e((()=>{f(),o(),u(),g(),h(),E(),D=d(),O=()=>(0,D.jsxs)(T,{children:[(0,D.jsx)(_,{containerId:`autoclose`}),(0,D.jsx)(p,{direction:`row`,gap:2,children:(0,D.jsx)(c,{onClick:()=>{m.success(`Идёт загрузка...`,{showCloseButton:!1,autoClose:1e4,icon:(0,D.jsx)(l,{}),containerId:`autoclose`})},children:`Autoclose in 10 sec`})})]}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const handleWithoutCloseButton = () => {
    notify.success('Идёт загрузка...', {
      showCloseButton: false,
      autoClose: 10000,
      icon: <Loader />,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'autoclose'
    });
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="autoclose" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleWithoutCloseButton}>Autoclose in 10 sec</Button>
      </Stack>
    </BasicUsageStack>;
}`,...O.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{f(),o(),ie(),ee(),g(),h(),E(),k=d(),A=()=>(0,k.jsxs)(w,{children:[(0,k.jsx)(_,{containerId:`example`}),(0,k.jsx)(p,{gap:15,children:(0,k.jsxs)(p,{flexDirection:`column`,gap:2,children:[(0,k.jsx)(te,{children:`Введите название поля`}),(0,k.jsx)(re,{}),(0,k.jsx)(c,{onClick:()=>{m.success(`Успешно`,{content:`Поле сохранено`,containerId:`example`})},children:`Сохранить`})]})})]}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const handleSuccessExample = () => {
    notify.success('Успешно', {
      content: 'Поле сохранено',
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'example'
    });
  };
  return <BasicUsagePaper>
      <NotificationContainer containerId="example" />

      <Stack gap={15}>
        <Stack flexDirection="column" gap={2}>
          <Typography>Введите название поля</Typography>
          <TextField />
          <Button onClick={handleSuccessExample}>Сохранить</Button>
        </Stack>
      </Stack>
    </BasicUsagePaper>;
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{f(),o(),g(),h(),E(),M=d(),N=()=>(0,M.jsxs)(T,{children:[(0,M.jsx)(_,{containerId:`content`}),(0,M.jsx)(p,{direction:`row`,gap:2,children:(0,M.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена`,{content:`Все необходимые действия увенчались успехом в ходе обработки.`,actions:(0,M.jsx)(c,{variant:`link`,children:`Подробнее`}),actionsDirection:`right`,containerId:`content`})},children:`With content`})})]}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const handleSuccessWithContent = () => {
    notify.success('Операция успешно завершена', {
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'content'
    });
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="content" />
      <Stack direction="row" gap={2}>
        <Button onClick={handleSuccessWithContent}>With content</Button>
      </Stack>
    </BasicUsageStack>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{f(),o(),g(),h(),E(),F=d(),I=()=>(0,F.jsxs)(T,{children:[(0,F.jsx)(_,{containerId:`hide-progress-bar`}),(0,F.jsx)(p,{direction:`row`,gap:2,children:(0,F.jsx)(c,{onClick:()=>{m.error(`Ошибка`,{content:`Соединение потеряно`,actions:(0,F.jsx)(c,{variant:`link`,children:`Подробнее`}),actionsDirection:`right`,hideProgressBar:!0,containerId:`hide-progress-bar`})},children:`Hide progress bar`})})]}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const handleErrorWithContentWithoutProgressBar = () => {
    notify.error('Ошибка', {
      content: 'Соединение потеряно',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      hideProgressBar: true,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'hide-progress-bar'
    });
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="hide-progress-bar" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleErrorWithContentWithoutProgressBar}>
          Hide progress bar
        </Button>
      </Stack>
    </BasicUsageStack>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{f(),o(),u(),g(),h(),E(),R=d(),z=()=>(0,R.jsxs)(T,{children:[(0,R.jsx)(_,{containerId:`icon`}),(0,R.jsx)(p,{direction:`row`,gap:2,children:(0,R.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена`,{content:`Все необходимые действия увенчались успехом в ходе обработки.`,actions:(0,R.jsx)(c,{variant:`link`,children:`Подробнее`}),actionsDirection:`right`,icon:(0,R.jsx)(l,{}),containerId:`icon`})},children:`With icon`})})]}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const handleSuccessWithIcon = () => {
    notify.success('Операция успешно завершена', {
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right',
      icon: <Loader />,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'icon'
    });
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="icon" />

      <Stack direction="row" gap={2}>
        <Button onClick={handleSuccessWithIcon}>With icon</Button>
      </Stack>
    </BasicUsageStack>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{u(),V=d(),H={args:{content:`Поле сохранено`,showCloseButton:!0,icon:(0,V.jsx)(l,{}),variant:`success`},parameters:{docs:{disable:!0}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Поле сохранено',
    showCloseButton: true,
    icon: <Loader />,
    variant: 'success'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{f(),W=i(),o(),g(),h(),E(),G=d(),K=()=>{let[e,t]=(0,W.useState)(!1),[n,r]=(0,W.useState)(!1),i=(0,W.useMemo)(()=>m.initProgress({containerId:`progress-notify`}),[]),a=(0,W.useMemo)(()=>m.initProgress({containerId:`progress-notify`}),[]);return(0,G.jsxs)(T,{children:[(0,G.jsx)(_,{containerId:`progress-notify`}),(0,G.jsxs)(p,{direction:`row`,gap:2,children:[(0,G.jsxs)(p,{gap:2,children:[(0,G.jsx)(c,{disabled:e,onClick:()=>{i.start(`Подписание документов 1 из 3`,{content:`Подписывается документ №001`}),t(!0)},children:e?`Started...`:`Start sign notify`}),(0,G.jsx)(c,{disabled:!e,onClick:()=>{i.update(`Подписание документов 2 из 3`,{content:`Подписывается документ №002`})},children:`Update notify`}),(0,G.jsx)(c,{disabled:!e,color:`success`,onClick:()=>{i.success(`Документы подписаны`,{content:`3 документа успешно подписано`})},children:`Success notify`}),(0,G.jsx)(c,{disabled:!e,color:`error`,onClick:()=>{i.error(`Ошибка подписания документов`,{content:`Не удалось подписать документы`,actions:(0,G.jsx)(c,{variant:`link`,children:`Подробнее`})})},children:`Error notify`}),(0,G.jsx)(c,{disabled:!e,variant:`light`,onClick:()=>{i.stop(),t(!1)},children:`Сбросить`})]}),(0,G.jsxs)(p,{gap:2,children:[(0,G.jsx)(c,{disabled:n,onClick:()=>{a.start(`Отправка документов 1 из 3`,{content:`Отправляется документ №111`}),r(!0)},children:n?`Started...`:`Start send notify`}),(0,G.jsx)(c,{disabled:!n,onClick:()=>{a.update(`Отправка документов 2 из 3`,{content:`Отправляется документ №112`})},children:`Update notify`}),(0,G.jsx)(c,{disabled:!n,variant:`light`,onClick:()=>{a.stop(),r(!1)},children:`Сбросить`}),(0,G.jsx)(c,{onClick:()=>{m.warning(`Что-то пошло не так`,{containerId:`progress-notify`})},variant:`outlined`,children:`Обычный notify`})]})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [isStartedSign, setStartedSign] = useState(false);
  const [isStartedSend, setStartedSend] = useState(false);
  const progressSignNotify = useMemo(() => notify.initProgress({
    // containerId необходимо для storybook, так как на одном экране несколько контейнеров
    containerId: 'progress-notify'
  }), []);
  const progressSendNotify = useMemo(() => notify.initProgress({
    // containerId необходимо для storybook, так как на одном экране несколько контейнеров
    containerId: 'progress-notify'
  }), []);
  const handleProgressSignNotify = () => {
    progressSignNotify.start('Подписание документов 1 из 3', {
      content: 'Подписывается документ №001'
    });
    setStartedSign(true);
  };
  const handleUpdatesSignNotify = () => {
    progressSignNotify.update('Подписание документов 2 из 3', {
      content: 'Подписывается документ №002'
    });
  };
  const handleSuccessSignNotify = () => {
    progressSignNotify.success('Документы подписаны', {
      content: '3 документа успешно подписано'
    });
  };
  const handleErrorsSignNotify = () => {
    progressSignNotify.error('Ошибка подписания документов', {
      content: 'Не удалось подписать документы',
      actions: <Button variant="link">Подробнее</Button>
    });
  };
  const handleClosesSignNotify = () => {
    progressSignNotify.stop();
    setStartedSign(false);
  };
  const handleProgressNotifySendNotify = () => {
    progressSendNotify.start('Отправка документов 1 из 3', {
      content: 'Отправляется документ №111'
    });
    setStartedSend(true);
  };
  const handleUpdateSendNotify = () => {
    progressSendNotify.update('Отправка документов 2 из 3', {
      content: 'Отправляется документ №112'
    });
  };
  const handleCloseSendNotify = () => {
    progressSendNotify.stop();
    setStartedSend(false);
  };
  const handleWarningNotify = () => {
    notify.warning('Что-то пошло не так', {
      containerId: 'progress-notify'
    });
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="progress-notify" />

      <Stack direction="row" gap={2}>
        <Stack gap={2}>
          <Button disabled={isStartedSign} onClick={handleProgressSignNotify}>
            {!isStartedSign ? 'Start sign notify' : 'Started...'}
          </Button>

          <Button disabled={!isStartedSign} onClick={handleUpdatesSignNotify}>
            Update notify
          </Button>

          <Button disabled={!isStartedSign} color="success" onClick={handleSuccessSignNotify}>
            Success notify
          </Button>

          <Button disabled={!isStartedSign} color="error" onClick={handleErrorsSignNotify}>
            Error notify
          </Button>

          <Button disabled={!isStartedSign} variant="light" onClick={handleClosesSignNotify}>
            Сбросить
          </Button>
        </Stack>

        <Stack gap={2}>
          <Button disabled={isStartedSend} onClick={handleProgressNotifySendNotify}>
            {!isStartedSend ? 'Start send notify' : 'Started...'}
          </Button>

          <Button disabled={!isStartedSend} onClick={handleUpdateSendNotify}>
            Update notify
          </Button>

          <Button disabled={!isStartedSend} variant="light" onClick={handleCloseSendNotify}>
            Сбросить
          </Button>

          <Button onClick={handleWarningNotify} variant="outlined">
            Обычный notify
          </Button>
        </Stack>
      </Stack>
    </BasicUsageStack>;
}`,...K.parameters?.docs?.source},description:{story:"Предназначен для отображения состояния асинхронной операции с массивом элементов, например массовая отправка или подписание документов\n`notify.initProgress` возвращает объект с методами: `start`, `update`, `success`, `error` и `stop`",...K.parameters?.docs?.description}}};try{K.displayName=`ProgressNotify`,K.__docgenInfo={description:"Предназначен для отображения состояния асинхронной операции с массивом элементов, например массовая отправка или подписание документов\n`notify.initProgress` возвращает объект с методами: `start`, `update`, `success`, `error` и `stop`",displayName:`ProgressNotify`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Notification/stories/ProgressNotify.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function pe(){return(pe=e((()=>{f(),o(),g(),y(),E(),J=d(),Y=()=>(0,J.jsxs)(T,{children:[(0,J.jsx)(v,{containerId:`static`,staticContainerId:`static-static`}),(0,J.jsxs)(p,{direction:`column`,gap:2,children:[(0,J.jsx)(c,{onClick:()=>{m.info(`Загрузка завершена`,{containerId:`static-static`,isStatic:!0})},children:`Static notify info`}),(0,J.jsx)(c,{onClick:()=>{m.warning(`Внимание`,{containerId:`static-static`,isStatic:!0})},color:`warning`,children:`Static notify warning`}),(0,J.jsx)(c,{onClick:()=>{m.error(`Соединение потеряно`,{containerId:`static-static`,isStatic:!0})},color:`error`,children:`Static notify error`}),(0,J.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена`,{containerId:`static-static`,isStatic:!0})},color:`success`,children:`Static notify success`})]})]}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      isStatic: true
    });
  };
  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      isStatic: true
    });
  };
  const handleWarning = () => {
    notify.warning('Внимание', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      isStatic: true
    });
  };
  const handleError = () => {
    notify.error('Соединение потеряно', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'static-static',
      isStatic: true
    });
  };
  return <BasicUsageStack>
      <NotificationStackContainer containerId="static" staticContainerId="static-static" />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>Static notify info</Button>

        <Button onClick={handleWarning} color="warning">
          Static notify warning
        </Button>

        <Button onClick={handleError} color="error">
          Static notify error
        </Button>

        <Button onClick={handleSuccess} color="success">
          Static notify success
        </Button>
      </Stack>
    </BasicUsageStack>;
}`,...Y.parameters?.docs?.source}}}})))()}var X,Z;function me(){return(me=e((()=>{f(),o(),g(),h(),E(),X=d(),Z=()=>(0,X.jsxs)(T,{children:[(0,X.jsx)(_,{containerId:`types`}),(0,X.jsxs)(p,{direction:`column`,gap:2,children:[(0,X.jsx)(c,{onClick:()=>{m.info(`Загрузка завершена`,{containerId:`types`})},children:`info`}),(0,X.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена`,{containerId:`types`})},color:`success`,children:`success`}),(0,X.jsx)(c,{onClick:()=>{m.warning(`Внимание`,{containerId:`types`})},color:`warning`,children:`warning`}),(0,X.jsx)(c,{onClick:()=>{m.error(`Соединение потеряно`,{containerId:`types`})},color:`error`,children:`error`}),(0,X.jsx)(c,{onClick:()=>{m.initProgress({containerId:`types`}).start(`Загрузка документов...`)},children:`progress`})]})]}),Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types'
    });
  };
  const handleSuccess = () => {
    notify.success('Операция успешно завершена', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types'
    });
  };
  const handleWarning = () => {
    notify.warning('Внимание', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types'
    });
  };
  const handleError = () => {
    notify.error('Соединение потеряно', {
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'types'
    });
  };
  const handleProgress = () => {
    const progressNotify = notify.initProgress({
      containerId: 'types'
    });
    progressNotify.start('Загрузка документов...');
  };
  return <BasicUsageStack>
      <NotificationContainer containerId="types" />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>info</Button>

        <Button onClick={handleSuccess} color="success">
          success
        </Button>

        <Button onClick={handleWarning} color="warning">
          warning
        </Button>

        <Button onClick={handleError} color="error">
          error
        </Button>

        <Button onClick={handleProgress}>progress</Button>
      </Stack>
    </BasicUsageStack>;
}`,...Z.parameters?.docs?.source}}}})))()}var Q,$;function he(){return(he=e((()=>{f(),o(),se(),g(),y(),E(),Q=d(),$=()=>(0,Q.jsxs)(T,{children:[(0,Q.jsx)(v,{}),(0,Q.jsxs)(p,{direction:`column`,gap:2,children:[(0,Q.jsx)(c,{onClick:()=>{m.info(`Загрузка завершена`)},children:`Notify info`}),(0,Q.jsx)(c,{onClick:()=>{m.warning(`Внимание`)},color:`warning`,children:`Notify warning`}),(0,Q.jsx)(c,{onClick:()=>{m.error(`Соединение потеряно`)},color:`error`,children:`Notify error`}),(0,Q.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена`)},color:`success`,children:`Notify success`}),(0,Q.jsx)(c,{onClick:()=>{m.success(`Операция успешно завершена и заголовок в две строки`,{content:`Все необходимые действия увенчались успехом в ходе обработки.`,actions:(0,Q.jsx)(c,{variant:`link`,children:`Подробнее`}),actionsDirection:`right`})},color:`success`,children:`Notify success with content`}),(0,Q.jsx)(c,{onClick:()=>{let e=m.initProgress({containerId:ce});e.start(`Загрузка документов...`),setTimeout(()=>e.success(`Документы успешно загружены`),3e3)},color:`primary`,children:`Notify progress`})]})]}),$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const handleInfo = () => {
    notify.info('Загрузка завершена');
  };
  const handleSuccess = () => {
    notify.success('Операция успешно завершена');
  };
  const handleWarning = () => {
    notify.warning('Внимание');
  };
  const handleError = () => {
    notify.error('Соединение потеряно');
  };
  const handleProgress = () => {
    const progressNotify = notify.initProgress({
      containerId: NOTIFY_STATIC_CONTAINER_ID
    });
    progressNotify.start('Загрузка документов...');
    setTimeout(() => progressNotify.success('Документы успешно загружены'), 3000);
  };
  const handleSuccessWithContent = () => {
    notify.success('Операция успешно завершена и заголовок в две строки', {
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="link">Подробнее</Button>,
      actionsDirection: 'right'
    });
  };
  return <BasicUsageStack>
      <NotificationStackContainer />

      <Stack direction="column" gap={2}>
        <Button onClick={handleInfo}>Notify info</Button>

        <Button onClick={handleWarning} color="warning">
          Notify warning
        </Button>

        <Button onClick={handleError} color="error">
          Notify error
        </Button>

        <Button onClick={handleSuccess} color="success">
          Notify success
        </Button>

        <Button onClick={handleSuccessWithContent} color="success">
          Notify success with content
        </Button>

        <Button onClick={handleProgress} color="primary">
          Notify progress
        </Button>
      </Stack>
    </BasicUsageStack>;
}`,...$.parameters?.docs?.source}}}})))()}var ge,_e;function ve(){return(ve=e((()=>{b(),fe(),j(),P(),E(),L(),B(),U(),q(),pe(),me(),he(),ge={title:`Notifications/Notification`,component:le,decorators:S,parameters:{docs:{description:{component:`### Компонент для организации уведомлений
В отличии от компонента [LegacyNotification](/story/notifications-legacyNotification--docs) основан на react-toastify 10 версии. Предназначен для использования на проектах с версией React >= 18

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=438-337760)`}}}},_e=[`Interaction`,`BasicUsage`,`Types`,`AutoClose`,`Content`,`Icon`,`HideProgressBar`,`ProgressNotify`,`WithStack`,`Static`]})))()}ve();export{O as AutoClose,A as BasicUsage,N as Content,I as HideProgressBar,z as Icon,H as Interaction,K as ProgressNotify,Y as Static,Z as Types,$ as WithStack,_e as __namedExportsOrder,ge as default};