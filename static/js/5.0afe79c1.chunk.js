(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{248:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n(5),c=n(21),o=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d,b=n(79),y=n(80),f=n(86),j=n(85),h=n(57),g=n(55),m=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},O=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,c=t.title,o={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(g.a)(Object(g.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:o,children:Object(r.jsx)("span",{children:c})}),Object(r.jsx)("div",{className:"skillbar-bar",style:s}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};O.defaultProps={categories:[]};var v=O,k=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(g.a)(Object(g.a)({},n),{},Object(h.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},r.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(g.a)(Object(g.a)({},e),{},Object(h.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),r}return Object(y.a)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(v,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(m,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(a.Component);k.defaultProps={skills:[],categories:[]};var x=k,D=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var S=D,w=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(S,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var P=w,N=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(i.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{title:"Machine Learning",number:"CS 229",link:"https://www.coursera.org/account/accomplishments/verify/3FQ9KQBR4EX9",university:"Stanford"},{title:"Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",number:"TensorFlow",link:"https://coursera.org/share/3f9144604127456e3224948085b942d3",university:"DeepLearning.AI"},{title:"Deep Learning Specialization",number:"DeepLearning",link:"https://coursera.org/share/3f3acf1cfab4411acd16132c3231e89d",university:"DeepLearning.AI"},{title:"Natural Language Processing Specialization",number:"NLP",link:"https://www.coursera.org/specializations/natural-language-processing",university:"DeepLearning.AI"},{title:"Generative Adversarial Networks (GANs) Specialization",number:"GAN",link:"https://www.coursera.org/specializations/generative-adversarial-networks-gans",university:"DeepLearning.AI"},{title:"AI for Medicine Specialization",number:"AI_in_Medicine",link:"https://www.coursera.org/specializations/ai-for-medicine",university:"DeepLearning.AI"},{title:"Mathematics for Machine Learning Specialization",number:"Mathematics",link:"Mathematics for Machine Learning Specialization",university:"Imperial College London"}],C=[{school:"IGNOU",degree:"Post Graduate Diploa in Applied Statistics",link:"https://ignou.ac.in",year:2020},{school:"Bhilai Insitute of Technology, Durg",degree:"Bachelor of Engineering, Electronics & Telecomm.",link:"https://bitdurg.org",year:2012}],L=[{company:"Avalara",position:"Data Quality Engineer",link:"https://avalara.com",daterange:"May 2021 - Present",points:["Doing Data Quality Gap Analysis and developing strategy to fill them up using advanced ML modelling techniques","Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","Anomaly detection on raw scrapped content after creating gold standard datasets using Statistics based & Decision tree based algorithms"]},{company:"Tieto",position:"Senior Software Engineer",link:"http://tieto.com",daterange:"Aug 2019 - May 2021",points:["Worked on creating data quality strategy and architecting tooling around it in python","Worked on creating an end to end CI CD pipeline for end to end data quality tests"]},{company:"FIS Global",position:"Senior Engineer",link:"http://fisglobal.com",daterange:"February 2016 - July 2019",points:["Created Test Automation framework in C# for doing end to end testing of Credit Risk application","Maintained and modified CI CD pipeline for running the automation tests and monitoring the results","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\u2019s, and other techniques."]},{company:"Tata Consultancy Services",position:"System Engineer",link:"https://tcs.com",daterange:"January 2013 - February 2016",points:["Worked as a Data Analyst on a Banking & Finance project, to analyze the data and create smart analytics and KPIs around it and create story around it"]}],E=n(17);var I=n(25);var M,T=[{title:"Python",competency:5,category:["Data Analysis","Languages","Machine Learning"]},{title:"C#",competency:3,category:["Web Development","Automation"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"FastAPI",competency:2,category:["Web Development","Python"]},{title:"Docker",competency:2,category:["Tools","Data Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"PyTorch + PytorchLightening",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(g.a)(Object(g.a)({},e),{},{category:e.category.sort()})})),R=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],z=(M=new Set(T.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(E.a)(e)}(M)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||Object(I.a)(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:R[t]}})),W=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(c.a,{title:"Resume",description:"Anukool Chaturvedi's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:W.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:C}),Object(r.jsx)(p,{data:L}),Object(r.jsx)(x,{skills:T,categories:z}),Object(r.jsx)(P,{data:A}),Object(r.jsx)(N,{})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(57);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},79:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},80:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},85:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=r(e);if(t){var c=r(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return i(this,n)}}n.d(t,"a",(function(){return c}))},86:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.0afe79c1.chunk.js.map