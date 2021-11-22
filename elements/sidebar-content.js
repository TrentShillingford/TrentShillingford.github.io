let squarelength = 70;

//creating three buttons on the side for the navigation and placing them in sidebar
//The containers for the icons and text
let sidebarAbout = document.createElement("div");
let sidebarProjects = document.createElement("div");
let sidebarContact = document.createElement("div");

let sidebarAbout_alt = document.createElement("div");
let sidebarProjects_alt = document.createElement("div");
let sidebarContact_alt = document.createElement("div");

//for the icons when it is not hovered over
let sidebarAbout_icon_off = document.createElement("img");
let sidebarProjects_icon_off = document.createElement("img");
let sidebarContact_icon_off = document.createElement("img");

//for the icons when they are being hovered over
let sidebarAbout_icon_on = document.createElement("img");
let sidebarProjects_icon_on = document.createElement("img");
let sidebarContact_icon_on = document.createElement("img");

//the text for the off icons for navigation
let sidebarAbout_text = document.createElement("div");
let sidebarProjects_text = document.createElement("div");
let sidebarContact_text = document.createElement("div");

//the text for the colored on icons for navigation
let sidebarAbout_text_alt = document.createElement("div");
let sidebarProjects_text_alt = document.createElement("div");
let sidebarContact_text_alt = document.createElement("div");

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function page_toggle(text){

    i = 1
    var turn_off = null;
    
    switch(text.innerHTML){
        case "Home":
            //if the home page is already up, do nothing
            if(document.getElementById("home-page").style.display == ""){return;}

            //else figure out which display is on and turn that one off
            if(document.getElementById("contact-page").style.display == ""){turn_off = document.getElementById("contact-page")}
            if(document.getElementById("projects-page").style.display == ""){turn_off = document.getElementById("projects-page")}

            //decrease opacity for fading out
            while(i > 0){
                i -= .1;
                turn_off.style.opacity = i.toString();
                await sleep(.1);
            }
            
            //then hide the display
            turn_off.style.display = "none"

            await sleep(200);

            //tuen on the target page display
            document.getElementById("home-page").style.display = ""
            while(i < 1){
                i += .1;
                document.getElementById("home-page").style.opacity = i.toString();
                await sleep(.1);
            }
            break;        
        case "Projects":
            //if the home page is already up, do nothing
            if(document.getElementById("projects-page").style.display == ""){return;}

            //else figure out which display is on and turn that one off
            if(document.getElementById("contact-page").style.display == ""){turn_off = document.getElementById("contact-page")}
            if(document.getElementById("home-page").style.display == ""){turn_off = document.getElementById("home-page")}

            //decrease opacity for fading out
            while(i > 0){
                i -= .1;
                turn_off.style.opacity = i.toString();
                await sleep(.1);
            }
            
            //then hide the display
            turn_off.style.display = "none"

            await sleep(200);

            //tuen on the target page display
            document.getElementById("projects-page").style.display = ""
            while(i < 1){
                i += .1;
                document.getElementById("projects-page").style.opacity = i.toString();
                await sleep(.1);
            }
            break;
        case "Contact":
            //if the home page is already up, do nothing
            if(document.getElementById("contact-page").style.display == ""){
                return;
            }

            //else figure out which display is on and turn that one off
            if(document.getElementById("projects-page").style.display == ""){turn_off = document.getElementById("projects-page")}
            if(document.getElementById("home-page").style.display == ""){turn_off = document.getElementById("home-page")}

            //decrease opacity for fading out
            while(i > 0){
                i -= .1;
                turn_off.style.opacity = i.toString();
                await sleep(.1);
            }
            
            //then hide the display
            turn_off.style.display = "none"

            await sleep(200);

            //tuen on the target page display
            document.getElementById("contact-page").style.display = ""
            while(i < 1){
                i += .1;
                document.getElementById("contact-page").style.opacity = i.toString();
                await sleep(.1);
            }
            break;
    }        
}

