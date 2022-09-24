const board = document.querySelector('#board')
const colors = ['#7FFF00', '#00FFFF', '#483D8B', '#ADFF2F', '#4B0082', '#B0C4DE', '#800000', '#FFFF00']
const SQUARS_NUMBER = 600

for (let i = 0; i < SQUARS_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () =>
		setColor(square))

	square.addEventListener('mouseleave', () =>
		removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}