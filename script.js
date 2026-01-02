const seeImg = document.getElementById("seeImg"); //This is where the image is contained
const bigImg = document.getElementById("bigImg"); //This is the image

function viewImg(pic){
    seeImg.style.display = "flex";
    bigImg.style.animation = "fadeIn .5s 1";
    bigImg.src = pic; 
} 

function closeViewImg(){
    seeImg.style.display = "none";
   // seeImg.style.animation = "fadeOut .5s 1";
}