// router.js
import { RouterMount, createRouter } from "uni-simple-router";

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES],
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  if (getApp().globalData.userID < 0 && to.path.indexOf("login") < 0) {
    console.log("用户未登录！！！");
    next({ path: "/pages/login/login", NAVTYPE: "replaceAll" });
  } else {
    console.log("用户已经登录！！！");
    next();
  }
// next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log("跳转结束");
});

export { router, RouterMount };
