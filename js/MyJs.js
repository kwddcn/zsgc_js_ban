//功能
/*
 Ajax封装
 * */
function jqxhrAjax(MyUrl, callBack) {
	var arr = new Array();
	$.ajax(MyUrl, {
		//		dataType: 'json',
		async: false,
	}).done(function(data) {
		callBack(data);
	}).fail(function(xhr, status) {
		//				失败
		console.log('失败: ' + xhr.status + ', 原因: ' + status);
	}).always(function() {
		//无论是否请求都会调用	
		console.log('请求完成: 无论成功或失败都会调用');
	});
}
//加载表格头部
var initTableTop = function() {
		//添加类型
		for(var i = 0; i < workType.length; i++) {
//			var selectOption=create
//			document.getElementsByTagName('select').
			$("select").append("<option value='" + workType[i] + "'>" + workType[i] + "</option>")
		}
		//			创建表格头部类型
		for(var i = 1; i < types.length; i++) {
			if(i == 1 || i == 2) {
				$("#table_id").append("<div class='weith_5 table_id_top '>" + types[i] + "</div>");
			} else
			if(i == types.length - 5)
				$("#table_id").append("<div class='weith_40 text_left table_id_top '>" + types[i] + "</div>");
			else
				$("#table_id").append("<div class='weith_10 table_id_top  '>" + types[i] + "</div>");
		}
	}
	/*
	 初始化分页按钮
	 * */
function initChangePage() {
	var inputNumber = "";
	//	var nowPageNumber = [];
	if(userArray.length / pagelenth * 10 % 10 == 0) {
		for(var i = 1; i < userArray.length / pagelenth; i++) {
			inputNumber += "<div class='changePageBtnType'id='changePageBtn" + i + "'  onclick='changePage($(this).text())'>" + i + "</div>";
		}
	} else {
		for(var i = 1; i < userArray.length / pagelenth + 1; i++) {

			inputNumber += "<div class='changePageBtnType' id='changePageBtn" + i + "' onclick='changePage($(this).text())'>" + i + "</div>";
		}
	}

	$("#table_id").append("<div class='Paging'>" +
		"<div class='changePageBtnType'onclick='changePage($(this).text())'>上一页</div>" +
		inputNumber +
		"<div class='changePageBtnType'onclick='changePage($(this).text())'>下一页</div>" +
		"</div>");
	$("#changePageBtn1").addClass("changePageBtnColor");
	console.log(".............");
}

//初始化多选头部
var initCheckTop = function() {
		//			创建编辑后表格头部类型
		for(var i = 0; i < types.length; i++) {
			if(i == 0) {
				$("#table_id").append("<div class='weith_5 table_id_top margin_top_02' onclick=''></div>");
			} else
			if(i == 1 || i == 2) {
				$("#table_id").append("<div class='weith_5 table_id_top margin_top_02 ' onclick=''>" + types[i] + "</div>");
			} else
			if(i == types.length - 5)
				$("#table_id").append("<div class='weith_30 text_left table_id_top margin_top_02 '>" + types[i] + "</div>");
			else
				$("#table_id").append("<div class='weith_10 table_id_top margin_top_02 '>" + types[i] + "</div>");
		}
	}
	//初始化多选
var initCheck = function(star, last) {
		$("#table_id div").remove();
		initCheckTop();
		initChangePage();
		$("#table_id").append("<div class='delete'onclick='delect()'>删除选中</div>");
		//创建表格及其内容
		for(var i = 0; i < userArray.length; i++) {
			if(i >= star && i < last) {
				if(i % 2 == 0) {
					$("#table_id").append("<div class='weith_100 line_div gaybackcolore look_bodergayup'onclick='chckClick(" + i + ")' id=" + i + "></div>");
				} else {
					$("#table_id").append("<div class='weith_100 line_div look_bodergayup' onclick='chckClick(" + i + ")'id=" + i + "></div>");
				}

				for(var j = 0; j < userArray[i].length - 1; j++) {
					console.log(userArray[i][j]);
					//名称缩略	
					if(userArray[i][j].length > 20) {
						//名称缩略						var str=userArray[i][j].substr(25);
						userArray[i][j] = userArray[i][j].replace(userArray[i][j].substr(20), "...");
						//						userArray[i][j].length
					}
					//	备注缩略	
					if(userArray[i][1].length > 3) {
						//	缩略					var str=userArray[i][j].substr(25);
						userArray[i][1] = userArray[i][1].replace(userArray[i][1].substr(3), "...");
						//						userArray[i][j].length
					}
					//					div背景颜色
					if(j == 0) {
						$("#" + i + "").append("<div class='weith_5 tablediv  '><input type='checkbox' name='checkName'value='" + i + "'/></div>");
					} else
					if(j == 1) {
						$("#" + i + "").append("<div class='weith_5 tablediv   '>" + (i + 1) + "</div>");
						$("#" + i + "").append("<div class='weith_5 table_id   '><div class='ToView'>查看</div></div>");
					} else if(j == userArray[i].length - 6)
						$("#" + i + "").append("<div class='weith_30 tablediv text_left  '>" + userArray[i][j] + "</div>");
					else
						$("#" + i + "").append("<div class='weith_10 tablediv  '>" + userArray[i][j] + "</div>");

				}
			}

		}
	}
	//初始化左边的列表按钮
