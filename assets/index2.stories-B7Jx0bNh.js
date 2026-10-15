import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-De2xeSj1.js";import{n as r,t as i}from"./MinimalisticPagination-CgkWwU5J.js";var a,o,s;function c(){return(c=e((()=>{a=t(),r(),o=n(),s=()=>{let[e,t]=(0,a.useState)(1),[n,r]=(0,a.useState)(!1);return(0,o.jsx)(i,{page:e,onChange:n=>{t(n),r(e===5)},isEndReached:n})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    setIsEndReached(page === 5);
  };
  return <MinimalisticPagination page={page} onChange={handleChangePage} isEndReached={isEndReached} />;
}`,...s.parameters?.docs?.source}}}})))()}var l,u,d;function f(){return(f=e((()=>{l=t(),r(),u=n(),d=()=>{let[e,t]=(0,l.useState)(1),[n,r]=(0,l.useState)(!1);return(0,u.jsx)(i,{page:e,onChange:n=>{t(n),r(e===5)},isEndReached:n,isDisabled:!0})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    setIsEndReached(page === 5);
  };
  return <MinimalisticPagination page={page} onChange={handleChangePage} isEndReached={isEndReached} isDisabled />;
}`,...d.parameters?.docs?.source}}}})))()}var p,m;function h(){return(h=e((()=>{r(),c(),f(),p={title:`Navigation/MinimalisticPagination`,component:i,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=461-329942)`}}}},m=[`BasicUsage`,`Disabled`]})))()}h();export{s as BasicUsage,d as Disabled,m as __namedExportsOrder,p as default};