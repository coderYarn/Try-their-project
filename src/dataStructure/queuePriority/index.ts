export type Items = {
	data : string
	level:number
}
abstract class Index {
	public items: Items[];
	constructor() {
		this.items=[]
	}
	abstract enqueue(element):void;
	abstract dequeue():Items;
	abstract front():Items;
	abstract isEmpty():boolean;
	abstract size():number;
}
export class Queue extends Index{
	constructor(){
		super()
	}
	enqueue(element: Items): void {
		if (this.items.length==0)
			this.items.push(element)
		else{
			for (let i = 0; i < this.items.length; i++) {
				let node = this.items[i]
				console.log(element.level,node.level);
				if (element.level>node.level){
					this.items.splice(i,0,element)
					break
				}
			}
		}
	}
	dequeue(): Items {
		return this.items.shift();
	}
	front(): Items {
		if (this.items.length===0)return null;
		return this.items[0];
	}

	isEmpty(): boolean {
		throw this.items.length==0;
	}
	size(): number {
		return this.items.length;
	}
}

let node:Items={
	data: "name",
	level: 1
}
let node2:Items={
	data: "name2",
	level: 2
}
let node3:Items={
	data: "name3",
	level: 3
}
let node4:Items={
	data: "name4",
	level: 3
}
let node5:Items={
	data: "name5",
	level: 2
}
let queue = new Queue()
queue.enqueue(node)
queue.enqueue(node2)
queue.enqueue(node3)
queue.enqueue(node4)
queue.enqueue(node5)
queue.enqueue(node5)
console.log(queue.items);
