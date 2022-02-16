const slide = document.querySelector(".container");
const img = document.querySelectorAll("img");
var counter = img.length;
function auto_slide(){
    for (let i = 0; i < counter; i++) { 
        slide.style.left=("-100vw");
    }
}
auto_slide();