import { type } from "os";

let isDone :boolean = false;

// interface Obj{
// 	num:string
// 	toString:()=>void
// }

// type Obj={
// 	num:string
// 	toString:()=>void
// }
// let obj:Obj = {
// 	num:'123',
// 	toString(){
// 		console.log(11);
// 	}
// }
// console.log(obj.num);

// function test():void{

// }

// null 空值 && undefined 未定义

// let a:null= null;
// let b:undefined = undefined;

// a= 3;
// a='3';
// b=4;
// b='4'

// let num:number|undefined = undefined;
// let bool:boolean|null = null;

// declare function create(o:object|null):void;


// function test(a:number,b:number):string {
// 	return ''+a+b;
// }

// let count :number;
// count = 3;

// let count = 3;

// function  test(a: number,b: number):number {
// 		return a+b
// }

// let a:string|number;
// a= 1;
// a='123';

// function test(a:number|string) {
// 	return a.toString()
// }
// test(1)

// let a :string|number;
// a='123';
interface  Person{
	readonly id :number; //不可改 
	name: string;
	age?: number;
	[Name:string]:any
}
let person:Person = {
	id:123,
	name:"张三",
	age:19,
	sex:'male',
	car :'mzd',
	wife:14
}

//数组
let arr:number[]=[1,2,3];
let arr2:string[]=['1','2','3'];
let arr3:Array<number>=[1,2,3];
let arr4:Array<string>=['1','2','3'];
// let list :Person[]=[{
// 	id:123,
// 	name:"张三",
// 	age:19,
// 	sex:'male',
// 	car :'mzd',
// 	wife:14
// }]	

// interface List{
// 	[index:number]:number
// }

// let list:List=[1,2,3,4,5]
// function test() {
// 	let args:IArguments = arguments;
// }
// test();

// function test(a:number,b:number):number{
// 	return a+b;
// }
// console.log(test(1,2));

// let test1:(a:number,b:number)=>number= function (a,b) {
// 	return a+b;
// }
// console.log(test1(1,2));
// function reverse(x :string):string;
// function reverse(x :number):number;
// function reverse(x:string|number) {
// 	if(typeof x === 'string'){
// 		return	x.split('').reverse().join('')
// 	}else{
// 		return Number( x.toString().split('').reverse().join(''))
// 	}
// }
// console.log(reverse(123));

// class Greeter {
// 	private getting:string
// 	constructor(message:string) {
// 		this.getting = message;

// 	}
// 	public greet(){
// 		return 'hello '+this.getting;
// 	}
// }
// let g = new Greeter('world');
// console.log(g.greet());

// class Animal {
// 	move(distanceInMeters:number=0){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 	}
// }

// class Dog extends Animal {
// 	constructor() {
// 			super()
// 	}
// 	bark(){
// 		console.log('woof!woof!');
		
// 	}
// // }
// class Animal {
// 	name:string
// 	constructor(name:string){
// 		this.name=name
// 	}
// 	move(distanceInMeters:number=0){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 	}
// }

// class Snake  extends Animal {
// 	constructor(name:string) {
// 			super(name)
// 	}
// 	move(distanceInMeters:number=5){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 		super.move(distanceInMeters)
// 	}
// }
// class Horse  extends Animal {
// 	constructor(name:string) {
// 			super(name)
// 	}
// 	move(distanceInMeters:number=45){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 		super.move(distanceInMeters)
// 	}
// }
// let sam = new Snake('sammy the Python')
// let tom:Animal = new Horse('tommy the Palomino')
// sam.move()
// tom.move()

//OOP : 封装 继承 多态

//类成员的修饰符：

//public 公共的成员属性:
//1.自身调用
//2.子类可以调用
//3.实例调用

/**
 * private:
 * 1.自身调用
 */
/**
 * protected
 * 1.自身调用
 * 2.子类可以调用
 */
/**
 * 
 * 
*/
// class Animal {
// 	public readonly name:string
// 	protected constructor(name:string){
// 		this.name=name
// 	}
// 	protected move(distanceInMeters:number=0){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 	}
// }

// class Snake  extends Animal {
// 	constructor(name:string) {
// 			super(name)
// 	}
// 	move(distanceInMeters:number=5){
// 		console.log(`Animal moved ${distanceInMeters}m`);
// 		super.move(distanceInMeters)
// 	}
// }
// let sam = new Snake('sammy the Python')
// sam.move()

// let passcode = 'secret passcode';
// class Employee {
// 	private _fullName:string;
// 	get fullName():string{
// 		return this._fullName;
// 	}
// 	set fullName(newName:string){
// 		if(passcode && passcode=='secret passcode'){
// 			this._fullName=newName;
// 		}else{
// 			console.log('Error:Unauthorized');
			
