import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{U as t,W as n,dt as r,ft as i,ya as a,za as o}from"./preview-Cpvm_2Dh.js";import{t as s}from"./DescriptionList-CkLenlFW.js";import{t as ee}from"./DescriptionList-DURgmX-D.js";import{n as c,t as l}from"./EditableText-BqlRJVBv.js";import{n as u,t as d}from"./email-5PpKcOpy.js";import{n as f,t as te}from"./string-hxNUuZd8.js";import{t as ne}from"./FormEmailField-DJuYCIlQ.js";import{n as re,t as ie}from"./FormMobilePhoneField-DuI5OZeK.js";import{t as ae}from"./FormMobilePhoneField-BDOCz2pF.js";import{a as p,l as m}from"./NotificationStackContainer-DfzoysbT.js";import{t as h}from"./Notification-BkL2xam7.js";import{n as g,t as _}from"./common-DGEiWeSF.js";var v,y,b;function x(){return(x=e((()=>{v=o(),ee(),h(),c(),_(),y=a(),b=()=>{let[e,t]=(0,v.useState)(`ООО "Агроальянс"`),[n,r]=(0,v.useState)(!1),i=e=>{r(!0),new Promise(t=>setTimeout(()=>{t(e)},1e3)).then(e=>{t(e),p.success(`Данные успешно обновлены`)}).finally(()=>{r(!1)})};return(0,y.jsxs)(g,{children:[(0,y.jsx)(s,{direction:`row`,items:[{name:`Название`,value:e,options:{renderValue:e=>(0,y.jsx)(l,{isLoading:n,onSubmit:i,children:e})}},{name:`ИНН`,value:`295995231495`,options:{canCopy:!0}}]}),(0,y.jsx)(m,{})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  /* cSpell:ignore Агроальянс */
  const [organizationName, setOrganizationName] = useState('ООО "Агроальянс"');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit: EditableTextProps['onSubmit'] = value => {
    setIsLoading(true);
    new Promise(resolve => setTimeout(() => {
      resolve(value);
    }, 1000)).then(response => {
      setOrganizationName(response as string);
      notify.success('Данные успешно обновлены');
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const items: DescriptionListItem[] = [{
    name: 'Название',
    value: organizationName,
    options: {
      renderValue: value => <EditableText isLoading={isLoading} onSubmit={handleSubmit}>
            {value}
          </EditableText>
    }
  }, {
    name: 'ИНН',
    value: '295995231495',
    options: {
      canCopy: true
    }
  }];
  return <Wrapper>
      <DescriptionList direction="row" items={items} />

      <NotificationContainer />
    </Wrapper>;
}`,...b.parameters?.docs?.source}}}})))()}var S,C;function w(){return(w=e((()=>{S=o(),h(),C=({initialValue:e,containerId:t})=>{let[n,r]=(0,S.useState)(e),[i,a]=(0,S.useState)(!1);return{value:n,isLoading:i,onSubmit:e=>{a(!0),new Promise(t=>setTimeout(()=>{t(e)},1e3)).then(e=>{r(e),p.success(`Данные успешно обновлены`,{containerId:t})}).finally(()=>{a(!1)})}}}})))()}var T,E;function D(){return(D=e((()=>{h(),r(),c(),w(),_(),T=a(),E=()=>{let{value:e,isLoading:t,onSubmit:n}=C({initialValue:`Швецова Мария Дмитриевна`,containerId:`fontSize`});return(0,T.jsxs)(g,{children:[(0,T.jsx)(i,{children:(0,T.jsx)(l,{isLoading:t,onSubmit:n,children:e})}),(0,T.jsx)(i,{variant:`h5`,children:(0,T.jsx)(l,{isLoading:t,onSubmit:n,children:e})}),(0,T.jsx)(i,{variant:`h4`,children:(0,T.jsx)(l,{isLoading:t,onSubmit:n,children:e})}),(0,T.jsx)(i,{variant:`h3`,children:(0,T.jsx)(l,{isLoading:t,onSubmit:n,children:e})}),(0,T.jsx)(i,{variant:`h2`,children:(0,T.jsx)(l,{isLoading:t,onSubmit:n,children:e})}),(0,T.jsx)(m,{containerId:`fontSize`})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const {
    value,
    isLoading,
    onSubmit
  } = useFakeLogic({
    initialValue: 'Швецова Мария Дмитриевна',
    containerId: 'fontSize'
  });
  return <Wrapper>
      <Typography>
        <EditableText isLoading={isLoading} onSubmit={onSubmit}>
          {value}
        </EditableText>
      </Typography>

      <Typography variant="h5">
        <EditableText isLoading={isLoading} onSubmit={onSubmit}>
          {value}
        </EditableText>
      </Typography>

      <Typography variant="h4">
        <EditableText isLoading={isLoading} onSubmit={onSubmit}>
          {value}
        </EditableText>
      </Typography>

      <Typography variant="h3">
        <EditableText isLoading={isLoading} onSubmit={onSubmit}>
          {value}
        </EditableText>
      </Typography>

      <Typography variant="h2">
        <EditableText isLoading={isLoading} onSubmit={onSubmit}>
          {value}
        </EditableText>
      </Typography>

      <NotificationContainer containerId="fontSize" />
    </Wrapper>;
}`,...E.parameters?.docs?.source},description:{story:`Компонент наследует размеры шрифта от родителя`,...E.parameters?.docs?.description}}};try{E.displayName=`BasicUsageWithFontSize`,E.__docgenInfo={description:`Компонент наследует размеры шрифта от родителя`,displayName:`BasicUsageWithFontSize`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/BasicUsageWithFontSize.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var O,k,A;function j(){return(j=e((()=>{O=o(),h(),c(),_(),k=a(),A=()=>{let[e,t]=(0,O.useState)(`ООО "Агроальянс"`),[n,r]=(0,O.useState)(!1);return(0,k.jsxs)(g,{children:[(0,k.jsx)(l,{isLoading:n,onSubmit:()=>{r(!0),new Promise((e,t)=>setTimeout(()=>{t()},1e3)).then(e=>{t(e),p.success(`Данные успешно обновлены`,{containerId:`withError`})}).catch(()=>{p.error(`Ошибка сохранения данных`,{containerId:`withError`})}).finally(()=>{r(!1)})},children:e}),(0,k.jsx)(m,{containerId:`withError`})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  /* cSpell:ignore Агроальянс */
  const [organizationName, setOrganizationName] = useState('ООО "Агроальянс"');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit: EditableTextProps['onSubmit'] = () => {
    setIsLoading(true);
    new Promise((_, reject) => setTimeout(() => {
      reject();
    }, 1000)).then(response => {
      setOrganizationName(response as string);
      notify.success('Данные успешно обновлены', {
        containerId: 'withError'
      });
    }).catch(() => {
      notify.error('Ошибка сохранения данных', {
        containerId: 'withError'
      });
    }).finally(() => {
      setIsLoading(false);
    });
  };
  return <Wrapper>
      <EditableText isLoading={isLoading} onSubmit={handleSubmit}>
        {organizationName}
      </EditableText>

      <NotificationContainer containerId="withError" />
    </Wrapper>;
}`,...A.parameters?.docs?.source}}}})))()}var M,N;function P(){return(P=e((()=>{n(),h(),ie(),c(),w(),_(),M=a(),N=()=>{let{value:e,isLoading:n,onSubmit:r}=C({initialValue:`79990080099`,containerId:`componentField`});return(0,M.jsxs)(g,{children:[(0,M.jsx)(l,{isLoading:n,initialValue:e,componentField:e=>(0,M.jsx)(ae,{...e}),onSubmit:r,children:t(e)}),(0,M.jsx)(m,{containerId:`componentField`})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const {
    value,
    isLoading,
    onSubmit
  } = useFakeLogic({
    initialValue: '79990080099',
    containerId: 'componentField'
  });
  return <Wrapper>
      <EditableText isLoading={isLoading} initialValue={value} componentField={fieldProps => <FormMobilePhoneField {...fieldProps} />} onSubmit={onSubmit}>
        {formatPhoneToView(value)}
      </EditableText>

      <NotificationContainer containerId="componentField" />
    </Wrapper>;
}`,...N.parameters?.docs?.source},description:{story:"`ComponentField` позволяет указать компонент для редактирования значения.\nПо умолчанию - TextField",...N.parameters?.docs?.description}}};try{N.displayName=`ComponentField`,N.__docgenInfo={description:"`ComponentField` позволяет указать компонент для редактирования значения.\nПо умолчанию - TextField",displayName:`ComponentField`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/ComponentField.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I;function L(){return(L=e((()=>{h(),c(),w(),_(),F=a(),I=()=>{let{value:e,isLoading:t,onSubmit:n}=C({initialValue:`Швецова М. Д.`,containerId:`iconPosition`});return(0,F.jsxs)(g,{children:[(0,F.jsx)(l,{isLoading:t,onSubmit:n,children:e}),(0,F.jsx)(l,{iconPosition:`left`,isLoading:t,onSubmit:n,children:e}),(0,F.jsx)(m,{containerId:`iconPosition`})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const {
    value,
    isLoading,
    onSubmit
  } = useFakeLogic({
    initialValue: 'Швецова М. Д.',
    containerId: 'iconPosition'
  });
  return <Wrapper>
      <EditableText isLoading={isLoading} onSubmit={onSubmit}>
        {value}
      </EditableText>

      <EditableText iconPosition="left" isLoading={isLoading} onSubmit={onSubmit}>
        {value}
      </EditableText>

      <NotificationContainer containerId="iconPosition" />
    </Wrapper>;
}`,...I.parameters?.docs?.source},description:{story:"`iconPosition` определяет расположение иконки(справа/слева от текста). По умолчанию справа",...I.parameters?.docs?.description}}};try{I.displayName=`IconPosition`,I.__docgenInfo={description:"`iconPosition` определяет расположение иконки(справа/слева от текста). По умолчанию справа",displayName:`IconPosition`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/IconPosition.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var R,z;function B(){return(B=e((()=>{h(),c(),w(),_(),R=a(),z=()=>{let{value:e,isLoading:t,onSubmit:n}=C({initialValue:`Швецова Мария Дмитриевна`,containerId:`initialValue`});return(0,R.jsxs)(g,{children:[(0,R.jsx)(l,{initialValue:e,isLoading:t,onSubmit:n,children:(e=>{let[t,n,r]=e.split(` `),i=t;return n&&(i+=` ${n[0]}.`),r&&(i+=` ${r[0]}.`),i})(e)}),(0,R.jsx)(m,{containerId:`initialValue`})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const {
    value,
    isLoading,
    onSubmit
  } = useFakeLogic({
    initialValue: 'Швецова Мария Дмитриевна',
    containerId: 'initialValue'
  });
  const formatShortName = (fullName: string) => {
    const [surname, firstname, patronymic] = fullName.split(' ');
    let shortName = surname;
    if (firstname) {
      shortName += \` \${firstname[0]}.\`;
    }
    if (patronymic) {
      shortName += \` \${patronymic[0]}.\`;
    }
    return shortName;
  };
  return <Wrapper>
      <EditableText initialValue={value} isLoading={isLoading} onSubmit={onSubmit}>
        {formatShortName(value)}
      </EditableText>

      <NotificationContainer containerId="initialValue" />
    </Wrapper>;
}`,...z.parameters?.docs?.source},description:{story:"`initialValue` позволяет указать редактируемое значение.\nИспользуется если редактируемое значение отличается от отображения.\nЕсли initialValue не указан, а в `children` строка или число, то оно будет взято за редактируемое значение.",...z.parameters?.docs?.description}}};try{z.displayName=`InitialValue`,z.__docgenInfo={description:"`initialValue` позволяет указать редактируемое значение.\nИспользуется если редактируемое значение отличается от отображения.\nЕсли initialValue не указан, а в `children` строка или число, то оно будет взято за редактируемое значение.",displayName:`InitialValue`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/InitialValue.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var V,H;function U(){return(U=e((()=>{h(),c(),_(),V=a(),H=()=>(0,V.jsxs)(g,{children:[(0,V.jsx)(l,{isLoading:!0,onSubmit:()=>void 0,children:`Швецова М. Д.`}),(0,V.jsx)(m,{containerId:`isLoading`})]}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <EditableText isLoading={true} onSubmit={() => undefined}>
        Швецова М. Д.
      </EditableText>

      <NotificationContainer containerId="isLoading" />
    </Wrapper>;
}`,...H.parameters?.docs?.source},description:{story:"Если `isLoading` true, то будет отображен лоадер, вместо иконки редактирования.\nРедактирование будет не доступно.",...H.parameters?.docs?.description}}};try{H.displayName=`IsLoading`,H.__docgenInfo={description:"Если `isLoading` true, то будет отображен лоадер, вместо иконки редактирования.\nРедактирование будет не доступно.",displayName:`IsLoading`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/IsLoading.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var W,G;function K(){return(K=e((()=>{c(),_(),W=a(),G=()=>(0,W.jsxs)(g,{children:[(0,W.jsx)(l,{showEditIcon:`always`,onSubmit:()=>{},children:`Швецова М.Д.`}),(0,W.jsx)(l,{showEditIcon:`onHover`,onSubmit:()=>{},children:`Швецова М.Д.`}),(0,W.jsx)(l,{showEditIcon:`none`,onSubmit:()=>{},children:`Швецова М.Д.`})]}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <EditableText showEditIcon="always" onSubmit={() => {}}>
        Швецова М.Д.
      </EditableText>
      <EditableText showEditIcon="onHover" onSubmit={() => {}}>
        Швецова М.Д.
      </EditableText>
      <EditableText showEditIcon="none" onSubmit={() => {}}>
        Швецова М.Д.
      </EditableText>
    </Wrapper>;
}`,...G.parameters?.docs?.source},description:{story:"Параметр `showEditIcon` задаёт отображение иконки редактирования.",...G.parameters?.docs?.description}}};try{G.displayName=`IsShowIcon`,G.__docgenInfo={description:"Параметр `showEditIcon` задаёт отображение иконки редактирования.",displayName:`IsShowIcon`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/IsShowIcon.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var q,J;function Y(){return(Y=e((()=>{u(),te(),h(),re(),c(),w(),_(),q=a(),J=()=>{let{value:e,isLoading:t,onSubmit:n}=C({initialValue:`astral@mail.ru`,containerId:`validate`});return(0,q.jsxs)(g,{children:[(0,q.jsx)(l,{isLoading:t,validate:f(d()),componentField:e=>(0,q.jsx)(ne,{...e}),onSubmit:n,children:e}),(0,q.jsx)(m,{containerId:`validate`})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const {
    value,
    isLoading,
    onSubmit
  } = useFakeLogic({
    initialValue: 'astral@mail.ru',
    containerId: 'validate'
  });
  return <Wrapper>
      <EditableText isLoading={isLoading} validate={string(email())} componentField={fieldProps => <FormEmailField {...fieldProps} />} onSubmit={onSubmit}>
        {value}
      </EditableText>

      <NotificationContainer containerId="validate" />
    </Wrapper>;
}`,...J.parameters?.docs?.source},description:{story:"`validate` позволяет задать функцию валидации для поля",...J.parameters?.docs?.description}}};try{J.displayName=`Validate`,J.__docgenInfo={description:"`validate` позволяет задать функцию валидации для поля",displayName:`Validate`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/EditableText/stories/Validate.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var X,Z,Q;function $(){return($=e((()=>{c(),x(),D(),j(),P(),L(),B(),U(),K(),Y(),X={title:`React-Hook-Form/EditableText`,component:l,parameters:{layout:`fullscreen`,docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=2640-651286&t=5qoNavb0hfcmPi4r-4)
Компонент предназначен для точечного редактирования данных`}}}},Z={args:{children:`Швецова М. Д.`,initialValue:`Швецова Мария Дмитриевна`},parameters:{docs:{disable:!0}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Швецова М. Д.',
    initialValue: 'Швецова Мария Дмитриевна'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Interaction`,`BasicUsage`,`BasicUsageWithFontSize`,`BasicUsageWithSaveError`,`IconPosition`,`InitialValue`,`ComponentField`,`IsLoading`,`IsShowIcon`,`Validate`]})))()}$();export{b as BasicUsage,E as BasicUsageWithFontSize,A as BasicUsageWithSaveError,N as ComponentField,I as IconPosition,z as InitialValue,Z as Interaction,H as IsLoading,G as IsShowIcon,J as Validate,Q as __namedExportsOrder,X as default};