import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{$r as n,At as r,Gi as ee,Hi as te,Ui as ne,Va as i,Wi as a,_r as o,cn as s,dt as c,ei as re,fr as l,ft as u,gr as d,ji as f,kr as p,kt as m,ln as ie,pr as ae,xa as h,yn as oe}from"./preview-BritAtdV.js";import{d as g,f as _,g as se,h as ce,i as v,l as le,m as ue,n as y,o as b,p as de,r as x,s as S,t as C,u as fe}from"./Stepper-DMYQpdVM.js";import{n as pe,t as me}from"./Collapse-BDHHUGxN.js";import{a as he,c as ge,d as _e,i as ve,n as ye,s as be,t as xe,u as Se}from"./StarFillSm-uzpSLisF.js";import{i as w,r as T,t as E}from"./common-DWbLkUOg.js";var D,O,k,A,j,M,N;function P(){return(P=e((()=>{ne(),ee(),D=t(i()),re(),d(),l(),pe(),se(),ue(),fe(),O=h(),k=[`children`,`className`,`TransitionComponent`,`transitionDuration`,`TransitionProps`],A=e=>{let{classes:t,last:n}=e;return p({root:[`root`,n&&`last`],transition:[`transition`]},le,t)},j=o(`div`,{name:`MuiStepContent`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.last&&t.last]}})(({ownerState:e,theme:t})=>a({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode===`light`?t.palette.grey[400]:t.palette.grey[600]}`},e.last&&{borderLeft:`none`})),M=o(me,{name:`MuiStepContent`,slot:`Transition`,overridesResolver:(e,t)=>t.transition})({}),N=D.forwardRef(function(e,t){let r=ae({props:e,name:`MuiStepContent`}),{children:ee,className:ne,TransitionComponent:i=me,transitionDuration:o=`auto`,TransitionProps:s}=r,c=te(r,k),{orientation:re}=D.useContext(ce),{active:l,last:u,expanded:d}=D.useContext(de),f=a({},r,{last:u}),p=A(f),m=o;return o===`auto`&&!i.muiSupportAuto&&(m=void 0),(0,O.jsx)(j,a({className:n(p.root,ne),ref:t,ownerState:f},c,{children:(0,O.jsx)(M,a({as:i,in:l||d,className:p.transition,ownerState:f,timeout:m,unmountOnExit:!0},s,{children:ee}))}))})})))()}var F,I;function Ce(){return(Ce=e((()=>{_(),b(),y(),E(),F=h(),I=()=>(0,F.jsx)(w,{children:(0,F.jsx)(C,{activeStep:2,children:T.map(({label:e,isError:t})=>(0,F.jsx)(g,{children:(0,F.jsx)(S,{error:t,children:e})},`${e}`))})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <Stepper activeStep={2}>
      {steps.map(({
      label,
      isError
    }) => <Step key={\`\${label}\`}>
          <StepLabel error={isError}>{label}</StepLabel>
        </Step>)}
    </Stepper>
  </StoryWrapper>`,...I.parameters?.docs?.source},description:{story:`Stepper c альтернативным лэйблом`,...I.parameters?.docs?.description}}};try{I.displayName=`AlternativeLabel`,I.__docgenInfo={description:`Stepper c альтернативным лэйблом`,displayName:`AlternativeLabel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/AlternativeLabel.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var L,R;function z(){return(z=e((()=>{_(),x(),y(),E(),L=h(),R=()=>{let e=e=>{alert(`Переход к шагу ${e+1}`)};return(0,L.jsx)(C,{activeStep:2,connector:`arrow`,children:T.map(({label:t,isError:n},r)=>(0,L.jsx)(g,{children:(0,L.jsx)(v,{onClick:()=>e(r),error:n,children:t})},`${t}`))})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const handleStepClick = (stepIndex: number) => {
    alert(\`Переход к шагу \${stepIndex + 1}\`);
  };
  return <Stepper activeStep={2} connector="arrow">
      {steps.map(({
      label,
      isError
    }, index) => <Step key={\`\${label}\`}>
          <StepButton onClick={() => handleStepClick(index)} error={isError}>
            {label}
          </StepButton>
        </Step>)}
    </Stepper>;
}`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{_(),x(),y(),E(),B=h(),V=()=>{let e=e=>{alert(`Переход к шагу ${e+1}`)};return(0,B.jsx)(C,{connector:`line`,activeStep:2,children:T.map(({label:t,isError:n},r)=>(0,B.jsx)(g,{children:(0,B.jsx)(v,{onClick:()=>e(r),error:n,children:t})},`${t}`))})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const handleStepClick = (stepIndex: number) => {
    alert(\`Переход к шагу \${stepIndex + 1}\`);
  };
  return <Stepper connector="line" activeStep={2}>
      {steps.map(({
      label,
      isError
    }, index) => <Step key={\`\${label}\`}>
          <StepButton onClick={() => handleStepClick(index)} error={isError}>
            {label}
          </StepButton>
        </Step>)}
    </Stepper>;
}`,...V.parameters?.docs?.source},description:{story:`Stepper с кликабельными элементами`,...V.parameters?.docs?.description}}};try{V.displayName=`ClickableStepper`,V.__docgenInfo={description:`Stepper с кликабельными элементами`,displayName:`ClickableStepper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/ClickableStepper.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W;function we(){return(we=e((()=>{_(),b(),y(),U=h(),W=()=>(0,U.jsx)(C,{activeStep:2,children:[{label:`Паспортные данные`,isError:!1},{label:`Адрес регистрации`,isError:!0},{label:`Контактная информация`,isError:!1},{label:`Подтверждение данных`,isError:!1}].map(({label:e,isError:t})=>(0,U.jsx)(g,{children:(0,U.jsx)(S,{error:t,children:e})},`${e}`))}),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const steps = [{
    label: 'Паспортные данные',
    isError: false
  }, {
    label: 'Адрес регистрации',
    isError: true
  }, {
    label: 'Контактная информация',
    isError: false
  }, {
    label: 'Подтверждение данных',
    isError: false
  }];
  return <Stepper activeStep={2}>
      {steps.map(({
      label,
      isError
    }) => <Step key={\`\${label}\`}>
          <StepLabel error={isError}>{label}</StepLabel>
        </Step>)}
    </Stepper>;
}`,...W.parameters?.docs?.source}}}})))()}var G,K;function Te(){return(Te=e((()=>{Se(),be(),ve(),xe(),oe(),m(),_(),x(),b(),y(),G=h(),K=()=>{let e=[{label:`Паспортные данные`,isError:!1,Icon:()=>(0,G.jsx)(ye,{}),status:`warning`},{label:`Адрес регистрации`,isError:!0,Icon:()=>(0,G.jsx)(_e,{}),status:`error`},{label:`Контактная информация`,isError:!1,Icon:()=>(0,G.jsx)(ge,{}),status:`success`},{label:`Подтверждение данных`,isError:!1,Icon:()=>(0,G.jsx)(he,{}),status:`warning`}],t=f(S)`
    .${r.stepIcon} {
      color: ${({theme:e,status:t})=>t===`warning`?e.palette.warning[800]:`gray`};
    }
  `;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(C,{activeStep:2,connector:`arrow`,children:e.map(({label:e,isError:t,Icon:n})=>(0,G.jsx)(g,{children:(0,G.jsx)(v,{onClick:()=>{},error:t,icon:e=>(0,G.jsx)(n,{...e}),children:e})},`${e}`))}),(0,G.jsx)(C,{activeStep:2,children:e.map(({label:e,isError:n,status:r})=>(0,G.jsx)(g,{children:(0,G.jsx)(t,{error:n,status:r,children:e})},`${e}`))})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const steps = [{
    label: 'Паспортные данные',
    isError: false,
    Icon: () => <StarFillSm />,
    status: 'warning'
  }, {
    label: 'Адрес регистрации',
    isError: true,
    Icon: () => <LocationFillSm />,
    status: 'error'
  }, {
    label: 'Контактная информация',
    isError: false,
    Icon: () => <MailFillSm />,
    status: 'success'
  }, {
    label: 'Подтверждение данных',
    isError: false,
    Icon: () => <PhoneFillSm />,
    status: 'warning'
  }];
  const StyledStepLabel = styled(StepLabel)<{
    status: string;
  }>\`
    .\${stepperClassnames.stepIcon} {
      color: \${({
    theme,
    status
  }) => status === 'warning' ? theme.palette.warning[800] : 'gray'};
    }
  \`;
  return <>
      <Stepper activeStep={2} connector="arrow">
        {steps.map(({
        label,
        isError,
        Icon
      }) => <Step key={\`\${label}\`}>
            <StepButton onClick={() => {}} error={isError} icon={props => <Icon {...props} />}>
              {label}
            </StepButton>
          </Step>)}
      </Stepper>

      <Stepper activeStep={2}>
        {steps.map(({
        label,
        isError,
        status
      }) => <Step key={\`\${label}\`}>
            <StyledStepLabel error={isError} status={status}>
              {label}
            </StyledStepLabel>
          </Step>)}
      </Stepper>
    </>;
}`,...K.parameters?.docs?.source},description:{story:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классу `stepperClassnames.stepIcon`.",...K.parameters?.docs?.description}}};try{K.displayName=`CustomStepIcons`,K.__docgenInfo={description:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классу `stepperClassnames.stepIcon`.",displayName:`CustomStepIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/CustomStepIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function Ee(){return(Ee=e((()=>{_(),b(),q=h(),J={args:{children:[(0,q.jsx)(g,{children:(0,q.jsx)(S,{children:`Step 1`})},`Step 1`),(0,q.jsx)(g,{children:(0,q.jsx)(S,{children:`Step 2`})},`Step 2`),(0,q.jsx)(g,{children:(0,q.jsx)(S,{children:`Step 3`})},`Step 3`)],activeStep:1},parameters:{docs:{disable:!0}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Step key="Step 1">
        <StepLabel>Step 1</StepLabel>
      </Step>, <Step key="Step 2">
        <StepLabel>Step 2</StepLabel>
      </Step>, <Step key="Step 3">
        <StepLabel>Step 3</StepLabel>
      </Step>],
    activeStep: 1
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function De(){return(De=e((()=>{c(),_(),P(),b(),y(),Y=h(),X=()=>(0,Y.jsx)(C,{orientation:`vertical`,activeStep:4,children:[{label:`Основная информация`,status:`completed`,description:`Заполните ФИО, дату рождения и гражданство`},{label:`Контактные данные`,status:`error`},{label:`Документы`,status:`selected`,description:`Загрузите сканы паспорта, ИНН и СНИЛС`},{label:`Подтверждение`,status:`default`}].map(({label:e,description:t,status:n})=>(0,Y.jsxs)(g,{active:!0,children:[(0,Y.jsx)(S,{error:n===`error`,children:e}),(0,Y.jsx)(N,{children:(0,Y.jsx)(u,{variant:`caption`,children:t})})]},`${e}`))}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const steps = [{
    label: 'Основная информация',
    status: 'completed',
    description: 'Заполните ФИО, дату рождения и гражданство'
  }, {
    label: 'Контактные данные',
    status: 'error'
  }, {
    label: 'Документы',
    status: 'selected',
    description: 'Загрузите сканы паспорта, ИНН и СНИЛС'
  }, {
    label: 'Подтверждение',
    status: 'default'
  }];
  return <Stepper orientation="vertical" activeStep={4}>
      {steps.map(({
      label,
      description,
      status
    }) => <Step key={\`\${label}\`} active={true}>
          <StepLabel error={status === 'error'}>{label}</StepLabel>
          <StepContent>
            <Typography variant="caption">{description}</Typography>
          </StepContent>
        </Step>)}
    </Stepper>;
}`,...X.parameters?.docs?.source},description:{story:`Вертикальный Stepper(все элементы активны)`,...X.parameters?.docs?.description}}};try{X.displayName=`Orientation`,X.__docgenInfo={description:`Вертикальный Stepper(все элементы активны)`,displayName:`Orientation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/Orientation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Oe,Z,ke,Q;function Ae(){return(Ae=e((()=>{Oe=i(),s(),oe(),_(),b(),y(),E(),Z=h(),ke=f.div`
  display: flex;
  justify-content: space-between;

  padding: ${({theme:e})=>e.spacing(3,10,0,10)};
`,Q=()=>{let[e,t]=(0,Oe.useState)(0);return(0,Z.jsxs)(w,{children:[(0,Z.jsx)(C,{alternativeLabel:!0,activeStep:e,children:T.map(({label:t,isError:n},r)=>(0,Z.jsx)(g,{children:(0,Z.jsx)(S,{isSelected:e===r,error:n,children:t})},t))}),(0,Z.jsxs)(ke,{children:[(0,Z.jsx)(ie,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,Z.jsx)(ie,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
  return <StoryWrapper>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(({
        label,
        isError
      }, index) => <Step key={label}>
            <StepLabel isSelected={activeStep === index} error={isError}>
              {label}
            </StepLabel>
          </Step>)}
      </Stepper>
      <ButtonsWrapper>
        <Button variant="link" onClick={handleBack}>
          Назад
        </Button>
        <Button variant="link" onClick={handleNext}>
          Вперед
        </Button>
      </ButtonsWrapper>
    </StoryWrapper>;
}`,...Q.parameters?.docs?.source},description:{story:`Stepper c переключением шагов(все шаги завершены)`,...Q.parameters?.docs?.description}}};try{Q.displayName=`TransitionStepByStep`,Q.__docgenInfo={description:`Stepper c переключением шагов(все шаги завершены)`,displayName:`TransitionStepByStep`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/TransitionStepByStep.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var je,Me;function $(){return($=e((()=>{y(),Ce(),z(),H(),we(),Te(),Ee(),De(),Ae(),je={title:`Navigation/Stepper/Deprecated/Stepper`,component:C,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=587-7920&t=5NZ3ZeClVX6dy8bd-0)`}}}},Me=[`Interaction`,`BasicUsage`,`Connector`,`ClickableStepper`,`AlternativeLabel`,`Orientation`,`TransitionStepByStep`,`CustomStepIcons`]})))()}$();export{I as AlternativeLabel,R as BasicUsage,V as ClickableStepper,W as Connector,K as CustomStepIcons,J as Interaction,X as Orientation,Q as TransitionStepByStep,Me as __namedExportsOrder,je as default};