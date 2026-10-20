import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Va as i,ei as a,ji as o,xa as s,yn as c}from"./preview-MR7j8bZ5.js";import{l,t as u}from"./mixins-CYOjjfLA.js";import{i as d,n as f,r as p,t as m}from"./FormControlLabel-JYgzyoaT.js";import{r as h,t as g}from"./useId-k1ICZN9j.js";import{a as _,r as v,t as y}from"./Radio-BFE9rE1c.js";import{t as b}from"./Radio-1fQbffij.js";import{i as x,n as S,r as C,s as w,t as T}from"./getFormatDisabledItems-UQymNS0N.js";var E;function D(){return(D=e((()=>{r(),E={list:n(`tree-list`)}})))()}var O,k;function A(){return(A=e((()=>{c(),u(),O=o.div`
  display: contents;
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: relative;
    z-index: 0;
    transform: translateZ(0);

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 0;
  }
`,k=o.ul`
  ${l};
  position: relative;

  overflow: hidden;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow-y: auto;
    flex-grow: 1;

    min-height: 0;
  }
`})))()}var j,M,N,P;function F(){return(F=e((()=>{f(),d(),b(),c(),u(),C(),j=o(y)`
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 20px;

    & .${_.iconWrapper}, & .${_.input} {
      height: 20px;
    }
  }
`,M=o(x)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    .${w.note} {
      /* Добавляем к отступу ширину контейнера с радио кнопкой */
      margin-left: ${({theme:e})=>`calc(${e.spacing(1)} + ${v})`};
    }
  }
`,N=o.ul`
  ${l}
`,P=o(m)`
  margin-left: 0;

  & .${p.label} {
    margin-left: 0;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var I;function L(){return(L=e((()=>{I=({value:e,level:t,item:n,isInitialExpanded:r,expandedLevel:i,chainToSelectedItem:a=[],disabledItems:o,onChange:s,isObjectMode:c})=>{let{id:l,options:u}=n,d=c&&typeof e==`object`?e?.id===l:e===l,f=a.includes(l)?!0:u?.hasOwnProperty(`isDefaultExpanded`)?u.isDefaultExpanded:r&&t<=i-1,p=o?.find(e=>e.id===l),m=!!p,h=p?.disabledReason,g=t+1,_=()=>c?s?.(n):s?.(l);return{isSelected:d,isDefaultExpanded:f,isDisabled:m,disabledReason:h,nextLevel:g,handleChange:_,formControlLabelProps:{disabled:m,onChange:_,onClick:e=>{e.stopPropagation()}}}}})))()}var R,z;function B(){return(B=e((()=>{F(),L(),R=s(),z=e=>{let{isSelected:t,isDefaultExpanded:n,isDisabled:r,disabledReason:i,nextLevel:a,handleChange:o,formControlLabelProps:s}=I(e),{item:c,prefixId:l,level:u,renderItem:d,value:f,isInitialExpanded:p,expandedLevel:m,chainToSelectedItem:h,disabledItems:g,onChange:_,isObjectMode:v}=e,{id:y,label:b,note:x,children:S=[],options:C}=c,w=d?d({label:b,note:x,id:y}):b;return S.length?(0,R.jsx)(M,{id:y,prefixId:l,isSelected:t,isDefaultExpanded:n,isForceExpanded:C?.isForceExpanded,isDisabled:r,disabledReason:i,component:`li`,label:(0,R.jsx)(P,{control:(0,R.jsx)(j,{checked:t,disabled:r,value:y}),label:w,...s}),note:d?null:x,mobileHeaderLabel:w,mobileHeaderControl:(0,R.jsx)(j,{checked:t,disabled:r,value:y,onChange:o}),level:u,onClick:o,children:(0,R.jsx)(N,{children:S.map(e=>(0,R.jsx)(z,{item:e,prefixId:l,renderItem:d,level:a,isInitialExpanded:p,expandedLevel:m,chainToSelectedItem:h,disabledItems:g,value:f,onChange:_,isObjectMode:v},e.id))})}):(0,R.jsx)(M,{id:y,prefixId:l,isSelected:t,isDisabled:r,disabledReason:i,note:d?null:x,component:`li`,label:(0,R.jsx)(P,{control:(0,R.jsx)(j,{checked:t,disabled:r,value:y}),label:w,...s}),level:u,onClick:o})};try{z.displayName=`TreeItem`,z.__docgenInfo={description:``,displayName:`TreeItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/TreeItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`TreeListData`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Выбранные значения`,name:`value`,required:!1,tags:{},type:{name:`TreeListItemValue`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:``,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}},prefixId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уникальный префикс для идентификаторов в рамках дерева`,name:`prefixId`,required:!1,tags:{},type:{name:`string`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},isInitialExpanded:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию при монтировании`,name:`isInitialExpanded`,required:!1,tags:{default:`false`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},chainToSelectedItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Цепочка идентификаторов до выбранного элемента дерева`,name:`chainToSelectedItem`,required:!1,tags:{},type:{name:`string[]`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`FormatDisableItem[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при выборе item`,name:`onChange`,required:!1,tags:{},type:{name:`(value: TValue) => void`}}},tags:{}}}catch{}})))()}function V(){return(V=e((()=>{B()})))()}var H;function U(){return(U=e((()=>{H=(e,t)=>{let n=[],r=t&&typeof t==`object`?t.id:t,i=e=>{if(n.push(e.id),e.id===r)return!0;if(e.children){for(let t of e.children)if(i(t))return!0}return n.pop(),!1};for(let t of e)if(i(t))return n;return[]}})))()}var W,G;function K(){return(K=e((()=>{W=i(),g(),S(),U(),G=({value:e,data:t,disabledItems:n,isObjectMode:r})=>{let i=h(),a=(0,W.useRef)(null);(0,W.useEffect)(()=>{if(a.current&&e){let t=r&&typeof e==`object`?e.id:e,n=a.current.querySelector(`
        li[id="${i}${t}"]`);n&&n.scrollIntoView({block:`center`})}},[a,i]);let o=(0,W.useMemo)(()=>T(n),[n]),s=(0,W.useMemo)(()=>H(t,e),[t,e]);return{listProps:{ref:a},itemProps:{chainToSelectedItem:s,disabledItems:o,prefixId:i}}}})))()}function q(){return(q=e((()=>{K()})))()}var J,Y,X;function Z(){return(Z=e((()=>{a(),D(),A(),V(),q(),J=s(),Y=0,X=e=>{let{listProps:n,itemProps:r}=G(e),{data:i,className:a,expandedLevel:o=10,disabledItems:s,...c}=e;return(0,J.jsx)(O,{children:(0,J.jsx)(k,{className:t(a,E.list),...n,children:i.map(e=>(0,J.jsx)(z,{item:e,level:Y,expandedLevel:o,...r,...c},e.id))})})};try{X.displayName=`TreeList`,X.__docgenInfo={description:``,displayName:`TreeList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/TreeList.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Выбранное значение`,name:`value`,required:!1,tags:{},type:{name:`TreeListItemValue`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Данные, которые необходимо отобразить в виде дерева.`,name:`data`,required:!0,tags:{},type:{name:`TreeListData[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!1,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:{value:`'10'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!1,tags:{default:`'10'`},type:{name:`number`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`DisabledItemValue[]`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при изменении состояния.`,name:`onChange`,required:!1,tags:{},type:{name:`(value: TValue) => void`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tree/TreeList/types.ts`,name:`TypeLiteral`}],description:`Переключает компонент в режим работы с объектами а не с id элементов`,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{E as i,Z as n,D as r,X as t};