import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,lt as r,xa as i}from"./preview-Cav_CXYC.js";import{n as a,t as o}from"./Stack-4wmeNX7e.js";import{n as s,t as c}from"./CheckableTag-N4PjizhA.js";import{t as l}from"./TagBadge-CD8uWhZJ.js";import{t as u}from"./TagBadge-llQ6oMK8.js";var d,f,p;function m(){return(m=e((()=>{a(),d=t(),u(),s(),f=i(),p=()=>{let[e,t]=(0,d.useState)(!1),n={checked:e,onChange:e=>t(e.target.checked),endAddon:e=>(0,f.jsx)(l,{...e,badgeContent:`12`})};return(0,f.jsxs)(o,{direction:`column`,gap:2,children:[(0,f.jsx)(c,{label:`Checkable tag`,color:`error`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,color:`warning`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,color:`primary`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,color:`success`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,variant:`contained`,color:`error`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,variant:`contained`,color:`warning`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,variant:`contained`,color:`primary`,...n}),(0,f.jsx)(c,{label:`Checkable tag`,variant:`contained`,color:`success`,...n}),(0,f.jsx)(c,{label:`Checkable disabled tag`,variant:`contained`,color:`success`,disabled:!0,...n})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
  const baseProps = {
    checked,
    onChange: handleChecked,
    endAddon: (props: TagBadgeProps) => <TagBadge {...props} badgeContent="12" />
  };
  return <Stack direction="column" gap={2}>
      <CheckableTag label="Checkable tag" color="error" {...baseProps} />
      <CheckableTag label="Checkable tag" color="warning" {...baseProps} />
      <CheckableTag label="Checkable tag" color="primary" {...baseProps} />
      <CheckableTag label="Checkable tag" color="success" {...baseProps} />
      <CheckableTag label="Checkable tag" {...baseProps} />
      <CheckableTag label="Checkable tag" variant="contained" color="error" {...baseProps} />
      <CheckableTag label="Checkable tag" variant="contained" color="warning" {...baseProps} />
      <CheckableTag label="Checkable tag" variant="contained" color="primary" {...baseProps} />
      <CheckableTag label="Checkable tag" variant="contained" color="success" {...baseProps} />
      <CheckableTag label="Checkable disabled tag" variant="contained" color="success" disabled {...baseProps} />
    </Stack>;
}`,...p.parameters?.docs?.source}}}})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),n(),u(),s(),g=i(),_=()=>{let[e,t]=(0,h.useState)(!1),n={checked:e,onChange:e=>t(e.target.checked),endAddon:e=>(0,g.jsx)(l,{...e,badgeContent:`12`})};return(0,g.jsxs)(r,{container:!0,spacing:8,columns:`repeat(3, auto)`,children:[(0,g.jsx)(c,{label:`Primary`,variant:`contained`,color:`primary`,...n}),(0,g.jsx)(c,{label:`Error`,variant:`contained`,color:`error`,...n}),(0,g.jsx)(c,{label:`Success`,variant:`contained`,color:`success`,...n}),(0,g.jsx)(c,{label:`Warning`,variant:`contained`,color:`warning`,...n}),(0,g.jsx)(c,{label:`Grey`,variant:`contained`,color:`grey`,...n}),(0,g.jsx)(c,{label:`Default`,variant:`contained`,color:`default`,...n})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
  const baseProps = {
    checked,
    onChange: handleChecked,
    endAddon: (props: TagBadgeProps) => <TagBadge {...props} badgeContent="12" />
  };
  return <Grid container spacing={8} columns="repeat(3, auto)">
      <CheckableTag label="Primary" variant="contained" color="primary" {...baseProps} />
      <CheckableTag label="Error" variant="contained" color="error" {...baseProps} />
      <CheckableTag label="Success" variant="contained" color="success" {...baseProps} />
      <CheckableTag label="Warning" variant="contained" color="warning" {...baseProps} />
      <CheckableTag label="Grey" variant="contained" color="grey" {...baseProps} />
      <CheckableTag label="Default" variant="contained" color="default" {...baseProps} />
    </Grid>;
}`,..._.parameters?.docs?.source}}}})))()}var y;function b(){return(b=e((()=>{y={args:{variant:`light`,color:`success`,label:`Тэг Checkable`},parameters:{docs:{disable:!0}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    color: 'success',
    label: 'Тэг Checkable'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}var x,S,C;function w(){return(w=e((()=>{x=t(),n(),u(),s(),S=i(),C=()=>{let[e,t]=(0,x.useState)(!1),n={checked:e,onChange:e=>t(e.target.checked),endAddon:e=>(0,S.jsx)(l,{...e,badgeContent:`12`})};return(0,S.jsxs)(r,{container:!0,spacing:8,columns:`repeat(3, auto)`,children:[(0,S.jsx)(c,{label:`Primary`,variant:`light`,color:`primary`,...n}),(0,S.jsx)(c,{label:`Error`,variant:`light`,color:`error`,...n}),(0,S.jsx)(c,{label:`Success`,variant:`light`,color:`success`,...n}),(0,S.jsx)(c,{label:`Warning`,variant:`light`,color:`warning`,...n}),(0,S.jsx)(c,{label:`Grey`,variant:`light`,color:`grey`,...n}),(0,S.jsx)(c,{label:`Default`,variant:`light`,color:`default`,...n})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (event: ChangeEvent<HTMLInputElement>) => setChecked(event.target.checked);
  const baseProps = {
    checked,
    onChange: handleChecked,
    endAddon: (props: TagBadgeProps) => <TagBadge {...props} badgeContent="12" />
  };
  return <Grid container spacing={8} columns="repeat(3, auto)">
      <CheckableTag label="Primary" variant="light" color="primary" {...baseProps} />
      <CheckableTag label="Error" variant="light" color="error" {...baseProps} />
      <CheckableTag label="Success" variant="light" color="success" {...baseProps} />
      <CheckableTag label="Warning" variant="light" color="warning" {...baseProps} />
      <CheckableTag label="Grey" variant="light" color="grey" {...baseProps} />
      <CheckableTag label="Default" variant="light" color="default" {...baseProps} />
    </Grid>;
}`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{s(),m(),v(),b(),w(),T={title:`Tags-and-Badges/CheckableTag`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=785-53191&t=ul4WXgbZ1zkX2wdO-0)`}}}},E=[`Interaction`,`BasicUsage`,`Contained`,`Light`]})))()}D();export{p as BasicUsage,_ as Contained,y as Interaction,C as Light,E as __namedExportsOrder,T as default};