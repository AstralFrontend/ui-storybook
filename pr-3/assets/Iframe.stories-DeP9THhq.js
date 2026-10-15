import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,cn as r,ct as i,ji as a,ln as o,lt as s,w as c,xa as l,yn as u}from"./preview-DApj709n.js";import{n as d,t as f}from"./Iframe-CwWvb6Em.js";var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{p=n(),r(),c(),i(),u(),d(),m=l(),h={title:`Other/Iframe`,component:f,parameters:{docs:{description:{component:`Iframe позволяет отображать контент из указанного URL.`}}}},g={args:{src:`https://www.youtube.com/embed/k85mRPqvMbE`},parameters:{docs:{disable:!0}}},_=a.div`
  width: min(430px, 100%);
  height: 250px;
`,v=({children:e})=>(0,m.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,m.jsx)(_,{children:e})}),y=({children:e})=>{let[t,n]=(0,p.useState)(1);return(0,m.jsxs)(s,{container:!0,spacing:2,children:[(0,m.jsx)(o,{onClick:()=>{n(e=>e+1)},children:`Перезагрузить`}),(0,m.jsx)(v,{children:e},t)]})},b=()=>(0,m.jsx)(y,{children:(0,m.jsx)(f,{src:`https://www.youtube.com/embed/k85mRPqvMbE`})}),x=()=>(0,m.jsx)(y,{children:(0,m.jsx)(f,{loadingContent:`loading...`,src:`https://www.youtube.com/embed/k85mRPqvMbE`})}),S=()=>{let e=(0,p.useRef)(null);return(0,m.jsxs)(s,{container:!0,spacing:2,children:[(0,m.jsx)(o,{fullWidth:!0,onClick:()=>{e.current?.dispatchEvent(new ErrorEvent(`error`,{message:`Ошибка при нажатии на кнопку`}))},children:`Вызвать ошибку`}),(0,m.jsx)(v,{children:(0,m.jsx)(f,{ref:e,src:`https://www.youtube.com/embed/k85mRPqvMbE`})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.youtube.com/embed/k85mRPqvMbE'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <ReloadContainer>
      <Iframe src="https://www.youtube.com/embed/k85mRPqvMbE" />
    </ReloadContainer>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <ReloadContainer>
      <Iframe loadingContent="loading..." src="https://www.youtube.com/embed/k85mRPqvMbE" />
    </ReloadContainer>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLIFrameElement>(null);
  const triggerIframeError = () => {
    ref.current?.dispatchEvent(new ErrorEvent('error', {
      message: 'Ошибка при нажатии на кнопку'
    }));
  };
  return <Grid container spacing={2}>
      <Button fullWidth onClick={triggerIframeError}>
        Вызвать ошибку
      </Button>
      <Container>
        <Iframe ref={ref} src="https://www.youtube.com/embed/k85mRPqvMbE" />
      </Container>
    </Grid>;
}`,...S.parameters?.docs?.source}}},C=[`Interaction`,`BasicUsage`,`LoadingContent`,`WithError`]})))()}w();export{b as BasicUsage,g as Interaction,x as LoadingContent,S as WithError,C as __namedExportsOrder,h as default};