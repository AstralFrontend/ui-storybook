const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-DxCpWMJ5.js","./rolldown-runtime-C0FnF6B9.js","./preview-CiiswFkd.js","./useViewportType-BfPg0E0T.js","./getThemeProps-CwR7FFT9.js","./useTheme-DeHriOMY.js","./personalDataSecurity-ChQA6JOX.js","./Pagination-DcZtBIpi.js","./useControlled-oMhYw8bE.js","./ChevronROutlineMd-DazX6kWa.js","./ChevronLOutlineMd-CB7Jbf7t.js","./LoadingPlaceholder-DagwFX0g.js","./ContentState-CZkkuCZF.js","./useLoadingState-Bu25XCPO.js","./ContentState-DCsXRrK7.js","./constants-D0cbcDyf.js","./Pagination-DRUenmGh.js","./constants-DIPo3B3g.js","./AddOutlineMd-DHPCKtnk.js","./MinusOutlineMd-DPCBHofW.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-CiiswFkd.js";import{C as l,w as u}from"./useInterval-BrGEnfCm.js";import{t as d}from"./ContentState-CZkkuCZF.js";import{t as f}from"./ContentState-DCsXRrK7.js";import{n as p,t as m}from"./PreviewFileUploader-9pJ0H2fm.js";import{a as h,l as g}from"./NotificationStackContainer-Cz5zXv9U.js";import{t as _}from"./Notification-De3gDL7q.js";import{n as v,t as y}from"./common-CSqVqnt-.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-DxCpWMJ5.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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