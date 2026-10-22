import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,dt as n,ft as r,ji as i,xa as a,yn as o}from"./preview-i6eMEpGd.js";import{n as s,t as c}from"./TreeLikeAutocomplete-gq6IqKOc.js";import{n as l,r as u,t as d}from"./constants-C9uvm4iA.js";var f;function p(){return(p=e((()=>{o(),f=i.div`
  width: 400px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`})))()}function m(){return(m=e((()=>{p()})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),u(),s(),m(),g=a(),_=()=>{let[e,t]=(0,h.useState)([`12`,`3`]),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d];return(0,g.jsx)(f,{children:(0,g.jsx)(c,{label:`Название`,placeholder:`Выберите вариант`,options:n,value:e,fullWidth:!0,dialogProps:{title:`Выбор элемента`},onChange:t})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(['12', '3']);
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" placeholder="Выберите вариант" options={fakeOptions} value={value} fullWidth dialogProps={{
      title: 'Выбор элемента'
    }} onChange={setValue} />
    </Wrapper>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),u(),s(),b=a(),x=()=>{let[e,t]=(0,y.useState)([`12`,`3`]),n=[{id:`10`,label:`ИП Иванов О.В.`},...l];return(0,b.jsx)(c,{label:`Название`,isDisabled:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>(['12', '3']);
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeLikeAutocomplete label="Название" isDisabled options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=t(),u(),s(),m(),w=a(),T=()=>{let[e,t]=(0,C.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`},...l];return(0,w.jsx)(f,{children:(0,w.jsx)(c,{label:`Название`,required:!0,options:n,value:e,fullWidth:!0,dialogProps:{title:`Выбор элемента`},treeProps:{disabledItems:[{id:`12`,disabledReason:`Элемент заблокирован`},`3`]},onChange:t})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.'
  }, ...FAKE_TREE_LIST_DATA];
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" required options={fakeOptions} value={value} fullWidth dialogProps={{
      title: 'Выбор элемента'
    }} treeProps={{
      disabledItems: [{
        id: '12',
        disabledReason: 'Элемент заблокирован'
      }, '3']
    }} onChange={setValue} />
    </Wrapper>;
}`,...T.parameters?.docs?.source},description:{story:"Используя `treeProps` можно сконфигурировать дерево опций, например указать список недоступных для выбора элементов",...T.parameters?.docs?.description}}};try{T.displayName=`DisabledItems`,T.__docgenInfo={description:"Используя `treeProps` можно сконфигурировать дерево опций, например указать список недоступных для выбора элементов",displayName:`DisabledItems`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeAutocomplete/stories/DisabledItems.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var D,O,k;function A(){return(A=e((()=>{D=t(),u(),s(),m(),O=a(),k=()=>{let[e,t]=(0,D.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d];return(0,O.jsx)(f,{children:(0,O.jsx)(c,{label:`Название`,options:n,value:e,fullWidth:!0,dialogProps:{title:`Выбор элемента`},filterOptions:(e,t)=>typeof e.label==`string`&&e.label.includes(t),onChange:t})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_NOTE_TREE_LIST_DATA];
  const filterOptions: TreeLikeAutocompleteProps['filterOptions'] = (option, searchValue) => {
    if (typeof option.label !== 'string') {
      return false;
    }
    return option.label.includes(searchValue);
  };
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" options={fakeOptions} value={value} fullWidth dialogProps={{
      title: 'Выбор элемента'
    }} filterOptions={filterOptions} onChange={setValue} />
    </Wrapper>;
}`,...k.parameters?.docs?.source},description:{story:"`filterOptions` предназначен для кастомизации способа поиска введенного значения в дереве.\nНапример можно организовать поиск только по `label`",...k.parameters?.docs?.description}}};try{k.displayName=`FilterOptions`,k.__docgenInfo={description:"`filterOptions` предназначен для кастомизации способа поиска введенного значения в дереве.\nНапример можно организовать поиск только по `label`",displayName:`FilterOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeAutocomplete/stories/FilterOptions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{j=t(),s(),M=a(),N=()=>{let[e,t]=(0,j.useState)();return(0,M.jsx)(c,{label:`Название`,isLoading:!0,options:[],value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  return <TreeLikeAutocomplete label="Название" isLoading options={[]} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...N.parameters?.docs?.source}}}})))()}var F,I,L;function R(){return(R=e((()=>{F=t(),s(),I=a(),L=()=>{let[e,t]=(0,F.useState)();return(0,I.jsx)(c,{label:`Название`,isLoadingError:!0,options:[],value:e,loadingErrorMsg:`Ошибка загрузки списка опций`,dialogProps:{title:`Выбор элемента`},onRetry:()=>alert(`Retry`),onChange:t})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  const handleRetry = () => alert('Retry');
  return <TreeLikeAutocomplete label="Название" isLoadingError options={[]} value={value} loadingErrorMsg="Ошибка загрузки списка опций" dialogProps={{
    title: 'Выбор элемента'
  }} onRetry={handleRetry} onChange={setValue} />;
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V;function H(){return(H=e((()=>{z=t(),o(),u(),n(),s(),m(),B=a(),V=()=>{let[e,t]=(0,z.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...d],a=i.div`
    padding-left: ${({theme:e})=>e.spacing(1)};
  `;return(0,B.jsx)(f,{children:(0,B.jsx)(c,{label:`Название`,required:!0,options:n,value:e,fullWidth:!0,dialogProps:{title:`Выбор элемента`},treeProps:{renderItem:({note:e,label:t})=>(0,B.jsxs)(a,{children:[(0,B.jsxs)(r,{component:`div`,variant:`caption`,children:[`# `,t]}),e&&(0,B.jsx)(r,{variant:`pointer`,children:e})]})},onChange:t})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
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
  const renderItem: TreeLikeAutocompleteTreeProps['renderItem'] = ({
    note,
    label
  }) => <CustomItem>
      <Typography component="div" variant="caption">
        # {label}
      </Typography>
      {note && <Typography variant="pointer">{note}</Typography>}
    </CustomItem>;
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" required options={fakeOptions} value={value} fullWidth dialogProps={{
      title: 'Выбор элемента'
    }} treeProps={{
      renderItem
    }} onChange={setValue} />
    </Wrapper>;
}`,...V.parameters?.docs?.source}}}})))()}var U,W,G;function K(){return(K=e((()=>{U=t(),u(),s(),m(),W=a(),G=()=>{let[e,t]=(0,U.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...l];return(0,W.jsx)(f,{children:(0,W.jsx)(c,{label:`Название`,required:!0,fullWidth:!0,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_TREE_LIST_DATA];
  return <Wrapper>
      <TreeLikeAutocomplete label="Название" required fullWidth options={fakeOptions} value={value} dialogProps={{
      title: 'Выбор элемента'
    }} onChange={setValue} />
    </Wrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=t(),u(),s(),J=a(),Y=()=>{let[e,t]=(0,q.useState)(),n=[{id:`10`,label:`ИП Иванов О.В.`,note:`ip_ivanov@gmail.com`},...l];return(0,J.jsx)(c,{label:`Название`,isError:!0,helperText:`Обязательно`,options:n,value:e,dialogProps:{title:`Выбор элемента`},onChange:t})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAutocompleteValue | undefined>();
  const fakeOptions = [{
    id: '10',
    label: 'ИП Иванов О.В.',
    note: 'ip_ivanov@gmail.com'
  }, ...FAKE_TREE_LIST_DATA];
  return <TreeLikeAutocomplete label="Название" isError helperText="Обязательно" options={fakeOptions} value={value} dialogProps={{
    title: 'Выбор элемента'
  }} onChange={setValue} />;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{s(),v(),S(),E(),A(),P(),R(),H(),K(),X(),Z={title:`Tree/TreeLikeAutocomplete`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=2744-117665&t=HB0CHnLVvnouhdxB-0)
TreeLikeAutocomplete - Компонент предназначен для множественного выбора значений из списка, имеющего древовидную структуру, с поддержкой поиска.`}}}},Q=[`BasicUsage`,`Disabled`,`Required`,`WithError`,`FilterOptions`,`DisabledItems`,`RenderItem`,`Loading`,`LoadingError`]})))()}$();export{_ as BasicUsage,x as Disabled,T as DisabledItems,k as FilterOptions,N as Loading,L as LoadingError,V as RenderItem,G as Required,Y as WithError,Q as __namedExportsOrder,Z as default};