import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r,za as i}from"./preview-Cpvm_2Dh.js";import{t as a}from"./TextField-COERxjkP.js";import{t as o}from"./ListItem-lrgyeyWx.js";import{t as s}from"./TextField-BxB4Pk-a.js";import{n as c,t as l}from"./DashboardLayout-BXS-QA1z.js";import{l as u,u as d}from"./PageContent-Belt2XCa.js";import{t as f}from"./List-DxpQS-lP.js";import{t as p}from"./List-9dCmxFIG.js";import{t as m}from"./ListItem-Qv_QFXVj.js";import{n as h,t as g}from"./SearchOutlineMd-BKZ1Jwmn.js";import{n as _,t as v}from"./useForm-CS_UMQSv.js";import{t as y}from"./FormTextField-dMhans-r.js";import{t as b}from"./FormTextField-DBFs1zim.js";import{i as x,n as S,r as C,t as w}from"./object-CXqDZ5YO.js";import{n as T,t as E}from"./email-5PpKcOpy.js";import{n as D,t as O}from"./mobilePhone-CTdxILNS.js";import{n as k,t as A}from"./string-hxNUuZd8.js";import{t as j}from"./FormEmailField-DJuYCIlQ.js";import{n as M,t as N}from"./FormMobilePhoneField-DuI5OZeK.js";import{t as P}from"./FormMobilePhoneField-BDOCz2pF.js";import{n as F,t as I}from"./FormPageLayout-nhDlfO8Q.js";import{n as L,t as R}from"./AddOutlineMd-Bz4iYQcL.js";import{n as ee,t as te}from"./SendOutlineMd-6feCUBaY.js";import{c as z,d as B,i as ne,l as V,n as re,s as ie,t as H}from"./common-BZtBjdpv.js";var U,W,G;function K(){return(K=e((()=>{T(),O(),w(),C(),A(),U=i(),l(),t(),p(),m(),u(),s(),R(),g(),M(),N(),b(),v(),F(),H(),W=r(),G=()=>{let e=S({lastName:k(),name:k(),patronymic:x(k()),phone:k(D()),email:x(k(E()))}),t=_({validationSchema:e}),[r,i]=(0,U.useState)(!1),[s,l]=(0,U.useState)(!1),u=()=>{i(!0),setTimeout(()=>{i(!1)},1500)},p=()=>{l(!0),setTimeout(()=>{l(!1)},1500)},m=t.handleSubmit(e=>new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>{window.alert(JSON.stringify(e,null,4))}));return(0,W.jsx)(B,{children:(0,W.jsxs)(c,{children:[(0,W.jsx)(c.Header,{...z}),(0,W.jsx)(c.Sidebar,{...V}),(0,W.jsx)(c.Main,{children:(0,W.jsx)(I,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:r,isBlockingOperation:!0,onClick:u},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,W.jsx)(L,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},form:{form:t,secondaryActions:[{text:`Отправить на подписание`},{text:`Отправить на почту`,isBlockingOperation:!0,loading:s,onClick:p}],submitButtonText:`Подписать и отправить`,onSubmit:m},aside:(0,W.jsxs)(d,{children:[(0,W.jsx)(a,{fullWidth:!0,placeholder:`Поиск по отчету`,InputProps:{startAdornment:(0,W.jsx)(h,{})}}),(0,W.jsxs)(f,{children:[(0,W.jsx)(o,{selected:!0,children:`Титульный лист`}),(0,W.jsx)(o,{children:`Раздел 1`}),(0,W.jsx)(o,{children:`Раздел 2`}),(0,W.jsx)(o,{children:`Раздел 3`}),(0,W.jsx)(o,{children:`Раздел 4`}),(0,W.jsx)(o,{children:`Раздел 5`})]})]}),children:(0,W.jsxs)(n,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:[(0,W.jsx)(y,{required:!0,label:`Фамилия`,control:t.control,name:`lastName`}),(0,W.jsx)(y,{required:!0,label:`Имя`,control:t.control,name:`name`}),(0,W.jsx)(y,{label:`Отчество`,control:t.control,name:`patronymic`}),(0,W.jsx)(P,{required:!0,label:`Телефон`,control:t.control,name:`phone`}),(0,W.jsx)(j,{label:`E-mail`,control:t.control,name:`email`})]})})})]})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  type FormValues = {
    lastName: FormTextFieldValue;
    name: FormTextFieldValue;
    patronymic?: FormTextFieldValue;
    phone: FormTextFieldValue;
    email: FormTextFieldValue;
  };
  const validationSchema = object<FormValues>({
    lastName: string(),
    name: string(),
    patronymic: optional(string()),
    phone: string(mobilePhone()),
    email: optional(string(email()))
  });
  const form = useForm<FormValues>({
    validationSchema
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);
  const handleSaving = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };
  const handleSendMail = () => {
    setIsSendMail(true);
    setTimeout(() => {
      setIsSendMail(false);
    }, 1500);
  };
  const handleSubmit = form.handleSubmit((values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 2000);
  }).then(() => {
    window.alert(JSON.stringify(values, null, 4));
  }));
  return <StoryWrapper>
      <DashboardLayout>
        <DashboardLayout.Header {...MockHeader} />
        <DashboardLayout.Sidebar {...MockSidebar} />
        <DashboardLayout.Main>
          <FormPageLayout<FormValues> header={{
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
              text: 'Скачать',
              variant: 'outlined',
              color: 'grey'
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
        }} form={{
          form,
          secondaryActions: [{
            text: 'Отправить на подписание'
          }, {
            text: 'Отправить на почту',
            isBlockingOperation: true,
            loading: isSendMail,
            onClick: handleSendMail
          }],
          submitButtonText: 'Подписать и отправить',
          onSubmit: handleSubmit
        }} aside={<PageAside>
                <TextField fullWidth placeholder="Поиск по отчету" InputProps={{
            startAdornment: <SearchOutlineMd />
          }} />
                <List>
                  <ListItem selected>Титульный лист</ListItem>
                  <ListItem>Раздел 1</ListItem>
                  <ListItem>Раздел 2</ListItem>
                  <ListItem>Раздел 3</ListItem>
                  <ListItem>Раздел 4</ListItem>
                  <ListItem>Раздел 5</ListItem>
                </List>
              </PageAside>}>
            <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
              <FormTextField required label="Фамилия" control={form.control} name="lastName" />

              <FormTextField required label="Имя" control={form.control} name="name" />

              <FormTextField label="Отчество" control={form.control} name="patronymic" />

              <FormMobilePhoneField required label="Телефон" control={form.control} name="phone" />

              <FormEmailField label="E-mail" control={form.control} name="email" />
            </Grid>
          </FormPageLayout>
        </DashboardLayout.Main>
      </DashboardLayout>
    </StoryWrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{T(),O(),w(),C(),A(),q=i(),l(),t(),p(),m(),u(),s(),R(),g(),M(),N(),b(),v(),F(),H(),J=r(),Y=()=>{let e=S({lastName:k(),name:k(),patronymic:x(k()),phone:k(D()),email:x(k(E())),inn:k(),snils:k()}),t=_({validationSchema:e}),[r,i]=(0,q.useState)(!1),[s,l]=(0,q.useState)(!1),u=()=>{i(!0),setTimeout(()=>{i(!1)},1500)},p=()=>{l(!0),setTimeout(()=>{l(!1)},1500)},m=t.handleSubmit(e=>new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>{window.alert(JSON.stringify(e,null,4))}));return(0,J.jsx)(B,{children:(0,J.jsxs)(c,{children:[(0,J.jsx)(c.Header,{...z}),(0,J.jsx)(c.Sidebar,{...V}),(0,J.jsx)(c.Main,{children:(0,J.jsx)(I,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:r,isBlockingOperation:!0,onClick:u},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,J.jsx)(L,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},form:{form:t,secondaryActions:[{text:`Отправить на подписание`,variant:`outlined`},{text:`Отправить на почту`,isBlockingOperation:!0,loading:s,onClick:p}],submitButtonText:`Подписать и отправить`,onSubmit:m},aside:(0,J.jsxs)(d,{children:[(0,J.jsx)(a,{fullWidth:!0,placeholder:`Поиск по отчету`,InputProps:{startAdornment:(0,J.jsx)(h,{})}}),(0,J.jsxs)(f,{children:[(0,J.jsx)(o,{selected:!0,children:`Титульный лист`}),(0,J.jsx)(o,{children:`Раздел 1`}),(0,J.jsx)(o,{children:`Раздел 2`}),(0,J.jsx)(o,{children:`Раздел 3`}),(0,J.jsx)(o,{children:`Раздел 4`}),(0,J.jsx)(o,{children:`Раздел 5`})]})]}),children:(0,J.jsxs)(n,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:[(0,J.jsx)(y,{required:!0,label:`Фамилия`,control:t.control,name:`lastName`}),(0,J.jsx)(y,{required:!0,label:`Имя`,control:t.control,name:`name`}),(0,J.jsx)(y,{label:`Отчество`,control:t.control,name:`patronymic`}),(0,J.jsx)(P,{required:!0,label:`Телефон`,control:t.control,name:`phone`}),(0,J.jsx)(j,{required:!0,label:`Снилс`,control:t.control,name:`snils`}),(0,J.jsx)(y,{required:!0,label:`ИНН`,control:t.control,name:`inn`}),(0,J.jsx)(j,{label:`E-mail`,control:t.control,name:`email`})]})})})]})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  type FormValues = {
    lastName: FormTextFieldValue;
    name: FormTextFieldValue;
    patronymic?: FormTextFieldValue;
    phone: FormTextFieldValue;
    email: FormTextFieldValue;
    inn: FormTextFieldValue;
    snils: FormTextFieldValue;
  };
  const validationSchema = object<FormValues>({
    lastName: string(),
    name: string(),
    patronymic: optional(string()),
    phone: string(mobilePhone()),
    email: optional(string(email())),
    inn: string(),
    snils: string()
  });
  const form = useForm<FormValues>({
    validationSchema
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSendMail, setIsSendMail] = useState(false);
  const handleSaving = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };
  const handleSendMail = () => {
    setIsSendMail(true);
    setTimeout(() => {
      setIsSendMail(false);
    }, 1500);
  };
  const handleSubmit = form.handleSubmit((values: FormValues) => new Promise<void>(resolve => {
    setTimeout(() => resolve(), 2000);
  }).then(() => {
    window.alert(JSON.stringify(values, null, 4));
  }));
  return <StoryWrapper>
      <DashboardLayout>
        <DashboardLayout.Header {...MockHeader} />
        <DashboardLayout.Sidebar {...MockSidebar} />
        <DashboardLayout.Main>
          <FormPageLayout<FormValues> header={{
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
              text: 'Скачать',
              variant: 'outlined',
              color: 'grey'
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
        }} form={{
          form,
          secondaryActions: [{
            text: 'Отправить на подписание',
            variant: 'outlined'
          }, {
            text: 'Отправить на почту',
            isBlockingOperation: true,
            loading: isSendMail,
            onClick: handleSendMail
          }],
          submitButtonText: 'Подписать и отправить',
          onSubmit: handleSubmit
        }} aside={<PageAside>
                <TextField fullWidth placeholder="Поиск по отчету" InputProps={{
            startAdornment: <SearchOutlineMd />
          }} />
                <List>
                  <ListItem selected>Титульный лист</ListItem>
                  <ListItem>Раздел 1</ListItem>
                  <ListItem>Раздел 2</ListItem>
                  <ListItem>Раздел 3</ListItem>
                  <ListItem>Раздел 4</ListItem>
                  <ListItem>Раздел 5</ListItem>
                </List>
              </PageAside>}>
            <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
              <FormTextField required label="Фамилия" control={form.control} name="lastName" />

              <FormTextField required label="Имя" control={form.control} name="name" />

              <FormTextField label="Отчество" control={form.control} name="patronymic" />

              <FormMobilePhoneField required label="Телефон" control={form.control} name="phone" />

              <FormEmailField required label="Снилс" control={form.control} name="snils" />

              <FormTextField required label="ИНН" control={form.control} name="inn" />

              <FormEmailField label="E-mail" control={form.control} name="email" />
            </Grid>
          </FormPageLayout>
        </DashboardLayout.Main>
      </DashboardLayout>
    </StoryWrapper>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q,$;function ae(){return(ae=e((()=>{T(),O(),w(),C(),A(),te(),v(),F(),H(),Z=r(),Q=S({lastName:k(),name:k(),patronymic:x(k()),phone:k(D()),email:x(k(E()))}),$=()=>{let e=_({validationSchema:Q}),{handleSubmit:t}=ie({form:e});return(0,Z.jsx)(ne,{children:(0,Z.jsx)(I,{header:{title:`Создание доверенности`},form:{form:e,submitButtonText:`Подписать и отправить`,onSubmit:t,submitButtonProps:{endIcon:(0,Z.jsx)(ee,{}),color:`success`}},children:(0,Z.jsx)(re,{form:e})})})};try{$.displayName=`SubmitButtonProps`,$.__docgenInfo={description:"Параметр `submitButtonProps` позволяет задавать параметры `endIcon`, `startIcon` и `color` для кнопки отправки формы.",displayName:`SubmitButtonProps`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/stories/SubmitButtonProps.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var oe,se;function ce(){return(ce=e((()=>{F(),K(),X(),ae(),oe={title:`React-Hook-Form/Layout/FormPageLayout`,component:I,parameters:{layout:`fullscreen`,docs:{description:{component:`Layout для страниц с формами. Инкапсулирует всю необходимую логику поведения: блокировку действий и формы, автосохранение и т.д.
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=589-140103&t=5qoNavb0hfcmPi4r-4)`}}}},se=[`BasicUsage`,`FormWithScroll`,`SubmitButtonProps`]})))()}ce();export{G as BasicUsage,Y as FormWithScroll,$ as SubmitButtonProps,se as __namedExportsOrder,oe as default};