import {NodeItem,LinkedList} from '../LinkedList'
class DoubleNode extends NodeItem{
	prev: any;
	constructor(element) {
		super(element);
		this.prev = null;
	}
}

export class DoubleLinked extends LinkedList{
	tail: any;
	constructor() {
		super();
		this.tail=null;
	}
	append(element:any):void{
		let newNode = new DoubleNode(element);
		if(this.head==null){
			this.head = newNode;
			this.tail = newNode;
		}else{
			//查询最后一个节点
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode
		}
		this.length++;
	}
	insert(position,element):void{
		if(position<0||position>this.length-1) return null;
		const newNode = new DoubleNode(element);
		let current = this.head
		let previous = null
		if (position === 0){
			if(this.head===null){
				this.head = newNode
				this.tail = newNode
			}else{
				newNode.next = this.head;
				this.head.prev = newNode;
				this.head = newNode;
			}
		}else if (position===this.length){
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}else{
			let index=0
			while (index++<position){
				previous = current;
				current = current.next;
			}
			previous.next = newNode;
			newNode.prev = previous;
			newNode.next = current;
			current.prev = newNode;
		}
		this.length++;

	}
	removeAt(position){
		if(position<0||position>this.length-1) return null;
		let current = this.head
		if (position === 0){
			if(this.length===1){
				this.head=null;
				this.tail=null
			}else{
				this.head = current.next;
				this.head.prev = null;
			}
		}else if(position === this.length-1){
			this.tail.prev.next = null;
			// this.tail  = this.tail.prev
			this.tail = this.tail.prev;
			current = this.tail;
		}else{
			let index = 0;
			let previous = null;
			while (index++<position) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next.prev = previous;
		}
		return current.element;
	}
}