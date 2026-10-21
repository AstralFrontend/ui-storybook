import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,On as r,ji as i,wn as a,ya as o,yn as s,za as c}from"./preview-DtOtDb_i.js";import{G as l,J as ee,K as u,U as te,W as ne,ct as re,lt as ie,q as ae,ut as d}from"./DataGrid-jTWGlSAH.js";import{n as f,t as p}from"./isDeepEqual-DLG0q1aN.js";import{n as oe,t as se}from"./isBrowser-CqlMecsi.js";import{n as m}from"./useLocalStorage-guWCNog2.js";import{o as h}from"./PinButton-tu_4NcvY.js";import{a as g,i as _}from"./PagePinnableAside-D54oWQbf.js";var v;function y(){return(y=e((()=>{v=e=>JSON.stringify(e.map(({field:e})=>e===void 0?null:String(e)))})))()}var ce;function b(){return(b=e((()=>{ce=(e,t)=>`${e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}:${t}`})))()}var x,S;function C(){return(C=e((()=>{r(),x=`resize`,S={handle:n(`data-grid__resize-handle`),handleActive:n(`data-grid__resize-handle_active`)}})))()}var w;function T(){return(T=e((()=>{l(),w=e=>{if(e.some(u))throw Error(`DataGrid: ResizePlugin не поддерживает группировку колонок`);if(e.some(({pinned:e})=>e))throw Error(`DataGrid: ResizePlugin не поддерживает pinned-колонки`);e.forEach((e,t)=>{if(!(u(e)||e.minWidth&&Number.parseFloat(e.minWidth)>0))throw Error(e.field===void 0?`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке с индексом ${t}`:`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке "${String(e.field)}"`)})}})))()}var le;function E(){return(E=e((()=>{d(),le=e=>e.map(({field:e})=>e===re)})))()}function D(){return(D=e((()=>{E()})))()}var O;function k(){return(k=e((()=>{O=e=>{let t=e.reduce((e,t)=>e+t,0);return t===0?e.map(()=>1/e.length):e.map(e=>e/t)}})))()}var A;function j(){return(j=e((()=>{A=e=>{let t=0;return e.slice(0,-1).map(e=>(t+=e,t))}})))()}var M;function N(){return(N=e((()=>{M=e=>e.map(({minWidth:e})=>e?Number.parseFloat(e):0)})))()}var P;function F(){return(F=e((()=>{P=({widthsList:e,minWidthsList:t,fixedTracksList:n=[]})=>{let r=Math.min(...e.filter((e,t)=>n[t]===void 0));return e.map((e,i)=>n[i]??`minmax(${t[i]}px, ${e/r}fr)`).join(` `)}})))()}var I;function L(){return(L=e((()=>{g(),I=(e,t)=>_(`DataGrid`,`${e}:${t}`)})))()}var R;function z(){return(z=e((()=>{R=e=>e.split(` `).filter(Boolean).map(e=>Number.parseFloat(e))})))()}var B,V;function H(){return(H=e((()=>{B=e=>{try{return JSON.parse(e)}catch{return}},V=({value:e,signature:t,columnsCount:n})=>{if(e===null)return;let r=B(e);if(r?.signature!==t)return;let{fractions:i}=r;return Array.isArray(i)&&i.length===n&&i.every(e=>Number.isFinite(e)&&e>0)?i:void 0}})))()}var U;function W(){return(W=e((()=>{U=({widthsList:e,minWidthsList:t,index:n,delta:r})=>{let i=n,a=n+1,o=Math.min(0,t[i]-e[i]),s=Math.max(0,e[a]-t[a]),c=Math.min(Math.max(r,o),s);return e.map((e,t)=>t===i?e+c:t===a?e-c:e)}})))()}function G(){return(G=e((()=>{T(),D(),k(),j(),N(),F(),L(),z(),H(),W()})))()}var K,ue;function de(){return(de=e((()=>{K=c(),h(),C(),G(),ue=({tableId:e,signature:t,columnsCount:n})=>{let[r,i]=m(I(e,x),void 0,{raw:!0});return{savedFractionsList:(0,K.useMemo)(()=>V({value:r??null,signature:t,columnsCount:n}),[r,t,n]),saveFractions:e=>{i(JSON.stringify({signature:t,fractions:e}))}}}})))()}function fe(){return(fe=e((()=>{de()})))()}var q,pe;function me(){return(me=e((()=>{q=c(),p(),G(),pe=({headRef:e,gridColumns:t})=>{let[n,r]=(0,q.useState)([]),i=(0,q.useCallback)(()=>e.current?R(getComputedStyle(e.current).gridTemplateColumns):[],[e]),a=(0,q.useCallback)(()=>{let e=i();r(t=>f(t,e)?t:e)},[i]);return(0,q.useLayoutEffect)(a,[a,t]),(0,q.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(a);return t.observe(e.current),()=>t.disconnect()},[e,a]),{widthsList:n,measureWidths:i,updateWidths:a}}})))()}function he(){return(he=e((()=>{me()})))()}function ge(){return(ge=e((()=>{fe(),he()})))()}var J,_e;function ve(){return(ve=e((()=>{J=c(),se(),b(),y(),ne(),ee(),G(),ge(),_e=({columns:e,tableId:t,headRef:n,onGridColumnsChange:r})=>{let i=(0,J.useMemo)(()=>te(e),[e]),a=(0,J.useMemo)(()=>M(i),[i]),o=(0,J.useMemo)(()=>ae(i),[i]),s=(0,J.useMemo)(()=>le(i),[i]),c=(0,J.useMemo)(()=>i.map((e,t)=>s[t]?ae([e]):void 0),[i,s]),l=(0,J.useMemo)(()=>v(i),[i]),ee=t||ce(oe?window.location.pathname:``,l),{savedFractionsList:u,saveFractions:ne}=ue({tableId:ee,signature:l,columnsCount:i.length}),{widthsList:re,measureWidths:ie,updateWidths:d}=pe({headRef:n,gridColumns:o}),[f,p]=(0,J.useState)(),[se,m]=(0,J.useState)(),h=(0,J.useRef)(void 0),g=(0,J.useRef)(void 0),_=e=>r(P({widthsList:e,minWidthsList:a,fixedTracksList:c})),y=()=>{u?_(u):r(void 0),d()};(0,J.useLayoutEffect)(y,[u,o]),(0,J.useLayoutEffect)(()=>()=>{g.current&&cancelAnimationFrame(g.current),r(void 0)},[]);let b=()=>{g.current&&=(cancelAnimationFrame(g.current),void 0)},x=()=>{b(),h.current=void 0,p(void 0),m(void 0)},S=e=>t=>{t.button===0&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),h.current={index:e,startX:t.clientX,startWidthsList:ie()},p(e))},C=e=>{let t=h.current;if(t){if(e.buttons===0){w();return}t.latestWidthsList=U({widthsList:t.startWidthsList,minWidthsList:a,index:t.index,delta:e.clientX-t.startX}),g.current||=requestAnimationFrame(()=>{g.current=void 0,h.current?.latestWidthsList&&(_(h.current.latestWidthsList),m(h.current.latestWidthsList))})}},w=()=>{let e=h.current?.latestWidthsList;if(x(),!e)return;let t=O(e);_(t),d(),ne(t)},T=()=>{x(),y()},E=(0,J.useRef)({handlePointerMove:C,handlePointerUp:w,handlePointerCancel:T});E.current={handlePointerMove:C,handlePointerUp:w,handlePointerCancel:T};let D=f!==void 0;return(0,J.useEffect)(()=>{if(!D)return;let e=e=>E.current.handlePointerMove(e),t=()=>E.current.handlePointerUp(),n=()=>E.current.handlePointerCancel();return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,n),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,n)}},[D]),{handlesList:A(se??re).map((e,t)=>({offset:e,isActive:f===t,onPointerDown:S(t)})).filter((e,t)=>!s[t]&&!s[t+1])}}})))()}function ye(){return(ye=e((()=>{ve()})))()}function be(){return(be=e((()=>{ye()})))()}var Y,xe;function Se(){return(Se=e((()=>{s(),d(),C(),Y=8,xe=i.div`
  --offset: 0px;

  /* Причина игнора: прогрессивное улучшение. Без touch-action drag пальцем на планшете прокручивает страницу и отменяется через pointercancel */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  touch-action: none;

  /* Причина игнора: на мобильных устройствах resize отключен */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  cursor: col-resize;

  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: calc(var(--offset) - ${Y/2}px);

  width: ${Y}px;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 2px;
    height: 20px;

    background-color: ${({theme:e})=>e.palette.grey[300]};
    border-radius: ${({theme:e})=>e.shape.small};

    transition: ${({theme:e})=>e.transitions.create([`background-color`,`height`],{duration:e.transitions.duration.short})};
  }

  &:hover::after {
    background-color: ${({theme:e})=>e.palette.grey[500]};
  }

  &.${S.handleActive}::after {
    height: 30px;

    background-color: ${({theme:e})=>e.palette.primary.main};
  }

  /* В таблице с сеткой полоской служит линия сетки в шапке: отдельная полоска не рисуется, при drag линия становится синей */
  .${ie.gridViewFull} & {
    &::after {
      transform: translateY(-50%);

      width: 1px;
      height: 100%;

      background-color: transparent;
      border-radius: 0;
    }

    &:hover::after {
      background-color: transparent;
    }

    &.${S.handleActive}::after {
      background-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`})))()}var X,Ce,Z;function we(){return(we=e((()=>{a(),C(),be(),Se(),X=o(),Ce=t(S.handle,{variants:{isActive:{true:S.handleActive}}}),Z=e=>{let{handlesList:t}=_e(e);return(0,X.jsx)(X.Fragment,{children:t.map(({offset:e,isActive:t,...n},r)=>(0,X.jsx)(xe,{role:`separator`,"aria-orientation":`vertical`,className:Ce({isActive:t}),style:{"--offset":`${e}px`},...n},r))})};try{Z.displayName=`ResizeHeadAddon`,Z.__docgenInfo={description:`Полоски drag и логика изменения ширины колонок в шапке таблицы`,displayName:`ResizeHeadAddon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/ResizeHeadAddon/ResizeHeadAddon.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Колонки таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Id таблицы, заданный продуктом. Если не задан, формируется автоматически из pathname и набора колонок`,name:`tableId`,required:!1,tags:{},type:{name:`string`}},headRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Ref шапки таблицы, нужен для измерения ширины колонок`,name:`headRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},onGridColumnsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:"Применяет `grid-template-columns` шапки, строк и вложенных строк.\nundefined возвращает таблице ее собственный `grid-template-columns`",name:`onGridColumnsChange`,required:!0,tags:{},type:{name:`(gridColumns: string) => void`}}},tags:{}}}catch{}})))()}function Q(){return(Q=e((()=>{we()})))()}var Te;function $(){return($=e((()=>{C(),Q(),G(),Te={id:x,HeadAddon:Z,assertConfig:w}})))()}function Ee(){return(Ee=e((()=>{$()})))()}export{Te as n,$ as r,Ee as t};