function accum(s) {
	return s.split('').map((item, index) => item.toUpperCase() + item.repeat(index).toLowerCase()).join('-')
}