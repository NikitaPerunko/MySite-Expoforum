document.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('headerBurgerMenu')
		.addEventListener('click', function () {
			document.querySelector('header').classList.toggle('open')
		})
})
