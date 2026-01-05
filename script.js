const seeImg = document.getElementById("seeImg"); //This is where the image is contained
const bigImg = document.getElementById("bigImg"); //This is the image


//Open View

function viewImg(pic){
    seeImg.style.display = "flex";
    bigImg.style.animation = "fadeIn .5s 1";
    bigImg.src = pic; 
} 

//Close View

function closeViewImg(){
    seeImg.style.display = "none";
   // seeImg.style.animation = "fadeOut .5s 1";
}

//Copy Image
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", async ()=> {
const response = await fetch(bigImg.src);
const blob = await response.blob();
const copied = document.getElementById("copied");

try {
    await navigator.clipboard.write([
        new ClipboardItem({
            [blob.type]: blob
})
    ]);
    //alert("Image copied!");
    copied.classList.add("displayed");
    removeToast();
} catch (err) {
    console.error("failed to copy image!", err);
}
})

function removeToast(){
    setTimeout(()=>{
    copied.classList.remove("displayed");

}, 1500);  
}