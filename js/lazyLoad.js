window.addEventListener('load' , lazyLoad);
window.addEventListener('scroll' , lazyLoad);

function lazyLoad() {
	let lazyItem = document.querySelectorAll('.lazy-load');//get all lazyload elem 

	//every elem with lazy-load class can do it
	for (let key in lazyItem) {
		if (lazyItem[key].classList.contains('lazy-load_onload')) {
			lazyItem[key].classList.add('lazy-load_active')

			continue
		};
        
		let animPoint = window.innerHeight - lazyItem[key].offsetHeight / 1.5
		
		//if current height = elem height
		if (window.pageYOffset > lazyItem[key].offsetTop - animPoint && window.pageYOffset < lazyItem[key].offsetTop + lazyItem[key].offsetHeight / 3) {
			lazyItem[key].classList.add('lazy-load_active')
		} else {
			lazyItem[key].classList.remove('lazy-load_active');
		}
	};
};