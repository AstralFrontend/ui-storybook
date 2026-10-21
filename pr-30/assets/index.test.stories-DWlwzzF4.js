const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-CJUaW8jo.js","./rolldown-runtime-C0FnF6B9.js","./preview-DtOtDb_i.js","./useViewportType-tZoMD4MM.js","./getThemeProps-jrqF2Zt8.js","./useTheme-o5574qX7.js","./personalDataSecurity-Cccq-_O3.js","./Pagination-CSIEX1YK.js","./useControlled-BP4hQN2R.js","./ChevronROutlineMd-txjXWblG.js","./ChevronLOutlineMd-D4FzQLJ7.js","./LoadingPlaceholder-B-wTpCGl.js","./ContentState-BO_q2fBQ.js","./useLoadingState-B4jMCC_c.js","./ContentState-CzuXgzAK.js","./constants-RKUmPDmi.js","./Pagination-B-gEHGd9.js","./constants-C8hLj9FC.js","./AddOutlineMd-BMQCgj3k.js","./MinusOutlineMd-C5Eo95ae.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-DtOtDb_i.js";import{C as l,w as u}from"./useInterval-CIblSzRI.js";import{t as d}from"./ContentState-BO_q2fBQ.js";import{t as f}from"./ContentState-CzuXgzAK.js";import{n as p,t as m}from"./PreviewFileUploader-BX1YAeax.js";import{a as h,l as g}from"./NotificationStackContainer-DBwbPP9z.js";import{t as _}from"./Notification-CAWYHa1z.js";import{n as v,t as y}from"./common-Beq4sZ7h.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-CJUaW8jo.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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