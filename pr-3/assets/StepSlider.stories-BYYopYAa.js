import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,dt as i,ft as a,ln as o,lt as s,xa as c}from"./preview-D6B29sG_.js";import{t as l}from"./TextField-dzsmLgtV.js";import{t as u}from"./TextField-Dimgg2D9.js";import{n as d,t as f}from"./StepSlider-Im39MWTa.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=t(),n(),r(),u(),i(),d(),m=c(),h={title:`Form-Controls/StepSlider`,component:f,parameters:{docs:{description:{component:`Компонент предназначенный для анимированного переключения активного компонента. Может быть полезно в пошаговых формах, где пользователь может переключаться между шагами формы.

### [Figma]()`}}}},g={args:{activeStep:1,steps:[{id:1,component:(0,m.jsx)(`div`,{children:`Первый`})},{id:2,component:(0,m.jsx)(`div`,{children:`Второй`})},{id:3,component:(0,m.jsx)(`div`,{children:`Третий`})}]},parameters:{docs:{disable:!0}}},_=()=>{let[e,t]=(0,p.useState)(1),n=()=>t(e+1),r=()=>t(e-1);return(0,m.jsx)(f,{activeStep:e,steps:[{id:1,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Логин`}),(0,m.jsx)(l,{label:`Пароль`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})},{id:2,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Фамилия`}),(0,m.jsx)(l,{label:`Имя`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:3,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Снилс`}),(0,m.jsx)(l,{label:`Инн`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:4,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(a,{variant:`h4`,children:`Спасибо за регистрацию`}),(0,m.jsx)(o,{onClick:r,children:`Назад`})]})}]})},v=()=>{let[e,t]=(0,p.useState)(1),n=()=>t(e+1),r=()=>t(e-1);return(0,m.jsx)(f,{activeStep:e,slideProps:{timeout:1e3,easing:`linear`},steps:[{id:1,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Логин`}),(0,m.jsx)(l,{label:`Пароль`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})},{id:2,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Фамилия`}),(0,m.jsx)(l,{label:`Имя`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:3,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Снилс`}),(0,m.jsx)(l,{label:`Инн`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:4,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(a,{variant:`h4`,children:`Спасибо за регистрацию`}),(0,m.jsx)(o,{onClick:r,children:`Назад`})]})}]})},y=()=>{let[e,t]=(0,p.useState)(1),n=()=>t(e+1),r=()=>t(e-1);return(0,m.jsx)(f,{activeStep:e,isFullWidth:!0,steps:[{id:1,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Логин`}),(0,m.jsx)(l,{label:`Пароль`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})},{id:2,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Фамилия`}),(0,m.jsx)(l,{label:`Имя`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:3,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(l,{label:`Снилс`}),(0,m.jsx)(l,{label:`Инн`}),(0,m.jsxs)(s,{columns:2,spacing:2,children:[(0,m.jsx)(o,{onClick:r,children:`Назад`}),(0,m.jsx)(o,{onClick:n,children:`Дальше`})]})]})},{id:4,component:(0,m.jsxs)(s,{spacing:2,children:[(0,m.jsx)(a,{variant:`h4`,children:`Спасибо за регистрацию`}),(0,m.jsx)(o,{onClick:r,children:`Назад`})]})}]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 1,
    steps: [{
      id: 1,
      component: <div>Первый</div>
    }, {
      id: 2,
      component: <div>Второй</div>
    }, {
      id: 3,
      component: <div>Третий</div>
    }]
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(1);
  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);
  return <StepSlider activeStep={active} steps={[{
    id: 1,
    component: <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
  }, {
    id: 2,
    component: <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 3,
    component: <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 4,
    component: <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
  }]} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(1);
  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);
  return <StepSlider activeStep={active} slideProps={{
    timeout: 1000,
    easing: 'linear'
  }} steps={[{
    id: 1,
    component: <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
  }, {
    id: 2,
    component: <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 3,
    component: <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 4,
    component: <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
  }]} />;
}`,...v.parameters?.docs?.source},description:{story:"Prop ```slideProps``` позволяет кастомизировать поведение Slide",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [active, setActive] = useState(1);
  const handleNext = () => setActive(active + 1);
  const handleBack = () => setActive(active - 1);
  return <StepSlider activeStep={active} isFullWidth={true} steps={[{
    id: 1,
    component: <Grid spacing={2}>
              <TextField label="Логин" />
              <TextField label="Пароль" />
              <Button onClick={handleNext}>Дальше</Button>
            </Grid>
  }, {
    id: 2,
    component: <Grid spacing={2}>
              <TextField label="Фамилия" />
              <TextField label="Имя" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 3,
    component: <Grid spacing={2}>
              <TextField label="Снилс" />
              <TextField label="Инн" />
              <Grid columns={2} spacing={2}>
                <Button onClick={handleBack}>Назад</Button>
                <Button onClick={handleNext}>Дальше</Button>
              </Grid>
            </Grid>
  }, {
    id: 4,
    component: <Grid spacing={2}>
              <Typography variant="h4">Спасибо за регистрацию</Typography>
              <Button onClick={handleBack}>Назад</Button>
            </Grid>
  }]} />;
}`,...y.parameters?.docs?.source},description:{story:"Prop ```isFullWidth``` позволяет быстро стилизовать элемент для растягивания на всю доступную ширину",...y.parameters?.docs?.description}}},b=[`Interaction`,`BasicUsage`,`SlideProps`,`IsFullWidth`]})))()}x();export{_ as BasicUsage,g as Interaction,y as IsFullWidth,v as SlideProps,b as __namedExportsOrder,h as default};