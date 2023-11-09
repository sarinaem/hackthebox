
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

const text = document.getElementById ("typeWriter");
const words = [" " , "members", "hackers", "learners" , ""];
let wordIndex =0;
let index = 0;
let showCursor = true;
function textload(){
    text.textContent = words[wordIndex].substring(0, index);
    if (index > words[wordIndex].length){
        console.log("inside if", index, words[wordIndex]);

        wordIndex +=1;
        if (wordIndex === words.length){
            wordIndex = 0;
        }
        index = 0;
        text.textContent = "";
    }
    index++;
    const timer = setTimeout(textload, 500)
}
textload();



setInterval(()=>{
    if (showCursor){
        text.style.borderRight = "";
        showCursor = false;
    } else {
        text.style.borderRight = "2px solid #9FEF00";
        showCursor = true;
    }
}, 300)










  