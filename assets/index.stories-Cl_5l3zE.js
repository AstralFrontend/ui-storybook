import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{E as t,w as n,ya as r,za as i}from"./preview-BabqIrZj.js";import{t as a}from"./DescriptionList-BeLQl_71.js";import{t as o}from"./DescriptionList-BfWN3fRW.js";import{i as s,t as c}from"./PageContent-DhRG5NyT.js";import{t as l}from"./PageLayout-D-iQsau3.js";import{t as u}from"./PageLayout-BNXR7dJ0.js";import{$t as d,Mt as ee,U as f}from"./common-COG1iHx5.js";import{S as te,_ as p,a as m,b as h,f as g,h as _,l as v,m as y,n as b,o as x,t as S,u as C,v as w,y as T}from"./common-D7WD7l-u.js";var E,D,O;function ne(){return(ne=e((()=>{E=i(),o(),c(),u(),f(),w(),g(),S(),D=r(),O=()=>{let e=(0,E.useRef)(null),{data:t,isLoading:n,isEndReached:r,incrementData:i}=m(),o=(0,E.forwardRef)((e,t)=>{let{className:n,to:r,children:i,target:a}=e;return(0,D.jsx)(`a`,{ref:t,className:n,href:r,target:a,children:i})}),c=()=>{let[e,t]=(0,E.useState)(!1);return(0,D.jsx)(_,{actions:[y(o,{name:`К документам`,variant:`outlined`,color:`grey`,to:`/`,target:`_blank`}),{name:`Удалить`,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},isBlockingOperation:!0,loading:e,color:`error`,variant:`outlined`}]})};return(0,D.jsx)(l,{header:d,content:(0,D.jsx)(s,{scrollRef:e,children:(0,D.jsx)(p,{list:t,isLoading:n,isEndReached:r,onLoadMore:i,onRetry:()=>{},skeleton:{component:(0,D.jsx)(C,{}),count:6},defineCard:({organization:e,content:t})=>({header:(0,D.jsx)(x,{organization:e}),content:(0,D.jsx)(a,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`}),mainActions:c}),desktopCardWidth:{min:`400px`,max:`1fr`},scrollRef:e})})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  // import { CardGridMainActions, CardGridInfinite, replaceActionComponent } from '@astral/ui/components/CardGridInfinite'

  const scrollRef = useRef(null);
  const {
    data,
    isLoading,
    isEndReached,
    incrementData
  } = useInfiniteList();
  const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => {
    const {
      className,
      to,
      children,
      target
    } = props;
    return <a ref={ref} className={className} href={to} target={target}>
          {children}
        </a>;
  });
  const MainActions = () => {
    const [isDeleting, setDeleting] = useState(false);
    const handleDelete = () => {
      setDeleting(true);
      setTimeout(() => setDeleting(false), 1500);
    };
    return <CardGridMainActions actions={[replaceActionComponent(RouterLink, {
      name: 'К документам',
      variant: 'outlined',
      color: 'grey',
      to: '/',
      target: '_blank'
    }), {
      name: 'Удалить',
      onClick: handleDelete,
      isBlockingOperation: true,
      loading: isDeleting,
      color: 'error',
      variant: 'outlined'
    }]} />;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite list={data} isLoading={isLoading} isEndReached={isEndReached} onLoadMore={incrementData} onRetry={() => {}} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} defineCard={({
      organization,
      content
    }) => {
      return {
        header: <CardHeader organization={organization} />,
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />,
        mainActions: MainActions
      };
    }} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} scrollRef={scrollRef} />
        </PageContent>} />;
}`,...O.parameters?.docs?.source},description:{story:"Для передачи кастомного компонента в CardGridMainAction, необходимо использовать `replaceActionComponent` при создании объекта actions",...O.parameters?.docs?.description}}};try{O.displayName=`ActionAsLink`,O.__docgenInfo={description:"Для передачи кастомного компонента в CardGridMainAction, необходимо использовать `replaceActionComponent` при создании объекта actions",displayName:`ActionAsLink`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/CardGridInfinite/stories/ActionAsLink.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var k,A,j;function re(){return(re=e((()=>{k=i(),o(),c(),u(),f(),w(),g(),T(),S(),A=r(),j=()=>{let e=(0,k.useRef)(null),{data:t,isLoading:n,isEndReached:r,incrementData:i}=m(),o=()=>{let[e,t]=(0,k.useState)(!1);return(0,A.jsx)(h,{mobileTitle:`Дополнительные действия`,actions:[{name:`Подписать`,onClick:()=>{t(!0),setTimeout(()=>{t(!1)},1500)},loading:e,isBlockingOperation:!0},{name:`Делегировать`,onClick:()=>{}}]})},c=()=>{let[e,t]=(0,k.useState)(!1);return(0,A.jsx)(_,{actions:[y(b,{name:`К документам`,variant:`outlined`,color:`grey`,to:`/`,target:`_blank`}),{name:`Удалить`,variant:`outlined`,color:`error`,loading:e,onClick:()=>{t(!0),setTimeout(()=>t(!1),1500)},isBlockingOperation:!0}]})};return(0,A.jsx)(l,{header:d,content:(0,A.jsx)(s,{scrollRef:e,children:(0,A.jsx)(p,{list:t,isLoading:n,isEndReached:r,onLoadMore:i,onRetry:()=>{},skeleton:{component:(0,A.jsx)(C,{}),count:6},defineCard:({organization:e,content:t})=>({header:(0,A.jsx)(x,{organization:e}),content:(0,A.jsx)(a,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`}),mainActions:c,secondaryActions:()=>(0,A.jsx)(o,{})}),desktopCardWidth:{min:`400px`,max:`1fr`},scrollRef:e})})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const {
    data,
    isLoading,
    isEndReached,
    incrementData
  } = useInfiniteList();
  const SecondaryActions = () => {
    const [isSigning, setSigning] = useState(false);
    const handleSign = () => {
      setSigning(true);
      setTimeout(() => {
        setSigning(false);
      }, 1500);
    };
    return <CardGridSecondaryActions mobileTitle="Дополнительные действия" actions={[{
      name: 'Подписать',
      onClick: handleSign,
      loading: isSigning,
      isBlockingOperation: true
    }, {
      name: 'Делегировать',
      onClick: () => {}
    }]} />;
  };
  const MainActions = () => {
    const [isDeleting, setDeleting] = useState(false);
    const handleDelete = () => {
      setDeleting(true);
      setTimeout(() => setDeleting(false), 1500);
    };
    return <CardGridMainActions actions={[replaceActionComponent(RouterLink, {
      name: 'К документам',
      variant: 'outlined',
      color: 'grey',
      to: '/',
      target: '_blank'
    }), {
      name: 'Удалить',
      variant: 'outlined',
      color: 'error',
      loading: isDeleting,
      onClick: handleDelete,
      isBlockingOperation: true
    }]} />;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite list={data} isLoading={isLoading} isEndReached={isEndReached} onLoadMore={incrementData} onRetry={() => {}} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} defineCard={({
      organization,
      content
    }) => {
      return {
        header: <CardHeader organization={organization} />,
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />,
        mainActions: MainActions,
        secondaryActions: () => <SecondaryActions />
      };
    }} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} scrollRef={scrollRef} />
        </PageContent>} />;
}`,...j.parameters?.docs?.source}}}})))()}var ie,M,N;function P(){return(P=e((()=>{ie=i(),o(),c(),u(),f(),w(),S(),M=r(),N=()=>{let e=(0,ie.useRef)(null),t=v({length:9});return(0,M.jsx)(l,{header:d,content:(0,M.jsx)(s,{scrollRef:e,children:(0,M.jsx)(p,{list:t,onRetry:()=>{},onLoadMore:()=>{},skeleton:{component:(0,M.jsx)(C,{}),count:6},defineCard:({organization:e,content:t})=>({header:(0,M.jsx)(x,{organization:e}),content:(0,M.jsx)(a,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`})}),desktopCardWidth:{min:`350px`,max:`1fr`},scrollRef:e})})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  // import { CardGridInfinite, cardGridClassnames } from '@astral/ui/components/CardGridInfinite'

  const scrollRef = useRef(null);
  const data = makeCardGridInfiniteData({
    length: 9
  });
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite list={data} onRetry={() => {}} onLoadMore={() => {}} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} defineCard={({
      organization,
      content
    }) => {
      return {
        header: <CardHeader organization={organization} />,
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />
      };
    }} desktopCardWidth={{
      min: '350px',
      max: '1fr'
    }} scrollRef={scrollRef} />
        </PageContent>} />;
}`,...N.parameters?.docs?.source},description:{story:"Параметр `desktopCardWidth` задает минимальную и максимальную ширину относительно для карточек внутри grid контейнера. По-дефолту контейнер адаптивный и располагает столько карточек в ряд, сколько помещается\n\nДля большего контроля над grid контейнером используйте `cardGridClassnames.list`",...N.parameters?.docs?.description}}};try{N.displayName=`DesktopCardWidth`,N.__docgenInfo={description:"Параметр `desktopCardWidth` задает минимальную и максимальную ширину относительно для карточек внутри grid контейнера. По-дефолту контейнер адаптивный и располагает столько карточек в ряд, сколько помещается\n\nДля большего контроля над grid контейнером используйте `cardGridClassnames.list`",displayName:`DesktopCardWidth`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/CardGridInfinite/stories/DesktopCardWidth.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var F,I,L;function ae(){return(ae=e((()=>{F=i(),n(),o(),c(),u(),f(),w(),S(),I=r(),L=()=>{let e=(0,F.useRef)(null),n=v({length:12});return(0,I.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,I.jsx)(l,{header:d,content:(0,I.jsx)(s,{scrollRef:e,children:(0,I.jsx)(p,{list:n,isError:!0,onRetry:()=>{},skeleton:{component:void 0,count:0},defineCard:({organization:e,content:t})=>({header:(0,I.jsx)(x,{organization:e}),content:(0,I.jsx)(a,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`})}),desktopCardWidth:{min:`400px`,max:`1fr`},onLoadMore:()=>{},scrollRef:e})})})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  // import { CardGridMainActions, CardGridSecondaryActions, CardGridInfinite } from '@astral/ui/components/CardGridInfinite'

  const scrollRef = useRef(null);
  const data = makeCardGridInfiniteData({
    length: 12
  });
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: '',
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <CardGridInfinite list={data} isError onRetry={() => {}} skeleton={{
        component: undefined,
        count: 0
      }} defineCard={({
        organization,
        content
      }) => {
        return {
          header: <CardHeader organization={organization} />,
          content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />
        };
      }} desktopCardWidth={{
        min: '400px',
        max: '1fr'
      }} onLoadMore={() => {}} scrollRef={scrollRef} />
          </PageContent>} />
    </ConfigProvider>;
}`,...L.parameters?.docs?.source}}}})))()}var R,z,B,V;function H(){return(H=e((()=>{R=i(),o(),c(),u(),f(),w(),T(),S(),z=r(),B=[{name:`Подписать`,onClick:()=>{}},{name:`Делегировать`,onClick:()=>{}},{name:`Удалить`,onClick:()=>{}}],V=()=>{let e=(0,R.useRef)(null),t=v({length:20}),n=()=>{let[e,t]=(0,R.useState)([]);return(0,R.useEffect)(()=>{setTimeout(()=>{t(B)},2e3)},[]),(0,z.jsx)(h,{mobileTitle:`Дополнительные действия`,actions:e,isLoading:!e?.length})};return(0,z.jsx)(l,{header:d,content:(0,z.jsx)(s,{scrollRef:e,children:(0,z.jsx)(p,{onLoadMore:()=>{},onRetry:()=>{},scrollRef:e,list:t,desktopCardWidth:{min:`400px`,max:`1fr`},skeleton:{component:(0,z.jsx)(C,{}),count:6},defineCard:({content:e,organization:t})=>({content:(0,z.jsx)(a,{leader:!0,items:e,direction:`row`,justifyContent:`space-between`}),header:(0,z.jsx)(x,{organization:t}),secondaryActions:()=>(0,z.jsx)(R.Suspense,{fallback:(0,z.jsx)(te,{}),children:(0,z.jsx)(n,{})})})})})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const data = makeCardGridInfiniteData({
    length: 20
  });
  const SecondaryActions = () => {
    const [actions, setActions] = useState<SecondaryAction<CardGridInfiniteDataItem>[]>([]);
    useEffect(() => {
      setTimeout(() => {
        setActions(FAKE_ACTIONS);
      }, 2000);
    }, []);
    return <CardGridSecondaryActions mobileTitle="Дополнительные действия" actions={actions} isLoading={!actions?.length} />;
  };
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite onLoadMore={() => {}} onRetry={() => {}} scrollRef={scrollRef} list={data} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} defineCard={({
      content,
      organization
    }) => {
      return {
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />,
        header: <CardHeader organization={organization} />,
        secondaryActions: () => <Suspense fallback={<CardGridSecondaryActionsSkeleton />}>
                    <SecondaryActions />
                  </Suspense>
      };
    }} />
        </PageContent>} />;
}`,...V.parameters?.docs?.source}}}})))()}var U,W,G;function K(){return(K=e((()=>{U=i(),n(),c(),u(),f(),w(),W=r(),G=()=>{let e=(0,U.useRef)(null);return(0,W.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./error.svg`,noDataImgSrc:`./no-data-stub.svg`,outdatedReleaseErrorImgSrc:``},children:(0,W.jsx)(l,{header:d,content:(0,W.jsx)(s,{scrollRef:e,children:(0,W.jsx)(p,{scrollRef:e,list:[],onRetry:()=>{},skeleton:{component:void 0,count:0},defineCard:()=>({content:void 0}),desktopCardWidth:{min:``,max:``},onLoadMore:()=>{}})})})})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const noDataStubSrc = './no-data-stub.svg';
  const scrollRef = useRef(null);
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './error.svg',
    noDataImgSrc: noDataStubSrc,
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <CardGridInfinite scrollRef={scrollRef} list={[]} onRetry={() => {}} skeleton={{
        component: undefined,
        count: 0
      }} defineCard={() => {
        return {
          content: undefined
        };
      }} desktopCardWidth={{
        min: '',
        max: ''
      }} onLoadMore={() => {}} />
          </PageContent>} />
    </ConfigProvider>;
}`,...G.parameters?.docs?.source}}}})))()}var q,J,oe,Y;function se(){return(se=e((()=>{q=i(),o(),c(),u(),f(),w(),g(),S(),J=r(),oe=[y(b,{name:`К документам`,to:`/`,variant:`outlined`,color:`grey`,target:`_blank`}),{name:`Удалить`,variant:`outlined`,color:`error`}],Y=()=>{let e=(0,q.useRef)(null),t=v({length:20});return(0,J.jsx)(l,{header:d,content:(0,J.jsx)(s,{scrollRef:e,children:(0,J.jsx)(p,{scrollRef:e,list:t,onRetry:()=>{},onLoadMore:()=>{},desktopCardWidth:{min:`400px`,max:`1fr`},defineCard:({organization:e,content:t})=>({header:(0,J.jsx)(x,{organization:e,isDisabled:t[0].name===`Заявка отклонена`}),content:(0,J.jsx)(a,{leader:!0,items:t,direction:`row`,justifyContent:`space-between`}),mainActions:()=>(0,J.jsx)(_,{actions:oe}),isDisabled:t[0].name===`Заявка отклонена`,disabledReason:`Заявка была отклонена`}),skeleton:{component:(0,J.jsx)(C,{}),count:6}})})})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  const slicedData = makeCardGridInfiniteData({
    length: 20
  });
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite scrollRef={scrollRef} list={slicedData} onRetry={() => {}} onLoadMore={() => {}} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} defineCard={({
      organization,
      content
    }) => {
      return {
        header: <CardHeader organization={organization} isDisabled={content[0].name === 'Заявка отклонена'} />,
        content: <DescriptionList leader items={content} direction="row" justifyContent="space-between" />,
        mainActions: () => <CardGridMainActions actions={FAKE_ACTIONS} />,
        isDisabled: content[0].name === 'Заявка отклонена',
        disabledReason: 'Заявка была отклонена'
      };
    }} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} />
        </PageContent>} />;
}`,...Y.parameters?.docs?.source}}}})))()}var ce,X,Z;function le(){return(le=e((()=>{ce=i(),n(),c(),u(),f(),w(),X=r(),Z=()=>{let e=(0,ce.useRef)(null);return(0,X.jsx)(t,{imagesMap:{defaultErrorImgSrc:`./no-data-stub.svg`,noDataImgSrc:``,outdatedReleaseErrorImgSrc:``},children:(0,X.jsx)(l,{header:d,content:(0,X.jsx)(s,{scrollRef:e,children:(0,X.jsx)(p,{scrollRef:e,list:[],isError:!0,onRetry:()=>{},skeleton:{component:void 0,count:0},defineCard:()=>({content:void 0}),desktopCardWidth:{min:``,max:``},onLoadMore:()=>{}})})})})},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <ConfigProvider imagesMap={{
    defaultErrorImgSrc: './no-data-stub.svg',
    noDataImgSrc: '',
    outdatedReleaseErrorImgSrc: ''
  }}>
      <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
            <CardGridInfinite scrollRef={scrollRef} list={[]} isError onRetry={() => {}} skeleton={{
        component: undefined,
        count: 0
      }} defineCard={() => {
        return {
          content: undefined
        };
      }} desktopCardWidth={{
        min: '',
        max: ''
      }} onLoadMore={() => {}} />
          </PageContent>} />
    </ConfigProvider>;
}`,...Z.parameters?.docs?.source}}}})))()}var ue,Q,$;function de(){return(de=e((()=>{ue=i(),c(),u(),f(),w(),S(),Q=r(),$=()=>{let e=(0,ue.useRef)(null);return(0,Q.jsx)(l,{header:d,content:(0,Q.jsx)(s,{scrollRef:e,children:(0,Q.jsx)(p,{list:[],scrollRef:e,isLoading:!0,onRetry:()=>{},skeleton:{component:(0,Q.jsx)(C,{}),count:6},defineCard:()=>({content:void 0}),desktopCardWidth:{min:`400px`,max:`1fr`},onLoadMore:()=>{}})})})},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const scrollRef = useRef(null);
  return <PageLayout header={MockHeader} content={<PageContent scrollRef={scrollRef}>
          <CardGridInfinite list={[]} scrollRef={scrollRef} isLoading onRetry={() => {}} skeleton={{
      component: <CardSkeleton />,
      count: 6
    }} defineCard={() => {
      return {
        content: undefined
      };
    }} desktopCardWidth={{
      min: '400px',
      max: '1fr'
    }} onLoadMore={() => {}} />
        </PageContent>} />;
}`,...$.parameters?.docs?.source},description:{story:`Для отображения состояния загрузки компонента необходимо:
   1. Запросить у дизайнеров скелетон-компонент карточки,
      который будет соответствовать реальной карточки по размерам и структуре
   2. Уточнить количество одновременно отображаемых скелетонов (\`count\`),
      которое должно оптимально заполнять видимую область контейнера
      без избыточного или недостаточного заполнения пространства`,...$.parameters?.docs?.description}}};try{$.displayName=`WithLoading`,$.__docgenInfo={description:`Для отображения состояния загрузки компонента необходимо:
   1. Запросить у дизайнеров скелетон-компонент карточки,
      который будет соответствовать реальной карточки по размерам и структуре
   2. Уточнить количество одновременно отображаемых скелетонов (\`count\`),
      которое должно оптимально заполнять видимую область контейнера
      без избыточного или недостаточного заполнения пространства`,displayName:`WithLoading`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/CardGridInfinite/stories/WithLoading.story.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var fe,pe;function me(){return(me=e((()=>{f(),w(),ne(),re(),P(),ae(),H(),K(),se(),le(),de(),fe={title:`Lists/CardGridInfinite`,component:p,decorators:ee,parameters:{layout:`fullscreen`,docs:{description:{component:`CardGridInfinite - компонент для просмотра бесконечного списка карточек в grid структуре
### [Figma](https://www.figma.com/design/2gz5yVQ2quSe5KtFbMUrfr/%E2%9C%B4%EF%B8%8F-Astral-UI-2.0?node-id=6538-107237&t=v42H0ysAZoWg0nXj-0)

Для добавления действий на карточку необходимо использовать компоненты **CardGridMainActions** и **CardGridSecondaryActions**`}}}},pe=[`BasicUsage`,`ActionAsLink`,`WithLoading`,`WithError`,`NoData`,`ErrorWithData`,`DesktopCardWidth`,`LazySecondaryActions`,`WithDisabledItems`]})))()}me();export{O as ActionAsLink,j as BasicUsage,N as DesktopCardWidth,L as ErrorWithData,V as LazySecondaryActions,G as NoData,Y as WithDisabledItems,Z as WithError,$ as WithLoading,pe as __namedExportsOrder,fe as default};