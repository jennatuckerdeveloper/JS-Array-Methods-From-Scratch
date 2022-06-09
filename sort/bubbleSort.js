/* 
Bubble sort in a nutshell:
Iterate through array, comparing each e and next e. 
No need to do the final iteration!  So i < arr.length -1.

One value will be sorted for certain each pass, the final one!
Iterate through an inner loop of each e and next e.
No need to do the values at the end equal to outer loops, i! 
So j < arr.length - i. 

So what if the array ends up sorted "early"?  
Scan for this during inner loop. 
Check before going on with outer loop.  
Was there any change?  If not, break and return! 
*/

const bubbleSort = (arr, func) => {
	const defaultSortFunc = (a, b) => {
		if (a > b) return 1
		if (a < b) return -1
		return 0
	}

	if (!func) func = defaultSortFunc

	for (let i = 0; i < arr.length - 1; i++) {
		let change = false
		for (let j = 0; j < arr.length - i; j++) {
			i = Number(i)
			const [first, second] = [arr[j], arr[j + 1]]
			if (func(first, second) >= 1) {
				arr[j] = second
				arr[j + 1] = first
				change = true
			}			
    }
    if (!change) break
	}

	return arr
}

// Succinct assignment using array destructuring, but likely confusing.
// ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

const myArr = [3, 7, 1, 4]

console.log(bubbleSort(myArr))
console.log(bubbleSort(myArr, (a, b) => a - b))
console.log(bubbleSort(myArr, (a, b) => b - a))

const reverseSortFunc = (a, b) => {
	if (a < b) return 1
	if (a > b) return -1
	return 0
}

console.log(bubbleSort(myArr, reverseSortFunc))

const myArrStrings = ['a', 'aa', 'ab', 'b', '0', '01']
console.log(bubbleSort(myArrStrings))

console.log(bubbleSort(myArrStrings, reverseSortFunc))
