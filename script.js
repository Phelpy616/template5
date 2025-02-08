/*Show dropdowm to select size */
const select = document.querySelector(".select");
const dropdown = document.querySelector(".main div:nth-child(2) .dropdown");
try {
  select.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
} catch (error) {
  console.log(error);
}

/*Go to the respective page of the product */
const goToRespectivePage = document.querySelectorAll(
  ".main div:nth-child(2) .womenClothigPage"
);
goToRespectivePage.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "womenClothing1.html";
  });
});

/*Display and hide the cart when width is greater than 450px*/
const cartBtn = document.querySelector(".header div:nth-child(1) p:last-child");
const cart = document.querySelector(".cart");
const cartCloseBtn = document.querySelector(".cart .closeBtn");
const overlay = document.querySelector(".cart div:nth-child(1)");
try {
  cartBtn.addEventListener("click", () => {
    cart.classList.toggle("active");
  });
  cartCloseBtn.addEventListener("click", () => {
    cart.classList.remove("active");
  });
  overlay.addEventListener("click", () => {
    cart.classList.remove("active");
  });
} catch (error) {
  console.log(error);
}

/*Display and hide cart for mobile */
if (window.innerWidth <= 450) {
  const cartBtn2 = document.querySelector(".header2 p");
  try {
    cartBtn2.addEventListener("click", () => {
      cart.classList.toggle("active");
    });
    cartCloseBtn.addEventListener("click", () => {
      cart.classList.remove("active");
    });
    overlay.addEventListener("click", () => {
      cart.classList.remove("active");
    });
  } catch (error) {
    console.log(error);
  }
}

/*Go to women,men and accessories page,
when clicking the respective name in the header */
const gotToWomen = document.querySelector(".goToWomen");
const gotToMen = document.querySelector(".goToMen");
const gotToAccessories = document.querySelector(".goToAccessories");
try {
  gotToWomen.addEventListener("click", () => {
    window.location.href = "women.html";
  });

  gotToMen.addEventListener("click", () => {
    window.location.href = "men.html";
  });

  gotToAccessories.addEventListener("click", () => {
    window.location.href = "accessories.html";
  });
} catch (error) {
  console.log(error);
}

/*Go to home when clicking the logo in the header */
const goToHomeElements = document.querySelectorAll(".goToHome");

goToHomeElements.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

/*Go to respective page when one of the browse by is clicked,
like; All products, women, men and accessories */
const goToallProductsPage = document.querySelector(".allProductsPage");
const goToWomenPage = document.querySelector(".womenPage");
const goToMenPage = document.querySelector(".menPage");
const goToAccessoriesPage = document.querySelector(".accessoriesPage");
try {
  goToallProductsPage.addEventListener("click", () => {
    window.location.href = "allProducts.html";
  });

  goToWomenPage.addEventListener("click", () => {
    window.location.href = "women.html";
  });

  goToMenPage.addEventListener("click", () => {
    window.location.href = "men.html";
  });

  goToAccessoriesPage.addEventListener("click", () => {
    window.location.href = "accessories.html";
  });
} catch (error) {
  console.log(error);
}

/*Clickin the "shop now" button in home will take to all products page*/
const shopNowBtn1 = document.querySelector(".shopNowBtn1");
const shopNowBtn2 = document.querySelector(".shopNowBtn2");
try {
  shopNowBtn1.addEventListener("click", () => {
    window.location.href = "allProducts.html";
  });
  shopNowBtn2.addEventListener("click", () => {
    window.location.href = "allProducts.html";
  });
} catch (error) {
  console.log(error);
}

/*Go to cart page when "view cart" button is clicked */
const viewCart = document.querySelector(".viewCart");
try {
  viewCart.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
} catch (error) {
  console.log(error);
}

/*go to respective page when "Shop by category" men,
women or accessories is clicked*/
const shopBy = document.querySelectorAll(".shopBy");
shopBy.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  });
});

/*Display menu if window.innerWidth is equal or less tham 450px*/
if (window.innerWidth <= 450) {
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menuBtn");
  const menuCloseBtn = document.querySelector(".menuCloseBtn");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  menuCloseBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

/*Go to women, men, accessories when one of in the .menu is clicked */
const menuRespectivePages = document.querySelectorAll(".menu p");
console.log(menuRespectivePages);

menuRespectivePages.forEach((element) =>
  element.addEventListener("click", () => {
    window.location.href = element.dataset.url;
  })
);
