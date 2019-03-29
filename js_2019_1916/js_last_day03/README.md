####  js 高级部分
1.0 认识对象(  万物皆对象 )
var obj = {
    color:"red",
    sayHello:function(){}
}

function Person(){ 
    this.name="xiaohong"
}
例如 ：
Object  Array Function Math  Date  XMLHttpRequest

对象 : 包含一个（许多）属性或者一个（许多）方法的一个集合。 


-  对象里的 this ！
window 也是对象
var name = ""; 

setInterval(function(){ // 定时器函数 ， 调用者是 window 
    // this  指向的是window

},1000)

- 怎么知道 this 的指向？
 a. 函数的调用者
 b. 看this在哪一个作用域


2.0 构造函数 (对象)
function Person(){
   this.name = "小红"
   this.show = function(){}
}

Person.prototype.init = function(){}
Person.prototype.age = 20;
Person.prototype.sayHello = function(){}

a . 构造对象
b. 原型对象
c. 实例对象

4.0 new的理解
- new 是做什么的 ？ var p =  new Person()
 new 实际上他是创建一个空对象。把构造对象的属性和方法赋值给这个空对象。（实例化）
console.log(p.name) // "小红"

3.0 原型的认识  
- 凡是对象都有原型
Array Object Function

prototype 

constructor

__proto__



5.0 递归
