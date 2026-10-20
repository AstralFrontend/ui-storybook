import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,xa as n}from"./preview-D6B29sG_.js";import{a as r,l as i}from"./NotificationStackContainer-pCYDopI_.js";import{t as a}from"./Notification-BImaw3Un.js";import{n as o,r as s,t as c}from"./common-BF-xdRAJ.js";import{n as l,t as u}from"./TreeAsyncAutocomplete-CpO-Yhba.js";var d,f,p;function m(){return(m=e((()=>{d=t(),l(),c(),f=n(),p=()=>{let[e,t]=(0,d.useState)();return(0,f.jsx)(u,{label:`Название`,fetchOptions:s,value:e,dialogProps:{title:`Выбор подразделения`},onChange:t})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} />;
}`,...p.parameters?.docs?.source}}}})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),l(),c(),g=n(),_=()=>{let[e,t]=(0,h.useState)();return(0,g.jsx)(u,{label:`Название`,fetchOptions:s,value:e,dialogProps:{title:`Выбор подразделения`},onChange:t,isDisabled:!0})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} isDisabled />;
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),l(),c(),b=n(),x=()=>{let[e,t]=(0,y.useState)();return(0,b.jsx)(u,{label:`Название`,fetchOptions:s,value:e,fetchDelayMs:1e3,dialogProps:{title:`Выбор подразделения`},onChange:t})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} fetchDelayMs={1000} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),l(),w=n(),T=()=>{let[e,t]=(0,C.useState)();return(0,w.jsx)(u,{label:`Название`,fetchOptions:async(e,t)=>(await new Promise(e=>setTimeout(e,500)),Promise.reject(`Сервис получения организаций не доступен`)),value:e,dialogProps:{title:`Выбор подразделения`},onChange:t})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  const fetchOrganizations = async (_search: string, _abortSignal?: AbortSignal): Promise<FetchOptionsResult> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return Promise.reject('Сервис получения организаций не доступен');
  };
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} />;
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k;function A(){return(A=e((()=>{D=t(),l(),c(),O=n(),k=()=>{let[e,t]=(0,D.useState)();return(0,O.jsx)(u,{label:`Название`,fetchOptions:s,value:e,minSymbolsToFetch:3,dialogProps:{title:`Выбор подразделения`},onChange:t})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} minSymbolsToFetch={3} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} />;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N;function P(){return(P=e((()=>{j=t(),l(),c(),M=n(),N=()=>{let[e,t]=(0,j.useState)();return(0,M.jsx)(u,{label:`Название`,fetchOptions:o,value:e,dialogProps:{title:`Выбор подразделения`,size:`xl`},onChange:t})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchDeepTreeListOrganizations} value={value} dialogProps={{
    title: 'Выбор подразделения',
    size: 'xl'
  }} onChange={setValue} />;
}`,...N.parameters?.docs?.source},description:{story:"С помощью параметра `dialogProps` можно изменять размеры модального окна в случае большой вложенности элементов списка",...N.parameters?.docs?.description}}};try{N.displayName=`ModalSize`,N.__docgenInfo={description:"С помощью параметра `dialogProps` можно изменять размеры модального окна в случае большой вложенности элементов списка",displayName:`ModalSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeAsyncAutocomplete/stories/ModalSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{F=t(),a(),l(),I=n(),L=()=>{let[e,t]=(0,F.useState)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(u,{label:`Название`,fetchOptions:async(e,t)=>(await new Promise(e=>setTimeout(e,500)),Promise.reject(`Сервис получения организаций не доступен`)),value:e,dialogProps:{title:`Выбор подразделения`},onChange:t,onDataLoadError:e=>{r.error(`${e}`,{containerId:`fetchOrganizations`})}}),(0,I.jsx)(i,{containerId:`fetchOrganizations`})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  const fetchOrganizations = async (_search: string, _abortSignal?: AbortSignal): Promise<FetchOptionsResult> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return Promise.reject('Сервис получения организаций не доступен');
  };
  const onDataLoadError = (error: Error) => {
    notify.error(\`\${error}\`, {
      containerId: 'fetchOrganizations'
    });
  };
  return <>
      <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} dialogProps={{
      title: 'Выбор подразделения'
    }} onChange={setValue} onDataLoadError={onDataLoadError} />
      <NotificationContainer containerId="fetchOrganizations" />
    </>;
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V;function H(){return(H=e((()=>{z=t(),l(),c(),B=n(),V=()=>{let[e,t]=(0,z.useState)();return(0,B.jsx)(u,{label:`Название`,fetchOptions:s,value:e,dialogProps:{title:`Выбор подразделения`},onChange:t,onShowUserHint:e=>e.length>=10})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeAsyncAutocompleteValue | null>();
  const onShowUserHint = (data: TreeAsyncAutocompleteValue[]) => {
    // Показываем дополнительную подсказку, если найдено 10 или более элементов
    return data.length >= 10;
  };
  return <TreeAsyncAutocomplete label="Название" fetchOptions={fetchOrganizations} value={value} dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} onShowUserHint={onShowUserHint} />;
}`,...V.parameters?.docs?.source},description:{story:"Параметр `onShowUserHint` позволяет компоненту `TreeAsyncAutocomplete` отображать дополнительную подсказку пользователю, если результат поиска слишком большой.",...V.parameters?.docs?.description}}};try{V.displayName=`OnShowUserHint`,V.__docgenInfo={description:"Параметр `onShowUserHint` позволяет компоненту `TreeAsyncAutocomplete` отображать дополнительную подсказку пользователю, если результат поиска слишком большой.",displayName:`OnShowUserHint`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeAsyncAutocomplete/stories/OnShowUserHint.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W;function G(){return(G=e((()=>{l(),m(),v(),S(),E(),A(),P(),R(),H(),U={title:`Tree/TreeAsyncAutocomplete`,component:u,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System--%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E-?node-id=8620-116375&p=f&t=PGvGg0HydVCOEoYO-0)

Более подробные примеры и варианты использования можно найти в документации
базового компонента
[TreeAutocomplete](/docs/tree-treeAutocomplete--docs).`}}}},W=[`BasicUsage`,`Disabled`,`LoadingError`,`OnDataLoadError`,`MinSymbolsToFetch`,`FetchDelayMs`,`OnShowUserHint`,`ModalSize`]})))()}G();export{p as BasicUsage,_ as Disabled,x as FetchDelayMs,T as LoadingError,k as MinSymbolsToFetch,N as ModalSize,L as OnDataLoadError,V as OnShowUserHint,W as __namedExportsOrder,U as default};