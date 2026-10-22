import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,Ln as r,On as i,Va as a,Xt as o,cn as s,ei as c,en as l,ji as u,ln as d,xa as f,yn as p}from"./preview-i6eMEpGd.js";import{t as ee}from"./Tooltip-CdYY45Hk.js";import{t as m}from"./MenuItem-DT8_QLIb.js";import{t as te}from"./Collapse-BBz5iGKc.js";import{t as ne}from"./Collapse-DqFAaqOi.js";import{g as re,p as ie}from"./ActionGroup-Bn0N8_Gg.js";import{t as ae}from"./DropdownButton-DJaXvy-V.js";import{t as oe}from"./Tooltip-CP_42dn8.js";import{t as se}from"./MenuItem-BjCaaxFC.js";import{t as ce}from"./IconDropdownButton-DXwkwC0c.js";import{t as le}from"./IconDropdownButton-B47pvtTs.js";import{t as ue}from"./ActionGroup-CG_99wWD.js";import{T as de,f as fe,g as pe,h as me,p as he}from"./PageContentHeaderActions-CFfn_37E.js";import{r as h}from"./constants-DSxR820D.js";import{n as ge,t as _e}from"./DotsVOutlineMd-Cye82hbi.js";import{C as ve,i as ye,l as be,o as xe,s as Se,t as Ce,u as we,w as Te}from"./PageContent-BBLlftGB.js";import{l as Ee}from"./useForm-_fUpWH5D.js";import{t as De}from"./Form-bJ-j8QUP.js";import{n as Oe,t as ke}from"./FormSubmitButton-BG-1ifMS.js";var g,_;function v(){return(v=e((()=>{i(),g={pageHeaderActions:n(`form-page-layout__header__actions`),footerShadow:n(`form-page-layout__footer_shadow`)},_={formPageContentSecondaryActions:n(`form-page-content__actions`),formWizardPageContentActions:n(`form-wizard-page-content_has-actions`)}})))()}var Ae,y,b;function x(){return(x=e((()=>{s(),re(),le(),p(),Ae=u(ce)`
  margin-left: auto;
`,y=u(d)`
  justify-content: flex-start;

  font-weight: ${({theme:e})=>e.typography.fontWeightRegular};
  line-height: ${({theme:e})=>e.typography.h6.lineHeight};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    height: unset;
    padding: 0;
  }
`,b=u(ae)`
  justify-content: flex-start;

  font-weight: ${({theme:e})=>e.typography.fontWeightRegular};
  line-height: ${({theme:e})=>e.typography.h6.lineHeight};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: unset;
    padding: 0;

    .${r.endIcon} {
      display: none;
    }
  }
`})))()}var S,C;function w(){return(w=e((()=>{ue(),se(),_e(),x(),S=f(),C=({actions:e})=>{let t=ie({actions:e?.main||[]});if(!e)return null;let{secondaryVisible:n=[],secondary:r=[]}=e,i=[...n,...r];return(0,S.jsxs)(Ae,{title:`Дополнительные действия`,variant:`text`,icon:(0,S.jsx)(ge,{}),children:[t.map(({isNested:e,buttonProps:t,nestedActions:n},r)=>{let{name:i,disabled:a}=t;return e?(0,S.jsx)(m,{disabled:a,children:(0,S.jsx)(b,{...t,variant:`text`,children:n.map(({key:e,text:t,...n})=>(0,S.jsx)(m,{...n,children:t},e))})},`${i}:${r}`):(0,S.jsx)(m,{disabled:a,children:(0,S.jsx)(y,{...t,variant:`text`})},`${i}:${r}`)}),i?.map((e,t)=>{let n=`name`in e?e.name:e.text,{disabled:r,onClick:i}=e;return(0,S.jsx)(m,{disabled:r,onClick:i,children:n},`${n}:${t}`)})]})};try{C.displayName=`FormMobileActions`,C.__docgenInfo={description:``,displayName:`FormMobileActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayoutBase/FormMobileActions/FormMobileActions.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageHeader/types.ts`,name:`TypeLiteral`}],description:`Набор кнопок, видимые конфигурируются через объект main, скрытые в меню -
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
}} />`},type:{name:`PageActionsProps<TMainActionComponent, TSecondaryActionComponent>`}}},tags:{}}}catch{}})))()}function T(){return(T=e((()=>{w()})))()}var je,Me,Ne,Pe;function Fe(){return(Fe=e((()=>{o(),Ce(),fe(),p(),v(),je=u.div`
  display: block;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Me=u.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
  }
`,Ne=u(ye)`

  overflow: auto;

  padding-top: ${({theme:e})=>e.spacing(4)};

  border-top: 1px solid ${({theme:e})=>e.palette.grey[300]};
  ${l} {
    scrollbar-gutter: stable;
  }

  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    .${h.content} {
      overflow: unset;

      height: auto;
      padding: 0;

      &.${h.contentHasHeader}, &.${h.hasAside} {
        padding: 0;
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-bottom: ${({theme:e})=>e.spacing(20)};
    padding-top: 0;

    &.${_.formPageContentSecondaryActions} {
      margin-bottom: ${({theme:e})=>e.spacing(32)};

      &.${_.formWizardPageContentActions} {
        margin-bottom: ${({theme:e})=>e.spacing(50)};
      }
    }
  }
`,Pe=u(he)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    .${de.pageHeaderMobileTitle} {
      padding-right: ${({theme:e})=>e.spacing(1)};
    }
  }
`})))()}var E,Ie;function Le(){return(Le=e((()=>{E=a(),Ie=({aside:e,header:t,formProps:n})=>{let[r,i]=(0,E.useState)(void 0),a=(0,E.useRef)(null),{actions:o,restHeaderProps:s}=(()=>{if(!(0,E.isValidElement)(t)){let{actions:e,...n}=t;return{actions:e,restHeaderProps:n}}return{actions:void 0,restHeaderProps:void 0}})(),{isSubmitting:c}=n.form?.formState||{},l=n.isDisabled||!![...o?.main||[],...n.secondaryActions||[]].find(e=>e.isBlockingOperation&&e.loading),u=(0,E.useCallback)(e=>e?.map(e=>({...e,disabled:c||l?!0:e.disabled})),[c,l]);return(0,E.useEffect)(()=>{if(!o){i(void 0);return}i({main:u(o?.main),secondary:u(o?.secondary),secondaryVisible:u(o?.secondaryVisible)})},[o,c,l]),{headerProps:{actions:r,...s},pageContentProps:{isSeparatorShown:!!e},renderChildrenProps:{isDisabled:l||c,containerRef:a},headerActions:r}}})))()}function Re(){return(Re=e((()=>{Le()})))()}var D,O,k;function A(){return(A=e((()=>{D=a(),be(),me(),ve(),c(),T(),Fe(),Re(),O=f(),k=e=>{let{pageContentProps:n,headerProps:r,renderChildrenProps:i,headerActions:a}=Ie(e),{className:o,aside:s,children:c,alert:l,contentClassname:u,header:d}=e;return(0,O.jsxs)(pe,{hasAside:!!s,mobileTitleActions:(0,O.jsx)(C,{actions:a}),children:[l&&(0,O.jsx)(je,{children:l}),(0,O.jsxs)(Te,{className:o,children:[l&&(0,O.jsx)(Me,{children:l}),(0,D.isValidElement)(d)?d:(0,O.jsx)(Pe,{...r}),(0,O.jsx)(Ne,{className:t(u),isFormPaddingDisable:!0,...n,children:c(i)}),s&&!(0,D.isValidElement)(s)&&(0,O.jsx)(we,{...s}),(0,D.isValidElement)(s)&&s]})]})};try{k.displayName=`FormPageLayoutBase`,k.__docgenInfo={description:`Компонент не предназначен для экспорта из пакета. Используется внутри FormPageLayout и FormWizardPageLayout`,displayName:`FormPageLayoutBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayoutBase/FormPageLayoutBase.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},aside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageAside`,name:`aside`,required:!1,tags:{example:`<PageLayout aside={{
children: 'Боковая панель страницы',
}} />`},type:{name:`ReactNode | PageAsideProps`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageLayoutFooter`,name:`footer`,required:!1,tags:{example:`<PageLayout footer={{
children: 'Нижняя панель страницы',
}} />`},type:{name:`ReactNode | PageLayoutFooterProps`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageHeader`,name:`header`,required:!1,tags:{example:`<PageLayout header={{
title: 'Заголовок страницы',
description: 'Описание страницы',
}} />`},type:{name:`ReactNode | PageHeaderProps<ElementType, ElementType, ElementType>`}},alert:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Alert страницы`,name:`alert`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},nextFeatureFlags:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:``,name:`nextFeatureFlags`,required:!1,tags:{},type:{name:`{}`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayoutBase/FormPageLayoutBase.tsx`,name:`TypeLiteral`}],description:`Содержимое layout`,name:`children`,required:!0,tags:{},type:{name:`(props: { isDisabled?: boolean; }) => ReactNode`}},formProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayoutBase/FormPageLayoutBase.tsx`,name:`TypeLiteral`}],description:`Параметры страницы формы`,name:`formProps`,required:!0,tags:{},type:{name:`FormPageProps<TFormValues>`}},contentClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayoutBase/FormPageLayoutBase.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к PageContent`,name:`contentClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function j(){return(j=e((()=>{v(),A()})))()}var ze;function Be(){return(Be=e((()=>{ze=`112px`})))()}var Ve;function He(){return(He=e((()=>{xe(),p(),j(),Be(),Ve=u(Se)`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.speedDial};

  border-top: unset;

  &.${g.footerShadow} {
    bottom: 0;

    box-shadow: ${({theme:e})=>e.elevation.up[100]};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: unset;

    width: 100%;
    height: unset;
    max-height: calc(100% - ${ze});
    padding: 0;

    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};
    box-shadow: ${({theme:e})=>e.elevation.up[100]};
  }
`})))()}var M,N;function Ue(){return(Ue=e((()=>{M=a(),Ce(),j(),N=()=>{let e=(0,M.useRef)(null),t=(0,M.useCallback)(t=>{if(e?.current&&!(!t||!t.parentElement)){if(t.scrollHeight>t.parentElement.clientHeight)return e.current.classList.add(g.footerShadow);e.current.classList.remove(g.footerShadow)}},[]);return(0,M.useEffect)(()=>{let e=document.querySelector(`.${h.content}`),n=document.querySelector(`.${h.pageContent}`);if(t(e),!e)return;let r=new ResizeObserver(()=>t(e));return r.observe(e),n&&r.observe(n),()=>{r.disconnect()}},[t]),{footerRef:e}}})))()}function We(){return(We=e((()=>{Ue()})))()}var Ge,P;function F(){return(F=e((()=>{He(),We(),Ge=f(),P=e=>{let{children:t}=e,{footerRef:n}=N();return(0,Ge.jsx)(Ve,{ref:n,children:t})};try{P.displayName=`FormPageFooterContainer`,P.__docgenInfo={description:`Компонент не предназначен для экспорта из пакета. Используется внутри FormPageLayout и FormWizardPageLayout`,displayName:`FormPageFooterContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageFooterContainer/FormPageFooterContainer.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageFooterContainer/FormPageFooterContainer.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое футера`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function I(){return(I=e((()=>{F()})))()}var Ke,L;function R(){return(R=e((()=>{Ke=a(),L=({secondaryActions:e})=>{let[t,n]=(0,Ke.useState)(!1);return{isActive:t,handleToggle:()=>{n(e=>!e)},isShowMoreButton:e&&e.length>1}}})))()}function qe(){return(qe=e((()=>{R()})))()}function z(){return(z=e((()=>{qe()})))()}var Je,Ye,B,Xe,Ze;function Qe(){return(Qe=e((()=>{s(),p(),Je=u(d)`
  flex-grow: 1;
`,Ye=u(d)`
  display: none;

  width: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;

    height: 50px;
  }
`,B=u(`div`,{shouldForwardProp:e=>![`$isDisablePadding`].includes(e)})`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};

  padding-top: ${({theme:e,$isDisablePadding:t})=>t?0:e.spacing(2)};
`,Xe=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)}; 

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Ze=u.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;
    order: 2;
  }
`})))()}var $e;function et(){return(et=e((()=>{$e=({actions:e})=>({isShowCollapseActions:e.length>1})})))()}var V,H;function U(){return(U=e((()=>{ne(),oe(),Qe(),et(),V=f(),H=e=>{let{isDisabled:t,actions:n,isActive:r,isDisablePadding:i=!1}=e,{isShowCollapseActions:a}=$e(e),o=({text:e,disabled:n,isBlockingOperation:r,...i})=>(0,V.jsx)(Ye,{disabled:t||n,variant:`outlined`,color:`grey`,...i,children:e},e);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(Ze,{children:a?(0,V.jsx)(te,{in:r,children:(0,V.jsx)(B,{$isDisablePadding:i,children:n.map(o)})}):(0,V.jsx)(B,{$isDisablePadding:i,children:o(n[0])})}),(0,V.jsx)(Xe,{children:n?.map(e=>{let{text:n,disabled:r,disabledReason:i,loading:a,isBlockingOperation:o,...s}=e;return(0,V.jsx)(ee,{title:r&&i,withoutContainer:!(t||r),children:(0,V.jsx)(Je,{disabled:t||r,loading:a,size:`large`,color:`grey`,variant:`outlined`,...s,children:n})},n)})})]})};try{H.displayName=`SecondaryActions`,H.__docgenInfo={description:``,displayName:`SecondaryActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/SecondaryActions/SecondaryActions.tsx`,methods:[],props:{isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/SecondaryActions/SecondaryActions.tsx`,name:`TypeLiteral`}],description:`Если true, кнопки будут недоступны для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/SecondaryActions/SecondaryActions.tsx`,name:`TypeLiteral`}],description:`Массив вторичных действий для отображения`,name:`actions`,required:!0,tags:{},type:{name:`SecondaryAction[]`}},isActive:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/SecondaryActions/SecondaryActions.tsx`,name:`TypeLiteral`}],description:`Состояние для Collapse`,name:`isActive`,required:!0,tags:{},type:{name:`boolean`}},isDisablePadding:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/SecondaryActions/SecondaryActions.tsx`,name:`TypeLiteral`}],description:`Отключает отступ у действий скрытых`,name:`isDisablePadding`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function W(){return(W=e((()=>{U()})))()}var G,K,q;function J(){return(J=e((()=>{s(),p(),ke(),G=u(`div`,{shouldForwardProp:e=>![`$isShowMoreButton`].includes(e)})`
  display: flex;
  flex-direction: row-reverse;
  gap: ${({theme:e})=>e.spacing(4)};  

  width: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: auto;
    flex-direction: column;
    gap: 0;

    padding: ${({theme:e,$isShowMoreButton:t})=>t?e.spacing(4,4,0):e.spacing(4)};
  }
`,K=u(d,{shouldForwardProp:e=>![`$isActive`].includes(e)})`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;

    width: 100%;
    height: 36px;
    min-height: 36px;
    margin-top: ${({theme:e})=>e.spacing(2)};
    margin-bottom: ${({theme:e})=>e.spacing(4)};
    padding: 0;

    &:hover {
      background-color: unset;
    }
  }
`,q=u(Oe,{shouldForwardProp:e=>![`$isShowSecondaryActions`].includes(e)})`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 50px;
    margin-bottom: ${({theme:e,$isShowSecondaryActions:t})=>t?e.spacing(2):0};
  }
`})))()}var Y,X;function tt(){return(tt=e((()=>{I(),z(),W(),J(),Y=f(),X=e=>{let{isDisabled:t,submitButtonText:n=`Отправить`,secondaryActions:r,submitButtonProps:i}=e,{isActive:a,handleToggle:o,isShowMoreButton:s}=L({secondaryActions:r});return(0,Y.jsxs)(P,{children:[(0,Y.jsxs)(G,{$isShowMoreButton:s,children:[(0,Y.jsx)(q,{size:`large`,disabled:t,...i,children:n}),r&&(0,Y.jsx)(H,{isDisabled:t,actions:r,isActive:a})]}),s&&(0,Y.jsxs)(K,{disabled:t,variant:`text`,onClick:o,$isActive:a,children:[a?`Скрыть`:`Показать`,` другие действия`]})]})};try{X.displayName=`FormPageFooter`,X.__docgenInfo={description:``,displayName:`FormPageFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/FormPageFooter.tsx`,methods:[],props:{isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/FormPageFooter.tsx`,name:`TypeLiteral`}],description:`Если true, кнопки будут недоступны для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},secondaryActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/FormPageFooter.tsx`,name:`TypeLiteral`}],description:`Дополнительные кнопки формы`,name:`secondaryActions`,required:!1,tags:{},type:{name:`SecondaryAction[]`}},submitButtonText:{defaultValue:{value:`'Отправить'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/FormPageFooter.tsx`,name:`TypeLiteral`}],description:`Текст для кнопки отправки формы`,name:`submitButtonText`,required:!1,tags:{default:`'Отправить'`},type:{name:`string`}},submitButtonProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageFooter/FormPageFooter.tsx`,name:`TypeLiteral`}],description:`Параметры для кнопки отправки формы`,name:`submitButtonProps`,required:!1,tags:{},type:{name:`FormPageLayoutSubmitButtonProps`}}},tags:{}}}catch{}})))()}function Z(){return(Z=e((()=>{tt(),z(),W(),J()})))()}var nt;function rt(){return(rt=e((()=>{p(),nt=u.div`
  padding: ${({theme:e})=>e.spacing(0,6,4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(0,4,4)};
  }
`})))()}var Q,$;function it(){return(it=e((()=>{c(),De(),j(),Z(),rt(),Q=f(),$=e=>{let{form:n,children:r,...i}=e,{secondaryActions:a,submitButtonText:o,submitButtonProps:s,...c}=n;return(0,Q.jsx)(k,{...i,formProps:{...n,secondaryActions:a},contentClassname:t({[_.formPageContentSecondaryActions]:!!a}),children:({isDisabled:e})=>(0,Q.jsxs)(Ee,{...c,isDisabled:e,children:[(0,Q.jsx)(nt,{children:r}),(0,Q.jsx)(X,{isDisabled:e,submitButtonText:o,secondaryActions:a,submitButtonProps:s})]})})};try{$.displayName=`FormPageLayout`,$.__docgenInfo={description:`FormPageLayout предназначен для построения страниц с формами.`,displayName:`FormPageLayout`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/FormPageLayout.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},aside:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageAside`,name:`aside`,required:!1,tags:{example:`<PageLayout aside={{
children: 'Боковая панель страницы',
}} />`},type:{name:`ReactNode | PageAsideProps`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageLayoutFooter`,name:`footer`,required:!1,tags:{example:`<PageLayout footer={{
children: 'Нижняя панель страницы',
}} />`},type:{name:`ReactNode | PageLayoutFooterProps`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Конфигурация PageHeader`,name:`header`,required:!1,tags:{example:`<PageLayout header={{
title: 'Заголовок страницы',
description: 'Описание страницы',
}} />`},type:{name:`ReactNode | PageHeaderProps<ElementType, ElementType, ElementType>`}},alert:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Alert страницы`,name:`alert`,required:!1,tags:{},type:{name:`ReactNode`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:`Флаг загрузки данных`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},nextFeatureFlags:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/PageLayout/PageLayout.tsx`,name:`TypeLiteral`}],description:``,name:`nextFeatureFlags`,required:!1,tags:{},type:{name:`{}`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/types.ts`,name:`TypeLiteral`}],description:`Содержимое формы`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},form:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormPageLayout/types.ts`,name:`TypeLiteral`}],description:`Параметры страницы формы`,name:`form`,required:!0,tags:{},type:{name:`FormPageProps<TFormValues>`}}},tags:{}}}catch{}})))()}export{A as _,K as a,H as c,L as d,I as f,k as g,j as h,G as i,U as l,F as m,it as n,q as o,P as p,Z as r,J as s,$ as t,R as u,_ as v,v as y};