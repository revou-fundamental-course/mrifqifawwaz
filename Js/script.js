
const compNameInput = document.getElementById("compNameInput")
const emailInput = document.getElementById("emailInput")
const interestInput = document.getElementById("interestInput")
const submitButton = document.getElementById("submitButton")

submitButton.addEventListener ("click", function(event) {
    event.preventDefault()
    const compNameValue = compNameInput.value
    const emailValue = emailInput.value
    const interestValue = interestInput.value
    formValidation(compNameValue, emailValue, interestValue)
})

function formValidation(cname, email, interest) {
    if (cname == "" || email == "" || interest== "" ) {
        alert("Please fill Name, Email, and your Interest")
    } else {
        alert("Thank You!")
    } 
}


let slideIndex = 0;
showSlides();                   
    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
