const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-C8DklnM7.js","./rolldown-runtime-C0FnF6B9.js","./preview-DApj709n.js","./useViewportType-CTvJJQG0.js","./getThemeProps-BKvIEv8T.js","./useTheme-C0-Z5oRO.js","./personalDataSecurity-30FZvppd.js","./Pagination-Cq7WXX6J.js","./useControlled-CIM8aEEw.js","./ChevronROutlineMd-DUTiw7FI.js","./ChevronLOutlineMd-Ynm6KsgG.js","./LoadingPlaceholder-CdqyxCxV.js","./ContentState-BB-pxaq_.js","./useLoadingState-oDTcFkmi.js","./ContentState-QBjMfDmg.js","./constants-D8J7q0I5.js","./Pagination-DW2_N4Oo.js","./constants-9frxuQE2.js","./AddOutlineMd-4S4oni-K.js","./MinusOutlineMd-CfPOyGLi.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Ha as n,Ua as r,Va as i,ji as a,w as o,xa as s,yn as c}from"./preview-DApj709n.js";import{C as l,w as u}from"./useInterval-B6NLZcOX.js";import{t as d}from"./ContentState-BB-pxaq_.js";import{t as f}from"./ContentState-QBjMfDmg.js";import{n as p,t as m}from"./PreviewFileUploader-BtqEnX6T.js";import{a as h,l as g}from"./NotificationStackContainer-iEgJsGcp.js";import{t as _}from"./Notification-Ch-79kYP.js";import{n as v,t as y}from"./common-CqS6m3w2.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=i(),o(),f(),_(),c(),p(),b(),y(),S=s(),r(),C=(0,x.lazy)(()=>n(()=>import(`./PdfViewer-C8DklnM7.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=a(m)`
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