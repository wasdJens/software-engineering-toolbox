"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2064],{8171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=t(5893),a=t(1151);const r={},i="About Anti Corruption Layer",s={id:"learning/Angular/Explanation/anti-corruption-layer",title:"About Anti Corruption Layer",description:"Background",source:"@site/docs/learning/Angular/Explanation/anti-corruption-layer.mdx",sourceDirName:"learning/Angular/Explanation",slug:"/learning/Angular/Explanation/anti-corruption-layer",permalink:"/software-engineering-toolbox/docs/learning/Angular/Explanation/anti-corruption-layer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/software-engineering-toolbox/docs/learning/Angular/Intro"},next:{title:"About Building Blocks Concept",permalink:"/software-engineering-toolbox/docs/learning/Angular/Explanation/building-blocks"}},l={},u=[{value:"Background",id:"background",level:2},{value:"Transformation Service",id:"transformation-service",level:2},{value:"Illustrations",id:"illustrations",level:2}];function c(e){const n={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"about-anti-corruption-layer",children:"About Anti Corruption Layer"}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(n.p,{children:"The reason for the anti corruption layer approach in frontend development is to create an abstraction between API requests and the internal data model that can be used.\nFor example you have no design choice about the API requests and depend on another team to provide you with the data you need.\nThis can lead to a situation where you have to change your internal data model because the API changed.\nDepending on how often the API makes changes it can also happen that you need to update multiple components.\nThis can be avoided by creating an anti corruption layer that transforms the data from the API to your internal data model.\nIt provides you with the option to have your own data model which you can use in your frontend application.\nIt also makes it easier to combine two or more API requests into one data model.\nWhen it comes to API data model changes you simply need to update a single file where you map the API to your own data model instead of updating each component on its own."}),"\n",(0,o.jsx)(n.h2,{id:"transformation-service",children:"Transformation Service"}),"\n",(0,o.jsx)(n.p,{children:"The integration of an anti corruption layer for an angular application is done by creating a new service that lives between your API requests and transforming the data to your own data model.\nWhen using the angular http client you can pipe the http response and pass it to the transformation service.\nIn the beginning you can use a single service for all transformations.\nIf you notice that you have a lot of different APIs you consume it makes sense to split into multiple services."}),"\n",(0,o.jsx)(n.p,{children:"Many teams often prefer to use the same data model on API and Client side.\nWhile this makes working with the data easier it often leads to a lot of maintenance work once the API changes a single field name.\nAlso when you are using different programming languages between API and Client side it can be hard to keep the data models in sync.\nIt is also often hard to map raw data models to frontend components the user sees.\nBecause the user often gets an aggregation of multiple API requests it makes sense to have a data model that is optimized for the frontend.\nThe anti corruption layer approach also makes it easier to write integration tests to verify what your API sends is what you expect and you can fully unit test this implementation."}),"\n",(0,o.jsx)(n.h2,{id:"illustrations",children:"Illustrations"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Service structure"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Anti Corruption Layer Service Structure",src:t(2265).Z+"",width:"651",height:"214"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Changes made to the API"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Anti Corruption Layer API Changes",src:t(675).Z+"",width:"695",height:"362"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2265:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Anti_Corruption1-5738516bb5a15b33a7e0abc54f099985.svg"},675:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Anti_Corruption2-ba09b8247ebee01866777cb570e05432.svg"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(7294);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);