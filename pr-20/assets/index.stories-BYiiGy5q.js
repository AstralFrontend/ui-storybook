import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,lt as i,ut as a,xa as o,yn as s}from"./preview-CphKROT6.js";var c,l;function u(){return(u=e((()=>{t(),a(),c=o(),l=({label:e,children:t})=>(0,c.jsxs)(i,{direction:`row`,spacing:1,children:[(0,c.jsx)(n,{variant:`h6`,children:e}),t]});try{l.displayName=`Demo`,l.__docgenInfo={description:``,displayName:`Demo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/common/Demo.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Grid/stories/common/Demo.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Grid/stories/common/Demo.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var d;function f(){return(f=e((()=>{s(),d=r.div`
  padding: ${({theme:e})=>e.spacing(3)};

  text-align: center;
  color: ${({theme:e})=>e.palette.common.white};

  background-color: ${({theme:e})=>e.palette.primary.light};
  
  border-radius: ${({theme:e})=>e.shape.medium};
`;try{d.displayName=`Item`,d.__docgenInfo={description:``,displayName:`Item`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/common/Item.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var p,m,h;function g(){return(g=e((()=>{s(),a(),u(),f(),p=o(),m=r.div`
  width: 400px;
  padding: ${({theme:e})=>e.spacing(2)};

  border: 1px dashed ${({theme:e})=>e.palette.grey[400]};
`,h=()=>(0,p.jsxs)(i,{spacing:4,children:[(0,p.jsx)(l,{label:`justifyContent: "center"`,children:(0,p.jsx)(m,{children:(0,p.jsxs)(i,{columns:`120px 120px`,justifyContent:`center`,spacing:2,children:[(0,p.jsx)(d,{children:`1`}),(0,p.jsx)(d,{children:`2`})]})})}),(0,p.jsx)(l,{label:`justifyContent: "space-between"`,children:(0,p.jsx)(m,{children:(0,p.jsxs)(i,{columns:`120px 120px`,justifyContent:`space-between`,spacing:2,children:[(0,p.jsx)(d,{children:`1`}),(0,p.jsx)(d,{children:`2`})]})})}),(0,p.jsx)(l,{label:`alignItems: "center"`,children:(0,p.jsx)(m,{children:(0,p.jsxs)(i,{columns:2,rows:`80px`,alignItems:`center`,spacing:2,children:[(0,p.jsx)(d,{children:`1`}),(0,p.jsx)(d,{children:`2`})]})})})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <Grid spacing={4}>
    <Demo label='justifyContent: "center"'>
      <Container>
        <Grid columns="120px 120px" justifyContent="center" spacing={2}>
          <Item>1</Item>
          <Item>2</Item>
        </Grid>
      </Container>
    </Demo>
    <Demo label='justifyContent: "space-between"'>
      <Container>
        <Grid columns="120px 120px" justifyContent="space-between" spacing={2}>
          <Item>1</Item>
          <Item>2</Item>
        </Grid>
      </Container>
    </Demo>
    <Demo label='alignItems: "center"'>
      <Container>
        <Grid columns={2} rows="80px" alignItems="center" spacing={2}>
          <Item>1</Item>
          <Item>2</Item>
        </Grid>
      </Container>
    </Demo>
  </Grid>`,...h.parameters?.docs?.source}}}})))()}var _,v;function y(){return(y=e((()=>{a(),f(),_=o(),v=()=>(0,_.jsxs)(i,{columns:3,spacing:2,children:[(0,_.jsx)(d,{children:`Блок 1`}),(0,_.jsx)(d,{children:`Блок 2`}),(0,_.jsx)(d,{children:`Блок 3`})]}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Grid columns={3} spacing={2}>
    <Item>Блок 1</Item>
    <Item>Блок 2</Item>
    <Item>Блок 3</Item>
  </Grid>`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{a(),u(),f(),b=o(),x=()=>(0,b.jsxs)(i,{direction:`row`,spacing:4,children:[(0,b.jsx)(l,{label:`columns: 3 — равные колонки`,children:(0,b.jsxs)(i,{columns:3,spacing:1,children:[(0,b.jsx)(d,{children:`1`}),(0,b.jsx)(d,{children:`2`}),(0,b.jsx)(d,{children:`3`})]})}),(0,b.jsx)(l,{label:`columns: "2fr 1fr" — произвольный grid-template-columns`,children:(0,b.jsxs)(i,{columns:`2fr 1fr`,spacing:1,children:[(0,b.jsx)(d,{children:`1`}),(0,b.jsx)(d,{children:`2`})]})})]}),x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => <Grid direction="row" spacing={4}>
    <Demo label="columns: 3 — равные колонки">
      <Grid columns={3} spacing={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Grid>
    </Demo>
    <Demo label='columns: "2fr 1fr" — произвольный grid-template-columns'>
      <Grid columns="2fr 1fr" spacing={1}>
        <Item>1</Item>
        <Item>2</Item>
      </Grid>
    </Demo>
  </Grid>`,...x.parameters?.docs?.source},description:{story:"Prop `columns` принимает число (равные колонки) либо строку, соответствующую grid-template-columns",...x.parameters?.docs?.description}}};try{x.displayName=`Columns`,x.__docgenInfo={description:"Prop `columns` принимает число (равные колонки) либо строку, соответствующую grid-template-columns",displayName:`Columns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/Columns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w;function T(){return(T=e((()=>{a(),f(),C=o(),w=()=>(0,C.jsxs)(i,{component:`section`,columns:2,spacing:2,children:[(0,C.jsx)(d,{children:`1`}),(0,C.jsx)(d,{children:`2`})]}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Grid component="section" columns={2} spacing={2}>
    <Item>1</Item>
    <Item>2</Item>
  </Grid>`,...w.parameters?.docs?.source},description:{story:"Prop `component` позволяет задать DOM-элемент контейнера вместо `div`, например `section`",...w.parameters?.docs?.description}}};try{w.displayName=`CustomComponent`,w.__docgenInfo={description:"Prop `component` позволяет задать DOM-элемент контейнера вместо `div`, например `section`",displayName:`CustomComponent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/CustomComponent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D;function O(){return(O=e((()=>{a(),u(),f(),E=o(),D=()=>(0,E.jsxs)(i,{spacing:4,children:[(0,E.jsx)(l,{label:`direction: row`,children:(0,E.jsxs)(i,{direction:`row`,spacing:1,children:[(0,E.jsx)(d,{children:`1`}),(0,E.jsx)(d,{children:`2`}),(0,E.jsx)(d,{children:`3`})]})}),(0,E.jsx)(l,{label:`direction: column`,children:(0,E.jsxs)(i,{direction:`column`,spacing:1,children:[(0,E.jsx)(d,{children:`1`}),(0,E.jsx)(d,{children:`2`}),(0,E.jsx)(d,{children:`3`})]})})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => <Grid spacing={4}>
    <Demo label="direction: row">
      <Grid direction="row" spacing={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Grid>
    </Demo>
    <Demo label="direction: column">
      <Grid direction="column" spacing={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Grid>
    </Demo>
  </Grid>`,...D.parameters?.docs?.source},description:{story:"`direction` соответствует grid-auto-flow и задаёт направление заполнения сетки",...D.parameters?.docs?.description}}};try{D.displayName=`Direction`,D.__docgenInfo={description:"`direction` соответствует grid-auto-flow и задаёт направление заполнения сетки",displayName:`Direction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/Direction.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k,A;function j(){return(j=e((()=>{t(),k=o(),A={args:{rows:2,rowSpacing:3,children:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(n,{children:`Item 1`}),` `,(0,k.jsx)(n,{children:`Item 2`})]})},parameters:{docs:{disable:!0}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 2,
    rowSpacing: 3,
    children: <>
        <Typography>Item 1</Typography> <Typography>Item 2</Typography>
      </>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{a(),u(),f(),M=o(),N=()=>(0,M.jsxs)(i,{spacing:4,children:[(0,M.jsx)(l,{label:`rows: 3 — равные ряды`,children:(0,M.jsxs)(i,{rows:3,rowSpacing:1,children:[(0,M.jsx)(d,{children:`1`}),(0,M.jsx)(d,{children:`2`}),(0,M.jsx)(d,{children:`3`})]})}),(0,M.jsx)(l,{label:`rows: "2fr 1fr" — произвольный grid-template-rows`,children:(0,M.jsxs)(i,{rows:`2fr 1fr`,rowSpacing:1,children:[(0,M.jsx)(d,{children:`1`}),(0,M.jsx)(d,{children:`2`})]})})]}),N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => <Grid spacing={4}>
    <Demo label="rows: 3 — равные ряды">
      <Grid rows={3} rowSpacing={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Grid>
    </Demo>
    <Demo label='rows: "2fr 1fr" — произвольный grid-template-rows'>
      <Grid rows="2fr 1fr" rowSpacing={1}>
        <Item>1</Item>
        <Item>2</Item>
      </Grid>
    </Demo>
  </Grid>`,...N.parameters?.docs?.source},description:{story:"Prop `rows` принимает число (равные ряды) либо строку, соответствующую grid-template-rows",...N.parameters?.docs?.description}}};try{N.displayName=`Rows`,N.__docgenInfo={description:"Prop `rows` принимает число (равные ряды) либо строку, соответствующую grid-template-rows",displayName:`Rows`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/Rows.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I;function L(){return(L=e((()=>{a(),u(),f(),F=o(),I=()=>(0,F.jsxs)(i,{spacing:4,children:[(0,F.jsx)(l,{label:`spacing: 4`,children:(0,F.jsxs)(i,{columns:2,rows:2,spacing:4,children:[(0,F.jsx)(d,{children:`1`}),(0,F.jsx)(d,{children:`2`}),(0,F.jsx)(d,{children:`3`}),(0,F.jsx)(d,{children:`4`})]})}),(0,F.jsx)(l,{label:`spacing: [1, 6] — [row, column]`,children:(0,F.jsxs)(i,{columns:2,rows:2,spacing:[1,6],children:[(0,F.jsx)(d,{children:`1`}),(0,F.jsx)(d,{children:`2`}),(0,F.jsx)(d,{children:`3`}),(0,F.jsx)(d,{children:`4`})]})}),(0,F.jsx)(l,{label:`rowSpacing: 6, columnSpacing: 1`,children:(0,F.jsxs)(i,{columns:2,rows:2,rowSpacing:6,columnSpacing:1,children:[(0,F.jsx)(d,{children:`1`}),(0,F.jsx)(d,{children:`2`}),(0,F.jsx)(d,{children:`3`}),(0,F.jsx)(d,{children:`4`})]})})]}),I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => <Grid spacing={4}>
    <Demo label="spacing: 4">
      <Grid columns={2} rows={2} spacing={4}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Grid>
    </Demo>
    <Demo label="spacing: [1, 6] — [row, column]">
      <Grid columns={2} rows={2} spacing={[1, 6]}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Grid>
    </Demo>
    <Demo label="rowSpacing: 6, columnSpacing: 1">
      <Grid columns={2} rows={2} rowSpacing={6} columnSpacing={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Grid>
    </Demo>
  </Grid>`,...I.parameters?.docs?.source},description:{story:"`spacing` задаёт отступ между рядами и колонками (число либо `[row, column]`).\n`rowSpacing`/`columnSpacing` позволяют задать отступы по отдельности",...I.parameters?.docs?.description}}};try{I.displayName=`Spacing`,I.__docgenInfo={description:"`spacing` задаёт отступ между рядами и колонками (число либо `[row, column]`).\n`rowSpacing`/`columnSpacing` позволяют задать отступы по отдельности",displayName:`Spacing`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Grid/stories/Spacing.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{a(),g(),y(),S(),T(),O(),j(),P(),L(),R={title:`Layouts/Grid`,component:i,parameters:{docs:{description:{component:`Grid предназначен для группировки элементов в обоих направлениях.`}}}},z=[`BasicUsage`,`Columns`,`Rows`,`Spacing`,`Direction`,`Alignment`,`CustomComponent`,`Interaction`]})))()}B();export{h as Alignment,v as BasicUsage,x as Columns,w as CustomComponent,D as Direction,A as Interaction,N as Rows,I as Spacing,z as __namedExportsOrder,R as default};