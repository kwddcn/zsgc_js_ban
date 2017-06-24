function nowMonthtime() { //将当前时间转换成yyyy:mm:dd格式
	var mydate = new Date();
	var year=mydate.getFullYear();
	var mm = mydate.getMonth();
	if(mm<=1){
		year=mydate.getFullYear()-1;
	}
	var str = ""+year;
//	var mydateafterweek= mydate.getDate()-7;
	if(mydate.getMonth() > 9) {
		str = str + "-" + mm;
	} else {
		str = str + "-" + "0" + mm;
	}
	if(mydate.getDate() > 9) {
		str = str + "-" + mydate.getDate();
	} else {
		str = str + "-" + "0" + mydate.getDate();
	}
	return str;
}
function nowWeektime() { //将当前时间转换成yyyy:mm:dd格式
	var mydate = new Date();
	var str = "" + mydate.getFullYear();
	var mm = mydate.getMonth() + 1
	if(mydate.getDate()<=7){
		mm-=1;
	}
	var mydateafterweek= mydate.getDate()-7;
	if(mydate.getMonth() > 9) {
		str = str + "-" + mm;
	} else {
		str = str + "-" + "0" + mm;
	}
	if(mydateafterweek > 9) {
		str = str + "-" + mydateafterweek;
	} else {
		str = str + "-" + "0" + mydateafterweek;
	}
	return str;
}
function nowtime() { //将当前时间转换成yyyy:mm:dd格式
	var mydate = new Date();
	var str = "" + mydate.getFullYear();
	var mm = mydate.getMonth() + 1
	if(mydate.getMonth() > 9) {
		str = str + "-" + mm;
	} else {
		str = str + "-" + "0" + mm;
	}
	if(mydate.getDate() > 9) {
		str = str + "-" + mydate.getDate();
	} else {
		str = str + "-" + "0" + mydate.getDate();
	}
	return str;
}


//function deld(){
//	var checkeds=document.getElementsByClassName("checkeds");
//	var deletecount=0;
//	for (k=0;k<pagedatecount;k++) {
//		if (checkbox[k].checked) {
//			data=removeArraybylndex(data,pagedatacount*(nowpage-1)+k-deletecount)
//			deletecount+=1;
//		}
//	}
//	dataindex=pagedatacont*(nowpage-1);
//	blinddata();
//}


//function removeArraybylndex(array,index){
//	if(index<=(array.length-1)){
//		for(var i=index;i<array.length;i++){
//			array[i]=array[i+1]
//		}
//	}else{
//		throw new Error("chaochuzuidasuoyin")
//	}
//	array.length=array.length-1
//	return array;
//}
