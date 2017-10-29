var initMenu = function() {

  if (window.screen.availWidth < 768) {


    var menu = document.querySelector(".main-nav");
    var menuButton = document.querySelector(".main-nav__toggle");
    var menuCatalog = document.querySelector(".main-list__item--catalog");
    var menuOrder = document.querySelector(".main-list__item--order");
    var menuSearch = document.querySelector(".main-list__item--search");
    var menuBasket = document.querySelector(".main-list__item--basket");
    var pageHeader = document.querySelector(".page-header");

    menuCatalog.style.display = "none";
    menuOrder.style.display = "none";
    menuSearch.style.display = "none";
    menuBasket.style.display = "none";
    menu.classList.remove("main-nav--opened");
    menu.classList.add("main-nav--closed");

    var closed = true;
    menuButton.addEventListener("click", function(evt) {
      closed = !closed;
      if (!closed) {
        menuCatalog.style.display = "block";
        menuOrder.style.display = "block";
        menuSearch.style.display = "block";
        menuBasket.style.display = "block";
        pageHeader.style.height = "80px";
        menu.classList.remove("main-nav--closed");
        menu.classList.add("main-nav--opened");
      } else {
        menuCatalog.style.display = "none";
        menuOrder.style.display = "none";
        menuSearch.style.display = "none";
        menuBasket.style.display = "none";
        pageHeader.style.height = "auto";
        menu.classList.remove("main-nav--opened");
        menu.classList.add("main-nav--closed");
      }
    });

  }
};

var initPopup = function() {
  var modalWrapper = document.querySelector(".color-wrapper--modal");
  var modal = document.querySelector(".modal");
  var orderButton = document.querySelector(".popular__order");
  var buttonBunny = document.querySelector(".product-card__basket--bunny");
  var buttonSmallBasket = document.querySelector(".product-card__basket--small-basket");
  var buttonBigBasket = document.querySelector(".product-card__basket--big-basket");


  var triggerModal = function(evt) {
    evt.preventDefault();
    modalWrapper.style.display = "block";
    modal.style.display = "block";
    return false;
  };
  if (orderButton) {
    orderButton.addEventListener("click", triggerModal);
  }
  if (buttonBunny) {
    buttonBunny.addEventListener("click", triggerModal);
  }
  if (buttonSmallBasket) {
    buttonSmallBasket.addEventListener("click", triggerModal);
  }
  if (buttonBigBasket) {
      buttonBigBasket.addEventListener("click", triggerModal);
  }

  modalWrapper.addEventListener("click", function() {
    modalWrapper.style.display = "none";
    modal.style.display = "none";
    evt.preventDefault();
    return false;
  });


};



initMenu();
initPopup();
