import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-BrWggRPd.js";import{n as a,t as o}from"./SearchField-DWmR9opI.js";import{t as s}from"./MenuItem-DdYCBM8f.js";import{t as c}from"./MenuItem-BkeS7Zqs.js";import{t as l}from"./Select-DvokYkF_.js";import{t as ee}from"./Select-Bp7fB0Ge.js";import{t as u}from"./InputGroup-jnHoByiK.js";import{t as d}from"./InputGroup-WiVmUOEs.js";import{t as f}from"./NumberField-CO95P0Yv.js";import{t as p}from"./NumberField-z5PTyNna.js";import{n as m,t as h}from"./common-Dz-7Vei_.js";var g,_,v;function y(){return(y=e((()=>{g=i(),t(),a(),_=r(),v=()=>{let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{value:e,defaultValue:`test`,onChange:e=>{t(e.target.value)}}),(0,_.jsx)(n,{onClick:()=>{t(`test search text`)},children:`Set text`}),(0,_.jsx)(n,{onClick:()=>{t(``)},children:`Удалить value`}),(0,_.jsx)(n,{onClick:()=>{alert(e)},children:`Вывести value`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const setTestValue = () => {
    setValue('test search text');
  };
  const handleDelete = () => {
    setValue('');
  };
  const handleAlert = () => {
    alert(value);
  };
  return <>
      <SearchField value={value} defaultValue="test" onChange={handleChange} />
      <Button onClick={setTestValue}>Set text</Button>
      <Button onClick={handleDelete}>Удалить value</Button>
      <Button onClick={handleAlert}>Вывести value</Button>
    </>;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S;function C(){return(C=e((()=>{b=i(),a(),x=r(),S=()=>{let[e,t]=(0,b.useState)(null);return(0,x.jsxs)(`div`,{children:[e,(0,x.jsx)(o,{isDebounced:!0,value:e,onChange:e=>{t(e.target.value)}})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <div>
      {value}
      <SearchField isDebounced value={value} onChange={handleChange} />
    </div>;
}`,...S.parameters?.docs?.source},description:{story:`Пропс isDebounced позволяет включить debounce логику для вызова onChange обработчика`,...S.parameters?.docs?.description}}};try{S.displayName=`Debounce`,S.__docgenInfo={description:`Пропс isDebounced позволяет включить debounce логику для вызова onChange обработчика`,displayName:`Debounce`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SearchField/stories/Debounce.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{a(),w=r(),T=()=>(0,w.jsx)(o,{disabled:!0,defaultValue:`123`,label:`Disabled`}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <SearchField disabled defaultValue="123" label="Disabled" />`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{a(),D=r(),O=()=>(0,D.jsx)(o,{fullWidth:!0}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <SearchField fullWidth />`,...O.parameters?.docs?.source}}}})))()}var A,j;function M(){return(M=e((()=>{a(),A=r(),j=()=>(0,A.jsx)(o,{helperText:`Введите текст для поиска`}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <SearchField helperText="Введите текст для поиска" />`,...j.parameters?.docs?.source}}}})))()}var N,P;function F(){return(F=e((()=>{p(),a(),N=r(),P=()=>(0,N.jsx)(o,{inputComponent:({value:e,onChange:t,...n})=>{let r=e=>t?.({target:{value:String(e)}});return(0,N.jsx)(f,{...n,placeholder:`Поиск по числам`,value:e?Number(e):void 0,onChange:r})}}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <SearchField inputComponent={({
    value,
    onChange,
    ...props
  }) => {
    const handleChange = (numberValue: number | null) => onChange?.({
      target: {
        value: String(numberValue)
      }
    } as ChangeEvent<HTMLInputElement>);
    return <NumberField {...props} placeholder="Поиск по числам" value={value ? Number(value) : undefined} onChange={handleChange} />;
  }} />;
}`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{a(),I=r(),L=()=>(0,I.jsx)(o,{maxLength:3}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <SearchField maxLength={3} />`,...L.parameters?.docs?.source}}}})))()}var z,B;function V(){return(V=e((()=>{a(),z=r(),B=()=>(0,z.jsx)(o,{placeholder:`Поиск по названию`}),B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <SearchField placeholder="Поиск по названию" />`,...B.parameters?.docs?.source}}}})))()}var H,U;function W(){return(W=e((()=>{a(),H=r(),U=()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(o,{label:`Medium`}),(0,H.jsx)(o,{label:`Small`,size:`small`})]}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <>
    <SearchField label="Medium" />
    <SearchField label="Small" size="small" />
  </>`,...U.parameters?.docs?.source}}}})))()}var G,K,q,J;function Y(){return(Y=e((()=>{G=i(),d(),h(),c(),ee(),a(),K=r(),q=[`ФИО`,`Подразделение`,`Организация`],J=()=>{let[e,t]=(0,G.useState)(`ФИО`),[n,r]=(0,G.useState)(null);return(0,K.jsx)(m,{children:(0,K.jsxs)(u,{columns:[`45%`,`55%`],children:[(0,K.jsx)(l,{value:e,defaultValue:`ФИО`,onChange:e=>{t(e.target.value)},children:q.map(e=>(0,K.jsx)(s,{value:e,children:e},e))}),(0,K.jsx)(o,{value:n,onChange:e=>{r(e.target.value)}})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [searchField, setSearchField] = useState('ФИО');
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleSearchFieldChange = (event: SelectChangeEvent<typeof searchField>) => {
    setSearchField(event.target.value);
  };
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <Wrapper>
      <InputGroup columns={['45%', '55%']}>
        <Select value={searchField} defaultValue="ФИО" onChange={handleSearchFieldChange}>
          {SEARCH_OPTIONS.map(option => <MenuItem value={option} key={option}>
              {option}
            </MenuItem>)}
        </Select>
        <SearchField value={searchValue} onChange={handleSearchValueChange} />
      </InputGroup>
    </Wrapper>;
}`,...J.parameters?.docs?.source},description:{story:`Для объедения в группу, используется компонент [InputGroup](/docs/form-controls-inputGroup--docs)`,...J.parameters?.docs?.description}}};try{J.displayName=`WithGroup`,J.__docgenInfo={description:`Для объедения в группу, используется компонент [InputGroup](/docs/form-controls-inputGroup--docs)`,displayName:`WithGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SearchField/stories/WithGroup.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z,Q;function $(){return($=e((()=>{a(),y(),C(),E(),k(),M(),F(),R(),V(),W(),Y(),X={title:`Form-Controls/SearchField`,component:o,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=82-14123)`}}}},Z={args:{label:`Имя`},parameters:{docs:{disable:!0}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Имя'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Interaction`,`BasicUsage`,`Placeholder`,`Disabled`,`MaxLength`,`Sizes`,`FullWidth`,`InputComponent`,`HelperText`,`WithGroup`,`Debounce`]})))()}$();export{v as BasicUsage,S as Debounce,T as Disabled,O as FullWidth,j as HelperText,P as InputComponent,Z as Interaction,L as MaxLength,B as Placeholder,U as Sizes,J as WithGroup,Q as __namedExportsOrder,X as default};