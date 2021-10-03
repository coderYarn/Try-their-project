export abstract class Index<T>{
	public items: T[];
	constructor() {
		this.items=[]
	}
	abstract enqueue(element):void;
	abstract dequeue():T;
	abstract front():T;
	abstract isEmpty():boolean;
	abstract size():number;
	
}
export class Queue<T> extends Index<T>{
	constructor(){
		super()
	}
	enqueue(element: any): void {
		this.items.push(element)
	}
	dequeue(): T {
		return this.items.shift();
	}
	front(): T {
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


let queue =new Queue();

queue.enqueue('小明');
queue.enqueue('小华');
queue.enqueue('二明');
queue.enqueue('三啥');
queue.enqueue('姜明');
queue.enqueue('4啥');
let i = 0;
while (queue.items.length){
	if(i == 7){
		queue.dequeue();
		if (queue.items.length==1)break;
		i=0
	}else{
		queue.enqueue(queue.dequeue());
	}
	
	i++;
	
}

