import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,ya as i,yn as a,za as o}from"./preview-BJz-w2gl.js";import{n as s,t as c}from"./Autocomplete-DYwHQf6X.js";import{a as l,i as u,n as d,t as f}from"./common-D7VtkQlh.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{p=o(),a(),t(),s(),f(),m=i(),h=r.div`
  width: 400px;
  padding: ${({theme:e})=>e.spacing(5)};

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(5)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`,g=r.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,_=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,v=()=>{let[e,t]=(0,p.useState)([u[0],u[1],u[2],u[3],u[4]]);return(0,m.jsxs)(h,{children:[(0,m.jsx)(n,{variant:`h5`,children:`Тест с тегами разного размера`}),(0,m.jsxs)(_,{children:[(0,m.jsx)(n,{variant:`h6`,children:`Большой контейнер (400px)`}),(0,m.jsx)(c,{multiple:!0,options:u,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>e.title})]}),(0,m.jsxs)(g,{children:[(0,m.jsx)(n,{variant:`h6`,children:`Узкий контейнер (250px)`}),(0,m.jsx)(c,{multiple:!0,options:u,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>e.title})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option[]>([MIXED_SIZE_OPTIONS[0], MIXED_SIZE_OPTIONS[1], MIXED_SIZE_OPTIONS[2], MIXED_SIZE_OPTIONS[3], MIXED_SIZE_OPTIONS[4]]);
  return <Wrapper>
      <Typography variant="h5">Тест с тегами разного размера</Typography>
      <LargeAutocompleteWrapper>
        <Typography variant="h6">Большой контейнер (400px)</Typography>
        <Autocomplete<Option, true, false, false> multiple options={MIXED_SIZE_OPTIONS} value={value} onChange={(_, newValue) => setValue(newValue as Option[])} getOptionLabel={option => option.title} />
      </LargeAutocompleteWrapper>
      <SmallAutocompleteWrapper>
        <Typography variant="h6">Узкий контейнер (250px)</Typography>
        <Autocomplete<Option, true, false, false> multiple options={MIXED_SIZE_OPTIONS} value={value} onChange={(_, newValue) => setValue(newValue as Option[])} getOptionLabel={option => option.title} />
      </SmallAutocompleteWrapper>
    </Wrapper>;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S,C,w;function T(){return(T=e((()=>{b=o(),a(),s(),f(),x=i(),S=r.input`
  border: none;  
  outline: none;
  width: auto;
`,C=r.div`
  width: 100%;
  display: flex;
  height: 40px;
  border: 1px solid ${({theme:e})=>e.palette.grey[400]};
  border-radius: 4px;
  gap: 10px;
  align-items: center;
  padding: ${({theme:e})=>e.spacing(0,2)};
`,w=()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsx)(d,{children:(0,x.jsx)(c,{multiple:!0,options:l,label:`Multiple`,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>e.title,renderInput:e=>(0,x.jsxs)(C,{ref:e.InputProps.ref,children:[e.InputProps.startAdornment,(0,x.jsx)(S,{type:`text`,...e.inputProps})]})})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option[]>([]);
  return <Wrapper>
      <Autocomplete<Option, true, false, false> multiple options={OPTIONS} label="Multiple" value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => params.title} renderInput={params => <CustomInputWrapper ref={params.InputProps.ref}>
            {params.InputProps.startAdornment}
            <CustomInput type="text" {...params.inputProps} />
          </CustomInputWrapper>} />
    </Wrapper>;
}`,...w.parameters?.docs?.source}}}})))()}var E,D;function O(){return(O=e((()=>{s(),y(),T(),E={title:`Form-Controls/Autocomplete/Tests`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=268-23646)`}}}},D=[`MultipleDifferentTagsSize`,`MultipleRenderInput`]})))()}O();export{v as MultipleDifferentTagsSize,w as MultipleRenderInput,D as __namedExportsOrder,E as default};