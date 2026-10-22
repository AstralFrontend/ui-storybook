import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,Va as n,w as r,xa as i}from"./preview-BQGJfZhY.js";import{c as a,s as o}from"./DataGrid-CVlNew0W.js";import{n as s,t as c}from"./DashboardLayout-sh5Z148V.js";import{i as l,t as u}from"./PageContent-BCOcKBqR.js";import{n as d,t as f}from"./DataGridColumnHintIcon-JuH-yCql.js";import{t as p}from"./PageLayout-u3A-WSdi.js";import{t as m}from"./PageLayout-BZFwZ2Ww.js";import{$t as h,K as g,U as _,at as v,in as y,rt as b,st as x,t as S,yt as C}from"./common-B210jmrK.js";import{t as w}from"./groupedColumnsData-CDV9aELb.js";import{n as T,t as E}from"./error-_dxK9GiT.js";var D,O;function k(){return(k=e((()=>{r(),a(),g(),D=i(),O=()=>(0,D.jsx)(t,{imagesMap:{defaultErrorImgSrc:``,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,D.jsx)(x,{children:(0,D.jsx)(o,{keyId:`id`,rows:[],columns:C,onRetry:()=>{},noDataOptions:{action:{text:`Сбросить фильтры`,onClick:()=>{}}}})})}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: '',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid keyId="id" rows={[]} columns={FAKE_GROUPED_COLUMNS} onRetry={() => {}} noDataOptions={{
        action: {
          text: 'Сбросить фильтры',
          onClick: () => {}
        }
      }} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{c(),S(),u(),m(),_(),a(),g(),A=i(),j=[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`,pinned:`left`},{label:`К продлению`,pinned:`left`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`100px`,align:`center`}]},{label:`Продлено`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`100px`,align:`center`}]},{label:`Общий отвал`,children:[{field:`generalPaid`,label:`Платных`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`generalIts`,label:`ИТС`,width:`1fr`,minWidth:`100px`,align:`center`}]},{field:`averageWaste`,label:`Средний отвал`,width:`1fr`,minWidth:`150px`,align:`center`},{label:`Действующий на конец периода`,children:[{field:`currentPaid`,label:`Платных`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`currentIts`,label:`ИТС`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`currentUl`,label:`ЮЛ`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`currentIp`,label:`ИП`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`currentAll`,label:`Всего`,width:`1fr`,minWidth:`100px`,align:`center`}]},{label:`% Отвала`,pinned:`right`,children:[{field:`percentPaid`,label:`Платных`,width:`1fr`,minWidth:`100px`,align:`center`},{field:`percentIts`,label:`ИТС`,width:`1fr`,minWidth:`100px`,align:`center`}]}],M=()=>(0,A.jsxs)(s,{children:[(0,A.jsx)(y,{}),(0,A.jsx)(s.Main,{children:(0,A.jsx)(p,{header:h,content:(0,A.jsx)(l,{children:(0,A.jsx)(o,{keyId:`id`,rows:w,columns:j,onRetry:()=>{}})})})})]}),M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <DashboardLayout>
      <MockDashboardHeader />
      <DashboardLayout.Main>
        <PageLayout header={MockHeader} content={<PageContent>
              <DataGrid keyId="id" rows={groupedColumnsData} columns={columns} onRetry={() => {}} />
            </PageContent>} />
      </DashboardLayout.Main>
    </DashboardLayout>;
}`,...M.parameters?.docs?.source}}}})))()}var P,F,I;function L(){return(L=e((()=>{P=n(),a(),g(),F=i(),I=()=>{let[e,t]=(0,P.useState)([]);return(0,F.jsx)(b,{children:(0,F.jsx)(o,{keyId:`id`,rows:w,columns:C,onRetry:()=>{},selectedRows:e,onSelectRow:e=>t(e)})})}})))()}var R,z;function B(){return(B=e((()=>{r(),a(),g(),R=i(),z=()=>(0,R.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,R.jsx)(x,{children:(0,R.jsx)(o,{keyId:`id`,rows:[],columns:C,isError:!0,errorMsg:`Ошибка 500`,onRetry:()=>{}})})}),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid keyId="id" rows={[]} columns={FAKE_GROUPED_COLUMNS} isError errorMsg="Ошибка 500" onRetry={() => {}} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H;function U(){return(U=e((()=>{f(),a(),g(),V=i(),H=()=>(0,V.jsx)(b,{children:(0,V.jsx)(o,{rows:w,columns:[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`},{label:`К продлению`,columnHint:(0,V.jsx)(d,{title:`К продлению`,note:`Группа колонок с данными о предстоящих продлениях`}),children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`,columnHint:(0,V.jsx)(d,{title:`Платных`,note:`Количество платных продлений`})},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},{label:`Продлено`,children:[{field:`extendedPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extendedIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]}],keyId:`id`,onRetry:()=>{}})}),H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const columns: DataGridColumns<DataTypeGroupedColumns>[] = [{
    field: 'region',
    label: 'Регион',
    width: '1fr',
    minWidth: '200px'
  }, {
    label: 'К продлению',
    columnHint: <DataGridColumnHintIcon title="К продлению" note="Группа колонок с данными о предстоящих продлениях" />,
    children: [{
      field: 'extensionPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px',
      columnHint: <DataGridColumnHintIcon title="Платных" note="Количество платных продлений" />
    }, {
      field: 'extensionIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, {
    label: 'Продлено',
    children: [{
      field: 'extendedPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'extendedIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }];
  return <DataGridStoryContainer>
      <DataGrid rows={groupedColumnsData} columns={columns} keyId="id" onRetry={() => {}} />
    </DataGridStoryContainer>;
}`,...H.parameters?.docs?.source},description:{story:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",...H.parameters?.docs?.description}}};try{H.displayName=`WithHintIcons`,H.__docgenInfo={description:"В заголовок колонки можно добавить HintIcon через передачу в поле `columnHint` компонента `DataGridColumnHintIcon`",displayName:`WithHintIcons`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/testStories/groupedColumns/WithHintIcons.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var W,G;function K(){return(K=e((()=>{T(),r(),a(),g(),W=i(),G=()=>(0,W.jsx)(t,{imagesMap:{defaultErrorImgSrc:E,noDataImgSrc:`../no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,W.jsx)(x,{children:(0,W.jsx)(o,{keyId:`id`,rows:[],columns:[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`,hideTitleOnMobile:!0},{label:`К продлению`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},{label:`Продлено`,children:[{field:`extendedPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`extendedIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},{label:`Общий отвал`,isHideOnMobile:!0,children:[{field:`generalPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`generalIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},{label:`% Отвала`,children:[{field:`percentPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`percentIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`}]},{field:`averageWaste`,label:`Средний отвал за год`,width:`1fr`,minWidth:`150px`,align:`center`},{label:`Действующий на конец периода`,children:[{field:`currentPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`},{field:`currentIts`,label:`ИТС`,width:`1fr`,minWidth:`55px`},{field:`currentUl`,label:`ЮЛ`,width:`1fr`,minWidth:`55px`},{field:`currentIp`,label:`ИП`,width:`1fr`,minWidth:`55px`},{field:`currentAll`,label:`Всего`,width:`1fr`,minWidth:`55px`}]}],isLoading:!0,onRowClick:()=>{},onRetry:()=>{}})})}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = '../no-data-stub.svg';
  const columns: DataGridColumns<DataTypeGroupedColumns>[] = [{
    field: 'region',
    label: 'Регион',
    width: '1fr',
    minWidth: '200px',
    hideTitleOnMobile: true
  }, {
    label: 'К продлению',
    children: [{
      field: 'extensionPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'extensionIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, {
    label: 'Продлено',
    children: [{
      field: 'extendedPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'extendedIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, {
    label: 'Общий отвал',
    isHideOnMobile: true,
    children: [{
      field: 'generalPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'generalIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, {
    label: '% Отвала',
    children: [{
      field: 'percentPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'percentIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px'
    }]
  }, {
    field: 'averageWaste',
    label: 'Средний отвал за год',
    width: '1fr',
    minWidth: '150px',
    align: 'center'
  }, {
    label: 'Действующий на конец периода',
    children: [{
      field: 'currentPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px'
    }, {
      field: 'currentIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '55px'
    }, {
      field: 'currentUl',
      label: 'ЮЛ',
      width: '1fr',
      minWidth: '55px'
    }, {
      field: 'currentIp',
      label: 'ИП',
      width: '1fr',
      minWidth: '55px'
    }, {
      field: 'currentAll',
      label: 'Всего',
      width: '1fr',
      minWidth: '55px'
    }]
  }];
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: errorIllustration,
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <StoryWrapper>
        <DataGrid keyId="id" rows={[]} columns={columns} isLoading={true} onRowClick={() => {}} onRetry={() => {}} />
      </StoryWrapper>
    </ConfigProvider>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{q=n(),a(),g(),J=i(),Y=()=>{let[e,t]=(0,q.useState)(),n=[{field:`region`,label:`Регион`,width:`1fr`,minWidth:`200px`},{label:`К продлению`,children:[{field:`extensionPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`,sortable:!0},{field:`extensionIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`,sortable:!0}]},{label:`Продлено`,children:[{field:`extendedPaid`,label:`Платных`,width:`1fr`,minWidth:`75px`,sortable:!0},{field:`extendedIts`,label:`ИТС`,width:`1fr`,minWidth:`75px`,sortable:!0}]}],r=e=>{t(e)},i=(0,q.useMemo)(()=>{if(!e)return w;let{fieldId:t,sort:n}=e;return[...w].sort((e,r)=>{let i=e[t],a=r[t];if(i===a)return 0;let o=i<a?-1:1;return n===`desc`?-o:o})},[e]);return(0,J.jsx)(b,{children:(0,J.jsx)(o,{keyId:`id`,rows:i,columns:n,sorting:e,onSort:r,onRetry:()=>{}})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [sorting, setSorting] = useState<DataGridSort<SortField>>();
  const columns: DataGridColumns<DataTypeGroupedColumns>[] = [{
    field: 'region',
    label: 'Регион',
    width: '1fr',
    minWidth: '200px'
  }, {
    label: 'К продлению',
    children: [{
      field: 'extensionPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px',
      sortable: true
    }, {
      field: 'extensionIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px',
      sortable: true
    }]
  }, {
    label: 'Продлено',
    children: [{
      field: 'extendedPaid',
      label: 'Платных',
      width: '1fr',
      minWidth: '75px',
      sortable: true
    }, {
      field: 'extendedIts',
      label: 'ИТС',
      width: '1fr',
      minWidth: '75px',
      sortable: true
    }]
  }];
  const handleSort = (newSorting?: DataGridSort<SortField>) => {
    setSorting(newSorting);
  };
  const sortedRows = useMemo(() => {
    if (!sorting) {
      return groupedColumnsData;
    }
    const {
      fieldId,
      sort: sortOrder
    } = sorting;
    return [...groupedColumnsData].sort((a, b) => {
      const valueA = a[fieldId];
      const valueB = b[fieldId];
      if (valueA === valueB) {
        return 0;
      }
      const comparison = valueA < valueB ? -1 : 1;
      return sortOrder === 'desc' ? -comparison : comparison;
    });
  }, [sorting]);
  return <DataGridStoryContainer>
      <DataGrid<DataTypeGroupedColumns, SortField> keyId="id" rows={sortedRows} columns={columns} sorting={sorting} onSort={handleSort} onRetry={() => {}} />
    </DataGridStoryContainer>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{a(),g(),k(),N(),L(),B(),U(),K(),X(),Z={title:`Table/DataGrid/Tests/GroupedColumns`,component:o,decorators:v,parameters:{layout:`fullscreen`}},Q=[`PinnedColumns`,`WithLoading`,`NoData`,`WithCheckbox`,`WithError`,`WithHintIcons`,`WithSorting`]})))()}$();export{O as NoData,M as PinnedColumns,I as WithCheckbox,z as WithError,H as WithHintIcons,G as WithLoading,Y as WithSorting,Q as __namedExportsOrder,Z as default};