import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-COOA12PR.js";import{t as r}from"./TextField-Dp3MdpYP.js";import{t as i}from"./ListItem-BU4tOlC0.js";import{t as a}from"./TextField-DJ3Qbxf-.js";import{n as o,r as s}from"./DashboardLayout-jNdsgz-0.js";import{l as c,u as l}from"./PageContent-DIlsv36C.js";import{t as u}from"./List-BN4s32H9.js";import{t as d}from"./List-B0AhvOB-.js";import{t as f}from"./ListItem-BglyZ1A-.js";import{n as p,t as m}from"./SearchOutlineMd-CCcBBU5w.js";import{t as h}from"./PageLayout-Cv8bfQ_1.js";import{t as g}from"./PageLayout-BHNgbxt7.js";import{n as _,t as v}from"./AddOutlineMd-eW8RkEji.js";import{n as y,t as b}from"./UikitLogo-CzUxeG8e.js";import{I as x,U as S,p as C,t as w,tn as T}from"./common-C1YIp-QP.js";var E,D,O,k,A,j;function M(){return(M=e((()=>{E=n(),y(),v(),m(),d(),f(),c(),g(),S(),a(),s(),w(),D=t(),O={title:`Layouts/DashboardLayout/Main`,component:o.Main,parameters:{layout:`fullscreen`,docs:{description:{component:`DashboardLayout.Main - содержит основной контент приложения.`}}}},k={render:e=>(0,D.jsx)(x,{children:(0,D.jsxs)(o,{children:[(0,D.jsx)(o.Header,{product:{name:`Астрал.ЭДО`,logo:()=>(0,D.jsx)(b,{})}}),(0,D.jsx)(o.Sidebar,{menu:{items:[]}}),(0,D.jsx)(o.Main,{...e})]})}),args:{children:`Main Content`},parameters:{docs:{disable:!0}}},A=()=>(0,D.jsx)(x,{children:(0,D.jsxs)(o,{children:[(0,D.jsx)(o.Header,{product:{name:`Астрал.ЭДО`,logo:()=>(0,D.jsx)(b,{})}}),(0,D.jsx)(o.Sidebar,{menu:{items:[]}}),(0,D.jsx)(o.Main,{children:(0,D.jsx)(h,{header:{title:`Черновики`,breadcrumbs:[(0,D.jsx)(E.Fragment,{children:`Первый текст`},`1`),(0,D.jsx)(E.Fragment,{children:`Текст с разделителем`},`2`),(0,D.jsx)(E.Fragment,{children:`Текст с разделителем`},`3`)],actions:{main:[{text:`Основное действие`,startIcon:(0,D.jsx)(_,{})}],secondary:[{text:`Кнопка`}]},filters:(0,D.jsx)(C,{})},content:T,aside:(0,D.jsxs)(l,{children:[(0,D.jsx)(r,{placeholder:`Поиск по отчету`,fullWidth:!0,InputProps:{startAdornment:(0,D.jsx)(p,{})}}),(0,D.jsxs)(u,{children:[(0,D.jsx)(i,{selected:!0,children:`Титульный лист`}),(0,D.jsx)(i,{children:`Раздел 1`}),(0,D.jsx)(i,{children:`Раздел 2`}),(0,D.jsx)(i,{children:`Раздел 3`}),(0,D.jsx)(i,{children:`Раздел 4`}),(0,D.jsx)(i,{children:`Раздел 5`})]})]})})})]})}),k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <StoryWrapper>
        <DashboardLayout>
          <DashboardLayout.Header product={{
          name: 'Астрал.ЭДО',
          logo: () => <UikitLogo />
        }} />
          <DashboardLayout.Sidebar menu={{
          items: []
        }} />
          <DashboardLayout.Main {...args} />
        </DashboardLayout>
      </StoryWrapper>;
  },
  args: {
    children: 'Main Content'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <StoryWrapper>
      <DashboardLayout>
        <DashboardLayout.Header product={{
        name: 'Астрал.ЭДО',
        logo: () => <UikitLogo />
      }} />
        <DashboardLayout.Sidebar menu={{
        items: []
      }} />
        <DashboardLayout.Main>
          <PageLayout header={{
          title: 'Черновики',
          breadcrumbs: [<Fragment key="1">Первый текст</Fragment>, <Fragment key="2">Текст с разделителем</Fragment>, <Fragment key="3">Текст с разделителем</Fragment>],
          actions: {
            main: [{
              text: 'Основное действие',
              startIcon: <AddOutlineMd />
            }],
            secondary: [{
              text: 'Кнопка'
            }]
          },
          filters: <MockFilters />
        }} content={MockContent} aside={<PageAside>
                <TextField placeholder="Поиск по отчету" fullWidth InputProps={{
            startAdornment: <SearchOutlineMd />
          }} />
                <List>
                  <ListItem selected>Титульный лист</ListItem>
                  <ListItem>Раздел 1</ListItem>
                  <ListItem>Раздел 2</ListItem>
                  <ListItem>Раздел 3</ListItem>
                  <ListItem>Раздел 4</ListItem>
                  <ListItem>Раздел 5</ListItem>
                </List>
              </PageAside>} />
        </DashboardLayout.Main>
      </DashboardLayout>
    </StoryWrapper>;
}`,...A.parameters?.docs?.source},description:{story:`**Story** необходимо открывать в отдельной вкладке`,...A.parameters?.docs?.description}}},j=[`Interaction`,`BasicUsage`]})))()}M();export{A as BasicUsage,k as Interaction,j as __namedExportsOrder,O as default};