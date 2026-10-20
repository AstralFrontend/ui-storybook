import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ln as i,lt as a,xa as o}from"./preview-_BGonndb.js";import{t as s}from"./TextField-CssDi2ve.js";import{t as c}from"./Dialog-Wf-NCfY1.js";import{n as l,t as u}from"./DialogContent-BMuvhDsB.js";import{t as d}from"./TextField-BzYZipYU.js";import{n as f,t as p}from"./DatePicker-Z2BZM6FJ.js";import{t as m}from"./Dialog-udeZbnGw.js";var h,g,_;function v(){return(v=e((()=>{h=t(),r(),d(),f(),g=o(),_=()=>{let[e,t]=(0,h.useState)();return(0,g.jsxs)(a,{spacing:4,columns:2,children:[(0,g.jsx)(p,{label:`Дата договора`,value:e,onChange:t}),(0,g.jsx)(s,{label:`Номер договора`,placeholder:`Например, 12345678`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<Date | null>();
  return <Grid spacing={4} columns={2}>
      <DatePicker label="Дата договора" value={date} onChange={setDate} />
      <TextField label="Номер договора" placeholder="Например, 12345678" />
    </Grid>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x;function S(){return(S=e((()=>{y=t(),n(),m(),u(),f(),b=o(),x=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{onClick:()=>t(!0),children:`Открыть модальное окно`}),(0,b.jsx)(c,{open:e,onClose:()=>t(!1),title:`Модальное окно с DatePicker`,children:(0,b.jsx)(l,{children:(0,b.jsx)(p,{label:`Дата`,value:n,onChange:r})})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>();
  return <>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} title="Модальное окно с DatePicker">
        <DialogContent>
          <DatePicker label="Дата" value={date} onChange={setDate} />
        </DialogContent>
      </Dialog>
    </>;
}`,...x.parameters?.docs?.source}}}})))()}var C,w;function T(){return(T=e((()=>{f(),v(),S(),C={title:`Date-Pickers/DatePicker/Tests`,component:p},w=[`InDialog`,`FocusTransfer`]})))()}T();export{_ as FocusTransfer,x as InDialog,w as __namedExportsOrder,C as default};