import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-Cpvm_2Dh.js";import{t as o}from"./useUpdateEffect-CYbr2qfM.js";function s(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Hooks/useUpdateEffect`}),`
`,(0,l.jsx)(r.h1,{id:`useupdateeffect`,children:(0,l.jsx)(r.code,{children:`useUpdateEffect`})}),`
`,(0,l.jsxs)(r.p,{children:[`Игнорирует первый вызов (например, при монтировании). Сигнатура точно такая же, как у хука `,(0,l.jsx)(r.code,{children:`useEffect`}),`.`]}),`
`,(0,l.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:`language-tsx`,children:`const Demo = () => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  useUpdateEffect(() => {
    console.log('count', count) // покажет только 1 и далее
    
    return () => { // *ОПЦИОНАЛЬНО*
      // сделать что-то при размонтировании
    }
  }) // можно добавить массив зависимостей, если нужно

  return <div>Count: {count}</div>
};
`})})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),r(),o(),i()})))()}u();export{c as default};