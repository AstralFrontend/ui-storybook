import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-COOA12PR.js";import{n as l,t as u}from"./HintPopover-B5rekLrX.js";var d,f,p;function m(){return(m=e((()=>{d=c(),t(),n(),l(),f=o(),p=()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{ref:e,variant:`contained`,onClick:()=>{n(e=>!e)},children:`Подписать`}),(0,f.jsx)(u,{anchorEl:e.current,isOpen:t,onClose:()=>{n(!1)},placement:`bottom-start`,title:`Подпись документа`,children:(0,f.jsx)(r,{variant:`body1`,children:`Подпишите документ электронной подписью прямо из карточки.`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button ref={anchorRef} variant="contained" onClick={handleToggle}>
        Подписать
      </Button>

      <HintPopover anchorEl={anchorRef.current} isOpen={isOpen} onClose={handleClose} placement="bottom-start" title="Подпись документа">
        <Typography variant="body1">
          Подпишите документ электронной подписью прямо из карточки.
        </Typography>
      </HintPopover>
    </>;
}`,...p.parameters?.docs?.source}}}})))()}var h,g,_;function v(){return(v=e((()=>{h=c(),t(),l(),g=o(),_={render:e=>{let t=(0,h.useRef)(null),[n,r]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{ref:t,variant:`contained`,onClick:()=>{r(e=>!e)},children:`Подписать`}),(0,g.jsx)(u,{...e,anchorEl:t.current,isOpen:n,onClose:()=>r(!1)})]})},args:{variant:`dark`,title:`Подпись документа`,placement:`bottom-start`,children:`Подпишите документ электронной подписью прямо из карточки.`},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const anchorRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };
    return <>
        <Button ref={anchorRef} variant="contained" onClick={handleToggle}>
          Подписать
        </Button>

        <HintPopover {...args} anchorEl={anchorRef.current} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>;
  },
  args: {
    variant: 'dark',
    title: 'Подпись документа',
    placement: 'bottom-start',
    children: 'Подпишите документ электронной подписью прямо из карточки.'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x,S,C;function w(){return(w=e((()=>{y=c(),t(),s(),n(),l(),b=o(),x=[`light`,`dark`],S=i.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  min-height: 320px;
  padding: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`,C=()=>{let e=(0,y.useRef)({light:null,dark:null}),[t,n]=(0,y.useState)({light:!1,dark:!1}),i=e=>()=>{n(t=>({...t,[e]:!t[e]}))},o=e=>()=>{n(t=>({...t,[e]:!1}))};return(0,b.jsx)(S,{children:x.map(n=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(a,{ref:t=>{e.current[n]=t},variant:`outlined`,onClick:i(n),children:n}),(0,b.jsx)(u,{isOpen:t[n],anchorEl:e.current[n],onClose:o(n),placement:`bottom`,variant:n,title:`Фильтры реестра`,disableAutoFocus:!0,children:(0,b.jsx)(r,{variant:`body1`,children:`Отберите документы по дате, статусу и типу.`})})]},n))})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const anchorsRef = useRef<Record<HintPopoverVariant, HTMLButtonElement | null>>({
    light: null,
    dark: null
  });
  const [openMap, setOpenMap] = useState<Record<HintPopoverVariant, boolean>>({
    light: false,
    dark: false
  });
  const handleToggle = (variant: HintPopoverVariant) => () => {
    setOpenMap(prev => ({
      ...prev,
      [variant]: !prev[variant]
    }));
  };
  const handleClose = (variant: HintPopoverVariant) => () => {
    setOpenMap(prev => ({
      ...prev,
      [variant]: false
    }));
  };
  return <Layout>
      {items.map(variant => <Fragment key={variant}>
          <Button ref={el => {
        anchorsRef.current[variant] = el;
      }} variant="outlined" onClick={handleToggle(variant)}>
            {variant}
          </Button>

          <HintPopover isOpen={openMap[variant]} anchorEl={anchorsRef.current[variant]} onClose={handleClose(variant)} placement="bottom" variant={variant} title="Фильтры реестра" disableAutoFocus>
            <Typography variant="body1">
              Отберите документы по дате, статусу и типу.
            </Typography>
          </HintPopover>
        </Fragment>)}
    </Layout>;
}`,...C.parameters?.docs?.source},description:{story:"Демонстрирует два варианта подсказки — `light` и `dark`.",...C.parameters?.docs?.description}}};try{C.displayName=`Variants`,C.__docgenInfo={description:"Демонстрирует два варианта подсказки — `light` и `dark`.",displayName:`Variants`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/Variants.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=e((()=>{t(),s(),T=o(),E=i.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing(2)};
`,D=({secondaryLabel:e,primaryLabel:t,onClose:n})=>(0,T.jsxs)(E,{children:[(0,T.jsx)(a,{variant:`text`,onClick:n,children:e}),(0,T.jsx)(a,{variant:`contained`,onClick:n,children:t})]});try{D.displayName=`ActionFooter`,D.__docgenInfo={description:"Футер для слота `action`",displayName:`ActionFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,methods:[],props:{secondaryLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`secondaryLabel`,required:!0,tags:{},type:{name:`string`}},primaryLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`primaryLabel`,required:!0,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function k(){return(k=e((()=>{O()})))()}var A,j,M;function N(){return(N=e((()=>{A=c(),t(),n(),l(),k(),j=o(),M=()=>{let e=(0,A.useRef)(null),[t,n]=(0,A.useState)(!1),i=()=>{n(e=>!e)},o=()=>{n(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a,{ref:e,variant:`contained`,onClick:i,children:`Отправить`}),(0,j.jsx)(u,{variant:`light`,anchorEl:e.current,isOpen:t,onClose:o,placement:`bottom-start`,title:`Отправка документа`,action:(0,j.jsx)(D,{secondaryLabel:`Отмена`,primaryLabel:`Отправить`,onClose:o}),children:(0,j.jsx)(r,{variant:`body1`,children:`Отправьте подписанный документ контрагенту в один клик.`})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button ref={anchorRef} variant="contained" onClick={handleToggle}>
        Отправить
      </Button>

      <HintPopover variant="light" anchorEl={anchorRef.current} isOpen={isOpen} onClose={handleClose} placement="bottom-start" title="Отправка документа" action={<ActionFooter secondaryLabel="Отмена" primaryLabel="Отправить" onClose={handleClose} />}>
        <Typography variant="body1">
          Отправьте подписанный документ контрагенту в один клик.
        </Typography>
      </HintPopover>
    </>;
}`,...M.parameters?.docs?.source},description:{story:"Параметр `action` добавляет слот с кнопками под контентом.",...M.parameters?.docs?.description}}};try{M.displayName=`WithActions`,M.__docgenInfo={description:"Параметр `action` добавляет слот с кнопками под контентом.",displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I;function L(){return(L=e((()=>{P=c(),t(),n(),l(),F=o(),I=()=>{let e=(0,P.useRef)(null),[t,n]=(0,P.useState)(!1);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a,{ref:e,variant:`contained`,onClick:()=>{n(e=>!e)},children:`Экспорт в Excel`}),(0,F.jsx)(u,{anchorEl:e.current,isOpen:t,onClose:()=>{n(!1)},placement:`bottom-start`,children:(0,F.jsx)(r,{variant:`body1`,children:`Выгрузите текущий реестр документов в таблицу Excel.`})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button ref={anchorRef} variant="contained" onClick={handleToggle}>
        Экспорт в Excel
      </Button>

      <HintPopover anchorEl={anchorRef.current} isOpen={isOpen} onClose={handleClose} placement="bottom-start">
        <Typography variant="body1">
          Выгрузите текущий реестр документов в таблицу Excel.
        </Typography>
      </HintPopover>
    </>;
}`,...I.parameters?.docs?.source},description:{story:"Параметр `title` опционален.",...I.parameters?.docs?.description}}};try{I.displayName=`WithoutTitle`,I.__docgenInfo={description:"Параметр `title` опционален.",displayName:`WithoutTitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/WithoutTitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{l(),m(),v(),w(),N(),L(),R={title:`Popovers-and-Tooltips/Popover/HintPopover`,component:u,parameters:{docs:{description:{component:`Поповер-подсказка, привязанная к элементу: подсвечивает возможность интерфейса.
Используется в Onboarding и обучающих подсказках.`}}}},z=[`BasicUsage`,`Variants`,`WithActions`,`WithoutTitle`,`Interaction`]})))()}B();export{p as BasicUsage,_ as Interaction,C as Variants,M as WithActions,I as WithoutTitle,z as __namedExportsOrder,R as default};