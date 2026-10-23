import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-D_kXaHc2.js";import{n as l,t as u}from"./BottomDrawer-CpIGk6cm.js";var d;function f(){return(f=e((()=>{s(),d=i.div`
  padding: ${({theme:e})=>e.spacing(4)};
`;try{d.displayName=`Content`,d.__docgenInfo={description:``,displayName:`Content`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/BottomDrawer/stories/common/Content.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}function p(){return(p=e((()=>{f()})))()}var m,h,g;function _(){return(_=e((()=>{m=c(),t(),n(),l(),p(),h=o(),g=()=>{let[e,t]=(0,m.useState)(!1),n=e=>()=>{t(e)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{onClick:n(!0),children:`Открыть карточку документа`}),(0,h.jsx)(u,{open:e,onClose:n(!1),title:`Договор №12345678 от 01.06.2026`,children:(0,h.jsx)(d,{children:(0,h.jsx)(r,{variant:`body1`,children:`Контрагент: ООО «Ромашка». Статус: на согласовании. Документ отправлен 16.06.2026, ожидает подписания второй стороной.`})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return <>
      <Button onClick={handleToggle(true)}>Открыть карточку документа</Button>

      <BottomDrawer open={isOpen} onClose={handleToggle(false)} title="Договор №12345678 от 01.06.2026">
        <Content>
          <Typography variant="body1">
            Контрагент: ООО «Ромашка». Статус: на согласовании. Документ
            отправлен 16.06.2026, ожидает подписания второй стороной.
          </Typography>
        </Content>
      </BottomDrawer>
    </>;
}`,...g.parameters?.docs?.source}}}})))()}var v,y,b;function x(){return(x=e((()=>{v=c(),t(),n(),l(),p(),y=o(),b=()=>{let[e,t]=(0,v.useState)(!1),n=e=>()=>{t(e)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{onClick:n(!0),children:`Открыть карточку организации`}),(0,y.jsx)(u,{open:e,onClose:n(!1),title:`ООО «Восточная торгово-промышленная компания», ИНН 7701234567`,drawerHeaderHeight:72,children:(0,y.jsx)(d,{children:(0,y.jsx)(r,{variant:`body1`,children:`Адрес: г. Москва, ул. Складочная, д. 5. Действующий статус контрагента: активен.`})})})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return <>
      <Button onClick={handleToggle(true)}>Открыть карточку организации</Button>

      <BottomDrawer open={isOpen} onClose={handleToggle(false)} title="ООО «Восточная торгово-промышленная компания», ИНН 7701234567" drawerHeaderHeight={72}>
        <Content>
          <Typography variant="body1">
            Адрес: г. Москва, ул. Складочная, д. 5. Действующий статус
            контрагента: активен.
          </Typography>
        </Content>
      </BottomDrawer>
    </>;
}`,...b.parameters?.docs?.source}}}})))()}var S,C,w,T,E;function D(){return(D=e((()=>{S=c(),t(),s(),n(),l(),p(),C=o(),w=i.div`
  padding: ${({theme:e})=>e.spacing(2,0)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
`,T=[`Документ создан`,`Документ отправлен контрагенту`,`Документ получен контрагентом`,`Документ просмотрен получателем`,`Запрошено уточнение по сумме`,`Уточнение предоставлено отправителем`,`Документ подписан со стороны отправителя`,`Документ подписан со стороны получателя`,`Сформирован акт сверки`,`Акт сверки согласован контрагентом`,`Документ передан в архив`,`Запрошена копия документа`,`Копия документа предоставлена`,`Документ аннулирован отправителем`,`Запрос на аннулирование подтверждён`,`Документ восстановлен из архива`,`Изменён статус документооборота`,`Добавлен комментарий к документу`,`Документ отправлен с исправлениями`,`Исправления подтверждены контрагентом`,`Документ повторно подписан`,`Сформирован реестр документов`,`Реестр документов отправлен в ФНС`,`Документооборот завершён`],E=()=>{let[e,t]=(0,S.useState)(!1),n=e=>()=>{t(e)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{onClick:n(!0),children:`Открыть историю документа`}),(0,C.jsx)(u,{open:e,onClose:n(!1),title:`История документа №12345678`,children:(0,C.jsx)(d,{children:T.map((e,t)=>(0,C.jsx)(w,{children:(0,C.jsxs)(r,{variant:`body1`,children:[t+1,`. `,e]})},e))})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return <>
      <Button onClick={handleToggle(true)}>Открыть историю документа</Button>

      <BottomDrawer open={isOpen} onClose={handleToggle(false)} title="История документа №12345678">
        <Content>
          {HISTORY_EVENTS.map((event, index) => <HistoryItem key={event}>
              <Typography variant="body1">
                {index + 1}. {event}
              </Typography>
            </HistoryItem>)}
        </Content>
      </BottomDrawer>
    </>;
}`,...E.parameters?.docs?.source}}}})))()}var O,k,A;function j(){return(j=e((()=>{O=c(),t(),n(),l(),p(),k=o(),A=()=>{let[e,t]=(0,O.useState)(!1),n=e=>()=>{t(e)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{onClick:n(!0),children:`Открыть карточку документа`}),(0,k.jsx)(u,{open:e,onClose:n(!1),title:`Универсальный передаточный документ №458`,headerContent:(0,k.jsx)(a,{variant:`text`,color:`primary`,onClick:n(!1),children:`Сбросить`}),children:(0,k.jsx)(d,{children:(0,k.jsx)(r,{variant:`body1`,children:`Поставщик: АО «Север-Астрал». Сумма документа: 184 320,00 ₽. Требуется подписание усиленной квалифицированной электронной подписью.`})})})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return <>
      <Button onClick={handleToggle(true)}>Открыть карточку документа</Button>

      <BottomDrawer open={isOpen} onClose={handleToggle(false)} title="Универсальный передаточный документ №458" headerContent={<Button variant="text" color="primary" onClick={handleToggle(false)}>
            Сбросить
          </Button>}>
        <Content>
          <Typography variant="body1">
            Поставщик: АО «Север-Астрал». Сумма документа: 184 320,00 ₽.
            Требуется подписание усиленной квалифицированной электронной
            подписью.
          </Typography>
        </Content>
      </BottomDrawer>
    </>;
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{l(),_(),x(),D(),j(),M={title:`Modals/BottomDrawer`,component:u,parameters:{docs:{description:{component:`BottomDrawer — мобильная адаптация всплывающих компонентов на базе MUI Drawer.
Используется как основа для [Dialog](/docs/modals-dialog--docs),
[Popover](/docs/popovers-and-tooltips-popover--docs),
[Menu](/docs/navigation-menu--docs). Не предназначен для прямого
использования в продуктах.`}}}},N=[`BasicUsage`,`CustomHeaderHeight`,`WithContentOverflow`,`WithHeaderContent`]})))()}P();export{g as BasicUsage,b as CustomHeaderHeight,E as WithContentOverflow,A as WithHeaderContent,N as __namedExportsOrder,M as default};