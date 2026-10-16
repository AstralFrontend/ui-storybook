import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,Ni as i,On as a,Sa as o,Va as s,Xt as c,an as l,ei as u,ji as d,on as ee,wn as f,xa as p,yn as m}from"./preview-CpIY8YCq.js";import{n as h}from"./useLocalStorage-Bh5iUrR2.js";import{n as te,o as ne,t as g}from"./PinButton-BcsoyFoG.js";import{E as _,O as v}from"./PageContentHeaderActions-B24ecR0z.js";import{n as y,t as b}from"./MenuOnOutlineMd-DcsSodsp.js";import{S as x,_ as S,f as C,g as w,h as T,l as E,m as D,p as O,v as k,y as A}from"./PageContent-CVBSZP2r.js";var j;function M(){return(M=e((()=>{j=(e,t)=>`@astral/ui::${e}::${t}`})))()}var N,P;function F(){return(F=e((()=>{a(),M(),N={content:r(`pinnable-aside__content`),withHeader:r(`pinnable-aside_with-header`),root:r(`pinnable-aside`)},P=j(`Aside`,`isPinned`)})))()}var I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),E(),S(),m(),F(),I=d(`aside`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  position: relative;

  overflow: ${({$isPinned:e})=>e?`hidden`:`unset`};
  grid-column: 2;
  grid-row: 2;

  height: 100%;

  border-bottom-right-radius: ${({theme:e})=>e.shape.medium};

  &:hover {
    .${N.content} {
      transform: translateX(0);
    }
  }

  &.${N.withHeader} {
    & .${k.root} {
      padding-top: ${({theme:e})=>e.spacing(5)};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,L=d(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 100%;

  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${({$isPinned:e})=>e&&`display: none;`}
`,R=i`
  transform: translateX(0);
`,z=i`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(105%);
`,B=d(`div`,{shouldForwardProp:e=>![`$isPinned`].includes(e)})`
  position: relative;
  z-index: ${({theme:e})=>e.zIndex.appBar-2};

  overflow: hidden;
  display: flex;
  grid-column: 2;
  grid-row: 2;
  flex-direction: column;

  width: ${_};
  height: 100%;

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`transform`],{duration:e.transitions.duration.shorter*2,easing:e.transitions.easing.easeInOut,delay:e.transitions.duration.shorter})};

  ${({$isPinned:e})=>e?R:z}
  
  ${({$isPinned:e,theme:t})=>!e&&`
    box-shadow: 0px 0px 1px 0px #072D574F, -8px -5px 12px -6px #072D5726;
    border-radius: ${t.shape.medium};
  `}

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: unset;
    order: -1;

    width: 100%;

    border-top: unset;
    border-left: 0;
    border-radius: ${({theme:e})=>e.shape.medium};
  }
`,V=d.div`
  overflow-y: auto;
  flex-grow: 1;

  padding: ${({theme:e})=>e.spacing(4,6)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }
`,H=d.footer`
  display: flex;
  flex-shrink: 0;

  box-sizing: content-box;
  height: ${l};
  margin-top: auto;

  background-color: ${({theme:e})=>e.palette.background.default};
  border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    height: ${ee};
  }
`})))()}var W,G;function K(){return(K=e((()=>{W=s(),E(),ne(),F(),G=({isPinned:e,onPin:t,persistState:n,navigation:r})=>{let{pageHeaderContainer:i}=x({navigation:r});(0,W.useEffect)(()=>{let r=e!==void 0,i=t!==void 0,a=n!==void 0;r!==i&&console.warn(`PagePinnableAside: Параметры isPinned и onPin необходимо передавать вместе`),!r&&!a&&console.error(`PagePinnableAside: Необходимо передать параметры isPinned и onPin или состояние persistState`)},[]);let a=e!==void 0,o=(0,W.useMemo)(()=>n?`${P}::${n.id}`:null,[n]),[s=!0,c]=o?h(o,!0):[!0,()=>void 0],l=a?e:s??!0;return{isPinned:l,togglePin:()=>{let e=!l;if(a)return t?.(e);c(e)},pageHeaderContainer:i,isMobileNavigationVisible:r&&i}}})))()}function q(){return(q=e((()=>{K()})))()}var J,Y,X,Z;function Q(){return(Q=e((()=>{J=o(),b(),E(),w(),g(),u(),f(),F(),U(),q(),Y=p(),X=n(N.root,{variants:{withHeader:{true:N.withHeader}}}),Z=({header:e,children:n,className:r,navigation:i,...a})=>{let{isPinned:o,togglePin:s,pageHeaderContainer:c,isMobileNavigationVisible:l}=G({navigation:i,...a});return(0,Y.jsxs)(Y.Fragment,{children:[l&&(0,J.createPortal)((0,Y.jsx)(D,{className:v.mobileNavigation,children:i}),c),e&&(0,Y.jsx)(O,{children:e}),(0,Y.jsx)(A,{content:n}),(0,Y.jsxs)(I,{$isPinned:o,className:X({withHeader:!!e}),children:[(0,Y.jsx)(L,{$isPinned:o,children:(0,Y.jsx)(y,{})}),(0,Y.jsxs)(B,{$isPinned:o,className:t(r,N.content),children:[(0,Y.jsxs)(V,{children:[e&&(0,Y.jsxs)(C,{children:[e,(0,Y.jsx)(T,{})]}),i,n]}),(0,Y.jsx)(H,{children:(0,Y.jsx)(te,{isPinned:o,isUseCollapse:!1,onClick:s})})]})]})]})};try{Z.displayName=`PagePinnableAside`,Z.__docgenInfo={description:`Открепляемый aside`,displayName:`PagePinnableAside`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/PagePinnableAside.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isPinned:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Состояния прикреплен/откреплен`,name:`isPinned`,required:!1,tags:{},type:{name:`boolean`}},onPin:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Функция изменения состояния закрепления`,name:`onPin`,required:!1,tags:{},type:{name:`(isPinned: boolean) => void`}},persistState:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Настройки сохранения состояния в localstorage`,name:`persistState`,required:!1,tags:{},type:{name:`{ isEnabled: boolean; id: string; }`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Заголовок боковой панели`,name:`header`,required:!1,tags:{},type:{name:`ReactNode`}},navigation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PagePinnableAside/types.ts`,name:`TypeLiteral`}],description:`Компонент для отображения навигации`,name:`navigation`,required:!1,tags:{example:`<PagePinnableAside navigation={
  <PageAsideNavigation>
    <PageAsideNavigationItem>
      Home
    </PageAsideNavigationItem>
  </PageAsideNavigation>}
/>`},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function $(){return($=e((()=>{Q()})))()}export{Z as n,Q as r,$ as t};