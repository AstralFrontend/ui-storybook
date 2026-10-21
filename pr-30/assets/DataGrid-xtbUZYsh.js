import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,T as o,Xt as s,b as c,ba as l,cn as u,dt as d,ei as f,en as p,ft as m,hr as h,in as g,it as _,j as v,ji as y,ln as b,mr as x,rt as S,w as C,wn as w,y as T,ya as E,yn as D,za as O}from"./preview-CLkCEehX.js";import{n as k,t as A}from"./useViewportType-5a2B2cxm.js";import{t as j}from"./Skeleton-DmjwzuS2.js";import{n as M,t as ee}from"./isDeepEqual-Soyxt--M.js";import{t as N}from"./Tooltip-D6oFU8Z2.js";import{t as P}from"./BottomDrawer-Sd89wMPh.js";import{t as te}from"./Divider-CIAHRpGY.js";import{t as F}from"./Collapse-p5gvwaxZ.js";import{t as ne}from"./Collapse-BpHQ7FuK.js";import{t as re}from"./BottomDrawer-CT37gn-G.js";import{r as I,t as ie}from"./personalDataSecurity-UNsIWlLQ.js";import{t as ae}from"./Tooltip-C37sBD3b.js";import{t as L}from"./Checkbox-DW1qPyLy.js";import{n as oe}from"./useFirstMountState-DFyzno5S.js";import{t as se}from"./useFirstMountState-DJBWac9b.js";import{t as ce}from"./Checkbox-vxCFGERU.js";import{t as R}from"./OverflowTypography-DfazMmG_.js";import{t as le}from"./OverflowTypography-COSBXXhW.js";import{i as ue,n as de,r as fe,t as pe}from"./LinearProgress-Dx3cge1S.js";import{n as me,t as he}from"./isBrowser-CqlMecsi.js";import{n as ge}from"./useLocalStorage-CQ8elvbF.js";import{t as _e}from"./useLocalStorage-D4apRF32.js";import{t as ve}from"./Skeleton-BN_Lyi9F.js";import{t as ye}from"./ContentState-Ce_m8fLn.js";import{t as be}from"./ContentState-cbZebdWj.js";import{n as xe,t as Se}from"./getInertProps-C4YKdiLu.js";import{t as Ce}from"./Divider-BE4oqVhT.js";import{n as we,t as Te}from"./ChevronROutlineMd-BI-ynC5s.js";import{i as Ee,n as De,r as Oe}from"./HintIcon-C0QelzrY.js";import{n as ke,t as Ae}from"./constants-xyMQjI_j.js";import{a as je,c as Me,i as Ne,n as Pe,s as Fe,t as Ie}from"./SortUpFillSm-DFAU06Eo.js";import{n as Le,t as Re}from"./generateLocalStorageKey-CuuetdeM.js";function ze(e,t,n){n===void 0&&(n=!1);for(var r=[],i=0;i<e.length;i++){var a=e[i],o=n?t(a,i,e):t(a);if(o.hasMany===!0?r.push.apply(r,o.next):o.hasNext&&r.push(o.next),o.done)break}return r}function Be(){return h(Ve,arguments,He)}function Ve(e,t){return ze(e,He(t))}function He(e){var t=new Set;return function(n){var r=e(n);return t.has(r)?{done:!1,hasNext:!1}:(t.add(r),{done:!1,hasNext:!0,next:n})}}function Ue(){return(Ue=e((()=>{x()})))()}var z;function We(){return(We=e((()=>{a(),z={root:r(`data-grid__cell`),isHideOnMobile:r(`data-grid__cell_hide-on-mobile`),columnLabel:r(`data-grid__cell-column-label`),columnLabelHidden:r(`data-grid__cell-column-label_hidden`),actionColumn:r(`data-grid__cell_action-column`),cellContent:r(`data-grid__cell-content`),disabled:r(`data-grid__cell_disabled`),withStartAdornment:r(`data-grid__cell_with-start-adornment`),alignLeft:r(`data-grid__cell_align-left`),alignCenter:r(`data-grid__cell_align-center`),alignRight:r(`data-grid__cell_align-right`),grouped:r(`data-grid__cell_grouped`),tabularNums:r(`data-grid__cell_tabular-nums`),anchorCell:r(`data-grid__cell_anchor-cell`),withLink:r(`data-grid__cell_with-link`)}})))()}var Ge,Ke;function qe(){return(qe=e((()=>{D(),d(),We(),Ge=y(m)`
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
`})))()}var Je,Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{le(),w(),We(),qe(),Je=E(),Ye=n(z.cellContent,{variants:{isActionColumn:{true:z.actionColumn},isTabularNums:{true:z.tabularNums}}}),Xe=n(z.columnLabel,{variants:{hidden:{true:z.columnLabelHidden}}}),Ze=({row:e,label:t,hideTitleOnMobile:n,isActionColumn:r,isTabularNums:i,startAdornment:a,renderCell:o,formattedValue:s,hidePersonalDataClassname:c})=>(0,Je.jsxs)(Je.Fragment,{children:[a,(0,Je.jsxs)(Ke,{className:Ye({isActionColumn:r,isTabularNums:i}),children:[(0,Je.jsx)(Ge,{variant:`caption`,color:`textSecondary`,className:Xe({hidden:n||r}),children:t}),o?.(e),!o&&(0,Je.jsx)(R,{rowsCount:2,tooltipProps:{className:c},children:(0,Je.jsx)(Je.Fragment,{children:s})})]})]});try{Ze.displayName=`CellInner`,Ze.__docgenInfo={description:``,displayName:`CellInner`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/CellInner.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Название колонки`,name:`label`,required:!1,tags:{},type:{name:`string`}},hideTitleOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Скрытие заголовка колонки на мобильных устройствах`,name:`hideTitleOnMobile`,required:!1,tags:{},type:{name:`boolean`}},isActionColumn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Флаг колонки с действиями`,name:`isActionColumn`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Моноширинный шрифт для чисел`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки слева`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},renderCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Кастомное отображение ячейки`,name:`renderCell`,required:!1,tags:{},type:{name:`RenderCell<Record<string, unknown>>`}},formattedValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Отформатированное значение ячейки`,name:`formattedValue`,required:!1,tags:{},type:{name:`unknown`}},hidePersonalDataClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Класс для скрытия персональных данных`,name:`hidePersonalDataClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function $e(){return($e=e((()=>{Qe()})))()}var et,tt;function nt(){return(nt=e((()=>{et=E(),tt=({children:e,row:t,renderLink:n,href:r,target:i})=>n?n({children:e,row:t})??e:r?(0,et.jsx)(`a`,{href:r,target:i,rel:`noopener noreferrer`,children:e}):e;try{tt.displayName=`LinkWrapper`,tt.__docgenInfo={description:`Оборачивает содержимое ячейки в ссылку`,displayName:`LinkWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/LinkWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Содержимое ячейки`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Данные строки вместе с её options`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown> & { options?: DataGridRowOptions<TData>; children?: DataGridRowWithOptions<TData>[]; }`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Кастомная отрисовка ссылки строки`,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<TData>`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function rt(){return(rt=e((()=>{nt()})))()}var it,B,at;function V(){return(V=e((()=>{a(),it=`actions`,B={loadingPlaceholder:r(`data-grid__loading-placeholder`),header:r(`data-grid__header`),root:r(`data-grid`),body:r(`data-grid__body`),bodyEmpty:r(`data-grid__body_empty`),disabled:r(`data-grid_disabled`),pinnedSectionNoData:r(`data-grid__pinned-section_no-data`),hasPinnedSections:r(`data-grid_has-pinned-sections`),pinnedSections:r(`data-grid__pinned-sections`),leftPinnedSection:r(`data-grid__left-pinned-section`),rightPinnedSection:r(`data-grid__right-pinned-section`),overflowed:r(`data-grid_overflowed`),wrapper:r(`data-grid__wrapper`),hasMassActions:r(`data-grid_has-mass-actions`),massActionsOpen:r(`data-grid_mass-actions-open`),isAllowHorizontalScroll:r(`data-grid_is-allow-horizontal-scroll`),hasGroupedColumns:r(`data-grid_has-grouped-columns`),gridViewFull:r(`data-grid_grid-view-full`),gridViewStandard:r(`data-grid_grid-view-standard`),mobileVariantCards:r(`data-grid_mobile-variant-cards`),mobileVariantList:r(`data-grid_mobile-variant-list`)},at={list:r(`data-grid__skeleton-list`),item:r(`data-grid__skeleton-item`)}})))()}var ot,H,U,st,ct;function lt(){return(lt=e((()=>{a(),ot=`data-row-disable`,H={root:r(`data-grid__row`),showConnector:r(`data-grid__row_show-connector`),hidden:r(`data-grid__row_hidden`),hover:r(`data-grid__row_hover`),hasPinnedColumns:r(`data-grid__row_has-pinned-columns`),checkbox:r(`data-grid__row-checkbox`),mobileVariantCards:r(`data-grid__row_mobile-variant-cards`),mobileVariantList:r(`data-grid__row_mobile-variant-list`),nestedChildren:r(`data-grid__row-nested-children`),hasOpenChildren:r(`data-grid__row_has-open-children`),hasNestedChildren:r(`data-grid__row_has-nested-children`)},U={root:r(`data-grid__row-content`),hovered:r(`data-grid__row-content_hovered`),active:r(`data-grid__row-content_active`)},st={single:r(`data-grid__row-cell_single`),grouped:r(`data-grid__row-cell_grouped`),firstCell:r(`data-grid__row-cell_first`)},ct={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var ut;function dt(){return(dt=e((()=>{D(),V(),lt(),We(),ut=y.div`
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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=(e,t=`_self`)=>{let n=document.createElement(`a`);n.href=e,n.target=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})))()}var mt,ht;function gt(){return(gt=e((()=>{mt=O(),ht=(0,mt.createContext)({isLoading:!1,isTabularNums:!1,emptyCellValue:``,activeRowId:``,keyId:``,columns:[],onRowClick:()=>void 0,mobileDisplayVariant:`list`})})))()}var _t,vt;function yt(){return(yt=e((()=>{_t=O(),vt=(0,_t.createContext)({selectedRows:[],isMassActionsOpen:!1})})))()}var bt,xt,St,Ct;function wt(){return(wt=e((()=>{bt=O(),yt(),xt=E(),St=[],Ct=({selectedRows:e=St,onSelectRow:t,isMassActionsOpen:n=!1,children:r})=>{let i=(0,bt.useMemo)(()=>({selectedRows:e,onSelectRow:t,isMassActionsOpen:n}),[e,t,n]);return(0,xt.jsx)(vt.Provider,{value:i,children:r})};try{Ct.displayName=`DataGridSelectionProvider`,Ct.__docgenInfo={description:``,displayName:`DataGridSelectionProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,methods:[],props:{selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Tt(){return(Tt=e((()=>{wt()})))()}function Et(){return(Et=e((()=>{yt(),Tt()})))()}var Dt,Ot;function kt(){return(kt=e((()=>{Dt=O(),Ot=(0,Dt.createContext)({getItem:()=>void 0,setItem:()=>void 0})})))()}var At,jt,Mt;function Nt(){return(Nt=e((()=>{At=O(),kt(),jt=E(),Mt=({children:e})=>{let t=(0,At.useRef)({}),n=(0,At.useCallback)(e=>t.current[e],[]),r=(0,At.useCallback)((e,n)=>{t.current[e]=n},[]),i=(0,At.useMemo)(()=>({getItem:n,setItem:r}),[n,r]);return(0,jt.jsx)(Ot.Provider,{value:i,children:e})};try{Mt.displayName=`DataGridStorageProvider`,Mt.__docgenInfo={description:``,displayName:`DataGridStorageProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Pt(){return(Pt=e((()=>{Nt()})))()}function Ft(){return(Ft=e((()=>{kt(),Pt()})))()}var It,Lt,Rt;function zt(){return(zt=e((()=>{It=O(),Et(),Ft(),gt(),Lt=E(),Rt=({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,children:i,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l,selectedRows:u,onSelectRow:d,isMassActionsOpen:f})=>{let p=(0,It.useMemo)(()=>({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l}),[e,t,n,r,a,o,s,c,l]);return(0,Lt.jsx)(ht.Provider,{value:p,children:(0,Lt.jsx)(Ct,{selectedRows:u,onSelectRow:d,isMassActionsOpen:f,children:(0,Lt.jsx)(Mt,{children:i})})})};try{Rt.displayName=`DataGridContextProvider`,Rt.__docgenInfo={description:``,displayName:`DataGridContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,methods:[],props:{isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!0,tags:{},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<Record<string, unknown>>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Bt(){return(Bt=e((()=>{zt()})))()}function Vt(){return(Vt=e((()=>{gt(),Bt()})))()}var Ht,Ut;function Wt(){return(Wt=e((()=>{Ht=O(),pt(),V(),Vt(),Ut=({row:e,href:t,target:n,cell:r,emptyCellValue:i,startAdornment:a})=>{let{isTabularNums:o,renderLink:s}=(0,Ht.useContext)(ht),{format:c,field:l,label:u,hideTitleOnMobile:d,isTabularNums:f}=r,p=f??o,m=e=>!!e||e===0,h=(0,Ht.useMemo)(()=>c&&m(c(e))?c(e):l&&m(e[l])?e[l]:i,[l,c,e,i]),g=!!a,_=r.field===it,v=()=>{if(_&&t)return ft(t,n)},y=_?void 0:{href:t,target:n,renderLink:s};return{formattedValue:h,hasStartAdornment:g,isActionColumn:_,label:u,hideTitleOnMobile:d,isTabularNums:p,linkProps:y,hasLink:!!(y?.renderLink||y?.href),onCellClick:v}}})))()}function Gt(){return(Gt=e((()=>{Wt()})))()}var Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{Kt=l(),ie(),A(),f(),w(),Se(),$e(),We(),rt(),dt(),Gt(),qt=E(),Jt=n(z.root,{variants:{isHideOnMobile:{true:z.isHideOnMobile},isDisabled:{true:z.disabled},withStartAdornment:{true:z.withStartAdornment},align:{left:z.alignLeft,center:z.alignCenter,right:z.alignRight},isActionColumn:{true:z.actionColumn},withLink:{true:z.withLink}}}),Yt=e=>{let{formattedValue:n,hasStartAdornment:r,isActionColumn:i,label:a,hideTitleOnMobile:o,isTabularNums:s,linkProps:c,hasLink:l,onCellClick:u}=Ut(e),{className:d,startAdornment:f,row:p,cell:m,isDisabled:h,isHidePersonalData:g,isHideOnMobile:_,hasNestedChildren:v,rootRowElement:y}=e,{renderCell:b,align:x=`left`}=m,{isMobile:S}=k(),C=I({isEnabled:g===!0}),w=(0,qt.jsx)(ut,{className:t(d,C,Jt({isHideOnMobile:m.isHideOnMobile||_,isDisabled:h,withStartAdornment:r,align:x,isActionColumn:i,withLink:l})),...xe(h),onClick:u,children:(0,qt.jsx)(tt,{row:p,...c,children:(0,qt.jsx)(Ze,{row:p,label:a,hideTitleOnMobile:o,isActionColumn:i,isTabularNums:s,startAdornment:f,renderCell:b,formattedValue:n,hidePersonalDataClassname:C})})});return i&&S&&v?y?(0,Kt.createPortal)(w,y):null:w};try{Yt.displayName=`Cell`,Yt.__docgenInfo={description:``,displayName:`Cell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/Cell.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridSingleColumn<TData>`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Если true, ячейка будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},isHideOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие ячейки на мобильных устройствах`,name:`isHideOnMobile`,required:!1,tags:{},type:{name:`boolean`}},hasNestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Флаг наличия вложенных элементов в строке`,name:`hasNestedChildren`,required:!1,tags:{},type:{name:`boolean`}},rootRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Ссылка на корневой элемент строки`,name:`rootRowElement`,required:!1,tags:{},type:{name:`HTMLLIElement`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Zt(){return(Zt=e((()=>{Xt(),We()})))()}var Qt,$t;function en(){return(en=e((()=>{ce(),ae(),Qt=E(),$t=({disabledReason:e,...t})=>e?(0,Qt.jsx)(N,{title:e,enterDelay:300,enterNextDelay:300,withoutContainer:!1,children:(0,Qt.jsx)(L,{...t})}):(0,Qt.jsx)(L,{...t});try{$t.displayName=`RowCheckbox`,$t.__docgenInfo={description:`Checkbox строки. Для заблокированного выбора показывает причину в tooltip`,displayName:`RowCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/RowCheckbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки выбора`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function tn(){return(tn=e((()=>{en()})))()}var nn;function rn(){return(rn=e((()=>{nn=({maxHeight:e,gridColumns:t})=>({"--data-grid-columns":t,...e&&{"--max-height":`${e}px`}})})))()}var an;function on(){return(on=e((()=>{an=e=>e.map(({width:e,minWidth:t})=>{let n=e||`1fr`;return t?`minmax(${t}, ${n})`:n}).join(` `)})))()}var W;function G(){return(G=e((()=>{W=e=>`children`in e&&Array.isArray(e.children)})))()}var sn;function cn(){return(cn=e((()=>{G(),sn=(e,t)=>e.flatMap(e=>{let n=e.pinned??t;return W(e)?sn(e.children,n):{...e,pinned:n}})})))()}var ln;function un(){return(un=e((()=>{ln=({hasMassActions:e,selectedRowsCount:t,isMobile:n})=>e&&t>0&&!n})))()}var dn;function fn(){return(fn=e((()=>{dn=({rowDisabled:e,hasBlockingAction:t=!1,blockingActionReason:n,isDisabledLastCellOption:r=!0})=>{let i=e?.mode,a=i===`selection`,o=t||i===`row`||i===`row-except-last-cell`,s=e?.reason||n;return{isDisabled:o,isDisabledLastCell:i?i!==`row-except-last-cell`:r,disabledReason:s,isCheckboxDisabled:o||a,checkboxDisabledReason:a?s:void 0}}})))()}var pn;function mn(){return(mn=e((()=>{pn=(e,t)=>{let n=t?.(e);if(n)return n;let{isDisabled:r,isDisabledLastCell:i=!0,disabledReason:a=``}=e.options??{};if(r)return{mode:i?`row`:`row-except-last-cell`,reason:a}}})))()}var hn;function gn(){return(gn=e((()=>{mn(),hn=(e,t,n)=>{let r=new Map,i=[];return e.forEach(e=>{let a=e[t],o=n?.(e);o&&!o.reason&&i.push(a),r.set(a,o??pn(e))}),{rowsDisabled:r,idsWithoutReason:i}}})))()}var _n;function vn(){return(vn=e((()=>{_n=e=>{let t=new Set;e.forEach(({id:e})=>{if(t.has(e))throw Error(`DataGrid: plugin "${e}" передан несколько раз`);t.add(e)})}})))()}var yn;function bn(){return(bn=e((()=>{yn=(e,t)=>e?.find(e=>e.id===t)})))()}var xn;function Sn(){return(Sn=e((()=>{xn=e=>JSON.stringify(e.map(({field:e})=>e===void 0?null:String(e)))})))()}var Cn;function wn(){return(wn=e((()=>{Cn=(e,t)=>`${e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}:${t}`})))()}var Tn;function En(){return(En=e((()=>{a(),Tn={root:r(`data-grid-nested-rows`),additionalRows:r(`data-grid-nested-rows__additional-rows`),variantSubrows:r(`data-grid-nested-rows_variant-subrows`),variantTree:r(`data-grid-nested-rows_variant-tree`)}})))()}var Dn,On,kn;function An(){return(An=e((()=>{u(),D(),Zt(),V(),lt(),En(),Dn=y(`ul`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
    &.${Tn.variantSubrows} .${z.root}:first-of-type {
      display: none;

      & + .${z.root} {
        margin-top: 0;
      }
    }

    & .${z.actionColumn} {
      display: none;
    }

    /* Высота последнего декоративного элемента полная тк у AdditionalRows есть кнопка "Показать все/Скрыть" */
    &.${Tn.additionalRows} .${H.nestedChildren}:last-of-type::before {
      height: 100%;
    }
  }
`,On=y(`li`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
`,kn=y(b,{shouldForwardProp:e=>![`$moreButtonColumnPosition`].includes(e)})`
  grid-column: ${({$moreButtonColumnPosition:e})=>e};
  justify-self: start;

  margin: ${({theme:e})=>e.spacing(0,2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`})))()}var jn;function Mn(){return(Mn=e((()=>{jn=function(e){return e.Tree=`tree`,e.Subrows=`subrows`,e}({})})))()}var Nn,Pn;function Fn(){return(Fn=e((()=>{Nn=O(),Mn(),Pn=({data:e,level:t,variant:n,initialVisibleChildrenCount:r})=>{let i=Object.is(n,jn.Tree),a=i?t+1:0,o=e?.slice(0,r),s=e?.slice(r),[c,l]=(0,Nn.useState)(!1);return{isShowAllChildren:c,isShowMoreButton:!!s?.length,isShowConnector:i,initialVisibleChildren:o,otherChildren:s,nextLevel:a,handleToggleShowAllChildren:e=>{e.stopPropagation(),l(e=>!e)}}}})))()}function In(){return(In=e((()=>{Fn()})))()}var Ln,Rn,zn;function Bn(){return(Bn=e((()=>{ne(),w(),lt(),En(),An(),In(),Ln=E(),Rn=n(Tn.root,{variants:{variant:{subrows:Tn.variantSubrows,tree:Tn.variantTree}}}),zn=e=>{let{isShowAllChildren:t,isShowMoreButton:n,isShowConnector:r,nextLevel:i,initialVisibleChildren:a,otherChildren:o,handleToggleShowAllChildren:s}=Pn(e),{isOpen:c,data:l,keyId:u,level:d,moreButtonColumnPosition:f,renderRow:p,variant:m}=e;return!l||!l.length?null:(0,Ln.jsx)(F,{in:c,unmountOnExit:!0,children:(0,Ln.jsxs)(Dn,{$level:d,$isShowConnector:r,className:Rn({variant:m}),children:[a.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:H.nestedChildren})}),c&&(0,Ln.jsxs)(Ln.Fragment,{children:[(0,Ln.jsx)(F,{in:t,component:`li`,unmountOnExit:!0,children:(0,Ln.jsx)(Dn,{$level:d,$isShowConnector:r,className:Tn.additionalRows,children:o.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:`${H.hidden} ${H.nestedChildren}`})})})}),n&&(0,Ln.jsx)(On,{$level:i,$isShowConnector:r,children:(0,Ln.jsx)(kn,{$moreButtonColumnPosition:f,variant:`link`,onClick:s,children:t?`Скрыть`:`Показать все`})})]})]})})};try{zn.displayName=`NestedChildren`,zn.__docgenInfo={description:``,displayName:`NestedChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Если true, список дочерних элементов раскрыт`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Данные для отображения`,name:`data`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`({ key, level, row, nestedChildren, options, className, }: { key: string; row: TData; level: number; nestedChildren: (TData & { options?: DataGridRowOptions<TData>; })[]; options?: DataGridRowOptions<TData>; className?: string; }) => ReactElement<...>`}}},tags:{}}}catch{}})))()}function Vn(){return(Vn=e((()=>{Bn()})))()}var Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn;function Zn(){return(Zn=e((()=>{Te(),s(),S(),D(),d(),Zt(),V(),lt(),Hn=y.li`
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
      &:not(.${H.nestedChildren}) > .${U.root} .${z.root}:not(.${st.firstCell}) {
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
       > .${U.root} .${z.root}.${st.firstCell} 
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
`,Un=y.div`
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
`,Wn=y(Yt)`
  &:first-of-type {
    margin-left: calc(var(--level) * ${32}px);
  }
`,Gn=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,Kn=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,qn=y(_)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,Jn=y(we,{shouldForwardProp:e=>e!==`$isActive`})`
  transform: rotateZ(${({$isActive:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`,Yn=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`,Xn=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${ct.hidden} {
      display: none;
    }
  }
`})))()}var Qn,$n;function er(){return(er=e((()=>{Qn=O(),$n=(0,Qn.createContext)({hasBlockingAction:!1,isSelectable:!1,addBlockingAction:()=>void 0,removeBlockingAction:()=>void 0,row:{},onSelectRow:()=>()=>void 0,onRowEnter:()=>void 0,onRowLeave:()=>void 0,registerRowElement:()=>void 0,unregisterRowElement:()=>void 0,itemProps:{},isSelected:!1})})))()}var tr,nr,rr;function ir(){return(ir=e((()=>{tr=O(),er(),nr=E(),rr=({row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,children:s,isSelectable:c,isSelected:l,disabledMode:u,disabledReason:d})=>{let[f,p]=(0,tr.useState)(!1),[m,h]=(0,tr.useState)(),g=(0,tr.useCallback)(e=>{p(!0),h(e)},[]),_=(0,tr.useCallback)(()=>{p(!1),h(void 0)},[]),v=(0,tr.useMemo)(()=>u?{mode:u,reason:d??``}:void 0,[u,d]),y=(0,tr.useMemo)(()=>({hasBlockingAction:f,blockingActionReason:m,addBlockingAction:g,removeBlockingAction:_,isSelectable:c,row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,isSelected:l,rowDisabled:v}),[f,m,g,_,c,e,t,n,r,i,a,o,l,v]);return(0,nr.jsx)($n.Provider,{value:y,children:s})};try{rr.displayName=`RowContextProvider`,rr.__docgenInfo={description:``,displayName:`RowContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},itemProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`itemProps`,required:!1,tags:{},type:{name:`object`}},disabledMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Режим блокировки строки`,name:`disabledMode`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "selection" | "row-except-last-cell"`,value:[{value:`"row"`},{value:`"selection"`},{value:`"row-except-last-cell"`}]}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Причина блокировки строки`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ar(){return(ar=e((()=>{ir()})))()}function or(){return(or=e((()=>{er(),ar()})))()}var sr,cr;function lr(){return(lr=e((()=>{sr=O(),A(),cr=()=>{let{isMobile:e}=k(),[t,n]=(0,sr.useState)(!1);return{isMobile:e,isDrawerOpen:t,handleOpenDrawer:()=>{e&&n(!0)},handleCloseDrawer:()=>{n(!1)}}}})))()}function ur(){return(ur=e((()=>{lr()})))()}var dr;function fr(){return(fr=e((()=>{dr=e=>e.reduce((e,{field:t,...n})=>t?{...e,[t]:n}:e,{})})))()}var pr;function mr(){return(mr=e((()=>{fr(),pr=(e,t)=>{if(!t)return e;let n=dr(t);return Object.keys(n).length?e.map(e=>e.hasOwnProperty(`field`)?{...e,...n[e.field]||{}}:e):e}})))()}var K,hr;function gr(){return(gr=e((()=>{K=O(),Vt(),Mn(),fn(),mn(),lt(),or(),ur(),mr(),hr=({keyId:e,columns:t,row:n,nestedChildren:r,level:i,variant:a,options:o,isInitialExpanded:s=!1,expandedLevel:c,isSelectable:l,isSelected:u,getRowDisabled:d,isNested:f=!1,onSelectRow:p,onRowClick:m,isVisibleCollapseButton:h,registerRowElement:g,unregisterRowElement:_,style:v,activeRowId:y})=>{let{isDrawerOpen:b,handleOpenDrawer:x,handleCloseDrawer:S}=cr(),[C,w]=(0,K.useState)(null),T=(0,K.useCallback)(e=>{e&&w(e)},[]),E=!!(s&&i<=c-1&&r?.length),{mobileDisplayVariant:D}=(0,K.useContext)(ht),{hasBlockingAction:O,blockingActionReason:k,rowDisabled:A}=(0,K.useContext)($n),[j,M]=(0,K.useState)(E),ee=(0,K.useRef)(null),N=e=>{e?(ee.current=e,g?.(F,e)):ee.current&&=(_?.(F,ee.current),null)},[P,te]=(0,K.useState)(!1),F=n[e],{href:ne}=o||{},re=(0,K.useMemo)(()=>f?pn(n,d):A,[f,n,d,A]),{isDisabled:I,isDisabledLastCell:ie,disabledReason:ae,isCheckboxDisabled:L,checkboxDisabledReason:oe}=dn({rowDisabled:re,hasBlockingAction:O,blockingActionReason:k,isDisabledLastCellOption:o?.isDisabledLastCell}),se=()=>{if(I){x();return}m?.(n)},ce=Object.is(a,jn.Tree),R=(0,K.useMemo)(()=>pr(t,o?.childrenColumns),[t,o]),le=(0,K.useCallback)(e=>{e.stopPropagation(),M(e=>!e)},[]),ue=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&te(!0)},de=()=>te(!1),fe=e=>{I&&e.target.getAttribute(`data-row-disable`)!==`true`&&te(!1)},pe=!!r?.length&&h,me=(0,K.useMemo)(()=>({"--level":i,...v}),[i,v]),he=!!(!I&&(m||ne)),ge=y===F,_e=(0,K.useMemo)(()=>p(n),[p,n]);return{disabledReason:ae,rowStyles:me,isOpen:j,isShowConnector:ce,childrenColumns:R,rowId:F,rowRef:N,isDisabled:I,isDisabledLastCell:ie,isSelectable:l,isRenderCollapseButton:pe,handleToggle:le,rootRowElement:C,rootRowRef:T,isHovered:he,isActive:ge,mobileDisplayVariant:D,rowProps:{onClick:se,onMouseMove:fe},drawerProps:{open:b,onClose:S,title:`Заблокировано`},tooltipProps:{open:P,title:I?ae:void 0,onOpen:ue,onClose:de},checkboxProps:{checked:u,disabled:L,disabledReason:oe,onChange:_e},nestedChildrenProps:{isOpen:j}}}})))()}function _r(){return(_r=e((()=>{gr()})))()}var vr;function yr(){return(yr=e((()=>{vr=(e,t,n)=>e?!t||!t.includes(n):!1})))()}var br,q,xr,Sr,Cr,wr,Tr,Er;function Dr(){return(Dr=e((()=>{br=O(),re(),ae(),f(),w(),Se(),Zt(),tn(),G(),lt(),Vn(),Zn(),_r(),yr(),q=E(),xr=n(H.root,{variants:{isShowConnector:{true:H.showConnector},mobileDisplayVariant:{cards:H.mobileVariantCards,list:H.mobileVariantList},hasNestedChildren:{true:H.hasNestedChildren}}}),Sr=n(U.root,{variants:{isHovered:{true:U.hovered},isActive:{true:U.active}}}),Cr=n(ct.root,{variants:{hidden:{true:ct.hidden}}}),wr=n(st.single,{variants:{isFirstCell:{true:st.firstCell}}}),Tr=e=>{let{isOpen:n,isShowConnector:r,childrenColumns:i,rowId:a,handleToggle:o,checkboxProps:s,rowProps:c,isHovered:l,tooltipProps:u,nestedChildrenProps:d,isDisabled:f,isDisabledLastCell:p,isRenderCollapseButton:m,rowRef:h,rowStyles:g,drawerProps:_,disabledReason:v,isActive:y,isSelectable:b,mobileDisplayVariant:x,rootRowElement:S,rootRowRef:C}=hr(e),{className:w,row:T,options:E,variant:D,isInitialExpanded:O,expandedLevel:k,level:A,nestedChildren:j,initialVisibleChildrenCount:M,moreButtonColumnPosition:ee,isVisibleCollapseButton:te,columns:F,emptyCellValue:ne,activeRowId:re,keyId:I,onSelectRow:ie,onRowClick:ae,sectionOffset:L,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:R,onRowLeave:le,style:ue,getRowDisabled:de,isNested:fe,...pe}=e,{isNotSelectable:me,href:he,target:ge}=E||{},_e=()=>!m&&(!b||me)?null:(0,q.jsxs)(q.Fragment,{children:[m&&(0,q.jsx)(Kn,{children:(0,q.jsx)(qn,{variant:`text`,onClick:o,children:(0,q.jsx)(Jn,{$isActive:n})})}),b&&!me&&(0,q.jsx)(Gn,{...xe(f),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,q.jsx)($t,{...s})})]}),ve=(0,br.useCallback)(()=>{let e=(oe??F.length)-1,n=p?void 0:[e];return F?.map((e,r)=>{let i=`${a}-${r}`,o=(L??0)+r,s=vr(f,n,o),c=o===0;if(W(e)){let{label:n,children:r,hideTitleOnMobile:a,isHideOnMobile:o}=e;return(0,q.jsxs)(br.Fragment,{children:[(0,q.jsx)(Xn,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:Cr({hidden:a||o}),children:n}),r.map((e,n)=>{let r=`${i}-${n}`;return(0,q.jsx)(Wn,{row:T,cell:e,isHideOnMobile:o,emptyCellValue:ne,isDisabled:s,startAdornment:c&&n===0&&_e(),isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!j?.length,className:t(z.grouped),rootRowElement:S,href:he,target:ge},r)})]},i)}return(0,q.jsx)(Wn,{className:wr({isFirstCell:c}),row:T,cell:e,emptyCellValue:ne,startAdornment:c&&_e(),isDisabled:s,isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!j?.length,rootRowElement:S,href:he,target:ge},i)})},[T,n,F,f,p,s.checked,s.disabled,s.disabledReason,oe,L,S]),ye=(0,br.useCallback)(({key:e,...t})=>(0,q.jsx)(Tr,{keyId:I,...t,variant:D,isSelectable:b,isInitialExpanded:O,expandedLevel:k,initialVisibleChildrenCount:M,moreButtonColumnPosition:ee,isVisibleCollapseButton:te,activeRowId:re,columns:i,onSelectRow:ie,onRowClick:ae,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:R,onRowLeave:le,sectionOffset:L,getRowDisabled:de,isNested:!0},e),[I,D,b,O,k,M,ee,L,oe,re,i,ie,ae,se,ce,R,le,de]);return(0,q.jsxs)(Hn,{className:t(w,xr({isShowConnector:r,mobileDisplayVariant:x,hasNestedChildren:!!j?.length})),style:g,...pe,ref:C,children:[(0,q.jsx)(N,{followCursor:!0,arrow:!1,...u,children:(0,q.jsx)(Un,{"data-row-id":a,ref:h,onPointerEnter:()=>R?.(a),onPointerLeave:e=>le?.(a,e.nativeEvent),className:Sr({isHovered:l,isActive:y}),[ot]:f,...c,children:ve()})}),(0,q.jsx)(zn,{...d,data:j,keyId:I,level:A,variant:D,initialVisibleChildrenCount:M,moreButtonColumnPosition:ee,renderRow:ye}),(0,q.jsx)(P,{..._,children:(0,q.jsx)(Yn,{children:v})})]},`row-${a}`)},Er=(0,br.memo)(Tr);try{Er.displayName=`Row`,Er.__docgenInfo={description:``,displayName:`Row`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/Row.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},nestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы`,name:`nestedChildren`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Флаг выбора текущей строки`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, строка вложенная и сама вычисляет блокировку`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк. Передаётся только строкам с дочерними элементами`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},emptyCellValue:{defaultValue:{value:`'-'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'-'`},type:{name:`ReactNode`}},options:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Дополнительные настройки строки`,name:`options`,required:!1,tags:{},type:{name:`DataGridRowOptions<TData>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Стили для строки`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}function Or(){return(Or=e((()=>{Dr(),or()})))()}function kr(){return(kr=e((()=>{De(),Ee()})))()}var Ar,jr,Mr;function Nr(){return(Nr=e((()=>{Ar=O(),jr=E(),Mr=(0,Ar.memo)(({index:e,renderRow:t,row:n})=>(0,jr.jsx)(jr.Fragment,{children:t(n,e)}));try{Mr.displayName=`CustomRowWrapper`,Mr.__docgenInfo={description:"Обёртка с `memo` для изоляции пользовательского `renderRow`.\n\nПри re-render родителя (`Body`, Virtuoso `Item`) без обёртки `renderRow(row, index)`\nвызывается заново на каждой строке и каждый раз создаёт новые React-elements, из‑за чего `memo` у дочерних компонентов\n(например, `DataGridCollapsibleRow`) не срабатывает.\n\n`CustomRowWrapper` повторно вызывает `renderRow` только когда изменились\n`index`, `row` или ссылка на `renderRow`.",displayName:`CustomRowWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`RenderRow`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}}},tags:{}}}catch{}})))()}function Pr(){return(Pr=e((()=>{Nr()})))()}var Fr;function Ir(){return(Ir=e((()=>{a(),Fr={root:r(`data-grid__body`),disableMinHeight:r(`data-grid__body_disable-min-height`)}})))()}var Lr;function Rr(){return(Rr=e((()=>{s(),D(),V(),Ir(),Lr=y.ul`
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

  &.${Fr.disableMinHeight} {
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
`})))()}var zr,Br;function Vr(){return(Vr=e((()=>{zr=O(),C(),Br=({minDisplayRows:e})=>{let{components:t}=(0,zr.useContext)(o),n=t?.dataGrid?.defaultProps?.disableMinHeight;return{disableMinHeight:n,bodyCssVars:!n&&e?{"--min-display-rows":e}:{}}}})))()}function Hr(){return(Hr=e((()=>{Vr()})))()}var Ur,Wr,Gr,Kr;function qr(){return(qr=e((()=>{f(),w(),Pr(),Or(),or(),Ir(),Rr(),Hr(),Ur=E(),Wr=0,Gr=n(Fr.root,{variants:{disableMinHeight:{true:Fr.disableMinHeight}}}),Kr=({rows:e,selectedIds:n,rowsDisabled:r,getRowDisabled:i,minDisplayRows:a,keyId:o,noDataPlaceholder:s,className:c,renderRow:l,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._})=>{let{disableMinHeight:v,bodyCssVars:y}=Br({minDisplayRows:a}),b=e.map((e,t)=>{let a=e[o],s=n.has(a),c=r.get(a),{children:v,options:y}=e,b=Array.isArray(v)&&v.length>0;return(0,Ur.jsx)(rr,{row:e,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:d,isSelected:s,disabledMode:c?.mode,disabledReason:c?.reason,children:l?(0,Ur.jsx)(Mr,{index:t,renderRow:l,row:e}):(0,Ur.jsx)(Er,{row:e,options:y,keyId:o,level:Wr,nestedChildren:v,isSelected:s,getRowDisabled:b?i:void 0,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._},a)},a)});return(0,Ur.jsx)(Lr,{className:t(c,Gr({disableMinHeight:v})),style:y,children:e.length?b:s})};try{Kr.displayName=`Body`,Kr.__docgenInfo={description:``,displayName:`Body`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/Body.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},selectedIds:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификаторы выбранных строк`,name:`selectedIds`,required:!0,tags:{},type:{name:`Set<unknown>`}},rowsDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Блокировки строк по идентификатору`,name:`rowsDisabled`,required:!0,tags:{},type:{name:`Map<unknown, DataGridRowDisabled>`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Массив данных для отображения`,name:`rows`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},minDisplayRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!0,tags:{},type:{name:`number`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!0,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!0,tags:{},type:{name:`(rowId: string, e: PointerEvent) => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{},type:{name:`(row: TData, index: number) => ReactNode`}}},tags:{}}}catch{}})))()}function Jr(){return(Jr=e((()=>{qr()})))()}var J;function Yr(){return(Yr=e((()=>{a(),J={root:r(`data-grid__head-cell`),groupParent:r(`data-grid__head-cell_group-parent`),groupChild:r(`data-grid__head-cell_group-child`),singleColumn:r(`data-grid__head-cell_single-column`),alignLeft:r(`data-grid__head-cell_align-left`),alignCenter:r(`data-grid__head-cell_align-center`),alignRight:r(`data-grid__head-cell_align-right`),hasStartAdornment:r(`data-grid__head-cell_has-start-adornment`),sortable:r(`data-grid__head-cell_sortable`)}})))()}var Xr;function Zr(){return(Zr=e((()=>{kr(),D(),Yr(),Xr=y.div`
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

  &.${J.sortable} {
    cursor: pointer;
  }

  &.${J.hasStartAdornment} {
    padding: ${({theme:e})=>e.spacing(1,2,1,0)};
  }

  &.${J.alignCenter} {
    justify-content: center;
  }

  &.${J.alignRight} {
    justify-content: flex-end;
  }

  .${Oe.iconWrapper}  {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var Qr;function $r(){return($r=e((()=>{Qr=({gridPosition:e,field:t,isSortable:n,startAdornment:r,onSort:i})=>({hasStartAdornment:!!r,handleSortClick:()=>{t&&n&&i(t)},headCellCssVars:{"--grid-column-start":e?.start,"--grid-column-end":e?.end}})})))()}var ei,ti,ni,ri;function ii(){return(ii=e((()=>{ei=O(),Fe(),Ne(),Ie(),le(),f(),w(),Yr(),Zr(),$r(),ti=E(),ni=n(J.root,{variants:{isSortable:{true:J.sortable},align:{left:J.alignLeft,center:J.alignCenter,right:J.alignRight},hasStartAdornment:{true:J.hasStartAdornment}}}),ri=e=>{let{hasStartAdornment:n,handleSortClick:r,headCellCssVars:i}=Qr(e),{startAdornment:a,field:o,isSortable:s,align:c,label:l,sorting:u,className:d}=e,f=(0,ei.useMemo)(()=>{if(!s)return null;if(u?.fieldId!==o)return(0,ti.jsx)(je,{});switch(u?.sort){case`asc`:return(0,ti.jsx)(Pe,{color:`primary`});case`desc`:return(0,ti.jsx)(Me,{color:`primary`});default:return(0,ti.jsx)(je,{})}},[u,s,o]);return(0,ti.jsxs)(Xr,{onClick:r,className:t(d,ni({isSortable:s,align:c,hasStartAdornment:n})),style:i,children:[a&&a,(0,ti.jsx)(R,{rowsCount:2,variant:`pointer`,component:`p`,children:l}),f]})};try{ri.displayName=`HeadCell`,ri.__docgenInfo={description:``,displayName:`HeadCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,methods:[],props:{onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Выравнивание содержимого ячейки по горизонтали`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`AlignVariant`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Позиция ячейки в сетке CSS Grid`,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}}},tags:{}}}catch{}})))()}function ai(){return(ai=e((()=>{ii(),Yr()})))()}var oi,si,ci;function li(){return(li=e((()=>{oi=O(),ai(),si=E(),ci=({column:e,sorting:t,onSort:n,gridPosition:r,startAdornment:i})=>(0,si.jsxs)(oi.Fragment,{children:[(0,si.jsx)(ri,{sorting:t,label:e.label,onSort:n,className:J.groupParent,gridPosition:r,startAdornment:i}),e.children.map(e=>{let{field:r,sortableFieldName:i,sortable:a,...o}=e;return(0,si.jsx)(ri,{...o,field:i??r,sorting:t,isSortable:a,onSort:n,className:J.groupChild,startAdornment:e.columnHint},e.label)})]},e.label);try{ci.displayName=`GroupColumns`,ci.__docgenInfo={description:``,displayName:`GroupColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,methods:[],props:{column:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`column`,required:!0,tags:{},type:{name:`DataGridGroupColumn<TData>`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ui(){return(ui=e((()=>{li()})))()}var di;function fi(){return(fi=e((()=>{D(),V(),di=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;
`})))()}var pi,mi;function hi(){return(hi=e((()=>{ce(),fi(),pi=E(),mi=({showCheckbox:e,columnHint:t,checkboxProps:n})=>!e&&!t?null:(0,pi.jsxs)(pi.Fragment,{children:[e&&(0,pi.jsx)(di,{children:(0,pi.jsx)(L,{...n})}),t]});try{mi.displayName=`HeadCellStartAdornment`,mi.__docgenInfo={description:``,displayName:`HeadCellStartAdornment`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,methods:[],props:{showCheckbox:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`showCheckbox`,required:!0,tags:{},type:{name:`boolean`}},columnHint:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`columnHint`,required:!1,tags:{},type:{name:`ReactNode`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`checkboxProps`,required:!0,tags:{},type:{name:`CheckboxProps`}}},tags:{}}}catch{}})))()}function gi(){return(gi=e((()=>{hi()})))()}var _i,vi;function yi(){return(yi=e((()=>{ai(),_i=E(),vi=({field:e,label:t,isSortable:n,align:r,sorting:i,onSort:a,startAdornment:o})=>(0,_i.jsx)(ri,{sorting:i,field:e,label:t,isSortable:n,align:r,startAdornment:o,onSort:a,className:J.singleColumn});try{vi.displayName=`SingleColumn`,vi.__docgenInfo={description:``,displayName:`SingleColumn`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,methods:[],props:{field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`PropertyKey`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function bi(){return(bi=e((()=>{yi()})))()}var xi;function Si(){return(Si=e((()=>{G(),xi=e=>{let{positionsMap:t}=e.reduce((e,t)=>{let n=W(t)?t.children.length:1,r=e.currentLine,i=r+n,a=W(t)?t.label:t.field||t.label||``;return e.positionsMap.set(a,{start:r,end:i}),e.currentLine=i,e},{positionsMap:new Map,currentLine:1});return t}})))()}var Ci,wi;function Ti(){return(Ti=e((()=>{Ci=O(),G(),Si(),wi=({columns:e,onSort:t,sorting:n,uncheckedRowsCount:r,rowsCount:i,onSelectAllRows:a})=>{let o=(0,Ci.useMemo)(()=>!r&&i>0,[r,i]),s=(0,Ci.useMemo)(()=>r>0&&r<i,[r,i]),c=!i;return{checkboxProps:(0,Ci.useMemo)(()=>({checked:o,disabled:c,indeterminate:s,onChange:a}),[o,c,s,a]),handleSort:(0,Ci.useCallback)(e=>{if(!t)return;let r=n?.fieldId===e;if(r&&n?.sort===`asc`)return t({fieldId:e,sort:`desc`});if(r&&n?.sort===`desc`)return t(void 0);t({fieldId:e,sort:`asc`})},[n,t]),gridPositions:(0,Ci.useMemo)(()=>xi(e),[e]),headerCssVars:(0,Ci.useCallback)(e=>e?{"--grid-column-start":e.start,"--grid-column-end":e.end}:{},[]),hasGroupedColumns:e.some(W)}};try{wi.displayName=`useLogic`,wi.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/useLogic/useLogic.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function Ei(){return(Ei=e((()=>{Ti()})))()}var Di;function Oi(){return(Oi=e((()=>{G(),Di=({column:e,index:t,sectionOffset:n,isSelectable:r,isHideSelectAll:i})=>{let{label:a,align:o,columnHint:s}=e,c=W(e)?void 0:e.sortable;return{label:a,align:o,columnHint:s,sortField:W(e)?void 0:e.sortableFieldName??e.field,sortable:c,showCheckbox:(n??0)+t===0&&r&&!i}}})))()}var ki,Ai;function ji(){return(ji=e((()=>{G(),ui(),gi(),bi(),Ei(),Oi(),ki=E(),Ai=e=>{let{checkboxProps:t,handleSort:n,gridPositions:r}=wi(e),{columns:i,isSelectable:a,sorting:o,isHideSelectAll:s,sectionOffset:c}=e;return(0,ki.jsx)(ki.Fragment,{children:i.map((e,i)=>{let{label:l,align:u,columnHint:d,sortField:f,sortable:p,showCheckbox:m}=Di({column:e,index:i,sectionOffset:c,isSelectable:a,isHideSelectAll:s}),h=m||d?(0,ki.jsx)(mi,{showCheckbox:m,columnHint:d,checkboxProps:t}):void 0;if(W(e)){let t=r.get(e.label);return(0,ki.jsx)(ci,{column:e,sorting:o,onSort:n,gridPosition:t,startAdornment:h},e.label)}return(0,ki.jsx)(vi,{sorting:o,field:f,label:l,isSortable:p,align:u,startAdornment:h,onSort:n},l)})})};try{Ai.displayName=`HeadColumns`,Ai.__docgenInfo={description:``,displayName:`HeadColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var Mi;function Ni(){return(Ni=e((()=>{s(),D(),Mi=y.header`
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
`})))()}var Pi,Fi,Ii;function Li(){return(Li=e((()=>{f(),w(),V(),G(),ji(),Ni(),Pi=E(),Fi=n(B.header,{variants:{isGroup:{true:B.hasGroupedColumns}}}),Ii=e=>{let{columns:n,headerProps:r,addon:i,...a}=e;return(0,Pi.jsxs)(Mi,{...r,role:`heading`,className:t(Fi({isGroup:n.some(W)}),r?.className),children:[(0,Pi.jsx)(Ai,{...a,columns:n}),i]})};try{Ii.displayName=`Head`,Ii.__docgenInfo={description:``,displayName:`Head`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Props шапки таблицы, в том числе ref`,name:`headerProps`,required:!1,tags:{},type:{name:`DataGridHeaderProps`}},addon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Слот поверх колонок шапки, например полоски drag plugin изменения ширины`,name:`addon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Ri(){return(Ri=e((()=>{Li()})))()}var zi,Bi,Vi,Hi;function Ui(){return(Ui=e((()=>{de(),fe(),Ce(),D(),zi=y.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({theme:e})=>e.palette.background.element};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Bi=y(te)`
  border-width: 1px;
`,Vi=y.div`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.fab};
  left: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Hi=y(pe)`
  height: 2px;

  .${ue.barColorPrimary} {
    background-color: ${({theme:e})=>e.palette.primary[800]};
  }
`})))()}var Wi,Gi;function Ki(){return(Ki=e((()=>{Ui(),Wi=E(),Gi=({isLoading:e=!1,isDisabled:t=!1,isVisibleDivider:n=!0})=>(0,Wi.jsxs)(Wi.Fragment,{children:[(e||t)&&(0,Wi.jsx)(zi,{}),(0,Wi.jsxs)(Vi,{children:[e&&(0,Wi.jsx)(Hi,{}),!e&&n&&(0,Wi.jsx)(Bi,{})]})]});try{Gi.displayName=`Loader`,Gi.__docgenInfo={description:``,displayName:`Loader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,methods:[],props:{isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isVisibleDivider:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isVisibleDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function qi(){return(qi=e((()=>{Ki()})))()}var Ji,Yi,Xi,Zi;function Qi(){return(Qi=e((()=>{D(),V(),Ji=y.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  &.${B.mobileVariantCards} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,Yi=y.div`
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
`,Xi=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Zi=y.div`
  padding-top: ${({theme:e})=>e.spacing(2)};
`})))()}var $i,ea,ta,na;function ra(){return(ra=e((()=>{ve(),w(),V(),Qi(),$i=E(),ea=n(at.list,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),ta=n(at.item,{variants:{mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList}}}),na=({cellsCount:e,mobileDisplayVariant:t,rowsCount:n})=>(0,$i.jsx)(Ji,{className:ea({mobileDisplayVariant:t}),children:Array.from({length:n},(n,r)=>(0,$i.jsxs)(Yi,{className:ta({mobileDisplayVariant:t}),children:[Array.from({length:e-1},(e,t)=>(0,$i.jsxs)(Xi,{children:[(0,$i.jsx)(j,{variant:`rounded`,height:20}),(0,$i.jsx)(j,{variant:`rounded`,height:16,width:`50%`})]},t)),(0,$i.jsx)(Zi,{children:(0,$i.jsx)(j,{variant:`rounded`,width:`100%`,height:40})})]},r))});try{na.displayName=`MobileSkeleton`,na.__docgenInfo={description:``,displayName:`MobileSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,methods:[],props:{cellsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`cellsCount`,required:!0,tags:{},type:{name:`number`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!0,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function ia(){return(ia=e((()=>{ra()})))()}var aa,oa,sa;function ca(){return(ca=e((()=>{aa=O(),u(),C(),T(),oa=E(),sa=({title:e=`Нет\xA0данных`,imgAlt:t=e,action:n,size:r=`small`})=>{let{imagesMap:{noDataImgSrc:i}}=(0,aa.useContext)(o);return(0,oa.jsx)(c,{title:e,imgSrc:i,size:r,Actions:n?(0,oa.jsx)(b,{onClick:n.onClick,"aria-label":n.text,children:n.text}):void 0,imgAlt:t})};try{sa.displayName=`NoData`,sa.__docgenInfo={description:``,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,methods:[],props:{title:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Заголовок`,name:`title`,required:!1,tags:{default:`'Нет\\u00a0данных'
Добавлен неразрывный пробел \`\\u00a0\`,
так как без изображения текст форматируется в 2 строки`},type:{name:`string`}},imgAlt:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`альтернативный текст в случае, если изображение по какой-то причине не загрузилось`,name:`imgAlt`,required:!1,tags:{default:`эквивалентно title`},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Текст и обработчик для кнопки действия`,name:`action`,required:!1,tags:{},type:{name:`{ text: string; onClick: () => void; }`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Задает общий размер компонента`,name:`size`,required:!1,tags:{default:`'small'`},type:{name:`enum`,raw:`PlaceholderSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function la(){return(la=e((()=>{ca()})))()}var ua;function da(){return(da=e((()=>{D(),V(),ua=y.div`
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
`})))()}var fa,pa;function ma(){return(ma=e((()=>{fa=O(),f(),V(),cn(),on(),pa=({position:e,isNoData:n,columns:r})=>{let i=(0,fa.useMemo)(()=>t({[B.leftPinnedSection]:e===`left`,[B.rightPinnedSection]:e===`right`,[B.pinnedSectionNoData]:n&&e===`center`}),[]),a=n&&e!==`center`||!r||r.length===0;return{classnames:i,gridColumns:a?``:an(sn(r)),shouldNotRenderSection:a}}})))()}function ha(){return(ha=e((()=>{ma()})))()}var ga,_a;function va(){return(va=e((()=>{Jr(),V(),Ri(),da(),ha(),ga=E(),_a=({columns:e,position:t,isNoData:n,headProps:r,bodyProps:i,sectionOffset:a})=>{let{classnames:o,gridColumns:s,shouldNotRenderSection:c}=pa({position:t,isNoData:n,columns:e});return c?null:(0,ga.jsxs)(ua,{className:o,style:{"--data-grid-columns":s},children:[!n&&(0,ga.jsx)(Ii,{...r,columns:e,sectionOffset:a}),(0,ga.jsx)(Kr,{...i,columns:e,sectionOffset:a,className:B.body})]})};try{_a.displayName=`Section`,_a.__docgenInfo={description:``,displayName:`Section`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/Section.tsx`,methods:[],props:{bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для секции`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},position:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Позиция секции`,name:`position`,required:!0,tags:{},type:{name:`enum`,raw:`"center" | "left" | "right"`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:``,name:`sectionOffset`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function ya(){return(ya=e((()=>{va()})))()}var ba;function xa(){return(xa=e((()=>{D(),V(),ba=y.div`
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
`})))()}var Sa,Ca;function wa(){return(wa=e((()=>{Sa=O(),cn(),Ca=({sections:e})=>{let t=e.find(e=>e.position===`left`)?.columns,n=e.find(e=>e.position===`right`)?.columns,r={"--left-columns-count":t?sn(t).length:0,"--right-columns-count":n?sn(n).length:0},{sectionOffsets:i,totalColumnsCount:a}=(0,Sa.useMemo)(()=>{let t={},n=0;return e.forEach(e=>{t[e.position]=n,n+=sn(e.columns).length}),{sectionOffsets:t,totalColumnsCount:n}},[e]);return{pinnedContainerStyles:r,sectionOffsets:i,totalColumnsCount:a}}})))()}function Ta(){return(Ta=e((()=>{wa()})))()}var Ea,Da;function Oa(){return(Oa=e((()=>{Se(),ya(),xa(),Ta(),Ea=E(),Da=({className:e,isDisabled:t,headProps:n,bodyProps:r,sections:i,isNoData:a})=>{let{pinnedContainerStyles:o,sectionOffsets:s,totalColumnsCount:c}=Ca({sections:i});return(0,Ea.jsx)(ba,{className:e,...xe(t),style:o,children:i.map(({columns:e,position:t})=>(0,Ea.jsx)(_a,{columns:e,position:t,sectionOffset:s[t],bodyProps:{...r,totalColumnsCount:c},headProps:n,isNoData:a},t))})};try{Da.displayName=`PinnedSections`,Da.__docgenInfo={description:``,displayName:`PinnedSections`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,methods:[],props:{sections:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация закрепленных секций`,name:`sections`,required:!0,tags:{},type:{name:`PinnedSection<TData>[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function ka(){return(ka=e((()=>{Oa()})))()}var Aa,ja,Ma,Na;function Pa(){return(Pa=e((()=>{D(),Ir(),We(),V(),ai(),lt(),Aa=y.div`
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

      & .${J.groupParent} {
        grid-column: var(--grid-column-start) / var(--grid-column-end);
        grid-row: 1;
        justify-content: center;
      }

      & .${J.groupChild} {
        grid-row: 2;
        justify-content: center;
      }

      & .${J.singleColumn} {
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
    & .${J.root} {
      border-top: 1px solid ${({theme:e})=>e.palette.components.border.default};
      border-left: 1px solid ${({theme:e})=>e.palette.components.border.default};

      &:first-of-type,
      &:first-of-type + .${J.groupChild} {
        border-left: none;
      }
    }

    & .${J.singleColumn},
    & .${J.groupParent} {
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
      & .${z.root}, & .${J.root} {
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

      & .${Fr.root} {
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
`,ja=y.div`
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
`,Ma=y(ja)`
  pointer-events: none;

  background: ${({theme:e})=>e.palette.background.element};
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mix-blend-mode: luminosity;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    opacity: 0.7;
  }
`,Na=y.div`
  position: relative;

  height: 0;
`})))()}var Fa,Ia;function La(){return(La=e((()=>{Fa=O(),lt(),Ia=({hasPinnedColumns:e=!1})=>{let t=(0,Fa.useRef)(new Map),n=(0,Fa.useRef)(null),r=(0,Fa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>{e.classList.contains(H.hover)||e.classList.add(H.hover)})},[e]),i=(0,Fa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>e.classList.remove(H.hover))},[e]);return{rowsMapRef:t,registerRowElement:(0,Fa.useCallback)((n,r)=>{if(!e)return;let i=t.current;i.has(n)||i.set(n,new Set),i.get(n).add(r)},[e]),unregisterRowElement:(0,Fa.useCallback)((n,r)=>{if(!e)return;let i=t.current,a=i.get(n);a&&(a.delete(r),a.size===0&&i.delete(n))},[e]),onRowEnter:(0,Fa.useCallback)(t=>{e&&n.current!==t&&(n.current&&i(n.current),r(t),n.current=t)},[e,r,i]),onRowLeave:(0,Fa.useCallback)((t,r)=>{e&&(r.relatedTarget?.closest(`[data-row-id="${t}"]`)||(i(t),n.current=null))},[e,i])}}})))()}function Ra(){return(Ra=e((()=>{La()})))()}var za,Ba;function Va(){return(Va=e((()=>{za=O(),Ba=e=>{let t=(0,za.useRef)(new Set);(0,za.useEffect)(()=>{let n=e.filter(e=>!t.current.has(e));n.length&&(n.forEach(e=>t.current.add(e)),console.warn(`UIKIT. DataGrid: getRowDisabled вернул блокировку без reason для строк: ${n.join(`, `)}`))},[e])}})))()}function Ha(){return(Ha=e((()=>{Va()})))()}var Ua;function Wa(){return(Wa=e((()=>{Ua=(e,t)=>{if(typeof e==`function`){e(t);return}e&&(e.current=t)}})))()}var Ga,Ka;function qa(){return(qa=e((()=>{Ga=O(),Wa(),vn(),bn(),Ka=({plugins:e,tableId:t,columns:n,headerProps:r})=>{e&&_n(e);let i=yn(e,`resize`);i?.assertConfig(n);let a=(0,Ga.useRef)(void 0),o=(0,Ga.useRef)(null),s=(0,Ga.useRef)(null),c=(0,Ga.useRef)(r?.ref);c.current=r?.ref;let l=()=>{let e=s.current;if(e){if(a.current){e.style.setProperty(`--data-grid-columns`,a.current);return}e.style.removeProperty(`--data-grid-columns`)}},u=(0,Ga.useCallback)(e=>{o.current=e,Ua(c.current,e)},[]);return{resizePlugin:i,wrapperRef:(0,Ga.useCallback)(e=>{s.current=e,l()},[]),headAddonProps:{columns:n,tableId:t,headRef:o,onGridColumnsChange:(0,Ga.useCallback)(e=>{a.current=e,l()},[])},headerProps:{...r,ref:u}}}})))()}function Ja(){return(Ja=e((()=>{qa()})))()}function Ya(){return(Ya=e((()=>{Ra(),Ha(),Ja()})))()}var Xa,Za;function Qa(){return(Qa=e((()=>{Xa=O(),Ae(),A(),V(),Za=({containerRef:e,isLoading:t,columns:n,rows:r,isNoScrollToTop:i=!1,mobileDisplayVariant:a})=>{let{isMobile:o}=k(),s=(0,Xa.useRef)(null),c=(0,Xa.useMemo)(()=>n?.filter(e=>!e.isHideOnMobile).length??0,[n]);return(0,Xa.useEffect)(()=>{!t&&r&&r.length>0&&s.current===null&&(s.current=r.length)},[r,t]),(0,Xa.useLayoutEffect)(()=>{if(!(!o||i)&&t&&e?.current){let t=e.current.closest(`.${ke.root}`);t&&t.scrollTo({top:0,behavior:`instant`})}},[e,t,o,i]),{isMobile:o,mobileSkeletonProps:{cellsCount:c,rowsCount:s.current??5,mobileDisplayVariant:a}}}})))()}function $a(){return($a=e((()=>{Qa()})))()}var eo,to;function no(){return(no=e((()=>{i(),G(),eo=e=>{let t=v.getInstance(),n=e.map(e=>e.pinned??`center`),r=n.indexOf(`right`);r!==-1&&n.slice(r).some(e=>e!==`right`)&&t.logError(`DataGrid`,`Колонки с pinned="right" должны идти непрерывным блоком в конце`);let i=n.lastIndexOf(`left`);i!==-1&&n.slice(0,i+1).some(e=>e!==`left`)&&t.logError(`DataGrid`,`Колонки с pinned="left" должны идти непрерывным блоком в начале`),e.forEach(e=>{W(e)&&e.children.some(e=>e.pinned)&&t.logError(`DataGrid`,`pinned должен быть указан у родительской колонки, а не у дочерних элементов`)})},to=e=>{eo(e);let t=e.reduce((e,t)=>{let n=t.pinned??`center`;return e[n]||(e[n]=[]),e[n].push(t),e},{});return{sections:[{position:`left`,columns:t.left||[]},{position:`center`,columns:t.center||[]},{position:`right`,columns:t.right||[]}]}}})))()}var ro;function io(){return(io=e((()=>{ro=e=>{e.forEach(e=>{let t=0;e.forEach(e=>{e.style.height=``}),e.forEach(e=>{let n=e.offsetHeight;n>t&&(t=n)}),e.forEach(e=>{e.style.height=`${t}px`})})}})))()}var ao,oo;function so(){return(so=e((()=>{ao=O(),A(),V(),Ra(),no(),io(),oo=({isLoading:e,columns:t})=>{let n=(0,ao.useRef)(null),{isMobile:r}=k(),i=(0,ao.useMemo)(()=>t.some(e=>e.pinned),[t]),{rowsMapRef:a,...o}=Ia({hasPinnedColumns:i&&!r}),s=CSS.supports(`container-type`,`scroll-state`),c=(0,ao.useCallback)(e=>e?e.scrollWidth>e.clientWidth:!1,[]),{sections:l}=(0,ao.useMemo)(()=>to(t),[t]);return(0,ao.useLayoutEffect)(()=>{if(e||!i||r||typeof window>`u`)return;let t=new ResizeObserver(()=>{ro(a.current),!s&&(c(n.current)?n.current?.classList.add(B.overflowed):n.current?.classList.remove(B.overflowed))});if(n.current)return t.observe(n.current),()=>{t.disconnect()}},[i,e,r]),{containerRef:n,rowHoverProps:o,sections:l,hasPinnedColumns:i}}})))()}function co(){return(co=e((()=>{so()})))()}function lo(){return(lo=e((()=>{$a(),co()})))()}var uo;function fo(){return(fo=e((()=>{uo=e=>{let t=e.some(({minWidth:e})=>!!e),n=e.every(({minWidth:e})=>!!e);return t&&!n&&console.error(`UIKIT. DataGrid: Необходимо задать minWidth для всех колонок`),n}})))()}var Y,po;function mo(){return(mo=e((()=>{Y=O(),C(),se(),Ue(),V(),Mn(),Ya(),un(),rn(),cn(),on(),G(),gn(),lo(),fo(),po=({keyId:e,columns:t,rows:n=[],variant:r,tree:i,subrows:a,selectedRows:s=[],isLoading:c,isDisabled:l,getRowDisabled:u,mobileDisplayVariant:d=r===`subrows`?`cards`:`list`,onSelectRow:f,isError:p,onRetry:m,errorMsg:h,isHideSelectAll:g,isHideHeaderIfNoData:_=!1,sorting:v,className:y,onSort:b,maxHeight:x,gridViewMode:S=`standard`,massActions:C,plugins:w,tableId:T,headerProps:E})=>{let D=oe(),O=!!f,k=c||l,{imagesMap:A}=(0,Y.useContext)(o),j=(0,Y.useRef)(s);(0,Y.useEffect)(()=>{j.current=s},[s]);let M=(0,Y.useRef)([]);(0,Y.useEffect)(()=>{c||(M.current=n)},[n,c]);let ee=(0,Y.useCallback)(()=>n.length<=1?t.map(e=>({...e,sortable:!1})):t,[t,n]),N=c?M.current:n,P=!N.length,{containerRef:te,rowHoverProps:F,sections:ne,hasPinnedColumns:re}=oo({isLoading:c,columns:ee()}),{isMobile:I,mobileSkeletonProps:ie}=Za({containerRef:te,isLoading:c,columns:sn(ee()),rows:n,isNoScrollToTop:c&&P,mobileDisplayVariant:d}),ae=(0,Y.useMemo)(()=>{let e=Object.is(r,jn.Subrows)?{...a,isInitialExpanded:!0}:i;return I?{...e,expandedLevel:1,initialVisibleChildrenCount:1}:e},[r,a,i,I]),{rowsDisabled:L,idsWithoutReason:se}=(0,Y.useMemo)(()=>hn(N,e,u),[N,e,u]);Ba(se);let ce=(0,Y.useMemo)(()=>new Set(s.map(t=>t[e])),[s,e]),R=(0,Y.useMemo)(()=>N.filter(t=>!t.options?.isNotSelectable&&!L.get(t[e])),[N,L,e]),le=(0,Y.useMemo)(()=>an(sn(t)),[t]),{resizePlugin:ue,wrapperRef:de,headAddonProps:fe,headerProps:pe}=Ka({plugins:w,tableId:T,columns:t,headerProps:E}),me=uo(sn(t)),he=(0,Y.useMemo)(()=>R.filter(t=>!ce.has(t[e])).length,[R,ce,e]),ge=t=>{if(!f)return;if(t.target.checked)return f(Be([...j.current,...R],t=>t[e]));let n=new Set(N.map(t=>t[e]));f(j.current.filter(t=>!n.has(t[e])))},_e=(0,Y.useCallback)(t=>n=>{if(f){if(n.target.checked)return f([...j.current,t]);f(j.current.filter(n=>n[e]!==t[e]))}},[]),ve=t.some(W),ye=ve?`full`:S,be=_&&P||ve&&P,xe=(0,Y.useMemo)(()=>({isLoading:c&&P||I&&c,isError:p&&P,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[h||``],imgSrc:A.defaultErrorImgSrc,onRetry:m},isSmoothLoading:!1,loadingPlaceholderClassname:B.loadingPlaceholder}),[c,p,P,h,m,A]),Se=nn({maxHeight:x,gridColumns:le}),Ce=!!C;return{hasMassActions:Ce,isMassActionsOpen:ln({hasMassActions:Ce,selectedRowsCount:s.length,isMobile:I}),resizePlugin:ue,wrapperRef:de,headAddonProps:fe,dataGridClassName:y,containerCssVars:Se,isDataGridDisabled:k,treeRenderConfig:ae,renderRows:N,isAllowHorizontalScroll:me,isHideHead:be,hasPinnedColumns:re,contentStateProps:xe,rowHoverProps:F,isMobile:I,containerRef:te,isNoData:P,gridViewMode:ye,headColumns:ee(),isLoading:c,mobileSkeletonProps:ie,hasGroupedColumns:ve,headProps:{rowsCount:R.length,uncheckedRowsCount:he,isSelectable:O,onSelectAllRows:ge,isHideSelectAll:g,sorting:v,onSort:b},headerProps:pe,bodyProps:{isSelectable:O,selectedIds:ce,rowsDisabled:L,getRowDisabled:u,onSelectRow:_e},mobileDisplayVariant:d,sections:ne,isSelfContained:d===`cards`,loaderProps:{isLoading:!D&&c,isVisibleDivider:!!n.length,isDisabled:l}}};try{po.displayName=`useLogic`,po.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/useLogic/useLogic.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!1,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}function ho(){return(ho=e((()=>{mo()})))()}var go,X,_o,vo,yo,bo;function xo(){return(xo=e((()=>{go=O(),C(),be(),s(),f(),w(),Se(),Jr(),V(),Vt(),Mn(),Ri(),qi(),ia(),la(),ka(),Pa(),ho(),X=E(),_o=n(B.pinnedSections,{variants:{isDisabled:{true:B.disabled}}}),vo=n(B.root,{variants:{hasMassActions:{true:B.hasMassActions},isMassActionsOpen:{true:B.massActionsOpen},hasPinnedColumns:{true:B.hasPinnedSections},isAllowHorizontalScroll:{true:B.isAllowHorizontalScroll},gridViewMode:{full:B.gridViewFull,standard:B.gridViewStandard},hasGroupedColumns:{true:B.hasGroupedColumns},mobileDisplayVariant:{cards:B.mobileVariantCards,list:B.mobileVariantList},isSelfContained:{true:g}}}),yo=n(B.body,{variants:{isNoData:{true:B.bodyEmpty}}}),bo=e=>{let{dataGridClassName:n,isDataGridDisabled:r,treeRenderConfig:i,headColumns:a,headProps:s,bodyProps:c,loaderProps:l,renderRows:u,isAllowHorizontalScroll:d,isHideHead:f,hasPinnedColumns:p,contentStateProps:m,rowHoverProps:h,containerRef:g,sections:_,isNoData:v,isMobile:y,mobileSkeletonProps:b,isLoading:x,containerCssVars:S,hasGroupedColumns:C,gridViewMode:w,mobileDisplayVariant:T,isSelfContained:E,isMassActionsOpen:D,hasMassActions:O,resizePlugin:k,wrapperRef:A,headAddonProps:j,headerProps:M}=po(e),{emptySymbol:ee}=(0,go.useContext)(o),{columns:N,selectedRows:P=[],onSelectRow:te,minDisplayRows:F=10,variant:ne=jn.Tree,footer:re,massActions:I,noDataPlaceholder:ie,subrows:ae,keyId:L,activeRowId:oe,emptyCellValue:se=ee,onRowClick:ce,noDataOptions:R,isTabularNums:le,renderRow:ue,renderLink:de}=e,{moreButtonColumnPosition:fe=1,isVisibleCollapseButton:pe=!0}=ae||{},{isInitialExpanded:me=!1,expandedLevel:he=1,initialVisibleChildrenCount:ge=2}=i||{},_e=r?Ma:ja,ve=(0,go.useCallback)(()=>x?null:ie||(0,X.jsx)(sa,{...R}),[ie,R,x]),be={...c,keyId:L,minDisplayRows:F,rows:u,variant:ne,emptyCellValue:se,isInitialExpanded:me,expandedLevel:he,initialVisibleChildrenCount:ge,moreButtonColumnPosition:fe,isVisibleCollapseButton:pe,noDataPlaceholder:ve(),onRowClick:ce,...h,renderRow:ue};return(0,X.jsx)(Rt,{isLoading:x,isTabularNums:le,emptyCellValue:se,activeRowId:oe,keyId:L,columns:N,onRowClick:ce,mobileDisplayVariant:T,renderLink:de,selectedRows:P,onSelectRow:te,isMassActionsOpen:D,children:(0,X.jsxs)(Aa,{ref:g,style:S,className:t(n,vo({isAllowHorizontalScroll:d,hasPinnedColumns:p,gridViewMode:w,hasGroupedColumns:C,mobileDisplayVariant:T,isSelfContained:E,hasMassActions:O,isMassActionsOpen:D})),children:[!p||y?(0,X.jsxs)(_e,{ref:A,...xe(r),className:B.wrapper,children:[!f&&(0,X.jsx)(Ii,{...s,headerProps:M,columns:a,addon:k&&!y&&(0,X.jsx)(k.HeadAddon,{...j})}),(0,X.jsx)(ye,{...m,loadingContent:y&&(0,X.jsx)(na,{...b}),children:(0,X.jsx)(Kr,{...be,activeRowId:oe,columns:N,className:yo({isNoData:v})})})]}):(0,X.jsx)(ye,{...m,children:(0,X.jsx)(Da,{sections:_,className:_o({isDisabled:r}),isDisabled:r,headProps:s,bodyProps:be,isNoData:v})}),(0,X.jsx)(Gi,{...l}),I&&(0,X.jsx)(Na,{children:I}),re&&re]})})};try{bo.displayName=`DataGrid`,bo.__docgenInfo={description:``,displayName:`DataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}var So,Co;function wo(){return(wo=e((()=>{a(),So=`resize`,Co={handle:r(`data-grid__resize-handle`),handleActive:r(`data-grid__resize-handle_active`)}})))()}var To;function Eo(){return(Eo=e((()=>{G(),To=e=>{if(e.some(W))throw Error(`DataGrid: ResizePlugin не поддерживает группировку колонок`);if(e.some(({pinned:e})=>e))throw Error(`DataGrid: ResizePlugin не поддерживает pinned-колонки`);e.forEach((e,t)=>{if(!(W(e)||e.minWidth&&Number.parseFloat(e.minWidth)>0))throw Error(e.field===void 0?`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке с индексом ${t}`:`DataGrid: для ResizePlugin задайте minWidth больше 0px колонке "${String(e.field)}"`)})}})))()}var Do;function Oo(){return(Oo=e((()=>{V(),Do=e=>e.map(({field:e})=>e===it)})))()}function ko(){return(ko=e((()=>{Oo()})))()}var Ao;function jo(){return(jo=e((()=>{Ao=e=>{let t=e.reduce((e,t)=>e+t,0);return t===0?e.map(()=>1/e.length):e.map(e=>e/t)}})))()}var Mo;function No(){return(No=e((()=>{Mo=e=>{let t=0;return e.slice(0,-1).map(e=>(t+=e,t))}})))()}var Po;function Fo(){return(Fo=e((()=>{Po=e=>e.map(({minWidth:e})=>e?Number.parseFloat(e):0)})))()}var Io;function Lo(){return(Lo=e((()=>{Io=({widthsList:e,minWidthsList:t,fixedTracksList:n=[]})=>{let r=Math.min(...e.filter((e,t)=>n[t]===void 0));return e.map((e,i)=>n[i]??`minmax(${t[i]}px, ${e/r}fr)`).join(` `)}})))()}var Ro;function zo(){return(zo=e((()=>{Le(),Ro=(e,t)=>Re(`DataGrid`,`${e}:${t}`)})))()}var Bo;function Vo(){return(Vo=e((()=>{Bo=e=>e.split(` `).filter(Boolean).map(e=>Number.parseFloat(e))})))()}var Ho,Uo;function Wo(){return(Wo=e((()=>{Ho=e=>{try{return JSON.parse(e)}catch{return}},Uo=({value:e,signature:t,columnsCount:n})=>{if(e===null)return;let r=Ho(e);if(r?.signature!==t)return;let{fractions:i}=r;return Array.isArray(i)&&i.length===n&&i.every(e=>Number.isFinite(e)&&e>0)?i:void 0}})))()}var Go;function Ko(){return(Ko=e((()=>{Go=({widthsList:e,minWidthsList:t,index:n,delta:r})=>{let i=n,a=n+1,o=Math.min(0,t[i]-e[i]),s=Math.max(0,e[a]-t[a]),c=Math.min(Math.max(r,o),s);return e.map((e,t)=>t===i?e+c:t===a?e-c:e)}})))()}function qo(){return(qo=e((()=>{Eo(),ko(),jo(),No(),Fo(),Lo(),zo(),Vo(),Wo(),Ko()})))()}var Jo,Yo;function Xo(){return(Xo=e((()=>{Jo=O(),_e(),wo(),qo(),Yo=({tableId:e,signature:t,columnsCount:n})=>{let[r,i]=ge(Ro(e,So),void 0,{raw:!0});return{savedFractionsList:(0,Jo.useMemo)(()=>Uo({value:r??null,signature:t,columnsCount:n}),[r,t,n]),saveFractions:e=>{i(JSON.stringify({signature:t,fractions:e}))}}}})))()}function Zo(){return(Zo=e((()=>{Xo()})))()}var Qo,$o;function es(){return(es=e((()=>{Qo=O(),ee(),qo(),$o=({headRef:e,gridColumns:t})=>{let[n,r]=(0,Qo.useState)([]),i=(0,Qo.useCallback)(()=>e.current?Bo(getComputedStyle(e.current).gridTemplateColumns):[],[e]),a=(0,Qo.useCallback)(()=>{let e=i();r(t=>M(t,e)?t:e)},[i]);return(0,Qo.useLayoutEffect)(a,[a,t]),(0,Qo.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(a);return t.observe(e.current),()=>t.disconnect()},[e,a]),{widthsList:n,measureWidths:i,updateWidths:a}}})))()}function ts(){return(ts=e((()=>{es()})))()}function ns(){return(ns=e((()=>{Zo(),ts()})))()}var Z,rs;function is(){return(is=e((()=>{Z=O(),he(),wn(),Sn(),cn(),on(),qo(),ns(),rs=({columns:e,tableId:t,headRef:n,onGridColumnsChange:r})=>{let i=(0,Z.useMemo)(()=>sn(e),[e]),a=(0,Z.useMemo)(()=>Po(i),[i]),o=(0,Z.useMemo)(()=>an(i),[i]),s=(0,Z.useMemo)(()=>Do(i),[i]),c=(0,Z.useMemo)(()=>i.map((e,t)=>s[t]?an([e]):void 0),[i,s]),l=(0,Z.useMemo)(()=>xn(i),[i]),u=t||Cn(me?window.location.pathname:``,l),{savedFractionsList:d,saveFractions:f}=Yo({tableId:u,signature:l,columnsCount:i.length}),{widthsList:p,measureWidths:m,updateWidths:h}=$o({headRef:n,gridColumns:o}),[g,_]=(0,Z.useState)(),[v,y]=(0,Z.useState)(),b=(0,Z.useRef)(void 0),x=(0,Z.useRef)(void 0),S=e=>r(Io({widthsList:e,minWidthsList:a,fixedTracksList:c})),C=()=>{d?S(d):r(void 0),h()};(0,Z.useLayoutEffect)(C,[d,o]),(0,Z.useLayoutEffect)(()=>()=>{x.current&&cancelAnimationFrame(x.current),r(void 0)},[]);let w=()=>{x.current&&=(cancelAnimationFrame(x.current),void 0)},T=()=>{w(),b.current=void 0,_(void 0),y(void 0)},E=e=>t=>{t.button===0&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),b.current={index:e,startX:t.clientX,startWidthsList:m()},_(e))},D=e=>{let t=b.current;if(t){if(e.buttons===0){O();return}t.latestWidthsList=Go({widthsList:t.startWidthsList,minWidthsList:a,index:t.index,delta:e.clientX-t.startX}),x.current||=requestAnimationFrame(()=>{x.current=void 0,b.current?.latestWidthsList&&(S(b.current.latestWidthsList),y(b.current.latestWidthsList))})}},O=()=>{let e=b.current?.latestWidthsList;if(T(),!e)return;let t=Ao(e);S(t),h(),f(t)},k=()=>{T(),C()},A=(0,Z.useRef)({handlePointerMove:D,handlePointerUp:O,handlePointerCancel:k});A.current={handlePointerMove:D,handlePointerUp:O,handlePointerCancel:k};let j=g!==void 0;return(0,Z.useEffect)(()=>{if(!j)return;let e=e=>A.current.handlePointerMove(e),t=()=>A.current.handlePointerUp(),n=()=>A.current.handlePointerCancel();return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,n),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,n)}},[j]),{handlesList:Mo(v??p).map((e,t)=>({offset:e,isActive:g===t,onPointerDown:E(t)})).filter((e,t)=>!s[t]&&!s[t+1])}}})))()}function as(){return(as=e((()=>{is()})))()}function os(){return(os=e((()=>{as()})))()}var ss,cs;function ls(){return(ls=e((()=>{D(),V(),wo(),ss=8,cs=y.div`
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
  left: calc(var(--offset) - ${ss/2}px);

  width: ${ss}px;

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

  &.${Co.handleActive}::after {
    height: 30px;

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

    &.${Co.handleActive}::after {
      background-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`})))()}var us,ds,fs;function ps(){return(ps=e((()=>{w(),wo(),os(),ls(),us=E(),ds=n(Co.handle,{variants:{isActive:{true:Co.handleActive}}}),fs=e=>{let{handlesList:t}=rs(e);return(0,us.jsx)(us.Fragment,{children:t.map(({offset:e,isActive:t,...n},r)=>(0,us.jsx)(cs,{role:`separator`,"aria-orientation":`vertical`,className:ds({isActive:t}),style:{"--offset":`${e}px`},...n},r))})};try{fs.displayName=`ResizeHeadAddon`,fs.__docgenInfo={description:`Полоски drag и логика изменения ширины колонок в шапке таблицы`,displayName:`ResizeHeadAddon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/ResizeHeadAddon/ResizeHeadAddon.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Колонки таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Id таблицы, заданный продуктом. Если не задан, формируется автоматически из pathname и набора колонок`,name:`tableId`,required:!1,tags:{},type:{name:`string`}},headRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Ref шапки таблицы, нужен для измерения ширины колонок`,name:`headRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},onGridColumnsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:"Применяет `grid-template-columns` шапки, строк и вложенных строк.\nundefined возвращает таблице ее собственный `grid-template-columns`",name:`onGridColumnsChange`,required:!0,tags:{},type:{name:`(gridColumns: string) => void`}}},tags:{}}}catch{}})))()}function ms(){return(ms=e((()=>{ps()})))()}var hs;function gs(){return(gs=e((()=>{wo(),ms(),qo(),hs={id:So,HeadAddon:fs,assertConfig:To}})))()}function _s(){return(_s=e((()=>{gs()})))()}function vs(){return(vs=e((()=>{_s()})))()}var Q;function ys(){return(ys=e((()=>{a(),Q={root:r(`data-grid-row-base`),contentWrapper:r(`data-grid-row-base__content-wrapper`),hovered:r(`data-grid-row-base_hovered`),active:r(`data-grid-row-base_active`),mobileVariantCards:r(`data-grid-row-base_mobile-variant-cards`),mobileVariantList:r(`data-grid-row-base_mobile-variant-list`)}})))()}var bs;function xs(){return(xs=e((()=>{a(),bs={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var Ss;function Cs(){return(Cs=e((()=>{D(),d(),xs(),Ss=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${bs.hidden} {
      display: none;
    }
  }
`})))()}var ws,Ts,Es;function Ds(){return(Ds=e((()=>{w(),Zt(),xs(),Cs(),ws=E(),Ts=n(bs.root,{variants:{hidden:{true:bs.hidden}}}),Es=({cell:e,cellId:t,isFirstCell:n,row:r,emptyCellValue:i,isDisabled:a,startAdornment:o,href:s,target:c})=>{let{label:l,children:u,hideTitleOnMobile:d,isHideOnMobile:f}=e;return(0,ws.jsxs)(ws.Fragment,{children:[(0,ws.jsx)(Ss,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:Ts({hidden:d||f}),children:l}),u.map((e,l)=>{let u=`${t}-${l}`;return(0,ws.jsx)(Yt,{row:r,cell:e,isHideOnMobile:f,emptyCellValue:i,isDisabled:a,startAdornment:n&&l===0&&o,isHidePersonalData:e.isHidePersonalData,className:z.grouped,href:s,target:c},u)})]})};try{Es.displayName=`GroupCell`,Es.__docgenInfo={description:``,displayName:`GroupCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/GroupCell.tsx`,methods:[],props:{cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridGroupColumn<Record<string, unknown>>`}},cellId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cellId`,required:!0,tags:{},type:{name:`string`}},isFirstCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isFirstCell`,required:!1,tags:{},type:{name:`boolean`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Os(){return(Os=e((()=>{Ds()})))()}var ks,As,js,Ms;function Ns(){return(Ns=e((()=>{s(),D(),V(),ys(),ks=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,As=y.li`
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
`,js=y.div`
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
`,Ms=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`})))()}var Ps,Fs;function Is(){return(Is=e((()=>{Ps=O(),pt(),ur(),fn(),ys(),Fs=({className:e,row:t,keyId:n,onRowClick:r,columns:i,sectionOffset:a,customContent:o,renderStartAdornment:s,isSelected:c,hasBlockingAction:l,blockingActionReason:u,rowDisabled:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,activeRowId:_,emptyCellValue:v,isSelectable:y,rowId:b,mobileDisplayVariant:x,...S})=>{let[C,w]=(0,Ps.useState)(!1),T=(0,Ps.useRef)(null),{isDrawerOpen:E,handleOpenDrawer:D,handleCloseDrawer:O}=cr(),{options:k}=t,{style:A,...j}=S||{},{href:M,isNotSelectable:ee,target:N}=k||{},{isDisabled:P,isDisabledLastCell:te,disabledReason:F,isCheckboxDisabled:ne,checkboxDisabledReason:re}=dn({rowDisabled:d,hasBlockingAction:l,blockingActionReason:u,isDisabledLastCellOption:k?.isDisabledLastCell}),I=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&w(!0)},ie=()=>w(!1),ae={...A||{}},L=!!(!P&&(r||M)),oe=_===b;return{handleRowClick:()=>{if(P){D();return}if(M)return ft(M,N);r?.(t)},tooltipProps:{open:C,title:P?F:void 0,onOpen:I,onClose:ie,followCursor:!0,arrow:!1},checkboxProps:{checked:c,disabled:ne,disabledReason:re,onChange:f(t)},drawerProps:{open:E,onClose:O,title:`Заблокировано`},drawerContent:F,rowBaseVars:ae,isHovered:L,isActive:oe,columns:i,emptyCellValue:v,rowRef:e=>{e?(T.current=e,h?.(b,e)):T.current&&=(g?.(b,T.current),null)},href:M,target:N,onRowEnter:p,onRowLeave:m,rowId:b,row:t,isDisabled:P,sectionOffset:a,customContent:o,isDisabledLastCell:te,renderStartAdornment:s,isSelectable:y,isNotSelectable:ee,dataGridInfiniteItemProps:j,mobileDisplayVariant:x,className:e}}})))()}function Ls(){return(Ls=e((()=>{Is()})))()}var Rs,$,zs,Bs,Vs;function Hs(){return(Hs=e((()=>{Rs=O(),re(),ae(),f(),w(),Se(),Zt(),lt(),yr(),tn(),G(),ys(),Os(),Ns(),Ls(),$=E(),zs=n(Q.contentWrapper,{variants:{isHovered:{true:Q.hovered},isActive:{true:Q.active}}}),Bs=n(Q.root,{variants:{mobileDisplayVariant:{cards:Q.mobileVariantCards,list:Q.mobileVariantList}}}),Vs=(0,Rs.memo)(e=>{let{className:n,tooltipProps:r,rowBaseVars:i,isHovered:a,isActive:o,drawerProps:s,emptyCellValue:c,rowRef:l,onRowEnter:u,onRowLeave:d,rowId:f,row:p,isDisabled:m,sectionOffset:h,customContent:g,isDisabledLastCell:_,renderStartAdornment:v,checkboxProps:y,href:b,target:x,isNotSelectable:S,isSelectable:C,columns:w,dataGridInfiniteItemProps:T,handleRowClick:E,drawerContent:D,mobileDisplayVariant:O}=Fs(e),k=()=>{let e=v?.(!0),t=C&&!S;return!e&&!t?null:(0,$.jsxs)($.Fragment,{children:[e,t&&(0,$.jsx)(ks,{...xe(m),onClick:e=>e.stopPropagation(),className:H.checkbox,children:(0,$.jsx)($t,{...y})})]})},A=(0,Rs.useCallback)(()=>{let e=w.length-1,t=_?void 0:[e];return w?.map((e,n)=>{let r=`row-base-${n}`,i=(h??0)+n,a=i===0,o=vr(m,t,i);return W(e)?(0,$.jsx)(Es,{cell:e,cellId:r,isFirstCell:a,row:p,emptyCellValue:c,isDisabled:o,startAdornment:a&&k(),href:b,target:x},r):(0,$.jsx)(Yt,{row:p,cell:e,emptyCellValue:c,startAdornment:a&&k(),isDisabled:o,isHidePersonalData:e.isHidePersonalData,href:b,target:x},r)})},[p,w,m,_,h,v,y.checked,y.disabled,y.disabledReason]);return(0,$.jsxs)(As,{className:t(n,Bs({mobileDisplayVariant:O})),style:i,...T,children:[(0,$.jsx)(N,{...r,children:(0,$.jsx)(js,{ref:l,onPointerEnter:()=>u?.(f),onPointerLeave:e=>d?.(f,e.nativeEvent),className:zs({isHovered:a,isActive:o}),[ot]:m,onClick:E,children:A()})}),g,(0,$.jsx)(P,{...s,children:(0,$.jsx)(Ms,{children:D})})]},`row-base-${f}`)});try{Vs.displayName=`RowBase`,Vs.__docgenInfo={description:``,displayName:`RowBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/RowBase.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Массив колонок`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},renderStartAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Функция для рендера стартового элемента`,name:`renderStartAdornment`,required:!1,tags:{},type:{name:`(isFirstCell: boolean) => ReactNode`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Смещение секции для правильного расчета глобального индекса`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},rowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`rowId`,required:!0,tags:{},type:{name:`string`}},customContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Кастомный контент после ячеек`,name:`customContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбираемой`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбранной`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},hasBlockingAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Если true, в строке выполняется блокирующее действие DataGridActionCell`,name:`hasBlockingAction`,required:!1,tags:{},type:{name:`boolean`}},blockingActionReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки от блокирующего действия`,name:`blockingActionReason`,required:!1,tags:{},type:{name:`string`}},rowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Итоговая блокировка строки, рассчитанная resolveRowDisabled`,name:`rowDisabled`,required:!1,tags:{},type:{name:`DataGridRowDisabled`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик ухода со строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Удаление регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`ID активной строки`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Значение для пустой ячейки`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Us(){return(Us=e((()=>{Hs(),ys()})))()}function Ws(){return(Ws=e((()=>{xo(),vs(),V(),ia(),Us(),Vt(),Ft()})))()}export{rn as $,Nr as A,jn as B,na as C,Li as D,Ii as E,or as F,un as G,gn as H,rr as I,G as J,sn as K,ir as L,Or as M,Er as N,Pr as O,Dr as P,nn as Q,$n as R,Pa as S,Ri as T,hn as U,Mn as V,ln as W,an as X,W as Y,on as Z,Ka as _,Q as a,kt as at,Aa as b,hs as c,yt as ct,xo as d,B as dt,Vt as et,lo as f,V as ft,qa as g,Ya as h,Hs as i,Ot as it,kr as j,Mr as k,gs as l,ht as lt,Za as m,Be as mt,Us as n,zt as nt,ys as o,Et as ot,Qa as p,Ue as pt,cn as q,Vs as r,Ft as rt,vs as s,vt as st,Ws as t,Rt as tt,bo as u,gt as ut,Va as v,ra as w,Na as x,Ba as y,er as z};