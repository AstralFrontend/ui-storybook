import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,ya as o,yn as s}from"./preview-DeB2xvR7.js";import{l as c,n as l,t as u,u as d}from"./useForm-CZWvdBHb.js";import{n as f,t as p}from"./FormSubmitButton-DZcSDTAF.js";import{t as m}from"./FormTextField-Dcsqpvqp.js";import{t as h}from"./FormTextField-DlHea0Ek.js";import{i as g,n as _,r as v,t as y}from"./object-CXqDZ5YO.js";import{n as b,t as x}from"./email-5PpKcOpy.js";import{n as S,t as C}from"./mobilePhone-CTdxILNS.js";import{n as w,t as T}from"./string-hxNUuZd8.js";import{t as E}from"./FormEmailField-EiX4-x9a.js";import{n as D,t as O}from"./FormMobilePhoneField-PHcvA3Zg.js";import{t as k}from"./FormMobilePhoneField-DsxaUO5H.js";var A,j,M,N,P,F,I;function L(){return(L=e((()=>{b(),C(),y(),v(),T(),t(),s(),n(),D(),O(),p(),h(),u(),d(),A=o(),j={title:`React-Hook-Form/Form`,component:c},M=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  width: min(600px, 100%);
  height: 100%;
`,N=i(f)`
  margin-top: ${({theme:e})=>e.spacing(2)};
`,P=_({lastName:w(),name:w(),patronymic:g(w()),phone:w(S()),email:w(x())}),F=()=>{let e=l({validationSchema:P});return(0,A.jsxs)(M,{children:[(0,A.jsx)(r,{variant:`h3`,children:`Личные и контактные данные`}),(0,A.jsxs)(c,{noValidate:!0,form:e,onSubmit:e.handleSubmit(e=>new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>{window.alert(JSON.stringify(e,null,4))})),children:[(0,A.jsxs)(a,{container:!0,rowSpacing:2,columnSpacing:2,columns:3,children:[(0,A.jsx)(m,{required:!0,label:`Фамилия`,control:e.control,name:`lastName`}),(0,A.jsx)(m,{required:!0,label:`Имя`,control:e.control,name:`name`}),(0,A.jsx)(m,{label:`Отчество`,control:e.control,name:`patronymic`}),(0,A.jsx)(k,{required:!0,label:`Номер телефона`,control:e.control,name:`phone`}),(0,A.jsx)(E,{required:!0,label:`Почта`,control:e.control,name:`email`})]}),(0,A.jsx)(N,{children:`Отправить`})]})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 2000);
  }).then(() => {
    window.alert(JSON.stringify(values, null, 4));
  });
  return <FormWrapper>
      <Typography variant="h3">Личные и контактные данные</Typography>
      <Form noValidate form={form} onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container rowSpacing={2} columnSpacing={2} columns={3}>
          <FormTextField required label="Фамилия" control={form.control} name="lastName" />
          <FormTextField required label="Имя" control={form.control} name="name" />
          <FormTextField label="Отчество" control={form.control} name="patronymic" />
          <FormMobilePhoneField required label="Номер телефона" control={form.control} name="phone" />
          <FormEmailField required label="Почта" control={form.control} name="email" />
        </Grid>
        <StyledFormSubmitButton>Отправить</StyledFormSubmitButton>
      </Form>
    </FormWrapper>;
}`,...F.parameters?.docs?.source}}},I=[`BasicUsage`]})))()}L();export{F as BasicUsage,I as __namedExportsOrder,j as default};