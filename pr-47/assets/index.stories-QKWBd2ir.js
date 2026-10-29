import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ct as t,ji as n,lt as r,ya as i,yn as a,za as o}from"./preview-Bh-2MF8C.js";import{g as s,t as c}from"./date-CK16PvKb.js";import{n as l,t as u}from"./DatePicker-DvdgtM6G.js";import{i as d,r as f}from"./StaticDaysCalendar-Cdo0_KHt.js";var p,m,h;function g(){return(g=e((()=>{p=o(),l(),m=i(),h=()=>{let[e,t]=(0,p.useState)();return(0,m.jsx)(u,{inputProps:{error:!1,helperText:void 0},disabled:!1,label:`Дата рождения`,value:e,onChange:t})};try{h.displayName=`BasicUsage`,h.__docgenInfo={description:`Базовый пример с ручным вводом и календарём.

**Важно:** во время ввода **onChange** с датой вызывается только когда заполнена полная маска (по умолчанию \`DD.MM.YYYY\`); до этого контролируемый **value** с родителя не обновляется. Очистка поля — **null** в **onChange**. Календарно невозможная, но полностью введённая дата — **Invalid Date** в **onChange**. Если уйти с поля с неполной строкой, в **onChange** придёт **Invalid Date**.

\`\`\`tsx
// onChange сработает — введена полная дата, например "10.02.2022"
// onChange не сработает во время ввода — неполный ввод, например "10.02.20" (нужны 4 цифры года)
// onChange с null — поле очищено
// onChange с Invalid Date — полная маска, но нет такого дня, например "32.01.2024"
// onBlur c неполной строкой -> onChange с Invalid Date
<DatePicker value={date} onChange={setDate} />
\`\`\``,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DatePicker/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker inputProps={{
    error: false,
    helperText: undefined
  }} disabled={false} label="Дата рождения" value={date} onChange={setDate} />;
}`,...h.parameters?.docs?.source},description:{story:`Базовый пример с ручным вводом и календарём.

**Важно:** во время ввода **onChange** с датой вызывается только когда заполнена полная маска (по умолчанию \`DD.MM.YYYY\`); до этого контролируемый **value** с родителя не обновляется. Очистка поля — **null** в **onChange**. Календарно невозможная, но полностью введённая дата — **Invalid Date** в **onChange**. Если уйти с поля с неполной строкой, в **onChange** придёт **Invalid Date**.

\`\`\`tsx
// onChange сработает — введена полная дата, например "10.02.2022"
// onChange не сработает во время ввода — неполный ввод, например "10.02.20" (нужны 4 цифры года)
// onChange с null — поле очищено
// onChange с Invalid Date — полная маска, но нет такого дня, например "32.01.2024"
// onBlur c неполной строкой -> onChange с Invalid Date
<DatePicker value={date} onChange={setDate} />
\`\`\``,...h.parameters?.docs?.description}}}})))()}var _,v,y;function b(){return(b=e((()=>{_=o(),l(),v=i(),y=()=>{let[e,t]=(0,_.useState)();return(0,v.jsx)(u,{isDoubleNavigationButtonsEnabled:!0,value:e,onChange:t})};try{y.displayName=`DoubleNavigationButtons`,y.__docgenInfo={description:"Используя пропс `isDoubleNavigationButtonsEnabled` имеется возможность включить дополнительные кнопки для навигации на год вперед/назад внутри календаря выбора дня",displayName:`DoubleNavigationButtons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DatePicker/stories/DoubleNavigationButtons.story.tsx`,methods:[],props:{},tags:{}}}catch{}y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker isDoubleNavigationButtonsEnabled value={date} onChange={setDate} />;
}`,...y.parameters?.docs?.source},description:{story:"Используя пропс `isDoubleNavigationButtonsEnabled` имеется возможность включить дополнительные кнопки для навигации на год вперед/назад внутри календаря выбора дня",...y.parameters?.docs?.description}}}})))()}var x,S,C;function w(){return(w=e((()=>{x=o(),l(),S=i(),C=()=>{let[e,t]=(0,x.useState)();return(0,S.jsx)(u,{value:e,onChange:t,helperText:`Выберите дату начала периода`})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker value={date} onChange={setDate} helperText="Выберите дату начала периода" />;
}`,...C.parameters?.docs?.source}}}})))()}var T;function E(){return(E=e((()=>{T={args:{},parameters:{docs:{disable:!0}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...T.parameters?.docs?.source}}}})))()}var D,O,k,A,j,M;function N(){return(N=e((()=>{d(),D=o(),t(),a(),c(),l(),O=i(),k=s({year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate(),hour:1}),A=e=>{let[t,n]=(0,D.useState)();return(0,O.jsx)(u,{value:t,onChange:n,...e})},j=n(r)`
  grid-auto-flow: row;
`,M=()=>(0,O.jsxs)(j,{container:!0,spacing:6,children:[(0,O.jsx)(A,{inputProps:{label:`Все по умолчанию`}}),(0,O.jsx)(A,{inputProps:{label:`Disabled default value`},value:new Date(`2022-11-01`),disabled:!0}),(0,O.jsx)(A,{inputProps:{label:`maxDate меньше текущей`},maxDate:f(k,-90)}),(0,O.jsx)(A,{inputProps:{label:`minDate больше текущей`},minDate:f(k,90)}),(0,O.jsx)(A,{inputProps:{label:`Узкий диапазон выбора`},minDate:s({year:2022,month:6,day:30}),maxDate:s({year:2022,month:7,day:10})}),(0,O.jsx)(A,{inputProps:{label:`minDate больше текущей + Узкий диапазон выбора`},minDate:f(k,90),maxDate:f(k,100)}),(0,O.jsx)(A,{inputProps:{label:`maxDate меньше текущей + Узкий диапазон выбора`},minDate:f(k,-90),maxDate:f(k,-80)})]}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <Container container spacing={6}>
    <Template inputProps={{
    label: 'Все по умолчанию'
  }} />
    <Template inputProps={{
    label: 'Disabled default value'
  }} value={new Date('2022-11-01')} disabled />
    <Template inputProps={{
    label: 'maxDate меньше текущей'
  }} maxDate={addDays(normalizedCurrentDate, -90)} />
    <Template inputProps={{
    label: 'minDate больше текущей'
  }} minDate={addDays(normalizedCurrentDate, 90)} />
    <Template inputProps={{
    label: 'Узкий диапазон выбора'
  }} minDate={buildIsoDate({
    year: 2022,
    month: 6,
    day: 30
  })} maxDate={buildIsoDate({
    year: 2022,
    month: 7,
    day: 10
  })} />
    <Template inputProps={{
    label: 'minDate больше текущей + Узкий диапазон выбора'
  }} minDate={addDays(normalizedCurrentDate, 90)} maxDate={addDays(normalizedCurrentDate, 100)} />
    <Template inputProps={{
    label: 'maxDate меньше текущей + Узкий диапазон выбора'
  }} minDate={addDays(normalizedCurrentDate, -90)} maxDate={addDays(normalizedCurrentDate, -80)} />
  </Container>`,...M.parameters?.docs?.source}}}})))()}var P,F,I;function L(){return(L=e((()=>{P=o(),l(),F=i(),I=()=>{let[e,t]=(0,P.useState)();return(0,F.jsx)(u,{startAdornment:`c`,value:e,onChange:t})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker startAdornment="c" value={date} onChange={setDate} />;
}`,...I.parameters?.docs?.source}}}})))()}var R,z;function B(){return(B=e((()=>{l(),g(),b(),w(),E(),N(),L(),R={title:`Date-Pickers/DatePicker`,component:u,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=285-9130)`}}}},z=[`Interaction`,`BasicUsage`,`StartAdornment`,`HelperText`,`DoubleNavigationButtons`,`Showcase`]})))()}B();export{h as BasicUsage,y as DoubleNavigationButtons,C as HelperText,T as Interaction,M as Showcase,I as StartAdornment,z as __namedExportsOrder,R as default};