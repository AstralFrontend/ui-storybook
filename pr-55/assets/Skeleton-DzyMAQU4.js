import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{$r as n,Bi as r,Fi as i,Hi as a,Ni as o,Pi as s,Qr as c,Ui as l,Vi as u,Xr as d,Yr as f,Zr as p,_r as m,ei as h,fr as g,gr as _,ji as v,kr as y,pr as b,ya as x,yn as S,za as C}from"./preview-DptgQDDw.js";import{n as w,t as T}from"./colorManipulator-D8RyO14x.js";import{n as E,t as D}from"./rgba-BImd5l7_.js";function O(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||``}function k(e){return parseFloat(e)}function A(e){return p(`MuiSkeleton`,e)}var j;function M(){return(M=e((()=>{d(),c(),j=f(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`])})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{u(),l(),N=t(C()),h(),s(),w(),_(),g(),M(),P=x(),F=[`animation`,`className`,`component`,`height`,`style`,`variant`,`width`],I=e=>e,V=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return y({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},A,t)},H=i(L||=I`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`),U=i(R||=I`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`),W=m(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let n=O(e.shape.borderRadius)||`px`,r=k(e.shape.borderRadius);return a({display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:T(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`},t.variant===`text`&&{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${r}${n}/${Math.round(r/.6*10)/10}${n}`,"&:empty:before":{content:`"\\00a0"`}},t.variant===`circular`&&{borderRadius:`50%`},t.variant===`rounded`&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:`hidden`}},t.hasChildren&&!t.width&&{maxWidth:`fit-content`},t.hasChildren&&!t.height&&{height:`auto`})},({ownerState:e})=>e.animation===`pulse`&&o(z||=I`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `,H),({ownerState:e,theme:t})=>e.animation===`wave`&&o(B||=I`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `,U,(t.vars||t).palette.action.hover)),G=N.forwardRef(function(e,t){let i=b({props:e,name:`MuiSkeleton`}),{animation:o=`pulse`,className:s,component:c=`span`,height:l,style:u,variant:d=`text`,width:f}=i,p=r(i,F),m=a({},i,{animation:o,component:c,variant:d,hasChildren:!!p.children}),h=V(m);return(0,P.jsx)(W,a({as:c,ref:t,className:n(h.root,s),ownerState:m},p,{style:a({width:f,height:l},u)}))})})))()}var q;function J(){return(J=e((()=>{K(),M(),S(),D(),q=v(G,{shouldForwardProp:e=>![`$shapeSize`].includes(e)})`
  /* stylelint-disable-next-line */
  background-color: ${({theme:e})=>E(e.palette.grey[900],.12)};

  &.${j.text} {
    border-radius: ${({theme:e,$shapeSize:t})=>e.shape[t]};
  }

  &.${j.rounded} {
    border-radius: ${({theme:e,$shapeSize:t})=>e.shape[t]};
  }
`})))()}var Y,X;function Z(){return(Z=e((()=>{J(),Y=x(),X=({shapeSize:e=`medium`,...t})=>(0,Y.jsx)(q,{$shapeSize:e,...t});try{X.displayName=`Skeleton`,X.__docgenInfo={description:``,displayName:`Skeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Skeleton/Skeleton.tsx`,methods:[],props:{classes:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`},{fileName:`ui-temp-10-2026/node_modules/@mui/material/styles/index.d.ts`,name:`StyledComponentProps`}],description:`Override or extend the styles applied to the component.`,name:`classes`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`},required:!1,tags:{},type:{name:`any`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`}],description:``,name:`className`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`any`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`}],description:``,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`any`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`}],description:`Optional children to infer width and height from.`,name:`children`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`},required:!1,tags:{},type:{name:`any`}},component:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Skeleton/Skeleton.tsx`,name:`TypeLiteral`}],description:`Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент`,name:`component`,required:!1,tags:{},type:{name:`any`}},height:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`}],description:`Height of the skeleton.
Useful when you don't want to adapt the skeleton to a text element but for instance a card.`,name:`height`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`},required:!1,tags:{},type:{name:`any`}},width:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`}],description:`Width of the skeleton.
Useful when the skeleton is inside an inline element with no width of its own.`,name:`width`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Skeleton/Skeleton.d.ts`,name:`SkeletonOwnProps`},required:!1,tags:{},type:{name:`any`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Skeleton/Skeleton.tsx`,name:`TypeLiteral`}],description:`Тип контента, который будет отображаться`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"text" | "rounded" | "circular"`,value:[{value:`"text"`},{value:`"rounded"`},{value:`"circular"`}]}},shapeSize:{defaultValue:{value:`medium`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Skeleton/Skeleton.tsx`,name:`TypeLiteral`}],description:`Размер скруглений`,name:`shapeSize`,required:!1,tags:{},type:{name:`enum`,raw:`"small" | "medium" | "large"`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}export{j as i,Z as n,M as r,X as t};