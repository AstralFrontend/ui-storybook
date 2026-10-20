import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,ct as r,ji as i,ln as a,lt as o,xa as s,yn as c}from"./preview-D6B29sG_.js";import{n as ee,t as l}from"./useViewportType-B91eBao8.js";import{t as te}from"./SearchField-DXB6koEu.js";import{t as u}from"./Autocomplete-CHpvj6bu.js";import{t as d}from"./MenuItem-CY_H2cIf.js";import{t as f}from"./MenuItem-LoPseG1X.js";import{t as ne}from"./TextField-dzsmLgtV.js";import{t as re}from"./CheckboxField-CHyNz_RL.js";import{t as p}from"./TextField-Dimgg2D9.js";import{t as m}from"./Autocomplete-CrY7xNQ5.js";import{t as h}from"./AsyncAutocomplete-DV-0FD5a.js";import{t as g}from"./AsyncAutocomplete-DN0U317k.js";import{t as ie}from"./AddressAutocomplete-Da4fJFQA.js";import{t as ae}from"./AddressAutocomplete-DBaj89kr.js";import{t as oe}from"./CheckboxField-BIWWsDpW.js";import{t as _}from"./DatePicker-N_hw7V1N.js";import{t as v}from"./Select-BCzVMl20.js";import{t as se}from"./Select-CZFHh8IW.js";import{t as ce}from"./MaskField-CsCWuxvh.js";import{t as le}from"./MaskField-C2R38_Ss.js";import{t as ue}from"./DatePicker-B1Fmv1S6.js";import{t as de}from"./EmailField-CQWMYjDo.js";import{t as fe}from"./EmailField-C9bMBHxb.js";import{t as pe}from"./EmailOrPhoneField-zU8W92Yy.js";import{t as me}from"./EmailOrPhoneField-rnlvGY9E.js";import{n as y,t as b}from"./Fieldset-BYFMomAZ.js";import{t as he}from"./DateRangePicker-DpXAgLhh.js";import{t as ge}from"./DateRangePicker-D4oBa6KC.js";import{t as x}from"./SearchField-CYy-5q0X.js";import{t as S}from"./NumberField-BEyfMhBq.js";import{t as C}from"./NumberField-DSc5N1gg.js";import{t as w}from"./PasswordField-Bk5EIRqo.js";import{t as T}from"./PasswordField-CwDX5AV5.js";import{t as E}from"./TextArea-Dkf_llbz.js";import{t as D}from"./TextArea-BpNJWahr.js";import{t as O}from"./TreeAutocomplete-CQp9oTKl.js";import{t as k}from"./TreeAutocomplete-B3rE8UFp.js";import{t as A}from"./TreeLikeAutocomplete-DLVWGjQt.js";import{t as j}from"./TreeLikeAutocomplete-iw2uwI2z.js";import{n as M,t as N}from"./faker-CG0S-VxJ.js";import{r as P,t as F}from"./common-BF-xdRAJ.js";import{n as I,r as _e}from"./constants-C9uvm4iA.js";import{t as ve}from"./TreeLikeAsyncAutocomplete-nlona740.js";import{t as ye}from"./TreeLikeAsyncAutocomplete-CY4qe0yS.js";var L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{L=t(),ae(),M(),g(),m(),n(),oe(),ue(),ge(),fe(),me(),r(),le(),f(),C(),T(),x(),se(),c(),D(),p(),F(),k(),_e(),ye(),j(),l(),y(),R=s(),z=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing(4)};

  margin-bottom: 20px;
`,B=i(o)`
  align-items: center;
