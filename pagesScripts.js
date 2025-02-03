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

// if (window.innerWidth <= 450) {
//   const helloTxtTop = document.querySelector(".txtNImgTop");
//   helloTxtTop.innerHTML = "";

// }
