import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{E as t,w as n,ya as r,za as i}from"./preview-Bh-2MF8C.js";import{i as a,o,s,t as c}from"./PageContent-BprI2BeF.js";import{t as l}from"./PageLayout-BxKft2IQ.js";import{t as u}from"./PageLayout-35Y_d_Vo.js";import{Pt as d,U as f,tn as p}from"./common-DPHbL5Z2.js";import{i as m}from"./MockScreen-lJV-9Kel.js";import{a as h,c as g,i as _,s as v}from"./PdfViewer-BBEW0qAT.js";var y,b,x;function S(){return(S=e((()=>{y=i(),c(),u(),f(),g(),b=r(),x=()=>{let e=(0,y.useRef)(null);return(0,b.jsx)(l,{header:p,content:(0,b.jsx)(a,{scrollRef:e,children:(0,b.jsx)(v,{file:`./vertical-one-page.pdf`,scrollRef:e})}),aside:m})};try{x.displayName=`BasicUsage`,x.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./vertical-one-page.pdf" scrollRef={scrollRef} />
        </PageContent>} aside={MockAside} />;
}`,...x.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...x.parameters?.docs?.description}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=i(),c(),u(),f(),g(),w=r(),T=()=>{let e=(0,C.useRef)(null);return(0,w.jsx)(l,{header:p,content:(0,w.jsx)(a,{scrollRef:e,children:(0,w.jsx)(v,{file:`./vertical-many-pages.pdf`,scrollRef:e,enabledZoom:!1})}),aside:m})};try{T.displayName=`DisabledZoom`,T.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке.

С помощью параметр \`enabledZoom\` можно выключить функционал масштабирования у компонента`,displayName:`DisabledZoom`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/DisabledZoom.story.tsx`,methods:[],props:{},tags:{}}}catch{}T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./vertical-many-pages.pdf" scrollRef={scrollRef} enabledZoom={false} />
        </PageContent>} aside={MockAside} />;
}`,...T.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке.

С помощью параметр \`enabledZoom\` можно выключить функционал масштабирования у компонента`,...T.parameters?.docs?.description}}}})))()}var D,O,k;function A(){return(A=e((()=>{D=i(),c(),u(),f(),g(),O=r(),k=()=>{let e=(0,D.useRef)(null);return(0,O.jsx)(l,{header:p,content:(0,O.jsx)(a,{scrollRef:e,children:(0,O.jsx)(v,{file:`./horizontal-many-pages.pdf`,scrollRef:e})}),aside:m})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./horizontal-many-pages.pdf" scrollRef={scrollRef} />
        </PageContent>} aside={MockAside} />;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=i(),n(),c(),u(),f(),g(),M=r(),N=()=>{let e=(0,j.useRef)(null);return(0,M.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error-data-stub.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,M.jsx)(l,{header:p,content:(0,M.jsx)(a,{scrollRef:e,children:(0,M.jsx)(v,{file:`./not-existing.pdf`,scrollRef:e})})})})};try{N.displayName=`WithError`,N.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`WithError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/WithError.story.tsx`,methods:[],props:{},tags:{}}}catch{}N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error-data-stub.svg',
    noDataImgSrc: '',
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <PdfViewer file="./not-existing.pdf" scrollRef={scrollRef} />
          </PageContent>} />
    </ConfigProvider>;
}`,...N.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...N.parameters?.docs?.description}}}})))()}var F,I,L;function R(){return(R=e((()=>{F=i(),c(),u(),f(),o(),g(),_(),I=r(),L=()=>{let[e,t]=(0,F.useState)(1),[n,r]=(0,F.useState)(1),i=e=>{t(e.numPages)},o=(0,F.useRef)(null),c=(0,F.useRef)(null);return(0,I.jsx)(l,{header:p,content:(0,I.jsx)(a,{scrollRef:o,footer:e>1&&(0,I.jsx)(s,{children:(0,I.jsx)(h,{count:e,page:n,onChangePage:r,paginationRef:c})}),children:(0,I.jsx)(v,{file:`./vertical-many-pages.pdf`,onLoadSuccess:i,onChangePage:r,scrollRef:o,paginationRef:c})}),aside:m})};try{L.displayName=`WithPagination`,L.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке.`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const onDocumentLoad = (pdf: PdfViewerOnLoadSuccessProps) => {
    setPageCount(pdf.numPages);
  };
  const scrollRef = useRef(null);
  const paginationRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef} footer={pageCount > 1 && <PageLayoutFooter>
                <PdfViewerPagination count={pageCount} page={page} onChangePage={setPage} paginationRef={paginationRef} />
              </PageLayoutFooter>}>
          <PdfViewer file="./vertical-many-pages.pdf" onLoadSuccess={onDocumentLoad} onChangePage={setPage} scrollRef={scrollRef} paginationRef={paginationRef} />
        </PageContent>} aside={MockAside} />;
}`,...L.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке.`,...L.parameters?.docs?.description}}}})))()}var z,B;function V(){return(V=e((()=>{f(),g(),S(),E(),A(),P(),R(),z={title:`Files/PdfViewer`,component:v,decorators:d,parameters:{layout:`fullscreen`,docs:{description:{component:`PdfViewer - компонент для просмотра PDF файлов
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1181-475877&t=9PoeQw36PjGDWn2v-0)

⚠️ Для использования компонента необходимо настроить **Content Security Policy**. Компонент загружает [worker](https://frontend-static.astral.ru/libs/pdfjs-dist/) и [СSS](https://frontend-static.astral.ru/libs/react-pdf/) из сервиса для хранения статики https://frontend-static.astral.ru`}}}},B=[`BasicUsage`,`WithPagination`,`WithError`,`HorizontalManyPages`,`DisabledZoom`]})))()}V();export{x as BasicUsage,T as DisabledZoom,k as HorizontalManyPages,N as WithError,L as WithPagination,B as __namedExportsOrder,z as default};