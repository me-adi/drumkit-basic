var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click",music);
        function music(){
    
        var thisbutton = this.innerHTML;

        makeSound(thisbutton);
        buttonAnimation(thisbutton);
}
}

document.addEventListener("keydown",function (event) {
    
       makeSound(event.key);
       buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "a":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "f":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
            default: console.log(thisbutton);
            break;
    }
};

function buttonAnimation(currentkey) {
    var activebutton = document.querySelector("."+currentkey);

    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
    
}
