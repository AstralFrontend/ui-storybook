import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-Bh-2MF8C.js";import{t as o}from"./useSecondsCountdown-p7SSO3ZE.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useSecondsCountdown`}),`
`,(0,l.jsx)(r.h1,{id:`usesecondscountdown`,children:(0,l.jsx)(r.code,{children:`useSecondsCountdown`})}),`
`,(0,l.jsx)(r.p,{children:`Предоставляет функционал с текстом убывающих секунд`}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsxs)(r.p,{children:[`Prop `,(0,l.jsx)(r.code,{children:`targetDate`}),` Целевая дата, до которой будет идти отсчет времени от текущего времени.
targetDate в приоритете при одновременном использовании с seconds`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const TargetDate = () => {
  const dateIn90sec = new Date(Date.now() + 90 * 1000);
  const { textTime } = useSecondsCountdown({ targetDate: dateIn90sec });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(r.p,{children:[`Prop `,(0,l.jsx)(r.code,{children:`seconds`}),` Количество секунд на которые должен запуститься таймер
игнорируется, если передан targetDate`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const Seconds = () => {
  const { textTime } = useSecondsCountdown({ seconds: 90 });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(r.p,{children:[`Prop `,(0,l.jsx)(r.code,{children:`isInitialActive`}),` флаг, отвечающий за необходимость немедленного запуска счетчика при создании`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const IsInitialActive = () => {
  const { textTime } = useSecondsCountdown({
    seconds: 90,
    isInitialActive: false,
  });

  return <Typography>{textTime}</Typography>;
};
`})}),`
`,(0,l.jsxs)(r.p,{children:[`Метод `,(0,l.jsx)(r.code,{children:`restart`}),` необходим, для повторного запуска счетчика`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const Restart = () => {
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
`,(0,l.jsxs)(r.p,{children:[`Свойство `,(0,l.jsx)(r.code,{children:`isActive`}),` флаг, показывающий активность таймера`]}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const IsActive = () => {
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
`,(0,l.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-ts`,children:`const [
    isActive: boolean;
    textTime: string;
    restart: (value: Date | number) => void;
] = useSecondsCountdown(targetDate?: Date, isInitialActive?: boolean, seconds?: number)
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};