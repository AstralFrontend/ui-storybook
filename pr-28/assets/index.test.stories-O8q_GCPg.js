import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-C35OHnlK.js";import{n as r,t as i}from"./TreeAutocomplete-BZmeEubB.js";import{r as a,t as o}from"./constants-C9uvm4iA.js";var s,c,l;function u(){return(u=e((()=>{s=t(),r(),a(),c=n(),l=()=>{let[e,t]=(0,s.useState)(`3`),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...o];return(0,c.jsx)(i,{label:`Название`,options:n,value:e,dialogProps:{title:`Выбор элемента`,size:`lg`},onChange:t})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>('3');
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента',
    size: 'lg'
  }} onChange={setValue} />;
}`,...l.parameters?.docs?.source}}}})))()}var d,f;function p(){return(p=e((()=>{r(),u(),d={title:`Tree/TreeAutocomplete/Tests`,component:i},f=[`LargeModalSize`]})))()}p();export{l as LargeModalSize,f as __namedExportsOrder,d as default};