/*! For license information please see 6330.1b94cbb6.chunk.js.LICENSE.txt */
(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[6330],{44544:function(e,s,a){"use strict";a(29867);var r=a(92834);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{children:(0,r.jsx)("p",{children:"Copyright \xa9 2016 OxyLoans.com. All rights reserved."})})})}},54404:function(e,s,a){"use strict";var r=a(1413),n=a(29439),i=a(29867),t=a(25644),l=a(36037),o=(a(72318),a(73094)),c=a(9476),d=a(5431),m=a(44790),h=a(37086),u=a(92834),x=function(e){var s,a,x,j=(0,o.I0)(),f=(0,o.v9)((function(e){return e.counter.userProfile})),p=(0,i.useState)({profileData:""}),g=(0,n.Z)(p,2),v=g[0],N=g[1];return(0,i.useEffect)((function(){var e=function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},s=document.querySelector(".win-maximize");return s.addEventListener("click",e),function(){s.removeEventListener("click",e)}}),[]),(0,i.useEffect)((function(){j((0,c.rQ)()),j((0,d.py)()),(0,l.M_)().then((function(e){200==e.request.status?(localStorage.setItem("userType",e.data.userDisplayId),N((0,r.Z)((0,r.Z)({},v),{},{profileData:e}))):"200"!=e.response.data.errorCode&&(0,m.WY)(e.response.data.errorMessage,"/")}))}),[]),(0,i.useMemo)((function(){(0,l.Ad)()&&(0,m.WY)("Your session is expiring in 5 minutes.","/dashboard")}),[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"header",children:[(0,u.jsxs)("div",{className:"header-left",children:[(0,u.jsx)(t.rU,{to:"/dashboard",className:"logo",children:(0,u.jsx)("img",{src:h.b9,alt:"Logo"})}),(0,u.jsx)(t.rU,{to:"/dashboard",className:"logo logo-small",children:(0,u.jsx)("img",{src:h.h7,alt:"Logo",width:30,height:30})})]}),(0,u.jsx)("div",{className:"menu-toggle",children:(0,u.jsx)(t.rU,{to:"#",id:"toggle_btn",onClick:function(){document.body.classList.toggle("mini-sidebar")},children:(0,u.jsx)("i",{className:"fas fa-bars"})})}),(0,u.jsx)("div",{className:"top-nav-search",style:{display:"none"},children:(0,u.jsxs)("form",{children:[(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Search here"}),(0,u.jsx)("button",{className:"btn",type:"submit",children:(0,u.jsx)("i",{className:"fas fa-search"})})]})}),(0,u.jsx)(t.rU,{to:"#",className:"mobile_btn",id:"mobile_btn",onClick:function(){document.body.classList.toggle("slide-nav")},children:(0,u.jsx)("i",{className:"fas fa-bars"})}),(0,u.jsxs)("ul",{className:"nav user-menu",children:[(0,u.jsxs)("li",{className:"nav-item dropdown noti-dropdown me-2 d-none",children:[(0,u.jsx)(t.rU,{to:"#",className:"dropdown-toggle nav-link header-nav-list","data-bs-toggle":"dropdown",children:(0,u.jsx)("img",{src:h.Tq,alt:""})}),(0,u.jsxs)("div",{className:"dropdown-menu notifications",children:[(0,u.jsxs)("div",{className:"topnav-dropdown-header",children:[(0,u.jsx)("span",{className:"notification-title",children:"Notifications"}),(0,u.jsx)(t.rU,{to:"#",className:"clear-noti",children:"Clear All"})]}),(0,u.jsx)("div",{className:"noti-content",children:(0,u.jsxs)("ul",{className:"notification-list",children:[(0,u.jsx)("li",{className:"notification-message",children:(0,u.jsx)(t.rU,{to:"#",children:(0,u.jsxs)("div",{className:"media d-flex",children:[(0,u.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,u.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:h.xd})}),(0,u.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,u.jsxs)("p",{className:"noti-details",children:[(0,u.jsx)("span",{className:"noti-title",children:"Carlson Tech"})," has approved"," ",(0,u.jsx)("span",{className:"noti-title",children:"your estimate"})]}),(0,u.jsx)("p",{className:"noti-time",children:(0,u.jsx)("span",{className:"notification-time",children:"4 mins ago"})})]})]})})}),(0,u.jsx)("li",{className:"notification-message",children:(0,u.jsx)(t.rU,{to:"#",children:(0,u.jsxs)("div",{className:"media d-flex",children:[(0,u.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,u.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:h.kj})}),(0,u.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,u.jsxs)("p",{className:"noti-details",children:[(0,u.jsx)("span",{className:"noti-title",children:"International Software Inc"})," ","has sent you a invoice in the amount of"," ",(0,u.jsx)("span",{className:"noti-title",children:"$218"})]}),(0,u.jsx)("p",{className:"noti-time",children:(0,u.jsx)("span",{className:"notification-time",children:"6 mins ago"})})]})]})})}),(0,u.jsx)("li",{className:"notification-message",children:(0,u.jsx)(t.rU,{to:"#",children:(0,u.jsxs)("div",{className:"media d-flex",children:[(0,u.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,u.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:h.op})}),(0,u.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,u.jsxs)("p",{className:"noti-details",children:[(0,u.jsx)("span",{className:"noti-title",children:"John Hendry"})," sent a cancellation request"," ",(0,u.jsx)("span",{className:"noti-title",children:"Apple iPhone XR"})]}),(0,u.jsx)("p",{className:"noti-time",children:(0,u.jsx)("span",{className:"notification-time",children:"8 mins ago"})})]})]})})}),(0,u.jsx)("li",{className:"notification-message",children:(0,u.jsx)(t.rU,{to:"#",children:(0,u.jsxs)("div",{className:"media d-flex",children:[(0,u.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,u.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:h.U2})}),(0,u.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,u.jsxs)("p",{className:"noti-details",children:[(0,u.jsx)("span",{className:"noti-title",children:"Mercury Software Inc"})," ","added a new product"," ",(0,u.jsx)("span",{className:"noti-title",children:"Apple MacBook Pro"})]}),(0,u.jsx)("p",{className:"noti-time",children:(0,u.jsx)("span",{className:"notification-time",children:"12 mins ago"})})]})]})})})]})}),(0,u.jsx)("div",{className:"topnav-dropdown-footer",children:(0,u.jsx)(t.rU,{to:"#",children:"View all Notifications"})})]})]}),(0,u.jsx)("li",{className:"nav-item  has-arrow dropdown-heads ",children:(0,u.jsx)(t.rU,{to:"#",className:"win-maximize maximize-icon",children:(0,u.jsx)("img",{src:h.tm,alt:""})})}),(0,u.jsxs)("li",{className:"nav-item dropdown has-arrow new-user-menus",children:[(0,u.jsx)(t.rU,{to:"#",className:"dropdown-toggle nav-link","data-bs-toggle":"dropdown",children:(0,u.jsxs)("span",{className:"user-img",children:[(0,u.jsx)("img",{className:"rounded-circle",src:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png",width:31,alt:"Ryan Taylor"}),(0,u.jsx)("div",{className:"user-text text-wrap",children:(0,u.jsxs)("h6",{children:[0!=(null===f||void 0===f?void 0:f.length)&&null!==(s=(null===f||void 0===f?void 0:f.firstName.charAt(0).toUpperCase())+(null===f||void 0===f?void 0:f.firstName.slice(1).toLowerCase()))&&void 0!==s?s:"",0!=(null===f||void 0===f?void 0:f.length)&&null!==(a=localStorage.setItem("userName",(null===f||void 0===f?void 0:f.firstName.charAt(0).toUpperCase())+(null===f||void 0===f?void 0:f.firstName.slice(1).toLowerCase())))&&void 0!==a?a:""]})})]})}),(0,u.jsxs)("div",{className:"dropdown-menu",children:[(0,u.jsxs)("div",{className:"user-header",children:[(0,u.jsx)("div",{className:"avatar avatar-sm",children:(0,u.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png",alt:"User Image",className:"avatar-img rounded-circle"})}),(0,u.jsxs)("div",{className:"user-text",children:[(0,u.jsxs)("p",{className:"text-muted mb-0",children:["BR",0!==(null===f||void 0===f?void 0:f.length)?null!==(x=null===f||void 0===f?void 0:f.userId)&&void 0!==x?x:0:""]}),(0,u.jsx)("p",{className:"text-muted mb-0",children:"BORROWER"})]})]}),(0,u.jsx)(t.rU,{className:"dropdown-item",to:"/borrowerProfile",children:"My Profile"}),(0,u.jsx)(t.rU,{className:"dropdown-item",to:"/myRunningDelas",children:"My Application"}),(0,u.jsx)(t.rU,{className:"dropdown-item",to:"/",onClick:function(){localStorage.clear(),sessionStorage.clear()},children:"Logout"})]})]})]})]})})};s.Z=i.memo(x)},76716:function(e,s,a){"use strict";var r=a(29439),n=a(29867),i=a(84670),t=a(25644),l=a(28285),o=a(92834);s.Z=function(e){var s=(0,n.useState)(""),a=(0,r.Z)(s,2),c=a[0],d=a[1],m=(0,n.useState)(""),h=(0,r.Z)(m,2),u=(h[0],h[1],(0,n.useState)("")),x=(0,r.Z)(u,2),j=(x[0],x[1],function(e){d(e)});(0,n.useEffect)((function(){function e(e){if(e.stopPropagation(),document.body.classList.contains("mini-sidebar")&&null!==document.querySelector("#toggle_btn").offsetParent)return e.target.closest(".sidebar")?(document.body.classList.add("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="block"}))):(document.body.classList.remove("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="none"}))),!1}return document.addEventListener("mouseover",e),function(){document.removeEventListener("mouseover",e)}}),[]),(0,n.useEffect)((function(){$(document).on("change",".sidebar-type-four input",(function(){$(this).is(":checked")?($(".sidebar").addClass("sidebar-eight"),$(".sidebar-menu").addClass("sidebar-menu-eight"),$(".menu-title").addClass("menu-title-eight"),$(".header").addClass("header-eight"),$(".header-left-two").addClass("header-left-eight"),$(".user-menu").addClass("user-menu-eight"),$(".dropdown-toggle").addClass("dropdown-toggle-eight"),$(".white-logo").addClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").addClass("hide-logo"),$(".header-two .header-left-two .logo:not(.logo-small)").removeClass("hide-logo"),$(".header-two .header-left-two .dark-logo").removeClass("show-logo")):($(".sidebar").removeClass("sidebar-eight"),$(".sidebar-menu").removeClass("sidebar-menu-eight"),$(".menu-title").removeClass("menu-title-eight"),$(".header").removeClass("header-eight"),$(".header-left-two").removeClass("header-left-eight"),$(".user-menu").removeClass("user-menu-eight"),$(".dropdown-toggle").removeClass("dropdown-toggle-eight"),$(".white-logo").removeClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").removeClass("hide-logo"))}))}),[]);var f=(0,i.TH)().pathname;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"sidebar",id:"sidebar",children:(0,o.jsx)(l.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!0,autoHeightMin:0,autoHeightMax:"95vh",thumbSize:300,universal:!1,hideTracksWhenNotNeeded:!0,children:(0,o.jsx)("div",{className:"sidebar-inner slimscroll",children:(0,o.jsxs)("div",{id:"sidebar-menu",className:"sidebar-menu",children:[(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"".concat("/borrowerDashboard"===f?"active":""),children:(0,o.jsxs)(t.rU,{to:"/borrowerDashboard",children:[(0,o.jsx)("i",{className:"fa-solid fa-gauge"})," ",(0,o.jsx)("span",{children:" Dashboard "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/borrowerProfile"===f?"active":""),children:(0,o.jsxs)(t.rU,{to:"/borrowerProfile",children:[(0,o.jsx)("i",{className:"fa-solid fa-user"}),(0,o.jsx)("span",{children:" Profile "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsxs)("li",{className:"".concat("/borrowerenach"===f||"/borrowerloanstatement"===f||"/borrowerAgreedLoans"===f||"/borrowermyloanApplication"===f?"active submenu":"submenu"),children:[(0,o.jsxs)(t.rU,{to:"#",className:"myborrowings"==c?"subdrop":"",onClick:function(){return j("myborrowings"==c?"":"myborrowings")},children:[(0,o.jsx)("i",{className:"fa-solid fa-network-wired"}),(0,o.jsx)("span",{children:" My Borrowings "})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"myborrowings"==c?(0,o.jsxs)("ul",{style:{display:"myborrowings"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowermyloanApplication",className:"".concat("/borrowermyloanApplication"===f?"active":""),children:"My Running Loans"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerloanstatement",className:"".concat("/borrowerloanstatement"===f?"active":""),children:"My Loan Status"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerAgreedLoans",className:"".concat("/borrowerAgreedLoans"===f?"active":""),children:"Agreed Loans"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerenach",className:"".concat("/borrowerenach"===f?"active":""),children:"Enach"})})]}):""]}),(0,o.jsx)("li",{className:"".concat("/borrowerloanListing"===f?"active":""),children:(0,o.jsxs)(t.rU,{to:"/borrowerloanListing",children:[(0,o.jsx)("i",{className:"fa-solid fa-user"}),(0,o.jsx)("span",{children:" Loan Listing "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/borrowerpayemi"===f?"active":""),children:(0,o.jsxs)(t.rU,{to:"/borrowerpayemi",children:[(0,o.jsx)("i",{className:"fa-solid fa-user"}),(0,o.jsx)("span",{children:" Pay EMI "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsxs)("li",{className:"".concat("/writetous"===f||"/emicalculator"===f||"/ticketHistory"===f||"/borrowerwriteTous"===f||"/borroweremicalculator"===f?"active submenu":"submenu"),children:[(0,o.jsxs)(t.rU,{to:"#",className:"HelpDesk"==c?"subdrop":"",onClick:function(){return j("HelpDesk"==c?"":"HelpDesk")},children:[(0,o.jsx)("i",{className:"fa-solid fa-handshake-angle"}),(0,o.jsx)("span",{children:" Help Desk"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"HelpDesk"==c?(0,o.jsxs)("ul",{style:{display:"HelpDesk"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerwriteTous",className:"".concat("/borrowerwriteTous"===f?"active":""),children:"Write To us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerTicketHistory",className:"".concat("/borrowerTicketHistory"===f?"active":""),children:"View Ticket History"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borroweremicalculator",className:"".concat("/borroweremicalculator"===f?"active":""),children:"EMI Calculator"})})]}):""]})]}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{className:"".concat("/borrowerreferfriend"===f||"/borrowerreferstatus"===f||"/borrowerrunningLoans"===f||"/borrowermycontacts"===f||"/borrowermyearnings"===f?"active submenu":"submenu"),children:[(0,o.jsxs)(t.rU,{to:"#",className:"MyNetwork"==c?"subdrop":"",onClick:function(){return j("MyNetwork"==c?"":"MyNetwork")},children:[(0,o.jsx)("i",{className:"fa-solid fa-network-wired"}),(0,o.jsx)("span",{children:" My Network"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"MyNetwork"==c?(0,o.jsxs)("ul",{style:{display:"MyNetwork"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerreferfriend",className:"".concat("/borrowerreferfriend"===f?"active":""),children:"Refer A friend"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowerreferstatus",className:"".concat("/borrowerreferstatus"===f?"active":""),children:"Referal Status"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowermycontacts",className:"".concat("/borrowermycontacts"===f?"active":""),children:"My Contacts"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.rU,{to:"/borrowermyearnings",className:"".concat("/borrowermyearnings"===f?"active":""),children:"My Earning"})})]}):""]}),(0,o.jsx)("li",{className:"".concat("/"===f?"active":""),children:(0,o.jsxs)(t.rU,{to:"/",children:[(0,o.jsx)("i",{className:"fa-solid fa-right-from-bracket"}),(0,o.jsx)("span",{children:"Sign Out"})]})})]})]})})})})})}},17889:function(e,s,a){"use strict";a.r(s);var r=a(74165),n=a(15861),i=a(29439),t=a(29867),l=a(25644),o=a(44544),c=a(36037),d=a(27211),m=a(54404),h=a(76716),u=a(92834);s.default=function(){var e=(0,t.useState)({}),s=(0,i.Z)(e,2),a=(s[0],s[1]),x=(0,t.useState)([]),j=(0,i.Z)(x,2),f=j[0],p=j[1],g=(0,t.useState)(),v=(0,i.Z)(g,2),N=v[0],b=(v[1],(0,t.useState)(!1)),w=(0,i.Z)(b,2),y=w[0];w[1];(0,t.useEffect)((function(){return k(),function(){}}),[]);var k=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,c.A$)().then((function(e){if(200==e.request.status){a(e);for(var s=e.data.listOfUserQueryDetailsResponseDto,r=[],n=0;n<s.length;n++){var i=s[n];r.push(i)}console.log(r),p(s)}else alert("error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"main-wrapper",children:[(0,u.jsx)(m.Z,{}),(0,u.jsx)(h.Z,{}),(0,u.jsxs)("div",{className:"page-wrapper",children:[(0,u.jsxs)("div",{className:"content container-fluid",children:[(0,u.jsx)("div",{className:"page-header",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-sm-12",children:(0,u.jsxs)("div",{className:"page-sub-header",children:[(0,u.jsx)("h3",{className:"page-title",children:"Ticket History "}),(0,u.jsxs)("ul",{className:"breadcrumb",children:[(0,u.jsx)("li",{className:"breadcrumb-item",children:(0,u.jsx)(l.rU,{to:"/students",children:"Dashboard"})}),(0,u.jsx)("li",{className:"breadcrumb-item active",children:"Ticket History"})]})]})})})}),(0,u.jsx)("div",{className:"card",children:(0,u.jsx)("div",{className:"card-body",children:(0,u.jsx)("div",{className:"row col-12",children:(0,u.jsx)("div",{className:"col-xl-12 d-flex",children:(0,u.jsxs)("div",{className:"card flex-fill student-space comman-shadow",children:[y&&(0,u.jsx)(d.Z,{data:N}),(0,u.jsx)("div",{className:"card-body",children:(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table border-0 star-student  table-center mb-0",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:"",children:" Query Info"}),(0,u.jsx)("th",{className:"",children:" Query"}),(0,u.jsx)("th",{className:"",children:"Admin Comments"})]})}),(0,u.jsx)("tbody",{children:f.map((function(e,s){return(0,u.jsxs)("tr",{className:"tablerow".concat(s%2===0?"event":"odd"),children:[(0,u.jsxs)("td",{className:"",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h6",{children:"Ticket Id"}),e.ticketId]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h6",{children:"Received On"}),e.receivedOn]}),(0,u.jsx)("div",{className:"Completed"===e.status?"badge badge-success":"badge badge-danger",children:e.status})]}),(0,u.jsx)("td",{className:"",style:{width:"4rem !important",whiteSpace:"break-spaces"},children:e.query}),(0,u.jsxs)("td",{className:"",style:{width:"4rem !important",whiteSpace:"break-spaces"},children:[(0,u.jsx)("div",{children:e.query&&e.comments}),(0,u.jsxs)("div",{className:"buttn",children:[(0,u.jsx)("div",{className:"badgedat"}),(0,u.jsxs)("div",{className:"badgedat",children:[(0,u.jsx)("button",{disabled:"Completed"==e.status,className:"btn btn-success",children:(0,u.jsx)(l.rU,{className:"text-white",to:"/writetous",children:"Write Reply"})}),(0,u.jsx)("button",{className:"badge bg-success-dark",disabled:"Completed"==e.status,children:"Cancel"})]})]})]})]},s)}))})]})})})]})})})})})]}),(0,u.jsx)(o.Z,{})]})]})})}},27211:function(e,s,a){"use strict";a.d(s,{Z:function(){return l}});var r=a(29439),n=a(29867),i=a(21516),t=a(92834);var l=function(e){var s,a=(0,n.useState)(!0),l=(0,r.Z)(a,2),o=l[0],c=l[1],d=(0,n.useState)(e),m=(0,r.Z)(d,2),h=m[0];return m[1],(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{size:"lg",show:o,onHide:function(){return c(!1)},"aria-labelledby":"example-modal-sizes-title-lg",children:[(0,t.jsx)(i.Z.Header,{closeButton:!0,children:(0,t.jsx)(i.Z.Title,{id:"example-modal-sizes-title-lg",children:"View Comment"})}),(0,t.jsxs)(i.Z.Body,{children:[console.log(h),null!==(s=h.data)&&void 0!==s&&s.data?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("p",{children:"No data"})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Company"}),(0,t.jsx)("th",{children:"Contact"}),(0,t.jsx)("th",{children:"Country"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Alfreds Futterkiste"}),(0,t.jsx)("td",{children:"Maria Anders"}),(0,t.jsx)("td",{children:"Germany"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Centro comercial Moctezuma"}),(0,t.jsx)("td",{children:"Francisco Chang"}),(0,t.jsx)("td",{children:"Mexico"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Ernst Handel"}),(0,t.jsx)("td",{children:"Roland Mendel"}),(0,t.jsx)("td",{children:"Austria"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Island Trading"}),(0,t.jsx)("td",{children:"Helen Bennett"}),(0,t.jsx)("td",{children:"UK"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Laughing Bacchus Winecellars"}),(0,t.jsx)("td",{children:"Yoshi Tannamuri"}),(0,t.jsx)("td",{children:"Canada"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Magazzini Alimentari Riuniti"}),(0,t.jsx)("td",{children:"Giovanni Rovelli"}),(0,t.jsx)("td",{children:"Italy"})]})]})})]})]})})}},24758:function(e,s){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],s=0;s<arguments.length;s++){var a=arguments[s];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var t=n.apply(null,a);t&&e.push(t)}}else if("object"===i){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)r.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(s,[]))||(e.exports=a)}()},45987:function(e,s,a){"use strict";a.d(s,{Z:function(){return n}});var r=a(63366);function n(e,s){if(null==e)return{};var a,n,i=(0,r.Z)(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}},63366:function(e,s,a){"use strict";function r(e,s){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],s.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(s,{Z:function(){return r}})}}]);
//# sourceMappingURL=6330.1b94cbb6.chunk.js.map