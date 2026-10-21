import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{aa as t,ea as n,ia as r,ta as i,ya as a,za as o}from"./preview-CLkCEehX.js";import{t as s}from"./public-CqujxETt.js";function c(e){let r={a:`a`,code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{title:`Getting Started/V5 Migration Guide`}),`
`,(0,u.jsx)(r.h1,{id:`v4---v5-migration-guide`,children:`V4 -> V5 Migration Guide`}),`
`,(0,u.jsx)(r.p,{children:`Руководство для будущего major релиза библиотеки @astral/ui.`}),`
`,(0,u.jsx)(r.p,{children:`📦 Обновление структуры импортов в UI-kit для улучшения производительности и tree-shaking.`}),`
`,(0,u.jsx)(r.p,{children:`Замените импорты из @astral/ui на прямые пути, используя CodeMode. Старый корневой импорт удалён.`}),`
`,(0,u.jsxs)(r.p,{children:[`Для этого необходимо заменить  "moduleResolution" на "bundler" в вашем `,(0,u.jsx)(r.code,{children:`tsconfig.json`})]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-ts`,children:`import { Button } from '@astral/ui/Button'
import { Modal } from '@astral/ui/Modal'
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-ts`,children:`import { Button, Modal } from '@astral/ui'
`})}),`
`,(0,u.jsx)(r.h3,{id:`заменить-импорты`,children:`Заменить импорты:`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/PdfViewer" -> "@astral/ui/PdfViewer/",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/JsonViewer" -> "@astral/ui/JsonViewer",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/Notification" -> "@astral/ui/Notification",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/LegacyNotification" -> "@astral/ui/LegacyNotification",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/Banner" -> "@astral/ui/Banner",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/unstable/ResizingDataGrid" -> "@astral/ui/ResizingDataGrid",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/unstable/ResizingDataGridInfinite" -> "@astral/ui/ResizingDataGridInfinite",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/InfiniteTreeList" -> "@astral/ui/InfiniteTreeList",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/RedesignBanner" -> "@astral/ui/RedesignBanner",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/TreeAsyncAutocomplete" -> "@astral/ui/TreeAsyncAutocomplete",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/TreeLikeAsyncAutocomplete" -> "@astral/ui/TreeLikeAsyncAutocomplete",`}),`
`,(0,u.jsx)(r.li,{children:`"@astral/ui/components/CardGridInfinite" -> "@astral/ui/CardGridInfinite",`}),`
`]}),`
`,(0,u.jsxs)(r.h3,{id:`datagrid`,children:[(0,u.jsx)(r.a,{href:`/story/table-dataGrid--docs`,children:`DataGrid`}),`.`]}),`
`,(0,u.jsxs)(r.p,{children:[`-Удален deprecated параметр `,(0,u.jsx)(r.code,{children:`minDisplayRows`})]}),`
`,(0,u.jsxs)(r.h3,{id:`datagridactioncell-удален-deprecated-параметр-actions-используйте-mainactions-и-secondaryactions`,children:[(0,u.jsx)(r.a,{href:`/story/table-dataGridActionCell--docs`,children:`DataGridActionCell`}),`. Удален deprecated параметр `,(0,u.jsx)(r.code,{children:`actions`}),`. Используйте `,(0,u.jsx)(r.code,{children:`mainActions`}),` и `,(0,u.jsx)(r.code,{children:`secondaryActions`}),`.`]}),`
`,(0,u.jsx)(r.p,{children:`Новый подход обеспечивает:`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsx)(r.li,{children:`Ленивую загрузку вторичных действий с бэкенда`}),`
`,(0,u.jsxs)(r.li,{children:[`Рендеринг `,(0,u.jsx)(r.code,{children:`secondaryActions`}),` только при открытии dropdown-меню`]}),`
`,(0,u.jsx)(r.li,{children:`Улучшенную производительность при работе со сложной логикой`}),`
`,(0,u.jsx)(r.li,{children:`Оптимизацию за счет tree shaking`}),`
`]}),`
`,(0,u.jsx)(r.h3,{id:`popover`,children:`Popover`}),`
`,(0,u.jsxs)(r.p,{children:[`В `,(0,u.jsx)(r.code,{children:`Popover`}),` изменяется API позиционирования и закрытия.`]}),`
`,(0,u.jsx)(r.p,{children:`Ключевые изменения:`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`anchorOrigin`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin`}),` -> `,(0,u.jsx)(r.code,{children:`placement`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`onClose(event, reason)`}),` -> `,(0,u.jsx)(r.code,{children:`onClose(event)`})]}),`
`,(0,u.jsxs)(r.li,{children:[`Убран `,(0,u.jsx)(r.code,{children:`backdrop`}),`, закрытие выполняется по click-away`]}),`
`]}),`
`,(0,u.jsxs)(r.p,{children:[`Соответствие изменений `,(0,u.jsx)(r.code,{children:`anchorOrigin`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin`}),` -> `,(0,u.jsx)(r.code,{children:`placement`}),`:`]}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`bottom-start`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'bottom', horizontal: 'left' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'top', horizontal: 'left' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`bottom`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'bottom', horizontal: 'center' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'top', horizontal: 'center' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`bottom-end`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'bottom', horizontal: 'right' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'top', horizontal: 'right' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`top-start`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'top', horizontal: 'left' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'bottom', horizontal: 'left' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`top`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'top', horizontal: 'center' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'bottom', horizontal: 'center' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`top-end`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'top', horizontal: 'right' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'bottom', horizontal: 'right' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`left-start`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'top', horizontal: 'right' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'top', horizontal: 'left' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`left`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'center', horizontal: 'right' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'center', horizontal: 'left' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`left-end`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'bottom', horizontal: 'right' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'bottom', horizontal: 'left' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`right-start`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'top', horizontal: 'left' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'top', horizontal: 'right' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`right`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'center', horizontal: 'left' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'center', horizontal: 'right' }`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`right-end`}),` -> `,(0,u.jsx)(r.code,{children:`anchorOrigin: { vertical: 'bottom', horizontal: 'left' }`}),` + `,(0,u.jsx)(r.code,{children:`transformOrigin: { vertical: 'bottom', horizontal: 'right' }`})]}),`
`]}),`
`,(0,u.jsxs)(r.p,{children:[`Остальные варианты `,(0,u.jsx)(r.code,{children:`anchorOrigin + transformOrigin`}),` больше не поддерживаются.`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  placement="bottom-start"
  onClose={handleClose}
>
  {content}
</Popover>
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  onClose={handleClose}
>
  {content}
</Popover>
`})}),`
`,(0,u.jsx)(r.h3,{id:`alert`,children:`Alert`}),`
`,(0,u.jsxs)(r.p,{children:[`Проп `,(0,u.jsx)(r.code,{children:`display`}),` `,(0,u.jsx)(r.strong,{children:`помечен как deprecated`}),` — вместо него используйте `,(0,u.jsx)(r.code,{children:`isShow`}),`.`]}),`
`,(0,u.jsx)(r.p,{children:`Соответствие пропсов:`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`display`}),` -> `,(0,u.jsx)(r.code,{children:`isShow`})]}),`
`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<Alert isShow={isShow} severity="info">
  Формирование счета может занять до 15 минут