function setup_icons (container, container_alt, icon_off, icon_on, text, text_alt, label) {

    if(label == "home"){
        icon_off.setAttribute('src', './icons/home_icon_off.png');
        icon_on.setAttribute('src', './icons/home_icon_on.png');
        text.innerHTML = text_alt.innerHTML = "Home"
        container.id = 'sidebar-about'
        container_alt.id = 'sidebar-about-on'
        container.style.top = container_alt.style.top = .15 * window.screen.availHeight;
        container.addEventListener("click", () => {page_toggle(text)})
    }
    if(label == "projects"){
        icon_off.setAttribute('src', './icons/folder_icon_off.png');
        icon_on.setAttribute('src', './icons/folder_icon_on.png');
        text.innerHTML = text_alt.innerHTML = "Projects"
        container.id = 'sidebar-projects'
        container_alt.id = 'sidebar-projects-on'
        container.style.top = container_alt.style.top = .40 * window.screen.availHeight;
        container.addEventListener("click", () => {page_toggle(text)})
    }
    if(label == "contact"){
        icon_off.setAttribute('src', './icons/mail_icon_off.png');
        icon_on.setAttribute('src', './icons/mail_icon_on.png');
        text.innerHTML = text_alt.innerHTML = "Contact"
        container.id = 'sidebar-contact'
        container_alt.id = 'sidebar-contact-on'
        container.style.top = container_alt.style.top = .65 * window.screen.availHeight;
        container.addEventListener("click", () => {page_toggle(text)})
    }

    //aesthetics of the buttons
    text.style.textAlign = text_alt.style.textAlign = "center";
    text.style.fontFamily = text_alt.style.fontFamily = "monospace";
    text.style.color = "rgb(107, 107, 107)";
    text_alt.style.color = "rgb(255, 245, 187)";

    //setting the dimensions for the elements in the tag
    container.style.width = container_alt.style.width = (squarelength).toString() + "px";
    container.style.height = container_alt.style.height = (squarelength).toString() + "px";
    icon_off.style.width = (squarelength).toString() + "px";
    icon_off.style.height = (squarelength).toString() + "px";
    icon_on.style.width = (squarelength).toString() + "px";
    icon_on.style.height = (squarelength).toString() + "px";

    //positioning
    container.style.position = container_alt.style.position = 'inherit';
    container.style.marginLeft = container_alt.style.marginLeft = ((110 - squarelength) / 2).toString() + "px";
    container.style.zIndex = "2";
    container_alt.style.zIndex = "1";

}

setup_icons(sidebarAbout, sidebarAbout_alt, sidebarAbout_icon_off, sidebarAbout_icon_on, sidebarAbout_text, sidebarAbout_text_alt, "home");
setup_icons(sidebarProjects, sidebarProjects_alt, sidebarProjects_icon_off, sidebarProjects_icon_on, sidebarProjects_text, sidebarProjects_text_alt, "projects");
setup_icons(sidebarContact, sidebarContact_alt, sidebarContact_icon_off, sidebarContact_icon_on, sidebarContact_text, sidebarContact_text_alt, "contact");

//append the elements to the containers then append to the sidebar
sidebarContact.append(sidebarContact_icon_off)
sidebarContact.append(sidebarContact_text)
sidebarProjects.append(sidebarProjects_icon_off)
sidebarProjects.append(sidebarProjects_text)
sidebarAbout.append(sidebarAbout_icon_off)
sidebarAbout.append(sidebarAbout_text)

sidebarContact_alt.append(sidebarContact_icon_on)
sidebarContact_alt.append(sidebarContact_text_alt)
sidebarProjects_alt.append(sidebarProjects_icon_on)
sidebarProjects_alt.append(sidebarProjects_text_alt)
sidebarAbout_alt.append(sidebarAbout_icon_on)
sidebarAbout_alt.append(sidebarAbout_text_alt)

sidebarAbout.classList.add('fade');
sidebarProjects.classList.add('fade');
sidebarContact.classList.add('fade');

document.getElementById("sidebar").append(sidebarContact)
document.getElementById("sidebar").append(sidebarProjects)
document.getElementById("sidebar").append(sidebarAbout)
document.getElementById("sidebar").append(sidebarAbout_alt)
document.getElementById("sidebar").append(sidebarProjects_alt)
document.getElementById("sidebar").append(sidebarContact_alt)