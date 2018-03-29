var app=angular.module('app',['ng', 'ngRoute', 'ngAnimate','ngTouch','ngCookies','me-lazyload'])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:"ncp/html/home.html",
                controller:"index"
            })
            .when("/home",{
                templateUrl:"ncp/html/home.html",
                controller:"index"
            })
            .when("/cart",{
                templateUrl:"ncp/html/cart.html",
                controller:"cart"
            })
            .when("/confirm_order",{
                templateUrl:"ncp/html/confirm_order.html",
                controller:"confirm_order"
            })
            .when("/pay_order",{
                templateUrl:"ncp/html/pay_order.html",
                controller:"pay_order"
            })
            .when("/pay_finish",{
                templateUrl:"ncp/html/pay_finish.html",
                controller:"pay_finish"
            })
            .when("/search",{
                templateUrl:"ncp/html/search.html",
                controller:"search"
            })
            .when("/search_goods",{
                templateUrl:"ncp/html/search_shopping.html",
                controller:"search_goods"
            })
            .when("/search_store",{
                templateUrl:"ncp/html/search_store.html",
                controller:"search_store"
            })
            .when("/goods_detail",{
                templateUrl:"ncp/html/goods_detail.html",
                controller:"goods_detail"
            })
            .when("/goodsList",{
                templateUrl:"ncp/html/goodsList.html",
                controller:"goodsList"
            })
            .when("/store_goodslist",{
                templateUrl:"ncp/html/store_goodslist.html",
                controller:"store_goodslist"
            })
            .when("/goodsnav",{
                templateUrl:"ncp/html/goodsnav_list.html",
                controller:"goodsnav"
            })
            .when("/store_detail",{
                templateUrl:"ncp/html/store_detail.html",
                controller:"store_detail"
            })
            .when("/view_aptitude",{
                templateUrl:"ncp/html/view_aptitude.html",
                controller:"view_aptitude"
            })
            .when("/address_manage",{
                templateUrl:"ncp/html/address_manage.html",
                controller:"address_manage"
            })
            .when("/share_app",{
                templateUrl:"ncp/html/share_app.html",
                controller:"share_app"
            })
            .when("/share_store",{
                templateUrl:"ncp/html/share_store.html",
                controller:"share_store"
            })
            .when("/pinglun_good",{ // 评论列表
                templateUrl:"ncp/html/pinglun_good.html",
                controller:"pinglun_good"
            })
            .otherwise({
                redirectTo: "/"
            })
    })