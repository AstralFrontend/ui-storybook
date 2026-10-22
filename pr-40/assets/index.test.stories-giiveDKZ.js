import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as i,ji as a,ln as o,xa as s,yn as c}from"./preview-DbSmHAJq.js";import{s as l,t as u}from"./DataGrid-DoeK_EX9.js";import{n as d,t as f}from"./OverflowTypography-CzGUowdn.js";import{t as p}from"./GuidTypography-BnxHXwIc.js";import{t as m}from"./GuidTypography-BNggK_Vc.js";import{t as h}from"./Filename-xCsfuhrr.js";import{t as g}from"./Filename-8-lHELjI.js";var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{_=t(),n(),u(),g(),m(),c(),r(),d(),v=s(),y=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut, voluptatum dolorem`,b=`3f2504e0-4f89-11d3-9a0c-0305e82c3301`,x=`Очень длинное название документа для проверки обрезки.pdf`,S=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  /* body в storybook не скроллится, поэтому скролл внутри списка кейсов */
  overflow-y: auto;

  max-width: 900px;
  max-height: calc(100vh - 32px);
`,C=a.div`
  resize: horizontal;
  overflow: hidden;

  width: 240px;
  min-width: 60px;
  max-width: 100%;
  padding: ${({theme:e})=>e.spacing(2)};

  border: 1px dashed ${({theme:e})=>e.palette.grey[400]};
`,w=({title:e,hint:t,children:n})=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(i,{variant:`h6`,children:e}),(0,v.jsx)(i,{variant:`caption`,color:`textSecondary`,paragraph:!0,children:t}),n]}),T=[{id:`1`,name:`Договор №1`,recipient:`ООО «Волшебные документы»`},{id:`2`,name:`Дополнительное соглашение к договору поставки №12345678`,recipient:`ИП Иванов Иван Иванович`}],E=[{field:`name`,label:`Наименование`},{field:`recipient`,label:`Получатель`}],D=()=>{let[e,t]=(0,_.useState)(1),[n,r]=(0,_.useState)(`—`),[a,s]=(0,_.useState)(`—`),[c,u]=(0,_.useState)(0),d=(0,_.useCallback)(e=>r(e?.tagName??`—`),[]),m=(0,_.useCallback)(e=>s(e?.tagName??`—`),[]);return(0,v.jsxs)(S,{children:[(0,v.jsx)(i,{children:`Все контейнеры с пунктирной рамкой можно растягивать за правый нижний угол. Tooltip должен появляться только тогда, когда текст обрезан в момент наведения.`}),(0,v.jsx)(w,{title:`OverflowTypography: одна строка`,hint:`Растяните контейнер так, чтобы текст поместился, затем сузьте обратно`,children:(0,v.jsx)(C,{children:(0,v.jsx)(f,{children:y})})}),(0,v.jsxs)(w,{title:`OverflowTypography: смена rowsCount без перемонтирования`,hint:`Переключите rowsCount на 2: текст, обрезанный по высоте, должен показывать tooltip`,children:[(0,v.jsxs)(o,{variant:`light`,onClick:()=>t(e=>e===1?2:1),children:[`rowsCount=`,e]}),(0,v.jsx)(C,{children:(0,v.jsx)(f,{rowsCount:e,children:y})})]}),(0,v.jsx)(w,{title:`OverflowTypography: visibleLastSymbolsCount`,hint:`Последние 6 символов всегда видны, обрезается начало`,children:(0,v.jsx)(C,{children:(0,v.jsx)(f,{visibleLastSymbolsCount:6,children:y})})}),(0,v.jsx)(w,{title:`OverflowTypography: свой контент tooltip`,hint:`При обрезке tooltip показывает переданный title, а не текст`,children:(0,v.jsx)(C,{children:(0,v.jsx)(f,{tooltipProps:{title:`Свой контент tooltip`},children:y})})}),(0,v.jsx)(w,{title:`GuidTypography`,hint:`Раньше tooltip не реагировал на изменение ширины после появления`,children:(0,v.jsx)(C,{children:(0,v.jsx)(p,{children:b})})}),(0,v.jsx)(w,{title:`GuidTypography: canCopy`,hint:`Tooltip копирования показывается всегда, полный GUID в нём не дублируется`,children:(0,v.jsx)(C,{children:(0,v.jsx)(p,{canCopy:!0,children:b})})}),(0,v.jsx)(w,{title:`Filename`,hint:`Расширение и последние символы имени всегда видны`,children:(0,v.jsx)(C,{children:(0,v.jsx)(h,{children:x})})}),(0,v.jsx)(w,{title:`DataGrid: ячейки и заголовки (rowsCount=2)`,hint:`Сузьте таблицу: tooltip появляется только у ячеек, не поместившихся в 2 строки`,children:(0,v.jsx)(C,{style:{width:600},children:(0,v.jsx)(l,{keyId:`id`,rows:T,columns:E,onRetry:()=>{}})})}),(0,v.jsxs)(w,{title:`ref-функция`,hint:`Раньше ref-функция не получала DOM-элемент`,children:[(0,v.jsxs)(C,{children:[(0,v.jsx)(f,{ref:d,children:y}),(0,v.jsx)(h,{ref:m,children:x})]}),(0,v.jsxs)(i,{variant:`caption`,children:[`OverflowTypography: `,n,`, Filename: `,a]})]}),(0,v.jsxs)(w,{title:`onMouseOver продукта`,hint:`Счётчик увеличивается на 1 за каждое наведение`,children:[(0,v.jsx)(C,{children:(0,v.jsx)(f,{onMouseOver:()=>u(e=>e+1),children:y})}),(0,v.jsxs)(i,{variant:`caption`,children:[`Вызовов onMouseOver: `,c]})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [rowsCount, setRowsCount] = useState(1);
  const [overflowRefTag, setOverflowRefTag] = useState('—');
  const [filenameRefTag, setFilenameRefTag] = useState('—');
  const [mouseOverCount, setMouseOverCount] = useState(0);

  // Стабильные ref-функции, чтобы не вызывать их на каждый рендер
  const overflowRef = useCallback((node: HTMLElement | null) => setOverflowRefTag(node?.tagName ?? '—'), []);
  const filenameRef = useCallback((node: HTMLElement | null) => setFilenameRefTag(node?.tagName ?? '—'), []);
  return <CasesList>
      <Typography>
        Все контейнеры с пунктирной рамкой можно растягивать за правый нижний
        угол. Tooltip должен появляться только тогда, когда текст обрезан в
        момент наведения.
      </Typography>

      <Case title="OverflowTypography: одна строка" hint="Растяните контейнер так, чтобы текст поместился, затем сузьте обратно">
        <ResizableBox>
          <OverflowTypography>{TEXT}</OverflowTypography>
        </ResizableBox>
      </Case>

      <Case title="OverflowTypography: смена rowsCount без перемонтирования" hint="Переключите rowsCount на 2: текст, обрезанный по высоте, должен показывать tooltip">
        <Button variant="light" onClick={() => setRowsCount(count => count === 1 ? 2 : 1)}>
          rowsCount={rowsCount}
        </Button>
        <ResizableBox>
          <OverflowTypography rowsCount={rowsCount}>{TEXT}</OverflowTypography>
        </ResizableBox>
      </Case>

      <Case title="OverflowTypography: visibleLastSymbolsCount" hint="Последние 6 символов всегда видны, обрезается начало">
        <ResizableBox>
          <OverflowTypography visibleLastSymbolsCount={6}>
            {TEXT}
          </OverflowTypography>
        </ResizableBox>
      </Case>

      <Case title="OverflowTypography: свой контент tooltip" hint="При обрезке tooltip показывает переданный title, а не текст">
        <ResizableBox>
          <OverflowTypography tooltipProps={{
          title: 'Свой контент tooltip'
        }}>
            {TEXT}
          </OverflowTypography>
        </ResizableBox>
      </Case>

      <Case title="GuidTypography" hint="Раньше tooltip не реагировал на изменение ширины после появления">
        <ResizableBox>
          <GuidTypography>{GUID}</GuidTypography>
        </ResizableBox>
      </Case>

      <Case title="GuidTypography: canCopy" hint="Tooltip копирования показывается всегда, полный GUID в нём не дублируется">
        <ResizableBox>
          <GuidTypography canCopy>{GUID}</GuidTypography>
        </ResizableBox>
      </Case>

      <Case title="Filename" hint="Расширение и последние символы имени всегда видны">
        <ResizableBox>
          <Filename>{FILE_NAME}</Filename>
        </ResizableBox>
      </Case>

      <Case title="DataGrid: ячейки и заголовки (rowsCount=2)" hint="Сузьте таблицу: tooltip появляется только у ячеек, не поместившихся в 2 строки">
        <ResizableBox style={{
        width: 600
      }}>
          <DataGrid<GridRow> keyId="id" rows={GRID_ROWS} columns={GRID_COLUMNS} onRetry={() => {}} />
        </ResizableBox>
      </Case>

      <Case title="ref-функция" hint="Раньше ref-функция не получала DOM-элемент">
        <ResizableBox>
          <OverflowTypography ref={overflowRef}>{TEXT}</OverflowTypography>
          <Filename ref={filenameRef}>{FILE_NAME}</Filename>
        </ResizableBox>
        <Typography variant="caption">
          OverflowTypography: {overflowRefTag}, Filename: {filenameRefTag}
        </Typography>
      </Case>

      <Case title="onMouseOver продукта" hint="Счётчик увеличивается на 1 за каждое наведение">
        <ResizableBox>
          <OverflowTypography onMouseOver={() => setMouseOverCount(count => count + 1)}>
            {TEXT}
          </OverflowTypography>
        </ResizableBox>
        <Typography variant="caption">
          Вызовов onMouseOver: {mouseOverCount}
        </Typography>
      </Case>
    </CasesList>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A,j,M;function N(){return(N=e((()=>{c(),r(),d(),k=s(),A=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(5)};
  
  max-width: 300px;
`,j=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut`,M=()=>(0,k.jsxs)(A,{children:[(0,k.jsx)(f,{variant:`h1`,children:j}),(0,k.jsx)(f,{variant:`h2`,children:j}),(0,k.jsx)(f,{variant:`h3`,children:j}),(0,k.jsx)(f,{variant:`h4`,children:j}),(0,k.jsx)(f,{variant:`h5`,children:j}),(0,k.jsx)(f,{variant:`h6`,children:j}),(0,k.jsx)(f,{variant:`subtitle1`,children:j}),(0,k.jsx)(f,{variant:`subtitle2`,children:j}),(0,k.jsxs)(f,{children:[` `,j]}),(0,k.jsx)(f,{variant:`body1`,children:j}),(0,k.jsx)(f,{variant:`button`,children:j}),(0,k.jsx)(f,{variant:`caption`,children:j}),(0,k.jsx)(f,{variant:`pointer`,children:j}),(0,k.jsxs)(f,{variant:`link`,children:[` `,j]}),(0,k.jsx)(i,{variant:`h3`,children:(0,k.jsx)(f,{variant:`inherit`,children:j})})]}),A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`styled.div\`
  display: flex;
  flex-direction: column;
  gap: \${({
  theme
}) => theme.spacing(5)};
  
  max-width: 300px;
\``,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <OverflowTypography variant="h1">{Text}</OverflowTypography>

    <OverflowTypography variant="h2">{Text}</OverflowTypography>

    <OverflowTypography variant="h3">{Text}</OverflowTypography>

    <OverflowTypography variant="h4">{Text}</OverflowTypography>

    <OverflowTypography variant="h5">{Text}</OverflowTypography>

    <OverflowTypography variant="h6">{Text}</OverflowTypography>

    <OverflowTypography variant="subtitle1">{Text}</OverflowTypography>

    <OverflowTypography variant="subtitle2">{Text}</OverflowTypography>

    <OverflowTypography> {Text}</OverflowTypography>

    <OverflowTypography variant="body1">{Text}</OverflowTypography>

    <OverflowTypography variant="button">{Text}</OverflowTypography>

    <OverflowTypography variant="caption">{Text}</OverflowTypography>

    <OverflowTypography variant="pointer">{Text}</OverflowTypography>

    <OverflowTypography variant="link"> {Text}</OverflowTypography>

    <Typography variant="h3">
      <OverflowTypography variant="inherit">{Text}</OverflowTypography>
    </Typography>
  </StoryWrapper>`,...M.parameters?.docs?.source}}};try{A.displayName=`StoryWrapper`,A.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/OverflowTypography/stories/testsStories/VariantsWithOverflow.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var P,F,I,L;function R(){return(R=e((()=>{c(),r(),d(),P=s(),F=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(5)};
`,I=`Not enough long text`,L=()=>(0,P.jsxs)(F,{children:[(0,P.jsx)(f,{variant:`h1`,children:I}),(0,P.jsx)(f,{variant:`h2`,children:I}),(0,P.jsx)(f,{variant:`h3`,children:I}),(0,P.jsx)(f,{variant:`h4`,children:I}),(0,P.jsx)(f,{variant:`h5`,children:I}),(0,P.jsx)(f,{variant:`h6`,children:I}),(0,P.jsx)(f,{variant:`subtitle1`,children:I}),(0,P.jsx)(f,{variant:`subtitle2`,children:I}),(0,P.jsx)(f,{children:I}),(0,P.jsx)(f,{variant:`body1`,children:I}),(0,P.jsx)(f,{variant:`button`,children:I}),(0,P.jsx)(f,{variant:`caption`,children:I}),(0,P.jsx)(f,{variant:`pointer`,children:I}),(0,P.jsx)(f,{variant:`link`,children:I}),(0,P.jsx)(i,{variant:`h3`,children:(0,P.jsx)(f,{variant:`inherit`,children:I})})]}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`styled.div\`
  display: flex;
  flex-direction: column;
  gap: \${({
  theme
}) => theme.spacing(5)};
\``,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <OverflowTypography variant="h1">{Text}</OverflowTypography>

    <OverflowTypography variant="h2">{Text}</OverflowTypography>

    <OverflowTypography variant="h3">{Text}</OverflowTypography>

    <OverflowTypography variant="h4">{Text}</OverflowTypography>

    <OverflowTypography variant="h5">{Text}</OverflowTypography>

    <OverflowTypography variant="h6">{Text}</OverflowTypography>

    <OverflowTypography variant="subtitle1">{Text}</OverflowTypography>

    <OverflowTypography variant="subtitle2">{Text}</OverflowTypography>

    <OverflowTypography>{Text}</OverflowTypography>

    <OverflowTypography variant="body1">{Text}</OverflowTypography>

    <OverflowTypography variant="button">{Text}</OverflowTypography>

    <OverflowTypography variant="caption">{Text}</OverflowTypography>

    <OverflowTypography variant="pointer">{Text}</OverflowTypography>

    <OverflowTypography variant="link">{Text}</OverflowTypography>

    <Typography variant="h3">
      <OverflowTypography variant="inherit">{Text}</OverflowTypography>
    </Typography>
  </StoryWrapper>`,...L.parameters?.docs?.source}}};try{F.displayName=`StoryWrapper`,F.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/OverflowTypography/stories/testsStories/VariantsWithoutOverflow.story.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}var z,B;function V(){return(V=e((()=>{d(),O(),N(),R(),z={title:`Typography/OverflowTypography/Tests`,component:f},B=[`OverflowCases`,`VariantsWithoutOverflow`,`VariantsWithOverflow`]})))()}V();export{D as OverflowCases,M as VariantsWithOverflow,L as VariantsWithoutOverflow,B as __namedExportsOrder,z as default};