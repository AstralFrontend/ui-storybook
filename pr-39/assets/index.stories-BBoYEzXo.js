import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Q as n,Va as r,Z as ee,dt as i,ft as a,ji as te,w as o,xa as s,yn as ne}from"./preview-BexmKZ07.js";import{i as c,t as re}from"./Tabs-CiJIf17j.js";import{t as l}from"./Link-COYmBpF1.js";import{t as u}from"./Link-Feax4bOj.js";import{t as ie}from"./TextField-BKHZHdl-.js";import{t as d}from"./Breadcrumbs-fpqY3KvE.js";import{t as ae}from"./TextField-CPA_EonV.js";import{k as f,m as p,p as m}from"./PageContentHeaderActions-DT9NgsFY.js";import{n as h,t as g}from"./DashboardLayout-CXvtGSaT.js";import{t as oe}from"./Tabs-BYW62FWg.js";import{t as se}from"./Filename-DcWjp_Og.js";import{t as ce}from"./Filename-BsNOfbVC.js";import{l as le,u as ue}from"./PageContent-CymdjOHi.js";import{r as _,t as v}from"./PageLayout-BSKrnL-t.js";import{n as y,t as de}from"./AddOutlineMd-jUV0MSGn.js";import{n as fe,t as pe}from"./CompanyOutlineMd-CwbDxrxk.js";import{n as me,t as he}from"./DocumentOutlineMd-LXmir1y8.js";import{n as ge,t as _e}from"./MedListOutlineMd-BcDVjUsG.js";import{Gt as b,I as x,It as S,Lt as C,U as ve,Ut as ye,Vt as w,Yt as be,Zt as xe,m as Se,p as T,qt as Ce,t as E,tn as we,zt as D}from"./common-D2fta_MK.js";import{a as O,i as Te,n as Ee,o as De,r as Oe}from"./chunk-62JRHF6Z-Enykkg3H.js";import{n as ke,o as Ae}from"./PageAsideNavigationItem-CzcTjOYx.js";import{t as je}from"./PageAsideNavigation-CV_TlXPA.js";var k,A;function Me(){return(Me=e((()=>{p(),S(),k=s(),A=()=>(0,k.jsx)(C,{children:(0,k.jsx)(m,{title:`Черновик`,backButton:{onClick:()=>console.log(`go back`)}})}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Черновик" backButton={{
    onClick: () => console.log('go back')
  }} />
  </StoryWrapper>`,...A.parameters?.docs?.source},description:{story:`Кнопка "Назад" — предназначена для возврата на предыдущую страницу.`,...A.parameters?.docs?.description}}};try{A.displayName=`BackButton`,A.__docgenInfo={description:`Кнопка "Назад" — предназначена для возврата на предыдущую страницу.`,displayName:`BackButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/BackButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M;function Ne(){return(Ne=e((()=>{de(),he(),_e(),f(),o(),g(),E(),u(),le(),je(),_(),ve(),i(),p(),S(),j=s(),M=()=>(0,j.jsx)(t,{children:(0,j.jsx)(x,{children:(0,j.jsxs)(h,{children:[(0,j.jsx)(h.Header,{...b}),(0,j.jsx)(h.Sidebar,{...w}),(0,j.jsx)(h.Main,{children:(0,j.jsx)(v,{header:(0,j.jsx)(m,{title:`Черновики`,description:`Вы находитесь на странице, которая содержит фильтры`,backButton:{},actions:{main:[{text:`Отклонить`,color:`error`,variant:`light`},{text:`Согласовать`,color:`primary`}],secondary:[{text:`Кнопка`},{text:`Кнопка 2`}],secondaryVisible:[{name:`Второстепенно видимая кнопка`,icon:(0,j.jsx)(y,{})}]},filters:(0,j.jsx)(T,{}),breadcrumbs:(0,j.jsxs)(d,{children:[(0,j.jsx)(l,{href:`/`,children:`Документы`}),(0,j.jsx)(l,{href:`/`,children:`Входящие`}),(0,j.jsx)(a,{children:`Договор №22`})]})}),aside:(0,j.jsx)(ue,{navigation:(0,j.jsxs)(Ae,{children:[(0,j.jsx)(ke,{isActive:!0,component:`a`,href:`/`,icon:(0,j.jsx)(me,{}),children:`Просмотр документа`}),(0,j.jsx)(ke,{component:`a`,href:`/`,target:`_blank`,icon:(0,j.jsx)(ge,{}),children:`Основные данные`})]})}),content:we})})]})})}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <ConfigProvider>
      <DashboardLayoutStoryWrapper>
        <DashboardLayout>
          <DashboardLayout.Header {...MockHeader} />
          <DashboardLayout.Sidebar {...MockSidebar} />
          <DashboardLayout.Main>
            <PageLayout header={<PageHeader title="Черновики" description="Вы находитесь на странице, которая содержит фильтры" backButton={{}} actions={{
            main: [{
              text: 'Отклонить',
              color: 'error',
              variant: 'light'
            }, {
              text: 'Согласовать',
              color: 'primary'
            }],
            secondary: [{
              text: 'Кнопка'
            }, {
              text: 'Кнопка 2'
            }],
            secondaryVisible: [{
              name: 'Второстепенно видимая кнопка',
              icon: <AddOutlineMd />
            }]
          }} filters={<MockFilters />} breadcrumbs={<Breadcrumbs>
                      <Link href="/">Документы</Link>
                      <Link href="/">Входящие</Link>
                      <Typography>Договор №22</Typography>
                    </Breadcrumbs>} />} aside={<PageAside navigation={<PageAsideNavigation>
                      <PageAsideNavigationItem isActive component="a" href="/" icon={<DocumentOutlineMd />}>
                        Просмотр документа
                      </PageAsideNavigationItem>
                      <PageAsideNavigationItem component="a" href="/" target="_blank" icon={<MedListOutlineMd />}>
                        Основные данные
                      </PageAsideNavigationItem>
                    </PageAsideNavigation>} />} content={MockContent} />
          </DashboardLayout.Main>
        </DashboardLayout>
      </DashboardLayoutStoryWrapper>
    </ConfigProvider>;
}`,...M.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...M.parameters?.docs?.description}}};try{M.displayName=`BasicUsage`,M.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,Pe,Fe,P;function Ie(){return(Ie=e((()=>{ne(),p(),S(),N=s(),Pe=te.a`
  display: inline-flex;
  grid-column: 1;
  grid-row: 2 / 4;
  align-items: center;

  margin-right: 10px;

  line-height: 1.7rem;
  vertical-align: middle;
`,Fe=({to:e})=>(0,N.jsx)(Pe,{href:e,children:`Ref`}),P=()=>(0,N.jsx)(C,{children:(0,N.jsx)(m,{title:`Слева будет ссылка`,backButton:{component:Fe,to:`/`}})}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Слева будет ссылка" backButton={{
    component: CustomLink,
    to: '/'
  }} />
  </StoryWrapper>`,...P.parameters?.docs?.source},description:{story:"BackButton поддерживает пропс `component`",...P.parameters?.docs?.description}}};try{P.displayName=`CustomBackButton`,P.__docgenInfo={description:"BackButton поддерживает пропс `component`",displayName:`CustomBackButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/CustomBackButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I;function Le(){return(Le=e((()=>{ee(),i(),p(),S(),F=s(),I=()=>(0,F.jsx)(C,{children:(0,F.jsx)(m,{title:(0,F.jsxs)(a,{variant:`inherit`,children:[`Очень длинный заголовок черновика, который не будет отображаться в одну строку \xA0`,(0,F.jsx)(n,{label:`Статус`,color:`primary`,variant:`light`,size:`medium`})]}),actions:D,backButton:{}})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title={<Typography variant="inherit">
          Очень длинный заголовок черновика, который не будет отображаться в
          одну строку &nbsp;
          <Tag label="Статус" color="primary" variant="light" size="medium" />
        </Typography>} actions={MockActions} backButton={{}} />
  </StoryWrapper>`,...I.parameters?.docs?.source},description:{story:"Если `title` не является строкой, Overflow работать не будет",...I.parameters?.docs?.description}}};try{I.displayName=`CustomTitle`,I.__docgenInfo={description:"Если `title` не является строкой, Overflow работать не будет",displayName:`CustomTitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/CustomTitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Re,L;function ze(){return(ze=e((()=>{p(),S(),Re=s(),L=()=>(0,Re.jsx)(C,{children:(0,Re.jsx)(m,{title:`Черновик`,description:`Вы находитесь на странице, которая...`})}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Черновик" description="Вы находитесь на странице, которая..." />
  </StoryWrapper>`,...L.parameters?.docs?.source},description:{story:`Доп. описание к текущей странице — может быть текстом или компонентом [Description](/story/other-description--docs).`,...L.parameters?.docs?.description}}};try{L.displayName=`Description`,L.__docgenInfo={description:`Доп. описание к текущей странице — может быть текстом или компонентом [Description](/story/other-description--docs).`,displayName:`Description`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/Description.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Be,R,z;function Ve(){return(Ve=e((()=>{Be=r(),Oe(),o(),g(),E(),ce(),_(),p(),S(),R=s(),z=()=>{let e=Te(),n=De([{path:`/`,index:!0,element:(0,R.jsx)(()=>{let e=O();return(0,R.jsx)(ye,{redirectHandle:()=>{e(`/docList`)},header:(0,R.jsx)(m,{title:`Раздел документов`}),label:`Раздел`},`chapter-list`)},{})},{path:`/docList`,element:(0,R.jsx)(()=>{let e=O();return(0,R.jsx)(ye,{redirectHandle:()=>{e(`/doc`)},header:(0,R.jsx)(m,{title:`Документы`,backButton:{onClick:()=>{e(`/`)}}}),label:`Документ`},`documents-list`)},{})},{path:`/doc`,element:(0,R.jsx)(()=>{let e=O(),t=()=>{e(`/`)},n=(0,Be.useRef)(null);return(0,R.jsx)(v,{header:(0,R.jsx)(m,{title:(0,R.jsx)(se,{children:`Приложение 10. К ТФ договора Ген.подряда на проектирование и проведение ремонтных работ ММ, МК, МА по единому РСР.pdf`}),backButton:{onClick:t}}),content:(0,R.jsx)(Ce,{scrollRef:n}),aside:(0,R.jsx)(be,{})},`document-viewer`)},{})}]);return(0,R.jsx)(t,{children:(0,R.jsxs)(h,{isFocusedMode:e.pathname===`/doc`,children:[(0,R.jsx)(h.Header,{...b}),(0,R.jsx)(h.Sidebar,{...w}),(0,R.jsx)(h.Main,{children:n})]})})},z.decorators=[e=>(0,R.jsx)(Ee,{children:(0,R.jsx)(x,{children:(0,R.jsx)(e,{})})})],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
    }} />} label="Документ" />;
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
    return <MockPageLayout key="chapter-list" redirectHandle={redirectToListView} header={<PageHeader title="Раздел документов" />} label="Раздел" />;
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
}`,...z.parameters?.docs?.source},description:{story:"Можно глобально определять через ConfigProvider параметром `components.layout.defaultProps`\n\nC помощью параметра `shouldUpdateDocumentTitle` можно включать/отключать функцию для отдельных страниц\n\n**Важно: При использовании массива ReactNode в параметре `title` необходимо использовать параметр `htmlTitle` для изменения заголовка в html.**",...z.parameters?.docs?.description}}};try{z.displayName=`DynamicTitle`,z.__docgenInfo={description:"Можно глобально определять через ConfigProvider параметром `components.layout.defaultProps`\n\nC помощью параметра `shouldUpdateDocumentTitle` можно включать/отключать функцию для отдельных страниц\n\n**Важно: При использовании массива ReactNode в параметре `title` необходимо использовать параметр `htmlTitle` для изменения заголовка в html.**",displayName:`DynamicTitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/DynamicTitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var B,V;function He(){return(He=e((()=>{ce(),p(),S(),B=s(),V=()=>(0,B.jsx)(C,{children:(0,B.jsx)(m,{title:(0,B.jsx)(se,{children:`Приложение 10. К ТФ договора Ген.подряда на проектирование и проведение ремонтных работ ММ, МК, МА по единому РСР.pdf`}),actions:D,backButton:{}})}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title={<Filename>
          Приложение 10. К ТФ договора Ген.подряда на проектирование и
          проведение ремонтных работ ММ, МК, МА по единому РСР.pdf
        </Filename>} actions={MockActions} backButton={{}} />
  </StoryWrapper>`,...V.parameters?.docs?.source},description:{story:"`Title` может быть компонентом [Filename](/story/files-filename--docs)",...V.parameters?.docs?.description}}};try{V.displayName=`FilenameTitle`,V.__docgenInfo={description:"`Title` может быть компонентом [Filename](/story/files-filename--docs)",displayName:`FilenameTitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/FilenameTitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U;function Ue(){return(Ue=e((()=>{f(),o(),g(),E(),u(),_(),ve(),ae(),i(),p(),S(),H=s(),U=()=>(0,H.jsx)(t,{children:(0,H.jsx)(x,{children:(0,H.jsxs)(h,{children:[(0,H.jsx)(h.Header,{...b}),(0,H.jsx)(h.Sidebar,{...w}),(0,H.jsx)(h.Main,{children:(0,H.jsx)(v,{header:(0,H.jsx)(m,{title:`Черновики`,backButton:{},actions:{main:[{text:`Отклонить`,color:`error`,variant:`light`},{text:`Согласовать`,color:`primary`}]},subheader:(0,H.jsx)(ie,{placeholder:`Поиск на странице...`,size:`small`}),breadcrumbs:(0,H.jsxs)(d,{children:[(0,H.jsx)(l,{href:`/`,children:`Документы`}),(0,H.jsx)(l,{href:`/`,children:`Входящие`}),(0,H.jsx)(a,{children:`Договор №22`})]})}),content:we})})]})})}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ConfigProvider>
      <DashboardLayoutStoryWrapper>
        <DashboardLayout>
          <DashboardLayout.Header {...MockHeader} />
          <DashboardLayout.Sidebar {...MockSidebar} />
          <DashboardLayout.Main>
            <PageLayout header={<PageHeader title="Черновики" backButton={{}} actions={{
            main: [{
              text: 'Отклонить',
              color: 'error',
              variant: 'light'
            }, {
              text: 'Согласовать',
              color: 'primary'
            }]
          }} subheader={<TextField placeholder="Поиск на странице..." size="small" />} breadcrumbs={<Breadcrumbs>
                      <Link href="/">Документы</Link>
                      <Link href="/">Входящие</Link>
                      <Typography>Договор №22</Typography>
                    </Breadcrumbs>} />} content={MockContent} />
          </DashboardLayout.Main>
        </DashboardLayout>
      </DashboardLayoutStoryWrapper>
    </ConfigProvider>;
}`,...U.parameters?.docs?.source},description:{story:`Область, для размещения дополнительного контента`,...U.parameters?.docs?.description}}};try{U.displayName=`Subheader`,U.__docgenInfo={description:`Область, для размещения дополнительного контента`,displayName:`Subheader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/Subheader.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var We,W;function Ge(){return(Ge=e((()=>{p(),S(),We=s(),W=()=>(0,We.jsx)(C,{children:(0,We.jsx)(m,{title:`Черновик`,actions:D,backButton:{}})}),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Черновик" actions={MockActions} backButton={{}} />
  </StoryWrapper>`,...W.parameters?.docs?.source}}}})))()}var Ke,G,K;function qe(){return(qe=e((()=>{Ke=r(),de(),pe(),p(),S(),G=s(),K=()=>{let[e,t]=(0,Ke.useState)(!0);return(0,Ke.useEffect)(()=>{setTimeout(()=>{t(!1)},1e3)},[]),(0,G.jsx)(C,{children:(0,G.jsx)(m,{title:`Черновик`,actions:{isLoading:e,main:[{text:`действие 1`,startIcon:(0,G.jsx)(y,{})},{text:`действие 2`,isNested:!0,actions:[{text:`действие в списке 1`},{text:`действие в списке 2`}]},{text:`действие 3`,color:`error`}],secondaryVisible:[{name:`О компании`,icon:(0,G.jsx)(fe,{})},{name:`Добавить`,icon:(0,G.jsx)(y,{}),disabled:!0,disabledReason:`Действие недоступно, т.к. у вас недостаточно прав`}],secondary:[{text:`Второстепенное действие 1`},{text:`Второстепенное действие 2`}]}})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <StoryWrapper>
      <PageHeader title="Черновик" actions={{
      isLoading,
      main: [{
        text: 'действие 1',
        startIcon: <AddOutlineMd />
      }, {
        text: 'действие 2',
        isNested: true,
        actions: [{
          text: 'действие в списке 1'
        }, {
          text: 'действие в списке 2'
        }]
      }, {
        text: 'действие 3',
        color: 'error'
      }],
      secondaryVisible: [{
        name: 'О компании',
        icon: <CompanyOutlineMd />
      }, {
        name: 'Добавить',
        icon: <AddOutlineMd />,
        disabled: true,
        disabledReason: 'Действие недоступно, т.к. у вас недостаточно прав'
      }],
      secondary: [{
        text: 'Второстепенное действие 1'
      }, {
        text: 'Второстепенное действие 2'
      }]
    }} />
    </StoryWrapper>;
}`,...K.parameters?.docs?.source},description:{story:`Кнопки действий — подробнее в компоненте [ActionGroup](/story/buttons-actionGroup--docs).`,...K.parameters?.docs?.description}}};try{K.displayName=`WithActions`,K.__docgenInfo={description:`Кнопки действий — подробнее в компоненте [ActionGroup](/story/buttons-actionGroup--docs).`,displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function Je(){return(Je=e((()=>{f(),u(),i(),p(),S(),q=s(),J=()=>(0,q.jsx)(C,{children:(0,q.jsx)(m,{title:`Черновик`,breadcrumbs:(0,q.jsxs)(d,{maxItems:3,children:[(0,q.jsx)(l,{href:`/`,children:`Раздел 1`}),(0,q.jsx)(l,{href:`/`,children:`Раздел 2`}),(0,q.jsx)(l,{href:`/`,children:`Раздел 3`}),(0,q.jsx)(l,{href:`/`,children:`Раздел 4`}),(0,q.jsx)(a,{children:`Раздел 5`})]})})}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Черновик" breadcrumbs={<Breadcrumbs maxItems={3}>
          <Link href="/">Раздел 1</Link>
          <Link href="/">Раздел 2</Link>
          <Link href="/">Раздел 3</Link>
          <Link href="/">Раздел 4</Link>
          <Typography>Раздел 5</Typography>
        </Breadcrumbs>} />
  </StoryWrapper>`,...J.parameters?.docs?.source},description:{story:`Хлебные крошки — подробнее в компоненте [Breadcrumbs](/story/navigation-breadcrumbs--docs).`,...J.parameters?.docs?.description}}};try{J.displayName=`WithBreadcrumbs`,J.__docgenInfo={description:`Хлебные крошки — подробнее в компоненте [Breadcrumbs](/story/navigation-breadcrumbs--docs).`,displayName:`WithBreadcrumbs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/WithBreadcrumbs.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X,Z;function Ye(){return(Ye=e((()=>{de(),pe(),Se(),ne(),p(),Y=s(),X=te.div`
  width: 100%;
  padding: ${({theme:e})=>e.spacing(4,6)};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(8)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    min-height: 48px;
    padding-top: ${({theme:e})=>e.spacing(4)};

    overflow-wrap: break-word;

    background-color: ${({theme:e})=>e.palette.grey[100]};
  }
`,Z=()=>(0,Y.jsxs)(X,{children:[(0,Y.jsx)(m,{title:`Несколько действий — схлопывание происходит`,actions:{main:[{text:`Согласовать`}],secondaryVisible:[{name:`О компании`,icon:(0,Y.jsx)(fe,{})}],secondary:[{text:`Дополнительно`}]},filters:(0,Y.jsx)(T,{})}),(0,Y.jsx)(m,{title:`Одно main действие — схлопывания нет`,actions:{main:[{text:`Единственное основное действие`}]},filters:(0,Y.jsx)(T,{})}),(0,Y.jsx)(m,{title:`Одно secondaryVisible действие — схлопывания нет`,actions:{secondaryVisible:[{name:`Единственное вторичное видимое действие`,icon:(0,Y.jsx)(y,{})}]},filters:(0,Y.jsx)(T,{})}),(0,Y.jsx)(m,{title:`Одно secondary действие — схлопывания нет`,actions:{secondary:[{text:`Единственное вторичное действие`}]},filters:(0,Y.jsx)(T,{})})]}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`styled.div\`
  width: 100%;
  padding: \${({
  theme
}) => theme.spacing(4, 6)};
  display: flex;
  flex-direction: column;
  gap: \${({
  theme
}) => theme.spacing(8)};

  \${({
  theme
}) => theme.breakpoints.down('mobile')} {
    min-height: 48px;
    padding-top: \${({
  theme
}) => theme.spacing(4)};

    overflow-wrap: break-word;

    background-color: \${({
  theme
}) => theme.palette.grey[100]};
  }
\``,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <PageHeader title="Несколько действий — схлопывание происходит" actions={{
    main: [{
      text: 'Согласовать'
    }],
    secondaryVisible: [{
      name: 'О компании',
      icon: <CompanyOutlineMd />
    }],
    secondary: [{
      text: 'Дополнительно'
    }]
  }} filters={<MockFilters />} />

    <PageHeader title="Одно main действие — схлопывания нет" actions={{
    main: [{
      text: 'Единственное основное действие'
    }]
  }} filters={<MockFilters />} />

    <PageHeader title="Одно secondaryVisible действие — схлопывания нет" actions={{
    secondaryVisible: [{
      name: 'Единственное вторичное видимое действие',
      icon: <AddOutlineMd />
    }]
  }} filters={<MockFilters />} />

    <PageHeader title="Одно secondary действие — схлопывания нет" actions={{
    secondary: [{
      text: 'Единственное вторичное действие'
    }]
  }} filters={<MockFilters />} />
  </StoryWrapper>`,...Z.parameters?.docs?.source},description:{story:`При наличии фильтров все действия на laptop-разрешениях меньше 1366px убираются в кнопку с троеточием.

**Исключение:** схлопывание не происходит, если присутствует только одно действие.`,...Z.parameters?.docs?.description}}};try{X.displayName=`StoryWrapper`,X.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/WithFilters.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}try{Z.displayName=`WithFilters`,Z.__docgenInfo={description:`При наличии фильтров все действия на laptop-разрешениях меньше 1366px убираются в кнопку с троеточием.

**Исключение:** схлопывание не происходит, если присутствует только одно действие.`,displayName:`WithFilters`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/WithFilters.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Xe,Q,$;function Ze(){return(Ze=e((()=>{Xe=r(),f(),o(),g(),E(),u(),_(),ve(),oe(),i(),p(),S(),Q=s(),$=()=>{let[e,n]=(0,Xe.useState)(0),r=(e,t)=>{n(t)};return(0,Q.jsx)(t,{children:(0,Q.jsx)(x,{children:(0,Q.jsxs)(h,{children:[(0,Q.jsx)(h.Header,{...b}),(0,Q.jsx)(h.Sidebar,{...w}),(0,Q.jsx)(h.Main,{children:(0,Q.jsx)(v,{header:(0,Q.jsx)(m,{title:`Черновики`,backButton:{},actions:{main:[{text:`Отклонить`,color:`error`,variant:`light`},{text:`Согласовать`,color:`primary`}]},filters:(0,Q.jsx)(T,{}),tabs:(0,Q.jsxs)(re,{value:e,onChange:r,children:[(0,Q.jsx)(c,{label:`Документы`}),(0,Q.jsx)(c,{label:`Договоры`}),(0,Q.jsx)(c,{label:`Отчёты`}),(0,Q.jsx)(c,{label:`Счета`}),(0,Q.jsx)(c,{label:`Прочее`})]}),breadcrumbs:(0,Q.jsxs)(d,{children:[(0,Q.jsx)(l,{href:`/`,children:`Документы`}),(0,Q.jsx)(l,{href:`/`,children:`Входящие`}),(0,Q.jsx)(a,{children:`Договор №22`})]})}),content:we})})]})})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return <ConfigProvider>
      <DashboardLayoutStoryWrapper>
        <DashboardLayout>
          <DashboardLayout.Header {...MockHeader} />
          <DashboardLayout.Sidebar {...MockSidebar} />
          <DashboardLayout.Main>
            <PageLayout header={<PageHeader title="Черновики" backButton={{}} actions={{
            main: [{
              text: 'Отклонить',
              color: 'error',
              variant: 'light'
            }, {
              text: 'Согласовать',
              color: 'primary'
            }]
          }} filters={<MockFilters />} tabs={<Tabs value={tabValue} onChange={handleChange}>
                      <Tab label="Документы" />
                      <Tab label="Договоры" />
                      <Tab label="Отчёты" />
                      <Tab label="Счета" />
                      <Tab label="Прочее" />
                    </Tabs>} breadcrumbs={<Breadcrumbs>
                      <Link href="/">Документы</Link>
                      <Link href="/">Входящие</Link>
                      <Typography>Договор №22</Typography>
                    </Breadcrumbs>} />} content={MockContent} />
          </DashboardLayout.Main>
        </DashboardLayout>
      </DashboardLayoutStoryWrapper>
    </ConfigProvider>;
}`,...$.parameters?.docs?.source},description:{story:`Вкладки — подробнее в компоненте [Tabs](/story/navigation-tabs--docs).`,...$.parameters?.docs?.description}}};try{$.displayName=`WithTabs`,$.__docgenInfo={description:`Вкладки — подробнее в компоненте [Tabs](/story/navigation-tabs--docs).`,displayName:`WithTabs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/WithTabs.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Qe,$e;function et(){return(et=e((()=>{p(),Me(),Ne(),Ie(),Le(),S(),ze(),Ve(),He(),Ue(),Ge(),qe(),Je(),Ye(),Ze(),Qe={title:`Layouts/PageLayout/PageHeader`,component:m,decorators:xe,parameters:{layout:`fullscreen`,docs:{description:{component:`**PageHeader** — вводная часть страницы. Компонент состоит из:

**Title** - текст заголовка страницы — чаще всего совпадает с названием раздела в Sidebar. Может быть текстом или компонентом [Filename](/story/files-filename--docs).

**Breadcrumbs** - хлебные крошки — подробнее в компоненте [Breadcrumbs](/story/navigation-breadcrumbs--docs).

**BackButton** - кнопка "Назад" — предназначена для возврата на предыдущую страницу.

**Description** - доп. описание к текущей странице — может быть текстом или компонентом [Description](/story/other-description--docs).

**Actions** - кнопки действий — подробнее в компоненте [ActionGroup](/story/buttons-actionGroup--docs).

**Tabs** - вкладки — подробнее в компоненте [Tabs](/story/navigation-tabs--docs).

**Subheader** - область, для размещения дополнительных действий — включает в себя поиск, фильтры и элементы сортировки.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=652-88353)`}}}},$e=[`BasicUsage`,`Title`,`CustomTitle`,`FilenameTitle`,`DynamicTitle`,`WithActions`,`WithFilters`,`WithBreadcrumbs`,`WithTabs`,`BackButton`,`CustomBackButton`,`Description`,`Subheader`]})))()}et();export{A as BackButton,M as BasicUsage,P as CustomBackButton,I as CustomTitle,L as Description,z as DynamicTitle,V as FilenameTitle,U as Subheader,W as Title,K as WithActions,J as WithBreadcrumbs,Z as WithFilters,$ as WithTabs,$e as __namedExportsOrder,Qe as default};