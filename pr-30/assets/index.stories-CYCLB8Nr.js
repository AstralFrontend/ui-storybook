import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,dt as n,ft as r,ji as i,lt as a,ya as o,yn as s,za as c}from"./preview-BgfOFFw_.js";import{t as l}from"./MenuItem-TwvbZZ0o.js";import{t as u}from"./MenuItem-D5cXNVFU.js";import{n as d,t as f}from"./Select-CjnY7XI2.js";import{a as p,c as m,d as ee,i as te,l as ne,n as re,o as h,t as g,u as _}from"./common-jVvj8RkW.js";var v,y,b;function ie(){return(ie=e((()=>{v=c(),d(),g(),y=o(),b=()=>{let[e,t]=(0,v.useState)(null);return(0,y.jsx)(p,{children:(0,y.jsx)(f,{label:`Basic`,onChange:e=>{t(e.target.value)},value:e,placeholder:`Выберите вариант`,fullWidth:!0,options:ne,getOptionLabel:e=>e.name})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<StoryNamedOption | null>(null);
  const handleChange = (event: SelectChangeEvent<StoryNamedOption | null>) => {
    setValue(event.target.value as StoryNamedOption);
  };
  return <Container>
      <Select label="Basic" onChange={handleChange} value={value} placeholder="Выберите вариант" fullWidth options={NAMED_OPTIONS} getOptionLabel={option => option.name} />
    </Container>;
}`,...b.parameters?.docs?.source}}}})))()}var ae,x,S;function C(){return(C=e((()=>{ae=c(),u(),d(),g(),x=o(),S=()=>{let[e,t]=(0,ae.useState)(``);return(0,x.jsx)(h,{children:(0,x.jsxs)(f,{label:`Тип документа`,placeholder:`Выберите тип`,value:e,onChange:e=>t(e.target.value),children:[(0,x.jsx)(l,{value:`invoice`,children:`Счёт-фактура`}),(0,x.jsx)(l,{value:`act`,children:`Акт выполненных работ`}),(0,x.jsx)(l,{value:`waybill`,children:`Товарная накладная`})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [documentType, setDocumentType] = useState('');
  const handleChange = (event: SelectChangeEvent<typeof documentType>) => setDocumentType(event.target.value);
  return <Wrapper>
      <Select label="Тип документа" placeholder="Выберите тип" value={documentType} onChange={handleChange}>
        <MenuItem value="invoice">Счёт-фактура</MenuItem>
        <MenuItem value="act">Акт выполненных работ</MenuItem>
        <MenuItem value="waybill">Товарная накладная</MenuItem>
      </Select>
    </Wrapper>;
}`,...S.parameters?.docs?.source},description:{story:"Пункты можно передать через `children` с `MenuItem`. Группы, счётчик и сворачивание доступны только через `options`",...S.parameters?.docs?.description}}};try{S.displayName=`ChildrenUsage`,S.__docgenInfo={description:"Пункты можно передать через `children` с `MenuItem`. Группы, счётчик и сворачивание доступны только через `options`",displayName:`ChildrenUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/ChildrenUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E;function D(){return(D=e((()=>{w=c(),s(),n(),d(),g(),T=o(),E=()=>{let e=i.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(1)};

    max-width: 400px;

    white-space: wrap;
  `,[t,n]=(0,w.useState)(null);return(0,T.jsx)(p,{children:(0,T.jsx)(f,{label:`Роль`,onChange:e=>{n(e.target.value)},value:t,placeholder:`Выберите роль`,options:ee,getOptionLabel:e=>e.name,renderOption:t=>(0,T.jsxs)(e,{children:[(0,T.jsx)(r,{children:t.name}),(0,T.jsx)(r,{color:`textSecondary`,children:t.description})]}),fullWidth:!0})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const OptionContent = styled.div\`
    display: flex;
    flex-direction: column;
    gap: \${({
    theme
  }) => theme.spacing(1)};

    max-width: 400px;

    white-space: wrap;
  \`;
  const [role, setRole] = useState<StoryRole | null>(null);
  const handleChange = (event: SelectChangeEvent<typeof role>) => {
    setRole(event.target.value as StoryRole);
  };
  return <Container>
      <Select label="Роль" onChange={handleChange} value={role} placeholder="Выберите роль" options={ROLES} getOptionLabel={option => option.name} renderOption={option => <OptionContent>
            <Typography>{option.name}</Typography>
            <Typography color="textSecondary">{option.description}</Typography>
          </OptionContent>} fullWidth />
    </Container>;
}`,...E.parameters?.docs?.source},description:{story:"`renderOption` меняет содержимое строки пункта в списке",...E.parameters?.docs?.description}}};try{E.displayName=`CustomOptions`,E.__docgenInfo={description:"`renderOption` меняет содержимое строки пункта в списке",displayName:`CustomOptions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/CustomOptions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k,A,j,M,N;function oe(){return(oe=e((()=>{O=c(),d(),g(),k=o(),A=[{code:`received`,name:`Получен`},{code:`reply-created`,name:`Ответ создан`},{code:`error`,name:`Ошибка`},{code:`reply-rejected`,name:`Ответ не принят`},{code:`overdue`,name:`Просрочен`}],j=[{code:`accepted`,name:`Ответ принят`},{code:`accepted-with-warning`,name:`Принят с предупреждением`}],M=[{id:`processing`,label:`В обработке`,options:[{code:`reply-sending`,name:`Ответ отправляется`},{code:`reply-sent`,name:`Ответ отправлен`},{code:`reply-received`,name:`Ответ получен`}]},{id:`confirmed`,label:`Подтверждённые`,options:j}],N=()=>{let e=[{id:`needs-answer`,label:`Требуют ответа`,options:A},...M],[t,n]=(0,O.useState)(!0),[r,i]=(0,O.useState)(!1),[a,o]=(0,O.useState)(null),[s,c]=(0,O.useState)([A[0],A[1],...j]);return(0,k.jsx)(te,{controls:(0,k.jsx)(re,{isMultiple:t,isCollapsibleGroups:r,onMultipleChange:n,onCollapsibleGroupsChange:i}),children:(0,k.jsx)(h,{children:(0,k.jsx)(f,{label:`Статус`,placeholder:`Выберите статус`,multiple:t,isEnableAllSelection:t,isCollapsibleGroups:t&&r,options:e,getOptionLabel:e=>e.name,value:t?s:a,onChange:e=>{if(t){c(e.target.value);return}o(e.target.value)}})})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const options: SelectOptions<Status> = [{
    id: 'needs-answer',
    label: 'Требуют ответа',
    options: NEEDS_ANSWER_STATUSES
  }, ...OTHER_STATUS_GROUPS];
  const [isMultiple, setMultiple] = useState(true);
  const [isCollapsibleGroups, setCollapsibleGroups] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [statuses, setStatuses] = useState<Status[]>([NEEDS_ANSWER_STATUSES[0], NEEDS_ANSWER_STATUSES[1], ...CONFIRMED_STATUSES]);
  const handleChange = (event: SelectChangeEvent<Status | Status[] | null>) => {
    if (isMultiple) {
      setStatuses(event.target.value as Status[]);
      return;
    }
    setStatus(event.target.value as Status);
  };
  return <CompactStoryControlWrapper controls={<GroupedSelectionControls isMultiple={isMultiple} isCollapsibleGroups={isCollapsibleGroups} onMultipleChange={setMultiple} onCollapsibleGroupsChange={setCollapsibleGroups} />}>
      <Wrapper>
        <Select label="Статус" placeholder="Выберите статус" multiple={isMultiple} isEnableAllSelection={isMultiple} isCollapsibleGroups={isMultiple && isCollapsibleGroups} options={options} getOptionLabel={option => option.name} value={isMultiple ? statuses : status} onChange={handleChange} />
      </Wrapper>
    </CompactStoryControlWrapper>;
}`,...N.parameters?.docs?.source},description:{story:"Группа задаётся объектом с `id`, `label` и `options`.\n\nПараметр `isCollapsibleGroups` добавляет сворачивание групп.",...N.parameters?.docs?.description}}};try{N.displayName=`GroupedSelection`,N.__docgenInfo={description:"Группа задаётся объектом с `id`, `label` и `options`.\n\nПараметр `isCollapsibleGroups` добавляет сворачивание групп.",displayName:`GroupedSelection`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/GroupedSelection.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var se,P,F;function I(){return(I=e((()=>{se=c(),d(),g(),P=o(),F={render:e=>{let[t,n]=(0,se.useState)(null);return(0,P.jsx)(h,{children:(0,P.jsx)(f,{onChange:e=>{n(e.target.value)},value:t,options:_,...e})})},args:{label:`Select`,placeholder:`Выберите вариант`},parameters:{docs:{disable:!0}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [singleValue, setSingleValue] = useState<StoryOption | null>(null);
    const handleSingleChange = (event: SelectChangeEvent<unknown>) => {
      setSingleValue(event.target.value as StoryOption);
    };
    return <Wrapper>
        <Select onChange={handleSingleChange} value={singleValue} options={OPTIONS} {...args} />
      </Wrapper>;
  },
  args: {
    label: 'Select',
    placeholder: 'Выберите вариант'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...F.parameters?.docs?.source}}}})))()}var L,R,z;function B(){return(B=e((()=>{L=c(),d(),g(),R=o(),z=()=>{let[e,t]=(0,L.useState)([]);return(0,R.jsx)(h,{children:(0,R.jsx)(f,{placeholder:`Выберите вариант`,value:e,label:`Multiple`,onChange:e=>{t(e.target.value)},multiple:!0,options:m})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [multipleValue, setMultipleValue] = useState<StoryOption[]>([]);
  const handleMultipleChange = (event: SelectChangeEvent<typeof multipleValue>) => {
    setMultipleValue(event.target.value as StoryOption[]);
  };
  return <Wrapper>
      <Select placeholder="Выберите вариант" value={multipleValue} label="Multiple" onChange={handleMultipleChange} multiple options={MULTIPLE_OPTIONS} />
    </Wrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H,U;function W(){return(W=e((()=>{V=c(),t(),u(),d(),g(),H=o(),U=()=>{let[e,t]=(0,V.useState)([]),[n,r]=(0,V.useState)([]),i=[`ООО «Альфа»`,`АО «Вега»`,`ООО «Сигма»`];return(0,H.jsxs)(a,{container:!0,spacing:4,direction:`column`,children:[(0,H.jsx)(h,{children:(0,H.jsx)(f,{placeholder:`Выберите организации`,value:e,label:`Режим options`,onChange:e=>{t(e.target.value)},multiple:!0,isEnableAllSelection:!0,options:m})}),(0,H.jsx)(h,{children:(0,H.jsx)(f,{placeholder:`Выберите организации`,value:n,label:`Режим children`,onChange:e=>{r(e.target.value)},multiple:!0,isEnableAllSelection:!0,valueOptions:i,children:i.map(e=>(0,H.jsx)(l,{value:e,children:e},e))})})]})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const [selectedOptions, setSelectedOptions] = useState<StoryOption[]>([]);
  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>([]);
  const organizations = ['ООО «Альфа»', 'АО «Вега»', 'ООО «Сигма»'];
  const handleOptionsChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    setSelectedOptions(event.target.value as StoryOption[]);
  };
  const handleChildrenChange = (event: SelectChangeEvent<typeof selectedOrganizations>) => {
    setSelectedOrganizations(event.target.value as string[]);
  };
  return <Grid container spacing={4} direction="column">
      <Wrapper>
        <Select placeholder="Выберите организации" value={selectedOptions} label="Режим options" onChange={handleOptionsChange} multiple isEnableAllSelection options={MULTIPLE_OPTIONS} />
      </Wrapper>
      <Wrapper>
        <Select placeholder="Выберите организации" value={selectedOrganizations} label="Режим children" onChange={handleChildrenChange} multiple isEnableAllSelection valueOptions={organizations}>
          {organizations.map(organization => <MenuItem key={organization} value={organization}>
              {organization}
            </MenuItem>)}
        </Select>
      </Wrapper>
    </Grid>;
}`,...U.parameters?.docs?.source},description:{story:"В режиме `options` полный набор значений для «Выбрать все» берётся из `options`.\n\nВ режиме `children` его нужно передать в `valueOptions`",...U.parameters?.docs?.description}}};try{U.displayName=`SelectAll`,U.__docgenInfo={description:"В режиме `options` полный набор значений для «Выбрать все» берётся из `options`.\n\nВ режиме `children` его нужно передать в `valueOptions`",displayName:`SelectAll`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/SelectAll.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K,q;function J(){return(J=e((()=>{G=c(),d(),g(),K=o(),q=()=>{let[e,t]=(0,G.useState)([]);return(0,K.jsx)(h,{children:(0,K.jsx)(f,{placeholder:`Выберите вариант`,value:e,label:`Select all`,onChange:e=>{t(e.target.value)},multiple:!0,isEnableAllSelection:!0,onSelectAll:()=>{t(m),window.alert(`isSelectedAll = true`)},onUnselectAll:()=>{t([]),window.alert(`isSelectedAll = false`)},options:m})})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const [multipleValue, setMultipleValue] = useState<StoryOption[]>([]);
  const handleMultipleChange = (event: SelectChangeEvent<typeof multipleValue>) => {
    setMultipleValue(event.target.value as StoryOption[]);
  };
  const onSelectAll = () => {
    setMultipleValue(MULTIPLE_OPTIONS);
    window.alert('isSelectedAll = true');
  };
  const onUnselectAll = () => {
    setMultipleValue([]);
    window.alert('isSelectedAll = false');
  };
  return <Wrapper>
      <Select placeholder="Выберите вариант" value={multipleValue} label="Select all" onChange={handleMultipleChange} multiple isEnableAllSelection onSelectAll={onSelectAll} onUnselectAll={onUnselectAll} options={MULTIPLE_OPTIONS} />
    </Wrapper>;
}`,...q.parameters?.docs?.source},description:{story:`Опциональные действия при нажатии 'Выбрать все',
'onSelectAll' - при выборе всех опций,
'onUnselectAll' - при отмене выбора всех опций`,...q.parameters?.docs?.description}}};try{q.displayName=`SelectAllCallback`,q.__docgenInfo={description:`Опциональные действия при нажатии 'Выбрать все',
'onSelectAll' - при выборе всех опций,
'onUnselectAll' - при отмене выбора всех опций`,displayName:`SelectAllCallback`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/SelectAllCallback.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var ce,Y,X;function le(){return(le=e((()=>{ce=c(),d(),g(),Y=o(),X=()=>{let[e,t]=(0,ce.useState)(null),n=e=>{t(e.target.value)};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(p,{children:(0,Y.jsx)(f,{label:`Medium`,onChange:n,value:e,placeholder:`Выберите вариант`,fullWidth:!0,options:_})}),(0,Y.jsx)(p,{children:(0,Y.jsx)(f,{label:`Small`,size:`small`,onChange:n,value:e,placeholder:`Выберите вариант`,fullWidth:!0,options:_})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<StoryOption | null>(null);
  const handleSingleChange = (event: SelectChangeEvent<typeof singleValue>) => {
    setSingleValue(event.target.value as StoryOption);
  };
  return <>
      <Container>
        <Select label="Medium" onChange={handleSingleChange} value={singleValue} placeholder="Выберите вариант" fullWidth options={OPTIONS} />
      </Container>

      <Container>
        <Select label="Small" size="small" onChange={handleSingleChange} value={singleValue} placeholder="Выберите вариант" fullWidth options={OPTIONS} />
      </Container>
    </>;
}`,...X.parameters?.docs?.source}}}})))()}var Z,Q,$;function ue(){return(ue=e((()=>{Z=c(),t(),d(),g(),Q=o(),$=()=>{let[e,t]=(0,Z.useState)(null),[n,r]=(0,Z.useState)(_[0]);return(0,Q.jsx)(h,{children:(0,Q.jsxs)(a,{container:!0,spacing:4,children:[(0,Q.jsx)(f,{label:`Disabled`,placeholder:`Выберите вариант`,value:null,options:_,disabled:!0}),(0,Q.jsx)(f,{label:`Loading`,placeholder:`Выберите вариант`,value:null,options:_,loading:!0}),(0,Q.jsx)(f,{label:`Error`,placeholder:`Выберите вариант`,value:e,options:_,onChange:e=>t(e.target.value),error:!0,helperText:`Ошибка валидации`}),(0,Q.jsx)(f,{label:`Success`,placeholder:`Выберите вариант`,value:n,options:_,onChange:e=>r(e.target.value),success:!0,helperText:`Проверка пройдена`}),(0,Q.jsx)(f,{label:`No data`,placeholder:`Выберите вариант`,value:null,options:[]})]})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [errorValue, setErrorValue] = useState<StoryOption | null>(null);
  const [successValue, setSuccessValue] = useState<StoryOption | null>(OPTIONS[0]);
  const handleErrorChange = (event: SelectChangeEvent<typeof errorValue>) => setErrorValue(event.target.value as StoryOption);
  const handleSuccessChange = (event: SelectChangeEvent<typeof successValue>) => setSuccessValue(event.target.value as StoryOption);
  return <Wrapper>
      <Grid container spacing={4}>
        <Select label="Disabled" placeholder="Выберите вариант" value={null} options={OPTIONS} disabled />
        <Select label="Loading" placeholder="Выберите вариант" value={null} options={OPTIONS} loading />
        <Select label="Error" placeholder="Выберите вариант" value={errorValue} options={OPTIONS} onChange={handleErrorChange} error helperText="Ошибка валидации" />
        <Select label="Success" placeholder="Выберите вариант" value={successValue} options={OPTIONS} onChange={handleSuccessChange} success helperText="Проверка пройдена" />
        <Select label="No data" placeholder="Выберите вариант" value={null} options={[]} />
      </Grid>
    </Wrapper>;
}`,...$.parameters?.docs?.source}}}})))()}var de,fe;function pe(){return(pe=e((()=>{d(),ie(),C(),D(),oe(),I(),B(),W(),J(),le(),ue(),de={title:`Form-Controls/Select`,component:f,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=82-14123)`}}}},fe=[`Interaction`,`BasicUsage`,`CustomOptions`,`States`,`Multiple`,`SelectAll`,`SelectAllCallback`,`GroupedSelection`,`ChildrenUsage`,`Sizes`]})))()}pe();export{b as BasicUsage,S as ChildrenUsage,E as CustomOptions,N as GroupedSelection,F as Interaction,z as Multiple,U as SelectAll,q as SelectAllCallback,X as Sizes,$ as States,fe as __namedExportsOrder,de as default};