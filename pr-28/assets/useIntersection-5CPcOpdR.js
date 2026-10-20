import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-DRblasGc.js";import{t as o}from"./useIntersection-Csjg1wiD.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useIntersection`}),`
`,(0,l.jsx)(n.h1,{id:`useintersection`,children:(0,l.jsx)(n.code,{children:`useIntersection`})}),`
`,(0,l.jsxs)(n.p,{children:[`Отслеживает изменения пересечения целевого элемента с родительским элементом или с верхним уровнем области просмотра документа.
Использует `,(0,l.jsx)(n.code,{children:`Intersection Observer API`}),` и возвращает `,(0,l.jsx)(n.code,{children:`IntersectionObserverEntry`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Demo = () => {
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
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`useIntersection(
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
): IntersectionObserverEntry | null;
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};