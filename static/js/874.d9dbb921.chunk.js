"use strict";(self.webpackChunkYour_Pet_Team_Project=self.webpackChunkYour_Pet_Team_Project||[]).push([[874],{9101:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r,a=t(9439),s=t(2791),i=t(9434),c=t(168),u=t(9202).Z.div(r||(r=(0,c.Z)(["\n  background-color: #fef9f9;\n"]))),o=t(3083),l=t(5303),f="NewsList_news_list__0yD5i",d="NewsItem_news_item__a7kY-",m="NewsItem_news_img__SVBsH",_="NewsItem_news_info__8JV3U",h="NewsItem_news_title__aPc9J",v="NewsItem_news_text__wvsL2",w="NewsItem_news_more__4lmWC",x="NewsItem_news_date__vQlBV",j="NewsItem_news_link__4Ph5K",N=t(184),g=function(e){var n=e.element,t=n._id,r=n.imgUrl,a=n.title,s=n.text,i=n.date,c=n.url,u=new Date(i),o=u.getUTCDate(),l=u.getUTCMonth()+1,f=u.getUTCFullYear(),g=o<10?"0".concat(o):o,Z=l<10?"0".concat(l):l,p="".concat(g,"/").concat(Z,"/").concat(f),M=function(e,n){return e.length<n?e:e.slice(0,n)+"..."};return(0,N.jsx)("li",{className:d,children:(0,N.jsxs)("article",{children:[(0,N.jsx)("img",{src:r,alt:a,loading:"lazy",className:m}),(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("h3",{className:h,children:M(a,50)}),(0,N.jsx)("p",{className:v,children:M(s,270)}),(0,N.jsxs)("div",{className:w,children:[(0,N.jsx)("p",{className:x,children:p}),(0,N.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:j,children:"Read more"})]})]})]})},t)},Z=function(e){var n=e.news;return(0,N.jsx)("div",{children:(0,N.jsx)("ul",{className:f,children:n.map((function(e){return(0,N.jsx)(g,{element:e},e._id)}))})})},p=t(3677),M=t(4009),P=function(e){return e.news.items},k=function(e){return e.news.totalPages},I=function(){var e=(0,s.useState)(1),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,s.useState)(""),f=(0,a.Z)(c,2),d=f[0],m=f[1],_=(0,i.I0)(),h=(0,i.v9)(P),v=(0,i.v9)(k);return(0,s.useEffect)((function(){_((0,M.a)({search:d||"",page:t||1,limit:6}))}),[_,d,t]),(0,N.jsxs)(u,{children:[(0,N.jsx)(l.V,{children:"News"}),(0,N.jsx)(o.Z,{handleSearch:function(e){return m(e)}}),(0,N.jsx)(Z,{news:h}),(0,N.jsx)(p.Z,{handlePagination:function(e){return r(e)},totalPages:v},"".concat(d))]})}},5193:function(e,n,t){var r;t.d(n,{Z:function(){return d}});var a=t(9439),s=t(2791),i=t(9120),c=t(1537),u=t(162);function o(e,n,t,r,i){var c=s.useState((function(){return i&&t?t(e).matches:r?r(e).matches:n})),o=(0,a.Z)(c,2),l=o[0],f=o[1];return(0,u.Z)((function(){var n=!0;if(t){var r=t(e),a=function(){n&&f(r.matches)};return a(),r.addListener(a),function(){n=!1,r.removeListener(a)}}}),[e,t]),l}var l=(r||(r=t.t(s,2))).useSyncExternalStore;function f(e,n,t,r,i){var c=s.useCallback((function(){return n}),[n]),u=s.useMemo((function(){if(i&&t)return function(){return t(e).matches};if(null!==r){var n=r(e).matches;return function(){return n}}return c}),[c,e,r,i,t]),o=s.useMemo((function(){if(null===t)return[c,function(){return function(){}}];var n=t(e);return[function(){return n.matches},function(e){return n.addListener(e),function(){n.removeListener(e)}}]}),[c,t,e]),f=(0,a.Z)(o,2),d=f[0],m=f[1];return l(m,d,u)}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,i.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=(0,c.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),s=a.defaultMatches,u=void 0!==s&&s,d=a.matchMedia,m=void 0===d?r?window.matchMedia:null:d,_=a.ssrMatchMedia,h=void 0===_?null:_,v=a.noSsr,w=void 0!==v&&v;var x="function"===typeof e?e(t):e;x=x.replace(/^@media( ?)/m,"");var j=void 0!==l?f:o,N=j(x,u,m,h,w);return N}},3457:function(e,n,t){var r=(0,t(4046).ZP)();n.Z=r}}]);
//# sourceMappingURL=874.d9dbb921.chunk.js.map