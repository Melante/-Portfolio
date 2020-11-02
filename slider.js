let btnPrev = document.querySelector('#examples .buttons .prev'); 
let btnNext = document.querySelector('#examples .buttons .next');

let aImg = document.querySelectorAll('#examples .slider a');
let i = 0;

 btnPrev.onclick = function(){
    aImg[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = aImg.length - 1;
    }
    aImg[i].style.display = 'block';
}

btnNext.onclick = function(){
    aImg[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = aImg.length - 1;
    }
    aImg[i].style.display = 'block';
}
