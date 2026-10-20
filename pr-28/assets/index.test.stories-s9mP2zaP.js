import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,cn as r,dt as i,ft as a,ji as o,ln as s,w as c,xa as l,yn as u}from"./preview-C162HGvI.js";import{t as d}from"./Link-D95ey-zC.js";import{t as f}from"./Link-BuMi-QA9.js";import{t as p}from"./Breadcrumbs-Bhnk4q5n.js";import{k as m,m as h,p as g}from"./PageContentHeaderActions-BkUXgPWr.js";import{n as _,t as v}from"./AddOutlineMd-DQxL4ycH.js";import{p as y,t as b}from"./common-ffPaMYVg.js";var x,S,C,w,T,E,D;function O(){return(O=e((()=>{x=n(),v(),m(),r(),c(),b(),f(),u(),i(),h(),S=l(),C=o.div`
  width: 1000px;
  padding: 20px;
`,w=o.div`
  width: 100%;
  height: 1px;
  margin: ${({theme:e})=>e.spacing(3,0)};

  background: grey;
`,T={main:[{text:`Согласовать`}],secondary:[{text:`Кнопка`},{text:`Кнопка 2`}],secondaryVisible:[{name:`Второстепенно видимая кнопка`,icon:(0,S.jsx)(_,{})}]},E=(0,S.jsxs)(p,{children:[(0,S.jsx)(d,{href:`/`,children:`Документы`}),(0,S.jsx)(d,{href:`/`,children:`Входящие`}),(0,S.jsx)(a,{children:`Договор №22`})]}),D=()=>{let[e,n]=(0,x.useState)(!1),[r,i]=(0,x.useState)(!1),[a,o]=(0,x.useState)(!1);return(0,S.jsxs)(t,{nextFeatureFlags:{showFocusModeButtonOnLaptop:e,showFocusModeButtonOnDesktop:r},components:{dataGrid:{defaultProps:{disableMinHeight:!0}}},children:[(0,S.jsxs)(C,{children:[(0,S.jsx)(g,{title:`Черновики`,description:`Вы находитесь на странице, которая содержит Subheader`,backButton:{},actions:T,breadcrumbs:E,filters:a&&(0,S.jsx)(y,{})}),(0,S.jsx)(w,{}),(0,S.jsx)(g,{title:`Черновики`,description:`Вы находитесь на странице, которая содержит Subheader`,backButton:{},actions:T,filters:a&&(0,S.jsx)(y,{})}),(0,S.jsx)(w,{}),(0,S.jsx)(g,{title:`Черновики`,backButton:{},actions:T,breadcrumbs:E,filters:a&&(0,S.jsx)(y,{})}),(0,S.jsx)(w,{}),(0,S.jsx)(g,{title:`Черновики`,backButton:{},actions:T,filters:a&&(0,S.jsx)(y,{})})]}),(0,S.jsx)(s,{onClick:()=>{n(!e),i(!r)},children:`Toggle Focused Mode Button`}),(0,S.jsx)(s,{onClick:()=>{o(!a)},children:`Toggle Filters`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`styled.div\`
  width: 1000px;
  padding: 20px;
\``,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`styled.div\`
  width: 100%;
  height: 1px;
  margin: \${({
  theme
}) => theme.spacing(3, 0)};

  background: grey;
\``,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [showFocusModeButtonOnLaptop, setShowFocusModeButtonOnLaptop] = useState(false);
  const [showFocusModeButtonOnDesktop, setShowFocusModeButtonOnDesktop] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  return <ConfigProvider nextFeatureFlags={{
    showFocusModeButtonOnLaptop,
    showFocusModeButtonOnDesktop
  }} components={{
    dataGrid: {
      defaultProps: {
        disableMinHeight: true
      }
    }
  }}>
      <StoryWrapper>
        <PageHeader title="Черновики" description="Вы находитесь на странице, которая содержит Subheader" backButton={{}} actions={MockActions} breadcrumbs={MockBreadcrumbs} filters={showFilters && <MockFilters />} />

        <Divider />

        <PageHeader title="Черновики" description="Вы находитесь на странице, которая содержит Subheader" backButton={{}} actions={MockActions} filters={showFilters && <MockFilters />} />

        <Divider />

        <PageHeader title="Черновики" backButton={{}} actions={MockActions} breadcrumbs={MockBreadcrumbs} filters={showFilters && <MockFilters />} />

        <Divider />

        <PageHeader title="Черновики" backButton={{}} actions={MockActions} filters={showFilters && <MockFilters />} />
      </StoryWrapper>

      <Button onClick={() => {
      setShowFocusModeButtonOnLaptop(!showFocusModeButtonOnLaptop);
      setShowFocusModeButtonOnDesktop(!showFocusModeButtonOnDesktop);
    }}>
        Toggle Focused Mode Button
      </Button>
      <Button onClick={() => {
      setShowFilters(!showFilters);
    }}>
        Toggle Filters
      </Button>
    </ConfigProvider>;
}`,...D.parameters?.docs?.source}}};try{C.displayName=`StoryWrapper`,C.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/testsStories/States.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}try{w.displayName=`Divider`,w.__docgenInfo={description:``,displayName:`Divider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/stories/testsStories/States.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var k,A;function j(){return(j=e((()=>{h(),O(),k={title:`Layouts/PageLayout/PageHeader/Tests`,component:g,parameters:{layout:`fullscreen`}},A=[`States`]})))()}j();export{D as States,A as __namedExportsOrder,k as default};