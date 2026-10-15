import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,dt as r,ft as i,ji as a,ln as o,lt as s,xa as c,yn as l}from"./preview-CphKROT6.js";import{n as u,t as d}from"./Tooltip-DDkFZ_VG.js";import{n as f,t as p}from"./InfoFillMd-BlRg8MMx.js";import{n as m,t as h}from"./AddOutlineMd-C1ajev2B.js";var g,_,v,y,b;function x(){return(x=e((()=>{l(),r(),g=c(),_=a.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(1)};
`,v=a.div`
  display: flex;
  flex-direction: column;
`,y=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,b=()=>(0,g.jsxs)(_,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)(i,{children:`Нал. расчет`}),(0,g.jsx)(i,{children:`Безнал. расчет`})]}),(0,g.jsxs)(y,{children:[(0,g.jsx)(i,{color:`warning`,children:`10 шт.`}),(0,g.jsx)(i,{color:`warning`,children:`99 989 шт.`})]})]})})))()}var S;function C(){return(C=e((()=>{n(),l(),S=a(s)`
  gap: 10px;

  margin-top: 30px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
    flex-direction: row;
  }
`})))()}function w(){return(w=e((()=>{x(),C()})))()}var T,E,D;function O(){return(O=e((()=>{p(),n(),l(),r(),u(),w(),T=c(),E=a(s)`
  grid-auto-columns: max-content;
`,D=()=>(0,T.jsxs)(s,{container:!0,direction:`row`,spacing:5,children:[(0,T.jsxs)(E,{spacing:1,direction:`column`,children:[(0,T.jsx)(i,{children:`Укажите свой телефон`}),(0,T.jsx)(d,{title:`Формат данных: +7 (ХХХ) ХХХ-ХХ-ХХ`,withoutContainer:!1,children:(0,T.jsx)(f,{color:`primary`})})]}),(0,T.jsxs)(E,{spacing:1,direction:`column`,children:[(0,T.jsx)(i,{children:`Общая выручка`}),(0,T.jsx)(d,{title:(0,T.jsx)(b,{}),withoutContainer:!1,children:(0,T.jsx)(f,{color:`primary`})})]})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <Grid container direction="row" spacing={5}>
    <GridContainer spacing={1} direction="column">
      <Typography>Укажите свой телефон</Typography>
      <Tooltip title="Формат данных: +7 (ХХХ) ХХХ-ХХ-ХХ" withoutContainer={false}>
        <InfoFillMd color="primary" />
      </Tooltip>
    </GridContainer>

    <GridContainer spacing={1} direction="column">
      <Typography>Общая выручка</Typography>
      <Tooltip title={<TooltipContent />} withoutContainer={false}>
        <InfoFillMd color="primary" />
      </Tooltip>
    </GridContainer>
  </Grid>`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{t(),n(),u(),k=c(),A=()=>(0,k.jsx)(s,{container:!0,direction:`row`,spacing:4,children:(0,k.jsx)(d,{title:`Всплывающая подсказка`,withoutContainer:!1,children:(0,k.jsx)(o,{color:`primary`,variant:`contained`,disabled:!0,children:`Disabled`})})}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <Grid container direction="row" spacing={4}>
    <Tooltip title="Всплывающая подсказка" withoutContainer={false}>
      <Button color="primary" variant="contained" disabled>
        Disabled
      </Button>
    </Tooltip>
  </Grid>`,...A.parameters?.docs?.source},description:{story:`Пропс withoutContainer необходим чтобы Tooltip работал на элементе который disabled`,...A.parameters?.docs?.description}}};try{A.displayName=`Disabled`,A.__docgenInfo={description:`Пропс withoutContainer необходим чтобы Tooltip работал на элементе который disabled`,displayName:`Disabled`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tooltip/stories/Disabled.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var M,N;function P(){return(P=e((()=>{h(),t(),M=c(),N={args:{title:`Всплывающая подсказка`,children:(0,M.jsx)(o,{color:`primary`,variant:`contained`,children:(0,M.jsx)(m,{})})},parameters:{docs:{disable:!0}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Всплывающая подсказка',
    children: <Button color="primary" variant="contained">
        <AddOutlineMd />
      </Button>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...N.parameters?.docs?.source}}}})))()}var F,I;function L(){return(L=e((()=>{t(),u(),w(),F=c(),I=()=>(0,F.jsxs)(S,{container:!0,columns:2,children:[(0,F.jsx)(d,{title:`Текущий документ не прошел 
 согласование/подписание. 
 Загрузите документ повторно`,placement:`top`,size:`small`,children:(0,F.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`С использованием переноса`})}),(0,F.jsx)(d,{title:`Текущий документ не прошел согласование/подписание. Загрузите документ повторно`,placement:`top`,size:`small`,children:(0,F.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Без использования переноса`})})]}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const titleWithNewLineCharacter = 'Текущий документ не прошел \\n согласование/подписание. \\n Загрузите документ повторно';
  const titleWithoutNewLineCharacter = 'Текущий документ не прошел согласование/подписание. Загрузите документ повторно';
  return <GridContainer container columns={2}>
      <Tooltip title={titleWithNewLineCharacter} placement="top" size="small">
        <Button color="primary" variant="contained" size="large">
          С использованием переноса
        </Button>
      </Tooltip>
      <Tooltip title={titleWithoutNewLineCharacter} placement="top" size="small">
        <Button color="primary" variant="contained" size="large">
          Без использования переноса
        </Button>
      </Tooltip>
    </GridContainer>;
}`,...I.parameters?.docs?.source},description:{story:`При использовании символа \\n в пропсе title будет происходить перенос текста на новую строку`,...I.parameters?.docs?.description}}};try{I.displayName=`NewLineCharacter`,I.__docgenInfo={description:`При использовании символа \\n в пропсе title будет происходить перенос текста на новую строку`,displayName:`NewLineCharacter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tooltip/stories/NewLineCharacter.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{t(),u(),w(),R=c(),z=()=>(0,R.jsxs)(S,{container:!0,columns:3,children:[(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`top`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Top`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`top-start`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Top-start`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`top-end`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Top-end`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`bottom`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Bottom`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`bottom-start`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Bottom-start`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`bottom-end`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Bottom-end`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`left`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Left`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`left-start`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Left-start`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`left-end`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Left-end`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`right`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Right`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`right-start`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Right-start`})}),(0,R.jsx)(d,{title:`Всплывающая подсказка`,placement:`right-end`,size:`small`,children:(0,R.jsx)(o,{color:`primary`,variant:`contained`,size:`large`,children:`Right-end`})})]}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => <GridContainer container columns={3}>
    <Tooltip title="Всплывающая подсказка" placement="top" size="small">
      <Button color="primary" variant="contained" size="large">
        Top
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="top-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Top-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="top-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Top-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="bottom" size="small">
      <Button color="primary" variant="contained" size="large">
        Bottom
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="bottom-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Bottom-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="bottom-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Bottom-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left" size="small">
      <Button color="primary" variant="contained" size="large">
        Left
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Left-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="left-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Left-end
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right" size="small">
      <Button color="primary" variant="contained" size="large">
        Right
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right-start" size="small">
      <Button color="primary" variant="contained" size="large">
        Right-start
      </Button>
    </Tooltip>

    <Tooltip title="Всплывающая подсказка" placement="right-end" size="small">
      <Button color="primary" variant="contained" size="large">
        Right-end
      </Button>
    </Tooltip>
  </GridContainer>`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{h(),t(),n(),r(),u(),V=c(),H=()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(s,{container:!0,direction:`row`,spacing:4,children:[(0,V.jsx)(s,{children:(0,V.jsx)(i,{variant:`h5`,children:`Small`})}),(0,V.jsx)(s,{children:(0,V.jsx)(d,{size:`small`,title:`Всплывающая подсказка`,children:(0,V.jsx)(o,{color:`primary`,variant:`contained`,children:(0,V.jsx)(m,{})})})})]}),(0,V.jsxs)(s,{container:!0,direction:`row`,spacing:4,children:[(0,V.jsx)(s,{children:(0,V.jsx)(i,{variant:`h5`,children:`Medium`})}),(0,V.jsx)(s,{children:(0,V.jsx)(d,{title:`Всплывающая подсказка`,children:(0,V.jsx)(o,{color:`primary`,variant:`contained`,children:(0,V.jsx)(m,{})})})})]})]}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => <>
    <Grid container direction="row" spacing={4}>
      <Grid>
        <Typography variant="h5">Small</Typography>
      </Grid>
      <Grid>
        <Tooltip size="small" title="Всплывающая подсказка">
          <Button color="primary" variant="contained">
            <AddOutlineMd />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>

    <Grid container direction="row" spacing={4}>
      <Grid>
        <Typography variant="h5">Medium</Typography>
      </Grid>
      <Grid>
        <Tooltip title="Всплывающая подсказка">
          <Button color="primary" variant="contained">
            <AddOutlineMd />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  </>`,...H.parameters?.docs?.source}}}})))()}var W,G;function K(){return(K=e((()=>{u(),O(),j(),P(),L(),B(),U(),W={title:`Popovers-and-Tooltips/Tooltip`,component:d,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=437-305853)`}}}},G=[`Interaction`,`BasicUsage`,`Sizes`,`Placement`,`Disabled`,`NewLineCharacter`]})))()}K();export{D as BasicUsage,A as Disabled,N as Interaction,I as NewLineCharacter,z as Placement,H as Sizes,G as __namedExportsOrder,W as default};