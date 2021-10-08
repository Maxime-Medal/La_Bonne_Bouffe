const message = "Merci pour votre message ! Notre équipe met tout en oeuvre pour vous répondre au plus vite.";

const submit = document.querySelector("#form-contact");
console.log(submit);
submit.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });