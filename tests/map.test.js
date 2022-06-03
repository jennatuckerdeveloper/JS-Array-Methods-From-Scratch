// Tests from https://www.codewars.com/kata/558ccca75f511f2b0d0000f7

describe('Javascript from the Inside: Map', function () {
	var base_array, empty_array, single_array

	beforeAll(function () {
		empty_array = []
		single_array = [1]
		base_array = [1, 2, 3, 4, 5]
	})

	it('should return a new array', function () {
		var mapped_to_same = base_array.map(function (x) {
			return x
		})
		expect(mapped_to_same, "Oh no! I didn't return a new array.").not.toBe(
			base_array
		)
	})

	it('should map', function () {
		var mapped_to_same = base_array.map(function (x) {
			return x
		})
		expect(mapped_to_same, "Oh no! I didn't map appropriately.").toEqual(
			base_array
		)
	})

	it('should work for empty arrays', function () {
		var empty_map = empty_array.map(function (x) {
			return x
		})
		expect(empty_map, "Oh no! it didn't work for empty arrays.").toEqual(
			empty_array
		)
	})

	it('should work for arrays with a single element', function () {
		var single_map = single_array.map(function (x) {
			return x
		})
		expect(
			single_map,
			"Oh no! it didn't work for arrays with a single element."
		).toEqual(single_array)
	})

	it('should not modify base_array', function () {
		var plus_two = base_array.map(function (item) {
			return item + 2
		})
		expect(base_array, 'Oh no! base_array was altered by your map.').toEqual([
			1, 2, 3, 4, 5
		])
		expect(plus_two, 'Oh no!').toEqual([3, 4, 5, 6, 7])
	})

	it("should properly handle callback's currentValue", function () {
		var squared_array = base_array.map(function (item) {
			return item * item
		})
		console.log(squared_array)
		expect(squared_array, "Oh no!, it didn't square every element.").toEqual([
			1, 4, 9, 16, 25
		])

		var to_the_power_of_three_array = base_array.map(function (item) {
			return Math.pow(item, 3)
		})
		expect(
			to_the_power_of_three_array,
			"Oh no!, it didn't power every element by three"
		).toEqual([1, 8, 27, 64, 125])
	})

	it("should properly handle callback's current index", function () {
		var plus_two_and_index = base_array.map(function (item, index) {
			return item + 2 + index
		})
		expect(
			plus_two_and_index,

			'Oh no! it did not add the indexes appropriately.'
		).toEqual([3, 5, 7, 9, 11])

		var divided_by_index = base_array.map(function (item, index) {
			return item / index
		})
		expect(
			divided_by_index,

			'Oh no! it did not divided by the correspondant index!'
		).toEqual([Infinity, 2, 1.5, 1.3333333333333333, 1.25])

		var array_indexes = base_array.map(function (_, index) {
			return index
		})
		expect(
			array_indexes,
			'Oh no! The index are not properly enumerated.'
		).toEqual([0, 1, 2, 3, 4])
	})

	it("should properly handle callback's array", function () {
		var array_times_five = base_array.map(function (_, _2, array) {
			return array
		})
		expect(
			array_times_five,
			'Oh no! it was expecting array to be returned 5 times.'
		).toEqual([
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5],
			[1, 2, 3, 4, 5]
		])

		var plus_two_from_array = base_array.map(function (_, index, array) {
			return array[index] + 2
		})
		expect(
			plus_two_from_array,
			"Oh no! It looks like array[index] didn't return what it should!"
		).toEqual([3, 4, 5, 6, 7])
	})

	it('should properly handle context', function () {
		var sum_with_context = [1, 2, 3].map(
			function (item, index) {
				return item + this[index]
			},
			[4, 5, 6]
		)
		expect(
			sum_with_context,
			"Oh no! It looks like 'this' was not the context."
		).toEqual([5, 7, 9])
	})

	it("should properly handle callback's array when given a context", function () {
		var sum_with_context = [1, 2, 3].map(
			function (item, index, orig) {
				return item + orig[index]
			},
			[4, 5, 6]
		)
		expect(
			sum_with_context,
			'Oh no! It looks like the callback received the wrong array!.'
		).toEqual([2, 4, 6])
	})

	it('should work with new Array constructor', function () {
		var array_of_two = new Array(2).map(function (x) {
			return 1
		})
		expect(
			array_of_two,
			"Oh no! It looks like your map doesn't work well with a new Array()"
		).toEqual([, ,])
	})

	it("should skip the 'holes' a new Array(length)", function () {
		var array_of_two_and_one = new Array(2).concat([null]).map(function (x) {
			return 1
		})
		expect(
			array_of_two_and_one,
			"On on! It looks like your map is not skipping the 'holes' inside a new Array(length) Object"
		).toEqual([, , 1])
	})

	it('should handle non numeric-indexes like an array does', function () {
		var array = [1, 2, 3, 4]
		array['batida'] = "oh no... Please, don't do this. NOOOOOOOOO"
		var mapped_array = array.map(function (x, i) {
			return x
		})
		expect(
			Object.keys(mapped_array),
			"Well, a non-numeric index 'batida' was mapped, that shouldn't happen"
		).toEqual(Object.keys([1, 2, 3, 4]))
	})
})

function sol(fn, thisArg = this) {
	let ret = []
	for (let ctx = this, i = 0, l = ctx.length, undef; i < l; i += 1) {
		ret[i] = i in ctx ? fn.call(thisArg, ctx[i], i, ctx) : undef
	}
	return ret
}

describe('Random expects', function () {
	it('should work for random expects', function () {
		for (let i = 0; i < 100; i++) {
			let l = (Math.random() * 10 + 5) | 0
			let arr = [...Array(l)].map((_) => (Math.random() * 100 - 50) | 0)
			let ref = arr.slice()
			let fn = (
				(a, b) => (x) =>
					x * a + b
			)((Math.random() * 100 - 50) | 0, (Math.random() * 100 - 50) | 0)
			for (let j = 0; j < l; j++) ref[j] = fn(ref[j])
			expect(arr.map(fn)).toEqual(ref)
		}
	})
})
