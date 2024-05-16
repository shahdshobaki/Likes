
function liked(element){
var x= document.getElementById(element)
console.log(x)
var count= parseInt(x.innerText)
x.innerText = count+1

}


// var like = 9;

// function liked1(element){
//     like++;
//     document.querySelector('.like1').innerText=  like + ' like(s)';
// }

// // var like1 = 12;

// // function liked2(element){
// //     like1++;
// //     document.querySelector('.like2').innerText=  like1 + ' like(s)';
// // }

// // var like2 = 9;

// // function liked3(element){
// //     like2++;
// //     document.querySelector('.like3').innerText=  like2 + ' like(s)';
// // }