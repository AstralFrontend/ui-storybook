import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Va as i,_t as a,dt as o,ei as s,ft as c,gt as l,ji as u,xa as d,yn as f}from"./preview-DApj709n.js";import{i as p,r as m}from"./Description-Bj-qLq_h.js";var h;function g(){return(g=e((()=>{r(),h={root:n(`description-cell`),hasIcon:n(`description-cell_has-icon`),iconRight:n(`description-cell_icon-right`)}})))()}var _,v,y;function b(){return(b=e((()=>{p(),f(),l(),g(),_=u.div`
  display: flex;
  align-items: center;

  &.${h.hasIcon} {
    gap: ${({theme:e})=>e.spacing(2)};
  }

  &.${h.iconRight} {
    flex-direction: row-reverse;
  }
`,v=u.div`
  & > svg {
    display: block;

    width: 24px;
    height: 24px;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,y=u.div`
  display: flex;
  flex-direction: column;

  & .${m.root} {
    & .${a.root} {
      font-size: unset;
      color: unset;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var x,S;function C(){return(C=e((()=>{x=i(),s(),g(),S=({icon:e,iconPosition:n=`left`})=>({classnames:(0,x.useMemo)(()=>t(h.root,{[h.hasIcon]:!!e,[h.iconRight]:!!e&&n===`right`}),[e,n])})})))()}function w(){return(w=e((()=>{C()})))()}var T,E;function D(){return(D=e((()=>{o(),b(),w(),T=d(),E=({title:e,icon:t,subtitle:n,iconPosition:r=`left`})=>{let{classnames:i}=S({icon:t,iconPosition:r});return(0,T.jsxs)(_,{className:i,children:[(0,T.jsx)(v,{children:t}),(0,T.jsxs)(y,{children:[(0,T.jsx)(c,{children:e}),n&&(0,T.jsx)(c,{color:`textSecondary`,variant:`caption`,children:n})]})]})};try{E.displayName=`DescriptionCell`,E.__docgenInfo={description:``,displayName:`DescriptionCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DescriptionCell/DescriptionCell.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Заголовок элемента таблицы`,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Иконка элемента таблицы`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},subtitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Подзаголовок элемента таблицы`,name:`subtitle`,required:!1,tags:{},type:{name:`ReactNode`}},iconPosition:{defaultValue:{value:`left`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionCell/types.ts`,name:`TypeLiteral`}],description:`Позиционирует иконку (слева/справа от текста)`,name:`iconPosition`,required:!1,tags:{},type:{name:`enum`,raw:`"left" | "right"`,value:[{value:`"left"`},{value:`"right"`}]}}},tags:{}}}catch{}})))()}export{D as n,g as r,E as t};