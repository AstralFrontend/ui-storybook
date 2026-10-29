import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,lt as n,ya as r}from"./preview-BY-1Z8yT.js";import{n as i,t as a}from"./FormCodeField-BCE7Fhgh.js";import{l as o,n as s,t as c}from"./useForm-BZt7q15o.js";import{t as l}from"./Form-BG-BCywa.js";import{n as u,t as d}from"./FormSubmitButton-DwdP8_Mo.js";import{n as f,t as p}from"./object-2y2TfwoJ.js";import{n as m,t as h}from"./string-BHlgssBa.js";var g,_,v,y,b;function x(){return(x=e((()=>{p(),h(),t(),l(),d(),c(),i(),g=r(),_={title:`React-Hook-Form/FormCodeField`,component:a,parameters:{docs:{description:{component:`Обертка [CodeField](/story/form-controls-codeField--docs) для react-hook-form`}}}},v=f({code:m()}),y=()=>{let e=s({validationSchema:v,defaultValues:{code:`123456`}}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(o,{form:e,onSubmit:t,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(a,{codeLength:6,name:`code`,control:e.control}),(0,g.jsx)(u,{children:`Сохранить`})]})})},b=[`BasicUsage`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      code: '123456'
    }
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormCodeField codeLength={6} name="code" control={form.control} />
        <FormSubmitButton>Сохранить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as BasicUsage,b as __namedExportsOrder,_ as default};