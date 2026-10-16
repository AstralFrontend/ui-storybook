import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,dt as n,ft as r,ji as i,xa as a,yn as o}from"./preview-Cav_CXYC.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{o(),n(),s=(e,n)=>typeof n==`boolean`?n?t`
        margin-bottom: ${e.spacing(8)} !important;

        ${e.breakpoints.down(`mobile`)} {
          margin-bottom: ${e.spacing(4)} !important;
        }
      `:t`
      margin-bottom: ${e.spacing(0)};
    `:t`
    margin-bottom: ${e.spacing(8)};

    ${e.breakpoints.down(`mobile`)} {
      margin-bottom: ${e.spacing(4)};
    }
  `,c=i(`fieldset`,{shouldForwardProp:e=>![`$gutterBottom`].includes(e)})`
  position: relative;

  min-inline-size: 100%;
  margin-inline: 0;
  padding: 0;

  border: 0;

  ${({$gutterBottom:e,theme:t})=>s(t,e)}

  &:last-of-type {
    margin-bottom: 0;
  }
`,l=i(r)`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: baseline;
  justify-content: space-between;

  margin-bottom: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-bottom: ${({theme:e})=>e.spacing(5)};
  }
`,u=i(r)`
  margin-bottom: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-bottom: ${({theme:e})=>e.spacing(5)};
  }
`,d=i.div`
  flex-shrink: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: ${({theme:e})=>e.spacing(5)};
  }
`,f=i.div`
  position: absolute;
  z-index: ${({theme:e})=>e.zIndex.tooltip};
  inset: 0;

  opacity: 0.5;
  background-color: ${({theme:e})=>e.palette.background.element};
`})))()}var m,h;function g(){return(g=e((()=>{p(),m=a(),h=e=>{let{isDisabled:t,gutterBottom:n,title:r,description:i,titleAddon:a,className:o,children:s}=e;return(0,m.jsxs)(c,{className:o,disabled:t,$gutterBottom:n,children:[r&&(0,m.jsxs)(l,{component:`h6`,variant:`h6`,children:[r,a&&(0,m.jsx)(d,{children:a})]}),i&&(0,m.jsx)(u,{paragraph:!0,color:`textSecondary`,children:i}),s,t&&(0,m.jsx)(f,{})]})};try{h.displayName=`Fieldset`,h.__docgenInfo={description:``,displayName:`Fieldset`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Заголовок для группы элементов`,name:`title`,required:!1,tags:{},type:{name:`string`}},titleAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое для заголовка (например: интерактивные элементы)`,name:`titleAddon`,required:!1,tags:{example:`<Fieldset
    title="Личная информация"
    titleAddon={<button>Заполнить</button>}
  >
    <input type="text" placeholder="Имя" />
    <input type="text" placeholder="Фамилия" />
  </Fieldset>
);`},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Дополнительное описание`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Элементы формы`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Если true, все вложенные элементы формы будут недоступны для взаимодействия`,name:`isDisabled`,required:!1,tags:{example:`<Fieldset
    title="Личная информация"
    isDisabled
  >
    <input type="text" placeholder="Имя" />
    <input type="text" placeholder="Фамилия" />
  </Fieldset>
);`},type:{name:`boolean`}},gutterBottom:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Fieldset/Fieldset.tsx`,name:`TypeLiteral`}],description:`Если значение равно false, то блок не будет иметь нижний отступ.`,name:`gutterBottom`,required:!1,tags:{example:`<Fieldset
    title="Личная информация"
    gutterBottom={false}
  >
    <input type="text" placeholder="Имя" />
    <input type="text" placeholder="Фамилия" />
  </Fieldset>
);`},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{g as n,h as t};