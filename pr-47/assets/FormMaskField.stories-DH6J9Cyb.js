import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,lt as n,ya as r}from"./preview-Bh-2MF8C.js";import{l as i,n as a,t as o}from"./useForm-BB7hgIK0.js";import{t as s}from"./Form-C80Il5PV.js";import{n as c,t as l}from"./FormSubmitButton-r8TrgpzA.js";import{n as u,t as d}from"./object-2y2TfwoJ.js";import{n as f,t as p}from"./string-BHlgssBa.js";import{n as m,t as h}from"./FormMaskField-CBL9b2zh.js";var g,_,v,y,b;function x(){return(x=e((()=>{d(),p(),t(),s(),l(),o(),m(),g=r(),_={title:`React-Hook-Form/FormMaskField`,component:h,parameters:{docs:{description:{component:`Обертка [MaskField](/story/form-controls-maskField--docs) для react-hook-form`}}}},v=u({maskFieldId:f()}),y=()=>{let e=a({validationSchema:v}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(i,{form:e,onSubmit:t,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(h,{required:!0,label:`Ввод ID`,name:`maskFieldId`,mask:`aa.0000-000`,placeholder:`aa.0000-000`,control:e.control}),(0,g.jsx)(c,{children:`Отправить`})]})})},b=[`BasicUsage`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
        <FormMaskField required label="Ввод ID" name="maskFieldId" mask="aa.0000-000" placeholder="aa.0000-000" control={form.control} />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as BasicUsage,b as __namedExportsOrder,_ as default};