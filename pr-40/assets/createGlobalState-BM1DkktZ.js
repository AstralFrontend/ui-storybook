import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,na as n,oa as r,ra as i,sa as a,xa as o}from"./preview-DbSmHAJq.js";import{t as s}from"./useIsomorphicLayoutEffect-58v1KRv6.js";function c(){return(c=e((()=>{t(),s()})))()}function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Hooks/createGlobalState`}),`
`,(0,d.jsx)(t.h1,{id:`createglobalstate`,children:(0,d.jsx)(t.code,{children:`createGlobalState`})}),`
`,(0,d.jsx)(t.p,{children:`Создает глобальное состояние, доступное в любом компоненте, позволяющее сделать ререндер компонента.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
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
`,(0,d.jsx)(t.p,{children:`Он также позволяет инициализировать состояние с помощью функции и использовать функцию в setState:`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';
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
`})})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=o(),r(),c(),i()})))()}f();export{u as default};