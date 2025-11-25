(function () {
  const OpenButton = document.querySelector(".Nav__Menu");
  const Menu = document.querySelector(".Nav__Link");
  const CloseButton = document.querySelector(".Nav__Close");

  OpenButton.addEventListener("click", () => {
    Menu.classList.add("Nav__Link--Show"); //sirve para abrir el menu
  });
  //No

  CloseButton.addEventListener("click", () => {
    Menu.classList.remove("Nav__Link--Show"); //sirve para cerrar el menu
  });
})();
