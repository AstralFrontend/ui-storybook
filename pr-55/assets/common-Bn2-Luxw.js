import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ji as t,ya as n,yn as r}from"./preview-DptgQDDw.js";import{t as i}from"./Switch-NuWf6lyY.js";import{n as a,t as o}from"./FormControlLabel-Ba4hCKUx.js";import{t as s}from"./Switch-CeTEWzIo.js";import{a as c,i as l,n as u,t as d}from"./StoryControlWrapper-opPj3gpk.js";var f,p,m,h;function g(){return(g=e((()=>{f=[{id:`1`,label:`Счёт-фактура`},{id:`2`,label:`Универсальный передаточный документ`},{id:`3`,label:`Акт выполненных работ`},{id:`4`,label:`Товарная накладная`},{id:`5`,label:`Счёт на оплату`},{id:`6`,label:`Договор поставки`},{id:`7`,label:`Акт сверки`},{id:`8`,label:`Корректировочный счёт-фактура`}],p=f.map(({id:e,label:t})=>({id:e,name:t})),m=[{id:`1`,label:`ООО «Альфа»`},{id:`2`,label:`АО «Вега»`},{id:`3`,label:`ООО «Сигма»`},{id:`4`,label:`ИП Петров С. И.`},{id:`5`,label:`ООО «Северная торговая компания»`},{id:`6`,label:`ООО «Межрегиональный центр электронного документооборота»`}],h=[{code:`admin`,name:`Администратор`,description:`Пользователь имеет полный доступ ко всем разделам личного кабинета`},{code:`employee-with-access`,name:`Сотрудник с правом доступа`,description:`Пользователь имеет полный доступ к настройке связи и доступу к подписанию`},{code:`employee-without-access`,name:`Сотрудник без права доступа`,description:`Пользователь имеет полный доступ к настройке связи и доступу к работе с документами без возможности подписания`}]})))()}var _,v,y,b;function x(){return(x=e((()=>{d(),l(),r(),_=t.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 360px;
`,v=t.div`
  display: flex;
  flex-direction: column;

  width: 360px;
`,y=t(u)`
  grid-template-columns: min(100%, 360px);
  justify-content: center;

  .${c.controlsWrapper} {
    margin: 0;
    padding: ${({theme:e})=>e.spacing(3,4)};
  }
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(2)};
`})))()}var S,C;function w(){return(w=e((()=>{o(),s(),x(),S=n(),C=({isMultiple:e,isCollapsibleGroups:t,onMultipleChange:n,onCollapsibleGroupsChange:r})=>(0,S.jsxs)(b,{children:[(0,S.jsx)(a,{control:(0,S.jsx)(i,{checked:e,onChange:(e,t)=>n(t)}),label:`Множественный выбор`}),(0,S.jsx)(a,{control:(0,S.jsx)(i,{checked:t,disabled:!e,onChange:(e,t)=>r(t)}),label:`Сворачивание групп`})]});try{C.displayName=`GroupedSelectionControls`,C.__docgenInfo={description:``,displayName:`GroupedSelectionControls`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/Select/stories/common/GroupedSelectionControls.tsx`,methods:[],props:{isMultiple:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Select/stories/common/GroupedSelectionControls.tsx`,name:`TypeLiteral`}],description:``,name:`isMultiple`,required:!0,tags:{},type:{name:`boolean`}},isCollapsibleGroups:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Select/stories/common/GroupedSelectionControls.tsx`,name:`TypeLiteral`}],description:``,name:`isCollapsibleGroups`,required:!0,tags:{},type:{name:`boolean`}},onMultipleChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Select/stories/common/GroupedSelectionControls.tsx`,name:`TypeLiteral`}],description:``,name:`onMultipleChange`,required:!0,tags:{},type:{name:`(checked: boolean) => void`}},onCollapsibleGroupsChange:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/Select/stories/common/GroupedSelectionControls.tsx`,name:`TypeLiteral`}],description:``,name:`onCollapsibleGroupsChange`,required:!0,tags:{},type:{name:`(checked: boolean) => void`}}},tags:{}}}catch{}})))()}function T(){return(T=e((()=>{g(),x(),w()})))()}export{v as a,m as c,h as d,g as f,y as i,p as l,C as n,_ as o,w as r,x as s,T as t,f as u};