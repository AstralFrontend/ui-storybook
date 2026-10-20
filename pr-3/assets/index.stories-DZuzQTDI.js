import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,dt as n,ft as r,ji as i,xa as a,yn as o}from"./preview-DtNO2DmU.js";import{n as s,t as c}from"./TreeAutocomplete-BqJFc33O.js";import{n as l,r as u,t as d}from"./constants-C9uvm4iA.js";var f,p,m;function h(){return(h=e((()=>{f=t(),s(),u(),p=a(),m=()=>{let[e,t]=(0,f.useState)(`3`),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d];return(0,p.jsx)(c,{label:`Название`,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>('3');
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...m.parameters?.docs?.source}}}})))()}var g,_,v;function y(){return(y=e((()=>{g=t(),s(),u(),_=a(),v=()=>{let[e,t]=(0,g.useState)(`3`),n=[{id:`10`,label:`ИП Иванов О.В.`},...l];return(0,_.jsx)(c,{label:`Название`,isDisabled:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>('3');
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" isDisabled options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...v.parameters?.docs?.source}}}})))()}var b,x,S;function C(){return(C=e((()=>{b=t(),s(),u(),x=a(),S=()=>{let[e,t]=(0,b.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`},...l];return(0,x.jsx)(c,{label:`Название`,required:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},treeProps:{disabledItems:[{id:`21`,disabledReason:`Элемент заблокирован`},`3`]},onChange:t})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" required options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} treeProps={{
    disabledItems: [{
      id: '21',
      disabledReason: 'Элемент заблокирован'
    }, '3']
  }} onChange={setValue} />;
}`,...S.parameters?.docs?.source},description:{story:"Используя `treeProps` можно сконфигурировать дерево опций, например указать список недоступных для выбора элементов",...S.parameters?.docs?.description}}};try{S.displayName=`DisabledItems`,S.__docgenInfo={description:"Используя `treeProps` можно сконфигурировать дерево опций, например указать список недоступных для выбора элементов",displayName:`DisabledItems`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeAutocomplete/stories/DisabledItems.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E;function D(){return(D=e((()=>{w=t(),s(),u(),T=a(),E=()=>{let[e,t]=(0,w.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d];return(0,T.jsx)(c,{label:`Название`,options:n,value:e,dialogProps:{title:`Выбор элемента`},filterOptions:(e,t)=>typeof e.label==`string`&&e.label.includes(t),onChange:t})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  const filterOptions: TreeAutocompleteProps['filterOptions'] = (node, searchValue) => {
    if (typeof node.label !== 'string') {
      return false;
    }
    return node.label.includes(searchValue);
  };
  return <TreeAutocomplete label="Название" options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} filterOptions={filterOptions} onChange={setValue} />;
}`,...E.parameters?.docs?.source},description:{story:"filterOptions предназначен для кастомизации способа поиска введенного значения в дереве.\nНапример можно организовать поиск только по `label`",...E.parameters?.docs?.description}}};try{E.displayName=`FilterOptions`,E.__docgenInfo={description:"filterOptions предназначен для кастомизации способа поиска введенного значения в дереве.\nНапример можно организовать поиск только по `label`",displayName:`FilterOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeAutocomplete/stories/FilterOptions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k,A;function j(){return(j=e((()=>{O=t(),s(),k=a(),A=()=>{let[e,t]=(0,O.useState)();return(0,k.jsx)(c,{label:`Название`,isLoading:!0,options:[],value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  return <TreeAutocomplete label="Название" isLoading options={[]} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...A.parameters?.docs?.source}}}})))()}var M,N,P;function F(){return(F=e((()=>{M=t(),s(),N=a(),P=()=>{let[e,t]=(0,M.useState)();return(0,N.jsx)(c,{label:`Название`,isLoadingError:!0,options:[],value:e,loadingErrorMsg:`Ошибка загрузки списка опций`,dialogProps:{title:`Выбор элемента`},onRetry:()=>alert(`Retry`),onChange:t})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const handleRetry = () => alert('Retry');
  return <TreeAutocomplete label="Название" isLoadingError options={[]} value={value} loadingErrorMsg="Ошибка загрузки списка опций" dialogProps={{
    title: 'Выбор элемента'
  }} onRetry={handleRetry} onChange={setValue} />;
}`,...P.parameters?.docs?.source},description:{story:"`loadingErrorMsg` позволяет указать кастомный текст ошибки при загрузке данных",...P.parameters?.docs?.description}}};try{P.displayName=`LoadingError`,P.__docgenInfo={description:"`loadingErrorMsg` позволяет указать кастомный текст ошибки при загрузке данных",displayName:`LoadingError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeAutocomplete/stories/LoadingError.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L,R;function z(){return(z=e((()=>{I=t(),o(),n(),s(),u(),L=a(),R=()=>{let[e,t]=(0,I.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d],a=i.div`
    padding-left: ${({theme:e})=>e.spacing(1)};
  `;return(0,L.jsx)(c,{label:`Название`,required:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},treeProps:{renderItem:({note:e,label:t})=>(0,L.jsxs)(a,{children:[(0,L.jsxs)(r,{component:`div`,variant:`caption`,children:[`# `,t]}),e&&(0,L.jsx)(r,{variant:`pointer`,children:e})]})},onChange:t})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  const CustomItem = styled.div\`
    padding-left: \${({
    theme
  }) => theme.spacing(1)};
  \`;
  const renderItem: TreeAutocompleteTreeProps['renderItem'] = ({
    note,
    label
  }) => <CustomItem>
      <Typography component="div" variant="caption">
        # {label}
      </Typography>
      {note && <Typography variant="pointer">{note}</Typography>}
    </CustomItem>;
  return <TreeAutocomplete label="Название" required options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} treeProps={{
    renderItem
  }} onChange={setValue} />;
}`,...R.parameters?.docs?.source}}}})))()}var B,V,H;function U(){return(U=e((()=>{B=t(),s(),u(),V=a(),H=()=>{let[e,t]=(0,B.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...l];return(0,V.jsx)(c,{label:`Название`,required:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" required options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...H.parameters?.docs?.source}}}})))()}var W,G,K;function q(){return(q=e((()=>{W=t(),s(),u(),G=a(),K=()=>{let[e,t]=(0,W.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...l];return(0,G.jsx)(c,{label:`Название`,isError:!0,helperText:`Обязательно`,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeAutocomplete label="Название" isError helperText="Обязательно" options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...K.parameters?.docs?.source}}}})))()}var J,Y;function X(){return(X=e((()=>{s(),h(),y(),C(),D(),j(),F(),z(),U(),q(),J={title:`Tree/TreeAutocomplete`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=2744-81007&t=HB0CHnLVvnouhdxB-0)
TreeAutocomplete - Компонент предназначен для выбора значения из опций, имеющих древовидную структуру, с поддержкой поиска.

Для выбора значений из списка, загружаемого асинхронно используйте компонент [TreeAsyncAutocomplete](/docs/tree-treeAsyncAutocomplete--docs)`}}}},Y=[`BasicUsage`,`Disabled`,`Required`,`WithError`,`FilterOptions`,`DisabledItems`,`RenderItem`,`Loading`,`LoadingError`]})))()}X();export{m as BasicUsage,v as Disabled,S as DisabledItems,E as FilterOptions,A as Loading,P as LoadingError,R as RenderItem,H as Required,K as WithError,Y as __namedExportsOrder,J as default};