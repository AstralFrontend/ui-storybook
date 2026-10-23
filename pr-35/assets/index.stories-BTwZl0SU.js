import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,E as i,Ln as a,On as o,Sa as s,Sn as c,T as l,Va as u,Xt as d,b as f,cn as p,dt as m,ei as h,en as g,ft as _,gn as v,ht as y,in as ee,it as te,ji as b,ln as x,mn as S,mt as ne,pn as re,rt as ie,w as ae,wn as C,xa as w,y as oe,yn as T}from"./preview-OXlkwWcL.js";import{n as se,t as ce}from"./useViewportType-CQvJlryi.js";import{t as le}from"./Skeleton-CVTTzUP2.js";import{o as ue,t as E}from"./Tooltip-uGuLBuUy.js";import{t as de}from"./MenuItem-D6FqdxJW.js";import{t as fe}from"./Chevron-BC075wif.js";import{t as pe}from"./Chevron-C-QHDhFe.js";import{t as me}from"./Tooltip-CjG4DTmE.js";import{t as he}from"./MenuItem-BYbusmwh.js";import{t as ge}from"./IconDropdownButton-BdmMN6pX.js";import{t as _e}from"./IconDropdownButton-CgfYSa7p.js";import{t as ve}from"./OverflowTypography-BRj0jGt9.js";import{t as ye}from"./OverflowTypography-C9p2CxoP.js";import{n as be}from"./icons-B0pUAIfp.js";import{t as xe}from"./Avatar-D5j6vSKP.js";import{t as Se}from"./Avatar-ID2aCgJ4.js";import{t as Ce}from"./Skeleton-Bmtyqz0h.js";import{t as we}from"./ConfirmAction-C5StMZbx.js";import{d as Te}from"./DataGridActionCell-DO_HkdDL.js";import{t as Ee}from"./ContentState-Bi3BnX4-.js";import{t as De}from"./ContentState-DkIGClOy.js";import{n as Oe,t as ke}from"./getInertProps-CpZxL9NE.js";import{n as Ae,t as je}from"./DotsVOutlineMd-Xab8Eljv.js";import{n as Me,t as Ne}from"./ChevronLOutlineMd-COoI3Jiw.js";import{r as Pe,t as D}from"./Description-CTW0y_5k.js";import{t as Fe}from"./Description-B5Bu6z1u.js";import{t as Ie}from"./ScrollToTopButton-BUqSg2p5.js";import{n as Le,t as Re}from"./BinOutlineMd-BtvC-eU6.js";import{i as O,t as k}from"./PageContent-B5WaSAf3.js";import{r as ze,t as Be}from"./useScrollManagement-DYQs8yp4.js";import{n as Ve}from"./useSet-CI8fGvnE.js";import{t as He}from"./useSet-DvPBX-ws.js";import{i as Ue,r as We,t as Ge}from"./ScrollToTopButton-DmKwgqpZ.js";import{t as A}from"./PageLayout-D-W6sKI3.js";import{t as j}from"./PageLayout-DllUP1as.js";import{n as Ke,t as qe}from"./SaveOutlineMd-inz713gd.js";import{$t as M,Mt as Je,U as N}from"./common-C_Dbz6TQ.js";import{i as Ye}from"./MockScreen-DaxsMhqP.js";var Xe,Ze,Qe,$e,P;function F(){return(F=e((()=>{o(),Xe=`virtuoso-container`,Ze=`Нет данных`,Qe=`root`,$e=`node:`,P={root:r(`infinite-tree-list`),loading:r(`infinite-tree-list_loading`),noData:r(`infinite-tree-list_no-data`),error:r(`infinite-tree-list_error`),levelHeader:r(`infinite-tree-list__level-header`),levelHeaderWithBackButton:r(`infinite-tree-list__level-header_with-back-button`),levelHeaderBackButton:r(`infinite-tree-list__level-header-back-button`),levelTransition:r(`infinite-tree-list_level-transition`),row:r(`infinite-tree-list__row`),rowAddAnimation:r(`infinite-tree-list__row_add-animation`),rowRemoveAnimation:r(`infinite-tree-list__row_remove-animation`),rowSpinner:r(`infinite-tree-list__row_spinner`),rowLast:r(`infinite-tree-list__row_last`),scrollToTopButton:r(`infinite-tree-list__scroll-to-top-button`),visibleScrollToTopButton:r(`infinite-tree-list__scroll-to-top-button_visible`)}})))()}var et,tt;function nt(){return(nt=e((()=>{et=u(),tt=(0,et.createContext)({renderItem:()=>null,renderParent:()=>null,onToggle:()=>void 0,itemSkeleton:``,disabledIdList:new Set,setDisabled:()=>void 0,nodePaginationMap:{},registerChildrenCallbacks:()=>void 0,registerChildren:()=>void 0,notifyExpand:()=>void 0,onLoadMore:()=>void 0,onRetry:()=>void 0,enterAnimation:{schedule:()=>void 0,read:()=>({shouldAnimate:!1}),claim:()=>void 0,reset:()=>void 0},tailRegistry:{register:()=>void 0,unregister:()=>void 0,checkRange:()=>void 0,forgetRange:()=>void 0},acquireParentSlot:()=>null})})))()}var rt,it,at;function ot(){return(ot=e((()=>{rt=u(),nt(),it=w(),at=({children:e,itemSkeleton:t,nodePaginationMap:n,onListRetry:r,registerChildren:i,notifyExpand:a,enterAnimation:o,tailRegistry:s,renderItem:c,renderParent:l,onToggle:u,acquireParentSlot:d,lastRowId:f})=>{let[p,m]=(0,rt.useState)(new Set),h=(0,rt.useRef)({}),g=(0,rt.useCallback)((e,t)=>{m(n=>{if(n.has(e)===t)return n;let r=new Set(n);return t?r.add(e):r.delete(e),r})},[]),_=(0,rt.useCallback)((e,t)=>{h.current[e]=t},[]),v=(0,rt.useCallback)(e=>{h.current[e]?.onLoadMore?.()},[]),y=(0,rt.useCallback)(e=>{let t=h.current[e]?.onRetry;if(t){t();return}r()},[r]),ee=(0,rt.useMemo)(()=>({renderItem:c,renderParent:l,onToggle:u,itemSkeleton:t,disabledIdList:p,setDisabled:g,nodePaginationMap:n,registerChildrenCallbacks:_,registerChildren:i,notifyExpand:a,onLoadMore:v,onRetry:y,enterAnimation:o,tailRegistry:s,acquireParentSlot:d,lastRowId:f}),[c,l,u,t,p,g,n,_,i,a,v,y,o,s,d,f]);return(0,it.jsx)(tt.Provider,{value:ee,children:e})};try{at.displayName=`InfiniteTreeListContextProvider`,at.__docgenInfo={description:``,displayName:`InfiniteTreeListContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContextProvider/InfiniteTreeListContextProvider.tsx`,methods:[],props:{onToggle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Переключает раскрытие узла`,name:`onToggle`,required:!0,tags:{},type:{name:`(item: InfiniteTreeListData) => void`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Рендер-функция строки`,name:`renderItem`,required:!0,tags:{},type:{name:`(item: FlattenTree<InfiniteTreeListData>) => ReactNode`}},itemSkeleton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Строка в состоянии загрузки`,name:`itemSkeleton`,required:!0,tags:{},type:{name:`ReactNode`}},nodePaginationMap:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Данные пагинации узлов по parentId`,name:`nodePaginationMap`,required:!0,tags:{},type:{name:`Record<string, NodePagination>`}},enterAnimation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:``,name:`enterAnimation`,required:!0,tags:{},type:{name:`EnterAnimationResult`}},tailRegistry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Реестр хвостов вложенных веток. Переживает размонтирование строки`,name:`tailRegistry`,required:!0,tags:{},type:{name:`TailRegistry`}},registerChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Передаёт состояние загрузки дочерних элементов в список. Список
синхронизирует плоский список`,name:`registerChildren`,required:!0,tags:{},type:{name:`(itemId: string, childrenState: InfiniteTreeChildrenPagination) => void`}},notifyExpand:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Оповещает список о раскрытии узла`,name:`notifyExpand`,required:!0,tags:{},type:{name:`(itemId: string, onOpen?: () => void) => void`}},renderParent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Рендер-функция строки узла с подгружаемыми дочерними элементами`,name:`renderParent`,required:!0,tags:{},type:{name:`(item: FlattenTree<InfiniteTreeListData>) => ReactNode`}},acquireParentSlot:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Отдаёт постоянный DOM-контейнер строки узла: строка монтируется вне
виртуализации, а её контейнер переносится в строку скролла`,name:`acquireParentSlot`,required:!0,tags:{},type:{name:`(itemId: string) => HTMLDivElement`}},lastRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContext.ts`,name:`TypeLiteral`}],description:`Id последней строки данных`,name:`lastRowId`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContextProvider/InfiniteTreeListContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},onListRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListContext/InfiniteTreeListContextProvider/InfiniteTreeListContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`onListRetry`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function st(){return(st=e((()=>{ot()})))()}function ct(){return(ct=e((()=>{nt(),st()})))()}var lt,ut,dt;function ft(){return(ft=e((()=>{lt=`Назад`,ut=`72px`,dt=`24px`})))()}var pt,mt,ht;function gt(){return(gt=e((()=>{p(),ie(),ye(),v(),T(),F(),ft(),pt=b.header`
  position: relative;

  display: flex;
  align-items: center;

  padding: ${({theme:e})=>e.spacing(3,4)};

  border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};

  &.${P.levelHeaderWithBackButton} {
    padding-left: ${({theme:e})=>e.spacing(11)};
  }
`,mt=b(te)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: ${ut};
    height: auto;
    padding: ${({theme:e})=>e.spacing(0,8,0,4)};

    color: inherit;

    border-radius: 0;

    &.${a.root} .${c.root} {
      width: ${dt};
      height: ${dt};
    }

    &:active {
      background-color: transparent;
    }
  }
`,ht=b(ve)`
  flex-grow: 1;

  min-width: 0;
`})))()}var _t,vt,yt;function bt(){return(bt=e((()=>{Ne(),C(),F(),ft(),gt(),_t=w(),vt=n(P.levelHeader,{variants:{hasBackButton:{true:P.levelHeaderWithBackButton}}}),yt=({title:e=lt,hasBackButton:t,onBack:n})=>(0,_t.jsxs)(pt,{className:vt({hasBackButton:t}),children:[t&&(0,_t.jsx)(mt,{className:P.levelHeaderBackButton,variant:`text`,"aria-label":`Назад`,onClick:n,children:(0,_t.jsx)(Me,{})}),(0,_t.jsx)(ht,{rowsCount:2,children:e})]});try{yt.displayName=`LevelHeader`,yt.__docgenInfo={description:`Шапка отображаемого уровня на мобильной ширине`,displayName:`LevelHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/LevelHeader/LevelHeader.tsx`,methods:[],props:{title:{defaultValue:{value:`Назад`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/LevelHeader/types.ts`,name:`TypeLiteral`}],description:`Заголовок отображаемого уровня`,name:`title`,required:!1,tags:{},type:{name:`string`}},hasBackButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/LevelHeader/types.ts`,name:`TypeLiteral`}],description:`Показывает кнопку возврата`,name:`hasBackButton`,required:!0,tags:{},type:{name:`boolean`}},onBack:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/LevelHeader/types.ts`,name:`TypeLiteral`}],description:`Обработчик возврата на уровень выше`,name:`onBack`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function xt(){return(xt=e((()=>{bt()})))()}var St;function Ct(){return(Ct=e((()=>{St=`Вы достигли конца списка`})))()}var wt,Tt;function Et(){return(Et=e((()=>{m(),Ct(),wt=w(),Tt=({endOfScrollMsg:e=St})=>(0,wt.jsx)(_,{children:e});try{Tt.displayName=`EndData`,Tt.__docgenInfo={description:``,displayName:`EndData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ListFooter/EndData/EndData.tsx`,methods:[],props:{endOfScrollMsg:{defaultValue:{value:`Вы достигли конца списка`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ListFooter/EndData/EndData.tsx`,name:`TypeLiteral`}],description:``,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Dt(){return(Dt=e((()=>{Et()})))()}var Ot;function kt(){return(kt=e((()=>{Ot=`Ошибка загрузки`})))()}var At;function jt(){return(jt=e((()=>{T(),At=b.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content max-content;
  gap: ${({theme:e})=>e.spacing(2)};
  justify-items: center;

  padding: ${({theme:e})=>e.spacing(2,0)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(4)};
    justify-items: normal;

    padding: ${({theme:e})=>e.spacing(4)};
  }
`})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{p(),m(),kt(),jt(),Mt=w(),Nt=({onRetry:e})=>(0,Mt.jsxs)(At,{children:[(0,Mt.jsx)(_,{align:`center`,children:Ot}),(0,Mt.jsx)(x,{onClick:e,children:`Попробовать снова`})]});try{Nt.displayName=`ErrorMessage`,Nt.__docgenInfo={description:``,displayName:`ErrorMessage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ListFooter/ErrorMessage/ErrorMessage.tsx`,methods:[],props:{onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ListFooter/ErrorMessage/ErrorMessage.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function Ft(){return(Ft=e((()=>{Pt()})))()}var It,Lt;function Rt(){return(Rt=e((()=>{T(),It=b.footer`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  min-height: 64px;
  margin-top: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: unset;
  }
`,Lt=b.div`
  min-height: 20px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var zt,Bt;function Vt(){return(Vt=e((()=>{re(),Dt(),Ft(),Rt(),zt=w(),Bt=({context:e})=>{let{isLoading:t,isError:n,isEndReached:r,endOfScrollMsg:i,onRetry:a}=e;return t?(0,zt.jsx)(It,{children:(0,zt.jsx)(S,{})}):n?(0,zt.jsx)(It,{children:(0,zt.jsx)(Nt,{onRetry:a})}):r?(0,zt.jsx)(It,{children:(0,zt.jsx)(Tt,{endOfScrollMsg:i})}):(0,zt.jsx)(Lt,{})};try{Bt.displayName=`ListFooter`,Bt.__docgenInfo={description:"Футер списка для Virtuoso.\n\nВынесен в модуль и передаётся в `components.Footer`: inline-компонент в\n`components` на каждый рендер даёт новый тип, и React размонтирует футер.\nДанные приходят через `context` Virtuoso",displayName:`ListFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ListFooter/ListFooter.tsx`,methods:[],props:{context:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`ContextProp`}],description:`The context value passed from the parent component`,name:`context`,parent:{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`ContextProp`},required:!0,tags:{},type:{name:`ListFooterContext`}}},tags:{}}}catch{}})))()}function Ht(){return(Ht=e((()=>{Vt()})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`Нет данных`})))()}var Gt,Kt,qt;function Jt(){return(Jt=e((()=>{Gt=u(),ae(),oe(),Wt(),Kt=w(),qt=({noDataImgSrc:e})=>{let{imagesMap:t}=(0,Gt.useContext)(l),{noDataImgSrc:n}=t;return(0,Kt.jsx)(f,{title:Ut,imgSrc:e??n,size:`medium`})};try{qt.displayName=`NoDataPlaceholder`,qt.__docgenInfo={description:``,displayName:`NoDataPlaceholder`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/NoDataPlaceholder/NoDataPlaceholder.tsx`,methods:[],props:{noDataImgSrc:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/NoDataPlaceholder/NoDataPlaceholder.tsx`,name:`TypeLiteral`}],description:``,name:`noDataImgSrc`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Yt(){return(Yt=e((()=>{Jt()})))()}var Xt;function Zt(){return(Zt=e((()=>{Ge(),T(),F(),Xt=b(Ie)`
  display: none;

  &.${P.visibleScrollToTopButton} {
    display: inline-flex;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &,
    &.${P.visibleScrollToTopButton} {
      display: none;
    }
  }
`})))()}var Qt,$t,en;function tn(){return(tn=e((()=>{Qt=s(),F(),Zt(),$t=w(),en=({scrollRef:e,buttonRef:t,handleScrollToTop:n})=>{let r=e?.current?.parentElement;return r?(0,Qt.createPortal)((0,$t.jsx)(Xt,{ref:t,className:P.scrollToTopButton,onClick:n}),r):null};try{en.displayName=`OnTopButton`,en.__docgenInfo={description:``,displayName:`OnTopButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/OnTopButton/OnTopButton.tsx`,methods:[],props:{scrollRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/OnTopButton/OnTopButton.tsx`,name:`TypeLiteral`}],description:`Контейнер со скроллом`,name:`scrollRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},buttonRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/OnTopButton/OnTopButton.tsx`,name:`TypeLiteral`}],description:`Ref кнопки. Скролл списка переключает её видимость через classname`,name:`buttonRef`,required:!0,tags:{},type:{name:`RefObject<HTMLButtonElement>`}},handleScrollToTop:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/OnTopButton/OnTopButton.tsx`,name:`TypeLiteral`}],description:``,name:`handleScrollToTop`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function nn(){return(nn=e((()=>{tn()})))()}var I;function rn(){return(rn=e((()=>{o(),I={root:r(`infinite-tree-list__item`),content:r(`infinite-tree-list__item-content`),disabled:r(`infinite-tree-list__item_disabled`),loading:r(`infinite-tree-list__item_loading`),hasNested:r(`infinite-tree-list__item_has-nested`),hasActions:r(`infinite-tree-list__item_has-actions`)}})))()}var an;function on(){return(on=e((()=>{an=`Не удалось загрузить данные`})))()}var sn;function cn(){return(cn=e((()=>{T(),sn=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(5)};
  align-items: center;

  padding: ${({theme:e})=>e.spacing(0,4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
    gap: ${({theme:e})=>e.microSpacing(9)};

    width: 100%;
    padding: ${({theme:e})=>e.microSpacing(11,0,10)};
  }
`})))()}var ln,un;function dn(){return(dn=e((()=>{p(),m(),on(),cn(),ln=w(),un=({onRetry:e,errorMsg:t=an})=>(0,ln.jsxs)(sn,{children:[(0,ln.jsx)(_,{color:`grey`,colorIntensity:`600`,children:t}),(0,ln.jsx)(x,{onClick:e,variant:`link`,children:`Попробовать снова`})]});try{un.displayName=`ErrorPlaceholder`,un.__docgenInfo={description:``,displayName:`ErrorPlaceholder`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/ErrorPlaceholder/ErrorPlaceholder.tsx`,methods:[],props:{onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/ErrorPlaceholder/ErrorPlaceholder.tsx`,name:`TypeLiteral`}],description:``,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},errorMsg:{defaultValue:{value:`Не удалось загрузить данные`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/ErrorPlaceholder/ErrorPlaceholder.tsx`,name:`TypeLiteral`}],description:``,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function fn(){return(fn=e((()=>{dn()})))()}var pn,mn,hn,gn,_n,vn;function yn(){return(yn=e((()=>{pe(),d(),T(),rn(),pn=b.div`
  cursor: default;

  display: grid;
  grid-template-columns: 1fr;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  width: 100%;
  min-height: 60px;
  padding: ${({theme:e})=>e.spacing(3,4)};

  background: ${({theme:e})=>e.palette.background.default};

  transition: ${({theme:e})=>e.transitions.create(`background-color`,{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})};

  ${g} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  &.${I.hasActions} {
    grid-template-columns: 1fr auto;
  }

  &.${I.hasNested} {
    cursor: pointer;

    grid-template-columns: auto 1fr;

    &.${I.hasActions} {
      grid-template-columns: auto 1fr auto;
    }
  }

  &.${I.loading} {
    cursor: default;
  }

  &.${I.disabled} {
    cursor: default;

    opacity: 0.5;
  }

  &.${I.loading}:hover,
  &.${I.disabled}:hover {
    background-color: ${({theme:e})=>e.palette.background.default};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
    row-gap: ${({theme:e})=>e.spacing(4)};

    padding: ${({theme:e})=>e.spacing(5,4)};

    &.${I.hasNested} {
      grid-template-columns: 1fr auto;
      
      &.${I.hasActions} {
        grid-template-columns: 1fr auto;
      }
    }
  }
`,mn=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  min-width: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-column: 1;
    grid-row: 1;
  }
`,hn=b.div`
  display: flex;
  align-items: center;

  min-height: ${({theme:e})=>e.typography.body1.lineHeight};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
  }
`,gn=b(fe)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    transform: rotateZ(270deg);

    width: 24px;
    height: 24px;

    transition: none;
  }
`,_n=b.div`
  display: flex;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`,vn=b.div`
  display: flex;
  justify-content: center;

  width: 100%;
`})))()}var bn,xn;function Sn(){return(Sn=e((()=>{bn=u(),xn=(0,bn.createContext)({item:{},onToggle:()=>void 0,isDisabled:!1,setDisabledReason:()=>void 0})})))()}var Cn,wn,Tn;function En(){return(En=e((()=>{Cn=u(),ct(),Sn(),wn=w(),Tn=({item:e,children:t,onToggle:n})=>{let[r,i]=(0,Cn.useState)(),{disabledIdList:a}=(0,Cn.useContext)(tt),o=(0,Cn.useMemo)(()=>e.meta.path.some(e=>a.has(e)),[e.meta.path,a]),s=(0,Cn.useMemo)(()=>({item:e,onToggle:n,isDisabled:o,disabledReason:r,setDisabledReason:i}),[e,n,o,r]);return(0,wn.jsx)(xn.Provider,{value:s,children:t})};try{Tn.displayName=`TreeListItemContextProvider`,Tn.__docgenInfo={description:`Ставит контекст строки: считает блокировку по пути узла и отдаёт вниз
саму строку с её причиной блокировки`,displayName:`TreeListItemContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/TreeListItemContext/TreeListItemContextProvider/TreeListItemContextProvider.tsx`,methods:[],props:{onToggle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/TreeListItemContext/TreeListItemContext.ts`,name:`TypeLiteral`}],description:`Переключает раскрытие узла строки`,name:`onToggle`,required:!0,tags:{},type:{name:`(item: InfiniteTreeListData) => void`}},item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/TreeListItemContext/TreeListItemContext.ts`,name:`TypeLiteral`}],description:`Строка плоского списка, для которой рендерится содержимое`,name:`item`,required:!0,tags:{},type:{name:`FlattenTree<InfiniteTreeListData>`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/TreeListItemContext/TreeListItemContextProvider/TreeListItemContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Dn(){return(Dn=e((()=>{En()})))()}function On(){return(On=e((()=>{Sn(),Dn()})))()}var L,kn;function An(){return(An=e((()=>{L=u(),ct(),On(),kn=({isDisabled:e,disabledReason:t,isLoading:n,isError:r,isEndReached:i,childItems:a,onOpen:o,onLoadMore:s,onRetry:c})=>{let{itemSkeleton:l,setDisabled:u,registerChildrenCallbacks:d,registerChildren:f,notifyExpand:p}=(0,L.useContext)(tt),{item:m,onToggle:h,isDisabled:g,disabledReason:_}=(0,L.useContext)(xn),v=a!==void 0||s!==void 0;(0,L.useEffect)(()=>{e&&u(m.id,e)},[e]),(0,L.useEffect)(()=>{d(m.id,{onLoadMore:s,onRetry:c})},[m.id,s,c,d]),(0,L.useEffect)(()=>{v&&f(m.id,{data:a??[],isLoading:n,isError:r,isEndReached:i})},[m.id,v,a,n,r,i,f]);let y=(0,L.useRef)(o);(0,L.useEffect)(()=>{y.current=o}),(0,L.useEffect)(()=>{m.meta.isExpanded&&p(m.id,()=>y.current?.())},[m.meta.isExpanded,m.id,p]);let[ee,te]=(0,L.useState)(null),b=ee??m.meta.isExpanded;return(0,L.useEffect)(()=>{te(null)},[m.meta.isExpanded]),{item:m,handleClick:(0,L.useCallback)(e=>{e.stopPropagation(),m.meta.hasNested&&(te(e=>!(e??m.meta.isExpanded)),h(m))},[m,h]),itemSkeleton:l,isDisabled:e,disabledReason:t,tooltipProps:{title:e&&t||g&&_,withoutContainer:!e||!g,placement:`bottom`,arrow:!1,followCursor:!0},isDisabledByActions:g,isChevronActive:b,isRowLoading:!!(n&&!v),isRowError:!!(r&&!v)}}})))()}function jn(){return(jn=e((()=>{An()})))()}var R,Mn,z;function Nn(){return(Nn=e((()=>{De(),re(),me(),h(),C(),ke(),rn(),fn(),yn(),jn(),R=w(),Mn=n(I.root,{variants:{isDisabled:{true:I.disabled},isLoading:{true:I.loading},hasNested:{true:I.hasNested},hasActions:{true:I.hasActions}}}),z=e=>{let{itemSkeleton:n,item:r,handleClick:i,isDisabledByActions:a,tooltipProps:o,isChevronActive:s,isRowLoading:c,isRowError:l}=kn(e),{isDisabled:u,className:d,onRetry:f=()=>void 0,actions:p,errorMsg:m,children:h}=e;return l?(0,R.jsx)(un,{onRetry:f,errorMsg:m}):(0,R.jsx)(Ee,{isLoading:c,isSmoothLoading:!1,loadingContent:(0,R.jsx)(pn,{className:Mn({isLoading:!0}),children:(0,R.jsx)(mn,{children:n||(0,R.jsx)(vn,{children:(0,R.jsx)(S,{})})})}),children:(0,R.jsx)(E,{...o,children:(0,R.jsxs)(pn,{onClick:i,className:t(Mn({isDisabled:!!(u||a),isLoading:c,hasNested:r.meta.hasNested,hasActions:!!p}),d),...Oe(u||a),children:[r.meta.hasNested&&(0,R.jsx)(hn,{children:(0,R.jsx)(gn,{isActive:s})}),(0,R.jsx)(mn,{className:I.content,children:h}),p&&(0,R.jsx)(_n,{children:p})]},`infinite-tree-list-item-${r.id}`)})})};try{z.displayName=`InfiniteTreeListItem`,z.__docgenInfo={description:``,displayName:`InfiniteTreeListItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/InfiniteTreeListItem.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Действия`,name:`actions`,required:!1,tags:{},type:{name:`ReactNode`}},childItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Загруженные дочерние элементы узла.`,name:`childItems`,required:!1,tags:{},type:{name:`InfiniteTreeListData[]`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Флаг достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Флаг ошибки загрузки дочерних элементов узла`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Флаг загрузки дочерних элементов`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Элемент заблокирован для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки элемента`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!1,tags:{},type:{name:`() => void`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Обработчик раскрытия узла`,name:`onOpen`,required:!1,tags:{},type:{name:`() => void`}},onLoadMore:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListItem/types.ts`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных`,name:`onLoadMore`,required:!1,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function B(){return(B=e((()=>{Nn(),On(),rn()})))()}var Pn;function Fn(){return(Fn=e((()=>{T(),me(),F(),Pn=b.div`
  --level: 0;
  --sibling-index: 0;

  @keyframes slide-in-from-left {
    0% {
      transform: translateX(-16px);

      opacity: 0;
    }

    100% {
      transform: translateX(0);

      opacity: 1;
    }
  }

  @keyframes slide-out-to-left {
    0% {
      transform: translateX(0);

      opacity: 1;
    }

    100% {
      transform: translateX(-16px);

      opacity: 0;
    }
  }

  will-change: transform, opacity;

  overflow: hidden;
  display: flex;
  align-items: center;

  min-height: 60px;
  margin-top: ${({theme:e})=>e.spacing(1)};
  margin-left: calc(var(--level) * ${({theme:e})=>e.spacing(5)});

  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.medium};

  &.${P.rowAddAnimation} {
    animation: slide-in-from-left
      ${({theme:e})=>e.transitions.duration.short}ms ease-out;
    animation-fill-mode: both;
    animation-delay: calc(var(--sibling-index) * ${30}ms);
  }

  &.${P.rowRemoveAnimation} {
    animation: slide-out-to-left
      ${({theme:e})=>e.transitions.duration.shorter}ms ease-in forwards;
    animation-fill-mode: both;
    animation-delay: calc(var(--sibling-index) * ${30}ms);
  }

  &.${P.rowSpinner} {
    justify-content: center;

    width: 100%;
    min-height: 64px;

    background: transparent;
    border: none;
  }

  & > .${ue.contentWrapper} {
    width: 100%;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: 0;
    margin-left: 0;

    border: none;
    border-bottom: 1px solid
      ${({theme:e})=>e.palette.components.border.default};
    border-radius: 0;

    &.${P.rowSpinner} {
      border-bottom: none;
    }

    /* Выключаем border-bottom у последней строки, чтобы избежать накладывания на border списка */
    &.${P.rowLast} {
      border-bottom: none;
    }
  }
`})))()}var In,Ln,Rn;function zn(){return(zn=e((()=>{In=u(),Ln=w(),Rn=(0,In.memo)(({item:e,renderParent:t})=>(0,Ln.jsx)(Ln.Fragment,{children:t(e)}));try{Rn.displayName=`CustomParentWrapper`,Rn.__docgenInfo={description:"То же, что `CustomItemWrapper`, но для узлов с подгружаемыми дочерними\nэлементами.\n\nОтдельный компонент, а не ветка внутри `CustomItemWrapper`: хуки из\n`renderItem` и `renderParent` ложатся в hook-list вызвавшего компонента, и\nсмена ветки меняла бы их количество между рендерами — React упал бы с\n`Rendered fewer hooks than expected`",displayName:`CustomParentWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/Item/CustomParentWrapper/CustomParentWrapper.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/Item/CustomParentWrapper/CustomParentWrapper.tsx`,name:`TypeLiteral`}],description:`Строка узла с подгружаемыми дочерними элементами`,name:`item`,required:!0,tags:{},type:{name:`FlattenTree<InfiniteTreeListData>`}},renderParent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/Item/CustomParentWrapper/CustomParentWrapper.tsx`,name:`TypeLiteral`}],description:`Рендер-функция строки родителя из props списка`,name:`renderParent`,required:!0,tags:{},type:{name:`(item: FlattenTree<InfiniteTreeListData>) => ReactNode`}}},tags:{}}}catch{}})))()}function Bn(){return(Bn=e((()=>{zn()})))()}var Vn,Hn;function Un(){return(Un=e((()=>{Vn=u(),ct(),Hn=({parent:e})=>{let{renderParent:t,onToggle:n,acquireParentSlot:r,lastRowId:i}=(0,Vn.useContext)(tt),a=r(e.id),{nodeId:o,level:s,siblingIndex:c}=e.meta;return{slot:a,nodeId:o,cssVars:{"--level":s,"--sibling-index":c},parent:e,renderParent:t,onToggle:n,isLastRow:e.id===i}}})))()}function Wn(){return(Wn=e((()=>{Un()})))()}var Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{Gn=u(),Kn=s(),C(),F(),B(),Fn(),Bn(),Wn(),qn=w(),Jn=n(P.row,{variants:{isLastRow:{true:P.rowLast}}}),Yn=(0,Gn.memo)(e=>{let{nodeId:t,slot:n,cssVars:r,parent:i,renderParent:a,onToggle:o,isLastRow:s}=Hn(e);return n?(0,Kn.createPortal)((0,qn.jsx)(Tn,{item:i,onToggle:o,children:(0,qn.jsx)(Pn,{id:t,className:Jn({isLastRow:s}),style:r,children:(0,qn.jsx)(Rn,{item:i,renderParent:a})})}),n):null});try{Yn.displayName=`Item`,Yn.__docgenInfo={description:`Строка одного узла с подгружаемыми дочерними элементами.

В строке виртуализации не живёт: рисуется порталом в свой постоянный
контейнер, а контейнер \`TreeItem\` переносит в строку скролла, пока узел на
экране`,displayName:`Item`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/Item/Item.tsx`,methods:[],props:{parent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/Item/types.ts`,name:`TypeLiteral`}],description:`Узел с подгружаемыми дочерними элементами, строку которого нужно держать
смонтированной`,name:`parent`,required:!0,tags:{},type:{name:`FlattenTree<InfiniteTreeListData>`}}},tags:{}}}catch{}})))()}function Zn(){return(Zn=e((()=>{Xn()})))()}var Qn,$n;function er(){return(er=e((()=>{Zn(),Qn=w(),$n=({parents:e})=>(0,Qn.jsx)(Qn.Fragment,{children:e.map(e=>(0,Qn.jsx)(Yn,{parent:e},e.id))});try{$n.displayName=`ParentItems`,$n.__docgenInfo={description:`Постоянный слой строк узлов с подгружаемыми дочерними элементами.

Разметки на своём месте не даёт: каждая строка рисуется порталом в свой
контейнер, а виртуализация переносит контейнер в строку скролла. Строка
монтируется один раз, поэтому её состояние переживает и уход со скролла, и
сворачивание ветки`,displayName:`ParentItems`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/ParentItems.tsx`,methods:[],props:{parents:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/ParentItems/types.ts`,name:`TypeLiteral`}],description:`Узлы с подгружаемыми дочерними элементами, строки которых держатся
смонтированными`,name:`parents`,required:!0,tags:{},type:{name:`FlattenTree<TData>[]`}}},tags:{}}}catch{}})))()}function tr(){return(tr=e((()=>{er(),Zn()})))()}var nr;function rr(){return(rr=e((()=>{T(),F(),nr=b.div`
  /* Убираем якорь на android устройствах */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overflow-anchor: none;

  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    &.${P.loading},
    &.${P.error},
    &.${P.noData} {
      height: 100%;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: hidden;

    height: auto;
    margin: ${({theme:e})=>e.spacing(0,4,4)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};

    &.${P.loading},
    &.${P.error},
    &.${P.noData} {
      height: ${({theme:e})=>`calc(100% - ${e.spacing(4)})`};
    }

    /* Смена уровня пересоздаёт список: строки нового уровня встают на место
       не в том же кадре, поэтому до их появления виден фон обёртки.
       Высоту на это время держит min-height от самого списка */
    &.${P.levelTransition} {
      #${Xe} {
        visibility: hidden;
      }
    }
  }
`})))()}var ir;function ar(){return(ar=e((()=>{T(),B(),ir=b(z)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${I.content} {
      justify-content: center;

      padding: ${({theme:e})=>e.microSpacing(1,0)};
    }
  }
`})))()}var or,sr;function cr(){return(cr=e((()=>{m(),F(),ar(),or=w(),sr=()=>(0,or.jsx)(ir,{children:(0,or.jsx)(_,{color:`grey`,colorIntensity:`600`,children:Ze})})})))()}function lr(){return(lr=e((()=>{cr()})))()}var ur,dr,fr;function pr(){return(pr=e((()=>{ur=u(),re(),ct(),B(),lr(),dr=w(),fr=({item:e})=>{let{onRetry:t}=(0,ur.useContext)(tt),{parentId:n}=e.meta;switch(e.placeholderKind){case`spinner`:return(0,dr.jsx)(S,{});case`skeleton`:return(0,dr.jsx)(z,{isLoading:!0,children:null});case`no-data`:return(0,dr.jsx)(sr,{});case`error`:return(0,dr.jsx)(z,{isError:!0,onRetry:()=>n&&t(n),children:null});default:return null}};try{fr.displayName=`ChildrenPlaceholder`,fr.__docgenInfo={description:``,displayName:`ChildrenPlaceholder`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/ChildrenPlaceholder/ChildrenPlaceholder.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/ChildrenPlaceholder/ChildrenPlaceholder.tsx`,name:`TypeLiteral`}],description:"Строка ветки с заполненным `placeholderKind`",name:`item`,required:!0,tags:{},type:{name:`InfiniteTreeListDataBase & { children?: TData[]; } & { meta: InfiniteTreeItemMeta; placeholderKind?: ChildrenPlaceholderKind; }`}}},tags:{}}}catch{}})))()}function mr(){return(mr=e((()=>{pr()})))()}var hr,gr,_r;function vr(){return(vr=e((()=>{hr=u(),gr=w(),_r=(0,hr.memo)(({item:e,renderItem:t})=>(0,gr.jsx)(gr.Fragment,{children:t(e)}));try{_r.displayName=`CustomItemWrapper`,_r.__docgenInfo={description:"Изолирует `renderItem` потребителя от ре-рендеров строки: без `memo` каждый\nре-рендер `Item` пересобирал бы разметку строки заново.\n\nУзлы с подгружаемыми дочерними элементами рисует `CustomParentWrapper`",displayName:`CustomItemWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/CustomItemWrapper/CustomItemWrapper.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/CustomItemWrapper/CustomItemWrapper.tsx`,name:`TypeLiteral`}],description:`Строка плоского списка`,name:`item`,required:!0,tags:{},type:{name:`FlattenTree<InfiniteTreeListData>`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/CustomItemWrapper/CustomItemWrapper.tsx`,name:`TypeLiteral`}],description:`Рендер-функция строки из props списка`,name:`renderItem`,required:!0,tags:{},type:{name:`(item: FlattenTree<InfiniteTreeListData>) => ReactNode`}}},tags:{}}}catch{}})))()}function yr(){return(yr=e((()=>{vr()})))()}var br;function xr(){return(xr=e((()=>{T(),br=b.div`
  display: contents;
`})))()}var Sr,Cr,wr;function Tr(){return(Tr=e((()=>{Sr=u(),F(),ct(),xr(),Cr=w(),wr=({itemId:e})=>{let{acquireParentSlot:t,enterAnimation:n}=(0,Sr.useContext)(tt),r=(0,Sr.useRef)(null);return(0,Sr.useLayoutEffect)(()=>{let i=r.current,a=t(e);if(!i||!a)return;i.appendChild(a);let o=a.firstElementChild;if(o instanceof HTMLElement){o.classList.remove(P.rowRemoveAnimation);let{shouldAnimate:t,delayIndex:r}=n.read(e);o.classList.toggle(P.rowAddAnimation,t),t&&r!==void 0&&o.style.setProperty(`--sibling-index`,String(r))}return n.claim(e),()=>{a.remove()}},[e,t,n]),(0,Cr.jsx)(br,{ref:r})};try{wr.displayName=`ParentSlot`,wr.__docgenInfo={description:`Слот строки родительского узла списка`,displayName:`ParentSlot`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/ParentSlot/ParentSlot.tsx`,methods:[],props:{itemId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/ParentSlot/types.ts`,name:`TypeLiteral`}],description:`Id узла, чей контейнер занимает строка`,name:`itemId`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Er(){return(Er=e((()=>{Tr()})))()}var Dr,Or;function kr(){return(kr=e((()=>{Dr=u(),ct(),Or=({item:e,context:t,...n})=>{let{renderItem:r,onToggle:i,nodePaginationMap:a,onLoadMore:o,enterAnimation:s,tailRegistry:c,lastRowId:l}=(0,Dr.useContext)(tt),{parentId:u,siblingIndex:d,level:f}=e.meta,p=u?a[u]:void 0,m=!!(p?.lastChildId===e.id&&u&&!p?.isEndReached&&!p?.isChildrenLoading&&!p?.isChildrenError),h=(0,Dr.useRef)(null);h.current||=s.read(e.id);let{shouldAnimate:g,delayIndex:_}=h.current;(0,Dr.useEffect)(()=>{s.claim(e.id)},[]),(0,Dr.useEffect)(()=>{if(!m||!u)return;let t=u,n=e.id;return c.register(t,n,()=>o(t)),()=>{c.unregister(t,n)}},[m,u,e.id,c,o]);let v=e.placeholderKind===`spinner`,y=e.id===l;return{item:e,renderItem:r,onToggle:i,itemProps:n,cssVars:{"--level":f,"--sibling-index":_??d},isSpinner:v,hasAddAnimation:!v&&g,isLastRow:y}}})))()}function Ar(){return(Ar=e((()=>{kr()})))()}var jr,Mr,Nr;function Pr(){return(Pr=e((()=>{C(),F(),B(),mr(),yr(),Er(),Fn(),Ar(),jr=w(),Mr=n(P.row,{variants:{isSpinner:{true:P.rowSpinner},hasAddAnimation:{true:P.rowAddAnimation},isLastRow:{true:P.rowLast}}}),Nr=({children:e,...t})=>{let{item:n,renderItem:r,onToggle:i,itemProps:a,cssVars:o,isSpinner:s,hasAddAnimation:c,isLastRow:l}=Or(t),{nodeId:u,isChildrenAsync:d}=n.meta;return d&&!n.placeholderKind?(0,jr.jsx)(`div`,{...a,children:(0,jr.jsx)(wr,{itemId:n.id})}):(0,jr.jsx)(`div`,{...a,children:(0,jr.jsx)(Tn,{item:n,onToggle:i,children:(0,jr.jsx)(Pn,{id:u,className:Mr({isSpinner:s,hasAddAnimation:c,isLastRow:l}),style:o,children:n.placeholderKind?(0,jr.jsx)(fr,{item:n}):(0,jr.jsx)(_r,{item:n,renderItem:r})})})})};try{Nr.displayName=`TreeItem`,Nr.__docgenInfo={description:"Строка виртуализации: обёртка, которую `Virtuoso` рендерит вокруг элемента.\nСтавит контекст строки, css-переменные уровня и каскада, classname анимации",displayName:`TreeItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/TreeItem/TreeItem.tsx`,methods:[],props:{children:{defaultValue:null,description:``,name:`children`,required:!0,tags:{},type:{name:`default_2.ComponentProps<"div">`}},style:{defaultValue:null,description:``,name:`style`,required:!0,tags:{},type:{name:`default_2.ComponentProps<"div">`}},"data-index":{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`data-index`,required:!0,tags:{},type:{name:`number`}},"data-item-group-index":{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`data-item-group-index`,required:!1,tags:{},type:{name:`number`}},"data-item-index":{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`data-item-index`,required:!0,tags:{},type:{name:`number`}},"data-known-size":{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`data-known-size`,required:!0,tags:{},type:{name:`number`}},item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`FlattenTree<InfiniteTreeListData>`}},context:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`ContextProp`}],description:`The context value passed from the parent component`,name:`context`,parent:{fileName:`ui-temp-10-2026/node_modules/react-virtuoso/dist/index.d.ts`,name:`ContextProp`},required:!0,tags:{},type:{name:`ListFooterContext`}}},tags:{}}}catch{}})))()}function Fr(){return(Fr=e((()=>{Pr()})))()}var Ir;function Lr(){return(Lr=e((()=>{Ir=({isLoading:e,isError:t,isEndReached:n})=>!!(e||t||n)})))()}var Rr;function zr(){return(zr=e((()=>{Rr=e=>!!e.children||e.hasChildren===!0})))()}var Br;function Vr(){return(Vr=e((()=>{Br=e=>!!e.placeholderKind})))()}var Hr;function Ur(){return(Ur=e((()=>{Vr(),Hr=(e,t)=>e.meta.parentId===t&&Br(e)})))()}var Wr;function Gr(){return(Gr=e((()=>{Ur(),Wr=(e,t)=>e.some(e=>Hr(e,t)&&e.placeholderKind===`skeleton`)})))()}var Kr;function qr(){return(qr=e((()=>{Vr(),Kr=(e,t)=>e.meta.parentId===t&&!Br(e)})))()}var Jr;function Yr(){return(Yr=e((()=>{Jr=(e,t)=>!e.isLoading&&!e.isError&&e.data.length===0&&(!!e.isEndReached||t)})))()}var Xr;function Zr(){return(Zr=e((()=>{Xr=(e,t)=>e===t?!0:!e||!t?!1:e.isLoading===t.isLoading&&e.isError===t.isError&&e.isEndReached===t.isEndReached&&e.data.length===t.data.length&&e.data.every((e,n)=>e.id===t.data[n]?.id)})))()}var Qr;function $r(){return($r=e((()=>{qr(),Qr=(e,t)=>e.filter(e=>Kr(e,t)).length})))()}var ei;function ti(){return(ti=e((()=>{ei=()=>{let e=new Map;return{acquire:t=>{if(typeof document>`u`)return null;let n=e.get(t);if(n)return n;let r=document.createElement(`div`);return r.style.display=`contents`,e.set(t,r),r},release:t=>{e.get(t)?.remove(),e.delete(t)}}}})))()}var ni;function ri(){return(ri=e((()=>{ni=()=>{let e=new Map,t=null,n=null,r=e=>{if(e.isLoadMoreRequested||t===null||!n)return;let r=n(e.itemId);r===-1||t<r||(e.isLoadMoreRequested=!0,e.endReached())};return{register(t,n,i){let a=e.get(t);if(a&&a.itemId===n){a.endReached=i;return}let o={itemId:n,endReached:i,isLoadMoreRequested:!1};e.set(t,o),r(o)},unregister(t,n){if(n===void 0){e.delete(t);return}e.get(t)?.itemId===n&&e.delete(t)},checkRange(i,a){t=i,n=a,e.forEach(r)},forgetRange(){t=null,n=null}}}})))()}var ii,ai;function oi(){return(oi=e((()=>{zr(),ii=e=>e.hasChildren===!0||e.children?.length===0,ai=(e,t,n=[],r=0,i)=>{let a=[];return e.forEach((e,o)=>{let s=[...n,e.id],c=t.has(e.id),l=!!ii(e),u={...e,meta:{hasNested:Rr(e),isChildrenAsync:l,level:r,path:s,isExpanded:c,parentId:i,siblingIndex:o,nodeId:`infinite-tree-item-${e.id}`}};if(a.push(u),c&&e.children&&e.children.length>0){let n=ai(e.children,t,s,r+1,e.id);a.push(...n)}}),a}})))()}var si;function ci(){return(ci=e((()=>{oi(),si=(e,t,n)=>ai(e,n,t.meta.path,t.meta.level+1,t.id)})))()}var li;function ui(){return(ui=e((()=>{li=(e,t,n)=>{let r=t===0&&n>0,i=r?n:t;return{itemIds:e.slice(i),startDelayIndex:r?i:0}}})))()}var di;function fi(){return(fi=e((()=>{di=(e,t)=>{let n=new Set,r=[...e];for(;r.length>0;){let e=r.pop();if(!e||n.has(e.id))continue;n.add(e.id),e.children?.length&&r.push(...e.children);let i=t[e.id]?.data;i?.length&&r.push(...i)}return n}})))()}var pi;function mi(){return(mi=e((()=>{pi=(e,t,n,r=0)=>{let i=new Set(e);if(n===void 0)return i;let a=r<n;return t.forEach(t=>{let o=!!t.children||t.hasChildren===!0;a&&o&&(e?.has(t.id)||i.add(t.id),t.children?.length&&pi(e,t.children,n,r+1).forEach(e=>i.add(e)))}),i}})))()}var hi;function gi(){return(gi=e((()=>{F(),hi=e=>e===void 0?Qe:`${$e}${e}`})))()}function _i(){return(_i=e((()=>{gi()})))()}var vi;function yi(){return(yi=e((()=>{vi=(e,t)=>{let n=[],r=t=>{e.filter(e=>e.meta.parentId===t).forEach(e=>{n.push(e),e.meta.isExpanded&&r(e.id)})};return r(t),n}})))()}var bi,xi;function Si(){return(Si=e((()=>{qr(),ci(),yi(),bi=(e,t)=>e.filter(e=>Kr(e,t)),xi=(e,t,n,r)=>{let i=e.findIndex(e=>e.id===t);if(i===-1)return e;let a=e[i],o=si(n,a,r),s=bi(e,t);if(s.length===o.length&&s.every((e,t)=>e.id===o[t]?.id))return e;let c=vi(e,t),l=[];o.forEach(t=>{l.push(t);let r=n.find(e=>e.id===t.id);t.meta.isExpanded&&r?.children?.length||l.push(...vi(e,t.id))});let u=i+1+c.length;return[...e.slice(0,i),{...a,children:n},...l,...e.slice(u)]}})))()}var Ci;function wi(){return(wi=e((()=>{yi(),Ci=(e,t)=>{let n=new Set(vi(e,t).map(e=>e.id));return e.filter(e=>!n.has(e.id)).map(e=>e.id===t?{...e,meta:{...e.meta,isExpanded:!1}}:e)}})))()}var Ti;function Ei(){return(Ei=e((()=>{Ti=e=>[...e].sort((e,t)=>e.meta.level===t.meta.level?e.meta.siblingIndex-t.meta.siblingIndex:t.meta.level-e.meta.level)})))()}var Di;function Oi(){return(Oi=e((()=>{F(),Di=e=>{document.getElementById(e)?.classList.add(P.rowRemoveAnimation)}})))()}function ki(){return(ki=e((()=>{Oi()})))()}var Ai,ji,Mi,Ni,Pi,Fi,Ii;function Li(){return(Li=e((()=>{Ur(),qr(),$r(),yi(),Ai=(e,t)=>`loader-${e}-${t}`,ji=e=>`no-data-${e}`,Mi=(e,t)=>Array.from({length:t},(t,n)=>Ai(e,n)),Ni=(e,t,n,r)=>{if(e)return r?`spinner`:`skeleton`;if(t)return`error`;if(n&&!r)return`no-data`},Pi=(e,t)=>e?e===`skeleton`?t:1:0,Fi=(e,{kind:t,index:n,siblingIndex:r})=>{let i=t===`no-data`?ji(e.id):Ai(e.id,n);return{id:i,placeholderKind:t,meta:{hasNested:!1,isChildrenAsync:!1,level:e.meta.level+1,path:[...e.meta.path,i],isExpanded:!1,parentId:e.id,siblingIndex:r,nodeId:`infinite-tree-item-${i}`}}},Ii=(e,t,n,r,i,a)=>{let o=e.findIndex(e=>e.id===t);if(o===-1)return e;let s=e[o],c=e.filter(e=>Hr(e,t)),l=e.some(e=>Kr(e,t)),u=Ni(n,!!i,!!a,l),d=Pi(u,r);if(c.length===d&&c.every(e=>e.placeholderKind===u))return e;let f=e.filter(e=>!Hr(e,t));if(!u)return f;let p=f.findIndex(e=>e.id===t),m=vi(f,t),h=p+1+m.length,g=Qr(f,t),_=Array.from({length:d},(e,t)=>Fi(s,{kind:u,index:t,siblingIndex:g+t}));return[...f.slice(0,h),..._,...f.slice(h)]}})))()}function Ri(){return(Ri=e((()=>{Lr(),zr(),Gr(),Yr(),Zr(),$r(),ti(),ri(),oi(),ui(),fi(),mi(),_i(),yi(),Si(),wi(),Ei(),ki(),Li()})))()}var V,zi;function Bi(){return(Bi=e((()=>{V=u(),Ri(),zi=({items:e,flatList:t,flatListRef:n,expandedIds:r,expandedIdsRef:i,enterAnimation:a,insertChildren:o,syncChildrenPlaceholders:s,skeletonCount:c,releaseParentSlot:l})=>{let[u,d]=(0,V.useState)({}),f=(0,V.useRef)(u);(0,V.useEffect)(()=>{f.current=u});let p=(0,V.useRef)(new Set),m=(0,V.useCallback)((e,t)=>{let n=t;d(t=>Xr(t[e],n)?t:{...t,[e]:n})},[]),h=(0,V.useCallback)((e,t)=>{let n=p.current.has(e);return t.isLoading&&p.current.add(e),Jr(t,n)},[]),g=(0,V.useCallback)((e,t)=>{let r=Qr(n.current,e),i=Wr(n.current,e);if(o(e,t.data),s(e,!!t.isLoading,c,t.isError,h(e,t)),t.isLoading){r===0&&!i&&a.schedule(Mi(e,c));return}if(t.isError||t.data.length<=r)return;let{itemIds:l,startDelayIndex:u}=li(t.data.map(e=>e.id),r,i?c:0);a.schedule(l,u)},[a,n,o,h,c,s]);(0,V.useEffect)(()=>{Object.entries(u).forEach(([e,t])=>{i.current.has(e)&&g(e,t)})},[u,r]);let _=(0,V.useMemo)(()=>Object.entries(u).reduce((e,[t,n])=>(e[t]={lastChildId:n.data[n.data.length-1]?.id,isEndReached:n.isEndReached,isChildrenLoading:n.isLoading,isChildrenError:n.isError},e),{}),[u]),v=(0,V.useRef)(new Map),y=(0,V.useMemo)(()=>(t.forEach(e=>{e.meta.isChildrenAsync&&v.current.set(e.id,e)}),[...v.current.values()]),[t]);return(0,V.useEffect)(()=>{let t=di(e,f.current);v.current.forEach((e,n)=>{t.has(n)||(v.current.delete(n),l(n))}),p.current.forEach(e=>{t.has(e)||p.current.delete(e)}),d(e=>{let n=Object.entries(e).filter(([e])=>t.has(e));return n.length===Object.keys(e).length?e:Object.fromEntries(n)})},[e,l]),{registerChildren:m,nodePaginationMap:_,parentItems:y}}})))()}function Vi(){return(Vi=e((()=>{Bi()})))()}var Hi,Ui,Wi;function Gi(){return(Gi=e((()=>{Hi=u(),F(),Ui={shouldAnimate:!1},Wi=()=>{let e=(0,Hi.useRef)(new Map),t=(0,Hi.useRef)(void 0),n=(0,Hi.useCallback)(()=>{clearTimeout(t.current),e.current.clear()},[]),r=(0,Hi.useCallback)((r,i=0)=>{r.length&&(r.forEach((t,n)=>e.current.set(t,i+n)),clearTimeout(t.current),t.current=setTimeout(n,100))},[n]),i=(0,Hi.useCallback)(t=>{let n=e.current.get(t);return n===void 0?Ui:{shouldAnimate:!0,delayIndex:n}},[]),a=(0,Hi.useCallback)(t=>{e.current.delete(t)},[]);return(0,Hi.useEffect)(()=>()=>clearTimeout(t.current),[]),(0,Hi.useMemo)(()=>({schedule:r,read:i,claim:a,reset:n}),[r,i,a,n])}})))()}function Ki(){return(Ki=e((()=>{Gi()})))()}var qi,Ji;function Yi(){return(Yi=e((()=>{qi=u(),Ji=()=>{let e=(0,qi.useRef)(new Set);return{notifyExpand:(0,qi.useCallback)((t,n)=>{e.current.has(t)||(e.current.add(t),n?.())},[]),resetExpandNotification:(0,qi.useCallback)(t=>{t.forEach(t=>e.current.delete(t))},[])}}})))()}function Xi(){return(Xi=e((()=>{Yi()})))()}var H,Zi;function Qi(){return(Qi=e((()=>{H=u(),ne(),He(),Ri(),Zi=({items:e,initialExpandedLevel:t,enterAnimation:n,onCollapse:r})=>{let i=y(),[a,{add:o,remove:s}]=Ve(new Set),[c,l]=(0,H.useState)(()=>ai(e,new Set)),u=(0,H.useRef)(a),d=(0,H.useRef)(c);(0,H.useEffect)(()=>{u.current=a,d.current=c});let f=(0,H.useRef)([]);(0,H.useEffect)(()=>()=>{f.current.forEach(clearTimeout)},[]),(0,H.useEffect)(()=>{let n=pi(u.current,e,t);n.forEach(o),u.current=n,l(ai(e,n))},[e]);let p=(0,H.useCallback)((e,t)=>{l(n=>xi(n,e,t,u.current))},[]),m=(0,H.useCallback)((e,t,n,r,i)=>{l(a=>Ii(a,e,t,n,r,i))},[]),h=(0,H.useCallback)(e=>{let t=d.current.find(t=>t.id===e)?.children;n.schedule(t?.map(e=>e.id)??[]),o(e),u.current=new Set(u.current).add(e),l(n=>{let r=n.map(t=>t.id===e?{...t,meta:{...t.meta,isExpanded:!0}}:t);return t?.length?xi(r,e,t,u.current):r})},[o,n]),g=(0,H.useCallback)(e=>{let t=Ti(vi(d.current,e));t.forEach(({meta:e})=>Di(e.nodeId));let n=setTimeout(()=>{f.current=f.current.filter(e=>e!==n);let i=[e,...t.map(({id:e})=>e)],a=new Set(u.current);i.forEach(e=>{s(e),a.delete(e)}),u.current=a,r(i),l(t=>Ci(t,e))},i.transitions.duration.shorter);f.current.push(n)},[r,s,i]);return{flatList:c,flatListRef:d,expandedIds:a,expandedIdsRef:u,insertChildren:p,syncChildrenPlaceholders:m,onToggle:(0,H.useCallback)(({id:e})=>{if(u.current.has(e)){g(e);return}h(e)},[g,h])}}})))()}function $i(){return($i=e((()=>{Qi()})))()}var ea,ta;function na(){return(na=e((()=>{ea=u(),Ri(),ta=({items:e,isMobile:t,checkNodeExists:n})=>{let[r,i]=(0,ea.useState)([]),a=(0,ea.useMemo)(()=>{if(e.length!==1)return;let[t]=e;return Rr(t)?t.id:void 0},[e]);(0,ea.useEffect)(()=>{i([])},[t]),(0,ea.useEffect)(()=>{let e=r.findIndex(e=>!n(e));e!==-1&&i(r.slice(0,e))},[r,n]);let o=(0,ea.useCallback)(e=>{i(t=>[...t,e])},[]),s=(0,ea.useCallback)(()=>{i(e=>e.slice(0,-1))},[]),c=(0,ea.useMemo)(()=>[hi(t?a:void 0),...r.map(e=>hi(e))],[t,a,r]);return{currentNodeId:r[r.length-1]??a,baseNodeId:a,activeLevelKeys:c,hasUpperLevel:r.length>0,isRootLevel:!t||r.length===0&&a===void 0,enterNode:o,leaveNode:s}}})))()}function ra(){return(ra=e((()=>{na()})))()}var ia,aa;function oa(){return(oa=e((()=>{ia=u(),aa=({levelKey:e,activeLevelKeys:t,virtuosoRef:n})=>{let r=(0,ia.useRef)(new Map),i=(0,ia.useRef)(new Map),a=(0,ia.useCallback)(t=>{r.current.set(e,t),n.current?.getState(t=>{i.current.set(e,t)})},[e,n]),o=(0,ia.useCallback)(e=>{r.current.delete(e),i.current.delete(e)},[]),s=(0,ia.useCallback)(e=>r.current.get(e),[]);return(0,ia.useEffect)(()=>{let e=new Set(t);r.current.forEach((t,n)=>{e.has(n)||(r.current.delete(n),i.current.delete(n))})},[t]),{rememberLevel:a,forgetLevel:o,getLevelPosition:s,levelState:i.current.get(e)}}})))()}function sa(){return(sa=e((()=>{oa()})))()}var ca,la;function ua(){return(ua=e((()=>{ca=u(),F(),la=({scrollRef:e,virtuosoRef:t})=>{let n=(0,ca.useRef)(null);return{updateVisibility:(0,ca.useCallback)(e=>{n.current?.classList.toggle(P.visibleScrollToTopButton,e.startIndex>2)},[]),onTopButtonProps:{buttonRef:n,handleScrollToTop:(0,ca.useCallback)(()=>{e.current&&(e.current.style.scrollBehavior=`auto`),t.current?.scrollToIndex(0)},[e,t]),scrollRef:e}}}})))()}function da(){return(da=e((()=>{ua()})))()}var fa,pa;function ma(){return(ma=e((()=>{fa=u(),Ri(),pa=({displayedList:e,levelKey:t})=>{let n=(0,fa.useRef)(null);n.current||=ni();let r=n.current,i=(0,fa.useRef)(e),a=(0,fa.useRef)(null),o=(0,fa.useCallback)(()=>{let e=a.current;e&&r.checkRange(e.endIndex,e=>i.current.findIndex(t=>t.id===e))},[r]);return(0,fa.useEffect)(()=>{a.current=null,r.forgetRange()},[t,r]),(0,fa.useEffect)(()=>{i.current=e,o()},[e,o]),{tailRegistry:r,trackRange:(0,fa.useCallback)(e=>{a.current=e,o()},[o])}}})))()}function ha(){return(ha=e((()=>{ma()})))()}function ga(){return(ga=e((()=>{sa(),da(),ha()})))()}var _a;function va(){return(va=e((()=>{_a=(e,t)=>e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop})))()}var U,ya;function ba(){return(ba=e((()=>{U=u(),Be(),F(),ga(),va(),ya=({scrollRef:e,isEndReached:t,onLoadMore:n,displayedList:r,enterAnimation:i,isRootLevel:a,levelKey:o,activeLevelKeys:s})=>{let c=(0,U.useRef)(null),l=(0,U.useRef)(null),u=(0,U.useRef)(null),d=(0,U.useRef)(null),f=(0,U.useRef)(null),{tailRegistry:p,trackRange:m}=pa({displayedList:r,levelKey:o}),{updateVisibility:h,onTopButtonProps:g}=la({scrollRef:e,virtuosoRef:c}),{rememberLevel:_,forgetLevel:v,getLevelPosition:y,levelState:ee}=aa({levelKey:o,activeLevelKeys:s,virtuosoRef:c}),te=(0,U.useRef)(a);(0,U.useEffect)(()=>{te.current=a},[a]);let b=(0,U.useCallback)(()=>{te.current&&n?.()},[n]),{scrollParent:x,recalculateVerticalScroll:S,handleEndReach:ne,isEndReachedWithScroll:re}=ze({scrollRef:e,isEndReached:t,onLoadMore:b,virtuosoId:Xe}),ie=(0,U.useCallback)(e=>{e&&i.reset()},[i]),ae=(0,U.useCallback)(e=>{h(e),m(e)},[h,m]),C=(0,U.useCallback)(()=>{let e=l.current;return!x||!e?null:Math.max(_a(e,x),0)},[x]),w=(0,U.useCallback)(()=>{let e=C();!x||e===null||(_(x.scrollTop-e),f.current=l.current?.offsetHeight??null)},[x,C,_]),oe=(0,U.useCallback)(()=>{let e=l.current,t=d.current;if(!x||!e||t===null)return;let n=x.scrollTop;d.current=null,e.style.removeProperty(`min-height`),x.scrollTop<n&&(d.current=t,e.style.minHeight=`${t}px`,x.scrollTop=n)},[x]),T=(0,U.useCallback)(()=>{let e=u.current,t=l.current,n=C();if(!e||!x||!t||n===null)return;let r=y(e);if(r===void 0){u.current=null,x.scrollTop=Math.min(x.scrollTop,n);return}let i=Math.max(n+r,0);if(i>x.scrollHeight-x.clientHeight){let e=Math.max(r+x.clientHeight,d.current??0);d.current=e,t.style.minHeight=`${e}px`}x.scrollTop=i,!(x.scrollTop<i)&&(u.current=null)},[x,C,y]),se=(0,U.useRef)(null),ce=(0,U.useRef)(null),le=(0,U.useCallback)(()=>{se.current?.disconnect(),se.current=null},[]),ue=(0,U.useCallback)(()=>{ce.current!==null&&(clearTimeout(ce.current),ce.current=null),l.current?.classList.remove(P.levelTransition),x?.style.removeProperty(`scroll-behavior`)},[x]),E=(0,U.useCallback)(()=>{T(),oe(),!(u.current||d.current!==null)&&(le(),ue())},[T,oe,le,ue]),de=(0,U.useCallback)(()=>{T(),oe(),le(),ue()},[T,oe,le,ue]),fe=(0,U.useCallback)(()=>{let e=l.current;ue(),e?.classList.add(P.levelTransition),x?.style.setProperty(`scroll-behavior`,`auto`);let t=f.current;e&&t!==null&&(d.current=t,e.style.minHeight=`${t}px`),ce.current=setTimeout(de,200)},[ue,de,x]),pe=(0,U.useCallback)(()=>{if(se.current)return;let e=l.current?.querySelector(`#${Xe}`);if(!e){E();return}let t=new ResizeObserver(([e])=>{!e||e.contentRect.height===0||E()});t.observe(e),se.current=t},[E]);(0,U.useEffect)(()=>()=>{le(),ue()},[le,ue]);let me=(0,U.useRef)(o);return(0,U.useLayoutEffect)(()=>{me.current!==o&&(me.current=o,u.current=o,d.current=null,l.current?.style.removeProperty(`min-height`),fe(),T(),pe())},[o,T,pe,fe]),{scrollParent:x,listRef:l,tailRegistry:p,isEndReachedWithScroll:re,saveLevelSnapshot:w,dropLevelSnapshot:v,virtuosoProps:{id:Xe,ref:c,overscan:30,restoreStateFrom:ee,initialTopMostItemIndex:0,rangeChanged:ae,endReached:ne,totalListHeightChanged:S,isScrolling:ie},onTopButtonProps:g}}})))()}function xa(){return(xa=e((()=>{ba()})))()}var Sa,Ca;function wa(){return(wa=e((()=>{Sa=u(),Ca=({isMobile:e,currentNodeId:t,title:n})=>{let r=(0,Sa.useRef)(new Set);(0,Sa.useEffect)(()=>{!e||!t||n||r.current.has(t)||(r.current.add(t),console.warn(`InfiniteTreeList: у узла "${t}" не задан параметр title`))},[e,t,n])}})))()}function Ta(){return(Ta=e((()=>{wa()})))()}function Ea(){return(Ea=e((()=>{Vi(),Ki(),Xi(),$i(),ra(),xa(),Ta()})))()}var W,Da;function Oa(){return(Oa=e((()=>{W=u(),ae(),ce(),F(),Ea(),Ri(),Da=({initialExpandedLevel:e,items:t,onRetry:n,errorMsg:r,isError:i,isLoading:a,scrollRef:o,isEndReached:s,onLoadMore:c,renderItem:u,renderParent:d,itemSkeleton:f,endOfScrollMsg:p,noDataImgSrc:m,errorImgSrc:h})=>{let{imagesMap:g}=(0,W.useContext)(l),{isMobile:_}=se(),v=Wi(),y=(0,W.useRef)(null);y.current||=ei();let ee=(0,W.useCallback)(e=>y.current?.acquire(e)??null,[]),te=(0,W.useCallback)(e=>{y.current?.release(e)},[]),{notifyExpand:b,resetExpandNotification:x}=Ji(),{flatList:S,flatListRef:ne,expandedIds:re,expandedIdsRef:ie,insertChildren:ae,syncChildrenPlaceholders:C,onToggle:w}=Zi({items:t,initialExpandedLevel:e,enterAnimation:v,onCollapse:x}),oe=f?3:1,{registerChildren:T,nodePaginationMap:ce,parentItems:le}=zi({items:t,flatList:S,flatListRef:ne,expandedIds:re,expandedIdsRef:ie,enterAnimation:v,insertChildren:ae,syncChildrenPlaceholders:C,skeletonCount:oe,releaseParentSlot:te}),ue=(0,W.useCallback)(e=>S.some(({id:t})=>t===e),[S]),{currentNodeId:E,baseNodeId:de,activeLevelKeys:fe,hasUpperLevel:pe,isRootLevel:me,enterNode:he,leaveNode:ge}=ta({items:t,isMobile:_,checkNodeExists:ue}),_e=!!(de&&re.has(de));(0,W.useEffect)(()=>{!_||!de||_e||w({id:de})},[_,de,_e,w]);let ve=(0,W.useMemo)(()=>{if(E)return S.find(({id:e})=>e===E)},[E,S]),ye=ve?.title;Ca({isMobile:_,currentNodeId:ve?.id,title:ye});let be=(0,W.useMemo)(()=>_?E?S.filter(e=>e.meta.parentId===E):S.filter(e=>e.meta.level===0):S,[_,S,E]),xe=hi(_?E:void 0),{scrollParent:Se,listRef:Ce,tailRegistry:we,isEndReachedWithScroll:Te,virtuosoProps:Ee,onTopButtonProps:De,saveLevelSnapshot:Oe,dropLevelSnapshot:ke}=ya({scrollRef:o,isEndReached:s,onLoadMore:c,displayedList:be,enterAnimation:v,isRootLevel:me,levelKey:xe,activeLevelKeys:fe}),Ae=(0,W.useRef)(xe);(0,W.useEffect)(()=>{Ae.current!==xe&&(Ae.current=xe,v.reset())},[xe,v]);let je=(0,W.useCallback)(e=>{ie.current.has(e.id)||w(e),e.children?.length||Qr(ne.current,e.id)>0||C(e.id,!0,oe)},[w,ne,ie,C,oe]),Me=(0,W.useCallback)(e=>{let t=ne.current.find(({id:t})=>t===e.id);t?.meta.hasNested&&(je(t),v.reset(),Oe(),ke(hi(e.id)),he(e.id))},[ne,je,v,Oe,ke,he]),Ne=(0,W.useCallback)(e=>{if(_){Me(e);return}w(e)},[_,Me,w]),Pe=(0,W.useCallback)(()=>{v.reset(),Oe(),ge()},[Oe,ge,v]),D=!t?.length,Fe=(0,W.useMemo)(()=>{if(D)return a?`loading`:i?`error`:`noData`},[D,a,i]),Ie=(0,W.useMemo)(()=>({isLoading:Fe===`loading`,isError:Fe===`error`,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[r||``],imgSrc:h??g.defaultErrorImgSrc,onRetry:n}}),[Fe,r,h,n,g]),Le=(0,W.useMemo)(()=>({isLoading:me&&a,isError:me&&i,isEndReached:me&&Te,endOfScrollMsg:p,onRetry:n}),[me,a,i,Te,p,n]);return{displayedList:be,levelKey:xe,lastRowId:(0,W.useMemo)(()=>{if(!Ir(Le))return be[be.length-1]?.id},[Le,be]),levelHeaderProps:(0,W.useMemo)(()=>{if(!(!_||!E)&&!(!ye&&!pe))return{title:ye,hasBackButton:pe,onBack:Pe}},[_,E,ye,pe,Pe]),onToggle:Ne,nodePaginationMap:ce,registerChildren:T,notifyExpand:b,parentItems:le,acquireParentSlot:ee,contentStateProps:Ie,isNoData:D,state:Fe,scrollParent:Se,listRef:Ce,virtuosoProps:Ee,footerContext:Le,onTopButtonProps:De,itemSkeleton:f,renderItem:u,renderParent:d??u,onRetry:n,noDataImgSrc:m,enterAnimation:v,tailRegistry:we}}})))()}function ka(){return(ka=e((()=>{Oa()})))()}var Aa,ja,Ma,G;function K(){return(K=e((()=>{Ue(),De(),d(),C(),F(),ct(),xt(),Ht(),Yt(),nn(),tr(),rr(),Fr(),ka(),Aa=w(),ja=(e,t)=>t.id,Ma=n([ee,P.root],{variants:{state:{loading:P.loading,error:P.error,noData:P.noData}}}),G=e=>{let{displayedList:t,levelKey:n,lastRowId:r,levelHeaderProps:i,onToggle:a,contentStateProps:o,isNoData:s,state:c,scrollParent:l,listRef:u,virtuosoProps:d,footerContext:f,onTopButtonProps:p,renderItem:m,renderParent:h,itemSkeleton:g,onRetry:_,noDataImgSrc:v,enterAnimation:y,tailRegistry:ee,nodePaginationMap:te,registerChildren:b,notifyExpand:x,parentItems:S,acquireParentSlot:ne}=Da(e);return(0,Aa.jsx)(nr,{ref:u,className:Ma({state:c}),children:(0,Aa.jsxs)(at,{itemSkeleton:g,nodePaginationMap:te,registerChildren:b,notifyExpand:x,onListRetry:_,enterAnimation:y,tailRegistry:ee,renderItem:m,renderParent:h,onToggle:a,acquireParentSlot:ne,lastRowId:r,children:[(0,Aa.jsx)($n,{parents:S}),i&&(0,Aa.jsx)(yt,{...i}),(0,Aa.jsxs)(Ee,{...o,children:[s&&(0,Aa.jsx)(qt,{noDataImgSrc:v}),!s&&l&&(0,Aa.jsxs)(Aa.Fragment,{children:[(0,Aa.jsx)(We,{...d,data:t,customScrollParent:l,computeItemKey:ja,context:f,components:{Item:Nr,Footer:Bt}},n),(0,Aa.jsx)(en,{...p})]})]})]})})};try{G.displayName=`InfiniteTreeList`,G.__docgenInfo={description:`Виртуализированное дерево с бесконечной подгрузкой`,displayName:`InfiniteTreeList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeList.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Список элементов дерева`,name:`items`,required:!0,tags:{},type:{name:`TData[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Список в состоянии загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Список в состоянии ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Флаг достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},onLoadMore:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных`,name:`onLoadMore`,required:!1,tags:{},type:{name:`() => void`}},scrollRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Ref на контейнер, в котором должен быть скролл`,name:`scrollRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Рендер-функция строки без пагинации дочерних элементов.`,name:`renderItem`,required:!0,tags:{example:`renderItem={(item) => (
              <InfiniteTreeListItem actions={<Actions />}>
                <Avatar>{item.avatarName}</Avatar>
                <Typography>{item.organization}</Typography>
              </InfiniteTreeListItem>
            )}`},type:{name:`(item: TData & { meta: InfiniteTreeItemMeta; }) => ReactNode`}},renderParent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:"Рендер-функция строки узла с подгружаемыми дочерними элементами (`hasChildren`).\nБез `renderParent` такие узлы рендерит `renderItem`.",name:`renderParent`,required:!1,tags:{example:`renderParent={(item) => (
                <InfiniteTreeListItem
                  isLoading={childrenState?.isLoading}
                  isError={childrenState?.isError}
                  isEndReached={childrenState?.isEndReached}
                  childItems={childrenState?.data}
                  onOpen={() => loadChildren(item.id)}
                  onLoadMore={() => loadChildren(item.id)}
                >
                  <Avatar>{item.avatarName}</Avatar>
                  <Typography>{item.organization}</Typography>
                </InfiniteTreeListItem>
              )}`},type:{name:`(item: TData & { meta: InfiniteTreeItemMeta; }) => ReactNode`}},initialExpandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию.`,name:`initialExpandedLevel`,required:!1,tags:{},type:{name:`number`}},endOfScrollMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Сообщение, отображаемое при достижении конца списка`,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}},itemSkeleton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Строка в состоянии загрузки.`,name:`itemSkeleton`,required:!1,tags:{},type:{name:`ReactNode`}},noDataImgSrc:{defaultValue:{value:`берется из ConfigProvider`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Изображение при отсутствии данных`,name:`noDataImgSrc`,required:!1,tags:{default:`берется из ConfigProvider`},type:{name:`string`}},errorImgSrc:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/types.ts`,name:`TypeLiteral`}],description:`Изображение при ошибке (используется в ContentState)`,name:`errorImgSrc`,required:!1,tags:{},type:{name:`string`}}},tags:{example:`<InfiniteTreeList
  items={items}
  scrollRef={scrollRef}
  onRetry={refetch}
  renderItem={(item) => (
    <InfiniteTreeListItem>{item.name}</InfiniteTreeListItem>
  )}
  renderParent={(item) => (
    <InfiniteTreeListItem childItems={childrenState[item.id]?.data}>
      {item.name}
    </InfiniteTreeListItem>
  )}
/>`}}}catch{}})))()}var Na;function Pa(){return(Pa=e((()=>{o(),Na={root:r(`action-cell-base`),hasMainActions:r(`action-cell-base_has-main-actions`)}})))()}var Fa;function Ia(){return(Ia=e((()=>{o(),Fa={root:r(`action-cell-base__main-icon-button`)}})))()}var La;function Ra(){return(Ra=e((()=>{ie(),T(),La=b(te)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    order: 2;

    background-color: ${({theme:e})=>e.palette.grey[100]};
  }
`})))()}var za,Ba;function Va(){return(Va=e((()=>{za=u(),Ba=({action:e})=>{let{loading:t,disabledReason:n,name:r}=e,[i,a]=(0,za.useState)(!1);return(0,za.useEffect)(()=>{t&&a(!1)},[t]),{tooltipProps:{title:n||r,open:i,onOpen:()=>a(!0),onClose:()=>a(!1)}}}})))()}function Ha(){return(Ha=e((()=>{Va()})))()}var Ua,Wa;function Ga(){return(Ga=e((()=>{Te(),me(),Ia(),Ra(),Ha(),Ua=w(),Wa=e=>{let{tooltipProps:t}=Ba(e),{action:n,onActionClick:r,isDisabled:i}=e,{name:a,icon:o,needConfirm:s,confirmText:c,confirmMobileTitle:l,confirmButtonProps:u,disabledReason:d,disabled:f,loading:p,isBlockingOperation:m,loadingNote:h,onClick:g,isMobilePrimary:_,mobileProps:v,...y}=n,ee=e=>(0,Ua.jsx)(E,{withoutContainer:!f,placement:`top`,...t,children:(0,Ua.jsx)(La,{disabled:i||f,loading:p,...y,variant:`text`,...e,className:Fa.root,children:o})},a);return(0,Ua.jsx)(Ua.Fragment,{children:s?(0,Ua.jsx)(we,{text:c,confirmButtonProps:u,popoverProps:{title:l},actionComponent:e=>ee(e),onConfirm:r(g)}):ee({onClick:r(g)})})};try{Wa.displayName=`MainIconButton`,Wa.__docgenInfo={description:``,displayName:`MainIconButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainIconButton/MainIconButton.tsx`,methods:[],props:{action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainIconButton/MainIconButton.tsx`,name:`TypeLiteral`}],description:``,name:`action`,required:!0,tags:{},type:{name:`Omit<WithoutEmotionSpecific<ButtonProps>, "color" | "component" | "variant" | "centerRipple" | "disableRipple" | "disableTouchRipple" | ... 4 more ... | "disableFocusRipple"> & { ...; } & Omit<...> & SingleAction<...>`}},onActionClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainIconButton/MainIconButton.tsx`,name:`TypeLiteral`}],description:`Обработчик клика на действие`,name:`onActionClick`,required:!0,tags:{},type:{name:`ActionHandler<TAction>`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainIconButton/MainIconButton.tsx`,name:`TypeLiteral`}],description:`Если true, action не доступен`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Ka(){return(Ka=e((()=>{Ga()})))()}var qa;function Ja(){return(Ja=e((()=>{p(),T(),qa=b(x)`
  order: 1;

  width: 100%;
`})))()}var Ya,Xa;function Za(){return(Za=e((()=>{Te(),Ja(),Ya=w(),Xa=({action:e,isDisabled:t,onActionClick:n})=>{let{mobileProps:r,name:i,icon:a,needConfirm:o,confirmText:s,confirmMobileTitle:c,confirmButtonProps:l,disabledReason:u,disabled:d,loading:f,isBlockingOperation:p,loadingNote:m,onClick:h,isMobilePrimary:g,..._}=e,v=r?.text??i,y=r?.color??`primary`,ee=e=>(0,Ya.jsx)(qa,{disabled:t||d,loading:f,color:y,..._,variant:`contained`,...e,children:v});return o?(0,Ya.jsx)(we,{text:s,confirmButtonProps:l,popoverProps:{title:c},actionComponent:e=>ee(e),onConfirm:n(h)}):ee({onClick:n(h)})};try{Xa.displayName=`MobileMainButton`,Xa.__docgenInfo={description:``,displayName:`MobileMainButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MobileMainButton/MobileMainButton.tsx`,methods:[],props:{action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MobileMainButton/MobileMainButton.tsx`,name:`TypeLiteral`}],description:``,name:`action`,required:!0,tags:{},type:{name:`Omit<WithoutEmotionSpecific<ButtonProps>, "color" | "component" | "variant" | "centerRipple" | "disableRipple" | "disableTouchRipple" | ... 4 more ... | "disableFocusRipple"> & { ...; } & Omit<...> & SingleAction<...>`}},onActionClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MobileMainButton/MobileMainButton.tsx`,name:`TypeLiteral`}],description:`Обработчик клика на действие`,name:`onActionClick`,required:!0,tags:{},type:{name:`ActionHandler<TAction>`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MobileMainButton/MobileMainButton.tsx`,name:`TypeLiteral`}],description:`Если true, action не доступен`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Qa(){return(Qa=e((()=>{Za()})))()}var $a,eo,to;function no(){return(no=e((()=>{_e(),he(),me(),ce(),Ka(),Qa(),$a=u(),eo=w(),to=({action:e,onActionClick:t,isDisabled:n})=>{let{isMobile:r}=se();if(`actions`in e){let{disabled:r,icon:i,name:a,disabledReason:o,actions:s}=e;return(0,eo.jsx)(E,{title:o||a,withoutContainer:!r,placement:`top`,children:(0,eo.jsx)(ge,{icon:i,variant:`text`,disabled:n||r,children:s.map(({name:e,onClick:n,...r})=>(0,$a.createElement)(de,{...r,key:e,onClick:t(n)},e))})},a)}return r&&e.isMobilePrimary?(0,eo.jsx)(Xa,{action:e,onActionClick:t,isDisabled:n}):(0,eo.jsx)(Wa,{action:e,onActionClick:t,isDisabled:n})};try{to.displayName=`MainAction`,to.__docgenInfo={description:``,displayName:`MainAction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainAction.tsx`,methods:[],props:{action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainAction.tsx`,name:`TypeLiteral`}],description:`Основные действия`,name:`action`,required:!0,tags:{},type:{name:`MainActionKind<TAction>`}},onActionClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainAction.tsx`,name:`TypeLiteral`}],description:`Обработчик клика на действие`,name:`onActionClick`,required:!0,tags:{},type:{name:`ActionHandler<TAction>`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/MainAction/MainAction.tsx`,name:`TypeLiteral`}],description:`Если true, action не доступен`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function ro(){return(ro=e((()=>{no()})))()}var io;function ao(){return(ao=e((()=>{_e(),T(),io=b(ge)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    order: 3;

    background-color: ${({theme:e})=>e.palette.grey[100]};
  }
`})))()}var oo,so,co;function lo(){return(lo=e((()=>{je(),he(),ao(),oo=w(),so=u(),co=({actions:e,onActionClick:t,isDisabled:n})=>(0,oo.jsx)(io,{"aria-label":`Дополнительные действия`,title:`Дополнительные действия`,icon:(0,oo.jsx)(Ae,{}),variant:`text`,disabled:n,children:e.map(e=>{let{onClick:n,name:r}=e;return(0,so.createElement)(de,{...e,key:r,tooltipPlacement:`left`,onClick:t(n)},r)})});try{co.displayName=`SecondaryActions`,co.__docgenInfo={description:``,displayName:`SecondaryActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionCellBase/SecondaryAction/SecondaryAction.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/SecondaryAction/SecondaryAction.tsx`,name:`TypeLiteral`}],description:`Вторичные действия`,name:`actions`,required:!0,tags:{},type:{name:`SecondaryActionKind<TAction>[]`}},onActionClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/SecondaryAction/SecondaryAction.tsx`,name:`TypeLiteral`}],description:`Обработчик нажатия на действие`,name:`onActionClick`,required:!0,tags:{},type:{name:`ActionHandler<TAction>`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/SecondaryAction/SecondaryAction.tsx`,name:`TypeLiteral`}],description:`Если true, action не доступен`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function uo(){return(uo=e((()=>{lo()})))()}var fo;function po(){return(po=e((()=>{T(),Pa(),fo=b.div`
  display: inline-flex;
  align-items: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(3)};

    width: auto;

    &.${Na.hasMainActions} {
      width: 100%;
    }
  }
`})))()}var mo,ho,go;function _o(){return(_o=e((()=>{C(),Pa(),ro(),uo(),po(),mo=w(),ho=n(Na.root,{variants:{hasMainActions:{true:Na.hasMainActions}}}),go=({actions:e,isDisabledAction:t,handleWrapperClick:n,handleActionClick:r})=>{let{main:i,secondary:a}=e;return(0,mo.jsxs)(fo,{onClick:n,className:ho({hasMainActions:!!i.length}),children:[i.map(e=>(0,mo.jsx)(to,{action:e,onActionClick:r,isDisabled:t},e.name)),a&&(0,mo.jsx)(co,{actions:a,onActionClick:r,isDisabled:t})]})};try{go.displayName=`ActionCellBase`,go.__docgenInfo={description:``,displayName:`ActionCellBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionCellBase/ActionCellBase.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/types.ts`,name:`TypeLiteral`}],description:`Действия`,name:`actions`,required:!0,tags:{},type:{name:`Actions<TItem>`}},isDisabledAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabledAction`,required:!0,tags:{},type:{name:`boolean`}},handleWrapperClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/types.ts`,name:`TypeLiteral`}],description:``,name:`handleWrapperClick`,required:!0,tags:{},type:{name:`MouseEventHandler<HTMLDivElement>`}},handleActionClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionCellBase/types.ts`,name:`TypeLiteral`}],description:``,name:`handleActionClick`,required:!0,tags:{},type:{name:`ActionHandler<TItem>`}}},tags:{}}}catch{}})))()}function vo(){return(vo=e((()=>{_o()})))()}var yo,bo;function xo(){return(xo=e((()=>{yo=u(),ct(),B(),bo=({actions:e})=>{let{main:t,secondary:n=[]}=e,{setDisabledReason:r,item:i}=(0,yo.useContext)(xn),{setDisabled:a}=(0,yo.useContext)(tt),o=(0,yo.useMemo)(()=>[...t,...n].find(e=>e.isBlockingOperation&&e.loading),[t,n]),s=!!o,c=o?.loadingNote;return(0,yo.useEffect)(()=>{if(s){a(i.id,!0),r(c);return}a(i.id,!1),r(void 0)},[s,c,i.id]),{isDisabledAction:s,handleActionClick:(0,yo.useCallback)(e=>()=>{e?.(i)},[i]),handleWrapperClick:e=>{e.stopPropagation()}}}})))()}function So(){return(So=e((()=>{xo()})))()}var Co,wo;function To(){return(To=e((()=>{vo(),So(),Co=w(),wo=({actions:e})=>{let{isDisabledAction:t,handleWrapperClick:n,handleActionClick:r}=bo({actions:e});return(0,Co.jsx)(go,{actions:e,isDisabledAction:t,handleActionClick:r,handleWrapperClick:n})};try{wo.displayName=`InfiniteTreeListActions`,wo.__docgenInfo={description:`Действия строки дерева. Блокирующее действие в состоянии загрузки блокирует
строку вместе со всей её веткой`,displayName:`InfiniteTreeListActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListActions/InfiniteTreeListActions.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/InfiniteTreeListActions/types.ts`,name:`TypeLiteral`}],description:`Конфигурация действий строки`,name:`actions`,required:!0,tags:{example:`actions={{ main: [{ name: 'Изменить', onClick: handleEdit }] }}`},type:{name:`Actions<TItem>`}}},tags:{example:`<InfiniteTreeListActions
  actions={{ main: [{ name: 'Изменить', onClick: handleEdit }] }}
/>`}}}catch{}})))()}function Eo(){return(Eo=e((()=>{To()})))()}var Do,Oo;function ko(){return(ko=e((()=>{Do=[{id:`1`,avatarName:`ГП`,subdivision:`Головное подразделение`,title:`Головное подразделение`,subDivisionCount:8,children:[{id:`2`,avatarName:`ИТ`,subdivision:`IT отдел`,deliveryType:`Входящий`,deliveryDate:`2024-01-15`},{id:`3`,avatarName:`Б`,subdivision:`Бухгалтерия`,deliveryType:`Входящий`,deliveryDate:`2024-01-16`},{id:`4`,avatarName:`ОК`,subdivision:`Отдел кадров`,deliveryType:`Входящий`,deliveryDate:`2024-01-17`},{id:`5`,avatarName:`ОМ`,subdivision:`Отдел маркетинга`,deliveryType:`Входящий`,deliveryDate:`2024-01-18`},{id:`6`,avatarName:`ОП`,subdivision:`Отдел персонала`,deliveryType:`Входящий`,deliveryDate:`2024-01-19`},{id:`7`,avatarName:`ОП`,subdivision:`Отдел продаж`,title:`Отдел продаж`,subDivisionCount:3,children:[{id:`8`,avatarName:`ОП`,subdivision:`Отдел прямых продаж`,deliveryType:`Входящий`,deliveryDate:`2024-01-20`},{id:`9`,avatarName:`ОК`,subdivision:`Отдел ключевых клиентов`,title:`Отдел ключевых клиентов`,subDivisionCount:2,children:[{id:`10`,avatarName:`СК`,subdivision:`Сектор корпоративных клиентов`,deliveryType:`Входящий`,deliveryDate:`2024-01-21`},{id:`11`,avatarName:`СГ`,subdivision:`Сектор госорганизаций`,deliveryType:`Входящий`,deliveryDate:`2024-01-22`}]}]},{id:`12`,avatarName:`ОФ`,subdivision:`Отдел финансов`,title:`Отдел финансов`,subDivisionCount:2,children:[{id:`13`,avatarName:`ОБ`,subdivision:`Отдел бюджетирования`,deliveryType:`Входящий`,deliveryDate:`2024-01-23`},{id:`14`,avatarName:`ОА`,subdivision:`Отдел аудита`,deliveryType:`Входящий`,deliveryDate:`2024-01-24`}]},{id:`15`,avatarName:`ЮО`,subdivision:`Юридический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-01-25`}]},{id:`16`,avatarName:`ФЛ`,subdivision:`Филиал в Москве`,title:`Филиал в Москве`,subDivisionCount:4,status:`deny`,disabledReason:`Взаимодействие не доступно`,children:[{id:`17`,avatarName:`ПМ`,subdivision:`Производственный отдел`,deliveryType:`Входящий`,deliveryDate:`2024-01-26`},{id:`18`,avatarName:`ЛО`,subdivision:`Логистический отдел`,title:`Логистический отдел`,subDivisionCount:2,children:[{id:`19`,avatarName:`СХ`,subdivision:`Складское хозяйство`,deliveryType:`Входящий`,deliveryDate:`2024-01-27`},{id:`20`,avatarName:`ТП`,subdivision:`Транспортный отдел`,deliveryType:`Входящий`,deliveryDate:`2024-01-28`}]}]}],Oo=[{id:`1`,avatarName:`ГП`,subdivision:`Головное подразделение`,title:`Головное подразделение`,subDivisionCount:5,children:[{id:`1-1`,avatarName:`ИТ`,subdivision:`IT отдел`,deliveryType:`Входящий`,deliveryDate:`2024-01-15`},{id:`1-2`,avatarName:`БУ`,subdivision:`Бухгалтерия`,title:`Бухгалтерия`,subDivisionCount:3,deliveryType:`Входящий`,deliveryDate:`2024-01-16`,children:[{id:`1-2-1`,avatarName:`ОП`,subdivision:`Отдел продаж`,deliveryType:`Входящий`,deliveryDate:`2024-01-20`},{id:`1-2-2`,avatarName:`СК`,subdivision:`Склад`,deliveryType:`Входящий`,deliveryDate:`2024-01-21`},{id:`1-2-3`,avatarName:`ЛО`,subdivision:`Логистика`,title:`Логистика`,subDivisionCount:3,deliveryType:`Входящий`,deliveryDate:`2024-01-22`,children:[{id:`1-2-3-1`,avatarName:`ОП`,subdivision:`Отдел продаж`,deliveryType:`Входящий`,deliveryDate:`2024-01-20`},{id:`1-2-3-2`,avatarName:`СК`,subdivision:`Склад`,deliveryType:`Входящий`,deliveryDate:`2024-01-21`},{id:`1-2-3-3`,avatarName:`ЛО`,subdivision:`Логистика`,deliveryType:`Входящий`,deliveryDate:`2024-01-22`}]}]},{id:`1-3`,avatarName:`ОК`,subdivision:`Отдел кадров`,deliveryType:`Входящий`,deliveryDate:`2024-01-17`},{id:`1-4`,avatarName:`ОМ`,subdivision:`Отдел маркетинга`,deliveryType:`Входящий`,deliveryDate:`2024-01-18`},{id:`1-5`,avatarName:`ОП`,subdivision:`Отдел персонала`,deliveryType:`Входящий`,deliveryDate:`2024-01-19`}]},{id:`2`,avatarName:`ФМ`,subdivision:`Филиал Москва`,title:`Филиал Москва`,subDivisionCount:3,disabledReason:`Взаимодействие не доступно`,children:[{id:`2-1`,avatarName:`ОП`,subdivision:`Отдел продаж`,deliveryType:`Входящий`,deliveryDate:`2024-01-20`},{id:`2-2`,avatarName:`СК`,subdivision:`Склад`,deliveryType:`Входящий`,deliveryDate:`2024-01-21`},{id:`2-3`,avatarName:`ЛО`,subdivision:`Логистика`,deliveryType:`Входящий`,deliveryDate:`2024-01-22`}]},{id:`3`,avatarName:`ФС`,subdivision:`Филиал СПб`,deliveryType:`Исходящий`,deliveryDate:`2024-01-23`},{id:`4`,avatarName:`ФН`,subdivision:`Филиал Новгород`,title:`Филиал Новгород`,subDivisionCount:2,children:[{id:`4-1`,avatarName:`ПО`,subdivision:`Производство`,deliveryType:`Входящий`,deliveryDate:`2024-01-24`},{id:`4-2`,avatarName:`ОК`,subdivision:`Отдел контроля`,deliveryType:`Входящий`,deliveryDate:`2024-01-25`}]},{id:`5`,avatarName:`ФЕ`,subdivision:`Филиал Екатеринбург`,deliveryType:`Внутренний`,deliveryDate:`2024-01-26`},{id:`6`,avatarName:`ФК`,subdivision:`Филиал Казань`},{id:`7`,avatarName:`ФН`,subdivision:`Филиал Новосибирск`,deliveryType:`Исходящий`,deliveryDate:`2024-01-31`},{id:`8`,avatarName:`ФР`,subdivision:`Филиал Ростов`},{id:`9`,avatarName:`ФВ`,subdivision:`Филиал Волгоград`,deliveryType:`Внутренний`,deliveryDate:`2024-02-04`},{id:`10`,avatarName:`ФК`,subdivision:`Филиал Красноярск`,title:`Филиал Красноярск`,subDivisionCount:2,children:[{id:`10-1`,avatarName:`ОК`,subdivision:`Отдел кадров`,deliveryType:`Входящий`,deliveryDate:`2024-02-05`},{id:`10-2`,avatarName:`ХО`,subdivision:`Хозяйственный отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-06`}]},{id:`11`,avatarName:`ФВ`,subdivision:`Филиал Владивосток`,deliveryType:`Исходящий`,deliveryDate:`2024-02-07`},{id:`12`,avatarName:`ФХ`,subdivision:`Филиал Хабаровск`,title:`Филиал Хабаровск`,subDivisionCount:3,children:[{id:`12-1`,avatarName:`ФО`,subdivision:`Финансовый отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-08`},{id:`12-2`,avatarName:`БУ`,subdivision:`Бухгалтерия`,deliveryType:`Входящий`,deliveryDate:`2024-02-09`},{id:`12-3`,avatarName:`АО`,subdivision:`Аудиторский отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-10`}]},{id:`13`,avatarName:`ФО`,subdivision:`Филиал Омск`,deliveryType:`Внутренний`,deliveryDate:`2024-02-11`},{id:`14`,avatarName:`ФЧ`,subdivision:`Филиал Челябинск`},{id:`15`,avatarName:`ФУ`,subdivision:`Филиал Уфа`,deliveryType:`Исходящий`,deliveryDate:`2024-02-16`},{id:`16`,avatarName:`ФП`,subdivision:`Филиал Пермь`,title:`Филиал Пермь`,subDivisionCount:2,children:[{id:`16-1`,avatarName:`АО`,subdivision:`Аналитический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-17`},{id:`16-2`,avatarName:`СТ`,subdivision:`Статистический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-18`}]},{id:`17`,avatarName:`ФК`,subdivision:`Филиал Кемерово`,deliveryType:`Внутренний`,deliveryDate:`2024-02-19`},{id:`18`,avatarName:`ФТ`,subdivision:`Филиал Тюмень`},{id:`19`,avatarName:`ФИ`,subdivision:`Филиал Ижевск`,deliveryType:`Исходящий`,deliveryDate:`2024-02-23`},{id:`20`,avatarName:`ФБ`,subdivision:`Филиал Барнаул`,title:`Филиал Барнаул`,subDivisionCount:2,children:[{id:`20-1`,avatarName:`ЮО`,subdivision:`Юридический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-24`},{id:`20-2`,avatarName:`КП`,subdivision:`Контрольный пункт`,deliveryType:`Входящий`,deliveryDate:`2024-02-25`}]},{id:`21`,avatarName:`ФК`,subdivision:`Филиал Калининград`,deliveryType:`Внутренний`,deliveryDate:`2024-02-26`},{id:`22`,avatarName:`ФТ`,subdivision:`Филиал Тверь`,title:`Филиал Тверь`,subDivisionCount:3,children:[{id:`22-1`,avatarName:`ПО`,subdivision:`Плановый отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-27`},{id:`22-2`,avatarName:`ЭО`,subdivision:`Экономический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-28`},{id:`22-3`,avatarName:`СТ`,subdivision:`Статотдел`,deliveryType:`Входящий`,deliveryDate:`2024-02-29`}]},{id:`23`,avatarName:`ФС`,subdivision:`Филиал Сочи`,deliveryType:`Исходящий`,deliveryDate:`2024-03-01`},{id:`24`,avatarName:`ФК`,subdivision:`Филиал Краснодар`,title:`Филиал Краснодар`,subDivisionCount:2,children:[{id:`24-1`,avatarName:`ОМ`,subdivision:`Отдел маркетинга`,deliveryType:`Входящий`,deliveryDate:`2024-03-02`},{id:`24-2`,avatarName:`ПР`,subdivision:`Пресс-служба`,deliveryType:`Входящий`,deliveryDate:`2024-03-03`}]},{id:`25`,avatarName:`ФВ`,subdivision:`Филиал Воронеж`,deliveryType:`Внутренний`,deliveryDate:`2024-03-04`},{id:`26`,avatarName:`ФС`,subdivision:`Филиал Саратов`},{id:`27`,avatarName:`ФТ`,subdivision:`Филиал Тольятти`,deliveryType:`Исходящий`,deliveryDate:`2024-03-09`},{id:`28`,avatarName:`ФИ`,subdivision:`Филиал Иваново`,title:`Филиал Иваново`,subDivisionCount:3,children:[{id:`28-1`,avatarName:`ФО`,subdivision:`Финансовый отдел`,deliveryType:`Входящий`,deliveryDate:`2024-03-10`},{id:`28-2`,avatarName:`БУ`,subdivision:`Бухгалтерия`,deliveryType:`Входящий`,deliveryDate:`2024-03-11`},{id:`28-3`,avatarName:`КА`,subdivision:`Кадровый отдел`,deliveryType:`Входящий`,deliveryDate:`2024-03-12`}]},{id:`29`,avatarName:`ФБ`,subdivision:`Филиал Брянск`,deliveryType:`Внутренний`,deliveryDate:`2024-03-13`},{id:`30`,avatarName:`ФК`,subdivision:`Филиал Курск`,title:`Филиал Курск`,subDivisionCount:2,children:[{id:`30-1`,avatarName:`ИТ`,subdivision:`IT отдел`,deliveryType:`Входящий`,deliveryDate:`2024-03-14`},{id:`30-2`,avatarName:`ТП`,subdivision:`Техподдержка`,deliveryType:`Входящий`,deliveryDate:`2024-03-15`}]},{id:`31`,avatarName:`ФБ`,subdivision:`Филиал Белгород`,deliveryType:`Исходящий`,deliveryDate:`2024-03-16`},{id:`32`,avatarName:`ФВ`,subdivision:`Филиал Владимир`},{id:`33`,avatarName:`ФЧ`,subdivision:`Филиал Чита`,deliveryType:`Внутренний`,deliveryDate:`2024-03-20`},{id:`34`,avatarName:`ФС`,subdivision:`Филиал Смоленск`},{id:`35`,avatarName:`ФК`,subdivision:`Филиал Курган`,deliveryType:`Исходящий`,deliveryDate:`2024-03-25`},{id:`36`,avatarName:`ФО`,subdivision:`Филиал Оренбург`,title:`Филиал Оренбург`,subDivisionCount:2,children:[{id:`36-1`,avatarName:`ФО`,subdivision:`Финансовый отдел`,deliveryType:`Входящий`,deliveryDate:`2024-03-26`},{id:`36-2`,avatarName:`ЭО`,subdivision:`Экономический отдел`,deliveryType:`Входящий`,deliveryDate:`2024-03-27`}]},{id:`37`,avatarName:`ФП`,subdivision:`Филиал Пенза`,deliveryType:`Внутренний`,deliveryDate:`2024-03-28`},{id:`38`,avatarName:`ФР`,subdivision:`Филиал Рязань`},{id:`39`,avatarName:`ФА`,subdivision:`Филиал Астрахань`,deliveryType:`Исходящий`,deliveryDate:`2024-04-01`},{id:`40`,avatarName:`ФМ`,subdivision:`Филиал Махачкала`,title:`Филиал Махачкала`,subDivisionCount:2,children:[{id:`40-1`,avatarName:`ОП`,subdivision:`Отдел персонала`,deliveryType:`Входящий`,deliveryDate:`2024-04-02`},{id:`40-2`,avatarName:`ОК`,subdivision:`Отдел кадров`,deliveryType:`Входящий`,deliveryDate:`2024-04-03`}]},{id:`41`,avatarName:`ФЯ`,subdivision:`Филиал Ярославль`,deliveryType:`Внутренний`,deliveryDate:`2024-04-04`},{id:`42`,avatarName:`ФК`,subdivision:`Филиал Кострома`},{id:`43`,avatarName:`ФВ`,subdivision:`Филиал Вологда`,deliveryType:`Исходящий`,deliveryDate:`2024-04-08`},{id:`44`,avatarName:`ФК`,subdivision:`Филиал Киров`},{id:`45`,avatarName:`ФН`,subdivision:`Филиал Нижневартовск`,deliveryType:`Внутренний`,deliveryDate:`2024-04-13`},{id:`46`,avatarName:`ФС`,subdivision:`Филиал Ставрополь`,title:`Филиал Ставрополь`,subDivisionCount:2,children:[{id:`46-1`,avatarName:`ИТ`,subdivision:`IT отдел`,deliveryType:`Входящий`,deliveryDate:`2024-04-14`},{id:`46-2`,avatarName:`ТП`,subdivision:`Техподдержка`,deliveryType:`Входящий`,deliveryDate:`2024-04-15`}]},{id:`47`,avatarName:`ФГ`,subdivision:`Филиал Грозный`,deliveryType:`Исходящий`,deliveryDate:`2024-04-16`},{id:`48`,avatarName:`ФУ`,subdivision:`Филиал Улан-Удэ`},{id:`49`,avatarName:`ФС`,subdivision:`Филиал Самара`,deliveryType:`Внутренний`,deliveryDate:`2024-04-20`},{id:`50`,avatarName:`ФТ`,subdivision:`Филиал Тула`}]})))()}var Ao;function jo(){return(jo=e((()=>{Ao=({execute:e},{incrementCount:t=30})=>{let n=new Set,r=0,i,a=()=>{r+=1,n.forEach(e=>e())},o=async()=>{let n=await e({offset:l.data?.length??0,count:t});return{data:n,isEndReached:n.length<t}},s=async()=>{l.isLoading=!0,l.isError=!1,l.error=void 0,a();try{let{data:e,isEndReached:t}=await o();l.data=e,l.isEndReached=t,l.isSuccess=!0}catch(e){l.isError=!0,l.error=e}finally{l.isLoading=!1,a()}return l.data??[]},c=()=>(i||=s().finally(()=>{i=void 0}),i),l={isLoading:!1,isSuccess:!1,isError:!1,isEndReached:!1,fetchMoreStatus:{isLoading:!1,isSuccess:!1,isError:!1},sync:()=>{l.data||c()},async:()=>l.data?Promise.resolve(l.data):c(),fetchMore:()=>{!l.data||l.isLoading||l.isEndReached||l.fetchMoreStatus.isLoading||(l.fetchMoreStatus={isLoading:!0,isSuccess:!1,isError:!1},a(),o().then(({data:e,isEndReached:t})=>{l.data=[...l.data??[],...e],l.isEndReached=t,l.fetchMoreStatus={isLoading:!1,isSuccess:!0,isError:!1}}).catch(e=>{l.fetchMoreStatus={isLoading:!1,isSuccess:!1,isError:!0,error:e}}).finally(a))},invalidate:()=>{l.data=void 0,l.isSuccess=!1,l.isError=!1,l.error=void 0,l.isEndReached=!1,l.fetchMoreStatus={isLoading:!1,isSuccess:!1,isError:!1},a()},subscribe:e=>(n.add(e),()=>{n.delete(e)}),getVersion:()=>r};return l}})))()}var Mo;function No(){return(No=e((()=>{jo(),Mo=()=>({createInfiniteQuerySet:e=>{let t=new Map,n=(n,r)=>{let i=JSON.stringify(r),a=t.get(i);if(a)return a;let o=Ao(e(r),n);return t.set(i,o),o};return{create:e=>n({},e),createWithConfig:n}}})})))()}var Po,Fo;function Io(){return(Io=e((()=>{Po=u(),Fo=(e,t,n={})=>{let r=e.createWithConfig(n,t);return(0,Po.useSyncExternalStore)(r.subscribe,r.getVersion),r}})))()}function Lo(){return(Lo=e((()=>{No(),Io()})))()}var Ro,zo,Bo,Vo,Ho,Uo,Wo;function Go(){return(Go=e((()=>{Ro=1e3,zo=[`IT отдел`,`Бухгалтерия`,`Отдел кадров`,`Отдел маркетинга`,`Отдел продаж`,`Юридический отдел`,`Финансовый отдел`,`Отдел логистики`,`Складское хозяйство`,`Отдел закупок`,`Служба безопасности`,`Административный отдел`,`Плановый отдел`,`Отдел контроля`,`Техподдержка`,`Пресс-служба`],Bo=60,Vo=(e,t,n,r)=>Array.from({length:t},(t,i)=>{let a=`${e}-${i+1}`,o=zo[i%zo.length],s=`${o} №${i+1}`;return a===n?{id:a,avatarName:o.slice(0,2).toUpperCase(),subdivision:s,title:s,subDivisionCount:r,hasChildren:!0}:{id:a,avatarName:o.slice(0,2).toUpperCase(),subdivision:s,deliveryType:`Входящий`,deliveryDate:`2024-03-15`}}),Ho={1:Vo(`1`,Bo,`1-1`,Bo),2:Vo(`2`,Bo),3:Vo(`3`,Bo),"1-1":Vo(`1-1`,Bo)},Uo=[{id:`1`,avatarName:`ГП`,subdivision:`Головное подразделение`,title:`Головное подразделение`,subDivisionCount:Bo,hasChildren:!0},{id:`2`,avatarName:`ФМ`,subdivision:`Филиал Москва`,title:`Филиал Москва`,subDivisionCount:Bo,hasChildren:!0},{id:`3`,avatarName:`ФС`,subdivision:`Филиал СПб`,title:`Филиал СПб`,subDivisionCount:Bo,hasChildren:!0},{id:`4`,avatarName:`ФК`,subdivision:`Филиал Казань`,deliveryType:`Исходящий`,deliveryDate:`2024-04-08`}],Wo=(e,{offset:t,count:n})=>new Promise(r=>{setTimeout(()=>{r((Ho[e]??[]).slice(t,t+n))},Ro)})})))()}var Ko,qo;function Jo(){return(Jo=e((()=>{Lo(),Ko=u(),ko(),Go(),qo=(e,t=Wo)=>{let[n]=(0,Ko.useState)(()=>Mo().createInfiniteQuerySet(e=>({execute:({offset:n,count:r})=>t(e,{offset:n,count:r})}))),r=Fo(n,e,{incrementCount:25});return{...r,isLoading:r.isLoading||r.fetchMoreStatus.isLoading}}})))()}var Yo,Xo,Zo,Qo,$o,es,ts,ns;function rs(){return(rs=e((()=>{Se(),Fe(),Ce(),T(),Yo=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
  }
`,Xo=b.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${Pe.root} {
      width: 50%;
    }
  }
`,Zo=b(xe)`
  width: 32px;
  height: 32px;

  background-color: #66eec0ff;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Qo=b(le)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,$o=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(3)};
  }
`,es=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};

  width: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(4)};
  }
`,ts=b(le)`
  flex-shrink: 0;
`,ns=b.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  width: 100%;
`})))()}var is,as;function os(){return(os=e((()=>{Ce(),ce(),rs(),is=w(),as=()=>{let{isMobile:e}=se();return(0,is.jsxs)(es,{children:[(0,is.jsxs)(ns,{children:[(0,is.jsx)(Qo,{variant:`rounded`,width:32,height:32}),(0,is.jsxs)(Yo,{children:[(0,is.jsx)(le,{width:180,height:20}),(0,is.jsx)(le,{width:120,height:20})]})]}),(0,is.jsxs)($o,{children:[(0,is.jsx)(le,{variant:`rounded`,width:e?`100%`:`32px`,height:e?`40px`:`32px`,shapeSize:`medium`}),(0,is.jsx)(ts,{variant:`rounded`,width:e?`40px`:`32px`,height:e?`40px`:`32px`,shapeSize:`medium`}),(0,is.jsx)(ts,{variant:`rounded`,width:e?`40px`:`32px`,height:e?`40px`:`32px`,shapeSize:`medium`})]})]})}})))()}var q,J;function ss(){return(ss=e((()=>{Fe(),m(),rs(),q=w(),J=({item:e})=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,q.jsxs)(Yo,{children:[(0,q.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,q.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,q.jsxs)(Xo,{children:[(0,q.jsxs)(D,{children:[(0,q.jsx)(D.Name,{children:`Тип`}),(0,q.jsx)(D.Value,{children:e.deliveryType})]}),(0,q.jsxs)(D,{children:[(0,q.jsx)(D.Name,{children:`Дата отправки`}),(0,q.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]});try{J.displayName=`OrganizationRow`,J.__docgenInfo={description:``,displayName:`OrganizationRow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/stories/common/OrganizationRow.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/stories/common/OrganizationRow.tsx`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`OrganizationData & { meta: InfiniteTreeItemMeta; }`}}},tags:{}}}catch{}})))()}var cs,ls,us;function ds(){return(ds=e((()=>{cs=u(),be(),Eo(),ls=w(),us=()=>{let[e,t]=(0,cs.useState)(!1),[n,r]=(0,cs.useState)(!1);return(0,cs.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500)},[e,n]),(0,ls.jsx)(wo,{actions:{main:[{icon:(0,ls.jsx)(Le,{}),name:`Удалить`,onClick:()=>t(e=>!e),loading:e,isBlockingOperation:!0,needConfirm:!0,confirmMobileTitle:`Удаление подразделения`,loadingNote:`Происходит удаление элемента`},{icon:(0,ls.jsx)(Ke,{}),name:`Сохранить`,isBlockingOperation:!0,onClick:()=>r(e=>!e),loading:n,isMobilePrimary:!0}],secondary:[{name:`Редактировать`,onClick:()=>{}}]}})}})))()}function fs(){return(fs=e((()=>{ko(),Jo(),os(),ss(),Go(),rs(),ds()})))()}var ps,Y,ms;function hs(){return(hs=e((()=>{ps=u(),Re(),qe(),Fe(),k(),j(),N(),m(),K(),Eo(),B(),fs(),Y=w(),ms=()=>{let e=(0,ps.useRef)(null),[t,n]=(0,ps.useState)(!0),[r,i]=(0,ps.useState)([]),[a,o]=(0,ps.useState)(!1);(0,ps.useEffect)(()=>{setTimeout(()=>{i(Oo.slice(0,15)),n(!1)},1500)},[]);let s=()=>{a||(n(!0),setTimeout(()=>{let e=r.length,t=Oo.slice(e,e+15);t.length>0&&i(e=>[...e,...t]),e+15>=Oo.length&&o(!0),n(!1)},1500))},c=({item:e})=>(0,Y.jsxs)(z,{actions:(0,Y.jsx)(l,{}),children:[(0,Y.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,Y.jsxs)(Yo,{children:[(0,Y.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,Y.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,Y.jsxs)(Xo,{children:[(0,Y.jsxs)(D,{children:[(0,Y.jsx)(D.Name,{children:`Тип`}),(0,Y.jsx)(D.Value,{children:e.deliveryDate})]}),(0,Y.jsxs)(D,{children:[(0,Y.jsx)(D.Name,{children:`Дата отправки`}),(0,Y.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]}),l=()=>{let[e,t]=(0,ps.useState)(!1),[n,r]=(0,ps.useState)(!1);return(0,ps.useEffect)(()=>{e&&setTimeout(()=>{t(!1)},1500),n&&setTimeout(()=>{r(!1)},1500)},[e,n]),(0,Y.jsx)(wo,{actions:{main:[{icon:(0,Y.jsx)(Le,{}),name:`Удалить`,onClick:()=>t(e=>!e),loading:e,isBlockingOperation:!0,needConfirm:!0,confirmMobileTitle:`Удаление подразделения`,loadingNote:`Происходит удаление элемента`},{icon:(0,Y.jsx)(Ke,{}),name:`Сохранить`,isBlockingOperation:!0,onClick:()=>r(e=>!e),loading:n,isMobilePrimary:!0}],secondary:[{name:`Редактировать`,onClick:()=>{}}]}})};return(0,Y.jsx)(A,{header:M,content:(0,Y.jsx)(O,{scrollRef:e,children:(0,Y.jsx)(G,{items:r,isLoading:t,onLoadMore:s,isEndReached:a,scrollRef:e,onRetry:()=>{},renderItem:e=>(0,Y.jsx)(c,{item:e})})})})},ms.parameters={...ms.parameters,docs:{...ms.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const [slicedData, setSlicedData] = useState<OrganizationData[]>([]);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeOrganizationDataList.slice(0, 15));
      setLoading(false);
    }, 1500);
  }, []);
  const incrementData = () => {
    if (isEndReached) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const currentLength = slicedData.length;
      const nextData = fakeOrganizationDataList.slice(currentLength, currentLength + 15);
      if (nextData.length > 0) {
        setSlicedData(prevData => [...prevData, ...nextData]);
      }
      if (currentLength + 15 >= fakeOrganizationDataList.length) {
        setIsEndReached(true);
      }
      setLoading(false);
    }, 1500);
  };
  const Item = ({
    item
  }: {
    item: OrganizationData & {
      meta: InfiniteTreeItemMeta;
    };
  }) => {
    return <InfiniteTreeListItem actions={<Actions />}>
        <StyledAvatar variant="rounded">{item.avatarName}</StyledAvatar>
        <ContentWrapper>
          <Typography variant="body1">{item.subdivision}</Typography>
          <Typography variant="caption" component={item.meta.hasNested ? 'p' : 'div'}>
            {item.meta.hasNested && \`\${item.subDivisionCount} Подразделения\`}
            {!item.meta.hasNested && <DescriptionWrapper>
                <Description>
                  <Description.Name>Тип</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
                <Description>
                  <Description.Name>Дата отправки</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
              </DescriptionWrapper>}
          </Typography>
        </ContentWrapper>
      </InfiniteTreeListItem>;
  };
  const Actions = () => {
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [saveLoading, setSaveLoading] = useState(false);
    useEffect(() => {
      if (deleteLoading) {
        setTimeout(() => {
          setDeleteLoading(false);
        }, 1500);
      }
      if (saveLoading) {
        setTimeout(() => {
          setSaveLoading(false);
        }, 1500);
      }
    }, [deleteLoading, saveLoading]);
    const actions = {
      main: [{
        icon: <BinOutlineMd />,
        name: 'Удалить',
        onClick: () => setDeleteLoading(prevState => !prevState),
        loading: deleteLoading,
        isBlockingOperation: true,
        needConfirm: true,
        confirmMobileTitle: 'Удаление подразделения',
        loadingNote: 'Происходит удаление элемента'
      }, {
        icon: <SaveOutlineMd />,
        name: 'Сохранить',
        isBlockingOperation: true,
        onClick: () => setSaveLoading(prevState => !prevState),
        loading: saveLoading,
        isMobilePrimary: true
      }],
      secondary: [{
        name: 'Редактировать',
        onClick: () => {}
      }]
    };
    return <InfiniteTreeListActions actions={actions} />;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={slicedData} isLoading={isLoading} onLoadMore={incrementData} isEndReached={isEndReached} scrollRef={scrollRef} onRetry={() => {}} renderItem={item => <Item item={item} />} />
        </PageContent>} />;
}`,...ms.parameters?.docs?.source}}}})))()}var gs,X,_s;function vs(){return(vs=e((()=>{gs=u(),ae(),Fe(),k(),j(),N(),m(),K(),B(),fs(),X=w(),_s=()=>{let e=(0,gs.useRef)(null),t=({item:e})=>(0,X.jsxs)(z,{children:[(0,X.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,X.jsxs)(Yo,{children:[(0,X.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,X.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,X.jsxs)(Xo,{children:[(0,X.jsxs)(D,{children:[(0,X.jsx)(D.Name,{children:`Тип`}),(0,X.jsx)(D.Value,{children:e.deliveryDate})]}),(0,X.jsxs)(D,{children:[(0,X.jsx)(D.Name,{children:`Дата отправки`}),(0,X.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]});return(0,X.jsx)(i,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,X.jsx)(A,{header:M,content:(0,X.jsx)(O,{scrollRef:e,children:(0,X.jsx)(G,{scrollRef:e,items:Oo.slice(0,7),onRetry:()=>{},isError:!0,renderItem:e=>(0,X.jsx)(t,{item:e})})}),aside:Ye})})},_s.parameters={..._s.parameters,docs:{..._s.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const Item = ({
    item
  }: {
    item: OrganizationData & {
      meta: InfiniteTreeItemMeta;
    };
  }) => {
    return <InfiniteTreeListItem>
        <StyledAvatar variant="rounded">{item.avatarName}</StyledAvatar>
        <ContentWrapper>
          <Typography variant="body1">{item.subdivision}</Typography>
          <Typography variant="caption" component={item.meta.hasNested ? 'p' : 'div'}>
            {item.meta.hasNested && \`\${item.subDivisionCount} Подразделения\`}
            {!item.meta.hasNested && <DescriptionWrapper>
                <Description>
                  <Description.Name>Тип</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
                <Description>
                  <Description.Name>Дата отправки</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
              </DescriptionWrapper>}
          </Typography>
        </ContentWrapper>
      </InfiniteTreeListItem>;
  };
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: '',
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <InfiniteTreeList scrollRef={scrollRef} items={fakeOrganizationDataList.slice(0, 7)} onRetry={() => {}} isError renderItem={item => <Item item={item} />} />
          </PageContent>} aside={MockAside} />
    </ConfigProvider>;
}`,..._s.parameters?.docs?.source}}}})))()}var ys,Z,bs;function xs(){return(xs=e((()=>{ys=u(),Fe(),k(),j(),N(),m(),K(),B(),fs(),Z=w(),bs=()=>{let e=(0,ys.useRef)(null),[t,n]=(0,ys.useState)(!0),[r,i]=(0,ys.useState)([]);(0,ys.useEffect)(()=>{setTimeout(()=>{n(!1),i(Do)},1500)},[]);let a=({item:e})=>(0,Z.jsxs)(z,{children:[(0,Z.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,Z.jsxs)(Yo,{children:[(0,Z.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,Z.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,Z.jsxs)(Xo,{children:[(0,Z.jsxs)(D,{children:[(0,Z.jsx)(D.Name,{children:`Тип`}),(0,Z.jsx)(D.Value,{children:e.deliveryDate})]}),(0,Z.jsxs)(D,{children:[(0,Z.jsx)(D.Name,{children:`Дата отправки`}),(0,Z.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]});return(0,Z.jsx)(A,{header:M,content:(0,Z.jsx)(O,{scrollRef:e,children:(0,Z.jsx)(G,{items:r,isLoading:t,scrollRef:e,initialExpandedLevel:2,onRetry:()=>{},renderItem:e=>(0,Z.jsx)(a,{item:e})})}),aside:Ye})},bs.parameters={...bs.parameters,docs:{...bs.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<OrganizationData[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setItems(fakeOrganizationData);
    }, 1500);
  }, []);
  const Item = ({
    item
  }: {
    item: OrganizationData & {
      meta: InfiniteTreeItemMeta;
    };
  }) => {
    return <InfiniteTreeListItem>
        <StyledAvatar variant="rounded">{item.avatarName}</StyledAvatar>
        <ContentWrapper>
          <Typography variant="body1">{item.subdivision}</Typography>
          <Typography variant="caption" component={item.meta.hasNested ? 'p' : 'div'}>
            {item.meta.hasNested && \`\${item.subDivisionCount} Подразделения\`}
            {!item.meta.hasNested && <DescriptionWrapper>
                <Description>
                  <Description.Name>Тип</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
                <Description>
                  <Description.Name>Дата отправки</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
              </DescriptionWrapper>}
          </Typography>
        </ContentWrapper>
      </InfiniteTreeListItem>;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={items} isLoading={isLoading} scrollRef={scrollRef} initialExpandedLevel={2} onRetry={() => {}} renderItem={item => <Item item={item} />} />
        </PageContent>} aside={MockAside} />;
}`,...bs.parameters?.docs?.source}}}})))()}var Ss,Cs,ws;function Ts(){return(Ts=e((()=>{Ss=u(),ae(),k(),j(),N(),K(),Cs=w(),ws=()=>{let e=(0,Ss.useRef)(null);return(0,Cs.jsx)(i,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,Cs.jsx)(A,{header:M,content:(0,Cs.jsx)(O,{scrollRef:e,children:(0,Cs.jsx)(G,{scrollRef:e,items:[],onRetry:()=>{},renderItem:()=>(0,Cs.jsx)(Cs.Fragment,{})})}),aside:Ye})})},ws.parameters={...ws.parameters,docs:{...ws.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  const scrollRef = useRef(null);
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <InfiniteTreeList scrollRef={scrollRef} items={[]} onRetry={() => {}} renderItem={() => <></>} />
          </PageContent>} aside={MockAside} />
    </ConfigProvider>;
}`,...ws.parameters?.docs?.source}}}})))()}var Es,Ds,Os,ks,As,js;function Ms(){return(Ms=e((()=>{Es=u(),k(),j(),N(),K(),B(),fs(),Ds=w(),Os=1e3,ks=[{id:`1`,avatarName:`ГП`,subdivision:`Головное подразделение`,title:`Головное подразделение`,subDivisionCount:60,hasChildren:!0}],As=async()=>{throw await new Promise(e=>setTimeout(e,Os)),Error(`Не удалось загрузить подразделения`)},js=()=>{let e=(0,Es.useRef)(null),t=({item:e})=>{let{data:t,isLoading:n,isError:r,isEndReached:i,sync:a,fetchMore:o,invalidate:s}=qo(e.id,As);return(0,Ds.jsx)(z,{isLoading:n,isError:r,isEndReached:i,childItems:t,onOpen:a,onLoadMore:o,onRetry:()=>{s(),a()},children:(0,Ds.jsx)(J,{item:e})})},n=(0,Es.useCallback)(e=>(0,Ds.jsx)(z,{children:(0,Ds.jsx)(J,{item:e})}),[]),r=(0,Es.useCallback)(e=>(0,Ds.jsx)(t,{item:e}),[]);return(0,Ds.jsx)(A,{header:M,content:(0,Ds.jsx)(O,{scrollRef:e,children:(0,Ds.jsx)(G,{items:ks,scrollRef:e,itemSkeleton:(0,Ds.jsx)(as,{}),onRetry:()=>{},renderItem:n,renderParent:r})})})},js.parameters={...js.parameters,docs:{...js.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const ParentItem = ({
    item
  }: {
    item: OrganizationItem;
  }) => {
    const {
      data,
      isLoading,
      isError,
      isEndReached,
      sync,
      fetchMore,
      invalidate
    } = useChildrenQuery(item.id, fetchChildren);
    const handleRetry = () => {
      invalidate();
      sync();
    };
    return <InfiniteTreeListItem isLoading={isLoading} isError={isError} isEndReached={isEndReached} childItems={data} onOpen={sync} onLoadMore={fetchMore} onRetry={handleRetry}>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>;
  };
  const renderItem = useCallback((item: OrganizationItem) => <InfiniteTreeListItem>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>, []);
  const renderParent = useCallback((item: OrganizationItem) => <ParentItem item={item} />, []);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={rootItems} scrollRef={scrollRef} itemSkeleton={<OrganizationItemSkeleton />} onRetry={() => {}} renderItem={renderItem} renderParent={renderParent} />
        </PageContent>} />;
}`,...js.parameters?.docs?.source}}}})))()}var Ns,Ps,Fs;function Is(){return(Is=e((()=>{Ns=u(),k(),j(),N(),K(),B(),fs(),Ps=w(),Fs=()=>{let e=(0,Ns.useRef)(null),t=({item:e})=>{let{data:t,isLoading:n,isError:r,isEndReached:i,sync:a,fetchMore:o}=qo(e.id);return(0,Ps.jsx)(z,{isLoading:n,isError:r,isEndReached:i,childItems:t,onOpen:a,onLoadMore:o,children:(0,Ps.jsx)(J,{item:e})})},n=(0,Ns.useCallback)(e=>(0,Ps.jsx)(z,{actions:(0,Ps.jsx)(us,{}),children:(0,Ps.jsx)(J,{item:e})}),[]),r=(0,Ns.useCallback)(e=>(0,Ps.jsx)(t,{item:e}),[]);return(0,Ps.jsx)(A,{header:M,content:(0,Ps.jsx)(O,{scrollRef:e,children:(0,Ps.jsx)(G,{items:Uo,scrollRef:e,itemSkeleton:(0,Ps.jsx)(as,{}),onRetry:()=>{},renderItem:n,renderParent:r})})})},Fs.parameters={...Fs.parameters,docs:{...Fs.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const ParentItem = ({
    item
  }: {
    item: OrganizationItem;
  }) => {
    const {
      data,
      isLoading,
      isError,
      isEndReached,
      sync,
      fetchMore
    } = useChildrenQuery(item.id);
    return <InfiniteTreeListItem isLoading={isLoading} isError={isError} isEndReached={isEndReached} childItems={data} onOpen={sync} onLoadMore={fetchMore}>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>;
  };
  const renderItem = useCallback((item: OrganizationItem) => <InfiniteTreeListItem actions={<Actions />}>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>, []);
  const renderParent = useCallback((item: OrganizationItem) => <ParentItem item={item} />, []);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={paginatedRootItems} scrollRef={scrollRef} itemSkeleton={<OrganizationItemSkeleton />} onRetry={() => {}} renderItem={renderItem} renderParent={renderParent} />
        </PageContent>} />;
}`,...Fs.parameters?.docs?.source},description:{story:`Раскрытие узла загружает первую порцию дочерних элементов. Скролл последнего дочернего элемента подгружает следующие.

Узел с подгружаемыми дочерними элементами помечается в данных флагом \`hasChildren\``,...Fs.parameters?.docs?.description}}};try{Fs.displayName=`WithChildrenLoadMore`,Fs.__docgenInfo={description:`Раскрытие узла загружает первую порцию дочерних элементов. Скролл последнего дочернего элемента подгружает следующие.

Узел с подгружаемыми дочерними элементами помечается в данных флагом \`hasChildren\``,displayName:`WithChildrenLoadMore`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/stories/WithChildrenLoadMore.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ls,Rs,zs,Bs,Vs,Hs;function Us(){return(Us=e((()=>{Ls=u(),k(),j(),N(),K(),B(),fs(),Rs=w(),zs=1e3,Bs=[{id:`1`,avatarName:`ФП`,subdivision:`Филиал Пермь`,title:`Филиал Пермь`,subDivisionCount:0,hasChildren:!0}],Vs=async()=>(await new Promise(e=>setTimeout(e,zs)),[]),Hs=()=>{let e=(0,Ls.useRef)(null),t=({item:e})=>{let{data:t,isLoading:n,isError:r,isEndReached:i,sync:a,fetchMore:o,invalidate:s}=qo(e.id,Vs);return(0,Rs.jsx)(z,{isLoading:n,isError:r,isEndReached:i,childItems:t,onOpen:()=>{s(),a()},onLoadMore:o,children:(0,Rs.jsx)(J,{item:e})})},n=(0,Ls.useCallback)(e=>(0,Rs.jsx)(z,{children:(0,Rs.jsx)(J,{item:e})}),[]),r=(0,Ls.useCallback)(e=>(0,Rs.jsx)(t,{item:e}),[]);return(0,Rs.jsx)(A,{header:M,content:(0,Rs.jsx)(O,{scrollRef:e,children:(0,Rs.jsx)(G,{items:Bs,scrollRef:e,initialExpandedLevel:1,itemSkeleton:(0,Rs.jsx)(as,{}),onRetry:()=>{},renderItem:n,renderParent:r})})})},Hs.parameters={...Hs.parameters,docs:{...Hs.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const ParentItem = ({
    item
  }: {
    item: OrganizationItem;
  }) => {
    const {
      data,
      isLoading,
      isError,
      isEndReached,
      sync,
      fetchMore,
      invalidate
    } = useChildrenQuery(item.id, fetchChildren);
    const handleExpand = () => {
      invalidate();
      sync();
    };
    return <InfiniteTreeListItem isLoading={isLoading} isError={isError} isEndReached={isEndReached} childItems={data} onOpen={handleExpand} onLoadMore={fetchMore}>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>;
  };
  const renderItem = useCallback((item: OrganizationItem) => <InfiniteTreeListItem>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>, []);
  const renderParent = useCallback((item: OrganizationItem) => <ParentItem item={item} />, []);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={rootItems} scrollRef={scrollRef} initialExpandedLevel={1} itemSkeleton={<OrganizationItemSkeleton />} onRetry={() => {}} renderItem={renderItem} renderParent={renderParent} />
        </PageContent>} />;
}`,...Hs.parameters?.docs?.source}}}})))()}var Ws,Gs,Ks;function qs(){return(qs=e((()=>{Ws=u(),k(),j(),N(),K(),B(),fs(),Gs=w(),Ks=()=>{let e=(0,Ws.useRef)(null),t=({item:e})=>{let{data:t,isLoading:n,isError:r,isEndReached:i,sync:a,fetchMore:o}=qo(e.id);return(0,Gs.jsx)(z,{isLoading:n,isError:r,isEndReached:i,childItems:t,onOpen:a,onLoadMore:o,children:(0,Gs.jsx)(J,{item:e})})},n=(0,Ws.useCallback)(e=>(0,Gs.jsx)(z,{children:(0,Gs.jsx)(J,{item:e})}),[]),r=(0,Ws.useCallback)(e=>(0,Gs.jsx)(t,{item:e}),[]);return(0,Gs.jsx)(A,{header:M,content:(0,Gs.jsx)(O,{scrollRef:e,children:(0,Gs.jsx)(G,{items:Uo,scrollRef:e,initialExpandedLevel:2,itemSkeleton:(0,Gs.jsx)(as,{}),onRetry:()=>{},renderItem:n,renderParent:r})})})},Ks.parameters={...Ks.parameters,docs:{...Ks.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const ParentItem = ({
    item
  }: {
    item: OrganizationItem;
  }) => {
    const {
      data,
      isLoading,
      isError,
      isEndReached,
      sync,
      fetchMore
    } = useChildrenQuery(item.id);
    return <InfiniteTreeListItem isLoading={isLoading} isError={isError} isEndReached={isEndReached} childItems={data} onOpen={sync} onLoadMore={fetchMore}>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>;
  };
  const renderItem = useCallback((item: OrganizationItem) => <InfiniteTreeListItem>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>, []);
  const renderParent = useCallback((item: OrganizationItem) => <ParentItem item={item} />, []);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={paginatedRootItems} scrollRef={scrollRef} initialExpandedLevel={2} itemSkeleton={<OrganizationItemSkeleton />} onRetry={() => {}} renderItem={renderItem} renderParent={renderParent} />
        </PageContent>} />;
}`,...Ks.parameters?.docs?.source},description:{story:"`initialExpandedLevel` работает и для узлов с подгружаемыми дочерними элементами, но только на первый уровень вложенности",...Ks.parameters?.docs?.description}}};try{Ks.displayName=`WithChildrenPreloaded`,Ks.__docgenInfo={description:"`initialExpandedLevel` работает и для узлов с подгружаемыми дочерними элементами, но только на первый уровень вложенности",displayName:`WithChildrenPreloaded`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InfiniteTreeList/stories/WithChildrenPreloaded.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Js,Q,Ys;function Xs(){return(Xs=e((()=>{Js=u(),Fe(),k(),j(),N(),m(),K(),B(),fs(),Q=w(),Ys=()=>{let e=(0,Js.useRef)(null),t=({item:e})=>(0,Q.jsxs)(z,{isDisabled:e.status===`deny`,disabledReason:e.disabledReason,children:[(0,Q.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,Q.jsxs)(Yo,{children:[(0,Q.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,Q.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,Q.jsxs)(Xo,{children:[(0,Q.jsxs)(D,{children:[(0,Q.jsx)(D.Name,{children:`Тип`}),(0,Q.jsx)(D.Value,{children:e.deliveryDate})]}),(0,Q.jsxs)(D,{children:[(0,Q.jsx)(D.Name,{children:`Дата отправки`}),(0,Q.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]});return(0,Q.jsx)(A,{header:M,content:(0,Q.jsx)(O,{scrollRef:e,children:(0,Q.jsx)(G,{items:Do,scrollRef:e,onRetry:()=>{},renderItem:e=>(0,Q.jsx)(t,{item:e})})}),aside:Ye})},Ys.parameters={...Ys.parameters,docs:{...Ys.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const Item = ({
    item
  }: {
    item: OrganizationData & {
      meta: InfiniteTreeItemMeta;
    };
  }) => {
    return <InfiniteTreeListItem isDisabled={item.status === 'deny'} disabledReason={item.disabledReason}>
        <StyledAvatar variant="rounded">{item.avatarName}</StyledAvatar>
        <ContentWrapper>
          <Typography variant="body1">{item.subdivision}</Typography>
          <Typography variant="caption" component={item.meta.hasNested ? 'p' : 'div'}>
            {item.meta.hasNested && \`\${item.subDivisionCount} Подразделения\`}
            {!item.meta.hasNested && <DescriptionWrapper>
                <Description>
                  <Description.Name>Тип</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
                <Description>
                  <Description.Name>Дата отправки</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
              </DescriptionWrapper>}
          </Typography>
        </ContentWrapper>
      </InfiniteTreeListItem>;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={fakeOrganizationData} scrollRef={scrollRef} onRetry={() => {}} renderItem={item => <Item item={item} />} />
        </PageContent>} aside={MockAside} />;
}`,...Ys.parameters?.docs?.source}}}})))()}var Zs,Qs,$s;function ec(){return(ec=e((()=>{Zs=u(),ae(),k(),j(),N(),K(),Qs=w(),$s=()=>{let e=(0,Zs.useRef)(null);return(0,Qs.jsx)(i,{imagesMap:{defaultErrorImgSrc:`./no-data-stub.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,Qs.jsx)(A,{header:M,content:(0,Qs.jsx)(O,{scrollRef:e,children:(0,Qs.jsx)(G,{scrollRef:e,items:[],onRetry:()=>{},isError:!0,renderItem:()=>(0,Qs.jsx)(Qs.Fragment,{})})}),aside:Ye})})},$s.parameters={...$s.parameters,docs:{...$s.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './no-data-stub.svg',
    noDataImgSrc: '',
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <InfiniteTreeList scrollRef={scrollRef} items={[]} onRetry={() => {}} isError renderItem={() => <></>} />
          </PageContent>} aside={MockAside} />
    </ConfigProvider>;
}`,...$s.parameters?.docs?.source}}}})))()}var tc,nc,rc;function ic(){return(ic=e((()=>{tc=u(),k(),j(),N(),K(),nc=w(),rc=()=>{let e=(0,tc.useRef)(null);return(0,nc.jsx)(A,{header:M,content:(0,nc.jsx)(O,{scrollRef:e,children:(0,nc.jsx)(G,{scrollRef:e,items:[],isLoading:!0,onRetry:()=>{},renderItem:()=>(0,nc.jsx)(nc.Fragment,{})})}),aside:Ye})},rc.parameters={...rc.parameters,docs:{...rc.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList scrollRef={scrollRef} items={[]} isLoading onRetry={() => {}} renderItem={() => <></>} />
        </PageContent>} aside={MockAside} />;
}`,...rc.parameters?.docs?.source}}}})))()}var ac,$,oc;function sc(){return(sc=e((()=>{ac=u(),Fe(),k(),j(),N(),m(),K(),B(),fs(),$=w(),oc=()=>{let e=(0,ac.useRef)(null),[t,n]=(0,ac.useState)(!0),[r,i]=(0,ac.useState)([]);(0,ac.useEffect)(()=>{setTimeout(()=>{n(!1),i(Do)},1500)},[]);let a=({item:e})=>(0,$.jsxs)(z,{children:[(0,$.jsx)(Zo,{variant:`rounded`,children:e.avatarName}),(0,$.jsxs)(Yo,{children:[(0,$.jsx)(_,{variant:`body1`,children:e.subdivision}),(0,$.jsxs)(_,{variant:`caption`,component:e.meta.hasNested?`p`:`div`,children:[e.meta.hasNested&&`${e.subDivisionCount} Подразделения`,!e.meta.hasNested&&(0,$.jsxs)(Xo,{children:[(0,$.jsxs)(D,{children:[(0,$.jsx)(D.Name,{children:`Тип`}),(0,$.jsx)(D.Value,{children:e.deliveryDate})]}),(0,$.jsxs)(D,{children:[(0,$.jsx)(D.Name,{children:`Дата отправки`}),(0,$.jsx)(D.Value,{children:e.deliveryDate})]})]})]})]})]});return(0,$.jsx)(A,{header:M,content:(0,$.jsx)(O,{scrollRef:e,children:(0,$.jsx)(G,{items:r,isLoading:t,scrollRef:e,onRetry:()=>{},renderItem:e=>(0,$.jsx)(a,{item:e})})}),aside:Ye})},oc.parameters={...oc.parameters,docs:{...oc.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState<OrganizationData[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setItems(fakeOrganizationData);
    }, 1500);
  }, []);
  const Item = ({
    item
  }: {
    item: OrganizationData & {
      meta: InfiniteTreeItemMeta;
    };
  }) => {
    return <InfiniteTreeListItem>
        <StyledAvatar variant="rounded">{item.avatarName}</StyledAvatar>
        <ContentWrapper>
          <Typography variant="body1">{item.subdivision}</Typography>
          <Typography variant="caption" component={item.meta.hasNested ? 'p' : 'div'}>
            {item.meta.hasNested && \`\${item.subDivisionCount} Подразделения\`}
            {!item.meta.hasNested && <DescriptionWrapper>
                <Description>
                  <Description.Name>Тип</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
                <Description>
                  <Description.Name>Дата отправки</Description.Name>
                  <Description.Value>{item.deliveryDate}</Description.Value>
                </Description>
              </DescriptionWrapper>}
          </Typography>
        </ContentWrapper>
      </InfiniteTreeListItem>;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={items} isLoading={isLoading} scrollRef={scrollRef} onRetry={() => {}} renderItem={item => <Item item={item} />} />
        </PageContent>} aside={MockAside} />;
}`,...oc.parameters?.docs?.source}}}})))()}var cc,lc,uc,dc,fc;function pc(){return(pc=e((()=>{cc=u(),k(),j(),N(),K(),B(),fs(),lc=w(),uc=Uo.slice(0,1),dc=({item:e})=>{let{data:t,isLoading:n,isError:r,isEndReached:i,sync:a,fetchMore:o}=qo(e.id);return(0,lc.jsx)(z,{isLoading:n,isError:r,isEndReached:i,childItems:t,onOpen:a,onLoadMore:o,children:(0,lc.jsx)(J,{item:e})})},fc=()=>{let e=(0,cc.useRef)(null),t=(0,cc.useCallback)(e=>(0,lc.jsx)(z,{children:(0,lc.jsx)(J,{item:e})}),[]),n=(0,cc.useCallback)(e=>(0,lc.jsx)(dc,{item:e}),[]);return(0,lc.jsx)(A,{header:M,content:(0,lc.jsx)(O,{scrollRef:e,children:(0,lc.jsx)(G,{items:uc,scrollRef:e,itemSkeleton:(0,lc.jsx)(as,{}),onRetry:()=>{},renderItem:t,renderParent:n})})})},fc.parameters={...fc.parameters,docs:{...fc.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const renderItem = useCallback((item: OrganizationItem) => <InfiniteTreeListItem>
        <OrganizationRow item={item} />
      </InfiniteTreeListItem>, []);
  const renderParent = useCallback((item: OrganizationItem) => <ParentItem item={item} />, []);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <InfiniteTreeList items={singleRootItems} scrollRef={scrollRef} itemSkeleton={<OrganizationItemSkeleton />} onRetry={() => {}} renderItem={renderItem} renderParent={renderParent} />
        </PageContent>} />;
}`,...fc.parameters?.docs?.source}}}})))()}var mc,hc;function gc(){return(gc=e((()=>{N(),K(),hs(),vs(),xs(),Ts(),Ms(),Is(),Us(),qs(),Xs(),ec(),ic(),sc(),pc(),mc={title:`Lists/InfiniteTreeList`,component:G,decorators:Je,parameters:{layout:`fullscreen`,docs:{description:{component:`InfiniteTreeList - компонент для просмотра бесконечного вложенного списка
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=3374-659368)

Для TreeItem с действиями используйте компонент InfiniteTreeListActions`}}}},hc=[`BasicUsage`,`NoData`,`WithLoading`,`WithError`,`ErrorWithData`,`WithDisabledItem`,`WithoutLoadMore`,`InitialExpandedLevel`,`WithChildrenLoadMore`,`WithChildrenPreloaded`,`WithChildrenLoadError`,`WithChildrenNoData`,`WithSingleRootItem`]})))()}gc();export{ms as BasicUsage,_s as ErrorWithData,bs as InitialExpandedLevel,ws as NoData,js as WithChildrenLoadError,Fs as WithChildrenLoadMore,Hs as WithChildrenNoData,Ks as WithChildrenPreloaded,Ys as WithDisabledItem,$s as WithError,rc as WithLoading,fc as WithSingleRootItem,oc as WithoutLoadMore,hc as __namedExportsOrder,mc as default};