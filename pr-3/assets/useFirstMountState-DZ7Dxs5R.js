import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-BdEXlm_o.js";import{t as o}from"./useFirstMountState-BJB2uWPL.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useFirstMountState`}),`
`,(0,l.jsx)(n.h1,{id:`usefirstmountstate`,children:(0,l.jsx)(n.code,{children:`useFirstMountState`})}),`
`,(0,l.jsxs)(n.p,{children:[`Возвращает `,(0,l.jsx)(n.code,{children:`true`}),`, если компонент только что смонтирован (на первом рендере), и `,(0,l.jsx)(n.code,{children:`false`}),` в противном случае.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { Typography } from '../Typography';

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
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};