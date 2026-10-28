import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,ya as r}from"./preview-BabqIrZj.js";import{s as i,t as a}from"./DataGrid-CqF7FMUV.js";import{t as o}from"./Avatar-B4HnzIXQ.js";import{t as s}from"./Avatar-BqcpsTh2.js";import{t as c}from"./Description-DT1IHcJD.js";import{t as l}from"./Description-C95gDDEX.js";import{n as u,t as d}from"./DescriptionCell-B2dPKdqc.js";import{K as f,rt as p}from"./common-COG1iHx5.js";var m,h;function g(){return(g=e((()=>{s(),u(),m=r(),h=()=>(0,m.jsx)(d,{title:`Физическое лицо`,icon:(0,m.jsx)(o,{children:`ФЛ`})}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <DescriptionCell title="Физическое лицо" icon={<Avatar children="ФЛ" />} />;
}`,...h.parameters?.docs?.source}}}})))()}var _,v;function y(){return(y=e((()=>{_=r(),v=()=>(0,_.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,_.jsx)(`path`,{d:`M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z`,fill:`url(#paint0_linear_28532_4841)`}),(0,_.jsx)(`path`,{d:`M12 17C15.3137 17 18 14.3137 18 11C18 7.6863 15.3137 5 12 5C8.6863 5 6 7.6863 6 11C6 14.3137 8.6863 17 12 17Z`,fill:`white`}),(0,_.jsx)(`path`,{d:`M10.9283 10.6193C11.4041 9.7936 12.5959 9.7936 13.0717 10.6193L16.8299 17.142C17.4096 18.1482 16.4081 19.3263 15.3215 18.9164L12.4367 17.8279C12.1552 17.7217 11.8448 17.7217 11.5633 17.8279L8.6785 18.9164C7.5919 19.3263 6.5904 18.1482 7.1701 17.142L10.9283 10.6193Z`,fill:`#0082AA`}),(0,_.jsx)(`defs`,{children:(0,_.jsxs)(`linearGradient`,{id:`paint0_linear_28532_4841`,x1:`79.0807`,y1:`0`,x2:`79.0807`,y2:`24`,gradientUnits:`userSpaceOnUse`,children:[(0,_.jsx)(`stop`,{"stop-color":`#3ACEFC`}),(0,_.jsx)(`stop`,{offset:`1`,"stop-color":`#27B9E6`})]})})]})})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C,w,T;function E(){return(E=e((()=>{a(),f(),l(),u(),b(),x=r(),S={id:`1`,documentName:{title:`НДС`,name:`Направление`,value:`ФНС`},product:{icon:(0,x.jsx)(v,{}),title:`1С Отчетность`,name:`ID`,value:`a17fee3e-07d6-4488`},createDate:`2022-03-24T17:50:40.206Z`},C=()=>{let e=new Date(2022,0,1),t=new Date,n=e.getTime()+Math.random()*(t.getTime()-e.getTime());return new Date(n).toISOString()},w=(e,t)=>{let n=[{icon:(0,x.jsx)(v,{}),title:`1C Отчетность`,name:`ID`,value:`a17fee3e-07d6-4488`},{icon:(0,x.jsx)(v,{}),title:`Астрал.Отчет 5.0`,name:`ID`,value:`bb6a549b-5b5a-402f`},{icon:(0,x.jsx)(v,{}),title:`Астрал.Отчет 4.0`,name:`ID`,value:`d76a51ad-1a83-423b`}],r=[{title:`НДС`,name:`Направление`,value:`ФНС`},{title:`Прибыль`,name:`Направление`,value:`ФНС`},{title:`Бухгалтерский отчет`,name:`Направление`,value:`ФНС`}];return Array.from({length:16}).fill(e).map((e,i)=>({id:String(i+1),documentName:r[Math.floor(Math.random()*r.length)],product:n[Math.floor(Math.random()*n.length)],createDate:C(),options:Math.random()<.5?t:void 0}))},T=()=>{let e=w(S);return(0,x.jsx)(p,{children:(0,x.jsx)(i,{keyId:`id`,rows:e,columns:[{field:`documentName`,label:`Документ`,sortable:!0,renderCell:({documentName:e})=>(0,x.jsx)(d,{title:e.title,subtitle:(0,x.jsxs)(c,{direction:`row`,children:[(0,x.jsx)(c.Name,{children:e.name}),(0,x.jsx)(c.Value,{children:e.value})]})})},{field:`product`,label:`Продукт`,sortable:!0,renderCell:({product:e})=>(0,x.jsx)(d,{title:e.title,icon:e.icon,subtitle:(0,x.jsxs)(c,{direction:`row`,children:[(0,x.jsx)(c.Name,{children:e.name}),(0,x.jsx)(c.Value,{children:e.value})]})})},{field:`createDate`,label:`Дата создания`,sortable:!0,format:({createDate:e})=>new Date(e).toLocaleDateString()}],onRetry:()=>{}})})},T.parameters={layout:`fullscreen`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const fakeData = generateData(FAKE_DATA_OBJECT_TEMPLATE);
  const columns: DataGridColumns<DataType>[] = [{
    field: 'documentName',
    label: 'Документ',
    sortable: true,
    renderCell: ({
      documentName
    }) => <DescriptionCell title={documentName.title} subtitle={<Description direction="row">
              <Description.Name>{documentName.name}</Description.Name>
              <Description.Value>{documentName.value}</Description.Value>
            </Description>} />
  }, {
    field: 'product',
    label: 'Продукт',
    sortable: true,
    renderCell: ({
      product
    }) => <DescriptionCell title={product.title} icon={product.icon} subtitle={<Description direction="row">
              <Description.Name>{product.name}</Description.Name>
              <Description.Value>{product.value}</Description.Value>
            </Description>} />
  }, {
    field: 'createDate',
    label: 'Дата создания',
    sortable: true,
    format: ({
      createDate
    }) => new Date(createDate).toLocaleDateString()
  }];
  return <DataGridStoryContainer>
      <DataGrid keyId="id" rows={fakeData} columns={columns} onRetry={() => {}} />
    </DataGridStoryContainer>;
}`,...T.parameters?.docs?.source}}}})))()}var D,O;function k(){return(k=e((()=>{l(),u(),D=r(),O=()=>(0,D.jsx)(d,{title:`Прибыль`,subtitle:(0,D.jsxs)(c,{direction:`row`,children:[(0,D.jsx)(c.Name,{children:`Направление`}),(0,D.jsx)(c.Value,{children:`ФНС`})]})}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <DescriptionCell title="Прибыль" subtitle={<Description direction="row">
          <Description.Name>Направление</Description.Name>
          <Description.Value>ФНС</Description.Value>
        </Description>} />;
}`,...O.parameters?.docs?.source}}}})))()}var A,j;function M(){return(M=e((()=>{t(),u(),b(),A=r(),j=()=>(0,A.jsxs)(n,{rowSpacing:2,children:[(0,A.jsx)(d,{title:`Заголовок`,subtitle:`Подзаголовок`,icon:(0,A.jsx)(v,{})}),(0,A.jsx)(d,{title:`Заголовок`,subtitle:`Подзаголовок`,iconPosition:`right`,icon:(0,A.jsx)(v,{})})]}),j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Grid rowSpacing={2}>
      <DescriptionCell title="Заголовок" subtitle="Подзаголовок" icon={<Icon />} />
      <DescriptionCell title="Заголовок" subtitle="Подзаголовок" iconPosition="right" icon={<Icon />} />
    </Grid>;
}`,...j.parameters?.docs?.source},description:{story:"С помощью prop ```iconPosition``` можно позиционировать иконку слева или справа от текста.\nПо дефолту left",...j.parameters?.docs?.description}}};try{j.displayName=`IconPosition`,j.__docgenInfo={description:"С помощью prop ```iconPosition``` можно позиционировать иконку слева или справа от текста.\nПо дефолту left",displayName:`IconPosition`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/DescriptionCell/stories/IconPosition.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var N,P;function F(){return(F=e((()=>{b(),N=r(),P={args:{title:`Заголовок`,subtitle:`Подзаголовок`,icon:(0,N.jsx)(v,{}),iconPosition:`left`},parameters:{docs:{disable:!0}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Заголовок',
    subtitle: 'Подзаголовок',
    icon: <Icon />,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}var I,L;function R(){return(R=e((()=>{u(),I=r(),L=()=>(0,I.jsx)(d,{title:`Бухгалтерский отчет`}),L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <DescriptionCell title="Бухгалтерский отчет" />;
}`,...L.parameters?.docs?.source}}}})))()}var z,B;function V(){return(V=e((()=>{u(),g(),E(),k(),M(),F(),R(),z={title:`Table/DescriptionCell`,component:d,parameters:{docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/Astral-UI?node-id=457-35576&t=R5B2Xk0fdqxNMGBr-0)`}}}},B=[`Interaction`,`BasicUsage`,`DescriptionSubtitle`,`IconPosition`,`OnlyTitle`,`AvatarDescriptionCell`]})))()}V();export{h as AvatarDescriptionCell,T as BasicUsage,O as DescriptionSubtitle,j as IconPosition,P as Interaction,L as OnlyTitle,B as __namedExportsOrder,z as default};