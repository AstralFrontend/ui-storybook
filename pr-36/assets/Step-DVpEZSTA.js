import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Va as a,Xt as o,_t as s,cn as c,dt as l,ei as u,en as d,ft as f,gt as p,ji as m,ln as h,wn as g,xa as _,yn as v}from"./preview-ClJ99rAL.js";import{n as ee,t as te}from"./useViewportType-BXE4qqvP.js";import{t as ne}from"./Collapse-DwJSsN34.js";import{t as re}from"./Collapse-aSC6lul5.js";import{n as ie,t as ae}from"./NextOutlineMd-DT7PAOTK.js";import{t as oe}from"./Fade-CsD18D_8.js";import{t as se}from"./Fade-nG_iti_H.js";import{a as ce,c as le,i as ue,n as de,s as fe,t as pe}from"./StepSuccessFillMd-Z4KpQjNU.js";var y,b;function x(){return(x=e((()=>{i(),y={root:r(`stepper`),lineConnector:r(`stepper_connector-line`),arrowConnector:r(`stepper_connector-arrow`),orientationHorizontal:r(`stepper_orientation-horizontal`),orientationVertical:r(`stepper_orientation-vertical`),alternativeLabel:r(`stepper_alternative-label`)},b=`astral-ui-stepper-order`})))()}var me,S;function C(){return(C=e((()=>{me=a(),S=(0,me.createContext)({activeStep:0,orientation:`horizontal`,connector:`line`,alternativeLabel:!1,onClickPrevStep:()=>void 0,onClickStep:()=>void 0})})))()}var he,ge,w;function _e(){return(_e=e((()=>{he=a(),C(),ge=_(),w=({children:e,orientation:t,activeStep:n,connector:r,alternativeLabel:i,onClickPrevStep:a,onClickStep:o})=>{let s=(0,he.useMemo)(()=>({activeStep:n,orientation:t,connector:r,alternativeLabel:i,onClickPrevStep:a,onClickStep:o}),[n,t,r,i,a,o]);return(0,ge.jsx)(S.Provider,{value:s,children:e})};try{w.displayName=`StepperContextProvider`,w.__docgenInfo={description:``,displayName:`StepperContextProvider`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContextProvider/StepperContextProvider.tsx`,methods:[],props:{activeStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`activeStep`,required:!0,tags:{},type:{name:`number`}},orientation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`orientation`,required:!0,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},connector:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`connector`,required:!0,tags:{},type:{name:`enum`,raw:`"line" | "arrow"`,value:[{value:`"line"`},{value:`"arrow"`}]}},alternativeLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`alternativeLabel`,required:!0,tags:{},type:{name:`boolean`}},onClickPrevStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`onClickPrevStep`,required:!1,tags:{},type:{name:`(index: number) => void`}},onClickStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContext.ts`,name:`TypeLiteral`}],description:``,name:`onClickStep`,required:!1,tags:{},type:{name:`(index: number) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepperContext/StepperContextProvider/StepperContextProvider.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}function ve(){return(ve=e((()=>{_e()})))()}function T(){return(T=e((()=>{C(),ve()})))()}var ye;function be(){return(be=e((()=>{v(),x(),ye=m.div`
  counter-reset: ${b} 0;

  display: flex;
  align-items: flex-start;

  &.${y.orientationHorizontal} {
    flex-direction: row;

    &.${y.arrowConnector} {
      align-items: center;
    }

    &.${y.lineConnector} {
      &:not(.${y.alternativeLabel}) {
        align-items: center;
      }
    }
  }

  &.${y.orientationVertical} {
    flex-direction: column;

    &.${y.lineConnector} {
      gap: ${({theme:e})=>e.microSpacing(1)};
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    /* Убираем видимую полосу прокрутки в firefox */
    scrollbar-width: none;

    overflow-x: auto;

    width: 100%;

    /* Убираем видимую полосу прокрутки в chrome */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`})))()}var xe,Se;function Ce(){return(Ce=e((()=>{xe=[{orientation:`horizontal`,connector:`line`,alternativeLabel:!0},{orientation:`vertical`,connector:`line`,alternativeLabel:!1},{orientation:`horizontal`,connector:`arrow`,alternativeLabel:!1}],Se=({orientation:e,connector:t,alternativeLabel:n})=>{xe.some(r=>r.orientation===e&&r.connector===t&&r.alternativeLabel===n)||console.error(`Stepper: Неподдерживаемая комбинация параметров. Допустимые варианты:
1) orientation="horizontal", connector="line", alternativeLabel=true
2) orientation="vertical", connector="line", alternativeLabel=false
3) orientation="horizontal", connector="arrow", alternativeLabel=false`)}})))()}var E,D;function O(){return(O=e((()=>{E=a(),te(),x(),Ce(),D=({orientation:e=`horizontal`,connector:t=`line`,alternativeLabel:n=!1,activeStep:r=0,onClickPrevStep:i,onClickStep:a,className:o,children:s})=>{(0,E.useEffect)(()=>{Se({orientation:e,connector:t,alternativeLabel:n})},[]);let{isMobile:c}=ee(),l=c&&e===`horizontal`&&t===`line`,u=l?`arrow`:t,d=!l&&n,f=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!c||!f.current)return;let e=f.current,t=()=>{let t=e.querySelector(`[data-active-step="true"]`);t&&t.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`})};setTimeout(()=>{t()},300)},[r,c,e]),{containerRef:f,stepperConnector:u,stepperAlternativeLabel:d,activeStep:r,onClickPrevStep:i,orientation:e,onClickStep:a,className:o,children:s}}})))()}function k(){return(k=e((()=>{O()})))()}var A,j,M;function we(){return(we=e((()=>{u(),g(),x(),T(),be(),k(),A=_(),j=n(y.root,{variants:{orientation:{horizontal:y.orientationHorizontal,vertical:y.orientationVertical},alternativeLabel:{true:y.alternativeLabel},connector:{arrow:y.arrowConnector,line:y.lineConnector}}}),M=e=>{let{containerRef:n,stepperConnector:r,stepperAlternativeLabel:i,activeStep:a,onClickPrevStep:o,onClickStep:s,orientation:c,className:l,children:u}=D(e);return(0,A.jsx)(w,{orientation:c,activeStep:a,connector:r,alternativeLabel:i,onClickPrevStep:o,onClickStep:s,children:(0,A.jsx)(ye,{ref:n,role:`group`,className:t(j({alternativeLabel:i,connector:r,orientation:c}),l),children:u})})};try{M.displayName=`NewStepper`,M.__docgenInfo={description:``,displayName:`NewStepper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/NewStepper.tsx`,methods:[],props:{activeStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:``,name:`activeStep`,required:!1,tags:{},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},connector:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:`Тип соединителя между шагами`,name:`connector`,required:!1,tags:{},type:{name:`enum`,raw:`"line" | "arrow"`,value:[{value:`"line"`},{value:`"arrow"`}]}},orientation:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:``,name:`orientation`,required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},alternativeLabel:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:'Отображение названия шага под иконкой\n\nРаботает только с `orientation="horizontal"` и типом `connector: "line"`.',name:`alternativeLabel`,required:!1,tags:{},type:{name:`boolean`}},onClickPrevStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:`Функция вызываемая при клике на предыдущий шаг. Делает кликабельными только предыдущие шаги.`,name:`onClickPrevStep`,required:!1,tags:{},type:{name:`(index: number) => void`}},onClickStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:`Функция вызываемая при клике на шаг. Делает все шаги кликабельными.`,name:`onClickStep`,required:!1,tags:{},type:{name:`(index: number) => void`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{example:`<NewStepper>
  <Step label="Step 1" stepId={1} />
  <Step label="Step 2" stepId={2} />
  <Step label="Step 3" stepId={3} />
</NewStepper>`},type:{name:`ReactNode`}}},tags:{}}}catch{}})))()}var N;function P(){return(P=e((()=>{i(),N={root:r(`step__icon`),active:r(`step__icon_active`),error:r(`step__icon_error`),warning:r(`step__icon_warning`),success:r(`step__icon_success`)}})))()}var Te;function Ee(){return(Ee=e((()=>{Te=({isError:e,isActive:t,isCompleted:n})=>({isShowError:e&&!t||e&&n&&t})})))()}var F,I,L;function De(){return(De=e((()=>{fe(),ue(),pe(),g(),P(),Ee(),F=_(),I=n(N.root,{variants:{isActive:{true:N.active},isCompleted:{true:N.success},isError:{true:N.error},isWarning:{true:N.warning}}}),L=({icon:e,isActive:t,isCompleted:n,isError:r,isWarning:i})=>{let{isShowError:a}=Te({isError:r,isActive:t,isCompleted:n});return e?(0,F.jsx)(e,{isActive:t,isCompleted:n,isError:r,isWarning:i,className:I({isActive:t,isCompleted:n,isError:r,isWarning:i})}):a?(0,F.jsx)(ce,{className:I({isError:!0})}):n?(0,F.jsx)(de,{className:I({isCompleted:!0,isWarning:i,isActive:t})}):(0,F.jsx)(le,{className:I({isActive:t,isCompleted:n,isError:r,isWarning:i})})};try{L.displayName=`StepIcon`,L.__docgenInfo={description:``,displayName:`StepIcon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,methods:[],props:{isActive:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Флаг активности шага`,name:`isActive`,required:!1,tags:{},type:{name:`boolean`}},isCompleted:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Флаг завершенности шага`,name:`isCompleted`,required:!1,tags:{},type:{name:`boolean`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Флаг ошибки шага`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isWarning:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Флаг предупреждения шага`,name:`isWarning`,required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/StepIcon/StepIcon.tsx`,name:`TypeLiteral`}],description:`Кастомный компонент иконки`,name:`icon`,required:!1,tags:{},type:{name:`(props: Omit<StepIconProps, "icon">) => ReactNode`}}},tags:{}}}catch{}})))()}function R(){return(R=e((()=>{De(),P()})))()}var Oe,z;function B(){return(B=e((()=>{i(),Oe={active:r(`step_active`),completed:r(`step_completed`),error:r(`step_error`),warning:r(`step_warning`),disabled:r(`step_disabled`)},z={root:r(`step`),label:r(`step__label`),description:r(`step__description`),iconContainer:r(`step__icon-container`),connector:r(`step__connector`),connectorLine:r(`step_connector-line`),connectorArrow:r(`step_connector-arrow`),alternativeLabel:r(`step_alternative-label`),orientationHorizontal:r(`step_orientation-horizontal`),orientationVertical:r(`step_orientation-vertical`),labelContainer:r(`step__label-container`),labelMobile:r(`step__label-mobile`),content:r(`step__content`),hasDescription:r(`step_has-description`),...Oe}})))()}var V;function ke(){return(ke=e((()=>{v(),l(),V=m(f)`
  min-height: 22px;
  margin-bottom: ${({theme:e})=>e.microSpacing(1)};
  margin-left: 9px;
  padding-left: 13px;

  text-align: start;

  border-left: 2px solid ${({theme:e})=>e.palette.components.border.default};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    margin-bottom: 0;
    margin-left: 11px;
    padding-left: 15px;
  }
`})))()}var H,U;function Ae(){return(Ae=e((()=>{ke(),H=_(),U=({children:e,className:t})=>typeof e==`string`?(0,H.jsx)(V,{variant:`caption`,color:`grey`,colorIntensity:`700`,className:t,children:e}):(0,H.jsx)(V,{component:`div`,color:`grey`,colorIntensity:`700`,className:t,children:e});try{U.displayName=`Description`,U.__docgenInfo={description:``,displayName:`Description`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Description/Description.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Description/Description.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function je(){return(je=e((()=>{Ae()})))()}var Me,Ne,Pe;function Fe(){return(Fe=e((()=>{v(),l(),x(),Me=m.div`
  display: none;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: flex;
    align-items: center;
  }
`,Ne=m(f)`
  display: inline-block;

  &::before {
    content: counter(${b});
  }
`,Pe=m(f)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    display: none;
  }
`})))()}var W,G;function Ie(){return(Ie=e((()=>{re(),l(),se(),B(),Fe(),W=_(),G=({label:e,isActiveStep:t})=>(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Pe,{className:z.label,variant:`caption`,children:e}),(0,W.jsxs)(Me,{className:z.labelMobile,children:[(0,W.jsx)(ne,{in:!t,orientation:`horizontal`,children:(0,W.jsx)(oe,{in:!t,children:(0,W.jsx)(Ne,{className:z.label,component:`span`})})}),(0,W.jsx)(ne,{in:t,orientation:`horizontal`,children:(0,W.jsx)(oe,{in:t,children:(0,W.jsx)(f,{className:z.label,children:e})})})]})]});try{G.displayName=`Label`,G.__docgenInfo={description:``,displayName:`Label`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Label/Label.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Label/Label.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},isActiveStep:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Label/Label.tsx`,name:`TypeLiteral`}],description:``,name:`isActiveStep`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function Le(){return(Le=e((()=>{Ie()})))()}var Re,ze,Be,K,q,Ve,He;function Ue(){return(Ue=e((()=>{ae(),c(),o(),v(),p(),x(),P(),B(),Re=m.div`
  counter-increment: ${b};

  display: flex;
  gap: ${({theme:e})=>e.microSpacing(5)};
  align-items: center;

  &.${z.alternativeLabel} {
    position: relative;

    flex: 1;
    flex-direction: column;

    & .${z.labelContainer} {
      flex-direction: column;

      text-align: center;
    }

    &:first-of-type {
      & .${z.connector} {
        display: none;
      }
    }
  }

  &.${z.connectorArrow} {
    & .${z.content} {
      padding: ${({theme:e})=>e.microSpacing(5,0)};
    }
    
    &:not(:first-of-type) .${z.content} {
      margin-left: ${({theme:e})=>e.spacing(2)};
    }

    &:last-of-type .${z.connector} {
      display: none;
    }
  }

  &.${z.connectorLine} {
    &.${z.orientationHorizontal} {
      & .${z.content} {
        align-items: center;

        padding: ${({theme:e})=>e.spacing(0,1)};
      }

    
      &.${z.alternativeLabel} {
        & .${z.content} {
          padding: ${({theme:e})=>e.microSpacing(3,0)};
        }
      }
    }

    &.${z.orientationVertical} {
      & .${z.labelContainer} {
        color: ${({theme:e})=>e.palette.grey[900]};
      }

      & .${z.label} {
        font-size: ${({theme:e})=>e.typography.body1.fontSize};
        line-height: ${({theme:e})=>e.typography.body1.lineHeight};
      }
      
      & .${z.content} {
        padding: ${({theme:e})=>e.spacing(1,0,0)};
      }

      & .${z.connector}:not(.${z.hasDescription}) {
        margin-bottom: ${({theme:e})=>e.microSpacing(1)};
      }

      &:last-of-type {
        & .${z.description} {
          min-height: 0;
          margin: 0;
          padding-left: ${({theme:e})=>e.spacing(6)};

          border-left: none;

          ${({theme:e})=>e.breakpoints.down(`mobile`)} {
            padding-left: ${({theme:e})=>e.spacing(7)};
          }
        }

        & .${z.connector} {
          display: none;
        }
      }

      &:last-of-type {
        & .${z.content} {
          padding: ${({theme:e})=>e.spacing(1,0)};
    
          & .${z.description} {
            margin-bottom: 0;
          }
        }
      }

      & .${z.labelMobile} {
        display: none;
      }

      & .${z.label} {
        display: block;
      }
    }
  }

  & .${z.content} {
    &.${z.active} {
      & .${z.label} {
        color: ${({theme:e})=>e.palette.grey[900]};
      }

      & .${N.root} {
        color: ${({theme:e})=>e.palette.primary[800]};

        &.${N.success} {
          color: ${({theme:e})=>e.palette.success[800]};
        }

        &.${N.error} {
          color: ${({theme:e})=>e.palette.error[800]};
        }

        &.${N.warning} {
          color: ${({theme:e})=>e.palette.warning[800]};
        }
      }
    }
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    &.${z.connectorArrow} {
      & .${z.content} {
        padding: ${({theme:e})=>e.spacing(2,0)};
      }
    }
  }
`,ze=m.div`
  display: flex;

  & .${N.root} {
    width: 20px;
    height: 20px;

    color: ${({theme:e})=>e.palette.grey[300]};
    
    transition: ${({theme:e})=>e.transitions.create([`color`],{duration:e.transitions.duration.shorter})};

    &.${N.active} {
      color: ${({theme:e})=>e.palette.primary[800]};
    }

    &.${N.success} {
      color: ${({theme:e})=>e.palette.success[800]};
    }

    &.${N.error} {
      color: ${({theme:e})=>e.palette.error[800]};
    }

    &.${N.warning} {
      color: ${({theme:e})=>e.palette.warning[800]};
    }

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      width: 24px;
      height: 24px;
    }
  }
`,Be=m(ie)`
  width: 20px;
  height: 20px;

  color: ${({theme:e})=>e.palette.grey[400]};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 24px;
    height: 24px;
  }
`,K=m.div`
  flex: 1 1 auto;

  height: 2px;

  border-top: 2px solid ${({theme:e})=>e.palette.components.border.default};

  &.${z.alternativeLabel} {
    position: absolute;
    top: 15px;
    right: calc(50% + 14px);
    left: calc(-50% + 14px);
  }

  &.${z.orientationVertical} {
    min-height: 16px;

    /* Смещение необходимо для центрирования линии относительно иконки, т.к. линия шириной 2px, то для выравнивания необходимо число не кратное 2ум  */
    margin-left: 9px;

    border-top: unset;
    border-left: 2px solid ${({theme:e})=>e.palette.components.border.default};

    ${({theme:e})=>e.breakpoints.down(`mobile`)} {
      margin-left: 11px;
    }
  }
`,q=m.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: center;

  color: ${({theme:e})=>e.palette.grey[700]};

  & .${s.root} {
    transition: ${({theme:e})=>e.transitions.create([`color`],{duration:e.transitions.duration.shorter})};
  }

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    white-space: nowrap;
  }
`,Ve=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.microSpacing(1)};
  }
`,He=m(h)`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: auto;
  padding: 0;

  background: transparent;
  border: 0;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    gap: ${({theme:e})=>e.microSpacing(1)};

    height: auto;
  }

  ${d} {
    &:hover {
      background: transparent;

      & .${z.label} {
        color: ${({theme:e})=>e.palette.grey[700]};
      }

      & .${N.root} {
        color: ${({theme:e})=>e.palette.primary[700]};

        &.${N.success} {
          color: ${({theme:e})=>e.palette.success[700]};
        }

        &.${N.error} {
          color: ${({theme:e})=>e.palette.error[700]};
        }

        &.${N.warning} {
          color: ${({theme:e})=>e.palette.warning[700]};
        }
      }
    }
  }

  &:active {
    background: transparent;
    & .${z.label} {
      color: ${({theme:e})=>e.palette.grey[900]};
    }

    & .${N.root} {
      color: ${({theme:e})=>e.palette.primary[800]};

      &.${N.success} {
        color: ${({theme:e})=>e.palette.success[800]};
      }

      &.${N.error} {
        color: ${({theme:e})=>e.palette.error[800]};
      }

      &.${N.warning} {
        color: ${({theme:e})=>e.palette.warning[700]};
      }
    }
  }

  &:focus-visible {
    border-radius: ${({theme:e})=>e.shape.medium};
    outline: 1px solid ${({theme:e})=>e.palette.components.focused};
  }
`})))()}var J,We;function Ge(){return(Ge=e((()=>{J=a(),T(),We=({stepId:e,isCompleted:t,onClick:n,children:r,isError:i,isWarning:a,icon:o,label:s,isDisabled:c,className:l})=>{let{connector:u,activeStep:d,orientation:f,alternativeLabel:p,onClickPrevStep:m,onClickStep:h}=(0,J.useContext)(S);(0,J.useEffect)(()=>{r&&(f!==`vertical`||u!==`line`||p!==!1)&&console.error(`Stepper: description можно использовать только с комбинацией:
orientation="vertical", connector="line", alternativeLabel=false`)},[]);let g=t===void 0?d>e:t,_=!!c||!!m&&!(n||h||m&&g);return{isCompletedStep:g,isRenderButton:!!n||!!m||!!h,handleClick:()=>{_||(g&&m&&m(e),h?.(e),n?.(e))},connectorVariant:u,alternativeLabel:p,orientation:f,stepId:e,children:r,isError:i,isWarning:a,icon:o,className:l,label:s,isRenderVerticalLineConnector:u===`line`&&f===`vertical`&&!r,isRenderHorizontalLineConnector:u===`line`&&f===`horizontal`&&p,isDisabled:_,isActiveStep:d===e}}})))()}function Ke(){return(Ke=e((()=>{Ge()})))()}var Y,qe,X,Z;function Q(){return(Q=e((()=>{u(),g(),R(),B(),je(),Le(),Ue(),Ke(),Y=_(),qe=n(z.root,{variants:{isError:{true:z.error},isCompleted:{true:z.completed},connector:{arrow:z.connectorArrow,line:z.connectorLine},activeStep:{true:z.active},alternativeLabel:{true:z.alternativeLabel},orientation:{horizontal:z.orientationHorizontal,vertical:z.orientationVertical},isDisabled:{true:z.disabled}}}),X=n(z.connector,{variants:{connector:{arrow:z.connectorArrow,line:z.connectorLine},alternativeLabel:{true:z.alternativeLabel},orientation:{horizontal:z.orientationHorizontal,vertical:z.orientationVertical},hasDescription:{true:z.hasDescription}}}),Z=e=>{let{isCompletedStep:n,isRenderButton:r,handleClick:i,connectorVariant:a,alternativeLabel:o,orientation:s,children:c,isError:l,isWarning:u,icon:d,className:f,label:p,isRenderVerticalLineConnector:m,isRenderHorizontalLineConnector:h,isDisabled:g,isActiveStep:_}=We(e),v=r?He:Ve;return(0,Y.jsxs)(Re,{"data-active-step":_,className:t(qe({isError:l,isCompleted:n,connector:a,activeStep:_,alternativeLabel:o,orientation:s,isDisabled:g}),f),children:[(0,Y.jsxs)(v,{variant:`text`,onClick:i,disabled:g,className:t(z.content,{[z.active]:_}),children:[(0,Y.jsxs)(q,{className:z.labelContainer,children:[(0,Y.jsx)(ze,{className:z.iconContainer,children:(0,Y.jsx)(L,{icon:d,isActive:_,isCompleted:n,isError:l,isWarning:u})}),(0,Y.jsx)(G,{label:p,isActiveStep:_}),a===`arrow`&&(0,Y.jsx)(Be,{className:X({connector:a,alternativeLabel:o,orientation:s})})]}),c&&(0,Y.jsx)(U,{className:z.description,children:c}),m&&(0,Y.jsx)(K,{className:X({connector:a,orientation:s})})]}),h&&(0,Y.jsx)(K,{className:X({connector:a,alternativeLabel:o,orientation:s})})]})};try{Z.displayName=`Step`,Z.__docgenInfo={description:``,displayName:`Step`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/Step.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Название шага`,name:`label`,required:!0,tags:{},type:{name:`ReactNode`}},isError:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Флаг ошибки шага`,name:`isError`,required:!1,tags:{},type:{name:`boolean`}},isCompleted:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:"Завершённость шага. Если не передан — считается по `activeStep` (как раньше: пройдены шаги с меньшим `stepId`).",name:`isCompleted`,required:!1,tags:{},type:{name:`boolean`}},isWarning:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Флаг предупреждения шага`,name:`isWarning`,required:!1,tags:{},type:{name:`boolean`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Флаг блокировки шага`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Дополнительный текст шага`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Функция вызываемая при клике на шаг`,name:`onClick`,required:!1,tags:{},type:{name:`(stepId: number) => void`}},icon:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Кастомный компонент иконки`,name:`icon`,required:!1,tags:{},type:{name:`(props: Omit<StepIconProps, "icon">) => ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`Класс применяемый к корневому элементу`,name:`className`,required:!1,tags:{},type:{name:`string`}},stepId:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewStepper/Step/types.ts`,name:`TypeLiteral`}],description:`ID шага`,name:`stepId`,required:!0,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}function $(){return($=e((()=>{Q(),B()})))()}export{P as a,we as c,R as i,x as l,Z as n,N as o,Q as r,M as s,$ as t,y as u};