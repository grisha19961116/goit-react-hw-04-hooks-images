(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{11:function(e,r,t){e.exports={loader:"Loader_loader__1mGaZ",loader__position:"Loader_loader__position__2WmcZ",loader__domLoad__position:"Loader_loader__domLoad__position__3vyw4"}},13:function(e,r,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2J2pe",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__YcdMD"}},14:function(e,r,t){e.exports={Overlay:"Modal_Overlay__3PWRC",Modal:"Modal_Modal__19Xdw"}},16:function(e,r,t){e.exports={App:"App_App__3inTZ",wrapper__gallery:"App_wrapper__gallery__1JgSx"}},17:function(e,r,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__dzBGU"}},18:function(e,r,t){e.exports={Button:"Button_Button__3b9ju"}},26:function(e,r,t){},53:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t(0),o=t.n(n),c=t(3),s=t.n(c),i=(t(25),t(26),t(15)),u=t(4),l=t.n(u),d=t(8),p=t(6),h=(t(28),t(5)),b=t(16),_=t.n(b),m={API_KEY:"18650753-c8867d24a687d3baeda70b1dc",HTTP:"https://pixabay.com/api/?",getFullRequest:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(this.HTTP,"q=").concat(e,"&page=").concat(r,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e}))}},g=t(9),f=t.n(g),j=function(e){var r=e.submitForm;return Object(a.jsx)("header",{className:f.a.SearchBar,children:Object(a.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){return r(e)},children:[Object(a.jsx)("button",{type:"submit",className:f.a.SearchForm__button,children:Object(a.jsx)("span",{className:"s.SearchForm-button-label"})}),Object(a.jsx)("input",{id:"input-searchBar",className:f.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},v=t(17),O=t.n(v),x=t(13),w=t.n(x),k=function(e){var r=e.url,t=e.urlHd;return Object(a.jsx)("li",{className:w.a.ImageGalleryItem,children:Object(a.jsx)("img",{src:r,alt:t,className:w.a.ImageGalleryItem__image})})},y=function(e){var r=e.dataFetch,t=e.onClickList;return Object(a.jsx)("ul",{className:O.a.ImageGallery,onClick:function(e){return t(e)},children:r.length>0&&r.map((function(e,r){var t=e.webformatURL,n=e.largeImageURL;return Object(a.jsx)(k,{url:t,urlHd:n},r+1)}))})},S=t(18),I=t.n(S),C=function(e){var r=e.loadMore;return Object(a.jsx)("button",{className:I.a.Button,onClick:function(){return r()},children:"Load more"})},F=(t(29),t(19)),B=t.n(F),H=t(11),L=t.n(H),E=function(e){var r=e.domLoad,t=e.duration,n=r?L.a.loader__domLoad__position:L.a.loader__position;return Object(a.jsx)(B.a,{className:L.a.loader+" "+n,type:"Puff",color:"#0ca0f5",height:100,width:100,timeout:t||3e5})},G=t(14),M=t.n(G),N=function(e){var r=e.src,t=e.closeModalClick,o=e.closeModalEsc;return Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}})),Object(a.jsx)("div",{className:M.a.Overlay,onClick:function(e){return t(e)},children:Object(a.jsx)("div",{className:M.a.Modal,children:Object(a.jsx)("img",{src:r,alt:"open full hd img"})})})},P=Object(n.createRef)(),q=t(51);var D=function(){var e=Object(n.useState)(""),r=Object(p.a)(e,2),t=r[0],o=r[1],s=Object(n.useState)([]),u=Object(p.a)(s,2),b=u[0],g=u[1],f=Object(n.useState)(1),v=Object(p.a)(f,2),O=v[0],x=v[1],w=Object(n.useState)(!1),k=Object(p.a)(w,2),S=k[0],I=k[1],F=Object(n.useState)(""),B=Object(p.a)(F,2),H=B[0],L=B[1],G=function(){var e;switch(P.current){case"HD":e=1080;break;case"fullHD":e=1150;break;case"4k":e=1520}window.scrollTo({top:document.documentElement.scrollHeight-e,behavior:"smooth"})},M=function(){var e=Object(d.a)(l.a.mark((function e(r){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a=document.getElementById("input-searchBar"),n=a.value.toLowerCase().replace(/\s/g,""),!(t===n&&b.length>0)){e.next=5;break}return e.abrupt("return",h.b.warn("\u26a0\ufe0f Change request!",{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}));case 5:return e.prev=5,I(!0),e.next=9,m.getFullRequest(n,O).then((function(e){var r=e.hits;if(0===e.totalHits)throw new Error("Wrong request");g(r),o(n),G(),""===n&&h.b.warn("\u26a0\ufe0f Default page!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}));case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(5),a.value="",o(""),h.b.error("\ud83d\ude80 ".concat("Wrong request"===e.t0.message?"Wrong request":"Server error","!"),{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 16:return e.prev=16,I(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[5,11,16,19]])})));return function(r){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O+1,e.prev=1,I(!0),e.next=5,m.getFullRequest(t,r+1).then((function(e){var r=e.hits;if(0===r.length)return h.b.warn("\u26a0\ufe0f The last page!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});g([].concat(Object(i.a)(b),Object(i.a)(r))),G()}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),h.b.error("\ud83d\ude80 Server error!",{position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 10:return e.prev=10,I(!1),x(r),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[1,7,10,14]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){switch(window.screen.width){case 2560:P.current="4k";break;case 1920:P.current="fullHD";break;case 1600:P.current="HD"}}),[]),Object(n.useEffect)((function(){var e=q((function(){return function(){var e,r=document.getElementById("root");switch(P.current){case"HD":e=900;break;case"fullHD":e=965;break;case"4k":e=1325}new IntersectionObserver(Object(d.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=window.scrollY,0===r.clientHeight-Math.round(a)-e){t.next=5;break}return t.abrupt("return");case 5:D();case 6:case"end":return t.stop()}}),t)}))),{root:null,rootMargin:"0px",threshold:1}).observe(r)}()}),1e3);return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}));var T=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=document.querySelector("#root__modal");return Object(a.jsxs)("div",{children:[Object(a.jsx)(E,{domLoad:!0,duration:500}),Object(a.jsx)(j,{submitForm:function(e){return M(e)}}),""!==H&&Object(c.createPortal)(Object(a.jsx)(N,{src:H,closeModalClick:function(e){return"IMG"!==e.target.tagName&&L("")},closeModalEsc:function(e){return"Escape"===e.code&&L("")}}),R),Object(a.jsxs)("div",{className:_.a.wrapper__gallery,children:[Object(a.jsx)(y,{dataFetch:b,onClickList:function(e){return"IMG"===e.target.tagName&&L(e.target.alt)}}),b.length>0&&Object(a.jsx)(C,{loadMore:T}),S&&Object(a.jsx)(E,{}),Object(a.jsx)(h.a,{position:"top-right",autoClose:1500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})]})};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))},9:function(e,r,t){e.exports={SearchBar:"Searchbar_SearchBar__31slt",SearchForm:"Searchbar_SearchForm__3GBfO",SearchForm__button:"Searchbar_SearchForm__button__1dt-x","SearchForm__button-label":"Searchbar_SearchForm__button-label__1y78g",SearchForm__input:"Searchbar_SearchForm__input__1HhEQ"}}},[[53,1,2]]]);
//# sourceMappingURL=main.adbbeb21.chunk.js.map