import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as i,ji as a,ln as o,xa as s,yn as c}from"./preview-D6B29sG_.js";import{n as l,t as u}from"./HintPopover-BZKjpQPc.js";var d,f,p;function m(){return(m=e((()=>{d=t(),n(),r(),l(),f=s(),p=()=>{let e=(0,d.useRef)(null),[t,n]=(0,d.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{ref:e,variant:`contained`,onClick:()=>{n(e=>!e)},children:`Подписать`}),(0,f.jsx)(u,{anchorEl:e.current,isOpen:t,onClose:()=>{n(!1)},placement:`bottom-start`,title:`Подпись документа`,children:(0,f.jsx)(i,{variant:`body1`,children:`Подпишите документ электронной подписью прямо из карточки.`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}}})))()}var h,g,_;function v(){return(v=e((()=>{h=t(),n(),l(),g=s(),_={render:e=>{let t=(0,h.useRef)(null),[n,r]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{ref:t,variant:`contained`,onClick:()=>{r(e=>!e)},children:`Подписать`}),(0,g.jsx)(u,{...e,anchorEl:t.current,isOpen:n,onClose:()=>r(!1)})]})},args:{variant:`dark`,title:`Подпись документа`,placement:`bottom-start`,children:`Подпишите документ электронной подписью прямо из карточки.`},parameters:{docs:{disable:!0}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}var y,b,x,S,C;function w(){return(w=e((()=>{y=t(),n(),c(),r(),l(),b=s(),x=[`light`,`dark`],S=a.div`
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
`,C=()=>{let e=(0,y.useRef)({light:null,dark:null}),[t,n]=(0,y.useState)({light:!1,dark:!1}),r=e=>()=>{n(t=>({...t,[e]:!t[e]}))},a=e=>()=>{n(t=>({...t,[e]:!1}))};return(0,b.jsx)(S,{children:x.map(n=>(0,b.jsxs)(y.Fragment,{children:[(0,b.jsx)(o,{ref:t=>{e.current[n]=t},variant:`outlined`,onClick:r(n),children:n}),(0,b.jsx)(u,{isOpen:t[n],anchorEl:e.current[n],onClose:a(n),placement:`bottom`,variant:n,title:`Фильтры реестра`,disableAutoFocus:!0,children:(0,b.jsx)(i,{variant:`body1`,children:`Отберите документы по дате, статусу и типу.`})})]},n))})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source},description:{story:"Демонстрирует два варианта подсказки — `light` и `dark`.",...C.parameters?.docs?.description}}};try{C.displayName=`Variants`,C.__docgenInfo={description:"Демонстрирует два варианта подсказки — `light` и `dark`.",displayName:`Variants`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/Variants.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D;function O(){return(O=e((()=>{n(),c(),T=s(),E=a.div`
  display: flex;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing(2)};
`,D=({secondaryLabel:e,primaryLabel:t,onClose:n})=>(0,T.jsxs)(E,{children:[(0,T.jsx)(o,{variant:`text`,onClick:n,children:e}),(0,T.jsx)(o,{variant:`contained`,onClick:n,children:t})]});try{D.displayName=`ActionFooter`,D.__docgenInfo={description:"Футер для слота `action`",displayName:`ActionFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,methods:[],props:{secondaryLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`secondaryLabel`,required:!0,tags:{},type:{name:`string`}},primaryLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`primaryLabel`,required:!0,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/common/ActionFooter.tsx`,name:`TypeLiteral`}],description:``,name:`onClose`,required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}function k(){return(k=e((()=>{O()})))()}var A,j,M;function N(){return(N=e((()=>{A=t(),n(),r(),l(),k(),j=s(),M=()=>{let e=(0,A.useRef)(null),[t,n]=(0,A.useState)(!1),r=()=>{n(e=>!e)},a=()=>{n(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o,{ref:e,variant:`contained`,onClick:r,children:`Отправить`}),(0,j.jsx)(u,{variant:`light`,anchorEl:e.current,isOpen:t,onClose:a,placement:`bottom-start`,title:`Отправка документа`,action:(0,j.jsx)(D,{secondaryLabel:`Отмена`,primaryLabel:`Отправить`,onClose:a}),children:(0,j.jsx)(i,{variant:`body1`,children:`Отправьте подписанный документ контрагенту в один клик.`})})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source},description:{story:"Параметр `action` добавляет слот с кнопками под контентом.",...M.parameters?.docs?.description}}};try{M.displayName=`WithActions`,M.__docgenInfo={description:"Параметр `action` добавляет слот с кнопками под контентом.",displayName:`WithActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/HintPopover/stories/WithActions.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I;function L(){return(L=e((()=>{P=t(),n(),r(),l(),F=s(),I=()=>{let e=(0,P.useRef)(null),[t,n]=(0,P.useState)(!1);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{ref:e,variant:`contained`,onClick:()=>{n(e=>!e)},children:`Экспорт в Excel`}),(0,F.jsx)(u,{anchorEl:e.current,isOpen:t,onClose:()=>{n(!1)},placement:`bottom-start`,children:(0,F.jsx)(i,{variant:`body1`,children:`Выгрузите текущий реестр документов в таблицу Excel.`})})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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