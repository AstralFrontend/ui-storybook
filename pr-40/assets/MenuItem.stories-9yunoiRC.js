import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{xa as t}from"./preview-DbSmHAJq.js";import{n,t as r}from"./MenuItem-Cr8t0loo.js";import{t as i}from"./MenuList-BYpILbWo.js";import{t as a}from"./MenuList-CE44QK9-.js";import{t as o}from"./ListItemIcon-BR7bMzEO.js";import{t as s}from"./ListItemIcon-Cr1nALp3.js";import{n as c,t as l}from"./ProfileOutlineMd-W_mByRoP.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l(),s(),a(),n(),u=t(),d={title:`Navigation/Menu/MenuItem`,component:r,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=123-20254)`}}}},f={args:{selected:!0,children:`Menu Item`},parameters:{docs:{disable:!0}}},p=()=>(0,u.jsxs)(i,{children:[(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Мой профиль`]}),(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Выход`]})]}),m=()=>(0,u.jsxs)(i,{children:[(0,u.jsxs)(r,{note:`Перейти в профиль`,children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Мой профиль`]}),(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Выход`]})]}),h=()=>(0,u.jsxs)(i,{children:[(0,u.jsxs)(r,{selected:!0,children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Мой профиль`]}),(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Выход`]})]}),g=()=>(0,u.jsxs)(i,{children:[(0,u.jsxs)(r,{disabled:!0,disabledReason:`Действие недоступно. Попробуйте позднее`,children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Мой профиль`]}),(0,u.jsxs)(r,{children:[(0,u.jsx)(o,{children:(0,u.jsx)(c,{})}),`Выход`]})]}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    children: 'Menu Item'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <MenuList>
      <MenuItem note="Перейти в профиль">
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>;
}`,...m.parameters?.docs?.source},description:{story:"prop ```note``` выводит Tooltip на не заблокированном элементе меню",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <MenuList>
      <MenuItem selected>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <MenuList>
      <MenuItem disabled disabledReason="Действие недоступно. Попробуйте позднее">
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Мой профиль
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ProfileOutlineMd />
        </ListItemIcon>
        Выход
      </MenuItem>
    </MenuList>;
}`,...g.parameters?.docs?.source}}},_=[`Interaction`,`BasicUsage`,`Note`,`Selected`,`Disabled`]})))()}v();export{p as BasicUsage,g as Disabled,f as Interaction,m as Note,h as Selected,_ as __namedExportsOrder,d as default};