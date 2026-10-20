import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,xa as r}from"./preview-C35OHnlK.js";import{l as i,n as a,t as o}from"./useForm-CKIfQUEy.js";import{t as s}from"./Form-6h_yX80u.js";import{n as c,t as l}from"./FormSubmitButton-SUtftt44.js";import{n as u,t as d}from"./object-CXqDZ5YO.js";import{n as f,t as p}from"./array-FVt_FltB.js";import{n as m,t as h}from"./FormTreeLikeAutocomplete-BL8cL2IB.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{f(),d(),t(),s(),l(),o(),m(),g=r(),_={title:`React-Hook-Form/FormTreeLikeAutocomplete`,component:h,parameters:{docs:{description:{component:`Обертка [TreeLikeAutocomplete](/story/tree-treeLikeAutocomplete--docs) для react-hook-form`}}}},v=[{id:`1`,label:`Организация 1`,note:`Руководитель`,children:[{id:`11`,label:`Подразделение 1.1`,note:`Руководитель`},{id:`12`,label:`Подразделение 1.2`,note:`Руководитель`}]},{id:`2`,label:`Организация 2`,note:`Руководитель`}],y=u({treeLikeAutocomplete:p()}),b=()=>{let e=a({defaultValues:{treeLikeAutocomplete:[`3`]},validationSchema:y}),t=[...v,{id:`3`,label:`Организация 3`}],r=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,g.jsx)(i,{form:e,onSubmit:r,children:(0,g.jsxs)(n,{container:!0,spacing:2,children:[(0,g.jsx)(h,{name:`treeLikeAutocomplete`,label:`Название`,required:!0,options:t,dialogProps:{title:`Выбор элемента`},control:e.control}),(0,g.jsx)(c,{children:`Submit`})]})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    defaultValues: {
      treeLikeAutocomplete: ['3']
    },
    validationSchema
  });
  const fakeOptions = [...FAKE_NOTE_TREE_LIST_DATA, {
    id: '3',
    label: 'Организация 3'
  }];
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <FormTreeLikeAutocomplete name="treeLikeAutocomplete" label="Название" required options={fakeOptions} dialogProps={{
        title: 'Выбор элемента'
      }} control={form.control} />
        <FormSubmitButton>Submit</FormSubmitButton>
      </Grid>
    </Form>;
}`,...b.parameters?.docs?.source}}},x=[`BasicUsage`]})))()}S();export{b as BasicUsage,x as __namedExportsOrder,_ as default};