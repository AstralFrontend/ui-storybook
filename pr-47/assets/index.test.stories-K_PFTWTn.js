import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ya as t}from"./preview-BY-1Z8yT.js";import{s as n,t as r}from"./DataGrid-Dcby5csU.js";import{n as i,t as a}from"./EditableText-D2hbDbBH.js";import{t as o}from"./FormTextField-DgmDbTky.js";import{t as s}from"./FormTextField-BGmLLBCF.js";import{t as c}from"./FormAutocomplete-C__cphiu.js";import{t as l}from"./FormAutocomplete-DI9tD8M_.js";import{a as u,l as d}from"./NotificationStackContainer-vDwhkJ8I.js";import{t as f}from"./Notification-D41rQ8tH.js";import{K as p,at as m}from"./common-CuUEDSps.js";import{n as h,t as g}from"./common-DjafMo39.js";var _,v,y;function b(){return(b=e((()=>{r(),p(),f(),i(),_=t(),v=[{id:`1`,name:`Иванов И.И.`,options:{href:`/docs/1`}},{id:`2`,name:`Петров П.П.`}],y=()=>(0,_.jsxs)(m,{children:[(0,_.jsx)(n,{keyId:`id`,rows:v,columns:[{field:`name`,label:`ФИО`,renderCell:e=>(0,_.jsx)(a,{onSubmit:()=>{},children:e.name})}],onRowClick:e=>{u.info(`Клик по строке: ${e.name}`)},onRetry:()=>{}}),(0,_.jsx)(d,{})]}),y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <DataGridStoryContainer>
      <DataGrid<Row> keyId="id" rows={rows} columns={[{
      field: 'name',
      label: 'ФИО',
      renderCell: row => <EditableText onSubmit={() => {}}>{row.name}</EditableText>
    }]} onRowClick={row => {
      notify.info(\`Клик по строке: \${row.name}\`);
    }} onRetry={() => {}} />
      <NotificationContainer />
    </DataGridStoryContainer>;
}`,...y.parameters?.docs?.source}}}})))()}var x,S;function C(){return(C=e((()=>{s(),i(),g(),x=t(),S=()=>(0,x.jsx)(h,{children:(0,x.jsx)(a,{componentField:e=>(0,x.jsx)(o,{...e,label:`ФИО`}),onSubmit:()=>{},children:`Иванов И.И.`})}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <EditableText componentField={fieldProps => <FormTextField {...fieldProps} label="ФИО" />} onSubmit={() => {}}>
        Иванов И.И.
      </EditableText>
    </Wrapper>;
}`,...S.parameters?.docs?.source}}}})))()}var w,T,E;function D(){return(D=e((()=>{l(),i(),g(),w=t(),T=[{label:`Очная работа`},{label:`Дистанционная работа`},{label:`Смешанный формат`}],E=()=>{let e=T[0];return(0,w.jsx)(h,{children:(0,w.jsx)(a,{initialValue:e,componentField:e=>(0,w.jsx)(c,{...e,getOptionLabel:e=>e.label,options:T}),onSubmit:()=>{},children:e.label})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const selectedOption = options[0];
  return <Wrapper>
      <EditableText initialValue={selectedOption} componentField={fieldProps => <FormAutocomplete<FormValues, Option, false, false, false> {...fieldProps} getOptionLabel={option => option.label} options={options} />} onSubmit={() => {}}>
        {selectedOption.label}
      </EditableText>
    </Wrapper>;
}`,...E.parameters?.docs?.source}}}})))()}var O,k;function A(){return(A=e((()=>{i(),b(),C(),D(),O={title:`React-Hook-Form/EditableText/Tests`,component:a,parameters:{layout:`fullscreen`}},k=[`InClickableRow`,`WithFieldLabel`,`WithOpenAutocompleteList`]})))()}A();export{y as InClickableRow,S as WithFieldLabel,E as WithOpenAutocompleteList,k as __namedExportsOrder,O as default};