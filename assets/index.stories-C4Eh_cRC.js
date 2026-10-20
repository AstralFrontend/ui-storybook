import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-MR7j8bZ5.js";import{n as d,t as f}from"./Collapse-1aUjVLug.js";var p,m,h;function g(){return(g=e((()=>{p=t(),n(),r(),i(),d(),m=l(),h=()=>{let[e,t]=(0,p.useState)(!1);return(0,m.jsxs)(c,{spacing:2,children:[(0,m.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть историю`:`Показать историю`}),(0,m.jsx)(f,{in:e,children:(0,m.jsxs)(a,{children:[`12.05.2026 — документ подписан Ивановым И.И.`,(0,m.jsx)(`br`,{}),`11.05.2026 — документ отправлен на согласование.`]})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>
        {open ? 'Скрыть историю' : 'Показать историю'}
      </Button>
      <Collapse in={open}>
        <Typography>
          12.05.2026 — документ подписан Ивановым И.И.
          <br />
          11.05.2026 — документ отправлен на согласование.
        </Typography>
      </Collapse>
    </Grid>;
}`,...h.parameters?.docs?.source}}}})))()}var _,v,y,b;function x(){return(x=e((()=>{_=t(),n(),u(),i(),d(),v=l(),y=o.div`
  width: min(100%, 400px);
`,b=()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(y,{children:[(0,v.jsx)(f,{in:e,collapsedSize:48,children:(0,v.jsx)(a,{children:`Договор поставки оборудования №45-ТД от 14.02.2026. Включает приложения: спецификацию, график поставки и акт сверки расчётов. Документ требует согласования с юридическим и финансовым отделами до передачи на подпись руководителю.`})}),(0,v.jsx)(s,{variant:`text`,onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать ещё`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  return <Wrapper>
      <Collapse in={open} collapsedSize={48}>
        <Typography>
          Договор поставки оборудования №45-ТД от 14.02.2026. Включает
          приложения: спецификацию, график поставки и акт сверки расчётов.
          Документ требует согласования с юридическим и финансовым отделами до
          передачи на подпись руководителю.
        </Typography>
      </Collapse>
      <Button variant="text" onClick={handleClick}>
        {open ? 'Скрыть' : 'Показать ещё'}
      </Button>
    </Wrapper>;
}`,...b.parameters?.docs?.source},description:{story:`\`collapsedSize\` оставляет часть контента видимой в свёрнутом состоянии —
удобно для текста, который нужно показывать частично, например описание
документа.`,...b.parameters?.docs?.description}}};try{b.displayName=`CollapsedSize`,b.__docgenInfo={description:`\`collapsedSize\` оставляет часть контента видимой в свёрнутом состоянии —
удобно для текста, который нужно показывать частично, например описание
документа.`,displayName:`CollapsedSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Collapse/stories/CollapsedSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var S,C,w,T,E;function D(){return(D=e((()=>{S=t(),n(),r(),u(),i(),d(),C=l(),w=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
`,T=o.div`
  padding: ${({theme:e})=>e.spacing(2)};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
`,E=()=>{let[e,t]=(0,S.useState)(!0);return(0,C.jsxs)(c,{spacing:2,children:[(0,C.jsx)(s,{onClick:()=>{t(e=>!e)},children:e?`Скрыть`:`Показать`}),(0,C.jsxs)(w,{children:[(0,C.jsx)(f,{in:e,orientation:`vertical`,children:(0,C.jsx)(T,{children:(0,C.jsx)(a,{children:`Вертикально`})})}),(0,C.jsx)(f,{in:e,orientation:`horizontal`,children:(0,C.jsx)(T,{children:(0,C.jsx)(a,{children:`Горизонтально`})})})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(prev => !prev);
  };
  return <Grid spacing={2}>
      <Button onClick={handleClick}>{open ? 'Скрыть' : 'Показать'}</Button>
      <Row>
        <Collapse in={open} orientation="vertical">
          <CollapseContent>
            <Typography>Вертикально</Typography>
          </CollapseContent>
        </Collapse>
        <Collapse in={open} orientation="horizontal">
          <CollapseContent>
            <Typography>Горизонтально</Typography>
          </CollapseContent>
        </Collapse>
      </Row>
    </Grid>;
}`,...E.parameters?.docs?.source},description:{story:'`orientation="vertical"` (по умолчанию) сворачивает контент по высоте,\n`orientation="horizontal"` — по ширине.',...E.parameters?.docs?.description}}};try{E.displayName=`Orientation`,E.__docgenInfo={description:'`orientation="vertical"` (по умолчанию) сворачивает контент по высоте,\n`orientation="horizontal"` — по ширине.',displayName:`Orientation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Collapse/stories/Orientation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k;function A(){return(A=e((()=>{d(),g(),x(),D(),O={title:`Transitions/Collapse`,component:f},k=[`BasicUsage`,`Orientation`,`CollapsedSize`]})))()}A();export{h as BasicUsage,b as CollapsedSize,E as Orientation,k as __namedExportsOrder,O as default};