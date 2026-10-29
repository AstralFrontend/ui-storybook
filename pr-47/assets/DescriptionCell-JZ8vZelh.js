import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{$r as t,Dn as n,On as r,_t as i,dt as a,ei as o,ft as s,gt as c,ji as l,ya as u,yn as d,za as f}from"./preview-Bh-2MF8C.js";import{i as p,r as m}from"./Description-CEtgbw-t.js";var h;function g(){return(g=e((()=>{r(),h={root:n(`description-cell`),hasIcon:n(`description-cell_has-icon`),iconRight:n(`description-cell_icon-right`)}})))()}var _,v,y;function b(){return(b=e((()=>{p(),d(),c(),g(),_=l.div`
  display: flex;
  align-items: center;

  &.${h.hasIcon} {
    gap: ${({theme:e})=>e.spacing(2)};
  }

  &.${h.iconRight} {
    flex-direction: row-reverse;
  }
`,v=l.div`
  & > svg {
    display: block;

    width: 24px;
    height: 24px;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,y=l.div`
  display: flex;
  flex-direction: column;

  & .${m.root} {
    & .${i.root} {
      font-size: unset;
      color: unset;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var x,S;function C(){return(C=e((()=>{x=f(),o(),g(),S=({icon:e,iconPosition:n=`left`})=>({classnames:(0,x.useMemo)(()=>t(h.root,{[h.hasIcon]:!!e,[h.iconRight]:!!e&&n===`right`}),[e,n])})})))()}function w(){return(w=e((()=>{C()})))()}var T,E;function D(){return(D=e((()=>{a(),b(),w(),T=u(),E=({title:e,icon:t,subtitle:n,iconPosition:r=`left`})=>{let{classnames:i}=S({icon:t,iconPosition:r});return(0,T.jsxs)(_,{className:i,children:[(0,T.jsx)(v,{children:t}),(0,T.jsxs)(y,{children:[(0,T.jsx)(s,{children:e}),n&&(0,T.jsx)(s,{color:`textSecondary`,variant:`caption`,children:n})]})]})};try{E.displayName=`DescriptionCell`,E.__docgenInfo={description:``,displayName:`DescriptionCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DescriptionCell/DescriptionCell.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Заголовок элемента таблицы`,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Иконка элемента таблицы`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},subtitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Подзаголовок элемента таблицы`,name:`subtitle`,required:!1,tags:{},type:{name:`ReactNode`}},iconPosition:{defaultValue:{value:`left`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Позиционирует иконку (слева/справа от текста)`,name:`iconPosition`,required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}}},tags:{}}}catch{}})))()}export{D as n,g as r,E as t};