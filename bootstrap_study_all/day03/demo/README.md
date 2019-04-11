### 昨天的内容
1. bootstrap 组件

2. bootstrap 插件 
- 基于jquery的基础上，进行封装的插件。



### 今天的内容
1. 微金所的项目的编写

2. 遇到的问题
-  box-sizing: border-box;  
改变盒子大小的计算方式 ：忽略padding值。


3. 轮播图结构
```
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <!-- 控制点 -->
                <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                </ol>
                
                <!-- 轮播图 -->
                <div class="carousel-inner" role="listbox">
                        <div class="item active">
                                <a class="pc_img hidden-xs" href="javascript:;"><img src="./images/slide_01_2000x410.jpg" alt=""></a>
                                <a class="mb_img hidden-sm hidden-md hidden-lg" href="javascript:;"><img src="./images/slide_01_640x340.jpg" alt=""></a>
                        </div>
                </div>
                
                <!-- 控制：左右切换 -->
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" ></span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" ></span>
                </a>
</div>

```

### 脚手架工具（排山）
vue-cli