import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-BexmKZ07.js";import{n as d,t as f}from"./Fade-BwdjSFmj.js";var p,m,h,g;function _(){return(_=e((()=>{p=t(),n(),r(),u(),i(),d(),m=l(),h=o.div`
  padding: ${({theme:e})=>e.spacing(2)};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,g=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(c,{spacing:2,children:[(0,m.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,m.jsx)(f,{in:e,children:(0,m.jsx)(h,{children:(0,m.jsx)(a,{children:`Документ успешно подписан`})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Fade in={visible}>
        <Content>
          <Typography>Документ успешно подписан</Typography>
        </Content>
      </Fade>
    </Grid>;
}`,...g.parameters?.docs?.source}}}})))()}var v,y;function b(){return(b=e((()=>{d(),_(),v={title:`Transitions/Fade`,component:f},y=[`BasicUsage`]})))()}b();export{g as BasicUsage,y as __namedExportsOrder,v as default};