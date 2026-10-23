import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t}from"./preview-BI9JLEFP.js";import{s as n,t as r}from"./DataGrid-DPnKXCV1.js";import{n as i,t as a}from"./EditableText-BNQKf_X9.js";import{t as o}from"./FormAutocomplete-y57_u-CL.js";import{t as s}from"./FormAutocomplete-CPSmYxxT.js";import{a as c,l}from"./NotificationStackContainer-veMbkP0c.js";import{t as u}from"./Notification-CD0H1Bty.js";import{K as d,rt as f}from"./common-BvUyA_tO.js";import{n as p,t as m}from"./common-Dtg5oa6t.js";var h,g,_;function v(){return(v=e((()=>{r(),d(),u(),i(),h=t(),g=[{id:`1`,name:`Иванов И.И.`,options:{href:`/docs/1`}},{id:`2`,name:`Петров П.П.`}],_=()=>(0,h.jsxs)(f,{children:[(0,h.jsx)(n,{keyId:`id`,rows:g,columns:[{field:`name`,label:`ФИО`,renderCell:e=>(0,h.jsx)(a,{onSubmit:()=>{},children:e.name})}],onRowClick:e=>{c.info(`Клик по строке: ${e.name}`)},onRetry:()=>{}}),(0,h.jsx)(l,{})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{s(),i(),m(),y=t(),b=[{label:`Очная работа`},{label:`Дистанционная работа`},{label:`Смешанный формат`}],x=()=>{let e=b[0];return(0,y.jsx)(p,{children:(0,y.jsx)(a,{initialValue:e,componentField:e=>(0,y.jsx)(o,{...e,getOptionLabel:e=>e.label,options:b}),onSubmit:()=>{},children:e.label})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const selectedOption = options[0];
  return <Wrapper>
      <EditableText initialValue={selectedOption} componentField={fieldProps => <FormAutocomplete<FormValues, Option, false, false, false> {...fieldProps} getOptionLabel={option => option.label} options={options} />} onSubmit={() => {}}>
        {selectedOption.label}
      </EditableText>
    </Wrapper>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{i(),v(),S(),C={title:`React-Hook-Form/EditableText/Tests`,component:a,parameters:{layout:`fullscreen`}},w=[`InClickableRow`,`WithOpenAutocompleteList`]})))()}T();export{_ as InClickableRow,x as WithOpenAutocompleteList,w as __namedExportsOrder,C as default};