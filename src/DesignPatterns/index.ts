/**
 * 稀疏数组
 */

// let arr = [1,2,3,4,5];
// let arr = [1,,3,4,5];

// delete arr[1]
// console.log(arr);

/**
 * 类数组: length
 *  1.arguments 
 * 	2.domList
 * 	3.字符串
 * 	不能使用 foreach map  filter 这类
 */

// function test(){
// 	console.log(arguments);
// 	[].filter
// }
// test(1,2,3,4)

// let arr = [1,2,3,4]
// arr.push(5);
// console.log(arr);

// let str = '1234' as string
// Array.prototype.push.call(str,'5')
// console.log(str);

console.log([1,2,3,4].join(''));