import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Va as i,Xt as a,ei as o,en as s,ji as c,xa as l,yn as u}from"./preview-DbSmHAJq.js";import{a as d,t as f}from"./Radio-wqNZ6qe0.js";import{t as p}from"./Radio-yFKBYRm6.js";import{i as m,t as h}from"./RadioGroup-BaV3ZWvO.js";import{n as g}from"./FormRadioGroup-COZ4RzpP.js";var _;function v(){return(v=e((()=>{r(),_={root:n(`radio-card`),content:n(`radio-card__content`)}})))()}var y,b,x;function S(){return(S=e((()=>{a(),p(),u(),v(),y=c.label`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(2)};

  padding: ${({theme:e})=>e.spacing(5,4,5,3)};

  background-color: ${({theme:e})=>e.palette.background.default};
  border-right: 1px solid
    ${({$isError:e,theme:t})=>e?t.palette.error[700]:t.palette.components.border.default};
  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-left: 1px solid
    ${({$isError:e,theme:t})=>e?t.palette.error[700]:t.palette.components.border.default};

  transition: ${({theme:e})=>e.transitions.create([`background-color`,`border-color`],{duration:e.transitions.duration.standard})};

  ${({$isDisabled:e,theme:t})=>e&&`
      cursor: default;
      color: ${t.palette.grey[600]};
      background-color: ${t.palette.background.element};
    `}

  &:first-of-type {
    border-top: 1px solid
      ${({$isError:e,theme:t})=>e?t.palette.error[700]:t.palette.components.border.default};
    border-top-left-radius: ${({theme:e})=>e.shape.medium};
    border-top-right-radius: ${({theme:e})=>e.shape.medium};
  }

  &:last-of-type {
    border-bottom: 1px solid
      ${({$isError:e,theme:t})=>e?t.palette.error[700]:t.palette.components.border.default};
    border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
  }

  ${({$isChecked:e,theme:t})=>e&&`
      z-index: 1;
      outline: 2px solid ${t.palette.primary.main};
      outline-offset: -2px;
    `}

  & .${d.disabled} ~ .${_.content} {
    cursor: default;
  }

  ${s} {
    &:hover {
      background-color: ${({theme:e,$isDisabled:t})=>t?e.palette.background.element:e.palette.background.elementHover};
    }
  }
`,b=c.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({theme:e})=>e.spacing(3)};
`,x=c(f)`
  & .${d.iconWrapper} {
    height: 20px;
  }
`})))()}var C,w,T;function E(){return(E=e((()=>{C=i(),h(),o(),v(),S(),w=l(),T=({id:e,disabled:n,className:r,header:i,children:a,value:o,...s})=>{let{isError:c,value:l,name:u,onChange:d,disabled:f}=(0,C.useContext)(m);return(0,w.jsxs)(y,{className:t(r,_.root),$isError:c,$isChecked:l===o,$isDisabled:f||n,children:[(0,w.jsx)(x,{disabled:f||n,checked:l===o,name:u,onChange:e=>d?.(e,e.target.value),value:o,...s}),(0,w.jsxs)(b,{className:_.content,children:[(0,w.jsx)(`div`,{children:i}),(0,w.jsx)(`div`,{children:a})]})]})};try{T.displayName=`RadioCard`,T.__docgenInfo={description:``,displayName:`RadioCard`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/RadioCard/RadioCard.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/RadioCard/RadioCard.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/RadioCard/RadioCard.tsx`,name:`TypeLiteral`}],description:``,name:`children`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ReactNode`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> & ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Radio/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора radio`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},header:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/RadioCard/RadioCard.tsx`,name:`TypeLiteral`}],description:`Пропс для передачи контента в заголовок карточки`,name:`header`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{deprecated:'Причина отказа от поддержки: RadioCard поддерживает только одиночный выбор и сгруппированный список. Используйте `SelectionCardGroup variant="grouped"` с `SelectionCard`. Удаление в V5.'}}}catch{}})))()}function D(){return(D=e((()=>{E(),v()})))()}function O(){return(O=e((()=>{g()})))()}export{E as i,D as n,T as r,O as t};