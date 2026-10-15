import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ji as i,ln as a,lt as o,xa as s,yn as c}from"./preview-msKJ6Jz4.js";import{n as l,t as u}from"./Paper-BS57odxg.js";import{t as d}from"./Link-DuQVZ7aV.js";import{t as f}from"./Link-Cth0jy4V.js";import{t as p}from"./TextField--7u2vVHO.js";import{d as m,f as h,n as g,o as _,s as v,t as y}from"./DialogContent-D-QmGzma.js";import{n as b,t as x}from"./CheckboxField-CpZR4U3p.js";import{t as S}from"./TextField-DbmnPmsB.js";var C,w,T;function E(){return(E=e((()=>{l(),C=t(),n(),_(),y(),m(),r(),S(),b(),w=s(),T=()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(u,{style:{width:500},children:[(0,w.jsx)(h,{children:`Форма обратной связи`}),(0,w.jsxs)(g,{children:[(0,w.jsxs)(o,{container:!0,spacing:2,columns:`repeat(2, 1fr)`,children:[(0,w.jsx)(p,{placeholder:`Поле 1`}),(0,w.jsx)(p,{placeholder:`Поле 2`})]}),(0,w.jsx)(x,{label:`Дополнительный параметр`})]}),(0,w.jsxs)(v,{children:[(0,w.jsx)(a,{variant:`text`,children:`Отмена`}),(0,w.jsx)(a,{loading:e,onClick:()=>t(!0),children:`Продолжить`})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => setLoading(true);
  return <Paper style={{
    width: 500
  }}>
      <DialogTitle>Форма обратной связи</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} columns="repeat(2, 1fr)">
          <TextField placeholder="Поле 1" />
          <TextField placeholder="Поле 2" />
        </Grid>
        <CheckboxField label="Дополнительный параметр" />
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button loading={loading} onClick={handleClick}>
          Продолжить
        </Button>
      </DialogActions>
    </Paper>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{b(),D=s(),O=()=>(0,D.jsx)(x,{label:`Текст (default)`}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <CheckboxField label="Текст (default)" />`,...O.parameters?.docs?.source}}}})))()}var A,j;function M(){return(M=e((()=>{b(),A=s(),j=()=>(0,A.jsx)(x,{label:`Текст (error, tooltip)`,helperText:`helper text`,isError:!0,hideHelperText:!0}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <CheckboxField label="Текст (error, tooltip)" helperText="helper text" isError hideHelperText />`,...j.parameters?.docs?.source}}}})))()}var N,P;function F(){return(F=e((()=>{b(),N=s(),P=()=>(0,N.jsx)(x,{label:`Текст (helper text)`,helperText:`helper text`}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <CheckboxField label="Текст (helper text)" helperText="helper text" />`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{b(),I=s(),L=()=>(0,I.jsx)(x,{label:`Текст`}),L.args={label:`Текст`},L.parameters={docs:{disable:!0}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <CheckboxField label="Текст" />;
}`,...L.parameters?.docs?.source}}}})))()}var z,B;function V(){return(V=e((()=>{b(),z=s(),B=()=>(0,z.jsx)(x,{label:`Текст (success)`,helperText:`helper text`,isSuccess:!0}),B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => <CheckboxField label="Текст (success)" helperText="helper text" isSuccess />`,...B.parameters?.docs?.source}}}})))()}var H,U;function W(){return(W=e((()=>{b(),H=s(),U=()=>(0,H.jsx)(x,{label:`Текст (error)`,helperText:`helper text`,isError:!0}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <CheckboxField label="Текст (error)" helperText="helper text" isError />`,...U.parameters?.docs?.source}}}})))()}var G,K,q;function J(){return(J=e((()=>{f(),c(),b(),G=s(),K=i.div`
  width: 300px;
`,q=()=>(0,G.jsx)(K,{children:(0,G.jsx)(x,{label:(0,G.jsxs)(G.Fragment,{children:[`Я принимаю условия`,` `,(0,G.jsx)(d,{target:`_blank`,href:`/`,children:`Соглашения`})]})})}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <Wrapper>
    <CheckboxField label={<>
          Я принимаю условия{' '}
          <Link target="_blank" href="/">
            Соглашения
          </Link>
        </>} />
  </Wrapper>`,...q.parameters?.docs?.source}}}})))()}var Y,X;function Z(){return(Z=e((()=>{b(),E(),k(),M(),F(),R(),V(),W(),J(),Y={title:`Form-Controls/CheckboxField`,component:x},X=[`Interaction`,`BasicUsage`,`Default`,`HelperText`,`WithError`,`WithLink`,`ErrorTooltip`,`Success`]})))()}Z();export{T as BasicUsage,O as Default,j as ErrorTooltip,P as HelperText,L as Interaction,B as Success,U as WithError,q as WithLink,X as __namedExportsOrder,Y as default};