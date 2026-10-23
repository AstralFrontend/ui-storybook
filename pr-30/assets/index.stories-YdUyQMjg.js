import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{it as t,rt as n,ya as r}from"./preview-D_kXaHc2.js";import{n as i,t as a}from"./Stack-BfzE1Npq.js";import{s as o,t as s}from"./DataGrid-Dn-H-GT_.js";import{t as c}from"./MenuItem-Dg1a_ty6.js";import{t as l}from"./MenuItem-C-RxGK8O.js";import{n as u,t as d}from"./IconDropdownButton-Dr4NYDkB.js";import{n as f,t as p}from"./DotsVOutlineMd-BI7sb86W.js";import{n as m,t as h}from"./EditOutlineMd-CaVVDbl1.js";var g,_;function v(){return(v=e((()=>{l(),g=r(),_=[(0,g.jsx)(c,{onClick:()=>console.log(`v1`),children:`Вариант выбора 1`},1),(0,g.jsx)(c,{onClick:()=>console.log(`v2`),children:`Вариант выбора 2`},2),(0,g.jsx)(c,{onClick:()=>console.log(`v3`),children:`Вариант выбора 3`},3)]})))()}function y(){return(y=e((()=>{v()})))()}var b,x,S,C;function w(){return(w=e((()=>{i(),p(),h(),s(),n(),u(),y(),b=r(),x=[{id:`1`,name:`Офис на ул. Куйбышева 128, к. №1`,code:`456-875`,ref:`http://referal.lk`},{id:`2`,name:`Офис на Огарева`,code:`456-875`,ref:`http://referal.lk`},{id:`3`,name:`Офис на Маяковской, оф 245`,code:`456-875`,ref:`http://referal.lk`}],S=()=>console.log(`clicked`),C=()=>(0,b.jsx)(o,{keyId:`id`,rows:x,columns:[{field:`name`,label:`Наименование`},{field:`code`,label:`Код партнёра`},{field:`ref`,label:`Реф. ссылка`},{label:``,align:`center`,minWidth:`100px`,renderCell:()=>(0,b.jsxs)(a,{gap:1,direction:`row`,justifyContent:`center`,children:[(0,b.jsx)(t,{variant:`light`,onClick:S,children:(0,b.jsx)(m,{})}),(0,b.jsx)(d,{variant:`light`,icon:(0,b.jsx)(f,{}),"aria-label":`Меню`,children:_})]})}],onRetry:()=>{}}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const columns: DataGridColumns<DataType>[] = [{
    field: 'name',
    label: 'Наименование'
  }, {
    field: 'code',
    label: 'Код партнёра'
  }, {
    field: 'ref',
    label: 'Реф. ссылка'
  }, {
    label: '',
    align: 'center',
    minWidth: '100px',
    renderCell: () => <Stack gap={1} direction="row" justifyContent="center">
          <IconButton variant="light" onClick={handleClick}>
            <EditOutlineMd />
          </IconButton>
          <IconDropdownButton variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
            {children}
          </IconDropdownButton>
        </Stack>
  }];
  return <DataGrid keyId="id" rows={slicedData} columns={columns} onRetry={() => {}} />;
}`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{p(),u(),y(),T=r(),E=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(d,{variant:`light`,icon:(0,T.jsx)(f,{}),"aria-label":`Меню`,children:_}),(0,T.jsx)(d,{size:`large`,variant:`light`,icon:(0,T.jsx)(f,{}),"aria-label":`Меню`,children:_})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <>
    <IconDropdownButton variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
    <IconDropdownButton size="large" variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
  </>`,...E.parameters?.docs?.source},description:{story:`Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.`,...E.parameters?.docs?.description}}};try{E.displayName=`ButtonSize`,E.__docgenInfo={description:`Существует 2 стандартных размера кноки: большой и стандартный. Большая используется для промостраниц и сайтов, стандартная в интерфейсах.`,displayName:`ButtonSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconDropdownButton/stories/ButtonSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{p(),u(),y(),O=r(),k=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{variant:`light`,icon:(0,O.jsx)(f,{}),"aria-label":`Меню`,children:_}),(0,O.jsx)(d,{variant:`text`,icon:(0,O.jsx)(f,{}),"aria-label":`Меню`,children:_})]}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <>
    <IconDropdownButton variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
    <IconDropdownButton variant="text" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
  </>`,...k.parameters?.docs?.source},description:{story:`Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.`,...k.parameters?.docs?.description}}};try{k.displayName=`Default`,k.__docgenInfo={description:`Кнопка может помещаться на одной строке с другими компонентами и не предполагает привлечения обязательного внимания всех пользователей. При взаимодействии со страницей часть пользователей не воспользуется кнопкой, но она может быть нужна определенной группе пользователей.`,displayName:`Default`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/IconDropdownButton/stories/Default.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M;function N(){return(N=e((()=>{p(),u(),y(),j=r(),M=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d,{disabled:!0,variant:`light`,icon:(0,j.jsx)(f,{}),"aria-label":`Меню`,children:_}),(0,j.jsx)(d,{disabled:!0,variant:`text`,icon:(0,j.jsx)(f,{}),"aria-label":`Меню`,children:_})]}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <>
    <IconDropdownButton disabled variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
    <IconDropdownButton disabled variant="text" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
  </>`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{p(),P=r(),F={args:{icon:(0,P.jsx)(f,{})},parameters:{docs:{disable:!0}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <DotsVOutlineMd />
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...F.parameters?.docs?.source}}}})))()}var L,R;function z(){return(z=e((()=>{p(),u(),y(),L=r(),R=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(d,{loading:!0,variant:`light`,icon:(0,L.jsx)(f,{}),"aria-label":`Меню`,children:_}),(0,L.jsx)(d,{loading:!0,variant:`text`,icon:(0,L.jsx)(f,{}),"aria-label":`Меню`,children:_})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <>
    <IconDropdownButton loading variant="light" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
    <IconDropdownButton loading variant="text" icon={<DotsVOutlineMd />} aria-label="Меню">
      {children}
    </IconDropdownButton>
  </>`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{u(),w(),D(),A(),N(),I(),z(),B={title:`Buttons/IconDropdownButton`,component:d,parameters:{docs:{description:{component:`IconDropdownButton - позволяет компактно разместить несколько вариантов действия в одном элементе. В большинстве случаев в качестве такого элемента выступает кнопка или пункт меню. Вызывается по клику или наведению на элемент.
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20165&p=f&t=7QJwjWUtbDm3304g-0)`}}}},V=[`Interaction`,`BasicUsage`,`Default`,`Disabled`,`Loading`,`ButtonSize`]})))()}H();export{C as BasicUsage,E as ButtonSize,k as Default,M as Disabled,F as Interaction,R as Loading,V as __namedExportsOrder,B as default};