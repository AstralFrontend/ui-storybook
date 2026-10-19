import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{cn as t,ct as n,ji as r,ln as i,lt as a,ya as o,yn as s,za as c}from"./preview-IOjL1aMA.js";import{n as ee,t as l}from"./useViewportType-CSX_uP6J.js";import{t as te}from"./SearchField-TsVyzsyE.js";import{t as u}from"./Autocomplete-DuLD9oAp.js";import{t as d}from"./MenuItem-DeHKNVyS.js";import{t as f}from"./MenuItem-DOE53kKP.js";import{t as ne}from"./TextField-BIefqo-r.js";import{t as re}from"./CheckboxField-eJKy24U1.js";import{t as p}from"./TextField-CRbNyq5M.js";import{t as m}from"./Autocomplete-CtQbm1wi.js";import{t as ie}from"./AsyncAutocomplete-cJHYlLup.js";import{t as h}from"./AsyncAutocomplete-D7OTN_lw.js";import{t as ae}from"./AddressAutocomplete-DhvbbQti.js";import{t as oe}from"./AddressAutocomplete-B3x2uITa.js";import{t as g}from"./CheckboxField-CnVbDP4w.js";import{t as se}from"./DatePicker-DzIo3i6P.js";import{t as _}from"./Select-DufD4qup.js";import{t as ce}from"./Select-CE8U9ET0.js";import{t as le}from"./MaskField-Cd-3LGsB.js";import{t as ue}from"./MaskField-DDyHmjFL.js";import{t as de}from"./DatePicker-BVOx-sns.js";import{t as fe}from"./EmailField-D2daQz5e.js";import{t as pe}from"./EmailField-CsbiFp-k.js";import{t as me}from"./EmailOrPhoneField-xLbUfz0e.js";import{t as he}from"./EmailOrPhoneField-CROPakXi.js";import{n as v,t as y}from"./Fieldset-BatrSPC6.js";import{t as ge}from"./DateRangePicker-DpeZLbL2.js";import{t as b}from"./DateRangePicker-CJBQHodb.js";import{t as x}from"./SearchField-CkCECEZk.js";import{t as S}from"./NumberField-Clu4kT-b.js";import{t as C}from"./NumberField-CiXDPsem.js";import{t as w}from"./PasswordField-DPHnJJJe.js";import{t as T}from"./PasswordField-D0l_JYWA.js";import{t as E}from"./TextArea-s6DLpJhc.js";import{t as D}from"./TextArea-D4fd0cQK.js";import{t as O}from"./TreeAutocomplete-CpPKLHD7.js";import{t as k}from"./TreeAutocomplete-CwCQ3aPs.js";import{t as A}from"./TreeLikeAutocomplete-CwYGhGUy.js";import{t as j}from"./TreeLikeAutocomplete-BPHxZqcF.js";import{n as M,t as N}from"./faker-CG0S-VxJ.js";import{r as P,t as F}from"./common-BF-xdRAJ.js";import{n as I,r as _e}from"./constants-C9uvm4iA.js";import{t as ve}from"./TreeLikeAsyncAutocomplete-IdS4YoF0.js";import{t as ye}from"./TreeLikeAsyncAutocomplete-DG8esaIR.js";var L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{L=c(),oe(),M(),h(),m(),t(),g(),de(),b(),pe(),he(),n(),ue(),f(),C(),T(),x(),ce(),s(),D(),p(),F(),k(),_e(),ye(),j(),l(),v(),R=o(),z=r.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};

  margin-bottom: 20px;
`,B=r(a)`
  align-items: center;
