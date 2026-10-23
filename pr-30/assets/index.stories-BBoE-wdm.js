import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,ya as i,yn as a,za as o}from"./preview-CiiswFkd.js";import{t as s}from"./Description-wEUafhHB.js";import{t as c}from"./Description-Dap-Hk5r.js";import{n as l,t as u}from"./MultipleTreeList-O2r38BA8.js";import{a as d,i as f,n as p,t as m}from"./common-zOd1jWk4.js";var h,g,_;function v(){return(v=e((()=>{h=o(),m(),l(),g=i(),_=()=>{let[e,t]=(0,h.useState)(),n=[...d,{id:`3`,label:`Item 3`}];return(0,g.jsx)(p,{children:(0,g.jsx)(u,{data:n,value:e,onChange:t})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_TREE_LIST_DATA, {
    id: '3',
    label: 'Item 3'
  }];
  return <Wrapper>
      <MultipleTreeList data={fakeData} value={value} onChange={setValue} />
    </Wrapper>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=o(),m(),l(),b=i(),x=()=>{let[e,t]=(0,y.useState)(),n=[...d,{id:`3`,label:`Item 3`}];return(0,b.jsx)(p,{children:(0,b.jsx)(u,{data:n,value:e,disabledItems:[{id:`21`,disabledReason:`Элемент заблокирован`},`3`],onChange:t})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_TREE_LIST_DATA, {
    id: '3',
    label: 'Item 3'
  }];
  return <Wrapper>
      <MultipleTreeList data={fakeData} value={value} disabledItems={[{
      id: '21',
      disabledReason: 'Элемент заблокирован'
    }, '3']} onChange={setValue} />
    </Wrapper>;
}`,...x.parameters?.docs?.source},description:{story:"`disabledItems` позволяет заблокировать указанные элементы для взаимодействия.\nЕсли элемент заблокирован и содержит дочерние элементы, то они наследуют это свойство.",...x.parameters?.docs?.description}}};try{x.displayName=`DisabledItems`,x.__docgenInfo={description:"`disabledItems` позволяет заблокировать указанные элементы для взаимодействия.\nЕсли элемент заблокирован и содержит дочерние элементы, то они наследуют это свойство.",displayName:`DisabledItems`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/stories/DisabledItems.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T;function E(){return(E=e((()=>{C=o(),m(),l(),w=i(),T=()=>{let[e,t]=(0,C.useState)(),n=[...d,{id:`3`,label:`Item 3`}];return(0,w.jsx)(p,{children:(0,w.jsx)(u,{data:n,value:e,isInitialExpanded:!0,expandedLevel:1,onChange:t})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_TREE_LIST_DATA, {
    id: '3',
    label: 'Item 3'
  }];
  return <Wrapper>
      <MultipleTreeList data={fakeData} value={value} isInitialExpanded expandedLevel={1} onChange={setValue} />
    </Wrapper>;
}`,...T.parameters?.docs?.source},description:{story:"expandedLevel позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`",...T.parameters?.docs?.description}}};try{T.displayName=`ExpandedLevel`,T.__docgenInfo={description:"expandedLevel позволяет ограничить глубину раскрытия дерева при `isInitialExpanded=true`",displayName:`ExpandedLevel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/stories/ExpandedLevel.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var D,O,k;function A(){return(A=e((()=>{D=o(),m(),l(),O=i(),k=()=>{let[e,t]=(0,D.useState)(),n=[...d,{id:`3`,label:`Item 3`}];return(0,O.jsx)(p,{children:(0,O.jsx)(u,{data:n,value:e,isInitialExpanded:!0,onChange:t})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[] | undefined>();
  const fakeData = [...FAKE_TREE_LIST_DATA, {
    id: '3',
    label: 'Item 3'
  }];
  return <Wrapper>
      <MultipleTreeList data={fakeData} value={value} isInitialExpanded onChange={setValue} />
    </Wrapper>;
}`,...k.parameters?.docs?.source},description:{story:"При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию",...k.parameters?.docs?.description}}};try{k.displayName=`InitialExpanded`,k.__docgenInfo={description:"При наличии флага `isInitialExpanded=true` дерево будет раскрыто по умолчанию",displayName:`InitialExpanded`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/stories/InitialExpanded.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{j=o(),c(),m(),l(),M=i(),N=()=>{let[e,t]=(0,j.useState)(),n=[...f,{id:`3`,label:`Организация 3`,note:(0,M.jsxs)(s,{direction:`row`,children:[(0,M.jsx)(s.Name,{children:`ИНН`}),(0,M.jsx)(s.Value,{children:`1234567890`})]})}];return(0,M.jsx)(p,{children:(0,M.jsx)(u,{data:n,value:e,onChange:t})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
      <MultipleTreeList data={fakeData} value={value} onChange={setValue} />
    </Wrapper>;
}`,...N.parameters?.docs?.source},description:{story:"С помощью `note` можно задавать подзаголовок элементам дерева",...N.parameters?.docs?.description}}};try{N.displayName=`NoteItem`,N.__docgenInfo={description:"С помощью `note` можно задавать подзаголовок элементам дерева",displayName:`NoteItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/stories/NoteItem.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{F=o(),c(),a(),t(),m(),l(),I=i(),L=()=>{let[e,t]=(0,F.useState)(),i=[...f,{id:`3`,label:`Организация 3`,note:(0,I.jsxs)(s,{children:[(0,I.jsx)(s.Name,{children:`ИНН`}),(0,I.jsx)(s.Value,{children:`1234567890`})]})}],a=r.div`
    padding-left: ${({theme:e})=>e.spacing(1)};
  `;return(0,I.jsx)(p,{children:(0,I.jsx)(u,{data:i,value:e,renderItem:({label:e,note:t,id:r})=>(0,I.jsxs)(a,{children:[(0,I.jsxs)(n,{component:`div`,children:[(0,I.jsxs)(n,{color:`textSecondary`,component:`span`,children:[`#`,r]}),`\xA0`,e]}),t&&(0,I.jsx)(n,{variant:`pointer`,color:`success`,children:t})]}),onChange:t})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
  const renderItem: MultipleTreeListProps['renderItem'] = ({
    label,
    note,
    id
  }) => <CustomItem>
      <Typography component="div">
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
      <MultipleTreeList data={fakeData} value={value} renderItem={renderItem} onChange={setValue} />
    </Wrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var z,B;function V(){return(V=e((()=>{l(),v(),S(),E(),A(),P(),R(),z={title:`Tree/MultipleTreeList`,component:u,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=2624-10000&t=AJT4flCwvnicOquw-0)
MultipleTreeList - интерактивный компонент, который поддерживает вложенность объектов,
позволяет выбрать или множество (multiselect) объектов из списка,
свернуть (скрыть) и развернуть (показать) вложенные элементы`}}}},B=[`BasicUsage`,`NoteItem`,`RenderItem`,`InitialExpanded`,`ExpandedLevel`,`DisabledItems`]})))()}V();export{_ as BasicUsage,x as DisabledItems,T as ExpandedLevel,k as InitialExpanded,N as NoteItem,L as RenderItem,B as __namedExportsOrder,z as default};