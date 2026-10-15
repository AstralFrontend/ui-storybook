import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Va as n,Z as r,cn as i,ct as a,dt as o,ft as s,ji as c,ln as l,lt as u,xa as d,yn as f}from"./preview-De2xeSj1.js";import{n as p,t as m}from"./Dialog-cfPrkYON.js";import{n as h,o as g,s as _,t as v}from"./DialogContent-DirwYpIr.js";import{t as y}from"./DialogContentText-CzDV9juD.js";import{t as b}from"./DialogContentText-7urTyiyr.js";import{t as x}from"./DialogHeader-BTopR3NW.js";import{t as ee}from"./DialogHeader-B6t7J8Hd.js";import{t as S}from"./DescriptionList-Fu4f1b17.js";import{t as te}from"./DescriptionList-B8SK5Zu_.js";var C,w,T;function E(){return(E=e((()=>{C=n(),i(),g(),v(),b(),p(),w=d(),T=()=>{let[e,t]=(0,C.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(l,{onClick:n,children:`Default dialog`}),(0,w.jsxs)(m,{open:e,onClose:r,title:`Заголовок`,children:[(0,w.jsx)(h,{children:(0,w.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,w.jsxs)(_,{children:[(0,w.jsx)(l,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,w.jsx)(l,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k;function A(){return(A=e((()=>{D=n(),i(),g(),v(),b(),ee(),a(),r(),p(),O=d(),k=()=>{let[e,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)(!1),a=()=>{n(!0)},o=()=>{n(!1)},s=()=>{i(!0)},c=()=>{i(!1)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,O.jsx)(l,{onClick:a,children:`Dialog header left`}),(0,O.jsx)(l,{onClick:s,children:`Dialog header right`})]}),(0,O.jsxs)(m,{open:e,onClose:o,children:[(0,O.jsx)(x,{title:`Заголовок`,onClose:o,children:(0,O.jsx)(t,{variant:`light`,label:`Light Tag`,color:`primary`})}),(0,O.jsx)(h,{children:(0,O.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,O.jsxs)(_,{children:[(0,O.jsx)(l,{variant:`text`,size:`large`,onClick:o,children:`Отмена`}),(0,O.jsx)(l,{autoFocus:!0,size:`large`,onClick:o,children:`Готово`})]})]}),(0,O.jsxs)(m,{open:r,onClose:c,children:[(0,O.jsx)(x,{title:`Заголовок`,onClose:c,justifyContent:`flex-end`,children:(0,O.jsx)(t,{variant:`contained`,label:`Light Tag`,color:`primary`})}),(0,O.jsx)(h,{children:(0,O.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,O.jsxs)(_,{children:[(0,O.jsx)(l,{variant:`text`,size:`large`,onClick:c,children:`Отмена`}),(0,O.jsx)(l,{autoFocus:!0,size:`large`,onClick:c,children:`Готово`})]})]})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source},description:{story:`[DialogHeader](/story/modals-dialog-dialogHeader--docs)`,...k.parameters?.docs?.description}}};try{k.displayName=`CustomHeader`,k.__docgenInfo={description:`[DialogHeader](/story/modals-dialog-dialogHeader--docs)`,displayName:`CustomHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/CustomHeader.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{j=n(),i(),g(),v(),b(),o(),p(),M=d(),N=()=>{let[e,t]=(0,j.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l,{onClick:n,children:`Custom title`}),(0,M.jsxs)(m,{open:e,onClose:r,title:(0,M.jsxs)(M.Fragment,{children:[`Заголовок`,(0,M.jsx)(s,{color:`grey`,colorIntensity:`500`,children:`| Подзаголовок`})]}),children:[(0,M.jsx)(h,{children:(0,M.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,M.jsxs)(_,{children:[(0,M.jsx)(l,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,M.jsx)(l,{autoFocus:!0,size:`large`,onClick:r,children:`Готово`})]})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}}})))()}var F,I,L;function R(){return(R=e((()=>{F=n(),i(),g(),v(),b(),a(),p(),I=d(),L=()=>{let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(!1),i=()=>t(!1),a=()=>r(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(u,{container:!0,columns:1,spacing:2,children:[(0,I.jsx)(l,{onClick:()=>t(!0),children:`Шторка снизу (по умолчанию)`}),(0,I.jsx)(l,{onClick:()=>r(!0),children:`Модальное окно (disableMobileDrawer)`})]}),(0,I.jsxs)(m,{open:e,onClose:i,title:`Отправка документа`,size:`sm`,children:[(0,I.jsx)(h,{children:(0,I.jsx)(y,{children:`Договор поставки №1234 будет отправлен контрагенту ООО «Первый завод». На узком экране этот диалог показан шторкой снизу.`})}),(0,I.jsxs)(_,{children:[(0,I.jsx)(l,{variant:`light`,onClick:i,children:`Отмена`}),(0,I.jsx)(l,{onClick:i,children:`Отправить`})]})]}),(0,I.jsxs)(m,{open:n,onClose:a,title:`Отправка документа`,size:`sm`,disableMobileDrawer:!0,children:[(0,I.jsx)(h,{children:(0,I.jsx)(y,{children:`Договор поставки №1234 будет отправлен контрагенту ООО «Первый завод». На узком экране этот диалог остаётся по центру экрана.`})}),(0,I.jsxs)(_,{children:[(0,I.jsx)(l,{variant:`light`,onClick:a,children:`Отмена`}),(0,I.jsx)(l,{onClick:a,children:`Отправить`})]})]})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source},description:{story:"На ширине меньше `mobile` диалог по умолчанию сворачивается в\n[BottomDrawer](/story/modals-bottomdrawer--docs).\n`disableMobileDrawer` это отключает: диалог остаётся центрированным модальным окном и подстраивает ширину под экран.",...L.parameters?.docs?.description}}};try{L.displayName=`DisableMobileDrawer`,L.__docgenInfo={description:"На ширине меньше `mobile` диалог по умолчанию сворачивается в\n[BottomDrawer](/story/modals-bottomdrawer--docs).\n`disableMobileDrawer` это отключает: диалог остаётся центрированным модальным окном и подстраивает ширину под экран.",displayName:`DisableMobileDrawer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/DisableMobileDrawer.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z;function B(){return(B=e((()=>{z={args:{title:`Заголовок диалога`,open:!1},parameters:{docs:{disable:!0}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок диалога',
    open: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...z.parameters?.docs?.source}}}})))()}var V,H,U,W;function G(){return(G=e((()=>{V=n(),i(),te(),g(),v(),a(),p(),H=d(),U=[{name:`Дата поступления`,value:`12.06.2024 в 11:11`},{name:`Тип заявки`,value:`Создание`},{name:`ID учетной записи`,value:`4d1f0594-bc22-4660-8e7d-83a024126ef3`},{name:`ID док-оборота`,value:`222a1343-rf12-6660-1e3q-88a911143yr1`},{name:`ИНН`,value:`77724528768`},{name:`КПП`,value:`772401001`},{name:`Конфигурация`,value:`Значение показателя`},{name:`Удостоверенный центр`,value:`УЦ «Калуга Астрал»`}],W=()=>{let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(!1),[i,a]=(0,V.useState)(!1),[o,s]=(0,V.useState)(!1),[c,d]=(0,V.useState)(!1),f=()=>{t(!1)},p=()=>{r(!1)},g=()=>{a(!1)},v=()=>{s(!1)},y=()=>{d(!1)};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,H.jsx)(l,{onClick:()=>t(e=>!e),children:`Dialog xs size`}),(0,H.jsx)(l,{onClick:()=>r(e=>!e),children:`Dialog sm size`}),(0,H.jsx)(l,{onClick:()=>a(e=>!e),children:`Dialog md size`}),(0,H.jsx)(l,{onClick:()=>s(e=>!e),children:`Dialog lg size`}),(0,H.jsx)(l,{onClick:()=>d(e=>!e),children:`Dialog xl size`})]}),(0,H.jsxs)(m,{open:e,onClose:f,title:`Заявка`,size:`xs`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(S,{items:U,leader:!0})}),(0,H.jsxs)(_,{children:[(0,H.jsx)(l,{onClick:f,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,H.jsx)(l,{onClick:f,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,H.jsxs)(m,{open:n,onClose:p,title:`Заявка`,size:`sm`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(S,{items:U,leader:!0})}),(0,H.jsxs)(_,{children:[(0,H.jsx)(l,{onClick:p,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,H.jsx)(l,{onClick:p,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,H.jsxs)(m,{open:i,onClose:g,title:`Заявка`,size:`md`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(S,{items:U,leader:!0})}),(0,H.jsxs)(_,{children:[(0,H.jsx)(l,{onClick:g,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,H.jsx)(l,{onClick:g,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,H.jsxs)(m,{open:o,onClose:v,title:`Заявка`,size:`lg`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(S,{items:U,leader:!0})}),(0,H.jsxs)(_,{children:[(0,H.jsx)(l,{onClick:v,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,H.jsx)(l,{onClick:v,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]}),(0,H.jsxs)(m,{open:c,onClose:y,title:`Заявка`,size:`xl`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(S,{items:U,leader:!0})}),(0,H.jsxs)(_,{children:[(0,H.jsx)(l,{onClick:y,size:`large`,variant:`light`,color:`error`,children:`Отклонить`}),(0,H.jsx)(l,{onClick:y,size:`large`,variant:`light`,color:`success`,children:`Принять`})]})]})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}}})))()}var K,q,J;function Y(){return(Y=e((()=>{K=n(),i(),g(),v(),b(),a(),p(),q=d(),J=()=>{let[e,t]=(0,K.useState)(!1),[n,r]=(0,K.useState)(!1),i=()=>{t(!0)},a=()=>{t(!1)},o=()=>{r(!0)},s=()=>{r(!1)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,q.jsx)(l,{onClick:i,children:`Dialog actions`}),(0,q.jsx)(l,{onClick:o,children:`Dialog more actions`})]}),(0,q.jsxs)(m,{open:e,onClose:a,title:`Заголовок`,children:[(0,q.jsx)(h,{children:(0,q.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,q.jsxs)(_,{children:[(0,q.jsx)(l,{variant:`text`,size:`large`,onClick:a,children:`Отмена`}),(0,q.jsx)(l,{autoFocus:!0,size:`large`,onClick:a,children:`Готово`})]})]}),(0,q.jsxs)(m,{open:n,onClose:s,title:`Заголовок`,children:[(0,q.jsx)(h,{children:(0,q.jsx)(y,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,q.jsxs)(_,{children:[(0,q.jsx)(l,{variant:`text`,size:`large`,onClick:s,children:`Вернуться позже`}),(0,q.jsx)(l,{variant:`text`,size:`large`,onClick:s,children:`Отмена`}),(0,q.jsx)(l,{autoFocus:!0,onClick:s,children:`Готово`})]})]})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source},description:{story:`[DialogActions](/story/modals-dialog--dialog-actions)`,...J.parameters?.docs?.description}}};try{J.displayName=`WithDialogActions`,J.__docgenInfo={description:`[DialogActions](/story/modals-dialog--dialog-actions)`,displayName:`WithDialogActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/WithDialogActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z,Q;function $(){return($=e((()=>{X=n(),i(),g(),v(),b(),f(),p(),Z=d(),Q=()=>{let e=c.div`
    margin-left: auto;
  `,[t,n]=(0,X.useState)(!1),r=()=>{n(!0)},i=()=>{n(!1)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l,{onClick:r,children:`Dialog с headerContent`}),(0,Z.jsxs)(m,{open:t,onClose:i,title:`Заголовок`,headerContent:(0,Z.jsx)(e,{children:(0,Z.jsx)(l,{variant:`text`,onClick:()=>{console.log(`Сбросить`)},size:`medium`,disabled:!1,children:`Сбросить`})}),children:[(0,Z.jsx)(h,{children:(0,Z.jsx)(y,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,Z.jsxs)(_,{children:[(0,Z.jsx)(l,{variant:`text`,size:`large`,onClick:i,children:`Отмена`}),(0,Z.jsx)(l,{autoFocus:!0,size:`large`,onClick:i,children:`Готово`})]})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source},description:{story:`Пример использования Dialog с дополнительным контентом в хедере через prop headerContent`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithHeaderContent`,Q.__docgenInfo={description:`Пример использования Dialog с дополнительным контентом в хедере через prop headerContent`,displayName:`WithHeaderContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Dialog/stories/WithHeaderContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ne,re;function ie(){return(ie=e((()=>{p(),E(),A(),P(),R(),B(),G(),Y(),$(),ne={title:`Modals/Dialog`,component:m,parameters:{docs:{description:{component:`Когда требуется, чтобы пользователи взаимодействовали с приложением, но без перехода на новую страницу и прерывания рабочего процесса пользователя, нужно использовать Dialog.
Может содержать:
 - [DialogHeader](/story/modals-dialog-dialogHeader--docs)
 - [DialogActions](/story/modals-dialog-dialogActions--docs)
 - [DialogContent](/story/modals-dialog-dialogContent--docs)
 - [DialogContentText](/story/modals-dialog-dialogContentText--docs)
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},re=[`Interaction`,`BasicUsage`,`CustomTitle`,`CustomHeader`,`WithDialogActions`,`Size`,`WithHeaderContent`,`DisableMobileDrawer`]})))()}ie();export{T as BasicUsage,k as CustomHeader,N as CustomTitle,L as DisableMobileDrawer,z as Interaction,W as Size,J as WithDialogActions,Q as WithHeaderContent,re as __namedExportsOrder,ne as default};