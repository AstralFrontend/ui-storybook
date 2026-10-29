import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ya as t,za as n}from"./preview-BY-1Z8yT.js";import{s as r,t as i}from"./DataGrid-Dcby5csU.js";import{c as a,i as o,l as s,n as c,o as l,r as u,t as d}from"./DataGridActionCell-DI1hjj7t.js";import{t as f}from"./DataGridActionCell-DqqL60AH.js";import{n as p,t as m}from"./BinOutlineMd-Cb3M7cgu.js";import{n as h,t as g}from"./EditOutlineMd-DPAmdbCF.js";import{n as _,t as v}from"./SaveOutlineMd-B77JNBAK.js";import{K as y,lt as b}from"./common-CuUEDSps.js";import{n as x,o as S,r as C,t as w}from"./common-Cyb-PQeA.js";var T,E,D;function O(){return(O=e((()=>{T=n(),m(),g(),i(),y(),f(),S(),E=t(),D=()=>{let e=({row:e})=>{let[t,n]=(0,T.useState)(!1),[r,i]=(0,T.useState)(!1),[a,c]=(0,T.useState)(!1),u=()=>{n(!0)},f=()=>{i(!0)},m=()=>{c(!0)};(0,T.useEffect)(()=>{t&&setTimeout(()=>n(!1),1500),r&&setTimeout(()=>i(!1),1500),a&&setTimeout(()=>c(!1),1500)},[t,r,a]);let g=()=>{let[e,t]=(0,T.useState)([]);return(0,T.useEffect)(()=>{setTimeout(()=>{t([{name:`Подписать`,loading:a,loadingNote:`Происходит подписание`,isBlockingOperation:!0,onClick:m}])},2e3)},[]),(0,E.jsx)(o,{isLoading:!e?.length,actions:e})};return(0,E.jsx)(d,{row:e,mainActions:()=>(0,E.jsx)(s,{actions:[{icon:(0,E.jsx)(h,{}),name:`Редактировать`,loading:t,onClick:u},{icon:(0,E.jsx)(p,{}),name:`Удалить`,mobileProps:{text:`Удалить документ`},loading:r,loadingNote:`Происходит удаление`,isBlockingOperation:!0,isMobilePrimary:!0,onClick:f}]}),secondaryActions:()=>(0,E.jsx)(T.Suspense,{fallback:(0,E.jsx)(l,{}),children:(0,E.jsx)(g,{})})})};return(0,E.jsx)(b,{children:(0,E.jsx)(r,{rows:x,columns:[{field:`documentName`,label:`Документ`,sortable:!1},{label:`Действия`,field:`actions`,sortable:!1,width:`120px`,align:`right`,renderCell:t=>(0,E.jsx)(e,{row:t})}],keyId:`id`,onRetry:()=>{}})})},D.parameters={layout:`fullscreen`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
    const SecondaryActions = () => {
      const [actions, setActions] = useState<SecondaryActionKind<TRow>[]>([]);
      useEffect(() => {
        setTimeout(() => {
          setActions([{
            name: 'Подписать',
            loading: isSigning,
            loadingNote: 'Происходит подписание',
            isBlockingOperation: true,
            onClick: handleSign
          }]);
        }, 2000);
      }, []);
      return <DataGridSecondaryActions isLoading={!actions?.length} actions={actions} />;
    };
    return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
      icon: <EditOutlineMd />,
      name: 'Редактировать',
      loading: isEditing,
      onClick: handleEdit
    }, {
      icon: <BinOutlineMd />,
      name: 'Удалить',
      mobileProps: {
        text: 'Удалить документ'
      },
      loading: isDeleting,
      loadingNote: 'Происходит удаление',
      isBlockingOperation: true,
      isMobilePrimary: true,
      onClick: handleDelete
    }]} />} secondaryActions={() => <Suspense fallback={<DataGridSecondaryActionsSkeleton />}>
            <SecondaryActions />
          </Suspense>} />;
  };
  const columns: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Документ',
    sortable: false
  }, {
    label: 'Действия',
    field: 'actions',
    sortable: false,
    width: '120px',
    align: 'right',
    renderCell: row => <FakeActionCell row={row} />
  }];
  return <StoryWrapper>
      <DataGrid rows={FAKE_DATA} columns={columns} keyId="id" onRetry={() => {}} />
    </StoryWrapper>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A,j;function M(){return(M=e((()=>{k=n(),m(),v(),f(),w(),A=t(),j=()=>{let[e,t]=(0,k.useState)(!1),[n,r]=(0,k.useState)(!1),[i,a]=(0,k.useState)(!1);return(0,k.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500),i&&setTimeout(()=>{a(!1)},1500)},[e,n,i]),(0,A.jsx)(d,{row:C,mainActions:()=>(0,A.jsx)(s,{actions:[{icon:(0,A.jsx)(p,{}),name:`Удалить`,onClick:()=>t(e=>!e),loading:e,isBlockingOperation:!0},{icon:(0,A.jsx)(_,{}),name:`Сохранить`,needConfirm:!0,onClick:()=>r(e=>!e),loading:n,isBlockingOperation:!0}]}),secondaryActions:()=>(0,A.jsx)(o,{actions:[{name:`Редактировать`,onClick:()=>a(e=>!e),loading:i,isBlockingOperation:!0}]})})};try{j.displayName=`BlockingOperations`,j.__docgenInfo={description:"При состоянии `loading=true` и `isBlockingOperation=true` у действия,\nстрока блокируется и появляется тултип с `loadingNote`",displayName:`BlockingOperations`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridActionCell/stories/BlockingOperations.story.tsx`,methods:[],props:{},tags:{}}}catch{}j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
  return <DataGridActionCell row={FAKE_DATA_ACTIONS} mainActions={() => <DataGridMainActions actions={[{
    icon: <BinOutlineMd />,
    name: 'Удалить',
    onClick: () => setDeleteLoading(prevState => !prevState),
    loading: deleteLoading,
    isBlockingOperation: true
  }, {
    icon: <SaveOutlineMd />,
    name: 'Сохранить',
    needConfirm: true,
    onClick: () => setSaveLoading(prevState => !prevState),
    loading: saveLoading,
    isBlockingOperation: true
  }]} />} secondaryActions={() => <DataGridSecondaryActions actions={[{
    name: 'Редактировать',
    onClick: () => setEditLoading(prevState => !prevState),
    loading: editLoading,
    isBlockingOperation: true
  }]} />} />;
}`,...j.parameters?.docs?.source},description:{story:"При состоянии `loading=true` и `isBlockingOperation=true` у действия,\nстрока блокируется и появляется тултип с `loadingNote`",...j.parameters?.docs?.description}}}})))()}var N,P,F,I;function L(){return(L=e((()=>{N=n(),g(),i(),c(),a(),u(),S(),P=t(),F=[{name:`Подписать`,onClick:()=>{},loading:!1,loadingNote:`Происходит подписание`,isBlockingOperation:!0}],I=()=>{let e=()=>{let[e,t]=(0,N.useState)([]);return(0,N.useEffect)(()=>{setTimeout(()=>{t(F)},2e3)},[]),(0,P.jsx)(o,{isLoading:!e?.length,actions:e})};return(0,P.jsx)(r,{rows:x,columns:[{field:`documentName`,label:`Документ`,sortable:!1},{label:`Действия`,sortable:!1,width:`120px`,align:`right`,renderCell:t=>(0,P.jsx)(d,{row:t,mainActions:()=>(0,P.jsx)(s,{actions:[{icon:(0,P.jsx)(h,{}),name:`Редактировать`,onClick:()=>{}}]}),secondaryActions:()=>(0,P.jsx)(N.Suspense,{fallback:(0,P.jsx)(l,{}),children:(0,P.jsx)(e,{})})})}],keyId:`id`,onRetry:()=>{}})};try{I.displayName=`LazySecondaryActions`,I.__docgenInfo={description:`При таком подходе рендер secondaryActions происходит только при открытии меню доп. действий.
При использовании mobx сторы не создаются сразу для всего списка secondaryActions.`,displayName:`LazySecondaryActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridActionCell/stories/LazySecondaryActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const SecondaryActions = () => {
    const [actions, setActions] = useState<SecondaryActionKind<Row>[]>([]);
    useEffect(() => {
      setTimeout(() => {
        setActions(FAKE_ACTIONS);
      }, 2000);
    }, []);
    return <DataGridSecondaryActions isLoading={!actions?.length} actions={actions} />;
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
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
      icon: <EditOutlineMd />,
      name: 'Редактировать',
      onClick: () => {}
    }]} />} secondaryActions={() => <Suspense fallback={<DataGridSecondaryActionsSkeleton />}>
              <SecondaryActions />
            </Suspense>} />
  }];
  return <DataGrid rows={FAKE_DATA} columns={columns} keyId="id" onRetry={() => {}} />;
}`,...I.parameters?.docs?.source},description:{story:`При таком подходе рендер secondaryActions происходит только при открытии меню доп. действий.
При использовании mobx сторы не создаются сразу для всего списка secondaryActions.`,...I.parameters?.docs?.description}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=n(),m(),v(),c(),a(),w(),z=t(),B=()=>{let[e,t]=(0,R.useState)(!1),[n,r]=(0,R.useState)(!1);return(0,R.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500)},[e,n]),(0,z.jsx)(d,{row:C,mainActions:()=>(0,z.jsx)(s,{actions:[{icon:(0,z.jsx)(p,{}),name:`Удалить`,onClick:()=>t(e=>!e),loading:e},{icon:(0,z.jsx)(_,{}),name:`Сохранить`,loading:n,onClick:()=>r(e=>!e)}]})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
  return <DataGridActionCell row={FAKE_DATA_ACTIONS} mainActions={() => <DataGridMainActions actions={[{
    icon: <BinOutlineMd />,
    name: 'Удалить',
    onClick: () => setDeleteLoading(prevState => !prevState),
    loading: deleteLoading
  }, {
    icon: <SaveOutlineMd />,
    name: 'Сохранить',
    loading: saveLoading,
    onClick: () => setSaveLoading(prevState => !prevState)
  }]} />} />;
}`,...B.parameters?.docs?.source}}}})))()}var H,U;function W(){return(W=e((()=>{c(),O(),M(),L(),V(),H={title:`Table/DataGridActionCell`,component:d,parameters:{docs:{description:{component:`**DataGridActionCell** предназначен для использования в компонентах [DataGrid](/story/table-dataGrid--docs) и [DataGridInfinite](/story/table-dataGridInfinite--docs).
Работает с контекстом DataGrid и позволяет управлять состояниями строки при взаимодействии с действиями

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},U=[`BasicUsage`,`LoaderActions`,`BlockingOperations`,`LazySecondaryActions`]})))()}W();export{D as BasicUsage,j as BlockingOperations,I as LazySecondaryActions,B as LoaderActions,U as __namedExportsOrder,H as default};