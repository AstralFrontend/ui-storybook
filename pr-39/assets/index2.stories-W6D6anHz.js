import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ji as i,ln as a,lt as o,xa as s,yn as c}from"./preview-BexmKZ07.js";import{a as l,l as u,n as d}from"./NotificationStackContainer-CHg0dSrS.js";import{t as f}from"./Notification-B0RLjq97.js";import{a as p,n as m,o as h,r as g,s as _,t as v}from"./BannerActionButton-Ck5VhwMX.js";var y,b;function x(){return(x=e((()=>{r(),c(),y=i.div`
  width: 100%;
  height: 600px;
`,b=i(o)`
  grid-auto-flow: column;

  width: 100%;
  max-width: 600px;
  padding-top: ${({theme:e})=>e.spacing(5)};
  padding-left: ${({theme:e})=>e.spacing(5)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-auto-flow: row;

    padding-top: 0;
    padding-left: 0;
  }
`})))()}function S(){return(S=e((()=>{x()})))()}var C,w,T,E;function D(){return(D=e((()=>{C=t(),n(),f(),h(),v(),m(),S(),w=s(),T=null,E=()=>(T||=p.create({containerId:`action-link-container`,imageSrc:`./banner-stub.png`,title:`Пройдите опрос`,description:`Опрос займет не более 5 минут`,action:({closeBanner:e})=>(0,w.jsx)(_,{onClick:()=>e(),component:`a`,href:`/`,target:`_blank`,children:`Пройти опрос`}),onClose:()=>{}}),(0,C.useEffect)(()=>{T?.open()},[]),(0,w.jsxs)(y,{children:[(0,w.jsxs)(b,{spacing:2,children:[(0,w.jsx)(a,{onClick:()=>{l.info(`Загрузка завершена`,{isStatic:!0,containerId:`notify-action-link-container`})},children:`Уведомление`}),(0,w.jsx)(a,{onClick:()=>{T?.close()},color:`primary`,children:`Закрыть баннер`})]}),(0,w.jsx)(d,{containerId:`notify-action-link-container`,bannerContainer:(0,w.jsx)(g,{bannerContainerId:`action-link-container`})})]})),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  if (!bannerInstance) {
    bannerInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'action-link-container',
      imageSrc: './banner-stub.png',
      title: 'Пройдите опрос',
      description: 'Опрос займет не более 5 минут',
      action: ({
        closeBanner
      }) => <BannerActionButton onClick={() => closeBanner()} component="a" href="/" target="_blank">
          Пройти опрос
        </BannerActionButton>,
      onClose: () => {}
    });
  }
  useEffect(() => {
    bannerInstance?.open();
  }, []);
  const handleCloseBanner = () => {
    bannerInstance?.close();
  };
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      isStatic: true,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'notify-action-link-container'
    });
  };
  return <Container>
      <ActionWrapper spacing={2}>
        <Button onClick={handleInfo}>Уведомление</Button>
        <Button onClick={handleCloseBanner} color="primary">
          Закрыть баннер
        </Button>
      </ActionWrapper>
      <NotificationStackContainer containerId="notify-action-link-container" bannerContainer={
    // bannerContainerId необходимо для storybook, так как на одном экране несколько контейнеров
    <BannerContainer bannerContainerId="action-link-container" />} />
    </Container>;
}`,...E.parameters?.docs?.source}}}})))()}var O,k,A,j;function M(){return(M=e((()=>{O=t(),n(),f(),h(),v(),m(),S(),k=s(),A=null,j=()=>(A||=p.create({containerId:`example-container`,imageSrc:`./banner-stub.png`,title:`Установите расширение Доки для 1С`,description:`Быстро обрабатывайте поступления и отправляйте документы по ЭДО в один клик`,action:({closeBanner:e})=>(0,k.jsx)(_,{onClick:()=>{e()},children:`Смотреть инструкцию`})}),(0,O.useEffect)(()=>{A?.open()},[]),(0,k.jsxs)(y,{children:[(0,k.jsxs)(b,{spacing:2,children:[(0,k.jsx)(a,{onClick:()=>{l.info(`Загрузка завершена`,{isStatic:!0,containerId:`notify-example-container`})},children:`Уведомление`}),(0,k.jsx)(a,{onClick:()=>{A?.close()},color:`primary`,children:`Закрыть баннер`})]}),(0,k.jsx)(u,{containerId:`notify-example-container`,bannerContainer:(0,k.jsx)(g,{bannerContainerId:`example-container`})})]})),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  if (!bannerInstance) {
    bannerInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'example-container',
      imageSrc: './banner-stub.png',
      title: 'Установите расширение Доки для 1С',
      description: 'Быстро обрабатывайте поступления и отправляйте документы по ЭДО в один клик',
      action: ({
        closeBanner
      }) => <BannerActionButton onClick={() => {
        closeBanner();
      }}>
          Смотреть инструкцию
        </BannerActionButton>
    });
  }
  useEffect(() => {
    bannerInstance?.open();
  }, []);
  const handleCloseBanner = () => {
    bannerInstance?.close();
  };
  const handleInfo = () => {
    notify.info('Загрузка завершена', {
      isStatic: true,
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'notify-example-container'
    });
  };
  return <Container>
      <ActionWrapper spacing={2}>
        <Button onClick={handleInfo}>Уведомление</Button>
        <Button onClick={handleCloseBanner} color="primary">
          Закрыть баннер
        </Button>
      </ActionWrapper>
      <NotificationContainer containerId="notify-example-container" bannerContainer={
    // bannerContainerId необходимо для storybook, так как на одном экране несколько контейнеров
    <BannerContainer bannerContainerId="example-container" />} />
    </Container>;
}`,...j.parameters?.docs?.source}}}})))()}var N,P,F,I,L;function R(){return(R=e((()=>{N=t(),f(),h(),m(),S(),P=s(),F=null,I=null,L=()=>(F||=p.create({containerId:`description-container`,title:`Баннер с описанием`,description:`Текстовое описание, которое находится внутри баннера`}),I||=p.create({containerId:`description-container`,title:`Баннер без описания`}),(0,N.useEffect)(()=>{F?.open(),I?.open()},[]),(0,P.jsx)(y,{children:(0,P.jsx)(d,{bannerContainer:(0,P.jsx)(g,{bannerContainerId:`description-container`})})})),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  if (!bannerWithDescriptionInstance) {
    bannerWithDescriptionInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'description-container',
      title: 'Баннер с описанием',
      description: 'Текстовое описание, которое находится внутри баннера'
    });
  }
  if (!bannerWithoutDescriptionInstance) {
    bannerWithoutDescriptionInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'description-container',
      title: 'Баннер без описания'
    });
  }
  useEffect(() => {
    bannerWithDescriptionInstance?.open();
    bannerWithoutDescriptionInstance?.open();
  }, []);
  return <Container>
      <NotificationStackContainer bannerContainer={
    // bannerContainerId необходимо для storybook, так как на одном экране несколько контейнеров
    <BannerContainer bannerContainerId="description-container" />} />
    </Container>;
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V,H,U;function W(){return(W=e((()=>{z=t(),f(),h(),m(),S(),B=s(),V=null,H=null,U=()=>(V||=p.create({containerId:`image-container`,title:`Баннер с изображением`,imageSrc:`./banner-stub.png`}),H||=p.create({containerId:`image-container`,title:`Баннер без изображения`}),(0,z.useEffect)(()=>{V?.open(),H?.open()},[]),(0,B.jsx)(y,{children:(0,B.jsx)(d,{bannerContainer:(0,B.jsx)(g,{bannerContainerId:`image-container`})})})),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  if (!bannerWithImageInstance) {
    bannerWithImageInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'image-container',
      title: 'Баннер с изображением',
      imageSrc: './banner-stub.png'
    });
  }
  if (!bannerWithoutImageInstance) {
    bannerWithoutImageInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'image-container',
      title: 'Баннер без изображения'
    });
  }
  useEffect(() => {
    bannerWithImageInstance?.open();
    bannerWithoutImageInstance?.open();
  }, []);
  return <Container>
      <NotificationStackContainer bannerContainer={
    // bannerContainerId необходимо для storybook, так как на одном экране несколько контейнеров
    <BannerContainer bannerContainerId="image-container" />} />
    </Container>;
}`,...U.parameters?.docs?.source}}}})))()}var G,K,q,J,Y;function X(){return(X=e((()=>{G=t(),f(),h(),m(),S(),K=s(),q=null,J=null,Y=()=>(q||=p.create({containerId:`title-container`,title:`Установите расширение Доки для 1С`,description:`Баннер с заголовком`}),J||=p.create({containerId:`title-container`,description:`Баннер без заголовка`}),(0,G.useEffect)(()=>{q?.open(),J?.open()},[]),(0,K.jsx)(y,{children:(0,K.jsx)(d,{bannerContainer:(0,K.jsx)(g,{bannerContainerId:`title-container`})})})),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  if (!bannerWithTitleInstance) {
    bannerWithTitleInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'title-container',
      title: 'Установите расширение Доки для 1С',
      description: 'Баннер с заголовком'
    });
  }
  if (!bannerWithoutTitleInstance) {
    bannerWithoutTitleInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'title-container',
      description: 'Баннер без заголовка'
    });
  }
  useEffect(() => {
    bannerWithTitleInstance?.open();
    bannerWithoutTitleInstance?.open();
  }, []);
  return <Container>
      <NotificationStackContainer bannerContainer={
    // bannerContainerId необходимо для storybook, так как на одном экране несколько контейнеров
    <BannerContainer bannerContainerId="title-container" />} />
    </Container>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{D(),M(),R(),W(),X(),Z={title:`Notifications/Banner/Banner`,argTypes:{imageSrc:{control:`text`,description:`Путь к файлу изображения или URL`},title:{control:`text`,description:`Заголовок баннера`},description:{control:`text`,description:`Текстовое описание, которое будет отображаться внутри баннера`},action:{description:`Интерактивный элемент (например, кнопка или ссылка), который будет отображаться внутри баннера`},onClose:{description:`Обработчик, для выполнения дополнительных действий при закрытии(например, снятие метрик)`},containerId:{description:`Идентификатор для обработки нескольких контейнеров`}},parameters:{layout:`fullscreen`,docs:{description:{component:`### Сервис для отображения рекламного баннера или опроса

Может содержать:
 - [BannerActionButton](/story/notifications-banner-bannerActionButton--docs)

❗️ Для корректной работы баннера необходимо:
 - Использовать \`NotificationContainer\` или \`NotificationStackContainer\`, и передать в них BannerContainer
 - Версия react >= 18

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=23-19197)`}}}},Q=[`BasicUsage`,`ActionLink`,`Title`,`Description`,`Image`]})))()}$();export{E as ActionLink,j as BasicUsage,L as Description,U as Image,Y as Title,Q as __namedExportsOrder,Z as default};