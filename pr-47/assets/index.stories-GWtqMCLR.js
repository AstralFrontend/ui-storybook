import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Xt as t,_n as n,dt as r,en as i,ft as a,gn as o,ht as s,ji as c,mt as l,ya as u,yn as d,za as f}from"./preview-BY-1Z8yT.js";import{t as ee}from"./Collapse-BjZK51MX.js";import{t as te}from"./Collapse-C0roH2KU.js";import{t as ne}from"./ActionGroup-B0ADda3z.js";import{t as re}from"./ActionGroup-CPg_0WaZ.js";import{t as ie}from"./OverflowTypography-DhTf_HbW.js";import{t as ae}from"./OverflowTypography-Dc4IYSWm.js";import{t as oe}from"./CopyTypography-BPi4j3DB.js";import{t as se}from"./CopyTypography-B5sRdcbW.js";import{n as ce,t as le}from"./ChevronROutlineMd-eksxnGtg.js";import{n as ue,t as de}from"./CalendarOutlineMd--iU4Y8yb.js";import{t as fe}from"./GuidTypography-BqkTII-l.js";import{t as pe}from"./GuidTypography-BSxCNCwc.js";import{a as me,i as he,n as ge,t as _e}from"./MinimizeOutlineMd-CT-xMwGd.js";import{a as ve,i as ye,n as be,t as xe}from"./DocOutlineMd-BNx8bpyy.js";var p,m,h;function Se(){return(Se=e((()=>{se(),pe(),ae(),d(),p=c(ie,{shouldForwardProp:e=>e!==`typeColor`})`
  color: ${({typeColor:e})=>e};
`,m=c(oe,{shouldForwardProp:e=>e!==`titleColor`})`
  overflow: hidden;

  color: ${({titleColor:e})=>e};
`,h=c(fe,{shouldForwardProp:e=>e!==`titleColor`})`
  color: ${({titleColor:e})=>e};
`})))()}var g;function _(){return(_=e((()=>{g=(e,t)=>{if(t===`string`)return`${e}`;if(t===`null`)return`null`;if(t===`boolean`)return e?`true`:`false`;if(t===`date`)try{return new Date(e).toLocaleString(`ru-RU`,{year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`})}catch{return`${e}`}return e?.toString()||``}})))()}var v;function y(){return(y=e((()=>{v=e=>Array.isArray(e)?e.length:typeof e==`object`&&e?Object.keys(e).length:0})))()}var b;function x(){return(x=e((()=>{_(),y(),b=({value:e,type:t,color:n})=>{let r=t===`object`||t===`array`,i=typeof e==`string`||typeof e==`number`,a=t===`guid`,o=v(e);return{isExpandable:r,isCanCopy:i,isGuid:a,expandableText:t===`array`?`[${o}]`:`{${o}}`,formattedValue:g(e,t),color:n}}})))()}var S,C;function w(){return(w=e((()=>{Se(),x(),S=u(),C=e=>{let{isExpandable:t,color:n,expandableText:r,isCanCopy:i,formattedValue:a,isGuid:o}=b(e);return t?(0,S.jsx)(p,{component:`dd`,typeColor:n,colorIntensity:`500`,variant:`caption`,children:r}):o?(0,S.jsx)(m,{isShowCopyText:!0,titleColor:n,copyText:a,children:(0,S.jsx)(h,{component:`dd`,tooltipProps:{title:void 0},titleColor:n,children:a})}):i?(0,S.jsx)(m,{isShowCopyText:!0,titleColor:n,copyText:a,children:(0,S.jsx)(p,{component:`dd`,tooltipProps:{title:void 0},typeColor:n,children:a})}):(0,S.jsx)(p,{component:`dd`,typeColor:n,children:a})};try{C.displayName=`NodeValue`,C.__docgenInfo={description:``,displayName:`NodeValue`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/JsonViewer/NodeValue/NodeValue.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/NodeValue/NodeValue.tsx`,name:`TypeLiteral`}],description:`Значение узла`,name:`value`,required:!0,tags:{},type:{name:`JsonValue`}},color:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/NodeValue/NodeValue.tsx`,name:`TypeLiteral`}],description:`Цвет`,name:`color`,required:!0,tags:{},type:{name:`string`}},type:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/NodeValue/NodeValue.tsx`,name:`TypeLiteral`}],description:`Тип значения`,name:`type`,required:!0,tags:{},type:{name:`enum`,raw:`ValueType`,value:[{value:`"string"`},{value:`"number"`},{value:`"boolean"`},{value:`"object"`},{value:`"date"`},{value:`"null"`},{value:`"array"`},{value:`"unknown"`},{value:`"guid"`}]}}},tags:{}}}catch{}})))()}function T(){return(T=e((()=>{w()})))()}var E,D,O;function k(){return(k=e((()=>{le(),t(),d(),E=c(`dl`,{shouldForwardProp:e=>e!==`level`&&e!==`isExpandable`})`
  cursor: ${({isExpandable:e})=>e?`pointer`:`default`};

  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  margin: 0;
  margin-left: ${({theme:e,level:t})=>e.spacing(t*5)};
  padding: ${({theme:e})=>e.spacing(1)};
  padding-left: 0;

  border-radius: ${({theme:e})=>e.shape.small};

  transition: ${({theme:e})=>e.transitions.create(`background-color`,{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})};

  ${i} {
    &:hover {
      background-color: ${({theme:e,isExpandable:t})=>t?e.palette.background.elementHover:`transparent`};
    }
  }
`,D=c(`div`,{shouldForwardProp:e=>e!==`color`})`
  width: 18px;
  min-width: 18px;
  height: 18px;
  margin-left: 2px;

  color: ${({color:e})=>e};

  svg {
    width: 100%;
    height: 100%;
  }
`,O=c(ce,{shouldForwardProp:e=>e!==`isExpanded`})`
  transform: rotateZ(${({isExpanded:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`})))()}var A,j;function M(){return(M=e((()=>{o(),A=u(),j=()=>(0,A.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`ellipse`,{fill:`none`,cx:`12`,cy:`5`,rx:`9`,ry:`3`}),(0,A.jsx)(`path`,{fill:`none`,d:`M3 5V19A9 3 0 0 0 21 19V5`}),(0,A.jsx)(`path`,{fill:`none`,d:`M3 12A9 3 0 0 0 21 12`})]})})))()}var N,P;function F(){return(F=e((()=>{o(),N=u(),P=()=>(0,N.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{fill:`none`,d:`m16 18 6-6-6-6`}),(0,N.jsx)(`path`,{fill:`none`,d:`m8 6-6 6 6 6`})]})})))()}var I,L;function R(){return(R=e((()=>{o(),I=u(),L=()=>(0,I.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,I.jsx)(`path`,{fill:`none`,d:`M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`}),(0,I.jsx)(`circle`,{cx:`16.5`,cy:`7.5`,r:`.5`,fill:`currentColor`})]})})))()}var z,Ce;function we(){return(we=e((()=>{o(),z=u(),Ce=()=>(0,z.jsx)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`path`,{fill:`none`,d:`M5 12h14`})})})))()}var B,Te;function Ee(){return(Ee=e((()=>{o(),B=u(),Te=()=>(0,B.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,B.jsx)(`path`,{fill:`none`,d:`M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4`}),(0,B.jsx)(`path`,{fill:`none`,d:`M14 2v4a2 2 0 0 0 2 2h4`}),(0,B.jsx)(`rect`,{width:`4`,height:`6`,x:`2`,y:`12`,rx:`2`}),(0,B.jsx)(`path`,{fill:`none`,d:`M10 12h2v6`}),(0,B.jsx)(`path`,{fill:`none`,d:`M10 18h4`})]})})))()}var V,H;function De(){return(De=e((()=>{o(),V=u(),H=()=>(0,V.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,V.jsx)(`path`,{fill:`none`,d:`M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1`}),(0,V.jsx)(`path`,{fill:`none`,d:`M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1`})]})})))()}var U,Oe;function ke(){return(ke=e((()=>{o(),U=u(),Oe=()=>(0,U.jsxs)(n,{fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,U.jsx)(`path`,{fill:`none`,d:`M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4`}),(0,U.jsx)(`path`,{fill:`none`,d:`M14 2v4a2 2 0 0 0 2 2h4`}),(0,U.jsx)(`path`,{fill:`none`,d:`M2 13v-1h6v1`}),(0,U.jsx)(`path`,{fill:`none`,d:`M5 12v6`}),(0,U.jsx)(`path`,{fill:`none`,d:`M4 18h2`})]})})))()}function Ae(){return(Ae=e((()=>{M(),F(),R(),we(),Ee(),De(),ke()})))()}var W,je;function Me(){return(Me=e((()=>{W=f(),de(),xe(),Ae(),je=(e,t)=>{if(e===null)return{type:`null`,icon:(0,W.createElement)(Ce),color:t.palette.grey[500]};if(Array.isArray(e))return{type:`array`,icon:(0,W.createElement)(j),color:t.palette.primary.main};switch(typeof e){case`string`:return e.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)?{type:`guid`,icon:(0,W.createElement)(L),color:t.palette.yellow[600]}:e.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)?{type:`date`,icon:(0,W.createElement)(ue),color:t.palette.red[900]}:{type:`string`,icon:(0,W.createElement)(Oe),color:t.palette.green[700]};case`number`:return{type:`number`,icon:(0,W.createElement)(Te),color:t.palette.warning[900]};case`boolean`:return{type:`boolean`,icon:(0,W.createElement)(P),color:t.palette.primary[500]};case`object`:return{type:`object`,icon:(0,W.createElement)(H),color:t.palette.error[800]};default:return{type:`unknown`,icon:(0,W.createElement)(be),color:t.palette.grey[300]}}}})))()}function Ne(){return(Ne=e((()=>{Me()})))()}function Pe(){return(Pe=e((()=>{Ne()})))()}var Fe;function Ie(){return(Ie=e((()=>{l(),Pe(),Fe=({value:e,keyPath:t,checkExpanded:n,toggleExpanded:r,...i})=>{let a=s(),{type:o,icon:c,color:l}=je(e,a),u=o===`object`||o===`array`;return{icon:c,type:o,color:l,isExpandable:u,isExpanded:n(t),value:e,handleToggle:()=>{u&&r(t)},toggleExpanded:r,checkExpanded:n,getNestedKeyPath:e=>`${t}.${e}`,...i}}})))()}function Le(){return(Le=e((()=>{Ie()})))()}var G,K;function Re(){return(Re=e((()=>{te(),r(),T(),k(),Le(),G=u(),K=e=>{let{isExpandable:t,isExpanded:n,value:r,level:i,color:o,nodeKey:s,icon:c,type:l,getNestedKeyPath:u,toggleExpanded:d,checkExpanded:f,handleToggle:te}=Fe(e);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(E,{level:i,isExpandable:t,onClick:te,children:[t?(0,G.jsx)(O,{isExpanded:n}):(0,G.jsx)(D,{color:o,children:c}),(0,G.jsxs)(a,{component:`dt`,children:[s,`:`]}),(0,G.jsx)(C,{value:r,color:o,type:l})]}),t&&(0,G.jsx)(ee,{in:n,children:!t||!n?null:Array.isArray(r)?r.map((e,t)=>{let n=u(t);return(0,G.jsx)(K,{keyPath:n,nodeKey:t,value:e,level:i+1,toggleExpanded:d,checkExpanded:f},n)}):typeof r==`object`&&r?Object.entries(r).map(([e,t])=>{let n=u(e);return(0,G.jsx)(K,{keyPath:n,nodeKey:e,value:t,level:i+1,toggleExpanded:d,checkExpanded:f},n)}):null})]})};try{K.displayName=`JsonNode`,K.__docgenInfo={description:``,displayName:`JsonNode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,methods:[],props:{nodeKey:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Ключ узла`,name:`nodeKey`,required:!0,tags:{},type:{name:`string | number`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Значение узла`,name:`value`,required:!0,tags:{},type:{name:`JsonValue`}},keyPath:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Путь до узла`,name:`keyPath`,required:!0,tags:{},type:{name:`string`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности`,name:`level`,required:!0,tags:{},type:{name:`number`}},toggleExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Функция для переключения состояния expanded`,name:`toggleExpanded`,required:!0,tags:{},type:{name:`(key: string) => void`}},checkExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonNode/JsonNode.tsx`,name:`TypeLiteral`}],description:`Функция для проверки состояния expanded`,name:`checkExpanded`,required:!0,tags:{},type:{name:`(key: string) => boolean`}}},tags:{}}}catch{}})))()}function ze(){return(ze=e((()=>{Re()})))()}var Be,Ve,He;function Ue(){return(Ue=e((()=>{re(),d(),Be=c.article`
  overflow: hidden;
  display: grid;
  grid-template-rows: auto 1fr;

  width: 100%;
  height: 100%;
`,Ve=c.div`
  overflow: auto;
`,He=c(ne)`
  justify-content: flex-end;
`})))()}var q;function We(){return(We=e((()=>{q=function(e){return e.Copied=`Скопировано`,e.Error=`Ошибка копирования`,e.CanCopy=`Скопировать`,e}({})})))()}var J,Ge;function Ke(){return(Ke=e((()=>{J=f(),We(),Ge=({jsonData:e})=>{let[t,n]=(0,J.useState)(null),[r,i]=(0,J.useState)(new Set),[a,o]=(0,J.useState)(q.CanCopy);return(0,J.useEffect)(()=>{try{n(typeof e==`string`?JSON.parse(e):e)}catch(e){throw Error(`Error parsing JSON data: ${e}`)}},[e]),{data:t,copyStatus:a,collapseAll:()=>{i(new Set)},expandAll:()=>{let e=new Set,n=(t,r=``)=>{typeof t==`object`&&t&&(Array.isArray(t)?t.forEach((t,i)=>{let a=r?`${r}.${i}`:String(i);e.add(a),n(t,a)}):Object.keys(t).forEach(i=>{let a=r?`${r}.${i}`:i;e.add(a),n(t[i],a)}))};n(t),i(e)},copyAll:()=>{navigator.clipboard.writeText(JSON.stringify(t)).then(()=>{o(q.Copied)}).catch(()=>{o(q.Error)}),setTimeout(()=>{o(q.CanCopy)},2e3)},toggleExpanded:e=>{let t=new Set(r);t.has(e)?t.delete(e):t.add(e),i(t)},checkExpanded:e=>r.has(e)}}})))()}function qe(){return(qe=e((()=>{Ke()})))()}var Y,X;function Z(){return(Z=e((()=>{ye(),he(),_e(),ze(),Ue(),qe(),Y=u(),X=e=>{let{data:t,copyStatus:n,collapseAll:r,expandAll:i,copyAll:a,toggleExpanded:o,checkExpanded:s}=Ge(e);return(0,Y.jsxs)(Be,{children:[(0,Y.jsx)(He,{secondaryVisible:[{onClick:a,name:n,icon:(0,Y.jsx)(ve,{}),variant:`text`},{onClick:i,name:`Развернуть все`,icon:(0,Y.jsx)(me,{}),variant:`text`},{onClick:r,name:`Свернуть все`,icon:(0,Y.jsx)(ge,{}),variant:`text`}]}),(0,Y.jsx)(Ve,{children:Array.isArray(t)?t.map((e,t)=>(0,Y.jsx)(K,{nodeKey:t,value:e,keyPath:String(t),level:0,toggleExpanded:o,checkExpanded:s},String(t))):typeof t==`object`&&t?Object.entries(t).map(([e,t])=>(0,Y.jsx)(K,{nodeKey:e,value:t,keyPath:e,level:0,toggleExpanded:o,checkExpanded:s},e)):(0,Y.jsx)(K,{nodeKey:`root`,value:t,keyPath:`root`,level:0,toggleExpanded:o,checkExpanded:s})})]})};try{X.displayName=`JsonViewer`,X.__docgenInfo={description:``,displayName:`JsonViewer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/JsonViewer/JsonViewer.tsx`,methods:[],props:{jsonData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/JsonViewer/types.ts`,name:`TypeLiteral`}],description:`Данные в формате JSON для отображения.`,name:`jsonData`,required:!0,tags:{},type:{name:`JsonValue`}}},tags:{}}}catch{}})))()}var Je,Q;function Ye(){return(Ye=e((()=>{Z(),Je=u(),Q=()=>{let e={string:`Hello, World!`,guid:`123e4567-e89b-12d3-a456-426655440000`,number:12345,boolean:!0,nullValue:null,longString:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur itaque eos aliquid amet veritatis, repellendus quidem, quod delectus reiciendis assumenda dolores molestiae nisi. Sint aut placeat quia nemo culpa?`,date:new Date(2025,8,8).toISOString(),array:[1,`two`,!1,{nested:`value`}],nestedObject:{property1:`value1`,property2:[{id:1,name:`Item 1`},{id:2,name:`Item 2`}],deeplyNested:{level:3,message:`This is deeply nested.`}}};return(0,Je.jsx)(X,{jsonData:e})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const complexJsonData = {
    string: 'Hello, World!',
    guid: '123e4567-e89b-12d3-a456-426655440000',
    number: 12345,
    boolean: true,
    nullValue: null,
    longString: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur itaque eos aliquid amet veritatis, repellendus quidem, quod delectus reiciendis assumenda dolores molestiae nisi. Sint aut placeat quia nemo culpa?',
    date: new Date(2025, 8, 8).toISOString(),
    array: [1, 'two', false, {
      nested: 'value'
    }],
    nestedObject: {
      property1: 'value1',
      property2: [{
        id: 1,
        name: 'Item 1'
      }, {
        id: 2,
        name: 'Item 2'
      }],
      deeplyNested: {
        level: 3,
        message: 'This is deeply nested.'
      }
    }
  };
  return <JsonViewer jsonData={complexJsonData} />;
}`,...Q.parameters?.docs?.source}}}})))()}var Xe,Ze;function $(){return($=e((()=>{Z(),Ye(),Xe={title:`Other/JsonViewer`,component:X,tags:[`autodocs`],parameters:{docs:{description:{component:`JsonViewer - компонент для просмотра JSON`}}}},Ze=[`BasicUsage`]})))()}$();export{Q as BasicUsage,Ze as __namedExportsOrder,Xe as default};