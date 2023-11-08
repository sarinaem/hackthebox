const icon = document.getElementById ('my-icon');
icon.addEventListener ('mouseover', function(){
    icon.classList.remove ('fa-chevron-right');
    icon.classList.add ('fa-arrow-right');
});


window.addEventListener('scroll', function() {
    let element = document.getElementById('myElement');
    
    // اگر اسکرول به بالای صفحه بیشتر از 200 پیکسل رسید
    if (window.pageYOffset > window.innerHeight) {
        header.style.display = 'none';
    } else { // در غیر این صورت
        header.style.display = 'block';
    }
  });

  