import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{xa as t}from"./preview-ClJ99rAL.js";import{s as n,t as r}from"./DataGrid-CUUUgwuy.js";import{n as i,t as a}from"./EditableText-B5XucIPn.js";import{t as o}from"./FormAutocomplete-D5ElyGV5.js";import{t as s}from"./FormAutocomplete-CwIZkQ1w.js";import{a as c,l}from"./NotificationStackContainer-B3IHpA4e.js";import{t as u}from"./Notification-Bwk3BwQI.js";import{K as d,rt as f}from"./common-qdDR22Hw.js";import{n as p,t as m}from"./common-CjsxNLh2.js";var h,g,_;function v(){return(v=e((()=>{r(),d(),u(),i(),h=t(),g=[{id:`1`,name:`Иванов И.И.`,options:{href:`/docs/1`}},{id:`2`,name:`Петров П.П.`,options:{href:`/docs/2`}}],_=()=>(0,h.jsxs)(f,{children:[(0,h.jsx)(n,{keyId:`id`,rows:g,columns:[{field:`name`,label:`ФИО`,renderCell:e=>(0,h.jsx)(a,{onSubmit:()=>{},children:e.name})}],onRowClick:e=>{c.info(`Клик по строке: ${e.name}`)},onRetry:()=>{}}),(0,h.jsx)(l,{})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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