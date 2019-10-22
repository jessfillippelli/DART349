// Get the modal
window.onload  = function(){
  console.log("loaded");

let modal = document.getElementById("myModal");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgs = document.getElementsByClassName("myImg");
let modalImg = document.getElementById("img01");
for(let i =0; i< imgs.length;i++){
  //console.log(imgs[i]);
  imgs[i].onclick = function(){
    modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
    console.log("clicked");
  }
}

span.onclick = function() {
 modal.style.display = "none";
}


}
