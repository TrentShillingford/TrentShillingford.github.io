let sidebarToggle_on = document.createElement("img");
let sidebarToggle_off = document.createElement("img");
let sidebar_burst_effect = document.createElement("div")
var main = document.getElementById("main-panel");
let buttonLength = 40;
sidebarToggle_on.setAttribute('src', './icons/menu_on_icon.png');
sidebarToggle_off.setAttribute('src', './icons/menu_off_icon.png');
sidebar_burst_effect.style.backgroundColor = "rgb(107, 107, 107)";
sidebarToggle_on.style.width = sidebarToggle_off.style.width = (buttonLength).toString() + "px";
sidebarToggle_on.style.height = sidebarToggle_off.style.height = (buttonLength).toString() + "px";
sidebar_burst_effect.style.width = "110px";
sidebar_burst_effect.style.height = window.screen.availHeight;
sidebar_burst_effect.style.marginLeft = sidebar_burst_effect.style.top = "0"
sidebarToggle_on.style.position = sidebarToggle_off.style.position = sidebar_burst_effect.style.position = 'fixed';
sidebarToggle_on.style.top = sidebarToggle_off.style.top = .025 * window.screen.availHeight;
sidebarToggle_on.style.marginLeft = sidebarToggle_off.style.marginLeft = ((110 - buttonLength) / 2).toString() + "px";
sidebarToggle_on.style.marginTop = sidebarToggle_off.style.marginTop = sidebar_burst_effect.style.marginTop = "0px";
sidebarToggle_on.style.cursor = sidebarToggle_off.style.cursor = "pointer";
sidebarToggle_on.style.zIndex = "3";
sidebarToggle_off.style.zIndex = "6";
sidebar_burst_effect.style.zIndex = "4";
sidebarToggle_on.id = 'sidebar-on';
sidebarToggle_off.id = 'sidebar-off';
sidebar_burst_effect.id = 'sidebar-burst';

sidebarToggle_on.addEventListener("click", () => {
    //document.getElementById("sidebar").style.display = "none";
    //sidebarToggle_on.style.display = "none";
    burst_out();
})

sidebarToggle_off.addEventListener("click", () => {
    //document.getElementById("sidebar").style.display = "";
    //sidebarToggle_on.style.display = "";
    burst_in();
})

document.getElementById("veil").insertBefore(sidebarToggle_on, document.getElementById("veil").firstChild);
document.getElementById("veil").append(sidebarToggle_off);
document.getElementById("veil").append(sidebar_burst_effect);

async function burst_in() {
    sleep = (ms) => {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    var whats_left = parseInt(sidebar_burst_effect.style.marginLeft) // amount of left space left
    var whats_width = parseInt(sidebar_burst_effect.style.width) // amount of width given
    var whats_top = parseInt(sidebar_burst_effect.style.top) // amount of top space left
    var whats_height = parseInt(sidebar_burst_effect.style.height) // amount of height given
    var terminal_height = parseInt(sidebarToggle_on.style.height)
    var terminal_width = parseInt(sidebarToggle_on.style.width)
    var terminal_left = parseInt(sidebarToggle_on.style.marginLeft)
    var terminal_top = parseInt(sidebarToggle_on.style.top)

    main.style.zIndex = "-2"

    while(whats_width > terminal_width || whats_height > terminal_height){

        //for width, shift element one pixel left and two pixels right if possible
        if(parseInt(sidebar_burst_effect.style.marginLeft) < terminal_left){whats_left += 5;}
        if(parseInt(sidebar_burst_effect.style.width) >= terminal_width){whats_width -= 20;}

        //for height, shift element one pixel down and two pixels up
        if(parseInt(sidebar_burst_effect.style.top) < terminal_top){whats_top += 2;}
        if(parseInt(sidebar_burst_effect.style.height) >= terminal_height){whats_height -= 100;} 

        if (whats_height < terminal_height){whats_height = terminal_height}
        if (whats_width < terminal_width){whats_width = terminal_width}
        if (whats_left > terminal_left){whats_left = terminal_left}
        if (whats_top > terminal_top){whats_top = terminal_top}

        //then assign the dimensions to the element
        sidebar_burst_effect.style.marginLeft = whats_left.toString() + "px";
        sidebar_burst_effect.style.width = whats_width.toString() + "px";
        sidebar_burst_effect.style.top = whats_top.toString() + "px";
        sidebar_burst_effect.style.height = whats_height.toString() + "px";

        await sleep(.1);

    }

    //Last set the z-indices of burst_effect and off button above the on button, to -1 and 2 respectively
    sidebarToggle_off.style.zIndex = "2";
    sidebar_burst_effect.style.zIndex = "-1";

}

async function burst_out() {

    sleep = (ms) => {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    var whats_left = parseInt(sidebar_burst_effect.style.marginLeft) // amount of left space left
    var whats_width = parseInt(sidebar_burst_effect.style.width) // amount of width given
    var whats_top = parseInt(sidebar_burst_effect.style.top) // amount of top space left
    var whats_height = parseInt(sidebar_burst_effect.style.height) // amount of height given
    var terminal_height = window.screen.availHeight;
    var terminal_width = 110

    //First set the z-indices of burst_effect and off button above the on button, to 4 and 5 respectively
    sidebarToggle_off.style.zIndex = "6";
    sidebar_burst_effect.style.zIndex = "4";

    while(whats_width < terminal_width || whats_height < terminal_height){
        
        //for width, shift element couple pixels left and more right if possible
        if(parseInt(sidebar_burst_effect.style.marginLeft) > 0){whats_left -= 5;}
        if(parseInt(sidebar_burst_effect.style.width) <= 110){whats_width += 20;}

        //for height, shift element couple pixels up and more pixels down
        if(parseInt(sidebar_burst_effect.style.top) > 0){whats_top -= 5;}
        if(parseInt(sidebar_burst_effect.style.height) <= terminal_height){whats_height += 40;} 

        if (whats_height > terminal_height){whats_height = terminal_height}
        if (whats_width > terminal_width){whats_width = terminal_width + 2}
        if (whats_left < 0){whats_left = 0}
        if (whats_top < 0){whats_top = 0}
        
        //then assign the dimensions to the element
        sidebar_burst_effect.style.marginLeft = whats_left.toString() + "px";
        sidebar_burst_effect.style.width = whats_width.toString() + "px";
        sidebar_burst_effect.style.top = whats_top.toString() + "px";
        sidebar_burst_effect.style.height = whats_height.toString() + "px";

        await sleep(.1);
    }

    main.style.zIndex = "5"

}