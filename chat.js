var openLoginModalButton = document.getElementById("openLoginModalButton");
var closeLoginModalButton = document.getElementById("closeLoginModalButton");
var loginModal = document.getElementById("loginModal");
var openRegistrationModalButton = document.getElementById("openRegistrationModalButton");
var closeRegistrationModalButton = document.getElementById("closeRegistrationModalButton");
var registrationModal = document.getElementById("registrationModal");
openLoginModalButton.addEventListener("click", function() {
    loginModal.style.display = "block";
});
closeLoginModalButton.addEventListener("click", function() {
    loginModal.style.display = "none";
});
openRegistrationModalButton.addEventListener("click", function() {
    registrationModal.style.display = "block";
});
closeRegistrationModalButton.addEventListener("click", function() {
    registrationModal.style.display = "none";
});