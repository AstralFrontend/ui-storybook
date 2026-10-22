import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-DREXElCf.js";import{f as r,p as i}from"./PageContentHeaderActions-DAN3wSI_.js";import{n as a,t as o}from"./DashboardLayout-Dt_FPbrH.js";import{i as s,o as c,s as l,t as u}from"./PageContent-JJi-PS79.js";import{a as d,i as f,n as p,t as m}from"./MinimizeOutlineMd-BquLc5ye.js";import{t as h}from"./PageLayout-DA6d7QCJ.js";import{t as g}from"./PageLayout-D3Z51RZP.js";import{$t as _,U as v,in as y,t as b,z as x}from"./common-DsdzW3AE.js";import{i as S}from"./MockScreen-CqGbJsWS.js";import{a as C,c as w,i as T,s as E}from"./PdfViewer-DGeUEtz4.js";var D,O,k;function A(){return(A=e((()=>{D=t(),o(),b(),u(),g(),v(),w(),O=n(),k=()=>{let e=(0,D.useRef)(null);return(0,O.jsxs)(a,{children:[(0,O.jsx)(y,{}),(0,O.jsx)(x,{}),(0,O.jsx)(a.Main,{children:(0,O.jsx)(h,{header:_,content:(0,O.jsx)(s,{scrollRef:e,children:(0,O.jsx)(E,{file:`./not-existing.pdf`,scrollRef:e,getErrorState:()=>({message:`Кастомная ошибка`,actions:null,errorImgSrc:`./no-data-stub.svg`,errorList:[`Кастомный список ошибок`]})})}),aside:S})})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <DashboardLayout>
      <MockDashboardHeader />
      <MockSidebar />
      <DashboardLayout.Main>
        <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
              <PdfViewer file="./not-existing.pdf" scrollRef={scrollRef} getErrorState={() => {
          return {
            message: 'Кастомная ошибка',
            actions: null,
            errorImgSrc: './no-data-stub.svg',
            errorList: ['Кастомный список ошибок']
          };
        }} />
            </PageContent>} aside={MockAside} />
      </DashboardLayout.Main>
    </DashboardLayout>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=t(),f(),m(),o(),b(),u(),r(),g(),v(),c(),w(),T(),M=n(),N=()=>{let[e,t]=(0,j.useState)(!0),[n,r]=(0,j.useState)(1),[o,c]=(0,j.useState)(1),u=e=>{r(e.numPages)},f=(0,j.useRef)(null),m=(0,j.useRef)(null);return(0,M.jsxs)(a,{isFocusedMode:e,children:[(0,M.jsx)(y,{}),(0,M.jsx)(x,{}),(0,M.jsx)(a.Main,{children:(0,M.jsx)(h,{header:(0,M.jsx)(i,{title:`Черновики`,actions:{main:[{text:e?`Свернуть`:`Развернуть`,startIcon:e?(0,M.jsx)(p,{}):(0,M.jsx)(d,{}),onClick:()=>t(e=>!e)}]}}),content:(0,M.jsx)(s,{scrollRef:f,footer:n>1&&(0,M.jsx)(l,{children:(0,M.jsx)(C,{count:n,page:o,onChangePage:c,paginationRef:m})}),children:(0,M.jsx)(E,{file:`./horizontal-one-page.pdf`,scrollRef:f,paginationRef:m,onLoadSuccess:u,onChangePage:c})}),aside:S})})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [isFocusedMode, setFocusedMode] = useState(true);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const onDocumentLoad = (pdf: PdfViewerOnLoadSuccessProps) => {
    setPageCount(pdf.numPages);
  };
  const scrollRef = useRef(null);
  const paginationRef = useRef(null);
  return <DashboardLayout isFocusedMode={isFocusedMode}>
      <MockDashboardHeader />
      <MockSidebar />
      <DashboardLayout.Main>
        <PageLayout header={<PageHeader title="Черновики" actions={{
        main: [{
          text: isFocusedMode ? 'Свернуть' : 'Развернуть',
          startIcon: isFocusedMode ? <MinimizeOutlineMd /> : <FullSizeOutlineMd />,
          onClick: () => setFocusedMode(prevState => !prevState)
        }]
      }} />} content={<PageContent scrollRef={scrollRef} footer={pageCount > 1 && <PageLayoutFooter>
                    <PdfViewerPagination count={pageCount} page={page} onChangePage={setPage} paginationRef={paginationRef} />
                  </PageLayoutFooter>}>
              <PdfViewer file="./horizontal-one-page.pdf" scrollRef={scrollRef} paginationRef={paginationRef} onLoadSuccess={onDocumentLoad} onChangePage={setPage} />
            </PageContent>} aside={MockAside} />
      </DashboardLayout.Main>
    </DashboardLayout>;
}`,...N.parameters?.docs?.source}}}})))()}var F,I,L;function R(){return(R=e((()=>{F=t(),o(),b(),u(),g(),v(),c(),w(),T(),I=n(),L=()=>{let[e,t]=(0,F.useState)(1),[n,r]=(0,F.useState)(1),i=e=>{t(e.numPages)},o=(0,F.useRef)(null),c=(0,F.useRef)(null);return(0,I.jsxs)(a,{children:[(0,I.jsx)(y,{}),(0,I.jsx)(x,{}),(0,I.jsx)(a.Main,{children:(0,I.jsx)(h,{header:_,content:(0,I.jsx)(s,{scrollRef:o,footer:e>1&&(0,I.jsx)(l,{children:(0,I.jsx)(C,{count:e,page:n,onChangePage:r,paginationRef:c})}),children:(0,I.jsx)(E,{file:`./mixed-orientation.pdf`,scrollRef:o,paginationRef:c,onChangePage:r,onLoadSuccess:i})}),aside:S})})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const onDocumentLoad = (pdf: PdfViewerOnLoadSuccessProps) => {
    setPageCount(pdf.numPages);
  };
  const scrollRef = useRef(null);
  const paginationRef = useRef(null);
  return <DashboardLayout>
      <MockDashboardHeader />
      <MockSidebar />
      <DashboardLayout.Main>
        <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef} footer={pageCount > 1 && <PageLayoutFooter>
                    <PdfViewerPagination count={pageCount} page={page} onChangePage={setPage} paginationRef={paginationRef} />
                  </PageLayoutFooter>}>
              <PdfViewer file="./mixed-orientation.pdf" scrollRef={scrollRef} paginationRef={paginationRef} onChangePage={setPage} onLoadSuccess={onDocumentLoad} />
            </PageContent>} aside={MockAside} />
      </DashboardLayout.Main>
    </DashboardLayout>;
}`,...L.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...L.parameters?.docs?.description}}};try{L.displayName=`MixedOrientation`,L.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`MixedOrientation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/testsStories/MixedOrientation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{z=t(),o(),b(),u(),g(),v(),w(),B=n(),V=()=>{let e=(0,z.useRef)(null);return(0,B.jsxs)(a,{children:[(0,B.jsx)(y,{}),(0,B.jsx)(x,{}),(0,B.jsx)(a.Main,{children:(0,B.jsx)(h,{header:_,content:(0,B.jsx)(s,{scrollRef:e,children:(0,B.jsx)(E,{file:`./rotated.pdf`,scrollRef:e})}),aside:S})})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <DashboardLayout>
      <MockDashboardHeader />
      <MockSidebar />
      <DashboardLayout.Main>
        <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
              <PdfViewer file="./rotated.pdf" scrollRef={scrollRef} />
            </PageContent>} aside={MockAside} />
      </DashboardLayout.Main>
    </DashboardLayout>;
}`,...V.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...V.parameters?.docs?.description}}};try{V.displayName=`Rotated`,V.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`Rotated`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/testsStories/Rotated.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W;function G(){return(G=e((()=>{w(),A(),P(),R(),H(),U={title:`Files/PdfViewer/Tests`,component:E,parameters:{layout:`fullscreen`}},W=[`FocusedMode`,`CustomErrorState`,`Rotated`,`MixedOrientation`]})))()}G();export{k as CustomErrorState,N as FocusedMode,L as MixedOrientation,V as Rotated,W as __namedExportsOrder,U as default};