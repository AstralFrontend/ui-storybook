import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ji as r,ln as i,lt as a,ya as o,yn as s,za as c}from"./preview-D_kXaHc2.js";import{n as l,t as u}from"./StepperWizard-DXWZmiQn.js";import{r as d,t as f}from"./common-DVxDAI_W.js";var p;function m(){return(m=e((()=>{s(),p=r.div`
  display: flex;
  justify-content: space-between;

  min-width: 200px;
  padding: ${({theme:e})=>e.spacing(3,6,0,6)};
`})))()}function h(){return(h=e((()=>{m()})))()}var g,_,v;function y(){return(y=e((()=>{g=c(),t(),n(),f(),l(),h(),_=o(),v=()=>{let[e,t]=(0,g.useState)(0);return(0,_.jsxs)(a,{children:[(0,_.jsx)(u,{alternativeLabel:!0,activeStep:e,steps:d}),(0,_.jsxs)(p,{children:[(0,_.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,_.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <Grid>
      <StepperWizard alternativeLabel activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </Grid>;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S;function C(){return(C=e((()=>{b=c(),t(),n(),f(),l(),h(),x=o(),S=()=>{let[e,t]=(0,b.useState)(0);return(0,x.jsxs)(a,{children:[(0,x.jsx)(u,{activeStep:e,steps:d,onClickPrevStep:e=>{t(e)}}),(0,x.jsxs)(p,{children:[(0,x.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,x.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleClickStep = (index: number) => {
    setActiveStep(index);
  };
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <Grid>
      <StepperWizard activeStep={activeStep} steps={steps} onClickPrevStep={handleClickStep} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </Grid>;
}`,...S.parameters?.docs?.source}}}})))()}var w,T,E;function D(){return(D=e((()=>{w=c(),t(),n(),f(),l(),h(),T=o(),E=()=>{let[e,t]=(0,w.useState)(0);return(0,T.jsxs)(a,{children:[(0,T.jsx)(u,{connector:`arrow`,activeStep:e,steps:d}),(0,T.jsxs)(p,{children:[(0,T.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,T.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <Grid>
      <StepperWizard connector="arrow" activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </Grid>;
}`,...E.parameters?.docs?.source}}}})))()}var O;function k(){return(k=e((()=>{O={args:{steps:[{label:`Step 1`,isError:!1},{label:`Step 2`,isError:!1},{label:`Step 3`,isError:!1}],activeStep:1,orientation:`vertical`},parameters:{docs:{disable:!0}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Step 1',
      isError: false
    }, {
      label: 'Step 2',
      isError: false
    }, {
      label: 'Step 3',
      isError: false
    }],
    activeStep: 1,
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=c(),t(),n(),f(),l(),h(),j=o(),M=()=>{let[e,t]=(0,A.useState)(0);return(0,j.jsxs)(a,{children:[(0,j.jsx)(u,{activeStep:e,steps:d,onClickPrevStep:e=>{t(e)}}),(0,j.jsxs)(p,{children:[(0,j.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,j.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleClickStep = (index: number) => {
    setActiveStep(index);
  };
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <Grid>
      <StepperWizard activeStep={activeStep} steps={steps} onClickPrevStep={handleClickStep} />

      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </Grid>;
}`,...M.parameters?.docs?.source}}}})))()}var P,F,I,L;function R(){return(R=e((()=>{P=c(),t(),f(),s(),l(),h(),F=o(),I=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,L=()=>{let[e,t]=(0,P.useState)(0);return(0,F.jsxs)(I,{children:[(0,F.jsx)(u,{orientation:`vertical`,activeStep:e,steps:d,onClickPrevStep:e=>{t(e)}}),(0,F.jsxs)(p,{children:[(0,F.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,F.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleClickStep = (index: number) => {
    setActiveStep(index);
  };
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <StoryWrapper>
      <StepperWizard orientation="vertical" activeStep={activeStep} steps={steps} onClickPrevStep={handleClickStep} />

      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </StoryWrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V;function H(){return(H=e((()=>{z=c(),t(),n(),f(),l(),h(),B=o(),V=()=>{let[e,t]=(0,z.useState)(0);return(0,B.jsxs)(a,{children:[(0,B.jsx)(u,{activeStep:e,steps:d}),(0,B.jsxs)(p,{children:[(0,B.jsx)(i,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,B.jsx)(i,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(0);
  const handleBack = () => {
    if (activeStep !== 0) {
      setActiveStep(prev => prev - 1);
    }
  };
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  };
  return <Grid>
      <StepperWizard activeStep={activeStep} steps={steps} />
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </Grid>;
}`,...V.parameters?.docs?.source}}}})))()}var U,W;function G(){return(G=e((()=>{l(),y(),C(),D(),k(),N(),R(),H(),U={title:`Navigation/Stepper/Deprecated/StepperWizard`,component:u,parameters:{docs:{description:{component:`StepperWizard - фасад для работы с базовыми компонентами Stepper

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=587-7920&t=5NZ3ZeClVX6dy8bd-0)`}}}},W=[`Interaction`,`BasicUsage`,`WithError`,`ConnectorArrow`,`AlternativeLabel`,`Orientation`,`OnClickPrevStep`]})))()}G();export{v as AlternativeLabel,S as BasicUsage,E as ConnectorArrow,O as Interaction,M as OnClickPrevStep,L as Orientation,V as WithError,W as __namedExportsOrder,U as default};