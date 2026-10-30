import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,dt as n,ft as r,lt as i,ya as a,za as o}from"./preview-Z1rCd2zM.js";import{n as s,t as c}from"./Pagination-B5YflTUv.js";var l,u,d;function f(){return(f=e((()=>{l=o(),t(),n(),s(),u=a(),d=()=>{let[e,t]=(0,l.useState)(1);return(0,u.jsxs)(i,{container:!0,direction:`row`,spacing:3,children:[(0,u.jsxs)(r,{children:[`Страница: `,e]}),(0,u.jsx)(c,{count:10,page:e,onChange:(e,n)=>{t(n)}})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return <Grid container direction="row" spacing={3}>
      <Typography>Страница: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Grid>;
}`,...d.parameters?.docs?.source}}}})))()}var p,m;function h(){return(h=e((()=>{s(),p=a(),m=()=>(0,p.jsx)(c,{count:10,disabled:!0}),m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <Pagination count={10} disabled />`,...m.parameters?.docs?.source}}}})))()}var g,_;function v(){return(v=e((()=>{t(),n(),s(),g=a(),_=()=>(0,g.jsxs)(i,{container:!0,direction:`row`,spacing:3,children:[(0,g.jsx)(r,{children:`siblingCount: 0`}),(0,g.jsx)(c,{count:10,page:6,siblingCount:0}),(0,g.jsx)(r,{children:`siblingCount: 1 (по умолчанию)`}),(0,g.jsx)(c,{count:10,page:6})]});try{_.displayName=`WithSiblingCount`,_.__docgenInfo={description:"`siblingCount` задаёт количество страниц, отображаемых рядом с текущей с каждой стороны",displayName:`WithSiblingCount`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Pagination/stories/WithSiblingCount.story.tsx`,methods:[],props:{},tags:{}}}catch{}_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Grid container direction="row" spacing={3}>
    <Typography>siblingCount: 0</Typography>
    <Pagination count={10} page={6} siblingCount={0} />
    <Typography>siblingCount: 1 (по умолчанию)</Typography>
    <Pagination count={10} page={6} />
  </Grid>`,..._.parameters?.docs?.source},description:{story:"`siblingCount` задаёт количество страниц, отображаемых рядом с текущей с каждой стороны",..._.parameters?.docs?.description}}}})))()}var y,b;function x(){return(x=e((()=>{s(),f(),h(),v(),y={title:`Navigation/Pagination`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=461-329942)`}}}},b=[`BasicUsage`,`WithSiblingCount`,`Disabled`]})))()}x();export{d as BasicUsage,m as Disabled,_ as WithSiblingCount,b as __namedExportsOrder,y as default};