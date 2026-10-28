import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-BabqIrZj.js";import{n as a,t as o}from"./ConfirmDialog-1BH-EP6U.js";import{r as s,t as c}from"./useToggle-Cc0hjdkp.js";var l,u,d;function f(){return(f=e((()=>{l=i(),t(),c(),a(),u=r(),d=()=>{let[e,t,r]=s(),[i,a]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(n,{variant:`contained`,onClick:t,children:`ConfirmDialog`}),(0,u.jsx)(o,{open:e,title:`Подверждение`,description:`Вы подтверждаете действие?`,onClose:r,actions:{confirm:{text:`Да`,onClick:()=>(a(!0),setTimeout(()=>{a(!1),r()},1e3)),loading:i},cancel:{text:`Нет`}}})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [isActive, handleOpen, handleClose] = useToggle();
  const [loading, setLoading] = useState(false);
  const handleConfirm = () => {
    setLoading(true);
    return setTimeout(() => {
      setLoading(false);
      handleClose();
    }, 1000);
  };
  return <div>
      <Button variant="contained" onClick={handleOpen}>
        ConfirmDialog
      </Button>
      <ConfirmDialog open={isActive} title="Подверждение" description="Вы подтверждаете действие?" onClose={handleClose} actions={{
      confirm: {
        text: 'Да',
        onClick: handleConfirm,
        loading
      },
      cancel: {
        text: 'Нет'
      }
    }} />
    </div>;
}`,...d.parameters?.docs?.source}}}})))()}var p;function m(){return(m=e((()=>{p={args:{open:!0,title:`Подверждение`,onClose:()=>{},actions:{confirm:{text:`Да`}}},parameters:{docs:{disable:!0}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Подверждение',
    onClose: () => {},
    actions: {
      confirm: {
        text: 'Да'
      }
    }
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...p.parameters?.docs?.source}}}})))()}var h,g;function _(){return(_=e((()=>{a(),f(),m(),h={title:`Modals/ConfirmDialog`,component:o,parameters:{docs:{description:{component:`Необходим для подтверждения действия пользователем.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-205836&t=b4rEJbJxi9wHkzTa-0)`}}}},g=[`Interaction`,`BasicUsage`]})))()}_();export{d as BasicUsage,p as Interaction,g as __namedExportsOrder,h as default};