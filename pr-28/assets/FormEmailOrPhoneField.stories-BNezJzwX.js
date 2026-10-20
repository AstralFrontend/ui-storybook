import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ln as n,xa as r}from"./preview-C35OHnlK.js";import{n as i,t as a}from"./useForm-CKIfQUEy.js";import{n as o,t as s}from"./FormSubmitButton-SUtftt44.js";import{d as c,f as l,i as u,n as d,r as f,t as p}from"./createGuard-Bnbb_ytZ.js";import{n as m,t as h}from"./object-CXqDZ5YO.js";import{n as g,t as _}from"./email-5PpKcOpy.js";import{n as v,t as y}from"./mobilePhone-CTdxILNS.js";import{n as b,t as x}from"./FormEmailOrPhoneField-CMX3ePpD.js";import{n as S,t as C}from"./docs-CUH4JG0P.js";var w,T;function E(){return(E=e((()=>{l(),u(),w={code:c(`mobileOrPhone`),message:`Некорректный формат`},T={code:c(`mobileOrPhone-required`),message:f.message}})))()}var D;function O(){return(O=e((()=>{d(),g(),y(),E(),D=e=>p((t,n,{isOptional:r})=>{let i=t&&typeof t==`object`&&`value`in t&&!t.value,a=!t||typeof t!=`object`||!(`value`in t)||!(`normalizedValue`in t)||!(`type`in t);if(i&&r)return;if(i)return n.createError({code:T.code,message:T.message});let o=n.createError({code:w.code,message:e?.message||w.message});if(a)return o;let{value:s=``,normalizedValue:c=``,type:l}=t;return l===`email`?_(e)(s,n):l===`phone`?v(e)(c,n):o})})))()}var k,A,j,M,N,P;function F(){return(F=e((()=>{O(),h(),t(),C(),s(),a(),b(),k=r(),A={title:`React-Hook-Form/FormEmailOrPhoneField`,component:x,parameters:{docs:{description:{component:`Обертка [EmailOrPhoneField](/story/form-controls-emailOrPhoneField--docs) для react-hook-form`}}}},j=m({emailOrPhone:D()}),M=()=>{let e=i({validationSchema:j});return(0,k.jsxs)(S,{form:e,children:[(0,k.jsx)(x,{required:!0,label:`Email или телефон`,name:`emailOrPhone`,control:e.control}),(0,k.jsx)(o,{children:`Отправить`})]})},N=()=>{let e=i({reValidateMode:`onChange`,validationSchema:j});return(0,k.jsxs)(S,{form:e,children:[(0,k.jsx)(x,{required:!0,label:`Email или телефон`,name:`emailOrPhone`,control:e.control}),(0,k.jsx)(n,{onClick:()=>{e.setValue(`emailOrPhone`,{value:`+7 (910) 999-99-99`,normalizedValue:`79109999999`,type:`phone`})},children:`Set text`})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  return <FormStoryContainer form={form}>
      <FormEmailOrPhoneField required label="Email или телефон" name="emailOrPhone" control={form.control} />
      <FormSubmitButton>Отправить</FormSubmitButton>
    </FormStoryContainer>;
}`,...M.parameters?.docs?.source},description:{story:`Поле для ввода email или мобильного номера телефона
- Форматирует значение телефона к виду +7 (999) 999-99-99 на onBlur
- Поддерживает ввод телефона с префиксами +7 и 8, произвольной маской
- Работает с правилом валидации emailOrPhone()
- Работает с объектом формата
{ value?: string, normalizedValue?: string, type: 'email' | 'phone' | 'unknown' }`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    reValidateMode: 'onChange',
    validationSchema
  });
  const handleButtonClick = () => {
    form.setValue('emailOrPhone', {
      value: '+7 (910) 999-99-99',
      normalizedValue: '79109999999',
      type: 'phone'
    });
  };
  return <FormStoryContainer form={form}>
      <FormEmailOrPhoneField required label="Email или телефон" name="emailOrPhone" control={form.control} />

      <Button onClick={handleButtonClick}>Set text</Button>
    </FormStoryContainer>;
}`,...N.parameters?.docs?.source},description:{story:`Можно задать значение в форме и инпут подхватит изменения`,...N.parameters?.docs?.description}}},P=[`BasicUsage`,`ControlledForm`]})))()}F();export{M as BasicUsage,N as ControlledForm,P as __namedExportsOrder,A as default};