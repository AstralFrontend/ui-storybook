import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{dt as t,ft as n,ji as r,ya as i,yn as a,za as o}from"./preview-Z1rCd2zM.js";import{c as s,s as c}from"./DataGrid-C9nb3Q7a.js";import{l as ee,t as te}from"./DataGridActionCell-GUQH1H1O.js";import{n as l,t as ne}from"./DashboardLayout-Dlyt2p2i.js";import{t as re}from"./DataGridActionCell-DW5dhqo3.js";import{t as ie}from"./DataGridPagination-B125GeqU.js";import{t as ae}from"./DataGridPagination-Cdx6D1ts.js";import{n as oe,t as se}from"./BinOutlineMd-Krajzn5L.js";import{i as ce,t as le}from"./PageContent-lscCygVP.js";import{t as ue}from"./PageLayout-BLX6GfO5.js";import{t as de}from"./PageLayout-2VflXQ2o.js";import{At as u,K as d,Tt as f,U as fe,at as p,ft as m,kt as h,ln as pe,lt as g,mt as _,st as me,t as he,tn as ge,tt as _e,wt as v}from"./common-BHD-Wsz_.js";import{n as ve,t as ye}from"./StoryControlWrapper-CrvAmx0R.js";var y,b,x;function S(){return(S=e((()=>{y=o(),ne(),he(),le(),de(),fe(),s(),d(),b=i(),x=()=>{let e=f.slice(0,25),t=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],[n,r]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{setTimeout(()=>{r(!1)},1500)},[]),(0,b.jsx)(g,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(pe,{}),(0,b.jsx)(l.Main,{children:(0,b.jsx)(ue,{header:ge,content:(0,b.jsx)(ce,{children:(0,b.jsx)(c,{keyId:`id`,rows:e,columns:t,isLoading:n,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})})})]})})};try{x.displayName=`BasicUsage`,x.__docgenInfo={description:`Для фиксирования колонки в DataGrid необходимо в конфигурации указать свойство \`pinned\` со значением \`left\` или \`right\`.

**Важно:** Указывать min-width для колонок обязательно, иначе контент внутри таблицы сожмется. [PinnedColumnsMinWidth](/story/table-datagrid-pinnedColumns--pinned-columns-min-width)

\`\`\`tsx
const columns: DataGridColumns<DataType>[] = [
  {
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    minWidth: '150px',
    pinned: 'left',
  },
\`\`\``,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const rows = fakeData.slice(0, 25);
  const columns: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    width: '2fr',
    minWidth: '200px',
    pinned: 'left'
  }, {
    field: 'recipient',
    label: 'Получатель',
    sortable: true,
    width: '1fr',
    minWidth: '350px'
  }, {
    field: 'recipient',
    label: 'Отправитель',
    sortable: true,
    width: '1fr',
    minWidth: '350px'
  }, {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    width: '1fr',
    minWidth: '300px',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'createDate',
    label: 'Дата Начала',
    sortable: true,
    width: '1fr',
    minWidth: '300px',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }, {
    field: 'createDate',
    label: 'Дата Окончания',
    sortable: true,
    width: '1fr',
    minWidth: '300px',
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString(),
    pinned: 'right'
  }];
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  const handleRowClick = (row: DataType) => console.log('row clicked', row);
  return <StoryWrapper>
      <DashboardLayout>
        <MockDashboardHeader />
        <DashboardLayout.Main>
          <PageLayout header={MockHeader} content={<PageContent>
                <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={columns} isLoading={isLoading} onRowClick={handleRowClick} onRetry={() => {}} />
              </PageContent>} />
        </DashboardLayout.Main>
      </DashboardLayout>
    </StoryWrapper>;
}`,...x.parameters?.docs?.source},description:{story:`Для фиксирования колонки в DataGrid необходимо в конфигурации указать свойство \`pinned\` со значением \`left\` или \`right\`.

**Важно:** Указывать min-width для колонок обязательно, иначе контент внутри таблицы сожмется. [PinnedColumnsMinWidth](/story/table-datagrid-pinnedColumns--pinned-columns-min-width)

\`\`\`tsx
const columns: DataGridColumns<DataType>[] = [
  {
    field: 'documentName',
    label: 'Наименование документа',
    sortable: true,
    minWidth: '150px',
    pinned: 'left',
  },
\`\`\``,...x.parameters?.docs?.description}}}})))()}var C,w,T,E;function D(){return(D=e((()=>{ye(),se(),re(),a(),s(),h(),d(),C=i(),w=r(_e)`
  width: 600px;
  justify-self: center;
`,T=r(g)`
  height: 500px;
  align-items: center;
`,E=({gridViewMode:e,changeGridViewMode:t})=>{let n={main:[{icon:(0,C.jsx)(oe,{}),name:`Удалить`,needConfirm:!0,confirmText:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},onClick:e=>alert(`Delete: ${JSON.stringify(e)}`)}]},r=u([...v.map(({pinned:e,...t})=>t),{field:`actions`,minWidth:`100px`,label:`Действия`,align:`center`,pinned:`right`,renderCell:e=>(0,C.jsx)(te,{row:e,mainActions:()=>(0,C.jsx)(ee,{actions:n.main})})}]);return(0,C.jsx)(ve,{controls:(0,C.jsx)(w,{gridViewMode:e,changeGridViewMode:t}),children:(0,C.jsx)(T,{children:(0,C.jsx)(p,{children:(0,C.jsx)(m,{children:(0,C.jsx)(c,{rows:f.slice(0,5),columns:r,keyId:`id`,onRetry:()=>{},gridViewMode:e})})})})})};try{E.displayName=`ConfirmActions`,E.__docgenInfo={description:``,displayName:`ConfirmActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/ConfirmActions.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const actions: DataGridActions<DataType> = {
    main: [{
      icon: <BinOutlineMd />,
      name: 'Удалить',
      needConfirm: true,
      confirmText: 'Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?',
      confirmButtonProps: {
        text: 'Да, удалить',
        isAccented: true
      },
      onClick: row => alert(\`Delete: \${JSON.stringify(row)}\`)
    }]
  };
  const columns = makeColumns([...PINNED_COLUMNS_WITH_MIN_WIDTH.map(({
    pinned,
    ...rest
  }) => rest), {
    field: 'actions',
    minWidth: '100px',
    label: 'Действия',
    align: 'center',
    pinned: 'right',
    renderCell: row => {
      return <DataGridActionCell row={row} mainActions={() => <DataGridMainActions actions={actions.main} />} />;
    }
  }]);
  return <StoryControlWrapper controls={<StyledGridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StyledStoryWrapper>
        <DataGridStoryContainer>
          <Wrapper>
            <DataGrid rows={fakeData.slice(0, 5)} columns={columns} keyId="id" onRetry={() => {}} gridViewMode={gridViewMode} />
          </Wrapper>
        </DataGridStoryContainer>
      </StyledStoryWrapper>
    </StoryControlWrapper>;
}`,...E.parameters?.docs?.source}}}})))()}var O,k,A,j,M,N;function P(){return(P=e((()=>{a(),t(),s(),h(),d(),O=i(),k=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,pinned:`left`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,pinned:`left`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],A=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],j=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,M=r.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,N=()=>{let e=f.slice(0,5);return(0,O.jsxs)(j,{children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{variant:`h5`,gutterBottom:!0,children:`c Pinned left`}),(0,O.jsx)(M,{children:(0,O.jsx)(c,{keyId:`id`,rows:e,columns:u(k),onRetry:()=>{}})})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(n,{variant:`h5`,gutterBottom:!0,children:`c Pinned right`}),(0,O.jsx)(M,{children:(0,O.jsx)(c,{keyId:`id`,rows:e,columns:u(A),onRetry:()=>{}})})]})]})};try{N.displayName=`PinnedColumns`,N.__docgenInfo={description:`Колонки могут быть закреплены слева и справа.

**Важно:** Колонки должны быть закреплены в последовательности слева направо(нельзя закреплять колонку в центре если до этого нет закрепленных колонки слева или справа)

\`\`\`tsx
 const columns: DataGridColumns<DataType>[] = [
      {
        field: 'documentName',
        label: 'Наименование документа',
        sortable: true,
        width: '2fr',
        minWidth: '130px',
      },
      {
        field: 'recipient',
        label: 'Получатель',
        sortable: true,
        width: '1fr',
        minWidth: '150px',
        pinned: 'left', // Нельзя так как первая колонка не закреплена слева
        pinned: 'right', // Можно так как справа есть закрепленная колонка
      },
      {
        field: 'recipient',
        label: 'Отправитель',
        sortable: true,
        width: '1fr',
        minWidth: '150px',
        pinned: 'right', // Можно так как это первая колонка закреплена справа
      },
    ];`,displayName:`PinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/PinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const rows = fakeData.slice(0, 5);
  return <StoryWrapper>
      <div>
        <Typography variant="h5" gutterBottom>
          c Pinned left
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(LeftPinnedColumns)} onRetry={() => {}} />
        </Wrapper>
      </div>

      <div>
        <Typography variant="h5" gutterBottom>
          c Pinned right
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(RightPinnedColumns)} onRetry={() => {}} />
        </Wrapper>
      </div>
    </StoryWrapper>;
}`,...N.parameters?.docs?.source},description:{story:`Колонки могут быть закреплены слева и справа.

**Важно:** Колонки должны быть закреплены в последовательности слева направо(нельзя закреплять колонку в центре если до этого нет закрепленных колонки слева или справа)

\`\`\`tsx
 const columns: DataGridColumns<DataType>[] = [
      {
        field: 'documentName',
        label: 'Наименование документа',
        sortable: true,
        width: '2fr',
        minWidth: '130px',
      },
      {
        field: 'recipient',
        label: 'Получатель',
        sortable: true,
        width: '1fr',
        minWidth: '150px',
        pinned: 'left', // Нельзя так как первая колонка не закреплена слева
        pinned: 'right', // Можно так как справа есть закрепленная колонка
      },
      {
        field: 'recipient',
        label: 'Отправитель',
        sortable: true,
        width: '1fr',
        minWidth: '150px',
        pinned: 'right', // Можно так как это первая колонка закреплена справа
      },
    ];`,...N.parameters?.docs?.description}}}})))()}var F,I,L,R,z;function B(){return(B=e((()=>{a(),t(),s(),h(),d(),F=i(),I=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,pinned:`left`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],L=r.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,R=r.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,z=()=>{let e=f.slice(0,5);return(0,F.jsxs)(L,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(n,{variant:`h5`,color:`error`,gutterBottom:!0,children:`❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния`}),(0,F.jsx)(R,{children:(0,F.jsx)(c,{keyId:`id`,rows:e,columns:u(I),onRetry:()=>{}})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(n,{variant:`h5`,color:`success`,gutterBottom:!0,children:`✅ С minWidth - колонки защищены от чрезмерного сжатия`}),(0,F.jsx)(R,{children:(0,F.jsx)(c,{keyId:`id`,rows:e,columns:u(v),onRetry:()=>{}})})]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const rows = fakeData.slice(0, 5);
  return <StoryWrapper>
      <div>
        <Typography variant="h5" color="error" gutterBottom>
          ❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(COLUMNS_WITHOUT_MIN_WIDTH)} onRetry={() => {}} />
        </Wrapper>
      </div>

      <div>
        <Typography variant="h5" color="success" gutterBottom>
          ✅ С minWidth - колонки защищены от чрезмерного сжатия
        </Typography>
        <Wrapper>
          <DataGrid<DataType, SortField> keyId="id" rows={rows} columns={makeColumns(PINNED_COLUMNS_WITH_MIN_WIDTH)} onRetry={() => {}} />
        </Wrapper>
      </div>
    </StoryWrapper>;
}`,...z.parameters?.docs?.source}}}})))()}var V,H,be,xe,U;function Se(){return(Se=e((()=>{ye(),V=o(),a(),d(),H=i(),be=r(_e)`
  width: 600px;
  justify-self: center;
`,xe=r(g)`
  height: 500px;
  align-items: center;
`,U=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,V.useState)([]);return(0,H.jsx)(ve,{controls:(0,H.jsx)(be,{gridViewMode:e,changeGridViewMode:t}),children:(0,H.jsx)(xe,{children:(0,H.jsx)(p,{children:(0,H.jsx)(m,{children:(0,H.jsx)(_,{rows:f.slice(0,5),selectedRows:n,onSelectRow:e=>r(e),columns:v,gridViewMode:e})})})})})};try{U.displayName=`WithCheckbox`,U.__docgenInfo={description:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,displayName:`WithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithCheckbox.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
  gridViewMode,
  changeGridViewMode
}: DataGridStoryArgs) => {
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  return <StoryControlWrapper controls={<StyledGridViewModeRadioGroup gridViewMode={gridViewMode} changeGridViewMode={changeGridViewMode} />}>
      <StyledStoryWrapper>
        <DataGridStoryContainer>
          <Wrapper>
            <MockDataGrid rows={fakeData.slice(0, 5)} selectedRows={selected} onSelectRow={handleSelect} columns={PINNED_COLUMNS_WITH_MIN_WIDTH} gridViewMode={gridViewMode} />
          </Wrapper>
        </DataGridStoryContainer>
      </StyledStoryWrapper>
    </StoryControlWrapper>;
}`,...U.parameters?.docs?.source},description:{story:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,...U.parameters?.docs?.description}}}})))()}var W,G;function Ce(){return(Ce=e((()=>{d(),W=i(),G=()=>(0,W.jsx)(p,{children:(0,W.jsx)(m,{children:(0,W.jsx)(_,{rows:f.slice(0,5),columns:v,isDisabled:!0})})});try{G.displayName=`WithDisabledContent`,G.__docgenInfo={description:"Prop `disabled` позволяет заблокировать контент",displayName:`WithDisabledContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithDisabledContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <DataGridStoryContainer>
      <Wrapper>
        <MockDataGrid rows={fakeData.slice(0, 5)} columns={PINNED_COLUMNS_WITH_MIN_WIDTH} isDisabled />
      </Wrapper>
    </DataGridStoryContainer>;
}`,...G.parameters?.docs?.source},description:{story:"Prop `disabled` позволяет заблокировать контент",...G.parameters?.docs?.description}}}})))()}var K,q,we,J;function Te(){return(Te=e((()=>{K=o(),d(),q=i(),we=[`123456789`,`2`,`4`],J=()=>{let e=f.slice(0,5),[t,n]=(0,K.useState)([]),r=e=>n(e),i=(0,K.useCallback)(e=>we.includes(e.id)?{mode:`row`,reason:`Нет доступа`}:void 0,[]);return(0,q.jsx)(p,{children:(0,q.jsx)(m,{children:(0,q.jsx)(_,{rows:e,columns:v,selectedRows:t,onSelectRow:r,getRowDisabled:i})})})};try{J.displayName=`WithDisabledRow`,J.__docgenInfo={description:"`mode: 'row'` в `getRowDisabled` блокирует всю строку во всех секциях закреплённых колонок. Подробнее о `getRowDisabled` и режимах блокировки в [DisabledRows](/story/table-datagrid--disabled-rows)",displayName:`WithDisabledRow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithDisabledRow.story.tsx`,methods:[],props:{},tags:{}}}catch{}J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const data = fakeData.slice(0, 5);
  const [selected, setSelected] = useState<DataType[]>([]);
  const handleSelect = (rows: DataType[]) => setSelected(rows);
  const getRowDisabled = useCallback((row: DataType): DataGridRowDisabled | undefined => DISABLED_ROW_IDS.includes(row.id) ? {
    mode: 'row',
    reason: 'Нет доступа'
  } : undefined, []);
  return <DataGridStoryContainer>
      <Wrapper>
        <MockDataGrid rows={data} columns={PINNED_COLUMNS_WITH_MIN_WIDTH} selectedRows={selected} onSelectRow={handleSelect} getRowDisabled={getRowDisabled} />
      </Wrapper>
    </DataGridStoryContainer>;
}`,...J.parameters?.docs?.source},description:{story:"`mode: 'row'` в `getRowDisabled` блокирует всю строку во всех секциях закреплённых колонок. Подробнее о `getRowDisabled` и режимах блокировки в [DisabledRows](/story/table-datagrid--disabled-rows)",...J.parameters?.docs?.description}}}})))()}var Y,X,Z,Q;function Ee(){return(Ee=e((()=>{Y=o(),ae(),d(),X=i(),Z=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],Q=()=>{let[e,t]=(0,Y.useState)(1),[n,r]=(0,Y.useState)([]),[i,a]=(0,Y.useState)(!0);return(0,Y.useEffect)(()=>{setTimeout(()=>{r(f.slice((e-1)*10,e*10)),a(!1)},1500)},[]),(0,X.jsx)(g,{children:(0,X.jsx)(p,{children:(0,X.jsx)(_,{rows:n,columns:Z,footer:(0,X.jsx)(ie,{rowsPerPage:10,totalCount:i?0:f.length,onChange:(e,n)=>{a(!0),r([]),t(n),setTimeout(()=>{a(!1),r(f.slice((n-1)*10,n*10))},1500)},page:e}),isLoading:i})})})};try{Q.displayName=`WithPagination`,Q.__docgenInfo={description:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const [page, setPage] = useState<number>(1);
  const [slicedData, setSlicedData] = useState<DataType[]>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlicedData(fakeData.slice((page - 1) * 10, page * 10));
      setLoading(false);
    }, 1500);
  }, []);
  const handleChangePage = (_event: ChangeEvent<unknown>, newPage: number): void => {
    setLoading(true);
    setSlicedData([]);
    setPage(newPage);
    setTimeout(() => {
      setLoading(false);
      setSlicedData(fakeData.slice((newPage - 1) * 10, newPage * 10));
    }, 1500);
  };
  return <StoryWrapper>
      <DataGridStoryContainer>
        <MockDataGrid rows={slicedData} columns={FAKE_COLUMNS} footer={<DataGridPagination rowsPerPage={10} totalCount={isLoading ? 0 : fakeData.length} onChange={handleChangePage} page={page} />} isLoading={isLoading} />
      </DataGridStoryContainer>
    </StoryWrapper>;
}`,...Q.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,...Q.parameters?.docs?.description}}}})))()}var De,Oe;function $(){return($=e((()=>{s(),d(),S(),D(),P(),B(),Se(),Ce(),Te(),Ee(),De={title:`Table/DataGrid/PinnedColumns`,component:c,decorators:me,parameters:{layout:`fullscreen`,docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=9131-39473&t=JNG2fCJnnhwn3rFy-0)`}}}},Oe=[`PinnedColumns`,`BasicUsage`,`WithPagination`,`WithCheckbox`,`PinnedColumnsMinWidth`,`ConfirmActions`,`WithDisabledRow`,`WithDisabledContent`]})))()}$();export{x as BasicUsage,E as ConfirmActions,N as PinnedColumns,z as PinnedColumnsMinWidth,U as WithCheckbox,G as WithDisabledContent,J as WithDisabledRow,Q as WithPagination,Oe as __namedExportsOrder,De as default};