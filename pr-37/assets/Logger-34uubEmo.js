import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{na as t,oa as n,ra as r,sa as i,xa as a}from"./preview-BJt2oHan.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`Getting Started/Логирование`}),`
`,(0,c.jsx)(n.h1,{id:`логирование`,children:`Логирование`}),`
`,(0,c.jsxs)(n.p,{children:[`Компоненты и сервисы `,(0,c.jsx)(n.code,{children:`@astral/ui`}),` (например, `,(0,c.jsx)(n.code,{children:`Onboarding`}),`) выводят диагностику в консоль браузера: ключевые события, предупреждения и ошибки. Это помогает понять, что происходит внутри пакета — как при разработке, так и при разборе проблем в production.`]}),`
`,(0,c.jsxs)(n.p,{children:[`По умолчанию вывод настроен «тихо»: в production видны только ошибки. Чтобы включить другой уровень логирования, достаточно задать параметр `,(0,c.jsx)(n.code,{children:`logLevel`}),` у `,(0,c.jsx)(n.code,{children:`ConfigProvider`}),`.`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`как-включить-и-настроить`,children:`Как включить и настроить`}),`
`,(0,c.jsxs)(n.p,{children:[`Уровень логов задаётся параметром `,(0,c.jsx)(n.code,{children:`logLevel`}),` у `,(0,c.jsx)(n.code,{children:`ConfigProvider`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { ConfigProvider } from '@astral/ui';

const App = () => (
  <ConfigProvider logLevel="debug">
    <YourApp />
  </ConfigProvider>
);
`})}),`
`,(0,c.jsx)(n.p,{children:`Возможные значения:`}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:(0,c.jsx)(n.code,{children:`logLevel`})}),(0,c.jsx)(n.th,{children:`Что попадёт в консоль`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`"silent"`})}),(0,c.jsx)(n.td,{children:`ничего — вывод полностью выключен`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`"error"`})}),(0,c.jsx)(n.td,{children:`только ошибки`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`"warn"`})}),(0,c.jsx)(n.td,{children:`ошибки и предупреждения`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`"info"`})}),(0,c.jsx)(n.td,{children:`ошибки, предупреждения и ключевые события`})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`"debug"`})}),(0,c.jsx)(n.td,{children:`всё, включая подробную диагностику`})]})]})]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsx)(n.li,{children:`Значения идут по нарастающей: каждый следующий уровень добавляет свою категорию к предыдущим.`}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`logLevel`}),` можно менять на лету — новое значение применяется сразу.`]}),`
`,(0,c.jsx)(n.li,{children:`Если параметр не задан — уровень берётся по умолчанию из окружения (см. ниже).`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`уровень-по-умолчанию`,children:`Уровень по умолчанию`}),`
`,(0,c.jsxs)(n.p,{children:[`Когда `,(0,c.jsx)(n.code,{children:`logLevel`}),` не задан, он зависит от окружения сборки (`,(0,c.jsx)(n.code,{children:`NODE_ENV`}),`):`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`Окружение`}),(0,c.jsx)(n.th,{children:`Уровень по умолчанию`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`production`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`error`}),` — видны только ошибки`]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`development`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`warn`}),` — ошибки и предупреждения`]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`test`}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.code,{children:`silent`}),` — логи отключены`]})]})]})]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Чтобы временно посмотреть подробные логи в production, выставьте `,(0,c.jsx)(n.code,{children:`logLevel="debug"`}),` явно.`]}),`
`]}),`
`,(0,c.jsx)(n.hr,{}),`
`,(0,c.jsx)(n.h2,{id:`как-читать-логи`,children:`Как читать логи`}),`
`,(0,c.jsx)(n.p,{children:`Каждая строка имеет единый формат — сразу видно источник, категорию и данные:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-text`,children:`@astral/ui: ℹ️ [Onboarding Tour]: Тур запущен   { stepId: 'welcome' }
`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`@astral/ui`})}),` — логи всегда помечены именем пакета, их легко отфильтровать в консоли.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`иконка`}),` — категория сообщения (см. таблицу ниже).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`[Onboarding Tour]`})}),` — какой компонент/сервис пакета написал лог.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`сообщение и данные`}),` — что произошло и с каким контекстом.`]}),`
`]}),`
`,(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:`Иконка`}),(0,c.jsx)(n.th,{children:`Категория`}),(0,c.jsx)(n.th,{children:`Метод консоли`})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`❌`}),(0,c.jsx)(n.td,{children:`ошибка`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`console.error`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`⚠️`}),(0,c.jsx)(n.td,{children:`предупреждение`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`console.warn`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`ℹ️ / ✅`}),(0,c.jsx)(n.td,{children:`событие / успех`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`console.log`})})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:`🐞`}),(0,c.jsx)(n.td,{children:`подробная диагностика`}),(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:`console.log`})})]})]})]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=a(),n(),r()})))()}l();export{s as default};