import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-DOMyrAPS.js";import{t as a}from"./DialogContentText-COTn73FL.js";import{a as o,r as s,t as c}from"./SideDialogContent-DYzkR_H9.js";import{t as l}from"./SideDialog-ChqpugVT.js";import{t as u}from"./SideDialogActions-BxS3KGst.js";import{t as d}from"./SideDialogContent-CvuoI30D.js";import{t as f}from"./SideDialogContentText-te-lbm-z.js";var p,m,h;function g(){return(g=e((()=>{p=i(),t(),l(),u(),d(),f(),m=r(),h=()=>{let[e,t]=(0,p.useState)(!1),r=()=>{t(!0)},i=()=>{t(!1)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{onClick:r,children:`SideDialog`}),(0,m.jsxs)(o,{open:e,onClose:i,title:`Заголовок`,children:[(0,m.jsx)(c,{children:(0,m.jsx)(a,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,m.jsxs)(s,{children:[(0,m.jsx)(n,{variant:`text`,size:`large`,onClick:i,children:`Отмена`}),(0,m.jsx)(n,{autoFocus:!0,size:`large`,onClick:i,children:`Готово`})]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleClickOpen}>SideDialog</Button>
      <SideDialog open={isOpen} onClose={handleClose} title="Заголовок">
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleClose}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>;
}`,...h.parameters?.docs?.source}}}})))()}var _;function v(){return(v=e((()=>{_={args:{children:`SideDialogContentText`},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'SideDialogContentText'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{f(),g(),v(),y={title:`Modals/SideDialog/SideDialogContentText`,component:a,parameters:{docs:{description:{component:`Для размещения текста внутри SideDialogContent используется SideDialogContentText

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-24341&t=b4rEJbJxi9wHkzTa-0)`}}}},b=[`Interaction`,`BasicUsage`]})))()}x();export{h as BasicUsage,_ as Interaction,b as __namedExportsOrder,y as default};