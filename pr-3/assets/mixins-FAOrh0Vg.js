import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{Ni as t,bn as n}from"./preview-DApj709n.js";var r;function i(){return(i=e((()=>{n(),r=()=>t`
  margin: 0;
  padding: 0;

  list-style-type: none;
`})))()}function a(){return(a=e((()=>{i()})))()}var o;function s(){return(s=e((()=>{n(),o=()=>t`
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
`})))()}var c;function l(){return(l=e((()=>{n(),c=e=>t`
  transform: rotateZ(${e?`180deg`:`0deg`});

  transition: transform 250ms cubic-bezier(0.4, 0, 0.6, 1);
`})))()}var u;function d(){return(d=e((()=>{n(),u=e=>t`
  animation: ${e?`fade-in 150ms ease-out forwards`:`fade-out 150ms ease-out forwards`};

  @keyframes fade-in {
    from {
      transform: translateY(-8px);

      opacity: 0;
    }

    to {
      transform: translateY(0);

      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      transform: translateY(0);

      opacity: 1;
    }

    to {
      transform: translateY(-8px);

      opacity: 0;
    }
  }
`})))()}function f(){return(f=e((()=>{s(),l(),d()})))()}function p(){return(p=e((()=>{a(),f()})))()}export{l as a,i as c,c as i,r as l,u as n,o,d as r,s,p as t};