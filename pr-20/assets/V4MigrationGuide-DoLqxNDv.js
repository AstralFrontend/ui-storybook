import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,ln as n,na as r,oa as i,ra as a,sa as o,xa as s}from"./preview-CphKROT6.js";import{t as c}from"./public-C9HfAq0i.js";function l(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...o(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Getting Started/V4 Migration Guide`}),`
`,`
`,`
`,(0,d.jsx)(t.h1,{id:`v3---v4-migration-guide`,children:`V3 -> V4 Migration Guide`}),`
`,(0,d.jsx)(t.p,{children:`Это руководство поможет вам мигрировать проект с версии 3 на версию 4 библиотеки @astral/ui.`}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{id:`-содержание`,children:`📋 Содержание`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#theme`,children:`🎨 Theme (Тема)`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#fonts`,children:`✍️ Fonts (Шрифты)`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#packages`,children:`📦 Packages (Пакеты)`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#icons`,children:`🎯 Icons (Иконки)`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#components`,children:`🧩 Components (Компоненты)`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#renaming-table`,children:`📝 Переименования компонентов`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#props-table`,children:`🗑 Удаленные props компонентов`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#classnames-table`,children:`📋 Изменения className`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#hook-form`,children:`🔄 Hook Form`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#crypto`,children:`🔒 Crypto`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#versioning`,children:`📌 Версионирование`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#additional`,children:`🎉 Дополнительно`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`#FAQ`,children:`❓ Возникли вопросы?`})}),`
`]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`theme`}),`
`,(0,d.jsx)(t.h2,{id:`-theme-тема`,children:`🎨 Theme (Тема)`}),`
`,`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:h,formatFn:_})}),`
`,(0,d.jsx)(t.h3,{id:`ключевые-изменения`,children:`Ключевые изменения`}),`
`,(0,d.jsxs)(t.h4,{id:`1-замена-shadows-на-elevation`,children:[`1. Замена `,(0,d.jsx)(t.code,{children:`shadows`}),` на `,(0,d.jsx)(t.code,{children:`elevation`})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Удалено`}),`: `,(0,d.jsx)(t.code,{children:`theme.shadows`})]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Используйте`}),`: `,(0,d.jsx)(t.code,{children:`theme.elevation`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`2-изменение-palette`,children:`2. Изменение Palette`}),`
`,(0,d.jsx)(t.p,{children:`Следующие свойства palette больше не поддерживаются. Используйте замены:`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`❌ Удалено`}),(0,d.jsx)(t.th,{children:`✅ Используйте вместо`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`info`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`primary`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`divider`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`grey[300]`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`contrastThreshold`})}),(0,d.jsx)(t.td,{children:`-`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`getContrastText`})}),(0,d.jsx)(t.td,{children:`-`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`augmentColor`})}),(0,d.jsx)(t.td,{children:`-`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`tonalOffset`})}),(0,d.jsx)(t.td,{children:`-`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`action`})}),(0,d.jsx)(t.td,{children:`-`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`action.hover`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`background.elementHover`})})]})]})]}),`
`,(0,d.jsxs)(t.h4,{id:`3-новая-функция-microspacing`,children:[`3. Новая функция `,(0,d.jsx)(t.code,{children:`microSpacing`})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Добавлена функция `,(0,d.jsx)(t.code,{children:`microSpacing`}),` для микроверстки с коэффициентом 2`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:`/docs/design-tokens-spacing--docs`,children:`Подробнее в разделе Design Tokens`})}),`
`]}),`
`,(0,d.jsxs)(t.h4,{id:`4-функция-spacing`,children:[`4. Функция `,(0,d.jsx)(t.code,{children:`spacing`})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Требование`}),`: Убрать дробные числа`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Было`}),`: `,(0,d.jsx)(t.code,{children:`spacing(0.5)`}),` → `,(0,d.jsx)(t.strong,{children:`Стало`}),`: `,(0,d.jsx)(t.code,{children:`microSpacing(1)`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`5-изменение-api-создания-темы`,children:`5. Изменение API создания темы`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Было`}),`: `,(0,d.jsx)(t.code,{children:`createTheme({ brand: brandPalette })`})]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Стало`}),`: `,(0,d.jsx)(t.code,{children:`createTheme({ palette: brandPalette })`})]}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`пример-создания-темы`,children:`Пример создания темы`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { type BrandPalette, createTheme } from '@astral/ui';

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

// ✅ Правильно: передаем объект с ключом palette
const theme = createTheme({ palette: brandPalette });
`})}),`
`,(0,d.jsx)(t.h3,{id:`готовые-палитры-брендов`,children:`Готовые палитры брендов`}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`Default`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#0F52B8",
    800: "#2165CC",
    700: "#1874FF",
    600: "#2684FF",
    500: "#4C9AFF",
    400: "#70AEFF",
    300: "#94C2FF",
    200: "#C5DCFF",
    100: "#E1EDFF"
  },
  secondary: {
    800: "#55B8F0"
  },
  brand: {
    800: "#2165CC",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`EDO`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#5D3FD4",
    800: "#6746EB",
    700: "#8566FF",
    600: "#9075FF",
    500: "#9D85FF",
    400: "#B29EFF",
    300: "#C2B2FF",
    200: "#E0D9FF",
    100: "#EFEBFF"
  },
  secondary: {
    800: "#5653FF"
  },
  brand: {
    800: "#6746EB",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`KEDO`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#5D3FD4",
    800: "#6746EB",
    700: "#8566FF",
    600: "#9075FF",
    500: "#9D85FF",
    400: "#B29EFF",
    300: "#C2B2FF",
    200: "#E0D9FF",
    100: "#EFEBFF"
  },
  secondary: {
    800: "#5653FF"
  },
  brand: {
    800: "#6746EB",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`AO5`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#0068B2",
    800: "#0074C6",
    700: "#0989E3",
    600: "#2195E6",
    500: "#3AA1E9",
    400: "#52ACEB",
    300: "#84C4F1",
    200: "#C1E2F8",
    100: "#DFF0FB"
  },
  secondary: {
    800: "#14A5D3"
  },
  brand: {
    800: "#0074C6",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`OFD`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#1F78D6",
    800: "#2285EE",
    700: "#46A0FF",
    600: "#58A9FF",
    500: "#6BB3FF",
    400: "#7DBCFF",
    300: "#A2CFFF",
    200: "#D1E7FF",
    100: "#E7F3FF"
  },
  secondary: {
    800: "#22BDEE"
  },
  brand: {
    800: "#2285EE",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`Sign`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#325D89",
    800: "#376798",
    700: "#4D86BF",
    600: "#5E92C5",
    500: "#719ECC",
    400: "#82AAD2",
    300: "#A6C2DF",
    200: "#D3E1EF",
    100: "#E8EFF7"
  },
  secondary: {
    800: "#4099AC"
  },
  brand: {
    800: "#376798",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`LKP`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#009E71",
    800: "#00B07E",
    700: "#2CC89B",
    600: "#41CDA5",
    500: "#56D3AF",
    400: "#6BD8B9",
    300: "#95E3CD",
    200: "#CAF1E6",
    100: "#E3F8F2"
  },
  secondary: {
    800: "#00BDB2"
  },
  brand: {
    800: "#00B07E",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`POA`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#0A9DEF",
    800: "#33ADF2",
    700: "#4DB8F4",
    600: "#66C2F5",
    500: "#80CCF8",
    400: "#99D6F9",
    300: "#B3E1FB",
    200: "#CCEBFC",
    100: "#E6F5FE"
  },
  secondary: {
    800: "#2BCCFF"
  },
  brand: {
    800: "#33ADF2",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`RSS`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#541B8D",
    800: "#663499",
    700: "#7A4EA6",
    600: "#8D67B2",
    500: "#A080C0",
    400: "#B399CC",
    300: "#C6B3D9",
    200: "#D9CCE5",
    100: "#ECE6F3"
  },
  secondary: {
    800: "#8B45D1"
  },
  brand: {
    800: "#663499",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`Sber`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#005E7F",
    800: "#107F8C",
    700: "#21A19A",
    600: "#7AC7C2",
    500: "#90D0CC",
    400: "#ABDBD8",
    300: "#D3ECEB",
    200: "#E5FCF7",
    100: "#EEF8F7"
  },
  secondary: {
    800: "#107F8C"
  },
  brand: {
    800: "#107F8C",
    background: "#E4E8EB"
  },
  green: {
    900: "#278B86",
    800: "#21A19A",
    700: "#3CADA6",
    600: "#7AC7C2",
    500: "#A6D9D7",
    400: "#C1E5E3",
    300: "#DBF0EF",
    200: "#E9F6F5",
    100: "#F2FAF9"
  },
  red: {
    900: "#920C24",
    800: "#C11030",
    700: "#C92D49",
    600: "#DA7083",
    500: "#E69FAC",
    400: "#EEBCC5",
    300: "#F5D9DE",
    200: "#F9E8EB",
    100: "#FCF1F3"
  },
  yellow: {
    900: "#CC7A00",
    800: "#FF9900",
    700: "#FFA61F",
    600: "#FFC266",
    500: "#FFD699",
    400: "#FFE3B8",
    300: "#FFEED6",
    200: "#FFF5E6",
    100: "#FFF9F0"
  },
  grey: {
    900: "#1F1F22",
    800: "#565B62",
    700: "#7D838A",
    600: "#979CA1",
    500: "#A4A8AD",
    400: "#B2B8BF",
    300: "#D9DEE3",
    200: "#E4E8EB",
    100: "#F2F5F5"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`LK1C`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#0559AD",
    800: "#087FF7",
    700: "#268FF9",
    600: "#6BB2FA",
    500: "#9CCCFC",
    400: "#BADCFD",
    300: "#D7EAFE",
    200: "#E7F3FF",
    100: "#F0F8FF"
  },
  secondary: {
    800: "#2EA32E"
  },
  brand: {
    800: "#FF5E5D",
    background: "#F9F4F2"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`Platform`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#1A83C7",
    800: "#3391CD",
    700: "#4D9ED4",
    600: "#66ACDA",
    500: "#80BAE0",
    400: "#99C8E6",
    300: "#B2D6EC",
    200: "#CCE3F3",
    100: "#E5F1F9"
  },
  secondary: {
    800: "#3ED1F5"
  },
  brand: {
    800: "#0088CB",
    background: "#FAFBFC"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`EKO`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#1A68FF",
    800: "#0A7CFF",
    700: "#4D89FF",
    600: "#669AFF",
    500: "#80ABFF",
    400: "#99BCFF",
    300: "#B2CDFF",
    200: "#CCDDFF",
    100: "#E5EEFF"
  },
  secondary: {
    800: "#0A7CFF"
  },
  brand: {
    800: "#0A7CFF",
    background: "#F0F4FA"
  }
}
`})})]}),`
`,(0,d.jsxs)(`details`,{children:[(0,d.jsx)(`summary`,{children:`ETP1C`}),(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-js`,children:`const brandPalette = {
  primary: {
    900: "#1A809C",
    800: "#028DA7",
    700: "#4D9CB2",
    600: "#66AABD",
    500: "#80B9C8",
    400: "#99C7D3",
    300: "#B2D5DE",
    200: "#CCE3E9",
    100: "#E5F1F4"
  },
  secondary: {
    800: "#4099AC"
  },
  brand: {
    800: "#037186",
    background: "#F2F5FA"
  }
}
`})})]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`fonts`}),`
`,(0,d.jsx)(t.h2,{id:`️-fonts-шрифты`,children:`✍️ Fonts (Шрифты)`}),`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:v,formatFn:y})}),`
`,(0,d.jsx)(t.h3,{id:`подключение-шрифтов`,children:`Подключение шрифтов`}),`
`,(0,d.jsxs)(t.p,{children:[`Для подключения шрифтов используйте CSS файл из `,(0,d.jsx)(t.a,{href:`https://frontend-static.astral.ru/fonts`,rel:`nofollow`,children:`сервиса для хранения статичных файлов`}),`.`]}),`
`,(0,d.jsx)(t.h3,{id:`️-важные-требования`,children:`⚠️ Важные требования`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Content Security Policy`}),`: Необходимо настроить CSP для домена `,(0,d.jsx)(t.code,{children:`frontend-static.astral.ru`}),`.
Для этого добавьте домен в nginx.conf в параметр `,(0,d.jsx)(t.code,{children:`Content-Security-Policy`}),` в поля `,(0,d.jsx)(t.code,{children:`img-src`}),`, `,(0,d.jsx)(t.code,{children:`style-src`}),`, `,(0,d.jsx)(t.code,{children:`font-src`}),`'.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Preload link`}),`: Обязательно добавляйте `,(0,d.jsx)(t.code,{children:`preload`}),` для вариативного шрифта`]}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`пример-подключения`,children:`Пример подключения`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-html`,children:`<!-- Предварительная загрузка для оптимизации производительности -->
<link 
  rel="preload" 
  href="https://frontend-static.astral.ru/fonts/inter/1.0.0/fonts.min.css" 
  as="style"
