import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{ct as n,ji as ee,lt as te,ya as r,yn as ne,za as i}from"./preview-Z1rCd2zM.js";import{t as re}from"./MenuItem-CwEOt6b-.js";import{t as ie}from"./MenuItem-fp5wrbMw.js";import{t as ae}from"./OverflowTypography-CnitHJeT.js";import{t as oe}from"./OverflowTypography-B5wZNaqg.js";import{n as a,t as o}from"./AsyncAutocomplete-DIAhTYdl.js";import{n as se,t as ce}from"./axios-COqjSeWk.js";import{n as s,t as le}from"./faker-B_3Lj_70.js";import{t as ue}from"./src-B9AmVQVO.js";import{a as de,l as fe}from"./NotificationStackContainer-KmlNZbun.js";import{t as pe}from"./Notification-BPX0ySkD.js";var c;function l(){return(l=e((()=>{c=[{id:`1`,name:`ПАО "Газпром"`,inn:`7706050003`},{id:`2`,name:`ОАО "РЖД"`,inn:`7707083893`},{id:`3`,name:`ООО "Яндекс"`,inn:`7706207543`},{id:`4`,name:`ПАО "Сбербанк"`,inn:`7707005366`},{id:`5`,name:`ПАО "ВТБ"`,inn:`7702070139`},{id:`6`,name:`ПАО "Лукойл"`,inn:`7707049388`},{id:`7`,name:`ПАО "Роснефть"`,inn:`7706107510`},{id:`8`,name:`ПАО "МегаФон"`,inn:`7702014560`}]})))()}var u,d,f,p,me,m,he,ge;function h(){return(h=e((()=>{le(),se(),u=t(ue()),l(),d=()=>Math.random()*100+100,f=ce.create(),p=new u.default(f,{delayResponse:d()}),me=e=>Array.from({length:e-1}).map(()=>({id:s.string.uuid(),name:s.person.fullName()})),m=[{id:`1`,name:`Иван Третьяков`},...me(30)],p.onGet(`/api/users`).reply(e=>{let t=new URLSearchParams(e.params).get(`name_like`)||``;return[200,m.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))]}),p.onGet(`/api/users/id`).reply(e=>{let t=new URLSearchParams(e.params).get(`id`)||``;return[200,m.find(e=>e.id===t)]}),p.onGet(`/api/organizations`).reply(e=>{let t=new URLSearchParams(e.params).get(`inn`)||``;return[200,c.filter(e=>e.inn.includes(t))]}),he=async(e,t)=>(await f.get(`api/users`,{...t,params:{...t?.params,name_like:e}})).data,ge=async(e,t)=>(await f.get(`api/organizations`,{...t,params:{...t?.params,inn:e}})).data})))()}var g;function _e(){return(_e=e((()=>{h(),g=async(e,t)=>he(e,{signal:t})})))()}var _;function v(){return(v=e((()=>{h(),_=async(e,t)=>ge(e,{signal:t})})))()}var y;function b(){return(b=e((()=>{ne(),y=ee.div`
  min-width: 300px;
`})))()}function x(){return(x=e((()=>{_e(),v(),b()})))()}var S,C,w;function T(){return(T=e((()=>{S=i(),a(),x(),C=r(),w=()=>{let[e,t]=(0,S.useState)(null);return(0,C.jsx)(y,{children:(0,C.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},fetchDelayMs:500})})};try{w.displayName=`AbortController`,w.__docgenInfo={description:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,displayName:`AbortController`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/AbortController.story.tsx`,methods:[],props:{},tags:{}}}catch{}w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} fetchDelayMs={500} />
    </Wrapper>;
}`,...w.parameters?.docs?.source},description:{story:`AbortController позволяет отменять устаревшие запросы.
Для его использование необходимо передавать AbortSignal`,...w.parameters?.docs?.description}}}})))()}var E,D,O;function k(){return(k=e((()=>{E=i(),a(),x(),D=r(),O=()=>{let[e,t]=(0,E.useState)(null);return(0,D.jsx)(y,{children:(0,D.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)}})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} onChange={handleChange} />
    </Wrapper>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=i(),a(),x(),j=r(),M=()=>{let[e,t]=(0,A.useState)(null);return(0,j.jsx)(y,{children:(0,j.jsx)(o,{fetchOptions:e=>g(e),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,fetchDelayMs:1e3,onChange:(e,n)=>{t(n)}})})};try{M.displayName=`FetchDelayMs`,M.__docgenInfo={description:"Параметр `fetchDelayMs` указывает задержку debounce",displayName:`FetchDelayMs`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FetchDelayMs.story.tsx`,methods:[],props:{},tags:{}}}catch{}M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source},description:{story:"Параметр `fetchDelayMs` указывает задержку debounce",...M.parameters?.docs?.description}}}})))()}var P,F,I;function ve(){return(ve=e((()=>{n(),a(),x(),P=r(),F=`Начните вводить ИНН`,I=()=>{let e=async(e,t)=>Promise.resolve([]);return(0,P.jsxs)(te,{container:!0,spacing:4,direction:`column`,children:[(0,P.jsx)(y,{children:(0,P.jsx)(o,{label:`Организация`,fetchOptions:e,focusedHelperText:F,getOptionLabel:e=>e.name})}),(0,P.jsx)(y,{children:(0,P.jsx)(o,{label:`Организация (freeSolo)`,freeSolo:!0,fetchOptions:e,focusedHelperText:F,getOptionLabel:e=>typeof e==`string`?e:e.name})})]})};try{I.displayName=`FocusedHelperText`,I.__docgenInfo={description:`Popover с подсказкой открывается на фокус пустого поля`,displayName:`FocusedHelperText`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FocusedHelperText.story.tsx`,methods:[],props:{},tags:{}}}catch{}I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source},description:{story:`Popover с подсказкой открывается на фокус пустого поля`,...I.parameters?.docs?.description}}}})))()}var L,R,z;function B(){return(B=e((()=>{L=i(),a(),x(),R=r(),z=()=>{let[e,t]=(0,L.useState)(null);return(0,R.jsx)(y,{children:(0,R.jsx)(o,{fetchOptions:g,getOptionLabel:e=>typeof e==`string`?e:e.name,placeholder:`Введите имя`,freeSolo:!0,value:e,onChange:(e,n)=>{t(n)}})})};try{z.displayName=`FreeSolo`,z.__docgenInfo={description:"`freeSolo` позволяет ввести собственное значение в инпут",displayName:`FreeSolo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/FreeSolo.story.tsx`,methods:[],props:{},tags:{}}}catch{}z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | string | null | undefined>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | string | null | undefined) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, false, false, true> fetchOptions={fetchUsers} getOptionLabel={option => typeof option === 'string' ? option : option.name} placeholder="Введите имя" freeSolo value={value} onChange={handleChange} />
    </Wrapper>;
}`,...z.parameters?.docs?.source},description:{story:"`freeSolo` позволяет ввести собственное значение в инпут",...z.parameters?.docs?.description}}}})))()}var V,H,U;function W(){return(W=e((()=>{V=i(),a(),x(),H=r(),U=()=>{let[e,t]=(0,V.useState)(null);return(0,H.jsx)(y,{children:(0,H.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,minSymbolsToFetch:4,onChange:(e,n)=>{t(n)}})})};try{U.displayName=`MinSymbolsToFetch`,U.__docgenInfo={description:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,displayName:`MinSymbolsToFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/MinSymbolsToFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User | null>(null);
  const handleChange = (_: SyntheticEvent, newValue: User | null) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" isRequired label="Сотрудник" value={value} minSymbolsToFetch={4} onChange={handleChange} />
    </Wrapper>;
}`,...U.parameters?.docs?.source},description:{story:`Параметр \`minSymbolsToFetch\` указывает сколько символов необходимо ввести для
выполнения запроса. Если не указан, запрос происходит во время клика на
autocomplete.`,...U.parameters?.docs?.description}}}})))()}var G,K,q;function J(){return(J=e((()=>{G=i(),a(),x(),K=r(),q=()=>{let[e,t]=(0,G.useState)([]);return(0,K.jsx)(y,{children:(0,K.jsx)(o,{fetchOptions:g,getOptionLabel:e=>e.name,placeholder:`Введите имя`,multiple:!0,value:e,onChange:(e,n)=>{t(n)}})})};try{q.displayName=`Multiple`,q.__docgenInfo={description:"`multiple` позволяет выбрать несколько значений в autocomplete",displayName:`Multiple`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/Multiple.story.tsx`,methods:[],props:{},tags:{}}}catch{}q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<User[]>([]);
  const handleChange = (_: SyntheticEvent, newValue: User[]) => {
    setValue(newValue);
  };
  return <Wrapper>
      <AsyncAutocomplete<User, true> fetchOptions={fetchUsers} getOptionLabel={option => option.name} placeholder="Введите имя" multiple value={value} onChange={handleChange} />
    </Wrapper>;
}`,...q.parameters?.docs?.source},description:{story:"`multiple` позволяет выбрать несколько значений в autocomplete",...q.parameters?.docs?.description}}}})))()}var ye,Y,X;function be(){return(be=e((()=>{ye=i(),pe(),a(),x(),Y=r(),X=()=>{let[e,t]=(0,ye.useState)(null);return(0,Y.jsxs)(y,{children:[(0,Y.jsx)(o,{fetchOptions:async(e,t)=>Promise.reject(`Сервис получения сотрудников не доступен`),getOptionLabel:e=>e.name,placeholder:`Введите имя`,isRequired:!0,label:`Сотрудник`,value:e,onChange:(e,n)=>{t(n)},onDataLoadError:e=>{de.error(`${e}`,{containerId:`fetchUsers`})}}),(0,Y.jsx)(fe,{containerId:`fetchUsers`})]})};try{X.displayName=`OnDataLoadError`,X.__docgenInfo={description:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",displayName:`OnDataLoadError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/OnDataLoadError.story.tsx`,methods:[],props:{},tags:{}}}catch{}X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:"С помощью параметра `onDataLoadError` можно подписаться на обработку ошибки",...X.parameters?.docs?.description}}}})))()}var Z,Q,$;function xe(){return(xe=e((()=>{Z=i(),ie(),oe(),a(),x(),Q=r(),$=()=>{let[e,t]=(0,Z.useState)(null);return(0,Q.jsx)(y,{children:(0,Q.jsx)(o,{fetchOptions:_,getOptionLabel:e=>e.inn,renderOption:(e,t)=>(0,Z.createElement)(re,{...e,key:e.id},(0,Q.jsx)(ae,{rowsCount:2,children:`${t.inn} - ${t.name}`})),placeholder:`Введите ИНН`,isRequired:!0,label:`Организация по ИНН`,value:e,shouldFetch:e=>{let t=e.trim();return t[0]===`0`?{isAllow:!1,reason:`ИНН не может начинаться с 0`}:/^\d+$/.test(t)?{isAllow:!0}:{isAllow:!1,reason:`ИНН должен содержать только цифры`}},minSymbolsToFetch:3,onChange:(e,n)=>{t(n)},helperText:`Пример ИНН: 7706050003`})})};try{$.displayName=`ShouldFetch`,$.__docgenInfo={description:`Параметр \`shouldFetch\` определяет условия, которым должно соответствовать
значение инпута для выполнения запроса. При несоответствии выводится
текст-подсказка с объяснением причины отсутствия запроса.

В этом примере проводится валидация ИНН перед запросом.`,displayName:`ShouldFetch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AsyncAutocomplete/stories/ShouldFetch.story.tsx`,methods:[],props:{},tags:{}}}catch{}$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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

В этом примере проводится валидация ИНН перед запросом.`,...$.parameters?.docs?.description}}}})))()}var Se,Ce;function we(){return(we=e((()=>{a(),T(),k(),N(),ve(),B(),W(),J(),be(),xe(),Se={title:`Form-Controls/AsyncAutocomplete`,component:o,parameters:{docs:{description:{component:`Компонент предназначен для выбора значений из списка, загружаемого
асинхронно

Более подробные примеры и варианты использования можно найти в документации
базового компонента
[Autocomplete](/docs/form-controls-autocomplete--docs).
### [Figma]()`}}}},Ce=[`BasicUsage`,`FreeSolo`,`Multiple`,`MinSymbolsToFetch`,`ShouldFetch`,`FetchDelayMs`,`FocusedHelperText`,`AbortController`,`OnDataLoadError`]})))()}we();export{w as AbortController,O as BasicUsage,M as FetchDelayMs,I as FocusedHelperText,z as FreeSolo,U as MinSymbolsToFetch,q as Multiple,X as OnDataLoadError,$ as ShouldFetch,Ce as __namedExportsOrder,Se as default};