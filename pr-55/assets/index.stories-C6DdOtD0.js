import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Xt as t,b as n,cn as r,ct as i,dt as a,en as o,ft as s,ji as c,ln as ee,lt as te,y as ne,ya as l,yn as re,za as u}from"./preview-BKcIDY9K.js";import{t as ie}from"./MenuItem-Cd2b4f2q.js";import{t as ae}from"./MenuItem-DiuHrfRm.js";import{t as oe}from"./OverflowTypography-c3xVH7Xg.js";import{t as se}from"./OverflowTypography-4ori041F.js";import{t as ce}from"./Avatar-CLv_xHFY.js";import{t as le}from"./Avatar-CryCnxvW.js";import{a as ue,c as de,i as fe,n as d,r as f,s as pe}from"./MenuOrganization-CWZrG8aS.js";import{C as me,E as he,I as ge,M as _e,j as ve,n as p,t as ye,w as be}from"./DashboardLayout-Dtr6yVfD.js";import{t as xe}from"./ProductSwitcher-Scgcws55.js";import{t as Se}from"./PageLayout-DN1ee4V-.js";import{t as Ce}from"./PageLayout-BtEbc7pe.js";import{t as we}from"./ProductSwitcher-Ds_vBd9p.js";import{n as Te,t as Ee}from"./ArrowDFillSm-DQ-wmf5k.js";import{n as m,t as h}from"./AddOutlineMd-DnM0x7Ur.js";import{n as De,t as Oe}from"./CompanyOutlineMd-Du2T_Djx.js";import{n as ke,t as Ae}from"./UikitLogo-BECFH2x7.js";import{r as je,t as Me}from"./faker-D24z7-tL.js";import{I as Ne,c as g,d as Pe,i as _,l as v,s as y,t as Fe,u as Ie,v as Le,y as Re}from"./common-1zzC0rpQ.js";var ze,b,x;function Be(){return(Be=e((()=>{ze=u(),h(),f(),_(),b=l(),x=()=>{let e=y(),[t,n]=(0,ze.useState)(e[0]),r=e=>{n(e)};return(0,b.jsxs)(Pe,{container:!0,direction:`column`,columnSpacing:3,spacing:5,children:[(0,b.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,action:{text:`Добавить организацию`,startIcon:(0,b.jsx)(m,{}),onClick:()=>console.log(`click`)},onRetry:()=>{}}),(0,b.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,action:{text:`Ссылка`,component:`a`,variant:`link`,onClick:()=>console.log(`click`)},onRetry:()=>{}}),(0,b.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,onRetry:()=>{}})]})};try{x.displayName=`ActionInFooter`,x.__docgenInfo={description:"`action` позволяет настраивать действие в футере меню.",displayName:`ActionInFooter`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/ActionInFooter.story.tsx`,methods:[],props:{},tags:{}}}catch{}x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <StyledGrid container direction="column" columnSpacing={3} spacing={5}>
      <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
      text: 'Добавить организацию',
      startIcon: <AddOutlineMd />,
      onClick: () => console.log('click')
    }} onRetry={() => {}} />
      <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
      text: 'Ссылка',
      component: 'a',
      variant: 'link',
      onClick: () => console.log('click')
    }} onRetry={() => {}} />
      <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} />
    </StyledGrid>;
}`,...x.parameters?.docs?.source},description:{story:"`action` позволяет настраивать действие в футере меню.",...x.parameters?.docs?.description}}}})))()}var S,C,w;function Ve(){return(Ve=e((()=>{S=u(),ke(),h(),Oe(),ye(),Fe(),pe(),Ce(),we(),je(),ne(),f(),_(),C=l(),w=()=>{let[e,t]=(0,S.useState)([]),[r,i]=(0,S.useState)(!1),[a,o]=(0,S.useState)({...y({length:1})[0],linkButton:{name:`Перейти к данным организации`,component:`a`,href:`/`}}),s=e=>{o(e)},c=()=>{e.length<1&&(i(!0),setTimeout(()=>{t([...y()]),i(!1)},1500))};return(0,C.jsx)(Ne,{children:(0,C.jsxs)(p,{children:[(0,C.jsx)(p.Header,{productSwitcher:()=>(0,C.jsx)(xe,{getProducts:Me}),product:{name:`Астрал.UI`,logo:()=>(0,C.jsx)(Ae,{})},profile:{displayName:`Григорьев Виталий`,annotation:`vitatiy_grig@mail.ru`,avatar:{alt:`Григорьев Виталий`,children:`ГВ`},exitButton:{onClick:()=>console.log(`Выход`)}},menuOrganization:()=>(0,C.jsx)(d,{organizations:e,currentOrganization:a,onChange:s,action:{text:`Добавить организацию`,startIcon:(0,C.jsx)(m,{}),onClick:()=>console.log(`click`)},onRetry:()=>{},isLoading:r,onOpen:c})}),(0,C.jsx)(p.Sidebar,{header:(0,C.jsx)(de,{startIcon:(0,C.jsx)(m,{}),children:`Добавить документ`}),menu:{items:[[`organizations`,{icon:(0,C.jsx)(De,{}),text:`Мои организации`,active:!0}]]}}),(0,C.jsx)(p.Main,{children:(0,C.jsx)(Se,{header:{title:`Черновики`,actions:{main:[{text:`Основное действие`,startIcon:(0,C.jsx)(m,{})}],secondary:[{text:`Кнопка`}]}},content:{children:(0,C.jsx)(n,{title:`Документы отсутствуют`})}})})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [fakeOrganizationList, setFakeOrganizationList] = useState<OrganizationList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
    linkButton?: LinkButtonProps;
  }>({
    ...makeOrganizationList({
      length: 1
    })[0],
    linkButton: {
      name: 'Перейти к данным организации',
      component: 'a',
      href: '/'
    }
  });
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  const handleOpen = () => {
    if (fakeOrganizationList.length < 1) {
      setIsLoading(true);
      setTimeout(() => {
        setFakeOrganizationList([...makeOrganizationList()]);
        setIsLoading(false);
      }, 1500);
    }
  };
  return <DashboardLayoutStoryWrapper>
      <DashboardLayout>
        <DashboardLayout.Header productSwitcher={() => {
        return <ProductSwitcher getProducts={handleGetProducts} />;
      }} product={{
        name: 'Астрал.UI',
        logo: () => <UikitLogo />
      }} profile={{
        displayName: 'Григорьев Виталий',
        annotation: 'vitatiy_grig@mail.ru',
        avatar: {
          alt: 'Григорьев Виталий',
          children: 'ГВ'
        },
        exitButton: {
          onClick: () => console.log('Выход')
        }
      }} menuOrganization={() => <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
        text: 'Добавить организацию',
        startIcon: <AddOutlineMd />,
        onClick: () => console.log('click')
      }} onRetry={() => {}} isLoading={isLoading} onOpen={handleOpen} />} />
        <DashboardLayout.Sidebar header={<DashboardSidebarButton startIcon={<AddOutlineMd />}>
              Добавить документ
            </DashboardSidebarButton>} menu={{
        items: [['organizations', {
          icon: <CompanyOutlineMd />,
          text: 'Мои организации',
          active: true
        }]]
      }} />
        <DashboardLayout.Main>
          <PageLayout header={{
          title: 'Черновики',
          actions: {
            main: [{
              text: 'Основное действие',
              startIcon: <AddOutlineMd />
            }],
            secondary: [{
              text: 'Кнопка'
            }]
          }
        }} content={{
          children: <Placeholder title="Документы отсутствуют" />
        }} />
        </DashboardLayout.Main>
      </DashboardLayout>
    </DashboardLayoutStoryWrapper>;
}`,...w.parameters?.docs?.source}}}})))()}var He,Ue,T;function We(){return(We=e((()=>{He=u(),f(),_(),Ue=l(),T=()=>{let e=[...y()],[t,n]=(0,He.useState)({...e[0],linkButton:{component:`a`,target:`_blank`,href:`https://astral.ru/`}});return(0,Ue.jsx)(d,{organizations:e,currentOrganization:t,onChange:e=>{n({...e,linkButton:{component:`a`,href:`/`}})},onRetry:()=>{}})};try{T.displayName=`ButtonCurrentOrganization`,T.__docgenInfo={description:"Параметр `linkButton` добавляет кнопку действия для текущей выбранной организации.",displayName:`ButtonCurrentOrganization`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/ButtonCurrentOrganization.story.tsx`,methods:[],props:{},tags:{}}}catch{}T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = [...makeOrganizationList()];
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
    linkButton?: LinkButtonProps;
  }>({
    ...fakeOrganizationList[0],
    linkButton: {
      component: 'a',
      target: '_blank',
      href: 'https://astral.ru/'
    }
  });
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected({
      ...organization,
      linkButton: {
        component: 'a',
        href: '/'
      }
    });
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} />;
}`,...T.parameters?.docs?.source},description:{story:"Параметр `linkButton` добавляет кнопку действия для текущей выбранной организации.",...T.parameters?.docs?.description}}}})))()}var E,D,Ge,Ke,O,qe,k,Je,A;function Ye(){return(Ye=e((()=>{E=u(),le(),r(),i(),ae(),se(),re(),a(),ge(),f(),be(),ve(),_(),D=l(),Ge=c(ie)`
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(1)};

  width: 100%;
`,Ke=c.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(2)};
  align-items: center;

  width: 100%;
`,O=c(s)`
  white-space: nowrap;
`,qe=c(ee)`
  align-self: flex-start;
`,k=e=>e?e.trim().split(/\s+/).filter(Boolean).map(e=>e[0]).join(``).slice(0,2).toUpperCase():``,Je=({organization:e,isSelected:t,onSelect:n})=>{let r=k(e.name),{name:i=_e,...a}=e.linkButton||{};return(0,D.jsxs)(Ge,{disableGutters:!0,selected:t,onClick:n,children:[(0,D.jsxs)(Ke,{children:[(0,D.jsx)(ce,{color:`#EC4899`,size:`md`,children:r}),(0,D.jsxs)(te,{container:!0,rows:1,style:{flex:1},children:[(0,D.jsx)(oe,{tooltipProps:{placement:`top`,title:e.name},variant:`h6`,component:`div`,children:e.name}),(0,D.jsxs)(he,{container:!0,spacing:2,children:[e.inn&&(0,D.jsxs)(s,{variant:`caption`,color:`textSecondary`,children:[`ИНН `,e.inn]}),e.kpp&&(0,D.jsxs)(s,{variant:`caption`,color:`textSecondary`,children:[`КПП `,e.kpp]})]})]})]}),e.linkButton&&t&&(0,D.jsx)(qe,{variant:`link`,...a,children:i})]})},A=()=>{let e=(0,E.useMemo)(()=>y({length:8}).map((e,t)=>({...e,linkButton:t%3==0?{name:`Перейти`,component:`a`,href:`#`}:void 0})),[]),[t,n]=(0,E.useState)(e[0]);return(0,D.jsx)(d,{organizations:e,currentOrganization:t,onChange:n,onRetry:()=>{},renderPreview:(e,{className:t})=>(0,D.jsxs)(`div`,{className:t,style:{display:`flex`,gap:`12px`,alignItems:`center`},children:[(0,D.jsx)(ce,{color:`#EC4899`,size:`md`,children:k(e.name)}),(0,D.jsxs)(me,{children:[(0,D.jsx)(oe,{variant:`h6`,component:`div`,children:e.name}),(0,D.jsxs)(he,{children:[e.inn&&(0,D.jsxs)(O,{variant:`caption`,color:`textSecondary`,children:[`ИНН `,e.inn]}),e.kpp&&(0,D.jsxs)(O,{variant:`caption`,color:`textSecondary`,children:[`КПП `,e.kpp]})]})]})]}),renderItem:({organization:e,isSelected:t,onSelect:n})=>(0,D.jsx)(Je,{organization:e,isSelected:t,onSelect:n})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const organizations = useMemo<CustomOrganization[]>(() => {
    return makeOrganizationList({
      length: 8
    }).map((organization, index) => ({
      ...organization,
      linkButton: index % 3 === 0 ? {
        name: 'Перейти',
        component: 'a',
        href: '#'
      } : undefined
    }));
  }, []);
  const [selectedOrganization, setSelectedOrganization] = useState(organizations[0]);
  return <MenuOrganization organizations={organizations} currentOrganization={selectedOrganization} onChange={setSelectedOrganization} onRetry={() => {}} renderPreview={(organization, {
    className
  }) => <div className={className} style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
          <Avatar color="#EC4899" size="md">
            {getInitials(organization.name)}
          </Avatar>
          <Container>
            <OverflowTypography variant="h6" component="div">
              {organization.name}
            </OverflowTypography>
            <OrganizationData>
              {organization.inn && <NoWrapTypography variant="caption" color="textSecondary">
                  ИНН {organization.inn}
                </NoWrapTypography>}
              {organization.kpp && <NoWrapTypography variant="caption" color="textSecondary">
                  КПП {organization.kpp}
                </NoWrapTypography>}
            </OrganizationData>
          </Container>
        </div>} renderItem={({
    organization,
    isSelected,
    onSelect
  }) => <CustomOrganizationItem organization={organization} isSelected={isSelected} onSelect={onSelect} />} />;
}`,...A.parameters?.docs?.source}}}})))()}var Xe,j,M;function Ze(){return(Ze=e((()=>{Xe=u(),h(),f(),_(),j=l(),M=()=>{let e=y(),[t,n]=(0,Xe.useState)(e[0]);return(0,j.jsx)(d,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},action:{text:`Добавить организацию`,startIcon:(0,j.jsx)(m,{}),onClick:()=>console.log(`click`)},isDisabled:!0,disabledReason:`Для смены организации выйдите из режима редактирования документа`,onRetry:()=>{}})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} isDisabled disabledReason="Для смены организации выйдите из режима редактирования документа" onRetry={() => {}} />;
}`,...M.parameters?.docs?.source}}}})))()}var N,P,F;function Qe(){return(Qe=e((()=>{N=u(),h(),f(),_(),P=l(),F=()=>{let e=y(),[t,n]=(0,N.useState)(e[0]);return(0,P.jsx)(d,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},groupBy:[{name:`Активные`,filter:e=>e.filter(e=>e.active)},{name:`Не активные`,filter:e=>e.filter(e=>!e.active)}],action:{text:`Добавить организацию`,startIcon:(0,P.jsx)(m,{}),onClick:()=>console.log(`click`)},onRetry:()=>{}})};try{F.displayName=`FilteringByGroups`,F.__docgenInfo={description:"`groupBy` позволяет добавить возможность кастомной фильтрации по группам.\nОрганизации которые не соответствуют ни одному фильтру не попадут в список.",displayName:`FilteringByGroups`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/FilteringByGroups.story.tsx`,methods:[],props:{},tags:{}}}catch{}F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} groupBy={[{
    name: 'Активные',
    filter: (organizations: Array<Organization & {
      active?: boolean;
    }>) => organizations.filter(organization => organization.active)
  }, {
    name: 'Не активные',
    filter: (organizations: Array<Organization & {
      active?: boolean;
    }>) => organizations.filter(organization => !organization.active)
  }]} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} onRetry={() => {}} />;
}`,...F.parameters?.docs?.source},description:{story:"`groupBy` позволяет добавить возможность кастомной фильтрации по группам.\nОрганизации которые не соответствуют ни одному фильтру не попадут в список.",...F.parameters?.docs?.description}}}})))()}var I;function $e(){return($e=e((()=>{_(),I={args:{organizations:y(),currentOrganization:y()[0],onChange:()=>{},onRetry:()=>{}},parameters:{docs:{disable:!0}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    organizations: makeOrganizationList(),
    currentOrganization: makeOrganizationList()[0],
    onChange: () => {},
    onRetry: () => {}
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...I.parameters?.docs?.source}}}})))()}var L,R,z;function et(){return(et=e((()=>{L=u(),f(),fe(),_(),R=l(),z=()=>{let e=y(),[t]=(0,L.useState)(e[0]);return(0,R.jsx)(L.Suspense,{fallback:(0,R.jsx)(ue,{}),children:(0,R.jsx)(d,{organizations:e,currentOrganization:t,onChange:()=>{},onRetry:()=>{}})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  return <Suspense fallback={<MenuOrganizationSkeleton />}>
      <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={() => {}} onRetry={() => {}} />
    </Suspense>;
}`,...z.parameters?.docs?.source}}}})))()}var tt,B,V;function nt(){return(nt=e((()=>{tt=u(),h(),f(),_(),B=l(),V=()=>{let e=y(),[t,n]=(0,tt.useState)(e[0]);return(0,B.jsx)(d,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},action:{text:`Добавить организацию`,startIcon:(0,B.jsx)(m,{}),onClick:()=>console.log(`click`)},isLoading:!0,onRetry:()=>{}})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} isLoading={true} onRetry={() => {}} />;
}`,...V.parameters?.docs?.source}}}})))()}var rt,H,U;function it(){return(it=e((()=>{rt=u(),h(),f(),_(),H=l(),U=()=>{let e=y(),[t,n]=(0,rt.useState)(e[0]);return(0,H.jsx)(d,{organizations:e,currentOrganizationGroupLabel:`Выбранная организация`,currentOrganization:t,onChange:e=>{n(e)},action:{text:`Добавить организацию`,startIcon:(0,H.jsx)(m,{}),onClick:()=>console.log(`click`)},onRetry:()=>{}})};try{U.displayName=`NameCurrentOrganizationGroup`,U.__docgenInfo={description:"`currentOrganizationGroupLabel` позволяет изменить название группы с\nвыбранной организацией.",displayName:`NameCurrentOrganizationGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/NameCurrentOrganizationGroupLabel.story.tsx`,methods:[],props:{},tags:{}}}catch{}U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganizationGroupLabel="Выбранная организация" currentOrganization={selected} onChange={handleSelectOrganization} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} onRetry={() => {}} />;
}`,...U.parameters?.docs?.source},description:{story:"`currentOrganizationGroupLabel` позволяет изменить название группы с\nвыбранной организацией.",...U.parameters?.docs?.description}}}})))()}var at,W,G;function ot(){return(ot=e((()=>{at=u(),h(),f(),_(),W=l(),G=()=>{let[e,t]=(0,at.useState)(y()[0]);return(0,W.jsx)(d,{organizations:[],currentOrganization:e,onChange:e=>{t(e)},action:{text:`Добавить организацию`,startIcon:(0,W.jsx)(m,{}),onClick:()=>console.log(`click`)},onRetry:()=>{}})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(makeOrganizationList()[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={[]} currentOrganization={selected} onChange={handleSelectOrganization} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} onRetry={() => {}} />;
}`,...G.parameters?.docs?.source}}}})))()}var K,st,q;function ct(){return(ct=e((()=>{Ee(),r(),Le(),t(),re(),f(),_(),K=l(),st=c(ee)`
  color: initial;

  ${o} {
    &:hover {
      color: initial;
    }
  }
`,q=()=>{let e=({isOpen:e,onOpen:t})=>(0,K.jsx)(st,{onClick:t,variant:`link`,children:(0,K.jsx)(Re,{status:`warning`,label:`Организация отсутствуют в профиле`,endAdornment:(0,K.jsx)(Te,{}),isSelected:e,onChange:()=>{}})});return(0,K.jsx)(d,{organizations:y(),onChange:()=>{},onRetry:()=>{},notSelectedPlaceholder:({isOpen:t,onOpen:n})=>(0,K.jsx)(e,{isOpen:t,onOpen:n})})},q.parameters={layout:`padded`},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const NotSelectedPlaceholder = ({
    isOpen,
    onOpen
  }: NotSelectedPlaceholderProps) => {
    return <StyledButton onClick={onOpen} variant="link">
        <Chip status="warning" label="Организация отсутствуют в профиле" endAdornment={<ArrowDFillSm />} isSelected={isOpen} onChange={() => {}} />
      </StyledButton>;
  };
  return <MenuOrganization organizations={makeOrganizationList()} onChange={() => {}} onRetry={() => {}} notSelectedPlaceholder={({
    isOpen,
    onOpen
  }) => <NotSelectedPlaceholder isOpen={isOpen} onOpen={onOpen} />} />;
}`,...q.parameters?.docs?.source}}}})))()}var J,lt,Y;function ut(){return(ut=e((()=>{J=u(),f(),_(),lt=l(),Y=()=>{let[e,t]=(0,J.useState)([]),[n,r]=(0,J.useState)(!1),[i,a]=(0,J.useState)(!1),[o,s]=(0,J.useState)({...y({length:1})[0],linkButton:{component:`a`,target:`_blank`,href:`https://astral.ru/`}});return(0,lt.jsx)(d,{organizations:e,currentOrganization:o,onChange:e=>{s({...e,linkButton:{component:`a`,href:`/`}})},onRetry:()=>{},isOpen:n,onOpen:()=>{r(!0),a(!0),setTimeout(()=>{t([...y()]),a(!1)},1500)},onClose:()=>{r(!1)},isLoading:i})};try{Y.displayName=`OnOpen`,Y.__docgenInfo={description:"Параметры `isOpen`,`onOpen`,`onClose` позволяют контролировать поведение Popover снаружи компонента.",displayName:`OnOpen`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/OnOpen.story.tsx`,methods:[],props:{},tags:{}}}catch{}Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [fakeOrganizationList, setFakeOrganizationList] = useState<OrganizationList[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
    linkButton?: LinkButtonProps;
  }>({
    ...makeOrganizationList({
      length: 1
    })[0],
    linkButton: {
      component: 'a',
      target: '_blank',
      href: 'https://astral.ru/'
    }
  });
  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setFakeOrganizationList([...makeOrganizationList()]);
      setIsLoading(false);
    }, 1500);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected({
      ...organization,
      linkButton: {
        component: 'a',
        href: '/'
      }
    });
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} isOpen={isOpen} onOpen={handleOpen} onClose={handleClose} isLoading={isLoading} />;
}`,...Y.parameters?.docs?.source},description:{story:"Параметры `isOpen`,`onOpen`,`onClose` позволяют контролировать поведение Popover снаружи компонента.",...Y.parameters?.docs?.description}}}})))()}var dt,X,Z;function ft(){return(ft=e((()=>{dt=u(),h(),f(),_(),X=l(),Z=()=>{let e=y({length:8}),[t,n]=(0,dt.useState)(e[0]),r=e=>{n(e)};return(0,X.jsx)(Ie,{children:(0,X.jsxs)(Pe,{container:!0,direction:`column`,columnSpacing:3,spacing:5,children:[(0,X.jsxs)(v,{children:[(0,X.jsx)(g,{variant:`subtitle1`,paragraph:!0,children:`Выпадание слева`}),(0,X.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,onRetry:()=>{},anchorOrigin:{vertical:`bottom`,horizontal:`left`},transformOrigin:{vertical:`top`,horizontal:`left`},action:{text:`Добавить организацию`,startIcon:(0,X.jsx)(m,{}),onClick:()=>console.log(`click`)}})]}),(0,X.jsxs)(v,{children:[(0,X.jsx)(g,{variant:`subtitle1`,paragraph:!0,children:`Выпадание справа`}),(0,X.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,onRetry:()=>{},anchorOrigin:{vertical:`bottom`,horizontal:`right`},transformOrigin:{vertical:`top`,horizontal:`right`},action:{text:`Добавить организацию`,startIcon:(0,X.jsx)(m,{}),onClick:()=>console.log(`click`)}})]}),(0,X.jsxs)(v,{children:[(0,X.jsx)(g,{variant:`subtitle1`,paragraph:!0,children:`Выпадание сверху`}),(0,X.jsx)(d,{organizations:e,currentOrganization:t,onChange:r,onRetry:()=>{},anchorOrigin:{vertical:`top`,horizontal:`right`},transformOrigin:{vertical:`bottom`,horizontal:`right`},action:{text:`Добавить организацию`,startIcon:(0,X.jsx)(m,{}),onClick:()=>console.log(`click`)}})]})]})})};try{Z.displayName=`PopoverPositioning`,Z.__docgenInfo={description:"Пропсы `anchorOrigin` и `transformOrigin` позволяют настраивать позиционирование выпадающего меню.\nПолезно для использования в сайдбарах или когда нужно изменить направление открытия меню.\n\nПараметры не работает на мобильных устройствах, используется компонент `BottomDrawer`",displayName:`PopoverPositioning`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/MenuOrganization/stories/PopoverPositioning.story.tsx`,methods:[],props:{},tags:{}}}catch{}Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const organizations = makeOrganizationList({
    length: 8
  });
  const [selected, setSelected] = useState<Organization>(organizations[0]);
  const handleSelectOrganization = (organization: Organization) => {
    setSelected(organization);
  };
  return <StoryContainer>
      <StyledGrid container direction="column" columnSpacing={3} spacing={5}>
        <Column>
          <CenteredTypography variant="subtitle1" paragraph>
            Выпадание слева
          </CenteredTypography>
          <MenuOrganization organizations={organizations} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }} transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }} action={{
          text: 'Добавить организацию',
          startIcon: <AddOutlineMd />,
          onClick: () => console.log('click')
        }} />
        </Column>

        <Column>
          <CenteredTypography variant="subtitle1" paragraph>
            Выпадание справа
          </CenteredTypography>
          <MenuOrganization organizations={organizations} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }} transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }} action={{
          text: 'Добавить организацию',
          startIcon: <AddOutlineMd />,
          onClick: () => console.log('click')
        }} />
        </Column>

        <Column>
          <CenteredTypography variant="subtitle1" paragraph>
            Выпадание сверху
          </CenteredTypography>
          <MenuOrganization organizations={organizations} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }} transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }} action={{
          text: 'Добавить организацию',
          startIcon: <AddOutlineMd />,
          onClick: () => console.log('click')
        }} />
        </Column>
      </StyledGrid>
    </StoryContainer>;
}`,...Z.parameters?.docs?.source},description:{story:"Пропсы `anchorOrigin` и `transformOrigin` позволяют настраивать позиционирование выпадающего меню.\nПолезно для использования в сайдбарах или когда нужно изменить направление открытия меню.\n\nПараметры не работает на мобильных устройствах, используется компонент `BottomDrawer`",...Z.parameters?.docs?.description}}}})))()}var pt,Q,$;function mt(){return(mt=e((()=>{pt=u(),h(),f(),_(),Q=l(),$=()=>{let e=y(),[t,n]=(0,pt.useState)(e[0]);return(0,Q.jsx)(d,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},action:{text:`Добавить организацию`,startIcon:(0,Q.jsx)(m,{}),onClick:()=>console.log(`click`)},onChangeSearch:()=>{},isError:!0,onRetry:()=>{}})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList();
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
  }>(fakeOrganizationList[0]);
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} onChangeSearch={() => {}} isError={true} onRetry={() => {}} />;
}`,...$.parameters?.docs?.source}}}})))()}var ht,gt;function _t(){return(_t=e((()=>{f(),Be(),Ve(),We(),Ye(),Ze(),Qe(),$e(),et(),nt(),it(),ot(),ct(),ut(),ft(),mt(),ht={title:`Other/MenuOrganization`,component:d,parameters:{layout:`fullscreen`,docs:{description:{component:`MenuOrganization - может включать:
Поиск по организациям(реализован внутри компонента, так же есть возможность
добавить кастомный) Фильтрацию организаций по группам

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=823-377672&t=zglQt2Lzg7Gl5dL8-0)`}}}},gt=[`Interaction`,`BasicUsage`,`ActionInFooter`,`NameCurrentOrganizationGroup`,`FilteringByGroups`,`Loading`,`LazyLoading`,`Disabled`,`NoData`,`WithError`,`ButtonCurrentOrganization`,`OnOpen`,`Custom`,`PopoverPositioning`,`NotSelectedCurrentOrganization`]})))()}_t();export{x as ActionInFooter,w as BasicUsage,T as ButtonCurrentOrganization,A as Custom,M as Disabled,F as FilteringByGroups,I as Interaction,z as LazyLoading,V as Loading,U as NameCurrentOrganizationGroup,G as NoData,q as NotSelectedCurrentOrganization,Y as OnOpen,Z as PopoverPositioning,$ as WithError,gt as __namedExportsOrder,ht as default};