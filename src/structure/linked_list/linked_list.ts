import {Links,NodeElements} from './linked_listTypeing'
export class NodeElement<T>{
	element: T;
	next: NodeElements<T>;
	constructor(element:T){
		//保存元素
		this.element=element;
		//指向节点
		this.next=null;
	}
}

export class LinkedList<T> extends Links<T>{
	constructor() {
		super()
	}
	append(element:T):void{
		const nodeElement:NodeElements<T> = new NodeElement<T>(element);
		if(!this.head){
			this.head=nodeElement;
		}else{
			let current = this.head;
			while (current.next) {
				current=current.next;
			}
			current.next=nodeElement;
		}
		this.length++
	}
	insert(position:number,element:T):boolean{
		//1.判断越界
		if(position<0||position>this.length) return false;
		//2.创建新节点
		const nodeElement:NodeElements<T> = new NodeElement<T>(element);
		//3.插入元素
		if(position==0){
			nodeElement.next = 	this.head;
			this.head = nodeElement;
		}else{
			let index:number = 0;
			let current:NodeElements<T> = this.head;
			let previous:NodeElements<T> = null;
			while (index++<position) {
				previous = current;
				current = current.next;
			}
			previous.next = nodeElement;
			nodeElement.next=current;
		}
		this.length++;
		return true;
	}
	get(position: number): NodeElements<T>|T {
		//1.判断越界
		if(position < 0||position>this.length-1) return null;
		//2.查找该位置的元素
		let index = 0;
		let current = this.head;
		while (index++<position) {
			current= current.next;	
		}
		return current.element;
	}
	indexOf(element: T):number {
		let index:number=0
		let current:NodeElements<T>=this.head;
		while (current) {
			if(current.element==element){
				return index
			}
			index++;
			current=current.next
		}
		return -1;
	}
	update(position: number, element: T):void|boolean {
	 	const reslut =	this.removeAt(position);
		this.insert(position,element);
		return reslut;
		//1.判断越界
		// if(position<0||position>this.length) return false;
		// let index = 0
		// let current = this.head
		// while (index++<position) {
		// 	current=current.next
		// }
		// current.element=element;
	}
	removeAt(position: number):void|boolean {
		//1.判断越界
		if(position<0||position>this.length) return false;
		let index:number=0;
		let current:NodeElements<T> = this.head;
	  let previous:NodeElements<T> = null;
		if(position===0){
			this.head=current.next
		}else{
			while (index++<position) {
				previous = current;
				current = current.next;
			}
		}
		
		previous.next = current.next;
		this.length--;
	}
	remove(element: T):void|boolean {
		const index:number = this.indexOf(element);
		if(index===-1){
			return false
		}else{
			this.removeAt(index)
		}
		return true;
		// let current = this.head
		// let previous = null;
		// while (current.element!=element) {
		// 	previous=current
		// 	current=current.next;
		// 	if(current==null) return false
		// }
		// previous.next = current.next;
		// this.length--;
		// return true;
	}
	isEmpty() :boolean{
		return this.length===0;
	}
	size():number {
		return this.length;
	}
}

