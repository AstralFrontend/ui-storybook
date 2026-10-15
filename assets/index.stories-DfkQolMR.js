import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{at as t,ct as n,it as r,ji as i,lt as a,xa as o,yn as ee}from"./preview-De2xeSj1.js";import{s as te,t as s}from"./DataGrid-D-7WrTMV.js";import{l as ne,t as c}from"./DataGridActionCell-BouaU-JN.js";import{t as l}from"./DataGridActionCell-B4rJW2Zm.js";import{n as u,t as d}from"./DownloadOutlineMd-BJsDyq2j.js";import{n as f,t as re}from"./EyeOutlineMd-BHeCbAG-.js";import{n as p,t as m}from"./EyeFillMd-ocJriqea.js";import{a as h,i as g,n as _,t as v}from"./PrintOutlineMd-B7z5oLNw.js";import{n as y,t as b}from"./SendOutlineMd-B_WaY0rn.js";var x,S;function C(){return(C=e((()=>{m(),b(),s(),l(),x=o(),S=()=>{let e={main:[{icon:(0,x.jsx)(p,{}),name:`Просмотреть`,onClick:()=>console.log(`main`)},{icon:(0,x.jsx)(y,{}),nested:!0,name:`Отправить`,actions:[{name:`Туда`,onClick:()=>console.log(`nested 1`)},{name:`Сюда`,onClick:()=>console.log(`nested 2`)}]}]};return(0,x.jsx)(te,{rows:[{id:`1`,name:`Офис на ул. Куйбышева 128, к. №1`,code:`456-875`,ref:`http://referal.lk`},{id:`2`,name:`Офис на Огарева`,code:`456-875`,ref:`http://referal.lk.`},{id:`3`,name:`Офис на Маяковской, оф 245`,code:`456-875`,ref:`http://referal.lk`}],columns:[{field:`name`,label:`Наименование`},{field:`code`,label:`Код партнера`},{field:`ref`,label:`Реф. ссылка`},{label:`Действия`,sortable:!1,width:`120px`,align:`right`,renderCell:t=>(0,x.jsx)(c,{row:t,mainActions:()=>(0,x.jsx)(ne,{actions:e.main})})}],keyId:`id`,onRetry:()=>{}})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const ACTIONS = {
    main: [{
      icon: <EyeFillMd />,
      name: 'Просмотреть',
      onClick: () => console.log('main')
    }, {
      icon: <SendOutlineMd />,
      nested: true,
      name: 'Отправить',
      actions: [{
        name: 'Туда',
        onClick: () => console.log('nested 1')
      }, {
        name: 'Сюда',
        onClick: () => console.log('nested 2')
      }]
    }]
  };
  const COLUMNS: DataGridColumns<Columns>[] = [{
    field: 'name',
    label: 'Наименование'
  }, {
    field: 'code',
    label: 'Код партнера'
  }, {
    field: 'ref',
    label: 'Реф. ссылка'
  }, {
    label: 'Действия',
    sortable: false,
    width: '120px',
    align: 'right',
    renderCell: row => <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={ACTIONS.main} />} />
  }];
  const DATA: Columns[] = [{
    id: '1',
    name: 'Офис на ул. Куйбышева 128, к. №1',
    code: '456-875',
    ref: 'http://referal.lk'
  }, {
    id: '2',
    name: 'Офис на Огарева',
    code: '456-875',
    ref: 'http://referal.lk.'
  }, {
    id: '3',
    name: 'Офис на Маяковской, оф 245',
    code: '456-875',
    ref: 'http://referal.lk'
  }];
  return <DataGrid rows={DATA} columns={COLUMNS} keyId="id" onRetry={() => {}} />;
}`,...S.parameters?.docs?.source}}}})))()}var w;function T(){return(T=e((()=>{n(),ee(),w=i(a)`
  display: grid;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: center;
  justify-content: center;
`})))()}function E(){return(E=e((()=>{T()})))()}var D,O;function k(){return(k=e((()=>{d(),t(),E(),D=o(),O=()=>(0,D.jsxs)(w,{columns:2,children:[(0,D.jsx)(r,{size:`medium`,variant:`light`,children:(0,D.jsx)(u,{})}),(0,D.jsx)(r,{size:`large`,variant:`light`,children:(0,D.jsx)(u,{})})]}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <ButtonsContainer columns={2}>
      <IconButton size="medium" variant="light">
        <DownloadOutlineMd />
      </IconButton>
      <IconButton size="large" variant="light">
        <DownloadOutlineMd />
      </IconButton>
    </ButtonsContainer>;
}`,...O.parameters?.docs?.source},description:{story:`Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.`,...O.parameters?.docs?.description}}};try{O.displayName=`ButtonSize`,O.__docgenInfo={description:`Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.`,displayName:`ButtonSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/ButtonSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var A,j;function M(){return(M=e((()=>{g(),n(),t(),E(),A=o(),j=()=>(0,A.jsxs)(a,{container:!0,spacing:3,children:[(0,A.jsxs)(w,{columns:6,children:[(0,A.jsx)(r,{variant:`contained`,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`success`,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`warning`,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`error`,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`grey`,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`grey`,disabled:!0,children:(0,A.jsx)(h,{})})]}),(0,A.jsxs)(w,{columns:6,children:[(0,A.jsx)(r,{variant:`contained`,loading:!0,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`success`,loading:!0,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`warning`,loading:!0,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`error`,loading:!0,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`grey`,loading:!0,children:(0,A.jsx)(h,{})}),(0,A.jsx)(r,{variant:`contained`,color:`grey`,disabled:!0,loading:!0,children:(0,A.jsx)(h,{})})]})]}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={3}>
      <ButtonsContainer columns={6}>
        <IconButton variant="contained">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="success">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="warning">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="error">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="grey">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="grey" disabled>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={6}>
        <IconButton variant="contained" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="success" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="warning" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="error" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="grey" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="grey" disabled loading>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>;
}`,...j.parameters?.docs?.source},description:{story:`Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.

На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов.`,...j.parameters?.docs?.description}}};try{j.displayName=`Contained`,j.__docgenInfo={description:`Используется, когда необходимо обозначить ключевое или стартовое действие на странице. Например, начать заполнение формы или завершить работу с ней.

На одной странице не может находиться свыше одной акцентной кнопки. Исключение — акцентные кнопки с одинаковым действием в ряду однородных, равнозначных элементов.`,displayName:`Contained`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/Contained.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function F(){return(F=e((()=>{d(),n(),t(),E(),N=o(),P=()=>(0,N.jsxs)(a,{container:!0,spacing:3,children:[(0,N.jsxs)(w,{columns:3,children:[(0,N.jsx)(r,{variant:`contained`,color:`error`,children:(0,N.jsx)(u,{})}),(0,N.jsx)(r,{variant:`contained`,color:`success`,children:(0,N.jsx)(u,{})}),(0,N.jsx)(r,{variant:`contained`,color:`warning`,children:(0,N.jsx)(u,{})})]}),(0,N.jsxs)(w,{columns:3,children:[(0,N.jsx)(r,{variant:`light`,color:`error`,children:(0,N.jsx)(u,{})}),(0,N.jsx)(r,{variant:`light`,color:`success`,children:(0,N.jsx)(u,{})}),(0,N.jsx)(r,{variant:`light`,color:`warning`,children:(0,N.jsx)(u,{})})]})]}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={3}>
      <ButtonsContainer columns={3}>
        <IconButton variant="contained" color="error">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="success">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="contained" color="warning">
          <DownloadOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={3}>
        <IconButton variant="light" color="error">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="light" color="success">
          <DownloadOutlineMd />
        </IconButton>
        <IconButton variant="light" color="warning">
          <DownloadOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>;
}`,...P.parameters?.docs?.source},description:{story:`К любой кнопке может быть добавлен эмоциональный оттенок.`,...P.parameters?.docs?.description}}};try{P.displayName=`EmotionalTone`,P.__docgenInfo={description:`К любой кнопке может быть добавлен эмоциональный оттенок.`,displayName:`EmotionalTone`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/EmotionalTone.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L;function R(){return(R=e((()=>{v(),t(),I=o(),L={render:e=>(0,I.jsx)(r,{...e,children:(0,I.jsx)(_,{})}),args:{},parameters:{docs:{disable:!0}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <IconButton {...args}>
        <PrintOutlineMd />
      </IconButton>;
  },
  args: {},
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}var z,B;function V(){return(V=e((()=>{re(),n(),t(),E(),z=o(),B=()=>(0,z.jsxs)(a,{container:!0,spacing:3,children:[(0,z.jsxs)(w,{columns:6,children:[(0,z.jsx)(r,{variant:`light`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`success`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`warning`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`error`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`grey`,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`grey`,disabled:!0,children:(0,z.jsx)(f,{})})]}),(0,z.jsxs)(w,{columns:6,children:[(0,z.jsx)(r,{variant:`light`,loading:!0,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`success`,loading:!0,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`warning`,loading:!0,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`error`,loading:!0,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`grey`,loading:!0,children:(0,z.jsx)(f,{})}),(0,z.jsx)(r,{variant:`light`,color:`grey`,disabled:!0,loading:!0,children:(0,z.jsx)(f,{})})]})]}),B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={3}>
      <ButtonsContainer columns={6}>
        <IconButton variant="light">
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="success">
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="warning">
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="error">
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="grey">
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="grey" disabled>
          <EyeOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={6}>
        <IconButton variant="light" loading>
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="success" loading>
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="warning" loading>
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="error" loading>
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="grey" loading>
          <EyeOutlineMd />
        </IconButton>
        <IconButton variant="light" color="grey" disabled loading>
          <EyeOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>;
}`,...B.parameters?.docs?.source},description:{story:`Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.`,...B.parameters?.docs?.description}}};try{B.displayName=`Light`,B.__docgenInfo={description:`Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.`,displayName:`Light`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/Light.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U;function W(){return(W=e((()=>{g(),t(),E(),H=o(),U=()=>(0,H.jsxs)(w,{columns:4,children:[(0,H.jsx)(r,{variant:`link`,children:(0,H.jsx)(h,{})}),(0,H.jsx)(r,{selected:!0,variant:`link`,children:(0,H.jsx)(h,{})}),(0,H.jsx)(r,{disabled:!0,variant:`link`,children:(0,H.jsx)(h,{})}),(0,H.jsx)(r,{loading:!0,variant:`link`,children:(0,H.jsx)(h,{})})]}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ButtonsContainer columns={4}>
      <IconButton variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton selected variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton disabled variant="link">
        <FilterOutlineMd />
      </IconButton>
      <IconButton loading variant="link">
        <FilterOutlineMd />
      </IconButton>
    </ButtonsContainer>;
}`,...U.parameters?.docs?.source},description:{story:`Кнопка для перехода по ссылке на новую страницу. В некоторых случаях открывает окно браузера.`,...U.parameters?.docs?.description}}};try{U.displayName=`Link`,U.__docgenInfo={description:`Кнопка для перехода по ссылке на новую страницу. В некоторых случаях открывает окно браузера.`,displayName:`Link`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/Link.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K;function q(){return(q=e((()=>{g(),n(),t(),E(),G=o(),K=()=>(0,G.jsxs)(a,{container:!0,spacing:3,children:[(0,G.jsxs)(w,{columns:6,children:[(0,G.jsx)(r,{variant:`outlined`,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`success`,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`warning`,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`error`,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`grey`,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`grey`,disabled:!0,children:(0,G.jsx)(h,{})})]}),(0,G.jsxs)(w,{columns:6,children:[(0,G.jsx)(r,{variant:`outlined`,loading:!0,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`success`,loading:!0,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`warning`,loading:!0,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`error`,loading:!0,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`grey`,loading:!0,children:(0,G.jsx)(h,{})}),(0,G.jsx)(r,{variant:`outlined`,color:`grey`,disabled:!0,loading:!0,children:(0,G.jsx)(h,{})})]})]}),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={3}>
      <ButtonsContainer columns={6}>
        <IconButton variant="outlined">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="success">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="warning">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="error">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="grey">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="grey" disabled>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={6}>
        <IconButton variant="outlined" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="success" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="warning" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="error" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="grey" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="outlined" color="grey" disabled loading>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>;
}`,...K.parameters?.docs?.source}}}})))()}var J,Y;function X(){return(X=e((()=>{g(),n(),t(),E(),J=o(),Y=()=>(0,J.jsxs)(a,{container:!0,spacing:3,children:[(0,J.jsxs)(w,{columns:6,children:[(0,J.jsx)(r,{variant:`text`,color:`primary`,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`success`,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`warning`,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`error`,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,disabled:!0,children:(0,J.jsx)(h,{})})]}),(0,J.jsxs)(w,{columns:6,children:[(0,J.jsx)(r,{variant:`text`,color:`primary`,loading:!0,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`success`,loading:!0,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`warning`,loading:!0,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,color:`error`,loading:!0,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,loading:!0,children:(0,J.jsx)(h,{})}),(0,J.jsx)(r,{variant:`text`,disabled:!0,loading:!0,children:(0,J.jsx)(h,{})})]})]}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <Grid container spacing={3}>
      <ButtonsContainer columns={6}>
        <IconButton variant="text" color="primary">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="success">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="warning">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="error">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text">
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" disabled>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
      <ButtonsContainer columns={6}>
        <IconButton variant="text" color="primary" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="success" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="warning" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" color="error" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" loading>
          <FilterOutlineMd />
        </IconButton>
        <IconButton variant="text" disabled loading>
          <FilterOutlineMd />
        </IconButton>
      </ButtonsContainer>
    </Grid>;
}`,...Y.parameters?.docs?.source},description:{story:`Кнопка требующая наименьшего внимания.`,...Y.parameters?.docs?.description}}};try{Y.displayName=`Text`,Y.__docgenInfo={description:`Кнопка требующая наименьшего внимания.`,displayName:`Text`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconButton/stories/Text.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q;function $(){return($=e((()=>{t(),C(),k(),M(),F(),R(),V(),W(),q(),X(),Z={title:`Buttons/IconButton`,component:r,parameters:{docs:{description:{component:`Кнопки позволяют пользователям выполнять действия и делать выбор одним нажатием.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20165&p=f&t=7QJwjWUtbDm3304g-0)`}}}},Q=[`Interaction`,`BasicUsage`,`Contained`,`Light`,`Text`,`Outlined`,`Link`,`ButtonSize`,`EmotionalTone`]})))()}$();export{S as BasicUsage,O as ButtonSize,j as Contained,P as EmotionalTone,L as Interaction,B as Light,U as Link,K as Outlined,Y as Text,Q as __namedExportsOrder,Z as default};