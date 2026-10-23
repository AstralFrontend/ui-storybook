import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Xt as t,cn as n,dt as r,en as i,ft as a,it as o,ji as s,ln as c,rt as l,ya as u,yn as d,za as f}from"./preview-BXnWBjdd.js";import{n as ee,t as te}from"./useViewportType-CiMYUal8.js";import{i as ne,r as re,t as ie}from"./ToggleButton-BQymH9HB.js";import{s as ae,t as oe}from"./DataGrid-CNZl6xnQ.js";import{t as se}from"./Tooltip-CiOMwZ3Y.js";import{t as ce}from"./Tooltip-DJjvEX_V.js";import{t as le}from"./TextField-DOTfs6ZV.js";import{t as ue}from"./Dialog-Du5pNf_u.js";import{n as de,o as fe,s as pe,t as me}from"./DialogContent-CWMpKYRP.js";import{t as he}from"./TextField-Bl-o1fhb.js";import{t as ge}from"./Alert-CfPT-AcU.js";import{t as _e}from"./Alert-Dnvk09pv.js";import{t as ve}from"./Dialog-DFgRvCMS.js";import{n as ye,t as be}from"./DotsVOutlineMd-2iEGxZcx.js";import{t as xe}from"./ToggleButton-CY8OWwiM.js";import{a as p,i as m,n as h,t as g}from"./OnboardingContainer-CCoBtve9.js";import{n as Se,t as Ce}from"./SendOutlineMd-B79OMJ_9.js";var we,_;function Te(){return(Te=e((()=>{we={save:()=>{},load:()=>null},_=()=>we})))()}var Ee,v,y,De,Oe;function ke(){return(ke=e((()=>{d(),Ee=s.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};

  height: 100vh;
  padding: ${({theme:e})=>e.spacing(4)};

  /* Причина игнора: Прогрессивное улучшение */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  /* stylelint-enable plugin/no-unsupported-browser-features */

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: ${({theme:e})=>e.spacing(2,3)};
  }
`,v=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(1)};
`,y=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  max-width: 480px;
  padding: ${({theme:e})=>e.spacing(2,3)};

  background: ${({theme:e})=>e.palette.background.paper};
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};
`,De=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};

  max-width: 480px;
  padding: ${({theme:e})=>e.spacing(4)};
`,Oe=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;
  justify-content: space-between;
`})))()}var Ae,je;function Me(){return(Me=e((()=>{ke(),Ae=u(),je=({children:e})=>(0,Ae.jsx)(Ee,{children:e});try{je.displayName=`PageWrapper`,je.__docgenInfo={description:``,displayName:`PageWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/common/PageWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/common/PageWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function b(){return(b=e((()=>{Te(),Me(),ke()})))()}var x,S,Ne,Pe,Fe,C;function Ie(){return(Ie=e((()=>{x=f(),n(),d(),r(),p(),g(),b(),S=u(),Ne=({onResume:e})=>(0,S.jsxs)(y,{children:[(0,S.jsxs)(a,{variant:`body1`,color:`textSecondary`,children:[`Тур на паузе (`,(0,S.jsx)(`code`,{children:`waitForResume: true`}),`): шаг не отрисовывается до вызова `,(0,S.jsx)(`code`,{children:`tour.resume()`}),`.`]}),(0,S.jsx)(c,{variant:`outlined`,onClick:e,children:`Возобновить тур`})]}),Pe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  max-width: 400px;
  padding: ${({theme:e})=>e.spacing(3)};

  border: 1px solid ${({theme:e})=>e.palette.primary.main};
  border-radius: ${({theme:e})=>e.spacing(1)};
`,Fe=()=>(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{variant:`h6`,children:`Электронная подпись`}),(0,S.jsx)(a,{color:`textSecondary`,children:`Подписант: Иванов О.В. · Статус: ожидает подписи`}),(0,S.jsx)(c,{variant:`outlined`,children:`Подписать`})]}),C=()=>{let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(!1),[i]=(0,x.useState)(()=>m({saveStrategy:_})),[o]=(0,x.useState)(()=>i.createTour({name:`waitResumeDemo`,steps:[{name:`intro`,type:`standalone`,title:`Подпись документов`,content:`Следующий шаг подсветит панель подписи. Нажмите «Далее» — тур встанет на паузу, пока вы не загрузите панель и не возобновите тур.`,isPrevButtonVisible:!1,onNextClick:()=>r(!0)},{name:`signPanel`,type:`highlight`,title:`Панель электронной подписи`,content:`Здесь отображается статус подписи и кнопки для подписания или отклонения документа.`,position:`right`,waitForResume:!0},{name:`done`,type:`standalone`,title:`Готово!`,content:`Тур успешно продолжился после того, как панель подписи появилась на странице.`,isPrevButtonVisible:!1,isNextButtonVisible:!1}]}));return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h,{onboarding:i}),(0,S.jsx)(a,{variant:`h5`,children:`Договор поставки №1234`}),(0,S.jsx)(v,{children:(0,S.jsx)(c,{onClick:()=>o.start(),children:`Начать тур`})}),n&&(0,S.jsx)(Ne,{onResume:()=>{t(!0),r(!1),o.resume()}}),e&&(0,S.jsx)(Pe,{...o.steps.signPanel.getHighlightProps(),children:(0,S.jsx)(Fe,{})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [panelVisible, setPanelVisible] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'waitResumeDemo',
    steps: [{
      name: 'intro',
      type: 'standalone',
      title: 'Подпись документов',
      content: 'Следующий шаг подсветит панель подписи. Нажмите «Далее» — тур встанет на паузу, пока вы не загрузите панель и не возобновите тур.',
      isPrevButtonVisible: false,
      onNextClick: () => setIsWaiting(true)
    }, {
      name: 'signPanel',
      type: 'highlight',
      title: 'Панель электронной подписи',
      content: 'Здесь отображается статус подписи и кнопки для подписания или отклонения документа.',
      position: 'right',
      waitForResume: true
    }, {
      name: 'done',
      type: 'standalone',
      title: 'Готово!',
      content: 'Тур успешно продолжился после того, как панель подписи появилась на странице.',
      isPrevButtonVisible: false,
      isNextButtonVisible: false
    }]
  }));
  const handleShowPanel = () => {
    setPanelVisible(true);
    setIsWaiting(false);
    tour.resume();
  };
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Typography variant="h5">Договор поставки №1234</Typography>
      <Actions>
        <Button onClick={() => tour.start()}>Начать тур</Button>
      </Actions>

      {isWaiting && <WaitingCard onResume={handleShowPanel} />}

      {panelVisible && <SignPanel {...tour.steps.signPanel.getHighlightProps()}>
          <SignPanelContent />
        </SignPanel>}
    </>;
}`,...C.parameters?.docs?.source},description:{story:"Шаг с `waitForResume: true` приостанавливает тур: пока не будет явно вызван\n`tour.resume()`, шаг не отрисовывается. Это нужно, когда целевой элемент\nподгружается асинхронно — `resume()` вызывают после его появления.",...C.parameters?.docs?.description}}};try{C.displayName=`AwaitAsyncTarget`,C.__docgenInfo={description:"Шаг с `waitForResume: true` приостанавливает тур: пока не будет явно вызван\n`tour.resume()`, шаг не отрисовывается. Это нужно, когда целевой элемент\nподгружается асинхронно — `resume()` вызывают после его появления.",displayName:`AwaitAsyncTarget`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/AwaitAsyncTarget.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,Le,Re,ze,Be,Ve,He,E;function Ue(){return(Ue=e((()=>{w=f(),be(),Ce(),n(),oe(),ve(),fe(),me(),l(),d(),he(),ce(),r(),te(),p(),g(),b(),T=u(),Le=[{id:`1`,name:`Договор поставки №1234`,counterparty:`ООО "Первый завод"`,date:`12.04.2025`},{id:`2`,name:`Счёт-фактура №5678`,counterparty:`ИП Иванов О.В.`,date:`15.04.2025`},{id:`3`,name:`Акт сверки №9012`,counterparty:`ЗАО "Торговый дом"`,date:`20.04.2025`}],Re=s.div`
  display: inline-flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(3)};

    width: 100%;
  }
`,ze=s(c)`
  width: 100%;
`,Be=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};
`,Ve=({sendProps:e,menuProps:t})=>{let{isMobile:n}=ee();return(0,T.jsxs)(Re,{children:[n?(0,T.jsx)(ze,{...e,children:`Отправить`}):(0,T.jsx)(o,{...e,variant:`text`,children:(0,T.jsx)(Se,{})}),(0,T.jsx)(o,{...t,variant:`text`,children:(0,T.jsx)(ye,{})})]})},He=(e,t)=>{let[{id:n}]=Le,r={[n]:e.getHighlightProps()},i={[n]:t.getHighlightProps()};return[{field:`name`,label:`Наименование документа`,minWidth:`200px`},{field:`counterparty`,label:`Контрагент`,minWidth:`150px`},{field:`date`,label:`Дата создания`,width:`120px`,minWidth:`120px`},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,T.jsx)(Ve,{sendProps:r[e.id],menuProps:i[e.id]})}]},E=()=>{let[e,t]=(0,w.useState)(!1),[n,r]=(0,w.useState)(!1),i=()=>{l.getState().then(e=>r(!!e?.isDismissed))},o=async()=>{await l.resetProgress(),r(!1)},[s]=(0,w.useState)(()=>m()),[l]=(0,w.useState)(()=>s.createTour({name:`edoIntro`,onClose:i,steps:[{name:`welcome`,type:`standalone`,title:`Добро пожаловать в систему ЭДО`,content:`Этот тур покажет основные возможности: как отправлять документы, искать их по фильтрам и использовать дополнительные действия.`,isPrevButtonVisible:!1},{name:`rowActions`,type:`highlight`,title:`Быстрые действия`,content:`Основные операции по документу доступны прямо в строке — отправить или подписать.`,position:`left`},{name:`secondaryAction`,type:`highlight`,title:`Дополнительные действия`,content:`Меню «⋮» скрывает редкие операции: скачать, переотправить, удалить.`,position:`left`},{name:`openFilter`,type:`highlight`,title:`Фильтрация документов`,content:`Нажмите «Далее» — откроется панель фильтров для поиска по контрагенту и дате.`,position:`bottom`,onNextClick:()=>t(!0)},{name:`filterCounterparty`,type:`highlight`,title:`Поиск по контрагенту`,content:`Введите наименование или ИНН контрагента, чтобы найти нужные документы.`,position:`right`,onPrevClick:()=>t(!1)},{name:`filterDate`,type:`highlight`,content:`Укажите диапазон дат для фильтрации по дате создания документа.`,position:`right`,onNextClick:()=>t(!1)},{name:`final`,type:`standalone`,title:`Обучение завершено!`,content:`Теперь вы знаете основные возможности раздела «Документы». При необходимости тур можно запустить повторно.`,isPrevButtonVisible:!1}]}));(0,w.useEffect)(i,[l]);let u=He(l.steps.rowActions,l.steps.secondaryAction);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{onboarding:s}),(0,T.jsxs)(Oe,{children:[(0,T.jsx)(a,{variant:`h5`,children:`Входящие документы`}),(0,T.jsxs)(v,{children:[(0,T.jsx)(c,{variant:`text`,...l.steps.openFilter.getHighlightProps(),onClick:()=>t(!0),children:`Фильтры`}),(0,T.jsx)(se,{title:n&&`Обучение уже было завершено. Нажмите «Сбросить», чтобы снова запустить Обучение.`,withoutContainer:!n,children:(0,T.jsx)(c,{disabled:n,onClick:()=>l.start(),children:`Начать обучение`})}),(0,T.jsx)(c,{variant:`outlined`,onClick:o,children:`Сбросить`})]})]}),(0,T.jsx)(ae,{keyId:`id`,rows:Le,columns:u,onRetry:()=>{}}),(0,T.jsxs)(ue,{open:e,title:`Фильтры`,onClose:()=>t(!1),children:[(0,T.jsx)(de,{children:(0,T.jsxs)(Be,{children:[(0,T.jsx)(le,{...l.steps.filterCounterparty.getHighlightProps(),label:`Контрагент`,placeholder:`ИНН или наименование`,fullWidth:!0}),(0,T.jsx)(le,{...l.steps.filterDate.getHighlightProps(),label:`Период создания`,placeholder:`дд.мм.гггг — дд.мм.гггг`,fullWidth:!0})]})}),(0,T.jsxs)(pe,{children:[(0,T.jsx)(c,{variant:`text`,onClick:()=>t(!1),children:`Сбросить`}),(0,T.jsx)(c,{onClick:()=>t(!1),children:`Применить`})]})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const handleClose = () => {
    tour.getState().then(state => setIsDismissed(Boolean(state?.isDismissed)));
  };
  const handleReset = async () => {
    await tour.resetProgress();
    setIsDismissed(false);
  };
  const [onboarding] = useState(() => createOnboarding());
  const [tour] = useState(() => onboarding.createTour({
    name: 'edoIntro',
    onClose: handleClose,
    steps: [{
      name: 'welcome',
      type: 'standalone',
      title: 'Добро пожаловать в систему ЭДО',
      content: 'Этот тур покажет основные возможности: как отправлять документы, искать их по фильтрам и использовать дополнительные действия.',
      isPrevButtonVisible: false
    }, {
      name: 'rowActions',
      type: 'highlight',
      title: 'Быстрые действия',
      content: 'Основные операции по документу доступны прямо в строке — отправить или подписать.',
      position: 'left'
    }, {
      name: 'secondaryAction',
      type: 'highlight',
      title: 'Дополнительные действия',
      content: 'Меню «⋮» скрывает редкие операции: скачать, переотправить, удалить.',
      position: 'left'
    }, {
      name: 'openFilter',
      type: 'highlight',
      title: 'Фильтрация документов',
      content: 'Нажмите «Далее» — откроется панель фильтров для поиска по контрагенту и дате.',
      position: 'bottom',
      onNextClick: () => setFilterOpen(true)
    }, {
      name: 'filterCounterparty',
      type: 'highlight',
      title: 'Поиск по контрагенту',
      content: 'Введите наименование или ИНН контрагента, чтобы найти нужные документы.',
      position: 'right',
      onPrevClick: () => setFilterOpen(false)
    }, {
      // Шаг без заголовка: popover отрисовывается без header, крестик закрытия
      // остаётся в правом верхнем углу.
      name: 'filterDate',
      type: 'highlight',
      content: 'Укажите диапазон дат для фильтрации по дате создания документа.',
      position: 'right',
      onNextClick: () => setFilterOpen(false)
    }, {
      name: 'final',
      type: 'standalone',
      title: 'Обучение завершено!',
      content: 'Теперь вы знаете основные возможности раздела «Документы». При необходимости тур можно запустить повторно.',
      isPrevButtonVisible: false
    }]
  }));
  useEffect(handleClose, [tour]);
  const columns = buildColumns(tour.steps.rowActions, tour.steps.secondaryAction);
  return <>
      <OnboardingContainer onboarding={onboarding} />

      <Toolbar>
        <Typography variant="h5">Входящие документы</Typography>
        <Actions>
          <Button variant="text" {...tour.steps.openFilter.getHighlightProps()} onClick={() => setFilterOpen(true)}>
            Фильтры
          </Button>
          <Tooltip title={isDismissed && 'Обучение уже было завершено. Нажмите «Сбросить», чтобы снова запустить Обучение.'} withoutContainer={!isDismissed}>
            <Button disabled={isDismissed} onClick={() => tour.start()}>
              Начать обучение
            </Button>
          </Tooltip>
          <Button variant="outlined" onClick={handleReset}>
            Сбросить
          </Button>
        </Actions>
      </Toolbar>

      <DataGrid<DocumentRow> keyId="id" rows={ROWS} columns={columns} onRetry={() => {}} />

      <Dialog open={filterOpen} title="Фильтры" onClose={() => setFilterOpen(false)}>
        <DialogContent>
          <FilterFields>
            <TextField {...tour.steps.filterCounterparty.getHighlightProps()} label="Контрагент" placeholder="ИНН или наименование" fullWidth />
            <TextField {...tour.steps.filterDate.getHighlightProps()} label="Период создания" placeholder="дд.мм.гггг — дд.мм.гггг" fullWidth />
          </FilterFields>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setFilterOpen(false)}>
            Сбросить
          </Button>
          <Button onClick={() => setFilterOpen(false)}>Применить</Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...E.parameters?.docs?.source}}}})))()}var We,D,Ge,O;function Ke(){return(Ke=e((()=>{We=f(),n(),r(),p(),g(),b(),D=u(),Ge=()=>(0,D.jsxs)(y,{children:[(0,D.jsx)(a,{variant:`body1`,children:`Запустите тур и следите за кнопками внизу шага:`}),(0,D.jsx)(a,{variant:`body1`,color:`textSecondary`,children:`prevLabel → «Вернуться», nextLabel → «Продолжить», finishLabel → «Готово» (на последнем шаге, variant=text).`})]}),O=()=>{let[e]=(0,We.useState)(()=>m({saveStrategy:_})),[t]=(0,We.useState)(()=>e.createTour({name:`navigationButtons`,isCounterVisible:!1,isDotsVisible:!1,buttons:{prevLabel:`Вернуться`,nextLabel:`Продолжить`,finishLabel:`Готово`,finishVariant:`text`},steps:[{name:`step1`,type:`standalone`,title:`Шаг 1 из 3`,content:`Справа внизу — кнопка вперёд с подписью nextLabel: «Продолжить».`,isPrevButtonVisible:!1},{name:`step2`,type:`standalone`,title:`Шаг 2 из 3`,content:`Слева — prevLabel: «Вернуться», справа — nextLabel: «Продолжить». Обе подписи заданы в buttons.`},{name:`step3`,type:`standalone`,title:`Шаг 3 из 3`,content:`Последний шаг — правая кнопка теперь finishLabel: «Готово» и в variant=text.`}]}));return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h,{onboarding:e}),(0,D.jsx)(a,{variant:`h5`,children:`Кнопки навигации`}),(0,D.jsx)(Ge,{}),(0,D.jsx)(v,{children:(0,D.jsx)(c,{variant:`outlined`,onClick:()=>t.start(),children:`Запустить тур`})})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'navigationButtons',
    isCounterVisible: false,
    isDotsVisible: false,
    buttons: {
      prevLabel: 'Вернуться',
      nextLabel: 'Продолжить',
      finishLabel: 'Готово',
      finishVariant: 'text'
    },
    steps: [{
      name: 'step1',
      type: 'standalone',
      title: 'Шаг 1 из 3',
      // На первом шаге «Назад» скрыт, поэтому виден только next.
      content: 'Справа внизу — кнопка вперёд с подписью nextLabel: «Продолжить».',
      isPrevButtonVisible: false
    }, {
      name: 'step2',
      type: 'standalone',
      title: 'Шаг 2 из 3',
      content: 'Слева — prevLabel: «Вернуться», справа — nextLabel: «Продолжить». Обе подписи заданы в buttons.'
    }, {
      name: 'step3',
      type: 'standalone',
      title: 'Шаг 3 из 3',
      // Последний шаг: next превращается в завершающую кнопку finish, а
      // finishVariant делает её текстовой вместо contained по умолчанию.
      content: 'Последний шаг — правая кнопка теперь finishLabel: «Готово» и в variant=text.'
    }]
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Typography variant="h5">Кнопки навигации</Typography>
      <Description />
      <Actions>
        <Button variant="outlined" onClick={() => tour.start()}>
          Запустить тур
        </Button>
      </Actions>
    </>;
}`,...O.parameters?.docs?.source},description:{story:"`buttons` — настройки кнопок навигации внизу шага: `prevLabel` (назад),\n`nextLabel` (вперёд), `finishLabel` (завершение на последнем шаге) и\n`finishVariant` — вариант завершающей кнопки.",...O.parameters?.docs?.description}}};try{O.displayName=`NavigationButtons`,O.__docgenInfo={description:"`buttons` — настройки кнопок навигации внизу шага: `prevLabel` (назад),\n`nextLabel` (вперёд), `finishLabel` (завершение на последнем шаге) и\n`finishVariant` — вариант завершающей кнопки.",displayName:`NavigationButtons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/NavigationButtons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var qe,k,Je,Ye,A;function Xe(){return(Xe=e((()=>{qe=f(),n(),d(),r(),p(),g(),b(),k=u(),Je=()=>(0,k.jsx)(a,{color:`textSecondary`,children:`Тур пройдёт по четырём элементам, демонстрируя каждую позицию popover.`}),Ye=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing(12)};

  max-width: 600px;
  padding: ${({theme:e})=>e.spacing(12,4)};
  margin: 0 auto;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
    padding: ${({theme:e})=>e.spacing(4,0)};
    gap: ${({theme:e})=>e.spacing(4)};
    align-content: space-between;

    min-height: 0;
  }
`,A=()=>{let[e]=(0,qe.useState)(()=>m({saveStrategy:_})),[t]=(0,qe.useState)(()=>e.createTour({name:`positionDemo`,steps:[{name:`posBottom`,type:`highlight`,title:`position: "bottom"`,content:`Popover открывается под элементом. Значение по умолчанию.`,position:`bottom`},{name:`posRight`,type:`highlight`,title:`position: "right"`,content:`Popover открывается справа от элемента.`,position:`right`},{name:`posTop`,type:`highlight`,title:`position: "top"`,content:`Popover открывается над элементом.`,position:`top`},{name:`posLeft`,type:`highlight`,title:`position: "left"`,content:`Popover открывается слева от элемента.`,position:`left`}]}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(h,{onboarding:e}),(0,k.jsx)(v,{children:(0,k.jsx)(c,{onClick:()=>t.start(),children:`Запустить тур`})}),(0,k.jsx)(Je,{}),(0,k.jsxs)(Ye,{children:[(0,k.jsx)(c,{...t.steps.posBottom.getHighlightProps(),children:`bottom`}),(0,k.jsx)(c,{...t.steps.posRight.getHighlightProps(),children:`right`}),(0,k.jsx)(c,{...t.steps.posTop.getHighlightProps(),children:`top`}),(0,k.jsx)(c,{...t.steps.posLeft.getHighlightProps(),children:`left`})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'positionDemo',
    steps: [{
      name: 'posBottom',
      type: 'highlight',
      title: 'position: "bottom"',
      content: 'Popover открывается под элементом. Значение по умолчанию.',
      position: 'bottom'
    }, {
      name: 'posRight',
      type: 'highlight',
      title: 'position: "right"',
      content: 'Popover открывается справа от элемента.',
      position: 'right'
    }, {
      name: 'posTop',
      type: 'highlight',
      title: 'position: "top"',
      content: 'Popover открывается над элементом.',
      position: 'top'
    }, {
      name: 'posLeft',
      type: 'highlight',
      title: 'position: "left"',
      content: 'Popover открывается слева от элемента.',
      position: 'left'
    }]
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Actions>
        <Button onClick={() => tour.start()}>Запустить тур</Button>
      </Actions>
      <Description />

      <PositionGrid>
        <Button {...tour.steps.posBottom.getHighlightProps()}>bottom</Button>
        <Button {...tour.steps.posRight.getHighlightProps()}>right</Button>
        <Button {...tour.steps.posTop.getHighlightProps()}>top</Button>
        <Button {...tour.steps.posLeft.getHighlightProps()}>left</Button>
      </PositionGrid>
    </>;
}`,...A.parameters?.docs?.source},description:{story:"`position` задаёт желаемую сторону, с которой popover открывается относительно\nподсвечиваемого элемента: `top`, `bottom`, `left` или `right`. По умолчанию — `bottom`",...A.parameters?.docs?.description}}};try{A.displayName=`PopoverPosition`,A.__docgenInfo={description:"`position` задаёт желаемую сторону, с которой popover открывается относительно\nподсвечиваемого элемента: `top`, `bottom`, `left` или `right`. По умолчанию — `bottom`",displayName:`PopoverPosition`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/PopoverPosition.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ze,j,Qe,$e,et,tt,nt,rt,it,M;function at(){return(at=e((()=>{Ze=f(),n(),d(),r(),p(),g(),b(),j=u(),Qe=[`ООО "Первый завод"`,`ИП Сидоров К.М.`,`ЗАО "Торговый дом"`],$e=Array.from({length:19},(e,t)=>({id:String(t+1),name:`Договор поставки №${2e3+t}`,counterparty:Qe[t%Qe.length]})),et={id:`new`,name:`Акт сверки №2077 (новый)`,counterparty:`ООО "Первый завод"`},tt=s.div`
  overflow: auto;

  max-height: 320px;
  padding: ${({theme:e})=>e.spacing(1)};

  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex: 1;

    min-height: 0;
    max-height: none;
  }
`,nt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`,rt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  padding: ${({theme:e})=>e.spacing(2,2)};

  background: ${({theme:e})=>e.palette.background.paper};
  border: 1px solid
    ${({theme:e,$highlighted:t})=>t?e.palette.primary.main:e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};
`,it=({name:e,counterparty:t})=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a,{children:e}),(0,j.jsx)(a,{variant:`caption`,color:`textSecondary`,children:t})]}),M=()=>{let[e]=(0,Ze.useState)(()=>m({saveStrategy:_})),[t]=(0,Ze.useState)(()=>e.createTour({name:`scrollDemo`,steps:[{name:`targetRow`,type:`highlight`,title:`Новый документ от контрагента`,content:`Тур автоматически прокрутил страницу к этой строке — даже если она находилась за пределами экрана.`,position:`top`,isNextButtonVisible:!1}]}));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(h,{onboarding:e}),(0,j.jsxs)(Oe,{children:[(0,j.jsx)(a,{variant:`h5`,children:`Входящие документы (20 строк)`}),(0,j.jsx)(c,{onClick:()=>t.start(),children:`Перейти к новому документу`})]}),(0,j.jsx)(tt,{children:(0,j.jsxs)(nt,{children:[$e.map(e=>(0,j.jsx)(rt,{children:(0,j.jsx)(it,{name:e.name,counterparty:e.counterparty})},e.id)),(0,j.jsx)(rt,{$highlighted:!0,...t.steps.targetRow.getHighlightProps(),children:(0,j.jsx)(it,{name:et.name,counterparty:et.counterparty})})]})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'scrollDemo',
    steps: [{
      name: 'targetRow',
      type: 'highlight',
      title: 'Новый документ от контрагента',
      content: 'Тур автоматически прокрутил страницу к этой строке — даже если она находилась за пределами экрана.',
      position: 'top',
      isNextButtonVisible: false
    }]
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />

      <Toolbar>
        <Typography variant="h5">Входящие документы (20 строк)</Typography>
        <Button onClick={() => tour.start()}>Перейти к новому документу</Button>
      </Toolbar>

      <ScrollArea>
        <DocList>
          {PRECEDING_DOCS.map(doc => <DocRow key={doc.id}>
              <DocRowContent name={doc.name} counterparty={doc.counterparty} />
            </DocRow>)}

          <DocRow $highlighted {...tour.steps.targetRow.getHighlightProps()}>
            <DocRowContent name={TARGET_DOC.name} counterparty={TARGET_DOC.counterparty} />
          </DocRow>
        </DocList>
      </ScrollArea>
    </>;
}`,...M.parameters?.docs?.source},description:{story:"Тур автоматически прокручивает ближайший прокручиваемый контейнер к\nподсвечиваемому элементу браузерным `scrollIntoView`.",...M.parameters?.docs?.description}}};try{M.displayName=`ScrollIntoView`,M.__docgenInfo={description:"Тур автоматически прокручивает ближайший прокручиваемый контейнер к\nподсвечиваемому элементу браузерным `scrollIntoView`.",displayName:`ScrollIntoView`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/ScrollIntoView.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ot,N,st,ct,lt,ut,dt,ft,pt,mt,P;function ht(){return(ht=e((()=>{ot=f(),n(),t(),d(),r(),p(),g(),b(),N=u(),st=()=>(0,N.jsxs)(a,{color:`textSecondary`,children:[`Во время второго шага кликайте на документы — содержимое подсказки обновится через `,(0,N.jsx)(`code`,{children:`setTitle`}),` / `,(0,N.jsx)(`code`,{children:`setContent`}),`.`]}),ct=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({theme:e})=>e.spacing(3)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
  }
`,lt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`,ut=s.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  padding: ${({theme:e})=>e.spacing(2,2)};

  background: ${({theme:e,$active:t})=>t?`${e.palette.primary.light}1a`:e.palette.background.paper};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.palette.primary.main:e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};

  ${i} {
    &:hover {
      border-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`,dt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  padding: ${({theme:e})=>e.spacing(2,3)};

  background: ${({theme:e})=>e.palette.background.paper};
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};
`,ft=({doc:e})=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a,{variant:`body1`,children:e.name}),(0,N.jsx)(a,{variant:`caption`,color:`textSecondary`,children:e.counterparty})]}),pt=({selected:e})=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a,{variant:`h6`,children:`Детали документа`}),e?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a,{children:e.name}),(0,N.jsx)(a,{color:`textSecondary`,children:e.counterparty}),(0,N.jsxs)(a,{color:`textSecondary`,children:[`Дата: `,e.date]})]}):(0,N.jsx)(a,{color:`textSecondary`,children:`Выберите документ из списка`})]}),mt=[{id:`1`,name:`Договор поставки №1234`,counterparty:`ООО "Первый завод"`,date:`12.04.2025`},{id:`2`,name:`Счёт-фактура №5678`,counterparty:`ИП Иванов О.В.`,date:`15.04.2025`},{id:`3`,name:`Акт сверки №9012`,counterparty:`ЗАО "Торговый дом"`,date:`20.04.2025`}],P=()=>{let[e,t]=(0,ot.useState)(null),[n]=(0,ot.useState)(()=>m({saveStrategy:_})),[r]=(0,ot.useState)(()=>n.createTour({name:`dynamicContentDemo`,steps:[{name:`intro`,type:`standalone`,title:`Просмотр документа`,content:`Нажмите «Далее», затем кликните на любой документ в списке — подсказка обновится деталями выбранного документа.`,isPrevButtonVisible:!1},{name:`docPreview`,type:`highlight`,title:`Детали документа`,content:`Выберите документ из списка слева.`,position:`right`}]})),i=e=>{t(e.id),r.steps.docPreview.setTitle(e.name),r.steps.docPreview.setContent(`Контрагент: ${e.counterparty} · Дата: ${e.date}`)},o=mt.find(t=>t.id===e)??null;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(h,{onboarding:n}),(0,N.jsx)(v,{children:(0,N.jsx)(c,{onClick:()=>r.start(),children:`Начать тур`})}),(0,N.jsx)(st,{}),(0,N.jsxs)(ct,{children:[(0,N.jsxs)(lt,{children:[(0,N.jsx)(a,{variant:`h6`,children:`Входящие документы`}),mt.map(t=>(0,N.jsx)(ut,{$active:t.id===e,onClick:()=>i(t),children:(0,N.jsx)(ft,{doc:t})},t.id))]}),(0,N.jsx)(dt,{...r.steps.docPreview.getHighlightProps(),children:(0,N.jsx)(pt,{selected:o})})]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'dynamicContentDemo',
    steps: [{
      name: 'intro',
      type: 'standalone',
      title: 'Просмотр документа',
      content: 'Нажмите «Далее», затем кликните на любой документ в списке — подсказка обновится деталями выбранного документа.',
      isPrevButtonVisible: false
    }, {
      name: 'docPreview',
      type: 'highlight',
      title: 'Детали документа',
      content: 'Выберите документ из списка слева.',
      position: 'right'
    }]
  }));
  const handleSelect = (doc: Document) => {
    setSelectedId(doc.id);
    tour.steps.docPreview.setTitle(doc.name);
    tour.steps.docPreview.setContent(\`Контрагент: \${doc.counterparty} · Дата: \${doc.date}\`);
  };
  const selected = DOCUMENTS.find(d => d.id === selectedId) ?? null;
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Actions>
        <Button onClick={() => tour.start()}>Начать тур</Button>
      </Actions>
      <Description />

      <Layout>
        <DocList>
          <Typography variant="h6">Входящие документы</Typography>
          {DOCUMENTS.map(doc => <DocItem key={doc.id} $active={doc.id === selectedId} onClick={() => handleSelect(doc)}>
              <DocItemContent doc={doc} />
            </DocItem>)}
        </DocList>

        <PreviewPanel {...tour.steps.docPreview.getHighlightProps()}>
          <PreviewContent selected={selected} />
        </PreviewPanel>
      </Layout>
    </>;
}`,...P.parameters?.docs?.source},description:{story:"`tour.steps[name].setTitle()` и `setContent()` обновляют содержимое шага\nв реальном времени — без перезапуска тура. Кликните на документ во время\nактивного шага — заголовок и текст подсказки обновятся контекстными данными.",...P.parameters?.docs?.description}}};try{P.displayName=`WithDynamicContent`,P.__docgenInfo={description:"`tour.steps[name].setTitle()` и `setContent()` обновляют содержимое шага\nв реальном времени — без перезапуска тура. Кликните на документ во время\nактивного шага — заголовок и текст подсказки обновятся контекстными данными.",displayName:`WithDynamicContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithDynamicContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var gt,F,_t,I;function vt(){return(vt=e((()=>{gt=f(),_e(),n(),r(),p(),g(),b(),F=u(),_t=()=>(0,F.jsxs)(a,{color:`textSecondary`,children:[`Запустите тур и нажмите «Далее» — второй шаг не найдёт элемент и через 1.5 с сработает `,(0,F.jsx)(`code`,{children:`onError`}),`.`]}),I=()=>{let[e,t]=(0,gt.useState)(null),[n]=(0,gt.useState)(()=>m({saveStrategy:_})),[r]=(0,gt.useState)(()=>n.createTour({name:`errorHandlingDemo`,waitForTimeout:1500,onError:e=>t(e.message),steps:[{name:`intro`,type:`standalone`,title:`Обзор раздела`,content:`Следующий шаг подсвечивает элемент, которого нет на странице — тур не сможет его найти.`,isPrevButtonVisible:!1},{name:`missingWidget`,type:`highlight`,title:`Виджет аналитики`,content:`Этот шаг никогда не отрисуется — элемент отсутствует.`}]}));return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h,{onboarding:n}),(0,F.jsx)(a,{variant:`h5`,children:`Документы`}),(0,F.jsx)(_t,{}),(0,F.jsx)(v,{children:(0,F.jsx)(c,{onClick:()=>{t(null),r.start()},children:`Начать обучение`})}),e&&(0,F.jsx)(ge,{severity:`error`,title:`Тур завершён с ошибкой`,children:e})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [error, setError] = useState<string | null>(null);
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'errorHandlingDemo',
    waitForTimeout: 1500,
    onError: err => setError(err.message),
    steps: [{
      name: 'intro',
      type: 'standalone',
      title: 'Обзор раздела',
      content: 'Следующий шаг подсвечивает элемент, которого нет на странице — тур не сможет его найти.',
      isPrevButtonVisible: false
    }, {
      // На странице нет элемента с data-tour-id="missingWidget",
      // поэтому шаг упрётся в тайм-аут ожидания и вызовет onError.
      name: 'missingWidget',
      type: 'highlight',
      title: 'Виджет аналитики',
      content: 'Этот шаг никогда не отрисуется — элемент отсутствует.'
    }]
  }));
  const handleStart = () => {
    setError(null);
    tour.start();
  };
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Typography variant="h5">Документы</Typography>
      <Description />
      <Actions>
        <Button onClick={handleStart}>Начать обучение</Button>
      </Actions>

      {error && <Alert severity="error" title="Тур завершён с ошибкой">
          {error}
        </Alert>}
    </>;
}`,...I.parameters?.docs?.source},description:{story:"`onError` — единая точка обработки ошибок тура: срабатывает, когда шаг не может\nотрисоваться. Здесь целевой элемент `highlight`-шага не появляется в DOM за\n`waitForTimeout` (1500 мс), поэтому тур вызывает `onError` и закрывается —\n`onClose` получает причину `closed`.",...I.parameters?.docs?.description}}};try{I.displayName=`WithErrorHandling`,I.__docgenInfo={description:"`onError` — единая точка обработки ошибок тура: срабатывает, когда шаг не может\nотрисоваться. Здесь целевой элемент `highlight`-шага не появляется в DOM за\n`waitForTimeout` (1500 мс), поэтому тур вызывает `onError` и закрывается —\n`onClose` получает причину `closed`.",displayName:`WithErrorHandling`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithErrorHandling.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var yt,L,bt,R;function xt(){return(xt=e((()=>{yt=f(),n(),r(),p(),g(),b(),L=u(),bt=()=>(0,L.jsxs)(a,{color:`textSecondary`,children:[`Каждый шаг выделяет кнопку с разным значением `,(0,L.jsx)(`code`,{children:`highlightOffset`}),`.`]}),R=()=>{let[e]=(0,yt.useState)(()=>m({saveStrategy:_})),[t]=(0,yt.useState)(()=>e.createTour({name:`offsetDemo`,steps:[{name:`offsetZero`,type:`highlight`,title:`highlightOffset: "0px"`,content:`Выделение области вплотную к границе элемента, без отступа.`,position:`right`,highlightOffset:`0px`},{name:`offsetDefault`,type:`highlight`,title:`Базовый отступ (8px)`,content:`Стандартный отступ по умолчанию, когда highlightOffset не указан.`,position:`right`},{name:`offsetLarge`,type:`highlight`,title:`highlightOffset: "24px"`,content:`Больший отступ для группировки элементов или тонкой настройки.`,position:`right`,highlightOffset:`24px`}]}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(h,{onboarding:e}),(0,L.jsx)(v,{children:(0,L.jsx)(c,{onClick:()=>t.start(),children:`Запустить тур`})}),(0,L.jsx)(bt,{}),(0,L.jsxs)(De,{children:[(0,L.jsx)(c,{...t.steps.offsetZero.getHighlightProps(),children:`Без отступа (0px)`}),(0,L.jsx)(c,{...t.steps.offsetDefault.getHighlightProps(),children:`Базовый отступ (8px)`}),(0,L.jsx)(c,{...t.steps.offsetLarge.getHighlightProps(),children:`Большой отступ (24px)`})]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'offsetDemo',
    steps: [{
      name: 'offsetZero',
      type: 'highlight',
      title: 'highlightOffset: "0px"',
      content: 'Выделение области вплотную к границе элемента, без отступа.',
      position: 'right',
      highlightOffset: '0px'
    }, {
      name: 'offsetDefault',
      type: 'highlight',
      title: 'Базовый отступ (8px)',
      content: 'Стандартный отступ по умолчанию, когда highlightOffset не указан.',
      position: 'right'
    }, {
      name: 'offsetLarge',
      type: 'highlight',
      title: 'highlightOffset: "24px"',
      content: 'Больший отступ для группировки элементов или тонкой настройки.',
      position: 'right',
      highlightOffset: '24px'
    }]
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Actions>
        <Button onClick={() => tour.start()}>Запустить тур</Button>
      </Actions>
      <Description />

      <DemoColumn>
        <Button {...tour.steps.offsetZero.getHighlightProps()}>
          Без отступа (0px)
        </Button>
        <Button {...tour.steps.offsetDefault.getHighlightProps()}>
          Базовый отступ (8px)
        </Button>
        <Button {...tour.steps.offsetLarge.getHighlightProps()}>
          Большой отступ (24px)
        </Button>
      </DemoColumn>
    </>;
}`,...R.parameters?.docs?.source},description:{story:"`highlightOffset` задаёт отступ подсветки вокруг выделяемого элемента.\nПо умолчанию 8px.",...R.parameters?.docs?.description}}};try{R.displayName=`WithHighlightOffset`,R.__docgenInfo={description:"`highlightOffset` задаёт отступ подсветки вокруг выделяемого элемента.\nПо умолчанию 8px.",displayName:`WithHighlightOffset`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithHighlightOffset.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var St,z,B;function Ct(){return(Ct=e((()=>{St=f(),n(),r(),p(),g(),b(),z=u(),B=()=>{let[e]=(0,St.useState)(()=>m({saveStrategy:_})),[t]=(0,St.useState)(()=>e.createTour({name:`interactiveDemo`,steps:[{name:`interactiveBtn`,type:`highlight`,title:`isInteractive: true`,content:`Клик по кнопке проходит — попробуйте нажать её прямо сейчас.`,position:`bottom`,isInteractive:!0},{name:`blockedBtn`,type:`highlight`,title:`isInteractive: false`,content:`Клики по этой кнопке заблокированы: элемент видно, но нажать нельзя.`,position:`bottom`,isInteractive:!1}]}));return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(h,{onboarding:e}),(0,z.jsx)(v,{children:(0,z.jsx)(c,{onClick:()=>t.start(),children:`Запустить тур`})}),(0,z.jsxs)(De,{children:[(0,z.jsx)(a,{variant:`h6`,children:`Форма подписания документа`}),(0,z.jsx)(c,{...t.steps.interactiveBtn.getHighlightProps(),onClick:()=>t.next(),children:`Подписать документ`}),(0,z.jsx)(c,{...t.steps.blockedBtn.getHighlightProps(),onClick:()=>t.prev(),children:`Отозвать подпись`})]})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'interactiveDemo',
    steps: [{
      name: 'interactiveBtn',
      type: 'highlight',
      title: 'isInteractive: true',
      content: 'Клик по кнопке проходит — попробуйте нажать её прямо сейчас.',
      position: 'bottom',
      isInteractive: true
    }, {
      name: 'blockedBtn',
      type: 'highlight',
      title: 'isInteractive: false',
      content: 'Клики по этой кнопке заблокированы: элемент видно, но нажать нельзя.',
      position: 'bottom',
      isInteractive: false
    }]
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Actions>
        <Button onClick={() => tour.start()}>Запустить тур</Button>
      </Actions>

      <DemoColumn>
        <Typography variant="h6">Форма подписания документа</Typography>

        <Button {...tour.steps.interactiveBtn.getHighlightProps()} onClick={() => tour.next()}>
          Подписать документ
        </Button>

        <Button {...tour.steps.blockedBtn.getHighlightProps()} onClick={() => tour.prev()}>
          Отозвать подпись
        </Button>
      </DemoColumn>
    </>;
}`,...B.parameters?.docs?.source},description:{story:"`isInteractive` управляет тем, можно ли кликать по подсвечиваемому элементу\nво время тура. При `true` элемент остаётся интерактивным, при `false`\n(по умолчанию) клики по нему блокируются.",...B.parameters?.docs?.description}}};try{B.displayName=`WithInteractive`,B.__docgenInfo={description:"`isInteractive` управляет тем, можно ли кликать по подсвечиваемому элементу\nво время тура. При `true` элемент остаётся интерактивным, при `false`\n(по умолчанию) клики по нему блокируются.",displayName:`WithInteractive`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithInteractive.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var wt,V,H,U;function Tt(){return(Tt=e((()=>{wt=f(),n(),r(),p(),g(),b(),V=u(),H=e=>Array.from({length:e},(t,n)=>({name:`step${n+1}`,type:`standalone`,title:`Шаг ${n+1} из ${e}`,content:`Индикаторы прогресса внизу шага отражают текущий и общее число шагов.`,isPrevButtonVisible:n!==0})),U=()=>{let[e]=(0,wt.useState)(()=>m({saveStrategy:_})),[t]=(0,wt.useState)(()=>({both:e.createTour({name:`indicatorsBoth`,steps:H(3)}),dotsOnly:e.createTour({name:`indicatorsDots`,isCounterVisible:!1,steps:H(3)}),counterOnly:e.createTour({name:`indicatorsCounter`,isDotsVisible:!1,steps:H(3)}),manySteps:e.createTour({name:`indicatorsMany`,steps:H(7)})}));return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(h,{onboarding:e}),(0,V.jsx)(a,{variant:`h5`,children:`Индикаторы прогресса`}),(0,V.jsxs)(v,{children:[(0,V.jsx)(c,{variant:`outlined`,onClick:()=>t.both.start(),children:`Точки + счётчик (по умолчанию)`}),(0,V.jsx)(c,{variant:`outlined`,onClick:()=>t.dotsOnly.start(),children:`Только точки`}),(0,V.jsx)(c,{variant:`outlined`,onClick:()=>t.counterOnly.start(),children:`Только счётчик`}),(0,V.jsx)(c,{variant:`outlined`,onClick:()=>t.manySteps.start(),children:`7 шагов — точки скрыты`})]})]})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tours] = useState(() => ({
    both: onboarding.createTour({
      name: 'indicatorsBoth',
      steps: buildSteps(3)
    }),
    dotsOnly: onboarding.createTour({
      name: 'indicatorsDots',
      isCounterVisible: false,
      steps: buildSteps(3)
    }),
    counterOnly: onboarding.createTour({
      name: 'indicatorsCounter',
      isDotsVisible: false,
      steps: buildSteps(3)
    }),
    manySteps: onboarding.createTour({
      name: 'indicatorsMany',
      steps: buildSteps(7)
    })
  }));
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Typography variant="h5">Индикаторы прогресса</Typography>
      <Actions>
        <Button variant="outlined" onClick={() => tours.both.start()}>
          Точки + счётчик (по умолчанию)
        </Button>
        <Button variant="outlined" onClick={() => tours.dotsOnly.start()}>
          Только точки
        </Button>
        <Button variant="outlined" onClick={() => tours.counterOnly.start()}>
          Только счётчик
        </Button>
        <Button variant="outlined" onClick={() => tours.manySteps.start()}>
          7 шагов — точки скрыты
        </Button>
      </Actions>
    </>;
}`,...U.parameters?.docs?.source},description:{story:"Прогресс тура показывают два индикатора внизу шага: точки (`isDotsVisible`)\nи счётчик «текущий / всего» (`isCounterVisible`). Оба включены по умолчанию.\nТочки скрываются автоматически, если видимых шагов больше шести, — даже при\n`isDotsVisible: true`.",...U.parameters?.docs?.description}}};try{U.displayName=`WithProgressIndicators`,U.__docgenInfo={description:"Прогресс тура показывают два индикатора внизу шага: точки (`isDotsVisible`)\nи счётчик «текущий / всего» (`isCounterVisible`). Оба включены по умолчанию.\nТочки скрываются автоматически, если видимых шагов больше шести, — даже при\n`isDotsVisible: true`.",displayName:`WithProgressIndicators`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithProgressIndicators.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Et,W,Dt,Ot,G;function kt(){return(kt=e((()=>{Et=f(),n(),ce(),r(),p(),g(),b(),W=u(),Dt=()=>{let e=localStorage.getItem(`onboarding_story_reset_progress`);return e?JSON.parse(e):null},Ot=({progress:e})=>(0,W.jsxs)(y,{children:[(0,W.jsxs)(a,{variant:`body1`,color:`textSecondary`,children:[`Сохранённый прогресс (ключ: `,(0,W.jsx)(`code`,{children:`onboarding_story_reset_progress`}),`)`]}),e?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(a,{children:[`Последний шаг:`,` `,(0,W.jsx)(a,{component:`strong`,children:e.lastStepName})]}),(0,W.jsxs)(a,{children:[`Пройден:`,` `,(0,W.jsx)(a,{component:`strong`,children:e.isCompleted?`да`:`нет`})]}),(0,W.jsxs)(a,{children:[`Не показывать:`,` `,(0,W.jsx)(a,{component:`strong`,children:e.isDismissed?`да`:`нет`})]})]}):(0,W.jsx)(a,{color:`textSecondary`,children:`Нет сохранённого прогресса`})]}),G=()=>{let[e,t]=(0,Et.useState)(Dt),[n]=(0,Et.useState)(()=>{let e={save:e=>{localStorage.setItem(`onboarding_story_reset_progress`,JSON.stringify(e)),t(e)},load:Dt,remove:()=>{localStorage.removeItem(`onboarding_story_reset_progress`),t(null)}};return m({saveStrategy:()=>e})}),[r]=(0,Et.useState)(()=>n.createTour({name:`resetProgressDemo`,steps:[{name:`step1`,type:`standalone`,title:`Шаг 1 — Знакомство с разделом`,content:`Прогресс сохраняется после каждого перехода. Закройте вкладку и вернитесь — тур продолжится с этого места.`,isPrevButtonVisible:!1},{name:`step2`,type:`standalone`,title:`Шаг 2 — Работа с документами`,content:`Здесь будет описание работы со списком входящих документов.`},{name:`step3`,type:`standalone`,title:`Шаг 3 — Вы освоили систему!`,content:`Обучение завершено. Кнопка «Сбросить прогресс» вызывает tour.resetProgress() и удаляет запись через SaveStrategy.remove.`,isPrevButtonVisible:!1}]})),i=!!e?.isDismissed;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(h,{onboarding:n}),(0,W.jsx)(Ot,{progress:e}),(0,W.jsxs)(v,{children:[(0,W.jsx)(se,{title:i&&`Тур закрыт или пройден. Нажмите «Сбросить прогресс», чтобы запустить его снова.`,withoutContainer:!i,children:(0,W.jsx)(c,{disabled:i,onClick:()=>r.start(),children:`Начать`})}),(0,W.jsx)(c,{variant:`text`,onClick:()=>r.resetProgress(),children:`Сбросить прогресс (resetProgress)`})]})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [savedState, setSavedState] = useState(readProgress);
  const [onboarding] = useState(() => {
    const strategy: OnboardingSaveStrategy = {
      save: data => {
        localStorage.setItem('onboarding_story_reset_progress', JSON.stringify(data));
        setSavedState(data);
      },
      load: readProgress,
      remove: () => {
        localStorage.removeItem('onboarding_story_reset_progress');
        setSavedState(null);
      }
    };
    return createOnboarding({
      saveStrategy: () => strategy
    });
  });
  const [tour] = useState(() => onboarding.createTour({
    name: 'resetProgressDemo',
    steps: [{
      name: 'step1',
      type: 'standalone',
      title: 'Шаг 1 — Знакомство с разделом',
      content: 'Прогресс сохраняется после каждого перехода. Закройте вкладку и вернитесь — тур продолжится с этого места.',
      isPrevButtonVisible: false
    }, {
      name: 'step2',
      type: 'standalone',
      title: 'Шаг 2 — Работа с документами',
      content: 'Здесь будет описание работы со списком входящих документов.'
    }, {
      name: 'step3',
      type: 'standalone',
      title: 'Шаг 3 — Вы освоили систему!',
      content: 'Обучение завершено. Кнопка «Сбросить прогресс» вызывает tour.resetProgress() и удаляет запись через SaveStrategy.remove.',
      isPrevButtonVisible: false
    }]
  }));
  const isDismissed = Boolean(savedState?.isDismissed);
  return <>
      <OnboardingContainer onboarding={onboarding} />

      <SavedProgress progress={savedState} />

      <Actions>
        <Tooltip title={isDismissed && 'Тур закрыт или пройден. Нажмите «Сбросить прогресс», чтобы запустить его снова.'} withoutContainer={!isDismissed}>
          <Button disabled={isDismissed} onClick={() => tour.start()}>
            Начать
          </Button>
        </Tooltip>
        <Button variant="text" onClick={() => tour.resetProgress()}>
          Сбросить прогресс (resetProgress)
        </Button>
      </Actions>
    </>;
}`,...G.parameters?.docs?.source},description:{story:"`tour.resetProgress()` полностью сбрасывает сохранённый прогресс (включая флаги\n`isCompleted`/`isDismissed`) и вызывает `SaveStrategy.remove`, если она его\nреализует. После сброса `start()` снова покажет тур с первого шага.\n\nПройденный или закрытый тур сохранён с `isDismissed: true`, и `start()` его\nне показывает — поэтому «Начать» выключена, пока прогресс не сброшен.\n\nЕсли `remove` не реализован, тур перезаписывает сохранённый прогресс пустым\nсостоянием.",...G.parameters?.docs?.description}}};try{G.displayName=`WithResetProgress`,G.__docgenInfo={description:"`tour.resetProgress()` полностью сбрасывает сохранённый прогресс (включая флаги\n`isCompleted`/`isDismissed`) и вызывает `SaveStrategy.remove`, если она его\nреализует. После сброса `start()` снова покажет тур с первого шага.\n\nПройденный или закрытый тур сохранён с `isDismissed: true`, и `start()` его\nне показывает — поэтому «Начать» выключена, пока прогресс не сброшен.\n\nЕсли `remove` не реализован, тур перезаписывает сохранённый прогресс пустым\nсостоянием.",displayName:`WithResetProgress`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithResetProgress.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var K,q,At,jt,J;function Mt(){return(Mt=e((()=>{K=f(),n(),r(),p(),g(),b(),q=u(),At=()=>{let e=null,t=e=>new Promise(t=>setTimeout(()=>t(e),900));return{fetchProgress:()=>t(e),saveProgress:n=>(e=n,t(void 0)),removeProgress:()=>(e=null,t(void 0))}},jt=({progress:e})=>(0,q.jsxs)(y,{children:[(0,q.jsx)(a,{variant:`body1`,color:`textSecondary`,children:`Прогресс на сервере`}),e?(0,q.jsxs)(a,{children:[`Последний шаг:`,` `,(0,q.jsx)(a,{component:`strong`,children:e.lastStepName})]}):(0,q.jsx)(a,{color:`textSecondary`,children:`Нет сохранённого прогресса`})]}),J=()=>{let[e]=(0,K.useState)(At),[t,n]=(0,K.useState)(null),[r,i]=(0,K.useState)(null),[a]=(0,K.useState)(()=>{let t={save:async t=>{await e.saveProgress(t),n(t)},load:()=>e.fetchProgress(),remove:async()=>{await e.removeProgress(),n(null)}};return m({saveStrategy:()=>t})}),[o]=(0,K.useState)(()=>a.createTour({name:`serverSyncedTour`,steps:[{name:`step1`,type:`standalone`,title:`Шаг 1 — Знакомство с разделом`,content:`Прогресс после каждого перехода уходит на сервер. Откройте раздел на другом устройстве — обучение продолжится с этого места.`,isPrevButtonVisible:!1},{name:`step2`,type:`standalone`,title:`Шаг 2 — Работа с документами`,content:`Здесь будет описание работы со списком входящих документов.`},{name:`step3`,type:`standalone`,title:`Шаг 3 — Фильтры и поиск`,content:`Здесь будет описание возможностей фильтрации и поиска по реестру.`},{name:`step4`,type:`standalone`,title:`Шаг 4 — Вы освоили систему!`,content:`Обучение завершено. После «Готово» на сервер уходит isCompleted: true, и следующий restore() переиграет тур с первого шага.`,isPrevButtonVisible:!1}]})),s=async(e,t)=>{i(e);try{await t()}finally{i(null)}};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(h,{onboarding:a}),(0,q.jsx)(jt,{progress:t}),(0,q.jsxs)(v,{children:[(0,q.jsx)(c,{loading:r===`restart`,onClick:()=>s(`restart`,async()=>{await o.resetProgress(),await o.start()}),children:`Начать заново`}),(0,q.jsx)(c,{variant:`outlined`,loading:r===`restore`,onClick:()=>s(`restore`,()=>o.restore()),children:`Продолжить с сохранённого шага`})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [server] = useState(createProgressApi);
  const [saved, setSaved] = useState<OnboardingTourProgress | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [onboarding] = useState(() => {
    const strategy: OnboardingSaveStrategy = {
      save: async data => {
        await server.saveProgress(data);
        setSaved(data);
      },
      load: () => server.fetchProgress(),
      remove: async () => {
        await server.removeProgress();
        setSaved(null);
      }
    };
    return createOnboarding({
      saveStrategy: () => strategy
    });
  });
  const [tour] = useState(() => onboarding.createTour({
    name: 'serverSyncedTour',
    steps: [{
      name: 'step1',
      type: 'standalone',
      title: 'Шаг 1 — Знакомство с разделом',
      content: 'Прогресс после каждого перехода уходит на сервер. Откройте раздел на другом устройстве — обучение продолжится с этого места.',
      isPrevButtonVisible: false
    }, {
      name: 'step2',
      type: 'standalone',
      title: 'Шаг 2 — Работа с документами',
      content: 'Здесь будет описание работы со списком входящих документов.'
    }, {
      name: 'step3',
      type: 'standalone',
      title: 'Шаг 3 — Фильтры и поиск',
      content: 'Здесь будет описание возможностей фильтрации и поиска по реестру.'
    }, {
      name: 'step4',
      type: 'standalone',
      title: 'Шаг 4 — Вы освоили систему!',
      content: 'Обучение завершено. После «Готово» на сервер уходит isCompleted: true, и следующий restore() переиграет тур с первого шага.',
      isPrevButtonVisible: false
    }]
  }));

  // start()/restore() await-ят асинхронный load() — держим loading, пока идёт запрос.
  const run = async (action: PendingAction, showTour: () => Promise<void>) => {
    setPendingAction(action);
    try {
      await showTour();
    } finally {
      setPendingAction(null);
    }
  };

  // Пройденный (или закрытый) тур сохранён с isDismissed: true, и start() такой
  // тур не показывает — поэтому «начать заново» это resetProgress() + start().
  const handleRestart = () => run('restart', async () => {
    await tour.resetProgress();
    await tour.start();
  });
  const handleRestore = () => run('restore', () => tour.restore());
  return <>
      <OnboardingContainer onboarding={onboarding} />

      <ServerProgress progress={saved} />

      <Actions>
        <Button loading={pendingAction === 'restart'} onClick={handleRestart}>
          Начать заново
        </Button>
        <Button variant="outlined" loading={pendingAction === 'restore'} onClick={handleRestore}>
          Продолжить с сохранённого шага
        </Button>
      </Actions>
    </>;
}`,...J.parameters?.docs?.source},description:{story:"`saveStrategy` определяет, как тур сохраняет и загружает прогресс.\n\nПараметр необязателен: по умолчанию прогресс хранится в `localStorage`.\nСвоя стратегия нужна, когда прогресс должен жить во внешнем хранилище.\n\nМетоды `save`/`load` могут быть асинхронными: `tour.start()` и `tour.restore()`\nждут `load()`, поэтому кнопку «Продолжить» можно держать в `loading`, пока\nидёт запрос за прогрессом.",...J.parameters?.docs?.description}}};try{J.displayName=`WithSaveStrategy`,J.__docgenInfo={description:"`saveStrategy` определяет, как тур сохраняет и загружает прогресс.\n\nПараметр необязателен: по умолчанию прогресс хранится в `localStorage`.\nСвоя стратегия нужна, когда прогресс должен жить во внешнем хранилище.\n\nМетоды `save`/`load` могут быть асинхронными: `tour.start()` и `tour.restore()`\nждут `load()`, поэтому кнопку «Продолжить» можно держать в `loading`, пока\nидёт запрос за прогрессом.",displayName:`WithSaveStrategy`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithSaveStrategy.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Nt,Y,Pt,Ft,X;function It(){return(It=e((()=>{Nt=f(),n(),d(),xe(),re(),r(),p(),g(),b(),Y=u(),Pt=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;

  max-width: 480px;
  padding: ${({theme:e})=>e.spacing(2,3)};

  background: ${({theme:e})=>e.palette.background.paper};
  border: 1px solid ${({theme:e})=>e.palette.grey[300]};
  border-radius: ${({theme:e})=>e.spacing(1)};
`,Ft=({isAdmin:e,onChange:t})=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(Pt,{children:[(0,Y.jsx)(a,{children:`Роль:`}),(0,Y.jsxs)(ne,{exclusive:!0,value:e?`admin`:`user`,onChange:(e,n)=>{n&&t(n===`admin`)},children:[(0,Y.jsx)(ie,{value:`user`,children:`Пользователь`}),(0,Y.jsx)(ie,{value:`admin`,children:`Администратор`})]})]}),(0,Y.jsx)(a,{color:`textSecondary`,children:`Шаг «Панель администратора» есть только у администратора — у пользователя тур его пропустит.`})]}),X=()=>{let e=(0,Nt.useRef)(!1),[t,n]=(0,Nt.useState)(!1),[r]=(0,Nt.useState)(()=>m({saveStrategy:_})),[i]=(0,Nt.useState)(()=>r.createTour({name:`skipStepDemo`,steps:[{name:`step1`,type:`standalone`,title:`Раздел «Документы»`,content:`Реестр входящих и исходящих документов. Следующий шаг — про администрирование. Он будет пропущен, если у вас нет прав администратора.`,isPrevButtonVisible:!1},{name:`adminPanel`,type:`standalone`,title:`Панель администратора`,content:`Этот шаг видят только администраторы. Для обычных пользователей он прозрачно пропускается.`,shouldSkip:()=>!e.current},{name:`done`,type:`standalone`,title:`Обучение завершено!`,content:`Если у вас не было прав администратора, шаг «Панель администратора» был пропущен автоматически.`,isPrevButtonVisible:!1,isNextButtonVisible:!1}]}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(h,{onboarding:r}),(0,Y.jsx)(a,{variant:`h5`,children:`Входящие документы`}),(0,Y.jsx)(Ft,{isAdmin:t,onChange:t=>{e.current=t,n(t)}}),(0,Y.jsx)(v,{children:(0,Y.jsx)(c,{onClick:()=>i.start(),children:`Начать тур`})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const isAdminRef = useRef(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));
  const [tour] = useState(() => onboarding.createTour({
    name: 'skipStepDemo',
    steps: [{
      name: 'step1',
      type: 'standalone',
      title: 'Раздел «Документы»',
      content: 'Реестр входящих и исходящих документов. Следующий шаг — про администрирование. Он будет пропущен, если у вас нет прав администратора.',
      isPrevButtonVisible: false
    }, {
      name: 'adminPanel',
      type: 'standalone',
      title: 'Панель администратора',
      content: 'Этот шаг видят только администраторы. Для обычных пользователей он прозрачно пропускается.',
      shouldSkip: () => !isAdminRef.current
    }, {
      name: 'done',
      type: 'standalone',
      title: 'Обучение завершено!',
      content: 'Если у вас не было прав администратора, шаг «Панель администратора» был пропущен автоматически.',
      isPrevButtonVisible: false,
      isNextButtonVisible: false
    }]
  }));
  const changeRole = (nextIsAdmin: boolean) => {
    isAdminRef.current = nextIsAdmin;
    setIsAdmin(nextIsAdmin);
  };
  return <>
      <OnboardingContainer onboarding={onboarding} />
      <Typography variant="h5">Входящие документы</Typography>

      <RoleSwitcher isAdmin={isAdmin} onChange={changeRole} />

      <Actions>
        <Button onClick={() => tour.start()}>Начать тур</Button>
      </Actions>
    </>;
}`,...X.parameters?.docs?.source},description:{story:"`shouldSkip` позволяет пропускать шаги в зависимости от состояния приложения.",...X.parameters?.docs?.description}}};try{X.displayName=`WithSkipStep`,X.__docgenInfo={description:"`shouldSkip` позволяет пропускать шаги в зависимости от состояния приложения.",displayName:`WithSkipStep`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithSkipStep.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,Lt,Rt,zt,Bt,Vt,$;function Ht(){return(Ht=e((()=>{Z=f(),_e(),n(),d(),r(),p(),g(),b(),Q=u(),Lt=()=>(0,Q.jsx)(y,{children:(0,Q.jsxs)(a,{color:`textSecondary`,children:[`Виджет появляется через 800мс после старта. Тур «без ожидания» (`,(0,Q.jsx)(`code`,{children:`waitForTimeout: 0`}),`, значение по умолчанию) не найдёт его и вызовет `,(0,Q.jsx)(`code`,{children:`onError`}),`; тур «с ожиданием» (`,(0,Q.jsx)(`code`,{children:`waitForTimeout: 2000`}),`) дождётся и подсветит.`]})}),Rt=800,zt=s.div`
  padding: ${({theme:e})=>e.spacing(3)};
  border: 1px solid ${({theme:e})=>e.palette.primary.main};
  border-radius: ${({theme:e})=>e.spacing(1)};
  max-width: 400px;
`,Bt=s(ge)`
  max-width: 480px;
`,Vt=()=>(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(a,{variant:`h6`,children:`Аналитика продаж`}),(0,Q.jsx)(a,{color:`textSecondary`,children:`Выручка за месяц: 1 250 000 ₽ · Рост: +12%`})]}),$=()=>{let[e,t]=(0,Z.useState)(!1),[n,r]=(0,Z.useState)(null),[i]=(0,Z.useState)(()=>m({saveStrategy:_})),[o]=(0,Z.useState)(()=>i.createTour({name:`waitTimeoutInstant`,onError:e=>r(e.message),steps:[{name:`widget`,type:`highlight`,title:`Виджет аналитики`,content:`Этот шаг подсвечивает виджет, который появится не сразу.`,isPrevButtonVisible:!1}]})),[s]=(0,Z.useState)(()=>i.createTour({name:`waitTimeoutWaiting`,onError:e=>r(e.message),steps:[{name:`widget`,type:`highlight`,title:`Виджет аналитики`,content:`Тур дождался появления виджета благодаря waitForTimeout: 2000.`,isPrevButtonVisible:!1,isNextButtonVisible:!1,waitForTimeout:2e3}]})),l=e=>{r(null),t(!1),e(),setTimeout(()=>t(!0),Rt)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(h,{onboarding:i}),(0,Q.jsxs)(Oe,{children:[(0,Q.jsx)(a,{variant:`h5`,children:`Дашборд`}),(0,Q.jsxs)(v,{children:[(0,Q.jsx)(c,{variant:`outlined`,onClick:()=>l(()=>o.start()),children:`Запустить без ожидания`}),(0,Q.jsx)(c,{onClick:()=>l(()=>s.start()),children:`Запустить с ожиданием (2с)`})]})]}),(0,Q.jsx)(Lt,{}),n&&(0,Q.jsx)(Bt,{severity:`error`,title:`Тур завершён с ошибкой`,children:n}),e&&(0,Q.jsx)(zt,{...o.steps.widget.getHighlightProps(),children:(0,Q.jsx)(Vt,{})})]})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [onboarding] = useState(() => createOnboarding({
    saveStrategy: mockSaveStrategy
  }));

  // Тур с ожиданием по умолчанию (0) — не ждёт появления элемента.
  const [instantTour] = useState(() => onboarding.createTour({
    name: 'waitTimeoutInstant',
    onError: err => setError(err.message),
    steps: [{
      name: 'widget',
      type: 'highlight',
      title: 'Виджет аналитики',
      content: 'Этот шаг подсвечивает виджет, который появится не сразу.',
      isPrevButtonVisible: false
    }]
  }));

  // Тур с явным ожиданием — дожидается появления элемента до 2000 мс.
  const [waitingTour] = useState(() => onboarding.createTour({
    name: 'waitTimeoutWaiting',
    onError: err => setError(err.message),
    steps: [{
      name: 'widget',
      type: 'highlight',
      title: 'Виджет аналитики',
      content: 'Тур дождался появления виджета благодаря waitForTimeout: 2000.',
      isPrevButtonVisible: false,
      isNextButtonVisible: false,
      waitForTimeout: 2000
    }]
  }));
  const runDemo = (startTour: () => void) => {
    setError(null);
    setWidgetVisible(false);
    startTour();
    // Виджет монтируется с задержкой — имитация ленивой/поздней отрисовки.
    setTimeout(() => setWidgetVisible(true), APPEAR_DELAY_MS);
  };
  return <>
      <OnboardingContainer onboarding={onboarding} />

      <Toolbar>
        <Typography variant="h5">Дашборд</Typography>
        <Actions>
          <Button variant="outlined" onClick={() => runDemo(() => instantTour.start())}>
            Запустить без ожидания
          </Button>
          <Button onClick={() => runDemo(() => waitingTour.start())}>
            Запустить с ожиданием (2с)
          </Button>
        </Actions>
      </Toolbar>

      <Description />

      {error && <ErrorAlert severity="error" title="Тур завершён с ошибкой">
          {error}
        </ErrorAlert>}

      {widgetVisible && <Widget {...instantTour.steps.widget.getHighlightProps()}>
          <WidgetContent />
        </Widget>}
    </>;
}`,...$.parameters?.docs?.source},description:{story:"`waitForTimeout` — сколько миллисекунд тур ждёт появления элемента\n`highlight`-шага в DOM.\n\nПо умолчанию (`0`) тур не ждёт: элемент ищется сразу, и если его нет —\nсрабатывает `onError`.\n\nЗадавайте тайм-аут только тогда, когда элемент появляется сам: анимация,\nленивая или поздняя отрисовка. Если появление зависит от действия пользователя\nили загрузки данных, используйте `waitForResume` + `tour.resume()`, а не\nтайм-аут: подобранное вручную значение сработает у вас, но на более медленном\nустройстве или соединении пользователя тур может не дождаться элемента.",...$.parameters?.docs?.description}}};try{$.displayName=`WithWaitForTimeout`,$.__docgenInfo={description:"`waitForTimeout` — сколько миллисекунд тур ждёт появления элемента\n`highlight`-шага в DOM.\n\nПо умолчанию (`0`) тур не ждёт: элемент ищется сразу, и если его нет —\nсрабатывает `onError`.\n\nЗадавайте тайм-аут только тогда, когда элемент появляется сам: анимация,\nленивая или поздняя отрисовка. Если появление зависит от действия пользователя\nили загрузки данных, используйте `waitForResume` + `tour.resume()`, а не\nтайм-аут: подобранное вручную значение сработает у вас, но на более медленном\nустройстве или соединении пользователя тур может не дождаться элемента.",displayName:`WithWaitForTimeout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Onboarding/stories/WithWaitForTimeout.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{g(),Ie(),Ue(),b(),Ke(),Xe(),at(),ht(),vt(),xt(),Ct(),Tt(),kt(),Mt(),It(),Ht(),Ut=u(),Wt={title:`Onboarding/OnboardingTour`,component:h,parameters:{layout:`fullscreen`,docs:{importNames:[`createOnboarding`,`OnboardingContainer`],description:{component:'Onboarding - это сервис для создания обучающих туров, которые знакомят\nпользователя с интерфейсом по шагам. Шаг подсвечивает элемент на странице\n(`highlight`) или показывает модальное окно по центру экрана (`standalone`).\n\n**Как подключить:**\n1. `createOnboarding()` — создать экземпляр. По умолчанию прогресс хранится\n   в `localStorage`; передайте `saveStrategy`, чтобы задать своё хранилище.\n2. `onboarding.createTour({ name, steps })` — описать тур и его шаги.\n3. `<OnboardingContainer onboarding={onboarding} />` — разместить в дереве приложения.\n4. `{...tour.steps.myStep.getHighlightProps()}` — навесить шаг на целевой элемент.\n5. `tour.start()` — запустить тур; `tour.restore()` — продолжить с сохранённого шага.\n\n**Логирование:** Onboarding пишет в консоль диагностику своей работы —\nсоздание тура, переходы между шагами, предупреждения и ошибки. По умолчанию\nв production видны только ошибки; чтобы включить подробные логи, задайте уровень\nв `ConfigProvider`: `<ConfigProvider logLevel="debug">`. Подробнее — в разделе\n`Getting Started/Логирование`.\n\n**Story** необходимо открывать в отдельной вкладке'}}},decorators:[e=>(0,Ut.jsx)(je,{children:(0,Ut.jsx)(e,{})})]},Gt=[`BasicUsage`,`NavigationButtons`,`PopoverPosition`,`ScrollIntoView`,`WithHighlightOffset`,`WithInteractive`,`WithProgressIndicators`,`WithSaveStrategy`,`WithResetProgress`,`AwaitAsyncTarget`,`WithWaitForTimeout`,`WithSkipStep`,`WithDynamicContent`,`WithErrorHandling`]})))()}Kt();export{C as AwaitAsyncTarget,E as BasicUsage,O as NavigationButtons,A as PopoverPosition,M as ScrollIntoView,P as WithDynamicContent,I as WithErrorHandling,R as WithHighlightOffset,B as WithInteractive,U as WithProgressIndicators,G as WithResetProgress,J as WithSaveStrategy,X as WithSkipStep,$ as WithWaitForTimeout,Gt as __namedExportsOrder,Wt as default};