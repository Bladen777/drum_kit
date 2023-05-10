

var num_of_keys = document.querySelectorAll(".drum").length;

for (var keys = 0; keys<num_of_keys; keys++){

    document.querySelectorAll(".drum")[keys].addEventListener("click", function(){
    
        key_check(this.innerHTML);
        
        button_animation(this.innerHTML);
        }
    )
};  
document.addEventListener("keydown", function(event){
    
    key_check(event.key);

    button_animation(event.key);
    }
)  


function key_check(key){

switch (key) {
    case "w":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();    
    break;
    case "a":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();    
    break;
    case "s":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();    
    break;
    case "d":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();    
    break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();    
    break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();    
    break;
    case "l":
        var bass = new Audio("sounds/kick-bass.mp3");
        bass.play();    
    break;

    default: console.log(key);
        break;
}
}

function button_animation(key){
    var active_button = document.querySelector("."+ key);

    active_button.classList.add("pressed");

    setTimeout(
        function(){
        active_button.classList.remove("pressed");
        }
        ,
        100
        )
}