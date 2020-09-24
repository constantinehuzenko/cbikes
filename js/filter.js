const filter = {
  filterAction() {
    document.querySelectorAll(".product-box__item").forEach((item) => {
      let categoryAtribut = item.getAttribute("data-category");
      let priceAtribut = Number(item.getAttribute("value"));

      if (
        (filter.category() == categoryAtribut || filter.category() == "all") &&
        (filter.price() >= priceAtribut || filter.price() == "0")
      ) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  },

  price() {
    let priceValue = document.querySelector(".price-value__item");
    priceValue.innerHTML = document.querySelector("[data-filter]").value;

    return document.querySelector("[data-filter]").value;
  },

  category() {
    let radio = document.querySelectorAll(".category-control");
    for (const item of radio) {
      if (item.checked) {
        return item.getAttribute("data-value-category");
      }
    }
  },

  checkAtributeToggle() {
    document.querySelector(".select-control").addEventListener("click", () => {
      document.querySelectorAll(".category-control").forEach((item) => {
        item.removeAttribute("checked");
      });

      if (event.target.classList == "category-control") {
        event.target.setAttribute("checked", "");
      } else {
        event.stopImmediatePropagation();
      }
    });
  },
};

filter.checkAtributeToggle();

document
  .querySelector(".select-control")
  .addEventListener("click", filter.filterAction);

document
  .querySelector(".price-control")
  .addEventListener("change", filter.filterAction);
