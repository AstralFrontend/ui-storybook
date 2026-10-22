import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ct as t,lt as n,xa as r}from"./preview-BritAtdV.js";import{l as i}from"./useForm-DmDNc67E.js";import{t as a}from"./Form-CTalt5sF.js";var o,s;function c(){return(c=e((()=>{t(),a(),o=r(),s=({children:e,onSubmit:t,...r})=>{let{form:a}=r,s=e=>new Promise(e=>{setTimeout(()=>e(),1200)}).then(()=>{window.alert(JSON.stringify(e))});return(0,o.jsx)(i,{...r,onSubmit:a.handleSubmit(t||s),children:(0,o.jsx)(n,{container:!0,spacing:2,columns:`300px`,children:e})})};try{s.displayName=`FormStoryContainer`,s.__docgenInfo={description:``,displayName:`FormStoryContainer`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/hook-form/docs/FormStoryContainer/FormStoryContainer.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/Form/Form.tsx`,name:`TypeLiteral`}],description:`Содержимое формы`,name:`children`,parent:{fileName:`ui-temp-10-2026/node_modules/@types/react/index.d.ts`,name:`DOMAttributes`},required:!1,tags:{},type:{name:`ReactNode`}},form:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/Form/Form.tsx`,name:`TypeLiteral`}],description:`Значение, которое возвращает useForm. Необходимо для передачи в FormContext`,name:`form`,required:!0,tags:{example:`\`\`\`tsx
import { Form, useForm } from '@astral/form';

function App() {
  const form = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} form={form}>
      <input defaultValue="test" {...form.register("example")} />
      <input type="submit" />
    </form>
  );
}
\`\`\``},type:{name:`UseFormReturn<any>`}},isDisabled:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/hook-form/Form/Form.tsx`,name:`TypeLiteral`}],description:`Если true, форма будет недоступна для взаимодействия`,name:`isDisabled`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}function l(){return(l=e((()=>{c()})))()}function u(){return(u=e((()=>{l()})))()}export{s as n,c as r,u as t};