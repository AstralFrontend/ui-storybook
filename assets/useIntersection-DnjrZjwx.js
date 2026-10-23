import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-28_ENgae.js";import{t as o}from"./useIntersection-acYp7bJH.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useIntersection`}),`
`,(0,l.jsx)(r.h1,{id:`useintersection`,children:(0,l.jsx)(r.code,{children:`useIntersection`})}),`
`,(0,l.jsxs)(r.p,{children:[`Отслеживает изменения пересечения целевого элемента с родительским элементом или с верхним уровнем области просмотра документа.
Использует `,(0,l.jsx)(r.code,{children:`Intersection Observer API`}),` и возвращает `,(0,l.jsx)(r.code,{children:`IntersectionObserverEntry`}),`.`]}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  return (
    <div ref={intersectionRef}>
      {intersection && intersection.intersectionRatio < 1
        ? 'Obscured'
        : 'Fully in view'}
    </div>
  );
};
`})}),`
`,(0,l.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-ts`,children:`useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): IntersectionObserverEntry | null;
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};