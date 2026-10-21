import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-CLkCEehX.js";import{t as o}from"./useInterval-Ryo7EBq2.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useInterval`}),`
`,(0,l.jsx)(r.h1,{id:`useinterval`,children:(0,l.jsx)(r.code,{children:`useInterval`})}),`
`,(0,l.jsxs)(r.p,{children:[`Вызывает функцию с заданным интервалом.
Если передать `,(0,l.jsx)(r.code,{children:`null`}),`, интервал не будет запущен (или будет остановлен).
Если значение не указано (`,(0,l.jsx)(r.code,{children:`undefined`}),`), используется задержка `,(0,l.jsx)(r.code,{children:`0`}),` мс.`]}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
import { useNewToggle } from '../useNewToggle';

export const Demo = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, toggleIsRunning] = useNewToggle(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <div>
        delay:{' '}
        <input
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
      </div>
      <Typography>count: {count}</Typography>
      <div>
        <button onClick={toggleIsRunning}>
          {isRunning ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  );
};
`})}),`
`,(0,l.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-ts`,children:`useInterval(callback, delay?: number)
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};