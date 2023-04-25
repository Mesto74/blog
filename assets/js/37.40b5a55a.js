(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{365:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flex布局语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex布局语法"}},[t._v("#")]),t._v(" flex布局语法")]),t._v(" "),s("h2",{attrs:{id:"一、flex-布局是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[t._v("#")]),t._v(" 一、flex 布局是什么？")]),t._v(" "),s("p",[t._v('Flex是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),t._v(" "),s("p",[s("strong",[t._v("任何一个容器")]),t._v(" 都可以指定为 Flex 布局。\n")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("行内元素")]),t._v(" 也可以使用 Flex 布局。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Webkit 内核的浏览器，必须加上"),s("code",[t._v("-webkit")]),t._v("前缀。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Safari */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意")]),t._v("，设为 Flex 布局以后，子元素的"),s("code",[t._v("float")]),t._v("、"),s("code",[t._v("clear")]),t._v("和"),s("code",[t._v("vertical-align")]),t._v("属性将失效。")]),t._v(" "),s("h2",{attrs:{id:"二、基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[t._v("#")]),t._v(" 二、基本概念")]),t._v(" "),s("p",[t._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:"img"}})]),t._v(" "),s("p",[t._v("容器默认存在两根轴：水平的主轴（或x轴）（main axis）和垂直的交叉轴（或y轴）（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),s("code",[t._v("main start")]),t._v("，结束位置叫做"),s("code",[t._v("main end")]),t._v("；交叉轴的开始位置叫做"),s("code",[t._v("cross start")]),t._v("，结束位置叫做"),s("code",[t._v("cross end")]),t._v("。")]),t._v(" "),s("p",[t._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),s("code",[t._v("main size")]),t._v("，占据的交叉轴空间叫做"),s("code",[t._v("cross size")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"三、容器的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[t._v("#")]),t._v(" 三、容器的属性")]),t._v(" "),s("p",[t._v("以下6个属性设置在容器上。(即设置在 display: flex; 的元素上)")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("flex-direction      方向     决定项目的排列方向")])]),t._v(" "),s("li",[s("p",[t._v("flex-wrap             换行")])]),t._v(" "),s("li",[s("p",[t._v("flex-flow              方向和换行的简写")])]),t._v(" "),s("li",[s("p",[t._v("justify-content    主轴对齐方式")])]),t._v(" "),s("li",[s("p",[t._v("align-items          交叉轴对齐方式")])]),t._v(" "),s("li",[s("p",[t._v("align-content      多轴线的对齐方式")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-1-flex-direction属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction属性"}},[t._v("#")]),t._v(" 3.1 flex-direction属性")]),t._v(" "),s("p",[s("code",[t._v("flex-direction")]),t._v("属性决定主轴的方向（即项目的排列方向）。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:"img"}})]),t._v(" "),s("p",[t._v("它可能有4个值。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("row")]),t._v("（默认值）：主轴为水平方向，起点在左端。")]),t._v(" "),s("li",[s("code",[t._v("row-reverse")]),t._v("：主轴为水平方向，起点在右端。")]),t._v(" "),s("li",[s("code",[t._v("column")]),t._v("：主轴为垂直方向，起点在上沿。")]),t._v(" "),s("li",[s("code",[t._v("column-reverse")]),t._v("：主轴为垂直方向，起点在下沿。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-flex-wrap属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap属性"}},[t._v("#")]),t._v(" 3.2 flex-wrap属性")]),t._v(" "),s("p",[t._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),s("code",[t._v("flex-wrap")]),t._v("属性定义，如果一条轴线排不下，如何换行。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png",alt:"img"}})]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("它可能取三个值。")]),t._v(" "),s("p",[t._v("（1）"),s("code",[t._v("nowrap")]),t._v("（默认）：不换行。会压缩项目的宽度")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:"img"}})]),t._v(" "),s("p",[t._v("（2）"),s("code",[t._v("wrap")]),t._v("：换行，第一行在上方。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("（3）"),s("code",[t._v("wrap-reverse")]),t._v("：换行，第一行在下方。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_3-3-flex-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[t._v("#")]),t._v(" 3.3 flex-flow")]),t._v(" "),s("p",[s("code",[t._v("flex-flow")]),t._v("属性是"),s("code",[t._v("flex-direction")]),t._v("属性和"),s("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),s("code",[t._v("row nowrap")]),t._v("。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <flex-direction> || <flex-wrap>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-4-justify-content属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content属性"}},[t._v("#")]),t._v(" 3.4 justify-content属性")]),t._v(" "),s("p",[s("code",[t._v("justify-content")]),t._v("属性定义了项目在主轴上的对齐方式。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:"img"}})]),t._v(" "),s("p",[t._v("它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("（默认值）：左对齐")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：右对齐")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("： 居中")]),t._v(" "),s("li",[s("code",[t._v("space-between")]),t._v("：两端对齐，项目之间的间隔都相等。")]),t._v(" "),s("li",[s("code",[t._v("space-around")]),t._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-5-align-items属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items属性"}},[t._v("#")]),t._v(" 3.5 align-items属性")]),t._v(" "),s("p",[s("code",[t._v("align-items")]),t._v("属性定义项目在交叉轴上如何对齐。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:"img"}})]),t._v(" "),s("p",[t._v("它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("：交叉轴的起点对齐。")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：交叉轴的终点对齐。")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("：交叉轴的中点对齐。")]),t._v(" "),s("li",[s("code",[t._v("baseline")]),t._v(": 项目的第一行文字的基线对齐。")]),t._v(" "),s("li",[s("code",[t._v("stretch")]),t._v("（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-6-align-content属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content属性"}},[t._v("#")]),t._v(" 3.6 align-content属性")]),t._v(" "),s("p",[s("code",[t._v("align-content")]),t._v("属性定义了多根轴线的对齐方式（"),s("strong",[t._v("一排项目为一根轴线")]),t._v("）。如果项目只有一根轴线，该属性不起作用。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:"img"}})]),t._v(" "),s("p",[t._v("该属性可能取6个值。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("：与交叉轴的起点对齐。")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：与交叉轴的终点对齐。")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("：与交叉轴的中点对齐。")]),t._v(" "),s("li",[s("code",[t._v("space-between")]),t._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),t._v(" "),s("li",[s("code",[t._v("space-around")]),t._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),t._v(" "),s("li",[s("code",[t._v("stretch")]),t._v("（默认值）：轴线占满整个交叉轴。")])])]),t._v(" "),s("h2",{attrs:{id:"四、项目的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[t._v("#")]),t._v(" 四、项目的属性")]),t._v(" "),s("p",[t._v("以下6个属性设置在项目上。")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("order")])]),t._v(" "),s("li",[s("code",[t._v("flex-grow")])]),t._v(" "),s("li",[s("code",[t._v("flex-shrink")])]),t._v(" "),s("li",[s("code",[t._v("flex-basis")])]),t._v(" "),s("li",[s("code",[t._v("flex")]),t._v(" "),s("code",[t._v("flex-grow")]),t._v(", "),s("code",[t._v("flex-shrink")]),t._v(" 和 "),s("code",[t._v("flex-basis")]),t._v("的简写")]),t._v(" "),s("li",[s("code",[t._v("align-self")])])])]),t._v(" "),s("h3",{attrs:{id:"_4-1-order属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order属性"}},[t._v("#")]),t._v(" 4.1 order属性")]),t._v(" "),s("p",[s("code",[t._v("order")]),t._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"_4-2-flex-grow属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow属性"}},[t._v("#")]),t._v(" 4.2 flex-grow属性")]),t._v(" "),s("p",[s("code",[t._v("flex-grow")]),t._v("属性定义项目的放大比例，默认为"),s("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 0 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:"img"}})]),t._v(" "),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-grow")]),t._v("属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),s("code",[t._v("flex-grow")]),t._v("属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-flex-shrink属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink属性"}},[t._v("#")]),t._v(" 4.3 flex-shrink属性")]),t._v(" "),s("p",[s("code",[t._v("flex-shrink")]),t._v("属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:"img"}})]),t._v(" "),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-shrink")]),t._v("属性都为1，当空间不足时，都将等比例缩小。如果一个项目的"),s("code",[t._v("flex-shrink")]),t._v("属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),t._v(" "),s("p",[t._v("负值对该属性无效。")]),t._v(" "),s("h3",{attrs:{id:"_4-4-flex-basis属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis属性"}},[t._v("#")]),t._v(" 4.4 flex-basis属性")]),t._v(" "),s("p",[s("code",[t._v("flex-basis")]),t._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),s("code",[t._v("auto")]),t._v("，即项目的本来大小。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <length> | auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default auto */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("它可以设为跟"),s("code",[t._v("width")]),t._v("或"),s("code",[t._v("height")]),t._v("属性一样的值（比如350px），则项目将占据固定空间。")]),t._v(" "),s("h3",{attrs:{id:"_4-5-flex属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex属性"}},[t._v("#")]),t._v(" 4.5 flex属性")]),t._v(" "),s("p",[s("code",[t._v("flex")]),t._v("属性是"),s("code",[t._v("flex-grow")]),t._v(", "),s("code",[t._v("flex-shrink")]),t._v(" 和 "),s("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),s("code",[t._v("0 1 auto")]),t._v("。后两个属性可选。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(">? || <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("该属性有两个快捷值："),s("code",[t._v("auto")]),t._v(" ("),s("code",[t._v("1 1 auto")]),t._v(") 和 none ("),s("code",[t._v("0 0 auto")]),t._v(")。")]),t._v(" "),s("p",[s("strong",[t._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")])]),t._v(" "),s("h3",{attrs:{id:"_4-6-align-self属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self属性"}},[t._v("#")]),t._v(" 4.6 align-self属性")]),t._v(" "),s("p",[s("code",[t._v("align-self")]),t._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),s("code",[t._v("align-items")]),t._v("属性。默认值为"),s("code",[t._v("auto")]),t._v("，表示继承父元素的"),s("code",[t._v("align-items")]),t._v("属性，如果没有父元素，则等同于"),s("code",[t._v("stretch")]),t._v("。")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:"img"}})]),t._v(" "),s("p",[t._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),t._v(" "),s("p",[t._v("（完）")]),t._v(" "),s("blockquote",[s("p",[t._v("来源：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("​")])])}),[],!1,null,null,null);s.default=n.exports}}]);