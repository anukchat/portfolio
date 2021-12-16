(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===o&&r.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Anukool Chaturvedi",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Blogs",path:"/blogs"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(7).then(n.t.bind(null,246,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(27),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Anukool Chaturvedi"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:chaturvedianukool@gmail.com",children:"chaturvedianukool@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Anukool. I like playing around data and generate intelligent insights from it, I am currently working at ",Object(c.jsx)("a",{href:"https://matroid.com",children:"Avalara"})," as a Data Quality Engineer, I am also a Machine Learning freelancer. Before joining Avalara, I worked at ",Object(c.jsx)("a",{href:"https://tieto.com",children:"Tieto"}),", ",Object(c.jsx)("a",{href:"https://fisglobal.com",children:"FIS Global"}),", ",Object(c.jsx)("a",{href:"https://tcs.com",children:"Tata Consultancy Services"})]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Anukool Chaturvedi ",Object(c.jsx)(u.b,{to:"/",children:"anukchat.github.io"}),"."]})]})]})},v=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Anukool Chaturvedi",defaultTitle:"Anukool Chaturvedi",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Anukool Chaturvedi's personal website."};t.a=k},27:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(26)),l=n(30),a=n(31),r=n(32),s=n(33),o=[{link:"https://github.com/anukchat",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/anukool-chaturvedi/",label:"LinkedIn",icon:a.faLinkedinIn},{link:"https://twitter.com/anukool_chatur",label:"Twitter",icon:r.faTwitter},{link:"mailto:chaturvedianukool@gmail.com",label:"Email",icon:s.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),r=n(5),s=n(3),o=n(21),j=(n(46),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,233))}))),b=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,254))})),u=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,234))})),h=Object(i.lazy)((function(){return n.e(13).then(n.bind(null,235))})),d=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,253))})),O=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,248))})),m=Object(i.lazy)((function(){return Promise.all([n.e(6),n.e(14)]).then(n.bind(null,249))})),x=Object(i.lazy)((function(){return Promise.all([n.e(3),n.e(10)]).then(n.bind(null,250))})),p=function(){return Object(c.jsx)(r.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:j}),Object(c.jsx)(s.a,{path:"/projects",component:d}),Object(c.jsx)(s.a,{path:"/stats",component:m}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{path:"/blogs",component:x}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},f=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(p,{})})},v=document.getElementById("root");v.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(f,{}),v):Object(a.render)(Object(c.jsx)(f,{}),v)}},[[47,1,4]]]);
//# sourceMappingURL=main.f5fa88e8.chunk.js.map