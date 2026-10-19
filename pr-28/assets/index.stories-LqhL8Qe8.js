import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,dt as r,ft as i,ji as a,lt as o,xa as s,yn as c}from"./preview-dprL7b9n.js";import{a as l,i as u,t as d}from"./ToggleButton-CNYSlG40.js";import{t as f}from"./Paper-eVn5ZdY_.js";import{t as p}from"./Paper-neggwVKl.js";import{t as m}from"./ToggleButton-BHBeGRDQ.js";var h,g,_,v;function y(){return(y=e((()=>{h=t(),p(),c(),m(),r(),l(),g=s(),_=a(f)`
  padding: ${({theme:e})=>e.spacing(4)};
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`,v=()=>{let[e,t]=(0,h.useState)(`val1`);return(0,g.jsxs)(_,{children:[(0,g.jsx)(i,{variant:`caption`,component:`h6`,gutterBottom:!0,children:`Сведения о представителе`}),(0,g.jsxs)(u,{exclusive:!0,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,g.jsx)(d,{value:`val1`,children:`Юридическое лицо`}),(0,g.jsx)(d,{value:`val2`,children:`Индивидуальный предприниматель`}),(0,g.jsx)(d,{value:`val3`,children:`Физическое лицо`})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('val1');
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  };
  return <ExamplePaper>
      <Typography variant="caption" component="h6" gutterBottom>
        Сведения о представителе
      </Typography>
      <ToggleButtonGroup exclusive onChange={handleChange} value={value}>
        <ToggleButton value="val1">Юридическое лицо</ToggleButton>
        <ToggleButton value="val2">Индивидуальный предприниматель</ToggleButton>
        <ToggleButton value="val3">Физическое лицо</ToggleButton>
      </ToggleButtonGroup>
    </ExamplePaper>;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S;function C(){return(C=e((()=>{b=t(),n(),m(),l(),x=s(),S=()=>{let[e,t]=(0,b.useState)([`val1`]);return(0,x.jsx)(o,{spacing:6,children:(0,x.jsxs)(u,{onChange:(e,n)=>{t(n)},value:e,children:[(0,x.jsx)(d,{value:`val1`,children:`Toggle button`}),(0,x.jsx)(d,{value:`val2`,children:`Toggle button`}),(0,x.jsx)(d,{value:`val3`,children:`Toggle button`})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(['val1']);
  const handleChange = (_event: MouseEvent<HTMLElement>, selectedValue: string[]) => {
    setValue(selectedValue);
  };
  return <Grid spacing={6}>
      <ToggleButtonGroup onChange={handleChange} value={value}>
        <ToggleButton value="val1">Toggle button</ToggleButton>
        <ToggleButton value="val2">Toggle button</ToggleButton>
        <ToggleButton value="val3">Toggle button</ToggleButton>
      </ToggleButtonGroup>
    </Grid>;
}`,...S.parameters?.docs?.source},description:{story:`Параметр \`exclusive\` отвечает за режим выбора в группе:

- true — разрешается выбирать только один ToggleButton одновременно,

- false — можно выбирать несколько кнопок одновременно.`,...S.parameters?.docs?.description}}};try{S.displayName=`Exclusive`,S.__docgenInfo={description:`Параметр \`exclusive\` отвечает за режим выбора в группе:

- true — разрешается выбирать только один ToggleButton одновременно,

- false — можно выбирать несколько кнопок одновременно.`,displayName:`Exclusive`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ToggleButtonGroup/stories/Exclusive.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{m(),w=s(),T={args:{color:`primary`,children:[(0,w.jsx)(d,{value:`val1`,children:`Toggle Button 1`},`val1`),(0,w.jsx)(d,{value:`val2`,children:`Toggle Button 2`},`val2`),(0,w.jsx)(d,{value:`val3`,disabled:!0,children:`Toggle Button 3`},`val3`)],value:`val1`,exclusive:!0},parameters:{docs:{disable:!0}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    children: [<ToggleButton value="val1" key="val1">
        Toggle Button 1
      </ToggleButton>, <ToggleButton value="val2" key="val2">
        Toggle Button 2
      </ToggleButton>, <ToggleButton value="val3" key="val3" disabled>
        Toggle Button 3
      </ToggleButton>],
    value: 'val1',
    exclusive: true
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k,A,j,M;function N(){return(N=e((()=>{D=t(),n(),p(),c(),m(),l(),O=s(),k=a(f)`
  padding: ${({theme:e})=>e.spacing(4)};

  background-color: ${({theme:e})=>e.palette.grey[100]};
`,A=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,j=a(o)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 100%;
    max-width: 100%;
  }
`,M=()=>{let[e,t]=(0,D.useState)(`val1`),[n,r]=(0,D.useState)(`val1`);return(0,O.jsxs)(j,{container:!0,spacing:6,children:[(0,O.jsx)(A,{children:(0,O.jsx)(k,{variant:`outlined`,children:(0,O.jsxs)(u,{variant:`transparent`,exclusive:!0,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,O.jsx)(d,{value:`val1`,children:`Вариант 1`}),(0,O.jsx)(d,{value:`val2`,children:`Вариант 2`}),(0,O.jsx)(d,{value:`val3`,children:`Вариант 3`})]})})}),(0,O.jsx)(A,{children:(0,O.jsx)(k,{variant:`outlined`,children:(0,O.jsxs)(u,{variant:`plain`,exclusive:!0,onChange:(e,t)=>{t&&r(t)},value:n,children:[(0,O.jsx)(d,{value:`val1`,children:`Вариант 1`}),(0,O.jsx)(d,{value:`val2`,children:`Вариант 2`}),(0,O.jsx)(d,{value:`val3`,children:`Вариант 3`})]})})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [valueTransparent, setValueTransparent] = useState('val1');
  const [valuePlain, setValuePlain] = useState('val1');
  const handleChangeTransparent = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValueTransparent(selectedValue);
    }
  };
  const handleChangePlain = (_event: MouseEvent<HTMLElement>, selectedValue: string) => {
    if (selectedValue) {
      setValuePlain(selectedValue);
    }
  };
  return <StyledGrid container spacing={6}>
      <Wrapper>
        <StyledPaper variant="outlined">
          <ToggleButtonGroup variant="transparent" exclusive onChange={handleChangeTransparent} value={valueTransparent}>
            <ToggleButton value="val1">Вариант 1</ToggleButton>
            <ToggleButton value="val2">Вариант 2</ToggleButton>
            <ToggleButton value="val3">Вариант 3</ToggleButton>
          </ToggleButtonGroup>
        </StyledPaper>
      </Wrapper>
      <Wrapper>
        <StyledPaper variant="outlined">
          <ToggleButtonGroup variant="plain" exclusive onChange={handleChangePlain} value={valuePlain}>
            <ToggleButton value="val1">Вариант 1</ToggleButton>
            <ToggleButton value="val2">Вариант 2</ToggleButton>
            <ToggleButton value="val3">Вариант 3</ToggleButton>
          </ToggleButtonGroup>
        </StyledPaper>
      </Wrapper>
    </StyledGrid>;
}`,...M.parameters?.docs?.source},description:{story:"Параметр `variant` определяет стиль отображения группы кнопок:\n\n- `transparent` — прозрачный фон кнопок ToggleButton\n\n- `plain` — белый фон кнопок ToggleButton",...M.parameters?.docs?.description}}};try{M.displayName=`Variant`,M.__docgenInfo={description:"Параметр `variant` определяет стиль отображения группы кнопок:\n\n- `transparent` — прозрачный фон кнопок ToggleButton\n\n- `plain` — белый фон кнопок ToggleButton",displayName:`Variant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ToggleButtonGroup/stories/Variant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I;function L(){return(L=e((()=>{P=t(),n(),m(),l(),F=s(),I=()=>{let[e,t]=(0,P.useState)();return(0,F.jsx)(o,{spacing:6,children:(0,F.jsxs)(u,{exclusive:!0,isError:!0,errorText:`Обязательно`,onChange:(e,n)=>{n&&t(n)},value:e,children:[(0,F.jsx)(d,{value:`val1`,children:`Toggle button`}),(0,F.jsx)(d,{value:`val2`,children:`Toggle button`}),(0,F.jsx)(d,{value:`val3`,children:`Toggle button`})]})})}})))()}var R,z;function B(){return(B=e((()=>{l(),y(),C(),E(),N(),L(),R={title:`Buttons/ToggleButton/ToggleButtonGroup`,component:u,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1176-17645)`}}}},z=[`Interaction`,`BasicUsage`,`Variant`,`Exclusive`,`WithError`]})))()}B();export{v as BasicUsage,S as Exclusive,T as Interaction,M as Variant,I as WithError,z as __namedExportsOrder,R as default};