import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-DApj709n.js";import{s as r,t as i}from"./DataGrid-b8vYW_VJ.js";import{n as a,t as o}from"./DataGridActionCell-BJqUT5yM.js";import{n as s,t as c}from"./BinOutlineMd-DGwK8cjS.js";import{n as l,t as u}from"./EditOutlineMd-6EhYdjFZ.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./common-9d6ZQVuf.js";var _,v,y;function b(){return(b=e((()=>{_=t(),a(),g(),v=n(),y=()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1);(0,_.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500),i&&setTimeout(()=>{a(!1)},1500)},[e,n,i]);let s=f(e,n,i,t,r,a);return(0,v.jsx)(o,{actions:s,row:h})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  useEffect(() => {
    if (deleteLoading) {
      setTimeout(() => {
        setDeleteLoading(false);
      }, 1500);
    }
    if (saveLoading) {
      setTimeout(() => {
        setSaveLoading(false);
      }, 1500);
    }
    if (editLoading) {
      setTimeout(() => {
        setEditLoading(false);
      }, 1500);
    }
  }, [deleteLoading, saveLoading, editLoading]);
  const fakeActions = createBlockingActions(deleteLoading, saveLoading, editLoading, setDeleteLoading, setSaveLoading, setEditLoading);
  return <DataGridActionCell actions={fakeActions} row={FAKE_DATA_ACTIONS} />;
}`,...y.parameters?.docs?.source}}}})))()}var x,S,C;function w(){return(w=e((()=>{x=t(),c(),u(),i(),a(),m(),S=n(),C=()=>{let e=({row:e})=>{let[t,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1),[a,c]=(0,x.useState)(!1),u=()=>{n(!0)},d=()=>{i(!0)},f=()=>{c(!0)};(0,x.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>c(!1),1500)},[t,r,a]);let p=(0,x.useMemo)(()=>({main:[{icon:(0,S.jsx)(l,{}),name:`Редактировать`,loading:t,onClick:u},{icon:(0,S.jsx)(s,{}),name:`Удалить`,loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,onClick:d}],secondary:[{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:f}]}),[t,r,a]);return(0,S.jsx)(o,{actions:p,row:e})};return(0,S.jsx)(r,{rows:p,columns:[{field:`documentName`,label:`Документ`,sortable:!1},{label:`Действия`,sortable:!1,width:`120px`,align:`right`,renderCell:t=>(0,S.jsx)(e,{row:t})}],keyId:`id`,onRetry:()=>{}})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  type FakeActionCellProps<TRow> = Pick<DataGridActionCellProps<TRow>, 'row'>;
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
    return <DataGridActionCell actions={fakeActions} row={row} />;
  };
  const columns: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Документ',
    sortable: false
  }, {
    label: 'Действия',
    sortable: false,
    width: '120px',
    align: 'right',
    renderCell: row => <FakeActionCell row={row} />
  }];
  return <DataGrid rows={FAKE_DATA} columns={columns} keyId="id" onRetry={() => {}} />;
}`,...C.parameters?.docs?.source}}}})))()}var T,E,D;function O(){return(O=e((()=>{T=t(),a(),g(),E=n(),D=()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!1);(0,T.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500)},[e,n]);let i=d(e,n,t,r);return(0,E.jsx)(o,{actions:i,row:h})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  useEffect(() => {
    if (deleteLoading) {
      setTimeout(() => {
        setDeleteLoading(false);
      }, 1500);
    }
    if (saveLoading) {
      setTimeout(() => {
        setSaveLoading(false);
      }, 1500);
    }
  }, [deleteLoading, saveLoading]);
  const fakeActions = createLoaderActions(deleteLoading, saveLoading, setDeleteLoading, setSaveLoading);
  return <DataGridActionCell actions={fakeActions} row={FAKE_DATA_ACTIONS} />;
}`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{a(),b(),w(),O(),k={title:`Table/DataGridActionCell/Tests`,component:o},A=[`DeprecatedSyntax`,`BlockingOperations`,`LoaderActions`]})))()}j();export{y as BlockingOperations,C as DeprecatedSyntax,D as LoaderActions,A as __namedExportsOrder,k as default};