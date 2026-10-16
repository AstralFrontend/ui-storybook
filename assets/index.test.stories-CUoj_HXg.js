import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{xa as t}from"./preview-CTqDz5zI.js";import{n,t as r}from"./EditableText-C-7NjrVl.js";import{t as i}from"./FormAutocomplete-DF8fVm4i.js";import{t as a}from"./FormAutocomplete-C23YxwKP.js";import{n as o,t as s}from"./common-ZSrWjTy0.js";var c,l,u;function d(){return(d=e((()=>{a(),n(),s(),c=t(),l=[{label:`Очная работа`},{label:`Дистанционная работа`},{label:`Смешанный формат`}],u=()=>{let e=l[0];return(0,c.jsx)(o,{children:(0,c.jsx)(r,{initialValue:e,componentField:e=>(0,c.jsx)(i,{...e,getOptionLabel:e=>e.label,options:l}),onSubmit:()=>{},children:e.label})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const selectedOption = options[0];
  return <Wrapper>
      <EditableText initialValue={selectedOption} componentField={fieldProps => <FormAutocomplete<FormValues, Option, false, false, false> {...fieldProps} getOptionLabel={option => option.label} options={options} />} onSubmit={() => {}}>
        {selectedOption.label}
      </EditableText>
    </Wrapper>;
}`,...u.parameters?.docs?.source}}}})))()}var f,p;function m(){return(m=e((()=>{n(),d(),f={title:`React-Hook-Form/EditableText/Tests`,component:r,parameters:{layout:`fullscreen`}},p=[`WithOpenAutocompleteList`]})))()}m();export{u as WithOpenAutocompleteList,p as __namedExportsOrder,f as default};