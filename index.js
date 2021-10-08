const form = document.querySelector("#form");
const submitCom = document.querySelector("#submitCom");
const submitPseudo = document.querySelector("#submitPseudo");
const usersCom = document.querySelector("#usersCom");


// form.onsubmit = function(event) {
//     event.preventDefault();
//     const newCom = document.createElement("li");
//     newCom.innerHTML = submitCom.value;
//     usersCom.appendChild(newCom);
//     submitCom.value = "";
//   };


form.onsubmit = function(event) {
    event.preventDefault();
    const cardAvis = document.createElement("li");
    cardAvis.classList.add("card-avis");
    usersCom.appendChild(cardAvis);

    const comment = {};

    const pseudo = document.createElement("div");
    pseudo.classList.add("pseudo");
    pseudo.innerHTML = submitPseudo.value;
    cardAvis.appendChild(pseudo);

    comment.author = pseudo.innerHTML;

    let date = new Date();
    const dateOfCom = document.createElement("div");
    dateOfCom.classList.add("date-of-com");
    dateOfCom.innerHTML = "envoyé le " + ('0'+date.getDate()).slice(-2)+"/"+('0'+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear();
    cardAvis.appendChild(dateOfCom);

    comment.date = dateOfCom.innerHTML;

    const textAvis = document.createElement("div");
    textAvis.classList.add("text-avis");
    textAvis.innerHTML = submitCom.value;
    cardAvis.appendChild(textAvis);

    comment.content = textAvis.innerHTML;

    localStorage.setItem("comments", JSON.stringify(comment));

    submitCom.value = "";
    submitPseudo.value = "";
};

let counter = 11;

// let counterOfLike = localStorage.getItem("likes", counterOfLike);
// if(counterOfLike = typeof(0)){
//     counter = counterOfLike;
// } else {
//     counter = 12;
// };



const countDiv = document.querySelector("#count");
const likeJaime = document.querySelector("#likeJaime");
const likeButton = document.querySelector("#likeButton");
const dislikeButtonDiv = document.querySelector("#dislikeButtonDiv");

countDiv.innerHTML = counter; 

likeButton.addEventListener('click', function(){
    counter += 1;
    countDiv.innerHTML = counter; 
    likeButton.style.color = "white";
    likeButton.style.backgroundColor = "rgba(207, 43, 78, 0.9)";
    likeButton.value = "J'aime déjà !";
    likeButton.disabled = true;

    // Céation du bouton dislike
    const dislikeButton = document.createElement("input");
    dislikeButton.type = "button";
    dislikeButton.id = "dislikeButton";
    dislikeButton.value = "Je n'aime plus";
    dislikeButtonDiv.appendChild(dislikeButton);

    // counterOfLike = counter;
    // localStorage.setItem("likes", JSON.stringify(counterOfLike));

    dislikeButton.addEventListener('click', function(){
        counter -= 1;
        countDiv.innerHTML = counter; 
        dislikeButtonDiv.removeChild(dislikeButton);
        likeButton.style.color = "black";
        likeButton.style.backgroundColor = "white";
        likeButton.value = "J'aime !";
        likeButton.disabled = false;


        // dislikeButton.style.color = "white";
        // dislikeButton.style.backgroundColor = "rgba(207, 43, 78, 0.9)";
        // dislikeButton.value = "J'aime déjà !";
        // dislikeButton.disabled = true;
        
    });

});
