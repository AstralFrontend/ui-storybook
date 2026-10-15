import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,Va as n,Z as r,dt as i,ft as a,it as ee,ji as o,rt as te,xa as s,yn as c}from"./preview-C6mvn2Tz.js";import{n as ne,t as re}from"./useViewportType-C0jaZRBE.js";import{A as ie,C as ae,E as oe,S as se,T as ce,d as le,j as ue,p as de}from"./useInterval-Bn4Gy1IC.js";import{t as fe}from"./Tooltip-CxbDaSYS.js";import{t as pe}from"./Link-DaJXF27g.js";import{t as me}from"./Link-C9v5pUMT.js";import{t as he}from"./Tooltip-ClAxxMrX.js";import{t as ge}from"./TextField-ywt4PGrq.js";import{t as _e}from"./TextField-B317KcTz.js";import{i as ve,n as l,r as ye,t as u}from"./FileUploader-BwpCQmBt.js";import{n as be,t as xe}from"./BinOutlineMd-B1iU0vfD.js";import{a as d,l as f}from"./NotificationStackContainer-BTCHk5TF.js";import{t as p}from"./Notification-BrZ-22gx.js";import{n as m,t as h}from"./faker-KLikhBX8.js";var g;function Se(){return(Se=e((()=>{c(),g=o.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 552px;
`})))()}function _(){return(_=e((()=>{Se()})))()}var Ce,v,y;function we(){return(we=e((()=>{Ce=n(),p(),l(),_(),v=s(),y=()=>{let[e,t]=(0,Ce.useState)([]);return(0,v.jsxs)(g,{children:[(0,v.jsx)(u,{isMultiple:!0,accept:[`image/png`,`image/jpeg`,`.pdf`,`.xml`],maxFileCount:5,maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)}}),(0,v.jsx)(f,{})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple accept={['image/png', 'image/jpeg', '.pdf', '.xml']} maxFileCount={5} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...y.parameters?.docs?.source},description:{story:"```accept``` — список разрешённых расширений или mime-типов",...y.parameters?.docs?.description}}};try{y.displayName=`Accept`,y.__docgenInfo={description:"```accept``` — список разрешённых расширений или mime-типов",displayName:`Accept`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/Accept.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Te,b,x;function Ee(){return(Ee=e((()=>{Te=n(),p(),l(),m(),_(),b=s(),x=()=>{let[e,t]=(0,Te.useState)();return(0,b.jsxs)(g,{children:[(0,b.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)}}),(0,b.jsx)(f,{})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
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
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <Wrapper>
      <FileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...x.parameters?.docs?.source}}}})))()}var De,S,Oe,ke,Ae,je,Me,Ne,Pe,Fe,C,w,Ie,Le,Re,ze,Be,T;function Ve(){return(Ve=e((()=>{ue(),De=n(),xe(),te(),p(),c(),r(),_e(),he(),i(),re(),ce(),ye(),le(),m(),S=s(),Oe=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  width: 100%;
  max-width: 748px;
`,ke=o.ul`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  margin: 0;
  padding: 0;

  list-style-type: none;
`,Ae=o.li`
  padding: ${({theme:e})=>e.spacing(4)};

  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,je=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,Me=o.div`
  display: flex;
  justify-content: space-between;
`,Ne=o.span`
  display: inline;  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Pe=o(a)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Fe=o.span`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
    align-items: center;
  }
`,C=5,w=62914560,Ie=e=>e.reduce((e,t)=>e+(t?.size||0),0),Le=e=>`${Math.ceil(Ie(e)/1024/1024)}/${Math.ceil(w/1024/1024)}`,Re=e=>`${e.length}/${C}`,ze=({onDelete:e})=>(0,S.jsx)(fe,{title:`Удалить`,children:(0,S.jsx)(ee,{variant:`text`,onClick:e,children:(0,S.jsx)(be,{})})}),Be=[{id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,size:543210},{id:`2`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:98654,status:{isUploadError:!0,errorMsg:`Ошибка загрузки файла`}},{id:`3`,name:`Согласие_на_обработку_персональных_данных_Сидоров.pdf`,type:`application/pdf`,size:563210,status:{isLoading:!0,progress:85}},{id:`4`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:987344321,status:{isLoading:!0,progress:15}}],T=()=>{let[e,n]=(0,De.useState)(Be),{isMobile:r}=ne(),i=`Перетащите или загрузите файлы. Не более ${C} файлов за раз, размером не более ${ie(w)}. Доступные форматы: txt, doc, docx, xls, xlsx, csv, xml, pdf, rtf, htm, html, jpg, jpeg, tif, tiff, png, zip`,ee=`Не более ${C} файлов за раз, размером не более ${ie(w)}. Доступные форматы: txt, doc, docx, xls, xlsx, csv, xml, pdf, rtf, htm, html, jpg, jpeg, tif, tiff, png, zip`,o=(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},te=e=>{n(e)},s=t=>n(e?.filter(({id:e})=>e!==t));return(0,S.jsx)(Oe,{children:(0,S.jsx)(e=>{let{dropZoneProps:n,fileListProps:{files:r,...i}}=de(e);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(oe,{...n,isVisibleAddFile:!0,uploadButtonProps:{...n.uploadButtonProps,isDisabled:r.length===C||Ie(r)/1024/1024>=w}}),!!r.length&&(0,S.jsxs)(Me,{children:[(0,S.jsxs)(Fe,{children:[(0,S.jsx)(a,{variant:`subtitle1`,children:`Пакет документов`}),(0,S.jsxs)(a,{variant:`subtitle1`,children:[`(`,(0,S.jsx)(t,{label:Le(r)}),` Мб)`]})]}),(0,S.jsxs)(Fe,{children:[(0,S.jsx)(a,{variant:`subtitle1`,children:`Всего добавлено`}),(0,S.jsxs)(a,{variant:`subtitle1`,children:[` `,(0,S.jsx)(t,{label:Re(r)})]})]})]}),(0,S.jsx)(ke,{children:r?.map(e=>(0,S.jsx)(Ae,{children:e.status?.isLoading||e.status?.isUploadError||e.status?.isRestrictionError?(0,S.jsx)(ve,{...e,...i}):(0,S.jsxs)(je,{children:[(0,S.jsxs)(Me,{children:[(0,S.jsxs)(Pe,{children:[e.name,` `,(0,S.jsx)(Ne,{children:`• `}),ie(e.size)]}),(0,S.jsx)(ze,{onDelete:()=>s(e.id)})]}),(0,S.jsx)(ge,{label:`Дополнительная информация о документе`,fullWidth:!0})]})},e.id))})]})},{value:e,accept:[`.txt`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.csv`,`.xml`,`.pdf`,`.rtf`,`.htm`,`.html`,`.jpg`,`.jpeg`,`.tif`,`.tiff`,`.png`,`.zip`],placeholder:r?ee:i,maxFileSize:2097152,notify:d,onUploadFile:o,onChange:te,isMultiple:!0,maxFileCount:C})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  // import { formatFileSizeToView } from '@astral/utils/file/formatFileSizeToView';

  const [value, setValue] = useState<UploadFile[]>(MockFiles);
  const {
    isMobile
  } = useViewportType();
  const mainPlaceholder = \`Перетащите или загрузите файлы. Не более \${maxFileCount} файлов за раз, размером не более \${formatFileSizeToView(maxFilesSize)}. Доступные форматы: txt, doc, docx, xls, xlsx, csv, xml, pdf, rtf, htm, html, jpg, jpeg, tif, tiff, png, zip\`;
  const mobilePlaceholder = \`Не более \${maxFileCount} файлов за раз, размером не более \${formatFileSizeToView(maxFilesSize)}. Доступные форматы: txt, doc, docx, xls, xlsx, csv, xml, pdf, rtf, htm, html, jpg, jpeg, tif, tiff, png, zip\`;
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
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  const handleDelete = (fileId: FileId) => {
    return setValue(value?.filter(({
      id
    }) => id !== fileId));
  };
  const CustomFileUploaderRealization = (props: FileUploaderProps) => {
    const {
      dropZoneProps,
      fileListProps: {
        files,
        ...restFileProps
      }
    } = useFileUploader(props);
    return <>
        <FileUploaderDropzone {...dropZoneProps} isVisibleAddFile uploadButtonProps={{
        ...dropZoneProps.uploadButtonProps,
        isDisabled: files.length === maxFileCount || getTotalSize(files) / 1024 / 1024 >= maxFilesSize
      }} />

        {Boolean(files.length) && <FileInfoTitle>
            <DocumentsInfo>
              <Typography variant="subtitle1">Пакет документов</Typography>
              <Typography variant="subtitle1">
                (
                <Tag label={getTotalSizeText(files)} /> Мб)
              </Typography>
            </DocumentsInfo>

            <DocumentsInfo>
              <Typography variant="subtitle1">Всего добавлено</Typography>
              <Typography variant="subtitle1">
                {' '}
                <Tag label={getTotalCountText(files)} />
              </Typography>
            </DocumentsInfo>
          </FileInfoTitle>}

        <List>
          {files?.map(file => <ListItem key={file.id}>
              {file.status?.isLoading || file.status?.isUploadError || file.status?.isRestrictionError ? <FileUploaderFile {...file} {...restFileProps} /> : <FileInfo>
                  <FileInfoTitle>
                    <FileTitleMobile>
                      {file.name} <MobileWrapper>&bull; </MobileWrapper>
                      {formatFileSizeToView(file.size)}
                    </FileTitleMobile>
                    <DeleteAction onDelete={() => handleDelete(file.id)} />
                  </FileInfoTitle>

                  <TextField label="Дополнительная информация о документе" fullWidth />
                </FileInfo>}
            </ListItem>)}
        </List>
      </>;
  };
  return <Wrapper>
      <CustomFileUploaderRealization value={value} accept={['.txt', '.doc', '.docx', '.xls', '.xlsx', '.csv', '.xml', '.pdf', '.rtf', '.htm', '.html', '.jpg', '.jpeg', '.tif', '.tiff', '.png', '.zip']} placeholder={!isMobile ? mainPlaceholder : mobilePlaceholder} maxFileSize={2 * 1024 * 1024} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} isMultiple maxFileCount={maxFileCount} />
    </Wrapper>;
}`,...T.parameters?.docs?.source},description:{story:`При необходимости, можно скомпоновать кастомный компонент, используя хук useFileUploaderLogic, и распределяя пропсы по зависимым компонент`,...T.parameters?.docs?.description}}};try{T.displayName=`CustomComponent`,T.__docgenInfo={description:`При необходимости, можно скомпоновать кастомный компонент, используя хук useFileUploaderLogic, и распределяя пропсы по зависимым компонент`,displayName:`CustomComponent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/CustomComponent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var He,E,D;function Ue(){return(Ue=e((()=>{He=n(),p(),c(),ae(),l(),_(),E=s(),D=()=>{let e=o(u)`  
    .${se.dropzone} {
      max-width: 400px;
      width: 100%;
      height: 500px;
    }
  `,[t,n]=(0,He.useState)([]);return(0,E.jsxs)(g,{children:[(0,E.jsx)(e,{isMultiple:!0,value:t,accept:[`.jpg`,`.jpeg`,`.png`],maxFileCount:3,maxFileSize:5248e3,notify:d,onChange:e=>{n(e)}}),(0,E.jsx)(f,{})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const FileUploaderStyled = styled(FileUploader)\`  
    .\${fileUploaderClassnames.dropzone} {
      max-width: 400px;
      width: 100%;
      height: 500px;
    }
  \`;
  const [value, setValue] = useState<UploadFile[]>([]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploaderStyled isMultiple value={value} accept={['.jpg', '.jpeg', '.png']} maxFileCount={3} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...D.parameters?.docs?.source},description:{story:"Класс из константы `fileUploaderClassnames.dropzone` дает возможность изменять размеры drop зоны",...D.parameters?.docs?.description}}};try{D.displayName=`CustomDropSize`,D.__docgenInfo={description:"Класс из константы `fileUploaderClassnames.dropzone` дает возможность изменять размеры drop зоны",displayName:`CustomDropSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/CustomDropSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var We,Ge,O;function Ke(){return(Ke=e((()=>{We=n(),p(),l(),m(),_(),Ge=s(),O=()=>{let e=(e,t)=>`${t.message} файла с id: ${e}. Файл с таким расширением не поддерживается`,[t,n]=(0,We.useState)([{id:`1`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:98654,status:{isUploadError:!0,errorMsg:e(`1`,Error(`Ошибка загрузки`))}}]);return(0,Ge.jsxs)(g,{children:[(0,Ge.jsx)(u,{isMultiple:!0,accept:[`text/plain`],maxFileCount:5,maxFileSize:5248e3,notify:d,value:t,onChange:e=>{n(e)},onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{if(!n.aborted)throw r(e,t),Error(`test error`)}}).then(e=>e.data)},getErrorMessage:e}),(0,Ge.jsx)(f,{})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const getErrorMessage = (fileId: FileId, err: Error) => {
    return \`\${err.message} файла с id: \${fileId}. Файл с таким расширением не поддерживается\`;
  };
  const [value, setValue] = useState<UploadFile[]>([{
    id: '1',
    name: 'Паспорт_РФ.pdf',
    type: 'application/pdf',
    size: 98654,
    status: {
      isUploadError: true,
      errorMsg: getErrorMessage('1', new Error('Ошибка загрузки'))
    }
  }]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
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
        throw new Error('test error');
      }
    }).then(response => response.data);
  };
  return <Wrapper>
      <FileUploader isMultiple accept={['text/plain']} maxFileCount={5} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} onUploadFile={handleUploadFile} getErrorMessage={getErrorMessage} />

      <NotificationContainer />
    </Wrapper>;
}`,...O.parameters?.docs?.source},description:{story:"```getErrorMessage``` — позволяет задавать кастомный текст ошибки",...O.parameters?.docs?.description}}};try{O.displayName=`CustomErrorText`,O.__docgenInfo={description:"```getErrorMessage``` — позволяет задавать кастомный текст ошибки",displayName:`CustomErrorText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/CustomErrorText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var qe,k,Je,Ye,A;function Xe(){return(Xe=e((()=>{qe=n(),me(),p(),c(),i(),l(),_(),k=s(),Je=o(g)`
  max-width: 600px;
`,Ye=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
  text-align: left;
`,A=()=>{let[e,t]=(0,qe.useState)();return(0,k.jsxs)(Je,{children:[(0,k.jsx)(u,{label:`Печатная версия сертификата ЭП`,accept:[`.pdf`,`.jpeg`,`.jpg`,`.png`],maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)},placeholder:(0,k.jsxs)(Ye,{children:[(0,k.jsxs)(a,{color:`grey`,colorIntensity:`600`,variant:`caption`,children:[`1. Скачайте`,` `,(0,k.jsx)(pe,{href:`certificate.pdf`,isDownload:!0,children:`печатную версию сертификата ЭП`})]}),(0,k.jsx)(a,{color:`grey`,colorIntensity:`600`,variant:`caption`,children:`2. Подпишите бланк своей подписью и подписью сотрудника, сфотографируйте подписанный бланк`}),(0,k.jsx)(a,{color:`grey`,colorIntensity:`600`,variant:`caption`,children:`3. Загрузите его в формате PDF/A-1A, JPEG, PNG размером не более 5 Мб`})]})}),(0,k.jsx)(f,{})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  const placeholder = <PlaceholderContent>
      <Typography color="grey" colorIntensity="600" variant="caption">
        1. Скачайте{' '}
        <Link href="certificate.pdf" isDownload>
          печатную версию сертификата ЭП
        </Link>
      </Typography>
      <Typography color="grey" colorIntensity="600" variant="caption">
        2. Подпишите бланк своей подписью и подписью сотрудника, сфотографируйте
        подписанный бланк
      </Typography>
      <Typography color="grey" colorIntensity="600" variant="caption">
        3. Загрузите его в формате PDF/A-1A, JPEG, PNG размером не более 5 Мб
      </Typography>
    </PlaceholderContent>;
  return <WideWrapper>
      <FileUploader label="Печатная версия сертификата ЭП" accept={['.pdf', '.jpeg', '.jpg', '.png']} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} placeholder={placeholder} />

      <NotificationContainer />
    </WideWrapper>;
}`,...A.parameters?.docs?.source},description:{story:"```placeholder``` — позволяет установить ReactNode в плейсхолдер",...A.parameters?.docs?.description}}};try{A.displayName=`CustomPlaceholder`,A.__docgenInfo={description:"```placeholder``` — позволяет установить ReactNode в плейсхолдер",displayName:`CustomPlaceholder`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/CustomPlaceholder.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ze,j,M;function Qe(){return(Qe=e((()=>{Ze=n(),p(),l(),_(),j=s(),M=()=>{let[e,t]=(0,Ze.useState)([]);return(0,j.jsxs)(g,{children:[(0,j.jsx)(u,{isMultiple:!0,accept:[`text/plain`],maxFileCount:5,maxFileSize:5248e3,notify:d,value:e,onChange:e=>{t(e)},placeholder:`Prop placeholder позволяет установить кастомный текст плейсхолдера. Это полезно при большом количестве поддерживаемых форматов`}),(0,j.jsx)(f,{})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple accept={['text/plain']} maxFileCount={5} maxFileSize={5248000} notify={notify} value={value} onChange={handleChange} placeholder="Prop placeholder позволяет установить кастомный текст плейсхолдера. Это полезно при большом количестве поддерживаемых форматов" />

      <NotificationContainer />
    </Wrapper>;
}`,...M.parameters?.docs?.source},description:{story:"```placeholder``` — позволяет установить кастомный текст плейсхолдера",...M.parameters?.docs?.description}}};try{M.displayName=`CustomPlaceholderText`,M.__docgenInfo={description:"```placeholder``` — позволяет установить кастомный текст плейсхолдера",displayName:`CustomPlaceholderText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/CustomPlaceholderText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var $e,N,P;function et(){return(et=e((()=>{$e=n(),p(),l(),_(),N=s(),P=()=>{let[e,t]=(0,$e.useState)([{id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,size:543210},{id:`2`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:98654,status:{isUploadError:!0,errorMsg:`Ошибка загрузки файла`}}]);return(0,N.jsxs)(g,{children:[(0,N.jsx)(u,{accept:[`.jpg`,`.jpeg`,`.png`],isMultiple:!0,value:e,maxFileCount:5,maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,N.jsx)(f,{})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([{
    id: '1',
    name: 'Согласие_на_обработку_персональных_данных_Иванов.pdf',
    type: 'application/pdf',
    size: 543210
  }, {
    id: '2',
    name: 'Паспорт_РФ.pdf',
    type: 'application/pdf',
    size: 98654,
    status: {
      isUploadError: true,
      errorMsg: 'Ошибка загрузки файла'
    }
  }]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader accept={['.jpg', '.jpeg', '.png']} isMultiple value={value} maxFileCount={5} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...P.parameters?.docs?.source}}}})))()}var tt,F,I;function nt(){return(nt=e((()=>{tt=n(),p(),l(),_(),F=s(),I=()=>{let[e,t]=(0,tt.useState)([{id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,size:543210,status:{isLoading:!0,progress:85}},{id:`2`,name:`Паспорт_РФ.pdf`,type:`application/pdf`,size:987654321,status:{isLoading:!0,progress:15}}]);return(0,F.jsxs)(g,{children:[(0,F.jsx)(u,{isMultiple:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileCount:5,maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,F.jsx)(f,{})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([{
    id: '1',
    name: 'Согласие_на_обработку_персональных_данных_Иванов.pdf',
    type: 'application/pdf',
    size: 543210,
    status: {
      isLoading: true,
      progress: 85
    }
  }, {
    id: '2',
    name: 'Паспорт_РФ.pdf',
    type: 'application/pdf',
    size: 987654321,
    status: {
      isLoading: true,
      progress: 15
    }
  }]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple value={value} accept={['.jpg', '.jpeg', '.png']} maxFileCount={5} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...I.parameters?.docs?.source}}}})))()}var rt,L,it,R;function at(){return(at=e((()=>{rt=n(),p(),c(),i(),l(),_(),L=s(),it=o(g)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,R=()=>{let[e,t]=(0,rt.useState)(),[n,r]=(0,rt.useState)(``);return(0,L.jsxs)(it,{children:[(0,L.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onChange:(e,n)=>{t(e),n?.inputSourceType&&r(n.inputSourceType===`dragAndDrop`?`Drag and Drop`:`File Input`)}}),(0,L.jsxs)(a,{variant:`body1`,children:[`Файл был загружен через: `,n]}),(0,L.jsx)(f,{})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const [sourceType, setSourceType] = useState<string>('');
  const handleChange = (file: UploadFile | null, metaInfo?: {
    inputSourceType?: 'fileInput' | 'dragAndDrop';
  }) => {
    setValue(file);
    if (metaInfo?.inputSourceType) {
      setSourceType(metaInfo.inputSourceType === 'dragAndDrop' ? 'Drag and Drop' : 'File Input');
    }
  };
  return <StyledWrapper>
      <FileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onChange={handleChange} />
      <Typography variant="body1">
        Файл был загружен через: {sourceType}
      </Typography>
      <NotificationContainer />
    </StyledWrapper>;
}`,...R.parameters?.docs?.source},description:{story:"В методе `onChange` передается `metaInfo` с информацией о способе загрузки файла.",...R.parameters?.docs?.description}}};try{R.displayName=`InputSourceType`,R.__docgenInfo={description:"В методе `onChange` передается `metaInfo` с информацией о способе загрузки файла.",displayName:`InputSourceType`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/InputSourceType.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z;function ot(){return(ot=e((()=>{z={args:{accept:[`.jpg`,`.jpeg`,`.png`],label:`Название поля`,onChange:()=>{}},parameters:{docs:{label:!0,disable:!0}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}var st,B,V;function ct(){return(ct=e((()=>{st=n(),p(),l(),_(),B=s(),V=()=>{let[e,t]=(0,st.useState)();return(0,B.jsxs)(g,{children:[(0,B.jsx)(u,{isDisabled:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,B.jsx)(f,{})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <Wrapper>
      <FileUploader isDisabled value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...V.parameters?.docs?.source}}}})))()}var lt,H,ut,U;function dt(){return(dt=e((()=>{lt=n(),p(),l(),_(),H=s(),ut={id:`1`,name:`Согласие_на_обработку_персональных_данных_Иванов.pdf`,type:`application/pdf`,url:`./document.pdf`,size:543210},U=()=>{let[e,t]=(0,lt.useState)(ut);return(0,H.jsxs)(g,{children:[(0,H.jsx)(u,{isDisabled:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`,`.pdf`],maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,H.jsx)(f,{})]})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>(defaultFile);
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <Wrapper>
      <FileUploader isDisabled value={value} accept={['.jpg', '.jpeg', '.png', '.pdf']} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...U.parameters?.docs?.source}}}})))()}var ft,W,G;function pt(){return(pt=e((()=>{ft=n(),p(),l(),m(),_(),W=s(),G=()=>{let[e,t]=(0,ft.useState)();return(0,W.jsxs)(g,{children:[(0,W.jsx)(u,{label:`Название поля`,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)}}),(0,W.jsx)(f,{})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile | null>();
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
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <Wrapper>
      <FileUploader label="Название поля" value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var mt,K,q;function ht(){return(ht=e((()=>{mt=n(),p(),l(),_(),K=s(),q=()=>{let[e,t]=(0,mt.useState)([]);return(0,K.jsxs)(g,{children:[(0,K.jsx)(u,{isMultiple:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileCount:3,maxFileSize:5248e3,notify:d,onChange:e=>{t(e)}}),(0,K.jsx)(f,{})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple value={value} accept={['.jpg', '.jpeg', '.png']} maxFileCount={3} maxFileSize={5248000} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...q.parameters?.docs?.source},description:{story:"`maxFileCount` — позволяет установить ограничение на количество загружаемых файлов.\nПрименяется только если isMultiple=true",...q.parameters?.docs?.description}}};try{q.displayName=`MaxFileCount`,q.__docgenInfo={description:"`maxFileCount` — позволяет установить ограничение на количество загружаемых файлов.\nПрименяется только если isMultiple=true",displayName:`MaxFileCount`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/MaxFileCount.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var gt,J,Y;function _t(){return(_t=e((()=>{gt=n(),p(),l(),_(),J=s(),Y=()=>{let[e,t]=(0,gt.useState)([]);return(0,J.jsxs)(g,{children:[(0,J.jsx)(u,{isMultiple:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileCount:5,maxFileSize:3072,notify:d,onChange:e=>{t(e)}}),(0,J.jsx)(f,{})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([]);
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple value={value} accept={['.jpg', '.jpeg', '.png']} maxFileCount={5} maxFileSize={3 * 1024} notify={notify} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...Y.parameters?.docs?.source},description:{story:"```maxFileSize``` — позволяет ограничить размер загружаемых файлов",...Y.parameters?.docs?.description}}};try{Y.displayName=`MaxFileSize`,Y.__docgenInfo={description:"```maxFileSize``` — позволяет ограничить размер загружаемых файлов",displayName:`MaxFileSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/MaxFileSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var vt,X,Z;function yt(){return(yt=e((()=>{vt=n(),p(),l(),m(),_(),X=s(),Z=()=>{let[e,t]=(0,vt.useState)([]);return(0,X.jsxs)(g,{children:[(0,X.jsx)(u,{isMultiple:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`,`.xls`,`.xlsx`,`.sig`],maxFileCount:5,maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)}}),(0,X.jsx)(f,{})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>([]);
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
  const handleChange = (files: UploadFile[]) => {
    setValue(files);
  };
  return <Wrapper>
      <FileUploader isMultiple value={value} accept={['.jpg', '.jpeg', '.png', '.xls', '.xlsx', '.sig']} maxFileCount={5} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} />

      <NotificationContainer />
    </Wrapper>;
}`,...Z.parameters?.docs?.source}}}})))()}var bt,xt,St,Q;function Ct(){return(Ct=e((()=>{bt=n(),p(),l(),m(),_(),xt=s(),St=[{id:`default-1`,name:`document.pdf`,type:`application/pdf`,size:1024,status:{}},{id:`default-2`,name:`image.png`,type:`image/png`,size:2048,status:{}}],Q=()=>{let[e,t]=(0,bt.useState)(St);return(0,xt.jsxs)(g,{children:[(0,xt.jsx)(u,{isMultiple:!0,value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileCount:5,maxFileSize:5248e3,notify:d,onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)},onChange:e=>{t(e)},onDeleteFile:()=>new Promise(e=>{setTimeout(()=>{d.success(`Файл удален`),e()},1500)})}),(0,xt.jsx)(f,{})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<UploadFile[]>(defaultFiles);
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
  const handleChange = (files: UploadFile[]) => {
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
  return <Wrapper>
      <FileUploader isMultiple value={value} accept={['.jpg', '.jpeg', '.png']} maxFileCount={5} maxFileSize={5248000} notify={notify} onUploadFile={handleUploadFile} onChange={handleChange} onDeleteFile={onDeleteFile} />

      <NotificationContainer />
    </Wrapper>;
}`,...Q.parameters?.docs?.source},description:{story:`При использовании параметра в форме, необходимо удалять файлы при подтверждении изменений (submit)

Пример использования в форме: [FormFileUploader](/docs/react-hook-form-formFileUploader--docs#collect-files)`,...Q.parameters?.docs?.description}}};try{Q.displayName=`OnDeleteFile`,Q.__docgenInfo={description:`При использовании параметра в форме, необходимо удалять файлы при подтверждении изменений (submit)

Пример использования в форме: [FormFileUploader](/docs/react-hook-form-formFileUploader--docs#collect-files)`,displayName:`OnDeleteFile`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/OnDeleteFile.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var wt,Tt,$;function Et(){return(Et=e((()=>{wt=n(),p(),l(),m(),_(),Tt=s(),$=()=>{let[e,t]=(0,wt.useState)();return(0,Tt.jsxs)(g,{children:[(0,Tt.jsx)(u,{value:e,accept:[`.jpg`,`.jpeg`,`.png`],maxFileSize:5248e3,restrictions:[e=>{if(/[а-яА-Я]/.test(e.name))return{code:`cyrillic-name`,message:`Имя файла не должно содержать кириллицу`}}],notify:d,onChange:e=>{t(e)},onUploadFile:(e,t,{signal:n,setProgress:r})=>{let i=new FormData;return i.append(`file`,t,t.name),h(i,{signal:n,onUploadProgress:t=>{n.aborted||r(e,t)}}).then(e=>e.data)}}),(0,Tt.jsx)(f,{})]})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
  const handleChange = (file: UploadFile | null) => {
    setValue(file);
  };
  return <Wrapper>
      <FileUploader value={value} accept={['.jpg', '.jpeg', '.png']} maxFileSize={5248000} restrictions={[restrictCyrillicName]} notify={notify} onChange={handleChange} onUploadFile={handleUploadFile} />

      <NotificationContainer />
    </Wrapper>;
}`,...$.parameters?.docs?.source},description:{story:"`restrictions` — позволяет установить ограничения для загружаемых файлов.\nДля файлов, которые не прошли проверку, отправка на сервер осуществляться не будет",...$.parameters?.docs?.description}}};try{$.displayName=`Restrictions`,$.__docgenInfo={description:"`restrictions` — позволяет установить ограничения для загружаемых файлов.\nДля файлов, которые не прошли проверку, отправка на сервер осуществляться не будет",displayName:`Restrictions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/fileUploading/FileUploader/stories/Restrictions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Dt,Ot;function kt(){return(kt=e((()=>{l(),we(),Ee(),Ve(),Ue(),Ke(),Xe(),Qe(),et(),nt(),at(),ot(),ct(),dt(),pt(),ht(),_t(),yt(),Ct(),Et(),Dt={title:`Files/FileUploader`,component:u,parameters:{docs:{description:{component:`FileUploader — компонент для загрузки файлов
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1106-3726)`}}}},Ot=[`Interaction`,`BasicUsage`,`InputSourceType`,`Label`,`Multiple`,`Accept`,`CustomPlaceholderText`,`CustomPlaceholder`,`MaxFileCount`,`Restrictions`,`MaxFileSize`,`IsDisabled`,`IsDisabledWithFile`,`FileLoading`,`FileError`,`OnDeleteFile`,`CustomErrorText`,`CustomDropSize`,`CustomComponent`]})))()}kt();export{y as Accept,x as BasicUsage,T as CustomComponent,D as CustomDropSize,O as CustomErrorText,A as CustomPlaceholder,M as CustomPlaceholderText,P as FileError,I as FileLoading,R as InputSourceType,z as Interaction,V as IsDisabled,U as IsDisabledWithFile,G as Label,q as MaxFileCount,Y as MaxFileSize,Z as Multiple,Q as OnDeleteFile,$ as Restrictions,Ot as __namedExportsOrder,Dt as default};