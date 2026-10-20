import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,M as i,On as a,T as o,Xt as s,b as c,ba as l,cn as u,dt as d,ei as f,en as p,ft as m,hr as h,in as g,it as _,j as v,ji as y,ln as b,mr as x,rt as ee,w as S,wn as C,y as w,ya as T,yn as E,za as D}from"./preview-HnvdWNoM.js";import{n as O,t as k}from"./useViewportType-qvg_HX1a.js";import{t as A}from"./Skeleton-ncckngun.js";import{n as j,t as M}from"./isDeepEqual-Do-4KJmn.js";import{t as N}from"./Tooltip-CTZ9z9px.js";import{t as P}from"./BottomDrawer-HAy0SB6r.js";import{t as te}from"./Divider-CrjvZmLh.js";import{t as F}from"./Collapse-CRc8J-Hn.js";import{t as ne}from"./Collapse-BW1viIiZ.js";import{t as re}from"./BottomDrawer-Dx0xr49k.js";import{r as I,t as ie}from"./personalDataSecurity-BZp3aAHH.js";import{t as ae}from"./Tooltip-DJQArnrJ.js";import{t as L}from"./Checkbox-FLKgiBQK.js";import{n as oe}from"./useFirstMountState-CP5JvoTA.js";import{t as se}from"./useFirstMountState-D6AIs9d9.js";import{t as ce}from"./Checkbox-trYahrZi.js";import{t as le}from"./OverflowTypography-B7dexd9V.js";import{t as ue}from"./OverflowTypography-CmZuaR7z.js";import{i as de,n as fe,r as pe,t as me}from"./LinearProgress-BenznCHz.js";import{n as he,t as ge}from"./isBrowser-CqlMecsi.js";import{n as _e}from"./useLocalStorage-B5fPLs7-.js";import{t as ve}from"./useLocalStorage-DftNm3ns.js";import{t as ye}from"./Skeleton-CJW2dPpn.js";import{t as be}from"./ContentState-D6Bp2ANP.js";import{t as xe}from"./ContentState-CNGlaUne.js";import{n as Se,t as Ce}from"./getInertProps-B3VTE0XH.js";import{t as we}from"./Divider-BwZAG43g.js";import{n as Te,t as Ee}from"./ChevronROutlineMd-DqxVGFCt.js";import{i as De,n as Oe,r as ke}from"./HintIcon-BMNCc6a3.js";import{n as Ae,t as je}from"./constants-nt6KgBIJ.js";import{a as Me,c as Ne,i as Pe,n as Fe,s as Ie,t as Le}from"./SortUpFillSm-DnOL6tOd.js";import{n as Re,t as ze}from"./generateLocalStorageKey-CuuetdeM.js";function Be(e,t,n){n===void 0&&(n=!1);for(var r=[],i=0;i<e.length;i++){var a=e[i],o=n?t(a,i,e):t(a);if(o.hasMany===!0?r.push.apply(r,o.next):o.hasNext&&r.push(o.next),o.done)break}return r}function Ve(){return h(He,arguments,Ue)}function He(e,t){return Be(e,Ue(t))}function Ue(e){var t=new Set;return function(n){var r=e(n);return t.has(r)?{done:!1,hasNext:!1}:(t.add(r),{done:!1,hasNext:!0,next:n})}}function We(){return(We=e((()=>{x()})))()}var R;function Ge(){return(Ge=e((()=>{a(),R={root:r(`data-grid__cell`),isHideOnMobile:r(`data-grid__cell_hide-on-mobile`),columnLabel:r(`data-grid__cell-column-label`),columnLabelHidden:r(`data-grid__cell-column-label_hidden`),actionColumn:r(`data-grid__cell_action-column`),cellContent:r(`data-grid__cell-content`),disabled:r(`data-grid__cell_disabled`),withStartAdornment:r(`data-grid__cell_with-start-adornment`),alignLeft:r(`data-grid__cell_align-left`),alignCenter:r(`data-grid__cell_align-center`),alignRight:r(`data-grid__cell_align-right`),grouped:r(`data-grid__cell_grouped`),tabularNums:r(`data-grid__cell_tabular-nums`),anchorCell:r(`data-grid__cell_anchor-cell`),withLink:r(`data-grid__cell_with-link`)}})))()}var Ke,qe;function Je(){return(Je=e((()=>{E(),d(),Ge(),Ke=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    &.${R.columnLabelHidden} {
      display: none;
    }
  }
`,qe=y.div`
  min-width: 0;

  &.${R.tabularNums} {
    font-feature-settings: "tnum" 1;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing(1)};
    align-items: flex-start;

    width: 100%;
    
    &.${R.actionColumn} {
      align-items: flex-end;
    }
  }
`})))()}var Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{ue(),C(),Ge(),Je(),Ye=T(),Xe=n(R.cellContent,{variants:{isActionColumn:{true:R.actionColumn},isTabularNums:{true:R.tabularNums}}}),Ze=n(R.columnLabel,{variants:{hidden:{true:R.columnLabelHidden}}}),Qe=({row:e,label:t,hideTitleOnMobile:n,isActionColumn:r,isTabularNums:i,startAdornment:a,renderCell:o,formattedValue:s,hidePersonalDataClassname:c})=>(0,Ye.jsxs)(Ye.Fragment,{children:[a,(0,Ye.jsxs)(qe,{className:Xe({isActionColumn:r,isTabularNums:i}),children:[(0,Ye.jsx)(Ke,{variant:`caption`,color:`textSecondary`,className:Ze({hidden:n||r}),children:t}),o?.(e),!o&&(0,Ye.jsx)(le,{rowsCount:2,tooltipProps:{className:c},children:(0,Ye.jsx)(Ye.Fragment,{children:s})})]})]});try{Qe.displayName=`CellInner`,Qe.__docgenInfo={description:``,displayName:`CellInner`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/CellInner.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Название колонки`,name:`label`,required:!1,tags:{},type:{name:`string`}},hideTitleOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Скрытие заголовка колонки на мобильных устройствах`,name:`hideTitleOnMobile`,required:!1,tags:{},type:{name:`boolean`}},isActionColumn:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Флаг колонки с действиями`,name:`isActionColumn`,required:!1,tags:{},type:{name:`boolean`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Моноширинный шрифт для чисел`,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки слева`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},renderCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Кастомное отображение ячейки`,name:`renderCell`,required:!1,tags:{},type:{name:`RenderCell<Record<string, unknown>>`}},formattedValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Отформатированное значение ячейки`,name:`formattedValue`,required:!1,tags:{},type:{name:`unknown`}},hidePersonalDataClassname:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/CellInner/types.ts`,name:`TypeLiteral`}],description:`Класс для скрытия персональных данных`,name:`hidePersonalDataClassname`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function et(){return(et=e((()=>{$e()})))()}var tt,nt;function rt(){return(rt=e((()=>{tt=T(),nt=({children:e,row:t,renderLink:n,href:r,target:i})=>n?n({children:e,row:t})??e:r?(0,tt.jsx)(`a`,{href:r,target:i,rel:`noopener noreferrer`,children:e}):e;try{nt.displayName=`LinkWrapper`,nt.__docgenInfo={description:`Оборачивает содержимое ячейки в ссылку`,displayName:`LinkWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/LinkWrapper.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Содержимое ячейки`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Данные строки вместе с её options`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown> & { options?: DataGridRowOptions<TData>; children?: DataGridRowWithOptions<TData>[]; }`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Кастомная отрисовка ссылки строки`,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<TData>`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/LinkWrapper/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function it(){return(it=e((()=>{rt()})))()}var z,at;function B(){return(B=e((()=>{a(),z={loadingPlaceholder:r(`data-grid__loading-placeholder`),header:r(`data-grid__header`),root:r(`data-grid`),body:r(`data-grid__body`),bodyEmpty:r(`data-grid__body_empty`),disabled:r(`data-grid_disabled`),pinnedSectionNoData:r(`data-grid__pinned-section_no-data`),hasPinnedSections:r(`data-grid_has-pinned-sections`),pinnedSections:r(`data-grid__pinned-sections`),leftPinnedSection:r(`data-grid__left-pinned-section`),rightPinnedSection:r(`data-grid__right-pinned-section`),overflowed:r(`data-grid_overflowed`),wrapper:r(`data-grid__wrapper`),hasMassActions:r(`data-grid_has-mass-actions`),massActionsOpen:r(`data-grid_mass-actions-open`),isAllowHorizontalScroll:r(`data-grid_is-allow-horizontal-scroll`),hasGroupedColumns:r(`data-grid_has-grouped-columns`),gridViewFull:r(`data-grid_grid-view-full`),gridViewStandard:r(`data-grid_grid-view-standard`),mobileVariantCards:r(`data-grid_mobile-variant-cards`),mobileVariantList:r(`data-grid_mobile-variant-list`)},at={list:r(`data-grid__skeleton-list`),item:r(`data-grid__skeleton-item`)}})))()}var ot,V,H,st,ct;function lt(){return(lt=e((()=>{a(),ot=`data-row-disable`,V={root:r(`data-grid__row`),showConnector:r(`data-grid__row_show-connector`),hidden:r(`data-grid__row_hidden`),hover:r(`data-grid__row_hover`),hasPinnedColumns:r(`data-grid__row_has-pinned-columns`),checkbox:r(`data-grid__row-checkbox`),mobileVariantCards:r(`data-grid__row_mobile-variant-cards`),mobileVariantList:r(`data-grid__row_mobile-variant-list`),nestedChildren:r(`data-grid__row-nested-children`),hasOpenChildren:r(`data-grid__row_has-open-children`),hasNestedChildren:r(`data-grid__row_has-nested-children`)},H={root:r(`data-grid__row-content`),hovered:r(`data-grid__row-content_hovered`),active:r(`data-grid__row-content_active`)},st={single:r(`data-grid__row-cell_single`),grouped:r(`data-grid__row-cell_grouped`),firstCell:r(`data-grid__row-cell_first`)},ct={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var ut;function dt(){return(dt=e((()=>{E(),B(),lt(),Ge(),ut=y.div`
  overflow: hidden;
  display: flex;
  align-items: center;

  min-height: ${44}px;
  padding: ${({theme:e})=>e.spacing(1,2)};

  &.${R.disabled} {
    opacity: 0.5;
  }

  &.${R.withStartAdornment} {
    padding: ${({theme:e})=>e.spacing(1,2,1,0)};
  }

  &.${R.alignLeft} {
    justify-content: flex-start;
  }

  &.${R.alignCenter} {
    justify-content: center;
  }

  &.${R.alignRight} {
    justify-content: flex-end;
  }

  &.${R.withLink} {
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

    &.${R.isHideOnMobile} {
      display: none;
    }

    & .${V.checkbox} {
      align-self: flex-start;
      order: 1;
    }

    &.${R.grouped} {
      margin-top: ${({theme:e})=>e.spacing(1)};

      & .${R.cellContent} {
        flex-direction: row;
        gap: ${({theme:e})=>e.spacing(2)};
        align-items: baseline;

        & .${R.columnLabel} {
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
`})))()}var ft;function pt(){return(pt=e((()=>{ft=(e,t=`_self`)=>{let n=document.createElement(`a`);n.href=e,n.target=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}})))()}var mt,ht;function gt(){return(gt=e((()=>{mt=D(),ht=(0,mt.createContext)({isLoading:!1,isTabularNums:!1,emptyCellValue:``,activeRowId:``,keyId:``,columns:[],onRowClick:()=>void 0,mobileDisplayVariant:`list`})})))()}var _t,vt;function yt(){return(yt=e((()=>{_t=D(),vt=(0,_t.createContext)({selectedRows:[],isMassActionsOpen:!1})})))()}var bt,xt,St,Ct;function wt(){return(wt=e((()=>{bt=D(),yt(),xt=T(),St=[],Ct=({selectedRows:e=St,onSelectRow:t,isMassActionsOpen:n=!1,children:r})=>{let i=(0,bt.useMemo)(()=>({selectedRows:e,onSelectRow:t,isMassActionsOpen:n}),[e,t,n]);return(0,xt.jsx)(vt.Provider,{value:i,children:r})};try{Ct.displayName=`DataGridSelectionProvider`,Ct.__docgenInfo={description:``,displayName:`DataGridSelectionProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,methods:[],props:{selectedRows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionProvider/DataGridSelectionProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Tt(){return(Tt=e((()=>{wt()})))()}function Et(){return(Et=e((()=>{yt(),Tt()})))()}var Dt,Ot;function kt(){return(kt=e((()=>{Dt=D(),Ot=(0,Dt.createContext)({getItem:()=>void 0,setItem:()=>void 0})})))()}var At,jt,Mt;function Nt(){return(Nt=e((()=>{At=D(),kt(),jt=T(),Mt=({children:e})=>{let t=(0,At.useRef)({}),n=(0,At.useCallback)(e=>t.current[e],[]),r=(0,At.useCallback)((e,n)=>{t.current[e]=n},[]),i=(0,At.useMemo)(()=>({getItem:n,setItem:r}),[n,r]);return(0,jt.jsx)(Ot.Provider,{value:i,children:e})};try{Mt.displayName=`DataGridStorageProvider`,Mt.__docgenInfo={description:``,displayName:`DataGridStorageProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridStorageContext/DataGridStorageProvider/DataGridStorageProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Pt(){return(Pt=e((()=>{Nt()})))()}function Ft(){return(Ft=e((()=>{kt(),Pt()})))()}var It,Lt,Rt;function zt(){return(zt=e((()=>{It=D(),Et(),Ft(),gt(),Lt=T(),Rt=({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,children:i,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l,selectedRows:u,onSelectRow:d,isMassActionsOpen:f})=>{let p=(0,It.useMemo)(()=>({isLoading:e,isTabularNums:t,emptyCellValue:n,activeRowId:r,keyId:a,columns:o,onRowClick:s,mobileDisplayVariant:c,renderLink:l}),[e,t,n,r,a,o,s,c,l]);return(0,Lt.jsx)(ht.Provider,{value:p,children:(0,Lt.jsx)(Ct,{selectedRows:u,onSelectRow:d,isMassActionsOpen:f,children:(0,Lt.jsx)(Mt,{children:i})})})};try{Rt.displayName=`DataGridContextProvider`,Rt.__docgenInfo={description:``,displayName:`DataGridContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!0,tags:{},type:{name:`ReactNode`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isTabularNums:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`isTabularNums`,required:!1,tags:{},type:{name:`boolean`}},renderLink:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`renderLink`,required:!1,tags:{},type:{name:`DataGridRenderLink<Record<string, unknown>>`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridContext.ts`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},selectedRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Выбранные строки таблицы`,name:`selectedRows`,required:!1,tags:{},type:{name:`ContextSelectedRows`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Обработчик изменения выбора, переданный в таблицу.`,name:`onSelectRow`,required:!1,tags:{},type:{name:`ContextOnChangeSelectedRows`}},isMassActionsOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridSelectionContext/DataGridSelectionContext.ts`,name:`TypeLiteral`}],description:`Флаг отображения панели массовых действий`,name:`isMassActionsOpen`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGridContext/DataGridProvider/DataGridProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Bt(){return(Bt=e((()=>{zt()})))()}function Vt(){return(Vt=e((()=>{gt(),Bt()})))()}var Ht,Ut;function Wt(){return(Wt=e((()=>{Ht=D(),pt(),Vt(),Ut=({row:e,href:t,target:n,cell:r,emptyCellValue:i,startAdornment:a})=>{let{isTabularNums:o,renderLink:s}=(0,Ht.useContext)(ht),{format:c,field:l,label:u,hideTitleOnMobile:d,isTabularNums:f}=r,p=f??o,m=e=>!!e||e===0,h=(0,Ht.useMemo)(()=>c&&m(c(e))?c(e):l&&m(e[l])?e[l]:i,[l,c,e,i]),g=!!a,_=r.field===`actions`,v=()=>{if(_&&t)return ft(t,n)},y=_?void 0:{href:t,target:n,renderLink:s};return{formattedValue:h,hasStartAdornment:g,isActionColumn:_,label:u,hideTitleOnMobile:d,isTabularNums:p,linkProps:y,hasLink:!!(y?.renderLink||y?.href),onCellClick:v}}})))()}function Gt(){return(Gt=e((()=>{Wt()})))()}var Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{Kt=l(),ie(),k(),f(),C(),Ce(),et(),Ge(),it(),dt(),Gt(),qt=T(),Jt=n(R.root,{variants:{isHideOnMobile:{true:R.isHideOnMobile},isDisabled:{true:R.disabled},withStartAdornment:{true:R.withStartAdornment},align:{left:R.alignLeft,center:R.alignCenter,right:R.alignRight},isActionColumn:{true:R.actionColumn},withLink:{true:R.withLink}}}),Yt=e=>{let{formattedValue:n,hasStartAdornment:r,isActionColumn:i,label:a,hideTitleOnMobile:o,isTabularNums:s,linkProps:c,hasLink:l,onCellClick:u}=Ut(e),{className:d,startAdornment:f,row:p,cell:m,isDisabled:h,isHidePersonalData:g,isHideOnMobile:_,hasNestedChildren:v,rootRowElement:y}=e,{renderCell:b,align:x=`left`}=m,{isMobile:ee}=O(),S=I({isEnabled:g===!0}),C=(0,qt.jsx)(ut,{className:t(d,S,Jt({isHideOnMobile:m.isHideOnMobile||_,isDisabled:h,withStartAdornment:r,align:x,isActionColumn:i,withLink:l})),...Se(h),onClick:u,children:(0,qt.jsx)(nt,{row:p,...c,children:(0,qt.jsx)(Qe,{row:p,label:a,hideTitleOnMobile:o,isActionColumn:i,isTabularNums:s,startAdornment:f,renderCell:b,formattedValue:n,hidePersonalDataClassname:S})})});return i&&ee&&v?y?(0,Kt.createPortal)(C,y):null:C};try{Yt.displayName=`Cell`,Yt.__docgenInfo={description:``,displayName:`Cell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/Cell.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridSingleColumn<TData>`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Если true, ячейка будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isHidePersonalData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие персональных данных от инструментов мониторинга`,name:`isHidePersonalData`,required:!1,tags:{},type:{name:`boolean`}},isHideOnMobile:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Скрытие ячейки на мобильных устройствах`,name:`isHideOnMobile`,required:!1,tags:{},type:{name:`boolean`}},hasNestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Флаг наличия вложенных элементов в строке`,name:`hasNestedChildren`,required:!1,tags:{},type:{name:`boolean`}},rootRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Ссылка на корневой элемент строки`,name:`rootRowElement`,required:!1,tags:{},type:{name:`HTMLLIElement`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`URL ссылки`,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Cell/types.ts`,name:`TypeLiteral`}],description:`Целевая область для ссылки`,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Zt(){return(Zt=e((()=>{Xt(),Ge()})))()}var Qt,$t;function en(){return(en=e((()=>{ce(),ae(),Qt=T(),$t=({disabledReason:e,...t})=>e?(0,Qt.jsx)(N,{title:e,enterDelay:300,enterNextDelay:300,withoutContainer:!1,children:(0,Qt.jsx)(L,{...t})}):(0,Qt.jsx)(L,{...t});try{$t.displayName=`RowCheckbox`,$t.__docgenInfo={description:`Checkbox строки. Для заблокированного выбора показывает причину в tooltip`,displayName:`RowCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/RowCheckbox.tsx`,methods:[],props:{defaultChecked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Начальное состояние выбора`,name:`defaultChecked`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Автоматическая фокусировка при монтировании`,name:`autoFocus`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`boolean`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Стили компонента`,name:`style`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`},required:!1,tags:{},type:{name:`CSSProperties`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Обработчик изменения`,name:`onChange`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLDivElement, Element> | ((event: ChangeEvent<HTMLInputElement, Element>, checked: boolean) => void)`}},checked:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Состояние выбора чекбокса`,name:`checked`,required:!1,tags:{},type:{name:`boolean`}},indeterminate:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Неопределенное состояние (для частично выбранных элементов)`,name:`indeterminate`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг состояния ошибки`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Имя поля формы`,name:`name`,required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Значение поля формы. Рекомендуется использовать checked. Value необходим только для специфичной логики`,name:`value`,required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Флаг отключения поля`,name:`disabled`,required:!1,tags:{},type:{name:`boolean`}},inputRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Checkbox/types.ts`,name:`TypeLiteral`}],description:`Реф для доступа к input элементу`,name:`inputRef`,required:!1,tags:{},type:{name:`RefObject<HTMLInputElement>`}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowCheckbox/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки выбора`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function tn(){return(tn=e((()=>{en()})))()}var nn;function rn(){return(rn=e((()=>{nn=({maxHeight:e,gridColumns:t})=>({"--data-grid-columns":t,...e&&{"--max-height":`${e}px`}})})))()}var an;function on(){return(on=e((()=>{an=e=>e.map(({width:e,minWidth:t})=>{let n=e||`1fr`;return t?`minmax(${t}, ${n})`:n}).join(` `)})))()}var U;function W(){return(W=e((()=>{U=e=>`children`in e&&Array.isArray(e.children)})))()}var G;function sn(){return(sn=e((()=>{W(),G=(e,t)=>e.flatMap(e=>{let n=e.pinned??t;return U(e)?G(e.children,n):{...e,pinned:n}})})))()}var cn;function ln(){return(ln=e((()=>{cn=({hasMassActions:e,selectedRowsCount:t,isMobile:n})=>e&&t>0&&!n})))()}var un;function dn(){return(dn=e((()=>{un=({rowDisabled:e,hasBlockingAction:t=!1,blockingActionReason:n,isDisabledLastCellOption:r=!0})=>{let i=e?.mode,a=i===`selection`,o=t||i===`row`||i===`row-except-last-cell`,s=e?.reason||n;return{isDisabled:o,isDisabledLastCell:i?i!==`row-except-last-cell`:r,disabledReason:s,isCheckboxDisabled:o||a,checkboxDisabledReason:a?s:void 0}}})))()}var fn;function pn(){return(pn=e((()=>{fn=(e,t)=>{let n=t?.(e);if(n)return n;let{isDisabled:r,isDisabledLastCell:i=!0,disabledReason:a=``}=e.options??{};if(r)return{mode:i?`row`:`row-except-last-cell`,reason:a}}})))()}var mn;function hn(){return(hn=e((()=>{pn(),mn=(e,t,n)=>{let r=new Map,i=[];return e.forEach(e=>{let a=e[t],o=n?.(e);o&&!o.reason&&i.push(a),r.set(a,o??fn(e))}),{rowsDisabled:r,idsWithoutReason:i}}})))()}var gn;function _n(){return(_n=e((()=>{gn=e=>{let t=new Set;e.forEach(({id:e})=>{if(t.has(e))throw Error(`DataGrid: plugin "${e}" передан несколько раз`);t.add(e)})}})))()}var vn;function yn(){return(yn=e((()=>{vn=(e,t)=>e?.find(e=>e.id===t)})))()}var bn;function xn(){return(xn=e((()=>{bn=e=>JSON.stringify(e.map(({field:e})=>e===void 0?null:String(e)))})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=(e,t)=>`${e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}:${t}`})))()}var wn;function Tn(){return(Tn=e((()=>{a(),wn={root:r(`data-grid-nested-rows`),additionalRows:r(`data-grid-nested-rows__additional-rows`),variantSubrows:r(`data-grid-nested-rows_variant-subrows`),variantTree:r(`data-grid-nested-rows_variant-tree`)}})))()}var En,Dn,On;function kn(){return(kn=e((()=>{u(),E(),Zt(),B(),lt(),Tn(),En=y(`ul`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
    &.${wn.variantSubrows} .${R.root}:first-of-type {
      display: none;

      & + .${R.root} {
        margin-top: 0;
      }
    }

    & .${R.actionColumn} {
      display: none;
    }

    /* Высота последнего декоративного элемента полная тк у AdditionalRows есть кнопка "Показать все/Скрыть" */
    &.${wn.additionalRows} .${V.nestedChildren}:last-of-type::before {
      height: 100%;
    }
  }
`,Dn=y(`li`,{shouldForwardProp:e=>![`$level`,`$isShowConnector`].includes(e)})`
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
`,On=y(b,{shouldForwardProp:e=>![`$moreButtonColumnPosition`].includes(e)})`
  grid-column: ${({$moreButtonColumnPosition:e})=>e};
  justify-self: start;

  margin: ${({theme:e})=>e.spacing(0,2)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
  }
`})))()}var An;function jn(){return(jn=e((()=>{An=function(e){return e.Tree=`tree`,e.Subrows=`subrows`,e}({})})))()}var Mn,Nn;function Pn(){return(Pn=e((()=>{Mn=D(),jn(),Nn=({data:e,level:t,variant:n,initialVisibleChildrenCount:r})=>{let i=Object.is(n,An.Tree),a=i?t+1:0,o=e?.slice(0,r),s=e?.slice(r),[c,l]=(0,Mn.useState)(!1);return{isShowAllChildren:c,isShowMoreButton:!!s?.length,isShowConnector:i,initialVisibleChildren:o,otherChildren:s,nextLevel:a,handleToggleShowAllChildren:e=>{e.stopPropagation(),l(e=>!e)}}}})))()}function Fn(){return(Fn=e((()=>{Pn()})))()}var In,Ln,Rn;function zn(){return(zn=e((()=>{ne(),C(),lt(),Tn(),kn(),Fn(),In=T(),Ln=n(wn.root,{variants:{variant:{subrows:wn.variantSubrows,tree:wn.variantTree}}}),Rn=e=>{let{isShowAllChildren:t,isShowMoreButton:n,isShowConnector:r,nextLevel:i,initialVisibleChildren:a,otherChildren:o,handleToggleShowAllChildren:s}=Nn(e),{isOpen:c,data:l,keyId:u,level:d,moreButtonColumnPosition:f,renderRow:p,variant:m}=e;return!l||!l.length?null:(0,In.jsx)(F,{in:c,unmountOnExit:!0,children:(0,In.jsxs)(En,{$level:d,$isShowConnector:r,className:Ln({variant:m}),children:[a.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:V.nestedChildren})}),c&&(0,In.jsxs)(In.Fragment,{children:[(0,In.jsx)(F,{in:t,component:`li`,unmountOnExit:!0,children:(0,In.jsx)(En,{$level:d,$isShowConnector:r,className:wn.additionalRows,children:o.map(e=>{let{children:t,options:n}=e,r=e[u];return p({key:r,row:e,options:n,nestedChildren:t,level:i,className:`${V.hidden} ${V.nestedChildren}`})})})}),n&&(0,In.jsx)(Dn,{$level:i,$isShowConnector:r,children:(0,In.jsx)(On,{$moreButtonColumnPosition:f,variant:`link`,onClick:s,children:t?`Скрыть`:`Показать все`})})]})]})})};try{Rn.displayName=`NestedChildren`,Rn.__docgenInfo={description:``,displayName:`NestedChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Если true, список дочерних элементов раскрыт`,name:`isOpen`,required:!0,tags:{},type:{name:`boolean`}},data:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Данные для отображения`,name:`data`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/NestedChildren/NestedChildren.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`({ key, level, row, nestedChildren, options, className, }: { key: string; row: TData; level: number; nestedChildren: (TData & { options?: DataGridRowOptions<TData>; })[]; options?: DataGridRowOptions<TData>; className?: string; }) => ReactElement<...>`}}},tags:{}}}catch{}})))()}function Bn(){return(Bn=e((()=>{zn()})))()}var Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn;function Xn(){return(Xn=e((()=>{Ee(),s(),ee(),E(),d(),Zt(),B(),lt(),Vn=y.li`
  --level: 0;
  position: relative;

  &:not(:last-of-type)::before,
  &.${V.hidden}::before {
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
    &.${V.showConnector}::before,
    & .${H.root}::before {
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

    &.${V.mobileVariantCards} {
      border-bottom: none;

      &:not(.${V.nestedChildren}) {
        padding: ${({theme:e})=>e.spacing(5,4,4)};

        background-color: ${({theme:e})=>e.palette.background.default};
        border: 1px solid ${({theme:e})=>e.palette.grey[300]};
        border-radius: ${({theme:e})=>e.shape.medium};
      }
    }

    &.${V.hasNestedChildren} {
      :not(.${V.nestedChildren}) .${R.root}:last-of-type {
        padding-bottom: ${({theme:e})=>e.spacing(3)};
      }

      /* Ко всем ячейкам кроме первой применяем декоративный элемент слева и добавляем отступы для выравнивания с NestedChildren */
      &:not(.${V.nestedChildren}) > .${H.root} .${R.root}:not(.${st.firstCell}) {
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
      &:not(.${V.nestedChildren})
       > .${H.root} .${R.root}.${st.firstCell} 
        + .${R.root} {
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

    &.${V.nestedChildren} {
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
`,Hn=y.div`
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
  .${V.nestedChildren} &::before {
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      left: -20px;
      transform: none;

      display: block;

      width: ${12}px;

      /* Высота 8px для выравнивания с названием колонки первой ячейки */
      height: ${({theme:e})=>e.spacing(2)};
    }
  }

  &.${H.active} {
    background-color: ${({theme:e})=>e.palette.primary[100]};
  }

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.background.elementHover};

      &.${H.active} {
        background-color: ${({theme:e})=>e.palette.primary[100]};
      }

      &.${H.hovered} {
        cursor: pointer;
      }
    }
  }


  &.${V.hover} {
    background-color: ${({theme:e})=>e.palette.background.elementHover};

    &.${H.hovered} {
      cursor: pointer;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;

    &.${H.active} {
      background-color: transparent;
    }
  }
`,Un=y(Yt)`
  &:first-of-type {
    margin-left: calc(var(--level) * ${32}px);
  }
`,Wn=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,Gn=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Kn=y(_)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${p} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,qn=y(Te,{shouldForwardProp:e=>e!==`$isActive`})`
  transform: rotateZ(${({$isActive:e})=>e?90:0}deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};
`,Jn=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`,Yn=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${ct.hidden} {
      display: none;
    }
  }
`})))()}var Zn,Qn;function $n(){return($n=e((()=>{Zn=D(),Qn=(0,Zn.createContext)({hasBlockingAction:!1,isSelectable:!1,addBlockingAction:()=>void 0,removeBlockingAction:()=>void 0,row:{},onSelectRow:()=>()=>void 0,onRowEnter:()=>void 0,onRowLeave:()=>void 0,registerRowElement:()=>void 0,unregisterRowElement:()=>void 0,itemProps:{},isSelected:!1})})))()}var er,tr,nr;function rr(){return(rr=e((()=>{er=D(),$n(),tr=T(),nr=({row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,children:s,isSelectable:c,isSelected:l,disabledMode:u,disabledReason:d})=>{let[f,p]=(0,er.useState)(!1),[m,h]=(0,er.useState)(),g=(0,er.useCallback)(e=>{p(!0),h(e)},[]),_=(0,er.useCallback)(()=>{p(!1),h(void 0)},[]),v=(0,er.useMemo)(()=>u?{mode:u,reason:d??``}:void 0,[u,d]),y=(0,er.useMemo)(()=>({hasBlockingAction:f,blockingActionReason:m,addBlockingAction:g,removeBlockingAction:_,isSelectable:c,row:e,itemProps:t,onSelectRow:n,onRowEnter:r,onRowLeave:i,registerRowElement:a,unregisterRowElement:o,isSelected:l,rowDisabled:v}),[f,m,g,_,c,e,t,n,r,i,a,o,l,v]);return(0,tr.jsx)(Qn.Provider,{value:y,children:s})};try{nr.displayName=`RowContextProvider`,nr.__docgenInfo={description:``,displayName:`RowContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,methods:[],props:{row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},itemProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowContext.ts`,name:`TypeLiteral`}],description:``,name:`itemProps`,required:!1,tags:{},type:{name:`object`}},disabledMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Режим блокировки строки`,name:`disabledMode`,required:!1,tags:{},type:{name:`enum`,raw:`"row" | "selection" | "row-except-last-cell"`,value:[{value:`"row"`},{value:`"selection"`},{value:`"row-except-last-cell"`}]}},disabledReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:`Причина блокировки строки`,name:`disabledReason`,required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/RowContext/RowProvider/RowProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ir(){return(ir=e((()=>{rr()})))()}function ar(){return(ar=e((()=>{$n(),ir()})))()}var or,sr;function cr(){return(cr=e((()=>{or=D(),k(),sr=()=>{let{isMobile:e}=O(),[t,n]=(0,or.useState)(!1);return{isMobile:e,isDrawerOpen:t,handleOpenDrawer:()=>{e&&n(!0)},handleCloseDrawer:()=>{n(!1)}}}})))()}function lr(){return(lr=e((()=>{cr()})))()}var ur;function dr(){return(dr=e((()=>{ur=e=>e.reduce((e,{field:t,...n})=>t?{...e,[t]:n}:e,{})})))()}var fr;function pr(){return(pr=e((()=>{dr(),fr=(e,t)=>{if(!t)return e;let n=ur(t);return Object.keys(n).length?e.map(e=>e.hasOwnProperty(`field`)?{...e,...n[e.field]||{}}:e):e}})))()}var K,mr;function hr(){return(hr=e((()=>{K=D(),Vt(),jn(),dn(),pn(),lt(),ar(),lr(),pr(),mr=({keyId:e,columns:t,row:n,nestedChildren:r,level:i,variant:a,options:o,isInitialExpanded:s=!1,expandedLevel:c,isSelectable:l,isSelected:u,getRowDisabled:d,isNested:f=!1,onSelectRow:p,onRowClick:m,isVisibleCollapseButton:h,registerRowElement:g,unregisterRowElement:_,style:v,activeRowId:y})=>{let{isDrawerOpen:b,handleOpenDrawer:x,handleCloseDrawer:ee}=sr(),[S,C]=(0,K.useState)(null),w=(0,K.useCallback)(e=>{e&&C(e)},[]),T=!!(s&&i<=c-1&&r?.length),{mobileDisplayVariant:E}=(0,K.useContext)(ht),{hasBlockingAction:D,blockingActionReason:O,rowDisabled:k}=(0,K.useContext)(Qn),[A,j]=(0,K.useState)(T),M=(0,K.useRef)(null),N=e=>{e?(M.current=e,g?.(F,e)):M.current&&=(_?.(F,M.current),null)},[P,te]=(0,K.useState)(!1),F=n[e],{href:ne}=o||{},re=(0,K.useMemo)(()=>f?fn(n,d):k,[f,n,d,k]),{isDisabled:I,isDisabledLastCell:ie,disabledReason:ae,isCheckboxDisabled:L,checkboxDisabledReason:oe}=un({rowDisabled:re,hasBlockingAction:D,blockingActionReason:O,isDisabledLastCellOption:o?.isDisabledLastCell}),se=()=>{if(I){x();return}m?.(n)},ce=Object.is(a,An.Tree),le=(0,K.useMemo)(()=>fr(t,o?.childrenColumns),[t,o]),ue=(0,K.useCallback)(e=>{e.stopPropagation(),j(e=>!e)},[]),de=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&te(!0)},fe=()=>te(!1),pe=e=>{I&&e.target.getAttribute(`data-row-disable`)!==`true`&&te(!1)},me=!!r?.length&&h,he=(0,K.useMemo)(()=>({"--level":i,...v}),[i,v]),ge=!!(!I&&(m||ne)),_e=y===F,ve=(0,K.useMemo)(()=>p(n),[p,n]);return{disabledReason:ae,rowStyles:he,isOpen:A,isShowConnector:ce,childrenColumns:le,rowId:F,rowRef:N,isDisabled:I,isDisabledLastCell:ie,isSelectable:l,isRenderCollapseButton:me,handleToggle:ue,rootRowElement:S,rootRowRef:w,isHovered:ge,isActive:_e,mobileDisplayVariant:E,rowProps:{onClick:se,onMouseMove:pe},drawerProps:{open:b,onClose:ee,title:`Заблокировано`},tooltipProps:{open:P,title:I?ae:void 0,onOpen:de,onClose:fe},checkboxProps:{checked:u,disabled:L,disabledReason:oe,onChange:ve},nestedChildrenProps:{isOpen:A}}}})))()}function gr(){return(gr=e((()=>{hr()})))()}var _r;function vr(){return(vr=e((()=>{_r=(e,t,n)=>e?!t||!t.includes(n):!1})))()}var yr,q,br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=e((()=>{yr=D(),re(),ae(),f(),C(),Ce(),Zt(),tn(),W(),lt(),Bn(),Xn(),gr(),vr(),q=T(),br=n(V.root,{variants:{isShowConnector:{true:V.showConnector},mobileDisplayVariant:{cards:V.mobileVariantCards,list:V.mobileVariantList},hasNestedChildren:{true:V.hasNestedChildren}}}),xr=n(H.root,{variants:{isHovered:{true:H.hovered},isActive:{true:H.active}}}),Sr=n(ct.root,{variants:{hidden:{true:ct.hidden}}}),Cr=n(st.single,{variants:{isFirstCell:{true:st.firstCell}}}),wr=e=>{let{isOpen:n,isShowConnector:r,childrenColumns:i,rowId:a,handleToggle:o,checkboxProps:s,rowProps:c,isHovered:l,tooltipProps:u,nestedChildrenProps:d,isDisabled:f,isDisabledLastCell:p,isRenderCollapseButton:m,rowRef:h,rowStyles:g,drawerProps:_,disabledReason:v,isActive:y,isSelectable:b,mobileDisplayVariant:x,rootRowElement:ee,rootRowRef:S}=mr(e),{className:C,row:w,options:T,variant:E,isInitialExpanded:D,expandedLevel:O,level:k,nestedChildren:A,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,isVisibleCollapseButton:te,columns:F,emptyCellValue:ne,activeRowId:re,keyId:I,onSelectRow:ie,onRowClick:ae,sectionOffset:L,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:le,onRowLeave:ue,style:de,getRowDisabled:fe,isNested:pe,...me}=e,{isNotSelectable:he,href:ge,target:_e}=T||{},ve=()=>!m&&(!b||he)?null:(0,q.jsxs)(q.Fragment,{children:[m&&(0,q.jsx)(Gn,{children:(0,q.jsx)(Kn,{variant:`text`,onClick:o,children:(0,q.jsx)(qn,{$isActive:n})})}),b&&!he&&(0,q.jsx)(Wn,{...Se(f),onClick:e=>e.stopPropagation(),className:V.checkbox,children:(0,q.jsx)($t,{...s})})]}),ye=(0,yr.useCallback)(()=>{let e=(oe??F.length)-1,n=p?void 0:[e];return F?.map((e,r)=>{let i=`${a}-${r}`,o=(L??0)+r,s=_r(f,n,o),c=o===0;if(U(e)){let{label:n,children:r,hideTitleOnMobile:a,isHideOnMobile:o}=e;return(0,q.jsxs)(yr.Fragment,{children:[(0,q.jsx)(Yn,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:Sr({hidden:a||o}),children:n}),r.map((e,n)=>{let r=`${i}-${n}`;return(0,q.jsx)(Un,{row:w,cell:e,isHideOnMobile:o,emptyCellValue:ne,isDisabled:s,startAdornment:c&&n===0&&ve(),isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,className:t(R.grouped),rootRowElement:ee,href:ge,target:_e},r)})]},i)}return(0,q.jsx)(Un,{className:Cr({isFirstCell:c}),row:w,cell:e,emptyCellValue:ne,startAdornment:c&&ve(),isDisabled:s,isHidePersonalData:e.isHidePersonalData,hasNestedChildren:!!A?.length,rootRowElement:ee,href:ge,target:_e},i)})},[w,n,F,f,p,s.checked,s.disabled,s.disabledReason,oe,L,ee]),be=(0,yr.useCallback)(({key:e,...t})=>(0,q.jsx)(wr,{keyId:I,...t,variant:E,isSelectable:b,isInitialExpanded:D,expandedLevel:O,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,isVisibleCollapseButton:te,activeRowId:re,columns:i,onSelectRow:ie,onRowClick:ae,totalColumnsCount:oe,registerRowElement:se,unregisterRowElement:ce,onRowEnter:le,onRowLeave:ue,sectionOffset:L,getRowDisabled:fe,isNested:!0},e),[I,E,b,D,O,j,M,L,oe,re,i,ie,ae,se,ce,le,ue,fe]);return(0,q.jsxs)(Vn,{className:t(C,br({isShowConnector:r,mobileDisplayVariant:x,hasNestedChildren:!!A?.length})),style:g,...me,ref:S,children:[(0,q.jsx)(N,{followCursor:!0,arrow:!1,...u,children:(0,q.jsx)(Hn,{"data-row-id":a,ref:h,onPointerEnter:()=>le?.(a),onPointerLeave:e=>ue?.(a,e.nativeEvent),className:xr({isHovered:l,isActive:y}),[ot]:f,...c,children:ye()})}),(0,q.jsx)(Rn,{...d,data:A,keyId:I,level:k,variant:E,initialVisibleChildrenCount:j,moreButtonColumnPosition:M,renderRow:be}),(0,q.jsx)(P,{..._,children:(0,q.jsx)(Jn,{children:v})})]},`row-${a}`)},Tr=(0,yr.memo)(wr);try{Tr.displayName=`Row`,Tr.__docgenInfo={description:``,displayName:`Row`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/Row.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},level:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень вложенности в дереве`,name:`level`,required:!0,tags:{},type:{name:`number`}},nestedChildren:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Вложенные элементы`,name:`nestedChildren`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Флаг выбора текущей строки`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},isNested:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Если true, строка вложенная и сама вычисляет блокировку`,name:`isNested`,required:!1,tags:{},type:{name:`boolean`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк. Передаётся только строкам с дочерними элементами`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},emptyCellValue:{defaultValue:{value:`'-'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{default:`'-'`},type:{name:`ReactNode`}},options:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Дополнительные настройки строки`,name:`options`,required:!1,tags:{},type:{name:`DataGridRowOptions<TData>`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Row/types.ts`,name:`TypeLiteral`}],description:`Стили для строки`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}function Dr(){return(Dr=e((()=>{Er(),ar()})))()}function Or(){return(Or=e((()=>{Oe(),De()})))()}var kr,Ar,jr;function Mr(){return(Mr=e((()=>{kr=D(),Ar=T(),jr=(0,kr.memo)(({index:e,renderRow:t,row:n})=>(0,Ar.jsx)(Ar.Fragment,{children:t(n,e)}));try{jr.displayName=`CustomRowWrapper`,jr.__docgenInfo={description:"Обёртка с `memo` для изоляции пользовательского `renderRow`.\n\nПри re-render родителя (`Body`, Virtuoso `Item`) без обёртки `renderRow(row, index)`\nвызывается заново на каждой строке и каждый раз создаёт новые React-elements, из‑за чего `memo` у дочерних компонентов\n(например, `DataGridCollapsibleRow`) не срабатывает.\n\n`CustomRowWrapper` повторно вызывает `renderRow` только когда изменились\n`index`, `row` или ссылка на `renderRow`.",displayName:`CustomRowWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,methods:[],props:{index:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`index`,required:!0,tags:{},type:{name:`number`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`renderRow`,required:!0,tags:{},type:{name:`RenderRow`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/CustomRowWrapper/CustomRowWrapper.tsx`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`Record<string, unknown>`}}},tags:{}}}catch{}})))()}function Nr(){return(Nr=e((()=>{Mr()})))()}var Pr;function Fr(){return(Fr=e((()=>{a(),Pr={root:r(`data-grid__body`),disableMinHeight:r(`data-grid__body_disable-min-height`)}})))()}var Ir;function Lr(){return(Lr=e((()=>{s(),E(),B(),Fr(),Ir=y.ul`
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

  &.${Pr.disableMinHeight} {
    min-height: unset;
  }

  &.${z.bodyEmpty} {
    display: flex;
    align-items: center;
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    scrollbar-gutter: unset;
    
    overflow: initial;

    width: 100%;
  }
`})))()}var Rr,zr;function Br(){return(Br=e((()=>{Rr=D(),S(),zr=({minDisplayRows:e})=>{let{components:t}=(0,Rr.useContext)(o),n=t?.dataGrid?.defaultProps?.disableMinHeight;return{disableMinHeight:n,bodyCssVars:!n&&e?{"--min-display-rows":e}:{}}}})))()}function Vr(){return(Vr=e((()=>{Br()})))()}var Hr,Ur,Wr,Gr;function Kr(){return(Kr=e((()=>{f(),C(),Nr(),Dr(),ar(),Fr(),Lr(),Vr(),Hr=T(),Ur=0,Wr=n(Pr.root,{variants:{disableMinHeight:{true:Pr.disableMinHeight}}}),Gr=({rows:e,selectedIds:n,rowsDisabled:r,getRowDisabled:i,minDisplayRows:a,keyId:o,noDataPlaceholder:s,className:c,renderRow:l,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._})=>{let{disableMinHeight:v,bodyCssVars:y}=zr({minDisplayRows:a}),b=e.map((e,t)=>{let a=e[o],s=n.has(a),c=r.get(a),{children:v,options:y}=e,b=Array.isArray(v)&&v.length>0;return(0,Hr.jsx)(nr,{row:e,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:d,isSelected:s,disabledMode:c?.mode,disabledReason:c?.reason,children:l?(0,Hr.jsx)(jr,{index:t,renderRow:l,row:e}):(0,Hr.jsx)(Tr,{row:e,options:y,keyId:o,level:Ur,nestedChildren:v,isSelected:s,getRowDisabled:b?i:void 0,columns:u,isSelectable:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,..._},a)},a)});return(0,Hr.jsx)(Ir,{className:t(c,Wr({disableMinHeight:v})),style:y,children:e.length?b:s})};try{Gr.displayName=`Body`,Gr.__docgenInfo={description:``,displayName:`Body`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/Body.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Поле, которое будет использоваться в качестве ключа`,name:`keyId`,required:!0,tags:{},type:{name:`string | number | symbol`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификатор активного элемента массива rows. Выделяет активную строку в таблице`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},isInitialExpanded:{defaultValue:{value:`'false'`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то дерево будет раскрыто по умолчанию`,name:`isInitialExpanded`,required:!0,tags:{default:`'false'`},type:{name:`boolean`}},expandedLevel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true`,name:`expandedLevel`,required:!0,tags:{},type:{name:`number`}},initialVisibleChildrenCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Количество отображаемых по умолчанию дочерних элементов`,name:`initialVisibleChildrenCount`,required:!0,tags:{},type:{name:`number`}},moreButtonColumnPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Номер колонки, в которой будет расположена кнопка "Показать все"\nРаботает только для `variant="subrows"`',name:`moreButtonColumnPosition`,required:!0,tags:{},type:{name:`number`}},isVisibleCollapseButton:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:'Если false, кнопка разворачивания элементов не показывается\nРаботает только для `variant="subrows"`',name:`isVisibleCollapseButton`,required:!0,tags:{},type:{name:`boolean`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},selectedIds:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Идентификаторы выбранных строк`,name:`selectedIds`,required:!0,tags:{},type:{name:`Set<unknown>`}},rowsDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Блокировки строк по идентификатору`,name:`rowsDisabled`,required:!0,tags:{},type:{name:`Map<unknown, DataGridRowDisabled>`}},getRowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Функция блокировки для вложенных строк`,name:`getRowDisabled`,required:!1,tags:{},type:{name:`(row: TData) => DataGridRowDisabled`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Массив данных для отображения`,name:`rows`,required:!0,tags:{},type:{name:`(TData & { options?: DataGridRowOptions<TData>; })[]`}},variant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения вложенных элементов`,name:`variant`,required:!0,tags:{},type:{name:`enum`,raw:`"tree" | "subrows"`,value:[{value:`"tree"`},{value:`"subrows"`}]}},minDisplayRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения переданного кол-ва строк при отсутствии данных`,name:`minDisplayRows`,required:!0,tags:{},type:{name:`number`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},noDataPlaceholder:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Используется для отображения placeholder при отсутствии данных в таблице`,name:`noDataPlaceholder`,required:!1,tags:{},type:{name:`ReactNode`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: TData) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: TData) => void`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},totalColumnsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Общее количество колонок (для правильного определения последней ячейки)`,name:`totalColumnsCount`,required:!1,tags:{},type:{name:`number`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Отмена регистрации элемента строки`,name:`unregisterRowElement`,required:!0,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!0,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Обработчик выхода из строки`,name:`onRowLeave`,required:!0,tags:{},type:{name:`(rowId: string, e: PointerEvent) => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},renderRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Body/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент для отображения строк таблицы`,name:`renderRow`,required:!1,tags:{},type:{name:`(row: TData, index: number) => ReactNode`}}},tags:{}}}catch{}})))()}function qr(){return(qr=e((()=>{Kr()})))()}var J;function Jr(){return(Jr=e((()=>{a(),J={root:r(`data-grid__head-cell`),groupParent:r(`data-grid__head-cell_group-parent`),groupChild:r(`data-grid__head-cell_group-child`),singleColumn:r(`data-grid__head-cell_single-column`),alignLeft:r(`data-grid__head-cell_align-left`),alignCenter:r(`data-grid__head-cell_align-center`),alignRight:r(`data-grid__head-cell_align-right`),hasStartAdornment:r(`data-grid__head-cell_has-start-adornment`),sortable:r(`data-grid__head-cell_sortable`)}})))()}var Yr;function Xr(){return(Xr=e((()=>{Or(),E(),Jr(),Yr=y.div`
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

  .${ke.iconWrapper}  {
    margin-right: ${({theme:e})=>e.spacing(1)};
  }
`})))()}var Zr;function Qr(){return(Qr=e((()=>{Zr=({gridPosition:e,field:t,isSortable:n,startAdornment:r,onSort:i})=>({hasStartAdornment:!!r,handleSortClick:()=>{t&&n&&i(t)},headCellCssVars:{"--grid-column-start":e?.start,"--grid-column-end":e?.end}})})))()}var $r,ei,ti,ni;function ri(){return(ri=e((()=>{$r=D(),Ie(),Pe(),Le(),ue(),f(),C(),Jr(),Xr(),Qr(),ei=T(),ti=n(J.root,{variants:{isSortable:{true:J.sortable},align:{left:J.alignLeft,center:J.alignCenter,right:J.alignRight},hasStartAdornment:{true:J.hasStartAdornment}}}),ni=e=>{let{hasStartAdornment:n,handleSortClick:r,headCellCssVars:i}=Zr(e),{startAdornment:a,field:o,isSortable:s,align:c,label:l,sorting:u,className:d}=e,f=(0,$r.useMemo)(()=>{if(!s)return null;if(u?.fieldId!==o)return(0,ei.jsx)(Me,{});switch(u?.sort){case`asc`:return(0,ei.jsx)(Fe,{color:`primary`});case`desc`:return(0,ei.jsx)(Ne,{color:`primary`});default:return(0,ei.jsx)(Me,{})}},[u,s,o]);return(0,ei.jsxs)(Yr,{onClick:r,className:t(d,ti({isSortable:s,align:c,hasStartAdornment:n})),style:i,children:[a&&a,(0,ei.jsx)(le,{rowsCount:2,variant:`pointer`,component:`p`,children:l}),f]})};try{ni.displayName=`HeadCell`,ni.__docgenInfo={description:``,displayName:`HeadCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,methods:[],props:{onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Выравнивание содержимого ячейки по горизонтали`,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`AlignVariant`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`string | number | symbol`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Дополнительное содержимое ячейки, которое будет распложено справа`,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/HeadCell/HeadCell.tsx`,name:`TypeLiteral`}],description:`Позиция ячейки в сетке CSS Grid`,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}}},tags:{}}}catch{}})))()}function ii(){return(ii=e((()=>{ri(),Jr()})))()}var ai,oi,si;function ci(){return(ci=e((()=>{ai=D(),ii(),oi=T(),si=({column:e,sorting:t,onSort:n,gridPosition:r,startAdornment:i})=>(0,oi.jsxs)(ai.Fragment,{children:[(0,oi.jsx)(ni,{sorting:t,label:e.label,onSort:n,className:J.groupParent,gridPosition:r,startAdornment:i}),e.children.map(e=>(0,oi.jsx)(ni,{...e,onSort:n,className:J.groupChild,startAdornment:e.columnHint},e.label))]},e.label);try{si.displayName=`GroupColumns`,si.__docgenInfo={description:``,displayName:`GroupColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,methods:[],props:{column:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`column`,required:!0,tags:{},type:{name:`DataGridGroupColumn<TData>`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},gridPosition:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`gridPosition`,required:!1,tags:{},type:{name:`{ start: number; end: number; }`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/GroupColumns/GroupColumns.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function li(){return(li=e((()=>{ci()})))()}var ui;function di(){return(di=e((()=>{E(),B(),ui=y.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;
`})))()}var fi,pi;function mi(){return(mi=e((()=>{ce(),di(),fi=T(),pi=({showCheckbox:e,columnHint:t,checkboxProps:n})=>!e&&!t?null:(0,fi.jsxs)(fi.Fragment,{children:[e&&(0,fi.jsx)(ui,{children:(0,fi.jsx)(L,{...n})}),t]});try{pi.displayName=`HeadCellStartAdornment`,pi.__docgenInfo={description:``,displayName:`HeadCellStartAdornment`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,methods:[],props:{showCheckbox:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`showCheckbox`,required:!0,tags:{},type:{name:`boolean`}},columnHint:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`columnHint`,required:!1,tags:{},type:{name:`ReactNode`}},checkboxProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadCellStartAdornment/HeadCellStartAdornment.tsx`,name:`TypeLiteral`}],description:``,name:`checkboxProps`,required:!0,tags:{},type:{name:`CheckboxProps`}}},tags:{}}}catch{}})))()}function hi(){return(hi=e((()=>{mi()})))()}var gi,_i;function vi(){return(vi=e((()=>{ii(),gi=T(),_i=({field:e,label:t,isSortable:n,align:r,sorting:i,onSort:a,startAdornment:o})=>(0,gi.jsx)(ni,{sorting:i,field:e,label:t,isSortable:n,align:r,startAdornment:o,onSort:a,className:J.singleColumn});try{_i.displayName=`SingleColumn`,_i.__docgenInfo={description:``,displayName:`SingleColumn`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,methods:[],props:{field:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`field`,required:!1,tags:{},type:{name:`string | number | symbol`}},label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`string`}},isSortable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`isSortable`,required:!1,tags:{},type:{name:`boolean`}},align:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`"center" | "right" | "left"`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!0,tags:{},type:{name:`(field: TSortField) => void`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/SingleColumn/SingleColumn.tsx`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function yi(){return(yi=e((()=>{vi()})))()}var bi;function xi(){return(xi=e((()=>{W(),bi=e=>{let{positionsMap:t}=e.reduce((e,t)=>{let n=U(t)?t.children.length:1,r=e.currentLine,i=r+n,a=U(t)?t.label:t.field||t.label||``;return e.positionsMap.set(a,{start:r,end:i}),e.currentLine=i,e},{positionsMap:new Map,currentLine:1});return t}})))()}var Si,Ci;function wi(){return(wi=e((()=>{Si=D(),W(),xi(),Ci=({columns:e,onSort:t,sorting:n,uncheckedRowsCount:r,rowsCount:i,onSelectAllRows:a})=>{let o=(0,Si.useMemo)(()=>!r&&i>0,[r,i]),s=(0,Si.useMemo)(()=>r>0&&r<i,[r,i]),c=!i;return{checkboxProps:(0,Si.useMemo)(()=>({checked:o,disabled:c,indeterminate:s,onChange:a}),[o,c,s,a]),handleSort:(0,Si.useCallback)(e=>{if(!t)return;let r=n?.fieldId===e;if(r&&n?.sort===`asc`)return t({fieldId:e,sort:`desc`});if(r&&n?.sort===`desc`)return t(void 0);t({fieldId:e,sort:`asc`})},[n,t]),gridPositions:(0,Si.useMemo)(()=>bi(e),[e]),headerCssVars:(0,Si.useCallback)(e=>e?{"--grid-column-start":e.start,"--grid-column-end":e.end}:{},[]),hasGroupedColumns:e.some(U)}};try{Ci.displayName=`useLogic`,Ci.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/useLogic/useLogic.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function Ti(){return(Ti=e((()=>{wi()})))()}var Ei;function Di(){return(Di=e((()=>{W(),Ei=({column:e,index:t,sectionOffset:n,isSelectable:r,isHideSelectAll:i})=>{let{label:a,align:o,columnHint:s}=e;return{label:a,align:o,columnHint:s,field:U(e)?void 0:e.field,sortable:U(e)?void 0:e.sortable,showCheckbox:(n??0)+t===0&&r&&!i}}})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{W(),li(),hi(),yi(),Ti(),Di(),Oi=T(),ki=e=>{let{checkboxProps:t,handleSort:n,gridPositions:r}=Ci(e),{columns:i,isSelectable:a,sorting:o,isHideSelectAll:s,sectionOffset:c}=e;return(0,Oi.jsx)(Oi.Fragment,{children:i.map((e,i)=>{let{label:l,align:u,columnHint:d,field:f,sortable:p,showCheckbox:m}=Ei({column:e,index:i,sectionOffset:c,isSelectable:a,isHideSelectAll:s}),h=m||d?(0,Oi.jsx)(pi,{showCheckbox:m,columnHint:d,checkboxProps:t}):void 0;if(U(e)){let t=r.get(e.label);return(0,Oi.jsx)(si,{column:e,sorting:o,onSort:n,gridPosition:t,startAdornment:h},e.label)}return(0,Oi.jsx)(_i,{sorting:o,field:f,label:l,isSortable:p,align:u,startAdornment:h,onSort:n},l)})})};try{ki.displayName=`HeadColumns`,ki.__docgenInfo={description:``,displayName:`HeadColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/HeadColumns/HeadColumns.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var ji;function Mi(){return(Mi=e((()=>{s(),E(),ji=y.header`
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
`})))()}var Ni,Pi,Fi;function Ii(){return(Ii=e((()=>{f(),C(),B(),W(),Ai(),Mi(),Ni=T(),Pi=n(z.header,{variants:{isGroup:{true:z.hasGroupedColumns}}}),Fi=e=>{let{columns:n,headerProps:r,addon:i,...a}=e;return(0,Ni.jsxs)(ji,{...r,role:`heading`,className:t(Pi({isGroup:n.some(U)}),r?.className),children:[(0,Ni.jsx)(ki,{...a,columns:n}),i]})};try{Fi.displayName=`Head`,Fi.__docgenInfo={description:``,displayName:`Head`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Конфигурация колонок для таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Если true, то будет отображаться чекбокс для выбора элемента`,name:`isSelectable`,required:!0,tags:{},type:{name:`boolean`}},sorting:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Параметры сортируемой колонки`,name:`sorting`,required:!1,tags:{},type:{name:`DataGridSort<TSortField>`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Общее количество строк, доступных для выбора`,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},uncheckedRowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Количество строк, которые не выбраны`,name:`uncheckedRowsCount`,required:!0,tags:{},type:{name:`number`}},onSelectAllRows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик выбора всех строк`,name:`onSelectAllRows`,required:!0,tags:{},type:{name:`(event: ChangeEvent<HTMLInputElement, Element>) => void`}},onSort:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Обработчик сортировки`,name:`onSort`,required:!1,tags:{},type:{name:`(sorting: DataGridSort<TSortField>) => void`}},isHideSelectAll:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Используется для скрытия чекбокса "Выбрать все"`,name:`isHideSelectAll`,required:!1,tags:{},type:{name:`boolean`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Смещение секции`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Props шапки таблицы, в том числе ref`,name:`headerProps`,required:!1,tags:{},type:{name:`DataGridHeaderProps`}},addon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Head/Head.tsx`,name:`TypeLiteral`}],description:`Слот поверх колонок шапки, например полоски drag plugin изменения ширины`,name:`addon`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function Li(){return(Li=e((()=>{Ii()})))()}var Ri,zi,Bi,Vi;function Hi(){return(Hi=e((()=>{fe(),pe(),we(),E(),Ri=y.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;
  background-color: ${({theme:e})=>e.palette.background.element};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,zi=y(te)`
  border-width: 1px;
`,Bi=y.div`
  position: sticky;
  z-index: ${({theme:e})=>e.zIndex.fab};
  left: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,Vi=y(me)`
  height: 2px;

  .${de.barColorPrimary} {
    background-color: ${({theme:e})=>e.palette.primary[800]};
  }
`})))()}var Ui,Wi;function Gi(){return(Gi=e((()=>{Hi(),Ui=T(),Wi=({isLoading:e=!1,isDisabled:t=!1,isVisibleDivider:n=!0})=>(0,Ui.jsxs)(Ui.Fragment,{children:[(e||t)&&(0,Ui.jsx)(Ri,{}),(0,Ui.jsxs)(Bi,{children:[e&&(0,Ui.jsx)(Vi,{}),!e&&n&&(0,Ui.jsx)(zi,{})]})]});try{Wi.displayName=`Loader`,Wi.__docgenInfo={description:``,displayName:`Loader`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,methods:[],props:{isLoading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isLoading`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},isVisibleDivider:{defaultValue:{value:`true`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/Loader/Loader.tsx`,name:`TypeLiteral`}],description:``,name:`isVisibleDivider`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Ki(){return(Ki=e((()=>{Gi()})))()}var qi,Ji,Yi,Xi;function Zi(){return(Zi=e((()=>{E(),B(),qi=y.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  &.${z.mobileVariantCards} {
    gap: ${({theme:e})=>e.spacing(2)};
  }
`,Ji=y.div`
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

  &.${z.mobileVariantCards} {
    padding: ${({theme:e})=>e.spacing(5,4,4)};

    border: 1px solid ${({theme:e})=>e.palette.components.border.default};
    border-radius: ${({theme:e})=>e.shape.medium};
  }
`,Yi=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Xi=y.div`
  padding-top: ${({theme:e})=>e.spacing(2)};
`})))()}var Qi,$i,ea,ta;function na(){return(na=e((()=>{ye(),C(),B(),Zi(),Qi=T(),$i=n(at.list,{variants:{mobileDisplayVariant:{cards:z.mobileVariantCards,list:z.mobileVariantList}}}),ea=n(at.item,{variants:{mobileDisplayVariant:{cards:z.mobileVariantCards,list:z.mobileVariantList}}}),ta=({cellsCount:e,mobileDisplayVariant:t,rowsCount:n})=>(0,Qi.jsx)(qi,{className:$i({mobileDisplayVariant:t}),children:Array.from({length:n},(n,r)=>(0,Qi.jsxs)(Ji,{className:ea({mobileDisplayVariant:t}),children:[Array.from({length:e-1},(e,t)=>(0,Qi.jsxs)(Yi,{children:[(0,Qi.jsx)(A,{variant:`rounded`,height:20}),(0,Qi.jsx)(A,{variant:`rounded`,height:16,width:`50%`})]},t)),(0,Qi.jsx)(Xi,{children:(0,Qi.jsx)(A,{variant:`rounded`,width:`100%`,height:40})})]},r))});try{ta.displayName=`MobileSkeleton`,ta.__docgenInfo={description:``,displayName:`MobileSkeleton`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,methods:[],props:{cellsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`cellsCount`,required:!0,tags:{},type:{name:`number`}},rowsCount:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`rowsCount`,required:!0,tags:{},type:{name:`number`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/MobileSkeleton/MobileSkeleton.tsx`,name:`TypeLiteral`}],description:``,name:`mobileDisplayVariant`,required:!0,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}}},tags:{}}}catch{}})))()}function ra(){return(ra=e((()=>{na()})))()}var ia,aa,oa;function sa(){return(sa=e((()=>{ia=D(),u(),S(),w(),aa=T(),oa=({title:e=`Нет\xA0данных`,imgAlt:t=e,action:n,size:r=`small`})=>{let{imagesMap:{noDataImgSrc:i}}=(0,ia.useContext)(o);return(0,aa.jsx)(c,{title:e,imgSrc:i,size:r,Actions:n?(0,aa.jsx)(b,{onClick:n.onClick,"aria-label":n.text,children:n.text}):void 0,imgAlt:t})};try{oa.displayName=`NoData`,oa.__docgenInfo={description:``,displayName:`NoData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,methods:[],props:{title:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Заголовок`,name:`title`,required:!1,tags:{default:`'Нет\\u00a0данных'
Добавлен неразрывный пробел \`\\u00a0\`,
так как без изображения текст форматируется в 2 строки`},type:{name:`string`}},imgAlt:{defaultValue:{value:`Нет\xA0данных`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`альтернативный текст в случае, если изображение по какой-то причине не загрузилось`,name:`imgAlt`,required:!1,tags:{default:`эквивалентно title`},type:{name:`string`}},action:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Текст и обработчик для кнопки действия`,name:`action`,required:!1,tags:{},type:{name:`{ text: string; onClick: () => void; }`}},size:{defaultValue:{value:`small`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/NoData/NoData.tsx`,name:`TypeLiteral`}],description:`Задает общий размер компонента`,name:`size`,required:!1,tags:{default:`'small'`},type:{name:`enum`,raw:`PlaceholderSize`,value:[{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}}},tags:{}}}catch{}})))()}function ca(){return(ca=e((()=>{sa()})))()}var la;function ua(){return(ua=e((()=>{E(),B(),la=y.div`
  display: flex;
  grid-column: calc(var(--left-columns-count) + 1) / calc(var(--right-columns-count) * -1 - 1);
  flex-direction: column;

  min-width: 0;

  background-color: ${({theme:e})=>e.palette.background.default};

  & .${z.header} {
    position: sticky;
    z-index: ${({theme:e})=>e.zIndex.fab-1};
    top: 0;

    background-color: ${({theme:e})=>e.palette.background.default};
  }

  & .${z.body} {
    scrollbar-gutter: unset;
  }

  &.${z.pinnedSectionNoData} {
    grid-column: 1 / -1;
  }

  &.${z.leftPinnedSection} {
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

    & .${z.header} {
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

  &.${z.rightPinnedSection} {
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

    & .${z.header} {
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
`})))()}var da,fa;function pa(){return(pa=e((()=>{da=D(),f(),B(),sn(),on(),fa=({position:e,isNoData:n,columns:r})=>{let i=(0,da.useMemo)(()=>t({[z.leftPinnedSection]:e===`left`,[z.rightPinnedSection]:e===`right`,[z.pinnedSectionNoData]:n&&e===`center`}),[]),a=n&&e!==`center`||!r||r.length===0;return{classnames:i,gridColumns:a?``:an(G(r)),shouldNotRenderSection:a}}})))()}function ma(){return(ma=e((()=>{pa()})))()}var ha,ga;function _a(){return(_a=e((()=>{qr(),B(),Li(),ua(),ma(),ha=T(),ga=({columns:e,position:t,isNoData:n,headProps:r,bodyProps:i,sectionOffset:a})=>{let{classnames:o,gridColumns:s,shouldNotRenderSection:c}=fa({position:t,isNoData:n,columns:e});return c?null:(0,ha.jsxs)(la,{className:o,style:{"--data-grid-columns":s},children:[!n&&(0,ha.jsx)(Fi,{...r,columns:e,sectionOffset:a}),(0,ha.jsx)(Gr,{...i,columns:e,sectionOffset:a,className:z.body})]})};try{ga.displayName=`Section`,ga.__docgenInfo={description:``,displayName:`Section`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/Section.tsx`,methods:[],props:{bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Конфигурация колонок для секции`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},position:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:`Позиция секции`,name:`position`,required:!0,tags:{},type:{name:`enum`,raw:`"center" | "right" | "left"`,value:[{value:`"center"`},{value:`"right"`},{value:`"left"`}]}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/Section/types.ts`,name:`TypeLiteral`}],description:``,name:`sectionOffset`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function va(){return(va=e((()=>{_a()})))()}var ya;function ba(){return(ba=e((()=>{E(),B(),ya=y.div`
  overflow: auto;
  display: grid;
  grid-template-columns: var(--data-grid-columns);

  width: 100%;
  height: 100%;

  & .${z.header} {
    padding-right: unset;
  }

  &.${z.disabled} {
    pointer-events: none;

    background: ${({theme:e})=>e.palette.background.element};
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    mix-blend-mode: luminosity;
  }
`})))()}var xa,Sa;function Ca(){return(Ca=e((()=>{xa=D(),sn(),Sa=({sections:e})=>{let t=e.find(e=>e.position===`left`)?.columns,n=e.find(e=>e.position===`right`)?.columns,r={"--left-columns-count":t?G(t).length:0,"--right-columns-count":n?G(n).length:0},{sectionOffsets:i,totalColumnsCount:a}=(0,xa.useMemo)(()=>{let t={},n=0;return e.forEach(e=>{t[e.position]=n,n+=G(e.columns).length}),{sectionOffsets:t,totalColumnsCount:n}},[e]);return{pinnedContainerStyles:r,sectionOffsets:i,totalColumnsCount:a}}})))()}function wa(){return(wa=e((()=>{Ca()})))()}var Ta,Ea;function Da(){return(Da=e((()=>{Ce(),va(),ba(),wa(),Ta=T(),Ea=({className:e,isDisabled:t,headProps:n,bodyProps:r,sections:i,isNoData:a})=>{let{pinnedContainerStyles:o,sectionOffsets:s,totalColumnsCount:c}=Sa({sections:i});return(0,Ta.jsx)(ya,{className:e,...Se(t),style:o,children:i.map(({columns:e,position:t})=>(0,Ta.jsx)(ga,{columns:e,position:t,sectionOffset:s[t],bodyProps:{...r,totalColumnsCount:c},headProps:n,isNoData:a},t))})};try{Ea.displayName=`PinnedSections`,Ea.__docgenInfo={description:``,displayName:`PinnedSections`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,methods:[],props:{sections:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Конфигурация закрепленных секций`,name:`sections`,required:!0,tags:{},type:{name:`PinnedSection<TData>[]`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Если true, таблица будет заблокирована для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},bodyProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации таблицы`,name:`bodyProps`,required:!0,tags:{},type:{name:`Omit<BodyProps<TData>, "columns">`}},headProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Параметры предназначены для конфигурации шапки таблицы`,name:`headProps`,required:!0,tags:{},type:{name:`Omit<HeadProps<TData, TSortField>, "columns">`}},isNoData:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/PinnedSections/PinnedSections.tsx`,name:`TypeLiteral`}],description:`Флаг для отображения placeholder при отсутствии данных`,name:`isNoData`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Oa(){return(Oa=e((()=>{Da()})))()}var ka,Aa,ja,Ma;function Na(){return(Na=e((()=>{E(),Fr(),Ge(),B(),ii(),lt(),ka=y.div`
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

  &.${z.isAllowHorizontalScroll} {
    overflow: auto hidden;

    & .${z.wrapper} {
      overflow: auto hidden;
    }
  }

  &.${z.hasPinnedSections} {
    overflow: hidden;
  }

  &.${z.hasGroupedColumns} {
    & .${z.header} {
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
    &.${z.overflowed} {
      & .${z.rightPinnedSection} {
         box-shadow: -3px 0 4px 0 #63636326;
      }

      & .${z.leftPinnedSection} {
         box-shadow: 3px 0 4px 0 #63636326;
      }
    }
  }

  &.${z.gridViewFull} {
    & .${z.header} {
      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-top-left-radius: ${({theme:e})=>e.shape.medium};
      border-top-right-radius: ${({theme:e})=>e.shape.medium};
    }

    & .${R.root},
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

    & .${V.root}:last-of-type .${R.root} {
      border-bottom: 1px solid ${({theme:e})=>e.palette.components.border.default};
    }

    &:not(.${z.hasPinnedSections}) .${z.body},
    & .${z.pinnedSections} {
      container-name: data-grid-scroll-container;
      container-type: scroll-state;
    }

    /* Прогрессивное улучшение. Убираем нижнюю границу последней строки когда scrollbar находится в нижней точке. Для того что бы избежать двойного разделителя снизу */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    @container data-grid-scroll-container scroll-state((scrollable: y) and (not (scrollable: bottom))) {
      & .${V.root}:last-of-type .${R.root} {
        border-bottom: none;
      }
    }

    & .${V.root}:first-of-type .${R.root} {
      border-top: none;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;

    & .${z.loadingPlaceholder} {
      justify-content: flex-start;
    }

    &.${z.hasPinnedSections} {
      overflow: initial;
    }

    &.${z.isAllowHorizontalScroll} {
      overflow: initial;

      & .${z.wrapper} {
        overflow: initial;
      }
    }

    &.${z.gridViewFull} {
      & .${R.root}, & .${J.root} {
        border: none;
      }

      & .${V.root}:last-of-type .${R.root} {
        border-bottom: none;
      }
    }

    &.${z.mobileVariantCards} {
    
      & .${z.wrapper} {
        margin: ${({theme:e})=>e.spacing(0,4,4)};
      }

      & .${Pr.root} {
        display: flex;
        flex-direction: column;
        gap: ${({theme:e})=>e.spacing(2)};
      }
    }
  }

  &.${z.hasMassActions} {
    /* Резерв места под панель массовых действий убирается одновременно с анимацией её скрытия, чтобы строки не прыгали */
    & .${z.wrapper} .${z.body},
    & .${z.pinnedSections} {
      transition: padding-bottom
        ${({theme:e})=>e.transitions.duration.leavingScreen}ms
        ${({theme:e})=>e.transitions.easing.easeIn};
    }

    /* Пока панель массовых действий открыта, последние строки не должны перекрываться ею */
    &.${z.massActionsOpen} {
      & .${z.wrapper} .${z.body},
      & .${z.pinnedSections} {
        padding-bottom: var(--mass-actions-reserved-space);
      }
    }
  }
`,Aa=y.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  height: 100%;

  /* Браузер не считает раскладку строк вне области прокрутки: drag полоски resize не пересчитывает невидимые строки.
     До первой отрисовки высота строки — заглушка, после браузер запоминает реальную */
  ${({theme:e})=>e.breakpoints.up(`mobile`)} {
    & .${H.root} {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      content-visibility: auto;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      contain-intrinsic-block-size: auto ${44}px;
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    overflow: initial;
  }
`,ja=y(Aa)`
  pointer-events: none;

  background: ${({theme:e})=>e.palette.background.element};
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  mix-blend-mode: luminosity;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    opacity: 0.7;
  }
`,Ma=y.div`
  position: relative;

  height: 0;
`})))()}var Pa,Fa;function Ia(){return(Ia=e((()=>{Pa=D(),lt(),Fa=({hasPinnedColumns:e=!1})=>{let t=(0,Pa.useRef)(new Map),n=(0,Pa.useRef)(null),r=(0,Pa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>{e.classList.contains(V.hover)||e.classList.add(V.hover)})},[e]),i=(0,Pa.useCallback)(n=>{if(!e)return;let r=t.current.get(n);r&&r.forEach(e=>e.classList.remove(V.hover))},[e]);return{rowsMapRef:t,registerRowElement:(0,Pa.useCallback)((n,r)=>{if(!e)return;let i=t.current;i.has(n)||i.set(n,new Set),i.get(n).add(r)},[e]),unregisterRowElement:(0,Pa.useCallback)((n,r)=>{if(!e)return;let i=t.current,a=i.get(n);a&&(a.delete(r),a.size===0&&i.delete(n))},[e]),onRowEnter:(0,Pa.useCallback)(t=>{e&&n.current!==t&&(n.current&&i(n.current),r(t),n.current=t)},[e,r,i]),onRowLeave:(0,Pa.useCallback)((t,r)=>{e&&(r.relatedTarget?.closest(`[data-row-id="${t}"]`)||(i(t),n.current=null))},[e,i])}}})))()}function La(){return(La=e((()=>{Ia()})))()}var Ra,za;function Ba(){return(Ba=e((()=>{Ra=D(),za=e=>{let t=(0,Ra.useRef)(new Set);(0,Ra.useEffect)(()=>{let n=e.filter(e=>!t.current.has(e));n.length&&(n.forEach(e=>t.current.add(e)),console.warn(`UIKIT. DataGrid: getRowDisabled вернул блокировку без reason для строк: ${n.join(`, `)}`))},[e])}})))()}function Va(){return(Va=e((()=>{Ba()})))()}var Ha,Ua;function Wa(){return(Wa=e((()=>{Ha=D(),ge(),Cn(),xn(),sn(),Ua=({tableId:e,columns:t,isEnabled:n})=>{let r=n&&!e,i=(0,Ha.useMemo)(()=>r?bn(G(t)):``,[r,t]);return r?Sn(he?window.location.pathname:``,i):e??``}})))()}function Ga(){return(Ga=e((()=>{Wa()})))()}var Ka;function qa(){return(qa=e((()=>{Ka=(e,t)=>{if(typeof e==`function`){e(t);return}e&&(e.current=t)}})))()}var Ja,Ya;function Xa(){return(Xa=e((()=>{Ja=D(),qa(),_n(),yn(),Ga(),Ya=({plugins:e,tableId:t,columns:n,headerProps:r})=>{e&&gn(e);let i=vn(e,`resize`),a=Ua({tableId:t,columns:n,isEnabled:!!e?.length}),o=(0,Ja.useRef)(void 0),s=(0,Ja.useRef)(null),c=r?.ref,l=e=>{let t=e?.parentElement;if(t){if(o.current){t.style.setProperty(`--data-grid-columns`,o.current);return}t.style.removeProperty(`--data-grid-columns`)}},u=(0,Ja.useCallback)(e=>{s.current=e,Ka(c,e),l(e)},[c]);return{resizePlugin:i,headAddonProps:{columns:n,tableId:a,headRef:s,onGridColumnsChange:(0,Ja.useCallback)(e=>{o.current=e,l(s.current)},[])},headerProps:{...r,ref:u}}}})))()}function Za(){return(Za=e((()=>{Xa()})))()}function Qa(){return(Qa=e((()=>{La(),Va(),Ga(),Za()})))()}var $a,eo;function to(){return(to=e((()=>{$a=D(),je(),k(),B(),eo=({containerRef:e,isLoading:t,columns:n,rows:r,isNoScrollToTop:i=!1,mobileDisplayVariant:a})=>{let{isMobile:o}=O(),s=(0,$a.useRef)(null),c=(0,$a.useMemo)(()=>n?.filter(e=>!e.isHideOnMobile).length??0,[n]);return(0,$a.useEffect)(()=>{!t&&r&&r.length>0&&s.current===null&&(s.current=r.length)},[r,t]),(0,$a.useLayoutEffect)(()=>{if(!(!o||i)&&t&&e?.current){let t=e.current.closest(`.${Ae.root}`);t&&t.scrollTo({top:0,behavior:`instant`})}},[e,t,o,i]),{isMobile:o,mobileSkeletonProps:{cellsCount:c,rowsCount:s.current??5,mobileDisplayVariant:a}}}})))()}function no(){return(no=e((()=>{to()})))()}var ro,io;function ao(){return(ao=e((()=>{i(),W(),ro=e=>{let t=v.getInstance(),n=e.map(e=>e.pinned??`center`),r=n.indexOf(`right`);r!==-1&&n.slice(r).some(e=>e!==`right`)&&t.logError(`DataGrid`,`Колонки с pinned="right" должны идти непрерывным блоком в конце`);let i=n.lastIndexOf(`left`);i!==-1&&n.slice(0,i+1).some(e=>e!==`left`)&&t.logError(`DataGrid`,`Колонки с pinned="left" должны идти непрерывным блоком в начале`),e.forEach(e=>{U(e)&&e.children.some(e=>e.pinned)&&t.logError(`DataGrid`,`pinned должен быть указан у родительской колонки, а не у дочерних элементов`)})},io=e=>{ro(e);let t=e.reduce((e,t)=>{let n=t.pinned??`center`;return e[n]||(e[n]=[]),e[n].push(t),e},{});return{sections:[{position:`left`,columns:t.left||[]},{position:`center`,columns:t.center||[]},{position:`right`,columns:t.right||[]}]}}})))()}var oo;function so(){return(so=e((()=>{oo=e=>{e.forEach(e=>{let t=0;e.forEach(e=>{e.style.height=``}),e.forEach(e=>{let n=e.offsetHeight;n>t&&(t=n)}),e.forEach(e=>{e.style.height=`${t}px`})})}})))()}var co,lo;function uo(){return(uo=e((()=>{co=D(),k(),B(),La(),ao(),so(),lo=({isLoading:e,columns:t})=>{let n=(0,co.useRef)(null),{isMobile:r}=O(),i=(0,co.useMemo)(()=>t.some(e=>e.pinned),[t]),{rowsMapRef:a,...o}=Fa({hasPinnedColumns:i&&!r}),s=CSS.supports(`container-type`,`scroll-state`),c=(0,co.useCallback)(e=>e?e.scrollWidth>e.clientWidth:!1,[]),{sections:l}=(0,co.useMemo)(()=>io(t),[t]);return(0,co.useLayoutEffect)(()=>{if(e||!i||r||typeof window>`u`)return;let t=new ResizeObserver(()=>{oo(a.current),!s&&(c(n.current)?n.current?.classList.add(z.overflowed):n.current?.classList.remove(z.overflowed))});if(n.current)return t.observe(n.current),()=>{t.disconnect()}},[i,e,r]),{containerRef:n,rowHoverProps:o,sections:l,hasPinnedColumns:i}}})))()}function fo(){return(fo=e((()=>{uo()})))()}function po(){return(po=e((()=>{no(),fo()})))()}var mo;function ho(){return(ho=e((()=>{mo=e=>{let t=e.some(({minWidth:e})=>!!e),n=e.every(({minWidth:e})=>!!e);return t&&!n&&console.error(`UIKIT. DataGrid: Необходимо задать minWidth для всех колонок`),n}})))()}var Y,go;function _o(){return(_o=e((()=>{Y=D(),S(),se(),We(),B(),jn(),Qa(),ln(),rn(),sn(),on(),W(),hn(),po(),ho(),go=({keyId:e,columns:t,rows:n=[],variant:r,tree:i,subrows:a,selectedRows:s=[],isLoading:c,isDisabled:l,getRowDisabled:u,mobileDisplayVariant:d=r===`subrows`?`cards`:`list`,onSelectRow:f,isError:p,onRetry:m,errorMsg:h,isHideSelectAll:g,isHideHeaderIfNoData:_=!1,sorting:v,className:y,onSort:b,maxHeight:x,gridViewMode:ee=`standard`,massActions:S,plugins:C,tableId:w,headerProps:T})=>{let E=oe(),D=!!f,O=c||l,{imagesMap:k}=(0,Y.useContext)(o),A=(0,Y.useRef)(s);(0,Y.useEffect)(()=>{A.current=s},[s]);let j=(0,Y.useRef)([]);(0,Y.useEffect)(()=>{c||(j.current=n)},[n,c]);let M=(0,Y.useCallback)(()=>n.length<=1?t.map(e=>({...e,sortable:!1})):t,[t,n]),N=c?j.current:n,P=!N.length,{containerRef:te,rowHoverProps:F,sections:ne,hasPinnedColumns:re}=lo({isLoading:c,columns:M()}),{isMobile:I,mobileSkeletonProps:ie}=eo({containerRef:te,isLoading:c,columns:G(M()),rows:n,isNoScrollToTop:c&&P,mobileDisplayVariant:d}),ae=(0,Y.useMemo)(()=>{let e=Object.is(r,An.Subrows)?{...a,isInitialExpanded:!0}:i;return I?{...e,expandedLevel:1,initialVisibleChildrenCount:1}:e},[r,a,i,I]),{rowsDisabled:L,idsWithoutReason:se}=(0,Y.useMemo)(()=>mn(N,e,u),[N,e,u]);za(se);let ce=(0,Y.useMemo)(()=>new Set(s.map(t=>t[e])),[s,e]),le=(0,Y.useMemo)(()=>N.filter(t=>!t.options?.isNotSelectable&&!L.get(t[e])),[N,L,e]),ue=(0,Y.useMemo)(()=>an(G(t)),[t]),{resizePlugin:de,headAddonProps:fe,headerProps:pe}=Ya({plugins:C,tableId:w,columns:t,headerProps:T}),me=mo(G(t)),he=(0,Y.useMemo)(()=>le.filter(t=>!ce.has(t[e])).length,[le,ce,e]),ge=t=>{if(!f)return;if(t.target.checked)return f(Ve([...A.current,...le],t=>t[e]));let n=new Set(N.map(t=>t[e]));f(A.current.filter(t=>!n.has(t[e])))},_e=(0,Y.useCallback)(t=>n=>{if(f){if(n.target.checked)return f([...A.current,t]);f(A.current.filter(n=>n[e]!==t[e]))}},[]),ve=t.some(U),ye=ve?`full`:ee,be=_&&P||ve&&P,xe=(0,Y.useMemo)(()=>({isLoading:c&&P||I&&c,isError:p&&P,loadingTitle:`Загрузка данных`,errorState:{imgAlt:`Что-то пошло не так`,errorList:[h||``],imgSrc:k.defaultErrorImgSrc,onRetry:m},isSmoothLoading:!1,loadingPlaceholderClassname:z.loadingPlaceholder}),[c,p,P,h,m,k]),Se=nn({maxHeight:x,gridColumns:ue}),Ce=!!S;return{hasMassActions:Ce,isMassActionsOpen:cn({hasMassActions:Ce,selectedRowsCount:s.length,isMobile:I}),resizePlugin:de,headAddonProps:fe,dataGridClassName:y,containerCssVars:Se,isDataGridDisabled:O,treeRenderConfig:ae,renderRows:N,isAllowHorizontalScroll:me,isHideHead:be,hasPinnedColumns:re,contentStateProps:xe,rowHoverProps:F,isMobile:I,containerRef:te,isNoData:P,gridViewMode:ye,headColumns:M(),isLoading:c,mobileSkeletonProps:ie,hasGroupedColumns:ve,headProps:{rowsCount:le.length,uncheckedRowsCount:he,isSelectable:D,onSelectAllRows:ge,isHideSelectAll:g,sorting:v,onSort:b},headerProps:pe,bodyProps:{isSelectable:D,selectedIds:ce,rowsDisabled:L,getRowDisabled:u,onSelectRow:_e},mobileDisplayVariant:d,sections:ne,isSelfContained:d===`cards`,loaderProps:{isLoading:!E&&c,isVisibleDivider:!!n.length,isDisabled:l}}};try{go.displayName=`useLogic`,go.__docgenInfo={description:``,displayName:`useLogic`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/useLogic/useLogic.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:{value:`[]`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!1,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}function vo(){return(vo=e((()=>{_o()})))()}var yo,X,bo,xo,So,Co;function wo(){return(wo=e((()=>{yo=D(),S(),xe(),s(),f(),C(),Ce(),qr(),B(),Vt(),jn(),Li(),Ki(),ra(),ca(),Oa(),Na(),vo(),X=T(),bo=n(z.pinnedSections,{variants:{isDisabled:{true:z.disabled}}}),xo=n(z.root,{variants:{hasMassActions:{true:z.hasMassActions},isMassActionsOpen:{true:z.massActionsOpen},hasPinnedColumns:{true:z.hasPinnedSections},isAllowHorizontalScroll:{true:z.isAllowHorizontalScroll},gridViewMode:{full:z.gridViewFull,standard:z.gridViewStandard},hasGroupedColumns:{true:z.hasGroupedColumns},mobileDisplayVariant:{cards:z.mobileVariantCards,list:z.mobileVariantList},isSelfContained:{true:g}}}),So=n(z.body,{variants:{isNoData:{true:z.bodyEmpty}}}),Co=e=>{let{dataGridClassName:n,isDataGridDisabled:r,treeRenderConfig:i,headColumns:a,headProps:s,bodyProps:c,loaderProps:l,renderRows:u,isAllowHorizontalScroll:d,isHideHead:f,hasPinnedColumns:p,contentStateProps:m,rowHoverProps:h,containerRef:g,sections:_,isNoData:v,isMobile:y,mobileSkeletonProps:b,isLoading:x,containerCssVars:ee,hasGroupedColumns:S,gridViewMode:C,mobileDisplayVariant:w,isSelfContained:T,isMassActionsOpen:E,hasMassActions:D,resizePlugin:O,headAddonProps:k,headerProps:A}=go(e),{emptySymbol:j}=(0,yo.useContext)(o),{columns:M,selectedRows:N=[],onSelectRow:P,minDisplayRows:te=10,variant:F=An.Tree,footer:ne,massActions:re,noDataPlaceholder:I,subrows:ie,keyId:ae,activeRowId:L,emptyCellValue:oe=j,onRowClick:se,noDataOptions:ce,isTabularNums:le,renderRow:ue,renderLink:de}=e,{moreButtonColumnPosition:fe=1,isVisibleCollapseButton:pe=!0}=ie||{},{isInitialExpanded:me=!1,expandedLevel:he=1,initialVisibleChildrenCount:ge=2}=i||{},_e=r?ja:Aa,ve=(0,yo.useCallback)(()=>x?null:I||(0,X.jsx)(oa,{...ce}),[I,ce,x]),ye={...c,keyId:ae,minDisplayRows:te,rows:u,variant:F,emptyCellValue:oe,isInitialExpanded:me,expandedLevel:he,initialVisibleChildrenCount:ge,moreButtonColumnPosition:fe,isVisibleCollapseButton:pe,noDataPlaceholder:ve(),onRowClick:se,...h,renderRow:ue};return(0,X.jsx)(Rt,{isLoading:x,isTabularNums:le,emptyCellValue:oe,activeRowId:L,keyId:ae,columns:M,onRowClick:se,mobileDisplayVariant:w,renderLink:de,selectedRows:N,onSelectRow:P,isMassActionsOpen:E,children:(0,X.jsxs)(ka,{ref:g,style:ee,className:t(n,xo({isAllowHorizontalScroll:d,hasPinnedColumns:p,gridViewMode:C,hasGroupedColumns:S,mobileDisplayVariant:w,isSelfContained:T,hasMassActions:D,isMassActionsOpen:E})),children:[!p||y?(0,X.jsxs)(_e,{...Se(r),className:z.wrapper,children:[!f&&(0,X.jsx)(Fi,{...s,headerProps:A,columns:a,addon:O&&!y&&(0,X.jsx)(O.HeadAddon,{...k})}),(0,X.jsx)(be,{...m,loadingContent:y&&(0,X.jsx)(ta,{...b}),children:(0,X.jsx)(Gr,{...ye,activeRowId:L,columns:M,className:So({isNoData:v})})})]}):(0,X.jsxs)(be,{...m,children:[O&&(0,X.jsx)(O.HeadAddon,{...k}),(0,X.jsx)(Ea,{sections:_,className:bo({isDisabled:r}),isDisabled:r,headProps:s,bodyProps:ye,isNoData:v})]}),(0,X.jsx)(Wi,{...l}),re&&(0,X.jsx)(Ma,{children:re}),ne&&ne]})})};try{Co.displayName=`DataGrid`,Co.__docgenInfo={description:``,displayName:`DataGrid`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/DataGrid.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Название класса, применяется к корневому компоненту`,name:`className`,required:!1,tags:{},type:{name:`string`}},rows:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Массив данных для таблицы`,name:`rows`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<TData>[]`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:``,name:`columns`,required:!0,tags:{example:`<DataGrid columns={[
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
Задайте, если таблицы на разных страницах должны делить настройки или на странице две таблицы с одинаковыми колонками`,name:`tableId`,required:!1,tags:{example:`<DataGrid tableId="documents" />`},type:{name:`string`}},headerProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/types.ts`,name:`TypeLiteral`}],description:`Props шапки таблицы. Нужны, чтобы привязать к шапке HintPopover или onboarding`,name:`headerProps`,required:!1,tags:{example:`<DataGrid headerProps={{ ref: hintAnchorRef }} />`},type:{name:`DataGridHeaderProps`}}},tags:{}}}catch{}})))()}var To,Eo;function Do(){return(Do=e((()=>{a(),To=`resize`,Eo={handle:r(`data-grid__resize-handle`),handleActive:r(`data-grid__resize-handle_active`)}})))()}var Oo;function ko(){return(ko=e((()=>{W(),Oo=e=>{if(e.some(U))throw Error(`DataGrid: ResizePlugin не поддерживает группировку колонок`);if(e.some(({pinned:e})=>e))throw Error(`DataGrid: ResizePlugin не поддерживает pinned-колонки`);e.forEach((e,t)=>{if(!(U(e)||e.minWidth))throw Error(e.field===void 0?`DataGrid: для ResizePlugin задайте minWidth колонке с индексом ${t}`:`DataGrid: для ResizePlugin задайте minWidth колонке "${String(e.field)}"`)})}})))()}var Ao;function jo(){return(jo=e((()=>{Ao=e=>{let t=e.reduce((e,t)=>e+t,0);return t===0?e.map(()=>1/e.length):e.map(e=>e/t)}})))()}var Mo;function No(){return(No=e((()=>{Mo=e=>{let t=0;return e.slice(0,-1).map(e=>(t+=e,t))}})))()}var Po;function Fo(){return(Fo=e((()=>{Po=e=>e.map(({minWidth:e})=>e?Number.parseFloat(e):0)})))()}var Io;function Lo(){return(Lo=e((()=>{Io=({widths:e,minWidths:t})=>{let n=Math.min(...e);return e.map((e,r)=>`minmax(${t[r]}px, ${e/n}fr)`).join(` `)}})))()}var Ro;function zo(){return(zo=e((()=>{Re(),Ro=(e,t)=>ze(`DataGrid`,`${e}:${t}`)})))()}var Bo;function Vo(){return(Vo=e((()=>{Bo=e=>e.split(` `).filter(Boolean).map(e=>Number.parseFloat(e))})))()}var Ho,Uo;function Wo(){return(Wo=e((()=>{Ho=e=>{try{return JSON.parse(e)}catch{return}},Uo=({value:e,signature:t,columnsCount:n})=>{if(e===null)return;let r=Ho(e);if(r?.signature!==t)return;let{fractions:i}=r;return Array.isArray(i)&&i.length===n&&i.every(e=>Number.isFinite(e)&&e>0)?i:void 0}})))()}var Go;function Ko(){return(Ko=e((()=>{Go=({widths:e,minWidths:t,index:n,delta:r})=>{let i=n,a=n+1,o=Math.min(0,t[i]-e[i]),s=Math.max(0,e[a]-t[a]),c=Math.min(Math.max(r,o),s);return e.map((e,t)=>t===i?e+c:t===a?e-c:e)}})))()}var qo,Jo;function Yo(){return(Yo=e((()=>{qo=D(),ve(),Do(),zo(),Wo(),Jo=({tableId:e,signature:t,columnsCount:n})=>{let[r,i]=_e(Ro(e,To),void 0,{raw:!0});return{savedFractions:(0,qo.useMemo)(()=>Uo({value:r??null,signature:t,columnsCount:n}),[r,t,n]),saveFractions:e=>{i(JSON.stringify({signature:t,fractions:e}))}}}})))()}function Xo(){return(Xo=e((()=>{Yo()})))()}var Zo,Qo;function $o(){return($o=e((()=>{Zo=D(),M(),Vo(),Qo=e=>{let[t,n]=(0,Zo.useState)([]),r=(0,Zo.useCallback)(()=>e.current?Bo(getComputedStyle(e.current).gridTemplateColumns):[],[e]),i=(0,Zo.useCallback)(()=>{let e=r();n(t=>j(t,e)?t:e)},[r]);return(0,Zo.useLayoutEffect)(i),(0,Zo.useEffect)(()=>{if(!e.current)return;let t=new ResizeObserver(i);return t.observe(e.current),()=>t.disconnect()},[e,i]),{widths:t,measureWidths:r,updateWidths:i}}})))()}function es(){return(es=e((()=>{$o()})))()}function ts(){return(ts=e((()=>{Xo(),es()})))()}var Z,ns;function rs(){return(rs=e((()=>{Z=D(),xn(),sn(),jo(),No(),Fo(),Lo(),Ko(),ts(),ns=({columns:e,tableId:t,headRef:n,onGridColumnsChange:r})=>{let i=(0,Z.useMemo)(()=>G(e),[e]),a=(0,Z.useMemo)(()=>Po(i),[i]),o=(0,Z.useMemo)(()=>bn(i),[i]),{savedFractions:s,saveFractions:c}=Jo({tableId:t,signature:o,columnsCount:i.length}),{widths:l,measureWidths:u,updateWidths:d}=Qo(n),[f,p]=(0,Z.useState)(),[m,h]=(0,Z.useState)(),g=(0,Z.useRef)(void 0),_=(0,Z.useRef)(void 0),v=e=>r(Io({widths:e,minWidths:a})),y=()=>{s?v(s):r(void 0),d()};(0,Z.useLayoutEffect)(y,[s]),(0,Z.useLayoutEffect)(()=>()=>{_.current&&cancelAnimationFrame(_.current),r(void 0)},[]);let b=()=>{_.current&&=(cancelAnimationFrame(_.current),void 0)},x=()=>{b(),g.current=void 0,p(void 0),h(void 0)},ee=e=>t=>{t.button===0&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId),g.current={index:e,startX:t.clientX,startWidths:u()},p(e))},S=e=>{let t=g.current;if(t){if(e.buttons===0){C();return}t.latestWidths=Go({widths:t.startWidths,minWidths:a,index:t.index,delta:e.clientX-t.startX}),_.current||=requestAnimationFrame(()=>{_.current=void 0,g.current?.latestWidths&&(v(g.current.latestWidths),h(g.current.latestWidths))})}},C=()=>{let e=g.current?.latestWidths;if(x(),!e)return;let t=Ao(e);v(t),d(),c(t)},w=()=>{x(),y()},T=(0,Z.useRef)({handlePointerMove:S,handlePointerUp:C,handlePointerCancel:w});T.current={handlePointerMove:S,handlePointerUp:C,handlePointerCancel:w};let E=f!==void 0;return(0,Z.useEffect)(()=>{if(!E)return;let e=e=>T.current.handlePointerMove(e),t=()=>T.current.handlePointerUp(),n=()=>T.current.handlePointerCancel();return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,n),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,n)}},[E]),{handles:Mo(m??l).map((e,t)=>({offset:e,isActive:f===t,onPointerDown:ee(t)}))}}})))()}function is(){return(is=e((()=>{rs()})))()}function as(){return(as=e((()=>{is()})))()}var os,ss;function cs(){return(cs=e((()=>{E(),B(),Do(),os=8,ss=y.div`
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
  left: calc(var(--offset) - ${os/2}px);

  width: ${os}px;

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

  &.${Eo.handleActive}::after {
    height: 100%;

    background-color: ${({theme:e})=>e.palette.primary.main};
  }

  /* В таблице с сеткой полоской служит линия сетки в шапке: отдельная полоска не рисуется, при drag линия становится синей */
  .${z.gridViewFull} & {
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

    &.${Eo.handleActive}::after {
      background-color: ${({theme:e})=>e.palette.primary.main};
    }
  }
`})))()}var ls,us,ds;function fs(){return(fs=e((()=>{C(),Do(),as(),ko(),cs(),ls=T(),us=n(Eo.handle,{variants:{isActive:{true:Eo.handleActive}}}),ds=e=>{Oo(e.columns);let{handles:t}=ns(e);return(0,ls.jsx)(ls.Fragment,{children:t.map(({offset:e,isActive:t,...n},r)=>(0,ls.jsx)(ss,{role:`separator`,"aria-orientation":`vertical`,className:us({isActive:t}),style:{"--offset":`${e}px`},...n},r))})};try{ds.displayName=`ResizeHeadAddon`,ds.__docgenInfo={description:`Полоски drag и логика изменения ширины колонок в шапке таблицы`,displayName:`ResizeHeadAddon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/ResizeHeadAddon/ResizeHeadAddon.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Колонки таблицы`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<TData>[]`}},tableId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Id таблицы: заданный продуктом или сформированный автоматически из pathname и набора колонок`,name:`tableId`,required:!0,tags:{},type:{name:`string`}},headRef:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:`Ref шапки таблицы, нужен для измерения ширины колонок`,name:`headRef`,required:!0,tags:{},type:{name:`RefObject<HTMLElement>`}},onGridColumnsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/plugins/resize/types.ts`,name:`TypeLiteral`}],description:"Применяет `grid-template-columns` шапки, строк и вложенных строк.\nundefined возвращает таблице ее собственный `grid-template-columns`",name:`onGridColumnsChange`,required:!0,tags:{},type:{name:`(gridColumns: string) => void`}}},tags:{}}}catch{}})))()}function ps(){return(ps=e((()=>{fs()})))()}var ms;function hs(){return(hs=e((()=>{ps(),ms={id:`resize`,HeadAddon:ds}})))()}function gs(){return(gs=e((()=>{hs()})))()}function _s(){return(_s=e((()=>{gs()})))()}var Q;function vs(){return(vs=e((()=>{a(),Q={root:r(`data-grid-row-base`),contentWrapper:r(`data-grid-row-base__content-wrapper`),hovered:r(`data-grid-row-base_hovered`),active:r(`data-grid-row-base_active`),mobileVariantCards:r(`data-grid-row-base_mobile-variant-cards`),mobileVariantList:r(`data-grid-row-base_mobile-variant-list`)}})))()}var ys;function bs(){return(bs=e((()=>{a(),ys={root:r(`data-grid-grouped-column-label`),hidden:r(`data-grid-grouped-column-label_hidden`)}})))()}var xs;function Ss(){return(Ss=e((()=>{E(),d(),bs(),xs=y(m)`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: block;

    margin-top: ${({theme:e})=>e.spacing(3)};

    &.${ys.hidden} {
      display: none;
    }
  }
`})))()}var Cs,ws,Ts;function Es(){return(Es=e((()=>{C(),Zt(),bs(),Ss(),Cs=T(),ws=n(ys.root,{variants:{hidden:{true:ys.hidden}}}),Ts=({cell:e,cellId:t,isFirstCell:n,row:r,emptyCellValue:i,isDisabled:a,startAdornment:o,href:s,target:c})=>{let{label:l,children:u,hideTitleOnMobile:d,isHideOnMobile:f}=e;return(0,Cs.jsxs)(Cs.Fragment,{children:[(0,Cs.jsx)(xs,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:ws({hidden:d||f}),children:l}),u.map((e,l)=>{let u=`${t}-${l}`;return(0,Cs.jsx)(Yt,{row:r,cell:e,isHideOnMobile:f,emptyCellValue:i,isDisabled:a,startAdornment:n&&l===0&&o,isHidePersonalData:e.isHidePersonalData,className:R.grouped,href:s,target:c},u)})]})};try{Ts.displayName=`GroupCell`,Ts.__docgenInfo={description:``,displayName:`GroupCell`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/GroupCell.tsx`,methods:[],props:{cell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cell`,required:!0,tags:{},type:{name:`DataGridGroupColumn<Record<string, unknown>>`}},cellId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`cellId`,required:!0,tags:{},type:{name:`string`}},isFirstCell:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isFirstCell`,required:!1,tags:{},type:{name:`boolean`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},startAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`startAdornment`,required:!1,tags:{},type:{name:`ReactNode`}},href:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/GroupCell/types.ts`,name:`TypeLiteral`}],description:``,name:`target`,required:!1,tags:{},type:{name:`HTMLAttributeAnchorTarget`}}},tags:{}}}catch{}})))()}function Ds(){return(Ds=e((()=>{Es()})))()}var Os,ks,As,js;function Ms(){return(Ms=e((()=>{s(),E(),B(),vs(),Os=y.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;

  width: ${32}px;
`,ks=y.li`
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
`,As=y.div`
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
`,js=y.div`
    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      padding: ${({theme:e})=>e.spacing(5,4)};
    }
`})))()}var Ns,Ps;function Fs(){return(Fs=e((()=>{Ns=D(),pt(),lr(),dn(),vs(),Ps=({className:e,row:t,keyId:n,onRowClick:r,columns:i,sectionOffset:a,customContent:o,renderStartAdornment:s,isSelected:c,hasBlockingAction:l,blockingActionReason:u,rowDisabled:d,onSelectRow:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,activeRowId:_,emptyCellValue:v,isSelectable:y,rowId:b,mobileDisplayVariant:x,...ee})=>{let[S,C]=(0,Ns.useState)(!1),w=(0,Ns.useRef)(null),{isDrawerOpen:T,handleOpenDrawer:E,handleCloseDrawer:D}=sr(),{options:O}=t,{style:k,...A}=ee||{},{href:j,isNotSelectable:M,target:N}=O||{},{isDisabled:P,isDisabledLastCell:te,disabledReason:F,isCheckboxDisabled:ne,checkboxDisabledReason:re}=un({rowDisabled:d,hasBlockingAction:l,blockingActionReason:u,isDisabledLastCellOption:O?.isDisabledLastCell}),I=e=>{e.target?.getAttribute(`data-row-disable`)===`true`&&C(!0)},ie=()=>C(!1),ae={...k||{}},L=!!(!P&&(r||j)),oe=_===b;return{handleRowClick:()=>{if(P){E();return}if(j)return ft(j,N);r?.(t)},tooltipProps:{open:S,title:P?F:void 0,onOpen:I,onClose:ie,followCursor:!0,arrow:!1},checkboxProps:{checked:c,disabled:ne,disabledReason:re,onChange:f(t)},drawerProps:{open:T,onClose:D,title:`Заблокировано`},drawerContent:F,rowBaseVars:ae,isHovered:L,isActive:oe,columns:i,emptyCellValue:v,rowRef:e=>{e?(w.current=e,h?.(b,e)):w.current&&=(g?.(b,w.current),null)},href:j,target:N,onRowEnter:p,onRowLeave:m,rowId:b,row:t,isDisabled:P,sectionOffset:a,customContent:o,isDisabledLastCell:te,renderStartAdornment:s,isSelectable:y,isNotSelectable:M,dataGridInfiniteItemProps:A,mobileDisplayVariant:x,className:e}}})))()}function Is(){return(Is=e((()=>{Fs()})))()}var Ls,$,Rs,zs,Bs;function Vs(){return(Vs=e((()=>{Ls=D(),re(),ae(),f(),C(),Ce(),Zt(),lt(),vr(),tn(),W(),vs(),Ds(),Ms(),Is(),$=T(),Rs=n(Q.contentWrapper,{variants:{isHovered:{true:Q.hovered},isActive:{true:Q.active}}}),zs=n(Q.root,{variants:{mobileDisplayVariant:{cards:Q.mobileVariantCards,list:Q.mobileVariantList}}}),Bs=(0,Ls.memo)(e=>{let{className:n,tooltipProps:r,rowBaseVars:i,isHovered:a,isActive:o,drawerProps:s,emptyCellValue:c,rowRef:l,onRowEnter:u,onRowLeave:d,rowId:f,row:p,isDisabled:m,sectionOffset:h,customContent:g,isDisabledLastCell:_,renderStartAdornment:v,checkboxProps:y,href:b,target:x,isNotSelectable:ee,isSelectable:S,columns:C,dataGridInfiniteItemProps:w,handleRowClick:T,drawerContent:E,mobileDisplayVariant:D}=Ps(e),O=()=>{let e=v?.(!0),t=S&&!ee;return!e&&!t?null:(0,$.jsxs)($.Fragment,{children:[e,t&&(0,$.jsx)(Os,{...Se(m),onClick:e=>e.stopPropagation(),className:V.checkbox,children:(0,$.jsx)($t,{...y})})]})},k=(0,Ls.useCallback)(()=>{let e=C.length-1,t=_?void 0:[e];return C?.map((e,n)=>{let r=`row-base-${n}`,i=(h??0)+n,a=i===0,o=_r(m,t,i);return U(e)?(0,$.jsx)(Ts,{cell:e,cellId:r,isFirstCell:a,row:p,emptyCellValue:c,isDisabled:o,startAdornment:a&&O(),href:b,target:x},r):(0,$.jsx)(Yt,{row:p,cell:e,emptyCellValue:c,startAdornment:a&&O(),isDisabled:o,isHidePersonalData:e.isHidePersonalData,href:b,target:x},r)})},[p,C,m,_,h,v,y.checked,y.disabled,y.disabledReason]);return(0,$.jsxs)(ks,{className:t(n,zs({mobileDisplayVariant:D})),style:i,...w,children:[(0,$.jsx)(N,{...r,children:(0,$.jsx)(As,{ref:l,onPointerEnter:()=>u?.(f),onPointerLeave:e=>d?.(f,e.nativeEvent),className:Rs({isHovered:a,isActive:o}),[ot]:m,onClick:T,children:k()})}),g,(0,$.jsx)(P,{...s,children:(0,$.jsx)(js,{children:E})})]},`row-base-${f}`)});try{Bs.displayName=`RowBase`,Bs.__docgenInfo={description:``,displayName:`RowBase`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/RowBase.tsx`,methods:[],props:{columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Массив колонок`,name:`columns`,required:!0,tags:{},type:{name:`DataGridColumns<Record<string, unknown>>[]`}},row:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Данные строки для отображения`,name:`row`,required:!0,tags:{},type:{name:`DataGridRowWithOptions<Record<string, unknown>>`}},renderStartAdornment:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Функция для рендера стартового элемента`,name:`renderStartAdornment`,required:!1,tags:{},type:{name:`(isFirstCell: boolean) => ReactNode`}},sectionOffset:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Смещение секции для правильного расчета глобального индекса`,name:`sectionOffset`,required:!1,tags:{},type:{name:`number`}},rowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`rowId`,required:!0,tags:{},type:{name:`string`}},customContent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Кастомный контент после ячеек`,name:`customContent`,required:!1,tags:{},type:{name:`ReactNode`}},isSelectable:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбираемой`,name:`isSelectable`,required:!1,tags:{},type:{name:`boolean`}},keyId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Уникальный идентификатор строки`,name:`keyId`,required:!0,tags:{},type:{name:`unknown`}},onRowClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик клика строки таблицы`,name:`onRowClick`,required:!1,tags:{},type:{name:`(row: Record<string, unknown>) => void`}},isSelected:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Является ли строка выбранной`,name:`isSelected`,required:!1,tags:{},type:{name:`boolean`}},hasBlockingAction:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Если true, в строке выполняется блокирующее действие DataGridActionCell`,name:`hasBlockingAction`,required:!1,tags:{},type:{name:`boolean`}},blockingActionReason:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Причина блокировки от блокирующего действия`,name:`blockingActionReason`,required:!1,tags:{},type:{name:`string`}},rowDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Итоговая блокировка строки, рассчитанная resolveRowDisabled`,name:`rowDisabled`,required:!1,tags:{},type:{name:`DataGridRowDisabled`}},onSelectRow:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик выбора строки`,name:`onSelectRow`,required:!0,tags:{},type:{name:`(row: Record<string, unknown>) => (event: ChangeEvent<HTMLInputElement, Element>) => void`}},onRowEnter:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик наведения на строку`,name:`onRowEnter`,required:!1,tags:{},type:{name:`(rowId: string) => void`}},onRowLeave:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Обработчик ухода со строки`,name:`onRowLeave`,required:!1,tags:{},type:{name:`(rowId: string, event: PointerEvent) => void`}},registerRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Регистрация элемента строки`,name:`registerRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},unregisterRowElement:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Удаление регистрации элемента строки`,name:`unregisterRowElement`,required:!1,tags:{},type:{name:`(rowId: string, el: HTMLElement) => void`}},activeRowId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`ID активной строки`,name:`activeRowId`,required:!1,tags:{},type:{name:`string`}},emptyCellValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Значение для пустой ячейки`,name:`emptyCellValue`,required:!1,tags:{},type:{name:`ReactNode`}},mobileDisplayVariant:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Вариант отображения на мобильных устройствах`,name:`mobileDisplayVariant`,required:!1,tags:{},type:{name:`enum`,raw:`"list" | "cards"`,value:[{value:`"list"`},{value:`"cards"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/RowBase/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый для корневого элемента`,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function Hs(){return(Hs=e((()=>{Vs(),vs()})))()}function Us(){return(Us=e((()=>{wo(),_s(),B(),ra(),Hs(),Vt(),Ft()})))()}export{rn as $,Mr as A,An as B,ta as C,Ii as D,Fi as E,ar as F,ln as G,hn as H,nr as I,W as J,G as K,rr as L,Dr as M,Tr as N,Nr as O,Er as P,nn as Q,Qn as R,Na as S,Li as T,mn as U,jn as V,cn as W,an as X,U as Y,on as Z,Ya as _,Q as a,kt as at,ka as b,ms as c,yt as ct,wo as d,H as dt,Vt as et,po as f,lt as ft,Xa as g,Ve as gt,Qa as h,We as ht,Vs as i,Ot as it,Or as j,jr as k,hs as l,ht as lt,eo as m,B as mt,Hs as n,zt as nt,vs as o,Et as ot,to as p,z as pt,sn as q,Bs as r,Ft as rt,_s as s,vt as st,Us as t,Rt as tt,Co as u,gt as ut,Ba as v,na as w,Ma as x,za as y,$n as z};