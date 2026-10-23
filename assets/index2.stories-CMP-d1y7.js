import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,dt as n,ft as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-BXnWBjdd.js";import{c as l,lt as ee,s as u,t as te}from"./DataGrid-CNZl6xnQ.js";import{r as ne,t as re}from"./dividerClasses-D8I4Dfo8.js";import{i as ie}from"./TagsList-B92LNS3X.js";import{n as ae}from"./useNewToggle-DUPmBWV6.js";import{i as oe,l as se,t as ce}from"./DataGridActionCell-Ccf9-zy5.js";import{t as le}from"./ConfirmDialog-CHv58uHi.js";import{t as ue}from"./ConfirmDialog-gOrJz7NB.js";import{a as de,t as fe}from"./LoadingPlaceholder-BXrvq4II.js";import{t as pe}from"./ContentState-BSYF2ZZl.js";import{t as me}from"./ContentState-CCjmPgQC.js";import{n as he,t as ge}from"./DashboardLayout-DA7b0mnW.js";import{n as _e,t as ve}from"./resize-Bv0boLiL.js";import{t as ye}from"./DataGridActionCell-Cy44tYU7.js";import{t as be}from"./DataGridMinimalisticPagination-Ier3MTAh.js";import{t as xe}from"./DataGridMinimalisticPagination-C90r5XZY.js";import{t as Se}from"./DataGridPagination-CFBj3MUb.js";import{t as Ce}from"./DataGridPagination-BsCg1b6B.js";import{n as we,t as Te}from"./BinOutlineMd-Df_z5H7q.js";import{n as Ee,t as De}from"./EyeOutlineMd-CWgijEk7.js";import{i as Oe,t as ke}from"./PageContent-Lmyq0QFY.js";import{n as Ae,t as je}from"./DataGridColumnHintIcon-BLo9GaLl.js";import{t as Me}from"./PageLayout-DP921qu9.js";import{t as Ne}from"./PageLayout-BYdxTDYk.js";import{n as Pe,t as Fe}from"./EditOutlineMd-DdL8ED1t.js";import{n as Ie,t as Le}from"./DocSignedOutlineMd-BWcKkM-w.js";import{n as Re,t as ze}from"./SendOutlineMd-B79OMJ_9.js";import{a as Be}from"./NotificationStackContainer-DwNQxZut.js";import{t as Ve}from"./Notification-C1JVtkQA.js";import{$ as He,Ct as d,Dt as f,J as Ue,K as p,Ot as m,Y as We,Z as Ge,_t as Ke,at as qe,ft as h,gt as g,ht as Je,in as Ye,jt as Xe,kt as Ze,lt as Qe,mt as $e,rt as _,st as v,t as et,tt as y,vt as tt,xt as nt,yt as rt}from"./common-CrpFS8CY.js";import{t as it}from"./groupedColumnsData-CDV9aELb.js";import{n as at,t as ot}from"./error-_dxK9GiT.js";import{i as st,n as ct,r as lt,t as ut}from"./chunk-62JRHF6Z-Dc60hsvz.js";import{n as dt,t as ft}from"./DataGridCollapsibleRow-B_ln5GEx.js";import{n as b,t as x}from"./StoryControlWrapper-ByAnwBSM.js";import{n as pt,t as mt}from"./DataGridMassActions-ui0YpVa7.js";var ht,S,gt,_t;function vt(){return(vt=e((()=>{ht=c(),ge(),et(),ke(),Ne(),l(),f(),p(),S=o(),gt=d.slice(0,10),_t=()=>{let e=m(g),[t,n]=(0,ht.useState)(!1);return(0,ht.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,S.jsx)(v,{children:(0,S.jsxs)(he,{children:[(0,S.jsx)(Ye,{}),(0,S.jsx)(he.Main,{children:(0,S.jsx)(Me,{content:(0,S.jsx)(Oe,{children:(0,S.jsx)(u,{keyId:`id`,rows:gt,columns:e,isLoading:t,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})})})]})})},_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`() => {
  const columns = makeColumns(FAKE_COLUMNS);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  return <StoryWrapper>
      <DashboardLayout>
        <MockDashboardHeader />
        <DashboardLayout.Main>
          <PageLayout content={<PageContent>
                <DataGrid<DataType, SortField> keyId="id" rows={FAKE_ROWS} columns={columns} isLoading={isLoading} onRowClick={handleRowClick} onRetry={() => {}} />
              </PageContent>} />
        </DashboardLayout.Main>
      </DashboardLayout>
    </StoryWrapper>;
}`,..._t.parameters?.docs?.source}}}})))()}var yt,C,bt,xt,w,St,T;function Ct(){return(Ct=e((()=>{ne(),yt=c(),me(),te(),ft(),fe(),s(),p(),C=o(),bt=d.slice(0,5),xt=i(u)`
  & .${re.root} {
    display: none;
  }

  &.${ee.mobileVariantCards} .${ee.wrapper} {
    margin: 0;
  }
`,w=()=>(0,C.jsx)(xt,{mobileDisplayVariant:`cards`,keyId:`id`,rows:nt,columns:$e,onRetry:()=>{}}),St=i.div`
  & .${de.root} {
    height: 200px;
  }
