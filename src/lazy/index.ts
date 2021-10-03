var oImgList = document.getElementsByClassName('J_imgList')[0]
const data = [ 
	{"img":"../../img/1.jpg","name": "图片1"},
{"img":"../../img/2.jpg","name":"图片2"}, 
{"img":"../../img/3.jpg","name": "图片3"}, 
{"img":"../../img/4.jpg","name":"图片4"}, 
{"img":"../../img/5.jpg","name": "图片5"}, 
{"img":"../../img/6.jpg","name":"图片6"}, 
{"img":"../../img/7.jpg","name": "图片7"},
 {"img":"../../img/8.jpg","name":"图片8"}, 
 {"img":"../../img/9.jpg","name": "图片9"}, 
 {"img":"../../img/10.jpg","name":"图片10"}, 
 {"img":"../../img/11.jpg","name": "图片11"},
{"img":"../../img/12.jpg","name": "图片12"}, 
{"img":"../../img/13.jpg","name":"图片13"},
 {"img":"../../img/14.jpg","name": "图片14"},
{"img":"../../img/15.jpg","name": "图片15"},
 {"img":"../../img/16.jpg","name":"图片16"}]
let list = '';
// console.log(/(m|f)ood/.exec('mood'));
let imgTpl = `	<li class="img-item">
<div class="img-wrap">
	<img src="img/d.jpg" class="list-img" data-src="{{img}}" alt="{{name}}"/>
</div>
<div class="img-tt">
	<h1>{{name}}</h1>
</div>
</li>`
// data.forEach(function(item){
// 	list+=imgTpl.replace(/{{(.*?)}}/g,(node,key)=>{
// 		return{
// 			name:item.name,
// 			img:item.img
// 		}[key]
// 	})
// })
oImgList.innerHTML = data.reduce((pre, item) => {
	return pre + imgTpl.replace(/{{(.*?)}}/g, function (node, key) {
		return {
			img: item.img,
			name: item.name
		} [key]
	})
}, '');
const Hheight = document.documentElement.clientHeight
window.onscroll = function(){
	let listImg= document.querySelectorAll('.list-img');
for (let i = 0; i < listImg.length; i++) {
	
	const element = listImg[i];
	console.log(element.offsetTop);
	
	if(parseInt(element.offsetTop)<=Hheight){
		element.src = element.dataset.src;
		console.log(element.dataset.src);	
	}
}
}

