abstract class Index{
	public items:number[];
	constructor(){
		this.items=[]
	}
	abstract push(element:number):void;//添加一个新元素到栈顶位置
	abstract pop():number;
	abstract peek():number;
	abstract isEmpty():boolean;
	abstract size():number;
}
export default class Stack extends Index{
	constructor(){
		super();
	}
	pop(): number {
		return this.items.pop();
	}
	push(element: number): void {
		this.items.push(element);
	}
	peek(): number {
		return this.items[this.items.length-1]
	}
	isEmpty(): boolean {
		return this.items.length==0
	}
	size(): number {
		return this.items.length;
	}
}
