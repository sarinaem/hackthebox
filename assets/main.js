
const header = document.querySelector('.header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    header.classList.add('hide-header'); // اضافه کردن کلاس مخفی کردن هدر
  } else {
    header.classList.remove('hide-header'); // حذف کلاس مخفی کردن هدر
  }

  prevScrollPos = currentScrollPos;
});


const icon = document.getElementById ('my-icon');
icon.addEventListener ('mouseover', function(){
    icon.classList.remove ('fa-chevron-right');
    icon.classList.add ('fa-arrow-right');
});







  