</Alert>
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<Alert display={isShow} severity="info">
  Формирование счета может занять до 15 минут
</Alert>
`})}),`
`,(0,u.jsx)(r.h3,{id:`dashboardalert--pagealert`,children:`DashboardAlert / PageAlert`}),`
`,(0,u.jsxs)(r.p,{children:[(0,u.jsx)(r.code,{children:`DashboardAlert`}),` и `,(0,u.jsx)(r.code,{children:`PageAlert`}),` `,(0,u.jsx)(r.strong,{children:`удаляются`}),`. Полный переход на базовый `,(0,u.jsx)(r.a,{href:`/story/alerts-alert--docs`,children:`Alert`}),`.`]}),`
`,(0,u.jsxs)(r.p,{children:[`Оба компонента - это тонкие обертки над `,(0,u.jsx)(r.code,{children:`Alert`})]}),`
`,(0,u.jsx)(r.p,{children:`Соответствие пропсов:`}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`linkButtonProps={{ name, ...rest }}`}),` -> навигационная ссылка внутри `,(0,u.jsx)(r.code,{children:`children`}),` через `,(0,u.jsx)(r.a,{href:`/story/navigation-link--docs`,children:`Link`}),` или кнопки в слоте `,(0,u.jsx)(r.code,{children:`actions`}),`)`]}),`
`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<DashboardLayout.Main
  alert={
    <Alert
      isShow={isShowAlert}
      onClose={() => setIsShowAlert(false)}
      severity="info"
    >
      29 января 2025г. приложение будет временно недоступно.{' '}
      <Link href="/" target="_blank">Подробнее</Link>
    </Alert>
  }
>
  {content}
</DashboardLayout.Main>
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<DashboardLayout.Main
  alert={
    <DashboardAlert
      isShow={isShowAlert}
      onClose={() => setIsShowAlert(false)}
      severity="info"
      linkButtonProps={{ name: 'Подробнее', href: '/' }}
    >
      29 января 2025г. приложение будет временно недоступно.
    </DashboardAlert>
  }
>
  {content}
</DashboardLayout.Main>
`})}),`
`,(0,u.jsx)(r.h3,{id:`packagejson`,children:`package.json`}),`
`,(0,u.jsxs)(r.p,{children:[`Удалите из секции `,(0,u.jsx)(r.code,{children:`overrides`}),` в `,(0,u.jsx)(r.code,{children:`package.json`}),` переопределения версии MUI (`,(0,u.jsx)(r.code,{children:`@mui/material`}),`), если они были добавлены при миграции продукта на React 19.`]}),`
`,(0,u.jsx)(r.h3,{id:`usetoggle`,children:`useToggle`}),`
`,(0,u.jsxs)(r.p,{children:[`Хук `,(0,u.jsx)(r.code,{children:`useToggle`}),` изменил свое API по причине отказа от react-use и переноса его реализации `,(0,u.jsx)(r.code,{children:`useToggle`})]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const [
  isActive, 
  toggle
] = useToggle(initialState);
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const [
  isActive, 
  handleActive, 
  handleInactive
] = useToggle(initialState, onActive, onInactive);
`})}),`
`,(0,u.jsx)(r.h3,{id:`guidtypography`,children:`GuidTypography`}),`
`,(0,u.jsxs)(r.p,{children:[`Замените обертку CopyTypography на параметр `,(0,u.jsx)(r.code,{children:`canCopy`})]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<GuidTypography canCopy>{guid}</GuidTypography>
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<CopyTypography copyText={guid} isShowCopyText>
  <GuidTypography tooltipProps={{ title: undefined }}>
    {guid}
  </GuidTypography>
</CopyTypography>
`})}),`
`,(0,u.jsx)(r.h3,{id:`classnames---cn`,children:`classNames -> cn`}),`
`,(0,u.jsxs)(r.p,{children:[`Функция `,(0,u.jsx)(r.code,{children:`classNames`}),` переименована в `,(0,u.jsx)(r.code,{children:`cn`}),`. Старое имя `,(0,u.jsx)(r.code,{children:`classNames`}),` теперь `,(0,u.jsx)(r.code,{children:`deprecated`}),`.`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`import { cn } from '@astral/ui';

const classes = cn('button', isActive && 'button_active');
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`import { classNames } from '@astral/ui';

const classes = classNames('button', isActive && 'button_active');
`})}),`
`,(0,u.jsx)(r.h3,{id:`breakpoints-новый-параметр-mobile-900`,children:`Breakpoints. Новый параметр mobile: 900`}),`
`,(0,u.jsxs)(r.p,{children:[`Добавлено значение `,(0,u.jsx)(r.code,{children:`mobile`}),` со значением `,(0,u.jsx)(r.code,{children:`900`}),` в `,(0,u.jsx)(r.code,{children:`theme.breakpoints`}),`. Весь ui-kit переключается на мобильный интерфейс на разрешениях `,(0,u.jsx)(r.strong,{children:`до 900px`}),` — раньше порог был 600px (`,(0,u.jsx)(r.code,{children:`sm`}),`).`]}),`
`,(0,u.jsx)(r.p,{children:`Причина: на мобильных устройствах в горизонтальной ориентации ширина попадала в диапазон 600–899px, и пользователь получал интерфейс для больших экранов, которым невозможно пользоваться.`}),`
`,(0,u.jsxs)(r.p,{children:[`Значение `,(0,u.jsx)(r.code,{children:`sm`}),` (600) осталось в теме, но ui-kit его больше не использует.`]}),`
`,(0,u.jsxs)(r.table,{children:[(0,u.jsx)(r.thead,{children:(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.th,{children:`Ключ`}),(0,u.jsx)(r.th,{children:`Значение`})]})}),(0,u.jsxs)(r.tbody,{children:[(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`xs`})}),(0,u.jsx)(r.td,{children:`0`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`sm`})}),(0,u.jsx)(r.td,{children:`600`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`mobile`})}),(0,u.jsx)(r.td,{children:`900`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`md`})}),(0,u.jsx)(r.td,{children:`900`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`lg`})}),(0,u.jsx)(r.td,{children:`1200`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`laptop`})}),(0,u.jsx)(r.td,{children:`1370`})]}),(0,u.jsxs)(r.tr,{children:[(0,u.jsx)(r.td,{children:(0,u.jsx)(r.code,{children:`xl`})}),(0,u.jsx)(r.td,{children:`1536`})]})]})]}),`
`,(0,u.jsx)(r.h4,{id:`что-нужно-сделать-в-приложении`,children:`Что нужно сделать в приложении`}),`
`,(0,u.jsxs)(r.p,{children:[`Если в приложении есть свои медиа-запросы через `,(0,u.jsx)(r.code,{children:`breakpoints.down('sm')`}),`, они останутся на 600px, а ui-kit уедет на 900px. На ширине 600–899px вёрстка приложения останется рассчитанной на большие экраны, а компоненты ui-kit будут в мобильном виде.`]}),`
`,(0,u.jsxs)(r.p,{children:[`Особенно это касается переопределения стилей компонентов ui-kit: стили под `,(0,u.jsx)(r.code,{children:`down('sm')`}),` перестанут действовать на 600–899px, а мобильные стили компонента там уже применятся.`]}),`
`,(0,u.jsxs)(r.p,{children:[`Замените вызовы со значением `,(0,u.jsx)(r.code,{children:`sm`}),` на `,(0,u.jsx)(r.code,{children:`mobile`}),`:`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const Container = styled.div\`
  \${({ theme }) => theme.breakpoints.down('mobile')} {
    padding: \${({ theme }) => theme.spacing(2)};
  }
\`;
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД:`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const Container = styled.div\`
  \${({ theme }) => theme.breakpoints.down('sm')} {
    padding: \${({ theme }) => theme.spacing(2)};
  }
\`;
`})}),`
`,(0,u.jsxs)(r.p,{children:[`⚠️ Не заменяйте `,(0,u.jsx)(r.code,{children:`'sm'`}),` по всему проекту без привязки к вызову `,(0,u.jsx)(r.code,{children:`breakpoints`}),` — этим же литералом задаются размеры компонентов (`,(0,u.jsx)(r.code,{children:`<Avatar size="sm" />`}),`, `,(0,u.jsx)(r.code,{children:`<Dialog size="sm" />`}),`, `,(0,u.jsx)(r.code,{children:`<SvgIcon size="sm" />`}),` и другие).`]}),`
`,(0,u.jsx)(r.h4,{id:`хук-useviewporttype`,children:`Хук useViewportType`}),`
`,(0,u.jsxs)(r.p,{children:[`Если для определения мобильного устройства используется `,(0,u.jsx)(r.code,{children:`useViewportType`}),`, менять ничего не нужно — хук переключился на новое значение вместе с ui-kit.`]}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const { isMobile } = useViewportType(); // true при ширине < 900px
`})}),`
`,(0,u.jsx)(r.h4,{id:`кастомные-breakpoints-в-createtheme`,children:`Кастомные breakpoints в createTheme`}),`
`,(0,u.jsxs)(r.p,{children:[(0,u.jsx)(r.code,{children:`createTheme`}),` теперь объединяет переданные `,(0,u.jsx)(r.code,{children:`breakpoints`}),` со значениями по умолчанию, поэтому ключ `,(0,u.jsx)(r.code,{children:`mobile`}),` не потеряется, даже если приложение передаёт свой набор значений.`]}),`
`,(0,u.jsx)(r.h3,{id:`datagrid-ссылка-строки-через-renderlink`,children:`DataGrid: ссылка строки через renderLink`}),`
`,(0,u.jsxs)(r.p,{children:[`Опции строки `,(0,u.jsx)(r.code,{children:`href`}),` и `,(0,u.jsx)(r.code,{children:`target`}),` `,(0,u.jsx)(r.strong,{children:`помечены как deprecated`}),` — вместо них используйте проп `,(0,u.jsx)(r.code,{children:`renderLink`}),` у `,(0,u.jsx)(r.code,{children:`DataGrid`}),` и `,(0,u.jsx)(r.code,{children:`DataGridInfinite`}),`.`]}),`
`,(0,u.jsxs)(r.p,{children:[`Продукт сам отрисовывает элемент ссылки и получает данные строки, поэтому может подставить `,(0,u.jsx)(r.code,{children:`Link`}),` своего роутера: обычный клик не перезагружает страницу, а средний клик и Ctrl/Cmd-клик открывают строку в новой вкладке.`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД (рекомендуемый):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`import { Link } from 'react-router';

<DataGrid
  keyId="id"
  rows={rows}
  columns={columns}
  renderLink={({ children, row }) => (
    <Link to={\`/documents/\${row.id}\`}>{children}</Link>
  )}
/>;
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<DataGrid
  keyId="id"
  rows={rows.map((row) => ({ ...row, options: { href: \`/documents/\${row.id}\` } }))}
  columns={columns}
/>;
`})}),`
`,(0,u.jsxs)(r.p,{children:[`Ссылка нужна не в каждой строке — верните `,(0,u.jsx)(r.code,{children:`null`}),`, тогда строка отобразится без ссылки:`]}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`renderLink={({ children, row }) =>
  row.isPublished ? <Link to={\`/documents/\${row.id}\`}>{children}</Link> : null
}
`})}),`
`,(0,u.jsx)(r.h3,{id:`datagrid-блокировка-строки-через-getrowdisabled`,children:`DataGrid: блокировка строки через getRowDisabled`}),`
`,(0,u.jsxs)(r.p,{children:[`Опции строки `,(0,u.jsx)(r.code,{children:`isDisabled`}),`, `,(0,u.jsx)(r.code,{children:`isDisabledLastCell`}),` и `,(0,u.jsx)(r.code,{children:`disabledReason`}),` `,(0,u.jsx)(r.strong,{children:`помечены как deprecated`}),` — вместо них используйте проп `,(0,u.jsx)(r.code,{children:`getRowDisabled`}),`. Пример — `,(0,u.jsx)(r.a,{href:`/story/table-datagrid--disabled-rows`,children:`DisabledRows`}),`.`]}),`
`,(0,u.jsxs)(r.ul,{children:[`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`isDisabled: true`}),` -> `,(0,u.jsx)(r.code,{children:`mode: 'row'`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`isDisabled: true`}),` + `,(0,u.jsx)(r.code,{children:`isDisabledLastCell: false`}),` -> `,(0,u.jsx)(r.code,{children:`mode: 'row-except-last-cell'`})]}),`
`,(0,u.jsxs)(r.li,{children:[(0,u.jsx)(r.code,{children:`disabledReason`}),` -> `,(0,u.jsx)(r.code,{children:`reason`}),`, теперь обязательный`]}),`
`,(0,u.jsxs)(r.li,{children:[`новый режим `,(0,u.jsx)(r.code,{children:`mode: 'selection'`}),` блокирует только checkbox`]}),`
`]}),`
`,(0,u.jsx)(r.p,{children:`✅ НОВЫЙ ПОДХОД:`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`const getRowDisabled = useCallback(
  (row: Doc): DataGridRowDisabled | undefined =>
    row.hasAccess ? undefined : { mode: 'row', reason: 'Нет доступа к документу' },
  [],
);

<DataGrid rows={rows} getRowDisabled={getRowDisabled} />;
`})}),`
`,(0,u.jsx)(r.p,{children:`❌ СТАРЫЙ ПОДХОД (deprecated):`}),`
`,(0,u.jsx)(r.pre,{children:(0,u.jsx)(r.code,{className:`language-tsx`,children:`<DataGrid
  rows={rows.map((row) => ({
    ...row,
    options: { isDisabled: !row.hasAccess, disabledReason: 'Нет доступа к документу' },
  }))}
/>;
`})}),`
`,(0,u.jsxs)(r.p,{children:[(0,u.jsx)(r.code,{children:`DataGridCollapsibleRow`}),`: при `,(0,u.jsx)(r.code,{children:`isDisabled: true`}),` без `,(0,u.jsx)(r.code,{children:`isDisabledLastCell`}),` последняя ячейка теперь блокируется, как в `,(0,u.jsx)(r.code,{children:`DataGrid`}),`. Чтобы оставить её доступной, задайте `,(0,u.jsx)(r.code,{children:`isDisabledLastCell: false`}),` или `,(0,u.jsx)(r.code,{children:`mode: 'row-except-last-cell'`}),`.`]})]})}function l(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=a(),r(),i(),o(),s()})))()}d();export{l as default};