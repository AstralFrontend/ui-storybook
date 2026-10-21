import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,cn as r,dt as i,ft as a,ji as o,ln as s,w as c,xa as l,yn as u}from"./preview-lt0cavAw.js";import{n as d,t as f}from"./DashboardLayout-DW2e20AN.js";import{n as p,t as m}from"./WelcomeScreen-3m4FldqT.js";import{n as h,t as g}from"./UikitLogo-D4FoUjRc.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{_=n(),h(),r(),c(),f(),u(),i(),p(),v=l(),y={title:`Other/WelcomeScreen`,component:m,parameters:{layout:`fullscreen`,docs:{description:{component:`### Приветственный экран для мобильных версий приложений
Отображается только при первичной загрузки приложения в рамках вкладки. При обновлении страницы не отображается`}}}},b=o.div`
  padding: ${({theme:e})=>e.spacing(4)};
`,x=o.div`
  width: 100%;
  height: 100vh;

  /* Добавляем опциональность на dvh, для корректной проверки компонента через browserstack под старыми браузерами */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
`,S=({children:e})=>(0,v.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,v.jsx)(x,{children:e})}),C={logo:(0,v.jsx)(g,{}),productName:`Астрал.ЭДО`,userName:`Иван Иванович`},w=e=>{let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(!1);return{data:t,isLoading:r,isError:!1,fetch:()=>{i(!0),setTimeout(()=>{n(e),i(!1)},1e3)}}},T={args:{productName:`Астрал`,userName:`Иван Иванович`,isLoading:!1,isError:!1,isSuccess:!0,errorMsg:`Ошибка 500`},parameters:{docs:{disable:!0}}},E=()=>{let{data:e,isLoading:t,isError:n,fetch:r}=w(C);(0,_.useEffect)(()=>{r()},[]);let i=()=>sessionStorage.clear(),o=()=>e?.logo||null,c=!t&&!n&&!!e;return(0,v.jsx)(S,{children:(0,v.jsx)(m,{...e,isSuccess:c,isLoading:t,isError:n,onRetry:r,children:(0,v.jsxs)(d,{children:[(0,v.jsx)(d.Header,{product:{name:`Астрал.ЭДО`,logo:()=>(0,v.jsx)(o,{})}}),(0,v.jsx)(d.Main,{children:(0,v.jsxs)(b,{children:[(0,v.jsx)(a,{children:`Приветствие отображается только при первичной загрузки приложения в рамках вкладки. Для повторного просмотра приветствия необходимо очистить sessionStorage`}),(0,v.jsx)(s,{onClick:i,children:`Очистить sessionStorage`})]})})]})})})},D=()=>(0,v.jsx)(S,{children:(0,v.jsx)(m,{isLoading:!0,isSuccess:!1,onRetry:()=>void 0,children:`Content`})}),O=()=>(0,v.jsx)(S,{children:(0,v.jsx)(m,{isError:!0,isSuccess:!1,errorMsg:`Ошибка 500`,onRetry:()=>alert(`Повторить запрос`),children:`Content`})}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    productName: 'Астрал',
    userName: 'Иван Иванович',
    isLoading: false,
    isError: false,
    isSuccess: true,
    errorMsg: 'Ошибка 500'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const {
    data,
    isLoading,
    isError,
    fetch
  } = useMockFetch(MOCK_DATA);
  useEffect(() => {
    fetch();
  }, []);
  const handleClearStorage = () => sessionStorage.clear();
  const Logo = () => data?.logo || null;
  const isSuccess = !isLoading && !isError && Boolean(data);
  return <Container>
      <WelcomeScreen {...data} isSuccess={isSuccess} isLoading={isLoading} isError={isError} onRetry={fetch}>
        <DashboardLayout>
          <DashboardLayout.Header product={{
          name: 'Астрал.ЭДО',
          logo: () => <Logo />
        }} />
          <DashboardLayout.Main>
            <MainWrapper>
              <Typography>
                Приветствие отображается только при первичной загрузки
                приложения в рамках вкладки. Для повторного просмотра
                приветствия необходимо очистить sessionStorage
              </Typography>

              <Button onClick={handleClearStorage}>
                Очистить sessionStorage
              </Button>
            </MainWrapper>
          </DashboardLayout.Main>
        </DashboardLayout>
      </WelcomeScreen>
    </Container>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <Container>
    <WelcomeScreen isLoading isSuccess={false} onRetry={() => undefined}>
      Content
    </WelcomeScreen>
  </Container>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const handleRetry = () => alert('Повторить запрос');
  return <Container>
      <WelcomeScreen isError isSuccess={false} errorMsg="Ошибка 500" onRetry={handleRetry}>
        Content
      </WelcomeScreen>
    </Container>;
}`,...O.parameters?.docs?.source}}},k=[`Interaction`,`BasicUsage`,`Loading`,`WithError`]})))()}A();export{E as BasicUsage,T as Interaction,D as Loading,O as WithError,k as __namedExportsOrder,y as default};