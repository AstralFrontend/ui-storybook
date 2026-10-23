import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,lt as r,xa as i}from"./preview-NvIN-gdT.js";import{i as a,n as o,r as s,t as c}from"./ToggleButton-DpcezghU.js";var l,u,d;function f(){return(f=e((()=>{l=t(),s(),o(),u=i(),d=()=>{let[e,t]=(0,l.useState)(`val3`);return(0,u.jsxs)(a,{exclusive:!0,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,u.jsx)(c,{value:`val1`,children:`Toggle Button`}),(0,u.jsx)(c,{value:`val2`,children:`Toggle Button`}),(0,u.jsx)(c,{value:`val3`,counter:100,children:`Toggle Button`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('val3');
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };
  return <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
      <ToggleButton value="val1">Toggle Button</ToggleButton>
      <ToggleButton value="val2">Toggle Button</ToggleButton>
      <ToggleButton value="val3" counter={100}>
        Toggle Button
      </ToggleButton>
    </ToggleButtonGroup>;
}`,...d.parameters?.docs?.source}}}})))()}var p,m,h;function g(){return(g=e((()=>{p=t(),n(),s(),o(),m=i(),h=()=>{let[e,t]=(0,p.useState)(`val1`);return(0,m.jsx)(r,{container:!0,spacing:6,children:(0,m.jsxs)(a,{exclusive:!0,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,m.jsx)(c,{value:`val1`,color:`primary`,children:`Primary`}),(0,m.jsx)(c,{value:`val3`,color:`error`,children:`Error`}),(0,m.jsx)(c,{value:`val4`,color:`success`,children:`Success`}),(0,m.jsx)(c,{value:`val5`,color:`warning`,children:`Warning`}),(0,m.jsx)(c,{value:`val7`,color:`grey`,children:`Grey`}),(0,m.jsx)(c,{value:`val8`,disabled:!0,children:`Disabled`})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('val1');
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };
  return <Grid container spacing={6}>
      <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
        <ToggleButton value="val1" color="primary">
          Primary
        </ToggleButton>
        <ToggleButton value="val3" color="error">
          Error
        </ToggleButton>
        <ToggleButton value="val4" color="success">
          Success
        </ToggleButton>
        <ToggleButton value="val5" color="warning">
          Warning
        </ToggleButton>
        <ToggleButton value="val7" color="grey">
          Grey
        </ToggleButton>
        <ToggleButton value="val8" disabled>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>;
}`,...h.parameters?.docs?.source},description:{story:`Меняет цвет, если ToggleButton находится в состоянии 'active'`,...h.parameters?.docs?.description}}};try{h.displayName=`Colors`,h.__docgenInfo={description:`Меняет цвет, если ToggleButton находится в состоянии 'active'`,displayName:`Colors`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ToggleButton/stories/Colors.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var _;function v(){return(v=e((()=>{_={args:{color:`primary`,children:`Toggle Button`,selected:!0},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    children: 'Toggle Button',
    selected: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),n(),s(),o(),b=i(),x=()=>{let[e,t]=(0,y.useState)(`val1`),n=(e,n)=>{n&&t(n)};return(0,b.jsxs)(r,{spacing:6,rows:3,children:[(0,b.jsxs)(a,{value:e,onChange:n,exclusive:!0,children:[(0,b.jsx)(c,{value:`val1`,size:`small`,children:`Small`}),(0,b.jsx)(c,{value:`val2`,size:`small`,children:`Small`}),(0,b.jsx)(c,{value:`val3`,size:`small`,children:`Small`})]}),(0,b.jsxs)(a,{value:e,onChange:n,exclusive:!0,children:[(0,b.jsx)(c,{value:`val1`,size:`medium`,children:`Medium`}),(0,b.jsx)(c,{value:`val2`,size:`medium`,children:`Medium`}),(0,b.jsx)(c,{value:`val3`,size:`medium`,children:`Medium`})]}),(0,b.jsxs)(a,{value:e,onChange:n,exclusive:!0,children:[(0,b.jsx)(c,{value:`val1`,size:`large`,children:`Large`}),(0,b.jsx)(c,{value:`val2`,size:`large`,children:`Large`}),(0,b.jsx)(c,{value:`val3`,size:`large`,children:`Large`})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('val1');
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };
  return <Grid spacing={6} rows={3}>
      <ToggleButtonGroup value={value} onChange={handleChange} exclusive>
        <ToggleButton value="val1" size="small">
          Small
        </ToggleButton>
        <ToggleButton value="val2" size="small">
          Small
        </ToggleButton>
        <ToggleButton value="val3" size="small">
          Small
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value={value} onChange={handleChange} exclusive>
        <ToggleButton value="val1" size="medium">
          Medium
        </ToggleButton>
        <ToggleButton value="val2" size="medium">
          Medium
        </ToggleButton>
        <ToggleButton value="val3" size="medium">
          Medium
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup value={value} onChange={handleChange} exclusive>
        <ToggleButton value="val1" size="large">
          Large
        </ToggleButton>
        <ToggleButton value="val2" size="large">
          Large
        </ToggleButton>
        <ToggleButton value="val3" size="large">
          Large
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),n(),s(),o(),w=i(),T=()=>{let[e,t]=(0,C.useState)(`val1`);return(0,w.jsx)(r,{container:!0,spacing:6,children:(0,w.jsxs)(a,{exclusive:!0,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,w.jsx)(c,{value:`val1`,counter:12,color:`primary`,children:`Primary`}),(0,w.jsx)(c,{value:`val3`,counter:12,color:`error`,children:`Error`}),(0,w.jsx)(c,{value:`val4`,counter:12,color:`success`,children:`Success`}),(0,w.jsx)(c,{value:`val5`,counter:12,color:`warning`,children:`Warning`}),(0,w.jsx)(c,{value:`val7`,counter:12,color:`grey`,children:`Grey`}),(0,w.jsx)(c,{value:`val8`,counter:12,disabled:!0,children:`Disabled`})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('val1');
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };
  return <Grid container spacing={6}>
      <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
        <ToggleButton value="val1" counter={12} color="primary">
          Primary
        </ToggleButton>
        <ToggleButton value="val3" counter={12} color="error">
          Error
        </ToggleButton>
        <ToggleButton value="val4" counter={12} color="success">
          Success
        </ToggleButton>
        <ToggleButton value="val5" counter={12} color="warning">
          Warning
        </ToggleButton>
        <ToggleButton value="val7" counter={12} color="grey">
          Grey
        </ToggleButton>
        <ToggleButton value="val8" counter={12} disabled={true}>
          Disabled
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{o(),f(),g(),v(),S(),E(),D={title:`Buttons/ToggleButton`,component:c,parameters:{docs:{description:{component:`Используется в форме заполнения данных для переключения блока данных.
Группируется с помощью компонента [ToggleButtonGroup](/docs/buttons-toggleButton-toggleButtonGroup--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1176-17650&t=OjoTaRYkNWhbJTcj-0)`}}}},O=[`Interaction`,`BasicUsage`,`Size`,`Colors`,`WithCounter`]})))()}k();export{d as BasicUsage,h as Colors,_ as Interaction,x as Size,T as WithCounter,O as __namedExportsOrder,D as default};