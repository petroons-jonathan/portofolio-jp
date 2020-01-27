
function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "d-none" );
};


function validation() {

    const name = document.getElementById("name");
    const email =document.getElementById("email");
    const message = document.getElementById("message");

    let error = "";

    if(name.value = ""){
        error= "Vous devez écrire un nom";
        document.getElementById("name-error").innerHTML = error;
        return false;
    }
    if(email.value = ""){
        error= "Vous devez écrire un email";
        document.getElementById("email-error").innerHTML = error;
        return false;
    }
    if(message.value = ""){
        error= "Vous devez écrire un message";
        document.getElementById("message-error").innerHTML = error;
        return false;
    }
    else {
        return true;
    }

};


const divRepo = document.getElementById("repo");
const listResult = document.getElementById("api");

const requestRepo = async () => {
    const response = await fetch('https://api.github.com/search/repositories?q=user:petroons-jonathan');
    const json = await response.json();
    console.log(json);

    json.items.forEach(element => {
        const link = document.createElement("a");
        link.href = element.html_url;
        link.textContent = element.full_name;

        const list = document.createElement("li");
        list.appendChild(link);
        divRepo.appendChild(list);
        
    });
}

requestRepo();

const requestInfo = async () => {
    const responseInfo = await fetch('https://api.github.com/users/petroons-jonathan');
    const jsonInfo = await responseInfo.json();
    console.log(jsonInfo.public_repos);
    document.getElementById("numb-repos").innerHTML = jsonInfo.public_repos ;
    document.getElementById("numb-followers").innerHTML = jsonInfo.followers ;
    document.getElementById("numb-following").innerHTML = jsonInfo.following ;

}

requestInfo();

let animation = new TimelineMax ({onUpdate:updatePercentage});

const control = new ScrollMagic.Controller();

animation.from("#restoBe", .5, {x:-50, opacity:0});
animation.from("#hPoulette", .5, {x:50, opacity:0});
animation.from("#chatBox", .5, {x:-50, opacity:0});
animation.from("#labPerso", .5, {x:50, opacity:0});

const scene = new ScrollMagic.Scene({
    triggerElement:".animation-gsap",
    triggerHook:"onLeave",
    duration:"100%"
})

.setPin(".animation-gsap")
.setTween(animation)
.addTo(control);

function updatePercentage(){
    animation.progress();
}

window.onload = () => {
    let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    bannerNode.parentNode.removeChild(bannerNode);
    }