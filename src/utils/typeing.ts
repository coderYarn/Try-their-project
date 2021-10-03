interface UtiltInterFace{
	debounce:Debounce,
	throttle:Throttle,
	downLaond:DownLaond,
	deepClone:DeepClone
}
interface Debounce{
	(fn:Function,second:number):Function;
}
interface Throttle{
	(fn:Function,second:number):Function;
}
interface DownLaond{
	(res:any,title:string):void;
}
interface DeepClone{
	(source:object):object
}
export {UtiltInterFace,Debounce,Throttle,DownLaond,DeepClone}