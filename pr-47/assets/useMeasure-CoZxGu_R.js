import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{aa as t,ea as n,ia as r,ta as i,ya as a,za as o}from"./preview-Z1rCd2zM.js";import{n as s,t as c}from"./isBrowser-D8WSmySr.js";import{t as l}from"./useIsomorphicLayoutEffect-DtP9ZftN.js";function u(){return(u=e((()=>{o(),l(),c(),s&&window.ResizeObserver})))()}function d(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{title:`Hooks/useMeasure`}),`
`,(0,p.jsx)(r.h1,{id:`usemeasure`,children:(0,p.jsx)(r.code,{children:`useMeasure`})}),`
`,(0,p.jsxs)(r.p,{children:[`Отслеживает размеры HTML-элемента с помощью `,(0,p.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver`,rel:`nofollow`,children:`Resize Observer API`}),`.`]}),`
`,(0,p.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();

  return (
    <div ref={ref}>
      <div>x: {x}</div>	
      <div>y: {y}</div>
      <div>width: {width}</div>
      <div>height: {height}</div>
      <div>top: {top}</div>
      <div>right: {right}</div>
      <div>bottom: {bottom}</div>
      <div>left: {left}</div>
    </div>
  );
};
`})}),`
`,(0,p.jsxs)(r.p,{children:[`Этот хук использует `,(0,p.jsx)(r.code,{children:`ResizeObserver`}),` API. Если вы хотите поддерживать старые браузеры,
рассмотрите возможность установки `,(0,p.jsx)(r.code,{children:`resize-observer-polyfill`}),` перед запуском вашего приложения.`]}),`
`,(0,p.jsx)(r.pre,{children:(0,p.jsx)(r.code,{className:`language-ts`,children:`if (!window.ResizeObserver) {
  window.ResizeObserver = (await import('resize-observer-polyfill')).default;
}
`})}),`
`,(0,p.jsx)(r.h2,{id:`related-hooks`,children:`Related hooks`}),`
`,(0,p.jsxs)(r.ul,{children:[`
`,(0,p.jsx)(r.li,{children:(0,p.jsx)(r.a,{href:`../useSize/useSize.mdx`,children:`useSize`})}),`
`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=a(),r(),u(),i()})))()}m();export{f as default};