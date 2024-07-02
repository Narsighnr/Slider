const list = document.querySelector('.slider .list');
const items = document.querySelectorAll('.slider .list .item');
const dots = document.querySelectorAll('.slider .dots li');
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
    // active += 1;
    if(active +1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    // active += 1;
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active -1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=>{
  next.click()  
},3000);

function reloadSlider(){
    console.log('items', items[active])
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + "px";
    
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{next.click()},3000);
}

dots.forEach((li,key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})