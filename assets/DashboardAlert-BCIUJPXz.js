import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,Sn as i,cn as a,dt as o,ei as s,ft as c,gn as l,ji as u,ln as d,xa as f,yn as p}from"./preview-CTqDz5zI.js";import{r as m,t as h}from"./Alert-x6UiA3Ew.js";import{t as g}from"./Alert-Cu-cDeQx.js";var _;function v(){return(v=e((()=>{r(),_={root:n(`dashboard-alert`)}})))()}var y,b;function x(){return(x=e((()=>{g(),a(),l(),p(),v(),y=u(h)`
  &.${m.root}.${_.root}.${_.root} {
    align-items: center;

    padding: ${({theme:e})=>e.spacing(3,4)};

    .${m.iconWrapper} {
      height: 24px;
      margin-block: 0;

      & .${i.root} {
        font-size: 24px;
      }
    }

    .${m.content} {
      padding: 0;
    }

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      align-items: flex-start;

      /* иконка 24px, выравниваем текст к ней, как в старой вёрстке */
      .${m.bodyWrapper} {
        margin-block: ${({theme:e})=>e.microSpacing(1,0)};
      }

      /* и кнопку закрытия к ней же: половина разницы высот кнопки и иконки */
      .${m.closeButton} {
        margin-top: calc((24px - 40px) / 2);
      }
    }
  }
`,b=u(d)`
  height: 20px;
  padding-left: 0;

  font-weight: ${({theme:e})=>e.typography.body1.fontWeight};
  line-height: ${({theme:e})=>e.typography.body1.lineHeight};
  vertical-align: baseline;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    height: 20px;
  }
`})))()}var S,C;function w(){return(w=e((()=>{o(),s(),v(),x(),S=f(),C=e=>{let{linkButtonProps:n,children:r,isShow:i,className:a,...o}=e,{name:s,color:l,...u}=n||{};return(0,S.jsx)(y,{className:t(_.root,a),isShow:i,...o,children:(0,S.jsxs)(c,{variant:`body1`,children:[r,`\xA0`,n&&(0,S.jsx)(b,{variant:`link`,...u,children:s})]})})};try{C.displayName=`DashboardAlert`,C.__docgenInfo={description:`Компонент отображения уведомления на всех страницах приложения`,displayName:`DashboardAlert`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DashboardAlert/DashboardAlert.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Содержимое компонента.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Обработчик, для выполнения дополнительных действий при закрытии`,name:`onClose`,required:!1,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:"Иконка заменяющая стандартную, соответствующую значению свойства `severity`.",name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},severity:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Тип оповещения`,name:`severity`,required:!1,tags:{},type:{name:`enum`,raw:`AlertSeverity`,value:[{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},closeText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Текст подсказки при наведении на иконку закрытия`,name:`closeText`,required:!1,tags:{},type:{name:`string`}},unmountOnExit:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:"Если `true`, компонент будет размонтирован (удалён из DOM), когда он скрыт или не отображается.",name:`unmountOnExit`,required:!1,tags:{},type:{name:`boolean`}},linkButtonProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardAlert/types.ts`,name:`TypeLiteral`}],description:`Параметры ссылки`,name:`linkButtonProps`,required:!1,tags:{},type:{name:`LinkButtonProps<ElementType>`}},isShow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DashboardAlert/types.ts`,name:`TypeLiteral`}],description:`Если true, alert отображается`,name:`isShow`,required:!1,tags:{},type:{name:`boolean`}}},tags:{deprecated:"Компонент будет удалён — планируется полный переход на {@link Alert }.\nНе используйте `DashboardAlert` в новом коде, вместо него используйте `Alert`.\nПодробнее — в разделе «DashboardAlert / PageAlert» V5 Migration Guide."}}}catch{}})))()}export{w as n,C as t};