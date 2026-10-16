import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,xa as i,yn as a}from"./preview-CTqDz5zI.js";import{n as o,t as s}from"./ActionGroup-CWzF5eCr.js";import{n as c,t as l}from"./AddOutlineMd-Dc4Zs3D7.js";import{n as u,t as d}from"./CompanyOutlineMd-6LEeU2mi.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{l(),d(),a(),t(),o(),f=i(),p=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(5)};

  margin: ${({theme:e})=>e.spacing(5)};
`,m=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 500px;
`,h=[{text:`действие 1`,startIcon:(0,f.jsx)(c,{})}],g=[{name:`О компании`,icon:(0,f.jsx)(u,{})}],_=[{text:`Второстепенное действие 1`},{text:`Второстепенное действие 2`}],v=()=>(0,f.jsxs)(p,{children:[(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`main + secondary + secondaryVisible`}),(0,f.jsx)(s,{main:h,secondaryVisible:g,secondary:_})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`main + secondaryVisible`}),(0,f.jsx)(s,{main:h,secondaryVisible:g})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`main + secondary`}),(0,f.jsx)(s,{main:h,secondary:_})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`secondary + secondaryVisible`}),(0,f.jsx)(s,{secondaryVisible:g,secondary:_})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`main`}),(0,f.jsx)(s,{main:h})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`secondaryVisible`}),(0,f.jsx)(s,{secondaryVisible:g})]}),(0,f.jsxs)(m,{children:[(0,f.jsx)(n,{children:`secondary`}),(0,f.jsx)(s,{secondary:_})]})]}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`styled.div\`
  display: flex;
  flex-direction: column;
  gap: \${({
  theme
}) => theme.spacing(5)};

  margin: \${({
  theme
}) => theme.spacing(5)};
\``,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 500px;
\``,...m.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <Wrapper>
      <Typography>main + secondary + secondaryVisible</Typography>
      <ActionGroup main={MainActions} secondaryVisible={SecondaryVisibleActions} secondary={SecondaryActions} />
    </Wrapper>

    <Wrapper>
      <Typography>main + secondaryVisible</Typography>
      <ActionGroup main={MainActions} secondaryVisible={SecondaryVisibleActions} />
    </Wrapper>

    <Wrapper>
      <Typography>main + secondary</Typography>
      <ActionGroup main={MainActions} secondary={SecondaryActions} />
    </Wrapper>

    <Wrapper>
      <Typography>secondary + secondaryVisible</Typography>
      <ActionGroup secondaryVisible={SecondaryVisibleActions} secondary={SecondaryActions} />
    </Wrapper>

    <Wrapper>
      <Typography>main</Typography>
      <ActionGroup main={MainActions} />
    </Wrapper>

    <Wrapper>
      <Typography>secondaryVisible</Typography>
      <ActionGroup secondaryVisible={SecondaryVisibleActions} />
    </Wrapper>

    <Wrapper>
      <Typography>secondary</Typography>
      <ActionGroup secondary={SecondaryActions} />
    </Wrapper>
  </StoryWrapper>`,...v.parameters?.docs?.source}}};try{p.displayName=`StoryWrapper`,p.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionGroup/stories/testsStories/States.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}try{m.displayName=`Wrapper`,m.__docgenInfo={description:``,displayName:`Wrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionGroup/stories/testsStories/States.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var b,x;function S(){return(S=e((()=>{o(),y(),b={title:`Buttons/ActionGroup/Tests`,component:s,parameters:{layout:`fullscreen`}},x=[`States`]})))()}S();export{v as States,x as __namedExportsOrder,b as default};