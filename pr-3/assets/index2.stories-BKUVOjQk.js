import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,it as ee,ji as o,ln as s,lt as te,rt as ne,xa as c,yn as l}from"./preview-Cav_CXYC.js";import{n as u,t as d}from"./NewPopover-DmrLDTvE.js";import{t as f}from"./TextField-CXScwDeD.js";import{t as re}from"./Switch-CSVisSQt.js";import{t as ie}from"./TextField-Bu_cuc0y.js";import{n as ae,t as oe}from"./InfoFillMd-CzsWnBcH.js";import{n as se,t as ce}from"./FormControlLabel-Cm-JNQaW.js";import{t as le}from"./ComplianceStatus-CtoqcHLE.js";import{t as ue}from"./ComplianceStatus-Dl7s5wiL.js";import{t as de}from"./Paper-mo_nZYQR.js";import{t as fe}from"./Paper-CTAumL__.js";import{t as pe}from"./Fieldset-J1-Su_uC.js";import{t as me}from"./Fieldset-C3i5wj9v.js";import{t as he}from"./PasswordField-D3mawJ_D.js";import{t as ge}from"./PasswordField-D6BWDgzv.js";import{t as _e}from"./Switch-CRrwIKUg.js";import{a as ve,i as ye,n as be,r as p,t as m}from"./common-B5iAgg1C.js";var xe,h,g;function _(){return(_=e((()=>{xe=t(),n(),u(),m(),h=c(),g=()=>{let[e,t]=(0,xe.useState)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Действия с документом`}),(0,h.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:`bottom-start`,title:`Действия с документом`,children:(0,h.jsx)(p,{})})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Button variant="contained" onClick={handleClick}>
        Действия с документом
      </Button>

      <NewPopover anchorEl={anchorEl} onClose={handleClose} placement="bottom-start" title="Действия с документом">
        <DocumentActionsContent />
      </NewPopover>
    </>;
}`,...g.parameters?.docs?.source},description:{story:`На мобильных устройствах меню выезжает снизу экрана. Заголовок задаётся
свойством title.`,...g.parameters?.docs?.description}}};try{g.displayName=`BasicUsage`,g.__docgenInfo={description:`На мобильных устройствах меню выезжает снизу экрана. Заголовок задаётся
свойством title.`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var v,y,b,x;function S(){return(S=e((()=>{v=t(),ue(),ge(),u(),y=c(),b=[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`},{status:`loading`,text:`Не должен совпадать со старым паролем`}],x=()=>{let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(!1),[r,i]=(0,v.useState)(``);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{ref:e,children:(0,y.jsx)(he,{label:`Новый пароль`,value:r,onChange:e=>i(e.target.value),onFocus:()=>n(!0),onBlur:()=>n(!1),inputProps:{autoComplete:`off`}})}),(0,y.jsx)(d,{isOpen:t,anchorEl:e.current,placement:`right-start`,disableAutoFocus:!0,style:{margin:`20px 0 0 8px`},children:(0,y.jsx)(le,{title:`Требования к паролю`,itemsList:b})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  return <>
      <div ref={fieldRef}>
        <PasswordField label="Новый пароль" value={password} onChange={event => setPassword(event.target.value)} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)} inputProps={{
        autoComplete: 'off'
      }} />
      </div>

      <NewPopover isOpen={isOpen} anchorEl={fieldRef.current} placement="right-start" disableAutoFocus style={{
      margin: '20px 0 0 8px'
    }}>
        <ComplianceStatus title="Требования к паролю" itemsList={passwordRequirements} />
      </NewPopover>
    </>;
}`,...x.parameters?.docs?.source},description:{story:`При фокусе на поле пароля показываются требования в popover.`,...x.parameters?.docs?.description}}};try{x.displayName=`Controlled`,x.__docgenInfo={description:`При фокусе на поле пароля показываются требования в popover.`,displayName:`Controlled`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/Controlled.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{C=t(),n(),l(),i(),u(),m(),w=c(),T=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(10)};
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,D=()=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Меню действий (disableAutoFocus=false)`}),(0,w.jsx)(a,{variant:`body1`,color:`textSecondary`,children:"По умолчанию `disableAutoFocus=false`, и при открытии фокус переходит на первый интерактивный элемент. Это стандарт для выпадающих списков, позволяющий сразу управлять меню с клавиатуры."})]}),O=()=>(0,w.jsxs)(`div`,{children:[(0,w.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Информационная подсказка (disableAutoFocus=true)`}),(0,w.jsx)(a,{variant:`body1`,color:`textSecondary`,children:"При `disableAutoFocus=true` фокус остаётся на кнопке-триггере. Это удобно для справочных материалов: пользователь может закрыть подсказку повторным кликом на ту же кнопку или клавишей Escape, не теряя фокус."})]}),k=()=>{let[e,t]=(0,C.useState)(null),[n,r]=(0,C.useState)(null);return(0,w.jsxs)(T,{children:[(0,w.jsxs)(E,{children:[(0,w.jsx)(D,{}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(s,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Действия`}),(0,w.jsx)(d,{anchorEl:e,onClose:()=>t(null),placement:`bottom-start`,title:`Действия`,children:(0,w.jsx)(p,{})})]})]}),(0,w.jsxs)(E,{children:[(0,w.jsx)(O,{}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(s,{variant:`outlined`,onClick:e=>{r(n?null:e.currentTarget)},children:n?`Скрыть`:`Справка`}),(0,w.jsx)(d,{anchorEl:n,onClose:()=>r(null),placement:`bottom-start`,disableAutoFocus:!0,children:(0,w.jsx)(ye,{})})]})]})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [helpAnchorEl, setHelpAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(e.currentTarget);
  };
  const handleHelpToggle = (e: MouseEvent<HTMLButtonElement>) => {
    setHelpAnchorEl(helpAnchorEl ? null : e.currentTarget);
  };
  return <StoryLayout>
      <ExampleSection>
        <AutoFocusFalseDescription />
        <div>
          <Button variant="contained" onClick={handleMenuOpen}>
            Действия
          </Button>
          <NewPopover anchorEl={menuAnchorEl} onClose={() => setMenuAnchorEl(null)} placement="bottom-start" title="Действия">
            <DocumentActionsContent />
          </NewPopover>
        </div>
      </ExampleSection>

      <ExampleSection>
        <AutoFocusTrueDescription />
        <div>
          <Button variant="outlined" onClick={handleHelpToggle}>
            {helpAnchorEl ? 'Скрыть' : 'Справка'}
          </Button>
          <NewPopover anchorEl={helpAnchorEl} onClose={() => setHelpAnchorEl(null)} placement="bottom-start" disableAutoFocus>
            <StatusHelpContent />
          </NewPopover>
        </div>
      </ExampleSection>
    </StoryLayout>;
}`,...k.parameters?.docs?.source},description:{story:"Свойство `disableAutoFocus` управляет автоматической установкой фокуса при открытии Popover.\nПо умолчанию `disableAutoFocus=false`, фокус переходит на первый интерактивный элемент.\nПри `disableAutoFocus=true` фокус остается на элементе.",...k.parameters?.docs?.description}}};try{k.displayName=`DisableAutoFocus`,k.__docgenInfo={description:"Свойство `disableAutoFocus` управляет автоматической установкой фокуса при открытии Popover.\nПо умолчанию `disableAutoFocus=false`, фокус переходит на первый интерактивный элемент.\nПри `disableAutoFocus=true` фокус остается на элементе.",displayName:`DisableAutoFocus`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/DisableAutoFocus.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j=t(),oe(),me(),ce(),r(),ne(),fe(),_e(),l(),ie(),i(),u(),m(),M=c(),N=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,P=o(de)`
  width: 400px;
  max-height: 200px;
  overflow: auto;
  position: relative;
  padding: ${({theme:e})=>e.spacing(4)};
`,F=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(2)};
  padding-top: ${({theme:e})=>e.spacing(2)};
`,I=({checked:e,onChange:t})=>(0,M.jsx)(se,{control:(0,M.jsx)(re,{checked:e,onChange:t}),label:`disablePortal`}),L=()=>(0,M.jsx)(a,{variant:`body1`,color:`textSecondary`,children:`Сведения о доходах физических лиц`}),R=({onInfoClick:e})=>(0,M.jsx)(pe,{title:`6-НДФЛ · март 2025`,children:(0,M.jsxs)(te,{container:!0,spacing:4,columns:1,children:[(0,M.jsxs)(F,{children:[(0,M.jsx)(L,{}),(0,M.jsx)(ee,{variant:`text`,onClick:e,children:(0,M.jsx)(ae,{color:`primary`})})]}),(0,M.jsx)(f,{label:`Период`,placeholder:`март 2025`}),(0,M.jsx)(f,{label:`Организация`,placeholder:`ООО Ромашка`})]})}),z=()=>{let[e,t]=(0,j.useState)(!0),[n,r]=(0,j.useState)(null);return(0,M.jsxs)(N,{children:[(0,M.jsx)(I,{checked:e,onChange:(e,n)=>{t(n),r(null)}}),(0,M.jsxs)(P,{variant:`outlined`,children:[(0,M.jsx)(R,{onInfoClick:e=>{r(e.currentTarget)}}),(0,M.jsx)(d,{anchorEl:n,onClose:()=>{r(null)},disablePortal:e,children:(0,M.jsx)(ye,{})},String(e))]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const [disablePortal, setDisablePortal] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleSwitchChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setDisablePortal(checked);
    setAnchorEl(null);
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Root>
      <PortalSwitch checked={disablePortal} onChange={handleSwitchChange} />

      <ClipBox variant="outlined">
        <TaxReportForm onInfoClick={handleClick} />

        <NewPopover key={String(disablePortal)} anchorEl={anchorEl} onClose={handleClose} disablePortal={disablePortal}>
          <StatusHelpContent />
        </NewPopover>
      </ClipBox>
    </Root>;
}`,...z.parameters?.docs?.source},description:{story:"Свойство `disablePortal` отключает использование портала для Popover.\nПри `disablePortal=true` компонент рендерится в DOM-дереве по месту вызова, что позволяет ему прокручиваться вместе с родительским контейнером.",...z.parameters?.docs?.description}}};try{z.displayName=`DisablePortal`,z.__docgenInfo={description:"Свойство `disablePortal` отключает использование портала для Popover.\nПри `disablePortal=true` компонент рендерится в DOM-дереве по месту вызова, что позволяет ему прокручиваться вместе с родительским контейнером.",displayName:`DisablePortal`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/DisablePortal.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Se,V,H,U;function Ce(){return(Ce=e((()=>{Se=t(),n(),l(),u(),m(),V=c(),H=o.div`
  padding: ${({theme:e})=>e.spacing(8)};
`,U={args:{isOpen:!0,placement:`bottom-start`,children:(0,V.jsx)(ve,{}),disableAutoFocus:!1,disablePortal:!1},render:e=>{let[t,n]=(0,Se.useState)(null);return(0,V.jsxs)(H,{children:[(0,V.jsx)(s,{ref:n,variant:`outlined`,children:`Фильтры`}),(0,V.jsx)(d,{...e,anchorEl:t})]})},parameters:{docs:{disable:!0}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    placement: 'bottom-start',
    children: <TableFiltersContent />,
    disableAutoFocus: false,
    disablePortal: false
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    return <StoryRoot>
        <Button ref={setAnchorEl} variant="outlined">
          Фильтры
        </Button>

        <NewPopover {...args} anchorEl={anchorEl} />
      </StoryRoot>;
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...U.parameters?.docs?.source}}}})))()}var W,G,K,we,Te,Ee,De,Oe,ke,q,Ae,J,Y,je,X;function Me(){return(Me=e((()=>{W=t(),n(),l(),u(),m(),G=c(),K={TOP_START:`top-start`,TOP:`top`,TOP_END:`top-end`,LEFT_START:`left-start`,LEFT:`left`,LEFT_END:`left-end`,RIGHT_START:`right-start`,RIGHT:`right`,RIGHT_END:`right-end`,BOTTOM_START:`bottom-start`,BOTTOM:`bottom`,BOTTOM_END:`bottom-end`},we=[K.TOP_START,K.TOP,K.TOP_END],Te=[K.LEFT_START,K.LEFT,K.LEFT_END],Ee=[K.RIGHT_START,K.RIGHT,K.RIGHT_END],De=[K.BOTTOM_START,K.BOTTOM,K.BOTTOM_END],Oe=o.div`
  max-width: 500px;
`,ke=o.div`
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.large};
  margin-top: ${({theme:e})=>e.spacing(4)};
  padding: ${({theme:e})=>e.spacing(3)};
  width: 500px;
`,q=o.div`
  display: flex;
  justify-content: center;
`,Ae=o.div`
  display: flex;
  justify-content: space-between;
  margin: ${({theme:e})=>e.spacing(2)} 0;
`,J=o.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$alignEnd:e})=>e?`flex-end`:`flex-start`};
  gap: ${({theme:e})=>e.spacing(2)};

`,Y=o(s)`
  min-width: 96px;
`,je=({onPlacementClick:e})=>(0,G.jsxs)(ke,{children:[(0,G.jsx)(q,{children:we.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))}),(0,G.jsxs)(Ae,{children:[(0,G.jsx)(J,{children:Te.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))}),(0,G.jsx)(J,{$alignEnd:!0,children:Ee.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))})]}),(0,G.jsx)(q,{children:De.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))})]}),X=()=>{let[e,t]=(0,W.useState)(null),[n,r]=(0,W.useState)(K.BOTTOM);return(0,G.jsxs)(Oe,{children:[(0,G.jsx)(je,{onPlacementClick:e=>n=>{r(e),t(n.currentTarget)}}),(0,G.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:n,children:(0,G.jsx)(ve,{})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [placement, setPlacement] = useState<PlacementValue>(PLACEMENT.BOTTOM);
  const handlePlacementClick = (nextPlacement: PlacementValue) => (event: MouseEvent<HTMLButtonElement>) => {
    setPlacement(nextPlacement);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <StoryLayout>
      <PlacementControls onPlacementClick={handlePlacementClick} />

      <NewPopover anchorEl={anchorEl} onClose={handleClose} placement={placement}>
        <TableFiltersContent />
      </NewPopover>
    </StoryLayout>;
}`,...X.parameters?.docs?.source},description:{story:"Свойство `placement` определяет положение Popover относительно элемента.\nДоступно 12 вариантов позиционирования.",...X.parameters?.docs?.description}}};try{X.displayName=`Placement`,X.__docgenInfo={description:"Свойство `placement` определяет положение Popover относительно элемента.\nДоступно 12 вариантов позиционирования.",displayName:`Placement`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/Placement.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ne,Z,Q;function Pe(){return(Pe=e((()=>{Ne=t(),n(),u(),m(),Z=c(),Q=()=>{let[e,t]=(0,Ne.useState)(null);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(s,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Показать документ`}),(0,Z.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:`bottom-start`,hasArrow:!0,children:(0,Z.jsx)(be,{})})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Button variant="contained" onClick={handleClick}>
        Показать документ
      </Button>

      <NewPopover anchorEl={anchorEl} onClose={handleClose} placement="bottom-start" hasArrow>
        <ArrowHintContent />
      </NewPopover>
    </>;
}`,...Q.parameters?.docs?.source},description:{story:"Свойство `hasArrow` добавляет стрелку, указывающую на элемент. Стрелка следует\nза `placement` и прячется, если элемент ушёл за пределы вьюпорта.",...Q.parameters?.docs?.description}}};try{Q.displayName=`WithArrow`,Q.__docgenInfo={description:"Свойство `hasArrow` добавляет стрелку, указывающую на элемент. Стрелка следует\nза `placement` и прячется, если элемент ушёл за пределы вьюпорта.",displayName:`WithArrow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/WithArrow.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Fe,Ie;function $(){return($=e((()=>{u(),_(),S(),A(),B(),Ce(),Me(),Pe(),Fe={title:`Popovers-and-Tooltips/Popover/NewPopover`,component:d},Ie=[`BasicUsage`,`Controlled`,`Placement`,`WithArrow`,`DisablePortal`,`DisableAutoFocus`,`Interaction`]})))()}$();export{g as BasicUsage,x as Controlled,k as DisableAutoFocus,z as DisablePortal,U as Interaction,X as Placement,Q as WithArrow,Ie as __namedExportsOrder,Fe as default};