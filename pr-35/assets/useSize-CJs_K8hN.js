import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{Va as n,na as r,oa as i,ra as a,sa as o,xa as s}from"./preview-IrKUkjnY.js";var c,l,u,d;function f(){return(f=e((()=>{c=t(n()),{useState:l,useEffect:u,useRef:d}=c})))()}function p(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{title:`Hooks/useSize`}),`
`,(0,h.jsx)(t.h1,{id:`usesize`,children:(0,h.jsx)(t.code,{children:`useSize`})}),`
`,(0,h.jsx)(t.p,{children:`Отслеживает размеры HTML-элемента.`}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-tsx`,children:`const Demo = () => {
  const [sized, {width, height}] = useSize(
    ({width}) => <div style={{background: 'red'}}>Size me up! ({width}px)</div>,
    { width: 100, height: 100 }
  );

  return (
    <div>
      {sized}
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};
`})}),`
`,(0,h.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-ts`,children:`useSize(element, initialSize);
`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`element`}),` — элемент, размер которого отслеживается.`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`initialSize`}),` — начальный размер, содержащий ключи `,(0,h.jsx)(t.code,{children:`width`}),` и `,(0,h.jsx)(t.code,{children:`height`}),`.`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`related-hooks`,children:`Related hooks`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:(0,h.jsx)(t.a,{href:`../useMeasure/useMeasure.mdx`,children:`useMeasure`})}),`
`]})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=s(),i(),f(),a()})))()}g();export{m as default};