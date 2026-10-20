import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Sn as a,Va as o,Xt as s,ct as c,dt as l,ei as u,en as d,ft as f,gn as p,it as m,ji as h,lt as g,rt as _,wn as v,xa as y,yn as b}from"./preview-DRblasGc.js";import{n as x,t as S}from"./CrossOutlineMd-CEhp8Rlx.js";import{t as C}from"./Collapse-Dd5s3wwC.js";import{t as w}from"./Collapse-svE40ry-.js";import{a as T,i as E,n as D,t as O}from"./WarningFillMd-B3qtEK96.js";import{n as k,t as A}from"./InfoFillMd-ilfNthrf.js";import{n as j,t as M}from"./SuccessFillMd--a8cyDOx.js";var N;function P(){return(P=e((()=>{i(),N={root:r(`alert`),iconWrapper:r(`alert__icon-wrapper`),title:r(`alert__title`),closeButton:r(`alert__close-button`),contentWrapper:r(`alert__content-wrapper`),bodyWrapper:r(`alert__body-wrapper`),content:r(`alert__content`),actions:r(`alert__actions`),hasTitle:r(`alert_has-title`),hasCloseButton:r(`alert_has-close-button`),hasActions:r(`alert_has-actions`),severityInfo:r(`alert_severity_info`),severityError:r(`alert_severity_error`),severitySuccess:r(`alert_severity_success`),severityWarning:r(`alert_severity_warning`)}})))()}var F,I,L,R,z,B,V;function H(){return(H=e((()=>{s(),c(),_(),p(),b(),l(),P(),F=h(g)`
  grid-auto-flow: column;
  justify-content: flex-start;
`,I=h(m)`
  flex-shrink: 0;
  align-self: flex-start;

  /* Центрируем кнопку по ее строке, как и иконку:
     отступ строки сверху + половина разницы высот кнопки и строки */
  margin-top: ${({theme:e})=>`calc(${e.microSpacing(3)} + (20px - 32px) / 2)`};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-top: ${({theme:e})=>`calc(${e.microSpacing(3)} + (20px - 40px) / 2)`};
  }

  ${d} {
    &:hover {
      background-color: rgb(0 0 0 / 4%);
    }
  }
  
  /* Переопределяем active на мобильных устройствах для сохранения исходной стилизации */
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &:active {
      background-color: rgb(0 0 0 / 4%);
    }
  }
`,L=h.div`
  display: flex;
  align-items: flex-start;

  padding: ${({theme:e})=>e.spacing(3,4)};

  border: 1px solid transparent;
  border-radius: ${({theme:e})=>e.shape.medium};

  &.${N.severityInfo} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
    border-color: ${({theme:e})=>e.palette.primary[300]};

    .${N.iconWrapper} {
      color: ${({theme:e})=>e.palette.primary[800]};
    }
  }

  &.${N.severitySuccess} {
    background-color: ${({theme:e})=>e.palette.success[100]};
    border-color: ${({theme:e})=>e.palette.success[300]};

    .${N.iconWrapper} {
      color: ${({theme:e})=>e.palette.success[800]};
    }
  }

  &.${N.severityError} {
    background-color: ${({theme:e})=>e.palette.error[100]};
    border-color: ${({theme:e})=>e.palette.error[300]};

    .${N.iconWrapper} {
      color: ${({theme:e})=>e.palette.error[800]};
    }
  }

  &.${N.severityWarning} {
    background-color: ${({theme:e})=>e.palette.warning[100]};
    border-color: ${({theme:e})=>e.palette.warning[300]};

    .${N.iconWrapper} {
      color: ${({theme:e})=>e.palette.warning[800]};
    }
  }
`,R=h.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  /* Высота строки текста (line-height body1): иконка центрируется по первой строке,
     а не по собственному боксу, поэтому высота не зависит от размера иконки */
  height: 20px;
  margin-right: ${({theme:e})=>e.spacing(2)};
  margin-block: ${({theme:e})=>e.microSpacing(3)};

  color: inherit;

  & .${a.root} {
    font-size: 20px;

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      font-size: 24px;
    }
  }
`,z=h.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;

  min-width: 0;
  margin-block: ${({theme:e})=>e.microSpacing(3)};

  .${N.hasCloseButton} & {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }

  & > .${N.title} + .${N.content} {
    margin-top: ${({theme:e})=>e.spacing(1)};
  }

  & > .${N.actions} {
    margin-top: ${({theme:e})=>e.spacing(2)};
  }
`,B=h(f)`
  align-self: stretch;

  min-width: 0;
  margin: 0;
  padding: 0;

  overflow-wrap: break-word;
`,V=h(f)`
  min-width: 0;
  margin: 0;

  overflow-wrap: break-word;
`})))()}var U;function W(){return(W=e((()=>{U=({children:e,isShow:t,display:n})=>({shouldRenderParagraph:typeof e==`string`||typeof e==`number`,isVisible:t??n??!0})})))()}var G,K,q,J;function Y(){return(Y=e((()=>{G=o(),S(),E(),A(),M(),O(),w(),u(),v(),P(),H(),W(),K=y(),q=n(N.root,{variants:{hasTitle:{true:N.hasTitle},hasCloseButton:{true:N.hasCloseButton},hasActions:{true:N.hasActions},severity:{info:N.severityInfo,error:N.severityError,success:N.severitySuccess,warning:N.severityWarning}}}),J=(0,G.forwardRef)(({children:e,title:n,closeText:r=`Скрыть`,isShow:i,display:a,actions:o,onClose:s,severity:c=`info`,style:l,className:u,icon:d,unmountOnExit:f=!0},p)=>{let{shouldRenderParagraph:m,isVisible:h}=U({children:e,isShow:i,display:a});return(0,K.jsx)(C,{in:h,unmountOnExit:f,children:(0,K.jsxs)(L,{style:l,className:t(N.contentWrapper,q({hasTitle:!!n,hasCloseButton:!!s,hasActions:!!o,severity:c}),u),role:`alert`,ref:p,children:[(()=>{let e={info:(0,K.jsx)(k,{}),error:(0,K.jsx)(T,{}),success:(0,K.jsx)(j,{}),warning:(0,K.jsx)(D,{})};return(0,K.jsx)(R,{className:N.iconWrapper,children:d??e[c]})})(),(0,K.jsxs)(z,{className:N.bodyWrapper,children:[n&&(0,K.jsx)(V,{variant:`h5`,className:N.title,children:n}),(0,K.jsx)(B,{component:m?`p`:`div`,className:N.content,children:e}),o&&(0,K.jsx)(F,{container:!0,spacing:4,className:N.actions,children:o})]}),s&&(0,K.jsx)(I,{variant:`text`,color:`grey`,onClick:s,"aria-label":r,title:r,className:N.closeButton,children:(0,K.jsx)(x,{})})]})})});try{J.displayName=`Alert`,J.__docgenInfo={description:``,displayName:`Alert`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Alert/Alert.tsx`,methods:[],props:{severity:{defaultValue:{value:`info`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Тип оповещения`,name:`severity`,required:!1,tags:{},type:{name:`enum`,raw:`AlertSeverity`,value:[{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{example:`<Alert title="Заголовок">Сообщение</Alert>
Заголовок`},type:{name:`string`}},actions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:``,name:`actions`,required:!1,tags:{example:`<Alert actions={
<>
<button>действие 1</button>
<button>действие 2</button>
</>
}>Сообщение</Alert>
Используется для отображения набора действий`},type:{name:`ReactNode`}},isShow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:``,name:`isShow`,required:!1,tags:{example:`<Alert isShow={false}>Сообщение</Alert>
Флаг для отображения/скрытия компонента Alert`},type:{name:`boolean`}},display:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:``,name:`display`,required:!1,tags:{example:`<Alert display={false}>Сообщение</Alert>
Флаг для отображения/скрытия компонента Alert`,deprecated:"Используйте `isShow`. Проп будет удалён в следующей major версии пакета."},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Обработчик, для выполнения дополнительных действий при закрытии`,name:`onClose`,required:!1,tags:{},type:{name:`(event: SyntheticEvent<Element, Event>) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Содержимое компонента.`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},closeText:{defaultValue:{value:`Скрыть`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Текст подсказки при наведении на иконку закрытия`,name:`closeText`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:"Иконка заменяющая стандартную, соответствующую значению свойства `severity`.",name:`icon`,required:!1,tags:{},type:{name:`ReactNode`}},unmountOnExit:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Alert/types.ts`,name:`TypeLiteral`}],description:"Если `true`, компонент будет размонтирован (удалён из DOM), когда он скрыт или не отображается.",name:`unmountOnExit`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{P as i,Y as n,N as r,J as t};