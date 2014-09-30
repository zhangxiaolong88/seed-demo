'use strict';

define([],function(){
	var controllersObj = {};
	controllersObj.tablesController = ['$scope',function($scope){
		//数据表格
		$scope.tableData = {
			headers: [{
				name: "#",
				sort: false,
			}, {
				name: "注册人数",
				sort: true,
			}, {
				name: "登录人数",
				sort: true,
			}, {
				name: "活跃人数",
				sort: true,
			}, {
				name: "付费人数",
				sort: true,
			}],
			datas: [
				[1, 413, 156, 124, 435],
				[2, 13, 256, 1254, 454],
				[3, 313, 256, 124, 45],
				[4, 513, 2356, 124, 45],
				[5, 213, 256, 1234, 454],
				[6, 453, 2556, 124, 455],
				[7, 473, 2456, 1254, 45],
				[8, 473, 2356, 124, 45],
				[9, 443, 256, 124, 45],
				[10, 413, 2456, 124, 45],
				[11, 444, 2556, 124, 465],
				[12, 713, 2576, 1294, 475],
				[13, 813, 2356, 1264, 45],
				[14, 913, 6256, 124, 45],
				[15, 1213, 7256, 1024, 435],
				[16, 1413, 9256, 124, 45],
				[17, 3413, 2456, 1244, 455],
			]
		};
	}];
	return controllersObj;
});