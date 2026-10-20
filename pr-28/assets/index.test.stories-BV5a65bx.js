import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-C35OHnlK.js";import{n as r,t as i}from"./DataGridInfinite-Ca4-nYCO.js";import{d as a,l as o,m as s,o as c,p as l,t as u}from"./common-BEVelRsM.js";var d,f,p;function m(){return(m=e((()=>{d=t(),r(),l(),u(),f=n(),p=()=>{let[e,t]=(0,d.useState)(!0),[n,r]=(0,d.useState)([]),[l,u]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{setTimeout(()=>{r(a.slice(0,2)),t(!1)},1500)},[]),(0,f.jsx)(c,{children:(0,f.jsx)(i,{keyId:`id`,isLoading:e,rows:n,columns:o,isEndReached:l,onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...s(5)]),u(!0),t(!1)},1500)},onRetry:()=>{}})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 2));
      setLoading(false);
    }, 1500);
  }, []);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...makeDataList(5)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" isLoading={isLoading} rows={slicedData} columns={FAKE_COLUMNS} isEndReached={isEndReached} onEndReached={incrementData} onRetry={() => {}} />
    </StoryWrapper>;
}`,...p.parameters?.docs?.source}}}})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),r(),l(),u(),g=n(),_=()=>{let[e,t]=(0,h.useState)(!0),[n,r]=(0,h.useState)([]),[l,u]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{setTimeout(()=>{r(a.slice(0,2)),t(!1)},1500)},[]),(0,g.jsx)(c,{children:(0,g.jsx)(i,{keyId:`id`,isLoading:e,rows:n,columns:o,isEndReached:l,onEndReached:()=>{t(!0),setTimeout(()=>{r(e=>[...e,...s(15)]),u(!0),t(!1)},1500)},onRetry:()=>{}})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice(0, 2));
      setLoading(false);
    }, 1500);
  }, []);
  const incrementData = () => {
    setLoading(true);
    setTimeout(() => {
      setSlicedData(prevData => [...prevData, ...makeDataList(15)]);
      setIsEndReached(true);
      setLoading(false);
    }, 1500);
  };
  return <StoryWrapper>
      <DataGridInfinite<DataType, SortField> keyId="id" isLoading={isLoading} rows={slicedData} columns={FAKE_COLUMNS} isEndReached={isEndReached} onEndReached={incrementData} onRetry={() => {}} />
    </StoryWrapper>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{r(),m(),v(),y={title:`Table/DataGridInfinite/Tests`,component:i},b=[`WithoutScroll`,`WithScroll`]})))()}x();export{_ as WithScroll,p as WithoutScroll,b as __namedExportsOrder,y as default};