import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-_BGonndb.js";import{t as o}from"./useMenu-C8vkCp2I.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t,{title:`hooks/useMenu`}),`
`,(0,l.jsx)(n.h1,{id:`usemenu`,children:(0,l.jsx)(n.code,{children:`useMenu`})}),`
`,(0,l.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`const BasicUsage = () => {
  const { open, anchorRef, handleOpenMenu, handleCloseMenu } = useMenu();

  return (
    <>
      <ClickAwayListener onClickAway={handleCloseMenu}>
        <Button ref={anchorRef} onClick={handleOpenMenu}>
          Click me
        </Button>
      </ClickAwayListener>
      <Menu open={open} anchorEl={anchorRef.current}>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
      </Menu>
    </>
  );
};
`})})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=a(),n(),o(),r()})))()}u();export{c as default};