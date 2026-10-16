import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{Va as n,ct as r,ji as i,lt as a,xa as o,yn as s}from"./preview-Cav_CXYC.js";import{n as c,t as l}from"./FormFileUploader-i_F6Xo_q.js";import{l as u,n as d,t as f}from"./useForm-DwJ9DFxK.js";import{t as p}from"./Form-fB0qqZxN.js";import{n as m,t as h}from"./FormSubmitButton-D7Rw1ZSm.js";import{d as g,f as ee,n as te,t as _}from"./createGuard-Bnbb_ytZ.js";import{n as v,t as y}from"./object-CXqDZ5YO.js";import{n as b,t as ne}from"./compose-BaXbo_LB.js";import{n as re,t as x}from"./array-FVt_FltB.js";import{n as S,t as C}from"./uploadedFile-raY-H5Xa.js";import{n as ie,t as w}from"./axios-DJY38NIv.js";import{t as ae}from"./src-BGN3AVSP.js";import{a as T,l as E}from"./NotificationStackContainer-Co-R_e-2.js";import{t as D}from"./Notification-DyqGKSDm.js";var O;function k(){return(k=e((()=>{ee(),O={code:g(`file-list-array`),message:`Не является массивом`}})))()}var A;function j(){return(j=e((()=>{re(),b(),te(),C(),k(),A=(...e)=>_((t,n)=>{if(x()(t))return n.createError({code:O.code,message:O.message});let r=t;for(let e of r)if(S()(e)){let t=S()(e,n);if(t)return t}return ne(...e)(r,n)})})))()}var M;function N(){return(N=e((()=>{s(),M=i.div`
  width: 100%;
  max-width: 552px;
`})))()}var P,F,I,L,R,z,B;function V(){return(V=e((()=>{ie(),P=t(ae()),F=0,I=()=>(F+=1,F),L=Array.from({length:10},(e,t)=>(t+1)/10),R=()=>Math.random()*300+200,z=e=>new Promise(t=>setTimeout(t,e)),new P.default(w).onPost(`/api/upload`).reply(async e=>{let t={id:`upl-${I()}`},n=e.data.get(`file`).size;for(let t of L)await z(R()),e.onUploadProgress&&e.onUploadProgress({loaded:Math.floor(n*t),total:n,lengthComputable:!0,bytes:Math.floor(n*t)});return[200,t]}),B=(e,t)=>w.post(`/api/upload`,e,{headers:{"Content-Type":`multipart/form-data`},...t||{}})})))()}function H(){return(H=e((()=>{N(),V()})))()}var U,W;function G(){return(G=e((()=>{y(),j(),r(),D(),p(),h(),f(),c(),H(),U=o(),W=()=>{let e=v({fileUploader:A()}),t=d({validationSchema:e}),n=(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),B(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},r=t.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)}));return(0,U.jsxs)(M,{children:[(0,U.jsx)(u,{form:t,onSubmit:r,children:(0,U.jsxs)(a,{container:!0,spacing:4,children:[(0,U.jsx)(l,{control:t.control,name:`fileUploader`,accept:[`.jpg`,`.jpeg`,`.png`,`.xml`],isMultiple:!0,maxFileCount:5,maxFileSize:5242880,notify:T,onUploadFile:n}),(0,U.jsx)(m,{children:`Submit`})]})}),(0,U.jsx)(E,{})]})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const validationSchema = object<FormValues>({
    fileUploader: uploadedFileList()
  });
  const form = useForm<FormValues>({
    validationSchema
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
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  }));
  return <Wrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <FormFileUploader control={form.control} name="fileUploader" accept={['.jpg', '.jpeg', '.png', '.xml']} isMultiple maxFileCount={5} maxFileSize={5 * 1024 * 1024} notify={notify} onUploadFile={handleUploadFile} />
          <FormSubmitButton>Submit</FormSubmitButton>
        </Grid>
      </Form>

      <NotificationContainer />
    </Wrapper>;
}`,...W.parameters?.docs?.source}}}})))()}var K,q,J,Y;function X(){return(X=e((()=>{y(),j(),K=n(),r(),D(),p(),h(),f(),c(),H(),q=o(),J=[{id:`default-1`,name:`document.pdf`,type:`application/pdf`,size:1024,status:{}},{id:`default-2`,name:`image.png`,type:`image/png`,size:2048,status:{}}],Y=()=>{let[e,t]=(0,K.useState)([]),n=v({fileUploader:A()}),r=d({validationSchema:n,defaultValues:{fileUploader:J}}),i=(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),B(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},o=e=>(t(t=>[...t,e]),Promise.resolve()),s=r.handleSubmit(()=>new Promise(t=>{window.alert(JSON.stringify({message:`Теперь эти файлы можно удалить`,deletedFileIds:e},null,2)),t()}));return(0,q.jsxs)(M,{children:[(0,q.jsx)(u,{form:r,onSubmit:s,children:(0,q.jsxs)(a,{container:!0,spacing:4,children:[(0,q.jsx)(l,{control:r.control,name:`fileUploader`,accept:[`.jpg`,`.jpeg`,`.png`,`.xml`,`.pdf`],isMultiple:!0,maxFileCount:5,maxFileSize:5242880,notify:T,onUploadFile:i,onDeleteFile:o}),(0,q.jsx)(m,{children:`Submit`})]})}),(0,q.jsx)(E,{})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [deletedFileIds, setDeletedFileIds] = useState<FileId[]>([]);
  const validationSchema = object<FormValues>({
    fileUploader: uploadedFileList()
  });
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      fileUploader: defaultFiles
    }
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
  const handleDeleteFile: FileUploaderProps['onDeleteFile'] = fileId => {
    setDeletedFileIds(prev => [...prev, fileId]);
    return Promise.resolve();
  };
  const handleSubmit = form.handleSubmit(() => new Promise<void>(resolve => {
    window.alert(JSON.stringify({
      message: 'Теперь эти файлы можно удалить',
      deletedFileIds
    }, null, 2));
    resolve();
  }));
  return <Wrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <FormFileUploader control={form.control} name="fileUploader" accept={['.jpg', '.jpeg', '.png', '.xml', '.pdf']} isMultiple maxFileCount={5} maxFileSize={5 * 1024 * 1024} notify={notify} onUploadFile={handleUploadFile} onDeleteFile={handleDeleteFile} />
          <FormSubmitButton>Submit</FormSubmitButton>
        </Grid>
      </Form>

      <NotificationContainer />
    </Wrapper>;
}`,...Y.parameters?.docs?.source},description:{story:"Параметр `onDeleteFile` необходимо использовать для сбора идентификаторов файлов, помеченных на удаление.\nУдалять файлы необходимо на `submit` формы для избежания ситуаций, когда файл удален с сервера до подтверждения формы пользователем",...Y.parameters?.docs?.description}}};try{Y.displayName=`CollectFiles`,Y.__docgenInfo={description:"Параметр `onDeleteFile` необходимо использовать для сбора идентификаторов файлов, помеченных на удаление.\nУдалять файлы необходимо на `submit` формы для избежания ситуаций, когда файл удален с сервера до подтверждения формы пользователем",displayName:`CollectFiles`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFileUploader/stories/CollectFiles.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q;function $(){return($=e((()=>{c(),G(),X(),Z={title:`React-Hook-Form/FormFileUploader`,component:l,parameters:{docs:{description:{component:`Обертка [FileUploader](/story/files-fileUploader--docs) для react-hook-form`}}}},Q=[`BasicUsage`,`CollectFiles`]})))()}$();export{W as BasicUsage,Y as CollectFiles,Q as __namedExportsOrder,Z as default};