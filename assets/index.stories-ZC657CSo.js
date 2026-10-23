import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Dn as n,On as r,ct as i,dt as a,ei as o,ft as s,ht as c,ji as l,lt as u,mt as d,ya as f,yn as p,za as m}from"./preview-BYX69pdz.js";import{t as ee}from"./Tooltip-DZ1E2Wjc.js";import{t as te}from"./Tooltip-7fKaVY7I.js";import{t as ne}from"./OverflowTypography-DUT-d91M.js";import{t as re}from"./OverflowTypography-BLmG33Ab.js";import{t as ie}from"./NumberField-DdRF8KNq.js";import{t as ae}from"./NumberField-Cx7CXXtr.js";import{n as oe,t as se}from"./StoryControlWrapper-DAufzXzs.js";var ce,h;function g(){return(g=e((()=>{r(),ce=`0 0 100 100`,h={root:n(`donut-chart`),svg:n(`donut-chart__svg`),track:n(`donut-chart__track`),progress:n(`donut-chart__progress`),content:n(`donut-chart__content`)}})))()}var le,ue,de,fe,pe;function me(){return(me=e((()=>{p(),le=l.div`
  position: relative;

  aspect-ratio: 1 / 1;
  width: 100%;
`,ue=l.svg`
  /* Старт дуги (точка 3 часа) переносим наверх. */
  transform: rotate(-90deg);

  display: block;

  width: 100%;
  height: 100%;
`,de=l.circle`
  fill: none;
  stroke: var(--donut-chart-track-color);
  stroke-linecap: round;
  stroke-width: var(--donut-chart-stroke-width);
`,fe=l.path`
  fill: none;
  stroke: var(--donut-chart-progress-color);
  stroke-linecap: round;
  stroke-width: var(--donut-chart-stroke-width);

  transition: stroke-dashoffset
    ${({theme:e})=>e.transitions.duration.standard}ms ease-in-out;
`,pe=l.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({theme:e})=>e.spacing(4)};
`})))()}var _,he;function ge(){return(ge=e((()=>{_=m(),he=()=>{let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let t=e.current;if(!t)return;let r=t.getBoundingClientRect().width;r>0&&n(r);let i=new ResizeObserver(e=>{let t=e[0]?.contentRect.width??0;t>0&&n(t)});return i.observe(t),()=>{i.disconnect()}},[]),{rootRef:e,renderWidth:t}}})))()}function _e(){return(_e=e((()=>{ge()})))()}function ve(){return(ve=e((()=>{_e()})))()}var ye;function be(){return(be=e((()=>{ye=(e,{color:t,colorIntensity:n,trackColorIntensity:r,strokeWidth:i})=>({"--donut-chart-stroke-width":String(i),"--donut-chart-progress-color":e.palette[t][n],"--donut-chart-track-color":e.palette.grey[r]})})))()}var xe;function v(){return(v=e((()=>{g(),xe=e=>{let t=800/e,n=50-t/2;return{stroke:t,radius:n,roundCapPercent:t/(2*Math.PI*n)*100}}})))()}function y(){return(y=e((()=>{v()})))()}var b;function x(){return(x=e((()=>{b=(e,t)=>{if(!Number.isFinite(t)||t<=0)return{min:0,max:1,now:0,label:`0 / 1`};if(!Number.isFinite(e))return{min:0,max:t,now:0,label:`0 / ${t}`};let n=Math.max(0,Math.min(t,e));return{min:0,max:t,now:n,label:`${n} / ${t}`}}})))()}var S,C;function w(){return(w=e((()=>{S=(e,t,n,r)=>{let i=r*Math.PI/180;return{x:e+n*Math.cos(i),y:t+n*Math.sin(i)}},C=(e,t,n)=>{let r=S(e,t,n,0),i=S(e,t,n,180),a=e=>Number(e.toFixed(3));return[`M ${a(r.x)} ${a(r.y)}`,`A ${a(n)} ${a(n)} 0 0 1 ${a(i.x)} ${a(i.y)}`,`A ${a(n)} ${a(n)} 0 0 1 ${a(r.x)} ${a(r.y)}`].join(` `)}})))()}var T,E;function D(){return(D=e((()=>{T=90,E=(e,t)=>{if(e>=100)return 0;if(e<=0)return 1;let n=1-(e-t*Math.max(0,(e-T)/10))/100;return Math.round(n*1e3)/1e3}})))()}var O;function k(){return(k=e((()=>{O=(e,t)=>!Number.isFinite(t)||t<=0||!Number.isFinite(e)?0:Math.max(0,Math.min(100,Math.floor(e/t*100)))})))()}var A,j;function M(){return(M=e((()=>{A=m(),d(),g(),ve(),be(),y(),x(),w(),D(),k(),j=({value:e,maxValue:t,color:n=`primary`,colorIntensity:r=`700`,trackColorIntensity:i=`100`})=>{let a=c(),{rootRef:o,renderWidth:s}=he(),l=O(e,t),u=b(e,t),d=(0,A.useMemo)(()=>{if(s===null)return null;let{stroke:e,radius:t,roundCapPercent:o}=xe(s);return{arcR:t,arcPath:C(50,50,t),progressOffset:E(l,o),cssVars:ye(a,{color:n,colorIntensity:r,trackColorIntensity:i,strokeWidth:e})}},[s,l,n,r,i,a]);return{rootRef:o,svgViewBox:ce,arcCx:50,arcCy:50,donutParams:d,meterAriaValue:u}}})))()}function N(){return(N=e((()=>{M()})))()}var P,F;function I(){return(I=e((()=>{o(),g(),me(),N(),P=f(),F=({value:e,maxValue:n,children:r,color:i=`primary`,colorIntensity:a=`700`,trackColorIntensity:o=`100`,className:s,style:c})=>{let{rootRef:l,svgViewBox:u,arcCx:d,arcCy:f,donutParams:p,meterAriaValue:m}=j({value:e,maxValue:n,color:i,colorIntensity:a,trackColorIntensity:o});return(0,P.jsxs)(le,{ref:l,className:t(h.root,s),role:`meter`,"aria-label":m.label,"aria-valuemin":m.min,"aria-valuemax":m.max,"aria-valuenow":m.now,style:{...p?.cssVars,...c},children:[p&&(0,P.jsxs)(ue,{className:h.svg,viewBox:u,"aria-hidden":!0,children:[(0,P.jsx)(de,{className:h.track,cx:d,cy:f,r:p.arcR}),(0,P.jsx)(fe,{className:h.progress,d:p.arcPath,pathLength:1,strokeDasharray:1,strokeDashoffset:p.progressOffset})]}),r&&(0,P.jsx)(pe,{className:h.content,children:r})]})};try{F.displayName=`DonutChart`,F.__docgenInfo={description:``,displayName:`DonutChart`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DonutChart/DonutChart.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}},maxValue:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:``,name:`maxValue`,required:!0,tags:{},type:{name:`number`}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:"Контент в центре. Можно передать другой `DonutChart`.",name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},color:{defaultValue:{value:`primary`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:`Цвет.`,name:`color`,required:!1,tags:{},type:{name:`enum`,raw:`DonutChartColor`,value:[{value:`"primary"`},{value:`"grey"`},{value:`"warning"`},{value:`"error"`},{value:`"success"`},{value:`"red"`},{value:`"green"`},{value:`"yellow"`}]}},colorIntensity:{defaultValue:{value:`700`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:`Интенсивность цвета.`,name:`colorIntensity`,required:!1,tags:{},type:{name:`enum`,raw:`DonutChartColorIntensity`,value:[{value:`"900"`},{value:`"800"`},{value:`"700"`},{value:`"600"`},{value:`"500"`},{value:`"400"`},{value:`"300"`},{value:`"200"`},{value:`"100"`}]}},trackColorIntensity:{defaultValue:{value:`100`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:`Интенсивность цвета для фонового кольца.`,name:`trackColorIntensity`,required:!1,tags:{default:`'100'`},type:{name:`enum`,raw:`DonutChartColorIntensity`,value:[{value:`"900"`},{value:`"800"`},{value:`"700"`},{value:`"600"`},{value:`"500"`},{value:`"400"`},{value:`"300"`},{value:`"200"`},{value:`"100"`}]}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:`CSS-класс для корневого элемента.`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DonutChart/types.ts`,name:`TypeLiteral`}],description:`Стили для корневого элемента.`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}}},tags:{}}}catch{}})))()}var L,R,z,B;function Se(){return(Se=e((()=>{i(),p(),L=l(u)`
  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    grid-template-columns: 1fr;
  }
`,R=l.div`
  aspect-ratio: 1 / 1;
  width: 162px;
  max-width: 100%;
`,z=l.div`
  display: grid;
  justify-items: flex-start;
`,B=l.div`
  display: grid;
  justify-items: center;
`})))()}function V(){return(V=e((()=>{Se()})))()}var Ce,H,we,U;function Te(){return(Te=e((()=>{se(),Ce=m(),ae(),a(),I(),V(),H=f(),we=({maxValue:e,initialValue:t=36,children:n})=>{let[r,i]=(0,Ce.useState)(t),a=r??0,o=Math.max(0,Math.min(100,Math.floor(a/e*100)));return(0,H.jsx)(oe,{controls:(0,H.jsx)(ie,{label:`Подписано документов`,value:r,onChange:i,helperText:`от 0 до ${e}`}),children:n({chartValue:a,maxValue:e,progressPercent:o})})},U=()=>(0,H.jsx)(we,{maxValue:100,children:({chartValue:e,maxValue:t,progressPercent:n})=>(0,H.jsx)(R,{children:(0,H.jsx)(F,{value:e,maxValue:t,children:(0,H.jsxs)(z,{children:[(0,H.jsx)(s,{variant:`caption`,color:`textSecondary`,children:`Подписание`}),(0,H.jsxs)(s,{variant:`h3`,isTabularNums:!0,children:[n,`%`]}),(0,H.jsxs)(s,{variant:`caption`,color:`textSecondary`,children:[e,` из `,t]})]})})})}),U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => <DonutChartStoryControlWrapper maxValue={100}>
    {({
    chartValue,
    maxValue,
    progressPercent
  }) => <ChartItem>
        <DonutChart value={chartValue} maxValue={maxValue}>
          <ChartLabel>
            <Typography variant="caption" color="textSecondary">
              Подписание
            </Typography>
            <Typography variant="h3" isTabularNums>
              {progressPercent}%
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {chartValue} из {maxValue}
            </Typography>
          </ChartLabel>
        </DonutChart>
      </ChartItem>}
  </DonutChartStoryControlWrapper>`,...U.parameters?.docs?.source}}}})))()}var W,G;function Ee(){return(Ee=e((()=>{I(),V(),W=f(),G={render:e=>(0,W.jsx)(R,{children:(0,W.jsx)(F,{...e})}),args:{value:36,maxValue:40,color:`primary`,colorIntensity:`700`},parameters:{docs:{disable:!0}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <ChartItem>
      <DonutChart {...args} />
    </ChartItem>,
  args: {
    value: 36,
    maxValue: 40,
    color: 'primary',
    colorIntensity: '700'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...G.parameters?.docs?.source}}}})))()}var K,q;function De(){return(De=e((()=>{a(),I(),V(),K=f(),q=()=>(0,K.jsx)(L,{container:!0,spacing:8,columns:3,children:[{title:`0%`,subtitle:`Нет документов`,value:0,maxValue:100,color:`grey`},{title:`1%`,subtitle:`1 из 100`,value:1,maxValue:100,color:`grey`},{title:`23%`,subtitle:`5 из 21`,value:5,maxValue:21,color:`warning`},{title:`25%`,subtitle:`25 из 100`,value:25,maxValue:100,color:`primary`},{title:`50%`,subtitle:`50 из 100`,value:50,maxValue:100,color:`primary`},{title:`75%`,subtitle:`75 из 100`,value:75,maxValue:100,color:`primary`},{title:`90%`,subtitle:`90 из 100`,value:90,maxValue:100,color:`error`},{title:`99%`,subtitle:`99 из 100`,value:99,maxValue:100,color:`success`},{title:`100%`,subtitle:`Все подписаны`,value:100,maxValue:100,color:`success`}].map(e=>(0,K.jsx)(R,{children:(0,K.jsx)(F,{value:e.value,maxValue:e.maxValue,color:e.color,children:(0,K.jsxs)(B,{children:[(0,K.jsx)(s,{variant:`caption`,color:`textSecondary`,children:e.subtitle}),(0,K.jsx)(s,{variant:`h4`,isTabularNums:!0,children:e.title})]})})},e.title))}),q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const cases: Case[] = [{
    title: '0%',
    subtitle: 'Нет документов',
    value: 0,
    maxValue: 100,
    color: 'grey'
  }, {
    title: '1%',
    subtitle: '1 из 100',
    value: 1,
    maxValue: 100,
    color: 'grey'
  }, {
    title: '23%',
    subtitle: '5 из 21',
    value: 5,
    maxValue: 21,
    color: 'warning'
  }, {
    title: '25%',
    subtitle: '25 из 100',
    value: 25,
    maxValue: 100,
    color: 'primary'
  }, {
    title: '50%',
    subtitle: '50 из 100',
    value: 50,
    maxValue: 100,
    color: 'primary'
  }, {
    title: '75%',
    subtitle: '75 из 100',
    value: 75,
    maxValue: 100,
    color: 'primary'
  }, {
    title: '90%',
    subtitle: '90 из 100',
    value: 90,
    maxValue: 100,
    color: 'error'
  }, {
    title: '99%',
    subtitle: '99 из 100',
    value: 99,
    maxValue: 100,
    color: 'success'
  }, {
    title: '100%',
    subtitle: 'Все подписаны',
    value: 100,
    maxValue: 100,
    color: 'success'
  }];
  return <ChartsContainer container spacing={8} columns={3}>
      {cases.map(item => <ChartItem key={item.title}>
          <DonutChart value={item.value} maxValue={item.maxValue} color={item.color}>
            <ChartLabelCentered>
              <Typography variant="caption" color="textSecondary">
                {item.subtitle}
              </Typography>
              <Typography variant="h4" isTabularNums>
                {item.title}
              </Typography>
            </ChartLabelCentered>
          </DonutChart>
        </ChartItem>)}
    </ChartsContainer>;
}`,...q.parameters?.docs?.source},description:{story:"Дробный процент округляется вниз.\nПри `value=5`, `maxValue=21` отображается `23%`.",...q.parameters?.docs?.description}}};try{q.displayName=`ValueEdgeCases`,q.__docgenInfo={description:"Дробный процент округляется вниз.\nПри `value=5`, `maxValue=21` отображается `23%`.",displayName:`ValueEdgeCases`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DonutChart/stories/ValueEdgeCases.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var J,Oe,Y;function ke(){return(ke=e((()=>{re(),p(),te(),a(),I(),V(),J=f(),Oe=l(z)`
  max-width: 100px;
`,Y=()=>(0,J.jsxs)(L,{container:!0,spacing:8,columns:2,children:[(0,J.jsx)(R,{children:(0,J.jsx)(F,{value:50,maxValue:100,color:`primary`,children:(0,J.jsx)(F,{value:25,maxValue:100,color:`primary`,colorIntensity:`400`,children:(0,J.jsxs)(B,{children:[(0,J.jsx)(s,{variant:`caption`,color:`textSecondary`,children:`Согласование`}),(0,J.jsx)(s,{variant:`h4`,isTabularNums:!0,children:`2 из 4`})]})})})}),(0,J.jsx)(R,{children:(0,J.jsx)(F,{value:72,maxValue:100,children:(0,J.jsx)(s,{variant:`h3`,isTabularNums:!0,children:`72%`})})}),(0,J.jsx)(R,{children:(0,J.jsx)(F,{value:100,maxValue:100,color:`success`})}),(0,J.jsx)(R,{children:(0,J.jsx)(F,{value:42,maxValue:100,color:`warning`,children:(0,J.jsxs)(Oe,{children:[(0,J.jsx)(s,{variant:`caption`,color:`textSecondary`,children:`Срок истекает`}),(0,J.jsx)(ee,{title:`ООО «Ромашка и партнёры» — 10 000 000 дн.`,children:(0,J.jsx)(ne,{variant:`h3`,isTabularNums:!0,children:`10 000 000 дн.`})})]})})})]}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <ChartsContainer container spacing={8} columns={2}>
    <ChartItem>
      <DonutChart value={50} maxValue={100} color="primary">
        <DonutChart value={25} maxValue={100} color="primary" colorIntensity="400">
          <ChartLabelCentered>
            <Typography variant="caption" color="textSecondary">
              Согласование
            </Typography>
            <Typography variant="h4" isTabularNums>
              2 из 4
            </Typography>
          </ChartLabelCentered>
        </DonutChart>
      </DonutChart>
    </ChartItem>
    <ChartItem>
      <DonutChart value={72} maxValue={100}>
        <Typography variant="h3" isTabularNums>
          72%
        </Typography>
      </DonutChart>
    </ChartItem>

    <ChartItem>
      <DonutChart value={100} maxValue={100} color="success" />
    </ChartItem>

    <ChartItem>
      <DonutChart value={42} maxValue={100} color="warning">
        <NarrowChartLabel>
          <Typography variant="caption" color="textSecondary">
            Срок истекает
          </Typography>
          <Tooltip title="ООО «Ромашка и партнёры» — 10 000 000 дн.">
            <OverflowTypography variant="h3" isTabularNums>
              10 000 000 дн.
            </OverflowTypography>
          </Tooltip>
        </NarrowChartLabel>
      </DonutChart>
    </ChartItem>
  </ChartsContainer>`,...Y.parameters?.docs?.source},description:{story:`Контент в центре произвольный`,...Y.parameters?.docs?.description}}};try{Y.displayName=`WithChildren`,Y.__docgenInfo={description:`Контент в центре произвольный`,displayName:`WithChildren`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DonutChart/stories/WithChildren.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z;function Ae(){return(Ae=e((()=>{a(),I(),V(),X=f(),Z=()=>(0,X.jsx)(L,{container:!0,spacing:8,columns:2,children:[{color:`primary`,outerLabel:`Отправлено`,innerLabel:`Подписано`,outerValue:72,innerValue:50,percent:72},{color:`success`,outerLabel:`В срок`,innerLabel:`Завершено`,outerValue:90,innerValue:68,percent:90},{color:`warning`,outerLabel:`На проверке`,innerLabel:`В работе`,outerValue:55,innerValue:32,percent:55},{color:`error`,outerLabel:`Просрочено`,innerLabel:`Отклонено`,outerValue:18,innerValue:6,percent:18}].map(e=>(0,X.jsx)(R,{children:(0,X.jsx)(F,{value:e.outerValue,maxValue:100,color:e.color,colorIntensity:`700`,children:(0,X.jsx)(F,{value:e.innerValue,maxValue:100,color:e.color,colorIntensity:`400`,children:(0,X.jsxs)(B,{children:[(0,X.jsx)(s,{variant:`caption`,color:`textSecondary`,children:e.outerLabel}),(0,X.jsx)(s,{variant:`caption`,color:`textSecondary`,children:e.innerLabel}),(0,X.jsxs)(s,{variant:`h4`,isTabularNums:!0,children:[e.percent,`%`]})]})})})},e.color))}),Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const cases: ColorCase[] = [{
    color: 'primary',
    outerLabel: 'Отправлено',
    innerLabel: 'Подписано',
    outerValue: 72,
    innerValue: 50,
    percent: 72
  }, {
    color: 'success',
    outerLabel: 'В срок',
    innerLabel: 'Завершено',
    outerValue: 90,
    innerValue: 68,
    percent: 90
  }, {
    color: 'warning',
    outerLabel: 'На проверке',
    innerLabel: 'В работе',
    outerValue: 55,
    innerValue: 32,
    percent: 55
  }, {
    color: 'error',
    outerLabel: 'Просрочено',
    innerLabel: 'Отклонено',
    outerValue: 18,
    innerValue: 6,
    percent: 18
  }];
  return <ChartsContainer container spacing={8} columns={2}>
      {cases.map(item => <ChartItem key={item.color}>
          <DonutChart value={item.outerValue} maxValue={100} color={item.color} colorIntensity="700">
            <DonutChart value={item.innerValue} maxValue={100} color={item.color} colorIntensity="400">
              <ChartLabelCentered>
                <Typography variant="caption" color="textSecondary">
                  {item.outerLabel}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {item.innerLabel}
                </Typography>
                <Typography variant="h4" isTabularNums>
                  {item.percent}%
                </Typography>
              </ChartLabelCentered>
            </DonutChart>
          </DonutChart>
        </ChartItem>)}
    </ChartsContainer>;
}`,...Z.parameters?.docs?.source},description:{story:"С помощью `color` и `colorIntensity` можно менять цвет и контрастность кольца.",...Z.parameters?.docs?.description}}};try{Z.displayName=`WithCustomColors`,Z.__docgenInfo={description:"С помощью `color` и `colorIntensity` можно менять цвет и контрастность кольца.",displayName:`WithCustomColors`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DonutChart/stories/WithCustomColors.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Q,$;function je(){return(je=e((()=>{a(),I(),V(),Q=f(),$=()=>(0,Q.jsx)(L,{container:!0,spacing:8,columns:4,children:[`100`,`300`,`500`,`700`].map(e=>(0,Q.jsx)(R,{children:(0,Q.jsx)(F,{value:36,maxValue:100,trackColorIntensity:e,children:(0,Q.jsxs)(B,{children:[(0,Q.jsx)(s,{variant:`caption`,color:`textSecondary`,children:`Трек`}),(0,Q.jsx)(s,{variant:`h4`,isTabularNums:!0,children:e})]})})},e))}),$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const trackColorIntensities: DonutChartColorIntensity[] = ['100', '300', '500', '700'];
  return <ChartsContainer container spacing={8} columns={4}>
      {trackColorIntensities.map(trackColorIntensity => <ChartItem key={trackColorIntensity}>
          <DonutChart value={36} maxValue={100} trackColorIntensity={trackColorIntensity}>
            <ChartLabelCentered>
              <Typography variant="caption" color="textSecondary">
                Трек
              </Typography>
              <Typography variant="h4" isTabularNums>
                {trackColorIntensity}
              </Typography>
            </ChartLabelCentered>
          </DonutChart>
        </ChartItem>)}
    </ChartsContainer>;
}`,...$.parameters?.docs?.source},description:{story:"`trackColorIntensity` задаёт интенсивность серого цвета для фонового кольца.",...$.parameters?.docs?.description}}};try{$.displayName=`WithTrackColorIntensity`,$.__docgenInfo={description:"`trackColorIntensity` задаёт интенсивность серого цвета для фонового кольца.",displayName:`WithTrackColorIntensity`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DonutChart/stories/WithTrackColorIntensity.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Me,Ne;function Pe(){return(Pe=e((()=>{I(),Te(),Ee(),De(),ke(),Ae(),je(),Me={title:`Charts/DonutChart`,component:F,parameters:{docs:{description:{component:"Виджет прогресса.\nКонтент в центре передаётся через `children`."}}}},Ne=[`Interaction`,`BasicUsage`,`WithCustomColors`,`WithTrackColorIntensity`,`WithChildren`,`ValueEdgeCases`]})))()}Pe();export{U as BasicUsage,G as Interaction,q as ValueEdgeCases,Y as WithChildren,Z as WithCustomColors,$ as WithTrackColorIntensity,Ne as __namedExportsOrder,Me as default};