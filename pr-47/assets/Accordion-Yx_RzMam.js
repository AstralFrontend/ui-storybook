import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Sn as t,dt as n,ft as r,gn as i,ji as a,ya as o,yn as s,za as c}from"./preview-Z1rCd2zM.js";import{t as l}from"./Collapse-DbPQ98tJ.js";import{t as u}from"./Collapse-DUu4xiJ5.js";import{n as d,t as f}from"./DownOutlineMd-B5916XZb.js";import{i as p,t as m}from"./mixins-DbjluS0D.js";var h,g,_,v,y,b;function x(){return(x=e((()=>{f(),i(),s(),m(),n(),h=a.header`
  cursor: pointer;

  display: grid;
  grid-gap: ${({theme:e})=>e.microSpacing(1,4)};
  grid-template-columns: ${({$withStartAdornment:e})=>e?`20px 1fr 20px`:` 1fr 20px`};
  grid-template-rows: ${({$hasSubtitle:e})=>e?`20px 1fr`:`1fr`};

  border-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-row-gap: ${({theme:e})=>e.spacing(1)};
    grid-template-rows: ${({$hasSubtitle:e})=>e?`24px 1fr`:`1fr`};

    /* Убирает highlight на мобильных устройствах */
    -webkit-tap-highlight-color: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.components.focused};
  }
  
  & .${t.root} {
    font-size: 20px;

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      font-size: 24px;
    }
  }
`,g=a.div`
  grid-column: ${({$withStartAdornment:e})=>e?`2 / -1`:`1 / -1`};
  grid-row: 2;
  align-self: center;
`,_=a.div`
  margin-left: ${({theme:e,$withStartAdornment:t})=>e.spacing(t?7:0)};
  padding-top: ${({theme:e,$hasSubtitle:t})=>t?e.spacing(4):e.spacing(3)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-top: ${({theme:e,$hasSubtitle:t})=>t?e.spacing(5):e.spacing(3)};
  }
`,v=a(r)`
  align-self: center;
`,y=a.div`
  overflow: hidden;

  width: 20px;
  height: 20px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 24px;
    height: 24px;
  }
`,b=a(d,{shouldForwardProp:e=>![`$isActive`].includes(e)})`
  ${({$isActive:e})=>p(e)}
`})))()}var S,C;function w(){return(w=e((()=>{S=c(),C=({startAdornment:e,isExpanded:t,onChange:n,subtitle:r})=>{let[i,a]=(0,S.useState)(!1),o=typeof t==`boolean`,s=o?t:i,c=!!e,l=!!r,u=e=>{if(o)n?.(!t,e);else{let t=!i;a(t),n?.(t,e)}};return{handleClick:u,handleKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),u(e))},actualIsExpanded:s,isUncontrolledExpanded:i,hasStartAdornment:c,hasSubtitle:l}}})))()}function T(){return(T=e((()=>{w()})))()}var E,D,O;function k(){return(k=e((()=>{E=c(),u(),x(),T(),D=o(),O=(0,E.forwardRef)(({summary:e,startAdornment:t,isExpanded:n,onChange:r,children:i,summaryVariant:a=`h6`,subtitle:o},s)=>{let{actualIsExpanded:c,hasStartAdornment:u,handleClick:d,handleKeyDown:f,hasSubtitle:p}=C({startAdornment:t,isExpanded:n,onChange:r,subtitle:o});return(0,D.jsxs)(`div`,{ref:s,children:[(0,D.jsxs)(h,{role:`button`,tabIndex:0,onClick:d,onKeyDown:f,$withStartAdornment:u,$hasSubtitle:p,children:[t,typeof e==`string`?(0,D.jsx)(v,{variant:a,children:e}):e,(0,D.jsx)(y,{children:(0,D.jsx)(b,{$isActive:c})}),p&&(0,D.jsx)(g,{$withStartAdornment:u,children:o})]}),(0,D.jsx)(l,{in:c,unmountOnExit:!0,children:(0,D.jsx)(_,{$withStartAdornment:u,$hasSubtitle:p,children:i})})]})});try{O.displayName=`Accordion`,O.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Accordion/Accordion.tsx`,methods:[],props:{summary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Заголовок`,name:`summary`,required:!0,tags:{},type:{name:`ReactNode`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Элемент, отображаемый перед заголовком`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},isExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Управляет состоянием аккордеона`,name:`isExpanded`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Обработчик, вызываемый при клике по хедеру`,name:`onChange`,required:!1,tags:{},type:{name:`(isExpanded: boolean, event: SyntheticEvent<HTMLElement, Event>) => void`}},summaryVariant:{defaultValue:{value:`h6`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Вариант заголовка`,name:`summaryVariant`,required:!1,tags:{},type:{name:`enum`,raw:`TypographyVariant`,value:[{value:`"button"`},{value:`"caption"`},{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`},{value:`"link"`},{value:`"inherit"`},{value:`"subtitle1"`},{value:`"subtitle2"`},{value:`"body1"`},{value:`"pointer"`}]}},subtitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Accordion/types.ts`,name:`TypeLiteral`}],description:`Подзаголовок`,name:`subtitle`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}export{k as n,O as t};