//function clickTest() {
//	alert("wawawawawa");
//}
$('.slider').slick();
var top = document.getElementsByClassName('btn_top');
var text = document.getElementById('text');

$(function () {
	//共通ヘッダー
	$("header").load('header.html');
	//共通フッター
	$("footer").load('footer.html');
});
//top.addEventListener('click', event => { text.innerHTML = 'おんあｓだ' });