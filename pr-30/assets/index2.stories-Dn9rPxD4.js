import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-BgfOFFw_.js";import{c as l,pt as u,t as d,u as ee}from"./DataGrid-BWuWciXi.js";import{r as f,t as te}from"./dividerClasses-CfEVjWS7.js";import{i as ne}from"./TagsList-F0rsy1C0.js";import{n as re}from"./useNewToggle-BMgY-mrq.js";import{i as ie,l as p,t as ae}from"./DataGridActionCell-DTI8AZLh.js";import{t as oe}from"./ConfirmDialog-B2v1OPDc.js";import{t as se}from"./ConfirmDialog-VQ_IP4a9.js";import{a as ce,t as le}from"./LoadingPlaceholder-D9xi5HcN.js";import{t as ue}from"./ContentState-CB93a4m_.js";import{t as de}from"./ContentState-D49uhnRp.js";import{t as m}from"./DataGridActionCell-CcEJXpeL.js";import{n as fe,t as pe}from"./BinOutlineMd-C43-bLnd.js";import{n as h,t as g}from"./DataGridInfinite-C9VX7Mna.js";import{n as me,t as he}from"./DataGridColumnHintIcon-BXxd48rB.js";import{n as ge,t as _e}from"./EditOutlineMd-DzRGJ6Vk.js";import{n as ve,t as ye}from"./DocSignedOutlineMd-CIbQpGvL.js";import{n as be,t as xe}from"./SendOutlineMd-C57T09Mk.js";import{t as Se}from"./HintPopover-Dhc6aQKA.js";import{t as Ce}from"./HintPopover-D1ahPkxx.js";import{a as we}from"./NotificationStackContainer-JAHjHAn-.js";import{t as Te}from"./Notification-DACbH_3W.js";import{Dt as Ee,J as De,K as Oe,Ot as ke,Y as Ae,Z as je,_t as Me,at as Ne,mt as Pe,xt as Fe}from"./common-1U05Na9G.js";import{i as Ie,n as Le,r as Re,t as ze}from"./chunk-62JRHF6Z-90-dXV2S.js";import{n as Be,t as Ve}from"./DataGridCollapsibleRow-DQmOL8PW.js";import{n as He,t as Ue}from"./DataGridMassActions-Ct7Q1O3E.js";import{c as We,d as Ge,g as Ke,i as _,l as v,m as qe,o as y,p as Je,r as Ye,t as b,u as Xe}from"./common-CowR8EqK.js";var x,S,C;function Ze(){return(Ze=e((()=>{x=c(),pe(),_e(),Ee(),m(),h(),Je(),b(),S=o(),C=()=>{let e=({row:e})=>{let[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};(0,x.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]);let u=(0,x.useMemo)(()=>({main:[{icon:(0,S.jsx)(ge,{}),name:`Редактировать`,loading:t,onClick:s},{icon:(0,S.jsx)(fe,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c}],secondary:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l}]}),[t,r,a]);return(0,S.jsx)(ae,{row:e,mainActions:()=>(0,S.jsx)(p,{actions:u.main}),secondaryActions:()=>(0,S.jsx)(ie,{actions:u.secondary})})},t=ke([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:t=>(0,S.jsx)(e,{row:t})}]),n=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:Ke()},...qe(9)],[r,i]=(0,x.useState)(!0),[a,o]=(0,x.useState)([]),[s,c]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{setTimeout(()=>{o(n.slice(0,10)),i(!1)},1500)},[]),(0,S.jsx)(y,{children:(0,S.jsx)(g,{keyId:`id`,rows:a,isLoading:r,isEndReached:s,columns:t,onEndReached:()=>{i(!0),setTimeout(()=>{o(e=>[...e,...qe(10)]),c(!0),i(!1)},1500)},onRetry:()=>{}})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
    const fakeActions = useMemo(() => ({
      main: [{
        icon: <EditOutlineMd />,
        name: 'Редактировать',
        loading: isEditing,
        onClick: handleEdit
      }, {
        icon: <BinOutlineMd />,
        name: 'Удалить',
        loading: isDeleting,
        loadingNote: 'Происходит удаление',
        isBlockingOperation: true,
        onClick: handleDelete
      }],
      secondary: [{
        name: 'Подписать',
        loading: isSigning,
        loadingNote: 'Происходит подписание',
        isBlockingOperation: true,
        onClick: handleSign
      }]
    }), [isEditing, isDeleting, isSigning]);
    return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={fakeActions.main} />} secondaryActions={() => <DataGridSecondaryActions actions={fakeActions.secondary} />} />;
  };
  const fakeColumns: DataGridColumns<DataType>[] = [{
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
  }, {
    field: 'actions',
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '120px',
    renderCell: row => {
      return <FakeActionCell row={row} />;
    }
  }];
  const columns = makeColumns(fakeColumns);
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '123456789',
    documentName: 'Договор №12345678',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate()
  }, ...makeDataList(9)];
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={columns} onEndReached={incrementData} onRetry={() => {}} />
    </StoryWrapper>;
}`,...C.parameters?.docs?.source},description:{story:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",...C.parameters?.docs?.description}}};try{C.displayName=`ActionsDataGrid`,C.__docgenInfo={description:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",displayName:`ActionsDataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/ActionsDataGrid.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,Qe,$e,T;function et(){return(et=e((()=>{w=c(),h(),b(),Qe=o(),$e=_,T=()=>{let[e,t]=(0,w.useState)(!0),[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)([]),c=e=>s(e);(0,w.useEffect)(()=>{setTimeout(()=>{r($e.slice(0,40)),t(!1)},1500)},[]);let l=(0,w.useCallback)(e=>{console.log(`row clicked`,e)},[]);return(0,Qe.jsx)(y,{children:(0,Qe.jsx)(g,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:v,selectedRows:o,onSelectRow:c,onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...$e.slice(40,50)]),a(!0),t(!1)},1500)},onRowClick:l,onRetry:()=>{}})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(FAKE_ROWS.slice(0, 40));
      setLoading(false);
    }, 1500);
  }, []);
  const handleRowClick = useCallback((row: DataType) => {
    console.log('row clicked', row);
  }, []);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...FAKE_ROWS.slice(40, 50)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={FAKE_COLUMNS} selectedRows={selected} onSelectRow={handleSelect} onEndReached={incrementData} onRowClick={handleRowClick} onRetry={() => {}} />
    </StoryWrapper>;
}`,...T.parameters?.docs?.source}}}})))()}var E,D,tt,nt,O,rt,it,k;function at(){return(at=e((()=>{f(),E=c(),de(),d(),Oe(),Ve(),le(),s(),h(),Je(),b(),D=o(),tt=i(ee)`
  & .${te.root} {
    display: none;
  }

   &.${u.mobileVariantCards} .${u.wrapper} {
    margin: 0;
  }
