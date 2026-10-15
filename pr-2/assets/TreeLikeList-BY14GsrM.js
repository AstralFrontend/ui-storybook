import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Va as n,cn as r,ei as i,ji as a,ln as o,xa as s,yn as c}from"./preview-msKJ6Jz4.js";import{n as l,t as u}from"./useViewportType-BXVZ_8ee.js";import{i as d,r as f,t as p}from"./Tooltip-x3xLKbQe.js";import{t as m}from"./Collapse-1PPDGVh5.js";import{t as h}from"./Collapse-DXQRadHq.js";import{l as g,t as _}from"./mixins-CS7Jn52m.js";import{t as v}from"./Tooltip-CvNAALxE.js";import{a as y,i as b,t as x}from"./Checkbox-DWNnHeZw.js";import{t as S}from"./Checkbox-Bd7nj6yO.js";import{i as C,r as w}from"./FormControlLabel-j4Jhf3kG.js";import{n as T,t as E}from"./FormControlLabel-COv2mpUg.js";import{t as D}from"./ClickAwayListener-j2wggmDT.js";import{t as O}from"./ClickAwayListener-9e_Ex5zp.js";import{r as ee,t as te}from"./useToggle-C69zmRgW.js";import{r as k,t as A}from"./useId-m79yngKS.js";import{i as j,n as M,s as N,t as P}from"./getFormatDisabledItems-BtZCWlHK.js";import{t as F}from"./Tree-DOEZ1fJk.js";import{i as I}from"./TreeList-DMbjbVOk.js";var ne,L;function R(){return(R=e((()=>{c(),_(),ne=a.div`
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
`,L=a.ul`
  ${g};
  overflow: hidden;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow-y: auto;
    flex-grow: 1;

    min-height: 0;
  }
`,a(L)`
  overflow: unset;
`})))()}var z,B,re,ie,ae,oe,se;function ce(){return(ce=e((()=>{C(),f(),r(),S(),h(),c(),_(),v(),F(),z=a(x)`
  padding-top: 0;
  padding-bottom: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 20px;

    & .${y.iconWrapper}, & .${y.input} {
      height: 20px;
    }
  }
`,B=a(j)`
  .${N.note} {
    /* cSpell:ignore чекбоксом */

    /* Добавляем к отступу ширину контейнера с чекбоксом */
    margin-left: ${({theme:e})=>`calc(${e.spacing(1)} + 32px)`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    & .${w.root} {
      gap: ${({theme:e})=>e.spacing(1)};

      margin-left: 0;
    }

    & .${w.root} .${w.label} {
      margin-left: 0;
    }

    & .${N.note} {
      margin-left: ${({theme:e})=>`calc(${e.spacing(1)} + ${b})`};
    }
  }
`,re=a.ul`
  ${g};
`,ie=a(p)`
  .${d.tooltip} {
    margin-left: 0 !important;

    background-color: ${({theme:e})=>e.palette.background.paper} !important;
    box-shadow: ${({theme:e})=>e.elevation[200]};
  }
`,ae=a.div`
  padding: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(3,2)};
  }
`,oe=a(m)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    border-bottom: 1px solid
      ${({theme:e})=>e.palette.components.border.default};
  }
`,se=a(o)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    justify-content: flex-start;

    width: 100%;
    height: auto;
    padding: ${({theme:e})=>e.spacing(3,4)};

    border-radius: 0;
  }
`})))()}var V;function H(){return(H=e((()=>{V=e=>typeof e==`string`?e:e.id})))()}var U;function W(){return(W=e((()=>{H(),U=(e,t)=>!e||!e.length?!1:e.some(e=>V(e)===t)})))()}var G;function le(){return(le=e((()=>{G=(e,t)=>{if(!e||!e?.length)return[];let n=[],r=e=>t?t.some(t=>typeof t==`string`?t===e:t.id===e):!1,i=(e,t)=>{e.forEach(e=>{let a=t||r(e.id);a||n.push(e.id),e.children&&i(e.children,a)})};return i(e),n}})))()}var ue;function de(){return(de=e((()=>{ue=(e,t)=>{if(!t.length)return[];let n=new Map,r=e=>{for(let t of e)n.set(t.id,t),t.children&&r(t.children)};return r(e),t.map(e=>n.get(e)).filter(e=>e!==void 0)}})))()}var K;function fe(){return(fe=e((()=>{H(),K=e=>e?e.map(e=>V(e)):[]})))()}var pe;function me(){return(me=e((()=>{H(),pe=(e,t)=>{if(!e||t.length===0)return e;let n=new Set(t);return e.filter(e=>!n.has(V(e)))}})))()}var he;function ge(){return(ge=e((()=>{de(),he=(e,t,n,r)=>{if(t.length===0)return e;let i=e||[];if(r){let e=ue(n||[],t);return[...i,...e]}return[...i,...t]}})))()}var _e;function ve(){return(ve=e((()=>{H(),_e=(e,t)=>e&&e.filter(e=>V(e)!==t)})))()}var ye;function be(){return(be=e((()=>{ye=(e,t,n)=>{let r=e||[],i=n?t:t.id;return[...r,i]}})))()}var q,xe;function Se(){return(Se=e((()=>{q=n(),te(),u(),be(),ge(),W(),le(),fe(),ve(),me(),xe=({item:e,value:t=[],level:n,isConfirmChildrenSelection:r,isInitialExpanded:i,expandedLevel:a,chainsToSelectedItem:o=[],disabledItems:s,onChange:c,isObjectMode:u})=>{let{id:d,children:f}=e,[p,m,h]=ee(),[g,_]=(0,q.useState)(!1),v=(0,q.useRef)(null),{isMobile:y}=l(),b=(0,q.useMemo)(()=>G(f,s),[f,s]),x=U(t,d),S=(0,q.useMemo)(()=>o?.reduce((e,t)=>e.concat(t),[]),[o])?.includes(d)||i&&n<=a-1,C=s?.find(e=>e.id===d),w=!!C,T=C?.disabledReason,E=n+1,D=e=>{if(r){if(e){m();return}h()}},O=()=>{if(w)return;let n=K(t);if(n.includes(d)){let e=b.some(e=>n.includes(e));return D(e),c(_e(t,d))}c(ye(t,e,u));let r=b.every(e=>n.includes(e));D(!r)};return{isSelected:x,isDefaultExpanded:S,isDisabled:w,disabledReason:T,nextLevel:E,confirmChildrenExcludeNodes:(0,q.useMemo)(()=>[v],[]),itemRef:v,formControlLabelProps:{disabled:w,onChange:O,onClick:e=>{e.stopPropagation()}},confirmChildrenProps:{open:p,onClose:h},confirmChildrenButtonProps:{onClick:e=>{e.stopPropagation();let n=K(t);if(x){let e=b.filter(e=>!n.includes(e));c(he(t,e,f,u))}else{let e=b.filter(e=>n.includes(e));c(pe(t,e))}h()}},handleChange:O,handleMobileOpenChange:e=>{_(e),h()},isMobile:y,isMobilePanelOpen:g,isConfirmChildrenAvailable:y&&r}}})))()}function Ce(){return(Ce=e((()=>{Se()})))()}var J,Y;function X(){return(X=e((()=>{r(),O(),E(),ce(),Ce(),J=s(),Y=e=>{let{isSelected:t,isDefaultExpanded:n,disabledReason:r,isDisabled:i,nextLevel:a,formControlLabelProps:s,confirmChildrenProps:c,confirmChildrenButtonProps:l,handleChange:u,handleMobileOpenChange:d,isMobile:f,isMobilePanelOpen:p,isConfirmChildrenAvailable:m,itemRef:h,confirmChildrenExcludeNodes:g}=xe(e),{item:_,prefixId:v,level:y,renderItem:b,value:x,isConfirmChildrenSelection:S,isInitialExpanded:C,expandedLevel:w,chainsToSelectedItem:E,disabledItems:O,onChange:ee,isObjectMode:te}=e,{id:k,label:A,note:j,children:M=[],options:N}=_,P=b?b({label:A,note:j,id:k}):A,F=t?`Выбрать дочерние`:`Исключить дочерние`,I=()=>(0,J.jsx)(oe,{in:c.open,unmountOnExit:!0,children:(0,J.jsx)(se,{variant:`light`,...l,children:F})});if(M.length){let e=(0,J.jsx)(z,{checked:t});return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(B,{ref:h,id:k,prefixId:v,isSelected:t,isDefaultExpanded:n,isForceExpanded:N?.isForceExpanded,disabledReason:r,isDisabled:i,note:b?null:j,isNotBlockingExpandList:!0,component:`li`,label:(0,J.jsx)(T,{control:f?e:(0,J.jsx)(ie,{arrow:!1,placement:`right`,leaveDelay:250,title:(0,J.jsx)(ae,{children:(0,J.jsx)(o,{variant:`light`,...l,children:F})}),...c,children:e}),label:P,...s}),mobileHeaderLabel:P,mobileHeaderControl:(0,J.jsx)(z,{checked:t,disabled:i,onChange:u}),mobileHeaderAdditionalContent:m&&p?(0,J.jsx)(D,{isActive:c.open,onClickAway:c.onClose,children:I()}):void 0,level:y,onClick:u,onMobilePanelOpenChange:d,children:(0,J.jsx)(re,{children:M.map(e=>(0,J.jsx)(Y,{isObjectMode:te,prefixId:v,item:e,renderItem:b,level:a,isConfirmChildrenSelection:S,isInitialExpanded:C,expandedLevel:w,chainsToSelectedItem:E,disabledItems:O,value:x,onChange:ee},e.id))})}),m&&!p&&(0,J.jsx)(D,{isActive:c.open,excludeNodes:g,onClickAway:c.onClose,children:(0,J.jsx)(`li`,{children:I()})})]})}return(0,J.jsx)(B,{id:k,prefixId:v,isSelected:t,isDisabled:i,disabledReason:r,note:b?null:j,component:`li`,label:(0,J.jsx)(T,{control:(0,J.jsx)(z,{checked:t}),label:b?b({label:A,note:j,id:k}):A,...s}),level:y,onClick:u})};try{Y.displayName=`TreeItem`,Y.__docgenInfo={description:``,displayName:`TreeItem`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/TreeItem.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:``,name:`item`,required:!0,tags:{},type:{name:`TreeListData`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Выбранные значения`,name:`value`,required:!1,tags:{},type:{name:`MultipleValue`}},prefixId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уникальный префикс для идентификаторов в рамках дерева`,name:`prefixId`,required:!1,tags:{},type:{name:`string`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},isConfirmChildrenSelection:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Если true, при выборе родителя будет возможность выбора дочерних элементов`,name:`isConfirmChildrenSelection`,required:!1,tags:{},type:{name:`boolean`}},isInitialExpanded:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!1,tags:{default:`false`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},chainsToSelectedItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Цепочки идентификаторов до выбранных элементов дерева`,name:`chainsToSelectedItem`,required:!1,tags:{},type:{name:`string[][]`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`FormatDisableItem[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при выборе item`,name:`onChange`,required:!0,tags:{},type:{name:`(value: TValue) => void`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeItem/types.ts`,name:`TypeLiteral`}],description:`Переключает компонент в режим работы с объектами а не с id элементов`,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function we(){return(we=e((()=>{X()})))()}var Te;function Ee(){return(Ee=e((()=>{Te=(e,t)=>{let n=[];if(!t||t.length===0)return[];let r=new Set(t.map(e=>typeof e==`string`?e:e.id)),i=(e,t)=>{let a=[...t,e.id];r.has(e.id)&&n.push(a),e.children?.forEach(e=>i(e,a))};for(let t of e)i(t,[]);return n}})))()}var Z,De;function Oe(){return(Oe=e((()=>{Z=n(),M(),A(),Ee(),De=({data:e,value:t,disabledItems:n})=>{let r=k(),i=(0,Z.useRef)(null);(0,Z.useEffect)(()=>{if(i.current&&t?.length){let e=typeof t[0]==`string`?t[0]:t[0].id,n=i.current.querySelector(`
        li[id="${r}${e}"]`);n&&n.scrollIntoView({block:`center`})}},[i,r]);let a=(0,Z.useMemo)(()=>P(n),[n]),o=(0,Z.useMemo)(()=>Te(e,t),[e,t]);return{listProps:{ref:i},itemProps:{chainsToSelectedItem:o,disabledItems:a,prefixId:r}}}})))()}function ke(){return(ke=e((()=>{Oe()})))()}var Q,Ae,$;function je(){return(je=e((()=>{F(),i(),R(),we(),ke(),Q=s(),Ae=0,$=e=>{let{listProps:n,itemProps:r}=De(e),{data:i,className:a,expandedLevel:o=10,disabledItems:s,...c}=e;return(0,Q.jsx)(ne,{children:(0,Q.jsx)(L,{className:t(a,I.list),...n,children:i.map(e=>(0,Q.jsx)(Y,{item:e,level:Ae,expandedLevel:o,...r,...c},e.id))})})};try{$.displayName=`TreeLikeList`,$.__docgenInfo={description:``,displayName:`TreeLikeList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/TreeLikeList/TreeLikeList.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Выбранные значения`,name:`value`,required:!1,tags:{},type:{name:`MultipleValue`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Данные, которые необходимо отобразить в виде дерева.`,name:`data`,required:!0,tags:{},type:{name:`TreeListData[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},isConfirmChildrenSelection:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Если true, при выборе родителя будет возможность выбора дочерних элементов`,name:`isConfirmChildrenSelection`,required:!1,tags:{},type:{name:`boolean`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!1,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:{value:`'10'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isExpanded=true`,name:`expandedLevel`,required:!1,tags:{default:`'10'`},type:{name:`number`}},disabledItems:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:"Список `value` элементов дерева, которые не доступны для взаимодействия",name:`disabledItems`,required:!1,tags:{},type:{name:`DisabledItemValue[]`}},renderItem:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Render-props, позволяет более гибко настраивать содержимое item`,name:`renderItem`,required:!1,tags:{},type:{name:`SyncFunctionComponent<Omit<TreeListData, "children">>`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Функция, которая запускается при изменении состояния.`,name:`onChange`,required:!0,tags:{},type:{name:`(value: TValue) => void`}},isObjectMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/TreeLikeList/types.ts`,name:`TypeLiteral`}],description:`Переключает компонент в режим работы с объектами а не с id элементов`,name:`isObjectMode`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{je as n,$ as t};