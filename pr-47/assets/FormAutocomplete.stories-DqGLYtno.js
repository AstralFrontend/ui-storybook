import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-BnqSH9fx.js";import{n as a,t as o}from"./useForm-D85-U4jL.js";import{n as s,t as c}from"./FormSubmitButton-CG4qb2yl.js";import{n as l,t as u}from"./arrayItem-zxW5dFci.js";import{n as d,t as f}from"./object-2y2TfwoJ.js";import{n as p,t as m}from"./array-u8oLchIR.js";import{n as h,t as g}from"./min-CliiJ_qF.js";import{n as _,t as v}from"./or-DlrWwjQm.js";import{n as y,t as b}from"./string-BHlgssBa.js";import{n as x,t as S}from"./FormAutocomplete-D6wyXYM4.js";import{n as C,t as w}from"./docs-CGhIi2o0.js";var T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{p(),l(),g(),f(),v(),b(),T=i(),t(),w(),c(),o(),x(),E=r(),D={title:`React-Hook-Form/FormAutocomplete`,component:S,parameters:{docs:{description:{component:`Обертка [Autocomplete](/story/form-controls-autocomplete--docs) для react-hook-form`}}}},O=[{value:`1`,title:`Value 1`},{value:`2`,title:`Value 2`},{value:`3`,title:`Value 3`},{value:`4`,title:`Value 4`},{value:`5`,title:`Value 5`},{value:`6`,title:`Value 6`},{value:`7`,title:`Value 7`},{value:`8`,title:`Value 8`},{value:`9`,title:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab adipisci, aliquam aliquid delectus ipsam laboriosam magni molestias possimus ullam voluptatibus!`},{value:`10`,title:`12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vero?`}],k=d({autocomplete:m(h(1),u(d({value:y(),title:y()})))}),A=d({autocomplete:_(d({value:y(),title:y()}),y(h(4)))}),j=()=>{let e=a({validationSchema:k});return(0,E.jsxs)(C,{form:e,children:[(0,E.jsx)(S,{multiple:!0,control:e.control,name:`autocomplete`,options:O,label:`Form autocomplete`,getOptionLabel:e=>e.title,placeholder:`Placeholder`}),(0,E.jsx)(s,{children:`Submit`})]})},M=()=>{let e=a({validationSchema:A});return(0,E.jsxs)(C,{form:e,children:[(0,E.jsx)(S,{control:e.control,name:`autocomplete`,options:O,freeSolo:!0,placeholder:`Placeholder`,label:`Form autocomplete with freeSolo`,getOptionLabel:e=>typeof e==`string`?e:e.title}),(0,E.jsx)(s,{children:`Submit`})]})},N=()=>{let[,e]=(0,T.useState)(!1),t=a({reValidateMode:`onChange`,validationSchema:A});return(0,E.jsxs)(C,{form:t,children:[(0,E.jsx)(S,{control:t.control,name:`autocomplete`,options:O,freeSolo:!0,label:`Form autocomplete with freeSolo`,getOptionLabel:e=>typeof e==`string`?e:e.title}),(0,E.jsx)(n,{onClick:()=>{t.setValue(`autocomplete`,`It's sunny today`),e(!0)},children:`Set text`})]})},P=[`BasicUsage`,`FreeSolo`,`ControlledForm`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  return <FormStoryContainer form={form}>
      <FormAutocomplete<FormValues, IOption, true, false, false> multiple control={form.control} name="autocomplete" options={OPTIONS} label="Form autocomplete" getOptionLabel={params => params.title} placeholder="Placeholder" />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormFreeValues>({
    validationSchema: validationFreeSchema
  });
  return <FormStoryContainer form={form}>
      <FormAutocomplete<FormFreeValues, IOption, false, boolean, true> control={form.control} name="autocomplete" options={OPTIONS} freeSolo placeholder="Placeholder" label="Form autocomplete with freeSolo" getOptionLabel={params => typeof params === 'string' ? params : params.title} />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>;
}`,...M.parameters?.docs?.source},description:{story:`Prop \`freeSolo\`: если true, значение в input не будет связано со списком options.

В данные формы могут быть установлены как строка из input, так и объект из списка.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [, setIsUpdate] = useState(false);
  const form = useForm<FormFreeValues>({
    reValidateMode: 'onChange',
    validationSchema: validationFreeSchema
  });
  const handleButtonClick = () => {
    form.setValue('autocomplete', "It's sunny today");
    setIsUpdate(true);
  };
  return <FormStoryContainer form={form}>
      <FormAutocomplete<FormFreeValues, IOption, true, false, true> control={form.control} name="autocomplete" options={OPTIONS} freeSolo label="Form autocomplete with freeSolo" getOptionLabel={params => typeof params === 'string' ? params : params.title} />

      <Button onClick={handleButtonClick}>Set text</Button>
    </FormStoryContainer>;
}`,...N.parameters?.docs?.source},description:{story:`Можно задать значение в форме и инпут подхватит изменения`,...N.parameters?.docs?.description}}}})))()}F();export{j as BasicUsage,N as ControlledForm,M as FreeSolo,P as __namedExportsOrder,D as default};