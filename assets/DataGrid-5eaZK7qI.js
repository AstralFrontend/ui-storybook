import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,Sa as o,T as s,Va as c,Xt as l,b as u,cn as d,dt as f,ei as p,en as m,ft as h,hr as g,in as _,it as v,j as y,ji as b,ln as x,mr as S,rt as ee,w as C,wn as w,xa as T,y as E,yn as D}from"./preview-DtfC2r_n.js";import{n as O,t as k}from"./useViewportType-C_UAHZo9.js";import{t as A}from"./Skeleton-DePcqdVX.js";import{t as j}from"./Tooltip-CiIWlqug.js";import{t as M}from"./BottomDrawer-DsZokH51.js";import{t as te}from"./Divider-TDo1nKQb.js";import{t as ne}from"./Collapse-LFvGuC-z.js";import{t as N}from"./Collapse-BTDzI9wr.js";import{t as P}from"./BottomDrawer-1RKXP0cf.js";import{r as re,t as ie}from"./personalDataSecurity-DrBGQ6xf.js";import{t as F}from"./Tooltip-c3ZsFWvN.js";import{t as I}from"./Checkbox-Bs4zcCxE.js";import{n as ae}from"./useFirstMountState-BlzmtN_j.js";import{t as oe}from"./useFirstMountState-CIzDX8fD.js";import{t as L}from"./Checkbox-Cz4QIIC0.js";import{t as se}from"./OverflowTypography-BWOZQao7.js";import{t as ce}from"./OverflowTypography-DfNraiH_.js";import{i as le,n as ue,r as de,t as fe}from"./LinearProgress-BnP2v2dH.js";import{t as pe}from"./Skeleton-BbKEkWK-.js";import{t as me}from"./ContentState-Dbi-Xcob.js";import{t as he}from"./ContentState-DB9VgzAY.js";import{n as ge,t as R}from"./getInertProps-BsO_4pvt.js";import{t as _e}from"./Divider-BCSBaV8Z.js";import{n as ve,t as ye}from"./ChevronROutlineMd-BWrAjPm2.js";import{i as be,n as xe,r as Se}from"./HintIcon-BTirWK4j.js";import{n as Ce,t as we}from"./constants--uYSsPXi.js";import{a as Te,c as Ee,i as De,n as Oe,s as ke,t as Ae}from"./SortUpFillSm-BBjjIln4.js";function je(e,t,n){n===void 0&&(n=!1);for(var r=[],i=0;i<e.length;i++){var a=e[i],o=n?t(a,i,e):t(a);if(o.hasMany===!0?r.push.apply(r,o.next):o.hasNext&&r.push(o.next),o.done)break}return r}function Me(){return g(Ne,arguments,Pe)}function Ne(e,t){return je(e,Pe(t))}function Pe(e){var t=new Set;return function(n){var r=e(n);return t.has(r)?{done:!1,hasNext:!1}:(t.add(r),{done:!1,hasNext:!0,next:n})}}function Fe(){return(Fe=e((()=>{S()})))()}var z;function Ie(){return(Ie=e((()=>{a(),z={root:r(`data-grid__cell`),isHideOnMobile:r(`data-grid__cell_hide-on-mobile`),columnLabel:r(`data-grid__cell-column-label`),columnLabelHidden:r(`data-grid__cell-column-label_hidden`),actionColumn:r(`data-grid__cell_action-column`),cellContent:r(`data-grid__cell-content`),disabled:r(`data-grid__cell_disabled`),withStartAdornment:r(`data-grid__cell_with-start-adornment`),alignLeft:r(`data-grid__cell_align-left`),alignCenter:r(`data-grid__cell_align-center`),alignRight:r(`data-grid__cell_align-right`),grouped:r(`data-grid__cell_grouped`),tabularNums:r(`data-grid__cell_tabular-nums`),anchorCell:r(`data-grid__cell_anchor-cell`),withLink:r(`data-grid__cell_with-link`)}})))()}var Le,Re;function ze(){return(ze=e((()=>{D(),f(),Ie(),Le=b(h)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    &.${z.columnLabelHidden} {
      display: none;
    }
  }
`,Re=b.div`
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
`})))()}var Be,Ve,He,Ue;function We(){return(We=e((()=>{ce(),w(),Ie(),ze(),Be=T(),Ve=n(z.cellContent,{variants:{isActionColumn:{true:z.actionColumn},isTabularNums:{true:z.tabularNums}}}),He=n(z.columnLabel,{variants:{hidden:{true:z.columnLabelHidden}}}),Ue=({row:e,label:t,hideTitleOnMobile:n,isActionColumn:r,isTabularNums:i,startAdornment:a,renderCell:o,formattedValue:s,hidePersonalDataClassname:c})=>(0,Be.jsxs)(Be.Fragment,{children:[a,(0,Be.jsxs)(Re,{className:Ve({isActionColumn:r,isTabularNums:i}),children:[(0,Be.jsx)(Le,{variant:`caption`,color:`textSecondary`,className:He({hidden:n||r}),children:t}),o?.(e),!o&&(0,Be.jsx)(se,{rowsCount:2,tooltipProps:{className:c},children:(0,Be.jsx)(Be.Fragment,{children:s})})]})]});try{Ue.displayName=`CellInner`,Ue.__docgenInfo={description:``,displayName:`CellInner`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/CellInner.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Название колонки`,name:`label`,required:!1,tags:{},type:{name:`string`}},hideTitleOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Скрытие заголовка колонки на мобильных устройствах`,name:`hideTitleOnMobile`,required:!1,tags:{},type:{name:`boolean`}},isActionColumn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Флаг колонки с действиями`,name:`isActionColumn`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Моноширинный шрифт для чисел`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки слева`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},renderCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Кастомное отображение ячейки`,name:`renderCell`,required:!1,tags:{},type:{name:`RenderCell<Record<string, unknown>>`}},formattedValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Отформатированное значение ячейки`,name:`formattedValue`,required:!1,tags:{},type:{name:`unknown`}},hidePersonalDataClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Класс для скрытия персональных данных`,name:`hidePersonalDataClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Ge(){return(Ge=e((()=>{We()})))()}var Ke,qe;function Je(){return(Je=e((()=>{Ke=T(),qe=({children:e,row:t,renderLink:n,href:r,target:i})=>n?n({children:e,row:t})??e:r?(0,Ke.jsx)(`a`,{href:r,target:i,rel:`noopener noreferrer`,children:e}):e;try{qe.displayName=`LinkWrapper`,qe.__docgenInfo={description:`Оборачивает содержимое ячейки в ссылку`,displayName:`LinkWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/LinkWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Содержимое ячейки`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Данные строки вместе с её options`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown> & { options?: DataGridRowOptions<TData>; children?: DataGridRowWithOptions<TData>[]; }`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Кастомная отрисовка ссылки строки`,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<TData>`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Ye(){return(Ye=e((()=>{Je()})))()}var B,Xe;function V(){return(V=e((()=>{a(),B={loadingPlaceholder:r(`data-grid__loading-placeholder`),header:r(`data-grid__header`),root:r(`data-grid`),body:r(`data-grid__body`),bodyEmpty:r(`data-grid__body_empty`),disabled:r(`data-grid_disabled`),pinnedSectionNoData:r(`data-grid__pinned-section_no-data`),hasPinnedSections:r(`data-grid_has-pinned-sections`),pinnedSections:r(`data-grid__pinned-sections`),leftPinnedSection:r(`data-grid__left-pinned-section`),rightPinnedSection:r(`data-grid__right-pinned-section`),overflowed:r(`data-grid_overflowed`),wrapper:r(`data-grid__wrapper`),hasMassActions:r(`data-grid_has-mass-actions`),massActionsOpen:r(`data-grid_mass-actions-open`),isAllowHorizontalScroll:r(`data-grid_is-allow-horizontal-scroll`),hasGroupedColumns:r(`data-grid_has-grouped-columns`),gridViewFull:r(`data-grid_grid-view-full`),gridViewStandard:r(`data-grid_grid-view-standard`),mobileVariantCards:r(`data-grid_mobile-variant-cards`),mobileVariantList:r(`data-grid_mobile-variant-list`)},Xe={list:r(`data-grid__skeleton-list`),item:r(`data-grid__skeleton-item`)}})))()}var Ze,H,U,Qe,$e;function W(){return(W=e((()=>{a(),Ze=`data-row-disable`,H={root:r(`data-grid__row`),showConnector:r(`data-grid__row_show-connector`),hidden:r(`data-grid__row_hidden`),hover:r(`data-grid__row_hover`),hasPinnedColumns:r(`data-grid__row_has-pinned-columns`),checkbox:r(`data-grid__row-checkbox`),mobileVariantCards:r(`data-grid__row_mobile-variant-cards`),mobileVariantList:r(`data-grid__row_mobile-variant-list`),nestedChildren:r(`data-grid__row-nested-children`),hasOpenChildren:r(`data-grid__row_has-open-children`),hasNestedChildren:r(`data-grid__row_has-nested-children`)},U={root:r(`data-grid__row-content`),hovered:r(`data-grid__row-content_hovered`),active:r(`data-grid__row-content_active`)},Qe={single:r(`data-grid__row-cell_single`),grouped:r(`data-grid__row-cell_grouped`),firstCell:r(`data-grid__row-cell_first`)},$e={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var et;function tt(){return(tt=e((()=>{D(),V(),W(),Ie(),et=b.div`
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
`})))()}var nt;function rt(){return(rt=e((()=>{nt=(e,t=`_self`)=>{let n=document.createElement(`a`);n.href=e,n.target=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})))()}var it,at;function ot(){return(ot=e((()=>{it=c(),at=(0,it.createContext)({isLoading:!1,isTabularNums:!1,gridColumns:``,emptyCellValue:``,activeRowId:``,keyId:``,columns:[],onRowClick:()=>void 0,mobileDisplayVariant:`list`})})))()}var st,ct;function lt(){return(lt=e((()=>{st=c(),ct=(0,st.createContext)({selectedRows:[],isMassActionsOpen:!1})})))()}var ut,dt,ft,pt;function mt(){return(mt=e((()=>{ut=c(),lt(),dt=T(),ft=[],pt=({selectedRows:e=ft,onSelectRow:t,isMassActionsOpen:n=!1,children:r})=>{let i=(0,ut.useMemo)(()=>({selectedRows:e,onSelectRow:t,isMassActionsOpen:n}),[e,t,n]);return(0,dt.jsx)(ct.Provider,{value:i,children:r})};try{pt.displayName=`DataGridSelectionProvider`,pt.__docgenInfo={description:``,displayName:`DataGridSelectionProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,methods:[],props:{selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ht(){return(ht=e((()=>{mt()})))()}function gt(){return(gt=e((()=>{lt(),ht()})))()}var _t,vt;function yt(){return(yt=e((()=>{_t=c(),vt=(0,_t.createContext)({getItem:()=>void 0,setItem:()=>void 0})})))()}var bt,xt,St;function Ct(){return(Ct=e((()=>{bt=c(),yt(),xt=T(),St=({children:e})=>{let t=(0,bt.useRef)({}),n=(0,bt.useCallback)(e=>t.current[e],[]),r=(0,bt.useCallback)((e,n)=>{t.current[e]=n},[]),i=(0,bt.useMemo)(()=>({getItem:n,setItem:r}),[n,r]);return(0,xt.jsx)(vt.Provider,{value:i,children:e})};try{St.displayName=`DataGridStorageProvider`,St.__docgenInfo={description:``,displayName:`DataGridStorageProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function wt(){return(wt=e((()=>{Ct()})))()}function Tt(){return(Tt=e((()=>{yt(),wt()})))()}var Et,Dt,Ot;function kt(){return(kt=e((()=>{Et=c(),gt(),Tt(),ot(),Dt=T(),Ot=({isLoading:e,isTabularNums:t,gridColumns:n,emptyCellValue:r,activeRowId:i,children:a,keyId:o,columns:s,onRowClick:c,mobileDisplayVariant:l,renderLink:u,selectedRows:d,onSelectRow:f,isMassActionsOpen:p})=>{let m=(0,Et.useMemo)(()=>({isLoading:e,isTabularNums:t,gridColumns:n,emptyCellValue:r,activeRowId:i,keyId:o,columns:s,onRowClick:c,mobileDisplayVariant:l,renderLink:u}),[e,t,n,r,i,o,s,c,l,u]);return(0,Dt.jsx)(at.Provider,{value:m,children:(0,Dt.jsx)(pt,{selectedRows:d,onSelectRow:f,isMassActionsOpen:p,children:(0,Dt.jsx)(St,{children:a})})})};try{Ot.displayName=`DataGridContextProvider`,Ot.__docgenInfo={description:``,displayName:`DataGridContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,methods:[],props:{isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!0,tags:{},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<Record<string, unknown>>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function At(){return(At=e((()=>{kt()})))()}function jt(){return(jt=e((()=>{ot(),At()})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{Mt=c(),rt(),jt(),Nt=({row:e,href:t,target:n,cell:r,emptyCellValue:i,startAdornment:a})=>{let{isTabularNums:o,renderLink:s}=(0,Mt.useContext)(at),{format:c,field:l,label:u,hideTitleOnMobile:d,isTabularNums:f}=r,p=f??o,m=e=>!!e||e===0,h=(0,Mt.useMemo)(()=>c&&m(c(e))?c(e):l&&m(e[l])?e[l]:i,[l,c,e,i]),g=!!a,_=r.field===`actions`,v=()=>{if(_&&t)return nt(t,n)},y=_?void 0:{href:t,target:n,renderLink:s};return{formattedValue:h,hasStartAdornment:g,isActionColumn:_,label:u,hideTitleOnMobile:d,isTabularNums:p,linkProps:y,hasLink:!!(y?.renderLink||y?.href),onCellClick:v}}})))()}function Ft(){return(Ft=e((()=>{Pt()})))()}var It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{It=o(),ie(),k(),p(),w(),R(),Ge(),Ie(),Ye(),tt(),Ft(),Lt=T(),Rt=n(z.root,{variants:{isHideOnMobile:{true:z.isHideOnMobile},isDisabled:{true:z.disabled},withStartAdornment:{true:z.withStartAdornment},align:{left:z.alignLeft,center:z.alignCenter,right:z.alignRight},isActionColumn:{true:z.actionColumn},withLink:{true:z.withLink}}}),zt=e=>{let{formattedValue:n,hasStartAdornment:r,isActionColumn:i,label:a,hideTitleOnMobile:o,isTabularNums:s,linkProps:c,hasLink:l,onCellClick:u}=Nt(e),{className:d,startAdornment:f,row:p,cell:m,isDisabled:h,isHidePersonalData:g,isHideOnMobile:_,hasNestedChildren:v,rootRowElement:y}=e,{renderCell:b,align:x=`left`}=m,{isMobile:S}=O(),ee=re({isEnabled:g===!0}),C=(0,Lt.jsx)(et,{className:t(d,ee,Rt({isHideOnMobile:m.isHideOnMobile||_,isDisabled:h,withStartAdornment:r,align:x,isActionColumn:i,withLink:l})),...ge(h),onClick:u,children:(0,Lt.jsx)(qe,{row:p,...c,children:(0,Lt.jsx)(Ue,{row:p,label:a,hideTitleOnMobile:o,isActionColumn:i,isTabularNums:s,startAdornment:f,renderCell:b,formattedValue:n,hidePersonalDataClassname:ee})})});return i&&S&&v?y?(0,It.createPortal)(C,y):null:C};try{zt.displayName=`Cell`,zt.__docgenInfo={description:``,displayName:`Cell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/Cell.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridSingleColumn<TData>`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Если true, ячейка будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},isHideOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие ячейки на мобильных устройствах`,name:`isHideOnMobile`,required:!1,tags:{},type:{name:`boolean`}},hasNestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Флаг наличия вложенных элементов в строке`,name:`hasNestedChildren`,required:!1,tags:{},type:{name:`boolean`}},rootRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Ссылка на корневой элемент строки`,name:`rootRowElement`,required:!1,tags:{},type:{name:`HTMLLIElement`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Vt(){return(Vt=e((()=>{Bt(),Ie()})))()}var Ht,Ut;function Wt(){return(Wt=e((()=>{L(),F(),Ht=T(),Ut=({disabledReason:e,...t})=>e?(0,Ht.jsx)(j,{title:e,enterDelay:300,enterNextDelay:300,withoutContainer:!1,children:(0,Ht.jsx)(I,{...t})}):(0,Ht.jsx)(I,{...t});try{Ut.displayName=`RowCheckbox`,Ut.__docgenInfo={description:`Checkbox строки. Для заблокированного выбора показывает причину в tooltip`,displayName:`RowCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/RowCheckbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки выбора`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Gt(){return(Gt=e((()=>{Wt()})))()}var Kt;function qt(){return(qt=e((()=>{Kt=e=>e?{"--max-height":`${e}px`}:{}})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=e=>e.map(({width:e,minWidth:t})=>{let n=e||`1fr`;return t?`minmax(${t}, ${n})`:n}).join(` `)})))()}var G;function K(){return(K=e((()=>{G=e=>`children`in e&&Array.isArray(e.children)})))()}var Xt;function Zt(){return(Zt=e((()=>{K(),Xt=(e,t)=>e.flatMap(e=>{let n=e.pinned??t;return G(e)?Xt(e.children,n):{...e,pinned:n}})})))()}var Qt;function $t(){return($t=e((()=>{Qt=({hasMassActions:e,selectedRowsCount:t,isMobile:n})=>e&&t>0&&!n})))()}var en;function tn(){return(tn=e((()=>{en=({rowDisabled:e,hasBlockingAction:t=!1,blockingActionReason:n,isDisabledLastCellOption:r=!0})=>{let i=e?.mode,a=i===`selection`,o=t||i===`row`||i===`row-except-last-cell`,s=e?.reason||n;return{isDisabled:o,isDisabledLastCell:i?i!==`row-except-last-cell`:r,disabledReason:s,isCheckboxDisabled:o||a,checkboxDisabledReason:a?s:void 0}}})))()}var nn;function rn(){return(rn=e((()=>{nn=(e,t)=>{let n=t?.(e);if(n)return n;let{isDisabled:r,isDisabledLastCell:i=!0,disabledReason:a=``}=e.options??{};if(r)return{mode:i?`row`:`row-except-last-cell`,reason:a}}})))()}var an;function on(){return(on=e((()=>{rn(),an=(e,t,n)=>{let r=new Map,i=[];return e.forEach(e=>{let a=e[t],o=n?.(e);o&&!o.reason&&i.push(a),r.set(a,o??nn(e))}),{rowsDisabled:r,idsWithoutReason:i}}})))()}var sn;function cn(){return(cn=e((()=>{a(),sn={root:r(`data-grid-nested-rows`),additionalRows:r(`data-grid-nested-rows__additional-rows`),variantSubrows:r(`data-grid-nested-rows_variant-subrows`),variantTree:r(`data-grid-nested-rows_variant-tree`)}})))()}var ln,un,dn;function fn(){return(fn=e((()=>{d(),D(),Vt(),V(),W(),cn(),ln=b(`ul`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
    &.${sn.variantSubrows} .${z.root}:first-of-type {
      display: none;

      & + .${z.root} {
        margin-top: 0;
      }
    }

    & .${z.actionColumn} {
      display: none;
    }

    /* Высота последнего декоративного элемента полная тк у AdditionalRows есть кнопка "Показать все/Скрыть" */
    &.${sn.additionalRows} .${H.nestedChildren}:last-of-type::before {
      height: 100%;
    }
  }
`,un=b(`li`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`,`$gridColumns`].includes(e)})`
  position: relative;

  display: grid;
  grid-template-columns: ${({$gridColumns:e})=>e};

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
`,dn=b(x,{shouldForwardProp:e=>![`$moreButtonColumnPosition`].includes(e)})`
  grid-column: ${({$moreButtonColumnPosition:e})=>e};
  justify-self: start;

  margin: ${({theme:e})=>e.spacing(0,2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`})))()}var pn;function mn(){return(mn=e((()=>{pn=function(e){return e.Tree=`tree`,e.Subrows=`subrows`,e}({})})))()}var hn,gn;function _n(){return(_n=e((()=>{hn=c(),mn(),gn=({data:e,level:t,variant:n,initialVisibleChildrenCount:r})=>{let i=Object.is(n,pn.Tree),a=i?t+1:0,o=e?.slice(0,r),s=e?.slice(r),[c,l]=(0,hn.useState)(!1);return{isShowAllChildren:c,isShowMoreButton:!!s?.length,isShowConnector:i,initialVisibleChildren:o,otherChildren:s,nextLevel:a,handleToggleShowAllChildren:e=>{e.stopPropagation(),l(e=>!e)}}}})))()}function vn(){return(vn=e((()=>{_n()})))()}var yn,bn,xn;function Sn(){return(Sn=e((()=>{N(),w(),W(),cn(),fn(),vn(),yn=T(),bn=n(sn.root,{variants:{variant:{subrows:sn.variantSubrows,tree:sn.variantTree}}}),xn=e=>{let{isShowAllChildren:t,isShowMoreButton:n,isShowConnector:r,nextLevel:i,initialVisibleChildren:a,otherChildren:o,handleToggleShowAllChildren:s}=gn(e),{isOpen:c,data:l,keyId:u,level:d,gridColumns:f,moreButtonColumnPosition:p,renderRow:m,variant:h}=e;return!l||!l.length?null:(0,yn.jsx)(ne,{in:c,unmountOnExit:!0,children:(0,yn.jsxs)(ln,{$level:d,$isShowConnector:r,className:bn({variant:h}),children:[a.map(e=>{let{children:t,options:n}=e,r=e[u];return m({key:r,row:e,options:n,nestedChildren:t,level:i,className:H.nestedChildren})}),c&&(0,yn.jsxs)(yn.Fragment,{children:[(0,yn.jsx)(ne,{in:t,component:`li`,unmountOnExit:!0,children:(0,yn.jsx)(ln,{$level:d,$isShowConnector:r,className:sn.additionalRows,children:o.map(e=>{let{children:t,options:n}=e,r=e[u];return m({key:r,row:e,options:n,nestedChildren:t,level:i,className:`${H.hidden} ${H.nestedChildren}`})})})}),n&&(0,yn.jsx)(un,{$level:i,$isShowConnector:r,$gridColumns:f,children:(0,yn.jsx)(dn,{$moreButtonColumnPosition:p,variant:`link`,onClick:s,children:t?`Скрыть`:`Показать все`})})]})]})})};try{xn.displayName=`NestedChildren`,xn.__docgenInfo={description:``,displayName:`NestedChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Если true, список дочерних элементов раскрыт`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Данные для отображения`,name:`data`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Конфигурация ширины колонок`,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`({ key, level, row, nestedChildren, options, className, }: { key: string; row: TData; level: number; nestedChildren: (TData & { options?: DataGridRowOptions<TData>; })[]; options?: DataGridRowOptions<TData>; className?: string; }) => ReactElement<...>`}}},tags:{}}}catch{}})))()}function Cn(){return(Cn=e((()=>{Sn()})))()}var wn,Tn,En,Dn,On,kn,An,jn,Mn;function Nn(){return(Nn=e((()=>{ye(),l(),ee(),D(),f(),Vt(),V(),W(),wn=b.li`
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
      &:not(.${H.nestedChildren}) > .${U.root} .${z.root}:not(.${Qe.firstCell}) {
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
       > .${U.root} .${z.root}.${Qe.firstCell} 
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
`,Tn=b.div`
  position: relative;

  display: grid;
  grid-template-columns: ${({$gridColumns:e})=>e};

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

  ${m} {
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
`,En=b(zt)`
  &:first-of-type {
    margin-left: calc(var(--level) * ${32}px);
  }
`,Dn=b.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,On=b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,kn=b(v)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${m} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,An=b(ve,{shouldForwardProp:e=>e!==`$isActive`})`
  transform: rotateZ(${({$isActive:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`,jn=b.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`,Mn=b(h)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${$e.hidden} {
      display: none;
    }
  }
`})))()}var Pn,Fn;function In(){return(In=e((()=>{Pn=c(),Fn=(0,Pn.createContext)({hasBlockingAction:!1,isSelectable:!1,addBlockingAction:()=>void 0,removeBlockingAction:()=>void 0,row:{},onSelectRow:()=>()=>void 0,onRowEnter:()=>void 0,onRowLeave:()=>void 0,registerRowElement:()=>void 0,unregisterRowElement:()=>void 0,itemProps:{},isSelected:!1})})))()}var Ln,Rn,zn;function Bn(){return(Bn=e((()=>{Ln=c(),In(),Rn=T(),zn=({row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,children:s,isSelectable:c,isSelected:l,disabledMode:u,disabledReason:d})=>{let[f,p]=(0,Ln.useState)(!1),[m,h]=(0,Ln.useState)(),g=(0,Ln.useCallback)(e=>{p(!0),h(e)},[]),_=(0,Ln.useCallback)(()=>{p(!1),h(void 0)},[]),v=(0,Ln.useMemo)(()=>u?{mode:u,reason:d??``}:void 0,[u,d]),y=(0,Ln.useMemo)(()=>({hasBlockingAction:f,blockingActionReason:m,addBlockingAction:g,removeBlockingAction:_,isSelectable:c,row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,isSelected:l,rowDisabled:v}),[f,m,g,_,c,e,t,n,r,i,a,o,l,v]);return(0,Rn.jsx)(Fn.Provider,{value:y,children:s})};try{zn.displayName=`RowContextProvider`,zn.__docgenInfo={description:``,displayName:`RowContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},itemProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`itemProps`,required:!1,tags:{},type:{name:`object`}},disabledMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Режим блокировки строки`,name:`disabledMode`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "selection" | "row-except-last-cell"`,value:[{value:`"row"`},{value:`"selection"`},{value:`"row-except-last-cell"`}]}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Причина блокировки строки`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Vn(){return(Vn=e((()=>{Bn()})))()}function Hn(){return(Hn=e((()=>{In(),Vn()})))()}var Un,Wn;function Gn(){return(Gn=e((()=>{Un=c(),k(),Wn=()=>{let{isMobile:e}=O(),[t,n]=(0,Un.useState)(!1);return{isMobile:e,isDrawerOpen:t,handleOpenDrawer:()=>{e&&n(!0)},handleCloseDrawer:()=>{n(!1)}}}})))()}function Kn(){return(Kn=e((()=>{Gn()})))()}var qn;function Jn(){return(Jn=e((()=>{qn=e=>e.reduce((e,{field:t,...n})=>t?{...e,[t]:n}:e,{})})))()}var Yn;function Xn(){return(Xn=e((()=>{Jn(),Yn=(e,t)=>{if(!t)return e;let n=qn(t);return Object.keys(n).length?e.map(e=>e.hasOwnProperty(`field`)?{...e,...n[e.field]||{}}:e):e}})))()}var q,Zn;function Qn(){return(Qn=e((()=>{q=c(),jt(),mn(),tn(),rn(),W(),Hn(),Kn(),Xn(),Zn=({keyId:e,columns:t,row:n,nestedChildren:r,level:i,variant:a,options:o,isInitialExpanded:s=!1,expandedLevel:c,isSelectable:l,isSelected:u,getRowDisabled:d,isNested:f=!1,onSelectRow:p,onRowClick:m,isVisibleCollapseButton:h,registerRowElement:g,unregisterRowElement:_,style:v,activeRowId:y})=>{let{isDrawerOpen:b,handleOpenDrawer:x,handleCloseDrawer:S}=Wn(),[ee,C]=(0,q.useState)(null),w=(0,q.useCallback)(e=>{e&&C(e)},[]),T=!!(s&&i<=c-1&&r?.length),{mobileDisplayVariant:E}=(0,q.useContext)(at),{hasBlockingAction:D,blockingActionReason:O,rowDisabled:k}=(0,q.useContext)(Fn),[A,j]=(0,q.useState)(T),M=(0,q.useRef)(null),te=e=>{e?(M.current=e,g?.(P,e)):M.current&&=(_?.(P,M.current),null)},[ne,N]=(0,q.useState)(!1),P=n[e],{href:re}=o||{},ie=(0,q.useMemo)(()=>f?nn(n,d):k,[f,n,d,k]),{isDisabled:F,isDisabledLastCell:I,disabledReason:ae,isCheckboxDisabled:oe,checkboxDisabledReason:L}=en({rowDisabled:ie,hasBlockingAction:D,blockingActionReason:O,isDisabledLastCellOption:o?.isDisabledLastCell}),se=()=>{if(F){x();return}m?.(n)},ce=Object.is(a,pn.Tree),le=(0,q.useMemo)(()=>Yn(t,o?.childrenColumns),[t,o]),ue=(0,q.useCallback)(e=>{e.stopPropagation(),j(e=>!e)},[]),de=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&N(!0)},fe=()=>N(!1),pe=e=>{F&&e.target.getAttribute(`data-row-disable`)!==`true`&&N(!1)},me=!!r?.length&&h,he=(0,q.useMemo)(()=>({"--level":i,...v}),[i,v]),ge=!!(!F&&(m||re)),R=y===P,_e=(0,q.useMemo)(()=>p(n),[p,n]);return{disabledReason:ae,rowStyles:he,isOpen:A,isShowConnector:ce,childrenColumns:le,rowId:P,rowRef:te,isDisabled:F,isDisabledLastCell:I,isSelectable:l,isRenderCollapseButton:me,handleToggle:ue,rootRowElement:ee,rootRowRef:w,isHovered:ge,isActive:R,mobileDisplayVariant:E,rowProps:{onClick:se,onMouseMove:pe},drawerProps:{open:b,onClose:S,title:`Заблокировано`},tooltipProps:{open:ne,title:F?ae:void 0,onOpen:de,onClose:fe},checkboxProps:{checked:u,disabled:oe,disabledReason:L,onChange:_e},nestedChildrenProps:{isOpen:A}}}})))()}function $n(){return($n=e((()=>{Qn()})))()}var er;function tr(){return(tr=e((()=>{er=(e,t,n)=>e?!t||!t.includes(n):!1})))()}var nr,J,rr,ir,ar,or,sr,cr;function lr(){return(lr=e((()=>{nr=c(),P(),F(),p(),w(),R(),Vt(),Gt(),K(),W(),Cn(),Nn(),$n(),tr(),J=T(),rr=n(H.root,{variants:{isShowConnector:{true:H.showConnector},mobileDisplayVariant:{cards:H.mobileVariantCards,list:H.mobileVariantList},hasNestedChildren:{true:H.hasNestedChildren}}}),ir=n(U.root,{variants:{isHovered:{true:U.hovered},isActive:{true:U.active}}}),ar=n($e.root,{variants:{hidden:{true:$e.hidden}}}),or=n(Qe.single,{variants:{isFirstCell:{true:Qe.firstCell}}}),sr=e=>{let{isOpen:n,isShowConnector:r,childrenColumns:i,rowId:a,handleToggle:o,checkboxProps:s,rowProps:c,isHovered:l,tooltipProps:u,nestedChildrenProps:d,isDisabled:f,isDisabledLastCell:p,isRenderCollapseButton:m,rowRef:h,rowStyles:g,drawerProps:_,disabledReason:v,isActive:y,isSelectable:b,mobileDisplayVariant:x,rootRowElement:S,rootRowRef:ee}=Zn(e),{className:C,row:w,options:T,variant:E,gridColumns:D,isInitialExpanded:O,expandedLevel:k,level:A,nestedChildren:te,initialVisibleChildrenCount:ne,moreButtonColumnPosition:N,isVisibleCollapseButton:P,columns:re,emptyCellValue:ie,activeRowId:F,keyId:I,onSelectRow:ae,onRowClick:oe,sectionOffset:L,totalColumnsCount:se,registerRowElement:ce,unregisterRowElement:le,onRowEnter:ue,onRowLeave:de,style:fe,getRowDisabled:pe,isNested:me,...he}=e,{isNotSelectable:R,href:_e,target:ve}=T||{},ye=()=>!m&&(!b||R)?null:(0,J.jsxs)(J.Fragment,{children:[m&&(0,J.jsx)(On,{children:(0,J.jsx)(kn,{variant:`text`,onClick:o,children:(0,J.jsx)(An,{$isActive:n})})}),b&&!R&&(0,J.jsx)(Dn,{...ge(f),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,J.jsx)(Ut,{...s})})]}),be=(0,nr.useCallback)(()=>{let e=(se??re.length)-1,n=p?void 0:[e];return re?.map((e,r)=>{let i=`${a}-${r}`,o=(L??0)+r,s=er(f,n,o),c=o===0;if(G(e)){let{label:n,children:r,hideTitleOnMobile:a,isHideOnMobile:o}=e;return(0,J.jsxs)(nr.Fragment,{children:[(0,J.jsx)(Mn,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:ar({hidden:a||o}),children:n}),r.map((e,n)=>{let r=`${i}-${n}`;return(0,J.jsx)(En,{row:w,cell:e,isHideOnMobile:o,emptyCellValue:ie,isDisabled:s,startAdornment:c&&n===0&&ye(),isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!te?.length,className:t(z.grouped),rootRowElement:S,href:_e,target:ve},r)})]},i)}return(0,J.jsx)(En,{className:or({isFirstCell:c}),row:w,cell:e,emptyCellValue:ie,startAdornment:c&&ye(),isDisabled:s,isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!te?.length,rootRowElement:S,href:_e,target:ve},i)})},[w,n,re,f,p,s.checked,s.disabled,s.disabledReason,se,L,S]),xe=(0,nr.useCallback)(({key:e,...t})=>(0,J.jsx)(sr,{keyId:I,...t,variant:E,isSelectable:b,gridColumns:D,isInitialExpanded:O,expandedLevel:k,initialVisibleChildrenCount:ne,moreButtonColumnPosition:N,isVisibleCollapseButton:P,activeRowId:F,columns:i,onSelectRow:ae,onRowClick:oe,totalColumnsCount:se,registerRowElement:ce,unregisterRowElement:le,onRowEnter:ue,onRowLeave:de,sectionOffset:L,getRowDisabled:pe,isNested:!0},e),[I,E,b,D,O,k,ne,N,L,se,F,i,ae,oe,ce,le,ue,de,pe]);return(0,J.jsxs)(wn,{className:t(C,rr({isShowConnector:r,mobileDisplayVariant:x,hasNestedChildren:!!te?.length})),style:g,...he,ref:ee,children:[(0,J.jsx)(j,{followCursor:!0,arrow:!1,...u,children:(0,J.jsx)(Tn,{"data-row-id":a,ref:h,onPointerEnter:()=>ue?.(a),onPointerLeave:e=>de?.(a,e.nativeEvent),className:ir({isHovered:l,isActive:y}),$gridColumns:D,[Ze]:f,...c,children:be()})}),(0,J.jsx)(xn,{...d,data:te,keyId:I,level:A,variant:E,gridColumns:D,initialVisibleChildrenCount:ne,moreButtonColumnPosition:N,renderRow:xe}),(0,J.jsx)(M,{..._,children:(0,J.jsx)(jn,{children:v})})]},`row-${a}`)},cr=(0,nr.memo)(sr);try{cr.displayName=`Row`,cr.__docgenInfo={description:``,displayName:`Row`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/Row.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация ширины колонок`,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},nestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы`,name:`nestedChildren`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Флаг выбора текущей строки`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, строка вложенная и сама вычисляет блокировку`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк. Передаётся только строкам с дочерними элементами`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},emptyCellValue:{defaultValue:{value:`'-'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'-'`},type:{name:`ReactNode`}},options:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Дополнительные настройки строки`,name:`options`,required:!1,tags:{},type:{name:`DataGridRowOptions<TData>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Стили для строки`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}function ur(){return(ur=e((()=>{lr(),Hn()})))()}function dr(){return(dr=e((()=>{xe(),be()})))()}var fr,pr,mr;function hr(){return(hr=e((()=>{fr=c(),pr=T(),mr=(0,fr.memo)(({index:e,renderRow:t,row:n})=>(0,pr.jsx)(pr.Fragment,{children:t(n,e)}));try{mr.displayName=`CustomRowWrapper`,mr.__docgenInfo={description:"Обёртка с `memo` для изоляции пользовательского `renderRow`.\n\nПри re-render родителя (`Body`, Virtuoso `Item`) без обёртки `renderRow(row, index)`\nвызывается заново на каждой строке и каждый раз создаёт новые React-elements, из‑за чего `memo` у дочерних компонентов\n(например, `DataGridCollapsibleRow`) не срабатывает.\n\n`CustomRowWrapper` повторно вызывает `renderRow` только когда изменились\n`index`, `row` или ссылка на `renderRow`.",displayName:`CustomRowWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`RenderRow`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}}},tags:{}}}catch{}})))()}function gr(){return(gr=e((()=>{hr()})))()}var _r;function vr(){return(vr=e((()=>{a(),_r={root:r(`data-grid__body`),disableMinHeight:r(`data-grid__body_disable-min-height`)}})))()}var yr;function br(){return(br=e((()=>{l(),D(),V(),vr(),yr=b.ul`
  --min-display-rows: 0;

  overflow-y: auto;

  width: fit-content;
  min-width: 100%;
  height: 100%;
  min-height: calc(var(--min-display-rows) * ${44}px);
  margin: 0;
  padding: 0;

  list-style-type: none;

  ${m} {
    scrollbar-gutter: stable;
  }

  &.${_r.disableMinHeight} {
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
`})))()}var xr,Sr;function Cr(){return(Cr=e((()=>{xr=c(),C(),Sr=({minDisplayRows:e})=>{let{components:t}=(0,xr.useContext)(s),n=t?.dataGrid?.defaultProps?.disableMinHeight;return{disableMinHeight:n,bodyCssVars:!n&&e?{"--min-display-rows":e}:{}}}})))()}function wr(){return(wr=e((()=>{Cr()})))()}var Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{p(),w(),gr(),ur(),Hn(),vr(),br(),wr(),Tr=T(),Er=0,Dr=n(_r.root,{variants:{disableMinHeight:{true:_r.disableMinHeight}}}),Or=({rows:e,selectedIds:n,rowsDisabled:r,getRowDisabled:i,minDisplayRows:a,keyId:o,noDataPlaceholder:s,className:c,renderRow:l,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._})=>{let{disableMinHeight:v,bodyCssVars:y}=Sr({minDisplayRows:a}),b=e.map((e,t)=>{let a=e[o],s=n.has(a),c=r.get(a),{children:v,options:y}=e,b=Array.isArray(v)&&v.length>0;return(0,Tr.jsx)(zn,{row:e,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:d,isSelected:s,disabledMode:c?.mode,disabledReason:c?.reason,children:l?(0,Tr.jsx)(mr,{index:t,renderRow:l,row:e}):(0,Tr.jsx)(cr,{row:e,options:y,keyId:o,level:Er,nestedChildren:v,isSelected:s,getRowDisabled:b?i:void 0,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._},a)},a)});return(0,Tr.jsx)(yr,{className:t(c,Dr({disableMinHeight:v})),style:y,children:e.length?b:s})};try{Or.displayName=`Body`,Or.__docgenInfo={description:``,displayName:`Body`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/Body.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация ширины колонок`,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},selectedIds:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификаторы выбранных строк`,name:`selectedIds`,required:!0,tags:{},type:{name:`Set<unknown>`}},rowsDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Блокировки строк по идентификатору`,name:`rowsDisabled`,required:!0,tags:{},type:{name:`Map<unknown, DataGridRowDisabled>`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Массив данных для отображения`,name:`rows`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},minDisplayRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!0,tags:{},type:{name:`number`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!0,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!0,tags:{},type:{name:`(rowId: string, e: PointerEvent) => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{},type:{name:`(row: TData, index: number) => ReactNode`}}},tags:{}}}catch{}})))()}function Ar(){return(Ar=e((()=>{kr()})))()}var Y;function jr(){return(jr=e((()=>{a(),Y={root:r(`data-grid__head-cell`),groupParent:r(`data-grid__head-cell_group-parent`),groupChild:r(`data-grid__head-cell_group-child`),singleColumn:r(`data-grid__head-cell_single-column`),alignLeft:r(`data-grid__head-cell_align-left`),alignCenter:r(`data-grid__head-cell_align-center`),alignRight:r(`data-grid__head-cell_align-right`),hasStartAdornment:r(`data-grid__head-cell_has-start-adornment`),sortable:r(`data-grid__head-cell_sortable`)}})))()}var Mr;function Nr(){return(Nr=e((()=>{dr(),D(),jr(),Mr=b.div`
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

  .${Se.iconWrapper}  {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var Pr;function Fr(){return(Fr=e((()=>{Pr=({gridPosition:e,field:t,isSortable:n,startAdornment:r,onSort:i})=>({hasStartAdornment:!!r,handleSortClick:()=>{t&&n&&i(t)},headCellCssVars:{"--grid-column-start":e?.start,"--grid-column-end":e?.end}})})))()}var Ir,Lr,Rr,zr;function Br(){return(Br=e((()=>{Ir=c(),ke(),De(),Ae(),ce(),p(),w(),jr(),Nr(),Fr(),Lr=T(),Rr=n(Y.root,{variants:{isSortable:{true:Y.sortable},align:{left:Y.alignLeft,center:Y.alignCenter,right:Y.alignRight},hasStartAdornment:{true:Y.hasStartAdornment}}}),zr=e=>{let{hasStartAdornment:n,handleSortClick:r,headCellCssVars:i}=Pr(e),{startAdornment:a,field:o,isSortable:s,align:c,label:l,sorting:u,className:d}=e,f=(0,Ir.useMemo)(()=>{if(!s)return null;if(u?.fieldId!==o)return(0,Lr.jsx)(Te,{});switch(u?.sort){case`asc`:return(0,Lr.jsx)(Oe,{color:`primary`});case`desc`:return(0,Lr.jsx)(Ee,{color:`primary`});default:return(0,Lr.jsx)(Te,{})}},[u,s,o]);return(0,Lr.jsxs)(Mr,{onClick:r,className:t(d,Rr({isSortable:s,align:c,hasStartAdornment:n})),style:i,children:[a&&a,(0,Lr.jsx)(se,{rowsCount:2,variant:`pointer`,component:`p`,children:l}),f]})};try{zr.displayName=`HeadCell`,zr.__docgenInfo={description:``,displayName:`HeadCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,methods:[],props:{onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Выравнивание содержимого ячейки по горизонтали`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`AlignVariant`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Позиция ячейки в сетке CSS Grid`,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}}},tags:{}}}catch{}})))()}function Vr(){return(Vr=e((()=>{Br(),jr()})))()}var Hr,Ur,Wr;function Gr(){return(Gr=e((()=>{Hr=c(),Vr(),Ur=T(),Wr=({column:e,sorting:t,onSort:n,gridPosition:r,startAdornment:i})=>(0,Ur.jsxs)(Hr.Fragment,{children:[(0,Ur.jsx)(zr,{sorting:t,label:e.label,onSort:n,className:Y.groupParent,gridPosition:r,startAdornment:i}),e.children.map(e=>{let{field:r,sortableFieldName:i,sortable:a,...o}=e;return(0,Ur.jsx)(zr,{...o,field:i??r,sorting:t,isSortable:a,onSort:n,className:Y.groupChild,startAdornment:e.columnHint},e.label)})]},e.label);try{Wr.displayName=`GroupColumns`,Wr.__docgenInfo={description:``,displayName:`GroupColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,methods:[],props:{column:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`column`,required:!0,tags:{},type:{name:`DataGridGroupColumn<TData>`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Kr(){return(Kr=e((()=>{Gr()})))()}var qr;function Jr(){return(Jr=e((()=>{D(),V(),qr=b.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;
`})))()}var Yr,Xr;function Zr(){return(Zr=e((()=>{L(),Jr(),Yr=T(),Xr=({showCheckbox:e,columnHint:t,checkboxProps:n})=>!e&&!t?null:(0,Yr.jsxs)(Yr.Fragment,{children:[e&&(0,Yr.jsx)(qr,{children:(0,Yr.jsx)(I,{...n})}),t]});try{Xr.displayName=`HeadCellStartAdornment`,Xr.__docgenInfo={description:``,displayName:`HeadCellStartAdornment`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,methods:[],props:{showCheckbox:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`showCheckbox`,required:!0,tags:{},type:{name:`boolean`}},columnHint:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`columnHint`,required:!1,tags:{},type:{name:`ReactNode`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`checkboxProps`,required:!0,tags:{},type:{name:`CheckboxProps`}}},tags:{}}}catch{}})))()}function Qr(){return(Qr=e((()=>{Zr()})))()}var $r,ei;function ti(){return(ti=e((()=>{Vr(),$r=T(),ei=({field:e,label:t,isSortable:n,align:r,sorting:i,onSort:a,startAdornment:o})=>(0,$r.jsx)(zr,{sorting:i,field:e,label:t,isSortable:n,align:r,startAdornment:o,onSort:a,className:Y.singleColumn});try{ei.displayName=`SingleColumn`,ei.__docgenInfo={description:``,displayName:`SingleColumn`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,methods:[],props:{field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ni(){return(ni=e((()=>{ti()})))()}var ri;function ii(){return(ii=e((()=>{K(),ri=e=>{let{positionsMap:t}=e.reduce((e,t)=>{let n=G(t)?t.children.length:1,r=e.currentLine,i=r+n,a=G(t)?t.label:t.field||t.label||``;return e.positionsMap.set(a,{start:r,end:i}),e.currentLine=i,e},{positionsMap:new Map,currentLine:1});return t}})))()}var ai,oi;function si(){return(si=e((()=>{ai=c(),K(),ii(),oi=({columns:e,onSort:t,sorting:n,uncheckedRowsCount:r,rowsCount:i,onSelectAllRows:a})=>{let o=(0,ai.useMemo)(()=>!r&&i>0,[r,i]),s=(0,ai.useMemo)(()=>r>0&&r<i,[r,i]),c=!i;return{checkboxProps:(0,ai.useMemo)(()=>({checked:o,disabled:c,indeterminate:s,onChange:a}),[o,c,s,a]),handleSort:(0,ai.useCallback)(e=>{if(!t)return;let r=n?.fieldId===e;if(r&&n?.sort===`asc`)return t({fieldId:e,sort:`desc`});if(r&&n?.sort===`desc`)return t(void 0);t({fieldId:e,sort:`asc`})},[n,t]),gridPositions:(0,ai.useMemo)(()=>ri(e),[e]),headerCssVars:(0,ai.useCallback)(e=>e?{"--grid-column-start":e.start,"--grid-column-end":e.end}:{},[]),hasGroupedColumns:e.some(G)}};try{oi.displayName=`useLogic`,oi.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/useLogic/useLogic.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function ci(){return(ci=e((()=>{si()})))()}var li;function ui(){return(ui=e((()=>{K(),li=({column:e,index:t,sectionOffset:n,isSelectable:r,isHideSelectAll:i})=>{let{label:a,align:o,columnHint:s}=e,c=G(e)?void 0:e.sortable;return{label:a,align:o,columnHint:s,sortField:G(e)?void 0:e.sortableFieldName??e.field,sortable:c,showCheckbox:(n??0)+t===0&&r&&!i}}})))()}var di,fi;function pi(){return(pi=e((()=>{K(),Kr(),Qr(),ni(),ci(),ui(),di=T(),fi=e=>{let{checkboxProps:t,handleSort:n,gridPositions:r}=oi(e),{columns:i,isSelectable:a,sorting:o,isHideSelectAll:s,sectionOffset:c}=e;return(0,di.jsx)(di.Fragment,{children:i.map((e,i)=>{let{label:l,align:u,columnHint:d,sortField:f,sortable:p,showCheckbox:m}=li({column:e,index:i,sectionOffset:c,isSelectable:a,isHideSelectAll:s}),h=m||d?(0,di.jsx)(Xr,{showCheckbox:m,columnHint:d,checkboxProps:t}):void 0;if(G(e)){let t=r.get(e.label);return(0,di.jsx)(Wr,{column:e,sorting:o,onSort:n,gridPosition:t,startAdornment:h},e.label)}return(0,di.jsx)(ei,{sorting:o,field:f,label:l,isSortable:p,align:u,startAdornment:h,onSort:n},l)})})};try{fi.displayName=`HeadColumns`,fi.__docgenInfo={description:``,displayName:`HeadColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var mi;function hi(){return(hi=e((()=>{l(),D(),mi=b(`header`,{shouldForwardProp:e=>![`$gridColumns`].includes(e)})`
  display: grid;
  grid-template-columns: ${({$gridColumns:e})=>e};

  width: fit-content;
  min-width: 100%;

  border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};

  ${m} {
    padding-right: ${`6px`};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var gi,_i,vi;function yi(){return(yi=e((()=>{w(),V(),K(),pi(),hi(),gi=T(),_i=n(B.header,{variants:{isGroup:{true:B.hasGroupedColumns}}}),vi=e=>{let{columns:t,gridColumns:n}=e;return(0,gi.jsx)(mi,{role:`heading`,className:_i({isGroup:t.some(G)}),$gridColumns:n,children:(0,gi.jsx)(fi,{...e})})};try{vi.displayName=`Head`,vi.__docgenInfo={description:``,displayName:`Head`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация ширины колонок`,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function bi(){return(bi=e((()=>{yi()})))()}var xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{ue(),de(),_e(),D(),xi=b.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({theme:e})=>e.palette.background.element};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Si=b(te)`
  border-width: 1px;
`,Ci=b.div`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.fab};
  left: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,wi=b(fe)`
  height: 2px;

  .${le.barColorPrimary} {
    background-color: ${({theme:e})=>e.palette.primary[800]};
  }
`})))()}var Ei,Di;function Oi(){return(Oi=e((()=>{Ti(),Ei=T(),Di=({isLoading:e=!1,isDisabled:t=!1,isVisibleDivider:n=!0})=>(0,Ei.jsxs)(Ei.Fragment,{children:[(e||t)&&(0,Ei.jsx)(xi,{}),(0,Ei.jsxs)(Ci,{children:[e&&(0,Ei.jsx)(wi,{}),!e&&n&&(0,Ei.jsx)(Si,{})]})]});try{Di.displayName=`Loader`,Di.__docgenInfo={description:``,displayName:`Loader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,methods:[],props:{isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isVisibleDivider:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isVisibleDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function ki(){return(ki=e((()=>{Oi()})))()}var Ai,ji,Mi,Ni;function Pi(){return(Pi=e((()=>{D(),V(),Ai=b.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  &.${B.mobileVariantCards} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,ji=b.div`
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
`,Mi=b.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Ni=b.div`
  padding-top: ${({theme:e})=>e.spacing(2)};
`})))()}var Fi,Ii,Li,Ri;function zi(){return(zi=e((()=>{pe(),w(),V(),Pi(),Fi=T(),Ii=n(Xe.list,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),Li=n(Xe.item,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),Ri=({cellsCount:e,mobileDisplayVariant:t,rowsCount:n})=>(0,Fi.jsx)(Ai,{className:Ii({mobileDisplayVariant:t}),children:Array.from({length:n},(n,r)=>(0,Fi.jsxs)(ji,{className:Li({mobileDisplayVariant:t}),children:[Array.from({length:e-1},(e,t)=>(0,Fi.jsxs)(Mi,{children:[(0,Fi.jsx)(A,{variant:`rounded`,height:20}),(0,Fi.jsx)(A,{variant:`rounded`,height:16,width:`50%`})]},t)),(0,Fi.jsx)(Ni,{children:(0,Fi.jsx)(A,{variant:`rounded`,width:`100%`,height:40})})]},r))});try{Ri.displayName=`MobileSkeleton`,Ri.__docgenInfo={description:``,displayName:`MobileSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,methods:[],props:{cellsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`cellsCount`,required:!0,tags:{},type:{name:`number`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!0,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function Bi(){return(Bi=e((()=>{zi()})))()}var Vi,Hi,Ui;function Wi(){return(Wi=e((()=>{Vi=c(),d(),C(),E(),Hi=T(),Ui=({title:e=`Нет\xA0данных`,imgAlt:t=e,action:n,size:r=`small`})=>{let{imagesMap:{noDataImgSrc:i}}=(0,Vi.useContext)(s);return(0,Hi.jsx)(u,{title:e,imgSrc:i,size:r,Actions:n?(0,Hi.jsx)(x,{onClick:n.onClick,"aria-label":n.text,children:n.text}):void 0,imgAlt:t})};try{Ui.displayName=`NoData`,Ui.__docgenInfo={description:``,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,methods:[],props:{title:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Заголовок`,name:`title`,required:!1,tags:{default:`'Нет\\u00a0данных'
Добавлен неразрывный пробел \`\\u00a0\`,
так как без изображения текст форматируется в 2 строки`},type:{name:`string`}},imgAlt:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`альтернативный текст в случае, если изображение по какой-то причине не загрузилось`,name:`imgAlt`,required:!1,tags:{default:`эквивалентно title`},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Текст и обработчик для кнопки действия`,name:`action`,required:!1,tags:{},type:{name:`{ text: string; onClick: () => void; }`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Задает общий размер компонента`,name:`size`,required:!1,tags:{default:`'small'`},type:{name:`enum`,raw:`PlaceholderSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function Gi(){return(Gi=e((()=>{Wi()})))()}var Ki;function qi(){return(qi=e((()=>{D(),V(),Ki=b.div`
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
`})))()}var Ji,Yi;function Xi(){return(Xi=e((()=>{Ji=c(),p(),V(),Zt(),Yt(),Yi=({position:e,isNoData:n,columns:r})=>{let i=(0,Ji.useMemo)(()=>t({[B.leftPinnedSection]:e===`left`,[B.rightPinnedSection]:e===`right`,[B.pinnedSectionNoData]:n&&e===`center`}),[]),a=n&&e!==`center`||!r||r.length===0;return{classnames:i,gridColumns:a?``:Jt(Xt(r)),shouldNotRenderSection:a}}})))()}function Zi(){return(Zi=e((()=>{Xi()})))()}var Qi,$i;function ea(){return(ea=e((()=>{Ar(),V(),bi(),qi(),Zi(),Qi=T(),$i=({columns:e,position:t,isNoData:n,headProps:r,bodyProps:i,sectionOffset:a})=>{let{classnames:o,gridColumns:s,shouldNotRenderSection:c}=Yi({position:t,isNoData:n,columns:e});return c?null:(0,Qi.jsxs)(Ki,{className:o,children:[!n&&(0,Qi.jsx)(vi,{...r,columns:e,gridColumns:s,sectionOffset:a}),(0,Qi.jsx)(Or,{...i,columns:e,gridColumns:s,sectionOffset:a,className:B.body})]})};try{$i.displayName=`Section`,$i.__docgenInfo={description:``,displayName:`Section`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/Section.tsx`,methods:[],props:{bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns" | "gridColumns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns" | "gridColumns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для секции`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},position:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Позиция секции`,name:`position`,required:!0,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:``,name:`sectionOffset`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function ta(){return(ta=e((()=>{ea()})))()}var na;function ra(){return(ra=e((()=>{D(),V(),na=b.div`
  overflow: auto;
  display: grid;
  grid-template-columns: ${({$gridColumns:e})=>e};

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
`})))()}var ia,aa;function oa(){return(oa=e((()=>{ia=c(),Zt(),aa=({sections:e})=>{let t=e.find(e=>e.position===`left`)?.columns,n=e.find(e=>e.position===`right`)?.columns,r={"--left-columns-count":t?Xt(t).length:0,"--right-columns-count":n?Xt(n).length:0},{sectionOffsets:i,totalColumnsCount:a}=(0,ia.useMemo)(()=>{let t={},n=0;return e.forEach(e=>{t[e.position]=n,n+=Xt(e.columns).length}),{sectionOffsets:t,totalColumnsCount:n}},[e]);return{pinnedContainerStyles:r,sectionOffsets:i,totalColumnsCount:a}}})))()}function sa(){return(sa=e((()=>{oa()})))()}var ca,la;function ua(){return(ua=e((()=>{R(),ta(),ra(),sa(),ca=T(),la=({gridColumns:e,className:t,isDisabled:n,headProps:r,bodyProps:i,sections:a,isNoData:o})=>{let{pinnedContainerStyles:s,sectionOffsets:c,totalColumnsCount:l}=aa({sections:a});return(0,ca.jsx)(na,{$gridColumns:e,className:t,...ge(n),style:s,children:a.map(({columns:e,position:t})=>(0,ca.jsx)($i,{columns:e,position:t,sectionOffset:c[t],bodyProps:{...i,totalColumnsCount:l},headProps:r,isNoData:o},t))})};try{la.displayName=`PinnedSections`,la.__docgenInfo={description:``,displayName:`PinnedSections`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,methods:[],props:{sections:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация закрепленных секций`,name:`sections`,required:!0,tags:{},type:{name:`PinnedSection<TData>[]`}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация ширины колонок`,name:`gridColumns`,required:!0,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns" | "gridColumns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns" | "gridColumns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function da(){return(da=e((()=>{ua()})))()}var fa,pa,ma,ha;function ga(){return(ga=e((()=>{D(),vr(),Ie(),V(),Vr(),W(),fa=b.div`
  --max-height: initial;

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

      & .${_r.root} {
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
`,pa=b.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 100%;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;
  }
`,ma=b(pa)`
  pointer-events: none;

  background: ${({theme:e})=>e.palette.background.element};
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mix-blend-mode: luminosity;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    opacity: 0.7;
  }
`,ha=b.div`
  position: relative;

  height: 0;
`})))()}var _a,va;function ya(){return(ya=e((()=>{_a=c(),W(),va=({hasPinnedColumns:e=!1})=>{let t=(0,_a.useRef)(new Map),n=(0,_a.useRef)(null),r=(0,_a.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>{e.classList.contains(H.hover)||e.classList.add(H.hover)})},[e]),i=(0,_a.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>e.classList.remove(H.hover))},[e]);return{rowsMapRef:t,registerRowElement:(0,_a.useCallback)((n,r)=>{if(!e)return;let i=t.current;i.has(n)||i.set(n,new Set),i.get(n).add(r)},[e]),unregisterRowElement:(0,_a.useCallback)((n,r)=>{if(!e)return;let i=t.current,a=i.get(n);a&&(a.delete(r),a.size===0&&i.delete(n))},[e]),onRowEnter:(0,_a.useCallback)(t=>{e&&n.current!==t&&(n.current&&i(n.current),r(t),n.current=t)},[e,r,i]),onRowLeave:(0,_a.useCallback)((t,r)=>{e&&(r.relatedTarget?.closest(`[data-row-id="${t}"]`)||(i(t),n.current=null))},[e,i])}}})))()}function ba(){return(ba=e((()=>{ya()})))()}var xa,Sa;function Ca(){return(Ca=e((()=>{xa=c(),Sa=e=>{let t=(0,xa.useRef)(new Set);(0,xa.useEffect)(()=>{let n=e.filter(e=>!t.current.has(e));n.length&&(n.forEach(e=>t.current.add(e)),console.warn(`UIKIT. DataGrid: getRowDisabled вернул блокировку без reason для строк: ${n.join(`, `)}`))},[e])}})))()}function wa(){return(wa=e((()=>{Ca()})))()}function Ta(){return(Ta=e((()=>{ba(),wa()})))()}var Ea,Da;function Oa(){return(Oa=e((()=>{Ea=c(),we(),k(),V(),Da=({containerRef:e,isLoading:t,columns:n,rows:r,isNoScrollToTop:i=!1,mobileDisplayVariant:a})=>{let{isMobile:o}=O(),s=(0,Ea.useRef)(null),c=(0,Ea.useMemo)(()=>n?.filter(e=>!e.isHideOnMobile).length??0,[n]);return(0,Ea.useEffect)(()=>{!t&&r&&r.length>0&&s.current===null&&(s.current=r.length)},[r,t]),(0,Ea.useLayoutEffect)(()=>{if(!(!o||i)&&t&&e?.current){let t=e.current.closest(`.${Ce.root}`);t&&t.scrollTo({top:0,behavior:`instant`})}},[e,t,o,i]),{isMobile:o,mobileSkeletonProps:{cellsCount:c,rowsCount:s.current??5,mobileDisplayVariant:a}}}})))()}function ka(){return(ka=e((()=>{Oa()})))()}var Aa,ja;function Ma(){return(Ma=e((()=>{i(),K(),Aa=e=>{let t=y.getInstance(),n=e.map(e=>e.pinned??`center`),r=n.indexOf(`right`);r!==-1&&n.slice(r).some(e=>e!==`right`)&&t.logError(`DataGrid`,`Колонки с pinned="right" должны идти непрерывным блоком в конце`);let i=n.lastIndexOf(`left`);i!==-1&&n.slice(0,i+1).some(e=>e!==`left`)&&t.logError(`DataGrid`,`Колонки с pinned="left" должны идти непрерывным блоком в начале`),e.forEach(e=>{G(e)&&e.children.some(e=>e.pinned)&&t.logError(`DataGrid`,`pinned должен быть указан у родительской колонки, а не у дочерних элементов`)})},ja=e=>{Aa(e);let t=e.reduce((e,t)=>{let n=t.pinned??`center`;return e[n]||(e[n]=[]),e[n].push(t),e},{});return{sections:[{position:`left`,columns:t.left||[]},{position:`center`,columns:t.center||[]},{position:`right`,columns:t.right||[]}]}}})))()}var Na;function Pa(){return(Pa=e((()=>{Na=e=>{e.forEach(e=>{let t=0;e.forEach(e=>{e.style.height=``}),e.forEach(e=>{let n=e.offsetHeight;n>t&&(t=n)}),e.forEach(e=>{e.style.height=`${t}px`})})}})))()}var Fa,Ia;function La(){return(La=e((()=>{Fa=c(),k(),V(),ba(),Ma(),Pa(),Ia=({isLoading:e,columns:t})=>{let n=(0,Fa.useRef)(null),{isMobile:r}=O(),i=(0,Fa.useMemo)(()=>t.some(e=>e.pinned),[t]),{rowsMapRef:a,...o}=va({hasPinnedColumns:i&&!r}),s=CSS.supports(`container-type`,`scroll-state`),c=(0,Fa.useCallback)(e=>e?e.scrollWidth>e.clientWidth:!1,[]),{sections:l}=(0,Fa.useMemo)(()=>ja(t),[t]);return(0,Fa.useLayoutEffect)(()=>{if(e||!i||r||typeof window>`u`)return;let t=new ResizeObserver(()=>{Na(a.current),!s&&(c(n.current)?n.current?.classList.add(B.overflowed):n.current?.classList.remove(B.overflowed))});if(n.current)return t.observe(n.current),()=>{t.disconnect()}},[i,e,r]),{containerRef:n,rowHoverProps:o,sections:l,hasPinnedColumns:i}}})))()}function Ra(){return(Ra=e((()=>{La()})))()}function za(){return(za=e((()=>{ka(),Ra()})))()}var Ba;function Va(){return(Va=e((()=>{Ba=e=>{let t=e.some(({minWidth:e})=>!!e),n=e.every(({minWidth:e})=>!!e);return t&&!n&&console.error(`UIKIT. DataGrid: Необходимо задать minWidth для всех колонок`),n}})))()}var X,Ha;function Ua(){return(Ua=e((()=>{X=c(),C(),oe(),Fe(),V(),mn(),Ta(),$t(),qt(),Zt(),Yt(),K(),on(),za(),Va(),Ha=({keyId:e,columns:t,rows:n=[],variant:r,tree:i,subrows:a,selectedRows:o=[],isLoading:c,isDisabled:l,getRowDisabled:u,mobileDisplayVariant:d=r===`subrows`?`cards`:`list`,onSelectRow:f,isError:p,onRetry:m,errorMsg:h,isHideSelectAll:g,isHideHeaderIfNoData:_=!1,sorting:v,className:y,onSort:b,maxHeight:x,gridViewMode:S=`standard`,massActions:ee})=>{let C=ae(),w=!!f,T=c||l,{imagesMap:E}=(0,X.useContext)(s),D=(0,X.useRef)(o);(0,X.useEffect)(()=>{D.current=o},[o]);let O=(0,X.useRef)([]);(0,X.useEffect)(()=>{c||(O.current=n)},[n,c]);let k=(0,X.useCallback)(()=>n.length<=1?t.map(e=>({...e,sortable:!1})):t,[t,n]),A=c?O.current:n,j=!A.length,{containerRef:M,rowHoverProps:te,sections:ne,hasPinnedColumns:N}=Ia({isLoading:c,columns:k()}),{isMobile:P,mobileSkeletonProps:re}=Da({containerRef:M,isLoading:c,columns:Xt(k()),rows:n,isNoScrollToTop:c&&j,mobileDisplayVariant:d}),ie=(0,X.useMemo)(()=>{let e=Object.is(r,pn.Subrows)?{...a,isInitialExpanded:!0}:i;return P?{...e,expandedLevel:1,initialVisibleChildrenCount:1}:e},[r,a,i,P]),{rowsDisabled:F,idsWithoutReason:I}=(0,X.useMemo)(()=>an(A,e,u),[A,e,u]);Sa(I);let oe=(0,X.useMemo)(()=>new Set(o.map(t=>t[e])),[o,e]),L=(0,X.useMemo)(()=>A.filter(t=>!t.options?.isNotSelectable&&!F.get(t[e])),[A,F,e]),se=(0,X.useMemo)(()=>Jt(Xt(t)),[t]),ce=Ba(Xt(t)),le=(0,X.useMemo)(()=>L.filter(t=>!oe.has(t[e])).length,[L,oe,e]),ue=t=>{if(!f)return;if(t.target.checked)return f(Me([...D.current,...L],t=>t[e]));let n=new Set(A.map(t=>t[e]));f(D.current.filter(t=>!n.has(t[e])))},de=(0,X.useCallback)(t=>n=>{if(f){if(n.target.checked)return f([...D.current,t]);f(D.current.filter(n=>n[e]!==t[e]))}},[]),fe=t.some(G),pe=fe?`full`:S,me=_&&j||fe&&j,he=(0,X.useMemo)(()=>({isLoading:c&&j||P&&c,isError:p&&j,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[h||``],imgSrc:E.defaultErrorImgSrc,onRetry:m},isSmoothLoading:!1,loadingPlaceholderClassname:B.loadingPlaceholder}),[c,p,j,h,m,E]),ge=Kt(x),R=!!ee;return{hasMassActions:R,isMassActionsOpen:Qt({hasMassActions:R,selectedRowsCount:o.length,isMobile:P}),dataGridClassName:y,containerCssVars:ge,isDataGridDisabled:T,treeRenderConfig:ie,renderRows:A,isAllowHorizontalScroll:ce,isHideHead:me,hasPinnedColumns:N,contentStateProps:he,rowHoverProps:te,isMobile:P,containerRef:M,gridColumns:se,isNoData:j,gridViewMode:pe,headColumns:k(),isLoading:c,mobileSkeletonProps:re,hasGroupedColumns:fe,headProps:{rowsCount:L.length,uncheckedRowsCount:le,isSelectable:w,onSelectAllRows:ue,isHideSelectAll:g,sorting:v,onSort:b},bodyProps:{isSelectable:w,selectedIds:oe,rowsDisabled:F,getRowDisabled:u,onSelectRow:de},mobileDisplayVariant:d,sections:ne,isSelfContained:d===`cards`,loaderProps:{isLoading:!C&&c,isVisibleDivider:!!n.length,isDisabled:l}}};try{Ha.displayName=`useLogic`,Ha.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/useLogic/useLogic.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!1,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},headPreAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Место для рендера перед head страницы`,name:`headPreAddon`,required:!1,tags:{private:`Предполагается для использования в реализации изменения размеров таблицы`},type:{name:`ReactNode`}},isHideHeaderIfNoData:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:{value:`variant === 'subrows' ? 'cards' : 'list'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function Wa(){return(Wa=e((()=>{Ua()})))()}var Ga,Z,Ka,qa,Ja,Ya;function Xa(){return(Xa=e((()=>{Ga=c(),C(),he(),l(),p(),w(),R(),Ar(),V(),jt(),mn(),bi(),ki(),Bi(),Gi(),da(),ga(),Wa(),Z=T(),Ka=n(B.pinnedSections,{variants:{isDisabled:{true:B.disabled}}}),qa=n(B.root,{variants:{hasMassActions:{true:B.hasMassActions},isMassActionsOpen:{true:B.massActionsOpen},hasPinnedColumns:{true:B.hasPinnedSections},isAllowHorizontalScroll:{true:B.isAllowHorizontalScroll},gridViewMode:{full:B.gridViewFull,standard:B.gridViewStandard},hasGroupedColumns:{true:B.hasGroupedColumns},mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList},isSelfContained:{true:_}}}),Ja=n(B.body,{variants:{isNoData:{true:B.bodyEmpty}}}),Ya=e=>{let{dataGridClassName:n,isDataGridDisabled:r,treeRenderConfig:i,headColumns:a,headProps:o,bodyProps:c,gridColumns:l,loaderProps:u,renderRows:d,isAllowHorizontalScroll:f,isHideHead:p,hasPinnedColumns:m,contentStateProps:h,rowHoverProps:g,containerRef:_,sections:v,isNoData:y,isMobile:b,mobileSkeletonProps:x,isLoading:S,containerCssVars:ee,hasGroupedColumns:C,gridViewMode:w,mobileDisplayVariant:T,isSelfContained:E,isMassActionsOpen:D,hasMassActions:O}=Ha(e),{emptySymbol:k}=(0,Ga.useContext)(s),{columns:A,selectedRows:j=[],onSelectRow:M,minDisplayRows:te=10,variant:ne=pn.Tree,footer:N,massActions:P,noDataPlaceholder:re,subrows:ie,keyId:F,activeRowId:I,emptyCellValue:ae=k,onRowClick:oe,noDataOptions:L,headPreAddon:se,isTabularNums:ce,renderRow:le,renderLink:ue}=e,{moreButtonColumnPosition:de=1,isVisibleCollapseButton:fe=!0}=ie||{},{isInitialExpanded:pe=!1,expandedLevel:he=1,initialVisibleChildrenCount:R=2}=i||{},_e=r?ma:pa,ve=(0,Ga.useCallback)(()=>S?null:re||(0,Z.jsx)(Ui,{...L}),[re,L,S]),ye={...c,keyId:F,minDisplayRows:te,rows:d,variant:ne,emptyCellValue:ae,isInitialExpanded:pe,expandedLevel:he,initialVisibleChildrenCount:R,moreButtonColumnPosition:de,isVisibleCollapseButton:fe,noDataPlaceholder:ve(),onRowClick:oe,...g,renderRow:le};return(0,Z.jsx)(Ot,{isLoading:S,isTabularNums:ce,gridColumns:l,emptyCellValue:ae,activeRowId:I,keyId:F,columns:A,onRowClick:oe,mobileDisplayVariant:T,renderLink:ue,selectedRows:j,onSelectRow:M,isMassActionsOpen:D,children:(0,Z.jsxs)(fa,{ref:_,style:ee,className:t(n,qa({isAllowHorizontalScroll:f,hasPinnedColumns:m,gridViewMode:w,hasGroupedColumns:C,mobileDisplayVariant:T,isSelfContained:E,hasMassActions:O,isMassActionsOpen:D})),children:[!m||b?(0,Z.jsxs)(_e,{...ge(r),className:B.wrapper,children:[se,!p&&(0,Z.jsx)(vi,{...o,columns:a,gridColumns:l}),(0,Z.jsx)(me,{...h,loadingContent:b&&(0,Z.jsx)(Ri,{...x}),children:(0,Z.jsx)(Or,{...ye,activeRowId:I,columns:A,gridColumns:l,className:Ja({isNoData:y})})})]}):(0,Z.jsx)(me,{...h,children:(0,Z.jsx)(la,{sections:v,className:Ka({isDisabled:r}),isDisabled:r,headProps:o,gridColumns:l,bodyProps:ye,isNoData:y})}),(0,Z.jsx)(Di,{...u}),P&&(0,Z.jsx)(ha,{children:P}),N&&N]})})};try{Ya.displayName=`DataGrid`,Ya.__docgenInfo={description:``,displayName:`DataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Обработчик сортировки`},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},noDataOptions:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для кастомизации компонента, использующегося в сценарии отсутствия данных`,name:`noDataOptions`,required:!1,tags:{},type:{name:`NoDataProps`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},headPreAddon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Место для рендера перед head страницы`,name:`headPreAddon`,required:!1,tags:{private:`Предполагается для использования в реализации изменения размеров таблицы`},type:{name:`ReactNode`}},isHideHeaderIfNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Убирает шапку таблицы, когда нет данных`,name:`isHideHeaderIfNoData`,required:!1,tags:{},type:{name:`boolean`}},gridViewMode:{defaultValue:{value:`standard`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Режим отображения разделителей в таблице`,name:`gridViewMode`,required:!1,tags:{default:`standard`},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Включает моноширинный шрифт для чисел в таблице`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{example:`<DataGrid renderRow={(row) => <DataGridCollapsibleRow><CustomContent row={row} /></DataGridCollapsibleRow>} />`},type:{name:`(row: TData, index: number) => ReactNode`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Оборачивает строку в свой компонент ссылки`,name:`renderLink`,required:!1,tags:{example:"<DataGrid renderLink={({ children, row }) => <Link to={`/docs/${row.id}`}>{children}</Link>} />"},type:{name:`DataGridRenderLink<TData>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения таблицы на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}var Q;function Za(){return(Za=e((()=>{a(),Q={root:r(`data-grid-row-base`),contentWrapper:r(`data-grid-row-base__content-wrapper`),hovered:r(`data-grid-row-base_hovered`),active:r(`data-grid-row-base_active`),mobileVariantCards:r(`data-grid-row-base_mobile-variant-cards`),mobileVariantList:r(`data-grid-row-base_mobile-variant-list`)}})))()}var Qa;function $a(){return($a=e((()=>{a(),Qa={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var eo;function to(){return(to=e((()=>{D(),f(),$a(),eo=b(h)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${Qa.hidden} {
      display: none;
    }
  }
`})))()}var no,ro,io;function ao(){return(ao=e((()=>{w(),Vt(),$a(),to(),no=T(),ro=n(Qa.root,{variants:{hidden:{true:Qa.hidden}}}),io=({cell:e,cellId:t,isFirstCell:n,row:r,emptyCellValue:i,isDisabled:a,startAdornment:o,href:s,target:c})=>{let{label:l,children:u,hideTitleOnMobile:d,isHideOnMobile:f}=e;return(0,no.jsxs)(no.Fragment,{children:[(0,no.jsx)(eo,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:ro({hidden:d||f}),children:l}),u.map((e,l)=>{let u=`${t}-${l}`;return(0,no.jsx)(zt,{row:r,cell:e,isHideOnMobile:f,emptyCellValue:i,isDisabled:a,startAdornment:n&&l===0&&o,isHidePersonalData:e.isHidePersonalData,className:z.grouped,href:s,target:c},u)})]})};try{io.displayName=`GroupCell`,io.__docgenInfo={description:``,displayName:`GroupCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/GroupCell.tsx`,methods:[],props:{cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridGroupColumn<Record<string, unknown>>`}},cellId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cellId`,required:!0,tags:{},type:{name:`string`}},isFirstCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isFirstCell`,required:!1,tags:{},type:{name:`boolean`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function oo(){return(oo=e((()=>{ao()})))()}var so,co,lo,uo;function fo(){return(fo=e((()=>{l(),D(),V(),Za(),so=b.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,co=b.li`
  --row-base-grid-columns: 1fr;

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
`,lo=b.div`
  position: relative;

  display: grid;
  grid-template-columns: var(--row-base-grid-columns);

  background-color: transparent;

  &.${Q.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${m} {
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
`,uo=b.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`})))()}var po,mo;function ho(){return(ho=e((()=>{po=c(),rt(),Kn(),tn(),Za(),mo=({className:e,row:t,keyId:n,onRowClick:r,columns:i,sectionOffset:a,customContent:o,renderStartAdornment:s,isSelected:c,hasBlockingAction:l,blockingActionReason:u,rowDisabled:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,gridColumns:_,activeRowId:v,emptyCellValue:y,isSelectable:b,rowId:x,mobileDisplayVariant:S,...ee})=>{let[C,w]=(0,po.useState)(!1),T=(0,po.useRef)(null),{isDrawerOpen:E,handleOpenDrawer:D,handleCloseDrawer:O}=Wn(),{options:k}=t,{style:A,...j}=ee||{},{href:M,isNotSelectable:te,target:ne}=k||{},{isDisabled:N,isDisabledLastCell:P,disabledReason:re,isCheckboxDisabled:ie,checkboxDisabledReason:F}=en({rowDisabled:d,hasBlockingAction:l,blockingActionReason:u,isDisabledLastCellOption:k?.isDisabledLastCell}),I=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&w(!0)},ae=()=>w(!1),oe={"--row-base-grid-columns":_,...A||{}},L=!!(!N&&(r||M)),se=v===x;return{handleRowClick:()=>{if(N){D();return}if(M)return nt(M,ne);r?.(t)},tooltipProps:{open:C,title:N?re:void 0,onOpen:I,onClose:ae,followCursor:!0,arrow:!1},checkboxProps:{checked:c,disabled:ie,disabledReason:F,onChange:f(t)},drawerProps:{open:E,onClose:O,title:`Заблокировано`},drawerContent:re,rowBaseVars:oe,isHovered:L,isActive:se,columns:i,emptyCellValue:y,rowRef:e=>{e?(T.current=e,h?.(x,e)):T.current&&=(g?.(x,T.current),null)},href:M,target:ne,onRowEnter:p,onRowLeave:m,rowId:x,row:t,isDisabled:N,sectionOffset:a,customContent:o,isDisabledLastCell:P,renderStartAdornment:s,isSelectable:b,isNotSelectable:te,dataGridInfiniteItemProps:j,mobileDisplayVariant:S,className:e}}})))()}function go(){return(go=e((()=>{ho()})))()}var _o,$,vo,yo,bo;function xo(){return(xo=e((()=>{_o=c(),P(),F(),p(),w(),R(),Vt(),W(),tr(),Gt(),K(),Za(),oo(),fo(),go(),$=T(),vo=n(Q.contentWrapper,{variants:{isHovered:{true:Q.hovered},isActive:{true:Q.active}}}),yo=n(Q.root,{variants:{mobileDisplayVariant:{cards:Q.mobileVariantCards,list:Q.mobileVariantList}}}),bo=(0,_o.memo)(e=>{let{className:n,tooltipProps:r,rowBaseVars:i,isHovered:a,isActive:o,drawerProps:s,emptyCellValue:c,rowRef:l,onRowEnter:u,onRowLeave:d,rowId:f,row:p,isDisabled:m,sectionOffset:h,customContent:g,isDisabledLastCell:_,renderStartAdornment:v,checkboxProps:y,href:b,target:x,isNotSelectable:S,isSelectable:ee,columns:C,dataGridInfiniteItemProps:w,handleRowClick:T,drawerContent:E,mobileDisplayVariant:D}=mo(e),O=()=>{let e=v?.(!0),t=ee&&!S;return!e&&!t?null:(0,$.jsxs)($.Fragment,{children:[e,t&&(0,$.jsx)(so,{...ge(m),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,$.jsx)(Ut,{...y})})]})},k=(0,_o.useCallback)(()=>{let e=C.length-1,t=_?void 0:[e];return C?.map((e,n)=>{let r=`row-base-${n}`,i=(h??0)+n,a=i===0,o=er(m,t,i);return G(e)?(0,$.jsx)(io,{cell:e,cellId:r,isFirstCell:a,row:p,emptyCellValue:c,isDisabled:o,startAdornment:a&&O(),href:b,target:x},r):(0,$.jsx)(zt,{row:p,cell:e,emptyCellValue:c,startAdornment:a&&O(),isDisabled:o,isHidePersonalData:e.isHidePersonalData,href:b,target:x},r)})},[p,C,m,_,h,v,y.checked,y.disabled,y.disabledReason]);return(0,$.jsxs)(co,{className:t(n,yo({mobileDisplayVariant:D})),style:i,...w,children:[(0,$.jsx)(j,{...r,children:(0,$.jsx)(lo,{ref:l,onPointerEnter:()=>u?.(f),onPointerLeave:e=>d?.(f,e.nativeEvent),className:vo({isHovered:a,isActive:o}),[Ze]:m,onClick:T,children:k()})}),g,(0,$.jsx)(M,{...s,children:(0,$.jsx)(uo,{children:E})})]},`row-base-${f}`)});try{bo.displayName=`RowBase`,bo.__docgenInfo={description:``,displayName:`RowBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/RowBase.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Массив колонок`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},renderStartAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Функция для рендера стартового элемента`,name:`renderStartAdornment`,required:!1,tags:{},type:{name:`(isFirstCell: boolean) => ReactNode`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Смещение секции для правильного расчета глобального индекса`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},rowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`rowId`,required:!0,tags:{},type:{name:`string`}},customContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Кастомный контент после ячеек`,name:`customContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбираемой`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбранной`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},hasBlockingAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Если true, в строке выполняется блокирующее действие DataGridActionCell`,name:`hasBlockingAction`,required:!1,tags:{},type:{name:`boolean`}},blockingActionReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки от блокирующего действия`,name:`blockingActionReason`,required:!1,tags:{},type:{name:`string`}},rowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Итоговая блокировка строки, рассчитанная resolveRowDisabled`,name:`rowDisabled`,required:!1,tags:{},type:{name:`DataGridRowDisabled`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик ухода со строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Удаление регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},gridColumns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Шаблон колонок (CSS grid-template-columns)`,name:`gridColumns`,required:!1,tags:{},type:{name:`string`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`ID активной строки`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Значение для пустой ячейки`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function So(){return(So=e((()=>{xo(),Za()})))()}function Co(){return(Co=e((()=>{Xa(),V(),Bi(),So(),jt(),Tt()})))()}export{vt as $,Hn as A,$t as B,gr as C,ur as D,dr as E,pn as F,Jt as G,Zt as H,mn as I,qt as J,Yt as K,on as L,Bn as M,Fn as N,cr as O,In as P,Tt as Q,an as R,yi as S,hr as T,K as U,Xt as V,G as W,Ot as X,jt as Y,kt as Z,ga as _,Q as a,ot as at,bi as b,Xa as c,Fe as ct,Da as d,yt as et,Ta as f,ha as g,fa as h,xo as i,at as it,zn as j,lr as k,za as l,Me as lt,Sa as m,So as n,ct as nt,Za as o,B as ot,Ca as p,Kt as q,bo as r,lt as rt,Ya as s,V as st,Co as t,gt as tt,Oa as u,Ri as v,mr as w,vi as x,zi as y,Qt as z};