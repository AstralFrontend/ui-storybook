import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-CTqDz5zI.js";import{l as r,t as i}from"./DataGridActionCell-Dq97JLLc.js";import{t as a}from"./DataGridActionCell-UtsUerSS.js";import{n as o,t as s}from"./EyeOutlineMd-B0Hgtuj3.js";import{n as c,t as l}from"./DataGridInfinite-B-ZP_t_9.js";import{g as u,h as d,l as f,m as p,o as m,p as h,t as g}from"./common-BtdWPHwB.js";var _,v,y;function b(){return(b=e((()=>{_=t(),c(),h(),g(),v=n(),y=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:u(),options:{isNotSelectable:!0},children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:u()}]},{id:`1234544545`,documentName:`Пакет документов`,recipient:`ООО "Купи Продай"`,createDate:u(),options:{isNotSelectable:!0},children:[{id:`1234567891`,documentName:`Договор 1234567891`,recipient:`ПАО "Первый завод"`,createDate:u()}]},...p(8)],[t,n]=(0,_.useState)([]),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!0);return(0,_.useEffect)(()=>{setTimeout(()=>{n(e.slice(0,10)),o(!1)},1500)},[]),(0,v.jsx)(m,{children:(0,v.jsx)(l,{keyId:`id`,rows:t,columns:f,isLoading:a,selectedRows:r,onSelectRow:e=>i(e),onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '123456789',
    documentName: 'Пакет документов',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    options: {
      isNotSelectable: true
    },
    children: [{
      id: '1234567890',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
    }]
  }, {
    id: '1234544545',
    documentName: 'Пакет документов',
    recipient: 'ООО "Купи Продай"',
    createDate: makeRandomDate(),
    options: {
      isNotSelectable: true
    },
    children: [{
      id: '1234567891',
      documentName: 'Договор 1234567891',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
    }]
  }, ...makeDataList(8)];
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [selected, setSelected] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} columns={FAKE_COLUMNS} isLoading={isLoading} selectedRows={selected} onSelectRow={handleSelect} onRowClick={handleRowClick} onRetry={() => {}} />
    </StoryWrapper>;
}`,...y.parameters?.docs?.source},description:{story:"Указав значение `isNotSelectable` в `options` можно сделать строку не доступной для выбора",...y.parameters?.docs?.description}}};try{y.displayName=`TreeWithOptionIsNotSelectable`,y.__docgenInfo={description:"Указав значение `isNotSelectable` в `options` можно сделать строку не доступной для выбора",displayName:`TreeWithOptionIsNotSelectable`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/tree/TreeWithOptionsIsNotSelectable.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var x,S,C;function w(){return(w=e((()=>{x=t(),s(),a(),c(),h(),g(),S=n(),C=()=>{let e=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:u(),options:{childrenColumns:[{field:`actions`,renderCell:e=>(0,S.jsx)(i,{row:e,mainActions:()=>(0,S.jsx)(r,{actions:[{icon:(0,S.jsx)(o,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)}]})})}]}},...d(9,{childrenColumns:[{field:`actions`,renderCell:e=>(0,S.jsx)(i,{row:e,mainActions:()=>(0,S.jsx)(r,{actions:[{icon:(0,S.jsx)(o,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)}]})})}]})],[t,n]=(0,x.useState)(!0),[a,s]=(0,x.useState)([]),[c,h]=(0,x.useState)([]),[g,_]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{setTimeout(()=>{s(e.slice(0,10)),n(!1)},1500)},[]),(0,S.jsx)(m,{children:(0,S.jsx)(l,{keyId:`id`,rows:a,isLoading:t,isEndReached:g,columns:f,selectedRows:c,onSelectRow:e=>h(e),onEndReached:()=>{n(!0),setTimeout(()=>{s(e=>[...e,...p(10)]),_(!0),n(!1)},1500)},onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '123456789',
    documentName: 'Договор №12345678',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    options: {
      childrenColumns: [{
        field: 'actions',
        renderCell: row => {
          return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
            icon: <EyeOutlineMd />,
            name: 'Просмотреть',
            onClick: () => console.log('main')
          }]} />} />;
        }
      }]
    }
  }, ...makeDataListWithTree(9, {
    childrenColumns: [{
      field: 'actions',
      renderCell: row => {
        return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={[{
          icon: <EyeOutlineMd />,
          name: 'Просмотреть',
          onClick: () => console.log('main')
        }]} />} />;
      }
    }]
  })];
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
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={FAKE_COLUMNS} selectedRows={selected} onSelectRow={handleSelect} onEndReached={incrementData} onRowClick={handleRowClick} onRetry={() => {}} />
    </StoryWrapper>;
}`,...C.parameters?.docs?.source},description:{story:"`options` и `childrenColumns` на уровне строки, позволяет настраивать отображение дочерних элементов,\n например указать кастомный список действий для вложенных элементов",...C.parameters?.docs?.description}}};try{C.displayName=`TreeWithOverrideColumns`,C.__docgenInfo={description:"`options` и `childrenColumns` на уровне строки, позволяет настраивать отображение дочерних элементов,\n например указать кастомный список действий для вложенных элементов",displayName:`TreeWithOverrideColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/stories/tree/TreeWithOverrideColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=e((()=>{T=t(),c(),h(),g(),E=n(),D=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:u(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:u()}]},...d(9)],[t,n]=(0,T.useState)(!0),[r,i]=(0,T.useState)([]),[a,o]=(0,T.useState)([]),[s,c]=(0,T.useState)(!1);return(0,T.useEffect)(()=>{setTimeout(()=>{i(e.slice(0,10)),n(!1)},1500)},[]),(0,E.jsx)(m,{children:(0,E.jsx)(l,{keyId:`id`,rows:r,isLoading:t,isEndReached:s,columns:f,selectedRows:a,onSelectRow:e=>o(e),onEndReached:()=>{n(!0),setTimeout(()=>{i(e=>[...e,...p(10)]),c(!0),n(!1)},1500)},onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const fakeData = [{
    id: '123456789',
    documentName: 'Пакет документов',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    children: [{
      id: '1234567890',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
    }]
  }, ...makeDataListWithTree(9)];
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
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" rows={slicedData} isLoading={isLoading} isEndReached={isEndReached} columns={FAKE_COLUMNS} selectedRows={selected} onSelectRow={handleSelect} onEndReached={incrementData} onRowClick={handleRowClick} onRetry={() => {}} />
    </StoryWrapper>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{c(),b(),w(),O(),k={title:`Table/DataGridInfinite/Tree`,component:l,parameters:{docs:{description:{component:`DataGrid может работать с вложенными (древовидными) структурами данных

Пропс \`tree\` позволяет настраивать поведение таблицы при работе с древовидной структурой данных.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},A=[`WithTree`,`TreeWithOptionIsNotSelectable`,`TreeWithOverrideColumns`]})))()}j();export{y as TreeWithOptionIsNotSelectable,C as TreeWithOverrideColumns,D as WithTree,A as __namedExportsOrder,k as default};