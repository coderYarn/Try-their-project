
export class Mvvm {
	el: HTMLElement;
	// private _data: object;
	data: {};
	domPool: {};
	constructor(el:string,data:object) {
		this.el = document.querySelector(el);
		// this._data = data;
		this.data = data;
		this.domPool = {}
		this.init()
		this.initDom()
	}
	init(){
	this.initData()
	}
	bindDom(el:HTMLElement|ChildNode){
	const childNodes = el.childNodes;
	childNodes.forEach(item =>{
		if(item.nodeType ===3){
			const _value = item.nodeValue;
			if(_value.trim().length){
				let _isVal = /\{\{.+?}\}/.test(_value)
				if(_isVal){
					const _key = _value.match(/\{\{(.+?)\}\}/)[1].trim()
					this.domPool[_key] = item.parentNode;						
					this.domPool[_key].innerText = this.data[_key]||undefined;
				}
			}
		}
		item.childNodes && this.bindDom(item)
	})
	}
	initDom(){
	this.bindDom(this.el)
	this.bingInput(this.el)
	}
	initData(){
	const _this = this;
	this.data = new Proxy(this.data,{
		get(target,key){
			return Reflect.get(target,key)
		},
		set(target,key,newValue){
			_this.domPool[key].innerText = newValue;
			return  Reflect.set(target,key,newValue)
		}
	})
	}
	//  initData(){
	// 	 const _this = this;
	//   this.data={};
	// 	for (const key in this._data) {
	// 		Object.defineProperty(this.data,key,{
	// 			get(){
	// 				return _this._data[key]
	// 			},
	// 			set(newValue){
	// 				_this._data[key] = newValue;
	// 				_this.domPool[key].innerText=newValue;
	// 			}
	// 		})
	// 	}
	// }
	bingInput(el:HTMLElement){
		const _allInput = el.querySelectorAll('input')
		_allInput.forEach(input =>{
			const _vModel = input.getAttribute('v-model');
			if(_vModel){
				input.addEventListener('keyup',this.handleInput.bind(this,_vModel,input),false)
			}
		})
	}
	handleInput(key,input){
		const _value = input.value;
		this.data[key]=_value;
	}
	setData(key,value){
		this.data[key] = value;
	}
 }

 /**
	* 1.数据 -> 响应式的数据 Object.defineProperty Proxy
	* 2.input -> input/keyup -> 事件处理函数的绑定 -> 改变数据
	* 3.相关的DOM节点 -> 数据绑定在一起
	*   操作数据的某个属性 -> 对应的DOM就改变
 */