import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ji as i,ln as a,lt as o,xa as s,yn as c}from"./preview-De2xeSj1.js";import{t as l}from"./ListItemText-UZrb0vhK.js";import{t as u}from"./MenuItem-D992jMJ2.js";import{t as d}from"./MenuList-Dycl6PxQ.js";import{t as f}from"./MenuList-DYpDYn9o.js";import{t as p}from"./MenuItem-DEFYfwK-.js";import{t as m}from"./ListItemText-Ba8EuxGx.js";import{n as h,t as g}from"./Counter-l0XdZm1p.js";var _,v,y;function b(){return(b=e((()=>{m(),p(),f(),c(),h(),_=s(),v=i(d)`
  width: 200px;
`,y=()=>(0,_.jsxs)(v,{children:[(0,_.jsxs)(u,{disableGutters:!0,children:[(0,_.jsx)(l,{children:`Получено`}),(0,_.jsx)(g,{color:`success`,content:18,variant:`light`})]}),(0,_.jsxs)(u,{disableGutters:!0,children:[(0,_.jsx)(l,{children:`Отправлено`}),(0,_.jsx)(g,{color:`grey`,content:3,variant:`light`})]}),(0,_.jsxs)(u,{disableGutters:!0,children:[(0,_.jsx)(l,{children:`Архив`}),(0,_.jsx)(g,{color:`grey`,content:999,variant:`light`})]})]}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <StyledMenuList>
    <MenuItem disableGutters>
      <ListItemText>Получено</ListItemText>
      <Counter color="success" content={18} variant="light" />
    </MenuItem>
    <MenuItem disableGutters>
      <ListItemText>Отправлено</ListItemText>
      <Counter color="grey" content={3} variant="light" />
    </MenuItem>
    <MenuItem disableGutters>
      <ListItemText>Архив</ListItemText>
      <Counter color="grey" content={999} variant="light" />
    </MenuItem>
  </StyledMenuList>`,...y.parameters?.docs?.source}}}})))()}var x;function S(){return(S=e((()=>{x={args:{color:`error`,content:999},parameters:{docs:{disable:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'error',
    content: 999
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),n(),h(),w=s(),T=()=>{let[e,t]=(0,C.useState)(0),n=()=>{t(e=>e-1)},r=()=>{t(e=>e+1)},[i,o]=(0,C.useState)(!0);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a,{onClick:()=>{o(e=>!e)},variant:`contained`,color:`primary`,children:i?`Отключить`:`Включить`}),(0,w.jsx)(a,{onClick:n,variant:`light`,color:`primary`,children:`-`}),(0,w.jsx)(g,{color:`grey`,variant:`light`,content:e,showZero:i}),(0,w.jsx)(a,{onClick:r,variant:`light`,color:`primary`,children:`+`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount(prev => prev - 1);
  };
  const handlePlus = () => {
    setCount(prev => prev + 1);
  };
  const [showZero, setShowZero] = useState(true);
  const handleChange = () => {
    setShowZero(prev => !prev);
  };
  return <>
      <Button onClick={handleChange} variant="contained" color="primary">
        {showZero ? 'Отключить' : 'Включить'}
      </Button>
      <Button onClick={handleMinus} variant="light" color="primary">
        -
      </Button>
      <Counter color="grey" variant="light" content={count} showZero={showZero} />
      <Button onClick={handlePlus} variant="light" color="primary">
        +
      </Button>
    </>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k;function A(){return(A=e((()=>{r(),c(),h(),D=s(),O=i(o)`
  background-color: #C0C0C0;
  padding: ${({theme:e})=>e.spacing(4)};
`,k=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(o,{spacing:6,columns:6,children:[(0,D.jsx)(g,{color:`grey`,content:999}),(0,D.jsx)(g,{color:`primary`,content:999}),(0,D.jsx)(g,{color:`error`,content:999}),(0,D.jsx)(g,{color:`success`,content:999}),(0,D.jsx)(g,{color:`warning`,content:999}),(0,D.jsx)(g,{color:`white`,content:999}),(0,D.jsx)(g,{color:`grey`,content:999,variant:`light`}),(0,D.jsx)(g,{color:`primary`,content:999,variant:`light`}),(0,D.jsx)(g,{color:`error`,content:999,variant:`light`}),(0,D.jsx)(g,{color:`success`,content:999,variant:`light`}),(0,D.jsx)(g,{color:`warning`,content:999,variant:`light`}),(0,D.jsx)(g,{color:`white`,content:999,variant:`light`})]}),(0,D.jsxs)(O,{spacing:6,columns:2,children:[(0,D.jsx)(g,{color:`transparent`,content:999}),(0,D.jsx)(g,{color:`transparent`,content:999,withBorder:!1})]})]}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Grid spacing={6} columns={6}>
        <Counter color="grey" content={999} />
        <Counter color="primary" content={999} />
        <Counter color="error" content={999} />
        <Counter color="success" content={999} />
        <Counter color="warning" content={999} />
        <Counter color="white" content={999} />

        <Counter color="grey" content={999} variant="light" />
        <Counter color="primary" content={999} variant="light" />
        <Counter color="error" content={999} variant="light" />
        <Counter color="success" content={999} variant="light" />
        <Counter color="warning" content={999} variant="light" />
        <Counter color="white" content={999} variant="light" />
      </Grid>

      <ColorWrapper spacing={6} columns={2}>
        <Counter color="transparent" content={999} />
        <Counter color="transparent" content={999} withBorder={false} />
      </ColorWrapper>
    </>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M;function N(){return(N=e((()=>{h(),b(),S(),E(),A(),j={title:`Tags-and-Badges/Counter`,component:g,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=76-66319&t=D7p8ULnnAwrq3hEJ-0)`}}}},M=[`Interaction`,`BasicUsage`,`ShowZero`,`VariantsColor`]})))()}N();export{y as BasicUsage,x as Interaction,T as ShowZero,k as VariantsColor,M as __namedExportsOrder,j as default};