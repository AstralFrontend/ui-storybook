const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-BrJDUlZ6.js","./rolldown-runtime-BCiCTKAo.js","./preview-mJYVg0gZ.js","./useViewportType-9sNBqkRt.js","./getThemeProps-CM5514qV.js","./useTheme-BehRI8gB.js","./personalDataSecurity-IeeS7whA.js","./Pagination-BXrTcrYV.js","./useControlled-KqN4KlEc.js","./ChevronROutlineMd-D5fv2e4x.js","./ChevronLOutlineMd-Bf70KLut.js","./LoadingPlaceholder-HrKYZDg7.js","./ContentState-DfzbtC4c.js","./useLoadingState-BnUxUhGp.js","./ContentState-Ylz87MaY.js","./constants-CxRqtQEF.js","./Pagination-ObJnFOhi.js","./constants-Dtyl8tyH.js","./AddOutlineMd-Dg64i3B3.js","./MinusOutlineMd-BmkLEVsD.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Ba as t,E as n,Va as r,ji as i,w as a,ya as o,yn as s,za as c}from"./preview-mJYVg0gZ.js";import{C as l,w as u}from"./useInterval-84BVww1l.js";import{t as d}from"./ContentState-DfzbtC4c.js";import{t as f}from"./ContentState-Ylz87MaY.js";import{n as p,t as m}from"./PreviewFileUploader-BrEn5oPs.js";import{a as h,l as g}from"./NotificationStackContainer-DJxnBk55.js";import{t as _}from"./Notification-DhbCdj-8.js";import{n as v,t as y}from"./common-BuDkE_DR.js";function b(){return(b=e((()=>{l(),p()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{x=c(),a(),f(),_(),s(),p(),b(),y(),S=o(),r(),C=(0,x.lazy)(()=>t(()=>import(`./PdfViewer-BrJDUlZ6.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),w=i(m)`
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