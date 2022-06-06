const customReduce = function (func, initial) {
	let customInit = initial !== undefined
	let res = customInit ? initial : this[0]
	let start = customInit ? 0 : 1
	let keys = Object.keys(this)
	for (let i = start; i < keys.length; i++) {
		let key = keys[i]
		res = func(res, this[key], key, this)
	}
	return res
}

Array.prototype.reduce = customReduce

const myArr = [1, 2, 3]
console.log(myArr.reduce((res, num, i, arr) => res + num))
console.log(myArr.reduce((res, num, i, arr) => res + num, 0))
console.log(myArr.reduce((res, num, i, arr) => res + arr[i], 0))

/*
  In a sparse array with empty spaces or "holes",
  the length will only include the existing values.
  But those keys will not match a range made of the
  length.  So iterating through the length works
  only if you then access the correct key itself.  
*/

const myArrSparse = new Array(10)
myArrSparse[11] = 1
myArrSparse[12] = 2
myArrSparse[13] = 3
console.log(myArrSparse.reduce((res, num, i, arr) => res + num + arr[i], 0)) // => 12
