import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-BI9JLEFP.js";import{n as r,t as i}from"./PasswordField-DZj42FEO.js";var a,o;function s(){return(s=e((()=>{r(),a=t(),o=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{label:`Basic`}),(0,a.jsx)(i,{label:`Disabled`,disabled:!0})]}),o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <>
    <PasswordField label="Basic" />
    <PasswordField label="Disabled" disabled />
  </>`,...o.parameters?.docs?.source}}}})))()}var c,l,u;function d(){return(d=e((()=>{c=n(),r(),l=t(),u=()=>{let[e,t]=(0,c.useState)(`1234567890qwerty`);return(0,l.jsx)(i,{label:`Пароль`,value:e,onChange:e=>{t(e.target.value)}})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('1234567890qwerty');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <PasswordField label="Пароль" value={value} onChange={handleChange} />;
}`,...u.parameters?.docs?.source}}}})))()}var f,p;function m(){return(m=e((()=>{r(),f=t(),p=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{disabled:!0,helperText:`Поясняю поле`,label:`Пароль`,value:`1234567890qwerty`}),(0,f.jsx)(i,{disabled:!0,helperText:`Поясняю поле`,label:`Пароль`,showSymbols:!0,value:`1234567890qwerty`})]}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <>
    <PasswordField disabled helperText="Поясняю поле" label="Пароль" value="1234567890qwerty" />
    <PasswordField disabled helperText="Поясняю поле" label="Пароль" showSymbols={true} value="1234567890qwerty" />
  </>`,...p.parameters?.docs?.source}}}})))()}var h,g;function _(){return(_=e((()=>{r(),h=t(),g=()=>(0,h.jsx)(i,{fullWidth:!0,label:`Длинное поле`}),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <PasswordField fullWidth label="Длинное поле" />`,...g.parameters?.docs?.source}}}})))()}var v,y;function b(){return(b=e((()=>{r(),v=t(),y=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{helperText:`Поясняю поле`,label:`Пароль`}),(0,v.jsx)(i,{error:!0,helperText:`Поясняю ошибку поля`,label:`Пароль`}),(0,v.jsx)(i,{success:!0,helperText:`Поясняю success статус`,label:`Пароль`})]}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <>
    <PasswordField helperText="Поясняю поле" label="Пароль" />
    <PasswordField error helperText="Поясняю ошибку поля" label="Пароль" />
    <PasswordField success helperText="Поясняю success статус" label="Пароль" />
  </>`,...y.parameters?.docs?.source}}}})))()}var x;function S(){return(S=e((()=>{x={args:{label:`Пароль`,helperText:`Придумайте новый пароль`},parameters:{docs:{disable:!0}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    helperText: 'Придумайте новый пароль'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{r(),C=t(),w=()=>(0,C.jsx)(i,{required:!0,label:`Пароль`}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <PasswordField required label="Пароль" />`,...w.parameters?.docs?.source}}}})))()}var E,D;function O(){return(O=e((()=>{r(),E=t(),D=()=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{label:`Medium`}),(0,E.jsx)(i,{label:`Small`,size:`small`})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <>
    <PasswordField label="Medium" />
    <PasswordField label="Small" size="small" />
  </>`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{r(),k=t(),A=()=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i,{required:!0,error:!0,helperText:`Ошибка, проверка не пройдена`,label:`Пароль`}),(0,k.jsx)(i,{success:!0,helperText:`Проверка успешно пройдена`,label:`Пароль`})]}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <>
    <PasswordField required error helperText="Ошибка, проверка не пройдена" label="Пароль" />
    <PasswordField success helperText="Проверка успешно пройдена" label="Пароль" />
  </>`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{r(),s(),d(),m(),_(),b(),S(),T(),O(),j(),M={title:`Form-Controls/PasswordField`,component:i,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=385-20289&t=PGkJAfFMptb9FF1Q-0)`}}}},N=[`Interaction`,`BasicUsage`,`Controlled`,`Statuses`,`Required`,`Sizes`,`FullWidth`,`HelperText`,`Disabled`]})))()}P();export{o as BasicUsage,u as Controlled,p as Disabled,g as FullWidth,y as HelperText,x as Interaction,w as Required,D as Sizes,A as Statuses,N as __namedExportsOrder,M as default};