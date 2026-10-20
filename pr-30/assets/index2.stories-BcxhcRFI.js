import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ji as t,ya as n,yn as r,za as i}from"./preview-HnvdWNoM.js";import{t as a,u as o}from"./DataGrid-BvAw2NyM.js";import{n as s,t as c}from"./DataGridMinimalisticPagination-D-CMXZBW.js";import{K as l,at as u,st as d}from"./common-7zkdXk_f.js";var f;function p(){return(p=e((()=>{f=[{id:`1`,documentName:`Договор №1`,recipient:`ООО "Волшебные документы"`,createDate:`2026-03-20T07:02:24.002Z`},{id:`2`,documentName:`Договор №2`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-19T23:29:01.527Z`},{id:`3`,documentName:`Договор №3`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-20T06:44:30.017Z`},{id:`4`,documentName:`Договор №4`,recipient:`ООО "Новая организация"`,createDate:`2026-03-20T07:38:32.972Z`},{id:`5`,documentName:`Договор №5`,recipient:`ООО "Волшебные документы"`,createDate:`2026-03-20T00:13:38.705Z`},{id:`6`,documentName:`Договор №6`,recipient:`ООО "Новая организация"`,createDate:`2026-03-20T08:39:47.173Z`},{id:`7`,documentName:`Договор №7`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-20T01:25:49.020Z`},{id:`8`,documentName:`Договор №8`,recipient:`ООО "Новая организация"`,createDate:`2026-03-19T12:31:11.004Z`},{id:`9`,documentName:`Договор №9`,recipient:`ООО "Новая организация"`,createDate:`2026-03-20T04:05:48.330Z`},{id:`10`,documentName:`Договор №10`,recipient:`ООО "Волшебные документы"`,createDate:`2026-03-19T11:41:39.187Z`},{id:`11`,documentName:`Договор №11`,recipient:`ООО "Волшебные документы"`,createDate:`2026-03-20T06:33:47.926Z`},{id:`12`,documentName:`Договор №12`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-19T19:11:41.892Z`},{id:`13`,documentName:`Договор №13`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-19T22:15:13.389Z`},{id:`14`,documentName:`Договор №14`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-19T13:33:08.691Z`},{id:`15`,documentName:`Договор №15`,recipient:`ООО "Волшебные документы"`,createDate:`2026-03-20T04:46:05.646Z`},{id:`16`,documentName:`Договор №16`,recipient:`ИП Иванов О.В.`,createDate:`2026-03-20T06:28:23.379Z`}]})))()}var m,h;function g(){return(g=e((()=>{a(),m=n(),h=({footer:e,rows:t,isLoading:n})=>(0,m.jsx)(o,{rows:t,columns:[{field:`documentName`,label:`Наименование документа`},{field:`recipient`,label:`Получатель`},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}],keyId:`id`,onRetry:()=>{},footer:e,isLoading:n});try{h.displayName=`MockDataGrid`,h.__docgenInfo={description:``,displayName:`MockDataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridMinimalisticPagination/stories/common/MockDataGrid.tsx`,methods:[],props:{footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Компонент кастомного футера (например Pagination)`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<DataType>[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function _(){return(_=e((()=>{r(),t.div`
  width: 800px;
  height: 550px;
`})))()}function v(){return(v=e((()=>{p(),g(),_()})))()}var y,b,x;function S(){return(S=e((()=>{y=i(),l(),s(),v(),b=n(),x=()=>{let[e,t]=(0,y.useState)(1),[n,r]=(0,y.useState)(!1),[i,a]=(0,y.useState)(!0),[o,s]=(0,y.useState)([]),[l,u]=(0,y.useState)(10);return(0,y.useEffect)(()=>{a(!0),setTimeout(()=>{s(f.slice((e-1)*l,e*l)),r(l===10&&e>=3||l===20&&e>=2),a(!1)},1500)},[l]),(0,b.jsx)(d,{children:(0,b.jsx)(h,{rows:o,isLoading:i,footer:(0,b.jsx)(c,{onChange:e=>{a(!0),t(e),setTimeout(()=>{a(!1),s(f.slice((e-1)*l,e*l))},1500),r(l===10&&e===3||l===20&&e===2)},page:e,isEndReached:n,rowsPerPage:10,onSetCountPerPage:u,rowsPerPageOptions:[10,20]})})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * rowsPerPage, page * rowsPerPage));
      setIsEndReached(rowsPerPage === 10 && page >= 3 || rowsPerPage === 20 && page >= 2);
      setLoading(false);
    }, 1500);
  }, [rowsPerPage]);
  const handleChangePage = (newPage: number): void => {
    setLoading(true);
    setPage(newPage);
    setTimeout(() => {
      setLoading(false);
      setSlicedData(fakeData.slice((newPage - 1) * rowsPerPage, newPage * rowsPerPage));
    }, 1500);
    setIsEndReached(rowsPerPage === 10 && newPage === 3 || rowsPerPage === 20 && newPage === 2);
  };
  return <StoryWrapper>
      <MockDataGrid rows={slicedData} isLoading={isLoading} footer={<DataGridMinimalisticPagination onChange={handleChangePage} page={page} isEndReached={isEndReached} rowsPerPage={10} onSetCountPerPage={setRowsPerPage} rowsPerPageOptions={[10, 20]} />} />
    </StoryWrapper>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{l(),s(),v(),C=n(),w=()=>{let e=f.slice(0,10);return(0,C.jsx)(d,{children:(0,C.jsx)(h,{rows:e,footer:(0,C.jsx)(c,{onChange:()=>{},page:1,isEndReached:!0,isForcePagination:!0})})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const slicedData = fakeData.slice(0, 10);
  return <StoryWrapper>
      <MockDataGrid rows={slicedData} footer={<DataGridMinimalisticPagination onChange={() => {}} page={1} isEndReached isForcePagination />} />
    </StoryWrapper>;
}`,...w.parameters?.docs?.source},description:{story:`Параметр isForcePagination отображает пагинацию если всего одна страница`,...w.parameters?.docs?.description}}};try{w.displayName=`IsForcePagination`,w.__docgenInfo={description:`Параметр isForcePagination отображает пагинацию если всего одна страница`,displayName:`IsForcePagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridMinimalisticPagination/stories/IsForcePagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D;function O(){return(O=e((()=>{l(),s(),S(),T(),E={title:`Table/DataGridMinimalisticPagination`,decorators:u,component:c,parameters:{layout:`fullscreen`,docs:{description:{component:`**DataGridMinimalisticPagination** - используется для постраничного отображения данных в [DataGrid](/story/table-dataGrid--docs).

Отображает номер текущей страницы и кнопки "Вперед"/"Назад". Дополнительно может содержать выбор количества отображаемых строк.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=461-329942)`}}}},D=[`BasicUsage`,`IsForcePagination`]})))()}O();export{x as BasicUsage,w as IsForcePagination,D as __namedExportsOrder,E as default};