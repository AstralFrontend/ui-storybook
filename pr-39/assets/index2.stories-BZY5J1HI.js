import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,it as r,ji as i,rt as a,w as o,xa as s,yn as c}from"./preview-DREXElCf.js";import{n as l,t as u}from"./DotsVOutlineMd-BcfDONMJ.js";import{n as d,t as f}from"./faker-DHc11VVS.js";import{n as p,t as m}from"./error-_dxK9GiT.js";import{n as h,t as g}from"./no-data-stub-BWDXGYgY.js";import{n as _,t as v}from"./ResizingDataGrid-mrOzu2cl.js";var y,b,x,S;function C(){return(C=e((()=>{f(),y=[`ИП Иванов О.В.`,`ООО "Новая организация"`,`ООО "Волшебные документы"`],b=()=>d.date.between({from:new Date(2024,10,10),to:new Date(2025,10,10)}).toISOString(),x=(e=10)=>Array.from({length:e}).map((e,t)=>({id:d.string.uuid(),documentName:`Договор №${t+1}`,recipient:d.helpers.arrayElement(y),sender:d.helpers.arrayElement(y),createDate:b()})),S=(e=10,t)=>{let{isNotSelectable:n,childrenCount:r=3,childrenColumns:i}=t||{};return Array.from({length:e}).map((e,t)=>{let a=d.helpers.arrayElement(y),o=b(),s=Math.random()>.5;return{id:d.string.uuid(),documentName:s?`Пакет документов`:`Договор №${t+1}`,recipient:a,createDate:o,options:{isNotSelectable:n,childrenColumns:i},children:s?Array.from({length:r}).map((e,n)=>({id:d.string.uuid(),documentName:`Договор №${t+Number(`1${n}0`)}`,recipient:a,createDate:o})):void 0}})}})))()}var w;function T(){return(T=e((()=>{C(),w=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:b()},...x(100)]})))()}var E;function D(){return(D=e((()=>{c(),E=i.div`
  width: 100%;
  height: 500px;
`})))()}var O,k;function A(){return(A=e((()=>{p(),g(),o(),D(),O=s(),k=({children:e})=>(0,O.jsx)(t,{imagesMap:{defaultErrorImgSrc:m,noDataImgSrc:h,outdatedReleaseErrorImgSrc:``},children:(0,O.jsx)(E,{children:e})});try{k.displayName=`StoryWrapper`,k.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function j(){return(j=e((()=>{T(),A(),D()})))()}var M,N;function P(){return(P=e((()=>{_(),j(),M=s(),N=()=>(0,M.jsx)(k,{children:(0,M.jsx)(v,{keyId:`id`,rows:w,columns:[{field:`documentName`,width:`50%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`30%`}],onRetry:()=>{}})}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const columns: ResizingColumns<DataType> = [{
    field: 'documentName',
    width: '50%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '30%'
  }];
  return <StoryWrapper>
      <ResizingDataGrid<DataType, SortField> keyId="id" rows={fakeData} columns={columns} onRetry={() => {}} />
    </StoryWrapper>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{u(),a(),_(),j(),F=s(),I=()=>(0,F.jsx)(k,{children:(0,F.jsx)(v,{keyId:`id`,rows:w,columns:[{field:`documentName`,width:`30%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`25%`},{field:`recipient`,label:`Отправитель`,width:`25%`},{field:`$actions`,width:`50px`,renderCell:()=>(0,F.jsx)(r,{variant:`light`,color:`grey`,children:(0,F.jsx)(l,{})})}],onRetry:()=>{}})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const columns: ResizingColumns<DataType> = [{
    field: 'documentName',
    width: '30%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '25%'
  }, {
    field: 'recipient',
    label: 'Отправитель',
    width: '25%'
  }, {
    field: '$actions',
    width: '50px',
    renderCell: () => <IconButton variant="light" color="grey">
          <DotsVOutlineMd />
        </IconButton>
  }];
  return <StoryWrapper>
      <ResizingDataGrid<DataType, SortField> keyId="id" rows={fakeData} columns={columns} onRetry={() => {}} />
    </StoryWrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=n(),u(),a(),_(),j(),C(),z=s(),B=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:b(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:b()}]},...S(9)],t=[{field:`documentName`,width:`40%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`40%`},{field:`$actions`,width:`50px`,renderCell:()=>(0,z.jsx)(r,{variant:`light`,color:`grey`,children:(0,z.jsx)(l,{})})}],[n,i]=(0,R.useState)([]);return(0,z.jsx)(k,{children:(0,z.jsx)(v,{keyId:`id`,rows:e,columns:t,selectedRows:n,onSelectRow:e=>i(e),onRetry:()=>{}})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const data = [{
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
  const columns: ResizingColumns<DataType> = [{
    field: 'documentName',
    width: '40%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '40%'
  }, {
    field: '$actions',
    width: '50px',
    renderCell: () => <IconButton variant="light" color="grey">
          <DotsVOutlineMd />
        </IconButton>
  }];
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <StoryWrapper>
      <ResizingDataGrid<DataType, SortField> keyId="id" rows={data} columns={columns} selectedRows={selected} onSelectRow={handleSelect} onRetry={() => {}} />
    </StoryWrapper>;
}`,...B.parameters?.docs?.source}}}})))()}var H,U;function W(){return(W=e((()=>{_(),P(),L(),V(),H={title:`Table/Unstable/ResizingDataGrid`,component:v,parameters:{docs:{description:{component:`⚠️**Unstable component**

Таблица с возможностью регулировать ширину колонок через drag-and-drop, построенная на css grid.

Новые значения ширин колонок сохраняются в localStorage, и будут применены при последующих рендерах.
Хэш ключ для сохранения в localStorage формируется на основании набора значений field и width всех колонок таблицы.

ResizingDataGrid обладает тем же функционалом, что и [DataGrid](/story/table-dataGrid--docs)

 ### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},U=[`BasicUsage`,`WithActions`,`WithTree`]})))()}W();export{N as BasicUsage,I as WithActions,B as WithTree,U as __namedExportsOrder,H as default};