export abstract class QueueDefine {
	items: any[]=[];
	sizes:number;
	constructor() {}
	abstract enqueue(element:number,priority:any):void;//向队列尾部添加一个(或多个)新的项.
	abstract dequeue():boolean|number;//移除队列的第一(即排在队列最前面的)项,并返回被移除元素
	abstract front():number;//返回队列中第一个元素--最先被添加,也将是最先被移除的元素.队列不做任何变动(不移除元素,只返回元素信息,--stack类的peek方法类型)
	abstract isEnpty():boolean;//如果队列不包含的任何元素,返回true,否则返回false
	abstract size():number;//返回队列包含的元素个数,与数组的length属性类似
}