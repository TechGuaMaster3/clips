(function(t){function e(e){for(var r,c,s=e[0],l=e[1],o=e[2],p=0,g=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={list:0},i=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var u=l;i.push([1,"chunk-vendors"]),a()})({1:function(t,e,a){t.exports=a("4bec")},"12e5":function(t,e,a){"use strict";a("e976")},"402c":function(t,e,a){"use strict";var r=a("2b0e"),n=a("f309");r["a"].use(n["a"]),e["a"]=new n["a"]({})},"4bec":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("402c"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-container",{staticClass:"mb-4"},[a("v-tabs",{attrs:{"icons-and-text":"",centered:"",dark:"","background-color":"teal"}},[a("v-tabs-slider",{attrs:{color:"teal lighten-5"}}),a("v-tab",{attrs:{href:"#tab-1"}},[t._v(" Rules "),a("v-icon",[t._v("fas fa-book")])],1),a("v-tab",{attrs:{href:"#tab-2"}},[t._v(" Mod "),a("v-icon",[t._v("fab fa-twitch")])],1),a("v-tab",{attrs:{href:"./search.html"}},[t._v(" Search "),a("v-icon",[t._v("fab fa-algolia")])],1),a("v-tab-item",{attrs:{value:"tab-1"}},[a("v-card",{staticClass:"pa-2",attrs:{color:"teal lighten-5",flat:""}},[a("div",[t._v("[網頁說明] 本網頁將觀眾剪下的clips 透過twitch的API整合在一起 方便大家觀看")]),a("div",[t._v("[指令說明] 我們有個指令「!片+」讓各位可以投稿clip一起來壯大我們no精華區，只要輸入「!片+ [clips網址後半部的代碼]」就可以惹是不是很簡單ㄋ。例子: 「!片+ DistinctDeerMrDestructoid」")]),a("div",[t._v("[標題說明] 新系統會直接抓你在剪輯時命名的標題 讓你可以在Twitch Clips自由更換標題")]),a("div",[t._v("[刪除說明] 若輸入錯代碼ID 或標題格式不對 導致影片錯誤的話 請向MOD反應來將影片從表單移除")]),a("div",[t._v("[表單連結] "),a("a",{staticStyle:{cursor:"pointer"},attrs:{target:"_blank",href:"http://twitch.center/customapi/quote/list?token=96a4694e"}},[t._v(" http://twitch.center/customapi/quote/list?token=96a4694e")])])])],1),a("v-tab-item",{attrs:{value:"tab-2"}},[a("v-card",{staticClass:"pa-2",attrs:{color:"teal lighten-5",flat:""}},[a("v-card-text",[a("div",[t._v("表單內格式有問題的Clips: "+t._s(t.errorclips))]),a("div",[t._v("網頁開發: 克里斯")])])],1)],1)],1),a("v-layout",{staticClass:"cliparea",attrs:{wrap:""}},[t.loading?a("v-flex",{attrs:{xs12:""}},[a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"teal"}}),a("v-flex",{staticStyle:{"font-size":"2rem"},attrs:{xs12:""}},[t._v(" "+t._s(t.loadtext)+" ")])],1):t._e(),t.loading?t._e():t._l(Math.min(t.startcount+1,t.page_count),(function(e,r){return a("v-flex",{key:r,attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl2:""}},[a("v-card",{staticClass:"ma-1 clipcard",attrs:{color:"teal lighten-5"}},[a("a",{staticStyle:{position:"relative"},attrs:{href:t.clipList[t.clipList.length-(t.page-1)*t.page_count-e].url,target:"_blank"}},[a("v-img",{staticClass:"cardimage",attrs:{src:t.clipList[t.clipList.length-(t.page-1)*t.page_count-e].thumbnail_url,height:"200px"}})],1),a("v-card-text",{staticClass:"wb"},[a("a",{attrs:{href:t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["url"],target:"_blank"}},[a("v-flex",{attrs:{xs12:""}},[t._v(" "+t._s("["+t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["Num"]+".] ")+" "+t._s(t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["title"])+" ")])],1),""!=t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["creator_id"]?a("v-flex",{staticClass:"mt-2",staticStyle:{"font-size":"1.1rem"},attrs:{xs12:""}},[t._v(" 剪輯： "),a("a",{attrs:{href:t.userList[t.clipList[t.clipList.length-(t.page-1)*t.page_count-e].creator_id]["url"],target:"_blank"}},[t._v(" "+t._s(t.userList[t.clipList[t.clipList.length-(t.page-1)*t.page_count-e].creator_id]["display_name"])+" ")])]):t._e(),a("v-flex",{staticStyle:{"font-size":"1.1rem"},attrs:{xs12:""}},[t._v(" "+t._s(t._f("timetz")(t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["created_at"]))+" ")]),""!=t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["game_id"]?a("v-flex",{staticStyle:{"font-size":"1.1rem"},attrs:{xs12:""}},[a("a",{attrs:{href:t.gameList[t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["game_id"]]["url"],target:"_blank"}},[t._v(" "+t._s(t.gameList[t.clipList[t.clipList.length-(t.page-1)*t.page_count-e]["game_id"]]["name"])+" ")])]):t._e()],1)],1)],1)}))],2)],1),a("v-layout",{staticClass:"pagi pt-2 pb-2",attrs:{wrap:"","align-content-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-pagination",{attrs:{disabled:t.loading,length:t.page_MAX,color:"teal","prev-icon":"fas fa-angle-left","next-icon":"fas fa-angle-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)},c=[],s=a("1da1"),l=(a("96cf"),a("ac1f"),a("5319"),a("d3b7"),a("159b"),a("b0c0"),a("d81d"),a("cb29"),a("6062"),a("3ca3"),a("ddb0"),"https://crs-api-server.onrender.com/helix/"),o={name:"App",data:function(){return{ClientID:["kimne78kx3ncx6brgo4mv6wki5h1ko","f03diai4g1nzfwo3om1s87jvdq65hax","apbhlybpld3ybc6grv5c118xqpoz01c"],clipJSON:[],clipNum:{},clipList:[],userList:{},gameList:{},errorclips:[],usertempset:null,gametempset:null,loadtext:"讀取網頁中...",page:1,oldpage:1,page_MAX:10,page_count:84,startcount:0,loading:!0}},watch:{page:function(t,e){this.loading=!0,this.oldpage=e,this.getList(t)}},filters:{timetz:function(t){return t?t.replace("T"," ").replace("Z"," "):""}},methods:{getRequest:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(t){return t.json()})).catch((function(t){console.log("Error: ",t)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()},getTwitchRequest:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadtext="與Twitch伺服器連線中...",a.next=3,fetch("".concat(l).concat(t)).then((function(t){return t.ok?(e.loadtext="取得資料中...",t.json()):null})).catch((function(t){return console.log("Error: ",t),null}));case 3:return r=a.sent,a.abrupt("return",r);case 5:case"end":return a.stop()}}),a)})))()},getList:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r,n,i,c,s,l,o,u,p,g;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r=e.clipJSON.length-(t-1)*e.page_count-1,e.startcount=r,n=r-e.page_count,n<0&&(n=-1),""!==e.clipList[r].id&&(e.loading=!1),i="clips?",c=i,s=r;s>n;s-=1)c+="&id=".concat(e.clipJSON[s].ID);return a.next=10,e.getTwitchRequest(c);case 10:if(l=a.sent,l&&l.data.forEach((function(t){t.Num=e.clipNum[t.id].Num;var a=parseInt(t.Num);t.thumbnail_url=a<=68||119===a||120===a?t.thumbnail_url.replace("480x272","86x45"):t.thumbnail_url.replace("480x272","260x147"),e.clipList[e.clipNum[t.id].Index]=t,e.userList[t.broadcaster_id]||(e.userList[t.broadcaster_id]={display_name:"",url:""},e.usertempset.add(t.broadcaster_id)),e.userList[t.creator_id]||(e.userList[t.creator_id]={display_name:"",url:""},e.usertempset.add(t.creator_id)),""!==t.game_id&&(e.gameList[t.game_id]||(e.gameList[t.game_id]={name:"null",url:"https://www.twitch.tv/directory/game/null"},e.gametempset.add(t.game_id)))})),o="users?",!(e.usertempset.size>0)){a.next=20;break}return c=o,e.usertempset.forEach((function(t){c+="&id=".concat(t)})),a.next=18,e.getTwitchRequest(c);case 18:u=a.sent,u&&(e.usertempset.clear(),u.data.forEach((function(t){e.userList[t.id]={display_name:t.display_name,url:"https://www.twitch.tv/".concat(t.login)}})));case 20:if(p="games?",!(e.gametempset.size>0)){a.next=28;break}return c=p,e.gametempset.forEach((function(t){c+="&id=".concat(t)})),a.next=26,e.getTwitchRequest(c);case 26:g=a.sent,g&&(e.gametempset.clear(),g.data.forEach((function(t){e.gameList[t.id]={name:t.name,url:"https://www.twitch.tv/directory/game/".concat(encodeURI(t.name))}})));case 28:e.loading=!1;case 29:case"end":return a.stop()}}),a)})))()},getJSON:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getRequest("//crs-api-server.onrender.com/clips");case 2:t.clipJSON=e.sent,t.loadtext="表單資料讀取中...",t.clipNum=t.clipJSON.reduce((function(t,e,a){return t[e.ID]={Num:e.Num,Index:a},t}),{}),t.clipList=new Array(t.clipJSON.length).fill().map((function(){return{Num:"XXX",id:"",url:"",title:"ERROR",embed_url:"",creator_id:"",created_at:null,game_id:"",thumbnail_url:""}})),t.page_MAX=Math.ceil(t.clipJSON.length/t.page_count),t.getList(1);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.usertempset=new Set,this.gametempset=new Set,this.loadtext="與Clips表單伺服器連線中...",this.getJSON()}},u=o,p=(a("12e5"),a("2877")),g=a("6544"),d=a.n(g),f=a("7496"),m=a("b0af"),h=a("99d9"),v=a("a523"),_=a("0e8f"),b=a("132d"),x=a("adda"),w=a("a722"),L=a("891e"),y=a("490a"),O=a("71a3"),k=a("c671"),S=a("fe57"),N=a("9a96"),R=Object(p["a"])(u,i,c,!1,null,null,null),j=R.exports;d()(R,{VApp:f["a"],VCard:m["a"],VCardText:h["a"],VContainer:v["a"],VFlex:_["a"],VIcon:b["a"],VImg:x["a"],VLayout:w["a"],VPagination:L["a"],VProgressCircular:y["a"],VTab:O["a"],VTabItem:k["a"],VTabs:S["a"],VTabsSlider:N["a"]}),r["a"].config.productionTip=!1,new r["a"]({vuetify:n["a"],render:function(t){return t(j)}}).$mount("#app")},e976:function(t,e,a){}});