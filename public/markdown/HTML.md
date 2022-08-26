## 能用HTML/CSS解决的问题就不要用JS

### 1. 导航高亮

在正常态时，每个导航的默认样式为：

```css
nav li{
	opacity:0.5;
}
```

而在选中态即当前页面时，导航不透明度为1。

**WAY：**

1. 通过body给不同的页面添加不同的类，用于标识不同的页面：

   ```html
   <!-- home.html -->
   <body class="home"></body>
   <!-- buy.html -->
   <body class="buy"></body>
   ```

2. 所有的li也用class标识，有一个一一对应的关系：

   ```html
   <li class="home">home</li>
   <li class="buy">buy</li>
   ```

3. 设置当前页面的样式，覆盖掉默认样式

   ```css
   body.home nav li.home,
   body.buy nav li.buy{
   	opacity:1;
   }
   ```

另：hover时的高亮：

用css的`:hover`选择器实现：

```css
nav li:hover{
	opacity:1;
}
```

### 2. 鼠标悬浮时显示

eg.导航子菜单，这类场景的实现，一般要把隐藏的对象（子菜单）作为hover目标的子元素或者相邻元素，这样才方便用CSS控制。

**WAY1：**

1. 把menu当作导航的一个相邻元素：

   ```html
   <li class="user">用户</li>
   <li class="menu">
       <ul>
           <li>账户设置</li>
           <li>登录</li>
       </ul>
   </li>
   ```

2. menu在正常态下隐藏，hover时其本身显示：

   ```css
   .menu{
   	display:none;
   }
   
   .menu:hover{
       display:list-item;
   }
   ```

3. 导航hover时结合相邻选择器，把它显示出来：

   ```css
   .user:hover + .menu{
   	display:list-item;
   }
   ```

   **ps:**上面之所以说要写成相邻的元素，就是因为这里要使用相邻选择器！menu的位置可以用absolute定位。

4. 为了美观，menu和导航之间要有点距离，这时需要在menu上面画一个透明的区域。可以用before/after伪类用absolute定位实现：

   ```css
   ul.menu:before{
   	content:"";
       position:absolute;
       left: 0;
       top:-20px;
       width:100%;
       height:20px;
   }
   ```

**WAY2:**

使用子元素。把hover的目标和隐藏的对象当作同一个父容器的子元素，然后hover写在这个父容器上面就可以了。

eg. marker hover时把它的子元素detail-info放出来：

```css
.marker-container .detail-info{
	display:none
}

.marker-container:hover .detail-info{
	display:block
}
```

### 3. 自定义redio/checkbox的样式

借助CSS3提供的`:checked`伪类，来切换选中和非选中状态。

**WAY：**

1. 把一个checkbox和一个用来自定义样式的span写在一个label里面，同时checkbox始终隐藏。

   ```html
   <label> //写在label里是为了能够在单击span时改变checkbox的状态
   	<input type="checkbox">
   	<span class="xxx"></span>
   </label>
   ```

   ```css
   input[type=checkbox]{
   	display: none;
   }
   .xxx{
       /*略*/
   }
   ```

2. 改变选中态的样式

   ```css
   input[type=checkbox]:checked + .xxx{
   	/*略*/
   }
   ```

### 4. 多列等高

**WAY：**借助table的自适应特性，每个div都是一个td。

```css
.wrapper{
	display:table;
	border-spacing:20px;    //td间的距离
}

.wrapper > div {
    display:table-cell;
    width:1000px;//这里设置很大的宽度，table自动平分宽度
    border-radius:5px;
}
```

若响应式开发，需要一行一个，则删去`display:tanle-cell`。

若需要一行显示两个，可以在第二个与第三个之间加一个tr。

```html
<div class="wrapper">
	<div>column 1</div>
	<div>column 2</div>
	<span class="tr"></span>
	<div>column 3</div>
	<div>column 4</div>
</div>
```

```css
.tr{
	display:none;
}

@media (max-width:1024px) and (min-width:501px){
	.tr{
		display:table-row;
	}
}
```





