`,V=`Введите что-нибудь`,H=`Поясняю поле`,U=`Значение`,W=[{value:`1`,title:U},{value:`2`,title:U}],G=[{id:`1`,label:`Значение`},{id:`2`,label:`Значение`},{id:`3`,label:`Значение`},{id:`4`,label:`Значение`}],K=[U,U,U],q=async(e,t)=>(await J(e,t)).map(e=>({addressString:e.value})),J=(e,t)=>N(e,{signal:t}),Y=()=>{let{isMobile:e}=ee(),[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)(!1),[o,s]=(0,L.useState)(``),[c,l]=(0,L.useState)(!1),[f,p]=(0,L.useState)(!1),[m,g]=(0,L.useState)(!1);return(0,R.jsxs)(`form`,{children:[(0,R.jsxs)(z,{children:[(0,R.jsx)(a,{onClick:()=>n(e=>!e),children:`set isDisabled`}),(0,R.jsx)(a,{onClick:()=>i(e=>!e),children:`set values`}),(0,R.jsx)(a,{onClick:()=>s(e=>e?``:H),children:`set helperText`}),(0,R.jsx)(a,{onClick:()=>l(e=>!e),children:`set isHideHelperText`}),(0,R.jsx)(a,{onClick:()=>p(e=>!e),children:`set isLoading`}),(0,R.jsx)(a,{onClick:()=>g(e=>!e),children:`set size`})]}),(0,R.jsx)(b,{isDisabled:t,children:(0,R.jsxs)(B,{container:!0,spacing:[0,5],columns:e?1:3,children:[(0,R.jsx)(u,{label:`Autocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?W[1]:null,onChange:()=>{},options:W,getOptionLabel:e=>e.title,loading:f,size:m?`small`:`medium`}),(0,R.jsx)(u,{label:`Autocomplete Multiple`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?W:[],onChange:()=>{},options:W,getOptionLabel:e=>e.title,multiple:!0,loading:f,size:m?`small`:`medium`}),(0,R.jsx)(ie,{label:`AddressAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,isRequired:!0,value:r?{addressString:U}:void 0,onChange:()=>{},fetchOptions:q,isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(h,{label:`AsyncAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,isRequired:!0,value:r?U:null,onChange:()=>{},fetchOptions:async()=>[],isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(O,{label:`TreeAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,options:G,value:r?`1`:void 0,onChange:()=>{},dialogProps:{title:`Выбор элемента`},isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(A,{label:`TreeLikeAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?[`1`,`2`,`3`,`4`]:void 0,onChange:()=>{},options:G,dialogProps:{title:`Выбор элемента`},isLoading:f,size:m?`small`:`medium`}),(0,R.jsx)(ve,{label:`TreeLikeAsyncAutocomplete`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?[I[2],I[3]]:void 0,fetchOptions:P,isLoading:f,dialogProps:{title:`Выбор элемента`},size:m?`small`:`medium`}),(0,R.jsx)(_,{label:`DatePicker`,helperText:o,hideHelperText:c,value:r?new Date(`01.01.2026`):void 0,onChange:()=>{},inputProps:{placeholder:V,required:!0,error:!1},size:m?`small`:`medium`}),(0,R.jsx)(he,{helperText:o,hideHelperText:c,value:r?{start:new Date(`01.01.2026`),end:new Date(`01.01.2026`)}:void 0,onChange:()=>{},startDateProps:{label:`DateRangePicker start`,placeholder:V,required:!0,error:!1},endDateProps:{label:`DateRangePicker end`,placeholder:V,required:!0,error:!1},size:m?`small`:`medium`}),(0,R.jsx)(v,{label:`Select`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,onChange:()=>{},getOptionLabel:()=>U,loading:f,size:m?`small`:`medium`,children:K.map((e,t)=>(0,R.jsx)(d,{value:t,children:e},e))}),(0,R.jsx)(v,{label:`Select Multiple`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?K:[],onChange:()=>{},getOptionLabel:()=>U,multiple:!0,loading:f,size:m?`small`:`medium`,children:K.map((e,t)=>(0,R.jsx)(d,{value:t,children:e},e))}),(0,R.jsx)(a,{size:m?`medium`:`large`,children:`Кнопка`}),(0,R.jsx)(ne,{label:`TextField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,size:m?`small`:`medium`}),(0,R.jsx)(de,{label:`EmailField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:``,size:m?`small`:`medium`}),(0,R.jsx)(pe,{label:`EmailOrPhoneField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?{value:U,normalizedValue:U,type:`email`}:{value:``,normalizedValue:``,type:`email`},onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(ce,{label:`MaskField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?`9109999999`:void 0,mask:`+7 (000) 000-00-00`,size:m?`small`:`medium`}),(0,R.jsx)(S,{label:`NumberField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?12345:null,size:m?`small`:`medium`}),(0,R.jsx)(te,{label:`SearchField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0,onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(w,{label:`PasswordField`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0,onChange:()=>{},size:m?`small`:`medium`}),(0,R.jsx)(E,{label:`TextArea`,placeholder:V,helperText:o,hideHelperText:c,required:!0,value:r?U:null,size:m?`small`:`medium`}),(0,R.jsx)(re,{label:`CheckboxField`,helperText:o,hideHelperText:c,required:!0,value:r?U:void 0})]})})]})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{y(),X(),Z={title:`Form-Controls/Fieldset/Tests`,component:b},Q=[`AllFields`]})))()}$();export{Y as AllFields,Q as __namedExportsOrder,Z as default};