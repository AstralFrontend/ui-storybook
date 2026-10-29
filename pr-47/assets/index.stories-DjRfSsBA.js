import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-BY-1Z8yT.js";import{t as a}from"./Dialog-BohnBysQ.js";import{n as o,o as s,s as c,t as l}from"./DialogContent-jLcn0x3m.js";import{n as u,t as d}from"./DialogContentText-Dc-t5fK9.js";import{t as f}from"./Dialog-DD13BD7E.js";var p,m,h;function g(){return(g=e((()=>{p=i(),t(),f(),s(),l(),u(),m=r(),h=()=>{let[e,t]=(0,p.useState)(!1),r=()=>{t(!0)},i=()=>{t(!1)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{onClick:r,children:`Default dialog`}),(0,m.jsxs)(a,{open:e,onClose:i,title:`Заголовок`,children:[(0,m.jsx)(o,{children:(0,m.jsx)(d,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,m.jsxs)(c,{children:[(0,m.jsx)(n,{variant:`text`,size:`large`,onClick:i,children:`Отмена`}),(0,m.jsx)(n,{autoFocus:!0,size:`large`,onClick:i,children:`Готово`})]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleClickOpen}>Default dialog</Button>
      <Dialog open={isOpen} onClose={handleClose} title="Заголовок">
        <DialogContent>
          <DialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleClose}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...h.parameters?.docs?.source}}}})))()}var _;function v(){return(v=e((()=>{_={args:{children:`DialogContentText`},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'DialogContentText'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{u(),g(),v(),y={title:`Modals/Dialog/DialogContentText`,component:d,parameters:{docs:{description:{component:`Для размещения текста внутри DialogContent используется DialogContentText

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},b=[`Interaction`,`BasicUsage`]})))()}x();export{h as BasicUsage,_ as Interaction,b as __namedExportsOrder,y as default};