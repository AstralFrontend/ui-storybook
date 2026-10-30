import{n as e,o as t}from"./rolldown-runtime-BCiCTKAo.js";import{ct as n,ji as r,lt as i,ya as a,yn as o,za as s}from"./preview-BKcIDY9K.js";import{l as c,n as l,t as u}from"./useForm-DV-Fe4XK.js";import{t as d}from"./Form-CVxwgspb.js";import{n as f,t as p}from"./FormSubmitButton-DeBT9cVB.js";import{n as m,t as h}from"./object-2y2TfwoJ.js";import{n as g,t as _}from"./min-CliiJ_qF.js";import{n as v,t as y}from"./or-DlrWwjQm.js";import{n as b,t as x}from"./string-BHlgssBa.js";import{n as S,t as C}from"./FormAsyncAutocomplete-Bsh8jIEB.js";import{n as w,t as T}from"./axios-COqjSeWk.js";import{n as E,t as D}from"./faker-B_3Lj_70.js";import{t as O}from"./src-B9AmVQVO.js";var k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{D(),w(),k=t(O()),A=()=>Math.random()*100+100,j=T.create(),M=new k.default(j,{delayResponse:A()}),N=e=>Array.from({length:e-1}).map(()=>({id:E.string.uuid(),name:E.person.fullName()})),P=[{id:`1`,name:`Иван Третьяков`},...N(30)],M.onGet(`/api/users`).reply(e=>{let t=new URLSearchParams(e.params).get(`name_like`)||``;return[200,P.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))]}),M.onGet(`/api/users/id`).reply(e=>{let t=new URLSearchParams(e.params).get(`id`)||``;return[200,P.find(e=>e.id===t)]}),F=async e=>(await j.get(`api/users/id`,{params:{id:e}})).data,I=async(e,t)=>(await j.get(`api/users`,{...t,params:{...t?.params,name_like:e}})).data})))()}var R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{_(),h(),y(),x(),R=s(),n(),o(),d(),p(),u(),S(),L(),z=a(),B={title:`React-Hook-Form/FormAsyncAutocomplete`,component:C,parameters:{docs:{description:{component:`Обертка
[AsyncAutocomplete](/docs/form-controls-asyncautocomplete--docs) для react-hook-form`}}}},V=async(e,t)=>I(e,{signal:t}),H=async e=>F(e),U=m({autocomplete:m({id:b(),name:b()})}),W=m({autocomplete:v(m({id:b(),name:b()}),b(g(4)))}),G=r(i)`
  gap: ${({theme:e})=>e.spacing(2)};

  width: 300px;
`,K=()=>{let e=l({validationSchema:U}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,z.jsx)(c,{form:e,onSubmit:t,children:(0,z.jsxs)(G,{container:!0,children:[(0,z.jsx)(C,{fetchOptions:V,name:`autocomplete`,getOptionLabel:e=>e.name}),(0,z.jsx)(f,{children:`Submit`})]})})},q=()=>{let e=l({validationSchema:W}),t=e.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,z.jsx)(c,{form:e,onSubmit:t,children:(0,z.jsxs)(G,{container:!0,children:[(0,z.jsx)(C,{fetchOptions:V,control:e.control,name:`autocomplete`,freeSolo:!0,autoHighlight:!1,getOptionLabel:e=>typeof e==`string`?e:e.name}),(0,z.jsx)(f,{children:`Submit`})]})})},J=()=>{let[e,t]=(0,R.useState)(void 0),n=l({validationSchema:U,defaultValues:{autocomplete:void 0}}),r=n.handleSubmit(e=>new Promise(t=>{setTimeout(()=>{window.alert(JSON.stringify(e)),t()},1e3)}));return(0,R.useEffect)(()=>{(async()=>{let e=await H(`1`);e&&(t(e),n.reset({autocomplete:e}))})().then()},[n]),(0,z.jsx)(c,{form:n,onSubmit:r,children:(0,z.jsxs)(G,{container:!0,children:[(0,z.jsx)(C,{fetchOptions:V,name:`autocomplete`,defaultValue:e,getOptionLabel:e=>e.name,control:n.control}),(0,z.jsx)(f,{children:`Submit`})]})})},Y=[`BasicUsage`,`FreeSolo`,`DefaultValue`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAsyncAutocomplete<FormValues, User, false, false, false> fetchOptions={fetchUsers} name="autocomplete" getOptionLabel={option => option.name} />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const form = useForm<FormValues>({
    validationSchema: validationSchemaFreeSolo
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAsyncAutocomplete<FormValues, User, false, false, true> fetchOptions={fetchUsers} control={form.control} name="autocomplete" freeSolo autoHighlight={false} getOptionLabel={option => typeof option === 'string' ? option : option.name} />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const [defaultUser, setDefaultUser] = useState<User | undefined>(undefined);
  const form = useForm<FormValues>({
    validationSchema,
    defaultValues: {
      autocomplete: undefined
    }
  });
  const handleSubmit = form.handleSubmit(values => new Promise<void>(resolve => {
    setTimeout(() => {
      window.alert(JSON.stringify(values));
      resolve();
    }, 1000);
  }));
  useEffect(() => {
    const userId = '1';
    const loadDefaultUser = async () => {
      const user = await fetchUserById(userId);
      if (user) {
        setDefaultUser(user);
        form.reset({
          autocomplete: user
        });
      }
    };
    loadDefaultUser().then();
  }, [form]);
  return <Form form={form} onSubmit={handleSubmit}>
      <GridContainer container>
        <FormAsyncAutocomplete<FormValues, User, false, false, false> fetchOptions={fetchUsers} name="autocomplete" defaultValue={defaultUser} getOptionLabel={option => option.name} control={form.control} />
        <FormSubmitButton>Submit</FormSubmitButton>
      </GridContainer>
    </Form>;
}`,...J.parameters?.docs?.source}}}})))()}X();export{K as BasicUsage,J as DefaultValue,q as FreeSolo,Y as __namedExportsOrder,B as default};