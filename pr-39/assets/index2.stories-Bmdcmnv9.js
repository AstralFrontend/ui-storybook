import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-BexmKZ07.js";import{n as d,t as f}from"./Slide-DFFGYsh1.js";var p,m,h;function g(){return(g=e((()=>{u(),p=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};
`,m=o.div`
  position: relative;

  overflow: hidden;

  width: 160px;
  height: 80px;
`,h=o.div`
  padding: ${({theme:e})=>e.spacing(2)};

  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`})))()}function _(){return(_=e((()=>{g()})))()}var v,y,b;function x(){return(x=e((()=>{v=t(),n(),r(),i(),d(),_(),y=l(),b=()=>{let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(c,{spacing:2,children:[(0,y.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,y.jsx)(m,{children:(0,y.jsx)(f,{direction:`up`,in:e,mountOnEnter:!0,unmountOnExit:!0,children:(0,y.jsx)(h,{children:(0,y.jsx)(a,{children:`Документ успешно подписан`})})})})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Viewport>
        <Slide direction="up" in={visible} mountOnEnter unmountOnExit>
          <Content>
            <Typography>Документ успешно подписан</Typography>
          </Content>
        </Slide>
      </Viewport>
    </Grid>;
}`,...b.parameters?.docs?.source}}}})))()}var S,C,w;function T(){return(T=e((()=>{S=t(),n(),r(),i(),d(),_(),C=l(),w=()=>{let[e,t]=(0,S.useState)(!1);return(0,C.jsxs)(c,{spacing:2,children:[(0,C.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,C.jsxs)(p,{children:[(0,C.jsx)(m,{children:(0,C.jsx)(f,{direction:`up`,in:e,mountOnEnter:!0,unmountOnExit:!0,children:(0,C.jsx)(h,{children:(0,C.jsx)(a,{children:`Up`})})})}),(0,C.jsx)(m,{children:(0,C.jsx)(f,{direction:`right`,in:e,mountOnEnter:!0,unmountOnExit:!0,children:(0,C.jsx)(h,{children:(0,C.jsx)(a,{children:`Right`})})})}),(0,C.jsx)(m,{children:(0,C.jsx)(f,{direction:`down`,in:e,mountOnEnter:!0,unmountOnExit:!0,children:(0,C.jsx)(h,{children:(0,C.jsx)(a,{children:`Down`})})})}),(0,C.jsx)(m,{children:(0,C.jsx)(f,{direction:`left`,in:e,mountOnEnter:!0,unmountOnExit:!0,children:(0,C.jsx)(h,{children:(0,C.jsx)(a,{children:`Left`})})})})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{visible ? 'Скрыть' : 'Показать'}</Button>
      <Row>
        <Viewport>
          <Slide direction="up" in={visible} mountOnEnter unmountOnExit>
            <Content>
              <Typography>Up</Typography>
            </Content>
          </Slide>
        </Viewport>
        <Viewport>
          <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
            <Content>
              <Typography>Right</Typography>
            </Content>
          </Slide>
        </Viewport>
        <Viewport>
          <Slide direction="down" in={visible} mountOnEnter unmountOnExit>
            <Content>
              <Typography>Down</Typography>
            </Content>
          </Slide>
        </Viewport>
        <Viewport>
          <Slide direction="left" in={visible} mountOnEnter unmountOnExit>
            <Content>
              <Typography>Left</Typography>
            </Content>
          </Slide>
        </Viewport>
      </Row>
    </Grid>;
}`,...w.parameters?.docs?.source},description:{story:"Сторона, с которой появляется контент, задаётся через `direction`.",...w.parameters?.docs?.description}}};try{w.displayName=`Direction`,w.__docgenInfo={description:"Сторона, с которой появляется контент, задаётся через `direction`.",displayName:`Direction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/transitions/Slide/stories/Direction.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D;function O(){return(O=e((()=>{d(),x(),T(),E={title:`Transitions/Slide`,component:f},D=[`BasicUsage`,`Direction`]})))()}O();export{b as BasicUsage,w as Direction,D as __namedExportsOrder,E as default};