const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-Cyzf8Fda.js","./rolldown-runtime-BCiCTKAo.js","./preview-CYOnxvuE.js","./useViewportType-BQfQeBYM.js","./getThemeProps-CCguK2cR.js","./useTheme-B-R-v94E.js","./personalDataSecurity-B9Y6ecdM.js","./Pagination-Dg8Ow30m.js","./useControlled-BnwlgRuN.js","./ChevronROutlineMd-C0DsY2Iy.js","./ChevronLOutlineMd-DRxJqmco.js","./LoadingPlaceholder-FiU8nG1n.js","./ContentState-CWxyYXPp.js","./useLoadingState-BY2wwb9A.js","./ContentState-Fn4rjKLZ.js","./constants-Cgkj8o8_.js","./Pagination-o_Vu338x.js","./constants-DbBv1mpu.js","./AddOutlineMd-Bjsp15WB.js","./MinusOutlineMd-BPEF4X5s.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-CYOnxvuE.js";import{C as l,w as u}from"./useInterval-Cl9C6QAX.js";import{t as d}from"./ContentState-CWxyYXPp.js";import{t as f}from"./ContentState-Fn4rjKLZ.js";import{n as p,t as m}from"./PreviewFileUploader-BozITExZ.js";import{a as h,l as g}from"./NotificationStackContainer-GUNuuW7g.js";import{t as _}from"./Notification-DsciAkat.js";import{n as v,t as y}from"./common-BV7SRAI2.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-Cyzf8Fda.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
  .${u.dropzone} {
    height: 600px;
  }
`,T=()=>{let[e,t]=(0,x.useState)({id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679});return(0,S.jsxs)(n,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:[(0,S.jsx)(v,{children:(0,S.jsx)(w,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:h,value:e,onChange:e=>{t(e)},PdfViewer:e=>(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)(d,{isLoading:!0,children:`loading...`}),children:(0,S.jsx)(C,{...e,isFullHeight:!1})})})}),(0,S.jsx)(g,{})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>({
    id: '1',
    name: 'Памятка с инструкциями',
    type: 'application/pdf',
    url: './passport.pdf',
    size: 1942679
  });
  const handleChange = (files: UploadFile | null) => {
    setValue(files);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploaderStyled accept={['image/png', 'image/jpeg', '.pdf']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} PdfViewer={props => <Suspense fallback={<ContentState isLoading>loading...</ContentState>}>
              <PdfViewer {...props} isFullHeight={false} />
            </Suspense>} />
      </Wrapper>

      <NotificationContainer />
    </ConfigProvider>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{p(),E(),D={title:`Files/PreviewFileUploader/Tests`,component:m},O=[`CustomPreviewPdf`]})))()}k();export{T as CustomPreviewPdf,O as __namedExportsOrder,D as default};