function initlist() {
	for(var listNumber = 0; listNumber < list_arr.length; listNumber++) {
		if(listNumber == 4) {
			//			#189ACA
			$("#left_list").append("<div class='list_btn weith_100 look_top_gar' style='padding: 0.2rem 0;background-color:#189ACA' onclick='changeBtn_backround($(this))'>" + list_arr[listNumber] + "</div>");
		} else
			$("#left_list").append("<div class='list_btn weith_100 look_top_gar' style='padding: 0.2rem 0;' onclick='changeBtn_backround($(this))'>" + list_arr[listNumber] + "</div>");
	}
}

function initHeadOne() {
	$("#table_id").before("<div id='head_one' class='weith_100'>" +
		"<div class='News'onclick='add_main()'>新增工作汇报</div>" +
		"<div style='font-size: 1vw;margin-top: 0.6rem;margin-left: 0.5rem;'><div style='color: green;'>工作汇报列表[数量：</div><div style='color: red;'>" + userArray.length + "</div><div style='color: green;'>条]</div></div>" +
		"</div>" +
		"<div id='head' class='weith_100'></div>");
}
var initHead = function() {

	$("#head").append("<div class='batch' onclick='BatchChoice()'>批量选择</div><div class='UserType'><select id='UserType' onchange='search()'></select></div><div class='search_text'><input type='text' style='text-align: left;' placeholder='请输入关键字' /></div><div class='searchBtn' style='line-height:2.4rem;'><input type='button' value='查询' onclick='search()' style='background-color: dodgerblue; color: white;border: 1px solid gainsboro; height: 1.5rem; width: 3rem;' /></div><div class='multiSelect font_size flot_right' style='margin-right: 2rem;'><input style='line-height: 2.5rem;' type='checkbox' onclick='chckAllClick()' id='allcheck' />全选</div>")

	//				initContent(0,5);
}

/*
 * /加载表格内容
 */
var initContent = function(star, last) {
		//移除div
		$("#head div").remove();
		$("#table_id div").remove();
		$("#head_one").remove();
		$("#head").remove();
		$(".addaddContentView").hide();
		//初始化表格上方的div
		initHeadOne();
		initHead();
		//初始化表格头部
		initTableTop();
		//调用改变页面按钮
		initChangePage();
		//		$("#list").css("background-color", "#189ACA");
		console.log("length======>" + userArray.length);

		//创建表格及其内容
		for(var i = 0; i < userArray.length; i++) {
			if(i >= star && i < last) {
				console.log(i > pagestar && i < pagelast);
				if(i % 2 == 0) {
					$("#table_id").append("<div class='weith_100  line_div gaybackcolore 'onclick='outWindow(" + i + ")'id=" + i + "></div>");
				} else {
					$("#table_id").append("<div class='weith_100 line_div background_grywhite' onclick='outWindow(" + i + ")'id=" + i + "></div>");
				}
				for(var j = 0; j < userArray[i].length - 1; j++) {
					console.log(userArray[i][j]);

					//名称缩略	
					if(userArray[i][j].length > 40) {
						this.strs = userArray[i][j].substr(40);
						//名称缩略						var str=userArray[i][j].substr(25);
						userArray[i][j] = userArray[i][j].replace(userArray[i][j].substr(40), "...");
						//						userArray[i][j].length
					}
					if(userArray[i][2].length > 3) {
						this.strs = userArray[i][2].substr(2);
						//名称缩略						var str=userArray[i][j].substr(25);
						userArray[i][2] = userArray[i][2].replace(userArray[i][2].substr(2), "...");
						//						userArray[i][j].length
					}
					//					div背景颜色

					if(j == 0) {

					} else
					if(j == 1) {
						$("#" + i + "").append("<div class='weith_5 table_id   look_bodergayup'>" + (i + 1) + "</div>");
						$("#" + i + "").append("<div class='weith_5 table_id   look_bodergayup'><div class='ToView'>查看</div></div>");
					} else if(j == 3)
						$("#" + i + "").append("<div class='weith_40 table_id text_left  look_bodergayup'><div class='title'>" + userArray[i][j] + "</div></div>");
					else
						$("#" + i + "").append("<div class='weith_10 table_id  look_bodergayup'>" + userArray[i][j] + "</div>");

				}
			}

		}

		//			$.ajaxSetup ({ cache: false });
	}
	/*
	 分页
	 * */
