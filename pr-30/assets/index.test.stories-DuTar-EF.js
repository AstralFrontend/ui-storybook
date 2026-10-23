import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-D_kXaHc2.js";import{t as r}from"./DescriptionList-DIoPSs2l.js";import{t as i}from"./DescriptionList-DMIPQ7FU.js";import{i as a,t as o}from"./PageContent-DgZLdXQT.js";import{t as s}from"./PageLayout-J3QmSxvf.js";import{t as c}from"./PageLayout-CwJ9JCCs.js";import{$t as l,Mt as u,U as d}from"./common-bHH_5FMo.js";import{_ as f,f as p,h as m,l as h,m as g,n as _,o as v,t as y,u as b,v as x}from"./common-BlVcp_RT.js";var S,C,w,T,E;function D(){return(D=e((()=>{S=n(),i(),o(),c(),d(),x(),p(),y(),C=t(),w=[g(_,{name:`К документам`,to:`/`,variant:`outlined`,color:`grey`,target:`_blank`}),{name:`Удалить`,variant:`outlined`,color:`error`}],T=h({length:20}).map((e,t)=>[1,2,7,10,11,18].includes(t)?{...e,content:e.content.filter(e=>e.name!==`Дата заявки`)}:e),E=()=>{let e=(0,S.useRef)(null);return(0,C.jsx)(s,{header:l,content:(0,C.jsx)(a,{scrollRef:e,children:(0,C.jsx)(f,{scrollRef:e,list:T,onRetry:()=>{},onLoadMore:()=>{},desktopCardWidth:{min:`400px`,max:`1fr`},defineCard:({organization:e,content:t})=>({header:(0,C.jsx)(v,{organization:e}),content:(0,C.jsx)(r,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`}),mainActions:()=>(0,C.jsx)(m,{actions:w})}),skeleton:{component:(0,C.jsx)(b,{}),count:6}})})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite scrollRef={scrollRef} list={slicedData} onRetry={() => {}} onLoadMore={() => {}} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} defineCard={({
      organization,
      content
    }) => {
      return {
        header: <CardHeader organization={organization} />,
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />,
        mainActions: () => <CardGridMainActions actions={FAKE_ACTIONS} />
      };
    }} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} />
        </PageContent>} />;
}`,...E.parameters?.docs?.source}}}})))()}var O,k;function A(){return(A=e((()=>{d(),x(),D(),O={title:`Lists/CardGridInfinite/Tests`,component:f,decorators:u,parameters:{layout:`fullscreen`}},k=[`DifferentHeight`]})))()}A();export{E as DifferentHeight,k as __namedExportsOrder,O as default};