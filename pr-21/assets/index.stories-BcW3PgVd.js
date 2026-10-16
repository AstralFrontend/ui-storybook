import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-CIVVhXpm.js";import{n as d,t as f}from"./Accordion-Cc4nuncC.js";import{n as p,t as m}from"./InfoFillMd-DBDeFp8n.js";import{n as h,t as g}from"./SuccessFillMd-Cd3rV4Di.js";import{t as _}from"./Description-DfCzIr39.js";import{t as v}from"./Description-gGOfCFif.js";var y;function b(){return(b=e((()=>{r(),u(),y=o(c)`
  width: 300px;
  min-height: 90px;
  padding: ${({theme:e})=>e.spacing(2)};
`})))()}function x(){return(x=e((()=>{b()})))()}var S,C;function w(){return(w=e((()=>{m(),i(),d(),x(),S=l(),C=()=>(0,S.jsx)(y,{children:(0,S.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,S.jsx)(p,{color:`primary`}),children:[(0,S.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,S.jsx)(a,{children:`Дата оформления: 15.08.2023`})]})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<InfoFillMd color="primary" />}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...C.parameters?.docs?.source}}}})))()}var T,E,D;function O(){return(O=e((()=>{T=t(),n(),r(),i(),d(),x(),E=l(),D=()=>{let[e,t]=(0,T.useState)(!0);return(0,E.jsxs)(c,{container:!0,children:[(0,E.jsx)(s,{onClick:()=>t(e=>!e),children:`Toggle`}),(0,E.jsx)(y,{container:!0,spacing:2,children:(0,E.jsxs)(f,{summary:`123`,isExpanded:e,onChange:(e,n)=>{t(e),console.log(`Click accordion header event`,n)},children:[(0,E.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,E.jsx)(a,{children:`Дата оформления: 15.08.2023`})]})})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{m(),i(),k=l(),A={args:{children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,k.jsx)(a,{children:`Дата оформления: 15.08.2023`})]}),summary:`Информация о заказе`,startAdornment:(0,k.jsx)(p,{color:`primary`})},parameters:{docs:{disable:!0}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{g(),i(),d(),x(),M=l(),N=()=>(0,M.jsx)(y,{children:(0,M.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,M.jsx)(h,{color:`success`}),children:[(0,M.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,M.jsx)(a,{children:`Дата оформления: 15.08.2023`})]})}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<SuccessFillMd color="success" />}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{v(),i(),d(),x(),F=l(),I=()=>(0,F.jsx)(y,{children:(0,F.jsxs)(f,{summary:(0,F.jsx)(a,{variant:`subtitle2`,children:`Любой summary`}),subtitle:(0,F.jsxs)(_,{direction:`row`,children:[(0,F.jsx)(_.Name,{children:`Номер заказа`}),(0,F.jsx)(_.Value,{children:`784`})]}),children:[(0,F.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,F.jsx)(a,{children:`Дата оформления: 15.08.2023`})]})}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary={<Typography variant="subtitle2">Любой summary</Typography>} subtitle={<Description direction="row">
          <Description.Name>Номер заказа</Description.Name>
          <Description.Value>784</Description.Value>
        </Description>}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{m(),v(),i(),d(),x(),R=l(),z=()=>(0,R.jsx)(y,{children:(0,R.jsxs)(f,{summary:`Информация о заказе`,startAdornment:(0,R.jsx)(p,{color:`primary`}),subtitle:(0,R.jsxs)(_,{direction:`row`,children:[(0,R.jsx)(_.Name,{children:`Номер заказа`}),(0,R.jsx)(_.Value,{children:`784`})]}),children:[(0,R.jsx)(a,{children:`Сумма заказа: 1 000 руб`}),(0,R.jsx)(a,{children:`Дата оформления: 15.08.2023`})]})}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <BaseContainer>
    <Accordion summary="Информация о заказе" startAdornment={<InfoFillMd color="primary" />} subtitle={<Description direction="row">
          <Description.Name>Номер заказа</Description.Name>
          <Description.Value>784</Description.Value>
        </Description>}>
      <Typography>Сумма заказа: 1 000 руб</Typography>
      <Typography>Дата оформления: 15.08.2023</Typography>
    </Accordion>
  </BaseContainer>`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{d(),w(),O(),j(),P(),L(),B(),V={title:`Collapsible/Accordion`,component:f,parameters:{docs:{description:{component:`Accordion - компонент, позволяющий скрывать контент под заголовком

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=370-11655&t=MWN2hgmOTfs4JGuw-0)`}}}},H=[`Interaction`,`BasicUsage`,`Summary`,`StartAdornment`,`Controlled`,`WithSubtitle`]})))()}U();export{C as BasicUsage,D as Controlled,A as Interaction,N as StartAdornment,I as Summary,z as WithSubtitle,H as __namedExportsOrder,V as default};