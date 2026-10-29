import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Q as t,St as n,Xt as r,Z as i,en as a,ji as o,ya as s,yn as c,za as l}from"./preview-DeB2xvR7.js";import{i as u,r as d}from"./Badge-CHpQ1OsK.js";var f,p,m,h,g,_,v;function y(){return(y=e((()=>{u(),r(),c(),i(),f=({theme:e,color:t,isChecked:n,variant:r,disabled:i})=>{if(i)return e.palette.components.disabled;if(n)return e.palette.grey[600];if(r===`text`)return e.palette.grey[200];let a={light:{primary:e.palette.primary[200],error:e.palette.red[200],success:e.palette.green[200],warning:e.palette.yellow[200],grey:e.palette.grey[200],default:`transparent`},contained:{primary:e.palette.primary[600],error:e.palette.red[600],success:e.palette.green[600],warning:e.palette.yellow[600],grey:e.palette.grey[200],default:`transparent`}};return r&&t?a[r][t]:e.palette.background.element},p=({theme:e,color:t,isChecked:n,variant:r,disabled:i})=>{if(i)return e.palette.components.disabled;if(n)return e.palette.grey[700];if(r===`text`)return e.palette.grey[300];let a={contained:{primary:e.palette.primary[700],error:e.palette.red[700],success:e.palette.green[700],warning:e.palette.yellow[700],grey:e.palette.grey[400],default:e.palette.grey[200]},light:{primary:e.palette.primary[300],error:e.palette.red[300],success:e.palette.green[300],warning:e.palette.yellow[300],grey:e.palette.grey[300],default:e.palette.grey[200]}};return r&&t?a[r][t]:a.light.default},m=({theme:e,isChecked:t,disabled:n})=>n?e.palette.grey[500]:t?e.palette.primary.contrastText:`inherit`,h=({isChecked:e,variant:t,color:n,theme:r,disabled:i,tagState:a=`default`})=>t===`text`||n!=="default"?`none`:e||i&&t===`light`?`1px solid transparent`:(a==="default"&&`${r.palette.grey[600]}`,`1px solid ${r.palette.components.border.default}`),g=o.label`
  width: fit-content;
`,_=o.input`
  display: none;
`,v=o(t,{shouldForwardProp:e=>![`$isChecked`].includes(e)})`
  cursor: ${({disabled:e})=>e?`initial`:`pointer`};
  user-select: none;

  background-color: ${({theme:e,color:t,variant:n})=>n===`light`&&t===`grey`&&e.palette.grey[200]};
  ${({$isChecked:e,disabled:t,theme:n})=>e&&`
    background-color: ${t?n.palette.grey[200]:n.palette.grey[900]};
  `}
  border: ${({theme:e,variant:t,$isChecked:n,color:r,disabled:i})=>h({theme:e,variant:t,isChecked:n,color:r,disabled:i})};

  .${n.label} {
    color: ${({theme:e,disabled:t,$isChecked:n})=>m({theme:e,isChecked:n,disabled:t})};
  }

  .${n.badge} .${d.badge} {
    cursor: pointer;
  }

  ${a} {
    &:hover {
      background-color: ${({theme:e,color:t,variant:n,disabled:r,$isChecked:i})=>f({theme:e,color:t,variant:n,disabled:r,isChecked:i})};
      border: ${({theme:e,variant:t,$isChecked:n,color:r})=>h({theme:e,variant:t,isChecked:n,tagState:`hover`,color:r})};
    }
  }

  &:active {
    background-color: ${({theme:e,color:t,variant:n,disabled:r,$isChecked:i})=>p({theme:e,variant:n,color:t,disabled:r,isChecked:i})};
    border: ${({theme:e,variant:t,$isChecked:n,color:r})=>h({theme:e,variant:t,isChecked:n,tagState:`active`,color:r})};
  }
`})))()}var b,x,S;function C(){return(C=e((()=>{b=l(),y(),x=s(),S=(0,b.forwardRef)(({checked:e,variant:t=`light`,color:n=`grey`,onChange:r,disabled:i,startAddon:a,endAddon:o,...s},c)=>(0,x.jsxs)(g,{children:[(0,x.jsx)(_,{type:`checkbox`,ref:c,checked:e,onChange:r,disabled:i}),(0,x.jsx)(v,{variant:t,color:n,disabled:i,startAddon:a?t=>(0,x.jsx)(a,{checked:e,disabled:i,...t}):void 0,endAddon:o?t=>(0,x.jsx)(o,{checked:e,disabled:i,...t}):void 0,$isChecked:e,...s})]}));try{S.displayName=`CheckableTag`,S.__docgenInfo={description:`Тег с возможностью быть checked (по логике Checkbox)`,displayName:`CheckableTag`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,methods:[],props:{disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Если true, то элемент будет не доступен для взаимодействия
Блокировка клика по тегу`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:`Стили компонента`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},color:{defaultValue:{value:`grey`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:`Цвет тега`,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`"error" | "primary" | "success" | "warning" | "grey" | "default"`,value:[{value:`"error"`},{value:`"primary"`},{value:`"success"`},{value:`"warning"`},{value:`"grey"`},{value:`"default"`}]}},size:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`}],description:`Размер тега`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`TagSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`}],description:`Содержимое компонента`,name:`label`,required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`}],description:`Иконка слева от label`,name:`icon`,required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},onDelete:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Tag/types.ts`,name:`TypeLiteral`}],description:`Функция вызываемая на нажатие иконки удаления

Если параметр передан, то в компоненте отображается кнопка удаления.`,name:`onDelete`,required:!1,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Состояние тега`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Обработчик изменения состояния тега`,name:`onChange`,required:!1,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},startAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Контент слева от label`,name:`startAddon`,required:!1,tags:{},type:{name:`CheckableTagAddon`}},endAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Контент справа от label`,name:`endAddon`,required:!1,tags:{},type:{name:`CheckableTagAddon`}},variant:{defaultValue:{value:`light`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/CheckableTag/CheckableTag.tsx`,name:`TypeLiteral`}],description:`Тип тега`,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`"contained" | "light"`,value:[{value:`"contained"`},{value:`"light"`}]}}},tags:{example:`<CheckableTag
label="tag"
variant="contained"
color="success"
checked
onChange={handleChecked}
endAddon={(props: TagBadgeProps) => (<TagBadge {...props} badgeContent={'12'} />)}
/>`}}}catch{}})))()}export{C as n,S as t};