import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,b as n,xa as r,y as i}from"./preview-D_6KtVhH.js";import{t as a}from"./Link-BMyKEaZn.js";import{t as o}from"./Link-BoNEUVYQ.js";import{t as s}from"./Alert-FZ621f1_.js";import{t as c}from"./Alert-DXJYtyZ5.js";import{c as l,n as u,r as d,s as f,t as ee}from"./MenuOrganization-Cm_CLYG7.js";import{n as p,t as m}from"./DashboardLayout-CNUu_lWC.js";import{t as h}from"./ProductSwitcher-DTZWh4lH.js";import{t as g}from"./PageLayout-OgWaH4nN.js";import{t as _}from"./PageLayout-DItMWYtO.js";import{t as v}from"./ProductSwitcher-DlODyBLE.js";import{n as y,t as b}from"./AddOutlineMd-B1pZSvoY.js";import{n as x,t as S}from"./CompanyOutlineMd-Cqy8WwRa.js";import{n as C,t as w}from"./UikitLogo-W7xF2N5Q.js";import{r as T,t as E}from"./faker-BdnmCb6c.js";import{I as D,i as O,o as k,s as A,t as j}from"./common-dMkNk5D3.js";var M,N,P;function F(){return(F=e((()=>{M=t(),d(),O(),N=r(),P=()=>{let[e,t]=(0,M.useState)([]),[n,r]=(0,M.useState)(!1),[i,a]=(0,M.useState)({...A({length:1})[0],linkButton:{name:`Перейти к данным организации`,component:`a`,href:`/`}});return(0,N.jsx)(u,{organizations:e,currentOrganization:i,onChange:e=>{a(e)},onRetry:()=>{},action:{text:`Добавить организацию`,onClick:()=>console.log(`click`)},isLoading:n,onOpen:()=>{e.length<1&&(r(!0),setTimeout(()=>{t([...A().slice(0,7)]),r(!1)},1500))}})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
  const handleOpen = () => {
    if (fakeOrganizationList.length < 1) {
      setIsLoading(true);
      setTimeout(() => {
        setFakeOrganizationList([...makeOrganizationList().slice(0, 7)]);
        setIsLoading(false);
      }, 1500);
    }
  };
  const handleSelectOrganization = (organization: Organization & {
    active?: boolean;
  }) => {
    setSelected(organization);
  };
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} action={{
    text: 'Добавить организацию',
    onClick: () => console.log('click')
  }} isLoading={isLoading} onOpen={handleOpen} />;
}`,...P.parameters?.docs?.source}}}})))()}var I,L,R;function z(){return(z=e((()=>{I=t(),b(),d(),O(),L=r(),R=()=>{let e=[...k()],[t,n]=(0,I.useState)({...e[0],linkButton:{name:`Перейти к данным организации`,component:`a`,href:`/`}});return(0,L.jsx)(u,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},onRetry:()=>{},action:{text:`Добавить организацию`,startIcon:(0,L.jsx)(y,{}),onClick:()=>console.log(`click`)}})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = [...makeLongOrganizationNameList()];
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
    linkButton?: LinkButtonProps;
  }>({
    ...fakeOrganizationList[0],
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
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} />;
}`,...R.parameters?.docs?.source}}}})))()}var B,V,H;function U(){return(U=e((()=>{B=t(),b(),d(),O(),V=r(),H=()=>{let e=A().slice(0,1),[t,n]=(0,B.useState)({...e[0],linkButton:{name:`Перейти к данным организации`,component:`a`,href:`/`}});return(0,V.jsx)(u,{organizations:e,currentOrganization:t,onChange:e=>{n(e)},onRetry:()=>{},action:{text:`Добавить организацию`,startIcon:(0,V.jsx)(y,{}),onClick:()=>console.log(`click`)}})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const fakeOrganizationList = makeOrganizationList().slice(0, 1);
  const [selected, setSelected] = useState<Organization & {
    active?: boolean;
    linkButton?: LinkButtonProps;
  }>({
    ...fakeOrganizationList[0],
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
  return <MenuOrganization organizations={fakeOrganizationList} currentOrganization={selected} onChange={handleSelectOrganization} onRetry={() => {}} action={{
    text: 'Добавить организацию',
    startIcon: <AddOutlineMd />,
    onClick: () => console.log('click')
  }} />;
}`,...H.parameters?.docs?.source}}}})))()}var W,G;function K(){return(K=e((()=>{C(),b(),S(),c(),m(),j(),f(),o(),_(),v(),T(),i(),d(),O(),W=r(),G=()=>{let e=A();return(0,W.jsx)(D,{children:(0,W.jsxs)(p,{children:[(0,W.jsx)(p.Header,{productSwitcher:()=>(0,W.jsx)(h,{getProducts:E}),product:{name:`Астрал.UI`,logo:()=>(0,W.jsx)(w,{})},profile:{displayName:`Григорьев Виталий`,annotation:`vitatiy_grig@mail.ru`,avatar:{alt:`Григорьев Виталий`,children:`ГВ`},exitButton:{onClick:()=>console.log(`Выход`)}},menuOrganization:()=>(0,W.jsx)(u,{organizations:e,currentOrganization:e[0],action:{text:`Добавить организацию`,startIcon:(0,W.jsx)(y,{}),onClick:()=>console.log(`click`)},onRetry:()=>{},onChange:()=>{}})}),(0,W.jsx)(p.Sidebar,{header:(0,W.jsx)(l,{startIcon:(0,W.jsx)(y,{}),children:`Добавить документ`}),menu:{items:[[`organizations`,{icon:(0,W.jsx)(x,{}),text:`Мои организации`,active:!0}]]}}),(0,W.jsx)(p.Main,{alert:(0,W.jsxs)(s,{severity:`warning`,children:[`29 января 2025г. в период с 10:00 до 11:00 по Московскому времени приложение будет временно недоступно.`,` `,(0,W.jsx)(a,{href:`/`,target:`_blank`,children:`Подробнее`})]}),children:(0,W.jsx)(g,{header:{title:`Черновики`,actions:{main:[{text:`Основное действие`,startIcon:(0,W.jsx)(y,{})}],secondary:[{text:`Кнопка`}]}},content:{children:(0,W.jsx)(n,{title:`Документы отсутствуют`})}})})]})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const organizationList = makeOrganizationList();
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
      }} menuOrganization={() => <MenuOrganization organizations={organizationList} currentOrganization={organizationList[0]} action={{
        text: 'Добавить организацию',
        startIcon: <AddOutlineMd />,
        onClick: () => console.log('click')
      }} onRetry={() => {}} onChange={() => {}} />} />
        <DashboardLayout.Sidebar header={<DashboardSidebarButton startIcon={<AddOutlineMd />}>
              Добавить документ
            </DashboardSidebarButton>} menu={{
        items: [['organizations', {
          icon: <CompanyOutlineMd />,
          text: 'Мои организации',
          active: true
        }]]
      }} />
        <DashboardLayout.Main alert={<Alert severity="warning">
              29 января 2025г. в период с 10:00 до 11:00 по Московскому времени
              приложение будет временно недоступно.{' '}
              <Link href="/" target="_blank">
                Подробнее
              </Link>
            </Alert>}>
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
}`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=t(),C(),b(),S(),m(),j(),f(),ee(),_(),v(),T(),i(),O(),J=r(),Y=()=>{let[e,t]=(0,q.useState)([]),[r,i]=(0,q.useState)(!1),[a,o]=(0,q.useState)({...A({length:1})[0],linkButton:{name:`Перейти к данным организации`,component:`a`,href:`/`}}),s=e=>{o(e)},c=()=>{e.length<1&&(i(!0),setTimeout(()=>{t([...A()]),i(!1)},1500))};return(0,J.jsx)(D,{children:(0,J.jsxs)(p,{mobileHeaderPriorityFeature:`profile`,children:[(0,J.jsx)(p.Header,{productSwitcher:()=>(0,J.jsx)(h,{getProducts:E}),product:{name:`Астрал.UI`,logo:()=>(0,J.jsx)(w,{})},profile:{displayName:`Григорьев Виталий`,annotation:`vitatiy_grig@mail.ru`,avatar:{alt:`Григорьев Виталий`,children:`ГВ`},menuList:[{icon:(0,J.jsx)(x,{}),title:`Мои организации`,onClick:()=>console.log(`Мои организации`)}],exitButton:{onClick:()=>console.log(`Выход`)}},menuOrganization:()=>(0,J.jsx)(u,{organizations:e,currentOrganization:a,onChange:s,action:{text:`Добавить организацию`,startIcon:(0,J.jsx)(y,{}),onClick:()=>console.log(`click`)},onRetry:()=>{},isLoading:r,onOpen:c})}),(0,J.jsx)(p.Sidebar,{header:(0,J.jsx)(l,{startIcon:(0,J.jsx)(y,{}),children:`Добавить документ`}),menu:{items:[[`organizations`,{icon:(0,J.jsx)(x,{}),text:`Мои организации`,active:!0}]]}}),(0,J.jsx)(p.Main,{children:(0,J.jsx)(g,{header:{title:`Черновики`,actions:{main:[{text:`Основное действие`,startIcon:(0,J.jsx)(y,{})}],secondary:[{text:`Кнопка`}]}},content:{children:(0,J.jsx)(n,{title:`Документы отсутствуют`})}})})]})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
      <DashboardLayout mobileHeaderPriorityFeature="profile">
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
        menuList: [{
          icon: <CompanyOutlineMd />,
          title: 'Мои организации',
          onClick: () => console.log('Мои организации')
        }],
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
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{d(),F(),z(),U(),K(),X(),Z={title:`Other/MenuOrganization/Tests`,component:u,parameters:{layout:`fullscreen`}},Q=[`LongOrganization`,`SingleOrganization`,`FewOrganizations`,`WithDashboardAlert`,`WithMenuOrganizationInSidebar`]})))()}$();export{P as FewOrganizations,R as LongOrganization,H as SingleOrganization,G as WithDashboardAlert,Y as WithMenuOrganizationInSidebar,Q as __namedExportsOrder,Z as default};