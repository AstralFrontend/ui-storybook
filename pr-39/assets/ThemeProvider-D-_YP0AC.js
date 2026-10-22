import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Qi as t,c as n,na as r,oa as i,ra as a,sa as o,xa as s}from"./preview-BexmKZ07.js";import{n as c,r as l}from"./ThemeProvider.stories-CJXWfI3a.js";function u(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{title:`Theme/ThemeProvider`,of:l}),`
`,(0,f.jsx)(n.h1,{id:`themeprovider`,children:`ThemeProvider`}),`
`,(0,f.jsxs)(n.p,{children:[`Предназначен для синхронизации `,(0,f.jsx)(n.a,{href:`/story/stylization-theme--docs`,children:`темы`}),` между всеми компонентами ui-kit.`]}),`
`,(0,f.jsxs)(n.p,{children:[`Приложение должно быть обернуто в `,(0,f.jsx)(n.code,{children:`ThemeProvider`}),` для корректной работы.`]}),`
`,(0,f.jsx)(n.h2,{id:`содержит`,children:`Содержит`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:`Provider для доступа к theme`}),`
`,(0,f.jsx)(n.li,{children:`Установка глобальных стилей`}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.a,{href:`/docs/other-errorboundary--docs`,children:`ErrorBoundary`}),` для отлова ошибок рендера, включая ошибки загрузка js chunk`]}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { createTheme, styled, type BrandPalette } from '@astral/ui';

const brandPalette: BrandPalette = {
  primary: {
    900: '#5D3FD4',
    800: '#6746EB',
    700: '#8566FF',
    600: '#9075FF',
    500: '#9D85FF',
    400: '#B29EFF',
    300: '#C2B2FF',
    200: '#E0D9FF',
    100: '#EFEBFF',
  },
  secondary: {
    800: '#5653FF',
  },
  brand: {
    800: '#6746EB',
    background: '#FAFBFC',
  },
};

const theme = createTheme({ palette: brandPalette });

const Main = styled.main\`
  padding: \${({ theme }) => theme.spacing(4)};
\`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
);
`})}),`
`,(0,f.jsx)(n.h2,{id:`usetheme`,children:`useTheme`}),`
`,(0,f.jsxs)(n.p,{children:[`Для доступа к `,(0,f.jsx)(n.code,{children:`theme`}),` внутри компонента можно использовать `,(0,f.jsx)(n.code,{children:`useTheme`}),`.`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { useTheme } from '@astral/ui';

const Card = () => {
  const theme = useTheme();

  return (
    <article>
      <p>Primary: {theme.palette.primary.main}</p>
    </article>
  );
};
`})}),`
`,(0,f.jsx)(n.h1,{id:`api`,children:`API`}),`
`,(0,f.jsx)(t,{})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=s(),i(),a(),n(),c()})))()}p();export{d as default};