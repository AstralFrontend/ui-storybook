import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ji as n,xa as r,yn as i}from"./preview-BdEXlm_o.js";import{n as a,t as o}from"./ScrollToTopButton-DH1dXMNk.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{s=t(),i(),a(),c=r(),l={title:`Buttons/ScrollToTopButton`,component:o,parameters:{docs:{description:{component:`Универсальная кнопка прокрутки содержимого наверх, не содержит логику

### [Figma](https://www.figma.com/file/6iaVKvmw5B2yAccBuZrW0e/%D0%AD%D0%94%D0%9E-mobile?type=design&node-id=516-3685&mode=design&t=WfzvGCbR0KJdR6Qf-4)`}}}},u=n.div`
  position: relative;

  width: 100%;
  height: 250px;
`,d=n.div`
  overflow-y: auto;
  /* Причина игнора: Не критично для отображения в safari 15 */
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overscroll-behavior: none;

  max-height: 100%;
`,f=n.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 250px;
  margin-bottom: 30px;

  font-size: ${({theme:e})=>e.typography.h2.fontSize};

  background: ${({theme:e})=>e.palette.grey[300]};
  border-radius: 6px;

  &:last-of-type {
    margin-bottom: 0;
  }
`,p=(0,s.forwardRef)((e,t)=>(0,c.jsxs)(u,{children:[(0,c.jsxs)(d,{ref:t,children:[(0,c.jsx)(f,{children:`1`}),(0,c.jsx)(f,{children:`2`}),(0,c.jsx)(f,{children:`3`}),(0,c.jsx)(f,{children:`4`})]}),e.children]})),m=()=>{let e=(0,s.useRef)(null);return(0,c.jsx)(p,{ref:e,children:(0,c.jsx)(o,{onClick:()=>{e.current?.scroll({behavior:`smooth`,top:0})}})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const listRef = useRef<HTMLDivElement>(null);
  const onScrollClick = () => {
    listRef.current?.scroll({
      behavior: 'smooth',
      top: 0
    });
  };
  return <List ref={listRef}>
      <ScrollToTopButton onClick={onScrollClick} />
    </List>;
}`,...m.parameters?.docs?.source}}},h=[`BasicUsage`]})))()}g();export{m as BasicUsage,h as __namedExportsOrder,l as default};