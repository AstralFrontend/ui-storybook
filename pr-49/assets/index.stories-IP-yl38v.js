import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,ya as i,yn as a,za as o}from"./preview-DeB2xvR7.js";import{t as s}from"./Description-D3aWL_hL.js";import{t as c}from"./Description-BOkpUgdS.js";import{n as l,t as u}from"./TreeLikeList-Dj8pNkrI.js";import{a as d,t as f}from"./common-B1YB2lg6.js";var p,m;function h(){return(h=e((()=>{p=[{id:`1`,label:`ООО "Волшебные документы"`,children:[{id:`11`,label:`Коммерческий отдел`},{id:`12`,label:`Отдел снабжения`,children:[{id:`121`,label:`Склад`}]}]},{id:`2`,label:`ООО "Новая организация"`,children:[{id:`21`,label:`Отдел продаж`,children:[{id:`211`,label:`Группа розницы`},{id:`212`,label:`Группа опта`}]},{id:`22`,label:`Отдел закупок`}]},{id:`3`,label:`ПАО "Завод №1"`,children:[{id:`31`,label:`Отдел продаж`},{id:`32`,label:`Отдел снабжения`},{id:`33`,label:`Бухгалтерия`}]},{id:`4`,label:`ИП Золотов С.И.`},{id:`5`,label:`ЗАО "ТехноИнновации"`,children:[{id:`51`,label:`Департамент финансов`,children:[{id:`511`,label:`Отдел бухгалтерии`},{id:`512`,label:`Отдел бюджетирования`}]},{id:`52`,label:`Департамент маркетинга`,children:[{id:`521`,label:`Отдел коммуникаций`},{id:`522`,label:`Отдел аналитики`}]},{id:`53`,label:`Департамент ИТ`}]},{id:`6`,label:`ООО "Урал`,children:[{id:`61`,label:`Отдел логистики`},{id:`62`,label:`Отдел качества`}]},{id:`7`,label:`ООО "Ромашка"`},{id:`8`,label:`ООО "Сибирские поставки"`,children:[{id:`81`,label:`Филиал Новосибирск`},{id:`82`,label:`Филиал Красноярск`}]},{id:`9`,label:`ООО "Купи Продай"`},{id:`10`,label:`ООО "Первый завод"`,children:[{id:`101`,label:`Производственный цех`},{id:`102`,label:`Отдел ОТК`}]}],m=[{id:`1`,label:`Организация 1`,note:`Руководитель`,children:[{id:`11`,label:`Подразделение 1.1`,note:`Руководитель`},{id:`12`,label:`Подразделение 1.2`,note:`Руководитель`}]},{id:`2`,label:`Организация 2`,note:`Руководитель`}]})))()}var g;function _(){return(_=e((()=>{a(),g=r.div`
  overflow-y: auto;

  width: 300px;
  height: 500px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: hidden;
  }
`})))()}function v(){return(v=e((()=>{h(),_()})))()}var y,b,x;function S(){return(S=e((()=>{y=o(),l(),v(),b=i(),x=()=>{let[e,t]=(0,y.useState)([`211`,`4`]);return(0,b.jsx)(g,{children:(0,b.jsx)(u,{data:p,value:e,onChange:t})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>(['211', '4']);
  return <Wrapper>
      <TreeLikeList data={FAKE_TREE_LIST_DATA} value={value} onChange={setValue} />
    </Wrapper>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=o(),f(),l(),v(),w=i(),T=()=>{let[e,t]=(0,C.useState)(),n=[...d,{id:`3`,label:`Item 3`}];return(0,w.jsx)(g,{children:(0,w.jsx)(u,{data:n,value:e,disabledItems:[{id:`21`,disabledReason:`Элемент заблокирован`},`3`],onChange:t})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_TREE_LIST_DATA, {
    id: '3',
    label: 'Item 3'
  }];
  return <Wrapper>
      <TreeLikeList data={fakeData} value={value} disabledItems={[{
      id: '21',
      disabledReason: 'Элемент заблокирован'
    }, '3']} onChange={setValue} />
    </Wrapper>;
}`,...T.parameters?.docs?.source},description:{story:"`disabledItems` позволяет заблокировать указанные элементы для взаимодействия.",...T.parameters?.docs?.description}}};try{T.displayName=`DisabledItems`,T.__docgenInfo={description:"`disabledItems` позволяет заблокировать указанные элементы для взаимодействия.",displayName:`DisabledItems`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/stories/DisabledItem.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var D,O,k;function A(){return(A=e((()=>{D=o(),l(),v(),O=i(),k=()=>{let[e,t]=(0,D.useState)();return(0,O.jsx)(g,{children:(0,O.jsx)(u,{data:p,value:e,isInitialExpanded:!0,expandedLevel:1,onChange:t})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  return <Wrapper>
      <TreeLikeList data={FAKE_TREE_LIST_DATA} value={value} isInitialExpanded expandedLevel={1} onChange={setValue} />
    </Wrapper>;
}`,...k.parameters?.docs?.source},description:{story:"`expandedLevel` позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`",...k.parameters?.docs?.description}}};try{k.displayName=`ExpandedLevel`,k.__docgenInfo={description:"`expandedLevel` позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`",displayName:`ExpandedLevel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/stories/ExpandedLevel.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{j=o(),l(),v(),M=i(),N=()=>{let[e,t]=(0,j.useState)();return(0,M.jsx)(g,{children:(0,M.jsx)(u,{data:p,value:e,isInitialExpanded:!0,onChange:t})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  return <Wrapper>
      <TreeLikeList data={FAKE_TREE_LIST_DATA} value={value} isInitialExpanded onChange={setValue} />
    </Wrapper>;
}`,...N.parameters?.docs?.source},description:{story:"При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию",...N.parameters?.docs?.description}}};try{N.displayName=`InitialExpanded`,N.__docgenInfo={description:"При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию",displayName:`InitialExpanded`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/stories/InitialExpanded.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{F=o(),l(),v(),I=i(),L=()=>{let[e,t]=(0,F.useState)();return(0,I.jsx)(g,{children:(0,I.jsx)(u,{data:p,value:e,isConfirmChildrenSelection:!0,onChange:t})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  return <Wrapper>
      <TreeLikeList data={FAKE_TREE_LIST_DATA} value={value} isConfirmChildrenSelection onChange={setValue} />
    </Wrapper>;
}`,...L.parameters?.docs?.source},description:{story:"При наличии флага `isConfirmChildrenSelection` появляется опциональная возможность включить/выключить дочерние элементы",...L.parameters?.docs?.description}}};try{L.displayName=`IsConfirmChildrenSelection`,L.__docgenInfo={description:"При наличии флага `isConfirmChildrenSelection` появляется опциональная возможность включить/выключить дочерние элементы",displayName:`IsConfirmChildrenSelection`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/stories/IsConfirmChildrenSelection.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{z=o(),c(),l(),v(),B=i(),V=()=>{let[e,t]=(0,z.useState)(),n=[...m,{id:`3`,label:`Организация 3`,note:(0,B.jsxs)(s,{direction:`row`,children:[(0,B.jsx)(s.Name,{children:`ИНН`}),(0,B.jsx)(s.Value,{children:`1234567890`})]})}];return(0,B.jsx)(g,{children:(0,B.jsx)(u,{data:n,value:e,onChange:t})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_NOTE_TREE_LIST_DATA, {
    id: '3',
    label: 'Организация 3',
    note: <Description direction="row">
          <Description.Name>ИНН</Description.Name>
          <Description.Value>1234567890</Description.Value>
        </Description>
  }];
  return <Wrapper>
      <TreeLikeList data={fakeData} value={value} onChange={setValue} />
    </Wrapper>;
}`,...V.parameters?.docs?.source},description:{story:"С помощью `note` можно задавать подзаголовок элементам дерева",...V.parameters?.docs?.description}}};try{V.displayName=`NoteItem`,V.__docgenInfo={description:"С помощью `note` можно задавать подзаголовок элементам дерева",displayName:`NoteItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/stories/NoteItem.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W,G;function K(){return(K=e((()=>{U=o(),c(),a(),t(),l(),v(),W=i(),G=()=>{let[e,t]=(0,U.useState)(),i=[...m,{id:`3`,label:`Организация 3`,note:(0,W.jsxs)(s,{children:[(0,W.jsx)(s.Name,{children:`ИНН`}),(0,W.jsx)(s.Value,{children:`1234567890`})]})}],a=r.div`
    padding-left: ${({theme:e})=>e.spacing(1)};
  `;return(0,W.jsx)(g,{children:(0,W.jsx)(u,{data:i,value:e,renderItem:({label:e,note:t,id:r})=>(0,W.jsxs)(a,{children:[(0,W.jsxs)(n,{children:[(0,W.jsxs)(n,{color:`textSecondary`,component:`span`,children:[`#`,r]}),`\xA0`,e]}),t&&(0,W.jsx)(n,{variant:`pointer`,color:`success`,children:t})]}),onChange:t})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_NOTE_TREE_LIST_DATA, {
    id: '3',
    label: 'Организация 3',
    note: <Description>
          <Description.Name>ИНН</Description.Name>
          <Description.Value>1234567890</Description.Value>
        </Description>
  }];
  const CustomItem = styled.div\`
    padding-left: \${({
    theme
  }) => theme.spacing(1)};
  \`;
  const renderItem: TreeLikeListProps['renderItem'] = ({
    label,
    note,
    id
  }) => <CustomItem>
      <Typography>
        <Typography color="textSecondary" component="span">
          #{id}
        </Typography>
        &nbsp;{label}
      </Typography>
      {note && <Typography variant="pointer" color="success">
          {note}
        </Typography>}
    </CustomItem>;
  return <Wrapper>
      <TreeLikeList data={fakeData} value={value} renderItem={renderItem} onChange={setValue} />
    </Wrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J;function Y(){return(Y=e((()=>{l(),S(),E(),A(),P(),R(),H(),K(),q={title:`Tree/TreeLikeList`,component:u,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=2624-9997&t=AJT4flCwvnicOquw-0)
TreeLikeList - интерактивный компонент, который поддерживает вложенность объектов,
позволяет выбрать множество (multiselect) объектов из списка,
свернуть (скрыть) и развернуть (показать) вложенные элементы.
Работает как обычный список в контексте выбора элементов, это означает что выбор родителя не влияет на дочерние элементы, а выбор дочерних на родителя.`}}}},J=[`BasicUsage`,`NoteItem`,`RenderItem`,`IsConfirmChildrenSelection`,`InitialExpanded`,`ExpandedLevel`,`DisabledItems`]})))()}Y();export{x as BasicUsage,T as DisabledItems,k as ExpandedLevel,N as InitialExpanded,L as IsConfirmChildrenSelection,V as NoteItem,G as RenderItem,J as __namedExportsOrder,q as default};