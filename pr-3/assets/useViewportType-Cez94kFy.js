import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-Cav_CXYC.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Hooks/useViewportType`}),`
`,(0,c.jsx)(n.h1,{id:`useviewporttype`,children:(0,c.jsx)(n.code,{children:`useViewportType`})}),`
`,(0,c.jsxs)(n.p,{children:[`Предоставляет функционал определения типа viewport пользователя
Свойство `,(0,c.jsx)(n.code,{children:`isMobile`}),` - флаг, указывающий на размер viewport, сопоставимый с мобильным устройством`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`const IsMobile = () => {
  const { isMobile } = useViewportType();

  return (
    <Description>
      <Description.Name>isMobile</Description.Name>
      <Description.Value>{JSON.stringify(isMobile)}</Description.Value>
    </Description>
  );
};
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),n(),r()})))()}l();export{s as default};