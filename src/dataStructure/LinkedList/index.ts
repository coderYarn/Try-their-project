export class NodeItem{
	element: any;
	next: any;
	constructor(element){
		this.element = element;
		this.next = null
	}
}

export class LinkedList{
	length: number;
	head: any;
	constructor(){
		this.head = null;
		this.length = 0;
	}
	append(element:any):void{
		//1.根据element创建Node对象
		const newNode = new NodeItem(element);
		//2.追加到最后
		if(!this.head){
			this.head = newNode;
		}else{
			let current = this.head;
			while(current.next){
				current=current.next;
			}
			current.next=newNode;
		}
		this.length++;
	}
	insert(position:number,element:any):void|boolean{
		if (position<0||position>this.length)return false;
		let newNode = new NodeItem(element);
		
		if (position === 0){
			newNode.next = 	this.head.next 
			this.head = newNode;
		}else{
			let current = this.head;
			let previous=null;
			let index = 0;
			while (index++<position){
				previous=current
				current=current.next;
			}
			previous.next =newNode
			newNode.next=current;
		}
		this.length++
	}
	
	get(position:number):any{
		//越界
		if(position<0||position>this.length-1) return null;
		//查找元素 
		let index = 0
		let current = this.head
		while (index++<position){
			current = current.next;
		}
		return current.element;
	}
	indexOf(element:any):number{
		let current = this.head
		let index = 0 ;
		while(current){
			if(current.element==element){
				return index;
			}
			index++;
			current=current.next;
		}
		return -1;
	}
	update(position:number,element:number):void{
		this.removeAt(position)
		this.insert(position,element)
	}
	removeAt(position:number):any{
		if(position<0||position>this.length-1) return null;
		//删除元素
		let index = 0;
		let current = this.head;
		let previous=null;
		if (position===0){
			this.head=current.next;
		}else{
			while (index++<position){
				previous=current
				current=current.next
			}
			previous.next=current.next
		}
		this.length--;
		return current.element;
	}
	remove(element:any):void{
		let idx = this.indexOf(element)
		if (idx==-1)return ;
		this.removeAt(idx)
	}
	isEmpty():boolean{
		return this.length==0;
	}
	size():number{
		
		return this.length;
	}
}