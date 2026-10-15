import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{dt as t,ft as n,it as r,ji as i,rt as a,xa as o,yn as s}from"./preview-DApj709n.js";import{n as c,t as l}from"./CrossOutlineMd-BCMCwjMv.js";var u,d,f;function p(){return(p=e((()=>{a(),s(),u=i(`div`,{label:`DialogHeader-root`,shouldForwardProp:e=>![`hasTitle`,`hasOnClose`].includes(e)})`
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({hasTitle:e,hasOnClose:t})=>e&&t?`max-content 1fr 32px`:e?`max-content 1fr`:t?`1fr 32px`:`1fr`};
  column-gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;

  height: auto;
  padding: ${({theme:e})=>e.spacing(4,6)};
`,d=i(r)`
  align-self: start;
`,f=i(`div`,{shouldForwardProp:e=>![`justifyContent`,`columnSpacing`].includes(e),label:`DialogHeader-content`})`
  overflow: hidden;
  display: flex;
  column-gap: ${({columnSpacing:e,theme:t})=>t.spacing(e)};
  align-items: center;
  justify-content: ${({justifyContent:e})=>e};

  width: 100%;
  height: 100%;
  padding: 0;
`})))()}var m,h;function g(){return(g=e((()=>{l(),t(),p(),m=o(),h=({children:e,title:t,justifyContent:r=`flex-start`,disableSpacing:i,onClose:a,className:o})=>(0,m.jsxs)(u,{className:o,hasTitle:!!t,hasOnClose:!!a,children:[t&&(0,m.jsx)(n,{variant:`h4`,children:t}),(0,m.jsx)(f,{justifyContent:r,columnSpacing:i?0:2,children:e}),a&&(0,m.jsx)(d,{variant:`text`,onClick:e=>{a&&a(e,`escapeKeyDown`)},"aria-label":`Закрыть модальное окно`,children:(0,m.jsx)(c,{})})]});try{h.displayName=`DialogHeader`,h.__docgenInfo={description:``,displayName:`DialogHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,methods:[],props:{justifyContent:{defaultValue:{value:`flex-start`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Горизонтальное выравнивание`,name:`justifyContent`,required:!1,tags:{},type:{name:`JustifyContent`}},disableSpacing:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Убирает расстояние между компонентами`,name:`disableSpacing`,required:!1,tags:{},type:{name:`boolean`}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(event: {}, reason: "backdropClick" | "escapeKeyDown") => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`React.ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{g as n,h as t};