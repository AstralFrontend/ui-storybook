import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{dt as t,ft as n,ji as r,ya as i,yn as a}from"./preview-DptgQDDw.js";import{t as o}from"./Link-COet7F7r.js";import{t as s}from"./Link-DU4-TRrJ.js";import{i as c,r as l,t as u}from"./NumberedListItem-BAPKhsnU.js";import{t as d}from"./NumberedListItem-BOq6M5EL.js";import{t as f}from"./NumberField-DG8n3v3K.js";import{t as p}from"./NumberField-BabPRwXP.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),d(),p(),a(),t(),c(),m=i(),h={title:`Lists/NumberedList`,component:l,parameters:{docs:{description:{component:`NumberedList - нумерованный список

[NumberedListItem](/story/lists-numberedList-numberedListItem--docs) - обертка для элементов списка

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=67-14431)`}}}},g={args:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{children:`Текст 1`}),(0,m.jsx)(u,{children:`Текст 2`})]})},parameters:{docs:{disable:!0}}},_=r.div`
  width: min(400px, 100%);
  padding: ${({theme:e})=>e.spacing(4)};
`,v=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};
`,y=()=>(0,m.jsx)(_,{children:(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{children:`Отправьте запрос на получение пакета(ов) ЭП`}),(0,m.jsx)(u,{children:(0,m.jsxs)(v,{children:[`Укажите, сколько доверенностей хотите добавить, и\xA0отправьте заявку`,(0,m.jsx)(f,{placeholder:`Количество доверенностей`,fullWidth:!0})]})}),(0,m.jsxs)(u,{children:[(0,m.jsx)(n,{children:`Обратитесь в обслуживающую организацию`}),(0,m.jsxs)(n,{color:`textSecondary`,children:[`Если у вас нет договора с обслуживающей организацией, подобрать ее можно `,(0,m.jsx)(o,{href:`#1`,children:`здесь`}),`.`]})]}),(0,m.jsx)(u,{children:`Дождитесь одобрения заявки и\xA0приступайте к\xA0работе`})]})}),b=[`Interaction`,`BasicUsage`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <NumberedListItem>Текст 1</NumberedListItem>
        <NumberedListItem>Текст 2</NumberedListItem>
      </>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Container>
      <NumberedList>
        <NumberedListItem>
          Отправьте запрос на получение пакета(ов) ЭП
        </NumberedListItem>
        <NumberedListItem>
          <ContentItemWrapper>
            Укажите, сколько доверенностей хотите добавить, и\xA0отправьте заявку
            <NumberField placeholder="Количество доверенностей" fullWidth />
          </ContentItemWrapper>
        </NumberedListItem>
        <NumberedListItem>
          <Typography>Обратитесь в обслуживающую организацию</Typography>
          <Typography color="textSecondary">
            Если у вас нет договора с обслуживающей организацией, подобрать ее
            можно <Link href="#1">здесь</Link>.
          </Typography>
        </NumberedListItem>
        <NumberedListItem>
          Дождитесь одобрения заявки и\xA0приступайте к\xA0работе
        </NumberedListItem>
      </NumberedList>
    </Container>;
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as BasicUsage,g as Interaction,b as __namedExportsOrder,h as default};