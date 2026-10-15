import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,ji as r,lt as i,xa as a,yn as o}from"./preview-DApj709n.js";import{a as ee,l as s,n as c,r as l,t as u}from"./useForm-BI7AOxju.js";import{t as d}from"./Form-C9D0f1i6.js";import{n as f,t as p}from"./FormSubmitButton-CPTULg1J.js";import{n as m,t as h}from"./arrayItem-h1FfuYi5.js";import{i as g,n as _,r as v,t as y}from"./object-CXqDZ5YO.js";import{n as te,t as b}from"./array-FVt_FltB.js";import{n as x,t as S}from"./string-hxNUuZd8.js";import{a as C,l as ne}from"./NotificationStackContainer-iEgJsGcp.js";import{t as w}from"./Notification-Ch-79kYP.js";import{f as T,h as E,m as D,n as O,o as k,p as A,t as j,u as M}from"./common-CNJEIZv6.js";var N,P;function F(){return(F=e((()=>{D(),l(),N=a(),P=e=>{let{errorText:t,isError:n,...r}=e,i=r.selectionMode===`multiple`?[]:null,{error:a,helperText:o,inputRef:s,children:c,ref:l,...u}=ee({...r,defaultValue:r.defaultValue??i});return(0,N.jsx)(E,{isError:a,errorText:o,...u,inputRef:s,children:c})};try{P.displayName=`FormSelectionCardGroup`,P.__docgenInfo={description:`Адаптер SelectionCardGroup для формы`,displayName:`FormSelectionCardGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormSelectionCardGroup/FormSelectionCardGroup.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`CSS класс для корневого fieldset`,name:`className`,required:!1,tags:{},type:{name:`string`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Состояние ошибки всех карточек группы`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},shape:{defaultValue:{value:`'medium'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Скругление всех карточек группы: `medium` — 8px, `large` — 12px",name:`shape`,required:!1,tags:{default:`'medium'`},type:{name:`enum`,raw:`SelectionCardGroupShape`,value:[{value:`"medium"`},{value:`"large"`}]}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:`Блокирует все карточки группы`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:{value:`1`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:'Число равных колонок или CSS-шаблон `grid-template-columns`.\nРаботает только при `variant="standalone"`.\nНа ширине меньше 900px карточки всегда идут в одну колонку',name:`columns`,required:!1,tags:{default:`1`,example:`columns="repeat(auto-fit, minmax(240px, 1fr))"`},type:{name:`string | number`}},variant:{defaultValue:{value:`'standalone'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Раскладка карточек:\n- `standalone` — отдельные карточки в сетке с промежутками\n- `grouped` — сгруппированный вертикальный список, замена `RadioCard`",name:`variant`,required:!1,tags:{default:`'standalone'`},type:{name:`enum`,raw:`SelectionCardGroupVariant`,value:[{value:`"standalone"`},{value:`"grouped"`}]}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Значение выбранной карточки
Значения выбранных карточек`,name:`value`,required:!1,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Срабатывает при выборе карточки
Срабатывает при выборе карточки или снятии выбора`,name:`onChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}},errorText:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки под группой`,name:`errorText`,required:!1,tags:{},type:{name:`ReactNode`}},required:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Помечает подпись группы обязательной`,name:`required`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:`Ref fieldset для прокрутки react-hook-form к полю с ошибкой`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLFieldSetElement>`}},groupLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Подпись группы, рендерится в `legend`",name:`groupLabel`,required:!1,tags:{},type:{name:`string`}},renderIndicator:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Заменяет радиокнопку или чекбокс всех карточек группы собственным индикатором.\nРежим выбора и доступность не меняются. Смену иконки при наведении необходимо делать через CSS `:hover`",name:`renderIndicator`,required:!1,tags:{},type:{name:`(state: SelectionCardIndicatorState) => ReactNode`}},selectionMode:{defaultValue:{value:`'single'
'single'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/SelectionCardGroup/types.ts`,name:`TypeLiteral`}],description:"Режим выбора: `single` — одна карточка, `multiple` — несколько",name:`selectionMode`,required:!1,tags:{default:`'single'
'single'`},type:{name:`enum`,raw:`"single" | "multiple"`,value:[{value:`"single"`},{value:`"multiple"`}]}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:``,name:`name`,required:!0,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`PathValueImpl<TFieldValues, Path<TFieldValues>>`}},shouldUnregister:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:``,name:`shouldUnregister`,required:!1,tags:{},type:{name:`boolean`}},control:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:``,name:`control`,required:!1,tags:{},type:{name:`Control<TFieldValues, any, TFieldValues>`}},exact:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/react-hook-form/dist/types/controller.d.ts`,name:`TypeLiteral`}],description:``,name:`exact`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function I(){return(I=e((()=>{A()})))()}var L;function R(){return(R=e((()=>{o(),L=r.div`
  overflow-y: auto;

  width: min(960px, 100%);
  max-height: calc(100vh - 2rem);
  padding: ${({theme:e})=>e.spacing(1)};
`})))()}var z,B,V;function H(){return(H=e((()=>{w(),R(),z=a(),B=`form-selection-card-group-story`,V=({children:e})=>(0,z.jsxs)(L,{children:[e,(0,z.jsx)(ne,{containerId:B})]});try{V.displayName=`StoryWrapper`,V.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormSelectionCardGroup/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormSelectionCardGroup/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function U(){return(U=e((()=>{H()})))()}var W,G,K,q,J;function Y(){return(Y=e((()=>{te(),m(),y(),v(),S(),W=t(),n(),w(),I(),j(),o(),d(),p(),u(),F(),U(),G=a(),K=r(f)`
  justify-self: start;
