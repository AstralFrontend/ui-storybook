import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a}from"./preview-CdUppftE.js";function o(e){let r={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`Getting Started/Логирование`}),`
`,(0,c.jsx)(r.h1,{id:`логирование`,children:`Логирование`}),`
`,(0,c.jsxs)(r.p,{children:[`Компоненты и сервисы `,(0,c.jsx)(r.code,{children:`@astral/ui`}),` (например, `,(0,c.jsx)(r.code,{children:`Onboarding`}),`) выводят диагностику в консоль браузера: ключевые события, предупреждения и ошибки. Это помогает понять, что происходит внутри пакета — как при разработке, так и при разборе проблем в production.`]}),`
`,(0,c.jsxs)(r.p,{children:[`По умолчанию вывод настроен «тихо»: в production видны только ошибки. Чтобы включить другой уровень логирования, достаточно задать параметр `,(0,c.jsx)(r.code,{children:`logLevel`}),` у `,(0,c.jsx)(r.code,{children:`ConfigProvider`}),`.`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`как-включить-и-настроить`,children:`Как включить и настроить`}),`
`,(0,c.jsxs)(r.p,{children:[`Уровень логов задаётся параметром `,(0,c.jsx)(r.code,{children:`logLevel`}),` у `,(0,c.jsx)(r.code,{children:`ConfigProvider`}),`:`]}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-tsx`,children:`import { ConfigProvider } from '@astral/ui';

const App = () => (
  <ConfigProvider logLevel="debug">
    <YourApp />
  </ConfigProvider>
);
`})}),`
`,(0,c.jsx)(r.p,{children:`Возможные значения:`}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:(0,c.jsx)(r.code,{children:`logLevel`})}),(0,c.jsx)(r.th,{children:`Что попадёт в консоль`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`"silent"`})}),(0,c.jsx)(r.td,{children:`ничего — вывод полностью выключен`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`"error"`})}),(0,c.jsx)(r.td,{children:`только ошибки`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`"warn"`})}),(0,c.jsx)(r.td,{children:`ошибки и предупреждения`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`"info"`})}),(0,c.jsx)(r.td,{children:`ошибки, предупреждения и ключевые события`})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`"debug"`})}),(0,c.jsx)(r.td,{children:`всё, включая подробную диагностику`})]})]})]}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsx)(r.li,{children:`Значения идут по нарастающей: каждый следующий уровень добавляет свою категорию к предыдущим.`}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.code,{children:`logLevel`}),` можно менять на лету — новое значение применяется сразу.`]}),`
`,(0,c.jsx)(r.li,{children:`Если параметр не задан — уровень берётся по умолчанию из окружения (см. ниже).`}),`
`]}),`
`,(0,c.jsx)(r.h3,{id:`уровень-по-умолчанию`,children:`Уровень по умолчанию`}),`
`,(0,c.jsxs)(r.p,{children:[`Когда `,(0,c.jsx)(r.code,{children:`logLevel`}),` не задан, он зависит от окружения сборки (`,(0,c.jsx)(r.code,{children:`NODE_ENV`}),`):`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:`Окружение`}),(0,c.jsx)(r.th,{children:`Уровень по умолчанию`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`production`}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`error`}),` — видны только ошибки`]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`development`}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`warn`}),` — ошибки и предупреждения`]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`test`}),(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:`silent`}),` — логи отключены`]})]})]})]}),`
`,(0,c.jsxs)(r.blockquote,{children:[`
`,(0,c.jsxs)(r.p,{children:[`Чтобы временно посмотреть подробные логи в production, выставьте `,(0,c.jsx)(r.code,{children:`logLevel="debug"`}),` явно.`]}),`
`]}),`
`,(0,c.jsx)(r.hr,{}),`
`,(0,c.jsx)(r.h2,{id:`как-читать-логи`,children:`Как читать логи`}),`
`,(0,c.jsx)(r.p,{children:`Каждая строка имеет единый формат — сразу видно источник, категорию и данные:`}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:`language-text`,children:`@astral/ui: ℹ️ [Onboarding Tour]: Тур запущен   { stepId: 'welcome' }
`})}),`
`,(0,c.jsxs)(r.ul,{children:[`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:(0,c.jsx)(r.code,{children:`@astral/ui`})}),` — логи всегда помечены именем пакета, их легко отфильтровать в консоли.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`иконка`}),` — категория сообщения (см. таблицу ниже).`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:(0,c.jsx)(r.code,{children:`[Onboarding Tour]`})}),` — какой компонент/сервис пакета написал лог.`]}),`
`,(0,c.jsxs)(r.li,{children:[(0,c.jsx)(r.strong,{children:`сообщение и данные`}),` — что произошло и с каким контекстом.`]}),`
`]}),`
`,(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:`Иконка`}),(0,c.jsx)(r.th,{children:`Категория`}),(0,c.jsx)(r.th,{children:`Метод консоли`})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`❌`}),(0,c.jsx)(r.td,{children:`ошибка`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`console.error`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`⚠️`}),(0,c.jsx)(r.td,{children:`предупреждение`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`console.warn`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`ℹ️ / ✅`}),(0,c.jsx)(r.td,{children:`событие / успех`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`console.log`})})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:`🐞`}),(0,c.jsx)(r.td,{children:`подробная диагностика`}),(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:`console.log`})})]})]})]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),r(),i()})))()}l();export{s as default};