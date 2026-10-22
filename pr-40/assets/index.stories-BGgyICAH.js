import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,xa as o,yn as s}from"./preview-DbSmHAJq.js";import{c,l,n as u,s as d,t as f}from"./useForm-ZMcEWqqH.js";import{t as p}from"./Form-1PU5JWEw.js";import{n as m,t as h}from"./FormSubmitButton--BZNa_mJ.js";import{t as g}from"./FormTextField-Cbu9AYx_.js";import{t as _}from"./FormTextField-ChQ8UHJQ.js";import{i as v,n as y,r as b,t as x}from"./object-CXqDZ5YO.js";import{n as S,t as C}from"./email-5PpKcOpy.js";import{n as w,t as T}from"./mobilePhone-CTdxILNS.js";import{n as E,t as D}from"./string-hxNUuZd8.js";import{t as O}from"./FormEmailField-C1Jd5Jui.js";import{n as k,t as A}from"./FormMobilePhoneField-Dq09vMHJ.js";import{t as j}from"./FormMobilePhoneField-CzXMZlqd.js";var M,N,P,F,I;function L(){return(L=e((()=>{S(),T(),x(),b(),D(),t(),s(),n(),p(),k(),A(),h(),_(),f(),c(),M=o(),N=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  width: min(600px, 100%);
  height: 100%;
`,P=i(m)`
  margin-top: ${({theme:e})=>e.spacing(2)};
`,F=y({lastName:E(),name:E(),patronymic:v(E()),phone:E(w()),email:E(C())}),I=()=>{let e=u({validationSchema:F});return(0,M.jsxs)(N,{children:[(0,M.jsx)(r,{variant:`h3`,children:`Личные и контактные данные`}),(0,M.jsx)(d,{size:`small`,hideHelperText:!0,children:(0,M.jsxs)(l,{noValidate:!0,form:e,onSubmit:e.handleSubmit(e=>new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>{window.alert(JSON.stringify(e,null,4))})),children:[(0,M.jsxs)(a,{container:!0,rowSpacing:2,columnSpacing:2,columns:3,children:[(0,M.jsx)(g,{required:!0,label:`Фамилия`,control:e.control,name:`lastName`}),(0,M.jsx)(g,{required:!0,label:`Имя`,control:e.control,name:`name`}),(0,M.jsx)(g,{label:`Отчество`,control:e.control,name:`patronymic`}),(0,M.jsx)(j,{required:!0,label:`Номер телефона`,control:e.control,name:`phone`}),(0,M.jsx)(O,{required:!0,label:`Почта`,control:e.control,name:`email`})]}),(0,M.jsx)(P,{children:`Отправить`})]})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
      <FormControlProvider size="small" hideHelperText>
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
      </FormControlProvider>
    </FormWrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{L(),R={title:`React-Hook-Form/FormControlProvider`,parameters:{docs:{description:{component:`Провайдер контекста для группы элементов формы.
Оборачивает группу элементов предоставляет им общую конфигурацию.`}}}},z=[`BasicUsage`]})))()}B();export{I as BasicUsage,z as __namedExportsOrder,R as default};