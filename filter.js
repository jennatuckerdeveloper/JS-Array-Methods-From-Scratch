const filter = function (func, context = this) {
  const res = []
	for (let i of Object.keys(this)) {
		const numericI = Number(i)
		if (
			i === numericI.toString() &&
			!isNaN(numericI) &&
			func.bind(context)(this[numericI], numericI, this)
		) {
			res.push(this[i])
		}
	}
	return res
}

Array.prototype.filter = filter


