import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,On as r,Va as i,Xt as a,cn as o,dn as s,en as c,it as l,ji as u,ln as d,rt as f,wn as p,xa as m,yn as h}from"./preview-BQGJfZhY.js";import{$ as g,A as _,N as v,Q as y,Y as b,a as x,it as S,n as C,r as w,st as T}from"./DataGrid-CVlNew0W.js";import{t as E}from"./Collapse-Bc342yvi.js";import{t as D}from"./Collapse-CdEF4Ank.js";import{n as O,t as k}from"./ChevronROutlineMd-BkfY2-5e.js";var A,j;function M(){return(M=e((()=>{r(),A=`collapsible-row`,j={root:n(`data-grid__collapsible-row`),cellsWrapper:n(`data-grid__collapsible-row_cells-wrapper`),active:n(`data-grid__collapsible-row_active`),collapseContainer:n(`data-grid__collapsible-row_collapse-container`),chevronIcon:n(`data-grid__collapsible-row_chevron-icon`),chevronIconActive:n(`data-grid__collapsible-row__chevron-icon_active`),collapseButton:n(`data-grid__collapsible-row__collapse-button`),collapsibleContent:n(`data-grid__collapsible-row__collapsible-content`)}})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{k(),o(),a(),T(),C(),f(),h(),M(),N=u.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing(4)};
`,P=u.div`
  padding: ${({theme:e})=>e.spacing(2)};

  background-color: ${({theme:e})=>e.palette.grey[100]};
  border-radius: ${({theme:e})=>e.shape.large};
`,F=u.div`
  padding: ${({theme:e})=>e.spacing(0,3)};

  background-color: ${({theme:e})=>e.palette.background.paper};
  border-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,I=u.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;

    & .${s.root} {
      justify-content: flex-start;

      width: 100%;
    }
  }
`,L=u(l)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${c} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,R=u.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,z=u(O)`
  transform: rotateZ(0deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};

  &.${j.chevronIconActive} {
    transform: rotateZ(90deg);
  }
`,B=u(w)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &.${x.mobileVariantCards} {
      padding: 0;

      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};

      & .${x.contentWrapper} {
        padding: ${({theme:e})=>e.spacing(5,4,4)};

        background-color: ${({theme:e})=>e.palette.background.default};
        border-radius: ${({theme:e})=>e.shape.medium};
        outline: 1px solid ${({theme:e})=>e.palette.grey[300]};
      }

      & .${j.collapseButton} {
        padding-left: ${({theme:e})=>e.spacing(4)};
      }

      & .${j.collapsibleContent} {
        background-color: transparent;
      }
    }
  }
`})))()}var H,U;function W(){return(W=e((()=>{H=i(),b(),y(),_(),M(),U=({initialOpen:e,onOpen:t,onClose:n})=>{let{keyId:r,columns:i,gridColumns:a,activeRowId:o,emptyCellValue:s,onRowClick:c,mobileDisplayVariant:l}=(0,H.useContext)(S),{row:u,onSelectRow:d,hasBlockingAction:f,blockingActionReason:p,onRowEnter:m,onRowLeave:h,registerRowElement:_,unregisterRowElement:y,isSelectable:b,itemProps:x,isSelected:C,rowDisabled:w}=(0,H.useContext)(v),T=u[r],{getItem:E,setItem:D}=(0,H.useContext)(g),O=`${A}:${T}`,k=E(O),[j,M]=(0,H.useState)(k===void 0?e:k),N=(0,H.useCallback)(e=>{e?.stopPropagation(),e?.preventDefault(),j?(M(!1),D(O,!1),n?.()):(M(!0),D(O,!0),t?.())},[j,t,n,O,D]);return{handleToggle:N,handleRowClick:(0,H.useCallback)(e=>{if(c){c(e);return}N()},[c,N]),isOpen:j,itemProps:x,rowBaseProps:{isSelected:C,row:u,keyId:r,columns:i,rowId:T,hasBlockingAction:f,blockingActionReason:p,rowDisabled:w,onSelectRow:d,onRowEnter:m,onRowLeave:h,registerRowElement:_,unregisterRowElement:y,isSelectable:b,emptyCellValue:s,gridColumns:a,activeRowId:o,mobileDisplayVariant:l}}}})))()}function G(){return(G=e((()=>{W()})))()}var K,q,J,Y;function X(){return(X=e((()=>{K=i(),o(),D(),p(),M(),V(),G(),q=m(),J=t(j.chevronIcon,{variants:{isActive:{true:j.chevronIconActive}}}),Y=({children:e,initialOpen:t,onOpen:n,onClose:r})=>{let{handleToggle:i,isOpen:a,rowBaseProps:o,itemProps:s,handleRowClick:c}=U({initialOpen:t,onOpen:n,onClose:r}),l=(0,K.useCallback)(e=>e?(0,q.jsx)(R,{children:(0,q.jsx)(L,{variant:`text`,onClick:i,title:a?`Свернуть`:`Развернуть`,children:(0,q.jsx)(z,{className:J({isActive:a})})})}):null,[a,i]);return(0,q.jsx)(B,{...o,renderStartAdornment:l,onRowClick:c,customContent:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(I,{children:(0,q.jsxs)(d,{variant:`link`,onClick:i,className:j.collapseButton,children:[(0,q.jsx)(z,{className:J({isActive:a})}),a?`Свернуть`:`Развернуть`]})}),(0,q.jsx)(E,{in:a,unmountOnExit:!0,children:(0,q.jsx)(N,{className:j.collapseContainer,children:(0,q.jsx)(P,{children:(0,q.jsx)(F,{className:j.collapsibleContent,children:e})})})})]}),...s})};try{Y.displayName=`DataGridCollapsibleRow`,Y.__docgenInfo={description:``,displayName:`DataGridCollapsibleRow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/DataGridCollapsibleRow.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Контент, который будет отображаться при развернутом состоянии`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},onOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Функция, которая будет вызываться при развернутом состоянии`,name:`onOpen`,required:!1,tags:{},type:{name:`() => void`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Функция, которая будет вызываться при свернутом состоянии`,name:`onClose`,required:!1,tags:{},type:{name:`() => void`}},initialOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Флаг начального раскрытия строки при монтировании`,name:`initialOpen`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Z(){return(Z=e((()=>{X()})))()}export{Y as n,X as r,Z as t};