`,T=()=>{let e=({initialOpen:e})=>{let[t,n]=(0,yt.useState)(!1);return(0,C.jsx)(dt,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,C.jsx)(St,{children:(0,C.jsx)(pe,{isLoading:t,children:(0,C.jsx)(w,{})})})})},t=(0,yt.useCallback)((t,n)=>(0,C.jsx)(e,{initialOpen:n===1}),[]);return(0,C.jsx)(Ge,{children:(0,C.jsx)(h,{rows:bt,renderRow:t,mobileDisplayVariant:`cards`})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <StyledDataGrid mobileDisplayVariant="cards" keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} />`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const CollapsibleDocumentRow = ({
    initialOpen
  }: {
    initialOpen: boolean;
  }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleOpen = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
    return <DataGridCollapsibleRow initialOpen={initialOpen} onOpen={handleOpen}>
        <Wrapper>
          <ContentState isLoading={isLoading}>
            <DocumentsTable />
          </ContentState>
        </Wrapper>
      </DataGridCollapsibleRow>;
  };
  const renderRow = useCallback((_row: DataType, index: number) => {
    return <CollapsibleDocumentRow initialOpen={index === 1} />;
  }, []);
  return <CardsContainer>
      <MockDataGrid rows={FAKE_ROWS} renderRow={renderRow} mobileDisplayVariant="cards" />
    </CardsContainer>;
}`,...T.parameters?.docs?.source},description:{story:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",...T.parameters?.docs?.description}}};try{T.displayName=`CollapsibleRows`,T.__docgenInfo={description:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",displayName:`CollapsibleRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/CollapsibleRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,wt;function Tt(){return(Tt=e((()=>{Te(),ye(),l(),f(),p(),E=o(),wt=()=>{let e={main:[{icon:(0,E.jsx)(we,{}),name:`Удалить`,needConfirm:!0,confirmText:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmMobileTitle:`Удаление черновика`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},onClick:e=>alert(`Delete: ${JSON.stringify(e)}`)}]},t=m(g,[{field:`actions`,renderCell:t=>(0,E.jsx)(ce,{row:t,mainActions:()=>(0,E.jsx)(se,{actions:e.main})})}]);return(0,E.jsx)(v,{children:(0,E.jsx)(_,{children:(0,E.jsx)(u,{rows:d.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
  const actions: DataGridActions<DataType> = {
    main: [{
      icon: <BinOutlineMd />,
      name: 'Удалить',
      needConfirm: true,
      confirmText: 'Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?',
      confirmMobileTitle: 'Удаление черновика',
      confirmButtonProps: {
        text: 'Да, удалить',
        isAccented: true
      },
      onClick: row => alert(\`Delete: \${JSON.stringify(row)}\`)
    }]
  };
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'actions',
    renderCell: row => {
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={actions.main} />} />;
    }
  }]);
  return <StoryWrapper>
      <DataGridStoryContainer>
        <DataGrid rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...wt.parameters?.docs?.source}}}})))()}var Et,D,O;function Dt(){return(Dt=e((()=>{Et=c(),Fe(),ye(),l(),p(),D=o(),O=()=>{let e=(0,Et.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,Et.useState)([]),r=(0,Et.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,Et.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,D.jsx)(ce,{row:e,mainActions:()=>(0,D.jsx)(se,{actions:[{icon:(0,D.jsx)(Pe,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,D.jsx)(v,{children:(0,D.jsx)(_,{children:(0,D.jsx)(u,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const rows = useMemo<DataGridRowWithOptions<Document>[]>(() => [{
    id: '1',
    documentName: 'УПД №1934',
    recipient: 'ООО "Волшебные документы"',
    createDate: '2026-04-17T15:55:00.000Z',
    status: 'Отправлен',
    hasAccess: true
  }, {
    id: '2',
    documentName: 'Акт сверки №77',
    recipient: 'ИП Иванов О.В.',
    createDate: '2026-04-15T08:05:00.000Z',
    status: 'Черновик',
    hasAccess: false
  }, {
    id: '3',
    documentName: 'Счёт-фактура №418',
    recipient: 'ПАО "Первый завод"',
    createDate: '2026-04-14T11:40:00.000Z',
    status: 'На согласовании',
    hasAccess: true
  }, {
    id: '4',
    documentName: 'Договор поставки №12-0425',
    recipient: 'ООО "Ромашка"',
    createDate: '2026-04-12T09:15:00.000Z',
    status: 'Черновик',
    hasAccess: true
  }, {
    id: '5',
    documentName: 'Договор аренды №3',
    recipient: 'ООО "Ромашка"',
    createDate: '2026-04-18T10:30:00.000Z',
    status: 'Черновик',
    hasAccess: true
  }, {
    id: '6',
    documentName: 'Акт выполненных работ №56',
    recipient: 'ПАО "Первый завод"',
    createDate: '2026-04-20T16:10:00.000Z',
    status: 'Черновик',
    hasAccess: true
  }], []);
  const [selectedRows, setSelectedRows] = useState<Document[]>([]);
  const getRowDisabled = useCallback((row: Document): DataGridRowDisabled | undefined => {
    if (!row.hasAccess) {
      return {
        mode: 'row',
        reason: 'Нет доступа к документу'
      };
    }
    if (row.status === 'Отправлен') {
      return {
        mode: 'selection',
        reason: 'Документ уже отправлен получателю'
      };
    }

    // Действия в последней ячейке остаются доступными
    if (row.status === 'На согласовании') {
      return {
        mode: 'row-except-last-cell',
        reason: 'Документ на согласовании'
      };
    }
    return undefined;
  }, []);
  const columns = useMemo<DataGridColumns<Document>[]>(() => [{
    field: 'documentName',
    label: 'Наименование документа',
    minWidth: '200px'
  }, {
    field: 'recipient',
    label: 'Получатель',
    minWidth: '200px'
  }, {
    field: 'status',
    label: 'Статус',
    minWidth: '160px'
  }, {
    label: 'Действия',
    align: 'center',
    width: '120px',
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
      icon: <EditOutlineMd />,
      name: 'Редактировать',
      onClick: () => {}
    }]} />} />
  }], []);
  return <StoryWrapper>
      <DataGridStoryContainer>
        <DataGrid<Document> keyId="id" rows={rows} columns={columns} selectedRows={selectedRows} onSelectRow={setSelectedRows} getRowDisabled={getRowDisabled} onRetry={() => {}} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...O.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...O.parameters?.docs?.description}}};try{O.displayName=`DisabledRows`,O.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ot,kt;function At(){return(At=e((()=>{l(),f(),p(),Ot=o(),kt=()=>{let e=m([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}]),t=[{id:`123456789`,createDate:Xe()},...Ze(tt)];return(0,Ot.jsx)(v,{children:(0,Ot.jsx)(_,{children:(0,Ot.jsx)(u,{rows:t.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{}})})})},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => {
  const fakeColumns: DataGridColumns<DataTypeEmptyCell>[] = [{
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true
  }, {
    field: 'recipient',
    label: 'Получатель',
    sortable: true
  }, {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }];
  const columns = makeColumns(fakeColumns);
  const fakeData: DataGridRowWithOptions<DataTypeEmptyCell>[] = [{
    id: '123456789',
    createDate: makeRandomDate()
  }, ...makeDataList(FAKE_DATA_TEMPLATE_EMPTY)];
  return <StoryWrapper>
      <DataGridStoryContainer>
        <DataGrid<DataTypeEmptyCell> rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...kt.parameters?.docs?.source}}}})))()}var jt,k;function Mt(){return(Mt=e((()=>{x(),p(),jt=o(),k=e=>(0,jt.jsx)(b,{controls:(0,jt.jsx)(y,{...e}),children:(0,jt.jsx)(v,{children:(0,jt.jsx)(_,{children:(0,jt.jsx)(h,{rows:d.slice(0,10),gridViewMode:e.gridViewMode})})})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: DataGridStoryArgs) => {
  return <StoryControlWrapper controls={<GridViewModeRadioGroup {...args} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={fakeData.slice(0, 10)} gridViewMode={args.gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...k.parameters?.docs?.source}}};try{k.displayName=`GridViewMode`,k.__docgenInfo={description:``,displayName:`GridViewMode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/GridViewMode.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Nt,Pt,A;function Ft(){return(Ft=e((()=>{x(),s(),l(),f(),p(),Nt=o(),Pt=i(v)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 100%;
  }
`,A=()=>{let e=g.map((e,t)=>({...e,hideTitleOnMobile:t===0}));return(0,Nt.jsx)(b,{children:(0,Nt.jsx)(Pt,{children:(0,Nt.jsx)(_,{children:(0,Nt.jsx)(u,{keyId:`id`,rows:d.slice(0,10),columns:m(e),onRetry:()=>{}})})})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const columns = FAKE_COLUMNS.map((column, index) => ({
    ...column,
    hideTitleOnMobile: index === 0
  }));
  return <StoryControlWrapper>
      <StyledStoryWrapper>
        <DataGridStoryContainer>
          <DataGrid keyId="id" rows={fakeData.slice(0, 10)} columns={makeColumns(columns)} onRetry={() => {}} />
        </DataGridStoryContainer>
      </StyledStoryWrapper>
    </StoryControlWrapper>;
}`,...A.parameters?.docs?.source},description:{story:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",...A.parameters?.docs?.description}}};try{A.displayName=`HideColumnTitleOnMobile`,A.__docgenInfo={description:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",displayName:`HideColumnTitleOnMobile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/HideColumnTitleOnMobile.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var It,Lt;function Rt(){return(Rt=e((()=>{a(),l(),f(),p(),It=o(),Lt=()=>(0,It.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,It.jsx)(v,{children:(0,It.jsx)(u,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:m(g),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: '',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid isHideHeaderIfNoData keyId="id" rows={[]} columns={makeColumns(FAKE_COLUMNS)} onRetry={() => {}} noDataOptions={{
        action: {
          text: 'Сбросить фильтры',
          onClick: () => {}
        }
      }} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...Lt.parameters?.docs?.source}}}})))()}var zt,Bt;function Vt(){return(Vt=e((()=>{at(),a(),p(),zt=o(),Bt=()=>(0,zt.jsx)(t,{imagesMap:{defaultErrorImgSrc:ot,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,zt.jsx)(v,{children:(0,zt.jsx)(h,{isLoading:!0,rows:[],mobileDisplayVariant:`cards`})})}),Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: errorIllustration,
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <MockDataGrid isLoading rows={[]} mobileDisplayVariant="cards" />
      </StoryWrapper>
    </ConfigProvider>;
}`,...Bt.parameters?.docs?.source}}}})))()}var Ht,j,Ut,M;function Wt(){return(Wt=e((()=>{Ht=c(),Te(),Le(),ze(),ue(),mt(),Ce(),Ve(),ie(),l(),p(),j=o(),Ut=10,M=()=>{let{rows:e,send:t,sign:n,remove:r}=Ue(),[i,a]=(0,Ht.useState)(1),[o,s]=(0,Ht.useState)([]),[c,l]=(0,Ht.useState)(!1),[ee,te]=ae(!1),ne=(0,Ht.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),re=()=>o.map(({id:e})=>e),ie=()=>te(!0),oe=()=>te(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u,{keyId:`id`,rows:e.slice((i-1)*Ut,i*Ut),columns:Ke,selectedRows:o,onSelectRow:s,getRowDisabled:ne,onRetry:()=>{},footer:(0,j.jsx)(Se,{rowsPerPage:Ut,totalCount:e.length,page:i,onChange:(e,t)=>a(t)}),massActions:(0,j.jsx)(pt,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{Be.info(`Перемещено в архив документов: ${o.length}`),s([])}}],main:[{text:`Отправить`,startIcon:(0,j.jsx)(Re,{}),onClick:()=>{t(re()),s([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,j.jsx)(Ie,{}),onClick:()=>{n(re()),s([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,j.jsx)(we,{}),loading:c,isBlockingOperation:!0,onClick:ie}]})}),(0,j.jsx)(le,{open:ee,title:`Удалить документы: ${o.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:oe,actions:{confirm:{text:`Удалить`,onClick:async()=>{oe(),l(!0),await r(re()),s([]),l(!1)}},cancel:{text:`Отмена`}}})]})},M.decorators=[We],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const {
    rows,
    send,
    sign,
    remove
  } = useDocumentsOperations();
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<DocumentWithStatus[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmOpen, toggleConfirm] = useNewToggle(false);
  const getRowDisabled = useCallback((row: DocumentWithStatus): DataGridRowDisabled | undefined => {
    if (row.status === 'Отправляется') {
      return {
        mode: 'selection',
        reason: 'Документ отправляется'
      };
    }
    if (row.status === 'Подписывается') {
      return {
        mode: 'selection',
        reason: 'Документ подписывается'
      };
    }
    return undefined;
  }, []);
  const getSelectedIds = () => selectedRows.map(({
    id
  }) => id);
  const openConfirm = () => toggleConfirm(true);
  const closeConfirm = () => toggleConfirm(false);
  const handleSend = () => {
    send(getSelectedIds());
    setSelectedRows([]);
  };
  const handleSign = () => {
    sign(getSelectedIds());
    setSelectedRows([]);
  };
  const handleDelete = async () => {
    closeConfirm();
    setIsDeleting(true);
    await remove(getSelectedIds());
    setSelectedRows([]);
    setIsDeleting(false);
  };
  const handleArchive = () => {
    notify.info(\`Перемещено в архив документов: \${selectedRows.length}\`);
    setSelectedRows([]);
  };
  return <>
      <DataGrid<DocumentWithStatus> keyId="id" rows={rows.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE)} columns={FAKE_COLUMNS_WITH_STATUS} selectedRows={selectedRows} onSelectRow={setSelectedRows} getRowDisabled={getRowDisabled} onRetry={() => {}} footer={<DataGridPagination rowsPerPage={ROWS_PER_PAGE} totalCount={rows.length} page={page} onChange={(_, newPage) => setPage(newPage)} />} massActions={<DataGridMassActions entityDeclension={['документ', 'документа', 'документов']} secondary={[{
      text: 'Переместить в архив',
      onClick: handleArchive
    }]} main={[{
      text: 'Отправить',
      startIcon: <SendOutlineMd />,
      onClick: handleSend
    }, {
      text: 'Подписать',
      variant: 'outlined',
      color: 'grey',
      startIcon: <DocSignedOutlineMd />,
      onClick: handleSign
    }, {
      text: 'Удалить',
      variant: 'outlined',
      color: 'error',
      startIcon: <BinOutlineMd />,
      loading: isDeleting,
      isBlockingOperation: true,
      onClick: openConfirm
    }]} />} />
      <ConfirmDialog open={isConfirmOpen} title={\`Удалить документы: \${selectedRows.length}?\`} description="Удалённые документы нельзя будет восстановить" onClose={closeConfirm} actions={{
      confirm: {
        text: 'Удалить',
        onClick: handleDelete
      },
      cancel: {
        text: 'Отмена'
      }
    }} />
    </>;
}`,...M.parameters?.docs?.source}}}})))()}var N,Gt,Kt,qt,Jt,P;function Yt(){return(Yt=e((()=>{s(),n(),l(),f(),p(),N=o(),Gt=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],Kt=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],qt=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,Jt=i.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,P=()=>{let e=d.slice(0,5);return(0,N.jsxs)(qt,{children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(r,{variant:`h5`,color:`error`,gutterBottom:!0,children:`❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния`}),(0,N.jsx)(Jt,{children:(0,N.jsx)(u,{keyId:`id`,rows:e,columns:m(Gt),onRetry:()=>{}})})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(r,{variant:`h5`,color:`success`,gutterBottom:!0,children:`✅ С minWidth - колонки защищены от чрезмерного сжатия`}),(0,N.jsx)(Jt,{children:(0,N.jsx)(u,{keyId:`id`,rows:e,columns:m(Kt),onRetry:()=>{}})})]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const rows = fakeData.slice(0, 5);
  return <StoryWrapper>
      <div>
        <Typography variant="h5" color="error" gutterBottom>
          ❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(COLUMNS_WITHOUT_MIN_WIDTH)} onRetry={() => {}} />
        </Wrapper>
      </div>

      <div>
        <Typography variant="h5" color="success" gutterBottom>
          ✅ С minWidth - колонки защищены от чрезмерного сжатия
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(COLUMNS_WITH_MIN_WIDTH)} onRetry={() => {}} />
        </Wrapper>
      </div>
    </StoryWrapper>;
}`,...P.parameters?.docs?.source},description:{story:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",...P.parameters?.docs?.description}}};try{P.displayName=`MinWidth`,P.__docgenInfo={description:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",displayName:`MinWidth`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MinWidth.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Xt,Zt,Qt,$t;function en(){return(en=e((()=>{Xt=c(),l(),f(),p(),Zt=o(),Qt=d.slice(0,10),$t=()=>{let e=m(g),[t,n]=(0,Xt.useState)(!0);return(0,Xt.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,Zt.jsx)(Ge,{children:(0,Zt.jsx)(u,{keyId:`id`,rows:Qt,columns:e,isLoading:t,mobileDisplayVariant:`cards`,onRetry:()=>{}})})};try{$t.displayName=`MobileDisplayVariant`,$t.__docgenInfo={description:"Параметр `mobileDisplayVariant` позволяет изменить отображение таблицы и состояние загрузки на мобильных устройствах.\n\n- `cards` - отображает таблицу в виде карточек\n- `list` - отображает таблицу в виде списка\n\nОткрывать Story необходимо на мобильном устройстве.",displayName:`MobileDisplayVariant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MobileDisplayVariant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var tn,F;function nn(){return(nn=e((()=>{a(),l(),f(),p(),tn=o(),F=()=>(0,tn.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,tn.jsx)(v,{children:(0,tn.jsx)(u,{keyId:`id`,rows:[],columns:m(g),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: '',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid keyId="id" rows={[]} columns={makeColumns(FAKE_COLUMNS)} onRetry={() => {}} noDataOptions={{
        action: {
          text: 'Сбросить фильтры',
          onClick: () => {}
        }
      }} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...F.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...F.parameters?.docs?.description}}};try{F.displayName=`NoData`,F.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var rn,an,I;function on(){return(on=e((()=>{x(),rn=c(),l(),p(),an=o(),I=()=>{let[e,t]=(0,rn.useState)(!0),n=(e,n)=>{t(n===`tabularNum`)},r=[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`,hideTitleOnMobile:!0},{label:`К продлению`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},...rt.slice(2)];return(0,an.jsx)(b,{controls:(0,an.jsx)(He,{isTabularNums:e,handleChange:n}),isShowControlsOnMobile:!0,children:(0,an.jsx)(v,{children:(0,an.jsx)(_,{children:(0,an.jsx)(u,{isTabularNums:e,columns:r,rows:it,keyId:`id`,onRetry:()=>{}})})})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [isTabularNums, setIsTabularNums] = useState(true);
  const handleChange = (_: ChangeEvent<HTMLInputElement>, value: string) => {
    setIsTabularNums(value === 'tabularNum');
  };
  const columns: DataGridColumns<DataType>[] = [{
    field: 'region',
    label: 'Регион',
    width: '1fr',
    minWidth: '200px',
    hideTitleOnMobile: true
  }, {
    label: 'К продлению',
    children: [{
      field: 'extensionPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'extensionIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, ...FAKE_GROUPED_COLUMNS.slice(2)];
  return <StoryControlWrapper controls={<TabularNumsRadioGroup isTabularNums={isTabularNums} handleChange={handleChange} />} isShowControlsOnMobile>
      <StoryWrapper>
        <DataGridStoryContainer>
          <DataGrid isTabularNums={isTabularNums} columns={columns} rows={groupedColumnsData} keyId="id" onRetry={() => {}} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...I.parameters?.docs?.source},description:{story:`Пример использования: таблица с числовыми данными и группировкой колонок`,...I.parameters?.docs?.description}}};try{I.displayName=`NumericTableWithGroupedColumns`,I.__docgenInfo={description:`Пример использования: таблица с числовыми данными и группировкой колонок`,displayName:`NumericTableWithGroupedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NumericTableWithGroupedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var sn,cn,L;function ln(){return(ln=e((()=>{x(),sn=c(),l(),ve(),p(),cn=o(),L=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,sn.useState)(),i=(0,sn.useMemo)(()=>{let e=d.slice(0,5);if(!n)return e;let t=n.sort===`asc`?1:-1;return[...e].sort((e,r)=>e[n.fieldId].localeCompare(r[n.fieldId])*t)},[n]);return(0,cn.jsx)(b,{controls:(0,cn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,cn.jsx)(u,{keyId:`id`,tableId:`storybook-resizing-columns`,rows:i,columns:g,plugins:[_e],sorting:n,onSort:r,gridViewMode:e,onRetry:()=>{}})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();
  const rows = useMemo(() => {
    const documents = fakeData.slice(0, 5);
    if (!sorting) {
      return documents;
    }
    const direction = sorting.sort === 'asc' ? 1 : -1;
    return [...documents].sort((a, b) => a[sorting.fieldId].localeCompare(b[sorting.fieldId]) * direction);
  }, [sorting]);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <DataGrid<DataType, SortField> keyId="id" tableId="storybook-resizing-columns" rows={rows} columns={FAKE_COLUMNS} plugins={[ResizePlugin]} sorting={sorting} onSort={setSorting} gridViewMode={gridViewMode} onRetry={() => {}} />
    </StoryControlWrapper>;
}`,...L.parameters?.docs?.source},description:{story:"`ResizePlugin` в `plugins` включает изменение ширины колонок перетаскиванием границы в шапке.\n\nПравила подключения и остальные примеры [здесь](/docs/table-datagrid-resize--docs).",...L.parameters?.docs?.description}}};try{L.displayName=`ResizingColumns`,L.__docgenInfo={description:"`ResizePlugin` в `plugins` включает изменение ширины колонок перетаскиванием границы в шапке.\n\nПравила подключения и остальные примеры [здесь](/docs/table-datagrid-resize--docs).",displayName:`ResizingColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/ResizingColumns.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var un,R,z;function dn(){return(dn=e((()=>{un=c(),Te(),Fe(),ye(),l(),f(),p(),R=o(),z=()=>{let e=({row:e})=>{let[t,n]=(0,un.useState)(!1),[r,i]=(0,un.useState)(!1),[a,o]=(0,un.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};return(0,un.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]),(0,R.jsx)(ce,{row:e,mainActions:()=>(0,R.jsx)(se,{actions:[{icon:(0,R.jsx)(we,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c},{icon:(0,R.jsx)(Pe,{}),name:`Редактировать`,loading:t,onClick:s,isMobilePrimary:!0,mobileProps:{text:`Редактировать документ`,color:`primary`}}]}),secondaryActions:()=>(0,R.jsx)(oe,{actions:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l},{name:`Скачать`,onClick:()=>console.log(`Download`)},{name:`Экспортировать`,onClick:()=>console.log(`Export`)}]})})},t=m(g,[{field:`actions`,renderCell:t=>(0,R.jsx)(e,{row:t})}]);return(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:(0,R.jsx)(u,{rows:d.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const FakeActionCell = <TRow,>({
    row
  }: FakeActionCellProps<TRow>) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isSigning, setIsSigning] = useState(false);
    const handleEdit = () => {
      setIsEditing(true);
    };
    const handleDelete = () => {
      setIsDeleting(true);
    };
    const handleSign = () => {
      setIsSigning(true);
    };
    useEffect(() => {
      if (isEditing) {
        setTimeout(() => setIsEditing(false), 1500);
      }
      if (isDeleting) {
        setTimeout(() => setIsDeleting(false), 1500);
      }
      if (isSigning) {
        setTimeout(() => setIsSigning(false), 1500);
      }
    }, [isEditing, isDeleting, isSigning]);
    return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
      icon: <BinOutlineMd />,
      name: 'Удалить',
      loading: isDeleting,
      loadingNote: 'Происходит удаление',
      isBlockingOperation: true,
      onClick: handleDelete
    }, {
      icon: <EditOutlineMd />,
      name: 'Редактировать',
      loading: isEditing,
      onClick: handleEdit,
      /**
       * Кнопка будет отображаться первая в очерёдности на мобильном устройстве с цветом primary
       */
      isMobilePrimary: true,
      mobileProps: {
        text: 'Редактировать документ',
        color: 'primary'
      }
    }]} />} secondaryActions={() => <DataGridSecondaryActions actions={[{
      name: 'Подписать',
      loading: isSigning,
      loadingNote: 'Происходит подписание',
      isBlockingOperation: true,
      onClick: handleSign
    }, {
      name: 'Скачать',
      onClick: () => console.log('Download')
    }, {
      name: 'Экспортировать',
      onClick: () => console.log('Export')
    }]} />} />;
  };
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'actions',
    renderCell: row => {
      return <FakeActionCell row={row} />;
    }
  }]);
  return <StoryWrapper>
      <DataGridStoryContainer>
        <DataGrid rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...z.parameters?.docs?.source},description:{story:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",...z.parameters?.docs?.description}}};try{z.displayName=`WithActions`,z.__docgenInfo={description:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var fn,pn,B;function mn(){return(mn=e((()=>{x(),fn=c(),f(),p(),pn=o(),B=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,fn.useState)([]),i=e=>r(e),a=(0,fn.useMemo)(()=>m(g),[]);return(0,pn.jsx)(b,{controls:(0,pn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,pn.jsx)(v,{children:(0,pn.jsx)(_,{children:(0,pn.jsx)(h,{rows:d.slice(0,10),selectedRows:n,onSelectRow:i,gridViewMode:e,columns:a})})})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  const columns = useMemo(() => makeColumns(FAKE_COLUMNS), []);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={fakeData.slice(0, 10)} selectedRows={selected} onSelectRow={handleSelect} gridViewMode={gridViewMode} columns={columns} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...B.parameters?.docs?.source},description:{story:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,...B.parameters?.docs?.description}}};try{B.displayName=`WithCheckbox`,B.__docgenInfo={description:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,displayName:`WithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithCheckbox.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var hn,V;function gn(){return(gn=e((()=>{x(),p(),hn=o(),V=({gridViewMode:e,changeGridViewMode:t})=>(0,hn.jsx)(b,{controls:(0,hn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,hn.jsx)(v,{children:(0,hn.jsx)(_,{children:(0,hn.jsx)(h,{rows:d.slice(0,10),isDisabled:!0,gridViewMode:e})})})}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={fakeData.slice(0, 10)} isDisabled gridViewMode={gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...V.parameters?.docs?.source},description:{story:"Prop `disabled` позволяет заблокировать контент",...V.parameters?.docs?.description}}};try{V.displayName=`WithDisabledContent`,V.__docgenInfo={description:"Prop `disabled` позволяет заблокировать контент",displayName:`WithDisabledContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithDisabledContent.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var _n,vn;function yn(){return(yn=e((()=>{a(),p(),_n=o(),vn=()=>(0,_n.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,_n.jsx)(v,{children:(0,_n.jsx)(h,{rows:[],isError:!0,errorMsg:`Ошибка 500`})})}),vn.parameters={...vn.parameters,docs:{...vn.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <MockDataGrid rows={[]} isError errorMsg="Ошибка 500" />
      </StoryWrapper>
    </ConfigProvider>;
}`,...vn.parameters?.docs?.source}}}})))()}var bn,H,U;function xn(){return(xn=e((()=>{x(),bn=c(),je(),l(),f(),p(),H=o(),U=({gridViewMode:e,changeGridViewMode:t})=>{let n=m(g,[{field:`documentName`,columnHint:(0,H.jsx)(Ae,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,H.jsx)(Ae,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,columnHint:(0,H.jsx)(Ae,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[r,i]=(0,bn.useState)([]);return(0,H.jsx)(b,{controls:(0,H.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,H.jsx)(v,{children:(0,H.jsx)(_,{children:(0,H.jsx)(u,{rows:d.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},selectedRows:r,onSelectRow:e=>i(e),gridViewMode:e})})})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'documentName',
    columnHint: <DataGridColumnHintIcon title="Наименование документа" note="Полное название документа, включая номер и дату регистрации" />
  }, {
    field: 'createDate',
    columnHint: <DataGridColumnHintIcon title="Дата создания" note="Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ" />
  }, {
    field: 'actions',
    columnHint: <DataGridColumnHintIcon title="Действия" note="Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа." />
  }]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <DataGrid rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} selectedRows={selected} onSelectRow={handleSelect} gridViewMode={gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...U.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...U.parameters?.docs?.description}}};try{U.displayName=`WithHintIcons`,U.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHintIcons.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Sn,W,Cn,G;function wn(){return(wn=e((()=>{Sn=c(),ye(),l(),f(),p(),W=o(),Cn=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`code`,label:`Код`,sortable:!0,width:`1fr`,minWidth:`60px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`info`,label:`Доп. инфо`,sortable:!0,width:`1fr`,minWidth:`100px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,Sn.createElement)(ce,{row:e,mainActions:()=>(0,W.jsx)(se,{actions:Je.main}),secondaryActions:()=>(0,W.jsx)(oe,{actions:Je.secondary})})}],G=()=>{let e=d.slice(0,20),t=m(Cn);return(0,W.jsx)(v,{children:(0,W.jsx)(_,{children:(0,W.jsx)(`div`,{style:{height:`500px`,width:`700px`},children:(0,W.jsx)(u,{keyId:`id`,rows:e,columns:t,onRetry:()=>{}})})})})},Cn.parameters={...Cn.parameters,docs:{...Cn.parameters?.docs,source:{originalSource:`[{
  field: 'documentName',
  label: 'Наименование документа',
  sortable: true,
  width: '2fr',
  minWidth: '130px'
}, {
  field: 'code',
  label: 'Код',
  sortable: true,
  width: '1fr',
  minWidth: '60px'
}, {
  field: 'recipient',
  label: 'Отправитель',
  sortable: true,
  width: '2fr',
  minWidth: '120px'
}, {
  field: 'recipient',
  label: 'Получатель',
  sortable: true,
  width: '2fr',
  minWidth: '120px'
}, {
  field: 'info',
  label: 'Доп. инфо',
  sortable: true,
  width: '1fr',
  minWidth: '100px'
}, {
  field: 'createDate',
  label: 'Дата создания',
  sortable: true,
  width: '1fr',
  minWidth: '100px',
  format: ({
    createDate
  }) => new Date(createDate).toLocaleDateString()
}, {
  field: 'createDate',
  label: 'Дата начала',
  sortable: true,
  width: '1fr',
  minWidth: '100px',
  format: ({
    createDate
  }) => new Date(createDate).toLocaleDateString()
}, {
  field: 'createDate',
  label: 'Дата окончания',
  sortable: true,
  width: '1fr',
  minWidth: '100px',
  format: ({
    createDate
  }) => new Date(createDate).toLocaleDateString()
}, {
  field: 'actions',
  label: 'Действия',
  sortable: false,
  align: 'center',
  width: '120px',
  minWidth: '120px',
  renderCell: row => {
    return createElement(DataGridActionCell<DataType>, {
      row,
      mainActions: () => <DataGridMainActions actions={FAKE_ACTIONS.main} />,
      secondaryActions: () => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />
    });
  }
}]`,...Cn.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const rows = fakeData.slice(0, 20);
  const columns = makeColumns(FAKE_COLUMNS);
  return <StoryWrapper>
      <DataGridStoryContainer>
        <div style={{
        height: '500px',
        width: '700px'
      }}>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={columns} onRetry={() => {}} />
        </div>
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...G.parameters?.docs?.source},description:{story:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",...G.parameters?.docs?.description}}};try{G.displayName=`WithHorizontalScroll`,G.__docgenInfo={description:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",displayName:`WithHorizontalScroll`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHorizontalScroll.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Tn,K,q;function En(){return(En=e((()=>{Tn=c(),De(),ze(),ye(),l(),f(),p(),K=o(),q=()=>{let e=m(g,[{field:`actions`,renderCell:e=>(0,K.jsx)(ce,{row:e,mainActions:()=>(0,K.jsx)(se,{actions:[{icon:(0,K.jsx)(Ee,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)},{icon:(0,K.jsx)(Re,{}),loading:!0,name:`Отправить`}]}),secondaryActions:()=>(0,K.jsx)(oe,{actions:[{name:`Редактировать`,onClick:()=>console.log(`secondary 1`)},{name:`Удалить`,onClick:()=>console.log(`secondary 2`)}]})})}]),[t,n]=(0,Tn.useState)([]),[r,i]=(0,Tn.useState)(!0);return(0,Tn.useEffect)(()=>{setTimeout(()=>{n(d.slice(0,5)),i(!1)},1500)},[]),(0,K.jsx)(v,{children:(0,K.jsx)(_,{children:(0,K.jsx)(u,{rows:t,isLoading:r,keyId:`id`,columns:e,onRetry:()=>{}})})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'actions',
    renderCell: row => {
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
        icon: <EyeOutlineMd />,
        name: 'Просмотреть',
        onClick: () => console.log('main')
      }, {
        icon: <SendOutlineMd />,
        loading: true,
        name: 'Отправить'
      }]} />} secondaryActions={() => <DataGridSecondaryActions actions={[{
        name: 'Редактировать',
        onClick: () => console.log('secondary 1')
      }, {
        name: 'Удалить',
        onClick: () => console.log('secondary 2')
      }]} />} />;
    }
  }]);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 5));
      setLoading(false);
    }, 1500);
  }, []);
  return <StoryWrapper>
      <DataGridStoryContainer>
        <DataGrid rows={slicedData} isLoading={isLoading} keyId="id" columns={columns} onRetry={() => {}} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...q.parameters?.docs?.source},description:{story:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",...q.parameters?.docs?.description}}};try{q.displayName=`WithLoaderInButton`,q.__docgenInfo={description:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",displayName:`WithLoaderInButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithLoaderInButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Dn,On,J;function kn(){return(kn=e((()=>{Dn=c(),xe(),p(),On=o(),J=()=>{let[e,t]=(0,Dn.useState)(!0),[n,r]=(0,Dn.useState)([]),[i,a]=(0,Dn.useState)(1),[o,s]=(0,Dn.useState)(!1);return(0,Dn.useEffect)(()=>{setTimeout(()=>{r(d.slice((i-1)*10,i*10)),t(!1)},1500)},[]),(0,On.jsx)(v,{children:(0,On.jsx)(h,{rows:n,footer:(0,On.jsx)(be,{onChange:e=>{t(!0),a(e),setTimeout(()=>{t(!1),r(d.slice((e-1)*10,e*10))},1500),s(e===2)},page:i,isEndReached:o}),isLoading:e})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleChangePage = (newPage: number): void => {
    setLoading(true);
    setPage(newPage);
    setTimeout(() => {
      setLoading(false);
      setSlicedData(fakeData.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
    setIsEndReached(newPage === 2);
  };
  return <StoryWrapper>
      <MockDataGrid rows={slicedData} footer={<DataGridMinimalisticPagination onChange={handleChangePage} page={page} isEndReached={isEndReached} />} isLoading={isLoading} />
    </StoryWrapper>;
}`,...J.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,...J.parameters?.docs?.description}}};try{J.displayName=`WithMinimalisticPagination`,J.__docgenInfo={description:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,displayName:`WithMinimalisticPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithMinimalisticPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var An,Y;function jn(){return(jn=e((()=>{x(),l(),f(),p(),An=o(),Y=({gridViewMode:e,changeGridViewMode:t})=>{let n=m(g,[{field:`documentName`,width:`2fr`},{field:`recipient`,width:`1fr`},{field:`createDate`,width:`15%`}]);return(0,An.jsx)(b,{controls:(0,An.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,An.jsx)(v,{children:(0,An.jsx)(_,{children:(0,An.jsx)(u,{rows:d.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},gridViewMode:e})})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'documentName',
    width: '2fr'
  }, {
    field: 'recipient',
    width: '1fr'
  }, {
    field: 'createDate',
    width: '15%'
  }]);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <DataGrid rows={fakeData.slice(0, 10)} columns={columns} keyId="id" onRetry={() => {}} gridViewMode={gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...Y.parameters?.docs?.source},description:{story:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",...Y.parameters?.docs?.description}}};try{Y.displayName=`WithOptions`,Y.__docgenInfo={description:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",displayName:`WithOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithOptions.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Mn,Nn,X;function Pn(){return(Pn=e((()=>{Mn=c(),Ce(),p(),Nn=o(),X=()=>{let[e,t]=(0,Mn.useState)(1),[n,r]=(0,Mn.useState)([]),[i,a]=(0,Mn.useState)(!0);return(0,Mn.useEffect)(()=>{setTimeout(()=>{r(d.slice((e-1)*10,e*10)),a(!1)},1500)},[]),(0,Nn.jsx)(v,{children:(0,Nn.jsx)(h,{rows:n,footer:(0,Nn.jsx)(Se,{rowsPerPage:10,totalCount:i?0:d.length,onChange:(e,n)=>{a(!0),r([]),t(n),setTimeout(()=>{a(!1),r(d.slice((n-1)*10,n*10))},1500)},page:e}),isLoading:i})})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number): void => {
    setLoading(true);
    setSlicedData([]);
    setPage(newPage);
    setTimeout(() => {
      setLoading(false);
      setSlicedData(fakeData.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };
  return <StoryWrapper>
      <MockDataGrid rows={slicedData} footer={<DataGridPagination rowsPerPage={10} totalCount={isLoading ? 0 : fakeData.length} onChange={handleChangePage} page={page} />} isLoading={isLoading} />
    </StoryWrapper>;
}`,...X.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,...X.parameters?.docs?.description}}};try{X.displayName=`WithPagination`,X.__docgenInfo={description:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Fn,In,Ln,Rn,Q;function zn(){return(zn=e((()=>{lt(),n(),l(),f(),p(),Z=o(),Fn=m(g),In=d.slice(0,10),Ln=()=>{let{pathname:e}=st();return(0,Z.jsxs)(r,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},Rn=({children:e})=>(0,Z.jsx)(ct,{children:(0,Z.jsxs)(Qe,{children:[(0,Z.jsx)(Ln,{}),(0,Z.jsx)(v,{children:(0,Z.jsx)(_,{children:e})})]})}),Q=()=>(0,Z.jsx)(Rn,{children:(0,Z.jsx)(u,{keyId:`id`,rows:In,columns:Fn,renderLink:({children:e,row:t})=>(0,Z.jsx)(ut,{to:`/documents/${t.id}`,children:e}),onRetry:()=>{}})}),Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <DataGrid<DataType, SortField> keyId="id" rows={FAKE_ROWS} columns={COLUMNS} renderLink={({
    children,
    row
  }) => <Link to={\`/documents/\${row.id}\`}>{children}</Link>} onRetry={() => {}} />
  </Wrapper>`,...Q.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithRenderLink`,Q.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Bn,Vn,$;function Hn(){return(Hn=e((()=>{x(),Bn=c(),p(),Vn=o(),$=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,Bn.useState)([]),[i,a]=(0,Bn.useState)();return(0,Bn.useEffect)(()=>{r(d.slice(0,10))},[]),(0,Vn.jsx)(b,{controls:(0,Vn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,Vn.jsx)(v,{children:(0,Vn.jsx)(_,{children:(0,Vn.jsx)(h,{rows:n,sorting:i,onSort:e=>{r(e?((e,t,n)=>{let r=[...e];return r.sort((e,r)=>{let i=e[t],a=r[t];if(i===a)return 0;if(t===`documentName`){let e=/([^\d]+)(\d+)/,t=i.match(e),r=a.match(e);if(t===null||r===null)return 0;let[,o,s]=t,[,c,l]=r,ee=o.localeCompare(c)||Number(s)-Number(l);return n===`desc`?-1*ee:ee}return i<a?n===`desc`?1:-1:i>a?n===`desc`?-1:1:0}),r})(n,e.fieldId,e.sort):d.slice(0,10)),a(e)},gridViewMode:e})})})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();
  const handleSort = (newSorting: DataGridSort<SortField> | undefined) => {
    if (newSorting) {
      const sortData = (array: DataType[], field: SortField, sortOrder: 'asc' | 'desc') => {
        const sortedArray = [...array];

        // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: ToDo Необходимо упростить
        sortedArray.sort((a, b) => {
          const valueA = a[field];
          const valueB = b[field];
          if (valueA === valueB) {
            return 0;
          }
          if (field === 'documentName') {
            // Разделение текстовой и числовой частей
            const regex = /([^\\d]+)(\\d+)/;
            const matchA = valueA.match(regex);
            const matchB = valueB.match(regex);

            // Проверка на null
            if (matchA === null || matchB === null) {
              return 0;
            }
            const [, textA, numberA] = matchA;
            const [, textB, numberB] = matchB;
            const comparison = textA.localeCompare(textB) || Number(numberA) - Number(numberB);

            // Определение порядка сортировки
            return sortOrder === 'desc' ? -1 * comparison : comparison;
          }

          // Если не сортируем по полю documentName, используем прежний код сортировки
          if (valueA < valueB) {
            return sortOrder === 'desc' ? 1 : -1;
          }
          if (valueA > valueB) {
            return sortOrder === 'desc' ? -1 : 1;
          }
          return 0;
        });
        return sortedArray;
      };
      setSlicedData(sortData(slicedData, newSorting.fieldId, newSorting.sort));
    } else {
      setSlicedData(fakeData.slice(0, 10));
    }
    setSorting(newSorting);
  };
  useEffect(() => {
    setSlicedData(fakeData.slice(0, 10));
  }, []);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={slicedData} sorting={sorting} onSort={handleSort} gridViewMode={gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...$.parameters?.docs?.source},description:{story:`Сортировка по нажатию на header колонки`,...$.parameters?.docs?.description}}};try{$.displayName=`WithSorting`,$.__docgenInfo={description:`Сортировка по нажатию на header колонки`,displayName:`WithSorting`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithSorting.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Un,Wn;function Gn(){return(Gn=e((()=>{l(),vt(),Ct(),Tt(),p(),Dt(),At(),Mt(),Ft(),Rt(),Vt(),Wt(),Yt(),en(),nn(),on(),ln(),dn(),mn(),gn(),yn(),xn(),wn(),En(),kn(),jn(),Pn(),zn(),Hn(),Un={title:`Table/DataGrid`,component:u,decorators:qe,parameters:{layout:`fullscreen`,docs:{description:{component:`DataGrid — отображает информацию в виде таблицы.

Может включать:
- Соответствующую визуализацию
- Навигацию
- Инструменты для запроса и обработки данных

**DataGrid построен на css grid**

См. также [DataGridSubrows](/story/table-dataGrid-subrows--docs), [DataGridTree](/story/table-dataGrid-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},Wn=`BasicUsage.CollapsibleRows.MinWidth.ResizingColumns.WithPagination.WithMinimalisticPagination.WithSorting.WithCheckbox.NumericTableWithGroupedColumns.GridViewMode.WithOptions.WithHintIcons.WithHorizontalScroll.HideColumnTitleOnMobile.WithRenderLink.ConfirmActions.WithDisabledContent.DisabledRows.WithActions.EmptyCellValue.MobileDisplayVariant.WithLoaderInButton.NoData.IsHideHeadIfNoData.Loading.WithError.MassActions`.split(`.`)})))()}Gn();export{_t as BasicUsage,T as CollapsibleRows,wt as ConfirmActions,O as DisabledRows,kt as EmptyCellValue,k as GridViewMode,A as HideColumnTitleOnMobile,Lt as IsHideHeadIfNoData,Bt as Loading,M as MassActions,P as MinWidth,$t as MobileDisplayVariant,F as NoData,I as NumericTableWithGroupedColumns,L as ResizingColumns,z as WithActions,B as WithCheckbox,V as WithDisabledContent,vn as WithError,U as WithHintIcons,G as WithHorizontalScroll,q as WithLoaderInButton,J as WithMinimalisticPagination,Y as WithOptions,X as WithPagination,Q as WithRenderLink,$ as WithSorting,Wn as __namedExportsOrder,Un as default};