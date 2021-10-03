import {StackDefine} from './StackTypeing'
export class Stack extends StackDefine{
	constructor() {
		super();
	}
	push(element){//:添加一个新元素到栈顶位置
		this.items.push(element)
		this.sizes=this.items.length;
	}
	pop():number|boolean{//移除栈顶的元素,同时删除元素
		if(this.items.length!==0){
			let popNum =	 this.items.pop();
			 this.sizes=this.items.length;
			 return popNum;
		}else{
			return false
		}
	}
	peek():number{//返回栈顶的元素，不对栈做任何的修改
		console.log(this.items[this.items.length-1]);
		return this.items[this.items.length-1]
	}
	isEmpty():boolean{//如果里没有任元素就返回true,否则返回false
		
	 return this.items.length==0?true:false
	}
	size():number{//返回队列包含的元素个数,与数组的length属性类似
		console.log(this.items.length);
		return this.items.length
	}
}

export function dec2binar(num:number):string{
	const stack:Stack = new Stack();
	let binString:string=''
	while (num>0) {
		let remainder:number = Math.floor(num %2);
		num = Math.floor(num/2);
		stack.push(remainder);
	}
	console.log(stack.isEmpty());

	while (!stack.isEmpty()) {
		binString+=stack.pop()
	}
	console.log(binString);
	return binString;
}