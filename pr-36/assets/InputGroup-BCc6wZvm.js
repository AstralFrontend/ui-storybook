import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Un as t,Va as n,Wn as r,Xt as i,en as a,ji as o,xa as s,yn as c}from"./preview-ClJ99rAL.js";import{i as l,r as u}from"./FormControl-hSs0VVUl.js";var d;function f(){return(f=e((()=>{l(),t(),i(),c(),d=o.fieldset`
  display: grid;
  grid-template-columns: ${({$columnsTemplate:e})=>e};

  margin-inline: 0;
  padding: 0;

  border: unset;

  & .${u.root} {
    width: 100%;

    .${r.root} {
      position: relative;
      z-index: 2;

      border-radius: 0;

      &.${r.focused} {
        z-index: 4;
      }
    }
  }

  /* Скругления только крайних инпутов */
  & > :first-child .${r.root} {
    border-top-left-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-left-radius: ${({theme:e})=>e.shape.medium};
    
    &.${r.disabled} {
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

  & > :last-child .${r.root} {
    border-top-right-radius: ${({theme:e})=>e.shape.medium};
    border-bottom-right-radius: ${({theme:e})=>e.shape.medium};
  }

  & > :not(:first-child) .${r.root} {
    &.${r.disabled} {
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
  
  & > :not(:last-child) .${r.root} {
    width: auto;
    margin-right: -2px;
    
    ${a} {
      &:hover {
        z-index: 3;

        &.${r.disabled} {
          z-index: 1;
        }
      }
    }
  }

  
`})))()}var p,m;function h(){return(h=e((()=>{p=n(),m=({children:e,columns:t})=>({gridColumnTemplate:()=>t?t.join(` `):`repeat(${p.Children.count(e)}, 1fr)`})})))()}function g(){return(g=e((()=>{h()})))()}var _,v;function y(){return(y=e((()=>{f(),g(),_=s(),v=({children:e,columns:t})=>{let{gridColumnTemplate:n}=m({children:e,columns:t});return(0,_.jsx)(d,{$columnsTemplate:n(),children:e})};try{v.displayName=`InputGroup`,v.__docgenInfo={description:``,displayName:`InputGroup`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/InputGroup/InputGroup.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InputGroup/types.ts`,name:`TypeLiteral`}],description:``,name:`children`,required:!0,tags:{},type:{name:`ReactNode`}},columns:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/InputGroup/types.ts`,name:`TypeLiteral`}],description:`Определяет шаблон колонок для grid группы инпутов`,name:`columns`,required:!1,tags:{example:`columns={['300px', '1fr', '30%]}`},type:{name:`string[]`}}},tags:{}}}catch{}})))()}export{y as n,v as t};