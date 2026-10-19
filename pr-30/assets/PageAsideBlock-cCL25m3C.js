import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ji as t,ya as n,yn as r}from"./preview-IOjL1aMA.js";import{r as i,t as a}from"./dividerClasses-Cjavzt_A.js";import{t as o}from"./Divider-ClJpF_Gz.js";import{t as s}from"./Divider-BrUtxoXk.js";var c,l;function u(){return(u=e((()=>{i(),s(),r(),c=t.div`
  position: relative;

  padding: ${({theme:e})=>e.spacing(5,0)};

  :first-of-type {
    padding: ${({theme:e})=>e.spacing(0,0,5)};
  }

  :last-of-type {
    padding: ${({theme:e})=>e.spacing(5,0,0)};

    .${a.root} {
      display: none;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4,0)};

    :first-of-type {
      padding: ${({theme:e})=>e.spacing(0,0,4)};
    }

    :last-of-type {
      padding: ${({theme:e})=>e.spacing(4,0,0)};
    }
  }
`,l=t(o,{shouldForwardProp:e=>![`$isFullWidth`].includes(e)})`
  position: absolute;
  bottom: 0;
  left: ${({$isFullWidth:e,theme:t})=>e?`${t.spacing(-6)}`:`0`};

  width: ${({$isFullWidth:e,theme:t})=>e?`calc(100% + ${t.spacing(12)})`:`100%`};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    width: ${({$isFullWidth:e,theme:t})=>e?`calc(100% + ${t.spacing(10)})`:`100%`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    left: ${({$isFullWidth:e,theme:t})=>e?`${t.spacing(-4)}`:`0`};

    width: ${({$isFullWidth:e,theme:t})=>e?`calc(100% + ${t.spacing(8)})`:`100%`};
  }
`})))()}var d,f;function p(){return(p=e((()=>{u(),d=n(),f=({children:e,className:t,dividerVariant:n=`content`})=>(0,d.jsxs)(c,{className:t,children:[e,(0,d.jsx)(l,{$isFullWidth:n===`fullWidth`})]});try{f.displayName=`PageAsideBlock`,f.__docgenInfo={description:``,displayName:`PageAsideBlock`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideBlock/PageAsideBlock.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideBlock/PageAsideBlock.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideBlock/PageAsideBlock.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},dividerVariant:{defaultValue:{value:`content`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageAsideBlock/PageAsideBlock.tsx`,name:`TypeLiteral`}],description:`Вариант разделения блоков с помощью divider`,name:`dividerVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"content" | "fullWidth"`,value:[{value:`"content"`},{value:`"fullWidth"`}]}}},tags:{}}}catch{}})))()}export{p as n,f as t};