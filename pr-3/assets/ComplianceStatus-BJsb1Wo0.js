import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,Fi as r,On as i,dt as a,ft as o,ji as s,mn as c,pn as l,wn as u,xa as d,yn as f}from"./preview-DApj709n.js";import{l as p,t as m}from"./mixins-FAOrh0Vg.js";import{t as h}from"./OverflowTypography-DLZItEeB.js";import{t as g}from"./OverflowTypography-PkzOHCRQ.js";import{n as _,t as v}from"./SuccessFillSm-DGvY54VY.js";import{n as y,t as b}from"./DotOutlineSm-C4zvNDPV.js";import{n as x,t as S}from"./CircleErrorFillSm-DZ1RgZQW.js";var C,w,T;function E(){return(E=e((()=>{i(),C={grey:n(`compliance-status_color-grey`),primary:n(`compliance-status_color-primary`)},w={plain:n(`compliance-status_variant-plain`),contained:n(`compliance-status_variant-contained`),outlined:n(`compliance-status_variant-outlined`)},T={root:n(`compliance-status`),title:n(`compliance-status__title`),list:n(`compliance-status__list`),item:n(`compliance-status__item`),...C,...w}})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{S(),b(),v(),l(),f(),m(),E(),D=r`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,O=s.article`
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing(2)};

  background-color: inherit;
  border-radius: ${({theme:e})=>e.shape.medium};

  &.${T.contained} {
    padding: ${({theme:e})=>e.spacing(3)};

    &.${T.primary} {
      background-color: ${({theme:e})=>e.palette.primary[100]};
    }

    &.${T.grey} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
    }
  }

  &.${T.outlined} {
    padding: ${({theme:e})=>e.spacing(3)};

    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }
`,k=s(`ul`)`
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing(2)};

  ${p};
`,A=s(`li`)`
  display: grid;
  grid-gap: ${({theme:e})=>e.spacing(2)};
  grid-template-columns: auto 1fr;
`,j=s.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  margin-top: ${({theme:e})=>e.microSpacing(1)};
`,M=s(j)`
  color: ${({theme:e})=>e.palette.grey[800]};
`.withComponent(y),N=s(j)`
  color: ${({theme:e})=>e.palette.error[800]};

  animation: ${D} ${({theme:e})=>e.transitions.duration.short}ms ease-out;
`.withComponent(x),P=s(j)`
  color: ${({theme:e})=>e.palette.success[800]};

  animation: ${D} ${({theme:e})=>e.transitions.duration.short}ms ease-out;
`.withComponent(_),F=s(c)`
  align-self: center;

  width: 12px;
  height: 12px;
  margin-right: ${({theme:e})=>e.microSpacing(1)};
  margin-left: ${({theme:e})=>e.microSpacing(1)};
`})))()}var L,R,z,B;function V(){return(V=e((()=>{g(),a(),u(),E(),I(),L=d(),R={default:(0,L.jsx)(M,{}),success:(0,L.jsx)(P,{}),reject:(0,L.jsx)(N,{}),loading:(0,L.jsx)(F,{})},z=t(T.root,{variants:{backgroundColor:{grey:C.grey,primary:C.primary},variant:{contained:w.contained,outlined:w.outlined,plain:w.plain}}}),B=({title:e,itemsList:t,children:n,subtitle:r,backgroundColor:i=`grey`,variant:a=`contained`})=>(0,L.jsxs)(O,{className:z({backgroundColor:i,variant:a}),children:[e&&(0,L.jsx)(h,{className:T.title,variant:`h6`,component:`h4`,children:e}),r,(0,L.jsx)(k,{className:T.list,children:t.map(({text:e,status:t},n)=>(0,L.jsxs)(A,{className:T.item,children:[R[t],(0,L.jsx)(o,{children:e})]},n))}),n]});try{B.displayName=`ComplianceStatus`,B.__docgenInfo={description:``,displayName:`ComplianceStatus`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/ComplianceStatus.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Основной заголовок элемента`,name:`title`,required:!1,tags:{},type:{name:`string`}},subtitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Пропс для добавления контента между заголовком и списком`,name:`subtitle`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Пропс для добавления контента после списка`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},itemsList:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Элементы списка`,name:`itemsList`,required:!0,tags:{},type:{name:`ComplianceStatusItem[]`}},backgroundColor:{defaultValue:{value:`grey`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Фоновый цвет`,name:`backgroundColor`,required:!1,tags:{default:`grey`},type:{name:`enum`,raw:`BackgroundColor`,value:[{value:`"primary"`},{value:`"grey"`}]}},variant:{defaultValue:{value:`contained`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения блока статусов`,name:`variant`,required:!1,tags:{default:`contained`},type:{name:`enum`,raw:`Variant`,value:[{value:`"contained"`},{value:`"outlined"`},{value:`"plain"`}]}}},tags:{}}}catch{}})))()}export{V as n,B as t};