(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-password"],{"225d":function(e,t,a){"use strict";a.r(t);var n=a("7100"),o=a("52a7");for(var i in o)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("6a01");var s,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"5aeee069",null,!1,n["a"],s);t["default"]=u.exports},"52a7":function(e,t,a){"use strict";a.r(t);var n=a("f2ba"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"6a01":function(e,t,a){"use strict";var n=a("b1e8"),o=a.n(n);o.a},"6ef4":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".image-bg[data-v-5aeee069]{position:absolute;z-index:-1;left:0;right:0;bottom:0;right:0;width:100%;height:100%}.navigate[data-v-5aeee069]{margin:%?20?%;position:absolute;left:%?0?%;top:%?30?%;z-index:100}.content[data-v-5aeee069]{\r\n  /* background-color: rgb(58, 57, 57); */background-size:100% 100%;width:100%;height:800px;flex-direction:column;display:flex;justify-content:center;align-items:center\r\n  /* justify-items: center; */\r\n  /* color: rgb(59, 58, 58); */}.formView[data-v-5aeee069]{\r\n  /* background-color: bisque; */width:100%;margin:%?10?%}.xvhua[data-v-5aeee069]{position:absolute;z-index:-1;background-color:#b3b2b2;-webkit-filter:blur(5px);filter:blur(5px);opacity:.8;width:96%;height:35vh;left:%?0?%;margin:2%;box-shadow:%?2?%}",""]),e.exports=t},7100:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("1a49").default,uniForms:a("2cf2").default,uniFormsItem:a("11e2").default,uniEasyinput:a("dc3b").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content",style:{height:e.appHeight+"rpx"}},[a("v-uni-image",{staticClass:"image-bg",attrs:{src:e.bkurl}}),a("v-uni-view",{staticClass:"navigate"},[a("uni-icons",{attrs:{type:"left",color:"",size:"50rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back()}}})],1),a("v-uni-view",{style:{height:.1*e.appHeight+"rpx"}}),a("v-uni-view",[a("v-uni-view",{staticClass:"formView"},[a("v-uni-view",{staticClass:"xvhua",style:{top:.3*e.appHeight+"rpx"}}),a("uni-forms",{ref:"form",attrs:{modelValue:e.formData,rules:e.rules}},[a("uni-forms-item",{attrs:{label:"用户名",name:"username",required:!0}},[a("uni-easyinput",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),a("uni-forms-item",{attrs:{label:"密码",name:"password",required:!0}},[a("uni-easyinput",{attrs:{type:"text",placeholder:"请输入密码"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1)],1),a("v-uni-view",{staticClass:"buttonview"},[a("v-uni-button",{staticStyle:{border:"0px"},attrs:{plain:"true"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)],1)],1)},i=[]},b1e8:function(e,t,a){var n=a("6ef4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("353c5510",n,!0,{sourceMap:!1,shadowMode:!1})},f2ba:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{appHeight:0,formData:{username:"username",password:"password"},rules:{username:{rules:[{required:!0,errorMessage:"请输入用户名姓名"},{minLength:3,maxLength:25,errorMessage:"姓名长度在 {minLength} 到 {maxLength} 个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入密码"},{minLength:6,maxLength:25,errorMessage:"密码长度在 {minLength} 到 {maxLength} 个字符"}]}}}},onLoad:function(e){var t=this;this.bkurl=getApp().globalData.bkurl,uni.getSystemInfo({success:function(e){console.log("手机可用高度:"+2*e.windowHeight+"rpx"),t.appHeight=2*e.windowHeight}})},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{back:function(){uni.redirectTo({url:"/pages/login/login"})},submit:function(){this.$refs.form.validate().then((function(e){console.log("表单数据信息：",e),console.log(getApp().globalData.api_passwordLogin),uni.request({url:getApp().globalData.api_passwordLogin,data:{username:e.username,password:e.password},header:{Accept:"application/json","Content-Type":"application/json"},method:"GET",success:function(e){var t=e.data;e.statusCode,e.header;console.log(t),200==t.status?(getApp().globalData.userID=t.response,uni.navigateTo({url:"/pages/index/index",successs:function(){console.log("跳转到主页成功")},fail:function(){console.log("跳转到主页失败")}})):400==t.status&&(uni.showToast({title:"用户名密码错误，请重新输入",icon:"none",mask:!0}),console.log("用户名密码错误，请重新登录"))},fail:function(e){uni.showToast({title:"登录失败，请重新登录",icon:"none",mask:!0}),console.log("登录失败，请重新登录; "+e)}})})).catch((function(e){console.log("表单错误信息：",e)}))}}};t.default=n}}]);