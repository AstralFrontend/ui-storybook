import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,ji as r,ya as i,yn as a,za as o}from"./preview-CdUppftE.js";import{n as s,t as c}from"./NewPopover-Bc0j3lIh.js";import{s as l,t as u}from"./common-Bik6c59H.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{d=o(),a(),t(),s(),u(),f=i(),p=[`top-start`,`top`,`top-end`,`left-start`,`left`,`left-end`,`right-start`,`right`,`right-end`,`bottom-start`,`bottom`,`bottom-end`],m=r.div`
  display: grid;
  padding: ${({theme:e})=>e.spacing(15)};
  height: 100%;
  gap: ${({theme:e})=>e.spacing(20,40)};
  grid-template-columns: repeat(3, 1fr);
`,h=r.div`
  align-items: center;
  display: flex;
  justify-content: center;
`,g=r.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 60px;

  border: 1px dashed ${({theme:e})=>e.palette.grey[400]};
  border-radius: ${({theme:e})=>e.shape.medium};
`,_=({placement:e})=>{let[t,r]=(0,d.useState)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{ref:r,children:(0,f.jsx)(n,{variant:`caption`,color:`textSecondary`,children:e})}),(0,f.jsx)(c,{isOpen:!0,anchorEl:t,placement:e,disableAutoFocus:!0,hasArrow:!0,children:(0,f.jsx)(l,{children:(0,f.jsx)(n,{variant:`subtitle2`,color:`textSecondary`,children:`Контент`})})})]})},v=()=>(0,f.jsx)(m,{children:p.map(e=>(0,f.jsx)(h,{children:(0,f.jsx)(_,{placement:e})},e))}),v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <Grid>
    {placements.map(placement => <Cell key={placement}>
        <PlacementItem placement={placement} />
      </Cell>)}
  </Grid>`,...v.parameters?.docs?.source}}}})))()}var b,x;function S(){return(S=e((()=>{s(),y(),b={title:`Popovers-and-Tooltips/Popover/NewPopover/Tests`,component:c},x=[`PlacementStates`]})))()}S();export{v as PlacementStates,x as __namedExportsOrder,b as default};