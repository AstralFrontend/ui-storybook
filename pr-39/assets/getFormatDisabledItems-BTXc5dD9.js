import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Bt as n,Cn as r,Dn as i,Fi as a,Ln as o,On as s,Sn as c,Va as l,Xt as u,cn as d,dt as f,ei as p,en as m,ft as h,gn as g,ht as _,it as v,ji as y,mt as b,rt as x,wn as S,xa as C,yn as w,zt as T}from"./preview-CMfpya93.js";import{n as ee,t as E}from"./useViewportType-D87NSzmL.js";import{o as te,t as ne}from"./Tooltip-Bom7zjf3.js";import{t as re}from"./Collapse-CCwaVoff.js";import{t as ie}from"./Collapse-DwnYnGBZ.js";import{t as ae}from"./Tooltip-5YWHC5R3.js";import{t as oe}from"./OverflowTypography-BhWx8qh3.js";import{t as D}from"./OverflowTypography-K7uX4YFl.js";import{n as O,t as se}from"./ChevronROutlineMd-DPprV0ko.js";import{n as ce,t as le}from"./ChevronLOutlineMd-C54AgvV8.js";import{r as ue}from"./Description-BgAcCXye.js";import{t as de}from"./Description-YOmPrhXI.js";import{r as fe,t as pe}from"./useDelayedUnmount-CkW2Dd_b.js";var k,A,me,j,he,M;function N(){return(N=e((()=>{s(),k=`24px`,A=`72px`,me=`10px`,j=`14px`,he=`bottom-start`,M={item:i(`tree-item`),itemContent:i(`tree-item__content`),note:i(`tree-item__note`),label:i(`tree-item__label`),collapseButton:i(`tree-item__collapse-button`),hasNested:i(`tree-item_has-nested`),open:i(`tree-item_open`),disabled:i(`tree-item_disabled`),selected:i(`tree-item_selected`),notBlockingExpandList:i(`tree-item_not-blocking-expand-list`)}})))()}var P;function F(){return(F=e((()=>{s(),P={root:i(`tree-item__mobile-panel`),nested:i(`tree-item__mobile-panel_nested`),content:i(`tree-item__mobile-panel-content`),header:i(`tree-item__mobile-header`),headerParent:i(`tree-item__mobile-header-parent`),headerControl:i(`tree-item__mobile-header-control`),headerAdditionalContent:i(`tree-item__mobile-header-additional-content`),backButton:i(`tree-item__mobile-back-button`),slidePanel:i(`tree-item__slide-panel`)}})))()}var ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe;function ke(){return(ke=e((()=>{d(),x(),D(),g(),w(),f(),N(),F(),ge=a`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`,_e=a`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`,ve=y.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: fixed;
    z-index: 1;
    inset: 0;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    &.${P.nested} {
      position: absolute;
    }
  }
`,ye=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-color: ${({theme:e})=>e.palette.background.default};

    animation: ${_e} ${({theme:e})=>e.transitions.duration.standard}ms
      ${({theme:e})=>e.transitions.easing.easeInOut} forwards;

    &.${M.open} {
      animation: ${ge} ${({theme:e})=>e.transitions.duration.standard}ms
        ${({theme:e})=>e.transitions.easing.easeInOut} forwards;
    }
  }
`,be=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;

    display: flex;
    align-items: center;

    padding: ${({theme:e})=>e.spacing(3,4,3,11)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    &.${M.selected} {
      background-color: ${({theme:e})=>e.palette.primary[100]};
    }

    &.${M.disabled} {
      color: ${({theme:e})=>e.palette.text.disabled};
    }
  }
`,xe=y(v)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: ${A};
    height: auto;
    padding: ${({theme:e})=>e.microSpacing(0,16,0,3)};

    color: inherit;

    border-radius: 0;

    &.${o.root} {
      width: ${A};
      height: auto;
    }

    &.${o.root} .${c.root} {
      width: ${k};
      height: ${k};
    }
    
    &:active {
      background-color: transparent;
    } 
  }
`,Se=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;

    min-width: 0;
    min-height: 24px;

    &.${M.disabled} {
      cursor: default;
    }
  }
`,Ce=y(h)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.microSpacing(1,0)};
  }
`,we=y(oe)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: ${({theme:e})=>e.spacing(1)};
  }
`,Te=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-shrink: 0;
    align-items: center;

    margin-left: ${({theme:e})=>e.spacing(2)};
  }
`,Ee=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;
    transform: translateZ(0);

    flex-grow: 1;

    min-height: 0;

    background: ${({theme:e})=>e.palette.background.default};
  }
`,De=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-shrink: 0;
  }
`,Oe=y.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;

    overflow-y: auto;

    height: 100%;
  }