function changePage(values) {
	switch(values) {
		case "上一页":
			if(pagestar == 0) {

			} else {
				pagelast -= pagelenth;
				pagestar -= pagelenth;
			}
			break;
		case "下一页":
			if(pagelast > userArray.length) {} else {
				pagelast += pagelenth;
				pagestar += pagelenth;
			}
			break;
		case "首页":
			if(pagelast > userArray.length) {} else {
				pagelast += pagelenth;
				pagestar += pagelenth;
			}
			break;
		case "尾页":
			if(pagelast > userArray.length) {} else {
				pagelast += pagelenth;
				pagestar += pagelenth;
			}
			break;
		default:
			//				console.log(values-1);
			pagelast = values * pagelenth;
			pagestar = pagelenth * (values - 1);
			break;

	}

	isCheckChangePage(pagestar, pagelast);
	changePageBackgroundColor((pagestar / 5 + 1));
	console.log(pagestar, pagelast);
	return pagelast, pagestar;
}
//根据当前页改变页码改变按钮背景颜色
function changePageBackgroundColor(nowPageNumber) {
	if(userArray.length / pagelenth * 10 % 10 == 0) {
		for(var i = 1; i < userArray.length / pagelenth; i++) {
			if(i == nowPageNumber) {
				$("#changePageBtn" + nowPageNumber).addClass("changePageBtnColor");
			} else {
				$("#changePageBtn" + i).removeClass("changePageBtnColor");
			}
		}
	} else {
		for(var i = 1; i < userArray.length / pagelenth + 1; i++) {
			if(i == nowPageNumber) {
				$("#changePageBtn" + nowPageNumber).addClass("changePageBtnColor");
			} else {
				$("#changePageBtn" + i).removeClass("changePageBtnColor");
			}
		}
	}

}
//编辑
var BatchChoice = function() {
		initCheckTop();
		initCheck(0, 5);
	}
	/*
	 根据input数量判断
	 * */
	//
function isCheckChangePage(pagestar, pagelast) {
	//	console.log("+++++++++>"+$("input").length);
	if($("input").length > 3) {
		initCheck(pagestar, pagelast);
	} else {
		initContent(pagestar, pagelast);
	}
}

//#1488B2
/*
 backwindon
 * */
function backwindow() {
	$(".back_alph").css("z-index", "-2");
	$(".out_window").css("z-index", "-1");
	initContent(0, 5);
}
/*
 改变按钮点击过后事件
 * */
//
function changeBtn_backround(btn) {
	$("#left_list div").css("background-color", "#293038");
	btn.css("background-color", "#189ACA");

}

function getNeedTime() {

	console.log("gettim+++++" + $("#addType").val());
	for(var i = 1; i < workType.length; i++) {
		if($("#addType").val() == workType[i]) {
			switch(i) {
				case 0:
					$(".addStartTime input").val("");
					$(".addOverTime input").val(nowtime());
					break;
				case 1:
					$(".addStartTime input").val("");
					$(".addOverTime input").val(nowtime());
					break;
				case 2:
					$(".addStartTime input").val(nowWeektime());
					$(".addOverTime input").val(nowtime());
					break;
				case 3:
					$(".addStartTime input").val(nowMonthtime());
					$(".addOverTime input").val(nowtime());
					break;
				default:
					break;
			}
		}
	}
}
/*
 * 添加
 * 
 * */
