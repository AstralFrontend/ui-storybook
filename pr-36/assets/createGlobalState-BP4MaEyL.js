import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a,za as o}from"./preview-BrWggRPd.js";import{t as s}from"./useIsomorphicLayoutEffect-DRkiCGm-.js";function c(){return(c=e((()=>{o(),s()})))()}function l(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Hooks/createGlobalState`}),`
`,(0,d.jsx)(r.h1,{id:`createglobalstate`,children:(0,d.jsx)(r.code,{children:`createGlobalState`})}),`
`,(0,d.jsx)(r.p,{children:`Создает глобальное состояние, доступное в любом компоненте, позволяющее сделать ререндер компонента.`}),`
`,(0,d.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
import { type FC } from 'react';

const useGlobalValue = createGlobalState<number>(0);

const CompA: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button onClick={() => setValue(value + 1)}>+</button>;
};

const CompB: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button onClick={() => setValue(value - 1)}>-</button>;
};

const Demo: FC = () => {
  const [value] = useGlobalValue();
  return (
    <div>
      <Typography>{value}</Typography>
      <CompA />
      <CompB />
    </div>
  );
};
`})}),`
`,(0,d.jsx)(r.p,{children:`Он также позволяет инициализировать состояние с помощью функции и использовать функцию в setState:`}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
import { type FC } from 'react';

const useGlobalValue = createGlobalState<number>(() => 0);

const CompA: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button onClick={() => setValue(value => value + 1)}>+</button>;
};

const CompB: FC = () => {
  const [value, setValue] = useGlobalValue();

  return <button onClick={() => setValue(value => value - 1)}>-</button>;
};

const Demo: FC = () => {
  const [value] = useGlobalValue();
  return (
    <div>
      <Typography>{value}</Typography>
      <CompA />
      <CompB />
    </div>
  );
};
`})})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),r(),c(),i()})))()}f();export{u as default};