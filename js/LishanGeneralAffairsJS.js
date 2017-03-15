// JavaScript Document
/*
function loadTab(obj, n) {
	var layer;
	eval('layer=\'S' + n + '\'');
	//將 Tab 標籤樣式設成 Blur 型態
	var tabsF = document.getElementById('tabsF').getElementsByTagName('li');
	for (var i = 0; i < tabsF.length; i++) {
		tabsF[i].setAttribute('id', null);
		eval('document.getElementById(\'S' + (i + 1) + '\').style.display=\'none\'')
	}
	//變更分頁標題樣式
	obj.parentNode.setAttribute('id', 'current');
	document.getElementById(layer).style.display = 'inline';
	if (n === 1) {

	}
};

function GetInfo {
	var JSONInfo = JSON.parse("https://spreadsheets.google.com/feeds/cells/1eWhg4Tbmmgjm2d8MRtvjvtrfvXFE67hBp8bRWNcijXs/1/public/values?alt=json")
	var span = document.getElementById('idiotSPAN');
	var cText = document.createTextNode('必需先明白HTML標籤結構');
	span.appendChild(cText);
}
*/
/*
function addRow() { //增加一列
	var num = 1; //設定"列"計數器

	var min = 1; //設定表格最少列數

	var max = 10; //設定表格最大列數
	if (num + 1 > 10) {

		alert("列數最多" + max + "列"); //檢查列數上限

	} else {

		num++;
		var table = document.getElementById("mytable"); //取得table object

		var tObj = table.tBodies[0];

		var row = document.createElement("tr"); //產生一列

		var cell = document.createElement("td"); //產生一欄

		cell.innerHTML = "<input type='checkbox' value='1' name='c" + count + "'/>"; //設定欄位內容

		row.appendChild(cell); //將欄位塞進剛剛產生的列中

		cell = document.createElement("td"); //再產生一欄

		cell.innerHTML = "<input type='text' name='t" + count + "'/>"; //設定欄位內容

		row.appendChild(cell); //將欄位塞進剛剛產生的列中

		tObj.appendChild(row); //將列塞進表格中

	}

}
*/
/*
function getJSONP(url, success) {

	var ud = '_' + new Date,
		script = document.createElement('script'),
		head = document.getElementsByTagName('head')[0] ||
		document.documentElement;

	window[ud] = function (data) {
		head.removeChild(script);
		success && success(data);
	};

	script.src = url.replace('callback=?', 'callback=' + ud);
	head.appendChild(script);

}


function GetInfo() {
	var BackResult = null;
	var epaAPI = "https://spreadsheets.google.com/feeds/cells/1eWhg4Tbmmgjm2d8MRtvjvtrfvXFE67hBp8bRWNcijXs/1/public/values?alt=json&callback=?";
	//加上&callback=?
	$.getJSON(epaAPI, function () {
		format: "json";
	}).done(function (data) {
		console.log(data);

		BackResult = jQuery.extend(true, {}, data.feed.entry.Something);
		BackResult = data;
		console.log(BackResult);
		return (BackResult);
	});
}
*/

