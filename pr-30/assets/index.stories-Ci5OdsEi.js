import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,dt as r,ft as i,ji as a,ln as o,lt as s,ya as c,yn as l,za as u}from"./preview-HnvdWNoM.js";import{n as d,t as f}from"./Accordion-C5ewEAfP.js";import{n as p,t as m}from"./InfoFillMd-B1yOk6GL.js";import{n as h,t as g}from"./SuccessFillMd-BUkq_wqC.js";import{t as _}from"./Description-C7NHrQT2.js";import{t as v}from"./Description-C502Q3PO.js";var y;function b(){return(b=e((()=>{n(),l(),y=a(s)`
  width: 300px;
  min-height: 90px;
  padding: ${({theme:e})=>e.spacing(2)};
`})))()}function x(){return(x=e((()=>{b()})))()}var S,C;function w(){return(w=e((()=>{m(),r(),d(),x(),S=c(),C=()=>(0,S.jsx)(y,{children:(0,S.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,S.jsx)(p,{color:`primary`}),children:[(0,S.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,S.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<InfoFillMd color="primary" />}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...C.parameters?.docs?.source}}}})))()}var T,E,D;function O(){return(O=e((()=>{T=u(),t(),n(),r(),d(),x(),E=c(),D=()=>{let[e,t]=(0,T.useState)(!0);return(0,E.jsxs)(s,{container:!0,children:[(0,E.jsx)(o,{onClick:()=>t(e=>!e),children:`Toggle`}),(0,E.jsx)(y,{container:!0,spacing:2,children:(0,E.jsxs)(f,{summary:`123`,isExpanded:e,onChange:(e,n)=>{t(e),console.log(`Click accordion header event`,n)},children:[(0,E.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,E.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggleAccordion = () => setIsExpanded(prev => !prev);
  const handleChangeAccordion = (newIsExpanded: boolean, event: SyntheticEvent<HTMLElement>) => {
    setIsExpanded(newIsExpanded);
    console.log('Click accordion header event', event);
  };
  return <Grid container>
      <Button onClick={handleToggleAccordion}>Toggle</Button>
      <BaseContainer container spacing={2}>
        <Accordion summary="123" isExpanded={isExpanded} onChange={handleChangeAccordion}>
          <Typography>Сумма заказа: 1 000 руб</Typography>
          <Typography>Дата оформления: 15.08.2023</Typography>
        </Accordion>
      </BaseContainer>
    </Grid>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{m(),r(),k=c(),A={args:{children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,k.jsx)(i,{children:`Дата оформления: 15.08.2023`})]}),summary:`Информация о заказе`,startAdornment:(0,k.jsx)(p,{color:`primary`})},parameters:{docs:{disable:!0}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </>,
    summary: 'Информация о заказе',
    startAdornment: <InfoFillMd color="primary" />
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{g(),r(),d(),x(),M=c(),N=()=>(0,M.jsx)(y,{children:(0,M.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,M.jsx)(h,{color:`success`}),children:[(0,M.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,M.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<SuccessFillMd color="success" />}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{v(),r(),d(),x(),F=c(),I=()=>(0,F.jsx)(y,{children:(0,F.jsxs)(f,{summary:(0,F.jsx)(i,{variant:`subtitle2`,children:`Любой summary`}),subtitle:(0,F.jsxs)(_,{direction:`row`,children:[(0,F.jsx)(_.Name,{children:`Номер заказа`}),(0,F.jsx)(_.Value,{children:`784`})]}),children:[(0,F.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,F.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary={<Typography variant="subtitle2">Любой summary</Typography>} subtitle={<Description direction="row">
          <Description.Name>Номер заказа</Description.Name>
          <Description.Value>784</Description.Value>
        </Description>}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{m(),v(),r(),d(),x(),R=c(),z=()=>(0,R.jsx)(y,{children:(0,R.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,R.jsx)(p,{color:`primary`}),subtitle:(0,R.jsxs)(_,{direction:`row`,children:[(0,R.jsx)(_.Name,{children:`Номер заказа`}),(0,R.jsx)(_.Value,{children:`784`})]}),children:[(0,R.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,R.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<InfoFillMd color="primary" />} subtitle={<Description direction="row">
          <Description.Name>Номер заказа</Description.Name>
          <Description.Value>784</Description.Value>
        </Description>}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{d(),w(),O(),j(),P(),L(),B(),V={title:`Collapsible/Accordion`,component:f,parameters:{docs:{description:{component:`Accordion - компонент, позволяющий скрывать контент под заголовком

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=370-11655&t=MWN2hgmOTfs4JGuw-0)`}}}},H=[`Interaction`,`BasicUsage`,`Summary`,`StartAdornment`,`Controlled`,`WithSubtitle`]})))()}U();export{C as BasicUsage,D as Controlled,A as Interaction,N as StartAdornment,I as Summary,z as WithSubtitle,H as __namedExportsOrder,V as default};