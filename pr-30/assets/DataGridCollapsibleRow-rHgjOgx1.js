import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Cn as t,Dn as n,On as r,Xt as i,cn as a,dn as o,en as s,it as c,ji as l,ln as u,rt as d,wn as f,ya as p,yn as m,za as h}from"./preview-CLkCEehX.js";import{F as g,R as _,a as v,et as y,ft as b,it as x,lt as S,n as C,r as w,rt as T}from"./DataGrid-xtbUZYsh.js";import{t as E}from"./Collapse-p5gvwaxZ.js";import{t as D}from"./Collapse-BpHQ7FuK.js";import{n as O,t as k}from"./ChevronROutlineMd-BI-ynC5s.js";var A,j;function M(){return(M=e((()=>{r(),A=`collapsible-row`,j={root:n(`data-grid__collapsible-row`),cellsWrapper:n(`data-grid__collapsible-row_cells-wrapper`),active:n(`data-grid__collapsible-row_active`),collapseContainer:n(`data-grid__collapsible-row_collapse-container`),chevronIcon:n(`data-grid__collapsible-row_chevron-icon`),chevronIconActive:n(`data-grid__collapsible-row__chevron-icon_active`),collapseButton:n(`data-grid__collapsible-row__collapse-button`),collapsibleContent:n(`data-grid__collapsible-row__collapsible-content`)}})))()}var N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{k(),a(),i(),b(),C(),d(),m(),M(),N=l.div`
  width: 100%;
  margin-bottom: ${({theme:e})=>e.spacing(4)};
`,P=l.div`
  padding: ${({theme:e})=>e.spacing(2)};

  background-color: ${({theme:e})=>e.palette.grey[100]};
  border-radius: ${({theme:e})=>e.shape.large};
`,F=l.div`
  padding: ${({theme:e})=>e.spacing(0,3)};

  background-color: ${({theme:e})=>e.palette.background.paper};
  border-radius: ${({theme:e})=>e.shape.medium};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,I=l.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;

    & .${o.root} {
      justify-content: flex-start;

      width: 100%;
    }
  }
`,L=l(c)`
  width: 24px;
  height: 24px;

  color: inherit;

  ${s} {
    &:hover {
      background-color: ${({theme:e})=>e.palette.grey[300]};
    }
  }
`,R=l.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${32}px;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`,z=l(O)`
  transform: rotateZ(0deg);

  transition: ${({theme:e})=>e.transitions.create(`transform`,{easing:e.transitions.easing.sharp,duration:e.transitions.duration.short})};

  &.${j.chevronIconActive} {
    transform: rotateZ(90deg);
  }
`,B=l(w)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &.${v.mobileVariantCards} {
      padding: 0;

      background-color: ${({theme:e})=>e.palette.grey[100]};
      border-bottom: 1px solid ${({theme:e})=>e.palette.grey[300]};

      & .${v.contentWrapper} {
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
`})))()}var H,U;function W(){return(W=e((()=>{H=h(),y(),T(),g(),M(),U=({initialOpen:e,onOpen:t,onClose:n})=>{let{keyId:r,columns:i,activeRowId:a,emptyCellValue:o,onRowClick:s,mobileDisplayVariant:c}=(0,H.useContext)(S),{row:l,onSelectRow:u,hasBlockingAction:d,blockingActionReason:f,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:v,itemProps:y,isSelected:b,rowDisabled:C}=(0,H.useContext)(_),w=l[r],{getItem:T,setItem:E}=(0,H.useContext)(x),D=`${A}:${w}`,O=T(D),[k,j]=(0,H.useState)(O===void 0?e:O),M=(0,H.useCallback)(e=>{e?.stopPropagation(),e?.preventDefault(),k?(j(!1),E(D,!1),n?.()):(j(!0),E(D,!0),t?.())},[k,t,n,D,E]);return{handleToggle:M,handleRowClick:(0,H.useCallback)(e=>{if(s){s(e);return}M()},[s,M]),isOpen:k,itemProps:y,rowBaseProps:{isSelected:b,row:l,keyId:r,columns:i,rowId:w,hasBlockingAction:d,blockingActionReason:f,rowDisabled:C,onSelectRow:u,onRowEnter:p,onRowLeave:m,registerRowElement:h,unregisterRowElement:g,isSelectable:v,emptyCellValue:o,activeRowId:a,mobileDisplayVariant:c}}}})))()}function G(){return(G=e((()=>{W()})))()}var K,q,J,Y;function X(){return(X=e((()=>{K=h(),a(),D(),f(),M(),V(),G(),q=p(),J=t(j.chevronIcon,{variants:{isActive:{true:j.chevronIconActive}}}),Y=({children:e,initialOpen:t,onOpen:n,onClose:r})=>{let{handleToggle:i,isOpen:a,rowBaseProps:o,itemProps:s,handleRowClick:c}=U({initialOpen:t,onOpen:n,onClose:r}),l=(0,K.useCallback)(e=>e?(0,q.jsx)(R,{children:(0,q.jsx)(L,{variant:`text`,onClick:i,title:a?`Свернуть`:`Развернуть`,children:(0,q.jsx)(z,{className:J({isActive:a})})})}):null,[a,i]);return(0,q.jsx)(B,{...o,renderStartAdornment:l,onRowClick:c,customContent:(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(I,{children:(0,q.jsxs)(u,{variant:`link`,onClick:i,className:j.collapseButton,children:[(0,q.jsx)(z,{className:J({isActive:a})}),a?`Свернуть`:`Развернуть`]})}),(0,q.jsx)(E,{in:a,unmountOnExit:!0,children:(0,q.jsx)(N,{className:j.collapseContainer,children:(0,q.jsx)(P,{children:(0,q.jsx)(F,{className:j.collapsibleContent,children:e})})})})]}),...s})};try{Y.displayName=`DataGridCollapsibleRow`,Y.__docgenInfo={description:``,displayName:`DataGridCollapsibleRow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/DataGridCollapsibleRow.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Контент, который будет отображаться при развернутом состоянии`,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},onOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Функция, которая будет вызываться при развернутом состоянии`,name:`onOpen`,required:!1,tags:{},type:{name:`() => void`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Функция, которая будет вызываться при свернутом состоянии`,name:`onClose`,required:!1,tags:{},type:{name:`() => void`}},initialOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGridCollapsibleRow/types.ts`,name:`TypeLiteral`}],description:`Флаг начального раскрытия строки при монтировании`,name:`initialOpen`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Z(){return(Z=e((()=>{X()})))()}export{Y as n,X as r,Z as t};