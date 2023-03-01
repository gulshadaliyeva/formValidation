let submit = document.querySelector("input[type='submit']")
let firstName = document.querySelector(".firstname")
let lastName = document.querySelector(".lastname")
let email = document.querySelector(".email")
let number = document.querySelector(".number")
let textarea = document.querySelector("textarea")
submit.addEventListener("click", function(e){
    e.preventDefault();
    if(firstName.value == "") firstName.nextElementSibling.innerText = "Adınızı yazın."
    else if(firstName.value.length < 3) firstName.nextElementSibling.innerText = "Adınızın minimum uzunluğu 3-dən kiçikdir."
    else firstName.nextElementSibling.innerText = ""
    if (lastName.value == "") lastName.nextElementSibling.innerText = "soyadinizi qeyd edin"
    else if ( lastName.value.length < 4) lastName.nextElementSibling.innerText = "soyadinizi tam qeyd edin" 
    else lastName.nextElementSibling.innerText = ""
    if (email.value == "") email.nextElementSibling.innerText = "emailinizi qeyd edin"
    else if ( !email.value.includes("@")) email.nextElementSibling.innerText = "duzgun qeyd olunmamishdir " 
    else email.nextElementSibling.innerText = ""
    if ( number.value == "") number.nextElementSibling.innerText = "nomrenizi qeyd edin"
    else if ( !number.value.startsWith("012") && !number.value.startsWith("050") && !number.value.startsWith("077") && !number.value.startsWith("070") && !number.value.startsWith("099") && !number.value.startsWith("010") ) number.nextElementSibling.innerText = "duzgun qeyd olunmamishdir"
    else number.nextElementSibling.innerText = ""
    if ( textarea.value == "") textarea.nextElementSibling.innerText = "suallarinizi qeyd edin"
    else if ( textarea.value.length > 50) textarea.nextElementSibling.innerText = "50 simvol yaza bilersiniz"
    else textarea.nextElementSibling.innerText = ""
})
