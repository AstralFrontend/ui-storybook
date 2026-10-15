import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Va as a,ei as o,ji as s,wn as c,xa as l,yn as u}from"./preview-msKJ6Jz4.js";import{h as d,v as f}from"./PageContentHeaderActions-ARngubXI.js";var p;function m(){return(m=e((()=>{i(),p={root:r(`page-layout__section`),wrapper:r(`page-layout__section-wrapper`),isNoMobileSidePadding:r(`page-layout__section-wrapper_no-mobile-side-padding`)}})))()}var h,g;function _(){return(_=e((()=>{u(),m(),h=s.section`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: ${({theme:e})=>e.spacing(0,4)};

    background-color: ${({theme:e})=>e.palette.background.default};
    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};
  }
`,g=s.div`
  padding: ${({theme:e})=>e.spacing(0,6)};

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    padding: ${({theme:e})=>e.spacing(0,4)};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};

    &.${p.isNoMobileSidePadding} {
      padding: ${({theme:e})=>e.spacing(4,0)};
    }
  }
`})))()}var v,y,b,x;function S(){return(S=e((()=>{v=a(),o(),c(),m(),_(),y=l(),b=n(p.wrapper,{variants:{isNoMobileSidePadding:{true:p.isNoMobileSidePadding}}}),x=(0,v.forwardRef)(({children:e,className:n,isNoMobileSidePadding:r=!1},i)=>(0,y.jsx)(h,{className:t(n,p.root),ref:i,children:(0,y.jsx)(g,{className:b({isNoMobileSidePadding:r}),children:e})}));try{x.displayName=`PageLayoutSection`,x.__docgenInfo={description:`Секция страницы. На десктопе между секциями отображается разделитель или отступ. На мобильных разрешениях секции оформляются как карточки.`,displayName:`PageLayoutSection`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSection.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSection.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSection.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isNoMobileSidePadding:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSection.tsx`,name:`TypeLiteral`}],description:`Отключает боковые отступы на мобильных разрешениях`,name:`isNoMobileSidePadding`,required:!1,tags:{},type:{name:`boolean`}}},tags:{example:`<PageLayout content={
  <PageLayoutSectionContainer>
    <PageLayoutSection>
          Секция 1
    </PageLayoutSection>
  </PageLayoutSectionContainer>
} />`}}}catch{}})))()}var C;function w(){return(w=e((()=>{C={withAside:`page-layout-section__container_with-aside`,withDivider:`page-layout-section__container_with-divider`}})))()}var T;function E(){return(E=e((()=>{u(),w(),T=s.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  padding-top: 0;
  padding-bottom: ${({theme:e})=>e.spacing(4)};

  border-top: none;

  &.${C.withAside} {
    padding-top: ${({theme:e})=>e.spacing(4)};

    border-top: ${({theme:e})=>`1px solid ${e.palette.components.border.default}`};
  }

  ${({theme:e})=>e.breakpoints.down(`laptop`)} {
    gap: ${({theme:e})=>e.spacing(5)};
  }

  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    &.${C.withDivider} {
      & > :not(:last-child)::after {
        content: '';

        display: block;

        width: 100%;
        height: 1px;
        margin-top: ${({theme:e})=>e.spacing(6)};

        background-color: ${({theme:e})=>e.palette.grey[300]};
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: unset;
    gap: ${({theme:e})=>e.spacing(4)};
    order: 4;

    &.${C.withAside} {
      padding-top: 0;

      border-top: none;
    }
  }
`})))()}var D,O,k;function A(){return(A=e((()=>{D=a(),d(),o(),w(),E(),O=l(),k=({children:e,className:n,isShowDivider:r=!1})=>{let{hasAside:i}=(0,D.useContext)(f),a=(0,D.useMemo)(()=>t(n,{[C.withAside]:i,[C.withDivider]:r}),[n,i,r]);return(0,O.jsx)(T,{className:a,children:e})};try{k.displayName=`PageLayoutSectionContainer`,k.__docgenInfo={description:`Контейнер для секций страницы.`,displayName:`PageLayoutSectionContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSectionContainer/PageLayoutSectionContainer.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSectionContainer/PageLayoutSectionContainer.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSectionContainer/PageLayoutSectionContainer.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isShowDivider:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayoutSection/PageLayoutSectionContainer/PageLayoutSectionContainer.tsx`,name:`TypeLiteral`}],description:`На десктопе между секциями отображается разделитель; на мобиле по-прежнему карточки с отступами между ними.`,name:`isShowDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{example:`<PageLayout content={
  <PageLayoutSectionContainer>
    <PageLayoutSection>
          Секция 1
    </PageLayoutSection>
  </PageLayoutSectionContainer>
} />`}}}catch{}})))()}function j(){return(j=e((()=>{A()})))()}function M(){return(M=e((()=>{S(),j()})))()}export{x as a,A as i,j as n,S as o,k as r,M as t};