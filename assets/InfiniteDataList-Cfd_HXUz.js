import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Dn as t,On as n,T as ee,Va as r,Xt as i,b as a,cn as te,dt as o,en as s,ft as c,ji as l,ln as u,mn as d,pn as f,w as p,xa as m,y as h,yn as g}from"./preview-De2xeSj1.js";import{t as ne}from"./ContentState-C4_A1N-E.js";import{t as _}from"./ContentState-BPDoLQv4.js";import{r as re,t as v}from"./useToggle-RWmsSGN7.js";import{t as ie}from"./ScrollToTopButton-CJfY7iAp.js";import{i as ae,r as oe,t as y}from"./ScrollToTopButton-DeFGHYkS.js";var b;function x(){return(x=e((()=>{n(),b={item:t(`infinite-data-list__item`)}})))()}var S;function C(){return(C=e((()=>{S=`Вы достигли конца списка`})))()}var w;function T(){return(T=e((()=>{g(),w=l.li`
  display: flex;
  justify-content: center;

  padding: ${({theme:e})=>e.spacing(3,5)};

  list-style-type: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }
`})))()}var E,D;function O(){return(O=e((()=>{o(),C(),T(),E=m(),D=({endOfScrollMsg:e=S})=>(0,E.jsx)(w,{children:(0,E.jsx)(c,{children:e})});try{D.displayName=`EndData`,D.__docgenInfo={description:``,displayName:`EndData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/EndData/EndData.tsx`,methods:[],props:{endOfScrollMsg:{defaultValue:{value:`Вы достигли конца списка`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/EndData/EndData.tsx`,name:`TypeLiteral`}],description:``,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function k(){return(k=e((()=>{O()})))()}var A;function j(){return(j=e((()=>{A=`Ошибка загрузки`})))()}var M;function N(){return(N=e((()=>{g(),M=l.li`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content max-content;
  gap: ${({theme:e})=>e.spacing(3)};
  justify-items: center;

  padding: ${({theme:e})=>e.spacing(3,5)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(4)};
    justify-items: normal;

    padding: ${({theme:e})=>e.spacing(4)};
  }
`})))()}var P,F;function I(){return(I=e((()=>{te(),o(),j(),N(),P=m(),F=({onRetry:e})=>(0,P.jsxs)(M,{children:[(0,P.jsx)(c,{align:`center`,children:A}),(0,P.jsx)(u,{onClick:e,children:`Попробовать снова`})]});try{F.displayName=`ErrorMessage`,F.__docgenInfo={description:``,displayName:`ErrorMessage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/ErrorMessage/ErrorMessage.tsx`,methods:[],props:{onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/ErrorMessage/ErrorMessage.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function se(){return(se=e((()=>{I()})))()}var L;function R(){return(R=e((()=>{g(),L=l.li`
  display: flex;
  justify-content: center;

  padding: ${({theme:e})=>e.microSpacing(5,10)};

  list-style-type: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(3,4)};
  }
`})))()}var z,B;function V(){return(V=e((()=>{f(),R(),z=m(),B=()=>(0,z.jsx)(L,{children:(0,z.jsx)(d,{})})})))()}function H(){return(H=e((()=>{V()})))()}var U;function W(){return(W=e((()=>{U=`Нет данных`})))()}var G,K,q;function J(){return(J=e((()=>{G=r(),p(),h(),W(),K=m(),q=()=>{let{imagesMap:e}=(0,G.useContext)(ee),{noDataImgSrc:t}=e;return(0,K.jsx)(a,{title:U,imgSrc:t})}})))()}function Y(){return(Y=e((()=>{J()})))()}var ce;function le(){return(le=e((()=>{i(),g(),x(),ce=l.li`
  list-style-type: none;

  ${`.${b.item}`} {
    cursor: pointer;

    padding: ${({theme:e})=>e.spacing(3,4)};

    background-color: ${({theme:e})=>e.palette.background.default};

    transition: ${({theme:e})=>e.transitions.create(`color`,{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})};

    ${s} {
      &:hover {
        background-color: ${({theme:e})=>e.palette.background.element};
      }
    }

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};

      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }
  }
`})))()}var X,Z,Q;function $(){return($=e((()=>{X=r(),ae(),p(),_(),y(),v(),x(),k(),se(),H(),Y(),le(),Z=m(),Q=({data:e,keyId:t,className:n,itemContent:r,noDataPlaceholder:i,endOfScrollMsg:a,errorMsg:te,isLoading:o,isError:s,isEndReached:c,onRetry:l,onEndReached:u,header:d})=>{let f=(0,X.useRef)(null),{imagesMap:p}=(0,X.useContext)(ee),[m,h,g]=re(),_=(0,X.useCallback)(e=>{e.startIndex>2?h():g()},[g,h]),v=(0,X.useCallback)(()=>{d?f.current?.scrollTo({top:0,behavior:`smooth`}):f.current?.scrollToIndex({index:0,align:`start`,behavior:`smooth`})},[f]),ae=(0,X.useCallback)(()=>{!c&&u&&u()},[c,u]),y=!!e?.length;return!y&&!o&&!s?i?(0,Z.jsx)(Z.Fragment,{children:i}):(0,Z.jsx)(q,{}):(0,Z.jsxs)(ne,{isLoading:o&&!y,isError:s&&!y,errorState:{imgAlt:`Что-то пошло не так`,errorList:[te||``],imgSrc:p.defaultErrorImgSrc,onRetry:l},children:[(0,Z.jsx)(oe,{className:n,style:{height:`100%`},data:e,ref:f,overscan:30,endReached:ae,rangeChanged:_,itemContent:(e,n)=>(0,Z.jsx)(ce,{children:r?.(n,{index:e,className:b.item})},n[t]),components:{Header:d?()=>(0,Z.jsx)(Z.Fragment,{children:d}):void 0,Footer:()=>(0,Z.jsxs)(Z.Fragment,{children:[o&&(0,Z.jsx)(B,{}),s&&(0,Z.jsx)(F,{onRetry:l}),c&&(0,Z.jsx)(D,{endOfScrollMsg:a})]})}}),m&&(0,Z.jsx)(ie,{onClick:v})]})};try{Q.displayName=`InfiniteDataList`,Q.__docgenInfo={description:``,displayName:`InfiniteDataList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,methods:[],props:{data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!1,tags:{},type:{name:`TDataItem[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Поле, используемое в качестве ключа списка`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},endOfScrollMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Сообщение, отображаемое при достижении конца списка`,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Флаг достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},itemContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Содержание карточки`,name:`itemContent`,required:!0,tags:{},type:{name:`(dataItem: TDataItem, { index, className }: { index: number; className: string; }) => ReactNode`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},onEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных`,name:`onEndReached`,required:!1,tags:{},type:{name:`() => void`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Контент отображаемый вверху списка`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}export{$ as n,Q as t};