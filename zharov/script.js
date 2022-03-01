  
const zharov = document.getElementById("zharov");
const pipi = document.getElementById("pipi");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (zharov.classList != "jump") {
        zharov.classList.add("jump")
    }
    setTimeout (function() {
        zharov.classList.remove("jump")
    }, 300)
}