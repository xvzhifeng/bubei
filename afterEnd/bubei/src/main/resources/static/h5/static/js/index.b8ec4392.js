(function(e){function n(n){for(var a,r,s=n[0],g=n[1],u=n[2],p=0,l=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(a in g)Object.prototype.hasOwnProperty.call(g,a)&&(e[a]=g[a]);d&&d(n);while(l.length)l.shift()();return t.push.apply(t,u||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],a=!0,r=1;r<o.length;r++){var g=o[r];0!==i[g]&&(a=!1)}a&&(t.splice(n--,1),e=s(s.s=o[0]))}return e}var a={},i={index:0},t=[];function r(e){return s.p+"static/js/"+({"pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8":"pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8","pages-index-index":"pages-index-index","pages-index-user":"pages-index-user","pages-learn-main":"pages-learn-main","pages-learn-wordbook":"pages-learn-wordbook","pages-learn-wordsection":"pages-learn-wordsection","pages-login-email~pages-login-password~pages-login-verificationCode":"pages-login-email~pages-login-password~pages-login-verificationCode","pages-login-email":"pages-login-email","pages-login-password":"pages-login-password","pages-login-verificationCode":"pages-login-verificationCode","pages-login-login":"pages-login-login","pages-setting-userSetting":"pages-setting-userSetting","pages-setting-wordbook":"pages-setting-wordbook"}[e]||e)+"."+{"pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8":"321f91a9","pages-index-index":"f712164f","pages-index-user":"ff2580ae","pages-learn-main":"febf2c82","pages-learn-wordbook":"f3a21b78","pages-learn-wordsection":"2e29f4c0","pages-login-email~pages-login-password~pages-login-verificationCode":"0572f530","pages-login-email":"9ae422c0","pages-login-password":"243a0054","pages-login-verificationCode":"9c739b59","pages-login-login":"f9562d2a","pages-setting-userSetting":"71132526","pages-setting-wordbook":"fc68e5be"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var n=[],o=i[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=a);var t,g=document.createElement("script");g.charset="utf-8",g.timeout=120,s.nc&&g.setAttribute("nonce",s.nc),g.src=r(e);var u=new Error;t=function(n){g.onerror=g.onload=null,clearTimeout(p);var o=i[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+t+")",u.name="ChunkLoadError",u.type=a,u.request=t,o[1](u)}i[e]=void 0}};var p=setTimeout((function(){t({type:"timeout",target:g})}),12e4);g.onerror=g.onload=t,document.head.appendChild(g)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,o){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(o,a,function(n){return e[n]}.bind(null,a));return o},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="./",s.oe=function(e){throw console.error(e),e};var g=window["webpackJsonp"]=window["webpackJsonp"]||[],u=g.push.bind(g);g.push=n,g=g.slice();for(var p=0;p<g.length;p++)n(g[p]);var d=u;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},"034f":function(e,n,o){"use strict";var a=o("ef9e"),i=o.n(a);i.a},"23be":function(e,n,o){"use strict";o.r(n);var a=o("3b4e"),i=o.n(a);for(var t in a)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(t);n["default"]=i.a},"3b4e":function(e,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={globalData:{userID:1,userEmail:"user@sumu.com",bkurl:"/static/temp/index.jpg",api_root:"http://api.sumu.today:10111",api_updateStudyRecord:"http://api.sumu.today:10111/words/updateStudyRecord",api_addStudyRecord:"http://api.sumu.today:10111/words/addStudyRecord",api_passwordLogin:"http://api.sumu.today:10111/user/passwordLogin",api_emailLogin:"http://api.sumu.today:10111/login/email/text",api_emailRegister:"http://api.sumu.today:10111/user/register",api_getBK:"http://api.sumu.today:10111/background-image/getBK",api_getUserInfo:"http://api.sumu.today:10111/user/getUserInfo",api_getWordBookInfo:"http://api.sumu.today:10111/word-book/getWordBookInfo",api_getAllWordBook:"http://api.sumu.today:10111/word-book/getAllWordBook",api_choiceUserWordBook:"http://api.sumu.today:10111/user/choiceUserWordBook",api_getNotStudyWords:"http://api.sumu.today:10111/words/getNotStudyWords",api_getStudyWords:"http://api.sumu.today:10111/words/getStudyWords",api_getNotStudyRecordCount:"http://api.sumu.today:10111/words/getNotStudyRecordCount",api_getStudyRecordCount:"http://api.sumu.today:10111/words/getStudyRecordCount",api_getMp3:"http://api.sumu.today:10111/res/util/getMp3",api_getWordBookSectionList:"http://api.sumu.today:10111/word-book/getWordBookSectionList",api_getWordBookSectionWordList:"http://api.sumu.today:10111/word-book/getWordBookSectionWordList"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=a},"3dfd":function(e,n,o){"use strict";o.r(n);var a=o("7cb4"),i=o("23be");for(var t in i)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(t);o("034f");var r,s=o("f0c5"),g=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=g.exports},"41cb":function(e,n,o){"use strict";o("7a82");var a=o("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterMount",{enumerable:!0,get:function(){return t.RouterMount}}),n.router=void 0,o("c975");var i=a(o("2909")),t=o("10c9"),r=(0,t.createRouter)({platform:"h5",routes:(0,i.default)([{path:"/pages/login/login",aliasPath:"/"},{path:"/pages/setting/userSetting"},{path:"/pages/setting/wordbook"},{path:"/pages/login/password"},{path:"/pages/learn/main"},{path:"/pages/index/index"},{path:"/pages/login/email"},{path:"/pages/login/verificationCode"},{path:"/pages/index/user"},{path:"/pages/learn/wordsection"},{path:"/pages/learn/wordbook"}])});n.router=r,r.beforeEach((function(e,n,o){getApp().globalData.userID<0&&e.path.indexOf("login")<0?(console.log("用户未登录！！！"),o({path:"/pages/login/login",NAVTYPE:"replaceAll"})):(console.log("用户已经登录！！！"),o())})),r.afterEach((function(e,n){console.log("跳转结束")}))},"56d7":function(e,n,o){"use strict";var a=o("4ea4"),i=a(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("6cdc"),o("1c31");var t=a(o("e143")),r=a(o("3dfd")),s=o("41cb");t.default.use(s.router),t.default.config.productionTip=!1,r.default.mpType="app";var g=new t.default((0,i.default)({},r.default));(0,s.RouterMount)(g,s.router,"#app")},"6cdc":function(e,n,o){"use strict";(function(e){var n=o("4ea4");o("13d5"),o("d3b7"),o("ddb0"),o("ac1f"),o("5319");var a=n(o("e143")),i={keys:function(){return[]}};e["________"]=!0,delete e["________"],e.__uniConfig={globalStyle:{navigationStyle:"custom"}},e.__uniConfig.compilerVersion="3.3.9",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=i(n);return Object.assign(e[o]||(e[o]={}),a.common||a),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,a.default.component("pages-login-login",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-login-login")]).then(function(){return e(o("a86a"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-setting-userSetting",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-setting-userSetting")]).then(function(){return e(o("58c4"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-setting-wordbook",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-setting-wordbook")]).then(function(){return e(o("c6e0"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-login-password",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-login-email~pages-login-password~pages-login-verificationCode"),o.e("pages-login-password")]).then(function(){return e(o("225d"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-learn-main",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-learn-main")]).then(function(){return e(o("305f"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-index-index",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-index-index")]).then(function(){return e(o("f75a"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-login-email",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-login-email~pages-login-password~pages-login-verificationCode"),o.e("pages-login-email")]).then(function(){return e(o("b352"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-login-verificationCode",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-login-email~pages-login-password~pages-login-verificationCode"),o.e("pages-login-verificationCode")]).then(function(){return e(o("2d33"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-index-user",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-index-user")]).then(function(){return e(o("59ea"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-learn-wordsection",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-learn-wordsection")]).then(function(){return e(o("5992"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-learn-wordbook",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-index-user~pages-learn-main~pages-learn-wordbook~pages-learn-wordsection~pag~628d57e8"),o.e("pages-learn-wordbook")]).then(function(){return e(o("dda6"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/setting/userSetting",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-setting-userSetting",{slot:"page"})])}},meta:{name:"pages-setting-userSetting",isNVue:!1,maxWidth:0,pagePath:"pages/setting/userSetting",windowTop:0}},{path:"/pages/setting/wordbook",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-setting-wordbook",{slot:"page"})])}},meta:{name:"pages-setting-wordbook",isNVue:!1,maxWidth:0,pagePath:"pages/setting/wordbook",windowTop:0}},{path:"/pages/login/password",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-login-password",{slot:"page"})])}},meta:{name:"pages-login-password",isNVue:!1,maxWidth:0,pagePath:"pages/login/password",windowTop:0}},{path:"/pages/learn/main",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-learn-main",{slot:"page"})])}},meta:{name:"pages-learn-main",isNVue:!1,maxWidth:0,pagePath:"pages/learn/main",windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",windowTop:0}},{path:"/pages/login/email",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-login-email",{slot:"page"})])}},meta:{name:"pages-login-email",isNVue:!1,maxWidth:0,pagePath:"pages/login/email",windowTop:0}},{path:"/pages/login/verificationCode",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-login-verificationCode",{slot:"page"})])}},meta:{name:"pages-login-verificationCode",isNVue:!1,maxWidth:0,pagePath:"pages/login/verificationCode",windowTop:0}},{path:"/pages/index/user",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-index-user",{slot:"page"})])}},meta:{name:"pages-index-user",isNVue:!1,maxWidth:0,pagePath:"pages/index/user",windowTop:0}},{path:"/pages/learn/wordsection",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-learn-wordsection",{slot:"page"})])}},meta:{name:"pages-learn-wordsection",isNVue:!1,maxWidth:0,pagePath:"pages/learn/wordsection",windowTop:0}},{path:"/pages/learn/wordbook",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-learn-wordbook",{slot:"page"})])}},meta:{name:"pages-learn-wordbook",isNVue:!1,maxWidth:0,pagePath:"pages/learn/wordbook",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},"7cb4":function(e,n,o){"use strict";var a;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return t})),o.d(n,"a",(function(){return a}));var i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[]},ea0b:function(e,n,o){var a=o("24fb");n=a(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},ef9e:function(e,n,o){var a=o("ea0b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("4f06").default;i("d88fd794",a,!0,{sourceMap:!1,shadowMode:!1})}});