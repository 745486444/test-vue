import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({showSpinner: false});

Vue.use(VueRouter);
// 所有的路由数组
const routerList = [];

// 该函数用于将所有分区路由中的路由添加到路由数组
function importAll(routerArr) {
    routerArr.keys().forEach(key => {
        routerList.push(routerArr(key).default)
    })
}

//检测routers文件下以.routes.js结尾的文件
//第一个参数目标文件夹
// 第二个参数是否查找子集 true | false
//第三个是正则表达式
importAll(require.context("./modules", true, /\.routes\.js/));

const routes = [
    ...routerList
];

const router = new VueRouter({
    routes
});

//进入启动进度条
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

//打开后关闭进度条
router.afterEach(() => {
    NProgress.done();
});
export default router;
