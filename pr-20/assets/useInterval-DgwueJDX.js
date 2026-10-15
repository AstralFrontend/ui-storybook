import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-C6mvn2Tz.js";import{t as o}from"./useInterval-G8Ci7DDp.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useInterval`}),`
`,(0,l.jsx)(n.h1,{id:`useinterval`,children:(0,l.jsx)(n.code,{children:`useInterval`})}),`
`,(0,l.jsxs)(n.p,{children:[`Вызывает функцию с заданным интервалом.
Если передать `,(0,l.jsx)(n.code,{children:`null`}),`, интервал не будет запущен (или будет остановлен).
Если значение не указано (`,(0,l.jsx)(n.code,{children:`undefined`}),`), используется задержка `,(0,l.jsx)(n.code,{children:`0`}),` мс.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
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
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`useInterval(callback, delay?: number)
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};