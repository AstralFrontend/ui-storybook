import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{ct as n,ji as ee,lt as te,ya as r,yn as ne,za as i}from"./preview-DLwisTAq.js";import{t as re}from"./MenuItem-DKmnvwOM.js";import{t as ie}from"./MenuItem-DESshn45.js";import{t as ae}from"./OverflowTypography-CD8Ltnyj.js";import{t as oe}from"./OverflowTypography-DcaFCO2H.js";import{n as a,t as o}from"./AsyncAutocomplete-DkEhJh_d.js";import{n as se,t as ce}from"./axios-DJY38NIv.js";import{n as s,t as le}from"./faker-DHc11VVS.js";import{t as ue}from"./src-BGN3AVSP.js";import{a as de,l as fe}from"./NotificationStackContainer-CbryYiFg.js";import{t as pe}from"./Notification-C9HBptx_.js";var c;function l(){return(l=e((()=>{c=[{id:`1`,name:`ПАО "Газпром"`,inn:`7706050003`},{id:`2`,name:`ОАО "РЖД"`,inn:`7707083893`},{id:`3`,name:`ООО "Яндекс"`,inn:`7706207543`},{id:`4`,name:`ПАО "Сбербанк"`,inn:`7707005366`},{id:`5`,name:`ПАО "ВТБ"`,inn:`7702070139`},{id:`6`,name:`ПАО "Лукойл"`,inn:`7707049388`},{id:`7`,name:`ПАО "Роснефть"`,inn:`7706107510`},{id:`8`,name:`ПАО "МегаФон"`,inn:`7702014560`}]})))()}var u,d,f,p,me,m,he,ge;function h(){return(h=e((()=>{le(),se(),u=t(ue()),l(),d=()=>Math.random()*100+100,f=ce.create(),p=new u.default(f,{delayResponse:d()}),me=e=>Array.from({length:e-1}).map(()=>({id:s.string.uuid(),name:s.person.fullName()})),m=[{id:`1`,name:`Иван Третьяков`},...me(30)],p.onGet(`/api/users`).reply(e=>{let t=new URLSearchParams(e.params).get(`name_like`)||``;return[200,m.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))]}),p.onGet(`/api/users/id`).reply(e=>{let t=new URLSearchParams(e.params).get(`id`)||``;return[200,m.find(e=>e.id===t)]}),p.onGet(`/api/organizations`).reply(e=>{let t=new URLSearchParams(e.params).get(`inn`)||``;return[200,c.filter(e=>e.inn.includes(t))]}),he=async(e,t)=>(await f.get(`api/users`,{...t,params:{...t?.params,name_like:e}})).data,ge=async(e,t)=>(await f.get(`api/organizations`,{...t,params:{...t?.params,inn:e}})).data})))()}var g;function _e(){return(_e=e((()=>{h(),g=async(e,t)=>he(e,{signal:t})})))()}var _;function v(){return(v=e((()=>{h(),_=async(e,t)=>ge(e,{signal:t})})))()}var y;function b(){return(b=e((()=>{ne(),y=ee.div`
  min-width: 300px;
`})))()}function x(){return(x=e((()=>{_e(),v(),b()})))()}var S,C,w;function T(){return(T=e((()=>{S=i(),a(),x(),C=r(),w=()=>{let[e,t]=(0,S.useState)(null);return(0,C.jsx)(y,{children:(0,C.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},fetchDelayMs:500})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} fetchDelayMs={500} />
    </Wrapper>;
}`,...w.parameters?.docs?.source},description:{story:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,...w.parameters?.docs?.description}}};try{w.displayName=`AbortController`,w.__docgenInfo={description:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,displayName:`AbortController`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/AbortController.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D,O;function k(){return(k=e((()=>{E=i(),a(),x(),D=r(),O=()=>{let[e,t]=(0,E.useState)(null);return(0,D.jsx)(y,{children:(0,D.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)}})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} />
    </Wrapper>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=i(),a(),x(),j=r(),M=()=>{let[e,t]=(0,A.useState)(null);return(0,j.jsx)(y,{children:(0,j.jsx)(o,{fetchOptions:e=>g(e),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,fetchDelayMs:1e3,onChange:(e,n)=>{t(n)}})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source},description:{story:"Параметр `fetchDelayMs` указывает задержку debounce",...M.parameters?.docs?.description}}};try{M.displayName=`FetchDelayMs`,M.__docgenInfo={description:"Параметр `fetchDelayMs` указывает задержку debounce",displayName:`FetchDelayMs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FetchDelayMs.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I;function L(){return(L=e((()=>{n(),a(),x(),P=r(),F=`Начните вводить ИНН`,I=()=>{let e=async(e,t)=>Promise.resolve([]);return(0,P.jsxs)(te,{container:!0,spacing:4,direction:`column`,children:[(0,P.jsx)(y,{children:(0,P.jsx)(o,{label:`Организация`,fetchOptions:e,focusedHelperText:F,getOptionLabel:e=>e.name})}),(0,P.jsx)(y,{children:(0,P.jsx)(o,{label:`Организация (freeSolo)`,freeSolo:!0,fetchOptions:e,focusedHelperText:F,getOptionLabel:e=>typeof e==`string`?e:e.name})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:`Popover с подсказкой открывается на фокус пустого поля`,...I.parameters?.docs?.description}}};try{I.displayName=`FocusedHelperText`,I.__docgenInfo={description:`Popover с подсказкой открывается на фокус пустого поля`,displayName:`FocusedHelperText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FocusedHelperText.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z,B;function V(){return(V=e((()=>{R=i(),a(),x(),z=r(),B=()=>{let[e,t]=(0,R.useState)(null);return(0,z.jsx)(y,{children:(0,z.jsx)(o,{fetchOptions:g,getOptionLabel:e=>typeof e==`string`?e:e.name,placeholder:`Введите имя`,freeSolo:!0,value:e,onChange:(e,n)=>{t(n)}})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | string | null | undefined>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | string | null | undefined) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, false, false, true> fetchOptions={fetchUsers} getOptionLabel={option => typeof option === 'string' ? option : option.name} placeholder="Введите имя" freeSolo value={value} onChange={handleChange} />
    </Wrapper>;
}`,...B.parameters?.docs?.source},description:{story:"`freeSolo` позволяет ввести собственное значение в инпут",...B.parameters?.docs?.description}}};try{B.displayName=`FreeSolo`,B.__docgenInfo={description:"`freeSolo` позволяет ввести собственное значение в инпут",displayName:`FreeSolo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FreeSolo.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,U,W;function G(){return(G=e((()=>{H=i(),a(),x(),U=r(),W=()=>{let[e,t]=(0,H.useState)(null);return(0,U.jsx)(y,{children:(0,U.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,minSymbolsToFetch:4,onChange:(e,n)=>{t(n)}})})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} minSymbolsToFetch={4} onChange={handleChange} />
    </Wrapper>;
}`,...W.parameters?.docs?.source},description:{story:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,...W.parameters?.docs?.description}}};try{W.displayName=`MinSymbolsToFetch`,W.__docgenInfo={description:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,displayName:`MinSymbolsToFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/MinSymbolsToFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var K,q,J;function ve(){return(ve=e((()=>{K=i(),a(),x(),q=r(),J=()=>{let[e,t]=(0,K.useState)([]);return(0,q.jsx)(y,{children:(0,q.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,multiple:!0,value:e,onChange:(e,n)=>{t(n)}})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User[]>([]);
  const handleChange = (_: SyntheticEvent, newValue: User[]) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, true> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" multiple value={value} onChange={handleChange} />
    </Wrapper>;
}`,...J.parameters?.docs?.source},description:{story:"`multiple` позволяет выбрать несколько значений в autocomplete",...J.parameters?.docs?.description}}};try{J.displayName=`Multiple`,J.__docgenInfo={description:"`multiple` позволяет выбрать несколько значений в autocomplete",displayName:`Multiple`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/Multiple.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ye,Y,X;function be(){return(be=e((()=>{ye=i(),pe(),a(),x(),Y=r(),X=()=>{let[e,t]=(0,ye.useState)(null);return(0,Y.jsxs)(y,{children:[(0,Y.jsx)(o,{fetchOptions:async(e,t)=>Promise.reject(`Сервис получения сотрудников не доступен`),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},onDataLoadError:e=>{de.error(`${e}`,{containerId:`fetchUsers`})}}),(0,Y.jsx)(fe,{containerId:`fetchUsers`})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",...X.parameters?.docs?.description}}};try{X.displayName=`OnDataLoadError`,X.__docgenInfo={description:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",displayName:`OnDataLoadError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/OnDataLoadError.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var xe,Z,Se,Q;function Ce(){return(Ce=e((()=>{xe=i(),ie(),oe(),a(),x(),Z=r(),Se=i(),Q=()=>{let[e,t]=(0,xe.useState)(null);return(0,Z.jsx)(y,{children:(0,Z.jsx)(o,{fetchOptions:_,getOptionLabel:e=>e.inn,renderOption:(e,t)=>(0,Se.createElement)(re,{...e,key:e.id},(0,Z.jsx)(ae,{rowsCount:2,children:`${t.inn} - ${t.name}`})),placeholder:`Введите ИНН`,isRequired:!0,label:`Организация по ИНН`,value:e,shouldFetch:e=>{let t=e.trim();return t[0]===`0`?{isAllow:!1,reason:`ИНН не может начинаться с 0`}:/^\d+$/.test(t)?{isAllow:!0}:{isAllow:!1,reason:`ИНН должен содержать только цифры`}},minSymbolsToFetch:3,onChange:(e,n)=>{t(n)},helperText:`Пример ИНН: 7706050003`})})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source},description:{story:`Параметр \`shouldFetch\` определяет условия, которым должно соответствовать
значение инпута для выполнения запроса. При несоответствии выводится
текст-подсказка с объяснением причины отсутствия запроса.

В этом примере проводится валидация ИНН перед запросом.`,...Q.parameters?.docs?.description}}};try{Q.displayName=`ShouldFetch`,Q.__docgenInfo={description:`Параметр \`shouldFetch\` определяет условия, которым должно соответствовать
значение инпута для выполнения запроса. При несоответствии выводится
текст-подсказка с объяснением причины отсутствия запроса.

В этом примере проводится валидация ИНН перед запросом.`,displayName:`ShouldFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/ShouldFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var $,we;function Te(){return(Te=e((()=>{a(),T(),k(),N(),L(),V(),G(),ve(),be(),Ce(),$={title:`Form-Controls/AsyncAutocomplete`,component:o,parameters:{docs:{description:{component:`Компонент предназначен для выбора значений из списка, загружаемого
асинхронно

Более подробные примеры и варианты использования можно найти в документации
базового компонента
[Autocomplete](/docs/form-controls-autocomplete--docs).
### [Figma]()`}}}},we=[`BasicUsage`,`FreeSolo`,`Multiple`,`MinSymbolsToFetch`,`ShouldFetch`,`FetchDelayMs`,`FocusedHelperText`,`AbortController`,`OnDataLoadError`]})))()}Te();export{w as AbortController,O as BasicUsage,M as FetchDelayMs,I as FocusedHelperText,B as FreeSolo,W as MinSymbolsToFetch,J as Multiple,X as OnDataLoadError,Q as ShouldFetch,we as __namedExportsOrder,$ as default};