/>

<!-- Основное подключение стилей -->
<link 
  rel="stylesheet" 
  href="https://frontend-static.astral.ru/fonts/inter/1.0.0/fonts.min.css"
/>
`})}),`
`,(0,d.jsx)(t.h3,{id:`замена-устаревших-вариантов-шрифтов`,children:`Замена устаревших вариантов шрифтов`}),`
`,(0,d.jsx)(t.p,{children:`Следующие варианты шрифтов больше не поддерживаются. Используйте замены:`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`❌ Удалено`}),(0,d.jsx)(t.th,{children:`✅ Используйте вместо`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`h7`}),`, `,(0,d.jsx)(t.code,{children:`h8`}),`, `,(0,d.jsx)(t.code,{children:`h9`})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`pointer`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`body2`}),`, `,(0,d.jsx)(t.code,{children:`ui`})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`body1`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`overline`}),`, `,(0,d.jsx)(t.code,{children:`small`})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`caption`})})]})]})]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`packages`}),`
`,(0,d.jsx)(t.h2,{id:`-packages-пакеты`,children:`📦 Packages (Пакеты)`}),`
`,(0,d.jsx)(t.h3,{id:`объединение-пакетов`,children:`Объединение пакетов`}),`
`,(0,d.jsxs)(t.p,{children:[`Пакет `,(0,d.jsx)(t.code,{children:`@astral/ui`}),` теперь объединяет в себе все необходимые части:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`✅ Все компоненты`}),`
`,(0,d.jsx)(t.li,{children:`✅ Обертки для форм`}),`
`,(0,d.jsx)(t.li,{children:`✅ Иконки`}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`deprecated-пакеты`,children:`Deprecated пакеты`}),`
`,(0,d.jsxs)(t.p,{children:[`Следующие пакеты `,(0,d.jsx)(t.strong,{children:`объявлены устаревшими`}),` и больше не поддерживаются:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`❌ `,(0,d.jsx)(t.code,{children:`@astral/components`})]}),`
`,(0,d.jsxs)(t.li,{children:[`❌ `,(0,d.jsx)(t.code,{children:`@astral/icons`})]}),`
`,(0,d.jsxs)(t.li,{children:[`❌ `,(0,d.jsx)(t.code,{children:`@astral/form`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`миграция-импортов---не-требуется`,children:`Миграция импортов - не требуется`}),`
`,(0,d.jsx)(t.h3,{id:`удаленные-ресурсы`,children:`Удаленные ресурсы`}),`
`,(0,d.jsx)(t.p,{children:`Из пакета удалены:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`fonts`}),` (используйте подключение через CDN)`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`illustrations`})}),`
`]}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:`https://git.astralnalog.ru/frontend.shared/ui/-/tree/v3/packages/ui`,rel:`nofollow`,children:`Просмотреть удаленные файлы можно тут`})}),`
`,(0,d.jsx)(t.h3,{id:`features`,children:`Features`}),`
`,(0,d.jsx)(t.h4,{id:`cryptopro`,children:`CryptoPro`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`❌ `,(0,d.jsx)(t.strong,{children:`Удален`}),`: `,(0,d.jsx)(t.code,{children:`cryptoPro`})]}),`
`,(0,d.jsxs)(t.li,{children:[`✅ `,(0,d.jsx)(t.strong,{children:`Используйте`}),`: `,(0,d.jsx)(t.a,{href:`https://cryptodocs.astralnalog.ru/`,rel:`nofollow`,children:`@astral-private/crypto`})]}),`
`]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`icons`}),`
`,(0,d.jsx)(t.h2,{id:`-icons-иконки`,children:`🎯 Icons (Иконки)`}),`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:b,formatFn:x})}),`
`,(0,d.jsx)(t.h3,{id:`удаленные-иконки`,children:`Удаленные иконки`}),`
`,(0,d.jsx)(t.p,{children:`Следующие иконки удалены или переименованы. Используйте замены:`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`❌ Удалено`}),(0,d.jsx)(t.th,{children:`✅ Используйте вместо`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowROutlineLg`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ArrowROutlineMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`AddCertOutlineMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`CertAddOutlineMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`AddOrgOutlineMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`CompanyAddOutlineMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`AddSmOutlineMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`AddOutlineMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`VisibilityOffOutlineMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`EyeCrossedOutlineMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ManOutlineSm`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ProfileOutlineSm`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`PitOutlineSm`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`PitFillSm`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ProblemOutlineSm`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`BlockOutlineSm`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`CloseFillSm`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`CircleErrorFillSm`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`TwitterFillMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`XFillMd`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`ClassmatesFillMd`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`OkFillMd`})})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`изменения-в-svgicon`,children:`Изменения в SvgIcon`}),`
`,(0,d.jsxs)(t.p,{children:[`Компонент `,(0,d.jsx)(t.code,{children:`SvgIcon`}),` из MUI заменен на собственную реализацию.`]}),`
`,(0,d.jsx)(t.h4,{id:`удаленные-props`,children:`Удаленные props`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`❌ Удалено`}),(0,d.jsx)(t.th,{children:`✅ Используйте вместо`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`htmlColor`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`color`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`fontSize`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`size`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`color="action"`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`color="primary"`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`color="info"`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`color="primary"`})})]})]})]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`components`}),`
`,(0,d.jsx)(t.h2,{id:`-components-компоненты`,children:`🧩 Components (Компоненты)`}),`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:S,formatFn:C})}),`
`,(0,d.jsx)(t.h3,{id:`-удаленные-компоненты`,children:`❌ Удаленные компоненты`}),`
`,(0,d.jsx)(t.p,{children:`Следующие deprecated компоненты полностью удалены:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`DataGrid`}),` (старая версия)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`DataGridInfinite`}),` (старая версия)`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`DataList`})}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`FeedbackPanel`})}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`DateRangePicker`}),` (старая версия)`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`LegacyGrid`})}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`MenuOrganization`}),` (старая версия)`]}),`
`,(0,d.jsx)(t.li,{children:(0,d.jsx)(t.code,{children:`SwipeableDrawer`})}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`FormDateRangePicker`}),` (старая версия)`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`Table`}),`, `,(0,d.jsx)(t.code,{children:`TableBody`}),`, `,(0,d.jsx)(t.code,{children:`TableCell`}),`, `,(0,d.jsx)(t.code,{children:`TableContainer`}),`, `,(0,d.jsx)(t.code,{children:`TableFooter`}),`, `,(0,d.jsx)(t.code,{children:`TableRow`}),`, `,(0,d.jsx)(t.code,{children:`TableSortLabel`}),` → используйте `,(0,d.jsx)(t.code,{children:`DataGrid`})]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`CircularProgress`}),` → используйте `,(0,d.jsx)(t.code,{children:`Loader`})]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`ActionCell`}),` → используйте `,(0,d.jsx)(t.code,{children:`DataGridActionCell`})]}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`-удаленные-фича-флаги`,children:`🚫 Удаленные фича-флаги`}),`
`,(0,d.jsx)(t.p,{children:`Следующие feature flags удалены (функциональность теперь работает по умолчанию):`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Компонент`}),(0,d.jsx)(t.th,{children:`Удаленный флаг`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Sidebar`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`isFixedWidth`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Layout`})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`isNewLayout`}),`, `,(0,d.jsx)(t.code,{children:`isScrollOnContent`})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`PageContent`})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`isSeparatorShown`}),`, `,(0,d.jsx)(t.code,{children:`isPaddingDisabled`})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`PageLayout`}),`, `,(0,d.jsx)(t.code,{children:`PageLayoutContainer`})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`isFullWidth`})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Tab`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`hasBottomDivider`})})]})]})]}),`
`,(0,d.jsx)(t.h3,{id:`-детальные-изменения-компонентов`,children:`📝 Детальные изменения компонентов`}),`
`,(0,d.jsx)(t.h4,{id:`dashboardlayout`,children:`DashboardLayout`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`✅ Добавлен слот для компонента `,(0,d.jsx)(t.code,{children:`MenuOrganization`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`button`,children:`Button`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`По умолчанию для `,(0,d.jsx)(t.code,{children:`variant="text"`}),` теперь используется цвет `,(0,d.jsx)(t.code,{children:`grey`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`togglebutton`,children:`ToggleButton`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`✅ Добавлен параметр `,(0,d.jsx)(t.code,{children:`counterMax`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`circularprogress--loader-отказ-от-mui`,children:`CircularProgress → Loader (отказ от MUI)`}),`
`,(0,d.jsxs)(t.p,{children:[`Компонент `,(0,d.jsx)(t.code,{children:`CircularProgress`}),` удален. Используйте `,(0,d.jsx)(t.code,{children:`Loader`}),`.`]}),`
`,(0,d.jsx)(t.h4,{id:`collapsablealert`,children:`CollapsableAlert`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`✅ Новые props: `,(0,d.jsx)(t.code,{children:`summaryVariant`}),`, `,(0,d.jsx)(t.code,{children:`subtitle`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`accordion`,children:`Accordion`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`onChange`}),` теперь принимает `,(0,d.jsx)(t.code,{children:`SyntheticEvent`}),` вместо `,(0,d.jsx)(t.code,{children:`MouseEvent`})]}),`
`,(0,d.jsxs)(t.li,{children:[`✅ Новые props: `,(0,d.jsx)(t.code,{children:`summaryVariant`}),`, `,(0,d.jsx)(t.code,{children:`subtitle`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`notification--legacynotification`,children:`Notification → LegacyNotification`}),`
`,(0,d.jsxs)(t.p,{children:[`Старый компонент `,(0,d.jsx)(t.code,{children:`Notification`}),` переименован:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
import { Notification, NotificationVariantTypes } from '@astral/ui';

