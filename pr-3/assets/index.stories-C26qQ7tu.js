import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Va as a,_n as o,ct as s,dt as c,ei as l,ft as u,gn as ee,ji as d,lt as f,wn as te,xa as p,yn as ne}from"./preview-_BGonndb.js";import{n as m,t as h}from"./useViewportType-DQf6U97z.js";import{s as re,t as ie}from"./DataGrid-DyQ1DapZ.js";import{n as ae}from"./useUpdateEffect-1M7K-5vO.js";import{t as oe}from"./useUpdateEffect-DBsZ-wg8.js";import{l as g,t as _}from"./DataGridActionCell-RNQOU38Z.js";import{t as v}from"./DataGridActionCell-BalcHqSF.js";import{n as se,t as ce}from"./RefreshOutlineMd-DCEWSIRo.js";var y,b,x;function S(){return(S=e((()=>{i(),y={root:r(`status`),marker:r(`status__marker`),colorGrey:r(`status_color-grey`),colorPrimary:r(`status_color-primary`),colorSuccess:r(`status_color-success`),colorWarning:r(`status_color-warning`),colorError:r(`status_color-error`),sizeSmall:r(`status_size-small`),sizeMedium:r(`status_size-medium`),variantText:r(`status_variant-text`),variantLight:r(`status_variant-light`),animExit:r(`status_anim-exit`),animEnter:r(`status_anim-enter`)},b=`status-content-exit`,x=`status-content-enter`})))()}var C,w,T;function E(){return(E=e((()=>{ee(),ne(),c(),S(),C=d.span`
  transform-origin: center;

  display: inline-flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  min-width: 0;
  max-width: 100%;

  &.${y.variantLight} {
    border-radius: ${({theme:e})=>e.shape.medium};
  }

  &.${y.sizeSmall}.${y.variantLight} {
    height: ${({theme:e})=>e.spacing(8)};
    padding: ${({theme:e})=>e.microSpacing(3,6,3,2)};
  }

  &.${y.sizeMedium}.${y.variantLight} {
    height: ${({theme:e})=>e.spacing(10)};
    padding: ${({theme:e})=>e.microSpacing(5,6,5,3)};
  }

  &.${y.variantLight} {
    &.${y.colorGrey} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
    } 

    &.${y.colorPrimary} {
      background-color: ${({theme:e})=>e.palette.primary[100]};
    }

    &.${y.colorSuccess} {
      background-color: ${({theme:e})=>e.palette.green[100]};
    }

    &.${y.colorWarning} {
      background-color: ${({theme:e})=>e.palette.yellow[100]};
    }

    &.${y.colorError} {
      background-color: ${({theme:e})=>e.palette.red[100]};
    }
  }

  &.${y.colorGrey} .${y.marker} {
    color: ${({theme:e})=>e.palette.grey[800]};
  }

  &.${y.colorPrimary} .${y.marker} {
    color: ${({theme:e})=>e.palette.primary[800]};
  }

  &.${y.colorSuccess} .${y.marker} {
    color: ${({theme:e})=>e.palette.green[800]};
  }

  &.${y.colorWarning} .${y.marker} {
    color: ${({theme:e})=>e.palette.yellow[800]};
  }

  &.${y.colorError} .${y.marker} {
    color: ${({theme:e})=>e.palette.red[800]};
  }

  &.${y.animExit} {
    animation: ${b}
      ${({theme:e})=>e.transitions.duration.shortest}ms linear forwards;
  }

  &.${y.animEnter} {
    animation: ${x}
      ${({theme:e})=>e.transitions.duration.shortest}ms linear both;
  }

  @keyframes ${b} {
    from {
      transform: translateY(0) scale(1);

      opacity: 1;
    }

    to {
      transform: translateY(-${({theme:e})=>e.spacing(1)}) scale(0.94);

      opacity: 0;
    }
  }

  @keyframes ${x} {
    from {
      transform: translateY(${({theme:e})=>e.microSpacing(3)}) scale(0.94);

      opacity: 0;
    }

    to {
      transform: translateY(0) scale(1);

      opacity: 1;
    }
  }
`,w=d(o)`
  flex-shrink: 0;
`,T=d(u)`
  overflow: hidden;
  flex: 1;

  min-width: 0;

  text-overflow: ellipsis;
  white-space: nowrap;
`})))()}var D,O;function k(){return(k=e((()=>{D=a(),oe(),O=({status:e,label:t})=>{let n=(0,D.useRef)({status:e,label:t}),[r,i]=(0,D.useState)(`idle`);ae(()=>{i(`exit`)},[e,t]);let a=a=>{if(a.target===a.currentTarget){if(r===`exit`){n.current={status:e,label:t},i(`enter`);return}r===`enter`&&i(`idle`)}},o=(e!==n.current.status||t!==n.current.label)&&r===`idle`;return{displayStatus:r===`exit`||o?n.current.status:e,displayLabel:r===`exit`||o?n.current.label:t,phase:r,handleAnimationEnd:a}}})))()}function A(){return(A=e((()=>{k()})))()}var j,M,N;function P(){return(P=e((()=>{l(),te(),S(),E(),A(),j=p(),M=n(y.root,{variants:{size:{small:y.sizeSmall,medium:y.sizeMedium},variant:{text:y.variantText,light:y.variantLight},phase:{idle:``,exit:y.animExit,enter:y.animEnter},color:{grey:y.colorGrey,primary:y.colorPrimary,success:y.colorSuccess,warning:y.colorWarning,error:y.colorError}}}),N=({label:e,status:n,size:r=`medium`,variant:i=`text`,className:a})=>{let{displayStatus:o,displayLabel:s,phase:c,handleAnimationEnd:l}=O({label:e,status:n});return(0,j.jsxs)(C,{className:t(M({size:r,variant:i,phase:c,color:o}),a),onAnimationEnd:l,children:[(0,j.jsx)(w,{"aria-hidden":!0,className:y.marker,viewBox:`0 0 20 20`,width:`20px`,height:`20px`,children:(0,j.jsx)(`circle`,{cx:`10`,cy:`10`,r:`3.33333`})}),(0,j.jsx)(T,{component:`span`,children:s})]})};try{N.displayName=`Status`,N.__docgenInfo={description:``,displayName:`Status`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Status/Status.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/types.ts`,name:`TypeLiteral`}],description:`Текст статуса.`,name:`label`,required:!0,tags:{},type:{name:`string`}},status:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/types.ts`,name:`TypeLiteral`}],description:"Смысловой цвет маркера и, для `light`, фона.",name:`status`,required:!0,tags:{},type:{name:`enum`,raw:`StatusColor`,value:[{value:`"error"`},{value:`"success"`},{value:`"warning"`},{value:`"primary"`},{value:`"grey"`}]}},size:{defaultValue:{value:`medium`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/types.ts`,name:`TypeLiteral`}],description:`Размер статусного элемента.`,name:`size`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`StatusSize`,value:[{value:`"small"`},{value:`"medium"`}]}},variant:{defaultValue:{value:`text`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/types.ts`,name:`TypeLiteral`}],description:`Вариант без фона или с фоновой заливкой.`,name:`variant`,required:!1,tags:{default:`'text'`},type:{name:`enum`,raw:`StatusVariant`,value:[{value:`"text"`},{value:`"light"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/types.ts`,name:`TypeLiteral`}],description:`Дополнительный CSS-класс корневого элемента.`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var F,I;function L(){return(L=e((()=>{F=[`grey`,`primary`,`success`,`warning`,`error`],I={grey:`Не оплачен`,primary:`На проверке`,success:`Оплачен 20.07.2026`,warning:`Ожидает оплаты`,error:`Ошибка оплаты`}})))()}var R;function z(){return(z=e((()=>{R=[{id:`1`,documentName:`Счёт №1042`,amount:`12 450 ₽`,status:`warning`,statusLabel:`Ожидает оплаты`},{id:`2`,documentName:`Счёт №1038`,amount:`8 200 ₽`,status:`success`,statusLabel:`Оплачен 20.07.2026`},{id:`3`,documentName:`Счёт №1031`,amount:`3 100 ₽`,status:`grey`,statusLabel:`Не оплачен`},{id:`4`,documentName:`Счёт №1024`,amount:`21 000 ₽`,status:`error`,statusLabel:`Ошибка оплаты`}]})))()}var B,V,H;function U(){return(U=e((()=>{B=a(),ce(),ie(),v(),L(),V=p(),H=({renderStatus:e,initialRows:t})=>{let[n,r]=(0,B.useState)(t),[i,a]=(0,B.useState)([]),[o,s]=(0,B.useState)(),c=e=>{r(t=>t.map(t=>{if(t.id!==e.id)return t;let n=F.indexOf(t.status),r=F[(n+1)%F.length];return{...t,status:r,statusLabel:I[r]}}))};return(0,V.jsx)(re,{keyId:`id`,rows:n,columns:[{field:`documentName`,label:`Документ`,sortable:!0,width:`35%`},{field:`amount`,label:`Сумма`,sortable:!0,width:`20%`},{field:`status`,label:`Статус`,sortable:!0,width:`200px`,renderCell:e},{field:`actions`,label:`Действия`,sortable:!1,align:`center`,width:`120px`,minWidth:`120px`,renderCell:e=>(0,V.jsx)(_,{row:e,mainActions:()=>(0,V.jsx)(g,{actions:[{icon:(0,V.jsx)(se,{}),name:`Обновить статус`,onClick:()=>c(e)}]})})}],selectedRows:i,onSelectRow:a,onSort:s,sorting:o,onRetry:()=>{}})};try{H.displayName=`PaymentStatusTable`,H.__docgenInfo={description:``,displayName:`PaymentStatusTable`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Status/stories/common/PaymentStatusTable.tsx`,methods:[],props:{renderStatus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/stories/common/PaymentStatusTable.tsx`,name:`TypeLiteral`}],description:``,name:`renderStatus`,required:!0,tags:{},type:{name:`(row: PaymentTableRow) => ReactNode`}},initialRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Status/stories/common/PaymentStatusTable.tsx`,name:`TypeLiteral`}],description:``,name:`initialRows`,required:!0,tags:{},type:{name:`PaymentTableRow[]`}}},tags:{}}}catch{}})))()}function W(){return(W=e((()=>{L(),z(),U()})))()}var G,K;function q(){return(q=e((()=>{P(),W(),G=p(),K=()=>(0,G.jsx)(H,{initialRows:R,renderStatus:e=>(0,G.jsx)(N,{status:e.status,label:e.statusLabel,variant:`light`,size:`small`})}),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => <PaymentStatusTable initialRows={PAYMENT_TABLE_ROWS} renderStatus={row => <Status status={row.status} label={row.statusLabel} variant="light" size="small" />} />`,...K.parameters?.docs?.source}}}})))()}var J,Y;function X(){return(X=e((()=>{s(),c(),h(),P(),W(),J=p(),Y=()=>{let{isMobile:e}=m(),t=e?`row`:`column`;return(0,J.jsxs)(f,{container:!0,spacing:5,children:[(0,J.jsx)(u,{variant:`body1`,children:`Variant: text`}),(0,J.jsx)(f,{container:!0,direction:t,spacing:4,columns:`repeat(2, auto)`,children:F.map(e=>(0,J.jsx)(N,{status:e,label:I[e]},e))}),(0,J.jsx)(u,{variant:`body1`,children:`Variant: light, size: small`}),(0,J.jsx)(f,{container:!0,direction:t,spacing:4,columns:`repeat(2, auto)`,children:F.map(e=>(0,J.jsx)(N,{status:e,label:I[e],size:`small`,variant:`light`},`small-${e}`))}),(0,J.jsx)(u,{variant:`body1`,children:`Variant: light, size: medium`}),(0,J.jsx)(f,{container:!0,direction:t,spacing:4,columns:`repeat(2, auto)`,children:F.map(e=>(0,J.jsx)(N,{status:e,label:I[e],size:`medium`,variant:`light`},`medium-${e}`))})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const {
    isMobile
  } = useViewportType();
  const autoFlow = isMobile ? 'row' : 'column';
  return <Grid container spacing={5}>
      <Typography variant="body1">Variant: text</Typography>
      <Grid container direction={autoFlow} spacing={4} columns="repeat(2, auto)">
        {STATUS_COLORS.map(status => <Status key={status} status={status} label={STATUS_LABELS[status]} />)}
      </Grid>
      <Typography variant="body1">Variant: light, size: small</Typography>
      <Grid container direction={autoFlow} spacing={4} columns="repeat(2, auto)">
        {STATUS_COLORS.map(status => <Status key={\`small-\${status}\`} status={status} label={STATUS_LABELS[status]} size="small" variant="light" />)}
      </Grid>
      <Typography variant="body1">Variant: light, size: medium</Typography>
      <Grid container direction={autoFlow} spacing={4} columns="repeat(2, auto)">
        {STATUS_COLORS.map(status => <Status key={\`medium-\${status}\`} status={status} label={STATUS_LABELS[status]} size="medium" variant="light" />)}
      </Grid>
    </Grid>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{P(),q(),X(),Z={title:`Statuses/Status`,component:N,parameters:{docs:{description:{component:`Неинтерактивный текстовый статус с цветным маркером для таблиц и списков.`}}}},Q=[`BasicUsage`,`Variants`]})))()}$();export{K as BasicUsage,Y as Variants,Q as __namedExportsOrder,Z as default};