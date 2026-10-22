const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PdfViewer-CD5DFGGW.js","./rolldown-runtime-C0FnF6B9.js","./preview-BexmKZ07.js","./useViewportType-DdV0h9U1.js","./getThemeProps-B6SuYCUU.js","./useTheme-CCf8XMpT.js","./personalDataSecurity-rn4w1JPD.js","./Pagination-CRZcnWiS.js","./useControlled-C6FkYGJl.js","./ChevronROutlineMd-tsG4H1SE.js","./ChevronLOutlineMd-DijaP-oc.js","./LoadingPlaceholder-bEyVmNRP.js","./ContentState-BtSQ6c24.js","./useLoadingState-DNvUyS2g.js","./ContentState-Ck0IsDq1.js","./constants-BnAVTLDv.js","./Pagination-Bo8z2L-h.js","./constants-sEDAf11F.js","./AddOutlineMd-jUV0MSGn.js","./MinusOutlineMd-DxKO5sUr.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{E as n,Ha as r,Ua as i,Va as a,ct as o,ji as s,lt as c,w as l,xa as u,yn as d}from"./preview-BexmKZ07.js";import{n as f,t as p}from"./FormPreviewFileUploader-BghSyQCc.js";import{l as m,n as h,t as g}from"./useForm-Df-TG2CS.js";import{t as _}from"./Form-kcX5TTXK.js";import{n as v,t as y}from"./FormSubmitButton-6n-l3wkD.js";import{n as b,t as x}from"./object-CXqDZ5YO.js";import{n as S,t as C}from"./uploadedFile-raY-H5Xa.js";import{n as w,t as T}from"./axios-DJY38NIv.js";import{t as E}from"./src-BGN3AVSP.js";import{a as D,l as O}from"./NotificationStackContainer-CHg0dSrS.js";import{t as k}from"./Notification-B0RLjq97.js";var A,j,M,N,P,F,I;function L(){return(L=e((()=>{w(),A=t(E()),j=0,M=()=>(j+=1,j),N=Array.from({length:10},(e,t)=>(t+1)/10),P=()=>Math.random()*300+200,F=e=>new Promise(t=>setTimeout(t,e)),new A.default(T).onPost(`/api/upload`).reply(async e=>{let t={id:`upl-${M()}`},n=e.data.get(`file`).size;for(let t of N)await F(P()),e.onUploadProgress&&e.onUploadProgress({loaded:Math.floor(n*t),total:n,lengthComputable:!0,bytes:Math.floor(n*t)});return[200,t]}),I=(e,t)=>T.post(`/api/upload`,e,{headers:{"Content-Type":`multipart/form-data`},...t||{}})})))()}var R;function z(){return(z=e((()=>{d(),R=s.div`
  width: 100%;
  max-width: 360px;
`})))()}function B(){return(B=e((()=>{L(),z()})))()}var V,H;function U(){return(U=e((()=>{x(),C(),l(),o(),k(),_(),y(),g(),f(),B(),V=u(),H=()=>{let e=b({previewFileUploader:S()}),t=h({defaultValues:{previewFileUploader:null},validationSchema:e}),r=(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),I(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},i=t.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)}));return(0,V.jsx)(n,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,V.jsxs)(R,{children:[(0,V.jsx)(m,{form:t,onSubmit:i,children:(0,V.jsxs)(c,{container:!0,spacing:4,children:[(0,V.jsx)(p,{control:t.control,name:`previewFileUploader`,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5242880,notify:D,onUploadFile:r}),(0,V.jsx)(v,{children:`Submit`})]})}),(0,V.jsx)(O,{})]})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const validationSchema = object<FormValues>({
    previewFileUploader: uploadedFile()
  });
  const form = useForm<FormValues>({
    defaultValues: {
      previewFileUploader: null
    },
    validationSchema
  });
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
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  }));
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <Form form={form} onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <FormPreviewFileUploader control={form.control} name="previewFileUploader" accept={['.jpg', '.jpeg', '.png']} maxFileSize={5 * 1024 * 1024} notify={notify} onUploadFile={handleUploadFile} />
            <FormSubmitButton>Submit</FormSubmitButton>
          </Grid>
        </Form>

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K,q;function J(){return(J=e((()=>{x(),C(),W=a(),l(),o(),k(),_(),y(),g(),f(),B(),G=u(),i(),K=(0,W.lazy)(()=>r(()=>import(`./PdfViewer-CD5DFGGW.js`).then(e=>(e.r(),e.n)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url)),q=()=>{let[e,t]=(0,W.useState)([]),r=b({previewFileUploader:S()}),i=h({defaultValues:{previewFileUploader:{id:`1`,name:`Памятка с инструкциями`,type:`application/pdf`,url:`./passport.pdf`,size:1942679}},validationSchema:r}),a=(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),I(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},o=i.handleSubmit(()=>new Promise(t=>{window.alert(JSON.stringify({message:`Теперь эти файлы можно удалить`,deletedFileIds:e},null,2)),t()}));return(0,G.jsx)(n,{imagesMap:{noDataImgSrc:``,defaultErrorImgSrc:``,outdatedReleaseErrorImgSrc:``,uploadFileImgSrc:`./upload-file-stub.svg`,errorFileImgSrc:`./error-file-stub.svg`},children:(0,G.jsxs)(R,{children:[(0,G.jsx)(m,{form:i,onSubmit:o,children:(0,G.jsxs)(c,{container:!0,spacing:4,children:[(0,G.jsx)(p,{control:i.control,PdfViewer:K,name:`previewFileUploader`,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5242880,notify:D,onUploadFile:a,onDeleteFile:e=>(t(t=>[...t,e]),Promise.resolve())}),(0,G.jsx)(v,{children:`Submit`})]})}),(0,G.jsx)(O,{})]})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [deletedFileIds, setDeletedFileIds] = useState<FileId[]>([]);
  const validationSchema = object<FormValues>({
    previewFileUploader: uploadedFile()
  });
  const form = useForm<FormValues>({
    defaultValues: {
      previewFileUploader: {
        id: '1',
        name: 'Памятка с инструкциями',
        type: 'application/pdf',
        url: './passport.pdf',
        size: 1942679
      }
    },
    validationSchema
  });
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
  const handleSubmit = form.handleSubmit(() => new Promise<void>(resolve => {
    window.alert(JSON.stringify({
      message: 'Теперь эти файлы можно удалить',
      deletedFileIds
    }, null, 2));
    resolve();
  }));
  const handleDeleteFile: PreviewFileUploaderProps['onDeleteFile'] = fileId => {
    setDeletedFileIds(prev => [...prev, fileId]);
    return Promise.resolve();
  };
  return <ConfigProvider imagesMap={{
    noDataImgSrc: '',
    defaultErrorImgSrc: '',
    outdatedReleaseErrorImgSrc: '',
    uploadFileImgSrc: './upload-file-stub.svg',
    errorFileImgSrc: './error-file-stub.svg'
  }}>
      <Wrapper>
        <Form form={form} onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <FormPreviewFileUploader control={form.control} PdfViewer={PdfViewer} name="previewFileUploader" accept={['.jpg', '.jpeg', '.png']} maxFileSize={5 * 1024 * 1024} notify={notify} onUploadFile={handleUploadFile} onDeleteFile={handleDeleteFile} />
            <FormSubmitButton>Submit</FormSubmitButton>
          </Grid>
        </Form>

        <NotificationContainer />
      </Wrapper>
    </ConfigProvider>;
}`,...q.parameters?.docs?.source},description:{story:"Параметр `onDeleteFile` необходимо использовать для сбора идентификаторов файлов, помеченных на удаление.\nУдалять файлы необходимо на `submit` формы для избежания ситуаций, когда файл удален с сервера до подтверждения формы пользователем",...q.parameters?.docs?.description}}};try{q.displayName=`CollectFile`,q.__docgenInfo={description:"Параметр `onDeleteFile` необходимо использовать для сбора идентификаторов файлов, помеченных на удаление.\nУдалять файлы необходимо на `submit` формы для избежания ситуаций, когда файл удален с сервера до подтверждения формы пользователем",displayName:`CollectFile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPreviewFileUploader/stories/CollectFile.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X;function Z(){return(Z=e((()=>{f(),U(),J(),Y={title:`React-Hook-Form/FormPreviewFileUploader`,component:p},X=[`BasicUsage`,`CollectFile`]})))()}Z();export{H as BasicUsage,q as CollectFile,X as __namedExportsOrder,Y as default};