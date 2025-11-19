let checked = false

function Hamburger(){
    let HamburgerMenu = document.getElementById("HamburgerMenu");

    checked =! checked;

    if (checked) {
        HamburgerMenu.classList="HamburgerMenuOn"
    } else {
        HamburgerMenu.classList="HamburgerMenuOff"
    }
}