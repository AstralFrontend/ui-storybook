import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as i,ji as a,ln as o,xa as s,yn as c}from"./preview-NvIN-gdT.js";import{t as l}from"./Autocomplete-CgXAyozM.js";import{a as u,o as d}from"./MenuItem-BbrFrap9.js";import{r as f,t as p}from"./Popover-Cis4xaDo.js";import{t as m}from"./Dialog-C5b8wqml.js";import{t as h}from"./Autocomplete-CgSGVZDL.js";import{r as g,t as _}from"./BackdropStack-CggfWXlW.js";import{t as v}from"./DatePicker-Du4N1EgB.js";import{t as y}from"./Dialog-Bb6FOavk.js";import{t as b}from"./Select-XGpHXWiI.js";import{t as x}from"./Select-Be38JDgA.js";import{t as S}from"./DatePicker-BDkI9kv_.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{d(),f(),C=t(),h(),_(),n(),S(),y(),x(),c(),r(),w=s(),T={title:`Modals/BackdropStack`},E=[{value:`1`,title:`Value 1`},{value:`2`,title:`Value 2`},{value:`3`,title:`Value 3`},{value:`4`,title:`Value 4`},{value:`5`,title:`Value 5`},{value:`6`,title:`Value 6`},{value:`7`,title:`Value 7`},{value:`8`,title:`Value 8`}],D=a.div`
  margin-top: ${({theme:e})=>e.spacing(3)};
  margin-bottom: ${({theme:e})=>e.spacing(2)};
`,O=a.div`
  padding: ${({theme:e})=>e.spacing(4)};;
`,k=a.div`
  padding: ${({theme:e})=>e.spacing(6)};;
`,A=()=>{let{handleClose:e,handleOpen:t}=g();return(0,w.jsx)(l,{options:E,onOpen:t,onClose:e,label:`Multiple`,multiple:!0,getOptionLabel:e=>e.title})},j=()=>{let{handleClose:e,handleOpen:t}=g(),[n,r]=(0,C.useState)(``);return(0,w.jsx)(b,{placeholder:`Выберите вариант`,label:`Select`,value:n,onOpen:t,onClose:e,children:E.map(e=>(0,w.jsx)(u,{value:e.value,onClick:()=>r(e.value),children:e.title},e.value))})},M=()=>{let{handleOpen:e,handleClose:t}=g();return(0,w.jsx)(v,{onOpen:e,onClose:t})},N=({index:e})=>{let{isOpened:t,handleOpen:n,handleClose:r}=g(),a=(0,C.useRef)(null);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o,{ref:a,onClick:n,children:[`Open popup `,e+1]}),(0,w.jsx)(p,{open:t,onClose:r,anchorEl:a.current,anchorOrigin:{vertical:`bottom`,horizontal:`left`},transformOrigin:{vertical:`top`,horizontal:`left`},children:(0,w.jsxs)(O,{children:[(0,w.jsxs)(i,{variant:`h3`,children:[`Popup #`,e+1]}),(0,w.jsx)(`div`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, porro?`}),(0,w.jsx)(j,{}),(0,w.jsx)(A,{}),(0,w.jsx)(M,{}),t&&(0,w.jsx)(N,{index:e+1})]})})]})},P=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{variant:`h2`,children:`Мотивация`}),(0,w.jsxs)(i,{children:[`Абстрактный компонент, предназначенный для предотвращения случайного нажатия пользователем по бэкдропу/оверлею/серой зоне модального окна.`,(0,w.jsx)(`br`,{}),`Кейс состоит в том, что если внутри модального окна, пользователь взаимодействует с другими активными попап подобными элементами, автокомплитом, селектом, то для их закрытия пользователь может воспользоваться кликом мышкой "снаружи" окна взаимодействия, и тогда это приводит к клику по фоновой части модалки, и это приводит к закрытию не только селекта/автокомплита, но и самой модалки, чего пользователь совсем не ожидал`]}),(0,w.jsx)(D,{children:(0,w.jsx)(i,{variant:`h2`,children:`Пример`})})]}),F=()=>{let{isOpened:e,handleOpen:t,handleClose:n}=g();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(P,{}),(0,w.jsx)(o,{onClick:t,children:`Открыть модалку`}),(0,w.jsx)(m,{open:e,onClose:n,title:`Example modal content`,children:(0,w.jsxs)(k,{children:[(0,w.jsx)(`div`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eveniet, ipsum. Deserunt dicta eum facilis nihil perferendis quisquam rerum vero.`}),(0,w.jsx)(j,{}),(0,w.jsx)(A,{}),(0,w.jsx)(M,{}),(0,w.jsx)(N,{index:0})]})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const {
    isOpened,
    handleOpen,
    handleClose
  } = useBackdropStackToggle();
  return <>
      <MotivationPart />
      <Button onClick={handleOpen}>Открыть модалку</Button>
      <Dialog open={isOpened} onClose={handleClose} title="Example modal content">
        <ExampleWrapper>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            eveniet, ipsum. Deserunt dicta eum facilis nihil perferendis
            quisquam rerum vero.
          </div>
          <SelectExample />
          <AutocompleteExample />
          <DatePickerExample />
          <PopupExample index={0} />
        </ExampleWrapper>
      </Dialog>
    </>;
}`,...F.parameters?.docs?.source}}},I=[`BasicUsage`]})))()}L();export{F as BasicUsage,I as __namedExportsOrder,T as default};