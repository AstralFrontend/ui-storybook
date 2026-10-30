import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,lt as n,ya as r}from"./preview-Z1rCd2zM.js";import{l as i,n as a,t as o}from"./useForm-CBXlRCxr.js";import{t as s}from"./Form-DxoXiNPp.js";import{n as c,t as l}from"./FormSubmitButton-CsEUfk3-.js";import{n as u,t as d}from"./FormTextField-BHnYUn2G.js";import{n as f,t as p}from"./object-2y2TfwoJ.js";import{n as m,t as h}from"./string-BHlgssBa.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{p(),h(),t(),s(),l(),o(),u(),g=r(),_={title:`React-Hook-Form/FormTextField`,component:d,parameters:{docs:{description:{component:`Обертка [TextField](/story/form-controls-textField--docs) для react-hook-form`}}}},v=f({name:m()}),y=()=>{let e=a({validationSchema:v}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(i,{form:e,onSubmit:t,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(d,{required:!0,label:`Имя`,name:`name`,control:e.control}),(0,g.jsx)(c,{children:`Отправить`})]})})},b=()=>{let e=a({validationSchema:v,defaultValues:{name:`  Василий`}}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(i,{form:e,onSubmit:t,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(d,{required:!0,label:`Имя`,name:`name`,control:e.control}),(0,g.jsx)(c,{children:`Отправить`})]})})},x=[`BasicUsage`,`Trim`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
        <FormTextField required label="Имя" name="name" control={form.control} />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      name: '  Василий'
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
        <FormTextField required label="Имя" name="name" control={form.control} />
        <FormSubmitButton>Отправить</FormSubmitButton>
      </Grid>
    </Form>;
}`,...b.parameters?.docs?.source},description:{story:"Prop `trimmed` удаляет пробелы при onBlur в начале и конце строки.\nПо-дефолту данная фича включена.",...b.parameters?.docs?.description}}}})))()}S();export{y as BasicUsage,b as Trim,x as __namedExportsOrder,_ as default};