const item = document.querySelectorAll(".content-2-1");
const itemcount = item.length;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let count = 0;

function nextitem(){
    item[count].classList.remove("active");

    if (count == itemcount-1){
        count = 0;
    }
    else{
        count++;
    }

    item[count].classList.add("active");
}

function previtem(){
    item[count].classList.remove("active");

    if (count == 0){
        count = itemcount-1;
    }
    else{
        count--;
    }

    item[count].classList.add("active");
}

next.addEventListener("click",nextitem);
prev.addEventListener("click",previtem);