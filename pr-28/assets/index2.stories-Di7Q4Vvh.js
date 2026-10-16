import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,dt as r,ft as i,ji as a,w as o,xa as s,yn as c}from"./preview-C_tlOeal.js";import{c as l,ot as ee,s as u,t as te}from"./DataGrid-BVPOwZzs.js";import{r as ne,t as re}from"./dividerClasses-BtAdI7DB.js";import{i as ie}from"./TagsList-BvMxnn6n.js";import{n as ae}from"./useNewToggle-CC7x4miN.js";import{i as oe,l as se,t as ce}from"./DataGridActionCell-C3uT-ujm.js";import{t as le}from"./ConfirmDialog-COZwXLca.js";import{t as ue}from"./ConfirmDialog-CumWw3fP.js";import{a as de,t as fe}from"./LoadingPlaceholder-BBpLagv2.js";import{t as pe}from"./ContentState-D4cn8ePG.js";import{t as me}from"./ContentState-BGTX7-yH.js";import{n as he,t as ge}from"./DashboardLayout-zLM37n-q.js";import{t as _e}from"./DataGridActionCell-bWa4toFI.js";import{t as ve}from"./DataGridMinimalisticPagination-e0ktQYuT.js";import{t as ye}from"./DataGridMinimalisticPagination-BT020_H3.js";import{t as be}from"./DataGridPagination-MYBhBf87.js";import{t as xe}from"./DataGridPagination-DIZyz9Rq.js";import{n as Se,t as Ce}from"./BinOutlineMd-dPA-cn4P.js";import{n as we,t as Te}from"./EyeOutlineMd-B9GqfxEm.js";import{i as Ee,t as De}from"./PageContent-Ck6qS13n.js";import{n as Oe,t as ke}from"./DataGridColumnHintIcon-CJcGhEMd.js";import{t as Ae}from"./PageLayout-fYr74KyI.js";import{t as je}from"./PageLayout-BBVQpKT7.js";import{n as Me,t as Ne}from"./EditOutlineMd-CPk4Zad-.js";import{n as Pe,t as Fe}from"./DocSignedOutlineMd-DjFqBjuL.js";import{n as Ie,t as Le}from"./SendOutlineMd-CK66X7YT.js";import{a as Re}from"./NotificationStackContainer-BlRf2KyW.js";import{t as ze}from"./Notification-eDktB7v6.js";import{$ as Be,Ct as d,Dt as f,J as Ve,K as p,Ot as m,Y as He,Z as Ue,_t as We,at as Ge,ft as h,gt as g,ht as Ke,in as qe,jt as Je,kt as Ye,lt as Xe,mt as Ze,rt as _,st as v,t as Qe,tt as y,vt as $e,xt as et,yt as tt}from"./common-DyoAw_YQ.js";import{t as nt}from"./groupedColumnsData-CDV9aELb.js";import{n as rt,t as it}from"./error-_dxK9GiT.js";import{i as at,n as ot,r as st,t as ct}from"./chunk-62JRHF6Z-Db_uHqPx.js";import{n as lt,t as ut}from"./DataGridCollapsibleRow-C5Y8-zDg.js";import{n as b,t as x}from"./StoryControlWrapper-Da8UfGJA.js";import{n as dt,t as ft}from"./DataGridMassActions-BbuX3x9O.js";var pt,S,mt,C;function ht(){return(ht=e((()=>{pt=n(),ge(),Qe(),De(),je(),l(),f(),p(),S=s(),mt=d.slice(0,10),C=()=>{let e=m(g),[t,n]=(0,pt.useState)(!1);return(0,pt.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,S.jsx)(v,{children:(0,S.jsxs)(he,{children:[(0,S.jsx)(qe,{}),(0,S.jsx)(he.Main,{children:(0,S.jsx)(Ae,{content:(0,S.jsx)(Ee,{children:(0,S.jsx)(u,{keyId:`id`,rows:mt,columns:e,isLoading:t,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})})})]})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}}})))()}var gt,w,_t,vt,yt,bt,T;function xt(){return(xt=e((()=>{ne(),gt=n(),me(),te(),ut(),fe(),c(),p(),w=s(),_t=d.slice(0,5),vt=a(u)`
  & .${re.root} {
    display: none;
  }

  &.${ee.mobileVariantCards} .${ee.wrapper} {
    margin: 0;
  }
`,yt=()=>(0,w.jsx)(vt,{mobileDisplayVariant:`cards`,keyId:`id`,rows:et,columns:Ze,onRetry:()=>{}}),bt=a.div`
  & .${de.root} {
    height: 200px;
  }
`,T=()=>{let e=({initialOpen:e})=>{let[t,n]=(0,gt.useState)(!1);return(0,w.jsx)(lt,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,w.jsx)(bt,{children:(0,w.jsx)(pe,{isLoading:t,children:(0,w.jsx)(yt,{})})})})},t=(0,gt.useCallback)((t,n)=>(0,w.jsx)(e,{initialOpen:n===1}),[]);return(0,w.jsx)(Ue,{children:(0,w.jsx)(h,{rows:_t,renderRow:t,mobileDisplayVariant:`cards`})})},yt.parameters={...yt.parameters,docs:{...yt.parameters?.docs,source:{originalSource:`() => <StyledDataGrid mobileDisplayVariant="cards" keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} />`,...yt.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source},description:{story:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",...T.parameters?.docs?.description}}};try{T.displayName=`CollapsibleRows`,T.__docgenInfo={description:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",displayName:`CollapsibleRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/CollapsibleRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,St;function Ct(){return(Ct=e((()=>{Ce(),_e(),l(),f(),p(),E=s(),St=()=>{let e={main:[{icon:(0,E.jsx)(Se,{}),name:`Удалить`,needConfirm:!0,confirmText:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmMobileTitle:`Удаление черновика`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},onClick:e=>alert(`Delete: ${JSON.stringify(e)}`)}]},t=m(g,[{field:`actions`,renderCell:t=>(0,E.jsx)(ce,{row:t,mainActions:()=>(0,E.jsx)(se,{actions:e.main})})}]);return(0,E.jsx)(v,{children:(0,E.jsx)(_,{children:(0,E.jsx)(u,{rows:d.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`() => {
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
}`,...St.parameters?.docs?.source}}}})))()}var wt,D,O;function Tt(){return(Tt=e((()=>{wt=n(),Ne(),_e(),l(),p(),D=s(),O=()=>{let e=(0,wt.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,wt.useState)([]),r=(0,wt.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,wt.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,D.jsx)(ce,{row:e,mainActions:()=>(0,D.jsx)(se,{actions:[{icon:(0,D.jsx)(Me,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,D.jsx)(v,{children:(0,D.jsx)(_,{children:(0,D.jsx)(u,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...O.parameters?.docs?.description}}};try{O.displayName=`DisabledRows`,O.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{l(),f(),p(),Et=s(),Dt=()=>{let e=m([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}]),t=[{id:`123456789`,createDate:Je()},...Ye($e)];return(0,Et.jsx)(v,{children:(0,Et.jsx)(_,{children:(0,Et.jsx)(u,{rows:t.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{}})})})},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Dt.parameters?.docs?.source}}}})))()}var k,A;function kt(){return(kt=e((()=>{x(),p(),k=s(),A=e=>(0,k.jsx)(b,{controls:(0,k.jsx)(y,{...e}),children:(0,k.jsx)(v,{children:(0,k.jsx)(_,{children:(0,k.jsx)(h,{rows:d.slice(0,10),gridViewMode:e.gridViewMode})})})}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: DataGridStoryArgs) => {
  return <StoryControlWrapper controls={<GridViewModeRadioGroup {...args} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={fakeData.slice(0, 10)} gridViewMode={args.gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...A.parameters?.docs?.source}}};try{A.displayName=`GridViewMode`,A.__docgenInfo={description:``,displayName:`GridViewMode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/GridViewMode.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var At,jt,j;function Mt(){return(Mt=e((()=>{x(),c(),l(),f(),p(),At=s(),jt=a(v)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 100%;
  }
`,j=()=>{let e=g.map((e,t)=>({...e,hideTitleOnMobile:t===0}));return(0,At.jsx)(b,{children:(0,At.jsx)(jt,{children:(0,At.jsx)(_,{children:(0,At.jsx)(u,{keyId:`id`,rows:d.slice(0,10),columns:m(e),onRetry:()=>{}})})})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",...j.parameters?.docs?.description}}};try{j.displayName=`HideColumnTitleOnMobile`,j.__docgenInfo={description:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",displayName:`HideColumnTitleOnMobile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/HideColumnTitleOnMobile.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Nt,Pt;function Ft(){return(Ft=e((()=>{o(),l(),f(),p(),Nt=s(),Pt=()=>(0,Nt.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,Nt.jsx)(v,{children:(0,Nt.jsx)(u,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:m(g),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pt.parameters?.docs?.source}}}})))()}var It,Lt;function Rt(){return(Rt=e((()=>{rt(),o(),p(),It=s(),Lt=()=>(0,It.jsx)(t,{imagesMap:{defaultErrorImgSrc:it,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,It.jsx)(v,{children:(0,It.jsx)(h,{isLoading:!0,rows:[],mobileDisplayVariant:`cards`})})}),Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Lt.parameters?.docs?.source}}}})))()}var zt,M,Bt,N;function Vt(){return(Vt=e((()=>{zt=n(),Ce(),Fe(),Le(),ue(),ft(),xe(),ze(),ie(),l(),p(),M=s(),Bt=10,N=()=>{let{rows:e,send:t,sign:n,remove:r}=Ve(),[i,a]=(0,zt.useState)(1),[o,s]=(0,zt.useState)([]),[c,l]=(0,zt.useState)(!1),[ee,te]=ae(!1),ne=(0,zt.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),re=()=>o.map(({id:e})=>e),ie=()=>te(!0),oe=()=>te(!1);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(u,{keyId:`id`,rows:e.slice((i-1)*Bt,i*Bt),columns:We,selectedRows:o,onSelectRow:s,getRowDisabled:ne,onRetry:()=>{},footer:(0,M.jsx)(be,{rowsPerPage:Bt,totalCount:e.length,page:i,onChange:(e,t)=>a(t)}),massActions:(0,M.jsx)(dt,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{Re.info(`Перемещено в архив документов: ${o.length}`),s([])}}],main:[{text:`Отправить`,startIcon:(0,M.jsx)(Ie,{}),onClick:()=>{t(re()),s([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,M.jsx)(Pe,{}),onClick:()=>{n(re()),s([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,M.jsx)(Se,{}),loading:c,isBlockingOperation:!0,onClick:ie}]})}),(0,M.jsx)(le,{open:ee,title:`Удалить документы: ${o.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:oe,actions:{confirm:{text:`Удалить`,onClick:async()=>{oe(),l(!0),await r(re()),s([]),l(!1)}},cancel:{text:`Отмена`}}})]})},N.decorators=[He],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}}})))()}var P,Ht,Ut,Wt,Gt,F;function Kt(){return(Kt=e((()=>{c(),r(),l(),f(),p(),P=s(),Ht=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],Ut=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],Wt=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,Gt=a.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,F=()=>{let e=d.slice(0,5);return(0,P.jsxs)(Wt,{children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(i,{variant:`h5`,color:`error`,gutterBottom:!0,children:`❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния`}),(0,P.jsx)(Gt,{children:(0,P.jsx)(u,{keyId:`id`,rows:e,columns:m(Ht),onRetry:()=>{}})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(i,{variant:`h5`,color:`success`,gutterBottom:!0,children:`✅ С minWidth - колонки защищены от чрезмерного сжатия`}),(0,P.jsx)(Gt,{children:(0,P.jsx)(u,{keyId:`id`,rows:e,columns:m(Ut),onRetry:()=>{}})})]})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source},description:{story:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",...F.parameters?.docs?.description}}};try{F.displayName=`MinWidth`,F.__docgenInfo={description:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",displayName:`MinWidth`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MinWidth.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var qt,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{qt=n(),l(),f(),p(),Jt=s(),Yt=d.slice(0,10),Xt=()=>{let e=m(g),[t,n]=(0,qt.useState)(!0);return(0,qt.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,Jt.jsx)(Ue,{children:(0,Jt.jsx)(u,{keyId:`id`,rows:Yt,columns:e,isLoading:t,mobileDisplayVariant:`cards`,onRetry:()=>{}})})};try{Xt.displayName=`MobileDisplayVariant`,Xt.__docgenInfo={description:"Параметр `mobileDisplayVariant` позволяет изменить отображение таблицы и состояние загрузки на мобильных устройствах.\n\n- `cards` - отображает таблицу в виде карточек\n- `list` - отображает таблицу в виде списка\n\nОткрывать Story необходимо на мобильном устройстве.",displayName:`MobileDisplayVariant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MobileDisplayVariant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Qt,I;function $t(){return($t=e((()=>{o(),l(),f(),p(),Qt=s(),I=()=>(0,Qt.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,Qt.jsx)(v,{children:(0,Qt.jsx)(u,{keyId:`id`,rows:[],columns:m(g),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...I.parameters?.docs?.description}}};try{I.displayName=`NoData`,I.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var en,tn,L;function nn(){return(nn=e((()=>{x(),en=n(),l(),p(),tn=s(),L=()=>{let[e,t]=(0,en.useState)(!0),n=(e,n)=>{t(n===`tabularNum`)},r=[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`,hideTitleOnMobile:!0},{label:`К продлению`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},...tt.slice(2)];return(0,tn.jsx)(b,{controls:(0,tn.jsx)(Be,{isTabularNums:e,handleChange:n}),isShowControlsOnMobile:!0,children:(0,tn.jsx)(v,{children:(0,tn.jsx)(_,{children:(0,tn.jsx)(u,{isTabularNums:e,columns:r,rows:nt,keyId:`id`,onRetry:()=>{}})})})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source},description:{story:`Пример использования: таблица с числовыми данными и группировкой колонок`,...L.parameters?.docs?.description}}};try{L.displayName=`NumericTableWithGroupedColumns`,L.__docgenInfo={description:`Пример использования: таблица с числовыми данными и группировкой колонок`,displayName:`NumericTableWithGroupedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NumericTableWithGroupedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var rn,R,z;function an(){return(an=e((()=>{rn=n(),Ce(),Ne(),_e(),l(),f(),p(),R=s(),z=()=>{let e=({row:e})=>{let[t,n]=(0,rn.useState)(!1),[r,i]=(0,rn.useState)(!1),[a,o]=(0,rn.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};return(0,rn.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]),(0,R.jsx)(ce,{row:e,mainActions:()=>(0,R.jsx)(se,{actions:[{icon:(0,R.jsx)(Se,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c},{icon:(0,R.jsx)(Me,{}),name:`Редактировать`,loading:t,onClick:s,isMobilePrimary:!0,mobileProps:{text:`Редактировать документ`,color:`primary`}}]}),secondaryActions:()=>(0,R.jsx)(oe,{actions:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l},{name:`Скачать`,onClick:()=>console.log(`Download`)},{name:`Экспортировать`,onClick:()=>console.log(`Export`)}]})})},t=m(g,[{field:`actions`,renderCell:t=>(0,R.jsx)(e,{row:t})}]);return(0,R.jsx)(v,{children:(0,R.jsx)(_,{children:(0,R.jsx)(u,{rows:d.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source},description:{story:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",...z.parameters?.docs?.description}}};try{z.displayName=`WithActions`,z.__docgenInfo={description:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var on,sn,B;function cn(){return(cn=e((()=>{x(),on=n(),f(),p(),sn=s(),B=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,on.useState)([]),i=e=>r(e),a=(0,on.useMemo)(()=>m(g),[]);return(0,sn.jsx)(b,{controls:(0,sn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,sn.jsx)(v,{children:(0,sn.jsx)(_,{children:(0,sn.jsx)(h,{rows:d.slice(0,10),selectedRows:n,onSelectRow:i,gridViewMode:e,columns:a})})})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`({
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

Checkbox в хедере выбирает все значения на странице.`,displayName:`WithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithCheckbox.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ln,V;function un(){return(un=e((()=>{x(),p(),ln=s(),V=({gridViewMode:e,changeGridViewMode:t})=>(0,ln.jsx)(b,{controls:(0,ln.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,ln.jsx)(v,{children:(0,ln.jsx)(_,{children:(0,ln.jsx)(h,{rows:d.slice(0,10),isDisabled:!0,gridViewMode:e})})})}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
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
}`,...V.parameters?.docs?.source},description:{story:"Prop `disabled` позволяет заблокировать контент",...V.parameters?.docs?.description}}};try{V.displayName=`WithDisabledContent`,V.__docgenInfo={description:"Prop `disabled` позволяет заблокировать контент",displayName:`WithDisabledContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithDisabledContent.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var dn,fn;function pn(){return(pn=e((()=>{o(),p(),dn=s(),fn=()=>(0,dn.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,dn.jsx)(v,{children:(0,dn.jsx)(h,{rows:[],isError:!0,errorMsg:`Ошибка 500`})})}),fn.parameters={...fn.parameters,docs:{...fn.parameters?.docs,source:{originalSource:`() => {
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
}`,...fn.parameters?.docs?.source}}}})))()}var mn,H,U;function hn(){return(hn=e((()=>{x(),mn=n(),ke(),l(),f(),p(),H=s(),U=({gridViewMode:e,changeGridViewMode:t})=>{let n=m(g,[{field:`documentName`,columnHint:(0,H.jsx)(Oe,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,H.jsx)(Oe,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,columnHint:(0,H.jsx)(Oe,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[r,i]=(0,mn.useState)([]);return(0,H.jsx)(b,{controls:(0,H.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,H.jsx)(v,{children:(0,H.jsx)(_,{children:(0,H.jsx)(u,{rows:d.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},selectedRows:r,onSelectRow:e=>i(e),gridViewMode:e})})})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
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
}`,...U.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...U.parameters?.docs?.description}}};try{U.displayName=`WithHintIcons`,U.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHintIcons.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var gn,W,_n,G;function vn(){return(vn=e((()=>{gn=n(),_e(),l(),f(),p(),W=s(),_n=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`code`,label:`Код`,sortable:!0,width:`1fr`,minWidth:`60px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`info`,label:`Доп. инфо`,sortable:!0,width:`1fr`,minWidth:`100px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,gn.createElement)(ce,{row:e,mainActions:()=>(0,W.jsx)(se,{actions:Ke.main}),secondaryActions:()=>(0,W.jsx)(oe,{actions:Ke.secondary})})}],G=()=>{let e=d.slice(0,20),t=m(_n);return(0,W.jsx)(v,{children:(0,W.jsx)(_,{children:(0,W.jsx)(`div`,{style:{height:`500px`,width:`700px`},children:(0,W.jsx)(u,{keyId:`id`,rows:e,columns:t,onRetry:()=>{}})})})})},_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`[{
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
}]`,..._n.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source},description:{story:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",...G.parameters?.docs?.description}}};try{G.displayName=`WithHorizontalScroll`,G.__docgenInfo={description:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",displayName:`WithHorizontalScroll`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHorizontalScroll.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var yn,K,q;function bn(){return(bn=e((()=>{yn=n(),Te(),Le(),_e(),l(),f(),p(),K=s(),q=()=>{let e=m(g,[{field:`actions`,renderCell:e=>(0,K.jsx)(ce,{row:e,mainActions:()=>(0,K.jsx)(se,{actions:[{icon:(0,K.jsx)(we,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)},{icon:(0,K.jsx)(Ie,{}),loading:!0,name:`Отправить`}]}),secondaryActions:()=>(0,K.jsx)(oe,{actions:[{name:`Редактировать`,onClick:()=>console.log(`secondary 1`)},{name:`Удалить`,onClick:()=>console.log(`secondary 2`)}]})})}]),[t,n]=(0,yn.useState)([]),[r,i]=(0,yn.useState)(!0);return(0,yn.useEffect)(()=>{setTimeout(()=>{n(d.slice(0,5)),i(!1)},1500)},[]),(0,K.jsx)(v,{children:(0,K.jsx)(_,{children:(0,K.jsx)(u,{rows:t,isLoading:r,keyId:`id`,columns:e,onRetry:()=>{}})})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source},description:{story:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",...q.parameters?.docs?.description}}};try{q.displayName=`WithLoaderInButton`,q.__docgenInfo={description:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",displayName:`WithLoaderInButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithLoaderInButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var xn,Sn,J;function Cn(){return(Cn=e((()=>{xn=n(),ye(),p(),Sn=s(),J=()=>{let[e,t]=(0,xn.useState)(!0),[n,r]=(0,xn.useState)([]),[i,a]=(0,xn.useState)(1),[o,s]=(0,xn.useState)(!1);return(0,xn.useEffect)(()=>{setTimeout(()=>{r(d.slice((i-1)*10,i*10)),t(!1)},1500)},[]),(0,Sn.jsx)(v,{children:(0,Sn.jsx)(h,{rows:n,footer:(0,Sn.jsx)(ve,{onChange:e=>{t(!0),a(e),setTimeout(()=>{t(!1),r(d.slice((e-1)*10,e*10))},1500),s(e===2)},page:i,isEndReached:o}),isLoading:e})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,...J.parameters?.docs?.description}}};try{J.displayName=`WithMinimalisticPagination`,J.__docgenInfo={description:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,displayName:`WithMinimalisticPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithMinimalisticPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var wn,Y;function Tn(){return(Tn=e((()=>{x(),l(),f(),p(),wn=s(),Y=({gridViewMode:e,changeGridViewMode:t})=>{let n=m(g,[{field:`documentName`,width:`2fr`},{field:`recipient`,width:`1fr`},{field:`createDate`,width:`15%`}]);return(0,wn.jsx)(b,{controls:(0,wn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,wn.jsx)(v,{children:(0,wn.jsx)(_,{children:(0,wn.jsx)(u,{rows:d.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},gridViewMode:e})})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`({
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
}`,...Y.parameters?.docs?.source},description:{story:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",...Y.parameters?.docs?.description}}};try{Y.displayName=`WithOptions`,Y.__docgenInfo={description:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",displayName:`WithOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithOptions.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var En,Dn,X;function On(){return(On=e((()=>{En=n(),xe(),p(),Dn=s(),X=()=>{let[e,t]=(0,En.useState)(1),[n,r]=(0,En.useState)([]),[i,a]=(0,En.useState)(!0);return(0,En.useEffect)(()=>{setTimeout(()=>{r(d.slice((e-1)*10,e*10)),a(!1)},1500)},[]),(0,Dn.jsx)(v,{children:(0,Dn.jsx)(h,{rows:n,footer:(0,Dn.jsx)(be,{rowsPerPage:10,totalCount:i?0:d.length,onChange:(e,n)=>{a(!0),r([]),t(n),setTimeout(()=>{a(!1),r(d.slice((n-1)*10,n*10))},1500)},page:e}),isLoading:i})})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,...X.parameters?.docs?.description}}};try{X.displayName=`WithPagination`,X.__docgenInfo={description:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,kn,An,jn,Mn,Q;function Nn(){return(Nn=e((()=>{st(),r(),l(),f(),p(),Z=s(),kn=m(g),An=d.slice(0,10),jn=()=>{let{pathname:e}=at();return(0,Z.jsxs)(i,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},Mn=({children:e})=>(0,Z.jsx)(ot,{children:(0,Z.jsxs)(Xe,{children:[(0,Z.jsx)(jn,{}),(0,Z.jsx)(v,{children:(0,Z.jsx)(_,{children:e})})]})}),Q=()=>(0,Z.jsx)(Mn,{children:(0,Z.jsx)(u,{keyId:`id`,rows:An,columns:kn,renderLink:({children:e,row:t})=>(0,Z.jsx)(ct,{to:`/documents/${t.id}`,children:e}),onRetry:()=>{}})}),Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <DataGrid<DataType, SortField> keyId="id" rows={FAKE_ROWS} columns={COLUMNS} renderLink={({
    children,
    row
  }) => <Link to={\`/documents/\${row.id}\`}>{children}</Link>} onRetry={() => {}} />
  </Wrapper>`,...Q.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithRenderLink`,Q.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Pn,Fn,$;function In(){return(In=e((()=>{x(),Pn=n(),p(),Fn=s(),$=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,Pn.useState)([]),[i,a]=(0,Pn.useState)();return(0,Pn.useEffect)(()=>{r(d.slice(0,10))},[]),(0,Fn.jsx)(b,{controls:(0,Fn.jsx)(y,{gridViewMode:e,changeGridViewMode:t}),children:(0,Fn.jsx)(v,{children:(0,Fn.jsx)(_,{children:(0,Fn.jsx)(h,{rows:n,sorting:i,onSort:e=>{r(e?((e,t,n)=>{let r=[...e];return r.sort((e,r)=>{let i=e[t],a=r[t];if(i===a)return 0;if(t===`documentName`){let e=/([^\d]+)(\d+)/,t=i.match(e),r=a.match(e);if(t===null||r===null)return 0;let[,o,s]=t,[,c,l]=r,ee=o.localeCompare(c)||Number(s)-Number(l);return n===`desc`?-1*ee:ee}return i<a?n===`desc`?1:-1:i>a?n===`desc`?-1:1:0}),r})(n,e.fieldId,e.sort):d.slice(0,10)),a(e)},gridViewMode:e})})})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`({
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
}`,...$.parameters?.docs?.source},description:{story:`Сортировка по нажатию на header колонки`,...$.parameters?.docs?.description}}};try{$.displayName=`WithSorting`,$.__docgenInfo={description:`Сортировка по нажатию на header колонки`,displayName:`WithSorting`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithSorting.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Ln,Rn;function zn(){return(zn=e((()=>{l(),ht(),xt(),Ct(),p(),Tt(),Ot(),kt(),Mt(),Ft(),Rt(),Vt(),Kt(),Zt(),$t(),nn(),an(),cn(),un(),pn(),hn(),vn(),bn(),Cn(),Tn(),On(),Nn(),In(),Ln={title:`Table/DataGrid`,component:u,decorators:Ge,parameters:{layout:`fullscreen`,docs:{description:{component:`DataGrid — отображает информацию в виде таблицы.

Может включать:
- Соответствующую визуализацию
- Навигацию
- Инструменты для запроса и обработки данных

**DataGrid построен на css grid**

См. также [DataGridSubrows](/story/table-dataGrid-subrows--docs), [DataGridTree](/story/table-dataGrid-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},Rn=`BasicUsage.CollapsibleRows.MinWidth.WithPagination.WithMinimalisticPagination.WithSorting.WithCheckbox.NumericTableWithGroupedColumns.GridViewMode.WithOptions.WithHintIcons.WithHorizontalScroll.HideColumnTitleOnMobile.WithRenderLink.ConfirmActions.WithDisabledContent.DisabledRows.WithActions.EmptyCellValue.MobileDisplayVariant.WithLoaderInButton.NoData.IsHideHeadIfNoData.Loading.WithError.MassActions`.split(`.`)})))()}zn();export{C as BasicUsage,T as CollapsibleRows,St as ConfirmActions,O as DisabledRows,Dt as EmptyCellValue,A as GridViewMode,j as HideColumnTitleOnMobile,Pt as IsHideHeadIfNoData,Lt as Loading,N as MassActions,F as MinWidth,Xt as MobileDisplayVariant,I as NoData,L as NumericTableWithGroupedColumns,z as WithActions,B as WithCheckbox,V as WithDisabledContent,fn as WithError,U as WithHintIcons,G as WithHorizontalScroll,q as WithLoaderInButton,J as WithMinimalisticPagination,Y as WithOptions,X as WithPagination,Q as WithRenderLink,$ as WithSorting,Rn as __namedExportsOrder,Ln as default};