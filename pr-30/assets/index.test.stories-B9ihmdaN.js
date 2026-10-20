const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-C46buOy5.js","./rolldown-runtime-C0FnF6B9.js","./preview-BgfOFFw_.js","./useViewportType-C27tiPlZ.js","./getThemeProps-C-lmNoD4.js","./useTheme-12BS9sWG.js","./personalDataSecurity-BU4fWHDG.js","./Pagination-CBjcZckq.js","./useControlled-MPBo7ur7.js","./ChevronROutlineMd-t4LuFfTM.js","./ChevronLOutlineMd-C-otpB-w.js","./LoadingPlaceholder-D9xi5HcN.js","./ContentState-CB93a4m_.js","./useLoadingState-DUjObCS1.js","./ContentState-D49uhnRp.js","./constants-mLGNqfod.js","./Pagination-CGGD7r7K.js","./constants-B80lKR4R.js","./AddOutlineMd-CS2Yzb9B.js","./MinusOutlineMd-vI2az2K6.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-BgfOFFw_.js";import{C as l,w as u}from"./useInterval-C68wwL_g.js";import{t as d}from"./ContentState-CB93a4m_.js";import{t as f}from"./ContentState-D49uhnRp.js";import{n as p,t as m}from"./PreviewFileUploader-7rJLa0dX.js";import{a as h,l as g}from"./NotificationStackContainer-JAHjHAn-.js";import{t as _}from"./Notification-DACbH_3W.js";import{n as v,t as y}from"./common-D5v1xbPi.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-C46buOy5.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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