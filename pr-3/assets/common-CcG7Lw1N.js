import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,Va as o,Xt as s,ct as c,dt as l,ei as u,en as d,ft as f,j as p,ji as m,lt as h,wn as g,xa as _,yn as v}from"./preview-Cav_CXYC.js";import{a as y,t as b}from"./Checkbox-C2PmFwf5.js";import{t as x}from"./Checkbox-j_cMSq--.js";import{n as S,t as ee}from"./FormHelperText-1pjr9yfZ.js";import{n as C,t as te}from"./getInertProps-BLw03jzQ.js";import{r as ne,t as re}from"./useId-qLronLFL.js";import{n as ie,t as ae}from"./FormLabel-D2JuyPMt.js";import{a as oe,t as se}from"./Radio-Cir-L5Kz.js";import{t as ce}from"./Radio-B18rDtRq.js";var w;function T(){return(T=e((()=>{a(),w={root:r(`selection-card`),selected:r(`selection-card_selected`),disabled:r(`selection-card_disabled`),error:r(`selection-card_error`),withIcon:r(`selection-card_with-icon`),shapeLarge:r(`selection-card_shape_large`),input:r(`selection-card__input`),icon:r(`selection-card__icon`),indicator:r(`selection-card__indicator`),header:r(`selection-card__header`),content:r(`selection-card__content`),footer:r(`selection-card__footer`)}})))()}var E,le,ue,de,fe,D,pe;function O(){return(O=e((()=>{s(),v(),l(),T(),E=m.div`
  cursor: pointer;

  position: relative;

  display: grid;

  background-color: ${({theme:e})=>e.palette.background.default};

  &.${w.disabled} {
    cursor: default;

    /* Текст без своего цвета наследует disabled-цвет, свой цвет контента сохраняется */
    color: ${({theme:e})=>e.palette.grey[600]};

    .${w.header} {
      color: inherit;
    }

    /* Обесцвечиваем только иконку и индикатор: у карточки есть фон, с которым смешивается luminosity */
    .${w.icon}, .${w.indicator} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      mix-blend-mode: luminosity;
    }
  }

  ${d} {
    &:not(.${w.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }
`,le=m.input`
  pointer-events: none;

  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: 0;

  opacity: 0;
`,ue=m.div`
  grid-area: icon;

  margin-bottom: ${({theme:e})=>e.spacing(3)};
`,de=m.div`
  display: flex;
  grid-area: indicator;
  align-items: center;
  align-self: start;
  justify-content: center;

  width: 20px;
  height: 20px;
`,fe=m(f)`
  grid-area: header;
  align-self: center;
`,D=m.div`
  grid-area: content;

  margin-top: ${({theme:e})=>e.spacing(1)};
`,pe=m.div`
  grid-area: footer;

  margin-top: ${({theme:e})=>e.spacing(4)};
`})))()}var me;function he(){return(he=e((()=>{x(),ce(),v(),T(),O(),me=m(E)`
  --selection-card-selected-border-color: ${({theme:e})=>e.palette.primary.main};

  grid-template:
    'indicator icon' auto
    'indicator header' auto
    'indicator content' auto
    'indicator footer' auto
    / auto minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.spacing(2)};

  padding: ${({theme:e})=>e.spacing(5,4,5,3)};

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

  &.${w.shapeLarge}:first-of-type {
    border-top-left-radius: ${({theme:e})=>e.shape.large};
    border-top-right-radius: ${({theme:e})=>e.shape.large};
  }

  &.${w.shapeLarge}:last-of-type {
    border-bottom-right-radius: ${({theme:e})=>e.shape.large};
    border-bottom-left-radius: ${({theme:e})=>e.shape.large};
  }

  &.${w.error} {
    --selection-card-selected-border-color: ${({theme:e})=>e.palette.error.dark};

    border-right-color: ${({theme:e})=>e.palette.error.dark};
    border-left-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${w.error}:first-of-type {
    border-top-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${w.error}:last-of-type {
    border-bottom-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${w.disabled} {
    --selection-card-selected-border-color: ${({theme:e})=>e.palette.components.border.default};

    background-color: ${({theme:e})=>e.palette.background.element};
  }

  &.${w.selected} {
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

  &.${w.selected}
    + &.${w.selected}::after {
    border-top: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${w.input}:focus-visible) {
    .${oe.icon}, .${y.icon} {
      border-radius: ${({theme:e})=>e.shape.medium};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }

  .${w.indicator} {
    display: block;

    width: auto;
    height: auto;
  }

  .${oe.iconWrapper}, .${y.iconWrapper} {
    height: 20px;
  }

  .${w.header} {
    color: inherit;
  }

  .${w.content}, .${w.footer} {
    margin-top: ${({theme:e})=>e.spacing(3)};
  }
`})))()}function ge(){return(ge=e((()=>{he()})))()}var _e;function ve(){return(ve=e((()=>{v(),T(),O(),_e=m(E)`
  --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};

  grid-template:
    'header indicator' auto
    'content content' 1fr
    'footer footer' auto
    / minmax(0, 1fr) auto;
  column-gap: ${({theme:e})=>e.spacing(5)};

  padding: ${({theme:e})=>e.spacing(4)};

  border: 1px solid var(--selection-card-border-color);
  border-radius: ${({theme:e})=>e.shape.medium};

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`,`box-shadow`],{duration:e.transitions.duration.standard})};

  &.${w.withIcon} {
    grid-template:
      'icon indicator' auto
      'header header' auto
      'content content' 1fr
      'footer footer' auto
      / minmax(0, 1fr) auto;
  }

  &.${w.shapeLarge} {
    border-radius: ${({theme:e})=>e.shape.large};
  }

  &.${w.selected} {
    --selection-card-border-color: ${({theme:e})=>e.palette.primary.main};

    box-shadow: inset 0 0 0 1px var(--selection-card-border-color);
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  &:has(.${w.input}:focus-visible) {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.focused};
  }

  &.${w.error} {
    --selection-card-border-color: ${({theme:e})=>e.palette.error.dark};
  }

  &.${w.disabled} {
    --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};
  }
`})))()}function ye(){return(ye=e((()=>{ve()})))()}function be(){return(be=e((()=>{ge(),ye()})))()}var k;function A(){return(A=e((()=>{a(),k={cards:r(`selection-card-group__cards`)}})))()}var j,M;function N(){return(N=e((()=>{j=o(),M=(0,j.createContext)(null)})))()}function P(){return(P=e((()=>{N()})))()}var xe,Se,Ce;function we(){return(we=e((()=>{ee(),ae(),v(),A(),xe=m.fieldset`
  min-inline-size: 0;
  margin: 0;
  padding: 0;

  border: unset;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    .${k.cards} {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`,Se=m(ie)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
  padding: 0;
`,Ce=m(S)`
  margin-top: ${({theme:e})=>e.spacing(1)};
`})))()}var Te;function Ee(){return(Ee=e((()=>{Te=`minmax(0, 1fr)`})))()}var De,Oe;function ke(){return(ke=e((()=>{De=[],Oe=`checkbox`})))()}var Ae;function je(){return(je=e((()=>{Ae=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t]})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`radio`})))()}var Pe;function Fe(){return(Fe=e((()=>{Pe=(e,t)=>{if(!e.includes(t))return t}})))()}var Ie;function Le(){return(Le=e((()=>{Ie=e=>typeof e==`number`?`repeat(${e}, minmax(0, 1fr))`:e})))()}var Re;function ze(){return(ze=e((()=>{Re=e=>Array.isArray(e)?e:e===null?[]:[e]})))()}var Be,F;function Ve(){return(Ve=e((()=>{Be=o(),re(),Ee(),Le(),ke(),Ne(),Fe(),je(),ze(),F=e=>{let{children:t,variant:n,columns:r=1,shape:i=`medium`,name:a,disabled:o=!1,isError:s=!1,errorText:c,groupLabel:l,required:u,className:d,inputRef:f,renderIndicator:p}=e,m=ne(),h=e.selectionMode===`multiple`,[g,_]=(0,Be.useState)(h?De:null),v=e.value===void 0?g:e.value,y=Re(v),b={inputType:h?Oe:Me,name:a??m,variant:n,shape:i,disabled:o,isError:s,checkIsSelected:e=>y.includes(e),toggle:t=>{if(h){let n=Ae(y,t);_(n),e.onChange?.(n);return}let n=Pe(y,t);n!==void 0&&(_(n),e.onChange?.(n))},renderIndicator:p},{gridColumns:x,gridSpacing:S}={standalone:{gridColumns:Ie(r),gridSpacing:4},grouped:{gridColumns:Te}}[n];return{children:t,contextValue:b,gridColumns:x,gridSpacing:S,disabled:o,isError:s,errorText:c,groupLabel:l,required:u,className:d,inputRef:f}}})))()}function He(){return(He=e((()=>{Ve()})))()}var I,L;function R(){return(R=e((()=>{c(),A(),P(),we(),He(),I=_(),L=e=>{let{children:t,contextValue:n,gridColumns:r,gridSpacing:i,disabled:a,isError:o,errorText:s,groupLabel:c,required:l,className:u,inputRef:d}=F(e);return(0,I.jsxs)(xe,{ref:d,className:u,disabled:a,tabIndex:-1,children:[c&&(0,I.jsx)(Se,{component:`legend`,required:l,disabled:a,children:c}),(0,I.jsx)(M.Provider,{value:n,children:(0,I.jsx)(h,{container:!0,className:k.cards,columns:r,spacing:i,children:t})}),o&&s&&(0,I.jsx)(Ce,{error:!0,children:s})]})};try{L.displayName=`SelectionCardGroup`,L.__docgenInfo={description:"Группа карточек выбора `SelectionCard`",displayName:`SelectionCardGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/SelectionCardGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Раскладка карточек:\n- `standalone` — отдельные карточки в сетке с промежутками\n- `grouped` — сгруппированный вертикальный список, замена `RadioCard`",name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`SelectionCardGroupVariant`,value:[{value:`"standalone"`},{value:`"grouped"`}]}},columns:{defaultValue:{value:`1`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:'Число равных колонок или CSS-шаблон `grid-template-columns`.\nРаботает только при `variant="standalone"`.\nНа ширине меньше 900px карточки всегда идут в одну колонку',name:`columns`,required:!1,tags:{default:`1`,example:`columns="repeat(auto-fit, minmax(240px, 1fr))"`},type:{name:`string | number`}},shape:{defaultValue:{value:`'medium'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Скругление всех карточек группы: `medium` — 8px, `large` — 12px",name:`shape`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`SelectionCardGroupShape`,value:[{value:`"medium"`},{value:`"large"`}]}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Атрибут name нативных input карточек`,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Блокирует все карточки группы`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Состояние ошибки всех карточек группы`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки под группой`,name:`errorText`,required:!1,tags:{},type:{name:`ReactNode`}},groupLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Подпись группы, рендерится в `legend`",name:`groupLabel`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Помечает подпись группы обязательной`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`CSS класс для корневого fieldset`,name:`className`,required:!1,tags:{},type:{name:`string`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Ref fieldset для прокрутки react-hook-form к полю с ошибкой`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLFieldSetElement>`}},renderIndicator:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Заменяет радиокнопку или чекбокс всех карточек группы собственным индикатором.\nРежим выбора и доступность не меняются. Смену иконки при наведении необходимо делать через CSS `:hover`",name:`renderIndicator`,required:!1,tags:{},type:{name:`(state: SelectionCardIndicatorState) => ReactNode`}},selectionMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Режим выбора: `single` — одна карточка, `multiple` — несколько",name:`selectionMode`,required:!0,tags:{},type:{name:`enum`,raw:`"multiple" | "single"`,value:[{value:`"multiple"`},{value:`"single"`}]}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Значение выбранной карточки
Значения выбранных карточек`,name:`value`,required:!1,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Срабатывает при выборе карточки
Срабатывает при выборе карточки или снятии выбора`,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{R(),P()})))()}var Ue,We;function Ge(){return(Ge=e((()=>{T(),Ue=[`button`,`a`,`input`,`select`,`textarea`,`label`,`summary`,`[tabindex]`,`[contenteditable="true"]`,`[role="button"]`,`[role="link"]`,`[role="radio"]`,`[role="checkbox"]`,`[role="switch"]`,`[role="tab"]`,`[role="option"]`,`[role="menuitem"]`,`[role="combobox"]`,`[role="slider"]`,`[role="textbox"]`].join(`, `),We=(e,t)=>{if(!(e instanceof Element))return!1;if(!t.contains(e))return!0;let n=e.closest(Ue);return!n||!t.contains(n)?!1:!n.closest(`.${w.indicator}`)}})))()}function Ke(){return(Ke=e((()=>{Ge()})))()}function qe(){return(qe=e((()=>{Ke()})))()}var B,Je;function Ye(){return(Ye=e((()=>{B=o(),z(),i(),re(),qe(),Je=({value:e,disabled:t=!1})=>{let n=(0,B.useContext)(M),r=ne(),i=(0,B.useRef)(null);(0,B.useEffect)(()=>{n||p.getInstance().logError(`SelectionCard`,`Компонент используется вне SelectionCardGroup и не будет отображён`)},[]);let a=n?.checkIsSelected(e)??!1,o=t||!!n?.disabled,s=!!n?.isError,c=()=>{o||n?.toggle(e)};return{isSelected:a,isDisabled:o,isError:s,isOutsideGroup:!n,variant:n?.variant??`standalone`,inputType:n?.inputType??`radio`,name:n?.name,isLargeShape:n?.shape===`large`,headerId:r,inputRef:i,customIndicator:n?.renderIndicator?.({isSelected:a,isDisabled:o,isError:s}),handleToggle:c,handleCardClick:e=>{e.target!==i.current&&(We(e.target,e.currentTarget)||(c(),i.current?.focus({preventScroll:!0})))}}}})))()}function Xe(){return(Xe=e((()=>{Ye()})))()}var V,Ze,Qe,$e,H;function et(){return(et=e((()=>{x(),ce(),u(),g(),te(),be(),T(),O(),Xe(),V=_(),Ze=n(w.root,{variants:{isSelected:{true:w.selected},isDisabled:{true:w.disabled},isError:{true:w.error},hasIcon:{true:w.withIcon},isLargeShape:{true:w.shapeLarge}}}),Qe={standalone:_e,grouped:me},$e={radio:se,checkbox:b},H=e=>{let{value:n,header:r,children:i,icon:a,footer:o,className:s}=e,{isSelected:c,isDisabled:l,isError:u,isOutsideGroup:d,variant:f,inputType:p,name:m,isLargeShape:h,headerId:g,inputRef:_,customIndicator:v,handleToggle:y,handleCardClick:b}=Je(e);if(d)return null;let x=Qe[f],S=$e[p];return(0,V.jsxs)(x,{className:t(Ze({isSelected:c,isDisabled:l,isError:u,hasIcon:!!a,isLargeShape:h}),s),onClick:b,children:[(0,V.jsx)(le,{ref:_,className:w.input,type:p,name:m,value:n,checked:c,disabled:l,onChange:y,"aria-labelledby":g}),a&&(0,V.jsx)(ue,{className:w.icon,children:a}),(0,V.jsx)(de,{className:w.indicator,"aria-hidden":!0,...C(!0),children:v??(0,V.jsx)(S,{checked:c,disabled:l,isError:u})}),(0,V.jsx)(fe,{id:g,className:w.header,variant:`h6`,component:`div`,children:r}),i&&(0,V.jsx)(D,{className:w.content,...C(l),children:i}),o&&(0,V.jsx)(pe,{className:w.footer,...C(l),children:o})]})};try{H.displayName=`SelectionCard`,H.__docgenInfo={description:`Карточка выбора.`,displayName:`SelectionCard`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/SelectionCard.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Значение карточки`,name:`value`,required:!0,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Заголовок`,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Содержимое под заголовком`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Иконка слева`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Нижний блок`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Блокировка карточки`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`CSS класс корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var tt,U;function W(){return(W=e((()=>{l(),tt=_(),U=({children:e})=>(0,tt.jsx)(f,{variant:`caption`,color:`textSecondary`,children:e});try{U.displayName=`CardDescription`,U.__docgenInfo={description:``,displayName:`CardDescription`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var nt,rt,it,at,ot;function G(){return(G=e((()=>{v(),nt=m.div`
  overflow-y: auto;

  width: min(960px, 100%);
  max-height: calc(100vh - 2rem);
  padding: ${({theme:e})=>e.spacing(1)};
`,rt=m.div`
  width: min(580px, 100%);
  margin-inline: auto;
`,it=m.img`
  width: 20px;
  height: 20px;

  background-color: var(--product-color);
  border-radius: ${({theme:e})=>e.shape.small};
`,at=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: baseline;
  justify-content: space-between;
`,ot=m.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`})))()}var st,K;function q(){return(q=e((()=>{G(),st=_(),K=({color:e=`#2e77ff`})=>(0,st.jsx)(it,{src:`./product-switcher-logo.svg`,alt:``,style:{"--product-color":e}});try{K.displayName=`ProductLogo`,K.__docgenInfo={description:``,displayName:`ProductLogo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,methods:[],props:{color:{defaultValue:{value:`#2e77ff`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ct,J;function Y(){return(Y=e((()=>{G(),ct=_(),J=({children:e})=>(0,ct.jsx)(nt,{children:e});try{J.displayName=`StoryWrapper`,J.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var X,Z;function Q(){return(Q=e((()=>{l(),G(),X=_(),Z=({price:e,period:t})=>(0,X.jsxs)(at,{children:[(0,X.jsx)(f,{variant:`h3`,children:e}),t&&(0,X.jsx)(f,{variant:`caption`,color:`textSecondary`,children:t})]});try{Z.displayName=`TariffPrice`,Z.__docgenInfo={description:``,displayName:`TariffPrice`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,methods:[],props:{price:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`price`,required:!0,tags:{},type:{name:`string`}},period:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`period`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var lt,ut,dt,ft,pt;function $(){return($=e((()=>{lt=[{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Отчётность в 4 контролирующих органа`,price:`18 700 ₽`,period:`24 мес`}],ut=[{id:`fns`,title:`ФНС 12 мес`,description:`Отчётность только в налоговую`,price:`4 200 ₽`,period:`12 мес`},{id:`unlimited`,title:`Безлимитный 12 мес`,description:`Отчётность во все контролирующие органы`,price:`24 000 ₽`,period:`12 мес`}],dt=[{id:`additional`,title:`Старт работы с ЭПД на 2-м и последующих рабочих местах`,description:`Настройка второго и последующих рабочих мест для работы с ЭПД в типовом решении по сниженной цене`,price:`3 500 ₽ / час`},{id:`training`,title:`Обучение и консультация по запуску работы в 1С-ЭПД`,description:`Онлайн-обучение в формате ВКС для команды до 5 человек на типовом решении. Специалист разберёт с группой интерфейс и настройки по всем титулам, работу со справочниками, групповое подписание и мобильное приложение`,price:`5 000 ₽ / час`}],ft=[{id:`docs-500`,title:`500 документов на 1 год`,price:`4 200 ₽`},{id:`docs-1200`,title:`1 200 документов на 1 год`,price:`9 200 ₽`}],pt=[{id:`sfr`,title:`СФР`,description:`Сведения о стаже и страховых взносах`},{id:`statistics`,title:`Росстат`,description:`Статистическая отчётность`}]})))()}function mt(){return(mt=e((()=>{W(),q(),Y(),Q(),G(),$()})))()}export{R as C,L as S,U as _,dt as a,et as b,Z as c,Y as d,K as f,G as g,ot as h,pt as i,Q as l,rt as m,ut as n,lt as o,q as p,ft as r,$ as s,mt as t,J as u,W as v,z as x,H as y};