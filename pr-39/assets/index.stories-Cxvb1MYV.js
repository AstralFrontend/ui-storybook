import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-BQGJfZhY.js";import{t as d}from"./Grow-x8RYVqff.js";import{t as f}from"./Grow-Dgzd2mJG.js";var p,m,h,g;function _(){return(_=e((()=>{p=t(),n(),r(),u(),i(),f(),m=l(),h=o.div`
  padding: ${({theme:e})=>e.spacing(2)};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,g=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(c,{spacing:2,children:[(0,m.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,m.jsx)(d,{in:e,children:(0,m.jsx)(h,{children:(0,m.jsx)(a,{children:`Документ успешно подписан`})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Grow in={visible}>
        <Content>
          <Typography>Документ успешно подписан</Typography>
        </Content>
      </Grow>
    </Grid>;
}`,...g.parameters?.docs?.source}}}})))()}var v,y,b,x,S;function C(){return(C=e((()=>{v=t(),n(),r(),u(),i(),f(),y=l(),b=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
`,x=o.div`
  padding: ${({theme:e})=>e.spacing(2)};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,S=()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(c,{spacing:2,children:[(0,y.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,y.jsxs)(b,{children:[(0,y.jsx)(d,{in:e,style:{transformOrigin:`0 0 0`},children:(0,y.jsx)(x,{children:(0,y.jsx)(a,{children:`Слева сверху`})})}),(0,y.jsx)(d,{in:e,style:{transformOrigin:`center`},children:(0,y.jsx)(x,{children:(0,y.jsx)(a,{children:`По центру`})})})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Row>
        <Grow in={visible} style={{
        transformOrigin: '0 0 0'
      }}>
          <Content>
            <Typography>Слева сверху</Typography>
          </Content>
        </Grow>
        <Grow in={visible} style={{
        transformOrigin: 'center'
      }}>
          <Content>
            <Typography>По центру</Typography>
          </Content>
        </Grow>
      </Row>
    </Grid>;
}`,...S.parameters?.docs?.source},description:{story:'Точка, из которой контент "вырастает", задаётся через `style.transformOrigin`.',...S.parameters?.docs?.description}}};try{S.displayName=`TransformOrigin`,S.__docgenInfo={description:'Точка, из которой контент "вырастает", задаётся через `style.transformOrigin`.',displayName:`TransformOrigin`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/transitions/Grow/stories/TransformOrigin.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T;function E(){return(E=e((()=>{f(),_(),C(),w={title:`Transitions/Grow`,component:d},T=[`BasicUsage`,`TransformOrigin`]})))()}E();export{g as BasicUsage,S as TransformOrigin,T as __namedExportsOrder,w as default};