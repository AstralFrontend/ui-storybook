import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,ji as n,ln as r,ya as i,yn as a,za as o}from"./preview--MgaEBgF.js";import{c as s,s as c}from"./DataGrid-BIS3RT-c.js";import{i as l,l as u,t as d}from"./DataGridActionCell-FqIfC0Ui.js";import{n as f,t as p}from"./resize-C1R_vGSe.js";import{t as m}from"./DataGridActionCell-gfM6uW8j.js";import{a as h,i as g,n as _,t as v}from"./OnboardingContainer-hXXXtkBd.js";import{Dt as y,K as b,Tt as x,_t as S,vt as C}from"./common-DPPMYq6J.js";function w(){return(w=e((()=>{h(),v()})))()}var T,E,D,O,k;function A(){return(A=e((()=>{T=o(),t(),w(),a(),s(),p(),b(),E=i(),D=n.div`
  position: relative;

  width: 100%;
`,O=n.div`
  position: absolute;
  z-index: 1;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme:e})=>e.palette.background.modalShadow};
`,k=()=>{let[e]=(0,T.useState)(()=>g()),[t,n]=(0,T.useState)(!1),[i]=(0,T.useState)(()=>e.createTour({name:`dataGridResizingColumns`,steps:[{name:`resizeColumns`,type:`highlight`,title:`Ширину колонок можно менять`,content:`Потяните полоску между заголовками колонок, чтобы подогнать таблицу под содержимое. Попробуйте прямо сейчас — ширина сохранится для этой таблицы.`,position:`bottom`,isInteractive:!0,isPrevButtonVisible:!1}],onClose:()=>n(!1)}));return(0,E.jsxs)(D,{children:[(0,E.jsx)(_,{onboarding:e}),(0,E.jsx)(c,{keyId:`id`,tableId:`storybook-resizing-columns-onboarding`,rows:x.slice(0,7),columns:C,plugins:[f],headerProps:i.steps.resizeColumns.getHighlightProps(),onRetry:()=>{}}),!t&&(0,E.jsx)(O,{children:(0,E.jsx)(r,{onClick:()=>{n(!0),i.restore()},children:`Показать новую функцию`})})]})};try{k.displayName=`Onboarding`,k.__docgenInfo={description:"Подсказка о resize через [Onboarding](/docs/onboarding-onBoardingTour--docs): шаг привязывается к шапке через `headerProps`",displayName:`Onboarding`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/resize/Onboarding.story.tsx`,methods:[],props:{},tags:{}}}catch{}k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding());
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tour] = useState(() => onboarding.createTour({
    name: 'dataGridResizingColumns',
    steps: [{
      name: 'resizeColumns',
      type: 'highlight',
      title: 'Ширину колонок можно менять',
      content: 'Потяните полоску между заголовками колонок, чтобы подогнать таблицу под содержимое. Попробуйте прямо сейчас — ширина сохранится для этой таблицы.',
      position: 'bottom',
      isInteractive: true,
      isPrevButtonVisible: false
    }],
    onClose: () => setIsTourOpen(false)
  }));
  const showTour = () => {
    setIsTourOpen(true);
    tour.restore();
  };
  return <StoryRoot>
      <OnboardingContainer onboarding={onboarding} />
      <DataGrid<DataType> keyId="id" tableId="storybook-resizing-columns-onboarding" rows={fakeData.slice(0, 7)} columns={FAKE_COLUMNS} plugins={[ResizePlugin]} headerProps={tour.steps.resizeColumns.getHighlightProps()} onRetry={() => {}} />
      {!isTourOpen && <StoryBackdrop>
          <Button onClick={showTour}>Показать новую функцию</Button>
        </StoryBackdrop>}
    </StoryRoot>;
}`,...k.parameters?.docs?.source},description:{story:"Подсказка о resize через [Onboarding](/docs/onboarding-onBoardingTour--docs): шаг привязывается к шапке через `headerProps`",...k.parameters?.docs?.description}}}})))()}var j,M,N,P,F,I;function L(){return(L=e((()=>{m(),s(),p(),b(),j=i(),M=[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}],N={id:`11`,documentName:`Акт № УТ000006319`,recipient:`ПАО "Первый завод"`,createDate:y(1)},P={id:`1`,documentName:`УКД № 47`,recipient:`ПАО "Первый завод"`,createDate:y(0),options:{childrenColumns:M},children:[N,{...N,id:`12`},{...N,id:`13`}]},F=[P,{...P,id:`2`,children:[{...N,id:`21`}]}],I=()=>(0,j.jsx)(c,{keyId:`id`,tableId:`storybook-resizing-columns-subrows`,rows:F,columns:[{field:`recipient`,label:`Получатель`,minWidth:`160px`},{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`createDate`,label:`Дата создания`,minWidth:`120px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,j.jsx)(d,{row:e,mainActions:()=>(0,j.jsx)(u,{actions:S.main}),secondaryActions:()=>(0,j.jsx)(l,{actions:S.secondary})})}],plugins:[f],variant:`subrows`,subrows:{moreButtonColumnPosition:2,initialVisibleChildrenCount:2},onRetry:()=>{}}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const columns: DataGridColumns<DataType>[] = [{
    field: 'recipient',
    label: 'Получатель',
    minWidth: '160px'
  }, {
    field: 'documentName',
    label: 'Наименование документа',
    minWidth: '200px'
  }, {
    field: 'createDate',
    label: 'Дата создания',
    minWidth: '120px',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'actions',
    label: 'Действия',
    align: 'center',
    width: '120px',
    minWidth: '120px',
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={FAKE_ACTIONS.main} />} secondaryActions={() => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />} />
  }];
  return <DataGrid<DataType> keyId="id" tableId="storybook-resizing-columns-subrows" rows={ROWS} columns={columns} plugins={[ResizePlugin]} variant="subrows" subrows={{
    moreButtonColumnPosition: 2,
    initialVisibleChildrenCount: 2
  }} onRetry={() => {}} />;
}`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{s(),A(),L(),R={title:`Table/DataGrid/Resize`,component:c,parameters:{layout:`fullscreen`,docs:{description:{component:"`ResizePlugin` в `plugins` включает изменение ширины колонок перетаскиванием границы в шапке.\n\n```ts\nimport { ResizePlugin } from '@astral/ui/DataGrid/plugins/resize';\n```\n\n- Каждой колонке обязательно задать `minWidth`.\n- Ширина колонки с `field: 'actions'` не меняется.\n\nБазовый пример — story [ResizingColumns](/story/table-datagrid--resizing-columns).\n\nДля новой функции рекомендуем сделать onboarding, иначе пользователи ее не заметят: см. [Onboarding](/story/table-datagrid-resize--onboarding)."}}}},z=[`WithSubrows`,`Onboarding`]})))()}B();export{k as Onboarding,I as WithSubrows,z as __namedExportsOrder,R as default};