import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,ji as n,lt as r,xa as i,yn as a}from"./preview-De2xeSj1.js";import{l as o,n as s,t as c}from"./useForm-a7WMrKze.js";import{t as l}from"./Form-BKQwl78y.js";import{n as u,t as d}from"./FormSubmitButton-CZwnnqoY.js";import{n as f,t as p}from"./object-CXqDZ5YO.js";import{n as m,t as h}from"./min-D-SG7F_b.js";import{n as g,t as _}from"./or-Cf3Lr83F.js";import{n as v,t as y}from"./string-hxNUuZd8.js";import{n as b,t as x}from"./FormAddressAutocomplete-NhPxqL4X.js";import{n as S,t as C}from"./axios-DJY38NIv.js";var w,T;function E(){return(E=e((()=>{S(),w=C.create(),T=async(e,t)=>(await w.post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,{query:e},{headers:{"Content-Type":`application/json`,Accept:`application/json`,Authorization:`Token 64573947b8b0dd50db4cc860d0b02b8baf3c7a40`,"X-Secret":`bb22fe88cd5be097f4eba43b253e160590b4ea1f`},...t})).data.suggestions})))()}var D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{h(),p(),_(),y(),t(),a(),l(),d(),c(),b(),E(),D=i(),O={title:`React-Hook-Form/FormAddressAutocomplete`,component:x,parameters:{docs:{description:{component:`Обертка
[AddressAutocomplete](/docs/form-controls-addressautocomplete--docs) для react-hook-form`}}}},k=(e,t)=>T(e,{signal:t}),A=f({autocomplete:g(f({addressString:v()}),v(m(4)))}),j=n(r)`
  gap: ${({theme:e})=>e.spacing(2)};

  width: 300px;
`,M=()=>{let e=s({validationSchema:A}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})),n=e=>e.map(e=>({addressString:e.value}));return(0,D.jsx)(o,{form:e,onSubmit:t,children:(0,D.jsxs)(j,{container:!0,children:[(0,D.jsx)(x,{fetchOptions:async(e,t)=>{let r=await k(e,t);return n(r)},control:e.control,name:`autocomplete`,label:`Адрес`}),(0,D.jsx)(u,{children:`Submit`})]})})},N=()=>{let e=s({validationSchema:A}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})),n=e=>e.map(e=>({addressString:e.value}));return(0,D.jsx)(o,{form:e,onSubmit:t,children:(0,D.jsxs)(j,{container:!0,children:[(0,D.jsx)(x,{fetchOptions:async(e,t)=>{let r=await k(e,t);return n(r)},control:e.control,name:`autocomplete`,freeSolo:!1,label:`Адрес`}),(0,D.jsx)(u,{children:`Submit`})]})})},P=()=>{let e={addressString:`г. Калуга ул. Циолковского, 4`,fiasId:`181`,regionCode:`40`},t=s({validationSchema:A,defaultValues:{autocomplete:e}}),n=t.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e,null,2)),t()},1e3)})),r=e=>e.map(e=>({addressString:e.value,fiasId:e.data.region_fias_id,regionCode:e.data.region_kladr_id}));return(0,D.jsx)(o,{form:t,onSubmit:n,children:(0,D.jsxs)(j,{container:!0,children:[(0,D.jsx)(x,{fetchOptions:async(e,t)=>{let n=await k(e,t);return r(n)},control:t.control,name:`autocomplete`,defaultValue:e,label:`Адрес`}),(0,D.jsx)(u,{children:`Submit`})]})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  }));
  const formatData = (data: DadataAddress[]): FormAddressAutocompleteValue[] => {
    return data.map(item => ({
      addressString: item.value
    }));
  };
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<FormAddressAutocompleteValue[]> => {
    const res = await fetchAddress(search, signal);
    return formatData(res);
  };
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAddressAutocomplete<FormValues> fetchOptions={fetchOptions} control={form.control} name="autocomplete" label="Адрес" />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  }));
  const formatData = (data: DadataAddress[]): FormAddressAutocompleteValue[] => {
    return data.map(item => ({
      addressString: item.value
    }));
  };
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<FormAddressAutocompleteValue[]> => {
    const res = await fetchAddress(search, signal);
    return formatData(res);
  };
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAddressAutocomplete<FormValues, FormAddressAutocompleteValue> fetchOptions={fetchOptions} control={form.control} name="autocomplete" freeSolo={false} label="Адрес" />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...N.parameters?.docs?.source},description:{story:"По умолчанию параметр `freeSolo` включен",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const defaultAddress: FormatAddress = {
    addressString: 'г. Калуга ул. Циолковского, 4',
    fiasId: '181',
    regionCode: '40'
  };
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      autocomplete: defaultAddress
    }
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values, null, 2));
      resolve();
    }, 1000);
  }));
  const formatData = (data: DadataAddress[]): FormatAddress[] => {
    return data.map(item => ({
      addressString: item.value,
      fiasId: item.data.region_fias_id,
      regionCode: item.data.region_kladr_id
    }));
  };
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<FormatAddress[]> => {
    const res = await fetchAddress(search, signal);
    return formatData(res);
  };
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAddressAutocomplete<FormValues> fetchOptions={fetchOptions} control={form.control} name="autocomplete" defaultValue={defaultAddress} label="Адрес" />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...P.parameters?.docs?.source}}},F=[`BasicUsage`,`FreeSoloOff`,`DefaultValue`]})))()}I();export{M as BasicUsage,P as DefaultValue,N as FreeSoloOff,F as __namedExportsOrder,O as default};