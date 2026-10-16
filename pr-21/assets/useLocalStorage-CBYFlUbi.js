import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-CIVVhXpm.js";import{t as o}from"./useLocalStorage-Dh3E10EX.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useLocalStorage`}),`
`,(0,l.jsx)(n.h1,{id:`uselocalstorage`,children:(0,l.jsx)(n.code,{children:`useLocalStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Управляет одним ключом `,(0,l.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Demo = () => {
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
`,(0,l.jsx)(n.h2,{id:`api`,children:`API`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`useLocalStorage(key);
useLocalStorage(key, initialValue);
useLocalStorage(key, initialValue, { raw: true });
useLocalStorage(key, initialValue, {
  raw: false,
  serializer: (value: T) => string,
  deserializer: (value: string) => T,
});
`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`key`}),` — ключ `,(0,l.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`initialValue`}),` — начальное значение для установки, если значение в `,(0,l.jsx)(n.code,{children:`localStorage`}),` пусто.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`raw`}),` — boolean, если установлено в `,(0,l.jsx)(n.code,{children:`true`}),`, hook не будет пытаться сериализовать сохраненные значения.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`serializer`}),` — пользовательский сериализатор (по умолчанию `,(0,l.jsx)(n.code,{children:`JSON.stringify`}),`)`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`deserializer`}),` — пользовательский десериализатор (по умолчанию `,(0,l.jsx)(n.code,{children:`JSON.parse`}),`)`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};