import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Fi as t,cn as n,dt as r,ft as i,it as a,ji as o,ln as s,rt as c,ya as l,yn as u,za as d}from"./preview-Z1rCd2zM.js";import{n as f,t as p}from"./CrossOutlineMd-BI_77CAS.js";import{n as m,t as h}from"./MessageOutlineMd-BdzivcXI.js";var g;function _(){return(_=e((()=>{g=.8})))()}var v,y;function b(){return(b=e((()=>{v=d(),y=e=>{let[t,n]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{if(t)return;let r=t=>{let{scrollTop:r,clientHeight:i,scrollHeight:a}=t.target instanceof HTMLElement?t.target:document.documentElement;a<=i||(r+i)/a>=e&&n(!0)};return document.addEventListener(`scroll`,r,{capture:!0,passive:!0}),()=>document.removeEventListener(`scroll`,r,{capture:!0})},[e,t]),t}})))()}function x(){return(x=e((()=>{b()})))()}function S(){return(S=e((()=>{x()})))()}var C,w,T,E,D;function O(){return(O=e((()=>{u(),C=t`
  from {
    transform: scale(0.6);

    opacity: 0;
  }

  to {
    transform: scale(1);

    opacity: 1;
  }
`,w=o.aside`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.fab};
  right: ${({theme:e})=>e.spacing(6)};
  bottom: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`sm`)} {
    right: ${({theme:e})=>e.spacing(4)};
    bottom: ${({theme:e})=>e.spacing(4)};
  }
`,T=o.div`
  transform-origin: bottom right;

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};

  width: 320px;
  max-width: calc(100vw - ${({theme:e})=>e.spacing(8)});
  padding: ${({theme:e})=>e.spacing(4)};

  background: ${({theme:e})=>e.palette.background.paper};
  border-radius: ${({theme:e})=>e.shape.large};
  box-shadow: ${({theme:e})=>e.elevation[400]};

  animation: ${C} 200ms ease-out;
`,E=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: flex-start;
  justify-content: space-between;
`,D=o.a`
  transform-origin: bottom right;

  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;

  padding: ${({theme:e})=>e.spacing(3,4)};

  font: inherit;
  font-weight: ${({theme:e})=>e.typography.fontWeightMedium};
  color: ${({theme:e})=>e.palette.primary.contrastText};

  background: ${({theme:e})=>e.palette.primary.main};
  text-decoration: none;

  border-radius: ${({theme:e})=>e.shape.large};
  box-shadow: ${({theme:e})=>e.elevation[300]};

  animation: ${C} 200ms ease-out;

  &:hover {
    background: ${({theme:e})=>e.palette.primary.dark};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.primary.light};
    outline-offset: 2px;
  }
`})))()}var k,A,j;function M(){return(M=e((()=>{k=d(),n(),c(),r(),p(),h(),_(),S(),O(),A=l(),j=({formUrl:e,description:t})=>{let n=y(g),[r,o]=(0,k.useState)(!1),c=n&&!r;return(0,A.jsx)(w,{"aria-label":`Обратная связь`,children:c?(0,A.jsxs)(T,{children:[(0,A.jsxs)(E,{children:[(0,A.jsx)(i,{variant:`h6`,component:`p`,children:`Оставьте, пожалуйста, обратную связь`}),(0,A.jsx)(a,{variant:`text`,size:`medium`,"aria-label":`Свернуть`,onClick:()=>o(!0),children:(0,A.jsx)(f,{})})]}),(0,A.jsx)(i,{color:`grey`,colorIntensity:`700`,children:t}),(0,A.jsx)(s,{component:`a`,href:e,target:`_blank`,rel:`noopener noreferrer`,children:`Оставить отзыв`})]}):(0,A.jsxs)(D,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:[(0,A.jsx)(m,{}),`Обратная связь`]})})};try{j.displayName=`FeedbackWidget`,j.__docgenInfo={description:``,displayName:`FeedbackWidget`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,methods:[],props:{formUrl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,name:`TypeLiteral`}],description:`Ссылка на форму обратной связи`,name:`formUrl`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,name:`TypeLiteral`}],description:`Текст-пояснение под заголовком, свой для каждого отчёта`,name:`description`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function N(){return(N=e((()=>{M()})))()}export{j as n,M as r,N as t};