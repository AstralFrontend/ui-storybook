import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{cn as t,dt as n,ft as r,ji as i,ln as a,ya as o,yn as s,za as c}from"./preview-DptgQDDw.js";import{t as ee}from"./Collapse-B3Roz7qb.js";import{t as te}from"./Collapse-CzjwQfHv.js";import{d as ne,f as re,n as ie,o as l,s as ae,t as oe}from"./DialogContent-DGRGSIc3.js";import{r as u,t as d}from"./BulletListItem-Cc-mu2d8.js";import{t as f}from"./BulletList-DWxOd12B.js";import{t as p}from"./BulletListItem-BfB5oRfV.js";import{t as se}from"./Paper-BdQ9ZRt-.js";import{t as ce}from"./Paper-CALAB8vZ.js";import{t as m}from"./List-BDqUa4I0.js";import{t as h}from"./List-DRaaPipR.js";import{n as g,t as _}from"./RadioGroup-Bt72pFSr.js";import{i as v,n as le,r as y,t as ue}from"./FormRadioGroup-B_GGzFG5.js";import{l as de,n as fe,t as pe}from"./useForm-DDnjXHUg.js";import{t as me}from"./Form-CbtQhLjD.js";import{n as b,t as x}from"./FormSubmitButton-C9Z394Z8.js";import{n as he,t as ge}from"./object-2y2TfwoJ.js";import{n as _e,t as S}from"./string-BHlgssBa.js";import{t as ve}from"./FormRadioGroup-cMYNxXPW.js";var C;function w(){return(w=e((()=>{s(),C=i.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: ${({theme:e})=>e.spacing(4)};
`})))()}function T(){return(T=e((()=>{w()})))()}var E,D,O,k;function A(){return(A=e((()=>{E=c(),f(),p(),t(),te(),l(),oe(),ne(),ce(),_(),s(),n(),v(),T(),D=o(),O=i(u)`
  width: min(580px, 100%);
`,k=()=>{let e=({title:e,price:t})=>(0,D.jsxs)(C,{children:[(0,D.jsx)(r,{variant:`h5`,children:e}),(0,D.jsxs)(r,{variant:`h5`,children:[t,` руб.`]})]}),[t,n]=(0,E.useState)(`one`),i=e=>{n(e.target.value)},[o,s]=(0,E.useState)(!1),c=()=>{s(e=>!e)};return(0,D.jsxs)(se,{children:[(0,D.jsx)(re,{children:`Выберите тариф`}),(0,D.jsx)(ie,{children:(0,D.jsxs)(g,{name:`test`,value:t,onChange:i,children:[(0,D.jsx)(y,{header:(0,D.jsx)(e,{title:`Тариф "Базовый"`,price:`2 500`}),value:`one`,children:(0,D.jsxs)(O,{children:[(0,D.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,D.jsx)(d,{children:`В пакете до 2 доверенностей`}),(0,D.jsx)(d,{children:`На 12 месяцев`})]})}),(0,D.jsx)(y,{header:(0,D.jsx)(e,{title:`Тариф "Расширенный"`,price:`5 000`}),value:`two`,children:(0,D.jsxs)(O,{children:[(0,D.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,D.jsx)(d,{children:`В пакете до 5 доверенностей`}),(0,D.jsx)(d,{children:`На 12 месяцев`}),(0,D.jsxs)(ee,{in:o,children:[(0,D.jsx)(d,{children:`Расширенные настройки и отчёты`}),(0,D.jsx)(d,{children:`Приоритетное рассмотрение заявок`})]}),(0,D.jsx)(a,{variant:`link`,onClick:c,children:o?`Скрыть`:`Показать все`})]})}),(0,D.jsx)(y,{disabled:!0,header:(0,D.jsx)(e,{title:`Тариф "Премиальный"`,price:`10 000`}),value:`three`,children:(0,D.jsxs)(O,{children:[(0,D.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,D.jsx)(d,{children:`В пакете от 5 доверенностей`}),(0,D.jsx)(d,{children:`На 12 месяцев`})]})})]})}),(0,D.jsxs)(ae,{children:[(0,D.jsx)(a,{variant:`text`,children:`Отмена`}),(0,D.jsx)(a,{onClick:c,children:`Продолжить`})]})]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const Header = ({
    title,
    price
  }: {
    title: string;
    price: string;
  }) => <HeaderWrapper>
      <Typography variant="h5">{title}</Typography>

      <Typography variant="h5">{price} руб.</Typography>
    </HeaderWrapper>;
  const [value, setValue] = useState('one');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prevVisible => !prevVisible);
  };
  return <Paper>
      <DialogTitle>Выберите тариф</DialogTitle>
      <DialogContent>
        <RadioGroup name="test" value={value} onChange={handleChange}>
          <RadioCard header={<Header title='Тариф "Базовый"' price="2 500" />} value="one">
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете до 2 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
            </StyledBulletList>
          </RadioCard>
          <RadioCard header={<Header title='Тариф "Расширенный"' price="5 000" />} value="two">
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете до 5 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
              <Collapse in={visible}>
                <BulletListItem>Расширенные настройки и отчёты</BulletListItem>
                <BulletListItem>
                  Приоритетное рассмотрение заявок
                </BulletListItem>
              </Collapse>
              <Button variant="link" onClick={handleClick}>
                {visible ? 'Скрыть' : 'Показать все'}
              </Button>
            </StyledBulletList>
          </RadioCard>
          <RadioCard disabled header={<Header title='Тариф "Премиальный"' price="10 000" />} value="three">
            <StyledBulletList>
              <BulletListItem>
                Создание доверенностей от одной организации
              </BulletListItem>
              <BulletListItem>В пакете от 5 доверенностей</BulletListItem>
              <BulletListItem>На 12 месяцев</BulletListItem>
            </StyledBulletList>
          </RadioCard>
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button variant="text">Отмена</Button>
        <Button onClick={handleClick}>Продолжить</Button>
      </DialogActions>
    </Paper>;
}`,...k.parameters?.docs?.source}}}})))()}var j,M,N,P;function F(){return(F=e((()=>{j=c(),f(),p(),_(),n(),v(),T(),M=o(),N=({title:e,price:t})=>(0,M.jsxs)(C,{children:[(0,M.jsx)(r,{variant:`h5`,children:e}),(0,M.jsxs)(r,{variant:`h5`,children:[t,` руб.`]})]}),P=()=>{let[e,t]=(0,j.useState)(`one`);return(0,M.jsx)(g,{name:`test`,value:e,onChange:e=>{t(e.target.value)},children:(0,M.jsx)(y,{disabled:!0,header:(0,M.jsx)(N,{title:`Тариф "Базовый"`,price:`10 000`}),value:`three`,children:(0,M.jsxs)(u,{children:[(0,M.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,M.jsx)(d,{children:`В пакете от 5 доверенностей`}),(0,M.jsx)(d,{children:`На 12 месяцев`})]})})})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('one');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <RadioGroup name="test" value={value} onChange={handleChange}>
      <RadioCard disabled header={<Header title='Тариф "Базовый"' price="10 000" />} value="three">
        <BulletList>
          <BulletListItem>
            Создание доверенностей от одной организации
          </BulletListItem>
          <BulletListItem>В пакете от 5 доверенностей</BulletListItem>
          <BulletListItem>На 12 месяцев</BulletListItem>
        </BulletList>
      </RadioCard>
    </RadioGroup>;
}`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{n(),I=o(),L={args:{header:(0,I.jsx)(r,{variant:`h5`,children:`RadioCard Header`}),children:(0,I.jsx)(r,{children:`RadioCard content`})},parameters:{docs:{disable:!0}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Typography variant="h5">RadioCard Header</Typography>,
    children: <Typography>RadioCard content</Typography>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}var z,B,V;function H(){return(H=e((()=>{f(),p(),_(),n(),v(),T(),z=o(),B=({title:e,price:t})=>(0,z.jsxs)(C,{children:[(0,z.jsx)(r,{variant:`h5`,children:e}),(0,z.jsxs)(r,{variant:`h5`,children:[t,` руб.`]})]}),V=()=>(0,z.jsxs)(g,{name:`test`,isError:!0,children:[(0,z.jsx)(y,{header:(0,z.jsx)(B,{title:`Тариф "Базовый"`,price:`2 500`}),value:`one`,children:(0,z.jsxs)(u,{children:[(0,z.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,z.jsx)(d,{children:`В пакете до 2 доверенностей`}),(0,z.jsx)(d,{children:`На 12 месяцев`})]})}),(0,z.jsx)(y,{header:(0,z.jsx)(B,{title:`Тариф "Расширенный"`,price:`5 000`}),value:`two`,children:(0,z.jsxs)(u,{children:[(0,z.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,z.jsx)(d,{children:`В пакете до 5 доверенностей`}),(0,z.jsx)(d,{children:`На 12 месяцев`})]})}),(0,z.jsx)(y,{header:(0,z.jsx)(B,{title:`Тариф "Премиальный"`,price:`10 000`}),value:`three`,children:(0,z.jsxs)(u,{children:[(0,z.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,z.jsx)(d,{children:`В пакете от 5 доверенностей`}),(0,z.jsx)(d,{children:`На 12 месяцев`})]})}),(0,z.jsx)(y,{header:(0,z.jsx)(B,{title:`Тариф "Безлимит"`,price:`20 000`}),value:`four`,children:(0,z.jsxs)(u,{children:[(0,z.jsx)(d,{children:`Создание доверенностей от одной организации`}),(0,z.jsx)(d,{children:`В пакете от 5 доверенностей`}),(0,z.jsx)(d,{children:`На 12 месяцев`})]})})]}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <RadioGroup name="test" isError>
      <RadioCard header={<Header title='Тариф "Базовый"' price="2 500" />} value="one">
        <BulletList>
          <BulletListItem>
            Создание доверенностей от одной организации
          </BulletListItem>
          <BulletListItem>В пакете до 2 доверенностей</BulletListItem>
          <BulletListItem>На 12 месяцев</BulletListItem>
        </BulletList>
      </RadioCard>
      <RadioCard header={<Header title='Тариф "Расширенный"' price="5 000" />} value="two">
        <BulletList>
          <BulletListItem>
            Создание доверенностей от одной организации
          </BulletListItem>
          <BulletListItem>В пакете до 5 доверенностей</BulletListItem>
          <BulletListItem>На 12 месяцев</BulletListItem>
        </BulletList>
      </RadioCard>
      <RadioCard header={<Header title='Тариф "Премиальный"' price="10 000" />} value="three">
        <BulletList>
          <BulletListItem>
            Создание доверенностей от одной организации
          </BulletListItem>
          <BulletListItem>В пакете от 5 доверенностей</BulletListItem>
          <BulletListItem>На 12 месяцев</BulletListItem>
        </BulletList>
      </RadioCard>
      <RadioCard header={<Header title='Тариф "Безлимит"' price="20 000" />} value="four">
        <BulletList>
          <BulletListItem>
            Создание доверенностей от одной организации
          </BulletListItem>
          <BulletListItem>В пакете от 5 доверенностей</BulletListItem>
          <BulletListItem>На 12 месяцев</BulletListItem>
        </BulletList>
      </RadioCard>
    </RadioGroup>;
}`,...V.parameters?.docs?.source}}}})))()}var U,W,G,K,q,J,Y;function X(){return(X=e((()=>{ge(),S(),me(),ue(),x(),pe(),h(),s(),n(),le(),U=o(),W=he({tariff:_e()}),G=i.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: ${({theme:e})=>e.spacing(4)};
`,K=i.div`
  width: min(100%, 500px);
`,q=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(4)};
`,J=({price:e})=>(0,U.jsxs)(G,{children:[(0,U.jsx)(r,{variant:`h5`,children:`Тариф`}),(0,U.jsxs)(r,{variant:`h5`,children:[e,` руб.`]})]}),Y=()=>{let e=fe({validationSchema:W,defaultValues:{tariff:`one`}}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},500)}));return(0,U.jsx)(K,{children:(0,U.jsx)(de,{form:e,onSubmit:t,children:(0,U.jsxs)(q,{children:[(0,U.jsxs)(ve,{control:e.control,name:`tariff`,groupLabel:`Выберите тариф`,children:[(0,U.jsx)(y,{header:(0,U.jsx)(J,{price:`2500`}),value:`one`,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(`li`,{children:`До 2 доверенностей`}),(0,U.jsx)(`li`,{children:`На 12 месяцев`})]})}),(0,U.jsx)(y,{header:(0,U.jsx)(J,{price:`5000`}),value:`two`,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(`li`,{children:`До 5 доверенностей`}),(0,U.jsx)(`li`,{children:`На 12 месяцев`})]})}),(0,U.jsx)(y,{header:(0,U.jsx)(J,{price:`10000`}),value:`three`,children:(0,U.jsxs)(m,{children:[(0,U.jsx)(`li`,{children:`От 5 доверенностей`}),(0,U.jsx)(`li`,{children:`На 12 месяцев`})]})})]}),(0,U.jsx)(b,{children:`Отправить`})]})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      tariff: 'one'
    }
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 500);
  }));
  return <StoryWrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <Wrapper>
          <FormRadioGroup control={form.control} name="tariff" groupLabel="Выберите тариф">
            <RadioCard header={<Header price="2500" />} value="one">
              <List>
                <li>До 2 доверенностей</li>
                <li>На 12 месяцев</li>
              </List>
            </RadioCard>
            <RadioCard header={<Header price="5000" />} value="two">
              <List>
                <li>До 5 доверенностей</li>
                <li>На 12 месяцев</li>
              </List>
            </RadioCard>
            <RadioCard header={<Header price="10000" />} value="three">
              <List>
                <li>От 5 доверенностей</li>
                <li>На 12 месяцев</li>
              </List>
            </RadioCard>
          </FormRadioGroup>
          <FormSubmitButton>Отправить</FormSubmitButton>
        </Wrapper>
      </Form>
    </StoryWrapper>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{v(),A(),F(),R(),H(),X(),Z={title:`Form-Controls/SelectionCard/Deprecated/RadioCard`,component:y,parameters:{docs:{description:{component:`**❗️❗️❗️ Компонент устарел и больше не будет поддерживаться.**
**Используйте [SelectionCard](/story/form-controls-selectioncard--docs) с \`SelectionCardGroup variant="grouped"\`**
Причина отказа от поддержки: RadioCard поддерживает только одиночный выбор и сгруппированный список

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=539-400067&t=ATvcxMEtobWLT9qa-4)`}}}},Q=[`Interaction`,`BasicUsage`,`WithFormRadioGroup`,`Disabled`,`IsError`]})))()}$();export{k as BasicUsage,P as Disabled,L as Interaction,V as IsError,Y as WithFormRadioGroup,Q as __namedExportsOrder,Z as default};