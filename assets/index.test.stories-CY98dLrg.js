import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,ji as n,ln as r,ya as i,yn as a,za as o}from"./preview-CuWTv55L.js";import{n as s,r as c}from"./DashboardLayout-MYZc0ey3.js";import{i as l,t as u}from"./PageContent-BoWN7jpS.js";import{t as d}from"./PageLayout-whJDiwrs.js";import{t as f}from"./PageLayout-DOrzdkq7.js";import{I as p,V as m,ln as h,n as g,t as _,z as v}from"./common-BdhL0Ka3.js";var y,b,x;function S(){return(S=e((()=>{c(),_(),y=i(),b=()=>null,x=()=>(0,y.jsx)(p,{children:(0,y.jsxs)(s,{children:[(0,y.jsx)(h,{}),(0,y.jsx)(v,{}),(0,y.jsx)(s.Main,{alert:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{}),(0,y.jsx)(b,{})]}),children:(0,y.jsx)(m,{})})]})});try{x.displayName=`EmptyAlertSlot`,x.__docgenInfo={description:"Все модули вернули `null`: слот не занимает места",displayName:`EmptyAlertSlot`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/stories/testStories/EmptyAlertSlot.story.tsx`,methods:[],props:{},tags:{}}}catch{}x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <DashboardLayout>
      <MockDashboardHeader />
      <MockSidebar />
      <DashboardLayout.Main alert={<>
            <LicenseStatusAlert />
            <LicenseStatusAlert />
          </>}>
        <MockPageLayout />
      </DashboardLayout.Main>
    </DashboardLayout>
  </StoryWrapper>`,...x.parameters?.docs?.source},description:{story:"Все модули вернули `null`: слот не занимает места",...x.parameters?.docs?.description}}}})))()}var C,w,T,E;function D(){return(D=e((()=>{C=o(),t(),u(),f(),a(),c(),_(),w=i(),T=n.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,E=()=>{let[e,t]=(0,C.useState)(`profile`),[n,i]=(0,C.useState)(!1);return(0,w.jsx)(p,{children:(0,w.jsx)(g,{mobileHeaderPriorityFeature:e,shouldRenderQuestionIcon:n,children:(0,w.jsx)(s.Main,{children:(0,w.jsx)(d,{content:(0,w.jsx)(l,{children:(0,w.jsxs)(T,{children:[(0,w.jsx)(r,{onClick:()=>{t(e===`profile`?`menuOrg`:`profile`)},variant:`contained`,children:`Переключить приоритетный элемент`}),(0,w.jsx)(r,{onClick:()=>{i(!n)},variant:`contained`,children:`Переключить отображение вопроса`})]})})})})})})};try{E.displayName=`MobileHeaderPriorityFeatureWithChildren`,E.__docgenInfo={description:`Проверяет, что при наличии дополнительных элементов (children) в Header на мобильном устройстве,
приоритетный элемент (menuOrg или profile) корректно сжимается и обрезает текст,
не выходя за границы экрана.`,displayName:`MobileHeaderPriorityFeatureWithChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/stories/testStories/MobileHeaderPriorityFeatureWithChildren.story.tsx`,methods:[],props:{},tags:{}}}catch{}E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [mobileHeaderPriorityFeature, setMobileHeaderPriorityFeature] = useState<'profile' | 'menuOrg'>('profile');
  const [shouldRenderQuestionIcon, setShouldRenderQuestionIcon] = useState(false);
  const toggleMobileHeaderPriorityFeature = () => {
    setMobileHeaderPriorityFeature(mobileHeaderPriorityFeature === 'profile' ? 'menuOrg' : 'profile');
  };
  const toggleShouldRenderQuestionIcon = () => {
    setShouldRenderQuestionIcon(!shouldRenderQuestionIcon);
  };
  return <StoryWrapper>
      <MockDashboardLayout mobileHeaderPriorityFeature={mobileHeaderPriorityFeature} shouldRenderQuestionIcon={shouldRenderQuestionIcon}>
        <DashboardLayout.Main>
          <PageLayout content={<PageContent>
                <ButtonWrapper>
                  <Button onClick={toggleMobileHeaderPriorityFeature} variant="contained">
                    Переключить приоритетный элемент
                  </Button>
                  <Button onClick={toggleShouldRenderQuestionIcon} variant="contained">
                    Переключить отображение вопроса
                  </Button>
                </ButtonWrapper>
              </PageContent>} />
        </DashboardLayout.Main>
      </MockDashboardLayout>
    </StoryWrapper>;
}`,...E.parameters?.docs?.source},description:{story:`Проверяет, что при наличии дополнительных элементов (children) в Header на мобильном устройстве,
приоритетный элемент (menuOrg или profile) корректно сжимается и обрезает текст,
не выходя за границы экрана.`,...E.parameters?.docs?.description}}}})))()}var O,k;function A(){return(A=e((()=>{c(),S(),D(),O={title:`Layouts/DashboardLayout/Tests`,component:s,parameters:{layout:`fullscreen`}},k=[`MobileHeaderPriorityFeatureWithChildren`,`EmptyAlertSlot`]})))()}A();export{x as EmptyAlertSlot,E as MobileHeaderPriorityFeatureWithChildren,k as __namedExportsOrder,O as default};