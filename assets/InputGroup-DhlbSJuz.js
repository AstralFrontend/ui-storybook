import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{Un as t,Wn as n,Xt as r,en as i,ji as a,ya as o,yn as s,za as c}from"./preview--MgaEBgF.js";import{i as l,r as u}from"./FormControl-DPwTjKkY.js";var d;function f(){return(f=e((()=>{l(),t(),r(),s(),d=a.fieldset`
  display: grid;
  grid-template-columns: ${({$columnsTemplate:e})=>e};

  margin-inline: 0;
  padding: 0;

  border: unset;

  & .${u.root} {
    width: 100%;

    .${n.root} {
      position: relative;
      z-index: 2;

      border-radius: 0;

      &.${n.focused} {
        z-index: 4;
      }
    }
  }

  /* Скругления только крайних инпутов */
  & > :first-child .${n.root} {
    border-top-left-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
    
    &.${n.disabled} {
      z-index: 1;

      &::after {
        content: '';

        position: absolute;
        right: 0;

        width: 1px;
        height: 100%;

        background-color: ${({theme:e})=>e.palette.grey[500]};
      }
    }
  }

  & > :last-child .${n.root} {
    border-top-right-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
  }

  & > :not(:first-child) .${n.root} {
    &.${n.disabled} {
      z-index: 1;
 
    
    &::after {
        content: '';
  
        position: absolute;
        left: 0;
  
        width: 1px;
        height: 100%;
  
        background-color: ${({theme:e})=>e.palette.grey[500]};
      }
    }
  
  }
  
  & > :not(:last-child) .${n.root} {
    width: auto;
    margin-right: -2px;
    
    ${i} {
      &:hover {
        z-index: 3;

        &.${n.disabled} {
          z-index: 1;
        }
      }
    }
  }

  
`})))()}var p,m;function h(){return(h=e((()=>{p=c(),m=({children:e,columns:t})=>({gridColumnTemplate:()=>t?t.join(` `):`repeat(${p.Children.count(e)}, 1fr)`})})))()}function g(){return(g=e((()=>{h()})))()}var _,v;function y(){return(y=e((()=>{f(),g(),_=o(),v=({children:e,columns:t})=>{let{gridColumnTemplate:n}=m({children:e,columns:t});return(0,_.jsx)(d,{$columnsTemplate:n(),children:e})};try{v.displayName=`InputGroup`,v.__docgenInfo={description:``,displayName:`InputGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InputGroup/InputGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InputGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InputGroup/types.ts`,name:`TypeLiteral`}],description:`Определяет шаблон колонок для grid группы инпутов`,name:`columns`,required:!1,tags:{example:`columns={['300px', '1fr', '30%]}`},type:{name:`string[]`}}},tags:{}}}catch{}})))()}export{y as n,v as t};