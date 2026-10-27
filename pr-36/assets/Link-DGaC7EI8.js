import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,B as n,Cn as r,Dn as i,Mn as a,Nn as o,On as s,Sn as c,Xt as l,ei as u,en as d,gn as f,ji as p,wn as m,ya as h,yn as g,z as _}from"./preview-DLwisTAq.js";import{a as v,i as y,n as b,t as x}from"./OpenLinkOutlineSm-C53vVIVy.js";var S;function C(){return(C=e((()=>{s(),S={root:i(`link`),isContrast:i(`link__contrast-color`)}})))()}var w;function T(){return(T=e((()=>{n(),l(),f(),g(),C(),w=p(_)`
  display: inline-flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: baseline;
  justify-content: flex-start;

  font-size: ${({theme:e})=>e.typography.fontSize};
  color: ${({theme:e})=>e.palette.components.link.main};
  text-decoration: none;    

  &:visited {
    color: ${({theme:e})=>e.palette.components.link.visited};
  }

  ${d} {
    &:hover {
      color: ${({theme:e})=>e.palette.components.link.hover};
      text-decoration: underline;
    }
  }

  &:active {
    color: ${({theme:e})=>e.palette.components.link.active};
  }

  &.${S.isContrast} {
    color: ${({theme:e})=>e.palette.components.link.contrast.main};

    &:visited {
      color: ${({theme:e})=>e.palette.components.link.contrast.visited};
    }

    ${d} {
      &:hover {
        color: ${({theme:e})=>e.palette.components.link.contrast.hover};
      }
    }

    &:active {
      color: ${({theme:e})=>e.palette.components.link.contrast.active};
    }
  }

  &:focus-visible {
    border-radius: ${({theme:e})=>e.shape.medium};
    outline: 2px solid ${({theme:e})=>e.palette.components.focused};
  }

  .${c.root} {
    align-self: center;

    width: 16px;
    height: 16px;
  }
`})))()}var E,D,O,k;function A(){return(A=e((()=>{y(),x(),a(),u(),m(),C(),T(),E=h(),D=r(S.root,{variants:{isContrast:{true:S.isContrast}}}),O=({withAdornment:e,isDownload:n,downloadFilename:r,isContrast:i,children:a,className:o,...s},c)=>{let l=n?(0,E.jsx)(v,{}):(0,E.jsx)(b,{});return(0,E.jsxs)(w,{download:r??n,className:t(D({isContrast:i}),o),ref:c,...s,children:[e===`start`&&l,a,e===`end`&&l,!e&&n&&(0,E.jsx)(v,{})]})},k=o(O);try{k.displayName=`Link`,k.__docgenInfo={description:``,displayName:`Link`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`}],description:``,name:`className`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},classes:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Link/Link.d.ts`,name:`LinkOwnProps`},{fileName:`ui-temp-10-2026/node_modules/@mui/material/styles/index.d.ts`,name:`StyledComponentProps`}],description:`Override or extend the styles applied to the component.`,name:`classes`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Link/Link.d.ts`,name:`LinkOwnProps`},required:!1,tags:{},type:{name:`Partial<LinkClasses> & Partial<ClassNameMap<never>>`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`}],description:``,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/OverridableComponent.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@mui/material/Link/Link.d.ts`,name:`LinkOwnProps`}],description:`The content of the component.`,name:`children`,parent:{fileName:`ui-temp-10-2026/node_modules/@mui/material/Link/Link.d.ts`,name:`LinkOwnProps`},required:!1,tags:{},type:{name:`ReactNode`}},key:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`Attributes`},{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`Attributes`}],description:``,name:`key`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`Attributes`},required:!1,tags:{},type:{name:`Key`}},withAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Добавление иконки`,name:`withAdornment`,required:!1,tags:{},type:{name:`enum`,raw:`"start" | "end"`,value:[{value:`"start"`},{value:`"end"`}]}},isDownload:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Указывает что ссылка для скачивания файла
добавляет атрибут 'download' тегу 'a'`,name:`isDownload`,required:!1,tags:{},type:{name:`boolean`}},downloadFilename:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Имя для скачиваемого файла при isDownload: true,
добавляет значение атрибуту 'download' тега 'a'`,name:`downloadFilename`,required:!1,tags:{},type:{name:`string`}},isContrast:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Позволяет переключить цвета ссылки на более контрастные`,name:`isContrast`,required:!1,tags:{},type:{name:`boolean`}},component:{defaultValue:{value:`'a'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Link/Link.tsx`,name:`TypeLiteral`}],description:`Тип элемента`,name:`component`,required:!1,tags:{example:`<Link component={RouterLink} to="/documents">
  Документы
</Link>`,default:`'a'`},type:{name:`ElementType`}}},tags:{}}}catch{}})))()}export{A as n,C as r,k as t};