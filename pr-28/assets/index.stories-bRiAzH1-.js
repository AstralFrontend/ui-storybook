import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Mi as t,Pi as n,dt as r,ft as i,xa as a}from"./preview-DRblasGc.js";import{s as o,t as s}from"./DataGrid-DOrwGump.js";import{a as c,i as l,n as u,r as d}from"./personalDataSecurity-BK3GjyXB.js";import{t as f}from"./TextField-B0bHyP7B.js";import{t as p}from"./TextField-CfS5jVni.js";import{t as m}from"./DescriptionList-Chl3ouKB.js";import{t as h}from"./DescriptionList-DGnb8woF.js";var g,_,v;function y(){return(y=e((()=>{s(),g=a(),_=[{id:`1`,documentName:`Очень длинное название документа`,action:()=>{}},{id:`2`,documentName:`Документ 2`,action:()=>{}},{id:`3`,documentName:`Документ 3`,action:()=>{}}],v=()=>(0,g.jsx)(o,{keyId:`id`,rows:_,columns:[{field:`id`,label:`ID`,width:`90%`},{field:`documentName`,label:`Документ`,isHidePersonalData:!0,width:`10%`}],onRetry:()=>{}}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <DataGrid keyId="id" rows={MOCK_ROWS} columns={[{
    field: 'id',
    label: 'ID',
    width: '90%'
  }, {
    field: 'documentName',
    label: 'Документ',
    isHidePersonalData: true,
    width: '10%'
  }]} onRetry={() => {}} />;
}`,...v.parameters?.docs?.source},description:{story:`Для скрытия отдельных столбцов **DataGrid** необходимо прокинуть флаг **isHidePersonalData** в конфигурацию columns`,...v.parameters?.docs?.description}}};try{v.displayName=`DataGridHidePersonalData`,v.__docgenInfo={description:`Для скрытия отдельных столбцов **DataGrid** необходимо прокинуть флаг **isHidePersonalData** в конфигурацию columns`,displayName:`DataGridHidePersonalData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/personalDataSecurity/stories/DataGrid.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var b,x;function S(){return(S=e((()=>{h(),b=a(),x=()=>(0,b.jsx)(m,{items:[{name:`ИНН`,value:`295995231495`,options:{canCopy:!0,isHidePersonalData:!0}},{name:`СНИЛС`,value:`23339576886`,options:{isHidePersonalData:!0}}]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const items: DescriptionListItem[] = [{
    name: 'ИНН',
    value: '295995231495',
    options: {
      canCopy: true,
      isHidePersonalData: true
    }
  }, {
    name: 'СНИЛС',
    value: '23339576886',
    options: {
      isHidePersonalData: true
    }
  }];
  return <DescriptionList items={items} />;
}`,...x.parameters?.docs?.source},description:{story:`Для скрытия отдельных элементов **DescriptionList** необходимо прокинуть флаг **isHidePersonalData** в options`,...x.parameters?.docs?.description}}};try{x.displayName=`DescriptionListHidePersonalData`,x.__docgenInfo={description:`Для скрытия отдельных элементов **DescriptionList** необходимо прокинуть флаг **isHidePersonalData** в options`,displayName:`DescriptionListHidePersonalData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/personalDataSecurity/stories/DescriptionList.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w;function T(){return(T=e((()=>{r(),c(),C=a(),w=()=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(i,{children:`some non-personal information`}),(0,C.jsx)(l,{children:(0,C.jsx)(i,{children:`some personal information`})})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <>
    <Typography>some non-personal information</Typography>

    <PersonalData>
      <Typography>some personal information</Typography>
    </PersonalData>
  </>`,...w.parameters?.docs?.source},description:{story:`Компонент **PersonalData** добавляет дочерним элементам специальные CSS классы для скрытия данных от инструментов мониторинга`,...w.parameters?.docs?.description}}};try{w.displayName=`PersonalDataComponent`,w.__docgenInfo={description:`Компонент **PersonalData** добавляет дочерним элементам специальные CSS классы для скрытия данных от инструментов мониторинга`,displayName:`PersonalDataComponent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/personalDataSecurity/stories/PersonalData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D;function O(){return(O=e((()=>{p(),r(),u(),E=a(),D=()=>{let e=d(),t=d({type:`input`});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{className:e,children:`some personal information`}),(0,E.jsx)(f,{label:`Фамилия`,inputProps:{className:t},defaultValue:`Фамилия`})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const hidePersonalDataClassname = useHidePersonalData();
  const hidePersonalInputDataClassname = useHidePersonalData({
    type: 'input'
  });
  return <>
      <Typography className={hidePersonalDataClassname}>
        some personal information
      </Typography>

      <TextField label="Фамилия" inputProps={{
      className: hidePersonalInputDataClassname
    }} defaultValue="Фамилия" />
    </>;
}`,...D.parameters?.docs?.source},description:{story:`Хук **useHidePersonalData** добавляет к переданному classname - специальные CSS классы для скрытия данных от инструментов мониторинга


\`\`\`jsx
options = {
  type: container | input, // Тип элемента, данные которого нужно скрыть
  isEnabled: boolean // Включает/отключает скрытие персональных данных
}
\`\`\``,...D.parameters?.docs?.description}}};try{D.displayName=`UseHidePersonalDataHook`,D.__docgenInfo={description:`Хук **useHidePersonalData** добавляет к переданному classname - специальные CSS классы для скрытия данных от инструментов мониторинга


\`\`\`jsx
options = {
  type: container | input, // Тип элемента, данные которого нужно скрыть
  isEnabled: boolean // Включает/отключает скрытие персональных данных
}
\`\`\``,displayName:`UseHidePersonalDataHook`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/personalDataSecurity/stories/useHidePersonalData.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k,A;function j(){return(j=e((()=>{n(),k=a(),A=()=>(0,k.jsx)(t,{styles:{".ym-hide-content, .sentry-mask, .ym-disable-keys":{filter:`blur(5px)`}}})})))()}var M,N,P;function F(){return(F=e((()=>{y(),S(),T(),O(),j(),M=a(),N={title:`Other/PersonalDataSecurity`,decorators:[e=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(e,{}),(0,M.jsx)(A,{})]})],parameters:{docs:{description:{component:`⚠️ Сервисы аналитики (Я.Метрика, Вебвизор, Sentry и другие) могут записывать или передавать персональные данные пользователей (имена, телефоны, email, номера карт, адреса и т.п.).

Персональные данные могут находиться:
- в текстах ошибок,
- в полях форм,
- в данных интерфейса,
- DOM-элементах и т.д.

✔️ Решение: В проекте реализованы инструменты для автоматического скрытия персональных данных

### Автоматически скрывают данные следующие компоненты:
- AddressAutocomplete
- CodeField
- EmailField
- EmailOrPhoneField
- Filename
- GuidTypography
- MenuOrganization
- PasswordField
- PdfViewer
- PreviewFileUploader
- FormMobilePhoneField

При необходимости это поведение можно переопределить через пропс isHidePersonalData в конкретном компоненте или через props ConfigProvider:

\`\`\`ts
hidePersonalData?: boolean; // Флаг скрытия персональной информации от трекеров
hidePersonalDataClassname?: string // Css-класс для скрытия данных
hidePersonalInputDataClassname?: string // Css-класс для скрытия данных в инпутах
\`\`\``}}}},P=[`PersonalDataComponent`,`UseHidePersonalDataHook`,`DataGridHidePersonalData`,`DescriptionListHidePersonalData`]})))()}F();export{v as DataGridHidePersonalData,x as DescriptionListHidePersonalData,w as PersonalDataComponent,D as UseHidePersonalDataHook,P as __namedExportsOrder,N as default};