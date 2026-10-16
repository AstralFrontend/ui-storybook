import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,it as r,ji as i,rt as a,w as o,xa as s,yn as c}from"./preview-CTqDz5zI.js";import{n as l,t as u}from"./DotsVOutlineMd-BZCCo-iT.js";import{t as d}from"./DataGridInfinite-B-ZP_t_9.js";import{t as f}from"./DataGridInfinite-6S59FG1x.js";import{n as p,t as m}from"./faker-DHc11VVS.js";import{n as h,t as g}from"./error-_dxK9GiT.js";import{n as _,t as ee}from"./no-data-stub-BWDXGYgY.js";import{c as v,i as y,n as b,o as x,r as S}from"./ResizingDataGrid-C5HPgm0Z.js";function C(){return(C=e((()=>{b(),x(),S()})))()}var w,T;function E(){return(E=e((()=>{f(),C(),w=s(),T=({columns:e,...t})=>{let{computedColumns:n,...r}=v(e);return(0,w.jsx)(d,{headPreAddon:(0,w.jsx)(y,{...r}),columns:n,...t})};try{T.displayName=`ResizingDataGridInfinite`,T.__docgenInfo={description:`⚠️**Unstable component**

Таблица с возможностью регулировать ширину колонок через drag-and-drop и бесконечным скроллом, построенная на css grid.

Новые значения ширин колонок сохраняются в localStorage, и будут применены при последующих рендерах.
Хэш ключ для сохранения в localStorage формируется на основании набора значений field и width всех колонок таблицы.`,displayName:`ResizingDataGridInfinite`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ResizingDataGridInfinite/ResizingDataGridInfinite.tsx`,methods:[],props:{isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`'tree'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!1,tags:{default:`'tree'`},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},tree:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения древовидных списков
Применяется если variant="tree"`,name:`tree`,required:!1,tags:{},type:{name:`{ isInitialExpanded?: boolean; expandedLevel?: number; initialVisibleChildrenCount?: number; }`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},maxHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Максимальная высота для таблицы`,name:`maxHeight`,required:!1,tags:{},type:{name:`number`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},subrows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения вложенных списков
Применяется если variant="subrows"`,name:`subrows`,required:!1,tags:{},type:{name:`{ expandedLevel?: number; initialVisibleChildrenCount?: number; moreButtonColumnPosition?: number; isVisibleCollapseButton?: boolean; }`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`selectedRows`,required:!1,tags:{example:`<DataGrid selectedRows={[{name: 'test'}]} />
Массив выбранных строк`},type:{name:`TData[]`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{example:`<DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
Параметры сортируемой колонки`},type:{name:`DataGridSort<TSortField>`}},massActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Панель массовых действий над выбранными строками`,name:`massActions`,required:!1,tags:{example:`<DataGrid massActions={<DataGridMassActions />} />`},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:{value:`'—'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'—'`},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!1,tags:{},type:{name:`(row: TData[]) => void`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Возвращает блокировку строки { mode, reason }`,name:`getRowDisabled`,required:!1,tags:{example:`const getRowDisabled = useCallback(
  (row: Document): DataGridRowDisabled | undefined => {
    if (row.status === 'Отправлен') {
      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };
    }

    return undefined;
  },
  [],
);

<DataGrid getRowDisabled={getRowDisabled} />`},type:{name:`(row: TData) => DataGridRowDisabled`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{example:`<DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},headPreAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Место для рендера перед head страницы`,name:`headPreAddon`,required:!1,tags:{private:`Предполагается для использования в реализации изменения размеров таблицы`},type:{name:`ReactNode`}},isHideHeaderIfNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`},{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},virtuosoRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Ref для доступа к методам Virtuoso`,name:`virtuosoRef`,required:!1,tags:{},type:{name:`Ref<VirtuosoHandle>`}},isEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Флаг достижения конца списка`,name:`isEndReached`,required:!1,tags:{},type:{name:`boolean`}},endOfScrollMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Текст достижения конца списка`,name:`endOfScrollMsg`,required:!1,tags:{},type:{name:`string`}},onEndReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных`,name:`onEndReached`,required:!1,tags:{},type:{name:`() => void`}},onStartReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Обработчик подгрузки данных при скроле до начала списка`,name:`onStartReached`,required:!1,tags:{},type:{name:`() => void`}},isStartReached:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Флаг достижения начала списка`,name:`isStartReached`,required:!1,tags:{},type:{name:`boolean`}},initialVisibleItemIndex:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridInfinite/types.ts`,name:`TypeLiteral`}],description:`Индекс первого видимого элемента`,name:`initialVisibleItemIndex`,required:!1,tags:{},type:{name:`number`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGridInfinite/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`ResizingColumnsInfinite<TData>`}}},tags:{}}}catch{}})))()}function D(){return(D=e((()=>{E()})))()}var O,k,A,j;function M(){return(M=e((()=>{m(),O=[`ИП Иванов О.В.`,`ООО "Новая организация"`,`ООО "Волшебные документы"`],k=()=>p.date.between({from:new Date(2024,10,10),to:new Date(2025,10,10)}).toISOString(),A=(e=10)=>Array.from({length:e}).map((e,t)=>({id:p.string.uuid(),documentName:`Договор №${t+1}`,recipient:p.helpers.arrayElement(O),sender:p.helpers.arrayElement(O),createDate:k()})),j=(e=10,t)=>{let{isNotSelectable:n,childrenCount:r=3,childrenColumns:i}=t||{};return Array.from({length:e}).map((e,t)=>{let a=p.helpers.arrayElement(O),o=k(),s=Math.random()>.5;return{id:p.string.uuid(),documentName:s?`Пакет документов`:`Договор №${t+1}`,recipient:a,createDate:o,options:{isNotSelectable:n,childrenColumns:i},children:s?Array.from({length:r}).map((e,n)=>({id:p.string.uuid(),documentName:`Договор №${t+Number(`1${n}0`)}`,recipient:a,createDate:o})):void 0}})}})))()}var N;function P(){return(P=e((()=>{M(),N=[{id:`123456789`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:k()},...A(100)]})))()}var F;function I(){return(I=e((()=>{c(),F=i.div`
  width: 100%;
  height: 500px;
`})))()}var L,R;function z(){return(z=e((()=>{h(),ee(),o(),I(),L=s(),R=({children:e})=>(0,L.jsx)(t,{imagesMap:{defaultErrorImgSrc:g,noDataImgSrc:_,outdatedReleaseErrorImgSrc:``},children:(0,L.jsx)(F,{children:e})});try{R.displayName=`StoryWrapper`,R.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ResizingDataGridInfinite/stories/common/StoryWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGridInfinite/stories/common/StoryWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function B(){return(B=e((()=>{P(),z(),I()})))()}var V,H;function U(){return(U=e((()=>{D(),B(),V=s(),H=()=>(0,V.jsx)(R,{children:(0,V.jsx)(T,{keyId:`id`,rows:N,columns:[{field:`documentName`,width:`50%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`30%`}],onRetry:()=>{}})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const columns: ResizingColumnsInfinite<DataType> = [{
    field: 'documentName',
    width: '50%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '30%'
  }];
  return <StoryWrapper>
      <ResizingDataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} columns={columns} onRetry={() => {}} />
    </StoryWrapper>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G;function K(){return(K=e((()=>{u(),a(),D(),B(),W=s(),G=()=>(0,W.jsx)(R,{children:(0,W.jsx)(T,{keyId:`id`,rows:N,isLoading:!0,columns:[{field:`documentName`,width:`30%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`25%`},{field:`recipient`,label:`Отправитель`,width:`25%`},{field:`$actions`,width:`50px`,renderCell:()=>(0,W.jsx)(r,{variant:`light`,color:`grey`,children:(0,W.jsx)(l,{})})}],onRetry:()=>{}})}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const columns: ResizingColumnsInfinite<DataType> = [{
    field: 'documentName',
    width: '30%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '25%'
  }, {
    field: 'recipient',
    label: 'Отправитель',
    width: '25%'
  }, {
    field: '$actions',
    width: '50px',
    renderCell: () => <IconButton variant="light" color="grey">
          <DotsVOutlineMd />
        </IconButton>
  }];
  return <StoryWrapper>
      <ResizingDataGridInfinite<DataType, SortField> keyId="id" rows={fakeData} isLoading columns={columns} onRetry={() => {}} />
    </StoryWrapper>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=n(),u(),a(),E(),B(),M(),J=s(),Y=()=>{let e=[{id:`123456789`,documentName:`Пакет документов`,recipient:`ПАО "Первый завод"`,createDate:k(),children:[{id:`1234567890`,documentName:`Договор №12345678`,recipient:`ПАО "Первый завод"`,createDate:k()}]},...j(9)],t=[{field:`documentName`,width:`40%`,label:`Имя документа`},{field:`createDate`,width:`20%`,label:`Дата создания`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`recipient`,label:`Получатель`,width:`40%`},{field:`$actions`,width:`50px`,renderCell:()=>(0,J.jsx)(r,{variant:`light`,color:`grey`,children:(0,J.jsx)(l,{})})}],[n,i]=(0,q.useState)([]);return(0,J.jsx)(R,{children:(0,J.jsx)(T,{keyId:`id`,rows:e,columns:t,selectedRows:n,onSelectRow:e=>i(e),onRetry:()=>{}})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const data = [{
    id: '123456789',
    documentName: 'Пакет документов',
    recipient: 'ПАО "Первый завод"',
    createDate: makeRandomDate(),
    children: [{
      id: '1234567890',
      documentName: 'Договор №12345678',
      recipient: 'ПАО "Первый завод"',
      createDate: makeRandomDate()
    }]
  }, ...makeDataListWithTree(9)];
  const columns: ResizingColumnsInfinite<DataType> = [{
    field: 'documentName',
    width: '40%',
    label: 'Имя документа'
  }, {
    field: 'createDate',
    width: '20%',
    label: 'Дата создания',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'recipient',
    label: 'Получатель',
    width: '40%'
  }, {
    field: '$actions',
    width: '50px',
    renderCell: () => <IconButton variant="light" color="grey">
          <DotsVOutlineMd />
        </IconButton>
  }];
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <StoryWrapper>
      <ResizingDataGridInfinite<DataType, SortField> keyId="id" rows={data} columns={columns} selectedRows={selected} onSelectRow={handleSelect} onRetry={() => {}} />
    </StoryWrapper>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{E(),U(),K(),X(),Z={title:`Table/Unstable/ResizingDataGridInfinite`,component:T,parameters:{docs:{description:{component:`⚠️**Unstable component**

Таблица с возможностью регулировать ширину колонок через drag-and-drop и бесконечным скроллом, построенная на css grid

Новые значения ширин колонок сохраняются в localStorage, и будут применены при последующих рендерах.
Хэш ключ для сохранения в localStorage формируется на основании набора значений field и width всех колонок таблицы.

ResizingDataGridInfinite обладает тем же функционалом, что и [DataGridInfinite](/story/table-dataGridInfinite--docs)

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=457-23160)`}}}},Q=[`BasicUsage`,`WithActions`,`WithTree`]})))()}$();export{H as BasicUsage,G as WithActions,Y as WithTree,Q as __namedExportsOrder,Z as default};