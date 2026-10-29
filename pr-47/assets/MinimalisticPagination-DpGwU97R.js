import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{$r as t,Cn as n,Dn as r,On as i,dt as a,ei as o,ft as s,it as c,ji as l,rt as u,wn as d,ya as f,yn as p}from"./preview-BY-1Z8yT.js";import{n as m,t as h}from"./NextOutlineMd-BOsxYBXx.js";import{n as g,t as _}from"./PreviousOutlineMd-BHaPwY1u.js";var v;function y(){return(y=e((()=>{i(),v={root:r(`minimalistic-pagination`),disabled:r(`minimalistic-pagination_disabled`)}})))()}var b,x;function S(){return(S=e((()=>{p(),a(),y(),b=l(s)`
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  font-weight: ${({theme:e})=>e.typography.fontWeightMedium};
`,x=l.nav`
  display: flex;
  align-items: center;

  &.${v.disabled} {
    opacity: 0.3;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    justify-content: flex-end;

    width: 100%;
  }
`})))()}var C;function w(){return(w=e((()=>{C=({page:e,onChange:t,isEndReached:n,isDisabled:r})=>({previousButtonProps:{disabled:e===1||r,onClick:()=>{t(e-1)}},nextButtonProps:{disabled:n||r,onClick:()=>{t(e+1)}}})})))()}var T,E,D;function O(){return(O=e((()=>{h(),_(),u(),o(),d(),y(),S(),w(),T=f(),E=n(v.root,{variants:{isDisabled:{true:v.disabled}}}),D=e=>{let{previousButtonProps:n,nextButtonProps:r}=C(e),{page:i,className:a,isDisabled:o}=e;return(0,T.jsxs)(x,{className:t(a,E({isDisabled:o})),"aria-label":`Пагинация`,children:[(0,T.jsx)(c,{"aria-label":`Перейти на предыдущую страницу`,variant:`text`,...n,children:(0,T.jsx)(g,{})}),(0,T.jsx)(b,{component:`span`,children:i}),(0,T.jsx)(c,{"aria-label":`Перейти на следующую страницу`,variant:`text`,...r,children:(0,T.jsx)(m,{})})]})};try{D.displayName=`MinimalisticPagination`,D.__docgenInfo={description:``,displayName:`MinimalisticPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/MinimalisticPagination.tsx`,methods:[],props:{page:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/types.ts`,name:`TypeLiteral`}],description:`Текущая страница`,name:`page`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/types.ts`,name:`TypeLiteral`}],description:`Функция изменения текущей страницы`,name:`onChange`,required:!0,tags:{},type:{name:`(page: number) => void`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/types.ts`,name:`TypeLiteral`}],description:`Параметр достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/types.ts`,name:`TypeLiteral`}],description:`Параметр блокировки пагинации`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MinimalisticPagination/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{O as n,y as r,D as t};