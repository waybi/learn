import $ from 'jquery'
import ShoppingCart from './ShoppingCart'
import List from './List'
export default class App {
	constructor(id) {
		this.$el = $('#' + id)
	}
	// 初始化购物车
	initShoppoingCart() {
		let shopping = new ShoppingCart(this)
		shopping.init()
	}
	// 初始化列表
	initList() {
		let list = new List(this)
		list.init()
	}
	init() {
		this.initShoppoingCart()
		this.initList()
	}
}