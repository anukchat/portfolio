(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[10],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),i=a(21),o=a(55),c=a(81),s=a.n(c),l=a(83),p=a(79),d=a(80),u=a(86),m=a(85),b=a(240),h=a(191),f=a.n(h),g=a(213),j=a(26),x=a(236),v=a(54),O=a(239),k=a(255),y=a(241),w=a(251),L=a(242),N=a(243),S=a(252),R=a(244),H=a(245);function B(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}function z(e,t,a){return e.length>a?e.slice(t,a):e}var J=Object(x.a)((function(e){return{grid:{marginTop:"20px",minHeight:"391px"},card:{minWidth:0,marginLeft:"15px",marginRight:"15px",margin:"auto",transition:"0.3s",minHeight:"391px",borderRadius:".625rem!important",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.3)"}},media:{minHeight:"10rem",position:"relative"},content:{textAlign:"left",padding:e.spacing(3)},divider:{margin:"".concat(e.spacing(2),"px 0")},heading:{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"bold",color:"#3d5170","&::hover":{color:"#2b394f"}},subheading:{fontFamily:"sans-serif",fontSize:"14px",lineHeight:1.8},avatar:{width:"3rem",height:"3rem",borderRadius:"50%",bottom:-136,boxShadow:" 0 0 0 0.125rem #fff, 0 0.1875rem 0.4375rem rgba(90,97,105,.5)","&:not(:first-of-type)":{marginLeft:-e.spacing()}}}})),M=Object(v.a)((function(e){return{badge:{display:"flex",backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),bottom:-131,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(O.a);function A(e){var t=J(),a=e.pubDate.split(" ")[0].split("-"),r="".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(a[1]-1)]," ").concat(a[2],",")+" ".concat(a[0]),i=new Date;return Object(n.jsx)(b.a,{xs:12,sm:12,lg:6,className:t.grid,children:Object(n.jsxs)(k.a,{className:t.card,children:[Object(n.jsx)(y.a,{className:t.media,image:e.thumbnail,children:i.getHours()>=5&&i.getHours()<=22?Object(n.jsx)(M,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",style:{display:"inline-block",alignItems:"center",marginLeft:"1.5625rem"},children:Object(n.jsx)(w.a,{alt:"anukool chaturvedi",className:t.avatar,src:e.avatar,component:"a",varient:"rounded",href:e.profilelink,target:"_blank"})}):Object(n.jsx)(w.a,{alt:"anukool chaturvedi",className:t.avatar,src:e.avatar,component:"a",style:{display:"inline-block",alignItems:"center",marginLeft:"1.5625rem"},varient:"rounded",href:e.profilelink,target:"_blank"})}),Object(n.jsxs)(L.a,{className:t.content,style:{paddingTop:"2.1875rem",minHeight:"120px",paddingBottom:"0"},children:[Object(n.jsx)(N.a,{className:t.heading,variant:"h5",gutterBottom:!0,children:Object(n.jsx)(S.a,{href:e.link,target:"_blank",rel:"noopener noreferrer",underline:"none",children:z(e.title,0,75)})}),Object(n.jsx)(N.a,{className:t.subheading,variant:"body1",children:"".concat(z(B(e.content),0,100),"...")})]}),Object(n.jsx)(R.a,{className:t.divider}),Object(n.jsxs)(H.a,{style:{paddingLeft:"1.5625rem",paddingRight:"1.5625rem"},children:[Object(n.jsx)(b.a,{children:Object(n.jsxs)(N.a,{style:{fontSize:"14px",color:"#212529"},display:"block",variant:"body1",gutterBottom:!0,children:[Object(n.jsx)(j.a,{icon:g.b})," ",e.author]})}),Object(n.jsx)(b.a,{children:Object(n.jsxs)(N.a,{display:"block",variant:"body1",style:{fontSize:"14px",color:"#868e96"},gutterBottom:!0,children:[Object(n.jsx)(j.a,{icon:g.a})," ",r]})})]})]})})}var D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).mediumURL="https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chaturvedianukool",n.state={itemRows:[],avatar:"",profileLink:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(this.mediumURL).then(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.data);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var a=e.feed.image,n=e.feed.link,r=e.items.filter((function(e){return e.categories.length>0}));t.setState({avatar:a,profileLink:n});var i=[];r.forEach((function(e,a){e.avatar=t.state.avatar,e.profilelink=t.state.profileLink;var n=Math.floor(a/3);i[n]||(i[n]=[]),i[n].push(e)})),t.setState({itemRows:i})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.itemRows;return Object(n.jsx)(b.a,{container:!0,spacing:1,children:e.map((function(e){return e.map((function(e,t){return Object(r.createElement)(A,Object(o.a)(Object(o.a)({},e),{},{key:t}))}))}))})}}]),a}(r.Component);t.default=function(){return Object(n.jsx)(i.a,{title:"Blogs",description:"Blog posts created by Anukool",children:Object(n.jsx)(D,{})})}}}]);
//# sourceMappingURL=10.7a59eff9.chunk.js.map