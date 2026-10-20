import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,w as r,xa as i}from"./preview-C35OHnlK.js";import{i as a,o,s,t as c}from"./PageContent-lQm7Nxnn.js";import{t as l}from"./PageLayout-CZGY6Oa-.js";import{t as u}from"./PageLayout-BiCwSB_k.js";import{$t as d,Mt as f,U as p}from"./common-k6qJxKl2.js";import{i as m}from"./MockScreen-B4Jd_zmH.js";import{a as h,c as g,i as _,s as v}from"./PdfViewer-DiwbdLTg.js";var y,b,x;function S(){return(S=e((()=>{y=n(),c(),u(),p(),g(),b=i(),x=()=>{let e=(0,y.useRef)(null);return(0,b.jsx)(l,{header:d,content:(0,b.jsx)(a,{scrollRef:e,children:(0,b.jsx)(v,{file:`./vertical-one-page.pdf`,scrollRef:e})}),aside:m})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./vertical-one-page.pdf" scrollRef={scrollRef} />
        </PageContent>} aside={MockAside} />;
}`,...x.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...x.parameters?.docs?.description}}};try{x.displayName=`BasicUsage`,x.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T;function E(){return(E=e((()=>{C=n(),c(),u(),p(),g(),w=i(),T=()=>{let e=(0,C.useRef)(null);return(0,w.jsx)(l,{header:d,content:(0,w.jsx)(a,{scrollRef:e,children:(0,w.jsx)(v,{file:`./vertical-many-pages.pdf`,scrollRef:e,enabledZoom:!1})}),aside:m})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./vertical-many-pages.pdf" scrollRef={scrollRef} enabledZoom={false} />
        </PageContent>} aside={MockAside} />;
}`,...T.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке.

С помощью параметр \`enabledZoom\` можно выключить функционал масштабирования у компонента`,...T.parameters?.docs?.description}}};try{T.displayName=`DisabledZoom`,T.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке.

С помощью параметр \`enabledZoom\` можно выключить функционал масштабирования у компонента`,displayName:`DisabledZoom`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/DisabledZoom.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var D,O,k;function A(){return(A=e((()=>{D=n(),c(),u(),p(),g(),O=i(),k=()=>{let e=(0,D.useRef)(null);return(0,O.jsx)(l,{header:d,content:(0,O.jsx)(a,{scrollRef:e,children:(0,O.jsx)(v,{file:`./horizontal-many-pages.pdf`,scrollRef:e})}),aside:m})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <PdfViewer file="./horizontal-many-pages.pdf" scrollRef={scrollRef} />
        </PageContent>} aside={MockAside} />;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=n(),r(),c(),u(),p(),g(),M=i(),N=()=>{let e=(0,j.useRef)(null);return(0,M.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error-data-stub.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,M.jsx)(l,{header:d,content:(0,M.jsx)(a,{scrollRef:e,children:(0,M.jsx)(v,{file:`./not-existing.pdf`,scrollRef:e})})})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...N.parameters?.docs?.description}}};try{N.displayName=`WithError`,N.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке`,displayName:`WithError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/WithError.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{F=n(),c(),u(),p(),o(),g(),_(),I=i(),L=()=>{let[e,t]=(0,F.useState)(1),[n,r]=(0,F.useState)(1),i=e=>{t(e.numPages)},o=(0,F.useRef)(null),c=(0,F.useRef)(null);return(0,I.jsx)(l,{header:d,content:(0,I.jsx)(a,{scrollRef:o,footer:e>1&&(0,I.jsx)(s,{children:(0,I.jsx)(h,{count:e,page:n,onChangePage:r,paginationRef:c})}),children:(0,I.jsx)(v,{file:`./vertical-many-pages.pdf`,onLoadSuccess:i,onChangePage:r,scrollRef:o,paginationRef:c})}),aside:m})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке.`,...L.parameters?.docs?.description}}};try{L.displayName=`WithPagination`,L.__docgenInfo={description:`**Story** необходимо открывать в отдельной вкладке.`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PdfViewer/stories/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B;function V(){return(V=e((()=>{p(),g(),S(),E(),A(),P(),R(),z={title:`Files/PdfViewer`,component:v,decorators:f,parameters:{layout:`fullscreen`,docs:{description:{component:`PdfViewer - компонент для просмотра PDF файлов
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1181-475877&t=9PoeQw36PjGDWn2v-0)

⚠️ Для использования компонента необходимо настроить **Content Security Policy**. Компонент загружает [worker](https://frontend-static.astral.ru/libs/pdfjs-dist/) и [СSS](https://frontend-static.astral.ru/libs/react-pdf/) из сервиса для хранения статики https://frontend-static.astral.ru`}}}},B=[`BasicUsage`,`WithPagination`,`WithError`,`HorizontalManyPages`,`DisabledZoom`]})))()}V();export{x as BasicUsage,T as DisabledZoom,k as HorizontalManyPages,N as WithError,L as WithPagination,B as __namedExportsOrder,z as default};