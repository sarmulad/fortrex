export const initializeAccordions = () => {
  const hasInitializedAccordions = localStorage.getItem(
    "INITIALIZED_ACCORDIONS"
  );
  if (!hasInitializedAccordions) {
    var acc = document.querySelectorAll(".accordion");
    var accList = Array.prototype.slice.call(acc);
    accList.forEach((accordion) => {
      accordion.addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        accordion.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
    localStorage.setItem("INITIALIZED_ACCORDIONS", true);
  }
};
