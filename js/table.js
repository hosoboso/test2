function func1() {
	let gettext1 = document.getElementById("textarea1").value;
	let gettext2 = document.getElementById("textarea2");

	//textarea1がカラの時は注意書き、それ以外は多次元配列arr2を作る
	if (gettext1.length == 0) {
		document.getElementById("view1").innerHTML = "テキストを入力してください";
	} else {
		arr1 = [];
		arr1 = gettext1.split("\n");
		arr2 = [];
		arr2 = arr1.map((item1) => item1.split("\t"));
	}
	//改行で分割（split("\n")の部分）、
	//続いて作った配列の中身をtab部分で分割（split("\t")）して多次元配列生成
	//map() はすべての配列アイテムごとにコールバック関数 callback を実行し、返値からなる新しい配列を返す

	let tablerow = "";	//1行分のタグ
	let tabletext = "";	//テーブルタグ全体

	for (let i = 0; i < arr2.length; i++) {
		tablerow = "\t<tr>";
		for (let j = 0; j < arr2[i].length; j++) {
			if (i == 0) {
				tablerow += "<th>" + arr2[i][j] + "</th>";
			} else {
				tablerow += "<td>" + arr2[i][j] + "</td>";
			}
		}
		if (i == 0) {
			tablerow += "</tr>\n</thead>\n<tbody>\n";
		} else {
			tablerow += "</tr>\n";
		}

		tabletext += tablerow;
	}

	gettext2.value = "<table>\n<thead>\n" + tabletext + "</tbody>\n</table>";
	document.getElementById("view1").innerHTML = "実際のHTML表示<br>" + "<table>\n<thead>\n" + tabletext + '</tbody>\n</table>';
	document.getElementById("view2").innerHTML = "";	//クリップボードコピー用テキストを一度削除しておく
}

//クリップボードコピー用
function func2() {
	//textarea2の値を取得
	let textar = document.getElementById("textarea2").value;
	//クリップボードに書き込む
	navigator.clipboard.writeText(textar);
	document.getElementById("view2").innerHTML = "クリップボードにコピーしました";

}