function setSize () {
    document.getElementById('sidebar').style.height = window.screen.availHeight
    document.getElementById('sidebar-on').style.top = .025 * window.screen.availHeight;
    document.getElementById('sidebar-off').style.top = .025 * window.screen.availHeight;
    
    //add clause if width and height are above 40 if it already burst out
    if(parseInt(document.getElementById('sidebar-burst').style.height) == 40 || parseInt(document.getElementById('sidebar-burst').style.width) == 40){
        document.getElementById('sidebar-burst').style.top = .025 * window.screen.availHeight;
    }
    else if (document.getElementById('sidebar-burst').style.height > 40 && document.getElementById('sidebar-burst').style.height <= window.screen.availHeight){
        document.getElementById('sidebar-burst').style.height = window.screen.availHeight;
    }

    document.getElementById('sidebar-about').style.top = .15 * window.screen.availHeight;
    document.getElementById('sidebar-about-on').style.top = .15 * window.screen.availHeight;    
    document.getElementById('sidebar-projects').style.top = .40 * window.screen.availHeight;
    document.getElementById('sidebar-projects-on').style.top = .40 * window.screen.availHeight;
    document.getElementById('sidebar-contact').style.top = .65 * window.screen.availHeight;
    document.getElementById('sidebar-contact-on').style.top = .65 * window.screen.availHeight;    
    document.getElementById('main-panel').style.width = .7 * window.screen.availWidth;
    document.getElementById('main-panel').style.left = .17 * window.screen.availWidth;
    document.getElementById('home-page').style.width = .7 * window.screen.availWidth;
    document.getElementById('home-page').style.left = .17 * window.screen.availWidth;
    document.getElementById('projects-page').style.width = .7 * window.screen.availWidth;
    document.getElementById('projects-page').style.left = .17 * window.screen.availWidth;
    document.getElementById('contact-page').style.width = .7 * window.screen.availWidth;
    document.getElementById('contact-page').style.left = .17 * window.screen.availWidth;
    document.getElementById('contact-page').style.height = window.screen.availHeight; 
    document.getElementById('home-page').style.height = window.screen.availHeight; 
    document.getElementById('projects-page').style.height = window.screen.availHeight; 
    document.getElementsByClassName("ml2")[0].style.top = .4 * window.innerHeight
    document.getElementsByClassName("ml2")[0].style.left = (window.innerWidth - 252.625) / 2;

    var className = document.getElementsByClassName('entry');
    for(var index=0;index < className.length;index++){
        className[index].style.width = (23/25) * parseInt(document.getElementById("projects-page").style.width);
        className[index].style.marginLeft = (1/25) * parseInt(document.getElementById("projects-page").style.width);
    }

}

window.addEventListener('resize', () => {setSize()});