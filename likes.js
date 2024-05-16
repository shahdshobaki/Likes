var like = 3;

function liked(element){
    like++;
    document.querySelector('.like').innerText=  like + ' like(s)';
}