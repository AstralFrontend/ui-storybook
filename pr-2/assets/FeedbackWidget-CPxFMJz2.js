import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Fi as t,Va as n,cn as r,dt as i,ft as a,it as o,ji as s,ln as c,rt as l,xa as u,yn as d}from"./preview-msKJ6Jz4.js";import{n as f,t as p}from"./CrossOutlineMd-QbD69VHA.js";import{n as m,t as h}from"./MessageOutlineMd-DPVkYJwU.js";var g;function _(){return(_=e((()=>{g=.8})))()}var v,y;function b(){return(b=e((()=>{v=n(),y=e=>{let[t,n]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{if(t)return;let r=t=>{let{scrollTop:r,clientHeight:i,scrollHeight:a}=t.target instanceof HTMLElement?t.target:document.documentElement;a<=i||(r+i)/a>=e&&n(!0)};return document.addEventListener(`scroll`,r,{capture:!0,passive:!0}),()=>document.removeEventListener(`scroll`,r,{capture:!0})},[e,t]),t}})))()}function x(){return(x=e((()=>{b()})))()}function S(){return(S=e((()=>{x()})))()}var C,w,T,E,D;function O(){return(O=e((()=>{d(),C=t`
  from {
    transform: scale(0.6);

    opacity: 0;
  }

  to {
    transform: scale(1);

    opacity: 1;
  }
`,w=s.aside`
  position: fixed;
  z-index: ${({theme:e})=>e.zIndex.fab};
  right: ${({theme:e})=>e.spacing(6)};
  bottom: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`sm`)} {
    right: ${({theme:e})=>e.spacing(4)};
    bottom: ${({theme:e})=>e.spacing(4)};
  }
`,T=s.div`
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
`,E=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: flex-start;
  justify-content: space-between;
`,D=s.a`
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
`})))()}var k,A,j;function M(){return(M=e((()=>{k=n(),r(),l(),i(),p(),h(),_(),S(),O(),A=u(),j=({formUrl:e,description:t})=>{let n=y(g),[r,i]=(0,k.useState)(!1),s=n&&!r;return(0,A.jsx)(w,{"aria-label":`Обратная связь`,children:s?(0,A.jsxs)(T,{children:[(0,A.jsxs)(E,{children:[(0,A.jsx)(a,{variant:`h6`,component:`p`,children:`Оставьте, пожалуйста, обратную связь`}),(0,A.jsx)(o,{variant:`text`,size:`medium`,"aria-label":`Свернуть`,onClick:()=>i(!0),children:(0,A.jsx)(f,{})})]}),(0,A.jsx)(a,{color:`grey`,colorIntensity:`700`,children:t}),(0,A.jsx)(c,{component:`a`,href:e,target:`_blank`,rel:`noopener noreferrer`,children:`Оставить отзыв`})]}):(0,A.jsxs)(D,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:[(0,A.jsx)(m,{}),`Обратная связь`]})})};try{j.displayName=`FeedbackWidget`,j.__docgenInfo={description:``,displayName:`FeedbackWidget`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,methods:[],props:{formUrl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,name:`TypeLiteral`}],description:`Ссылка на форму обратной связи`,name:`formUrl`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/docs/reports/FeedbackWidget/FeedbackWidget.tsx`,name:`TypeLiteral`}],description:`Текст-пояснение под заголовком, свой для каждого отчёта`,name:`description`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function N(){return(N=e((()=>{M()})))()}export{j as n,M as r,N as t};