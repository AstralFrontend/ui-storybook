import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Z as n,ct as r,ji as i,lt as a,ya as o,yn as ee,za as s}from"./preview-BXnWBjdd.js";import{n as c,t as l}from"./Autocomplete-GTV42c-u.js";import{t as te}from"./Tooltip-CiOMwZ3Y.js";import{t as ne}from"./MenuItem-uipTusli.js";import{t as re}from"./Tooltip-DJjvEX_V.js";import{t as u}from"./MenuItem-D_7gec0P.js";import{t as d}from"./OverflowTypography-DoxWVjsA.js";import{t as f}from"./OverflowTypography-CgQOMSub.js";import{a as p,n as m,t as h}from"./common-DEWrCN7a.js";var g,_,v;function ie(){return(ie=e((()=>{g=s(),c(),h(),_=o(),v=()=>{let[e,t]=(0,g.useState)(null);return(0,_.jsx)(m,{children:(0,_.jsx)(l,{options:p,label:`Выберите вариант`,value:e,getOptionLabel:e=>e.title,onChange:(e,n)=>t(n)})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option | null>(null);
  return <Wrapper>
      <Autocomplete<Option, false, false, false> options={OPTIONS} label="Выберите вариант" value={value} getOptionLabel={params => params.title} onChange={(_, newVal) => setValue(newVal)} />
    </Wrapper>;
}`,...v.parameters?.docs?.source}}}})))()}var y,ae,b;function x(){return(x=e((()=>{u(),f(),c(),h(),y=o(),ae=s(),b=()=>(0,y.jsx)(m,{children:(0,y.jsx)(l,{label:`Custom render input`,size:`small`,options:p,getOptionLabel:({title:e})=>e,renderOption:(e,t)=>(0,ae.createElement)(ne,{...e,key:e.id},(0,y.jsx)(d,{rowsCount:2,children:`Custom render option - ${t.title}`})),renderInput:e=>(0,y.jsxs)(`div`,{ref:e.InputProps.ref,children:[(0,y.jsx)(`label`,{children:e.label}),(0,y.jsx)(`input`,{type:`text`,ref:e.inputProps.ref,value:e.inputProps.value,onMouseDown:e.inputProps.onMouseDown,placeholder:e.placeholder})]})})}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, true, false, false> label="Custom render input" size="small" options={OPTIONS} getOptionLabel={({
    title
  }) => title} renderOption={(props, option) => <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {\`Custom render option - \${option.title}\`}
          </OverflowTypography>
        </MenuItem>} renderInput={params => <div ref={params.InputProps.ref}>
          <label>{params.label}</label>
          <input type="text" ref={params.inputProps.ref} value={params.inputProps.value} onMouseDown={params.inputProps.onMouseDown} placeholder={params.placeholder} />
        </div>} />
  </Wrapper>`,...b.parameters?.docs?.source}}}})))()}var S,oe,C;function w(){return(w=e((()=>{u(),f(),c(),h(),S=o(),oe=s(),C=()=>(0,S.jsx)(m,{children:(0,S.jsx)(l,{label:`Custom render option`,size:`small`,options:p,getOptionLabel:({title:e})=>e,renderOption:(e,t)=>(0,oe.createElement)(ne,{...e,key:e.id},(0,S.jsx)(d,{rowsCount:2,children:`Custom render option - ${t.title}`}))})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Custom render option" size="small" options={OPTIONS} getOptionLabel={({
    title
  }) => title} renderOption={(props, option) => <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {\`Custom render option - \${option.title}\`}
          </OverflowTypography>
        </MenuItem>} />
  </Wrapper>`,...C.parameters?.docs?.source}}}})))()}var T,E,D;function se(){return(se=e((()=>{r(),c(),h(),T=o(),E=`Начните вводить ИНН`,D=()=>(0,T.jsxs)(a,{container:!0,spacing:4,direction:`column`,children:[(0,T.jsx)(m,{children:(0,T.jsx)(l,{label:`Организация`,options:[],focusedHelperText:E,getOptionLabel:e=>e.title})}),(0,T.jsx)(m,{children:(0,T.jsx)(l,{label:`Организация (freeSolo)`,freeSolo:!0,options:[],focusedHelperText:E,getOptionLabel:e=>typeof e==`string`?e:e.title})})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={4} direction="column">
      <Wrapper>
        <Autocomplete<Option, false, false, false> label="Организация" options={[]} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => option.title} />
      </Wrapper>
      <Wrapper>
        <Autocomplete<Option, false, false, true> label="Организация (freeSolo)" freeSolo options={[]} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => typeof option === 'string' ? option : option.title} />
      </Wrapper>
    </Grid>;
}`,...D.parameters?.docs?.source},description:{story:`Popover с подсказкой открывается на фокус пустого поля`,...D.parameters?.docs?.description}}};try{D.displayName=`FocusedHelperText`,D.__docgenInfo={description:`Popover с подсказкой открывается на фокус пустого поля`,displayName:`FocusedHelperText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Autocomplete/stories/FocusedHelperText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ce,O,k;function A(){return(A=e((()=>{ce=s(),c(),h(),O=o(),k=()=>{let[e,t]=(0,ce.useState)();return(0,O.jsx)(m,{children:(0,O.jsx)(l,{options:p,label:`FreeSolo`,freeSolo:!0,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>typeof e==`string`?e:e.title})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option | string | null | undefined>();
  return <Wrapper>
      <Autocomplete<Option, false, false, true> options={OPTIONS} label="FreeSolo" freeSolo value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => typeof params === 'string' ? params : params.title} />
    </Wrapper>;
}`,...k.parameters?.docs?.source}}}})))()}var j;function le(){return(le=e((()=>{h(),j={args:{options:p,label:`Выберите вариант`,getOptionLabel:e=>e.title},parameters:{docs:{disable:!0}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: OPTIONS,
    label: 'Выберите вариант',
    getOptionLabel: (params: Option) => params.title
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...j.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{c(),h(),M=o(),N=()=>(0,M.jsx)(m,{children:(0,M.jsx)(l,{label:`Loaded data error`,options:[],isLoadedDataError:!0,loadedDataError:`Ошибка загрузки данных`,getOptionLabel:e=>e.title,error:!0})}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Loaded data error" options={[]} isLoadedDataError loadedDataError="Ошибка загрузки данных" getOptionLabel={params => params.title} error />
  </Wrapper>`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{c(),h(),F=o(),I=()=>(0,F.jsx)(m,{children:(0,F.jsx)(l,{label:`Loading`,loading:!0,options:[],getOptionLabel:({title:e})=>e})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <Autocomplete<Option, false, false, false> label="Loading" loading options={[]} getOptionLabel={({
      title
    }) => title} />
    </Wrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=s(),c(),h(),z=o(),B=()=>{let[e,t]=(0,R.useState)([]);return(0,z.jsx)(m,{children:(0,z.jsx)(l,{multiple:!0,options:p,label:`Multiple`,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>e.title})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option[]>([]);
  return <Wrapper>
      <Autocomplete<Option, true, false, false> multiple options={OPTIONS} label="Multiple" value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => params.title} />
    </Wrapper>;
}`,...B.parameters?.docs?.source}}}})))()}var H,U,W,G;function ue(){return(ue=e((()=>{H=s(),f(),ee(),n(),re(),c(),h(),U=o(),W=i.div`
  min-width: 300px;
`,G=()=>{let[e,n]=(0,H.useState)([]);return(0,U.jsx)(W,{children:(0,U.jsx)(l,{multiple:!0,options:p,label:`Multiple custom tags`,value:e,onChange:(e,t)=>n(t),getOptionLabel:e=>e.title,renderTags:(e,n)=>e.map((e,r)=>{let{title:i}=e,{onDelete:a,...o}=n({index:r});return(0,U.jsx)(te,{title:`Custom tag`,children:(0,U.jsx)(t,{...o,onDelete:a,color:`warning`,size:`small`,label:(0,U.jsx)(d,{children:i}),variant:`light`})},i)})})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option[]>([]);
  return <Wrapper>
      <Autocomplete<Option, true, false, false> multiple options={OPTIONS} label="Multiple custom tags" value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => params.title} renderTags={(tags, getTagProps) => {
      return tags.map((tag, index) => {
        const {
          title
        } = tag;
        const {
          onDelete,
          ...tagProps
        } = getTagProps({
          index
        });
        return <Tooltip key={title} title="Custom tag">
                <Tag {...tagProps} onDelete={onDelete} color="warning" size="small" label={<OverflowTypography>{title}</OverflowTypography>} variant="light" />
              </Tooltip>;
      });
    }} />
    </Wrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var K,q;function de(){return(de=e((()=>{c(),h(),K=o(),q=()=>(0,K.jsx)(m,{children:(0,K.jsx)(l,{label:`No data`,size:`small`,multiple:!0,options:[],getOptionLabel:({title:e})=>e,required:!0})}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <Autocomplete<Option, true, false, false> label="No data" size="small" multiple options={[]} getOptionLabel={({
      title
    }) => title} required />
    </Wrapper>;
}`,...q.parameters?.docs?.source}}}})))()}var J,Y;function fe(){return(fe=e((()=>{c(),h(),J=o(),Y=()=>(0,J.jsx)(m,{children:(0,J.jsx)(l,{label:`Small`,size:`small`,options:p,getOptionLabel:({title:e})=>e})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Small" size="small" options={OPTIONS} getOptionLabel={({
    title
  }) => title} />
  </Wrapper>`,...Y.parameters?.docs?.source}}}})))()}var X,Z;function pe(){return(pe=e((()=>{c(),h(),X=o(),Z=()=>(0,X.jsx)(m,{children:(0,X.jsx)(l,{label:`Success`,options:p,helperText:`Успех`,getOptionLabel:({title:e})=>e,success:!0})}),Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Success" options={OPTIONS} helperText="Успех" getOptionLabel={({
    title
  }) => title} success />
  </Wrapper>`,...Z.parameters?.docs?.source}}}})))()}var Q,$;function me(){return(me=e((()=>{c(),h(),Q=o(),$=()=>(0,Q.jsx)(m,{children:(0,Q.jsx)(l,{label:`ErrorMessage`,options:p,helperText:`Ошибка`,getOptionLabel:e=>e.title,error:!0})}),$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="ErrorMessage" options={OPTIONS} helperText="Ошибка" getOptionLabel={params => params.title} error />
  </Wrapper>`,...$.parameters?.docs?.source}}}})))()}var he,ge;function _e(){return(_e=e((()=>{c(),ie(),x(),w(),se(),A(),le(),P(),L(),V(),ue(),de(),fe(),pe(),me(),he={title:`Form-Controls/Autocomplete`,component:l,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=268-23646)`}}}},ge=[`Interaction`,`BasicUsage`,`Multiple`,`FreeSolo`,`FocusedHelperText`,`MultipleCustomTags`,`LoadedDataError`,`WithError`,`Loading`,`Success`,`Small`,`NoData`,`CustomRenderOption`,`CustomRenderInput`]})))()}_e();export{v as BasicUsage,b as CustomRenderInput,C as CustomRenderOption,D as FocusedHelperText,k as FreeSolo,j as Interaction,N as LoadedDataError,I as Loading,B as Multiple,G as MultipleCustomTags,q as NoData,Y as Small,Z as Success,$ as WithError,ge as __namedExportsOrder,he as default};