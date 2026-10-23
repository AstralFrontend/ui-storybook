import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-D_kXaHc2.js";import{m as r,t as i}from"./date-C3sGDXpF.js";import{i as a,r as o}from"./StaticDaysCalendar-BMJ7MI5o.js";import{n as s,t as c}from"./DateRangePicker-CSmlxp2I.js";var l,u,d;function f(){return(f=e((()=>{l=n(),s(),u=t(),d=()=>{let[e,t]=(0,l.useState)({start:null,end:null});return(0,u.jsx)(c,{startDateProps:{label:`Дата начала`,error:!1,helperText:void 0},endDateProps:{label:`Дата окончания`,error:!1,helperText:void 0},value:e,onChange:t})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала',
    error: false,
    helperText: undefined
  }} endDateProps={{
    label: 'Дата окончания',
    error: false,
    helperText: undefined
  }} value={date} onChange={setDate} />;
}`,...d.parameters?.docs?.source},description:{story:`Диапазон дат: отдельные поля «начало» и «конец».

**Важно:** для **каждого** поля действуют те же правила, что у [DatePicker](/story/date-pickers-defaultDatePicker--docs) — **onChange** с датой после полной маски; невалидная полная дата — **Invalid Date**; при неполном вводе значение в **onChange** не уходит, пока маска не заполнена. Если уйти с поля с неполной строкой, в **onChange** придёт **Invalid Date** для этого поля.

