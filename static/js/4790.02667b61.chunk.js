"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[4790],{44790:function(t,n,e){e.d(n,{AZ:function(){return A},Gg:function(){return k},Gj:function(){return B},JO:function(){return s},KG:function(){return g},WP:function(){return Y},WY:function(){return l},Zk:function(){return p},a:function(){return u},a4:function(){return S},fB:function(){return b},jc:function(){return T},js:function(){return d},pd:function(){return v},sc:function(){return C},t3:function(){return y},v6:function(){return m},xS:function(){return x},zs:function(){return f}});var o=e(74165),r=e(15861),i=(e(29867),e(41857)),c=e.n(i),a=e(36037),s=(e(38031),function(t){c().fire({type:"success",title:"Congratulation",text:t,confirmButtonClass:"btn btn-primary",buttonsStyling:!1})}),u=function(t){c().fire({title:"Success!",text:t,type:"info",confirmButtonClass:"btn btn-primary",buttonsStyling:!1})},l=function(t,n){c().fire({title:"Session Expiring",text:t,icon:"warning",showDenyButton:!0,confirmButtonText:"Sign Out",denyButtonText:"Continue",denyButtonColor:"#5c9b45"}).then((function(t){t.isConfirmed?window.location.href="".concat(n):t.isDenied&&((0,a.wY)(),c().fire("Session!","New session has Generated.","success"))}))},f=function(t,n){c().fire({title:"Membership reminder",html:"<p style={{marginBottom: '2px'}}> ".concat("NewLender"==n?" Membership reminder":"Your membership validity expired","   ").concat(null==t?"":t,".</p>"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Get Membership",cancelButtonText:"Skip"}).then((function(t){t.isConfirmed?window.location.href="/membership":t.dismiss===c().DismissReason.cancel&&localStorage.setItem("skip",!0)}))},d=function(t,n){c().fire({title:t,html:"<p style={{marginBottom: '2px'}}></p>",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"update",cancelButtonText:"Skip"}).then((function(t){t.isConfirmed?window.location.href=n:t.dismiss===c().DismissReason.cancel&&localStorage.setItem("dealmember",!0)}))},m=function(t,n){c().fire({title:t,html:"<p style={{marginBottom: '2px'}}></p>",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"update",cancelButtonText:"Skip"}).then((function(t){t.isConfirmed?window.location.href=n:t.dismiss===c().DismissReason.cancel&&localStorage.setItem("profileskip",!0)}))},p=function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=localStorage.getItem("choosenPayOutOption"),c().fire({title:"Please review the lending details!",html:"<p><strong> Lending Amount :- INR </strong>".concat(n.participatedAmount,"</p>\n           <p><strong> Deal Name : </strong>").concat(n.apidata.dealName,"</p>\n           <p><strong> Pay-out Method : </strong>").concat(e,"</p>"),icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ok!"}).then((function(t){if(t.isConfirmed)if("OPTIONAL"==n.apidata.feeStatusToParticipate)(0,a.dY)(n).then((function(t){200===t.request.status?c().fire({title:"Congratulations!",text:"We are reserving ".concat(n.participatedAmount," for ").concat(n.apidata.dealName,". "),icon:"success",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Cancel"}):c().fire({title:"Error!",text:"".concat(t.response.data.errorMessage),icon:"error",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Cancel"})}));else if("NewLender"==n.apidata.groupName){var e=(0,a.DI)(n),i=118*(1*parseInt(n.participatedAmount)/100)/100;e.then((function(t){200===t.request.status?c().fire({title:"Congratulations!",text:"We are reserving ".concat(n.participatedAmount," for ").concat(n.apidata.dealName," .please pay the INR ").concat(i,"\n\t\t\t\t\t    \t for the deal processing fee. "),icon:"success",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"Pay Fee"}).then(function(){var t=(0,r.Z)((0,o.Z)().mark((function t(e){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isConfirmed&&(0,a.aK)(i,n.urldealId).then((function(t){200===t.request.status?c().fire({title:"Congratulations!",text:"You have successfully paid the fee",icon:"success",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"}):c().fire({title:"Error!",text:"".concat(t.response.data.errorMessage),icon:"error",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})}));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()):c().fire({title:"Error!",text:"".concat(t.response.data.errorMessage),icon:"error",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})}))}else if(1==n.apidata.lenderValidityStatus&&"NewLender"!=n.apidata.groupName)w(n.urldealId,n);else if(0==n.apidata.lenderValidityStatus&&"NewLender"!=n.apidata.groupName){(0,a.dY)(n).then((function(t){console.log(t),200===t.request.status?c().fire({title:"Congratulations!",text:"We are reserving ".concat(n.participatedAmount," for ").concat(n.apidata.dealName,"."),icon:"success",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"}):c().fire({title:"Error!",text:"".concat(t.response.data.errorMessage),icon:"error",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})}))}}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h={monthly:1e3,quarterly:2900,halfyearly:5600,peryear:9800,lifetime:1e5,fiveyears:5e4,tenyears:9e4},w=function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n,e){var r,i,s,u,l;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),r=new Promise((function(t){setTimeout((function(){t({monthly:"One Month",quarterly:"Quarterly",halfyearly:"Half-Yearly",peryear:"One Year",lifetime:"Five Years",fiveyears:"Ten Years",tenyears:"Life Time"})}),1e3)})),t.next=4,c().fire({title:"Select Payment Method",width:"1000px",input:"radio",inputOptions:r,cancelButtonText:"Cancel",inputValidator:function(t){if(!t)return"You need to choose Payment Method!"}});case 4:i=t.sent,(s=i.value)&&(l=118*h[u=s]/100,c().fire({html:"You selected: ".concat(s,"  membership tenure and you have to pay the ").concat(l," to participate the deal "),showCancelButton:!0,confirmButtonText:"Pay & Participate",cancelButtonText:"Cancel"}).then((function(t){t.isConfirmed&&(0,a.F3)(l,u).then((function(t){200===t.request.status?(0,a.dY)(e).then((function(t){console.log(t),200===t.request.status?c().fire({title:"Congratulations!",text:"We are reserving ".concat(e.participatedAmount," for ").concat(e.apidata.dealName,". "),icon:"success",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"}):c().fire({title:"Error!",text:"".concat(t.response.data.errorMessage),icon:"error",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})})):c().fire({title:"Error!",text:"".concat(data.response.data.errorMessage),icon:"error",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})}))})));case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),B=function(t,n){c().fire({title:"error",text:t,icon:"warning",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"}).then((function(t){}))},C=function(t,n){c().fire("Principal Payout!",n,t),setTimeout((function(){window.location.reload()}),3e3)},x=function(t,n){c().fire({title:"error",text:t,icon:"error",showDenyButton:!0,showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0,confirmButtonText:"ok"})},g=function(t,n){c().fire({title:"Are you willing to proceed with the payment at this moment ?",showDenyButton:!0,confirmButtonText:"Pay Through wallet",showCancelButton:!0,cancelButtonText:"cancel",showConfirmButton:!0}).then((function(e){e.isConfirmed&&(0,a.Wl)(t,n).then((function(t){var n;200==t.status?(c().fire("Success!","Payment received successfully!","success"),setTimeout((function(){window.location.href="/dashboard"}),5e3)):(n=t.response.data.errorMessage,c().fire(n))}))}))},y=function(t,n,e){c().fire({title:"Are you sure?",text:"You want to ".concat("DOWNLOAD"==e?"Download the FY Statement":"Get FY Email Statement"," "),icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(o){o.isConfirmed&&(0,a.US)(t,n,e).then((function(t){200==t.request.status&&("DOWNLOAD"==e&&window.open(t.data.lenderProfit,"_blank"),c().fire("Success!","".concat("DOWNLOAD"==e?"Your file has been downloaded.":"We have sent FY Statement  to your Email"),"success"))}))}))},T=function(t){c().fire({title:"Are you sure?",text:"You want to download All  Closed Loan Information  ",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(n){n.isConfirmed&&(0,a.Q)(t).then((function(t){200==t.request.status?(window.open(t.data.closedDealsDownloadUrl,"_blank"),c().fire("Success!","Downloaded Successfully","success")):"200"!=t.response.data.errorCode&&c().fire("warning!","".concat(t.response.data.errorMessage),"warning")}))}))},S=function(){c().fire({title:"Are you sure?",text:"You want to download Transaction Information  ",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(t){t.isConfirmed&&(0,a.V2)().then((function(t){200==t.request.status?(window.open(t.data.downloadUrl,"_blank"),c().fire("Success!","Downloaded Successfully","success")):"200"!=t.response.data.errorCode&&c().fire("warning!","".concat(t.response.data.errorMessage),"warning")}))}))},v=function(t,n){c().fire({title:"Are you sure?",text:"You want to pay the INR ".concat(n," processing fee Amount"),icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(e){e.isConfirmed&&(0,a.Xh)(t,n).then((function(t){200==t.request.status?(c().fire("Success!","Sucessfully Paid The Pending Amount","success"),setTimeout((function(){window.location.reload()}),5e3)):"200"!=t.response.data.errorCode&&c().fire("warning!","".concat(t.response.data.errorMessage),"warning")}))}))},Y=function(t,n){c().fire({title:"Are you sure?",text:"You want to Cancel The Withdrawal Request",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(e){e.isConfirmed&&(0,a.EC)(t,n).then((function(t){200==t.request.status?c().fire("Success!","Sucessfully Cancel The Request","success"):"200"!=t.response.data.errorCode&&c().fire("warning!","".concat(t.response.data.errorMessage),"warning")}))}))},k=function(){var t=(0,r.Z)((0,o.Z)().mark((function t(n){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n),c().fire({title:"Are you sure?",text:"You want to Cancel The  Request",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes !"}).then((function(t){t.isConfirmed&&(console.log(n),(0,a.jz)(n).then((function(t){void 0==t||200==t.request.status||204==t.request.status?(c().fire("Success!","Sucessfully Cancel The Request","success"),setTimeout((function(){window.location.reload()}),3e3)):"200"!=t.response.data.errorCode&&c().fire("warning!","".concat(t.response.data.errorMessage),"warning")})))}));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),b=function(t,n){c().fire("".concat(t),"".concat(n),"success")},A=function(t,n){c().fire("".concat(t),"".concat(n),"warning")}},38031:function(t,n,e){e.d(n,{HC:function(){return c},MX:function(){return a},iq:function(){return i}});e(29867),e(56372);var o=e(25437),r=e.n(o),i=(e(76916),e(51773),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bottom-center";r().set("notifier","position",n),r().success(t)}),c=function(t){r().set("notifier","position","top-right"),r().error(t)},a=function(t){r().set("notifier","position","top-right"),r().error(t)}}}]);
//# sourceMappingURL=4790.02667b61.chunk.js.map