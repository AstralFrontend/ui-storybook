import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-CLkCEehX.js";import{c as l,dt as u,t as d,u as ee}from"./DataGrid-xtbUZYsh.js";import{r as f,t as te}from"./dividerClasses-K2KXV5tn.js";import{i as ne}from"./TagsList-DXd8WpON.js";import{n as re}from"./useNewToggle-BcBFPnPM.js";import{i as ie,l as ae,t as oe}from"./DataGridActionCell-Dxc7Q8dd.js";import{t as se}from"./ConfirmDialog-LhSKDXOY.js";import{t as ce}from"./ConfirmDialog-9QJ3dB2G.js";import{a as le,t as ue}from"./LoadingPlaceholder-CfNTJ4oc.js";import{t as de}from"./ContentState-Ce_m8fLn.js";import{t as fe}from"./ContentState-cbZebdWj.js";import{t as pe}from"./DataGridActionCell-DnRnN9t8.js";import{n as me,t as he}from"./BinOutlineMd-YoJOY_5K.js";import{n as p,t as m}from"./DataGridInfinite-CJ7QCY1f.js";import{n as ge,t as _e}from"./DataGridColumnHintIcon-CqZYyG_-.js";import{n as ve,t as ye}from"./EditOutlineMd-BCgsKllG.js";import{n as be,t as xe}from"./DocSignedOutlineMd-B8F7_dT5.js";import{n as Se,t as Ce}from"./SendOutlineMd-B_FzwTEb.js";import{a as we}from"./NotificationStackContainer-CbJZb06J.js";import{t as Te}from"./Notification-ClCoxdzN.js";import{Dt as Ee,J as De,K as h,Ot as Oe,Y as ke,Z as Ae,_t as je,at as Me,mt as Ne,xt as Pe}from"./common-DlXchtbN.js";import{i as Fe,n as Ie,r as Le,t as Re}from"./chunk-62JRHF6Z-BJxcrNYv.js";import{n as ze,t as Be}from"./DataGridCollapsibleRow-rHgjOgx1.js";import{n as Ve,t as He}from"./DataGridMassActions-Dp22lY5h.js";import{d as Ue,g as We,i as g,l as _,m as v,o as y,p as Ge,r as Ke,t as b,u as qe}from"./common-BUQAfUbT.js";var x,S,C;function Je(){return(Je=e((()=>{x=c(),he(),ye(),Ee(),pe(),p(),Ge(),b(),S=o(),C=()=>{let e=({row:e})=>{let[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};(0,x.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]);let u=(0,x.useMemo)(()=>({main:[{icon:(0,S.jsx)(ve,{}),name:`Редактировать`,loading:t,onClick:s},{icon:(0,S.jsx)(me,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c}],secondary:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l}]}),[t,r,a]);return(0,S.jsx)(oe,{row:e,mainActions:()=>(0,S.jsx)(ae,{actions:u.main}),secondaryActions:()=>(0,S.jsx)(ie,{actions:u.secondary})})},t=Oe([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:t=>(0,S.jsx)(e,{row:t})}]),n=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:We()},...v(9)],[r,i]=(0,x.useState)(!0),[a,o]=(0,x.useState)([]),[s,c]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{setTimeout(()=>{o(n.slice(0,10)),i(!1)},1500)},[]),(0,S.jsx)(y,{children:(0,S.jsx)(m,{keyId:`id`,rows:a,isLoading:r,isEndReached:s,columns:t,onEndReached:()=>{i(!0),setTimeout(()=>{o(e=>[...e,...v(10)]),c(!0),i(!1)},1500)},onRetry:()=>{}})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source},description:{story:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",...C.parameters?.docs?.description}}};try{C.displayName=`ActionsDataGrid`,C.__docgenInfo={description:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",displayName:`ActionsDataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/ActionsDataGrid.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,Ye,Xe,T;function Ze(){return(Ze=e((()=>{w=c(),p(),b(),Ye=o(),Xe=g,T=()=>{let[e,t]=(0,w.useState)(!0),[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)(!1),[o,s]=(0,w.useState)([]),c=e=>s(e);(0,w.useEffect)(()=>{setTimeout(()=>{r(Xe.slice(0,40)),t(!1)},1500)},[]);let l=(0,w.useCallback)(e=>{console.log(`row clicked`,e)},[]);return(0,Ye.jsx)(y,{children:(0,Ye.jsx)(m,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:_,selectedRows:o,onSelectRow:c,onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...Xe.slice(40,50)]),a(!0),t(!1)},1500)},onRowClick:l,onRetry:()=>{}})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}}})))()}var E,D,Qe,$e,O,et,tt,k;function nt(){return(nt=e((()=>{f(),E=c(),fe(),d(),h(),Be(),ue(),s(),p(),Ge(),b(),D=o(),Qe=i(ee)`
  & .${te.root} {
    display: none;
  }

   &.${u.mobileVariantCards} .${u.wrapper} {
    margin: 0;
  }
`,$e=i.div`
  & .${le.root} {
    height: 200px;
  }
`,O=()=>(0,D.jsx)(Qe,{keyId:`id`,rows:Pe,columns:Ne,onRetry:()=>{},mobileDisplayVariant:`cards`}),et=()=>{let[e,t]=(0,E.useState)(!0),[n,r]=(0,E.useState)([]),[i,a]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{setTimeout(()=>{r(Ue.slice(0,20)),t(!1)},1500)},[]),{slicedData:n,isLoading:e,isEndReached:i,incrementData:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...v(10)]),a(!0),t(!1)},1500)}}},tt=({initialOpen:e})=>{let[t,n]=(0,E.useState)(!1);return(0,D.jsx)(ze,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,D.jsx)($e,{children:(0,D.jsx)(de,{isLoading:t,children:(0,D.jsx)(O,{})})})})},k=()=>{let{slicedData:e,isLoading:t,isEndReached:n,incrementData:r}=et(),i=(0,E.useCallback)((e,t)=>(0,D.jsx)(tt,{initialOpen:t===1}),[]);return(0,D.jsx)(Ae,{children:(0,D.jsx)(m,{keyId:`id`,rows:e,isLoading:t,isEndReached:n,columns:_,onEndReached:r,onRetry:()=>{},renderRow:i,mobileDisplayVariant:`cards`})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <StyledDataGrid keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} mobileDisplayVariant="cards" />`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}}})))()}var A,j,M;function rt(){return(rt=e((()=>{A=c(),ye(),pe(),p(),b(),j=o(),M=()=>{let e=(0,A.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,A.useState)([]),r=(0,A.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,A.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,j.jsx)(oe,{row:e,mainActions:()=>(0,j.jsx)(ae,{actions:[{icon:(0,j.jsx)(ve,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,j.jsx)(y,{children:(0,j.jsx)(m,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...M.parameters?.docs?.description}}};try{M.displayName=`DisabledRows`,M.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,it,P;function at(){return(at=e((()=>{p(),b(),N=o(),it=g,P=()=>{let e=it.slice(0,7);return(0,N.jsx)(y,{children:(0,N.jsx)(m,{keyId:`id`,rows:e,isError:!0,columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isError columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...P.parameters?.docs?.source}}}})))()}var ot,st,F,I;function ct(){return(ct=e((()=>{ot=c(),p(),b(),st=o(),F=g,I=()=>{let{isLoading:e,slicedData:t,isEndReached:n,incrementData:r,setLoading:i,setSlicedData:a,incrementTimerRef:o}=Ke(),[s,c]=(0,ot.useState)(!1),l=(0,ot.useRef)(20);return(0,st.jsx)(y,{children:(0,st.jsx)(m,{keyId:`id`,rows:t,isLoading:e,isEndReached:n,isStartReached:s,columns:_,mobileDisplayVariant:`cards`,onEndReached:r,onStartReached:()=>{s||e||(i(!0),l.current<=10?o.current=setTimeout(()=>{let e=F.slice(0,l.current);a(t=>[...e,...t]),c(!0),i(!1)},1500):(l.current-=10,o.current=setTimeout(()=>{let e=F.slice(l.current,l.current+10);a(t=>[...e,...t]),i(!1)},1500)))},activeRowId:F[24].id,initialVisibleItemIndex:Number(F[24].id),onRetry:()=>{}})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",...I.parameters?.docs?.description}}};try{I.displayName=`InfiniteScrollUp`,I.__docgenInfo={description:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",displayName:`InfiniteScrollUp`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/InfiniteScrollUp.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var lt,L;function ut(){return(ut=e((()=>{p(),b(),lt=o(),L=()=>(0,lt.jsx)(y,{children:(0,lt.jsx)(m,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> isHideHeaderIfNoData keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var dt,R;function ft(){return(ft=e((()=>{p(),b(),dt=o(),R=()=>(0,dt.jsx)(y,{children:(0,dt.jsx)(m,{keyId:`id`,rows:[],isLoading:!0,columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...R.parameters?.docs?.source}}}})))()}var pt,mt,z;function ht(){return(ht=e((()=>{p(),b(),pt=o(),mt=g,z=()=>{let e=mt.slice(0,7);return(0,pt.jsx)(y,{children:(0,pt.jsx)(m,{keyId:`id`,rows:e,isLoading:!0,columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var B,V,H;function gt(){return(gt=e((()=>{B=c(),he(),xe(),Ce(),ce(),h(),He(),Te(),ne(),p(),V=o(),H=()=>{let{rows:e,send:t,sign:n,remove:r}=De(),[i,a]=(0,B.useState)([]),[o,s]=(0,B.useState)(!1),[c,l]=re(!1),u=(0,B.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),d=()=>i.map(({id:e})=>e),ee=()=>l(!0),f=()=>l(!1);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(m,{keyId:`id`,rows:e,columns:je,isEndReached:!0,selectedRows:i,onSelectRow:a,getRowDisabled:u,onRetry:()=>{},massActions:(0,V.jsx)(Ve,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{we.info(`Перемещено в архив документов: ${i.length}`),a([])}}],main:[{text:`Отправить`,startIcon:(0,V.jsx)(Se,{}),onClick:()=>{t(d()),a([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,V.jsx)(be,{}),onClick:()=>{n(d()),a([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,V.jsx)(me,{}),loading:o,isBlockingOperation:!0,onClick:ee}]})}),(0,V.jsx)(se,{open:c,title:`Удалить документы: ${i.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:f,actions:{confirm:{text:`Удалить`,onClick:async()=>{f(),s(!0),await r(d()),a([]),s(!1)}},cancel:{text:`Отмена`}}})]})},H.decorators=[ke],H.parameters={layout:`fullscreen`},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}}})))()}var _t,U;function vt(){return(vt=e((()=>{p(),b(),_t=o(),U=()=>(0,_t.jsx)(y,{children:(0,_t.jsx)(m,{keyId:`id`,rows:[],columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...U.parameters?.docs?.source}}}})))()}var W,yt,bt,G;function xt(){return(xt=e((()=>{W=c(),d(),p(),b(),yt=o(),bt=g,G=()=>{let[e,t]=(0,W.useState)(),[n,r]=(0,W.useState)(40),[i,a]=(0,W.useState)(!1),o=(0,W.useMemo)(()=>{let t=bt.slice(0,n);if(!e)return t;let r=e.sort===`asc`?1:-1;return[...t].sort((t,n)=>t[e.fieldId].localeCompare(n[e.fieldId])*r)},[e,n]),s=n>=bt.length;return(0,yt.jsx)(y,{children:(0,yt.jsx)(m,{keyId:`id`,tableId:`storybook-infinite-resizing-columns`,rows:o,columns:_,plugins:[l],sorting:e,onSort:t,isLoading:i,isEndReached:s,onEndReached:()=>{i||s||(a(!0),setTimeout(()=>{r(e=>e+10),a(!1)},1500))},onRetry:()=>{}})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();
  const [loadedCount, setLoadedCount] = useState(40);
  const [isLoading, setLoading] = useState(false);
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
      <DataGridInfinite<DataType, SortField> keyId="id" tableId="storybook-infinite-resizing-columns" rows={rows} columns={FAKE_COLUMNS} plugins={[ResizePlugin]} sorting={sorting} onSort={setSorting} isLoading={isLoading} isEndReached={isEndReached} onEndReached={loadMore} onRetry={() => {}} />
    </StoryWrapper>;
}`,...G.parameters?.docs?.source},description:{story:"Примеры и правила подключения `ResizePlugin` [здесь](/docs/table-datagrid-resize--docs).",...G.parameters?.docs?.description}}};try{G.displayName=`ResizingColumns`,G.__docgenInfo={description:"Примеры и правила подключения `ResizePlugin` [здесь](/docs/table-datagrid-resize--docs).",displayName:`ResizingColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/ResizingColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var St,K,Ct,wt,q;function Tt(){return(Tt=e((()=>{St=c(),t(),s(),p(),b(),K=o(),Ct=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;

    margin: ${({theme:e})=>e.spacing(2,0)};
  }
`,wt=g,q=()=>{let e=(0,St.useRef)(null),t=t=>{e.current?.scrollToIndex({index:t})};return(0,K.jsxs)(y,{children:[(0,K.jsxs)(Ct,{children:[(0,K.jsx)(a,{onClick:()=>t(10),children:`Переместить на 10 элемент`}),(0,K.jsx)(a,{onClick:()=>t(20),children:`Переместить на 20 элемент`})]}),(0,K.jsx)(m,{keyId:`id`,mobileDisplayVariant:`cards`,rows:wt,columns:_,virtuosoRef:e,onRetry:()=>{}})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source},description:{story:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",...q.parameters?.docs?.description}}};try{q.displayName=`VirtuosoRef`,q.__docgenInfo={description:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",displayName:`VirtuosoRef`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/VirtuosoRef.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Et,J;function Dt(){return(Dt=e((()=>{p(),b(),Et=o(),J=()=>(0,Et.jsx)(y,{children:(0,Et.jsx)(m,{keyId:`id`,rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:_,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isError errorMsg="Ошибка 500" columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function Ot(){return(Ot=e((()=>{pe(),_e(),p(),b(),Y=o(),X=()=>(0,Y.jsx)(y,{children:(0,Y.jsx)(m,{keyId:`id`,rows:Ue,columns:[{field:`documentName`,label:`Наименование документа`,sortable:!0,columnHint:(0,Y.jsx)(ge,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString(),columnHint:(0,Y.jsx)(ge,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,Y.jsx)(oe,{row:e,mainActions:()=>(0,Y.jsx)(ae,{actions:qe.main}),secondaryActions:()=>(0,Y.jsx)(ie,{actions:qe.secondary})}),columnHint:(0,Y.jsx)(ge,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}],onRetry:()=>{},isEndReached:!0})}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...X.parameters?.docs?.description}}};try{X.displayName=`WithHintIcons`,X.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,kt,At,$;function jt(){return(jt=e((()=>{Z=c(),Le(),n(),p(),Ge(),b(),Q=o(),kt=()=>{let{pathname:e}=Fe();return(0,Q.jsxs)(r,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},At=({children:e})=>(0,Q.jsx)(y,{children:(0,Q.jsxs)(Ie,{children:[(0,Q.jsx)(kt,{}),e]})}),$=()=>{let[e,t]=(0,Z.useState)(!0),[n,r]=(0,Z.useState)([]),[i,a]=(0,Z.useState)(!1);return(0,Z.useEffect)(()=>{setTimeout(()=>{r(Ue.slice(0,100)),t(!1)},1500)},[]),(0,Q.jsx)(At,{children:(0,Q.jsx)(m,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:_,renderLink:({children:e,row:t})=>(0,Q.jsx)(Re,{to:`/documents/${t.id}`,children:e}),onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...v(10)]),a(!0),t(!1)},1500)},onRetry:()=>{}})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,...$.parameters?.docs?.description}}};try{$.displayName=`WithRenderLink`,$.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{h(),p(),Je(),Ze(),nt(),rt(),at(),ct(),ut(),ft(),ht(),gt(),vt(),xt(),Tt(),Dt(),Ot(),jt(),Mt={title:`Table/DataGridInfinite`,component:m,decorators:Me,parameters:{docs:{description:{component:`Таблица с бесконечным скроллом, построенная на css grid

DataGridInfinite обладает тем же функционалом, что и [DataGrid](/story/table-dataGrid--docs)

См. также [DataGridInfiniteSubrows](/story/table-dataGridInfinite-subrows--docs), [DataGridInfiniteTree](/story/table-dataGridInfinite-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},Nt=[`BasicUsage`,`CollapsibleRows`,`DisabledRows`,`ActionsDataGrid`,`WithRenderLink`,`NoData`,`IsHideHeadIfNoData`,`LoadingWithData`,`ErrorWithData`,`Loading`,`WithError`,`WithHintIcons`,`InfiniteScrollUp`,`VirtuosoRef`,`MassActions`,`ResizingColumns`]})))()}Pt();export{C as ActionsDataGrid,T as BasicUsage,k as CollapsibleRows,M as DisabledRows,P as ErrorWithData,I as InfiniteScrollUp,L as IsHideHeadIfNoData,R as Loading,z as LoadingWithData,H as MassActions,U as NoData,G as ResizingColumns,q as VirtuosoRef,J as WithError,X as WithHintIcons,$ as WithRenderLink,Nt as __namedExportsOrder,Mt as default};