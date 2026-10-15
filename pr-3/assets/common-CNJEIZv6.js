import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,Va as o,Xt as s,ct as c,dt as l,ei as u,en as d,ft as f,j as p,ji as m,lt as h,wn as g,xa as _,yn as v}from"./preview-DApj709n.js";import{a as y,t as ee}from"./Checkbox-Dmte6SWF.js";import{t as b}from"./Checkbox-U_kIFVuF.js";import{n as te,t as ne}from"./FormHelperText-Cib6ldSz.js";import{n as x,t as re}from"./getInertProps-DAlW2EUQ.js";import{r as ie,t as ae}from"./useId-CyV0nrQ0.js";import{n as oe,t as se}from"./FormLabel-D99-RTeN.js";import{a as ce,t as le}from"./Radio-DniSPapv.js";import{t as ue}from"./Radio-RuHDIaxo.js";var S;function C(){return(C=e((()=>{a(),S={root:r(`selection-card`),selected:r(`selection-card_selected`),disabled:r(`selection-card_disabled`),error:r(`selection-card_error`),withIcon:r(`selection-card_with-icon`),shapeLarge:r(`selection-card_shape_large`),input:r(`selection-card__input`),icon:r(`selection-card__icon`),indicator:r(`selection-card__indicator`),header:r(`selection-card__header`),content:r(`selection-card__content`),footer:r(`selection-card__footer`)}})))()}var de;function fe(){return(fe=e((()=>{b(),s(),ue(),v(),C(),de=m.div`
  cursor: pointer;

  position: relative;

  display: grid;
  grid-template:
    'indicator icon' auto
    'indicator header' auto
    'indicator content' auto
    'indicator footer' auto
    / auto minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.spacing(2)};

  padding: ${({theme:e})=>e.spacing(5,4,5,3)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`],{duration:e.transitions.duration.standard})};

  /* Верхнюю рамку рисует нижняя рамка предыдущей карточки, иначе между карточками будет 2px */
  &:not(:first-of-type) {
    border-top: none;
  }

  &:first-of-type {
    border-top-left-radius: ${({theme:e})=>e.shape.medium};
    border-top-right-radius: ${({theme:e})=>e.shape.medium};
  }

  &:last-of-type {
    border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
  }

  &.${S.shapeLarge}:first-of-type {
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};
  }

  &.${S.shapeLarge}:last-of-type {
    border-bottom-right-radius: ${({theme:e})=>e.shape.large};
    border-bottom-left-radius: ${({theme:e})=>e.shape.large};
  }

  &.${S.error} {
    border-right-color: ${({theme:e})=>e.palette.error.dark};
    border-left-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${S.error}:first-of-type {
    border-top-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${S.error}:last-of-type {
    border-bottom-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${S.disabled} {
    cursor: default;

    color: ${({theme:e})=>e.palette.grey[600]};

    background-color: ${({theme:e})=>e.palette.background.element};

    /* Обесцвечиваем только иконку и индикатор: у карточки есть фон, с которым смешивается luminosity */
    .${S.icon}, .${S.indicator} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      mix-blend-mode: luminosity;
    }
  }

  &.${S.selected} {
    z-index: 1;

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      inset: -1px;

      border: 2px solid ${({theme:e})=>e.palette.primary.main};
      border-radius: inherit;
    }
  }

  &.${S.selected} + &.${S.selected}::after {
    border-top: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${S.input}:focus-visible) {
    .${ce.icon}, .${y.icon} {
      border-radius: ${({theme:e})=>e.shape.medium};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }

  ${d} {
    &:not(.${S.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  .${S.indicator} {
    display: block;

    width: auto;
    height: auto;
  }

  .${ce.iconWrapper}, .${y.iconWrapper} {
    height: 20px;
  }

  .${S.header} {
    color: inherit;
  }

  .${S.content}, .${S.footer} {
    margin-top: ${({theme:e})=>e.spacing(3)};
  }
`})))()}function w(){return(w=e((()=>{fe()})))()}function T(){return(T=e((()=>{w()})))()}var E,D,pe,me,he,ge,_e;function ve(){return(ve=e((()=>{s(),v(),l(),C(),E=m.div`
  --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};

  cursor: pointer;

  position: relative;

  display: grid;
  grid-template:
    'header indicator' auto
    'content content' 1fr
    'footer footer' auto
    / minmax(0, 1fr) auto;
  column-gap: ${({theme:e})=>e.spacing(5)};

  padding: ${({theme:e})=>e.spacing(4)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border: 1px solid var(--selection-card-border-color);
  border-radius: ${({theme:e})=>e.shape.medium};

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`,`box-shadow`],{duration:e.transitions.duration.standard})};

  &.${S.withIcon} {
    grid-template:
      'icon indicator' auto
      'header header' auto
      'content content' 1fr
      'footer footer' auto
      / minmax(0, 1fr) auto;
  }

  &.${S.shapeLarge} {
    border-radius: ${({theme:e})=>e.shape.large};
  }

  &.${S.selected} {
    --selection-card-border-color: ${({theme:e})=>e.palette.primary.main};

    box-shadow: inset 0 0 0 1px var(--selection-card-border-color);
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${S.input}:focus-visible) {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.focused};
  }

  &.${S.error} {
    --selection-card-border-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${S.disabled} {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};

    cursor: default;

    /* Текст без своего цвета наследует disabled-цвет, свой цвет контента сохраняется */
    color: ${({theme:e})=>e.palette.grey[600]};

    .${S.header} {
      color: inherit;
    }

    /* Обесцвечиваем только иконку и индикатор: у карточки есть фон, с которым смешивается luminosity */
    .${S.icon}, .${S.indicator} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      mix-blend-mode: luminosity;
    }
  }

  ${d} {
    &:not(.${S.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }
`,D=m.input`
  pointer-events: none;

  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: 0;

  opacity: 0;
`,pe=m.div`
  grid-area: icon;

  margin-bottom: ${({theme:e})=>e.spacing(3)};
`,me=m.div`
  display: flex;
  grid-area: indicator;
  align-items: center;
  align-self: start;
  justify-content: center;

  width: 20px;
  height: 20px;
`,he=m(f)`
  grid-area: header;
  align-self: center;
`,ge=m.div`
  grid-area: content;

  margin-top: ${({theme:e})=>e.spacing(1)};
`,_e=m.div`
  grid-area: footer;

  margin-top: ${({theme:e})=>e.spacing(4)};
`})))()}var O;function k(){return(k=e((()=>{a(),O={cards:r(`selection-card-group__cards`)}})))()}var A,j;function M(){return(M=e((()=>{A=o(),j=(0,A.createContext)(null)})))()}function N(){return(N=e((()=>{M()})))()}var P,F,ye;function be(){return(be=e((()=>{ne(),se(),v(),k(),P=m.fieldset`
  min-inline-size: 0;
  margin: 0;
  padding: 0;

  border: unset;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    .${O.cards} {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`,F=m(oe)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
  padding: 0;
`,ye=m(te)`
  margin-top: ${({theme:e})=>e.spacing(1)};
`})))()}var xe;function Se(){return(Se=e((()=>{xe=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t]})))()}var Ce;function we(){return(we=e((()=>{Ce=e=>Array.isArray(e)?e:e===null?[]:[e]})))()}var Te,Ee;function De(){return(De=e((()=>{Te=o(),ae(),Se(),we(),Ee=e=>{let{children:t,variant:n=`standalone`,columns:r=1,shape:i=`medium`,name:a,disabled:o=!1,isError:s=!1,errorText:c,groupLabel:l,required:u,className:d,inputRef:f,renderIndicator:p}=e,m=ie(),[h,g]=(0,Te.useState)(e.selectionMode===`multiple`?[]:null),_=e.value===void 0?h:e.value,v=Ce(_),y=e=>v.includes(e),ee={inputType:e.selectionMode===`multiple`?`checkbox`:`radio`,name:a??m,variant:n,shape:i,disabled:o,isError:s,checkIsSelected:y,toggle:t=>{if(e.selectionMode===`multiple`){let n=xe(v,t);g(n),e.onChange?.(n);return}y(t)||(g(t),e.onChange?.(t))},renderIndicator:p},b=n===`grouped`,te=typeof r==`number`?`repeat(${r}, minmax(0, 1fr))`:r;return{children:t,contextValue:ee,gridColumns:b?`minmax(0, 1fr)`:te,gridSpacing:b?void 0:4,disabled:o,isError:s,errorText:c,groupLabel:l,required:u,className:d,inputRef:f}}})))()}function Oe(){return(Oe=e((()=>{De()})))()}var I,L;function R(){return(R=e((()=>{c(),k(),N(),be(),Oe(),I=_(),L=e=>{let{children:t,contextValue:n,gridColumns:r,gridSpacing:i,disabled:a,isError:o,errorText:s,groupLabel:c,required:l,className:u,inputRef:d}=Ee(e);return(0,I.jsxs)(P,{ref:d,className:u,disabled:a,tabIndex:-1,children:[c&&(0,I.jsx)(F,{component:`legend`,required:l,disabled:a,children:c}),(0,I.jsx)(j.Provider,{value:n,children:(0,I.jsx)(h,{container:!0,className:O.cards,columns:r,spacing:i,children:t})}),o&&s&&(0,I.jsx)(ye,{error:!0,children:s})]})};try{L.displayName=`SelectionCardGroup`,L.__docgenInfo={description:"Группа карточек выбора `SelectionCard`",displayName:`SelectionCardGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/SelectionCardGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:{value:`'standalone'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Раскладка карточек:\n- `standalone` — отдельные карточки в сетке с промежутками\n- `grouped` — сгруппированный вертикальный список, замена `RadioCard`",name:`variant`,required:!1,tags:{default:`'standalone'`},type:{name:`enum`,raw:`SelectionCardGroupVariant`,value:[{value:`"standalone"`},{value:`"grouped"`}]}},columns:{defaultValue:{value:`1`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:'Число равных колонок или CSS-шаблон `grid-template-columns`.\nРаботает только при `variant="standalone"`.\nНа ширине меньше 900px карточки всегда идут в одну колонку',name:`columns`,required:!1,tags:{default:`1`,example:`columns="repeat(auto-fit, minmax(240px, 1fr))"`},type:{name:`string | number`}},shape:{defaultValue:{value:`'medium'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Скругление всех карточек группы: `medium` — 8px, `large` — 12px",name:`shape`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`SelectionCardGroupShape`,value:[{value:`"medium"`},{value:`"large"`}]}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Атрибут name нативных input карточек`,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Блокирует все карточки группы`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Состояние ошибки всех карточек группы`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки под группой`,name:`errorText`,required:!1,tags:{},type:{name:`ReactNode`}},groupLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Подпись группы, рендерится в `legend`",name:`groupLabel`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Помечает подпись группы обязательной`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`CSS класс для корневого fieldset`,name:`className`,required:!1,tags:{},type:{name:`string`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Ref fieldset для прокрутки react-hook-form к полю с ошибкой`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLFieldSetElement>`}},renderIndicator:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Заменяет радиокнопку или чекбокс всех карточек группы собственным индикатором.\nРежим выбора и доступность не меняются. Смену иконки при наведении необходимо делать через CSS `:hover`",name:`renderIndicator`,required:!1,tags:{},type:{name:`(state: SelectionCardIndicatorState) => ReactNode`}},selectionMode:{defaultValue:{value:`'single'
'single'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Режим выбора: `single` — одна карточка, `multiple` — несколько",name:`selectionMode`,required:!1,tags:{default:`'single'
'single'`},type:{name:`enum`,raw:`"single" | "multiple"`,value:[{value:`"single"`},{value:`"multiple"`}]}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Значение выбранной карточки
Значения выбранных карточек`,name:`value`,required:!1,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Срабатывает при выборе карточки
Срабатывает при выборе карточки или снятии выбора`,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{R(),N()})))()}var ke,Ae;function B(){return(B=e((()=>{C(),ke=[`button`,`a`,`input`,`select`,`textarea`,`label`,`summary`,`[tabindex]`,`[contenteditable="true"]`,`[role="button"]`,`[role="link"]`,`[role="radio"]`,`[role="checkbox"]`,`[role="switch"]`,`[role="tab"]`,`[role="option"]`,`[role="menuitem"]`,`[role="combobox"]`,`[role="slider"]`,`[role="textbox"]`].join(`, `),Ae=(e,t)=>{if(!(e instanceof Element))return!1;if(!t.contains(e))return!0;let n=e.closest(ke);return!n||!t.contains(n)?!1:!n.closest(`.${S.indicator}`)}})))()}function je(){return(je=e((()=>{B()})))()}function Me(){return(Me=e((()=>{je()})))()}var V,Ne;function Pe(){return(Pe=e((()=>{V=o(),z(),i(),ae(),Me(),Ne=({value:e,disabled:t=!1})=>{let n=(0,V.useContext)(j),r=ie(),i=(0,V.useRef)(null);(0,V.useEffect)(()=>{n||p.getInstance().logError(`SelectionCard`,`Компонент используется вне SelectionCardGroup и не может быть выбран`)},[]);let a=n?.checkIsSelected(e)??!1,o=t||!!n?.disabled,s=!!n?.isError,c=()=>{o||n?.toggle(e)};return{isSelected:a,isDisabled:o,isError:s,shape:n?.shape,variant:n?.variant,inputType:n?.inputType??`radio`,name:n?.name,headerId:r,inputRef:i,customIndicator:n?.renderIndicator?.({isSelected:a,isDisabled:o,isError:s}),handleToggle:c,handleCardClick:e=>{e.target!==i.current&&(Ae(e.target,e.currentTarget)||(c(),i.current?.focus({preventScroll:!0})))}}}})))()}function Fe(){return(Fe=e((()=>{Pe()})))()}var H,Ie,U;function Le(){return(Le=e((()=>{b(),ue(),u(),g(),re(),T(),C(),ve(),Fe(),H=_(),Ie=n(S.root,{variants:{isSelected:{true:S.selected},isDisabled:{true:S.disabled},isError:{true:S.error},hasIcon:{true:S.withIcon},isLargeShape:{true:S.shapeLarge}}}),U=e=>{let{value:n,header:r,children:i,icon:a,footer:o,className:s}=e,{isSelected:c,isDisabled:l,isError:u,shape:d,variant:f,inputType:p,name:m,headerId:h,inputRef:g,customIndicator:_,handleToggle:v,handleCardClick:y}=Ne(e),b=()=>_||(p===`checkbox`?(0,H.jsx)(ee,{checked:c,disabled:l,isError:u}):(0,H.jsx)(le,{checked:c,disabled:l,isError:u}));return(0,H.jsxs)(f===`grouped`?de:E,{className:t(Ie({isSelected:c,isDisabled:l,isError:u,hasIcon:!!a,isLargeShape:d===`large`}),s),onClick:y,children:[(0,H.jsx)(D,{ref:g,className:S.input,type:p,name:m,value:n,checked:c,disabled:l,onChange:v,"aria-labelledby":h}),a&&(0,H.jsx)(pe,{className:S.icon,children:a}),(0,H.jsx)(me,{className:S.indicator,"aria-hidden":!0,...x(!0),children:b()}),(0,H.jsx)(he,{id:h,className:S.header,variant:`h6`,component:`div`,children:r}),i&&(0,H.jsx)(ge,{className:S.content,...x(l),children:i}),o&&(0,H.jsx)(_e,{className:S.footer,...x(l),children:o})]})};try{U.displayName=`SelectionCard`,U.__docgenInfo={description:`Карточка выбора.`,displayName:`SelectionCard`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/SelectionCard.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Значение карточки`,name:`value`,required:!0,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Заголовок`,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Содержимое под заголовком`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Иконка слева`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Нижний блок`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Блокировка карточки`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`CSS класс корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Re,W;function G(){return(G=e((()=>{l(),Re=_(),W=({children:e})=>(0,Re.jsx)(f,{variant:`caption`,color:`textSecondary`,children:e});try{W.displayName=`CardDescription`,W.__docgenInfo={description:``,displayName:`CardDescription`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var ze,Be,Ve,He;function K(){return(K=e((()=>{v(),ze=m.div`
  overflow-y: auto;

  width: min(960px, 100%);
  max-height: calc(100vh - 2rem);
  padding: ${({theme:e})=>e.spacing(1)};
`,Be=m.div`
  width: min(580px, 100%);
  margin-inline: auto;
`,Ve=m.img`
  width: 20px;
  height: 20px;

  background-color: var(--product-color);
  border-radius: ${({theme:e})=>e.shape.small};
`,He=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: baseline;
  justify-content: space-between;
`})))()}var Ue,q;function J(){return(J=e((()=>{K(),Ue=_(),q=({color:e=`#2e77ff`})=>(0,Ue.jsx)(Ve,{src:`./product-switcher-logo.svg`,alt:``,style:{"--product-color":e}});try{q.displayName=`ProductLogo`,q.__docgenInfo={description:``,displayName:`ProductLogo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,methods:[],props:{color:{defaultValue:{value:`#2e77ff`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var We,Y;function X(){return(X=e((()=>{K(),We=_(),Y=({children:e})=>(0,We.jsx)(ze,{children:e});try{Y.displayName=`StoryWrapper`,Y.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var Z,Q;function $(){return($=e((()=>{l(),K(),Z=_(),Q=({price:e,period:t})=>(0,Z.jsxs)(He,{children:[(0,Z.jsx)(f,{variant:`h3`,children:e}),t&&(0,Z.jsx)(f,{variant:`caption`,color:`textSecondary`,children:t})]});try{Q.displayName=`TariffPrice`,Q.__docgenInfo={description:``,displayName:`TariffPrice`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,methods:[],props:{price:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`price`,required:!0,tags:{},type:{name:`string`}},period:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`period`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Ge(){return(Ge=e((()=>{G(),J(),X(),$(),K()})))()}export{X as a,Be as c,G as d,U as f,R as g,L as h,Y as i,K as l,z as m,Q as n,q as o,Le as p,$ as r,J as s,Ge as t,W as u};