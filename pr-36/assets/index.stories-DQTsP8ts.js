import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ji as r,ln as i,lt as a,ya as o,yn as s,za as c}from"./preview-BI9JLEFP.js";import{n as l,t as u}from"./Paper-C_8h9OSL.js";import{n as d,t as f}from"./Checkbox-zYi5LrgZ.js";import{t as p}from"./TextField-DZTPl-L_.js";import{d as m,f as h,n as g,o as _,s as v,t as y}from"./DialogContent-CqdFoKi2.js";import{t as b}from"./TextField-BuW0tvvW.js";import{n as x,t as S}from"./FormControlLabel-BEBgYiaH.js";var C,w,T;function E(){return(E=e((()=>{l(),C=c(),t(),_(),y(),m(),S(),n(),b(),d(),w=o(),T=()=>{let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(u,{style:{width:500},children:[(0,w.jsx)(h,{children:`Форма обратной связи`}),(0,w.jsxs)(g,{children:[(0,w.jsxs)(a,{container:!0,spacing:2,columns:`repeat(2, 1fr)`,children:[(0,w.jsx)(p,{placeholder:`Поле 1`}),(0,w.jsx)(p,{placeholder:`Поле 2`})]}),(0,w.jsx)(x,{control:(0,w.jsx)(f,{}),label:`Дополнительный параметр `})]}),(0,w.jsxs)(v,{children:[(0,w.jsx)(i,{variant:`text`,children:`Отмена`}),(0,w.jsx)(i,{loading:e,onClick:()=>t(!0),children:`Продолжить`})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
        <FormControlLabel control={<Checkbox />} label="Дополнительный параметр " />
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button loading={loading} onClick={handleClick}>
          Продолжить
        </Button>
      </DialogActions>
    </Paper>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{d(),D=o(),O=()=>(0,D.jsx)(f,{checked:!0}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <Checkbox checked />`,...O.parameters?.docs?.source}}}})))()}var A,j;function M(){return(M=e((()=>{d(),A=o(),j=()=>(0,A.jsx)(f,{}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <Checkbox />`,...j.parameters?.docs?.source}}}})))()}var N,P;function F(){return(F=e((()=>{d(),N=o(),P=()=>(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(f,{disabled:!0}),(0,N.jsx)(f,{disabled:!0,checked:!0})]}),P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => <>
    <Checkbox disabled />
    <Checkbox disabled checked />
  </>`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{S(),d(),I=o(),L=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(x,{control:(0,I.jsx)(f,{}),label:`Текст`}),(0,I.jsx)(x,{control:(0,I.jsx)(f,{disabled:!0}),label:`Текст`}),(0,I.jsx)(x,{control:(0,I.jsx)(f,{disabled:!0,checked:!0}),label:`Текст`})]}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <>
    <FormControlLabel control={<Checkbox />} label="Текст" />
    <FormControlLabel control={<Checkbox disabled />} label="Текст" />
    <FormControlLabel control={<Checkbox disabled checked />} label="Текст" />
  </>`,...L.parameters?.docs?.source},description:{story:`Обычно чекбокс используется с текстом, к которому он относится.`,...L.parameters?.docs?.description}}};try{L.displayName=`CheckboxLabel`,L.__docgenInfo={description:`Обычно чекбокс используется с текстом, к которому он относится.`,displayName:`CheckboxLabel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Checkbox/stories/CheckboxLabel.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V,H;function U(){return(U=e((()=>{z=c(),S(),s(),d(),B=o(),V=r.div`
  display: flex;
  flex-direction: column;

  margin-left: ${({theme:e})=>e.spacing(3)};
`,H=()=>{let[e,t]=(0,z.useState)([!0,!1]);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(x,{label:`Заголовок`,control:(0,B.jsx)(f,{checked:e[0]&&e[1],indeterminate:e[0]!==e[1],onChange:e=>{t([e.target.checked,e.target.checked])}})}),(0,B.jsxs)(V,{children:[(0,B.jsx)(x,{label:`Вариант 1`,control:(0,B.jsx)(f,{checked:e[0],onChange:n=>{t([n.target.checked,e[1]])}})}),(0,B.jsx)(x,{label:`Вариант 2`,control:(0,B.jsx)(f,{checked:e[1],onChange:n=>{t([e[0],n.target.checked])}})})]})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState([true, false]);
  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  return <div>
      <FormControlLabel label="Заголовок" control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange1} />} />
      <Wrapper>
        <FormControlLabel label="Вариант 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
        <FormControlLabel label="Вариант 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
      </Wrapper>
    </div>;
}`,...H.parameters?.docs?.source},description:{story:`Неопределенное состояние.
В случаях, когда используется группировка элементов в списке и есть возможность выбора всех или определенного числа, может быть использован чексбокс в неопределенном состоянии. Он представляет собой выбранный чекбокс со знаком "-".`,...H.parameters?.docs?.description}}};try{H.displayName=`Indeterminate`,H.__docgenInfo={description:`Неопределенное состояние.
В случаях, когда используется группировка элементов в списке и есть возможность выбора всех или определенного числа, может быть использован чексбокс в неопределенном состоянии. Он представляет собой выбранный чекбокс со знаком "-".`,displayName:`Indeterminate`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Checkbox/stories/Indeterminate.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var W;function G(){return(G=e((()=>{W={args:{disabled:!1},parameters:{docs:{disable:!0}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...W.parameters?.docs?.source}}}})))()}var K,q;function J(){return(J=e((()=>{S(),d(),K=o(),q=()=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(x,{control:(0,K.jsx)(f,{isError:!0}),label:`Текст`}),(0,K.jsx)(x,{control:(0,K.jsx)(f,{checked:!0,isError:!0}),label:`Текст`})]}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <>
    <FormControlLabel control={<Checkbox isError={true} />} label="Текст" />
    <FormControlLabel control={<Checkbox checked isError={true} />} label="Текст" />
  </>`,...q.parameters?.docs?.source},description:{story:`Вид компонента для визуального отображения состояния ошибки`,...q.parameters?.docs?.description}}};try{q.displayName=`WithError`,q.__docgenInfo={description:`Вид компонента для визуального отображения состояния ошибки`,displayName:`WithError`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Checkbox/stories/WithError.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X;function Z(){return(Z=e((()=>{d(),E(),k(),M(),F(),R(),U(),G(),J(),Y={title:`Form-Controls/Checkbox`,component:f,parameters:{docs:{description:{component:`Checkbox — это элемент интерфейса, позволяющий пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=72-28274&t=wFtgAhKvEre00GFN-4)`}}}},X=[`Interaction`,`BasicUsage`,`CheckboxDefault`,`CheckboxChecked`,`CheckboxDisabled`,`CheckboxLabel`,`Indeterminate`,`WithError`]})))()}Z();export{T as BasicUsage,O as CheckboxChecked,j as CheckboxDefault,P as CheckboxDisabled,L as CheckboxLabel,H as Indeterminate,W as Interaction,q as WithError,X as __namedExportsOrder,Y as default};