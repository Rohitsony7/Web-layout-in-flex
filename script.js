const button = document.getElementById("click");

const sidenav = document.getElementById("sidenav");

/* console.log(button); */

let isToggle = true;

button.addEventListener("click", () => {
  if (isToggle) {
    sidenav.style.width = "0px";
    sidenav.style.border = "none";

    isToggle = false;
  } else {
    sidenav.style.width = "150px";
    sidenav.style.border = "1px solid black";
    isToggle = true;
  }
});
