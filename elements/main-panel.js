// Positioning and styling of page containers 
let mainPanel = document.getElementById("main-panel");
let homePanel = document.getElementById("home-page");
let projectsPanel = document.getElementById("projects-page");
let contactPanel = document.getElementById("contact-page");
homePanel.style.display = "";
projectsPanel.style.display = "none";
contactPanel.style.display = "none";
homePanel.style.opacity = "1"
projectsPanel.style.opacity = "0"
contactPanel.style.opacity = "0"
mainPanel.style.width = homePanel.style.width = projectsPanel.style.width = contactPanel.style.width = .7 * window.screen.availWidth;
mainPanel.style.left = homePanel.style.left = projectsPanel.style.left = contactPanel.style.left = .17 * window.screen.availWidth;
mainPanel.style.position = 'absolute';
mainPanel.style.zIndex = "5";

//Calibrating entry width
let className = document.getElementsByClassName('entry');
for(var index=0;index < className.length;index++){
    className[index].style.width = (23/25) * parseInt(projectsPanel.style.width);
    className[index].style.marginLeft = (1/25) * parseInt(projectsPanel.style.width);
}

let scaleFonts = (char) => {

    var tmp_fonts = [];
    var tmp = document.querySelectorAll(char);
    screenWidth = window.screen.availWidth;

    for (i = 0; i < tmp.length; ++i) {
        //put all values into a list 
        tmp_fonts.push(window.getComputedStyle(tmp[i]).getPropertyValue('font-size'));
    }

    for(u = 0; u < tmp.length; u++){
        new_size = (parseInt(tmp_fonts[u].replace("px","")) - ((1280-screenWidth)/screenWidth)).toString() + "px";
        tmp[u].style.setProperty('font-size', new_size);
    }

}

scaleFonts("div");
scaleFonts("p");
scaleFonts("h1");