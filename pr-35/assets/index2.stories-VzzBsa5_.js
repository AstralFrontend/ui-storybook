import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,Va as n,Xt as r,ct as i,en as a,ji as o,lt as ee,xa as s,yn as c}from"./preview-IrKUkjnY.js";import{i as te,r as ne,t as l}from"./ToggleButton-CxQt9O23.js";import{n as re,t as ie}from"./BinOutlineMd-BMpmD_jG.js";import{t as ae}from"./ToggleButton-VfhkjkAc.js";import{n as u,t as oe}from"./CheckOutlineMd-6V1SOj9j.js";import{n as se,t as ce}from"./CartOutlineMd-BSyTIhMp.js";import{S as d,_ as f,a as le,b as p,d as m,h,l as ue,m as g,n as de,p as fe,r as _,s as v,t as y,x as b,y as x}from"./common-gbOxdXZs.js";var S,C,w;function pe(){return(pe=e((()=>{S=n(),b(),p(),y(),C=s(),w=()=>{let[e,t]=(0,S.useState)(`authorized`),n=[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Специальный тариф для сдачи отчётности в ФНС, СФР, МПД, ЭТК, ФСС (ЭЛН + СЭДО), Росстат за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},...le];return(0,C.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`Тарифы Астрал Отчёт 5.0`,columns:3,value:e,onChange:t,children:n.map(({id:e,title:t,description:n,price:r,period:i})=>(0,C.jsx)(x,{value:e,icon:(0,C.jsx)(m,{}),header:t,footer:(0,C.jsx)(v,{price:r,period:i}),children:(0,C.jsx)(f,{children:n})},e))})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [tariff, setTariff] = useState<string | null>('authorized');
  const tariffs = [{
    id: 'authorized',
    title: 'Уполномоченная бухгалтерия',
    description: 'Специальный тариф для сдачи отчётности в ФНС, СФР, МПД, ЭТК, ФСС (ЭЛН + СЭДО), Росстат за свою и другие организации',
    price: '5 300 ₽',
    period: '12 мес'
  }, ...FAKE_TARIFFS];
  return <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="Тарифы Астрал Отчёт 5.0" columns={3} value={tariff} onChange={setTariff}>
      {tariffs.map(({
      id,
      title,
      description,
      price,
      period
    }) => <SelectionCard key={id} value={id} icon={<ProductLogo />} header={title} footer={<TariffPrice price={price} period={period} />}>
          <CardDescription>{description}</CardDescription>
        </SelectionCard>)}
    </SelectionCardGroup>;
}`,...w.parameters?.docs?.source}}}})))()}var T,E,D;function me(){return(me=e((()=>{T=n(),b(),ae(),ne(),p(),y(),E=s(),D=()=>{let[e,t]=(0,T.useState)(`windows`);return(0,E.jsx)(fe,{children:(0,E.jsxs)(d,{variant:`standalone`,selectionMode:`multiple`,children:[(0,E.jsx)(x,{value:`authorized`,icon:(0,E.jsx)(m,{}),header:`Уполномоченная бухгалтерия`,footer:(0,E.jsx)(v,{price:`5 300 ₽`,period:`12 мес`}),children:(0,E.jsx)(f,{children:`Отчётность в ФНС, СФР и Росстат за свою и другие организации`})}),(0,E.jsx)(x,{value:`optimal-12`,header:`Оптимальный 12 мес`,footer:(0,E.jsx)(v,{price:`11 000 ₽`,period:`12 мес`})}),(0,E.jsx)(x,{value:`optimal-24`,header:`Оптимальный 24 мес`,children:(0,E.jsx)(f,{children:`Отчётность в 4 контролирующих органа`})}),(0,E.jsx)(x,{value:`workplace`,icon:(0,E.jsx)(m,{}),header:`Дополнительное рабочее место`,footer:(0,E.jsx)(v,{price:`1 200 ₽`,period:`12 мес`}),children:(0,E.jsxs)(te,{value:e,exclusive:!0,onChange:(e,n)=>n&&t(n),onClick:e=>e.stopPropagation(),children:[(0,E.jsx)(l,{value:`windows`,children:`ОС Windows`}),(0,E.jsx)(l,{value:`macos`,children:`ОС macOS`})]})})]})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [os, setOs] = useState('windows');
  return <ColumnStoryWrapper>
      <SelectionCardGroup variant="standalone" selectionMode="multiple">
        <SelectionCard value="authorized" icon={<ProductLogo />} header="Уполномоченная бухгалтерия" footer={<TariffPrice price="5 300 ₽" period="12 мес" />}>
          <CardDescription>
            Отчётность в ФНС, СФР и Росстат за свою и другие организации
          </CardDescription>
        </SelectionCard>
        <SelectionCard value="optimal-12" header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
        <SelectionCard value="optimal-24" header="Оптимальный 24 мес">
          <CardDescription>
            Отчётность в 4 контролирующих органа
          </CardDescription>
        </SelectionCard>
        <SelectionCard value="workplace" icon={<ProductLogo />} header="Дополнительное рабочее место" footer={<TariffPrice price="1 200 ₽" period="12 мес" />}>
          <ToggleButtonGroup value={os} exclusive onChange={(_, newOs) => newOs && setOs(newOs)} onClick={event => event.stopPropagation()}>
            <ToggleButton value="windows">ОС Windows</ToggleButton>
            <ToggleButton value="macos">ОС macOS</ToggleButton>
          </ToggleButtonGroup>
        </SelectionCard>
      </SelectionCardGroup>
    </ColumnStoryWrapper>;
}`,...D.parameters?.docs?.source},description:{story:`Может содержать любой произвольный контент, компонент даёт только раскладку. Клик по интерактивным элементам в содержимом не меняет выбор`,...D.parameters?.docs?.description}}};try{D.displayName=`Content`,D.__docgenInfo={description:`Может содержать любой произвольный контент, компонент даёт только раскладку. Клик по интерактивным элементам в содержимом не меняет выбор`,displayName:`Content`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Content.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var he,O,k,A,j,M,N,P;function F(){return(F=e((()=>{he=n(),ie(),ce(),oe(),r(),b(),c(),p(),y(),O=s(),k=o.span`
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`,A=`tariff-card`,j=o(k)`
  color: ${({$isError:e,theme:t})=>e?t.palette.error.dark:t.palette.primary.main};
`,M=e=>t`
  color: ${e.palette.error.dark};

  svg:first-of-type {
    display: none;
  }

  svg:last-of-type {
    display: block;
  }
`,N=o(j)`
  svg:last-of-type {
    display: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${A}:has(:focus-visible) & {
    ${({theme:e})=>M(e)}
  }

  ${a} {
    .${A}:hover & {
      ${({theme:e})=>M(e)}
    }
  }
`,P=()=>{let[e,t]=(0,he.useState)([`docs-200`]),n=[{id:`docs-200`,title:`200 документов на 1 год`,price:`1 800 ₽`},...de];return(0,O.jsx)(d,{variant:`standalone`,selectionMode:`multiple`,groupLabel:`Тарифы Доки`,columns:3,value:e,onChange:t,renderIndicator:({isSelected:e,isDisabled:t,isError:n})=>e?t?(0,O.jsx)(j,{$isError:n,children:(0,O.jsx)(u,{})}):(0,O.jsxs)(N,{$isError:n,children:[(0,O.jsx)(u,{}),(0,O.jsx)(re,{})]}):(0,O.jsx)(k,{children:(0,O.jsx)(se,{})}),children:n.map(({id:e,title:t,price:n})=>(0,O.jsx)(x,{className:A,value:e,icon:(0,O.jsx)(m,{color:`#7856ff`}),header:t,footer:(0,O.jsx)(v,{price:n,period:`12 мес`}),children:(0,O.jsx)(f,{children:`Включает возможность отправки документов ЭДО и ЭПД`})},e))})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [tariffs, setTariffs] = useState<string[]>(['docs-200']);
  const tariffsList = [{
    id: 'docs-200',
    title: '200 документов на 1 год',
    price: '1 800 ₽'
  }, ...FAKE_DOCS_TARIFFS];
  return <SelectionCardGroup variant="standalone" selectionMode="multiple" groupLabel="Тарифы Доки" columns={3} value={tariffs} onChange={setTariffs} renderIndicator={({
    isSelected,
    isDisabled,
    isError
  }) => {
    if (!isSelected) {
      return <IndicatorIcon>
              <CartOutlineMd />
            </IndicatorIcon>;
    }

    // Недоступную карточку не снять с выбора, поэтому корзину не показываем
    if (isDisabled) {
      return <SelectedIndicatorIcon $isError={isError}>
              <CheckOutlineMd />
            </SelectedIndicatorIcon>;
    }
    return <RemovableIndicatorIcon $isError={isError}>
            <CheckOutlineMd />
            <BinOutlineMd />
          </RemovableIndicatorIcon>;
  }}>
      {tariffsList.map(({
      id,
      title,
      price
    }) => <SelectionCard key={id} className={TARIFF_CARD_CLASSNAME} value={id} icon={<ProductLogo color="#7856ff" />} header={title} footer={<TariffPrice price={price} period="12 мес" />}>
          <CardDescription>
            Включает возможность отправки документов ЭДО и ЭПД
          </CardDescription>
        </SelectionCard>)}
    </SelectionCardGroup>;
}`,...P.parameters?.docs?.source},description:{story:"Собственный индикатор выбора через `renderIndicator`",...P.parameters?.docs?.description}}};try{P.displayName=`CustomIndicator`,P.__docgenInfo={description:"Собственный индикатор выбора через `renderIndicator`",displayName:`CustomIndicator`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/CustomIndicator.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var I,L;function R(){return(R=e((()=>{b(),p(),y(),I=s(),L={render:e=>(0,I.jsxs)(d,{...e,children:[(0,I.jsx)(x,{value:`authorized`,icon:(0,I.jsx)(m,{}),header:`Уполномоченная бухгалтерия`,footer:(0,I.jsx)(v,{price:`5 300 ₽`,period:`12 мес`}),children:(0,I.jsx)(f,{children:`Отчётность за свою и другие организации`})}),(0,I.jsx)(x,{value:`optimal-12`,icon:(0,I.jsx)(m,{}),header:`Оптимальный 12 мес`,footer:(0,I.jsx)(v,{price:`11 000 ₽`,period:`12 мес`}),children:(0,I.jsx)(f,{children:`Отчётность в 4 контролирующих органа`})}),(0,I.jsx)(x,{value:`optimal-24`,icon:(0,I.jsx)(m,{}),header:`Оптимальный 24 мес`,footer:(0,I.jsx)(v,{price:`18 700 ₽`,period:`24 мес`}),disabled:!0,children:(0,I.jsx)(f,{children:`Недоступен для ИП`})})]}),args:{groupLabel:`Тарифы Астрал Отчёт 5.0`,selectionMode:`single`,variant:`standalone`,columns:3,shape:`medium`,disabled:!1,isError:!1,errorText:`Выберите тариф`,required:!1},parameters:{docs:{disable:!0}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <SelectionCardGroup {...args}>
      <SelectionCard value="authorized" icon={<ProductLogo />} header="Уполномоченная бухгалтерия" footer={<TariffPrice price="5 300 ₽" period="12 мес" />}>
        <CardDescription>
          Отчётность за свою и другие организации
        </CardDescription>
      </SelectionCard>
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />}>
        <CardDescription>Отчётность в 4 контролирующих органа</CardDescription>
      </SelectionCard>
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} disabled>
        <CardDescription>Недоступен для ИП</CardDescription>
      </SelectionCard>
    </SelectionCardGroup>,
  args: {
    groupLabel: 'Тарифы Астрал Отчёт 5.0',
    selectionMode: 'single',
    variant: 'standalone',
    columns: 3,
    shape: 'medium',
    disabled: false,
    isError: false,
    errorText: 'Выберите тариф',
    required: false
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V;function H(){return(H=e((()=>{z=n(),b(),p(),y(),B=s(),V=()=>{let[e,t]=(0,z.useState)(`fns`),[n,r]=(0,z.useState)([`fns`,`sfr`]),[i,a]=(0,z.useState)(`fns`),[o,ee]=(0,z.useState)([`fns`,`sfr`]),s=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},..._].map(({id:e,title:t,description:n})=>(0,B.jsx)(x,{value:e,header:t,children:n},e));return(0,B.jsxs)(g,{children:[(0,B.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`standalone, single`,value:e,onChange:t,children:s}),(0,B.jsx)(d,{variant:`standalone`,selectionMode:`multiple`,groupLabel:`standalone, multiple`,value:n,onChange:r,children:s}),(0,B.jsx)(h,{}),(0,B.jsx)(d,{variant:`grouped`,selectionMode:`single`,groupLabel:`grouped, single`,value:i,onChange:a,children:s}),(0,B.jsx)(d,{variant:`grouped`,selectionMode:`multiple`,groupLabel:`grouped, multiple`,value:o,onChange:ee,children:s})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const [standaloneRecipient, setStandaloneRecipient] = useState<string | null>('fns');
  const [standaloneRecipients, setStandaloneRecipients] = useState<string[]>(['fns', 'sfr']);
  const [groupedRecipient, setGroupedRecipient] = useState<string | null>('fns');
  const [groupedRecipients, setGroupedRecipients] = useState<string[]>(['fns', 'sfr']);
  const recipients = [{
    id: 'fns',
    title: 'ФНС',
    description: 'Налоговая и бухгалтерская отчётность'
  }, ...FAKE_RECIPIENTS];
  const cards = recipients.map(({
    id,
    title,
    description
  }) => <SelectionCard key={id} value={id} header={title}>
      {description}
    </SelectionCard>);
  return <ComparisonGrid>
      <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="standalone, single" value={standaloneRecipient} onChange={setStandaloneRecipient}>
        {cards}
      </SelectionCardGroup>
      <SelectionCardGroup variant="standalone" selectionMode="multiple" groupLabel="standalone, multiple" value={standaloneRecipients} onChange={setStandaloneRecipients}>
        {cards}
      </SelectionCardGroup>
      <SectionDivider />
      <SelectionCardGroup variant="grouped" selectionMode="single" groupLabel="grouped, single" value={groupedRecipient} onChange={setGroupedRecipient}>
        {cards}
      </SelectionCardGroup>
      <SelectionCardGroup variant="grouped" selectionMode="multiple" groupLabel="grouped, multiple" value={groupedRecipients} onChange={setGroupedRecipients}>
        {cards}
      </SelectionCardGroup>
    </ComparisonGrid>;
}`,...V.parameters?.docs?.source},description:{story:"Параметр `selectionMode` задаёт режим выбора:\n- `single` — одна карточка\n- `multiple` — несколько карточек",...V.parameters?.docs?.description}}};try{V.displayName=`SelectionMode`,V.__docgenInfo={description:"Параметр `selectionMode` задаёт режим выбора:\n- `single` — одна карточка\n- `multiple` — несколько карточек",displayName:`SelectionMode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/SelectionMode.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W,G;function K(){return(K=e((()=>{i(),b(),p(),y(),U=s(),W=`repeat(auto-fit, minmax(240px, 1fr))`,G=()=>(0,U.jsxs)(ee,{container:!0,spacing:6,children:[(0,U.jsxs)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`medium`,columns:W,value:`optimal-12`,children:[(0,U.jsx)(x,{value:`optimal-12`,icon:(0,U.jsx)(m,{}),header:`Оптимальный 12 мес`,footer:(0,U.jsx)(v,{price:`11 000 ₽`,period:`12 мес`})}),(0,U.jsx)(x,{value:`optimal-24`,icon:(0,U.jsx)(m,{}),header:`Оптимальный 24 мес`,footer:(0,U.jsx)(v,{price:`18 700 ₽`,period:`24 мес`})})]}),(0,U.jsxs)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`large`,columns:W,shape:`large`,value:`optimal-12`,children:[(0,U.jsx)(x,{value:`optimal-12`,icon:(0,U.jsx)(m,{}),header:`Оптимальный 12 мес`,footer:(0,U.jsx)(v,{price:`11 000 ₽`,period:`12 мес`})}),(0,U.jsx)(x,{value:`optimal-24`,icon:(0,U.jsx)(m,{}),header:`Оптимальный 24 мес`,footer:(0,U.jsx)(v,{price:`18 700 ₽`,period:`24 мес`})})]})]}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <Grid container spacing={6}>
    <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="medium" columns={COLUMNS} value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>

    <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="large" columns={COLUMNS} shape="large" value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>
  </Grid>`,...G.parameters?.docs?.source}}}})))()}var ge,q,_e,J;function ve(){return(ve=e((()=>{ge=n(),b(),c(),p(),y(),q=s(),_e=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`,J=()=>{let e=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},..._],t=[{label:`Обычное`,isError:!1,disabled:!1},{label:`Ошибка`,isError:!0,errorText:`Получатель недоступен`,disabled:!1},{label:`Недоступно`,isError:!1,disabled:!0}];return(0,q.jsx)(_e,{children:[`standalone`,`grouped`].map((n,r)=>(0,q.jsxs)(ge.Fragment,{children:[r>0&&(0,q.jsx)(h,{}),t.map(({label:t,isError:r,errorText:i,disabled:a})=>(0,q.jsx)(d,{variant:n,selectionMode:`single`,groupLabel:`${t}, ${n}`,value:`fns`,isError:r,errorText:i,disabled:a,children:e.map(({id:e,title:t,description:n})=>(0,q.jsx)(x,{value:e,header:t,disabled:e===`statistics`,children:n},e))},`${t}-${n}`))]},n))})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const recipients = [{
    id: 'fns',
    title: 'ФНС',
    description: 'Налоговая и бухгалтерская отчётность'
  }, ...FAKE_RECIPIENTS];
  const states = [{
    label: 'Обычное',
    isError: false,
    disabled: false
  }, {
    label: 'Ошибка',
    isError: true,
    errorText: 'Получатель недоступен',
    disabled: false
  }, {
    label: 'Недоступно',
    isError: false,
    disabled: true
  }];
  const variants = ['standalone', 'grouped'] as const;
  return <StatesGrid>
      {variants.map((variant, index) => <Fragment key={variant}>
          {index > 0 && <SectionDivider />}
          {states.map(({
        label,
        isError,
        errorText,
        disabled
      }) => <SelectionCardGroup key={\`\${label}-\${variant}\`} variant={variant} selectionMode="single" groupLabel={\`\${label}, \${variant}\`} value="fns" isError={isError} errorText={errorText} disabled={disabled}>
              {recipients.map(({
          id,
          title,
          description
        }) => <SelectionCard key={id} value={id} header={title} disabled={id === 'statistics'}>
                  {description}
                </SelectionCard>)}
            </SelectionCardGroup>)}
        </Fragment>)}
    </StatesGrid>;
}`,...J.parameters?.docs?.source},description:{story:`Состояния ошибки и недоступности группы и отдельной карточки`,...J.parameters?.docs?.description}}};try{J.displayName=`States`,J.__docgenInfo={description:`Состояния ошибки и недоступности группы и отдельной карточки`,displayName:`States`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/States.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X,Z;function ye(){return(ye=e((()=>{Y=n(),b(),p(),y(),X=s(),Z=()=>{let[e,t]=(0,Y.useState)(`fns`),[n,r]=(0,Y.useState)(`fns`),i=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},..._];return(0,X.jsxs)(g,{children:[(0,X.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`standalone`,value:e,onChange:t,children:i.map(({id:e,title:t,description:n})=>(0,X.jsx)(x,{value:e,header:t,children:n},e))}),(0,X.jsx)(h,{}),(0,X.jsx)(d,{variant:`grouped`,selectionMode:`single`,groupLabel:`grouped`,value:n,onChange:r,children:i.map(({id:e,title:t,description:n})=>(0,X.jsx)(x,{value:e,header:t,children:n},e))})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [standaloneRecipient, setStandaloneRecipient] = useState<string | null>('fns');
  const [groupedRecipient, setGroupedRecipient] = useState<string | null>('fns');
  const recipients = [{
    id: 'fns',
    title: 'ФНС',
    description: 'Налоговая и бухгалтерская отчётность'
  }, ...FAKE_RECIPIENTS];
  return <ComparisonGrid>
      <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="standalone" value={standaloneRecipient} onChange={setStandaloneRecipient}>
        {recipients.map(({
        id,
        title,
        description
      }) => <SelectionCard key={id} value={id} header={title}>
            {description}
          </SelectionCard>)}
      </SelectionCardGroup>
      <SectionDivider />
      <SelectionCardGroup variant="grouped" selectionMode="single" groupLabel="grouped" value={groupedRecipient} onChange={setGroupedRecipient}>
        {recipients.map(({
        id,
        title,
        description
      }) => <SelectionCard key={id} value={id} header={title}>
            {description}
          </SelectionCard>)}
      </SelectionCardGroup>
    </ComparisonGrid>;
}`,...Z.parameters?.docs?.source},description:{story:"Параметр `variant` задаёт раскладку карточек:\n- `standalone` — отдельные карточки\n- `grouped` — общий список",...Z.parameters?.docs?.description}}};try{Z.displayName=`Variant`,Z.__docgenInfo={description:"Параметр `variant` задаёт раскладку карточек:\n- `standalone` — отдельные карточки\n- `grouped` — общий список",displayName:`Variant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Variant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Q,be,xe;function $(){return($=e((()=>{p(),pe(),me(),F(),y(),R(),H(),K(),ve(),ye(),Q=s(),be={title:`Form-Controls/SelectionCard`,component:x,decorators:[(e,t)=>(0,Q.jsx)(ue,{children:(0,Q.jsx)(e,{...t})})],parameters:{docs:{description:{component:`Карточка выбора. Используется внутри \`SelectionCardGroup\`.
Заменяет устаревший [RadioCard](/story/form-controls-selectionCard-deprecated-radioCard--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=15078-1578)`}}}},xe=[`Interaction`,`BasicUsage`,`Variant`,`SelectionMode`,`States`,`Content`,`Shape`,`CustomIndicator`]})))()}$();export{w as BasicUsage,D as Content,P as CustomIndicator,L as Interaction,V as SelectionMode,G as Shape,J as States,Z as Variant,xe as __namedExportsOrder,be as default};