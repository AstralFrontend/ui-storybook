import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as ee,ln as te,xa as i}from"./preview-DbSmHAJq.js";import{n as ne,t as re}from"./isDeepEqual-C09Safj8.js";import{t as a}from"./MenuItem-Cr8t0loo.js";import{t as o}from"./MenuItem-BHD1SxkZ.js";import{f as s,p as c}from"./PageContentHeaderActions-B4B9sAO5.js";import{i as l,t as u}from"./PageContent-DOtfbhdO.js";import{t as d}from"./PageLayout-CLAh0T4P.js";import{t as f}from"./PageLayout-zUXSLuTo.js";import{d as p,h as ie,n as m,p as ae,t as h}from"./useForm-ZMcEWqqH.js";import{n as oe,t as se}from"./FormSubmitButton--BZNa_mJ.js";import{i as g,n as ce,r as le,t as ue}from"./object-CXqDZ5YO.js";import{n as _,t as de}from"./string-hxNUuZd8.js";import{t as v}from"./FormSelect-_ePdcUlF.js";import{t as y}from"./FormSelect-DvPADSG7.js";import{n as fe,t as pe}from"./AddOutlineMd-D7_F6DrD.js";import{A as me,D as he,M as b,Mt as ge,N as _e,O as ve,P as ye,T as x,U as be,g as S,h as C,j as w,w as T}from"./common-DzlEIqTA.js";var E,D,O;function xe(){return(xe=e((()=>{ue(),le(),de(),ce({search:g(_()),id:g(_()),name:g(_()),idGroup:g(_()),nameGroup:g(_()),additional:g(_()),typeDocument:g(_()),status:g(_())}),E=[`Вариант 1`,`Вариант 2`,`Вариант 3`,`Вариант 4`],D={search:``,id:``,name:``,idGroup:``,nameGroup:``,additional:``,typeDocument:``,status:``},O=[{label:`В обработке`,value:`processing`},{label:`Не приняты`,value:`rejected`,status:`error`,counter:21},{label:`Требуют ответа`,value:`waiting`,status:`warning`,counter:8},{label:`Приняты`,value:`accepted`,status:`success`,counter:43}]})))()}var k,A;function Se(){return(Se=e((()=>{p(),r(),k=i(),A=({form:e})=>{let t=ie({control:e.control});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(ee,{variant:`h5`,children:`Текущие значения фильтров:`}),(0,k.jsx)(ee,{component:`pre`,children:JSON.stringify(t,null,2)})]})};try{A.displayName=`FormValuesPreview`,A.__docgenInfo={description:``,displayName:`FormValuesPreview`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/common/FormValuesPreview.tsx`,methods:[],props:{form:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/common/FormValuesPreview.tsx`,name:`TypeLiteral`}],description:``,name:`form`,required:!0,tags:{},type:{name:`UseFormReturn<T>`}}},tags:{}}}catch{}})))()}var Ce,j;function we(){return(we=e((()=>{pe(),Ce=i(),j={main:[{text:`Согласовать`}],secondary:[{text:`Кнопка`},{text:`Кнопка 2`}],secondaryVisible:[{name:`Второстепенно видимая кнопка`,icon:(0,Ce.jsx)(fe,{})}]}})))()}function M(){return(M=e((()=>{xe(),Se(),we()})))()}var N,P,F;function Te(){return(Te=e((()=>{N=t(),n(),o(),u(),s(),f(),T(),C(),y(),h(),me(),b(),M(),P=i(),F=()=>{let[e,t]=(0,N.useState)(!0);(0,N.useEffect)(()=>{setTimeout(()=>{t(!1)},1500)},[]);let n=m({defaultValues:D});return(0,P.jsx)(d,{header:(0,P.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,P.jsx)(N.Suspense,{fallback:(0,P.jsx)(ye,{}),children:(0,P.jsx)(w,{form:n,isLoading:e,searchField:({control:e})=>(0,P.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`}),mainFilters:({control:e,isModal:t})=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,P.jsx)(a,{value:e,children:e},e))}),(0,P.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,P.jsx)(a,{value:e,children:e},e))}),(0,P.jsx)(v,{control:e,name:`idGroup`,label:`ID (в группе)`,placeholder:t?`Введите ID группы`:`ID группы`,children:E.map(e=>(0,P.jsx)(a,{value:e,children:e},e))}),(0,P.jsx)(v,{control:e,name:`nameGroup`,label:`Название (в группе)`,placeholder:t?`Введите название группы`:`Название группы`,children:E.map(e=>(0,P.jsx)(a,{value:e,children:e},e))})]}),secondaryFilters:({control:e})=>(0,P.jsx)(v,{control:e,name:`additional`,label:`Дополнительно`,placeholder:`Выберите дополнительные опции`,children:E.map(e=>(0,P.jsx)(a,{value:e,children:e},e))}),quickFilters:({control:e})=>(0,P.jsx)(S,{control:e,name:`status`,label:`Статус`,options:O,allCounter:72})})})}),content:(0,P.jsxs)(l,{children:[(0,P.jsx)(te,{onClick:()=>{n.reset(D)},children:`Сбросить`}),(0,P.jsx)(A,{form:n})]})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  const handleReset = () => {
    form.reset(defaultValues);
  };
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<Suspense fallback={<FormFiltersSkeleton />}>
              <FormFilters form={form} isLoading={isLoading} searchField={({
      control
    }) => {
      return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." />;
    }} mainFilters={({
      control,
      isModal
    }) => {
      return <>
                      <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                      <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>

                      <FormSelect control={control} name="idGroup" label="ID (в группе)" placeholder={isModal ? 'Введите ID группы' : 'ID группы'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                      <FormSelect control={control} name="nameGroup" label="Название (в группе)" placeholder={isModal ? 'Введите название группы' : 'Название группы'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                    </>;
    }} secondaryFilters={({
      control
    }) => {
      return <FormSelect control={control} name="additional" label="Дополнительно" placeholder="Выберите дополнительные опции">
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>;
    }} quickFilters={({
      control
    }) => {
      return <FormQuickFilters control={control} name="status" label="Статус" options={STATUS_OPTIONS} allCounter={72} />;
    }} />
            </Suspense>} />} content={<PageContent>
          <Button onClick={handleReset}>Сбросить</Button>
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...F.parameters?.docs?.source},description:{story:`При использовании фильтров необходимо передать \`form\` в компонент.

Для задания разного текста label/placeholder в модальном окне "Все фильтры" и на странице используется свойство \`isModal\`.

Конечный запрос фильтров на backend необходимо выполнять с debounce.`,...F.parameters?.docs?.description}}};try{F.displayName=`BasicUsage`,F.__docgenInfo={description:`При использовании фильтров необходимо передать \`form\` в компонент.

Для задания разного текста label/placeholder в модальном окне "Все фильтры" и на странице используется свойство \`isModal\`.

Конечный запрос фильтров на backend необходимо выполнять с debounce.`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ee,I,L;function De(){return(De=e((()=>{Ee=t(),u(),s(),f(),T(),C(),h(),b(),_e(),M(),I=i(),L=()=>{let e=m({defaultValues:D});return(0,I.jsx)(d,{header:(0,I.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,I.jsx)(Ee.Suspense,{fallback:(0,I.jsx)(ye,{}),children:(0,I.jsx)(w,{form:e,isLoading:!0,searchField:({control:e})=>(0,I.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`}),quickFilters:({control:e})=>(0,I.jsx)(S,{control:e,name:`status`,label:`Статус`,options:O,allCounter:72})})})}),content:(0,I.jsx)(l,{children:`content`})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<Suspense fallback={<FormFiltersSkeleton />}>
              <FormFilters form={form} isLoading={true} searchField={({
      control
    }) => {
      return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." />;
    }} quickFilters={({
      control
    }) => {
      return <FormQuickFilters control={control} name="status" label="Статус" options={STATUS_OPTIONS} allCounter={72} />;
    }} />
            </Suspense>} />} content={<PageContent>content</PageContent>} />;
}`,...L.parameters?.docs?.source},description:{story:"Параметр `isLoading` включает отображение состояния загрузки. Для lazy loading используйте компонент `FormFiltersSkeleton`.",...L.parameters?.docs?.description}}};try{L.displayName=`IsLoading`,L.__docgenInfo={description:"Параметр `isLoading` включает отображение состояния загрузки. Для lazy loading используйте компонент `FormFiltersSkeleton`.",displayName:`IsLoading`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/IsLoading.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function Oe(){return(Oe=e((()=>{p(),n(),u(),s(),f(),T(),b(),M(),R=i(),z=()=>{let e=ae({defaultValues:D});return(0,R.jsx)(d,{header:(0,R.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,R.jsx)(w,{form:e,searchField:({control:e})=>(0,R.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`,width:`300px`})})}),content:(0,R.jsxs)(l,{children:[(0,R.jsx)(te,{onClick:()=>{e.reset(D)},children:`Сбросить`}),(0,R.jsx)(A,{form:e})]})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  const handleReset = () => {
    form.reset(defaultValues);
  };
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<FormFilters form={form} searchField={({
    control
  }) => {
    return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." width="300px" />;
  }} />} />} content={<PageContent>
          <Button onClick={handleReset}>Сбросить</Button>
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...z.parameters?.docs?.source},description:{story:`SearchField не учитывается в счетчике фильтров.

Для изменения ширины поля поиска используется свойство \`width\`.`,...z.parameters?.docs?.description}}};try{z.displayName=`OnlySearch`,z.__docgenInfo={description:`SearchField не учитывается в счетчике фильтров.

Для изменения ширины поля поиска используется свойство \`width\`.`,displayName:`OnlySearch`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/OnlySearch.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var B,V,H;function ke(){return(ke=e((()=>{B=t(),p(),n(),o(),u(),s(),f(),re(),T(),y(),h(),b(),M(),V=i(),H=()=>{let e=m({defaultValues:D});return(0,V.jsx)(d,{header:(0,V.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,V.jsx)(w,{form:e,searchField:({control:e})=>(0,V.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`}),mainFilters:({control:e,isModal:t})=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,V.jsx)(a,{value:e,children:e},e))}),(0,V.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,V.jsx)(a,{value:e,children:e},e))}),(0,V.jsx)(v,{control:e,name:`idGroup`,label:`ID (в группе)`,placeholder:t?`Введите ID группы`:`ID группы`,children:E.map(e=>(0,V.jsx)(a,{value:e,children:e},e))}),(0,V.jsx)(v,{control:e,name:`nameGroup`,label:`Название (в группе)`,placeholder:t?`Введите название группы`:`Название группы`,children:E.map(e=>(0,V.jsx)(a,{value:e,children:e},e))})]}),secondaryFilters:({control:e})=>(0,V.jsx)(v,{control:e,name:`additional`,label:`Дополнительно`,placeholder:`Выберите дополнительные опции`,children:E.map(e=>(0,V.jsx)(a,{value:e,children:e},e))})})}),content:(0,V.jsxs)(l,{children:[(0,V.jsx)(({filtersForm:e})=>{let[t,n]=(0,B.useState)(D),r=ie({control:e.control});return(0,B.useEffect)(()=>{n(r)},[r]),(0,B.useEffect)(()=>{ne(r,t)||e.reset(t)},[t]),(0,V.jsx)(te,{onClick:()=>{n(D)},children:`Сбросить`})},{filtersForm:e}),(0,V.jsx)(A,{form:e})]})})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  const ResetComponent = ({
    filtersForm
  }: {
    filtersForm: UseFormReturn<Values>;
  }) => {
    const [filters, setFilters] = useState<Values>(defaultValues);
    const formValues = useWatch({
      control: filtersForm.control
    });

    // синхронизация formValues -> filters
    useEffect(() => {
      setFilters(formValues);
    }, [formValues]);

    // синхронизация filters -> formValues
    useEffect(() => {
      if (!checkIsDeepEqual(formValues, filters)) {
        filtersForm.reset(filters);
      }
    }, [filters]);
    const handleReset = () => {
      setFilters(defaultValues);
    };
    return <Button onClick={handleReset}>Сбросить</Button>;
  };
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<FormFilters form={form} searchField={({
    control
  }) => {
    return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." />;
  }} mainFilters={({
    control,
    isModal
  }) => {
    return <>
                    <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                    <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>

                    <FormSelect control={control} name="idGroup" label="ID (в группе)" placeholder={isModal ? 'Введите ID группы' : 'ID группы'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                    <FormSelect control={control} name="nameGroup" label="Название (в группе)" placeholder={isModal ? 'Введите название группы' : 'Название группы'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                  </>;
  }} secondaryFilters={({
    control
  }) => {
    return <FormSelect control={control} name="additional" label="Дополнительно" placeholder="Выберите дополнительные опции">
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>;
  }} />} />} content={<PageContent>
          <ResetComponent filtersForm={form} />
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...H.parameters?.docs?.source},description:{story:"Пример синхронизации `formValues` фильтров с внешним `store` (в качестве внешнего store для демонстрации используется useState).\n\nДля синхронизации необходимо отрендерить доп. компонент, в котором будет осуществляться синхронизация `formValues -> filters` и `filters -> formValues` через `useEffect`.\n\nТакой подход поможет избежать проблем с производительностью, связанных с излишним количеством ре-рендеров компонента FormFilters.\n\nПример синхронизации с mobx-router можно посмотреть в [project-starter](https://git.astralnalog.ru/frontend.shared/project-starter).",...H.parameters?.docs?.description}}};try{H.displayName=`SyncStates`,H.__docgenInfo={description:"Пример синхронизации `formValues` фильтров с внешним `store` (в качестве внешнего store для демонстрации используется useState).\n\nДля синхронизации необходимо отрендерить доп. компонент, в котором будет осуществляться синхронизация `formValues -> filters` и `filters -> formValues` через `useEffect`.\n\nТакой подход поможет избежать проблем с производительностью, связанных с излишним количеством ре-рендеров компонента FormFilters.\n\nПример синхронизации с mobx-router можно посмотреть в [project-starter](https://git.astralnalog.ru/frontend.shared/project-starter).",displayName:`SyncStates`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/SyncStates.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var U,W;function Ae(){return(Ae=e((()=>{p(),o(),u(),s(),f(),he(),T(),y(),b(),M(),U=i(),W=()=>{let e=ae({defaultValues:D});return(0,U.jsx)(d,{header:(0,U.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,U.jsx)(w,{form:e,mainFiltersColumns:`repeat(auto-fit, minmax(150px, 1fr))`,searchField:({control:e})=>(0,U.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`}),mainFilters:({control:e,isModal:t})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(ve,{columns:`1fr 2fr`,children:[(0,U.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,U.jsx)(a,{value:e,children:e},e))}),(0,U.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,U.jsx)(a,{value:e,children:e},e))})]}),(0,U.jsxs)(ve,{columns:2,children:[(0,U.jsx)(v,{control:e,name:`idGroup`,label:`ID (в группе)`,placeholder:t?`Введите ID группы`:`ID группы`,children:E.map(e=>(0,U.jsx)(a,{value:e,children:e},e))}),(0,U.jsx)(v,{control:e,name:`nameGroup`,label:`Название (в группе)`,placeholder:t?`Введите название группы`:`Название группы`,children:E.map(e=>(0,U.jsx)(a,{value:e,children:e},e))})]})]}),secondaryFilters:({control:e})=>(0,U.jsx)(v,{control:e,name:`additional`,label:`Дополнительно`,placeholder:`Выберите дополнительные опции`,children:E.map(e=>(0,U.jsx)(a,{value:e,children:e},e))})})}),content:(0,U.jsx)(l,{children:`content`})})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<FormFilters form={form} mainFiltersColumns="repeat(auto-fit, minmax(150px, 1fr))" searchField={({
    control
  }) => {
    return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." />;
  }} mainFilters={({
    control,
    isModal
  }) => {
    return <>
                    <FormFiltersModalGroup columns="1fr 2fr">
                      <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                      <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                    </FormFiltersModalGroup>
                    <FormFiltersModalGroup columns={2}>
                      <FormSelect control={control} name="idGroup" label="ID (в группе)" placeholder={isModal ? 'Введите ID группы' : 'ID группы'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                      <FormSelect control={control} name="nameGroup" label="Название (в группе)" placeholder={isModal ? 'Введите название группы' : 'Название группы'}>
                        {OPTIONS.map(option => <MenuItem value={option} key={option}>
                            {option}
                          </MenuItem>)}
                      </FormSelect>
                    </FormFiltersModalGroup>
                  </>;
  }} secondaryFilters={({
    control
  }) => {
    return <FormSelect control={control} name="additional" label="Дополнительно" placeholder="Выберите дополнительные опции">
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>;
  }} />} />} content={<PageContent>content</PageContent>} />;
}`,...W.parameters?.docs?.source},description:{story:"Для группировки фильтров внутри модального окна используется компонент `FormFiltersModalGroup`.\n\nДля контроля размера инпутов используется свойство `mainFiltersColumns`.",...W.parameters?.docs?.description}}};try{W.displayName=`WithGroups`,W.__docgenInfo={description:"Для группировки фильтров внутри модального окна используется компонент `FormFiltersModalGroup`.\n\nДля контроля размера инпутов используется свойство `mainFiltersColumns`.",displayName:`WithGroups`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/WithGroups.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var G,K;function je(){return(je=e((()=>{p(),o(),u(),s(),f(),T(),y(),b(),M(),G=i(),K=()=>{let e=ae({defaultValues:D});return(0,G.jsx)(d,{header:(0,G.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,G.jsx)(w,{mainFiltersColumns:`minmax(200px, 300px)`,form:e,searchField:({control:e})=>(0,G.jsx)(x,{control:e,name:`search`,placeholder:`Поиск по странице...`}),mainFilters:({control:e,isModal:t})=>(0,G.jsx)(v,{control:e,name:`typeDocument`,label:`Тип документа`,placeholder:t?`Введите тип документа`:`Тип документа`,children:E.map(e=>(0,G.jsx)(a,{value:e,children:e},e))})})}),content:(0,G.jsx)(l,{children:`content`})})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<FormFilters mainFiltersColumns="minmax(200px, 300px)" form={form} searchField={({
    control
  }) => {
    return <FormFiltersSearchField control={control} name="search" placeholder="Поиск по странице..." />;
  }} mainFilters={({
    control,
    isModal
  }) => {
    return <FormSelect control={control} name="typeDocument" label="Тип документа" placeholder={isModal ? 'Введите тип документа' : 'Тип документа'}>
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>;
  }} />} />} content={<PageContent>content</PageContent>} />;
}`,...K.parameters?.docs?.source},description:{story:`Кнопка "Все фильтры" не отображается на больших разрешениях, если нет SecondaryFilters.`,...K.parameters?.docs?.description}}};try{K.displayName=`WithoutSecondaryFilters`,K.__docgenInfo={description:`Кнопка "Все фильтры" не отображается на больших разрешениях, если нет SecondaryFilters.`,displayName:`WithoutSecondaryFilters`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/WithoutSecondaryFilters.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function Me(){return(Me=e((()=>{o(),u(),s(),f(),T(),C(),y(),h(),b(),M(),q=i(),J=()=>{let e=m({defaultValues:D});return(0,q.jsx)(d,{header:(0,q.jsx)(c,{title:`Страница с быстрыми фильтрами`,actions:j,filters:(0,q.jsx)(w,{form:e,searchField:({control:e})=>(0,q.jsx)(x,{control:e,name:`search`,placeholder:`Поиск...`}),mainFilters:({control:e,isModal:t})=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,q.jsx)(a,{value:e,children:e},e))}),(0,q.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,q.jsx)(a,{value:e,children:e},e))})]}),quickFilters:({control:e})=>(0,q.jsx)(S,{control:e,name:`status`,label:`Статус`,allCounter:72,options:O,placeholder:`Выберите статус`})})}),content:(0,q.jsx)(l,{children:(0,q.jsx)(A,{form:e})})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    defaultValues: defaultValues as DefaultValues<Values>
  });
  return <PageLayout header={<PageHeader title="Страница с быстрыми фильтрами" actions={MockActions} filters={<FormFilters form={form} searchField={({
    control
  }) => <FormFiltersSearchField control={control} name="search" placeholder="Поиск..." />} mainFilters={({
    control,
    isModal
  }) => <>
                  <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>
                  <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>
                </>} quickFilters={({
    control
  }) => <FormQuickFilters control={control} name="status" label="Статус" allCounter={72} options={STATUS_OPTIONS} placeholder="Выберите статус" />} />} />} content={<PageContent>
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...J.parameters?.docs?.source},description:{story:'Быстрые фильтры (`quickFilters`) отображаются строкой чипов под основными фильтрами.\nНа мобильных устройствах они появляются последним элементом внутри модалки "Все фильтры" в виде Select.\n\nРежим определяется пропсом `multiple`:\n- `false` — одиночный выбор (radio-поведение, повторный клик снимает выбор)\n- `true` — мультивыбор (checkbox-поведение)',...J.parameters?.docs?.description}}};try{J.displayName=`WithQuickFilters`,J.__docgenInfo={description:'Быстрые фильтры (`quickFilters`) отображаются строкой чипов под основными фильтрами.\nНа мобильных устройствах они появляются последним элементом внутри модалки "Все фильтры" в виде Select.\n\nРежим определяется пропсом `multiple`:\n- `false` — одиночный выбор (radio-поведение, повторный клик снимает выбор)\n- `true` — мультивыбор (checkbox-поведение)',displayName:`WithQuickFilters`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/WithQuickFilters.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,Ne,X;function Pe(){return(Pe=e((()=>{o(),u(),s(),f(),T(),C(),y(),h(),b(),M(),Y=i(),Ne={...D,status:[]},X=()=>{let e=m({defaultValues:Ne});return(0,Y.jsx)(d,{header:(0,Y.jsx)(c,{title:`Быстрые фильтры — мультивыбор`,actions:j,filters:(0,Y.jsx)(w,{form:e,searchField:({control:e})=>(0,Y.jsx)(x,{control:e,name:`search`,placeholder:`Поиск...`}),mainFilters:({control:e,isModal:t})=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,Y.jsx)(a,{value:e,children:e},e))}),(0,Y.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,Y.jsx)(a,{value:e,children:e},e))})]}),quickFilters:({control:e})=>(0,Y.jsx)(S,{control:e,name:`status`,label:`Статус`,multiple:!0,allCounter:72,options:O,placeholder:`Выберите статус`})})}),content:(0,Y.jsx)(l,{children:(0,Y.jsx)(A,{form:e})})})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<ValuesWithStatus>({
    defaultValues: withStatusDefaults as DefaultValues<ValuesWithStatus>
  });
  return <PageLayout header={<PageHeader title="Быстрые фильтры — мультивыбор" actions={MockActions} filters={<FormFilters form={form} searchField={({
    control
  }) => <FormFiltersSearchField control={control} name="search" placeholder="Поиск..." />} mainFilters={({
    control,
    isModal
  }) => <>
                  <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>
                  <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                    {OPTIONS.map(option => <MenuItem value={option} key={option}>
                        {option}
                      </MenuItem>)}
                  </FormSelect>
                </>} quickFilters={({
    control
  }) => <FormQuickFilters control={control} name="status" label="Статус" multiple allCounter={72} options={STATUS_OPTIONS} placeholder="Выберите статус" />} />} />} content={<PageContent>
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...X.parameters?.docs?.source},description:{story:`Мультивыбор — несколько чипов могут быть активны одновременно.
В модалке отображается как Select с множественным выбором.`,...X.parameters?.docs?.description}}};try{X.displayName=`WithQuickFiltersMultiselect`,X.__docgenInfo={description:`Мультивыбор — несколько чипов могут быть активны одновременно.
В модалке отображается как Select с множественным выбором.`,displayName:`WithQuickFiltersMultiselect`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/WithQuickFiltersMultiselect.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,$;function Fe(){return(Fe=e((()=>{ue(),le(),de(),o(),u(),s(),f(),y(),se(),h(),b(),M(),Z=i(),Q=ce({search:g(_()),id:_(),name:g(_()),idGroup:g(_()),nameGroup:g(_()),additional:g(_()),typeDocument:g(_()),status:g(_())}),$=()=>{let e=m({validationSchema:Q,defaultValues:D});return(0,Z.jsx)(d,{header:(0,Z.jsx)(c,{title:`Страница с фильтрами`,actions:j,filters:(0,Z.jsx)(w,{form:e,validationSchema:Q,onSubmit:e=>{console.log(`handleSubmit`,e),new Promise(t=>setTimeout(()=>{t(e)},1e3))},mainFiltersColumns:`minmax(150px, 200px) minmax(200px, 300px)`,mainFilters:({control:e,isModal:t})=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{control:e,name:`id`,label:`ID`,placeholder:t?`Введите ID`:`ID`,children:E.map(e=>(0,Z.jsx)(a,{value:e,children:e},e))}),(0,Z.jsx)(v,{control:e,name:`name`,label:`Название`,placeholder:t?`Выберите название`:`Название`,children:E.map(e=>(0,Z.jsx)(a,{value:e,children:e},e))})]}),secondaryFilters:({control:e})=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{control:e,name:`additional`,label:`Дополнительно`,placeholder:`Выберите дополнительные опции`,children:E.map(e=>(0,Z.jsx)(a,{value:e,children:e},e))}),(0,Z.jsx)(v,{control:e,name:`idGroup`,label:`ID (в группе)`,placeholder:`Введите ID группы`,children:E.map(e=>(0,Z.jsx)(a,{value:e,children:e},e))}),(0,Z.jsx)(v,{control:e,name:`nameGroup`,label:`Название (в группе)`,placeholder:`Введите название группы`,children:E.map(e=>(0,Z.jsx)(a,{value:e,children:e},e))})]}),submitButton:e=>(0,Z.jsx)(oe,{...e,children:`Найти заявки`})})}),content:(0,Z.jsx)(l,{children:(0,Z.jsx)(A,{form:e})})})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`object<Values>({
  search: optional(string()),
  id: string(),
  name: optional(string()),
  idGroup: optional(string()),
  nameGroup: optional(string()),
  additional: optional(string()),
  typeDocument: optional(string()),
  status: optional(string())
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<Values>({
    validationSchema,
    defaultValues: defaultValues as DefaultValues<Values>
  });
  const handleSubmit = (values: Values) => {
    console.log('handleSubmit', values);
    new Promise(resolve => setTimeout(() => {
      resolve(values);
    }, 1000));
  };
  return <PageLayout header={<PageHeader title="Страница с фильтрами" actions={MockActions} filters={<FormFilters form={form} validationSchema={validationSchema} onSubmit={handleSubmit} mainFiltersColumns="minmax(150px, 200px) minmax(200px, 300px)" mainFilters={({
    control,
    isModal
  }) => {
    return <>
                    <FormSelect control={control} name="id" label="ID" placeholder={isModal ? 'Введите ID' : 'ID'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                    <FormSelect control={control} name="name" label="Название" placeholder={isModal ? 'Выберите название' : 'Название'}>
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                  </>;
  }} secondaryFilters={({
    control
  }) => {
    return <>
                    <FormSelect control={control} name="additional" label="Дополнительно" placeholder="Выберите дополнительные опции">
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                    <FormSelect control={control} name="idGroup" label="ID (в группе)" placeholder="Введите ID группы">
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                    <FormSelect control={control} name="nameGroup" label="Название (в группе)" placeholder="Введите название группы">
                      {OPTIONS.map(option => <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>)}
                    </FormSelect>
                  </>;
  }} submitButton={props => <FormSubmitButton {...props}>Найти заявки</FormSubmitButton>} />} />} content={<PageContent>
          <FormValuesPreview form={form} />
        </PageContent>} />;
}`,...$.parameters?.docs?.source},description:{story:"Использование FormFilters с submit кнопкой. Поля должны иметь `optional` валидацию.",...$.parameters?.docs?.description}}};try{$.displayName=`WithSubmitButton`,$.__docgenInfo={description:"Использование FormFilters с submit кнопкой. Поля должны иметь `optional` валидацию.",displayName:`WithSubmitButton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/FormFilters/stories/WithSubmitButton.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ie,Le;function Re(){return(Re=e((()=>{be(),b(),Te(),De(),Oe(),ke(),Ae(),je(),Me(),Pe(),Fe(),Ie={title:`React-Hook-Form/FormFilters`,component:w,decorators:ge,parameters:{layout:`fullscreen`,docs:{description:{component:'Компонент для отображения фильтров. Используется в `PageHeader`.\n\nСодержит:\n - `SearchField` - поле поиска. Исключается из счетчика фильтров.\n - `MainFilters` - основные фильтры. Отображаются в виде колонок и в модальном окне "Все фильтры".\n - `SecondaryFilters` - дополнительные фильтры. Отображаются только в модальном окне "Все фильтры".\n - `SubmitButton` - кнопка отправки формы.\n - `QuickFilters` - быстрые фильтры. Отображаются строкой чипов под основными фильтрами.'}}}},Le=[`BasicUsage`,`WithGroups`,`OnlySearch`,`WithSubmitButton`,`WithoutSecondaryFilters`,`IsLoading`,`SyncStates`,`WithQuickFilters`,`WithQuickFiltersMultiselect`]})))()}Re();export{F as BasicUsage,L as IsLoading,z as OnlySearch,H as SyncStates,W as WithGroups,J as WithQuickFilters,X as WithQuickFiltersMultiselect,$ as WithSubmitButton,K as WithoutSecondaryFilters,Le as __namedExportsOrder,Ie as default};