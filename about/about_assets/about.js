function hideImg() {
    var targetImg = document.getElementById("headImg")
    
    if (targetImg.style.backgroundImage == "") { 
        targetImg.style.backgroundImage= "url('internet.png')"
    }else if (targetImg.style.backgroundImage == "url('internet.png')") {
        targetImg.style.backgroundImage= ""
    }
}