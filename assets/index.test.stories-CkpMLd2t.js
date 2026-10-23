import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,w as n,ya as r,za as i}from"./preview-BYX69pdz.js";import{c as a,s as o}from"./DataGrid-CkueoPAH.js";import{i as s,l as c,t as l}from"./DataGridActionCell-Cft2ShnO.js";import{t as u}from"./DataGridActionCell-BBI2H34N.js";import{n as ee,t as d}from"./BinOutlineMd-DDM0LhA8.js";import{n as f,t as p}from"./DownloadOutlineMd-Dq6eV4Uz.js";import{n as m,t as h}from"./DataGridColumnHintIcon-VkYbODUg.js";import{a as g,l as _}from"./NotificationStackContainer-Bw8zAKEF.js";import{t as v}from"./Notification-DRfXf39z.js";import{Ct as y,Dt as b,K as x,Ot as S,at as C,bt as w,ft as te,ht as T,rt as E,st as D}from"./common-B_Nwkf92.js";import{n as O,t as k}from"./error-_dxK9GiT.js";import{n as A,t as j}from"./DataGridMassActions-NcqwBHoQ.js";var M,N,P,F,I;function L(){return(L=e((()=>{M=i(),d(),p(),u(),j(),v(),a(),x(),N=r(),P=y.slice(0,20),F=[{field:`documentName`,label:`Наименование документа`,minWidth:`300px`,pinned:`left`},{field:`recipient`,label:`Получатель`,minWidth:`800px`},{field:`createDate`,label:`Дата создания`,minWidth:`800px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,pinned:`right`,renderCell:e=>(0,N.jsx)(l,{row:e,mainActions:()=>(0,N.jsx)(c,{actions:T.main}),secondaryActions:()=>(0,N.jsx)(s,{actions:T.secondary})})}],I=()=>{let[e,t]=(0,M.useState)(P.slice(0,2)),n=n=>()=>{g.success(`${n}: ${e.length}`),t([])};return(0,N.jsxs)(D,{children:[(0,N.jsx)(o,{keyId:`id`,rows:P,columns:F,selectedRows:e,onSelectRow:t,onRetry:()=>{},massActions:(0,N.jsx)(A,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:n(`Перемещено в архив документов`)}],main:[{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,N.jsx)(ee,{}),onClick:n(`Удалено документов`)},{text:`Скачать`,variant:`outlined`,color:`grey`,startIcon:(0,N.jsx)(f,{}),onClick:n(`Скачано документов`)}]})}),(0,N.jsx)(_,{})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,...I.parameters?.docs?.description}}};try{I.displayName=`MassActionsWithPinnedColumns`,I.__docgenInfo={description:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,displayName:`MassActionsWithPinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/MassActionsWithPinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{n(),a(),b(),x(),R=r(),z=()=>(0,R.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,R.jsx)(D,{children:(0,R.jsx)(o,{keyId:`id`,rows:[],columns:S(w),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...z.parameters?.docs?.description}}};try{z.displayName=`NoData`,z.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{n(),x(),V=r(),H=()=>(0,V.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,V.jsx)(D,{children:(0,V.jsx)(te,{rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:w})})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=i(),h(),a(),b(),x(),G=r(),K=()=>{let e=S(w,[{field:`documentName`,pinned:`left`,columnHint:(0,G.jsx)(m,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,G.jsx)(m,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,pinned:`right`,columnHint:(0,G.jsx)(m,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[t,n]=(0,W.useState)([]);return(0,G.jsx)(E,{children:(0,G.jsx)(o,{rows:y.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{},selectedRows:t,onSelectRow:e=>n(e)})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...K.parameters?.docs?.description}}};try{K.displayName=`WithHintIcons`,K.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function X(){return(X=e((()=>{O(),n(),a(),x(),J=r(),Y=()=>(0,J.jsx)(t,{imagesMap:{defaultErrorImgSrc:k,noDataImgSrc:`../no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,J.jsx)(D,{children:(0,J.jsx)(o,{keyId:`id`,rows:[],columns:w,isLoading:!0,onRowClick:()=>{},onRetry:()=>{}})})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{a(),x(),L(),B(),U(),q(),X(),Z={title:`Table/DataGrid/Tests`,component:o,decorators:C,parameters:{layout:`fullscreen`}},Q=[`MassActionsWithPinnedColumns`,`NoData`,`WithError`,`WithHintIcons`,`WithLoading`]})))()}$();export{I as MassActionsWithPinnedColumns,z as NoData,H as WithError,K as WithHintIcons,Y as WithLoading,Q as __namedExportsOrder,Z as default};