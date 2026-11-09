const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-CsjAlT_E.js","./rolldown-runtime-BCiCTKAo.js","./preview-BX62JchR.js","./useViewportType-DaMYqiyM.js","./getThemeProps-OgKmTsrY.js","./useTheme-C8T3-b3F.js","./personalDataSecurity-CmO_C08f.js","./Pagination-x9-xYKwJ.js","./useControlled-B2ldPVc9.js","./ChevronROutlineMd-uuoawi_u.js","./ChevronLOutlineMd-DJAH3dj7.js","./LoadingPlaceholder-B6-3aenQ.js","./ContentState-BZR7zV7B.js","./useLoadingState-Cn6fNwnm.js","./ContentState-DAEHhbao.js","./constants-CuuhSMMD.js","./Pagination-BWaY5TQU.js","./constants-D0llMzsy.js","./AddOutlineMd-BBn4jIgd.js","./MinusOutlineMd-UIPnOtgu.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-BX62JchR.js";import{C as l,w as u}from"./useInterval-CQjy8iVX.js";import{t as d}from"./ContentState-BZR7zV7B.js";import{t as f}from"./ContentState-DAEHhbao.js";import{n as p,t as m}from"./PreviewFileUploader-CKSTjV2B.js";import{a as h,l as g}from"./NotificationStackContainer-By_FWpQx.js";import{t as _}from"./Notification-CJeVyAh9.js";import{n as v,t as y}from"./common-BGpfTztR.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-CsjAlT_E.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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