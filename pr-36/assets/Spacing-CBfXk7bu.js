import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-ClJ99rAL.js";function o(e){let n={code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Design Tokens/Spacing`}),`
`,(0,c.jsx)(n.h2,{id:`design-tokens-spacing`,children:`Design Tokens: Spacing`}),`
`,(0,c.jsx)(n.p,{children:`В нашей системе дизайна используются два типа spacing:`}),`
`,(0,c.jsx)(n.h3,{id:`1-macro-spacing`,children:`1. Macro spacing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Используется для основной сетки, отступов между блоками и компонентов.`}),`
`,(0,c.jsxs)(n.li,{children:[`Всегда `,(0,c.jsx)(n.strong,{children:`целые числа`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Пример использования: `,(0,c.jsx)(n.code,{children:`theme.spacing(1)`}),` → 4px, `,(0,c.jsx)(n.code,{children:`theme.spacing(2)`}),` → 8px.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`2-micro-spacing`,children:`2. Micro spacing`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Используется для микроразметки: маленькие внутренние отступы, тонкие границы и т.п.`}),`
`,(0,c.jsxs)(n.li,{children:[`Всегда `,(0,c.jsx)(n.strong,{children:`целые числа`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Пример использования: `,(0,c.jsx)(n.code,{children:`theme.microSpacing(1)`}),` → 2px.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`️-важные-правила`,children:`⚠️ Важные правила`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsxs)(n.strong,{children:[`Дробные значения запрещены в `,(0,c.jsx)(n.code,{children:`theme.spacing()`}),` и `,(0,c.jsx)(n.code,{children:`theme.microSpacing()`})]}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Для значений кратных 2 всегда используйте `,(0,c.jsx)(n.code,{children:`theme.microSpacing()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.p,{children:`Пример кода:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`// Правильно
theme.spacing(1);       // 4px
theme.spacing(2);       // 8px
theme.microSpacing(1); // 2px

// ❌ Неправильно
theme.spacing(1.5);     // Warning: Не используйте дробные значения в spacing
theme.spacing(0.5);     // Warning: используйте microSpacing
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),n(),r()})))()}l();export{s as default};