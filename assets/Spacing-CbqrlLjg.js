import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-CuWTv55L.js";function o(e){let r={code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Design Tokens/Spacing`}),`
`,(0,c.jsx)(r.h2,{id:`design-tokens-spacing`,children:`Design Tokens: Spacing`}),`
`,(0,c.jsx)(r.p,{children:`В нашей системе дизайна используются два типа spacing:`}),`
`,(0,c.jsx)(r.h3,{id:`1-macro-spacing`,children:`1. Macro spacing`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Используется для основной сетки, отступов между блоками и компонентов.`}),`
`,(0,c.jsxs)(r.li,{children:[`Всегда `,(0,c.jsx)(r.strong,{children:`целые числа`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[`Пример использования: `,(0,c.jsx)(r.code,{children:`theme.spacing(1)`}),` → 4px, `,(0,c.jsx)(r.code,{children:`theme.spacing(2)`}),` → 8px.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`2-micro-spacing`,children:`2. Micro spacing`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Используется для микроразметки: маленькие внутренние отступы, тонкие границы и т.п.`}),`
`,(0,c.jsxs)(r.li,{children:[`Всегда `,(0,c.jsx)(r.strong,{children:`целые числа`}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[`Пример использования: `,(0,c.jsx)(r.code,{children:`theme.microSpacing(1)`}),` → 2px.`]}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`️-важные-правила`,children:`⚠️ Важные правила`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsxs)(r.strong,{children:[`Дробные значения запрещены в `,(0,c.jsx)(r.code,{children:`theme.spacing()`}),` и `,(0,c.jsx)(r.code,{children:`theme.microSpacing()`})]}),`.`]}),`
`,(0,c.jsxs)(r.li,{children:[`Для значений кратных 2 всегда используйте `,(0,c.jsx)(r.code,{children:`theme.microSpacing()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.p,{children:`Пример кода:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-ts`,children:`// Правильно
theme.spacing(1);       // 4px
theme.spacing(2);       // 8px
theme.microSpacing(1); // 2px

// ❌ Неправильно
theme.spacing(1.5);     // Warning: Не используйте дробные значения в spacing
theme.spacing(0.5);     // Warning: используйте microSpacing
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),r(),i()})))()}l();export{s as default};