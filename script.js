function scrollForm(){

document.getElementById("admission").scrollIntoView({
behavior:"smooth"
});

}

document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("message").innerHTML =
"✅ Form Submitted Successfully";
