import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Dn as t,Fi as n,On as r,Va as i,Xt as a,cn as o,dt as s,en as c,ft as l,ht as ee,ji as u,ln as te,mn as ne,mt as re,pn as ie,xa as d,yn as f}from"./preview-DREXElCf.js";import{t as ae}from"./Chevron-Cv-_GejD.js";import{t as oe}from"./Chevron-B7Z__Gia.js";import{n as se,t as ce}from"./getInertProps-DjNzvFQW.js";var p;function m(){return(m=e((()=>{r(),p={root:t(`expansion-panel`),summary:t(`expansion-panel__summary`),details:t(`expansion-panel__details`),open:t(`expansion-panel_open`),animation:t(`expansion-panel_animation`)}})))()}var h;function g(){return(g=e((()=>{f(),h=u.div`
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
`})))()}var _,v;function le(){return(le=e((()=>{o(),s(),g(),_=d(),v=e=>{let{errorMsg:t=`Не удалось загрузить данные`,onRetry:n}=e;return(0,_.jsxs)(h,{children:[(0,_.jsx)(l,{color:`textSecondary`,children:t}),(0,_.jsx)(te,{variant:`light`,onClick:n,children:`Повторить попытку`})]})};try{v.displayName=`ErrorState`,v.__docgenInfo={description:``,displayName:`ErrorState`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,methods:[],props:{errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/ErrorState/ErrorState.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function ue(){return(ue=e((()=>{le()})))()}var de;function y(){return(y=e((()=>{f(),de=u.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 72px;
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 80px;
  }
`})))()}var b,x;function S(){return(S=e((()=>{ie(),y(),b=d(),x=()=>(0,b.jsx)(de,{children:(0,b.jsx)(ne,{})})})))()}function C(){return(C=e((()=>{S()})))()}var w,T,E,D;function O(){return(O=e((()=>{f(),m(),w=n`
  0% {
    max-height: 0;
  }

  100% {
    max-height: var(--details-height);
  }
`,T=n`
  0% {
    max-height: var(--details-height);
  }

  100% {
    max-height: 0;
  }
`,E=u.div`
  position: relative;

  width: 100%;

  .${p.root} & {
    overflow: hidden;

    max-height: 0;

    animation: ${T} var(--animation-duration);
  }

  .${p.root}.${p.open} & {
    max-height: none;

    animation: ${w} var(--animation-duration);
  }

  .${p.root}.${p.open}.${p.animation}
    & {
    max-height: var(--details-height);
  }
`,D=u.div`
  overflow: hidden;
  display: flex;

  padding: ${({theme:e})=>e.spacing(1,3,3,3)};
`})))()}var k,A;function j(){return(j=e((()=>{m(),ue(),C(),O(),k=d(),A=e=>{let{children:t,isLoading:n,isError:r,errorMsg:i,onRetry:a}=e,o=!n&&!r;return(0,k.jsx)(E,{className:p.details,children:(0,k.jsxs)(D,{children:[n&&(0,k.jsx)(x,{}),r&&(0,k.jsx)(v,{errorMsg:i,onRetry:a}),o&&t]})})};try{A.displayName=`Details`,A.__docgenInfo={description:``,displayName:`Details`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг ошибки обработки данных`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить попытку"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function M(){return(M=e((()=>{j()})))()}var N,P;function F(){return(F=e((()=>{N=i(),P=(0,N.createContext)({isDisabled:!1,isOpen:!1});try{P.displayName=`ExpansionPanelContext`,P.__docgenInfo={description:``,displayName:`ExpansionPanelContext`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L;function R(){return(R=e((()=>{F(),I=d(),L=({children:e,isDisabled:t,isOpen:n})=>(0,I.jsx)(P.Provider,{value:{isDisabled:t,isOpen:n},children:e});try{L.displayName=`ExpansionPanelContextProvider`,L.__docgenInfo={description:``,displayName:`ExpansionPanelContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContextProvider/ExpansionPanelContextProvider.tsx`,methods:[],props:{isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!0,tags:{},type:{name:`boolean`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContext.tsx`,name:`TypeLiteral`}],description:``,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanelContext/ExpansionPanelContextProvider/ExpansionPanelContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{R()})))()}function B(){return(B=e((()=>{F(),z()})))()}var V,H,U,W;function G(){return(G=e((()=>{oe(),a(),f(),V=(e,t,n)=>t?e.palette.grey[100]:n?e.palette.background.element:e.palette.background.default,H=u(`summary`,{shouldForwardProp:e=>![`$isDisabled`,`$isSelected`].includes(e)})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 64px;

  opacity: ${({$isDisabled:e})=>e?.5:1};
  background: ${({theme:e,$isDisabled:t,$isSelected:n})=>V(e,t,n)};

  transition: ${({theme:e})=>e.transitions.create([`background-color`],{duration:e.transitions.duration.standard})};

  ${c} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  &:focus-visible {
    outline: unset;
  }
`,U=u.span`
  padding: ${({theme:e})=>e.spacing(3,2,3,3)};
`,W=u(ae)`
  width: 20px;
  height: 20px;
  margin-right: ${({theme:e})=>e.spacing(3)};
`})))()}var K,q,J;function Y(){return(Y=e((()=>{K=i(),ce(),m(),B(),G(),q=d(),J=({children:e})=>{let{isDisabled:t,isOpen:n}=(0,K.useContext)(P);return(0,q.jsxs)(H,{$isSelected:n,$isDisabled:t,...se(t),className:p.summary,children:[(0,q.jsx)(U,{children:e}),(0,q.jsx)(W,{isActive:n})]})};try{J.displayName=`Summary`,J.__docgenInfo={description:``,displayName:`Summary`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function fe(){return(fe=e((()=>{Y()})))()}var pe;function me(){return(me=e((()=>{f(),m(),pe=u(`details`)`
  --animation-duration: ${({theme:e})=>e.transitions.duration.standard}ms;
  overflow: hidden;

  width: 100%;
  
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};
  
  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${p.summary}:focus-visible) {
    border-radius: ${({theme:e})=>e.shape.medium};
    outline: 2px solid ${({theme:e})=>e.palette.components.focused};
    outline-offset: -1px;
  }
`})))()}var X,he;function Z(){return(Z=e((()=>{X=i(),re(),m(),he=({isInitialExpanded:e=!1,isDisabled:t=!1})=>{let n=(0,X.useRef)(null),[r,i]=(0,X.useState)(e),[a,o]=(0,X.useState)(!1),s=!t&&e,c=ee();return(0,X.useLayoutEffect)(()=>{let t=n.current;if(t){let n=t.querySelector(`.${p.summary}`),r=t.querySelector(`.${p.details}`),s=()=>{r.style.setProperty(`--details-height`,`${r.scrollHeight}px`)};e&&t.classList.add(`${p.open}`);let l=e=>{s(),o(!0),t.classList.toggle(`${p.open}`),t.classList.add(`${p.animation}`),setTimeout(()=>{t.classList.remove(`${p.animation}`)},c.transitions.duration.standard),t.classList.contains(`${p.open}`)?i(!0):i(!1),t.open&&(e.preventDefault(),a&&setTimeout(()=>{t.open=!1,o(!1)},c.transitions.duration.standard))};return n.addEventListener(`click`,l),()=>{n.removeEventListener(`click`,l)}}return()=>void 0},[]),{ref:n,isOpen:r,isInitialOpenEnabled:s}}})))()}function ge(){return(ge=e((()=>{Z()})))()}var Q,$;function _e(){return(_e=e((()=>{m(),M(),B(),fe(),me(),ge(),Q=d(),$=e=>{let{ref:t,isOpen:n,isInitialOpenEnabled:r}=he(e),{children:i,isDisabled:a=!1}=e;return(0,Q.jsx)(L,{isOpen:n,isDisabled:a,children:(0,Q.jsx)(pe,{ref:t,open:r,className:p.root,children:i})})},$.Summary=J,$.Details=A;try{$.displayName=`ExpansionPanel`,$.__docgenInfo={description:``,displayName:`ExpansionPanel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:`Элементы ExpansionPanel.Summary и ExpansionPanel.Details`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:"Если `true`, содержимое Details будет раскрыто по умолчанию",name:`isInitialExpanded`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,name:`TypeLiteral`}],description:"Если `true`, компонент будет не доступен для взаимодействия",name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{$.Summary.displayName=`ExpansionPanel.Summary`,$.Summary.__docgenInfo={description:``,displayName:`ExpansionPanel.Summary`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Summary/Summary.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}try{$.Details.displayName=`ExpansionPanel.Details`,$.Details.__docgenInfo={description:``,displayName:`ExpansionPanel.Details`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/ExpansionPanel.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Флаг ошибки обработки данных`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Сообщение об ошибке`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ExpansionPanel/Details/Details.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить попытку"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{_e as n,m as r,$ as t};