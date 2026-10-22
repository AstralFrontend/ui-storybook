import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,dt as n,ft as r,it as i,ji as a,rt as o,xa as s,yn as c}from"./preview-DREXElCf.js";import{n as l,t as u}from"./Chevron-Cv-_GejD.js";var d,f,p;function m(){return(m=e((()=>{d=t(),o(),l(),f=s(),p=()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsx)(i,{onClick:()=>{t(!e)},children:(0,f.jsx)(u,{isActive:e})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return <IconButton onClick={handleClick}>
      <Chevron isActive={isActive} />
    </IconButton>;
}`,...p.parameters?.docs?.source}}}})))()}var h,g;function _(){return(_=e((()=>{c(),h=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: center;
  justify-content: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
  }
`,g=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`})))()}var v,y;function b(){return(b=e((()=>{n(),l(),_(),v=s(),y=()=>(0,v.jsxs)(h,{children:[(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{color:`primary`,children:`primary`}),(0,v.jsx)(u,{color:`primary`})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{color:`secondary`,children:`secondary`}),(0,v.jsx)(u,{color:`secondary`})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{color:`success`,children:`success`}),(0,v.jsx)(u,{color:`success`})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{color:`warning`,children:`warning`}),(0,v.jsx)(u,{color:`warning`})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{color:`error`,children:`error`}),(0,v.jsx)(u,{color:`error`})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(r,{children:`disabled`}),(0,v.jsx)(u,{color:`disabled`})]})]}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <ItemWrapper>
      <Typography color="primary">primary</Typography>
      <Chevron color="primary" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography color="secondary">secondary</Typography>
      <Chevron color="secondary" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography color="success">success</Typography>
      <Chevron color="success" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography color="warning">warning</Typography>
      <Chevron color="warning" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography color="error">error</Typography>
      <Chevron color="error" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography>disabled</Typography>
      <Chevron color="disabled" />
    </ItemWrapper>
  </Wrapper>`,...y.parameters?.docs?.source}}}})))()}var x,S;function C(){return(C=e((()=>{n(),l(),_(),x=s(),S=()=>(0,x.jsxs)(h,{children:[(0,x.jsxs)(g,{children:[(0,x.jsx)(r,{children:`sm`}),(0,x.jsx)(u,{size:`sm`})]}),(0,x.jsxs)(g,{children:[(0,x.jsx)(r,{children:`md`}),(0,x.jsx)(u,{size:`md`})]}),(0,x.jsxs)(g,{children:[(0,x.jsx)(r,{children:`custom (34px)`}),(0,x.jsx)(u,{width:`34px`,height:`34px`})]})]}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <ItemWrapper>
      <Typography>sm</Typography>
      <Chevron size="sm" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography>md</Typography>
      <Chevron size="md" />
    </ItemWrapper>

    <ItemWrapper>
      <Typography>custom (34px)</Typography>
      <Chevron width="34px" height="34px" />
    </ItemWrapper>
  </Wrapper>`,...S.parameters?.docs?.source}}}})))()}var w,T;function E(){return(E=e((()=>{l(),m(),b(),C(),w={title:`Collapsible/Chevron`,component:u,parameters:{docs:{description:{component:`Chevron - анимированная иконка-индикатор раскрытия/скрытия контента, поворачивается на 180° в зависимости от isActive`}}}},T=[`BasicUsage`,`Colors`,`Sizes`]})))()}E();export{p as BasicUsage,y as Colors,S as Sizes,T as __namedExportsOrder,w as default};