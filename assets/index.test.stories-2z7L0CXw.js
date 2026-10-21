import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,w as r,xa as i}from"./preview-lt0cavAw.js";import{c as a,s as o}from"./DataGrid-u7XO3mhY.js";import{i as s,l as c,t as ee}from"./DataGridActionCell-BhAGbbgw.js";import{t as l}from"./DataGridActionCell-JWT3UAml.js";import{n as u,t as te}from"./BinOutlineMd-CvNmzySh.js";import{n as d,t as f}from"./DownloadOutlineMd-CIBSV1Dj.js";import{n as p,t as m}from"./DataGridColumnHintIcon-HWNvVsNa.js";import{a as h,l as g}from"./NotificationStackContainer-KjKSm7cq.js";import{t as _}from"./Notification-FhN4zrZZ.js";import{Ct as v,Dt as y,K as b,Ot as x,at as S,bt as C,ft as w,ht as T,rt as E,st as D}from"./common-D51z2-5l.js";import{n as O,t as k}from"./error-_dxK9GiT.js";import{n as A,t as j}from"./DataGridMassActions-BRGBsWJg.js";var M,N,P,F,I;function L(){return(L=e((()=>{M=n(),te(),f(),l(),j(),_(),a(),b(),N=i(),P=v.slice(0,20),F=[{field:`documentName`,label:`Наименование документа`,minWidth:`300px`,pinned:`left`},{field:`recipient`,label:`Получатель`,minWidth:`800px`},{field:`createDate`,label:`Дата создания`,minWidth:`800px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,pinned:`right`,renderCell:e=>(0,N.jsx)(ee,{row:e,mainActions:()=>(0,N.jsx)(c,{actions:T.main}),secondaryActions:()=>(0,N.jsx)(s,{actions:T.secondary})})}],I=()=>{let[e,t]=(0,M.useState)(P.slice(0,2)),n=n=>()=>{h.success(`${n}: ${e.length}`),t([])};return(0,N.jsxs)(D,{children:[(0,N.jsx)(o,{keyId:`id`,rows:P,columns:F,selectedRows:e,onSelectRow:t,onRetry:()=>{},massActions:(0,N.jsx)(A,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:n(`Перемещено в архив документов`)}],main:[{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,N.jsx)(u,{}),onClick:n(`Удалено документов`)},{text:`Скачать`,variant:`outlined`,color:`grey`,startIcon:(0,N.jsx)(d,{}),onClick:n(`Скачано документов`)}]})}),(0,N.jsx)(g,{})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selectedRows, setSelectedRows] = useState<DataType[]>(ROWS.slice(0, 2));

  // Действия только имитируются: строки не удаляются, выбор очищается
  const handleAction = (message: string) => () => {
    notify.success(\`\${message}: \${selectedRows.length}\`);
    setSelectedRows([]);
  };
  return <StoryWrapper>
      <DataGrid<DataType> keyId="id" rows={ROWS} columns={COLUMNS} selectedRows={selectedRows} onSelectRow={setSelectedRows} onRetry={() => {}} massActions={<DataGridMassActions entityDeclension={['документ', 'документа', 'документов']} secondary={[{
      text: 'Переместить в архив',
      onClick: handleAction('Перемещено в архив документов')
    }]} main={[{
      text: 'Удалить',
      variant: 'outlined',
      color: 'error',
      startIcon: <BinOutlineMd />,
      onClick: handleAction('Удалено документов')
    }, {
      text: 'Скачать',
      variant: 'outlined',
      color: 'grey',
      startIcon: <DownloadOutlineMd />,
      onClick: handleAction('Скачано документов')
    }]} />} />
      <NotificationContainer />
    </StoryWrapper>;
}`,...I.parameters?.docs?.source},description:{story:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,...I.parameters?.docs?.description}}};try{I.displayName=`MassActionsWithPinnedColumns`,I.__docgenInfo={description:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,displayName:`MassActionsWithPinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/MassActionsWithPinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{r(),a(),y(),b(),R=i(),z=()=>(0,R.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,R.jsx)(D,{children:(0,R.jsx)(o,{keyId:`id`,rows:[],columns:x(C),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: '',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid keyId="id" rows={[]} columns={makeColumns(FAKE_PINNED_COLUMNS)} onRetry={() => {}} noDataOptions={{
        action: {
          text: 'Сбросить фильтры',
          onClick: () => {}
        }
      }} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...z.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...z.parameters?.docs?.description}}};try{z.displayName=`NoData`,z.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{r(),b(),V=i(),H=()=>(0,V.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,V.jsx)(D,{children:(0,V.jsx)(w,{rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:C})})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <MockDataGrid rows={[]} isError errorMsg="Ошибка 500" columns={FAKE_PINNED_COLUMNS} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=n(),m(),a(),y(),b(),G=i(),K=()=>{let e=x(C,[{field:`documentName`,pinned:`left`,columnHint:(0,G.jsx)(p,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,G.jsx)(p,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,pinned:`right`,columnHint:(0,G.jsx)(p,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[t,n]=(0,W.useState)([]);return(0,G.jsx)(E,{children:(0,G.jsx)(o,{rows:v.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{},selectedRows:t,onSelectRow:e=>n(e)})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const columns = makeColumns(FAKE_PINNED_COLUMNS, [{
    field: 'documentName',
    pinned: 'left',
    columnHint: <DataGridColumnHintIcon title="Наименование документа" note="Полное название документа, включая номер и дату регистрации" />
  }, {
    field: 'createDate',
    columnHint: <DataGridColumnHintIcon title="Дата создания" note="Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ" />
  }, {
    field: 'actions',
    pinned: 'right',
    columnHint: <DataGridColumnHintIcon title="Действия" note="Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа." />
  }]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <DataGridStoryContainer>
      <DataGrid rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} selectedRows={selected} onSelectRow={handleSelect} />
    </DataGridStoryContainer>;
}`,...K.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...K.parameters?.docs?.description}}};try{K.displayName=`WithHintIcons`,K.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function X(){return(X=e((()=>{O(),r(),a(),b(),J=i(),Y=()=>(0,J.jsx)(t,{imagesMap:{defaultErrorImgSrc:k,noDataImgSrc:`../no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,J.jsx)(D,{children:(0,J.jsx)(o,{keyId:`id`,rows:[],columns:C,isLoading:!0,onRowClick:()=>{},onRetry:()=>{}})})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = '../no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: errorIllustration,
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid<DataType, SortField> keyId="id" rows={[]} columns={FAKE_PINNED_COLUMNS} isLoading={true} onRowClick={() => {}} onRetry={() => {}} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{a(),b(),L(),B(),U(),q(),X(),Z={title:`Table/DataGrid/Tests`,component:o,decorators:S,parameters:{layout:`fullscreen`}},Q=[`MassActionsWithPinnedColumns`,`NoData`,`WithError`,`WithHintIcons`,`WithLoading`]})))()}$();export{I as MassActionsWithPinnedColumns,z as NoData,H as WithError,K as WithHintIcons,Y as WithLoading,Q as __namedExportsOrder,Z as default};