const goToPages = document.querySelectorAll(".header div:nth-child(2) h3");
goToPages.forEach((element) => {
  element.addEventListener("click", function () {
    window.location.href = element.dataset.url;
  });
});

try {
  const continueShoppigBtn = document.querySelector(".emptyCart div");
  continueShoppigBtn.addEventListener("click", () => {
    window.location.href = continueShoppigBtn.dataset.url;
  });
} catch (error) {
  console.log(error);
}

const goToCoversPages = document.querySelectorAll(".products div");
goToCoversPages.forEach((element) =>
  element.addEventListener(
    "click",
    () => (window.location.href = element.dataset.url)
  )
);

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => (window.location.href = logo.dataset.url));

/*Display menu in mobile */
const menuContainer = document.querySelector(".menuContainer");
if (window.innerWidth <= 450) {
  const html2 = `
  <div class="menu">
       <div data-url="bodyCoverings.html"><h1>BODY COVERS</h1></div>
       <div data-url="ourHistory.html"><h1>OUR HISTORY</h1></div>
       <div data-url="cart.html"><h1>CART</h1></div>
  </div>`;
  menuContainer.insertAdjacentHTML("afterbegin", html2);
}

/*display the menu */
const menuBtn = document.querySelector(
  ".header div:nth-child(2) img:nth-child(2)"
);
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active"); // Toggle 'active' class
});

/*go to the respective page when one of .menu divs is clicked */
const menuDivs = document.querySelectorAll(".menu div");
menuDivs.forEach((div) => {
  div.addEventListener("click", () => {
    window.location.href = div.dataset.url;
  });
});
