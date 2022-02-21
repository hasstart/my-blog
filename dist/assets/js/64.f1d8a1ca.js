(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{489:function(t,e,a){"use strict";a.r(e);var r=a(15),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"axios如何取消请求、原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios如何取消请求、原理"}},[t._v("#")]),t._v(" axios如何取消请求、原理")]),t._v(" "),a("p",[t._v("XMLhttpRequest abort()")]),t._v(" "),a("h2",{attrs:{id:"为什么hooks不能写在循环或者条件判断语句里"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么hooks不能写在循环或者条件判断语句里"}},[t._v("#")]),t._v(" 为什么hooks不能写在循环或者条件判断语句里")]),t._v(" "),a("h2",{attrs:{id:"useeffect、uselayouteffect区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useeffect、uselayouteffect区别"}},[t._v("#")]),t._v(" useEffect、useLayoutEffect区别")]),t._v(" "),a("h2",{attrs:{id:"redux的三个原则、如何写一个中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux的三个原则、如何写一个中间件"}},[t._v("#")]),t._v(" redux的三个原则、如何写一个中间件")]),t._v(" "),a("p",[t._v("1、单一事实来源：整个应用程序的状态存储在单个存储中的对象/状态树中。单一状态树可以更轻松地跟踪随时间的变化以及调试或检查应用程序。")]),t._v(" "),a("p",[t._v("2、状态是只读的：改变状态的唯一方法是触发一个动作。操作是描述更改的普通JS对象。就像状态是数据的最小表示一样，动作是对该数据更改的最小表示。")]),t._v(" "),a("p",[t._v("3、使用纯函数进行更改：为了指定状态树如何通过操作转换，需要纯函数。纯函数是那些返回值仅取决于其参数值的函数")]),t._v(" "),a("h2",{attrs:{id:"如何理解fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何理解fiber"}},[t._v("#")]),t._v(" 如何理解fiber")]),t._v(" "),a("p",[t._v("react中组件名称的首字母必须要用大写。原因：React中使用JSX语法，但浏览器无法识别JSX语法，需通过babel对JSX语法进行转义；而如果组件的首字母为小写时，其会被认定为原生DOM标签，创建一个不存在的标签是会报错的")]),t._v(" "),a("h2",{attrs:{id:"react-与vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-与vue"}},[t._v("#")]),t._v(" react 与Vue")]),t._v(" "),a("p",[t._v("本质区别: vue是mvvm,react是组件化\n模板区别: Vue使用模板 react是jsx\n组件化区别: react本身是组件化, vue也支持组件化只不过是在 mvvm的基础上扩展\n共同点: 都支持组件化,数据驱动视图")]),t._v(" "),a("h2",{attrs:{id:"react性能优化最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react性能优化最佳实践"}},[t._v("#")]),t._v(" react性能优化最佳实践")]),t._v(" "),a("ol",[a("li",[t._v("pureComponent shouldComponentUpdate")]),t._v(" "),a("li",[t._v("useMemo useCallback")])]),t._v(" "),a("h2",{attrs:{id:"redux-中间件的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-中间件的原理"}},[t._v("#")]),t._v(" Redux 中间件的原理")]),t._v(" "),a("p",[t._v("Redux 的中间件提供的是位于 action 被发起之后，到达 reducer 之前的扩展点，换而言之，原本 view -> action -> reducer -> store 的数据流加上中间件后变成了 view -> action -> middleware -> reducer -> store ，在这一环节我们可以做一些 “副作用” 的操作，如 异步请求、打印日志等。")]),t._v(" "),a("h2",{attrs:{id:"setstate之后都发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setstate之后都发生了什么"}},[t._v("#")]),t._v(" setState之后都发生了什么")]),t._v(" "),a("ol",[a("li",[t._v("this.setState(newState) =>")]),t._v(" "),a("li",[t._v("newState存入pending队列 =>")]),t._v(" "),a("li",[t._v("调用enqueueUpdate =>")]),t._v(" "),a("li",[t._v("是否处于批量更新模式 => 是的话将组件保存到dirtyComponents")]),t._v(" "),a("li",[t._v("不是的话遍历dirtyComponents，调用updateComponent,更新pending state or props")])]),t._v(" "),a("h2",{attrs:{id:"react-中-refs-的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-refs-的作用是什么"}},[t._v("#")]),t._v(" React 中 refs 的作用是什么？")]),t._v(" "),a("p",[t._v("Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。我们可以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回：")]),t._v(" "),a("h2",{attrs:{id:"什么是高阶组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是高阶组件"}},[t._v("#")]),t._v(" 什么是高阶组件？")]),t._v(" "),a("p",[t._v("一个高阶组件只是一个包装了另外一个 React 组件的 React 组件。这种形式通常实现为一个函数，本质上是一个类工厂（class factory）")]),t._v(" "),a("ol",[a("li",[t._v("代码复用，逻辑抽象，抽离底层准备（bootstrap）代码")]),t._v(" "),a("li",[t._v("渲染劫持")]),t._v(" "),a("li",[t._v("State 抽象和更改")]),t._v(" "),a("li",[t._v("Props 更改")])]),t._v(" "),a("h2",{attrs:{id:"受控组件与非受控组件区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受控组件与非受控组件区别"}},[t._v("#")]),t._v(" 受控组件与非受控组件区别")]),t._v(" "),a("p",[t._v("受控组件")]),t._v(" "),a("p",[t._v("在HTML中，标签"),a("code",[t._v("<input>、<textarea>、<select>")]),t._v("的值的改变通常是根据用户输入进行更新。在React中，可变状态通常保存在组件的状态属性中，并且只能使用 setState() 更新，而呈现表单的React组件也控制着在后续用户输入时该表单中发生的情况，以这种由React控制的输入表单元素而改变其值的方式，称为：“受控组件”。")]),t._v(" "),a("p",[t._v("非受控组件")]),t._v(" "),a("p",[t._v("表单数据由DOM本身处理。即不受setState()的控制，与传统的HTML表单输入相似，input输入值即显示最新值（使用 ref从DOM获取表单值）")]),t._v(" "),a("h2",{attrs:{id:"函数组件及hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组件及hooks"}},[t._v("#")]),t._v(" 函数组件及Hooks")]),t._v(" "),a("ol",[a("li",[t._v("函数式组件，本质就是一个常规函数，接收一个参数 props 并返回一个 reactNodes，即 return 该组件需要输出的视图；")]),t._v(" "),a("li",[t._v("函数式组件中没有 this 和生命周期函数；")]),t._v(" "),a("li",[t._v("使用函数式组件时，应该尽量减少在函数中声明子函数，否则组件每次更新时都会重新创建这个函数。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);