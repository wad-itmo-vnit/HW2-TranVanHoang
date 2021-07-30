var modal = document.getElementById("myModal");
        // Get the image and insert it inside the modal - use its "alt" text as a caption
var arrimg = document.getElementsByClassName("pic");
var modalImg = document.getElementById("img01");
for (var i=0; i < arrimg.length; i++){
    var img = document.getElementsByClassName("pic")[i];
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}
        // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}