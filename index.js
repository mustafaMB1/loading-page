const loading = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loade =0;
let int = setInterval (bluring, 30);

function bluring(){
    loade++
    if(loade > 99){
        clearInterval(int);
    }
    loading.innerText = `${loade}%`;
    loading.style.opacity=scale(loade, 0, 100, 1, 0);
    bg.style.filter= `blur(${scale(loade, 0, 100, 30, 0)}px)` ;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) ) / (in_max - in_min) + out_min
}