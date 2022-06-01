const customMap = function (fn, context = this) {
	const res = new Array(this.length)
	for (let i in this) {
		const numericI = Number(i)
		if (!isNaN(numericI))
			res[numericI] = fn.bind(context)(this[numericI], numericI, this)
	}
	return res
}

Array.prototype.map = customMap

// Some test cases 

const myArr = [1, 2, 3, 4, 5]
console.log(myArr.map(e => e * 2))
console.log(
	myArr.map(
		function (e) {
			return e * this.multiplier
		},
		{ multiplier: 3 }
	)
)

const sparseArray = new Array(10)
sparseArray[1] = 4
console.log(sparseArray)
console.log(
	sparseArray.map(
		function (e) {
			return e * this.multiplier
		},
		{ multiplier: 3 }
	)
)
const holesArray = [, , 2, null, undefined, ,]
holesArray.batida = 1
console.log(holesArray)
console.log(holesArray.map((_) => 1))