\`\`\`tsx
// onChange сработает, когда обе даты введены полностью (или выбраны в календаре)
// onChange не сработает на поле "конец" во время ввода, пока год в маске неполный: "10.02.2"
// props.onBlur — для всего DateRangePicker (например при закрытии поповера), не blur отдельного инпута
// неполная маска в одном из полей -> onChange с Invalid Date для этой стороны при уходе (blur инпута или close)
<DateRangePicker value={range} onChange={setRange} />
\`\`\``,...d.parameters?.docs?.description}}};try{d.displayName=`BasicUsage`,d.__docgenInfo={description:`Диапазон дат: отдельные поля «начало» и «конец».

**Важно:** для **каждого** поля действуют те же правила, что у [DatePicker](/story/date-pickers-defaultDatePicker--docs) — **onChange** с датой после полной маски; невалидная полная дата — **Invalid Date**; при неполном вводе значение в **onChange** не уходит, пока маска не заполнена. Если уйти с поля с неполной строкой, в **onChange** придёт **Invalid Date** для этого поля.

\`\`\`tsx
// onChange сработает, когда обе даты введены полностью (или выбраны в календаре)
// onChange не сработает на поле "конец" во время ввода, пока год в маске неполный: "10.02.2"
// props.onBlur — для всего DateRangePicker (например при закрытии поповера), не blur отдельного инпута
// неполная маска в одном из полей -> onChange с Invalid Date для этой стороны при уходе (blur инпута или close)
<DateRangePicker value={range} onChange={setRange} />
\`\`\``,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DateRangePicker/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var p,m,h,g;function _(){return(_=e((()=>{a(),p=n(),i(),s(),m=t(),h=r({year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate(),hour:1}),g=()=>{let[e,t]=(0,p.useState)({start:h,end:o(h,10)});return(0,m.jsx)(c,{startDateProps:{label:`Дата начала`},endDateProps:{label:`Дата окончания`},value:e,isDisabled:!0,onChange:t})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: normalizedCurrentDate,
    end: addDays(normalizedCurrentDate, 10)
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала'
  }} endDateProps={{
    label: 'Дата окончания'
  }} value={date} isDisabled onChange={setDate} />;
}`,...g.parameters?.docs?.source}}}})))()}var v,y,b;function x(){return(x=e((()=>{v=n(),s(),y=t(),b=()=>{let[e,t]=(0,v.useState)({start:null,end:null});return(0,y.jsx)(c,{isDoubleNavigationButtonsEnabled:!0,startDateProps:{label:`Дата начала`,placeholder:`Выберите дату`,error:!1,helperText:void 0},endDateProps:{label:`Дата окончания`,placeholder:`Выберите дату`,error:!1,helperText:void 0},value:e,onChange:t})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker isDoubleNavigationButtonsEnabled startDateProps={{
    label: 'Дата начала',
    placeholder: 'Выберите дату',
    error: false,
    helperText: undefined
  }} endDateProps={{
    label: 'Дата окончания',
    placeholder: 'Выберите дату',
    error: false,
    helperText: undefined
  }} value={date} onChange={setDate} />;
}`,...b.parameters?.docs?.source},description:{story:"Используя пропс `isDoubleNavigationButtonsEnabled` имеется возможность включить дополнительные кнопки для навигации на год вперед/назад внутри календаря выбора дня",...b.parameters?.docs?.description}}};try{b.displayName=`DoubleNavigationButtons`,b.__docgenInfo={description:"Используя пропс `isDoubleNavigationButtonsEnabled` имеется возможность включить дополнительные кнопки для навигации на год вперед/назад внутри календаря выбора дня",displayName:`DoubleNavigationButtons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DateRangePicker/stories/DoubleNavigationButtons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var S,C,w;function T(){return(T=e((()=>{S=n(),s(),C=t(),w=()=>{let[e,t]=(0,S.useState)({start:null,end:null});return(0,C.jsx)(c,{startDateProps:{label:`Дата начала`},endDateProps:{label:`Дата окончания`},helperText:`Вспомогательный текст, относящийся к обоим полям`,value:e,onChange:t})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала'
  }} endDateProps={{
    label: 'Дата окончания'
  }} helperText="Вспомогательный текст, относящийся к обоим полям" value={date} onChange={setDate} />;
}`,...w.parameters?.docs?.source}}}})))()}var E;function D(){return(D=e((()=>{E={args:{},parameters:{docs:{disable:!0}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...E.parameters?.docs?.source}}}})))()}var O,k,A,j;function M(){return(M=e((()=>{a(),O=n(),i(),s(),k=t(),A=r({year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate(),hour:1}),j=()=>{let[e,t]=(0,O.useState)({start:null,end:null});return(0,k.jsx)(c,{startDateProps:{label:`Дата начала`},endDateProps:{label:`Дата окончания`},maxDate:o(A,90),value:e,onChange:t})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала'
  }} endDateProps={{
    label: 'Дата окончания'
  }} maxDate={addDays(normalizedCurrentDate, 90)} value={date} onChange={setDate} />;
}`,...j.parameters?.docs?.source}}}})))()}var N,P,F,I;function L(){return(L=e((()=>{a(),N=n(),i(),s(),P=t(),F=r({year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate(),hour:1}),I=()=>{let[e,t]=(0,N.useState)({start:null,end:null});return(0,P.jsx)(c,{startDateProps:{label:`Дата начала`},endDateProps:{label:`Дата окончания`},minDate:o(F,90),value:e,onChange:t})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала'
  }} endDateProps={{
    label: 'Дата окончания'
  }} minDate={addDays(normalizedCurrentDate, 90)} value={date} onChange={setDate} />;
}`,...I.parameters?.docs?.source}}}})))()}var R,z,B;function V(){return(V=e((()=>{R=n(),s(),z=t(),B=()=>{let[e,t]=(0,R.useState)({start:null,end:null});return(0,z.jsx)(c,{startDateProps:{label:`Дата начала`,required:!0},endDateProps:{label:`Дата окончания`,required:!0},value:e,onChange:t})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала',
    required: true
  }} endDateProps={{
    label: 'Дата окончания',
    required: true
  }} value={date} onChange={setDate} />;
}`,...B.parameters?.docs?.source}}}})))()}var H,U,W;function G(){return(G=e((()=>{H=n(),s(),U=t(),W=()=>{let[e,t]=(0,H.useState)({start:null,end:null});return(0,U.jsx)(c,{startDateProps:{startAdornment:`c`,label:`Дата начала`},endDateProps:{startAdornment:`по`,label:`Дата окончания`},value:e,onChange:t})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    startAdornment: 'c',
    label: 'Дата начала'
  }} endDateProps={{
    startAdornment: 'по',
    label: 'Дата окончания'
  }} value={date} onChange={setDate} />;
}`,...W.parameters?.docs?.source}}}})))()}var K,q,J;function Y(){return(Y=e((()=>{K=n(),s(),q=t(),J=()=>{let[e,t]=(0,K.useState)({start:null,end:null});return(0,q.jsx)(c,{startDateProps:{label:`Дата начала`},endDateProps:{label:`Дата окончания`},isError:!0,helperText:`Дата начала не может быть раньше даты окончания`,value:e,onChange:t})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<DateRangePickerValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker startDateProps={{
    label: 'Дата начала'
  }} endDateProps={{
    label: 'Дата окончания'
  }} isError={true} helperText="Дата начала не может быть раньше даты окончания" value={date} onChange={setDate} />;
}`,...J.parameters?.docs?.source}}}})))()}var X,Z;function Q(){return(Q=e((()=>{s(),f(),_(),x(),T(),D(),M(),L(),V(),G(),Y(),X={title:`Date-Pickers/DateRangePicker`,component:c,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=285-9130)`}}}},Z=[`Interaction`,`BasicUsage`,`StartAdornment`,`Disabled`,`Required`,`HelperText`,`WithError`,`MinDate`,`MaxDate`,`DoubleNavigationButtons`]})))()}Q();export{d as BasicUsage,g as Disabled,b as DoubleNavigationButtons,w as HelperText,E as Interaction,j as MaxDate,I as MinDate,B as Required,W as StartAdornment,J as WithError,Z as __namedExportsOrder,X as default};