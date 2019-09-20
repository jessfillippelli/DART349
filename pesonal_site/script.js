window.onload = function(){
  let clickableElements = document.getElementsByClassName("clickable");

  let clickHandler = function(event){
  //  console.log("clicked  "+event.target.id);
    if(event.target.id ==="AM"){
      window.scrollTo(0, 0);

    }
    if(event.target.id ==="HP"){
      let hpOffsetTop = document.getElementById("s2").offsetTop;
      window.scrollTo(0, hpOffsetTop);

    }
    if(event.target.id ==="MP"){
      let mpOffsetTop = document.getElementById("s3").offsetTop;
      window.scrollTo(0, mpOffsetTop);

    }

  }
  for(let i = 0; i<clickableElements.length;i++){
    clickableElements[i].addEventListener("click",clickHandler);
  }



}
