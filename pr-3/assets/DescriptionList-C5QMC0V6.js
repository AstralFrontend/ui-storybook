import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,On as r,Q as i,Va as a,Z as o,dt as s,ft as c,ji as l,wn as u,xa as d,yn as f}from"./preview-D6B29sG_.js";import{r as p,t as m}from"./Description-BA3jqNZD.js";import{t as h}from"./Description-CsZTreJi.js";import{t as g}from"./GuidTypography-CCF__h6U.js";import{t as _}from"./GuidTypography-DgBrLhxh.js";var v,y;function b(){return(b=e((()=>{r(),v={contained:n(`description-list_variant-contained`),default:n(`description-list_variant-default`)},y={root:n(`description-list`),title:n(`description-list__title`),item:n(`description-list__item`),itemAlignNameWidth:n(`description-list__item_align-name-width`),note:n(`description-list__note`),...v}})))()}var x,S,C,w,T;function E(){return(E=e((()=>{h(),f(),s(),b(),x=l(m.Name,{shouldForwardProp:e=>![`$nameMaxWidth`,`$direction`].includes(e)})`
  max-width: ${({$nameMaxWidth:e})=>e||`none`};
  margin-bottom: ${({theme:e,$direction:t})=>Object.is(t,`column`)?e.spacing(1):0};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-bottom: ${({theme:e,$direction:t})=>Object.is(t,`row`)?0:e.spacing(1)};
  }
`,S=l.article`
  display: grid;

  border-radius: ${({theme:e})=>e.shape.small};

  &.${y.contained} {
    padding: ${({theme:e})=>e.spacing(4)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }
`,C=l(`dl`,{shouldForwardProp:e=>![`$direction`,`$hasDivider`,`$variant`].includes(e)})`
  display: grid;
  row-gap: ${({theme:e,$direction:t})=>Object.is(t,`column`)?e.spacing(3):e.spacing(2)};

  margin: 0;
  padding: ${({theme:e,$variant:t})=>t===`contained`?e.spacing(4,0):e.spacing(3,0)};

  border-top: ${({$hasDivider:e,theme:t})=>e?`1px solid ${t.palette.components.border.default}`:`none`};

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    row-gap: ${({theme:e})=>e.spacing(3)};
  }
`,w=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    &.${y.itemAlignNameWidth} {
      display: grid;
      grid-template-columns: var(--name-desktop-width) 1fr;

      & .${y.note} {
        grid-column: 1 / -1;
      }

      & .${p.root} {
        display: grid;
        grid-column: 1 / -1;
        grid-template-columns: inherit;
        gap: ${({theme:e})=>e.spacing(1)};

        /* Причина игнора: прогрессивное улучшение */
        /* stylelint-disable plugin/no-unsupported-browser-features */
        @supports (grid-template-columns: subgrid) {
          grid-template-columns: subgrid;
        }
        /* stylelint-enable plugin/no-unsupported-browser-features */
      }
    }
  }
`,T=l(c)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
`})))()}var D,O;function k(){return(k=e((()=>{D=a(),O=({items:e})=>(0,D.useMemo)(()=>{let{groups:t,currentGroup:n}=e.reduce((e,t)=>Array.isArray(t)?{groups:[...e.groups,...e.currentGroup.length?[e.currentGroup]:[],t],currentGroup:[]}:{groups:e.groups,currentGroup:[...e.currentGroup,t]},{groups:[],currentGroup:[]});return n.length?[...t,n]:t},[e])})))()}function A(){return(A=e((()=>{k()})))()}function j(){return(j=e((()=>{A()})))()}var M,N;function P(){return(P=e((()=>{M=a(),j(),N=({items:e,alignNameWidth:t,leader:n})=>{let r=O({items:e});return(0,M.useEffect)(()=>{n&&t&&console.error(`DescriptionList: Параметры leader и alignNameWidth не могут быть использованы вместе`)},[n,t]),{descriptionItems:r,descriptionListStyles:t?{"--name-desktop-width":t}:{}}}})))()}function F(){return(F=e((()=>{P()})))()}var I,L,R,z,B;function V(){return(V=e((()=>{I=a(),h(),_(),o(),s(),u(),b(),E(),F(),L=d(),R=t(y.root,{variants:{variant:{contained:y.contained,default:y.default}}}),z=t(y.item,{variants:{alignNameWidth:{true:y.itemAlignNameWidth}}}),B=({items:e,variant:t=`default`,title:n,direction:r,alignNameWidth:a,leader:o,isTabularNums:s,...l})=>{let{descriptionItems:u,descriptionListStyles:d}=N({items:e,alignNameWidth:a,leader:o}),f=(0,I.useCallback)((e,t)=>{let{renderValue:n,color:r,canCopy:a,copyPosition:o,variant:s,copyText:c}=t;return n?n(e,t):s===`tag`?(0,L.jsx)(m.Value,{isHidePersonalData:t.isHidePersonalData,children:(0,L.jsx)(i,{label:e,color:r,variant:`light`})}):s===`guid`?(0,L.jsx)(m.Value,{isHidePersonalData:t.isHidePersonalData,children:(0,L.jsx)(g,{copyParams:{copyText:c||String(e)},canCopy:a,children:e})}):(0,L.jsx)(m.Value,{canCopy:a,color:r,copyPosition:o,isHidePersonalData:t.isHidePersonalData,children:e})},[]),p=()=>typeof n==`string`?(0,L.jsx)(T,{variant:`h6`,className:y.title,children:n}):(0,L.jsx)(T,{component:`div`,className:y.title,children:n}),h=e=>typeof e==`string`?(0,L.jsx)(c,{variant:`caption`,color:`textSecondary`,className:y.note,children:e}):e,_=(e,t,n)=>{let{nameMaxWidth:i,note:c,isTabularNums:u,...d}=n||{},p=u??s;return(0,L.jsxs)(w,{className:z({alignNameWidth:!!a}),children:[(0,L.jsxs)(m,{direction:r,leader:o,isTabularNums:p,...l,component:`div`,children:[(0,L.jsx)(x,{$nameMaxWidth:i,$direction:r,children:t}),f(e,d)]}),c&&h(c)]},`${t}:${e}`)};return(0,L.jsxs)(S,{className:R({variant:t}),style:d,children:[n&&p(),u.map((e,n)=>(0,L.jsx)(C,{$direction:r,$hasDivider:n!==0,$variant:t,children:e.map(({name:e,value:t,options:n})=>_(t,e,n))},n))]})};try{B.displayName=`DescriptionList`,B.__docgenInfo={description:``,displayName:`DescriptionList`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DescriptionList/DescriptionList.tsx`,methods:[],props:{direction:{defaultValue:{value:`'default'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Description/Description.tsx`,name:`TypeLiteral`}],description:`Определяет перенос строк`,name:`direction`,required:!1,tags:{default:`'default'`},type:{name:`enum`,raw:`"row" | "default" | "column"`,value:[{value:`"row"`},{value:`"default"`},{value:`"column"`}]}},separator:{defaultValue:{value:`':'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Description/Description.tsx`,name:`TypeLiteral`}],description:`Определяет разделитель между Name Value`,name:`separator`,required:!1,tags:{default:`':'`},type:{name:`string`}},justifyContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Description/Description.tsx`,name:`TypeLiteral`}],description:`Позиционирует элементы либо по разным краям, либо по левому краю`,name:`justifyContent`,required:!1,tags:{},type:{name:`enum`,raw:`"start" | "space-between"`,value:[{value:`"start"`},{value:`"space-between"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Description/Description.tsx`,name:`TypeLiteral`}],description:`Включает моноширинные числа`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},leader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Description/Description.tsx`,name:`TypeLiteral`}],description:`Добавляет dashed разделитель, заполняющего свободное пространство между Name Value`,name:`leader`,required:!1,tags:{},type:{name:`boolean`}},items:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionList/types.ts`,name:`TypeLiteral`}],description:`Список отображаемых "name: value"`,name:`items`,required:!0,tags:{},type:{name:`(DescriptionListItem | DescriptionListItem[])[]`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionList/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения списка`,name:`variant`,required:!1,tags:{default:`default`},type:{name:`enum`,raw:`DescriptionListVariant`,value:[{value:`"contained"`},{value:`"default"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionList/types.ts`,name:`TypeLiteral`}],description:`Заголовок блока`,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},alignNameWidth:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DescriptionList/types.ts`,name:`TypeLiteral`}],description:`Включает выравнивание колонок DescriptionList с указанной шириной для поля наименования.`,name:`alignNameWidth`,required:!1,tags:{},type:{name:"`${string}px`"}}},tags:{}}}catch{}})))()}export{V as n,B as t};