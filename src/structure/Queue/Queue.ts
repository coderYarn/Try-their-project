import {QueueDefine} from './QueueTypeing'
//队列
export class Queue extends QueueDefine{
	constructor() {
		super()
	}
	enqueue(element,p?){//向队列尾部添加一个(或多个)新的项.
		this.items.push(element)
	}
	dequeue(){//移除队列的第一(即排在队列最前面的)项,并返回被移除元素
		return	this.items.shift()
	}
	front(){//返回队列中第一个元素--最先被添加,也将是最先被移除的元素.队列不做任何变动(不移除元素,只返回元素信息,--stack类的peek方法类型)
		if (this.items.length===0) return false
		return this.items[0]
	}
	isEnpty(){//如果队列不包含的任何元素,返回true,否则返回false
		return this.items.length===0
	}
	size(){//返回队列包含的元素个数,与数组的length属性类似
		return this.items.length;
	}
}
class QueueElement{
	element: any
	priority: any
	constructor(element,priority){
		this.element=element;
		this.priority=priority;
	}
}
//优先级队列
export class PriorityQueue extends Queue{
	enqueue(element,priority){
		const queueElement = new QueueElement(element,priority)
		if(this.isEnpty()){
			this.items.push(queueElement)
		}else{
				let added = false;
				for (let i = 0; i < this.items.length; i++) {
					const element = this.items[i];
					if(this.items[i].priority>queueElement.priority){
						this.items.splice(i,0,queueElement);
						added=true;
						break;
					}
				}
				if(!added) this.items.push(queueElement)
				
		}
	}
}
//击鼓传花
export function passGame(nameList,num){
	let queue = new Queue();
	for (let i = 0; i < nameList.length; i++) {
			queue.enqueue(nameList[i])
	}
	while (queue.size()>1) {
		for (let i = 0; i < num-1; i++) {
				let dec =queue.dequeue();
			queue.enqueue(dec);
		}
		let  a=	queue.dequeue()
	}
	return queue.front();
}