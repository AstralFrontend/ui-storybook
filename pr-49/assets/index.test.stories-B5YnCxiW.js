const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-D8n1FBpV.js","./rolldown-runtime-BCiCTKAo.js","./preview-OXZophHf.js","./useViewportType-Cki2f40-.js","./getThemeProps-cPVtMpAs.js","./useTheme-CjyE5r5p.js","./personalDataSecurity-CUp8LcQs.js","./Pagination-DFoJ5V1j.js","./useControlled-CmM5mPFh.js","./ChevronROutlineMd-DGctme1W.js","./ChevronLOutlineMd-BT0USQIJ.js","./LoadingPlaceholder-_AxQkchT.js","./ContentState-6yKPoYLa.js","./useLoadingState-D1qoDP-D.js","./ContentState-CakjzJo4.js","./constants-B1b1xbed.js","./Pagination-Ds-Fe77k.js","./constants-CcerD6_m.js","./AddOutlineMd-Cf6Nnahp.js","./MinusOutlineMd-CqGU0i9N.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-OXZophHf.js";import{C as l,w as u}from"./useInterval-aFfbO2j5.js";import{t as d}from"./ContentState-6yKPoYLa.js";import{t as f}from"./ContentState-CakjzJo4.js";import{n as p,t as m}from"./PreviewFileUploader-CMY8OGPE.js";import{a as h,l as g}from"./NotificationStackContainer-BVdkcjk2.js";import{t as _}from"./Notification-Bih4wp2N.js";import{n as v,t as y}from"./common-DuEYaHYJ.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-D8n1FBpV.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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