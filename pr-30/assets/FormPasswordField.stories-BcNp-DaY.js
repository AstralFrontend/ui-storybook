import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r}from"./preview-CiiswFkd.js";import{l as i,n as a,t as o}from"./useForm-W9VFg0_E.js";import{t as s}from"./Form-D_syf6pR.js";import{n as c,t as l}from"./FormSubmitButton-8xfpzjHn.js";import{n as u,t as d}from"./object-CXqDZ5YO.js";import{n as f,t as p}from"./string-hxNUuZd8.js";import{n as m,t as h}from"./FormPasswordField-eA9PSP6q.js";var g,_,v,y,b;function x(){return(x=e((()=>{d(),p(),t(),s(),l(),o(),m(),g=r(),_={title:`React-Hook-Form/FormPasswordField`,component:h,parameters:{docs:{description:{component:`Обертка [PasswordField](/story/form-controls-passwordField--docs) для react-hook-form`}}}},v=u({password:f()}),y=()=>{let e=a({validationSchema:v}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(i,{form:e,onSubmit:t,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(h,{required:!0,label:`Пароль`,name:`password`,control:e.control}),(0,g.jsx)(c,{children:`Сохранить`})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
        <FormPasswordField required label="Пароль" name="password" control={form.control} />
        <FormSubmitButton>Сохранить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...y.parameters?.docs?.source}}},b=[`BasicUsage`]})))()}x();export{y as BasicUsage,b as __namedExportsOrder,_ as default};