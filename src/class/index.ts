// import {Queue,passGame,PriorityQueue} from './structure/Queue/Queue'
// import {LinkedList} from './structure/linked_list/linked_list';
// import {DoubleLinkedList} from './structure/linked_list/doublelinked_list'

// const doubleLinkedList = new DoubleLinkedList<string>()
// doubleLinkedList.append('aaa')
// doubleLinkedList.append('bbb')
// doubleLinkedList.append('ccc')
// doubleLinkedList.append('ddd')
// console.log(doubleLinkedList);
// doubleLinkedList.insert(2,'我是轩哈哥')

// doubleLinkedList.update(2,'轩哈个')
// console.log(doubleLinkedList);

// const linkList = new LinkedList()
// linkList.append('aaa')
// linkList.append('bbb')
// linkList.append('ccc')
// linkList.append('ddd')
// linkList.insert(1,'eee')
// linkList.insert(0,'fff')
// // console.log(linkList);
// // console.log(linkList.get(0));
// console.log(linkList.indexOf('eee'));
// linkList.update(3,'sada')
// // linkList.removeAt(3)
// console.log(linkList.isEmpty());
// linkList.remove('eee')
// console.log(linkList.size());
// let sd= passGame(['why','xiao','ming','tom'],3)
// console.log(sd);
// const app =document.getElementById('app')
// console.log(app);


// const N_input = document.createElement('input')
// N_input.placeholder='输入姓名';
// const L_input = document.createElement('input')
// L_input.placeholder='输入等级';
// const btn = document.createElement('button')
// const UL_Dom = document.createElement('ul')

// app.appendChild(N_input)
// app.appendChild(L_input)
// btn.innerText='加入'
// app.appendChild(btn)
// app.appendChild(UL_Dom)
// const priorityQueue = new PriorityQueue()
// btn.onclick=()=>{
// 	priorityQueue.enqueue(N_input.value,Number(L_input.value));
// 	console.log(...priorityQueue.items);
// 	const dom = document.createDocumentFragment();
// 	UL_Dom.innerHTML = '';
// 	for (let index = 0; index < priorityQueue.items.length; index++) {
		
// 		const li_Dom = document.createElement('li')
// 		li_Dom.innerText=`${priorityQueue.items[index].element}  ----  ${priorityQueue.items[index].priority}`
// 		dom.appendChild(li_Dom)
// 	}
// 	UL_Dom.appendChild(dom)
// }




//函数柯里化
// function url(protocol){
// 	return function(hostname,pathname){
// 		return `${protocol}${hostname}${pathname}`
// 	}
// }

//let url1 = url('https://')("www.baidu.com",'/dir')

// const whichEvent=(function () {
// 	if(window.addEventListener){
// 		return function (element,type,listener,useCapture) {
// 			element.addEventListener(type,function (e) {
// 				listener.call(element,e);
// 			},useCapture)
// 		}
// 	}else if(window.attachEvent){
// 		return function(element,type,handler){
// 			element.attachEvent('on'+type,function(e){
// 				handler.call(element,e)
// 			})
// 		}
// 	}
// })();

// function add() {
// 	let args = Array.prototype.slice.call(arguments);
// 	let inner = function(){
// 		args.push(...arguments);
// 		return inner;
// 	}
// 	inner.toString=function(){
// 		let sum = args.reduce(function(pre,cur){
// 			return pre+cur;
// 		})
// 		return sum;
// 	}
// 	return inner
// }
// console.log(add(1)(2)(4));
// const nameList1=[
// 	{mid:'哈傻K',profession:'中单'},
// 	{mid:'sha',profession:'中单'},
// 	{mid:'卡片',profession:'中单'},
// 	{mid:'发条',profession:'中单'},
// 	{mid:'泰隆',profession:'中单'},
// ]
// const nameList2=[
// 	{adc:'VN',profession:'ADC'},
// 	{adc:'轮子妈',profession:'ADC'},
// 	{adc:'老鼠',profession:'ADC'},
// ]
// const curring = function(name){
// 	return function(element){
// 		return element[name]
// 	}
// };
// const name_mid = curring('mid');
// const name_adc = curring('adc');
// console.log(nameList1.map(name_mid));

// var person = {
//     fullName: function() {
// 				let a = Array.prototype.slice.call(arguments)
// 				console.log(a);
//         return this.firstName + " " + this.lastName;
//     }
// }
// var person1 = {
//     firstName: "Bill",
//     lastName: "Gates",
// }
// var a = [10,20,30,40]
// person.fullName.apply(person1,a);
// function debounce(fn,delay){
// 	let task = null;
// 	return function () {
// 			if (task) {
// 				clearTimeout(task)
// 			}
// 			task = setTimeout(()=>{
// 				fn.call(this,arguments)
// 			},delay)
// 	}
// }
// function throttle(fn,delay){
// 	let timer =null;
// 	return function(){
// 		if(!timer){
// 			timer = setTimeout(()=>{
// 				timer = null;
// 				fn.apply(this,arguments);
// 			},delay)
// 		}
// 	}
// }
// const Btn = document.createElement('button')
// Btn.innerHTML='按钮';
// const app = document.getElementById('app')
// app.appendChild(Btn)
// function hanld(){
// 	console.log(111);
// }
// Btn.addEventListener('click',throttle(hanld, 1000))

// function permute(nums: number[]): number[][] {
// 	let res = [];
//  let set = new Set();

//  function dfs() {
// 	if (set.size ===nums.length) {
// 		res.push(Array.from(set))
// 	}
// 	for (let i = 0; i < nums.length; i++) {
// 		if (set.has(nums[i])) continue;
// 		set.add(nums[i])
// 		dfs()
// 		set.delete(nums[i])
		
// 	}
//  }

//  dfs();
//  return res
// };

// let arr = [1,2,3]

// console.log(permute(arr));
