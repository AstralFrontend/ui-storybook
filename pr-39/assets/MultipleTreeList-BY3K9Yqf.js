import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ji as n,xa as r,yn as i}from"./preview-DREXElCf.js";import{l as a,t as o}from"./mixins-C9Hxy4R7.js";import{a as s,i as c,r as l,t as u}from"./Checkbox-BnhPtjsJ.js";import{t as d}from"./Checkbox-LJGidjfh.js";import{i as f,r as p}from"./FormControlLabel-Dkn5Xnsr.js";import{n as m,t as h}from"./FormControlLabel-DmBemy2U.js";import{i as g,n as _,r as v,s as y,t as b}from"./getFormatDisabledItems-Dl_geyY4.js";var x,S;function C(){return(C=e((()=>{i(),o(),x=n.div`
  display: contents;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;
    transform: translateZ(0);

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 0;
  }
`,S=n.ul`
  ${a};
  position: relative;

  overflow: hidden;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow-y: auto;
    flex-grow: 1;

    min-height: 0;
  }
`})))()}var w,T,E;function D(){return(D=e((()=>{f(),d(),i(),o(),v(),w=n(u)`
  padding-top: 0;
  padding-bottom: 0;

  & > .${s.input}, .${s.iconWrapper} {
    width: 32px;
    height: 16px;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: ${c};
    height: 20px;

    & .${s.iconWrapper}, & .${s.input} {
      width: ${c};
      height: 20px;
    }
  }
`,T=n(g)`
  .${p.root} .${p.label} {
    margin-left: 0;
  }

  .${y.note} {
    /* cSpell:ignore чекбоксом */

    /* Добавляем к отступу ширину контейнера с чекбоксом */
    margin-left: ${l};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${p.root} {
      gap: ${({theme:e})=>e.spacing(1)};

      margin-left: 0;
    }

    & .${y.note} {
      margin-left: ${({theme:e})=>`calc(${e.spacing(1)} + ${c})`};
    }
  }
`,E=n.ul`
  ${a};
`})))()}var O;function k(){return(k=e((()=>{O=e=>typeof e==`string`?e:e.id})))()}var A;function j(){return(j=e((()=>{k(),A=(e,t)=>!e||!t?!1:e.some(e=>t.includes(O(e)))})))()}var ee;function M(){return(M=e((()=>{k(),ee=(e,t)=>!e||!e.length?!1:e.some(e=>O(e)===t)})))()}var N;function P(){return(P=e((()=>{N=(e,t)=>{if(!e||!e?.length)return[];let n=[],r=e=>t?t.some(t=>typeof t==`string`?t===e:t.id===e):!1,i=(e,t)=>{e.forEach(e=>{let a=t||r(e.id);a||n.push(e.id),e.children&&i(e.children,a)})};return i(e),n}})))()}var F;function I(){return(I=e((()=>{F=(e,t)=>{if(!t.length)return[];let n=new Map,r=e=>{for(let t of e)n.set(t.id,t),t.children&&r(t.children)};return r(e),t.map(e=>n.get(e)).filter(e=>e!==void 0)}})))()}var L;function R(){return(R=e((()=>{I(),L=(e,t,n,r)=>t?r?[e,...F(t,n)]:[e.id,...n]:r?[e]:[e.id]})))()}var z,B;function V(){return(V=e((()=>{z=t(),j(),M(),P(),k(),R(),B=({item:e,value:t=[],level:n,renderItem:r,isInitialExpanded:i,expandedLevel:a,disabledItems:o,onChange:s,isObjectMode:c})=>{let{id:l,children:u,label:d,note:f}=e,p=(0,z.useMemo)(()=>N(u,o),[u,o]),m=ee(t,l),h=A(t,p),g=i&&n<=a-1,_=o?.find(e=>e.id===l),v=!!_,y=_?.disabledReason;return(0,z.useEffect)(()=>{if(!p.length)return;let n=p.every(e=>t?.some(t=>O(t)===e));if(!m&&n){let n=c?e:l;s(t?[...t,n]:[n])}if(m&&!n){let e=t?.filter(e=>O(e)!==l);s(e)}},[t,p,m]),{isSelected:m,isIndeterminate:h,isDefaultExpanded:g,isDisabled:v,disabledReason:y,handleChange:()=>{if(t?.some(e=>O(e)===l)){let e=u?[l,...p]:[l],n=t?.filter(t=>{let n=O(t);return!e.includes(n)});return s(n)}let n=L(e,u,p,c);s(t?[...t,...n]:n)},itemLabel:r?r({label:d,note:f,id:l}):d,handleClick:e=>{e.stopPropagation()}}}})))()}function H(){return(H=e((()=>{V()})))()}var U,W;function G(){return(G=e((()=>{h(),D(),H(),U=r(),W=e=>{let{isSelected:t,isIndeterminate:n,isDefaultExpanded:r,disabledReason:i,isDisabled:a,handleChange:o,itemLabel:s,handleClick:c}=B(e),{level:l,renderItem:u,value:d,isInitialExpanded:f,expandedLevel:p,disabledItems:h,onChange:g,item:_,isObjectMode:v}=e,{id:y,note:b,children:x=[],options:S}=_;return x.length?(0,U.jsx)(T,{id:y,isSelected:t,isDefaultExpanded:r,isForceExpanded:S?.isForceExpanded,isDisabled:a,disabledReason:i,note:u?null:b,component:`li`,label:(0,U.jsx)(m,{control:(0,U.jsx)(w,{checked:t,indeterminate:!t&&n}),label:s,disabled:a,onChange:o,onClick:c}),mobileHeaderLabel:s,mobileHeaderControl:(0,U.jsx)(w,{checked:t,indeterminate:!t&&n,disabled:a,onChange:o}),level:l,onClick:o,children:(0,U.jsx)(E,{children:x.map(e=>(0,U.jsx)(W,{item:e,renderItem:u,level:l+1,isInitialExpanded:f,expandedLevel:p,disabledItems:h,value:d,onChange:g,isObjectMode:v},e.id))})}):(0,U.jsx)(T,{id:y,isSelected:t,isDisabled:a,disabledReason:i,note:u?null:b,component:`li`,label:(0,U.jsx)(m,{control:(0,U.jsx)(w,{checked:t}),label:s,disabled:a,onChange:o,onClick:c}),level:l,onClick:o})};try{W.displayName=`TreeItem`,W.__docgenInfo={description:``,displayName:`TreeItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/TreeItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`TreeListData`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Выбранные значения`,name:`value`,required:!1,tags:{},type:{name:`MultipleValue`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},isInitialExpanded:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию при монтировании`,name:`isInitialExpanded`,required:!1,tags:{default:`false`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`FormatDisableItem[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при выборе item`,name:`onChange`,required:!0,tags:{},type:{name:`(value: TValue) => void`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Переключает компонент в режим работы с объектами а не с id элементов`,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function K(){return(K=e((()=>{G()})))()}var q,J;function Y(){return(Y=e((()=>{q=t(),_(),J=({disabledItems:e})=>({formattedDisabledItems:(0,q.useMemo)(()=>b(e),[e])})})))()}function X(){return(X=e((()=>{Y()})))()}var Z,Q,$;function te(){return(te=e((()=>{C(),K(),X(),Z=r(),Q=0,$=({data:e,value:t,className:n,expandedLevel:r=10,disabledItems:i,...a})=>{let{formattedDisabledItems:o}=J({disabledItems:i});return(0,Z.jsx)(x,{children:(0,Z.jsx)(S,{className:n,children:e.map(e=>(0,Z.jsx)(W,{item:e,value:t,level:Q,expandedLevel:r,disabledItems:o,...a},e.id))})})};try{$.displayName=`MultipleTreeList`,$.__docgenInfo={description:``,displayName:`MultipleTreeList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/MultipleTreeList.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Выбранные значения`,name:`value`,required:!1,tags:{},type:{name:`MultipleValue`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Данные, которые необходимо отобразить в виде дерева.`,name:`data`,required:!0,tags:{},type:{name:`TreeListData[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!1,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:{value:`10`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!1,tags:{default:`'10'`},type:{name:`number`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`DisabledItemValue[]`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при изменении состояния.`,name:`onChange`,required:!0,tags:{},type:{name:`(value: TValue) => void`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/MultipleTreeList/types.ts`,name:`TypeLiteral`}],description:`Переключает компонент в режим работы с объектами а не с id элементов`,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{te as n,$ as t};