(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a.n(n),s=a(7),r=a.n(s),o=(a(15),a(9)),l=a(6),j=a.n(l),u=a(8),d=a(4),m=(a(17),function(e){var t=e.favouriteComponent;return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(a,n){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:a.Poster,alt:"movie"}),Object(c.jsx)("div",{onClick:function(){return e.handleFavouritesClick(a)},className:"overlay d-flex align-items-center justify-content-center",children:Object(c.jsx)(t,{})})]})}))})}),v=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})},h=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Add to Favorites"}),Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},b=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Remove from Favorites"}),Object(c.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},p=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),l=r[0],p=r[1],x=Object(n.useState)(""),O=Object(d.a)(x,2),g=O[0],w=O[1],N=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://www.omdbapi.com/?s=".concat(t,"&apikey=da28d6fc"),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:(n=e.sent).Search&&i(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(g)}),[g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&p(e)}),[]);var S=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(c.jsxs)("div",{className:"container-fluid ",children:[Object(c.jsxs)("div",{className:"row d-flex align-items-center mt-4 movie-app sizing",children:[Object(c.jsx)(v,{heading:"Movies"}),Object(c.jsx)(h,{searchValue:g,setSearchValue:w})]}),Object(c.jsx)("div",{className:"row movie-app sizing",children:Object(c.jsx)(m,{movies:a,handleFavouritesClick:function(e){var t=[].concat(Object(o.a)(l),[e]);0==l.includes(e)?(p(t),S(t)):alert("This movie is already in your Favorites")},favouriteComponent:f})}),Object(c.jsx)("div",{className:"row d-flex align-items-center mt-4  movie-app sizing",children:Object(c.jsx)(v,{heading:"Favorites"})}),Object(c.jsx)("div",{className:"row movie-app sizing",children:Object(c.jsx)(m,{movies:l,handleFavouritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));p(t),S(t)},favouriteComponent:b})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f94612ed.chunk.js.map