 // 面向对象思维
 function WaterFall(options){
    this.w = options.width; // 把传进的列的宽度赋值给对象WaterFall下的w属性
    this.column = options.columnCount; // 把传进的列的个数赋值给对象WaterFall下的column属性
    this.space = options.distance; // 把传进的列与列之间的间距赋值对象WaterFall下的space属性
    this.items = options.aLi;   //把传进的所有的li标签赋值给对象WaterFall下items属性
}
// 给WaterFall 对象添加init方法
WaterFall.prototype.init = function(){
    this.arrHeight = []; // 记录每一行li标签的高度
    for(var i = 0 ; i < this.items.length;i++){
            var h =  this.items[i].offsetHeight ; // 获取每一个li标签的高度
            if(i < this.column){
                this.arrHeight.push(h)  ; // 把第一行的所有li高度记录下
                this.items[i].style.left = (i*(this.w+this.space))+"px";
            }else {
                    // 这里开始计算第五张之后的名片高度
                    var minHeight =  this.arrHeight[0];//假设数组第一个是最小值
                    var minIndex = 0; //假设最小值的元素的索引值为0 
                    for(var j = 0; j < this.arrHeight.length;j++){
                            if(minHeight > this.arrHeight[j]){
                                minHeight =  this.arrHeight[j];// 把最小值赋给假设的变量
                                minIndex = j ;// 获取最小值的索引值
                            }
                    }
                    //更新数组的高度了
                    this.arrHeight[minIndex]+= h+10; 
                    this.items[i].style.top = (minHeight+10)+ "px";// 在最小高度的li下方添加一张图片的top位置
                    this.items[i].style.left =(minIndex*(this.w+this.space))+"px"; // 在最小高度的li下方添加一张图片的left位置
            }
    }

}