"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[1556],{34069:function(e,a,s){var l=s(1413),n=s(29439),t=s(29867),i=s(25644),r=s(36037),o=(s(72318),s(73094)),c=s(9476),d=s(5431),m=s(44790),u=s(37086),h=s(92834),x=function(e){var a,s,x,j=(0,o.I0)(),g=(0,o.v9)((function(e){return e.counter.userProfile})),N=(0,t.useState)({profileData:""}),p=(0,n.Z)(N,2),v=p[0],f=p[1];return(0,t.useEffect)((function(){var e=function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()},a=document.querySelector(".win-maximize");return a.addEventListener("click",e),function(){a.removeEventListener("click",e)}}),[]),(0,t.useEffect)((function(){j((0,c.rQ)()),j((0,d.py)()),(0,r.M_)().then((function(e){200==e.request.status?(localStorage.setItem("userType",e.data.userDisplayId),f((0,l.Z)((0,l.Z)({},v),{},{profileData:e}))):"200"!=e.response.data.errorCode&&(0,m.WY)(e.response.data.errorMessage,"/")}))}),[]),(0,t.useMemo)((function(){(0,r.Ad)()&&(0,m.WY)("Your session is expiring in 5 minutes.","/dashboard")}),[]),(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"header",children:[(0,h.jsxs)("div",{className:"header-left",children:[(0,h.jsx)(i.rU,{to:"/dashboard",className:"logo",children:(0,h.jsx)("img",{src:u.b9,alt:"Logo"})}),(0,h.jsx)(i.rU,{to:"/dashboard",className:"logo logo-small",children:(0,h.jsx)("img",{src:u.h7,alt:"Logo",width:30,height:30})})]}),(0,h.jsx)("div",{className:"menu-toggle",children:(0,h.jsx)(i.rU,{to:"#",id:"toggle_btn",onClick:function(){document.body.classList.toggle("mini-sidebar")},children:(0,h.jsx)("i",{className:"fas fa-bars"})})}),(0,h.jsx)("div",{className:"top-nav-search",style:{display:"none"},children:(0,h.jsxs)("form",{children:[(0,h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search here"}),(0,h.jsx)("button",{className:"btn",type:"submit",children:(0,h.jsx)("i",{className:"fas fa-search"})})]})}),(0,h.jsx)(i.rU,{to:"#",className:"mobile_btn",id:"mobile_btn",onClick:function(){document.body.classList.toggle("slide-nav")},children:(0,h.jsx)("i",{className:"fas fa-bars"})}),(0,h.jsxs)("ul",{className:"nav user-menu",children:[(0,h.jsxs)("li",{className:"nav-item dropdown noti-dropdown me-2 d-none",children:[(0,h.jsx)(i.rU,{to:"#",className:"dropdown-toggle nav-link header-nav-list","data-bs-toggle":"dropdown",children:(0,h.jsx)("img",{src:u.Tq,alt:""})}),(0,h.jsxs)("div",{className:"dropdown-menu notifications",children:[(0,h.jsxs)("div",{className:"topnav-dropdown-header",children:[(0,h.jsx)("span",{className:"notification-title",children:"Notifications"}),(0,h.jsx)(i.rU,{to:"#",className:"clear-noti",children:"Clear All"})]}),(0,h.jsx)("div",{className:"noti-content",children:(0,h.jsxs)("ul",{className:"notification-list",children:[(0,h.jsx)("li",{className:"notification-message",children:(0,h.jsx)(i.rU,{to:"#",children:(0,h.jsxs)("div",{className:"media d-flex",children:[(0,h.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,h.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:u.xd})}),(0,h.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,h.jsxs)("p",{className:"noti-details",children:[(0,h.jsx)("span",{className:"noti-title",children:"Carlson Tech"})," has approved"," ",(0,h.jsx)("span",{className:"noti-title",children:"your estimate"})]}),(0,h.jsx)("p",{className:"noti-time",children:(0,h.jsx)("span",{className:"notification-time",children:"4 mins ago"})})]})]})})}),(0,h.jsx)("li",{className:"notification-message",children:(0,h.jsx)(i.rU,{to:"#",children:(0,h.jsxs)("div",{className:"media d-flex",children:[(0,h.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,h.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:u.kj})}),(0,h.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,h.jsxs)("p",{className:"noti-details",children:[(0,h.jsx)("span",{className:"noti-title",children:"International Software Inc"})," ","has sent you a invoice in the amount of"," ",(0,h.jsx)("span",{className:"noti-title",children:"$218"})]}),(0,h.jsx)("p",{className:"noti-time",children:(0,h.jsx)("span",{className:"notification-time",children:"6 mins ago"})})]})]})})}),(0,h.jsx)("li",{className:"notification-message",children:(0,h.jsx)(i.rU,{to:"#",children:(0,h.jsxs)("div",{className:"media d-flex",children:[(0,h.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,h.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:u.op})}),(0,h.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,h.jsxs)("p",{className:"noti-details",children:[(0,h.jsx)("span",{className:"noti-title",children:"John Hendry"})," sent a cancellation request"," ",(0,h.jsx)("span",{className:"noti-title",children:"Apple iPhone XR"})]}),(0,h.jsx)("p",{className:"noti-time",children:(0,h.jsx)("span",{className:"notification-time",children:"8 mins ago"})})]})]})})}),(0,h.jsx)("li",{className:"notification-message",children:(0,h.jsx)(i.rU,{to:"#",children:(0,h.jsxs)("div",{className:"media d-flex",children:[(0,h.jsx)("span",{className:"avatar avatar-sm flex-shrink-0",children:(0,h.jsx)("img",{className:"avatar-img rounded-circle",alt:"User Image",src:u.U2})}),(0,h.jsxs)("div",{className:"media-body flex-grow-1",children:[(0,h.jsxs)("p",{className:"noti-details",children:[(0,h.jsx)("span",{className:"noti-title",children:"Mercury Software Inc"})," ","added a new product"," ",(0,h.jsx)("span",{className:"noti-title",children:"Apple MacBook Pro"})]}),(0,h.jsx)("p",{className:"noti-time",children:(0,h.jsx)("span",{className:"notification-time",children:"12 mins ago"})})]})]})})})]})}),(0,h.jsx)("div",{className:"topnav-dropdown-footer",children:(0,h.jsx)(i.rU,{to:"#",children:"View all Notifications"})})]})]}),(0,h.jsx)("li",{className:"nav-item  has-arrow dropdown-heads ",children:(0,h.jsx)(i.rU,{to:"#",className:"win-maximize maximize-icon",children:(0,h.jsx)("img",{src:u.tm,alt:""})})}),(0,h.jsxs)("li",{className:"nav-item dropdown has-arrow new-user-menus",children:[(0,h.jsx)(i.rU,{to:"#",className:"dropdown-toggle nav-link","data-bs-toggle":"dropdown",children:(0,h.jsxs)("span",{className:"user-img",children:[(0,h.jsx)("img",{className:"rounded-circle",src:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png",width:31,alt:"Ryan Taylor"}),(0,h.jsx)("div",{className:"user-text text-wrap",children:(0,h.jsxs)("h6",{children:[0!=(null===g||void 0===g?void 0:g.length)&&null!==(a=(null===g||void 0===g?void 0:g.firstName.charAt(0).toUpperCase())+(null===g||void 0===g?void 0:g.firstName.slice(1).toLowerCase()))&&void 0!==a?a:"",0!=(null===g||void 0===g?void 0:g.length)&&null!==(s=localStorage.setItem("userName",(null===g||void 0===g?void 0:g.firstName.charAt(0).toUpperCase())+(null===g||void 0===g?void 0:g.firstName.slice(1).toLowerCase())))&&void 0!==s?s:""]})})]})}),(0,h.jsxs)("div",{className:"dropdown-menu",children:[(0,h.jsxs)("div",{className:"user-header",children:[(0,h.jsx)("div",{className:"avatar avatar-sm",children:(0,h.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png",alt:"User Image",className:"avatar-img rounded-circle"})}),(0,h.jsxs)("div",{className:"user-text",children:[(0,h.jsxs)("p",{className:"text-muted mb-0",children:["LR",0!==(null===g||void 0===g?void 0:g.length)?null!==(x=null===g||void 0===g?void 0:g.userId)&&void 0!==x?x:0:""]}),(0,h.jsx)("p",{className:"text-muted mb-0",children:0!==(null===g||void 0===g?void 0:g.length)?"OXYMARCH09"==(null===g||void 0===g?void 0:g.groupName)||"OxyPremiuimLenders"==(null===g||void 0===g?void 0:g.groupName)?"Oxy Founding":"NewLender":""}),(0,h.jsxs)("p",{className:"text-muted mb-0",children:["Wallet :",0!==(null===g||void 0===g?void 0:g.length)?(null===g||void 0===g?void 0:g.lenderWalletAmount)-(null===g||void 0===g?void 0:g.holdAmountInDealParticipation)-(null===g||void 0===g?void 0:g.equityAmount):""]})]})]}),(0,h.jsx)(i.rU,{className:"dropdown-item",to:"/profile",children:"My Profile"}),(0,h.jsx)(i.rU,{className:"dropdown-item",to:"/myRunningDelas",children:"My Deals"}),(0,h.jsx)(i.rU,{className:"dropdown-item",to:"/",onClick:function(){localStorage.clear(),sessionStorage.clear()},children:"Logout"})]})]})]})]})})};a.Z=t.memo(x)},14711:function(e,a,s){s.d(a,{C:function(){return i},a:function(){return t}});s(29867);var l=s(25644),n=s(92834);function t(e,a,s){return"prev"===a?(0,n.jsx)(l.rU,{to:"#",children:"\u2190"}):"next"===a?(0,n.jsx)(l.rU,{to:"#",children:"\u2192"}):s}function i(e,a){console.log(e,a)}},42081:function(e,a,s){var l=s(29439),n=s(29867),t=s(84670),i=s(25644),r=s(28285),o=s(92834),c=function(e){var a=(0,n.useState)(""),s=(0,l.Z)(a,2),c=s[0],d=s[1],m=(0,n.useState)(""),u=(0,l.Z)(m,2),h=(u[0],u[1],(0,n.useState)("")),x=(0,l.Z)(h,2),j=(x[0],x[1],function(e){d(e)});(0,n.useEffect)((function(){function e(e){if(e.stopPropagation(),document.body.classList.contains("mini-sidebar")&&null!==document.querySelector("#toggle_btn").offsetParent)return e.target.closest(".sidebar")?(document.body.classList.add("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="block"}))):(document.body.classList.remove("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="none"}))),!1}return document.addEventListener("mouseover",e),function(){document.removeEventListener("mouseover",e)}}),[]),(0,n.useEffect)((function(){$(document).on("change",".sidebar-type-four input",(function(){$(this).is(":checked")?($(".sidebar").addClass("sidebar-eight"),$(".sidebar-menu").addClass("sidebar-menu-eight"),$(".menu-title").addClass("menu-title-eight"),$(".header").addClass("header-eight"),$(".header-left-two").addClass("header-left-eight"),$(".user-menu").addClass("user-menu-eight"),$(".dropdown-toggle").addClass("dropdown-toggle-eight"),$(".white-logo").addClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").addClass("hide-logo"),$(".header-two .header-left-two .logo:not(.logo-small)").removeClass("hide-logo"),$(".header-two .header-left-two .dark-logo").removeClass("show-logo")):($(".sidebar").removeClass("sidebar-eight"),$(".sidebar-menu").removeClass("sidebar-menu-eight"),$(".menu-title").removeClass("menu-title-eight"),$(".header").removeClass("header-eight"),$(".header-left-two").removeClass("header-left-eight"),$(".user-menu").removeClass("user-menu-eight"),$(".dropdown-toggle").removeClass("dropdown-toggle-eight"),$(".white-logo").removeClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").removeClass("hide-logo"))}))}),[]);var g=(0,t.TH)().pathname;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"sidebar",id:"sidebar",children:(0,o.jsx)(r.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!0,autoHeightMin:0,autoHeightMax:"95vh",thumbSize:300,universal:!1,hideTracksWhenNotNeeded:!0,children:(0,o.jsx)("div",{className:"sidebar-inner slimscroll",children:(0,o.jsx)("div",{id:"sidebar-menu",className:"sidebar-menu",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"".concat("/dashboard"===g?"active":""),children:(0,o.jsxs)(i.rU,{to:"/dashboard",children:[(0,o.jsx)("i",{className:"fa-solid fa-gauge"})," ",(0,o.jsx)("span",{children:" Dashboard "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/dashboardTransactions"===g?"active":""),children:(0,o.jsxs)(i.rU,{to:"/dashboardTransactions",children:[(0,o.jsx)("i",{className:"fa-solid fa-right-to-bracket"}),(0,o.jsx)("span",{children:" Transactions "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/profile"===g?"active":""),children:(0,o.jsxs)(i.rU,{to:"/profile",children:[(0,o.jsx)("i",{className:"fa-solid fa-user"}),(0,o.jsx)("span",{children:" Profile "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsxs)("li",{className:"".concat("/loadwaletThroughQr"===g||"/loadwalletThroughVirtualAccount"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"LoadYourWallet"==c?"subdrop":"",onClick:function(){return j("LoadYourWallet"==c?"":"LoadYourWallet")},children:[(0,o.jsx)("i",{className:"fa-solid fa-qrcode"}),(0,o.jsx)("span",{children:" Load Your Wallet "}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"LoadYourWallet"==c?(0,o.jsxs)("ul",{style:{display:"LoadYourWallet"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/loadwaletThroughQr",className:"".concat("/loadwaletThroughQr"===g?"active":""),children:"QR Scanner"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/loadwalletThroughVirtualAccount",className:"".concat("/loadwalletThroughVirtualAccount"===g?"active":""),children:"Virtual Account"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/regularRunningDeal"===g||"/regularEscrowDeals"===g||"/regularPersonalDeal"===g||"/viewCurrentDayDeals"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"Subjects"==c?"subdrop":"",onClick:function(){return j("Subjects"==c?"":"Subjects")},children:[(0,o.jsx)("i",{className:"fa-solid fa-chart-simple"}),(0,o.jsx)("span",{children:" Ongoing Deals"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"Subjects"==c?(0,o.jsxs)("ul",{style:{display:"Subjects"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/viewCurrentDayDeals",className:"".concat("/viewCurrentDayDeals"===g?"active":""),children:"Today Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/regularRunningDeal",className:"".concat("/regularRunningDeal"===g?"active":""),children:"Running Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/regularEscrowDeals",className:"".concat("/regularEscrowDeals"===g?"active":""),children:"Escrow Deals"})}),(0,o.jsx)("li",{})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/myinterestEarning"===g||"/myhighvalueDeals"===g||"/myRunningDelas"===g||"/myholdamount"===g||"/earningCertificate"===g||"/loansStatement"===g||"/myclosedDeals"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"Invoices"==c?"subdrop":"",onClick:function(){return j("Invoices"==c?"":"Invoices")},children:[(0,o.jsx)("i",{className:"fas fa-clipboard"})," ",(0,o.jsx)("span",{children:" My Deals"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"Invoices"==c?(0,o.jsxs)("ul",{style:{display:"Invoices"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myRunningDelas",className:"".concat("/myRunningDelas"===g?"active":""),children:"Running Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myclosedDeals",className:"".concat("/myclosedDeals"===g?"active":""),children:"Closed Delas"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myholdamount",className:"".concat("/myholdamount"===g?"active":""),children:"Hold Amount"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myinterestEarning",className:"".concat("/myinterestEarning"===g?"active":""),children:"Interest Earnings"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myhighvalueDeals",className:"".concat("/myhighvalueDeals"===g?"active":""),children:"High Value Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/earningCertificate",className:"".concat("/earningCertificate"===g?"active":""),children:"Financial Reports"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/withdrawdealfromDeal"===g||"/withdrawalFromWallet"===g||"/MywithdrawalHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"WithdrawFunds"==c?"subdrop":"",onClick:function(){return j("WithdrawFunds"==c?"":"WithdrawFunds")},children:[(0,o.jsx)("i",{className:"fa-solid fa-wallet"}),(0,o.jsx)("span",{children:"Withdraw Funds"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"WithdrawFunds"==c?(0,o.jsxs)("ul",{style:{display:"WithdrawFunds"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/withdrawdealfromDeal",className:"".concat("/withdrawdealfromDeal"===g?"active":""),children:"Raise a request"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/MywithdrawalHistory",className:"".concat("/MywithdrawalHistory"===g?"active":""),children:"My Withdrawal History"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/mytransactions"===g||"/membershipHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"WalletTrans"==c?"subdrop":"",onClick:function(){return j("WalletTrans"==c?"":"WalletTrans")},children:[(0,o.jsx)("i",{className:"fa-solid fa-suitcase"}),(0,o.jsx)("span",{children:"Wallet Transactions"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"WalletTrans"==c?(0,o.jsxs)("ul",{style:{display:"WalletTrans"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/mytransactions",className:"".concat("/mytransactions"===g?"active":""),children:"My Transactions"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/membershipHistory",className:"".concat("/membershipHistory"===g?"active":""),children:"Membership History"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/WalletToWallet"===g||"/walletToWalletHistory"===g||"/walletToWalletTransactionHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"WalletToWallet"==c?"subdrop":"",onClick:function(){return j("WalletToWallet"==c?"":"WalletToWallet")},children:[(0,o.jsx)("i",{className:"fa-solid fa-business-time"}),(0,o.jsx)("span",{children:"Wallet to Wallet"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"WalletToWallet"==c?(0,o.jsxs)("ul",{style:{display:"WalletToWallet"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/WalletToWallet",className:"".concat("/WalletToWallet"===g?"active":""),children:"Raise a request"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/walletToWalletTransactionHistory",className:"".concat("/walletToWalletTransactionHistory"===g?"active":""),children:"View history"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/walletToWalletHistory",className:"".concat("/walletToWalletHistory"===g?"active":""),children:"Debit history"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/referaFriend"===g||"/myreferalStatus"===g||"/myreferalStatus"===g||"/mycontacts"===g||"/myEarnings"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"MyNetwork"==c?"subdrop":"",onClick:function(){return j("MyNetwork"==c?"":"MyNetwork")},children:[(0,o.jsx)("i",{className:"fa-solid fa-network-wired"}),(0,o.jsx)("span",{children:" My Network"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"MyNetwork"==c?(0,o.jsxs)("ul",{style:{display:"MyNetwork"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/referaFriend",className:"".concat("/referaFriend"===g?"active":""),children:"Refer a Friend"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myreferalStatus",className:"".concat("/myreferalStatus"===g?"active":""),children:"Referral Status"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/mycontacts",className:"".concat("/mycontacts"===g?"active":""),children:"My Contacts"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/myEarnings",className:"".concat("/myEarnings"===g?"active":""),children:"My Earning"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/writetous"===g||"/emicalculator"===g||"/ticketHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(i.rU,{to:"#",className:"HelpDesk"==c?"subdrop":"",onClick:function(){return j("HelpDesk"==c?"":"HelpDesk")},children:[(0,o.jsx)("i",{className:"fa-solid fa-handshake-angle"}),(0,o.jsx)("span",{children:" Help Desk"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"HelpDesk"==c?(0,o.jsxs)("ul",{style:{display:"HelpDesk"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/writetous",className:"".concat("/writetous"===g?"active":""),children:"Write to us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/ticketHistory",className:"".concat("/ticketHistory"===g?"active":""),children:"View Ticket History"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/emicalculator",className:"".concat("/emicalculator"===g?"active":""),children:"EMI Calculator"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/configautoInvest"===g||"/autoInvestHistory"===g?"active submenu":"submenu"),style:{display:"none"},children:[(0,o.jsxs)(i.rU,{to:"#",className:"AutoInvest"==c?"subdrop":"",onClick:function(){return j("AutoInvest"==c?"":"AutoInvest")},children:[(0,o.jsx)("i",{className:"fas fa-building"})," ",(0,o.jsx)("span",{children:" Auto Invest"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"AutoInvest"==c?(0,o.jsxs)("ul",{style:{display:"AutoInvest"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/configautoInvest",className:"".concat("/configautoInvest"===g?"active":""),children:"Config Auto Invest"})}),(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/autoInvestHistory",className:"".concat("/autoInvestHistory"===g?"active":""),children:"Auto Invest History"})})]}):""]}),(0,o.jsx)("li",{className:"".concat("/"===g?"active":""),children:(0,o.jsxs)(i.rU,{to:"/",onClick:function(){localStorage.clear(),sessionStorage.clear()},children:[(0,o.jsx)("i",{className:"fa-solid fa-right-from-bracket"}),(0,o.jsx)("span",{children:"Sign Out"})]})})]})})})})})})};a.Z=n.memo(c)},21556:function(e,a,s){s.r(a);var l=s(1413),n=s(29439),t=s(29867),i=s(25644),r=s(34069),o=s(42081),c=s(56780),d=s(14711),m=s(36037),u=s(92834);a.default=function(){var e=(0,t.useState)({apiData:"",hasdata:!1,loading:!0,pageNo:1,pageSize:5,defaultPageSize:5,dealtype:"NORMAL"}),a=(0,n.Z)(e,2),s=a[0],h=a[1];(0,t.useEffect)((function(){return(0,m.$l)(s.pageNo,s.pageSize,s.dealtype).then((function(e){200==e.request.status&&h((0,l.Z)((0,l.Z)({},s),{},{apiData:e.data,loading:!1,hasdata:0!=e.data.count}))})),function(){}}),[s.pageNo,s.pageSize,s.dealtype]);var x=[];""!==s.apiData&&s.apiData.lenderPaticipatedResponseDto.forEach((function(e){var a="/withdrawdealFounds?dealId=".concat(e.dealId,"&currentAmount=").concat(e.currentValue,"&requestedAmount=").concat(e.requestedAmount,"&dealName=").concat(e.dealName,"&roi=").concat(e.rateOfInterest);x.push({key:Math.random(),DealName:e.dealName,DealType:e.dealType,ParticipatedAmount:e.paticipatedAmount,RoI:e.rateOfInterest+" % ",Duration:e.dealDuration+" M ",DealStatus:e.currentStatus,RequestedAmount:e.requestedAmount,action:(0,u.jsx)(i.rU,{to:a,children:(0,u.jsxs)("button",{type:"submit",className:"btn w-100 btn-outline-success",children:[(0,u.jsx)("i",{className:"fa-solid fa-business-time"})," Withdraw"]})})})}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"main-wrapper",children:[(0,u.jsx)(r.Z,{}),(0,u.jsx)(o.Z,{}),(0,u.jsx)("div",{className:"page-wrapper",children:(0,u.jsxs)("div",{className:"content container-fluid",children:[(0,u.jsx)("div",{className:"page-header",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col",children:[(0,u.jsxs)("h3",{className:"page-title",children:["Withdraw Funds from"," ","NORMAL"==s.dealtype?"":s.dealtype+" ","Deals"]}),(0,u.jsxs)("ul",{className:"breadcrumb",children:[(0,u.jsx)("li",{className:"breadcrumb-item",children:(0,u.jsx)(i.rU,{to:"/dashboard",children:"Dashboard"})}),(0,u.jsx)("li",{className:"breadcrumb-item active",children:"Withdraw Funds"})]})]})})}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-sm-12",children:(0,u.jsxs)("div",{className:"card",children:[(0,u.jsx)("div",{className:"card-header",children:(0,u.jsxs)("div",{className:"row col-12",children:[(0,u.jsx)("button",{className:"btn  btn-outline-success col-md-2 col-xs-6 col-lg-4 mx-lg-2 my-xs-2 my-md-1",children:(0,u.jsxs)(i.rU,{to:"/withdrawalFromWallet",children:[(0,u.jsx)("i",{className:"fa-solid fa-briefcase mx-2"}),"From wallet"]})}),(0,u.jsxs)("button",{onClick:function(){h((0,l.Z)((0,l.Z)({},s),{},{dealtype:"NORMAL"}))},className:"btn  btn-outline-info col-md-2 col-xs-6 col-lg-4 mx-lg-2 my-xs-2 my-md-1",children:[(0,u.jsx)("i",{className:"fa-solid fa-briefcase mx-2"})," From a normal deal"]}),(0,u.jsxs)("button",{className:"btn  btn-outline-warning col-md-2 col-xs-6 col-lg-3 mx-lg-2 my-xs-2 my-md-1",onClick:function(){h((0,l.Z)((0,l.Z)({},s),{},{dealtype:"ESCROW"}))},children:[(0,u.jsx)("i",{className:"fa-solid fa-briefcase mx-2"})," From an escrow\xa0deal"]})]})}),(0,u.jsx)("div",{className:"card-body",children:(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{className:"table-responsive table-responsive-md table-responsive-lg table-responsive-xs",pagination:{total:x.length,showTotal:function(e,a){return"Showing ".concat(a[0]," to ").concat(a[1]," of ").concat(e," entries")},position:["topRight"],showSizeChanger:!0,onShowSizeChange:d.C},columns:[{title:"Deal Name",dataIndex:"DealName",sorter:function(e,a){return e.DealName.length-a.DealName.length}},{title:"Participated",dataIndex:"ParticipatedAmount",sorter:function(e,a){return e.ParticipatedAmount-a.ParticipatedAmount}},{title:"ROI",dataIndex:"RoI",sorter:function(e,a){return e.RoI.length-a.RoI.length}},{title:"Duration",dataIndex:"Duration",sorter:function(e,a){return e.Duration.length-a.Duration.length}},{title:"Requested",dataIndex:"RequestedAmount",sorter:function(e,a){return e.RequestedAmount-a.RequestedAmount}},{title:"Action",dataIndex:"action"}],expandable:!0,dataSource:s.hasdata?x:[],loading:s.loading,onChange:function(e){h((0,l.Z)((0,l.Z)({},s),{},{defaultPageSize:e.pageSize,pageNo:e.current,pageSize:e.pageSize}))}})})})]})})})]})})]})})}}}]);
//# sourceMappingURL=1556.c6949fb3.chunk.js.map