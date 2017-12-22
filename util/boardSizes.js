export const boardSizes = {
	small: setBoard(30, 20),
	medium: setBoard(60, 40),
	large: setBoard(90, 60)
}

function setBoard(width, height) {
	let squareSize = width === 30 ? 24 : width === 60 ? 12 : 8;
	return {
		width,
		height,
		squareSize 
	}
}