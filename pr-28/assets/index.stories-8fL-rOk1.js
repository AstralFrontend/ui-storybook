import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-C162HGvI.js";import{n as r,t as i}from"./EmailOrPhoneField-Bt9tUOFP.js";var a,o,s;function c(){return(c=e((()=>{a=t(),r(),o=n(),s=()=>{let[e,t]=(0,a.useState)({value:``,normalizedValue:``,type:`unknown`});return(0,o.jsx)(i,{label:`email/phone`,value:e,onChange:e=>{t(e)}})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<EmailOrPhoneFieldValue>({
    value: '',
    normalizedValue: '',
    type: 'unknown'
  });
  const handleChange = (newValue: EmailOrPhoneFieldValue) => {
    setValue(newValue);
  };
  return <EmailOrPhoneField label="email/phone" value={value} onChange={handleChange} />;
}`,...s.parameters?.docs?.source},description:{story:`Поле для ввода email или мобильного номера телефона
- Форматирует значение телефона к виду +7 (999) 999-99-99 на onBlur
- Поддерживает ввод телефона с префиксами +7 и 8, произвольной маской
- Работает с объектом формата
{ value?: string, normalizedValue?: string, type: 'email' | 'phone' | 'unknown' }`,...s.parameters?.docs?.description}}};try{s.displayName=`BasicUsage`,s.__docgenInfo={description:`Поле для ввода email или мобильного номера телефона
- Форматирует значение телефона к виду +7 (999) 999-99-99 на onBlur
- Поддерживает ввод телефона с префиксами +7 и 8, произвольной маской
- Работает с объектом формата
{ value?: string, normalizedValue?: string, type: 'email' | 'phone' | 'unknown' }`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/EmailOrPhoneField/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var l;function u(){return(u=e((()=>{l={args:{label:`Email или телефон`,helperText:`Введите email или телефон`},parameters:{docs:{disable:!0}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email или телефон',
    helperText: 'Введите email или телефон'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}var d,f;function p(){return(p=e((()=>{r(),c(),u(),d={title:`Form-Controls/EmailOrPhoneField`,component:i,parameters:{docs:{description:{component:`EmailOrPhoneField аналогичен компоненту [TextField](/story/form-controls-textField--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=82-14123)`}}}},f=[`Interaction`,`BasicUsage`]})))()}p();export{s as BasicUsage,l as Interaction,f as __namedExportsOrder,d as default};