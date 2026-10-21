import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ln as n,ya as r,za as i}from"./preview-CLkCEehX.js";import{t as a}from"./MenuItem-CrsplGZ5.js";import{n as o,t as s}from"./Menu-DBWxBoYk.js";import{t as c}from"./MenuItem-Bu5bFsi7.js";import{t as l}from"./ListItemIcon-BGbrIEfe.js";import{t as u}from"./ListItemIcon-RWLMb8-w.js";import{n as d,t as f}from"./QuitOutlineMd-BZmxdJso.js";import{n as p,t as m}from"./SettingsFillMd-6PRQ_4pg.js";import{n as h,t as g}from"./CompanyOutlineMd-BZso9WmS.js";import{n as _,t as v}from"./ProfileOutlineMd-Bh2uSl6r.js";var y,b,x,S,C,w;function T(){return(T=e((()=>{y=i(),g(),v(),f(),m(),t(),u(),c(),o(),b=r(),x={title:`Navigation/Menu`,component:s,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=123-20254)`}}}},S={args:{title:`Menu`,open:!0,children:[(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(p,{})}),`Item 1`]},`Item 1`),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(h,{})}),`Item 2`]},`Item 2`),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(p,{})}),`Item 3`]},`Item 3`),(0,b.jsxs)(a,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(p,{})}),`Item 4`]},`Item 4`)]},parameters:{docs:{disable:!0}}},C=()=>{let[e,t]=(0,y.useState)(null),r=(0,y.useMemo)(()=>!!e,[e]),i=(0,y.useCallback)(e=>{t(e.currentTarget)},[]),o=(0,y.useCallback)(()=>{t(null)},[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n,{variant:`text`,onClick:i,children:`Profile`}),(0,b.jsxs)(s,{title:`Profile`,anchorEl:e,open:r,onClose:o,children:[(0,b.jsxs)(a,{onClick:o,children:[(0,b.jsx)(l,{children:(0,b.jsx)(_,{})}),`Мой профиль`]}),(0,b.jsxs)(a,{onClick:o,children:[(0,b.jsx)(l,{children:(0,b.jsx)(h,{})}),`Мои организации`]}),(0,b.jsxs)(a,{divider:!0,onClick:o,children:[(0,b.jsx)(l,{children:(0,b.jsx)(p,{})}),`Настройки`]}),(0,b.jsxs)(a,{onClick:o,children:[(0,b.jsx)(l,{children:(0,b.jsx)(d,{})}),`Выйти`]})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Menu',
    open: true,
    children: [<MenuItem key="Item 1">
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 1
      </MenuItem>, <MenuItem key="Item 2">
        <ListItemIcon>
          <CompanyOutlineMd />
        </ListItemIcon>
        Item 2
      </MenuItem>, <MenuItem key="Item 3">
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 3
      </MenuItem>, <MenuItem key="Item 4">
        <ListItemIcon>
          <SettingsFillMd />
        </ListItemIcon>
        Item 4
      </MenuItem>]
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);
  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return <>
      <Button variant="text" onClick={handleClick}>
        Profile
      </Button>
      <Menu title="Profile" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ProfileOutlineMd />
          </ListItemIcon>
          Мой профиль
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <CompanyOutlineMd />
          </ListItemIcon>
          Мои организации
        </MenuItem>
        <MenuItem divider onClick={handleClose}>
          <ListItemIcon>
            <SettingsFillMd />
          </ListItemIcon>
          Настройки
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <QuitOutlineMd />
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </>;
}`,...C.parameters?.docs?.source}}},w=[`Interaction`,`BasicUsage`]})))()}T();export{C as BasicUsage,S as Interaction,w as __namedExportsOrder,x as default};