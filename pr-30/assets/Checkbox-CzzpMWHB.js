import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Xt as i,_n as a,ei as o,en as s,gn as c,ji as l,ya as u,yn as d,za as f}from"./preview-BgfOFFw_.js";import{o as p,t as m}from"./mixins-WsPAqIU9.js";import{n as h}from"./useUpdateEffect-BT0m5QCR.js";import{t as g}from"./useUpdateEffect-5LhdeSzl.js";var _,v,y;function b(){return(b=e((()=>{r(),_={root:n(`checkbox`),checked:n(`checkbox_checked`),indeterminate:n(`checkbox_indeterminate`),disabled:n(`checkbox_disabled`),iconWrapper:n(`checkbox__icon-wrapper`),icon:n(`checkbox__icon`),outline:n(`checkbox__outline`),symbol:n(`checkbox__symbol`),iconChecked:n(`checkbox__icon_checked`),iconIndeterminate:n(`checkbox__icon_indeterminate`),input:n(`checkbox__input`)},v=`32px`,y=`40px`})))()}var x,S;function C(){return(C=e((()=>{c(),o(),b(),x=u(),S=({...e})=>(0,x.jsxs)(a,{size:`sm`,viewBox:`0 0 16 16`,...e,children:[(0,x.jsx)(`rect`,{className:_.outline,x:`0.5`,y:`0.5`,width:`15`,height:`15`,rx:`3.5`}),(0,x.jsx)(`path`,{className:t(_.symbol,_.iconChecked),d:`M3.892 8.64a.75.75 0 0 1 1.003-1.112l.058.052 1.97 1.97 4.469-4.47.056-.052a.75.75 0 0 1 1.056 1.056l-.051.056-5 5a.75.75 0 0 1-1.061 0l-2.5-2.5Z`}),(0,x.jsx)(`path`,{className:t(_.symbol,_.iconIndeterminate),d:`M12 7.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h8Z`})]});try{S.displayName=`Icon`,S.__docgenInfo={description:``,displayName:`Icon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Checkbox/Icon/Icon.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`Элемент, передаваемый в SVG`,name:`children`,required:!1,tags:{example:`<SvgIcon size="sm">
  <path d="M4 6.2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4V21.3a.5.5 0 0 1-.765.424L12 17.2l-7.235 4.522A.5.5 0 0 1 4 21.299z" />
</SvgIcon>`},type:{name:`ReactNode`}},color:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`SVGAttributes`}],description:`Цвет компонента. Поддерживает как стандартные, так и пользовательские цвета темы`,name:`color`,required:!1,tags:{},type:{name:`string`}},titleAccess:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`}],description:`Предоставляет читаемый человеком заголовок для элемента
https://www.w3.org/TR/SVGTiny12/access.html#ad-nav`,name:`titleAccess`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`}],description:`Размеры (width и height) иконки.

auto = 1em, sm = 16px, md = 24px`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "sm" | "md"`,value:[{value:`"auto"`},{value:`"sm"`},{value:`"md"`}]}}},tags:{}}}catch{}})))()}function w(){return(w=e((()=>{C()})))()}var T,E,D,O;function k(){return(k=e((()=>{i(),d(),m(),b(),T=({theme:e,isHover:t,isDisabled:n,isError:r,isChecked:i,isIndeterminate:a})=>n?e.palette.components.border.default:r?t?e.palette.error[700]:e.palette.error[800]:i||a?t?e.palette.primary[700]:e.palette.primary[800]:t?e.palette.grey[900]:e.palette.components.border.default,E=l(`span`,{shouldForwardProp:e=>![`$isDisabled`,`$isError`,`$isChecked`,`$isIndeterminate`].includes(e)})`
  display: flex;
  justify-content: center;

  .${_.icon} {
    fill: ${({$isDisabled:e,theme:t})=>e&&t.palette.components.disabled};
  }

  .${_.symbol} {
    fill: ${({$isDisabled:e,theme:t})=>e?t.palette.grey[500]:`white`};

    ${p};
  }

  .${_.outline} {
    fill: ${({$isDisabled:e,$isChecked:t,$isIndeterminate:n})=>!e&&!t&&!n&&`white`};
    stroke: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r,$isIndeterminate:i})=>T({theme:e,isHover:!1,isDisabled:t,isError:n,isChecked:r,isIndeterminate:i})};

    ${p};
  }

  .${_.iconChecked} {
    transform-origin: bottom;
    transform: ${({$isChecked:e,$isIndeterminate:t})=>e&&!t?`scale(1)`:`scale(0)`};

    opacity: ${({$isChecked:e,$isIndeterminate:t})=>e&&!t?1:0};
  }

  .${_.iconIndeterminate} {
    transform-origin: bottom;
    transform: ${({$isIndeterminate:e})=>e?`scale(1)`:`scale(0)`};

    opacity: ${({$isIndeterminate:e})=>+!!e};
  }

  ${s} {
    &:hover {
      .${_.icon} {
        color: ${({$isError:e,theme:t})=>e?t.palette.error[700]:t.palette.primary[700]};
      }

      .${_.outline} {
        fill: ${({theme:e,$isDisabled:t,$isChecked:n,$isIndeterminate:r})=>!t&&!n&&!r&&e.palette.background.elementHover};
        stroke: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r,$isIndeterminate:i})=>T({theme:e,isHover:!0,isDisabled:t,isError:n,isChecked:r,isIndeterminate:i})};
      }
    }
  }
`,D=l.input`
  cursor: ${({disabled:e})=>!e&&`pointer`};

  position: absolute;

  width: ${v};
  height: ${v};
  margin: 0;

  opacity: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: ${y};
    height: ${y};
  }

  &:focus-visible {
    ~ .${_.iconWrapper} > .${_.icon} {
      border-radius: ${({theme:e})=>e.shape.small};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }
`,O=l.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${v};
  height: ${v};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: ${y};
    height: ${y};

    .${_.icon} {
      width: 20px;
      height: 20px;
    }
  }
`})))()}var A,j;function M(){return(M=e((()=>{A=f(),g(),o(),b(),j=({checked:e=!1,indeterminate:n=!1,disabled:r=!1,isError:i=!1,defaultChecked:a=!1,onChange:o,className:s,role:c,style:l,name:u,inputRef:d,value:f,id:p,...m})=>{let[g,v]=(0,A.useState)(a||e);return h(()=>{v(e)},[e]),{onChange:e=>{v(e=>!e),o?.(e,e.target.checked)},color:(0,A.useMemo)(()=>r?`disabled`:i?`error`:g||n?`primary`:`inherit`,[r,i,g,n]),isChecked:g,indeterminate:n,isError:i,disabled:r,className:(0,A.useMemo)(()=>t(_.root,g?_.checked:``,r?_.disabled:``,n?_.indeterminate:``,s),[g,n,r,s]),restProps:m,role:c,style:l,name:u,inputRef:d,value:f,id:p}}})))()}function N(){return(N=e((()=>{M()})))()}var P,F,I;function L(){return(L=e((()=>{P=f(),b(),w(),k(),N(),F=u(),I=(0,P.forwardRef)((e,t)=>{let{onChange:n,color:r,isChecked:i,indeterminate:a,isError:o,disabled:s,restProps:c,className:l,role:u,style:d,name:f,inputRef:p,value:m,id:h}=j(e);return(0,F.jsxs)(E,{role:u,$isDisabled:s,$isError:o,$isChecked:i,$isIndeterminate:a,className:l,style:d,ref:t,...c,children:[(0,F.jsx)(D,{type:`checkbox`,checked:i,disabled:s,onChange:n,"aria-checked":a?`mixed`:i,"aria-disabled":s,name:f,ref:p,value:m,id:h,className:_.input}),(0,F.jsx)(O,{className:_.iconWrapper,children:(0,F.jsx)(S,{className:_.icon,color:r})})]})});try{I.displayName=`Checkbox`,I.__docgenInfo={description:``,displayName:`Checkbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Checkbox/Checkbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}}},tags:{}}}catch{}})))()}export{_ as a,y as i,L as n,b as o,v as r,I as t};