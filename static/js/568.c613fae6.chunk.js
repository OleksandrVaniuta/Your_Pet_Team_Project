"use strict";(self.webpackChunkYour_Pet_Team_Project=self.webpackChunkYour_Pet_Team_Project||[]).push([[568],{9321:function(n,i,e){e.d(i,{Z:function(){return o}});var t=e(2791),s="Modal_modal__DJDMv",a="Modal_active__-p53x",r=e(184);var o=function(n){var i=n.isActive,e=n.children,o=n.closeModal;return(0,t.useEffect)((function(){var n=function(n){"Escape"===n.key&&i&&o()},e=function(n){n.target.classList.contains(a)&&i&&o()};return i&&(document.addEventListener("keydown",n),document.addEventListener("click",e)),function(){document.removeEventListener("keydown",n),document.removeEventListener("click",e)}}),[i,o]),(0,r.jsx)("div",{className:i?a:s,children:e})}},9568:function(n,i,e){e.r(i),e.d(i,{default:function(){return p}});var t,s,a=e(2791),r=e(9434),o=e(1444),c=function(n){return n.friends.items},l=e(9439),d=e(9321),_={item_container:"Friends_item_container__z44dp",main_info:"Friends_main_info__x3vda",info_img:"Friends_info_img__LEL01",item_img:"Friends_item_img__vv3kM",item_title:"Friends_item_title__BnkEA",info_head:"Friends_info_head__XqgCx",items_info:"Friends_items_info__enamO",item_info_div:"Friends_item_info_div__w0tg9",info_list_item:"Friends_info_list_item__mt+gK",info_main:"Friends_info_main__qkMnv",info_list:"Friends_info_list__uUEHF",modal:"Friends_modal__j5o3U",modal_content:"Friends_modal_content__9yHNs",modal_li:"Friends_modal_li__IAwFs",custom_modal:"Friends_custom_modal__0EeVd"},m=e(184),f=function(n){var i=n.item,e=(0,a.useState)(!1),t=(0,l.Z)(e,2),s=t[0],r=t[1],o=(0,a.useState)({width:"",height:""}),c=(0,l.Z)(o,2),f=c[0],u=c[1],h=(0,a.useRef)(null);(0,a.useLayoutEffect)((function(){if(s&&h.current){var n=h.current.offsetWidth,i=h.current.offsetHeight;u({width:"".concat(n,"px"),height:"".concat(i,"px")})}}),[s]);var x=function(n){return n.padStart(5,"0")};return(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:_.item_container,children:[(0,m.jsx)("div",{className:_.title_div,children:(0,m.jsx)("h3",{children:(0,m.jsx)("a",{href:i.url,target:"blank",className:_.item_title,children:i.title})})}),(0,m.jsxs)("div",{className:_.main_info,children:[(0,m.jsx)("div",{className:_.info_img,children:(0,m.jsx)("img",{src:i.imageUrl,alt:"friends-avatar",className:_.item_img})}),(0,m.jsx)("div",{className:_.items_info,children:(0,m.jsxs)("ul",{className:_.info_list,children:[null!==i.workDays&&(0,m.jsxs)("li",{className:_.info_list_item,children:[" ","Time:",(0,m.jsx)("a",{href:"dffdfsd",className:_.info_main,onClick:function(n){n.preventDefault(),r(!0)},children:function(){if(i.workDays&&Array.isArray(i.workDays)){var n=i.workDays.find((function(n){return n.isOpen}));if(n){var e=x(n.from),t=x(n.to);return" ".concat(e," - ").concat(t)}}return null}()})]}),s&&(0,m.jsx)(d.Z,{isActive:s,closeModal:function(){s&&r(!1)},children:(0,m.jsx)("div",{className:_.modal,style:{width:f.width,height:f.height},children:(0,m.jsx)("ul",{className:_.modal_content,ref:h,children:function(){var n=["MU","TU","WE","TH","FR","SA","SU"];return i.workDays&&Array.isArray(i.workDays)?i.workDays.map((function(i,e){return(0,m.jsx)("li",{className:_.modal_li,children:i.isOpen?"".concat(n[e]," : ").concat(i.from," - ").concat(i.to):""},e)})):null}()})})}),i.addressUrl&&(0,m.jsxs)("li",{className:_.info_list_item,children:["Adress:",(0,m.jsx)("a",{href:i.addressUrl,className:_.info_main,target:"blank",children:i.address})]}),i.email&&(0,m.jsxs)("li",{className:_.info_list_item,children:["Email:",(0,m.jsx)("a",{href:"mailto:".concat(i.email),className:_.info_main,target:"blank",children:i.email})]}),i.phone&&(0,m.jsxs)("li",{className:_.info_list_item,children:["Phone:",(0,m.jsx)("a",{href:"tel:".concat(i.phone),className:_.info_main,target:"blank",children:i.phone})]})]})})]})]})})},u="FriendsList_list__V5-Hd",h=function(n){var i=n.friend;return(0,m.jsx)("ul",{className:u,children:i.map((function(n){return(0,m.jsx)(f,{item:n},n._id)}))})},x=e(168),v=e(9202),j=v.Z.h2(t||(t=(0,x.Z)(["\n  text-align: center;\n\n  @media screen and (max-width: 747.98px) {\n    font-size: 24px;\n    margin-top: 40px;\n    margin-bottom: 24px;\n  }\n\n  @media screen and (min-width: 748px) {\n    font-size: 48px;\n    margin-bottom: 40px;\n    margin-top: 80px;\n  }\n"]))),g=v.Z.div(s||(s=(0,x.Z)(["\n  background-color: #fef9f9;\n"]))),p=function(){var n=(0,r.I0)(),i=(0,r.v9)(c);return(0,a.useEffect)((function(){n((0,o._)()),console.log(n((0,o._)()))}),[n]),(0,m.jsxs)(g,{children:[(0,m.jsx)(j,{children:"OurFriends"}),(0,m.jsx)(h,{friend:i})]})}}}]);
//# sourceMappingURL=568.c613fae6.chunk.js.map