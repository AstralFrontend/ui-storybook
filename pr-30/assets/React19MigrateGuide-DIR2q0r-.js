import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-COOA12PR.js";function o(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Getting Started/React 19 Migration Guide`}),`
`,(0,c.jsx)(r.h1,{id:`руководство-по-миграции-на-react-19`,children:`Руководство по миграции на React 19`}),`
`,(0,c.jsxs)(r.p,{children:[`Это руководство описывает шаги, которые необходимо выполнить в проекте после обновления пакетов `,(0,c.jsx)(r.code,{children:`@astral/ui`}),` и `,(0,c.jsx)(r.code,{children:`@astral/features`}),` до версии с поддержкой React 19.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`-содержание`,children:`📋 Содержание`}),`
`,(0,c.jsxs)(r.ol,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:`#mui-versions`,children:`MUI`})}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.a,{href:`#code-changes`,children:`Изменения в коде`}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:`#inert-attribute`,children:`Атрибут inert`})}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(`a`,{id:`mui-versions`}),`
`,(0,c.jsx)(r.h2,{id:`1-mui`,children:`1. MUI`}),`
`,(0,c.jsxs)(r.p,{children:[`При обновлении на React 19 необходимо добавить в `,(0,c.jsx)(r.code,{children:`package.json`}),` секцию `,(0,c.jsx)(r.code,{children:`overrides`}),` для MUI версии `,(0,c.jsx)(r.strong,{children:`5.16.12`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-json`,children:`{
  "overrides": {
    "@mui/material": "5.16.12",
  }
}
`})}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(`a`,{id:`code-changes`}),`
`,(0,c.jsx)(r.h2,{id:`2-изменения-в-коде`,children:`2. Изменения в коде`}),`
`,(0,c.jsx)(r.h3,{id:`reactnode-и-асинхронные-компоненты`,children:`ReactNode и асинхронные компоненты`}),`
`,(0,c.jsxs)(r.p,{children:[`В React 19 тип `,(0,c.jsx)(r.code,{children:`ReactNode`}),` был расширен и теперь включает `,(0,c.jsx)(r.code,{children:`Promise<ReactNode>`}),`.
Это изменение необходимо для поддержки async-компонентов.`]}),`
`,(0,c.jsxs)(r.p,{children:[`Если требуется сохранить строго синхронный контракт (без поддержки Promise в children),
используйте типы из `,(0,c.jsx)(r.code,{children:`@astral/ui`}),`:`]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:(0,c.jsx)(r.code,{children:`SyncReactNode`})}),` — `,(0,c.jsx)(r.code,{children:`ReactNode`}),` без поддержки `,(0,c.jsx)(r.code,{children:`Promise`})]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:(0,c.jsx)(r.code,{children:`SyncFunctionComponent`})}),` — тип функционального компонента,
возвращающего `,(0,c.jsx)(r.code,{children:`SyncReactNode`})]}),`
`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { type SyncReactNode, type SyncFunctionComponent } from '@astral/ui';

// Для children и других props, где не нужен Promise<ReactNode>
const MyComponent: SyncFunctionComponent<{ title: SyncReactNode }> = ({ title }) => (
  <div>{title}</div>
);
`})}),`
`,(0,c.jsx)(r.h3,{id:`forwardref-и-ref`,children:`forwardRef и ref`}),`
`,(0,c.jsxs)(r.p,{children:[`В новых версиях `,(0,c.jsx)(r.code,{children:`@types/react`}),` рекомендуется явно указывать generic-параметры
при использовании `,(0,c.jsx)(r.code,{children:`forwardRef`}),`, так как автоматический вывод типов для `,(0,c.jsx)(r.code,{children:`ref`}),`
стал менее предсказуемым.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`// Рекомендуемый вариант
const MyButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button ref={ref} {...props} />
));
`})}),`
`,(0,c.jsx)(r.h3,{id:`useref`,children:`useRef`}),`
`,(0,c.jsxs)(r.p,{children:[`В новых версиях `,(0,c.jsx)(r.code,{children:`@types/react`}),` необходимо передавать начальное значение в useRef.
Вызов без аргумента может приводить к ошибке типизации в TypeScript.`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`// Было
const ref = useRef();

// Стало
const ref = useRef<HTMLDivElement>(null);
`})}),`
`,(0,c.jsx)(`a`,{id:`inert-attribute`})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),r(),i()})))()}l();export{s as default};