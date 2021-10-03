
export interface NodeElements<T>{
	element:T,
	prev?:NodeElements<T>,
	next:NodeElements<T>
}
export abstract class Links<T>{
	head: NodeElements<T>;
	length: number;
	constructor() {
		this.head=null;
		this.length=0;
	}
	abstract append(element:T):void //向队列尾部添加一个项
	abstract insert(position:number,element:T):boolean//向列表的特定位置插入一个新的项
	abstract get(position:number):NodeElements<T>|T//获取对应位置的元素
	abstract indexOf(element:T):number//返回元素在列表中的索引，如果列表中没有返回-1
	abstract update(position:number,element:T):void|boolean//修改某个位置的元素
	abstract removeAt(position:number):void|boolean//从列表特点位置移除一项
	abstract remove(element:T):void|boolean//从列表中移除一项
	abstract isEmpty():boolean//如果链表中不包含任何元素返回ture,否者返回true
	abstract size():number//返回链表中包含的元素个数，与数组length类似
}