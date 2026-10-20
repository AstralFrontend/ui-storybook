import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-BdEXlm_o.js";import{t as o}from"./useUpdateEffect--Prz7iwJ.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`Hooks/useUpdateEffect`}),`
`,(0,l.jsx)(n.h1,{id:`useupdateeffect`,children:(0,l.jsx)(n.code,{children:`useUpdateEffect`})}),`
`,(0,l.jsxs)(n.p,{children:[`Игнорирует первый вызов (например, при монтировании). Сигнатура точно такая же, как у хука `,(0,l.jsx)(n.code,{children:`useEffect`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const Demo = () => {
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
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};