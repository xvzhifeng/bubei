(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-learn-main"],{"0568":function(t,e,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=d,n("caad"),n("2532"),n("99af"),n("d3b7"),n("159b");var a=i(n("5530")),o=i(n("d4ec")),s=i(n("bee2")),r=function(){function t(e,n){(0,o.default)(this,t),this.options=e,this.animation=uni.createAnimation(e),this.currentStepAnimates={},this.next=0,this.$=n}return(0,s.default)(t,[{key:"_nvuePushAnimates",value:function(t,e){var n=this.currentStepAnimates[this.next],i={};if(i=n||{styles:{},config:{}},c.includes(t)){i.styles.transform||(i.styles.transform="");var a="";"rotate"===t&&(a="deg"),i.styles.transform+="".concat(t,"(").concat(e+a,") ")}else i.styles[t]="".concat(e);this.currentStepAnimates[this.next]=i}},{key:"_animateRun",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.$.$refs["ani"].ref;if(n)return new Promise((function(i,o){nvueAnimation.transition(n,(0,a.default)({styles:t},e),(function(t){i()}))}))}},{key:"_nvueNextAnimate",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,a=t[n];if(a){var o=a.styles,s=a.config;this._animateRun(o,s).then((function(){n+=1,e._nvueNextAnimate(t,n,i)}))}else this.currentStepAnimates={},"function"===typeof i&&i(),this.isEnd=!0}},{key:"step",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.animation.step(t),this}},{key:"run",value:function(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((function(){"function"===typeof t&&t()}),this.$.durationTime)}}]),t}(),c=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"],l=["opacity","backgroundColor"],u=["width","height","left","right","top","bottom"];function d(t,e){if(e)return clearTimeout(e.timer),new r(t,e)}c.concat(l,u).forEach((function(t){r.prototype[t]=function(){var e;return(e=this.animation)[t].apply(e,arguments),this}}))},"082a":function(t,e,n){var i=n("21bf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("74618f2f",i,!0,{sourceMap:!1,shadowMode:!1})},"1c11":function(t,e,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),o=i(n("53ca")),s=i(n("5530"));n("a9e3"),n("d3b7"),n("159b"),n("99af"),n("ac1f"),n("5319");var r=n("0568"),c={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:function(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}},customClass:{type:String,default:""}},data:function(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler:function(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,s.default)((0,s.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){var i=this.toLine(n);e+=i+":"+t[n]+";"}return e},transformStyles:function(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created:function(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.duration&&(this.durationTime=t.duration),this.animation=(0,r.createAnimation)(Object.assign(this.config,t),this)},onClick:function(){this.$emit("click",{detail:this.isShow})},step:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.animation){for(var n in t)try{var i;if("object"===(0,o.default)(t[n]))(i=this.animation)[n].apply(i,(0,a.default)(t[n]));else this.animation[n](t[n])}catch(s){console.error("方法 ".concat(n," 不存在"))}return this.animation.step(e),this}},run:function(t){this.animation&&this.animation.run(t)},open:function(){var t=this;clearTimeout(this.timer),this.transform="",this.isShow=!0;var e=this.styleInit(!1),n=e.opacity,i=e.transform;"undefined"!==typeof n&&(this.opacity=n),this.transform=i,this.$nextTick((function(){t.timer=setTimeout((function(){t.animation=(0,r.createAnimation)(t.config,t),t.tranfromInit(!1).step(),t.animation.run(),t.$emit("change",{detail:t.isShow})}),20)}))},close:function(t){var e=this;this.animation&&this.tranfromInit(!0).step().run((function(){e.isShow=!1,e.animationData=null,e.animation=null;var t=e.styleInit(!1),n=t.opacity,i=t.transform;e.opacity=n||1,e.transform=i,e.$emit("change",{detail:e.isShow})}))},styleInit:function(t){var e=this,n={transform:""},i=function(t,i){"fade"===i?n.opacity=e.animationType(t)[i]:n.transform+=e.animationType(t)[i]+" "};return"string"===typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((function(e){i(t,e)})),n},tranfromInit:function(t){var e=this,n=function(t,n){var i=null;"fade"===n?i=t?0:1:(i=t?"-100%":"0","zoom-in"===n&&(i=t?.8:1),"zoom-out"===n&&(i=t?1.2:1),"slide-right"===n&&(i=t?"100%":"0"),"slide-bottom"===n&&(i=t?"100%":"0")),e.animation[e.animationMode()[n]](i)};return"string"===typeof this.modeClass?n(t,this.modeClass):this.modeClass.forEach((function(e){n(t,e)})),this.animation},animationType:function(t){return{fade:t?1:0,"slide-top":"translateY(".concat(t?"0":"-100%",")"),"slide-right":"translateX(".concat(t?"0":"100%",")"),"slide-bottom":"translateY(".concat(t?"0":"100%",")"),"slide-left":"translateX(".concat(t?"0":"-100%",")"),"zoom-in":"scaleX(".concat(t?1:.8,") scaleY(").concat(t?1:.8,")"),"zoom-out":"scaleX(".concat(t?1:1.2,") scaleY(").concat(t?1:1.2,")")}},animationMode:function(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=c},"21bf":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".image-bg[data-v-9772b816]{position:absolute;z-index:-1;left:0;right:0;bottom:0;right:0;width:100%;height:100%;\r\n  /* opacity: 0.3; */-webkit-filter:blur(10px);filter:blur(10px)}.content[data-v-9772b816]{\r\n  /* background: linear-gradient(to top, rgba(65, 63, 63, 0), rgb(16, 17, 17)); */background-size:cover;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:%?36?%}.navigate[data-v-9772b816]{margin:%?20?%;position:absolute;left:%?0?%;top:%?30?%}.wordView[data-v-9772b816]{position:absolute;margin:%?20?%;left:%?60?%;top:%?120?%}.wordViewSize[data-v-9772b816]{height:%?200?%;width:%?750?%}.wordName[data-v-9772b816]{font-size:%?36?%;color:#f0f8ff}.wordVoice[data-v-9772b816]{font-size:%?30?%;color:#060b0f;margin:2%}.wordMeans[data-v-9772b816]{font-size:%?36?%;color:#f0f8ff;margin:%?10?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.wordMeansDetail[data-v-9772b816]{font-size:%?34?%;color:#f0f8ff}.wordPopup[data-v-9772b816]{position:fixed;top:%?300?%;left:20%;color:azure}.optionXvhua[data-v-9772b816]{position:absolute;background-color:hsla(0,0%,56.1%,.651);width:%?560?%;height:%?100?%;border-radius:%?20?%;box-shadow:2px 2px 2px #b3aeae}.optionText[data-v-9772b816]{width:%?560?%;height:%?100?%;border-radius:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wordOptions[data-v-9772b816]{width:%?600?%;display:flex;flex-direction:column;justify-content:center;\r\n  /* left: 75rpx;\r\n  bottom: 200rpx; */border-radius:%?10?%}.wordOption[data-v-9772b816]{margin:%?20?%;border-radius:%?20?%}.lookAnster[data-v-9772b816]{color:#d3b11c;display:flex;bottom:%?50?%;width:90%;justify-content:center;margin:5%}.lookAnsterDetail[data-v-9772b816]{color:#d3b11c;display:flex;bottom:%?50?%;width:90%;justify-content:center;margin:5%\r\n  /* position: absolute; */}.lookAnsterText[data-v-9772b816]{width:%?150?%;text-align:center;font-size:%?36?%}.wordDetail[data-v-9772b816]{width:%?750?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.sentenceAndPhrase[data-v-9772b816]{display:flex;justify-content:center;flex-direction:column}.sentence[data-v-9772b816]{\r\n  /* background-color: rgb(211, 177, 28); */height:%?200?%;margin:%?20?%;\r\n  /* width: 300rpx; */\r\n  /* background-color: bisque; */border-radius:%?20?%;display:flex;flex-direction:column\r\n  /* flex-direction: column; */\r\n  /* justify-self: center; */\r\n  /* justify-content: flex-start; */\r\n  /* opacity: 0.8; */}.sentenceXvhua[data-v-9772b816]{background-color:hsla(0,0%,56.1%,.651);\r\n  /* height: 160rpx; */margin:%?20?%;border-radius:%?20?%;position:absolute;z-index:-1;width:%?690?%;\r\n  /* filter: blur(2px); */opacity:.7}.sentenceName[data-v-9772b816]{\r\n  /* position: absolute; */margin:%?40?% %?60?% %?0?%}.sentenceMean[data-v-9772b816]{\r\n  /* position: absolute; */\r\n  /* top: 20rpx; */margin:%?20?% %?60?% %?0?%}.grammarXvhua[data-v-9772b816]{background-color:hsla(0,0%,56.1%,.651);\r\n  /* height: 160rpx; */margin:%?20?%;border-radius:%?20?%;position:absolute;z-index:-1;width:%?690?%;\r\n  /* filter: blur(2px); */opacity:.7}.grammar[data-v-9772b816]{\r\n  /* background-color: rgb(211, 177, 28); */height:%?550?%;margin:%?20?%;border-radius:%?20?%;display:flex;flex-direction:column}.phraseView[data-v-9772b816]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:8;overflow:hidden}.grammarList[data-v-9772b816]{margin:%?20?% %?60?% %?0?%}.bottomView[data-v-9772b816]{display:flex;\r\n  /* position: absolute; */bottom:%?20?%;margin:%?20?%;\r\n  /* align-items: center; */justify-content:center\r\n  /* left: 20rpx; */}.knowButton[data-v-9772b816]{width:%?320?%;text-align:center;height:%?100?%;margin:%?20?%;border:%?0?%}.buttonNoBorder[data-v-9772b816]{border:%?0?%}.button-hover[data-v-9772b816]{background-color:hsla(0,0%,56.1%,.651)}.lookSentenceMeans[data-v-9772b816]{display:flex;flex-direction:column;text-align:center}.pageDetailMain[data-v-9772b816]{display:flex;width:100%;height:100%;flex-direction:column;align-content:center;margin-top:%?120?%}.navagateDetail[data-v-9772b816]{display:flex\r\n  /* height: 5%; */}.wordViewDetail[data-v-9772b816]{width:90%;margin:%?30?%;padding-left:%?20?%;display:flex;flex-direction:column;align-items:flex-start;align-self:flex-start}.sentenceAndPhraseDetail[data-v-9772b816]{display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;flex-shrink:1}.buttonDetail[data-v-9772b816]{display:flex;flex-direction:column;align-items:center;align-self:center;margin-top:%?20?%}",""]),t.exports=e},"27c0":function(t,e,n){"use strict";n.r(e);var i=n("e25a"),a=n("d4fa");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("846d");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2fa97a2c",null,!1,i["a"],s);e["default"]=c.exports},"305f":function(t,e,n){"use strict";n.r(e);var i=n("b13c"),a=n("eed1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("623f");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"9772b816",null,!1,i["a"],s);e["default"]=c.exports},"402d":function(t,e,n){"use strict";n.r(e);var i=n("b814"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"40a1":function(t,e,n){"use strict";n.r(e);var i=n("1c11"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"51fa":function(t,e,n){var i=n("f735");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("75d6fe72",i,!0,{sourceMap:!1,shadowMode:!1})},"5e7b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-badge--x"},[t._t("default"),t.text?n("v-uni-text",{staticClass:"uni-badge",class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},o=[]},"623f":function(t,e,n){"use strict";var i=n("082a"),a=n.n(i);a.a},"6a6a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-2fa97a2c]{position:fixed;z-index:99}.uni-popup.top[data-v-2fa97a2c], .uni-popup.left[data-v-2fa97a2c], .uni-popup.right[data-v-2fa97a2c]{top:var(--window-top)}.uni-popup .uni-popup__wrapper[data-v-2fa97a2c]{display:block;position:relative\n  /* iphonex 等安全区设置，底部安全区适配 */}.uni-popup .uni-popup__wrapper.left[data-v-2fa97a2c], .uni-popup .uni-popup__wrapper.right[data-v-2fa97a2c]{padding-top:var(--window-top);flex:1}.fixforpc-z-index[data-v-2fa97a2c]{z-index:999}.fixforpc-top[data-v-2fa97a2c]{top:0}',""]),t.exports=e},"846d":function(t,e,n){"use strict";var i=n("b8d3"),a=n.n(i);a.a},af3e:function(t,e,n){"use strict";n.r(e);var i=n("d7a4"),a=n("40a1");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"480785c3",null,!1,i["a"],s);e["default"]=c.exports},b13c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("1a49").default,uniBadge:n("ca23").default,uniPopup:n("27c0").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",style:{height:t.appHeight+"rpx"}},[n("v-uni-image",{staticClass:"image-bg",attrs:{src:t.backgroundUrl}}),n("v-uni-view",{staticClass:"navigate"},[n("uni-icons",{attrs:{type:"left",color:"",size:"50rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back()}}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pageShow[0],expression:"pageShow[0]"}],staticClass:"pageOptions"},[n("v-uni-view",{staticClass:"wordView",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.audio()}}},[n("v-uni-view",{staticClass:"wordName"},[n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].falseName))])],1),n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].japaneseMeans))]),n("uni-badge",{attrs:{text:t.currentCount,type:"warning",inverted:!0}})],1)],1),n("v-uni-view",{staticClass:"wordVoice"},[n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].voice))])],1)],1),n("v-uni-view",{staticClass:"wordOptions"},t._l(t.words[t.wordIndex].options,(function(e,i){return n("v-uni-view",{key:i,staticClass:"wordOption"},[n("v-uni-view",{staticClass:"optionXvhua"}),n("v-uni-button",{staticClass:"buttonNoBorder",attrs:{plain:"true"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.choice(e.japaneseMeans)}}},[n("v-uni-view",{staticClass:"optionText"},[n("v-uni-text",{staticClass:"optionText"},[t._v(t._s(e.chineseMeans.replace("\n","")))])],1)],1)],1)})),1),n("v-uni-view",{staticClass:"lookAnster"},[n("v-uni-view",{staticClass:"lookAnsterText",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookAnster()}}},[n("v-uni-view",[n("v-uni-text",[t._v("看答案")])],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pageShow[1],expression:"pageShow[1]"}],staticClass:"pageDetailMain"},[n("v-uni-view",{staticClass:"navagateDetail"}),n("v-uni-view",{staticClass:"wordViewDetail"},[n("v-uni-view",{staticClass:"wordName",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.audio()}}},[n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].falseName))])],1),n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].japaneseMeans))]),n("uni-badge",{attrs:{text:t.currentCount,type:"warning",inverted:!0}})],1)],1),n("v-uni-view",{staticClass:"wordVoice"},[n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].voice))])],1),n("v-uni-view",{staticClass:"wordMeansDetail"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v(t._s(t.words[t.wordIndex].chineseMeans))]),n("uni-popup",{ref:"popup",staticClass:"wordPopup",attrs:{type:"center",animation:!0}},[n("v-uni-view",[n("v-uni-text",{staticClass:"wordPopup"},[t._v(t._s(t.words[t.wordIndex].chineseMeans))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"sentenceAndPhraseDetail"},[n("v-uni-view",{staticClass:"wordDetail"},[n("v-uni-view",{staticClass:"sentence",style:{height:.18*t.appHeight+"rpx",width:"710rpx"}},[n("v-uni-view",{staticClass:"sentenceXvhua",style:{height:.18*t.appHeight+"rpx"}}),n("v-uni-view",{staticClass:"sentenceName"},[null!=t.words[t.wordIndex].sentence[0]?n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].sentence[0].japaneseMeans))]):t._e()],1),n("v-uni-view",{staticClass:"sentenceMean"},[null!=t.words[t.wordIndex].sentence[0]?n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].sentence[0].chineseMeans))]):t._e()],1)],1),n("v-uni-view",{staticClass:"grammar",attrs:{id:"grammar"}},[n("v-uni-view",{staticClass:"grammarXvhua",style:{height:.2*t.appHeight+"rpx",width:"690rpx"},attrs:{id:"grammarXvhua"}}),n("v-uni-scroll-view",{staticClass:"scroll-Y",style:{height:.2*t.appHeight+"rpx",width:"710rpx"},attrs:{"scroll-top":t.scrollTop,"scroll-y":"true","show-scrollbar":"false"},on:{scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.upper.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"phraseView"},t._l(t.words[t.wordIndex].phrase.slice(0,3),(function(e,i){return n("v-uni-view",{key:i,staticClass:"grammarList"},[t._v(t._s(e.japaneseMeans)+" "+t._s(e.chineseMeans))])})),1)],1),n("v-uni-view",{staticClass:"buttonDetail"},[n("v-uni-view",{staticClass:"lookAnsterDetail"},[n("v-uni-view",{staticClass:"lookAnsterText",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextWord()}}},[n("v-uni-view",[n("v-uni-text",[t._v("下一词")])],1)],1)],1)],1)],1)],1)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.pageShow[2],expression:"pageShow[2]"}],staticClass:"pagePart"},[n("v-uni-view",{staticClass:"wordView"},[n("v-uni-view",{staticClass:"wordName",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.audio()}}},[n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].falseName))])],1),n("v-uni-view",[n("v-uni-text",{staticClass:"wordName"},[t._v(t._s(t.words[t.wordIndex].japaneseMeans))]),n("uni-badge",{attrs:{text:t.currentCount,type:"warning",inverted:!0}})],1)],1),n("v-uni-view",{staticClass:"wordVoice"},[n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].voice))])],1)],1),n("v-uni-view",{staticClass:"wordDetail"},[n("v-uni-view",{staticClass:"wordViewSize",style:{height:.18*t.appHeight+"rpx"}}),n("v-uni-view",{staticClass:"sentenceXvhua",style:{height:.18*t.appHeight+"rpx"}}),n("v-uni-view",{staticClass:"sentence",style:{height:.18*t.appHeight+"rpx"}},[null!=t.words[t.wordIndex].sentence[0]?n("v-uni-view",{staticClass:"sentenceName"},[n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].sentence[0].japaneseMeans))])],1):t._e(),null!=t.words[t.wordIndex].sentence[0]?n("v-uni-view",{staticClass:"sentenceMean",attrs:{hidden:t.showSentenceMeansFlag}},[n("v-uni-text",[t._v(t._s(t.words[t.wordIndex].sentence[0].chineseMeans))])],1):t._e()],1),n("v-uni-view",{style:{height:.2*t.appHeight+"rpx"}})],1),n("v-uni-view",{staticClass:"lookSentenceMeans"},[n("uni-icons",{attrs:{type:"star",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSentenceMeans()}}}),n("v-uni-view",[n("v-uni-text",[t._v("查看例句译文")])],1)],1),n("v-uni-view",{staticClass:"bottomView"},[n("v-uni-view",{staticClass:"knowButton"},[n("v-uni-button",{staticClass:"buttonNoBorder",attrs:{"open-type":"","hover-class":"button-hover",plain:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.know()}}},[n("v-uni-text",[t._v("认识")])],1)],1),n("v-uni-view",{staticClass:"knowButton"},[n("v-uni-button",{staticClass:"buttonNoBorder",attrs:{"open-type":"","hover-class":"button-hover",plain:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.unknow()}}},[n("v-uni-text",[t._v("不认识")])],1)],1)],1)],1),n("v-uni-view")],1)},o=[]},b814:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type,n=this.size,i=this.absolute;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+n,i?"uni-badge--absolute":""].join(" ")},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var n="".concat(-t+this.offset[0],"px"),i="".concat(-e+this.offset[1],"px"),a={rightTop:{right:n,top:i},rightBottom:{right:n,bottom:i},leftBottom:{left:n,bottom:i},leftTop:{left:n,top:i}},o=a[this.absolute];return o||a["rightTop"]},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,n=this.maxNum;return t?"":Number(e)>n?"".concat(n,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},b8d3:function(t,e,n){var i=n("6a6a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("be29227e",i,!0,{sourceMap:!1,shadowMode:!1})},c53d:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7db0"),n("d3b7"),n("b64b"),n("caad"),n("2532");var i={name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted:function(){var t=this,e={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},n=function(n){if(!t.disable){var i=Object.keys(e).find((function(t){var i=n.key,a=e[t];return a===i||Array.isArray(a)&&a.includes(i)}));i&&setTimeout((function(){t.$emit(i,{})}),0)}};document.addEventListener("keyup",n)},render:function(){}};e.default=i},ca23:function(t,e,n){"use strict";n.r(e);var i=n("5e7b"),a=n("402d");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f501");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"63ab005f",null,!1,i["a"],s);e["default"]=c.exports},cb29:function(t,e,n){var i=n("23e7"),a=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:a}),o("fill")},d4fa:function(t,e,n){"use strict";n.r(e);var i=n("f5ac"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d7a4:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("v-uni-view",{ref:"ani",class:t.customClass,style:t.transformStyles,attrs:{animation:t.animationData},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[]},e25a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniTransition:n("af3e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle,t.isDesktop?"fixforpc-z-index":""],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("v-uni-view",{on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)}}},[t.maskShow?n("uni-transition",{key:"1",attrs:{name:"mask","mode-class":"fade",styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}):t._e(),n("uni-transition",{key:"2",attrs:{"mode-class":t.ani,name:"content",styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.popupstyle],style:{backgroundColor:t.bg},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1),t.maskShow?n("keypress",{on:{esc:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}):t._e()],1):t._e()},o=[]},e359:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("cb29"),n("a434");var i={data:function(){return{backgroundUrl:"/static/temp/index.jpg",appHeight:0,nextText:!0,pageShow:[!1,!1,!1],showSentenceMeansFlag:!0,wordIndex:0,wordLength:0,currentCount:1,study:!1,reviwe:[],words:[{japaneseMeans:"hello1",chineseMeans:"你好",voice:"nihao",count:0,options:[{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"hello1"}],sentence:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"}],phrase:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"},{japaneseMeans:"hi",chineseMeans:"你好"},{japaneseMeans:"hello,bye",chineseMeans:"你好，再见"}]},{japaneseMeans:"hello2",chineseMeans:"你好",voice:"nihao",count:0,options:[{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"hello2"}],sentence:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"}],phrase:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"},{japaneseMeans:"hi",chineseMeans:"你好"},{japaneseMeans:"hello,bye",chineseMeans:"你好，再见"}]},{japaneseMeans:"hello3",means:"你好",voice:"nihao",count:0,options:[{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"word1"},{japaneseMeans:"hello3"}],sentence:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"}],phrase:[{japaneseMeans:"hello world",chineseMeans:"你好，世界"},{japaneseMeans:"hi",chineseMeans:"你好"},{japaneseMeans:"hello,bye",chineseMeans:"你好，再见"}]}]}},onReady:function(){},onLoad:function(t){var e=this;console.log(getApp().globalData.userID),console.log(getApp().globalData.userEmail),1==t.study?(this.study=!0,uni.request({url:getApp().globalData.api_getNotStudyWords,data:{userID:getApp().globalData.userID,email:getApp().globalData.userEmail,size:10,current:1},method:"GET",header:{"content-type":"application/json"},success:function(t){var n=t.data;t.statusCode,t.header;console.log(e.words),console.log(n),e.words=n.response,e.wordLength=e.words.length,e.reviwe=new Array(e.wordLength),e.reviwe.fill(!1),console.log(e.words),e.changeShow()},fail:function(t){alert(t.message)}})):2==t.study&&(this.study=!1,uni.request({url:getApp().globalData.api_getStudyWords,data:{userID:getApp().globalData.userID,email:getApp().globalData.userEmail,size:10,current:1},method:"GET",header:{"content-type":"application/json"},success:function(t){var n=t.data;t.statusCode,t.header;console.log(e.words),console.log(n),e.words=n.response,e.wordLength=e.words.length,e.reviwe=new Array(e.wordLength),e.reviwe.fill(!0),console.log(e.words),e.changeShow()},fail:function(t){alert(t.message)}})),uni.getSystemInfo({success:function(t){e.appHeight=2*t.windowHeight},fail:function(t){console.log("user: ".concat(t))}})},methods:{changeShow:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];console.log(this.reviwe),this.showSentenceMeansFlag=!0,this.currentCount=this.words[this.wordIndex].count,console.log("changeShow :"+this.wordIndex),this.pageShow.fill(!1),t?this.$set(this.pageShow,1,!0):this.reviwe[this.wordIndex]?this.$set(this.pageShow,2,!0):0==this.words[this.wordIndex].count||null==this.words[this.wordIndex].count?(this.words[this.wordIndex].count=0,this.$set(this.pageShow,0,!0)):this.$set(this.pageShow,2,!0),console.log(this.pageShow)},open:function(){this.$refs.popup.open("top")},close:function(){this.$refs.popup.close()},back:function(){uni.navigateTo({url:"/pages/index/index",success:function(){console.log("success goto index/index page")}})},next:function(){this.nextText=!this.nextText},options:function(t){console.log(t)},showSentenceMeans:function(){this.showSentenceMeansFlag=!this.showSentenceMeansFlag},lookAnster:function(){this.words[this.wordIndex].count=0,console.log(this.pageShow),this.changeShow(!0)},add:function(t){uni.request({url:t,data:{userID:getApp().globalData.userID,wordID:this.words[this.wordIndex].wordID,isStudy:this.words[this.wordIndex].count},header:{Accept:"application/json","Content-Type":"application/json"},method:"GET",sslVerify:!0,success:function(t){var e=t.data;t.statusCode,t.header;console.log(e.message)},fail:function(t){console.log("学习记录添加失败")}})},nextWord:function(){if((this.currentCount>=3&&this.study||!this.study&&this.currentCount>=1&&this.reviwe[this.wordIndex]||!this.study&&this.currentCount>=3&&!this.reviwe[this.wordIndex])&&(this.study||!this.reviwe[this.wordIndex]?this.add(getApp().globalData.api_addStudyRecord):this.add(getApp().globalData.api_updateStudyRecord),this.words.splice(this.wordIndex,1),this.reviwe.splice(this.wordIndex,1)),0==this.words.length)return uni.showToast({title:"当前单词学习完了",icon:"success",mask:!0}),void uni.redirectTo({url:"/pages/index/index",success:function(){console.log("success goto index/index page")}});console.log(this.words),this.wordIndex=(this.wordIndex+1)%this.words.length,console.log(this.wordIndex),this.changeShow(),this.audio()},audio:function(){var t=this;console.log(this.words[this.wordIndex].japaneseMeans),console.log(this.words[this.wordIndex].voiceUrl),uni.request({url:getApp().globalData.api_getMp3,data:{url:this.words[this.wordIndex].voiceUrl,name:this.words[this.wordIndex].wordID},header:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},method:"GET",success:function(e){var n=e.data;e.statusCode,e.header;console.log(t.words[t.wordIndex]),console.log("开始播放"+n);var i=uni.createInnerAudioContext();i.autoplay=!0,i.src=n,i.play(),i.onPlay((function(){console.log("开始播放")})),i.onError((function(t){console.log(t),console.log(t.errMsg),console.log(t.errCode)}))},fail:function(t){}})},know:function(){this.words[this.wordIndex].count+=1,this.changeShow(!0)},unknow:function(){this.words[this.wordIndex].count=0,this.changeShow(!0)},choice:function(t){t==this.words[this.wordIndex].japaneseMeans?this.words[this.wordIndex].count++:(this.words[this.wordIndex].count=0,this.reviwe[this.wordIndex]=!1,uni.showToast({title:"单词选择错误",icon:"faild",mask:!0})),this.changeShow(!0)}}};e.default=i},eed1:function(t,e,n){"use strict";n.r(e);var i=n("e359"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f501:function(t,e,n){"use strict";var i=n("51fa"),a=n.n(i);a.a},f5ac:function(t,e,n){"use strict";n("7a82");var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975");var a=i(n("c53d")),o={name:"uniPopup",components:{keypress:a.default},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup:function(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop:function(){return this.popupWidth>=500&&this.popupHeight>=500},bg:function(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted:function(){var t=this,e=function(){var e=uni.getSystemInfoSync(),n=e.windowWidth,i=e.windowHeight,a=e.windowTop,o=e.safeArea,s=(e.screenHeight,e.safeAreaInsets);t.popupWidth=n,t.popupHeight=i+a,t.safeAreaInsets=o?s.bottom:0};e()},created:function(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{closeMask:function(){this.maskShow=!1},disableMask:function(){this.mkclick=!1},clear:function(t){t.stopPropagation(),this.clearPropagation=!0},open:function(t){var e=["top","center","bottom","left","right","message","dialog","share"];t&&-1!==e.indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close:function(t){var e=this;this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((function(){e.showPopup=!1}),300)},touchstart:function(){this.clearPropagation=!1},onTap:function(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top:function(t){var e=this;this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((function(){e.messageChild&&"message"===e.type&&e.messageChild.timerClose()})))},bottom:function(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center:function(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left:function(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right:function(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}};e.default=o},f735:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-badge--x[data-v-63ab005f]{display:inline-block;position:relative}.uni-badge--absolute[data-v-63ab005f]{position:absolute}.uni-badge--small[data-v-63ab005f]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.uni-badge[data-v-63ab005f]{display:flex;overflow:hidden;box-sizing:border-box;justify-content:center;flex-direction:row;height:20px;line-height:18px;color:#fff;border-radius:100px;background-color:#909399;background-color:initial;border:1px solid #fff;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;z-index:999;cursor:pointer}.uni-badge--info[data-v-63ab005f]{color:#fff;background-color:#909399}.uni-badge--primary[data-v-63ab005f]{background-color:#2979ff}.uni-badge--success[data-v-63ab005f]{background-color:#4cd964}.uni-badge--warning[data-v-63ab005f]{background-color:#f0ad4e}.uni-badge--error[data-v-63ab005f]{background-color:#dd524d}.uni-badge--inverted[data-v-63ab005f]{padding:0 5px 0 0;color:#909399}.uni-badge--info-inverted[data-v-63ab005f]{color:#909399;background-color:initial}.uni-badge--primary-inverted[data-v-63ab005f]{color:#2979ff;background-color:initial}.uni-badge--success-inverted[data-v-63ab005f]{color:#4cd964;background-color:initial}.uni-badge--warning-inverted[data-v-63ab005f]{color:#f0ad4e;background-color:initial}.uni-badge--error-inverted[data-v-63ab005f]{color:#dd524d;background-color:initial}',""]),t.exports=e}}]);