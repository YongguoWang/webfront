### LESS && SASS
##### 概念
- CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为
目标生成文件，然后开发者就只要使用这种语言进行编码工作。
- 例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如右侧代码编辑器中就使用了变量$color）等等在编程语言中的一些
基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

##### 其它 CSS 预处理器语言：
- CSS 预处理器技术已经非常的成熟，而且也涌现出了很多种不同的 CSS 预处理器语言，比如说：

+ Sass（SCSS）
+ LESS
+ Stylus
+ Turbine
+ Swithch CSS 。。。

##### 什么是 Sass？
- Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。
- Sass 能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。

##### Sass 和 SCSS 有什么区别？
####### Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

- 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
- 语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，不带大括号({})和分号(;)，而 SCSS 的语法书写和我们的 CSS 语法
书写方式非常类似。


##### Sass安装（windows版）
- 当你的电脑中安装好 Ruby 之后，接下来就可以安装 Sass 了。同样的在windows下安装 Sass 有多种方法。但这几种方法都是
非常的简单，只需要在你的命令终端输入一行命令即可。

1、通过命令安装 Sass

```

 打开电脑的命令终端，输入下面的命令：

 gem install sass
 提醒一下，在使用 Mac 的同学，可能需要在上面的命令前加上"sudo"，才能正常安装：

 sudo gem install sass
 如果上面的方法没有安装成功，可以使用下面的两种方法。


```

2、淘宝 RubyGems 镜像安装 Sass

```
第一步：移动默认的源

gem sources --remove https://rubygems.org/
第二步：指定淘宝的源

gem sources -a https://ruby.taobao.org/    =====  gem sources -a https://gems.ruby-china.com

第三步：查看指定的源是不是淘宝源

gem sources -l
返回结果如下：

*** CURRENT SOURCES ***
https://ruby.taobao.org
请确保只有 ruby.taobao.org。如果无误之后，执行下面的命令：

gem install sass

```
 
##### Sass 语法格式

1. Sass 语法是 Sass 的最初语法格式，他是通过 tab 键控制缩进的一种语法规则，而且这种缩进要求非常严格。
另外其不带有任何的分号和大括号。常常把这种格式称为 Sass 老版本，其文件名以“.sass”为扩展名。

+ 假设我们有一段这样的 CSS 代码：
```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
现在用 Sass 的语法格式来编写：

$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
  
在整个 Sass 代码中，我们没看到类似 CSS 中的大括号和分号。
```
- 注：这种语法格式对于前端人员都不太容易接受，而且容易出错。

2. SCSS语法格式
+ 同样的这段 CSS 代码：
```

body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
我们使用 SCSS 语法格式将按下面这样来书写：

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
