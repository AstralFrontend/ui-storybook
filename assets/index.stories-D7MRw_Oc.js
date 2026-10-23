import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,dt as r,ft as i,ji as a,ln as o,lt as s,ya as c,yn as l,za as u}from"./preview-28_ENgae.js";import{n as d,t as f}from"./ClickAwayListener-lVFGgRA3.js";var p;function m(){return(m=e((()=>{l(),p=a.div`
  padding: ${({theme:e})=>e.spacing(4)};

  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.large};
`;try{p.displayName=`Zone`,p.__docgenInfo={description:``,displayName:`Zone`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ClickAwayListener/stories/common/Zone.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var h,g,_;function v(){return(v=e((()=>{h=u(),t(),n(),r(),d(),m(),g=c(),_=()=>{let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(s,{container:!0,spacing:2,children:[(0,g.jsx)(o,{onClick:()=>t(!0),children:`Активировать карточку`}),(0,g.jsx)(f,{onClickAway:()=>{t(!1)},isActive:e,children:(0,g.jsx)(p,{children:(0,g.jsxs)(i,{variant:`body1`,children:[`Статус: `,e?`активна`:`неактивна`,`. Клик внутри зоны не сбросит активность, клик снаружи — сбросит`]})})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isActive, setActive] = useState(false);
  const handleClickAway = () => {
    setActive(false);
  };
  return <Grid container spacing={2}>
      <Button onClick={() => setActive(true)}>Активировать карточку</Button>
      <ClickAwayListener onClickAway={handleClickAway} isActive={isActive}>
        <Zone>
          <Typography variant="body1">
            Статус: {isActive ? 'активна' : 'неактивна'}. Клик внутри зоны не
            сбросит активность, клик снаружи — сбросит
          </Typography>
        </Zone>
      </ClickAwayListener>
    </Grid>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{d(),v(),y={title:`Other/ClickAwayListener`,component:f,parameters:{docs:{description:{component:`Абстрактный компонент, предназначенный для отлавливания кликов снаружи кастомных компонентов. Для более узких кейсов, где требуется управление рефом, используйте хук useClickAwayEffect`}}}},b=[`BasicUsage`]})))()}x();export{_ as BasicUsage,b as __namedExportsOrder,y as default};