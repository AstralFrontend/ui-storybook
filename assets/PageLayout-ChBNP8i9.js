import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{$r as n,Va as r,ei as i,ji as a,xa as o,yn as s}from"./preview-i6eMEpGd.js";import{r as c}from"./Alert-CdWqVmVO.js";import{t as l}from"./Alert-bbUYK3cU.js";import{f as u,g as d,h as f,p}from"./PageContentHeaderActions-CFfn_37E.js";import{n as m,t as h}from"./LoadingPlaceholder-CZLHjPEl.js";import{n as g}from"./constants-CcWo8DYo.js";import{C as _,i as v,l as y,t as b,u as x,w as S}from"./PageContent-BBLlftGB.js";var C,w,T;function E(){return(E=e((()=>{l(),s(),C=a.div`
  display: none;
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(2)};

    margin: ${({theme:e})=>e.spacing(0,4)};

    background-color: ${({theme:e})=>e.palette.background.default};

    &:empty {
      display: none;
    }

    & > *:first-of-type .${c.root} {
      margin-top: ${({theme:e})=>e.spacing(3)};
    }
  }
`,w=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  &:empty {
    display: none;
  }

  & > *:last-child .${c.root} {
    margin-bottom: ${({theme:e})=>e.spacing(4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,T=a.div`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    order: 4;

    height: 100%;
  }
`})))()}var D,O;function k(){return(k=e((()=>{D=r(),O=({aside:e})=>{let t=!!e;return{ref:(0,D.useRef)(null),hasAside:t}}})))()}function A(){return(A=e((()=>{k()})))()}var j=t({PageLayout:()=>P,default:()=>P}),M,N,P;function F(){return(F=e((()=>{M=r(),y(),b(),f(),u(),_(),h(),i(),E(),A(),N=o(),P=e=>{let{header:t,content:r,aside:i,footer:a,className:o,alert:s,isLoading:c}=e,{hasAside:l,ref:u}=O(e);return(0,N.jsxs)(d,{hasAside:l,isLoading:c,children:[s&&(0,N.jsx)(w,{children:s}),(0,N.jsxs)(S,{className:n(o,{[g.withoutHeader]:!t}),ref:u,children:[s&&(0,N.jsx)(C,{children:s}),(0,M.isValidElement)(t)?t:t&&(0,N.jsx)(p,{...t}),c?(0,N.jsx)(T,{children:(0,N.jsx)(m,{title:`Загрузка данных...`})}):(0,N.jsxs)(N.Fragment,{children:[(0,M.isValidElement)(r)?r:(0,N.jsx)(v,{...r,footer:a}),i&&!(0,M.isValidElement)(i)&&(0,N.jsx)(x,{...i}),(0,M.isValidElement)(i)&&i]})]})]})};try{P.displayName=`PageLayout`,P.__docgenInfo={description:``,displayName:`PageLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,methods:[],props:{header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageHeader`,name:`header`,required:!1,tags:{example:`<PageLayout header={{
title: 'Заголовок страницы',
description: 'Описание страницы',
}} />`},type:{name:`ReactNode | PageHeaderProps<TMainActionComponent, TSecondaryActionComponent, TBackButtonComponent>`}},content:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageContent`,name:`content`,required:!0,tags:{example:`<PageLayout content={{
children: 'Контент страницы',
}} />`},type:{name:`ReactNode | PageContentProps`}},aside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageAside`,name:`aside`,required:!1,tags:{example:`<PageLayout aside={{
children: 'Боковая панель страницы',
}} />`},type:{name:`ReactNode | PageAsideProps`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageLayoutFooter`,name:`footer`,required:!1,tags:{example:`<PageLayout footer={{
children: 'Нижняя панель страницы',
}} />`},type:{name:`ReactNode | PageLayoutFooterProps`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},alert:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Alert страницы`,name:`alert`,required:!1,tags:{},type:{name:`ReactNode`}},nextFeatureFlags:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:``,name:`nextFeatureFlags`,required:!1,tags:{},type:{name:`{}`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{j as n,F as r,P as t};