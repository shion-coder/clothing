(this.webpackJsonpclothing=this.webpackJsonpclothing||[]).push([[0],{145:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(53),a=function(){return{type:r.b}},c=function(e){return{type:r.c,payload:e}},i=function(e){return{type:r.a,payload:e}}},150:function(e,t,n){"use strict";var r=n(151),a=n(0),c=n.n(a),i=n(16),u=n(14);function o(){var e=Object(i.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ","\n"]);return o=function(){return e},e}function l(){var e=Object(i.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return l=function(){return e},e}function s(){var e=Object(i.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return s=function(){return e},e}function f(){var e=Object(i.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return f=function(){return e},e}var d=Object(u.css)(f()),p=Object(u.css)(s()),b=Object(u.css)(l()),m=u.default.button(o(),(function(e){return e.isGoogleSignIn?b:e.inverted?p:d}));t.a=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return c.a.createElement(m,n,t)}},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return f}));var r="GOOGLE_SIGN_IN_START",a="EMAIL_SIGN_IN_START",c="SIGN_IN_SUCCESS",i="CHECK_USER_SESSION",u="SIGN_OUT_START",o="SIGN_OUT_SUCCESS",l="SIGN_UP_START",s="SIGN_UP_SUCCESS",f="SIGN_IN_OUT_UP_FAILURE"},220:function(e,t,n){"use strict";var r=n(152),a=n(0),c=n.n(a),i=n(16),u=n(14);function o(){var e=Object(i.a)(["\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  border: 0.3rem solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return e},e}function l(){var e=Object(i.a)(["\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return l=function(){return e},e}var s=u.default.div(l()),f=u.default.div(o());t.a=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return i(!0)}),0);return function(){clearTimeout(e)}}),[0]),n?c.a.createElement(s,null,c.a.createElement(f,null)):null}},233:function(e,t,n){e.exports=n(448)},35:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"d",(function(){return d}));var r=n(21),a=function(){return{type:r.c}},c=function(e){return{type:r.b,payload:e}},i=function(e){return{type:r.e,payload:e}},u=function(){return{type:r.a}},o=function(){return{type:r.f}},l=function(){return{type:r.g}},s=function(e){return{type:r.h,payload:e}},f=function(e){return{type:r.i,payload:e}},d=function(e){return{type:r.d,payload:e}}},44:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return u}));var r="TOGGLE_CART_HIDDEN",a="ADD_ITEM",c="SUBTRACT_ITEM",i="REMOVE_ITEM",u="CLEAR_CART"},448:function(e,t,n){"use strict";n.r(t);n(234),n(243);var r,a,c,i=n(0),u=n.n(i),o=n(111),l=n.n(o),s=n(49),f=n(222),d=n(31),p=n(231),b=(n(435),n(114)),m=n(223),O=n.n(m),h=n(25),g=n(8),j=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,a=r.type,c=r.payload;return Object.prototype.hasOwnProperty.call(t,a)?"function"===typeof t[a]?t[a](n,c):t[a]:n}},x=j({width:window.innerWidth,height:window.innerHeight},Object(h.a)({},"SET_DIMENSIONS",(function(e,t){var n=t.width,r=t.height;return Object(g.a)(Object(g.a)({},e),{},{width:n,height:r})}))),v=j({color:"light"},Object(h.a)({},"TOGGLE_THEME",(function(e){return Object(g.a)(Object(g.a)({},e),{},{color:"light"===e.color?"dark":"light"})}))),y=n(44),E=n(230),w=j({hidden:!0,cartItems:[]},(r={},Object(h.a)(r,y.e,(function(e){return Object(g.a)(Object(g.a)({},e),{},{hidden:!e.hidden})})),Object(h.a)(r,y.a,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{cartItems:(n=e.cartItems,r=t,n.find((function(e){return e.id===r.id}))?n.map((function(e){return e.id===r.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(E.a)(n),[Object(g.a)(Object(g.a)({},r),{},{quantity:1})]))});var n,r})),Object(h.a)(r,y.d,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{cartItems:(n=e.cartItems,r=t,1===n.find((function(e){return e.id===r.id})).quantity?n.filter((function(e){return e.id!==r.id})):n.map((function(e){return e.id===r.id?Object(g.a)(Object(g.a)({},e),{},{quantity:e.quantity-1}):e})))});var n,r})),Object(h.a)(r,y.c,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.id}))})})),Object(h.a)(r,y.b,(function(e){return Object(g.a)(Object(g.a)({},e),{},{cartItems:[]})})),r)),k=j({sections:[{id:1,title:"Hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",linkUrl:"shop/hats"},{id:2,title:"Jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",linkUrl:"shop/jackets"},{id:3,title:"Sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",linkUrl:"shop/sneakers"},{id:4,title:"Womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",linkUrl:"shop/womens",size:"large"},{id:5,title:"Mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",linkUrl:"shop/mens",size:"large"}]},{}),S=n(53),I=j({isFetching:!1,collections:null,errorMessage:null},(a={},Object(h.a)(a,S.b,(function(e){return Object(g.a)(Object(g.a)({},e),{},{isFetching:!0})})),Object(h.a)(a,S.c,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{isFetching:!1,collections:t,errorMessage:null})})),Object(h.a)(a,S.a,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{isFetching:!1,errorMessage:t})})),a)),C=n(21),U=j({currentUser:null,errorMessage:null},(c={},Object(h.a)(c,C.e,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{currentUser:t,errorMessage:null})})),Object(h.a)(c,C.g,(function(e){return Object(g.a)(Object(g.a)({},e),{},{currentUser:null,errorMessage:null})})),Object(h.a)(c,C.d,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{errorMessage:t})})),c)),T={storage:O.a,key:"root",whitelist:["cart"]},_=Object(d.combineReducers)({dimensions:x,theme:v,cart:w,directory:k,shop:I,user:U}),N=Object(b.a)(T,_),R=n(6),A=n.n(R),G=n(9),M=n(143),z=n(80),H=n.n(z);n(441),n(445);H.a.initializeApp({apiKey:"AIzaSyBo6BC6AKs2jroibZfutUKKlBRUFoc9YBk",authDomain:"clothing-7d9c1.firebaseapp.com",databaseURL:"https://clothing-7d9c1.firebaseio.com",projectId:"clothing-7d9c1",storageBucket:"clothing-7d9c1.appspot.com",messagingSenderId:"853354817615",appId:"1:853354817615:web:4f8994f92e64138f6a223a",measurementId:"G-TVTZ4KGQYS"});var P=H.a.firestore(),L=H.a.auth(),F=new H.a.auth.GoogleAuthProvider,B=function(){var e=Object(M.a)(A.a.mark((function e(t,n){var r,a,c,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=P.doc("/users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(g.a)({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),q=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{id:e.id,routeName:encodeURI(n.toLowerCase()),title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})},D=(H.a,n(145)),K=A.a.mark(J),W=A.a.mark(Y),V=A.a.mark(Q);function J(){var e,t,n;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=P.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(G.b)(q,t);case 7:return n=r.sent,r.next=10,Object(G.c)(Object(D.c)(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(G.c)(Object(D.a)(r.t0.message));case 16:case"end":return r.stop()}}),K,null,[[0,12]])}function Y(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(S.b,J);case 2:case"end":return e.stop()}}),W)}function Q(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Y)]);case 2:case"end":return e.stop()}}),V)}var Z=n(35),$=A.a.mark(de),X=A.a.mark(pe),ee=A.a.mark(be),te=A.a.mark(me),ne=A.a.mark(Oe),re=A.a.mark(he),ae=A.a.mark(ge),ce=A.a.mark(je),ie=A.a.mark(xe),ue=A.a.mark(ve),oe=A.a.mark(ye),le=A.a.mark(Ee),se=A.a.mark(we),fe=A.a.mark(ke);function de(e,t){var n,r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(G.b)(B,e,t);case 3:return n=a.sent,a.next=6,n.get();case 6:return r=a.sent,a.next=9,Object(G.c)(Object(Z.e)(Object(g.a)({id:r.id},r.data())));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(G.c)(Object(Z.d)(a.t0.message));case 15:case"end":return a.stop()}}),$,null,[[0,11]])}function pe(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L.signInWithPopup(F);case 3:return e=n.sent,t=e.user,n.next=7,de(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(G.c)(Object(Z.d)(n.t0.message));case 13:case"end":return n.stop()}}),X,null,[[0,9]])}function be(e){var t,n,r,a,c;return A.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,L.signInWithEmailAndPassword(n,r);case 4:return a=i.sent,c=a.user,i.next=8,de(c);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(G.c)(Object(Z.d)(i.t0.message));case 14:case"end":return i.stop()}}),ee,null,[[1,10]])}function me(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=L.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,de(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(G.c)(Object(Z.d)(t.t0.message));case 14:case"end":return t.stop()}}),te,null,[[0,10]])}function Oe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.signOut();case 3:return e.next=5,Object(G.c)(Object(Z.g)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(G.c)(Object(Z.d)(e.t0.message));case 11:case"end":return e.stop()}}),ne,null,[[0,7]])}function he(e){var t,n,r,a,c,i;return A.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.displayName,r=t.email,a=t.password,u.prev=1,u.next=4,L.createUserWithEmailAndPassword(r,a);case 4:return c=u.sent,i=c.user,u.next=8,Object(G.c)(Object(Z.i)({user:i,additionalData:{displayName:n}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(G.c)(Object(Z.d)(u.t0.message));case 14:case"end":return u.stop()}}),re,null,[[1,10]])}function ge(e){var t,n,r;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,a.next=3,de(n,r);case 3:case"end":return a.stop()}}),ae)}function je(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.c,pe);case 2:case"end":return e.stop()}}),ce)}function xe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.b,be);case 2:case"end":return e.stop()}}),ie)}function ve(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.a,me);case 2:case"end":return e.stop()}}),ue)}function ye(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.f,Oe);case 2:case"end":return e.stop()}}),oe)}function Ee(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.h,he);case 2:case"end":return e.stop()}}),le)}function we(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.i,ge);case 2:case"end":return e.stop()}}),se)}function ke(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(je),Object(G.b)(xe),Object(G.b)(ve),Object(G.b)(ye),Object(G.b)(Ee),Object(G.b)(we)]);case 2:case"end":return e.stop()}}),fe)}var Se=n(78),Ie=A.a.mark(Te),Ce=A.a.mark(_e),Ue=A.a.mark(Ne);function Te(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)(Object(Se.b)());case 2:case"end":return e.stop()}}),Ie)}function _e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.d)(C.g,Te);case 2:case"end":return e.stop()}}),Ce)}function Ne(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(_e)]);case 2:case"end":return e.stop()}}),Ue)}var Re=A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.b)(Q),Object(G.b)(ke),Object(G.b)(Ne)]);case 2:case"end":return e.stop()}}),e)})),Ae=Object(p.a)(),Ge=[Ae],Me=Object(d.compose)(d.applyMiddleware.apply(void 0,Ge)),ze=Object(d.createStore)(N,Me),He=Object(b.b)(ze);Ae.run(Re);var Pe=n(71),Le=n(453),Fe=n(14),Be={},qe=function(e){var t=e.children;return u.a.createElement(Fe.ThemeProvider,{theme:Be},t)},De=n(30),Ke=Object(De.a)([function(e){return e.user}],(function(e){return e.currentUser})),We=n(65),Ve=n(79),Je=n(16);function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Qe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ze=u.a.createElement("g",null),$e=u.a.createElement("g",null),Xe=u.a.createElement("g",null),et=u.a.createElement("g",null),tt=u.a.createElement("g",null),nt=u.a.createElement("g",null),rt=u.a.createElement("g",null),at=u.a.createElement("g",null),ct=u.a.createElement("g",null),it=u.a.createElement("g",null),ut=u.a.createElement("g",null),ot=u.a.createElement("g",null),lt=u.a.createElement("g",null),st=u.a.createElement("g",null),ft=u.a.createElement("g",null),dt=function(e){var t=e.svgRef,n=e.title,r=Qe(e,["svgRef","title"]);return u.a.createElement("svg",Ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},r),n?u.a.createElement("title",null,n):null,u.a.createElement("g",null,u.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),u.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),u.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),u.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),u.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ze,$e,Xe,et,tt,nt,rt,at,ct,it,ut,ot,lt,st,ft)},pt=u.a.forwardRef((function(e,t){return u.a.createElement(dt,Ye({svgRef:t},e))}));n.p;function bt(){var e=Object(Je.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return bt=function(){return e},e}function mt(){var e=Object(Je.a)(["\n  width: 24px;\n  height: 24px;\n"]);return mt=function(){return e},e}function Ot(){var e=Object(Je.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  top: -3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return Ot=function(){return e},e}var ht=Fe.default.div(Ot()),gt=Object(Fe.default)(pt)(mt()),jt=Fe.default.span(bt()),xt=Object(De.b)({itemCount:Ve.c}),vt=Object(s.b)(xt,{toggleCartHidden:Se.e})((function(e){var t=e.itemCount,n=e.toggleCartHidden;return u.a.createElement(ht,{onClick:n},u.a.createElement(gt,null),u.a.createElement(jt,null,t))}));function yt(){var e=Object(Je.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return yt=function(){return e},e}function Et(){var e=Object(Je.a)(["\n  width: 30%;\n"]);return Et=function(){return e},e}function wt(){var e=Object(Je.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return wt=function(){return e},e}var kt=Fe.default.div(wt()),St=Fe.default.img(Et()),It=Fe.default.div(yt()),Ct=u.a.memo((function(e){var t=e.item,n=t.name,r=t.imageUrl,a=t.price,c=t.quantity;return u.a.createElement(kt,null,u.a.createElement(St,{src:r,alt:"item"}),u.a.createElement(It,null,u.a.createElement("span",null,n),u.a.createElement("span",null,c," x $",a)))})),Ut=n(150);function Tt(){var e=Object(Je.a)(["\n  margin-top: auto;\n"]);return Tt=function(){return e},e}function _t(){var e=Object(Je.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return _t=function(){return e},e}function Nt(){var e=Object(Je.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return Nt=function(){return e},e}function Rt(){var e=Object(Je.a)(["\n  position: absolute;\n  width: 340px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return Rt=function(){return e},e}var At=Fe.default.div(Rt()),Gt=Fe.default.div(Nt()),Mt=Fe.default.span(_t()),zt=Object(Fe.default)(Ut.a)(Tt()),Ht=Object(De.b)({cartItems:Ve.b}),Pt=Object(s.b)(Ht)((function(e){var t=e.cartItems,n=e.dispatch,r=Object(We.g)();return u.a.createElement(At,null,u.a.createElement(Gt,null,t.length?t.map((function(e){return u.a.createElement(Ct,{key:e.id,item:e})})):u.a.createElement(Mt,null,"Your cart is empty")),u.a.createElement(zt,{onClick:function(){r.push("/checkout"),n(Object(Se.e)())}},"GO TO CHECKOUT"))}));function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ft(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Bt=u.a.createElement("title",null,"Group"),qt=u.a.createElement("desc",null,"Created with Sketch."),Dt=u.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},u.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},u.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},u.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),u.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),u.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),u.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),u.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Kt=function(e){var t=e.svgRef,n=e.title,r=Ft(e,["svgRef","title"]);return u.a.createElement("svg",Lt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},r),void 0===n?Bt:n?u.a.createElement("title",null,n):null,qt,Dt)},Wt=u.a.forwardRef((function(e,t){return u.a.createElement(Kt,Lt({svgRef:t},e))}));n.p;function Vt(){var e=Object(Je.a)(["\n  padding: 10px 15px;\n  letter-spacing: 2px;\n  cursor: pointer;\n\n  &:hover {\n    font-weight: bold;\n  }\n\n  @media screen and (max-width: 800px) {\n    letter-spacing: 0px;\n  }\n"]);return Vt=function(){return e},e}function Jt(){var e=Object(Je.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]);return Jt=function(){return e},e}function Yt(){var e=Object(Je.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0px;\n  }\n"]);return Yt=function(){return e},e}function Qt(){var e=Object(Je.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]);return Qt=function(){return e},e}var Zt=Fe.default.div(Qt()),$t=Object(Fe.default)(Pe.b)(Yt()),Xt=Fe.default.div(Jt()),en=Object(Fe.default)(Pe.b)(Vt()),tn=Object(De.b)({currentUser:Ke,hidden:Ve.a}),nn=Object(s.b)(tn,{signOutStart:Z.f})((function(e){var t=e.currentUser,n=e.hidden,r=e.signOutStart;return u.a.createElement(Zt,null,u.a.createElement($t,{to:"/"},u.a.createElement(Wt,null)),u.a.createElement(Xt,null,u.a.createElement(en,{to:"/shop"},"SHOP"),u.a.createElement(en,{to:"/contact"},"CONTACT"),t?u.a.createElement(en,{as:"div",to:"/",onClick:r},"SIGN OUT"):u.a.createElement(en,{to:"/signin"},"SIGN IN"),u.a.createElement(vt,null)),n?null:u.a.createElement(Pt,null))})),rn=n(220),an=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,484))})),cn=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,487))})),un=Object(i.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,485))})),on=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,483))})),ln=Object(De.b)({currentUser:Ke}),sn=Object(s.b)(ln,{checkUserSession:Z.a})((function(e){var t=e.currentUser,n=e.checkUserSession;return Object(i.useEffect)((function(){n()}),[n]),u.a.createElement(u.a.Fragment,null,u.a.createElement(nn,null),u.a.createElement(We.d,null,u.a.createElement(i.Suspense,{fallback:u.a.createElement(rn.a,null)},u.a.createElement(We.b,{exact:!0,path:"/",component:an}),u.a.createElement(We.b,{path:"/shop",component:cn}),u.a.createElement(We.b,{exact:!0,path:"/checkout",component:un}),u.a.createElement(We.b,{exact:!0,path:"/signin",render:function(){return t?u.a.createElement(We.a,{to:"/"}):u.a.createElement(on,null)}}))))})),fn=n(228);function dn(){var e=Object(Je.a)(["\n  ","\n\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    font-family: 'Courier New', Courier, monospace, -apple-system,\n      BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',\n      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    padding: 20px 40px;\n    animation: "," 1s ease;\n\n    @media screen and (max-width: 800px) {\n      padding: 10px;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: black;\n  }\n"]);return dn=function(){return e},e}function pn(){var e=Object(Je.a)(["\n  from {\n      opacity: 0;\n  }\n\n  to {\n      opacity: 1;\n  }\n"]);return pn=function(){return e},e}var bn=Object(Fe.keyframes)(pn()),mn=Object(Fe.createGlobalStyle)(dn(),fn.normalize,bn),On=function(){return u.a.createElement(s.a,{store:ze},u.a.createElement(f.a,{persistor:He},u.a.createElement(qe,null,u.a.createElement(mn,null),u.a.createElement(Pe.a,{basename:"/clothing"},u.a.createElement(Le.a,{injectFirst:!0},u.a.createElement(sn,null))))))};l.a.render(u.a.createElement(On,null),document.getElementById("root"))},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="FETCH_COLLECTIONS_START",a="FETCH_COLLECTIONS_SUCCESS",c="FETCH_COLLECTIONS_FAILURE"},78:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(44),a=function(){return{type:r.e}},c=function(e){return{type:r.a,payload:e}},i=function(e){return{type:r.d,payload:e}},u=function(e){return{type:r.c,payload:e}},o=function(){return{type:r.b}}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return o}));var r=n(30),a=function(e){return e.cart},c=Object(r.a)([a],(function(e){return e.hidden})),i=Object(r.a)([a],(function(e){return e.cartItems})),u=Object(r.a)([i],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),o=Object(r.a)([i],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}))}},[[233,1,2]]]);
//# sourceMappingURL=main.8fa5dd25.chunk.js.map