// ✅ Новый способ
import { LegacyNotification, NotificationVariantTypes } from '@astral/ui/components/LegacyNotification';
<LegacyNotification variant={NotificationVariantTypes.Info} />
`})}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Изменения`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Enum значения теперь в PascalCase: `,(0,d.jsx)(t.code,{children:`info`}),` → `,(0,d.jsx)(t.code,{children:`Info`}),`, `,(0,d.jsx)(t.code,{children:`success`}),` → `,(0,d.jsx)(t.code,{children:`Success`}),`, `,(0,d.jsx)(t.code,{children:`warning`}),` → `,(0,d.jsx)(t.code,{children:`Warning`}),`, `,(0,d.jsx)(t.code,{children:`error`}),` → `,(0,d.jsx)(t.code,{children:`Error`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`notificationnext--notification`,children:`NotificationNext → Notification`}),`
`,(0,d.jsx)(t.p,{children:`Новый компонент стал основным:`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
import { NotificationNext } from '@astral/ui';

// ✅ Новый способ
import { Notification, NotificationVariantTypes } from '@astral/ui/components/Notification';
<Notification variant={NotificationVariantTypes.Info} />
`})}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Изменения в enum`}),`:`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Все варианты теперь в PascalCase: `,(0,d.jsx)(t.code,{children:`info`}),` → `,(0,d.jsx)(t.code,{children:`Info`}),`, `,(0,d.jsx)(t.code,{children:`success`}),` → `,(0,d.jsx)(t.code,{children:`Success`}),`, `,(0,d.jsx)(t.code,{children:`warning`}),` → `,(0,d.jsx)(t.code,{children:`Warning`}),`, `,(0,d.jsx)(t.code,{children:`error`}),` → `,(0,d.jsx)(t.code,{children:`Error`}),`, `,(0,d.jsx)(t.code,{children:`progress`}),` → `,(0,d.jsx)(t.code,{children:`Progress`})]}),`
`]}),`
`,(0,d.jsx)(t.h4,{id:`banner`,children:`Banner`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
import { Banner } from '@astral/ui';

// ✅ Новый способ
import { Banner } from '@astral/ui/components/Banner';
`})}),`
`,(0,d.jsx)(t.h4,{id:`switch`,children:`Switch`}),`
`,(0,d.jsxs)(t.p,{children:[`Упрощен API для label - теперь можно передавать `,(0,d.jsx)(t.code,{children:`label`}),` напрямую в компонент `,(0,d.jsx)(t.code,{children:`Switch`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
import { FormControlLabel, Switch } from '@astral/ui';
<FormControlLabel
  control={<Switch />}
  label="Label"
  labelPlacement="end"
/>

// ✅ Новый способ
<Switch
  label="Label"
  labelPlacement="end"
/>
`})}),`
`,(0,d.jsx)(t.h4,{id:`pageheaderbreadcrumbs`,children:`PageHeader.breadcrumbs`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Убрана возможность передавать массив элементов`}),`
`,(0,d.jsxs)(t.li,{children:[`✅ Используйте компонент `,(0,d.jsx)(t.a,{href:`/story/navigation-breadcrumbs--docs`,children:`Breadcrumbs`})]}),`
`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
<PageHeader breadcrumbs={['Home', 'Page']} />

// ✅ Новый способ
<PageHeader>
  <Breadcrumbs>
    <Link href="/">Home</Link>
    <Typography>Page</Typography>
  </Breadcrumbs>
</PageHeader>
`})}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`renaming-table`}),`
`,(0,d.jsx)(t.h2,{id:`-переименования-компонентов`,children:`📝 Переименования компонентов`}),`
`,`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:w,formatFn:T})}),`
`,(0,d.jsx)(m,{data:w,columns:E}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`props-table`}),`
`,(0,d.jsx)(t.h2,{id:`-удаленные-props-компонентов`,children:`🗑 Удаленные props компонентов`}),`
`,`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:D,formatFn:O})}),`
`,(0,d.jsx)(m,{data:D,columns:k}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`classnames-table`}),`
`,(0,d.jsx)(t.h2,{id:`-изменения-classname`,children:`📋 Изменения className`}),`
`,`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:A,formatFn:j})}),`
`,(0,d.jsx)(m,{data:A,columns:M}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`hook-form`}),`
`,(0,d.jsx)(t.h2,{id:`-hook-form`,children:`🔄 Hook Form`}),`
`,`
`,`
`,(0,d.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,d.jsx)(p,{data:N,formatFn:P})}),`
`,(0,d.jsx)(t.h3,{id:`основные-изменения`,children:`Основные изменения`}),`
`,(0,d.jsxs)(t.p,{children:[`Функция `,(0,d.jsx)(t.code,{children:`resolver`}),` перенесена из `,(0,d.jsx)(t.code,{children:`@astral/validations-react-hook-form-resolver`}),` в `,(0,d.jsx)(t.code,{children:`@astral/ui`}),` и теперь называется `,(0,d.jsx)(t.code,{children:`formValidationResolver`}),`.`]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`✅ Теперь не нужно фиксировать RHF пакет на определенной версии`}),`
`]}),`
`,(0,d.jsx)(t.h3,{id:`новый-api-валидации`,children:`Новый API валидации`}),`
`,(0,d.jsxs)(t.p,{children:[`Теперь можно передавать схему валидации напрямую в `,(0,d.jsx)(t.code,{children:`useForm`}),`:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { useForm } from '@astral/ui';
import { object, string, optional, mobilePhone, email } from '@astral/validations';

