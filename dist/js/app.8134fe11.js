(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06fb":function(e,t,n){"use strict";n("7fb0")},"0dbb":function(e,t,n){"use strict";t["a"]=[]},"35d6":function(e,t,n){var o={"./frame/Frame.vue":"4d4e","./frame/components/Header.vue":"ce55","./frame/components/Menu.vue":"f4c2","./frame/components/MenuItem.vue":"8e4b","./frame/components/Settings.vue":"a7fc","./login/Login.vue":"ede4","./reward/Reward.vue":"8f25","./test/Test.vue":"65d4","./test/components/TestUpdate.vue":"9017"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="35d6"},3842:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("99af");var o=n("f121"),a=n("f3e4"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e||(e=window.location.href),Object(a["b"])("sessionid","",-1);var t=encodeURIComponent(e);window.open("https://oapi.dingtalk.com/connect/qrconnect?appid=".concat(o["a"].app_id,"&response_type=code&scope=snsapi_login&redirect_uri=").concat(t),name="_self")}},"3cd6":function(e,t,n){},4360:function(e,t,n){"use strict";n("b0c0");var o=n("2b0e"),a=n("2f62"),r=n("323e"),s=n.n(r);n("0dbb");o["default"].use(a["a"]),t["a"]=new a["a"].Store({state:{user_info:{id:1},user_permissions:[],user_menus:[],in_request_count:0,current_app_id:null,current_app_name:null},mutations:{set_user_info:function(e,t){e.user_info=t},set_user_permissions:function(e,t){e.user_permissions=t},set_user_menus:function(e,t){e.user_menus=t},add_request_count:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.in_request_count+=t,s.a.start()},reduce_request_count:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.in_request_count-=t,s.a.inc(.2),e.in_request_count<=0&&s.a.done()},clear_request_count:function(e){e.in_request_count=0,s.a.done()},change_current_app:function(e,t){e.current_app_id=t.id,e.current_app_name=t.name}},actions:{},modules:{}})},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="4678"},"4d4e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticStyle:{display:"flex","flex-flow":"column",height:"100%","min-width":"1300px",overflow:"auto"}},[n("header",{staticStyle:{height:"80px"}},[n("l-frame-header",{attrs:{slot:"header",site_name:"Release",user_info:e.$store.state.user_info,api_url:"api-docs",update_logs:e.update_logs,loading:!!e.$store.state.in_request_count,chrome_check:""},slot:"header"})],1),n("section",{staticStyle:{flex:"1",display:"flex","flex-flow":"row"}},[n("main",{staticStyle:{height:"100%",flex:"1",padding:"20px",overflow:"auto"}},[e.refreshing?e._e():n("router-view",{ref:"main",attrs:{slot:"main"},slot:"main"})],1)])])},a=[],r=(window.location.protocol,window.location.host,[]),s={data:function(){return{update_logs:r,refreshing:!1}},mounted:function(){var e=this;this.$store.state.user_info.id&&this.$df_add_dialog("dfUpdateLog",{update_logs:r,check_new:!0}),this.$root.$on("change_current_app_id",(function(){e.refreshing=!0,e.$nextTick((function(){e.refreshing=!1}))}))},methods:{on_click:function(){var e=this;this.refreshing=!0,this.$nextTick((function(){e.refreshing=!1}))}}},i=s,l=n("2877"),c=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"g_add_dialog",(function(){return q})),n.d(o,"g_calc_page_size",(function(){return T})),n.d(o,"g_datetime",(function(){return M}));n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),l={},c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,d=n("a18c"),f=n("4360"),p=n("5c96"),m=n.n(p),b=(n("3cd6"),n("1f54"),n("6030")),h=n("8103"),_=n.n(h),v=n("bba4"),g=n.n(v),j=(n("a5d8"),n("99af"),n("a15b"),n("fb6a"),n("b85c")),y=n("bc3a"),w=n.n(y),x=n("f121"),k=n("3842"),O=function(e){var t=[];for(var n in e)if(""!==e[n]&&null!==e[n]&&void 0!=e[n])if(e[n]instanceof Array){var o,a=Object(j["a"])(e[n]);try{for(a.s();!(o=a.n()).done;){var r=o.value;t.push("".concat(n,"=").concat(r))}}catch(i){a.e(i)}finally{a.f()}}else if(e[n]instanceof Date){var s=e[n];t.push("".concat(n,"=").concat(s.getFullYear(),"-").concat(s.getMonth()+1,"-").concat(s.getDate(),"T").concat(s.getHours(),":").concat(s.getMinutes(),":").concat(s.getSeconds()))}else t.push("".concat(n,"=").concat(e[n]));return t.join("&")},S=function e(t){var n,o=[],a=Object(j["a"])(t);try{for(a.s();!(n=a.n()).done;){var r=n.value;r instanceof Array?o.push(e(r)):r instanceof Object?o.push($(r)):""===r?o.push(null):o.push(r)}}catch(s){a.e(s)}finally{a.f()}return o},$=function e(t){var n={};for(var o in t)t[o]instanceof Array?n[o]=S(t[o]):t[o]instanceof Object?n[o]=e(t[o]):""===t[o]?n[o]=null:n[o]=t[o];return n},z=w.a.create({baseURL:x["a"].base_url,timeout:2e4,paramsSerializer:O,withCredentials:!0});z.interceptors.request.use((function(e){return f["a"].commit("add_request_count"),e.data=$(e.data),e}),(function(e){return f["a"].commit("reduce_request_count"),Promise.reject(e)})),z.interceptors.response.use((function(e){return f["a"].commit("reduce_request_count"),e}),(function(e){if(f["a"].commit("reduce_request_count"),!e.response)return w.a.isCancel(e)?(console.log("跳转取消"),Promise.reject(e)):(e.message?p["Message"].error(e.message):p["Message"].error("unknow error"),Promise.reject(e));if(401!=e.response.status){if(e.response.status>=500)return p["Message"].error("服务器出错啦 请联系管理员"),Promise.reject(e);var t=e.response.data;return t.detail?p["Message"].error(t.detail):t.non_field_errors?p["Message"].error(String(t.non_field_errors).slice(0,100)):p["Message"].error(JSON.stringify(t).slice(0,100)),Promise.reject(e)}"user/users/get-my-info"==e.config.url?Object(k["a"])(window.location.href):d["a"].push({name:"login"})}));var C=z,q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=window.Vue.component(e),o=new n({propsData:t});return o.$mount(),document.body.appendChild(o.$el),o},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:49,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:340,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,o=Math.floor((window.innerHeight-t)/e);return o>n?o:n},M=function(e){return e?e.substr(0,16):e};a["default"].config.productionTip=!1,a["default"].use(m.a),a["default"].use(b["a"],C);n("6809");var E=n("35d6");for(var D in E.keys().forEach((function(e){if(4==e.split("/").length&&"components"==e.split("/")[2]){var t=E(e),n=_()(g()(e.replace(/^\.\/(.*)\.\w+$/,"$1")));n="L"+n.split("Components")[0]+n.split("Components")[1],console.log("component_name",n),a["default"].component(n,t.default)}})),o)a["default"].prototype[D]=o[D];new a["default"]({router:d["a"],store:f["a"],render:function(e){return e(u)}}).$mount("#app")},"65d4":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%","border-color":"#16B8D8","border-top-color":"#16B8D8","border-right-color":"#16B8D8"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{staticStyle:{"border-color":"#16B8D8","border-top-color":"#16B8D8","border-right-color":"#16B8D8"},attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),n("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),n("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),n("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),n("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.handleClick(t.row)}}},[e._v("查看")]),n("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)},a=[],r={methods:{handleClick:function(e){console.log(e)}},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}}},s=r,i=n("2877"),l=Object(i["a"])(s,o,a,!1,null,null,null);t["default"]=l.exports},6809:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="6809"},"7fb0":function(e,t,n){},"85ec":function(e,t,n){},"8e07":function(e,t,n){},"8e4b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.display_count>0?n("el-submenu",{attrs:{index:e.item.name}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),n("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.item.meta.name))])]),e._l(e.item.children,(function(t,o){return t.meta&&0==t.meta.display?e._e():n("el-menu-item",{key:o,attrs:{index:t.name}},[n("i",{staticClass:"el-icon-menu"}),n("span",{staticStyle:{display:"inline-block"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.name))])])}))],2):n("el-menu-item",{attrs:{index:e.item.name}},[n("i",{staticClass:"el-icon-menu"}),n("span",{staticStyle:{display:"inline-block"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.meta.name))])])},a=[],r=n("b85c"),s={name:"MenuItem",props:["item"],computed:{display_count:function(){var e=0;if(!this.item.children||0==this.item.children.length)return e;var t,n=Object(r["a"])(this.item.children);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.meta&&0!=o.meta.display&&(e+=1)}}catch(a){n.e(a)}finally{n.f()}return e}}},i=s,l=n("2877"),c=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=c.exports},"8f25":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%",flex:"1",display:"flex","flex-flow":"row"}},[n("div",{staticStyle:{height:"100%",flex:"1",padding:"50px 160px",overflow:"auto"}},[n("div",[n("el-input",{ref:"search_input",staticStyle:{width:"100%","text-align":"center"},attrs:{id:"search_input","trigger-on-focus":!1,autofocus:!0,"select-when-unmatched":"",placeholder:"Input the wallet address used to register your operator / validator"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.on_search()}},model:{value:e.params.owner_address,callback:function(t){e.$set(e.params,"owner_address",t)},expression:"params.owner_address"}},[n("el-button",{staticStyle:{width:"140px","background-color":"#16B8D8"},attrs:{slot:"append",id:"submit",icon:"el-icon-search",loading:e.loading},on:{click:function(t){return e.on_search()}},slot:"append"})],1)],1),n("div",{staticStyle:{"margin-top":"50px"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"",border:"",size:"medium",style:"width: 100%","span-method":e.arraySpanMethod},on:{"sort-change":e.on_change_sort,"filter-change":e.on_change_filter}},[n("el-table-column",{attrs:{label:"Eligibility",prop:"title","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"Round1",prop:"round1","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"Round2",prop:"round2","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"Round3",prop:"round3","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"Round4",prop:"round4","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"Round5",prop:"round5","show-overflow-tooltip":!0}})],1)],1)])])},a=[],r=n("6030"),s={mixins:[r["a"].mixins.list_mixin],data:function(){return{url:"ssv/results/rewards",params:{owner_address:""},default_data:[{title:"Validators"},{title:"SSV Holdings"},{title:"Operators"},{title:"Avg. Performance"},{title:"Manged Validators"},{title:"Allocation Rewards",key:"_1"},{title:"All validators alloc"},{title:"Validators + SSV Holders alloc"},{title:"All operators alloc"},{title:"Verified operators alloc"},{title:"Total (Round)"},{title:"Total (All Rounds)"}]}},mounted:function(){console.log("this.data: ",this.data),this.data=this.default_data},methods:{on_search:function(){this.get_data()},arraySpanMethod:function(e){e.row,e.column;var t=e.rowIndex,n=e.columnIndex;if(5===t){if(0==n)return[1,5]}else if(11===t&&1==n)return[1,5]},after_get_data_error:function(e){this.data=this.default_data}}},i=s,l=n("2877"),c=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=c.exports},9017:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("test update")])},a=[],r={name:"TestUpdate.vue",mounted:function(){console.log("test update")},beforeUpdate:function(){console.log("beforeUpdate")}},s=r,i=n("2877"),l=Object(i["a"])(s,o,a,!1,null,"e7b05b38",null);t["default"]=l.exports},"91b6":function(e,t,n){"use strict";n("8e07")},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return p}));n("c975"),n("b0c0"),n("d3b7");var o=n("b85c"),a=n("2b0e"),r=n("8c4f"),s=n("5c96"),i=n("4360"),l=n("0dbb");console.log("menus: ",l["a"]),a["default"].use(r["a"]);var c=[{path:"/",name:"root",meta:{name:"首页"},component:function(){return Promise.resolve().then(n.bind(null,"4d4e"))},redirect:"reward",children:[{path:"reward",name:"reward",component:function(){return Promise.resolve().then(n.bind(null,"8f25"))},meta:{name:"Reward",icon:"fa-th",login:!1}}]},{path:"/login",name:"login",component:function(){return Promise.resolve().then(n.bind(null,"ede4"))}},{path:"/test",name:"test",component:function(){return Promise.resolve().then(n.bind(null,"65d4"))},meta:{login:!1}}],u=new r["a"]({mode:"history",base:"/",routes:c});u.beforeEach((function(e,t,n){if(console.log("to: ",e),!e.meta||!1!==e.meta.login)return 0===e.matched.length?(s["Message"].warning("您访问的页面不存在或没有权限 自动后退到上一页"),t.name&&"login"!==t.name?void n({name:t.name}):void("/"!=t.path&&n("/"))):void n();n()}));var d=function(e){var t,n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(-1==i["a"].state.user_permissions.indexOf(a))return!1}}catch(r){n.e(r)}finally{n.f()}return!0},f=function e(t){var n,a=[],r=Object(o["a"])(t);try{for(r.s();!(n=r.n()).done;){var s=n.value;if(!s.meta.permissions||d(s.meta.permissions)){var i=Object.assign({},s);if(!s.children){a.push(i);continue}i.children=e(s.children),i.children.length>0&&a.push(i)}}}catch(l){r.e(l)}finally{r.f()}return a},p=function(){if(i["a"].state.user_menus.length)console.log("重复初始化路由");else{var e=[];console.log("store.state: ",i["a"].state),e=i["a"].state.user_info.is_staff||-1!=i["a"].state.user_permissions.indexOf("read_all")?l["a"]:f(l["a"]),0==e.length&&s["MessageBox"].alert("很抱歉 您没有权限 请联系管理员","提示",{confirmButtonText:"确定",callback:function(e){df_admin.sso.login()}}),i["a"].commit("set_user_menus",e);var t=[{path:"/",name:"root",meta:{name:"首页"},component:function(){return Promise.resolve().then(n.bind(null,"4d4e"))},redirect:e.length?e[0].path:"/test",children:e}];u.push(t),console.log("routers:",t),u.addRoutes(t),console.log("router: ",u),i["a"].state.filtered_menus=e}};t["a"]=u},a7fc:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-drawer",{attrs:{title:"我是标题",visible:e.is_visible,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.is_visible=t}}},[n("span",[e._v("我来啦!")])])},a=[],r={name:"settings"},s=r,i=n("2877"),l=Object(i["a"])(s,o,a,!1,null,"39a5596c",null);t["default"]=l.exports},b5b4:function(e,t,n){var o={"./cart-panel/Index.vue":"6495","./date-range/Index.vue":"154b","./export/Index.vue":"1abe","./header/Index.vue":"5839","./menu/Index.vue":"d5e4","./menu/components/Item.vue":"0dc1","./option-bar/Index.vue":"bc9e","./remote-query-select/Index.vue":"0cd5","./remote-select/Index.vue":"04ad","./report/Index.vue":"efc0","./report/components/CreateUpdateDash.vue":"1736","./report/components/CreateUpdateFilter.vue":"9e4f","./report/components/CreateUpdateGraph.vue":"5630","./report/components/CreateUpdateRow.vue":"87ae","./report/components/Filters.vue":"b638","./report/components/Graph.vue":"0656","./report/components/List.vue":"f337","./report/components/Row.vue":"ccce","./report/components/Table.vue":"d749","./search/Index.vue":"d3f1","./table-column/Index.vue":"3591","./update-log/Index.vue":"2fca"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id="b5b4"},ce55:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"0px 100px",display:"flex","align-items":"center","justify-content":"space-between",height:"80px","background-color":"#16B8D8"}},[e._m(0),n("div",[n("ul",{staticClass:"c_ul"},[n("li",{staticClass:"c_li"},[n("transition",{attrs:{duration:1e3}},[n("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"el-icon-loading",staticStyle:{color:"#FFFFFF"}})])],1),n("li",{staticClass:"c_li",on:{click:function(t){return e.window.open("https://twitter.com/HellmanResearch")}}},[n("i",{staticClass:"fa fa-twitter",staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true"}}),e._v("Twitter ")]),n("li",{staticClass:"c_li",on:{click:function(t){return e.window.open("https://hellman.team")}}},[n("i",{staticClass:"fa fa-globe",staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true"}}),e._v("website ")]),n("li",{staticClass:"c_li",on:{click:function(t){return e.window.open("https://explorer.ssv.network/operators/e4edcb950ee9f4a4f89dde5e9b74b615c04f21f204884bc53ffe2bebbcea4b93")}}},[n("i",{staticClass:"fa fa-external-link",staticStyle:{"margin-right":"5px"},attrs:{"aria-hidden":"true"}}),e._v("ssv node ")])])]),n("el-dialog",{attrs:{title:"查看API Token",visible:e.visible_dialog_token,width:"600px"},on:{"update:visible":function(t){e.visible_dialog_token=t}}},[n("el-alert",{attrs:{title:"请妥善保存您的API Token",closable:!1,type:"warning"}}),n("div",{staticStyle:{padding:"0px 20px","padding-top":"20px"}},[n("span",[e._v(e._s(e.token))]),n("i",{staticClass:"fa fa-eye fa-lg",staticStyle:{float:"right","line-height":"24px"},attrs:{"aria-hidden":"true"},on:{click:e.get_token}})]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible_dialog_token=!1}}},[e._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"我要吐槽",visible:e.visible_dialog_spit_slot,width:"30%"},on:{"update:visible":function(t){e.visible_dialog_spit_slot=t}}},[n("span",[e._v(e._s(e.spit_slot_content))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible_dialog_spit_slot=!1}}},[e._v("知道了")])],1)]),n("el-dialog",{attrs:{title:"关于",visible:e.visible_dialog_about,width:"30%"},on:{"update:visible":function(t){e.visible_dialog_about=t}}},[n("span",[e._v(e._s(e.about_content))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.visible_dialog_about=!1}}},[e._v("确 定")])],1)])],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticStyle:{height:"44px",display:"inline-block","vertical-align":"middle","box-sizing":"border-box"},attrs:{src:n("cf05")}}),o("span",{staticStyle:{"margin-left":"8px","letter-spacing":"2px","font-weight":"420",color:"#FFFFFF","font-size":"30px",height:"100%",display:"inline-block","box-sizing":"border-box","vertical-align":"middle"}},[e._v(" | Rewards ")])])}],r={name:"dfHeader",props:{site_name:{type:String,required:!0},api_url:{type:String,required:!1},help_url:{type:String,required:!1},spit_slot_content:{type:String,required:!1},about_content:{type:String,default:""},user_info:{type:Object,default:function(){return{}}},update_logs:{type:Array,default:function(){}},get_token_url:{type:String,default:"user/users/get-my-token"},logout_url:{type:String,default:"user/users/logout"},loading:Boolean},data:function(){return{visible_dialog_token:!1,visible_dialog_spit_slot:!1,visible_dialog_about:!1,token:"***********************************************************",window:window}},mounted:function(){this.$store.state.current_app_id=this.$route.query.current_app_id},methods:{on_change_app:function(e,t,n){this.$root.$emit("change_current_app_id"),this.$store.commit("change_current_app",n)},get_token:function(){var e=this;this.$c_master.get(this.get_token_url).then((function(t){e.token=t.data.token})).catch((function(e){}))},on_logout:function(){var e=this;this.$confirm("确认退出","退出",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info",center:!0}).then((function(){e.$c_master.post(e.logout_url).then((function(t){e.user_info={},e.$store.state.user_info={}}))}))}}},s=r,i=(n("91b6"),n("2877")),l=Object(i["a"])(s,o,a,!1,null,"ab016952",null);t["default"]=l.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.65bf343b.png"},ede4:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{height:"100%"},attrs:{"element-loading-text":"登录中..."}})},a=[],r=(n("ac1f"),n("1276"),n("a18c")),s=(n("3842"),n("f3e4")),i=(n("0dbb"),{mounted:function(){Object(s["a"])("sessionid");var e=this.$route.query.code;e?this.login_dingtalk():this.get_my_info()},methods:{get_my_info:function(){var e=this,t=this;this.g_master_api.get("user/users/get-my-info").then((function(e){t.init_info(e)})).catch((function(t){console.log("error:",t),e.$message.warning("登录失败 自动重试"),setTimeout(e.get_user_info,5e3)}))},login_dingtalk:function(){var e=this,t=this.$route.query.code,n={tmp_auth_code:t},o=this;this.$c_master.post("user/users/login-dingtalk",n).then((function(e){o.init_info(e)})).catch((function(t){console.log("error:",t),e.$message.warning("登录失败 自动重试"),setTimeout(e.get_user_info,5e3)}))},init_info:function(e){this.$store.commit("set_user_info",e.data),this.$store.commit("set_user_permissions",e.data.permissions);var t=this.$route.query.next_path;void 0==t&&(t="/"),console.log("next_path:",t),Object(r["b"])(),this.$router.push({path:t})},get_next_path:function(){console.log("get_next_path:",window.location.href);var e=window.location.href.split("next_path=");if(e.length>=2){var t=e[1].split("&token")[0];return decodeURIComponent(t)}return"/"}}}),l=i,c=n("2877"),u=Object(c["a"])(l,o,a,!1,null,"474af1ce",null);t["default"]=u.exports},f121:function(e,t,n){"use strict";n("bc3a");var o=new XMLHttpRequest;if(o.open("GET","config.json",!1),o.send(null),200!=o.status)throw alert("load config.json failed"),"load config.json failed";var a=JSON.parse(o.responseText),r={base_url:"http://localhost:8000/api/v1/",app_id:a.app_id},s={base_url:window.location.protocol+"//"+window.location.host+"/api/v1/"};console.log("process.env.NODE_ENV: ","production");var i=Object.assign({},r,s);console.log("export_config: ",i);t["a"]=i},f3e4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n("d3b7"),n("ac1f"),n("25f0"),n("1276");var o=n("b85c"),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=new Date;o.setTime(o.getTime()+24*n*3600*1e3),document.cookie=e+"="+t+";expires="+o.toString()},r=function(e){var t,n=document.cookie.split("; "),a=Object(o["a"])(n);try{for(a.s();!(t=a.n()).done;){var r=t.value,s=r.split("=");if(e==s[0])return s[1]}}catch(i){a.e(i)}finally{a.f()}}},f4c2:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%",display:"flex",width:"256px"}},[n("el-menu",{attrs:{"default-active":e.$route.name,"unique-opened":"",collapse:e.is_collapse},on:{select:e.on_select}},e._l(e.menus,(function(t,o){return t.meta&&"false"==t.meta?e._e():n("l-frame-menu-item",{key:o,attrs:{item:t}})})),1)],1)},a=[],r=(n("caad"),n("b0c0"),n("b64b"),n("2532"),n("b85c")),s=n("0dbb"),i={name:"dfMenu",props:{collapse:{type:Boolean,default:!1}},data:function(){return{is_collapse:this.collapse,menu_map:{},menus:s["a"]}},mounted:function(){this.init_menu_map(this.menus),Object.keys(this.menu_map).includes(this.$route.name)&&this.menu_map[this.$route.name].meta&&!0===this.menu_map[this.$route.name].meta.collapse&&(this.is_collapse=!0)},methods:{on_select:function(e,t){var n=this.menu_map[e];n.meta&&!0===n.meta.collapse&&(this.is_collapse=!0),this.$router.push({name:e})},folding:function(){this.is_collapse=!1},unfolding:function(){this.is_collapse=!0},init_menu_map:function(e){var t,n=Object(r["a"])(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.menu_map[o.name]=o,o.children&&this.init_menu_map(o.children)}}catch(a){n.e(a)}finally{n.f()}}}},l=i,c=(n("06fb"),n("2877")),u=Object(c["a"])(l,o,a,!1,null,"1e92d4e3",null);t["default"]=u.exports}});
//# sourceMappingURL=app.8134fe11.js.map