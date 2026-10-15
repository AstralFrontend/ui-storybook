import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,dt as n,ft as r,ji as i,xa as a,yn as o}from"./preview-msKJ6Jz4.js";import{n as s,t as c}from"./ComplianceStatus-B4KgAScg.js";var l,u;function d(){return(d=e((()=>{s(),l=a(),u=()=>(0,l.jsx)(c,{title:`Требования к паролю`,backgroundColor:`primary`,itemsList:[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`}]}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <ComplianceStatus title="Требования к паролю" backgroundColor="primary" itemsList={[{
    status: 'default',
    text: 'Латинские символы разного регистра (A-Z, a-z)'
  }, {
    status: 'default',
    text: 'Не менее 8 символов'
  }, {
    status: 'success',
    text: 'Арабские цифры (0-9)'
  }, {
    status: 'reject',
    text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)'
  }]} />;
}`,...u.parameters?.docs?.source},description:{story:`Пропс предназначенный для изменения фонового цвета, по умолчанию имеет значение "grey"`,...u.parameters?.docs?.description}}};try{u.displayName=`BackgroundColor`,u.__docgenInfo={description:`Пропс предназначенный для изменения фонового цвета, по умолчанию имеет значение "grey"`,displayName:`BackgroundColor`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/stories/BackgroundColor.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var f,p,m;function h(){return(h=e((()=>{f=t(),s(),p=a(),m=()=>{let e=[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`default`,text:`Арабские цифры (0-9)`},{status:`default`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`},{status:`default`,text:`Не должен совпадать со старым паролем`}],[t,n]=(0,f.useState)(e),r=(0,f.useRef)([]);return(0,f.useEffect)(()=>{let t=0,i=()=>{if(t>=e.length)return;let a=t;n(e=>e.map((e,t)=>t===a?{...e,status:`loading`}:e));let o=setTimeout(()=>{let e=Math.random()>.5?`success`:`reject`;n(t=>t.map((t,n)=>n===a?{...t,status:e}:t)),t++,i()},1e3);r.current.push(o)};return i(),()=>{r.current.forEach(e=>{clearTimeout(e)}),r.current=[]}},[]),(0,p.jsx)(c,{title:`Требования к паролю`,itemsList:t})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const initialItems: ComplianceStatusItem[] = [{
    status: 'default',
    text: 'Латинские символы разного регистра (A-Z, a-z)'
  }, {
    status: 'default',
    text: 'Не менее 8 символов'
  }, {
    status: 'default',
    text: 'Арабские цифры (0-9)'
  }, {
    status: 'default',
    text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)'
  }, {
    status: 'default',
    text: 'Не должен совпадать со старым паролем'
  }];
  const [itemsList, setItemsList] = useState<ComplianceStatusItem[]>(initialItems);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => {
    let currentIndex = 0;
    const processNextItem = () => {
      if (currentIndex >= initialItems.length) {
        return;
      }
      const index = currentIndex;
      setItemsList(prev => prev.map((item, i) => i === index ? {
        ...item,
        status: 'loading' as const
      } : item));
      const resultTimeoutId = setTimeout(() => {
        const finalStatus: 'success' | 'reject' = Math.random() > 0.5 ? 'success' : 'reject';
        setItemsList(prev => prev.map((item, i) => i === index ? {
          ...item,
          status: finalStatus
        } : item));
        currentIndex++;
        processNextItem();
      }, 1000);
      timeoutsRef.current.push(resultTimeoutId);
    };
    processNextItem();
    return () => {
      timeoutsRef.current.forEach(timeoutId => {
        clearTimeout(timeoutId);
      });
      timeoutsRef.current = [];
    };
  }, []);
  return <ComplianceStatus title="Требования к паролю" itemsList={itemsList} />;
}`,...m.parameters?.docs?.source}}}})))()}var g,_;function v(){return(v=e((()=>{n(),s(),g=a(),_=()=>(0,g.jsx)(c,{title:`Требования к паролю`,itemsList:[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`}],children:(0,g.jsx)(r,{children:`Пожалуйста, убедитесь что введенное значение соответствует правилам, указанными выше`})}),_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <ComplianceStatus title="Требования к паролю" itemsList={[{
    status: 'default',
    text: 'Латинские символы разного регистра (A-Z, a-z)'
  }, {
    status: 'default',
    text: 'Не менее 8 символов'
  }, {
    status: 'success',
    text: 'Арабские цифры (0-9)'
  }, {
    status: 'reject',
    text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)'
  }]}>
      <Typography>
        Пожалуйста, убедитесь что введенное значение соответствует правилам,
        указанными выше
      </Typography>
    </ComplianceStatus>;
}`,..._.parameters?.docs?.source},description:{story:`Пропс для добавления контента после списка`,..._.parameters?.docs?.description}}};try{_.displayName=`Children`,_.__docgenInfo={description:`Пропс для добавления контента после списка`,displayName:`Children`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/stories/Children.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var y;function b(){return(b=e((()=>{y={args:{itemsList:[{status:`default`,text:`Lorem ipsum dolor sit.`}]},parameters:{docs:{disable:!0}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    itemsList: [{
      status: 'default',
      text: 'Lorem ipsum dolor sit.'
    }]
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...y.parameters?.docs?.source}}}})))()}var x,S;function C(){return(C=e((()=>{n(),s(),x=a(),S=()=>(0,x.jsx)(c,{title:`Требования к паролю`,subtitle:(0,x.jsx)(r,{children:`Пожалуйста, убедитесь что введенное значение соответствует указанными ниже правилам`}),itemsList:[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`}]}),S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <ComplianceStatus title="Требования к паролю" subtitle={<Typography>
          Пожалуйста, убедитесь что введенное значение соответствует указанными
          ниже правилам
        </Typography>} itemsList={[{
    status: 'default',
    text: 'Латинские символы разного регистра (A-Z, a-z)'
  }, {
    status: 'default',
    text: 'Не менее 8 символов'
  }, {
    status: 'success',
    text: 'Арабские цифры (0-9)'
  }, {
    status: 'reject',
    text: 'Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)'
  }]} />;
}`,...S.parameters?.docs?.source},description:{story:`Пропс для добавления контента между заголовком и списком`,...S.parameters?.docs?.description}}};try{S.displayName=`Subtitle`,S.__docgenInfo={description:`Пропс для добавления контента между заголовком и списком`,displayName:`Subtitle`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/ComplianceStatus/stories/Subtitle.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E,D;function O(){return(O=e((()=>{o(),s(),w=a(),T=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};
  align-items: start;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;
  }
`,E=[{status:`default`,text:`Латинские символы разного регистра (A-Z, a-z)`},{status:`default`,text:`Не менее 8 символов`},{status:`success`,text:`Арабские цифры (0-9)`},{status:`reject`,text:`Знаки пунктуации (!”$%&’()+,-./:;<=>?@[]^_{|}”)`},{status:`loading`,text:`Не должен совпадать со старым паролем`}],D=()=>(0,w.jsxs)(T,{children:[(0,w.jsx)(c,{title:`Требования к паролю`,itemsList:E}),(0,w.jsx)(c,{title:`Требования к паролю`,variant:`outlined`,itemsList:E}),(0,w.jsx)(c,{title:`Требования к паролю`,variant:`plain`,itemsList:E})]}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <ComplianceStatus title="Требования к паролю" itemsList={itemsList} />
      <ComplianceStatus title="Требования к паролю" variant="outlined" itemsList={itemsList} />
      <ComplianceStatus title="Требования к паролю" variant="plain" itemsList={itemsList} />
    </Wrapper>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A;function j(){return(j=e((()=>{s(),d(),h(),v(),b(),C(),O(),k={title:`Statuses/ComplianceStatus`,component:c,parameters:{docs:{description:{component:`ComplianceStatus - это компонент, позволяющий отображать статусы прохождения сложных валидаций
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=146-15484)`}}}},A=[`Interaction`,`BasicUsage`,`Children`,`Subtitle`,`BackgroundColor`,`Variant`]})))()}j();export{u as BackgroundColor,m as BasicUsage,_ as Children,y as Interaction,S as Subtitle,D as Variant,A as __namedExportsOrder,k as default};