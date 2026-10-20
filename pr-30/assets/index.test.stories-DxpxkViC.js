import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,cn as n,ct as r,dt as i,ft as a,ln as o,lt as s,w as c,ya as l,za as u}from"./preview-BgfOFFw_.js";import{c as ee,d,dt as f,ft as te,s as ne,u as p}from"./DataGrid-BWuWciXi.js";import{i as re,l as ie,t as ae}from"./DataGridActionCell-DTI8AZLh.js";import{t as oe}from"./DataGridActionCell-CcEJXpeL.js";import{n as se,t as ce}from"./BinOutlineMd-C43-bLnd.js";import{n as le,t as ue}from"./DownloadOutlineMd-C5OBvjcp.js";import{n as m,t as de}from"./DataGridColumnHintIcon-BXxd48rB.js";import{a as fe,l as pe}from"./NotificationStackContainer-JAHjHAn-.js";import{t as me}from"./Notification-DACbH_3W.js";import{Ct as h,Dt as g,K as _,Ot as v,Tt as he,at as ge,bt as y,ft as _e,ht as b,rt as ve,st as x}from"./common-1U05Na9G.js";import{n as ye,t as be}from"./error-_dxK9GiT.js";import{n as xe,t as Se}from"./DataGridMassActions-Ct7Q1O3E.js";var S,C,w,T,E;function D(){return(D=e((()=>{S=u(),ce(),ue(),oe(),Se(),me(),d(),_(),C=l(),w=h.slice(0,20),T=[{field:`documentName`,label:`Наименование документа`,minWidth:`300px`,pinned:`left`},{field:`recipient`,label:`Получатель`,minWidth:`800px`},{field:`createDate`,label:`Дата создания`,minWidth:`800px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,pinned:`right`,renderCell:e=>(0,C.jsx)(ae,{row:e,mainActions:()=>(0,C.jsx)(ie,{actions:b.main}),secondaryActions:()=>(0,C.jsx)(re,{actions:b.secondary})})}],E=()=>{let[e,t]=(0,S.useState)(w.slice(0,2)),n=n=>()=>{fe.success(`${n}: ${e.length}`),t([])};return(0,C.jsxs)(x,{children:[(0,C.jsx)(p,{keyId:`id`,rows:w,columns:T,selectedRows:e,onSelectRow:t,onRetry:()=>{},massActions:(0,C.jsx)(xe,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:n(`Перемещено в архив документов`)}],main:[{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,C.jsx)(se,{}),onClick:n(`Удалено документов`)},{text:`Скачать`,variant:`outlined`,color:`grey`,startIcon:(0,C.jsx)(le,{}),onClick:n(`Скачано документов`)}]})}),(0,C.jsx)(pe,{})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source},description:{story:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,...E.parameters?.docs?.description}}};try{E.displayName=`MassActionsWithPinnedColumns`,E.__docgenInfo={description:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,displayName:`MassActionsWithPinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/MassActionsWithPinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{c(),d(),g(),_(),O=l(),k=()=>(0,O.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,O.jsx)(x,{children:(0,O.jsx)(p,{keyId:`id`,rows:[],columns:v(y),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...k.parameters?.docs?.description}}};try{k.displayName=`NoData`,k.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j=u(),n(),r(),i(),d(),ne(),te(),_(),M=l(),N=[20,100,300,500],P=[`OverflowTypography`,`Typography`],F={display:`-webkit-box`,overflow:`hidden`,WebkitBoxOrient:`vertical`,WebkitLineClamp:2},I=`
  .${f.root} {
    content-visibility: visible !important;
  }
`,L=e=>Array.from({length:8},(t,n)=>{let r=n%2?`recipient`:`documentName`;return{field:r,label:`Колонка ${n+1} с длинным названием`,minWidth:`80px`,renderCell:e===`Typography`?e=>(0,M.jsx)(a,{style:F,children:e[r]}):void 0}}),R=e=>Array.from({length:e},(e,t)=>({id:String(t),documentName:`Договор на оказание услуг по сопровождению документооборота №${t}`,recipient:`Общество с ограниченной ответственностью "Очень длинное наименование организации"`,createDate:he(t)})),z=()=>{let[e,t]=(0,j.useState)(N[0]),[n,r]=(0,j.useState)(!1),[i,c]=(0,j.useState)(P[0]),[l,u]=(0,j.useState)(!0),d=(0,j.useMemo)(()=>R(e),[e]),f=(0,j.useMemo)(()=>L(i),[i]);return(0,M.jsxs)(s,{container:!0,spacing:2,children:[(0,M.jsxs)(s,{container:!0,direction:`column`,spacing:2,justifyContent:`start`,alignItems:`center`,children:[(0,M.jsxs)(a,{children:[`Строк: `,e]}),N.map(n=>(0,M.jsx)(o,{variant:n===e?`contained`:`light`,onClick:()=>t(n),children:n},n)),P.map(e=>(0,M.jsx)(o,{variant:e===i?`contained`:`light`,onClick:()=>c(e),children:e},e)),(0,M.jsxs)(o,{variant:l?`contained`:`light`,onClick:()=>u(e=>!e),children:[`content-visibility: `,l?`auto`:`visible`]}),(0,M.jsxs)(o,{variant:`light`,onClick:()=>r(e=>!e),children:[`isDisabled: `,String(n)]})]}),!l&&(0,M.jsx)(`style`,{children:I}),(0,M.jsx)(p,{keyId:`id`,tableId:`storybook-resizing-performance`,rows:d,columns:f,plugins:[ee],isDisabled:n,maxHeight:600,onRetry:()=>{}})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [rowsCount, setRowsCount] = useState(ROWS_COUNTS[0]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cellVariant, setCellVariant] = useState<CellVariant>(CELL_VARIANTS[0]);
  const [isContentVisibility, setIsContentVisibility] = useState(true);
  const rows = useMemo(() => makeRows(rowsCount), [rowsCount]);
  const columns = useMemo(() => makeColumns(cellVariant), [cellVariant]);
  return <Grid container spacing={2}>
      <Grid container direction="column" spacing={2} justifyContent="start" alignItems="center">
        <Typography>Строк: {rowsCount}</Typography>
        {ROWS_COUNTS.map(count => <Button key={count} variant={count === rowsCount ? 'contained' : 'light'} onClick={() => setRowsCount(count)}>
            {count}
          </Button>)}
        {CELL_VARIANTS.map(variant => <Button key={variant} variant={variant === cellVariant ? 'contained' : 'light'} onClick={() => setCellVariant(variant)}>
            {variant}
          </Button>)}
        <Button variant={isContentVisibility ? 'contained' : 'light'} onClick={() => setIsContentVisibility(prev => !prev)}>
          content-visibility: {isContentVisibility ? 'auto' : 'visible'}
        </Button>
        <Button variant="light" onClick={() => setIsDisabled(prev => !prev)}>
          isDisabled: {String(isDisabled)}
        </Button>
      </Grid>
      {!isContentVisibility && <style>{CONTENT_VISIBILITY_OFF_CSS}</style>}
      <DataGrid<DataType> keyId="id" tableId="storybook-resizing-performance" rows={rows} columns={columns} plugins={[ResizePlugin]} isDisabled={isDisabled} maxHeight={600} onRetry={() => {}} />
    </Grid>;
}`,...z.parameters?.docs?.source},description:{story:"Производительность изменения ширины: 8 колонок, в каждой ячейке `OverflowTypography` или `Typography`.\nПереключатель `content-visibility` отключает пропуск раскладки невидимых строк — для сравнения FPS при drag.\nПереключатель `isDisabled` перемонтирует шапку — сохраненные ширины должны остаться",...z.parameters?.docs?.description}}};try{z.displayName=`ResizingPerformance`,z.__docgenInfo={description:"Производительность изменения ширины: 8 колонок, в каждой ячейке `OverflowTypography` или `Typography`.\nПереключатель `content-visibility` отключает пропуск раскладки невидимых строк — для сравнения FPS при drag.\nПереключатель `isDisabled` перемонтирует шапку — сохраненные ширины должны остаться",displayName:`ResizingPerformance`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/ResizingPerformance.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{c(),_(),V=l(),H=()=>(0,V.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,V.jsx)(x,{children:(0,V.jsx)(_e,{rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:y})})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=u(),de(),d(),g(),_(),G=l(),K=()=>{let e=v(y,[{field:`documentName`,pinned:`left`,columnHint:(0,G.jsx)(m,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,G.jsx)(m,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,pinned:`right`,columnHint:(0,G.jsx)(m,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[t,n]=(0,W.useState)([]);return(0,G.jsx)(ve,{children:(0,G.jsx)(p,{rows:h.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{},selectedRows:t,onSelectRow:e=>n(e)})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...K.parameters?.docs?.description}}};try{K.displayName=`WithHintIcons`,K.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function X(){return(X=e((()=>{ye(),c(),d(),_(),J=l(),Y=()=>(0,J.jsx)(t,{imagesMap:{defaultErrorImgSrc:be,noDataImgSrc:`../no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,J.jsx)(x,{children:(0,J.jsx)(p,{keyId:`id`,rows:[],columns:y,isLoading:!0,onRowClick:()=>{},onRetry:()=>{}})})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{d(),_(),D(),A(),B(),U(),q(),X(),Z={title:`Table/DataGrid/Tests`,component:p,decorators:ge,parameters:{layout:`fullscreen`}},Q=[`MassActionsWithPinnedColumns`,`NoData`,`ResizingPerformance`,`WithError`,`WithHintIcons`,`WithLoading`]})))()}$();export{E as MassActionsWithPinnedColumns,k as NoData,z as ResizingPerformance,H as WithError,K as WithHintIcons,Y as WithLoading,Q as __namedExportsOrder,Z as default};