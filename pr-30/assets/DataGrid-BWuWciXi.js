import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,T as o,Xt as s,b as c,ba as l,cn as u,dt as d,ei as f,en as p,ft as m,hr as h,in as g,it as _,j as v,ji as y,ln as b,mr as x,rt as S,w as C,wn as w,y as T,ya as E,yn as D,za as O}from"./preview-BgfOFFw_.js";import{n as k,t as ee}from"./useViewportType-C27tiPlZ.js";import{t as A}from"./Skeleton-yc2IaVYs.js";import{n as j,t as M}from"./isDeepEqual-qY8HqTQE.js";import{t as N}from"./Tooltip-MrwfimGv.js";import{t as P}from"./BottomDrawer-Bwjdv07c.js";import{t as te}from"./Divider-BSucLe0o.js";import{t as F}from"./Collapse-DqM1cVFE.js";import{t as ne}from"./Collapse-CzsoPASQ.js";import{t as re}from"./BottomDrawer-OeS1yH4Z.js";import{r as I,t as ie}from"./personalDataSecurity-BU4fWHDG.js";import{t as ae}from"./Tooltip-D4c9p31f.js";import{t as L}from"./Checkbox-CzzpMWHB.js";import{n as oe}from"./useFirstMountState-CQP7cRMC.js";import{t as se}from"./useFirstMountState-Cyv4_5CI.js";import{t as ce}from"./Checkbox-DyRWyr0u.js";import{t as R}from"./OverflowTypography-B_EnHB5W.js";import{t as le}from"./OverflowTypography-BeKgkGNB.js";import{i as ue,n as de,r as fe,t as pe}from"./LinearProgress-2r1pKFd8.js";import{n as me,t as he}from"./isBrowser-CqlMecsi.js";import{n as ge}from"./useLocalStorage-CUHtr1aH.js";import{t as _e}from"./useLocalStorage-GFEKD-dK.js";import{t as ve}from"./Skeleton-CtXyU6_f.js";import{t as ye}from"./ContentState-CB93a4m_.js";import{t as be}from"./ContentState-D49uhnRp.js";import{n as xe,t as Se}from"./getInertProps-DIizf8J7.js";import{t as Ce}from"./Divider-QVS4ISrX.js";import{n as we,t as Te}from"./ChevronROutlineMd-t4LuFfTM.js";import{i as Ee,n as De,r as Oe}from"./HintIcon-C-rmpB-A.js";import{n as ke,t as Ae}from"./constants-YLzATl8J.js";import{a as je,c as Me,i as Ne,n as Pe,s as Fe,t as Ie}from"./SortUpFillSm-BWsYFzq2.js";import{n as Le,t as Re}from"./generateLocalStorageKey-CuuetdeM.js";function ze(e,t,n){n===void 0&&(n=!1);for(var r=[],i=0;i<e.length;i++){var a=e[i],o=n?t(a,i,e):t(a);if(o.hasMany===!0?r.push.apply(r,o.next):o.hasNext&&r.push(o.next),o.done)break}return r}function Be(){return h(Ve,arguments,He)}function Ve(e,t){return ze(e,He(t))}function He(e){var t=new Set;return function(n){var r=e(n);return t.has(r)?{done:!1,hasNext:!1}:(t.add(r),{done:!1,hasNext:!0,next:n})}}function Ue(){return(Ue=e((()=>{x()})))()}var z;function We(){return(We=e((()=>{a(),z={root:r(`data-grid__cell`),isHideOnMobile:r(`data-grid__cell_hide-on-mobile`),columnLabel:r(`data-grid__cell-column-label`),columnLabelHidden:r(`data-grid__cell-column-label_hidden`),actionColumn:r(`data-grid__cell_action-column`),cellContent:r(`data-grid__cell-content`),disabled:r(`data-grid__cell_disabled`),withStartAdornment:r(`data-grid__cell_with-start-adornment`),alignLeft:r(`data-grid__cell_align-left`),alignCenter:r(`data-grid__cell_align-center`),alignRight:r(`data-grid__cell_align-right`),grouped:r(`data-grid__cell_grouped`),tabularNums:r(`data-grid__cell_tabular-nums`),anchorCell:r(`data-grid__cell_anchor-cell`),withLink:r(`data-grid__cell_with-link`)}})))()}var Ge,Ke;function qe(){return(qe=e((()=>{D(),d(),We(),Ge=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    &.${z.columnLabelHidden} {
      display: none;
    }
  }
`,Ke=y.div`
  min-width: 0;

  &.${z.tabularNums} {
    font-feature-settings: "tnum" 1;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(1)};
    align-items: flex-start;

    width: 100%;
    
    &.${z.actionColumn} {
      align-items: flex-end;
    }
  }
`})))()}var Je,Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{le(),w(),We(),qe(),Je=E(),Ye=n(z.cellContent,{variants:{isActionColumn:{true:z.actionColumn},isTabularNums:{true:z.tabularNums}}}),Xe=n(z.columnLabel,{variants:{hidden:{true:z.columnLabelHidden}}}),Ze=({row:e,label:t,hideTitleOnMobile:n,isActionColumn:r,isTabularNums:i,startAdornment:a,renderCell:o,formattedValue:s,hidePersonalDataClassname:c})=>(0,Je.jsxs)(Je.Fragment,{children:[a,(0,Je.jsxs)(Ke,{className:Ye({isActionColumn:r,isTabularNums:i}),children:[(0,Je.jsx)(Ge,{variant:`caption`,color:`textSecondary`,className:Xe({hidden:n||r}),children:t}),o?.(e),!o&&(0,Je.jsx)(R,{rowsCount:2,tooltipProps:{className:c},children:(0,Je.jsx)(Je.Fragment,{children:s})})]})]});try{Ze.displayName=`CellInner`,Ze.__docgenInfo={description:``,displayName:`CellInner`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/CellInner.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Название колонки`,name:`label`,required:!1,tags:{},type:{name:`string`}},hideTitleOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Скрытие заголовка колонки на мобильных устройствах`,name:`hideTitleOnMobile`,required:!1,tags:{},type:{name:`boolean`}},isActionColumn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Флаг колонки с действиями`,name:`isActionColumn`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Моноширинный шрифт для чисел`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки слева`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},renderCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Кастомное отображение ячейки`,name:`renderCell`,required:!1,tags:{},type:{name:`RenderCell<Record<string, unknown>>`}},formattedValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Отформатированное значение ячейки`,name:`formattedValue`,required:!1,tags:{},type:{name:`unknown`}},hidePersonalDataClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Класс для скрытия персональных данных`,name:`hidePersonalDataClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function $e(){return($e=e((()=>{Qe()})))()}var et,tt;function nt(){return(nt=e((()=>{et=E(),tt=({children:e,row:t,renderLink:n,href:r,target:i})=>n?n({children:e,row:t})??e:r?(0,et.jsx)(`a`,{href:r,target:i,rel:`noopener noreferrer`,children:e}):e;try{tt.displayName=`LinkWrapper`,tt.__docgenInfo={description:`Оборачивает содержимое ячейки в ссылку`,displayName:`LinkWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/LinkWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Содержимое ячейки`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Данные строки вместе с её options`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown> & { options?: DataGridRowOptions<TData>; children?: DataGridRowWithOptions<TData>[]; }`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Кастомная отрисовка ссылки строки`,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<TData>`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function rt(){return(rt=e((()=>{nt()})))()}var B,it;function V(){return(V=e((()=>{a(),B={loadingPlaceholder:r(`data-grid__loading-placeholder`),header:r(`data-grid__header`),root:r(`data-grid`),body:r(`data-grid__body`),bodyEmpty:r(`data-grid__body_empty`),disabled:r(`data-grid_disabled`),pinnedSectionNoData:r(`data-grid__pinned-section_no-data`),hasPinnedSections:r(`data-grid_has-pinned-sections`),pinnedSections:r(`data-grid__pinned-sections`),leftPinnedSection:r(`data-grid__left-pinned-section`),rightPinnedSection:r(`data-grid__right-pinned-section`),overflowed:r(`data-grid_overflowed`),wrapper:r(`data-grid__wrapper`),hasMassActions:r(`data-grid_has-mass-actions`),massActionsOpen:r(`data-grid_mass-actions-open`),isAllowHorizontalScroll:r(`data-grid_is-allow-horizontal-scroll`),hasGroupedColumns:r(`data-grid_has-grouped-columns`),gridViewFull:r(`data-grid_grid-view-full`),gridViewStandard:r(`data-grid_grid-view-standard`),mobileVariantCards:r(`data-grid_mobile-variant-cards`),mobileVariantList:r(`data-grid_mobile-variant-list`)},it={list:r(`data-grid__skeleton-list`),item:r(`data-grid__skeleton-item`)}})))()}var at,H,U,ot,st;function ct(){return(ct=e((()=>{a(),at=`data-row-disable`,H={root:r(`data-grid__row`),showConnector:r(`data-grid__row_show-connector`),hidden:r(`data-grid__row_hidden`),hover:r(`data-grid__row_hover`),hasPinnedColumns:r(`data-grid__row_has-pinned-columns`),checkbox:r(`data-grid__row-checkbox`),mobileVariantCards:r(`data-grid__row_mobile-variant-cards`),mobileVariantList:r(`data-grid__row_mobile-variant-list`),nestedChildren:r(`data-grid__row-nested-children`),hasOpenChildren:r(`data-grid__row_has-open-children`),hasNestedChildren:r(`data-grid__row_has-nested-children`)},U={root:r(`data-grid__row-content`),hovered:r(`data-grid__row-content_hovered`),active:r(`data-grid__row-content_active`)},ot={single:r(`data-grid__row-cell_single`),grouped:r(`data-grid__row-cell_grouped`),firstCell:r(`data-grid__row-cell_first`)},st={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var lt;function ut(){return(ut=e((()=>{D(),V(),ct(),We(),lt=y.div`
  overflow: hidden;
  display: flex;
  align-items: center;

  min-height: ${44}px;
  padding: ${({theme:e})=>e.spacing(1,2)};

  &.${z.disabled} {
    opacity: 0.5;
  }

  &.${z.withStartAdornment} {
    padding: ${({theme:e})=>e.spacing(1,2,1,0)};
  }

  &.${z.alignLeft} {
    justify-content: flex-start;
  }

  &.${z.alignCenter} {
    justify-content: center;
  }

  &.${z.alignRight} {
    justify-content: flex-end;
  }

  &.${z.withLink} {
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

    &.${z.isHideOnMobile} {
      display: none;
    }

    & .${H.checkbox} {
      align-self: flex-start;
      order: 1;
    }

    &.${z.grouped} {
      margin-top: ${({theme:e})=>e.spacing(1)};

      & .${z.cellContent} {
        flex-direction: row;
        gap: ${({theme:e})=>e.spacing(2)};
        align-items: baseline;

        & .${z.columnLabel} {
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
`})))()}var dt;function ft(){return(ft=e((()=>{dt=(e,t=`_self`)=>{let n=document.createElement(`a`);n.href=e,n.target=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})))()}var pt,mt;function ht(){return(ht=e((()=>{pt=O(),mt=(0,pt.createContext)({isLoading:!1,isTabularNums:!1,emptyCellValue:``,activeRowId:``,keyId:``,columns:[],onRowClick:()=>void 0,mobileDisplayVariant:`list`})})))()}var gt,_t;function vt(){return(vt=e((()=>{gt=O(),_t=(0,gt.createContext)({selectedRows:[],isMassActionsOpen:!1})})))()}var yt,bt,xt,St;function Ct(){return(Ct=e((()=>{yt=O(),vt(),bt=E(),xt=[],St=({selectedRows:e=xt,onSelectRow:t,isMassActionsOpen:n=!1,children:r})=>{let i=(0,yt.useMemo)(()=>({selectedRows:e,onSelectRow:t,isMassActionsOpen:n}),[e,t,n]);return(0,bt.jsx)(_t.Provider,{value:i,children:r})};try{St.displayName=`DataGridSelectionProvider`,St.__docgenInfo={description:``,displayName:`DataGridSelectionProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,methods:[],props:{selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function wt(){return(wt=e((()=>{Ct()})))()}function Tt(){return(Tt=e((()=>{vt(),wt()})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{Et=O(),Dt=(0,Et.createContext)({getItem:()=>void 0,setItem:()=>void 0})})))()}var kt,At,jt;function Mt(){return(Mt=e((()=>{kt=O(),Ot(),At=E(),jt=({children:e})=>{let t=(0,kt.useRef)({}),n=(0,kt.useCallback)(e=>t.current[e],[]),r=(0,kt.useCallback)((e,n)=>{t.current[e]=n},[]),i=(0,kt.useMemo)(()=>({getItem:n,setItem:r}),[n,r]);return(0,At.jsx)(Dt.Provider,{value:i,children:e})};try{jt.displayName=`DataGridStorageProvider`,jt.__docgenInfo={description:``,displayName:`DataGridStorageProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Nt(){return(Nt=e((()=>{Mt()})))()}function Pt(){return(Pt=e((()=>{Ot(),Nt()})))()}var Ft,It,Lt;function Rt(){return(Rt=e((()=>{Ft=O(),Tt(),Pt(),ht(),It=E(),Lt=({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,children:i,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l,selectedRows:u,onSelectRow:d,isMassActionsOpen:f})=>{let p=(0,Ft.useMemo)(()=>({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l}),[e,t,n,r,a,o,s,c,l]);return(0,It.jsx)(mt.Provider,{value:p,children:(0,It.jsx)(St,{selectedRows:u,onSelectRow:d,isMassActionsOpen:f,children:(0,It.jsx)(jt,{children:i})})})};try{Lt.displayName=`DataGridContextProvider`,Lt.__docgenInfo={description:``,displayName:`DataGridContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!0,tags:{},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<Record<string, unknown>>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function zt(){return(zt=e((()=>{Rt()})))()}function Bt(){return(Bt=e((()=>{ht(),zt()})))()}var Vt,Ht;function Ut(){return(Ut=e((()=>{Vt=O(),ft(),Bt(),Ht=({row:e,href:t,target:n,cell:r,emptyCellValue:i,startAdornment:a})=>{let{isTabularNums:o,renderLink:s}=(0,Vt.useContext)(mt),{format:c,field:l,label:u,hideTitleOnMobile:d,isTabularNums:f}=r,p=f??o,m=e=>!!e||e===0,h=(0,Vt.useMemo)(()=>c&&m(c(e))?c(e):l&&m(e[l])?e[l]:i,[l,c,e,i]),g=!!a,_=r.field===`actions`,v=()=>{if(_&&t)return dt(t,n)},y=_?void 0:{href:t,target:n,renderLink:s};return{formattedValue:h,hasStartAdornment:g,isActionColumn:_,label:u,hideTitleOnMobile:d,isTabularNums:p,linkProps:y,hasLink:!!(y?.renderLink||y?.href),onCellClick:v}}})))()}function Wt(){return(Wt=e((()=>{Ut()})))()}var Gt,Kt,qt,Jt;function Yt(){return(Yt=e((()=>{Gt=l(),ie(),ee(),f(),w(),Se(),$e(),We(),rt(),ut(),Wt(),Kt=E(),qt=n(z.root,{variants:{isHideOnMobile:{true:z.isHideOnMobile},isDisabled:{true:z.disabled},withStartAdornment:{true:z.withStartAdornment},align:{left:z.alignLeft,center:z.alignCenter,right:z.alignRight},isActionColumn:{true:z.actionColumn},withLink:{true:z.withLink}}}),Jt=e=>{let{formattedValue:n,hasStartAdornment:r,isActionColumn:i,label:a,hideTitleOnMobile:o,isTabularNums:s,linkProps:c,hasLink:l,onCellClick:u}=Ht(e),{className:d,startAdornment:f,row:p,cell:m,isDisabled:h,isHidePersonalData:g,isHideOnMobile:_,hasNestedChildren:v,rootRowElement:y}=e,{renderCell:b,align:x=`left`}=m,{isMobile:S}=k(),C=I({isEnabled:g===!0}),w=(0,Kt.jsx)(lt,{className:t(d,C,qt({isHideOnMobile:m.isHideOnMobile||_,isDisabled:h,withStartAdornment:r,align:x,isActionColumn:i,withLink:l})),...xe(h),onClick:u,children:(0,Kt.jsx)(tt,{row:p,...c,children:(0,Kt.jsx)(Ze,{row:p,label:a,hideTitleOnMobile:o,isActionColumn:i,isTabularNums:s,startAdornment:f,renderCell:b,formattedValue:n,hidePersonalDataClassname:C})})});return i&&S&&v?y?(0,Gt.createPortal)(w,y):null:w};try{Jt.displayName=`Cell`,Jt.__docgenInfo={description:``,displayName:`Cell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/Cell.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridSingleColumn<TData>`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Если true, ячейка будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},isHideOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие ячейки на мобильных устройствах`,name:`isHideOnMobile`,required:!1,tags:{},type:{name:`boolean`}},hasNestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Флаг наличия вложенных элементов в строке`,name:`hasNestedChildren`,required:!1,tags:{},type:{name:`boolean`}},rootRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Ссылка на корневой элемент строки`,name:`rootRowElement`,required:!1,tags:{},type:{name:`HTMLLIElement`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Xt(){return(Xt=e((()=>{Yt(),We()})))()}var Zt,Qt;function $t(){return($t=e((()=>{ce(),ae(),Zt=E(),Qt=({disabledReason:e,...t})=>e?(0,Zt.jsx)(N,{title:e,enterDelay:300,enterNextDelay:300,withoutContainer:!1,children:(0,Zt.jsx)(L,{...t})}):(0,Zt.jsx)(L,{...t});try{Qt.displayName=`RowCheckbox`,Qt.__docgenInfo={description:`Checkbox строки. Для заблокированного выбора показывает причину в tooltip`,displayName:`RowCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/RowCheckbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки выбора`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function en(){return(en=e((()=>{$t()})))()}var tn;function nn(){return(nn=e((()=>{tn=({maxHeight:e,gridColumns:t})=>({"--data-grid-columns":t,...e&&{"--max-height":`${e}px`}})})))()}var rn;function an(){return(an=e((()=>{rn=e=>e.map(({width:e,minWidth:t})=>{let n=e||`1fr`;return t?`minmax(${t}, ${n})`:n}).join(` `)})))()}var W;function G(){return(G=e((()=>{W=e=>`children`in e&&Array.isArray(e.children)})))()}var K;function on(){return(on=e((()=>{G(),K=(e,t)=>e.flatMap(e=>{let n=e.pinned??t;return W(e)?K(e.children,n):{...e,pinned:n}})})))()}var sn;function cn(){return(cn=e((()=>{sn=({hasMassActions:e,selectedRowsCount:t,isMobile:n})=>e&&t>0&&!n})))()}var ln;function un(){return(un=e((()=>{ln=({rowDisabled:e,hasBlockingAction:t=!1,blockingActionReason:n,isDisabledLastCellOption:r=!0})=>{let i=e?.mode,a=i===`selection`,o=t||i===`row`||i===`row-except-last-cell`,s=e?.reason||n;return{isDisabled:o,isDisabledLastCell:i?i!==`row-except-last-cell`:r,disabledReason:s,isCheckboxDisabled:o||a,checkboxDisabledReason:a?s:void 0}}})))()}var dn;function fn(){return(fn=e((()=>{dn=(e,t)=>{let n=t?.(e);if(n)return n;let{isDisabled:r,isDisabledLastCell:i=!0,disabledReason:a=``}=e.options??{};if(r)return{mode:i?`row`:`row-except-last-cell`,reason:a}}})))()}var pn;function mn(){return(mn=e((()=>{fn(),pn=(e,t,n)=>{let r=new Map,i=[];return e.forEach(e=>{let a=e[t],o=n?.(e);o&&!o.reason&&i.push(a),r.set(a,o??dn(e))}),{rowsDisabled:r,idsWithoutReason:i}}})))()}var hn;function gn(){return(gn=e((()=>{hn=e=>{let t=new Set;e.forEach(({id:e})=>{if(t.has(e))throw Error(`DataGrid: plugin "${e}" передан несколько раз`);t.add(e)})}})))()}var _n;function vn(){return(vn=e((()=>{_n=(e,t)=>e?.find(e=>e.id===t)})))()}var yn;function bn(){return(bn=e((()=>{yn=e=>JSON.stringify(e.map(({field:e})=>e===void 0?null:String(e)))})))()}var xn;function Sn(){return(Sn=e((()=>{xn=(e,t)=>`${e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}:${t}`})))()}var Cn;function wn(){return(wn=e((()=>{a(),Cn={root:r(`data-grid-nested-rows`),additionalRows:r(`data-grid-nested-rows__additional-rows`),variantSubrows:r(`data-grid-nested-rows_variant-subrows`),variantTree:r(`data-grid-nested-rows_variant-tree`)}})))()}var Tn,En,Dn;function On(){return(On=e((()=>{u(),D(),Xt(),V(),ct(),wn(),Tn=y(`ul`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
    &.${Cn.variantSubrows} .${z.root}:first-of-type {
      display: none;

      & + .${z.root} {
        margin-top: 0;
      }
    }

    & .${z.actionColumn} {
      display: none;
    }

    /* Высота последнего декоративного элемента полная тк у AdditionalRows есть кнопка "Показать все/Скрыть" */
    &.${Cn.additionalRows} .${H.nestedChildren}:last-of-type::before {
      height: 100%;
    }
  }
`,En=y(`li`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
`,Dn=y(b,{shouldForwardProp:e=>![`$moreButtonColumnPosition`].includes(e)})`
  grid-column: ${({$moreButtonColumnPosition:e})=>e};
  justify-self: start;

  margin: ${({theme:e})=>e.spacing(0,2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`})))()}var kn;function An(){return(An=e((()=>{kn=function(e){return e.Tree=`tree`,e.Subrows=`subrows`,e}({})})))()}var jn,Mn;function Nn(){return(Nn=e((()=>{jn=O(),An(),Mn=({data:e,level:t,variant:n,initialVisibleChildrenCount:r})=>{let i=Object.is(n,kn.Tree),a=i?t+1:0,o=e?.slice(0,r),s=e?.slice(r),[c,l]=(0,jn.useState)(!1);return{isShowAllChildren:c,isShowMoreButton:!!s?.length,isShowConnector:i,initialVisibleChildren:o,otherChildren:s,nextLevel:a,handleToggleShowAllChildren:e=>{e.stopPropagation(),l(e=>!e)}}}})))()}function Pn(){return(Pn=e((()=>{Nn()})))()}var Fn,In,Ln;function Rn(){return(Rn=e((()=>{ne(),w(),ct(),wn(),On(),Pn(),Fn=E(),In=n(Cn.root,{variants:{variant:{subrows:Cn.variantSubrows,tree:Cn.variantTree}}}),Ln=e=>{let{isShowAllChildren:t,isShowMoreButton:n,isShowConnector:r,nextLevel:i,initialVisibleChildren:a,otherChildren:o,handleToggleShowAllChildren:s}=Mn(e),{isOpen:c,data:l,keyId:u,level:d,moreButtonColumnPosition:f,renderRow:p,variant:m}=e;return!l||!l.length?null:(0,Fn.jsx)(F,{in:c,unmountOnExit:!0,children:(0,Fn.jsxs)(Tn,{$level:d,$isShowConnector:r,className:In({variant:m}),children:[a.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:H.nestedChildren})}),c&&(0,Fn.jsxs)(Fn.Fragment,{children:[(0,Fn.jsx)(F,{in:t,component:`li`,unmountOnExit:!0,children:(0,Fn.jsx)(Tn,{$level:d,$isShowConnector:r,className:Cn.additionalRows,children:o.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:`${H.hidden} ${H.nestedChildren}`})})})}),n&&(0,Fn.jsx)(En,{$level:i,$isShowConnector:r,children:(0,Fn.jsx)(Dn,{$moreButtonColumnPosition:f,variant:`link`,onClick:s,children:t?`Скрыть`:`Показать все`})})]})]})})};try{Ln.displayName=`NestedChildren`,Ln.__docgenInfo={description:``,displayName:`NestedChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Если true, список дочерних элементов раскрыт`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Данные для отображения`,name:`data`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`({ key, level, row, nestedChildren, options, className, }: { key: string; row: TData; level: number; nestedChildren: (TData & { options?: DataGridRowOptions<TData>; })[]; options?: DataGridRowOptions<TData>; className?: string; }) => ReactElement<...>`}}},tags:{}}}catch{}})))()}function zn(){return(zn=e((()=>{Rn()})))()}var Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn;function Yn(){return(Yn=e((()=>{Te(),s(),S(),D(),d(),Xt(),V(),ct(),Bn=y.li`
  --level: 0;
  position: relative;

  &:not(:last-of-type)::before,
  &.${H.hidden}::before {
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
    &.${H.showConnector}::before,
    & .${U.root}::before {
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

    &.${H.mobileVariantCards} {
      border-bottom: none;

      &:not(.${H.nestedChildren}) {
        padding: ${({theme:e})=>e.spacing(5,4,4)};

        background-color: ${({theme:e})=>e.palette.background.default};
        border: 1px solid ${({theme:e})=>e.palette.grey[300]};
        border-radius: ${({theme:e})=>e.shape.medium};
      }
    }

    &.${H.hasNestedChildren} {
      :not(.${H.nestedChildren}) .${z.root}:last-of-type {
        padding-bottom: ${({theme:e})=>e.spacing(3)};
      }

      /* Ко всем ячейкам кроме первой применяем декоративный элемент слева и добавляем отступы для выравнивания с NestedChildren */
      &:not(.${H.nestedChildren}) > .${U.root} .${z.root}:not(.${ot.firstCell}) {
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
      &:not(.${H.nestedChildren})
       > .${U.root} .${z.root}.${ot.firstCell} 
        + .${z.root} {
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

    &.${H.nestedChildren} {
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
`,Vn=y.div`
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
  .${H.nestedChildren} &::before {
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      left: -20px;
      transform: none;

      display: block;

      width: ${12}px;

      /* Высота 8px для выравнивания с названием колонки первой ячейки */
      height: ${({theme:e})=>e.spacing(2)};
    }
  }

  &.${U.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};

      &.${U.active} {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }

      &.${U.hovered} {
        cursor: pointer;
      }
    }
  }


  &.${H.hover} {
    background-color: ${({theme:e})=>e.palette.background.elementHover};

    &.${U.hovered} {
      cursor: pointer;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;

    &.${U.active} {
      background-color: transparent;
    }
  }
`,Hn=y(Jt)`
  &:first-of-type {
    margin-left: calc(var(--level) * ${32}px);
  }
`,Un=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,Wn=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Gn=y(_)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,Kn=y(we,{shouldForwardProp:e=>e!==`$isActive`})`
  transform: rotateZ(${({$isActive:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`,qn=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`,Jn=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${st.hidden} {
      display: none;
    }
  }
`})))()}var Xn,Zn;function Qn(){return(Qn=e((()=>{Xn=O(),Zn=(0,Xn.createContext)({hasBlockingAction:!1,isSelectable:!1,addBlockingAction:()=>void 0,removeBlockingAction:()=>void 0,row:{},onSelectRow:()=>()=>void 0,onRowEnter:()=>void 0,onRowLeave:()=>void 0,registerRowElement:()=>void 0,unregisterRowElement:()=>void 0,itemProps:{},isSelected:!1})})))()}var $n,er,tr;function nr(){return(nr=e((()=>{$n=O(),Qn(),er=E(),tr=({row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,children:s,isSelectable:c,isSelected:l,disabledMode:u,disabledReason:d})=>{let[f,p]=(0,$n.useState)(!1),[m,h]=(0,$n.useState)(),g=(0,$n.useCallback)(e=>{p(!0),h(e)},[]),_=(0,$n.useCallback)(()=>{p(!1),h(void 0)},[]),v=(0,$n.useMemo)(()=>u?{mode:u,reason:d??``}:void 0,[u,d]),y=(0,$n.useMemo)(()=>({hasBlockingAction:f,blockingActionReason:m,addBlockingAction:g,removeBlockingAction:_,isSelectable:c,row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,isSelected:l,rowDisabled:v}),[f,m,g,_,c,e,t,n,r,i,a,o,l,v]);return(0,er.jsx)(Zn.Provider,{value:y,children:s})};try{tr.displayName=`RowContextProvider`,tr.__docgenInfo={description:``,displayName:`RowContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},itemProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`itemProps`,required:!1,tags:{},type:{name:`object`}},disabledMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Режим блокировки строки`,name:`disabledMode`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "selection" | "row-except-last-cell"`,value:[{value:`"row"`},{value:`"selection"`},{value:`"row-except-last-cell"`}]}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Причина блокировки строки`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function rr(){return(rr=e((()=>{nr()})))()}function ir(){return(ir=e((()=>{Qn(),rr()})))()}var ar,or;function sr(){return(sr=e((()=>{ar=O(),ee(),or=()=>{let{isMobile:e}=k(),[t,n]=(0,ar.useState)(!1);return{isMobile:e,isDrawerOpen:t,handleOpenDrawer:()=>{e&&n(!0)},handleCloseDrawer:()=>{n(!1)}}}})))()}function cr(){return(cr=e((()=>{sr()})))()}var lr;function ur(){return(ur=e((()=>{lr=e=>e.reduce((e,{field:t,...n})=>t?{...e,[t]:n}:e,{})})))()}var dr;function fr(){return(fr=e((()=>{ur(),dr=(e,t)=>{if(!t)return e;let n=lr(t);return Object.keys(n).length?e.map(e=>e.hasOwnProperty(`field`)?{...e,...n[e.field]||{}}:e):e}})))()}var q,pr;function mr(){return(mr=e((()=>{q=O(),Bt(),An(),un(),fn(),ct(),ir(),cr(),fr(),pr=({keyId:e,columns:t,row:n,nestedChildren:r,level:i,variant:a,options:o,isInitialExpanded:s=!1,expandedLevel:c,isSelectable:l,isSelected:u,getRowDisabled:d,isNested:f=!1,onSelectRow:p,onRowClick:m,isVisibleCollapseButton:h,registerRowElement:g,unregisterRowElement:_,style:v,activeRowId:y})=>{let{isDrawerOpen:b,handleOpenDrawer:x,handleCloseDrawer:S}=or(),[C,w]=(0,q.useState)(null),T=(0,q.useCallback)(e=>{e&&w(e)},[]),E=!!(s&&i<=c-1&&r?.length),{mobileDisplayVariant:D}=(0,q.useContext)(mt),{hasBlockingAction:O,blockingActionReason:k,rowDisabled:ee}=(0,q.useContext)(Zn),[A,j]=(0,q.useState)(E),M=(0,q.useRef)(null),N=e=>{e?(M.current=e,g?.(F,e)):M.current&&=(_?.(F,M.current),null)},[P,te]=(0,q.useState)(!1),F=n[e],{href:ne}=o||{},re=(0,q.useMemo)(()=>f?dn(n,d):ee,[f,n,d,ee]),{isDisabled:I,isDisabledLastCell:ie,disabledReason:ae,isCheckboxDisabled:L,checkboxDisabledReason:oe}=ln({rowDisabled:re,hasBlockingAction:O,blockingActionReason:k,isDisabledLastCellOption:o?.isDisabledLastCell}),se=()=>{if(I){x();return}m?.(n)},ce=Object.is(a,kn.Tree),R=(0,q.useMemo)(()=>dr(t,o?.childrenColumns),[t,o]),le=(0,q.useCallback)(e=>{e.stopPropagation(),j(e=>!e)},[]),ue=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&te(!0)},de=()=>te(!1),fe=e=>{I&&e.target.getAttribute(`data-row-disable`)!==`true`&&te(!1)},pe=!!r?.length&&h,me=(0,q.useMemo)(()=>({"--level":i,...v}),[i,v]),he=!!(!I&&(m||ne)),ge=y===F,_e=(0,q.useMemo)(()=>p(n),[p,n]);return{disabledReason:ae,rowStyles:me,isOpen:A,isShowConnector:ce,childrenColumns:R,rowId:F,rowRef:N,isDisabled:I,isDisabledLastCell:ie,isSelectable:l,isRenderCollapseButton:pe,handleToggle:le,rootRowElement:C,rootRowRef:T,isHovered:he,isActive:ge,mobileDisplayVariant:D,rowProps:{onClick:se,onMouseMove:fe},drawerProps:{open:b,onClose:S,title:`Заблокировано`},tooltipProps:{open:P,title:I?ae:void 0,onOpen:ue,onClose:de},checkboxProps:{checked:u,disabled:L,disabledReason:oe,onChange:_e},nestedChildrenProps:{isOpen:A}}}})))()}function hr(){return(hr=e((()=>{mr()})))()}var gr;function _r(){return(_r=e((()=>{gr=(e,t,n)=>e?!t||!t.includes(n):!1})))()}var vr,J,yr,br,xr,Sr,Cr,wr;function Tr(){return(Tr=e((()=>{vr=O(),re(),ae(),f(),w(),Se(),Xt(),en(),G(),ct(),zn(),Yn(),hr(),_r(),J=E(),yr=n(H.root,{variants:{isShowConnector:{true:H.showConnector},mobileDisplayVariant:{cards:H.mobileVariantCards,list:H.mobileVariantList},hasNestedChildren:{true:H.hasNestedChildren}}}),br=n(U.root,{variants:{isHovered:{true:U.hovered},isActive:{true:U.active}}}),xr=n(st.root,{variants:{hidden:{true:st.hidden}}}),Sr=n(ot.single,{variants:{isFirstCell:{true:ot.firstCell}}}),Cr=e=>{let{isOpen:n,isShowConnector:r,childrenColumns:i,rowId:a,handleToggle:o,checkboxProps:s,rowProps:c,isHovered:l,tooltipProps:u,nestedChildrenProps:d,isDisabled:f,isDisabledLastCell:p,isRenderCollapseButton:m,rowRef:h,rowStyles:g,drawerProps:_,disabledReason:v,isActive:y,isSelectable:b,mobileDisplayVariant:x,rootRowElement:S,rootRowRef:C}=pr(e),{className:w,row:T,options:E,variant:D,isInitialExpanded:O,expandedLevel:k,level:ee,nestedChildren:A,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,isVisibleCollapseButton:te,columns:F,emptyCellValue:ne,activeRowId:re,keyId:I,onSelectRow:ie,onRowClick:ae,sectionOffset:L,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:R,onRowLeave:le,style:ue,getRowDisabled:de,isNested:fe,...pe}=e,{isNotSelectable:me,href:he,target:ge}=E||{},_e=()=>!m&&(!b||me)?null:(0,J.jsxs)(J.Fragment,{children:[m&&(0,J.jsx)(Wn,{children:(0,J.jsx)(Gn,{variant:`text`,onClick:o,children:(0,J.jsx)(Kn,{$isActive:n})})}),b&&!me&&(0,J.jsx)(Un,{...xe(f),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,J.jsx)(Qt,{...s})})]}),ve=(0,vr.useCallback)(()=>{let e=(oe??F.length)-1,n=p?void 0:[e];return F?.map((e,r)=>{let i=`${a}-${r}`,o=(L??0)+r,s=gr(f,n,o),c=o===0;if(W(e)){let{label:n,children:r,hideTitleOnMobile:a,isHideOnMobile:o}=e;return(0,J.jsxs)(vr.Fragment,{children:[(0,J.jsx)(Jn,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:xr({hidden:a||o}),children:n}),r.map((e,n)=>{let r=`${i}-${n}`;return(0,J.jsx)(Hn,{row:T,cell:e,isHideOnMobile:o,emptyCellValue:ne,isDisabled:s,startAdornment:c&&n===0&&_e(),isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,className:t(z.grouped),rootRowElement:S,href:he,target:ge},r)})]},i)}return(0,J.jsx)(Hn,{className:Sr({isFirstCell:c}),row:T,cell:e,emptyCellValue:ne,startAdornment:c&&_e(),isDisabled:s,isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,rootRowElement:S,href:he,target:ge},i)})},[T,n,F,f,p,s.checked,s.disabled,s.disabledReason,oe,L,S]),ye=(0,vr.useCallback)(({key:e,...t})=>(0,J.jsx)(Cr,{keyId:I,...t,variant:D,isSelectable:b,isInitialExpanded:O,expandedLevel:k,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,isVisibleCollapseButton:te,activeRowId:re,columns:i,onSelectRow:ie,onRowClick:ae,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:R,onRowLeave:le,sectionOffset:L,getRowDisabled:de,isNested:!0},e),[I,D,b,O,k,j,M,L,oe,re,i,ie,ae,se,ce,R,le,de]);return(0,J.jsxs)(Bn,{className:t(w,yr({isShowConnector:r,mobileDisplayVariant:x,hasNestedChildren:!!A?.length})),style:g,...pe,ref:C,children:[(0,J.jsx)(N,{followCursor:!0,arrow:!1,...u,children:(0,J.jsx)(Vn,{"data-row-id":a,ref:h,onPointerEnter:()=>R?.(a),onPointerLeave:e=>le?.(a,e.nativeEvent),className:br({isHovered:l,isActive:y}),[at]:f,...c,children:ve()})}),(0,J.jsx)(Ln,{...d,data:A,keyId:I,level:ee,variant:D,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,renderRow:ye}),(0,J.jsx)(P,{..._,children:(0,J.jsx)(qn,{children:v})})]},`row-${a}`)},wr=(0,vr.memo)(Cr);try{wr.displayName=`Row`,wr.__docgenInfo={description:``,displayName:`Row`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/Row.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},nestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы`,name:`nestedChildren`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Флаг выбора текущей строки`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, строка вложенная и сама вычисляет блокировку`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк. Передаётся только строкам с дочерними элементами`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},emptyCellValue:{defaultValue:{value:`'-'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'-'`},type:{name:`ReactNode`}},options:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Дополнительные настройки строки`,name:`options`,required:!1,tags:{},type:{name:`DataGridRowOptions<TData>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Стили для строки`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}function Er(){return(Er=e((()=>{Tr(),ir()})))()}function Dr(){return(Dr=e((()=>{De(),Ee()})))()}var Or,kr,Ar;function jr(){return(jr=e((()=>{Or=O(),kr=E(),Ar=(0,Or.memo)(({index:e,renderRow:t,row:n})=>(0,kr.jsx)(kr.Fragment,{children:t(n,e)}));try{Ar.displayName=`CustomRowWrapper`,Ar.__docgenInfo={description:"Обёртка с `memo` для изоляции пользовательского `renderRow`.\n\nПри re-render родителя (`Body`, Virtuoso `Item`) без обёртки `renderRow(row, index)`\nвызывается заново на каждой строке и каждый раз создаёт новые React-elements, из‑за чего `memo` у дочерних компонентов\n(например, `DataGridCollapsibleRow`) не срабатывает.\n\n`CustomRowWrapper` повторно вызывает `renderRow` только когда изменились\n`index`, `row` или ссылка на `renderRow`.",displayName:`CustomRowWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`RenderRow`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}}},tags:{}}}catch{}})))()}function Mr(){return(Mr=e((()=>{jr()})))()}var Nr;function Pr(){return(Pr=e((()=>{a(),Nr={root:r(`data-grid__body`),disableMinHeight:r(`data-grid__body_disable-min-height`)}})))()}var Fr;function Ir(){return(Ir=e((()=>{s(),D(),V(),Pr(),Fr=y.ul`
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

  &.${Nr.disableMinHeight} {
    min-height: unset;
  }

  &.${B.bodyEmpty} {
    display: flex;
    align-items: center;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    scrollbar-gutter: unset;
    
    overflow: initial;

    width: 100%;
  }
`})))()}var Lr,Rr;function zr(){return(zr=e((()=>{Lr=O(),C(),Rr=({minDisplayRows:e})=>{let{components:t}=(0,Lr.useContext)(o),n=t?.dataGrid?.defaultProps?.disableMinHeight;return{disableMinHeight:n,bodyCssVars:!n&&e?{"--min-display-rows":e}:{}}}})))()}function Br(){return(Br=e((()=>{zr()})))()}var Vr,Hr,Ur,Wr;function Gr(){return(Gr=e((()=>{f(),w(),Mr(),Er(),ir(),Pr(),Ir(),Br(),Vr=E(),Hr=0,Ur=n(Nr.root,{variants:{disableMinHeight:{true:Nr.disableMinHeight}}}),Wr=({rows:e,selectedIds:n,rowsDisabled:r,getRowDisabled:i,minDisplayRows:a,keyId:o,noDataPlaceholder:s,className:c,renderRow:l,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._})=>{let{disableMinHeight:v,bodyCssVars:y}=Rr({minDisplayRows:a}),b=e.map((e,t)=>{let a=e[o],s=n.has(a),c=r.get(a),{children:v,options:y}=e,b=Array.isArray(v)&&v.length>0;return(0,Vr.jsx)(tr,{row:e,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:d,isSelected:s,disabledMode:c?.mode,disabledReason:c?.reason,children:l?(0,Vr.jsx)(Ar,{index:t,renderRow:l,row:e}):(0,Vr.jsx)(wr,{row:e,options:y,keyId:o,level:Hr,nestedChildren:v,isSelected:s,getRowDisabled:b?i:void 0,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._},a)},a)});return(0,Vr.jsx)(Fr,{className:t(c,Ur({disableMinHeight:v})),style:y,children:e.length?b:s})};try{Wr.displayName=`Body`,Wr.__docgenInfo={description:``,displayName:`Body`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/Body.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},selectedIds:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификаторы выбранных строк`,name:`selectedIds`,required:!0,tags:{},type:{name:`Set<unknown>`}},rowsDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Блокировки строк по идентификатору`,name:`rowsDisabled`,required:!0,tags:{},type:{name:`Map<unknown, DataGridRowDisabled>`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Массив данных для отображения`,name:`rows`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},minDisplayRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!0,tags:{},type:{name:`number`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!0,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!0,tags:{},type:{name:`(rowId: string, e: PointerEvent) => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{},type:{name:`(row: TData, index: number) => ReactNode`}}},tags:{}}}catch{}})))()}function Kr(){return(Kr=e((()=>{Gr()})))()}var Y;function qr(){return(qr=e((()=>{a(),Y={root:r(`data-grid__head-cell`),groupParent:r(`data-grid__head-cell_group-parent`),groupChild:r(`data-grid__head-cell_group-child`),singleColumn:r(`data-grid__head-cell_single-column`),alignLeft:r(`data-grid__head-cell_align-left`),alignCenter:r(`data-grid__head-cell_align-center`),alignRight:r(`data-grid__head-cell_align-right`),hasStartAdornment:r(`data-grid__head-cell_has-start-adornment`),sortable:r(`data-grid__head-cell_sortable`)}})))()}var Jr;function Yr(){return(Yr=e((()=>{Dr(),D(),qr(),Jr=y.div`
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

  .${Oe.iconWrapper}  {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var Xr;function Zr(){return(Zr=e((()=>{Xr=({gridPosition:e,field:t,isSortable:n,startAdornment:r,onSort:i})=>({hasStartAdornment:!!r,handleSortClick:()=>{t&&n&&i(t)},headCellCssVars:{"--grid-column-start":e?.start,"--grid-column-end":e?.end}})})))()}var Qr,$r,ei,ti;function ni(){return(ni=e((()=>{Qr=O(),Fe(),Ne(),Ie(),le(),f(),w(),qr(),Yr(),Zr(),$r=E(),ei=n(Y.root,{variants:{isSortable:{true:Y.sortable},align:{left:Y.alignLeft,center:Y.alignCenter,right:Y.alignRight},hasStartAdornment:{true:Y.hasStartAdornment}}}),ti=e=>{let{hasStartAdornment:n,handleSortClick:r,headCellCssVars:i}=Xr(e),{startAdornment:a,field:o,isSortable:s,align:c,label:l,sorting:u,className:d}=e,f=(0,Qr.useMemo)(()=>{if(!s)return null;if(u?.fieldId!==o)return(0,$r.jsx)(je,{});switch(u?.sort){case`asc`:return(0,$r.jsx)(Pe,{color:`primary`});case`desc`:return(0,$r.jsx)(Me,{color:`primary`});default:return(0,$r.jsx)(je,{})}},[u,s,o]);return(0,$r.jsxs)(Jr,{onClick:r,className:t(d,ei({isSortable:s,align:c,hasStartAdornment:n})),style:i,children:[a&&a,(0,$r.jsx)(R,{rowsCount:2,variant:`pointer`,component:`p`,children:l}),f]})};try{ti.displayName=`HeadCell`,ti.__docgenInfo={description:``,displayName:`HeadCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,methods:[],props:{onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Выравнивание содержимого ячейки по горизонтали`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`AlignVariant`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`string | number | symbol`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Позиция ячейки в сетке CSS Grid`,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}}},tags:{}}}catch{}})))()}function ri(){return(ri=e((()=>{ni(),qr()})))()}var ii,ai,oi;function si(){return(si=e((()=>{ii=O(),ri(),ai=E(),oi=({column:e,sorting:t,onSort:n,gridPosition:r,startAdornment:i})=>(0,ai.jsxs)(ii.Fragment,{children:[(0,ai.jsx)(ti,{sorting:t,label:e.label,onSort:n,className:Y.groupParent,gridPosition:r,startAdornment:i}),e.children.map(e=>(0,ai.jsx)(ti,{...e,onSort:n,className:Y.groupChild,startAdornment:e.columnHint},e.label))]},e.label);try{oi.displayName=`GroupColumns`,oi.__docgenInfo={description:``,displayName:`GroupColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,methods:[],props:{column:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`column`,required:!0,tags:{},type:{name:`DataGridGroupColumn<TData>`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ci(){return(ci=e((()=>{si()})))()}var li;function ui(){return(ui=e((()=>{D(),V(),li=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;
`})))()}var di,fi;function pi(){return(pi=e((()=>{ce(),ui(),di=E(),fi=({showCheckbox:e,columnHint:t,checkboxProps:n})=>!e&&!t?null:(0,di.jsxs)(di.Fragment,{children:[e&&(0,di.jsx)(li,{children:(0,di.jsx)(L,{...n})}),t]});try{fi.displayName=`HeadCellStartAdornment`,fi.__docgenInfo={description:``,displayName:`HeadCellStartAdornment`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,methods:[],props:{showCheckbox:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`showCheckbox`,required:!0,tags:{},type:{name:`boolean`}},columnHint:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`columnHint`,required:!1,tags:{},type:{name:`ReactNode`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`checkboxProps`,required:!0,tags:{},type:{name:`CheckboxProps`}}},tags:{}}}catch{}})))()}function mi(){return(mi=e((()=>{pi()})))()}var hi,gi;function _i(){return(_i=e((()=>{ri(),hi=E(),gi=({field:e,label:t,isSortable:n,align:r,sorting:i,onSort:a,startAdornment:o})=>(0,hi.jsx)(ti,{sorting:i,field:e,label:t,isSortable:n,align:r,startAdornment:o,onSort:a,className:Y.singleColumn});try{gi.displayName=`SingleColumn`,gi.__docgenInfo={description:``,displayName:`SingleColumn`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,methods:[],props:{field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`string | number | symbol`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "right" | "left"`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function vi(){return(vi=e((()=>{_i()})))()}var yi;function bi(){return(bi=e((()=>{G(),yi=e=>{let{positionsMap:t}=e.reduce((e,t)=>{let n=W(t)?t.children.length:1,r=e.currentLine,i=r+n,a=W(t)?t.label:t.field||t.label||``;return e.positionsMap.set(a,{start:r,end:i}),e.currentLine=i,e},{positionsMap:new Map,currentLine:1});return t}})))()}var xi,Si;function Ci(){return(Ci=e((()=>{xi=O(),G(),bi(),Si=({columns:e,onSort:t,sorting:n,uncheckedRowsCount:r,rowsCount:i,onSelectAllRows:a})=>{let o=(0,xi.useMemo)(()=>!r&&i>0,[r,i]),s=(0,xi.useMemo)(()=>r>0&&r<i,[r,i]),c=!i;return{checkboxProps:(0,xi.useMemo)(()=>({checked:o,disabled:c,indeterminate:s,onChange:a}),[o,c,s,a]),handleSort:(0,xi.useCallback)(e=>{if(!t)return;let r=n?.fieldId===e;if(r&&n?.sort===`asc`)return t({fieldId:e,sort:`desc`});if(r&&n?.sort===`desc`)return t(void 0);t({fieldId:e,sort:`asc`})},[n,t]),gridPositions:(0,xi.useMemo)(()=>yi(e),[e]),headerCssVars:(0,xi.useCallback)(e=>e?{"--grid-column-start":e.start,"--grid-column-end":e.end}:{},[]),hasGroupedColumns:e.some(W)}};try{Si.displayName=`useLogic`,Si.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/useLogic/useLogic.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function wi(){return(wi=e((()=>{Ci()})))()}var Ti;function Ei(){return(Ei=e((()=>{G(),Ti=({column:e,index:t,sectionOffset:n,isSelectable:r,isHideSelectAll:i})=>{let{label:a,align:o,columnHint:s}=e;return{label:a,align:o,columnHint:s,field:W(e)?void 0:e.field,sortable:W(e)?void 0:e.sortable,showCheckbox:(n??0)+t===0&&r&&!i}}})))()}var Di,Oi;function ki(){return(ki=e((()=>{G(),ci(),mi(),vi(),wi(),Ei(),Di=E(),Oi=e=>{let{checkboxProps:t,handleSort:n,gridPositions:r}=Si(e),{columns:i,isSelectable:a,sorting:o,isHideSelectAll:s,sectionOffset:c}=e;return(0,Di.jsx)(Di.Fragment,{children:i.map((e,i)=>{let{label:l,align:u,columnHint:d,field:f,sortable:p,showCheckbox:m}=Ti({column:e,index:i,sectionOffset:c,isSelectable:a,isHideSelectAll:s}),h=m||d?(0,Di.jsx)(fi,{showCheckbox:m,columnHint:d,checkboxProps:t}):void 0;if(W(e)){let t=r.get(e.label);return(0,Di.jsx)(oi,{column:e,sorting:o,onSort:n,gridPosition:t,startAdornment:h},e.label)}return(0,Di.jsx)(gi,{sorting:o,field:f,label:l,isSortable:p,align:u,startAdornment:h,onSort:n},l)})})};try{Oi.displayName=`HeadColumns`,Oi.__docgenInfo={description:``,displayName:`HeadColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var Ai;function ji(){return(ji=e((()=>{s(),D(),Ai=y.header`
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
`})))()}var Mi,Ni,Pi;function Fi(){return(Fi=e((()=>{f(),w(),V(),G(),ki(),ji(),Mi=E(),Ni=n(B.header,{variants:{isGroup:{true:B.hasGroupedColumns}}}),Pi=e=>{let{columns:n,headerProps:r,addon:i,...a}=e;return(0,Mi.jsxs)(Ai,{...r,role:`heading`,className:t(Ni({isGroup:n.some(W)}),r?.className),children:[(0,Mi.jsx)(Oi,{...a,columns:n}),i]})};try{Pi.displayName=`Head`,Pi.__docgenInfo={description:``,displayName:`Head`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Props шапки таблицы, в том числе ref`,name:`headerProps`,required:!1,tags:{},type:{name:`DataGridHeaderProps`}},addon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Слот поверх колонок шапки, например полоски drag plugin изменения ширины`,name:`addon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Ii(){return(Ii=e((()=>{Fi()})))()}var Li,Ri,zi,Bi;function Vi(){return(Vi=e((()=>{de(),fe(),Ce(),D(),Li=y.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({theme:e})=>e.palette.background.element};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Ri=y(te)`
  border-width: 1px;
`,zi=y.div`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.fab};
  left: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Bi=y(pe)`
  height: 2px;

  .${ue.barColorPrimary} {
    background-color: ${({theme:e})=>e.palette.primary[800]};
  }
`})))()}var Hi,Ui;function Wi(){return(Wi=e((()=>{Vi(),Hi=E(),Ui=({isLoading:e=!1,isDisabled:t=!1,isVisibleDivider:n=!0})=>(0,Hi.jsxs)(Hi.Fragment,{children:[(e||t)&&(0,Hi.jsx)(Li,{}),(0,Hi.jsxs)(zi,{children:[e&&(0,Hi.jsx)(Bi,{}),!e&&n&&(0,Hi.jsx)(Ri,{})]})]});try{Ui.displayName=`Loader`,Ui.__docgenInfo={description:``,displayName:`Loader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,methods:[],props:{isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isVisibleDivider:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isVisibleDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Gi(){return(Gi=e((()=>{Wi()})))()}var Ki,qi,Ji,Yi;function Xi(){return(Xi=e((()=>{D(),V(),Ki=y.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  &.${B.mobileVariantCards} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,qi=y.div`
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

  &.${B.mobileVariantCards} {
    padding: ${({theme:e})=>e.spacing(5,4,4)};

    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};
  }
`,Ji=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Yi=y.div`
  padding-top: ${({theme:e})=>e.spacing(2)};
`})))()}var Zi,Qi,$i,ea;function ta(){return(ta=e((()=>{ve(),w(),V(),Xi(),Zi=E(),Qi=n(it.list,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),$i=n(it.item,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),ea=({cellsCount:e,mobileDisplayVariant:t,rowsCount:n})=>(0,Zi.jsx)(Ki,{className:Qi({mobileDisplayVariant:t}),children:Array.from({length:n},(n,r)=>(0,Zi.jsxs)(qi,{className:$i({mobileDisplayVariant:t}),children:[Array.from({length:e-1},(e,t)=>(0,Zi.jsxs)(Ji,{children:[(0,Zi.jsx)(A,{variant:`rounded`,height:20}),(0,Zi.jsx)(A,{variant:`rounded`,height:16,width:`50%`})]},t)),(0,Zi.jsx)(Yi,{children:(0,Zi.jsx)(A,{variant:`rounded`,width:`100%`,height:40})})]},r))});try{ea.displayName=`MobileSkeleton`,ea.__docgenInfo={description:``,displayName:`MobileSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,methods:[],props:{cellsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`cellsCount`,required:!0,tags:{},type:{name:`number`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!0,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function na(){return(na=e((()=>{ta()})))()}var ra,ia,aa;function oa(){return(oa=e((()=>{ra=O(),u(),C(),T(),ia=E(),aa=({title:e=`Нет\xA0данных`,imgAlt:t=e,action:n,size:r=`small`})=>{let{imagesMap:{noDataImgSrc:i}}=(0,ra.useContext)(o);return(0,ia.jsx)(c,{title:e,imgSrc:i,size:r,Actions:n?(0,ia.jsx)(b,{onClick:n.onClick,"aria-label":n.text,children:n.text}):void 0,imgAlt:t})};try{aa.displayName=`NoData`,aa.__docgenInfo={description:``,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,methods:[],props:{title:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Заголовок`,name:`title`,required:!1,tags:{default:`'Нет\\u00a0данных'
Добавлен неразрывный пробел \`\\u00a0\`,
так как без изображения текст форматируется в 2 строки`},type:{name:`string`}},imgAlt:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`альтернативный текст в случае, если изображение по какой-то причине не загрузилось`,name:`imgAlt`,required:!1,tags:{default:`эквивалентно title`},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Текст и обработчик для кнопки действия`,name:`action`,required:!1,tags:{},type:{name:`{ text: string; onClick: () => void; }`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Задает общий размер компонента`,name:`size`,required:!1,tags:{default:`'small'`},type:{name:`enum`,raw:`PlaceholderSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function sa(){return(sa=e((()=>{oa()})))()}var ca;function la(){return(la=e((()=>{D(),V(),ca=y.div`
  display: flex;
  grid-column: calc(var(--left-columns-count) + 1) / calc(var(--right-columns-count) * -1 - 1);
  flex-direction: column;

  min-width: 0;

  background-color: ${({theme:e})=>e.palette.background.default};

  & .${B.header} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab-1};
    top: 0;

    background-color: ${({theme:e})=>e.palette.background.default};
  }

  & .${B.body} {
    scrollbar-gutter: unset;
  }

  &.${B.pinnedSectionNoData} {
    grid-column: 1 / -1;
  }

  &.${B.leftPinnedSection} {
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

    & .${B.header} {
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

  &.${B.rightPinnedSection} {
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

    & .${B.header} {
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
`})))()}var ua,da;function fa(){return(fa=e((()=>{ua=O(),f(),V(),on(),an(),da=({position:e,isNoData:n,columns:r})=>{let i=(0,ua.useMemo)(()=>t({[B.leftPinnedSection]:e===`left`,[B.rightPinnedSection]:e===`right`,[B.pinnedSectionNoData]:n&&e===`center`}),[]),a=n&&e!==`center`||!r||r.length===0;return{classnames:i,gridColumns:a?``:rn(K(r)),shouldNotRenderSection:a}}})))()}function pa(){return(pa=e((()=>{fa()})))()}var ma,ha;function ga(){return(ga=e((()=>{Kr(),V(),Ii(),la(),pa(),ma=E(),ha=({columns:e,position:t,isNoData:n,headProps:r,bodyProps:i,sectionOffset:a})=>{let{classnames:o,gridColumns:s,shouldNotRenderSection:c}=da({position:t,isNoData:n,columns:e});return c?null:(0,ma.jsxs)(ca,{className:o,style:{"--data-grid-columns":s},children:[!n&&(0,ma.jsx)(Pi,{...r,columns:e,sectionOffset:a}),(0,ma.jsx)(Wr,{...i,columns:e,sectionOffset:a,className:B.body})]})};try{ha.displayName=`Section`,ha.__docgenInfo={description:``,displayName:`Section`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/Section.tsx`,methods:[],props:{bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для секции`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},position:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Позиция секции`,name:`position`,required:!0,tags:{},type:{name:`enum`,raw:`"center" | "right" | "left"`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:``,name:`sectionOffset`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function _a(){return(_a=e((()=>{ga()})))()}var va;function ya(){return(ya=e((()=>{D(),V(),va=y.div`
  overflow: auto;
  display: grid;
  grid-template-columns: var(--data-grid-columns);

  width: 100%;
  height: 100%;

  & .${B.header} {
    padding-right: unset;
  }

  &.${B.disabled} {
    pointer-events: none;

    background: ${({theme:e})=>e.palette.background.element};
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    mix-blend-mode: luminosity;
  }
`})))()}var ba,xa;function Sa(){return(Sa=e((()=>{ba=O(),on(),xa=({sections:e})=>{let t=e.find(e=>e.position===`left`)?.columns,n=e.find(e=>e.position===`right`)?.columns,r={"--left-columns-count":t?K(t).length:0,"--right-columns-count":n?K(n).length:0},{sectionOffsets:i,totalColumnsCount:a}=(0,ba.useMemo)(()=>{let t={},n=0;return e.forEach(e=>{t[e.position]=n,n+=K(e.columns).length}),{sectionOffsets:t,totalColumnsCount:n}},[e]);return{pinnedContainerStyles:r,sectionOffsets:i,totalColumnsCount:a}}})))()}function Ca(){return(Ca=e((()=>{Sa()})))()}var wa,Ta;function Ea(){return(Ea=e((()=>{Se(),_a(),ya(),Ca(),wa=E(),Ta=({className:e,isDisabled:t,headProps:n,bodyProps:r,sections:i,isNoData:a})=>{let{pinnedContainerStyles:o,sectionOffsets:s,totalColumnsCount:c}=xa({sections:i});return(0,wa.jsx)(va,{className:e,...xe(t),style:o,children:i.map(({columns:e,position:t})=>(0,wa.jsx)(ha,{columns:e,position:t,sectionOffset:s[t],bodyProps:{...r,totalColumnsCount:c},headProps:n,isNoData:a},t))})};try{Ta.displayName=`PinnedSections`,Ta.__docgenInfo={description:``,displayName:`PinnedSections`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,methods:[],props:{sections:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация закрепленных секций`,name:`sections`,required:!0,tags:{},type:{name:`PinnedSection<TData>[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Da(){return(Da=e((()=>{Ea()})))()}var Oa,ka,Aa,ja;function Ma(){return(Ma=e((()=>{D(),Pr(),We(),V(),ri(),ct(),Oa=y.div`
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

  &.${B.isAllowHorizontalScroll} {
    overflow: auto hidden;

    & .${B.wrapper} {
      overflow: auto hidden;
    }
  }

  &.${B.hasPinnedSections} {
    overflow: hidden;
  }

  &.${B.hasGroupedColumns} {
    & .${B.header} {
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
    &.${B.overflowed} {
      & .${B.rightPinnedSection} {
         box-shadow: -3px 0 4px 0 #63636326;
      }

      & .${B.leftPinnedSection} {
         box-shadow: 3px 0 4px 0 #63636326;
      }
    }
  }

  &.${B.gridViewFull} {
    & .${B.header} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-top-left-radius: ${({theme:e})=>e.shape.medium};
      border-top-right-radius: ${({theme:e})=>e.shape.medium};
    }

    & .${z.root},
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

    & .${H.root}:last-of-type .${z.root} {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    &:not(.${B.hasPinnedSections}) .${B.body},
    & .${B.pinnedSections} {
      container-name: data-grid-scroll-container;
      container-type: scroll-state;
    }

    /* Прогрессивное улучшение. Убираем нижнюю границу последней строки когда scrollbar находится в нижней точке. Для того что бы избежать двойного разделителя снизу */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @container data-grid-scroll-container scroll-state((scrollable: y) and (not (scrollable: bottom))) {
      & .${H.root}:last-of-type .${z.root} {
        border-bottom: none;
      }
    }

    & .${H.root}:first-of-type .${z.root} {
      border-top: none;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;

    & .${B.loadingPlaceholder} {
      justify-content: flex-start;
    }

    &.${B.hasPinnedSections} {
      overflow: initial;
    }

    &.${B.isAllowHorizontalScroll} {
      overflow: initial;

      & .${B.wrapper} {
        overflow: initial;
      }
    }

    &.${B.gridViewFull} {
      & .${z.root}, & .${Y.root} {
        border: none;
      }

      & .${H.root}:last-of-type .${z.root} {
        border-bottom: none;
      }
    }

    &.${B.mobileVariantCards} {
    
      & .${B.wrapper} {
        margin: ${({theme:e})=>e.spacing(0,4,4)};
      }

      & .${Nr.root} {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing(2)};
      }
    }
  }

  &.${B.hasMassActions} {
    /* Резерв места под панель массовых действий убирается одновременно с анимацией её скрытия, чтобы строки не прыгали */
    & .${B.wrapper} .${B.body},
    & .${B.pinnedSections} {
      transition: padding-bottom
        ${({theme:e})=>e.transitions.duration.leavingScreen}ms
        ${({theme:e})=>e.transitions.easing.easeIn};
    }

    /* Пока панель массовых действий открыта, последние строки не должны перекрываться ею */
    &.${B.massActionsOpen} {
      & .${B.wrapper} .${B.body},
      & .${B.pinnedSections} {
        padding-bottom: var(--mass-actions-reserved-space);
      }
    }
  }
`,ka=y.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 100%;

  /* Браузер не считает раскладку строк вне области прокрутки: drag полоски resize не пересчитывает невидимые строки.
     До первой отрисовки высота строки — заглушка, после браузер запоминает реальную */
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    & .${U.root} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      content-visibility: auto;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      contain-intrinsic-block-size: auto ${44}px;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;
  }
`,Aa=y(ka)`
  pointer-events: none;

  background: ${({theme:e})=>e.palette.background.element};
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mix-blend-mode: luminosity;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    opacity: 0.7;
  }
`,ja=y.div`
  position: relative;

  height: 0;
`})))()}var Na,Pa;function Fa(){return(Fa=e((()=>{Na=O(),ct(),Pa=({hasPinnedColumns:e=!1})=>{let t=(0,Na.useRef)(new Map),n=(0,Na.useRef)(null),r=(0,Na.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>{e.classList.contains(H.hover)||e.classList.add(H.hover)})},[e]),i=(0,Na.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>e.classList.remove(H.hover))},[e]);return{rowsMapRef:t,registerRowElement:(0,Na.useCallback)((n,r)=>{if(!e)return;let i=t.current;i.has(n)||i.set(n,new Set),i.get(n).add(r)},[e]),unregisterRowElement:(0,Na.useCallback)((n,r)=>{if(!e)return;let i=t.current,a=i.get(n);a&&(a.delete(r),a.size===0&&i.delete(n))},[e]),onRowEnter:(0,Na.useCallback)(t=>{e&&n.current!==t&&(n.current&&i(n.current),r(t),n.current=t)},[e,r,i]),onRowLeave:(0,Na.useCallback)((t,r)=>{e&&(r.relatedTarget?.closest(`[data-row-id="${t}"]`)||(i(t),n.current=null))},[e,i])}}})))()}function Ia(){return(Ia=e((()=>{Fa()})))()}var La,Ra;function za(){return(za=e((()=>{La=O(),Ra=e=>{let t=(0,La.useRef)(new Set);(0,La.useEffect)(()=>{let n=e.filter(e=>!t.current.has(e));n.length&&(n.forEach(e=>t.current.add(e)),console.warn(`UIKIT. DataGrid: getRowDisabled вернул блокировку без reason для строк: ${n.join(`, `)}`))},[e])}})))()}function Ba(){return(Ba=e((()=>{za()})))()}var Va,Ha;function Ua(){return(Ua=e((()=>{Va=O(),he(),Sn(),bn(),on(),Ha=({tableId:e,columns:t,isEnabled:n})=>{let r=n&&!e,i=(0,Va.useMemo)(()=>r?yn(K(t)):``,[r,t]);return r?xn(me?window.location.pathname:``,i):e??``}})))()}function Wa(){return(Wa=e((()=>{Ua()})))()}var Ga;function Ka(){return(Ka=e((()=>{Ga=(e,t)=>{if(typeof e==`function`){e(t);return}e&&(e.current=t)}})))()}var qa,Ja;function Ya(){return(Ya=e((()=>{qa=O(),Ka(),gn(),vn(),Wa(),Ja=({plugins:e,tableId:t,columns:n,headerProps:r})=>{e&&hn(e);let i=_n(e,`resize`);i?.assertConfig(n);let a=Ha({tableId:t,columns:n,isEnabled:!!e?.length}),o=(0,qa.useRef)(void 0),s=(0,qa.useRef)(null),c=(0,qa.useRef)(null),l=(0,qa.useRef)(r?.ref);l.current=r?.ref;let u=()=>{let e=c.current;if(e){if(o.current){e.style.setProperty(`--data-grid-columns`,o.current);return}e.style.removeProperty(`--data-grid-columns`)}},d=(0,qa.useCallback)(e=>{s.current=e,Ga(l.current,e)},[]);return{resizePlugin:i,wrapperRef:(0,qa.useCallback)(e=>{c.current=e,u()},[]),headAddonProps:{columns:n,tableId:a,headRef:s,onGridColumnsChange:(0,qa.useCallback)(e=>{o.current=e,u()},[])},headerProps:{...r,ref:d}}}})))()}function Xa(){return(Xa=e((()=>{Ya()})))()}function Za(){return(Za=e((()=>{Ia(),Ba(),Wa(),Xa()})))()}var Qa,$a;function eo(){return(eo=e((()=>{Qa=O(),Ae(),ee(),V(),$a=({containerRef:e,isLoading:t,columns:n,rows:r,isNoScrollToTop:i=!1,mobileDisplayVariant:a})=>{let{isMobile:o}=k(),s=(0,Qa.useRef)(null),c=(0,Qa.useMemo)(()=>n?.filter(e=>!e.isHideOnMobile).length??0,[n]);return(0,Qa.useEffect)(()=>{!t&&r&&r.length>0&&s.current===null&&(s.current=r.length)},[r,t]),(0,Qa.useLayoutEffect)(()=>{if(!(!o||i)&&t&&e?.current){let t=e.current.closest(`.${ke.root}`);t&&t.scrollTo({top:0,behavior:`instant`})}},[e,t,o,i]),{isMobile:o,mobileSkeletonProps:{cellsCount:c,rowsCount:s.current??5,mobileDisplayVariant:a}}}})))()}function to(){return(to=e((()=>{eo()})))()}var no,ro;function io(){return(io=e((()=>{i(),G(),no=e=>{let t=v.getInstance(),n=e.map(e=>e.pinned??`center`),r=n.indexOf(`right`);r!==-1&&n.slice(r).some(e=>e!==`right`)&&t.logError(`DataGrid`,`Колонки с pinned="right" должны идти непрерывным блоком в конце`);let i=n.lastIndexOf(`left`);i!==-1&&n.slice(0,i+1).some(e=>e!==`left`)&&t.logError(`DataGrid`,`Колонки с pinned="left" должны идти непрерывным блоком в начале`),e.forEach(e=>{W(e)&&e.children.some(e=>e.pinned)&&t.logError(`DataGrid`,`pinned должен быть указан у родительской колонки, а не у дочерних элементов`)})},ro=e=>{no(e);let t=e.reduce((e,t)=>{let n=t.pinned??`center`;return e[n]||(e[n]=[]),e[n].push(t),e},{});return{sections:[{position:`left`,columns:t.left||[]},{position:`center`,columns:t.center||[]},{position:`right`,columns:t.right||[]}]}}})))()}var ao;function oo(){return(oo=e((()=>{ao=e=>{e.forEach(e=>{let t=0;e.forEach(e=>{e.style.height=``}),e.forEach(e=>{let n=e.offsetHeight;n>t&&(t=n)}),e.forEach(e=>{e.style.height=`${t}px`})})}})))()}var so,co;function lo(){return(lo=e((()=>{so=O(),ee(),V(),Ia(),io(),oo(),co=({isLoading:e,columns:t})=>{let n=(0,so.useRef)(null),{isMobile:r}=k(),i=(0,so.useMemo)(()=>t.some(e=>e.pinned),[t]),{rowsMapRef:a,...o}=Pa({hasPinnedColumns:i&&!r}),s=CSS.supports(`container-type`,`scroll-state`),c=(0,so.useCallback)(e=>e?e.scrollWidth>e.clientWidth:!1,[]),{sections:l}=(0,so.useMemo)(()=>ro(t),[t]);return(0,so.useLayoutEffect)(()=>{if(e||!i||r||typeof window>`u`)return;let t=new ResizeObserver(()=>{ao(a.current),!s&&(c(n.current)?n.current?.classList.add(B.overflowed):n.current?.classList.remove(B.overflowed))});if(n.current)return t.observe(n.current),()=>{t.disconnect()}},[i,e,r]),{containerRef:n,rowHoverProps:o,sections:l,hasPinnedColumns:i}}})))()}function uo(){return(uo=e((()=>{lo()})))()}function fo(){return(fo=e((()=>{to(),uo()})))()}var po;function mo(){return(mo=e((()=>{po=e=>{let t=e.some(({minWidth:e})=>!!e),n=e.every(({minWidth:e})=>!!e);return t&&!n&&console.error(`UIKIT. DataGrid: Необходимо задать minWidth для всех колонок`),n}})))()}var X,ho;function go(){return(go=e((()=>{X=O(),C(),se(),Ue(),V(),An(),Za(),cn(),nn(),on(),an(),G(),mn(),fo(),mo(),ho=({keyId:e,columns:t,rows:n=[],variant:r,tree:i,subrows:a,selectedRows:s=[],isLoading:c,isDisabled:l,getRowDisabled:u,mobileDisplayVariant:d=r===`subrows`?`cards`:`list`,onSelectRow:f,isError:p,onRetry:m,errorMsg:h,isHideSelectAll:g,isHideHeaderIfNoData:_=!1,sorting:v,className:y,onSort:b,maxHeight:x,gridViewMode:S=`standard`,massActions:C,plugins:w,tableId:T,headerProps:E})=>{let D=oe(),O=!!f,k=c||l,{imagesMap:ee}=(0,X.useContext)(o),A=(0,X.useRef)(s);(0,X.useEffect)(()=>{A.current=s},[s]);let j=(0,X.useRef)([]);(0,X.useEffect)(()=>{c||(j.current=n)},[n,c]);let M=(0,X.useCallback)(()=>n.length<=1?t.map(e=>({...e,sortable:!1})):t,[t,n]),N=c?j.current:n,P=!N.length,{containerRef:te,rowHoverProps:F,sections:ne,hasPinnedColumns:re}=co({isLoading:c,columns:M()}),{isMobile:I,mobileSkeletonProps:ie}=$a({containerRef:te,isLoading:c,columns:K(M()),rows:n,isNoScrollToTop:c&&P,mobileDisplayVariant:d}),ae=(0,X.useMemo)(()=>{let e=Object.is(r,kn.Subrows)?{...a,isInitialExpanded:!0}:i;return I?{...e,expandedLevel:1,initialVisibleChildrenCount:1}:e},[r,a,i,I]),{rowsDisabled:L,idsWithoutReason:se}=(0,X.useMemo)(()=>pn(N,e,u),[N,e,u]);Ra(se);let ce=(0,X.useMemo)(()=>new Set(s.map(t=>t[e])),[s,e]),R=(0,X.useMemo)(()=>N.filter(t=>!t.options?.isNotSelectable&&!L.get(t[e])),[N,L,e]),le=(0,X.useMemo)(()=>rn(K(t)),[t]),{resizePlugin:ue,wrapperRef:de,headAddonProps:fe,headerProps:pe}=Ja({plugins:w,tableId:T,columns:t,headerProps:E}),me=po(K(t)),he=(0,X.useMemo)(()=>R.filter(t=>!ce.has(t[e])).length,[R,ce,e]),ge=t=>{if(!f)return;if(t.target.checked)return f(Be([...A.current,...R],t=>t[e]));let n=new Set(N.map(t=>t[e]));f(A.current.filter(t=>!n.has(t[e])))},_e=(0,X.useCallback)(t=>n=>{if(f){if(n.target.checked)return f([...A.current,t]);f(A.current.filter(n=>n[e]!==t[e]))}},[]),ve=t.some(W),ye=ve?`full`:S,be=_&&P||ve&&P,xe=(0,X.useMemo)(()=>({isLoading:c&&P||I&&c,isError:p&&P,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[h||``],imgSrc:ee.defaultErrorImgSrc,onRetry:m},isSmoothLoading:!1,loadingPlaceholderClassname:B.loadingPlaceholder}),[c,p,P,h,m,ee]),Se=tn({maxHeight:x,gridColumns:le}),Ce=!!C;return{hasMassActions:Ce,isMassActionsOpen:sn({hasMassActions:Ce,selectedRowsCount:s.length,isMobile:I}),resizePlugin:ue,wrapperRef:de,headAddonProps:fe,dataGridClassName:y,containerCssVars:Se,isDataGridDisabled:k,treeRenderConfig:ae,renderRows:N,isAllowHorizontalScroll:me,isHideHead:be,hasPinnedColumns:re,contentStateProps:xe,rowHoverProps:F,isMobile:I,containerRef:te,isNoData:P,gridViewMode:ye,headColumns:M(),isLoading:c,mobileSkeletonProps:ie,hasGroupedColumns:ve,headProps:{rowsCount:R.length,uncheckedRowsCount:he,isSelectable:O,onSelectAllRows:ge,isHideSelectAll:g,sorting:v,onSort:b},headerProps:pe,bodyProps:{isSelectable:O,selectedIds:ce,rowsDisabled:L,getRowDisabled:u,onSelectRow:_e},mobileDisplayVariant:d,sections:ne,isSelfContained:d===`cards`,loaderProps:{isLoading:!D&&c,isVisibleDivider:!!n.length,isDisabled:l}}};try{ho.displayName=`useLogic`,ho.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/useLogic/useLogic.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!1,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},isHideHeaderIfNoData:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:{value:`variant === 'subrows' ? 'cards' : 'list'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},plugins:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Подключаемые возможности таблицы.`,name:`plugins`,required:!1,tags:{example:`<DataGrid plugins={[ResizePlugin]} />`},type:{name:`ResizePlugin[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Id таблицы для сохранения пользовательских настроек plugins в localStorage.
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}function _o(){return(_o=e((()=>{go()})))()}var vo,Z,yo,bo,xo,So;function Co(){return(Co=e((()=>{vo=O(),C(),be(),s(),f(),w(),Se(),Kr(),V(),Bt(),An(),Ii(),Gi(),na(),sa(),Da(),Ma(),_o(),Z=E(),yo=n(B.pinnedSections,{variants:{isDisabled:{true:B.disabled}}}),bo=n(B.root,{variants:{hasMassActions:{true:B.hasMassActions},isMassActionsOpen:{true:B.massActionsOpen},hasPinnedColumns:{true:B.hasPinnedSections},isAllowHorizontalScroll:{true:B.isAllowHorizontalScroll},gridViewMode:{full:B.gridViewFull,standard:B.gridViewStandard},hasGroupedColumns:{true:B.hasGroupedColumns},mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList},isSelfContained:{true:g}}}),xo=n(B.body,{variants:{isNoData:{true:B.bodyEmpty}}}),So=e=>{let{dataGridClassName:n,isDataGridDisabled:r,treeRenderConfig:i,headColumns:a,headProps:s,bodyProps:c,loaderProps:l,renderRows:u,isAllowHorizontalScroll:d,isHideHead:f,hasPinnedColumns:p,contentStateProps:m,rowHoverProps:h,containerRef:g,sections:_,isNoData:v,isMobile:y,mobileSkeletonProps:b,isLoading:x,containerCssVars:S,hasGroupedColumns:C,gridViewMode:w,mobileDisplayVariant:T,isSelfContained:E,isMassActionsOpen:D,hasMassActions:O,resizePlugin:k,wrapperRef:ee,headAddonProps:A,headerProps:j}=ho(e),{emptySymbol:M}=(0,vo.useContext)(o),{columns:N,selectedRows:P=[],onSelectRow:te,minDisplayRows:F=10,variant:ne=kn.Tree,footer:re,massActions:I,noDataPlaceholder:ie,subrows:ae,keyId:L,activeRowId:oe,emptyCellValue:se=M,onRowClick:ce,noDataOptions:R,isTabularNums:le,renderRow:ue,renderLink:de}=e,{moreButtonColumnPosition:fe=1,isVisibleCollapseButton:pe=!0}=ae||{},{isInitialExpanded:me=!1,expandedLevel:he=1,initialVisibleChildrenCount:ge=2}=i||{},_e=r?Aa:ka,ve=(0,vo.useCallback)(()=>x?null:ie||(0,Z.jsx)(aa,{...R}),[ie,R,x]),be={...c,keyId:L,minDisplayRows:F,rows:u,variant:ne,emptyCellValue:se,isInitialExpanded:me,expandedLevel:he,initialVisibleChildrenCount:ge,moreButtonColumnPosition:fe,isVisibleCollapseButton:pe,noDataPlaceholder:ve(),onRowClick:ce,...h,renderRow:ue};return(0,Z.jsx)(Lt,{isLoading:x,isTabularNums:le,emptyCellValue:se,activeRowId:oe,keyId:L,columns:N,onRowClick:ce,mobileDisplayVariant:T,renderLink:de,selectedRows:P,onSelectRow:te,isMassActionsOpen:D,children:(0,Z.jsxs)(Oa,{ref:g,style:S,className:t(n,bo({isAllowHorizontalScroll:d,hasPinnedColumns:p,gridViewMode:w,hasGroupedColumns:C,mobileDisplayVariant:T,isSelfContained:E,hasMassActions:O,isMassActionsOpen:D})),children:[!p||y?(0,Z.jsxs)(_e,{ref:ee,...xe(r),className:B.wrapper,children:[!f&&(0,Z.jsx)(Pi,{...s,headerProps:j,columns:a,addon:k&&!y&&(0,Z.jsx)(k.HeadAddon,{...A})}),(0,Z.jsx)(ye,{...m,loadingContent:y&&(0,Z.jsx)(ea,{...b}),children:(0,Z.jsx)(Wr,{...be,activeRowId:oe,columns:N,className:xo({isNoData:v})})})]}):(0,Z.jsx)(ye,{...m,children:(0,Z.jsx)(Ta,{sections:_,className:yo({isDisabled:r}),isDisabled:r,headProps:s,bodyProps:be,isNoData:v})}),(0,Z.jsx)(Ui,{...l}),I&&(0,Z.jsx)(ja,{children:I}),re&&re]})})};try{So.displayName=`DataGrid`,So.__docgenInfo={description:``,displayName:`DataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},isHideHeaderIfNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},plugins:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Подключаемые возможности таблицы.`,name:`plugins`,required:!1,tags:{example:`<DataGrid plugins={[ResizePlugin]} />`},type:{name:`ResizePlugin[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Id таблицы для сохранения пользовательских настроек plugins в localStorage.
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}var wo,To;function Eo(){return(Eo=e((()=>{a(),wo=`resize`,To={handle:r(`data-grid__resize-handle`),handleActive:r(`data-grid__resize-handle_active`)}})))()}var Do;function Oo(){return(Oo=e((()=>{G(),Do=e=>{if(e.some(W))throw Error(`DataGrid: ResizePlugin не поддерживает группировку колонок`);if(e.some(({pinned:e})=>e))throw Error(`DataGrid: ResizePlugin не поддерживает pinned-колонки`);e.forEach((e,t)=>{if(!(W(e)||e.minWidth&&Number.parseFloat(e.minWidth)>0))throw Error(e.field===void 0?`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке с индексом ${t}`:`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке "${String(e.field)}"`)})}})))()}var ko;function Ao(){return(Ao=e((()=>{ko=e=>{let t=e.reduce((e,t)=>e+t,0);return t===0?e.map(()=>1/e.length):e.map(e=>e/t)}})))()}var jo;function Mo(){return(Mo=e((()=>{jo=e=>{let t=0;return e.slice(0,-1).map(e=>(t+=e,t))}})))()}var No;function Po(){return(Po=e((()=>{No=e=>e.map(({minWidth:e})=>e?Number.parseFloat(e):0)})))()}var Fo;function Io(){return(Io=e((()=>{Fo=({widthsList:e,minWidthsList:t})=>{let n=Math.min(...e);return e.map((e,r)=>`minmax(${t[r]}px, ${e/n}fr)`).join(` `)}})))()}var Lo;function Ro(){return(Ro=e((()=>{Le(),Lo=(e,t)=>Re(`DataGrid`,`${e}:${t}`)})))()}var zo;function Bo(){return(Bo=e((()=>{zo=e=>e.split(` `).filter(Boolean).map(e=>Number.parseFloat(e))})))()}var Vo,Ho;function Uo(){return(Uo=e((()=>{Vo=e=>{try{return JSON.parse(e)}catch{return}},Ho=({value:e,signature:t,columnsCount:n})=>{if(e===null)return;let r=Vo(e);if(r?.signature!==t)return;let{fractions:i}=r;return Array.isArray(i)&&i.length===n&&i.every(e=>Number.isFinite(e)&&e>0)?i:void 0}})))()}var Wo;function Go(){return(Go=e((()=>{Wo=({widthsList:e,minWidthsList:t,index:n,delta:r})=>{let i=n,a=n+1,o=Math.min(0,t[i]-e[i]),s=Math.max(0,e[a]-t[a]),c=Math.min(Math.max(r,o),s);return e.map((e,t)=>t===i?e+c:t===a?e-c:e)}})))()}var Ko,qo;function Jo(){return(Jo=e((()=>{Ko=O(),_e(),Eo(),Ro(),Uo(),qo=({tableId:e,signature:t,columnsCount:n})=>{let[r,i]=ge(Lo(e,wo),void 0,{raw:!0});return{savedFractionsList:(0,Ko.useMemo)(()=>Ho({value:r??null,signature:t,columnsCount:n}),[r,t,n]),saveFractions:e=>{i(JSON.stringify({signature:t,fractions:e}))}}}})))()}function Yo(){return(Yo=e((()=>{Jo()})))()}var Xo,Zo;function Qo(){return(Qo=e((()=>{Xo=O(),M(),Bo(),Zo=({headRef:e,gridColumns:t})=>{let[n,r]=(0,Xo.useState)([]),i=(0,Xo.useCallback)(()=>e.current?zo(getComputedStyle(e.current).gridTemplateColumns):[],[e]),a=(0,Xo.useCallback)(()=>{let e=i();r(t=>j(t,e)?t:e)},[i]);return(0,Xo.useLayoutEffect)(a,[a,t]),(0,Xo.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(a);return t.observe(e.current),()=>t.disconnect()},[e,a]),{widthsList:n,measureWidths:i,updateWidths:a}}})))()}function $o(){return($o=e((()=>{Qo()})))()}function es(){return(es=e((()=>{Yo(),$o()})))()}var Q,ts;function ns(){return(ns=e((()=>{Q=O(),bn(),on(),an(),Ao(),Mo(),Po(),Io(),Go(),es(),ts=({columns:e,tableId:t,headRef:n,onGridColumnsChange:r})=>{let i=(0,Q.useMemo)(()=>K(e),[e]),a=(0,Q.useMemo)(()=>No(i),[i]),o=(0,Q.useMemo)(()=>rn(i),[i]),s=(0,Q.useMemo)(()=>yn(i),[i]),{savedFractionsList:c,saveFractions:l}=qo({tableId:t,signature:s,columnsCount:i.length}),{widthsList:u,measureWidths:d,updateWidths:f}=Zo({headRef:n,gridColumns:o}),[p,m]=(0,Q.useState)(),[h,g]=(0,Q.useState)(),_=(0,Q.useRef)(void 0),v=(0,Q.useRef)(void 0),y=e=>r(Fo({widthsList:e,minWidthsList:a})),b=()=>{c?y(c):r(void 0),f()};(0,Q.useLayoutEffect)(b,[c]),(0,Q.useLayoutEffect)(()=>()=>{v.current&&cancelAnimationFrame(v.current),r(void 0)},[]);let x=()=>{v.current&&=(cancelAnimationFrame(v.current),void 0)},S=()=>{x(),_.current=void 0,m(void 0),g(void 0)},C=e=>t=>{t.button===0&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),_.current={index:e,startX:t.clientX,startWidthsList:d()},m(e))},w=e=>{let t=_.current;if(t){if(e.buttons===0){T();return}t.latestWidthsList=Wo({widthsList:t.startWidthsList,minWidthsList:a,index:t.index,delta:e.clientX-t.startX}),v.current||=requestAnimationFrame(()=>{v.current=void 0,_.current?.latestWidthsList&&(y(_.current.latestWidthsList),g(_.current.latestWidthsList))})}},T=()=>{let e=_.current?.latestWidthsList;if(S(),!e)return;let t=ko(e);y(t),f(),l(t)},E=()=>{S(),b()},D=(0,Q.useRef)({handlePointerMove:w,handlePointerUp:T,handlePointerCancel:E});D.current={handlePointerMove:w,handlePointerUp:T,handlePointerCancel:E};let O=p!==void 0;return(0,Q.useEffect)(()=>{if(!O)return;let e=e=>D.current.handlePointerMove(e),t=()=>D.current.handlePointerUp(),n=()=>D.current.handlePointerCancel();return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,n),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,n)}},[O]),{handlesList:jo(h??u).map((e,t)=>({offset:e,isActive:p===t,onPointerDown:C(t)}))}}})))()}function rs(){return(rs=e((()=>{ns()})))()}function is(){return(is=e((()=>{rs()})))()}var as,os;function ss(){return(ss=e((()=>{D(),V(),Eo(),as=8,os=y.div`
  --offset: 0px;

  /* Причина игнора: прогрессивное улучшение. Без touch-action drag пальцем на планшете прокручивает страницу и отменяется через pointercancel */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  touch-action: none;

  /* Причина игнора: на мобильных устройствах resize отключен */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  cursor: col-resize;

  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: calc(var(--offset) - ${as/2}px);

  width: ${as}px;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 2px;
    height: 20px;

    background-color: ${({theme:e})=>e.palette.grey[300]};
    border-radius: ${({theme:e})=>e.shape.small};

    transition: ${({theme:e})=>e.transitions.create([`background-color`,`height`],{duration:e.transitions.duration.short})};
  }

  &:hover::after {
    background-color: ${({theme:e})=>e.palette.grey[500]};
  }

  &.${To.handleActive}::after {
    height: 100%;

    background-color: ${({theme:e})=>e.palette.primary.main};
  }

  /* В таблице с сеткой полоской служит линия сетки в шапке: отдельная полоска не рисуется, при drag линия становится синей */
  .${B.gridViewFull} & {
    &::after {
      transform: translateY(-50%);

      width: 1px;
      height: 100%;

      background-color: transparent;
      border-radius: 0;
    }

    &:hover::after {
      background-color: transparent;
    }

    &.${To.handleActive}::after {
      background-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`})))()}var cs,ls,us;function ds(){return(ds=e((()=>{w(),Eo(),is(),ss(),cs=E(),ls=n(To.handle,{variants:{isActive:{true:To.handleActive}}}),us=e=>{let{handlesList:t}=ts(e);return(0,cs.jsx)(cs.Fragment,{children:t.map(({offset:e,isActive:t,...n},r)=>(0,cs.jsx)(os,{role:`separator`,"aria-orientation":`vertical`,className:ls({isActive:t}),style:{"--offset":`${e}px`},...n},r))})};try{us.displayName=`ResizeHeadAddon`,us.__docgenInfo={description:`Полоски drag и логика изменения ширины колонок в шапке таблицы`,displayName:`ResizeHeadAddon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/ResizeHeadAddon/ResizeHeadAddon.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Колонки таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Id таблицы: заданный продуктом или сформированный автоматически из pathname и набора колонок`,name:`tableId`,required:!0,tags:{},type:{name:`string`}},headRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Ref шапки таблицы, нужен для измерения ширины колонок`,name:`headRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},onGridColumnsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:"Применяет `grid-template-columns` шапки, строк и вложенных строк.\nundefined возвращает таблице ее собственный `grid-template-columns`",name:`onGridColumnsChange`,required:!0,tags:{},type:{name:`(gridColumns: string) => void`}}},tags:{}}}catch{}})))()}function fs(){return(fs=e((()=>{ds()})))()}var ps;function ms(){return(ms=e((()=>{Eo(),fs(),Oo(),ps={id:wo,HeadAddon:us,assertConfig:Do}})))()}function hs(){return(hs=e((()=>{ms()})))()}function gs(){return(gs=e((()=>{hs()})))()}var $;function _s(){return(_s=e((()=>{a(),$={root:r(`data-grid-row-base`),contentWrapper:r(`data-grid-row-base__content-wrapper`),hovered:r(`data-grid-row-base_hovered`),active:r(`data-grid-row-base_active`),mobileVariantCards:r(`data-grid-row-base_mobile-variant-cards`),mobileVariantList:r(`data-grid-row-base_mobile-variant-list`)}})))()}var vs;function ys(){return(ys=e((()=>{a(),vs={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var bs;function xs(){return(xs=e((()=>{D(),d(),ys(),bs=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${vs.hidden} {
      display: none;
    }
  }
`})))()}var Ss,Cs,ws;function Ts(){return(Ts=e((()=>{w(),Xt(),ys(),xs(),Ss=E(),Cs=n(vs.root,{variants:{hidden:{true:vs.hidden}}}),ws=({cell:e,cellId:t,isFirstCell:n,row:r,emptyCellValue:i,isDisabled:a,startAdornment:o,href:s,target:c})=>{let{label:l,children:u,hideTitleOnMobile:d,isHideOnMobile:f}=e;return(0,Ss.jsxs)(Ss.Fragment,{children:[(0,Ss.jsx)(bs,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:Cs({hidden:d||f}),children:l}),u.map((e,l)=>{let u=`${t}-${l}`;return(0,Ss.jsx)(Jt,{row:r,cell:e,isHideOnMobile:f,emptyCellValue:i,isDisabled:a,startAdornment:n&&l===0&&o,isHidePersonalData:e.isHidePersonalData,className:z.grouped,href:s,target:c},u)})]})};try{ws.displayName=`GroupCell`,ws.__docgenInfo={description:``,displayName:`GroupCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/GroupCell.tsx`,methods:[],props:{cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridGroupColumn<Record<string, unknown>>`}},cellId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cellId`,required:!0,tags:{},type:{name:`string`}},isFirstCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isFirstCell`,required:!1,tags:{},type:{name:`boolean`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Es(){return(Es=e((()=>{Ts()})))()}var Ds,Os,ks,As;function js(){return(js=e((()=>{s(),D(),V(),_s(),Ds=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,Os=y.li`
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

    &.${$.mobileVariantCards} {
      padding: ${({theme:e})=>e.spacing(5,4,4)};

      background-color: ${({theme:e})=>e.palette.background.default};
      border: 1px solid ${({theme:e})=>e.palette.grey[300]};
      border-bottom: none;
      border-radius: ${({theme:e})=>e.shape.medium};
  
    }
  }
`,ks=y.div`
  position: relative;

  display: grid;
  grid-template-columns: var(--data-grid-columns);

  background-color: transparent;

  &.${$.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};

      &.${$.active} {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }

      &.${$.hovered} {
        cursor: pointer;
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;

    &.${$.active} {
      background-color: transparent;
    }
  }
`,As=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`})))()}var Ms,Ns;function Ps(){return(Ps=e((()=>{Ms=O(),ft(),cr(),un(),_s(),Ns=({className:e,row:t,keyId:n,onRowClick:r,columns:i,sectionOffset:a,customContent:o,renderStartAdornment:s,isSelected:c,hasBlockingAction:l,blockingActionReason:u,rowDisabled:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,activeRowId:_,emptyCellValue:v,isSelectable:y,rowId:b,mobileDisplayVariant:x,...S})=>{let[C,w]=(0,Ms.useState)(!1),T=(0,Ms.useRef)(null),{isDrawerOpen:E,handleOpenDrawer:D,handleCloseDrawer:O}=or(),{options:k}=t,{style:ee,...A}=S||{},{href:j,isNotSelectable:M,target:N}=k||{},{isDisabled:P,isDisabledLastCell:te,disabledReason:F,isCheckboxDisabled:ne,checkboxDisabledReason:re}=ln({rowDisabled:d,hasBlockingAction:l,blockingActionReason:u,isDisabledLastCellOption:k?.isDisabledLastCell}),I=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&w(!0)},ie=()=>w(!1),ae={...ee||{}},L=!!(!P&&(r||j)),oe=_===b;return{handleRowClick:()=>{if(P){D();return}if(j)return dt(j,N);r?.(t)},tooltipProps:{open:C,title:P?F:void 0,onOpen:I,onClose:ie,followCursor:!0,arrow:!1},checkboxProps:{checked:c,disabled:ne,disabledReason:re,onChange:f(t)},drawerProps:{open:E,onClose:O,title:`Заблокировано`},drawerContent:F,rowBaseVars:ae,isHovered:L,isActive:oe,columns:i,emptyCellValue:v,rowRef:e=>{e?(T.current=e,h?.(b,e)):T.current&&=(g?.(b,T.current),null)},href:j,target:N,onRowEnter:p,onRowLeave:m,rowId:b,row:t,isDisabled:P,sectionOffset:a,customContent:o,isDisabledLastCell:te,renderStartAdornment:s,isSelectable:y,isNotSelectable:M,dataGridInfiniteItemProps:A,mobileDisplayVariant:x,className:e}}})))()}function Fs(){return(Fs=e((()=>{Ps()})))()}var Is,Ls,Rs,zs,Bs;function Vs(){return(Vs=e((()=>{Is=O(),re(),ae(),f(),w(),Se(),Xt(),ct(),_r(),en(),G(),_s(),Es(),js(),Fs(),Ls=E(),Rs=n($.contentWrapper,{variants:{isHovered:{true:$.hovered},isActive:{true:$.active}}}),zs=n($.root,{variants:{mobileDisplayVariant:{cards:$.mobileVariantCards,list:$.mobileVariantList}}}),Bs=(0,Is.memo)(e=>{let{className:n,tooltipProps:r,rowBaseVars:i,isHovered:a,isActive:o,drawerProps:s,emptyCellValue:c,rowRef:l,onRowEnter:u,onRowLeave:d,rowId:f,row:p,isDisabled:m,sectionOffset:h,customContent:g,isDisabledLastCell:_,renderStartAdornment:v,checkboxProps:y,href:b,target:x,isNotSelectable:S,isSelectable:C,columns:w,dataGridInfiniteItemProps:T,handleRowClick:E,drawerContent:D,mobileDisplayVariant:O}=Ns(e),k=()=>{let e=v?.(!0),t=C&&!S;return!e&&!t?null:(0,Ls.jsxs)(Ls.Fragment,{children:[e,t&&(0,Ls.jsx)(Ds,{...xe(m),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,Ls.jsx)(Qt,{...y})})]})},ee=(0,Is.useCallback)(()=>{let e=w.length-1,t=_?void 0:[e];return w?.map((e,n)=>{let r=`row-base-${n}`,i=(h??0)+n,a=i===0,o=gr(m,t,i);return W(e)?(0,Ls.jsx)(ws,{cell:e,cellId:r,isFirstCell:a,row:p,emptyCellValue:c,isDisabled:o,startAdornment:a&&k(),href:b,target:x},r):(0,Ls.jsx)(Jt,{row:p,cell:e,emptyCellValue:c,startAdornment:a&&k(),isDisabled:o,isHidePersonalData:e.isHidePersonalData,href:b,target:x},r)})},[p,w,m,_,h,v,y.checked,y.disabled,y.disabledReason]);return(0,Ls.jsxs)(Os,{className:t(n,zs({mobileDisplayVariant:O})),style:i,...T,children:[(0,Ls.jsx)(N,{...r,children:(0,Ls.jsx)(ks,{ref:l,onPointerEnter:()=>u?.(f),onPointerLeave:e=>d?.(f,e.nativeEvent),className:Rs({isHovered:a,isActive:o}),[at]:m,onClick:E,children:ee()})}),g,(0,Ls.jsx)(P,{...s,children:(0,Ls.jsx)(As,{children:D})})]},`row-base-${f}`)});try{Bs.displayName=`RowBase`,Bs.__docgenInfo={description:``,displayName:`RowBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/RowBase.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Массив колонок`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},renderStartAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Функция для рендера стартового элемента`,name:`renderStartAdornment`,required:!1,tags:{},type:{name:`(isFirstCell: boolean) => ReactNode`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Смещение секции для правильного расчета глобального индекса`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},rowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`rowId`,required:!0,tags:{},type:{name:`string`}},customContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Кастомный контент после ячеек`,name:`customContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбираемой`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбранной`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},hasBlockingAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Если true, в строке выполняется блокирующее действие DataGridActionCell`,name:`hasBlockingAction`,required:!1,tags:{},type:{name:`boolean`}},blockingActionReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки от блокирующего действия`,name:`blockingActionReason`,required:!1,tags:{},type:{name:`string`}},rowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Итоговая блокировка строки, рассчитанная resolveRowDisabled`,name:`rowDisabled`,required:!1,tags:{},type:{name:`DataGridRowDisabled`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик ухода со строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Удаление регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`ID активной строки`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Значение для пустой ячейки`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Hs(){return(Hs=e((()=>{Vs(),_s()})))()}function Us(){return(Us=e((()=>{Co(),gs(),V(),na(),Hs(),Bt(),Pt()})))()}export{nn as $,jr as A,kn as B,ea as C,Fi as D,Pi as E,ir as F,cn as G,mn as H,tr as I,G as J,K,nr as L,Er as M,wr as N,Mr as O,Tr as P,tn as Q,Zn as R,Ma as S,Ii as T,pn as U,An as V,sn as W,rn as X,W as Y,an as Z,Ja as _,$ as a,Ot as at,Oa as b,ps as c,vt as ct,Co as d,U as dt,Bt as et,fo as f,ct as ft,Ya as g,Be as gt,Za as h,Ue as ht,Vs as i,Dt as it,Dr as j,Ar as k,ms as l,mt as lt,$a as m,V as mt,Hs as n,Rt as nt,_s as o,Tt as ot,eo as p,B as pt,on as q,Bs as r,Pt as rt,gs as s,_t as st,Us as t,Lt as tt,So as u,ht as ut,za as v,ta as w,ja as x,Ra as y,Qn as z};