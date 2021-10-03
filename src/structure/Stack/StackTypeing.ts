export abstract class StackDefine {
	items: any[]=[];
	sizes:number;
	constructor() {
		
	}
	abstract push(element:number):void;//:添加一个新元素到栈顶位置
	abstract pop():boolean|number;//移除栈顶的元素,同时删除元素
	abstract peek():number;//返回栈顶的元素，不对栈做任何的修改
	abstract isEmpty():boolean;//如果里没有任元素就返回true,否则返回false
	abstract size():number;//返回队列包含的元素个数,与数组的length属性类似
}