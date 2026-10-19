import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,cn as n,ct as r,dt as i,ft as a,ln as o,lt as s,w as c,ya as l,za as u}from"./preview-IOjL1aMA.js";import{c as ee,d,s as f,u as p}from"./DataGrid-DSGN4uQj.js";import{i as m,l as te,t as ne}from"./DataGridActionCell-BEgAqgWK.js";import{t as re}from"./DataGridActionCell-C4mmuyXB.js";import{n as ie,t as ae}from"./BinOutlineMd-D9mQAsIn.js";import{n as oe,t as se}from"./DownloadOutlineMd-3NDnAoEC.js";import{n as h,t as ce}from"./DataGridColumnHintIcon-DK_3jyWr.js";import{a as le,l as ue}from"./NotificationStackContainer-C-fTSId_.js";import{t as de}from"./Notification-CjA70zpC.js";import{Ct as g,Dt as _,K as v,Ot as fe,Tt as pe,at as me,bt as y,ft as he,ht as b,rt as ge,st as x}from"./common-CarACJrP.js";import{n as _e,t as ve}from"./error-_dxK9GiT.js";import{n as ye,t as be}from"./DataGridMassActions-YCw_5tfW.js";var S,C,w,T,E;function D(){return(D=e((()=>{S=u(),ae(),se(),re(),be(),de(),d(),v(),C=l(),w=g.slice(0,20),T=[{field:`documentName`,label:`Наименование документа`,minWidth:`300px`,pinned:`left`},{field:`recipient`,label:`Получатель`,minWidth:`800px`},{field:`createDate`,label:`Дата создания`,minWidth:`800px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,pinned:`right`,renderCell:e=>(0,C.jsx)(ne,{row:e,mainActions:()=>(0,C.jsx)(te,{actions:b.main}),secondaryActions:()=>(0,C.jsx)(m,{actions:b.secondary})})}],E=()=>{let[e,t]=(0,S.useState)(w.slice(0,2)),n=n=>()=>{le.success(`${n}: ${e.length}`),t([])};return(0,C.jsxs)(x,{children:[(0,C.jsx)(p,{keyId:`id`,rows:w,columns:T,selectedRows:e,onSelectRow:t,onRetry:()=>{},massActions:(0,C.jsx)(ye,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:n(`Перемещено в архив документов`)}],main:[{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,C.jsx)(ie,{}),onClick:n(`Удалено документов`)},{text:`Скачать`,variant:`outlined`,color:`grey`,startIcon:(0,C.jsx)(oe,{}),onClick:n(`Скачано документов`)}]})}),(0,C.jsx)(ue,{})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source},description:{story:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,...E.parameters?.docs?.description}}};try{E.displayName=`MassActionsWithPinnedColumns`,E.__docgenInfo={description:`Панель массовых действий в таблице с закреплёнными колонками и горизонтальным скроллом`,displayName:`MassActionsWithPinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/MassActionsWithPinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{c(),d(),_(),v(),O=l(),k=()=>(0,O.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,O.jsx)(x,{children:(0,O.jsx)(p,{keyId:`id`,rows:[],columns:fe(y),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...k.parameters?.docs?.description}}};try{k.displayName=`NoData`,k.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j=u(),n(),r(),i(),d(),f(),v(),M=l(),N=[20,100,300,500],P=[`OverflowTypography`,`Typography`],F={display:`-webkit-box`,overflow:`hidden`,WebkitBoxOrient:`vertical`,WebkitLineClamp:2},I=e=>`
  [data-row-id] {
    content-visibility: auto;
    contain-intrinsic-size: auto ${e}px;
  }
`,L=e=>Array.from({length:8},(t,n)=>{let r=n%2?`recipient`:`documentName`;return{field:r,label:`Колонка ${n+1} с длинным названием`,minWidth:`80px`,renderCell:e===`Typography`?e=>(0,M.jsx)(a,{style:F,children:e[r]}):void 0}}),R=e=>Array.from({length:e},(e,t)=>({id:String(t),documentName:`Договор на оказание услуг по сопровождению документооборота №${t}`,recipient:`Общество с ограниченной ответственностью "Очень длинное наименование организации"`,createDate:pe(t)})),z=({intrinsicHeight:e})=>{let[t,n]=(0,j.useState)(N[0]),[r,i]=(0,j.useState)(!1),[c,l]=(0,j.useState)(P[0]),[u,d]=(0,j.useState)(!1),f=(0,j.useMemo)(()=>R(t),[t]),m=(0,j.useMemo)(()=>L(c),[c]);return(0,M.jsxs)(s,{container:!0,spacing:2,children:[(0,M.jsxs)(s,{container:!0,direction:`column`,spacing:2,justifyContent:`start`,alignItems:`center`,children:[(0,M.jsxs)(a,{children:[`Строк: `,t]}),N.map(e=>(0,M.jsx)(o,{variant:e===t?`contained`:`light`,onClick:()=>n(e),children:e},e)),P.map(e=>(0,M.jsx)(o,{variant:e===c?`contained`:`light`,onClick:()=>l(e),children:e},e)),(0,M.jsxs)(o,{variant:u?`contained`:`light`,onClick:()=>d(e=>!e),children:[`content-visibility: `,u?`auto`:`visible`]}),(0,M.jsxs)(o,{variant:`light`,onClick:()=>i(e=>!e),children:[`isDisabled: `,String(r)]})]}),u&&(0,M.jsx)(`style`,{children:I(e)}),(0,M.jsx)(p,{keyId:`id`,tableId:`storybook-resizing-performance`,rows:f,columns:m,plugins:[ee],isDisabled:r,maxHeight:600,onRetry:()=>{}})]})},z.args={intrinsicHeight:48},z.argTypes={intrinsicHeight:{name:`contain-intrinsic-size, px`,control:{type:`range`,min:16,max:160,step:4}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`({
  intrinsicHeight
}: ResizingPerformanceArgs) => {
  const [rowsCount, setRowsCount] = useState(ROWS_COUNTS[0]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [cellVariant, setCellVariant] = useState<CellVariant>(CELL_VARIANTS[0]);
  const [isContentVisibility, setIsContentVisibility] = useState(false);
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
      {isContentVisibility && <style>{getContentVisibilityCss(intrinsicHeight)}</style>}
      <DataGrid<DataType> keyId="id" tableId="storybook-resizing-performance" rows={rows} columns={columns} plugins={[ResizePlugin]} isDisabled={isDisabled} maxHeight={600} onRetry={() => {}} />
    </Grid>;
}`,...z.parameters?.docs?.source},description:{story:"Производительность изменения ширины: 8 колонок, в каждой ячейке `OverflowTypography` или `Typography`.\nПереключатель `isDisabled` перемонтирует шапку — сохраненные ширины должны остаться",...z.parameters?.docs?.description}}};try{z.displayName=`ResizingPerformance`,z.__docgenInfo={description:"Производительность изменения ширины: 8 колонок, в каждой ячейке `OverflowTypography` или `Typography`.\nПереключатель `isDisabled` перемонтирует шапку — сохраненные ширины должны остаться",displayName:`ResizingPerformance`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/ResizingPerformance.story.tsx`,methods:[],props:{intrinsicHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/ResizingPerformance.story.tsx`,name:`TypeLiteral`}],description:"Высота заглушки строки для `contain-intrinsic-size` в px",name:`intrinsicHeight`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{c(),v(),V=l(),H=()=>(0,V.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,V.jsx)(x,{children:(0,V.jsx)(he,{rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:y})})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=u(),ce(),d(),_(),v(),G=l(),K=()=>{let e=fe(y,[{field:`documentName`,pinned:`left`,columnHint:(0,G.jsx)(h,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,G.jsx)(h,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,pinned:`right`,columnHint:(0,G.jsx)(h,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[t,n]=(0,W.useState)([]);return(0,G.jsx)(ge,{children:(0,G.jsx)(p,{rows:g.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{},selectedRows:t,onSelectRow:e=>n(e)})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...K.parameters?.docs?.description}}};try{K.displayName=`WithHintIcons`,K.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function X(){return(X=e((()=>{_e(),c(),d(),v(),J=l(),Y=()=>(0,J.jsx)(t,{imagesMap:{defaultErrorImgSrc:ve,noDataImgSrc:`../no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,J.jsx)(x,{children:(0,J.jsx)(p,{keyId:`id`,rows:[],columns:y,isLoading:!0,onRowClick:()=>{},onRetry:()=>{}})})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{d(),v(),D(),A(),B(),U(),q(),X(),Z={title:`Table/DataGrid/Tests`,component:p,decorators:me,parameters:{layout:`fullscreen`}},Q=[`MassActionsWithPinnedColumns`,`NoData`,`ResizingPerformance`,`WithError`,`WithHintIcons`,`WithLoading`]})))()}$();export{E as MassActionsWithPinnedColumns,k as NoData,z as ResizingPerformance,H as WithError,K as WithHintIcons,Y as WithLoading,Q as __namedExportsOrder,Z as default};