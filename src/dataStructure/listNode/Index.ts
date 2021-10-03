interface ListNodeFace{
	data:number[]
	length:number
}

class ListNode{
	list: ListNodeFace;
	constructor(){
		this.list =	this.InitList()
	}
	InitList(){
		let list:ListNodeFace={
			data:[],
			length:0
		}
		return list
	}
	InsertList(i:number,data:number):boolean{
		if (i < 0 || i>this.list.length+1){
			return false;
		}
		if (!this.list.data[i-1]){
			this.list.length++;
		}
		this.list.data[i-1]=data;
	}
	IsEmpty():boolean{
		return this.list.length?false:true;
	}
	Clear():void{
		this.list.data.length=0
		this.list.length=0;
	}
	Traverse(){
		for (let i = 0; i < this.list.length; i++) {
			console.log(this.list.data[i]);	
		}
	}
	Destruction(){
		delete this.list
	}
}

let list = new ListNode();
list.InsertList(1,1)
list.InsertList(2,2)
list.InsertList(1,3)
list.Traverse()


