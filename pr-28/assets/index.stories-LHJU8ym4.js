import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,ji as n,lt as r,xa as i,yn as a}from"./preview-dprL7b9n.js";import{n as o,t as s}from"./RadioGroupField-Dp4zHAVg.js";import{l as c,n as l,t as u}from"./useForm-XKHdMJDc.js";import{t as d}from"./Form-Ba8pnuGx.js";import{n as f,t as p}from"./FormSubmitButton-7PGxhvsK.js";import{n as m,t as h}from"./object-CXqDZ5YO.js";import{n as g,t as _}from"./string-hxNUuZd8.js";import{n as v,t as y}from"./FormRadioGroup-DBtJpksC.js";var b,x,S,C;function w(){return(w=e((()=>{h(),_(),t(),s(),a(),d(),p(),u(),v(),b=i(),x=m({group1:g(),group2:g()}),S=n.div`
  height: 350px;
`,C=()=>{let e=l({validationSchema:x,defaultValues:{group1:`first`}}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,b.jsx)(S,{children:(0,b.jsx)(c,{form:e,onSubmit:t,children:(0,b.jsxs)(r,{container:!0,spacing:4,direction:`row`,children:[(0,b.jsxs)(y,{control:e.control,name:`group1`,groupLabel:`Column group`,children:[(0,b.jsx)(o,{label:`Radio 1`,value:`first`}),(0,b.jsx)(o,{label:`Radio 2`,value:`second`}),(0,b.jsx)(o,{label:`Radio 3`,value:`third`,disabled:!0,disabledReason:`Причина дизейбла`})]}),(0,b.jsxs)(y,{control:e.control,name:`group2`,row:!0,groupLabel:`Row group (required)`,required:!0,children:[(0,b.jsx)(o,{label:`Radio 1`,value:`first`}),(0,b.jsx)(o,{label:`Radio 2`,value:`second`}),(0,b.jsx)(o,{label:`Radio 3`,value:`third`,disabled:!0,disabledReason:`Причина дизейбла`})]}),(0,b.jsx)(f,{children:`Submit`})]})})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      group1: RadioValues.First
    }
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <ExampleWrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <Grid container spacing={4} direction="row">
          <FormRadioGroup control={form.control} name="group1" groupLabel="Column group">
            <RadioGroupField label="Radio 1" value={RadioValues.First} />
            <RadioGroupField label="Radio 2" value={RadioValues.Second} />
            <RadioGroupField label="Radio 3" value={RadioValues.Third} disabled disabledReason="Причина дизейбла" />
          </FormRadioGroup>

          <FormRadioGroup control={form.control} name="group2" row groupLabel="Row group (required)" required>
            <RadioGroupField label="Radio 1" value={RadioValues.First} />
            <RadioGroupField label="Radio 2" value={RadioValues.Second} />
            <RadioGroupField label="Radio 3" value={RadioValues.Third} disabled disabledReason="Причина дизейбла" />
          </FormRadioGroup>
          <FormSubmitButton>Submit</FormSubmitButton>
        </Grid>
      </Form>
    </ExampleWrapper>;
}`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{v(),w(),T={title:`React-Hook-Form/FormRadioGroup`,component:y,parameters:{docs:{description:{component:`Обертка [RadioGroup](/story/form-controls-radioGroup--docs) для react-hook-form`}}}},E=[`BasicUsage`]})))()}D();export{C as BasicUsage,E as __namedExportsOrder,T as default};