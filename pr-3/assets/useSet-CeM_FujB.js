import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-DtNO2DmU.js";import{t as o}from"./useSet-DW3JORKs.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useSet`}),`
`,(0,l.jsx)(n.h1,{id:`useset`,children:(0,l.jsx)(n.code,{children:`useSet`})}),`
`,(0,l.jsxs)(n.p,{children:[`Позволяет задать `,(0,l.jsx)(n.a,{href:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set`,rel:`nofollow`,children:`Set`}),` как state и предоставляет методы для работы с ним.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Demo = () => {
  const [set, { add, has, remove, toggle, reset, clear }] = useSet(new Set(['hello']));

  return (
    <div>
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  );
};
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};