import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Va as a,Xt as o,ct as s,dt as c,ei as l,en as u,ft as d,ji as f,lt as p,wn as m,xa as h,yn as g}from"./preview-BQGJfZhY.js";import{t as _}from"./Divider-BuUV9vDV.js";import{a as v,t as y}from"./Checkbox-BuVFL8ug.js";import{t as b}from"./Checkbox-DnEGWnIu.js";import{n as x,t as ee}from"./FormHelperText-DyjlbtHS.js";import{n as S,t as te}from"./getInertProps-DYh64mlO.js";import{t as ne}from"./Divider-CiS_kFav.js";import{r as re,t as ie}from"./useId-0fYhwOST.js";import{n as ae,t as oe}from"./FormLabel-BBUBzlcS.js";import{a as se,t as ce}from"./Radio-Djo6l8Mf.js";import{t as le}from"./Radio-Baw6UdXp.js";var C;function w(){return(w=e((()=>{i(),C={root:r(`selection-card`),selected:r(`selection-card_selected`),disabled:r(`selection-card_disabled`),error:r(`selection-card_error`),withIcon:r(`selection-card_with-icon`),shapeMedium:r(`selection-card_shape-medium`),shapeLarge:r(`selection-card_shape-large`),input:r(`selection-card__input`),icon:r(`selection-card__icon`),indicator:r(`selection-card__indicator`),header:r(`selection-card__header`),content:r(`selection-card__content`),footer:r(`selection-card__footer`)}})))()}var T,ue,de,fe,pe,me,he;function E(){return(E=e((()=>{o(),g(),c(),w(),T=f.div`
  cursor: pointer;

  position: relative;

  display: grid;

  background-color: ${({theme:e})=>e.palette.background.default};

  &.${C.shapeMedium} {
    --selection-card-radius: ${({theme:e})=>e.shape.medium};
  }

  &.${C.shapeLarge} {
    --selection-card-radius: ${({theme:e})=>e.shape.large};
  }

  &.${C.disabled} {
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

  ${u} {
    &:not(.${C.disabled}):hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};
    }
  }
`,ue=f.input`
  pointer-events: none;

  position: absolute;

  overflow: hidden;

  width: 1px;
  height: 1px;
  margin: 0;

  opacity: 0;
`,de=f.div`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
`,fe=f.div`
  display: flex;
  align-items: center;
  align-self: start;
  justify-content: center;

  width: 20px;
  height: 20px;
`,pe=f(d)`
  align-self: center;
`,me=f.div`
  margin-top: ${({theme:e})=>e.spacing(1)};
`,he=f.div`
  margin-top: ${({theme:e})=>e.spacing(4)};
`})))()}var ge;function _e(){return(_e=e((()=>{b(),le(),g(),w(),E(),ge=f(T)`
  --selection-card-selected-border-color: ${({theme:e})=>e.palette.primary.main};

  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: repeat(4, auto);
  column-gap: ${({theme:e})=>e.spacing(2)};

  padding: ${({theme:e})=>e.spacing(5,4,5,3)};

  border: 1px solid ${({theme:e})=>e.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`],{duration:e.transitions.duration.standard})};

  /* Верхнюю рамку рисует нижняя рамка предыдущей карточки, иначе между карточками будет 2px */
  &:not(:first-of-type) {
    border-top: none;
  }

  &:first-of-type {
    border-top-left-radius: var(--selection-card-radius);
    border-top-right-radius: var(--selection-card-radius);
  }

  &:last-of-type {
    border-bottom-right-radius: var(--selection-card-radius);
    border-bottom-left-radius: var(--selection-card-radius);
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

    background-color: ${({theme:e})=>e.palette.background.element};
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
    .${se.icon}, .${v.icon} {
      border-radius: ${({theme:e})=>e.shape.medium};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }

  .${C.indicator} {
    display: block;
    grid-column: 1;
    grid-row: 1 / -1;

    width: auto;
    height: auto;
  }

  .${se.iconWrapper}, .${v.iconWrapper} {
    height: 20px;
  }

  .${C.icon} {
    grid-column: 2;
    grid-row: 1;
  }

  .${C.header} {
    grid-column: 2;
    grid-row: 2;

    color: inherit;
  }

  .${C.content} {
    grid-column: 2;
    grid-row: 3;
  }

  .${C.footer} {
    grid-column: 2;
    grid-row: 4;
  }

  .${C.content}, .${C.footer} {
    margin-top: ${({theme:e})=>e.spacing(3)};
  }
`})))()}function ve(){return(ve=e((()=>{_e()})))()}var ye;function be(){return(be=e((()=>{g(),w(),E(),ye=f(T)`
  --selection-card-border-color: ${({theme:e})=>e.palette.components.border.default};

  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto 1fr auto;
  column-gap: ${({theme:e})=>e.spacing(5)};

  padding: ${({theme:e})=>e.spacing(4)};

  border: 1px solid var(--selection-card-border-color);
  border-radius: var(--selection-card-radius);

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`,`box-shadow`],{duration:e.transitions.duration.standard})};

  .${C.indicator} {
    grid-column: 2;
    grid-row: 1;
  }

  .${C.header} {
    grid-column: 1;
    grid-row: 1;
  }

  /* Строки отсчитываются с конца, чтобы не зависеть от наличия иконки */
  .${C.content} {
    grid-column: 1 / -1;
    grid-row: -3;
  }

  .${C.footer} {
    grid-column: 1 / -1;
    grid-row: -2;
  }

  &.${C.withIcon} {
    grid-template-rows: auto auto 1fr auto;

    .${C.icon} {
      grid-column: 1;
      grid-row: 1;
    }

    .${C.header} {
      grid-column: 1 / -1;
      grid-row: 2;
    }
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
  }
`})))()}function xe(){return(xe=e((()=>{be()})))()}function Se(){return(Se=e((()=>{ve(),xe()})))()}var Ce,we,D;function Te(){return(Te=e((()=>{b(),le(),Ce=h(),we={radio:ce,checkbox:y},D=({inputType:e,...t})=>{let n=we[e];return(0,Ce.jsx)(n,{...t})};try{D.displayName=`DefaultIndicator`,D.__docgenInfo={description:"Индикатор выбора по типу input карточки: `Radio` или `Checkbox`",displayName:`DefaultIndicator`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/DefaultIndicator/DefaultIndicator.tsx`,methods:[],props:{inputType:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/DefaultIndicator/types.ts`,name:`TypeLiteral`}],description:``,name:`inputType`,required:!0,tags:{},type:{name:`enum`,raw:`SelectionCardInputType`,value:[{value:`"checkbox"`},{value:`"radio"`}]}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/DefaultIndicator/types.ts`,name:`TypeLiteral`}],description:``,name:`checked`,required:!0,tags:{},type:{name:`boolean`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/DefaultIndicator/types.ts`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!0,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/DefaultIndicator/types.ts`,name:`TypeLiteral`}],description:``,name:`isError`,required:!0,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function O(){return(O=e((()=>{Te()})))()}var Ee;function De(){return(De=e((()=>{Ee=`minmax(0, 1fr)`})))()}var Oe;function ke(){return(ke=e((()=>{Oe=(e,t)=>e.includes(t)?e.filter(e=>e!==t):[...e,t]})))()}var k;function Ae(){return(Ae=e((()=>{ke(),k={emptyValue:[],inputType:`checkbox`,getNextValue:Oe}})))()}var je;function Me(){return(Me=e((()=>{je=(e,t)=>{if(!e.includes(t))return t}})))()}var A;function Ne(){return(Ne=e((()=>{Me(),A={emptyValue:null,inputType:`radio`,getNextValue:je}})))()}var Pe;function Fe(){return(Fe=e((()=>{s(),g(),Pe=f(p)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`})))()}var Ie;function Le(){return(Le=e((()=>{Ie=e=>typeof e==`number`?`repeat(${e}, minmax(0, 1fr))`:e})))()}function j(){return(j=e((()=>{Fe(),Le()})))()}function Re(){return(Re=e((()=>{j()})))()}var ze;function Be(){return(Be=e((()=>{i(),ze={cards:r(`selection-card-group__cards`)}})))()}var Ve,M;function He(){return(He=e((()=>{Ve=a(),M=(0,Ve.createContext)({inputType:`radio`,variant:`standalone`,shape:`medium`,isDisabled:!0,isError:!1,checkIsSelected:()=>!1,toggle:()=>void 0})})))()}function N(){return(N=e((()=>{He()})))()}var Ue,We,Ge;function Ke(){return(Ke=e((()=>{ee(),oe(),g(),Ue=f.fieldset`
  min-inline-size: 0;
  margin: 0;
  padding: 0;

  border: unset;
`,We=f(ae)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};
  padding: 0;
`,Ge=f(x)`
  margin-top: ${({theme:e})=>e.spacing(1)};
`})))()}var P;function qe(){return(qe=e((()=>{P=e=>Array.isArray(e)?e:e===null?[]:[e]})))()}var F;function Je(){return(Je=e((()=>{F=(e,t)=>(n,r)=>{let i=e(n,r);return i!==void 0&&t?.(i),i}})))()}var Ye,Xe;function Ze(){return(Ze=e((()=>{Ye=a(),ie(),De(),Ae(),Ne(),j(),qe(),Je(),Xe=e=>{let{children:t,variant:n,columns:r=1,shape:i=`medium`,name:a,disabled:o=!1,isError:s=!1,errorText:c,groupLabel:l,required:u,className:d,inputRef:f,renderIndicator:p}=e,m=re(),{emptyValue:h,inputType:g}=e.selectionMode===`multiple`?k:A,_=e.selectionMode===`multiple`?F(k.getNextValue,e.onChange):F(A.getNextValue,e.onChange),[v,y]=(0,Ye.useState)(h),b=e.value===void 0?v:e.value,x=P(b),ee={inputType:g,name:a??m,variant:n,shape:i,isDisabled:o,isError:s,checkIsSelected:e=>x.includes(e),toggle:e=>{let t=_(x,e);t!==void 0&&y(t)},renderIndicator:p},{gridColumns:S,gridSpacing:te}={standalone:{gridColumns:Ie(r),gridSpacing:4},grouped:{gridColumns:Ee}}[n];return{children:t,variant:n,contextValue:ee,gridColumns:S,gridSpacing:te,disabled:o,isError:s,errorText:c,groupLabel:l,required:u,className:d,inputRef:f}}})))()}function Qe(){return(Qe=e((()=>{Ze()})))()}var I,$e,L;function R(){return(R=e((()=>{s(),Re(),Be(),N(),Ke(),Qe(),I=h(),$e={standalone:Pe,grouped:p},L=e=>{let{children:t,variant:n,contextValue:r,gridColumns:i,gridSpacing:a,disabled:o,isError:s,errorText:c,groupLabel:l,required:u,className:d,inputRef:f}=Xe(e),p=$e[n];return(0,I.jsxs)(Ue,{ref:f,className:d,disabled:o,tabIndex:-1,children:[l&&(0,I.jsx)(We,{component:`legend`,required:u,disabled:o,children:l}),(0,I.jsx)(M.Provider,{value:r,children:(0,I.jsx)(p,{container:!0,className:ze.cards,columns:i,spacing:a,children:t})}),s&&c&&(0,I.jsx)(Ge,{error:!0,children:c})]})};try{L.displayName=`SelectionCardGroup`,L.__docgenInfo={description:"Группа карточек выбора `SelectionCard`",displayName:`SelectionCardGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/SelectionCardGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Раскладка карточек:\n- `standalone` — отдельные карточки в сетке с промежутками\n- `grouped` — сгруппированный вертикальный список, замена `RadioCard`",name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`SelectionCardGroupVariant`,value:[{value:`"standalone"`},{value:`"grouped"`}]}},columns:{defaultValue:{value:`1`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:'Число равных колонок или CSS-шаблон `grid-template-columns`.\nРаботает только при `variant="standalone"`.\nНа ширине меньше 900px карточки всегда идут в одну колонку',name:`columns`,required:!1,tags:{default:`1`,example:`columns="repeat(auto-fit, minmax(240px, 1fr))"`},type:{name:`string | number`}},shape:{defaultValue:{value:`'medium'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Скругление всех карточек группы: `medium` — 8px, `large` — 12px",name:`shape`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`SelectionCardGroupShape`,value:[{value:`"medium"`},{value:`"large"`}]}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Атрибут name нативных input карточек`,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Блокирует все карточки группы`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Состояние ошибки всех карточек группы`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки под группой`,name:`errorText`,required:!1,tags:{},type:{name:`ReactNode`}},groupLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Подпись группы, рендерится в `legend`",name:`groupLabel`,required:!1,tags:{},type:{name:`string`}},required:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Помечает подпись группы обязательной`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`CSS класс для корневого fieldset`,name:`className`,required:!1,tags:{},type:{name:`string`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Ref fieldset для прокрутки react-hook-form к полю с ошибкой`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLFieldSetElement>`}},renderIndicator:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Заменяет радиокнопку или чекбокс всех карточек группы собственным индикатором.\nРежим выбора и доступность не меняются. Смену иконки при наведении необходимо делать через CSS `:hover`",name:`renderIndicator`,required:!1,tags:{},type:{name:`(state: SelectionCardIndicatorState) => ReactNode`}},selectionMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Режим выбора: `single` — одна карточка, `multiple` — несколько",name:`selectionMode`,required:!0,tags:{},type:{name:`enum`,raw:`"multiple" | "single"`,value:[{value:`"multiple"`},{value:`"single"`}]}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Значение выбранной карточки
Значения выбранных карточек`,name:`value`,required:!1,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Срабатывает при выборе карточки
Срабатывает при выборе карточки или снятии выбора`,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})))()}function z(){return(z=e((()=>{R(),N()})))()}var B,et;function tt(){return(tt=e((()=>{B=a(),z(),ie(),et=({value:e,disabled:t=!1})=>{let n=(0,B.useContext)(M),r=re(),i=(0,B.useRef)(null),a=n.checkIsSelected(e),o=t||n.isDisabled,{isError:s}=n,c=()=>{o||n.toggle(e)};return{isSelected:a,isDisabled:o,isError:s,variant:n.variant,inputType:n.inputType,name:n.name,shape:n.shape,headerId:r,inputRef:i,customIndicator:n.renderIndicator?.({isSelected:a,isDisabled:o,isError:s}),handleToggle:c,handleCardClick:e=>{e.target!==i.current&&(e.target instanceof Node&&!e.currentTarget.contains(e.target)||(c(),i.current?.focus({preventScroll:!0})))}}}})))()}function nt(){return(nt=e((()=>{tt()})))()}var V,rt,it,H;function at(){return(at=e((()=>{l(),m(),te(),Se(),w(),O(),E(),nt(),V=h(),rt=n(C.root,{variants:{isSelected:{true:C.selected},isDisabled:{true:C.disabled},isError:{true:C.error},hasIcon:{true:C.withIcon},shape:{medium:C.shapeMedium,large:C.shapeLarge}}}),it={standalone:ye,grouped:ge},H=e=>{let{value:n,header:r,children:i,icon:a,footer:o,className:s}=e,{isSelected:c,isDisabled:l,isError:u,variant:d,inputType:f,name:p,shape:m,headerId:h,inputRef:g,customIndicator:_,handleToggle:v,handleCardClick:y}=et(e),b=it[d];return(0,V.jsxs)(b,{className:t(rt({isSelected:c,isDisabled:l,isError:u,hasIcon:!!a,shape:m}),s),onClick:y,children:[(0,V.jsx)(ue,{ref:g,className:C.input,type:f,name:p,value:n,checked:c,disabled:l,onChange:v,"aria-labelledby":h}),a&&(0,V.jsx)(de,{className:C.icon,children:a}),(0,V.jsx)(fe,{className:C.indicator,"aria-hidden":!0,...S(!0),children:_??(0,V.jsx)(D,{inputType:f,checked:c,disabled:l,isError:u})}),(0,V.jsx)(pe,{id:h,className:C.header,variant:`h6`,component:`div`,children:r}),i&&(0,V.jsx)(me,{className:C.content,...S(l),children:i}),o&&(0,V.jsx)(he,{className:C.footer,...S(l),children:o})]})};try{H.displayName=`SelectionCard`,H.__docgenInfo={description:`Карточка выбора.`,displayName:`SelectionCard`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/SelectionCard.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Значение карточки`,name:`value`,required:!0,tags:{},type:{name:`string`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Заголовок`,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Содержимое под заголовком`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Иконка слева`,name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Нижний блок`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`Блокировка карточки`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/types.ts`,name:`TypeLiteral`}],description:`CSS класс корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ot,U;function W(){return(W=e((()=>{c(),ot=h(),U=({children:e})=>(0,ot.jsx)(d,{variant:`caption`,color:`textSecondary`,children:e});try{U.displayName=`CardDescription`,U.__docgenInfo={description:``,displayName:`CardDescription`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/CardDescription.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var st,ct,lt,ut,dt,ft;function G(){return(G=e((()=>{ne(),g(),st=f.div`
  overflow-y: auto;

  width: min(960px, 100%);
  max-height: calc(100vh - 2rem);
  padding: ${({theme:e})=>e.spacing(1)};
`,ct=f.div`
  width: min(580px, 100%);
  margin-inline: auto;
`,lt=f.img`
  width: 20px;
  height: 20px;

  background-color: var(--product-color);
  border-radius: ${({theme:e})=>e.shape.small};
`,ut=f.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: baseline;
  justify-content: space-between;
`,dt=f.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`,ft=f(_)`
  grid-column: 1 / -1;
`})))()}var pt,K;function q(){return(q=e((()=>{G(),pt=h(),K=({color:e=`#2e77ff`})=>(0,pt.jsx)(lt,{src:`./product-switcher-logo.svg`,alt:``,style:{"--product-color":e}});try{K.displayName=`ProductLogo`,K.__docgenInfo={description:``,displayName:`ProductLogo`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,methods:[],props:{color:{defaultValue:{value:`#2e77ff`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/ProductLogo.tsx`,name:`TypeLiteral`}],description:``,name:`color`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var mt,J;function Y(){return(Y=e((()=>{G(),mt=h(),J=({children:e})=>(0,mt.jsx)(st,{children:e});try{J.displayName=`StoryWrapper`,J.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var X,Z;function Q(){return(Q=e((()=>{c(),G(),X=h(),Z=({price:e,period:t})=>(0,X.jsxs)(ut,{children:[(0,X.jsx)(d,{variant:`h3`,children:e}),t&&(0,X.jsx)(d,{variant:`caption`,color:`textSecondary`,children:t})]});try{Z.displayName=`TariffPrice`,Z.__docgenInfo={description:``,displayName:`TariffPrice`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,methods:[],props:{price:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`price`,required:!0,tags:{},type:{name:`string`}},period:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/common/TariffPrice.tsx`,name:`TypeLiteral`}],description:``,name:`period`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var ht,gt,_t,vt;function $(){return($=e((()=>{ht=[{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Отчётность в 4 контролирующих органа`,price:`18 700 ₽`,period:`24 мес`}],gt=[{id:`additional`,title:`Старт работы с ЭПД на 2-м и последующих рабочих местах`,description:`Настройка второго и последующих рабочих мест для работы с ЭПД в типовом решении по сниженной цене`,price:`3 500 ₽ / час`},{id:`training`,title:`Обучение и консультация по запуску работы в 1С-ЭПД`,description:`Онлайн-обучение в формате ВКС для команды до 5 человек на типовом решении. Специалист разберёт с группой интерфейс и настройки по всем титулам, работу со справочниками, групповое подписание и мобильное приложение`,price:`5 000 ₽ / час`}],_t=[{id:`docs-500`,title:`500 документов на 1 год`,price:`4 200 ₽`},{id:`docs-1200`,title:`1 200 документов на 1 год`,price:`9 200 ₽`}],vt=[{id:`sfr`,title:`СФР`,description:`Сведения о стаже и страховых взносах`},{id:`statistics`,title:`Росстат`,description:`Статистическая отчётность`}]})))()}function yt(){return(yt=e((()=>{W(),q(),Y(),Q(),G(),$()})))()}export{R as C,L as S,U as _,ht as a,at as b,Q as c,K as d,q as f,G as g,ft as h,gt as i,J as l,dt as m,_t as n,$ as o,ct as p,vt as r,Z as s,yt as t,Y as u,W as v,z as x,H as y};