`,V=`Введите что-нибудь`,H=`Поясняю поле`,U=`Значение`,W=[{value:`1`,title:U},{value:`2`,title:U}],G=[{id:`1`,label:`Значение`},{id:`2`,label:`Значение`},{id:`3`,label:`Значение`},{id:`4`,label:`Значение`}],K=[U,U,U],q=async(e,t)=>(await J(e,t)).map(e=>({addressString:e.value})),J=(e,t)=>N(e,{signal:t}),Y=()=>{let{isMobile:e}=ee(),[t,n]=(0,L.useState)(!1),[r,a]=(0,L.useState)(!1),[o,s]=(0,L.useState)(``),[c,l]=(0,L.useState)(!1),[f,p]=(0,L.useState)(!1),[m,h]=(0,L.useState)(!1);return(0,R.jsxs)(`form`,{children:[(0,R.jsxs)(z,{children:[(0,R.jsx)(i,{onClick:()=>n(e=>!e),children:`set isDisabled`}),(0,R.jsx)(i,{onClick:()=>a(e=>!e),children:`set values`}),(0,R.jsx)(i,{onClick:()=>s(e=>e?``:H),children:`set helperText`}),(0,R.jsx)(i,{onClick:()=>l(e=>!e),children:`set isHideHelperText`}),(0,R.jsx)(i,{onClick:()=>p(e=>!e),children:`set isLoading`}),(0,R.jsx)(i,{onClick:()=>h(e=>!e),children:`set size`})]}),(0,R.jsx)(y,{isDisabled:t,children:(0,R.jsxs)(B,{container:!0,spacing:[0,5],columns:e?1:3,children:[(0,R.jsx)(u,{label:`Autocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?W[1]:null,onChange:()=>{},options:W,getOptionLabel:e=>e.title,loading:f,size:m?`small`:`medium`}),(0,R.jsx)(u,{label:`Autocomplete Multiple`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?W:[],onChange:()=>{},options:W,getOptionLabel:e=>e.title,multiple:!0,loading:f,size:m?`small`:`medium`}),(0,R.jsx)(ae,{label:`AddressAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,isRequired:!0,value:r?{addressString:U}:void 0,onChange:()=>{},fetchOptions:q,isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(ie,{label:`AsyncAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,isRequired:!0,value:r?U:null,onChange:()=>{},fetchOptions:async()=>[],isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(O,{label:`TreeAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,options:G,value:r?`1`:void 0,onChange:()=>{},dialogProps:{title:`Выбор элемента`},isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(A,{label:`TreeLikeAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?[`1`,`2`,`3`,`4`]:void 0,onChange:()=>{},options:G,dialogProps:{title:`Выбор элемента`},isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(ve,{label:`TreeLikeAsyncAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?[I[2],I[3]]:void 0,fetchOptions:P,isLoading:f,dialogProps:{title:`Выбор элемента`},size:m?`small`:`medium`}),(0,R.jsx)(se,{label:`DatePicker`,helperText:o,hideHelperText:c,value:r?new Date(`01.01.2026`):void 0,onChange:()=>{},inputProps:{placeholder:V,required:!0,error:!1},size:m?`small`:`medium`}),(0,R.jsx)(ge,{helperText:o,hideHelperText:c,value:r?{start:new Date(`01.01.2026`),end:new Date(`01.01.2026`)}:void 0,onChange:()=>{},startDateProps:{label:`DateRangePicker start`,placeholder:V,required:!0,error:!1},endDateProps:{label:`DateRangePicker end`,placeholder:V,required:!0,error:!1},size:m?`small`:`medium`}),(0,R.jsx)(_,{label:`Select`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,onChange:()=>{},getOptionLabel:()=>U,loading:f,size:m?`small`:`medium`,children:K.map((e,t)=>(0,R.jsx)(d,{value:t,children:e},e))}),(0,R.jsx)(_,{label:`Select Multiple`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?K:[],onChange:()=>{},getOptionLabel:()=>U,multiple:!0,loading:f,size:m?`small`:`medium`,children:K.map((e,t)=>(0,R.jsx)(d,{value:t,children:e},e))}),(0,R.jsx)(i,{size:m?`medium`:`large`,children:`Кнопка`}),(0,R.jsx)(ne,{label:`TextField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,size:m?`small`:`medium`}),(0,R.jsx)(fe,{label:`EmailField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,size:m?`small`:`medium`}),(0,R.jsx)(me,{label:`EmailOrPhoneField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?{value:U,normalizedValue:U,type:`email`}:{value:``,normalizedValue:``,type:`email`},onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(le,{label:`MaskField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?`9109999999`:void 0,mask:`+7 (000) 000-00-00`,size:m?`small`:`medium`}),(0,R.jsx)(S,{label:`NumberField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?12345:null,size:m?`small`:`medium`}),(0,R.jsx)(te,{label:`SearchField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0,onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(w,{label:`PasswordField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0,onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(E,{label:`TextArea`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:null,size:m?`small`:`medium`}),(0,R.jsx)(re,{label:`CheckboxField`,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0})]})})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const {
    isMobile
  } = useViewportType();
  const [isDisabled, setDisabled] = useState(false);
  const [isShowValues, setShowValues] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [isHideHelperText, setIsHideHelperText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSmallSize, setIsSmallSize] = useState(false);
  return <form>
      <Wrapper>
        <Button onClick={() => setDisabled(prev => !prev)}>
          set isDisabled
        </Button>
        <Button onClick={() => setShowValues(prev => !prev)}>
          set values
        </Button>
        <Button onClick={() => setHelperText(prev => prev ? '' : HELPER_TEXT)}>
          set helperText
        </Button>
        <Button onClick={() => setIsHideHelperText(prev => !prev)}>
          set isHideHelperText
        </Button>
        <Button onClick={() => setIsLoading(prev => !prev)}>
          set isLoading
        </Button>
        <Button onClick={() => setIsSmallSize(prev => !prev)}>
          set size
        </Button>
      </Wrapper>

      <Fieldset isDisabled={isDisabled}>
        <AlignedGrid container spacing={[0, 5]} columns={isMobile ? 1 : 3}>
          <Autocomplete<Option, false, false, false> label="Autocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? AUTOCOMPLETE_OPTIONS[1] : null} onChange={() => {}} options={AUTOCOMPLETE_OPTIONS} getOptionLabel={params => params.title} loading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <Autocomplete<Option, true, false, false> label="Autocomplete Multiple" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? AUTOCOMPLETE_OPTIONS : []} onChange={() => {}} options={AUTOCOMPLETE_OPTIONS} getOptionLabel={params => params.title} multiple loading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <AddressAutocomplete label="AddressAutocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} isRequired value={isShowValues ? {
          addressString: VALUE
        } : undefined} onChange={() => {}} fetchOptions={fetchOptions} isLoading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <AsyncAutocomplete label="AsyncAutocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} isRequired value={isShowValues ? VALUE : null} onChange={() => {}} fetchOptions={async () => []} isLoading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <TreeAutocomplete label="TreeAutocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required options={TREE_AUTOCOMPLETE_OPTIONS} value={isShowValues ? '1' : undefined} onChange={() => {}} dialogProps={{
          title: 'Выбор элемента'
        }} isLoading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <TreeLikeAutocomplete label="TreeLikeAutocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? ['1', '2', '3', '4'] : undefined} onChange={() => {}} options={TREE_AUTOCOMPLETE_OPTIONS} dialogProps={{
          title: 'Выбор элемента'
        }} isLoading={isLoading} size={isSmallSize ? 'small' : 'medium'} />

          <TreeLikeAsyncAutocomplete label="TreeLikeAsyncAutocomplete" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? [FAKE_TREE_LIST_DATA[2], FAKE_TREE_LIST_DATA[3]] : undefined} fetchOptions={fetchOrganizations} isLoading={isLoading} dialogProps={{
          title: 'Выбор элемента'
        }} size={isSmallSize ? 'small' : 'medium'} />

          <DatePicker label="DatePicker" helperText={helperText} hideHelperText={isHideHelperText} value={isShowValues ? new Date('01.01.2026') : undefined} onChange={() => {}} inputProps={{
          placeholder: PLACEHOLDER,
          required: true,
          error: false
        }} size={isSmallSize ? 'small' : 'medium'} />

          <DateRangePicker helperText={helperText} hideHelperText={isHideHelperText} value={isShowValues ? {
          start: new Date('01.01.2026'),
          end: new Date('01.01.2026')
        } : undefined} onChange={() => {}} startDateProps={{
          label: 'DateRangePicker start',
          placeholder: PLACEHOLDER,
          required: true,
          error: false
        }} endDateProps={{
          label: 'DateRangePicker end',
          placeholder: PLACEHOLDER,
          required: true,
          error: false
        }} size={isSmallSize ? 'small' : 'medium'} />

          <Select label="Select" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : ''} onChange={() => {}} getOptionLabel={() => VALUE} loading={isLoading} size={isSmallSize ? 'small' : 'medium'}>
            {SELECT_OPTIONS.map((option, index) => <MenuItem value={index} key={option}>
                {option}
              </MenuItem>)}
          </Select>

          <Select label="Select Multiple" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? SELECT_OPTIONS : []} onChange={() => {}} getOptionLabel={() => VALUE} multiple loading={isLoading} size={isSmallSize ? 'small' : 'medium'}>
            {SELECT_OPTIONS.map((option, index) => <MenuItem value={index} key={option}>
                {option}
              </MenuItem>)}
          </Select>

          <Button size={isSmallSize ? 'medium' : 'large'}>Кнопка</Button>

          <TextField label="TextField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : ''} size={isSmallSize ? 'small' : 'medium'} />

          <EmailField label="EmailField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : ''} size={isSmallSize ? 'small' : 'medium'} />

          <EmailOrPhoneField label="EmailOrPhoneField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? {
          value: VALUE,
          normalizedValue: VALUE,
          type: 'email'
        } : {
          value: '',
          normalizedValue: '',
          type: 'email'
        }} onChange={() => {}} size={isSmallSize ? 'small' : 'medium'} />

          <MaskField label="MaskField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? '9109999999' : undefined} mask="+7 (000) 000-00-00" size={isSmallSize ? 'small' : 'medium'} />

          <NumberField label="NumberField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? 12345 : null} size={isSmallSize ? 'small' : 'medium'} />

          <SearchField label="SearchField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : undefined} onChange={() => {}} size={isSmallSize ? 'small' : 'medium'} />

          <PasswordField label="PasswordField" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : undefined} onChange={() => {}} size={isSmallSize ? 'small' : 'medium'} />

          <TextArea label="TextArea" placeholder={PLACEHOLDER} helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : null} size={isSmallSize ? 'small' : 'medium'} />

          <CheckboxField label="CheckboxField" helperText={helperText} hideHelperText={isHideHelperText} required value={isShowValues ? VALUE : undefined} />
        </AlignedGrid>
      </Fieldset>
    </form>;
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{v(),X(),Z={title:`Form-Controls/Fieldset/Tests`,component:y},Q=[`AllFields`]})))()}$();export{Y as AllFields,Q as __namedExportsOrder,Z as default};