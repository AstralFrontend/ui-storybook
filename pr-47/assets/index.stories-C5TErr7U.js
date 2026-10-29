import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Q as t,Z as n,cn as r,ct as i,ln as a,lt as o,ya as s,za as c}from"./preview-BY-1Z8yT.js";import{t as l}from"./Dialog-BohnBysQ.js";import{n as u,o as d,s as f,t as p}from"./DialogContent-jLcn0x3m.js";import{t as m}from"./DialogContentText-Dc-t5fK9.js";import{t as h}from"./Dialog-DD13BD7E.js";import{t as g}from"./DialogContentText-CIIfUKjW.js";import{n as _,t as v}from"./DialogHeader-DnJvfD_i.js";var y,b,x;function S(){return(S=e((()=>{y=c(),r(),h(),d(),p(),g(),i(),n(),_(),b=s(),x=()=>{let[e,n]=(0,y.useState)(!1),[r,i]=(0,y.useState)(!1),s=()=>{n(!0)},c=()=>{n(!1)},d=()=>{i(!0)},p=()=>{i(!1)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(o,{container:!0,columns:2,spacing:2,children:[(0,b.jsx)(a,{onClick:s,children:`Dialog header left`}),(0,b.jsx)(a,{onClick:d,children:`Dialog header right`})]}),(0,b.jsxs)(l,{open:e,onClose:c,children:[(0,b.jsx)(v,{title:`Заголовок`,onClose:c,children:(0,b.jsx)(t,{variant:`light`,label:`Light Tag`,color:`primary`})}),(0,b.jsx)(u,{children:(0,b.jsx)(m,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,b.jsxs)(f,{children:[(0,b.jsx)(a,{variant:`text`,size:`large`,onClick:c,children:`Отмена`}),(0,b.jsx)(a,{autoFocus:!0,size:`large`,onClick:c,children:`Готово`})]})]}),(0,b.jsxs)(l,{open:r,onClose:p,children:[(0,b.jsx)(v,{title:`Заголовок`,onClose:p,justifyContent:`flex-end`,children:(0,b.jsx)(t,{variant:`contained`,label:`Light Tag`,color:`primary`})}),(0,b.jsx)(u,{children:(0,b.jsx)(m,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,b.jsxs)(f,{children:[(0,b.jsx)(a,{variant:`text`,size:`large`,onClick:p,children:`Отмена`}),(0,b.jsx)(a,{autoFocus:!0,size:`large`,onClick:p,children:`Готово`})]})]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpenHeaderLeft, setIsOpenHeaderLeft] = useState(false);
  const [isOpenHeaderRight, setIsOpenHeaderRight] = useState(false);
  const handleOpenHeaderLeft = () => {
    setIsOpenHeaderLeft(true);
  };
  const handleCloseHeaderLeft = () => {
    setIsOpenHeaderLeft(false);
  };
  const handleOpenHeaderRight = () => {
    setIsOpenHeaderRight(true);
  };
  const handleCloseHeaderRight = () => {
    setIsOpenHeaderRight(false);
  };
  return <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={handleOpenHeaderLeft}>Dialog header left</Button>
        <Button onClick={handleOpenHeaderRight}>Dialog header right</Button>
      </Grid>
      <Dialog open={isOpenHeaderLeft} onClose={handleCloseHeaderLeft}>
        <DialogHeader title="Заголовок" onClose={handleCloseHeaderLeft}>
          <Tag variant="light" label="Light Tag" color="primary" />
        </DialogHeader>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleCloseHeaderLeft}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleCloseHeaderLeft}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isOpenHeaderRight} onClose={handleCloseHeaderRight}>
        <DialogHeader title="Заголовок" onClose={handleCloseHeaderRight} justifyContent="flex-end">
          <Tag variant="contained" label="Light Tag" color="primary" />
        </DialogHeader>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleCloseHeaderRight}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleCloseHeaderRight}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...x.parameters?.docs?.source}}}})))()}var C;function w(){return(w=e((()=>{C={args:{title:`Заголовок диалога`},parameters:{docs:{disable:!0}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок диалога'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{_(),S(),w(),T={title:`Modals/Dialog/DialogHeader`,component:v,parameters:{docs:{description:{component:`В хедере диалогового окна могут добавляться дополнительные элементы, для этого используется DialogHeader. Они могут добавляться к заголовку или закрепляться по правому краю.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},E=[`Interaction`,`BasicUsage`]})))()}D();export{x as BasicUsage,C as Interaction,E as __namedExportsOrder,T as default};