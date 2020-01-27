// let i = 0,
//     text;
// text = "Hello, my name is Jonathan Petroons web developper !";

// function typing() {
//     if (i < text.length) {
//         document.getElementById("texte").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typing, 150);
//     }
// }
// typing();


function changeColor(id) {
    document.body.style.background = document.getElementById(id).innerHTML;
}

const socialButton = document.getElementById("social");
const shareButton = document.getElementById("share");

function changeSocial_holly(){
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons");
    shareButton.classList.add("share-button");
}


function changeSocial_purple(){
    
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons-purple");
    shareButton.classList.add("share-button-purple");

}
function changeSocial_mSea(){
    
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons-mSea");
    shareButton.classList.add("share-button-mSea");

}


function changeSocial_bMartina(){
    
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons-bMartina");
    shareButton.classList.add("share-button-bMartina");

}

function changeSocial_pGreen(){
    
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons-pGreen");
    shareButton.classList.add("share-button-pGreen");

}


function changeSocial_aGreen(){
    
    socialButton.removeAttribute("class");
    shareButton.removeAttribute("class");

    socialButton.classList.add("social-buttons-aGreen");
    shareButton.classList.add("share-button-aGreen");

}
// let socialButton = document.getElementById("social");
// socialButton.classList.remove("social-buttons");
// socialButton.classList.add("share-button");









