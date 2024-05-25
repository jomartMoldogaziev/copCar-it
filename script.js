const redLight = document.getElementById('strobo')
const blueLight = document.getElementById('strobo1')
const strRed = document.getElementById('str')
const strBlue = document.getElementById('str1')

function colorLight() {
	setTimeout(() => {
		redLight.style.backgroundColor = 'red'
		redLight.style.boxShadow = '0 0 40px 20px red'
		blueLight.style.backgroundColor = '#001d61'
		blueLight.style.boxShadow = 'none'
		strBlue.style.backgroundColor = 'blue'
		strBlue.style.boxShadow = '0 0 40px 20px blue'
		strRed.style.backgroundColor = '#702424'
		strRed.style.boxShadow = 'none'
	}, 0)

	setTimeout(() => {
		redLight.style.backgroundColor = '#471010'
		redLight.style.boxShadow = 'none'
		blueLight.style.backgroundColor = 'blue'
		blueLight.style.boxShadow = '0 0 40px 20px blue'
		strBlue.style.backgroundColor = '#001d61'
		strBlue.style.boxShadow = 'none'
		strRed.style.backgroundColor = 'red'
		strRed.style.boxShadow = '0 0 40px 20px red'
	}, 500)

	
	
	setTimeout(() => {
		colorLight()
	}, 1000)
}
const ono = document.getElementById('ono')
const ono1 = document.getElementById('ono1')

function onoSh() {
	setTimeout(() => {
		ono.style.display = 'block'
		ono1.style.display = 'none'
	}, 0)
	setTimeout(() => {
		ono.style.display = 'none'
		ono1.style.display = 'none'
	}, 5000)


	setTimeout(() => {
		ono.style.display = 'none'
		ono1.style.display = 'block'
	}, 8000)
	setTimeout(() => {
		onoSh()
	}, 13000)
}

colorLight()
onoSh()
