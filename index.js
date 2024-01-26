    let emailInputFieldElem = document.querySelector(".input-email");
    let card = document.querySelector(".custom-card");
    let confirmed = document.querySelector(".confirmed")
    let errorMessageElem = document.querySelector(".error-message");
    let submitBtn = document.getElementById("form-submit");
    let form = document.getElementById("form");
    let dismissBtn = document.getElementById("dismiss-btn");
    let email = document.getElementById("email");
    let emailValue = "";


    dismissBtn.addEventListener("click",()=>{
        confirmed.style.display = "none";
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        storeEmail();
        renderNextStep(validateEmail());
    
    });


    function renderNextStep(validity){
        if(!validity){
            errorMessageElem.textContent = "Valid email required"
            emailInputFieldElem.classList.add("input-error");
        }else{
            errorMessageElem.textContent = "";
            emailInputFieldElem.classList.remove("input-error");
            card.style.display = "none";
            confirmed.style.display = "flex";
            email.innerText = emailValue;
        }
    }

    function storeEmail(){
        emailValue = emailInputFieldElem.value;
    };

    function validateEmail(){
        if(emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            return true;
        } else{
            return false; 
        }
        
    };