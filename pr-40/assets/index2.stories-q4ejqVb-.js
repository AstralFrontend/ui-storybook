import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,dt as r,ft as i,it as ee,ji as a,ln as o,lt as te,rt as ne,ya as s,yn as c,za as l}from"./preview-DOMyrAPS.js";import{n as u,t as d}from"./NewPopover-BRweYClE.js";import{t as f}from"./TextField-CsHuEMOa.js";import{t as re}from"./Switch-CHOOkiM6.js";import{t as ie}from"./TextField-CedtdGGQ.js";import{n as ae,t as oe}from"./InfoFillMd-P0pJrj2o.js";import{n as se,t as ce}from"./FormControlLabel-B2sihbGl.js";import{t as le}from"./ComplianceStatus-Ds7pFU1z.js";import{t as ue}from"./ComplianceStatus-Cy-esrk4.js";import{t as de}from"./Paper-BoFnLTnQ.js";import{t as fe}from"./Paper-CWNcFxw8.js";import{t as pe}from"./Fieldset-BkogmLm3.js";import{t as me}from"./Fieldset-D1gjv44-.js";import{t as he}from"./PasswordField-Db9ZDM35.js";import{t as ge}from"./PasswordField-DQIXOCIq.js";import{t as _e}from"./Switch-DiWwYtIo.js";import{a as p,i as ve,n as ye,r as m,t as h}from"./common-Bgf8xCDe.js";var be,g,_;function v(){return(v=e((()=>{be=l(),t(),u(),h(),g=s(),_=()=>{let[e,t]=(0,be.useState)(null);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Действия с документом`}),(0,g.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:`bottom-start`,title:`Действия с документом`,children:(0,g.jsx)(m,{})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source},description:{story:`На мобильных устройствах меню выезжает снизу экрана. Заголовок задаётся
свойством title.`,..._.parameters?.docs?.description}}};try{_.displayName=`BasicUsage`,_.__docgenInfo={description:`На мобильных устройствах меню выезжает снизу экрана. Заголовок задаётся
свойством title.`,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var y,b,x,S;function C(){return(C=e((()=>{y=l(),ue(),ge(),u(),b=s(),x=[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`},{status:`loading`,text:`Не должен совпадать со старым паролем`}],S=()=>{let e=(0,y.useRef)(null),[t,n]=(0,y.useState)(!1),[r,i]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{ref:e,children:(0,b.jsx)(he,{label:`Новый пароль`,value:r,onChange:e=>i(e.target.value),onFocus:()=>n(!0),onBlur:()=>n(!1),inputProps:{autoComplete:`off`}})}),(0,b.jsx)(d,{isOpen:t,anchorEl:e.current,placement:`right-start`,disableAutoFocus:!0,style:{margin:`20px 0 0 8px`},children:(0,b.jsx)(le,{title:`Требования к паролю`,itemsList:x})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source},description:{story:`При фокусе на поле пароля показываются требования в popover.`,...S.parameters?.docs?.description}}};try{S.displayName=`Controlled`,S.__docgenInfo={description:`При фокусе на поле пароля показываются требования в popover.`,displayName:`Controlled`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/Controlled.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E,D,O,k,A;function j(){return(j=e((()=>{w=l(),t(),c(),r(),u(),h(),T=s(),E=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(10)};
`,D=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,O=()=>(0,T.jsxs)(`div`,{children:[(0,T.jsx)(i,{variant:`h6`,gutterBottom:!0,children:`Меню действий (disableAutoFocus=false)`}),(0,T.jsx)(i,{variant:`body1`,color:`textSecondary`,children:"По умолчанию `disableAutoFocus=false`, и при открытии фокус переходит на первый интерактивный элемент. Это стандарт для выпадающих списков, позволяющий сразу управлять меню с клавиатуры."})]}),k=()=>(0,T.jsxs)(`div`,{children:[(0,T.jsx)(i,{variant:`h6`,gutterBottom:!0,children:`Информационная подсказка (disableAutoFocus=true)`}),(0,T.jsx)(i,{variant:`body1`,color:`textSecondary`,children:"При `disableAutoFocus=true` фокус остаётся на кнопке-триггере. Это удобно для справочных материалов: пользователь может закрыть подсказку повторным кликом на ту же кнопку или клавишей Escape, не теряя фокус."})]}),A=()=>{let[e,t]=(0,w.useState)(null),[n,r]=(0,w.useState)(null);return(0,T.jsxs)(E,{children:[(0,T.jsxs)(D,{children:[(0,T.jsx)(O,{}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(o,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Действия`}),(0,T.jsx)(d,{anchorEl:e,onClose:()=>t(null),placement:`bottom-start`,title:`Действия`,children:(0,T.jsx)(m,{})})]})]}),(0,T.jsxs)(D,{children:[(0,T.jsx)(k,{}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(o,{variant:`outlined`,onClick:e=>{r(n?null:e.currentTarget)},children:n?`Скрыть`:`Справка`}),(0,T.jsx)(d,{anchorEl:n,onClose:()=>r(null),placement:`bottom-start`,disableAutoFocus:!0,children:(0,T.jsx)(ve,{})})]})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source},description:{story:"Свойство `disableAutoFocus` управляет автоматической установкой фокуса при открытии Popover.\nПо умолчанию `disableAutoFocus=false`, фокус переходит на первый интерактивный элемент.\nПри `disableAutoFocus=true` фокус остается на элементе.",...A.parameters?.docs?.description}}};try{A.displayName=`DisableAutoFocus`,A.__docgenInfo={description:"Свойство `disableAutoFocus` управляет автоматической установкой фокуса при открытии Popover.\nПо умолчанию `disableAutoFocus=false`, фокус переходит на первый интерактивный элемент.\nПри `disableAutoFocus=true` фокус остается на элементе.",displayName:`DisableAutoFocus`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/DisableAutoFocus.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var M,N,P,F,I,L,R,z,B;function xe(){return(xe=e((()=>{M=l(),oe(),me(),ce(),n(),ne(),fe(),_e(),c(),ie(),r(),u(),h(),N=s(),P=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`,F=a(de)`
  width: 400px;
  max-height: 200px;
  overflow: auto;
  position: relative;
  padding: ${({theme:e})=>e.spacing(4)};
`,I=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing(2)};
  padding-top: ${({theme:e})=>e.spacing(2)};
`,L=({checked:e,onChange:t})=>(0,N.jsx)(se,{control:(0,N.jsx)(re,{checked:e,onChange:t}),label:`disablePortal`}),R=()=>(0,N.jsx)(i,{variant:`body1`,color:`textSecondary`,children:`Сведения о доходах физических лиц`}),z=({onInfoClick:e})=>(0,N.jsx)(pe,{title:`6-НДФЛ · март 2025`,children:(0,N.jsxs)(te,{container:!0,spacing:4,columns:1,children:[(0,N.jsxs)(I,{children:[(0,N.jsx)(R,{}),(0,N.jsx)(ee,{variant:`text`,onClick:e,children:(0,N.jsx)(ae,{color:`primary`})})]}),(0,N.jsx)(f,{label:`Период`,placeholder:`март 2025`}),(0,N.jsx)(f,{label:`Организация`,placeholder:`ООО Ромашка`})]})}),B=()=>{let[e,t]=(0,M.useState)(!0),[n,r]=(0,M.useState)(null);return(0,N.jsxs)(P,{children:[(0,N.jsx)(L,{checked:e,onChange:(e,n)=>{t(n),r(null)}}),(0,N.jsxs)(F,{variant:`outlined`,children:[(0,N.jsx)(z,{onInfoClick:e=>{r(e.currentTarget)}}),(0,N.jsx)(d,{anchorEl:n,onClose:()=>{r(null)},disablePortal:e,children:(0,N.jsx)(ve,{})},String(e))]})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source},description:{story:"Свойство `disablePortal` отключает использование портала для Popover.\nПри `disablePortal=true` компонент рендерится в DOM-дереве по месту вызова, что позволяет ему прокручиваться вместе с родительским контейнером.",...B.parameters?.docs?.description}}};try{B.displayName=`DisablePortal`,B.__docgenInfo={description:"Свойство `disablePortal` отключает использование портала для Popover.\nПри `disablePortal=true` компонент рендерится в DOM-дереве по месту вызова, что позволяет ему прокручиваться вместе с родительским контейнером.",displayName:`DisablePortal`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/DisablePortal.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var V,H,Se,U;function Ce(){return(Ce=e((()=>{V=l(),t(),c(),u(),h(),H=s(),Se=a.div`
  padding: ${({theme:e})=>e.spacing(8)};
`,U={args:{isOpen:!0,placement:`bottom-start`,children:(0,H.jsx)(p,{}),disableAutoFocus:!1,disablePortal:!1},render:e=>{let[t,n]=(0,V.useState)(null);return(0,H.jsxs)(Se,{children:[(0,H.jsx)(o,{ref:n,variant:`outlined`,children:`Фильтры`}),(0,H.jsx)(d,{...e,anchorEl:t})]})},parameters:{docs:{disable:!0}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}})))()}var W,G,K,we,Te,Ee,De,Oe,ke,q,Ae,J,Y,je,X;function Me(){return(Me=e((()=>{W=l(),t(),c(),u(),h(),G=s(),K={TOP_START:`top-start`,TOP:`top`,TOP_END:`top-end`,LEFT_START:`left-start`,LEFT:`left`,LEFT_END:`left-end`,RIGHT_START:`right-start`,RIGHT:`right`,RIGHT_END:`right-end`,BOTTOM_START:`bottom-start`,BOTTOM:`bottom`,BOTTOM_END:`bottom-end`},we=[K.TOP_START,K.TOP,K.TOP_END],Te=[K.LEFT_START,K.LEFT,K.LEFT_END],Ee=[K.RIGHT_START,K.RIGHT,K.RIGHT_END],De=[K.BOTTOM_START,K.BOTTOM,K.BOTTOM_END],Oe=a.div`
  max-width: 500px;
`,ke=a.div`
  border: 1px solid ${({theme:e})=>e.palette.components.border.default};
  border-radius: ${({theme:e})=>e.shape.large};
  margin-top: ${({theme:e})=>e.spacing(4)};
  padding: ${({theme:e})=>e.spacing(3)};
  width: 500px;
`,q=a.div`
  display: flex;
  justify-content: center;
`,Ae=a.div`
  display: flex;
  justify-content: space-between;
  margin: ${({theme:e})=>e.spacing(2)} 0;
`,J=a.div`
  display: flex;
  flex-direction: column;
  align-items: ${({$alignEnd:e})=>e?`flex-end`:`flex-start`};
  gap: ${({theme:e})=>e.spacing(2)};

`,Y=a(o)`
  min-width: 96px;
`,je=({onPlacementClick:e})=>(0,G.jsxs)(ke,{children:[(0,G.jsx)(q,{children:we.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))}),(0,G.jsxs)(Ae,{children:[(0,G.jsx)(J,{children:Te.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))}),(0,G.jsx)(J,{$alignEnd:!0,children:Ee.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))})]}),(0,G.jsx)(q,{children:De.map(t=>(0,G.jsx)(Y,{variant:`text`,onClick:e(t),color:`primary`,children:t},t))})]}),X=()=>{let[e,t]=(0,W.useState)(null),[n,r]=(0,W.useState)(K.BOTTOM);return(0,G.jsxs)(Oe,{children:[(0,G.jsx)(je,{onPlacementClick:e=>n=>{r(e),t(n.currentTarget)}}),(0,G.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:n,children:(0,G.jsx)(p,{})})]})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source},description:{story:"Свойство `placement` определяет положение Popover относительно элемента.\nДоступно 12 вариантов позиционирования.",...X.parameters?.docs?.description}}};try{X.displayName=`Placement`,X.__docgenInfo={description:"Свойство `placement` определяет положение Popover относительно элемента.\nДоступно 12 вариантов позиционирования.",displayName:`Placement`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/Placement.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Ne,Z,Q;function Pe(){return(Pe=e((()=>{Ne=l(),t(),u(),h(),Z=s(),Q=()=>{let[e,t]=(0,Ne.useState)(null);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Показать документ`}),(0,Z.jsx)(d,{anchorEl:e,onClose:()=>{t(null)},placement:`bottom-start`,hasArrow:!0,children:(0,Z.jsx)(ye,{})})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source},description:{story:"Свойство `hasArrow` добавляет стрелку, указывающую на элемент. Стрелка следует\nза `placement` и прячется, если элемент ушёл за пределы вьюпорта.",...Q.parameters?.docs?.description}}};try{Q.displayName=`WithArrow`,Q.__docgenInfo={description:"Свойство `hasArrow` добавляет стрелку, указывающую на элемент. Стрелка следует\nза `placement` и прячется, если элемент ушёл за пределы вьюпорта.",displayName:`WithArrow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/stories/WithArrow.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Fe,Ie;function $(){return($=e((()=>{u(),v(),C(),j(),xe(),Ce(),Me(),Pe(),Fe={title:`Popovers-and-Tooltips/Popover/NewPopover`,component:d},Ie=[`BasicUsage`,`Controlled`,`Placement`,`WithArrow`,`DisablePortal`,`DisableAutoFocus`,`Interaction`]})))()}$();export{_ as BasicUsage,S as Controlled,A as DisableAutoFocus,B as DisablePortal,U as Interaction,X as Placement,Q as WithArrow,Ie as __namedExportsOrder,Fe as default};