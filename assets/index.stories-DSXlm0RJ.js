import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,ji as r,lt as i,xa as a,yn as o}from"./preview-De2xeSj1.js";import{t as s}from"./Link-BrmoVv7c.js";import{t as c}from"./Link-Dh1Bf3rT.js";import{n as l,t as u}from"./useForm-a7WMrKze.js";import{n as d,t as f}from"./FormSubmitButton-CZwnnqoY.js";import{d as p,f as m,n as h,t as g}from"./createGuard-Bnbb_ytZ.js";import{i as _,n as v,r as y,t as b}from"./object-CXqDZ5YO.js";import{n as x,t as S}from"./compose-BaXbo_LB.js";import{n as C,t as w}from"./FormCheckboxField-BVLUhMQc.js";import{n as T,t as E}from"./docs-3WDvM0GH.js";var D;function O(){return(O=e((()=>{m(),D={code:p(`boolean-type`),message:`Не boolean`}})))()}var k;function A(){return(A=e((()=>{x(),h(),O(),k=(...e)=>g((t,n,{typeErrorMessage:r})=>typeof t==`boolean`?S(...e)(t,n):n.createError(Object.assign(Object.assign({},D),{message:r||D.message})))})))()}var j;function M(){return(M=e((()=>{n(),o(),j=r(i)`
  grid-auto-flow: column;
  justify-content: center;
`})))()}var N,P;function F(){return(F=e((()=>{A(),b(),y(),N=v({check1:_(k()),check2:k()}),P=v({fieldName1:_(k()),fieldName2:_(k()),fieldName3:k(),fieldName4:k()})})))()}function I(){return(I=e((()=>{M(),F()})))()}var L,R;function z(){return(z=e((()=>{c(),E(),f(),u(),C(),I(),L=a(),R=()=>{let e=l({defaultValues:{fieldName1:void 0,fieldName2:!0,fieldName3:void 0,fieldName4:void 0},validationSchema:P});return(0,L.jsxs)(T,{form:e,children:[(0,L.jsx)(w,{control:e.control,name:`fieldName1`,title:(0,L.jsxs)(L.Fragment,{children:[`Я принимаю условия`,` `,(0,L.jsx)(s,{target:`_blank`,href:`/`,children:`Соглашения`})]})}),(0,L.jsx)(w,{control:e.control,name:`fieldName2`,title:`Form checkbox field`}),(0,L.jsx)(w,{control:e.control,name:`fieldName3`,title:`Required field with helper text`}),(0,L.jsx)(w,{control:e.control,hideHelperText:!0,name:`fieldName4`,title:`Required field with tooltip`}),(0,L.jsx)(d,{children:`Submit`})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Form2Values>({
    defaultValues: {
      fieldName1: undefined,
      fieldName2: true,
      fieldName3: undefined,
      fieldName4: undefined
    },
    validationSchema: validationSchema2
  });
  return <FormStoryContainer form={form}>
      <FormCheckboxField control={form.control} name="fieldName1" title={<>
            Я принимаю условия{' '}
            <Link target="_blank" href="/">
              Соглашения
            </Link>
          </>} />
      <FormCheckboxField control={form.control} name="fieldName2" title="Form checkbox field" />
      <FormCheckboxField control={form.control} name="fieldName3" title="Required field with helper text" />
      <FormCheckboxField control={form.control} hideHelperText name="fieldName4" title="Required field with tooltip" />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>;
}`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{E(),u(),C(),I(),B=a(),V=()=>{let e=l({mode:`onChange`,defaultValues:{check1:!1,check2:!0},validationSchema:N});return(0,B.jsx)(T,{form:e,children:(0,B.jsxs)(j,{container:!0,spacing:4,children:[(0,B.jsx)(w,{control:e.control,name:`check1`,title:`Текст`}),(0,B.jsx)(w,{control:e.control,disabled:!0,name:`check2`,title:`Текст`})]})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: true
    },
    validationSchema: validationSchema1
  });
  return <FormStoryContainer form={form}>
      <StyledGrid container spacing={4}>
        <FormCheckboxField control={form.control} name="check1" title="Текст" />
        <FormCheckboxField control={form.control} disabled name="check2" title="Текст" />
      </StyledGrid>
    </FormStoryContainer>;
}`,...V.parameters?.docs?.source}}}})))()}var U,W;function G(){return(G=e((()=>{E(),u(),C(),I(),U=a(),W=()=>{let e=l({mode:`onChange`,defaultValues:{check1:!1,check2:!1},validationSchema:N});return(0,U.jsx)(T,{form:e,children:(0,U.jsxs)(j,{container:!0,spacing:4,children:[(0,U.jsx)(w,{control:e.control,name:`check1`,title:`Текст`}),(0,U.jsx)(w,{control:e.control,required:!0,name:`check2`,title:`Текст`})]})})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: false
    },
    validationSchema: validationSchema1
  });
  return <FormStoryContainer form={form}>
      <StyledGrid container spacing={4}>
        <FormCheckboxField control={form.control} name="check1" title="Текст" />
        <FormCheckboxField control={form.control} required name="check2" title="Текст" />
      </StyledGrid>
    </FormStoryContainer>;
}`,...W.parameters?.docs?.source}}}})))()}var K,q,J;function Y(){return(Y=e((()=>{K=t(),E(),u(),C(),I(),q=a(),J=()=>{let e=l({mode:`onChange`,defaultValues:{check1:!1,check2:!0},validationSchema:N});return(0,K.useEffect)(()=>{e.trigger()},[e.trigger]),(0,q.jsx)(T,{form:e,children:(0,q.jsxs)(j,{container:!0,spacing:4,children:[(0,q.jsx)(w,{control:e.control,name:`check1`,title:`Текст`,hideHelperText:!0}),(0,q.jsx)(w,{control:e.control,isError:!0,name:`check2`,title:`Текст`})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Form1Values>({
    mode: 'onChange',
    defaultValues: {
      check1: false,
      check2: true
    },
    validationSchema: validationSchema1
  });
  useEffect(() => {
    form.trigger();
  }, [form.trigger]);
  return <FormStoryContainer form={form}>
      <StyledGrid container spacing={4}>
        <FormCheckboxField control={form.control} name="check1" title="Текст" hideHelperText />
        <FormCheckboxField control={form.control} isError name="check2" title="Текст" />
      </StyledGrid>
    </FormStoryContainer>;
}`,...J.parameters?.docs?.source},description:{story:`Валидация компонента может быть, когда в результате обработки значения в форме произошла ошибка.`,...J.parameters?.docs?.description}}};try{J.displayName=`Validation`,J.__docgenInfo={description:`Валидация компонента может быть, когда в результате обработки значения в форме произошла ошибка.`,displayName:`Validation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormCheckboxField/stories/Validation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z;function Q(){return(Q=e((()=>{C(),z(),H(),G(),Y(),X={title:`React-Hook-Form/FormCheckboxField`,component:w,parameters:{docs:{description:{component:`Обертка [CheckboxField](/story/form-controls-checkboxField--docs) для react-hook-form`}}}},Z=[`BasicUsage`,`Disabled`,`Required`,`Validation`]})))()}Q();export{R as BasicUsage,V as Disabled,W as Required,J as Validation,Z as __namedExportsOrder,X as default};