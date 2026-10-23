import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a,za as o}from"./preview-BYX69pdz.js";function s(){return(s=e((()=>{o()})))()}function c(){return(c=e((()=>{s()})))()}function l(){return(l=e((()=>{o(),c()})))()}function u(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{title:`Hooks/useDebounce`}),`
`,(0,f.jsx)(r.h1,{id:`usedebounce`,children:(0,f.jsx)(r.code,{children:`useDebounce`})}),`
`,(0,f.jsx)(r.p,{children:`Откладывает вызов функции до тех пор, пока не пройдет указанное количество миллисекунд с момента последнего вызова.`}),`
`,(0,f.jsx)(r.p,{children:`Третий аргумент - это массив значений, от которых зависит debounce, аналогично useEffect. Таймер debounce начнется, когда одно из значений изменится.`}),`
`,(0,f.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(r.pre,{children:(0,f.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <button onClick={cancel}>Cancel debounce</button>
      </div>
    </div>
  );
};
`})}),`
`,(0,f.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,f.jsx)(r.pre,{children:(0,f.jsx)(r.code,{className:`language-ts`,children:`const [
    isReady: () => boolean | null,
    cancel: () => void,
] = useDebounce(fn: Function, ms: number, deps: DependencyList = []);
`})}),`
`,(0,f.jsxs)(r.ul,{children:[`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.strong,{children:(0,f.jsx)(r.code,{children:`fn`})}),(0,f.jsx)(r.em,{children:(0,f.jsx)(r.code,{children:`: Function`})}),` - функция, которая будет вызвана после задержки;`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.strong,{children:(0,f.jsx)(r.code,{children:`ms`})}),(0,f.jsx)(r.em,{children:(0,f.jsx)(r.code,{children:`: number`})}),` - задержка в миллисекундах;`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.strong,{children:(0,f.jsx)(r.code,{children:`deps`})}),(0,f.jsx)(r.em,{children:(0,f.jsx)(r.code,{children:`: DependencyList`})}),` - массив значений, от которых зависит debounce, в том же духе, что и useEffect;`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.strong,{children:(0,f.jsx)(r.code,{children:`isReady`})}),(0,f.jsx)(r.em,{children:(0,f.jsx)(r.code,{children:`: ()=>boolean|null`})}),` - функция, возвращающая текущее состояние debounce:`,`
`,(0,f.jsxs)(r.ul,{children:[`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.code,{children:`false`}),` - в процессе`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.code,{children:`true`}),` - вызван`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.code,{children:`null`}),` - отменен`]}),`
`]}),`
`]}),`
`,(0,f.jsxs)(r.li,{children:[(0,f.jsx)(r.strong,{children:(0,f.jsx)(r.code,{children:`cancel`})}),(0,f.jsx)(r.em,{children:(0,f.jsx)(r.code,{children:`: ()=>void`})}),` - отменить debounce`]}),`
`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),r(),l(),i()})))()}p();export{d as default};