import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ji as n,xa as r,yn as i}from"./preview-D2nXkflB.js";import{n as a,t as o}from"./TextArea-DLsXQhO4.js";var s;function c(){return(c=e((()=>{i(),s=n.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};

  width: min(700px, 100%);

  & > * {
    flex: 1 1 0;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
  }
`})))()}function l(){return(l=e((()=>{c()})))()}var u,d;function f(){return(f=e((()=>{a(),l(),u=r(),d=()=>(0,u.jsxs)(s,{children:[(0,u.jsx)(o,{label:`Basic`,placeholder:`Введите дополнительную информацию о себе`}),(0,u.jsx)(o,{label:`Disabled`,disabled:!0,placeholder:`Введите дополнительную информацию о себе`})]}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea label="Basic" placeholder="Введите дополнительную информацию о себе" />
    <TextArea label="Disabled" disabled placeholder="Введите дополнительную информацию о себе" />
  </Wrapper>`,...d.parameters?.docs?.source}}}})))()}var p,m,h;function g(){return(g=e((()=>{p=t(),a(),l(),m=r(),h=()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(s,{children:(0,m.jsx)(o,{label:`Доп. информация`,value:e,onChange:e=>{t(e.target.value)},placeholder:`Введите дополнительную информацию о себе`})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <Wrapper>
      <TextArea label="Доп. информация" value={value} onChange={handleChange} placeholder="Введите дополнительную информацию о себе" />
    </Wrapper>;
}`,...h.parameters?.docs?.source}}}})))()}var _,v;function y(){return(y=e((()=>{a(),l(),_=r(),v=()=>(0,_.jsx)(s,{children:(0,_.jsx)(o,{disabled:!0,helperText:`Поле не доступно`,label:`Доп. информация`,placeholder:`Введите дополнительную информацию о себе`})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea disabled helperText="Поле не доступно" label="Доп. информация" placeholder="Введите дополнительную информацию о себе" />
  </Wrapper>`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{a(),b=r(),x=()=>(0,b.jsx)(o,{fullWidth:!0,label:`Длинное поле`,placeholder:`Введите дополнительную информацию о себе`}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <TextArea fullWidth label="Длинное поле" placeholder="Введите дополнительную информацию о себе" />`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{a(),l(),C=r(),w=()=>(0,C.jsxs)(s,{children:[(0,C.jsx)(o,{helperText:`Описание поле`,label:`Доп. информация`}),(0,C.jsx)(o,{error:!0,helperText:`Описание ошибки поля`,label:`Доп. информация`}),(0,C.jsx)(o,{success:!0,helperText:`Отображение success статуса`,label:`Доп. информация`})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea helperText="Описание поле" label="Доп. информация" />
    <TextArea error helperText="Описание ошибки поля" label="Доп. информация" />
    <TextArea success helperText="Отображение success статуса" label="Доп. информация" />
  </Wrapper>`,...w.parameters?.docs?.source}}}})))()}var E;function D(){return(D=e((()=>{E={args:{label:`Комментарии`,helperText:`Укажите любую доп. информацию`},parameters:{docs:{disable:!0}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Комментарии',
    helperText: 'Укажите любую доп. информацию'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...E.parameters?.docs?.source}}}})))()}var O,k;function A(){return(A=e((()=>{a(),l(),O=r(),k=()=>(0,O.jsx)(s,{children:(0,O.jsx)(o,{label:`Доп. информация`,placeholder:`Введите дополнительную информацию о себе`})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea label="Доп. информация" placeholder="Введите дополнительную информацию о себе" />
  </Wrapper>`,...k.parameters?.docs?.source}}}})))()}var j,M;function N(){return(N=e((()=>{a(),l(),j=r(),M=()=>(0,j.jsx)(s,{children:(0,j.jsx)(o,{required:!0,label:`Доп. информация`,placeholder:`Введите дополнительную информацию о себе`})}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea required label="Доп. информация" placeholder="Введите дополнительную информацию о себе" />
  </Wrapper>`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{a(),l(),P=r(),F=()=>(0,P.jsxs)(s,{children:[(0,P.jsx)(o,{required:!0,error:!0,helperText:`Обязательно`,label:`Информация об абоненте`,placeholder:`Введите информацию об абоненте`}),(0,P.jsx)(o,{success:!0,helperText:`Удачно завершился процесс проверки ключа`,label:`Электронный ключ`,placeholder:`Введите свой электронный ключ`})]}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <TextArea required error helperText="Обязательно" label="Информация об абоненте" placeholder="Введите информацию об абоненте" />
    <TextArea success helperText="Удачно завершился процесс проверки ключа" label="Электронный ключ" placeholder="Введите свой электронный ключ" />
  </Wrapper>`,...F.parameters?.docs?.source}}}})))()}var L,R;function z(){return(z=e((()=>{a(),f(),g(),y(),S(),T(),D(),A(),N(),I(),L={title:`Form-Controls/TextArea`,component:o,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=438-317251&t=VCeK6Au8Y4oWNZJZ-0)`}}}},R=[`Interaction`,`BasicUsage`,`Placeholder`,`Controlled`,`Statuses`,`Required`,`FullWidth`,`HelperText`,`Disabled`]})))()}z();export{d as BasicUsage,h as Controlled,v as Disabled,x as FullWidth,w as HelperText,E as Interaction,k as Placeholder,M as Required,F as Statuses,R as __namedExportsOrder,L as default};