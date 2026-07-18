//const list = document.querySelector('.price-item');
 document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.price-block').forEach(head => {
	  head.addEventListener('click', function () {
//		 this.classList.toggle('active');
		this.querySelector('.price-item-head').classList.toggle('active');
		 this.querySelector('.price-item').classList.toggle('active');
	  });
	});
 });