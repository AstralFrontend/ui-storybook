import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,ya as o,yn as s,za as c}from"./preview-CdUppftE.js";import{t as l}from"./TextField-DhHiZefK.js";import{t as u}from"./TextField-D42MT8DG.js";import{t as d}from"./Select-Btl5GqlF.js";import{t as f}from"./Select-J28uuQC2.js";import{n as p,t as m}from"./InfiniteDataList-CgLRI5co.js";import{n as h,t as g}from"./SearchOutlineMd-Bnq-6rMi.js";import{n as _,t as v}from"./faker-DHc11VVS.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{v(),y=c(),g(),t(),f(),s(),u(),n(),p(),b=o(),x={title:`Lists/InfiniteDataList`,component:m,parameters:{docs:{description:{component:`### InfiniteDataList предназначен для отображения списка различного вида карточек с поддержкой infinity scroll и виртуализацией списка
Компонент также обрабатывает несколько состояний: загрузка, отсутствие данных и ошибка

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=865-100904)`}}}},S=(e=16)=>Array.from({length:e}).map((e,t)=>({id:_.string.uuid(),title:`Договор на оказание услуг №${t+1}`,organization:_.company.name()})),C=i.div`
  width: 100%;
  height: 240px;
`,w=i(a)`
  max-width: 500px;
`,T=()=>(0,b.jsxs)(a,{container:!0,spacing:4,children:[(0,b.jsx)(r,{variant:`h3`,children:`Договоры оказания услуг`}),(0,b.jsxs)(w,{container:!0,direction:`column`,spacing:2,children:[(0,b.jsx)(l,{placeholder:`Поиск на странице...`,size:`small`,InputProps:{startAdornment:(0,b.jsx)(h,{})}}),(0,b.jsx)(d,{value:``,placeholder:`Выберите вариант`,size:`small`})]})]}),E=()=>{let[e,t]=(0,y.useState)(!0),[n,i]=(0,y.useState)([]),[a,o]=(0,y.useState)(!1),s=S();(0,y.useEffect)(()=>{setTimeout(()=>{i(s.slice(0,10)),t(!1)},1500)},[]),(0,y.useEffect)(()=>{n.length>=40&&o(!0)},[n]);let c=()=>{t(!0),setTimeout(()=>{i(e=>[...e,...S(10)]),t(!1)},1500)};return(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:n,onEndReached:c,isEndReached:a,isLoading:e,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:c})})},D=()=>(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:[],itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:()=>void 0})}),O=()=>{let e=S();return(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:e,isLoading:!0,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:()=>void 0})})},k=()=>{let e=S();return(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:e,isError:!0,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:()=>alert(`Повторить запрос`)})})},A=()=>(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:[],isLoading:!0,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:()=>void 0})}),j=()=>(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:[],isError:!0,errorMsg:`Ошибка 500`,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:()=>alert(`Повторить запрос`)})}),M=()=>{let[e,t]=(0,y.useState)(!0),[n,i]=(0,y.useState)([]),[a,o]=(0,y.useState)(!1),s=S();(0,y.useEffect)(()=>{setTimeout(()=>{i(s.slice(0,10)),t(!1)},1500)},[]),(0,y.useEffect)(()=>{n.length>=40&&o(!0)},[n]);let c=()=>{t(!0),setTimeout(()=>{i(e=>[...e,...S(10)]),t(!1)},1500)};return(0,b.jsx)(C,{children:(0,b.jsx)(m,{keyId:`id`,data:n,onEndReached:c,isEndReached:a,isLoading:e,itemContent:({title:e,organization:t},{className:n})=>(0,b.jsxs)(`div`,{className:n,children:[(0,b.jsx)(r,{children:e}),(0,b.jsx)(r,{color:`secondary`,children:t})]}),onRetry:c,header:(0,b.jsx)(T,{})})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<MockData[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  const TOTAL_COUNT = 40;
  const data = generateData();
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    if (slicedData.length >= TOTAL_COUNT) {
      setIsEndReached(true);
    }
  }, [slicedData]);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...generateData(10)]);
      setLoading(false);
    }, 1500);
  };
  return <Container>
      <InfiniteDataList keyId="id" data={slicedData} onEndReached={incrementData} isEndReached={isEndReached} isLoading={loading} itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={incrementData} />
    </Container>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Container>
      <InfiniteDataList<MockData> keyId="id" data={[]} itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={() => undefined} />
    </Container>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const data = generateData();
  return <Container>
      <InfiniteDataList keyId="id" data={data} isLoading itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={() => undefined} />
    </Container>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const data = generateData();
  const handleRetry = () => alert('Повторить запрос');
  return <Container>
      <InfiniteDataList keyId="id" data={data} isError itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={handleRetry} />
    </Container>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <Container>
      <InfiniteDataList<MockData> keyId="id" data={[]} isLoading itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={() => undefined} />
    </Container>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const handleRetry = () => alert('Повторить запрос');
  return <Container>
      <InfiniteDataList<MockData> keyId="id" data={[]} isError errorMsg="Ошибка 500" itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={handleRetry} />
    </Container>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<MockData[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  const TOTAL_COUNT = 40;
  const data = generateData();
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(data.slice(0, 10));
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    if (slicedData.length >= TOTAL_COUNT) {
      setIsEndReached(true);
    }
  }, [slicedData]);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...generateData(10)]);
      setLoading(false);
    }, 1500);
  };
  return <Container>
      <InfiniteDataList keyId="id" data={slicedData} onEndReached={incrementData} isEndReached={isEndReached} isLoading={loading} itemContent={({
      title,
      organization
    }, {
      className
    }) => <div className={className}>
            <Typography>{title}</Typography>
            <Typography color="secondary">{organization}</Typography>
          </div>} onRetry={incrementData} header={<CustomHeader />} />
    </Container>;
}`,...M.parameters?.docs?.source}}},N=[`BasicUsage`,`NoData`,`LoadingWithData`,`ErrorWithData`,`Loading`,`WithError`,`Header`]})))()}P();export{E as BasicUsage,k as ErrorWithData,M as Header,A as Loading,O as LoadingWithData,D as NoData,j as WithError,N as __namedExportsOrder,x as default};