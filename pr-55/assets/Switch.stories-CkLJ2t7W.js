import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,ya as o,yn as s}from"./preview-DptgQDDw.js";import{n as c,t as l}from"./Paper-BKUH_JPc.js";import{n as u,t as d}from"./Switch-NuWf6lyY.js";import{d as f,f as p,n as m,o as h,s as g,t as _}from"./DialogContent-DGRGSIc3.js";var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{c(),h(),_(),f(),t(),s(),n(),u(),v=o(),y={title:`Form-Controls/Switch`,component:d,parameters:{docs:{description:{component:`Switch — переключатель — включает или выключает состояние отдельной настройки.
Данный компонент можно использовать при необходимости включения/отключения какой-либо функции в сервисе.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=865-429662)`}}}},b={args:{color:`primary`},parameters:{docs:{disable:!0}}},x=i(a)`
  grid-template-columns: auto auto;
  justify-content: space-between;
`,S=()=>(0,v.jsxs)(l,{style:{width:500},children:[(0,v.jsx)(p,{variant:`h5`,children:`Настройки`}),(0,v.jsx)(m,{children:(0,v.jsxs)(x,{container:!0,children:[(0,v.jsx)(r,{children:`Отображать отклоненные заявления`}),(0,v.jsx)(d,{size:`small`})]})}),(0,v.jsx)(g,{})]}),C=()=>(0,v.jsx)(a,{container:!0,columns:2,children:(0,v.jsx)(d,{})}),w=()=>(0,v.jsx)(a,{container:!0,columns:2,children:(0,v.jsx)(d,{checked:!0})}),T=()=>(0,v.jsxs)(a,{container:!0,columns:2,children:[(0,v.jsx)(d,{disabled:!0}),(0,v.jsx)(d,{checked:!0,disabled:!0})]}),E=()=>(0,v.jsxs)(a,{container:!0,spacing:4,columns:4,children:[(0,v.jsx)(d,{label:`Text`}),(0,v.jsx)(d,{label:`Text`,labelPlacement:`start`}),(0,v.jsx)(d,{label:`Text`,disabled:!0}),(0,v.jsx)(d,{label:`Text`,labelPlacement:`start`,disabled:!0}),(0,v.jsx)(d,{label:`Text`,checked:!0}),(0,v.jsx)(d,{label:`Text`,checked:!0,labelPlacement:`start`}),(0,v.jsx)(d,{label:`Text`,checked:!0,disabled:!0}),(0,v.jsx)(d,{label:`Text`,checked:!0,labelPlacement:`start`,disabled:!0})]}),D=()=>(0,v.jsxs)(a,{container:!0,spacing:4,columns:2,children:[(0,v.jsx)(d,{size:`small`}),(0,v.jsx)(d,{size:`small`,label:`Text`}),(0,v.jsx)(d,{}),(0,v.jsx)(d,{label:`Text`})]}),O=[`Interaction`,`BasicUsage`,`Types`,`Checked`,`Disabled`,`SwitchWithText`,`Sizes`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Paper style={{
    width: 500
  }}>
      <DialogTitle variant="h5">Настройки</DialogTitle>
      <DialogContent>
        <StyledGrid container>
          <Typography>Отображать отклоненные заявления</Typography>
          <Switch size="small" />
        </StyledGrid>
      </DialogContent>
      <DialogActions />
    </Paper>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Grid container columns={2}>
    <Switch />
  </Grid>`,...C.parameters?.docs?.source},description:{story:`Переключатель имеет два состояния: выключен и включен.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Grid container columns={2}>
    <Switch checked />
  </Grid>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <Grid container columns={2}>
    <Switch disabled />
    <Switch checked disabled />
  </Grid>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <Grid container spacing={4} columns={4}>
    <Switch label="Text" />
    <Switch label="Text" labelPlacement="start" />

    <Switch label="Text" disabled />
    <Switch label="Text" labelPlacement="start" disabled />

    <Switch label="Text" checked />
    <Switch label="Text" checked labelPlacement="start" />

    <Switch label="Text" checked disabled />
    <Switch label="Text" checked labelPlacement="start" disabled />
  </Grid>`,...E.parameters?.docs?.source},description:{story:`Компонент переключателя используется в интерфейсе с поясняющим текстом.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <Grid container spacing={4} columns={2}>
    <Switch size="small" />
    <Switch size="small" label="Text" />

    <Switch />
    <Switch label="Text" />
  </Grid>`,...D.parameters?.docs?.source},description:{story:`Переключатель имеет несколько размеров: small, medium.`,...D.parameters?.docs?.description}}}})))()}k();export{S as BasicUsage,w as Checked,T as Disabled,b as Interaction,D as Sizes,E as SwitchWithText,C as Types,O as __namedExportsOrder,y as default};