`,nt=i.div`
  & .${ce.root} {
    height: 200px;
  }
`,O=()=>(0,D.jsx)(tt,{keyId:`id`,rows:Fe,columns:Pe,onRetry:()=>{},mobileDisplayVariant:`cards`}),rt=()=>{let[e,t]=(0,E.useState)(!0),[n,r]=(0,E.useState)([]),[i,a]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{setTimeout(()=>{r(Ge.slice(0,20)),t(!1)},1500)},[]),{slicedData:n,isLoading:e,isEndReached:i,incrementData:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...qe(10)]),a(!0),t(!1)},1500)}}},it=({initialOpen:e})=>{let[t,n]=(0,E.useState)(!1);return(0,D.jsx)(Be,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,D.jsx)(nt,{children:(0,D.jsx)(ue,{isLoading:t,children:(0,D.jsx)(O,{})})})})},k=()=>{let{slicedData:e,isLoading:t,isEndReached:n,incrementData:r}=rt(),i=(0,E.useCallback)((e,t)=>(0,D.jsx)(it,{initialOpen:t===1}),[]);return(0,D.jsx)(je,{children:(0,D.jsx)(g,{keyId:`id`,rows:e,isLoading:t,isEndReached:n,columns:v,onEndReached:r,onRetry:()=>{},renderRow:i,mobileDisplayVariant:`cards`})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <StyledDataGrid keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} mobileDisplayVariant="cards" />`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const {
    slicedData,
    isLoading,
    isEndReached,
    incrementData
  } = useLogic();
  const renderRow = useCallback((_row: DataType, index: number) => {
    return <MyCollapsibleRow initialOpen={index === 1} />;
  }, []);
  return <CardsContainer>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={FAKE_COLUMNS} onEndReached={incrementData} onRetry={() => {}} renderRow={renderRow} mobileDisplayVariant="cards" />
    </CardsContainer>;
}`,...k.parameters?.docs?.source}}}})))()}var A,j,M;function ot(){return(ot=e((()=>{A=c(),_e(),m(),h(),b(),j=o(),M=()=>{let e=(0,A.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,A.useState)([]),r=(0,A.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,A.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,j.jsx)(ae,{row:e,mainActions:()=>(0,j.jsx)(p,{actions:[{icon:(0,j.jsx)(ge,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,j.jsx)(y,{children:(0,j.jsx)(g,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
      <DataGridInfinite<Document> keyId="id" rows={rows} columns={columns} selectedRows={selectedRows} onSelectRow={setSelectedRows} getRowDisabled={getRowDisabled} onRetry={() => {}} />
    </StoryWrapper>;
}`,...M.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...M.parameters?.docs?.description}}};try{M.displayName=`DisabledRows`,M.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var st,ct,N;function lt(){return(lt=e((()=>{h(),b(),st=o(),ct=_,N=()=>{let e=ct.slice(0,7);return(0,st.jsx)(y,{children:(0,st.jsx)(g,{keyId:`id`,rows:e,isError:!0,columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isError columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...N.parameters?.docs?.source}}}})))()}var ut,dt,P,F;function ft(){return(ft=e((()=>{ut=c(),h(),b(),dt=o(),P=_,F=()=>{let{isLoading:e,slicedData:t,isEndReached:n,incrementData:r,setLoading:i,setSlicedData:a,incrementTimerRef:o}=Ye(),[s,c]=(0,ut.useState)(!1),l=(0,ut.useRef)(20);return(0,dt.jsx)(y,{children:(0,dt.jsx)(g,{keyId:`id`,rows:t,isLoading:e,isEndReached:n,isStartReached:s,columns:v,mobileDisplayVariant:`cards`,onEndReached:r,onStartReached:()=>{s||e||(i(!0),l.current<=10?o.current=setTimeout(()=>{let e=P.slice(0,l.current);a(t=>[...e,...t]),c(!0),i(!1)},1500):(l.current-=10,o.current=setTimeout(()=>{let e=P.slice(l.current,l.current+10);a(t=>[...e,...t]),i(!1)},1500)))},activeRowId:P[24].id,initialVisibleItemIndex:Number(P[24].id),onRetry:()=>{}})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const {
    isLoading,
    slicedData,
    isEndReached,
    incrementData,
    setLoading,
    setSlicedData,
    incrementTimerRef
  } = useLogic();
  const [isStartReached, setIsStartReached] = useState(false);
  const startIndex = useRef(20);
  const handleStartReached = () => {
    if (isStartReached || isLoading) {
      return;
    }
    setLoading(true);
    if (startIndex.current <= 10) {
      incrementTimerRef.current = setTimeout(() => {
        const newData = FAKE_ROWS.slice(0, startIndex.current);
        setSlicedData(prev => [...newData, ...prev]);
        setIsStartReached(true);
        setLoading(false);
      }, 1500);
    } else {
      startIndex.current -= 10;
      incrementTimerRef.current = setTimeout(() => {
        const newData = FAKE_ROWS.slice(startIndex.current, startIndex.current + 10);
        setSlicedData(prev => [...newData, ...prev]);
        setLoading(false);
      }, 1500);
    }
  };
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} isStartReached={isStartReached} columns={FAKE_COLUMNS} mobileDisplayVariant="cards" onEndReached={incrementData} onStartReached={handleStartReached} activeRowId={FAKE_ROWS[24].id} initialVisibleItemIndex={Number(FAKE_ROWS[24].id)} onRetry={() => {}} />
    </StoryWrapper>;
}`,...F.parameters?.docs?.source},description:{story:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",...F.parameters?.docs?.description}}};try{F.displayName=`InfiniteScrollUp`,F.__docgenInfo={description:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",displayName:`InfiniteScrollUp`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/InfiniteScrollUp.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var pt,I;function mt(){return(mt=e((()=>{h(),b(),pt=o(),I=()=>(0,pt.jsx)(y,{children:(0,pt.jsx)(g,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> isHideHeaderIfNoData keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var ht,L;function gt(){return(gt=e((()=>{h(),b(),ht=o(),L=()=>(0,ht.jsx)(y,{children:(0,ht.jsx)(g,{keyId:`id`,rows:[],isLoading:!0,columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var _t,vt,R;function yt(){return(yt=e((()=>{h(),b(),_t=o(),vt=_,R=()=>{let e=vt.slice(0,7);return(0,_t.jsx)(y,{children:(0,_t.jsx)(g,{keyId:`id`,rows:e,isLoading:!0,columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...R.parameters?.docs?.source}}}})))()}var z,B,V;function bt(){return(bt=e((()=>{z=c(),pe(),ye(),xe(),se(),Oe(),Ue(),Te(),ne(),h(),B=o(),V=()=>{let{rows:e,send:t,sign:n,remove:r}=De(),[i,a]=(0,z.useState)([]),[o,s]=(0,z.useState)(!1),[c,l]=re(!1),u=(0,z.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),d=()=>i.map(({id:e})=>e),ee=()=>l(!0),f=()=>l(!1);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g,{keyId:`id`,rows:e,columns:Me,isEndReached:!0,selectedRows:i,onSelectRow:a,getRowDisabled:u,onRetry:()=>{},massActions:(0,B.jsx)(He,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{we.info(`Перемещено в архив документов: ${i.length}`),a([])}}],main:[{text:`Отправить`,startIcon:(0,B.jsx)(be,{}),onClick:()=>{t(d()),a([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,B.jsx)(ve,{}),onClick:()=>{n(d()),a([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,B.jsx)(fe,{}),loading:o,isBlockingOperation:!0,onClick:ee}]})}),(0,B.jsx)(oe,{open:c,title:`Удалить документы: ${i.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:f,actions:{confirm:{text:`Удалить`,onClick:async()=>{f(),s(!0),await r(d()),a([]),s(!1)}},cancel:{text:`Отмена`}}})]})},V.decorators=[Ae],V.parameters={layout:`fullscreen`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const {
    rows,
    send,
    sign,
    remove
  } = useDocumentsOperations();
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
      <DataGridInfinite<DocumentWithStatus> keyId="id" rows={rows} columns={FAKE_COLUMNS_WITH_STATUS} isEndReached selectedRows={selectedRows} onSelectRow={setSelectedRows} getRowDisabled={getRowDisabled} onRetry={() => {}} massActions={<DataGridMassActions entityDeclension={['документ', 'документа', 'документов']} secondary={[{
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
}`,...V.parameters?.docs?.source}}}})))()}var xt,H;function St(){return(St=e((()=>{h(),b(),xt=o(),H=()=>(0,xt.jsx)(y,{children:(0,xt.jsx)(g,{keyId:`id`,rows:[],columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...H.parameters?.docs?.source}}}})))()}var U,W,Ct,G;function wt(){return(wt=e((()=>{U=c(),t(),d(),m(),Ce(),n(),h(),b(),W=o(),Ct=_,G=()=>{let[e,t]=(0,U.useState)(null),[n,i]=(0,U.useState)(null),[o,s]=(0,U.useState)(!0);(0,U.useEffect)(()=>{if(!e)return;let t=()=>i(e.querySelector(`[role="separator"]`));t();let n=new MutationObserver(t);return n.observe(e,{childList:!0}),()=>n.disconnect()},[e]);let[c,u]=(0,U.useState)(),[d,ee]=(0,U.useState)([]),[f,te]=(0,U.useState)(40),[ne,re]=(0,U.useState)(!1),oe=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`30%`,minWidth:`160px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`120px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{label:`Действия`,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,W.jsx)(ae,{row:e,mainActions:()=>(0,W.jsx)(p,{actions:We.main}),secondaryActions:()=>(0,W.jsx)(ie,{actions:We.secondary})})}],se=(0,U.useMemo)(()=>{let e=Ct.slice(0,f);if(!c)return e;let t=c.sort===`asc`?1:-1;return[...e].sort((e,n)=>e[c.fieldId].localeCompare(n[c.fieldId])*t)},[c,f]),ce=f>=Ct.length;return(0,W.jsxs)(y,{children:[(0,W.jsx)(g,{keyId:`id`,tableId:`storybook-infinite-resizing-columns`,rows:se,columns:oe,plugins:[l],headerProps:{ref:t},sorting:c,onSort:u,selectedRows:d,onSelectRow:ee,isLoading:ne,isEndReached:ce,onEndReached:()=>{ne||ce||(re(!0),setTimeout(()=>{te(e=>e+10),re(!1)},1500))},onRetry:()=>{}}),(0,W.jsx)(Se,{anchorEl:n,isOpen:o&&!!n,onClose:()=>s(!1),placement:`bottom`,title:`Ширину колонок можно менять`,action:(0,W.jsx)(a,{variant:`light`,onClick:()=>s(!1),children:`Понятно`}),children:(0,W.jsx)(r,{variant:`body1`,children:`Потяните полоску между заголовками колонок. Ширина сохранится для этой таблицы.`})})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
  const [selectedRows, setSelectedRows] = useState<DataType[]>([]);
  const [loadedCount, setLoadedCount] = useState(40);
  const [isLoading, setLoading] = useState(false);
  const columns: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    width: '2fr',
    minWidth: '200px'
  }, {
    field: 'recipient',
    label: 'Получатель',
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
    label: 'Действия',
    align: 'center',
    width: '120px',
    minWidth: '120px',
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={FAKE_ACTIONS.main} />} secondaryActions={() => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />} />
  }];
  const rows = useMemo(() => {
    const documents = FAKE_ROWS.slice(0, loadedCount);
    if (!sorting) {
      return documents;
    }
    const direction = sorting.sort === 'asc' ? 1 : -1;
    return [...documents].sort((a, b) => a[sorting.fieldId].localeCompare(b[sorting.fieldId]) * direction);
  }, [sorting, loadedCount]);
  const isEndReached = loadedCount >= FAKE_ROWS.length;
  const loadMore = () => {
    if (isLoading || isEndReached) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoadedCount(prev => prev + 10);
      setLoading(false);
    }, 1500);
  };
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" tableId="storybook-infinite-resizing-columns" rows={rows} columns={columns} plugins={[ResizePlugin]} headerProps={{
      ref: setHeaderElement
    }} sorting={sorting} onSort={setSorting} selectedRows={selectedRows} onSelectRow={setSelectedRows} isLoading={isLoading} isEndReached={isEndReached} onEndReached={loadMore} onRetry={() => {}} />

      <HintPopover anchorEl={handleElement} isOpen={isHintOpen && Boolean(handleElement)} onClose={() => setIsHintOpen(false)} placement="bottom" title="Ширину колонок можно менять" action={<Button variant="light" onClick={() => setIsHintOpen(false)}>
            Понятно
          </Button>}>
        <Typography variant="body1">
          Потяните полоску между заголовками колонок. Ширина сохранится для этой
          таблицы.
        </Typography>
      </HintPopover>
    </StoryWrapper>;
}`,...G.parameters?.docs?.source},description:{story:'Plugin `ResizePlugin` в `plugins` включает изменение ширины всех колонок: пользователь тянет полоску между колонками в шапке.\n\n- Граница меняет две соседние колонки: левая расширяется на столько, на сколько сужается правая. Таблица не становится шире контейнера.\n- Каждой колонке обязательно задать `minWidth`: колонка не сужается меньше него. Без `minWidth` хотя бы у одной колонки таблица выбрасывает exception.\n- `ResizePlugin` передаётся в `plugins` один раз: повтор выбрасывает exception.\n- Исходные ширины можно задавать в `%`, `fr` и `px`.\n- Pinned-колонки и группировка колонок не поддерживаются: таблица с ними выбрасывает exception.\n- Ширины сохраняются в `localStorage` по ключу `@astral/ui::DataGrid::${tableId}:resize` долями ширины таблицы и восстанавливаются при следующем открытии на экране любой ширины. Если набор колонок изменился, сохранённые ширины не применяются.\n- Id таблицы для сохранения по умолчанию формируется из pathname страницы и набора колонок. Задайте `tableId`, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками.\n- Строки, которые появляются при прокрутке и подгрузке данных, сразу получают текущие ширины.\n- На mobile изменение ширины выключено.\n\nОбъяснить функцию пользователю можно подсказкой у полоски drag: `headerProps` прокидывают props, в том числе `ref`, до шапки таблицы, а полоски в шапке имеют `role="separator"`. На mobile полосок нет, поэтому подсказка не открывается.',...G.parameters?.docs?.description}}};try{G.displayName=`ResizingColumns`,G.__docgenInfo={description:'Plugin `ResizePlugin` в `plugins` включает изменение ширины всех колонок: пользователь тянет полоску между колонками в шапке.\n\n- Граница меняет две соседние колонки: левая расширяется на столько, на сколько сужается правая. Таблица не становится шире контейнера.\n- Каждой колонке обязательно задать `minWidth`: колонка не сужается меньше него. Без `minWidth` хотя бы у одной колонки таблица выбрасывает exception.\n- `ResizePlugin` передаётся в `plugins` один раз: повтор выбрасывает exception.\n- Исходные ширины можно задавать в `%`, `fr` и `px`.\n- Pinned-колонки и группировка колонок не поддерживаются: таблица с ними выбрасывает exception.\n- Ширины сохраняются в `localStorage` по ключу `@astral/ui::DataGrid::${tableId}:resize` долями ширины таблицы и восстанавливаются при следующем открытии на экране любой ширины. Если набор колонок изменился, сохранённые ширины не применяются.\n- Id таблицы для сохранения по умолчанию формируется из pathname страницы и набора колонок. Задайте `tableId`, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками.\n- Строки, которые появляются при прокрутке и подгрузке данных, сразу получают текущие ширины.\n- На mobile изменение ширины выключено.\n\nОбъяснить функцию пользователю можно подсказкой у полоски drag: `headerProps` прокидывают props, в том числе `ref`, до шапки таблицы, а полоски в шапке имеют `role="separator"`. На mobile полосок нет, поэтому подсказка не открывается.',displayName:`ResizingColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/ResizingColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Tt,K,Et,Dt,q;function Ot(){return(Ot=e((()=>{Tt=c(),t(),s(),h(),b(),K=o(),Et=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;

    margin: ${({theme:e})=>e.spacing(2,0)};
  }
`,Dt=_,q=()=>{let e=(0,Tt.useRef)(null),t=t=>{e.current?.scrollToIndex({index:t})};return(0,K.jsxs)(y,{children:[(0,K.jsxs)(Et,{children:[(0,K.jsx)(a,{onClick:()=>t(10),children:`Переместить на 10 элемент`}),(0,K.jsx)(a,{onClick:()=>t(20),children:`Переместить на 20 элемент`})]}),(0,K.jsx)(g,{keyId:`id`,mobileDisplayVariant:`cards`,rows:Dt,columns:v,virtuosoRef:e,onRetry:()=>{}})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const virtuosoRef = useRef<DataGridInfiniteVirtuosoHandle>(null);
  const handleScrollToIndex = (index: number) => {
    virtuosoRef.current?.scrollToIndex({
      index
    });
  };
  return <StoryWrapper>
      <ButtonWrapper>
        <Button onClick={() => handleScrollToIndex(10)}>
          Переместить на 10 элемент
        </Button>
        <Button onClick={() => handleScrollToIndex(20)}>
          Переместить на 20 элемент
        </Button>
      </ButtonWrapper>
      <DataGridInfinite keyId="id" mobileDisplayVariant="cards" rows={FAKE_ROWS} columns={FAKE_COLUMNS} virtuosoRef={virtuosoRef} onRetry={() => {}} />
    </StoryWrapper>;
}`,...q.parameters?.docs?.source},description:{story:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",...q.parameters?.docs?.description}}};try{q.displayName=`VirtuosoRef`,q.__docgenInfo={description:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",displayName:`VirtuosoRef`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/VirtuosoRef.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var kt,J;function At(){return(At=e((()=>{h(),b(),kt=o(),J=()=>(0,kt.jsx)(y,{children:(0,kt.jsx)(g,{keyId:`id`,rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:v,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isError errorMsg="Ошибка 500" columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function jt(){return(jt=e((()=>{m(),he(),h(),b(),Y=o(),X=()=>(0,Y.jsx)(y,{children:(0,Y.jsx)(g,{keyId:`id`,rows:Ge,columns:[{field:`documentName`,label:`Наименование документа`,sortable:!0,columnHint:(0,Y.jsx)(me,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString(),columnHint:(0,Y.jsx)(me,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,Y.jsx)(ae,{row:e,mainActions:()=>(0,Y.jsx)(p,{actions:Xe.main}),secondaryActions:()=>(0,Y.jsx)(ie,{actions:Xe.secondary})}),columnHint:(0,Y.jsx)(me,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}],onRetry:()=>{},isEndReached:!0})}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const FAKE_COLUMNS: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    columnHint: <DataGridColumnHintIcon title="Наименование документа" note="Полное название документа, включая номер и дату регистрации" />
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
    }) => new Date(createDate).toLocaleDateString(),
    columnHint: <DataGridColumnHintIcon title="Дата создания" note="Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ" />
  }, {
    field: 'actions',
    label: 'Действия',
    sortable: false,
    align: 'center',
    width: '120px',
    renderCell: row => {
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={fakeActions.main} />} secondaryActions={() => <DataGridSecondaryActions actions={fakeActions.secondary} />} />;
    },
    columnHint: <DataGridColumnHintIcon title="Действия" note="Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа." />
  }];
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} columns={FAKE_COLUMNS} onRetry={() => {}} isEndReached />
    </StoryWrapper>;
}`,...X.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...X.parameters?.docs?.description}}};try{X.displayName=`WithHintIcons`,X.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,Mt,Nt,$;function Pt(){return(Pt=e((()=>{Z=c(),Re(),n(),h(),Je(),b(),Q=o(),Mt=()=>{let{pathname:e}=Ie();return(0,Q.jsxs)(r,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},Nt=({children:e})=>(0,Q.jsx)(y,{children:(0,Q.jsxs)(Le,{children:[(0,Q.jsx)(Mt,{}),e]})}),$=()=>{let[e,t]=(0,Z.useState)(!0),[n,r]=(0,Z.useState)([]),[i,a]=(0,Z.useState)(!1);return(0,Z.useEffect)(()=>{setTimeout(()=>{r(Ge.slice(0,100)),t(!1)},1500)},[]),(0,Q.jsx)(Nt,{children:(0,Q.jsx)(g,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:v,renderLink:({children:e,row:t})=>(0,Q.jsx)(ze,{to:`/documents/${t.id}`,children:e}),onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...qe(10)]),a(!0),t(!1)},1500)},onRetry:()=>{}})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 100));
      setLoading(false);
    }, 1500);
  }, []);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  return <Wrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={FAKE_COLUMNS} renderLink={({
      children,
      row
    }) => <Link to={\`/documents/\${row.id}\`}>{children}</Link>} onEndReached={incrementData} onRetry={() => {}} />
    </Wrapper>;
}`,...$.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,...$.parameters?.docs?.description}}};try{$.displayName=`WithRenderLink`,$.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ft,It;function Lt(){return(Lt=e((()=>{Oe(),h(),Ze(),et(),at(),ot(),lt(),ft(),mt(),gt(),yt(),bt(),St(),wt(),Ot(),At(),jt(),Pt(),Ft={title:`Table/DataGridInfinite`,component:g,decorators:Ne,parameters:{docs:{description:{component:`Таблица с бесконечным скроллом, построенная на css grid

DataGridInfinite обладает тем же функционалом, что и [DataGrid](/story/table-dataGrid--docs)

См. также [DataGridInfiniteSubrows](/story/table-dataGridInfinite-subrows--docs), [DataGridInfiniteTree](/story/table-dataGridInfinite-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},It=[`BasicUsage`,`CollapsibleRows`,`DisabledRows`,`ActionsDataGrid`,`WithRenderLink`,`NoData`,`IsHideHeadIfNoData`,`LoadingWithData`,`ErrorWithData`,`Loading`,`WithError`,`WithHintIcons`,`InfiniteScrollUp`,`VirtuosoRef`,`MassActions`,`ResizingColumns`]})))()}Lt();export{C as ActionsDataGrid,T as BasicUsage,k as CollapsibleRows,M as DisabledRows,N as ErrorWithData,F as InfiniteScrollUp,I as IsHideHeadIfNoData,L as Loading,R as LoadingWithData,V as MassActions,H as NoData,G as ResizingColumns,q as VirtuosoRef,J as WithError,X as WithHintIcons,$ as WithRenderLink,It as __namedExportsOrder,Ft as default};