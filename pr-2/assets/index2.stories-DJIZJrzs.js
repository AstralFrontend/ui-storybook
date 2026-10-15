import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Va as n,Z as r,cn as i,ct as a,dt as o,ft as s,it as c,ln as l,lt as u,rt as d,xa as f}from"./preview-msKJ6Jz4.js";import{t as p}from"./Divider-DMYgzA24.js";import{t as m}from"./DialogContentText-BYH4qkyV.js";import{t as h}from"./Alert-g0OWADVZ.js";import{t as g}from"./Alert-BAuu5PP2.js";import{t as _}from"./Divider-BVdXlo4-.js";import{a as v,o as y,r as b,t as x}from"./SideDialogContent-E7eN6y-R.js";import{t as S}from"./SideDialogHeader-DfgC5ovV.js";import{t as C}from"./SideDialogHeader-DOFSG_9P.js";import{n as w,t as T}from"./SettingsOutlineMd-Bsxu0O-9.js";import{t as E}from"./SideDialogActions-BZMdwhTX.js";import{t as D}from"./SideDialogContent-Ck9ztZNS.js";import{t as O}from"./DescriptionList-CzuXnluW.js";import{t as k}from"./DescriptionList-BmYaPHkY.js";import{t as A}from"./SideDialogContentText-B6aw3Qva.js";var j,M,N;function P(){return(P=e((()=>{j=n(),g(),i(),E(),D(),A(),y(),M=f(),N=()=>{let[e,t]=(0,j.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)};return(0,M.jsxs)(`div`,{children:[(0,M.jsx)(l,{onClick:n,children:`SideDialog`}),(0,M.jsxs)(v,{title:`Заголовок`,open:e,onClose:r,children:[(0,M.jsxs)(x,{children:[(0,M.jsx)(h,{severity:`warning`,children:`Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quisque id diam vel quam.`}),(0,M.jsx)(`br`,{}),(0,M.jsx)(m,{id:`alert-dialog-description`,children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Sit amet luctus venenatis lectus magna. Vitae auctor eu augue ut lectus arcu bibendum. Dui accumsan sit amet nulla facilisi morbi tempus. Condimentum lacinia quis vel eros donec. Dis parturient montes nascetur ridiculus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quisque id diam vel quam. Magna sit amet purus gravida quis blandit turpis cursus in. Dolor morbi non arcu risus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Sit amet luctus venenatis lectus magna. Vitae auctor eu augue ut lectus arcu bibendum.`})]}),(0,M.jsxs)(b,{children:[(0,M.jsx)(l,{variant:`text`,size:`large`,onClick:r,children:`Отмена`}),(0,M.jsx)(l,{size:`large`,onClick:r,children:`Готово`})]})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
      <Button onClick={handleOpen}>SideDialog</Button>
      <SideDialog title="Заголовок" open={open} onClose={handleClose}>
        <SideDialogContent>
          <Alert severity="warning">
            Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
            Quisque id diam vel quam.
          </Alert>
          <br />
          <SideDialogContentText id="alert-dialog-description">
            {/* cSpell:disable */}
            Заглушка примера текста страницы, который несет очень важный смысл
            для пользователя и предлагает ему варианты выбора действий с
            контентом и в рамках работы приложения. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Arcu cursus vitae congue mauris
            rhoncus aenean. Sit amet luctus venenatis lectus magna. Vitae auctor
            eu augue ut lectus arcu bibendum. Dui accumsan sit amet nulla
            facilisi morbi tempus. Condimentum lacinia quis vel eros donec. Dis
            parturient montes nascetur ridiculus. Purus faucibus ornare
            suspendisse sed nisi lacus sed viverra. Quisque id diam vel quam.
            Magna sit amet purus gravida quis blandit turpis cursus in. Dolor
            morbi non arcu risus. Sed cras ornare arcu dui vivamus arcu felis
            bibendum ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Arcu cursus vitae congue mauris rhoncus aenean. Sit amet luctus
            venenatis lectus magna. Vitae auctor eu augue ut lectus arcu
            bibendum.
            {/* cSpell:enable */}
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" size="large" onClick={handleClose}>
            Отмена
          </Button>
          <Button size="large" onClick={handleClose}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </div>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I,L;function R(){return(R=e((()=>{F=n(),i(),a(),E(),D(),A(),y(),I=f(),L=()=>{let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(!1),i=()=>{t(!0)},a=()=>{t(!1)},o=()=>{r(!0)},s=()=>{r(!1)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,I.jsx)(l,{onClick:i,children:`SideDialog actions`}),(0,I.jsx)(l,{onClick:o,children:`SideDialog more actions`})]}),(0,I.jsxs)(v,{open:e,onClose:a,title:`Заголовок`,children:[(0,I.jsx)(x,{children:(0,I.jsx)(m,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,I.jsxs)(b,{children:[(0,I.jsx)(l,{variant:`text`,size:`large`,onClick:a,children:`Отмена`}),(0,I.jsx)(l,{autoFocus:!0,size:`large`,onClick:a,children:`Готово`})]})]}),(0,I.jsxs)(v,{open:n,onClose:s,title:`Заголовок`,children:[(0,I.jsx)(x,{children:(0,I.jsx)(m,{children:`Заглушка примера текста страницы, который несет очень важный смысл для пользователя и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.`})}),(0,I.jsxs)(b,{children:[(0,I.jsx)(l,{variant:`text`,size:`large`,onClick:s,children:`Вернуться позже`}),(0,I.jsx)(l,{variant:`text`,size:`large`,onClick:s,children:`Отмена`}),(0,I.jsx)(l,{autoFocus:!0,onClick:s,children:`Готово`})]})]})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
          <Button autoFocus onClick={handleCloseMoreActions}>
            Готово
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>;
}`,...L.parameters?.docs?.source},description:{story:`[SideDialogActions](/story/modals-sideDialog-sideDialogActions--docs)`,...L.parameters?.docs?.description}}};try{L.displayName=`CustomFooter`,L.__docgenInfo={description:`[SideDialogActions](/story/modals-sideDialog-sideDialogActions--docs)`,displayName:`CustomFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SideDialog/stories/CustomFooter.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{z=n(),T(),i(),_(),a(),d(),D(),A(),C(),r(),y(),B=f(),V=()=>{let[e,n]=(0,z.useState)(!1),[r,i]=(0,z.useState)(!1),a=()=>{n(!0)},o=()=>{n(!1)},s=()=>{i(!0)},d=()=>{i(!1)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,B.jsx)(l,{onClick:a,children:`SideDialog header left`}),(0,B.jsx)(l,{onClick:s,children:`SideDialog header right`})]}),(0,B.jsxs)(v,{open:r,onClose:d,children:[(0,B.jsx)(S,{title:`Заголовок`,onClose:d,justifyContent:`flex-start`,children:(0,B.jsx)(t,{variant:`light`,label:`Информация`,color:`primary`})}),(0,B.jsx)(x,{children:(0,B.jsx)(m,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto.`})})]}),(0,B.jsxs)(v,{open:e,onClose:o,children:[(0,B.jsxs)(S,{title:`Заголовок`,onClose:o,justifyContent:`flex-end`,children:[(0,B.jsx)(t,{variant:`light`,label:`Важное`,color:`error`}),(0,B.jsx)(c,{variant:`text`,children:(0,B.jsx)(w,{})}),(0,B.jsx)(p,{orientation:`vertical`})]}),(0,B.jsx)(x,{children:(0,B.jsx)(m,{id:`alert-dialog-description`,children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur optio sapiente fugit eos quasi quidem veniam laudantium consequuntur architecto.`})})]})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
            veniam laudantium consequuntur architecto. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Culpa, laboriosam doloremque aut
            nobis quam asperiores eveniet libero aliquam, ipsum consectetur
            optio sapiente fugit eos quasi quidem veniam laudantium consequuntur
            architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa, laboriosam doloremque aut nobis quam asperiores eveniet
            libero aliquam, ipsum consectetur optio sapiente fugit eos quasi
            quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque
            aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur
            optio sapiente fugit eos quasi quidem veniam laudantium consequuntur
            architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa, laboriosam doloremque aut nobis quam asperiores eveniet
            libero aliquam, ipsum consectetur optio sapiente fugit eos quasi
            quidem veniam laudantium consequuntur architecto. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Culpa, laboriosam doloremque
            aut nobis quam asperiores eveniet libero aliquam, ipsum consectetur
            optio sapiente fugit eos quasi quidem veniam laudantium consequuntur
            architecto.
          </SideDialogContentText>
        </SideDialogContent>
      </SideDialog>
    </>;
}`,...V.parameters?.docs?.source},description:{story:`[SideDialogHeader](/story/modals-sideDialog-sideDialogHeader--docs)`,...V.parameters?.docs?.description}}};try{V.displayName=`CustomHeader`,V.__docgenInfo={description:`[SideDialogHeader](/story/modals-sideDialog-sideDialogHeader--docs)`,displayName:`CustomHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SideDialog/stories/CustomHeader.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U;function W(){return(W=e((()=>{U={args:{title:`Заголовок страницы`,open:!1,onClose:()=>{}},parameters:{docs:{disable:!0}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок страницы',
    open: false,
    onClose: () => {}
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...U.parameters?.docs?.source}}}})))()}var G,K,q,J,Y;function X(){return(X=e((()=>{G=n(),i(),k(),a(),E(),D(),o(),y(),K=f(),q=[{name:`Дата поступления`,value:`12.06.2024 в 11:11`},{name:`Тип заявки`,value:`Создание`},{name:`ID учетной записи`,value:`4d1f0594-bc22-4660-8e7d-83a024126ef3`},{name:`ID док-оборота`,value:`222a1343-rf12-6660-1e3q-88a911143yr1`},{name:`Полное наименование`,value:`ООО «АкцептЗайчатинаСТОНал»`},{name:`ИНН`,value:`77724528768`},{name:`КПП`,value:`772401001`},{name:`Конфигурация`,value:`Значение показателя`},{name:`Удостоверенный центр`,value:`УЦ «Калуга Астрал»`}],J=[{name:`Офис`,value:`АО «Калуга Астрал» ОПС ЭДО`},{name:`Центр продаж`,value:`АО «Калуга Астрал»`},{name:`ID партнера`,value:`4d1f0594-bc22-4660-8e7d-83a024126ef3`}],Y=()=>{let[e,t]=(0,G.useState)(!1),[n,r]=(0,G.useState)(!1),[i,a]=(0,G.useState)(!1),[o,c]=(0,G.useState)(!1),d=()=>{t(!1)};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(u,{container:!0,columns:2,spacing:2,children:[(0,K.jsx)(l,{onClick:()=>t(e=>!e),children:`SideDialog xs size`}),(0,K.jsx)(l,{onClick:()=>r(e=>!e),children:`SideDialog sm size`}),(0,K.jsx)(l,{onClick:()=>a(e=>!e),children:`SideDialog md size`}),(0,K.jsx)(l,{onClick:()=>c(e=>!e),children:`SideDialog lg size`})]}),(0,K.jsxs)(v,{title:`Заявка`,open:e,onClose:d,size:`xs`,children:[(0,K.jsxs)(x,{children:[(0,K.jsx)(s,{variant:`h6`,children:`Реквизиты абонента`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:q,leader:!0}),(0,K.jsx)(`br`,{}),(0,K.jsx)(s,{variant:`h6`,children:`Данные партнера`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:J,leader:!0})]}),(0,K.jsxs)(b,{children:[(0,K.jsx)(l,{variant:`light`,size:`large`,onClick:d,children:`Ручная проверка`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,children:`Нотариус`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,color:`error`,children:`Отклонить`})]})]}),(0,K.jsxs)(v,{title:`Заголовок`,open:n,onClose:()=>{r(!1)},size:`sm`,children:[(0,K.jsxs)(x,{children:[(0,K.jsx)(s,{variant:`h6`,children:`Реквизиты абонента`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:q,leader:!0}),(0,K.jsx)(`br`,{}),(0,K.jsx)(s,{variant:`h6`,children:`Данные партнера`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:J,leader:!0})]}),(0,K.jsxs)(b,{children:[(0,K.jsx)(l,{variant:`light`,size:`large`,onClick:d,children:`Ручная проверка`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,children:`Нотариус`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,color:`error`,children:`Отклонить`})]})]}),(0,K.jsxs)(v,{title:`Заголовок`,open:i,onClose:()=>{a(!1)},size:`md`,children:[(0,K.jsxs)(x,{children:[(0,K.jsx)(s,{variant:`h6`,children:`Реквизиты абонента`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:q,leader:!0}),(0,K.jsx)(`br`,{}),(0,K.jsx)(s,{variant:`h6`,children:`Данные партнера`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:J,leader:!0})]}),(0,K.jsxs)(b,{children:[(0,K.jsx)(l,{variant:`light`,size:`large`,onClick:d,children:`Ручная проверка`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,children:`Нотариус`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,color:`error`,children:`Отклонить`})]})]}),(0,K.jsxs)(v,{title:`Заголовок`,open:o,onClose:()=>{c(!1)},size:`lg`,children:[(0,K.jsxs)(x,{children:[(0,K.jsx)(s,{variant:`h6`,children:`Реквизиты абонента`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:q,leader:!0}),(0,K.jsx)(`br`,{}),(0,K.jsx)(s,{variant:`h6`,children:`Данные партнера`}),(0,K.jsx)(`br`,{}),(0,K.jsx)(O,{items:J,leader:!0})]}),(0,K.jsxs)(b,{children:[(0,K.jsx)(l,{variant:`light`,size:`large`,onClick:d,children:`Ручная проверка`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,children:`Нотариус`}),(0,K.jsx)(l,{onClick:d,variant:`light`,size:`large`,color:`error`,children:`Отклонить`})]})]})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [openXs, setOpenXs] = useState(false);
  const [openSm, setOpenSm] = useState(false);
  const [openMd, setOpenMd] = useState(false);
  const [openLg, setOpenLg] = useState(false);
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
  return <>
      <Grid container columns={2} spacing={2}>
        <Button onClick={() => setOpenXs(prevState => !prevState)}>
          SideDialog xs size
        </Button>
        <Button onClick={() => setOpenSm(prevState => !prevState)}>
          SideDialog sm size
        </Button>
        <Button onClick={() => setOpenMd(prevState => !prevState)}>
          SideDialog md size
        </Button>
        <Button onClick={() => setOpenLg(prevState => !prevState)}>
          SideDialog lg size
        </Button>
      </Grid>
      <SideDialog title="Заявка" open={openXs} onClose={handleCloseXs} size="xs">
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={ITEMS} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={PARTNER_ITEMS} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" size="large" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large">
            Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog title="Заголовок" open={openSm} onClose={handleCloseSm} size="sm">
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={ITEMS} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={PARTNER_ITEMS} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" size="large" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large">
            Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog title="Заголовок" open={openMd} onClose={handleCloseMd} size="md">
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={ITEMS} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={PARTNER_ITEMS} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" size="large" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large">
            Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
      <SideDialog title="Заголовок" open={openLg} onClose={handleCloseLg} size="lg">
        <SideDialogContent>
          <Typography variant="h6">Реквизиты абонента</Typography>
          <br />
          <DescriptionList items={ITEMS} leader />
          <br />
          <Typography variant="h6">Данные партнера</Typography>
          <br />
          <DescriptionList items={PARTNER_ITEMS} leader />
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="light" size="large" onClick={handleCloseXs}>
            Ручная проверка
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large">
            Нотариус
          </Button>
          <Button onClick={handleCloseXs} variant="light" size="large" color="error">
            Отклонить
          </Button>
        </SideDialogActions>
      </SideDialog>
    </>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{y(),P(),R(),H(),W(),X(),Z={title:`Modals/SideDialog`,component:v,parameters:{docs:{description:{component:`Может содержать:
- [SideDialogHeader](/story/modals-sideDialog-sideDialogHeader--docs)
- [SideDialogActions](/story/modals-sideDialog-sideDialogActions--docs)
- [SideDialogContent](/story/modals-sideDialog-sideDialogContent--docs)
- [SideDialogContentText](/story/modals-sideDialog-sideDialogContentText--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=434-21744&p=f&t=b4rEJbJxi9wHkzTa-0)`}}}},Q=[`Interaction`,`BasicUsage`,`CustomHeader`,`CustomFooter`,`Sizes`]})))()}$();export{N as BasicUsage,L as CustomFooter,V as CustomHeader,U as Interaction,Y as Sizes,Q as __namedExportsOrder,Z as default};