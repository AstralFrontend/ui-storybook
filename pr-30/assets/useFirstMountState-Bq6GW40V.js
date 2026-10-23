import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-CiiswFkd.js";import{t as o}from"./useFirstMountState-BJkPBqGm.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useFirstMountState`}),`
`,(0,l.jsx)(r.h1,{id:`usefirstmountstate`,children:(0,l.jsx)(r.code,{children:`useFirstMountState`})}),`
`,(0,l.jsxs)(r.p,{children:[`Возвращает `,(0,l.jsx)(r.code,{children:`true`}),`, если компонент только что смонтирован (на первом рендере), и `,(0,l.jsx)(r.code,{children:`false`}),` в противном случае.`]}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';

const Demo = () => {
  const isFirstMount = useFirstMountState();
  const [, setState] = React.useState(0);

  return (
    <div>
      <Typography>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</Typography>
      <br />
      <button onClick={() => setState((value) => value + 1)}>re-render</button>
    </div>
  );
};
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};