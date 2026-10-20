import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-C162HGvI.js";import{i as r,n as i,r as a,t as o}from"./Tabs-1XTKo8sW.js";import{t as s}from"./Tooltip-CAsFJlHk.js";import{t as c}from"./Tooltip-Bwhz79yI.js";var l,u,d;function f(){return(f=e((()=>{l=t(),a(),i(),u=n(),d=()=>{let[e,t]=(0,l.useState)(0);return(0,u.jsxs)(o,{value:e,onChange:(e,n)=>{t(n)},centered:!0,children:[(0,u.jsx)(r,{label:`Мои документы`}),(0,u.jsx)(r,{label:`На согласовании`}),(0,u.jsx)(r,{label:`Входящие`}),(0,u.jsx)(r,{label:`Исходящие`}),(0,u.jsx)(r,{label:`Архив`}),(0,u.jsx)(r,{label:`Шаблоны`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Мои документы" />
      <Tab label="На согласовании" />
      <Tab label="Входящие" />
      <Tab label="Исходящие" />
      <Tab label="Архив" />
      <Tab label="Шаблоны" />
    </Tabs>;
}`,...d.parameters?.docs?.source}}}})))()}var p,m,h;function g(){return(g=e((()=>{p=t(),a(),i(),m=n(),h=()=>{let[e,t]=(0,p.useState)(0);return(0,m.jsxs)(o,{value:e,onChange:(e,n)=>{t(n)},centered:!0,children:[(0,m.jsx)(r,{label:`Мои документы`,count:100}),(0,m.jsx)(r,{label:`Архив`,count:14}),(0,m.jsx)(r,{label:`Шаблоны`,count:0})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Мои документы" count={100} />
      <Tab label="Архив" count={14} />
      <Tab label="Шаблоны" count={0} />
    </Tabs>;
}`,...h.parameters?.docs?.source}}}})))()}var _;function v(){return(v=e((()=>{_={args:{value:0,onChange:()=>{}},parameters:{options:{showPanel:!1},docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    onChange: () => {}
  },
  parameters: {
    options: {
      showPanel: false
    },
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),a(),i(),b=n(),x=()=>{let[e,t]=(0,y.useState)(0);return(0,b.jsxs)(o,{value:e,onChange:(e,n)=>{t(n)},centered:!0,children:[(0,b.jsx)(r,{label:`Мои документы`}),(0,b.jsx)(r,{label:`Архив`}),(0,b.jsx)(r,{label:`Шаблоны`,disabled:!0})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Мои документы" />
      <Tab label="Архив" />
      <Tab label="Шаблоны" disabled />
    </Tabs>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),c(),a(),i(),w=n(),T=()=>{let[e,t]=(0,C.useState)(0);return(0,w.jsxs)(o,{value:e,onChange:(e,n)=>{t(n)},centered:!0,children:[(0,w.jsx)(r,{label:`Мои документы`}),(0,w.jsx)(r,{label:`Архив`}),(0,w.jsx)(s,{title:`У вас нет сохраненных шаблонов`,withoutContainer:!1,children:(0,w.jsx)(r,{label:`Шаблоны`,disabled:!0})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Мои документы" />
      <Tab label="Архив" />
      <Tooltip title="У вас нет сохраненных шаблонов" withoutContainer={false}>
        <Tab label="Шаблоны" disabled />
      </Tooltip>
    </Tabs>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{i(),f(),g(),v(),S(),E(),D={title:`Navigation/Tabs`,component:o,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1066-614580&t=ZI15fAS7VSdfzhs2-0)`}}}},O=[`Interaction`,`BasicUsage`,`TabDisabled`,`TooltipDisabledTab`,`Counter`]})))()}k();export{d as BasicUsage,h as Counter,_ as Interaction,x as TabDisabled,T as TooltipDisabledTab,O as __namedExportsOrder,D as default};