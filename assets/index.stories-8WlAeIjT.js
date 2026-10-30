const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-CEWkTgiI.js","./rolldown-runtime-BCiCTKAo.js","./preview-CuWTv55L.js","./useViewportType-Dp3v75oL.js","./getThemeProps-D5Mx0b4K.js","./useTheme-CQW7_Nwh.js","./personalDataSecurity-BHfH6D6X.js","./Pagination-BdHMFYgb.js","./useControlled-CFOYBUHD.js","./ChevronROutlineMd-DNryOgT2.js","./ChevronLOutlineMd-CRjedOx-.js","./LoadingPlaceholder-C3Bqd5Nk.js","./ContentState-DBLbjO-G.js","./useLoadingState-BC1MtmrE.js","./ContentState-D-jDLHjV.js","./constants-DqzN8eqx.js","./Pagination-B2ZvbGcz.js","./constants-BKOIW4Wv.js","./AddOutlineMd-D5WiT2O0.js","./MinusOutlineMd-ByPXQHF9.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{Ba as n,E as r,Va as i,ji as ee,w as a,ya as o,yn as te,za as s}from"./preview-CuWTv55L.js";import{C as ne,w as re}from"./useInterval-C4ejphsV.js";import{t as c}from"./ContentState-DBLbjO-G.js";import{t as ie}from"./ContentState-D-jDLHjV.js";import{d as ae,i as oe,l as se,n as l,o as ce,r as le,s as ue,t as u}from"./PreviewFileUploader-CsCnP80Z.js";import{n as de,t as fe}from"./axios-COqjSeWk.js";import{t as pe}from"./src-B9AmVQVO.js";import{a as d,l as f}from"./NotificationStackContainer-C9gWff68.js";import{t as p}from"./Notification-Ccv8jBiC.js";import{r as me,s as he}from"./PdfViewer-CEWkTgiI.js";import{n as ge,t as _e}from"./faker---r_5_pW.js";import{n as m,t as h}from"./common-C2X4Pdri.js";var ve,g,_;function ye(){return(ye=e((()=>{ve=s(),a(),p(),l(),h(),g=o(),_=()=>{let[e,t]=(0,ve.useState)();return(0,g.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,g.jsxs)(m,{children:[(0,g.jsx)(u,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)}}),(0,g.jsx)(f,{})]})})};try{_.displayName=`Accept`,_.__docgenInfo={description:"```accept``` — список разрешённых расширений или mime-типов",displayName:`Accept`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/Accept.story.tsx`,methods:[],props:{},tags:{}}}catch{}_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
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
        <PreviewFileUploader accept={['image/png', 'image/jpeg', '.pdf']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,..._.parameters?.docs?.source},description:{story:"```accept``` — список разрешённых расширений или mime-типов",..._.parameters?.docs?.description}}}})))()}var be,v,xe,Se,Ce,we,y;function b(){return(b=e((()=>{de(),be=t(pe()),v=0,xe=()=>(v+=1,v),Se=Array.from({length:10},(e,t)=>(t+1)/10),Ce=()=>Math.random()*300+200,we=e=>new Promise(t=>setTimeout(t,e)),new be.default(fe).onPost(`/api/upload`).reply(async e=>{let t=e.data.get(`file`),n=t.size;for(let t of Se)await we(Ce()),e.onUploadProgress&&e.onUploadProgress({loaded:Math.floor(n*t),total:n,lengthComputable:!0,bytes:Math.floor(n*t)});return[200,{id:`upl-${xe()}`,type:t.type}]}),y=(e,t)=>fe.post(`/api/upload`,e,{headers:{"Content-Type":`multipart/form-data`},...t||{}})})))()}var Te,x,S;function Ee(){return(Ee=e((()=>{Te=s(),a(),p(),b(),l(),h(),x=o(),S=()=>{let[e,t]=(0,Te.useState)();return(0,x.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,x.jsxs)(m,{children:[(0,x.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),y(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)}}),(0,x.jsx)(f,{})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleUploadFile: PreviewFileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakePreviewFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
      }
    }).then(response => response.data);
  };
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...S.parameters?.docs?.source}}}})))()}var De,C,w;function Oe(){return(Oe=e((()=>{De=s(),a(),p(),se(),ce(),le(),b(),h(),C=o(),w=()=>{let e=e=>{let{dropZoneProps:t,fileListProps:{files:n,...r}}=ae(e);return(0,C.jsx)(ue,{...t,children:(0,C.jsx)(`ul`,{children:n?.map(e=>(0,C.jsx)(oe,{...e,...r},e.id))})})},[t,n]=(0,De.useState)();return(0,C.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,C.jsx)(m,{children:(0,C.jsx)(e,{value:t,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),y(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{n(e)}})})})};try{w.displayName=`CustomComponent`,w.__docgenInfo={description:`При необходимости, можно скомпоновать кастомный компонент, используя хук useFileUploaderLogic, и распределяя пропсы по зависимым компонентам`,displayName:`CustomComponent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/CustomComponent.story.tsx`,methods:[],props:{},tags:{}}}catch{}w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const CustomFileUploaderRealization = (props: PreviewFileUploaderProps) => {
    const {
      dropZoneProps,
      fileListProps: {
        files,
        ...restFileListProps
      }
    } = usePreviewFileUploader(props);
    return <PreviewFileUploaderDropZone {...dropZoneProps}>
        <ul>
          {files?.map(file => <PreviewFileUploaderFile key={file.id} {...file} {...restFileListProps} />)}
        </ul>
      </PreviewFileUploaderDropZone>;
  };
  const [value, setValue] = useState<UploadFile | null>();
  const handleUploadFile: PreviewFileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakePreviewFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
      }
    }).then(response => response.data);
  };
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <CustomFileUploaderRealization value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />
      </Wrapper>
    </ConfigProvider>;
}`,...w.parameters?.docs?.source},description:{story:`При необходимости, можно скомпоновать кастомный компонент, используя хук useFileUploaderLogic, и распределяя пропсы по зависимым компонентам`,...w.parameters?.docs?.description}}}})))()}var ke,T,E;function Ae(){return(Ae=e((()=>{ke=s(),a(),p(),te(),ne(),l(),h(),T=o(),E=()=>{let e=ee(u)`
    .${re.dropzone} {
      max-width: min(100%, 450px);
      height: 500px;
    }
  `,[t,n]=(0,ke.useState)();return(0,T.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,T.jsxs)(m,{children:[(0,T.jsx)(e,{value:t,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:3072,notify:d,onChange:e=>{n(e)}}),(0,T.jsx)(f,{})]})})};try{E.displayName=`CustomDropSize`,E.__docgenInfo={description:"Класс из константы`previewFileUploaderClassnames.dropzone` дает возможность изменять размеры drop зоны",displayName:`CustomDropSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/CustomDropSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const PreviewFileUploaderStyled = styled(PreviewFileUploader)\`
    .\${previewFileUploaderClassnames.dropzone} {
      max-width: min(100%, 450px);
      height: 500px;
    }
  \`;
  const [value, setValue] = useState<UploadFile | null>();
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
        <PreviewFileUploaderStyled value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={3 * 1024} notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...E.parameters?.docs?.source},description:{story:"Класс из константы`previewFileUploaderClassnames.dropzone` дает возможность изменять размеры drop зоны",...E.parameters?.docs?.description}}}})))()}var je,D,O;function Me(){return(Me=e((()=>{je=s(),a(),p(),b(),l(),h(),D=o(),O=()=>{let e=(e,t)=>`${t.message} файла с id: ${e}. Файл с таким расширением не поддерживается`,[t,n]=(0,je.useState)({id:`1`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:98654,status:{isUploadError:!0,errorMsg:e(`1`,Error(`Ошибка загрузки`))}});return(0,D.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,D.jsxs)(m,{children:[(0,D.jsx)(u,{accept:[`text/plain`],maxFileSize:5248e3,notify:d,value:t,onChange:e=>{n(e)},onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),y(i,{signal:n,onUploadProgress:t=>{if(!n.aborted)throw r(e,t),Error(`test error`)}}).then(e=>e.data)},getErrorMessage:e}),(0,D.jsx)(f,{})]})})};try{O.displayName=`CustomErrorText`,O.__docgenInfo={description:"```getErrorMessage``` — позволяет задавать кастомный текст ошибки загрузки файла",displayName:`CustomErrorText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/CustomErrorText.story.tsx`,methods:[],props:{},tags:{}}}catch{}O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const getErrorMessage = (fileId: FileId, err: Error) => {
    return \`\${err.message} файла с id: \${fileId}. Файл с таким расширением не поддерживается\`;
  };
  const [value, setValue] = useState<UploadFile | null>({
    id: '1',
    name: 'Паспорт_РФ.pdf',
    type: 'application/pdf',
    size: 98654,
    status: {
      isUploadError: true,
      errorMsg: getErrorMessage('1', new Error('Ошибка загрузки'))
    }
  });
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  const handleUploadFile: PreviewFileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakePreviewFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
        throw new Error('test error');
      }
    }).then(response => response.data);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader accept={['text/plain']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} onUploadFile={handleUploadFile} getErrorMessage={getErrorMessage} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...O.parameters?.docs?.source},description:{story:"```getErrorMessage``` — позволяет задавать кастомный текст ошибки загрузки файла",...O.parameters?.docs?.description}}}})))()}var Ne,k,A;function Pe(){return(Pe=e((()=>{Ne=s(),a(),p(),l(),h(),k=o(),A=()=>{let[e,t]=(0,Ne.useState)({id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,size:543210,status:{isUploadError:!0,errorMsg:`Ошибка загрузки файла`}});return(0,k.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,k.jsxs)(m,{children:[(0,k.jsx)(u,{accept:[`.jpg`,`.jpeg`,`.png`],value:e,maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,k.jsx)(f,{})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>({
    id: '1',
    name: 'Согласие_на_обработку_персональных_данных_Иванов.pdf',
    type: 'application/pdf',
    size: 543210,
    status: {
      isUploadError: true,
      errorMsg: 'Ошибка загрузки файла'
    }
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
        <PreviewFileUploader accept={['.jpg', '.jpeg', '.png']} value={value} maxFileSize={5248000} notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...A.parameters?.docs?.source}}}})))()}var Fe,j,M;function Ie(){return(Ie=e((()=>{Fe=s(),a(),p(),l(),h(),j=o(),M=()=>{let[e,t]=(0,Fe.useState)({id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,size:543210,status:{isLoading:!0,progress:85}});return(0,j.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,j.jsxs)(m,{children:[(0,j.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,j.jsx)(f,{})]})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>({
    id: '1',
    name: 'Согласие_на_обработку_персональных_данных_Иванов.pdf',
    type: 'application/pdf',
    size: 543210,
    status: {
      isLoading: true,
      progress: 85
    }
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
        <PreviewFileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...M.parameters?.docs?.source}}}})))()}var Le,N,P;function Re(){return(Re=e((()=>{Le=s(),a(),p(),l(),h(),N=o(),P=()=>{let[e,t]=(0,Le.useState)();return(0,N.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,N.jsxs)(m,{children:[(0,N.jsx)(u,{isDisabled:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,N.jsx)(f,{})]})})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader isDisabled value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...P.parameters?.docs?.source}}}})))()}var ze,F,Be,I;function Ve(){return(Ve=e((()=>{ze=s(),a(),ie(),p(),me(),l(),h(),F=o(),Be={id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679},I=()=>{let[e,t]=(0,ze.useState)(Be);return(0,F.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,F.jsxs)(m,{children:[(0,F.jsx)(u,{isDisabled:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`,`.pdf`],maxFileSize:5248e3,notify:d,onChange:e=>{t(e)},PdfViewer:e=>(0,F.jsx)(ze.Suspense,{fallback:(0,F.jsx)(c,{isLoading:!0,children:`loading...`}),children:(0,F.jsx)(he,{...e})})}),(0,F.jsx)(f,{})]})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>(defaultFile);
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader isDisabled value={value} accept={['.jpg', '.jpeg', '.png', '.pdf']} maxFileSize={5248000} notify={notify} onChange={handleChange} PdfViewer={props => <Suspense fallback={<ContentState isLoading>loading...</ContentState>}>
              <PdfViewer {...props} />
            </Suspense>} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...I.parameters?.docs?.source}}}})))()}var He,L,R;function Ue(){return(Ue=e((()=>{He=s(),a(),p(),l(),h(),L=o(),R=()=>{let[e,t]=(0,He.useState)();return(0,L.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,L.jsxs)(m,{children:[(0,L.jsx)(u,{isError:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,helperText:`Обязательно`,notify:d,onChange:e=>{t(e)}}),(0,L.jsx)(f,{})]})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader isError value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} helperText="Обязательно" notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...R.parameters?.docs?.source}}}})))()}var We,z,B;function Ge(){return(Ge=e((()=>{We=s(),a(),p(),b(),l(),h(),z=o(),B=()=>{let[e,t]=(0,We.useState)();return(0,z.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,z.jsxs)(m,{children:[(0,z.jsx)(u,{label:`Название поля`,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),y(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)}}),(0,z.jsx)(f,{})]})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleUploadFile: PreviewFileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakePreviewFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
      }
    }).then(response => response.data);
  };
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader label="Название поля" value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...B.parameters?.docs?.source}}}})))()}var Ke,V,H;function qe(){return(qe=e((()=>{Ke=s(),a(),p(),l(),h(),V=o(),H=()=>{let[e,t]=(0,Ke.useState)();return(0,V.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,V.jsxs)(m,{children:[(0,V.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:3072,notify:d,onChange:e=>{t(e)}}),(0,V.jsx)(f,{})]})})};try{H.displayName=`MaxFileSize`,H.__docgenInfo={description:"```maxFileSize``` — позволяет ограничить размер загружаемых файлов",displayName:`MaxFileSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/MaxFileSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
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
        <PreviewFileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={3 * 1024} notify={notify} onChange={handleChange} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...H.parameters?.docs?.source},description:{story:"```maxFileSize``` — позволяет ограничить размер загружаемых файлов",...H.parameters?.docs?.description}}}})))()}var U,W,Je,G;function Ye(){return(Ye=e((()=>{U=s(),a(),ie(),p(),l(),h(),W=o(),i(),Je=(0,U.lazy)(()=>n(()=>import(`./PdfViewer-CEWkTgiI.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),G=()=>{let[e,t]=(0,U.useState)({id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679});return(0,W.jsxs)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:[(0,W.jsx)(m,{children:(0,W.jsx)(u,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)},onDeleteFile:()=>new Promise(e=>{setTimeout(()=>{d.success(`Файл удален`),e()},1500)}),PdfViewer:e=>(0,W.jsx)(U.Suspense,{fallback:(0,W.jsx)(c,{isLoading:!0,children:`loading...`}),children:(0,W.jsx)(Je,{...e})})})}),(0,W.jsx)(f,{})]})};try{G.displayName=`OnDeleteFile`,G.__docgenInfo={description:`При использовании параметра в форме, необходимо удалять файлы при подтверждении изменений (submit)

Пример использования в форме: [FormPreviewFileUploader](/docs/react-hook-form-formPreviewFileUploader--docs#collect-files)`,displayName:`OnDeleteFile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/OnDeleteFile.story.tsx`,methods:[],props:{},tags:{}}}catch{}G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
  const onDeleteFile = () => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        notify.success('Файл удален');
        resolve();
      }, 1500);
    });
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader accept={['image/png', 'image/jpeg', '.pdf']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} onDeleteFile={onDeleteFile} PdfViewer={props => <Suspense fallback={<ContentState isLoading>loading...</ContentState>}>
              <PdfViewer {...props} />
            </Suspense>} />
      </Wrapper>
      <NotificationContainer />
    </ConfigProvider>;
}`,...G.parameters?.docs?.source},description:{story:`При использовании параметра в форме, необходимо удалять файлы при подтверждении изменений (submit)

