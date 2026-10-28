import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,ji as n,wn as r,ya as i,yn as a}from"./preview-BabqIrZj.js";import{t as o}from"./Paper-XRz7yeLv.js";import{t as s}from"./Paper-BMnYXc4Y.js";var c;function l(){return(l=e((()=>{c={controlsWrapper:`story-control-wrapper_controls`,showControlsOnMobile:`story-control-wrapper_controls_show-on-mobile`}})))()}var u,d,f;function p(){return(p=e((()=>{s(),a(),l(),u=n.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: ${({theme:e})=>e.spacing(4)};

  width: 100%;
  height: 100%;

  ${({theme:e})=>e.breakpoints.down(`sm`)} {
    height: 100vh;
  }
`,d=n(o)`
  padding: ${({theme:e})=>e.spacing(5)};
  margin: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`sm`)} {
    display: none;

    &.${c.showControlsOnMobile} {
      display: block;
    }
  }
`,f=n.div`
  ${({theme:e})=>e.breakpoints.down(`sm`)} {
    min-height: 0;
  }
`})))()}var m,h,g;function _(){return(_=e((()=>{r(),l(),p(),m=i(),h=t(c.controlsWrapper,{variants:{isShowControlsOnMobile:{true:c.showControlsOnMobile}}}),g=({children:e,controls:t,className:n,isShowControlsOnMobile:r})=>(0,m.jsxs)(u,{className:n,children:[t&&(0,m.jsx)(d,{variant:`outlined`,className:h({isShowControlsOnMobile:r}),children:t}),(0,m.jsx)(f,{children:e})]});try{g.displayName=`StoryControlWrapper`,g.__docgenInfo={description:``,displayName:`StoryControlWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/dev/storybook/StoryControlWrapper/StoryControlWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/dev/storybook/StoryControlWrapper/StoryControlWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},controls:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/dev/storybook/StoryControlWrapper/StoryControlWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`controls`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/dev/storybook/StoryControlWrapper/StoryControlWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},isShowControlsOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/dev/storybook/StoryControlWrapper/StoryControlWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`isShowControlsOnMobile`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function v(){return(v=e((()=>{_()})))()}export{c as a,l as i,g as n,_ as r,v as t};