import $ from 'jquery'
import getCart from './GetCart.js.js'

export default class ShoppingCart {
	constructor(app) {
		this.app = app
		this.$el = $('<div>').css({
			'padding-bottom':'10px',
			'border-bottom':'1px solid #ccc'
		})
		this.cart = getCart()
	}
	showCart() {
		alert(this.cart.getList())
	}
	initBtn() {
		let $btn = $('<button>我的购物车</button>')
		$btn.click(()=>{
			this.showCart()
		})
		this.$el.append($btn)
	}
	render() {
		this.app.$el.append(this.$el)
	}
	init() {
		this.initBtn()
		this.render()
	}
}