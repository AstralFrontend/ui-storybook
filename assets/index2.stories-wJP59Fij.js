import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ji as n,xa as r,yn as i}from"./preview-lt0cavAw.js";import{n as a,t as o}from"./useViewportType-DOBrjigL.js";import{s,t as c}from"./DataGrid-u7XO3mhY.js";import{n as l,t as u}from"./DataGridPagination-CN0u3EjK.js";import{n as d,t as f}from"./faker-DHc11VVS.js";import{K as p,st as m}from"./common-D51z2-5l.js";var h;function g(){return(g=e((()=>{i(),h=n.footer`
  width: 800px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`})))()}var _,v,y;function b(){return(b=e((()=>{f(),_=[`ИП Иванов О.В.`,`ООО "Новая организация"`,`ООО "Волшебные документы"`],v=()=>d.date.recent().toISOString(),y=(e,t,n)=>{let r=t??16;return Array.from({length:r}).fill(e).map((e,t)=>({id:String(t+1),documentName:`Договор №${t+1}`,recipient:_[Math.floor(Math.random()*_.length)],createDate:v(),options:Math.random()<.5?n:{}}))}})))()}var x,S,C;function w(){return(w=e((()=>{b(),x={id:`1`,documentName:`Договор №1`,recipient:`ИП Иванов О.В.`,createDate:`2022-03-24T17:50:40.206Z`},S=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:v()},{id:`1111111`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:v()},{id:`1111`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:v()},{id:`1111111`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:v()},{id:`111111111`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:v()},...y(x,50)],C=[{field:`documentName`,label:`Наименование документа`},{field:`recipient`,label:`Получатель`},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}]})))()}function T(){return(T=e((()=>{g(),w(),b()})))()}var E,D,O;function k(){return(k=e((()=>{E=t(),c(),p(),o(),l(),T(),D=r(),O=()=>{let{isMobile:e}=a(),[t,n]=(0,E.useState)(!0),[r,i]=(0,E.useState)([]),[o,c]=(0,E.useState)(1),l=e?5:10;return(0,E.useEffect)(()=>{setTimeout(()=>{i(S.slice((o-1)*l,o*l)),n(!1)},1500)},[]),(0,E.useEffect)(()=>{n(!0),setTimeout(()=>{i(S.slice((o-1)*l,o*l)),n(!1)},1500)},[]),(0,D.jsx)(m,{children:(0,D.jsx)(s,{keyId:`id`,rows:r,columns:C,isLoading:t,footer:(0,D.jsx)(u,{rowsPerPage:l,page:o,disabled:t,totalCount:S.length,onChange:(e,t)=>{n(!0),c(t),setTimeout(()=>{n(!1),i(S.slice((t-1)*l,t*l))},1500)}}),onRetry:()=>{}})})},O.parameters={layout:`fullscreen`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const {
    isMobile
  } = useViewportType();
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const countPerPage = isMobile ? 5 : 10;
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * countPerPage, page * countPerPage));
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * countPerPage, page * countPerPage));
      setLoading(false);
    }, 1500);
  }, []);
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number): void => {
    setLoading(true);
    setPage(newPage);
    setTimeout(() => {
      setLoading(false);
      setSlicedData(fakeData.slice((newPage - 1) * countPerPage, newPage * countPerPage));
    }, 1500);
  };
  return <StoryWrapper>
      <DataGrid<DataType> keyId="id" rows={slicedData} columns={columns} isLoading={isLoading} footer={<DataGridPagination rowsPerPage={countPerPage} page={page} disabled={isLoading} totalCount={fakeData.length} onChange={handleChangePage} />} onRetry={() => {}} />
    </StoryWrapper>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=t(),l(),T(),j=r(),M=()=>{let[e,t]=(0,A.useState)(1),[n,r]=(0,A.useState)();return(0,j.jsx)(h,{children:(0,j.jsx)(u,{totalCount:100,page:e,rowsPerPage:n,onSetCountPerPage:e=>r(e),onChange:(e,n)=>t(n),disabled:!0})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const [countPerPage, setCountPerPage] = useState<number>();
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => setPage(newPage);
  const handleSetCountPerPage = (rowsPerPage: number) => setCountPerPage(rowsPerPage);
  return <StoryWrapper>
      <DataGridPagination totalCount={100} page={page} rowsPerPage={countPerPage} onSetCountPerPage={handleSetCountPerPage} onChange={handleChangePage} disabled />
    </StoryWrapper>;
}`,...M.parameters?.docs?.source}}}})))()}var P,F,I;function L(){return(L=e((()=>{P=t(),l(),T(),F=r(),I=()=>{let[e,t]=(0,P.useState)(1);return(0,F.jsx)(h,{children:(0,F.jsx)(u,{totalCount:8,page:e,isForceCounter:!0,onChange:(e,n)=>t(n)})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => setPage(newPage);
  return <StoryWrapper>
      <DataGridPagination totalCount={8} page={page} isForceCounter onChange={handleChangePage} />
    </StoryWrapper>;
}`,...I.parameters?.docs?.source},description:{story:"`isForceCounter` позволяет отобразить информацию о кол-ве элементом на странице, даже если всего 1 страница",...I.parameters?.docs?.description}}};try{I.displayName=`IsForceCounter`,I.__docgenInfo={description:"`isForceCounter` позволяет отобразить информацию о кол-ве элементом на странице, даже если всего 1 страница",displayName:`IsForceCounter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridPagination/stories/IsForceCounter.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z,B;function V(){return(V=e((()=>{R=t(),l(),T(),z=r(),B=()=>{let[e,t]=(0,R.useState)(1),[n,r]=(0,R.useState)();return(0,z.jsx)(h,{children:(0,z.jsx)(u,{totalCount:100,page:e,rowsPerPage:n,onSetCountPerPage:e=>r(e),onChange:(e,n)=>t(n)})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const [countPerPage, setCountPerPage] = useState<number>();
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number) => setPage(newPage);
  const handleSetCountPerPage = (rowsPerPage: number) => setCountPerPage(rowsPerPage);
  return <StoryWrapper>
      <DataGridPagination totalCount={100} page={page} rowsPerPage={countPerPage} onSetCountPerPage={handleSetCountPerPage} onChange={handleChangePage} />
    </StoryWrapper>;
}`,...B.parameters?.docs?.source},description:{story:`onSetCountPerPage позволяет пользователю настраивать кол-во записей на странице`,...B.parameters?.docs?.description}}};try{B.displayName=`OnSetCountPerPage`,B.__docgenInfo={description:`onSetCountPerPage позволяет пользователю настраивать кол-во записей на странице`,displayName:`OnSetCountPerPage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridPagination/stories/OnSetCountPerPage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U;function W(){return(W=e((()=>{l(),k(),N(),L(),V(),H={title:`Table/DataGridPagination`,component:u,parameters:{docs:{description:{component:`**DataGridPagination** - используется для постраничного отображения данных в [DataGrid](/story/table-dataGrid--docs).

Слева отображается счетчик данных на странице из общего количества данных, справа - кнопки переключения между страницами.
Дополнительно может содержать выбор количества отображаемых строк.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=461-329942)`}}}},U=[`BasicUsage`,`OnSetCountPerPage`,`IsForceCounter`,`Disabled`]})))()}W();export{O as BasicUsage,M as Disabled,I as IsForceCounter,B as OnSetCountPerPage,U as __namedExportsOrder,H as default};