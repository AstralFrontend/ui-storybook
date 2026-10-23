import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{$r as n,At as r,Bi as ee,Hi as i,Ui as te,Vi as a,_r as o,cn as s,dt as ne,ei as re,fr as ie,ft as c,gr as l,ji as u,kr as d,kt as f,ln as p,pr as ae,ya as m,yn as h,za as g}from"./preview-BXnWBjdd.js";import{d as _,f as v,g as oe,h as se,i as y,l as ce,m as le,n as b,o as x,p as ue,r as S,s as C,t as w,u as de}from"./Stepper-C3wRPEvQ.js";import{n as fe,t as pe}from"./Collapse-CLTTHS0n.js";import{a as me,c as he,d as ge,i as _e,n as ve,s as ye,t as be,u as xe}from"./StarFillSm-Dml0UPCA.js";import{i as T,r as E,t as D}from"./common-vpzYDOJB.js";var O,k,A,j,M,N,P;function F(){return(F=e((()=>{a(),te(),O=t(g()),re(),l(),ie(),fe(),oe(),le(),de(),k=m(),A=[`children`,`className`,`TransitionComponent`,`transitionDuration`,`TransitionProps`],j=e=>{let{classes:t,last:n}=e;return d({root:[`root`,n&&`last`],transition:[`transition`]},ce,t)},M=o(`div`,{name:`MuiStepContent`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.last&&t.last]}})(({ownerState:e,theme:t})=>i({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:t.vars?`1px solid ${t.vars.palette.StepContent.border}`:`1px solid ${t.palette.mode===`light`?t.palette.grey[400]:t.palette.grey[600]}`},e.last&&{borderLeft:`none`})),N=o(pe,{name:`MuiStepContent`,slot:`Transition`,overridesResolver:(e,t)=>t.transition})({}),P=O.forwardRef(function(e,t){let r=ae({props:e,name:`MuiStepContent`}),{children:te,className:a,TransitionComponent:o=pe,transitionDuration:s=`auto`,TransitionProps:ne}=r,re=ee(r,A),{orientation:ie}=O.useContext(se),{active:c,last:l,expanded:u}=O.useContext(ue),d=i({},r,{last:l}),f=j(d),p=s;return s===`auto`&&!o.muiSupportAuto&&(p=void 0),(0,k.jsx)(M,i({className:n(f.root,a),ref:t,ownerState:d},re,{children:(0,k.jsx)(N,i({as:o,in:c||u,className:f.transition,ownerState:d,timeout:p,unmountOnExit:!0},ne,{children:te}))}))})})))()}var I,L;function R(){return(R=e((()=>{v(),x(),b(),D(),I=m(),L=()=>(0,I.jsx)(T,{children:(0,I.jsx)(w,{activeStep:2,children:E.map(({label:e,isError:t})=>(0,I.jsx)(_,{children:(0,I.jsx)(C,{error:t,children:e})},`${e}`))})}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <Stepper activeStep={2}>
      {steps.map(({
      label,
      isError
    }) => <Step key={\`\${label}\`}>
          <StepLabel error={isError}>{label}</StepLabel>
        </Step>)}
    </Stepper>
  </StoryWrapper>`,...L.parameters?.docs?.source},description:{story:`Stepper c альтернативным лэйблом`,...L.parameters?.docs?.description}}};try{L.displayName=`AlternativeLabel`,L.__docgenInfo={description:`Stepper c альтернативным лэйблом`,displayName:`AlternativeLabel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/AlternativeLabel.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B;function Se(){return(Se=e((()=>{v(),S(),b(),D(),z=m(),B=()=>{let e=e=>{alert(`Переход к шагу ${e+1}`)};return(0,z.jsx)(w,{activeStep:2,connector:`arrow`,children:E.map(({label:t,isError:n},r)=>(0,z.jsx)(_,{children:(0,z.jsx)(y,{onClick:()=>e(r),error:n,children:t})},`${t}`))})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}}})))()}var V,H;function Ce(){return(Ce=e((()=>{v(),S(),b(),D(),V=m(),H=()=>{let e=e=>{alert(`Переход к шагу ${e+1}`)};return(0,V.jsx)(w,{connector:`line`,activeStep:2,children:E.map(({label:t,isError:n},r)=>(0,V.jsx)(_,{children:(0,V.jsx)(y,{onClick:()=>e(r),error:n,children:t})},`${t}`))})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source},description:{story:`Stepper с кликабельными элементами`,...H.parameters?.docs?.description}}};try{H.displayName=`ClickableStepper`,H.__docgenInfo={description:`Stepper с кликабельными элементами`,displayName:`ClickableStepper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/ClickableStepper.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W;function we(){return(we=e((()=>{v(),x(),b(),U=m(),W=()=>(0,U.jsx)(w,{activeStep:2,children:[{label:`Паспортные данные`,isError:!1},{label:`Адрес регистрации`,isError:!0},{label:`Контактная информация`,isError:!1},{label:`Подтверждение данных`,isError:!1}].map(({label:e,isError:t})=>(0,U.jsx)(_,{children:(0,U.jsx)(C,{error:t,children:e})},`${e}`))}),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}}})))()}var G,K;function Te(){return(Te=e((()=>{xe(),ye(),_e(),be(),h(),f(),v(),S(),x(),b(),G=m(),K=()=>{let e=[{label:`Паспортные данные`,isError:!1,Icon:()=>(0,G.jsx)(ve,{}),status:`warning`},{label:`Адрес регистрации`,isError:!0,Icon:()=>(0,G.jsx)(ge,{}),status:`error`},{label:`Контактная информация`,isError:!1,Icon:()=>(0,G.jsx)(he,{}),status:`success`},{label:`Подтверждение данных`,isError:!1,Icon:()=>(0,G.jsx)(me,{}),status:`warning`}],t=u(C)`
    .${r.stepIcon} {
      color: ${({theme:e,status:t})=>t===`warning`?e.palette.warning[800]:`gray`};
    }
  `;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(w,{activeStep:2,connector:`arrow`,children:e.map(({label:e,isError:t,Icon:n})=>(0,G.jsx)(_,{children:(0,G.jsx)(y,{onClick:()=>{},error:t,icon:e=>(0,G.jsx)(n,{...e}),children:e})},`${e}`))}),(0,G.jsx)(w,{activeStep:2,children:e.map(({label:e,isError:n,status:r})=>(0,G.jsx)(_,{children:(0,G.jsx)(t,{error:n,status:r,children:e})},`${e}`))})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классу `stepperClassnames.stepIcon`.",...K.parameters?.docs?.description}}};try{K.displayName=`CustomStepIcons`,K.__docgenInfo={description:"Иконку можно кастомизировать с помощью параметра `icon`.\n\nЦвет фона иконки можно кастомизировать с помощью обращения к классу `stepperClassnames.stepIcon`.",displayName:`CustomStepIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/CustomStepIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function Ee(){return(Ee=e((()=>{v(),x(),q=m(),J={args:{children:[(0,q.jsx)(_,{children:(0,q.jsx)(C,{children:`Step 1`})},`Step 1`),(0,q.jsx)(_,{children:(0,q.jsx)(C,{children:`Step 2`})},`Step 2`),(0,q.jsx)(_,{children:(0,q.jsx)(C,{children:`Step 3`})},`Step 3`)],activeStep:1},parameters:{docs:{disable:!0}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function De(){return(De=e((()=>{ne(),v(),F(),x(),b(),Y=m(),X=()=>(0,Y.jsx)(w,{orientation:`vertical`,activeStep:4,children:[{label:`Основная информация`,status:`completed`,description:`Заполните ФИО, дату рождения и гражданство`},{label:`Контактные данные`,status:`error`},{label:`Документы`,status:`selected`,description:`Загрузите сканы паспорта, ИНН и СНИЛС`},{label:`Подтверждение`,status:`default`}].map(({label:e,description:t,status:n})=>(0,Y.jsxs)(_,{active:!0,children:[(0,Y.jsx)(C,{error:n===`error`,children:e}),(0,Y.jsx)(P,{children:(0,Y.jsx)(c,{variant:`caption`,children:t})})]},`${e}`))}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:`Вертикальный Stepper(все элементы активны)`,...X.parameters?.docs?.description}}};try{X.displayName=`Orientation`,X.__docgenInfo={description:`Вертикальный Stepper(все элементы активны)`,displayName:`Orientation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/Orientation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Oe,Z,ke,Q;function Ae(){return(Ae=e((()=>{Oe=g(),s(),h(),v(),x(),b(),D(),Z=m(),ke=u.div`
  display: flex;
  justify-content: space-between;

  padding: ${({theme:e})=>e.spacing(3,10,0,10)};
`,Q=()=>{let[e,t]=(0,Oe.useState)(0);return(0,Z.jsxs)(T,{children:[(0,Z.jsx)(w,{alternativeLabel:!0,activeStep:e,children:E.map(({label:t,isError:n},r)=>(0,Z.jsx)(_,{children:(0,Z.jsx)(C,{isSelected:e===r,error:n,children:t})},t))}),(0,Z.jsxs)(ke,{children:[(0,Z.jsx)(p,{variant:`link`,onClick:()=>{e!==0&&t(e=>e-1)},children:`Назад`}),(0,Z.jsx)(p,{variant:`link`,onClick:()=>{e<3&&t(e=>e+1)},children:`Вперед`})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source},description:{story:`Stepper c переключением шагов(все шаги завершены)`,...Q.parameters?.docs?.description}}};try{Q.displayName=`TransitionStepByStep`,Q.__docgenInfo={description:`Stepper c переключением шагов(все шаги завершены)`,displayName:`TransitionStepByStep`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Stepper/stories/TransitionStepByStep.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var je,Me;function $(){return($=e((()=>{b(),R(),Se(),Ce(),we(),Te(),Ee(),De(),Ae(),je={title:`Navigation/Stepper/Deprecated/Stepper`,component:w,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=587-7920&t=5NZ3ZeClVX6dy8bd-0)`}}}},Me=[`Interaction`,`BasicUsage`,`Connector`,`ClickableStepper`,`AlternativeLabel`,`Orientation`,`TransitionStepByStep`,`CustomStepIcons`]})))()}$();export{L as AlternativeLabel,B as BasicUsage,H as ClickableStepper,W as Connector,K as CustomStepIcons,J as Interaction,X as Orientation,Q as TransitionStepByStep,Me as __namedExportsOrder,je as default};