// Определяем схему валидации
const validationSchema = object<FormValues>({
  lastName: string(),
  name: string(),
  patronymic: optional(string()),
  phone: string(mobilePhone()),
  email: string(email()),
});

// Передаем схему напрямую в useForm
const form = useForm<FormValues>({
  validationSchema
});
`})}),`
`,(0,d.jsx)(t.h3,{id:`миграция`,children:`Миграция`}),`
`,(0,d.jsx)(t.h4,{id:`шаг-1-обновите-react-hook-form`,children:`Шаг 1: Обновите react-hook-form`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-bash`,children:`npm install react-hook-form@^7.66.1
`})}),`
`,(0,d.jsx)(t.h4,{id:`шаг-2-удалите-старый-пакет`,children:`Шаг 2: Удалите старый пакет`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-bash`,children:`npm uninstall @astral/validations-react-hook-form-resolver
`})}),`
`,(0,d.jsx)(t.h4,{id:`шаг-3-обновите-импорты`,children:`Шаг 3: Обновите импорты`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// ❌ Старый способ
import { resolver } from '@astral/validations-react-hook-form-resolver';
import { useForm } from 'react-hook-form';

const form = useForm({
  resolver: resolver(validationSchema)
});

// ✅ Новый способ: передаем схему напрямую
import { useForm } from '@astral/ui';

const form = useForm({
  validationSchema
});
`})}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`crypto`}),`
`,(0,d.jsx)(t.h2,{id:`-crypto`,children:`🔒 Crypto`}),`
`,(0,d.jsx)(t.h4,{id:`обновите-astral-privatecrypto-до-версии-3`,children:`Обновите @astral-private/crypto до версии 3`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-bash`,children:`npm install @astral-private/crypto@^3.0.0
`})}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`versioning`}),`
`,(0,d.jsx)(t.h2,{id:`-версионирование`,children:`📌 Версионирование`}),`
`,(0,d.jsxs)(t.p,{children:[`Для библиотек, которым необходимо поддерживать одновременно версии 3 и 4 `,(0,d.jsx)(t.code,{children:`@astral/ui`}),`, экспортирована константа `,(0,d.jsx)(t.code,{children:`UI_KIT_MAJOR_VERSION`}),`.`]}),`
`,(0,d.jsx)(t.h3,{id:`использование`,children:`Использование`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { UI_KIT_MAJOR_VERSION } from '@astral/ui';

if (UI_KIT_MAJOR_VERSION === 4) {
  // Логика для версии 4
  return <NewComponent />;
} else {
  // Логика для версии 3
  return <OldComponent />;
}
`})}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`additional`}),`
`,(0,d.jsx)(t.h2,{id:`-дополнительно`,children:`🎉 Дополнительно`}),`
`,(0,d.jsx)(t.h3,{id:`баннер-с-новостью-о-редизайне`,children:`Баннер с новостью о редизайне`}),`
`,(0,d.jsxs)(t.p,{children:[`Добавьте в проект компонент `,(0,d.jsx)(t.code,{children:`RedesignBanner`}),` для уведомления пользователей о редизайне:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { RedesignBanner } from '@astral/ui';

const App = () => (
  <>
    <RedesignBanner />
    {/* остальной контент */}
  </>
);
`})}),`
`,(0,d.jsxs)(t.p,{children:[`⚠️ `,(0,d.jsx)(t.strong,{children:`Удалите этот баннер через месяц после релиза`})]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(`a`,{id:`FAQ`}),`
`,(0,d.jsx)(t.h2,{id:`-возникли-вопросы`,children:`❓ Возникли вопросы?`}),`
`,(0,d.jsx)(t.p,{children:`Если у вас возникли проблемы с миграцией или вопросы по использованию новых API:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Изучите примеры в Storybook`}),`
`,(0,d.jsx)(t.li,{children:`Напишите вопрос в чат Shared`}),`
`,(0,d.jsxs)(t.li,{children:[`Создайте задачу на доске `,(0,d.jsx)(t.a,{href:`https://track.astral.ru/soft/secure/RapidBoard.jspa?rapidView=142`,rel:`nofollow`,children:`Frontend.Shared`}),`.`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`Удачной миграции! 🚀`})})]})}function u(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{d=s(),i(),a(),f=t(),c(),p=({data:e,formatFn:t})=>{let[r,i]=(0,f.useState)(!1);return(0,d.jsx)(n,{onClick:async()=>{let n=t(e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),2e3)},children:r?`✓ Скопировано`:`Копировать промпт`})},m=({data:e,columns:t})=>{let n=e=>{if(!e)return`—`;let t=e.replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`).replace(/`(.+?)`/g,`<code>$1</code>`);return(0,d.jsx)(`span`,{dangerouslySetInnerHTML:{__html:t}})};return(0,d.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[(0,d.jsx)(`thead`,{children:(0,d.jsx)(`tr`,{children:t.map((e,t)=>(0,d.jsx)(`th`,{style:{textAlign:`left`,padding:`12px 8px`,borderBottom:`2px solid #ddd`,fontWeight:600,backgroundColor:`#f5f5f5`},children:e.header},t))})}),(0,d.jsx)(`tbody`,{children:e.map((r,i)=>{let a=i>0?e[i-1]:null,o=a&&r.component===a.component;return(0,d.jsx)(`tr`,{style:{backgroundColor:i%2==0?`#fff`:`#fafafa`},children:t.map((e,t)=>{let i=e.render?e.render(r):r[e.key];return(0,d.jsx)(`td`,{style:{padding:`10px 8px`,borderBottom:`1px solid #eee`,verticalAlign:`top`},children:n(t===0&&o?` `:i)},t)})},i)})})]})},h=[{old:`color="info"`,new:`color="primary"`},{old:`color="divider"`,new:`color="grey[300]"`},{old:`contrastThreshold"`,new:``},{old:`getContrastText`,new:`primary.contrastText`},{old:`augmentColor`,new:``},{old:`tonalOffset`,new:``},{old:`theme.palette.action`,new:``},{old:`theme.palette.action.hover`,new:`theme.palette.background.elementHover`}],g=e=>e.map(({old:e,new:t})=>t?`- Заменить "${e}" на "${t}"`:`- Удалено "${e}"`).join(`
`),_=e=>[`1. Заменить theme.shadows на theme.elevation`,`2. Изменения в palette:`,g(h),`3. Заменить все дробные spacing на microSpacing. Например spacing(0.5) -> microSpacing(1)`,`4. Изменить API создания темы: createTheme({ brand: brandPalette }) → createTheme({ palette: brandPalette })`,`5. Из создания темы (createTheme) удалить параметр nextFeatureFlags`,`Создание темы привести к виду:`,`import { type BrandPalette, createTheme } from '@astral/ui';

const brandPalette: BrandPalette = {
  // заменить на палитру необходимого вам бренда (палитры можно скопировать в MigrationGuide)
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

const theme = createTheme({ palette: brandPalette });`].join(`
`),v=[{old:`h7, h8, h9`,new:`pointer`},{old:`body2, ui`,new:`body1`},{old:`overline, small`,new:`caption`}],y=e=>[`1. Подключайте шрифты через CSS: https://frontend-static.astral.ru/fonts/inter/1.0.0/fonts.min.css`,`2. Настройте CSP для домена frontend-static.astral.ru`,`Для этого добавьте домен в nginx.conf -> Content-Security-Policy -> в поля img-src, style-src, font-src`,`3. Поменять подключение шрифта`,``,`<!-- Предварительная загрузка для оптимизации производительности -->
     <link
       rel="preload"
       href="https://frontend-static.astral.ru/fonts/inter/1.0.0/fonts.min.css"
       as="style"
     />

     <!-- Основное подключение стилей -->
     <link
       rel="stylesheet"
       href="https://frontend-static.astral.ru/fonts/inter/1.0.0/fonts.min.css"
     />`,``,`4. Заменить устаревшие варианты шрифтов:`,`- h7, h8, h9 → pointer`,`- body2, ui → body1`,`- overline, small → caption`].join(`
`),b=[{old:`ArrowROutlineLg`,new:`ArrowROutlineMd`},{old:`AddCertOutlineMd`,new:`CertAddOutlineMd`},{old:`AddOrgOutlineMd`,new:`CompanyAddOutlineMd`},{old:`AddSmOutlineMd`,new:`AddOutlineMd`},{old:`VisibilityOffOutlineMd`,new:`EyeCrossedOutlineMd`},{old:`ManOutlineSm`,new:`ProfileOutlineSm`},{old:`PitOutlineSm`,new:`PitFillSm`},{old:`ProblemOutlineSm`,new:`BlockOutlineSm`},{old:`CloseFillSm`,new:`CircleErrorFillSm`},{old:`TwitterFillMd`,new:`XFillMd`},{old:`ClassmatesFillMd`,new:`OkFillMd`}],x=e=>[`Заменить иконки:`,...e.map(({old:e,new:t})=>`- ${e} → ${t}`),``,`Заменить параметры в компоненте SvgIcon:`,`- htmlColor → color`,`- fontSize → size`,`- color="action" → color="primary"`,`- color="info" → color="primary"`].join(`
`),S={removed:[`DataGrid (старая версия)`,`DataGridInfinite (старая версия)`,`DataList`,`FeedbackPanel`,`DateRangePicker (старая версия)`,`LegacyGrid`,`MenuOrganization (старая версия)`,`SwipeableDrawer`,`FormDateRangePicker (старая версия)`,`Table, TableBody, TableCell, TableContainer, TableFooter, TableRow, TableSortLabel`,`CircularProgress`,`ActionCell`],featureFlags:[`Sidebar: isFixedWidth`,`Layout: isNewLayout, isScrollOnContent`,`PageContent: isSeparatorShown, isPaddingDisabled`,`PageLayout, PageLayoutContainer: isFullWidth`,`Tab: hasBottomDivider`]},C=e=>[`1. Удалить компоненты:`,...e.removed.map(e=>`- ${e}`),``,`2. Удалить фича-флаги (теперь работают по умолчанию):`,...e.featureFlags.map(e=>`- ${e}`),`3. Перенести компонент MenuOrganization в отдельный слот в DashboardLayout`,`4. Заменить компонент CircularProgress на Loader`,`5. Переименовать компонент Notification в LegacyNotification`,`6. Заменить импорт и экспорт компонента import { Notification } from '@astral/ui' на import { LegacyNotification } from '@astral/ui/components/LegacyNotification';`,`7. Переименовать компонент NotificationNext в Notification`,`8. Заменить импорт и экспорт компонента import { NotificationNext } from '@astral/ui/next' на import { Notification } from '@astral/ui/components/Notification';`,`9. Заменить импорт и экспорт компонента import { Banner } from '@astral/ui'; на import { Banner } from '@astral/ui/components/Banner';`,`10. Переименовать значения enum NotificationVariantTypes в PascalCase: info → Info, success → Success, warning → Warning, error → Error, progress → Progress`,`11. Убрать обертку FormControlLabel для компонента Switch. Передать label, labelPlacement напрямую в компонент Switch`,`12. PageHeader. Заменить передачу массива breadcrumbs на передачу компонента Breadcrumbs`].join(`
`),w=[{component:`FormCheckbox`,old:`FormCheckbox`,new:`FormCheckboxField`},{component:`FormCheckbox`,old:`FormCheckboxProps`,new:`FormCheckboxFieldProps`},{component:`FormCheckbox`,old:`FormCheckboxValue`,new:`FormCheckboxFieldValue`},{component:`DataGrid`,old:`NewDataGrid`,new:`DataGrid`},{component:`DataGrid`,old:`NewDataGridProps`,new:`DataGridProps`},{component:`DataGrid`,old:`NewDataGridColumns`,new:`DataGridColumns`},{component:`DataGrid`,old:`NewDataGridRow`,new:`DataGridRow`},{component:`DataGrid`,old:`NewDataGridRowOptions`,new:`DataGridRowOptions`},{component:`DataGrid`,old:`NewDataGridSort`,new:`DataGridSort`},{component:`DataGridInfinite`,old:`NewDataGridInfinite`,new:`DataGridInfinite`},{component:`DataGridInfinite`,old:`NewDataGridInfiniteProps`,new:`DataGridInfiniteProps`},{component:`DateRangePicker`,old:`NewDateRangePicker`,new:`DateRangePicker`},{component:`DateRangePicker`,old:`NewDateItemProps`,new:`DateItemProps`},{component:`DateRangePicker`,old:`NewDateRangePickerProps`,new:`DateRangePickerProps`},{component:`DateRangePicker`,old:`NewDateRangePickerValue`,new:`DateRangePickerValue`},{component:`DateRangePicker`,old:`FormNewDateRangePicker`,new:`FormDateRangePicker`},{component:`MenuOrganization`,old:`NewMenuOrganization`,new:`MenuOrganization`},{component:`MenuOrganization`,old:`NewMenuOrganizationProps`,new:`MenuOrganizationProps`}],T=e=>e.map(({component:e,old:t,new:n})=>`Для компонента ${e}: заменить "${t}" на "${n}"`).join(`
`),E=[{header:`Компонент`,key:`component`,render:e=>e.component?`**${e.component}**`:``},{header:`Старое название`,key:`old`,render:e=>e.old?`\`${e.old}\``:``},{header:`Новое название`,key:`new`,render:e=>`\`${e.new}\``}],D=[{component:`SvgIcon`,old:`htmlColor`,new:`color`},{component:`SvgIcon`,old:`fontSize`,new:`size`},{component:`SvgIcon`,old:`color="action"`,new:`color="primary"`},{component:`SvgIcon`,old:`color="info"`,new:`color="primary"`},{component:`ActionCell`,old:`tooltipPlacement`,new:`Положение тултипа инкапсулировано внутри ActionCell`},{component:`NoData`,old:`noDataIconWidth`,new:``},{component:`Button`,old:`loadingIndicator`,new:`Используется стандартный индикатор загрузки`},{component:`Button`,old:`loadingPosition`,new:`Используется стандартный индикатор загрузки`},{component:`Button`,old:`centerRipple`,new:``},{component:`Button`,old:`disableRipple`,new:``},{component:`Button`,old:`disableTouchRipple`,new:``},{component:`Button`,old:`disableFocusRipple`,new:``},{component:`Button`,old:`focusRipple`,new:``},{component:`Button`,old:`TouchRippleProps`,new:``},{component:`Button`,old:`touchRippleRef`,new:``},{component:`Button`,old:`size="small"`,new:`size="medium"`},{component:`Placeholder`,old:`imgWidth`,new:`Ширина высчитывается на основе prop size`},{component:`Dialog`,old:`maxWidth`,new:`size`},{component:`TextField`,old:`margin`,new:``},{component:`TextField`,old:`select`,new:``},{component:`TextField`,old:`SelectProps`,new:``},{component:`TextField`,old:`multiline`,new:`Используйте компонент TextArea`},{component:`Select`,old:`color`,new:``},{component:`Tag`,old:`classes`,new:``},{component:`Tag`,old:`children`,new:``},{component:`Tag`,old:`avatar`,new:`icon`},{component:`Tag`,old:`clickable`,new:``},{component:`Tag`,old:`skipFocusWhenDisabled`,new:``},{component:`Tag`,old:`deleteIcon`,new:``},{component:`Tag`,old:`rounded`,new:``},{component:`CheckableTag`,old:`variant="text"`,new:``},{component:`Checkbox / CheckboxField`,old:`icon`,new:``},{component:`Checkbox / CheckboxField`,old:`checkedIcon`,new:``},{component:`Checkbox / CheckboxField`,old:`indeterminateIcon`,new:``},{component:`Checkbox / CheckboxField`,old:`LinkComponent`,new:``},{component:`Checkbox / CheckboxField`,old:`onFocusVisible`,new:``},{component:`Checkbox / CheckboxField`,old:`inputProps`,new:``},{component:`Checkbox / CheckboxField`,old:`edge`,new:``},{component:`Checkbox / CheckboxField`,old:`disableRipple`,new:``},{component:`Checkbox / CheckboxField`,old:`disableTouchRipple`,new:``},{component:`Checkbox / CheckboxField`,old:`disableFocusRipple`,new:``},{component:`Checkbox / CheckboxField`,old:`centerRipple`,new:``},{component:`Checkbox / CheckboxField`,old:`TouchRippleProps`,new:``},{component:`Checkbox / CheckboxField`,old:`touchRippleRef`,new:``},{component:`Checkbox / CheckboxField`,old:`focusRipple`,new:``},{component:`Radio / RadioField`,old:`icon`,new:``},{component:`Radio / RadioField`,old:`checkedIcon`,new:``},{component:`Radio / RadioField`,old:`LinkComponent`,new:``},{component:`Radio / RadioField`,old:`onFocusVisible`,new:``},{component:`Radio / RadioField`,old:`inputProps`,new:``},{component:`Radio / RadioField`,old:`edge`,new:``},{component:`Radio / RadioField`,old:`disableRipple`,new:``},{component:`Radio / RadioField`,old:`disableTouchRipple`,new:``},{component:`Radio / RadioField`,old:`disableFocusRipple`,new:``},{component:`Radio / RadioField`,old:`centerRipple`,new:``},{component:`Radio / RadioField`,old:`TouchRippleProps`,new:``},{component:`Radio / RadioField`,old:`touchRippleRef`,new:``},{component:`Radio / RadioField`,old:`focusRipple`,new:``},{component:`Alert`,old:`classes`,new:``},{component:`Alert`,old:`role`,new:``},{component:`Alert`,old:`components`,new:``},{component:`Alert`,old:`componentsProps`,new:``},{component:`Alert`,old:`slotProps`,new:``},{component:`Alert`,old:`slots`,new:``},{component:`Alert`,old:`elevation`,new:``},{component:`Alert`,old:`square`,new:``},{component:`Pagination`,old:`classes`,new:``},{component:`Pagination`,old:`color`,new:``},{component:`Pagination`,old:`size`,new:``},{component:`Pagination`,old:`componentName`,new:``},{component:`Pagination`,old:`variant`,new:``},{component:`Pagination`,old:`getItemAriaLabel`,new:``},{component:`Pagination`,old:`renderItem`,new:``},{component:`Pagination`,old:`defaultPage`,new:``},{component:`AstralProductSwitcher`,old:`tenantId`,new:`filterBy + code`},{component:`CollapsableAlert`,old:`headerStartAdorment`,new:`icon`},{component:`Accordion`,old:`startAdorment`,new:`startAdornment`},{component:`Loader (был CircularProgress)`,old:`classes`,new:``},{component:`Loader (был CircularProgress)`,old:`variant`,new:``},{component:`Loader (был CircularProgress)`,old:`disableShrink`,new:``},{component:`Loader (был CircularProgress)`,old:`thickness`,new:``},{component:`Loader (был CircularProgress)`,old:`value`,new:``},{component:`LegacyNotification (был Notification)`,old:`filled`,new:``},{component:`ToggleButton`,old:`color="standart"`,new:`color="grey"`},{component:`ToggleButton`,old:`color="info"`,new:`color="primary"`},{component:`ToggleButton`,old:`color="secondary"`,new:`color="primary"`},{component:`ToggleButton`,old:`orientation`,new:``},{component:`AsyncAutocomplete`,old:`filterOptions"`,new:`Не использовать. Приводит к проблемам при поиске`},{component:`Tree / TreeList / MultipleTreeList / TreeLikeList`,old:`disableReason`,new:`disabledReason`},{component:`TreeItem`,old:`disableReason`,new:`disabledReason`},{component:`MenuOrganization`,old:`disableReason`,new:`disabledReason`},{component:`ActionGroup (SecondaryVisibleAction)`,old:`disableReason`,new:`disabledReason`},{component:`FormPageLayout (SecondaryAction)`,old:`disableReason`,new:`disabledReason`},{component:`PageHeader (SecondaryVisibleAction)`,old:`disableReason`,new:`disabledReason`}],O=e=>e.map(({component:e,old:t,new:n})=>n?`Для компонента ${e}: заменить "${t}" на "${n}"`:`Для компонента ${e}: удален prop "${t}"`).join(`
`),k=[{header:`Компонент`,key:`component`,render:e=>e.component?`**${e.component}**`:``},{header:`Удаленный prop`,key:`old`,render:e=>e.old?`\`${e.old}\``:``},{header:`Чем заменить`,key:`new`,render:e=>e.new?`\`${e.new}\``:``}],A=[{component:`SvgIcon`,old:`svgIconClasses.root`,new:`svgIconClassnames.root`},{component:`DashboardLayout`,old:`DASHBOARD_LAYOUT_CLASSNAME`,new:`dashboardLayoutClassnames.root`},{component:`DashboardLayout`,old:`DASHBOARD_LAYOUT_SIDEBAR_CLASSNAME`,new:`dashboardLayoutSidebarClassnames.root`},{component:`Button`,old:`LOADING_BUTTON_CLASSNAME`,new:`buttonClassnames.loading`},{component:`Loader (был CircularProgress)`,old:`circularProgressClassnames.root`,new:`loaderClassnames.root`},{component:`Loader (был CircularProgress)`,old:`MuiCircularProgress-root`,new:`loaderClassnames.root`},{component:`Tag`,old:`MuiChip-root`,new:`tagClassnames.root`},{component:`Tag`,old:`MuiChip-avatar`,new:`tagClassnames.icon`},{component:`Checkbox / CheckboxField`,old:`MuiCheckbox-root`,new:`checkboxClassnames.root`},{component:`Checkbox / CheckboxField`,old:`Mui-checked`,new:`checkboxClassnames.checked`},{component:`Checkbox / CheckboxField`,old:`Mui-indeterminate`,new:`checkboxClassnames.indeterminate`},{component:`Checkbox / CheckboxField`,old:`Mui-disabled`,new:`checkboxClassnames.disabled`},{component:`Radio / RadioField`,old:`MuiRadio-root`,new:`radioClassnames.root`},{component:`Radio / RadioField`,old:`Mui-checked`,new:`radioClassnames.checked`},{component:`Radio / RadioField`,old:`Mui-disabled`,new:`radioClassnames.disabled`},{component:`Alert`,old:`MuiAlert-root`,new:`alertClassnames.root`},{component:`Alert`,old:`MuiAlert-icon`,new:`alertClassnames.iconWrapper`},{component:`Alert`,old:`MuiAlertTitle-root`,new:`alertClassnames.title`},{component:`CollapsableAlert`,old:`MuiAlert-root`,new:`alertClassnames.root`},{component:`CollapsableAlert`,old:`MuiAlert-icon`,new:`alertClassnames.iconWrapper`},{component:`FileUploader`,old:`FILE_UPLOADER_DROPZONE_CLASSNAME`,new:`fileUploaderClassnames.dropzone`},{component:`PreviewFileUploader`,old:`PREVIEW_FILE_UPLOADER_DROPZONE_CLASSNAME`,new:`previewFileUploaderClassnames.dropzone`},{component:`PreviewFileUploader`,old:`DETAILS_CLASSNAME`,new:`previewFileUploaderClassnames.details`},{component:`Tree`,old:`TREE_ITEM_NOTE_CLASSNAME`,new:`treeClassnames.note`},{component:`LegacyNotification (был Notification)`,old:`NOTIFY_CLASSNAME`,new:`notifyClassnames.root`},{component:`Notification (был NotificationNext)`,old:`NOTIFY_CLASSNAME`,new:`notifyClassnames.root`},{component:`Notification (был NotificationNext)`,old:`NOTIFY_CONTAINER_CLASSNAME`,new:`notifyClassnames.container`},{component:`Notification (был NotificationNext)`,old:`NOTIFY_ANIMATION_IN_CLASSNAME`,new:`notifyClassnames.animationIn`},{component:`Notification (был NotificationNext)`,old:`NOTIFY_ANIMATION_OUT_CLASSNAME`,new:`notifyClassnames.animationOut`},{component:`Notification (был NotificationNext)`,old:`NOTIFY_CLOSE_BUTTON_ANIMATION_OUT_CLASSNAME`,new:`notifyClassnames.closeButtonAnimationOut`},{component:`Banner`,old:`BANNER_CLASSNAME`,new:`bannerClassnames.root`},{component:`PinnableAside`,old:`PINNABLE_ASIDE_CONTENT_CLASSNAME`,new:`pinnableAsideClassnames.content`},{component:`DataGrid`,old:`HIDDEN_CHILDREN_ROW_CLASSNAME`,new:`dataGridClassnames.hidden`},{component:`InfiniteDataList`,old:`ITEM_CLASSNAME`,new:`infiniteDataListClassnames.item`},{component:`Description`,old:`DESCRIPTION_ROOT_CLASSNAME`,new:`descriptionClassnames.root`},{component:`PageLayout`,old:`PAGE_LAYOUT_CONTAINER_CLASSNAME`,new:`pageLayoutClassnames.root`}],j=e=>e.map(({component:e,old:t,new:n})=>`Для компонента ${e}: заменить "${t}" на "${n}"`).join(`
`),M=[{header:`Компонент`,key:`component`,render:e=>e.component?`**${e.component}**`:``},{header:`Старый className`,key:`old`,render:e=>e.old?`\`${e.old}\``:``},{header:`Новый className`,key:`new`,render:e=>`\`${e.new}\``}],N={old:`@astral/validations-react-hook-form-resolver`,new:`@astral/ui`},P=e=>[`Функция resolver перенесена из @astral/validations-react-hook-form-resolver в @astral/ui`,`Теперь можно передавать схему валидации напрямую в useForm: useForm({ validationSchema })`,`- Установите react-hook-form@^7.66.1`,`- Удалите пакет @astral/validations-react-hook-form-resolver`,`- Заменить обертку useForm на простой реэкспорт из @astral/ui:
type UseFormProps<
  TFieldValues extends FormFieldValues = FormFieldValues,
  TContext = any,
> = Omit<UseAstralFormProps<TFieldValues, TContext>, 'validationSchema'> & {
  validationSchema?: v.ObjectGuard<TFieldValues>;
};

export const useForm = <
  TFieldValues extends FormFieldValues = FormFieldValues,
  TContext = any,
>({
  validationSchema,
  defaultValues,
  ...params
}: UseFormProps<TFieldValues, TContext> = {}): UseFormReturn<
  TFieldValues,
  TContext
> =>
  useAstralForm<TFieldValues, TContext>({
    ...params,
    defaultValues,
    validationSchema,
  });`,`- Передавайте validationSchema напрямую вместо resolver(validationSchema):
    // ❌ Старый способ
    import { resolver } from '@astral/validations-react-hook-form-resolver';
    import { useForm } from 'react-hook-form';

    const form = useForm({
      resolver: resolver(validationSchema)
    });

    // ✅ Новый способ: передаем схему напрямую
    import { useForm } from '@astral/ui';

    const form = useForm({
      validationSchema
    });`].join(`
`)})))()}F();export{p as CopyButton,m as DataTable,M as classnamesColumns,A as classnamesData,S as componentsData,u as default,v as fontsData,j as formatClassnamesText,C as formatComponentsText,y as formatFontsText,P as formatHookFormText,x as formatIconsText,g as formatPaletteMigrationText,O as formatPropsText,T as formatRenamingText,_ as formatThemeText,N as hookFormData,b as iconsData,k as propsColumns,D as propsData,E as renamingColumns,w as renamingData,h as themePaletteData};