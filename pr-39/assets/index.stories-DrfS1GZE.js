import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r,za as i}from"./preview-BJz-w2gl.js";import{t as a}from"./Switch-DdrQcUWX.js";import{n as o,t as s}from"./MaskField-gwTAnMtw.js";import{t as c}from"./Switch-Ce4J9Pav.js";var l,u;function d(){return(d=e((()=>{o(),l=r(),u=()=>(0,l.jsx)(s,{label:`Введите номер телефона`,mask:`+7 (000) 000-00-00`,placeholder:`+7 (000) 000-00-00`}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <MaskField label="Введите номер телефона" mask="+7 (000) 000-00-00" placeholder="+7 (000) 000-00-00" />;
}`,...u.parameters?.docs?.source}}}})))()}var f,p;function m(){return(m=e((()=>{o(),f=r(),p=()=>(0,f.jsx)(s,{label:`With definitions`,mask:`XXX - XXXXXX`,placeholder:`XXX - XXXXXX`,definitions:{X:/[a-zA-Z0-9]/}}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <MaskField label="With definitions" mask="XXX - XXXXXX" placeholder="XXX - XXXXXX" definitions={{
  X: /[a-zA-Z0-9]/
}} />`,...p.parameters?.docs?.source},description:{story:"Prop `definitions` - работает в комбинации с пропсом `mask`, позволяет делать динамическую маску, в которой при удалении элементов, они заменяются подчеркиванием вместо смещения всего значения",...p.parameters?.docs?.description}}};try{p.displayName=`Definitions`,p.__docgenInfo={description:"Prop `definitions` - работает в комбинации с пропсом `mask`, позволяет делать динамическую маску, в которой при удалении элементов, они заменяются подчеркиванием вместо смещения всего значения",displayName:`Definitions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MaskField/stories/Definitions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var h;function g(){return(g=e((()=>{h={args:{label:`Введите номер телефона`,placeholder:`+7 (000) 000-00-00`,mask:`+7 (000) 000-00-00`},parameters:{docs:{disable:!0}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Введите номер телефона',
    placeholder: '+7 (000) 000-00-00',
    mask: '+7 (000) 000-00-00'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}var _,v;function y(){return(y=e((()=>{t(),o(),_=r(),v=()=>(0,_.jsxs)(n,{container:!0,rows:2,children:[(0,_.jsx)(s,{placeholder:`With label`,label:`Label`,mask:Date}),(0,_.jsx)(s,{placeholder:`Without label`,mask:Date})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Grid container rows={2}>
    <MaskField placeholder="With label" label="Label" mask={Date} />
    <MaskField placeholder="Without label" mask={Date} />
  </Grid>`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{o(),b=r(),x=()=>(0,b.jsx)(s,{label:`Маска может содержать буквы`,mask:`aa.000.aaaaa`,placeholder:`aa.aaa.aaaaa`}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <MaskField label="Маска может содержать буквы" mask="aa.000.aaaaa" placeholder="aa.aaa.aaaaa" />`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{t(),o(),C=r(),w=()=>(0,C.jsxs)(n,{container:!0,rows:2,children:[(0,C.jsx)(s,{label:`With placeholder`,mask:`aa.000`,placeholder:`aa.000`}),(0,C.jsx)(s,{label:`Without placeholder`,mask:`aa.000`})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Grid container rows={2}>
    <MaskField label="With placeholder" mask="aa.000" placeholder="aa.000" />
    <MaskField label="Without placeholder" mask="aa.000" />
  </Grid>`,...w.parameters?.docs?.source}}}})))()}var E,D,O;function k(){return(k=e((()=>{E=i(),c(),o(),D=r(),O=()=>{let[e,t]=(0,E.useState)(``),[n,r]=(0,E.useState)(!0);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{label:`With mask/unmask`,mask:`aa.0000-000`,placeholder:`aa.0000-000`,value:e,onChange:e=>{t(e)},unmask:n},String(n)),`Mask/unmask: `,(0,D.jsx)(a,{onChange:()=>{t(``),r(e=>!e)},checked:n}),`Value: `,e]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [unmasked, setUnmasked] = useState(true);
  const handleValueChange = (fieldValue: string) => {
    setValue(fieldValue);
  };
  const handleSwitchChange = () => {
    setValue('');
    setUnmasked(prevState => !prevState);
  };
  return <>
      <MaskField key={String(unmasked)} label="With mask/unmask" mask="aa.0000-000" placeholder="aa.0000-000" value={value} onChange={handleValueChange} unmask={unmasked} />
      Mask/unmask: <Switch onChange={handleSwitchChange} checked={unmasked} />
      Value: {value}
    </>;
}`,...O.parameters?.docs?.source},description:{story:"Prop ```unmask``` - работает в комбинации с пропсом `mask`, позволяет включить/отключить маску. По дефолту в value попадают данные без маски.",...O.parameters?.docs?.description}}};try{O.displayName=`Unmask`,O.__docgenInfo={description:"Prop ```unmask``` - работает в комбинации с пропсом `mask`, позволяет включить/отключить маску. По дефолту в value попадают данные без маски.",displayName:`Unmask`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MaskField/stories/Unmask.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var A,j;function M(){return(M=e((()=>{o(),d(),m(),g(),y(),S(),T(),k(),A={title:`Form-Controls/MaskField`,component:s,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=82-14123&p=f&t=PGkJAfFMptb9FF1Q-0)`}}}},j=[`Interaction`,`BasicUsage`,`Label`,`MaskIncludesLetters`,`Placeholder`,`Definitions`,`Unmask`]})))()}M();export{u as BasicUsage,p as Definitions,h as Interaction,v as Label,x as MaskIncludesLetters,w as Placeholder,O as Unmask,j as __namedExportsOrder,A as default};