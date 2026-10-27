import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-BrWggRPd.js";import{n as r,t as i}from"./TreeLikeAsyncAutocomplete-Cd9ziW4e.js";import{i as a,n as o,t as s}from"./common-DxAxe8bz.js";var c,l,u;function d(){return(d=e((()=>{c=n(),r(),s(),l=t(),u=()=>{let[e,t]=(0,c.useState)();return(0,l.jsx)(o,{children:(0,l.jsx)(i,{label:`Подразделения`,fetchOptions:a,value:e,fullWidth:!0,dialogProps:{title:`Выбор подразделения`},onChange:t})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAsyncAutocompleteValue>();
  return <Wrapper>
      <TreeLikeAsyncAutocomplete label="Подразделения" fetchOptions={fetchOrganizations} value={value} fullWidth dialogProps={{
      title: 'Выбор подразделения'
    }} onChange={setValue} />
    </Wrapper>;
}`,...u.parameters?.docs?.source},description:{story:`Компонент для асинхронного выбора элементов из древовидной структуры.

**Важно:** При использовании TreeLikeAsyncAutocomplete необходимо строить breadcrumbs
для каждого элемента дерева кроме корневых. Breadcrumbs должны содержать путь от корня до родителя
текущего элемента (сам элемент не включается).

**Формат данных с breadcrumbs:**

\`\`\`typescript
// Для корневого элемента breadcrumbs не нужны:
{
  id: '5',
  label: 'ЗАО "ТехноИнновации"'
  // breadcrumbs отсутствует или undefined
}

// Для вложенного элемента указывается путь от корня:
{
  id: '511',
  label: 'Отдел бухгалтерии',
  breadcrumbs: [
    { id: '5', label: 'ЗАО "ТехноИнновации"' },
    { id: '51', label: 'Департамент финансов' }
  ]
}
\`\`\`

Breadcrumbs используются для корректного отображения выбранных элементов в виде дерева.`,...u.parameters?.docs?.description}}};try{u.displayName=`BasicUsage`,u.__docgenInfo={description:`Компонент для асинхронного выбора элементов из древовидной структуры.

**Важно:** При использовании TreeLikeAsyncAutocomplete необходимо строить breadcrumbs
для каждого элемента дерева кроме корневых. Breadcrumbs должны содержать путь от корня до родителя
текущего элемента (сам элемент не включается).

**Формат данных с breadcrumbs:**

\`\`\`typescript
// Для корневого элемента breadcrumbs не нужны:
{
  id: '5',
  label: 'ЗАО "ТехноИнновации"'
  // breadcrumbs отсутствует или undefined
}

// Для вложенного элемента указывается путь от корня:
{
  id: '511',
  label: 'Отдел бухгалтерии',
  breadcrumbs: [
    { id: '5', label: 'ЗАО "ТехноИнновации"' },
    { id: '51', label: 'Департамент финансов' }
  ]
}
\`\`\`

Breadcrumbs используются для корректного отображения выбранных элементов в виде дерева.`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeAsyncAutocomplete/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var f,p,m;function h(){return(h=e((()=>{f=n(),r(),s(),p=t(),m=()=>{let[e,t]=(0,f.useState)();return(0,p.jsx)(i,{label:`Подразделения`,fetchOptions:a,value:e,isLoading:!0,dialogProps:{title:`Выбор подразделения`},onChange:t})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<TreeLikeAsyncAutocompleteValue>();
  return <TreeLikeAsyncAutocomplete label="Подразделения" fetchOptions={fetchOrganizations} value={value} isLoading dialogProps={{
    title: 'Выбор подразделения'
  }} onChange={setValue} />;
}`,...m.parameters?.docs?.source}}}})))()}var g,_;function v(){return(v=e((()=>{r(),d(),h(),g={title:`Tree/TreeLikeAsyncAutocomplete`,component:i,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System--%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E-?node-id=8620-116375&p=f&t=PGvGg0HydVCOEoYO-0)

Более подробные примеры и варианты использования можно найти в документации
базового компонента
[TreeLikeAutocomplete](/docs/tree-treeLikeAutocomplete--docs) и [TreeAsyncAutocomplete](/docs/tree-treeAsyncAutocomplete--docs).`}}}},_=[`BasicUsage`,`WithLoading`]})))()}v();export{u as BasicUsage,m as WithLoading,_ as __namedExportsOrder,g as default};