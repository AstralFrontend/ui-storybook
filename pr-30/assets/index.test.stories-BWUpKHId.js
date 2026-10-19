import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,cr as n,ji as r,ln as i,lr as a,ya as o,yn as s,za as c}from"./preview-IOjL1aMA.js";import{n as l,t as u}from"./Dialog--wydJpBv.js";import{n as d,o as f,s as p,t as m}from"./DialogContent-D5Chl5on.js";import{t as h}from"./DialogContentText-DEmSbrxt.js";import{t as g}from"./DialogContentText-C-Ya-SJR.js";var _,v,y,b;function x(){return(x=e((()=>{n(),_=c(),t(),f(),m(),g(),s(),l(),v=o(),y=r(u)`
    .${a.root} {
        max-height: 250px;
    }
`,b=()=>{let[e,t]=(0,_.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{onClick:n,children:`Default dialog`}),(0,v.jsxs)(y,{open:e,onClose:r,title:`Заголовок`,children:[(0,v.jsx)(d,{children:(0,v.jsx)(h,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения. Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения. Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,v.jsxs)(p,{children:[(0,v.jsx)(i,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,v.jsx)(i,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleClickOpen}>Default dialog</Button>
      <StyledDialog open={isOpen} onClose={handleClose} title="Заголовок">
        <DialogContent>
          <DialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения. Заглушка примера текста
            страницы, который несет очень важный смысл для пользователя и
            предлагает ему варианты выбора действий с контентом и в рамках
            работы приложения. Заглушка примера текста страницы, который несет
            очень важный смысл для пользователя и предлагает ему варианты выбора
            действий с контентом и в рамках работы приложения.
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
      </StyledDialog>
    </>;
}`,...b.parameters?.docs?.source}}}})))()}var S,C,w;function T(){return(T=e((()=>{S=c(),t(),f(),m(),g(),l(),C=o(),w=()=>{let[e,t]=(0,S.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{onClick:n,children:`Default dialog`}),(0,C.jsxs)(u,{open:e,onClose:r,children:[(0,C.jsx)(d,{children:(0,C.jsx)(h,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,C.jsxs)(p,{children:[(0,C.jsx)(i,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,C.jsx)(i,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleClickOpen}>Default dialog</Button>
      <Dialog open={isOpen} onClose={handleClose}>
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
}`,...w.parameters?.docs?.source}}}})))()}var E,D;function O(){return(O=e((()=>{l(),x(),T(),E={title:`Modals/Dialog/Tests`,component:u},D=[`WithDialogScroll`,`WithoutDialogHeader`]})))()}O();export{b as WithDialogScroll,w as WithoutDialogHeader,D as __namedExportsOrder,E as default};