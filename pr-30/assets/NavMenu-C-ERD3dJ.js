import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,Mn as r,Nn as i,On as a,Sn as o,Xt as s,en as c,gn as l,ji as u,wn as d,ya as f,yn as p,za as m}from"./preview-CiiswFkd.js";import{n as ee,t as h}from"./useViewportType-BfPg0E0T.js";import{n as g,t as _}from"./List-BNHfW7gL.js";import{t as v}from"./Collapse-L9804_YU.js";import{t as y}from"./Collapse-CjuOQ_w-.js";import{i as te,t as ne}from"./mixins-Dqrs1m2Y.js";import{n as re,t as ie}from"./ChevronDOutlineMd--TA0OIUS.js";import{n as ae,r as oe}from"./listItemButtonClasses-B5O3bQnE.js";import{t as se}from"./ListItemButton-Y95MglWh.js";import{t as ce}from"./ListItemButton-CbQI1rx1.js";import{t as le}from"./OverflowTypography-Btt8v9Us.js";import{t as ue}from"./OverflowTypography-7VRDJcwx.js";import{n as b,t as x}from"./PageDotOutlineMd-JDylprFA.js";import{t as de}from"./ListItemIcon-CsxjsCzW.js";import{t as fe}from"./ListItemIcon-CDpT606R.js";var S;function C(){return(C=e((()=>{a(),S={root:n(`nav-menu-item-button`),hasGroup:n(`nav-menu-item-button_has-group`),label:n(`nav-menu-item-button__label`),labelHasCounter:n(`nav-menu-item-button__label_has-counter`)}})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{ae(),ie(),x(),s(),ce(),fe(),ue(),l(),p(),ne(),C(),w=u(se)`
  overflow: hidden;

  box-sizing: border-box;
  min-height: 44px;
  padding: ${({theme:e})=>e.microSpacing(6,5)};
  
  border-radius: ${({theme:e})=>e.shape.small};
  
  &.${oe.selected} {
    color: ${({theme:e})=>e.palette.grey[900]};

    background-color: ${({theme:e})=>e.palette.primary[100]};

    &::before {
      content: '';

      position: absolute;
      inset: 0;

      width: 10px;

      border-left: 3px solid ${({theme:e})=>e.palette.primary[800]};
    }
    
    ${c} {
      &:hover {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }
    }

    &.${S.hasGroup} {
      background-color: inherit;

      ${c} {
        &:hover {
          background-color: inherit;
        }
      }
    }
  }

  ${c} {
    &:hover {
      color: ${({theme:e})=>e.palette.primary[800]};

      background-color: inherit;
    }
  }

  &:active {
    color: ${({theme:e})=>e.palette.primary[900]};
  }

  &:focus-visible {
    color: ${({theme:e})=>e.palette.primary[900]};

    background-color: unset;
    border-radius: ${({theme:e})=>e.shape.small};
    outline: 2px solid ${({theme:e})=>e.palette.components.focused};
    outline-offset: -2px;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: hidden;

    min-height: 48px;
    padding: ${({theme:e})=>e.spacing(3,2,3,4)};

    border-radius: ${({theme:e})=>e.shape.small};
    
    &.Mui-selected {
      &::before {
        border-radius: 0;
      }
    }
  }
`,T=u(de)`
  min-width: unset;
  
  .${o.root} {
    width: 20px;
    height: 20px;
  }
`,E=u(le)`
  margin-left: ${({theme:e})=>e.spacing(3)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: auto;
    margin-left: 0;
  }
`,D=u(re,{shouldForwardProp:e=>![`$opened`,`$collapsedIn`].includes(e)})`
  width: 20px;
  height: 20px;

  ${({$opened:e})=>te(e)}

  ${({$collapsedIn:e})=>`visibility: ${e?`visible`:`hidden`}`};

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 24px;
    height: 24px;
  }
`,O=u.div`
  display: ${({$collapsedIn:e})=>e?`flex`:`none`};
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;  

  margin-left: auto;
`,k=u(b)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 24px;
    height: 24px;
  }
`})))()}var j,M,N,P,F;function I(){return(I=e((()=>{j=m(),y(),h(),d(),C(),A(),M=f(),N=t(S.root,{variants:{hasGroup:{true:S.hasGroup}}}),P=t(S.label,{variants:{hasCounter:{true:S.labelHasCounter}}}),F=(0,j.forwardRef)((e,t)=>{let{collapsedIn:n,opened:r,text:i,icon:a,component:o=`a`,counter:s,isNested:c=!1,isGroupTitleItem:l=!1,selected:u,...d}=e,{isMobile:f}=ee(),p=s?.component,{max:m,count:h}=s||{};return(0,M.jsxs)(w,{className:N({hasGroup:l}),ref:t,component:o,withoutContainer:!0,selected:u,"aria-selected":u,...d,children:[f?(0,M.jsxs)(M.Fragment,{children:[c&&(0,M.jsx)(k,{}),(0,M.jsx)(E,{children:i,rowsCount:2})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(T,{children:p&&Number(h)?(0,M.jsx)(p.Badge,{invisible:n,children:a}):a}),(0,M.jsx)(v,{orientation:`horizontal`,in:n,children:(0,M.jsx)(E,{tooltipProps:{placement:`right`},className:P({hasCounter:!!s}),children:i,rowsCount:2})})]}),(0,M.jsxs)(O,{$collapsedIn:n,children:[p&&(0,M.jsx)(p,{max:m,count:h}),l&&(0,M.jsx)(D,{$collapsedIn:n,$opened:r})]})]})});try{F.displayName=`ItemButton`,F.__docgenInfo={description:``,displayName:`ItemButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,methods:[],props:{opened:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`opened`,required:!1,tags:{},type:{name:`boolean`}},collapsedIn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`collapsedIn`,required:!0,tags:{},type:{name:`boolean`}},selected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean`}},text:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`text`,required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`icon`,required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},component:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`component`,required:!1,tags:{},type:{name:`ElementType`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`() => void`}},counter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:`Объект счетчика элемента меню`,name:`counter`,required:!1,tags:{example:`counter: {
   component: SidebarCounter,
   count: 17,
   max: 100,
},`},type:{name:`CounterProps`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:`Флаг, показывающий о вложенности элемента`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},isGroupTitleItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/ItemButton/ItemButton.tsx`,name:`TypeLiteral`}],description:``,name:`isGroupTitleItem`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function L(){return(L=e((()=>{I(),C()})))()}var R,z;function B(){return(B=e((()=>{g(),x(),L(),R=f(),z=e=>{let{collapsedIn:t,items:n}=e;return(0,R.jsx)(_,{disablePadding:!0,children:n.map(e=>{let[n,r]=e,{text:i,active:a,component:o,counter:s}=r;return(0,R.jsx)(`li`,{children:(0,R.jsx)(F,{collapsedIn:t,selected:a,text:i,icon:(0,R.jsx)(b,{}),component:o,counter:s,isNested:!0})},n)})})};try{z.displayName=`List`,z.__docgenInfo={description:``,displayName:`List`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/List/List.tsx`,methods:[],props:{collapsedIn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/List/List.tsx`,name:`TypeLiteral`}],description:``,name:`collapsedIn`,required:!0,tags:{},type:{name:`boolean`}},items:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/List/List.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`[key: string, value: { text: ReactNode; active: boolean; component: ElementType; counter?: CounterProps; }][]`}}},tags:{}}}catch{}})))()}function V(){return(V=e((()=>{B()})))()}var H,U;function W(){return(W=e((()=>{H=m(),U=({item:[,{items:e,active:t}]})=>{let[n,r]=(0,H.useState)(e?.some(([,{active:e}])=>e)),i=!!e?.length;return(0,H.useEffect)(()=>{e?.some(([,{active:e}])=>e)&&r(!0)},[e]),{selected:(0,H.useMemo)(()=>i?!n&&t:t,[i,n,t]),handleClick:(0,H.useCallback)(()=>{r(e=>typeof e==`boolean`&&!e)},[]),isOpen:n,isGroupTitleItem:!!e?.length}}})))()}function G(){return(G=e((()=>{W()})))()}var K,q;function J(){return(J=e((()=>{y(),L(),V(),G(),K=f(),q=e=>{let{collapsedIn:t,item:[,n]}=e,{active:r,icon:i,items:a,text:o,component:s,...c}=n,{handleClick:l,isOpen:u,selected:d,isGroupTitleItem:f}=U(e);return(0,K.jsxs)(`li`,{children:[(0,K.jsx)(F,{opened:u,collapsedIn:t,selected:d,text:o,icon:i,component:s,...c,onClick:l,isGroupTitleItem:f}),a&&(0,K.jsx)(v,{in:u,children:(0,K.jsx)(z,{collapsedIn:t,items:a})})]})};try{q.displayName=`Item`,q.__docgenInfo={description:``,displayName:`Item`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/Item.tsx`,methods:[],props:{collapsedIn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/types.ts`,name:`TypeLiteral`}],description:``,name:`collapsedIn`,required:!0,tags:{},type:{name:`boolean`}},item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/Item/types.ts`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`[key: string, value: { icon: ReactElement<unknown, string | JSXElementConstructor<any>>; text: ReactNode; counter?: CounterProps; active?: boolean; items?: [key: ...][]; component?: TComponent; } & Omit<...>]`}}},tags:{}}}catch{}})))()}function Y(){return(Y=e((()=>{J(),L()})))()}var X,Z,Q;function $(){return($=e((()=>{g(),r(),Y(),X=f(),Z=(e,t)=>{let{collapsedIn:n=!0,items:r}=e;return(0,X.jsx)(_,{ref:t,disablePadding:!0,children:r.map(e=>(0,X.jsx)(q,{collapsedIn:n,item:e},e[0]))})},Q=i(Z);try{Q.displayName=`NavMenu`,Q.__docgenInfo={description:``,displayName:`NavMenu`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NavMenu/NavMenu.tsx`,methods:[],props:{collapsedIn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/NavMenu.tsx`,name:`TypeLiteral`}],description:`Состояние свернуто/развернуто меню по горизонтали`,name:`collapsedIn`,required:!1,tags:{},type:{name:`boolean`}},items:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NavMenu/NavMenu.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`[key: string, value: { icon: ReactElement<unknown, string | JSXElementConstructor<any>>; text: ReactNode; counter?: CounterProps; active?: boolean; items?: [key: ...][]; component?: ElementType; } & Omit<...> & { ...; } & Omit<...>][]`}}},tags:{}}}catch{}})))()}export{S as a,C as i,$ as n,Y as r,Q as t};