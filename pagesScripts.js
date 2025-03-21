if(window.innerWidth > 450){
  const goToPages = document.querySelectorAll(".header div:nth-child(2) h3");
  goToPages.forEach((element) => {
  element.addEventListener("click", function () {
    window.location.href = element.dataset.url;
  });
});
}

//Clicking "continue shopping" button will take to body covers page
try {
  const continueShoppigBtn = document.querySelector(".emptyCart div");
  continueShoppigBtn.addEventListener("click", () => {
    window.location.href = continueShoppigBtn.dataset.url;
  });
} catch (error) {
  console.log(error);
}

//Go to respective product page like, thick cover, light cover, etc
const goToCoversPages = document.querySelectorAll(".products div");
goToCoversPages.forEach((element) =>
  element.addEventListener(
    "click",
    () => (window.location.href = element.dataset.url)
  )
);

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => (window.location.href = logo.dataset.url));

/*display the menu on mobile*/
if(window.innerWidth < 450){
  const menuBtn = document.querySelector(
    ".headerMobile div:nth-child(2) .menuBtn"
  );

  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle 'active' class
  });
}

/*go to the respective page when one of .menu divs is clicked */
if(window.innerWidth < 450){
  const menuDivs = document.querySelectorAll(".menu div");
  menuDivs.forEach((div) => {
  div.addEventListener("click", () => {
    window.location.href = div.dataset.url;
  });
});
}

//go to home page by cliking the logo on mobile
const logoMobile = document.querySelector('.headerMobile .logo');
logoMobile.addEventListener('click',()=>{
  window.location.href = 'index.html'
})
