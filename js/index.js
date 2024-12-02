document.addEventListener("DOMContentLoaded", function () {
  const dropdownSubmenu = document.querySelectorAll(".dropdown-submenu");
  dropdownSubmenu.forEach(function (submenu) {
    submenu.addEventListener("click", function (e) {
      e.stopPropagation();
      const subMenu = submenu.querySelector(".dropdown-menu");
      subMenu.classList.toggle("show");
    });
  });
});
