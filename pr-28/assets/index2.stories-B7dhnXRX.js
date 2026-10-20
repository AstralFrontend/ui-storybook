import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as i,ji as a,ln as o,xa as s,yn as c}from"./preview-DRblasGc.js";import{ot as l,s as u,t as d}from"./DataGrid-DOrwGump.js";import{r as ee,t as te}from"./dividerClasses-CL7pZnu3.js";import{i as ne}from"./TagsList-BqfKICBr.js";import{n as re}from"./useNewToggle-zVQMoFYY.js";import{i as ie,l as ae,t as oe}from"./DataGridActionCell-Bd1jLpzh.js";import{t as se}from"./ConfirmDialog-Rc4tCpFg.js";import{t as ce}from"./ConfirmDialog-BsrXHVd8.js";import{a as le,t as ue}from"./LoadingPlaceholder-DUplUXNI.js";import{t as de}from"./ContentState-BESwRU4n.js";import{t as fe}from"./ContentState-DDkHbSlL.js";import{t as pe}from"./DataGridActionCell-CPnMru98.js";import{n as me,t as he}from"./BinOutlineMd-BYq70o7D.js";import{n as f,t as p}from"./DataGridInfinite-CE8ZxGTb.js";import{n as ge,t as _e}from"./DataGridColumnHintIcon-D_IwR96o.js";import{n as ve,t as ye}from"./EditOutlineMd-aC4y21Pz.js";import{n as be,t as xe}from"./DocSignedOutlineMd-CruEOWrq.js";import{n as Se,t as Ce}from"./SendOutlineMd-B6Ph4KLY.js";import{a as we}from"./NotificationStackContainer-Bs4vzjAn.js";import{t as Te}from"./Notification-DbMDNDmB.js";import{Dt as Ee,J as De,K as m,Ot as Oe,Y as ke,Z as Ae,_t as je,at as Me,mt as Ne,xt as Pe}from"./common-hzDPxfvx.js";import{i as Fe,n as Ie,r as Le,t as Re}from"./chunk-62JRHF6Z-CoIG5nGL.js";import{n as ze,t as Be}from"./DataGridCollapsibleRow-BYBylaJx.js";import{n as Ve,t as He}from"./DataGridMassActions-B4EPI1Xf.js";import{d as Ue,g as We,i as h,l as g,m as _,o as v,p as Ge,r as Ke,t as y,u as qe}from"./common-BbODgDct.js";var b,x,S;function Je(){return(Je=e((()=>{b=t(),he(),ye(),Ee(),pe(),f(),Ge(),y(),x=s(),S=()=>{let e=({row:e})=>{let[t,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(!1),s=()=>{n(!0)},c=()=>{i(!0)},l=()=>{o(!0)};(0,b.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>o(!1),1500)},[t,r,a]);let u=(0,b.useMemo)(()=>({main:[{icon:(0,x.jsx)(ve,{}),name:`Редактировать`,loading:t,onClick:s},{icon:(0,x.jsx)(me,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:c}],secondary:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:l}]}),[t,r,a]);return(0,x.jsx)(oe,{row:e,mainActions:()=>(0,x.jsx)(ae,{actions:u.main}),secondaryActions:()=>(0,x.jsx)(ie,{actions:u.secondary})})},t=Oe([{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:t=>(0,x.jsx)(e,{row:t})}]),n=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:We()},..._(9)],[r,i]=(0,b.useState)(!0),[a,o]=(0,b.useState)([]),[s,c]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{setTimeout(()=>{o(n.slice(0,10)),i(!1)},1500)},[]),(0,x.jsx)(v,{children:(0,x.jsx)(p,{keyId:`id`,rows:a,isLoading:r,isEndReached:s,columns:t,onEndReached:()=>{i(!0),setTimeout(()=>{o(e=>[...e,..._(10)]),c(!0),i(!1)},1500)},onRetry:()=>{}})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source},description:{story:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",...S.parameters?.docs?.description}}};try{S.displayName=`ActionsDataGrid`,S.__docgenInfo={description:"При состоянии `loading=true` и `isBlockingOperation=true` у действия, строка блокируется и появляется тултип с `loadingNote`",displayName:`ActionsDataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/ActionsDataGrid.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,Ye,Xe,w;function Ze(){return(Ze=e((()=>{C=t(),f(),y(),Ye=s(),Xe=h,w=()=>{let[e,t]=(0,C.useState)(!0),[n,r]=(0,C.useState)([]),[i,a]=(0,C.useState)(!1),[o,s]=(0,C.useState)([]),c=e=>s(e);(0,C.useEffect)(()=>{setTimeout(()=>{r(Xe.slice(0,40)),t(!1)},1500)},[]);let l=(0,C.useCallback)(e=>{console.log(`row clicked`,e)},[]);return(0,Ye.jsx)(v,{children:(0,Ye.jsx)(p,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:g,selectedRows:o,onSelectRow:c,onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...Xe.slice(40,50)]),a(!0),t(!1)},1500)},onRowClick:l,onRetry:()=>{}})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}}})))()}var T,E,Qe,$e,D,et,tt,O;function nt(){return(nt=e((()=>{ee(),T=t(),fe(),d(),m(),Be(),ue(),c(),f(),Ge(),y(),E=s(),Qe=a(u)`
  & .${te.root} {
    display: none;
  }

   &.${l.mobileVariantCards} .${l.wrapper} {
    margin: 0;
  }
`,$e=a.div`
  & .${le.root} {
    height: 200px;
  }
`,D=()=>(0,E.jsx)(Qe,{keyId:`id`,rows:Pe,columns:Ne,onRetry:()=>{},mobileDisplayVariant:`cards`}),et=()=>{let[e,t]=(0,T.useState)(!0),[n,r]=(0,T.useState)([]),[i,a]=(0,T.useState)(!1);return(0,T.useEffect)(()=>{setTimeout(()=>{r(Ue.slice(0,20)),t(!1)},1500)},[]),{slicedData:n,isLoading:e,isEndReached:i,incrementData:()=>{t(!0),setTimeout(()=>{r(e=>[...e,..._(10)]),a(!0),t(!1)},1500)}}},tt=({initialOpen:e})=>{let[t,n]=(0,T.useState)(!1);return(0,E.jsx)(ze,{initialOpen:e,onOpen:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},children:(0,E.jsx)($e,{children:(0,E.jsx)(de,{isLoading:t,children:(0,E.jsx)(D,{})})})})},O=()=>{let{slicedData:e,isLoading:t,isEndReached:n,incrementData:r}=et(),i=(0,T.useCallback)((e,t)=>(0,E.jsx)(tt,{initialOpen:t===1}),[]);return(0,E.jsx)(Ae,{children:(0,E.jsx)(p,{keyId:`id`,rows:e,isLoading:t,isEndReached:n,columns:g,onEndReached:r,onRetry:()=>{},renderRow:i,mobileDisplayVariant:`cards`})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <StyledDataGrid keyId="id" rows={INNER_DOCUMENTS} columns={DOCUMENT_COLUMNS} onRetry={() => {}} mobileDisplayVariant="cards" />`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}}})))()}var k,A,j;function rt(){return(rt=e((()=>{k=t(),ye(),pe(),f(),y(),A=s(),j=()=>{let e=(0,k.useMemo)(()=>[{id:`1`,documentName:`УПД №1934`,recipient:`ООО "Волшебные документы"`,createDate:`2026-04-17T15:55:00.000Z`,status:`Отправлен`,hasAccess:!0},{id:`2`,documentName:`Акт сверки №77`,recipient:`ИП Иванов О.В.`,createDate:`2026-04-15T08:05:00.000Z`,status:`Черновик`,hasAccess:!1},{id:`3`,documentName:`Счёт-фактура №418`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-14T11:40:00.000Z`,status:`На согласовании`,hasAccess:!0},{id:`4`,documentName:`Договор поставки №12-0425`,recipient:`ООО "Ромашка"`,createDate:`2026-04-12T09:15:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`5`,documentName:`Договор аренды №3`,recipient:`ООО "Ромашка"`,createDate:`2026-04-18T10:30:00.000Z`,status:`Черновик`,hasAccess:!0},{id:`6`,documentName:`Акт выполненных работ №56`,recipient:`ПАО "Первый завод"`,createDate:`2026-04-20T16:10:00.000Z`,status:`Черновик`,hasAccess:!0}],[]),[t,n]=(0,k.useState)([]),r=(0,k.useCallback)(e=>{if(!e.hasAccess)return{mode:`row`,reason:`Нет доступа к документу`};if(e.status===`Отправлен`)return{mode:`selection`,reason:`Документ уже отправлен получателю`};if(e.status===`На согласовании`)return{mode:`row-except-last-cell`,reason:`Документ на согласовании`}},[]),i=(0,k.useMemo)(()=>[{field:`documentName`,label:`Наименование документа`,minWidth:`200px`},{field:`recipient`,label:`Получатель`,minWidth:`200px`},{field:`status`,label:`Статус`,minWidth:`160px`},{label:`Действия`,align:`center`,width:`120px`,renderCell:e=>(0,A.jsx)(oe,{row:e,mainActions:()=>(0,A.jsx)(ae,{actions:[{icon:(0,A.jsx)(ve,{}),name:`Редактировать`,onClick:()=>{}}]})})}],[]);return(0,A.jsx)(v,{children:(0,A.jsx)(p,{keyId:`id`,rows:e,columns:i,selectedRows:t,onSelectRow:n,getRowDisabled:r,onRetry:()=>{}})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",...j.parameters?.docs?.description}}};try{j.displayName=`DisabledRows`,j.__docgenInfo={description:"`getRowDisabled` возвращает блокировку строки `{ mode, reason }`:\n- `mode` — режим блокировки:\n  - `'selection'` — только checkbox\n  - `'row'` — вся строка\n  - `'row-except-last-cell'` — вся строка, кроме последней ячейки\n- `reason` — причина блокировки\n\n**Важно:** Функцию `getRowDisabled` необходимо обернуть в `useCallback` для предотвращения лишних перерендеров.\n```tsx\nconst getRowDisabled = useCallback(\n  (row: Document): DataGridRowDisabled | undefined => {\n    if (row.status === 'Отправлен') {\n      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };\n    }\n\n    return undefined;\n  },\n  [],\n);\n```",displayName:`DisabledRows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/DisabledRows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var it,at,M;function ot(){return(ot=e((()=>{f(),y(),it=s(),at=h,M=()=>{let e=at.slice(0,7);return(0,it.jsx)(v,{children:(0,it.jsx)(p,{keyId:`id`,rows:e,isError:!0,columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isError columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...M.parameters?.docs?.source}}}})))()}var N,P,F,I;function st(){return(st=e((()=>{N=t(),f(),y(),P=s(),F=h,I=()=>{let{isLoading:e,slicedData:t,isEndReached:n,incrementData:r,setLoading:i,setSlicedData:a,incrementTimerRef:o}=Ke(),[s,c]=(0,N.useState)(!1),l=(0,N.useRef)(20);return(0,P.jsx)(v,{children:(0,P.jsx)(p,{keyId:`id`,rows:t,isLoading:e,isEndReached:n,isStartReached:s,columns:g,mobileDisplayVariant:`cards`,onEndReached:r,onStartReached:()=>{s||e||(i(!0),l.current<=10?o.current=setTimeout(()=>{let e=F.slice(0,l.current);a(t=>[...e,...t]),c(!0),i(!1)},1500):(l.current-=10,o.current=setTimeout(()=>{let e=F.slice(l.current,l.current+10);a(t=>[...e,...t]),i(!1)},1500)))},activeRowId:F[24].id,initialVisibleItemIndex:Number(F[24].id),onRetry:()=>{}})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",...I.parameters?.docs?.description}}};try{I.displayName=`InfiniteScrollUp`,I.__docgenInfo={description:"Подгрузка данных при скроле до начала списка происходит через параметры `onStartReached` и `isStartReached`.\n\nДля скролла к определенному элементу списка таблицы при первоначальном рендере используется параметр `initialVisibleItemIndex`.\n\nДокументация [mobx-query](https://www.npmjs.com/package/@astral/mobx-query#%D0%BA%D1%83%D1%80%D1%81%D0%BE%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F)",displayName:`InfiniteScrollUp`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/InfiniteScrollUp.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ct,L;function lt(){return(lt=e((()=>{f(),y(),ct=s(),L=()=>(0,ct.jsx)(v,{children:(0,ct.jsx)(p,{isHideHeaderIfNoData:!0,keyId:`id`,rows:[],columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> isHideHeaderIfNoData keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var ut,R;function dt(){return(dt=e((()=>{f(),y(),ut=s(),R=()=>(0,ut.jsx)(v,{children:(0,ut.jsx)(p,{keyId:`id`,rows:[],isLoading:!0,columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...R.parameters?.docs?.source}}}})))()}var z,ft,B;function pt(){return(pt=e((()=>{f(),y(),z=s(),ft=h,B=()=>{let e=ft.slice(0,7);return(0,z.jsx)(v,{children:(0,z.jsx)(p,{keyId:`id`,rows:e,isLoading:!0,columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = FAKE_ROWS.slice(0, 7);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isLoading columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...B.parameters?.docs?.source}}}})))()}var V,H,U;function mt(){return(mt=e((()=>{V=t(),he(),xe(),Ce(),ce(),m(),He(),Te(),ne(),f(),H=s(),U=()=>{let{rows:e,send:t,sign:n,remove:r}=De(),[i,a]=(0,V.useState)([]),[o,s]=(0,V.useState)(!1),[c,l]=re(!1),u=(0,V.useCallback)(e=>{if(e.status===`Отправляется`)return{mode:`selection`,reason:`Документ отправляется`};if(e.status===`Подписывается`)return{mode:`selection`,reason:`Документ подписывается`}},[]),d=()=>i.map(({id:e})=>e),ee=()=>l(!0),te=()=>l(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(p,{keyId:`id`,rows:e,columns:je,isEndReached:!0,selectedRows:i,onSelectRow:a,getRowDisabled:u,onRetry:()=>{},massActions:(0,H.jsx)(Ve,{entityDeclension:[`документ`,`документа`,`документов`],secondary:[{text:`Переместить в архив`,onClick:()=>{we.info(`Перемещено в архив документов: ${i.length}`),a([])}}],main:[{text:`Отправить`,startIcon:(0,H.jsx)(Se,{}),onClick:()=>{t(d()),a([])}},{text:`Подписать`,variant:`outlined`,color:`grey`,startIcon:(0,H.jsx)(be,{}),onClick:()=>{n(d()),a([])}},{text:`Удалить`,variant:`outlined`,color:`error`,startIcon:(0,H.jsx)(me,{}),loading:o,isBlockingOperation:!0,onClick:ee}]})}),(0,H.jsx)(se,{open:c,title:`Удалить документы: ${i.length}?`,description:`Удалённые документы нельзя будет восстановить`,onClose:te,actions:{confirm:{text:`Удалить`,onClick:async()=>{te(),s(!0),await r(d()),a([]),s(!1)}},cancel:{text:`Отмена`}}})]})},U.decorators=[ke],U.parameters={layout:`fullscreen`},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}}})))()}var ht,W;function gt(){return(gt=e((()=>{f(),y(),ht=s(),W=()=>(0,ht.jsx)(v,{children:(0,ht.jsx)(p,{keyId:`id`,rows:[],columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...W.parameters?.docs?.source}}}})))()}var _t,G,vt,yt,K;function bt(){return(bt=e((()=>{_t=t(),n(),c(),f(),y(),G=s(),vt=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;

    margin: ${({theme:e})=>e.spacing(2,0)};
  }
`,yt=h,K=()=>{let e=(0,_t.useRef)(null),t=t=>{e.current?.scrollToIndex({index:t})};return(0,G.jsxs)(v,{children:[(0,G.jsxs)(vt,{children:[(0,G.jsx)(o,{onClick:()=>t(10),children:`Переместить на 10 элемент`}),(0,G.jsx)(o,{onClick:()=>t(20),children:`Переместить на 20 элемент`})]}),(0,G.jsx)(p,{keyId:`id`,mobileDisplayVariant:`cards`,rows:yt,columns:g,virtuosoRef:e,onRetry:()=>{}})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",...K.parameters?.docs?.description}}};try{K.displayName=`VirtuosoRef`,K.__docgenInfo={description:"Параметр `virtuosoRef` позволяет управлять методами из `react-virtuoso`",displayName:`VirtuosoRef`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/VirtuosoRef.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function xt(){return(xt=e((()=>{f(),y(),q=s(),J=()=>(0,q.jsx)(v,{children:(0,q.jsx)(p,{keyId:`id`,rows:[],isError:!0,errorMsg:`Ошибка 500`,columns:g,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>alert(`Повторить запрос`)})}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleRetry = () => alert('Повторить запрос');
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={[]} isError errorMsg="Ошибка 500" columns={FAKE_COLUMNS} onRowClick={handleRowClick} onRetry={handleRetry} />
    </StoryWrapper>;
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function St(){return(St=e((()=>{pe(),_e(),f(),y(),Y=s(),X=()=>(0,Y.jsx)(v,{children:(0,Y.jsx)(p,{keyId:`id`,rows:Ue,columns:[{field:`documentName`,label:`Наименование документа`,sortable:!0,columnHint:(0,Y.jsx)(ge,{title:`Наименование документа`,note:`Полное название документа, включая номер и дату регистрации`})},{field:`recipient`,label:`Получатель`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString(),columnHint:(0,Y.jsx)(ge,{title:`Дата создания`,note:`Дата и время создания документа в системе. Формат отображения: ДД.ММ.ГГГГ ЧЧ:ММ`})},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,Y.jsx)(oe,{row:e,mainActions:()=>(0,Y.jsx)(ae,{actions:qe.main}),secondaryActions:()=>(0,Y.jsx)(ie,{actions:qe.secondary})}),columnHint:(0,Y.jsx)(ge,{title:`Действия`,note:`Доступные операции с документом: просмотр, редактирование, удаление, экспорт. Набор действий зависит от прав доступа.`})}],onRetry:()=>{},isEndReached:!0})}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...X.parameters?.docs?.description}}};try{X.displayName=`WithHintIcons`,X.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,Ct,wt,$;function Tt(){return(Tt=e((()=>{Z=t(),Le(),r(),f(),Ge(),y(),Q=s(),Ct=()=>{let{pathname:e}=Fe();return(0,Q.jsxs)(i,{variant:`body1`,color:`textSecondary`,children:[`Маршрут: `,e]})},wt=({children:e})=>(0,Q.jsx)(v,{children:(0,Q.jsxs)(Ie,{children:[(0,Q.jsx)(Ct,{}),e]})}),$=()=>{let[e,t]=(0,Z.useState)(!0),[n,r]=(0,Z.useState)([]),[i,a]=(0,Z.useState)(!1);return(0,Z.useEffect)(()=>{setTimeout(()=>{r(Ue.slice(0,100)),t(!1)},1500)},[]),(0,Q.jsx)(wt,{children:(0,Q.jsx)(p,{keyId:`id`,rows:n,isLoading:e,isEndReached:i,columns:g,renderLink:({children:e,row:t})=>(0,Q.jsx)(Re,{to:`/documents/${t.id}`,children:e}),onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,..._(10)]),a(!0),t(!1)},1500)},onRetry:()=>{}})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source},description:{story:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,...$.parameters?.docs?.description}}};try{$.displayName=`WithRenderLink`,$.__docgenInfo={description:`Оборачивает строку в свой компонент ссылки, например Link роутера.`,displayName:`WithRenderLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/WithRenderLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{m(),f(),Je(),Ze(),nt(),rt(),ot(),st(),lt(),dt(),pt(),mt(),gt(),bt(),xt(),St(),Tt(),Et={title:`Table/DataGridInfinite`,component:p,decorators:Me,parameters:{docs:{description:{component:`Таблица с бесконечным скроллом, построенная на css grid

DataGridInfinite обладает тем же функционалом, что и [DataGrid](/story/table-dataGrid--docs)

См. также [DataGridInfiniteSubrows](/story/table-dataGridInfinite-subrows--docs), [DataGridInfiniteTree](/story/table-dataGridInfinite-tree--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},Dt=[`BasicUsage`,`CollapsibleRows`,`DisabledRows`,`ActionsDataGrid`,`WithRenderLink`,`NoData`,`IsHideHeadIfNoData`,`LoadingWithData`,`ErrorWithData`,`Loading`,`WithError`,`WithHintIcons`,`InfiniteScrollUp`,`VirtuosoRef`,`MassActions`]})))()}Ot();export{S as ActionsDataGrid,w as BasicUsage,O as CollapsibleRows,j as DisabledRows,M as ErrorWithData,I as InfiniteScrollUp,L as IsHideHeadIfNoData,R as Loading,B as LoadingWithData,U as MassActions,W as NoData,K as VirtuosoRef,J as WithError,X as WithHintIcons,$ as WithRenderLink,Dt as __namedExportsOrder,Et as default};