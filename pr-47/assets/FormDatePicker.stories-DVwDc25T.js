import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ya as t}from"./preview-BY-1Z8yT.js";import{n,t as r}from"./useForm-BZt7q15o.js";import{n as i,t as a}from"./FormSubmitButton-DwdP8_Mo.js";import{n as o,t as s}from"./object-2y2TfwoJ.js";import{n as c,t as l}from"./date-DtpEwsbU.js";import{n as u,t as d}from"./FormDatePicker-D3tpDdJO.js";import{n as f,t as p}from"./docs-C1jP_Xyh.js";var m,h,g,_,v;function y(){return(y=e((()=>{c(),s(),p(),a(),r(),u(),m=t(),h={title:`React-Hook-Form/FormDatePicker`,component:d,parameters:{docs:{description:{component:`Обертка [DatePicker](/story/date-pickers-defaultDatePicker--docs) для react-hook-form.`}}}},g=o({dateField:l()}),_=()=>{let e=n({validationSchema:g});return(0,m.jsxs)(f,{form:e,children:[(0,m.jsx)(d,{inputProps:{label:`FormDatePicker`,required:!0},control:e.control,name:`dateField`}),(0,m.jsx)(i,{children:`Submit`})]})},v=[`BasicUsage`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  return <FormStoryContainer form={form}>
      <FormDatePicker inputProps={{
      label: 'FormDatePicker',
      required: true
    }} control={form.control} name="dateField" />
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormStoryContainer>;
}`,..._.parameters?.docs?.source},description:{story:'**Важно:** как у [DatePicker — Basic usage](/story/date-pickers-defaultDatePicker--docs): значение в форме обновляется после **полной** маски; **null** при очистке; **Invalid Date** при полной, но календарно невалидной дате. Промежуточный ввод **не** дёргает `onChange` на каждый символ, но при `blur` с неполной строкой в форму уходит **Invalid Date**.\n\n```tsx\n// form получит дату — полный ввод "10.02.2022" или выбор в календаре\n// при "10.02.2" поле визуально меняется, значение в form до полной маски не обновляется по дате\n// при уходе с поля с "10.02.2" в form придёт Invalid Date\n<FormDatePicker name="dateField" control={form.control} />\n```',..._.parameters?.docs?.description}}}})))()}y();export{_ as BasicUsage,v as __namedExportsOrder,h as default};