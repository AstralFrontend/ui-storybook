import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{E as t,cn as n,ct as r,ji as i,ln as a,lt as o,w as s,ya as c,yn as l,za as u}from"./preview-BY-1Z8yT.js";import{n as d,t as f}from"./Iframe-B7fGLdqX.js";var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{p=u(),n(),s(),r(),l(),d(),m=c(),h={title:`Other/Iframe`,component:f,parameters:{docs:{description:{component:`Iframe позволяет отображать контент из указанного URL.`}}}},g={args:{src:`https://www.youtube.com/embed/k85mRPqvMbE`},parameters:{docs:{disable:!0}}},_=i.div`
  width: min(430px, 100%);
  height: 250px;
`,v=({children:e})=>(0,m.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,m.jsx)(_,{children:e})}),y=({children:e})=>{let[t,n]=(0,p.useState)(1);return(0,m.jsxs)(o,{container:!0,spacing:2,children:[(0,m.jsx)(a,{onClick:()=>{n(e=>e+1)},children:`Перезагрузить`}),(0,m.jsx)(v,{children:e},t)]})},b=()=>(0,m.jsx)(y,{children:(0,m.jsx)(f,{src:`https://www.youtube.com/embed/k85mRPqvMbE`})}),x=()=>(0,m.jsx)(y,{children:(0,m.jsx)(f,{loadingContent:`loading...`,src:`https://www.youtube.com/embed/k85mRPqvMbE`})}),S=()=>{let e=(0,p.useRef)(null);return(0,m.jsxs)(o,{container:!0,spacing:2,children:[(0,m.jsx)(a,{fullWidth:!0,onClick:()=>{e.current?.dispatchEvent(new ErrorEvent(`error`,{message:`Ошибка при нажатии на кнопку`}))},children:`Вызвать ошибку`}),(0,m.jsx)(v,{children:(0,m.jsx)(f,{ref:e,src:`https://www.youtube.com/embed/k85mRPqvMbE`})})]})},C=[`Interaction`,`BasicUsage`,`LoadingContent`,`WithError`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as BasicUsage,g as Interaction,x as LoadingContent,S as WithError,C as __namedExportsOrder,h as default};