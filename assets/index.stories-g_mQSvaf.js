import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ln as r,xa as i}from"./preview-CbDtIhIo.js";import{t as a}from"./DialogContentText-CnC2QRoe.js";import{a as o,n as s,r as c,t as l}from"./SideDialogContent-wU-8jfkb.js";import{t as u}from"./SideDialog-yP-LNueL.js";import{t as d}from"./SideDialogActions-DRIBaJmn.js";import{t as f}from"./SideDialogContentText-BC-IDfnP.js";var p,m,h;function g(){return(g=e((()=>{p=t(),n(),u(),d(),f(),s(),m=i(),h=()=>{let[e,t]=(0,p.useState)(!1),n=()=>{t(!0)},i=()=>{t(!1)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{onClick:n,children:`SideDialog`}),(0,m.jsxs)(o,{open:e,onClose:i,title:`Заголовок`,children:[(0,m.jsx)(l,{children:(0,m.jsx)(a,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,m.jsxs)(c,{children:[(0,m.jsx)(r,{variant:`text`,size:`large`,onClick:i,children:`Отмена`}),(0,m.jsx)(r,{autoFocus:!0,size:`large`,onClick:i,children:`Готово`})]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}}})))()}var _;function v(){return(v=e((()=>{_={args:{children:`SideDialogContent`},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'SideDialogContent'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{s(),g(),v(),y={title:`Modals/SideDialog/SideDialogContent`,component:l,parameters:{docs:{description:{component:`Для размещения контента внутри SideDialog используется SideDialogContent

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-24341&t=b4rEJbJxi9wHkzTa-0)`}}}},b=[`Interaction`,`BasicUsage`]})))()}x();export{h as BasicUsage,_ as Interaction,b as __namedExportsOrder,y as default};