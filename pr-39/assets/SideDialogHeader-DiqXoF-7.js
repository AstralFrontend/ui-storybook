import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{_t as t,gt as n,ji as r,xa as i,yn as a}from"./preview-BexmKZ07.js";import{c as o,l as s}from"./SideDialogContent-B4IFVWCM.js";import{t as c}from"./DialogHeader-NeV86EXV.js";import{t as l}from"./DialogHeader-Di49RnO9.js";var u;function d(){return(d=e((()=>{l(),a(),n(),u=r(c)`
  position: relative;

  min-height: 64px;

  /* Декоративный разделитель между header и контентной частью SideDialog */
  ::before {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.modal};
    top: 0;

    grid-template-columns: max-content 1fr 40px;
    column-gap: ${({theme:e})=>e.spacing(1)};

    min-height: 56px;
    padding: ${({theme:e})=>e.spacing(2,1,2,4)};

    background-color: ${({theme:e})=>e.palette.background.paper};

    & .${t.root} {
      font-size: ${({theme:e})=>e.typography.h6.fontSize};
      line-height: ${({theme:e})=>e.typography.h6.lineHeight};
    }
  }
`})))()}var f,p;function m(){return(m=e((()=>{o(),d(),f=i(),p=e=>(0,f.jsx)(u,{className:s.root,...e});try{p.displayName=`SideDialogHeader`,p.__docgenInfo={description:``,displayName:`SideDialogHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SideDialogHeader/SideDialogHeader.tsx`,methods:[],props:{justifyContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Горизонтальное выравнивание`,name:`justifyContent`,required:!1,tags:{},type:{name:`JustifyContent`}},disableSpacing:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Убирает расстояние между компонентами`,name:`disableSpacing`,required:!1,tags:{},type:{name:`boolean`}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!1,tags:{},type:{name:`(event: {}, reason: "backdropClick" | "escapeKeyDown") => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`React.ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DialogHeader/DialogHeader.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{m as n,p as t};