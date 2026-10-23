import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,dt as a,ei as o,ft as s,it as c,ji as l,rt as u,wn as d,ya as f,yn as p}from"./preview-BXnWBjdd.js";import{n as m,t as h}from"./useViewportType-CiMYUal8.js";import{n as g,t as _}from"./CrossOutlineMd-B6yc2UFy.js";import{t as v}from"./NewPopover-DSU3jnGz.js";import{t as y}from"./NewPopover-CSrxqbkx.js";var b;function x(){return(x=e((()=>{i(),b={root:r(`hint-popover`),dark:r(`hint-popover_dark`)}})))()}var S,C,w,T,E;function D(){return(D=e((()=>{u(),y(),p(),a(),x(),S=l(v)`
  --popover-radius: calc(${({theme:e})=>e.shape.medium} * 2);

  &.${b.dark} {
    --popover-surface-color: ${({theme:e})=>e.palette.grey[900]};
    --popover-text-color: ${({theme:e})=>e.palette.common.white};
  }
`,C=l.div`
  position: relative;

  display: flex;
  flex-direction: column;

  /* Отступ popover от края вьюпорта — иначе поля по краям разъедутся. */
  width: min(400px, calc(100vw - var(--popover-viewport-padding, 16px) * 2));
  padding: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(4)};
  }

  /* Крестик висит абсолютом в углу и идёт первым в DOM, поэтому следующий за ним
     верхний элемент (заголовок, а без него — контент) резервирует место справа,
     чтобы текст под крестик не залез. */
  & > button + * {
    padding-right: ${({theme:e})=>e.spacing(10)};
  }

  /* Тело — программная цель фокуса (tabIndex=-1) у потребителя; рамку убираем. */
  &:focus {
    outline: none;
  }
`,w=l(s)`
  margin-bottom: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-bottom: ${({theme:e})=>e.spacing(1)};
  }
`,T=l.div`
  margin-top: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: ${({theme:e})=>e.spacing(4)};
  }
`,E=l(c)`
  position: absolute;
  top: ${({theme:e})=>e.spacing(4)};
  right: ${({theme:e})=>e.spacing(4)};

  color: inherit;

  /* Тема красит серую кнопку в фокусе в тёмный цвет: на тёмной подложке крестик пропадает. Фокус получает крестик при открытии подсказки */
  .${b.dark} &:focus-visible {
    color: inherit;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    top: ${({theme:e})=>e.spacing(2)};
    right: ${({theme:e})=>e.spacing(2)};
  }
`})))()}var O,k,A;function j(){return(j=e((()=>{_(),h(),o(),d(),x(),D(),O=f(),k=n(b.root,{variants:{variant:{light:``,dark:b.dark}}}),A=({variant:e=`dark`,title:n,action:r,onClose:i,contentRef:a,children:o,className:s,...c})=>{let{isMobile:l}=m();return(0,O.jsx)(S,{...c,className:t(s,k({variant:e})),hasArrow:!0,disableMobileDrawer:!0,onClose:i,children:(0,O.jsxs)(C,{ref:a,tabIndex:-1,children:[(0,O.jsx)(E,{variant:`text`,onClick:i,"aria-label":`Закрыть`,children:(0,O.jsx)(g,{})}),n&&(0,O.jsx)(w,{component:`div`,variant:l?`h5`:`h4`,children:n}),o,r&&(0,O.jsx)(T,{children:r})]})})};try{A.displayName=`HintPopover`,A.__docgenInfo={description:"Поповер-подсказка, привязанная к элементу: подсвечивает возможность интерфейса.\nОтличие от `NewPopover`: увеличенное скругление, всегда со стрелкой и не сворачивается в BottomDrawer на mobile.",displayName:`HintPopover`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/HintPopover.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`className корневого popper`,name:`className`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Контент popover`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`style корневого popper`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Обработчик закрытия компонента`,name:`onClose`,required:!1,tags:{},type:{name:`NewPopoverOnClose`}},placement:{defaultValue:{value:`'bottom'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Позиция относительно anchor.`,name:`placement`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`NewPopoverPlacement`,value:[{value:`"auto"`},{value:`"bottom"`},{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom-end"`},{value:`"bottom-start"`},{value:`"left-end"`},{value:`"left-start"`},{value:`"right-end"`},{value:`"right-start"`},{value:`"top-end"`},{value:`"top-start"`},{value:`"auto-start"`},{value:`"auto-end"`}]}},disableAutoFocus:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Отключить автофокус при открытии popover (десктоп)`,name:`disableAutoFocus`,required:!1,tags:{default:`false`},type:{name:`boolean`}},disablePortal:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Рендерить popper внутри родителя, без portal`,name:`disablePortal`,required:!1,tags:{default:`false`},type:{name:`boolean`}},anchorEl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Якорь позиционирования`,name:`anchorEl`,required:!1,tags:{},type:{name:`NewPopoverAnchorEl`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Показывать popover. Если не передан — видимость определяется наличием anchorEl.`,name:`isOpen`,required:!1,tags:{},type:{name:`boolean`}},variant:{defaultValue:{value:`dark`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/types.ts`,name:`TypeLiteral`}],description:`Цвет подложки.`,name:`variant`,required:!1,tags:{default:`'dark'`},type:{name:`enum`,raw:`HintPopoverVariant`,value:[{value:`"light"`},{value:`"dark"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/types.ts`,name:`TypeLiteral`}],description:`Заголовок.`,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/types.ts`,name:`TypeLiteral`}],description:`Слот действий под контентом.`,name:`action`,required:!1,tags:{},type:{name:`ReactNode`}},contentRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/types.ts`,name:`TypeLiteral`}],description:`Ref на узел контента — для focus-trap/определения кликов у потребителя.`,name:`contentRef`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement>`}}},tags:{}}}catch{}})))()}export{j as n,A as t};