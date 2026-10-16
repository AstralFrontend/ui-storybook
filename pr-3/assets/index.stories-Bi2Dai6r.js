import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{Va as n,ct as ee,ji as te,lt as ne,xa as r,yn as re}from"./preview-Cav_CXYC.js";import{t as ie}from"./MenuItem-CcPAWbgx.js";import{t as ae}from"./MenuItem-Cn1cvwnk.js";import{t as oe}from"./OverflowTypography-4dz25aZw.js";import{t as se}from"./OverflowTypography-BxZSYGvd.js";import{n as i,t as a}from"./AsyncAutocomplete-kbcZYv0W.js";import{n as ce,t as le}from"./axios-DJY38NIv.js";import{n as o,t as ue}from"./faker-DHc11VVS.js";import{t as de}from"./src-BGN3AVSP.js";import{a as fe,l as pe}from"./NotificationStackContainer-Co-R_e-2.js";import{t as me}from"./Notification-DyqGKSDm.js";var s;function c(){return(c=e((()=>{s=[{id:`1`,name:`ПАО "Газпром"`,inn:`7706050003`},{id:`2`,name:`ОАО "РЖД"`,inn:`7707083893`},{id:`3`,name:`ООО "Яндекс"`,inn:`7706207543`},{id:`4`,name:`ПАО "Сбербанк"`,inn:`7707005366`},{id:`5`,name:`ПАО "ВТБ"`,inn:`7702070139`},{id:`6`,name:`ПАО "Лукойл"`,inn:`7707049388`},{id:`7`,name:`ПАО "Роснефть"`,inn:`7706107510`},{id:`8`,name:`ПАО "МегаФон"`,inn:`7702014560`}]})))()}var l,u,d,f,p,m,he,ge;function h(){return(h=e((()=>{ue(),ce(),l=t(de()),c(),u=()=>Math.random()*100+100,d=le.create(),f=new l.default(d,{delayResponse:u()}),p=e=>Array.from({length:e-1}).map(()=>({id:o.string.uuid(),name:o.person.fullName()})),m=[{id:`1`,name:`Иван Третьяков`},...p(30)],f.onGet(`/api/users`).reply(e=>{let t=new URLSearchParams(e.params).get(`name_like`)||``;return[200,m.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))]}),f.onGet(`/api/users/id`).reply(e=>{let t=new URLSearchParams(e.params).get(`id`)||``;return[200,m.find(e=>e.id===t)]}),f.onGet(`/api/organizations`).reply(e=>{let t=new URLSearchParams(e.params).get(`inn`)||``;return[200,s.filter(e=>e.inn.includes(t))]}),he=async(e,t)=>(await d.get(`api/users`,{...t,params:{...t?.params,name_like:e}})).data,ge=async(e,t)=>(await d.get(`api/organizations`,{...t,params:{...t?.params,inn:e}})).data})))()}var g;function _(){return(_=e((()=>{h(),g=async(e,t)=>he(e,{signal:t})})))()}var v;function y(){return(y=e((()=>{h(),v=async(e,t)=>ge(e,{signal:t})})))()}var b;function x(){return(x=e((()=>{re(),b=te.div`
  min-width: 300px;
`})))()}function S(){return(S=e((()=>{_(),y(),x()})))()}var C,w,T;function E(){return(E=e((()=>{C=n(),i(),S(),w=r(),T=()=>{let[e,t]=(0,C.useState)(null);return(0,w.jsx)(b,{children:(0,w.jsx)(a,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},fetchDelayMs:500})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} fetchDelayMs={500} />
    </Wrapper>;
}`,...T.parameters?.docs?.source},description:{story:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,...T.parameters?.docs?.description}}};try{T.displayName=`AbortController`,T.__docgenInfo={description:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,displayName:`AbortController`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/AbortController.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var D,O,k;function A(){return(A=e((()=>{D=n(),i(),S(),O=r(),k=()=>{let[e,t]=(0,D.useState)(null);return(0,O.jsx)(b,{children:(0,O.jsx)(a,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)}})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} />
    </Wrapper>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=n(),i(),S(),M=r(),N=()=>{let[e,t]=(0,j.useState)(null);return(0,M.jsx)(b,{children:(0,M.jsx)(a,{fetchOptions:e=>g(e),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,fetchDelayMs:1e3,onChange:(e,n)=>{t(n)}})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  const handleFetch: AsyncAutocompleteProps<User>['fetchOptions'] = (search: string) => {
    return fetchUsers(search);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={handleFetch} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} fetchDelayMs={1000} onChange={handleChange} />
    </Wrapper>;
}`,...N.parameters?.docs?.source},description:{story:"Параметр `fetchDelayMs` указывает задержку debounce",...N.parameters?.docs?.description}}};try{N.displayName=`FetchDelayMs`,N.__docgenInfo={description:"Параметр `fetchDelayMs` указывает задержку debounce",displayName:`FetchDelayMs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FetchDelayMs.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{ee(),i(),S(),F=r(),I=`Начните вводить ИНН`,L=()=>{let e=async(e,t)=>Promise.resolve([]);return(0,F.jsxs)(ne,{container:!0,spacing:4,direction:`column`,children:[(0,F.jsx)(b,{children:(0,F.jsx)(a,{label:`Организация`,fetchOptions:e,focusedHelperText:I,getOptionLabel:e=>e.name})}),(0,F.jsx)(b,{children:(0,F.jsx)(a,{label:`Организация (freeSolo)`,freeSolo:!0,fetchOptions:e,focusedHelperText:I,getOptionLabel:e=>typeof e==`string`?e:e.name})})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const fetchOrganizationsByInn = async (_search: string, _abortSignal?: AbortSignal): Promise<Organization[]> => {
    return Promise.resolve([]);
  };
  return <Grid container spacing={4} direction="column">
      <Wrapper>
        <AsyncAutocomplete<Organization, false, false, false> label="Организация" fetchOptions={fetchOrganizationsByInn} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => option.name} />
      </Wrapper>
      <Wrapper>
        <AsyncAutocomplete<Organization, false, false, true> label="Организация (freeSolo)" freeSolo fetchOptions={fetchOrganizationsByInn} focusedHelperText={FOCUSED_HELPER_TEXT} getOptionLabel={option => typeof option === 'string' ? option : option.name} />
      </Wrapper>
    </Grid>;
}`,...L.parameters?.docs?.source},description:{story:`Popover с подсказкой открывается на фокус пустого поля`,...L.parameters?.docs?.description}}};try{L.displayName=`FocusedHelperText`,L.__docgenInfo={description:`Popover с подсказкой открывается на фокус пустого поля`,displayName:`FocusedHelperText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FocusedHelperText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{z=n(),i(),S(),B=r(),V=()=>{let[e,t]=(0,z.useState)(null);return(0,B.jsx)(b,{children:(0,B.jsx)(a,{fetchOptions:g,getOptionLabel:e=>typeof e==`string`?e:e.name,placeholder:`Введите имя`,freeSolo:!0,value:e,onChange:(e,n)=>{t(n)}})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | string | null | undefined>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | string | null | undefined) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, false, false, true> fetchOptions={fetchUsers} getOptionLabel={option => typeof option === 'string' ? option : option.name} placeholder="Введите имя" freeSolo value={value} onChange={handleChange} />
    </Wrapper>;
}`,...V.parameters?.docs?.source},description:{story:"`freeSolo` позволяет ввести собственное значение в инпут",...V.parameters?.docs?.description}}};try{V.displayName=`FreeSolo`,V.__docgenInfo={description:"`freeSolo` позволяет ввести собственное значение в инпут",displayName:`FreeSolo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FreeSolo.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W,G;function K(){return(K=e((()=>{U=n(),i(),S(),W=r(),G=()=>{let[e,t]=(0,U.useState)(null);return(0,W.jsx)(b,{children:(0,W.jsx)(a,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,minSymbolsToFetch:4,onChange:(e,n)=>{t(n)}})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} minSymbolsToFetch={4} onChange={handleChange} />
    </Wrapper>;
}`,...G.parameters?.docs?.source},description:{story:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,...G.parameters?.docs?.description}}};try{G.displayName=`MinSymbolsToFetch`,G.__docgenInfo={description:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,displayName:`MinSymbolsToFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/MinSymbolsToFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J,Y;function _e(){return(_e=e((()=>{q=n(),i(),S(),J=r(),Y=()=>{let[e,t]=(0,q.useState)([]);return(0,J.jsx)(b,{children:(0,J.jsx)(a,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,multiple:!0,value:e,onChange:(e,n)=>{t(n)}})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User[]>([]);
  const handleChange = (_: SyntheticEvent, newValue: User[]) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, true> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" multiple value={value} onChange={handleChange} />
    </Wrapper>;
}`,...Y.parameters?.docs?.source},description:{story:"`multiple` позволяет выбрать несколько значений в autocomplete",...Y.parameters?.docs?.description}}};try{Y.displayName=`Multiple`,Y.__docgenInfo={description:"`multiple` позволяет выбрать несколько значений в autocomplete",displayName:`Multiple`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/Multiple.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ve,X,Z;function ye(){return(ye=e((()=>{ve=n(),me(),i(),S(),X=r(),Z=()=>{let[e,t]=(0,ve.useState)(null);return(0,X.jsxs)(b,{children:[(0,X.jsx)(a,{fetchOptions:async(e,t)=>Promise.reject(`Сервис получения сотрудников не доступен`),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},onDataLoadError:e=>{fe.error(`${e}`,{containerId:`fetchUsers`})}}),(0,X.jsx)(pe,{containerId:`fetchUsers`})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  const fetchUsers = async (_search: string, _abortSignal?: AbortSignal): Promise<User[]> => {
    return Promise.reject('Сервис получения сотрудников не доступен');
  };
  const onDataLoadError = (error: Error) => {
    notify.error(\`\${error}\`, {
      containerId: 'fetchUsers'
    });
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} onDataLoadError={onDataLoadError} />
      <NotificationContainer containerId="fetchUsers" />
    </Wrapper>;
}`,...Z.parameters?.docs?.source},description:{story:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",...Z.parameters?.docs?.description}}};try{Z.displayName=`OnDataLoadError`,Z.__docgenInfo={description:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",displayName:`OnDataLoadError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/OnDataLoadError.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var be,Q,xe,$;function Se(){return(Se=e((()=>{be=n(),ae(),se(),i(),S(),Q=r(),xe=n(),$=()=>{let[e,t]=(0,be.useState)(null);return(0,Q.jsx)(b,{children:(0,Q.jsx)(a,{fetchOptions:v,getOptionLabel:e=>e.inn,renderOption:(e,t)=>(0,xe.createElement)(ie,{...e,key:e.id},(0,Q.jsx)(oe,{rowsCount:2,children:`${t.inn} - ${t.name}`})),placeholder:`Введите ИНН`,isRequired:!0,label:`Организация по ИНН`,value:e,shouldFetch:e=>{let t=e.trim();return t[0]===`0`?{isAllow:!1,reason:`ИНН не может начинаться с 0`}:/^\d+$/.test(t)?{isAllow:!0}:{isAllow:!1,reason:`ИНН должен содержать только цифры`}},minSymbolsToFetch:3,onChange:(e,n)=>{t(n)},helperText:`Пример ИНН: 7706050003`})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<Organization | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: Organization | null) => {
    setValue(newValue);
  };
  const validateInn = (inputValue: string): {
    isAllow: true;
  } | {
    isAllow: false;
    reason: string;
  } => {
    const trimmed = inputValue.trim();
    if (trimmed[0] === '0') {
      return {
        isAllow: false,
        reason: 'ИНН не может начинаться с 0'
      };
    }
    if (!/^\\d+$/.test(trimmed)) {
      return {
        isAllow: false,
        reason: 'ИНН должен содержать только цифры'
      };
    }
    return {
      isAllow: true
    };
  };
  return <Wrapper>
      <AsyncAutocomplete<Organization> fetchOptions={fetchOrganizationsByInn} getOptionLabel={option => option.inn} renderOption={(props, option) => <MenuItem {...props} key={props.id}>
            <OverflowTypography rowsCount={2}>
              {\`\${option.inn} - \${option.name}\`}
            </OverflowTypography>
          </MenuItem>} placeholder="Введите ИНН" isRequired label="Организация по ИНН" value={value} shouldFetch={validateInn} minSymbolsToFetch={3} onChange={handleChange} helperText="Пример ИНН: 7706050003" />
    </Wrapper>;
}`,...$.parameters?.docs?.source},description:{story:`Параметр \`shouldFetch\` определяет условия, которым должно соответствовать
значение инпута для выполнения запроса. При несоответствии выводится
текст-подсказка с объяснением причины отсутствия запроса.

В этом примере проводится валидация ИНН перед запросом.`,...$.parameters?.docs?.description}}};try{$.displayName=`ShouldFetch`,$.__docgenInfo={description:`Параметр \`shouldFetch\` определяет условия, которым должно соответствовать
значение инпута для выполнения запроса. При несоответствии выводится
текст-подсказка с объяснением причины отсутствия запроса.

В этом примере проводится валидация ИНН перед запросом.`,displayName:`ShouldFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/ShouldFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ce,we;function Te(){return(Te=e((()=>{i(),E(),A(),P(),R(),H(),K(),_e(),ye(),Se(),Ce={title:`Form-Controls/AsyncAutocomplete`,component:a,parameters:{docs:{description:{component:`Компонент предназначен для выбора значений из списка, загружаемого
асинхронно

Более подробные примеры и варианты использования можно найти в документации
базового компонента
[Autocomplete](/docs/form-controls-autocomplete--docs).
### [Figma]()`}}}},we=[`BasicUsage`,`FreeSolo`,`Multiple`,`MinSymbolsToFetch`,`ShouldFetch`,`FetchDelayMs`,`FocusedHelperText`,`AbortController`,`OnDataLoadError`]})))()}Te();export{T as AbortController,k as BasicUsage,N as FetchDelayMs,L as FocusedHelperText,V as FreeSolo,G as MinSymbolsToFetch,Y as Multiple,Z as OnDataLoadError,$ as ShouldFetch,we as __namedExportsOrder,Ce as default};