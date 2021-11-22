let sidebar = document.createElement("div");
sidebar.style.backgroundColor = 'rgb(183, 183, 183)';
sidebar.style.width = '110px';
sidebar.style.height = window.screen.availHeight - Math.abs(window.innerHeight - window.outerHeight);
sidebar.style.position = 'fixed';
sidebar.style.zIndex = "0";
sidebar.style.setProperty('-webkit-backface-visibility', 'hidden');
sidebar.id = "sidebar";
document.getElementById("veil").insertBefore(sidebar, document.getElementById("veil").firstChild)