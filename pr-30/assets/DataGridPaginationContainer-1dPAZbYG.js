import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,dt as a,ei as o,ft as s,ji as c,wn as l,ya as u,yn as d}from"./preview-HnvdWNoM.js";import{i as f,r as p}from"./FormControl-RQlbl0Kn.js";import{t as m}from"./MenuItem-DK_wk65B.js";import{t as h}from"./MenuItem-B4XGvuRx.js";import{t as g}from"./Select-CSTFYhQQ.js";import{t as _}from"./Select-DQU2-N4s.js";var v,y;function b(){return(b=e((()=>{i(),v=[20,50,100],y={root:r(`pagination-container`),leadingContent:r(`pagination-container_leading-content`)}})))()}var x,S,C;function w(){return(w=e((()=>{f(),d(),a(),b(),x=c(s)`
  color: ${({theme:e})=>e.palette.grey[700]};
`,S=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  .${p.root} {
    flex-direction: unset;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,C=c.div`
  display: flex;
  justify-content: flex-end;

  margin: 0 ${({theme:e})=>e.spacing(2)};
  padding-top: ${({theme:e})=>e.spacing(4)};

  &.${y.leadingContent} {
    justify-content: space-between;
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding-top: ${({theme:e})=>e.spacing(3)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    justify-content: center;

    margin: 0;
    padding: ${({theme:e})=>e.spacing(3,0,0)};

    &.${y.leadingContent} {
      justify-content: center;
    }
  }
`})))()}var T;function E(){return(E=e((()=>{T=({onSetCountPerPage:e})=>({handleChangeRowsPerPage:t=>{e?.(Number(t.target.value))}})})))()}var D,O,k;function A(){return(A=e((()=>{h(),_(),a(),o(),l(),b(),w(),E(),D=u(),O=n(y.root,{variants:{leadingContent:{true:y.leadingContent}}}),k=({pagination:e,className:n,formattedRange:r,rowsPerPageOptions:i=v,onSetCountPerPage:a,rowsPerPage:o=20,isDisabled:c})=>{let{handleChangeRowsPerPage:l}=T({onSetCountPerPage:a});return(0,D.jsxs)(C,{className:t(n,O({leadingContent:!!(a||r)})),children:[(a||r)&&(0,D.jsxs)(S,{children:[a&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(s,{variant:`body1`,children:`Строк на странице:`}),(0,D.jsx)(g,{size:`small`,value:o,disabled:c,isShowClearButton:!1,onChange:l,children:i.map(e=>(0,D.jsx)(m,{value:e,children:e},e))})]}),r&&(0,D.jsx)(x,{variant:`body1`,children:r()})]}),e&&e]})};try{k.displayName=`DataGridPaginationContainer`,k.__docgenInfo={description:``,displayName:`DataGridPaginationContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/DataGridPaginationContainer.tsx`,methods:[],props:{pagination:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Компонент пагинации`,name:`pagination`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},formattedRange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Функция отображающая текущие номера записей на странице`,name:`formattedRange`,required:!1,tags:{},type:{name:`() => string`}},rowsPerPage:{defaultValue:{value:`20`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Максимальное количество записей на страницу`,name:`rowsPerPage`,required:!1,tags:{},type:{name:`number`}},rowsPerPageOptions:{defaultValue:{value:`[20, 50, 100]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Конфигурация списка кол-ва элементов, отображаемых на одной странице`,name:`rowsPerPageOptions`,required:!1,tags:{},type:{name:`number[]`}},onSetCountPerPage:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Коллбэк для установки количества отображаемых элементов на странице.
Если передан, отображается выбор количества элементов на странице.`,name:`onSetCountPerPage`,required:!1,tags:{},type:{name:`(rowsPerPage: number) => void`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridPaginationContainer/types.ts`,name:`TypeLiteral`}],description:`Параметр блокировки пагинации`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function j(){return(j=e((()=>{A(),b()})))()}export{k as n,A as r,j as t};