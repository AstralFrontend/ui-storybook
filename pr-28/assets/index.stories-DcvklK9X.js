import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,_n as n,cn as r,ct as i,gn as a,ln as o,lt as s,xa as c}from"./preview-DRblasGc.js";import{t as l}from"./OverflowTypography-BV4RqdnY.js";import{t as u}from"./OverflowTypography-kOnspq8R.js";import{n as d,t as f}from"./icons-DAI1xwXC.js";import{n as p,t as m}from"./CopyOutlineSm-C7uZ3F3V.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{h=t(),r(),i(),u(),a(),m(),d(),g=c(),_=t(),v=(e,t)=>e.map(([e,n])=>({size:t,name:e,Component:n})),y=Object.entries(f).filter(e=>typeof e[1]==`function`),b=y.filter(([e])=>e.includes(`FillMd`)),x=y.filter(([e])=>e.includes(`FillSm`)),S=y.filter(([e])=>e.includes(`OutlineMd`)),C=y.filter(([e])=>e.includes(`OutlineSm`)),[w,T,E,D]=[v(b,24),v(x,16),v(S,24),v(C,16)],O={title:`Icons/Icons`,component:n,parameters:{docs:{description:{component:`Иконки дизайн-системы Астрал-Софт
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=1-82409)`}}}},k=({component:e,name:t,size:n,...r})=>{let[i,a]=(0,h.useState)(!1);return(0,g.jsx)(o,{variant:`text`,onClick:e=>{e.stopPropagation(),navigator.clipboard.writeText(t)},onMouseLeave:()=>a(!1),onMouseEnter:()=>a(!0),style:{height:`80px`,padding:`unset`},children:(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,width:`100px`,justifySelf:`center`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,alignItems:`center`,width:`100%`,position:`relative`},children:[i&&(0,g.jsx)(p,{style:{fontSize:`16px`,position:`absolute`,left:0,color:`#778DA8`}}),(0,g.jsx)(e,{...r,style:{...r.style,width:n,height:n}})]}),(0,g.jsx)(l,{style:{marginTop:`20px`},tooltipProps:{placement:`bottom`},children:t})]})})},A=({children:e})=>(0,g.jsx)(`div`,{style:{width:`100%`},children:(0,g.jsx)(s,{container:!0,spacing:5,columns:`repeat(auto-fill, minmax(100px, 1fr))`,children:e})}),j=e=>(0,g.jsx)(A,{children:w.map(({name:t,size:n,Component:r})=>(0,_.createElement)(k,{...e,color:`primary`,key:t,size:n,name:t,component:r}))}),M=e=>(0,g.jsx)(A,{children:T.map(({name:t,size:n,Component:r})=>(0,_.createElement)(k,{...e,color:`primary`,key:t,size:n,name:t,component:r}))}),N=e=>(0,g.jsx)(A,{children:E.map(({name:t,size:n,Component:r})=>(0,_.createElement)(k,{...e,color:`primary`,key:t,size:n,name:t,component:r}))}),P=e=>(0,g.jsx)(A,{children:D.map(({name:t,size:n,Component:r})=>(0,_.createElement)(k,{...e,color:`primary`,key:t,size:n,name:t,component:r}))}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`(props: SvgIconProps) => <IconGallery>
    {fillMdIcons.map(({
    name,
    size,
    Component
  }) => <Icon {...props} color="primary" key={name} size={size} name={name} component={Component} />)}
  </IconGallery>`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(props: SvgIconProps) => <IconGallery>
    {fillSmIcons.map(({
    name,
    size,
    Component
  }) => <Icon {...props} color="primary" key={name} size={size} name={name} component={Component} />)}
  </IconGallery>`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(props: SvgIconProps) => <IconGallery>
    {outlineMdIcons.map(({
    name,
    size,
    Component
  }) => <Icon {...props} color="primary" key={name} size={size} name={name} component={Component} />)}
  </IconGallery>`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(props: SvgIconProps) => <IconGallery>
    {outlineSmIcons.map(({
    name,
    size,
    Component
  }) => <Icon {...props} color="primary" key={name} size={size} name={name} component={Component} />)}
  </IconGallery>`,...P.parameters?.docs?.source}}},F=[`FillMdIcons`,`FillSmIcons`,`OutlineMdIcons`,`OutlineSmIcons`]})))()}I();export{j as FillMdIcons,M as FillSmIcons,N as OutlineMdIcons,P as OutlineSmIcons,F as __namedExportsOrder,O as default};