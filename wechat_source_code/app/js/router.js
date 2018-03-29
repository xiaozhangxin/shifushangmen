var url ="http://wx.shifuhelp.com/";
// var url ="http://aksd.qubaotang.cn/";
/*定义路由*/
var app=angular.module("app",['ng','ngRoute','ngCookies',"ngTouch","ngAnimate"]);
app.config(function($routeProvider,$locationProvider){
	$routeProvider
	/*****************************首页start*********************************/

	    /*首页界面*/
	.when("/",{
		templateUrl:"app/views/main/main.html",
		controller:"main"
	})
		/*首页界面*/
	.when("/main",{
		templateUrl:"app/views/main/main.html",
		controller:"main"
	})
		/*用户协议*/
	.when("/agreement",{
		templateUrl:"app/views/main/agreement.html",
		controller:"agreement"
	})
		/*水电安装*/
	.when("/hydropower",{
		templateUrl:"app/views/main/hydropower.html",
		controller:"hydropower"
	})
		/*其他选项详情*/
	.when("/hydropowerInfo",{
		templateUrl:"app/views/main/hydropowerInfo.html",
		controller:"hydropowerInfo"
	})
		/*套餐详情*/
	.when("/package",{
		templateUrl:"app/views/main/package.html",
		controller:"package"
	})
		/*填写预约信息*/
	.when("/pre",{
		templateUrl:"app/views/main/pre.html",
		controller:"pre"
	})
		/*填写预约信息(维修)*/
	.when("/preRepair",{
		templateUrl:"app/views/main/preRepair.html",
		controller:"preRepair"
	})
	
	/*****************************首页end*********************************/

	/*****************************个人中心start*********************************/

	    /*收货地址*/
	.when("/addressList",{
		templateUrl:"app/views/me/addressList.html",
		controller:"addressList"
	})
		/*新增地址*/
	.when("/addressNew",{
		templateUrl:"app/views/me/addressNew.html",
		controller:"addressNew"
	})
		/*绑定手机*/
	.when("/bindMobile",{
		templateUrl:"app/views/me/bindMobile.html",
		controller:"bindMobile"
	})
		/*更换手机*/
	.when("/updataMobile",{
		templateUrl:"app/views/me/updataMobile.html",
		controller:"updataMobile"
	})
		/*我的收藏*/
	.when("/collectionList",{
		templateUrl:"app/views/me/collectionList.html",
		controller:"collectionList"
	})
		/*我的优惠券*/
	.when("/couponList",{
		templateUrl:"app/views/me/couponList.html",
		controller:"couponList"
	})
		/*订单消息*/
	.when("/ddNews",{
		templateUrl:"app/views/me/ddNews.html",
		controller:"ddNews"
	})
		/*系统消息*/
	.when("/xtNews",{
		templateUrl:"app/views/me/xtNews.html",
		controller:"xtNews"
	})
		/*消息*/
	.when("/newsList",{
		templateUrl:"app/views/me/newsList.html",
		controller:"newsList"
	})
		/*个人中心*/
	.when("/personalCenter",{
		templateUrl:"app/views/me/personalCenter.html",
		controller:"personalCenter"
	})
		/*我的积分*/
	.when("/pointsList",{
		templateUrl:"app/views/me/pointsList.html",
		controller:"pointsList"
	})
		/*设置*/
	.when("/setUp",{
		templateUrl:"app/views/me/setUp.html",
		controller:"setUp"
	})
		/*订单列表*/
	.when("/order",{
		templateUrl:"app/views/me/order.html",
		controller:"order"
	})
		/*订单详情*/
	.when("/orderInfo",{
		templateUrl:"app/views/me/orderInfo.html",
		controller:"orderInfo"
	})
		/*订单退款*/
	.when("/orderRefund",{
		templateUrl:"app/views/me/orderRefund.html",
		controller:"orderRefund"
	})
		/*订单退款物流*/
	.when("/orderLogistics",{
		templateUrl:"app/views/me/orderLogistics.html",
		controller:"orderLogistics"
	})
		/*售后详情*/
	.when("/shInfo",{
		templateUrl:"app/views/me/shInfo.html",
		controller:"shInfo"
	})
		/*售后列表*/
	.when("/shList",{
		templateUrl:"app/views/me/shList.html",
		controller:"shList"
	})
		/*退货填写物流*/
	.when("/shLogistics",{
		templateUrl:"app/views/me/shLogistics.html",
		controller:"shLogistics"
	})
		/*退货物流追踪*/
	.when("/shLogisticsInfo",{
		templateUrl:"app/views/me/shLogisticsInfo.html",
		controller:"shLogisticsInfo"
	})
		/*订单评价*/
	.when("/orderEvaluate",{
		templateUrl:"app/views/me/orderEvaluate.html",
		controller:"orderEvaluate"
	})
		/*签到成功*/
	.when("/feedback",{
		templateUrl:"app/views/me/feedback.html",
		controller:"feedback"
	})
		/*个人资料*/
	.when("/userData",{
		templateUrl:"app/views/me/userData.html",
		controller:"userData"
	})
	/*****************************个人中心end*********************************/

	/****************************我的预约start*********************************/

	    /*预约列表*/
	.when("/pendingAudit",{
		templateUrl:"app/views/myReservation/pendingAudit.html",
		controller:"pendingAudit"
	})
		/*预约详情*/
	.when("/reservationDetails1",{
		templateUrl:"app/views/myReservation/reservationDetails1.html",
		controller:"reservationDetails1"
	})
	
	/*****************************我的预约end*********************************/
	/****************************商城start*********************************/

	    /*商城*/
	.when("/shopping",{
		templateUrl:"app/views/shopping/shopping.html",
		controller:"shopping"
	})
	
	/*****************************商城end*********************************/

 	.otherwise({
        redirectTo: "/"
    })
})