// 		}
// 	}
// }
// let employee=new Employee();
// employee.fullName = "Bob Smith";
// if(employee.fullName){
// 	console.log(employee.fullName);
// }

// class Grid {
// 	static orgin = {x:0,y:0}
// 	calculateDistanceFromOrigin(point:{x:number,y:number}){
// 		let xDist = (point.x-Grid.orgin.x);
// 		let yDist = (point.y-Grid.orgin.y);
// 		return Math.sqrt(xDist*xDist+yDist*yDist)/this.scale
// 	}
// 	constructor(public scale :number) {		}
// }
// let grid1 = new Grid(1.0)
// let grid2 = new Grid(5.0)
// console.log(grid2.orgin);

// console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
// console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}));

// 抽象类 无法创建实例
// 抽象方法一定要有实现
// abstract class Animal{
// 	abstract makeSound():void;
// 	move():void{
// 		console.log('roaming the earch');
		
// 	}
// }
// class Snack extends Animal{
// 	makeSound(): void {
// 		throw new Error("Method not implemented.");
// 	}
// }

// class Rhino extends Animal{
// 	makeSound(): void {
// 		throw new Error("Method not implemented.");
// 	}
// }
// new Snack()

//接口可以继承类

// class Greeter {
// 	static standardGreeting = 'hello,there';
// 	getting:string;
// 	constructor(message:string) {
// 		this.getting = message;

// 	}
// 	public greet(){
// 		if(this.getting){
// 		return 'hello '+this.getting;
// 		}else{
// 			return Greeter.standardGreeting;
// 		}
// 	}
// }
// let greeter :Greeter
// greeter = new Greeter('woeld');
// console.log(greeter.greet());

// let greeterMaker :typeof Greeter = Greeter;

// greeterMaker.standardGreeting='Hey there!'

// let greeter2:Greeter = new greeterMaker('1');

// console.log(greeter2.greet());

// interface LabelledValue{
// 	label:string
// }
// function printLabel(labelledObj:LabelledValue) {
// 		console.log(labelledObj.label);
// }
// let myobj={size:10,label:"请你吃饭拉"}
// printLabel(myobj)

// interface Point{
// 	readonly x:number
// 	readonly y:number
// }
// let a :number[] = [1,2,3,4]
// let a1 :Array<number> =[1,2,3,4];
// let ro:ReadonlyArray<number> = a;
// ro[0]=12;
// ro.push(5);
// ro.length = 100;
// a = ro;

// interface SearchFunc{
// 	(a:string,b:string):boolean
// }
// // type SearchFunc =(a:string,b:string)=>boolean

// const searchFunction:SearchFunc=(a,b)=>{
// 	return false
// }

// interface Alarm {
// 	alert():void;
// }
// interface Light{
// 	lingthOn():void;
// 	 color:string;
// 	 lingthOff():void;
// }
// class Door {
// 	constructor(parameters) {
		
// 	}
// }

// class SecurityDoor extends Door implements Alarm {
// 	alert(){
// 		console.log('hei');
		
// 	}
// }

// class Car implements Alarm,Light{
// 	color= 'red'
// 	lingthOn(){

// 	}
// 	lingthOff(){

// 	}
// 	alert(){
// 		console.log('caralert');
		
// 	}
// }

// interface ClockInter{
// 	courrentTime :Date;
// 	getTime(h:number,m:number):any
// }
// interface ClockConstructor {
// 	new(h:number,m:number):any
// }

// class Clock implements ClockConstructor {
// 	courrentTime=new Date()
// 	constructor(h:number,m:number){}
// 	getTime(h:number,m:number){

// 	}
// }

// function createClock(c:ClockConstructor,h:number,m:number) {
// 		return new c(h,m)
// }
// createClock(Clock,1,2)

// interface Shape{
// 	color:string
// }
// interface Square extends Shape{
// 	sideLength:number
// }

// //类型断言
// let square:Square = {} as Square;
// // let square = <Square>{};

// square.color='11';
// square.sideLength=22


// function identity<T>(arg:Array<T>):Array<T>{
// 	console.log(arg.length);
// 	return arg;
// }

// function identity<T>(arg:T):T{
// 	return arg;
// }
// interface IdentityInterFace<T>{
// 	(arg:T):T
// }
// interface IdentityInterFace{
// 	<T>(arg:T):T
// }
// let a :<T>(arg:T)=>T = identity;
//对象字面量
// let a :{<T>(arg:T):T}=identity;
// let a :IdentityInterFace<number> = identity;
// let a :IdentityInterFace= identity;

// <string>a('123')

