import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Z as n,ct as r,dt as i,ft as a,ji as o,lt as s,ya as c,yn as l,za as u}from"./preview-BrWggRPd.js";import{n as d,t as f}from"./Stack-CEPL3lxq.js";import{t as p}from"./CheckableTag-Cj3wJMLl.js";import{t as m}from"./CheckableTag-C6T9S4zM.js";import{n as h,t as g}from"./TagBadge-CZKIUSxZ.js";var _,v;function y(){return(y=e((()=>{n(),h(),_=c(),v=()=>(0,_.jsx)(t,{label:`Тэг`,endAddon:e=>(0,_.jsx)(g,{...e,badgeContent:`12`})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Tag label="Тэг" endAddon={props => <TagBadge {...props} badgeContent="12" />} />`,...v.parameters?.docs?.source}}}})))()}var b,x,S;function C(){return(C=e((()=>{b=u(),m(),r(),h(),x=c(),S=()=>{let[e,t]=(0,b.useState)(!1),n={checked:e,onChange:e=>t(e.target.checked)};return(0,x.jsxs)(s,{container:!0,spacing:8,columns:`repeat(3, auto)`,children:[(0,x.jsx)(p,{label:`Primary`,variant:`light`,color:`primary`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n}),(0,x.jsx)(p,{label:`Error`,variant:`light`,color:`error`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n}),(0,x.jsx)(p,{label:`Success`,variant:`light`,color:`success`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n}),(0,x.jsx)(p,{label:`Warning`,variant:`light`,color:`warning`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n}),(0,x.jsx)(p,{label:`Grey`,variant:`light`,color:`grey`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n}),(0,x.jsx)(p,{label:`Default`,variant:`light`,color:`default`,endAddon:e=>(0,x.jsx)(g,{...e,badgeContent:`12`}),...n})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
  const baseProps = {
    checked,
    onChange: handleChecked
  };
  return <Grid container spacing={8} columns="repeat(3, auto)">
      <CheckableTag label="Primary" variant="light" color="primary" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
      <CheckableTag label="Error" variant="light" color="error" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
      <CheckableTag label="Success" variant="light" color="success" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
      <CheckableTag label="Warning" variant="light" color="warning" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
      <CheckableTag label="Grey" variant="light" color="grey" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
      <CheckableTag label="Default" variant="light" color="default" endAddon={props => <TagBadge {...props} badgeContent="12" />} {...baseProps} />
    </Grid>;
}`,...S.parameters?.docs?.source}}}})))()}var w,T;function E(){return(E=e((()=>{d(),n(),h(),w=c(),T=()=>(0,w.jsx)(f,{direction:`column`,gap:2,children:(0,w.jsxs)(f,{direction:`row`,gap:2,children:[(0,w.jsx)(t,{label:`primary`,color:`primary`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})}),(0,w.jsx)(t,{label:`error`,color:`error`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})}),(0,w.jsx)(t,{label:`success`,color:`success`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})}),(0,w.jsx)(t,{label:`warning`,color:`warning`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})}),(0,w.jsx)(t,{label:`grey`,color:`grey`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})}),(0,w.jsx)(t,{label:`white`,color:`default`,variant:`light`,endAddon:e=>(0,w.jsx)(g,{...e,badgeContent:`12`})})]})}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <Stack direction="column" gap={2}>
    <Stack direction="row" gap={2}>
      <Tag label="primary" color="primary" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
      <Tag label="error" color="error" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
      <Tag label="success" color="success" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
      <Tag label="warning" color="warning" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
      <Tag label="grey" color="grey" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
      <Tag label="white" color="default" variant="light" endAddon={props => <TagBadge {...props} badgeContent="12" />} />
    </Stack>
  </Stack>`,...T.parameters?.docs?.source}}}})))()}var D;function O(){return(O=e((()=>{D={args:{color:`primary`,badgeContent:`12`},parameters:{docs:{disable:!0}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    badgeContent: '12'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...D.parameters?.docs?.source}}}})))()}var k,A,j,M;function N(){return(N=e((()=>{r(),l(),n(),i(),h(),k=c(),A=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,M=()=>(0,k.jsxs)(s,{container:!0,spacing:5,children:[(0,k.jsxs)(A,{children:[(0,k.jsx)(a,{children:`Contained`}),(0,k.jsxs)(j,{children:[(0,k.jsx)(t,{label:`Primary`,variant:`contained`,color:`primary`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Error`,variant:`contained`,color:`error`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Success`,variant:`contained`,color:`success`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Warning`,variant:`contained`,color:`warning`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Grey`,variant:`contained`,color:`grey`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Default`,variant:`contained`,color:`default`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})})]})]}),(0,k.jsxs)(A,{children:[(0,k.jsx)(a,{children:`Light`}),(0,k.jsxs)(j,{children:[(0,k.jsx)(t,{label:`Primary`,variant:`light`,color:`primary`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Error`,variant:`light`,color:`error`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Success`,variant:`light`,color:`success`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Warning`,variant:`light`,color:`warning`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Grey`,variant:`light`,color:`grey`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Default`,variant:`light`,color:`default`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})})]})]}),(0,k.jsxs)(A,{children:[(0,k.jsx)(a,{children:`Text`}),(0,k.jsxs)(j,{children:[(0,k.jsx)(t,{label:`Primary`,variant:`text`,color:`primary`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Error`,variant:`text`,color:`error`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Success`,variant:`text`,color:`success`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Warning`,variant:`text`,color:`warning`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Grey`,variant:`text`,color:`grey`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})}),(0,k.jsx)(t,{label:`Default`,variant:`text`,color:`default`,endAddon:e=>(0,k.jsx)(g,{...e,badgeContent:`21`})})]})]})]}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <Grid container spacing={5}>
    <RowContainer>
      <Typography>Contained</Typography>

      <List>
        <Tag label="Primary" variant="contained" color="primary" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Error" variant="contained" color="error" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Success" variant="contained" color="success" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Warning" variant="contained" color="warning" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Grey" variant="contained" color="grey" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Default" variant="contained" color="default" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
      </List>
    </RowContainer>

    <RowContainer>
      <Typography>Light</Typography>

      <List>
        <Tag label="Primary" variant="light" color="primary" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Error" variant="light" color="error" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Success" variant="light" color="success" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Warning" variant="light" color="warning" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Grey" variant="light" color="grey" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Default" variant="light" color="default" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
      </List>
    </RowContainer>

    <RowContainer>
      <Typography>Text</Typography>

      <List>
        <Tag label="Primary" variant="text" color="primary" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Error" variant="text" color="error" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Success" variant="text" color="success" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Warning" variant="text" color="warning" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Grey" variant="text" color="grey" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
        <Tag label="Default" variant="text" color="default" endAddon={props => <TagBadge {...props} badgeContent="21" />} />
      </List>
    </RowContainer>
  </Grid>`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{h(),y(),C(),E(),O(),N(),P={title:`Tags-and-Badges/TagBadge`,component:g,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20166&p=f&t=hjVQBmmWl2sO2J5C-0)`}}}},F=[`Interaction`,`BasicUsage`,`Color`,`VariantColor`,`CheckableTagBadge`]})))()}I();export{v as BasicUsage,S as CheckableTagBadge,T as Color,D as Interaction,M as VariantColor,F as __namedExportsOrder,P as default};