import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-BQGJfZhY.js";import{c as r,s as i}from"./DataGrid-CVlNew0W.js";import{i as a,l as o,t as s}from"./DataGridActionCell-CcbvTznq.js";import{t as c}from"./DataGridActionCell-Bi3L5s_V.js";import{Dt as l,K as u,Tt as d,Z as f,ht as p,jt as m}from"./common-B210jmrK.js";var h,g,_;function v(){return(v=e((()=>{h=t(),c(),r(),l(),u(),g=n(),_=()=>{let e=[{field:`recipient`,label:`Получатель`,sortable:!0},{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,g.jsx)(s,{row:e,mainActions:()=>(0,g.jsx)(o,{actions:p.main}),secondaryActions:()=>(0,g.jsx)(a,{actions:p.secondary})})}],t=[{id:`1`,documentName:`УКД № 47`,recipient:`ПАО "Первый завод"`,createDate:m(),options:{childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`11`,documentName:`Акт № УТ000006319`,recipient:`ПАО "Первый завод"`,createDate:m(),options:{isNotSelectable:!0}},{id:`12`,documentName:`Торг-12 № 1446`,recipient:`ПАО "Первый завод"`,createDate:m(),options:{isNotSelectable:!0}},{id:`13`,documentName:`Счет-фактура №1237`,recipient:`ПАО "Первый завод"`,createDate:m(),options:{isNotSelectable:!0}}]},{id:`2`,documentName:`УКД № 46`,recipient:`ООО "Купи Продай"`,createDate:m(),options:{childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`21`,documentName:`Счет-фактура №1231`,recipient:`ПАО "Первый завод"`,createDate:m(),options:{isNotSelectable:!0}}]}],[n,r]=(0,h.useState)([]),[c,l]=(0,h.useState)([]),[u,d]=(0,h.useState)(!0);return(0,h.useEffect)(()=>{setTimeout(()=>{r(t.slice(0,10)),d(!1)},1500)},[]),(0,g.jsx)(f,{children:(0,g.jsx)(i,{keyId:`id`,columns:e,onRetry:()=>{},rows:n,selectedRows:c,onSelectRow:e=>l(e),isLoading:u,variant:`subrows`,subrows:{moreButtonColumnPosition:2,isVisibleCollapseButton:!1}})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const columns: DataGridColumns<DataType>[] = [{
    field: 'recipient',
    label: 'Получатель',
    sortable: true
  }, {
    field: 'documentName',
    label: 'Наименование документа',
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
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={FAKE_ACTIONS.main} />} secondaryActions={() => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />} />;
    }
  }];
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '1',
    documentName: 'УКД № 47',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    options: {
      childrenColumns: [{
        field: 'recipient',
        renderCell: () => null
      }, {
        field: 'actions',
        renderCell: () => null
      }]
    },
    children: [{
      id: '11',
      documentName: 'Акт № УТ000006319',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '12',
      documentName: 'Торг-12 № 1446',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '13',
      documentName: 'Счет-фактура №1237',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }]
  }, {
    id: '2',
    documentName: 'УКД № 46',
    recipient: 'ООО "Купи Продай"',
    createDate: makeRandomDate(),
    options: {
      childrenColumns: [{
        field: 'recipient',
        renderCell: () => null
      }, {
        field: 'actions',
        renderCell: () => null
      }]
    },
    children: [{
      id: '21',
      documentName: 'Счет-фактура №1231',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }]
  }];
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <CardsContainer>
      <DataGrid keyId="id" columns={columns} onRetry={() => {}} rows={slicedData} selectedRows={selected} onSelectRow={handleSelect} isLoading={isLoading} variant="subrows" subrows={{
      moreButtonColumnPosition: 2,
      isVisibleCollapseButton: false
    }} />
    </CardsContainer>;
}`,..._.parameters?.docs?.source},description:{story:"Параметр `isVisibleCollapseButton=false` убирает шеврон",..._.parameters?.docs?.description}}};try{_.displayName=`IsVisibleCollapseButton`,_.__docgenInfo={description:"Параметр `isVisibleCollapseButton=false` убирает шеврон",displayName:`IsVisibleCollapseButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/subrows/IsVisibleCollapseButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),c(),r(),u(),b=n(),x=()=>{let e=(0,y.useMemo)(()=>[{field:`recipient`,label:`Получатель`,sortable:!0},{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,b.jsx)(s,{row:e,mainActions:()=>(0,b.jsx)(o,{actions:p.main}),secondaryActions:()=>(0,b.jsx)(a,{actions:p.secondary})})}],[]),t=[{id:`1`,documentName:`УКД № 47`,recipient:`ПАО "Первый завод"`,createDate:d(0),options:{isNotSelectable:!0,childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`11`,documentName:`Акт № УТ000006319`,recipient:`ПАО "Первый завод"`,createDate:d(1),options:{isNotSelectable:!0}},{id:`12`,documentName:`Торг-12 № 1446`,recipient:`ПАО "Первый завод"`,createDate:d(2),options:{isNotSelectable:!0}},{id:`13`,documentName:`Счет-фактура №1237`,recipient:`ПАО "Первый завод"`,createDate:d(3),options:{isNotSelectable:!0}}]},{id:`2`,documentName:`УКД № 46`,recipient:`ООО "Купи Продай"`,createDate:d(4),options:{childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`21`,documentName:`Счет-фактура №1231`,recipient:`ПАО "Первый завод"`,createDate:d(5),options:{isNotSelectable:!0}}]}],[n,r]=(0,y.useState)([]),[c,l]=(0,y.useState)([]),[u,m]=(0,y.useState)(!0);return(0,y.useEffect)(()=>{setTimeout(()=>{r(t.slice(0,10)),m(!1)},1500)},[]),(0,b.jsx)(f,{children:(0,b.jsx)(i,{rows:n,columns:e,keyId:`id`,onRetry:()=>{},selectedRows:c,onSelectRow:e=>l(e),isLoading:u,variant:`subrows`,subrows:{moreButtonColumnPosition:2,initialVisibleChildrenCount:2}})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const columns: DataGridColumns<DataType>[] = useMemo(() => [{
    field: 'recipient',
    label: 'Получатель',
    sortable: true
  }, {
    field: 'documentName',
    label: 'Наименование документа',
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
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={FAKE_ACTIONS.main} />} secondaryActions={() => <DataGridSecondaryActions actions={FAKE_ACTIONS.secondary} />} />;
    }
  }], []);
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '1',
    documentName: 'УКД № 47',
    recipient: 'ПАО "Первый завод"',
    createDate: getFakeCreateDate(0),
    options: {
      isNotSelectable: true,
      childrenColumns: [{
        field: 'recipient',
        renderCell: () => null
      }, {
        field: 'actions',
        renderCell: () => null
      }]
    },
    children: [{
      id: '11',
      documentName: 'Акт № УТ000006319',
      recipient: 'ПАО "Первый завод"',
      createDate: getFakeCreateDate(1),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '12',
      documentName: 'Торг-12 № 1446',
      recipient: 'ПАО "Первый завод"',
      createDate: getFakeCreateDate(2),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '13',
      documentName: 'Счет-фактура №1237',
      recipient: 'ПАО "Первый завод"',
      createDate: getFakeCreateDate(3),
      options: {
        isNotSelectable: true
      }
    }]
  }, {
    id: '2',
    documentName: 'УКД № 46',
    recipient: 'ООО "Купи Продай"',
    createDate: getFakeCreateDate(4),
    options: {
      childrenColumns: [{
        field: 'recipient',
        renderCell: () => null
      }, {
        field: 'actions',
        renderCell: () => null
      }]
    },
    children: [{
      id: '21',
      documentName: 'Счет-фактура №1231',
      recipient: 'ПАО "Первый завод"',
      createDate: getFakeCreateDate(5),
      options: {
        isNotSelectable: true
      }
    }]
  }];
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <CardsContainer>
      <DataGrid rows={slicedData} columns={columns} keyId="id" onRetry={() => {}} selectedRows={selected} onSelectRow={handleSelect} isLoading={isLoading} variant="subrows" subrows={{
      moreButtonColumnPosition: 2,
      initialVisibleChildrenCount: 2
    }} />
    </CardsContainer>;
}`,...x.parameters?.docs?.source},description:{story:`Часть вложенных элементов отображается, остальные скрываются под кнопку "Показать все"`,...x.parameters?.docs?.description}}};try{x.displayName=`Subrows`,x.__docgenInfo={description:`Часть вложенных элементов отображается, остальные скрываются под кнопку "Показать все"`,displayName:`Subrows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/subrows/Subrows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w;function T(){return(T=e((()=>{r(),v(),S(),C={title:`Table/DataGrid/Subrows`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`\`variant="subrows"\` - позволяет отображать дочерние элементы DataGrid в виде вложенных строк.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},w=[`Subrows`,`IsVisibleCollapseButton`]})))()}T();export{_ as IsVisibleCollapseButton,x as Subrows,w as __namedExportsOrder,C as default};