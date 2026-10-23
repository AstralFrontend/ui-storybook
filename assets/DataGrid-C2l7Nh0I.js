import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,T as o,Xt as s,b as c,ba as l,cn as u,dt as d,ei as f,en as p,ft as m,hr as h,in as g,it as _,j as v,ji as y,ln as b,mr as x,rt as ee,w as S,wn as C,y as w,ya as T,yn as E,za as D}from"./preview-CdUppftE.js";import{n as O,t as k}from"./useViewportType-aOSh2vYj.js";import{t as A}from"./Skeleton-Czy97z3G.js";import{t as j}from"./Tooltip-DtLO9Fv6.js";import{t as te}from"./BottomDrawer-DT2Y3iVZ.js";import{t as M}from"./Divider-Ce5PDuEH.js";import{t as N}from"./Collapse-sKZkqrmk.js";import{t as ne}from"./Collapse-CrjY_8s5.js";import{t as P}from"./BottomDrawer-B5rfDIe7.js";import{r as re,t as ie}from"./personalDataSecurity-BIr7M63y.js";import{t as F}from"./Tooltip-DNZDfsmh.js";import{t as I}from"./Checkbox-BBfAByDD.js";import{n as ae}from"./useFirstMountState-C268Aqak.js";import{t as L}from"./useFirstMountState-CYFUQwrA.js";import{t as R}from"./Checkbox-9oC-tylu.js";import{t as oe}from"./OverflowTypography-DbLVX7kv.js";import{t as se}from"./OverflowTypography-psrCfdNp.js";import{i as z,n as ce,r as le,t as ue}from"./LinearProgress-VA1-vA7I.js";import{t as de}from"./Skeleton-BsIaigOp.js";import{t as fe}from"./ContentState-BvCleFVT.js";import{t as pe}from"./ContentState-BPGVuS6U.js";import{n as me,t as he}from"./getInertProps-Bwc7kLBq.js";import{t as ge}from"./Divider-BiKU6QV1.js";import{n as _e,t as ve}from"./ChevronROutlineMd-CpfajhjJ.js";import{i as ye,n as be,r as xe}from"./HintIcon-CRsd8NU6.js";import{n as Se,t as Ce}from"./constants-DDk21enK.js";import{a as we,c as Te,i as Ee,n as De,s as Oe,t as ke}from"./SortUpFillSm-Bjl5wvCq.js";function Ae(e,t,n){n===void 0&&(n=!1);for(var r=[],i=0;i<e.length;i++){var a=e[i],o=n?t(a,i,e):t(a);if(o.hasMany===!0?r.push.apply(r,o.next):o.hasNext&&r.push(o.next),o.done)break}return r}function je(){return h(Me,arguments,Ne)}function Me(e,t){return Ae(e,Ne(t))}function Ne(e){var t=new Set;return function(n){var r=e(n);return t.has(r)?{done:!1,hasNext:!1}:(t.add(r),{done:!1,hasNext:!0,next:n})}}function Pe(){return(Pe=e((()=>{x()})))()}var B;function Fe(){return(Fe=e((()=>{a(),B={root:r(`data-grid__cell`),isHideOnMobile:r(`data-grid__cell_hide-on-mobile`),columnLabel:r(`data-grid__cell-column-label`),columnLabelHidden:r(`data-grid__cell-column-label_hidden`),actionColumn:r(`data-grid__cell_action-column`),cellContent:r(`data-grid__cell-content`),disabled:r(`data-grid__cell_disabled`),withStartAdornment:r(`data-grid__cell_with-start-adornment`),alignLeft:r(`data-grid__cell_align-left`),alignCenter:r(`data-grid__cell_align-center`),alignRight:r(`data-grid__cell_align-right`),grouped:r(`data-grid__cell_grouped`),tabularNums:r(`data-grid__cell_tabular-nums`),anchorCell:r(`data-grid__cell_anchor-cell`),withLink:r(`data-grid__cell_with-link`)}})))()}var Ie,Le;function Re(){return(Re=e((()=>{E(),d(),Fe(),Ie=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    &.${B.columnLabelHidden} {
      display: none;
    }
  }
`,Le=y.div`
  min-width: 0;

  &.${B.tabularNums} {
    font-feature-settings: "tnum" 1;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(1)};
    align-items: flex-start;

    width: 100%;
    
    &.${B.actionColumn} {
      align-items: flex-end;
    }
  }
`})))()}var ze,Be,Ve,He;function Ue(){return(Ue=e((()=>{se(),C(),Fe(),Re(),ze=T(),Be=n(B.cellContent,{variants:{isActionColumn:{true:B.actionColumn},isTabularNums:{true:B.tabularNums}}}),Ve=n(B.columnLabel,{variants:{hidden:{true:B.columnLabelHidden}}}),He=({row:e,label:t,hideTitleOnMobile:n,isActionColumn:r,isTabularNums:i,startAdornment:a,renderCell:o,formattedValue:s,hidePersonalDataClassname:c})=>(0,ze.jsxs)(ze.Fragment,{children:[a,(0,ze.jsxs)(Le,{className:Be({isActionColumn:r,isTabularNums:i}),children:[(0,ze.jsx)(Ie,{variant:`caption`,color:`textSecondary`,className:Ve({hidden:n||r}),children:t}),o?.(e),!o&&(0,ze.jsx)(oe,{rowsCount:2,tooltipProps:{className:c},children:(0,ze.jsx)(ze.Fragment,{children:s})})]})]});try{He.displayName=`CellInner`,He.__docgenInfo={description:``,displayName:`CellInner`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/CellInner.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Название колонки`,name:`label`,required:!1,tags:{},type:{name:`string`}},hideTitleOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Скрытие заголовка колонки на мобильных устройствах`,name:`hideTitleOnMobile`,required:!1,tags:{},type:{name:`boolean`}},isActionColumn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Флаг колонки с действиями`,name:`isActionColumn`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Моноширинный шрифт для чисел`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки слева`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},renderCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Кастомное отображение ячейки`,name:`renderCell`,required:!1,tags:{},type:{name:`RenderCell<Record<string, unknown>>`}},formattedValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Отформатированное значение ячейки`,name:`formattedValue`,required:!1,tags:{},type:{name:`unknown`}},hidePersonalDataClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Класс для скрытия персональных данных`,name:`hidePersonalDataClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function We(){return(We=e((()=>{Ue()})))()}var Ge,Ke;function qe(){return(qe=e((()=>{Ge=T(),Ke=({children:e,row:t,renderLink:n,href:r,target:i})=>n?n({children:e,row:t})??e:r?(0,Ge.jsx)(`a`,{href:r,target:i,rel:`noopener noreferrer`,children:e}):e;try{Ke.displayName=`LinkWrapper`,Ke.__docgenInfo={description:`Оборачивает содержимое ячейки в ссылку`,displayName:`LinkWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/LinkWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Содержимое ячейки`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Данные строки вместе с её options`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown> & { options?: DataGridRowOptions<TData>; children?: DataGridRowWithOptions<TData>[]; }`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Кастомная отрисовка ссылки строки`,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<TData>`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Je(){return(Je=e((()=>{qe()})))()}var Ye,V,Xe;function H(){return(H=e((()=>{a(),Ye=`actions`,V={loadingPlaceholder:r(`data-grid__loading-placeholder`),header:r(`data-grid__header`),root:r(`data-grid`),body:r(`data-grid__body`),bodyEmpty:r(`data-grid__body_empty`),disabled:r(`data-grid_disabled`),pinnedSectionNoData:r(`data-grid__pinned-section_no-data`),hasPinnedSections:r(`data-grid_has-pinned-sections`),pinnedSections:r(`data-grid__pinned-sections`),leftPinnedSection:r(`data-grid__left-pinned-section`),rightPinnedSection:r(`data-grid__right-pinned-section`),overflowed:r(`data-grid_overflowed`),wrapper:r(`data-grid__wrapper`),hasMassActions:r(`data-grid_has-mass-actions`),massActionsOpen:r(`data-grid_mass-actions-open`),isAllowHorizontalScroll:r(`data-grid_is-allow-horizontal-scroll`),hasGroupedColumns:r(`data-grid_has-grouped-columns`),hasResizePlugin:r(`data-grid_has-resize-plugin`),gridViewFull:r(`data-grid_grid-view-full`),gridViewStandard:r(`data-grid_grid-view-standard`),mobileVariantCards:r(`data-grid_mobile-variant-cards`),mobileVariantList:r(`data-grid_mobile-variant-list`)},Xe={list:r(`data-grid__skeleton-list`),item:r(`data-grid__skeleton-item`)}})))()}var Ze,U,W,Qe,$e;function et(){return(et=e((()=>{a(),Ze=`data-row-disable`,U={root:r(`data-grid__row`),showConnector:r(`data-grid__row_show-connector`),hidden:r(`data-grid__row_hidden`),hover:r(`data-grid__row_hover`),hasPinnedColumns:r(`data-grid__row_has-pinned-columns`),checkbox:r(`data-grid__row-checkbox`),mobileVariantCards:r(`data-grid__row_mobile-variant-cards`),mobileVariantList:r(`data-grid__row_mobile-variant-list`),nestedChildren:r(`data-grid__row-nested-children`),hasOpenChildren:r(`data-grid__row_has-open-children`),hasNestedChildren:r(`data-grid__row_has-nested-children`)},W={root:r(`data-grid__row-content`),hovered:r(`data-grid__row-content_hovered`),active:r(`data-grid__row-content_active`)},Qe={single:r(`data-grid__row-cell_single`),grouped:r(`data-grid__row-cell_grouped`),firstCell:r(`data-grid__row-cell_first`)},$e={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var tt;function nt(){return(nt=e((()=>{E(),H(),et(),Fe(),tt=y.div`
  overflow: hidden;
  display: flex;
  align-items: center;

  min-height: ${44}px;
  padding: ${({theme:e})=>e.spacing(1,2)};

  &.${B.disabled} {
    opacity: 0.5;
  }

  &.${B.withStartAdornment} {
    padding: ${({theme:e})=>e.spacing(1,2,1,0)};
  }

  &.${B.alignLeft} {
    justify-content: flex-start;
  }

  &.${B.alignCenter} {
    justify-content: center;
  }

  &.${B.alignRight} {
    justify-content: flex-end;
  }

  &.${B.withLink} {
    & > * {
      display: flex;
      align-items: inherit;
      justify-content: inherit;

      width: 100%;
      height: 100%;
    }

    & a {
      color: inherit;
      text-decoration: none;

      &:focus-visible {
        outline: none;
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    justify-content: space-between;

    min-height: unset;
    margin-top: ${({theme:e})=>e.spacing(3)};
    padding: 0;

    &.${B.isHideOnMobile} {
      display: none;
    }

    & .${U.checkbox} {
      align-self: flex-start;
      order: 1;
    }

    &.${B.grouped} {
      margin-top: ${({theme:e})=>e.spacing(1)};

      & .${B.cellContent} {
        flex-direction: row;
        gap: ${({theme:e})=>e.spacing(2)};
        align-items: baseline;

        & .${B.columnLabel} {
          /* Декоративный разделитель между названием колонки и значением */
          &::after {
            content: ':';
          }
        }
      }
    }

    &:first-of-type {
      margin-top: 0;
    }
  }
`})))()}var rt;function it(){return(it=e((()=>{rt=(e,t=`_self`)=>{let n=document.createElement(`a`);n.href=e,n.target=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})))()}var at,ot;function st(){return(st=e((()=>{at=D(),ot=(0,at.createContext)({isLoading:!1,isTabularNums:!1,emptyCellValue:``,activeRowId:``,keyId:``,columns:[],onRowClick:()=>void 0,mobileDisplayVariant:`list`})})))()}var ct,lt;function ut(){return(ut=e((()=>{ct=D(),lt=(0,ct.createContext)({selectedRows:[],isMassActionsOpen:!1})})))()}var dt,ft,pt,mt;function ht(){return(ht=e((()=>{dt=D(),ut(),ft=T(),pt=[],mt=({selectedRows:e=pt,onSelectRow:t,isMassActionsOpen:n=!1,children:r})=>{let i=(0,dt.useMemo)(()=>({selectedRows:e,onSelectRow:t,isMassActionsOpen:n}),[e,t,n]);return(0,ft.jsx)(lt.Provider,{value:i,children:r})};try{mt.displayName=`DataGridSelectionProvider`,mt.__docgenInfo={description:``,displayName:`DataGridSelectionProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,methods:[],props:{selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function gt(){return(gt=e((()=>{ht()})))()}function _t(){return(_t=e((()=>{ut(),gt()})))()}var vt,yt;function bt(){return(bt=e((()=>{vt=D(),yt=(0,vt.createContext)({getItem:()=>void 0,setItem:()=>void 0})})))()}var xt,St,Ct;function wt(){return(wt=e((()=>{xt=D(),bt(),St=T(),Ct=({children:e})=>{let t=(0,xt.useRef)({}),n=(0,xt.useCallback)(e=>t.current[e],[]),r=(0,xt.useCallback)((e,n)=>{t.current[e]=n},[]),i=(0,xt.useMemo)(()=>({getItem:n,setItem:r}),[n,r]);return(0,St.jsx)(yt.Provider,{value:i,children:e})};try{Ct.displayName=`DataGridStorageProvider`,Ct.__docgenInfo={description:``,displayName:`DataGridStorageProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Tt(){return(Tt=e((()=>{wt()})))()}function Et(){return(Et=e((()=>{bt(),Tt()})))()}var Dt,Ot,kt;function At(){return(At=e((()=>{Dt=D(),_t(),Et(),st(),Ot=T(),kt=({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,children:i,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l,selectedRows:u,onSelectRow:d,isMassActionsOpen:f})=>{let p=(0,Dt.useMemo)(()=>({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l}),[e,t,n,r,a,o,s,c,l]);return(0,Ot.jsx)(ot.Provider,{value:p,children:(0,Ot.jsx)(mt,{selectedRows:u,onSelectRow:d,isMassActionsOpen:f,children:(0,Ot.jsx)(Ct,{children:i})})})};try{kt.displayName=`DataGridContextProvider`,kt.__docgenInfo={description:``,displayName:`DataGridContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!0,tags:{},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<Record<string, unknown>>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function jt(){return(jt=e((()=>{At()})))()}function Mt(){return(Mt=e((()=>{st(),jt()})))()}var Nt,Pt;function Ft(){return(Ft=e((()=>{Nt=D(),it(),H(),Mt(),Pt=({row:e,href:t,target:n,cell:r,emptyCellValue:i,startAdornment:a})=>{let{isTabularNums:o,renderLink:s}=(0,Nt.useContext)(ot),{format:c,field:l,label:u,hideTitleOnMobile:d,isTabularNums:f}=r,p=f??o,m=e=>!!e||e===0,h=(0,Nt.useMemo)(()=>c&&m(c(e))?c(e):l&&m(e[l])?e[l]:i,[l,c,e,i]),g=!!a,_=r.field===Ye,v=()=>{if(_&&t)return rt(t,n)},y=_?void 0:{href:t,target:n,renderLink:s};return{formattedValue:h,hasStartAdornment:g,isActionColumn:_,label:u,hideTitleOnMobile:d,isTabularNums:p,linkProps:y,hasLink:!!(y?.renderLink||y?.href),onCellClick:v}}})))()}function It(){return(It=e((()=>{Ft()})))()}var Lt,Rt,zt,Bt;function Vt(){return(Vt=e((()=>{Lt=l(),ie(),k(),f(),C(),he(),We(),Fe(),Je(),nt(),It(),Rt=T(),zt=n(B.root,{variants:{isHideOnMobile:{true:B.isHideOnMobile},isDisabled:{true:B.disabled},withStartAdornment:{true:B.withStartAdornment},align:{left:B.alignLeft,center:B.alignCenter,right:B.alignRight},isActionColumn:{true:B.actionColumn},withLink:{true:B.withLink}}}),Bt=e=>{let{formattedValue:n,hasStartAdornment:r,isActionColumn:i,label:a,hideTitleOnMobile:o,isTabularNums:s,linkProps:c,hasLink:l,onCellClick:u}=Pt(e),{className:d,startAdornment:f,row:p,cell:m,isDisabled:h,isHidePersonalData:g,isHideOnMobile:_,hasNestedChildren:v,rootRowElement:y}=e,{renderCell:b,align:x=`left`}=m,{isMobile:ee}=O(),S=re({isEnabled:g===!0}),C=(0,Rt.jsx)(tt,{className:t(d,S,zt({isHideOnMobile:m.isHideOnMobile||_,isDisabled:h,withStartAdornment:r,align:x,isActionColumn:i,withLink:l})),...me(h),onClick:u,children:(0,Rt.jsx)(Ke,{row:p,...c,children:(0,Rt.jsx)(He,{row:p,label:a,hideTitleOnMobile:o,isActionColumn:i,isTabularNums:s,startAdornment:f,renderCell:b,formattedValue:n,hidePersonalDataClassname:S})})});return i&&ee&&v?y?(0,Lt.createPortal)(C,y):null:C};try{Bt.displayName=`Cell`,Bt.__docgenInfo={description:``,displayName:`Cell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/Cell.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridSingleColumn<TData>`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Если true, ячейка будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},isHideOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие ячейки на мобильных устройствах`,name:`isHideOnMobile`,required:!1,tags:{},type:{name:`boolean`}},hasNestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Флаг наличия вложенных элементов в строке`,name:`hasNestedChildren`,required:!1,tags:{},type:{name:`boolean`}},rootRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Ссылка на корневой элемент строки`,name:`rootRowElement`,required:!1,tags:{},type:{name:`HTMLLIElement`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Ht(){return(Ht=e((()=>{Vt(),Fe()})))()}var Ut,Wt;function Gt(){return(Gt=e((()=>{R(),F(),Ut=T(),Wt=({disabledReason:e,...t})=>e?(0,Ut.jsx)(j,{title:e,enterDelay:300,enterNextDelay:300,withoutContainer:!1,children:(0,Ut.jsx)(I,{...t})}):(0,Ut.jsx)(I,{...t});try{Wt.displayName=`RowCheckbox`,Wt.__docgenInfo={description:`Checkbox строки. Для заблокированного выбора показывает причину в tooltip`,displayName:`RowCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/RowCheckbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки выбора`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Kt(){return(Kt=e((()=>{Gt()})))()}var qt;function Jt(){return(Jt=e((()=>{qt=({maxHeight:e,gridColumns:t})=>({"--data-grid-columns":t,...e&&{"--max-height":`${e}px`}})})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=e=>e.map(({width:e,minWidth:t})=>{let n=e||`1fr`;return t?`minmax(${t}, ${n})`:n}).join(` `)})))()}var G;function K(){return(K=e((()=>{G=e=>`children`in e&&Array.isArray(e.children)})))()}var Zt;function Qt(){return(Qt=e((()=>{K(),Zt=(e,t)=>e.flatMap(e=>{let n=e.pinned??t;return G(e)?Zt(e.children,n):{...e,pinned:n}})})))()}var $t;function en(){return(en=e((()=>{$t=({hasMassActions:e,selectedRowsCount:t,isMobile:n})=>e&&t>0&&!n})))()}var tn;function nn(){return(nn=e((()=>{tn=({rowDisabled:e,hasBlockingAction:t=!1,blockingActionReason:n,isDisabledLastCellOption:r=!0})=>{let i=e?.mode,a=i===`selection`,o=t||i===`row`||i===`row-except-last-cell`,s=e?.reason||n;return{isDisabled:o,isDisabledLastCell:i?i!==`row-except-last-cell`:r,disabledReason:s,isCheckboxDisabled:o||a,checkboxDisabledReason:a?s:void 0}}})))()}var rn;function an(){return(an=e((()=>{rn=(e,t)=>{let n=t?.(e);if(n)return n;let{isDisabled:r,isDisabledLastCell:i=!0,disabledReason:a=``}=e.options??{};if(r)return{mode:i?`row`:`row-except-last-cell`,reason:a}}})))()}var on;function sn(){return(sn=e((()=>{an(),on=(e,t,n)=>{let r=new Map,i=[];return e.forEach(e=>{let a=e[t],o=n?.(e);o&&!o.reason&&i.push(a),r.set(a,o??rn(e))}),{rowsDisabled:r,idsWithoutReason:i}}})))()}var cn;function ln(){return(ln=e((()=>{cn=e=>{let t=new Set;e.forEach(({id:e})=>{if(t.has(e))throw Error(`DataGrid: plugin "${e}" передан несколько раз`);t.add(e)})}})))()}var un;function dn(){return(dn=e((()=>{un=(e,t)=>e?.find(e=>e.id===t)})))()}var fn;function pn(){return(pn=e((()=>{a(),fn={root:r(`data-grid-nested-rows`),additionalRows:r(`data-grid-nested-rows__additional-rows`),variantSubrows:r(`data-grid-nested-rows_variant-subrows`),variantTree:r(`data-grid-nested-rows_variant-tree`)}})))()}var mn,hn,gn;function _n(){return(_n=e((()=>{u(),E(),Ht(),H(),et(),pn(),mn=y(`ul`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
  position: relative;

  margin: 0;
  padding: 0;

  list-style: none;

  &::before {
    content: '';

    position: absolute;
    z-index: 2;
    top: 0;
    transform: ${({$level:e})=>`translateX(calc(32px * ${e} - 16px))`};

    display: ${({$isShowConnector:e})=>e?`block`:`none`};

    width: 0;
    height: 100%;

    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &::before {
      display: none;
    }
    &.${fn.variantSubrows} .${B.root}:first-of-type {
      display: none;

      & + .${B.root} {
        margin-top: 0;
      }
    }

    & .${B.actionColumn} {
      display: none;
    }

    /* Высота последнего декоративного элемента полная тк у AdditionalRows есть кнопка "Показать все/Скрыть" */
    &.${fn.additionalRows} .${U.nestedChildren}:last-of-type::before {
      height: 100%;
    }
  }
`,hn=y(`li`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
  position: relative;

  display: grid;
  grid-template-columns: var(--data-grid-columns);

  height: 36px;
  margin-left: ${({$level:e})=>`${e*32}px`};

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: -${16}px;

    display: ${({$isShowConnector:e})=>e?`block`:`none`};

    width: ${16}px;
    height: 50%;

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: 0 0 0 ${({theme:e})=>e.shape.small};
  }

   ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    /* 20px колонка под декоративный элемент рядом с кнопкой "Показать все/Скрыть" */
    grid-template-columns: 20px auto;

    height: 40px;

    &::before {
      left: 0;

      display: block;

      width: ${12}px;
    }
  }
`,gn=y(b,{shouldForwardProp:e=>![`$moreButtonColumnPosition`].includes(e)})`
  grid-column: ${({$moreButtonColumnPosition:e})=>e};
  justify-self: start;

  margin: ${({theme:e})=>e.spacing(0,2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`})))()}var vn;function yn(){return(yn=e((()=>{vn=function(e){return e.Tree=`tree`,e.Subrows=`subrows`,e}({})})))()}var bn,xn;function Sn(){return(Sn=e((()=>{bn=D(),yn(),xn=({data:e,level:t,variant:n,initialVisibleChildrenCount:r})=>{let i=Object.is(n,vn.Tree),a=i?t+1:0,o=e?.slice(0,r),s=e?.slice(r),[c,l]=(0,bn.useState)(!1);return{isShowAllChildren:c,isShowMoreButton:!!s?.length,isShowConnector:i,initialVisibleChildren:o,otherChildren:s,nextLevel:a,handleToggleShowAllChildren:e=>{e.stopPropagation(),l(e=>!e)}}}})))()}function Cn(){return(Cn=e((()=>{Sn()})))()}var wn,Tn,En;function Dn(){return(Dn=e((()=>{ne(),C(),et(),pn(),_n(),Cn(),wn=T(),Tn=n(fn.root,{variants:{variant:{subrows:fn.variantSubrows,tree:fn.variantTree}}}),En=e=>{let{isShowAllChildren:t,isShowMoreButton:n,isShowConnector:r,nextLevel:i,initialVisibleChildren:a,otherChildren:o,handleToggleShowAllChildren:s}=xn(e),{isOpen:c,data:l,keyId:u,level:d,moreButtonColumnPosition:f,renderRow:p,variant:m}=e;return!l||!l.length?null:(0,wn.jsx)(N,{in:c,unmountOnExit:!0,children:(0,wn.jsxs)(mn,{$level:d,$isShowConnector:r,className:Tn({variant:m}),children:[a.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:U.nestedChildren})}),c&&(0,wn.jsxs)(wn.Fragment,{children:[(0,wn.jsx)(N,{in:t,component:`li`,unmountOnExit:!0,children:(0,wn.jsx)(mn,{$level:d,$isShowConnector:r,className:fn.additionalRows,children:o.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:`${U.hidden} ${U.nestedChildren}`})})})}),n&&(0,wn.jsx)(hn,{$level:i,$isShowConnector:r,children:(0,wn.jsx)(gn,{$moreButtonColumnPosition:f,variant:`link`,onClick:s,children:t?`Скрыть`:`Показать все`})})]})]})})};try{En.displayName=`NestedChildren`,En.__docgenInfo={description:``,displayName:`NestedChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Если true, список дочерних элементов раскрыт`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Данные для отображения`,name:`data`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`({ key, level, row, nestedChildren, options, className, }: { key: string; row: TData; level: number; nestedChildren: (TData & { options?: DataGridRowOptions<TData>; })[]; options?: DataGridRowOptions<TData>; className?: string; }) => ReactElement<...>`}}},tags:{}}}catch{}})))()}function On(){return(On=e((()=>{Dn()})))()}var kn,An,jn,Mn,Nn,Pn,Fn,In,Ln;function Rn(){return(Rn=e((()=>{ve(),s(),ee(),E(),d(),Ht(),H(),et(),kn=y.li`
  --level: 0;
  position: relative;

  &:not(:last-of-type)::before,
  &.${U.hidden}::before {
    content: '';

    position: absolute;
    z-index: 1;
    top: 0;
    transform: translateX(calc(${32}px * var(--level) - ${16}px));

    display: none;

    width: 0;
    height: 100%;

    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
  }

  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    &.${U.showConnector}::before,
    & .${W.root}::before {
      display: block;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-bottom: ${({theme:e})=>e.spacing(3)};

    border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};

    &:not(:first-of-type) {
      padding-top: ${({theme:e})=>e.spacing(5)};
    }

    &:first-of-type {
      padding-top: ${({theme:e})=>e.spacing(1)};
    }

    &.${U.mobileVariantCards} {
      border-bottom: none;

      &:not(.${U.nestedChildren}) {
        padding: ${({theme:e})=>e.spacing(5,4,4)};

        background-color: ${({theme:e})=>e.palette.background.default};
        border: 1px solid ${({theme:e})=>e.palette.grey[300]};
        border-radius: ${({theme:e})=>e.shape.medium};
      }
    }

    &.${U.hasNestedChildren} {
      :not(.${U.nestedChildren}) .${B.root}:last-of-type {
        padding-bottom: ${({theme:e})=>e.spacing(3)};
      }

      /* Ко всем ячейкам кроме первой применяем декоративный элемент слева и добавляем отступы для выравнивания с NestedChildren */
      &:not(.${U.nestedChildren}) > .${W.root} .${B.root}:not(.${Qe.firstCell}) {
        position: relative;

        margin-top: 0;
        padding-top: ${({theme:e})=>e.spacing(3)};
        padding-left: ${({theme:e})=>e.spacing(5)};

        &::before {
          content: '';

          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;

          width: 0;

          border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
        }
      }

      /* L-коннектор применяем ко 2 ячейки основной строки */
      &:not(.${U.nestedChildren})
       > .${W.root} .${B.root}.${Qe.firstCell} 
        + .${B.root} {
        &::after {
          content: '';

          position: absolute;
          top: ${({theme:e})=>e.spacing(3)};
          left: 0;

          width: ${12}px;
          height: ${({theme:e})=>e.spacing(2)};

          border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
          border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
          border-radius: 0 0 0 ${({theme:e})=>e.shape.small};
        }
      }  
    }

    &.${U.nestedChildren} {
      padding: ${({theme:e})=>e.spacing(3,0,3,5)};

      &::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        transform: unset;

        display: block;

        width: 0;

        border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
      }

      &:last-of-type::before {
        /* Высота последнего декоративного элемента закрывает отступ между компонентами Row */
        height: ${({theme:e})=>e.spacing(3)};
      }
    }
  }
`,An=y.div`
  position: relative;

  display: grid;
  grid-template-columns: var(--data-grid-columns);

  background-color: transparent;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    transform: translateX(calc(${32}px * var(--level) - ${16}px));

    width: ${16}px;
    height: 50%;

    border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: 0 0 0 ${({theme:e})=>e.shape.small};

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      display: none;
    }
  }

  /* L-коннектор для nestedChildren на мобильных устройствах */
  .${U.nestedChildren} &::before {
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      left: -20px;
      transform: none;

      display: block;

      width: ${12}px;

      /* Высота 8px для выравнивания с названием колонки первой ячейки */
      height: ${({theme:e})=>e.spacing(2)};
    }
  }

  &.${W.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};

      &.${W.active} {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }

      &.${W.hovered} {
        cursor: pointer;
      }
    }
  }


  &.${U.hover} {
    background-color: ${({theme:e})=>e.palette.background.elementHover};

    &.${W.hovered} {
      cursor: pointer;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;

    &.${W.active} {
      background-color: transparent;
    }
  }
`,jn=y(Bt)`
  &:first-of-type {
    margin-left: calc(var(--level) * ${32}px);
  }
`,Mn=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,Nn=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Pn=y(_)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,Fn=y(_e,{shouldForwardProp:e=>e!==`$isActive`})`
  transform: rotateZ(${({$isActive:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`,In=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`,Ln=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${$e.hidden} {
      display: none;
    }
  }
`})))()}var zn,Bn;function Vn(){return(Vn=e((()=>{zn=D(),Bn=(0,zn.createContext)({hasBlockingAction:!1,isSelectable:!1,addBlockingAction:()=>void 0,removeBlockingAction:()=>void 0,row:{},onSelectRow:()=>()=>void 0,onRowEnter:()=>void 0,onRowLeave:()=>void 0,registerRowElement:()=>void 0,unregisterRowElement:()=>void 0,itemProps:{},isSelected:!1})})))()}var Hn,Un,Wn;function Gn(){return(Gn=e((()=>{Hn=D(),Vn(),Un=T(),Wn=({row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,children:s,isSelectable:c,isSelected:l,disabledMode:u,disabledReason:d})=>{let[f,p]=(0,Hn.useState)(!1),[m,h]=(0,Hn.useState)(),g=(0,Hn.useCallback)(e=>{p(!0),h(e)},[]),_=(0,Hn.useCallback)(()=>{p(!1),h(void 0)},[]),v=(0,Hn.useMemo)(()=>u?{mode:u,reason:d??``}:void 0,[u,d]),y=(0,Hn.useMemo)(()=>({hasBlockingAction:f,blockingActionReason:m,addBlockingAction:g,removeBlockingAction:_,isSelectable:c,row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,isSelected:l,rowDisabled:v}),[f,m,g,_,c,e,t,n,r,i,a,o,l,v]);return(0,Un.jsx)(Bn.Provider,{value:y,children:s})};try{Wn.displayName=`RowContextProvider`,Wn.__docgenInfo={description:``,displayName:`RowContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},itemProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`itemProps`,required:!1,tags:{},type:{name:`object`}},disabledMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Режим блокировки строки`,name:`disabledMode`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "selection" | "row-except-last-cell"`,value:[{value:`"row"`},{value:`"selection"`},{value:`"row-except-last-cell"`}]}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Причина блокировки строки`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Kn(){return(Kn=e((()=>{Gn()})))()}function qn(){return(qn=e((()=>{Vn(),Kn()})))()}var Jn,Yn;function Xn(){return(Xn=e((()=>{Jn=D(),k(),Yn=()=>{let{isMobile:e}=O(),[t,n]=(0,Jn.useState)(!1);return{isMobile:e,isDrawerOpen:t,handleOpenDrawer:()=>{e&&n(!0)},handleCloseDrawer:()=>{n(!1)}}}})))()}function Zn(){return(Zn=e((()=>{Xn()})))()}var Qn;function $n(){return($n=e((()=>{Qn=e=>e.reduce((e,{field:t,...n})=>t?{...e,[t]:n}:e,{})})))()}var er;function tr(){return(tr=e((()=>{$n(),er=(e,t)=>{if(!t)return e;let n=Qn(t);return Object.keys(n).length?e.map(e=>e.hasOwnProperty(`field`)?{...e,...n[e.field]||{}}:e):e}})))()}var q,nr;function rr(){return(rr=e((()=>{q=D(),Mt(),yn(),nn(),an(),et(),qn(),Zn(),tr(),nr=({keyId:e,columns:t,row:n,nestedChildren:r,level:i,variant:a,options:o,isInitialExpanded:s=!1,expandedLevel:c,isSelectable:l,isSelected:u,getRowDisabled:d,isNested:f=!1,onSelectRow:p,onRowClick:m,isVisibleCollapseButton:h,registerRowElement:g,unregisterRowElement:_,style:v,activeRowId:y})=>{let{isDrawerOpen:b,handleOpenDrawer:x,handleCloseDrawer:ee}=Yn(),[S,C]=(0,q.useState)(null),w=(0,q.useCallback)(e=>{e&&C(e)},[]),T=!!(s&&i<=c-1&&r?.length),{mobileDisplayVariant:E}=(0,q.useContext)(ot),{hasBlockingAction:D,blockingActionReason:O,rowDisabled:k}=(0,q.useContext)(Bn),[A,j]=(0,q.useState)(T),te=(0,q.useRef)(null),M=e=>{e?(te.current=e,g?.(P,e)):te.current&&=(_?.(P,te.current),null)},[N,ne]=(0,q.useState)(!1),P=n[e],{href:re}=o||{},ie=(0,q.useMemo)(()=>f?rn(n,d):k,[f,n,d,k]),{isDisabled:F,isDisabledLastCell:I,disabledReason:ae,isCheckboxDisabled:L,checkboxDisabledReason:R}=tn({rowDisabled:ie,hasBlockingAction:D,blockingActionReason:O,isDisabledLastCellOption:o?.isDisabledLastCell}),oe=()=>{if(F){x();return}m?.(n)},se=Object.is(a,vn.Tree),z=(0,q.useMemo)(()=>er(t,o?.childrenColumns),[t,o]),ce=(0,q.useCallback)(e=>{e.stopPropagation(),j(e=>!e)},[]),le=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&ne(!0)},ue=()=>ne(!1),de=e=>{F&&e.target.getAttribute(`data-row-disable`)!==`true`&&ne(!1)},fe=!!r?.length&&h,pe=(0,q.useMemo)(()=>({"--level":i,...v}),[i,v]),me=!!(!F&&(m||re)),he=y===P,ge=(0,q.useMemo)(()=>p(n),[p,n]);return{disabledReason:ae,rowStyles:pe,isOpen:A,isShowConnector:se,childrenColumns:z,rowId:P,rowRef:M,isDisabled:F,isDisabledLastCell:I,isSelectable:l,isRenderCollapseButton:fe,handleToggle:ce,rootRowElement:S,rootRowRef:w,isHovered:me,isActive:he,mobileDisplayVariant:E,rowProps:{onClick:oe,onMouseMove:de},drawerProps:{open:b,onClose:ee,title:`Заблокировано`},tooltipProps:{open:N,title:F?ae:void 0,onOpen:le,onClose:ue},checkboxProps:{checked:u,disabled:L,disabledReason:R,onChange:ge},nestedChildrenProps:{isOpen:A}}}})))()}function ir(){return(ir=e((()=>{rr()})))()}var ar;function or(){return(or=e((()=>{ar=(e,t,n)=>e?!t||!t.includes(n):!1})))()}var sr,J,cr,lr,ur,dr,fr,pr;function mr(){return(mr=e((()=>{sr=D(),P(),F(),f(),C(),he(),Ht(),Kt(),K(),et(),On(),Rn(),ir(),or(),J=T(),cr=n(U.root,{variants:{isShowConnector:{true:U.showConnector},mobileDisplayVariant:{cards:U.mobileVariantCards,list:U.mobileVariantList},hasNestedChildren:{true:U.hasNestedChildren}}}),lr=n(W.root,{variants:{isHovered:{true:W.hovered},isActive:{true:W.active}}}),ur=n($e.root,{variants:{hidden:{true:$e.hidden}}}),dr=n(Qe.single,{variants:{isFirstCell:{true:Qe.firstCell}}}),fr=e=>{let{isOpen:n,isShowConnector:r,childrenColumns:i,rowId:a,handleToggle:o,checkboxProps:s,rowProps:c,isHovered:l,tooltipProps:u,nestedChildrenProps:d,isDisabled:f,isDisabledLastCell:p,isRenderCollapseButton:m,rowRef:h,rowStyles:g,drawerProps:_,disabledReason:v,isActive:y,isSelectable:b,mobileDisplayVariant:x,rootRowElement:ee,rootRowRef:S}=nr(e),{className:C,row:w,options:T,variant:E,isInitialExpanded:D,expandedLevel:O,level:k,nestedChildren:A,initialVisibleChildrenCount:M,moreButtonColumnPosition:N,isVisibleCollapseButton:ne,columns:P,emptyCellValue:re,activeRowId:ie,keyId:F,onSelectRow:I,onRowClick:ae,sectionOffset:L,totalColumnsCount:R,registerRowElement:oe,unregisterRowElement:se,onRowEnter:z,onRowLeave:ce,style:le,getRowDisabled:ue,isNested:de,...fe}=e,{isNotSelectable:pe,href:he,target:ge}=T||{},_e=()=>!m&&(!b||pe)?null:(0,J.jsxs)(J.Fragment,{children:[m&&(0,J.jsx)(Nn,{children:(0,J.jsx)(Pn,{variant:`text`,onClick:o,children:(0,J.jsx)(Fn,{$isActive:n})})}),b&&!pe&&(0,J.jsx)(Mn,{...me(f),onClick:e=>e.stopPropagation(),className:U.checkbox,children:(0,J.jsx)(Wt,{...s})})]}),ve=(0,sr.useCallback)(()=>{let e=(R??P.length)-1,n=p?void 0:[e];return P?.map((e,r)=>{let i=`${a}-${r}`,o=(L??0)+r,s=ar(f,n,o),c=o===0;if(G(e)){let{label:n,children:r,hideTitleOnMobile:a,isHideOnMobile:o}=e;return(0,J.jsxs)(sr.Fragment,{children:[(0,J.jsx)(Ln,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:ur({hidden:a||o}),children:n}),r.map((e,n)=>{let r=`${i}-${n}`;return(0,J.jsx)(jn,{row:w,cell:e,isHideOnMobile:o,emptyCellValue:re,isDisabled:s,startAdornment:c&&n===0&&_e(),isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,className:t(B.grouped),rootRowElement:ee,href:he,target:ge},r)})]},i)}return(0,J.jsx)(jn,{className:dr({isFirstCell:c}),row:w,cell:e,emptyCellValue:re,startAdornment:c&&_e(),isDisabled:s,isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,rootRowElement:ee,href:he,target:ge},i)})},[w,n,P,f,p,s.checked,s.disabled,s.disabledReason,R,L,ee]),ye=(0,sr.useCallback)(({key:e,...t})=>(0,J.jsx)(fr,{keyId:F,...t,variant:E,isSelectable:b,isInitialExpanded:D,expandedLevel:O,initialVisibleChildrenCount:M,moreButtonColumnPosition:N,isVisibleCollapseButton:ne,activeRowId:ie,columns:i,onSelectRow:I,onRowClick:ae,totalColumnsCount:R,registerRowElement:oe,unregisterRowElement:se,onRowEnter:z,onRowLeave:ce,sectionOffset:L,getRowDisabled:ue,isNested:!0},e),[F,E,b,D,O,M,N,L,R,ie,i,I,ae,oe,se,z,ce,ue]);return(0,J.jsxs)(kn,{className:t(C,cr({isShowConnector:r,mobileDisplayVariant:x,hasNestedChildren:!!A?.length})),style:g,...fe,ref:S,children:[(0,J.jsx)(j,{followCursor:!0,arrow:!1,...u,children:(0,J.jsx)(An,{"data-row-id":a,ref:h,onPointerEnter:()=>z?.(a),onPointerLeave:e=>ce?.(a,e.nativeEvent),className:lr({isHovered:l,isActive:y}),[Ze]:f,...c,children:ve()})}),(0,J.jsx)(En,{...d,data:A,keyId:F,level:k,variant:E,initialVisibleChildrenCount:M,moreButtonColumnPosition:N,renderRow:ye}),(0,J.jsx)(te,{..._,children:(0,J.jsx)(In,{children:v})})]},`row-${a}`)},pr=(0,sr.memo)(fr);try{pr.displayName=`Row`,pr.__docgenInfo={description:``,displayName:`Row`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/Row.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},nestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы`,name:`nestedChildren`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Флаг выбора текущей строки`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, строка вложенная и сама вычисляет блокировку`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк. Передаётся только строкам с дочерними элементами`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},emptyCellValue:{defaultValue:{value:`'-'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'-'`},type:{name:`ReactNode`}},options:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Дополнительные настройки строки`,name:`options`,required:!1,tags:{},type:{name:`DataGridRowOptions<TData>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Стили для строки`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}function hr(){return(hr=e((()=>{mr(),qn()})))()}function gr(){return(gr=e((()=>{be(),ye()})))()}var _r,vr,yr;function br(){return(br=e((()=>{_r=D(),vr=T(),yr=(0,_r.memo)(({index:e,renderRow:t,row:n})=>(0,vr.jsx)(vr.Fragment,{children:t(n,e)}));try{yr.displayName=`CustomRowWrapper`,yr.__docgenInfo={description:"Обёртка с `memo` для изоляции пользовательского `renderRow`.\n\nПри re-render родителя (`Body`, Virtuoso `Item`) без обёртки `renderRow(row, index)`\nвызывается заново на каждой строке и каждый раз создаёт новые React-elements, из‑за чего `memo` у дочерних компонентов\n(например, `DataGridCollapsibleRow`) не срабатывает.\n\n`CustomRowWrapper` повторно вызывает `renderRow` только когда изменились\n`index`, `row` или ссылка на `renderRow`.",displayName:`CustomRowWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`RenderRow`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}}},tags:{}}}catch{}})))()}function xr(){return(xr=e((()=>{br()})))()}var Sr;function Cr(){return(Cr=e((()=>{a(),Sr={root:r(`data-grid__body`),disableMinHeight:r(`data-grid__body_disable-min-height`)}})))()}var wr;function Tr(){return(Tr=e((()=>{s(),E(),H(),Cr(),wr=y.ul`
  --min-display-rows: 0;

  overflow-y: auto;

  width: fit-content;
  min-width: 100%;
  height: 100%;
  min-height: calc(var(--min-display-rows) * ${44}px);
  margin: 0;
  padding: 0;

  list-style-type: none;

  ${p} {
    scrollbar-gutter: stable;
  }

  &.${Sr.disableMinHeight} {
    min-height: unset;
  }

  &.${V.bodyEmpty} {
    display: flex;
    align-items: center;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    scrollbar-gutter: unset;
    
    overflow: initial;

    width: 100%;
  }
`})))()}var Er,Dr;function Or(){return(Or=e((()=>{Er=D(),S(),Dr=({minDisplayRows:e})=>{let{components:t}=(0,Er.useContext)(o),n=t?.dataGrid?.defaultProps?.disableMinHeight;return{disableMinHeight:n,bodyCssVars:!n&&e?{"--min-display-rows":e}:{}}}})))()}function kr(){return(kr=e((()=>{Or()})))()}var Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{f(),C(),xr(),hr(),qn(),Cr(),Tr(),kr(),Ar=T(),jr=0,Mr=n(Sr.root,{variants:{disableMinHeight:{true:Sr.disableMinHeight}}}),Nr=({rows:e,selectedIds:n,rowsDisabled:r,getRowDisabled:i,minDisplayRows:a,keyId:o,noDataPlaceholder:s,className:c,renderRow:l,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._})=>{let{disableMinHeight:v,bodyCssVars:y}=Dr({minDisplayRows:a}),b=e.map((e,t)=>{let a=e[o],s=n.has(a),c=r.get(a),{children:v,options:y}=e,b=Array.isArray(v)&&v.length>0;return(0,Ar.jsx)(Wn,{row:e,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:d,isSelected:s,disabledMode:c?.mode,disabledReason:c?.reason,children:l?(0,Ar.jsx)(yr,{index:t,renderRow:l,row:e}):(0,Ar.jsx)(pr,{row:e,options:y,keyId:o,level:jr,nestedChildren:v,isSelected:s,getRowDisabled:b?i:void 0,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._},a)},a)});return(0,Ar.jsx)(wr,{className:t(c,Mr({disableMinHeight:v})),style:y,children:e.length?b:s})};try{Nr.displayName=`Body`,Nr.__docgenInfo={description:``,displayName:`Body`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/Body.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},selectedIds:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификаторы выбранных строк`,name:`selectedIds`,required:!0,tags:{},type:{name:`Set<unknown>`}},rowsDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Блокировки строк по идентификатору`,name:`rowsDisabled`,required:!0,tags:{},type:{name:`Map<unknown, DataGridRowDisabled>`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Массив данных для отображения`,name:`rows`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},minDisplayRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!0,tags:{},type:{name:`number`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!0,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!0,tags:{},type:{name:`(rowId: string, e: PointerEvent) => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{},type:{name:`(row: TData, index: number) => ReactNode`}}},tags:{}}}catch{}})))()}function Fr(){return(Fr=e((()=>{Pr()})))()}var Y;function Ir(){return(Ir=e((()=>{a(),Y={root:r(`data-grid__head-cell`),groupParent:r(`data-grid__head-cell_group-parent`),groupChild:r(`data-grid__head-cell_group-child`),singleColumn:r(`data-grid__head-cell_single-column`),alignLeft:r(`data-grid__head-cell_align-left`),alignCenter:r(`data-grid__head-cell_align-center`),alignRight:r(`data-grid__head-cell_align-right`),hasStartAdornment:r(`data-grid__head-cell_has-start-adornment`),sortable:r(`data-grid__head-cell_sortable`)}})))()}var Lr;function Rr(){return(Rr=e((()=>{gr(),E(),Ir(),Lr=y.div`
  --grid-column-start: 0;
  --grid-column-end: 0;

  cursor: initial;
  user-select: none;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 40px;
  padding: ${({theme:e})=>e.spacing(1,2)};

  color: ${({theme:e})=>e.palette.grey[700]};

  > svg:last-child {
    width: 16px;
    height: 16px;
  }

  &.${Y.sortable} {
    cursor: pointer;
  }

  &.${Y.hasStartAdornment} {
    padding: ${({theme:e})=>e.spacing(1,2,1,0)};
  }

  &.${Y.alignCenter} {
    justify-content: center;
  }

  &.${Y.alignRight} {
    justify-content: flex-end;
  }

  .${xe.iconWrapper}  {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var zr;function Br(){return(Br=e((()=>{zr=({gridPosition:e,field:t,isSortable:n,startAdornment:r,onSort:i})=>({hasStartAdornment:!!r,handleSortClick:()=>{t&&n&&i(t)},headCellCssVars:{"--grid-column-start":e?.start,"--grid-column-end":e?.end}})})))()}var Vr,Hr,Ur,Wr;function Gr(){return(Gr=e((()=>{Vr=D(),Oe(),Ee(),ke(),se(),f(),C(),Ir(),Rr(),Br(),Hr=T(),Ur=n(Y.root,{variants:{isSortable:{true:Y.sortable},align:{left:Y.alignLeft,center:Y.alignCenter,right:Y.alignRight},hasStartAdornment:{true:Y.hasStartAdornment}}}),Wr=e=>{let{hasStartAdornment:n,handleSortClick:r,headCellCssVars:i}=zr(e),{startAdornment:a,field:o,isSortable:s,align:c,label:l,sorting:u,className:d}=e,f=(0,Vr.useMemo)(()=>{if(!s)return null;if(u?.fieldId!==o)return(0,Hr.jsx)(we,{});switch(u?.sort){case`asc`:return(0,Hr.jsx)(De,{color:`primary`});case`desc`:return(0,Hr.jsx)(Te,{color:`primary`});default:return(0,Hr.jsx)(we,{})}},[u,s,o]);return(0,Hr.jsxs)(Lr,{onClick:r,className:t(d,Ur({isSortable:s,align:c,hasStartAdornment:n})),style:i,children:[a&&a,(0,Hr.jsx)(oe,{rowsCount:2,variant:`pointer`,component:`p`,children:l}),f]})};try{Wr.displayName=`HeadCell`,Wr.__docgenInfo={description:``,displayName:`HeadCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,methods:[],props:{onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Выравнивание содержимого ячейки по горизонтали`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`AlignVariant`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Позиция ячейки в сетке CSS Grid`,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}}},tags:{}}}catch{}})))()}function Kr(){return(Kr=e((()=>{Gr(),Ir()})))()}var qr,Jr,Yr;function Xr(){return(Xr=e((()=>{qr=D(),Kr(),Jr=T(),Yr=({column:e,sorting:t,onSort:n,gridPosition:r,startAdornment:i})=>(0,Jr.jsxs)(qr.Fragment,{children:[(0,Jr.jsx)(Wr,{sorting:t,label:e.label,onSort:n,className:Y.groupParent,gridPosition:r,startAdornment:i}),e.children.map(e=>{let{field:r,sortableFieldName:i,sortable:a,...o}=e;return(0,Jr.jsx)(Wr,{...o,field:i??r,sorting:t,isSortable:a,onSort:n,className:Y.groupChild,startAdornment:e.columnHint},e.label)})]},e.label);try{Yr.displayName=`GroupColumns`,Yr.__docgenInfo={description:``,displayName:`GroupColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,methods:[],props:{column:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`column`,required:!0,tags:{},type:{name:`DataGridGroupColumn<TData>`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Zr(){return(Zr=e((()=>{Xr()})))()}var Qr;function $r(){return($r=e((()=>{E(),H(),Qr=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;
`})))()}var ei,ti;function ni(){return(ni=e((()=>{R(),$r(),ei=T(),ti=({showCheckbox:e,columnHint:t,checkboxProps:n})=>!e&&!t?null:(0,ei.jsxs)(ei.Fragment,{children:[e&&(0,ei.jsx)(Qr,{children:(0,ei.jsx)(I,{...n})}),t]});try{ti.displayName=`HeadCellStartAdornment`,ti.__docgenInfo={description:``,displayName:`HeadCellStartAdornment`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,methods:[],props:{showCheckbox:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`showCheckbox`,required:!0,tags:{},type:{name:`boolean`}},columnHint:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`columnHint`,required:!1,tags:{},type:{name:`ReactNode`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`checkboxProps`,required:!0,tags:{},type:{name:`CheckboxProps`}}},tags:{}}}catch{}})))()}function ri(){return(ri=e((()=>{ni()})))()}var ii,ai;function oi(){return(oi=e((()=>{Kr(),ii=T(),ai=({field:e,label:t,isSortable:n,align:r,sorting:i,onSort:a,startAdornment:o})=>(0,ii.jsx)(Wr,{sorting:i,field:e,label:t,isSortable:n,align:r,startAdornment:o,onSort:a,className:Y.singleColumn});try{ai.displayName=`SingleColumn`,ai.__docgenInfo={description:``,displayName:`SingleColumn`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,methods:[],props:{field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function si(){return(si=e((()=>{oi()})))()}var ci;function li(){return(li=e((()=>{K(),ci=e=>{let{positionsMap:t}=e.reduce((e,t)=>{let n=G(t)?t.children.length:1,r=e.currentLine,i=r+n,a=G(t)?t.label:t.field||t.label||``;return e.positionsMap.set(a,{start:r,end:i}),e.currentLine=i,e},{positionsMap:new Map,currentLine:1});return t}})))()}var ui,di;function fi(){return(fi=e((()=>{ui=D(),K(),li(),di=({columns:e,onSort:t,sorting:n,uncheckedRowsCount:r,rowsCount:i,onSelectAllRows:a})=>{let o=(0,ui.useMemo)(()=>!r&&i>0,[r,i]),s=(0,ui.useMemo)(()=>r>0&&r<i,[r,i]),c=!i;return{checkboxProps:(0,ui.useMemo)(()=>({checked:o,disabled:c,indeterminate:s,onChange:a}),[o,c,s,a]),handleSort:(0,ui.useCallback)(e=>{if(!t)return;let r=n?.fieldId===e;if(r&&n?.sort===`asc`)return t({fieldId:e,sort:`desc`});if(r&&n?.sort===`desc`)return t(void 0);t({fieldId:e,sort:`asc`})},[n,t]),gridPositions:(0,ui.useMemo)(()=>ci(e),[e]),headerCssVars:(0,ui.useCallback)(e=>e?{"--grid-column-start":e.start,"--grid-column-end":e.end}:{},[]),hasGroupedColumns:e.some(G)}};try{di.displayName=`useLogic`,di.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/useLogic/useLogic.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function pi(){return(pi=e((()=>{fi()})))()}var mi;function hi(){return(hi=e((()=>{K(),mi=({column:e,index:t,sectionOffset:n,isSelectable:r,isHideSelectAll:i})=>{let{label:a,align:o,columnHint:s}=e,c=G(e)?void 0:e.sortable;return{label:a,align:o,columnHint:s,sortField:G(e)?void 0:e.sortableFieldName??e.field,sortable:c,showCheckbox:(n??0)+t===0&&r&&!i}}})))()}var gi,_i;function vi(){return(vi=e((()=>{K(),Zr(),ri(),si(),pi(),hi(),gi=T(),_i=e=>{let{checkboxProps:t,handleSort:n,gridPositions:r}=di(e),{columns:i,isSelectable:a,sorting:o,isHideSelectAll:s,sectionOffset:c}=e;return(0,gi.jsx)(gi.Fragment,{children:i.map((e,i)=>{let{label:l,align:u,columnHint:d,sortField:f,sortable:p,showCheckbox:m}=mi({column:e,index:i,sectionOffset:c,isSelectable:a,isHideSelectAll:s}),h=m||d?(0,gi.jsx)(ti,{showCheckbox:m,columnHint:d,checkboxProps:t}):void 0;if(G(e)){let t=r.get(e.label);return(0,gi.jsx)(Yr,{column:e,sorting:o,onSort:n,gridPosition:t,startAdornment:h},e.label)}return(0,gi.jsx)(ai,{sorting:o,field:f,label:l,isSortable:p,align:u,startAdornment:h,onSort:n},l)})})};try{_i.displayName=`HeadColumns`,_i.__docgenInfo={description:``,displayName:`HeadColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var yi;function bi(){return(bi=e((()=>{s(),E(),yi=y.header`
  position: relative;

  display: grid;
  grid-template-columns: var(--data-grid-columns);

  width: fit-content;
  min-width: 100%;

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${p} {
    padding-right: ${`6px`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var xi;function Si(){return(Si=e((()=>{k(),xi=({resizePlugin:e})=>{let{isMobile:t}=O();return{enabledResizePlugin:t?void 0:e}}})))()}var Ci,wi,Ti;function Ei(){return(Ei=e((()=>{f(),C(),H(),K(),vi(),bi(),Si(),Ci=T(),wi=n(V.header,{variants:{isGroup:{true:V.hasGroupedColumns}}}),Ti=e=>{let{columns:n,headerProps:r,resizePlugin:i,resizePluginProps:a,...o}=e,{enabledResizePlugin:s}=xi(e);return(0,Ci.jsxs)(yi,{...r,role:`heading`,className:t(wi({isGroup:n.some(G)}),r?.className),children:[(0,Ci.jsx)(_i,{...o,columns:n}),s&&a&&(0,Ci.jsx)(s.HeadAddon,{...a})]})};try{Ti.displayName=`Head`,Ti.__docgenInfo={description:``,displayName:`Head`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Props шапки таблицы, в том числе ref`,name:`headerProps`,required:!1,tags:{},type:{name:`DataGridHeaderProps`}},resizePlugin:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Plugin изменения ширины колонок: рисует полоски drag поверх колонок шапки`,name:`resizePlugin`,required:!1,tags:{},type:{name:`DataGridResizePlugin`}},resizePluginProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Props компонента resize plugin в шапке`,name:`resizePluginProps`,required:!1,tags:{},type:{name:`ResizeHeadAddonProps<TData>`}}},tags:{}}}catch{}})))()}function Di(){return(Di=e((()=>{Ei()})))()}var Oi,ki,Ai,ji;function Mi(){return(Mi=e((()=>{ce(),le(),ge(),E(),Oi=y.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({theme:e})=>e.palette.background.element};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,ki=y(M)`
  border-width: 1px;
`,Ai=y.div`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.fab};
  left: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,ji=y(ue)`
  height: 2px;

  .${z.barColorPrimary} {
    background-color: ${({theme:e})=>e.palette.primary[800]};
  }
`})))()}var Ni,Pi;function Fi(){return(Fi=e((()=>{Mi(),Ni=T(),Pi=({isLoading:e=!1,isDisabled:t=!1,isVisibleDivider:n=!0})=>(0,Ni.jsxs)(Ni.Fragment,{children:[(e||t)&&(0,Ni.jsx)(Oi,{}),(0,Ni.jsxs)(Ai,{children:[e&&(0,Ni.jsx)(ji,{}),!e&&n&&(0,Ni.jsx)(ki,{})]})]});try{Pi.displayName=`Loader`,Pi.__docgenInfo={description:``,displayName:`Loader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,methods:[],props:{isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isVisibleDivider:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isVisibleDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Ii(){return(Ii=e((()=>{Fi()})))()}var Li,Ri,zi,Bi;function Vi(){return(Vi=e((()=>{E(),H(),Li=y.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  &.${V.mobileVariantCards} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,Ri=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(3)};

  padding-top: ${({theme:e})=>e.spacing(1)};
  padding-bottom: ${({theme:e})=>e.spacing(5)};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};
  }

  &:not(:first-of-type) {
    padding-top: ${({theme:e})=>e.spacing(5)};
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  &.${V.mobileVariantCards} {
    padding: ${({theme:e})=>e.spacing(5,4,4)};

    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};
  }
`,zi=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Bi=y.div`
  padding-top: ${({theme:e})=>e.spacing(2)};
`})))()}var Hi,Ui,Wi,Gi;function Ki(){return(Ki=e((()=>{de(),C(),H(),Vi(),Hi=T(),Ui=n(Xe.list,{variants:{mobileDisplayVariant:{cards:V.mobileVariantCards,list:V.mobileVariantList}}}),Wi=n(Xe.item,{variants:{mobileDisplayVariant:{cards:V.mobileVariantCards,list:V.mobileVariantList}}}),Gi=({cellsCount:e,mobileDisplayVariant:t,rowsCount:n})=>(0,Hi.jsx)(Li,{className:Ui({mobileDisplayVariant:t}),children:Array.from({length:n},(n,r)=>(0,Hi.jsxs)(Ri,{className:Wi({mobileDisplayVariant:t}),children:[Array.from({length:e-1},(e,t)=>(0,Hi.jsxs)(zi,{children:[(0,Hi.jsx)(A,{variant:`rounded`,height:20}),(0,Hi.jsx)(A,{variant:`rounded`,height:16,width:`50%`})]},t)),(0,Hi.jsx)(Bi,{children:(0,Hi.jsx)(A,{variant:`rounded`,width:`100%`,height:40})})]},r))});try{Gi.displayName=`MobileSkeleton`,Gi.__docgenInfo={description:``,displayName:`MobileSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,methods:[],props:{cellsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`cellsCount`,required:!0,tags:{},type:{name:`number`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!0,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function qi(){return(qi=e((()=>{Ki()})))()}var Ji,Yi,Xi;function Zi(){return(Zi=e((()=>{Ji=D(),u(),S(),w(),Yi=T(),Xi=({title:e=`Нет\xA0данных`,imgAlt:t=e,action:n,size:r=`small`})=>{let{imagesMap:{noDataImgSrc:i}}=(0,Ji.useContext)(o);return(0,Yi.jsx)(c,{title:e,imgSrc:i,size:r,Actions:n?(0,Yi.jsx)(b,{onClick:n.onClick,"aria-label":n.text,children:n.text}):void 0,imgAlt:t})};try{Xi.displayName=`NoData`,Xi.__docgenInfo={description:``,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,methods:[],props:{title:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Заголовок`,name:`title`,required:!1,tags:{default:`'Нет\\u00a0данных'
Добавлен неразрывный пробел \`\\u00a0\`,
так как без изображения текст форматируется в 2 строки`},type:{name:`string`}},imgAlt:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`альтернативный текст в случае, если изображение по какой-то причине не загрузилось`,name:`imgAlt`,required:!1,tags:{default:`эквивалентно title`},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Текст и обработчик для кнопки действия`,name:`action`,required:!1,tags:{},type:{name:`{ text: string; onClick: () => void; }`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Задает общий размер компонента`,name:`size`,required:!1,tags:{default:`'small'`},type:{name:`enum`,raw:`PlaceholderSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function Qi(){return(Qi=e((()=>{Zi()})))()}var $i;function ea(){return(ea=e((()=>{E(),H(),$i=y.div`
  display: flex;
  grid-column: calc(var(--left-columns-count) + 1) / calc(var(--right-columns-count) * -1 - 1);
  flex-direction: column;

  min-width: 0;

  background-color: ${({theme:e})=>e.palette.background.default};

  & .${V.header} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab-1};
    top: 0;

    background-color: ${({theme:e})=>e.palette.background.default};
  }

  & .${V.body} {
    scrollbar-gutter: unset;
  }

  &.${V.pinnedSectionNoData} {
    grid-column: 1 / -1;
  }

  &.${V.leftPinnedSection} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab};
    left: 0;

    container-name: data-grid-left-pinned-section;
    container-type: scroll-state;
    grid-column: 1 / calc(var(--left-columns-count) + 1);

    &::after {
      content: '';

      position: absolute;
      z-index: ${({theme:e})=>e.zIndex.fab};
      top: 0;
      right: 0;

      height: 100%;

      border-right: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    & .${V.header} {
      left: 0;
    }
      

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @container data-grid-left-pinned-section scroll-state(stuck: left) {
      &::after {
        /* Ширина видимой части тени */
        width: 4px;

        box-shadow: 3px 0 4px 0 #63636326;
      }
    }
  }

  &.${V.rightPinnedSection} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab};
    right: 0;

    container-name: data-grid-right-pinned-section;
    container-type: scroll-state;
    grid-column: calc(var(--right-columns-count) * -1 - 1) / -1;

    &::after {
      content: '';

      position: absolute;
      z-index: ${({theme:e})=>e.zIndex.fab};
      top: 0;
      left: 0;

      height: 100%;

      border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    & .${V.header} {
      right: 0;
    }

    /* Причина игнора: прогрессивное улучшение */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @container data-grid-right-pinned-section scroll-state(stuck: right) {
      &::after {
        /* Ширина видимой части тени */
        width: 4px;

        box-shadow: -3px 0 4px 0 #63636326;
      }
    }
  }
`})))()}var ta,na;function ra(){return(ra=e((()=>{ta=D(),f(),H(),Qt(),Xt(),na=({position:e,isNoData:n,columns:r})=>{let i=(0,ta.useMemo)(()=>t({[V.leftPinnedSection]:e===`left`,[V.rightPinnedSection]:e===`right`,[V.pinnedSectionNoData]:n&&e===`center`}),[]),a=n&&e!==`center`||!r||r.length===0;return{classnames:i,gridColumns:a?``:Yt(Zt(r)),shouldNotRenderSection:a}}})))()}function ia(){return(ia=e((()=>{ra()})))()}var aa,oa;function sa(){return(sa=e((()=>{Fr(),H(),Di(),ea(),ia(),aa=T(),oa=({columns:e,position:t,isNoData:n,headProps:r,bodyProps:i,sectionOffset:a})=>{let{classnames:o,gridColumns:s,shouldNotRenderSection:c}=na({position:t,isNoData:n,columns:e});return c?null:(0,aa.jsxs)($i,{className:o,style:{"--data-grid-columns":s},children:[!n&&(0,aa.jsx)(Ti,{...r,columns:e,sectionOffset:a}),(0,aa.jsx)(Nr,{...i,columns:e,sectionOffset:a,className:V.body})]})};try{oa.displayName=`Section`,oa.__docgenInfo={description:``,displayName:`Section`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/Section.tsx`,methods:[],props:{bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для секции`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},position:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Позиция секции`,name:`position`,required:!0,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:``,name:`sectionOffset`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function ca(){return(ca=e((()=>{sa()})))()}var la;function ua(){return(ua=e((()=>{E(),H(),la=y.div`
  overflow: auto;
  display: grid;
  grid-template-columns: var(--data-grid-columns);

  width: 100%;
  height: 100%;

  & .${V.header} {
    padding-right: unset;
  }

  &.${V.disabled} {
    pointer-events: none;

    background: ${({theme:e})=>e.palette.background.element};
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    mix-blend-mode: luminosity;
  }
`})))()}var da,fa;function pa(){return(pa=e((()=>{da=D(),Qt(),fa=({sections:e})=>{let t=e.find(e=>e.position===`left`)?.columns,n=e.find(e=>e.position===`right`)?.columns,r={"--left-columns-count":t?Zt(t).length:0,"--right-columns-count":n?Zt(n).length:0},{sectionOffsets:i,totalColumnsCount:a}=(0,da.useMemo)(()=>{let t={},n=0;return e.forEach(e=>{t[e.position]=n,n+=Zt(e.columns).length}),{sectionOffsets:t,totalColumnsCount:n}},[e]);return{pinnedContainerStyles:r,sectionOffsets:i,totalColumnsCount:a}}})))()}function ma(){return(ma=e((()=>{pa()})))()}var ha,ga;function _a(){return(_a=e((()=>{he(),ca(),ua(),ma(),ha=T(),ga=({className:e,isDisabled:t,headProps:n,bodyProps:r,sections:i,isNoData:a})=>{let{pinnedContainerStyles:o,sectionOffsets:s,totalColumnsCount:c}=fa({sections:i});return(0,ha.jsx)(la,{className:e,...me(t),style:o,children:i.map(({columns:e,position:t})=>(0,ha.jsx)(oa,{columns:e,position:t,sectionOffset:s[t],bodyProps:{...r,totalColumnsCount:c},headProps:n,isNoData:a},t))})};try{ga.displayName=`PinnedSections`,ga.__docgenInfo={description:``,displayName:`PinnedSections`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,methods:[],props:{sections:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация закрепленных секций`,name:`sections`,required:!0,tags:{},type:{name:`PinnedSection<TData>[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function va(){return(va=e((()=>{_a()})))()}var ya,ba,xa,Sa;function Ca(){return(Ca=e((()=>{E(),Cr(),Fe(),H(),Kr(),et(),ya=y.div`
  --max-height: initial;

  /* grid-template-columns шапки и строк. Таблица задает его в style контейнера,
     секция pinned-таблицы — на своем элементе, plugin — на обертке шапки и строк */
  --data-grid-columns: 1fr;

  /* Место под открытой панелью массовых действий: высота панели + отступ */
  --mass-actions-reserved-space: 96px;

  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-height: var(--max-height);

  &.${V.isAllowHorizontalScroll} {
    overflow: auto hidden;

    & .${V.wrapper} {
      overflow: auto hidden;
    }
  }

  &.${V.hasPinnedSections} {
    overflow: hidden;
  }

  &.${V.hasGroupedColumns} {
    & .${V.header} {
      grid-template-rows: repeat(2, auto);

      & .${Y.groupParent} {
        grid-column: var(--grid-column-start) / var(--grid-column-end);
        grid-row: 1;
        justify-content: center;
      }

      & .${Y.groupChild} {
        grid-row: 2;
        justify-content: center;
      }

      & .${Y.singleColumn} {
        grid-row: 1 / -1;

        height: 80px;
      }
    }
  }

  @supports not (container-type: scroll-state) {
    &.${V.overflowed} {
      & .${V.rightPinnedSection} {
         box-shadow: -3px 0 4px 0 #63636326;
      }

      & .${V.leftPinnedSection} {
         box-shadow: 3px 0 4px 0 #63636326;
      }
    }
  }

  &.${V.gridViewFull} {
    & .${V.header} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-top-left-radius: ${({theme:e})=>e.shape.medium};
      border-top-right-radius: ${({theme:e})=>e.shape.medium};
    }

    & .${B.root},
    & .${Y.root} {
      border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
      border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

      &:first-of-type,
      &:first-of-type + .${Y.groupChild} {
        border-left: none;
      }
    }

    & .${Y.singleColumn},
    & .${Y.groupParent} {
      border-top: none;
    }

    & .${U.root}:last-of-type .${B.root} {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    &:not(.${V.hasPinnedSections}) .${V.body},
    & .${V.pinnedSections} {
      container-name: data-grid-scroll-container;
      container-type: scroll-state;
    }

    /* Прогрессивное улучшение. Убираем нижнюю границу последней строки когда scrollbar находится в нижней точке. Для того что бы избежать двойного разделителя снизу */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @container data-grid-scroll-container scroll-state((scrollable: y) and (not (scrollable: bottom))) {
      & .${U.root}:last-of-type .${B.root} {
        border-bottom: none;
      }
    }

    & .${U.root}:first-of-type .${B.root} {
      border-top: none;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;

    & .${V.loadingPlaceholder} {
      justify-content: flex-start;
    }

    &.${V.hasPinnedSections} {
      overflow: initial;
    }

    &.${V.isAllowHorizontalScroll} {
      overflow: initial;

      & .${V.wrapper} {
        overflow: initial;
      }
    }

    &.${V.gridViewFull} {
      & .${B.root}, & .${Y.root} {
        border: none;
      }

      & .${U.root}:last-of-type .${B.root} {
        border-bottom: none;
      }
    }

    &.${V.mobileVariantCards} {
    
      & .${V.wrapper} {
        margin: ${({theme:e})=>e.spacing(0,4,4)};
      }

      & .${Sr.root} {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing(2)};
      }
    }
  }

  /* Браузер не считает раскладку строк вне области прокрутки: drag полоски resize не пересчитывает невидимые строки.
     До первой отрисовки высота строки — заглушка, после браузер запоминает реальную */
  &.${V.hasResizePlugin} {
    ${({theme:e})=>e.breakpoints.up(`mobile`)} {
      & .${W.root} {
        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        content-visibility: auto;
        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        contain-intrinsic-block-size: auto ${44}px;
      }
    }
  }

  &.${V.hasMassActions} {
    /* Резерв места под панель массовых действий убирается одновременно с анимацией её скрытия, чтобы строки не прыгали */
    & .${V.wrapper} .${V.body},
    & .${V.pinnedSections} {
      transition: padding-bottom
        ${({theme:e})=>e.transitions.duration.leavingScreen}ms
        ${({theme:e})=>e.transitions.easing.easeIn};
    }

    /* Пока панель массовых действий открыта, последние строки не должны перекрываться ею */
    &.${V.massActionsOpen} {
      & .${V.wrapper} .${V.body},
      & .${V.pinnedSections} {
        padding-bottom: var(--mass-actions-reserved-space);
      }
    }
  }
`,ba=y.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;
  }
`,xa=y(ba)`
  pointer-events: none;

  background: ${({theme:e})=>e.palette.background.element};
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mix-blend-mode: luminosity;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    opacity: 0.7;
  }
`,Sa=y.div`
  position: relative;

  height: 0;
`})))()}var wa,Ta;function Ea(){return(Ea=e((()=>{wa=D(),et(),Ta=({hasPinnedColumns:e=!1})=>{let t=(0,wa.useRef)(new Map),n=(0,wa.useRef)(null),r=(0,wa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>{e.classList.contains(U.hover)||e.classList.add(U.hover)})},[e]),i=(0,wa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>e.classList.remove(U.hover))},[e]);return{rowsMapRef:t,registerRowElement:(0,wa.useCallback)((n,r)=>{if(!e)return;let i=t.current;i.has(n)||i.set(n,new Set),i.get(n).add(r)},[e]),unregisterRowElement:(0,wa.useCallback)((n,r)=>{if(!e)return;let i=t.current,a=i.get(n);a&&(a.delete(r),a.size===0&&i.delete(n))},[e]),onRowEnter:(0,wa.useCallback)(t=>{e&&n.current!==t&&(n.current&&i(n.current),r(t),n.current=t)},[e,r,i]),onRowLeave:(0,wa.useCallback)((t,r)=>{e&&(r.relatedTarget?.closest(`[data-row-id="${t}"]`)||(i(t),n.current=null))},[e,i])}}})))()}function Da(){return(Da=e((()=>{Ea()})))()}var Oa,ka;function Aa(){return(Aa=e((()=>{Oa=D(),ka=e=>{let t=(0,Oa.useRef)(new Set);(0,Oa.useEffect)(()=>{let n=e.filter(e=>!t.current.has(e));n.length&&(n.forEach(e=>t.current.add(e)),console.warn(`UIKIT. DataGrid: getRowDisabled вернул блокировку без reason для строк: ${n.join(`, `)}`))},[e])}})))()}function ja(){return(ja=e((()=>{Aa()})))()}var Ma;function Na(){return(Na=e((()=>{Ma=(e,t)=>{if(typeof e==`function`){e(t);return}e&&(e.current=t)}})))()}var Pa,Fa;function Ia(){return(Ia=e((()=>{Pa=D(),Na(),ln(),dn(),Fa=({plugins:e,tableId:t,columns:n,headerProps:r})=>{e&&cn(e);let i=un(e,`resize`);i?.assertConfig(n);let a=(0,Pa.useRef)(void 0),o=(0,Pa.useRef)(null),s=(0,Pa.useRef)(null),c=(0,Pa.useRef)(r?.ref);c.current=r?.ref;let l=()=>{let e=s.current;if(e){if(a.current){e.style.setProperty(`--data-grid-columns`,a.current);return}e.style.removeProperty(`--data-grid-columns`)}},u=(0,Pa.useCallback)(e=>{o.current=e,Ma(c.current,e)},[]);return{resizePlugin:i,wrapperRef:(0,Pa.useCallback)(e=>{s.current=e,l()},[]),resizePluginProps:{columns:n,tableId:t,headRef:o,onGridColumnsChange:(0,Pa.useCallback)(e=>{a.current=e,l()},[])},headerProps:{...r,ref:u}}}})))()}function La(){return(La=e((()=>{Ia()})))()}function Ra(){return(Ra=e((()=>{Da(),ja(),La()})))()}var za,Ba;function Va(){return(Va=e((()=>{za=D(),Ce(),k(),H(),Ba=({containerRef:e,isLoading:t,columns:n,rows:r,isNoScrollToTop:i=!1,mobileDisplayVariant:a})=>{let{isMobile:o}=O(),s=(0,za.useRef)(null),c=(0,za.useMemo)(()=>n?.filter(e=>!e.isHideOnMobile).length??0,[n]);return(0,za.useEffect)(()=>{!t&&r&&r.length>0&&s.current===null&&(s.current=r.length)},[r,t]),(0,za.useLayoutEffect)(()=>{if(!(!o||i)&&t&&e?.current){let t=e.current.closest(`.${Se.root}`);t&&t.scrollTo({top:0,behavior:`instant`})}},[e,t,o,i]),{isMobile:o,mobileSkeletonProps:{cellsCount:c,rowsCount:s.current??5,mobileDisplayVariant:a}}}})))()}function Ha(){return(Ha=e((()=>{Va()})))()}var Ua,Wa;function Ga(){return(Ga=e((()=>{i(),K(),Ua=e=>{let t=v.getInstance(),n=e.map(e=>e.pinned??`center`),r=n.indexOf(`right`);r!==-1&&n.slice(r).some(e=>e!==`right`)&&t.logError(`DataGrid`,`Колонки с pinned="right" должны идти непрерывным блоком в конце`);let i=n.lastIndexOf(`left`);i!==-1&&n.slice(0,i+1).some(e=>e!==`left`)&&t.logError(`DataGrid`,`Колонки с pinned="left" должны идти непрерывным блоком в начале`),e.forEach(e=>{G(e)&&e.children.some(e=>e.pinned)&&t.logError(`DataGrid`,`pinned должен быть указан у родительской колонки, а не у дочерних элементов`)})},Wa=e=>{Ua(e);let t=e.reduce((e,t)=>{let n=t.pinned??`center`;return e[n]||(e[n]=[]),e[n].push(t),e},{});return{sections:[{position:`left`,columns:t.left||[]},{position:`center`,columns:t.center||[]},{position:`right`,columns:t.right||[]}]}}})))()}var Ka;function qa(){return(qa=e((()=>{Ka=e=>{e.forEach(e=>{let t=0;e.forEach(e=>{e.style.height=``}),e.forEach(e=>{let n=e.offsetHeight;n>t&&(t=n)}),e.forEach(e=>{e.style.height=`${t}px`})})}})))()}var Ja,Ya;function Xa(){return(Xa=e((()=>{Ja=D(),k(),H(),Da(),Ga(),qa(),Ya=({isLoading:e,columns:t})=>{let n=(0,Ja.useRef)(null),{isMobile:r}=O(),i=(0,Ja.useMemo)(()=>t.some(e=>e.pinned),[t]),{rowsMapRef:a,...o}=Ta({hasPinnedColumns:i&&!r}),s=CSS.supports(`container-type`,`scroll-state`),c=(0,Ja.useCallback)(e=>e?e.scrollWidth>e.clientWidth:!1,[]),{sections:l}=(0,Ja.useMemo)(()=>Wa(t),[t]);return(0,Ja.useLayoutEffect)(()=>{if(e||!i||r||typeof window>`u`)return;let t=new ResizeObserver(()=>{Ka(a.current),!s&&(c(n.current)?n.current?.classList.add(V.overflowed):n.current?.classList.remove(V.overflowed))});if(n.current)return t.observe(n.current),()=>{t.disconnect()}},[i,e,r]),{containerRef:n,rowHoverProps:o,sections:l,hasPinnedColumns:i}}})))()}function Za(){return(Za=e((()=>{Xa()})))()}function Qa(){return(Qa=e((()=>{Ha(),Za()})))()}var $a;function eo(){return(eo=e((()=>{$a=e=>{let t=e.some(({minWidth:e})=>!!e),n=e.every(({minWidth:e})=>!!e);return t&&!n&&console.error(`UIKIT. DataGrid: Необходимо задать minWidth для всех колонок`),n}})))()}var X,to;function no(){return(no=e((()=>{X=D(),S(),L(),Pe(),H(),yn(),Ra(),en(),Jt(),Qt(),Xt(),K(),sn(),Qa(),eo(),to=({keyId:e,columns:t,rows:n=[],variant:r,tree:i,subrows:a,selectedRows:s=[],isLoading:c,isDisabled:l,getRowDisabled:u,mobileDisplayVariant:d=r===`subrows`?`cards`:`list`,onSelectRow:f,isError:p,onRetry:m,errorMsg:h,isHideSelectAll:g,isHideHeaderIfNoData:_=!1,sorting:v,className:y,onSort:b,maxHeight:x,gridViewMode:ee=`standard`,massActions:S,plugins:C,tableId:w,headerProps:T})=>{let E=ae(),D=!!f,O=c||l,{imagesMap:k}=(0,X.useContext)(o),A=(0,X.useRef)(s);(0,X.useEffect)(()=>{A.current=s},[s]);let j=(0,X.useRef)([]);(0,X.useEffect)(()=>{c||(j.current=n)},[n,c]);let te=(0,X.useCallback)(()=>n.length<=1?t.map(e=>({...e,sortable:!1})):t,[t,n]),M=c?j.current:n,N=!M.length,{containerRef:ne,rowHoverProps:P,sections:re,hasPinnedColumns:ie}=Ya({isLoading:c,columns:te()}),{isMobile:F,mobileSkeletonProps:I}=Ba({containerRef:ne,isLoading:c,columns:Zt(te()),rows:n,isNoScrollToTop:c&&N,mobileDisplayVariant:d}),L=(0,X.useMemo)(()=>{let e=Object.is(r,vn.Subrows)?{...a,isInitialExpanded:!0}:i;return F?{...e,expandedLevel:1,initialVisibleChildrenCount:1}:e},[r,a,i,F]),{rowsDisabled:R,idsWithoutReason:oe}=(0,X.useMemo)(()=>on(M,e,u),[M,e,u]);ka(oe);let se=(0,X.useMemo)(()=>new Set(s.map(t=>t[e])),[s,e]),z=(0,X.useMemo)(()=>M.filter(t=>!t.options?.isNotSelectable&&!R.get(t[e])),[M,R,e]),ce=(0,X.useMemo)(()=>Yt(Zt(t)),[t]),{resizePlugin:le,wrapperRef:ue,resizePluginProps:de,headerProps:fe}=Fa({plugins:C,tableId:w,columns:t,headerProps:T}),pe=$a(Zt(t)),me=(0,X.useMemo)(()=>z.filter(t=>!se.has(t[e])).length,[z,se,e]),he=t=>{if(!f)return;if(t.target.checked)return f(je([...A.current,...z],t=>t[e]));let n=new Set(M.map(t=>t[e]));f(A.current.filter(t=>!n.has(t[e])))},ge=(0,X.useCallback)(t=>n=>{if(f){if(n.target.checked)return f([...A.current,t]);f(A.current.filter(n=>n[e]!==t[e]))}},[]),_e=t.some(G),ve=_e?`full`:ee,ye=_&&N||_e&&N,be=(0,X.useMemo)(()=>({isLoading:c&&N||F&&c,isError:p&&N,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[h||``],imgSrc:k.defaultErrorImgSrc,onRetry:m},isSmoothLoading:!1,loadingPlaceholderClassname:V.loadingPlaceholder}),[c,p,N,h,m,k]),xe=qt({maxHeight:x,gridColumns:ce}),Se=!!S;return{hasMassActions:Se,isMassActionsOpen:$t({hasMassActions:Se,selectedRowsCount:s.length,isMobile:F}),resizePlugin:le,wrapperRef:ue,resizePluginProps:de,dataGridClassName:y,containerCssVars:xe,isDataGridDisabled:O,treeRenderConfig:L,renderRows:M,isAllowHorizontalScroll:pe,isHideHead:ye,hasPinnedColumns:ie,contentStateProps:be,rowHoverProps:P,isMobile:F,containerRef:ne,isNoData:N,gridViewMode:ve,headColumns:te(),isLoading:c,mobileSkeletonProps:I,hasGroupedColumns:_e,headProps:{rowsCount:z.length,uncheckedRowsCount:me,isSelectable:D,onSelectAllRows:he,isHideSelectAll:g,sorting:v,onSort:b},headerProps:fe,bodyProps:{isSelectable:D,selectedIds:se,rowsDisabled:R,getRowDisabled:u,onSelectRow:ge},mobileDisplayVariant:d,sections:re,isSelfContained:d===`cards`,loaderProps:{isLoading:!E&&c,isVisibleDivider:!!n.length,isDisabled:l}}};try{to.displayName=`useLogic`,to.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/useLogic/useLogic.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!1,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
{
field: 'test',
label: 'Тестовая колонка',
sortable: true,
}]} />
Конфигурация колонок для таблицы`},type:{name:`DataGridColumns<TData>[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`selectedRows`,required:!1,tags:{example:`<DataGrid selectedRows={[{name: 'test'}]} />
Массив выбранных строк`},type:{name:`TData[]`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{example:`<DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
Параметры сортируемой колонки`},type:{name:`DataGridSort<TSortField>`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Компонент кастомного футера (например Pagination)`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},massActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Панель массовых действий над выбранными строками`,name:`massActions`,required:!1,tags:{example:`<DataGrid massActions={<DataGridMassActions />} />`},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},maxHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Максимальная высота для таблицы`,name:`maxHeight`,required:!1,tags:{},type:{name:`number`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`'tree'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!1,tags:{default:`'tree'`},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},tree:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения древовидных списков
Применяется если variant="tree"`,name:`tree`,required:!1,tags:{},type:{name:`{ isInitialExpanded?: boolean; expandedLevel?: number; initialVisibleChildrenCount?: number; }`}},subrows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения вложенных списков
Применяется если variant="subrows"`,name:`subrows`,required:!1,tags:{},type:{name:`{ expandedLevel?: number; initialVisibleChildrenCount?: number; moreButtonColumnPosition?: number; isVisibleCollapseButton?: boolean; }`}},emptyCellValue:{defaultValue:{value:`'—'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'—'`},type:{name:`ReactNode`}},minDisplayRows:{defaultValue:{value:`10`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!1,tags:{default:`10`,deprecated:`Не поддерживается, параметр будет удален в следующей major версии пакета.
Мотивация: задание минимальной высоты через параметр компонента мешает корректной работе таблицы
в части верстки.
Чтобы отключить минимальную высоту таблицы, задайте в ConfigProvider:
\`components.dataGrid.defaultProps.disableMinHeight: true\``},type:{name:`number`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!1,tags:{},type:{name:`(row: TData[]) => void`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Возвращает блокировку строки { mode, reason }`,name:`getRowDisabled`,required:!1,tags:{example:`const getRowDisabled = useCallback(
  (row: Document): DataGridRowDisabled | undefined => {
    if (row.status === 'Отправлен') {
      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };
    }

    return undefined;
  },
  [],
);

<DataGrid getRowDisabled={getRowDisabled} />`},type:{name:`(row: TData) => DataGridRowDisabled`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{example:`<DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},isHideHeaderIfNoData:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:{value:`variant === 'subrows' ? 'cards' : 'list'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},plugins:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Подключаемые возможности таблицы.`,name:`plugins`,required:!1,tags:{example:`<DataGrid plugins={[ResizePlugin]} />`},type:{name:`DataGridResizePlugin[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Id таблицы для сохранения пользовательских настроек plugins в localStorage.
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}function ro(){return(ro=e((()=>{no()})))()}var io,Z,ao,oo,so,co;function lo(){return(lo=e((()=>{io=D(),S(),pe(),s(),f(),C(),he(),Fr(),H(),Mt(),yn(),Di(),Ii(),qi(),Qi(),va(),Ca(),ro(),Z=T(),ao=n(V.pinnedSections,{variants:{isDisabled:{true:V.disabled}}}),oo=n(V.root,{variants:{hasMassActions:{true:V.hasMassActions},isMassActionsOpen:{true:V.massActionsOpen},hasPinnedColumns:{true:V.hasPinnedSections},isAllowHorizontalScroll:{true:V.isAllowHorizontalScroll},gridViewMode:{full:V.gridViewFull,standard:V.gridViewStandard},hasGroupedColumns:{true:V.hasGroupedColumns},hasResizePlugin:{true:V.hasResizePlugin},mobileDisplayVariant:{cards:V.mobileVariantCards,list:V.mobileVariantList},isSelfContained:{true:g}}}),so=n(V.body,{variants:{isNoData:{true:V.bodyEmpty}}}),co=e=>{let{dataGridClassName:n,isDataGridDisabled:r,treeRenderConfig:i,headColumns:a,headProps:s,bodyProps:c,loaderProps:l,renderRows:u,isAllowHorizontalScroll:d,isHideHead:f,hasPinnedColumns:p,contentStateProps:m,rowHoverProps:h,containerRef:g,sections:_,isNoData:v,isMobile:y,mobileSkeletonProps:b,isLoading:x,containerCssVars:ee,hasGroupedColumns:S,gridViewMode:C,mobileDisplayVariant:w,isSelfContained:T,isMassActionsOpen:E,hasMassActions:D,resizePlugin:O,wrapperRef:k,resizePluginProps:A,headerProps:j}=to(e),{emptySymbol:te}=(0,io.useContext)(o),{columns:M,selectedRows:N=[],onSelectRow:ne,minDisplayRows:P=10,variant:re=vn.Tree,footer:ie,massActions:F,noDataPlaceholder:I,subrows:ae,keyId:L,activeRowId:R,emptyCellValue:oe=te,onRowClick:se,noDataOptions:z,isTabularNums:ce,renderRow:le,renderLink:ue}=e,{moreButtonColumnPosition:de=1,isVisibleCollapseButton:pe=!0}=ae||{},{isInitialExpanded:he=!1,expandedLevel:ge=1,initialVisibleChildrenCount:_e=2}=i||{},ve=r?xa:ba,ye=(0,io.useCallback)(()=>x?null:I||(0,Z.jsx)(Xi,{...z}),[I,z,x]),be={...c,keyId:L,minDisplayRows:P,rows:u,variant:re,emptyCellValue:oe,isInitialExpanded:he,expandedLevel:ge,initialVisibleChildrenCount:_e,moreButtonColumnPosition:de,isVisibleCollapseButton:pe,noDataPlaceholder:ye(),onRowClick:se,...h,renderRow:le};return(0,Z.jsx)(kt,{isLoading:x,isTabularNums:ce,emptyCellValue:oe,activeRowId:R,keyId:L,columns:M,onRowClick:se,mobileDisplayVariant:w,renderLink:ue,selectedRows:N,onSelectRow:ne,isMassActionsOpen:E,children:(0,Z.jsxs)(ya,{ref:g,style:ee,className:t(n,oo({hasResizePlugin:!!O,isAllowHorizontalScroll:d,hasPinnedColumns:p,gridViewMode:C,hasGroupedColumns:S,mobileDisplayVariant:w,isSelfContained:T,hasMassActions:D,isMassActionsOpen:E})),children:[!p||y?(0,Z.jsxs)(ve,{ref:k,...me(r),className:V.wrapper,children:[!f&&(0,Z.jsx)(Ti,{...s,headerProps:j,columns:a,resizePlugin:O,resizePluginProps:A}),(0,Z.jsx)(fe,{...m,loadingContent:y&&(0,Z.jsx)(Gi,{...b}),children:(0,Z.jsx)(Nr,{...be,activeRowId:R,columns:M,className:so({isNoData:v})})})]}):(0,Z.jsx)(fe,{...m,children:(0,Z.jsx)(ga,{sections:_,className:ao({isDisabled:r}),isDisabled:r,headProps:s,bodyProps:be,isNoData:v})}),(0,Z.jsx)(Pi,{...l}),F&&(0,Z.jsx)(Sa,{children:F}),ie&&ie]})})};try{co.displayName=`DataGrid`,co.__docgenInfo={description:``,displayName:`DataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
{
field: 'test',
label: 'Тестовая колонка',
sortable: true,
}]} />
Конфигурация колонок для таблицы`},type:{name:`DataGridColumns<TData>[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`selectedRows`,required:!1,tags:{example:`<DataGrid selectedRows={[{name: 'test'}]} />
Массив выбранных строк`},type:{name:`TData[]`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{example:`<DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
Параметры сортируемой колонки`},type:{name:`DataGridSort<TSortField>`}},footer:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Компонент кастомного футера (например Pagination)`,name:`footer`,required:!1,tags:{},type:{name:`ReactNode`}},massActions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Панель массовых действий над выбранными строками`,name:`massActions`,required:!1,tags:{example:`<DataGrid massActions={<DataGridMassActions />} />`},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},maxHeight:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Максимальная высота для таблицы`,name:`maxHeight`,required:!1,tags:{},type:{name:`number`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, показывается анимация загрузки`,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},errorMsg:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Текст ошибки`,name:`errorMsg`,required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`'tree'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!1,tags:{default:`'tree'`},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},tree:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения древовидных списков
Применяется если variant="tree"`,name:`tree`,required:!1,tags:{},type:{name:`{ isInitialExpanded?: boolean; expandedLevel?: number; initialVisibleChildrenCount?: number; }`}},subrows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Опции для отображения вложенных списков
Применяется если variant="subrows"`,name:`subrows`,required:!1,tags:{},type:{name:`{ expandedLevel?: number; initialVisibleChildrenCount?: number; moreButtonColumnPosition?: number; isVisibleCollapseButton?: boolean; }`}},emptyCellValue:{defaultValue:{value:`'—'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'—'`},type:{name:`ReactNode`}},minDisplayRows:{defaultValue:{value:`10`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!1,tags:{default:`10`,deprecated:`Не поддерживается, параметр будет удален в следующей major версии пакета.
Мотивация: задание минимальной высоты через параметр компонента мешает корректной работе таблицы
в части верстки.
Чтобы отключить минимальную высоту таблицы, задайте в ConfigProvider:
\`components.dataGrid.defaultProps.disableMinHeight: true\``},type:{name:`number`}},onRetry:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Функция обработки нажатия на кнопку "Повторить запрос"`,name:`onRetry`,required:!0,tags:{},type:{name:`() => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!1,tags:{},type:{name:`(row: TData[]) => void`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Возвращает блокировку строки { mode, reason }`,name:`getRowDisabled`,required:!1,tags:{example:`const getRowDisabled = useCallback(
  (row: Document): DataGridRowDisabled | undefined => {
    if (row.status === 'Отправлен') {
      return { mode: 'selection', reason: 'Документ уже отправлен получателю' };
    }

    return undefined;
  },
  [],
);

<DataGrid getRowDisabled={getRowDisabled} />`},type:{name:`(row: TData) => DataGridRowDisabled`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{example:`<DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},isHideHeaderIfNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},plugins:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Подключаемые возможности таблицы.`,name:`plugins`,required:!1,tags:{example:`<DataGrid plugins={[ResizePlugin]} />`},type:{name:`DataGridResizePlugin[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Id таблицы для сохранения пользовательских настроек plugins в localStorage.
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}var Q;function uo(){return(uo=e((()=>{a(),Q={root:r(`data-grid-row-base`),contentWrapper:r(`data-grid-row-base__content-wrapper`),hovered:r(`data-grid-row-base_hovered`),active:r(`data-grid-row-base_active`),mobileVariantCards:r(`data-grid-row-base_mobile-variant-cards`),mobileVariantList:r(`data-grid-row-base_mobile-variant-list`)}})))()}var fo;function po(){return(po=e((()=>{a(),fo={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var mo;function ho(){return(ho=e((()=>{E(),d(),po(),mo=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${fo.hidden} {
      display: none;
    }
  }
`})))()}var go,_o,vo;function yo(){return(yo=e((()=>{C(),Ht(),po(),ho(),go=T(),_o=n(fo.root,{variants:{hidden:{true:fo.hidden}}}),vo=({cell:e,cellId:t,isFirstCell:n,row:r,emptyCellValue:i,isDisabled:a,startAdornment:o,href:s,target:c})=>{let{label:l,children:u,hideTitleOnMobile:d,isHideOnMobile:f}=e;return(0,go.jsxs)(go.Fragment,{children:[(0,go.jsx)(mo,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:_o({hidden:d||f}),children:l}),u.map((e,l)=>{let u=`${t}-${l}`;return(0,go.jsx)(Bt,{row:r,cell:e,isHideOnMobile:f,emptyCellValue:i,isDisabled:a,startAdornment:n&&l===0&&o,isHidePersonalData:e.isHidePersonalData,className:B.grouped,href:s,target:c},u)})]})};try{vo.displayName=`GroupCell`,vo.__docgenInfo={description:``,displayName:`GroupCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/GroupCell.tsx`,methods:[],props:{cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridGroupColumn<Record<string, unknown>>`}},cellId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cellId`,required:!0,tags:{},type:{name:`string`}},isFirstCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isFirstCell`,required:!1,tags:{},type:{name:`boolean`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function bo(){return(bo=e((()=>{yo()})))()}var xo,So,Co,wo;function To(){return(To=e((()=>{s(),E(),H(),uo(),xo=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,So=y.li`
  position: relative;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding-bottom: ${({theme:e})=>e.spacing(3)};

    border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};

    &:not(:first-of-type) {
      padding-top: ${({theme:e})=>e.spacing(5)};
    }

    &:first-of-type {
      padding-top: ${({theme:e})=>e.spacing(1)};
    }

    &.${Q.mobileVariantCards} {
      padding: ${({theme:e})=>e.spacing(5,4,4)};

      background-color: ${({theme:e})=>e.palette.background.default};
      border: 1px solid ${({theme:e})=>e.palette.grey[300]};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.shape.medium};
  
    }
  }
`,Co=y.div`
  position: relative;

  display: grid;
  grid-template-columns: var(--data-grid-columns);

  background-color: transparent;

  &.${Q.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};

      &.${Q.active} {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }

      &.${Q.hovered} {
        cursor: pointer;
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;

    &.${Q.active} {
      background-color: transparent;
    }
  }
`,wo=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`})))()}var Eo,Do;function Oo(){return(Oo=e((()=>{Eo=D(),it(),Zn(),nn(),uo(),Do=({className:e,row:t,keyId:n,onRowClick:r,columns:i,sectionOffset:a,customContent:o,renderStartAdornment:s,isSelected:c,hasBlockingAction:l,blockingActionReason:u,rowDisabled:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,activeRowId:_,emptyCellValue:v,isSelectable:y,rowId:b,mobileDisplayVariant:x,...ee})=>{let[S,C]=(0,Eo.useState)(!1),w=(0,Eo.useRef)(null),{isDrawerOpen:T,handleOpenDrawer:E,handleCloseDrawer:D}=Yn(),{options:O}=t,{style:k,...A}=ee||{},{href:j,isNotSelectable:te,target:M}=O||{},{isDisabled:N,isDisabledLastCell:ne,disabledReason:P,isCheckboxDisabled:re,checkboxDisabledReason:ie}=tn({rowDisabled:d,hasBlockingAction:l,blockingActionReason:u,isDisabledLastCellOption:O?.isDisabledLastCell}),F=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&C(!0)},I=()=>C(!1),ae={...k||{}},L=!!(!N&&(r||j)),R=_===b;return{handleRowClick:()=>{if(N){E();return}if(j)return rt(j,M);r?.(t)},tooltipProps:{open:S,title:N?P:void 0,onOpen:F,onClose:I,followCursor:!0,arrow:!1},checkboxProps:{checked:c,disabled:re,disabledReason:ie,onChange:f(t)},drawerProps:{open:T,onClose:D,title:`Заблокировано`},drawerContent:P,rowBaseVars:ae,isHovered:L,isActive:R,columns:i,emptyCellValue:v,rowRef:e=>{e?(w.current=e,h?.(b,e)):w.current&&=(g?.(b,w.current),null)},href:j,target:M,onRowEnter:p,onRowLeave:m,rowId:b,row:t,isDisabled:N,sectionOffset:a,customContent:o,isDisabledLastCell:ne,renderStartAdornment:s,isSelectable:y,isNotSelectable:te,dataGridInfiniteItemProps:A,mobileDisplayVariant:x,className:e}}})))()}function ko(){return(ko=e((()=>{Oo()})))()}var Ao,$,jo,Mo,No;function Po(){return(Po=e((()=>{Ao=D(),P(),F(),f(),C(),he(),Ht(),et(),or(),Kt(),K(),uo(),bo(),To(),ko(),$=T(),jo=n(Q.contentWrapper,{variants:{isHovered:{true:Q.hovered},isActive:{true:Q.active}}}),Mo=n(Q.root,{variants:{mobileDisplayVariant:{cards:Q.mobileVariantCards,list:Q.mobileVariantList}}}),No=(0,Ao.memo)(e=>{let{className:n,tooltipProps:r,rowBaseVars:i,isHovered:a,isActive:o,drawerProps:s,emptyCellValue:c,rowRef:l,onRowEnter:u,onRowLeave:d,rowId:f,row:p,isDisabled:m,sectionOffset:h,customContent:g,isDisabledLastCell:_,renderStartAdornment:v,checkboxProps:y,href:b,target:x,isNotSelectable:ee,isSelectable:S,columns:C,dataGridInfiniteItemProps:w,handleRowClick:T,drawerContent:E,mobileDisplayVariant:D}=Do(e),O=()=>{let e=v?.(!0),t=S&&!ee;return!e&&!t?null:(0,$.jsxs)($.Fragment,{children:[e,t&&(0,$.jsx)(xo,{...me(m),onClick:e=>e.stopPropagation(),className:U.checkbox,children:(0,$.jsx)(Wt,{...y})})]})},k=(0,Ao.useCallback)(()=>{let e=C.length-1,t=_?void 0:[e];return C?.map((e,n)=>{let r=`row-base-${n}`,i=(h??0)+n,a=i===0,o=ar(m,t,i);return G(e)?(0,$.jsx)(vo,{cell:e,cellId:r,isFirstCell:a,row:p,emptyCellValue:c,isDisabled:o,startAdornment:a&&O(),href:b,target:x},r):(0,$.jsx)(Bt,{row:p,cell:e,emptyCellValue:c,startAdornment:a&&O(),isDisabled:o,isHidePersonalData:e.isHidePersonalData,href:b,target:x},r)})},[p,C,m,_,h,v,y.checked,y.disabled,y.disabledReason]);return(0,$.jsxs)(So,{className:t(n,Mo({mobileDisplayVariant:D})),style:i,...w,children:[(0,$.jsx)(j,{...r,children:(0,$.jsx)(Co,{ref:l,onPointerEnter:()=>u?.(f),onPointerLeave:e=>d?.(f,e.nativeEvent),className:jo({isHovered:a,isActive:o}),[Ze]:m,onClick:T,children:k()})}),g,(0,$.jsx)(te,{...s,children:(0,$.jsx)(wo,{children:E})})]},`row-base-${f}`)});try{No.displayName=`RowBase`,No.__docgenInfo={description:``,displayName:`RowBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/RowBase.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Массив колонок`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},renderStartAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Функция для рендера стартового элемента`,name:`renderStartAdornment`,required:!1,tags:{},type:{name:`(isFirstCell: boolean) => ReactNode`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Смещение секции для правильного расчета глобального индекса`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},rowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`rowId`,required:!0,tags:{},type:{name:`string`}},customContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Кастомный контент после ячеек`,name:`customContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбираемой`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбранной`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},hasBlockingAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Если true, в строке выполняется блокирующее действие DataGridActionCell`,name:`hasBlockingAction`,required:!1,tags:{},type:{name:`boolean`}},blockingActionReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки от блокирующего действия`,name:`blockingActionReason`,required:!1,tags:{},type:{name:`string`}},rowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Итоговая блокировка строки, рассчитанная resolveRowDisabled`,name:`rowDisabled`,required:!1,tags:{},type:{name:`DataGridRowDisabled`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик ухода со строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Удаление регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`ID активной строки`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Значение для пустой ячейки`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Fo(){return(Fo=e((()=>{Po(),uo()})))()}function Io(){return(Io=e((()=>{lo(),H(),qi(),Fo(),Mt(),Et()})))()}export{At as $,pr as A,on as B,Ti as C,br as D,yr as E,Bn as F,K as G,en as H,Vn as I,Xt as J,G as K,vn as L,qn as M,Wn as N,gr as O,Gn as P,kt as Q,yn as R,Di as S,xr as T,Zt as U,$t as V,Qt as W,Jt as X,qt as Y,Mt as Z,ya as _,Q as a,ut as at,Gi as b,lo as c,Ye as ct,Ba as d,Pe as dt,Et as et,Ra as f,je as ft,ka as g,Aa as h,Po as i,lt as it,mr as j,hr as k,Qa as l,V as lt,Fa as m,Fo as n,bt as nt,uo as o,ot,Ia as p,Yt as q,No as r,_t as rt,co as s,st,Io as t,yt as tt,Va as u,H as ut,Sa as v,Ei as w,Ki as x,Ca as y,sn as z};