var add = function() {
		var addtype = $("#addType").val();
		var addStartTime = $(".addStartTime input").val();
		var addOverTime = $(".addOverTime input").val();
		var addGave = $(".addGave input").val();
		var addtitle = $(".addtitle input").val();
		var addNowText = $(".addNowText textarea").val();
		var addNextText = $(".addNextText textarea").val();
		var addArray = new Array();
		//		console.log(addname, addtype, addage, addsex, addmore);

		if(addGave != "" && addtitle != "" && addNowText != "") {
			if(addtype == "日总结")
				addArray = ["", "", "海哥", addtype + "-海哥" + addStartTime + addOverTime, addtype, addStartTime + addOverTime, addOverTime, addGave, addNowText];
			else
				addArray = ["", "", "海哥", addtype + "-海哥" + addStartTime + "至" + addOverTime, addtype, addStartTime + addOverTime, addOverTime, addGave, addNowText];
			//			["", "",  item.dataType + "-" + item.dataName + "-" + item.dataStartTime + "至" + item.dataLast, item.dataType, item.dataStartTime + item.dataLast, item.dataLast, item.dataGave, item.dataContent];
			//					for(var i=0;)
			console.log(addArray);
			userArray.push(addArray);
			for(var i = 0; i < userArray.length; i++) {
				console.log(userArray[i]);
			}
			initContent(0, 5);

		} else {
			alert("输入的信息不完善");
		}
	}
	//添加
var add_main = function(values) {
		$("#table_id div").remove();
		$("#head").remove();
		$("#head_one").remove();
		$("#table_id").append(addContentViews);
		$("#table_id").css("height", "42.8rem");
		for(var i = 0; i < workType.length; i++) {
			$("#addType").append("<option value='" + workType[i] + "'>" + workType[i] + "</option>");
		}
	}
	/*
	 //详情
	 * */
var moreContent = function(values) {
		$("#table_id div").remove();
		$("#table_id").append("<div class='weith_100'>信息详情</div>");
		$("#table_id").append("<div class='weith_30'>姓名</div>");
		$("#table_id").append("<div class='weith_50 text_left'>" + userArray[values][2] + "</div>");
		$("#table_id").append("<div class='weith_30'>类型</div>");
		$("#table_id").append("<div class='weith_50 text_left'>" + userArray[values][3] + "</div>");
		$("#table_id").append("<div class='weith_30'>年龄</div>");
		$("#table_id").append("<div class='weith_50 text_left'>" + userArray[values][4] + "</div>");
		$("#table_id").append("<div class='weith_30'>性别</div>");
		$("#table_id").append("<div class='weith_50 text_left'>" + userArray[values][5] + "</div>");
		$("#table_id").append("<div class='weith_30'>简介</div>");
		$("#table_id").append("<div class='weith_50 text_left'>" + userArray[values][6] + "</div>");
		$("#table_id").append("<div class='weith_70 text_right' onclick='initContent(0,5)'id='back_main'>返回</div>");

	}
	/*
	 //删除
	 * */

var delect = function() {
	var idArray = new Array();
	$("input:checkbox[name='checkName']:checked").each(function() {
		idArray.push($(this).val());
	});
	console.log("idArr" + idArray);
	for(var i = 0; i < idArray.length; i++) {
		if(i > 0) {
			removeArrayOfN(userArray, idArray[i - 1]);
		} else {
			removeArrayOfN(userArray, idArray[i]);
		}
	}
	initContent(0, 5);
}

function removeArrayOfN(arr, n) {
	if(n > arr.length - 1 || n < 0) {
		alert('没有找到下标为' + n + '的元素！');
		return;
	} //如果n大于或小于指定数组的长度则返回  
	var arr1 = [];

	for(var i = 0; i < arr.length; i++) {
		if(i == n) {
			continue
		} //如果删除的为第i个元素，跳出当前循环  
		arr1.push(arr[i]); //把下标不为n的元素添加到arr1  
	}
	arr.length = 0; //将arr的长度设为零  

	for(var i = 0; i < arr1.length; i++) {
		arr[i] = arr1[i] //重新给arr赋值  
	}

	return arr; //返回传进的数组  
}
/*
 	//搜索
 * 
 * */

