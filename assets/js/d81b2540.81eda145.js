"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[3189],{87748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(74848),s=n(28453),c=n(3514);const o={title:"Theme-based"},i=void 0,a={id:"schema/concepts/by-theme/index",title:"Theme-based",description:"",source:"@site/docs/schema/concepts/by-theme/index.mdx",sourceDirName:"schema/concepts/by-theme",slug:"/schema/concepts/by-theme/",permalink:"/schema/concepts/by-theme/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Theme-based"},sidebar:"schema",previous:{title:"Concepts",permalink:"/schema/concepts/"},next:{title:"Base",permalink:"/schema/concepts/by-theme/base/"}},l={},u=[];function m(e){return(0,r.jsx)(c.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},3514:(e,t,n)=>{n.d(t,{A:()=>b});n(96540);var r=n(18215),s=n(84142),c=n(28774),o=n(53465),i=n(16654),a=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(74848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:c}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),c&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,m.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const c=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(44586);const c=["zero","one","two","few","many","other"];function o(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),c=n.pluralForms.indexOf(s);return r[Math.min(c,r.length-1)]}(n,t,e)}}}}]);