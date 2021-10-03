import {UtiltInterFace,Debounce,Throttle,DownLaond,DeepClone} from './typeing'

//防抖
export let debounce:Debounce=(fn:Function,second:number):Function=>{
	let t:null|NodeJS.Timer = null;
	return function(){
		let firstClick:boolean = !t;
		if(t){
		clearTimeout(t);
		}
		if(firstClick){
			fn.apply(this,arguments);
		}
		t=setTimeout(()=>{
			t=null;
		},second);
	}
}

//节流
export let throttle:Throttle = (fn:Function,delay:number):Function=>{
	let begin:number=0;
	return function(){
		let cur:number= new Date().getTime();
		console.log(cur-begin);
		if(cur-begin>delay){
			fn.apply(this,arguments);
			begin = cur;
		}
	}
}

//下载
export const downLaond:DownLaond=(res:any,title:string):void=>{
	const link:HTMLElement = document.createElement('a');
	let blob:Blob = new Blob([res],{type: 'application/vnd.ms-excel'});
	link.style.display = 'none';
	link.href = URL.createObjectURL(blob);
	link.setAttribute('download', title);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

//深拷贝
export const deepClone:DeepClone =(source:any):any=>{
	if(!isObject(source)) return source;
	let target:any = Array.isArray( source ) ? [] : {};
	for ( var k in source ) {
		if (source.hasOwnProperty(k)) {
			if ( typeof source[ k ] === 'object' ) {
						target[ k ] = deepClone( source[ k ] )
				} else {
						target[ k ] = source[ k ]
				}
		}
	}
	return target
}

function isObject(obj:object) {
	return typeof obj === 'object' && obj !== null
}
const utils:UtiltInterFace={
	debounce,
	throttle,
	downLaond,
	deepClone,
}
export default utils;