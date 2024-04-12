

let colorBtn = document.getElementsByName("carColor");
let carImg  = document.querySelectorAll(".carImg");


colorBtn.forEach(function(radioButton, index) {
    radioButton.addEventListener('change',function(){
        carImg.forEach(function(img,imgindex) {
            if(index === imgindex) {
                img.style.opacity = "1";
                img.style.transition = "all 1s ease"
            }else {
                img.style.opacity = "0";
                img.style.transition = "all 1s ease"
            }
        })
    })
})





    let radioBtns = document.querySelectorAll(".colorInput div input");

    for(let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].addEventListener("change",function(){
            var selectedValue = document.querySelector('input[name="carColor"]:checked').value;
            document.getElementById("changeName").innerText = selectedValue;
        })
    }