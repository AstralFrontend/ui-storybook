import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{ya as t,za as n}from"./preview-BYX69pdz.js";import{l as r,u as i}from"./PageContent-BOibqg8Q.js";import{a,i as o,n as s,t as c}from"./HistoryOutlineMd-CbLTXJJq.js";import{n as l,t as u}from"./DocumentOutlineMd-DthkXZLq.js";import{n as d,t as f}from"./common-C3G7ZE3t.js";import{n as p,o as m,s as h,t as g}from"./PageAsideNavigationItem-DEI6Q4WG.js";import{c as _,i as v,n as y,o as b,t as x}from"./common-D7PXPOYY.js";var S,C;function w(){return(w=e((()=>{r(),h(),x(),S=t(),C=()=>(0,S.jsx)(_,{aside:(0,S.jsx)(i,{navigation:(0,S.jsx)(m,{addonNavigation:(0,S.jsx)(y,{}),addonNavigationPosition:`end`,children:(0,S.jsx)(v,{})})})}),C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <MockPageLayout aside={<PageAside navigation={<PageAsideNavigation addonNavigation={<SelectDocument />} addonNavigationPosition="end">
              <MockPageAsideNavigationContent />
            </PageAsideNavigation>} />} />;
}`,...C.parameters?.docs?.source},description:{story:"Параметр `addonNavigationPosition` управляет позиционированием дополнительной навигации.",...C.parameters?.docs?.description}}};try{C.displayName=`AddonNavigationPositionEnd`,C.__docgenInfo={description:"Параметр `addonNavigationPosition` управляет позиционированием дополнительной навигации.",displayName:`AddonNavigationPositionEnd`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/AddonNavigationPositionEnd.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D,O;function k(){return(k=e((()=>{T=n(),u(),o(),c(),r(),h(),g(),x(),E=t(),D=(0,T.forwardRef)((e,t)=>{let{className:n,to:r,children:i,target:a}=e;return(0,E.jsx)(`a`,{ref:t,className:n,href:r,target:a,children:i})}),O=()=>(0,E.jsx)(_,{aside:(0,E.jsx)(i,{navigation:(0,E.jsxs)(m,{children:[(0,E.jsx)(p,{isActive:!0,component:`a`,href:`/document`,target:`_blank`,icon:(0,E.jsx)(l,{}),children:`Просмотр документа`}),(0,E.jsx)(p,{component:D,to:`/documents`,target:`_blank`,icon:(0,E.jsx)(a,{}),children:`Вложенные файлы`}),(0,E.jsx)(p,{component:D,to:`/history`,target:`_blank`,icon:(0,E.jsx)(s,{}),children:`История изменений`})]}),children:(0,E.jsx)(b,{})})}),O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <MockPageLayout aside={<PageAside navigation={<PageAsideNavigation>
              <PageAsideNavigationItem isActive component="a" href="/document" target="_blank" icon={<DocumentOutlineMd />}>
                Просмотр документа
              </PageAsideNavigationItem>
              <PageAsideNavigationItem component={RouterLink} to="/documents" target="_blank" icon={<DocumentsOutlineMd />}>
                Вложенные файлы
              </PageAsideNavigationItem>
              <PageAsideNavigationItem component={RouterLink} to="/history" target="_blank" icon={<HistoryOutlineMd />}>
                История изменений
              </PageAsideNavigationItem>
            </PageAsideNavigation>}>
          <MockPageAsideContent />
        </PageAside>} />;
}`,...O.parameters?.docs?.source}}}})))()}var A,j,M;function N(){return(N=e((()=>{A=n(),u(),o(),c(),r(),h(),g(),x(),j=t(),M=()=>{let[e,t]=(0,A.useState)(`document`),n=e=>{t(e)};return(0,j.jsx)(_,{aside:(0,j.jsx)(i,{navigation:(0,j.jsxs)(m,{children:[(0,j.jsx)(p,{isActive:e===`document`,component:`button`,onClick:()=>n(`document`),icon:(0,j.jsx)(l,{}),children:`Просмотр документа`}),(0,j.jsx)(p,{component:`button`,onClick:()=>n(`documents`),isActive:e===`documents`,icon:(0,j.jsx)(a,{}),children:`Вложенные файлы`}),(0,j.jsx)(p,{component:`button`,onClick:()=>n(`history`),isActive:e===`history`,icon:(0,j.jsx)(s,{}),children:`История изменений`})]}),children:(0,j.jsx)(b,{})})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const [activeRoute, setActiveRoute] = useState<string>('document');
  const handleChangeRoute = (route: string) => {
    setActiveRoute(route);
  };
  return <MockPageLayout aside={<PageAside navigation={<PageAsideNavigation>
              <PageAsideNavigationItem isActive={activeRoute === 'document'} component="button" onClick={() => handleChangeRoute('document')} icon={<DocumentOutlineMd />}>
                Просмотр документа
              </PageAsideNavigationItem>
              <PageAsideNavigationItem component="button" onClick={() => handleChangeRoute('documents')} isActive={activeRoute === 'documents'} icon={<DocumentsOutlineMd />}>
                Вложенные файлы
              </PageAsideNavigationItem>
              <PageAsideNavigationItem component="button" onClick={() => handleChangeRoute('history')} isActive={activeRoute === 'history'} icon={<HistoryOutlineMd />}>
                История изменений
              </PageAsideNavigationItem>
            </PageAsideNavigation>}>
          <MockPageAsideContent />
        </PageAside>} />;
}`,...M.parameters?.docs?.source}}}})))()}var P,F;function I(){return(I=e((()=>{r(),h(),x(),P=t(),F=()=>(0,P.jsx)(_,{aside:(0,P.jsx)(i,{navigation:(0,P.jsx)(m,{addonNavigation:(0,P.jsx)(y,{}),children:(0,P.jsx)(v,{})})})}),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <MockPageLayout aside={<PageAside navigation={<PageAsideNavigation addonNavigation={<SelectDocument />}>
              <MockPageAsideNavigationContent />
            </PageAsideNavigation>} />} />;
}`,...F.parameters?.docs?.source},description:{story:"С помощью параметра `addonNavigation` можно добавить дополнительную навигацию в виде кастомного компонента.",...F.parameters?.docs?.description}}};try{F.displayName=`WithAddonNavigation`,F.__docgenInfo={description:"С помощью параметра `addonNavigation` можно добавить дополнительную навигацию в виде кастомного компонента.",displayName:`WithAddonNavigation`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/PageAsideNavigation/stories/WithAddonNavigation.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var L,R;function z(){return(z=e((()=>{f(),h(),w(),k(),N(),I(),L={title:`Layouts/PageLayout/PageAside/PageAsideNavigation`,component:m,decorators:d,parameters:{layout:`fullscreen`,docs:{description:{component:`### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=589-132813)`}}}},R=[`BasicUsage`,`AsLinkItems`,`WithAddonNavigation`,`AddonNavigationPositionEnd`]})))()}z();export{C as AddonNavigationPositionEnd,O as AsLinkItems,M as BasicUsage,F as WithAddonNavigation,R as __namedExportsOrder,L as default};