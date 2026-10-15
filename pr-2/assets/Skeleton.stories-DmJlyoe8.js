import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,ji as n,lt as r,xa as i,yn as a}from"./preview-D2nXkflB.js";import{n as o,t as s}from"./Skeleton-DpcJaR1n.js";import{t as c}from"./Avatar-Cl6HiXE9.js";import{t as l}from"./Avatar-DTCdmnqg.js";var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{l(),t(),a(),o(),u=i(),d={title:`Statuses/Skeleton`,component:s,parameters:{docs:{description:{component:`Компонент предназначен для отрисовки запасного содержимого в момент загрузки данных`}}}},f={args:{variant:`text`},parameters:{docs:{disable:!0},controls:{expanded:!0},options:{showPanel:!0}}},p=n.div`
  width: 240px;
`,m=()=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(p,{children:(0,u.jsx)(s,{})})}),h=()=>(0,u.jsx)(p,{children:(0,u.jsxs)(r,{spacing:4,children:[(0,u.jsx)(s,{variant:`text`}),(0,u.jsx)(s,{variant:`circular`,width:40,height:40}),(0,u.jsx)(s,{variant:`rounded`,width:210,height:60})]})}),g=()=>(0,u.jsx)(p,{children:(0,u.jsx)(s,{variant:`rounded`,width:210,height:60,component:`div`})}),_=()=>(0,u.jsx)(p,{children:(0,u.jsx)(s,{variant:`circular`,children:(0,u.jsx)(c,{})})}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text'
  },
  parameters: {
    docs: {
      disable: true
    },
    controls: {
      expanded: true
    },
    options: {
      showPanel: true
    }
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <>
    <Container>
      <Skeleton />
    </Container>
  </>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Container>
    <Grid spacing={4}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Grid>
  </Container>`,...h.parameters?.docs?.source},description:{story:`Скелетон имеет несколько вариантов отображения: text, rounded, circular`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Container>
    <Skeleton variant="rounded" width={210} height={60} component="div" />
  </Container>`,...g.parameters?.docs?.source},description:{story:`Пропс "component" позволяет изменить корневой элемент`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => <Container>
    <Skeleton variant="circular">
      <Avatar />
    </Skeleton>
  </Container>`,..._.parameters?.docs?.source},description:{story:`При наличии children скелетон ориентируется на его размеры`,..._.parameters?.docs?.description}}},v=[`Interaction`,`BasicUsage`,`Variants`,`Component`,`WithChildren`]})))()}y();export{m as BasicUsage,g as Component,f as Interaction,h as Variants,_ as WithChildren,v as __namedExportsOrder,d as default};