`,q=_({tariff:x().define({requiredErrorMessage:`Выберите тариф`}),services:g(b(h(x())))}),J=()=>{let e=c({validationSchema:q}),t=(0,W.useMemo)(()=>[{id:`authorized`,title:`Уполномоченная бухгалтерия`,description:`Отчётность за свою и другие организации`,price:`5 300 ₽`,period:`12 мес`},{id:`optimal-12`,title:`Оптимальный 12 мес`,description:`Отчётность в 4 контролирующих органа`,price:`11 000 ₽`,period:`12 мес`},{id:`optimal-24`,title:`Оптимальный 24 мес`,description:`Отчётность в 4 контролирующих органа`,price:`18 700 ₽`,period:`24 мес`}],[]),n=(0,W.useMemo)(()=>[{id:`start`,title:`Старт работы с ЭПД на 1-м рабочем месте`,description:`Настроим рабочее место для получения и передачи ЭПД`,price:`5 000 ₽ / час`},{id:`training`,title:`Обучение и консультация по запуску работы в 1С-ЭПД`,description:`Онлайн-обучение для команды до 5 человек`,price:`5 000 ₽ / час`}],[]),r=e.handleSubmit(e=>{C.success(`Тариф: ${e.tariff}, услуги: ${e.services.join(`, `)||`нет`}`,{containerId:B})});return(0,G.jsx)(s,{form:e,onSubmit:r,children:(0,G.jsxs)(i,{container:!0,spacing:6,children:[(0,G.jsx)(P,{control:e.control,name:`tariff`,groupLabel:`Тарифы Астрал Отчёт 5.0`,required:!0,columns:3,children:t.map(({id:e,title:t,description:n,price:r,period:i})=>(0,G.jsx)(T,{value:e,icon:(0,G.jsx)(k,{}),header:t,footer:(0,G.jsx)(O,{price:r,period:i}),children:(0,G.jsx)(M,{children:n})},e))}),(0,G.jsx)(P,{control:e.control,name:`services`,selectionMode:`multiple`,groupLabel:`Услуги 1С-ЭПД`,columns:3,children:n.map(({id:e,title:t,description:n,price:r})=>(0,G.jsx)(T,{value:e,icon:(0,G.jsx)(k,{color:`#755afd`}),header:t,footer:(0,G.jsx)(O,{price:r}),children:(0,G.jsx)(M,{children:n})},e))}),(0,G.jsx)(K,{children:`Оформить заказ`})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<OrderFormValues>({
    validationSchema
  });
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
  const services = useMemo(() => [{
    id: 'start',
    title: 'Старт работы с ЭПД на 1-м рабочем месте',
    description: 'Настроим рабочее место для получения и передачи ЭПД',
    price: '5 000 ₽ / час'
  }, {
    id: 'training',
    title: 'Обучение и консультация по запуску работы в 1С-ЭПД',
    description: 'Онлайн-обучение для команды до 5 человек',
    price: '5 000 ₽ / час'
  }], []);
  const handleSubmit = form.handleSubmit(values => {
    notify.success(\`Тариф: \${values.tariff}, услуги: \${values.services.join(', ') || 'нет'}\`, {
      containerId: FORM_SELECTION_CARD_GROUP_CONTAINER_ID
    });
  });
  return <Form form={form} onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <FormSelectionCardGroup control={form.control} name="tariff" groupLabel="Тарифы Астрал Отчёт 5.0" required columns={3}>
          {tariffs.map(({
          id,
          title,
          description,
          price,
          period
        }) => <SelectionCard key={id} value={id} icon={<ProductLogo />} header={title} footer={<TariffPrice price={price} period={period} />}>
              <CardDescription>{description}</CardDescription>
            </SelectionCard>)}
        </FormSelectionCardGroup>

        <FormSelectionCardGroup control={form.control} name="services" selectionMode="multiple" groupLabel="Услуги 1С-ЭПД" columns={3}>
          {services.map(({
          id,
          title,
          description,
          price
        }) => <SelectionCard key={id} value={id} icon={<ProductLogo color="#755afd" />} header={title} footer={<TariffPrice price={price} />}>
              <CardDescription>{description}</CardDescription>
            </SelectionCard>)}
        </FormSelectionCardGroup>

        <StyledFormSubmitButton>Оформить заказ</StyledFormSubmitButton>
      </Grid>
    </Form>;
}`,...J.parameters?.docs?.source}}}})))()}var X,Z,Q;function $(){return($=e((()=>{F(),Y(),U(),X=a(),Z={title:`React-Hook-Form/FormSelectionCardGroup`,component:P,decorators:[(e,t)=>(0,X.jsx)(V,{children:(0,X.jsx)(e,{...t})})],parameters:{docs:{description:{component:"Обертка [SelectionCardGroup](/story/form-controls-selectionCard--docs) для react-hook-form.\nЗначение по умолчанию: `null` при одиночном выборе, `[]` при множественном"}}}},Q=[`BasicUsage`]})))()}$();export{J as BasicUsage,Q as __namedExportsOrder,Z as default};