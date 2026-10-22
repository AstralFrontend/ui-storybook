import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{$r as t,Cn as n,Dn as r,On as i,Va as a,ei as o,ji as s,wn as c,xa as l,yn as u}from"./preview-ClJ99rAL.js";import{n as d,t as f}from"./useViewportType-BXE4qqvP.js";import{n as p,t as m}from"./Popper-CrU7UZOy.js";import{t as h}from"./BottomDrawer-CTJ4y2Qf.js";import{t as g}from"./BottomDrawer-D23EIKz_.js";import{r as _,t as v}from"./useClickAwayEffect-yhqHgPtw.js";import{r as y,t as b}from"./usePopoverAnimation-hBnNumJ3.js";var x,S;function C(){return(C=e((()=>{i(),x={root:r(`popover`),innerContainer:r(`popover__inner-container`),animatedWrapper:r(`popover__animated-wrapper`),animatedWrapperOpen:r(`popover__animated-wrapper_is-open`),animatedWrapperHasArrow:r(`popover__animated-wrapper_has-arrow`),arrow:r(`popover__arrow`)},S=[{name:`preventOverflow`,options:{altAxis:!0,tether:!1,padding:16}}]})))()}var w,T,E,D;function ee(){return(ee=e((()=>{p(),u(),C(),w=s(m)`
  &.${x.root} {
    --arrow-base: ${23}px;
    --arrow-height: ${16}px;
    --popover-viewport-padding: ${16}px;

    z-index: ${({theme:e})=>e.zIndex.modal};
  }

  /* Anchor ушёл за скролл/вьюпорт — прячем стрелку. */
  &[data-popper-reference-hidden] .${x.arrow} {
    visibility: hidden;
  }

  &&[data-popper-placement*='top'] .${x.animatedWrapper} {
    transform-origin: bottom center;

    margin-bottom: ${({theme:e})=>e.spacing(2)};
  }

  &&[data-popper-placement*='bottom'] .${x.animatedWrapper} {
    transform-origin: top center;

    margin-top: ${({theme:e})=>e.spacing(2)};
  }

  &&[data-popper-placement*='left'] .${x.animatedWrapper} {
    transform-origin: right center;

    margin-right: ${({theme:e})=>e.spacing(2)};
  }

  &&[data-popper-placement*='right'] .${x.animatedWrapper} {
    transform-origin: left center;

    margin-left: ${({theme:e})=>e.spacing(2)};
  }

  &&[data-popper-placement*='top']
    .${x.animatedWrapperHasArrow} {
    margin-bottom: ${({theme:e})=>e.spacing(4)};
  }

  &&[data-popper-placement*='bottom']
    .${x.animatedWrapperHasArrow} {
    margin-top: ${({theme:e})=>e.spacing(4)};
  }

  &&[data-popper-placement*='left']
    .${x.animatedWrapperHasArrow} {
    margin-right: ${({theme:e})=>e.spacing(4)};
  }

  &&[data-popper-placement*='right']
    .${x.animatedWrapperHasArrow} {
    margin-left: ${({theme:e})=>e.spacing(4)};
  }

  &&[data-popper-placement*='bottom'] .${x.arrow} {
    top: calc(var(--arrow-height) * -1);

    width: var(--arrow-base);
    height: var(--arrow-height);

    &::before {
      border-color: transparent transparent var(--popover-surface-color, ${({theme:e})=>e.palette.background.paper});
      border-width: 0 calc(var(--arrow-base) / 2) var(--arrow-height);
    }
  }

  &&[data-popper-placement*='top'] .${x.arrow} {
    bottom: calc(var(--arrow-height) * -1);

    width: var(--arrow-base);
    height: var(--arrow-height);

    &::before {
      border-color: var(--popover-surface-color, ${({theme:e})=>e.palette.background.paper}) transparent transparent;
      border-width: var(--arrow-height) calc(var(--arrow-base) / 2) 0;
    }
  }

  &&[data-popper-placement*='right'] .${x.arrow} {
    left: calc(var(--arrow-height) * -1);

    width: var(--arrow-height);
    height: var(--arrow-base);

    &::before {
      border-color: transparent var(--popover-surface-color, ${({theme:e})=>e.palette.background.paper}) transparent
        transparent;
      border-width: calc(var(--arrow-base) / 2) var(--arrow-height) calc(var(--arrow-base) / 2) 0;
    }
  }

  &&[data-popper-placement*='left'] .${x.arrow} {
    right: calc(var(--arrow-height) * -1);

    width: var(--arrow-height);
    height: var(--arrow-base);

    &::before {
      border-color: transparent transparent transparent
        var(--popover-surface-color, ${({theme:e})=>e.palette.background.paper});
      border-width: calc(var(--arrow-base) / 2) 0 calc(var(--arrow-base) / 2) var(--arrow-height);
    }
  }
`,T=s.span`
  position: absolute;

  &::before {
    content: '';

    display: block;

    width: 0;
    height: 0;
    margin: auto;

    border-style: solid;
  }
`,E=s.div`
  position: relative;
  
  filter: var(--drop-shadow);

  animation: popover-grow-out
    ${({theme:e})=>e.transitions.duration.leavingScreen}ms
    ${({theme:e})=>e.transitions.easing.easeIn} forwards;

  &.${x.animatedWrapperOpen} {
    animation: popover-grow-in
      ${({theme:e})=>e.transitions.duration.standard}ms
      ${({theme:e})=>e.transitions.easing.easeOut} forwards;
  }

  @keyframes popover-grow-in {
    from {
      transform: scale(0.75, 0.5625);

      opacity: 0;
    }

    to {
      transform: none;

      opacity: 1;
    }
  }

  @keyframes popover-grow-out {
    from {
      transform: none;

      opacity: 1;
    }

    to {
      transform: scale(0.75, 0.5625);

      opacity: 0;
    }
  }
`,D=s.div`
  &.${x.innerContainer} {
    overflow: hidden;

    color: var(--popover-text-color, ${({theme:e})=>e.palette.text.primary});

    background: var(
      --popover-surface-color,
      ${({theme:e})=>e.palette.background.paper}
    );
    border-radius: var(--popover-radius, ${({theme:e})=>e.shape.medium});
  }
`})))()}var te,ne;function re(){return(re=e((()=>{te=a(),ne=({onEscape:e,isActive:t,preventBubbling:n})=>{(0,te.useEffect)(()=>{if(!t)return;let r=t=>{t.code===`Escape`&&(n&&(t.stopPropagation(),t.stopImmediatePropagation()),e?.(t,`escape`))};return window.addEventListener(`keydown`,r,!0),()=>{window.removeEventListener(`keydown`,r,!0)}},[t])}})))()}function O(){return(O=e((()=>{re()})))()}var k,A,j,M,N,P,ie,F,I,L,R,ae,oe,se,ce,le,ue,de,fe,pe,me,z,he,ge,B,V,_e,H,ve,ye,U,be,W;function xe(){return(xe=e((()=>{k=[`input:not([inert]):not([inert] *)`,`select:not([inert]):not([inert] *)`,`textarea:not([inert]):not([inert] *)`,`a[href]:not([inert]):not([inert] *)`,`area[href]:not([inert]):not([inert] *)`,`button:not([inert]):not([inert] *)`,`[tabindex]:not(slot):not([inert]):not([inert] *)`,`audio[controls]:not([inert]):not([inert] *)`,`video[controls]:not([inert]):not([inert] *)`,`[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)`,`details>summary:first-of-type:not([inert]):not([inert] *)`,`details:not([inert]):not([inert] *)`],A=k.join(`,`),j=typeof Element>`u`,M=j?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,N=!j&&Element.prototype.getRootNode?function(e){return e?.getRootNode?.call(e)}:function(e){return e?.ownerDocument},P=function(e,t){t===void 0&&(t=!0);var n=e?.getAttribute?.call(e,`inert`);return n===``||n===`true`||t&&e&&(typeof e.closest==`function`?e.closest(`[inert]`):P(e.parentNode))},ie=function(e){var t=e?.getAttribute?.call(e,`contenteditable`);return t===``||t===`true`},F=function(e,t,n){if(P(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(A));return t&&M.call(e,A)&&r.unshift(e),r=r.filter(n),r},I=function(e,t,n){for(var r=[],i=Array.from(e);i.length;){var a=i.shift();if(!P(a,!1)){if(a.tagName===`SLOT`){var o=a.assignedElements(),s=I(o.length?o:a.children,!0,n);n.flatten?r.push.apply(r,s):r.push({scopeParent:a,candidates:s})}else{M.call(a,A)&&n.filter(a)&&(t||!e.includes(a))&&r.push(a);var c=a.shadowRoot||typeof n.getShadowRoot==`function`&&n.getShadowRoot(a),l=!P(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(a));if(c&&l){var u=I(c===!0?a.children:c.children,!0,n);n.flatten?r.push.apply(r,u):r.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}}return r},L=function(e){return!isNaN(parseInt(e.getAttribute(`tabindex`),10))},R=function(e){if(!e)throw Error(`No node provided`);return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ie(e))&&!L(e)?0:e.tabIndex},ae=function(e,t){var n=R(e);return n<0&&t&&!L(e)?0:n},oe=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},se=function(e){return e.tagName===`INPUT`},ce=function(e){return se(e)&&e.type===`hidden`},le=function(e){return e.tagName===`DETAILS`&&Array.prototype.slice.apply(e.children).some(function(e){return e.tagName===`SUMMARY`})},ue=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]},de=function(e){if(!e.name)return!0;var t=e.form||N(e),n=function(e){return t.querySelectorAll(`input[type="radio"][name="`+e+`"]`)},r;if(typeof window<`u`&&window.CSS!==void 0&&typeof window.CSS.escape==`function`)r=n(window.CSS.escape(e.name));else try{r=n(e.name)}catch(e){return console.error(`Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s`,e.message),!1}var i=ue(r,e.form);return!i||i===e},fe=function(e){return se(e)&&e.type===`radio`},pe=function(e){return fe(e)&&!de(e)},me=function(e){var t=e&&N(e),n=t?.host,r=!1;if(t&&t!==e){var i,a,o;for(r=!!((i=n)!=null&&(a=i.ownerDocument)!=null&&a.contains(n)||e!=null&&(o=e.ownerDocument)!=null&&o.contains(e));!r&&n;){var s,c;t=N(n),n=t?.host,r=!!((s=n)!=null&&(c=s.ownerDocument)!=null&&c.contains(n))}}return r},z=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},he=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(n===`full-native`&&`checkVisibility`in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});var i=getComputedStyle(e).visibility;if(i===`hidden`||i===`collapse`)return!0;var a=M.call(e,`details>summary:first-of-type`)?e.parentElement:e;if(M.call(a,`details:not([open]) *`))return!0;if(!n||n===`full`||n===`full-native`||n===`legacy-full`){if(typeof r==`function`){for(var o=e;e;){var s=e.parentElement,c=N(e);if(s&&!s.shadowRoot&&r(s)===!0)return z(e);e=e.assignedSlot?e.assignedSlot:!s&&c!==e.ownerDocument?c.host:s}e=o}if(me(e))return!e.getClientRects().length;if(n!==`legacy-full`)return!0}else if(n===`non-zero-area`)return z(e);return!1},ge=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName===`FIELDSET`&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if(r.tagName===`LEGEND`)return M.call(t,`fieldset[disabled] *`)?!0:!r.contains(e)}return!0}t=t.parentElement}return!1},B=function(e,t){return!(t.disabled||ce(t)||he(t,e)||le(t)||ge(t))},V=function(e,t){return!(pe(t)||R(t)<0||!B(e,t))},_e=function(e){var t=parseInt(e.getAttribute(`tabindex`),10);return!!(isNaN(t)||t>=0)},H=function(e){var t=[],n=[];return e.forEach(function(e,r){var i=!!e.scopeParent,a=i?e.scopeParent:e,o=ae(a,i),s=i?H(e.candidates):a;o===0?i?t.push.apply(t,s):t.push(a):n.push({documentOrder:r,tabIndex:o,item:e,isScope:i,content:s})}),n.sort(oe).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},ve=function(e,t){t||={};var n=t.getShadowRoot?I([e],t.includeContainer,{filter:V.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:_e}):F(e,t.includeContainer,V.bind(null,t));return H(n)},ye=function(e,t){return t||={},t.getShadowRoot?I([e],t.includeContainer,{filter:B.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):F(e,t.includeContainer,B.bind(null,t))},U=function(e,t){if(t||={},!e)throw Error(`No node provided`);return M.call(e,A)!==!1&&V(t,e)},be=k.concat(`iframe:not([inert]):not([inert] *)`).join(`,`),W=function(e,t){if(t||={},!e)throw Error(`No node provided`);return M.call(e,be)!==!1&&B(t,e)}})))()}function G(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Se(e){if(Array.isArray(e))return G(e)}function Ce(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Me(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function we(e,t,n){return(t=je(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Te(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ee(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?De(Object(n),!0).forEach(function(t){we(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ke(e){return Se(e)||Te(e)||Me(e)||Ee()}function Ae(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function je(e){var t=Ae(e,`string`);return typeof t==`symbol`?t:t+``}function Me(e,t){if(e){if(typeof e==`string`)return G(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}var K,Ne,Pe,q,Fe,Ie,J,Y,X,Le,Re;function ze(){return(ze=e((()=>{xe(),K={getActiveTrap:function(e){return e?.length>0?e[e.length-1]:null},activateTrap:function(e,t){t!==K.getActiveTrap(e)&&K.pauseTrap(e);var n=e.indexOf(t);n===-1||e.splice(n,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),K.unpauseTrap(e)},pauseTrap:function(e){K.getActiveTrap(e)?._setPausedState(!0)},unpauseTrap:function(e){var t=K.getActiveTrap(e);t&&!t._isManuallyPaused()&&t._setPausedState(!1)}},Ne=function(e){return e.tagName&&e.tagName.toLowerCase()===`input`&&typeof e.select==`function`},Pe=function(e){return e?.key===`Escape`||e?.key===`Esc`||e?.keyCode===27},q=function(e){return e?.key===`Tab`||e?.keyCode===9},Fe=function(e){return q(e)&&!e.shiftKey},Ie=function(e){return q(e)&&e.shiftKey},J=function(e){return setTimeout(e,0)},Y=function(e){var t=[...arguments].slice(1);return typeof e==`function`?e.apply(void 0,t):e},X=function(e){return e.target.shadowRoot&&typeof e.composedPath==`function`?e.composedPath()[0]:e.target},Le=[],Re=function(e,t){var n=t?.document||document,r=t?.trapStack||Le,i=Oe({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isolateSubtrees:!1,isKeyForward:Fe,isKeyBackward:Ie},t),a={containers:[],containerGroups:[],tabbableGroups:[],adjacentElements:new Set,alreadySilent:new Set,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},o,s=function(e,t,n){return e&&e[t]!==void 0?e[t]:i[n||t]},c=function(e,t){var n=typeof t?.composedPath==`function`?t.composedPath():void 0;return a.containerGroups.findIndex(function(t){var r=t.container,i=t.tabbableNodes;return r.contains(e)||n?.includes(r)||i.find(function(t){return t===e})})},l=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.hasFallback,a=r!==void 0&&r,o=t.params,s=o===void 0?[]:o,c=i[e];if(typeof c==`function`&&(c=c.apply(void 0,ke(s))),c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw Error(`\`${e}\` was specified but was not a node, or did not return a node`)}var l=c;if(typeof c==`string`){try{l=n.querySelector(c)}catch(t){throw Error(`\`${e}\` appears to be an invalid selector; error="${t.message}"`)}if(!l&&!a)throw Error(`\`${e}\` as selector refers to no known node`)}return l},u=function(){var e=l(`initialFocus`,{hasFallback:!0});if(e===!1)return!1;if(e===void 0||e&&!W(e,i.tabbableOptions)){if(c(n.activeElement)>=0)e=n.activeElement;else{var t=a.tabbableGroups[0];e=t&&t.firstTabbableNode||l(`fallbackFocus`)}}else e===null&&(e=l(`fallbackFocus`));if(!e)throw Error(`Your focus-trap needs to have at least one focusable element`);return e},d=function(){if(a.containerGroups=a.containers.map(function(e){var t=ve(e,i.tabbableOptions),n=ye(e,i.tabbableOptions),r=t.length>0?t[0]:void 0,a=t.length>0?t[t.length-1]:void 0,o=n.find(function(e){return U(e)}),s=n.slice().reverse().find(function(e){return U(e)});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:!!t.find(function(e){return R(e)>0}),firstTabbableNode:r,lastTabbableNode:a,firstDomTabbableNode:o,lastDomTabbableNode:s,nextTabbableNode:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=t.indexOf(e);return i<0?r?n.slice(n.indexOf(e)+1).find(function(e){return U(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return U(e)}):t[i+(r?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!l(`fallbackFocus`))throw Error(`Your focus-trap must have at least one container with at least one tabbable node in it at all times`);if(a.containerGroups.find(function(e){return e.posTabIndexesFound})&&a.containerGroups.length>1)throw Error(`At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.`)},f=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&t.shadowRoot.activeElement!==null?f(t.shadowRoot):t},p=function(e){if(e!==!1&&e!==f(document)){if(!e||!e.focus){p(u());return}e.focus({preventScroll:!!i.preventScroll}),a.mostRecentlyFocusedNode=e,Ne(e)&&e.select()}},m=function(e){var t=l(`setReturnFocus`,{params:[e]});return t||t!==!1&&e},h=function(e){var t=e.target,n=e.event,r=e.isBackward,o=r!==void 0&&r;t||=X(n),d();var s=null;if(a.tabbableGroups.length>0){var u=c(t,n),f=u>=0?a.containerGroups[u]:void 0;if(u<0)s=o?a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:a.tabbableGroups[0].firstTabbableNode;else if(o){var p=a.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(p<0&&(f.container===t||W(t,i.tabbableOptions)&&!U(t,i.tabbableOptions)&&!f.nextTabbableNode(t,!1))&&(p=u),p>=0){var m=p===0?a.tabbableGroups.length-1:p-1,h=a.tabbableGroups[m];s=R(t)>=0?h.lastTabbableNode:h.lastDomTabbableNode}else q(n)||(s=f.nextTabbableNode(t,!1))}else{var g=a.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(g<0&&(f.container===t||W(t,i.tabbableOptions)&&!U(t,i.tabbableOptions)&&!f.nextTabbableNode(t))&&(g=u),g>=0){var _=g===a.tabbableGroups.length-1?0:g+1,v=a.tabbableGroups[_];s=R(t)>=0?v.firstTabbableNode:v.firstDomTabbableNode}else q(n)||(s=f.nextTabbableNode(t))}}else s=l(`fallbackFocus`);return s},g=function(e){if(!(c(X(e),e)>=0)){if(Y(i.clickOutsideDeactivates,e)){o.deactivate({returnFocus:i.returnFocusOnDeactivate});return}Y(i.allowOutsideClick,e)||e.preventDefault()}},_=function(e){var t=X(e),n=c(t,e)>=0;if(n||t instanceof Document)n&&(a.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var r,o=!0;if(a.mostRecentlyFocusedNode){if(R(a.mostRecentlyFocusedNode)>0){var s=c(a.mostRecentlyFocusedNode),l=a.containerGroups[s].tabbableNodes;if(l.length>0){var d=l.findIndex(function(e){return e===a.mostRecentlyFocusedNode});d>=0&&(i.isKeyForward(a.recentNavEvent)?d+1<l.length&&(r=l[d+1],o=!1):d-1>=0&&(r=l[d-1],o=!1))}}else a.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return R(e)>0})})||(o=!1)}else o=!1;o&&(r=h({target:a.mostRecentlyFocusedNode,isBackward:i.isKeyBackward(a.recentNavEvent)})),p(r||a.mostRecentlyFocusedNode||u())}a.recentNavEvent=void 0},v=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];a.recentNavEvent=e;var n=h({event:e,isBackward:t});n&&(q(e)&&e.preventDefault(),p(n))},y=function(e){(i.isKeyForward(e)||i.isKeyBackward(e))&&v(e,i.isKeyBackward(e))},b=function(e){Pe(e)&&Y(i.escapeDeactivates,e)!==!1&&(e.preventDefault(),o.deactivate())},x=function(e){c(X(e),e)>=0||Y(i.clickOutsideDeactivates,e)||Y(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},S=function(){if(a.active)return K.activateTrap(r,o),a.delayInitialFocusTimer=i.delayInitialFocus?J(function(){p(u())}):p(u()),n.addEventListener(`focusin`,_,!0),n.addEventListener(`mousedown`,g,{capture:!0,passive:!1}),n.addEventListener(`touchstart`,g,{capture:!0,passive:!1}),n.addEventListener(`click`,x,{capture:!0,passive:!1}),n.addEventListener(`keydown`,y,{capture:!0,passive:!1}),n.addEventListener(`keydown`,b),o},C=function(e){a.active&&!a.paused&&o._setSubtreeIsolation(!1),a.adjacentElements.clear(),a.alreadySilent.clear();var t=new Set,n=new Set,r=Ce(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;t.add(s);for(var c=typeof ShadowRoot<`u`&&s.getRootNode()instanceof ShadowRoot,l=s;l;){t.add(l);var u=l.parentElement,d=[];u?d=u.children:!u&&c&&(d=l.getRootNode().children,u=l.getRootNode().host,c=typeof ShadowRoot<`u`&&u.getRootNode()instanceof ShadowRoot);var f=Ce(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;n.add(m)}}catch(e){f.e(e)}finally{f.f()}l=u}}}catch(e){r.e(e)}finally{r.f()}t.forEach(function(e){n.delete(e)}),a.adjacentElements=n},w=function(){if(a.active)return n.removeEventListener(`focusin`,_,!0),n.removeEventListener(`mousedown`,g,!0),n.removeEventListener(`touchstart`,g,!0),n.removeEventListener(`click`,x,!0),n.removeEventListener(`keydown`,y,!0),n.removeEventListener(`keydown`,b),o},T=typeof window<`u`&&`MutationObserver`in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===a.mostRecentlyFocusedNode})})&&p(u())}):void 0,E=function(){T&&(T.disconnect(),a.active&&!a.paused&&a.containers.map(function(e){T.observe(e,{subtree:!0,childList:!0})}))};return o={get active(){return a.active},get paused(){return a.paused},activate:function(e){if(a.active)return this;var t=s(e,`onActivate`),c=s(e,`onPostActivate`),l=s(e,`checkCanFocusTrap`),u=K.getActiveTrap(r),p=!1;if(u&&!u.paused){var m;(m=u._setSubtreeIsolation)==null||m.call(u,!1),p=!0}try{l||d(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=f(n),t?.();var h=function(){l&&d(),S(),E(),i.isolateSubtrees&&o._setSubtreeIsolation(!0),c?.()};if(l)return l(a.containers.concat()).then(h,h),this;h()}catch(e){if(u===K.getActiveTrap(r)&&p){var g;(g=u._setSubtreeIsolation)==null||g.call(u,!0)}throw e}return this},deactivate:function(e){if(!a.active)return this;var t=Oe({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},e);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,a.paused||o._setSubtreeIsolation(!1),a.alreadySilent.clear(),w(),a.active=!1,a.paused=!1,E(),K.deactivateTrap(r,o);var n=s(t,`onDeactivate`),c=s(t,`onPostDeactivate`),l=s(t,`checkCanReturnFocus`),u=s(t,`returnFocus`,`returnFocusOnDeactivate`);n?.();var d=function(){J(function(){u&&p(m(a.nodeFocusedBeforeActivation)),c?.()})};return u&&l?(l(m(a.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(e){return a.active?(a.manuallyPaused=!0,this._setPausedState(!0,e)):this},unpause:function(e){return!a.active||(a.manuallyPaused=!1,r[r.length-1]!==this)?this:this._setPausedState(!1,e)},updateContainerElements:function(e){return a.containers=[].concat(e).filter(Boolean).map(function(e){return typeof e==`string`?n.querySelector(e):e}),i.isolateSubtrees&&C(a.containers),a.active&&(d(),i.isolateSubtrees&&!a.paused&&o._setSubtreeIsolation(!0)),E(),this}},Object.defineProperties(o,{_isManuallyPaused:{value:function(){return a.manuallyPaused}},_setPausedState:{value:function(e,t){if(a.paused===e)return this;if(a.paused=e,e){var n=s(t,`onPause`),r=s(t,`onPostPause`);n?.(),w(),E(),o._setSubtreeIsolation(!1),r?.()}else{var i=s(t,`onUnpause`),c=s(t,`onPostUnpause`);i?.(),o._setSubtreeIsolation(!0),d(),S(),E(),c?.()}return this}},_setSubtreeIsolation:{value:function(e){i.isolateSubtrees&&a.adjacentElements.forEach(function(t){if(e)switch(i.isolateSubtrees){case`aria-hidden`:(t.ariaHidden===`true`||t.getAttribute(`aria-hidden`)?.toLowerCase()===`true`)&&a.alreadySilent.add(t),t.setAttribute(`aria-hidden`,`true`);break;default:(t.inert||t.hasAttribute(`inert`))&&a.alreadySilent.add(t),t.setAttribute(`inert`,!0)}else if(!a.alreadySilent.has(t))switch(i.isolateSubtrees){case`aria-hidden`:t.removeAttribute(`aria-hidden`);break;default:t.removeAttribute(`inert`)}})}}}),o.updateContainerElements(e),o}})))()}var Be,Ve;function He(){return(He=e((()=>{ze(),Be=a(),Ve=({ref:e,isActive:t,...n})=>{let r=(0,Be.useRef)(null);(0,Be.useEffect)(()=>{let i=e.current;if(!t||!i){r.current?.deactivate(),r.current=null;return}let a=Re(i,n);return r.current=a,a.activate(),()=>{a.deactivate(),r.current=null}},[t,e])}})))()}function Ue(){return(Ue=e((()=>{He()})))()}var We;function Ge(){return(Ge=e((()=>{C(),We=({popper:e,placement:t})=>{let n=t.startsWith(`left`)||t.startsWith(`right`)?e.height:e.width,r=Math.max(0,n-23),i=r/2,a=Math.min(24,Math.max(16,(r-16)/2));return Math.min(i,a)}})))()}function Ke(){return(Ke=e((()=>{Ge()})))()}var qe,Je,Ye,Xe;function Ze(){return(Ze=e((()=>{qe={left:`right`,right:`left`},Je=[`bottom`,`top`],Ye=e=>e in qe,Xe=e=>{let[t,n]=e.split(`-`);if(!Ye(t))return;let r=n?`-${n}`:``;return[qe[t],...Je].map(e=>`${e}${r}`)}})))()}var Qe;function $e(){return($e=e((()=>{Qe=()=>({"--drop-shadow":`drop-shadow(0px 0px 1px #072D574F) drop-shadow(0px 3px 5px #072D5733)`})})))()}var et;function tt(){return(tt=e((()=>{et=e=>{let t=typeof e==`function`?e():e;return t instanceof Node?t:null}})))()}function nt(){return(nt=e((()=>{Ke(),Ze(),$e(),tt()})))()}var Z,rt;function it(){return(it=e((()=>{Z=a(),v(),O(),Ue(),b(),f(),C(),nt(),rt=({isOpen:e,anchorEl:t,onClose:n,disableAutoFocus:r,hasArrow:i,disableMobileDrawer:a,placement:o})=>{let s=(0,Z.useRef)(null),[c,l]=(0,Z.useState)(!1),[u,f]=(0,Z.useState)(null),p=(0,Z.useCallback)(e=>{s.current=e,l(!!e)},[]),m=e??!!t,h=e!==void 0,{isMobile:g}=d(),{shouldRender:v,handleAnimationEnd:b}=y(m),x=Qe(),C=g&&!a,w=!C&&m&&c,T=(0,Z.useMemo)(()=>et(t),[t]),E=(0,Z.useMemo)(()=>[T],[T]),D=e=>{n?.(e)};return _({ref:s,onClickAway:D,isActive:w&&!h,preventBubbling:!0,excludeNodes:E}),ne({onEscape:D,isActive:w,preventBubbling:!0}),Ve({ref:s,isActive:w&&!r,returnFocusOnDeactivate:!0,escapeDeactivates:!1,clickOutsideDeactivates:!1,allowOutsideClick:!0,fallbackFocus:()=>s.current||document.body}),{shouldRenderDrawer:C,isOpened:m,shouldRender:v,handleAnimationEnd:b,handleClose:D,setContainerRef:p,arrowElement:u,setArrowElement:f,mergedModifiers:(0,Z.useMemo)(()=>{let e=[...S],t=Xe(o);return t&&e.push({name:`flip`,options:{fallbackPlacements:t}}),i&&e.push({name:`arrow`,enabled:!0,options:{element:u,padding:We}}),e},[i,u,o]),animatedWrapperStyle:x}}})))()}function at(){return(at=e((()=>{it()})))()}var Q,ot,$;function st(){return(st=e((()=>{g(),o(),c(),C(),ee(),at(),Q=l(),ot=n(x.animatedWrapper,{variants:{isOpen:{true:x.animatedWrapperOpen},hasArrow:{true:x.animatedWrapperHasArrow}}}),$=({children:e,onClose:n,isOpen:r,title:i,className:a,style:o,placement:s=`bottom`,anchorEl:c,disablePortal:l,disableAutoFocus:u,hasArrow:d,disableMobileDrawer:f})=>{let{shouldRenderDrawer:p,isOpened:m,shouldRender:g,handleAnimationEnd:_,handleClose:v,setContainerRef:y,setArrowElement:b,mergedModifiers:S,animatedWrapperStyle:C}=rt({isOpen:r,anchorEl:c,onClose:n,disableAutoFocus:u,hasArrow:d,disableMobileDrawer:f,placement:s});return p?(0,Q.jsx)(h,{title:i,onClose:v,open:m,className:a,style:o,ModalProps:{disableAutoFocus:u},children:e}):(0,Q.jsx)(w,{className:t(x.root,a),style:o,open:g,placement:s,anchorEl:c,disablePortal:l,modifiers:S,children:(0,Q.jsxs)(E,{className:ot({isOpen:m,hasArrow:d}),style:C,onAnimationEnd:_,children:[d&&(0,Q.jsx)(T,{ref:b,className:x.arrow}),(0,Q.jsx)(D,{ref:y,tabIndex:-1,className:x.innerContainer,children:e})]})})};try{$.displayName=`NewPopover`,$.__docgenInfo={description:``,displayName:`NewPopover`,filePath:`/home/runner/work/ui-temp-10-2026/ui-temp-10-2026/packages/ui/src/components/NewPopover/NewPopover.tsx`,methods:[],props:{anchorEl:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Якорь позиционирования`,name:`anchorEl`,required:!1,tags:{},type:{name:`NewPopoverAnchorEl`}},isOpen:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Показывать popover. Если не передан — видимость определяется наличием anchorEl.`,name:`isOpen`,required:!1,tags:{},type:{name:`boolean`}},placement:{defaultValue:{value:`bottom`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Позиция относительно anchor.`,name:`placement`,required:!1,tags:{default:`'bottom'`},type:{name:`enum`,raw:`NewPopoverPlacement`,value:[{value:`"auto"`},{value:`"bottom"`},{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"bottom-end"`},{value:`"bottom-start"`},{value:`"left-end"`},{value:`"left-start"`},{value:`"right-end"`},{value:`"right-start"`},{value:`"top-end"`},{value:`"top-start"`},{value:`"auto-start"`},{value:`"auto-end"`}]}},children:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Контент popover`,name:`children`,required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`className корневого popper`,name:`className`,required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`style корневого popper`,name:`style`,required:!1,tags:{},type:{name:`CSSProperties`}},title:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Заголовок для отображения в мобильной версии`,name:`title`,required:!1,tags:{},type:{name:`string`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Обработчик закрытия компонента`,name:`onClose`,required:!1,tags:{},type:{name:`NewPopoverOnClose`}},disablePortal:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Рендерить popper внутри родителя, без portal`,name:`disablePortal`,required:!1,tags:{default:`false`},type:{name:`boolean`}},disableAutoFocus:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Отключить автофокус при открытии popover (десктоп)`,name:`disableAutoFocus`,required:!1,tags:{default:`false`},type:{name:`boolean`}},hasArrow:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Показывать стрелку, указывающую на anchorEl`,name:`hasArrow`,required:!1,tags:{default:`false`},type:{name:`boolean`}},disableMobileDrawer:{defaultValue:{value:`false`},declarations:[{fileName:`ui-temp-10-2026/packages/ui/src/components/NewPopover/types.ts`,name:`TypeLiteral`}],description:`Отключить BottomDrawer на mobile.`,name:`disableMobileDrawer`,required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{x as a,C as i,st as n,O as r,$ as t};