import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,na as n,oa as r,ra as i,sa as a,xa as o}from"./preview-DApj709n.js";import{n as s,t as c}from"./isBrowser-CqlMecsi.js";import{t as l}from"./useIsomorphicLayoutEffect-CWBIxe4P.js";function u(){return(u=e((()=>{t(),l(),c(),s&&window.ResizeObserver})))()}function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{title:`Hooks/useMeasure`}),`
`,(0,p.jsx)(t.h1,{id:`usemeasure`,children:(0,p.jsx)(t.code,{children:`useMeasure`})}),`
`,(0,p.jsxs)(t.p,{children:[`Отслеживает размеры HTML-элемента с помощью `,(0,p.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver`,rel:`nofollow`,children:`Resize Observer API`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const Demo = () => {
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
`,(0,p.jsxs)(t.p,{children:[`Этот хук использует `,(0,p.jsx)(t.code,{children:`ResizeObserver`}),` API. Если вы хотите поддерживать старые браузеры,
рассмотрите возможность установки `,(0,p.jsx)(t.code,{children:`resize-observer-polyfill`}),` перед запуском вашего приложения.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`if (!window.ResizeObserver) {
  window.ResizeObserver = (await import('resize-observer-polyfill')).default;
}
`})}),`
`,(0,p.jsx)(t.h2,{id:`related-hooks`,children:`Related hooks`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:(0,p.jsx)(t.a,{href:`../useSize/useSize.mdx`,children:`useSize`})}),`
`]})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=o(),r(),u(),i()})))()}m();export{f as default};