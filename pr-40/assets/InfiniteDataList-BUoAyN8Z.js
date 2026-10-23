import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Dn as t,On as n,T as r,Xt as i,b as a,cn as o,dt as s,en as c,ft as l,ji as u,ln as d,mn as f,pn as p,w as m,y as ee,ya as h,yn as g,za as _}from"./preview-DOMyrAPS.js";import{t as te}from"./ContentState-j3K-46sa.js";import{t as v}from"./ContentState-dZR8J0Qc.js";import{r as ne,t as y}from"./useToggle-BNGSAyhp.js";import{t as re}from"./ScrollToTopButton-fI9tTGCu.js";import{i as ie,r as ae,t as b}from"./ScrollToTopButton-B2cjpg-r.js";var x;function S(){return(S=e((()=>{n(),x={item:t(`infinite-data-list__item`)}})))()}var C;function w(){return(w=e((()=>{C=`Вы достигли конца списка`})))()}var T;function E(){return(E=e((()=>{g(),T=u.li`
  display: flex;
  justify-content: center;

  padding: ${({theme:e})=>e.spacing(3,5)};

  list-style-type: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }
`})))()}var D,O;function k(){return(k=e((()=>{s(),w(),E(),D=h(),O=({endOfScrollMsg:e=C})=>(0,D.jsx)(T,{children:(0,D.jsx)(l,{children:e})});try{O.displayName=`EndData`,O.__docgenInfo={description:``,displayName:`EndData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/EndData/EndData.tsx`,methods:[],props:{endOfScrollMsg:{defaultValue:{value:`Вы достигли конца списка`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/EndData/EndData.tsx`,name:`TypeLiteral`}],description:``,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function A(){return(A=e((()=>{k()})))()}var j;function M(){return(M=e((()=>{j=`Ошибка загрузки`})))()}var N;function P(){return(P=e((()=>{g(),N=u.li`
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
`})))()}var F,I;function oe(){return(oe=e((()=>{o(),s(),M(),P(),F=h(),I=({onRetry:e})=>(0,F.jsxs)(N,{children:[(0,F.jsx)(l,{align:`center`,children:j}),(0,F.jsx)(d,{onClick:e,children:`Попробовать снова`})]});try{I.displayName=`ErrorMessage`,I.__docgenInfo={description:``,displayName:`ErrorMessage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/ErrorMessage/ErrorMessage.tsx`,methods:[],props:{onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/ErrorMessage/ErrorMessage.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function L(){return(L=e((()=>{oe()})))()}var R;function z(){return(z=e((()=>{g(),R=u.li`
  display: flex;
  justify-content: center;

  padding: ${({theme:e})=>e.microSpacing(5,10)};

  list-style-type: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(3,4)};
  }
`})))()}var B,V;function H(){return(H=e((()=>{p(),z(),B=h(),V=()=>(0,B.jsx)(R,{children:(0,B.jsx)(f,{})})})))()}function U(){return(U=e((()=>{H()})))()}var W;function G(){return(G=e((()=>{W=`Нет данных`})))()}var K,q,J;function Y(){return(Y=e((()=>{K=_(),m(),ee(),G(),q=h(),J=()=>{let{imagesMap:e}=(0,K.useContext)(r),{noDataImgSrc:t}=e;return(0,q.jsx)(a,{title:W,imgSrc:t})}})))()}function se(){return(se=e((()=>{Y()})))()}var ce;function le(){return(le=e((()=>{i(),g(),S(),ce=u.li`
  list-style-type: none;

  ${`.${x.item}`} {
    cursor: pointer;

    padding: ${({theme:e})=>e.spacing(3,4)};

    background-color: ${({theme:e})=>e.palette.background.default};

    transition: ${({theme:e})=>e.transitions.create(`color`,{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})};

    ${c} {
      &:hover {
        background-color: ${({theme:e})=>e.palette.background.element};
      }
    }

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};

      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }
  }
`})))()}var X,Z,Q;function $(){return($=e((()=>{X=_(),ie(),m(),v(),b(),y(),S(),A(),L(),U(),se(),le(),Z=h(),Q=({data:e,keyId:t,className:n,itemContent:i,noDataPlaceholder:a,endOfScrollMsg:o,errorMsg:s,isLoading:c,isError:l,isEndReached:u,onRetry:d,onEndReached:f,header:p})=>{let m=(0,X.useRef)(null),{imagesMap:ee}=(0,X.useContext)(r),[h,g,_]=ne(),v=(0,X.useCallback)(e=>{e.startIndex>2?g():_()},[_,g]),y=(0,X.useCallback)(()=>{p?m.current?.scrollTo({top:0,behavior:`smooth`}):m.current?.scrollToIndex({index:0,align:`start`,behavior:`smooth`})},[m]),ie=(0,X.useCallback)(()=>{!u&&f&&f()},[u,f]),b=!!e?.length;return!b&&!c&&!l?a?(0,Z.jsx)(Z.Fragment,{children:a}):(0,Z.jsx)(J,{}):(0,Z.jsxs)(te,{isLoading:c&&!b,isError:l&&!b,errorState:{imgAlt:`Что-то пошло не так`,errorList:[s||``],imgSrc:ee.defaultErrorImgSrc,onRetry:d},children:[(0,Z.jsx)(ae,{className:n,style:{height:`100%`},data:e,ref:m,overscan:30,endReached:ie,rangeChanged:v,itemContent:(e,n)=>(0,Z.jsx)(ce,{children:i?.(n,{index:e,className:x.item})},n[t]),components:{Header:p?()=>(0,Z.jsx)(Z.Fragment,{children:p}):void 0,Footer:()=>(0,Z.jsxs)(Z.Fragment,{children:[c&&(0,Z.jsx)(V,{}),l&&(0,Z.jsx)(I,{onRetry:d}),u&&(0,Z.jsx)(O,{endOfScrollMsg:o})]})}}),h&&(0,Z.jsx)(re,{onClick:y})]})};try{Q.displayName=`InfiniteDataList`,Q.__docgenInfo={description:``,displayName:`InfiniteDataList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,methods:[],props:{data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:``,name:`data`,required:!1,tags:{},type:{name:`TDataItem[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Поле, используемое в качестве ключа списка`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},endOfScrollMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Сообщение, отображаемое при достижении конца списка`,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Флаг достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},itemContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Содержание карточки`,name:`itemContent`,required:!0,tags:{},type:{name:`(dataItem: TDataItem, { index, className }: { index: number; className: string; }) => ReactNode`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},onEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных`,name:`onEndReached`,required:!1,tags:{},type:{name:`() => void`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteDataList/InfiniteDataList.tsx`,name:`TypeLiteral`}],description:`Контент отображаемый вверху списка`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}export{$ as n,Q as t};