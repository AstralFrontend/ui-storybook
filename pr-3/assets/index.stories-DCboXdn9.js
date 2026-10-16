import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ji as t,xa as n,yn as r}from"./preview-Cav_CXYC.js";import{n as i,t as a}from"./AvatarGroup-BlNfUMa-.js";import{t as o}from"./Avatar-DpjRvxhj.js";import{t as s}from"./Avatar-CRrGwkai.js";import{n as c,t as l}from"./faker-DHc11VVS.js";var u;function d(){return(d=e((()=>{l(),u=e=>{let{length:t=16}=e||{},n=()=>`${c.person.firstName()[0]}${c.person.lastName()[0]}`;return Array.from({length:t}).map(()=>({id:c.string.uuid(),name:n()}))}})))()}var f,p;function m(){return(m=e((()=>{s(),i(),d(),f=n(),p=()=>{let e=u();return(0,f.jsx)(a,{children:e.map(({id:e,name:t})=>(0,f.jsx)(o,{children:t},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const fakeData = makeData();
  return <AvatarGroup>
      {fakeData.map(({
      id,
      name
    }) => <Avatar key={id}>{name}</Avatar>)}
    </AvatarGroup>;
}`,...p.parameters?.docs?.source}}}})))()}var h,g;function _(){return(_=e((()=>{s(),d(),h=n(),g={args:{children:u().map(({id:e,name:t})=>(0,h.jsx)(o,{children:t},e))},parameters:{docs:{disable:!0}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: makeData().map(({
      id,
      name
    }) => <Avatar key={id}>{name}</Avatar>)
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}var v,y;function b(){return(b=e((()=>{s(),i(),d(),v=n(),y=()=>{let e=u();return(0,v.jsx)(a,{max:7,children:e.map(({id:e,name:t})=>(0,v.jsx)(o,{children:t},e))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const fakeData = makeData();
  return <AvatarGroup max={7}>
      {fakeData.map(({
      id,
      name
    }) => <Avatar key={id}>{name}</Avatar>)}
    </AvatarGroup>;
}`,...y.parameters?.docs?.source}}}})))()}var x;function S(){return(S=e((()=>{r(),x=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`})))()}function C(){return(C=e((()=>{S()})))()}var w,T;function E(){return(E=e((()=>{s(),i(),d(),C(),w=n(),T=()=>{let e=u(),t=[{id:`lg`,name:`LG`},...e],n=[{id:`md`,name:`MD`},...e],r=[{id:`sm`,name:`SM`},...e];return(0,w.jsxs)(x,{children:[(0,w.jsx)(a,{max:7,size:`lg`,children:t.map(({id:e,name:t})=>(0,w.jsx)(o,{children:t},e))}),(0,w.jsx)(a,{max:7,size:`md`,children:n.map(({id:e,name:t})=>(0,w.jsx)(o,{children:t},e))}),(0,w.jsx)(a,{max:7,size:`sm`,children:r.map(({id:e,name:t})=>(0,w.jsx)(o,{children:t[0]},e))})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const fakeData = makeData();
  const fakeLgData = [{
    id: 'lg',
    name: 'LG'
  }, ...fakeData];
  const fakeMdData = [{
    id: 'md',
    name: 'MD'
  }, ...fakeData];
  const fakeSmData = [{
    id: 'sm',
    name: 'SM'
  }, ...fakeData];
  return <Container>
      <AvatarGroup max={7} size="lg">
        {fakeLgData.map(({
        id,
        name
      }) => <Avatar key={id}>{name}</Avatar>)}
      </AvatarGroup>
      <AvatarGroup max={7} size="md">
        {fakeMdData.map(({
        id,
        name
      }) => <Avatar key={id}>{name}</Avatar>)}
      </AvatarGroup>
      <AvatarGroup max={7} size="sm">
        {fakeSmData.map(({
        id,
        name
      }) => <Avatar key={id}>{name[0]}</Avatar>)}
      </AvatarGroup>
    </Container>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{i(),m(),_(),b(),E(),D={title:`Other/AvatarGroup`,component:a,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=151-16460)`}}}},O=[`Interaction`,`BasicUsage`,`MaxCount`,`Sizes`]})))()}k();export{p as BasicUsage,g as Interaction,y as MaxCount,T as Sizes,O as __namedExportsOrder,D as default};