`})))()}var Ae,I;function L(){return(L=e((()=>{Ae=l(),I=(0,Ae.createContext)(null)})))()}var je,Me,R;function Ne(){return(Ne=e((()=>{je=l(),L(),Me=C(),R=({children:e,register:t,closeTop:n,setHeader:r,removeHeader:i})=>{let a=(0,je.useMemo)(()=>({register:t,closeTop:n,setHeader:r,removeHeader:i}),[t,n,r,i]);return(0,Me.jsx)(I.Provider,{value:a,children:e})};try{R.displayName=`MobileSlidePanelContextProvider`,R.__docgenInfo={description:``,displayName:`MobileSlidePanelContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContextProvider/MobileSlidePanelContextProvider.tsx`,methods:[],props:{register:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContext.ts`,name:`TypeLiteral`}],description:``,name:`register`,required:!0,tags:{},type:{name:`(close: (event: MouseEvent<HTMLElement, MouseEvent>) => void) => () => void`}},closeTop:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContext.ts`,name:`TypeLiteral`}],description:``,name:`closeTop`,required:!0,tags:{},type:{name:`(event: MouseEvent<HTMLElement, MouseEvent>) => void`}},setHeader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContext.ts`,name:`TypeLiteral`}],description:``,name:`setHeader`,required:!0,tags:{},type:{name:`(headerId: string, header: MobilePanelHeader) => void`}},removeHeader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContext.ts`,name:`TypeLiteral`}],description:``,name:`removeHeader`,required:!0,tags:{},type:{name:`(headerId: string) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContext/MobileSlidePanelContextProvider/MobileSlidePanelContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Pe(){return(Pe=e((()=>{Ne()})))()}function z(){return(z=e((()=>{L(),Pe()})))()}var B,Fe;function Ie(){return(Ie=e((()=>{B=l(),Fe=({id:e,isOpen:t,activeHeader:n,setHeader:r,removeHeader:i,parentLabel:a,parentNote:o,parentControl:s,parentAdditionalContent:c,isParentSelected:l,isParentDisabled:u,onParentClick:d})=>{let f=(0,B.useMemo)(()=>({parentLabel:a,parentNote:o,parentControl:s,parentAdditionalContent:c,isParentSelected:l,isParentDisabled:u,onParentClick:d}),[a,o,s,c,l,u,d]),p=n??f,{isParentDisabled:m,onParentClick:h}=p,g=e=>{m||h?.(e)};return(0,B.useLayoutEffect)(()=>{!r||!t||r(e,f)},[r,t,e,f]),(0,B.useLayoutEffect)(()=>{if(!(!i||!t))return()=>{i(e)}},[i,t,e]),{...p,handleParentClick:g}}})))()}function Le(){return(Le=e((()=>{Ie()})))()}var V,Re;function ze(){return(ze=e((()=>{V=l(),Re=({isMounted:e,register:t,onClose:n})=>{let r=(0,V.useRef)(n);r.current=n,(0,V.useEffect)(()=>{if(!(!e||!t))return t(e=>{r.current(e)})},[e,t])}})))()}function Be(){return(Be=e((()=>{ze()})))()}function Ve(){return(Ve=e((()=>{Le(),Be()})))()}var He,Ue;function We(){return(We=e((()=>{He=l(),b(),pe(),z(),Ve(),Ue=({id:e,isOpen:t,onClose:n,activeHeader:r,parentLabel:i,parentNote:a,parentControl:o,parentAdditionalContent:s,isParentSelected:c,isParentDisabled:l,onParentClick:u})=>{let{transitions:{duration:{standard:d}}}=_(),{register:f,closeTop:p,setHeader:m,removeHeader:h}=(0,He.useContext)(I)??{},{isMounted:g}=fe({isOpen:t,duration:d});return Re({isMounted:g,register:f,onClose:n}),{isMobileMounted:g,closeTop:p,...Fe({id:e,isOpen:t,activeHeader:r,setHeader:m,removeHeader:h,parentLabel:i,parentNote:a,parentControl:o,parentAdditionalContent:s,isParentSelected:c,isParentDisabled:l,onParentClick:u})}}})))()}function Ge(){return(Ge=e((()=>{We()})))()}var H,Ke,qe,Je,Ye,U;function Xe(){return(Xe=e((()=>{le(),S(),N(),F(),ke(),Ge(),H=C(),Ke=r(P.root,{variants:{hasParentContext:{true:P.nested}}}),qe=r(P.header,{variants:{isSelected:{true:M.selected},isDisabled:{true:M.disabled}}}),Je=r(P.headerParent,{variants:{isDisabled:{true:M.disabled}}}),Ye=r(P.slidePanel,{variants:{isOpen:{true:M.open}}}),U=({isRoot:e=!1,children:t,isOpen:n,...r})=>{let{isMobileMounted:i,closeTop:a,parentLabel:o,parentNote:s,parentControl:c,parentAdditionalContent:l,isParentSelected:u,isParentDisabled:d,handleParentClick:f}=Ue({isOpen:n,...r});return i?(0,H.jsx)(ve,{className:Ke({hasParentContext:!e}),children:(0,H.jsxs)(ye,{className:Ye({isOpen:n}),children:[e&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(be,{className:qe({isSelected:u,isDisabled:d}),children:[(0,H.jsx)(xe,{className:P.backButton,variant:`text`,"aria-label":`Назад`,onClick:a,children:(0,H.jsx)(ce,{})}),(0,H.jsxs)(Se,{className:Je({isDisabled:d}),onClick:f,children:[(0,H.jsx)(Ce,{component:`div`,children:o}),s&&(0,H.jsx)(we,{variant:`caption`,color:`textSecondary`,children:s})]}),c&&(0,H.jsx)(Te,{className:P.headerControl,children:c})]}),l&&(0,H.jsx)(De,{className:P.headerAdditionalContent,children:l})]}),(0,H.jsx)(Ee,{children:(0,H.jsx)(Oe,{children:t})})]})}):null};try{U.displayName=`MobileSlidePanelContent`,U.__docgenInfo={description:``,displayName:`MobileSlidePanelContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContent/MobileSlidePanelContent.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Идентификатор слоя.`,name:`id`,required:!0,tags:{},type:{name:`string`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, панель открыта.",name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Закрывает текущий слой панели.`,name:`onClose`,required:!0,tags:{},type:{name:`(event: MouseEvent<HTMLElement, MouseEvent>) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы дерева, отображаемые внутри панели.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},parentLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Заголовок родителя в шапке.`,name:`parentLabel`,required:!1,tags:{},type:{name:`ReactNode`}},parentNote:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Подзаголовок родителя в шапке.`,name:`parentNote`,required:!1,tags:{},type:{name:`ReactNode`}},parentControl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:``,name:`parentControl`,required:!1,tags:{},type:{name:`ReactNode`}},parentAdditionalContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое под родителем в шапке.`,name:`parentAdditionalContent`,required:!1,tags:{},type:{name:`ReactNode`}},isParentSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, родитель в шапке отображается как выбранный.",name:`isParentSelected`,required:!1,tags:{},type:{name:`boolean`}},isParentDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, клик по родителю в шапке недоступен.",name:`isParentDisabled`,required:!1,tags:{},type:{name:`boolean`}},onParentClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика по родителю в шапке.`,name:`onParentClick`,required:!1,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},isRoot:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContent/types.ts`,name:`TypeLiteral`}],description:`Флаг, указывающий, является ли слой корневым.`,name:`isRoot`,required:!1,tags:{},type:{name:`boolean`}},activeHeader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanelContent/types.ts`,name:`TypeLiteral`}],description:`Заголовок верхнего слоя стека.`,name:`activeHeader`,required:!1,tags:{},type:{name:`MobilePanelHeader`}}},tags:{}}}catch{}})))()}function Ze(){return(Ze=e((()=>{Xe()})))()}var W,Qe;function $e(){return($e=e((()=>{W=l(),Qe=()=>{let e=(0,W.useRef)([]),t=(0,W.useRef)(new Map),n=(0,W.useRef)([]),[r,i]=(0,W.useState)(null);return{register:(0,W.useCallback)(t=>(e.current.push(t),()=>{e.current=e.current.filter(e=>e!==t)}),[]),closeTop:(0,W.useCallback)(t=>{e.current[e.current.length-1]?.(t)},[]),setHeader:(0,W.useCallback)((e,r)=>{let a=!t.current.has(e);t.current.set(e,r),a&&n.current.push(e),n.current[n.current.length-1]===e&&i(r)},[]),removeHeader:(0,W.useCallback)(e=>{t.current.delete(e),n.current=n.current.filter(t=>t!==e);let r=n.current[n.current.length-1];i(r?t.current.get(r)??null:null)},[]),activeHeader:r}}})))()}function et(){return(et=e((()=>{$e()})))()}function tt(){return(tt=e((()=>{et()})))()}var nt,rt;function it(){return(it=e((()=>{nt=l(),z(),tt(),rt=()=>({parentContext:(0,nt.useContext)(I),...Qe()})})))()}function at(){return(at=e((()=>{it()})))()}var G,K;function ot(){return(ot=e((()=>{Ze(),z(),at(),G=C(),K=({onClose:e,...t})=>{let{parentContext:n,register:r,closeTop:i,setHeader:a,removeHeader:o,activeHeader:s}=rt();return n?(0,G.jsx)(U,{onClose:e,...t}):(0,G.jsx)(R,{register:r,closeTop:i,setHeader:a,removeHeader:o,children:(0,G.jsx)(U,{onClose:e,...t,isRoot:!0,activeHeader:s})})};try{K.displayName=`MobileSlidePanel`,K.__docgenInfo={description:``,displayName:`MobileSlidePanel`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/MobileSlidePanel.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Идентификатор слоя.`,name:`id`,required:!0,tags:{},type:{name:`string`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, панель открыта.",name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Закрывает текущий слой панели.`,name:`onClose`,required:!0,tags:{},type:{name:`(event: MouseEvent<HTMLElement, MouseEvent>) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы дерева, отображаемые внутри панели.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},parentLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Заголовок родителя в шапке.`,name:`parentLabel`,required:!1,tags:{},type:{name:`ReactNode`}},parentNote:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Подзаголовок родителя в шапке.`,name:`parentNote`,required:!1,tags:{},type:{name:`ReactNode`}},parentControl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:``,name:`parentControl`,required:!1,tags:{},type:{name:`ReactNode`}},parentAdditionalContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое под родителем в шапке.`,name:`parentAdditionalContent`,required:!1,tags:{},type:{name:`ReactNode`}},isParentSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, родитель в шапке отображается как выбранный.",name:`isParentSelected`,required:!1,tags:{},type:{name:`boolean`}},isParentDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:"Если `true`, клик по родителю в шапке недоступен.",name:`isParentDisabled`,required:!1,tags:{},type:{name:`boolean`}},onParentClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/MobileSlidePanel/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика по родителю в шапке.`,name:`onParentClick`,required:!1,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}}},tags:{}}}catch{}})))()}function st(){return(st=e((()=>{F(),ot()})))()}var q,J,ct,lt,Y,X,ut,dt,ft;function pt(){return(pt=e((()=>{T(),se(),d(),ie(),u(),de(),x(),D(),g(),w(),ae(),f(),N(),q=y(`li`,{shouldForwardProp:e=>![`as`].includes(e)})`
  --tree-item-level: 0;

  position: relative;

  &:not(:last-of-type)::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    transform: translateX(
      calc(
        ((${k} + ${`4px`}) * var(--tree-item-level)) -
          ${j}
      )
    );

    width: 0;
    height: 100%;

    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: static;

    &:not(:last-of-type)::before {
      display: none;
    }
  }
`,J=y(`div`)`
  cursor: pointer;

  position: relative;

  display: flex;

  min-height: 32px;
  padding: ${({theme:e})=>e.spacing(0,4,1,0)};
  padding-left: ${({theme:e})=>`calc(
    var(--tree-item-level) * ${e.spacing(7)} + ${e.spacing(7)}`}
  );

  color: ${({theme:e})=>e.palette.text.primary};

  background-color: transparent;

  transition: ${({theme:e})=>e.transitions.create(`background-color`,{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})};

  ${m} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  &.${M.selected} {
    background-color: ${({theme:e})=>e.palette.primary[100]};

    ${m} {
      &:hover {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }
    }

    &:focus {
      background-color: ${({theme:e})=>e.palette.primary[100]};
    }
  }

  &.${M.disabled} {
    cursor: default;

    color: ${({theme:e})=>e.palette.text.disabled};

    ${m} {
      &:hover {
        background-color: transparent;
      }
    }

    &:focus {
      background-color: transparent;
    }
  }

  &:focus {
    background-color: ${({theme:e})=>e.palette.background.elementHover};
    border: 0;
    outline: 0;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.microSpacing(6,3)};

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

    
    &.${M.hasNested} {
      padding-right: ${({theme:e})=>e.spacing(11)};
    }

    & .${te.contentWrapper} {
      width: 100%;
    }

    &:focus {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }
  }
`,ct=y(v)`
  position: relative;
  z-index: 1;

  width: ${k};
  height: ${k};
  margin-left: -${k};

  color: inherit;

  &.${M.notBlockingExpandList} {
    color: ${({theme:e})=>e.palette.text.primary};
  }

  &.${o.root} {
    width: ${k};
    height: ${k};
  }

  &.${o.root} .${c.root} {
    width: ${k};
    height: ${k};
  }

  ${m} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }

  &.${M.open} .${c.root} {
    transform: rotateZ(90deg);
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;

    width: ${A};
    height: auto;
    margin-left: 0;
    padding: ${({theme:e})=>e.spacing(0,4,0,8)};

    border-radius: 0;

    &.${M.open} .${c.root} {
      transform: rotateZ(0deg);
    }

    &.${o.root} {
      width: ${A};
      height: auto;
    }
  }
`,lt=y(O)`
  transform: rotateZ(0deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    transition: none;
  }
`,Y=y.div`
  position: relative;

  display: flex;
  flex-grow: 1;
  align-items: center;

  padding-top: ${({theme:e})=>e.spacing(1)};

  &::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    left: calc(
      ${j} -
        (${k} + ${`4px`}) * 2
    );

    width: ${me};

    /* Добавляем к высоте половину нижнего отступа, который не входит в высоту текущего элемента */
    height: ${({theme:e})=>`calc(50% + ${e.spacing(1)}/2)`};

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: 0 0 0 ${({theme:e})=>e.shape.small};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: static;

    gap: ${({theme:e})=>e.spacing(1)};
    justify-content: space-between;

    width: 100%;
    padding-top: 0;

    &::before {
      display: none;
    }
  }
`,X=y(h)`
  display: flex;
  align-items: center;

  margin-left: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    order: 1;

    margin-left: 0;
    padding: ${({theme:e})=>e.microSpacing(1,0)};
  }
`,ut=y(oe)`
  margin-left: ${({theme:e})=>e.spacing(1)};

  .${ue.root} {
    .${n.root} {
      font-size: inherit;
      color: inherit;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-left: 0;
  }
`,dt=y.div`
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`,ft=y(re)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var Z,mt;function ht(){return(ht=e((()=>{Z=l(),E(),mt=({id:e,prefixId:t,label:n,note:r,renderItem:i,mobileHeaderLabel:a,mobileHeaderControl:o,mobileHeaderAdditionalContent:s,isDefaultExpanded:c=!1,isForceExpanded:l,isDisabled:u,isSelected:d,disabledReason:f,level:p=0,onClick:m,onMobilePanelOpenChange:h})=>{let{isMobile:g}=ee(),[_,v]=(0,Z.useState)(c),[y,b]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{v(c)},[]),(0,Z.useEffect)(()=>{typeof l==`boolean`&&v(l)},[l]);let x=e=>{if(!u&&(e.type===`click`||e.type===`keydown`&&e.code===`Enter`))return m?.(e)},S=e=>{if(e.stopPropagation(),g){let e=!y;b(e),h?.(e);return}v(e=>!e)},C=e=>{e.stopPropagation(),b(!1),h?.(!1)},w=t?`${t}${e}`:e,T=u?-1:0,E={"--tree-item-level":p},te=(0,Z.useMemo)(()=>a??(i?i({label:n,note:r,id:e}):n),[a,i,n,r,e]);return{isOpen:_,isMobileOpen:y,isMobile:g,handleToggle:S,handleClose:C,handleClick:x,itemCssVars:E,itemProps:{id:w},itemContentProps:{tabIndex:T,onClick:x,onKeyDown:x},tooltipProps:{title:f,withoutContainer:!u,disableInteractive:!0},mobileSlidePanelProps:{id:e,parentLabel:te,parentNote:r,parentControl:o,parentAdditionalContent:s,isParentSelected:d,isParentDisabled:u,onParentClick:m}}}})))()}function gt(){return(gt=e((()=>{ht()})))()}var _t,Q,vt,yt,bt,$;function xt(){return(xt=e((()=>{_t=l(),ae(),p(),S(),N(),st(),pt(),gt(),Q=C(),vt=r(M.item,{variants:{isOpen:{true:M.open}}}),yt=r(M.itemContent,{variants:{isSelected:{true:M.selected},isDisabled:{true:M.disabled},hasNested:{true:M.hasNested}}}),bt=r(M.collapseButton,{variants:{isNotBlockingExpandList:{true:M.notBlockingExpandList},isOpen:{true:M.open}}}),$=(0,_t.forwardRef)((e,n)=>{let{isOpen:r,isMobileOpen:i,isMobile:a,handleToggle:o,handleClose:s,itemProps:c,itemContentProps:l,tooltipProps:u,itemCssVars:d,mobileSlidePanelProps:f}=mt(e),{id:p,prefixId:m,label:h,note:g,renderItem:_,children:v,className:y,isSelected:b,isDisabled:x=!1,disabledReason:S,isDefaultExpanded:C,isForceExpanded:w,isNotBlockingExpandList:T=!1,level:ee=0,component:E=`div`,onClick:te,mobileHeaderLabel:re,mobileHeaderControl:ie,mobileHeaderAdditionalContent:ae,onMobilePanelOpenChange:oe,...D}=e,O=()=>(0,Q.jsx)(ct,{className:bt({isNotBlockingExpandList:T,isOpen:r}),disabled:!T&&x,variant:`text`,onClick:o,children:(0,Q.jsx)(lt,{})});return v?(0,Q.jsxs)(q,{...D,ref:n,as:E,className:t(y,vt({isOpen:r})),style:d,...c,children:[(0,Q.jsx)(J,{...l,className:yt({isSelected:b,isDisabled:x,hasNested:!!v}),children:(0,Q.jsx)(ne,{placement:he,...u,children:_?(0,Q.jsxs)(Y,{children:[O(),_({label:h,note:g,id:p})]}):(0,Q.jsxs)(dt,{children:[(0,Q.jsxs)(Y,{children:[O(),(0,Q.jsx)(X,{component:`div`,children:h})]}),g&&(0,Q.jsx)(ut,{className:M.note,variant:`caption`,color:`textSecondary`,children:g})]})})}),a?(0,Q.jsx)(K,{isOpen:i,onClose:s,...f,children:v}):(0,Q.jsx)(ft,{in:r,unmountOnExit:!0,children:v})]}):(0,Q.jsx)(q,{...D,ref:n,as:E,className:t(y,vt({isOpen:r})),style:d,...c,children:(0,Q.jsx)(J,{...l,className:yt({isSelected:b,isDisabled:x}),children:(0,Q.jsx)(ne,{placement:he,...u,children:_?(0,Q.jsx)(Y,{children:_({label:h,note:g,id:p})}):(0,Q.jsxs)(dt,{children:[(0,Q.jsx)(Y,{children:(0,Q.jsx)(X,{component:`div`,children:h})}),g&&(0,Q.jsx)(ut,{className:M.note,variant:`caption`,color:`textSecondary`,children:g})]})})})})});try{$.displayName=`TreeItem`,$.__docgenInfo={description:``,displayName:`TreeItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeItem/TreeItem.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function St(){return(St=e((()=>{N(),xt()})))()}var Ct;function wt(){return(wt=e((()=>{Ct=e=>e?.map(e=>typeof e==`string`?{id:e}:e)||[]})))()}export{xt as a,$ as i,wt as n,N as o,St as r,M as s,Ct as t};