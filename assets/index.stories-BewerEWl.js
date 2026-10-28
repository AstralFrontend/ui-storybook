import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-BabqIrZj.js";import{a as ee,c as l,n as u,o as d,s as f,t as p}from"./Step-C89j9q83.js";import{a as te,c as ne,d as m,i as re,n as h,s as ie,t as ae,u as oe}from"./StarFillSm-DH4NwErI.js";var g,_;function v(){return(v=e((()=>{s(),g=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`,_=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
  justify-content: center;
`})))()}function y(){return(y=e((()=>{v()})))()}var b,x,S;function se(){return(se=e((()=>{b=c(),l(),p(),y(),x=o(),S=()=>{let[e,t]=(0,b.useState)(2);return(0,x.jsx)(g,{children:(0,x.jsxs)(f,{alternativeLabel:!0,activeStep:e,onClickStep:e=>{t(e)},children:[(0,x.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,x.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,x.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,x.jsx)(u,{label:`Подтверждение данных`,stepId:4})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(2);
  const handleClickStep = (stepId: number) => {
    setActiveStep(stepId);
  };
  return <StoryWrapper>
      <NewStepper alternativeLabel activeStep={activeStep} onClickStep={handleClickStep}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
    </StoryWrapper>;
}`,...S.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=c(),l(),p(),y(),w=o(),T=()=>{let[e,t]=(0,C.useState)(1);return(0,w.jsx)(g,{children:(0,w.jsxs)(f,{activeStep:e,connector:`arrow`,onClickStep:e=>{t(e)},children:[(0,w.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,w.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,w.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,w.jsx)(u,{label:`Подтверждение данных`,stepId:4})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(1);
  const handleClickStep = (stepId: number) => {
    setActiveStep(stepId);
  };
  return <StoryWrapper>
      <NewStepper activeStep={activeStep} connector="arrow" onClickStep={handleClickStep}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
    </StoryWrapper>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{oe(),ie(),re(),ae(),s(),l(),p(),ee(),y(),D=o(),O=()=>{let e=i(u)`
    & .${d.root}.${d.success} {
      color: ${({theme:e})=>e.palette.primary[800]};
    }

    & .${d.root}.${d.warning} {
      color: ${({theme:e})=>e.palette.warning[800]};
    }
  `;return(0,D.jsxs)(g,{children:[(0,D.jsxs)(f,{activeStep:2,connector:`arrow`,children:[(0,D.jsx)(u,{label:`Паспортные данные`,stepId:1,icon:e=>(0,D.jsx)(h,{...e})}),(0,D.jsx)(u,{label:`Адрес регистрации`,stepId:2,icon:e=>(0,D.jsx)(m,{...e})}),(0,D.jsx)(u,{label:`Контактная информация`,stepId:3,icon:e=>(0,D.jsx)(ne,{...e})}),(0,D.jsx)(u,{label:`Подтверждение данных`,stepId:4,icon:e=>(0,D.jsx)(te,{...e})})]}),(0,D.jsxs)(f,{activeStep:2,alternativeLabel:!0,children:[(0,D.jsx)(e,{label:`Паспортные данные`,stepId:1,icon:e=>(0,D.jsx)(h,{...e})}),(0,D.jsx)(e,{label:`Адрес регистрации`,stepId:2,icon:e=>(0,D.jsx)(m,{...e})}),(0,D.jsx)(e,{label:`Контактная информация`,stepId:3,icon:e=>(0,D.jsx)(ne,{...e})}),(0,D.jsx)(e,{label:`Подтверждение данных`,stepId:4,icon:e=>(0,D.jsx)(te,{...e})})]})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const StyledStep = styled(Step)\`
    & .\${stepIconClassnames.root}.\${stepIconClassnames.success} {
      color: \${({
    theme
  }) => theme.palette.primary[800]};
    }

    & .\${stepIconClassnames.root}.\${stepIconClassnames.warning} {
      color: \${({
    theme
  }) => theme.palette.warning[800]};
    }
  \`;
  return <StoryWrapper>
      <NewStepper activeStep={2} connector="arrow">
        <Step label="Паспортные данные" stepId={1} icon={props => <StarFillSm {...props} />} />
        <Step label="Адрес регистрации" stepId={2} icon={props => <LocationFillSm {...props} />} />
        <Step label="Контактная информация" stepId={3} icon={props => <MailFillSm {...props} />} />
        <Step label="Подтверждение данных" stepId={4} icon={props => <PhoneFillSm {...props} />} />
      </NewStepper>

      <NewStepper activeStep={2} alternativeLabel>
        <StyledStep label="Паспортные данные" stepId={1} icon={props => <StarFillSm {...props} />} />
        <StyledStep label="Адрес регистрации" stepId={2} icon={props => <LocationFillSm {...props} />} />
        <StyledStep label="Контактная информация" stepId={3} icon={props => <MailFillSm {...props} />} />
        <StyledStep label="Подтверждение данных" stepId={4} icon={props => <PhoneFillSm {...props} />} />
      </NewStepper>
    </StoryWrapper>;
}`,...O.parameters?.docs?.source},description:{story:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классам `stepIconClassnames`.\n\nДля применения классов к иконке необходимо передать их через props\n\n```tsx\nicon={({ className, ...restProps }) => <StarFillSm className={className} {...restProps} />}\n```",...O.parameters?.docs?.description}}};try{O.displayName=`CustomStepIcons`,O.__docgenInfo={description:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классам `stepIconClassnames`.\n\nДля применения классов к иконке необходимо передать их через props\n\n```tsx\nicon={({ className, ...restProps }) => <StarFillSm className={className} {...restProps} />}\n```",displayName:`CustomStepIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/stories/CustomStepIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var A,j,M;function N(){return(N=e((()=>{A=c(),t(),l(),p(),y(),j=o(),M=()=>{let[e,t]=(0,A.useState)(3);return(0,j.jsxs)(g,{children:[(0,j.jsxs)(f,{activeStep:e,onClickPrevStep:e=>{t(e)},connector:`arrow`,children:[(0,j.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,j.jsx)(u,{label:`Адрес регистрации`,stepId:2,isDisabled:!0,isCompleted:!1}),(0,j.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,j.jsx)(u,{label:`Подтверждение данных`,stepId:4})]}),(0,j.jsxs)(_,{children:[(0,j.jsx)(a,{variant:`text`,onClick:()=>t(e=>e-1),children:`Назад`}),(0,j.jsx)(a,{variant:`text`,onClick:()=>t(e=>e+1),children:`Вперед`})]})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(3);
  const handleClickStep = (index: number) => {
    setActiveStep(index);
  };
  return <StoryWrapper>
      <NewStepper activeStep={activeStep} onClickPrevStep={handleClickStep} connector="arrow">
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} isDisabled isCompleted={false} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>

      <ButtonWrapper>
        <Button variant="text" onClick={() => setActiveStep(prev => prev - 1)}>
          Назад
        </Button>
        <Button variant="text" onClick={() => setActiveStep(prev => prev + 1)}>
          Вперед
        </Button>
      </ButtonWrapper>
    </StoryWrapper>;
}`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{n(),l(),p(),y(),P=o(),F=()=>(0,P.jsxs)(g,{children:[(0,P.jsx)(r,{variant:`h6`,children:`Горизонтальное отображение с соединительными линиями`}),(0,P.jsxs)(f,{alternativeLabel:!0,activeStep:2,children:[(0,P.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,P.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,P.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,P.jsx)(u,{label:`Подтверждение данных`,stepId:4})]}),(0,P.jsx)(r,{variant:`h6`,children:`Горизонтальное отображение с соединительными стрелками`}),(0,P.jsxs)(f,{connector:`arrow`,activeStep:2,children:[(0,P.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,P.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,P.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,P.jsx)(u,{label:`Подтверждение данных`,stepId:4})]}),(0,P.jsx)(r,{variant:`h6`,children:`Вертикальное отображение`}),(0,P.jsxs)(f,{orientation:`vertical`,activeStep:4,children:[(0,P.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,P.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,P.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,P.jsx)(u,{label:`Подтверждение данных`,stepId:4})]})]}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <StoryWrapper>
      <Typography variant="h6">
        Горизонтальное отображение с соединительными линиями
      </Typography>
      <NewStepper alternativeLabel activeStep={2}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
      <Typography variant="h6">
        Горизонтальное отображение с соединительными стрелками
      </Typography>
      <NewStepper connector="arrow" activeStep={2}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
      <Typography variant="h6">Вертикальное отображение</Typography>
      <NewStepper orientation="vertical" activeStep={4}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
    </StoryWrapper>;
}`,...F.parameters?.docs?.source}}}})))()}var L,R,z;function B(){return(B=e((()=>{L=c(),t(),l(),p(),y(),R=o(),z=()=>{let[e,t]=(0,L.useState)(2);return(0,R.jsxs)(g,{children:[(0,R.jsxs)(f,{activeStep:e,onClickPrevStep:e=>{t(e)},connector:`arrow`,children:[(0,R.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,R.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,R.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,R.jsx)(u,{label:`Подтверждение данных`,stepId:4})]}),(0,R.jsxs)(_,{children:[(0,R.jsx)(a,{variant:`text`,onClick:()=>t(e=>e-1),children:`Назад`}),(0,R.jsx)(a,{variant:`text`,onClick:()=>t(e=>e+1),children:`Вперед`})]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(2);
  const handleClickStep = (index: number) => {
    setActiveStep(index);
  };
  return <StoryWrapper>
      <NewStepper activeStep={activeStep} onClickPrevStep={handleClickStep} connector="arrow">
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
      <ButtonWrapper>
        <Button variant="text" onClick={() => setActiveStep(prev => prev - 1)}>
          Назад
        </Button>
        <Button variant="text" onClick={() => setActiveStep(prev => prev + 1)}>
          Вперед
        </Button>
      </ButtonWrapper>
    </StoryWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H,U;function W(){return(W=e((()=>{V=c(),l(),p(),y(),H=o(),U=()=>{let[e,t]=(0,V.useState)(2);return(0,H.jsx)(g,{children:(0,H.jsxs)(f,{activeStep:e,onClickStep:e=>{t(e)},alternativeLabel:!0,children:[(0,H.jsx)(u,{label:`Паспортные данные`,stepId:1,onClick:()=>console.log(`click`)}),(0,H.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,H.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,H.jsx)(u,{label:`Подтверждение данных`,stepId:4})]})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(2);
  const handleClickStep = (stepId: number) => {
    setActiveStep(stepId);
  };
  return <StoryWrapper>
      <NewStepper activeStep={activeStep} onClickStep={handleClickStep} alternativeLabel>
        <Step label="Паспортные данные" stepId={1} onClick={() => console.log('click')} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
    </StoryWrapper>;
}`,...U.parameters?.docs?.source},description:{story:"Обработать клик на шаг можно через проп `onClick` в компоненте `Step` или через проп `onClickStep` в компоненте `NewStepper`",...U.parameters?.docs?.description}}};try{U.displayName=`OnClickStep`,U.__docgenInfo={description:"Обработать клик на шаг можно через проп `onClick` в компоненте `Step` или через проп `onClickStep` в компоненте `NewStepper`",displayName:`OnClickStep`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/stories/OnClickStep.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K,q;function J(){return(J=e((()=>{s(),l(),p(),y(),G=o(),K=i(g)`
  width: 900px;
`,q=()=>(0,G.jsxs)(K,{children:[(0,G.jsxs)(f,{orientation:`horizontal`,connector:`arrow`,activeStep:2,children:[(0,G.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,G.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,G.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,G.jsx)(u,{label:`Подтверждение данных`,stepId:4})]}),(0,G.jsxs)(f,{orientation:`vertical`,activeStep:3,children:[(0,G.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,G.jsx)(u,{label:`Адрес регистрации`,stepId:2}),(0,G.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,G.jsx)(u,{label:`Подтверждение данных`,stepId:4})]})]}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <OrientationStoryWrapper>
      <NewStepper orientation="horizontal" connector="arrow" activeStep={2}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>

      <NewStepper orientation="vertical" activeStep={3}>
        <Step label="Паспортные данные" stepId={1} />
        <Step label="Адрес регистрации" stepId={2} />
        <Step label="Контактная информация" stepId={3} />
        <Step label="Подтверждение данных" stepId={4} />
      </NewStepper>
    </OrientationStoryWrapper>;
}`,...q.parameters?.docs?.source}}}})))()}var Y,X,Z;function ce(){return(ce=e((()=>{Y=c(),l(),p(),y(),X=o(),Z=()=>{let[e,t]=(0,Y.useState)(2);return(0,X.jsx)(g,{children:(0,X.jsxs)(f,{activeStep:e,onClickStep:e=>{t(e)},alternativeLabel:!0,children:[(0,X.jsx)(u,{label:`Паспортные данные`,stepId:1,isCompleted:!0}),(0,X.jsx)(u,{label:`Адрес регистрации`,stepId:2,isCompleted:!1}),(0,X.jsx)(u,{label:`Контактная информация`,stepId:3,isError:!0}),(0,X.jsx)(u,{label:`Подтверждение данных`,stepId:4,isCompleted:!0,isWarning:!0})]})})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(2);
  const handleClickStep = (stepId: number) => {
    setActiveStep(stepId);
  };
  return <StoryWrapper>
      <NewStepper activeStep={activeStep} onClickStep={handleClickStep} alternativeLabel>
        <Step label="Паспортные данные" stepId={1} isCompleted />
        <Step label="Адрес регистрации" stepId={2} isCompleted={false} />
        <Step label="Контактная информация" stepId={3} isError />
        <Step label="Подтверждение данных" stepId={4} isCompleted isWarning />
      </NewStepper>
    </StoryWrapper>;
}`,...Z.parameters?.docs?.source},description:{story:"Если в конфигурации шага не указан параметр `isCompleted`, то считается что шаг завершен когда активный шаг больше или равен его `stepId`",...Z.parameters?.docs?.description}}};try{Z.displayName=`Statuses`,Z.__docgenInfo={description:"Если в конфигурации шага не указан параметр `isCompleted`, то считается что шаг завершен когда активный шаг больше или равен его `stepId`",displayName:`Statuses`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/stories/Statuses.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var le,Q,$;function ue(){return(ue=e((()=>{le=c(),n(),l(),p(),Q=o(),$=()=>{let[e,t]=(0,le.useState)(3);return(0,Q.jsxs)(f,{orientation:`vertical`,activeStep:e,onClickStep:t,children:[(0,Q.jsx)(u,{label:`Паспортные данные`,stepId:1}),(0,Q.jsx)(u,{label:`Адрес регистрации`,stepId:2,children:(0,Q.jsx)(r,{variant:`caption`,children:`Укажите адрес постоянной регистрации`})}),(0,Q.jsx)(u,{label:`Контактная информация`,stepId:3}),(0,Q.jsx)(u,{label:`Подтверждение данных`,stepId:4,children:`Проверьте правильность введённых данных`})]})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [activeStep, setActiveStep] = useState(3);
  return <NewStepper orientation="vertical" activeStep={activeStep} onClickStep={setActiveStep}>
      <Step label="Паспортные данные" stepId={1} />
      <Step label="Адрес регистрации" stepId={2} children={<Typography variant="caption">
            Укажите адрес постоянной регистрации
          </Typography>} />
      <Step label="Контактная информация" stepId={3} />
      <Step label="Подтверждение данных" stepId={4} children="Проверьте правильность введённых данных" />
    </NewStepper>;
}`,...$.parameters?.docs?.source}}}})))()}var de,fe;function pe(){return(pe=e((()=>{l(),se(),E(),k(),N(),I(),B(),W(),J(),ce(),ue(),de={title:`Navigation/Stepper/NewStepper`,component:f,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=587-7920&t=5NZ3ZeClVX6dy8bd-0)`}}}},fe=[`BasicUsage`,`AlternativeLabel`,`Orientation`,`OnClickStep`,`OnClickPrevStep`,`DisplayVariants`,`WithDescription`,`DisabledStep`,`Statuses`,`CustomStepIcons`]})))()}pe();export{S as AlternativeLabel,T as BasicUsage,O as CustomStepIcons,M as DisabledStep,F as DisplayVariants,z as OnClickPrevStep,U as OnClickStep,q as Orientation,Z as Statuses,$ as WithDescription,fe as __namedExportsOrder,de as default};