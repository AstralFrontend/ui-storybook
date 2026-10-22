import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{it as t,rt as n,xa as r}from"./preview-BexmKZ07.js";import{n as i,t as a}from"./ConfirmAction-BLdD7vst.js";import{n as o,t as s}from"./BinOutlineMd-D4LbspHO.js";import{a as c,l}from"./NotificationStackContainer-CHg0dSrS.js";import{t as u}from"./Notification-B0RLjq97.js";var d,f,p;function m(){return(m=e((()=>{u(),d=r(),f=`confirm-action-story`,p=({children:e})=>(0,d.jsxs)(d.Fragment,{children:[e,(0,d.jsx)(l,{containerId:f})]});try{p.displayName=`StoryWrapper`,p.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ConfirmAction/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function h(){return(h=e((()=>{m()})))()}var g,_;function v(){return(v=e((()=>{s(),n(),u(),i(),h(),g=r(),_=()=>(0,g.jsx)(a,{text:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},popoverProps:{title:`Удаление черновика`},actionComponent:e=>(0,g.jsx)(t,{variant:`light`,...e,children:(0,g.jsx)(o,{})}),onConfirm:()=>{c.success(`Черновик удален`,{containerId:f})}}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const deleteDraft = () => {
    notify.success('Черновик удален', {
      containerId: CONFIRM_ACTION_CONTAINER_ID
    });
  };
  return <ConfirmAction text="Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?" confirmButtonProps={{
    text: 'Да, удалить',
    isAccented: true
  }} popoverProps={{
    title: 'Удаление черновика'
  }} actionComponent={props => <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>} onConfirm={deleteDraft} />;
}`,..._.parameters?.docs?.source},description:{story:`При осуществлении важных действий, например при удалении, можно добавить акцент кнопке подтверждения`,..._.parameters?.docs?.description}}};try{_.displayName=`AccentedConfirmButton`,_.__docgenInfo={description:`При осуществлении важных действий, например при удалении, можно добавить акцент кнопке подтверждения`,displayName:`AccentedConfirmButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ConfirmAction/stories/AccentedConfirmButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var y,b;function x(){return(x=e((()=>{s(),n(),u(),i(),h(),y=r(),b=()=>(0,y.jsx)(a,{popoverProps:{title:`Удаление документа`},actionComponent:e=>(0,y.jsx)(t,{variant:`light`,...e,children:(0,y.jsx)(o,{})}),onConfirm:()=>{c.success(`Документ удален`,{containerId:f})}}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const deleteDocument = () => {
    notify.success('Документ удален', {
      containerId: CONFIRM_ACTION_CONTAINER_ID
    });
  };
  return <ConfirmAction popoverProps={{
    title: 'Удаление документа'
  }} actionComponent={props => <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>} onConfirm={deleteDocument} />;
}`,...b.parameters?.docs?.source}}}})))()}var S,C;function w(){return(w=e((()=>{s(),n(),S=r(),C={args:{text:`Уверены, что хотите отменить запрос на подписание?`,confirmButtonProps:{text:`Да, отменить запрос`},popoverProps:{title:`Отмена запроса на подписание`},actionComponent:e=>(0,S.jsx)(t,{variant:`light`,...e,children:(0,S.jsx)(o,{})}),onConfirm:()=>{}},parameters:{docs:{disable:!0}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Уверены, что хотите отменить запрос на подписание?',
    confirmButtonProps: {
      text: 'Да, отменить запрос'
    },
    popoverProps: {
      title: 'Отмена запроса на подписание'
    },
    actionComponent: props => <IconButton variant="light" {...props}>
        <BinOutlineMd />
      </IconButton>,
    onConfirm: () => {}
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{s(),n(),u(),i(),h(),T=r(),E=()=>(0,T.jsx)(a,{actionComponent:e=>(0,T.jsx)(t,{variant:`light`,...e,children:(0,T.jsx)(o,{})}),popoverProps:{title:`Удаление документа`,anchorOrigin:{vertical:`bottom`,horizontal:`center`},transformOrigin:{vertical:`top`,horizontal:`center`}},onConfirm:()=>{c.success(`Документ удален`,{containerId:f})}}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const deleteDocument = () => {
    notify.success('Документ удален', {
      containerId: CONFIRM_ACTION_CONTAINER_ID
    });
  };
  return <ConfirmAction actionComponent={props => <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>} popoverProps={{
    title: 'Удаление документа',
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }} onConfirm={deleteDocument} />;
}`,...E.parameters?.docs?.source},description:{story:"Через `popoverProps` можно настроить позиционирование всплывающего окна",...E.parameters?.docs?.description}}};try{E.displayName=`WithPopoverProps`,E.__docgenInfo={description:"Через `popoverProps` можно настроить позиционирование всплывающего окна",displayName:`WithPopoverProps`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ConfirmAction/stories/WithPopoverProps.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{s(),n(),u(),i(),h(),O=r(),k=()=>(0,O.jsx)(a,{text:`Уверены, что хотите отменить запрос на подписание?`,confirmButtonProps:{text:`Да, отменить запрос`},popoverProps:{title:`Отмена запроса на подписание`},actionComponent:e=>(0,O.jsx)(t,{variant:`light`,...e,children:(0,O.jsx)(o,{})}),onConfirm:()=>{c.success(`Запрос на подписание отменен`,{containerId:f})}}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const cancelSigningRequest = () => {
    notify.success('Запрос на подписание отменен', {
      containerId: CONFIRM_ACTION_CONTAINER_ID
    });
  };
  return <ConfirmAction text="Уверены, что хотите отменить запрос на подписание?" confirmButtonProps={{
    text: 'Да, отменить запрос'
  }} popoverProps={{
    title: 'Отмена запроса на подписание'
  }} actionComponent={props => <IconButton variant="light" {...props}>
          <BinOutlineMd />
        </IconButton>} onConfirm={cancelSigningRequest} />;
}`,...k.parameters?.docs?.source},description:{story:"Пропс `text` позволяет добавить поясняющий текст",...k.parameters?.docs?.description}}};try{k.displayName=`WithText`,k.__docgenInfo={description:"Пропс `text` позволяет добавить поясняющий текст",displayName:`WithText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ConfirmAction/stories/WithText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{i(),v(),x(),h(),w(),D(),A(),j=r(),M={title:`Modals/ConfirmAction`,component:a,decorators:[(e,t)=>(0,j.jsx)(p,{children:(0,j.jsx)(e,{...t})})],parameters:{docs:{description:{component:`Используется для подтверждения действия пользователя.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=434-21744)`}}}},N=[`BasicUsage`,`AccentedConfirmButton`,`Interaction`,`WithPopoverProps`,`WithText`]})))()}P();export{_ as AccentedConfirmButton,b as BasicUsage,C as Interaction,E as WithPopoverProps,k as WithText,N as __namedExportsOrder,M as default};