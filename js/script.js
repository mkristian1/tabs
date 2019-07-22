window.addEventListener('DOMContentLoaded', function() {
	 var tabContent = document.querySelectorAll('.tab-content'),
	 	 tabMenu = document.querySelector('.tab-menu'),
	 	 tab = document.querySelectorAll('.tab');
	 
	 function tabHide(h) {
	 	for(let i = h; i < tabContent.length; i++) {
	 		tabContent[i].classList.add('hide');
	 		tabContent[i].classList.remove('show');
	 	}
	 }

	 tabHide(1);

	 function tabShow(s) {
	 	if(tabContent[s].classList.contains('hide')) {
	 		tabContent[s].classList.remove('hide');
	 		tabContent[s].classList.add('show');

	 	};
	 }

	 tabMenu.addEventListener('click', function(e) {
	 		let event = e.target;
	 		console.log(event);

	 		if(event && event.classList.contains('tab')) {
	 			for(let i = 0; i < tab.length; i++) {
	 				if (event == tab[i]) {
	 					tabHide(0);
	 					tabShow(i);
	 					break;
	 				}
	 			}
	 		}
	 });




});