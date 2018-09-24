import $ from 'jquery'
import { GET_LIST } from '../config'
import createItem from './createItem.js'

export default class List {
	constructor(app) {
		this.app = app
		this.$el = $('<div>')
	}
	// 渲染item项目
	initItemList(data) {
		data.forEach(item => {
			let instance = createItem(this,item)
			instance.init()
		})
	}
	// 加载数据
	loadData() {
		return fetch(GET_LIST).then(result => {
			return result.json()
		})
	}
	render() {
		this.app.$el.append(this.$el)
	}
	init() {
		this.loadData().then(data=>{
			this.initItemList(data)
		}).then(()=>{
			this.render()
		})
	}
}