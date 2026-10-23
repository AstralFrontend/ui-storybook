import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-28_ENgae.js";import{t as o}from"./useLocalStorage-IxihskOc.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useLocalStorage`}),`
`,(0,l.jsx)(r.h1,{id:`uselocalstorage`,children:(0,l.jsx)(r.code,{children:`useLocalStorage`})}),`
`,(0,l.jsxs)(r.p,{children:[`Управляет одним ключом `,(0,l.jsx)(r.code,{children:`localStorage`}),`.`]}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
`})}),`
`,(0,l.jsx)(r.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-ts`,children:`useLocalStorage(key);
useLocalStorage(key, initialValue);
useLocalStorage(key, initialValue, { raw: true });
useLocalStorage(key, initialValue, {
  raw: false,
  serializer: (value: T) => string,
  deserializer: (value: string) => T,
});
`})}),`
`,(0,l.jsxs)(r.ul,{children:[`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`key`}),` — ключ `,(0,l.jsx)(r.code,{children:`localStorage`}),`.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`initialValue`}),` — начальное значение для установки, если значение в `,(0,l.jsx)(r.code,{children:`localStorage`}),` пусто.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`raw`}),` — boolean, если установлено в `,(0,l.jsx)(r.code,{children:`true`}),`, hook не будет пытаться сериализовать сохраненные значения.`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`serializer`}),` — пользовательский сериализатор (по умолчанию `,(0,l.jsx)(r.code,{children:`JSON.stringify`}),`)`]}),`
`,(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.code,{children:`deserializer`}),` — пользовательский десериализатор (по умолчанию `,(0,l.jsx)(r.code,{children:`JSON.parse`}),`)`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};