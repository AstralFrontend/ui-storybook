import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ln as i,lt as a,xa as o}from"./preview-NvIN-gdT.js";import{t as s}from"./DialogContentText-BSTRczQg.js";import{a as c,i as l,r as u,t as d}from"./SideDialogContent-Cihw7fkR.js";import{t as f}from"./SideDialog-DTbg3xaH.js";import{t as p}from"./SideDialogContent-DvzMq2yU.js";import{t as m}from"./SideDialogContentText-D1XwvciT.js";var h,g,_;function v(){return(v=e((()=>{h=t(),n(),r(),f(),p(),m(),l(),g=o(),_=()=>{let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(!1),o=()=>{t(!0)},l=()=>{t(!1)},f=()=>{r(!0)},p=()=>{r(!1)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(a,{container:!0,columns:2,spacing:2,children:[(0,g.jsx)(i,{onClick:o,children:`SideDialog actions`}),(0,g.jsx)(i,{onClick:f,children:`SideDialog more actions`})]}),(0,g.jsxs)(c,{open:e,onClose:l,title:`Заголовок`,children:[(0,g.jsx)(d,{children:(0,g.jsx)(s,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,g.jsxs)(u,{children:[(0,g.jsx)(i,{variant:`text`,size:`large`,onClick:l,children:`Отмена`}),(0,g.jsx)(i,{autoFocus:!0,size:`large`,onClick:l,children:`Готово`})]})]}),(0,g.jsxs)(c,{open:n,onClose:p,title:`Заголовок`,children:[(0,g.jsx)(d,{children:(0,g.jsx)(s,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,g.jsxs)(u,{children:[(0,g.jsx)(i,{variant:`text`,size:`large`,onClick:p,children:`Вернуться позже`}),(0,g.jsx)(i,{variant:`text`,size:`large`,onClick:p,children:`Отмена`}),(0,g.jsx)(i,{autoFocus:!0,size:`large`,onClick:p,children:`Готово`})]})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isOpenDefault, setIsOpenDefault] = useState(false);
  const [isOpenMoreActions, setIsOpenMoreActions] = useState(false);
  const handleOpenDefault = () => {
    setIsOpenDefault(true);
  };
  const handleCloseDefault = () => {
    setIsOpenDefault(false);
  };
  const handleOpenMoreActions = () => {
    setIsOpenMoreActions(true);
  };
  const handleCloseMoreActions = () => {
    setIsOpenMoreActions(false);
  };
  return <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={handleOpenDefault}>SideDialog actions</Button>
        <Button onClick={handleOpenMoreActions}>SideDialog more actions</Button>
      </Grid>
      <SideDialog open={isOpenDefault} onClose={handleCloseDefault} title="Заголовок">
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleCloseDefault}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleCloseDefault}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog open={isOpenMoreActions} onClose={handleCloseMoreActions} title="Заголовок">
        <SideDialogContent>
          <SideDialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleCloseMoreActions}>
            Вернуться позже
          </Button>
          <Button variant="text" size="large" onClick={handleCloseMoreActions}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleCloseMoreActions}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>;
}`,..._.parameters?.docs?.source},description:{story:`В футере  могут добавляться дополнительные элементы.`,..._.parameters?.docs?.description}}};try{_.displayName=`BasicUsage`,_.__docgenInfo={description:`В футере  могут добавляться дополнительные элементы.`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SideDialogActions/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var y,b;function x(){return(x=e((()=>{n(),y=o(),b={args:{children:(0,y.jsx)(i,{children:`Готово`})},parameters:{docs:{disable:!0}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Button>Готово</Button>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}}})))()}var S,C;function w(){return(w=e((()=>{l(),v(),x(),S={title:`Modals/SideDialog/SideDialogActions`,component:u,parameters:{docs:{description:{component:`SideDialogActions используется для передачи в футер SideDialog компонентов для управления окном.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-24341&t=b4rEJbJxi9wHkzTa-0)`}}}},C=[`Interaction`,`BasicUsage`]})))()}w();export{_ as BasicUsage,b as Interaction,C as __namedExportsOrder,S as default};