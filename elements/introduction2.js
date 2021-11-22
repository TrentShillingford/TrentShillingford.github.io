// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
}).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
}).add({
    targets: '#introduction',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 300,
    complete: () => {
        document.getElementById("introduction").style.display = "none"
        document.getElementsByClassName("ml2")[0].style.display = "none"
    }
})
    
textWrapper.style.display = ""  