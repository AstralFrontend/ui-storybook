import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-DJy7jU1i.js";import{n as r,t as i}from"./NumberField-iy99nDJ2.js";var a,o,s;function c(){return(c=e((()=>{a=t(),r(),o=n(),s=()=>{let[e,t]=(0,a.useState)();return(0,o.jsx)(i,{label:`Количество лицензий`,value:e,onChange:e=>{t(e)}})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<NumberFieldValue | null>();
  const handleChange = (fieldValue: NumberFieldValue | null) => {
    setValue(fieldValue);
  };
  return <NumberField label="Количество лицензий" value={value} onChange={handleChange} />;
}`,...s.parameters?.docs?.source}}}})))()}var l,u;function d(){return(d=e((()=>{r(),l=n(),u=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i,{label:`Количество лицензий`,disabled:!0})}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <>
    <NumberField label="Количество лицензий" disabled />
  </>`,...u.parameters?.docs?.source}}}})))()}var f,p;function m(){return(m=e((()=>{r(),f=n(),p=()=>(0,f.jsx)(i,{fullWidth:!0,label:`Количество лицензий`}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <NumberField fullWidth label="Количество лицензий" />`,...p.parameters?.docs?.source}}}})))()}var h,g;function _(){return(_=e((()=>{r(),h=n(),g=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i,{helperText:`Поясняю поле`,label:`Количество лицензий`}),(0,h.jsx)(i,{error:!0,helperText:`Поясняю ошибку поля`,label:`Количество лицензий`}),(0,h.jsx)(i,{success:!0,helperText:`Поясняю success статус`,label:`Количество лицензий`})]}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <>
    <NumberField helperText="Поясняю поле" label="Количество лицензий" />

    <NumberField error helperText="Поясняю ошибку поля" label="Количество лицензий" />

    <NumberField success helperText="Поясняю success статус" label="Количество лицензий" />
  </>`,...g.parameters?.docs?.source}}}})))()}var v;function y(){return(y=e((()=>{v={args:{label:`Количество лицензий`,helperText:`Необходимое количество лицензий`},parameters:{docs:{disable:!0}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Количество лицензий',
    helperText: 'Необходимое количество лицензий'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{r(),b=n(),x=()=>(0,b.jsx)(i,{required:!0,label:`Количество лицензий`}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <NumberField required label="Количество лицензий" />`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{r(),C=n(),w=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{label:`Medium`}),(0,C.jsx)(i,{label:`Small`,size:`small`})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <>
    <NumberField label="Medium" />
    <NumberField label="Small" size="small" />
  </>`,...w.parameters?.docs?.source}}}})))()}var E,D;function O(){return(O=e((()=>{r(),c(),d(),m(),_(),y(),S(),T(),E={title:`Form-Controls/NumberField`,component:i,parameters:{docs:{description:{component:`NumberField - предназначен для ввода числовых значений, позволяет сетить в форму number вместо string. Это позволяет избежать ошибок типов и увеличить однозначность типов. Область применения: ввод количества, ввод цены.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=405-35440&t=PGkJAfFMptb9FF1Q-0)`}}}},D=[`Interaction`,`BasicUsage`,`Required`,`Disabled`,`Sizes`,`FullWidth`,`HelperText`]})))()}O();export{s as BasicUsage,u as Disabled,p as FullWidth,g as HelperText,v as Interaction,x as Required,w as Sizes,D as __namedExportsOrder,E as default};