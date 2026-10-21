import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ji as t,ya as n,yn as r}from"./preview-CLkCEehX.js";import{n as i,t as a}from"./Alert-BTjpVfzt.js";import{n as o,r as s,t as c}from"./common-D5OBTAba.js";var l,u,d,f;function p(){return(p=e((()=>{r(),i(),c(),l=n(),u=t.div`
  display: flex;
  flex-direction: row;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    flex-direction: column;

    width: auto;
  }
`,d=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,f=()=>(0,l.jsxs)(d,{children:[(0,l.jsxs)(u,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(a,{title:`Заголовок`,onClose:()=>{},actions:(0,l.jsx)(o,{variant:`link`,children:`Кнопка ссылка`}),children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})}),(0,l.jsx)(s,{children:(0,l.jsx)(a,{title:`Заголовок`,actions:(0,l.jsx)(o,{variant:`link`,children:`Кнопка ссылка`}),children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})})]}),(0,l.jsxs)(u,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(a,{onClose:()=>{},actions:(0,l.jsx)(o,{variant:`link`,children:`Кнопка ссылка`}),children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})}),(0,l.jsx)(s,{children:(0,l.jsx)(a,{actions:(0,l.jsx)(o,{variant:`link`,children:`Кнопка ссылка`}),children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})})]}),(0,l.jsxs)(u,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(a,{onClose:()=>{},children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})}),(0,l.jsx)(s,{children:(0,l.jsx)(a,{children:`Заголовок и действия опциональны, их можно отключить, если требуется.`})})]})]}),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <StoryWrapper>
    <Container>
      <Wrapper>
        <Alert title="Заголовок" onClose={() => {}} actions={<StyledButton variant="link">Кнопка ссылка</StyledButton>}>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
      <Wrapper>
        <Alert title="Заголовок" actions={<StyledButton variant="link">Кнопка ссылка</StyledButton>}>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <Alert onClose={() => {}} actions={<StyledButton variant="link">Кнопка ссылка</StyledButton>}>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
      <Wrapper>
        <Alert actions={<StyledButton variant="link">Кнопка ссылка</StyledButton>}>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
    </Container>
    <Container>
      <Wrapper>
        <Alert onClose={() => {}}>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
      <Wrapper>
        <Alert>
          Заголовок и действия опциональны, их можно отключить, если требуется.
        </Alert>
      </Wrapper>
    </Container>
  </StoryWrapper>`,...f.parameters?.docs?.source}}}})))()}var m,h;function g(){return(g=e((()=>{i(),p(),m={title:`Alerts/Alert/Tests`,component:a},h=[`AlertVariant`]})))()}g();export{f as AlertVariant,h as __namedExportsOrder,m as default};