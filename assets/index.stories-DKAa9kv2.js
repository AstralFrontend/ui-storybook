import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,w as l,ya as u,yn as d,za as ee}from"./preview-BXnWBjdd.js";import{t as te}from"./MenuItem-uipTusli.js";import{t as ne}from"./MenuItem-D_7gec0P.js";import{t as f}from"./TextField-DOTfs6ZV.js";import{t as p}from"./TextField-Bl-o1fhb.js";import{n as m,t as h}from"./ContentState-BSYF2ZZl.js";import{t as re}from"./Select-D8eEw3-x.js";import{t as ie}from"./Select-CItNGZ2r.js";import{n as g,t as _}from"./error-_dxK9GiT.js";import{n as ae,t as oe}from"./certificates-not-found-DlrDnw0Y.js";import{n as v,t as y}from"./no-data-stub-BWDXGYgY.js";import{n as b,t as x}from"./outdated-release-CC7U2KmA.js";var S,C;function se(){return(se=e((()=>{S=ee(),C=()=>{let[e,t]=(0,S.useState)(!1),[n,r]=(0,S.useState)(``),[i,a]=(0,S.useState)(!1),o=1e3;return{isLoading:e,error:n,fetch:()=>{r(``),t(!0),a(!1),setTimeout(()=>{t(!1),a(!0)},o)},fetchWithError:()=>{t(!0),a(!1),setTimeout(()=>{t(!1),r(`Сервис недоступен`)},o)},isSuccess:i}}})))()}function w(){return(w=e((()=>{se()})))()}var T,ce;function le(){return(le=e((()=>{r(),d(),T=o(c)`
  overflow: hidden;
  place-content: center center;

  width: 384px;
  height: 384px;
`,ce=o.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 440px;
`})))()}var E,D;function ue(){return(ue=e((()=>{n(),r(),p(),E=u(),D=({onSubmit:e,children:t})=>(0,E.jsxs)(c,{container:!0,spacing:2,children:[(0,E.jsx)(f,{label:`Название`}),(0,E.jsx)(s,{onClick:e,children:`Отправить`}),t]});try{D.displayName=`Form`,D.__docgenInfo={description:``,displayName:`Form`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/common/Form.tsx`,methods:[],props:{onSubmit:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ContentState/stories/common/Form.tsx`,name:`TypeLiteral`}],description:``,name:`onSubmit`,required:!0,tags:{},type:{name:`MouseEventHandler<HTMLButtonElement>`}}},tags:{}}}catch{}})))()}function O(){return(O=e((()=>{w(),le(),ue()})))()}var k,A;function de(){return(de=e((()=>{g(),n(),m(),O(),k=u(),A=()=>{let{fetch:e,fetchWithError:t,isLoading:n,error:r}=C();return(0,k.jsx)(T,{container:!0,children:(0,k.jsx)(h,{isError:!!r,isLoading:n,errorState:{imgSrc:_,imgAlt:`Ошибка`,onRetry:e,errorList:[r]},children:(0,k.jsx)(D,{onSubmit:e,children:(0,k.jsx)(s,{onClick:t,children:`Отправить с ошибкой`})})})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const {
    fetch,
    fetchWithError,
    isLoading,
    error
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ContentState isError={Boolean(error)} isLoading={isLoading} errorState={{
      imgSrc: errorIllustration,
      imgAlt: 'Ошибка',
      onRetry: fetch,
      errorList: [error]
    }}>
        <Form onSubmit={fetch}>
          <Button onClick={fetchWithError}>Отправить с ошибкой</Button>
        </Form>
      </ContentState>
    </BaseContentContainer>;
}`,...A.parameters?.docs?.source}}}})))()}var j,M;function fe(){return(fe=e((()=>{ae(),m(),O(),j=u(),M=()=>{let{fetch:e,isLoading:t,isSuccess:n}=C();return(0,j.jsx)(T,{container:!0,children:(0,j.jsx)(h,{isLoading:t,isCustom:n,customState:{imgSrc:oe,imgAlt:`Ваша заявка принята`,title:`Ваша заявка принята`,description:`Мы свяжемся с вами позже`},children:(0,j.jsx)(D,{onSubmit:e})})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const {
    fetch,
    isLoading,
    isSuccess
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ContentState isLoading={isLoading} isCustom={isSuccess} customState={{
      imgSrc: certificatesNotFound,
      imgAlt: 'Ваша заявка принята',
      title: 'Ваша заявка принята',
      description: 'Мы свяжемся с вами позже'
    }}>
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>;
}`,...M.parameters?.docs?.source},description:{story:"Параметр `CustomState` позволяет отобразить кастомное состояние при `isCustom = true`\n\nПринимает объект с props для [Placeholder](/story/statuses-placeholder--docs)",...M.parameters?.docs?.description}}};try{M.displayName=`CustomState`,M.__docgenInfo={description:"Параметр `CustomState` позволяет отобразить кастомное состояние при `isCustom = true`\n\nПринимает объект с props для [Placeholder](/story/statuses-placeholder--docs)",displayName:`CustomState`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/CustomState.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function pe(){return(pe=e((()=>{g(),y(),x(),l(),m(),O(),N=u(),P=()=>{let{fetchWithError:e,isLoading:n,error:r}=C();return(0,N.jsx)(T,{container:!0,children:(0,N.jsx)(t,{imagesMap:{defaultErrorImgSrc:_,noDataImgSrc:v,outdatedReleaseErrorImgSrc:b},children:(0,N.jsx)(h,{isLoading:n,isError:!!r,errorState:{imgAlt:`Ошибка`,onRetry:e,errorList:[r]},children:(0,N.jsx)(D,{onSubmit:e})})})})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const {
    fetchWithError,
    isLoading,
    error
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noDataIllustration,
      outdatedReleaseErrorImgSrc: outdatedReleaseIllustration
    }}>
        <ContentState isLoading={isLoading} isError={Boolean(error)} errorState={{
        imgAlt: 'Ошибка',
        onRetry: fetchWithError,
        errorList: [error]
      }}>
          <Form onSubmit={fetchWithError} />
        </ContentState>
      </ConfigProvider>
    </BaseContentContainer>;
}`,...P.parameters?.docs?.source},description:{story:"При ошибке по умолчанию отображается `defaultErrorImgSrc` из `ConfigProvider`",...P.parameters?.docs?.description}}};try{P.displayName=`ErrorState`,P.__docgenInfo={description:"При ошибке по умолчанию отображается `defaultErrorImgSrc` из `ConfigProvider`",displayName:`ErrorState`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/ErrorState.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F;function I(){return(I=e((()=>{F=``+new URL(`technical-support-COFl4L68.svg`,import.meta.url).href})))()}var L,R;function me(){return(me=e((()=>{g(),y(),x(),I(),l(),m(),O(),L=u(),R=()=>{let{fetchWithError:e,isLoading:n,error:r}=C();return(0,L.jsx)(T,{container:!0,children:(0,L.jsx)(t,{imagesMap:{defaultErrorImgSrc:_,noDataImgSrc:v,outdatedReleaseErrorImgSrc:b},children:(0,L.jsx)(h,{isLoading:n,isError:!!r,errorState:{imgSrc:F,imgAlt:`Ошибка`,onRetry:e,errorList:[r]},children:(0,L.jsx)(D,{onSubmit:e})})})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const {
    fetchWithError,
    isLoading,
    error
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ConfigProvider imagesMap={{
      defaultErrorImgSrc: errorIllustration,
      noDataImgSrc: noDataIllustration,
      outdatedReleaseErrorImgSrc: outdatedReleaseIllustration
    }}>
        <ContentState isLoading={isLoading} isError={Boolean(error)} errorState={{
        imgSrc: techSupIllustration,
        imgAlt: 'Ошибка',
        onRetry: fetchWithError,
        errorList: [error]
      }}>
          <Form onSubmit={fetchWithError} />
        </ContentState>
      </ConfigProvider>
    </BaseContentContainer>;
}`,...R.parameters?.docs?.source},description:{story:"Переопределение картинки для ошибки\n\nПо умолчанию (без указанного `errorState.imgSrc`) отображается `defaultErrorImgSrc` из `ConfigProvider`",...R.parameters?.docs?.description}}};try{R.displayName=`ErrorStateWithCustomImg`,R.__docgenInfo={description:"Переопределение картинки для ошибки\n\nПо умолчанию (без указанного `errorState.imgSrc`) отображается `defaultErrorImgSrc` из `ConfigProvider`",displayName:`ErrorStateWithCustomImg`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/ErrorStateWithCustomImg.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,he,V,H,ge,_e,U,ve,W;function ye(){return(ye=e((()=>{z=ee(),n(),l(),r(),ne(),ie(),d(),p(),i(),m(),B=u(),he=o(c)`
  width: 100%;
`,V=o.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-width: 0;
`,H=({onSubmit:e,children:t})=>(0,B.jsxs)(he,{container:!0,spacing:2,children:[(0,B.jsx)(f,{label:`Название`}),(0,B.jsx)(s,{onClick:e,children:`Отправить`}),t]}),ge=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(8)};

  width: min(800px, 100%);
  height: 100%;
`,_e=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};
`,U=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;
`,ve=[`100`,`200`,`250`,`400`,`750`,`1000`,`2000`],W=()=>{let[e,n]=(0,z.useState)(),[r,i]=(0,z.useState)(!1),[o,c]=(0,z.useState)(!1),l=e=>{n(e.target.value)},u=()=>{i(!0),c(!1),setTimeout(()=>{i(!1),c(!0)},Number(e))},d=()=>{c(!1)};return(0,B.jsx)(t,{children:(0,B.jsxs)(ge,{children:[(0,B.jsx)(re,{onChange:l,value:e,label:`Длительность запроса`,fullWidth:!0,children:ve.map(e=>(0,B.jsx)(te,{value:e,children:e},e))}),(0,B.jsxs)(_e,{children:[(0,B.jsx)(V,{children:(0,B.jsx)(h,{isLoading:r,isSmoothLoading:!1,children:o?(0,B.jsxs)(U,{children:[(0,B.jsx)(a,{variant:`body1`,children:`Загрузка завершена`}),(0,B.jsx)(s,{onClick:d,children:`Сбросить экран успешной загрузки`})]}):(0,B.jsx)(H,{onSubmit:u})})}),(0,B.jsx)(V,{children:(0,B.jsx)(h,{isLoading:r,children:o?(0,B.jsxs)(U,{children:[(0,B.jsx)(a,{variant:`body1`,children:`Загрузка завершена`}),(0,B.jsx)(s,{onClick:d,children:`Сбросить экран успешной загрузки`})]}):(0,B.jsx)(H,{onSubmit:u})})})]})]})})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [duration, setDuration] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };
  const simulateRequest = () => {
    setIsLoading(true);
    setIsSuccess(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, Number(duration));
  };
  const resetSuccessState = () => {
    setIsSuccess(false);
  };
  return <ConfigProvider>
      <Wrapper>
        <Select onChange={handleChange} value={duration} label="Длительность запроса" fullWidth>
          {OPTIONS.map(option => <MenuItem value={option} key={option}>
              {option}
            </MenuItem>)}
        </Select>
        <ContentStateWrapper>
          <ContentStateColumn>
            <ContentState isLoading={isLoading} isSmoothLoading={false}>
              {isSuccess ? <Content>
                  <Typography variant="body1">Загрузка завершена</Typography>

                  <Button onClick={resetSuccessState}>
                    Сбросить экран успешной загрузки
                  </Button>
                </Content> : <Form onSubmit={simulateRequest} />}
            </ContentState>
          </ContentStateColumn>

          <ContentStateColumn>
            <ContentState isLoading={isLoading}>
              {isSuccess ? <Content>
                  <Typography variant="body1">Загрузка завершена</Typography>

                  <Button onClick={resetSuccessState}>
                    Сбросить экран успешной загрузки
                  </Button>
                </Content> : <Form onSubmit={simulateRequest} />}
            </ContentState>
          </ContentStateColumn>
        </ContentStateWrapper>
      </Wrapper>
    </ConfigProvider>;
}`,...W.parameters?.docs?.source},description:{story:`Демонстрирует новое поведение плавного отображения загрузки.

В левой колонке — стандартное поведение без задержек:
 - лоадер появляется и исчезает мгновенно при изменении \`isLoading\`.

В правой колонке — включён режим *плавной загрузки* \`isSmoothLoading\`,
при котором:
 - лоадер не появляется, если загрузка длится менее 200 мс;
 - лоадер появляется с задержкой 200 мс и остаётся видимым не менее 500 мс.

Данную функцию можно настроить глобально через \`ConfigProvider\` -> \`components.contentState.defaultProps.isSmoothLoading\`.

Или напрямую через компонент \`ContentState\` -> \`isSmoothLoading\` (приоритет выше чем у глобального определения)`,...W.parameters?.docs?.description}}};try{W.displayName=`FormLoadingBehavior`,W.__docgenInfo={description:`Демонстрирует новое поведение плавного отображения загрузки.

В левой колонке — стандартное поведение без задержек:
 - лоадер появляется и исчезает мгновенно при изменении \`isLoading\`.

В правой колонке — включён режим *плавной загрузки* \`isSmoothLoading\`,
при котором:
 - лоадер не появляется, если загрузка длится менее 200 мс;
 - лоадер появляется с задержкой 200 мс и остаётся видимым не менее 500 мс.

Данную функцию можно настроить глобально через \`ConfigProvider\` -> \`components.contentState.defaultProps.isSmoothLoading\`.

Или напрямую через компонент \`ContentState\` -> \`isSmoothLoading\` (приоритет выше чем у глобального определения)`,displayName:`FormLoadingBehavior`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/FormLoadingBehavior.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K;function be(){return(be=e((()=>{n(),p(),G=u(),K={args:{children:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(f,{label:`Название`}),(0,G.jsx)(s,{children:`Отправить`})]})},parameters:{docs:{disable:!0}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <TextField label="Название" />
        <Button>Отправить</Button>
      </>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...K.parameters?.docs?.source}}}})))()}var q,J;function xe(){return(xe=e((()=>{m(),O(),q=u(),J=()=>{let{fetch:e,isLoading:t}=C();return(0,q.jsx)(T,{container:!0,children:(0,q.jsx)(h,{isLoading:t,children:(0,q.jsx)(D,{onSubmit:e})})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const {
    fetch,
    isLoading
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ContentState isLoading={isLoading}>
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>;
}`,...J.parameters?.docs?.source}}}})))()}var Y,X;function Z(){return(Z=e((()=>{m(),O(),Y=u(),X=()=>{let{fetch:e,isLoading:t}=C();return(0,Y.jsx)(T,{container:!0,children:(0,Y.jsx)(h,{isLoading:t,loadingContent:`Пожалуйста, подождите...`,children:(0,Y.jsx)(D,{onSubmit:e})})})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const {
    fetch,
    isLoading
  } = useSimulateLoading();
  return <BaseContentContainer container>
      <ContentState isLoading={isLoading} loadingContent="Пожалуйста, подождите...">
        <Form onSubmit={fetch} />
      </ContentState>
    </BaseContentContainer>;
}`,...X.parameters?.docs?.source}}}})))()}var Q,$;function Se(){return(Se=e((()=>{g(),y(),x(),I(),l(),m(),O(),Q=u(),$=()=>{let{fetchWithError:e,isLoading:n,error:r}=C(),i={isLoading:n,isError:!!r,errorState:{imgSrc:F,imgAlt:`Ошибка`,onRetry:e,errorList:[r]}};return(0,Q.jsx)(t,{imagesMap:{defaultErrorImgSrc:_,noDataImgSrc:v,outdatedReleaseErrorImgSrc:b},children:(0,Q.jsxs)(ce,{children:[(0,Q.jsx)(h,{...i,children:(0,Q.jsx)(D,{onSubmit:e})}),(0,Q.jsx)(h,{...i,placeholderSize:`medium`,children:(0,Q.jsx)(D,{onSubmit:e})}),(0,Q.jsx)(h,{...i,placeholderSize:`large`,children:(0,Q.jsx)(D,{onSubmit:e})})]})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const {
    fetchWithError,
    isLoading,
    error
  } = useSimulateLoading();
  const baseProps = {
    isLoading,
    isError: Boolean(error),
    errorState: {
      imgSrc: techSupIllustration,
      imgAlt: 'Ошибка',
      onRetry: fetchWithError,
      errorList: [error]
    }
  };
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: errorIllustration,
    noDataImgSrc: noDataIllustration,
    outdatedReleaseErrorImgSrc: outdatedReleaseIllustration
  }}>
      <MultiExampleContainer>
        <ContentState {...baseProps}>
          <Form onSubmit={fetchWithError} />
        </ContentState>
        <ContentState {...baseProps} placeholderSize="medium">
          <Form onSubmit={fetchWithError} />
        </ContentState>
        <ContentState {...baseProps} placeholderSize="large">
          <Form onSubmit={fetchWithError} />
        </ContentState>
      </MultiExampleContainer>
    </ConfigProvider>;
}`,...$.parameters?.docs?.source},description:{story:`Переопределение общего размера Placeholder

По умолчанию \`small\``,...$.parameters?.docs?.description}}};try{$.displayName=`PlaceholderSize`,$.__docgenInfo={description:`Переопределение общего размера Placeholder

По умолчанию \`small\``,displayName:`PlaceholderSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ContentState/stories/PlaceholderSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ce,we;function Te(){return(Te=e((()=>{m(),de(),fe(),pe(),me(),ye(),be(),xe(),Z(),Se(),Ce={title:`Statuses/ContentState`,component:h,parameters:{docs:{description:{component:`ContentState - это компонент, позволяющий отображать статусы выполнения асинхронных операций (загрузка, успех и ошибка)
Содержит внутри себя [ErrorBoundary](/docs/other-errorboundary--docs), отлавливающий ошибки рендера или загрузки js chunk`}}}},we=[`Interaction`,`BasicUsage`,`IsLoading`,`LoadingContent`,`FormLoadingBehavior`,`ErrorState`,`ErrorStateWithCustomImg`,`PlaceholderSize`,`CustomState`]})))()}Te();export{A as BasicUsage,M as CustomState,P as ErrorState,R as ErrorStateWithCustomImg,W as FormLoadingBehavior,K as Interaction,J as IsLoading,X as LoadingContent,$ as PlaceholderSize,we as __namedExportsOrder,Ce as default};