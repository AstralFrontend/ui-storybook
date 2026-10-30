import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,ji as n,lt as r,ya as i,yn as a}from"./preview-BKcIDY9K.js";import{t as o}from"./ToggleButton-CZmrg4D9.js";import{t as s}from"./ToggleButton-B-FhLYXl.js";import{l as c,n as l,t as u}from"./useForm-DV-Fe4XK.js";import{t as d}from"./Form-CVxwgspb.js";import{n as f,t as p}from"./FormSubmitButton-DeBT9cVB.js";import{n as m,t as h}from"./object-2y2TfwoJ.js";import{n as g,t as _}from"./string-BHlgssBa.js";import{n as v,t as y}from"./FormToggleButtonGroup-T1gA3l7G.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{h(),_(),t(),a(),s(),d(),p(),u(),v(),b=i(),x={title:`React-Hook-Form/FormToggleButtonGroup`,component:y,parameters:{docs:{description:{component:`Обертка [ToggleButtonGroup](/story/buttons-toggleButtonGroup--docs) для react-hook-form`}}}},S=m({intelligence:g()}),C=n(r)`
  gap: ${({theme:e})=>e.spacing(4)};

  width: auto;
`,w=()=>{let e=l({validationSchema:S}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,b.jsx)(c,{form:e,onSubmit:t,children:(0,b.jsxs)(C,{container:!0,children:[(0,b.jsxs)(y,{name:`intelligence`,control:e.control,children:[(0,b.jsx)(o,{value:`Юридическое лицо`,children:`Юридическое лицо`}),(0,b.jsx)(o,{value:`Физическое лицо`,children:`Физическое лицо`}),(0,b.jsx)(o,{value:`Индивидуальный предприниматель`,children:`Индивидуальный предприниматель`})]}),(0,b.jsx)(f,{children:`Submit`})]})})},T=()=>{let e=l({validationSchema:S}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,b.jsx)(c,{form:e,onSubmit:t,children:(0,b.jsxs)(C,{container:!0,children:[(0,b.jsxs)(y,{isDisabledErrorText:!0,name:`intelligence`,control:e.control,children:[(0,b.jsx)(o,{value:`Юридическое лицо`,children:`Юридическое лицо`}),(0,b.jsx)(o,{value:`Физическое лицо`,children:`Физическое лицо`}),(0,b.jsx)(o,{value:`Индивидуальный предприниматель`,children:`Индивидуальный предприниматель`})]}),(0,b.jsx)(f,{children:`Submit`})]})})},E=[`BasicUsage`,`DisableHelperText`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}}})))()}D();export{w as BasicUsage,T as DisableHelperText,E as __namedExportsOrder,x as default};