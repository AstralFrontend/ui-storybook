import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ct as n,dt as r,ft as i,lt as a,xa as o}from"./preview-msKJ6Jz4.js";import{f as s,m as c,n as l,t as u}from"./StaticDaysCalendar-C9w4Ge3V.js";var ee,d;function f(){return(f=e((()=>{l(),ee=o(),d=()=>(0,ee.jsx)(u,{baseDate:new Date}),d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date();
  return <StaticDaysCalendar baseDate={baseDate} />;
}`,...d.parameters?.docs?.source}}}})))()}var p,m;function h(){return(h=e((()=>{p=[[`2024-05-11T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-12T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-18T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-19T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-25T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-26T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-06-01T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-06-02T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-06-08T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-06-09T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}]],m=new Map([[`2024-05-01T00:00:00.000Z`,{description:`Праздник весны и труда`,isHoliday:!0,typeName:`Государственный праздник`}],[`2024-05-04T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-05T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-08T00:00:00.000Z`,{isHoliday:!1,typeName:`Предпраздничный сокращенный рабочий день`}],[`2024-05-09T00:00:00.000Z`,{isHoliday:!0,typeName:`Государственный праздник`,description:`День Победы`}],[`2024-05-10T00:00:00.000Z`,{isHoliday:!0,typeName:`Дополнительный / перенесенный выходной день`,description:`Перенос с субботы 6 января`}],...p])})))()}var g,_;function v(){return(v=e((()=>{l(),h(),g=o(),_=()=>(0,g.jsx)(u,{baseDate:new Date(`2024-05-01T00:00:00.000Z`),productionCalendarStorage:m,minDate:new Date(`2024-05-13T00:00:00.000Z`),selectedRanges:[{dateA:new Date(`2024-05-06T00:00:00Z`),dateB:new Date(`2024-05-12T00:00:00Z`)},{dateA:new Date(`2024-05-20T00:00:00Z`),dateB:new Date(`2024-05-26T00:00:00Z`)}]}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date('2024-05-01T00:00:00.000Z');
  const minDate = new Date('2024-05-13T00:00:00.000Z');
  return <StaticDaysCalendar baseDate={baseDate} productionCalendarStorage={MAYS_HOLIDAYS} minDate={minDate} selectedRanges={[{
    dateA: new Date('2024-05-06T00:00:00Z'),
    dateB: new Date('2024-05-12T00:00:00Z')
  }, {
    dateA: new Date('2024-05-20T00:00:00Z'),
    dateB: new Date('2024-05-26T00:00:00Z')
  }]} />;
}`,..._.parameters?.docs?.source}}}})))()}var y,te,b;function x(){return(x=e((()=>{y=t(),l(),te=o(),b=()=>{let e=new Date(`2024-08-01T00:00:00.000Z`),[t,n]=(0,y.useState)(null),[r,i]=(0,y.useState)({dateA:new Date(`2024-08-01T00:00:00.000Z`),dateB:new Date(`2024-08-04T00:00:00.000Z`)}),[a,o]=(0,y.useState)(r),s=n,c=e=>{let n=t?.toISOString(),i=n===r.dateA.toISOString(),a=n===r.dateB.toISOString();return i&&{dateA:e,dateB:r.dateB}||a&&{dateA:r.dateA,dateB:e}||r};return(0,te.jsx)(u,{baseDate:e,selectedRanges:[a],dragAndDropProps:{onRangeDayDragStart:s,onDayDragEnter:e=>{o(c(e))},onDayDrop:e=>{i(c(e))},onRangeDayDragEnd:()=>{i(a),o(r),n(null)}}})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date('2024-08-01T00:00:00.000Z');
  const [draggableDate, setDraggableDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState({
    dateA: new Date('2024-08-01T00:00:00.000Z'),
    dateB: new Date('2024-08-04T00:00:00.000Z')
  });
  const [tempRange, setTempRange] = useState(selectedRange);
  const handleRangeDayDragStart = setDraggableDate;
  const makeNewRange = (dropDate: Date): typeof selectedRange => {
    const dragRangeDayString = draggableDate?.toISOString();
    const isDraggableDateSameAsDateA = dragRangeDayString === selectedRange.dateA.toISOString();
    const isDraggableDateSameAsDateB = dragRangeDayString === selectedRange.dateB.toISOString();
    return isDraggableDateSameAsDateA && {
      dateA: dropDate,
      dateB: selectedRange.dateB
    } || isDraggableDateSameAsDateB && {
      dateA: selectedRange.dateA,
      dateB: dropDate
    } || selectedRange;
  };
  const handleDayDragEnter = (enterDate: Date) => {
    setTempRange(makeNewRange(enterDate));
  };
  const handleDayDrop = (dropDate: Date) => {
    setSelectedRange(makeNewRange(dropDate));
  };
  const handleRangeDayDragEnd = () => {
    setSelectedRange(tempRange);
    setTempRange(selectedRange);
    setDraggableDate(null);
  };
  return <StaticDaysCalendar baseDate={baseDate} selectedRanges={[tempRange]} dragAndDropProps={{
    onRangeDayDragStart: handleRangeDayDragStart,
    onDayDragEnter: handleDayDragEnter,
    onDayDrop: handleDayDrop,
    onRangeDayDragEnd: handleRangeDayDragEnd
  }} />;
}`,...b.parameters?.docs?.source},description:{story:`Пропс позволяющий организовать логику dragAndDrop для изменяемого интервала`,...b.parameters?.docs?.description}}};try{b.displayName=`DragAndDropProps`,b.__docgenInfo={description:`Пропс позволяющий организовать логику dragAndDrop для изменяемого интервала`,displayName:`DragAndDropProps`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/DragAndDropProps.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var S,C;function w(){return(w=e((()=>{l(),S=o(),C=()=>(0,S.jsx)(u,{baseDate:new Date,hideOutOfAvailableRangeElements:!0}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date();
  return <StaticDaysCalendar baseDate={baseDate} hideOutOfAvailableRangeElements />;
}`,...C.parameters?.docs?.source},description:{story:`Пропс, по которому скрываются элементы выходящие за границы месяца`,...C.parameters?.docs?.description}}};try{C.displayName=`HideOutOfAvailableRangeElements`,C.__docgenInfo={description:`Пропс, по которому скрываются элементы выходящие за границы месяца`,displayName:`HideOutOfAvailableRangeElements`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/HideOutOfAvailableRangeElements.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D;function ne(){return(ne=e((()=>{T=t(),l(),E=o(),D=()=>{let[e,t]=(0,T.useState)(),n=new Date;return(0,E.jsx)(u,{baseDate:n,selectedDate:n,hoveredDate:e,onDayHover:e=>t(e)})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [hovered, setHovered] = useState<Date | undefined>();
  const baseDate = new Date();
  return <StaticDaysCalendar baseDate={baseDate} selectedDate={baseDate} hoveredDate={hovered} onDayHover={date => setHovered(date)} />;
}`,...D.parameters?.docs?.source},description:{story:`Пропс предназначенный для отображения предварительного промежутка выбираемого диапазона,
для корректного отображения требуется наличие selectedDate`,...D.parameters?.docs?.description}}};try{D.displayName=`HoveredDate`,D.__docgenInfo={description:`Пропс предназначенный для отображения предварительного промежутка выбираемого диапазона,
для корректного отображения требуется наличие selectedDate`,displayName:`HoveredDate`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/HoveredDate.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O;function re(){return(re=e((()=>{O={args:{baseDate:new Date},parameters:{options:{showPanel:!1},docs:{disable:!0}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    baseDate: new Date()
  },
  parameters: {
    options: {
      showPanel: false
    },
    docs: {
      disable: true
    }
  }
}`,...O.parameters?.docs?.source}}}})))()}var ie,k;function A(){return(A=e((()=>{l(),ie=o(),k=()=>(0,ie.jsx)(u,{baseDate:new Date,isMondayFirst:!1}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date();
  return <StaticDaysCalendar baseDate={baseDate} isMondayFirst={false} />;
}`,...k.parameters?.docs?.source},description:{story:`Предназначен для отображения календаря, где понедельник - первый день недели. По умолчанию равен true.`,...k.parameters?.docs?.description}}};try{k.displayName=`IsMondayFirst`,k.__docgenInfo={description:`Предназначен для отображения календаря, где понедельник - первый день недели. По умолчанию равен true.`,displayName:`IsMondayFirst`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/IsMondayFirst.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=e((()=>{j=t(),n(),r(),l(),M=o(),N=()=>{let[e,t]=(0,j.useState)(),n=new Date;return(0,M.jsxs)(a,{spacing:5,children:[(0,M.jsxs)(i,{children:[`last clicked `,e?.toISOString()]}),(0,M.jsx)(u,{baseDate:n,onChange:t})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [clicked, setClicked] = useState<Date | undefined>();
  const baseDate = new Date();
  return <Grid spacing={5}>
      <Typography>last clicked {clicked?.toISOString()}</Typography>
      <StaticDaysCalendar baseDate={baseDate} onChange={setClicked} />
    </Grid>;
}`,...N.parameters?.docs?.source},description:{story:`Коллбэк вызываемый при клике по дате в календаре`,...N.parameters?.docs?.description}}};try{N.displayName=`OnChange`,N.__docgenInfo={description:`Коллбэк вызываемый при клике по дате в календаре`,displayName:`OnChange`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/OnChange.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function R(){return(R=e((()=>{F=t(),n(),r(),l(),I=o(),L=()=>{let[e,t]=(0,F.useState)(),n=new Date;return(0,I.jsxs)(a,{spacing:5,children:[(0,I.jsxs)(i,{children:[`hovered: `,e?.toISOString()]}),(0,I.jsx)(u,{baseDate:n,onDayHover:e=>t(e)})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const [hovered, setHovered] = useState<Date | undefined>();
  const baseDate = new Date();
  return <Grid spacing={5}>
      <Typography>hovered: {hovered?.toISOString()}</Typography>
      <StaticDaysCalendar baseDate={baseDate} onDayHover={date => setHovered(date)} />
    </Grid>;
}`,...L.parameters?.docs?.source},description:{story:`Пропс коллбэк, который вызывается при наведении на одну из дат`,...L.parameters?.docs?.description}}};try{L.displayName=`OnDayHover`,L.__docgenInfo={description:`Пропс коллбэк, который вызывается при наведении на одну из дат`,displayName:`OnDayHover`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/OnDayHover.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var z,B,V;function H(){return(H=e((()=>{z=t(),r(),s(),l(),h(),B=o(),V=()=>{let e=new Date(`2024-05-01T00:00:00.000Z`),t=c({weekday:`short`,year:`2-digit`,month:`short`,day:`2-digit`,timeZone:`UTC`}),n=(0,z.useMemo)(()=>new Map([[`2024-05-01T00:00:00.000Z`,{description:`Праздник весны и труда`,isHoliday:!0,typeName:`Государственный праздник`}],[`2024-05-04T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-05T00:00:00.000Z`,{isHoliday:!0,typeName:`Выходной день`}],[`2024-05-08T00:00:00.000Z`,{isHoliday:!1,typeName:`Предпраздничный сокращенный рабочий день`}],[`2024-05-09T00:00:00.000Z`,{isHoliday:!0,typeName:`Государственный праздник`,description:`День Победы`}],[`2024-05-10T00:00:00.000Z`,{isHoliday:!0,typeName:`Дополнительный / перенесенный выходной день`,description:`Перенос с субботы 6 января`}],...p]),[]);return(0,B.jsx)(u,{baseDate:e,renderDayTooltipTitle:({typeName:e,description:n,date:r})=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i,{children:t(r)}),(0,B.jsx)(i,{children:e}),(0,B.jsx)(i,{children:n})]}),productionCalendarStorage:n,selectedRanges:[{dateA:new Date(`2024-05-06T00:00:00Z`),dateB:new Date(`2024-05-12T00:00:00Z`)}]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date('2024-05-01T00:00:00.000Z');
  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC'
  });
  const productionCalendarStorage = useMemo(() => new Map<string, ProductionCalendar.Day>([['2024-05-01T00:00:00.000Z', {
    description: 'Праздник весны и труда',
    isHoliday: true,
    typeName: 'Государственный праздник'
  }], ['2024-05-04T00:00:00.000Z', {
    isHoliday: true,
    typeName: 'Выходной день'
  }], ['2024-05-05T00:00:00.000Z', {
    isHoliday: true,
    typeName: 'Выходной день'
  }], ['2024-05-08T00:00:00.000Z', {
    isHoliday: false,
    typeName: 'Предпраздничный сокращенный рабочий день'
  }], ['2024-05-09T00:00:00.000Z', {
    isHoliday: true,
    typeName: 'Государственный праздник',
    description: 'День Победы'
  }], ['2024-05-10T00:00:00.000Z', {
    isHoliday: true,
    typeName: 'Дополнительный / перенесенный выходной день',
    description: 'Перенос с субботы 6 января'
  }], ...REST_OF_MAYS_HOLIDAYS]), []);
  return <StaticDaysCalendar baseDate={baseDate} renderDayTooltipTitle={({
    typeName,
    description,
    date
  }) => <>
          <Typography>{dayFormat(date)}</Typography>
          <Typography>{typeName}</Typography>
          <Typography>{description}</Typography>
        </>} productionCalendarStorage={productionCalendarStorage} selectedRanges={[{
    dateA: new Date('2024-05-06T00:00:00Z'),
    dateB: new Date('2024-05-12T00:00:00Z')
  }]} />;
}`,...V.parameters?.docs?.source}}}})))()}var U,W,G;function K(){return(K=e((()=>{U=t(),l(),W=o(),G=()=>{let e=new Date,t=(0,U.useCallback)(({monthDay:e})=>(0,W.jsx)(`span`,{children:e}),[]);return(0,W.jsx)(u,{baseDate:e,renderDayContent:t})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date();
  const renderDayContent = useCallback(
  // biome-ignore lint/correctness/noRestrictedElements: Необходима обертка
  ({
    monthDay
  }: {
    monthDay: number;
  }) => <span>{monthDay}</span>, []);
  return <StaticDaysCalendar baseDate={baseDate} renderDayContent={renderDayContent} />;
}`,...G.parameters?.docs?.source},description:{story:`Пропс ответственный за рендер контента внутри каждого элемента.
Для оптимальной работы требуется передавать не анонимную функцию`,...G.parameters?.docs?.description}}};try{G.displayName=`RenderDayContent`,G.__docgenInfo={description:`Пропс ответственный за рендер контента внутри каждого элемента.
Для оптимальной работы требуется передавать не анонимную функцию`,displayName:`RenderDayContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/RenderDayContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J,Y;function ae(){return(ae=e((()=>{q=t(),s(),l(),J=o(),Y=()=>{let e=new Date,t=c({weekday:`short`,year:`2-digit`,month:`short`,day:`2-digit`,timeZone:`UTC`}),n=(0,q.useCallback)(({date:e})=>t(e),[t]);return(0,J.jsx)(u,{baseDate:e,renderDayTooltipTitle:n})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date();
  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC'
  });
  const renderDayTooltipTitle = useCallback(({
    date
  }: {
    date: Date;
  }) => dayFormat(date), [dayFormat]);
  return <StaticDaysCalendar baseDate={baseDate} renderDayTooltipTitle={renderDayTooltipTitle} />;
}`,...Y.parameters?.docs?.source},description:{story:`Пропс ответственный за рендер контента в тултипе при наведении на элемент календаря.
Для оптимальной работы требуется передавать не анонимную функцию`,...Y.parameters?.docs?.description}}};try{Y.displayName=`RenderDayTooltipTitle`,Y.__docgenInfo={description:`Пропс ответственный за рендер контента в тултипе при наведении на элемент календаря.
Для оптимальной работы требуется передавать не анонимную функцию`,displayName:`RenderDayTooltipTitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/RenderDayTooltipTitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var oe,X;function se(){return(se=e((()=>{l(),oe=o(),X=()=>(0,oe.jsx)(u,{baseDate:new Date(`2024-08-01T00:00:00.000Z`),selectedRanges:[{dateA:new Date(`2024-08-01T00:00:00.000Z`),dateB:new Date(`2024-08-04T00:00:00.000Z`)},{dateA:new Date(`2024-08-08T00:00:00.000Z`),dateB:new Date(`2024-08-08T00:00:00.000Z`)},{dateA:new Date(`2024-08-20T00:00:00.000Z`),dateB:new Date(`2024-08-28T00:00:00.000Z`)}]}),X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date('2024-08-01T00:00:00.000Z');
  return <StaticDaysCalendar baseDate={baseDate} selectedRanges={[{
    dateA: new Date('2024-08-01T00:00:00.000Z'),
    dateB: new Date('2024-08-04T00:00:00.000Z')
  }, {
    dateA: new Date('2024-08-08T00:00:00.000Z'),
    dateB: new Date('2024-08-08T00:00:00.000Z')
  }, {
    dateA: new Date('2024-08-20T00:00:00.000Z'),
    dateB: new Date('2024-08-28T00:00:00.000Z')
  }]} />;
}`,...X.parameters?.docs?.source},description:{story:`Пропс позволяющий указать выбранные интервалы`,...X.parameters?.docs?.description}}};try{X.displayName=`SelectedRanges`,X.__docgenInfo={description:`Пропс позволяющий указать выбранные интервалы`,displayName:`SelectedRanges`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/SelectedRanges.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Z,Q,$;function ce(){return(ce=e((()=>{Z=t(),s(),l(),h(),Q=o(),$=()=>{let e=new Date(`2024-05-01T00:00:00.000Z`),t=new Date(`2024-05-14T00:00:00.000Z`),n=(0,Z.useCallback)(({date:e})=>e>new Date(`2024-05-07T00:00:00.000Z`),[]),r=c({weekday:`short`,year:`2-digit`,month:`short`,day:`2-digit`,timeZone:`UTC`}),i=(0,Z.useCallback)(({date:e})=>r(e),[r]);return(0,Q.jsx)(u,{baseDate:e,productionCalendarStorage:m,renderDayTooltipTitle:i,checkTooltipActive:n,minDate:t,selectedRanges:[{dateA:new Date(`2024-05-06T00:00:00Z`),dateB:new Date(`2024-05-12T00:00:00Z`)},{dateA:new Date(`2024-05-20T00:00:00Z`),dateB:new Date(`2024-05-26T00:00:00Z`)}]})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const baseDate = new Date('2024-05-01T00:00:00.000Z');
  const minDate = new Date('2024-05-14T00:00:00.000Z');
  const handleCheckTooltipActive = useCallback(({
    date
  }: {
    date: Date;
  }) => date > new Date('2024-05-07T00:00:00.000Z'), []);
  const dayFormat = useLocaleDateTimeFormat({
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC'
  });
  const renderDayTooltipTitle = useCallback(({
    date
  }: {
    date: Date;
  }) => dayFormat(date), [dayFormat]);
  return <StaticDaysCalendar baseDate={baseDate} productionCalendarStorage={MAYS_HOLIDAYS} renderDayTooltipTitle={renderDayTooltipTitle} checkTooltipActive={handleCheckTooltipActive} minDate={minDate} selectedRanges={[{
    dateA: new Date('2024-05-06T00:00:00Z'),
    dateB: new Date('2024-05-12T00:00:00Z')
  }, {
    dateA: new Date('2024-05-20T00:00:00Z'),
    dateB: new Date('2024-05-26T00:00:00Z')
  }]} />;
}`,...$.parameters?.docs?.source},description:{story:`Для отображения причины блокировки элемента, необходимо передавать метод checkTooltipActive ответственный за необходимость показ/скрытие тултипа,
так же необходимо передать метод renderDayTooltipTitle ответственный за рендер контента внутри тултипа.
По умолчанию checkTooltipActive работает как !disabled. т.е. тултип скрывается для задизейбленных элементов.`,...$.parameters?.docs?.description}}};try{$.displayName=`ShowDisableReason`,$.__docgenInfo={description:`Для отображения причины блокировки элемента, необходимо передавать метод checkTooltipActive ответственный за необходимость показ/скрытие тултипа,
так же необходимо передать метод renderDayTooltipTitle ответственный за рендер контента внутри тултипа.
По умолчанию checkTooltipActive работает как !disabled. т.е. тултип скрывается для задизейбленных элементов.`,displayName:`ShowDisableReason`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/StaticCalendar/StaticDaysCalendar/stories/ShowDisableReason.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var le,ue;function de(){return(de=e((()=>{l(),f(),v(),x(),w(),ne(),re(),A(),P(),R(),H(),K(),ae(),se(),ce(),le={title:`Date-Pickers/StaticDaysCalendar`,component:u,parameters:{docs:{description:{component:`Компонент для рендера тела календаря дней месяца.
Используется в DatePicker'ах. Так же подойдет для использования в самостоятельном календаре года
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=285-9130)`}}}},ue=[`Interaction`,`BasicUsage`,`SelectedRanges`,`HideOutOfAvailableRangeElements`,`OnDayHover`,`HoveredDate`,`IsMondayFirst`,`OnChange`,`RenderDayTooltipTitle`,`RenderDayContent`,`ProductionCalendarStorage`,`DisabledSelectedRanges`,`ShowDisableReason`,`DragAndDropProps`]})))()}de();export{d as BasicUsage,_ as DisabledSelectedRanges,b as DragAndDropProps,C as HideOutOfAvailableRangeElements,D as HoveredDate,O as Interaction,k as IsMondayFirst,N as OnChange,L as OnDayHover,V as ProductionCalendarStorage,G as RenderDayContent,Y as RenderDayTooltipTitle,X as SelectedRanges,$ as ShowDisableReason,ue as __namedExportsOrder,le as default};