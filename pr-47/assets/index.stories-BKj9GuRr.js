import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ya as t,za as n}from"./preview-Z1rCd2zM.js";import{c as r,s as i}from"./DataGrid-C9nb3Q7a.js";import{l as a,t as o}from"./DataGridActionCell-GUQH1H1O.js";import{t as s}from"./DataGridActionCell-DW5dhqo3.js";import{n as c,t as l}from"./BinOutlineMd-Krajzn5L.js";import{n as u,t as d}from"./EyeOutlineMd-dU6-zf8_.js";import{At as f,Et as p,K as m,Mt as h,Nt as g,at as _,kt as v,lt as y,mt as b,vt as x}from"./common-BHD-Wsz_.js";var S,C;function w(){return(w=e((()=>{v(),m(),S=t(),C=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:g(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g()}]},...h(9)];return(0,S.jsx)(_,{children:(0,S.jsx)(b,{rows:e})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
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
  return <DataGridStoryContainer>
      <MockDataGrid rows={fakeData} />
    </DataGridStoryContainer>;
}`,...C.parameters?.docs?.source}}}})))()}var T,E,D;function O(){return(O=e((()=>{T=n(),m(),E=t(),D=()=>{let[e,t]=(0,T.useState)([]),n=p.slice(0,10);return(0,E.jsx)(_,{children:(0,E.jsx)(b,{rows:n,selectedRows:e,onSelectRow:e=>t(e)})})};try{D.displayName=`TreeWithCheckbox`,D.__docgenInfo={description:`DataGrid с древовидной структурой также работает в варианте с множественным выбором`,displayName:`TreeWithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithCheckbox.story.tsx`,methods:[],props:{},tags:{}}}catch{}D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const data = fakeDataTree.slice(0, 10);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <DataGridStoryContainer>
      <MockDataGrid rows={data} selectedRows={selected} onSelectRow={handleSelect} />
    </DataGridStoryContainer>;
}`,...D.parameters?.docs?.source},description:{story:`DataGrid с древовидной структурой также работает в варианте с множественным выбором`,...D.parameters?.docs?.description}}}})))()}var k,A;function j(){return(j=e((()=>{m(),k=t(),A=()=>(0,k.jsx)(_,{children:(0,k.jsx)(b,{rows:p,tree:{isInitialExpanded:!0,expandedLevel:3}})});try{A.displayName=`TreeWithExpandedLevel`,A.__docgenInfo={description:"Параметр `expandedLevel` настраивает глубину раскрытия дерева",displayName:`TreeWithExpandedLevel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithExpandedLevel.story.tsx`,methods:[],props:{},tags:{}}}catch{}A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <DataGridStoryContainer>
      <MockDataGrid rows={fakeDataTree} tree={{
      isInitialExpanded: true,
      expandedLevel: 3
    }} />
    </DataGridStoryContainer>;
}`,...A.parameters?.docs?.source},description:{story:"Параметр `expandedLevel` настраивает глубину раскрытия дерева",...A.parameters?.docs?.description}}}})))()}var M,N;function P(){return(P=e((()=>{v(),m(),M=t(),N=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:g(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g()}]},...h(2)];return(0,M.jsx)(_,{children:(0,M.jsx)(b,{rows:e,tree:{isInitialExpanded:!0}})})};try{N.displayName=`TreeWithInitialExpanded`,N.__docgenInfo={description:"Параметр `isInitialExpanded` раскрывает вложенную структуру при первичном отображении",displayName:`TreeWithInitialExpanded`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithInitialExpanded.story.tsx`,methods:[],props:{},tags:{}}}catch{}N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
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
  }, ...makeDataListWithTree(2)];
  return <DataGridStoryContainer>
      <MockDataGrid rows={fakeData} tree={{
      isInitialExpanded: true
    }} />
    </DataGridStoryContainer>;
}`,...N.parameters?.docs?.source},description:{story:"Параметр `isInitialExpanded` раскрывает вложенную структуру при первичном отображении",...N.parameters?.docs?.description}}}})))()}var F,I;function L(){return(L=e((()=>{m(),F=t(),I=()=>(0,F.jsx)(_,{children:(0,F.jsx)(b,{rows:p,tree:{isInitialExpanded:!0,initialVisibleChildrenCount:1}})});try{I.displayName=`TreeWithInitialVisibleChildrenCount`,I.__docgenInfo={description:`Параметр \`initialVisibleChildrenCount\` настраивает количество отображаемых элементов при раскрытии корневого элемента.

Элементы, сверх этого значения, будут скрыты под кнопку "Показать все"`,displayName:`TreeWithInitialVisibleChildrenCount`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithInitialVisibleChildrenCount.story.tsx`,methods:[],props:{},tags:{}}}catch{}I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <DataGridStoryContainer>
      <MockDataGrid rows={fakeDataTree} tree={{
      isInitialExpanded: true,
      initialVisibleChildrenCount: 1
    }} />
    </DataGridStoryContainer>;
}`,...I.parameters?.docs?.source},description:{story:`Параметр \`initialVisibleChildrenCount\` настраивает количество отображаемых элементов при раскрытии корневого элемента.

 Элементы, сверх этого значения, будут скрыты под кнопку "Показать все"`,...I.parameters?.docs?.description}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=n(),v(),m(),z=t(),B=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:g(),options:{isNotSelectable:!0},children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g(),options:{isNotSelectable:!0}}]},{id:`1234544545`,documentName:`Пакет документов`,recipient:`ООО "Купи Продай"`,createDate:g(),options:{isNotSelectable:!0},children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g()}]},{id:`1234544545`,documentName:`Пакет документов`,recipient:`ООО "Купи Продай"`,createDate:g(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g()}]}],[t,n]=(0,R.useState)([]),[r,i]=(0,R.useState)([]),[a,o]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{setTimeout(()=>{n(e.slice(0,10)),o(!1)},1500)},[]),(0,z.jsx)(_,{children:(0,z.jsx)(b,{rows:t,isLoading:a,onSelectRow:e=>i(e),selectedRows:r,tree:{isInitialExpanded:!0}})})};try{B.displayName=`TreeWithOptionIsNotSelectable`,B.__docgenInfo={description:"Параметр `isNotSelectable` в `options` делает строку недоступной для выбора",displayName:`TreeWithOptionIsNotSelectable`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithOptionIsNotSelectable.story.tsx`,methods:[],props:{},tags:{}}}catch{}B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
      createDate: makeRandomDate(),
      options: {
        isNotSelectable: true
      }
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
    children: [{
      id: '1234567890',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
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
  return <DataGridStoryContainer>
      <MockDataGrid rows={slicedData} isLoading={isLoading} onSelectRow={handleSelect} selectedRows={selected} tree={{
      isInitialExpanded: true
    }} />
    </DataGridStoryContainer>;
}`,...B.parameters?.docs?.source},description:{story:"Параметр `isNotSelectable` в `options` делает строку недоступной для выбора",...B.parameters?.docs?.description}}}})))()}var H,U,W;function G(){return(G=e((()=>{H=n(),l(),d(),s(),r(),v(),m(),U=t(),W=()=>{let e={main:[{icon:(0,U.jsx)(c,{}),name:`Удалить`,onClick:()=>console.log(`delete`)}]},t=f(x,[{field:`actions`,renderCell:t=>(0,U.jsx)(o,{row:t,mainActions:()=>(0,U.jsx)(a,{actions:e.main})})}]),n=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:g(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:g()}],options:{childrenColumns:[{field:`actions`,renderCell:e=>(0,U.jsx)(o,{row:e,mainActions:()=>(0,U.jsx)(a,{actions:[{icon:(0,U.jsx)(u,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)}]})})}]}}],[r,s]=(0,H.useState)([]),[l,d]=(0,H.useState)([]),[p,m]=(0,H.useState)(!0);return(0,H.useEffect)(()=>{setTimeout(()=>{s(n.slice(0,10)),m(!1)},1500)},[]),(0,U.jsx)(y,{children:(0,U.jsx)(i,{columns:t,keyId:`id`,onRetry:()=>{},rows:r,selectedRows:l,onSelectRow:e=>d(e),isLoading:p,tree:{isInitialExpanded:!0}})})};try{W.displayName=`TreeWithOverrideColumns`,W.__docgenInfo={description:"Параметр `childrenColumns` в `options` позволяет настраивать отображение дочерних элементов,\nнапример указать кастомный список действий для вложенных элементов",displayName:`TreeWithOverrideColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/tree/TreeWithOverrideColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const ACTIONS: DataGridActions<DataType> = {
    main: [{
      icon: <BinOutlineMd />,
      name: 'Удалить',
      onClick: () => console.log('delete')
    }]
  };
  const columns = makeColumns(FAKE_COLUMNS, [{
    field: 'actions',
    renderCell: row => {
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={ACTIONS.main} />} />;
    }
  }]);
  const fakeData: DataGridRowWithOptions<DataType>[] = [{
    id: '123456789',
    documentName: 'Пакет документов',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    children: [{
      id: '1234567890',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
    }],
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
  return <StoryWrapper>
      <DataGrid columns={columns} keyId="id" onRetry={() => {}} rows={slicedData} selectedRows={selected} onSelectRow={handleSelect} isLoading={isLoading} tree={{
      isInitialExpanded: true
    }} />
    </StoryWrapper>;
}`,...W.parameters?.docs?.source},description:{story:"Параметр `childrenColumns` в `options` позволяет настраивать отображение дочерних элементов,\nнапример указать кастомный список действий для вложенных элементов",...W.parameters?.docs?.description}}}})))()}var K,q;function J(){return(J=e((()=>{r(),w(),O(),j(),P(),L(),V(),G(),K={title:`Table/DataGrid/Tree`,component:i,parameters:{layout:`fullscreen`,docs:{description:{component:`DataGrid может работать с вложенными (древовидными) структурами данных

Пропс \`tree\` позволяет настраивать поведение таблицы при работе с древовидной структурой данных.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},q=[`Tree`,`TreeWithInitialExpanded`,`TreeWithExpandedLevel`,`TreeWithInitialVisibleChildrenCount`,`TreeWithCheckbox`,`TreeWithOptionIsNotSelectable`,`TreeWithOverrideColumns`]})))()}J();export{C as Tree,D as TreeWithCheckbox,A as TreeWithExpandedLevel,N as TreeWithInitialExpanded,I as TreeWithInitialVisibleChildrenCount,B as TreeWithOptionIsNotSelectable,W as TreeWithOverrideColumns,q as __namedExportsOrder,K as default};