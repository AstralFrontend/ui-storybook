const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-Dmx5PAZw.js","./rolldown-runtime-C0FnF6B9.js","./preview-NvIN-gdT.js","./useViewportType-BjZU3eaX.js","./getThemeProps-CPiQ1ABs.js","./useTheme-C-YD9G3m.js","./personalDataSecurity-m8SXRaMo.js","./Pagination-Cc22PXKS.js","./useControlled-Rxz_xxrl.js","./ChevronROutlineMd-DgPrKsCN.js","./ChevronLOutlineMd-BmJwXR8J.js","./LoadingPlaceholder-DknRb2kn.js","./ContentState-xRCK-OFR.js","./useLoadingState-CGr39nZG.js","./ContentState-BBJVEE-x.js","./constants-tmkaiG_Y.js","./Pagination-DMs5xjt7.js","./constants-2zF28vsq.js","./AddOutlineMd-BzRMywi8.js","./MinusOutlineMd-DOBK88wt.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Ha as n,Ua as r,Va as i,ji as a,w as o,xa as s,yn as c}from"./preview-NvIN-gdT.js";import{C as l,w as u}from"./useInterval-CBdOwNSJ.js";import{t as d}from"./ContentState-xRCK-OFR.js";import{t as f}from"./ContentState-BBJVEE-x.js";import{n as p,t as m}from"./PreviewFileUploader-n8kzc-3o.js";import{a as h,l as g}from"./NotificationStackContainer-CDd_wuOw.js";import{t as _}from"./Notification-DkSWcJkp.js";import{n as v,t as y}from"./common-yoXUJT-D.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=i(),o(),f(),_(),c(),p(),b(),y(),S=s(),r(),C=(0,x.lazy)(()=>n(()=>import(`./PdfViewer-Dmx5PAZw.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=a(m)`
  .${u.dropzone} {
    height: 600px;
  }
`,T=()=>{let[e,n]=(0,x.useState)({id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679});return(0,S.jsxs)(t,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:[(0,S.jsx)(v,{children:(0,S.jsx)(w,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:h,value:e,onChange:e=>{n(e)},PdfViewer:e=>(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)(d,{isLoading:!0,children:`loading...`}),children:(0,S.jsx)(C,{...e,isFullHeight:!1})})})}),(0,S.jsx)(g,{})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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