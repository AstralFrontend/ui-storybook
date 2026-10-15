import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,Va as n,Xt as r,cn as i,ct as a,dt as ee,en as te,ft as ne,ji as o,ln as s,lt as re,xa as c,yn as ie}from"./preview-DApj709n.js";import{i as ae,r as oe,t as se}from"./ToggleButton-rtLvoyGU.js";import{t as ce}from"./Collapse-CVd1YN3a.js";import{t as le}from"./Collapse-Be3KN-M0.js";import{d as ue,f as de,n as fe,o as pe,s as me,t as he}from"./DialogContent-D93Pwzm_.js";import{r as ge,t as l}from"./BulletListItem-CRQNwQGj.js";import{t as _e}from"./BulletList-wSojmMHM.js";import{t as ve}from"./BulletListItem-9CXveNuD.js";import{t as ye}from"./Paper-odZgE3wG.js";import{t as be}from"./Paper-WM411Cib.js";import{n as xe,t as Se}from"./BinOutlineMd-DGwK8cjS.js";import{t as Ce}from"./ToggleButton-Btu-rjgT.js";import{n as we,t as Te}from"./CheckOutlineMd-BCnHDSl8.js";import{n as Ee,t as De}from"./CartOutlineMd-DN02lPv_.js";import{c as u,f as d,h as f,i as Oe,m as p,n as m,o as h,p as g,t as _,u as v}from"./common-CNJEIZv6.js";var y,b,x;function ke(){return(ke=e((()=>{y=n(),p(),g(),_(),b=c(),x=()=>{let[e,t]=(0,y.useState)(`authorized`),n=(0,y.useMemo)(()=>[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Специальный тариф для сдачи отчётности в ФНС, СФР, МПД, ЭТК, ФСС (ЭЛН + СЭДО), Росстат за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Тариф для сдачи отчётности в 4 контролирующих органа: ФНС, Росстат, СФР (ПФР), СФР (СЭДО)`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Тариф для сдачи отчётности в 4 контролирующих органа: ФНС, СФР (ПФР), Росстат, СФР (СЭДО)`,price:`18 700 ₽`,period:`24 мес`}],[]);return(0,b.jsx)(f,{groupLabel:`Тарифы Астрал Отчёт 5.0`,columns:3,value:e,onChange:t,children:n.map(({id:e,title:t,description:n,price:r,period:i})=>(0,b.jsx)(d,{value:e,icon:(0,b.jsx)(h,{}),header:t,footer:(0,b.jsx)(m,{price:r,period:i}),children:(0,b.jsx)(v,{children:n})},e))})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [tariff, setTariff] = useState<string | null>('authorized');
  const tariffs = useMemo(() => [{
    id: 'authorized',
    title: 'Уполномоченная бухгалтерия',
    description: 'Специальный тариф для сдачи отчётности в ФНС, СФР, МПД, ЭТК, ФСС (ЭЛН + СЭДО), Росстат за свою и другие организации',
    price: '5 300 ₽',
    period: '12 мес'
  }, {
    id: 'optimal-12',
    title: 'Оптимальный 12 мес',
    description: 'Тариф для сдачи отчётности в 4 контролирующих органа: ФНС, Росстат, СФР (ПФР), СФР (СЭДО)',
    price: '11 000 ₽',
    period: '12 мес'
  }, {
    id: 'optimal-24',
    title: 'Оптимальный 24 мес',
    description: 'Тариф для сдачи отчётности в 4 контролирующих органа: ФНС, СФР (ПФР), Росстат, СФР (СЭДО)',
    price: '18 700 ₽',
    period: '24 мес'
  }], []);
  return <SelectionCardGroup groupLabel="Тарифы Астрал Отчёт 5.0" columns={3} value={tariff} onChange={setTariff}>
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
}`,...x.parameters?.docs?.source}}}})))()}var Ae,S,C;function je(){return(je=e((()=>{Ae=n(),p(),Ce(),oe(),g(),_(),S=c(),C=()=>{let[e,t]=(0,Ae.useState)(`windows`);return(0,S.jsx)(u,{children:(0,S.jsxs)(f,{selectionMode:`multiple`,children:[(0,S.jsx)(d,{value:`authorized`,icon:(0,S.jsx)(h,{}),header:`Уполномоченная бухгалтерия`,footer:(0,S.jsx)(m,{price:`5 300 ₽`,period:`12 мес`}),children:(0,S.jsx)(v,{children:`Отчётность в ФНС, СФР и Росстат за свою и другие организации`})}),(0,S.jsx)(d,{value:`optimal-12`,header:`Оптимальный 12 мес`,footer:(0,S.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,S.jsx)(d,{value:`optimal-24`,header:`Оптимальный 24 мес`,children:(0,S.jsx)(v,{children:`Отчётность в 4 контролирующих органа`})}),(0,S.jsx)(d,{value:`workplace`,icon:(0,S.jsx)(h,{}),header:`Дополнительное рабочее место`,footer:(0,S.jsx)(m,{price:`1 200 ₽`,period:`12 мес`}),children:(0,S.jsxs)(ae,{value:e,exclusive:!0,onChange:(e,n)=>n&&t(n),children:[(0,S.jsx)(se,{value:`windows`,children:`ОС Windows`}),(0,S.jsx)(se,{value:`macos`,children:`ОС macOS`})]})})]})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [os, setOs] = useState('windows');
  return <ColumnStoryWrapper>
      <SelectionCardGroup selectionMode="multiple">
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
}`,...C.parameters?.docs?.source},description:{story:"`icon`, `children` и `footer` необязательны. Клик по элементам управления в содержимом не меняет выбор",...C.parameters?.docs?.description}}};try{C.displayName=`Content`,C.__docgenInfo={description:"`icon`, `children` и `footer` необязательны. Клик по элементам управления в содержимом не меняет выбор",displayName:`Content`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Content.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E,D,O,k,Me,A;function Ne(){return(Ne=e((()=>{w=n(),Se(),De(),Te(),r(),p(),ie(),g(),_(),T=c(),E=o.span`
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
`,Me=o(O)`
  svg:last-of-type {
    display: none;
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${D}:has(:focus-visible) & {
    ${({theme:e})=>k(e)}
  }

  ${te} {
    .${D}:hover & {
      ${({theme:e})=>k(e)}
    }
  }
`,A=()=>{let[e,t]=(0,w.useState)([`docs-200`]),n=(0,w.useMemo)(()=>[{id:`docs-200`,title:`200 документов на 1 год`,price:`1 800 ₽`},{id:`docs-500`,title:`500 документов на 1 год`,price:`4 200 ₽`},{id:`docs-1200`,title:`1 200 документов на 1 год`,price:`9 200 ₽`}],[]);return(0,T.jsx)(f,{selectionMode:`multiple`,groupLabel:`Тарифы Доки`,columns:3,value:e,onChange:t,renderIndicator:({isSelected:e,isDisabled:t,isError:n})=>e?t?(0,T.jsx)(O,{$isError:n,children:(0,T.jsx)(we,{})}):(0,T.jsxs)(Me,{$isError:n,children:[(0,T.jsx)(we,{}),(0,T.jsx)(xe,{})]}):(0,T.jsx)(E,{children:(0,T.jsx)(Ee,{})}),children:n.map(({id:e,title:t,price:n})=>(0,T.jsx)(d,{className:D,value:e,icon:(0,T.jsx)(h,{color:`#7856ff`}),header:t,footer:(0,T.jsx)(m,{price:n,period:`12 мес`}),children:(0,T.jsx)(v,{children:`Включает возможность отправки документов ЭДО и ЭПД`})},e))})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [tariffs, setTariffs] = useState<string[]>(['docs-200']);
  const tariffsList = useMemo(() => [{
    id: 'docs-200',
    title: '200 документов на 1 год',
    price: '1 800 ₽'
  }, {
    id: 'docs-500',
    title: '500 документов на 1 год',
    price: '4 200 ₽'
  }, {
    id: 'docs-1200',
    title: '1 200 документов на 1 год',
    price: '9 200 ₽'
  }], []);
  return <SelectionCardGroup selectionMode="multiple" groupLabel="Тарифы Доки" columns={3} value={tariffs} onChange={setTariffs} renderIndicator={({
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
}`,...A.parameters?.docs?.source},description:{story:"`renderIndicator` заменяет радиокнопку или чекбокс всех карточек группы.",...A.parameters?.docs?.description}}};try{A.displayName=`CustomIndicator`,A.__docgenInfo={description:"`renderIndicator` заменяет радиокнопку или чекбокс всех карточек группы.",displayName:`CustomIndicator`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/CustomIndicator.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,Pe,N,Fe,P,F;function Ie(){return(Ie=e((()=>{j=n(),_e(),ve(),i(),le(),pe(),he(),ue(),be(),p(),ie(),ee(),g(),M=c(),Pe=o(ye)`
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
`,N=o(ge)`
  width: min(580px, 100%);
`,Fe=o.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${({theme:e})=>e.spacing(4)};
  justify-content: space-between;
`,P=({title:e,price:t})=>(0,M.jsxs)(Fe,{children:[(0,M.jsx)(ne,{variant:`h6`,children:e}),(0,M.jsxs)(ne,{variant:`h6`,children:[t,` руб.`]})]}),F=()=>{let[e,t]=(0,j.useState)(`basic`),[n,r]=(0,j.useState)(!1);return(0,M.jsxs)(Pe,{children:[(0,M.jsx)(de,{children:`Выберите тариф`}),(0,M.jsx)(fe,{children:(0,M.jsxs)(f,{variant:`grouped`,value:e,onChange:t,children:[(0,M.jsx)(d,{value:`basic`,header:(0,M.jsx)(P,{title:`Тариф "Базовый"`,price:`2 500`}),children:(0,M.jsxs)(N,{children:[(0,M.jsx)(l,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(l,{children:`В пакете до 2 доверенностей`}),(0,M.jsx)(l,{children:`На 12 месяцев`})]})}),(0,M.jsxs)(d,{value:`extended`,header:(0,M.jsx)(P,{title:`Тариф "Расширенный"`,price:`5 000`}),children:[(0,M.jsxs)(N,{children:[(0,M.jsx)(l,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(l,{children:`В пакете до 5 доверенностей`}),(0,M.jsx)(l,{children:`На 12 месяцев`})]}),(0,M.jsx)(ce,{in:n,children:(0,M.jsxs)(N,{children:[(0,M.jsx)(l,{children:`Расширенные настройки и отчёты`}),(0,M.jsx)(l,{children:`Приоритетное рассмотрение заявок`})]})}),(0,M.jsx)(s,{variant:`link`,onClick:()=>r(e=>!e),children:n?`Скрыть`:`Показать все`})]}),(0,M.jsx)(d,{value:`premium`,header:(0,M.jsx)(P,{title:`Тариф "Премиальный"`,price:`10 000`}),disabled:!0,children:(0,M.jsxs)(N,{children:[(0,M.jsx)(l,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(l,{children:`В пакете от 5 доверенностей`}),(0,M.jsx)(l,{children:`На 12 месяцев`})]})})]})}),(0,M.jsxs)(me,{children:[(0,M.jsx)(s,{variant:`text`,children:`Отмена`}),(0,M.jsx)(s,{children:`Продолжить`})]})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [tariff, setTariff] = useState<string | null>('basic');
  const [isExpanded, setIsExpanded] = useState(false);
  return <StyledPaper>
      <DialogTitle>Выберите тариф</DialogTitle>
      <DialogContent>
        <SelectionCardGroup variant="grouped" value={tariff} onChange={setTariff}>
          <SelectionCard value="basic" header={<TariffHeader title='Тариф "Базовый"' price="2 500" />}>
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете до 2 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
            </StyledBulletList>
          </SelectionCard>
          <SelectionCard value="extended" header={<TariffHeader title='Тариф "Расширенный"' price="5 000" />}>
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете до 5 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
            </StyledBulletList>
            <Collapse in={isExpanded}>
              <StyledBulletList>
                <BulletListItem>Расширенные настройки и отчёты</BulletListItem>
                <BulletListItem>
                  Приоритетное рассмотрение заявок
                </BulletListItem>
              </StyledBulletList>
            </Collapse>
            <Button variant="link" onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
              {isExpanded ? 'Скрыть' : 'Показать все'}
            </Button>
          </SelectionCard>
          <SelectionCard value="premium" header={<TariffHeader title='Тариф "Премиальный"' price="10 000" />} disabled>
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете от 5 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
            </StyledBulletList>
          </SelectionCard>
        </SelectionCardGroup>
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button>Продолжить</Button>
      </DialogActions>
    </StyledPaper>;
}`,...F.parameters?.docs?.source},description:{story:'`variant="grouped"` — список карточек с общими границами. Заменяет устаревший\n[RadioCard](/story/form-controls-selectionCard-deprecated-radioCard--docs)',...F.parameters?.docs?.description}}};try{F.displayName=`Grouped`,F.__docgenInfo={description:'`variant="grouped"` — список карточек с общими границами. Заменяет устаревший\n[RadioCard](/story/form-controls-selectionCard-deprecated-radioCard--docs)',displayName:`Grouped`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Grouped.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Le,I,L;function Re(){return(Re=e((()=>{Le=n(),p(),g(),_(),I=c(),L=()=>{let[e,t]=(0,Le.useState)([`fns`,`sfr`]);return(0,I.jsx)(u,{children:(0,I.jsxs)(f,{variant:`grouped`,selectionMode:`multiple`,groupLabel:`Получатели отчётности`,value:e,onChange:t,children:[(0,I.jsx)(d,{value:`fns`,header:`ФНС`,children:`Налоговая и бухгалтерская отчётность`}),(0,I.jsx)(d,{value:`sfr`,header:`СФР`,children:`Сведения о стаже и страховых взносах`}),(0,I.jsx)(d,{value:`statistics`,header:`Росстат`,children:`Статистическая отчётность`})]})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [recipients, setRecipients] = useState<string[]>(['fns', 'sfr']);
  return <ColumnStoryWrapper>
      <SelectionCardGroup variant="grouped" selectionMode="multiple" groupLabel="Получатели отчётности" value={recipients} onChange={setRecipients}>
        <SelectionCard value="fns" header="ФНС">
          Налоговая и бухгалтерская отчётность
        </SelectionCard>
        <SelectionCard value="sfr" header="СФР">
          Сведения о стаже и страховых взносах
        </SelectionCard>
        <SelectionCard value="statistics" header="Росстат">
          Статистическая отчётность
        </SelectionCard>
      </SelectionCardGroup>
    </ColumnStoryWrapper>;
}`,...L.parameters?.docs?.source}}}})))()}var ze,R,z;function Be(){return(Be=e((()=>{ze=n(),p(),g(),_(),R=c(),z=()=>{let[e,t]=(0,ze.useState)(null);return(0,R.jsx)(u,{children:(0,R.jsxs)(f,{variant:`grouped`,groupLabel:`Получатель отчётности`,value:e,onChange:t,isError:!0,errorText:`Выберите получателя отчётности`,children:[(0,R.jsx)(d,{value:`fns`,header:`ФНС`,children:`Налоговая и бухгалтерская отчётность`}),(0,R.jsx)(d,{value:`sfr`,header:`СФР`,children:`Сведения о стаже и страховых взносах`}),(0,R.jsx)(d,{value:`statistics`,header:`Росстат`,children:`Статистическая отчётность`})]})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [recipient, setRecipient] = useState<string | null>(null);
  return <ColumnStoryWrapper>
      <SelectionCardGroup variant="grouped" groupLabel="Получатель отчётности" value={recipient} onChange={setRecipient} isError errorText="Выберите получателя отчётности">
        <SelectionCard value="fns" header="ФНС">
          Налоговая и бухгалтерская отчётность
        </SelectionCard>
        <SelectionCard value="sfr" header="СФР">
          Сведения о стаже и страховых взносах
        </SelectionCard>
        <SelectionCard value="statistics" header="Росстат">
          Статистическая отчётность
        </SelectionCard>
      </SelectionCardGroup>
    </ColumnStoryWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var B,V;function Ve(){return(Ve=e((()=>{p(),g(),_(),B=c(),V={render:e=>(0,B.jsxs)(f,{...e,children:[(0,B.jsx)(d,{value:`authorized`,icon:(0,B.jsx)(h,{}),header:`Уполномоченная бухгалтерия`,footer:(0,B.jsx)(m,{price:`5 300 ₽`,period:`12 мес`}),children:(0,B.jsx)(v,{children:`Отчётность за свою и другие организации`})}),(0,B.jsx)(d,{value:`optimal-12`,icon:(0,B.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,B.jsx)(m,{price:`11 000 ₽`,period:`12 мес`}),children:(0,B.jsx)(v,{children:`Отчётность в 4 контролирующих органа`})}),(0,B.jsx)(d,{value:`optimal-24`,icon:(0,B.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,B.jsx)(m,{price:`18 700 ₽`,period:`24 мес`}),disabled:!0,children:(0,B.jsx)(v,{children:`Недоступен для ИП`})})]}),args:{groupLabel:`Тарифы Астрал Отчёт 5.0`,selectionMode:`single`,variant:`standalone`,columns:3,shape:`medium`,disabled:!1,isError:!1,errorText:`Выберите тариф`,required:!1},parameters:{docs:{disable:!0}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}var H,U,W;function He(){return(He=e((()=>{H=n(),p(),g(),_(),U=c(),W=()=>{let[e,t]=(0,H.useState)([`start`,`training`]),n=(0,H.useMemo)(()=>[{id:`start`,title:`Старт работы с ЭПД на 1-м рабочем месте`,description:`В течение часа настроим рабочее место для получения и передачи электронных перевозочных документов (ЭПД) в типовом решении`,price:`5 000 ₽ / час`},{id:`additional`,title:`Старт работы с ЭПД на 2-м и последующих рабочих местах`,description:`Настройка второго и последующих рабочих мест для работы с ЭПД в типовом решении по сниженной цене`,price:`3 500 ₽ / час`},{id:`training`,title:`Обучение и консультация по запуску работы в 1С-ЭПД`,description:`Онлайн-обучение в формате ВКС для команды до 5 человек на типовом решении. Специалист разберёт с группой интерфейс и настройки по всем титулам, работу со справочниками, групповое подписание и мобильное приложение`,price:`5 000 ₽ / час`}],[]);return(0,U.jsx)(f,{selectionMode:`multiple`,groupLabel:`Услуги 1С-ЭПД`,columns:`repeat(auto-fit, minmax(240px, 1fr))`,value:e,onChange:t,children:n.map(({id:e,title:t,description:n,price:r})=>(0,U.jsx)(d,{value:e,icon:(0,U.jsx)(h,{color:`#755afd`}),header:t,footer:(0,U.jsx)(m,{price:r}),children:(0,U.jsx)(v,{children:n})},e))})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [services, setServices] = useState<string[]>(['start', 'training']);
  const servicesList = useMemo(() => [{
    id: 'start',
    title: 'Старт работы с ЭПД на 1-м рабочем месте',
    description: 'В течение часа настроим рабочее место для получения и передачи электронных перевозочных документов (ЭПД) в типовом решении',
    price: '5 000 ₽ / час'
  }, {
    id: 'additional',
    title: 'Старт работы с ЭПД на 2-м и последующих рабочих местах',
    description: 'Настройка второго и последующих рабочих мест для работы с ЭПД в типовом решении по сниженной цене',
    price: '3 500 ₽ / час'
  }, {
    id: 'training',
    title: 'Обучение и консультация по запуску работы в 1С-ЭПД',
    description: 'Онлайн-обучение в формате ВКС для команды до 5 человек на типовом решении. Специалист разберёт с группой интерфейс и настройки по всем титулам, работу со справочниками, групповое подписание и мобильное приложение',
    price: '5 000 ₽ / час'
  }], []);
  return <SelectionCardGroup selectionMode="multiple" groupLabel="Услуги 1С-ЭПД" columns="repeat(auto-fit, minmax(240px, 1fr))" value={services} onChange={setServices}>
      {servicesList.map(({
      id,
      title,
      description,
      price
    }) => <SelectionCard key={id} value={id} icon={<ProductLogo color="#755afd" />} header={title} footer={<TariffPrice price={price} />}>
          <CardDescription>{description}</CardDescription>
        </SelectionCard>)}
    </SelectionCardGroup>;
}`,...W.parameters?.docs?.source},description:{story:'`selectionMode="multiple"` — выбор нескольких карточек, повторный клик снимает выбор.\n`columns` принимает число колонок или шаблон `grid-template-columns`',...W.parameters?.docs?.description}}};try{W.displayName=`MultipleSelection`,W.__docgenInfo={description:'`selectionMode="multiple"` — выбор нескольких карточек, повторный клик снимает выбор.\n`columns` принимает число колонок или шаблон `grid-template-columns`',displayName:`MultipleSelection`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/MultipleSelection.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K,q;function Ue(){return(Ue=e((()=>{a(),p(),g(),_(),G=c(),K=`repeat(auto-fit, minmax(240px, 1fr))`,q=()=>(0,G.jsxs)(re,{container:!0,spacing:6,children:[(0,G.jsxs)(f,{groupLabel:`medium`,columns:K,value:`optimal-12`,children:[(0,G.jsx)(d,{value:`optimal-12`,icon:(0,G.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,G.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,G.jsx)(d,{value:`optimal-24`,icon:(0,G.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,G.jsx)(m,{price:`18 700 ₽`,period:`24 мес`})})]}),(0,G.jsxs)(f,{groupLabel:`large`,columns:K,shape:`large`,value:`optimal-12`,children:[(0,G.jsx)(d,{value:`optimal-12`,icon:(0,G.jsx)(h,{}),header:`Оптимальный 12 мес`,footer:(0,G.jsx)(m,{price:`11 000 ₽`,period:`12 мес`})}),(0,G.jsx)(d,{value:`optimal-24`,icon:(0,G.jsx)(h,{}),header:`Оптимальный 24 мес`,footer:(0,G.jsx)(m,{price:`18 700 ₽`,period:`24 мес`})})]})]}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => <Grid container spacing={6}>
    <SelectionCardGroup groupLabel="medium" columns={COLUMNS} value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>

    <SelectionCardGroup groupLabel="large" columns={COLUMNS} shape="large" value="optimal-12">
      <SelectionCard value="optimal-12" icon={<ProductLogo />} header="Оптимальный 12 мес" footer={<TariffPrice price="11 000 ₽" period="12 мес" />} />
      <SelectionCard value="optimal-24" icon={<ProductLogo />} header="Оптимальный 24 мес" footer={<TariffPrice price="18 700 ₽" period="24 мес" />} />
    </SelectionCardGroup>
  </Grid>`,...q.parameters?.docs?.source},description:{story:"`shape` задаётся группой: `medium` — 8px, `large` — 12px",...q.parameters?.docs?.description}}};try{q.displayName=`Shape`,q.__docgenInfo={description:"`shape` задаётся группой: `medium` — 8px, `large` — 12px",displayName:`Shape`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/Shape.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var We,J,Y;function Ge(){return(Ge=e((()=>{We=n(),a(),p(),g(),_(),J=c(),Y=()=>{let e=(0,We.useMemo)(()=>[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Отчётность за свою и другие организации`,price:`5 300 ₽`},{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`}],[]),t=(0,We.useMemo)(()=>[{label:`Обычное`,isError:!1,disabled:!1},{label:`Ошибка`,isError:!0,errorText:`Тариф недоступен для выбранной организации`,disabled:!1},{label:`Недоступно`,isError:!1,disabled:!0}],[]);return(0,J.jsx)(re,{container:!0,spacing:6,children:t.map(({label:t,isError:n,errorText:r,disabled:i})=>(0,J.jsx)(f,{groupLabel:t,columns:`repeat(auto-fit, minmax(240px, 1fr))`,value:`optimal-12`,isError:n,errorText:r,disabled:i,children:e.map(({id:e,title:t,description:n,price:r})=>(0,J.jsx)(d,{value:e,icon:(0,J.jsx)(h,{}),header:t,footer:(0,J.jsx)(m,{price:r,period:`12 мес`}),children:(0,J.jsx)(v,{children:n})},e))},t))})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const tariffs = useMemo(() => [{
    id: 'authorized',
    title: 'Уполномоченная бухгалтерия',
    description: 'Отчётность за свою и другие организации',
    price: '5 300 ₽'
  }, {
    id: 'optimal-12',
    title: 'Оптимальный 12 мес',
    description: 'Отчётность в 4 контролирующих органа',
    price: '11 000 ₽'
  }], []);
  const states = useMemo(() => [{
    label: 'Обычное',
    isError: false,
    disabled: false
  }, {
    label: 'Ошибка',
    isError: true,
    errorText: 'Тариф недоступен для выбранной организации',
    disabled: false
  }, {
    label: 'Недоступно',
    isError: false,
    disabled: true
  }], []);
  return <Grid container spacing={6}>
      {states.map(({
      label,
      isError,
      errorText,
      disabled
    }) => <SelectionCardGroup key={label} groupLabel={label} columns="repeat(auto-fit, minmax(240px, 1fr))" value="optimal-12" isError={isError} errorText={errorText} disabled={disabled}>
          {tariffs.map(({
        id,
        title,
        description,
        price
      }) => <SelectionCard key={id} value={id} icon={<ProductLogo />} header={title} footer={<TariffPrice price={price} period="12 мес" />}>
              <CardDescription>{description}</CardDescription>
            </SelectionCard>)}
        </SelectionCardGroup>)}
    </Grid>;
}`,...Y.parameters?.docs?.source},description:{story:"`isError` и `disabled` задаются группе и применяются ко всем её карточкам.\n`disabled` у карточки блокирует только её",...Y.parameters?.docs?.description}}};try{Y.displayName=`States`,Y.__docgenInfo={description:"`isError` и `disabled` задаются группе и применяются ко всем её карточкам.\n`disabled` у карточки блокирует только её",displayName:`States`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/States.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z,Ke,qe,Je,Ye,Q;function Xe(){return(Xe=e((()=>{X=n(),i(),le(),a(),p(),ie(),g(),_(),Z=c(),Ke=o(s)`
  justify-self: start;
`,qe=o(ce)`
  grid-column: 1 / -1;
`,Je=o.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({theme:e})=>e.spacing(4)};

  padding-bottom: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: minmax(0, 1fr);
  }
`,Ye=({id:e,title:t,description:n,price:r,period:i})=>(0,Z.jsx)(d,{value:e,icon:(0,Z.jsx)(h,{}),header:t,footer:(0,Z.jsx)(m,{price:r,period:i}),children:(0,Z.jsx)(v,{children:n})}),Q=()=>{let[e,t]=(0,X.useState)(`authorized`),[n,r]=(0,X.useState)(!1),i=(0,X.useMemo)(()=>[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Отчётность за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Отчётность в 4 контролирующих органа`,price:`18 700 ₽`,period:`24 мес`}],[]),a=(0,X.useMemo)(()=>[{id:`fns`,title:`ФНС 12 мес`,description:`Отчётность только в налоговую`,price:`4 200 ₽`,period:`12 мес`},{id:`unlimited`,title:`Безлимитный 12 мес`,description:`Отчётность во все контролирующие органы`,price:`24 000 ₽`,period:`12 мес`}],[]);return(0,Z.jsxs)(re,{container:!0,children:[(0,Z.jsxs)(f,{groupLabel:`Тарифы Астрал Отчёт 5.0`,columns:3,value:e,onChange:t,children:[i.map(e=>(0,Z.jsx)(Ye,{...e},e.id)),(0,Z.jsx)(qe,{in:n,children:(0,Z.jsx)(Je,{children:a.map(e=>(0,Z.jsx)(Ye,{...e},e.id))})})]}),(0,Z.jsx)(Ke,{type:`button`,variant:`link`,onClick:()=>r(e=>!e),children:n?`Скрыть`:`Показать ещё`})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [tariff, setTariff] = useState<string | null>('authorized');
  const [isExpanded, setIsExpanded] = useState(false);
  const tariffs = useMemo(() => [{
    id: 'authorized',
    title: 'Уполномоченная бухгалтерия',
    description: 'Отчётность за свою и другие организации',
    price: '5 300 ₽',
    period: '12 мес'
  }, {
    id: 'optimal-12',
    title: 'Оптимальный 12 мес',
    description: 'Отчётность в 4 контролирующих органа',
    price: '11 000 ₽',
    period: '12 мес'
  }, {
    id: 'optimal-24',
    title: 'Оптимальный 24 мес',
    description: 'Отчётность в 4 контролирующих органа',
    price: '18 700 ₽',
    period: '24 мес'
  }], []);
  const additionalTariffs = useMemo(() => [{
    id: 'fns',
    title: 'ФНС 12 мес',
    description: 'Отчётность только в налоговую',
    price: '4 200 ₽',
    period: '12 мес'
  }, {
    id: 'unlimited',
    title: 'Безлимитный 12 мес',
    description: 'Отчётность во все контролирующие органы',
    price: '24 000 ₽',
    period: '12 мес'
  }], []);
  return <Grid container>
      <SelectionCardGroup groupLabel="Тарифы Астрал Отчёт 5.0" columns={3} value={tariff} onChange={setTariff}>
        {tariffs.map(tariffItem => <TariffCard key={tariffItem.id} {...tariffItem} />)}
        <StyledCollapse in={isExpanded}>
          <CollapsedCardsGrid>
            {additionalTariffs.map(tariffItem => <TariffCard key={tariffItem.id} {...tariffItem} />)}
          </CollapsedCardsGrid>
        </StyledCollapse>
      </SelectionCardGroup>
      <StyledButton type="button" variant="link" onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}>
        {isExpanded ? 'Скрыть' : 'Показать ещё'}
      </StyledButton>
    </Grid>;
}`,...Q.parameters?.docs?.source},description:{story:"Часть карточек скрыта в `Collapse` и раскрывается кнопкой продукта",...Q.parameters?.docs?.description}}};try{Q.displayName=`WithCollapsedCards`,Q.__docgenInfo={description:"Часть карточек скрыта в `Collapse` и раскрывается кнопкой продукта",displayName:`WithCollapsedCards`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/SelectionCard/stories/WithCollapsedCards.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var $,Ze,Qe;function $e(){return($e=e((()=>{g(),ke(),je(),Ne(),_(),Ie(),Re(),Be(),Ve(),He(),Ue(),Ge(),Xe(),$=c(),Ze={title:`Form-Controls/SelectionCard`,component:d,decorators:[(e,t)=>(0,$.jsx)(Oe,{children:(0,$.jsx)(e,{...t})})],parameters:{docs:{description:{component:`Карточка выбора. Используется внутри \`SelectionCardGroup\`.
Заменяет устаревший [RadioCard](/story/form-controls-selectionCard-deprecated-radioCard--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=15078-1578)`}}}},Qe=[`Interaction`,`BasicUsage`,`MultipleSelection`,`States`,`Content`,`Shape`,`Grouped`,`GroupedWithError`,`GroupedMultipleSelection`,`CustomIndicator`,`WithCollapsedCards`]})))()}$e();export{x as BasicUsage,C as Content,A as CustomIndicator,F as Grouped,L as GroupedMultipleSelection,z as GroupedWithError,V as Interaction,W as MultipleSelection,q as Shape,Y as States,Q as WithCollapsedCards,Qe as __namedExportsOrder,Ze as default};