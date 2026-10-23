import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-BJz-w2gl.js";import{t as l}from"./Autocomplete-DYwHQf6X.js";import{a as u,o as d}from"./MenuItem-CK3wKHr-.js";import{r as f,t as p}from"./Popover-qriWOOFg.js";import{t as m}from"./Dialog-Doron_nC.js";import{t as h}from"./Autocomplete-BDm-X_Qi.js";import{r as g,t as _}from"./BackdropStack-DpC8UbfK.js";import{t as v}from"./DatePicker-09a46WPV.js";import{t as y}from"./Dialog-Bl5RvJAg.js";import{t as b}from"./Select-CFNudf9f.js";import{t as x}from"./Select-CgmJyhYF.js";import{t as S}from"./DatePicker-CCqGwLP0.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{d(),f(),C=c(),h(),_(),t(),S(),y(),x(),s(),n(),w=o(),T={title:`Modals/BackdropStack`},E=[{value:`1`,title:`Value 1`},{value:`2`,title:`Value 2`},{value:`3`,title:`Value 3`},{value:`4`,title:`Value 4`},{value:`5`,title:`Value 5`},{value:`6`,title:`Value 6`},{value:`7`,title:`Value 7`},{value:`8`,title:`Value 8`}],D=i.div`
  margin-top: ${({theme:e})=>e.spacing(3)};
  margin-bottom: ${({theme:e})=>e.spacing(2)};
`,O=i.div`
  padding: ${({theme:e})=>e.spacing(4)};;
`,k=i.div`
  padding: ${({theme:e})=>e.spacing(6)};;
`,A=()=>{let{handleClose:e,handleOpen:t}=g();return(0,w.jsx)(l,{options:E,onOpen:t,onClose:e,label:`Multiple`,multiple:!0,getOptionLabel:e=>e.title})},j=()=>{let{handleClose:e,handleOpen:t}=g(),[n,r]=(0,C.useState)(``);return(0,w.jsx)(b,{placeholder:`Выберите вариант`,label:`Select`,value:n,onOpen:t,onClose:e,children:E.map(e=>(0,w.jsx)(u,{value:e.value,onClick:()=>r(e.value),children:e.title},e.value))})},M=()=>{let{handleOpen:e,handleClose:t}=g();return(0,w.jsx)(v,{onOpen:e,onClose:t})},N=({index:e})=>{let{isOpened:t,handleOpen:n,handleClose:i}=g(),o=(0,C.useRef)(null);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(a,{ref:o,onClick:n,children:[`Open popup `,e+1]}),(0,w.jsx)(p,{open:t,onClose:i,anchorEl:o.current,anchorOrigin:{vertical:`bottom`,horizontal:`left`},transformOrigin:{vertical:`top`,horizontal:`left`},children:(0,w.jsxs)(O,{children:[(0,w.jsxs)(r,{variant:`h3`,children:[`Popup #`,e+1]}),(0,w.jsx)(`div`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, porro?`}),(0,w.jsx)(j,{}),(0,w.jsx)(A,{}),(0,w.jsx)(M,{}),t&&(0,w.jsx)(N,{index:e+1})]})})]})},P=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r,{variant:`h2`,children:`Мотивация`}),(0,w.jsxs)(r,{children:[`Абстрактный компонент, предназначенный для предотвращения случайного нажатия пользователем по бэкдропу/оверлею/серой зоне модального окна.`,(0,w.jsx)(`br`,{}),`Кейс состоит в том, что если внутри модального окна, пользователь взаимодействует с другими активными попап подобными элементами, автокомплитом, селектом, то для их закрытия пользователь может воспользоваться кликом мышкой "снаружи" окна взаимодействия, и тогда это приводит к клику по фоновой части модалки, и это приводит к закрытию не только селекта/автокомплита, но и самой модалки, чего пользователь совсем не ожидал`]}),(0,w.jsx)(D,{children:(0,w.jsx)(r,{variant:`h2`,children:`Пример`})})]}),F=()=>{let{isOpened:e,handleOpen:t,handleClose:n}=g();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(P,{}),(0,w.jsx)(a,{onClick:t,children:`Открыть модалку`}),(0,w.jsx)(m,{open:e,onClose:n,title:`Example modal content`,children:(0,w.jsxs)(k,{children:[(0,w.jsx)(`div`,{children:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eveniet, ipsum. Deserunt dicta eum facilis nihil perferendis quisquam rerum vero.`}),(0,w.jsx)(j,{}),(0,w.jsx)(A,{}),(0,w.jsx)(M,{}),(0,w.jsx)(N,{index:0})]})})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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