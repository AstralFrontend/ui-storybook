import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{An as t,Dn as n,On as r,cn as i,dt as a,ft as o,ji as s,kn as c,ln as l,xa as u,yn as d}from"./preview-OXlkwWcL.js";import{t as f}from"./Popover-BpNacKyy.js";import{t as p}from"./Popover-s-jqOigG.js";import{r as m,t as h}from"./usePopover-BlxS9erw.js";var g,_,v,y;function b(){return(b=e((()=>{r(),g={vertical:`bottom`,horizontal:`right`},_={vertical:`top`,horizontal:`right`},v=`Подтверждение действия`,y={actionComponent:n(`confirm-action__action-component`)}})))()}var x,S,C;function w(){return(w=e((()=>{d(),a(),x=s.div`
  max-width: 380px;
  padding: ${({theme:e})=>e.spacing(4)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    max-width: unset;
    padding: 0;
  }
`,S=s(o)`
  margin-bottom: ${({theme:e})=>e.spacing(3)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin: 0;
    padding: ${({theme:e})=>e.spacing(5,4)};
  }
`,C=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(3)};
  justify-content: end;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column-reverse;
    gap: ${({theme:e})=>e.spacing(2)};

    padding: ${({theme:e})=>e.spacing(4)};
  }
`})))()}var T;function E(){return(E=e((()=>{i(),h(),b(),T=({confirmButtonProps:e,onConfirm:n})=>{let{isOpen:r,anchor:i,actions:a}=m(),{isAccented:o}=e||{},s=o?t.Light:t.Contained,l=o?c.Error:c.Primary;return{actionComponentProps:{onClick:a.open,className:y.actionComponent,selected:r,"aria-selected":r},popoverProps:{open:r,anchorEl:i,onClose:a.close},cancelButtonProps:{onClick:a.close},confirmButtonProps:{variant:s,color:l,onClick:()=>{n(),a.close()}}}}})))()}function D(){return(D=e((()=>{E()})))()}var O,k;function A(){return(A=e((()=>{i(),p(),b(),w(),D(),O=u(),k=e=>{let{actionComponentProps:t,popoverProps:n,cancelButtonProps:r,confirmButtonProps:i}=T(e),{text:a,confirmButtonProps:o,popoverProps:s,actionComponent:c}=e,{text:u=`Подтвердить`}=o||{},{anchorOrigin:d=g,transformOrigin:p=_,title:m=v}=s||{};return(0,O.jsxs)(O.Fragment,{children:[c(t),(0,O.jsx)(f,{anchorOrigin:d,transformOrigin:p,title:m,...n,children:(0,O.jsxs)(x,{children:[a&&(0,O.jsx)(S,{children:a}),(0,O.jsxs)(C,{children:[(0,O.jsx)(l,{variant:`text`,...r,children:`Отмена`}),(0,O.jsx)(l,{...i,children:u})]})]})})]})};try{k.displayName=`ConfirmAction`,k.__docgenInfo={description:``,displayName:`ConfirmAction`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ConfirmAction/ConfirmAction.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/types.ts`,name:`TypeLiteral`}],description:`Поясняющий текст`,name:`text`,required:!1,tags:{},type:{name:`string`}},confirmButtonProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/types.ts`,name:`TypeLiteral`}],description:`Параметры кнопки подтверждения действия`,name:`confirmButtonProps`,required:!1,tags:{},type:{name:`{ text?: string; isAccented?: boolean; }`}},popoverProps:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/types.ts`,name:`TypeLiteral`}],description:`Параметры всплывающего окна`,name:`popoverProps`,required:!1,tags:{},type:{name:`Pick<PopoverProps, "title" | "anchorOrigin" | "transformOrigin">`}},actionComponent:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/types.ts`,name:`TypeLiteral`}],description:`Кнопка, действие которой необходимо подтвердить`,name:`actionComponent`,required:!0,tags:{},type:{name:`(params: ActionComponentParams) => ReactNode`}},onConfirm:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/ConfirmAction/types.ts`,name:`TypeLiteral`}],description:`Целевое действие, которое должно произойти после подтверждения`,name:`onConfirm`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}export{A as n,b as r,k as t};