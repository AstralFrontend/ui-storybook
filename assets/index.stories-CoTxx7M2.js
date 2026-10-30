import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{E as t,ct as n,dt as r,ft as i,lt as a,w as ee,ya as o,za as s}from"./preview-CuWTv55L.js";import{f as te,p as c}from"./PageContentHeaderActions-CMkIr8N0.js";import{n as l,t as ne}from"./DashboardLayout-MYZc0ey3.js";import{t as u}from"./DescriptionList-Duhz7L0r.js";import{t as d}from"./DescriptionList-CWBWrtvp.js";import{t as re}from"./Filename-fqRMOAuw.js";import{t as f}from"./Filename-Bd7HUToQ.js";import{r as p,t as m}from"./PageLayout-whJDiwrs.js";import{t as h}from"./PageAsideBlock-C_T3e-bQ.js";import{t as g}from"./PageAsideBlock-YwfdiCqi.js";import{n as _,r as v,t as ie}from"./PagePinnableAside-BlYglKel.js";import{t as y}from"./TextArea-TREogqhg.js";import{t as b}from"./TextArea-C2kOjFDe.js";import{a as x,i as S,n as ae,t as oe}from"./HistoryOutlineMd-CWupQzvq.js";import{n as se,t as ce}from"./DocumentOutlineMd-DnLUdn8a.js";import{I as le,It as C,Pt as ue,Rt as de,U as w,Ut as fe,Yt as pe,Zt as me,on as T,qt as he,rn as E,sn as D,t as ge,tn as O}from"./common-BdhL0Ka3.js";import{a as k,i as A,n as j,o as M,r as N}from"./chunk-OB3PAWPO-IIIFcqDG.js";import{n as P,o as F}from"./PageAsideNavigationItem-BsQXydOX.js";import{c as I,n as _e,t as ve}from"./common-C9HkB-Hk.js";import{t as ye}from"./PageAsideNavigation-D-_ngpQG.js";var L,R,z;function B(){return(B=e((()=>{L=s(),d(),n(),g(),p(),w(),b(),r(),v(),R=o(),z=()=>{let[e,t]=(0,L.useState)(!1);return(0,R.jsx)(m,{header:O,content:E,aside:(0,R.jsxs)(_,{isPinned:e,onPin:()=>t(!e),children:[(0,R.jsx)(h,{dividerVariant:`fullWidth`,children:(0,R.jsxs)(a,{container:!0,spacing:4,children:[(0,R.jsx)(i,{variant:`h5`,children:`Чат с администратором`}),(0,R.jsx)(y,{placeholder:`Здесь вы можете оставить сообщение для администратора`})]})}),(0,R.jsx)(h,{children:(0,R.jsxs)(a,{container:!0,spacing:4,children:[(0,R.jsx)(i,{variant:`h5`,children:`Данные электронной подписи`}),(0,R.jsx)(u,{items:D,justifyContent:`space-between`,direction:`row`})]})}),(0,R.jsx)(h,{children:(0,R.jsx)(u,{items:T,justifyContent:`space-between`,direction:`row`})})]})})};try{z.displayName=`ControlledPinnableAside`,z.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`ControlledPinnableAside`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/stories/ControlledPinnableAside.story.tsx`,methods:[],props:{},tags:{}}}catch{}z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [isPinned, setIsPinned] = useState(false);
  const handleToggle = () => setIsPinned(!isPinned);
  return <PageLayout header={MockHeader} content={MockContent} aside={<PagePinnableAside isPinned={isPinned} onPin={handleToggle}>
          <PageAsideBlock dividerVariant="fullWidth">
            <Grid container spacing={4}>
              <Typography variant="h5">Чат с администратором</Typography>
              <TextArea placeholder="Здесь вы можете оставить сообщение для администратора" />
            </Grid>
          </PageAsideBlock>
          <PageAsideBlock>
            <Grid container spacing={4}>
              <Typography variant="h5">Данные электронной подписи</Typography>
              <DescriptionList items={SIGN_ITEMS} justifyContent="space-between" direction="row" />
            </Grid>
          </PageAsideBlock>
          <PageAsideBlock>
            <DescriptionList items={ADDITIONAL_SIGN_ITEMS} justifyContent="space-between" direction="row" />
          </PageAsideBlock>
        </PagePinnableAside>} />;
}`,...z.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...z.parameters?.docs?.description}}}})))()}var V,H;function U(){return(U=e((()=>{d(),n(),g(),p(),w(),b(),r(),v(),V=o(),H=()=>(0,V.jsx)(m,{header:O,content:E,aside:(0,V.jsxs)(_,{persistState:{isEnabled:!0,id:`storybook`},children:[(0,V.jsx)(h,{dividerVariant:`fullWidth`,children:(0,V.jsxs)(a,{container:!0,spacing:4,children:[(0,V.jsx)(i,{variant:`h5`,children:`Чат с администратором`}),(0,V.jsx)(y,{placeholder:`Здесь вы можете оставить сообщение для администратора`})]})}),(0,V.jsx)(h,{children:(0,V.jsxs)(a,{container:!0,spacing:4,children:[(0,V.jsx)(i,{variant:`h5`,children:`Данные электронной подписи`}),(0,V.jsx)(u,{items:D,justifyContent:`space-between`,direction:`row`})]})}),(0,V.jsx)(h,{children:(0,V.jsx)(u,{items:T,justifyContent:`space-between`,direction:`row`})})]})});try{H.displayName=`PinnableAside`,H.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`PinnableAside`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/stories/PinnableAside.story.tsx`,methods:[],props:{},tags:{}}}catch{}H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PageLayout header={MockHeader} content={MockContent} aside={<PagePinnableAside persistState={{
    isEnabled: true,
    id: 'storybook'
  }}>
          <PageAsideBlock dividerVariant="fullWidth">
            <Grid container spacing={4}>
              <Typography variant="h5">Чат с администратором</Typography>
              <TextArea placeholder="Здесь вы можете оставить сообщение для администратора" />
            </Grid>
          </PageAsideBlock>
          <PageAsideBlock>
            <Grid container spacing={4}>
              <Typography variant="h5">Данные электронной подписи</Typography>
              <DescriptionList items={SIGN_ITEMS} justifyContent="space-between" direction="row" />
            </Grid>
          </PageAsideBlock>
          <PageAsideBlock>
            <DescriptionList items={ADDITIONAL_SIGN_ITEMS} justifyContent="space-between" direction="row" />
          </PageAsideBlock>
        </PagePinnableAside>} />;
}`,...H.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...H.parameters?.docs?.description}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=s(),N(),ee(),ne(),ge(),f(),te(),de(),p(),w(),v(),G=o(),K=()=>{let e=A(),n=M([{path:`/`,index:!0,element:(0,G.jsx)(()=>{let e=k();return(0,G.jsx)(C,{redirectHandle:()=>{e(`/docList`)},header:(0,G.jsx)(c,{title:`Раздел документов`}),label:`Раздел`,aside:(0,G.jsx)(_,{persistState:{isEnabled:!0,id:`listPage`},children:(0,G.jsx)(`div`,{children:`Статичный контент для проверки сохранения состояния закрепления. Здесь может быть любой текст или компоненты.`})})},`chapter-list`)},{})},{path:`/docList`,element:(0,G.jsx)(()=>{let e=k();return(0,G.jsx)(C,{redirectHandle:()=>{e(`/doc`)},header:(0,G.jsx)(c,{title:`Документы`,backButton:{onClick:()=>{e(`/`)}}}),label:`Документ`,aside:(0,G.jsx)(_,{persistState:{isEnabled:!0,id:`listPage`},children:(0,G.jsx)(`div`,{children:`Статичный контент для проверки сохранения состояния закрепления. Здесь может быть любой текст или компоненты.`})})},`documents-list`)},{})},{path:`/doc`,element:(0,G.jsx)(()=>{let e=k(),t=()=>{e(`/`)},n=(0,W.useRef)(null);return(0,G.jsx)(m,{header:(0,G.jsx)(c,{title:(0,G.jsx)(re,{children:`Приложение 10. К ТФ договора Ген.подряда на проектирование и проведение ремонтных работ ММ, МК, МА по единому РСР.pdf`}),backButton:{onClick:t}}),content:(0,G.jsx)(pe,{scrollRef:n}),aside:(0,G.jsx)(me,{})},`document-viewer`)},{})}]);return(0,G.jsx)(t,{children:(0,G.jsxs)(l,{isFocusedMode:e.pathname===`/doc`,children:[(0,G.jsx)(l.Header,{...he}),(0,G.jsx)(l.Sidebar,{...fe}),(0,G.jsx)(l.Main,{children:n})]})})},K.decorators=[e=>(0,G.jsx)(j,{children:(0,G.jsx)(le,{children:(0,G.jsx)(e,{})})})],K.parameters={withRouter:!0};try{K.displayName=`PinnableAsidePersistState`,K.__docgenInfo={description:"Story необходимо открывать в отдельной вкладе для проверки\n\nПоддерживает два режима:\n- **Controlled**: если переданы `isPinned` и `onPin`, компонент управляется снаружи,\n  и `localStorage` не используется.\n- **Uncontrolled**: если не передан `isPinned`, состояние закрепления сохраняется в `localStorage`,\n  и его можно настраивать с помощью параметра `persistState`.\n\nПри использовании `persistState.id` можно сохранять разные состояния на разных страницах.\n\nПри использовании параметров `isPinned` и `onPin` состояние из localStorage учитываться не будет",displayName:`PinnableAsidePersistState`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/stories/PinnableAsidePersistState.story.tsx`,methods:[],props:{},tags:{}}}catch{}K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const location = useLocation();
  const DocListPage = () => {
    const navigate = useNavigate();
    const redirectToDocView = () => {
      navigate('/doc');
    };
    const redirectToChapter = () => {
      navigate('/');
    };
    return <MockPageLayout key="documents-list" redirectHandle={redirectToDocView} header={<PageHeader title="Документы" backButton={{
      onClick: redirectToChapter
    }} />} label="Документ" aside={<PagePinnableAside persistState={{
      isEnabled: true,
      id: 'listPage'
    }}>
            <div>
              Статичный контент для проверки сохранения состояния закрепления.
              Здесь может быть любой текст или компоненты.
            </div>
          </PagePinnableAside>} />;
  };
  const DocPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
      navigate('/');
    };
    const scrollRef = useRef(null);
    return <PageLayout key="document-viewer" header={<PageHeader title={<Filename>
                Приложение 10. К ТФ договора Ген.подряда на проектирование и
                проведение ремонтных работ ММ, МК, МА по единому РСР.pdf
              </Filename>} backButton={{
      onClick: handleBack
    }} />} content={<MockContent scrollRef={scrollRef} />} aside={<MockAside />} />;
  };
  const ChapterPage = () => {
    const navigate = useNavigate();
    const redirectToListView = () => {
      navigate('/docList');
    };
    return <MockPageLayout key="chapter-list" redirectHandle={redirectToListView} header={<PageHeader title="Раздел документов" />} label="Раздел" aside={<PagePinnableAside persistState={{
      isEnabled: true,
      id: 'listPage'
    }}>
            <div>
              Статичный контент для проверки сохранения состояния закрепления.
              Здесь может быть любой текст или компоненты.
            </div>
          </PagePinnableAside>} />;
  };
  const renderRoutes = useRoutes([{
    path: '/',
    index: true,
    element: <ChapterPage />
  }, {
    path: '/docList',
    element: <DocListPage />
  }, {
    path: '/doc',
    element: <DocPage />
  }]);
  return <ConfigProvider>
      <DashboardLayout isFocusedMode={location.pathname === '/doc'}>
        <DashboardLayout.Header {...MockHeader} />
        <DashboardLayout.Sidebar {...MockSidebar} />
        <DashboardLayout.Main>{renderRoutes}</DashboardLayout.Main>
      </DashboardLayout>
    </ConfigProvider>;
}`,...K.parameters?.docs?.source},description:{story:"Story необходимо открывать в отдельной вкладе для проверки\n\nПоддерживает два режима:\n- **Controlled**: если переданы `isPinned` и `onPin`, компонент управляется снаружи,\n  и `localStorage` не используется.\n- **Uncontrolled**: если не передан `isPinned`, состояние закрепления сохраняется в `localStorage`,\n  и его можно настраивать с помощью параметра `persistState`.\n\nПри использовании `persistState.id` можно сохранять разные состояния на разных страницах.\n\nПри использовании параметров `isPinned` и `onPin` состояние из localStorage учитываться не будет",...K.parameters?.docs?.description}}}})))()}var J,Y;function X(){return(X=e((()=>{ce(),S(),oe(),ye(),ve(),ie(),J=o(),Y=()=>(0,J.jsx)(I,{aside:(0,J.jsx)(_,{navigation:(0,J.jsxs)(F,{addonNavigation:(0,J.jsx)(_e,{}),children:[(0,J.jsx)(P,{isActive:!0,icon:(0,J.jsx)(se,{}),children:`Просмотр документа`}),(0,J.jsx)(P,{icon:(0,J.jsx)(x,{}),children:`Вложенные файлы`}),(0,J.jsx)(P,{icon:(0,J.jsx)(ae,{}),children:`История изменений`})]}),children:`Aside content`})});try{Y.displayName=`WithNavigation`,Y.__docgenInfo={description:`Смотрите [AsideNavigation](/docs/layouts-pagelayout-pageaside-pageasidenavigation--docs)`,displayName:`WithNavigation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/stories/WithNavigation.story.tsx`,methods:[],props:{},tags:{}}}catch{}Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <MockPageLayout aside={<PagePinnableAside navigation={<PageAsideNavigation addonNavigation={<SelectDocument />}>
              <PageAsideNavigationItem isActive icon={<DocumentOutlineMd />}>
                Просмотр документа
              </PageAsideNavigationItem>
              <PageAsideNavigationItem icon={<DocumentsOutlineMd />}>
                Вложенные файлы
              </PageAsideNavigationItem>
              <PageAsideNavigationItem icon={<HistoryOutlineMd />}>
                История изменений
              </PageAsideNavigationItem>
            </PageAsideNavigation>}>
          Aside content
        </PagePinnableAside>} />;
}`,...Y.parameters?.docs?.source},description:{story:`Смотрите [AsideNavigation](/docs/layouts-pagelayout-pageaside-pageasidenavigation--docs)`,...Y.parameters?.docs?.description}}}})))()}var Z,Q;function $(){return($=e((()=>{w(),v(),B(),U(),q(),X(),Z={title:`Layouts/PageLayout/PageAside/PagePinnableAside`,decorators:ue,component:_,parameters:{layout:`fullscreen`}},Q=[`PinnableAside`,`ControlledPinnableAside`,`PinnableAsidePersistState`,`WithNavigation`]})))()}$();export{z as ControlledPinnableAside,H as PinnableAside,K as PinnableAsidePersistState,Y as WithNavigation,Q as __namedExportsOrder,Z as default};