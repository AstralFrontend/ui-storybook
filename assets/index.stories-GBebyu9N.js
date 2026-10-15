import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Va as t,cn as n,dt as r,ft as i,ji as a,ln as o,xa as s,yn as ee}from"./preview-De2xeSj1.js";import{t as te}from"./Dialog-cfPrkYON.js";import{n as c,o as l,s as u,t as ne}from"./DialogContent-DirwYpIr.js";import{n as d,t as f}from"./CodeField-BzHeb2xL.js";import{t as p}from"./Dialog-B81pn__C.js";var m,h,g,_;function v(){return(v=e((()=>{m=t(),ee(),d(),h=s(),g=a.div`
  width: 300px;
`,_=()=>{let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(!1);return(0,h.jsx)(g,{children:(0,h.jsx)(f,{loading:e,isError:n,onComplete:()=>{t(!0),setTimeout(()=>{t(!1),r(!0)},1500)},onResendCode:()=>Promise.resolve().finally(()=>{r(!1)}),isAllowResendCode:!0,codeLength:6,label:`Код подтверждения отправлен на test@test.ru`,resendTimeout:5})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsError(true);
    }, 1500);
  };
  return <Wrapper>
      <CodeField loading={isLoading} isError={isError} onComplete={handleComplete} onResendCode={() => Promise.resolve().finally(() => {
      setIsError(false);
    })} isAllowResendCode codeLength={6} label="Код подтверждения отправлен на test@test.ru" resendTimeout={5} />
    </Wrapper>;
}`,..._.parameters?.docs?.source}}}})))()}var y,b;function x(){return(x=e((()=>{d(),y=s(),b=()=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:4})}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:5})}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:6})}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:7})}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:8})}),(0,y.jsx)(`br`,{}),(0,y.jsx)(`div`,{children:(0,y.jsx)(f,{codeLength:9})})]}),b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <div>
    <div>
      <CodeField codeLength={4} />
    </div>

    <br />

    <div>
      <CodeField codeLength={5} />
    </div>

    <br />

    <div>
      <CodeField codeLength={6} />
    </div>

    <br />

    <div>
      <CodeField codeLength={7} />
    </div>

    <br />

    <div>
      <CodeField codeLength={8} />
    </div>

    <br />

    <div>
      <CodeField codeLength={9} />
    </div>
  </div>`,...b.parameters?.docs?.source}}}})))()}var S,C,w;function T(){return(T=e((()=>{d(),S=s(),C=`175629`,w=()=>(0,S.jsx)(f,{codeLength:6,label:`Код подтверждения отправлен на test@test.ru`,disabled:!0,onResendCode:()=>Promise.resolve(),initialValue:C,isAllowResendCode:!0}),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <CodeField codeLength={6} label="Код подтверждения отправлен на test@test.ru" disabled={true} onResendCode={() => Promise.resolve()} initialValue={TEST_VALUE} isAllowResendCode />`,...w.parameters?.docs?.source}}}})))()}var E,D,O;function k(){return(k=e((()=>{E=t(),n(),d(),D=s(),O=()=>{let[e,t]=(0,E.useState)(5);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(o,{onClick:()=>t(5),children:`5s`}),(0,D.jsx)(o,{onClick:()=>t(15),children:`15s`}),(0,D.jsx)(o,{onClick:()=>t(60),children:`60s`}),(0,D.jsx)(o,{onClick:()=>t(150),children:`150s`}),(0,D.jsx)(f,{codeLength:6,label:`Код подтверждения отправлен на test@test.ru`,onResendCode:()=>Promise.resolve(),isAllowResendCode:!0,resendTimeout:e})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [timeout, setTimeout] = useState(5);
  return <>
      <Button onClick={() => setTimeout(5)}>5s</Button>
      <Button onClick={() => setTimeout(15)}>15s</Button>
      <Button onClick={() => setTimeout(60)}>60s</Button>
      <Button onClick={() => setTimeout(150)}>150s</Button>

      <CodeField codeLength={6} label="Код подтверждения отправлен на test@test.ru" onResendCode={() => Promise.resolve()} isAllowResendCode resendTimeout={timeout} />
    </>;
}`,...O.parameters?.docs?.source}}}})))()}var A;function j(){return(j=e((()=>{A={args:{label:`Код подтверждения отправлен на test@test.ru`,codeLength:6},parameters:{docs:{disable:!0}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Код подтверждения отправлен на test@test.ru',
    codeLength: 6
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...A.parameters?.docs?.source}}}})))()}var M,N,P;function F(){return(F=e((()=>{M=t(),n(),p(),l(),ne(),d(),N=s(),P=()=>{let[e,t]=(0,M.useState)(!1),n=()=>{t(!0)},r=()=>{t(!1)},[i,a]=(0,M.useState)(!1);return(0,M.useEffect)(()=>{i&&setTimeout(()=>{a(e=>!e)},2e3)},[i]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o,{onClick:n,children:`Открыть CodeField`}),(0,N.jsxs)(te,{open:e,onClose:r,title:`Подтверждение личности`,children:[(0,N.jsx)(c,{children:(0,N.jsx)(f,{label:`Код подтверждения отправлен на test@test.ru`,codeLength:6,isAllowResendCode:!0,onResendCode:()=>Promise.resolve(),isAutoFocus:!0,loading:i,onComplete:()=>a(e=>!e)})}),(0,N.jsx)(u,{children:(0,N.jsx)(o,{variant:`text`,onClick:r,children:`Отмена`})})]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const [loading, setLoading] = useState(false);
  const handleComplete = () => setLoading(prevState => !prevState);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(prevState => !prevState);
      }, 2000);
    }
  }, [loading]);
  return <>
      <Button onClick={handleClickOpen}>Открыть CodeField</Button>
      <Dialog open={isOpen} onClose={handleClose} title="Подтверждение личности">
        <DialogContent>
          <CodeField label="Код подтверждения отправлен на test@test.ru" codeLength={6} isAllowResendCode onResendCode={() => Promise.resolve()} isAutoFocus loading={loading} onComplete={handleComplete} />
        </DialogContent>
        <DialogActionComponent>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
        </DialogActionComponent>
      </Dialog>
    </>;
}`,...P.parameters?.docs?.source}}}})))()}var I,L,R;function z(){return(z=e((()=>{d(),I=s(),L=`175629`,R=()=>(0,I.jsx)(f,{codeLength:6,label:`Код подтверждения отправлен на test@test.ru`,loading:!0,onResendCode:()=>Promise.resolve(),initialValue:L,isAllowResendCode:!0}),R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <CodeField codeLength={6} label="Код подтверждения отправлен на test@test.ru" loading={true} onResendCode={() => Promise.resolve()} initialValue={TEST_VALUE} isAllowResendCode />`,...R.parameters?.docs?.source}}}})))()}var B,V;function H(){return(H=e((()=>{d(),B=s(),V=()=>(0,B.jsx)(f,{codeLength:6,label:`Код подтверждения отправлен на test@test.ru`,onResendCode:()=>Promise.resolve(),isAllowResendCode:!0,onComplete:e=>alert(e)}),V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => <CodeField codeLength={6} label="Код подтверждения отправлен на test@test.ru" onResendCode={() => Promise.resolve()} isAllowResendCode onComplete={value => alert(value)} />`,...V.parameters?.docs?.source}}}})))()}var U,W,G;function K(){return(K=e((()=>{r(),d(),U=s(),W=`175629`,G=()=>(0,U.jsxs)(`div`,{children:[(0,U.jsx)(i,{variant:`h5`,paragraph:!0,children:`Дефолтный текст ошибки`}),(0,U.jsx)(`div`,{children:(0,U.jsx)(f,{codeLength:6,isError:!0,onResendCode:()=>Promise.resolve(),initialValue:W,isAllowResendCode:!0})}),(0,U.jsx)(`br`,{}),(0,U.jsx)(`br`,{}),(0,U.jsx)(i,{variant:`h5`,paragraph:!0,children:`Текст ошибки можно переопределить через пропс errorText`}),(0,U.jsx)(`div`,{children:(0,U.jsx)(f,{codeLength:6,isError:!0,errorText:`Код подтверждения неверный`,onResendCode:()=>Promise.resolve(),initialValue:W,isAllowResendCode:!0})})]}),G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => <div>
    <Typography variant="h5" paragraph>
      Дефолтный текст ошибки
    </Typography>
    <div>
      <CodeField codeLength={6} isError={true} onResendCode={() => Promise.resolve()} initialValue={TEST_VALUE} isAllowResendCode />
    </div>

    <br />
    <br />

    <Typography variant="h5" paragraph>
      Текст ошибки можно переопределить через пропс errorText
    </Typography>
    <div>
      <CodeField codeLength={6} isError={true} errorText="Код подтверждения неверный" onResendCode={() => Promise.resolve()} initialValue={TEST_VALUE} isAllowResendCode />
    </div>
  </div>`,...G.parameters?.docs?.source}}}})))()}var q,J,Y;function X(){return(X=e((()=>{d(),q=s(),J=`175629`,Y=()=>(0,q.jsx)(f,{codeLength:6,initialValue:J}),Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => <CodeField codeLength={6} initialValue={TEST_VALUE} />`,...Y.parameters?.docs?.source}}}})))()}var Z,Q;function $(){return($=e((()=>{d(),v(),x(),T(),k(),j(),F(),z(),H(),K(),X(),Z={title:`Form-Controls/CodeField`,component:f,parameters:{docs:{description:{component:`CodeField - Поле для ввода кода подтверждения, отсылаемого на телефон/email и т.п.

### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/AstralUi-2.0--%D0%B2-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-?node-id=527-34943&p=f&t=UWo5XpewFrx41KhD-0)`}}}},Q=[`Interaction`,`BasicUsage`,`WithError`,`Disabled`,`Loading`,`OnComplete`,`DynamicResendTimeout`,`WithoutRestartButton`,`CodeLength`,`IsAutoFocus`]})))()}$();export{_ as BasicUsage,b as CodeLength,w as Disabled,O as DynamicResendTimeout,A as Interaction,P as IsAutoFocus,R as Loading,V as OnComplete,G as WithError,Y as WithoutRestartButton,Q as __namedExportsOrder,Z as default};