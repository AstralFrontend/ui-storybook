import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ji as t,ya as n,yn as r,za as i}from"./preview-DtOtDb_i.js";import{n as a,t as o}from"./TreeLikeAutocomplete-DOxQbyWa.js";import{r as s,t as c}from"./constants-C9uvm4iA.js";var l,u,d,f;function p(){return(p=e((()=>{l=i(),r(),s(),a(),u=n(),d=t.div`
  width: 300px;
`,f=()=>{let[e,t]=(0,l.useState)([`10`,`12`,`3`,`2`,`4`]),n=[{id:`10`,label:`Очень длинное название опции с очень длинным текстом`,note:`ip_ivanov@gmail.com`},...c];return(0,u.jsx)(d,{children:(0,u.jsx)(o,{label:`Название`,placeholder:`Выберите вариант`,fullWidth:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`,size:`sm`},onChange:t})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(['10', '12', '3', '2', '4']);
  const fakeOptions = [{
    id: '10',
    label: 'Очень длинное название опции с очень длинным текстом',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" placeholder="Выберите вариант" fullWidth options={fakeOptions} value={value} dialogProps={{
      title: 'Выбор элемента',
      size: 'sm'
    }} onChange={setValue} />
    </Wrapper>;
}`,...f.parameters?.docs?.source}}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{m=i(),r(),a(),h=n(),g=t.div`
  width: 400px;
`,_=[{id:`1`,label:`ИП Иванов О.В.`},{id:`2`,label:`ООО "Новая организация"`},{id:`3`,label:`ООО "Волшебные документы"`},{id:`4`,label:`ПАО "Завод №1"`},{id:`5`,label:`ИП Золотой С.И.`},{id:`6`,label:`ООО "Ромашка"`},{id:`7`,label:`АО "Северный ветер"`},{id:`8`,label:`ООО "Центр обслуживания"`}],v=()=>{let[e,t]=(0,m.useState)([`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`]);return(0,h.jsx)(g,{children:(0,h.jsx)(o,{label:`Название`,placeholder:`Выберите вариант`,fullWidth:!0,options:_,value:e,dialogProps:{title:`Выбор элемента`,size:`sm`},onChange:t})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(['1', '2', '3', '4', '5', '6', '7', '8']);
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" placeholder="Выберите вариант" fullWidth options={FAKE_OPTIONS} value={value} dialogProps={{
      title: 'Выбор элемента',
      size: 'sm'
    }} onChange={setValue} />
    </Wrapper>;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S,C,w;function T(){return(T=e((()=>{b=i(),r(),a(),x=n(),S=t.div`
  width: 400px;
`,C=Array.from({length:30},(e,t)=>({id:String(t+1),label:`ООО "Организация №${t+1}"`})),w=()=>{let[e,t]=(0,b.useState)(C.map(({id:e})=>e));return(0,x.jsx)(S,{children:(0,x.jsx)(o,{label:`Название`,placeholder:`Выберите вариант`,fullWidth:!0,options:C,value:e,dialogProps:{title:`Выбор элемента`,size:`sm`},onChange:t})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(FAKE_OPTIONS.map(({
    id
  }) => id));
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" placeholder="Выберите вариант" fullWidth options={FAKE_OPTIONS} value={value} dialogProps={{
      title: 'Выбор элемента',
      size: 'sm'
    }} onChange={setValue} />
    </Wrapper>;
}`,...w.parameters?.docs?.source}}}})))()}var E,D,O,k,A;function j(){return(j=e((()=>{E=i(),r(),a(),D=n(),O=t.div`
  width: 200px;
`,k=[{id:`1`,label:`ИП Иванов О.В.`},{id:`2`,label:`ООО "Ромашка"`},{id:`3`,label:`АО "Северный ветер"`},{id:`4`,label:`ООО "Волшебные документы"`},{id:`5`,label:`ПАО "Завод №1"`}],A=()=>{let[e,t]=(0,E.useState)(k.map(({id:e})=>e));return(0,D.jsx)(O,{children:(0,D.jsx)(o,{label:`Название`,placeholder:`Выберите вариант`,fullWidth:!0,options:k,value:e,dialogProps:{title:`Выбор элемента`,size:`sm`},onChange:t})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(FAKE_OPTIONS.map(({
    id
  }) => id));
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" placeholder="Выберите вариант" fullWidth options={FAKE_OPTIONS} value={value} dialogProps={{
      title: 'Выбор элемента',
      size: 'sm'
    }} onChange={setValue} />
    </Wrapper>;
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{a(),p(),y(),T(),j(),M={title:`Tree/TreeLikeAutocomplete/Tests`,component:o},N=[`LongLabelOption`,`ManySelected`,`ManySelectedScrollable`,`SmallInputWidth`]})))()}P();export{f as LongLabelOption,v as ManySelected,w as ManySelectedScrollable,A as SmallInputWidth,N as __namedExportsOrder,M as default};