function LoadTable() { //刪除末列
	var Check = "No";
	var BackResult = null;

	var epaAPI = "https://spreadsheets.google.com/feeds/cells/1eWhg4Tbmmgjm2d8MRtvjvtrfvXFE67hBp8bRWNcijXs/1/public/values?alt=json&callback=?";
	//加上&callback=?
	$.getJSON(epaAPI, function () {
		format: "json";
	}).done(function (data) {
			//紀錄LOG 
			//console.log(data);
			BackResult = data;
			//var ResultText = BackResult.feed.entry[4]['gs$cell']['$t'] + "101";

			for (i = 0; i < BackResult.feed.entry[4]['gs$cell']['$t'] / 2 + BackResult.feed.entry[4]['gs$cell']['$t'] % 2; i++) {
				var num = document.getElementById("BusinessChargeTB").rows.length;
				var TrPosition = document.getElementById("BusinessChargeTB").insertRow(num);
				var TrName = document.getElementById("BusinessChargeTB").insertRow(num + 1);
				var TrPhone = document.getElementById("BusinessChargeTB").insertRow(num + 2);
				var TrBusiness = document.getElementById("BusinessChargeTB").insertRow(num + 3);
				var TrBusinessDescription = document.getElementById("BusinessChargeTB").insertRow(num + 4);
				var TrSpace = document.getElementById("BusinessChargeTB").insertRow(num + 5);
				var TrSpaceTwo = document.getElementById("BusinessChargeTB").insertRow(num + 6);
				var TrSpaceThree = document.getElementById("BusinessChargeTB").insertRow(num + 7);
				var Check = 2;
				if (i == BackResult.feed.entry[4]['gs$cell']['$t'] / 2 + BackResult.feed.entry[4]['gs$cell']['$t'] % 2){
					Check = 1;
			}
			for (j = 0; j < Check; j++) {
				var TdPosition = TrPosition.insertCell(TrPosition.cells.length);
				TdPosition.setAttribute('align', "center");
				var TdName = TrName.insertCell(TrName.cells.length);
				TdName.setAttribute('align', "center");
				var TdPhone = TrPhone.insertCell(TrPhone.cells.length);
				TdPhone.setAttribute('align', "center");
				var TdBusiness = TrBusiness.insertCell(TrBusiness.cells.length);
				TdBusiness.setAttribute('align', "center");
				var TdBusinessDescription = TrBusinessDescription.insertCell(TrBusinessDescription.cells.length);
				TdBusinessDescription.setAttribute('align', "center");
				var TdSpace = TrSpace.insertCell(TrSpace.cells.length);
				TdSpace.setAttribute('align', "center");

				var TdSpaceTwo = TrSpaceTwo.insertCell(TrSpaceTwo.cells.length);
				TdSpaceTwo.setAttribute('align', "center");
				TdSpaceTwo.innerHTML = '<br />';

				var TdSpaceThree = TrSpaceThree.insertCell(TrSpaceThree.cells.length);
				TdSpaceThree.setAttribute('align', "center");
				TdSpaceThree.innerHTML = '<br />';

				var SpanPosition = document.createElement('span');
				SpanPosition.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #CC0000;");
				var TextPosition = document.createTextNode(BackResult.feed.entry[5+i*8+j*4]['gs$cell']['$t']);
				SpanPosition.appendChild(TextPosition);
				TdPosition.appendChild(SpanPosition);

				var SpanName = document.createElement('span');
				SpanName.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #8B4513;");
				var TextName = document.createTextNode(BackResult.feed.entry[5+i*8+j*4+1]['gs$cell']['$t']);
				SpanName.appendChild(TextName);
				TdName.appendChild(SpanName);

				var SpanPhone = document.createElement('span');
				SpanPhone.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #000000;");
				var TextPhone = document.createTextNode(BackResult.feed.entry[5+i*8+j*4+2]['gs$cell']['$t']);
				SpanPhone.appendChild(TextPhone);
				TdPhone.appendChild(SpanPhone);

				var SpanBusiness = document.createElement('span');
				SpanBusiness.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #CC0000;");
				var TextBusiness = document.createTextNode("承辦業務");
				SpanBusiness.appendChild(TextBusiness);
				TdBusiness.appendChild(SpanBusiness);

				var SpanBusinessDescription = document.createElement('span');
				SpanBusinessDescription.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #8B4513;");
				//var TextBusinessDescription = document.createTextNode(BackResult.feed.entry[5+i*8+j*4+3]['gs$cell']['$t']);
				//SpanBusinessDescription.appendChild(TextBusinessDescription);
				var TextBusinessDescription = BackResult.feed.entry[5+i*8+j*4+3]['gs$cell']['$t'].replace(/\n/g, "<br />");
				SpanBusinessDescription.innerHTML = ''+TextBusinessDescription;
				TdBusinessDescription.appendChild(SpanBusinessDescription);
				
			}
		}
		//var cText = document.createTextNode(ResultText);
		//紀錄LOG 
		//console.log(BackResult);
		//strongele.appendChild(cText);
		//span.appendChild(strongele);

	});


}

/*function delRow() { //刪除末列

	//var jsonObj = getJSONP('https://spreadsheets.google.com/feeds/cells/1eWhg4Tbmmgjm2d8MRtvjvtrfvXFE67hBp8bRWNcijXs/1/public/values?alt=json', function (data) {console.log(data);});
	//var jsonObj = eval()

	var span = document.getElementById('wtf');
	var strongele = document.createElement('span');
	strongele.setAttribute('id', "haha");
	strongele.setAttribute('style', "font-size: 18px; font-family: 微軟正黑體; color: #F00;");

	var Check = "No";

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'https://spreadsheets.google.com/feeds/cells/1eWhg4Tbmmgjm2d8MRtvjvtrfvXFE67hBp8bRWNcijXs/1/public/values?alt=json&callback=getJSONP', true);
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			Check = "ready";
			if (xmlhttp.status == 200) {
				var obj = JSON.parse(xmlhttp.responseText);
				var countryList = obj.countrylist;
				//Check = "Status";
			} else {　　
				//Check = "伺服器處理錯誤";　
			}
		}
	};
	xmlhttp.send("");


	var cText = document.createTextNode(Check);
	strongele.appendChild(cText);
	span.appendChild(strongele);
}*/

function loadTab(obj, n) {
	var layer;
	eval('layer=\'S' + n + '\'');
	//將 Tab 標籤樣式設成 Blur 型態
	var tabsF = document.getElementById('tabsF').getElementsByTagName('li');
	for (var i = 0; i < tabsF.length; i++) {
		tabsF[i].setAttribute('id', null);
		eval('document.getElementById(\'S' + (i + 1) + '\').style.display=\'none\'')
	}
	//變更分頁標題樣式
	obj.parentNode.setAttribute('id', 'current');
	document.getElementById(layer).style.display = 'inline';
}

function add_new_data() {
	var num = document.getElementById("BusinessChargeTB").rows.length;
	var Tr = document.getElementById("BusinessChargeTB").insertRow(num);
	Td = Tr.insertCell(Tr.cells.length);
	Td = Tr.insertCell(Tr.cells.length);
	/*
	//先取得目前的row數
	var num = document.getElementById("mytable").rows.length;
	//建立新的tr 因為是從0開始算 所以目前的row數剛好為目前要增加的第幾個tr
	var Tr = document.getElementById("mytable").insertRow(num);
	//建立新的td 而Tr.cells.length就是這個tr目前的td數
	Td = Tr.insertCell(Tr.cells.length);
	//而這個就是要填入td中的innerHTML
	Td.innerHTML = '<input name="name[]" type="text" size="12">';
	//這裡也可以用不同的變數來辨別不同的td (我是用同一個比較省事XD)
	Td = Tr.insertCell(Tr.cells.length);
	Td.innerHTML = '<input name="content[]" type="text" size="12">';
	//這樣就好囉 記得td數目要一樣 不然會亂掉~
	*/
}
