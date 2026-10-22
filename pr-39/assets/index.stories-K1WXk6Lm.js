import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,ji as n,lt as r,xa as i,yn as a}from"./preview-DREXElCf.js";import{l as o,n as s,t as c}from"./useForm-CIBaKh93.js";import{t as l}from"./Form-7JFqzZ7E.js";import{n as u,t as d}from"./FormSubmitButton-C9hua8pf.js";import{n as f,t as p}from"./arrayItem-h1FfuYi5.js";import{n as m,t as h}from"./object-CXqDZ5YO.js";import{n as g,t as _}from"./array-FVt_FltB.js";import{n as v,t as y}from"./min-D-SG7F_b.js";import{n as b,t as x}from"./string-hxNUuZd8.js";import{n as S,t as C}from"./FormSelect-DgGw3xf7.js";var w,T,E,D,O,k,A;function j(){return(j=e((()=>{g(),f(),y(),h(),x(),t(),a(),l(),d(),c(),S(),w=i(),T=[{id:`1`,label:`Счёт-фактура`},{id:`2`,label:`Универсальный передаточный документ`},{id:`3`,label:`Акт выполненных работ`},{id:`4`,label:`Товарная накладная`},{id:`5`,label:`Счёт на оплату`},{id:`6`,label:`Договор поставки`},{id:`7`,label:`Акт сверки`},{id:`8`,label:`Корректировочный счёт-фактура`}],E=[{id:`1`,label:`ООО «Альфа»`},{id:`2`,label:`АО «Вега»`},{id:`3`,label:`ООО «Сигма»`},{id:`4`,label:`ИП Петров С. И.`},{id:`5`,label:`ООО «Северная торговая компания»`}],D=m({id:b(),label:b()}),O=m({multiline:_(v(1),p(D)),single:D}),k=n(r)`
  width: 300px;
`,A=()=>{let e=s({defaultValues:{multiline:[]},validationSchema:O}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,w.jsx)(o,{form:e,onSubmit:t,children:(0,w.jsxs)(k,{container:!0,children:[(0,w.jsx)(C,{control:e.control,name:`multiline`,title:`Form select field`,multiple:!0,isEnableAllSelection:!0,options:E}),(0,w.jsx)(C,{control:e.control,name:`single`,title:`Form select field`,options:T}),(0,w.jsx)(u,{children:`Submit`})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    defaultValues: {
      multiline: []
    },
    validationSchema
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormSelect control={form.control} name="multiline" title="Form select field" multiple isEnableAllSelection options={MULTIPLE_OPTIONS} />
        <FormSelect control={form.control} name="single" title="Form select field" options={OPTIONS} />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{S(),j(),M={title:`React-Hook-Form/FormSelect`,component:C,parameters:{docs:{description:{component:`Обертка [Select](/story/form-controls-select--docs) для react-hook-form`}}}},N=[`BasicUsage`]})))()}P();export{A as BasicUsage,N as __namedExportsOrder,M as default};