import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,dt as r,ft as i,ji as a,ln as o,lt as s,ya as c,yn as l,za as u}from"./preview-COOA12PR.js";import{n as d,t as f}from"./CollapsableAlert-BhJ4iSm8.js";import{t as p}from"./Description-ROYEaO90.js";import{t as m}from"./Description-BKELtlDk.js";import{n as h,t as g}from"./BookmarkFillMd-0ZSyuZsV.js";var _,v;function y(){return(y=e((()=>{t(),r(),d(),_=c(),v=()=>(0,_.jsx)(f,{title:`Счет успешно сформирован`,severity:`success`,actions:(0,_.jsx)(o,{variant:`link`,children:`Подробнее`}),children:(0,_.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <CollapsableAlert title="Счет успешно сформирован" severity="success" actions={<Button variant="link">Подробнее</Button>}>
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{t(),r(),d(),b=c(),x=()=>(0,b.jsx)(f,{title:`Счет успешно сформирован`,severity:`success`,actions:(0,b.jsx)(o,{variant:`link`,children:`Подробнее`}),children:(0,b.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <CollapsableAlert title="Счет успешно сформирован" severity="success" actions={<Button variant="link">Подробнее</Button>}>
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>`,...x.parameters?.docs?.source}}}})))()}var C,w,T;function E(){return(E=e((()=>{C=u(),t(),n(),r(),d(),w=c(),T=()=>{let[e,t]=(0,C.useState)(!0);return(0,w.jsxs)(s,{container:!0,spacing:2,children:[(0,w.jsx)(o,{onClick:()=>t(e=>!e),children:`Свернуть/развернуть CollapsableAlert`}),(0,w.jsxs)(f,{title:`Счет успешно сформирован`,isExpanded:e,onExpandedChange:(e,n)=>{t(e),console.log(`Click CollapsableAlert header event`,n)},children:[(0,w.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,w.jsx)(i,{children:`Дата оформления: 15.08.2023`})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggleAlert = () => setIsExpanded(prev => !prev);
  const handleChangeAlert = (newIsExpanded: boolean, event: SyntheticEvent<HTMLElement>) => {
    setIsExpanded(newIsExpanded);
    console.log('Click CollapsableAlert header event', event);
  };
  return <Grid container spacing={2}>
      <Button onClick={handleToggleAlert}>
        Свернуть/развернуть CollapsableAlert
      </Button>
      <CollapsableAlert title="Счет успешно сформирован" isExpanded={isExpanded} onExpandedChange={handleChangeAlert}>
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </CollapsableAlert>
    </Grid>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{g(),r(),d(),D=c(),O=()=>(0,D.jsx)(f,{title:`Счет успешно сформирован`,severity:`success`,icon:(0,D.jsx)(h,{color:`success`}),children:(0,D.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <CollapsableAlert title="Счет успешно сформирован" severity="success" icon={<BookmarkFillMd color="success" />}>
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=u(),t(),n(),r(),d(),j=c(),M=()=>{let[e,t]=(0,A.useState)(!0);return(0,j.jsxs)(s,{container:!0,spacing:2,children:[(0,j.jsx)(o,{onClick:()=>t(e=>!e),children:`Показать/спрятать CollapsableAlert`}),(0,j.jsx)(f,{title:`Счет успешно сформирован`,display:e,children:(0,j.jsx)(i,{children:`Номер вашего счета: 32-0021`})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [isDisplay, setIsDisplay] = useState(true);
  const toggleIsDisplay = () => setIsDisplay(prev => !prev);
  return <Grid container spacing={2}>
      <Button onClick={toggleIsDisplay}>
        Показать/спрятать CollapsableAlert
      </Button>
      <CollapsableAlert title="Счет успешно сформирован" display={isDisplay}>
        <Typography>Номер вашего счета: 32-0021</Typography>
      </CollapsableAlert>
    </Grid>;
}`,...M.parameters?.docs?.source},description:{story:"Prop `display` позволяет задать видимость элемента",...M.parameters?.docs?.description}}};try{M.displayName=`Display`,M.__docgenInfo={description:"Prop `display` позволяет задать видимость элемента",displayName:`Display`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/CollapsableAlert/stories/Display.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F;function I(){return(I=e((()=>{r(),P=c(),F={args:{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(i,{children:`Сумма заказа: 1 000 руб`}),(0,P.jsx)(i,{children:`Дата оформления: 15.08.2023`})]}),title:`Информация о заказе`},parameters:{docs:{disable:!0}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Typography>Сумма заказа: 1 000 руб</Typography>
        <Typography>Дата оформления: 15.08.2023</Typography>
      </>,
    title: 'Информация о заказе'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...F.parameters?.docs?.source}}}})))()}var L,R;function z(){return(z=e((()=>{n(),r(),d(),L=c(),R=()=>(0,L.jsxs)(s,{container:!0,spacing:2,children:[(0,L.jsx)(f,{title:`Счет успешно сформирован`,severity:`info`,children:(0,L.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),(0,L.jsx)(f,{title:`Счет успешно сформирован`,severity:`success`,children:(0,L.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),(0,L.jsx)(f,{title:`Счет успешно сформирован`,severity:`warning`,children:(0,L.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),(0,L.jsx)(f,{title:`Счет успешно сформирован`,severity:`error`,children:(0,L.jsx)(i,{children:`Номер вашего счета: 32-0021`})})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <Grid container spacing={2}>
    <CollapsableAlert title="Счет успешно сформирован" severity="info">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="success">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="warning">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
    <CollapsableAlert title="Счет успешно сформирован" severity="error">
      <Typography>Номер вашего счета: 32-0021</Typography>
    </CollapsableAlert>
  </Grid>`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{r(),d(),B=c(),V=()=>(0,B.jsx)(f,{title:`Кастомный title`,summaryVariant:`subtitle2`,children:(0,B.jsx)(i,{children:`Номер вашего счета: 32-0021`})}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <CollapsableAlert title="Кастомный title" summaryVariant="subtitle2">
    <Typography>Номер вашего счета: 32-0021</Typography>
  </CollapsableAlert>`,...V.parameters?.docs?.source}}}})))()}var U,W,G;function K(){return(K=e((()=>{m(),l(),r(),d(),U=c(),W=a.div`
  width: min(400px, 100%);
`,G=()=>(0,U.jsx)(W,{children:(0,U.jsx)(f,{title:`Счет успешно сформирован`,severity:`success`,subtitle:(0,U.jsxs)(p,{direction:`row`,children:[(0,U.jsx)(p.Name,{children:`Номер счета`}),(0,U.jsx)(p.Value,{children:`32-0021`})]}),children:(0,U.jsx)(i,{children:`Счёт доступен для скачивания в разделе «Документы» и будет отправлен на вашу электронную почту.`})})}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <CollapsableAlert title="Счет успешно сформирован" severity="success" subtitle={<Description direction="row">
          <Description.Name>Номер счета</Description.Name>
          <Description.Value>32-0021</Description.Value>
        </Description>}>
      <Typography>
        Счёт доступен для скачивания в разделе «Документы» и будет отправлен на
        вашу электронную почту.
      </Typography>
    </CollapsableAlert>
  </StoryWrapper>`,...G.parameters?.docs?.source}}}})))()}var q,J;function Y(){return(Y=e((()=>{d(),y(),S(),E(),k(),N(),I(),z(),H(),K(),q={title:`Alerts/CollapsableAlert`,component:f,parameters:{docs:{description:{component:`CollapsableAlert - Короткое сообщение с возможностью сворачивать контент

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=599-40844&t=50MWRj0WO41WNWLD-0)`}}}},J=[`Interaction`,`BasicUsage`,`Severity`,`CustomIcon`,`Title`,`Actions`,`Controlled`,`WithSubtitle`,`Display`]})))()}Y();export{v as Actions,x as BasicUsage,T as Controlled,O as CustomIcon,M as Display,F as Interaction,R as Severity,V as Title,G as WithSubtitle,J as __namedExportsOrder,q as default};