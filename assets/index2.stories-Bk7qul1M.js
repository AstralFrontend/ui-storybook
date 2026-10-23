import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r,za as i}from"./preview-28_ENgae.js";import{t as a}from"./SearchField-C9iP5uhX.js";import{t as o}from"./Autocomplete-Div5hMrB.js";import{t as s}from"./MenuItem-BPjirH_i.js";import{t as c}from"./MenuItem-DC-OhdAp.js";import{t as l}from"./TextField-ozEXO7WW.js";import{t as u}from"./TextField-B0rnQuro.js";import{t as d}from"./Autocomplete-C-UtbI27.js";import{t as f}from"./Select-wkHN334c.js";import{t as p}from"./Select-DX9-EF5l.js";import{n as m,t as h}from"./InputGroup-CoVpfyWU.js";import{t as g}from"./SearchField-CBV_Iw5F.js";import{n as _,t as v}from"./common-DfL7PVPY.js";var y,b,x,S;function C(){return(C=e((()=>{y=i(),c(),g(),p(),m(),v(),b=r(),x=[`ФИО`,`Подразделение`,`Организация`],S=()=>{let[e,t]=(0,y.useState)(`ФИО`),[n,r]=(0,y.useState)(null);return(0,b.jsx)(_,{children:(0,b.jsxs)(h,{columns:[`45%`,`55%`],children:[(0,b.jsx)(f,{value:e,defaultValue:`ФИО`,onChange:e=>{t(e.target.value)},children:x.map(e=>(0,b.jsx)(s,{value:e,children:e},e))}),(0,b.jsx)(a,{value:n,onChange:e=>{r(e.target.value)}})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [selectValue, setSelectValue] = useState('ФИО');
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleSearchFieldChange = (event: SelectChangeEvent<typeof selectValue>) => {
    setSelectValue(event.target.value);
  };
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <Wrapper>
      <InputGroup columns={['45%', '55%']}>
        <Select value={selectValue} defaultValue="ФИО" onChange={handleSearchFieldChange}>
          {SEARCH_OPTIONS.map(option => <MenuItem value={option} key={option}>
              {option}
            </MenuItem>)}
        </Select>
        <SearchField value={searchValue} onChange={handleSearchValueChange} />
      </InputGroup>
    </Wrapper>;
}`,...S.parameters?.docs?.source}}}})))()}var w,T,E;function D(){return(D=e((()=>{w=i(),t(),u(),m(),v(),T=r(),E=()=>{let[e,t]=(0,w.useState)(``),[r,i]=(0,w.useState)(``),[a,o]=(0,w.useState)(``),s=e=>{t(e.target.value)},c=e=>{i(e.target.value)},u=e=>{o(e.target.value)};return(0,T.jsxs)(n,{rows:3,children:[(0,T.jsx)(_,{children:(0,T.jsxs)(h,{children:[(0,T.jsx)(l,{value:e,onChange:s,label:`Фамилия`,placeholder:`Введите фамилию`}),(0,T.jsx)(l,{value:r,onChange:c,label:`Имя`,placeholder:`Введите имя`}),(0,T.jsx)(l,{value:a,onChange:u,label:`Отчество`,placeholder:`Введите отчество`})]})}),(0,T.jsx)(_,{children:(0,T.jsxs)(h,{columns:[`2fr`,`1fr`,`30%`],children:[(0,T.jsx)(l,{value:e,onChange:s,label:`Фамилия`,placeholder:`Введите фамилию`}),(0,T.jsx)(l,{value:r,onChange:c,label:`Имя`,placeholder:`Введите имя`}),(0,T.jsx)(l,{value:a,onChange:u,label:`Отчество`,placeholder:`Введите отчество`})]})}),(0,T.jsx)(_,{children:(0,T.jsxs)(h,{columns:[`200px`,`100px`,`200px`],children:[(0,T.jsx)(l,{value:e,onChange:s,label:`Фамилия`,placeholder:`Введите фамилию`}),(0,T.jsx)(l,{value:r,onChange:c,label:`Имя`,placeholder:`Введите имя`}),(0,T.jsx)(l,{value:a,onChange:u,label:`Отчество`,placeholder:`Введите отчество`})]})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePatronymicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPatronymic(event.target.value);
  };
  return <Grid rows={3}>
      <Wrapper>
        <InputGroup>
          <TextField value={surname} onChange={handleSurnameChange} label="Фамилия" placeholder="Введите фамилию" />
          <TextField value={name} onChange={handleNameChange} label="Имя" placeholder="Введите имя" />
          <TextField value={patronymic} onChange={handlePatronymicChange} label="Отчество" placeholder="Введите отчество" />
        </InputGroup>
      </Wrapper>
      <Wrapper>
        <InputGroup columns={['2fr', '1fr', '30%']}>
          <TextField value={surname} onChange={handleSurnameChange} label="Фамилия" placeholder="Введите фамилию" />
          <TextField value={name} onChange={handleNameChange} label="Имя" placeholder="Введите имя" />
          <TextField value={patronymic} onChange={handlePatronymicChange} label="Отчество" placeholder="Введите отчество" />
        </InputGroup>
      </Wrapper>
      <Wrapper>
        <InputGroup columns={['200px', '100px', '200px']}>
          <TextField value={surname} onChange={handleSurnameChange} label="Фамилия" placeholder="Введите фамилию" />
          <TextField value={name} onChange={handleNameChange} label="Имя" placeholder="Введите имя" />
          <TextField value={patronymic} onChange={handlePatronymicChange} label="Отчество" placeholder="Введите отчество" />
        </InputGroup>
      </Wrapper>
    </Grid>;
}`,...E.parameters?.docs?.source},description:{story:"Параметр `column` позволяет задать значение для инпутов внутри grid сетки",...E.parameters?.docs?.description}}};try{E.displayName=`Columns`,E.__docgenInfo={description:"Параметр `column` позволяет задать значение для инпутов внутри grid сетки",displayName:`Columns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InputGroup/stories/Columns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{u(),m(),v(),O=r(),k=()=>(0,O.jsx)(_,{children:(0,O.jsxs)(h,{columns:[`40%`,`30%`,`40%`],children:[(0,O.jsx)(l,{label:`Фамилия`,placeholder:`Введите фамилию`,disabled:!0}),(0,O.jsx)(l,{label:`Имя`,placeholder:`Введите имя`,disabled:!0}),(0,O.jsx)(l,{label:`Отчество`,placeholder:`Введите отчество`,disabled:!0})]})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <InputGroup columns={['40%', '30%', '40%']}>
        <TextField label="Фамилия" placeholder="Введите фамилию" disabled />
        <TextField label="Имя" placeholder="Введите имя" disabled />
        <TextField label="Отчество" placeholder="Введите отчество" disabled />
      </InputGroup>
    </Wrapper>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=i(),u(),m(),v(),M=r(),N=()=>{let[e,t]=(0,j.useState)(``),[n,r]=(0,j.useState)(``),[i,a]=(0,j.useState)(``);return(0,M.jsx)(_,{children:(0,M.jsxs)(h,{columns:[`40%`,`30%`,`40%`],children:[(0,M.jsx)(l,{value:e,onChange:e=>{t(e.target.value)},label:`Фамилия`,placeholder:`Введите фамилию`}),(0,M.jsx)(l,{value:n,onChange:e=>{r(e.target.value)},label:`Имя`,placeholder:`Введите имя`}),(0,M.jsx)(l,{value:i,onChange:e=>{a(e.target.value)},label:`Отчество`,placeholder:`Введите отчество`})]})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePatronymicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPatronymic(event.target.value);
  };
  return <Wrapper>
      <InputGroup columns={['40%', '30%', '40%']}>
        <TextField value={surname} onChange={handleSurnameChange} label="Фамилия" placeholder="Введите фамилию" />
        <TextField value={name} onChange={handleNameChange} label="Имя" placeholder="Введите имя" />
        <TextField value={patronymic} onChange={handlePatronymicChange} label="Отчество" placeholder="Введите отчество" />
      </InputGroup>
    </Wrapper>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I,L,R;function z(){return(z=e((()=>{F=i(),c(),g(),p(),m(),v(),I=r(),L=[`ФИО`,`Подразделение`,`Организация`],R=()=>{let[e,t]=(0,F.useState)(`ФИО`),[n,r]=(0,F.useState)(null);return(0,I.jsx)(_,{children:(0,I.jsxs)(h,{columns:[`45%`,`55%`],children:[(0,I.jsx)(f,{value:e,defaultValue:`ФИО`,onChange:e=>{t(e.target.value)},size:`small`,children:L.map(e=>(0,I.jsx)(s,{value:e,children:e},e))}),(0,I.jsx)(a,{size:`small`,value:n,onChange:e=>{r(e.target.value)}})]})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [selectValue, setSelectValue] = useState('ФИО');
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleSearchFieldChange = (event: SelectChangeEvent<typeof selectValue>) => {
    setSelectValue(event.target.value);
  };
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <Wrapper>
      <InputGroup columns={['45%', '55%']}>
        <Select value={selectValue} defaultValue="ФИО" onChange={handleSearchFieldChange} size="small">
          {SEARCH_OPTIONS.map(option => <MenuItem value={option} key={option}>
              {option}
            </MenuItem>)}
        </Select>
        <SearchField size="small" value={searchValue} onChange={handleSearchValueChange} />
      </InputGroup>
    </Wrapper>;
}`,...R.parameters?.docs?.source}}}})))()}var B,V,H,U;function W(){return(W=e((()=>{B=i(),d(),g(),m(),v(),V=r(),H=[{value:`1`,title:`ФИО`},{value:`2`,title:`Подразделение`},{value:`3`,title:`Организация`}],U=()=>{let[e,t]=(0,B.useState)(H[1]),[n,r]=(0,B.useState)(null);return(0,V.jsx)(_,{children:(0,V.jsxs)(h,{columns:[`45%`,`55%`],children:[(0,V.jsx)(o,{value:e,options:H,defaultValue:H[1],getOptionLabel:e=>e.title,onChange:(e,n)=>{t(n)}}),(0,V.jsx)(a,{value:n,onChange:e=>{r(e.target.value)}})]})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [searchField, setSearchField] = useState<Option | null>(OPTIONS[1]);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const handleAutocompleteValueChange = (_event: SyntheticEvent, value: Option | null) => {
    setSearchField(value);
  };
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <Wrapper>
      <InputGroup columns={['45%', '55%']}>
        <Autocomplete<Option, false, false, false> value={searchField} options={OPTIONS} defaultValue={OPTIONS[1]} getOptionLabel={params => params.title} onChange={handleAutocompleteValueChange} />
        <SearchField value={searchValue} onChange={handleSearchValueChange} />
      </InputGroup>
    </Wrapper>;
}`,...U.parameters?.docs?.source}}}})))()}var G,K;function q(){return(q=e((()=>{m(),C(),D(),A(),P(),z(),W(),G={title:`Form-Controls/InputGroup`,component:h,parameters:{docs:{description:{component:`### [Figma]()`}}}},K=[`BasicUsage`,`MultipleFields`,`Columns`,`WithAutocomplete`,`DisabledFields`,`SmallInputs`]})))()}q();export{S as BasicUsage,E as Columns,k as DisabledFields,N as MultipleFields,R as SmallInputs,U as WithAutocomplete,K as __namedExportsOrder,G as default};