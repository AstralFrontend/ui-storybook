import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-DREXElCf.js";import{t as o}from"./useSecondsCountdown-RFLHmffB.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useSecondsCountdown`}),`
`,(0,l.jsx)(n.h1,{id:`usesecondscountdown`,children:(0,l.jsx)(n.code,{children:`useSecondsCountdown`})}),`
`,(0,l.jsx)(n.p,{children:`Предоставляет функционал с текстом убывающих секунд`}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsxs)(n.p,{children:[`Prop `,(0,l.jsx)(n.code,{children:`targetDate`}),` Целевая дата, до которой будет идти отсчет времени от текущего времени.
targetDate в приоритете при одновременном использовании с seconds`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const TargetDate = () => {
  const dateIn90sec = new Date(Date.now() + 90 * 1000);
  const { textTime } = useSecondsCountdown({ targetDate: dateIn90sec });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Prop `,(0,l.jsx)(n.code,{children:`seconds`}),` Количество секунд на которые должен запуститься таймер
игнорируется, если передан targetDate`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Seconds = () => {
  const { textTime } = useSecondsCountdown({ seconds: 90 });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Prop `,(0,l.jsx)(n.code,{children:`isInitialActive`}),` флаг, отвечающий за необходимость немедленного запуска счетчика при создании`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const IsInitialActive = () => {
  const { textTime } = useSecondsCountdown({
    seconds: 90,
    isInitialActive: false,
  });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Метод `,(0,l.jsx)(n.code,{children:`restart`}),` необходим, для повторного запуска счетчика`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Restart = () => {
  const { textTime, restart } = useSecondsCountdown({
    seconds: 10,
  });

  const handleClick = () => {
    restart(90);
  };

  return (
    <Grid spacing={2}>
      <Typography>{textTime}</Typography>
      <Button onClick={handleClick}>Перезапустить</Button>
    </Grid>
  );
};
`})}),`
`,(0,l.jsxs)(n.p,{children:[`Свойство `,(0,l.jsx)(n.code,{children:`isActive`}),` флаг, показывающий активность таймера`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const IsActive = () => {
  const { textTime, isActive } = useSecondsCountdown({
    seconds: 5,
  });

  return (
    <Grid spacing={2}>
      <Typography>{textTime}</Typography>
      <Typography>isActive: {String(isActive)}</Typography>
    </Grid>
  );
};
`})}),`
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`const [
    isActive: boolean;
    textTime: string;
    restart: (value: Date | number) => void;
] = useSecondsCountdown(targetDate?: Date, isInitialActive?: boolean, seconds?: number)
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};