const bubbleSort = (arr) => {
	for (let i in arr) {
		for (let i in arr) {
			i = Number(i)
			if (arr[i] > arr[i + 1]) {
				const first = arr[i]
				const second = arr[i + 1]
				arr[i] = second
				arr[i + 1] = first
			}
		}
	}

	return arr
}

const myArr = [3, 7, 1, 4]

console.log(bubbleSort(myArr))
