(this["webpackJsonpplay-with-collatz"]=this["webpackJsonpplay-with-collatz"]||[]).push([[0],{231:function(e,a,t){},233:function(e,a,t){},371:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),l=t.n(r),i=(t(231),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,444)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),n(e),c(e),r(e),l(e)}))}),s=t.p+"static/media/rickroll-roll.49db4044.gif",o=t(6),d=function(e){return Object(o.jsx)(o.Fragment,{children:e.isRickRolled&&Object(o.jsx)("img",{src:s,alt:"loading..."})})},j=t(15),u=t(208),b=t(27),h=(t(233),t(440)),m=t(420),O=function(e){return Object(o.jsxs)("header",{className:"App-header",children:["Break Collatz",Object(o.jsxs)(h.a,{value:e.tab,className:"Tab",onChange:function(a,t){e.setTab(t)},indicatorColor:"primary",textColor:"primary",children:[Object(o.jsx)(m.a,{label:"Play",children:"  "}),Object(o.jsx)(m.a,{label:"LeaderBoard",children:"  "}),Object(o.jsx)(m.a,{label:"Lily"})]})]})},p=t(421),x=t(426),g=t(441),f=t(429),v=t(211),N=t(422),C=t(206),y=t(207),P=t(109),S=t(106),w=t(212),k=function(e){var a=Object(n.useState)([]),t=Object(j.a)(a,2),c=t[0],r=t[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),s=i[0],d=i[1],u=Object(n.useState)(""),b=Object(j.a)(u,2),h=b[0],m=b[1],O=Object(n.useState)(""),x=Object(j.a)(O,2),g=x[0],f=x[1];return Object(n.useEffect)((function(){var a=function(e){for(var a=[{count:"",value:e}],t=e,n=e,c=0,r=1;1!==t;r++)t%2===0?t/=2:t=3*t+1,n<t&&(n=t),a.push({count:"",value:t}),c=r;var l=(n-e)/e*100;return console.log(a),{dataPoints:a,growth:l,maxNum:n,count:c}}(e.num);r(a.dataPoints),d(a.growth.toFixed(2)),m(a.count),f(a.maxNum),e.setLeaderData([].concat(Object(v.a)(e.leaderData),[{name:e.name,maxNum:a.maxNum,growth:a.growth.toFixed(2),count:a.count,num:e.num}]))}),[]),Object(o.jsxs)("div",{className:"CollatzGraph-Container",children:[Object(o.jsx)(p.a,{className:"CollatzGraph-Paper",children:Object(o.jsxs)(N.a,{width:1200,height:360,data:c,margin:{top:5,right:30,left:20,bottom:5},children:[Object(o.jsx)(C.a,{dataKey:"count"}),Object(o.jsx)(y.a,{}),Object(o.jsx)(P.a,{}),Object(o.jsx)(S.a,{}),Object(o.jsx)(w.a,{type:"monotone",dataKey:"value",stroke:"#8884d8"})]})}),Object(o.jsxs)("div",{className:"CollatzGraph-Info-Container",children:[Object(o.jsxs)(p.a,{className:"CollatzGraph-Info-Paper",children:[Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Title",children:"Number Selected"}),Object(o.jsxs)("div",{className:"CollatzGraph-Info-Paper-Body",children:[" ",e.num," "]})]}),Object(o.jsxs)(p.a,{className:"CollatzGraph-Info-Paper",children:[Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Title",children:"No of steps"}),Object(o.jsxs)("div",{className:"CollatzGraph-Info-Paper-Body",children:[" ",h," "]})]}),Object(o.jsxs)(p.a,{className:"CollatzGraph-Info-Paper",children:[Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Title",children:"Growth %"}),Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Body",children:s})]}),Object(o.jsxs)(p.a,{className:"CollatzGraph-Info-Paper",children:[Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Title",children:"Highest point"}),Object(o.jsx)("div",{className:"CollatzGraph-Info-Paper-Body",children:g})]})]})]})},I=function(e){var a=Object(n.useState)(!1),t=Object(j.a)(a,2),r=t[0],l=t[1];return Object(o.jsxs)(c.a.Fragment,{children:[!r&&Object(o.jsx)("div",{className:"PlayContainer-Div",children:Object(o.jsxs)(p.a,{className:"PlayContainer-Paper",children:[Object(o.jsx)(x.a,{className:"PlayContainer-Subtitle",variant:"subtitle2",children:"Enter your name and your lucky number to win!!"}),Object(o.jsxs)("div",{className:"PlayContainer-Div",children:[Object(o.jsx)(g.a,{className:"PlayContainer-Input",id:"outlined-name",label:"Name",variant:"outlined",value:e.name,onChange:function(a){e.setName(a.target.value)}}),Object(o.jsx)(g.a,{className:"PlayContainer-Input",id:"outlined-number",label:"Lucky Number",variant:"outlined",value:e.num,onChange:function(a){e.setNum(a.target.value)}})]}),Object(o.jsx)("div",{className:"PlayContainer-Go-Div",children:Object(o.jsx)(f.a,{classes:{root:"PlayContainer-Go"},variant:"contained",color:"primary",onClick:function(){l(!0)},children:" GO!! "})})]})}),r&&Object(o.jsx)(k,{num:e.num,leaderData:e.leaderData,setLeaderData:e.setLeaderData,name:e.name})]})},z=t(433),G=t(26),D=t(435),R=t(436),B=t(432),L=t(434),T=t(430),F=t(439),M=t(431),E=t(442);function H(e,a,t,n){return{name:e,growth:a,maxNum:t,count:n}}var K=[H("Cupcake",305,3.7,67),H("Donut",452,25,51),H("Eclair",262,16,24),H("Frozen yoghurt",159,6,24),H("Gingerbread",356,16,49),H("Honeycomb",408,3.2,87),H("Ice cream sandwich",237,9,37),H("Jelly Bean",375,0,94),H("KitKat",518,26,65),H("Lollipop",392,.2,98),H("Marshmallow",318,0,81),H("Nougat",360,19,9),H("Oreo",437,18,63)];function A(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function J(e,a){return"desc"===e?function(e,t){return A(e,t,a)}:function(e,t){return-A(e,t,a)}}function q(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}var W=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"number",numeric:!0,disablePadding:!1,label:"No Selected"},{id:"growth",numeric:!0,disablePadding:!1,label:"Max Growth %"},{id:"maxNum",numeric:!0,disablePadding:!1,label:"Max Number"},{id:"count",numeric:!0,disablePadding:!1,label:"No of Steps"}];function Q(e){var a=e.classes,t=(e.onSelectAllClick,e.order),n=e.orderBy,c=(e.numSelected,e.rowCount,e.onRequestSort);return Object(o.jsx)(T.a,{children:Object(o.jsx)(M.a,{children:W.map((function(e){return Object(o.jsx)(B.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:n===e.id&&t,children:Object(o.jsxs)(E.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(o.jsx)("span",{className:a.visuallyHidden,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}Object(z.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(G.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}}));var U=Object(z.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:1e3,margin:30,padding:20},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function V(e){var a=e.leaderData,t=U(),n=c.a.useState("asc"),r=Object(j.a)(n,2),l=r[0],i=r[1],s=c.a.useState("calories"),d=Object(j.a)(s,2),u=d[0],b=d[1],h=c.a.useState([]),m=Object(j.a)(h,2),O=m[0],x=m[1],g=c.a.useState(0),f=Object(j.a)(g,2),v=f[0],N=f[1],C=c.a.useState(!1),y=Object(j.a)(C,2),P=y[0],S=(y[1],c.a.useState(5)),w=Object(j.a)(S,2),k=w[0],I=w[1],z=k-Math.min(k,a.length-v*k);return Object(o.jsx)("div",{className:t.root,children:Object(o.jsxs)(p.a,{className:t.paper,children:[Object(o.jsx)(L.a,{children:Object(o.jsxs)(D.a,{className:t.table,"aria-labelledby":"tableTitle",size:P?"small":"medium","aria-label":"enhanced table",children:[Object(o.jsx)(Q,{classes:t,numSelected:O.length,order:l,orderBy:u,onSelectAllClick:function(e){if(e.target.checked){var a=K.map((function(e){return e.name}));x(a)}else x([])},onRequestSort:function(e,a){i(u===a&&"asc"===l?"desc":"asc"),b(a)},rowCount:a.length}),Object(o.jsxs)(R.a,{children:[q(a,J(l,u)).slice(v*k,v*k+k).map((function(e,a){var t,n=(t=e.name,-1!==O.indexOf(t)),c="enhanced-table-checkbox-".concat(a);return Object(o.jsxs)(M.a,{hover:!0,onClick:function(a){return function(e,a){var t=O.indexOf(a),n=[];-1===t?n=n.concat(O,a):0===t?n=n.concat(O.slice(1)):t===O.length-1?n=n.concat(O.slice(0,-1)):t>0&&(n=n.concat(O.slice(0,t),O.slice(t+1))),x(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[Object(o.jsx)(B.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(o.jsx)(B.a,{align:"right",children:e.num}),Object(o.jsx)(B.a,{align:"right",children:e.growth}),Object(o.jsx)(B.a,{align:"right",children:e.maxNum}),Object(o.jsx)(B.a,{align:"right",children:e.count})]},e.name)})),z>0&&Object(o.jsx)(M.a,{style:{height:(P?33:53)*z},children:Object(o.jsx)(B.a,{colSpan:6})})]})]})}),Object(o.jsx)(F.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:k,page:v,onPageChange:function(e,a){N(a)},onRowsPerPageChange:function(e){I(parseInt(e.target.value,10)),N(0)}})]})})}var X=function(e){e.isRickRolled,e.setIsRickRolled;var a=Object(n.useState)(0),t=Object(j.a)(a,2),c=t[0],r=t[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),s=i[0],d=i[1],u=Object(n.useState)(""),b=Object(j.a)(u,2),h=b[0],m=b[1],p=Object(n.useState)([]),x=Object(j.a)(p,2),g=x[0],f=x[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{tab:c,setTab:r}),Object(o.jsxs)("div",{className:"Main-Container",children:[0==c&&Object(o.jsx)(I,{name:s,setName:d,num:h,setNum:m,leaderData:g,setLeaderData:f}),1==c&&Object(o.jsx)(V,{leaderData:g})]})]})},Y=function(e){var a=Object(n.useState)(!1),t=Object(j.a)(a,2),c=t[0],r=t[1];return Object(o.jsx)(u.a,{basename:"/play-with-collatz/",children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/rickroll",children:Object(o.jsx)(d,{isRickRolled:c,setIsRickRolled:r})}),Object(o.jsx)(b.a,{exact:!0,path:"/",component:X})]})})};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Y,{})}),document.getElementById("root")),i()}},[[371,1,2]]]);
//# sourceMappingURL=main.7915e225.chunk.js.map