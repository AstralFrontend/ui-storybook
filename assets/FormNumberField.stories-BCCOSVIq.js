import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r}from"./preview-BYX69pdz.js";import{l as i,n as a,t as o}from"./useForm-B-mcOa1N.js";import{t as s}from"./Form-CiRjDpv1.js";import{n as c,t as l}from"./FormSubmitButton-BFPYD-RU.js";import{d as u,f as d,n as f,t as p}from"./createGuard-Bnbb_ytZ.js";import{n as m,t as h}from"./object-CXqDZ5YO.js";import{n as g,t as _}from"./compose-BaXbo_LB.js";import{n as v,t as y}from"./FormNumberField-CdLdd2WC.js";var b,x,S;function C(){return(C=e((()=>{d(),b={code:u(`number-type`),message:`Не число`},x={code:u(`number-nan`),message:`Некорректное число`},S={code:u(`number-infinity`),message:`Бесконечное число`}})))()}var w;function T(){return(T=e((()=>{g(),f(),C(),w=(...e)=>p((t,n,{typeErrorMessage:r,nanErrorMessage:i,infinityErrorMessage:a})=>typeof t==`number`?Number.isNaN(t)?n.createError(Object.assign(Object.assign({},x),{message:i||x.message})):Number.isFinite(t)?_(...e)(t,n):n.createError(Object.assign(Object.assign({},S),{message:a||S.message})):n.createError(Object.assign(Object.assign({},b),{message:r||b.message})))})))()}var E,D,O,k,A;function j(){return(j=e((()=>{T(),h(),t(),s(),y(),l(),o(),E=r(),D={title:`React-Hook-Form/FormNumberField`,component:v,parameters:{docs:{description:{component:`Обертка [NumberField](/story/form-controls-numberField--docs) для react-hook-form`}}}},O=m({number:w()}),k=()=>{let e=a({validationSchema:O}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,E.jsx)(i,{form:e,onSubmit:t,children:(0,E.jsxs)(n,{container:!0,spacing:2,children:[(0,E.jsx)(v,{label:`Количество лицензий`,name:`number`}),(0,E.jsx)(c,{children:`Отправить`})]})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormNumberField label="Количество лицензий" name="number" />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...k.parameters?.docs?.source}}},A=[`BasicUsage`]})))()}j();export{k as BasicUsage,A as __namedExportsOrder,D as default};