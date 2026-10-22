import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,ji as r,lt as i,xa as a,yn as ee}from"./preview-BQGJfZhY.js";import{t as te}from"./TextField-CBUJczku.js";import{t as ne}from"./TextField-BD5ucrWK.js";import{f as re,p as ie}from"./PageContentHeaderActions-DSNhl5EM.js";import{n as o,t as ae}from"./DashboardLayout-sh5Z148V.js";import{t as s}from"./Select-Bsj2NBHk.js";import{t as oe}from"./Select-TLMDIlwp.js";import{i as se,t as ce}from"./PageContent-BCOcKBqR.js";import{n as le,t as ue}from"./SearchOutlineMd-C_iBsiR9.js";import{t as de}from"./PageLayout-u3A-WSdi.js";import{t as fe}from"./PageLayout-BZFwZ2Ww.js";import{n as c,t as l}from"./MessageOutlineSm-BNaHTzW5.js";import{Ct as pe,K as me,S as u,b as d,ft as he,in as ge,t as _e,x as ve,y as f,z as ye}from"./common-B210jmrK.js";var p,m,h,g,_;function v(){return(v=e((()=>{ee(),p=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};
`,m=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
`,h=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: auto;
  }
`,g=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,_=r.div`
  display: flex;
  flex: 1;
  gap: ${({theme:e})=>e.spacing(2)};

 ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
  }
`})))()}var y,b;function x(){return(x=e((()=>{ae(),_e(),me(),ce(),fe(),y=a(),b=({pageHeader:e})=>{let t=pe.slice(0,10);return(0,y.jsxs)(o,{children:[(0,y.jsx)(ge,{}),(0,y.jsx)(o.Main,{children:(0,y.jsx)(de,{header:e,content:(0,y.jsx)(se,{children:(0,y.jsx)(he,{rows:t})})})}),(0,y.jsx)(ye,{})]})};try{b.displayName=`BasicUsageWrapper`,b.__docgenInfo={description:``,displayName:`BasicUsageWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Chip/stories/common/BasicUsageWrapper.tsx`,methods:[],props:{pageHeader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Chip/stories/common/BasicUsageWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`pageHeader`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function S(){return(S=e((()=>{v(),x()})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),ue(),re(),oe(),ne(),d(),ve(),S(),w=a(),T=()=>{let[e,t]=(0,C.useState)({all:!1,revoked:!1,expired:!1,active:!1}),n=e=>n=>{t(t=>({...t,[e]:n.target.checked}))};return(0,w.jsx)(b,{pageHeader:(0,w.jsx)(ie,{title:`Черновики`,subheader:(0,w.jsxs)(g,{children:[(0,w.jsxs)(_,{children:[(0,w.jsx)(te,{placeholder:`Поиск на странице...`,size:`small`,InputProps:{startAdornment:(0,w.jsx)(le,{})},hideHelperText:!0}),(0,w.jsx)(s,{value:``,placeholder:`Выберите вариант`,size:`small`,hideHelperText:!0}),(0,w.jsx)(s,{value:``,placeholder:`Выберите вариант`,size:`small`,hideHelperText:!0})]}),(0,w.jsx)(h,{children:(0,w.jsxs)(u,{mode:`multiple`,name:`multiple-filters`,children:[(0,w.jsx)(f,{label:`Все`,isSelected:e.all,onChange:n(`all`),value:`all`}),(0,w.jsx)(f,{label:`Отозванные`,isSelected:e.revoked,onChange:n(`revoked`),counter:5,value:`revoked`}),(0,w.jsx)(f,{label:`Истек`,status:`error`,counter:12,isSelected:e.expired,onChange:n(`expired`),value:`expired`}),(0,w.jsx)(f,{label:`Действует`,status:`success`,counter:10,isSelected:e.active,onChange:n(`active`),value:`active`})]})})]})})})},T.parameters={layout:`fullscreen`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [selectedChips, setSelectedChips] = useState<Record<string, boolean>>({
    all: false,
    revoked: false,
    expired: false,
    active: false
  });
  const handleChipChange = (chipId: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChips(prev => ({
      ...prev,
      [chipId]: event.target.checked
    }));
  };
  return <BasicUsageWrapper pageHeader={<PageHeader title="Черновики" subheader={<SubHeaderWrapper>
              <FiltersWrapper>
                <TextField placeholder="Поиск на странице..." size="small" InputProps={{
        startAdornment: <SearchOutlineMd />
      }} hideHelperText />
                <Select value="" placeholder="Выберите вариант" size="small" hideHelperText />
                <Select value="" placeholder="Выберите вариант" size="small" hideHelperText />
              </FiltersWrapper>

              <ChipWrapper>
                <ChipProvider mode="multiple" name="multiple-filters">
                  <Chip label="Все" isSelected={selectedChips.all} onChange={handleChipChange('all')} value="all" />
                  <Chip label="Отозванные" isSelected={selectedChips.revoked} onChange={handleChipChange('revoked')} counter={5} value="revoked" />
                  <Chip label="Истек" status="error" counter={12} isSelected={selectedChips.expired} onChange={handleChipChange('expired')} value="expired" />
                  <Chip label="Действует" status="success" counter={10} isSelected={selectedChips.active} onChange={handleChipChange('active')} value="active" />
                </ChipProvider>
              </ChipWrapper>
            </SubHeaderWrapper>} />} />;
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k;function A(){return(A=e((()=>{D=t(),d(),S(),O=a(),k=()=>{let[e,t]=(0,D.useState)(!1),n=e=>{t(e.target.checked)};return(0,O.jsxs)(m,{children:[(0,O.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,counter:12,size:`small`,onChange:n}),(0,O.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,counter:12,size:`medium`,onChange:n}),(0,O.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,counter:120,size:`large`,onChange:n})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
  };
  return <RowWrapper>
      <Chip label="Chips" status="success" isSelected={selected} counter={12} size="small" onChange={onChange} />
      <Chip label="Chips" status="success" isSelected={selected} counter={12} size="medium" onChange={onChange} />
      <Chip label="Chips" status="success" isSelected={selected} counter={120} size="large" onChange={onChange} />
    </RowWrapper>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M;function N(){return(N=e((()=>{l(),d(),S(),j=a(),M=()=>(0,j.jsxs)(m,{children:[(0,j.jsx)(f,{icon:(0,j.jsx)(c,{}),label:`Chips`,isDisabled:!0}),(0,j.jsx)(f,{endAdornment:(0,j.jsx)(c,{}),label:`Chips`,isDisabled:!0}),(0,j.jsx)(f,{status:`success`,label:`Chips`,isDisabled:!0}),(0,j.jsx)(f,{status:`warning`,label:`Chips`,isDisabled:!0,counter:12})]}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <RowWrapper>
      <Chip icon={<MessageOutlineSm />} label="Chips" isDisabled />
      <Chip endAdornment={<MessageOutlineSm />} label="Chips" isDisabled />
      <Chip status="success" label="Chips" isDisabled />
      <Chip status="warning" label="Chips" isDisabled counter={12} />
    </RowWrapper>;
}`,...M.parameters?.docs?.source}}}})))()}var P,F,I;function L(){return(L=e((()=>{P=t(),l(),d(),S(),F=a(),I=()=>{let[e,t]=(0,P.useState)(!1),n=e=>{t(e.target.checked)};return(0,F.jsxs)(m,{children:[(0,F.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,endAdornment:(0,F.jsx)(c,{}),size:`small`,onChange:n}),(0,F.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,endAdornment:(0,F.jsx)(c,{}),size:`medium`,onChange:n}),(0,F.jsx)(f,{label:`Chips`,status:`success`,isSelected:e,endAdornment:(0,F.jsx)(c,{}),size:`large`,onChange:n})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
  };
  return <RowWrapper>
      <Chip label="Chips" status="success" isSelected={selected} endAdornment={<MessageOutlineSm />} size="small" onChange={onChange} />
      <Chip label="Chips" status="success" isSelected={selected} endAdornment={<MessageOutlineSm />} size="medium" onChange={onChange} />
      <Chip label="Chips" status="success" isSelected={selected} endAdornment={<MessageOutlineSm />} size="large" onChange={onChange} />
    </RowWrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=t(),l(),d(),S(),z=a(),B=()=>{let[e,t]=(0,R.useState)(!1),n=e=>{t(e.target.checked)};return(0,z.jsxs)(m,{children:[(0,z.jsx)(f,{label:`Chips`,icon:(0,z.jsx)(c,{}),size:`small`,isSelected:e,onChange:n}),(0,z.jsx)(f,{label:`Chips`,icon:(0,z.jsx)(c,{}),size:`medium`,isSelected:e,onChange:n}),(0,z.jsx)(f,{label:`Chips`,icon:(0,z.jsx)(c,{}),size:`large`,isSelected:e,onChange:n})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
  };
  return <RowWrapper>
      <Chip label="Chips" icon={<MessageOutlineSm />} size="small" isSelected={selected} onChange={onChange} />
      <Chip label="Chips" icon={<MessageOutlineSm />} size="medium" isSelected={selected} onChange={onChange} />
      <Chip label="Chips" icon={<MessageOutlineSm />} size="large" isSelected={selected} onChange={onChange} />
    </RowWrapper>;
}`,...B.parameters?.docs?.source}}}})))()}var H,U,W;function G(){return(G=e((()=>{H=t(),d(),ve(),S(),U=a(),W=()=>{let[e,t]=(0,H.useState)(`one`),n=e=>{e.target.checked&&t(e.target.value)},[r,i]=(0,H.useState)({one:!0,two:!0,three:!1}),a=e=>t=>{i(n=>({...n,[e]:t.target.checked}))};return(0,U.jsxs)(p,{children:[(0,U.jsx)(u,{mode:`single`,name:`chip-mode-single`,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(f,{label:`Первый`,value:`one`,isSelected:e===`one`,onChange:n}),(0,U.jsx)(f,{label:`Второй`,value:`two`,isSelected:e===`two`,onChange:n}),(0,U.jsx)(f,{label:`Третий`,value:`three`,isSelected:e===`three`,onChange:n})]})}),(0,U.jsx)(u,{mode:`multiple`,name:`chip-mode-multiple`,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(f,{label:`Первый`,value:`m-one`,isSelected:r.one,onChange:a(`one`)}),(0,U.jsx)(f,{label:`Второй`,value:`m-two`,isSelected:r.two,onChange:a(`two`)}),(0,U.jsx)(f,{label:`Третий`,value:`m-three`,isSelected:r.three,onChange:a(`three`)})]})})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState('one');
  const handleSingleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSingleValue(event.target.value);
    }
  };
  const [multiple, setMultiple] = useState<Record<string, boolean>>({
    one: true,
    two: true,
    three: false
  });
  const handleMultipleChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setMultiple(prev => ({
      ...prev,
      [id]: event.target.checked
    }));
  };
  return <Wrapper>
      <ChipProvider mode="single" name="chip-mode-single">
        <RowWrapper>
          <Chip label="Первый" value="one" isSelected={singleValue === 'one'} onChange={handleSingleChange} />
          <Chip label="Второй" value="two" isSelected={singleValue === 'two'} onChange={handleSingleChange} />
          <Chip label="Третий" value="three" isSelected={singleValue === 'three'} onChange={handleSingleChange} />
        </RowWrapper>
      </ChipProvider>
      <ChipProvider mode="multiple" name="chip-mode-multiple">
        <RowWrapper>
          <Chip label="Первый" value="m-one" isSelected={multiple.one} onChange={handleMultipleChange('one')} />
          <Chip label="Второй" value="m-two" isSelected={multiple.two} onChange={handleMultipleChange('two')} />
          <Chip label="Третий" value="m-three" isSelected={multiple.three} onChange={handleMultipleChange('three')} />
        </RowWrapper>
      </ChipProvider>
    </Wrapper>;
}`,...W.parameters?.docs?.source},description:{story:"Параметр `mode` задаёт скрытый инпут чипа:\n- `single` — одиночный выбор (radio-input)\n- `multiple` — множественный выбор (checkbox-input)",...W.parameters?.docs?.description}}};try{W.displayName=`Mode`,W.__docgenInfo={description:"Параметр `mode` задаёт скрытый инпут чипа:\n- `single` — одиночный выбор (radio-input)\n- `multiple` — множественный выбор (checkbox-input)",displayName:`Mode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Chip/stories/Mode.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var K,q;function J(){return(J=e((()=>{d(),S(),K=a(),q=()=>(0,K.jsxs)(m,{children:[(0,K.jsx)(f,{label:`Chips`,isSelected:!0,size:`small`}),(0,K.jsx)(f,{label:`Chips`,isSelected:!0,size:`medium`}),(0,K.jsx)(f,{label:`Chips`,isSelected:!0,size:`large`})]}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <RowWrapper>
      <Chip label="Chips" isSelected size="small" />
      <Chip label="Chips" isSelected size="medium" />
      <Chip label="Chips" isSelected size="large" />
    </RowWrapper>;
}`,...q.parameters?.docs?.source}}}})))()}var be,Y,X;function xe(){return(xe=e((()=>{be=t(),d(),S(),Y=a(),X=()=>{let[e,t]=(0,be.useState)(!1),n=e=>{t(e.target.checked)};return(0,Y.jsxs)(m,{children:[(0,Y.jsx)(f,{size:`small`,label:`Small`,isSelected:e,onChange:n}),(0,Y.jsx)(f,{size:`medium`,label:`Medium`,isSelected:e,onChange:n}),(0,Y.jsx)(f,{size:`large`,label:`Large`,isSelected:e,onChange:n})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
  };
  return <RowWrapper>
      <Chip size="small" label="Small" isSelected={selected} onChange={onChange} />
      <Chip size="medium" label="Medium" isSelected={selected} onChange={onChange} />
      <Chip size="large" label="Large" isSelected={selected} onChange={onChange} />
    </RowWrapper>;
}`,...X.parameters?.docs?.source}}}})))()}var Se,Z,Q;function Ce(){return(Ce=e((()=>{Se=t(),n(),d(),S(),Z=a(),Q=()=>{let[e,t]=(0,Se.useState)({success:!1,warning:!1,error:!1}),n=e=>n=>{t(t=>({...t,[e]:n.target.checked}))};return(0,Z.jsxs)(i,{container:!0,spacing:3,columns:3,children:[(0,Z.jsxs)(p,{children:[(0,Z.jsx)(f,{label:`Chips`,status:`success`,size:`small`,isSelected:e.success,onChange:n(`success`)}),(0,Z.jsx)(f,{label:`Chips`,status:`warning`,size:`small`,isSelected:e.warning,onChange:n(`warning`)}),(0,Z.jsx)(f,{label:`Chips`,status:`error`,size:`small`,isSelected:e.error,onChange:n(`error`)})]}),(0,Z.jsxs)(p,{children:[(0,Z.jsx)(f,{label:`Chips`,status:`success`,size:`medium`,isSelected:e.success,onChange:n(`success`)}),(0,Z.jsx)(f,{label:`Chips`,status:`warning`,size:`medium`,isSelected:e.warning,onChange:n(`warning`)}),(0,Z.jsx)(f,{label:`Chips`,status:`error`,size:`medium`,isSelected:e.error,onChange:n(`error`)})]}),(0,Z.jsxs)(p,{children:[(0,Z.jsx)(f,{label:`Chips`,status:`success`,size:`large`,isSelected:e.success,onChange:n(`success`)}),(0,Z.jsx)(f,{label:`Chips`,status:`warning`,size:`large`,isSelected:e.warning,onChange:n(`warning`)}),(0,Z.jsx)(f,{label:`Chips`,status:`error`,size:`large`,isSelected:e.error,onChange:n(`error`)})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [selectedChips, setSelectedChips] = useState<Record<string, boolean>>({
    success: false,
    warning: false,
    error: false
  });
  const handleChipChange = (chipId: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedChips(prev => ({
      ...prev,
      [chipId]: event.target.checked
    }));
  };
  return <Grid container spacing={3} columns={3}>
      <Wrapper>
        <Chip label="Chips" status="success" size="small" isSelected={selectedChips.success} onChange={handleChipChange('success')} />
        <Chip label="Chips" status="warning" size="small" isSelected={selectedChips.warning} onChange={handleChipChange('warning')} />
        <Chip label="Chips" status="error" size="small" isSelected={selectedChips.error} onChange={handleChipChange('error')} />
      </Wrapper>
      <Wrapper>
        <Chip label="Chips" status="success" size="medium" isSelected={selectedChips.success} onChange={handleChipChange('success')} />
        <Chip label="Chips" status="warning" size="medium" isSelected={selectedChips.warning} onChange={handleChipChange('warning')} />
        <Chip label="Chips" status="error" size="medium" isSelected={selectedChips.error} onChange={handleChipChange('error')} />
      </Wrapper>
      <Wrapper>
        <Chip label="Chips" status="success" size="large" isSelected={selectedChips.success} onChange={handleChipChange('success')} />
        <Chip label="Chips" status="warning" size="large" isSelected={selectedChips.warning} onChange={handleChipChange('warning')} />
        <Chip label="Chips" status="error" size="large" isSelected={selectedChips.error} onChange={handleChipChange('error')} />
      </Wrapper>
    </Grid>;
}`,...Q.parameters?.docs?.source}}}})))()}var we,Te;function $(){return($=e((()=>{d(),E(),A(),N(),L(),V(),G(),J(),xe(),Ce(),we={title:`Tags-and-Badges/Chips`,component:f,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/LmEvRaCUG8xFOAYv8mDw20/Tag-%C2%B7-CheckableTag-%C2%B7-Chips?node-id=2-9802&t=TVABnzeR4EumYvS4-0)

Для использования в фильтрах см. [FormQuickFilters](/story/react-hook-form-formFilters--docs)`}}}},Te=[`BasicUsage`,`Size`,`Status`,`Icon`,`Disabled`,`EndAdornment`,`Counter`,`Selected`,`Mode`]})))()}$();export{T as BasicUsage,k as Counter,M as Disabled,I as EndAdornment,B as Icon,W as Mode,q as Selected,X as Size,Q as Status,Te as __namedExportsOrder,we as default};