import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Fi as t,Va as n,dt as r,ft as i,ji as a,mn as o,pn as s,xa as c,yn as l}from"./preview-BexmKZ07.js";import{t as u}from"./ContentState-BtSQ6c24.js";import{t as d}from"./ContentState-Ck0IsDq1.js";var f,p,m,h,g;function _(){return(_=e((()=>{f=1400,p=2100,m=3500,h=.2,p*h,g=`astralui-session`})))()}var v,y;function b(){return(b=e((()=>{v=n(),_(),y=({isSuccess:e=!1,isLoading:t,isError:n})=>{let[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{let r=!!sessionStorage.getItem(g);if(e&&!t&&!n){if(r)c(!0);else{sessionStorage.setItem(g,`true`),o(!0);let e=setTimeout(()=>{o(!1),c(!0)},m);return()=>clearTimeout(e)}}},[e,t,n]),(0,v.useEffect)(()=>{let e=setTimeout(()=>{i(!0)},300);return()=>clearTimeout(e)},[]),{isShowLoader:r,isShowGreetings:a,isShowContent:s}}})))()}function x(){return(x=e((()=>{b()})))()}function S(){return(S=e((()=>{x()})))()}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{l(),r(),_(),C=(e,t)=>`
  from {
    opacity: 0;
  }
  ${e} {
    opacity: 1;
  }
  ${t} {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,w=t`${C(`30%`,`60%`)}`,T=t`${C(`20%`,`90%`)}`,E=t`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,D=a.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  /* Причина игнора: Прогрессивное улучшение */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  /* stylelint-enable plugin/no-unsupported-browser-features */

  opacity: 0;
  background-color: ${({theme:e})=>e.palette.background.paper};

  animation: ${w} ${f}ms linear;
  animation-fill-mode: both;
`,O=a.div`
  position: absolute;
  top: 0;

  display: grid;
  grid-template-rows: max-content 1fr;
  gap: ${({theme:e})=>e.spacing(10)};

  width: 100%;
  height: 100%;
  padding: ${({theme:e})=>e.spacing(10,7)};

  opacity: 0;
  background-color: ${({theme:e})=>e.palette.background.paper};

  animation: ${T} ${p}ms linear;
  animation-fill-mode: both;
  animation-delay: ${f}ms;
`,k=a.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  font-size: ${({theme:e})=>e.typography.pxToRem(20)};

  svg {
    width: 48px;
    height: 48px;
  }
`,A=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,j=a(i)`
  margin-top: -50%;

  font-size: ${({theme:e})=>e.typography.pxToRem(24)};
  line-height: ${({theme:e})=>e.typography.pxToRem(28)};

  opacity: 0;

  animation: ${E} ${420}ms
    linear;
  animation-fill-mode: both;
  animation-delay: ${f+420}ms;
`,M=a(i)`
  font-size: ${({theme:e})=>e.typography.pxToRem(28)};
  line-height: ${({theme:e})=>e.typography.pxToRem(32)};

  opacity: 0;

  animation: ${E} ${420}ms
    linear;
  animation-fill-mode: both;
  animation-delay: ${f+840}ms;
`})))()}var P,F;function I(){return(I=e((()=>{d(),s(),S(),N(),P=c(),F=({logo:e,productName:t,userName:n,errorMsg:r,isSuccess:i,isLoading:a,isError:s,children:c,onRetry:l})=>{let{isShowLoader:d,isShowGreetings:f,isShowContent:p}=y({isSuccess:i,isLoading:a,isError:s});return(0,P.jsxs)(u,{isLoading:a,isError:s,loadingContent:d?(0,P.jsx)(o,{}):(0,P.jsx)(P.Fragment,{}),errorState:{errorList:[r||``],onRetry:l},children:[f&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D,{children:(0,P.jsxs)(k,{children:[e,t]})}),(0,P.jsxs)(O,{children:[(0,P.jsxs)(k,{children:[e,t]}),(0,P.jsxs)(A,{children:[(0,P.jsxs)(j,{variant:`h2`,color:`grey`,colorIntensity:`500`,children:[`Добро пожаловать`,n?`,`:``]}),n&&(0,P.jsx)(M,{variant:`h1`,color:`textSecondary`,children:n})]})]})]}),p&&(0,P.jsx)(P.Fragment,{children:c})]})};try{F.displayName=`WelcomeScreen`,F.__docgenInfo={description:``,displayName:`WelcomeScreen`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,methods:[],props:{logo:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Логотип продукта`,name:`logo`,required:!1,tags:{},type:{name:`ReactNode`}},productName:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Название продукта`,name:`productName`,required:!1,tags:{},type:{name:`string`}},userName:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Имя пользователя`,name:`userName`,required:!1,tags:{},type:{name:`string`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},isSuccess:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Флаг наличия данных`,name:`isSuccess`,required:!0,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Содержимое компонента, отображению которого должно предшествовать приветствие
В большинстве случаев это должен быть DashboardLayout`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/WelcomeScreen/WelcomeScreen.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"
Должна инициализировать повторный запрос данных`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{I as n,F as t};