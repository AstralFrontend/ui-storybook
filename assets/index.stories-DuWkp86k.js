import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ji as r,ln as i,lt as a,ya as o,yn as s,za as c}from"./preview-BYX69pdz.js";import{n as l,t as u}from"./useViewportType-B9UEbEAP.js";import{l as d}from"./NotificationStackContainer-Bw8zAKEF.js";import{t as f}from"./Notification-DRfXf39z.js";import{a as p,c as m,n as h,o as g,r as _,s as v,t as y}from"./BannerActionButton-DFe3GR4A.js";function b(){return(b=e((()=>{g(),h(),y()})))()}var x,S;function C(){return(C=e((()=>{n(),s(),x=r.div`
  width: 100%;
  height: 600px;
`,S=r(a,{shouldForwardProp:e=>![`$isMobile`].includes(e)})`
  width: 100%;
  max-width: 600px;
  padding-top: ${({theme:e})=>e.spacing(5)};
  padding-left: ${({theme:e})=>e.spacing(5)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-top: 0;
    padding-left: 0;
  }
`})))()}function w(){return(w=e((()=>{C()})))()}var T,E,D,O;function k(){return(k=e((()=>{T=c(),b(),t(),f(),u(),m(),w(),E=o(),D=null,O=()=>{let{isMobile:e}=l();return D||=p.create({containerId:`example-container`,imageSrc:`./banner-stub.png`,title:`Установите расширение Доки для 1С`,description:`Быстро обрабатывайте поступления и отправляйте документы по ЭДО в один клик`,action:({closeBanner:e})=>(0,E.jsx)(v,{onClick:()=>{e(),console.log(`onClick`)},children:`Смотреть инструкцию`})}),(0,T.useEffect)(()=>{D?.open()},[]),(0,E.jsxs)(x,{children:[(0,E.jsx)(S,{$isMobile:e,direction:e?`row`:`column`,spacing:2,children:(0,E.jsx)(i,{onClick:()=>{D?.close()},color:`primary`,children:`Закрыть баннер`})}),(0,E.jsx)(d,{bannerContainer:(0,E.jsx)(_,{bannerContainerId:`example-container`})})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const {
    isMobile
  } = useViewportType();
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
        console.log('onClick');
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
  return <Container>
      <ActionWrapper $isMobile={isMobile} direction={isMobile ? 'row' : 'column'} spacing={2}>
        <Button onClick={handleCloseBanner} color="primary">
          Закрыть баннер
        </Button>
      </ActionWrapper>
      <NotificationContainer bannerContainer={<BannerContainer bannerContainerId="example-container" />} />
    </Container>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M,N;function P(){return(P=e((()=>{A=c(),b(),t(),f(),u(),m(),w(),j=o(),M=null,N=()=>{let{isMobile:e}=l();return M||=p.create({containerId:`link-container`,imageSrc:`./banner-stub.png`,title:`Установите расширение Доки для 1С`,description:`Быстро обрабатывайте поступления и отправляйте документы по ЭДО в один клик`,action:({closeBanner:e})=>(0,j.jsx)(v,{onClick:()=>{e(),console.log(`onClick`)},component:`a`,href:`/`,target:`_blank`,children:`Смотреть инструкцию`})}),(0,A.useEffect)(()=>{M?.open()},[]),(0,j.jsxs)(x,{children:[(0,j.jsx)(S,{$isMobile:e,direction:e?`row`:`column`,spacing:2,children:(0,j.jsx)(i,{onClick:()=>{M?.close()},color:`primary`,children:`Закрыть баннер`})}),(0,j.jsx)(d,{bannerContainer:(0,j.jsx)(_,{bannerContainerId:`link-container`})})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const {
    isMobile
  } = useViewportType();
  if (!bannerInstance) {
    bannerInstance = banner.create({
      // containerId необходимо для storybook, так как на одном экране несколько контейнеров
      containerId: 'link-container',
      imageSrc: './banner-stub.png',
      title: 'Установите расширение Доки для 1С',
      description: 'Быстро обрабатывайте поступления и отправляйте документы по ЭДО в один клик',
      action: ({
        closeBanner
      }) => <BannerActionButton onClick={() => {
        closeBanner();
        console.log('onClick');
      }} component="a" href="/" target="_blank">
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
  return <Container>
      <ActionWrapper $isMobile={isMobile} direction={isMobile ? 'row' : 'column'} spacing={2}>
        <Button onClick={handleCloseBanner} color="primary">
          Закрыть баннер
        </Button>
      </ActionWrapper>
      <NotificationContainer bannerContainer={<BannerContainer bannerContainerId="link-container" />} />
    </Container>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{m(),k(),P(),F={title:`Notifications/Banner/BannerActionButton`,component:v,parameters:{layout:`fullscreen`,docs:{description:{component:`### Кнопка действия в баннере

Имеет стандартизированный размер size='large'`}}}},I=[`BasicUsage`,`Link`]})))()}L();export{O as BasicUsage,N as Link,I as __namedExportsOrder,F as default};