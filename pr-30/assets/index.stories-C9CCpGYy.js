import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as ee}from"./preview-Cpvm_2Dh.js";import{t as te}from"./Tooltip-DgFpoF7H.js";import{n as c,t as l}from"./ActionGroup-CZ5w3tkM.js";import{t as u}from"./Tooltip-D16OsRek.js";import{t as d}from"./Badge-BxnPWzQb.js";import{t as f}from"./Badge-CYK2WqUO.js";import{n as p,t as m}from"./AddOutlineMd-Bz4iYQcL.js";import{a as ne,c as re,i as ie,n as h,s as g,t as ae}from"./ExportOutlineMd-B5gOYyY9.js";import{n as _,t as v}from"./CompanyOutlineMd-DpWtOGEm.js";import{t as y}from"./HintPopover-b0WdViPS.js";import{t as oe}from"./HintPopover-BYzRaUDj.js";var b;function x(){return(x=e((()=>{s(),b=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};

  padding-block: ${({theme:e})=>e.spacing(5)};
`})))()}function S(){return(S=e((()=>{x()})))()}var C,w;function T(){return(T=e((()=>{m(),v(),c(),S(),C=o(),w=()=>(0,C.jsx)(b,{children:(0,C.jsx)(l,{main:[{text:`действие 1`,startIcon:(0,C.jsx)(p,{})},{text:`действие 2`,isNested:!0,actions:[{text:`действие в списке 1`},{text:`действие в списке 2`}]},{text:`действие 3`,color:`error`}],secondaryVisible:[{name:`О компании`,icon:(0,C.jsx)(_,{})},{name:`Добавить`,icon:(0,C.jsx)(p,{}),disabled:!0,disabledReason:`Действие недоступно, т.к. у вас недостаточно прав`}],secondary:[{text:`Второстепенное действие 1`},{text:`Второстепенное действие 2`}]})}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <ActionGroup main={[{
    text: 'действие 1',
    startIcon: <AddOutlineMd />
  }, {
    text: 'действие 2',
    isNested: true,
    actions: [{
      text: 'действие в списке 1'
    }, {
      text: 'действие в списке 2'
    }]
  }, {
    text: 'действие 3',
    color: 'error'
  }]} secondaryVisible={[{
    name: 'О компании',
    icon: <CompanyOutlineMd />
  }, {
    name: 'Добавить',
    icon: <AddOutlineMd />,
    disabled: true,
    disabledReason: 'Действие недоступно, т.к. у вас недостаточно прав'
  }]} secondary={[{
    text: 'Второстепенное действие 1'
  }, {
    text: 'Второстепенное действие 2'
  }]} />
  </StoryWrapper>`,...w.parameters?.docs?.source},description:{story:`ActionGroup - Блок кнопок действий, состоит из:

- **Основных действий**: отображаются в "полном формате кнопок"

- **Второстепенных действий**: отображаются в виде выпадающего списка

- **Второстепенных видимых действий**: отображаются в виде кнопок с иконкой и тултипом`,...w.parameters?.docs?.description}}};try{w.displayName=`BasicUsage`,w.__docgenInfo={description:`ActionGroup - Блок кнопок действий, состоит из:

- **Основных действий**: отображаются в "полном формате кнопок"

- **Второстепенных действий**: отображаются в виде выпадающего списка

- **Второстепенных видимых действий**: отображаются в виде кнопок с иконкой и тултипом`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionGroup/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{E=ee(),g(),ie(),ae(),f(),t(),oe(),s(),u(),n(),c(),D=o(),O=12,k=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(10)};

  max-width: 100%;
  padding-block: ${({theme:e})=>e.spacing(10,40)};
`,A=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing(2)};
`,j=i(l)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-wrap: wrap;
    gap: ${({theme:e})=>e.spacing(4)};

    & > * {
      flex: 1 1 40%;
    }
  }
`,M=({isTooltipShown:e,onToggleTooltip:t,onShowHint:n})=>(0,D.jsxs)(A,{children:[(0,D.jsx)(a,{variant:`text`,onClick:t,children:e?`Скрыть тултип`:`Показать тултип`}),(0,D.jsx)(a,{variant:`text`,onClick:n,children:`Показать подсказку`})]}),N=()=>(0,D.jsx)(r,{variant:`body1`,children:`За сутки поступило 3 заявки на выпуск сертификата`}),P=()=>{let[e,t]=(0,E.useState)(!0),[n,r]=(0,E.useState)(!1),i=()=>t(e=>!e),o=()=>r(!0),s=()=>r(!1);return(0,D.jsxs)(k,{children:[(0,D.jsx)(M,{isTooltipShown:e,onToggleTooltip:i,onShowHint:o}),(0,D.jsx)(j,{main:[{text:`Экспорт`,renderAction:({elementProps:t})=>(0,D.jsx)(te,{title:`Выгрузка придёт на почту`,placement:`top`,open:e,children:(0,D.jsx)(a,{...t,startIcon:(0,D.jsx)(h,{})})})},{text:`Заявки`,startIcon:(0,D.jsx)(ne,{}),onClick:s,renderAction:({defaultElement:e,anchorEl:t})=>(0,D.jsxs)(D.Fragment,{children:[e,(0,D.jsx)(y,{anchorEl:n?t:null,onClose:s,placement:`bottom-start`,title:`Новые заявки`,disableAutoFocus:!0,children:(0,D.jsx)(N,{})})]})},{text:`Корзина`,note:`Удалённые документы хранятся 30 дней`,startIcon:(0,D.jsx)(re,{}),renderAction:({defaultElement:e})=>(0,D.jsx)(d,{color:`error`,badgeContent:O,children:e})}]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [isTooltipShown, setIsTooltipShown] = useState(true);
  const [isHintShown, setIsHintShown] = useState(false);
  const toggleTooltip = () => setIsTooltipShown(isShown => !isShown);
  const showHint = () => setIsHintShown(true);
  const closeHint = () => setIsHintShown(false);
  return <Wrapper>
      <Controls isTooltipShown={isTooltipShown} onToggleTooltip={toggleTooltip} onShowHint={showHint} />

      <StyledActionGroup main={[{
      text: 'Экспорт',
      renderAction: ({
        elementProps
      }) => <Tooltip title="Выгрузка придёт на почту" placement="top" open={isTooltipShown}>
                <Button {...elementProps} startIcon={<ExportOutlineMd />} />
              </Tooltip>
    }, {
      text: 'Заявки',
      startIcon: <DocIncomingOutlineMd />,
      onClick: closeHint,
      renderAction: ({
        defaultElement,
        anchorEl
      }) => <>
                {defaultElement}
                <HintPopover anchorEl={isHintShown ? anchorEl : null} onClose={closeHint} placement="bottom-start" title="Новые заявки" disableAutoFocus>
                  <HintContent />
                </HintPopover>
              </>
    }, {
      text: 'Корзина',
      note: 'Удалённые документы хранятся 30 дней',
      startIcon: <CartOutlineMd />,
      renderAction: ({
        defaultElement
      }) => <Badge color="error" badgeContent={DELETED_DOCS_COUNT}>
                {defaultElement}
              </Badge>
    }]} />
    </Wrapper>;
}`,...P.parameters?.docs?.source},description:{story:"Проп ```renderAction``` подменяет отображение одного действия: стандартную кнопку можно обернуть, собрать заново из готовых свойств или дополнить подсказкой.",...P.parameters?.docs?.description}}};try{P.displayName=`CustomAction`,P.__docgenInfo={description:"Проп ```renderAction``` подменяет отображение одного действия: стандартную кнопку можно обернуть, собрать заново из готовых свойств или дополнить подсказкой.",displayName:`CustomAction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionGroup/stories/CustomAction.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L;function R(){return(R=e((()=>{m(),I=o(),L={args:{main:[{text:`main action 1`,startIcon:(0,I.jsx)(p,{})},{text:`main action 2`,color:`error`}],secondary:[{text:`secondary action 1`},{text:`secondary action 2`}]},parameters:{docs:{disable:!0}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    main: [{
      text: 'main action 1',
      startIcon: <AddOutlineMd />
    }, {
      text: 'main action 2',
      color: 'error'
    }],
    secondary: [{
      text: 'secondary action 1'
    }, {
      text: 'secondary action 2'
    }]
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V,H,U;function W(){return(W=e((()=>{m(),v(),c(),S(),z=o(),B=[{text:`действие 1`,startIcon:(0,z.jsx)(p,{})}],V=[{name:`О компании`,icon:(0,z.jsx)(_,{})}],H=[{text:`Второстепенное действие 1`},{text:`Второстепенное действие 2`}],U=()=>(0,z.jsxs)(b,{children:[(0,z.jsx)(l,{size:`medium`,main:B,secondaryVisible:V,secondary:H}),(0,z.jsx)(l,{size:`large`,main:B,secondaryVisible:V,secondary:H})]}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <ActionGroup size="medium" main={MockMain} secondaryVisible={MockSecondaryVisible} secondary={MockSecondary} />
    <ActionGroup size="large" main={MockMain} secondaryVisible={MockSecondaryVisible} secondary={MockSecondary} />
  </StoryWrapper>`,...U.parameters?.docs?.source}}}})))()}var G,K;function q(){return(q=e((()=>{c(),S(),G=o(),K=()=>(0,G.jsx)(b,{children:(0,G.jsx)(l,{main:[{text:`Отправка по маршруту`,disabled:!0,disabledReason:`Заблокировано`},{text:`Выбор получателя`,note:`Здесь можно выбрать несколько получателей`},{text:`Выберите документ`,isNested:!0,disabled:!0,disabledReason:`На данный момент не доступно`,actions:[{text:`действие в списке 1`},{text:`действие в списке 2`}]}],secondary:[{text:`Выбор получателя`,disabled:!0},{text:`Сменить подразделение`,disabled:!0},{text:`Копировать`},{text:`Удалить`}]})}),K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <ActionGroup main={[{
    text: 'Отправка по маршруту',
    disabled: true,
    disabledReason: 'Заблокировано'
  }, {
    text: 'Выбор получателя',
    note: 'Здесь можно выбрать несколько получателей'
  }, {
    text: 'Выберите документ',
    isNested: true,
    disabled: true,
    disabledReason: 'На данный момент не доступно',
    actions: [{
      text: 'действие в списке 1'
    }, {
      text: 'действие в списке 2'
    }]
  }]} secondary={[{
    text: 'Выбор получателя',
    disabled: true
  }, {
    text: 'Сменить подразделение',
    disabled: true
  }, {
    text: 'Копировать'
  }, {
    text: 'Удалить'
  }]} />
  </StoryWrapper>`,...K.parameters?.docs?.source},description:{story:"Для отображения Tooltip на заблокированном элементе необходимо использовать prop ```disabledReason``` и ```disabled```.<br>\nТак же можно выводить Tooltip на не заблокированном элементе с помощью prop ```note```",...K.parameters?.docs?.description}}};try{K.displayName=`TooltipMainAction`,K.__docgenInfo={description:"Для отображения Tooltip на заблокированном элементе необходимо использовать prop ```disabledReason``` и ```disabled```.<br>\nТак же можно выводить Tooltip на не заблокированном элементе с помощью prop ```note```",displayName:`TooltipMainAction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ActionGroup/stories/TooltipMainAction.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Y;function X(){return(X=e((()=>{c(),S(),J=o(),Y=()=>(0,J.jsx)(b,{children:(0,J.jsx)(l,{main:[{text:`Отправка по маршруту`,disabled:!0},{text:`Выбор получателя`}],secondary:[{text:`Выбор получателя`,disabled:!0},{text:`Сменить подразделение`,disabled:!0,disabledReason:`На данный момент заблокировано`},{text:`Копировать`,note:`Можно что-то скопировать`},{text:`Удалить`,note:`Можно что-то удалить`}]})}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <ActionGroup main={[{
    text: 'Отправка по маршруту',
    disabled: true
  }, {
    text: 'Выбор получателя'
  }]} secondary={[{
    text: 'Выбор получателя',
    disabled: true
  }, {
    text: 'Сменить подразделение',
    disabled: true,
    disabledReason: 'На данный момент заблокировано'
  }, {
    text: 'Копировать',
    note: 'Можно что-то скопировать'
  }, {
    text: 'Удалить',
    note: 'Можно что-то удалить'
  }]} />
  </StoryWrapper>`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{c(),T(),F(),R(),W(),q(),X(),Z={title:`Buttons/ActionGroup`,component:l},Q=[`Interaction`,`BasicUsage`,`TooltipMainAction`,`TooltipSecondaryAction`,`Sizes`,`CustomAction`]})))()}$();export{w as BasicUsage,P as CustomAction,L as Interaction,U as Sizes,K as TooltipMainAction,Y as TooltipSecondaryAction,Q as __namedExportsOrder,Z as default};