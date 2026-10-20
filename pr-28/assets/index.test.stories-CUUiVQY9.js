import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ji as r,ln as i,xa as a,yn as o}from"./preview-DRblasGc.js";import{n as s,r as c}from"./DashboardLayout-CZMGFnQt.js";import{i as l,t as u}from"./PageContent-CP4nB3XU.js";import{t as d}from"./PageLayout-D3nwWHvK.js";import{t as f}from"./PageLayout-rMt7c08b.js";import{I as p,V as m,in as h,n as g,t as _,z as v}from"./common-hzDPxfvx.js";var y,b,x;function S(){return(S=e((()=>{c(),_(),y=a(),b=()=>null,x=()=>(0,y.jsx)(p,{children:(0,y.jsxs)(s,{children:[(0,y.jsx)(h,{}),(0,y.jsx)(v,{}),(0,y.jsx)(s.Main,{alert:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{}),(0,y.jsx)(b,{})]}),children:(0,y.jsx)(m,{})})]})}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
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
  </StoryWrapper>`,...x.parameters?.docs?.source},description:{story:"Все модули вернули `null`: слот не занимает места",...x.parameters?.docs?.description}}};try{x.displayName=`EmptyAlertSlot`,x.__docgenInfo={description:"Все модули вернули `null`: слот не занимает места",displayName:`EmptyAlertSlot`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/stories/testStories/EmptyAlertSlot.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T,E;function D(){return(D=e((()=>{C=t(),n(),u(),f(),o(),c(),_(),w=a(),T=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,E=()=>{let[e,t]=(0,C.useState)(`profile`),[n,r]=(0,C.useState)(!1);return(0,w.jsx)(p,{children:(0,w.jsx)(g,{mobileHeaderPriorityFeature:e,shouldRenderQuestionIcon:n,children:(0,w.jsx)(s.Main,{children:(0,w.jsx)(d,{content:(0,w.jsx)(l,{children:(0,w.jsxs)(T,{children:[(0,w.jsx)(i,{onClick:()=>{t(e===`profile`?`menuOrg`:`profile`)},variant:`contained`,children:`Переключить приоритетный элемент`}),(0,w.jsx)(i,{onClick:()=>{r(!n)},variant:`contained`,children:`Переключить отображение вопроса`})]})})})})})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
не выходя за границы экрана.`,...E.parameters?.docs?.description}}};try{E.displayName=`MobileHeaderPriorityFeatureWithChildren`,E.__docgenInfo={description:`Проверяет, что при наличии дополнительных элементов (children) в Header на мобильном устройстве,
приоритетный элемент (menuOrg или profile) корректно сжимается и обрезает текст,
не выходя за границы экрана.`,displayName:`MobileHeaderPriorityFeatureWithChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardLayout/stories/testStories/MobileHeaderPriorityFeatureWithChildren.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{c(),S(),D(),O={title:`Layouts/DashboardLayout/Tests`,component:s,parameters:{layout:`fullscreen`}},k=[`MobileHeaderPriorityFeatureWithChildren`,`EmptyAlertSlot`]})))()}A();export{x as EmptyAlertSlot,E as MobileHeaderPriorityFeatureWithChildren,k as __namedExportsOrder,O as default};