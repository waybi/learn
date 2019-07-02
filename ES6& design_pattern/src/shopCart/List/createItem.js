import Item from './Item.js.js'

function createDiscount(itemData) {
	return new Proxy (itemData,{
		get: function(target,key,receiver) {
			if(key === 'name') {
				return `${target[key]} 【折扣】` 
			}
			if(key === 'price') {
				return target[key] * 0.8
			}
			return target[key]
		}
	})
}

export default function(list,itemData) {
	if(itemData.discount){
		itemData = createDiscount(itemData)
	}
	return new Item(list,itemData)
}