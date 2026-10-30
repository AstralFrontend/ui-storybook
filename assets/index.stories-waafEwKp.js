import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{ji as t,ya as n,yn as r,za as i}from"./preview--MgaEBgF.js";import{n as a,t as o}from"./AddressAutocomplete-DL0tYBBy.js";import{n as s,t as c}from"./faker-DX93NzRs.js";var l;function u(){return(u=e((()=>{s(),l=(e,t)=>c(e,t)})))()}var d;function f(){return(f=e((()=>{r(),d=t.div`
  min-width: 300px;
`;try{d.displayName=`StoryWrapper`,d.__docgenInfo={description:``,displayName:`StoryWrapper`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AddressAutocomplete/stories/common/StoryWrapper.tsx`,methods:[],props:{theme:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`theme`,required:!1,tags:{},type:{name:`Theme`}},as:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@emotion/styled/dist/declarations/src/index.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`ElementType<any, keyof IntrinsicElements>`}}},tags:{}}}catch{}})))()}function p(){return(p=e((()=>{u(),f()})))()}var m,h,g;function _(){return(_=e((()=>{m=i(),a(),p(),h=n(),g=()=>{let[e,t]=(0,m.useState)();return(0,h.jsx)(o,{value:e,onChange:t,fetchOptions:async(e,t)=>(await l(e,{signal:t})).map(e=>({addressString:e.value})),label:`Адрес`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [address, setAddress] = useState<AddressAutocompleteValue>();
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<AddressAutocompleteValue[]> => {
    const res = await getAddress(search, {
      signal
    });
    return res.map((item: DadataAddress) => ({
      addressString: item.value
    }));
  };
  return <AddressAutocomplete value={address} onChange={setAddress} fetchOptions={fetchOptions} label="Адрес" />;
}`,...g.parameters?.docs?.source}}}})))()}var v,y,b;function x(){return(x=e((()=>{v=i(),a(),p(),y=n(),b=()=>{let[e,t]=(0,v.useState)(void 0);return(0,y.jsx)(o,{value:e,onChange:t,fetchOptions:async(e,t)=>(await l(e,{signal:t})).map(e=>({addressString:e.unrestricted_value})),label:`Адрес`})};try{b.displayName=`DadataUnrestrictedValue`,b.__docgenInfo={description:"При использовании Dadata для вывода полного адреса необходимо в\naddressString передать значение `unrestricted_value`",displayName:`DadataUnrestrictedValue`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AddressAutocomplete/stories/DadataUnrestrictedValue.story.tsx`,methods:[],props:{},tags:{}}}catch{}b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const [address, setAddress] = useState<AddressAutocompleteValue | undefined>(undefined);
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<AddressAutocompleteValue[]> => {
    const res = await getAddress(search, {
      signal
    });
    return res.map((item: DadataAddress) => ({
      addressString: item.unrestricted_value
    }));
  };
  return <AddressAutocomplete value={address} onChange={setAddress} fetchOptions={fetchOptions} label="Адрес" />;
}`,...b.parameters?.docs?.source},description:{story:"При использовании Dadata для вывода полного адреса необходимо в\naddressString передать значение `unrestricted_value`",...b.parameters?.docs?.description}}}})))()}var S,C,w;function T(){return(T=e((()=>{S=i(),a(),p(),C=n(),w=()=>{let[e,t]=(0,S.useState)(void 0);return(0,C.jsx)(o,{value:e,onChange:t,fetchOptions:async(e,t)=>(await l(e,{signal:t})).map(e=>({addressString:e.value,regionCode:e.data.region_kladr_id,fiasId:e.data.region_fias_id})),label:`Адрес`})};try{w.displayName=`FormatData`,w.__docgenInfo={description:`Форматирование данных для сервера`,displayName:`FormatData`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AddressAutocomplete/stories/FormatData.story.tsx`,methods:[],props:{},tags:{}}}catch{}w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [address, setAddress] = useState<FormatAddress | undefined>(undefined);
  const fetchOptions = async (search: string, signal?: AbortSignal): Promise<FormatAddress[]> => {
    const res = await getAddress(search, {
      signal
    });
    return res.map((item: DadataAddress) => ({
      addressString: item.value,
      regionCode: item.data.region_kladr_id,
      fiasId: item.data.region_fias_id
    }));
  };
  return <AddressAutocomplete value={address} onChange={setAddress} fetchOptions={fetchOptions} label="Адрес" />;
}`,...w.parameters?.docs?.source},description:{story:`Форматирование данных для сервера`,...w.parameters?.docs?.description}}}})))()}var E,D,O,k;function A(){return(A=e((()=>{E=i(),a(),p(),D=n(),O=async(e,t)=>(await l(e,{signal:t})).map(e=>({addressString:e.value})),k=()=>{let[e,t]=(0,E.useState)(void 0);return(0,D.jsx)(o,{value:e,onChange:t,fetchOptions:O,label:`Адрес`,freeSolo:!1})};try{k.displayName=`FreeSoloDisabled`,k.__docgenInfo={description:"По умолчанию параметр `freeSolo` включен",displayName:`FreeSoloDisabled`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/AddressAutocomplete/stories/FreeSoloDisabled.story.tsx`,methods:[],props:{},tags:{}}}catch{}k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const [address, setAddress] = useState<AddressAutocompleteValue | undefined>(undefined);
  return <AddressAutocomplete value={address} onChange={setAddress} fetchOptions={fetchOptions} label="Адрес" freeSolo={false} />;
}`,...k.parameters?.docs?.source},description:{story:"По умолчанию параметр `freeSolo` включен",...k.parameters?.docs?.description}}}})))()}var j,M,N;function P(){return(P=e((()=>{a(),_(),p(),x(),T(),A(),j=n(),M={title:`Form-Controls/AddressAutocomplete`,component:o,decorators:[(e,t)=>(0,j.jsx)(d,{children:(0,j.jsx)(e,{...t})})],parameters:{docs:{description:{component:`Компонент предназначен для выбора адреса.
Расширяет [AsyncAutocomplete](/docs/form-controls-asyncautocomplete--docs) для интеграции с Dadata API.`}}}},N=[`BasicUsage`,`DadataUnrestrictedValue`,`FormatData`,`FreeSoloDisabled`]})))()}P();export{g as BasicUsage,b as DadataUnrestrictedValue,w as FormatData,k as FreeSoloDisabled,N as __namedExportsOrder,M as default};