function search() {
	//移除div
//	$("#head div").remove();
	$("#table_id div").remove();
//	$("#head_one").remove();
//	$("#head").remove();
//	$(".addaddContentView").hide();
	//初始化表格上方的div
//	initHeadOne();
//	initHead();
	//初始化表格头部
//	initTableTop();
	//调用改变页面按钮
//	initChangePage();
	var searchArray = [];
	var searchType = $("#UserType").val();
	var searchDate = $(".search_text input").val();
	console.log(searchType, searchDate);
	if(searchType.length > 3) {
		searchType = "";
	}
	for(var i = 0; i < userArray.length; i++) {
		var str = "";
		for(var k = 0; k < userArray[i].length; k++) {
			str += userArray[i][k];
		}
		if((str.indexOf(searchDate) > -1) && (str.indexOf(searchType) > -1)) {
			searchArray.push(userArray[i]);
			console.log("sear:" + i);

		}
	}
	//创建表格及其内容
	for(var i = 0; i < searchArray.length; i++) {
		//		if(i >= star && i < last) {
//		console.log(i > pagestar && i < pagelast);
		if(i % 2 == 0) {
			$("#table_id").append("<div class='weith_100  line_div gaybackcolore 'onclick='outWindow(" + i + ")'id=" + i + "></div>");
		} else {
			$("#table_id").append("<div class='weith_100 line_div background_grywhite' onclick='outWindow(" + i + ")'id=" + i + "></div>");
		}
		for(var j = 0; j < searchArray[i].length - 1; j++) {
			console.log(searchArray[i][j]);

			//名称缩略	
			if(searchArray[i][j].length > 40) {
				this.strs = searchArray[i][j].substr(40);
				//名称缩略						var str=userArray[i][j].substr(25);
				searchArray[i][j] = searchArray[i][j].replace(searchArray[i][j].substr(40), "...");
				//						userArray[i][j].length
			}
			if(searchArray[i][2].length > 3) {
				this.strs = searchArray[i][2].substr(2);
				//名称缩略						var str=userArray[i][j].substr(25);
				searchArray[i][2] = searchArray[i][2].replace(searchArray[i][2].substr(2), "...");
				//						userArray[i][j].length
			}
			//					div背景颜色

			if(j == 0) {

			} else
			if(j == 1) {
				$("#" + i + "").append("<div class='weith_5 table_id   look_bodergayup'>" + (i + 1) + "</div>");
				$("#" + i + "").append("<div class='weith_5 table_id   look_bodergayup'><div class='ToView'>查看</div></div>");
			} else if(j == 3)
				$("#" + i + "").append("<div class='weith_40 table_id text_left  look_bodergayup'><div class='title'>" + searchArray[i][j] + "</div></div>");
			else
				$("#" + i + "").append("<div class='weith_10 table_id  look_bodergayup'>" + searchArray[i][j] + "</div>");

		}
		//		}

	}

	//			$.ajaxSetup ({ cache: false });

}

/*
 弹出悬浮窗
 * */
//
function outWindow(values) {
	$(".out_window div").remove();
	$(".back_alph").css("z-index", "999");
	$(".out_window").css("z-index", "1000");
	$(".out_window").append("<div class='weith_100'>信息详情</div>");
	$(".out_window").append("<div class='weith_30'>姓名</div>");
	$(".out_window").append("<div class='weith_50 text_left'>" + userArray[values][2] + "</div>");
	$(".out_window").append("<div class='weith_30'>类型</div>");
	$(".out_window").append("<div class='weith_50 text_left'>" + userArray[values][3] + "</div>");
	$(".out_window").append("<div class='weith_30'>年龄</div>");
	$(".out_window").append("<div class='weith_50 text_left'>" + userArray[values][4] + "</div>");
	$(".out_window").append("<div class='weith_30'>性别</div>");
	$(".out_window").append("<div class='weith_50 text_left'>" + userArray[values][5] + "</div>");
	$(".out_window").append("<div class='weith_30'>简介</div>");
	$(".out_window").append("<div class='weith_50 text_left'>" + userArray[values][6] + "</div>");
	$(".out_window").append("<div class='weith_70 text_right' onclick='backwindow()'id='back_main'>返回</div>");
}

//全选
var chckAllClick = function() {
		//				console.log(num);
		if($("#allcheck").attr("checked")) {
			$("input").removeAttr("checked");
		} else
			$("input").attr("checked", "true");
	}
	//单选
var chckClick = function(num) {
	console.log(num);
	if($("#" + num + " input").attr("checked")) {
		$("#" + num + " input").removeAttr("checked");
	} else
		$("#" + num + " input").attr("checked", "true");
}

function backMainList() {

	initHead();
	initHeadOne();
	initContent(0, 5);
}