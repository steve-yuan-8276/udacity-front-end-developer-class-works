# ES 语法
### 声明变量：用let和const替代var
* let：let 声明的变量可以重新赋值，但是不能在同一作用域内重新声明。
* const：使用 const 声明的变量必须赋初始值，但是不能在同一作用域内重新声明，也无法重新赋值。

简单说，就是需要如果变量需要被重新赋值，就使用let；如果不需要，就使用const。**强烈建议放弃使用 var，改为使用 let 和 const。**

### 模板字面量：替代+，优雅是书写字符串

模板字面量用倒引号`（而不是单引号或双引号表示)，可以包含用 ${expression} 表示的占位符。这样更容易构建字符串。

举例：
使用+号连接字符串：

```
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}

let message = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';

```
使用新方法连接字符串：

```
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;

```
### 解构
解构从数组和对象中提取值并赋给独特的变量

解构数组中的值

```
const point = [10, 25, -34];

const [x, y, z] = point;

console.log(x, y, z);

输出的结果为：

Prints: 10 25 -34

```
在解构数组时，还可以忽略值。例如，const [x, , z] = point; 忽略了 y 坐标。

示例：
从 things 数组中获取三个颜色，并将它们存储在变量 one、two 和 three 中：

```
/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const[one,,,two,,,,three,,] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

```

### for of 循环
可以循环任何可迭代类型的数据，包括：String、Array、Map 和 Set。**注意不包含 Object 数据类型，即 {}（对象不可迭代）。**

示例：
**for 循环：**
```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
```

**for of循环：**
for...of 循环的编写方式和 for...in 循环的基本一样，只是将 in 替换为 of，可以忽略索引。

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}
```
注：
1）建议使用复数对象名称来表示多个值的集合。这样，循环该集合时，可以使用名称的单数版本来表示集合中的单个值。

2）可以随时停止或退出 for...of 循环

```
for(let day of days){
    day = day[0].toUpperCase() + day.slice(1);
   console.log(day);
}
```
### 展开运算符
用三个连续的点 ( ... ) 将字面量对象展开为多个元素。
比如：

```
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
```

应用案例：

使用 concat 方法结合数组

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);
```

使用展开运算符：

```
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits,...vegetables];

console.log(produce);

```

### 剩余参数
也用三个连续的点 ( ... ) 表示，能够将不定数量的元素表示为数组。

示例：

```
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

输出结果：
Prints: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```

注：该代码将 order 数组的值分配给单个变量。数组中的前三个值被分配给了 total、subtotal 和 tax，但是需要重点注意的是 items。通过使用剩余参数，数组中剩余的值（作为数组）被分配给了 items。

应用案例：
计算不定数字的和：

使用参数对象

```
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}
```

使用剩余参数

```
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```





