import {LinkedList,NodeElement} from './linked_list'
import {NodeElements} from "./linked_listTypeing"
class DobleNode<T> extends NodeElement<T>{
	prev: NodeElements<T>;
	constructor(element:T) {
		super(element)
		this.prev = null;
	}
}
export class  DoubleLinkedList<T> extends LinkedList<T> {
	tail: NodeElements<T>;
	constructor() {
		super();
		this.tail =null; 
	}
	append(element:T):void{
		const dobleNode = new DobleNode<T>(element);
		if(this.head===null){
			this.head = dobleNode;
			this.tail = dobleNode;
		}else{
			this.tail.next=dobleNode;
			dobleNode.prev=this.tail;
			this.tail=dobleNode;
		}
		this.length++;
	}
	insert(position:number,element:T):boolean{
		//1.判断越界
		if(position<0||position>this.length) return false;
		let dobleNode = new DobleNode<T>(element);
		if(position===0){
			if(this.head==null){
				this.head=dobleNode;
				this.tail=dobleNode;
			}else{
				dobleNode.next = this.head;
				this.head.prev = dobleNode;
				this.head=dobleNode;
			}
		}else if(position==this.length){
			this.tail.next=dobleNode;
			dobleNode.prev=this.tail;
			this.tail=dobleNode
		}else{
			let index:number = 0;
			let current:NodeElements<T> = this.head;
			let previous:NodeElements<T>=null;
			while (index++<position) {
				previous = current;
				current=current.next;
			}
			previous.next = dobleNode;
			dobleNode.prev = previous;
			dobleNode.next = current;
			current.prev = dobleNode;
		}
		this.length++;
	}
	removeAt(position:number):void|boolean{
		//1.判断越界
		if(position<0||position>this.length-1) return false;
		if(position===0){
			if(this.length===1){
				this.head=null;
				this.tail = null;
			}else{
				this.head = this.head.next;
				this.head.prev=null;
			}
		}else if(position===this.length-1){
			this.tail.prev.next =	null;
			this.tail = this.tail.prev;
		}else{
			let index:number = 0;
			let current:NodeElements<T> = this.head;
			let previous:NodeElements<T> = null;
			while (index++<position) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			current.next.prev = previous;
		}
		this.length --;
	}
	remove(element:T):void|boolean{
		const index:number = this.indexOf(element);
		if(index===-1){
			return false
		}else{
			this.removeAt(index)
		}
		this.length--;
		return true;
	}
}