Пример использования в форме: [FormPreviewFileUploader](/docs/react-hook-form-formPreviewFileUploader--docs#collect-files)`,...G.parameters?.docs?.description}}}})))()}var Xe,K,q;function Ze(){return(Ze=e((()=>{Xe=s(),a(),p(),ge(),l(),h(),K=o(),q=()=>{let[e,t]=(0,Xe.useState)({id:`1`,name:`Список владельцев ЭП`,type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,url:`./xlsx-file-stub.xlsx`,size:9e3});return(0,K.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,K.jsxs)(m,{children:[(0,K.jsx)(u,{maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)},onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),_e(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)}}),(0,K.jsx)(f,{})]})})};try{q.displayName=`OtherFormatPreview`,q.__docgenInfo={description:`Вариант отображения preview, если файл не pdf и не изображение`,displayName:`OtherFormatPreview`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/OtherFormatPreview.story.tsx`,methods:[],props:{},tags:{}}}catch{}q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>({
    id: '1',
    name: 'Список владельцев ЭП',
    // cspell:disable-next-line
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    url: './xlsx-file-stub.xlsx',
    size: 9000
  });
  const handleUploadFile: FileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakeFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
      }
    }).then(response => response.data);
  };
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
        <PreviewFileUploader maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} onUploadFile={handleUploadFile} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...q.parameters?.docs?.source},description:{story:`Вариант отображения preview, если файл не pdf и не изображение`,...q.parameters?.docs?.description}}}})))()}var J,Y,Qe,X;function $e(){return($e=e((()=>{J=s(),a(),ie(),p(),l(),h(),Y=o(),i(),Qe=(0,J.lazy)(()=>n(()=>import(`./PdfViewer-CEWkTgiI.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),X=()=>{let[e,t]=(0,J.useState)({id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679}),n=e=>{t(e)};return(0,Y.jsxs)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:[(0,Y.jsx)(m,{children:(0,Y.jsx)(u,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:d,value:e,onChange:n})}),(0,Y.jsx)(m,{children:(0,Y.jsx)(u,{accept:[`image/png`,`image/jpeg`,`.pdf`],maxFileSize:5248e3,notify:d,value:e,onChange:n,PdfViewer:e=>(0,Y.jsx)(J.Suspense,{fallback:(0,Y.jsx)(c,{isLoading:!0,children:`loading...`}),children:(0,Y.jsx)(Qe,{...e})})})}),(0,Y.jsx)(f,{})]})};try{X.displayName=`PreviewPdf`,X.__docgenInfo={description:"Компонент поддерживает превью для pdf файлов.\nДля корректной работы обязательно указание mime-типа в поле ```type```\n\nВозможно два варианта отображения:\n- простое дефолтное отображение через object\n- красивое кастомное отображение через PdfViewer",displayName:`PreviewPdf`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/PreviewPdf.story.tsx`,methods:[],props:{},tags:{}}}catch{}X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  // Сделать дефолтный реэкспорт из shared слоя
  // const PdfViewer = lazy(() => import('@astral/ui/components/PdfViewer'));

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
        <PreviewFileUploader accept={['image/png', 'image/jpeg', '.pdf']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} />
      </Wrapper>
      <Wrapper>
        <PreviewFileUploader accept={['image/png', 'image/jpeg', '.pdf']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} PdfViewer={props => <Suspense fallback={<ContentState isLoading>loading...</ContentState>}>
              <PdfViewer {...props} />
            </Suspense>} />
      </Wrapper>

      <NotificationContainer />
    </ConfigProvider>;
}`,...X.parameters?.docs?.source},description:{story:"Компонент поддерживает превью для pdf файлов.\nДля корректной работы обязательно указание mime-типа в поле ```type```\n\nВозможно два варианта отображения:\n- простое дефолтное отображение через object\n- красивое кастомное отображение через PdfViewer",...X.parameters?.docs?.description}}}})))()}var et,Z,Q;function tt(){return(tt=e((()=>{et=s(),a(),p(),b(),l(),h(),Z=o(),Q=()=>{let[e,t]=(0,et.useState)();return(0,Z.jsx)(r,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,Z.jsxs)(m,{children:[(0,Z.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,restrictions:[e=>{if(/[а-яА-Я]/.test(e.name))return{code:`cyrillic-name`,message:`Имя файла не должно содержать кириллицу`}}],notify:d,onChange:e=>{t(e)},onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),y(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)}}),(0,Z.jsx)(f,{})]})})};try{Q.displayName=`Restrictions`,Q.__docgenInfo={description:"`restrictions` — позволяет установить ограничения для загружаемых файлов.\nДля файлов, которые не прошли проверку, отправка на сервер осуществляться не будет",displayName:`Restrictions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/PreviewFileUploader/stories/Restrictions.story.tsx`,methods:[],props:{},tags:{}}}catch{}Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();

  // Проверка на наличие кириллицы в имени файла
  const restrictCyrillicName: RestrictionFn = (file: File) => {
    const hasCyrillic = /[а-яА-Я]/.test(file.name);
    if (hasCyrillic) {
      return {
        code: 'cyrillic-name',
        message: 'Имя файла не должно содержать кириллицу'
      };
    }
    return undefined;
  };
  const handleUploadFile: PreviewFileUploaderProps['onUploadFile'] = (fileId, file, {
    signal,
    setProgress
  }) => {
    const formData = new FormData();
    formData.append('file', file as File, file.name);
    return fakePreviewFileUploadQuery(formData, {
      // Необходим для отмены запроса
      signal,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        // axios-mock-adapter не обрабатывает сигнал отмены
        if (signal.aborted) {
          return;
        }
        setProgress(fileId, progressEvent as unknown as ProgressEvent);
      }
    }).then(response => response.data);
  };
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <PreviewFileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} restrictions={[restrictCyrillicName]} notify={notify} onChange={handleChange} onUploadFile={handleUploadFile} />

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...Q.parameters?.docs?.source},description:{story:"`restrictions` — позволяет установить ограничения для загружаемых файлов.\nДля файлов, которые не прошли проверку, отправка на сервер осуществляться не будет",...Q.parameters?.docs?.description}}}})))()}var nt,$,rt;function it(){return(it=e((()=>{l(),ye(),Ee(),Oe(),Ae(),Me(),Pe(),Ie(),Re(),Ve(),Ue(),Ge(),qe(),Ye(),Ze(),$e(),tt(),nt={title:`Files/PreviewFileUploader`,component:u,parameters:{docs:{description:{component:`PreviewFileUploader — компонент для загрузки файлов c превью
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1106-3726)`}}}},$={args:{accept:[`.jpg`,`.jpeg`,`.png`],label:`Название поля`,onChange:()=>{}},parameters:{docs:{label:!0,disable:!0}}},rt=[`Interaction`,`BasicUsage`,`PreviewPdf`,`OtherFormatPreview`,`Label`,`Accept`,`Restrictions`,`MaxFileSize`,`IsDisabled`,`IsDisabledWithFile`,`IsError`,`FileLoading`,`FileError`,`OnDeleteFile`,`CustomDropSize`,`CustomErrorText`,`CustomComponent`],$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    accept: ['.jpg', '.jpeg', '.png'],
    label: 'Название поля',
    onChange: () => {}
  },
  parameters: {
    docs: {
      label: true,
      disable: true
    }
  }
}`,...$.parameters?.docs?.source}}}})))()}it();export{_ as Accept,S as BasicUsage,w as CustomComponent,E as CustomDropSize,O as CustomErrorText,A as FileError,M as FileLoading,$ as Interaction,P as IsDisabled,I as IsDisabledWithFile,R as IsError,B as Label,H as MaxFileSize,G as OnDeleteFile,q as OtherFormatPreview,X as PreviewPdf,Q as Restrictions,rt as __namedExportsOrder,nt as default};