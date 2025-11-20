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

function CopyEmail(){
  var copyText = document.getElementById("emailCopy");
  var change = document.getElementById("changeEmail")

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
  change.innerHTML = "Copied"

}

function CopyInsta(){
  var copyText = document.getElementById("instagramCopy");
    var change = document.getElementById("changeInsta")

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);
  change.innerHTML = "Copied"
}