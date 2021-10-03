import {ITodoData} from './js/typeings';
import TodoEvent from './js/TodoEvent';
;(function(doc){
	const oInput:HTMLInputElement = doc.querySelector('input');
	const oButton:HTMLButtonElement = doc.querySelector('button');
	const oTodoList:HTMLElement = doc.querySelector('.todo-list');
	const todoList: ITodoData[]=[
		{
			id:1,
			content:'123',
			completed:true
		},
		{
			id:2,
			content:'456',
			completed:true
		},
		{
			id:3,
			content:'789',
			completed:true
		},
		{
			id:4,
			content:'101',
			completed:true
		},
	];
	const todoEvent:TodoEvent = new TodoEvent(todoList,oTodoList);
	console.log(todoEvent);
	const init = ():void=>{
		bindEvent()
	}
	function bindEvent():void{
		oButton.addEventListener("click",handleAddBtnClick,false)
		oTodoList.addEventListener("click",handleAddListClick,false)
	}
	function handleAddBtnClick():void{
		const val:string = oInput.value.trim();
		let i:number =5;
		if(val.length){
		const ret =	todoEvent.addTodo(<ITodoData>{
				id:i++,
				content:val,
				completed:false
			})
			if(ret &&ret ==1001){
				alert("列表项已存在")
				return 
			}
			oInput.value='';
		}
	}
	function handleAddListClick(e:MouseEvent):void{
		const tar = e.target as HTMLElement;
		const tagName =tar.tagName;
		console.log(tagName);		
		if(tagName==='INPUT'||tagName==='BUTTON'){
			const id = parseInt(tar.dataset.id);
			switch (tagName) {
				case 'INPUT':
					todoEvent.toggleComplete(tar,id)
					break;
					case 'BUTTON':
					todoEvent.removeTodo(tar,id)
						break;
				default:
					break;
			}
		}
	}
	init()
})(document);