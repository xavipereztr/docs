"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[2711],{90407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var r=a(74848);a(96540);var i=a(28618),n=a(15418),s=a(19912),l=a(51430),c=a(38094),d=a(61917);function o(e){let{year:t,posts:a}=e,n=(0,l.i)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>n.format(new Date(e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{as:"h3",id:t,children:t}),(0,r.jsx)("ul",{children:a.map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)(i.A,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function h(e){let{years:t}=e;return(0,r.jsx)("section",{className:"margin-vert--lg",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:t.map((e,t)=>(0,r.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,r.jsx)(o,{...e})},t))})})})}function m(e){let{archive:t}=e,a=(0,n.translate)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,n.translate)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])},new Map),e=>{let[t,a]=e;return{year:t,posts:a}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.be,{title:a,description:i}),(0,r.jsxs)(c.A,{children:[(0,r.jsx)("header",{className:"hero hero--primary",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(d.A,{as:"h1",className:"hero__title",children:a}),(0,r.jsx)("p",{className:"hero__subtitle",children:i})]})}),(0,r.jsx)("main",{children:l.length>0&&(0,r.jsx)(h,{years:l})})]})]})}},51430:(e,t,a)=>{a.d(t,{i:()=>i});var r=a(90062);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,r.A)(),a=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);