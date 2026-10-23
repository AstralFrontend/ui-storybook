import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,na as n,oa as r,ra as i,sa as a,xa as o}from"./preview-NvIN-gdT.js";import{t as s}from"./useRafState-grf4Ernh.js";function c(){return(c=e((()=>{t(),s()})))()}function l(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Hooks/useScroll`}),`
`,(0,d.jsx)(t.h1,{id:`usescroll`,children:(0,d.jsx)(t.code,{children:`useScroll`})}),`
`,(0,d.jsx)(t.p,{children:`Отслеживает позицию скролла внутри HTML-элемента, на который передан ref.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`const Demo = () => {
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
`,(0,d.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-ts`,children:`useScroll(ref: RefObject<HTMLElement>);
`})})]})}function u(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=o(),r(),c(),i()})))()}f();export{u as default};