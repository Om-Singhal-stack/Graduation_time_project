const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
    nav.classList.add('active');    
    })
}
if(close){
    close.addEventListener('click',() =>{
    nav.classList.remove('active');    
    })
}






// var mainI = document.getElementById("main-img");
// var newlI1 = document.getElementsByClassName("newl1");
// newlI1[0].onclick = function(){
//     mainI.src =newlI1[0].src; 
// }
// newlI1[1].onclick = function(){
//     mainI.src = newlI1[1].src;
// }


// var mainImg = document.getElementById("main-img");
//         var smallImg = document.getElementsByClassName("small-img");
//         smallImg[0].onclick = function(){
//             mainImg.src = smallImg[0].src;
//         }
//         smallImg[1].onclick = function(){
//             mainImg.src = smallImg[1].src;
//         }
//         smallImg[2].onclick = function(){
//             mainImg.src = smallImg[2].src;
//         }
//         smallImg[3].onclick = function(){
//             mainImg.src = smallImg[3].src;
//         }