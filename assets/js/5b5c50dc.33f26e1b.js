"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[52],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="About Building Blocks Concept",l={unversionedId:"architecture/angular/explanation/building-blocks",id:"architecture/angular/explanation/building-blocks",title:"About Building Blocks Concept",description:"Background",source:"@site/docs/architecture/angular/explanation/building-blocks.mdx",sourceDirName:"architecture/angular/explanation",slug:"/architecture/angular/explanation/building-blocks",permalink:"/software-engineering-toolbox/docs/architecture/angular/explanation/building-blocks",draft:!1,editUrl:"https://github.com/wasdJens/software-engineering-toolbox/docs/architecture/angular/explanation/building-blocks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"architectureSidebar",previous:{title:"Angular Architecture",permalink:"/software-engineering-toolbox/docs/architecture/angular/Intro"},next:{title:"About Smart and Dumb Component Concept",permalink:"/software-engineering-toolbox/docs/architecture/angular/explanation/smart-and-dumb-components"}},c={},s=[{value:"Background",id:"background",level:2},{value:"Building Blocks Concept",id:"building-blocks-concept",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-building-blocks-concept"},"About Building Blocks Concept"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The reason for the building block approach is to create a system where different use cases / features are combined and can easily be reused.\nFor example your organization creates multiple applications but all of them use the same login mechanism.\nThis login mechanism is therefore the perfect candidate for a building block that other developers can easily integrate and use.\nBut the same applies to user interfaces that you create for your applications. Often customers want to see the same information on multiple different pages.\nTherefore smart components are also often a good candidate for a building block."),(0,r.kt)("h2",{id:"building-blocks-concept"},"Building Blocks Concept"),(0,r.kt)("p",null,"A building block approach is often linked to a library approach. You have a set of building blocks that you can use in your applications.\nThe library solution allows that different teams work on a set of features and also maintain them. In return it reduces the time it takes to implement a new feature because you can reuse existing building blocks.\nIt also hides a certain complexity that certain building blocks are based on. For example a login mechanism can be quite complex and therefore it is good to have a team that maintains this building block."),(0,r.kt)("p",null,"Many teams often prefer to maintain these things on their own but this often leads to a lot of duplicated code and therefore a lot of maintenance effort.\nAlso when multiple teams use the same building block it becomes easier to resolve security issues since a single update is enough instead of many teams finding and trailing the same issue.\nThe building block approachs also tends to improve the building block code base since multiple teams are using the same block and issues are found faster."),(0,r.kt)("p",null,"Other alternatives for a building block is a collection of API calls that can be used to create a certain feature. Multiple features are based on the same API endpoints but display the data in a different way.\nA API building block therefore allows multiple developers to access the same data layer but work with the same data in different ways."))}p.isMDXComponent=!0}}]);