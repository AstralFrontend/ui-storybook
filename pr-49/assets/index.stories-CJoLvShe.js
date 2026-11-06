import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Q as t,Z as n,cn as r,ct as i,dt as a,ft as o,ji as s,ln as c,lt as l,ya as u,yn as d,za as f}from"./preview-BhDTHc2X.js";import{n as p,t as m}from"./Dialog-Cs_lVgAW.js";import{n as h,o as g,s as _,t as v}from"./DialogContent-D5Rrl8U7.js";import{t as y}from"./DialogContentText-3Tgx79wB.js";import{t as b}from"./DialogContentText-b35y8MSd.js";import{t as ee}from"./DialogHeader-Dih0mKMF.js";import{t as te}from"./DialogHeader-CMe3xNgV.js";import{t as x}from"./DescriptionList-CkCoRcec.js";import{t as ne}from"./DescriptionList-BO_2qk22.js";var S,C,w;function T(){return(T=e((()=>{S=f(),r(),g(),v(),b(),p(),C=u(),w=()=>{let[e,t]=(0,S.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(c,{onClick:n,children:`Default dialog`}),(0,C.jsxs)(m,{open:e,onClose:r,title:`Заголовок`,children:[(0,C.jsx)(h,{children:(0,C.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,C.jsxs)(_,{children:[(0,C.jsx)(c,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,C.jsx)(c,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}}})))()}var E,D,O;function re(){return(re=e((()=>{E=f(),r(),g(),v(),b(),p(),D=u(),O=()=>{let[e,t]=(0,E.useState)(!1),n=()=>{t(!1)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{onClick:()=>t(!0),children:`Открыть документ`}),(0,D.jsxs)(m,{open:e,onClose:n,size:`xs`,width:`640px`,height:220,title:`Отправка документа`,children:[(0,D.jsx)(h,{children:(0,D.jsx)(y,{children:`Договор поставки № 1234 подготовлен к отправке. Проверьте реквизиты контрагента и подпишите документ электронной подписью, чтобы передать его получателю.`})}),(0,D.jsxs)(_,{children:[(0,D.jsx)(c,{variant:`text`,size:`large`,onClick:n,children:`Отмена`}),(0,D.jsx)(c,{size:`large`,onClick:n,children:`Подписать и отправить`})]})]})]})};try{O.displayName=`CustomDimensions`,O.__docgenInfo={description:`height и width задают размеры модального окна независимо от size.`,displayName:`CustomDimensions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/CustomDimensions.story.tsx`,methods:[],props:{},tags:{}}}catch{}O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={() => setIsOpen(true)}>Открыть документ</Button>
      <Dialog open={isOpen} onClose={handleClose} size="xs" width="640px" height={220} title="Отправка документа">
        <DialogContent>
          <DialogContentText>
            Договор поставки № 1234 подготовлен к отправке. Проверьте реквизиты
            контрагента и подпишите документ электронной подписью, чтобы
            передать его получателю.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleClose}>
            Отмена
          </Button>
          <Button size="large" onClick={handleClose}>
            Подписать и отправить
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...O.parameters?.docs?.source},description:{story:`height и width задают размеры модального окна независимо от size.`,...O.parameters?.docs?.description}}}})))()}var k,A,j;function M(){return(M=e((()=>{k=f(),r(),g(),v(),b(),te(),i(),n(),p(),A=u(),j=()=>{let[e,n]=(0,k.useState)(!1),[r,i]=(0,k.useState)(!1),a=()=>{n(!0)},o=()=>{n(!1)},s=()=>{i(!0)},u=()=>{i(!1)};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(l,{container:!0,columns:2,spacing:2,children:[(0,A.jsx)(c,{onClick:a,children:`Dialog header left`}),(0,A.jsx)(c,{onClick:s,children:`Dialog header right`})]}),(0,A.jsxs)(m,{open:e,onClose:o,children:[(0,A.jsx)(ee,{title:`Заголовок`,onClose:o,children:(0,A.jsx)(t,{variant:`light`,label:`Light Tag`,color:`primary`})}),(0,A.jsx)(h,{children:(0,A.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,A.jsxs)(_,{children:[(0,A.jsx)(c,{variant:`text`,size:`large`,onClick:o,children:`Отмена`}),(0,A.jsx)(c,{autoFocus:!0,size:`large`,onClick:o,children:`Готово`})]})]}),(0,A.jsxs)(m,{open:r,onClose:u,children:[(0,A.jsx)(ee,{title:`Заголовок`,onClose:u,justifyContent:`flex-end`,children:(0,A.jsx)(t,{variant:`contained`,label:`Light Tag`,color:`primary`})}),(0,A.jsx)(h,{children:(0,A.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,A.jsxs)(_,{children:[(0,A.jsx)(c,{variant:`text`,size:`large`,onClick:u,children:`Отмена`}),(0,A.jsx)(c,{autoFocus:!0,size:`large`,onClick:u,children:`Готово`})]})]})]})};try{j.displayName=`CustomHeader`,j.__docgenInfo={description:`[DialogHeader](/story/modals-dialog-dialogHeader--docs)`,displayName:`CustomHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/CustomHeader.story.tsx`,methods:[],props:{},tags:{}}}catch{}j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:`[DialogHeader](/story/modals-dialog-dialogHeader--docs)`,...j.parameters?.docs?.description}}}})))()}var N,P,F;function I(){return(I=e((()=>{N=f(),r(),g(),v(),b(),a(),p(),P=u(),F=()=>{let[e,t]=(0,N.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c,{onClick:n,children:`Custom title`}),(0,P.jsxs)(m,{open:e,onClose:r,title:(0,P.jsxs)(P.Fragment,{children:[`Заголовок`,(0,P.jsx)(o,{color:`grey`,colorIntensity:`500`,children:`| Подзаголовок`})]}),children:[(0,P.jsx)(h,{children:(0,P.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,P.jsxs)(_,{children:[(0,P.jsx)(c,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,P.jsx)(c,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleClickOpen}>Custom title</Button>
      <Dialog open={isOpen} onClose={handleClose} title={<>
            Заголовок
            <Typography color="grey" colorIntensity="500">
              | Подзаголовок
            </Typography>
          </>}>
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
}`,...F.parameters?.docs?.source}}}})))()}var L,R,z;function B(){return(B=e((()=>{L=f(),r(),g(),v(),b(),i(),p(),R=u(),z=()=>{let[e,t]=(0,L.useState)(!1),[n,r]=(0,L.useState)(!1),i=()=>t(!1),a=()=>r(!1);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(l,{container:!0,columns:1,spacing:2,children:[(0,R.jsx)(c,{onClick:()=>t(!0),children:`Шторка снизу (по умолчанию)`}),(0,R.jsx)(c,{onClick:()=>r(!0),children:`Модальное окно (disableMobileDrawer)`})]}),(0,R.jsxs)(m,{open:e,onClose:i,title:`Отправка документа`,size:`sm`,children:[(0,R.jsx)(h,{children:(0,R.jsx)(y,{children:`Договор поставки №1234 будет отправлен контрагенту ООО «Первый завод». На узком экране этот диалог показан шторкой снизу.`})}),(0,R.jsxs)(_,{children:[(0,R.jsx)(c,{variant:`light`,onClick:i,children:`Отмена`}),(0,R.jsx)(c,{onClick:i,children:`Отправить`})]})]}),(0,R.jsxs)(m,{open:n,onClose:a,title:`Отправка документа`,size:`sm`,disableMobileDrawer:!0,children:[(0,R.jsx)(h,{children:(0,R.jsx)(y,{children:`Договор поставки №1234 будет отправлен контрагенту ООО «Первый завод». На узком экране этот диалог остаётся по центру экрана.`})}),(0,R.jsxs)(_,{children:[(0,R.jsx)(c,{variant:`light`,onClick:a,children:`Отмена`}),(0,R.jsx)(c,{onClick:a,children:`Отправить`})]})]})]})};try{z.displayName=`DisableMobileDrawer`,z.__docgenInfo={description:"На ширине меньше `mobile` диалог по умолчанию сворачивается в\n[BottomDrawer](/story/modals-bottomdrawer--docs).\n`disableMobileDrawer` это отключает: диалог остаётся центрированным модальным окном и подстраивает ширину под экран.",displayName:`DisableMobileDrawer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/DisableMobileDrawer.story.tsx`,methods:[],props:{},tags:{}}}catch{}z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  const handleModalClose = () => setIsModalOpen(false);
  return <>
      <Grid container columns={1} spacing={2}>
        <Button onClick={() => setIsDrawerOpen(true)}>
          Шторка снизу (по умолчанию)
        </Button>
        <Button onClick={() => setIsModalOpen(true)}>
          Модальное окно (disableMobileDrawer)
        </Button>
      </Grid>

      <Dialog open={isDrawerOpen} onClose={handleDrawerClose} title="Отправка документа" size="sm">
        <DialogContent>
          <DialogContentText>
            Договор поставки №1234 будет отправлен контрагенту ООО «Первый
            завод». На узком экране этот диалог показан шторкой снизу.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="light" onClick={handleDrawerClose}>
            Отмена
          </Button>
          <Button onClick={handleDrawerClose}>Отправить</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isModalOpen} onClose={handleModalClose} title="Отправка документа" size="sm" disableMobileDrawer>
        <DialogContent>
          <DialogContentText>
            Договор поставки №1234 будет отправлен контрагенту ООО «Первый
            завод». На узком экране этот диалог остаётся по центру экрана.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="light" onClick={handleModalClose}>
            Отмена
          </Button>
          <Button onClick={handleModalClose}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...z.parameters?.docs?.source},description:{story:"На ширине меньше `mobile` диалог по умолчанию сворачивается в\n[BottomDrawer](/story/modals-bottomdrawer--docs).\n`disableMobileDrawer` это отключает: диалог остаётся центрированным модальным окном и подстраивает ширину под экран.",...z.parameters?.docs?.description}}}})))()}var V;function H(){return(H=e((()=>{V={args:{title:`Заголовок диалога`,open:!1},parameters:{docs:{disable:!0}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок диалога',
    open: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...V.parameters?.docs?.source}}}})))()}var U,W,G,K;function q(){return(q=e((()=>{U=f(),r(),ne(),g(),v(),i(),p(),W=u(),G=[{name:`Дата поступления`,value:`12.06.2024 в 11:11`},{name:`Тип заявки`,value:`Создание`},{name:`ID учетной записи`,value:`4d1f0594-bc22-4660-8e7d-83a024126ef3`},{name:`ID док-оборота`,value:`222a1343-rf12-6660-1e3q-88a911143yr1`},{name:`ИНН`,value:`77724528768`},{name:`КПП`,value:`772401001`},{name:`Конфигурация`,value:`Значение показателя`},{name:`Удостоверенный центр`,value:`УЦ «Калуга Астрал»`}],K=()=>{let[e,t]=(0,U.useState)(!1),[n,r]=(0,U.useState)(!1),[i,a]=(0,U.useState)(!1),[o,s]=(0,U.useState)(!1),[u,d]=(0,U.useState)(!1),f=()=>{t(!1)},p=()=>{r(!1)},g=()=>{a(!1)},v=()=>{s(!1)},y=()=>{d(!1)};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(l,{container:!0,columns:2,spacing:2,children:[(0,W.jsx)(c,{onClick:()=>t(e=>!e),children:`Dialog xs size`}),(0,W.jsx)(c,{onClick:()=>r(e=>!e),children:`Dialog sm size`}),(0,W.jsx)(c,{onClick:()=>a(e=>!e),children:`Dialog md size`}),(0,W.jsx)(c,{onClick:()=>s(e=>!e),children:`Dialog lg size`}),(0,W.jsx)(c,{onClick:()=>d(e=>!e),children:`Dialog xl size`})]}),(0,W.jsxs)(m,{open:e,onClose:f,title:`Заявка`,size:`xs`,children:[(0,W.jsx)(h,{children:(0,W.jsx)(x,{items:G,leader:!0})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(c,{onClick:f,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,W.jsx)(c,{onClick:f,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,W.jsxs)(m,{open:n,onClose:p,title:`Заявка`,size:`sm`,children:[(0,W.jsx)(h,{children:(0,W.jsx)(x,{items:G,leader:!0})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(c,{onClick:p,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,W.jsx)(c,{onClick:p,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,W.jsxs)(m,{open:i,onClose:g,title:`Заявка`,size:`md`,children:[(0,W.jsx)(h,{children:(0,W.jsx)(x,{items:G,leader:!0})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(c,{onClick:g,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,W.jsx)(c,{onClick:g,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,W.jsxs)(m,{open:o,onClose:v,title:`Заявка`,size:`lg`,children:[(0,W.jsx)(h,{children:(0,W.jsx)(x,{items:G,leader:!0})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(c,{onClick:v,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,W.jsx)(c,{onClick:v,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,W.jsxs)(m,{open:u,onClose:y,title:`Заявка`,size:`xl`,children:[(0,W.jsx)(h,{children:(0,W.jsx)(x,{items:G,leader:!0})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(c,{onClick:y,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,W.jsx)(c,{onClick:y,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [openXs, setOpenXs] = useState(false);
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);
  const [openXl, setOpenXl] = useState(false);
  const handleCloseXs = () => {
    setOpenXs(false);
  };
  const handleCloseSm = () => {
    setOpenSm(false);
  };
  const handleCloseMd = () => {
    setOpenMd(false);
  };
  const handleCloseLg = () => {
    setOpenLg(false);
  };
  const handleCloseXl = () => {
    setOpenXl(false);
  };
  return <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={() => setOpenXs(prevState => !prevState)}>
          Dialog xs size
        </Button>
        <Button onClick={() => setOpenSm(prevState => !prevState)}>
          Dialog sm size
        </Button>
        <Button onClick={() => setOpenMd(prevState => !prevState)}>
          Dialog md size
        </Button>
        <Button onClick={() => setOpenLg(prevState => !prevState)}>
          Dialog lg size
        </Button>
        <Button onClick={() => setOpenXl(prevState => !prevState)}>
          Dialog xl size
        </Button>
      </Grid>
      <Dialog open={openXs} onClose={handleCloseXs} title="Заявка" size="xs">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseXs} size="large" variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseXs} size="large" variant="light" color="success">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openSm} onClose={handleCloseSm} title="Заявка" size="sm">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSm} size="large" variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseSm} size="large" variant="light" color="success">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openMd} onClose={handleCloseMd} title="Заявка" size="md">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMd} size="large" variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseMd} size="large" variant="light" color="success">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openLg} onClose={handleCloseLg} title="Заявка" size="lg">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLg} size="large" variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseLg} size="large" variant="light" color="success">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openXl} onClose={handleCloseXl} title="Заявка" size="xl">
        <DialogContent>
          <DescriptionList items={FAKE_ITEMS} leader />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseXl} size="large" variant="light" color="error">
            Отклонить
          </Button>
          <Button onClick={handleCloseXl} size="large" variant="light" color="success">
            Принять
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...K.parameters?.docs?.source}}}})))()}var J,Y,X;function Z(){return(Z=e((()=>{J=f(),r(),g(),v(),b(),i(),p(),Y=u(),X=()=>{let[e,t]=(0,J.useState)(!1),[n,r]=(0,J.useState)(!1),i=()=>{t(!0)},a=()=>{t(!1)},o=()=>{r(!0)},s=()=>{r(!1)};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(l,{container:!0,columns:2,spacing:2,children:[(0,Y.jsx)(c,{onClick:i,children:`Dialog actions`}),(0,Y.jsx)(c,{onClick:o,children:`Dialog more actions`})]}),(0,Y.jsxs)(m,{open:e,onClose:a,title:`Заголовок`,children:[(0,Y.jsx)(h,{children:(0,Y.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,Y.jsxs)(_,{children:[(0,Y.jsx)(c,{variant:`text`,size:`large`,onClick:a,children:`Отмена`}),(0,Y.jsx)(c,{autoFocus:!0,size:`large`,onClick:a,children:`Готово`})]})]}),(0,Y.jsxs)(m,{open:n,onClose:s,title:`Заголовок`,children:[(0,Y.jsx)(h,{children:(0,Y.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,Y.jsxs)(_,{children:[(0,Y.jsx)(c,{variant:`text`,size:`large`,onClick:s,children:`Вернуться позже`}),(0,Y.jsx)(c,{variant:`text`,size:`large`,onClick:s,children:`Отмена`}),(0,Y.jsx)(c,{autoFocus:!0,onClick:s,children:`Готово`})]})]})]})};try{X.displayName=`WithDialogActions`,X.__docgenInfo={description:`[DialogActions](/story/modals-dialog--dialog-actions)`,displayName:`WithDialogActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/WithDialogActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
        <Button onClick={handleOpenDefault}>Dialog actions</Button>
        <Button onClick={handleOpenMoreActions}>Dialog more actions</Button>
      </Grid>
      <Dialog open={isOpenDefault} onClose={handleCloseDefault} title="Заголовок">
        <DialogContent>
          <DialogContentText>
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleCloseDefault}>
            Отмена
          </Button>
          <Button autoFocus size="large" onClick={handleCloseDefault}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isOpenMoreActions} onClose={handleCloseMoreActions} title="Заголовок">
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="large" onClick={handleCloseMoreActions}>
            Вернуться позже
          </Button>
          <Button variant="text" size="large" onClick={handleCloseMoreActions}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleCloseMoreActions}>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </>;
}`,...X.parameters?.docs?.source},description:{story:`[DialogActions](/story/modals-dialog--dialog-actions)`,...X.parameters?.docs?.description}}}})))()}var ie,Q,$;function ae(){return(ae=e((()=>{ie=f(),r(),g(),v(),b(),d(),p(),Q=u(),$=()=>{let e=s.div`
    margin-left: auto;
  `,[t,n]=(0,ie.useState)(!1),r=()=>{n(!0)},i=()=>{n(!1)};return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(c,{onClick:r,children:`Dialog с headerContent`}),(0,Q.jsxs)(m,{open:t,onClose:i,title:`Заголовок`,headerContent:(0,Q.jsx)(e,{children:(0,Q.jsx)(c,{variant:`text`,onClick:()=>{console.log(`Сбросить`)},size:`medium`,disabled:!1,children:`Сбросить`})}),children:[(0,Q.jsx)(h,{children:(0,Q.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,Q.jsxs)(_,{children:[(0,Q.jsx)(c,{variant:`text`,size:`large`,onClick:i,children:`Отмена`}),(0,Q.jsx)(c,{autoFocus:!0,size:`large`,onClick:i,children:`Готово`})]})]})]})};try{$.displayName=`WithHeaderContent`,$.__docgenInfo={description:`Пример использования Dialog с дополнительным контентом в хедере через prop headerContent`,displayName:`WithHeaderContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/WithHeaderContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const ButtonWrapper = styled.div\`
    margin-left: auto;
  \`;
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleReset = () => {
    // Пример обработчика для кнопки в headerContent
    console.log('Сбросить');
  };
  const headerContent = <ButtonWrapper>
      <Button variant="text" onClick={handleReset} size="medium" disabled={false}>
        Сбросить
      </Button>
    </ButtonWrapper>;
  return <>
      <Button onClick={handleClickOpen}>Dialog с headerContent</Button>
      <Dialog open={isOpen} onClose={handleClose} title="Заголовок" headerContent={headerContent}>
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
}`,...$.parameters?.docs?.source},description:{story:`Пример использования Dialog с дополнительным контентом в хедере через prop headerContent`,...$.parameters?.docs?.description}}}})))()}var oe,se;function ce(){return(ce=e((()=>{p(),T(),re(),M(),I(),B(),H(),q(),Z(),ae(),oe={title:`Modals/Dialog`,component:m,parameters:{mcp:{aliases:[`modal`,`popup`]},docs:{description:{component:`Когда требуется, чтобы пользователи взаимодействовали с приложением, но без перехода на новую страницу и прерывания рабочего процесса пользователя, нужно использовать Dialog.
Может содержать:
 - [DialogHeader](/story/modals-dialog-dialogHeader--docs)
 - [DialogActions](/story/modals-dialog-dialogActions--docs)
 - [DialogContent](/story/modals-dialog-dialogContent--docs)
 - [DialogContentText](/story/modals-dialog-dialogContentText--docs)
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},se=[`Interaction`,`BasicUsage`,`CustomTitle`,`CustomHeader`,`CustomDimensions`,`WithDialogActions`,`Size`,`WithHeaderContent`,`DisableMobileDrawer`]})))()}ce();export{w as BasicUsage,O as CustomDimensions,j as CustomHeader,F as CustomTitle,z as DisableMobileDrawer,V as Interaction,K as Size,X as WithDialogActions,$ as WithHeaderContent,se as __namedExportsOrder,oe as default};