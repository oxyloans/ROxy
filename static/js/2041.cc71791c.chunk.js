"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[2041],{42081:function(e,a,s){var t=s(29439),l=s(29867),n=s(84670),r=s(25644),i=s(28285),o=s(92834),c=function(e){var a=(0,l.useState)(""),s=(0,t.Z)(a,2),c=s[0],d=s[1],u=(0,l.useState)(""),m=(0,t.Z)(u,2),h=(m[0],m[1],(0,l.useState)("")),x=(0,t.Z)(h,2),j=(x[0],x[1],function(e){d(e)});(0,l.useEffect)((function(){function e(e){if(e.stopPropagation(),document.body.classList.contains("mini-sidebar")&&null!==document.querySelector("#toggle_btn").offsetParent)return e.target.closest(".sidebar")?(document.body.classList.add("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="block"}))):(document.body.classList.remove("expand-menu"),document.querySelectorAll(".subdrop + ul").forEach((function(e){return e.style.display="none"}))),!1}return document.addEventListener("mouseover",e),function(){document.removeEventListener("mouseover",e)}}),[]),(0,l.useEffect)((function(){$(document).on("change",".sidebar-type-four input",(function(){$(this).is(":checked")?($(".sidebar").addClass("sidebar-eight"),$(".sidebar-menu").addClass("sidebar-menu-eight"),$(".menu-title").addClass("menu-title-eight"),$(".header").addClass("header-eight"),$(".header-left-two").addClass("header-left-eight"),$(".user-menu").addClass("user-menu-eight"),$(".dropdown-toggle").addClass("dropdown-toggle-eight"),$(".white-logo").addClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").addClass("hide-logo"),$(".header-two .header-left-two .logo:not(.logo-small)").removeClass("hide-logo"),$(".header-two .header-left-two .dark-logo").removeClass("show-logo")):($(".sidebar").removeClass("sidebar-eight"),$(".sidebar-menu").removeClass("sidebar-menu-eight"),$(".menu-title").removeClass("menu-title-eight"),$(".header").removeClass("header-eight"),$(".header-left-two").removeClass("header-left-eight"),$(".user-menu").removeClass("user-menu-eight"),$(".dropdown-toggle").removeClass("dropdown-toggle-eight"),$(".white-logo").removeClass("show-logo"),$(".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)").removeClass("hide-logo"))}))}),[]);var g=(0,n.TH)().pathname;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"sidebar",id:"sidebar",children:(0,o.jsx)(i.$B,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,autoHeight:!0,autoHeightMin:0,autoHeightMax:"95vh",thumbSize:300,universal:!1,hideTracksWhenNotNeeded:!0,children:(0,o.jsx)("div",{className:"sidebar-inner slimscroll",children:(0,o.jsx)("div",{id:"sidebar-menu",className:"sidebar-menu",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"".concat("/dashboard"===g?"active":""),children:(0,o.jsxs)(r.rU,{to:"/dashboard",children:[(0,o.jsx)("i",{className:"fa-solid fa-gauge"})," ",(0,o.jsx)("span",{children:" Dashboard "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/dashboardTransactions"===g?"active":""),children:(0,o.jsxs)(r.rU,{to:"/dashboardTransactions",children:[(0,o.jsx)("i",{className:"fa-solid fa-right-to-bracket"}),(0,o.jsx)("span",{children:" Transactions "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsx)("li",{className:"".concat("/profile"===g?"active":""),children:(0,o.jsxs)(r.rU,{to:"/profile",children:[(0,o.jsx)("i",{className:"fa-solid fa-user"}),(0,o.jsx)("span",{children:" Profile "}),(0,o.jsx)("span",{className:"menu-arrow"})]})}),(0,o.jsxs)("li",{className:"".concat("/loadwaletThroughQr"===g||"/loadwalletThroughVirtualAccount"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"LoadYourWallet"==c?"subdrop":"",onClick:function(){return j("LoadYourWallet"==c?"":"LoadYourWallet")},children:[(0,o.jsx)("i",{className:"fa-solid fa-qrcode"}),(0,o.jsx)("span",{children:" Load Your Wallet "}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"LoadYourWallet"==c?(0,o.jsxs)("ul",{style:{display:"LoadYourWallet"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/loadwaletThroughQr",className:"".concat("/loadwaletThroughQr"===g?"active":""),children:"QR Scanner"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/loadwalletThroughVirtualAccount",className:"".concat("/loadwalletThroughVirtualAccount"===g?"active":""),children:"Virtual Account"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/regularRunningDeal"===g||"/regularEscrowDeals"===g||"/regularPersonalDeal"===g||"/viewCurrentDayDeals"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"Subjects"==c?"subdrop":"",onClick:function(){return j("Subjects"==c?"":"Subjects")},children:[(0,o.jsx)("i",{className:"fa-solid fa-chart-simple"}),(0,o.jsx)("span",{children:" Ongoing Deals"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"Subjects"==c?(0,o.jsxs)("ul",{style:{display:"Subjects"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/viewCurrentDayDeals",className:"".concat("/viewCurrentDayDeals"===g?"active":""),children:"Today Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/regularRunningDeal",className:"".concat("/regularRunningDeal"===g?"active":""),children:"Running Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/regularEscrowDeals",className:"".concat("/regularEscrowDeals"===g?"active":""),children:"Escrow Deals"})}),(0,o.jsx)("li",{})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/myinterestEarning"===g||"/myhighvalueDeals"===g||"/myRunningDelas"===g||"/myholdamount"===g||"/earningCertificate"===g||"/loansStatement"===g||"/myclosedDeals"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"Invoices"==c?"subdrop":"",onClick:function(){return j("Invoices"==c?"":"Invoices")},children:[(0,o.jsx)("i",{className:"fas fa-clipboard"})," ",(0,o.jsx)("span",{children:" My Deals"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"Invoices"==c?(0,o.jsxs)("ul",{style:{display:"Invoices"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myRunningDelas",className:"".concat("/myRunningDelas"===g?"active":""),children:"Running Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myclosedDeals",className:"".concat("/myclosedDeals"===g?"active":""),children:"Closed Delas"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myholdamount",className:"".concat("/myholdamount"===g?"active":""),children:"Hold Amount"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myinterestEarning",className:"".concat("/myinterestEarning"===g?"active":""),children:"Interest Earnings"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myhighvalueDeals",className:"".concat("/myhighvalueDeals"===g?"active":""),children:"High Value Deals"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/earningCertificate",className:"".concat("/earningCertificate"===g?"active":""),children:"Financial Reports"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/withdrawdealfromDeal"===g||"/withdrawalFromWallet"===g||"/MywithdrawalHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"WithdrawFunds"==c?"subdrop":"",onClick:function(){return j("WithdrawFunds"==c?"":"WithdrawFunds")},children:[(0,o.jsx)("i",{className:"fa-solid fa-wallet"}),(0,o.jsx)("span",{children:"Withdraw Funds"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"WithdrawFunds"==c?(0,o.jsxs)("ul",{style:{display:"WithdrawFunds"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/withdrawdealfromDeal",className:"".concat("/withdrawdealfromDeal"===g?"active":""),children:"Raise a request"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/MywithdrawalHistory",className:"".concat("/MywithdrawalHistory"===g?"active":""),children:"My Withdrawal History"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/mytransactions"===g||"/membershipHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"WalletTrans"==c?"subdrop":"",onClick:function(){return j("WalletTrans"==c?"":"WalletTrans")},children:[(0,o.jsx)("i",{className:"fa-solid fa-suitcase"}),(0,o.jsx)("span",{children:"Wallet Transactions"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"WalletTrans"==c?(0,o.jsxs)("ul",{style:{display:"WalletTrans"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/mytransactions",className:"".concat("/mytransactions"===g?"active":""),children:"My Transactions"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/membershipHistory",className:"".concat("/membershipHistory"===g?"active":""),children:"Membership History"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/WalletToWallet"===g||"/walletToWalletHistory"===g||"/walletToWalletTransactionHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"WalletToWallet"==c?"subdrop":"",onClick:function(){return j("WalletToWallet"==c?"":"WalletToWallet")},children:[(0,o.jsx)("i",{className:"fa-solid fa-business-time"}),(0,o.jsx)("span",{children:"Wallet to Wallet"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"WalletToWallet"==c?(0,o.jsxs)("ul",{style:{display:"WalletToWallet"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/WalletToWallet",className:"".concat("/WalletToWallet"===g?"active":""),children:"Raise a request"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/walletToWalletTransactionHistory",className:"".concat("/walletToWalletTransactionHistory"===g?"active":""),children:"View history"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/walletToWalletHistory",className:"".concat("/walletToWalletHistory"===g?"active":""),children:"Debit history"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/referaFriend"===g||"/myreferalStatus"===g||"/myreferalStatus"===g||"/mycontacts"===g||"/myEarnings"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"MyNetwork"==c?"subdrop":"",onClick:function(){return j("MyNetwork"==c?"":"MyNetwork")},children:[(0,o.jsx)("i",{className:"fa-solid fa-network-wired"}),(0,o.jsx)("span",{children:" My Network"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"MyNetwork"==c?(0,o.jsxs)("ul",{style:{display:"MyNetwork"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/referaFriend",className:"".concat("/referaFriend"===g?"active":""),children:"Refer a Friend"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myreferalStatus",className:"".concat("/myreferalStatus"===g?"active":""),children:"Referral Status"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/mycontacts",className:"".concat("/mycontacts"===g?"active":""),children:"My Contacts"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/myEarnings",className:"".concat("/myEarnings"===g?"active":""),children:"My Earning"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/writetous"===g||"/emicalculator"===g||"/ticketHistory"===g?"active submenu":"submenu"),children:[(0,o.jsxs)(r.rU,{to:"#",className:"HelpDesk"==c?"subdrop":"",onClick:function(){return j("HelpDesk"==c?"":"HelpDesk")},children:[(0,o.jsx)("i",{className:"fa-solid fa-handshake-angle"}),(0,o.jsx)("span",{children:" Help Desk"})," ",(0,o.jsx)("span",{className:"menu-arrow"})]}),"HelpDesk"==c?(0,o.jsxs)("ul",{style:{display:"HelpDesk"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/writetous",className:"".concat("/writetous"===g?"active":""),children:"Write to us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/ticketHistory",className:"".concat("/ticketHistory"===g?"active":""),children:"View Ticket History"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/emicalculator",className:"".concat("/emicalculator"===g?"active":""),children:"EMI Calculator"})})]}):""]}),(0,o.jsxs)("li",{className:"".concat("/configautoInvest"===g||"/autoInvestHistory"===g?"active submenu":"submenu"),style:{display:"none"},children:[(0,o.jsxs)(r.rU,{to:"#",className:"AutoInvest"==c?"subdrop":"",onClick:function(){return j("AutoInvest"==c?"":"AutoInvest")},children:[(0,o.jsx)("i",{className:"fas fa-building"})," ",(0,o.jsx)("span",{children:" Auto Invest"}),(0,o.jsx)("span",{className:"menu-arrow"})]}),"AutoInvest"==c?(0,o.jsxs)("ul",{style:{display:"AutoInvest"==c?"block":"none"},children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/configautoInvest",className:"".concat("/configautoInvest"===g?"active":""),children:"Config Auto Invest"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/autoInvestHistory",className:"".concat("/autoInvestHistory"===g?"active":""),children:"Auto Invest History"})})]}):""]}),(0,o.jsx)("li",{className:"".concat("/"===g?"active":""),children:(0,o.jsxs)(r.rU,{to:"/",onClick:function(){localStorage.clear(),sessionStorage.clear()},children:[(0,o.jsx)("i",{className:"fa-solid fa-right-from-bracket"}),(0,o.jsx)("span",{children:"Sign Out"})]})})]})})})})})})};a.Z=l.memo(c)},72041:function(e,a,s){s.r(a),s.d(a,{default:function(){return N}});var t=s(74165),l=s(15861),n=s(1413),r=s(29439),i=s(29867),o=s(34069),c=s(42081),d=s(56780),u=s(25644),m=s(14711),h=s(36037),x=s(21516),j=s(92834),g=function(e){var a=e.data,s=[];""!==a&&a.lenderReturns.map((function(e,a){return s.push({key:a,so:a+1,date:e.returnedDate,amount:e.amountReturned}),null}));return(0,j.jsx)(d.Z,{columns:[{title:"s#",dataIndex:"so",sorter:function(e,a){return e.no.length-a.no.length}},{title:"Date",dataIndex:"date",sorter:function(e,a){return e.date.localeCompare(a.date)}},{title:"Amount",dataIndex:"amount",sorter:function(e,a){return e.amount.length-a.amount.length}}],dataSource:s,pagination:!1})};var f=function(e){var a=e.data,s=e.open,t=e.hidingStatement;console.log(a);var l=(0,i.useState)(s),n=(0,r.Z)(l,2),o=n[0],c=n[1],d=(0,i.useState)(a.downloadStatement),u=(0,r.Z)(d,2),m=u[0],h=(u[1],(0,i.useState)(a.dealName)),f=(0,r.Z)(h,2),p=f[0];return f[1],(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(x.Z,{size:"lg",show:o,onHide:function(){c(!o),t()},"aria-labelledby":"example-modal-sizes-title-lg",children:[(0,j.jsx)(x.Z.Header,{closeButton:!0,children:(0,j.jsxs)(x.Z.Title,{id:"example-modal-sizes-title-lg",children:[(0,j.jsx)("a",{href:m,className:"pull-right mx-2",children:(0,j.jsx)("i",{className:"fa-solid fa-download",typeof:"download"})}),"",p," ",""," Statement"]})}),(0,j.jsx)(x.Z.Body,{children:(0,j.jsx)(g,{data:a})})]})})},p=s(44790),N=function(){var e=(0,i.useState)({apiData:"",hasdata:!1,loading:!0,pageNo:1,pageSize:5,defaultPageSize:5,statement:"",model:!1,modelStatement:!1}),a=(0,r.Z)(e,2),s=a[0],x=a[1],g=function(){var e=(0,l.Z)((0,t.Z)().mark((function e(a,l){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,h.nx)(a,l).then((function(e){x((0,n.Z)((0,n.Z)({},s),{},{statement:e.data,modelStatement:!0}))}));case 2:case"end":return e.stop()}}),e)})));return function(a,s){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){return(0,h.x0)(s.pageNo,s.pageSize).then((function(e){200==e.request.status&&x((0,n.Z)((0,n.Z)({},s),{},{apiData:e.data,loading:!1,hasdata:0!=e.data.lenderReturnsResponseDto.length}))})),function(){}}),[s.pageNo,s.pageSize]);var N=[];""!=s.apiData&&s.apiData.lenderReturnsResponseDto.map((function(e){N.push({key:Math.random(),DealName:e.dealName,Participated:"INR "+e.totalPaticipation,ROI:e.rateOfInterest+" % PM",Dealstart:e.fundsAcceptanceStartDate,DealClosed:e.dealClosedToLender,Statement:(0,j.jsxs)("button",{type:"submit",className:"btn  w-70 btn-primary btn-xs",onClick:function(){return g(e.dealId,e.dealName)},children:[(0,j.jsx)("i",{className:"fa-regular fa-eye"})," Statement"]})})}));var v=[{title:"Deal Name",dataIndex:"DealName",sorter:function(e,a){return e.DealName.length-a.DealName.length}},{title:"Participated ",dataIndex:"Participated",sorter:function(e,a){return e.Participated.length-a.Participated.length}},{title:"ROI",dataIndex:"ROI",sorter:function(e,a){return e.ROI.length-a.ROI.length}},{title:"Start Date",dataIndex:"Dealstart",sorter:function(e,a){return new Date(e.Dealstart)-new Date(a.Dealstart)}},{title:"Closed Date",dataIndex:"DealClosed",sorter:function(e,a){return new Date(e.DealClosed)-new Date(a.DealClosed)}},{title:"Statement",dataIndex:"Statement"}];return(0,j.jsx)("div",{children:(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"main-wrapper",children:[(0,j.jsx)(o.Z,{}),(0,j.jsx)(c.Z,{}),(0,j.jsx)("div",{className:"page-wrapper",children:(0,j.jsxs)("div",{className:"content container-fluid",children:[(0,j.jsx)("div",{className:"page-header",children:(0,j.jsx)("div",{className:"row align-items-center",children:(0,j.jsxs)("div",{className:"col",children:[(0,j.jsx)("h3",{className:"page-title",children:"Participation Closed deals"}),(0,j.jsxs)("ul",{className:"breadcrumb",children:[(0,j.jsx)("li",{className:"breadcrumb-item",children:(0,j.jsx)(u.rU,{to:"/dashboard",children:"Dashboard"})}),(0,j.jsx)("li",{className:"breadcrumb-item active",children:"Closed deals"})]})]})})}),(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("div",{className:"col-sm-12",children:(0,j.jsx)("div",{className:"card card-table",children:(0,j.jsxs)("div",{className:"card-body",children:[(0,j.jsx)("div",{className:"page-header",children:(0,j.jsxs)("div",{className:"row align-items-center",children:[(0,j.jsx)("div",{className:"col"}),(0,j.jsxs)("div",{className:"col-auto text-end float-end ms-auto download-grp",children:[(0,j.jsxs)(u.rU,{to:"#",className:"btn btn-outline-primary me-2",onClick:function(){(0,p.jc)("CLOSED")},children:[(0,j.jsx)("i",{className:"fas fa-download"})," ","","Download"]}),s.modelStatement&&(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(f,{data:s.statement,open:s.modelStatement,hidingStatement:function(){x((0,n.Z)((0,n.Z)({},s),{},{modelStatement:!1}))}})})]})]})}),(0,j.jsx)("div",{className:"table-responsive",children:(0,j.jsx)(d.Z,{className:"table border-0 star-student table-center mb-0",pagination:{total:s.apiData.countValue,defaultPageSize:s.defaultPageSize,showTotal:function(e,a){return"Showing ".concat(a[0]," to ").concat(a[1]," of ").concat(e," entries")},showSizeChanger:!0,onShowSizeChange:m.C,itemRender:m.a,position:["topRight"]},columns:v,dataSource:s.hasdata?N:[],expandable:!0,loading:s.loading,onChange:function(e){x((0,n.Z)((0,n.Z)({},s),{},{defaultPageSize:e.pageSize,pageNo:e.current,pageSize:e.pageSize}))}})})]})})})})]})})]})})})}}}]);
//# sourceMappingURL=2041.cc71791c.chunk.js.map