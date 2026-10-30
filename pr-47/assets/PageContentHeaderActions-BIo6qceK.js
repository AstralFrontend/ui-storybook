import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{$r as t,Cn as n,Dn as r,Fn as i,In as a,Ln as o,Mn as s,Nn as c,O as l,On as u,Rn as d,T as f,cn as p,dt as m,ei as h,ft as g,it as ee,ji as _,k as te,ln as ne,rt as re,w as ie,wn as ae,ya as v,yn as y,za as b}from"./preview-Z1rCd2zM.js";import{n as oe,t as se}from"./useViewportType-Cak33EwY.js";import{s as ce}from"./Tabs-BptdGS_8.js";import{t as x}from"./Skeleton-BrrJLfuU.js";import{o as le,t as ue}from"./Tooltip-CLFxizv9.js";import{t as de}from"./BottomDrawer-BHVSEGQY.js";import{i as fe,n as pe,r as me,t as he}from"./Collapse-fKJ4fWTB.js";import{i as ge,m as _e,s as ve,u as ye,v as be}from"./ActionGroup-CLzYv996.js";import{t as xe}from"./BottomDrawer-BD0g_Am_.js";import{n as Se}from"./useMenu-CCDvZiHG.js";import{t as Ce}from"./useMenu-C8Jp1Rg8.js";import{t as we}from"./Tooltip-DtWxukvG.js";import{t as S}from"./ActionGroup-BABdf7qX.js";import{t as Te}from"./OverflowTypography-CnitHJeT.js";import{t as Ee}from"./OverflowTypography-B5wZNaqg.js";import{n as De,t as Oe}from"./Breadcrumbs-XVKyB4Jw.js";import{t as C}from"./Skeleton-DOWRzYSu.js";import{i as ke,t as Ae}from"./DashboardContext-C1ZBJDs_.js";import{t as je}from"./Tabs-N6xu8IIW.js";import{n as Me,t as Ne}from"./DotsVOutlineMd-CXegs-3w.js";import{n as Pe,t as Fe}from"./getNodeText-YQM7VRBI.js";import{a as Ie,i as Le,n as Re,t as ze}from"./MinimizeOutlineMd-y1CSklgg.js";import{n as Be,t as Ve}from"./ArrowLOutlineMd-CgOSShWp.js";function He(){return(He=e((()=>{De()})))()}var Ue,We;function Ge(){return(Ge=e((()=>{u(),Ue=`320px`,We={mobileNavigation:r(`page-aside__mobile-navigation`),withHeader:r(`page-aside_with-header`),root:r(`page-aside`)}})))()}var w,T;function E(){return(E=e((()=>{u(),w={root:r(`page-header`),pageHeaderMobileTitle:r(`page-header__mobile-title`),pageHeaderActions:r(`page-header__actions`),hasBackButton:r(`page-header_has-back-button`),hasTitle:r(`page-header_has-title`),filters:r(`page-header__filters`),subheader:r(`page-header__subheader`),quickFilters:r(`page-header__quick-filters`),hasFilters:r(`page-header_has-filters`),hasSubheader:r(`page-header_has-subheader`),hasActions:r(`page-header_has-actions`)},T=`48px`})))()}var Ke;function qe(){return(qe=e((()=>{d(),S(),y(),we(),Ke=_.div`
  display: flex;
  gap: ${({theme:e,$spacing:t})=>e.spacing(t)};

  .${_e.action} {
    flex-grow: 1;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing(2)};
    order: -1;

    padding-bottom: ${({theme:e})=>e.spacing(2)};

    & > .${le.contentWrapper}, & > .${o.root} {
      flex: 1 1 calc(50% - ${({theme:e})=>e.spacing(1)});
    }
  }
`})))()}var Je,D;function Ye(){return(Ye=e((()=>{S(),qe(),Je=v(),D=({actions:e,isDisabled:t,className:n,size:r,spacing:i=2,isRenderActionDisabled:a})=>!e||e&&e.length===0?null:(0,Je.jsx)(Ke,{className:n,$spacing:i,children:(0,Je.jsx)(ye,{actions:e??[],isDisabled:t,size:r,isRenderActionDisabled:a})});try{D.displayName=`MainActions`,D.__docgenInfo={description:``,displayName:`MainActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/MainActions/MainActions.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/MainActions/MainActions.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Если true, основные действия будут заблокированы`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isRenderActionDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:"Отключает вызов `renderAction` — для копии действий, скрытой через css:\nпопап из подмены открывается в портале, и css его не прячет",name:`isRenderActionDisabled`,required:!1,tags:{default:`false`},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/MainActions/MainActions.tsx`,name:`TypeLiteral`}],description:``,name:`actions`,required:!1,tags:{},type:{name:`MainAction<TMainActionComponent>[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/MainActions/MainActions.tsx`,name:`TypeLiteral`}],description:`Класс, применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},spacing:{defaultValue:{value:`2`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/MainActions/MainActions.tsx`,name:`TypeLiteral`}],description:`Отступ между действиями`,name:`spacing`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function Xe(){return(Xe=e((()=>{Ye()})))()}var Ze;function Qe(){return(Qe=e((()=>{y(),Ze=_.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
`})))()}var O,k;function $e(){return($e=e((()=>{C(),Qe(),O=v(),k=({size:e=`medium`})=>e===`medium`?(0,O.jsx)(x,{variant:`rounded`,height:32,width:180}):(0,O.jsxs)(Ze,{children:[(0,O.jsx)(x,{variant:`rounded`,height:40,width:40}),(0,O.jsx)(x,{variant:`rounded`,height:40,width:190})]});try{k.displayName=`PageActionSkeleton`,k.__docgenInfo={description:``,displayName:`PageActionSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/PageActionSkeleton/PageActionSkeleton.tsx`,methods:[],props:{size:{defaultValue:{value:`medium`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/PageActionSkeleton/PageActionSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function et(){return(et=e((()=>{$e()})))()}var tt,nt;function rt(){return(rt=e((()=>{S(),p(),y(),tt=_(ne)`
  display: none;

  width: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
  }
`,nt=_(ve)`
  display: flex;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var A,j;function it(){return(it=e((()=>{rt(),A=v(),j=({actions:e,isDisabled:t,size:n=`medium`})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(nt,{actions:e,isDisabled:t,size:n}),e.map(({onClick:e,text:t,disabled:r})=>(0,A.jsx)(tt,{onClick:e,disabled:r,variant:`outlined`,size:n,color:`grey`,children:t},t))]});try{j.displayName=`SecondaryActions`,j.__docgenInfo={description:``,displayName:`SecondaryActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/SecondaryActions/SecondaryActions.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`actions`,required:!0,tags:{},type:{name:`SecondaryAction<TSecondaryActionComponent>[]`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Если true, вторичные действия будут заблокированы`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Класс, применяемый к кнопкам второстепенных действий`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},popoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Пропсы Popover меню второстепенных действий`,name:`popoverProps`,required:!1,tags:{},type:{name:`Omit<MenuProps, "children" | "title" | "open" | "anchorEl">`}}},tags:{}}}catch{}})))()}function at(){return(at=e((()=>{it()})))()}var ot,st;function ct(){return(ct=e((()=>{S(),p(),y(),ot=_(ne)`
  display: none;
  flex-grow: 1;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
  }
`,st=_(ge)`
  display: flex;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var M,N;function lt(){return(lt=e((()=>{ct(),M=v(),N=({actions:e,size:t=`medium`,isRenderActionDisabled:n})=>(0,M.jsxs)(M.Fragment,{children:[e.map(({disabledReason:e,isBlockingOperation:n,icon:r,name:i,renderAction:a,...o})=>(0,M.jsx)(ot,{variant:`outlined`,size:t,color:`grey`,...o,children:i},i)),(0,M.jsx)(st,{actions:e,size:t,isRenderActionDisabled:n})]});try{N.displayName=`SecondaryVisibleActions`,N.__docgenInfo={description:``,displayName:`SecondaryVisibleActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/SecondaryVisibleActions/SecondaryVisibleActions.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Видимые второстепенные действия`,name:`actions`,required:!0,tags:{},type:{name:`SecondaryVisibleAction[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Класс, применяемый к кнопкам второстепенных видимых действий`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isRenderActionDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:"Отключает вызов `renderAction` — для копии действий, скрытой через css:\nпопап из подмены открывается в портале, и css его не прячет",name:`isRenderActionDisabled`,required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function ut(){return(ut=e((()=>{lt()})))()}var P,F;function dt(){return(dt=e((()=>{u(),P={isShowOnDesktop:r(`focus-mode-button__show-desktop`),isShowOnLaptop:r(`focus-mode-button__show-laptop`)},F={withCollapseOnLaptop:r(`actions_collapse-on-laptop`)}})))()}var ft,pt,mt,ht,gt,_t;function vt(){return(vt=e((()=>{re(),y(),dt(),ft=_.div`
  display: flex;
  grid-column: 3;
  grid-row: 1 / 4;
  gap: ${({theme:e})=>e.spacing(2)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    grid-column: 4;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,pt=_.div`
  display: flex;
  gap: ${({theme:e,$spacing:t})=>e.spacing(t)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    &.${F.withCollapseOnLaptop} {
      display: none;
    }
  }
`,mt=_(`div`)`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({theme:e,$spacing:t})=>e.spacing(t)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    &.${F.withCollapseOnLaptop} {
      display: none;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,ht=_.div`
  display: none;

  margin-left: auto;

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    &.${F.withCollapseOnLaptop} {
      display: flex;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,gt=_.div`
  display: flex;
  flex-direction: row-reverse;
  gap: ${({theme:e,$spacing:t})=>e.spacing(t)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,_t=_(ee)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    &.${P.isShowOnLaptop} {
      display: inline-flex;
    }
  }
    
  ${({theme:e})=>e.breakpoints.up(`laptop`)} {
    &.${P.isShowOnDesktop} {
      display: inline-flex;
    }
  }
`})))()}var I,yt;function bt(){return(bt=e((()=>{I=b(),S(),l(),Ae(),se(),h(),dt(),yt=({main:e,secondary:n,secondaryVisible:r,withCollapseOnLaptop:i=!1})=>{let{showFocusModeButtonOnDesktop:a,showFocusModeButtonOnLaptop:o}=(0,I.useContext)(te),{setFocusedMode:s,isFocusedMode:c}=(0,I.useContext)(ke),{isMobile:l}=oe(),{disabledAction:u}=be({main:e,secondary:n}),d=(0,I.useMemo)(()=>t({[P.isShowOnDesktop]:a,[P.isShowOnLaptop]:o}),[a,o]),f=()=>{s(!c)},p=c?`Свернуть и вернуть шапку сервиса`:`Раскрыть на весь экран`,m=(0,I.useMemo)(()=>{let t=e?.flatMap(e=>{if(`isNested`in e&&e.isNested)return e.actions.map(e=>({text:e.text,onClick:e.onClick,disabled:u||`disabled`in e&&e.disabled}));let{text:t,onClick:n,disabled:r}=e;return[{text:t,onClick:n,disabled:u||r}]}),i=r?.map(({name:e,onClick:t,disabled:n})=>({text:e,onClick:t,disabled:u||n})),a=n?.map(({disabled:e,...t})=>({...t,disabled:u||e})),o=[...t||[],...i||[],...a||[]];return o.length<=1?[]:o},[e,n,r,u]);return{disabledAction:u,isRenderActionDisabled:l,buttonClassnames:d,isFocusedMode:c,handleClick:f,tooltipTitle:p,collapsedActions:m,classnames:(0,I.useMemo)(()=>t({[F.withCollapseOnLaptop]:i&&m.length>0}),[i])}}})))()}function xt(){return(xt=e((()=>{bt()})))()}var L,St,R;function Ct(){return(Ct=e((()=>{Le(),ze(),s(),we(),Xe(),et(),at(),ut(),vt(),xt(),L=v(),St=(e,t)=>{let{secondary:n,secondaryVisible:r,main:i,className:a,isLoading:o,size:s=`medium`,spacing:c=2}=e,{disabledAction:l,isRenderActionDisabled:u,buttonClassnames:d,isFocusedMode:f,handleClick:p,tooltipTitle:m,collapsedActions:h,classnames:g}=yt(e);return o?(0,L.jsx)(ft,{children:(0,L.jsx)(k,{size:s})}):(0,L.jsx)(ft,{className:a,ref:t,children:(0,L.jsxs)(gt,{$spacing:c,children:[(0,L.jsx)(ue,{title:m,enterDelay:400,enterNextDelay:400,placement:`bottom-end`,children:(0,L.jsx)(_t,{className:d,variant:`outlined`,onClick:p,"aria-label":m,color:`grey`,children:f?(0,L.jsx)(Re,{}):(0,L.jsx)(Ie,{})})}),(0,L.jsx)(pt,{$spacing:c,className:g,children:(0,L.jsx)(D,{isDisabled:l,actions:i,size:s,spacing:c,isRenderActionDisabled:u})}),(r||n)&&(0,L.jsxs)(mt,{$spacing:c,className:g,children:[r&&(0,L.jsx)(N,{actions:r,size:s,isRenderActionDisabled:u}),n&&(0,L.jsx)(j,{isDisabled:l,actions:n,size:s})]}),h.length>0&&(0,L.jsx)(ht,{className:g,children:(0,L.jsx)(j,{isDisabled:l,actions:h,size:s})})]})})},R=c(St);try{R.displayName=`PageActions`,R.__docgenInfo={description:``,displayName:`PageActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/PageActions.tsx`,methods:[],props:{main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<TMainActionComponent>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<TSecondaryActionComponent>[]`}},secondaryPopoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Пропсы Popover меню второстепенных действий`,name:`secondaryPopoverProps`,required:!1,tags:{},type:{name:`Omit<MenuProps, "children" | "title" | "open" | "anchorEl">`}},secondaryVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Видимые второстепенные действия`,name:`secondaryVisible`,required:!1,tags:{},type:{name:`SecondaryVisibleAction[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Размер кнопок`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},spacing:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Отступ между действиями`,name:`spacing`,required:!1,tags:{},type:{name:`number`}},withCollapseOnLaptop:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается кнопка с троеточием на laptop разрешениях`,name:`withCollapseOnLaptop`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{Xe(),et(),Ct(),at(),ut()})))()}var wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{re(),C(),y(),m(),wt=(e,t)=>!e&&!t?`1 / 4`:e?t?`2`:`1 / 3`:`2 / 4`,Tt=_(g,{shouldForwardProp:e=>![`$hasDescription`,`$hasBreadcrumbs`].includes(e)})`
  overflow: hidden;
  grid-column: 2;
  grid-row: ${({$hasDescription:e,$hasBreadcrumbs:t})=>wt(e,t)};
  align-self: center;

  margin-right: ${({theme:e})=>e.spacing(3)};

  line-height: ${({theme:e})=>e.typography.h2.lineHeight};
  
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    font-size: ${({theme:e})=>e.typography.h5.fontSize};
    line-height: ${({theme:e})=>e.typography.h5.lineHeight};
    white-space: nowrap;
  }
`,Et=_(ee)`
  grid-column: 1;
  grid-row: 1 / 4;

  margin-right: ${({theme:e})=>e.spacing(3)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-right: ${({theme:e})=>e.spacing(1)};
    
    border: unset;
  }
`,Dt=_(x)`
  grid-column: 2;
  grid-row: 2;

  margin: ${({theme:e})=>e.spacing(1,0)};
`})))()}var B,V;function kt(){return(kt=e((()=>{Ve(),Ee(),Ot(),B=v(),V=({backButton:e,title:t,isLoading:n,hasDescription:r,hasBreadcrumbs:i})=>!t&&n?(0,B.jsx)(Dt,{height:20,width:280,variant:`rounded`}):(0,B.jsxs)(B.Fragment,{children:[e&&(0,B.jsx)(Et,{...e,variant:`outlined`,color:`grey`,size:`medium`,children:(0,B.jsx)(Be,{})}),typeof t==`string`?(0,B.jsx)(Tt,{component:`h1`,variant:`h3`,$hasDescription:r||n,$hasBreadcrumbs:i,children:(0,B.jsx)(Te,{component:`div`,variant:`inherit`,children:t})}):(0,B.jsx)(Tt,{component:`div`,role:`heading`,variant:`h3`,"aria-level":1,$hasDescription:r,$hasBreadcrumbs:i,children:t})]});try{V.displayName=`Title`,V.__docgenInfo={description:``,displayName:`Title`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/Title/Title.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Заголовок страницы`,name:`title`,required:!1,tags:{example:`<PageHeader title="Заголовок страницы" />`},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},backButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Кнопка возврата на предыдущий экран`,name:`backButton`,required:!1,tags:{example:`<PageHeader
 backButton={{
   onClick: () => {},
 }}
/>`},type:{name:`Omit<ButtonProps, "children" | "variant" | "component"> & { component?: ElementType; theme?: Theme; } & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<...>`}},hasDescription:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`hasDescription`,required:!1,tags:{},type:{name:`boolean`}},hasBreadcrumbs:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/Title/Title.tsx`,name:`TypeLiteral`}],description:``,name:`hasBreadcrumbs`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function At(){return(At=e((()=>{kt()})))()}var jt,Mt;function Nt(){return(Nt=e((()=>{C(),y(),m(),jt=_(g)`
  grid-column: 2 / -1;
  grid-row: 3;

  padding-top: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Mt=_(x)`
  grid-column: 2 / -1;
  grid-row: 3;

  margin: ${({theme:e})=>e.spacing(1,0)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var H,U;function Pt(){return(Pt=e((()=>{Nt(),H=v(),U=({description:e,isLoading:t})=>!e&&t?(0,H.jsx)(Mt,{width:488}):e?typeof e==`string`?(0,H.jsx)(jt,{children:e}):(0,H.jsx)(jt,{component:`div`,role:`heading`,"aria-level":4,children:e}):null;try{U.displayName=`Description`,U.__docgenInfo={description:``,displayName:`Description`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/Description/Description.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Ft(){return(Ft=e((()=>{Pt()})))()}var It,Lt,W,G;function Rt(){return(Rt=e((()=>{It=b(),Lt=v(),W=(0,It.createContext)(void 0),G=({children:e,filtersClassName:t,quickFiltersClassName:n})=>(0,Lt.jsx)(W.Provider,{value:{filtersClassName:t,quickFiltersClassName:n},children:e});try{W.displayName=`FormFiltersLayoutContext`,W.__docgenInfo={description:``,displayName:`FormFiltersLayoutContext`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/FormFiltersProvider/FormFiltersProvider.tsx`,methods:[],props:{},tags:{}}}catch{}try{G.displayName=`FormFiltersProvider`,G.__docgenInfo={description:`Задаёт дополнительные классы для корня фильтров и блока быстрых фильтров
(например, из разметки PageHeader).`,displayName:`FormFiltersProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/FormFiltersProvider/FormFiltersProvider.tsx`,methods:[],props:{filtersClassName:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/FormFiltersProvider/FormFiltersProvider.tsx`,name:`TypeLiteral`}],description:``,name:`filtersClassName`,required:!1,tags:{},type:{name:`string`}},quickFiltersClassName:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/FormFiltersProvider/FormFiltersProvider.tsx`,name:`TypeLiteral`}],description:``,name:`quickFiltersClassName`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/FormFiltersProvider/FormFiltersProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function zt(){return(zt=e((()=>{Rt()})))()}var Bt,Vt,Ht,Ut;function Wt(){return(Wt=e((()=>{y(),je(),Bt=_.div`
  grid-column: 2;
  grid-row: 1;

  margin-bottom: ${({theme:e})=>e.spacing(1)};

  &:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Vt=_.div`
  grid-column: 1 / -1;
  grid-row: 4;

  padding-top:  ${({theme:e})=>e.spacing(4)};

  &:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0,0,4,0)};

    .${ce.root} {
      margin: ${({theme:e})=>e.spacing(0,4)};
    }
  }
`,Ht=_.div`
  grid-column: 1 / -1;
  grid-row: 5;

  padding-top: ${({theme:e})=>e.spacing(4)};

  &:empty {
    display: none;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0,4,4,4)};
  }
`,Ut=_.div`
  display: contents;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;

    min-height: 48px;
    padding: ${({theme:e})=>e.spacing(0,4)};

    background-color: ${({theme:e})=>e.palette.grey[100]};
  }
`})))()}var K,Gt;function Kt(){return(Kt=e((()=>{He(),h(),E(),z(),At(),Ft(),zt(),Wt(),K=v(),Gt=({backButton:e,description:n,subheader:r,breadcrumbs:i,tabs:a,actions:o,title:s,filters:c,isLoading:l})=>(0,K.jsxs)(K.Fragment,{children:[i?(0,K.jsx)(Bt,{children:Array.isArray(i)?(0,K.jsx)(Oe,{children:i}):i}):null,(0,K.jsx)(Ut,{children:(0,K.jsx)(V,{backButton:e,title:s,isLoading:l,hasDescription:!!n,hasBreadcrumbs:!!i})}),(0,K.jsx)(U,{description:n,isLoading:l}),o&&(0,K.jsx)(R,{className:t(w.pageHeaderActions),isLoading:l,size:`medium`,withCollapseOnLaptop:!!c,...o}),c&&(0,K.jsx)(G,{filtersClassName:w.filters,quickFiltersClassName:w.quickFilters,children:c}),a&&(0,K.jsx)(Vt,{children:a}),r&&(0,K.jsx)(Ht,{className:w.subheader,children:r})]});try{Gt.displayName=`HeaderContent`,Gt.__docgenInfo={description:``,displayName:`HeaderContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/HeaderContent/HeaderContent.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Заголовок страницы`,name:`title`,required:!1,tags:{example:`<PageHeader title="Заголовок страницы" />`},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Описание страницы`,name:`description`,required:!1,tags:{example:`<PageHeader description="Описание страницы" />`},type:{name:`ReactNode`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Набор кнопок, видимые конфигурируются через объект main, скрытые в меню -
через secondary`,name:`actions`,required:!1,tags:{example:`<PageHeader actions={{
main: [
{
text: 'Основное действие',
},
],
secondary: [
{
text: 'Вспомогательное действие',
},
]
}} />`},type:{name:`PageActionsProps<TMainActionComponent, TSecondaryActionComponent>`}},subheader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Набор компонент, отображаемый в нижней части блока`,name:`subheader`,required:!1,tags:{example:`<PageHeader subheader={<TextField placeholder="Поиск на странице..." size="small" />} />`},type:{name:`ReactNode`}},breadcrumbs:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Хлебные крошки`,name:`breadcrumbs`,required:!1,tags:{example:`<PageHeader breadcrumbs={
<Breadcrumbs>
<Link>Первая ссылка</Link>,
<Link>Вторая ссылка</Link>,
<>Текст</>
</Breadcrumbs>
} />`},type:{name:`ReactNode`}},backButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Кнопка возврата на предыдущий экран`,name:`backButton`,required:!1,tags:{example:`<PageHeader
 backButton={{
   onClick: () => {},
 }}
/>`},type:{name:`any`}},tabs:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Слот для tabs`,name:`tabs`,required:!1,tags:{example:`<PageHeader tabs={
<Tabs value={tabValue} onChange={handleChange}>
<Tab label="Вкладка 1" />
<Tab label="Вкладка 2" />
</Tabs>
} />`},type:{name:`ReactNode`}},filters:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Фильтры формы`,name:`filters`,required:!1,tags:{example:`<PageHeader filters={<FormFilters values={values} onChange={handleChange} />} />`},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function qt(){return(qt=e((()=>{Kt(),zt()})))()}var Jt,Yt,Xt,Zt,Qt,$t;function en(){return(en=e((()=>{a(),pe(),fe(),y(),E(),z(),Jt=_.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.speedDial};
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 0;
    order: 5;

    width: 100%;

    /* Ограничиваем высоту */
    max-height: calc(100% - ${T});
    margin-top: auto;
    padding: ${({theme:e})=>e.spacing(4)};

    background-color: ${({theme:e})=>e.palette.common.white};
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};
    box-shadow: ${({theme:e})=>e.elevation.up[100]};
  }
`,Yt=_(i)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;

    height: 40px;
    min-height: 40px;
    padding: 0;
  }
`,Xt=_(he)`
  & .${me.wrapper} > .${me.wrapperInner} {
    display: flex;
    flex-direction: column;
  }
`,Zt=_.div`
  overflow: auto;
`,Qt=_(`div`)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};

  padding-bottom: ${({theme:e})=>e.spacing(2)};
`,$t=_(D,{shouldForwardProp:e=>![`$isVisibleShowMoreButton`].includes(e)})`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-bottom: ${({theme:e,$isVisibleShowMoreButton:t})=>t?e.spacing(2):0};
  }
`})))()}var tn,nn;function rn(){return(rn=e((()=>{tn=b(),S(),se(),nn=({main:e,secondary:t,secondaryVisible:n,isLoading:r})=>{let[i,a]=(0,tn.useState)(!1),{disabledAction:o}=be({main:e,secondary:t}),{isMobile:s}=oe(),c=()=>{a(!i)},l=e?.slice(0,2),u=e?.slice(2);return{disabledAction:o,isRenderActionDisabled:!s,isActive:i,handleToggle:c,visibleMainActions:l,hiddenMainActions:u,isVisibleShowMoreButton:!!(t||n||u?.length),isLoading:r}}})))()}function an(){return(an=e((()=>{rn()})))()}var q,on;function sn(){return(sn=e((()=>{z(),en(),an(),q=v(),on=e=>{let{disabledAction:t,isRenderActionDisabled:n,isActive:r,handleToggle:i,visibleMainActions:a,hiddenMainActions:o,isVisibleShowMoreButton:s,isLoading:c}=nn(e),{secondary:l,secondaryVisible:u,className:d}=e;return c?null:(0,q.jsxs)(Jt,{className:d,role:`presentation`,children:[(0,q.jsxs)(Zt,{children:[(0,q.jsx)($t,{actions:a,isDisabled:t,$isVisibleShowMoreButton:s,size:`large`,isRenderActionDisabled:n}),(0,q.jsxs)(Xt,{in:r,children:[(0,q.jsx)(D,{isDisabled:t,actions:o,size:`large`,isRenderActionDisabled:n}),(0,q.jsxs)(Qt,{children:[u&&(0,q.jsx)(N,{actions:u,size:`large`,isRenderActionDisabled:!0}),l&&(0,q.jsx)(j,{isDisabled:t,actions:l,size:`large`})]})]})]}),s&&(0,q.jsx)(Yt,{onClick:i,children:r?`Скрыть другие действия`:`Показать другие действия`})]})};try{on.displayName=`MobilePageActions`,on.__docgenInfo={description:``,displayName:`MobilePageActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/MobilePageActions/MobilePageActions.tsx`,methods:[],props:{main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<TMainActionComponent>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<TSecondaryActionComponent>[]`}},secondaryPopoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Пропсы Popover меню второстепенных действий`,name:`secondaryPopoverProps`,required:!1,tags:{},type:{name:`Omit<MenuProps, "children" | "title" | "open" | "anchorEl">`}},secondaryVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Видимые второстепенные действия`,name:`secondaryVisible`,required:!1,tags:{},type:{name:`SecondaryVisibleAction[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Размер кнопок`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/MobilePageActions/MobilePageActions.tsx`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function cn(){return(cn=e((()=>{sn()})))()}var ln,un;function dn(){return(dn=e((()=>{Ge(),y(),E(),ln=_.header`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1;
  grid-template-columns: min-content 1fr auto;
  grid-template-rows: repeat(4, auto);
  order: 2;

  padding: ${({theme:e})=>e.spacing(0,6)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding: ${({theme:e})=>e.spacing(0,4)};

    &.${w.hasActions} {
      grid-template-columns: min-content 1fr auto auto;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab};
    top: ${T};

    display: block;

    margin-bottom: ${({theme:e})=>e.spacing(4)};
    padding: unset;

    background-color: ${({theme:e})=>e.palette.background.default};

    /*
     * Два правила, а не список через запятую: невалидный :has()
     * отбросил бы и границу под фильтрами.
     */
    &.${w.hasFilters} {
      border-bottom: 1px solid
        ${({theme:e})=>e.palette.components.border.default};
    }

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    &:has(.${w.subheader}:not(:empty)) {
      border-bottom: 1px solid
        ${({theme:e})=>e.palette.components.border.default};
    }
  }

  .${w.filters} {
    grid-column: 1 / -1;
    grid-row: 6;

    ${({theme:e})=>e.breakpoints.down(`laptop`)} {
      grid-column: 3;
      grid-row: 1 / -1;
    }
  }

  .${w.quickFilters} {
    grid-column: 1 / -1;
    grid-row: 7;

    margin-top: ${({theme:e})=>e.spacing(4)};

    ${({theme:e})=>e.breakpoints.down(`laptop`)} {
      margin-top: ${({theme:e})=>e.spacing(3)};
    }

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      display: none;
    }
  }
`,un=_.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab};
    top: 0;
    
    align-items: center;
    order: 1;
    
    background-color: ${({theme:e})=>e.palette.background.default};

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable plugin/no-unsupported-browser-features */
    &:not(:has(+ .${w.root} :is(
      .${w.filters},
      .${w.subheader}:not(:empty),
      .${We.mobileNavigation}:not(:empty)
    ))) {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }
    /* stylelint-enable plugin/no-unsupported-browser-features */

    &.${w.hasTitle} {
      display: flex;

      height: ${T};
      min-height: ${T};
      padding: ${({theme:e})=>e.spacing(4)};
    }

    &.${w.hasBackButton} {
      padding: ${({theme:e})=>e.spacing(0,4,0,1)};
    }
  }
`})))()}var fn,pn;function mn(){return(mn=e((()=>{fn=b(),pn=(0,fn.createContext)({hasAside:!1,isLoading:!1})})))()}var hn,gn;function _n(){return(_n=e((()=>{mn(),hn=v(),gn=({children:e,hasAside:t,mobileTitleActions:n,isLoading:r})=>(0,hn.jsx)(pn.Provider,{value:{hasAside:t,mobileTitleActions:n,isLoading:r},children:e});try{gn.displayName=`PageContextProvider`,gn.__docgenInfo={description:``,displayName:`PageContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContext/PageContextProvider/PageContextProvider.tsx`,methods:[],props:{hasAside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContext/PageContext.ts`,name:`TypeLiteral`}],description:``,name:`hasAside`,required:!0,tags:{},type:{name:`boolean`}},mobileTitleActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContext/PageContext.ts`,name:`TypeLiteral`}],description:`Действия, отображающиеся на мобильном устройстве в pageHeader`,name:`mobileTitleActions`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContext/PageContext.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContext/PageContextProvider/PageContextProvider.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContext/PageContextProvider/PageContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function vn(){return(vn=e((()=>{_n()})))()}function yn(){return(yn=e((()=>{mn(),vn()})))()}var bn,xn;function Sn(){return(Sn=e((()=>{bn=b(),ie(),Fe(),xn=({shouldUpdateDocumentTitle:e,title:t,htmlTitle:n})=>{let r=(0,bn.useRef)(null),{components:i}=(0,bn.useContext)(f);(0,bn.useEffect)(()=>{if(!(typeof e==`boolean`?e:i?.layout?.defaultProps?.shouldUpdateDocumentTitle))return;let a=Pe(t);if(!a&&!n)console.warn(`@astral/ui:PageHeader: Не получилось определить заголовок страницы. Передайте htmlTitle.`);else return r.current=document.title,document.title=n??a,()=>{r.current!==null&&(document.title=r.current)}},[e,t,i?.layout?.defaultProps,n])}})))()}function Cn(){return(Cn=e((()=>{Sn()})))()}var wn,Tn;function En(){return(En=e((()=>{wn=b(),yn(),Cn(),Tn=({shouldUpdateDocumentTitle:e,title:t,actions:n,htmlTitle:r})=>{xn({shouldUpdateDocumentTitle:e,htmlTitle:r,title:t});let{mobileTitleActions:i,isLoading:a}=(0,wn.useContext)(pn);return{isShowMobileActions:n&&!i,isLoading:a,mobileTitleActions:i}}})))()}function Dn(){return(Dn=e((()=>{En()})))()}var J,On,kn,An;function jn(){return(jn=e((()=>{h(),ae(),E(),qt(),cn(),dn(),At(),Dn(),J=v(),On=n(w.pageHeaderMobileTitle,{variants:{hasTitle:{true:w.hasTitle},hasBackButton:{true:w.hasBackButton}}}),kn=n(w.root,{variants:{hasActions:{true:w.hasActions},hasSubheader:{true:w.hasSubheader},hasFilters:{true:w.hasFilters}}}),An=e=>{let{title:n,description:r,subheader:i,breadcrumbs:a,tabs:o,actions:s,backButton:c,className:l,filters:u}=e,{isLoading:d,mobileTitleActions:f,isShowMobileActions:p}=Tn(e);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(un,{className:On({hasTitle:!!n||d,hasBackButton:!!c}),children:[(0,J.jsx)(V,{backButton:c,title:n,isLoading:d}),f&&f]}),(0,J.jsx)(ln,{className:t(kn({hasActions:!!s,hasSubheader:!!i,hasFilters:!!u}),l),children:(0,J.jsx)(Gt,{breadcrumbs:a,backButton:c,title:n,description:r,actions:s,subheader:i,tabs:o,filters:u,isLoading:d})}),p&&(0,J.jsx)(on,{className:t(w.pageHeaderActions),isLoading:d,...s})]})};try{An.displayName=`PageHeader`,An.__docgenInfo={description:``,displayName:`PageHeader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageHeader/PageHeader.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Заголовок страницы`,name:`title`,required:!1,tags:{example:`<PageHeader title="Заголовок страницы" />`},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Описание страницы`,name:`description`,required:!1,tags:{example:`<PageHeader description="Описание страницы" />`},type:{name:`ReactNode`}},subheader:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Набор компонент, отображаемый в нижней части блока`,name:`subheader`,required:!1,tags:{example:`<PageHeader subheader={<TextField placeholder="Поиск на странице..." size="small" />} />`},type:{name:`ReactNode`}},filters:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Фильтры формы`,name:`filters`,required:!1,tags:{example:`<PageHeader filters={<FormFilters values={values} onChange={handleChange} />} />`},type:{name:`ReactNode`}},breadcrumbs:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Хлебные крошки`,name:`breadcrumbs`,required:!1,tags:{example:`<PageHeader breadcrumbs={
<Breadcrumbs>
<Link>Первая ссылка</Link>,
<Link>Вторая ссылка</Link>,
<>Текст</>
</Breadcrumbs>
} />`},type:{name:`ReactNode`}},tabs:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Слот для tabs`,name:`tabs`,required:!1,tags:{example:`<PageHeader tabs={
<Tabs value={tabValue} onChange={handleChange}>
<Tab label="Вкладка 1" />
<Tab label="Вкладка 2" />
</Tabs>
} />`},type:{name:`ReactNode`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Набор кнопок, видимые конфигурируются через объект main, скрытые в меню -
через secondary`,name:`actions`,required:!1,tags:{example:`<PageHeader actions={{
main: [
{
text: 'Основное действие',
},
],
secondary: [
{
text: 'Вспомогательное действие',
},
]
}} />`},type:{name:`PageActionsProps<TMainActionComponent, TSecondaryActionComponent>`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},shouldUpdateDocumentTitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Динамическое изменение html title в зависимости от title страницы`,name:`shouldUpdateDocumentTitle`,required:!1,tags:{},type:{name:`boolean`}},htmlTitle:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`HTML-заголовок страницы.
Если задан, будет использован как заголовок вкладки браузера.`,name:`htmlTitle`,required:!1,tags:{},type:{name:`string`}},backButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Кнопка возврата на предыдущий экран`,name:`backButton`,required:!1,tags:{example:`<PageHeader
 backButton={{
   onClick: () => {},
 }}
/>`},type:{name:`any`}}},tags:{}}}catch{}})))()}function Mn(){return(Mn=e((()=>{E(),z(),jn(),qt()})))()}var Nn;function Pn(){return(Pn=e((()=>{y(),Nn=_.div`
  display: flex;

  padding: ${({theme:e})=>e.spacing(1,0)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var Y,X;function Fn(){return(Fn=e((()=>{C(),m(),Pn(),Y=v(),X=({className:e,description:t,isLoading:n})=>!t&&n?(0,Y.jsx)(Nn,{children:(0,Y.jsx)(x,{className:e,height:16,width:300,variant:`rounded`})}):typeof t==`string`?(0,Y.jsx)(g,{className:e,variant:`body1`,children:t}):(0,Y.jsx)(g,{className:e,component:`div`,variant:`body1`,children:t});try{X.displayName=`Description`,X.__docgenInfo={description:``,displayName:`Description`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Description/Description.tsx`,methods:[],props:{description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function In(){return(In=e((()=>{Fn()})))()}var Ln,Rn;function zn(){return(zn=e((()=>{Ln=b(),Rn=(0,Ln.createContext)({title:void 0,description:void 0})})))()}var Bn,Vn,Hn;function Un(){return(Un=e((()=>{Bn=b(),zn(),Vn=v(),Hn=({children:e,title:t,description:n})=>{let r=(0,Bn.useMemo)(()=>({title:t,description:n}),[t,n]);return(0,Vn.jsx)(Rn.Provider,{value:r,children:e})};try{Hn.displayName=`PageContentHeaderProvider`,Hn.__docgenInfo={description:``,displayName:`PageContentHeaderProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderContext/PageContentHeaderProvider/PageContentHeaderProvider.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderContext/PageContentHeaderContext.ts`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderContext/PageContentHeaderContext.ts`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderContext/PageContentHeaderProvider/PageContentHeaderProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Wn(){return(Wn=e((()=>{Un()})))()}function Gn(){return(Gn=e((()=>{zn(),Wn()})))()}var Kn,qn,Jn,Yn,Xn;function Zn(){return(Zn=e((()=>{re(),z(),C(),y(),we(),Kn=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  padding: ${({theme:e})=>e.spacing(4)};
`,qn=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};
`,Jn=_(ee)`
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    display: none;
  }
`,Yn=_.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};

  & .${le.contentWrapper} {
    display: none;
  }
`,Xn=_(D)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-bottom: 0;
  }
`,_(x)`
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    display: none;
  }
`})))()}var Z;function Qn(){return(Qn=e((()=>{Z=(e,t)=>e.map(e=>{let n={...e,onClick:n=>{e.onClick?.(n),t()}};return e.actions&&(n.actions=Z(e.actions,t)),n})})))()}var $n,er;function tr(){return(tr=e((()=>{$n=b(),Ce(),Gn(),Qn(),er=({main:e=[],secondary:t=[],secondaryVisible:n=[]})=>{let{open:r,handleOpenMenu:i,handleCloseMenu:a}=Se(),{title:o,description:s}=(0,$n.useContext)(Rn),[c,l,u]=(0,$n.useMemo)(()=>[Z(e,a),Z(t,a),Z(n,a)],[e,t,n,a]);return{open:r,handleOpenMenu:i,handleCloseMenu:a,main:c,secondary:l,secondaryVisible:u,title:o,description:s}}})))()}function nr(){return(nr=e((()=>{tr()})))()}var Q,rr;function ir(){return(ir=e((()=>{Ne(),xe(),z(),m(),In(),Zn(),nr(),Q=v(),rr=e=>{let{open:t,handleOpenMenu:n,handleCloseMenu:r,main:i,secondary:a,secondaryVisible:o,title:s,description:c}=er(e);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Jn,{title:`Открыть подробную информацию`,variant:`text`,color:`grey`,onClick:n,children:(0,Q.jsx)(Me,{})}),(0,Q.jsx)(de,{title:`Подробная информация`,onClose:r,open:t,children:(0,Q.jsxs)(Kn,{children:[(0,Q.jsxs)(qn,{children:[(0,Q.jsx)(g,{variant:`h6`,children:s}),(0,Q.jsx)(X,{description:c})]}),(0,Q.jsxs)(Yn,{children:[(0,Q.jsx)(Xn,{actions:i,size:`large`}),(0,Q.jsx)(N,{actions:o,size:`large`}),(0,Q.jsx)(j,{actions:a,size:`large`})]})]})})]})};try{rr.displayName=`MobilePageContentHeaderActions`,rr.__docgenInfo={description:``,displayName:`MobilePageContentHeaderActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderActions/MobilePageContentHeaderActions/MobilePageContentHeaderActions.tsx`,methods:[],props:{main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<TMainActionComponent>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<TSecondaryActionComponent>[]`}},secondaryPopoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Пропсы Popover меню второстепенных действий`,name:`secondaryPopoverProps`,required:!1,tags:{},type:{name:`Omit<MenuProps, "children" | "title" | "open" | "anchorEl">`}},secondaryVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Видимые второстепенные действия`,name:`secondaryVisible`,required:!1,tags:{},type:{name:`SecondaryVisibleAction[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Размер кнопок`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},spacing:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Отступ между действиями`,name:`spacing`,required:!1,tags:{},type:{name:`number`}},withCollapseOnLaptop:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается кнопка с троеточием на laptop разрешениях`,name:`withCollapseOnLaptop`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function ar(){return(ar=e((()=>{ir()})))()}var or;function sr(){return(sr=e((()=>{C(),y(),or=_(x)`
  flex-shrink: 0;

  width: 180px;
  height: 32px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 40px;
    height: 40px;
  }
`})))()}var cr,lr;function ur(){return(ur=e((()=>{sr(),cr=v(),lr=()=>(0,cr.jsx)(or,{variant:`rounded`})})))()}function dr(){return(dr=e((()=>{ur()})))()}var $,fr;function pr(){return(pr=e((()=>{Mn(),ar(),dr(),$=v(),fr=({isLoading:e,...t})=>e?(0,$.jsx)(lr,{}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(R,{size:`medium`,spacing:1,...t}),(0,$.jsx)(rr,{...t})]});try{fr.displayName=`PageContentHeaderActions`,fr.__docgenInfo={description:``,displayName:`PageContentHeaderActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageContent/PageContentHeader/PageContentHeaderActions/PageContentHeaderActions.tsx`,methods:[],props:{main:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Основные действия`,name:`main`,required:!1,tags:{},type:{name:`MainAction<TMainActionComponent>[]`}},secondary:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Второстепенные действия, спрятанные за троеточием`,name:`secondary`,required:!1,tags:{},type:{name:`SecondaryAction<TSecondaryActionComponent>[]`}},secondaryPopoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Пропсы Popover меню второстепенных действий`,name:`secondaryPopoverProps`,required:!1,tags:{},type:{name:`Omit<MenuProps, "children" | "title" | "open" | "anchorEl">`}},secondaryVisible:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Видимые второстепенные действия`,name:`secondaryVisible`,required:!1,tags:{},type:{name:`SecondaryVisibleAction[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ActionGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Размер кнопок`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonSize`,value:[{value:`"medium"`},{value:`"large"`}]}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается skeleton`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},spacing:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Отступ между действиями`,name:`spacing`,required:!1,tags:{},type:{name:`number`}},withCollapseOnLaptop:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/PageActions/types.ts`,name:`TypeLiteral`}],description:`Если true, отображается кнопка с троеточием на laptop разрешениях`,name:`withCollapseOnLaptop`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function mr(){return(mr=e((()=>{pr(),dr()})))()}export{$e as C,Ge as D,Ue as E,We as O,k as S,w as T,_n as _,ur as a,W as b,Un as c,Fn as d,Mn as f,gn as g,yn as h,lr as i,He as k,In as l,jn as m,fr as n,Gn as o,An as p,pr as r,Hn as s,mr as t,X as u,pn as v,E as w,Rt as x,mn as y};