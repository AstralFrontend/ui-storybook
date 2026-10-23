import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ln as r,lt as i,ya as a,za as o}from"./preview-28_ENgae.js";import{t as s}from"./TextField-ozEXO7WW.js";import{t as c}from"./ListItem-Ba7UWSVl.js";import{t as l}from"./TextField-B0rnQuro.js";import{t as ee}from"./Alert-B5sKM_MR.js";import{t as te}from"./Alert-73KEFzAF.js";import{n as u,t as ne}from"./DashboardLayout-BClAK8Nx.js";import{l as re,u as ie}from"./PageContent-B2ylp5rC.js";import{t as d}from"./List-_nNwOFxw.js";import{t as ae}from"./List-UPN1XPot.js";import{t as oe}from"./ListItem-UrdoJeNu.js";import{n as se,t as ce}from"./SearchOutlineMd-v2QYE7DS.js";import{n as le,t as ue}from"./useForm-bYrqn9Tx.js";import{t as f}from"./FormTextField-dD5SsSxY.js";import{t as de}from"./FormTextField-fUWbmc-B.js";import{i as p,n as fe,r as pe,t as m}from"./object-CXqDZ5YO.js";import{n as me,t as he}from"./email-5PpKcOpy.js";import{n as ge,t as _e}from"./mobilePhone-CTdxILNS.js";import{n as h,t as g}from"./string-hxNUuZd8.js";import{t as ve}from"./FormEmailField-BcIZgfnA.js";import{n as ye,t as be}from"./FormMobilePhoneField-CSdhLRns.js";import{t as _}from"./FormMobilePhoneField-ByFU1wvr.js";import{n as xe,t as v}from"./FormPageLayout-CB9Xa3he.js";import{t as y}from"./FormPageLayout-BBBuJijZ.js";import{n as b,t as x}from"./AddOutlineMd-2-ZJWRbu.js";import{n as S,t as C}from"./CompanyOutlineMd-C4mGJEAj.js";import{c as Se,d as Ce,l as we,t as Te}from"./common-7o429Ho7.js";var w,T,E,D,O,k,A;function j(){return(j=e((()=>{me(),_e(),m(),pe(),g(),w=o(),ne(),ae(),oe(),re(),l(),ce(),ye(),be(),de(),ue(),Te(),T=a(),E=fe({lastName:h(),name:h(),patronymic:p(h()),phone:h(ge()),email:p(h(he()))}),D=()=>{let e=le({validationSchema:E}),[t,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(!1);return{form:e,isSaving:t,isSendMail:r,handleSaving:()=>{n(!0),setTimeout(()=>{n(!1)},1500)},handleSendMail:()=>{i(!0),setTimeout(()=>{i(!1)},1500)},handleSubmit:e.handleSubmit(e=>new Promise(e=>{setTimeout(()=>e(),2e3)}).then(()=>{window.alert(JSON.stringify(e,null,4))}))}},O=()=>(0,T.jsxs)(ie,{children:[(0,T.jsx)(s,{fullWidth:!0,placeholder:`Поиск по отчету`,InputProps:{startAdornment:(0,T.jsx)(se,{})}}),(0,T.jsxs)(d,{children:[(0,T.jsx)(c,{selected:!0,children:`Титульный лист`}),(0,T.jsx)(c,{children:`Раздел 1`}),(0,T.jsx)(c,{children:`Раздел 2`}),(0,T.jsx)(c,{children:`Раздел 3`}),(0,T.jsx)(c,{children:`Раздел 4`}),(0,T.jsx)(c,{children:`Раздел 5`})]})]}),k=({form:e})=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{required:!0,label:`Фамилия`,control:e.control,name:`lastName`}),(0,T.jsx)(f,{required:!0,label:`Имя`,control:e.control,name:`name`}),(0,T.jsx)(f,{label:`Отчество`,control:e.control,name:`patronymic`}),(0,T.jsx)(_,{required:!0,label:`Телефон`,control:e.control,name:`phone`}),(0,T.jsx)(ve,{label:`E-mail`,control:e.control,name:`email`})]}),A=({children:e})=>(0,T.jsx)(Ce,{children:(0,T.jsxs)(u,{children:[(0,T.jsx)(u.Header,{...Se}),(0,T.jsx)(u.Sidebar,{...we}),(0,T.jsx)(u.Main,{children:e})]})});try{k.displayName=`MockFormFields`,k.__docgenInfo={description:``,displayName:`MockFormFields`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/stories/testStories/common.tsx`,methods:[],props:{form:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/stories/testStories/common.tsx`,name:`TypeLiteral`}],description:``,name:`form`,required:!0,tags:{},type:{name:`UseFormReturn<FormValues, any>`}}},tags:{}}}catch{}try{A.displayName=`MockWrapper`,A.__docgenInfo={description:``,displayName:`MockWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/stories/testStories/common.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/stories/testStories/common.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var M,N;function P(){return(P=e((()=>{n(),x(),C(),y(),j(),M=a(),N=()=>{let{form:e,isSaving:t,handleSaving:n,handleSubmit:r}=D();return(0,M.jsx)(A,{children:(0,M.jsx)(v,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:t,isBlockingOperation:!0,onClick:n},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,M.jsx)(b,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}],secondaryVisible:[{name:`О компании`,icon:(0,M.jsx)(S,{})},{name:`Добавить`,icon:(0,M.jsx)(b,{}),disabled:!0,disabledReason:`Действие недоступно, т.к. у вас недостаточно прав`}],secondary:[{text:`secondary action 1`},{text:`secondary action 2`}]}},form:{form:e,secondaryActions:[{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Отправить на подписание`,variant:`outlined`,color:`grey`},{text:`Отправить на почту`},{text:`Последнее`}],submitButtonText:`Подписать и отправить`,onSubmit:r},aside:(0,M.jsx)(O,{}),children:(0,M.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,M.jsx)(k,{form:e})})})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    isSaving,
    handleSaving,
    handleSubmit
  } = useMockForm();
  return <MockWrapper>
      <FormPageLayout header={{
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
        }],
        secondaryVisible: [{
          name: 'О компании',
          icon: <CompanyOutlineMd />
        }, {
          name: 'Добавить',
          icon: <AddOutlineMd />,
          disabled: true,
          disabledReason: 'Действие недоступно, т.к. у вас недостаточно прав'
        }],
        secondary: [{
          text: 'secondary action 1'
        }, {
          text: 'secondary action 2'
        }]
      }
    }} form={{
      form,
      secondaryActions: [{
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }, {
        text: 'Отправить на почту'
      }, {
        text: 'Последнее'
      }],
      submitButtonText: 'Подписать и отправить',
      onSubmit: handleSubmit
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{n(),y(),j(),F=a(),I=()=>{let{form:e,handleSubmit:t}=D();return(0,F.jsx)(A,{children:(0,F.jsx)(v,{header:{title:`Создание доверенности`},form:{form:e,secondaryActions:[{text:`Отправить на подписание`,variant:`outlined`,color:`grey`}],submitButtonText:`Подписать и отправить`,onSubmit:t},aside:(0,F.jsx)(O,{}),children:(0,F.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,F.jsx)(k,{form:e})})})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    handleSubmit
  } = useMockForm();
  return <MockWrapper>
      <FormPageLayout header={{
      title: 'Создание доверенности'
    }} form={{
      form,
      secondaryActions: [{
        text: 'Отправить на подписание',
        variant: 'outlined',
        color: 'grey'
      }],
      submitButtonText: 'Подписать и отправить',
      onSubmit: handleSubmit
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{n(),x(),C(),y(),j(),R=a(),z=()=>{let{form:e,isSaving:t,handleSaving:n,handleSubmit:r}=D();return(0,R.jsx)(A,{children:(0,R.jsx)(v,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:t,isBlockingOperation:!0,onClick:n},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,R.jsx)(b,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}],secondaryVisible:[{name:`О компании`,icon:(0,R.jsx)(S,{})},{name:`Добавить`,icon:(0,R.jsx)(b,{}),disabled:!0,disabledReason:`Действие недоступно, т.к. у вас недостаточно прав`}],secondary:[{text:`secondary action 1`},{text:`secondary action 2`}]}},form:{form:e,submitButtonText:`Подписать и отправить`,onSubmit:r},aside:(0,R.jsx)(O,{}),children:(0,R.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,R.jsx)(k,{form:e})})})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    isSaving,
    handleSaving,
    handleSubmit
  } = useMockForm();
  return <MockWrapper>
      <FormPageLayout header={{
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
        }],
        secondaryVisible: [{
          name: 'О компании',
          icon: <CompanyOutlineMd />
        }, {
          name: 'Добавить',
          icon: <AddOutlineMd />,
          disabled: true,
          disabledReason: 'Действие недоступно, т.к. у вас недостаточно прав'
        }],
        secondary: [{
          text: 'secondary action 1'
        }, {
          text: 'secondary action 2'
        }]
      }
    }} form={{
      form,
      submitButtonText: 'Подписать и отправить',
      onSubmit: handleSubmit
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{n(),x(),C(),y(),j(),V=a(),H=()=>{let{form:e,isSaving:t,isSendMail:n,handleSaving:r,handleSendMail:a,handleSubmit:o}=D();return(0,V.jsx)(A,{children:(0,V.jsx)(v,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:t,isBlockingOperation:!0,onClick:r},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,V.jsx)(b,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}],secondaryVisible:[{name:`О компании`,icon:(0,V.jsx)(S,{})},{name:`Добавить`,icon:(0,V.jsx)(b,{}),disabled:!0,disabledReason:`Действие недоступно, т.к. у вас недостаточно прав`}],secondary:[{text:`secondary action 1`},{text:`secondary action 2`}]}},form:{form:e,secondaryActions:[{text:`Отправить на подписание`,variant:`outlined`},{text:`Отправить на почту`,isBlockingOperation:!0,loading:n,onClick:a}],submitButtonText:`Подписать и отправить`,onSubmit:o},aside:(0,V.jsx)(O,{}),children:(0,V.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,V.jsx)(k,{form:e})})})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    isSaving,
    isSendMail,
    handleSaving,
    handleSendMail,
    handleSubmit
  } = useMockForm();
  return <MockWrapper>
      <FormPageLayout header={{
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
        }],
        secondaryVisible: [{
          name: 'О компании',
          icon: <CompanyOutlineMd />
        }, {
          name: 'Добавить',
          icon: <AddOutlineMd />,
          disabled: true,
          disabledReason: 'Действие недоступно, т.к. у вас недостаточно прав'
        }],
        secondary: [{
          text: 'secondary action 1'
        }, {
          text: 'secondary action 2'
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
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=o(),te(),t(),n(),x(),y(),j(),G=a(),K=()=>{let{form:e,isSaving:t,isSendMail:n,handleSaving:a,handleSendMail:o,handleSubmit:s}=D(),[c,l]=(0,W.useState)(!0);return(0,G.jsx)(A,{children:(0,G.jsx)(v,{header:{title:`Создание доверенности`,actions:{main:[{text:`Сохранить`,variant:`outlined`,color:`grey`,loading:t,isBlockingOperation:!0,onClick:a},{text:`Скачать`,variant:`outlined`,color:`grey`},{text:`Добавить по номеру`,startIcon:(0,G.jsx)(b,{}),popoverProps:{title:`Добавить по номеру`},variant:`outlined`,color:`grey`,isNested:!0,actions:[{text:`Из реестра ЦПРР`},{text:`Из реестра СФР`}]}]}},alert:(0,G.jsxs)(ee,{isShow:c,onClose:()=>l(!1),children:[`Отправлена заявка на подключение лицензии. Обратитесь в обслуживающую организацию. Если у вас нет обслуживающей организации, подобрать ее можно`,` `,(0,G.jsx)(r,{variant:`link`,component:`a`,href:`/`,target:`_blank`,children:`здесь`})]}),form:{form:e,secondaryActions:[{text:`Отправить на подписание`,variant:`outlined`},{text:`Отправить на почту`,isBlockingOperation:!0,loading:n,onClick:o}],submitButtonText:`Подписать и отправить`,onSubmit:s},aside:(0,G.jsx)(O,{}),children:(0,G.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,G.jsx)(k,{form:e})})})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    isSaving,
    isSendMail,
    handleSaving,
    handleSendMail,
    handleSubmit
  } = useMockForm();
  const [isShowPageAlert, setIsShowPageAlert] = useState(true);
  return <MockWrapper>
      <FormPageLayout header={{
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
    }} alert={<Alert isShow={isShowPageAlert} onClose={() => setIsShowPageAlert(false)}>
            Отправлена заявка на подключение лицензии. Обратитесь в
            обслуживающую организацию. Если у вас нет обслуживающей организации,
            подобрать ее можно{' '}
            <Button variant="link" component="a" href="/" target="_blank">
              здесь
            </Button>
          </Alert>} form={{
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
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...K.parameters?.docs?.source}}}})))()}var J,Y;function X(){return(X=e((()=>{n(),y(),j(),J=a(),Y=()=>{let{form:e,handleSubmit:t}=D();return(0,J.jsx)(A,{children:(0,J.jsx)(v,{header:{title:`Создание доверенности`},form:{form:e,submitButtonText:`Подписать и отправить`,onSubmit:t},aside:(0,J.jsx)(O,{}),children:(0,J.jsx)(i,{container:!0,rowSpacing:2,columnSpacing:2,columns:`repeat(auto-fill, minmax(200px, 600px))`,children:(0,J.jsx)(k,{form:e})})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const {
    form,
    handleSubmit
  } = useMockForm();
  return <MockWrapper>
      <FormPageLayout header={{
      title: 'Создание доверенности'
    }} form={{
      form,
      submitButtonText: 'Подписать и отправить',
      onSubmit: handleSubmit
    }} aside={<MockAside />}>
        <Grid container rowSpacing={2} columnSpacing={2} columns="repeat(auto-fill, minmax(200px, 600px))">
          <MockFormFields form={form} />
        </Grid>
      </FormPageLayout>
    </MockWrapper>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{xe(),P(),L(),B(),U(),q(),X(),Z={title:`React-Hook-Form/Layout/FormPageLayout/Tests`,component:v,parameters:{layout:`fullscreen`}},Q=[`WithAlert`,`PageActions`,`OnlySubmitButton`,`ManySecondaryActions`,`OneSecondaryAction`,`WithoutPageActions`]})))()}$();export{N as ManySecondaryActions,I as OneSecondaryAction,z as OnlySubmitButton,H as PageActions,K as WithAlert,Y as WithoutPageActions,Q as __namedExportsOrder,Z as default};