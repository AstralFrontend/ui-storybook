import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ya as t}from"./preview--MgaEBgF.js";import{n,t as r}from"./useForm-CbXY0uUH.js";import{n as i,t as a}from"./FormSubmitButton-DPlH_EgA.js";import{n as o,t as s}from"./object-2y2TfwoJ.js";import{n as c,t as l}from"./email-DcalSoEw.js";import{n as u,t as d}from"./string-BHlgssBa.js";import{n as f,t as p}from"./FormEmailField-D6evTkYK.js";import{n as m,t as h}from"./docs-BEuVzunl.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{c(),s(),d(),h(),a(),r(),f(),g=t(),_={title:`React-Hook-Form/FormEmailField`,component:p,parameters:{docs:{description:{component:`Обертка [EmailField](/story/form-controls-emailField--docs) для react-hook-form`}}}},v=o({email:u(l())}),y=()=>{let e=n({validationSchema:v});return(0,g.jsxs)(m,{form:e,children:[(0,g.jsx)(p,{required:!0,label:`Email`,name:`email`,control:e.control}),(0,g.jsx)(i,{children:`Отправить`})]})},b=()=>{let e=n({defaultValues:{email:`email@email.com`},validationSchema:v});return(0,g.jsxs)(m,{form:e,children:[(0,g.jsx)(p,{required:!0,label:`Email`,name:`email`,control:e.control}),(0,g.jsx)(i,{children:`Отправить`})]})},x=[`BasicUsage`,`Trim`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  return <FormStoryContainer form={form}>
      <FormEmailField required label="Email" name="email" control={form.control} />
      <FormSubmitButton>Отправить</FormSubmitButton>
    </FormStoryContainer>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: 'email@email.com'
    },
    validationSchema
  });
  return <FormStoryContainer form={form}>
      <FormEmailField required label="Email" name="email" control={form.control} />
      <FormSubmitButton>Отправить</FormSubmitButton>
    </FormStoryContainer>;
}`,...b.parameters?.docs?.source},description:{story:`Trim для \`<input type="email" />\` работает для тэга из коробки.
Есть особенности: в submit и state формы всегда будет попадать email без пробелов, но в input пробелы отображаются.
Описанное поведение реализовано браузерами и изменить его невозможно.`,...b.parameters?.docs?.description}}}})))()}S();export{y as BasicUsage,b as Trim,x as __namedExportsOrder,_ as default};