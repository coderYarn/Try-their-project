import Stack from "./index";
export default function dec2bin(num){//而进制
	let stack = new Stack()
	while(num>0){
		let remainder = num%2;
		num = Math.floor(num/2);
		stack.push(remainder)
	}
	let sum = '';
	while (!stack.isEmpty()){
		sum+=stack.pop();
	}
	return sum;
}