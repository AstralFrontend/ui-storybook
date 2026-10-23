const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-GxZzp5BU.js","./rolldown-runtime-C0FnF6B9.js","./preview-CdUppftE.js","./useViewportType-aOSh2vYj.js","./getThemeProps-Cedy-j3m.js","./useTheme-CwHrHl3P.js","./personalDataSecurity-BIr7M63y.js","./Pagination-CLyCD-Kd.js","./useControlled-WDlaqWTx.js","./ChevronROutlineMd-CpfajhjJ.js","./ChevronLOutlineMd-B8iitrym.js","./LoadingPlaceholder-weKhFzVZ.js","./ContentState-BvCleFVT.js","./useLoadingState-Yud74uzF.js","./ContentState-BPGVuS6U.js","./constants-C2bKHSRu.js","./Pagination-ClJWsBy4.js","./constants-DHT183e7.js","./AddOutlineMd-DyCX8lwz.js","./MinusOutlineMd-DNjze8Qa.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-CdUppftE.js";import{C as l,w as u}from"./useInterval-CcSlqnbG.js";import{t as d}from"./ContentState-BvCleFVT.js";import{t as f}from"./ContentState-BPGVuS6U.js";import{n as p,t as m}from"./PreviewFileUploader-tM3Eepj3.js";import{a as h,l as g}from"./NotificationStackContainer-DcV1uilA.js";import{t as _}from"./Notification-lVDUYNU3.js";import{n as v,t as y}from"./common-DTJtAgDU.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-GxZzp5BU.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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