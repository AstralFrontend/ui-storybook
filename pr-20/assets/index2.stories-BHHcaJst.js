import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Va as n,Z as ee,ct as r,ji as te,lt as i,xa as a,yn as ne}from"./preview-C6mvn2Tz.js";import{n as o,t as s}from"./Autocomplete-C3Gf6iht.js";import{t as re}from"./Tooltip-CxbDaSYS.js";import{t as c}from"./MenuItem-CYjgSepq.js";import{t as ie}from"./Tooltip-ClAxxMrX.js";import{t as l}from"./MenuItem-Cou4BIGE.js";import{t as u}from"./OverflowTypography-B8Hoy4e0.js";import{t as d}from"./OverflowTypography-CQag1ooc.js";import{a as f,n as p,t as m}from"./common-DJskNAjW.js";var h,g,_;function v(){return(v=e((()=>{h=n(),o(),m(),g=a(),_=()=>{let[e,t]=(0,h.useState)(null);return(0,g.jsx)(p,{children:(0,g.jsx)(s,{options:f,label:`Выберите вариант`,value:e,getOptionLabel:e=>e.title,onChange:(e,n)=>t(n)})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option | null>(null);
  return <Wrapper>
      <Autocomplete<Option, false, false, false> options={OPTIONS} label="Выберите вариант" value={value} getOptionLabel={params => params.title} onChange={(_, newVal) => setValue(newVal)} />
    </Wrapper>;
}`,..._.parameters?.docs?.source}}}})))()}var y,ae,b;function x(){return(x=e((()=>{l(),d(),o(),m(),y=a(),ae=n(),b=()=>(0,y.jsx)(p,{children:(0,y.jsx)(s,{label:`Custom render input`,size:`small`,options:f,getOptionLabel:({title:e})=>e,renderOption:(e,t)=>(0,ae.createElement)(c,{...e,key:e.id},(0,y.jsx)(u,{rowsCount:2,children:`Custom render option - ${t.title}`})),renderInput:e=>(0,y.jsxs)(`div`,{ref:e.InputProps.ref,children:[(0,y.jsx)(`label`,{children:e.label}),(0,y.jsx)(`input`,{type:`text`,ref:e.inputProps.ref,value:e.inputProps.value,onMouseDown:e.inputProps.onMouseDown,placeholder:e.placeholder})]})})}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <Wrapper>
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
  </Wrapper>`,...b.parameters?.docs?.source}}}})))()}var S,C,w;function T(){return(T=e((()=>{l(),d(),o(),m(),S=a(),C=n(),w=()=>(0,S.jsx)(p,{children:(0,S.jsx)(s,{label:`Custom render option`,size:`small`,options:f,getOptionLabel:({title:e})=>e,renderOption:(e,t)=>(0,C.createElement)(c,{...e,key:e.id},(0,S.jsx)(u,{rowsCount:2,children:`Custom render option - ${t.title}`}))})}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Custom render option" size="small" options={OPTIONS} getOptionLabel={({
    title
  }) => title} renderOption={(props, option) => <MenuItem {...props} key={props.id}>
          <OverflowTypography rowsCount={2}>
            {\`Custom render option - \${option.title}\`}
          </OverflowTypography>
        </MenuItem>} />
  </Wrapper>`,...w.parameters?.docs?.source}}}})))()}var E,D,O;function oe(){return(oe=e((()=>{r(),o(),m(),E=a(),D=`Начните вводить ИНН`,O=()=>(0,E.jsxs)(i,{container:!0,spacing:4,direction:`column`,children:[(0,E.jsx)(p,{children:(0,E.jsx)(s,{label:`Организация`,options:[],focusedHelperText:D,getOptionLabel:e=>e.title})}),(0,E.jsx)(p,{children:(0,E.jsx)(s,{label:`Организация (freeSolo)`,freeSolo:!0,options:[],focusedHelperText:D,getOptionLabel:e=>typeof e==`string`?e:e.title})})]}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={4} direction="column">
      <Wrapper>
        <Autocomplete<Option, false, false, false> label="Организация" options={[]} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => option.title} />
      </Wrapper>
      <Wrapper>
        <Autocomplete<Option, false, false, true> label="Организация (freeSolo)" freeSolo options={[]} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => typeof option === 'string' ? option : option.title} />
      </Wrapper>
    </Grid>;
}`,...O.parameters?.docs?.source},description:{story:`Popover с подсказкой открывается на фокус пустого поля`,...O.parameters?.docs?.description}}};try{O.displayName=`FocusedHelperText`,O.__docgenInfo={description:`Popover с подсказкой открывается на фокус пустого поля`,displayName:`FocusedHelperText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Autocomplete/stories/FocusedHelperText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var se,k,A;function ce(){return(ce=e((()=>{se=n(),o(),m(),k=a(),A=()=>{let[e,t]=(0,se.useState)();return(0,k.jsx)(p,{children:(0,k.jsx)(s,{options:f,label:`FreeSolo`,freeSolo:!0,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>typeof e==`string`?e:e.title})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option | string | null | undefined>();
  return <Wrapper>
      <Autocomplete<Option, false, false, true> options={OPTIONS} label="FreeSolo" freeSolo value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => typeof params === 'string' ? params : params.title} />
    </Wrapper>;
}`,...A.parameters?.docs?.source}}}})))()}var j;function le(){return(le=e((()=>{m(),j={args:{options:f,label:`Выберите вариант`,getOptionLabel:e=>e.title},parameters:{docs:{disable:!0}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{o(),m(),M=a(),N=()=>(0,M.jsx)(p,{children:(0,M.jsx)(s,{label:`Loaded data error`,options:[],isLoadedDataError:!0,loadedDataError:`Ошибка загрузки данных`,getOptionLabel:e=>e.title,error:!0})}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Loaded data error" options={[]} isLoadedDataError loadedDataError="Ошибка загрузки данных" getOptionLabel={params => params.title} error />
  </Wrapper>`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{o(),m(),F=a(),I=()=>(0,F.jsx)(p,{children:(0,F.jsx)(s,{label:`Loading`,loading:!0,options:[],getOptionLabel:({title:e})=>e})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <Autocomplete<Option, false, false, false> label="Loading" loading options={[]} getOptionLabel={({
      title
    }) => title} />
    </Wrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=n(),o(),m(),z=a(),B=()=>{let[e,t]=(0,R.useState)([]);return(0,z.jsx)(p,{children:(0,z.jsx)(s,{multiple:!0,options:f,label:`Multiple`,value:e,onChange:(e,n)=>t(n),getOptionLabel:e=>e.title})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Option[]>([]);
  return <Wrapper>
      <Autocomplete<Option, true, false, false> multiple options={OPTIONS} label="Multiple" value={value} onChange={(_, newVal) => setValue(newVal)} getOptionLabel={params => params.title} />
    </Wrapper>;
}`,...B.parameters?.docs?.source}}}})))()}var H,U,W,G;function ue(){return(ue=e((()=>{H=n(),d(),ne(),ee(),ie(),o(),m(),U=a(),W=te.div`
  min-width: 300px;
`,G=()=>{let[e,n]=(0,H.useState)([]);return(0,U.jsx)(W,{children:(0,U.jsx)(s,{multiple:!0,options:f,label:`Multiple custom tags`,value:e,onChange:(e,t)=>n(t),getOptionLabel:e=>e.title,renderTags:(e,n)=>e.map((e,ee)=>{let{title:r}=e,{onDelete:te,...i}=n({index:ee});return(0,U.jsx)(re,{title:`Custom tag`,children:(0,U.jsx)(t,{...i,onDelete:te,color:`warning`,size:`small`,label:(0,U.jsx)(u,{children:r}),variant:`light`})},r)})})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}}})))()}var K,q;function de(){return(de=e((()=>{o(),m(),K=a(),q=()=>(0,K.jsx)(p,{children:(0,K.jsx)(s,{label:`No data`,size:`small`,multiple:!0,options:[],getOptionLabel:({title:e})=>e,required:!0})}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <Autocomplete<Option, true, false, false> label="No data" size="small" multiple options={[]} getOptionLabel={({
      title
    }) => title} required />
    </Wrapper>;
}`,...q.parameters?.docs?.source}}}})))()}var J,Y;function fe(){return(fe=e((()=>{o(),m(),J=a(),Y=()=>(0,J.jsx)(p,{children:(0,J.jsx)(s,{label:`Small`,size:`small`,options:f,getOptionLabel:({title:e})=>e})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Small" size="small" options={OPTIONS} getOptionLabel={({
    title
  }) => title} />
  </Wrapper>`,...Y.parameters?.docs?.source}}}})))()}var X,Z;function pe(){return(pe=e((()=>{o(),m(),X=a(),Z=()=>(0,X.jsx)(p,{children:(0,X.jsx)(s,{label:`Success`,options:f,helperText:`Успех`,getOptionLabel:({title:e})=>e,success:!0})}),Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="Success" options={OPTIONS} helperText="Успех" getOptionLabel={({
    title
  }) => title} success />
  </Wrapper>`,...Z.parameters?.docs?.source}}}})))()}var Q,$;function me(){return(me=e((()=>{o(),m(),Q=a(),$=()=>(0,Q.jsx)(p,{children:(0,Q.jsx)(s,{label:`ErrorMessage`,options:f,helperText:`Ошибка`,getOptionLabel:e=>e.title,error:!0})}),$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <Autocomplete<Option, false, false, false> label="ErrorMessage" options={OPTIONS} helperText="Ошибка" getOptionLabel={params => params.title} error />
  </Wrapper>`,...$.parameters?.docs?.source}}}})))()}var he,ge;function _e(){return(_e=e((()=>{o(),v(),x(),T(),oe(),ce(),le(),P(),L(),V(),ue(),de(),fe(),pe(),me(),he={title:`Form-Controls/Autocomplete`,component:s,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=268-23646)`}}}},ge=[`Interaction`,`BasicUsage`,`Multiple`,`FreeSolo`,`FocusedHelperText`,`MultipleCustomTags`,`LoadedDataError`,`WithError`,`Loading`,`Success`,`Small`,`NoData`,`CustomRenderOption`,`CustomRenderInput`]})))()}_e();export{_ as BasicUsage,b as CustomRenderInput,w as CustomRenderOption,O as FocusedHelperText,A as FreeSolo,j as Interaction,N as LoadedDataError,I as Loading,B as Multiple,G as MultipleCustomTags,q as NoData,Y as Small,Z as Success,$ as WithError,ge as __namedExportsOrder,he as default};