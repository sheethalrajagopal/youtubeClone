var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
    sideBar.classList.toggle("small-sidebar"); //hide-show side bar
    container.classList.toggle("large-container");
}
