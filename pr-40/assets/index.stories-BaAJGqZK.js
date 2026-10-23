import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ji as o,ln as s,lt as c,xa as l,yn as u}from"./preview-DJy7jU1i.js";import{t as d}from"./ListItemButton-CfMBzWSn.js";import{t as f}from"./ListItemButton-DpLEtI_s.js";import{n as p,t as m}from"./Popover-D_xyEkgD.js";var h;function g(){return(g=e((()=>{u(),h=o.div`
  padding: ${({theme:e})=>e.spacing(2)};
`})))()}var _,v,y;function b(){return(b=e((()=>{f(),g(),_=l(),v=()=>(0,_.jsxs)(h,{children:[(0,_.jsx)(d,{withoutContainer:!0,children:`Все статусы`}),(0,_.jsx)(d,{withoutContainer:!0,children:`Только активные`}),(0,_.jsx)(d,{withoutContainer:!0,children:`С ошибками отправки`}),(0,_.jsx)(d,{withoutContainer:!0,children:`Ожидают подписания`})]}),y=()=>(0,_.jsxs)(h,{children:[(0,_.jsx)(d,{withoutContainer:!0,children:`Скачать PDF`}),(0,_.jsx)(d,{withoutContainer:!0,children:`Отправить на подпись`}),(0,_.jsx)(d,{withoutContainer:!0,children:`Удалить черновик`})]})})))()}function x(){return(x=e((()=>{b(),g()})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{S=t(),n(),r(),u(),i(),p(),x(),C=l(),w={"top-left":`Сверху слева`,"top-center":`Сверху по центру`,"top-right":`Сверху справа`,"center-left":`По центру слева`,"center-center":`По центру`,"center-right":`По центру справа`,"bottom-left":`Снизу слева`,"bottom-center":`Снизу по центру`,"bottom-right":`Снизу справа`},T=[{vertical:`top`,horizontal:`left`},{vertical:`top`,horizontal:`center`},{vertical:`top`,horizontal:`right`},{vertical:`center`,horizontal:`left`},{vertical:`center`,horizontal:`center`},{vertical:`center`,horizontal:`right`},{vertical:`bottom`,horizontal:`left`},{vertical:`bottom`,horizontal:`center`},{vertical:`bottom`,horizontal:`right`}],E=o(c)`
  grid-template-columns: 1fr;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(2)};

  margin-top: ${({theme:e})=>e.spacing(4)};
`,D=()=>{let[e,t]=(0,S.useState)(null),[n,r]=(0,S.useState)({vertical:`top`,horizontal:`right`}),i=e=>n=>{r(e),t(n.currentTarget)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{variant:`body1`,color:`textSecondary`,children:`Проп anchorOrigin задаёт точку привязки к элементу.`}),(0,C.jsxs)(E,{container:!0,columns:3,children:[T.map(({vertical:e,horizontal:t})=>{let n=`${e}-${t}`;return(0,C.jsx)(s,{variant:`outlined`,onClick:i({vertical:e,horizontal:t}),children:w[n]},n)}),(0,C.jsx)(m,{open:!!e,anchorEl:e,onClose:()=>{t(null)},anchorOrigin:n,children:(0,C.jsx)(v,{})})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<PopoverOrigin>({
    vertical: 'top',
    horizontal: 'right'
  });
  const handleOpen = (position: (typeof anchorOriginVariants)[number]) => (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedPosition(position);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Typography variant="body1" color="textSecondary">
        Проп anchorOrigin задаёт точку привязки к элементу.
      </Typography>

      <GridContainer container columns={3}>
        {anchorOriginVariants.map(({
        vertical,
        horizontal
      }) => {
        const key = \`\${vertical}-\${horizontal}\`;
        return <Button key={key} variant="outlined" onClick={handleOpen({
          vertical,
          horizontal
        })}>
              {anchorOriginLabels[key]}
            </Button>;
      })}

        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={selectedPosition}>
          <TableFiltersContent />
        </Popover>
      </GridContainer>
    </>;
}`,...D.parameters?.docs?.source}}}})))()}var k,A,j;function M(){return(M=e((()=>{k=t(),n(),p(),x(),A=l(),j=()=>{let[e,t]=(0,k.useState)(null);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(s,{variant:`contained`,onClick:e=>{t(e.currentTarget)},children:`Действия с документом`}),(0,A.jsx)(m,{title:`Действия с документом`,open:!!e,anchorEl:e,onClose:()=>{t(null)},anchorOrigin:{vertical:`bottom`,horizontal:`left`},children:(0,A.jsx)(y,{})})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Button variant="contained" onClick={handleClick}>
        Действия с документом
      </Button>

      <Popover title="Действия с документом" open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}>
        <DocumentActionsContent />
      </Popover>
    </>;
}`,...j.parameters?.docs?.source}}}})))()}var N,P,F;function I(){return(I=e((()=>{N=t(),n(),p(),x(),P=l(),F={args:{open:!0,children:(0,P.jsx)(v,{}),anchorOrigin:{vertical:`bottom`,horizontal:`center`},transformOrigin:{vertical:`top`,horizontal:`center`}},render:e=>{let[t,n]=(0,N.useState)(null);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(s,{ref:n,variant:`outlined`,children:`Фильтры`}),(0,P.jsx)(m,{...e,anchorEl:t})]})},parameters:{docs:{disable:!0}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <TableFiltersContent />,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    return <>
        <Button ref={setAnchorEl} variant="outlined">
          Фильтры
        </Button>
        <Popover {...args} anchorEl={anchorEl} />
      </>;
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...F.parameters?.docs?.source}}}})))()}var L,R,z,B,V,H;function U(){return(U=e((()=>{L=t(),n(),r(),u(),i(),p(),x(),R=l(),z={"top-left":`Сверху слева`,"top-center":`Сверху по центру`,"top-right":`Сверху справа`,"center-left":`По центру слева`,"center-center":`По центру`,"center-right":`По центру справа`,"bottom-left":`Снизу слева`,"bottom-center":`Снизу по центру`,"bottom-right":`Снизу справа`},B=[{vertical:`top`,horizontal:`left`},{vertical:`top`,horizontal:`center`},{vertical:`top`,horizontal:`right`},{vertical:`center`,horizontal:`left`},{vertical:`center`,horizontal:`center`},{vertical:`center`,horizontal:`right`},{vertical:`bottom`,horizontal:`left`},{vertical:`bottom`,horizontal:`center`},{vertical:`bottom`,horizontal:`right`}],V=o(c)`
  grid-template-columns: 1fr;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(2)};

  margin-top: ${({theme:e})=>e.spacing(4)};
`,H=()=>{let[e,t]=(0,L.useState)(null),[n,r]=(0,L.useState)({vertical:`top`,horizontal:`right`}),i=e=>n=>{r(e),t(n.currentTarget)};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a,{variant:`body1`,color:`textSecondary`,children:`Проп transformOrigin задаёт точку, от которой выполняется анимация раскрытия панели.`}),(0,R.jsxs)(V,{container:!0,columns:3,children:[B.map(({vertical:e,horizontal:t})=>{let n=`${e}-${t}`;return(0,R.jsx)(s,{variant:`outlined`,onClick:i({vertical:e,horizontal:t}),children:z[n]},n)}),(0,R.jsx)(m,{open:!!e,anchorEl:e,onClose:()=>{t(null)},transformOrigin:n,children:(0,R.jsx)(v,{})})]})]})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<PopoverOrigin>({
    vertical: 'top',
    horizontal: 'right'
  });
  const handleOpen = (position: (typeof transformOriginVariants)[number]) => (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedPosition(position);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
      <Typography variant="body1" color="textSecondary">
        Проп transformOrigin задаёт точку, от которой выполняется анимация
        раскрытия панели.
      </Typography>

      <GridContainer container columns={3}>
        {transformOriginVariants.map(({
        vertical,
        horizontal
      }) => {
        const key = \`\${vertical}-\${horizontal}\`;
        return <Button key={key} variant="outlined" onClick={handleOpen({
          vertical,
          horizontal
        })}>
              {transformOriginLabels[key]}
            </Button>;
      })}

        <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} transformOrigin={selectedPosition}>
          <TableFiltersContent />
        </Popover>
      </GridContainer>
    </>;
}`,...H.parameters?.docs?.source}}}})))()}var W,G;function K(){return(K=e((()=>{p(),O(),M(),I(),U(),W={title:`Popovers-and-Tooltips/Popover/Deprecated/Popover`,component:m,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=828-51060)`}}}},G=[`Interaction`,`BasicUsage`,`TransformOrigin`,`AnchorOrigin`]})))()}K();export{D as AnchorOrigin,j as BasicUsage,F as Interaction,H as TransformOrigin,G as __namedExportsOrder,W as default};