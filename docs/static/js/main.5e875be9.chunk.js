(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),s=(n(15),n(2)),u=n(9),j=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length<=2||(t((function(e){return[c].concat(Object(u.a)(e))})),i(""))},children:Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}})})},d=n(10),l=function(e){return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:e.url,alt:e.title}),Object(j.jsx)("p",{children:e.title})]})},b=n(6),f=n.n(b),p=n(8),m=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=XnuIZE5jeIuOmS6cVhFbZDbafGkkR6ZZ&limit=10&q=".concat(encodeURI(t)),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(j.jsx)(l,Object(d.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"GifExpertApp"}),Object(j.jsx)(o,{setCategories:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(O,{category:e},e)}))})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5e875be9.chunk.js.map