import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,xa as o,yn as s}from"./preview-DJy7jU1i.js";import{t as c}from"./MenuItem-Df7kUAdX.js";import{t as l}from"./MenuItem-BUqlS0pj.js";import{n as u,r as d,t as f}from"./FormRadioGroup-po-ZbL58.js";import{d as ee,m as p}from"./useForm-CXFB7huX.js";import{t as m}from"./FormTextField-wMzJzOFY.js";import{t as te}from"./FormTextField-E2TdV8at.js";import{a as ne,d as re,f as ie,o as ae}from"./createGuard-Bnbb_ytZ.js";import{i as h,n as g,r as oe,t as se}from"./object-CXqDZ5YO.js";import{n as ce,t as _}from"./email-5PpKcOpy.js";import{n as v,t as le}from"./mobilePhone-CTdxILNS.js";import{n as y,t as ue}from"./string-hxNUuZd8.js";import{t as b}from"./FormEmailField-vs0gUqhp.js";import{n as de,t as fe}from"./FormMobilePhoneField-DIhG1I-h.js";import{t as x}from"./FormMobilePhoneField-BNQipc-V.js";import{t as pe}from"./FormRadioGroup-CiVzpZeO.js";import{t as me}from"./FormSelect-DcfI_Bj3.js";import{t as he}from"./FormSelect-B16gy-lu.js";import{n as S,o as C,t as ge}from"./useFormWizard-DQ60Ox5Y.js";import{t as _e}from"./FormWizard-dQ8bHHoy.js";import{a as w,l as T}from"./NotificationStackContainer-RG6Ql3-o.js";import{t as ve}from"./Notification-RlRxbiBo.js";var E;function D(){return(D=e((()=>{E=e=>e?!e.replace(/0/g,``):!1})))()}var O;function k(){return(k=e((()=>{ie(),O={code:re(`ogrnUL`),message:`Проверьте ОГРН`}})))()}var A;function j(){return(j=e((()=>{ae(),D(),k(),A=e=>ne((t,n)=>{let r=()=>n.createError({message:e?.message||O.message,code:O.code});if(E(t)||t.length!==13)return r();let i=(parseInt(t.slice(0,-1))%11).toString().slice(-1);if(t.slice(12,13)!==i)return r()},{exclude:e?.exclude})})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{ce(),le(),se(),j(),oe(),ue(),t(),l(),ve(),u(),s(),n(),de(),fe(),f(),he(),te(),_e(),ee(),ge(),M=o(),N=i.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: ${({theme:e})=>e.spacing(4)};
`,P=i.ul`
  margin: 0;
  padding: 0;

  list-style: inside;
`,F=i.div`
  height: 500px;
`,I={title:`React-Hook-Form/hooks/useFormWizard`,parameters:{docs:{description:{component:`Обертка над useForm, добавляющая функционал работы со степпером.
Интегрируется с компонентами [FormWizard](/docs/form-formwizard--docs) и [FormWizardPageLayout](/docs/form-layout-formwizardpagelayout--docs)`}}}},L=[{value:`1`,name:`Физическое лицо`},{value:`2`,name:`Организация`}],R=({price:e})=>(0,M.jsxs)(N,{children:[(0,M.jsx)(r,{variant:`h5`,children:`Универсальный`}),(0,M.jsxs)(r,{variant:`h5`,children:[e,` руб.`]})]}),z=()=>{let e=p();return(0,M.jsxs)(pe,{control:e.control,name:`tariff`,children:[(0,M.jsx)(d,{header:(0,M.jsx)(R,{price:`2500`}),value:`one`,children:(0,M.jsxs)(P,{children:[(0,M.jsx)(`li`,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(`li`,{children:`В пакете до 2 доверенностей`}),(0,M.jsx)(`li`,{children:`На 12 месяцев`})]})}),(0,M.jsx)(d,{header:(0,M.jsx)(R,{price:`5000`}),value:`two`,children:(0,M.jsxs)(P,{children:[(0,M.jsx)(`li`,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(`li`,{children:`В пакете до 5 доверенностей`}),(0,M.jsx)(`li`,{children:`На 12 месяцев`})]})}),(0,M.jsx)(d,{header:(0,M.jsx)(R,{price:`10000`}),value:`three`,children:(0,M.jsxs)(P,{children:[(0,M.jsx)(`li`,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(`li`,{children:`В пакете от 5 доверенностей`}),(0,M.jsx)(`li`,{children:`На 12 месяцев`})]})})]})},B=()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})},V=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onClickStep:c,onPrevStep:l,onSubmit:u}=S({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:n.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:n.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onClickStep:c,onPrevStep:l,onSubmit:u})},H=()=>{let e=g({recipient:y(),city:h(y())}),t=g({firstName:y(),lastName:y()}),n=g({organizationName:y(),ogrn:y(A())}),{form:r,currentStepId:i,steps:o,isFirstStep:s,isLastStep:l,onClickStep:u,onPrevStep:d,onSubmit:f}=S({steps:[{id:`recipientStep`,label:`Получатель`,validationSchema:e,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(me,{required:!0,control:e.control,name:`recipient`,label:`Получатель`,getOptionLabel:e=>L.find(t=>t.value===e)?.name||``,children:L.map(({value:e,name:t})=>(0,M.jsx)(c,{value:e,children:t},e))}),(0,M.jsx)(m,{name:`city`,label:`Город`,control:r.control})]})}},{id:`flInfoStep`,label:`Данные ФЛ`,validationSchema:t,shouldSkip:{observableFields:[`recipient`],calculate:e=>!!Object.is(e?.recipient,`2`)},component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`orgInfoStep`,label:`Данные организации`,validationSchema:n,shouldSkip:{observableFields:[`recipient`],calculate:e=>!!(!e?.recipient||Object.is(e?.recipient,`1`))},component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`organizationName`,label:`Организация`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`ogrn`,label:`ОГРН`,control:e.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:r,currentStepId:i,isFirstStep:s,isLastStep:l,steps:o,submitButtonText:`Отправить`,onClickStep:u,onPrevStep:d,onSubmit:f})},U=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onPrevStep:c,onSubmit:l}=S({defaultValues:{firstName:`Вася`,lastName:`Иванов`,email:`ivanov@ya.ru`},steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onPrevStep:c,onSubmit:l})},W=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onPrevStep:c,onSubmit:l}=S({initialStepId:`stepTwo`,steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onPrevStep:c,onSubmit:l})},G=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onPrevStep:c,onSubmit:l}=S({steps:[{id:`stepOne`,label:`Личные данные`,nextButtonText:`Следующий шаг`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,prevButtonText:`К личным данным`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onPrevStep:c,onSubmit:l})},K=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onPrevStep:c,onSubmit:l}=S({autoSaveStrategy:`changeStep`,onAutoSave:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)}),steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onPrevStep:c,onSubmit:l})},q=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onPrevStep:c,onSubmit:l}=S({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onChangeStep:(e,{reason:t})=>{console.log(`stepId:`,e,`|`,`reason:`,t)},onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onPrevStep:c,onSubmit:l})},J=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onClickStep:c,onPrevStep:l,onSubmit:u}=S({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onChangeStep:(e,{reason:t})=>{console.log(`stepId:`,e,`|`,`reason:`,t)},onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onClickStep:c,onPrevStep:l,onSubmit:u})},Y=()=>{let e=g({firstName:y(),lastName:y()}),t=g({phone:y(v()),email:h(y(_()))}),{form:n,currentStepId:r,steps:i,isFirstStep:o,isLastStep:s,onClickStep:c,onPrevStep:l,onSubmit:u}=S({steps:[{id:`stepOne`,label:`Личные данные`,validationSchema:e,component:()=>{let e=p();return(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(m,{required:!0,name:`firstName`,label:`Имя`,control:e.control}),(0,M.jsx)(m,{required:!0,name:`lastName`,label:`Фамилия`,control:e.control})]})})}},{id:`stepTwo`,label:`Контактные данные`,validationSchema:t,component:()=>{let e=p();return(0,M.jsxs)(a,{container:!0,rowSpacing:2,children:[(0,M.jsx)(x,{required:!0,label:`Телефон`,name:`phone`,control:e.control}),(0,M.jsx)(b,{label:`E-mail`,name:`email`,control:e.control})]})}}],onChangeStep:async(e,{autosavePromise:t})=>{await t},onAutoSave:async()=>Promise.reject(`try again`),autoSaveStrategy:`changeStep`,onAutoSaveError:()=>{w.error(`Ошибка автосохранения`,{containerId:`autosave`})},onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsxs)(F,{children:[(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:o,isLastStep:s,steps:i,submitButtonText:`Отправить`,onClickStep:c,onPrevStep:l,onSubmit:u}),(0,M.jsx)(T,{containerId:`autosave`})]})},X=()=>{let e=g({tariff:y()}),t=g({firstName:y(),lastName:y()}),{form:n,currentStepId:r,steps:i,isFirstStep:a,isLastStep:o,onClickStep:s,onPrevStep:c,onSubmit:l,onSubmitError:u}=S({steps:[{id:`stepTariff`,label:`Выбор тарифа`,validationSchema:e,component:z,onSubmitError:()=>{w.error(`Выберите тариф`)}},{id:`stepPersonalData`,label:`Личные данные`,validationSchema:t,component:B}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsxs)(F,{children:[(0,M.jsx)(C,{form:n,currentStepId:r,isFirstStep:a,isLastStep:o,steps:i,submitButtonText:`Отправить`,onClickStep:s,onPrevStep:c,onSubmit:l,onSubmitError:u}),(0,M.jsx)(T,{})]})},Z=()=>{let{form:e,currentStepId:t,steps:n,isFirstStep:r,isLastStep:i,onClickStep:a,onPrevStep:o,onSubmit:s,onSubmitError:c}=S({autoSaveStrategy:`changeStep`,onAutoSave:()=>new Promise(e=>{setTimeout(()=>{e()},1e3)}),onChangeStep:(e,{reason:t,autosavePromise:n})=>{if(e===`stepPersonalData`&&t===`nextStep`)return n},steps:[{id:`stepTariff`,label:`Выбор тарифа`,component:z},{id:`stepPersonalData`,label:`Личные данные`,component:B}],onSubmit:e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})});return(0,M.jsxs)(F,{children:[(0,M.jsx)(C,{form:e,currentStepId:t,isFirstStep:r,isLastStep:i,steps:n,submitButtonText:`Отправить`,onClickStep:a,onPrevStep:o,onSubmit:s,onSubmitError:c}),(0,M.jsx)(T,{})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={form.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={form.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
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
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  type ExampleStepOneFormValues = {
    recipient: string;
    city?: string;
  };
  type ExampleStepFlInfoFormValues = {
    firstName: string;
    lastName: string;
  };
  type ExampleStepOrgInfoFormValues = {
    organizationName: string;
    ogrn: string;
  };
  type ExampleFormValues = ExampleStepOneFormValues & (ExampleStepFlInfoFormValues | ExampleStepOrgInfoFormValues);
  const validationSchemaStepOne = object<ExampleStepOneFormValues>({
    recipient: string(),
    city: optional(string())
  });
  const validationSchemaStepFlInfo = object<ExampleStepFlInfoFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepOrgInfo = object<ExampleStepOrgInfoFormValues>({
    organizationName: string(),
    ogrn: string(ogrnUL())
  });
  const handleSubmit = (values: ExampleFormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const RecipientStep = () => {
    const stepOneForm = useFormContext<ExampleStepOneFormValues>();
    return <Grid container rowSpacing={2}>
        <FormSelect required control={stepOneForm.control} name="recipient" label="Получатель" getOptionLabel={value => FAKE_RECIPIENT.find(option => option.value === value)?.name || ''}>
          {FAKE_RECIPIENT.map(({
          value,
          name
        }) => <MenuItem value={value} key={value}>
              {name}
            </MenuItem>)}
        </FormSelect>

        <FormTextField name="city" label="Город" control={form.control} />
      </Grid>;
  };
  const FlInfoStep = () => {
    const flInfoForm = useFormContext<ExampleStepFlInfoFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={flInfoForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={flInfoForm.control} />
        </Grid>
      </>;
  };
  const OrgInfoStep = () => {
    const orgInfoForm = useFormContext<ExampleStepOrgInfoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormTextField required name="organizationName" label="Организация" control={orgInfoForm.control} />
        <FormTextField required name="ogrn" label="ОГРН" control={orgInfoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<ExampleFormValues>({
    steps: [{
      id: 'recipientStep',
      label: 'Получатель',
      validationSchema: validationSchemaStepOne,
      component: RecipientStep
    }, {
      id: 'flInfoStep',
      label: 'Данные ФЛ',
      validationSchema: validationSchemaStepFlInfo,
      shouldSkip: {
        // Отслеживаем изменение поля 'recipient'
        observableFields: ['recipient'],
        // calculate вызывается при изменении значения в поле 'recipient'
        calculate: formValues => {
          // Если получатель юр.лицо, то пропускаем шаг
          if (Object.is(formValues?.recipient, '2')) {
            return true;
          }
          return false;
        }
      },
      component: FlInfoStep
    }, {
      id: 'orgInfoStep',
      label: 'Данные организации',
      validationSchema: validationSchemaStepOrgInfo,
      shouldSkip: {
        // Отслеживаем изменение поля 'recipient'
        observableFields: ['recipient'],
        // calculate вызывается при изменении значения в поле 'recipient'
        calculate: formValues => {
          // Если получатель физ.лицо или не определено, то пропускаем шаг
          if (!formValues?.recipient || Object.is(formValues?.recipient, '1')) {
            return true;
          }
          return false;
        }
      },
      component: OrgInfoStep
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<ExampleFormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...H.parameters?.docs?.source},description:{story:"`shouldSkip` позволяет управлять отображением шагов.\nВ зависимости от определенных значений в форме или иной логики шаги можно скрывать или отображать",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
    defaultValues: {
      firstName: 'Вася',
      lastName: 'Иванов',
      email: 'ivanov@ya.ru'
    },
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
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...U.parameters?.docs?.source},description:{story:"`defaultValues` позволяет проинициализировать форму значениями",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
    initialStepId: 'stepTwo',
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
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...W.parameters?.docs?.source},description:{story:"`initialStepId` позволяет указать начальный шаг",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
    steps: [{
      id: 'stepOne',
      label: 'Личные данные',
      nextButtonText: 'Следующий шаг',
      validationSchema: validationSchemaStepOne,
      component: StepOne
    }, {
      id: 'stepTwo',
      label: 'Контактные данные',
      prevButtonText: 'К личным данным',
      validationSchema: validationSchemaStepTwo,
      component: StepTwo
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...G.parameters?.docs?.source},description:{story:'Используя `prevButtonText` и `nextButtonText` можно\nизменить текст кнопок "Назад" и "Далее".',...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleAutoSave = (values: Partial<FormValues>) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
    autoSaveStrategy: 'changeStep',
    onAutoSave: handleAutoSave,
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
    }],
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...K.parameters?.docs?.source},description:{story:"`onAutoSave` позволяет реализовать автосохранение данных формы.\nИспользуя `autoSaveStrategy`, можно настроить стратегию автосохранения.\n- `changeStep` — автосохранение при смене шага (вызывается только при переходе на следующий шаг).",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleChangeStep: UseFormWizardParams<FormValues>['onChangeStep'] = (stepId, {
    reason
  }) => {
    console.log('stepId:', stepId, '|', 'reason:', reason);
  };
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
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
    }],
    onChangeStep: handleChangeStep,
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...q.parameters?.docs?.source},description:{story:"`onChangeStep` позволяет отслеживать смену шагов",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const handleChangeStep: UseFormWizardParams<FormValues>['onChangeStep'] = (stepId, {
    reason
  }) => {
    console.log('stepId:', stepId, '|', 'reason:', reason);
  };
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
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
    }],
    onChangeStep: handleChangeStep,
    onSubmit: handleSubmit
  });
  return <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} />;
}`,...J.parameters?.docs?.source},description:{story:"`onClickStep` позволяет установить активный шаг по индексу.\nВ степпере используется для быстрого возврата на предыдущие шаги",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaStepOne = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const validationSchemaStepTwo = object<StepTwoFormValues>({
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const saveWithError = async () => {
    return Promise.reject('try again');
  };
  const onAutoSaveError = () => {
    notify.error('Ошибка автосохранения', {
      containerId: 'autosave'
    });
  };
  const handleChangeStep: UseFormWizardParams<FormValues>['onChangeStep'] = async (_, {
    autosavePromise
  }) => {
    await autosavePromise;
  };
  const handleSubmit = (values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const StepOne = () => {
    const stepOneForm = useFormContext<StepOneFormValues>();
    return <>
        <Grid container rowSpacing={2}>
          <FormTextField required name="firstName" label="Имя" control={stepOneForm.control} />

          <FormTextField required name="lastName" label="Фамилия" control={stepOneForm.control} />
        </Grid>
      </>;
  };
  const StepTwo = () => {
    const stepTwoForm = useFormContext<StepTwoFormValues>();
    return <Grid container rowSpacing={2}>
        <FormMobilePhoneField required label="Телефон" name="phone" control={stepTwoForm.control} />

        <FormEmailField label="E-mail" name="email" control={stepTwoForm.control} />
      </Grid>;
  };
  const {
    form,
    currentStepId,
    steps,
    isFirstStep,
    isLastStep,
    onClickStep,
    onPrevStep,
    onSubmit
  } = useFormWizard<FormValues>({
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
    }],
    onChangeStep: handleChangeStep,
    onAutoSave: saveWithError,
    autoSaveStrategy: 'changeStep',
    onAutoSaveError,
    onSubmit: handleSubmit
  });
  return <Container>
      <FormWizard<FormValues> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} />
      <NotificationContainer containerId="autosave" />
    </Container>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const validationSchemaTariffStep = object<StepTariffFormValues>({
    tariff: string()
  });
  const validationSchemaPersonalData = object<StepOneFormValues>({
    firstName: string(),
    lastName: string()
  });
  const handleSubmit = (values: FormValuesWithTariff) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
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
    onSubmit,
    onSubmitError
  } = useFormWizard<FormValuesWithTariff>({
    steps: [{
      id: 'stepTariff',
      label: 'Выбор тарифа',
      validationSchema: validationSchemaTariffStep,
      component: StepTariff,
      onSubmitError: () => {
        notify.error('Выберите тариф');
      }
    }, {
      id: 'stepPersonalData',
      label: 'Личные данные',
      validationSchema: validationSchemaPersonalData,
      component: StepPersonalData
    }],
    onSubmit: handleSubmit
  });
  return <Container>
      <FormWizard<FormValuesWithTariff> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} onSubmitError={onSubmitError} />

      <NotificationContainer />
    </Container>;
}`,...X.parameters?.docs?.source},description:{story:"Prop `onSubmitError` в step позволяет обработать ошибку валидации при переходе на следующий шаг или отправке данных формы",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const handleSubmit = (values: FormValuesWithTariff) => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  });
  const handleAutosave = () => new Promise<void>(resolve => {
    setTimeout(() => {
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
    onSubmit,
    onSubmitError
  } = useFormWizard<FormValuesWithTariff>({
    autoSaveStrategy: 'changeStep',
    onAutoSave: handleAutosave,
    onChangeStep: (nextStepId, {
      reason,
      autosavePromise
    }) => {
      // Если произошел переход вперед на конкретный шаг
      if (nextStepId === 'stepPersonalData' && reason === 'nextStep') {
        // То для перехода на следующий шаг дожидаемся выполнения автосохранения
        return autosavePromise;
      }
      return;
    },
    steps: [{
      id: 'stepTariff',
      label: 'Выбор тарифа',
      component: StepTariff
    }, {
      id: 'stepPersonalData',
      label: 'Личные данные',
      component: StepPersonalData
    }],
    onSubmit: handleSubmit
  });
  return <Container>
      <FormWizard<FormValuesWithTariff> form={form} currentStepId={currentStepId} isFirstStep={isFirstStep} isLastStep={isLastStep} steps={steps} submitButtonText="Отправить" onClickStep={onClickStep} onPrevStep={onPrevStep} onSubmit={onSubmit} onSubmitError={onSubmitError} />

      <NotificationContainer />
    </Container>;
}`,...Z.parameters?.docs?.source},description:{story:`\`onChangeStep\` позволяет заблокировать переход на следующий шаг

Если \`onChangeStep\` возвращает promise, то переход на следующий шаг будет заблокирован до успешного завершения promise

Можно использовать в связке с автосохранением - запрещать переход на следующий шаг, пока автосохранение не завершится`,...Z.parameters?.docs?.description}}},Q=[`BasicUsage`,`ShouldSkip`,`DefaultValues`,`InitialStep`,`CustomButtonText`,`AutoSave`,`ChangeStep`,`OnClickStep`,`OnAutoSaveError`,`OnSubmitError`,`BlockingNextStepTransition`]})))()}$();export{K as AutoSave,V as BasicUsage,Z as BlockingNextStepTransition,q as ChangeStep,G as CustomButtonText,U as DefaultValues,W as InitialStep,Y as OnAutoSaveError,J as OnClickStep,X as OnSubmitError,H as ShouldSkip,Q as __namedExportsOrder,I as default};