import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Va as i,Xt as a,_n as o,ei as s,en as c,gn as l,ji as u,xa as d,yn as f}from"./preview-DApj709n.js";import{o as p,t as m}from"./mixins-FAOrh0Vg.js";import{n as h}from"./useUpdateEffect-x_XfnKN4.js";import{t as g}from"./useUpdateEffect-DEy7NwPn.js";var _,v;function y(){return(y=e((()=>{_=i(),v=(e,t)=>{(0,_.useEffect)(()=>{let n=`value`in t;(n||t?.onChange)&&(!n||!t?.onChange)&&console.error(`UIKIT: ${e}. Пропсы \`value\` и \`onChange\` должны быть указаны одновременно для контролируемых компонентов`)},[])}})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C;function w(){return(w=e((()=>{r(),x={root:n(`radio`),input:n(`radio__input`),checked:n(`radio_checked`),disabled:n(`radio_disabled`),iconWrapper:n(`radio__icon-wrapper`),icon:n(`radio__icon`),outerCircle:n(`radio__outer-circle`),dot:n(`radio__dot`)},S=`32px`,C=`40px`})))()}var T,E;function D(){return(D=e((()=>{l(),w(),T=d(),E=({...e})=>(0,T.jsxs)(o,{size:`sm`,viewBox:`0 0 16 16`,...e,children:[(0,T.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7.5`,className:x.outerCircle}),(0,T.jsx)(`circle`,{cx:`8`,cy:`8`,r:`4`,className:x.dot,fill:`#fff`})]});try{E.displayName=`Icon`,E.__docgenInfo={description:``,displayName:`Icon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Radio/Icon/Icon.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`}],description:`Элемент, передаваемый в SVG`,name:`children`,required:!1,tags:{example:`<SvgIcon size="sm">
  <path d="M4 6.2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4V21.3a.5.5 0 0 1-.765.424L12 17.2l-7.235 4.522A.5.5 0 0 1 4 21.299z" />
</SvgIcon>`},type:{name:`ReactNode`}},color:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`SVGAttributes`}],description:`Цвет компонента. Поддерживает как стандартные, так и пользовательские цвета темы`,name:`color`,required:!1,tags:{},type:{name:`string`}},titleAccess:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`}],description:`Предоставляет читаемый человеком заголовок для элемента
https://www.w3.org/TR/SVGTiny12/access.html#ad-nav`,name:`titleAccess`,required:!1,tags:{},type:{name:`string`}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SvgIcon/types.ts`,name:`TypeLiteral`}],description:`Размеры (width и height) иконки.

auto = 1em, sm = 16px, md = 24px`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "sm" | "md"`,value:[{value:`"auto"`},{value:`"sm"`},{value:`"md"`}]}}},tags:{}}}catch{}})))()}function O(){return(O=e((()=>{D()})))()}var k,A,j,M,N;function P(){return(P=e((()=>{a(),f(),m(),w(),k=({theme:e,isHover:t,isDisabled:n,isError:r,isChecked:i})=>n?i?e.palette.components.disabled:e.palette.components.border.default:r?t?e.palette.error[700]:e.palette.error[800]:i?t?e.palette.primary[700]:e.palette.primary[800]:t?e.palette.grey[900]:e.palette.components.border.default,A=({theme:e,isHover:t,isDisabled:n,isError:r,isChecked:i})=>n?e.palette.components.disabled:i?r?t?e.palette.error[700]:e.palette.error[800]:t?e.palette.primary[700]:e.palette.primary[800]:t?e.palette.background.elementHover:`white`,j=u(`span`,{shouldForwardProp:e=>![`$isDisabled`,`$isError`,`$isChecked`].includes(e)})`
  .${x.dot} {
    transform-origin: center;
    transform: ${({$isChecked:e})=>e?`scale(1)`:`scale(0)`};

    ${p};
  }
  
  .${x.outerCircle} {
    fill: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r})=>A({theme:e,isHover:!1,isDisabled:t,isError:n,isChecked:r})};
    stroke: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r})=>k({theme:e,isHover:!1,isDisabled:t,isError:n,isChecked:r})};

    ${p}; 
  }

  ${c} {
    &:hover {
      .${x.outerCircle} {
        fill: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r})=>A({theme:e,isHover:!0,isDisabled:t,isError:n,isChecked:r})};
        stroke: ${({theme:e,$isDisabled:t,$isError:n,$isChecked:r})=>k({theme:e,isHover:!0,isDisabled:t,isError:n,isChecked:r})};
      }
    }
  }
`,M=u.input`
  cursor: ${({disabled:e})=>!e&&`pointer`};
  
  position: absolute;

  width: ${S};
  height: ${S};
  margin: 0;

  opacity: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: ${C};
    height: ${C};
  }

  &:focus-visible {
    ~.${x.iconWrapper} > .${x.icon} {
      border-radius: ${({theme:e})=>e.shape.medium};
      outline: 2px solid ${({theme:e})=>e.palette.components.focused};
      outline-offset: -2px;
    }
  }
`,N=u.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${S};
  height: ${S};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: ${C};
    height: ${C};

    .${x.icon} {
      width: 20px;
      height: 20px;
    }
  }
`})))()}var F,I;function L(){return(L=e((()=>{F=i(),g(),s(),w(),I=({checked:e=!1,disabled:n=!1,isError:r=!1,onChange:i,className:a,name:o,style:s,inputRef:c,value:l,id:u,...d})=>{let[f,p]=(0,F.useState)(e);return h(()=>{p(e)},[e]),{onChange:e=>{i?.(e,e.target.checked),p(e.target.checked)},isChecked:f,isError:r,disabled:n,className:(0,F.useMemo)(()=>t(x.root,f?x.checked:``,n?x.disabled:``,a),[f,n,a]),restProps:d,name:o,style:s,inputRef:c,value:l,id:u}}})))()}function R(){return(R=e((()=>{L()})))()}var z,B,V;function H(){return(H=e((()=>{z=i(),b(),w(),O(),P(),R(),B=d(),V=(0,z.forwardRef)((e,t)=>{v(`Radio`,e);let{onChange:n,isChecked:r,isError:i,disabled:a,restProps:o,className:s,name:c,style:l,inputRef:u,value:d,id:f}=I(e);return(0,B.jsxs)(j,{$isDisabled:a,$isError:i,$isChecked:r,className:s,style:l,ref:t,...o,children:[(0,B.jsx)(M,{type:`radio`,className:x.input,name:c,checked:r,disabled:a,onChange:n,"aria-checked":r,"aria-disabled":a,ref:u,value:d,id:f}),(0,B.jsx)(N,{className:x.iconWrapper,children:(0,B.jsx)(E,{className:x.icon})})]})});try{V.displayName=`Radio`,V.__docgenInfo={description:``,displayName:`Radio`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Radio/Radio.tsx`,methods:[],props:{autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора radio`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}}},tags:{}}}catch{}})))()}export{x as a,w as i,H as n,b as o,C as r,V as t};