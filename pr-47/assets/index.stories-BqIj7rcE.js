import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,ji as n,ln as r,lt as i,un as a,ya as o,yn as s,za as ee}from"./preview-BnqSH9fx.js";import{n as c,t as l}from"./ChevronDOutlineMd-D_oQdi6z.js";import{t as te}from"./Badge-Df350lT8.js";import{d as ne,f as re,n as ie,o as ae,s as oe,t as se}from"./DialogContent-eKLfwgSB.js";import{t as ce}from"./Badge-ClG4duh9.js";import{t as le}from"./Paper-GpVG5Y0d.js";import{t as ue}from"./Paper-CAP8UwdR.js";import{n as u,t as d}from"./DialogOutlineMd-D2biZ_5b.js";import{n as de,t as fe}from"./LikeOutlineMd-Cjm8nH6V.js";var f,pe,p;function m(){return(m=e((()=>{a(),f=o(),pe=({children:e,className:t,href:n})=>(0,f.jsx)(`a`,{href:n,className:t,children:e}),p=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{href:`#`,children:`Обычная ссылка`}),(0,f.jsx)(r,{href:`/`,component:pe,children:`Ссылка роутера`})]});try{p.displayName=`AsLink`,p.__docgenInfo={description:`Когда необходима ссылка, которая выглядит как кнопка`,displayName:`AsLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Button/stories/AsLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <>
    <Button href="#">Обычная ссылка</Button>
    <Button href="/" component={Link}>
      Ссылка роутера
    </Button>
  </>`,...p.parameters?.docs?.source},description:{story:`Когда необходима ссылка, которая выглядит как кнопка`,...p.parameters?.docs?.description}}}})))()}var h,g,_,v;function me(){return(me=e((()=>{h=ee(),ae(),se(),ne(),ue(),s(),a(),g=o(),_=n(le)`
  width: 500px;
`,v=()=>{let[e,t]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},1500);return()=>clearTimeout(e)},[e]),(0,g.jsxs)(_,{children:[(0,g.jsx)(re,{children:`Изменения не сохранятся`}),(0,g.jsx)(ie,{children:`На странице есть несохраненные изменения, которые будут утеряны, если их не сохранить.`}),(0,g.jsxs)(oe,{children:[(0,g.jsx)(r,{variant:`text`,children:`Отмена`}),(0,g.jsx)(r,{loading:e,onClick:()=>t(!0),children:`Продолжить`})]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}}})))()}var y;function b(){return(b=e((()=>{t(),s(),y=n(i)`
  display: grid;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
  justify-content: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
    flex-direction: row;

    width: 150px;
  }
`})))()}function x(){return(x=e((()=>{b()})))()}var S,C;function w(){return(w=e((()=>{l(),d(),t(),a(),x(),S=o(),C=()=>(0,S.jsxs)(i,{container:!0,spacing:3,children:[(0,S.jsxs)(y,{columns:6,children:[(0,S.jsx)(r,{startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{color:`error`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{color:`success`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{color:`warning`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{color:`grey`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{color:`error`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),disabled:!0,children:`Label`})]}),(0,S.jsxs)(y,{columns:6,children:[(0,S.jsx)(r,{loading:!0,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{loading:!0,color:`error`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{loading:!0,color:`success`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{loading:!0,color:`warning`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{loading:!0,color:`grey`,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`}),(0,S.jsx)(r,{loading:!0,disabled:!0,startIcon:(0,S.jsx)(u,{}),endIcon:(0,S.jsx)(c,{}),children:`Label`})]})]}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
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
  </Grid>`,...C.parameters?.docs?.source}}}})))()}var T,E;function D(){return(D=e((()=>{a(),x(),T=o(),E=()=>(0,T.jsxs)(y,{columns:5,children:[(0,T.jsx)(r,{disabled:!0,children:`Contained`}),(0,T.jsx)(r,{disabled:!0,variant:`light`,children:`Light`}),(0,T.jsx)(r,{disabled:!0,variant:`outlined`,children:`Outlined`}),(0,T.jsx)(r,{disabled:!0,variant:`link`,children:`Link`}),(0,T.jsx)(r,{disabled:!0,variant:`text`,children:`Text`})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
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
  </ButtonsContainer>`,...E.parameters?.docs?.source}}}})))()}var O,k;function A(){return(A=e((()=>{l(),d(),fe(),ce(),a(),x(),O=o(),k=()=>(0,O.jsxs)(y,{columns:4,children:[(0,O.jsx)(r,{startIcon:(0,O.jsx)(de,{}),children:`Start Icon`}),(0,O.jsx)(r,{endIcon:(0,O.jsx)(u,{}),children:`End Icon`}),(0,O.jsx)(r,{startIcon:(0,O.jsx)(u,{}),endIcon:(0,O.jsx)(c,{}),children:`Start & End`}),(0,O.jsx)(r,{variant:`light`,endIcon:(0,O.jsx)(te,{badgeContent:12,color:`error`,children:(0,O.jsx)(`span`,{style:{width:10}}),style:{marginLeft:2,marginRight:15}}),children:`Badge`})]}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={4}>
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
  </ButtonsContainer>`,...k.parameters?.docs?.source}}}})))()}var j,M;function N(){return(N=e((()=>{a(),j=o(),M={render:e=>(0,j.jsx)(r,{...e,children:`Click me`}),args:{},parameters:{docs:{disable:!0}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Button {...args}>Click me</Button>;
  },
  args: {},
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{l(),d(),t(),a(),x(),P=o(),F=()=>(0,P.jsxs)(i,{container:!0,spacing:3,children:[(0,P.jsxs)(y,{columns:6,children:[(0,P.jsx)(r,{variant:`light`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,color:`error`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,color:`success`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,color:`warning`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,color:`grey`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,color:`error`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),disabled:!0,children:`Label`})]}),(0,P.jsxs)(y,{columns:6,children:[(0,P.jsx)(r,{variant:`light`,loading:!0,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,loading:!0,color:`error`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,loading:!0,color:`success`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,loading:!0,color:`warning`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,loading:!0,color:`grey`,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`}),(0,P.jsx)(r,{variant:`light`,loading:!0,disabled:!0,startIcon:(0,P.jsx)(u,{}),endIcon:(0,P.jsx)(c,{}),children:`Label`})]})]}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
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
  </Grid>`,...F.parameters?.docs?.source}}}})))()}var L,R;function z(){return(z=e((()=>{a(),x(),L=o(),R=()=>(0,L.jsxs)(y,{columns:5,children:[(0,L.jsx)(r,{loading:!0,children:`Contained`}),(0,L.jsx)(r,{loading:!0,variant:`light`,children:`Light`}),(0,L.jsx)(r,{loading:!0,variant:`outlined`,children:`Outlined`}),(0,L.jsx)(r,{loading:!0,variant:`link`,children:`Link`}),(0,L.jsx)(r,{loading:!0,variant:`text`,color:`primary`,children:`Text`})]}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
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
  </ButtonsContainer>`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{l(),d(),t(),a(),x(),B=o(),V=()=>(0,B.jsxs)(i,{container:!0,spacing:3,children:[(0,B.jsxs)(y,{columns:6,children:[(0,B.jsx)(r,{variant:`outlined`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,color:`error`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,color:`success`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,color:`warning`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,color:`grey`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,color:`error`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),disabled:!0,children:`Label`})]}),(0,B.jsxs)(y,{columns:6,children:[(0,B.jsx)(r,{variant:`outlined`,loading:!0,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,loading:!0,color:`error`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,loading:!0,color:`success`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,loading:!0,color:`warning`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,loading:!0,color:`grey`,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`}),(0,B.jsx)(r,{variant:`outlined`,loading:!0,disabled:!0,startIcon:(0,B.jsx)(u,{}),endIcon:(0,B.jsx)(c,{}),children:`Label`})]})]}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
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
  </Grid>`,...V.parameters?.docs?.source}}}})))()}var U,W;function G(){return(G=e((()=>{a(),x(),U=o(),W=()=>(0,U.jsxs)(y,{columns:5,children:[(0,U.jsx)(r,{selected:!0,children:`Contained`}),(0,U.jsx)(r,{selected:!0,variant:`light`,children:`Light`}),(0,U.jsx)(r,{selected:!0,variant:`outlined`,children:`Outlined`}),(0,U.jsx)(r,{selected:!0,variant:`link`,children:`Link`}),(0,U.jsx)(r,{selected:!0,variant:`text`,color:`primary`,children:`Text`})]}),W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
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
  </ButtonsContainer>`,...W.parameters?.docs?.source}}}})))()}var K,q;function J(){return(J=e((()=>{a(),x(),K=o(),q=()=>(0,K.jsxs)(y,{columns:2,children:[(0,K.jsx)(r,{size:`medium`,children:`Medium`}),(0,K.jsx)(r,{size:`large`,children:`Large`})]}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={2}>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </ButtonsContainer>`,...q.parameters?.docs?.source}}}})))()}var Y,X;function he(){return(he=e((()=>{l(),d(),t(),a(),x(),Y=o(),X=()=>(0,Y.jsxs)(i,{container:!0,spacing:3,children:[(0,Y.jsxs)(y,{columns:6,children:[(0,Y.jsx)(r,{variant:`text`,color:`primary`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,color:`error`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,color:`success`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,color:`warning`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,color:`error`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),disabled:!0,children:`Label`})]}),(0,Y.jsxs)(y,{columns:6,children:[(0,Y.jsx)(r,{variant:`text`,color:`primary`,loading:!0,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,loading:!0,color:`error`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,loading:!0,color:`success`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,loading:!0,color:`warning`,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,loading:!0,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`}),(0,Y.jsx)(r,{variant:`text`,loading:!0,disabled:!0,startIcon:(0,Y.jsx)(u,{}),endIcon:(0,Y.jsx)(c,{}),children:`Label`})]})]}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => <Grid container spacing={3}>
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
  </Grid>`,...X.parameters?.docs?.source}}}})))()}var Z,Q;function ge(){return(ge=e((()=>{a(),x(),Z=o(),Q=()=>(0,Z.jsxs)(y,{columns:5,children:[(0,Z.jsx)(r,{children:`Contained`}),(0,Z.jsx)(r,{variant:`light`,children:`Light`}),(0,Z.jsx)(r,{variant:`outlined`,children:`Outlined`}),(0,Z.jsx)(r,{variant:`link`,children:`Link`}),(0,Z.jsx)(r,{variant:`text`,color:`primary`,children:`Text`})]}),Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => <ButtonsContainer columns={5}>
    <Button>Contained</Button>
    <Button variant="light">Light</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="link">Link</Button>
    <Button variant="text" color="primary">
      Text
    </Button>
  </ButtonsContainer>`,...Q.parameters?.docs?.source}}}})))()}var _e,ve;function $(){return($=e((()=>{a(),m(),me(),w(),D(),A(),N(),I(),z(),H(),G(),J(),he(),ge(),_e={title:`Buttons/Button`,component:r,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=39-20165&p=f&t=7QJwjWUtbDm3304g-0)`}}}},ve=[`Interaction`,`BasicUsage`,`Variants`,`Contained`,`Light`,`Outlined`,`Text`,`Disabled`,`Loading`,`Selected`,`Icons`,`Sizes`,`AsLink`]})))()}$();export{p as AsLink,v as BasicUsage,C as Contained,E as Disabled,k as Icons,M as Interaction,F as Light,R as Loading,V as Outlined,W as Selected,q as Sizes,X as Text,Q as Variants,ve as __namedExportsOrder,_e as default};