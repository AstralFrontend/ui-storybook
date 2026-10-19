import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,lt as i,ya as a}from"./preview-IOjL1aMA.js";import{t as o}from"./MenuItem-DeHKNVyS.js";import{n as s,t as c}from"./DropdownButton-D7vvhBHi.js";import{t as l}from"./MenuItem-DOE53kKP.js";import{n as u,t as d}from"./DialogOutlineMd-Dfok0MEd.js";var f,p;function m(){return(m=e((()=>{l(),f=a(),p=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{onClick:()=>console.log(`v1`),children:`Вариант выбора 1`}),(0,f.jsx)(o,{onClick:()=>console.log(`v2`),children:`Вариант выбора 2`}),(0,f.jsx)(o,{onClick:()=>console.log(`v3`),children:`Вариант выбора 3`})]})})))()}function h(){return(h=e((()=>{m()})))()}var g,_;function v(){return(v=e((()=>{t(),s(),h(),g=a(),_=()=>(0,g.jsxs)(i,{container:!0,columns:3,spacing:4,children:[(0,g.jsx)(c,{name:`Default`,children:p}),(0,g.jsx)(c,{disabled:!0,name:`Disabled`,children:p}),(0,g.jsx)(c,{loading:!0,name:`Loading`,children:p})]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Grid container columns={3} spacing={4}>
    <DropdownButton name="Default">{DROPDOWN_CONTENT}</DropdownButton>
    <DropdownButton disabled name="Disabled">
      {DROPDOWN_CONTENT}
    </DropdownButton>
    <DropdownButton loading name="Loading">
      {DROPDOWN_CONTENT}
    </DropdownButton>
  </Grid>`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{t(),n(),s(),h(),y=a(),b=()=>(0,y.jsxs)(i,{container:!0,rowSpacing:5,children:[(0,y.jsx)(r,{variant:`h6`,children:`Variant`}),(0,y.jsxs)(i,{container:!0,columns:3,spacing:4,children:[(0,y.jsx)(c,{name:`Default`,children:p}),(0,y.jsx)(c,{variant:`light`,name:`Light`,children:p}),(0,y.jsx)(c,{variant:`text`,name:`Text`,children:p}),(0,y.jsx)(c,{variant:`link`,name:`Link`,children:p})]}),(0,y.jsx)(r,{variant:`h6`,children:`Color`}),(0,y.jsxs)(i,{container:!0,columns:3,spacing:4,children:[(0,y.jsx)(c,{color:`primary`,name:`Primary`,children:p}),(0,y.jsx)(c,{color:`error`,name:`Error`,children:p}),(0,y.jsx)(c,{color:`success`,name:`Success`,children:p}),(0,y.jsx)(c,{color:`warning`,name:`Warning`,children:p})]}),(0,y.jsx)(r,{variant:`h6`,children:`Size`}),(0,y.jsxs)(i,{container:!0,columns:3,spacing:6,children:[(0,y.jsx)(c,{size:`medium`,name:`Medium`,children:p}),(0,y.jsx)(c,{size:`large`,name:`Large`,children:p})]})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <Grid container rowSpacing={5}>
    <Typography variant="h6">Variant</Typography>

    <Grid container columns={3} spacing={4}>
      <DropdownButton name="Default">{DROPDOWN_CONTENT}</DropdownButton>
      <DropdownButton variant="light" name="Light">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton variant="text" name="Text">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton variant="link" name="Link">
        {DROPDOWN_CONTENT}
      </DropdownButton>
    </Grid>

    <Typography variant="h6">Color</Typography>

    <Grid container columns={3} spacing={4}>
      <DropdownButton color="primary" name="Primary">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton color="error" name="Error">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton color="success" name="Success">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton color="warning" name="Warning">
        {DROPDOWN_CONTENT}
      </DropdownButton>
    </Grid>

    <Typography variant="h6">Size</Typography>

    <Grid container columns={3} spacing={6}>
      <DropdownButton size="medium" name="Medium">
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton size="large" name="Large">
        {DROPDOWN_CONTENT}
      </DropdownButton>
    </Grid>
  </Grid>`,...b.parameters?.docs?.source},description:{story:`Для стилизации основной кнопки доступны ButtonProps`,...b.parameters?.docs?.description}}};try{b.displayName=`ButtonProps`,b.__docgenInfo={description:`Для стилизации основной кнопки доступны ButtonProps`,displayName:`ButtonProps`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DropdownButton/stories/ButtonProps.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var S,C;function w(){return(w=e((()=>{d(),l(),s(),S=a(),C=()=>(0,S.jsx)(c,{startIcon:(0,S.jsx)(u,{}),variant:`light`,name:`With icon`,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{disabledReason:`Заблокировано`,disabled:!0,onClick:()=>console.log(`v1`),children:`Профиль`}),(0,S.jsx)(o,{onClick:()=>console.log(`v3`),children:`Выход`})]})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const dropdownItems = <>
      <MenuItem disabledReason="Заблокировано" disabled onClick={() => console.log('v1')}>
        Профиль
      </MenuItem>
      <MenuItem onClick={() => console.log('v3')}>Выход</MenuItem>
    </>;
  return <DropdownButton startIcon={<DialogOutlineMd />} variant="light" name="With icon">
      {dropdownItems}
    </DropdownButton>;
}`,...C.parameters?.docs?.source}}}})))()}var T;function E(){return(E=e((()=>{h(),T={args:{children:p,name:`Действие`,variant:`contained`,color:`primary`,size:`large`,fullWidth:!1},parameters:{docs:{disable:!0}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: DROPDOWN_CONTENT,
    name: 'Действие',
    variant: 'contained',
    color: 'primary',
    size: 'large',
    fullWidth: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{d(),l(),s(),D=a(),O=()=>(0,D.jsx)(c,{startIcon:(0,D.jsx)(u,{}),variant:`light`,name:`With icon`,children:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(o,{note:`Перейти в профиль`,onClick:()=>console.log(`v1`),children:`Профиль`}),(0,D.jsx)(o,{onClick:()=>console.log(`v3`),children:`Выход`})]})}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const dropdownItems = <>
      <MenuItem note="Перейти в профиль" onClick={() => console.log('v1')}>
        Профиль
      </MenuItem>
      <MenuItem onClick={() => console.log('v3')}>Выход</MenuItem>
    </>;
  return <DropdownButton startIcon={<DialogOutlineMd />} variant="light" name="With icon">
      {dropdownItems}
    </DropdownButton>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j;function M(){return(M=e((()=>{s(),h(),A=a(),j=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{name:`Default`,variant:`light`,popoverProps:{anchorOrigin:{vertical:`center`,horizontal:`right`}},children:p}),(0,A.jsx)(c,{name:`Default`,variant:`light`,popoverProps:{anchorOrigin:{vertical:`center`,horizontal:`right`},transformOrigin:{vertical:100,horizontal:`right`}},children:p})]}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <>
      <DropdownButton name="Default" variant="light" popoverProps={{
      anchorOrigin: {
        vertical: 'center',
        horizontal: 'right'
      }
    }}>
        {DROPDOWN_CONTENT}
      </DropdownButton>
      <DropdownButton name="Default" variant="light" popoverProps={{
      anchorOrigin: {
        vertical: 'center',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 100,
        horizontal: 'right'
      }
    }}>
        {DROPDOWN_CONTENT}
      </DropdownButton>
    </>;
}`,...j.parameters?.docs?.source},description:{story:`Для управления параметрами popover доступны PopoverProps`,...j.parameters?.docs?.description}}};try{j.displayName=`PopoverProps`,j.__docgenInfo={description:`Для управления параметрами popover доступны PopoverProps`,displayName:`PopoverProps`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DropdownButton/stories/PopoverProps.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function F(){return(F=e((()=>{d(),s(),h(),N=a(),P=()=>(0,N.jsx)(c,{startIcon:(0,N.jsx)(u,{}),variant:`light`,name:`With icon`,children:p}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <DropdownButton startIcon={<DialogOutlineMd />} variant="light" name="With icon">
      {DROPDOWN_CONTENT}
    </DropdownButton>;
}`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{s(),v(),x(),w(),E(),k(),M(),F(),I={title:`Buttons/DropdownButton`,component:c,parameters:{docs:{description:{component:`DropdownButton - позволяет компактно разместить несколько вариантов действия в одном элементе.

В большинстве случаев в качестве такого элемента выступает кнопка или пункт меню. Вызывается по клику или наведению на элемент.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20165&p=f&t=7QJwjWUtbDm3304g-0)`}}}},L=[`Interaction`,`BasicUsage`,`StartIcon`,`Note`,`DisableReason`,`ButtonProps`,`PopoverProps`]})))()}R();export{_ as BasicUsage,b as ButtonProps,C as DisableReason,T as Interaction,O as Note,j as PopoverProps,P as StartIcon,L as __namedExportsOrder,I as default};