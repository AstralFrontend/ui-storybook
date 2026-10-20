import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,cn as n,dt as r,ft as i,ji as a,ln as o,w as s,ya as c,yn as l,za as u}from"./preview-HnvdWNoM.js";import{c as ee,d,pt as te,s as ne,t as re,u as f}from"./DataGrid-BvAw2NyM.js";import{r as ie,t as ae}from"./dividerClasses-Dk1-Q_D_.js";import{i as oe}from"./TagsList-f6Vz1_gt.js";import{n as se}from"./useNewToggle-DnJzNiRJ.js";import{i as ce,l as le,t as p}from"./DataGridActionCell-CiTxX7W_.js";import{t as ue}from"./ConfirmDialog-CgTbMQvu.js";import{t as de}from"./ConfirmDialog-c6Pju8Yp.js";import{a as fe,t as pe}from"./LoadingPlaceholder-JTJgFW3n.js";import{t as me}from"./ContentState-D6Bp2ANP.js";import{t as he}from"./ContentState-CNGlaUne.js";import{n as ge,t as _e}from"./DashboardLayout-CIya8Vzh.js";import{t as ve}from"./DataGridActionCell-CYeRZksv.js";import{t as ye}from"./DataGridMinimalisticPagination-D-CMXZBW.js";import{t as be}from"./DataGridMinimalisticPagination-CupvPj1U.js";import{t as xe}from"./DataGridPagination-g7XY3YP-.js";import{t as Se}from"./DataGridPagination-VNU-fpGF.js";import{n as Ce,t as we}from"./BinOutlineMd-BI4Q2maZ.js";import{n as Te,t as Ee}from"./EyeOutlineMd-C_VN5g-o.js";import{i as De,t as Oe}from"./PageContent-umIGKOVx.js";import{n as ke,t as Ae}from"./DataGridColumnHintIcon-i2dUX-cW.js";import{t as je}from"./PageLayout-B8hg0wSg.js";import{t as Me}from"./PageLayout-ralCz3kM.js";import{a as Ne,i as Pe,n as Fe,t as Ie}from"./OnboardingContainer-CMKKpK4f.js";import{n as Le,t as Re}from"./EditOutlineMd-rtvywFrN.js";import{n as ze,t as Be}from"./DocSignedOutlineMd-pNBgvap-.js";import{n as Ve,t as He}from"./SendOutlineMd-D9rgmwru.js";import{t as Ue}from"./HintPopover-CDBKC7BD.js";import{t as We}from"./HintPopover-yBtxKS0j.js";import{a as Ge}from"./NotificationStackContainer-CPhFTKlD.js";import{t as Ke}from"./Notification-C0ZyhFPX.js";import{$ as qe,Ct as m,Dt as h,J as Je,K as g,Ot as _,Tt as v,Y as Ye,Z as Xe,_t as Ze,at as Qe,ft as y,gt as b,ht as $e,in as et,jt as tt,kt as nt,lt as rt,mt as it,rt as x,st as S,t as at,tt as ot,vt as st,xt as ct,yt as lt}from"./common-7zkdXk_f.js";import{t as ut}from"./groupedColumnsData-CDV9aELb.js";import{n as dt,t as ft}from"./error-_dxK9GiT.js";import{i as pt,n as mt,r as ht,t as gt}from"./chunk-62JRHF6Z-DpECeqaw.js";import{n as _t,t as vt}from"./DataGridCollapsibleRow-0zEzYql3.js";import{n as C,t as w}from"./StoryControlWrapper-Cr2IcinZ.js";import{n as yt,t as bt}from"./DataGridMassActions-CeTJm1JM.js";var xt,St,Ct,wt;function Tt(){return(Tt=e((()=>{xt=u(),_e(),at(),Oe(),Me(),d(),h(),g(),St=c(),Ct=m.slice(0,10),wt=()=>{let e=_(b),[t,n]=(0,xt.useState)(!1);return(0,xt.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,St.jsx)(S,{children:(0,St.jsxs)(ge,{children:[(0,St.jsx)(et,{}),(0,St.jsx)(ge.Main,{children:(0,St.jsx)(je,{content:(0,St.jsx)(De,{children:(0,St.jsx)(f,{keyId:`id`,rows:Ct,columns:e,isLoading:t,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})})})]})})},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`() => {
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
}`,...wt.parameters?.docs?.source}}}})))()}var Et,T,Dt,Ot,kt,At,E;function jt(){return(jt=e((()=>{ie(),Et=u(),he(),re(),vt(),pe(),l(),g(),T=c(),Dt=m.slice(0,5),Ot=a(f)`
  & .${ae.root} {
    display: none;
  }

  &.${te.mobileVariantCards} .${te.wrapper} {
    margin: 0;
  }
`,kt=()=>(0,T.jsx)(Ot,{mobileDisplayVariant:`cards`,keyId:`id`,rows:ct,columns:it,onRetry:()=>{}}),At=a.div`
  & .${fe.root} {
    height: 200px;
  }
`,E=()=>{let e=({initialOpen:e})=>{let[t,n]=(0,Et.useState)(!1);return(0,T.jsx)(_t,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,T.jsx)(At,{children:(0,T.jsx)(me,{isLoading:t,children:(0,T.jsx)(kt,{})})})})},t=(0,Et.useCallback)((t,n)=>(0,T.jsx)(e,{initialOpen:n===1}),[]);return(0,T.jsx)(Xe,{children:(0,T.jsx)(y,{rows:Dt,renderRow:t,mobileDisplayVariant:`cards`})})},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`() => <StyledDataGrid mobileDisplayVariant="cards" keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} />`,...kt.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source},description:{story:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",...E.parameters?.docs?.description}}};try{E.displayName=`CollapsibleRows`,E.__docgenInfo={description:"Пример сворачиваемых строк в DataGrid.\nВ `DataGridCollapsibleRow` можно передать любой контент — он монтируется и отображается только после раскрытия строки.\n\n**Важно:** Функцию `renderRow` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst renderRow = useCallback((_row: DataType, index: number) => {\n  return <CollapsibleDocumentRow initialOpen={index === 1} />;\n}, []);\n```",displayName:`CollapsibleRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/CollapsibleRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{we(),ve(),d(),h(),g(),Mt=c(),Nt=()=>{let e={main:[{icon:(0,Mt.jsx)(Ce,{}),name:`Удалить`,needConfirm:!0,confirmText:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmMobileTitle:`Удаление черновика`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},onClick:e=>alert(`Delete: ${JSON.stringify(e)}`)}]},t=_(b,[{field:`actions`,renderCell:t=>(0,Mt.jsx)(p,{row:t,mainActions:()=>(0,Mt.jsx)(le,{actions:e.main})})}]);return(0,Mt.jsx)(S,{children:(0,Mt.jsx)(x,{children:(0,Mt.jsx)(f,{rows:m.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},Nt.parameters={...Nt.parameters,docs:{...Nt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Nt.parameters?.docs?.source}}}})))()}var Ft,It,D;function Lt(){return(Lt=e((()=>{Ft=u(),Re(),ve(),d(),g(),It=c(),D=()=>{let e=(0,Ft.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,Ft.useState)([]),r=(0,Ft.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,Ft.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,It.jsx)(p,{row:e,mainActions:()=>(0,It.jsx)(le,{actions:[{icon:(0,It.jsx)(Le,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,It.jsx)(S,{children:(0,It.jsx)(x,{children:(0,It.jsx)(f,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...D.parameters?.docs?.description}}};try{D.displayName=`DisabledRows`,D.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Rt,zt;function Bt(){return(Bt=e((()=>{d(),h(),g(),Rt=c(),zt=()=>{let e=_([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}]),t=[{id:`123456789`,createDate:tt()},...nt(st)];return(0,Rt.jsx)(S,{children:(0,Rt.jsx)(x,{children:(0,Rt.jsx)(f,{rows:t.slice(0,10),columns:e,keyId:`id`,onRetry:()=>{}})})})},zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...zt.parameters?.docs?.source}}}})))()}var Vt,Ht;function Ut(){return(Ut=e((()=>{w(),g(),Vt=c(),Ht=e=>(0,Vt.jsx)(C,{controls:(0,Vt.jsx)(ot,{...e}),children:(0,Vt.jsx)(S,{children:(0,Vt.jsx)(x,{children:(0,Vt.jsx)(y,{rows:m.slice(0,10),gridViewMode:e.gridViewMode})})})}),Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`(args: DataGridStoryArgs) => {
  return <StoryControlWrapper controls={<GridViewModeRadioGroup {...args} />}>
      <StoryWrapper>
        <DataGridStoryContainer>
          <MockDataGrid rows={fakeData.slice(0, 10)} gridViewMode={args.gridViewMode} />
        </DataGridStoryContainer>
      </StoryWrapper>
    </StoryControlWrapper>;
}`,...Ht.parameters?.docs?.source}}};try{Ht.displayName=`GridViewMode`,Ht.__docgenInfo={description:``,displayName:`GridViewMode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/GridViewMode.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Wt,Gt,O;function Kt(){return(Kt=e((()=>{w(),l(),d(),h(),g(),Wt=c(),Gt=a(S)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 100%;
  }
`,O=()=>{let e=b.map((e,t)=>({...e,hideTitleOnMobile:t===0}));return(0,Wt.jsx)(C,{children:(0,Wt.jsx)(Gt,{children:(0,Wt.jsx)(x,{children:(0,Wt.jsx)(f,{keyId:`id`,rows:m.slice(0,10),columns:_(e),onRetry:()=>{}})})})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source},description:{story:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",...O.parameters?.docs?.description}}};try{O.displayName=`HideColumnTitleOnMobile`,O.__docgenInfo={description:"Параметр `hideTitleOnMobile` позволяет скрыть заголовок колонки на мобильных устройствах.",displayName:`HideColumnTitleOnMobile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/HideColumnTitleOnMobile.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var qt,Jt;function Yt(){return(Yt=e((()=>{s(),d(),h(),g(),qt=c(),Jt=()=>(0,qt.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,qt.jsx)(S,{children:(0,qt.jsx)(f,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:_(b),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Jt.parameters?.docs?.source}}}})))()}var Xt,Zt;function Qt(){return(Qt=e((()=>{dt(),s(),g(),Xt=c(),Zt=()=>(0,Xt.jsx)(t,{imagesMap:{defaultErrorImgSrc:ft,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,Xt.jsx)(S,{children:(0,Xt.jsx)(y,{isLoading:!0,rows:[],mobileDisplayVariant:`cards`})})}),Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Zt.parameters?.docs?.source}}}})))()}var $t,k,en,tn;function nn(){return(nn=e((()=>{$t=u(),we(),Be(),He(),de(),bt(),Se(),Ke(),oe(),d(),g(),k=c(),en=10,tn=()=>{let{rows:e,send:t,sign:n,remove:r}=Je(),[i,a]=(0,$t.useState)(1),[o,s]=(0,$t.useState)([]),[c,l]=(0,$t.useState)(!1),[u,ee]=se(!1),d=(0,$t.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),te=()=>o.map(({id:e})=>e),ne=()=>ee(!0),re=()=>ee(!1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f,{keyId:`id`,rows:e.slice((i-1)*en,i*en),columns:Ze,selectedRows:o,onSelectRow:s,getRowDisabled:d,onRetry:()=>{},footer:(0,k.jsx)(xe,{rowsPerPage:en,totalCount:e.length,page:i,onChange:(e,t)=>a(t)}),massActions:(0,k.jsx)(yt,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{Ge.info(`Перемещено в архив документов: ${o.length}`),s([])}}],main:[{text:`Отправить`,startIcon:(0,k.jsx)(Ve,{}),onClick:()=>{t(te()),s([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,k.jsx)(ze,{}),onClick:()=>{n(te()),s([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,k.jsx)(Ce,{}),loading:c,isBlockingOperation:!0,onClick:ne}]})}),(0,k.jsx)(ue,{open:u,title:`Удалить документы: ${o.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:re,actions:{confirm:{text:`Удалить`,onClick:async()=>{re(),l(!0),await r(te()),s([]),l(!1)}},cancel:{text:`Отмена`}}})]})},tn.decorators=[Ye],tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`() => {
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
}`,...tn.parameters?.docs?.source}}}})))()}var A,rn,an,on,sn,j;function cn(){return(cn=e((()=>{l(),r(),d(),h(),g(),A=c(),rn=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],an=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],on=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,sn=a.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,j=()=>{let e=m.slice(0,5);return(0,A.jsxs)(on,{children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(i,{variant:`h5`,color:`error`,gutterBottom:!0,children:`❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния`}),(0,A.jsx)(sn,{children:(0,A.jsx)(f,{keyId:`id`,rows:e,columns:_(rn),onRetry:()=>{}})})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(i,{variant:`h5`,color:`success`,gutterBottom:!0,children:`✅ С minWidth - колонки защищены от чрезмерного сжатия`}),(0,A.jsx)(sn,{children:(0,A.jsx)(f,{keyId:`id`,rows:e,columns:_(an),onRetry:()=>{}})})]})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",...j.parameters?.docs?.description}}};try{j.displayName=`MinWidth`,j.__docgenInfo={description:"⚠️ **Важно!** Указывайте `minWidth` в px для всех колонок, чтобы обеспечить читаемость на небольших размерах экрана.\nГоризонтальный скролл появится автоматически, если дальнейшее сжатие контента невозможно.",displayName:`MinWidth`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MinWidth.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ln,un,dn,fn;function pn(){return(pn=e((()=>{ln=u(),d(),h(),g(),un=c(),dn=m.slice(0,10),fn=()=>{let e=_(b),[t,n]=(0,ln.useState)(!0);return(0,ln.useEffect)(()=>{setTimeout(()=>{n(!1)},1500)},[]),(0,un.jsx)(Xe,{children:(0,un.jsx)(f,{keyId:`id`,rows:dn,columns:e,isLoading:t,mobileDisplayVariant:`cards`,onRetry:()=>{}})})};try{fn.displayName=`MobileDisplayVariant`,fn.__docgenInfo={description:"Параметр `mobileDisplayVariant` позволяет изменить отображение таблицы и состояние загрузки на мобильных устройствах.\n\n- `cards` - отображает таблицу в виде карточек\n- `list` - отображает таблицу в виде списка\n\nОткрывать Story необходимо на мобильном устройстве.",displayName:`MobileDisplayVariant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/MobileDisplayVariant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var mn,M;function hn(){return(hn=e((()=>{s(),d(),h(),g(),mn=c(),M=()=>(0,mn.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,mn.jsx)(S,{children:(0,mn.jsx)(f,{keyId:`id`,rows:[],columns:_(b),onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source},description:{story:`Изображение можно передать через ConfigProvider.`,...M.parameters?.docs?.description}}};try{M.displayName=`NoData`,M.__docgenInfo={description:`Изображение можно передать через ConfigProvider.`,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NoData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var gn,_n,N;function vn(){return(vn=e((()=>{w(),gn=u(),d(),g(),_n=c(),N=()=>{let[e,t]=(0,gn.useState)(!0),n=(e,n)=>{t(n===`tabularNum`)},r=[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`,hideTitleOnMobile:!0},{label:`К продлению`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},...lt.slice(2)];return(0,_n.jsx)(C,{controls:(0,_n.jsx)(qe,{isTabularNums:e,handleChange:n}),isShowControlsOnMobile:!0,children:(0,_n.jsx)(S,{children:(0,_n.jsx)(x,{children:(0,_n.jsx)(f,{isTabularNums:e,columns:r,rows:ut,keyId:`id`,onRetry:()=>{}})})})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source},description:{story:`Пример использования: таблица с числовыми данными и группировкой колонок`,...N.parameters?.docs?.description}}};try{N.displayName=`NumericTableWithGroupedColumns`,N.__docgenInfo={description:`Пример использования: таблица с числовыми данными и группировкой колонок`,displayName:`NumericTableWithGroupedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/NumericTableWithGroupedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,yn,I;function bn(){return(bn=e((()=>{w(),P=u(),n(),ve(),We(),r(),d(),ne(),g(),F=c(),yn=[{id:`2`,documentName:`Счет-фактура №1237 от 21.01.2025`,recipient:`ООО "Волшебные документы"`,createDate:v(1),status:`Подписан`},{id:`3`,documentName:`Акт сверки взаимных расчетов за IV квартал 2024 года`,recipient:`ИП Иванов О.В.`,createDate:v(2),status:`Отправлен`},{id:`4`,documentName:`Торг-12 №1446`,recipient:`АО "Национальная транспортная компания Северо-Запад"`,createDate:v(3),status:`Подписывается`},{id:`5`,documentName:`УПД №47 по договору поставки №12-П`,recipient:`ООО "Новая организация"`,createDate:v(4),status:`Черновик`}],I=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,P.useState)(null),[a,s]=(0,P.useState)(null),[c,l]=(0,P.useState)(!0);(0,P.useEffect)(()=>{if(!n)return;let e=()=>s(n.querySelector(`[role="separator"]`));e();let t=new MutationObserver(e);return t.observe(n,{childList:!0}),()=>t.disconnect()},[n]);let[u,d]=(0,P.useState)(),[te,ne]=(0,P.useState)([]),re=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`},{field:`recipient`,label:`Контрагент`,sortable:!0,width:`30%`,minWidth:`160px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`120px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`status`,label:`Статус`,width:`1fr`,minWidth:`120px`},{label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,F.jsx)(p,{row:e,mainActions:()=>(0,F.jsx)(le,{actions:$e.main}),secondaryActions:()=>(0,F.jsx)(ce,{actions:$e.secondary})})}],ie=(0,P.useMemo)(()=>{let e=[{id:`1`,documentName:`Договор оказания услуг электронного документооборота №12345678`,recipient:`ПАО "Первый завод"`,createDate:v(0),status:`Отправляется`},...yn];if(!u)return e;let t=u.sort===`asc`?1:-1;return[...e].sort((e,n)=>e[u.fieldId].localeCompare(n[u.fieldId])*t)},[u]);return(0,F.jsxs)(C,{controls:(0,F.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:[(0,F.jsx)(f,{keyId:`id`,tableId:`storybook-resizing-columns`,rows:ie,columns:re,plugins:[ee],headerProps:{ref:r},sorting:u,onSort:d,selectedRows:te,onSelectRow:ne,gridViewMode:e,onRetry:()=>{}}),(0,F.jsx)(Ue,{anchorEl:a,isOpen:c&&!!a,onClose:()=>l(!1),placement:`bottom`,title:`Ширину колонок можно менять`,action:(0,F.jsx)(o,{variant:`light`,onClick:()=>l(!1),children:`Понятно`}),children:(0,F.jsx)(i,{variant:`body1`,children:`Потяните полоску между заголовками колонок. Ширина сохранится для этой таблицы.`})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const [headerElement, setHeaderElement] = useState<HTMLElement | null>(null);
  const [handleElement, setHandleElement] = useState<Element | null>(null);
  const [isHintOpen, setIsHintOpen] = useState(true);

  // Стрелка подсказки указывает на первую полоску drag. Полоски появляются в шапке после измерения колонок
  // и пропадают на mobile, где изменение ширины выключено
  useEffect(() => {
    if (!headerElement) {
      return;
    }
    const findHandle = () => setHandleElement(headerElement.querySelector('[role="separator"]'));
    findHandle();
    const observer = new MutationObserver(findHandle);
    observer.observe(headerElement, {
      childList: true
    });
    return () => observer.disconnect();
  }, [headerElement]);
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();
  const [selectedRows, setSelectedRows] = useState<DocumentWithStatus[]>([]);
  const columns: DataGridColumns<DocumentWithStatus>[] = [{
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    width: '2fr',
    minWidth: '200px'
  }, {
    field: 'recipient',
    label: 'Контрагент',
    sortable: true,
    width: '30%',
    minWidth: '160px'
  }, {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    width: '1fr',
    minWidth: '120px',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'status',
    label: 'Статус',
    width: '1fr',
    minWidth: '120px'
  }, {
    label: 'Действия',
    align: 'center',
    width: '120px',
    minWidth: '120px',
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={FAKE_ACTIONS.main} />} secondaryActions={() => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />} />
  }];
  const rows = useMemo(() => {
    const documents: DocumentWithStatus[] = [{
      id: '1',
      documentName: 'Договор оказания услуг электронного документооборота №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: getFakeCreateDate(0),
      status: 'Отправляется'
    }, ...REST_ROWS];
    if (!sorting) {
      return documents;
    }
    const direction = sorting.sort === 'asc' ? 1 : -1;
    return [...documents].sort((a, b) => a[sorting.fieldId].localeCompare(b[sorting.fieldId]) * direction);
  }, [sorting]);
  return <StoryControlWrapper controls={<GridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <DataGrid<DocumentWithStatus, SortField> keyId="id" tableId="storybook-resizing-columns" rows={rows} columns={columns} plugins={[ResizePlugin]} headerProps={{
      ref: setHeaderElement
    }} sorting={sorting} onSort={setSorting} selectedRows={selectedRows} onSelectRow={setSelectedRows} gridViewMode={gridViewMode} onRetry={() => {}} />

      <HintPopover anchorEl={handleElement} isOpen={isHintOpen && Boolean(handleElement)} onClose={() => setIsHintOpen(false)} placement="bottom" title="Ширину колонок можно менять" action={<Button variant="light" onClick={() => setIsHintOpen(false)}>
            Понятно
          </Button>}>
        <Typography variant="body1">
          Потяните полоску между заголовками колонок. Ширина сохранится для этой
          таблицы.
        </Typography>
      </HintPopover>
    </StoryControlWrapper>;
}`,...I.parameters?.docs?.source},description:{story:'Plugin `ResizePlugin` в `plugins` включает изменение ширины всех колонок: пользователь тянет полоску между колонками в шапке.\n\n- Граница меняет две соседние колонки: левая расширяется на столько, на сколько сужается правая. Таблица не становится шире контейнера.\n- Каждой колонке обязательно задать `minWidth`: колонка не сужается меньше него. Без `minWidth` хотя бы у одной колонки таблица выбрасывает exception.\n- `ResizePlugin` передаётся в `plugins` один раз: повтор выбрасывает exception.\n- Исходные ширины можно задавать в `%`, `fr` и `px`.\n- Pinned-колонки и группировка колонок не поддерживаются: таблица с ними выбрасывает exception.\n- Ширины сохраняются в `localStorage` по ключу `@astral/ui::DataGrid::${tableId}:resize` долями ширины таблицы и восстанавливаются при следующем открытии на экране любой ширины. Если набор колонок изменился, сохранённые ширины не применяются.\n- Id таблицы для сохранения по умолчанию формируется из pathname страницы и набора колонок. Задайте `tableId`, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками.\n- В таблице с сеткой (`gridViewMode="full"`) отдельная полоска drag не рисуется: ее роль выполняет вертикальная линия сетки в шапке, во время drag линия становится синей.\n- На mobile изменение ширины выключено.\n\nОбъяснить функцию пользователю можно подсказкой у полоски drag: `headerProps` прокидывают props, в том числе `ref`, до шапки таблицы, а полоски в шапке имеют `role="separator"`. На mobile полосок нет, поэтому подсказка не открывается.',...I.parameters?.docs?.description}}};try{I.displayName=`ResizingColumns`,I.__docgenInfo={description:'Plugin `ResizePlugin` в `plugins` включает изменение ширины всех колонок: пользователь тянет полоску между колонками в шапке.\n\n- Граница меняет две соседние колонки: левая расширяется на столько, на сколько сужается правая. Таблица не становится шире контейнера.\n- Каждой колонке обязательно задать `minWidth`: колонка не сужается меньше него. Без `minWidth` хотя бы у одной колонки таблица выбрасывает exception.\n- `ResizePlugin` передаётся в `plugins` один раз: повтор выбрасывает exception.\n- Исходные ширины можно задавать в `%`, `fr` и `px`.\n- Pinned-колонки и группировка колонок не поддерживаются: таблица с ними выбрасывает exception.\n- Ширины сохраняются в `localStorage` по ключу `@astral/ui::DataGrid::${tableId}:resize` долями ширины таблицы и восстанавливаются при следующем открытии на экране любой ширины. Если набор колонок изменился, сохранённые ширины не применяются.\n- Id таблицы для сохранения по умолчанию формируется из pathname страницы и набора колонок. Задайте `tableId`, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками.\n- В таблице с сеткой (`gridViewMode="full"`) отдельная полоска drag не рисуется: ее роль выполняет вертикальная линия сетки в шапке, во время drag линия становится синей.\n- На mobile изменение ширины выключено.\n\nОбъяснить функцию пользователю можно подсказкой у полоски drag: `headerProps` прокидывают props, в том числе `ref`, до шапки таблицы, а полоски в шапке имеют `role="separator"`. На mobile полосок нет, поэтому подсказка не открывается.',displayName:`ResizingColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/ResizingColumns.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function xn(){return(xn=e((()=>{Ne(),Ie()})))()}var Sn,Cn,wn,L;function Tn(){return(Tn=e((()=>{w(),Sn=u(),n(),ve(),xn(),d(),ne(),g(),Cn=c(),wn=[{id:`1`,documentName:`Договор оказания услуг электронного документооборота №12345678`,recipient:`ПАО "Первый завод"`,createDate:v(0)},{id:`2`,documentName:`Счет-фактура №1237 от 21.01.2025`,recipient:`ООО "Волшебные документы"`,createDate:v(1)},{id:`3`,documentName:`Акт сверки взаимных расчетов за IV квартал 2024 года`,recipient:`ИП Иванов О.В.`,createDate:v(2)},{id:`4`,documentName:`Торг-12 №1446`,recipient:`АО "Национальная транспортная компания Северо-Запад"`,createDate:v(3)}],L=()=>{let[e]=(0,Sn.useState)(()=>Pe()),[t]=(0,Sn.useState)(()=>e.createTour({name:`dataGridResizingColumns`,steps:[{name:`resizeColumns`,type:`highlight`,title:`Ширину колонок можно менять`,content:`Потяните полоску между заголовками колонок, чтобы подогнать таблицу под содержимое. Попробуйте прямо сейчас — ширина сохранится для этой таблицы.`,position:`bottom`,isInteractive:!0,isPrevButtonVisible:!1}]}));return(0,Cn.jsxs)(C,{controls:(0,Cn.jsx)(o,{onClick:()=>t.restore(),children:`Показать новую функцию`}),children:[(0,Cn.jsx)(Fe,{onboarding:e}),(0,Cn.jsx)(f,{keyId:`id`,tableId:`storybook-resizing-columns-onboarding`,rows:wn,columns:[{field:`recipient`,label:`Получатель`,minWidth:`160px`},{field:`documentName`,label:`Наименование документа`,width:`2fr`,minWidth:`200px`},{field:`createDate`,label:`Дата создания`,minWidth:`120px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,Cn.jsx)(p,{row:e,mainActions:()=>(0,Cn.jsx)(le,{actions:$e.main}),secondaryActions:()=>(0,Cn.jsx)(ce,{actions:$e.secondary})})}],plugins:[ee],headerProps:t.steps.resizeColumns.getHighlightProps(),onRetry:()=>{}})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [onboarding] = useState(() => createOnboarding());
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
    }]
  }));
  const columns: DataGridColumns<DataType>[] = [{
    field: 'recipient',
    label: 'Получатель',
    minWidth: '160px'
  }, {
    field: 'documentName',
    label: 'Наименование документа',
    width: '2fr',
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
  return <StoryControlWrapper controls={<Button onClick={() => tour.restore()}>Показать новую функцию</Button>}>
      <OnboardingContainer onboarding={onboarding} />
      <DataGrid<DataType> keyId="id" tableId="storybook-resizing-columns-onboarding" rows={ROWS} columns={columns} plugins={[ResizePlugin]} headerProps={tour.steps.resizeColumns.getHighlightProps()} onRetry={() => {}} />
    </StoryControlWrapper>;
}`,...L.parameters?.docs?.source},description:{story:"Пример onboarding: тур [Onboarding](/docs/onboarding-onBoardingTour--docs) из одного шага подсвечивает шапку таблицы и рассказывает о новой функции изменения ширины колонок.\n\n- Шаг привязывается к шапке через `headerProps`: `getHighlightProps()` шага возвращает атрибут, по которому тур находит элемент.\n- `isInteractive: true` оставляет подсвеченную шапку интерактивной: пользователь пробует потянуть полоску, не закрывая тур.\n\nПравила изменения ширины описаны в story [ResizingColumns](/story/table-datagrid--resizing-columns).",...L.parameters?.docs?.description}}};try{L.displayName=`ResizingColumnsOnboarding`,L.__docgenInfo={description:"Пример onboarding: тур [Onboarding](/docs/onboarding-onBoardingTour--docs) из одного шага подсвечивает шапку таблицы и рассказывает о новой функции изменения ширины колонок.\n\n- Шаг привязывается к шапке через `headerProps`: `getHighlightProps()` шага возвращает атрибут, по которому тур находит элемент.\n- `isInteractive: true` оставляет подсвеченную шапку интерактивной: пользователь пробует потянуть полоску, не закрывая тур.\n\nПравила изменения ширины описаны в story [ResizingColumns](/story/table-datagrid--resizing-columns).",displayName:`ResizingColumnsOnboarding`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/ResizingColumnsOnboarding.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var En,Dn,On,kn,R;function An(){return(An=e((()=>{En=u(),ve(),d(),ne(),g(),Dn=c(),On=[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}],kn=[{id:`1`,documentName:`УКД № 47`,recipient:`ПАО "Первый завод"`,createDate:v(0),options:{childrenColumns:On},children:[{id:`11`,documentName:`Акт № УТ000006319`,recipient:`ПАО "Первый завод"`,createDate:v(1)},{id:`12`,documentName:`Торг-12 № 1446`,recipient:`ПАО "Первый завод"`,createDate:v(2)},{id:`13`,documentName:`Счет-фактура №1237`,recipient:`ПАО "Первый завод"`,createDate:v(3)}]},{id:`2`,documentName:`УКД № 46`,recipient:`ООО "Купи Продай"`,createDate:v(4),options:{childrenColumns:On},children:[{id:`21`,documentName:`Счет-фактура №1231`,recipient:`ПАО "Первый завод"`,createDate:v(5)}]}],R=()=>{let[e,t]=(0,En.useState)([]);return(0,Dn.jsx)(f,{keyId:`id`,tableId:`storybook-resizing-columns-subrows`,rows:kn,columns:[{field:`recipient`,label:`Получатель`,minWidth:`160px`},{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`createDate`,label:`Дата создания`,minWidth:`120px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,Dn.jsx)(p,{row:e,mainActions:()=>(0,Dn.jsx)(le,{actions:$e.main}),secondaryActions:()=>(0,Dn.jsx)(ce,{actions:$e.secondary})})}],plugins:[ee],variant:`subrows`,subrows:{moreButtonColumnPosition:2,initialVisibleChildrenCount:2},selectedRows:e,onSelectRow:t,onRetry:()=>{}})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<DataType[]>([]);
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
  }} selectedRows={selected} onSelectRow={setSelected} onRetry={() => {}} />;
}`,...R.parameters?.docs?.source},description:{story:"`ResizePlugin` в таблице с `subrows`: шапка, родительские строки, вложенные строки и строка «Показать все» используют одни ширины колонок. Границы ячеек остаются на одной линии во время drag и после восстановления ширин из `localStorage`.\n\nОтдельной настройки для `subrows` не нужно: достаточно `plugins={[ResizePlugin]}` и `minWidth` у каждой колонки. Ячейки вложенных строк, скрытые через `childrenColumns`, сохраняют ширину своей колонки.\n\nПравила изменения ширины описаны в story [ResizingColumns](/story/table-datagrid--resizing-columns).",...R.parameters?.docs?.description}}};try{R.displayName=`ResizingColumnsSubrows`,R.__docgenInfo={description:"`ResizePlugin` в таблице с `subrows`: шапка, родительские строки, вложенные строки и строка «Показать все» используют одни ширины колонок. Границы ячеек остаются на одной линии во время drag и после восстановления ширин из `localStorage`.\n\nОтдельной настройки для `subrows` не нужно: достаточно `plugins={[ResizePlugin]}` и `minWidth` у каждой колонки. Ячейки вложенных строк, скрытые через `childrenColumns`, сохраняют ширину своей колонки.\n\nПравила изменения ширины описаны в story [ResizingColumns](/story/table-datagrid--resizing-columns).",displayName:`ResizingColumnsSubrows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/ResizingColumnsSubrows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var jn,z,B;function Mn(){return(Mn=e((()=>{jn=u(),we(),Re(),ve(),d(),h(),g(),z=c(),B=()=>{let e=({row:e})=>{let[t,n]=(0,jn.useState)(!1),[r,i]=(0,jn.useState)(!1),[a,o]=(0,jn.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};return(0,jn.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]),(0,z.jsx)(p,{row:e,mainActions:()=>(0,z.jsx)(le,{actions:[{icon:(0,z.jsx)(Ce,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c},{icon:(0,z.jsx)(Le,{}),name:`Редактировать`,loading:t,onClick:s,isMobilePrimary:!0,mobileProps:{text:`Редактировать документ`,color:`primary`}}]}),secondaryActions:()=>(0,z.jsx)(ce,{actions:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l},{name:`Скачать`,onClick:()=>console.log(`Download`)},{name:`Экспортировать`,onClick:()=>console.log(`Export`)}]})})},t=_(b,[{field:`actions`,renderCell:t=>(0,z.jsx)(e,{row:t})}]);return(0,z.jsx)(S,{children:(0,z.jsx)(x,{children:(0,z.jsx)(f,{rows:m.slice(0,10),columns:t,keyId:`id`,onRetry:()=>{}})})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source},description:{story:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",...B.parameters?.docs?.description}}};try{B.displayName=`WithActions`,B.__docgenInfo={description:"Подробнее в компоненте [DataGridActionCell](/story/table-dataGridActionCell--docs).\n\nНа мобильных устройствах параметр `isMobilePrimary` автоматически добавляется к первому основному действию, если он не указан.\nДля настройки текста и цвета этой кнопки используйте параметр `mobileProps`.",displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Nn,Pn,V;function Fn(){return(Fn=e((()=>{w(),Nn=u(),h(),g(),Pn=c(),V=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,Nn.useState)([]),i=e=>r(e),a=(0,Nn.useMemo)(()=>_(b),[]);return(0,Pn.jsx)(C,{controls:(0,Pn.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:(0,Pn.jsx)(S,{children:(0,Pn.jsx)(x,{children:(0,Pn.jsx)(y,{rows:m.slice(0,10),selectedRows:n,onSelectRow:i,gridViewMode:e,columns:a})})})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`({
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
}`,...V.parameters?.docs?.source},description:{story:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,...V.parameters?.docs?.description}}};try{V.displayName=`WithCheckbox`,V.__docgenInfo={description:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,displayName:`WithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithCheckbox.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var In,H;function Ln(){return(Ln=e((()=>{w(),g(),In=c(),H=({gridViewMode:e,changeGridViewMode:t})=>(0,In.jsx)(C,{controls:(0,In.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:(0,In.jsx)(S,{children:(0,In.jsx)(x,{children:(0,In.jsx)(y,{rows:m.slice(0,10),isDisabled:!0,gridViewMode:e})})})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`({
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
}`,...H.parameters?.docs?.source},description:{story:"Prop `disabled` позволяет заблокировать контент",...H.parameters?.docs?.description}}};try{H.displayName=`WithDisabledContent`,H.__docgenInfo={description:"Prop `disabled` позволяет заблокировать контент",displayName:`WithDisabledContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithDisabledContent.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Rn,zn;function Bn(){return(Bn=e((()=>{s(),g(),Rn=c(),zn=()=>(0,Rn.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,Rn.jsx)(S,{children:(0,Rn.jsx)(y,{rows:[],isError:!0,errorMsg:`Ошибка 500`})})}),zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`() => {
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
}`,...zn.parameters?.docs?.source}}}})))()}var Vn,U,W;function Hn(){return(Hn=e((()=>{w(),Vn=u(),Ae(),d(),h(),g(),U=c(),W=({gridViewMode:e,changeGridViewMode:t})=>{let n=_(b,[{field:`documentName`,columnHint:(0,U.jsx)(ke,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`createDate`,columnHint:(0,U.jsx)(ke,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,columnHint:(0,U.jsx)(ke,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}]),[r,i]=(0,Vn.useState)([]);return(0,U.jsx)(C,{controls:(0,U.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:(0,U.jsx)(S,{children:(0,U.jsx)(x,{children:(0,U.jsx)(f,{rows:m.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},selectedRows:r,onSelectRow:e=>i(e),gridViewMode:e})})})})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`({
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
}`,...W.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...W.parameters?.docs?.description}}};try{W.displayName=`WithHintIcons`,W.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHintIcons.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Un,Wn,Gn,G;function Kn(){return(Kn=e((()=>{Un=u(),ve(),d(),h(),g(),Wn=c(),Gn=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`code`,label:`Код`,sortable:!0,width:`1fr`,minWidth:`60px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`2fr`,minWidth:`120px`},{field:`info`,label:`Доп. инфо`,sortable:!0,width:`1fr`,minWidth:`100px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,Un.createElement)(p,{row:e,mainActions:()=>(0,Wn.jsx)(le,{actions:$e.main}),secondaryActions:()=>(0,Wn.jsx)(ce,{actions:$e.secondary})})}],G=()=>{let e=m.slice(0,20),t=_(Gn);return(0,Wn.jsx)(S,{children:(0,Wn.jsx)(x,{children:(0,Wn.jsx)(`div`,{style:{height:`500px`,width:`700px`},children:(0,Wn.jsx)(f,{keyId:`id`,rows:e,columns:t,onRetry:()=>{}})})})})},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`[{
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
}]`,...Gn.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source},description:{story:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",...G.parameters?.docs?.description}}};try{G.displayName=`WithHorizontalScroll`,G.__docgenInfo={description:"DataGrid с горизонтальным скроллом. Скролл появится при задании `minWidth` для всех колонок в `px`",displayName:`WithHorizontalScroll`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithHorizontalScroll.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var qn,K,q;function Jn(){return(Jn=e((()=>{qn=u(),Ee(),He(),ve(),d(),h(),g(),K=c(),q=()=>{let e=_(b,[{field:`actions`,renderCell:e=>(0,K.jsx)(p,{row:e,mainActions:()=>(0,K.jsx)(le,{actions:[{icon:(0,K.jsx)(Te,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)},{icon:(0,K.jsx)(Ve,{}),loading:!0,name:`Отправить`}]}),secondaryActions:()=>(0,K.jsx)(ce,{actions:[{name:`Редактировать`,onClick:()=>console.log(`secondary 1`)},{name:`Удалить`,onClick:()=>console.log(`secondary 2`)}]})})}]),[t,n]=(0,qn.useState)([]),[r,i]=(0,qn.useState)(!0);return(0,qn.useEffect)(()=>{setTimeout(()=>{n(m.slice(0,5)),i(!1)},1500)},[]),(0,K.jsx)(S,{children:(0,K.jsx)(x,{children:(0,K.jsx)(f,{rows:t,isLoading:r,keyId:`id`,columns:e,onRetry:()=>{}})})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source},description:{story:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",...q.parameters?.docs?.description}}};try{q.displayName=`WithLoaderInButton`,q.__docgenInfo={description:"Состояние загрузки регулируется полем `loading` экшенов переданных в `<ActionCell/>`",displayName:`WithLoaderInButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithLoaderInButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Yn,Xn,J;function Zn(){return(Zn=e((()=>{Yn=u(),be(),g(),Xn=c(),J=()=>{let[e,t]=(0,Yn.useState)(!0),[n,r]=(0,Yn.useState)([]),[i,a]=(0,Yn.useState)(1),[o,s]=(0,Yn.useState)(!1);return(0,Yn.useEffect)(()=>{setTimeout(()=>{r(m.slice((i-1)*10,i*10)),t(!1)},1500)},[]),(0,Xn.jsx)(S,{children:(0,Xn.jsx)(y,{rows:n,footer:(0,Xn.jsx)(ye,{onChange:e=>{t(!0),a(e),setTimeout(()=>{t(!1),r(m.slice((e-1)*10,e*10))},1500),s(e===2)},page:i,isEndReached:o}),isLoading:e})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,...J.parameters?.docs?.description}}};try{J.displayName=`WithMinimalisticPagination`,J.__docgenInfo={description:`Подробнее в компоненте [DataGridMinimalisticPagination](/story/table-dataGridMinimalisticPagination--docs).`,displayName:`WithMinimalisticPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithMinimalisticPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Qn,Y;function $n(){return($n=e((()=>{w(),d(),h(),g(),Qn=c(),Y=({gridViewMode:e,changeGridViewMode:t})=>{let n=_(b,[{field:`documentName`,width:`2fr`},{field:`recipient`,width:`1fr`},{field:`createDate`,width:`15%`}]);return(0,Qn.jsx)(C,{controls:(0,Qn.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:(0,Qn.jsx)(S,{children:(0,Qn.jsx)(x,{children:(0,Qn.jsx)(f,{rows:m.slice(0,10),columns:n,keyId:`id`,onRetry:()=>{},gridViewMode:e})})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`({
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
}`,...Y.parameters?.docs?.source},description:{story:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",...Y.parameters?.docs?.description}}};try{Y.displayName=`WithOptions`,Y.__docgenInfo={description:"Ширина колонок задается параметром `width` в `px`, `%` или `fr`.\nЕсли значение не указано, то автоматически считается равным `1fr`.\n\n⚠️ При использовании значений `auto`, `max-content`, `min-content` (которые автоматически подстраиваются под ширину содержимого) сетка может сломаться.",displayName:`WithOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithOptions.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var er,tr,X;function nr(){return(nr=e((()=>{er=u(),Se(),g(),tr=c(),X=()=>{let[e,t]=(0,er.useState)(1),[n,r]=(0,er.useState)([]),[i,a]=(0,er.useState)(!0);return(0,er.useEffect)(()=>{setTimeout(()=>{r(m.slice((e-1)*10,e*10)),a(!1)},1500)},[]),(0,tr.jsx)(S,{children:(0,tr.jsx)(y,{rows:n,footer:(0,tr.jsx)(xe,{rowsPerPage:10,totalCount:i?0:m.length,onChange:(e,n)=>{a(!0),r([]),t(n),setTimeout(()=>{a(!1),r(m.slice((n-1)*10,n*10))},1500)},page:e}),isLoading:i})})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,...X.parameters?.docs?.description}}};try{X.displayName=`WithPagination`,X.__docgenInfo={description:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,rr,ir,ar,or,Q;function sr(){return(sr=e((()=>{ht(),r(),d(),h(),g(),Z=c(),rr=_(b),ir=m.slice(0,10),ar=()=>{let{pathname:e}=pt();return(0,Z.jsxs)(i,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},or=({children:e})=>(0,Z.jsx)(mt,{children:(0,Z.jsxs)(rt,{children:[(0,Z.jsx)(ar,{}),(0,Z.jsx)(S,{children:(0,Z.jsx)(x,{children:e})})]})}),Q=()=>(0,Z.jsx)(or,{children:(0,Z.jsx)(f,{keyId:`id`,rows:ir,columns:rr,renderLink:({children:e,row:t})=>(0,Z.jsx)(gt,{to:`/documents/${t.id}`,children:e}),onRetry:()=>{}})}),Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <DataGrid<DataType, SortField> keyId="id" rows={FAKE_ROWS} columns={COLUMNS} renderLink={({
    children,
    row
  }) => <Link to={\`/documents/\${row.id}\`}>{children}</Link>} onRetry={() => {}} />
  </Wrapper>`,...Q.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithRenderLink`,Q.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var cr,lr,$;function ur(){return(ur=e((()=>{w(),cr=u(),g(),lr=c(),$=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,cr.useState)([]),[i,a]=(0,cr.useState)();return(0,cr.useEffect)(()=>{r(m.slice(0,10))},[]),(0,lr.jsx)(C,{controls:(0,lr.jsx)(ot,{gridViewMode:e,changeGridViewMode:t}),children:(0,lr.jsx)(S,{children:(0,lr.jsx)(x,{children:(0,lr.jsx)(y,{rows:n,sorting:i,onSort:e=>{r(e?((e,t,n)=>{let r=[...e];return r.sort((e,r)=>{let i=e[t],a=r[t];if(i===a)return 0;if(t===`documentName`){let e=/([^\d]+)(\d+)/,t=i.match(e),r=a.match(e);if(t===null||r===null)return 0;let[,o,s]=t,[,c,l]=r,u=o.localeCompare(c)||Number(s)-Number(l);return n===`desc`?-1*u:u}return i<a?n===`desc`?1:-1:i>a?n===`desc`?-1:1:0}),r})(n,e.fieldId,e.sort):m.slice(0,10)),a(e)},gridViewMode:e})})})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`({
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
}`,...$.parameters?.docs?.source},description:{story:`Сортировка по нажатию на header колонки`,...$.parameters?.docs?.description}}};try{$.displayName=`WithSorting`,$.__docgenInfo={description:`Сортировка по нажатию на header колонки`,displayName:`WithSorting`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/WithSorting.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var dr,fr;function pr(){return(pr=e((()=>{d(),Tt(),jt(),Pt(),g(),Lt(),Bt(),Ut(),Kt(),Yt(),Qt(),nn(),cn(),pn(),hn(),vn(),bn(),Tn(),An(),Mn(),Fn(),Ln(),Bn(),Hn(),Kn(),Jn(),Zn(),$n(),nr(),sr(),ur(),dr={title:`Table/DataGrid`,component:f,decorators:Qe,parameters:{layout:`fullscreen`,docs:{description:{component:`DataGrid — отображает информацию в виде таблицы.

Может включать:
- Соответствующую визуализацию
- Навигацию
- Инструменты для запроса и обработки данных

**DataGrid построен на css grid**

См. также [DataGridSubrows](/story/table-dataGrid-subrows--docs), [DataGridTree](/story/table-dataGrid-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},fr=`BasicUsage.CollapsibleRows.MinWidth.ResizingColumns.ResizingColumnsSubrows.ResizingColumnsOnboarding.WithPagination.WithMinimalisticPagination.WithSorting.WithCheckbox.NumericTableWithGroupedColumns.GridViewMode.WithOptions.WithHintIcons.WithHorizontalScroll.HideColumnTitleOnMobile.WithRenderLink.ConfirmActions.WithDisabledContent.DisabledRows.WithActions.EmptyCellValue.MobileDisplayVariant.WithLoaderInButton.NoData.IsHideHeadIfNoData.Loading.WithError.MassActions`.split(`.`)})))()}pr();export{wt as BasicUsage,E as CollapsibleRows,Nt as ConfirmActions,D as DisabledRows,zt as EmptyCellValue,Ht as GridViewMode,O as HideColumnTitleOnMobile,Jt as IsHideHeadIfNoData,Zt as Loading,tn as MassActions,j as MinWidth,fn as MobileDisplayVariant,M as NoData,N as NumericTableWithGroupedColumns,I as ResizingColumns,L as ResizingColumnsOnboarding,R as ResizingColumnsSubrows,B as WithActions,V as WithCheckbox,H as WithDisabledContent,zn as WithError,W as WithHintIcons,G as WithHorizontalScroll,q as WithLoaderInButton,J as WithMinimalisticPagination,Y as WithOptions,X as WithPagination,Q as WithRenderLink,$ as WithSorting,fr as __namedExportsOrder,dr as default};