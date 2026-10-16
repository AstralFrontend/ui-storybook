import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,Va as n,Xt as r,cn as i,ct as a,en as ee,ji as o,ln as s,lt as te,xa as c,yn as l}from"./preview-Cav_CXYC.js";import{i as ne,r as re,t as ie}from"./ToggleButton-B7q67TPF.js";import{t as ae}from"./Collapse-aHpU7wYb.js";import{t as oe}from"./Collapse-CCR2St2B.js";import{n as se,t as ce}from"./BinOutlineMd-BX7jxgK2.js";import{t as le}from"./ToggleButton-CxLTBvlb.js";import{n as u,t as ue}from"./CheckOutlineMd-D-7hDacC.js";import{n as de,t as fe}from"./CartOutlineMd-DJ1fFVxg.js";import{S as d,_ as f,b as p,c as m,f as h,h as pe,i as g,m as me,n as he,o as _,r as ge,t as v,u as _e,x as y,y as b}from"./common-CcG7Lw1N.js";var ve,x,S;function ye(){return(ye=e((()=>{ve=n(),y(),p(),v(),x=c(),S=()=>{let[e,t]=(0,ve.useState)(`authorized`),n=[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Специальный тариф для сдачи отчётности в ФНС, СФР, МПД, ЭТК, ФСС (ЭЛН + СЭДО), Росстат за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},..._];return(0,x.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`Тарифы Астрал Отчёт 5.0`,columns:3,value:e,onChange:t,children:n.map(({id:e,title:t,description:n,price:r,period:i})=>(0,x.jsx)(b,{value:e,icon:(0,x.jsx)(h,{}),header:t,footer:(0,x.jsx)(m,{price:r,period:i}),children:(0,x.jsx)(f,{children:n})},e))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}}})))()}var be,C,w;function xe(){return(xe=e((()=>{be=n(),y(),le(),re(),p(),v(),C=c(),w=()=>{let[e,t]=(0,be.useState)(`windows`);return(0,C.jsx)(me,{children:(0,C.jsxs)(d,{variant:`standalone`,selectionMode:`multiple`,children:[(0,C.jsx)(b,{value:`authorized`,icon:(0,C.jsx)(h,{}),header:`Уполномоченная бухгалтерия`,footer:(0,C.jsx)(m,{price:`5 300 ₽`,period:`12 мес`}),children:(0,C.jsx)(f,{children:`Отчётность в ФНС, СФР и Росстат за свою и другие организации`})}),(0,C.jsx)(b,{value:`optimal-12`,header:`Оптимальный 12 мес`,footer:(0,C.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,C.jsx)(b,{value:`optimal-24`,header:`Оптимальный 24 мес`,children:(0,C.jsx)(f,{children:`Отчётность в 4 контролирующих органа`})}),(0,C.jsx)(b,{value:`workplace`,icon:(0,C.jsx)(h,{}),header:`Дополнительное рабочее место`,footer:(0,C.jsx)(m,{price:`1 200 ₽`,period:`12 мес`}),children:(0,C.jsxs)(ne,{value:e,exclusive:!0,onChange:(e,n)=>n&&t(n),children:[(0,C.jsx)(ie,{value:`windows`,children:`ОС Windows`}),(0,C.jsx)(ie,{value:`macos`,children:`ОС macOS`})]})})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
          <ToggleButtonGroup value={os} exclusive onChange={(_, newOs) => newOs && setOs(newOs)}>
            <ToggleButton value="windows">ОС Windows</ToggleButton>
            <ToggleButton value="macos">ОС macOS</ToggleButton>
          </ToggleButtonGroup>
        </SelectionCard>
      </SelectionCardGroup>
    </ColumnStoryWrapper>;
}`,...w.parameters?.docs?.source},description:{story:`Может содержать любой произвольный контент, компонент даёт только раскладку. Клик по интерактивным элементам в содержимом не меняет выбор`,...w.parameters?.docs?.description}}};try{w.displayName=`Content`,w.__docgenInfo={description:`Может содержать любой произвольный контент, компонент даёт только раскладку. Клик по интерактивным элементам в содержимом не меняет выбор`,displayName:`Content`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Content.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Se,T,E,D,O,k,A,j;function M(){return(M=e((()=>{Se=n(),ce(),fe(),ue(),r(),y(),l(),p(),v(),T=c(),E=o.span`
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`,D=`tariff-card`,O=o(E)`
  color: ${({$isError:e,theme:t})=>e?t.palette.error.dark:t.palette.primary.main};
`,k=e=>t`
  color: ${e.palette.error.dark};

  svg:first-of-type {
    display: none;
  }

  svg:last-of-type {
    display: block;
  }
`,A=o(O)`
  svg:last-of-type {
    display: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${D}:has(:focus-visible) & {
    ${({theme:e})=>k(e)}
  }

  ${ee} {
    .${D}:hover & {
      ${({theme:e})=>k(e)}
    }
  }
`,j=()=>{let[e,t]=(0,Se.useState)([`docs-200`]),n=[{id:`docs-200`,title:`200 документов на 1 год`,price:`1 800 ₽`},...ge];return(0,T.jsx)(d,{variant:`standalone`,selectionMode:`multiple`,groupLabel:`Тарифы Доки`,columns:3,value:e,onChange:t,renderIndicator:({isSelected:e,isDisabled:t,isError:n})=>e?t?(0,T.jsx)(O,{$isError:n,children:(0,T.jsx)(u,{})}):(0,T.jsxs)(A,{$isError:n,children:[(0,T.jsx)(u,{}),(0,T.jsx)(se,{})]}):(0,T.jsx)(E,{children:(0,T.jsx)(de,{})}),children:n.map(({id:e,title:t,price:n})=>(0,T.jsx)(b,{className:D,value:e,icon:(0,T.jsx)(h,{color:`#7856ff`}),header:t,footer:(0,T.jsx)(m,{price:n,period:`12 мес`}),children:(0,T.jsx)(f,{children:`Включает возможность отправки документов ЭДО и ЭПД`})},e))})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source},description:{story:"Собственный индикатор выбора через `renderIndicator`",...j.parameters?.docs?.description}}};try{j.displayName=`CustomIndicator`,j.__docgenInfo={description:"Собственный индикатор выбора через `renderIndicator`",displayName:`CustomIndicator`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/CustomIndicator.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function F(){return(F=e((()=>{y(),p(),v(),N=c(),P={render:e=>(0,N.jsxs)(d,{...e,children:[(0,N.jsx)(b,{value:`authorized`,icon:(0,N.jsx)(h,{}),header:`Уполномоченная бухгалтерия`,footer:(0,N.jsx)(m,{price:`5 300 ₽`,period:`12 мес`}),children:(0,N.jsx)(f,{children:`Отчётность за свою и другие организации`})}),(0,N.jsx)(b,{value:`optimal-12`,icon:(0,N.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,N.jsx)(m,{price:`11 000 ₽`,period:`12 мес`}),children:(0,N.jsx)(f,{children:`Отчётность в 4 контролирующих органа`})}),(0,N.jsx)(b,{value:`optimal-24`,icon:(0,N.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,N.jsx)(m,{price:`18 700 ₽`,period:`24 мес`}),disabled:!0,children:(0,N.jsx)(f,{children:`Недоступен для ИП`})})]}),args:{groupLabel:`Тарифы Астрал Отчёт 5.0`,selectionMode:`single`,variant:`standalone`,columns:3,shape:`medium`,disabled:!1,isError:!1,errorText:`Выберите тариф`,required:!1},parameters:{docs:{disable:!0}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}var I,L,R;function Ce(){return(Ce=e((()=>{I=n(),y(),p(),v(),L=c(),R=()=>{let[e,t]=(0,I.useState)(`fns`),[n,r]=(0,I.useState)([`fns`,`sfr`]),[i,a]=(0,I.useState)(`fns`),[ee,o]=(0,I.useState)([`fns`,`sfr`]),s=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},...g].map(({id:e,title:t,description:n})=>(0,L.jsx)(b,{value:e,header:t,children:n},e));return(0,L.jsxs)(pe,{children:[(0,L.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`standalone, single`,value:e,onChange:t,children:s}),(0,L.jsx)(d,{variant:`standalone`,selectionMode:`multiple`,groupLabel:`standalone, multiple`,value:n,onChange:r,children:s}),(0,L.jsx)(d,{variant:`grouped`,selectionMode:`single`,groupLabel:`grouped, single`,value:i,onChange:a,children:s}),(0,L.jsx)(d,{variant:`grouped`,selectionMode:`multiple`,groupLabel:`grouped, multiple`,value:ee,onChange:o,children:s})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
      <SelectionCardGroup variant="grouped" selectionMode="single" groupLabel="grouped, single" value={groupedRecipient} onChange={setGroupedRecipient}>
        {cards}
      </SelectionCardGroup>
      <SelectionCardGroup variant="grouped" selectionMode="multiple" groupLabel="grouped, multiple" value={groupedRecipients} onChange={setGroupedRecipients}>
        {cards}
      </SelectionCardGroup>
    </ComparisonGrid>;
}`,...R.parameters?.docs?.source},description:{story:"Параметр `selectionMode` задаёт режим выбора:\n- `single` — одна карточка\n- `multiple` — несколько карточек",...R.parameters?.docs?.description}}};try{R.displayName=`SelectionMode`,R.__docgenInfo={description:"Параметр `selectionMode` задаёт режим выбора:\n- `single` — одна карточка\n- `multiple` — несколько карточек",displayName:`SelectionMode`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/SelectionMode.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function we(){return(we=e((()=>{a(),y(),p(),v(),z=c(),B=`repeat(auto-fit, minmax(240px, 1fr))`,V=()=>(0,z.jsxs)(te,{container:!0,spacing:6,children:[(0,z.jsxs)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`medium`,columns:B,value:`optimal-12`,children:[(0,z.jsx)(b,{value:`optimal-12`,icon:(0,z.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,z.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,z.jsx)(b,{value:`optimal-24`,icon:(0,z.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,z.jsx)(m,{price:`18 700 ₽`,period:`24 мес`})})]}),(0,z.jsxs)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`large`,columns:B,shape:`large`,value:`optimal-12`,children:[(0,z.jsx)(b,{value:`optimal-12`,icon:(0,z.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,z.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,z.jsx)(b,{value:`optimal-24`,icon:(0,z.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,z.jsx)(m,{price:`18 700 ₽`,period:`24 мес`})})]})]}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <Grid container spacing={6}>
    <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="medium" columns={COLUMNS} value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>

    <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="large" columns={COLUMNS} shape="large" value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>
  </Grid>`,...V.parameters?.docs?.source},description:{story:"`shape` задаётся в SelectionCardGroup",...V.parameters?.docs?.description}}};try{V.displayName=`Shape`,V.__docgenInfo={description:"`shape` задаётся в SelectionCardGroup",displayName:`Shape`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Shape.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var H,Te,U;function Ee(){return(Ee=e((()=>{y(),l(),p(),v(),H=c(),Te=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`,U=()=>{let e=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},...g],t=[{label:`Обычное`,isError:!1,disabled:!1},{label:`Ошибка`,isError:!0,errorText:`Получатель недоступен`,disabled:!1},{label:`Недоступно`,isError:!1,disabled:!0}];return(0,H.jsx)(Te,{children:[`standalone`,`grouped`].map(n=>t.map(({label:t,isError:r,errorText:i,disabled:a})=>(0,H.jsx)(d,{variant:n,selectionMode:`single`,groupLabel:`${t}, ${n}`,value:`fns`,isError:r,errorText:i,disabled:a,children:e.map(({id:e,title:t,description:n})=>(0,H.jsx)(b,{value:e,header:t,disabled:e===`statistics`,children:n},e))},`${t}-${n}`)))})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
      {variants.map(variant => states.map(({
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
          </SelectionCardGroup>))}
    </StatesGrid>;
}`,...U.parameters?.docs?.source},description:{story:`Состояния ошибки и недоступности группы и отдельной карточки`,...U.parameters?.docs?.description}}};try{U.displayName=`States`,U.__docgenInfo={description:`Состояния ошибки и недоступности группы и отдельной карточки`,displayName:`States`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/States.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var W,G,K;function De(){return(De=e((()=>{W=n(),y(),p(),v(),G=c(),K=()=>{let[e,t]=(0,W.useState)(`fns`),[n,r]=(0,W.useState)(`fns`),i=[{id:`fns`,title:`ФНС`,description:`Налоговая и бухгалтерская отчётность`},...g];return(0,G.jsxs)(pe,{children:[(0,G.jsx)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`standalone`,value:e,onChange:t,children:i.map(({id:e,title:t,description:n})=>(0,G.jsx)(b,{value:e,header:t,children:n},e))}),(0,G.jsx)(d,{variant:`grouped`,selectionMode:`single`,groupLabel:`grouped`,value:n,onChange:r,children:i.map(({id:e,title:t,description:n})=>(0,G.jsx)(b,{value:e,header:t,children:n},e))})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source},description:{story:"Параметр `variant` задаёт раскладку карточек:\n- `standalone` — отдельные карточки\n- `grouped` — общий список",...K.parameters?.docs?.description}}};try{K.displayName=`Variant`,K.__docgenInfo={description:"Параметр `variant` задаёт раскладку карточек:\n- `standalone` — отдельные карточки\n- `grouped` — общий список",displayName:`Variant`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Variant.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J,Oe,Y,ke,X,Z;function Ae(){return(Ae=e((()=>{q=n(),i(),oe(),a(),y(),l(),p(),v(),J=c(),Oe=o(s)`
  justify-self: start;
`,Y=o(ae)`
  grid-column: 1 / -1;
`,ke=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(4)};

  padding-bottom: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`,X=({id:e,title:t,description:n,price:r,period:i})=>(0,J.jsx)(b,{value:e,icon:(0,J.jsx)(h,{}),header:t,footer:(0,J.jsx)(m,{price:r,period:i}),children:(0,J.jsx)(f,{children:n})}),Z=()=>{let[e,t]=(0,q.useState)(`authorized`),[n,r]=(0,q.useState)(!1),i=[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Отчётность за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},..._];return(0,J.jsxs)(te,{container:!0,children:[(0,J.jsxs)(d,{variant:`standalone`,selectionMode:`single`,groupLabel:`Тарифы Астрал Отчёт 5.0`,columns:3,value:e,onChange:t,children:[i.map(e=>(0,J.jsx)(X,{...e},e.id)),(0,J.jsx)(Y,{in:n,children:(0,J.jsx)(ke,{children:he.map(e=>(0,J.jsx)(X,{...e},e.id))})})]}),(0,J.jsx)(Oe,{type:`button`,variant:`link`,onClick:()=>r(e=>!e),children:n?`Скрыть`:`Показать ещё`})]})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [tariff, setTariff] = useState<string | null>('authorized');
  const [isExpanded, setIsExpanded] = useState(false);
  const tariffs = [{
    id: 'authorized',
    title: 'Уполномоченная бухгалтерия',
    description: 'Отчётность за свою и другие организации',
    price: '5 300 ₽',
    period: '12 мес'
  }, ...FAKE_TARIFFS];
  return <Grid container>
      <SelectionCardGroup variant="standalone" selectionMode="single" groupLabel="Тарифы Астрал Отчёт 5.0" columns={3} value={tariff} onChange={setTariff}>
        {tariffs.map(tariffItem => <TariffCard key={tariffItem.id} {...tariffItem} />)}
        <StyledCollapse in={isExpanded}>
          <CollapsedCardsGrid>
            {FAKE_ADDITIONAL_TARIFFS.map(tariffItem => <TariffCard key={tariffItem.id} {...tariffItem} />)}
          </CollapsedCardsGrid>
        </StyledCollapse>
      </SelectionCardGroup>
      <StyledButton type="button" variant="link" onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
        {isExpanded ? 'Скрыть' : 'Показать ещё'}
      </StyledButton>
    </Grid>;
}`,...Z.parameters?.docs?.source},description:{story:"Часть карточек скрыта в `Collapse` и раскрывается кнопкой продукта",...Z.parameters?.docs?.description}}};try{Z.displayName=`WithCollapsedCards`,Z.__docgenInfo={description:"Часть карточек скрыта в `Collapse` и раскрывается кнопкой продукта",displayName:`WithCollapsedCards`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/WithCollapsedCards.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Q,je,Me;function $(){return($=e((()=>{p(),ye(),xe(),M(),v(),F(),Ce(),we(),Ee(),De(),Ae(),Q=c(),je={title:`Form-Controls/SelectionCard`,component:b,decorators:[(e,t)=>(0,Q.jsx)(_e,{children:(0,Q.jsx)(e,{...t})})],parameters:{docs:{description:{component:`Карточка выбора. Используется внутри \`SelectionCardGroup\`.
Заменяет устаревший [RadioCard](/story/form-controls-selectionCard-deprecated-radioCard--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=15078-1578)`}}}},Me=[`Interaction`,`BasicUsage`,`Variant`,`SelectionMode`,`States`,`Content`,`Shape`,`CustomIndicator`,`WithCollapsedCards`]})))()}$();export{S as BasicUsage,w as Content,j as CustomIndicator,P as Interaction,R as SelectionMode,V as Shape,U as States,K as Variant,Z as WithCollapsedCards,Me as __namedExportsOrder,je as default};