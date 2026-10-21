import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{B as t,ya as n,z as r,za as i}from"./preview-COOA12PR.js";import{t as a}from"./ListItemText-DRgyfIXR.js";import{t as o}from"./ListItemText-k-tROKvW.js";import{n as s,t as c}from"./ListItem-BU4tOlC0.js";import{t as l}from"./ListItemIcon-CslVFH3U.js";import{t as u}from"./ListItemIcon-D1rNHl66.js";import{t as d}from"./ListSubheader-DNwSQi-L.js";import{t as f}from"./ListSubheader-M4Ytx7z4.js";import{t as p}from"./List-BN4s32H9.js";import{t as m}from"./List-B0AhvOB-.js";import{n as h,t as g}from"./HomeOutlineMd-pXHoqFxm.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{t(),_=i(),g(),m(),u(),o(),f(),s(),v=n(),y={title:`Lists/List/ListItem`,component:c},b={args:{children:`Item`},parameters:{docs:{disable:!0}}},x=()=>{let[e,t]=(0,_.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(p,{subheader:(0,v.jsx)(d,{children:`Список ссылок (ListItem) `}),children:[(0,v.jsx)(r,{href:`/`,children:(0,v.jsxs)(c,{children:[(0,v.jsx)(l,{children:(0,v.jsx)(h,{})}),(0,v.jsx)(a,{children:`Ссылка 1`})]})}),(0,v.jsx)(r,{href:`/`,children:(0,v.jsxs)(c,{children:[(0,v.jsx)(l,{children:(0,v.jsx)(h,{})}),(0,v.jsx)(a,{children:`Ссылка 2`})]})})]}),(0,v.jsxs)(p,{subheader:(0,v.jsx)(d,{children:`Список не ссылок (ListItem) `}),children:[(0,v.jsxs)(c,{selected:e===0,onClick:()=>{t(0)},children:[(0,v.jsx)(l,{children:(0,v.jsx)(h,{})}),(0,v.jsx)(a,{children:`Автомобиль`})]}),(0,v.jsxs)(c,{selected:e===1,onClick:()=>{t(1)},children:[(0,v.jsx)(l,{children:(0,v.jsx)(h,{})}),(0,v.jsx)(a,{children:`Велосипед`})]})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Item'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);
  return <>
      <List subheader={<ListSubheader>Список ссылок (ListItem) </ListSubheader>}>
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Ссылка 1</ListItemText>
          </ListItem>
        </Link>
        <Link href="/">
          <ListItem>
            <ListItemIcon>
              <HomeOutlineMd />
            </ListItemIcon>
            <ListItemText>Ссылка 2</ListItemText>
          </ListItem>
        </Link>
      </List>
      <List subheader={<ListSubheader>Список не ссылок (ListItem) </ListSubheader>}>
        <ListItem selected={selectedItem === 0} onClick={() => {
        setSelectedItem(0);
      }}>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Автомобиль</ListItemText>
        </ListItem>
        <ListItem selected={selectedItem === 1} onClick={() => {
        setSelectedItem(1);
      }}>
          <ListItemIcon>
            <HomeOutlineMd />
          </ListItemIcon>
          <ListItemText>Велосипед</ListItemText>
        </ListItem>
      </List>
    </>;
}`,...x.parameters?.docs?.source}}},S=[`Interaction`,`BasicUsage`]})))()}C();export{x as BasicUsage,b as Interaction,S as __namedExportsOrder,y as default};