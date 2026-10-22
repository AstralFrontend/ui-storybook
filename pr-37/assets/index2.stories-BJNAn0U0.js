import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-BJt2oHan.js";import{i as r,l as i,t as a}from"./DataGridActionCell-HxAI1eiv.js";import{t as o}from"./DataGridActionCell-DbMuA3Sy.js";import{n as s,t as c}from"./DataGridInfinite-CTBP97GV.js";import{K as l,Z as u}from"./common-CPauH8gC.js";import{c as d,g as f,m as p,p as m,t as h}from"./common-BIjiHv-g.js";var g,_,v;function y(){return(y=e((()=>{g=t(),l(),o(),s(),m(),h(),_=n(),v=()=>{let e=[{field:`recipient`,label:`Получатель`,sortable:!0},{field:`documentName`,label:`Наименование документа`,sortable:!0},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,renderCell:e=>(0,_.jsx)(a,{row:e,mainActions:()=>(0,_.jsx)(i,{actions:d.main}),secondaryActions:()=>(0,_.jsx)(r,{actions:d.secondary})})}],t=[{id:`123456789`,documentName:`УКД № 47`,recipient:`ПАО "Первый завод"`,createDate:f(),options:{childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`1234567890`,documentName:`Акт № УТ000006319`,recipient:`ПАО "Первый завод"`,createDate:f(),options:{isNotSelectable:!0}},{id:`1234567891`,documentName:`Торг-12 № 1446`,recipient:`ПАО "Первый завод"`,createDate:f(),options:{isNotSelectable:!0}},{id:`1234567892`,documentName:`Счет-фактура №1237`,recipient:`ПАО "Первый завод"`,createDate:f(),options:{isNotSelectable:!0}}]},{id:`1234544545`,documentName:`УКД № 46`,recipient:`ООО "Купи Продай"`,createDate:f(),options:{childrenColumns:[{field:`recipient`,renderCell:()=>null},{field:`actions`,renderCell:()=>null}]},children:[{id:`1234567890`,documentName:`Счет-фактура №1231`,recipient:`ПАО "Первый завод"`,createDate:f(),options:{isNotSelectable:!0}}]},...p(8)],[n,o]=(0,g.useState)(!0),[s,l]=(0,g.useState)([]),[m,h]=(0,g.useState)([]),[v,y]=(0,g.useState)(!1);return(0,g.useEffect)(()=>{setTimeout(()=>{l(t.slice(0,10)),o(!1)},1500)},[]),(0,_.jsx)(u,{children:(0,_.jsx)(c,{keyId:`id`,rows:s,isLoading:n,isEndReached:v,columns:e,variant:`subrows`,subrows:{moreButtonColumnPosition:2},selectedRows:m,onSelectRow:e=>h(e),onEndReached:()=>{o(!0),setTimeout(()=>{l(e=>[...e,...p(10)]),y(!0),o(!1)},1500)},onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
    id: '123456789',
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
      id: '1234567890',
      documentName: 'Акт № УТ000006319',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '1234567891',
      documentName: 'Торг-12 № 1446',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }, {
      id: '1234567892',
      documentName: 'Счет-фактура №1237',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }]
  }, {
    id: '1234544545',
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
      id: '1234567890',
      documentName: 'Счет-фактура №1231',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
    }]
  }, ...makeDataList(8)];
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...makeDataList(10)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  return <CardsContainer>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={columns} variant="subrows" subrows={{
      moreButtonColumnPosition: 2
    }} selectedRows={selected} onSelectRow={handleSelect} onEndReached={incrementData} onRowClick={handleRowClick} onRetry={() => {}} />
    </CardsContainer>;
}`,...v.parameters?.docs?.source},description:{story:'Возможно отображение дочерних элементов в виде вложенных строк. Для этого необходимо указать `variant="subrows"`\nВ таком варианте отображения вложенные элементы отображаются сразу и только часть из них прячется под кнопку "Показать все"',...v.parameters?.docs?.description}}};try{v.displayName=`Subrows`,v.__docgenInfo={description:'Возможно отображение дочерних элементов в виде вложенных строк. Для этого необходимо указать `variant="subrows"`\nВ таком варианте отображения вложенные элементы отображаются сразу и только часть из них прячется под кнопку "Показать все"',displayName:`Subrows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/subrows/Subrows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var b,x;function S(){return(S=e((()=>{s(),y(),b={title:`Table/DataGridInfinite/Subrows`,component:c,parameters:{layout:`fullscreen`,docs:{description:{component:`\`variant="subrows"\` - позволяет отображать дочерние элементы DataGrid в виде вложенных строк.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},x=[`Subrows`]})))()}S();export{v as Subrows,x as __namedExportsOrder,b as default};