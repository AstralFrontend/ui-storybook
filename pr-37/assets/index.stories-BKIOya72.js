import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Va as n,Z as r,cn as i,ct as a,it as o,ln as s,lt as c,rt as l,xa as u}from"./preview-BJt2oHan.js";import{t as d}from"./Divider-DPKjfRdU.js";import{t as f}from"./DialogContentText-CnLzIb6s.js";import{t as p}from"./Divider-B57a88Nu.js";import{a as m,r as h,t as g}from"./SideDialogContent-Gv3_EL5K.js";import{n as _,t as v}from"./SideDialogHeader-COEYLQur.js";import{n as y,t as b}from"./SettingsOutlineMd-BL2OID70.js";import{t as x}from"./SideDialog-DcGAZ7IR.js";import{t as S}from"./SideDialogActions-D_AhFt_J.js";import{t as C}from"./SideDialogContent-B4-YJXlm.js";import{t as w}from"./SideDialogContentText-CFQ7-dan.js";var T,E,D;function O(){return(O=e((()=>{T=n(),b(),i(),p(),a(),l(),x(),S(),C(),w(),r(),_(),E=u(),D=()=>{let[e,n]=(0,T.useState)(!1),[r,i]=(0,T.useState)(!1),a=()=>{n(!0)},l=()=>{n(!1)},u=()=>{i(!0)},p=()=>{i(!1)};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(c,{container:!0,columns:2,spacing:2,children:[(0,E.jsx)(s,{onClick:a,children:`SideDialog header left`}),(0,E.jsx)(s,{onClick:u,children:`SideDialog header right`})]}),(0,E.jsxs)(m,{open:r,onClose:p,children:[(0,E.jsx)(v,{title:`Заголовок`,onClose:p,justifyContent:`flex-start`,children:(0,E.jsx)(t,{variant:`light`,label:`Информация`,color:`primary`})}),(0,E.jsx)(g,{children:(0,E.jsx)(f,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto.`})}),(0,E.jsxs)(h,{children:[(0,E.jsx)(s,{variant:`text`,size:`large`,onClick:p,children:`Отмена`}),(0,E.jsx)(s,{onClick:p,size:`large`,children:`Готово`})]})]}),(0,E.jsxs)(m,{open:e,onClose:l,children:[(0,E.jsxs)(v,{title:`Заголовок`,onClose:l,justifyContent:`flex-end`,children:[(0,E.jsx)(t,{variant:`light`,label:`Важное`,color:`error`}),(0,E.jsx)(o,{variant:`text`,children:(0,E.jsx)(y,{})}),(0,E.jsx)(d,{orientation:`vertical`})]}),(0,E.jsx)(g,{children:(0,E.jsx)(f,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto.`})}),(0,E.jsxs)(h,{children:[(0,E.jsx)(s,{variant:`text`,size:`large`,onClick:l,children:`Отмена`}),(0,E.jsx)(s,{onClick:l,size:`large`,children:`Готово`})]})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
        <Button onClick={handleOpenHeaderLeft}>SideDialog header left</Button>
        <Button onClick={handleOpenHeaderRight}>SideDialog header right</Button>
      </Grid>
      <SideDialog open={isOpenHeaderRight} onClose={handleCloseHeaderRight}>
        <SideDialogHeader title="Заголовок" onClose={handleCloseHeaderRight} justifyContent="flex-start">
          <Tag variant="light" label="Информация" color="primary" />
        </SideDialogHeader>
        <SideDialogContent>
          <SideDialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            laboriosam doloremque aut nobis quam asperiores eveniet libero
            aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem
            veniam laudantium consequuntur architecto.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleCloseHeaderRight}>
            Отмена
          </Button>
          <Button onClick={handleCloseHeaderRight} size="large">
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog open={isOpenHeaderLeft} onClose={handleCloseHeaderLeft}>
        <SideDialogHeader title="Заголовок" onClose={handleCloseHeaderLeft} justifyContent="flex-end">
          <Tag variant="light" label="Важное" color="error" />
          <IconButton variant="text">
            <SettingsOutlineMd />
          </IconButton>
          <Divider orientation="vertical" />
        </SideDialogHeader>
        <SideDialogContent>
          <SideDialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            laboriosam doloremque aut nobis quam asperiores eveniet libero
            aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem
            veniam laudantium consequuntur architecto.
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleCloseHeaderLeft}>
            Отмена
          </Button>
          <Button onClick={handleCloseHeaderLeft} size="large">
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>;
}`,...D.parameters?.docs?.source},description:{story:`Дополнительные элементы могут добавляться к заголовку или закрепляться по правому краю`,...D.parameters?.docs?.description}}};try{D.displayName=`BasicUsage`,D.__docgenInfo={description:`Дополнительные элементы могут добавляться к заголовку или закрепляться по правому краю`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SideDialogHeader/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k;function A(){return(A=e((()=>{k={args:{title:`Заголовок`,disableSpacing:!1,justifyContent:`flex-start`,onClose:()=>{}},parameters:{docs:{disable:!0}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок',
    disableSpacing: false,
    justifyContent: 'flex-start',
    onClose: () => {}
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...k.parameters?.docs?.source}}}})))()}var j,M;function N(){return(N=e((()=>{_(),O(),A(),j={title:`Modals/SideDialog/SideDialogHeader`,component:v,parameters:{docs:{description:{component:`SideDialogHeader предназначен для размещения дополнительных элементов в хэдере SideDialog

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},M=[`Interaction`,`BasicUsage`]})))()}N();export{D as BasicUsage,k as Interaction,M as __namedExportsOrder,j as default};