import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{$r as t,Cn as n,Dn as r,Mn as i,Nn as a,On as o,Sn as s,Xt as c,ei as l,en as u,ji as d,wn as f,xn as p,ya as m,yn as h}from"./preview-Bh-2MF8C.js";import{t as g}from"./OverflowTypography-8Y6EJ5KW.js";import{t as _}from"./OverflowTypography-BMMRRcf_.js";import{r as v,t as y}from"./useScrollToActiveElement-CCxmP2ur.js";import{_ as b,v as x}from"./PageContent-BprI2BeF.js";var S,C,w;function T(){return(T=e((()=>{h(),S=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(10)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(3)};

    width: 100%;
    padding: ${({theme:e})=>e.spacing(0,0,3)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }
`,C=d.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0;
  padding: 0;

  list-style: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    /* Убираем видимую полосу прокрутки в firefox */
    scrollbar-width: none;

    overflow-x: auto;
    flex-direction: row;
    gap: ${({theme:e})=>e.spacing(2)};

    padding: ${({theme:e})=>e.spacing(0,4)};

    /* Убираем видимую полосу прокрутки в chrome */
    &::-webkit-scrollbar {
      display: none;
    }

  }
`,w=d.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0,4)};
  }
`})))()}var E,D;function O(){return(O=e((()=>{y(),l(),b(),T(),E=m(),D=({addonNavigation:e,children:n,className:r,addonNavigationPosition:i=`start`})=>{let{containerRef:a}=v();return(0,E.jsxs)(S,{className:t(x.root,r),children:[i===`start`&&e&&(0,E.jsx)(w,{children:e}),(0,E.jsx)(C,{ref:a,children:n}),i===`end`&&e&&(0,E.jsx)(w,{children:e})]})};try{D.displayName=`PageAsideNavigation`,D.__docgenInfo={description:``,displayName:`PageAsideNavigation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigation.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},addonNavigation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/types.ts`,name:`TypeLiteral`}],description:`Дополнительный контент для навигации`,name:`addonNavigation`,required:!1,tags:{},type:{name:`ReactNode`}},addonNavigationPosition:{defaultValue:{value:`start`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/types.ts`,name:`TypeLiteral`}],description:`Позиционирование дополнительного контента для навигации`,name:`addonNavigationPosition`,required:!1,tags:{default:`'start'`},type:{name:`enum`,raw:`"end" | "start"`,value:[{value:`"end"`},{value:`"start"`}]}}},tags:{}}}catch{}})))()}var k;function A(){return(A=e((()=>{o(),k={root:r(`page-aside-navigation__item`),isActive:r(`page-aside-navigation__item_active`)}})))()}var j,M;function N(){return(N=e((()=>{c(),p(),h(),A(),j=d.li`
  cursor: pointer;

  height: 44px;

  & .${k.root} {
    cursor: pointer;
    
    position: relative;

    overflow: hidden;
    display: flex;
    gap: ${({theme:e})=>e.spacing(3)};
    align-items: center;

    width: 100%;
    margin: 0;
    padding: ${({theme:e})=>e.microSpacing(6,5)};

    color: ${({theme:e})=>e.palette.grey[800]};
    text-decoration: none;

    /* Сбрасываем стандартные стили */
    background-color: ${({theme:e})=>e.palette.background.default};
    border: none;
    border-radius: ${({theme:e})=>e.shape.small};
    outline: none;

    &:visited, &:link {
      color: ${({theme:e})=>e.palette.grey[800]};
    }

    ${u} {
      &:hover {
        color: ${({theme:e})=>e.palette.primary[800]};
      }
    }

    &:active {
      color: ${({theme:e})=>e.palette.primary[900]};
    }
  }

  & .${k.isActive} {
    background-color: ${({theme:e})=>e.palette.primary[100]};

    &::before {
      content: '';

      position: absolute;
      inset: 0;

      width: 10px;

      border-left: 3px solid ${({theme:e})=>e.palette.primary[800]};
    }
  }


  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 40px;
    -webkit-tap-highlight-color: transparent;
    
    & .${k.root} {
      box-sizing: border-box;
      height: inherit;
      padding: ${({theme:e})=>e.microSpacing(5,6)};

      border: 1px solid ${({theme:e})=>e.palette.grey[400]};
      border-radius: ${({theme:e})=>e.shape.medium};

      transition: ${({theme:e})=>e.transitions.create([`border-color`,`background-color`],{duration:e.transitions.duration.shortest})};

      &:active {
        color: ${({theme:e})=>e.palette.grey[800]};

        border-color: ${({theme:e})=>e.palette.grey[800]};
      }
    }

    & .${k.isActive} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-color: ${({theme:e})=>e.palette.grey[800]};

      &::before {
        display: none;
      }

      &:active {
        border-color: ${({theme:e})=>e.palette.grey[400]};
      }
    }
  }
`,M=d.div`
  display: flex;

  & .${s.root} {
    width: 20px;
    height: 20px;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var P,F,I,L;function R(){return(R=e((()=>{i(),_(),f(),A(),N(),P=m(),F=n(k.root,{variants:{isActive:{true:k.isActive}}}),I=({children:e,component:t,icon:n,onClick:r,isActive:i,className:a,...o},s)=>(0,P.jsx)(j,{className:a,children:(0,P.jsxs)(t??`a`,{ref:s,...o,className:F({isActive:i}),onClick:r,"aria-selected":i,children:[(0,P.jsx)(M,{children:n}),(0,P.jsx)(g,{children:e})]})}),L=a(I);try{L.displayName=`PageAsideNavigationItem`,L.__docgenInfo={description:``,displayName:`PageAsideNavigationItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/PageAsideNavigationItem.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isActive:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:`Флаг активности элемента`,name:`isActive`,required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:`Функция вызываемая при клике на элемент`,name:`onClick`,required:!1,tags:{},type:{name:`() => void`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:`Иконка элемента`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},component:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/PageAsideNavigationItem/types.ts`,name:`TypeLiteral`}],description:`Тип элемента`,name:`component`,required:!1,tags:{},type:{name:`ElementType`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{R(),A()})))()}export{k as a,A as i,L as n,D as o,R as r,O as s,z as t};