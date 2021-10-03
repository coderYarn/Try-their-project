	/**
	 * 1.正则：用来处理(匹配)字符串的;正则式单独一套语法体系
	 * 元字符:在正则当中特殊语义的字符; . [] [^] ? * + {min,max}^ $ () \1 \2 |;
	 */
	/**
	 * 1.1转译字符 :\
	 * 1.1.1字符组:[]范围;在固定范围内匹配一个;注意字符组的顺序;[^]范围取反;
	 * \d[0-9]\D[^0-9]
	 * \w[0-9A-Za-z_] \W[^0-9A-Za-z_]
	 * \s[\f\n\r\t...]空白字符;\S[^\f\n\r\t...]
	 */

	//console.log(/\+/.test('+'));

	/*
	* 1.1.1字符组:[]范围;在固定范围内匹配一个;注意字符组的顺序;[^]范围取反;
	* \d[0-9]\D[^0-9]
	* \w[0-9A-Za-z_] \W[^0-9A-Za-z_]
	* \s[\f\n\r\t...]空白字符;\S[^\f\n\r\t...]
	*/
	// console.log(/[0-9A-Za-z]/.test('3234asda'));
	// console.log(/[^0-9A-Za-z_]/.test('++'));//取反
	// console.log(/[^0-9^]/.test('^')); 
	// console.log(/[^0-9]]/.test(']')); 
	// console.log(/[\w]/.test('assdas#123dasdasd###')); 
/**
 * 2.量词:匹配多个,修饰个数;
 * {n}匹配N次;
 * {n,m}匹配 最少n次,最多m次;
 * {n,}匹配 最少n次,最多无限制;
 * 简写
 * ?{0,1}
 * *{0,}
 * +{1,}
 */
 	// console.log(/[0-9][0-9][0-9][0-9][0-9][0-9]/.test('526133'))
	// console.log(/\d\d\d\d\d\d/.test('526133'))

	// console.log(/\d{2,6}/.exec('5162331'));
	// console.log(/\d{0,1}/.exec('5162331'));
	// console.log(/\d{1,}/.exec('5162331'));
	//正则的贪婪模式，贪婪模式，能多就多
	// console.log(/a{1,}/.exec('aaaaaaa'));
	// console.log(/a+/.exec('aaaaaaa'));
	// console.log(/a{0,1}/.exec('aaaaaaa'));
	// console.log(/a?/.exec('aaaaaaa'));
	// console.log(/a{0,}/.exec('aaaaaaa'));
	// console.log(/a*/.exec('aaaaaaa'));
	// 非贪婪模式，能少就少
	// console.log(/a+?/.exec('aaaaaaa'));
	// console.log(/a??/.exec('aaaaaaa'));
	// console.log(/a*?/.exec('aaaaaaa'));

	//非贪婪模式 
	// console.log(/a+?/.exec('aaaaaaa'));
	// console.log(/a??/.exec('aaaaaaa'));
	// console.log(/a*?/.exec('aaaaaaa'));
	// //贪婪模式
	// console.log(/a+/.exec('aaaaaaa'));//一次||多次
	// console.log(/a?/.exec('aaaaaaa'));//零次||一次
	// console.log(/a*/.exec('aaaaaaa'));//零次||无限


	//.字符
	// console.log(/.{0,}/.exec('11'))

	/**
	 *() (?:)
	 *1.分组;
	 *2.引用;
	 *3.反向引用;
	 *4.非捕获?:
	 */
	//分组
	// console.log(/ab{2}/.exec('abab'));
	// console.log(/(ab){2}/.exec('abab'));
	// let exp = /ab{2}/
	
	// console.log(exp.exec('2021-5-23')[1]);
	// let exp1 =new RegExp('(ab){2}')
	// console.log(exp1.exec('abb'));
	// console.log(exp1.exec('abab'));

	//2021-5-23
	// console.log(/(\d{4})-(\d{1,2})-(\d{1,2})/.exec('2021-5-23'));
	// console.log(RegExp.$1);
	// console.log(RegExp.$2);
	// console.log(RegExp.$3); 
	
//引用
	// console.log(/[a-z]{2}/.exec('ad'));
	// console.log(/([a-z])\1/.exec('bb'));
	//<h1><h1>123</h1></h1>
	// console.log(/<([^<>]+)>[\W\w]*<\/\1>/.exec('<h1><h1>123</h1></h1>'));

	// console.log(/(abc){2}/.exec('abcabc'))
	// console.log(/(?:abc){2}/.exec('abcabc'))

	// | 选择或者关系; -- 分支; ||
	// 自左向右匹配,一旦匹配上,就不在回头
	// [0-46-9]
	// console.log(/12|34|56/.exec('1'))
	// console.log(/12|34|56/.exec('2'))
	// console.log(/12|34|56/.exec('12'))
	// console.log(/12|34|56/.exec('56'))
	// console.log(/12|34|56/.exec('123456'))
	// '192.168.1.1'
	//25[0-5] 250-255
	//2[0-4]\d 200 - 249
	//1\d\d 100-199
	//[1-9]\d 10- 99
	//\d 1-9
	// console.log(/25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d/.exec('168'));
	// 月 1-12 1-9]|1[0-2]   
	//日1-31 [1-9]|1\d|2[\d]|3[0-1]
	//小时0-24  \d|1\d|2[0-4]
	//分钟0-60 	\d|[1-5]\d|60
	//秒钟 0-60  \d|[1-5]\d|60

	//断言: \b \B
	// console.log(/\ban\b/.test('an apple'));//an前后是边界
	// console.log(/\ban\b/.test('anapple'));//an前后是边界
	// console.log(/an\b/.test('an apple'));//an后面是边界

	// console.log(/^an/.test('an apple'));//an开头
	// console.log(/le$/.test('an apple'));//le结尾

	//环视
	//仅跟着b 的 a
	// console.log(/a(?=b)/.exec('ab'));
	// console.log(/a(?!b)/.exec('ab'));
	// console.log(/a(?=b)/.exec('ac'));
	// console.log(/a(?!b)/.exec('ac'));
	// console.log('-----------------------------------');

	//匹配模式 g(geobae)全部匹配 i(igone case)忽略大小写 m(muetipy)多行匹配
	// console.log(/a/g.exec('1a,2a,3a'));
	// console.log('1a,2a,3a'.replace(/a/g,'b'));

	// console.log('--------------');
	// console.log(/a/.exec('Ab'));
	// console.log(/a/i.exec('Ab'));
	// console.log('--------------------');
	// console.log(/a/.exec('a\nb'));
	// console.log('--------------------');
	// console.log(/world$/m.test('hello world\n'));

/**
 * 正则优先级
 * 1./ 转译
 * 2.()分组, (?:)不获取匹配, (?=)环视, []字符集
 * 3. *零次或多次 , +一次或多次 , ?零次或一次 , {n}匹配确定的 n 次, {n,}至少匹配n 次, {n,m}至少匹配n到m次
 * 4.^取反, $以结束, \
 * 5|选择或者关系
 */ 

