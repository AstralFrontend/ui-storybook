import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ln as r,lt as i,ya as a,za as o}from"./preview-BI9JLEFP.js";import{t as s}from"./TextField-DZTPl-L_.js";import{t as c}from"./ListItem-C1QYUoW4.js";import{t as l}from"./TextField-BuW0tvvW.js";import{t as u}from"./Alert-CCr-IqUJ.js";import{t as d}from"./Alert-D8dcZwLG.js";import{n as f,t as ee}from"./DashboardLayout-BRHjKGa1.js";import{l as p,u as m}from"./PageContent-woiWGtg1.js";import{t as te}from"./List-CA-zVa8t.js";import{t as ne}from"./List-DXmPfwmn.js";import{t as re}from"./ListItem-B6PgA3Yq.js";import{n as ie,t as ae}from"./SearchOutlineMd-DFO2veXH.js";import{d as oe,m as h}from"./useForm-CfWjcaGw.js";import{t as g}from"./FormTextField-C-Udpb3i.js";import{t as se}from"./FormTextField-DHcsxjBi.js";import{i as _,n as v,r as ce,t as le}from"./object-CXqDZ5YO.js";import{n as ue,t as de}from"./email-5PpKcOpy.js";import{n as fe,t as pe}from"./mobilePhone-CTdxILNS.js";import{n as y,t as me}from"./string-hxNUuZd8.js";import{t as he}from"./FormEmailField-BHtsh4oM.js";import{n as ge,t as _e}from"./FormMobilePhoneField-DQYCvqPi.js";import{t as ve}from"./FormMobilePhoneField-BGzU8E6B.js";import{n as b}from"./useFormWizard-DFhIeYnT.js";import{n as x,t as S}from"./FormWizardPageLayout-JSjPveAg.js";import{t as C}from"./useFormWizard-KyCS1W4T.js";import{n as w,t as T}from"./AddOutlineMd-ecnlIGIV.js";import{c as ye,d as be,l as xe,t as Se}from"./common-CsGYLAL7.js";var E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{ue(),pe(),le(),ce(),me(),E=o(),ee(),n(),ne(),re(),p(),l(),ae(),ge(),_e(),Se(),se(),oe(),D=a(),O=()=>(0,D.jsxs)(m,{children:[(0,D.jsx)(s,{fullWidth:!0,placeholder:`Поиск по отчету`,InputProps:{startAdornment:(0,D.jsx)(ie,{})}}),(0,D.jsxs)(te,{children:[(0,D.jsx)(c,{selected:!0,children:`Титульный лист`}),(0,D.jsx)(c,{children:`Раздел 1`}),(0,D.jsx)(c,{children:`Раздел 2`}),(0,D.jsx)(c,{children:`Раздел 3`}),(0,D.jsx)(c,{children:`Раздел 4`}),(0,D.jsx)(c,{children:`Раздел 5`})]})]}),k=()=>{let e=h();return(0,D.jsxs)(i,{container:!0,rowSpacing:2,children:[(0,D.jsx)(g,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,D.jsx)(g,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})},A=()=>{let e=h();return(0,D.jsxs)(i,{container:!0,rowSpacing:2,children:[(0,D.jsx)(ve,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,D.jsx)(he,{label:`E-mail`,name:`email`,control:e.control})]})},j=()=>{let e=h();return(0,D.jsxs)(i,{container:!0,rowSpacing:2,children:[(0,D.jsx)(g,{required:!0,label:`ИНН`,name:`inn`,control:e.control}),(0,D.jsx)(g,{required:!0,label:`Снилс`,name:`snils`,control:e.control})]})},M=v({firstName:_(y()),lastName:_(y())}),N=v({phone:_(y(fe())),email:_(y(de()))}),P=v({inn:_(y()),snils:_(y())}),F=()=>{let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(!1);return{isSaving:e,isSendMail:n,handleSaving:()=>{t(!0),setTimeout(()=>{t(!1)},1500)},handleSendMail:()=>{r(!0),setTimeout(()=>{r(!1)},1500)}}},I=({children:e})=>(0,D.jsx)(be,{children:(0,D.jsxs)(f,{children:[(0,D.jsx)(f.Header,{...ye}),(0,D.jsx)(f.Sidebar,{...xe}),(0,D.jsx)(f.Main,{children:e})]})});try{I.displayName=`MockWrapper`,I.__docgenInfo={description:``,displayName:`MockWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormWizardPageLayout/stories/testStories/common.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormWizardPageLayout/stories/testStories/common.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{T(),C(),x(),L(),R=a(),z=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,onClickStep:a,onPrevStep:o,onSubmit:s}=b({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:M,component:k},{id:`stepTwo`,label:`Контактные данные`,validationSchema:N,component:A},{id:`stepThree`,label:`Данные для создание подписи`,validationSchema:P,component:j}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{alert(JSON.stringify(e,null,2)),t()},1e3)})}),{isSaving:c,isSendMail:l,handleSaving:u,handleSendMail:d}=F();return(0,R.jsx)(I,{children:(0,R.jsx)(S,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:c,isBlockingOperation:!0,onClick:u},{text:`Добавить по номеру`,startIcon:(0,R.jsx)(w,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},formWizard:{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,secondaryActions:[{text:`Отправить на почту`,isBlockingOperation:!0,loading:l,onClick:d},{text:`Скачать документ`}],submitButtonText:`Подписать`,onClickStep:a,onPrevStep:o,onSubmit:s},aside:(0,R.jsx)(O,{})})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }, {
      id: 'stepThree',
      label: 'Данные для создание подписи',
      validationSchema: validationSchemaStepThree,
      component: StepThree
    }],
    onSubmit: handleSubmit
  });
  const {
    isSaving,
    isSendMail,
    handleSaving,
    handleSendMail
  } = useMockWizardForm();
  return <MockWrapper>
      <FormWizardPageLayout<FormValues> header={{
      title: 'Создание доверенности',
      actions: {
        main: [{
          text: 'Сохранить',
          variant: 'outlined',
          color: 'grey',
          loading: isSaving,
          isBlockingOperation: true,
          onClick: handleSaving
        }, {
          text: 'Добавить по номеру',
          startIcon: <AddOutlineMd />,
          popoverProps: {
            title: 'Добавить по номеру'
          },
          variant: 'outlined',
          color: 'grey',
          isNested: true,
          actions: [{
            text: 'Из реестра ЦПРР'
          }, {
            text: 'Из реестра СФР'
          }]
        }]
      }
    }} formWizard={{
      form,
      currentStepId,
      steps,
      isFirstStep,
      isLastStep,
      secondaryActions: [{
        text: 'Отправить на почту',
        isBlockingOperation: true,
        loading: isSendMail,
        onClick: handleSendMail
      }, {
        text: 'Скачать документ'
      }],
      submitButtonText: 'Подписать',
      onClickStep,
      onPrevStep,
      onSubmit
    }} aside={<AsideContent />} />
    </MockWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{T(),C(),x(),L(),V=a(),H=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,onClickStep:a,onPrevStep:o,onSubmit:s}=b({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:M,component:k},{id:`stepTwo`,label:`Контактные данные`,validationSchema:N,component:A},{id:`stepThree`,label:`Данные для создание подписи`,validationSchema:P,component:j}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{alert(JSON.stringify(e,null,2)),t()},1e3)})}),{isSaving:c,isSendMail:l,handleSaving:u,handleSendMail:d}=F();return(0,V.jsx)(I,{children:(0,V.jsx)(S,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:c,isBlockingOperation:!0,onClick:u},{text:`Добавить по номеру`,startIcon:(0,V.jsx)(w,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},formWizard:{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,secondaryActions:[{text:`Отправить на почту`,isBlockingOperation:!0,loading:l,onClick:d}],submitButtonText:`Подписать`,onClickStep:a,onPrevStep:o,onSubmit:s},aside:(0,V.jsx)(O,{})})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }, {
      id: 'stepThree',
      label: 'Данные для создание подписи',
      validationSchema: validationSchemaStepThree,
      component: StepThree
    }],
    onSubmit: handleSubmit
  });
  const {
    isSaving,
    isSendMail,
    handleSaving,
    handleSendMail
  } = useMockWizardForm();
  return <MockWrapper>
      <FormWizardPageLayout<FormValues> header={{
      title: 'Создание доверенности',
      actions: {
        main: [{
          text: 'Сохранить',
          variant: 'outlined',
          color: 'grey',
          loading: isSaving,
          isBlockingOperation: true,
          onClick: handleSaving
        }, {
          text: 'Добавить по номеру',
          startIcon: <AddOutlineMd />,
          popoverProps: {
            title: 'Добавить по номеру'
          },
          variant: 'outlined',
          color: 'grey',
          isNested: true,
          actions: [{
            text: 'Из реестра ЦПРР'
          }, {
            text: 'Из реестра СФР'
          }]
        }]
      }
    }} formWizard={{
      form,
      currentStepId,
      steps,
      isFirstStep,
      isLastStep,
      secondaryActions: [{
        text: 'Отправить на почту',
        isBlockingOperation: true,
        loading: isSendMail,
        onClick: handleSendMail
      }],
      submitButtonText: 'Подписать',
      onClickStep,
      onPrevStep,
      onSubmit
    }} aside={<AsideContent />} />
    </MockWrapper>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=o(),d(),t(),T(),C(),x(),L(),G=a(),K=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:i,isLastStep:a,onClickStep:o,onPrevStep:s,onSubmit:c}=b({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:M,component:k},{id:`stepTwo`,label:`Контактные данные`,validationSchema:N,component:A},{id:`stepThree`,label:`Данные для создание подписи`,validationSchema:P,component:j}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{alert(JSON.stringify(e,null,2)),t()},1e3)})}),{isSaving:l,isSendMail:d,handleSaving:f,handleSendMail:ee}=F(),[p,m]=(0,W.useState)(!0);return(0,G.jsx)(I,{children:(0,G.jsx)(S,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:l,isBlockingOperation:!0,onClick:f},{text:`Добавить по номеру`,startIcon:(0,G.jsx)(w,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},alert:(0,G.jsxs)(u,{isShow:p,onClose:()=>m(!1),children:[`Отправлена заявка на подключение лицензии. Обратитесь в обслуживающую организацию. Если у вас нет обслуживающей организации, подобрать ее можно`,` `,(0,G.jsx)(r,{variant:`link`,component:`a`,href:`/`,target:`_blank`,children:`здесь`})]}),formWizard:{form:e,currentStepId:t,steps:n,isFirstStep:i,isLastStep:a,secondaryActions:[{text:`Отправить на почту`,isBlockingOperation:!0,loading:d,onClick:ee},{text:`Скачать документ`}],submitButtonText:`Подписать`,onClickStep:o,onPrevStep:s,onSubmit:c},aside:(0,G.jsx)(O,{})})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }, {
      id: 'stepThree',
      label: 'Данные для создание подписи',
      validationSchema: validationSchemaStepThree,
      component: StepThree
    }],
    onSubmit: handleSubmit
  });
  const {
    isSaving,
    isSendMail,
    handleSaving,
    handleSendMail
  } = useMockWizardForm();
  const [isShowPageAlert, setIsShowPageAlert] = useState(true);
  return <MockWrapper>
      <FormWizardPageLayout<FormValues> header={{
      title: 'Создание доверенности',
      actions: {
        main: [{
          text: 'Сохранить',
          variant: 'outlined',
          color: 'grey',
          loading: isSaving,
          isBlockingOperation: true,
          onClick: handleSaving
        }, {
          text: 'Добавить по номеру',
          startIcon: <AddOutlineMd />,
          popoverProps: {
            title: 'Добавить по номеру'
          },
          variant: 'outlined',
          color: 'grey',
          isNested: true,
          actions: [{
            text: 'Из реестра ЦПРР'
          }, {
            text: 'Из реестра СФР'
          }]
        }]
      }
    }} alert={<Alert isShow={isShowPageAlert} onClose={() => setIsShowPageAlert(false)}>
            Отправлена заявка на подключение лицензии. Обратитесь в
            обслуживающую организацию. Если у вас нет обслуживающей организации,
            подобрать ее можно{' '}
            <Button variant="link" component="a" href="/" target="_blank">
              здесь
            </Button>
          </Alert>} formWizard={{
      form,
      currentStepId,
      steps,
      isFirstStep,
      isLastStep,
      secondaryActions: [{
        text: 'Отправить на почту',
        isBlockingOperation: true,
        loading: isSendMail,
        onClick: handleSendMail
      }, {
        text: 'Скачать документ'
      }],
      submitButtonText: 'Подписать',
      onClickStep,
      onPrevStep,
      onSubmit
    }} aside={<AsideContent />} />
    </MockWrapper>;
}`,...K.parameters?.docs?.source}}}})))()}var J,Y;function X(){return(X=e((()=>{C(),x(),L(),J=a(),Y=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,onClickStep:a,onPrevStep:o,onSubmit:s}=b({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:M,component:k},{id:`stepTwo`,label:`Контактные данные`,validationSchema:N,component:A},{id:`stepThree`,label:`Данные для создание подписи`,validationSchema:P,component:j}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{alert(JSON.stringify(e,null,2)),t()},1e3)})}),{isSendMail:c,handleSendMail:l}=F();return(0,J.jsx)(I,{children:(0,J.jsx)(S,{header:{title:`Создание доверенности`},formWizard:{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,secondaryActions:[{text:`Отправить на почту`,isBlockingOperation:!0,loading:c,onClick:l},{text:`Скачать документ`}],submitButtonText:`Подписать`,onClickStep:a,onPrevStep:o,onSubmit:s},aside:(0,J.jsx)(O,{})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }, {
      id: 'stepThree',
      label: 'Данные для создание подписи',
      validationSchema: validationSchemaStepThree,
      component: StepThree
    }],
    onSubmit: handleSubmit
  });
  const {
    isSendMail,
    handleSendMail
  } = useMockWizardForm();
  return <MockWrapper>
      <FormWizardPageLayout<FormValues> header={{
      title: 'Создание доверенности'
    }} formWizard={{
      form,
      currentStepId,
      steps,
      isFirstStep,
      isLastStep,
      secondaryActions: [{
        text: 'Отправить на почту',
        isBlockingOperation: true,
        loading: isSendMail,
        onClick: handleSendMail
      }, {
        text: 'Скачать документ'
      }],
      submitButtonText: 'Подписать',
      onClickStep,
      onPrevStep,
      onSubmit
    }} aside={<AsideContent />} />
    </MockWrapper>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function Ce(){return(Ce=e((()=>{T(),C(),x(),L(),Z=a(),Q=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,onClickStep:a,onPrevStep:o,onSubmit:s}=b({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:M,component:k},{id:`stepTwo`,label:`Контактные данные`,validationSchema:N,component:A},{id:`stepThree`,label:`Данные для создание подписи`,validationSchema:P,component:j}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{alert(JSON.stringify(e,null,2)),t()},1e3)})}),{isSaving:c,handleSaving:l}=F();return(0,Z.jsx)(I,{children:(0,Z.jsx)(S,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:c,isBlockingOperation:!0,onClick:l},{text:`Добавить по номеру`,startIcon:(0,Z.jsx)(w,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},formWizard:{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,submitButtonText:`Подписать`,onClickStep:a,onPrevStep:o,onSubmit:s},aside:(0,Z.jsx)(O,{})})})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }, {
      id: 'stepThree',
      label: 'Данные для создание подписи',
      validationSchema: validationSchemaStepThree,
      component: StepThree
    }],
    onSubmit: handleSubmit
  });
  const {
    isSaving,
    handleSaving
  } = useMockWizardForm();
  return <MockWrapper>
      <FormWizardPageLayout<FormValues> header={{
      title: 'Создание доверенности',
      actions: {
        main: [{
          text: 'Сохранить',
          variant: 'outlined',
          color: 'grey',
          loading: isSaving,
          isBlockingOperation: true,
          onClick: handleSaving
        }, {
          text: 'Добавить по номеру',
          startIcon: <AddOutlineMd />,
          popoverProps: {
            title: 'Добавить по номеру'
          },
          variant: 'outlined',
          color: 'grey',
          isNested: true,
          actions: [{
            text: 'Из реестра ЦПРР'
          }, {
            text: 'Из реестра СФР'
          }]
        }]
      }
    }} formWizard={{
      form,
      currentStepId,
      steps,
      isFirstStep,
      isLastStep,
      submitButtonText: 'Подписать',
      onClickStep,
      onPrevStep,
      onSubmit
    }} aside={<AsideContent />} />
    </MockWrapper>;
}`,...Q.parameters?.docs?.source},description:{story:`Больше примеров доступно в [useFormWizard](/docs/form-hooks-useFormWizard--docs) и [FormWizard](/docs/form-formWizard--docs)
<br> **Story** необходимо открывать в отдельной вкладке`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithoutSecondaryActions`,Q.__docgenInfo={description:`Больше примеров доступно в [useFormWizard](/docs/form-hooks-useFormWizard--docs) и [FormWizard](/docs/form-formWizard--docs)
<br> **Story** необходимо открывать в отдельной вкладке`,displayName:`WithoutSecondaryActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormWizardPageLayout/stories/testStories/WithoutSecondaryActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var we,Te;function $(){return($=e((()=>{x(),B(),U(),q(),X(),Ce(),we={title:`React-Hook-Form/Layout/FormWizardPageLayout/Tests`,component:S,parameters:{layout:`fullscreen`}},Te=[`WithoutSecondaryActions`,`OneSecondaryAction`,`MoreSecondaryActions`,`WithAlert`,`WithoutPageActions`]})))()}$();export{z as MoreSecondaryActions,H as OneSecondaryAction,K as WithAlert,Y as WithoutPageActions,Q as WithoutSecondaryActions,Te as __namedExportsOrder,we as default};