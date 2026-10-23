import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,On as r,ba as i,ji as a,wn as o,ya as s,yn as c,za as l}from"./preview-CdUppftE.js";import{G as ee,J as u,K as d,U as te,W as ne,ct as re,lt as f,q as ie,ut as p}from"./DataGrid-C2l7Nh0I.js";import{n as m,t as ae}from"./isDeepEqual-CMbNuk6m.js";import{n as oe,t as h}from"./isBrowser-CqlMecsi.js";import{n as g}from"./useLocalStorage-IDw60YhT.js";import{o as _}from"./PinButton-CyvU_rEZ.js";import{a as v,i as y}from"./PagePinnableAside-Clffg9kn.js";var se;function b(){return(b=e((()=>{se=e=>JSON.stringify(e.map(({field:e})=>e===void 0?null:String(e)))})))()}var ce;function x(){return(x=e((()=>{ce=(e,t)=>`${e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}:${t}`})))()}var S,C;function w(){return(w=e((()=>{r(),S=`resize`,C={handle:n(`data-grid__resize-handle`),handleActive:n(`data-grid__resize-handle_active`)}})))()}var T;function E(){return(E=e((()=>{ee(),T=e=>{e.forEach((e,t)=>{if(d(e))throw Error(`DataGrid: ResizePlugin не поддерживает группировку колонок`);if(e.pinned)throw Error(`DataGrid: ResizePlugin не поддерживает pinned-колонки`);if(!(e.minWidth&&Number.parseFloat(e.minWidth)>0))throw Error(e.field===void 0?`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке с индексом ${t}`:`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке "${String(e.field)}"`)})}})))()}var D;function O(){return(O=e((()=>{p(),D=e=>e.map(({field:e})=>e===re)})))()}function k(){return(k=e((()=>{O()})))()}var A;function j(){return(j=e((()=>{A=e=>{let t=e.reduce((e,t)=>e+t,0);return t===0?e.map(()=>1/e.length):e.map(e=>e/t)}})))()}var M;function N(){return(N=e((()=>{M=e=>{let t=0;return e.slice(0,-1).map(e=>(t+=e,t))}})))()}var P;function F(){return(F=e((()=>{P=e=>e.map(({minWidth:e})=>e?Number.parseFloat(e):0)})))()}var I;function L(){return(L=e((()=>{I=({widthsList:e,minWidthsList:t,fixedTracksList:n=[]})=>{let r=Math.min(...e.filter((e,t)=>n[t]===void 0));return e.map((e,i)=>n[i]??`minmax(${t[i]}px, ${e/r}fr)`).join(` `)}})))()}var R;function z(){return(z=e((()=>{v(),R=(e,t)=>y(`DataGrid`,`${e}:${t}`)})))()}var B;function V(){return(V=e((()=>{B=e=>e.split(` `).filter(Boolean).map(e=>Number.parseFloat(e))})))()}var H,U;function W(){return(W=e((()=>{H=e=>{try{return JSON.parse(e)}catch{return}},U=({value:e,signature:t,columnsCount:n})=>{if(e===null)return;let r=H(e);if(r?.signature!==t)return;let{fractions:i}=r;return Array.isArray(i)&&i.length===n&&i.every(e=>Number.isFinite(e)&&e>0)?i:void 0}})))()}var G;function le(){return(le=e((()=>{G=({widthsList:e,minWidthsList:t,index:n,delta:r})=>{let i=n,a=n+1,o=Math.min(0,t[i]-e[i]),s=Math.max(0,e[a]-t[a]),c=Math.min(Math.max(r,o),s);return e.map((e,t)=>t===i?e+c:t===a?e-c:e)}})))()}function K(){return(K=e((()=>{E(),k(),j(),N(),F(),L(),z(),V(),W(),le()})))()}var ue,de;function fe(){return(fe=e((()=>{ue=l(),_(),w(),K(),de=({tableId:e,signature:t,columnsCount:n})=>{let[r,i]=g(R(e,S),void 0,{raw:!0});return{savedFractionsList:(0,ue.useMemo)(()=>U({value:r??null,signature:t,columnsCount:n}),[r,t,n]),saveFractions:e=>{i(JSON.stringify({signature:t,fractions:e}))}}}})))()}function pe(){return(pe=e((()=>{fe()})))()}var q,me;function he(){return(he=e((()=>{q=l(),ae(),K(),me=({headRef:e,gridColumns:t})=>{let[n,r]=(0,q.useState)([]),i=(0,q.useCallback)(()=>e.current?B(getComputedStyle(e.current).gridTemplateColumns):[],[e]),a=(0,q.useCallback)(()=>{let e=i();r(t=>m(t,e)?t:e)},[i]);return(0,q.useLayoutEffect)(a,[a,t]),(0,q.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(a);return t.observe(e.current),()=>t.disconnect()},[e,a]),{widthsList:n,measureWidths:i,updateWidths:a}}})))()}function ge(){return(ge=e((()=>{he()})))()}function _e(){return(_e=e((()=>{pe(),ge()})))()}var J,ve,ye;function be(){return(be=e((()=>{J=l(),ve=i(),h(),x(),b(),ne(),u(),K(),_e(),ye=({columns:e,tableId:t,headRef:n,onGridColumnsChange:r})=>{let i=(0,J.useMemo)(()=>te(e),[e]),a=(0,J.useMemo)(()=>P(i),[i]),o=(0,J.useMemo)(()=>ie(i),[i]),s=(0,J.useMemo)(()=>D(i),[i]),c=(0,J.useMemo)(()=>i.map((e,t)=>s[t]?ie([e]):void 0),[i,s]),l=(0,J.useMemo)(()=>se(i),[i]),ee=t||ce(oe?window.location.pathname:``,l),{savedFractionsList:u,saveFractions:d}=de({tableId:ee,signature:l,columnsCount:i.length}),{widthsList:ne,measureWidths:re,updateWidths:f}=me({headRef:n,gridColumns:o}),[p,m]=(0,J.useState)(),[ae,h]=(0,J.useState)(),g=(0,J.useRef)(void 0),_=(0,J.useRef)(void 0),v=e=>r(I({widthsList:e,minWidthsList:a,fixedTracksList:c})),y=()=>{u?v(u):r(void 0),f()};(0,J.useLayoutEffect)(y,[u,o]),(0,J.useLayoutEffect)(()=>()=>{_.current&&cancelAnimationFrame(_.current),r(void 0)},[]);let b=()=>{_.current&&=(cancelAnimationFrame(_.current),void 0)},x=()=>{b(),g.current=void 0,m(void 0),h(void 0)},S=e=>t=>{t.button===0&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),g.current={index:e,startX:t.clientX,startWidthsList:re()},m(e))},C=e=>{let t=g.current;if(t){if(e.buttons===0){w();return}t.latestWidthsList=G({widthsList:t.startWidthsList,minWidthsList:a,index:t.index,delta:e.clientX-t.startX}),_.current||=requestAnimationFrame(()=>{_.current=void 0;let e=g.current?.latestWidthsList;e&&(v(e),(0,ve.flushSync)(()=>h(e)))})}},w=()=>{let e=g.current?.latestWidthsList;if(x(),!e)return;let t=A(e);v(t),f(),d(t)},T=()=>{x(),y()},E=(0,J.useRef)({handlePointerMove:C,handlePointerUp:w,handlePointerCancel:T});E.current={handlePointerMove:C,handlePointerUp:w,handlePointerCancel:T};let O=p!==void 0;return(0,J.useEffect)(()=>{if(!O)return;let e=e=>E.current.handlePointerMove(e),t=()=>E.current.handlePointerUp(),n=()=>E.current.handlePointerCancel();return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,n),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,n)}},[O]),{handlesList:M(ae??ne).map((e,t)=>({offset:e,isActive:p===t,onPointerDown:S(t)})).filter((e,t)=>!s[t]&&!s[t+1])}}})))()}function xe(){return(xe=e((()=>{be()})))()}function Se(){return(Se=e((()=>{xe()})))()}var Y,Ce;function X(){return(X=e((()=>{c(),p(),w(),Y=8,Ce=a.div`
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

  &.${C.handleActive}::after {
    height: 30px;

    background-color: ${({theme:e})=>e.palette.primary.main};
  }

  /* В таблице с сеткой полоской служит линия сетки в шапке: отдельная полоска не рисуется, при drag линия становится синей */
  .${f.gridViewFull} & {
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

    &.${C.handleActive}::after {
      background-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`})))()}var Z,we,Q;function Te(){return(Te=e((()=>{o(),w(),Se(),X(),Z=s(),we=t(C.handle,{variants:{isActive:{true:C.handleActive}}}),Q=e=>{let{handlesList:t}=ye(e);return(0,Z.jsx)(Z.Fragment,{children:t.map(({offset:e,isActive:t,...n},r)=>(0,Z.jsx)(Ce,{role:`separator`,"aria-orientation":`vertical`,className:we({isActive:t}),style:{"--offset":`${e}px`},...n},r))})};try{Q.displayName=`ResizeHeadAddon`,Q.__docgenInfo={description:`Полоски drag и логика изменения ширины колонок в шапке таблицы`,displayName:`ResizeHeadAddon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/ResizeHeadAddon/ResizeHeadAddon.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Колонки таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Id таблицы, заданный продуктом. Если не задан, формируется автоматически из pathname и набора колонок`,name:`tableId`,required:!1,tags:{},type:{name:`string`}},headRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Ref шапки таблицы, нужен для измерения ширины колонок`,name:`headRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},onGridColumnsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:"Применяет `grid-template-columns` шапки, строк и вложенных строк.\nundefined возвращает таблице ее собственный `grid-template-columns`",name:`onGridColumnsChange`,required:!0,tags:{},type:{name:`(gridColumns: string) => void`}}},tags:{}}}catch{}})))()}function Ee(){return(Ee=e((()=>{Te()})))()}var De;function $(){return($=e((()=>{w(),Ee(),K(),De={id:S,HeadAddon:Q,assertConfig:T}})))()}function Oe(){return(Oe=e((()=>{$()})))()}export{De as n,$ as r,Oe as t};