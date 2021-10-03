import TodoDom from "./TodoDom";
import { ITodoData } from "./typeings"

class TodoEvent extends TodoDom{
	private todoData :ITodoData[];

	constructor(todoData :ITodoData[],todoWarpper:HTMLElement){
		super(todoWarpper)
		this.todoData= todoData;
		this.init();
	}
	private init(){
		this.initList(this.todoData)
	}
	public addTodo(todo:ITodoData):undefined|number{
		const _todo:null|ITodoData = this.todoData.find((item:ITodoData)=>item.content===todo.content);
		if(!_todo){
			this.todoData.push(todo);
			this.addItem(todo);
			return;
		}
		return 1001;
	}
	public removeTodo(target:HTMLElement,id :number){
		this.todoData=this.todoData.filter((item:ITodoData)=>item.id!==id);
		this.removeItem(target);
	}
	public toggleComplete(target:HTMLElement,id:number){
		this.todoData=this.todoData.map((item:ITodoData)=>{
			if(item.id===id){
				item.completed=!item.completed;
				this.changeCompleted(target,item.completed)
			};
			return item;
		})
	}
}

export default TodoEvent;