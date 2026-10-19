import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,ji as r,ln as i,lt as a,un as o,xa as s,yn as c}from"./preview-dprL7b9n.js";import{n as l,t as u}from"./ChevronDOutlineMd-CsbO1Ice.js";import{t as ee}from"./Badge-ChD4-QTZ.js";import{d as te,f as ne,n as re,o as ie,s as ae,t as oe}from"./DialogContent-BlLPvoEf.js";import{t as se}from"./Badge-DL6OODTd.js";import{t as ce}from"./Paper-eVn5ZdY_.js";import{t as le}from"./Paper-neggwVKl.js";import{n as d,t as f}from"./DialogOutlineMd-w6F4Mt8m.js";import{n as ue,t as de}from"./LikeOutlineMd-Cge4ay3A.js";var p,m,h;function g(){return(g=e((()=>{o(),p=s(),m=({children:e,className:t,href:n})=>(0,p.jsx)(`a`,{href:n,className:t,children:e}),h=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{href:`#`,children:`Обычная ссылка`}),(0,p.jsx)(i,{href:`/`,component:m,children:`Ссылка роутера`})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <>
    <Button href="#">Обычная ссылка</Button>
    <Button href="/" component={Link}>
      Ссылка роутера
    </Button>
  </>`,...h.parameters?.docs?.source},description:{story:`Когда необходима ссылка, которая выглядит как кнопка`,...h.parameters?.docs?.description}}};try{h.displayName=`AsLink`,h.__docgenInfo={description:`Когда необходима ссылка, которая выглядит как кнопка`,displayName:`AsLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Button/stories/AsLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var _,v,y,b;function fe(){return(fe=e((()=>{_=t(),ie(),oe(),te(),le(),c(),o(),v=s(),y=r(ce)`
  width: 500px;
`,b=()=>{let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},1500);return()=>clearTimeout(e)},[e]),(0,v.jsxs)(y,{children:[(0,v.jsx)(ne,{children:`Изменения не сохранятся`}),(0,v.jsx)(re,{children:`На странице есть несохраненные изменения, которые будут утеряны, если их не сохранить.`}),(0,v.jsxs)(ae,{children:[(0,v.jsx)(i,{variant:`text`,children:`Отмена`}),(0,v.jsx)(i,{loading:e,onClick:()=>t(!0),children:`Продолжить`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [loading]);
  const handleClick = () => setLoading(true);
  return <StyledPaper>
      <DialogTitle>Изменения не сохранятся</DialogTitle>
      <DialogContent>
        На странице есть несохраненные изменения, которые будут утеряны, если их
        не сохранить.
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button loading={loading} onClick={handleClick}>
          Продолжить
        </Button>
      </DialogActions>
    </StyledPaper>;
}`,...b.parameters?.docs?.source}}}})))()}var x;function S(){return(S=e((()=>{n(),c(),x=r(a)`
  display: grid;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
  justify-content: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
    flex-direction: row;

    width: 150px;
  }
`})))()}function C(){return(C=e((()=>{S()})))()}var w,T;function pe(){return(pe=e((()=>{u(),f(),n(),o(),C(),w=s(),T=()=>(0,w.jsxs)(a,{container:!0,spacing:3,children:[(0,w.jsxs)(x,{columns:6,children:[(0,w.jsx)(i,{startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{color:`error`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{color:`success`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{color:`warning`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{color:`grey`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{color:`error`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),disabled:!0,children:`Label`})]}),(0,w.jsxs)(x,{columns:6,children:[(0,w.jsx)(i,{loading:!0,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{loading:!0,color:`error`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{loading:!0,color:`success`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{loading:!0,color:`warning`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{loading:!0,color:`grey`,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`}),(0,w.jsx)(i,{loading:!0,disabled:!0,startIcon:(0,w.jsx)(d,{}),endIcon:(0,w.jsx)(l,{}),children:`Label`})]})]}),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
    <ButtonsContainer columns={6}>
      <Button startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />} disabled>
        Label
      </Button>
    </ButtonsContainer>
    <ButtonsContainer columns={6}>
      <Button loading startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button loading color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button loading color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button loading color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button loading color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button loading disabled startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
    </ButtonsContainer>
  </Grid>`,...T.parameters?.docs?.source}}}})))()}var E,D;function O(){return(O=e((()=>{o(),C(),E=s(),D=()=>(0,E.jsxs)(x,{columns:5,children:[(0,E.jsx)(i,{disabled:!0,children:`Contained`}),(0,E.jsx)(i,{disabled:!0,variant:`light`,children:`Light`}),(0,E.jsx)(i,{disabled:!0,variant:`outlined`,children:`Outlined`}),(0,E.jsx)(i,{disabled:!0,variant:`link`,children:`Link`}),(0,E.jsx)(i,{disabled:!0,variant:`text`,children:`Text`})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
    <Button disabled>Contained</Button>
    <Button disabled variant="light">
      Light
    </Button>
    <Button disabled variant="outlined">
      Outlined
    </Button>
    <Button disabled variant="link">
      Link
    </Button>
    <Button disabled variant="text">
      Text
    </Button>
  </ButtonsContainer>`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{u(),f(),de(),se(),o(),C(),k=s(),A=()=>(0,k.jsxs)(x,{columns:4,children:[(0,k.jsx)(i,{startIcon:(0,k.jsx)(ue,{}),children:`Start Icon`}),(0,k.jsx)(i,{endIcon:(0,k.jsx)(d,{}),children:`End Icon`}),(0,k.jsx)(i,{startIcon:(0,k.jsx)(d,{}),endIcon:(0,k.jsx)(l,{}),children:`Start & End`}),(0,k.jsx)(i,{variant:`light`,endIcon:(0,k.jsx)(ee,{badgeContent:12,color:`error`,children:(0,k.jsx)(`span`,{style:{width:10}}),style:{marginLeft:2,marginRight:15}}),children:`Badge`})]}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={4}>
    <Button startIcon={<LikeOutlineMd />}>Start Icon</Button>
    <Button endIcon={<DialogOutlineMd />}>End Icon</Button>
    <Button startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
      Start & End
    </Button>
    <Button variant="light" endIcon={<Badge badgeContent={12} color="error"
  // biome-ignore lint/correctness/noRestrictedElements: Необходимо для корректного отображения
  children={<span style={{
    width: 10
  }} />} style={{
    marginLeft: 2,
    marginRight: 15
  }} />}>
      Badge
    </Button>
  </ButtonsContainer>`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{o(),M=s(),N={render:e=>(0,M.jsx)(i,{...e,children:`Click me`}),args:{},parameters:{docs:{disable:!0}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Button {...args}>Click me</Button>;
  },
  args: {},
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{u(),f(),n(),o(),C(),F=s(),I=()=>(0,F.jsxs)(a,{container:!0,spacing:3,children:[(0,F.jsxs)(x,{columns:6,children:[(0,F.jsx)(i,{variant:`light`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,color:`error`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,color:`success`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,color:`warning`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,color:`grey`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,color:`error`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),disabled:!0,children:`Label`})]}),(0,F.jsxs)(x,{columns:6,children:[(0,F.jsx)(i,{variant:`light`,loading:!0,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,loading:!0,color:`error`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,loading:!0,color:`success`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,loading:!0,color:`warning`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,loading:!0,color:`grey`,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`}),(0,F.jsx)(i,{variant:`light`,loading:!0,disabled:!0,startIcon:(0,F.jsx)(d,{}),endIcon:(0,F.jsx)(l,{}),children:`Label`})]})]}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
    <ButtonsContainer columns={6}>
      <Button variant="light" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />} disabled>
        Label
      </Button>
    </ButtonsContainer>
    <ButtonsContainer columns={6}>
      <Button variant="light" loading startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" loading color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" loading color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" loading color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" loading color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="light" loading disabled startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
    </ButtonsContainer>
  </Grid>`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{o(),C(),R=s(),z=()=>(0,R.jsxs)(x,{columns:5,children:[(0,R.jsx)(i,{loading:!0,children:`Contained`}),(0,R.jsx)(i,{loading:!0,variant:`light`,children:`Light`}),(0,R.jsx)(i,{loading:!0,variant:`outlined`,children:`Outlined`}),(0,R.jsx)(i,{loading:!0,variant:`link`,children:`Link`}),(0,R.jsx)(i,{loading:!0,variant:`text`,color:`primary`,children:`Text`})]}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
    <Button loading>Contained</Button>
    <Button loading variant="light">
      Light
    </Button>
    <Button loading variant="outlined">
      Outlined
    </Button>
    <Button loading variant="link">
      Link
    </Button>
    <Button loading variant="text" color="primary">
      Text
    </Button>
  </ButtonsContainer>`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{u(),f(),n(),o(),C(),V=s(),H=()=>(0,V.jsxs)(a,{container:!0,spacing:3,children:[(0,V.jsxs)(x,{columns:6,children:[(0,V.jsx)(i,{variant:`outlined`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,color:`error`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,color:`success`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,color:`warning`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,color:`grey`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,color:`error`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),disabled:!0,children:`Label`})]}),(0,V.jsxs)(x,{columns:6,children:[(0,V.jsx)(i,{variant:`outlined`,loading:!0,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,loading:!0,color:`error`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,loading:!0,color:`success`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,loading:!0,color:`warning`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,loading:!0,color:`grey`,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`}),(0,V.jsx)(i,{variant:`outlined`,loading:!0,disabled:!0,startIcon:(0,V.jsx)(d,{}),endIcon:(0,V.jsx)(l,{}),children:`Label`})]})]}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
    <ButtonsContainer columns={6}>
      <Button variant="outlined" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />} disabled>
        Label
      </Button>
    </ButtonsContainer>
    <ButtonsContainer columns={6}>
      <Button variant="outlined" loading startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" loading color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" loading color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" loading color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" loading color="grey" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="outlined" loading disabled startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
    </ButtonsContainer>
  </Grid>`,...H.parameters?.docs?.source}}}})))()}var W,G;function K(){return(K=e((()=>{o(),C(),W=s(),G=()=>(0,W.jsxs)(x,{columns:5,children:[(0,W.jsx)(i,{selected:!0,children:`Contained`}),(0,W.jsx)(i,{selected:!0,variant:`light`,children:`Light`}),(0,W.jsx)(i,{selected:!0,variant:`outlined`,children:`Outlined`}),(0,W.jsx)(i,{selected:!0,variant:`link`,children:`Link`}),(0,W.jsx)(i,{selected:!0,variant:`text`,color:`primary`,children:`Text`})]}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
    <Button selected>Contained</Button>
    <Button selected variant="light">
      Light
    </Button>
    <Button selected variant="outlined">
      Outlined
    </Button>
    <Button selected variant="link">
      Link
    </Button>
    <Button selected variant="text" color="primary">
      Text
    </Button>
  </ButtonsContainer>`,...G.parameters?.docs?.source}}}})))()}var q,J;function Y(){return(Y=e((()=>{o(),C(),q=s(),J=()=>(0,q.jsxs)(x,{columns:2,children:[(0,q.jsx)(i,{size:`medium`,children:`Medium`}),(0,q.jsx)(i,{size:`large`,children:`Large`})]}),J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={2}>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </ButtonsContainer>`,...J.parameters?.docs?.source}}}})))()}var X,Z;function me(){return(me=e((()=>{u(),f(),n(),o(),C(),X=s(),Z=()=>(0,X.jsxs)(a,{container:!0,spacing:3,children:[(0,X.jsxs)(x,{columns:6,children:[(0,X.jsx)(i,{variant:`text`,color:`primary`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,color:`error`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,color:`success`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,color:`warning`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,color:`error`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),disabled:!0,children:`Label`})]}),(0,X.jsxs)(x,{columns:6,children:[(0,X.jsx)(i,{variant:`text`,color:`primary`,loading:!0,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,loading:!0,color:`error`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,loading:!0,color:`success`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,loading:!0,color:`warning`,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,loading:!0,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`}),(0,X.jsx)(i,{variant:`text`,loading:!0,disabled:!0,startIcon:(0,X.jsx)(d,{}),endIcon:(0,X.jsx)(l,{}),children:`Label`})]})]}),Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
    <ButtonsContainer columns={6}>
      <Button variant="text" color="primary" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />} disabled>
        Label
      </Button>
    </ButtonsContainer>
    <ButtonsContainer columns={6}>
      <Button variant="text" color="primary" loading startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" loading color="error" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" loading color="success" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" loading color="warning" startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" loading startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
      <Button variant="text" loading disabled startIcon={<DialogOutlineMd />} endIcon={<ChevronDOutlineMd />}>
        Label
      </Button>
    </ButtonsContainer>
  </Grid>`,...Z.parameters?.docs?.source}}}})))()}var Q,$;function he(){return(he=e((()=>{o(),C(),Q=s(),$=()=>(0,Q.jsxs)(x,{columns:5,children:[(0,Q.jsx)(i,{children:`Contained`}),(0,Q.jsx)(i,{variant:`light`,children:`Light`}),(0,Q.jsx)(i,{variant:`outlined`,children:`Outlined`}),(0,Q.jsx)(i,{variant:`link`,children:`Link`}),(0,Q.jsx)(i,{variant:`text`,color:`primary`,children:`Text`})]}),$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
    <Button>Contained</Button>
    <Button variant="light">Light</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="link">Link</Button>
    <Button variant="text" color="primary">
      Text
    </Button>
  </ButtonsContainer>`,...$.parameters?.docs?.source}}}})))()}var ge,_e;function ve(){return(ve=e((()=>{o(),g(),fe(),pe(),O(),j(),P(),L(),B(),U(),K(),Y(),me(),he(),ge={title:`Buttons/Button`,component:i,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20165&p=f&t=7QJwjWUtbDm3304g-0)`}}}},_e=[`Interaction`,`BasicUsage`,`Variants`,`Contained`,`Light`,`Outlined`,`Text`,`Disabled`,`Loading`,`Selected`,`Icons`,`Sizes`,`AsLink`]})))()}ve();export{h as AsLink,b as BasicUsage,T as Contained,D as Disabled,A as Icons,N as Interaction,I as Light,z as Loading,H as Outlined,G as Selected,J as Sizes,Z as Text,$ as Variants,_e as __namedExportsOrder,ge as default};