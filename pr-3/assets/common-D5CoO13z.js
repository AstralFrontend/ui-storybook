import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,Va as o,Xt as s,ct as c,dt as l,ei as u,en as d,ft as f,j as p,ji as m,lt as h,wn as g,xa as _,yn as v}from"./preview-CpIY8YCq.js";import{a as y,t as ee}from"./Checkbox-BKlk7Vbs.js";import{t as b}from"./Checkbox-DdyzCn9j.js";import{n as te,t as ne}from"./FormHelperText-CyVIq67p.js";import{n as x,t as re}from"./getInertProps-BP0lDiYw.js";import{r as ie,t as ae}from"./useId-Bv4FGVkF.js";import{n as oe,t as se}from"./FormLabel-7Z0BoTQs.js";import{a as S,t as ce}from"./Radio-Jeird9Tw.js";import{t as le}from"./Radio-BRyWRMoL.js";var C;function w(){return(w=e((()=>{a(),C={root:r(`selection-card`),selected:r(`selection-card_selected`),disabled:r(`selection-card_disabled`),error:r(`selection-card_error`),withIcon:r(`selection-card_with-icon`),shapeLarge:r(`selection-card_shape_large`),input:r(`selection-card__input`),icon:r(`selection-card__icon`),indicator:r(`selection-card__indicator`),header:r(`selection-card__header`),content:r(`selection-card__content`),footer:r(`selection-card__footer`)}})))()}var ue;function de(){return(de=e((()=>{b(),s(),le(),v(),w(),ue=m.div`
  --selection-card-selected-border-color: ${({theme:e})=>e.palette.primary.main};

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

  &.${C.shapeLarge}:first-of-type {
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};
  }

  &.${C.shapeLarge}:last-of-type {
    border-bottom-right-radius: ${({theme:e})=>e.shape.large};
    border-bottom-left-radius: ${({theme:e})=>e.shape.large};
  }

  &.${C.error} {
    --selection-card-selected-border-color: ${({theme:e})=>e.palette.error.dark};

    border-right-color: ${({theme:e})=>e.palette.error.dark};
    border-left-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${C.error}:first-of-type {
    border-top-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${C.error}:last-of-type {
    border-bottom-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${C.disabled} {
    --selection-card-selected-border-color: ${({theme:e})=>e.palette.components.border.default};

    cursor: default;

    color: ${({theme:e})=>e.palette.grey[600]};

    background-color: ${({theme:e})=>e.palette.background.element};

    /* Обесцвечиваем только иконку и индикатор: у карточки есть фон, с которым смешивается luminosity */
    .${C.icon}, .${C.indicator} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      mix-blend-mode: luminosity;
    }
  }

  &.${C.selected} {
    z-index: 1;

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      inset: -1px;

      border: 2px solid var(--selection-card-selected-border-color);
      border-radius: inherit;
    }
  }

  &.${C.selected}
    + &.${C.selected}::after {
    border-top: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${C.input}:focus-visible) {
    .${S.icon}, .${y.icon} {
      border-radius: ${({theme:e})=>e.shape.medium};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }

  ${d} {
    &:not(.${C.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }

  .${C.indicator} {
    display: block;

    width: auto;
    height: auto;
  }

  .${S.iconWrapper}, .${y.iconWrapper} {
    height: 20px;
  }

  .${C.header} {
    color: inherit;
  }

  .${C.content}, .${C.footer} {
    margin-top: ${({theme:e})=>e.spacing(3)};
  }
`})))()}function fe(){return(fe=e((()=>{de()})))()}function pe(){return(pe=e((()=>{fe()})))()}var me,he,ge,_e,ve,ye,be;function xe(){return(xe=e((()=>{s(),v(),l(),w(),me=m.div`
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

  &.${C.withIcon} {
    grid-template:
      'icon indicator' auto
      'header header' auto
      'content content' 1fr
      'footer footer' auto
      / minmax(0, 1fr) auto;
  }

  &.${C.shapeLarge} {
    border-radius: ${({theme:e})=>e.shape.large};
  }

  &.${C.selected} {
    --selection-card-border-color: ${({theme:e})=>e.palette.primary.main};

    box-shadow: inset 0 0 0 1px var(--selection-card-border-color);
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${C.input}:focus-visible) {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.focused};
  }

  &.${C.error} {
    --selection-card-border-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${C.disabled} {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};

    cursor: default;

    /* Текст без своего цвета наследует disabled-цвет, свой цвет контента сохраняется */
    color: ${({theme:e})=>e.palette.grey[600]};

    .${C.header} {
      color: inherit;
    }

    /* Обесцвечиваем только иконку и индикатор: у карточки есть фон, с которым смешивается luminosity */
    .${C.icon}, .${C.indicator} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      mix-blend-mode: luminosity;
    }
  }

  ${d} {
    &:not(.${C.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }
`,he=m.input`
  pointer-events: none;

  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: 0;

  opacity: 0;
`,ge=m.div`
  grid-area: icon;

  margin-bottom: ${({theme:e})=>e.spacing(3)};
`,_e=m.div`
  display: flex;
  grid-area: indicator;
  align-items: center;
  align-self: start;
  justify-content: center;

  width: 20px;
  height: 20px;
`,ve=m(f)`
  grid-area: header;
  align-self: center;
`,ye=m.div`
  grid-area: content;

  margin-top: ${({theme:e})=>e.spacing(1)};
`,be=m.div`
  grid-area: footer;

  margin-top: ${({theme:e})=>e.spacing(4)};
`})))()}var T;function E(){return(E=e((()=>{a(),T={cards:r(`selection-card-group__cards`)}})))()}var D,O;function k(){return(k=e((()=>{D=o(),O=(0,D.createContext)(null)})))()}function A(){return(A=e((()=>{k()})))()}var j,M,N;function Se(){return(Se=e((()=>{ne(),se(),v(),E(),j=m.fieldset`
  min-inline-size: 0;
  margin: 0;
  padding: 0;

  border: unset;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    .${T.cards} {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`,M=m(oe)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
  padding: 0;
`,N=m(te)`
  margin-top: ${({theme:e})=>e.spacing(1)};
`})))()}var Ce;function we(){return(we=e((()=>{Ce=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t]})))()}var Te;function Ee(){return(Ee=e((()=>{Te=e=>Array.isArray(e)?e:e===null?[]:[e]})))()}var De,Oe;function ke(){return(ke=e((()=>{De=o(),ae(),we(),Ee(),Oe=e=>{let{children:t,variant:n,columns:r=1,shape:i=`medium`,name:a,disabled:o=!1,isError:s=!1,errorText:c,groupLabel:l,required:u,className:d,inputRef:f,renderIndicator:p}=e,m=ie(),[h,g]=(0,De.useState)(e.selectionMode===`multiple`?[]:null),_=e.value===void 0?h:e.value,v=Te(_),y=e=>v.includes(e),ee={inputType:e.selectionMode===`multiple`?`checkbox`:`radio`,name:a??m,variant:n,shape:i,disabled:o,isError:s,checkIsSelected:y,toggle:t=>{if(e.selectionMode===`multiple`){let n=Ce(v,t);g(n),e.onChange?.(n);return}y(t)||(g(t),e.onChange?.(t))},renderIndicator:p},b=n===`grouped`,te=typeof r==`number`?`repeat(${r}, minmax(0, 1fr))`:r;return{children:t,contextValue:ee,gridColumns:b?`minmax(0, 1fr)`:te,gridSpacing:b?void 0:4,disabled:o,isError:s,errorText:c,groupLabel:l,required:u,className:d,inputRef:f}}})))()}function Ae(){return(Ae=e((()=>{ke()})))()}var P,F;function I(){return(I=e((()=>{c(),E(),A(),Se(),Ae(),P=_(),F=e=>{let{children:t,contextValue:n,gridColumns:r,gridSpacing:i,disabled:a,isError:o,errorText:s,groupLabel:c,required:l,className:u,inputRef:d}=Oe(e);return(0,P.jsxs)(j,{ref:d,className:u,disabled:a,tabIndex:-1,children:[c&&(0,P.jsx)(M,{component:`legend`,required:l,disabled:a,children:c}),(0,P.jsx)(O.Provider,{value:n,children:(0,P.jsx)(h,{container:!0,className:T.cards,columns:r,spacing:i,children:t})}),o&&s&&(0,P.jsx)(N,{error:!0,children:s})]})};try{F.displayName=`SelectionCardGroup`,F.__docgenInfo={description:"Группа карточек выбора `SelectionCard`",displayName:`SelectionCardGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/SelectionCardGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Раскладка карточек:\n- `standalone` — отдельные карточки в сетке с промежутками\n- `grouped` — сгруппированный вертикальный список, замена `RadioCard`",name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`SelectionCardGroupVariant`,value:[{value:`"standalone"`},{value:`"grouped"`}]}},columns:{defaultValue:{value:`1`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:'Число равных колонок или CSS-шаблон `grid-template-columns`.\nРаботает только при `variant="standalone"`.\nНа ширине меньше 900px карточки всегда идут в одну колонку',name:`columns`,required:!1,tags:{default:`1`,example:`columns="repeat(auto-fit, minmax(240px, 1fr))"`},type:{name:`string | number`}},shape:{defaultValue:{value:`'medium'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Скругление всех карточек группы: `medium` — 8px, `large` — 12px",name:`shape`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`SelectionCardGroupShape`,value:[{value:`"medium"`},{value:`"large"`}]}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Атрибут name нативных input карточек`,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Блокирует все карточки группы`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Состояние ошибки всех карточек группы`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки под группой`,name:`errorText`,required:!1,tags:{},type:{name:`ReactNode`}},groupLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Подпись группы, рендерится в `legend`",name:`groupLabel`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Помечает подпись группы обязательной`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`CSS класс для корневого fieldset`,name:`className`,required:!1,tags:{},type:{name:`string`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Ref fieldset для прокрутки react-hook-form к полю с ошибкой`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLFieldSetElement>`}},renderIndicator:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Заменяет радиокнопку или чекбокс всех карточек группы собственным индикатором.\nРежим выбора и доступность не меняются. Смену иконки при наведении необходимо делать через CSS `:hover`",name:`renderIndicator`,required:!1,tags:{},type:{name:`(state: SelectionCardIndicatorState) => ReactNode`}},selectionMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Режим выбора: `single` — одна карточка, `multiple` — несколько",name:`selectionMode`,required:!0,tags:{},type:{name:`enum`,raw:`"multiple" | "single"`,value:[{value:`"multiple"`},{value:`"single"`}]}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Значение выбранной карточки
Значения выбранных карточек`,name:`value`,required:!1,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Срабатывает при выборе карточки
Срабатывает при выборе карточки или снятии выбора`,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})))()}function L(){return(L=e((()=>{I(),A()})))()}var je,Me;function R(){return(R=e((()=>{w(),je=[`button`,`a`,`input`,`select`,`textarea`,`label`,`summary`,`[tabindex]`,`[contenteditable="true"]`,`[role="button"]`,`[role="link"]`,`[role="radio"]`,`[role="checkbox"]`,`[role="switch"]`,`[role="tab"]`,`[role="option"]`,`[role="menuitem"]`,`[role="combobox"]`,`[role="slider"]`,`[role="textbox"]`].join(`, `),Me=(e,t)=>{if(!(e instanceof Element))return!1;if(!t.contains(e))return!0;let n=e.closest(je);return!n||!t.contains(n)?!1:!n.closest(`.${C.indicator}`)}})))()}function Ne(){return(Ne=e((()=>{R()})))()}function Pe(){return(Pe=e((()=>{Ne()})))()}var z,Fe;function Ie(){return(Ie=e((()=>{z=o(),L(),i(),ae(),Pe(),Fe=({value:e,disabled:t=!1})=>{let n=(0,z.useContext)(O),r=ie(),i=(0,z.useRef)(null);(0,z.useEffect)(()=>{n||p.getInstance().logError(`SelectionCard`,`Компонент используется вне SelectionCardGroup и не может быть выбран`)},[]);let a=n?.checkIsSelected(e)??!1,o=t||!!n?.disabled,s=!!n?.isError,c=()=>{o||n?.toggle(e)};return{isSelected:a,isDisabled:o,isError:s,shape:n?.shape,variant:n?.variant,inputType:n?.inputType??`radio`,name:n?.name,headerId:r,inputRef:i,customIndicator:n?.renderIndicator?.({isSelected:a,isDisabled:o,isError:s}),handleToggle:c,handleCardClick:e=>{e.target!==i.current&&(Me(e.target,e.currentTarget)||(c(),i.current?.focus({preventScroll:!0})))}}}})))()}function Le(){return(Le=e((()=>{Ie()})))()}var B,Re,V;function ze(){return(ze=e((()=>{b(),le(),u(),g(),re(),pe(),w(),xe(),Le(),B=_(),Re=n(C.root,{variants:{isSelected:{true:C.selected},isDisabled:{true:C.disabled},isError:{true:C.error},hasIcon:{true:C.withIcon},isLargeShape:{true:C.shapeLarge}}}),V=e=>{let{value:n,header:r,children:i,icon:a,footer:o,className:s}=e,{isSelected:c,isDisabled:l,isError:u,shape:d,variant:f,inputType:p,name:m,headerId:h,inputRef:g,customIndicator:_,handleToggle:v,handleCardClick:y}=Fe(e),b=()=>_||(p===`checkbox`?(0,B.jsx)(ee,{checked:c,disabled:l,isError:u}):(0,B.jsx)(ce,{checked:c,disabled:l,isError:u}));return(0,B.jsxs)(f===`grouped`?ue:me,{className:t(Re({isSelected:c,isDisabled:l,isError:u,hasIcon:!!a,isLargeShape:d===`large`}),s),onClick:y,children:[(0,B.jsx)(he,{ref:g,className:C.input,type:p,name:m,value:n,checked:c,disabled:l,onChange:v,"aria-labelledby":h}),a&&(0,B.jsx)(ge,{className:C.icon,children:a}),(0,B.jsx)(_e,{className:C.indicator,"aria-hidden":!0,...x(!0),children:b()}),(0,B.jsx)(ve,{id:h,className:C.header,variant:`h6`,component:`div`,children:r}),i&&(0,B.jsx)(ye,{className:C.content,...x(l),children:i}),o&&(0,B.jsx)(be,{className:C.footer,...x(l),children:o})]})};try{V.displayName=`SelectionCard`,V.__docgenInfo={description:`Карточка выбора.`,displayName:`SelectionCard`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/SelectionCard.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Значение карточки`,name:`value`,required:!0,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Заголовок`,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Содержимое под заголовком`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Иконка слева`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Нижний блок`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Блокировка карточки`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`CSS класс корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Be,H;function U(){return(U=e((()=>{l(),Be=_(),H=({children:e})=>(0,Be.jsx)(f,{variant:`caption`,color:`textSecondary`,children:e});try{H.displayName=`CardDescription`,H.__docgenInfo={description:``,displayName:`CardDescription`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var Ve,He,Ue,We,Ge;function W(){return(W=e((()=>{v(),Ve=m.div`
  overflow-y: auto;

  width: min(960px, 100%);
  max-height: calc(100vh - 2rem);
  padding: ${({theme:e})=>e.spacing(1)};
`,He=m.div`
  width: min(580px, 100%);
  margin-inline: auto;
`,Ue=m.img`
  width: 20px;
  height: 20px;

  background-color: var(--product-color);
  border-radius: ${({theme:e})=>e.shape.small};
`,We=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: baseline;
  justify-content: space-between;
`,Ge=m.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`})))()}var Ke,G;function K(){return(K=e((()=>{W(),Ke=_(),G=({color:e=`#2e77ff`})=>(0,Ke.jsx)(Ue,{src:`./product-switcher-logo.svg`,alt:``,style:{"--product-color":e}});try{G.displayName=`ProductLogo`,G.__docgenInfo={description:``,displayName:`ProductLogo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,methods:[],props:{color:{defaultValue:{value:`#2e77ff`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var qe,q;function J(){return(J=e((()=>{W(),qe=_(),q=({children:e})=>(0,qe.jsx)(Ve,{children:e});try{q.displayName=`StoryWrapper`,q.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var Y,X;function Z(){return(Z=e((()=>{l(),W(),Y=_(),X=({price:e,period:t})=>(0,Y.jsxs)(We,{children:[(0,Y.jsx)(f,{variant:`h3`,children:e}),t&&(0,Y.jsx)(f,{variant:`caption`,color:`textSecondary`,children:t})]});try{X.displayName=`TariffPrice`,X.__docgenInfo={description:``,displayName:`TariffPrice`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,methods:[],props:{price:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`price`,required:!0,tags:{},type:{name:`string`}},period:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`period`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Je,Ye,Xe,Ze,Qe;function Q(){return(Q=e((()=>{Je=[{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Отчётность в 4 контролирующих органа`,price:`18 700 ₽`,period:`24 мес`}],Ye=[{id:`fns`,title:`ФНС 12 мес`,description:`Отчётность только в налоговую`,price:`4 200 ₽`,period:`12 мес`},{id:`unlimited`,title:`Безлимитный 12 мес`,description:`Отчётность во все контролирующие органы`,price:`24 000 ₽`,period:`12 мес`}],Xe=[{id:`additional`,title:`Старт работы с ЭПД на 2-м и последующих рабочих местах`,description:`Настройка второго и последующих рабочих мест для работы с ЭПД в типовом решении по сниженной цене`,price:`3 500 ₽ / час`},{id:`training`,title:`Обучение и консультация по запуску работы в 1С-ЭПД`,description:`Онлайн-обучение в формате ВКС для команды до 5 человек на типовом решении. Специалист разберёт с группой интерфейс и настройки по всем титулам, работу со справочниками, групповое подписание и мобильное приложение`,price:`5 000 ₽ / час`}],Ze=[{id:`docs-500`,title:`500 документов на 1 год`,price:`4 200 ₽`},{id:`docs-1200`,title:`1 200 документов на 1 год`,price:`9 200 ₽`}],Qe=[{id:`sfr`,title:`СФР`,description:`Сведения о стаже и страховых взносах`},{id:`statistics`,title:`Росстат`,description:`Статистическая отчётность`}]})))()}function $(){return($=e((()=>{U(),K(),J(),Z(),W(),Q()})))()}export{I as C,F as S,H as _,Xe as a,ze as b,X as c,J as d,G as f,W as g,Ge as h,Qe as i,Z as l,He as m,Ye as n,Je as o,K as p,Ze as r,Q as s,$ as t,q as u,U as v,L as x,V as y};