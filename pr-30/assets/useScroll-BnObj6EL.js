import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a,za as o}from"./preview-IOjL1aMA.js";import{t as s}from"./useRafState-DZH1wCwN.js";function c(){return(c=e((()=>{o(),s()})))()}function l(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Hooks/useScroll`}),`
`,(0,d.jsx)(r.h1,{id:`usescroll`,children:(0,d.jsx)(r.code,{children:`useScroll`})}),`
`,(0,d.jsx)(r.p,{children:`Отслеживает позицию скролла внутри HTML-элемента, на который передан ref.`}),`
`,(0,d.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const scrollRef = React.useRef(null);
  const {x, y} = useScroll(scrollRef);

  return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
`})}),`
`,(0,d.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-ts`,children:`useScroll(ref: RefObject<HTMLElement>);
`})})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=a(),r(),c(),i()})))()}f();export{u as default};