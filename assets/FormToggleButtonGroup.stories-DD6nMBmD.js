import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,ji as n,lt as r,xa as i,yn as a}from"./preview-lt0cavAw.js";import{t as o}from"./ToggleButton-B6eI_Guo.js";import{t as s}from"./ToggleButton-VlN33IeT.js";import{l as c,n as l,t as u}from"./useForm-CT7s4M1k.js";import{t as d}from"./Form-CKMiScbf.js";import{n as f,t as p}from"./FormSubmitButton-CYg1Zs8v.js";import{n as m,t as h}from"./object-CXqDZ5YO.js";import{n as g,t as _}from"./string-hxNUuZd8.js";import{n as v,t as y}from"./FormToggleButtonGroup-DdfdVHjd.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{h(),_(),t(),a(),s(),d(),p(),u(),v(),b=i(),x={title:`React-Hook-Form/FormToggleButtonGroup`,component:y,parameters:{docs:{description:{component:`Обертка [ToggleButtonGroup](/story/buttons-toggleButtonGroup--docs) для react-hook-form`}}}},S=m({intelligence:g()}),C=n(r)`
  gap: ${({theme:e})=>e.spacing(4)};

  width: auto;
`,w=()=>{let e=l({validationSchema:S}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,b.jsx)(c,{form:e,onSubmit:t,children:(0,b.jsxs)(C,{container:!0,children:[(0,b.jsxs)(y,{name:`intelligence`,control:e.control,children:[(0,b.jsx)(o,{value:`Юридическое лицо`,children:`Юридическое лицо`}),(0,b.jsx)(o,{value:`Физическое лицо`,children:`Физическое лицо`}),(0,b.jsx)(o,{value:`Индивидуальный предприниматель`,children:`Индивидуальный предприниматель`})]}),(0,b.jsx)(f,{children:`Submit`})]})})},T=()=>{let e=l({validationSchema:S}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,b.jsx)(c,{form:e,onSubmit:t,children:(0,b.jsxs)(C,{container:!0,children:[(0,b.jsxs)(y,{isDisabledErrorText:!0,name:`intelligence`,control:e.control,children:[(0,b.jsx)(o,{value:`Юридическое лицо`,children:`Юридическое лицо`}),(0,b.jsx)(o,{value:`Физическое лицо`,children:`Физическое лицо`}),(0,b.jsx)(o,{value:`Индивидуальный предприниматель`,children:`Индивидуальный предприниматель`})]}),(0,b.jsx)(f,{children:`Submit`})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
      <GridContainer container>
        <FormToggleButtonGroup name="intelligence" control={form.control}>
          <ToggleButton value={ToggleValues.First}>
            {ToggleValues.First}
          </ToggleButton>
          <ToggleButton value={ToggleValues.Second}>
            {ToggleValues.Second}
          </ToggleButton>
          <ToggleButton value={ToggleValues.Third}>
            {ToggleValues.Third}
          </ToggleButton>
        </FormToggleButtonGroup>
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
      <GridContainer container>
        <FormToggleButtonGroup<FormValues, true> isDisabledErrorText name="intelligence" control={form.control}>
          <ToggleButton value={ToggleValues.First}>
            {ToggleValues.First}
          </ToggleButton>
          <ToggleButton value={ToggleValues.Second}>
            {ToggleValues.Second}
          </ToggleButton>
          <ToggleButton value={ToggleValues.Third}>
            {ToggleValues.Third}
          </ToggleButton>
        </FormToggleButtonGroup>
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...T.parameters?.docs?.source}}},E=[`BasicUsage`,`DisableHelperText`]})))()}D();export{w as BasicUsage,T as DisableHelperText,E as __namedExportsOrder,x as default};