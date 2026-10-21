import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,dt as n,ft as r,ji as i,xa as a,yn as o}from"./preview-lt0cavAw.js";import{c as s,s as c}from"./DataGrid-u7XO3mhY.js";import{l as ee,t as te}from"./DataGridActionCell-BhAGbbgw.js";import{n as l,t as ne}from"./DashboardLayout-DW2e20AN.js";import{t as re}from"./DataGridActionCell-JWT3UAml.js";import{t as ie}from"./DataGridPagination-CN0u3EjK.js";import{t as ae}from"./DataGridPagination-6fwEq6Le.js";import{n as oe,t as se}from"./BinOutlineMd-CvNmzySh.js";import{i as ce,t as le}from"./PageContent-BctnCtXi.js";import{t as ue}from"./PageLayout-CWWJh_-4.js";import{t as de}from"./PageLayout-Dfa3VIck.js";import{$t as fe,Ct as u,Dt as d,K as f,Ot as p,St as m,U as pe,at as me,ft as h,in as he,rt as g,st as _,t as ge,tt as _e,ut as v}from"./common-D51z2-5l.js";import{n as ve,t as ye}from"./StoryControlWrapper-pI3of-xL.js";var y,b,x;function S(){return(S=e((()=>{y=t(),ne(),ge(),le(),de(),pe(),s(),f(),b=a(),x=()=>{let e=u.slice(0,25),t=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],[n,r]=(0,y.useState)(!1);return(0,y.useEffect)(()=>{setTimeout(()=>{r(!1)},1500)},[]),(0,b.jsx)(_,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(he,{}),(0,b.jsx)(l.Main,{children:(0,b.jsx)(ue,{header:fe,content:(0,b.jsx)(ce,{children:(0,b.jsx)(c,{keyId:`id`,rows:e,columns:t,isLoading:n,onRowClick:e=>console.log(`row clicked`,e),onRetry:()=>{}})})})})]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
\`\`\``,...x.parameters?.docs?.description}}};try{x.displayName=`BasicUsage`,x.__docgenInfo={description:`Для фиксирования колонки в DataGrid необходимо в конфигурации указать свойство \`pinned\` со значением \`left\` или \`right\`.

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
\`\`\``,displayName:`BasicUsage`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/BasicUsage.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var C,w,T,E;function D(){return(D=e((()=>{ye(),se(),re(),o(),s(),d(),f(),C=a(),w=i(_e)`
  width: 600px;
  justify-self: center;
`,T=i(_)`
  height: 500px;
  align-items: center;
`,E=({gridViewMode:e,changeGridViewMode:t})=>{let n={main:[{icon:(0,C.jsx)(oe,{}),name:`Удалить`,needConfirm:!0,confirmText:`Если вы удалите черновик, то черновик с такими же данными нужно будет создать заново. Удалить черновик из списка?`,confirmButtonProps:{text:`Да, удалить`,isAccented:!0},onClick:e=>alert(`Delete: ${JSON.stringify(e)}`)}]},r=p([...m.map(({pinned:e,...t})=>t),{field:`actions`,minWidth:`100px`,label:`Действия`,align:`center`,pinned:`right`,renderCell:e=>(0,C.jsx)(te,{row:e,mainActions:()=>(0,C.jsx)(ee,{actions:n.main})})}]);return(0,C.jsx)(ve,{controls:(0,C.jsx)(w,{gridViewMode:e,changeGridViewMode:t}),children:(0,C.jsx)(T,{children:(0,C.jsx)(g,{children:(0,C.jsx)(v,{children:(0,C.jsx)(c,{rows:u.slice(0,5),columns:r,keyId:`id`,onRetry:()=>{},gridViewMode:e})})})})})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`({
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
}`,...E.parameters?.docs?.source}}};try{E.displayName=`ConfirmActions`,E.__docgenInfo={description:``,displayName:`ConfirmActions`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/ConfirmActions.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var O,k,A,j,M,N;function P(){return(P=e((()=>{o(),n(),s(),d(),f(),O=a(),k=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,pinned:`left`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,pinned:`left`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()}],A=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`130px`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`150px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`100px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],j=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,M=i.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,N=()=>{let e=u.slice(0,5);return(0,O.jsxs)(j,{children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(r,{variant:`h5`,gutterBottom:!0,children:`c Pinned left`}),(0,O.jsx)(M,{children:(0,O.jsx)(c,{keyId:`id`,rows:e,columns:p(k),onRetry:()=>{}})})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(r,{variant:`h5`,gutterBottom:!0,children:`c Pinned right`}),(0,O.jsx)(M,{children:(0,O.jsx)(c,{keyId:`id`,rows:e,columns:p(A),onRetry:()=>{}})})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
    ];`,...N.parameters?.docs?.description}}};try{N.displayName=`PinnedColumns`,N.__docgenInfo={description:`Колонки могут быть закреплены слева и справа.

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
    ];`,displayName:`PinnedColumns`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/PinnedColumns.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L,R,z;function B(){return(B=e((()=>{o(),n(),s(),d(),f(),F=a(),I=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,pinned:`left`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],L=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing(6)};

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    padding: ${({theme:e})=>e.spacing(2)};
  }
`,R=i.div`
  width: 600px;
  height: 300px;

  border: 1px solid lightgrey;

  ${({theme:e})=>e.breakpoints.down(`mobile`)} {
    width: 100%;
    border-radius: ${({theme:e})=>e.shape.medium};
    padding: ${({theme:e})=>e.spacing(3)};
    overflow-y: auto;
  }
`,z=()=>{let e=u.slice(0,5);return(0,F.jsxs)(L,{children:[(0,F.jsxs)(`div`,{children:[(0,F.jsx)(r,{variant:`h5`,color:`error`,gutterBottom:!0,children:`❌ БЕЗ minWidth - колонки могут сжиматься до нечитаемого состояния`}),(0,F.jsx)(R,{children:(0,F.jsx)(c,{keyId:`id`,rows:e,columns:p(I),onRetry:()=>{}})})]}),(0,F.jsxs)(`div`,{children:[(0,F.jsx)(r,{variant:`h5`,color:`success`,gutterBottom:!0,children:`✅ С minWidth - колонки защищены от чрезмерного сжатия`}),(0,F.jsx)(R,{children:(0,F.jsx)(c,{keyId:`id`,rows:e,columns:p(m),onRetry:()=>{}})})]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}}})))()}var V,H,be,xe,U;function Se(){return(Se=e((()=>{ye(),V=t(),o(),f(),H=a(),be=i(_e)`
  width: 600px;
  justify-self: center;
`,xe=i(_)`
  height: 500px;
  align-items: center;
`,U=({gridViewMode:e,changeGridViewMode:t})=>{let[n,r]=(0,V.useState)([]);return(0,H.jsx)(ve,{controls:(0,H.jsx)(be,{gridViewMode:e,changeGridViewMode:t}),children:(0,H.jsx)(xe,{children:(0,H.jsx)(g,{children:(0,H.jsx)(v,{children:(0,H.jsx)(h,{rows:u.slice(0,5),selectedRows:n,onSelectRow:e=>r(e),columns:m,gridViewMode:e})})})})})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`({
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

Checkbox в хедере выбирает все значения на странице.`,...U.parameters?.docs?.description}}};try{U.displayName=`WithCheckbox`,U.__docgenInfo={description:`Выбор отдельных строк или всего списка с использованием компонента [Checkbox](/story/form-controls-checkbox--docs).

Checkbox в хедере выбирает все значения на странице.`,displayName:`WithCheckbox`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithCheckbox.story.tsx`,methods:[],props:{gridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`gridViewMode`,required:!0,tags:{},type:{name:`enum`,raw:`"standard" | "full"`,value:[{value:`"standard"`},{value:`"full"`}]}},changeGridViewMode:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`changeGridViewMode`,required:!0,tags:{},type:{name:`(mode: "standard" | "full") => void`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/common/types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var W,G;function Ce(){return(Ce=e((()=>{f(),W=a(),G=()=>(0,W.jsx)(g,{children:(0,W.jsx)(v,{children:(0,W.jsx)(h,{rows:u.slice(0,5),columns:m,isDisabled:!0})})}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <DataGridStoryContainer>
      <Wrapper>
        <MockDataGrid rows={fakeData.slice(0, 5)} columns={PINNED_COLUMNS_WITH_MIN_WIDTH} isDisabled />
      </Wrapper>
    </DataGridStoryContainer>;
}`,...G.parameters?.docs?.source},description:{story:"Prop `disabled` позволяет заблокировать контент",...G.parameters?.docs?.description}}};try{G.displayName=`WithDisabledContent`,G.__docgenInfo={description:"Prop `disabled` позволяет заблокировать контент",displayName:`WithDisabledContent`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithDisabledContent.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var K,q,we,J;function Te(){return(Te=e((()=>{K=t(),f(),q=a(),we=[`123456789`,`2`,`4`],J=()=>{let e=u.slice(0,5),[t,n]=(0,K.useState)([]),r=e=>n(e),i=(0,K.useCallback)(e=>we.includes(e.id)?{mode:`row`,reason:`Нет доступа`}:void 0,[]);return(0,q.jsx)(g,{children:(0,q.jsx)(v,{children:(0,q.jsx)(h,{rows:e,columns:m,selectedRows:t,onSelectRow:r,getRowDisabled:i})})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source},description:{story:"`mode: 'row'` в `getRowDisabled` блокирует всю строку во всех секциях закреплённых колонок. Подробнее о `getRowDisabled` и режимах блокировки в [DisabledRows](/story/table-datagrid--disabled-rows)",...J.parameters?.docs?.description}}};try{J.displayName=`WithDisabledRow`,J.__docgenInfo={description:"`mode: 'row'` в `getRowDisabled` блокирует всю строку во всех секциях закреплённых колонок. Подробнее о `getRowDisabled` и режимах блокировки в [DisabledRows](/story/table-datagrid--disabled-rows)",displayName:`WithDisabledRow`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithDisabledRow.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var Y,X,Z,Q;function Ee(){return(Ee=e((()=>{Y=t(),ae(),f(),X=a(),Z=[{field:`documentName`,label:`Наименование документа`,sortable:!0,width:`2fr`,minWidth:`200px`,pinned:`left`},{field:`recipient`,label:`Получатель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`recipient`,label:`Отправитель`,sortable:!0,width:`1fr`,minWidth:`350px`},{field:`createDate`,label:`Дата создания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Начала`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString()},{field:`createDate`,label:`Дата Окончания`,sortable:!0,width:`1fr`,minWidth:`300px`,format:({createDate:e})=>new Date(e).toLocaleDateString(),pinned:`right`}],Q=()=>{let[e,t]=(0,Y.useState)(1),[n,r]=(0,Y.useState)([]),[i,a]=(0,Y.useState)(!0);return(0,Y.useEffect)(()=>{setTimeout(()=>{r(u.slice((e-1)*10,e*10)),a(!1)},1500)},[]),(0,X.jsx)(_,{children:(0,X.jsx)(g,{children:(0,X.jsx)(h,{rows:n,columns:Z,footer:(0,X.jsx)(ie,{rowsPerPage:10,totalCount:i?0:u.length,onChange:(e,n)=>{a(!0),r([]),t(n),setTimeout(()=>{a(!1),r(u.slice((n-1)*10,n*10))},1500)},page:e}),isLoading:i})})})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source},description:{story:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,...Q.parameters?.docs?.description}}};try{Q.displayName=`WithPagination`,Q.__docgenInfo={description:`Подробнее в компоненте [DataGridPagination](/story/table-dataGridPagination--docs)`,displayName:`WithPagination`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DataGrid/stories/pinnedColumns/WithPagination.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var De,Oe;function $(){return($=e((()=>{s(),f(),S(),D(),P(),B(),Se(),Ce(),Te(),Ee(),De={title:`Table/DataGrid/PinnedColumns`,component:c,decorators:me,parameters:{layout:`fullscreen`,docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=9131-39473&t=JNG2fCJnnhwn3rFy-0)`}}}},Oe=[`PinnedColumns`,`BasicUsage`,`WithPagination`,`WithCheckbox`,`PinnedColumnsMinWidth`,`ConfirmActions`,`WithDisabledRow`,`WithDisabledContent`]})))()}$();export{x as BasicUsage,E as ConfirmActions,N as PinnedColumns,z as PinnedColumnsMinWidth,U as WithCheckbox,G as WithDisabledContent,J as WithDisabledRow,Q as WithPagination,Oe as __namedExportsOrder,De as default};