(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-learn-wordsection"],{"07e7":function(e,t,n){var a=n("4cfc");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("190b8bd7",a,!0,{sourceMap:!1,shadowMode:!1})},"25c4":function(e,t,n){var a=n("40ff");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("2413444a",a,!0,{sourceMap:!1,shadowMode:!1})},2727:function(e,t,n){"use strict";var a=n("07e7"),i=n.n(a);i.a},3344:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{wordBookID:0,section:[],word:[],wordLength:0,sectionLength:0}},onLoad:function(e){var t=this;console.log("当前选择的词书id： "+e.id),this.wordBookID=e.id,uni.request({url:getApp().globalData.api_getWordBookSectionList,data:{wordBookID:this.wordBookID},header:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},method:"GET",sslVerify:!0,success:function(e){var n=e.data;e.statusCode,e.header;console.log(n),t.section=n.response,t.sectionLength=t.section.length,uni.request({url:getApp().globalData.api_getWordBookSectionWordList,data:{wordBookID:t.wordBookID,wordSection:t.section[0].name},header:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},method:"GET",sslVerify:!0,success:function(e){var n=e.data;e.statusCode,e.header;console.log(n),t.word=n.response,t.wordLength=t.word.length},fail:function(e){}})},fail:function(e){}}),uni.getSystemInfo({success:function(e){console.log("手机可用高度:"+2*e.windowHeight+"rpx"),t.appHeight=2*e.windowHeight}})},methods:{audio:function(e,t){console.log(e),uni.request({url:getApp().globalData.api_getMp3,data:{url:e,name:t},header:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},method:"GET",success:function(e){var t=e.data;e.statusCode,e.header;console.log("开始播放"+t);var n=uni.createInnerAudioContext();n.autoplay=!0,n.src=t,n.play(),n.onPlay((function(){console.log("开始播放")})),n.onError((function(e){console.log(e),console.log(e.errMsg),console.log(e.errCode)}))},fail:function(e){}})},choiceSection:function(e){var t=this;uni.request({url:getApp().globalData.api_getWordBookSectionWordList,data:{wordBookID:this.wordBookID,wordSection:e},header:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},method:"GET",sslVerify:!0,success:function(e){var n=e.data;e.statusCode,e.header;console.log(n),t.word=n.response,t.$refs.showLeft.close()},fail:function(e){}})},back:function(){uni.redirectTo({url:"/pages/learn/wordbook"})},showDrawer:function(){this.$refs.showLeft.open()},closeDrawer:function(){this.$refs.showLeft.close()}}};t.default=a},"33d0":function(e,t,n){"use strict";var a=n("956f"),i=n.n(a);i.a},"3e6b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("1a49").default,uniCard:n("ce30").default,uniDrawer:n("c850").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content",style:{height:e.appHeight+"rpx"}},[n("v-uni-view",{staticClass:"navigate"},[n("uni-icons",{attrs:{type:"left",color:"",size:"50rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back()}}})],1),n("v-uni-button",{staticClass:"choiceButton",attrs:{plain:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showDrawer.apply(void 0,arguments)}}},[e._v("选择章节")]),n("v-uni-scroll-view",{staticClass:"scroll-Y",staticStyle:{height:"80%"},attrs:{"scroll-top":e.scrollTop,"scroll-y":"true","show-scrollbar":"false"}},[e.wordLength>0?n("v-uni-view",e._l(e.word,(function(t,a){return n("v-uni-view",{key:a},[n("v-uni-view",[n("uni-card",{attrs:{title:t.japaneseMeans,extra:t.falseName},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.audio(t.voiceUrl,t.wordID)}}},[n("v-uni-text",[e._v(e._s(t.chineseMeans))])],1)],1)],1)})),1):n("v-uni-view",[n("uni-card",{attrs:{title:"info"}},[n("v-uni-text",[e._v("当前章节没有单词")])],1)],1)],1),n("uni-drawer",{ref:"showLeft",attrs:{mode:"left","mask-click":!0}},[n("v-uni-scroll-view",{staticClass:"sectionList",staticStyle:{height:"100%"},attrs:{"scroll-y":"true"}},[e.sectionLength>0?n("v-uni-view",{staticClass:"infoSection"},e._l(e.section,(function(t){return n("v-uni-view",{key:t.name,staticClass:"infoSectionSub",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.choiceSection(t.name)}}},[n("v-uni-text",{staticClass:"sectionButoon"},[e._v(e._s(t.name))])],1)})),1):n("v-uni-view",[n("v-uni-view",{staticClass:"infoSection"},[n("v-uni-view",{staticClass:"infoSectionSub"},[n("v-uni-text",[e._v("当前词书没有章节")])],1)],1)],1)],1)],1)],1)},r=[]},"40ff":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-card[data-v-6d06604a]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-6d06604a]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-6d06604a]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-6d06604a]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-6d06604a]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-6d06604a]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-6d06604a]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-6d06604a]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-6d06604a]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-6d06604a]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-6d06604a]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-6d06604a]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-6d06604a]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-6d06604a]{font-size:12px}.uni-card--border[data-v-6d06604a]{border:1px solid #ebeef5}.uni-card--shadow[data-v-6d06604a]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-6d06604a]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-6d06604a]:after{border-radius:0}.uni-ellipsis[data-v-6d06604a]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e.exports=t},"4cfc":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-drawer[data-v-f4afff28]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:999}.uni-drawer__content[data-v-f4afff28]{display:block;position:absolute;top:0;width:220px;bottom:0;background-color:#000;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.uni-drawer--left[data-v-f4afff28]{left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uni-drawer--right[data-v-f4afff28]{right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.uni-drawer__content--visible[data-v-f4afff28]{-webkit-transform:translateX(0);transform:translateX(0)}.uni-drawer__mask[data-v-f4afff28]{display:block;opacity:0;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.4);transition:opacity .3s}.uni-drawer__mask--visible[data-v-f4afff28]{display:block;opacity:1}',""]),e.exports=t},5992:function(e,t,n){"use strict";n.r(t);var a=n("3e6b"),i=n("ee7a");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("33d0");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"911a882a",null,!1,a["a"],o);t["default"]=s.exports},"60ef":function(e,t,n){"use strict";n("7a82");var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var i=a(n("8d97")),r={name:"UniDrawer",components:{keypress:i.default},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:function(){return{visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}},created:function(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear:function(){},close:function(e){("mask"!==e||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open:function(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change:function(e,t,n){var a=this;this[e]=n,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((function(){a[t]=n,a.$emit("change",n)}),n?50:300)}}};t.default=r},"8d97":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7db0"),n("d3b7"),n("b64b"),n("caad"),n("2532");var a={name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted:function(){var e=this,t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},n=function(n){if(!e.disable){var a=Object.keys(t).find((function(e){var a=n.key,i=t[e];return i===a||Array.isArray(i)&&i.includes(a)}));a&&setTimeout((function(){e.$emit(a,{})}),0)}};document.addEventListener("keyup",n)},render:function(){}};t.default=a},"94a3":function(e,t,n){"use strict";n.r(t);var a=n("60ef"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"956f":function(e,t,n){var a=n("9c22");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("5334d2fc",a,!0,{sourceMap:!1,shadowMode:!1})},"9c22":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".content[data-v-911a882a]{\n  /* background: #63639c; */position:fixed;\n  /* z-index: 0; */background-size:cover;left:0;right:0;\n  /* display: flex; */\n  /* flex-direction: column;\n  align-items: center;\n  justify-content: center; */background-color:#838282}.navigate[data-v-911a882a]{margin:%?20?%;display:flex;justify-content:flex-start;left:%?0?%;top:%?30?%;z-index:100}.choiceButton[data-v-911a882a]{margin:%?20?%;color:#f5f4f3}uni-text[data-v-911a882a]{font-size:%?36?%}.wordList[data-v-911a882a]{background-color:#838282}.sectionList[data-v-911a882a]{background-color:#838282;margin:%?10?%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.infoSection[data-v-911a882a]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.sectionButoon[data-v-911a882a]{\n\t/* background-color: antiquewhite; */width:100%;margin:%?10?%}.infoSectionSub[data-v-911a882a]{display:flex;margin:%?10?%;border-style:solid;border-width:0 0 %?10?% %?0?%;border-color:#2f4444;width:100%;text-align:center}",""]),e.exports=t},c850:function(e,t,n){"use strict";n.r(t);var a=n("f82c"),i=n("94a3");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("2727");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"f4afff28",null,!1,a["a"],o);t["default"]=s.exports},ce30:function(e,t,n){"use strict";n.r(t);var a=n("f5cd"),i=n("eaca");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("f20e");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"6d06604a",null,!1,a["a"],o);t["default"]=s.exports},eaca:function(e,t,n){"use strict";n.r(t);var a=n("eb74"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},eb74:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}};t.default=a},ee7a:function(e,t,n){"use strict";n.r(t);var a=n("3344"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f20e:function(e,t,n){"use strict";var a=n("25c4"),i=n.n(a);i.a},f5cd:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?n("v-uni-view",{staticClass:"uni-card__cover"},[n("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?n("v-uni-view",{staticClass:"uni-card__header"},[n("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("title")}}},[e.thumbnail?n("v-uni-view",{staticClass:"uni-card__header-avatar"},[n("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),n("v-uni-view",{staticClass:"uni-card__header-content"},[n("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?n("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),n("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("extra")}}},[n("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])],1)],1):e._e()]),n("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("content")}}},[e._t("default")],2),n("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick("actions")}}},[e._t("actions")],2)],2)},r=[]},f82c:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visibleSync?n("v-uni-view",{staticClass:"uni-drawer",class:{"uni-drawer--visible":e.showDrawer},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-drawer__mask",class:{"uni-drawer__mask--visible":e.showDrawer&&e.mask},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close("mask")}}}),n("v-uni-view",{staticClass:"uni-drawer__content",class:{"uni-drawer--right":e.rightMode,"uni-drawer--left":!e.rightMode,"uni-drawer__content--visible":e.showDrawer},style:{width:e.drawerWidth+"px"}},[e._t("default")],2),n("keypress",{on:{esc:function(t){arguments[0]=t=e.$handleEvent(t),e.close("mask")}}})],1):e._e()},r=[]}}]);