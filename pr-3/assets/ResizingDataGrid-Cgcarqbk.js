import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,Ri as n,Va as r,ji as i,xa as a,yn as o,zi as s}from"./preview-CpIY8YCq.js";import{ot as c,s as l,t as u}from"./DataGrid-Cxrz7XWv.js";import{r as d,t as f}from"./useId-Bv4FGVkF.js";var p;function m(){return(m=e((()=>{p=(e,t)=>{let n=e[e.length-1],r=n?.field===`$actions`;return n&&r?{actionsColumnWidth:n.width,computedColumns:e.map((e,n)=>({...e,width:e.field===`$actions`?e.width:`${t[n]}fr`}))}:{computedColumns:e.map((e,n)=>({...e,width:`${t[n]}%`}))}}})))()}var h;function g(){return(g=e((()=>{h=(e,t,n=localStorage)=>{let r=n.getItem(t),i=e.filter(({field:e})=>e!==`$actions`).map(({width:e})=>parseFloat(e));if(r&&r.length>0)try{let e=JSON.parse(r);if(Array.isArray(e)&&e.every(e=>typeof e==`number`)&&e.length===i.length&&e.reduce((e,t)=>e+t,0)===100)return e}catch{}return i}})))()}var _;function v(){return(v=e((()=>{n(),_=e=>`DataGridResize_${s(JSON.stringify(e.map(({field:e,width:t})=>({field:e,width:t}))))}`})))()}var y,b;function x(){return(x=e((()=>{y=r(),m(),g(),v(),b=(e,t=localStorage)=>{let n=(0,y.useMemo)(()=>_(e),[e]),[r,i]=(0,y.useState)(()=>h(e,n,t)),{computedColumns:a,actionsColumnWidth:o}=(0,y.useMemo)(()=>p(e,r),[e,r]);return(0,y.useEffect)(()=>t.setItem(n,JSON.stringify(r)),[a,n]),(0,y.useEffect)(()=>{let t=e.filter(({field:e})=>e!==`$actions`).reduce((e,t)=>e+parseFloat(t.width),0);t!==100&&console.warn(`Для корректной работы изменения пользователем ширины колонок таблицы необходимо, чтобы сумма всех процентов колонок была бы равна 100. Текущее значение: ${t}`)},[]),{columnsWidths:r,setColumnsWidths:i,computedColumns:a,actionsColumnWidth:o}}})))()}function S(){return(S=e((()=>{x()})))()}var C,w,T,E,D;function O(){return(O=e((()=>{u(),o(),C=e=>t`
  pointer-events: all;

  /* Причина игнора: Не поддерживается на мобильных устройствах. Не критично */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  cursor: col-resize;

  transform-origin: top;

  width: var(--thumb-width);
  height: var(--thumb-height);

  color: ${e.palette.grey[200]};

  appearance: none;
  background: linear-gradient(
    to right,
    transparent 25%,
    currentColor 25%,
    currentColor 75%,
    transparent 75%
  );
  border: none;

  transition: ${e.transitions.create([`color`],{duration:e.transitions.duration.short})};

  /* Причина игнора: прогрессивное улучшение */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  @supports (container-type: size) {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    height: 100cqh;
    max-height: var(--thumb-height);
  }
`,w=e=>t`
  transform: scaleY(5) scaleX(0.4);

  color: ${e.palette.primary.dark};

  /* Причина игнора: прогрессивное улучшение */
  /* stylelint-disable plugin/no-unsupported-browser-features */
  @supports (container-type: size) {
    transform: translateY(calc(100cqh / 2 - var(--thumb-height) / 2))
      scaleX(0.4);

    max-height: calc(100cqh - var(--thumb-height) / 2);
  }
  /* stylelint-enable plugin/no-unsupported-browser-features */
`,T=e=>t`
  color: ${e.palette.grey[500]};
`,E=i.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  left: 0;

  container-type: size;

  width: ${({actionsColumnWidth:e})=>e?`calc(100% - ${e})`:`100%`};
  height: 100%;

  &:hover input {
    opacity: 1;
  }
`,D=i.input`
  --thumb-height: 25px;
  --thumb-width: 10px;
  --track-width: calc(100% + var(--thumb-width));
  pointer-events: none;

  position: absolute;
  z-index: ${({theme:e})=>e.zIndex.fab};
  top: 19px;

  /*
  * В нативном поведении <input type="range"/> при крайних положениях ползунка,
  * границы ползунка совпадают с границей трека, 
  * и если мы оставим как есть, то тогда получим поведение,
  * когда центр ползунка чуть чуть не совпадает с границей разделяющей колонки.
  * Только если граница будет ровно в середине, тогда они совпадут, но если граница немного левее центра,
  * то ползунок окажется чуть правее границы, и, соответственно, если граница правее центра, то ползунок окажется чуть левее границы колонок.
  * Для решения этой проблемы, мы немного дополнительно растягиваем весь трек на ширину ползунка,
  * и смещаем его левее на половину ширины этого ползунка  
  */
  left: calc(var(--thumb-width) / -2);

  width: var(--track-width);
  min-width: var(--track-width);
  max-width: var(--track-width);
  height: 0;
  margin: 0;

  appearance: none;
  opacity: 0;
  border: none;
  outline: none;

  transition: ${({theme:e})=>e.transitions.create([`opacity`],{duration:e.transitions.duration.standard})};

  /*
  * объединять стили для -moz-range-thumb и для -webkit-slider-thumb через запятую нельзя,
  * иначе для браузера это станет единым блоком,
  * и для каждого браузера этот блок будет содержать один невалидный селектор,
  * для chrome невалидный селектор -moz-range-thumb а для firefox -webkit-slider-thumb,
  * и из-за этого, стили всего блока будут проигнорированы
  */
  &::-moz-range-thumb {
    ${({theme:e})=>C(e)}
    &:hover {
      ${({theme:e})=>T(e)}
    }
  }

  &::-webkit-slider-thumb {
    ${({theme:e})=>C(e)}
    &:hover {
      ${({theme:e})=>T(e)}
    }
  }

  &:active::-moz-range-thumb,
  &:focus-visible::-moz-range-thumb,
  &::-moz-range-thumb:active {
    ${({theme:e})=>w(e)}
  }

  &:active::-webkit-slider-thumb,
  &:focus-visible::-webkit-slider-thumb,
  &::-webkit-slider-thumb:active {
    ${({theme:e})=>w(e)}
  }

  /* Причина игнора: Не критично для отображения */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  .${c.root}:has(.${c.header}:hover) &,
  &:focus-visible,
  &:hover,
  &:active {
    opacity: 1;
  }
`})))()}var k,A;function j(){return(j=e((()=>{k=5,A=(e,t,n)=>{let r=parseFloat(e.value),i=parseInt(e.getAttribute(`data-index`));if(isNaN(r)||isNaN(i)||!n[i]||t.length<2)return null;let a=t[i],o=t[i+1],s=r-n[i],c=a+s,l=o-s;if(c<k||l<k)return null;let u=n.map((e,t)=>t===i?r:e);return{newColumnsWidths:t.map((e,t)=>t===i?c:t===i+1?l:e),newSliders:u}}})))()}var M;function N(){return(N=e((()=>{M=e=>e.slice(0,-1).map((t,n)=>e.slice(0,n+1).reduce((e,t)=>e+t,0))})))()}var P,F;function I(){return(I=e((()=>{P=r(),f(),j(),N(),F=({setColumnsWidths:e,columnsWidths:t})=>{let n=d(),[r,i]=(0,P.useState)(()=>M(t)),[a,o]=(0,P.useState)(r);return{id:n,handleChange:e=>{let n=A(e.currentTarget,t,a);n&&i(n.newSliders)},handleKeyMouseUp:n=>{let r=A(n.currentTarget,t,a);r&&(i(r.newSliders),o(r.newSliders),e(r.newColumnsWidths))},sliders:r}}})))()}function L(){return(L=e((()=>{I()})))()}var R,z;function B(){return(B=e((()=>{O(),L(),R=a(),z=({actionsColumnWidth:e,...t})=>{let{sliders:n,id:r,handleKeyMouseUp:i,handleChange:a}=F(t);return(0,R.jsx)(E,{actionsColumnWidth:e,children:n.map((e,t)=>(0,R.jsx)(D,{"data-index":t,type:`range`,step:`0.1`,min:`0`,max:`100`,onChange:a,onMouseUp:i,onKeyUp:i,onTouchEnd:i,onTouchCancel:i,value:e},`${r}_${t}`))})};try{z.displayName=`Sliders`,z.__docgenInfo={description:``,displayName:`Sliders`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/Sliders/Sliders.tsx`,methods:[],props:{columnsWidths:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/Sliders/useLogic/useLogic.ts`,name:`TypeLiteral`}],description:``,name:`columnsWidths`,required:!0,tags:{},type:{name:`number[]`}},setColumnsWidths:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/Sliders/useLogic/useLogic.ts`,name:`TypeLiteral`}],description:``,name:`setColumnsWidths`,required:!0,tags:{},type:{name:`(widths: number[]) => void`}},actionsColumnWidth:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/Sliders/Sliders.tsx`,name:`TypeLiteral`}],description:``,name:`actionsColumnWidth`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function V(){return(V=e((()=>{B()})))()}var H,U;function W(){return(W=e((()=>{u(),S(),V(),H=a(),U=({columns:e,...t})=>{let{computedColumns:n,...r}=b(e);return(0,H.jsx)(l,{headPreAddon:(0,H.jsx)(z,{...r}),columns:n,...t})};try{U.displayName=`ResizingDataGrid`,U.__docgenInfo={description:`⚠️**Unstable component**

Таблица с возможностью регулировать ширину колонок через drag-and-drop, построенная на css grid.

Новые значения ширин колонок сохраняются в localStorage, и будут применены при последующих рендерах.
Хэш ключ для сохранения в localStorage формируется на основании набора значений field и width всех колонок таблицы.`,displayName:`ResizingDataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/ResizingDataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},maxHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Максимальная высота для таблицы`,name:`maxHeight`,required:!1,tags:{},type:{name:`number`}},variant:{defaultValue:{value:`'tree'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!1,tags:{default:`'tree'`},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Компонент кастомного футера (например Pagination)`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},tree:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения древовидных списков
Применяется если variant="tree"`,name:`tree`,required:!1,tags:{},type:{name:`{ isInitialExpanded?: boolean; expandedLevel?: number; initialVisibleChildrenCount?: number; }`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},subrows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения вложенных списков
Применяется если variant="subrows"`,name:`subrows`,required:!1,tags:{},type:{name:`{ expandedLevel?: number; initialVisibleChildrenCount?: number; moreButtonColumnPosition?: number; isVisibleCollapseButton?: boolean; }`}},minDisplayRows:{defaultValue:{value:`10`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!1,tags:{default:`10`,deprecated:`Не поддерживается, параметр будет удален в следующей major версии пакета.
Мотивация: задание минимальной высоты через параметр компонента мешает корректной работе таблицы
в части верстки.
Чтобы отключить минимальную высоту таблицы, задайте в ConfigProvider:
\`components.dataGrid.defaultProps.disableMinHeight: true\``},type:{name:`number`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`selectedRows`,required:!1,tags:{example:`<DataGrid selectedRows={[{name: 'test'}]} />
Массив выбранных строк`},type:{name:`TData[]`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{example:`<DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
Параметры сортируемой колонки`},type:{name:`DataGridSort<TSortField>`}},massActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Панель массовых действий над выбранными строками`,name:`massActions`,required:!1,tags:{example:`<DataGrid massActions={<DataGridMassActions />} />`},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:{value:`'—'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'—'`},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!1,tags:{},type:{name:`(row: TData[]) => void`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Возвращает блокировку строки { mode, reason }`,name:`getRowDisabled`,required:!1,tags:{example:`const getRowDisabled = useCallback(
  (row: Document): DataGridRowDisabled | undefined => {
    if (row.status === 'Отправлен') {
      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };
    }

    return undefined;
  },
  [],
);

<DataGrid getRowDisabled={getRowDisabled} />`},type:{name:`(row: TData) => DataGridRowDisabled`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{example:`<DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},headPreAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Место для рендера перед head страницы`,name:`headPreAddon`,required:!1,tags:{private:`Предполагается для использования в реализации изменения размеров таблицы`},type:{name:`ReactNode`}},isHideHeaderIfNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ResizingDataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`ResizingColumns<TData>`}}},tags:{}}}catch{}})))()}export{B as a,b as c,z as i,W as n,S as o,V as r,x as s,U as t};