import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,Fi as r,On as i,Q as a,Va as o,Z as s,ht as c,it as l,ji as u,mt as d,rt as f,wn as p,xa as m,yn as h}from"./preview-CpIY8YCq.js";import{nt as g,tt as ee}from"./DataGrid-Cxrz7XWv.js";import{n as _,t as v}from"./CrossOutlineMd-DBHrXAip.js";import{t as y}from"./ActionGroup-BPbDa0f6.js";import{t as b}from"./ActionGroup-BntL46UN.js";import{n as x,t as te}from"./declensionOfWords-BADI4Pcu.js";import{r as S,t as C}from"./useDelayedUnmount-BFwtamr2.js";var w;function T(){return(T=e((()=>{i(),w={root:n(`data-grid-mass-actions`),open:n(`data-grid-mass-actions_open`)}})))()}var E,D;function O(){return(O=e((()=>{E=-16,D={anchorOrigin:{vertical:E,horizontal:`left`},transformOrigin:{vertical:`bottom`,horizontal:`left`}}})))()}var k,A,j,M,N;function P(){return(P=e((()=>{b(),h(),s(),k=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  align-items: center;

  width: fit-content;
  padding: ${({theme:e})=>e.spacing(4)};

  background-color: ${({theme:e})=>e.palette.background.default};

  /* 16px по макету, токена под это значение в теме нет */
  border-radius: calc(${({theme:e})=>e.shape.medium} * 2);
  box-shadow: ${({theme:e})=>e.elevation[200]};
`,A=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;

  padding-left: ${({theme:e})=>e.spacing(2)};
`,j=u(y)`
  gap: ${({theme:e})=>e.spacing(3)};
`,M=u.div`
  display: grid;
  justify-items: start;

  font-variant-numeric: tabular-nums;

  & > * {
    grid-area: 1 / 1;
  }
`,N=u(a)`
  visibility: hidden;
`})))()}var F;function I(){return(I=e((()=>{x(),O(),F=({entityDeclension:e,selectedCount:t})=>({selectionLabel:`Выбрано: ${t} ${te(e)(t)}`,reservedLabel:`Выбрано: 999 ${e.reduce((e,t)=>t.length>e.length?t:e)}`})})))()}var L,R;function z(){return(z=e((()=>{v(),f(),s(),O(),P(),I(),L=m(),R=({main:e,secondary:t,selectedCount:n,entityDeclension:r,onClose:i,className:o})=>{let{selectionLabel:s,reservedLabel:c}=F({entityDeclension:r,selectedCount:n});return(0,L.jsxs)(k,{className:o,children:[(0,L.jsx)(j,{main:e,secondary:t,secondaryPopoverProps:D,size:`large`}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{variant:`text`,size:`large`,label:c,"aria-hidden":!0}),(0,L.jsx)(a,{variant:`text`,size:`large`,label:s,"aria-live":`polite`})]}),(0,L.jsx)(l,{variant:`text`,"aria-label":`Снять выделение`,onClick:i,children:(0,L.jsx)(_,{})})]})]})};try{R.displayName=`MassActions`,R.__docgenInfo={description:`Базовый компонент панели массовых действий`,displayName:`MassActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MassActions/MassActions.tsx`,methods:[],props:{main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<ElementType>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<ElementType>[]`}},selectedCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Количество выбранных элементов`,name:`selectedCount`,required:!0,tags:{},type:{name:`number`}},entityDeclension:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Три формы названия выбранной сущности`,name:`entityDeclension`,required:!0,tags:{example:`['документ', 'документа', 'документов']`},type:{name:`[string, string, string]`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Обработчик закрытия панели`,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function B(){return(B=e((()=>{z()})))()}var V,H,U;function W(){return(W=e((()=>{B(),h(),T(),V=r`
  from {
    transform: translateY(100%);

    opacity: 0;
  }

  to {
    transform: translateY(0);

    opacity: 1;
  }
`,H=r`
  from {
    transform: translateY(0);

    opacity: 1;
  }

  to {
    transform: translateY(100%);

    opacity: 0;
  }
`,U=u(R)`
  position: absolute;
  z-index: ${({theme:e})=>e.zIndex.appBar};
  right: 0;
  bottom: ${({theme:e})=>e.spacing(3)};
  left: 0;
  
  max-width: calc(100% - ${({theme:e})=>e.spacing(8)});
  margin-inline: auto;

  animation: ${H}
    ${({theme:e})=>e.transitions.duration.leavingScreen}ms
    ${({theme:e})=>e.transitions.easing.easeIn} forwards;

  &.${w.open} {
    animation: ${V}
      ${({theme:e})=>e.transitions.duration.standard}ms
      ${({theme:e})=>e.transitions.easing.easeOut} forwards;
  }
`})))()}var G,K;function q(){return(q=e((()=>{G=o(),ee(),d(),C(),K=()=>{let{selectedRows:e,onSelectRow:t,isMassActionsOpen:n}=(0,G.useContext)(g),{transitions:{duration:{leavingScreen:r}}}=c(),{isMounted:i}=S({isOpen:n,duration:r}),[a,o]=(0,G.useState)(e.length);return e.length>0&&e.length!==a&&o(e.length),{isOpen:n,isMounted:i,selectedCount:a,handleClose:()=>t?.([])}}})))()}function J(){return(J=e((()=>{q()})))()}var Y,X,Z;function Q(){return(Q=e((()=>{p(),T(),W(),J(),Y=m(),X=t(w.root,{variants:{isOpen:{true:w.open}}}),Z=({className:e,...t})=>{let{isOpen:n,isMounted:r,selectedCount:i,handleClose:a}=K();return!n&&!r?null:(0,Y.jsx)(U,{...t,className:X({isOpen:n,className:e}),selectedCount:i,onClose:a})};try{Z.displayName=`DataGridMassActions`,Z.__docgenInfo={description:"Панель массовых действий над выбранными строками `DataGrid` и `DataGridInfinite`.",displayName:`DataGridMassActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridMassActions/DataGridMassActions.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<ElementType>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<ElementType>[]`}},entityDeclension:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/MassActions/types.ts`,name:`TypeLiteral`}],description:`Три формы названия выбранной сущности`,name:`entityDeclension`,required:!0,tags:{example:`['документ', 'документа', 'документов']`},type:{name:`[string, string, string]`}}},tags:{example:`<DataGrid
  massActions={
    <DataGridMassActions
      entityDeclension={['документ', 'документа', 'документов']}
      main={[{ text: 'Отправить', onClick: handleSend }]}
    />
  }
/>`}}}catch{}})))()}function $(){return($=e((()=>{Q()})))()}export{Z as n,Q as r,$ as t};