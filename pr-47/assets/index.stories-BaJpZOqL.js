import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,ct as n,dt as r,ft as i,ji as a,ln as o,lt as s,ya as c,yn as l,za as u}from"./preview-Bh-2MF8C.js";import{n as d,t as f}from"./Zoom-B9HIZQZ0.js";var p,m,h,g;function _(){return(_=e((()=>{p=u(),t(),n(),l(),r(),d(),m=c(),h=a.div`
  padding: ${({theme:e})=>e.spacing(2)};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,g=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(o,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,m.jsx)(f,{in:e,children:(0,m.jsx)(h,{children:(0,m.jsx)(i,{children:`Документ успешно подписан`})})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Zoom in={visible}>
        <Content>
          <Typography>Документ успешно подписан</Typography>
        </Content>
      </Zoom>
    </Grid>;
}`,...g.parameters?.docs?.source}}}})))()}var v,y;function b(){return(b=e((()=>{d(),_(),v={title:`Transitions/Zoom`,component:f},y=[`BasicUsage`]})))()}b();export{g as BasicUsage,y as __namedExportsOrder,v as default};