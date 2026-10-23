import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Dn as t,Fi as n,On as r,Xt as i,cn as a,dt as o,en as s,ft as c,ht as l,ji as u,ln as ee,mn as te,mt as ne,pn as re,ya as d,yn as f,za as p}from"./preview-CiiswFkd.js";import{t as ie}from"./Chevron-T1GsfXYz.js";import{t as ae}from"./Chevron-BoQmVycp.js";import{n as oe,t as se}from"./getInertProps-Dz5o8N7x.js";var m;function h(){return(h=e((()=>{r(),m={root:t(`expansion-panel`),summary:t(`expansion-panel__summary`),details:t(`expansion-panel__details`),open:t(`expansion-panel_open`),animation:t(`expansion-panel_animation`)}})))()}var g;function _(){return(_=e((()=>{f(),g=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 72px;
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 80px;
  }
`})))()}var v,y;function ce(){return(ce=e((()=>{a(),o(),_(),v=d(),y=e=>{let{errorMsg:t=`Не удалось загрузить данные`,onRetry:n}=e;return(0,v.jsxs)(g,{children:[(0,v.jsx)(c,{color:`textSecondary`,children:t}),(0,v.jsx)(ee,{variant:`light`,onClick:n,children:`Повторить попытку`})]})};try{y.displayName=`ErrorState`,y.__docgenInfo={description:``,displayName:`ErrorState`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,methods:[],props:{errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function le(){return(le=e((()=>{ce()})))()}var ue;function b(){return(b=e((()=>{f(),ue=u.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 72px;
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 80px;
  }
`})))()}var x,S;function C(){return(C=e((()=>{re(),b(),x=d(),S=()=>(0,x.jsx)(ue,{children:(0,x.jsx)(te,{})})})))()}function w(){return(w=e((()=>{C()})))()}var T,E,D,O;function k(){return(k=e((()=>{f(),h(),T=n`
  0% {
    max-height: 0;
  }

  100% {
    max-height: var(--details-height);
  }
`,E=n`
  0% {
    max-height: var(--details-height);
  }

  100% {
    max-height: 0;
  }
`,D=u.div`
  position: relative;

  width: 100%;

  .${m.root} & {
    overflow: hidden;

    max-height: 0;

    animation: ${E} var(--animation-duration);
  }

  .${m.root}.${m.open} & {
    max-height: none;

    animation: ${T} var(--animation-duration);
  }

  .${m.root}.${m.open}.${m.animation}
    & {
    max-height: var(--details-height);
  }
`,O=u.div`
  overflow: hidden;
  display: flex;

  padding: ${({theme:e})=>e.spacing(1,3,3,3)};
`})))()}var A,j;function M(){return(M=e((()=>{h(),le(),w(),k(),A=d(),j=e=>{let{children:t,isLoading:n,isError:r,errorMsg:i,onRetry:a}=e,o=!n&&!r;return(0,A.jsx)(D,{className:m.details,children:(0,A.jsxs)(O,{children:[n&&(0,A.jsx)(S,{}),r&&(0,A.jsx)(y,{errorMsg:i,onRetry:a}),o&&t]})})};try{j.displayName=`Details`,j.__docgenInfo={description:``,displayName:`Details`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг ошибки обработки данных`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить попытку"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function N(){return(N=e((()=>{M()})))()}var P,F;function I(){return(I=e((()=>{P=p(),F=(0,P.createContext)({isDisabled:!1,isOpen:!1});try{F.displayName=`ExpansionPanelContext`,F.__docgenInfo={description:``,displayName:`ExpansionPanelContext`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var L,R;function z(){return(z=e((()=>{I(),L=d(),R=({children:e,isDisabled:t,isOpen:n})=>(0,L.jsx)(F.Provider,{value:{isDisabled:t,isOpen:n},children:e});try{R.displayName=`ExpansionPanelContextProvider`,R.__docgenInfo={description:``,displayName:`ExpansionPanelContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContextProvider/ExpansionPanelContextProvider.tsx`,methods:[],props:{isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!0,tags:{},type:{name:`boolean`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,name:`TypeLiteral`}],description:``,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContextProvider/ExpansionPanelContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function de(){return(de=e((()=>{z()})))()}function B(){return(B=e((()=>{I(),de()})))()}var V,H,U,W;function G(){return(G=e((()=>{ae(),i(),f(),V=(e,t,n)=>t?e.palette.grey[100]:n?e.palette.background.element:e.palette.background.default,H=u(`summary`,{shouldForwardProp:e=>![`$isDisabled`,`$isSelected`].includes(e)})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 64px;

  opacity: ${({$isDisabled:e})=>e?.5:1};
  background: ${({theme:e,$isDisabled:t,$isSelected:n})=>V(e,t,n)};

  transition: ${({theme:e})=>e.transitions.create([`background-color`],{duration:e.transitions.duration.standard})};

  ${s} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  &:focus-visible {
    outline: unset;
  }
`,U=u.span`
  padding: ${({theme:e})=>e.spacing(3,2,3,3)};
`,W=u(ie)`
  width: 20px;
  height: 20px;
  margin-right: ${({theme:e})=>e.spacing(3)};
`})))()}var K,q,J;function fe(){return(fe=e((()=>{K=p(),se(),h(),B(),G(),q=d(),J=({children:e})=>{let{isDisabled:t,isOpen:n}=(0,K.useContext)(F);return(0,q.jsxs)(H,{$isSelected:n,$isDisabled:t,...oe(t),className:m.summary,children:[(0,q.jsx)(U,{children:e}),(0,q.jsx)(W,{isActive:n})]})};try{J.displayName=`Summary`,J.__docgenInfo={description:``,displayName:`Summary`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function pe(){return(pe=e((()=>{fe()})))()}var me;function he(){return(he=e((()=>{f(),h(),me=u(`details`)`
  --animation-duration: ${({theme:e})=>e.transitions.duration.standard}ms;
  overflow: hidden;

  width: 100%;
  
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
  
  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${m.summary}:focus-visible) {
    border-radius: ${({theme:e})=>e.shape.medium};
    outline: 2px solid ${({theme:e})=>e.palette.components.focused};
    outline-offset: -1px;
  }
`})))()}var Y,ge;function X(){return(X=e((()=>{Y=p(),ne(),h(),ge=({isInitialExpanded:e=!1,isDisabled:t=!1})=>{let n=(0,Y.useRef)(null),[r,i]=(0,Y.useState)(e),[a,o]=(0,Y.useState)(!1),s=!t&&e,c=l();return(0,Y.useLayoutEffect)(()=>{let t=n.current;if(t){let n=t.querySelector(`.${m.summary}`),r=t.querySelector(`.${m.details}`),s=()=>{r.style.setProperty(`--details-height`,`${r.scrollHeight}px`)};e&&t.classList.add(`${m.open}`);let l=e=>{s(),o(!0),t.classList.toggle(`${m.open}`),t.classList.add(`${m.animation}`),setTimeout(()=>{t.classList.remove(`${m.animation}`)},c.transitions.duration.standard),t.classList.contains(`${m.open}`)?i(!0):i(!1),t.open&&(e.preventDefault(),a&&setTimeout(()=>{t.open=!1,o(!1)},c.transitions.duration.standard))};return n.addEventListener(`click`,l),()=>{n.removeEventListener(`click`,l)}}return()=>void 0},[]),{ref:n,isOpen:r,isInitialOpenEnabled:s}}})))()}function _e(){return(_e=e((()=>{X()})))()}var Z,Q;function $(){return($=e((()=>{h(),N(),B(),pe(),he(),_e(),Z=d(),Q=e=>{let{ref:t,isOpen:n,isInitialOpenEnabled:r}=ge(e),{children:i,isDisabled:a=!1}=e;return(0,Z.jsx)(R,{isOpen:n,isDisabled:a,children:(0,Z.jsx)(me,{ref:t,open:r,className:m.root,children:i})})},Q.Summary=J,Q.Details=j;try{Q.displayName=`ExpansionPanel`,Q.__docgenInfo={description:``,displayName:`ExpansionPanel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:`Элементы ExpansionPanel.Summary и ExpansionPanel.Details`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:"Если `true`, содержимое Details будет раскрыто по умолчанию",name:`isInitialExpanded`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:"Если `true`, компонент будет не доступен для взаимодействия",name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{Q.Summary.displayName=`ExpansionPanel.Summary`,Q.Summary.__docgenInfo={description:``,displayName:`ExpansionPanel.Summary`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{Q.Details.displayName=`ExpansionPanel.Details`,Q.Details.__docgenInfo={description:``,displayName:`ExpansionPanel.Details`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг ошибки обработки данных`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить попытку"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{$ as n,h as r,Q as t};