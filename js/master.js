// start settings box
let settingsBox = document.querySelector(".settings-box");
let settingIcon = document.querySelector(".setting-icon");

settingIcon.addEventListener("click", () => {
  settingsBox.classList.toggle("open-setting");
  settingIcon.classList.toggle("fa-spin");
});

// start option colors box
let liColors = document.querySelectorAll(".colors-option li");

// check if there are is colors in the local Storage
let color = localStorage.getItem("color");

if (color !== null) {
  // change the color of website
  document.documentElement.style.setProperty("--main-color", color);
  // remove class active fro all li
  liColors.forEach((li) => {
    li.classList.remove("active");
    // add class active on element that take same color in local Storage
    if (li.dataset.color === color) {
      li.classList.add("active");
    }
  });
}

liColors.forEach((li) => {
  li.addEventListener("click", (e) => {
    handlerActive(liColors, e);

    // change the color of website
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    // add the colors to the local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
  });
});
// end option colors box

// start random background image
let allButtons = document.querySelectorAll(".buttons-container button");

// random background option
let backgroundOption = true;

// variable to clear Interval
let handlerInterval;

// check if there's random background image in local storage
let randomBackground = localStorage.getItem("background-option");

if (randomBackground !== null) {
  // remove all active class
  allButtons.forEach((lbt) => {
    lbt.classList.remove("active");
  });
  if (randomBackground === "true") {
    backgroundOption = true;
    // add class active
    document.querySelector(".yas").classList.add("active");
  } else {
    backgroundOption = false;
    // add class active
    document.querySelector(".no").classList.add("active");
  }
}

allButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handlerActive(allButtons, e);
    // stop random backgroundImage
    if (e.target.dataset.background === "yas") {
      backgroundOption = true;
      randomizeImage();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(handlerInterval);
      landingPage.style.backgroundImage = "url(images/landing-1.jpg)";
      localStorage.setItem("background-option", false);
    }
  });
});
// end random background image
// start show bullets
let allBtnBullet = document.querySelectorAll(".bullets-container button");
let navBullets = document.querySelector(".navigation-bullets");
let bulletsOption = localStorage.getItem("bullets-option");

if (bulletsOption !== null) {
  allBtnBullet.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (bulletsOption === "display") {
    navBullets.style.opacity = 1;
    document.querySelector(".show").classList.add("active");
  } else {
    navBullets.style.opacity = 0;
    document.querySelector(".hidden").classList.add("active");
  }
}

allBtnBullet.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handlerActive(allBtnBullet, e);
    e.target.classList.add("active");
    navBullets.style.opacity = 1;
    if (e.target.dataset.bullets === "display") {
      localStorage.setItem("bullets-option", "display");
    } else {
      navBullets.style.opacity = 0;
      localStorage.setItem("bullets-option", "hidden");
    }
  });
});
// end show bullets

// start settings box sticky header Option
let allHeaderBtn = document.querySelectorAll(".nav-buttons-container button");
let positionOfHeader = localStorage.getItem("sticky-nav");

if (positionOfHeader !== null) {
  allHeaderBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (positionOfHeader === "fixed") {
    header.classList.add("sticky");
    header.style.position = "fixed";
    allHeaderBtn[0].classList.add("active");
  } else {
    header.style.position = "absolute";
    localStorage.setItem("sticky-nav", "static");
    allHeaderBtn[1].classList.add("active");
  }
}

allHeaderBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    allHeaderBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.nav === "fixed") {
      header.classList.add("sticky");
      header.style.position = "fixed";
      localStorage.setItem("sticky-nav", "fixed");
    } else {
      header.classList.remove("sticky");
      header.style.position = "absolute";
      localStorage.setItem("sticky-nav", "static");
    }
  });
});
// end settings box sticky header Option

// start reset
document.querySelector(".reset-option").addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
// end reset
// end settings box

// start scroll to top button
let topButton = document.querySelector(".up");

this.addEventListener("scroll", () => {
  this.scrollY >= 700
    ? (topButton.style.opacity = 1)
    : (topButton.style.opacity = 0);
});

topButton.addEventListener("click", () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// end scroll to top button

// start sticky header
window.addEventListener("scroll", () => {
  let header = document.querySelector("#header");

  if (window.scrollY > header.offsetHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// end sticky header

// function transform between the sections
function MoveToSections(allLI) {
  allLI.forEach((li) => {
    li.addEventListener("click", function (ele) {
      let targetSection = document.getElementById(ele.target.dataset.link);
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      menuLinks.classList.toggle("open");
      burgerIcon.classList.toggle("open");
    });
  });
}

// start transform between the sections
let allLinks = document.querySelectorAll(".main-links a");
MoveToSections(allLinks);
// end transform between the sections

// start navigation bullets
let allBullets = document.querySelectorAll(".bullets li");
allBullets.forEach((bul) => {
  bul.addEventListener("click", (ele) => {
    let sectionMove = document.getElementById(ele.target.dataset.link);
    sectionMove.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
// end navigation bullets

// start burger menu
let burgerIcon = document.querySelector(".burger-menu");
let menuLinks = document.querySelector(".main-links");

burgerIcon.addEventListener("click", () => {
  menuLinks.classList.toggle("open");
  burgerIcon.classList.toggle("open");
});
// end burger menu

// start search filed
let contOfSearch = document.querySelector(".cont");
let searchIcon = document.querySelector(".search");
let closeSearch = document.querySelector(".close");
let inputSearch = document.querySelector(".inp-search");

searchIcon.addEventListener("click", () => {
  contOfSearch.classList.add("open-sear");
  searchIcon.classList.add("open-sear");
  inputSearch.focus();
});

closeSearch.addEventListener("click", () => {
  contOfSearch.classList.remove("open-sear");
  searchIcon.classList.remove("open-sear");
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cont")) {
    contOfSearch.classList.remove("open-sear");
    searchIcon.classList.remove("open-sear");
  }
});
// end search filed

// start change random background images
let landingPage = document.querySelector("#home");

// array of images
let imagesArray = [
  "landing-1.jpg",
  "landing-2.jpg",
  "landing-3.jpg",
  "landing-4.jpg",
  "landing-5.jpg",
];

// function to randomize images
function randomizeImage() {
  if (backgroundOption === true) {
    handlerInterval = setInterval(() => {
      // get random number
      let randomNumber = Math.floor(Math.random() * imagesArray.length);
      // change images url
      landingPage.style.backgroundImage =
        'url("images/' + imagesArray[randomNumber] + '")';
    }, 10000);
  }
}

randomizeImage();
// end change random background images

// start reveal on scroll
// landing page section revel action
window.addEventListener("scroll", () => {
  let revTextContent = document.querySelector(".text-content");

  if (window.scrollY >= 5) {
    revTextContent.classList.add("active");
  } else {
    revTextContent.classList.remove("active");
  }
});

// services section revel action
window.addEventListener("scroll", () => {
  let servicesSection = document.querySelector("#services");

  if (window.scrollY >= servicesSection.offsetTop - 150) {
    servicesSection.classList.add("animation");
  } else {
    servicesSection.classList.remove("animation");
  }
});

// skills section revel action
window.addEventListener("scroll", () => {
  let skillsSection = document.querySelector("#skills");
  let progressSpan = document.querySelectorAll(".skill-progress span");

  if (window.scrollY >= skillsSection.offsetTop - 150) {
    skillsSection.classList.add("revel");

    // progress skills
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    skillsSection.classList.remove("revel");

    // progress skills
    progressSpan.forEach((span) => {
      span.style.width = 0;
    });
  }
});

// skills section revel action
let gallerySection = document.querySelector("#gallery");
window.addEventListener("scroll", () => {
  if (this.scrollY >= gallerySection.offsetTop - 140) {
    gallerySection.classList.add("gallery-revel");
  } else {
    gallerySection.classList.remove("gallery-revel");
  }
});

// timeline section revel action
let timelineSection = document.querySelector("#timeline");
window.addEventListener("scroll", () => {
  if (this.scrollY >= timelineSection.offsetTop - 200) {
    document.querySelector(".first-yer").classList.add("viwe");
  } else {
    document.querySelector(".first-yer").classList.remove("viwe");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= timelineSection.offsetTop - 100) {
    document.querySelector(".first-left").classList.add("trn");
    document.querySelector(".first-right").classList.add("trn");
  } else {
    document.querySelector(".first-left").classList.remove("trn");
    document.querySelector(".first-right").classList.remove("trn");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= timelineSection.offsetTop + 280) {
    document.querySelector(".second-yer").classList.add("viwe");
  } else {
    document.querySelector(".second-yer").classList.remove("viwe");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= timelineSection.offsetTop + 310) {
    document.querySelectorAll(".left-side").forEach((ele) => {
      ele.classList.add("trn-side");
    });
  } else {
    document.querySelectorAll(".left-side").forEach((ele) => {
      ele.classList.remove("trn-side");
    });
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= timelineSection.offsetTop + 600) {
    document.querySelector(".right-side").classList.add("trn-right");
  } else {
    document.querySelector(".right-side").classList.remove("trn-right");
  }
});

// reviews section revel action
let reviewsSection = document.querySelector("#reviews");
window.addEventListener("scroll", () => {
  if (this.scrollY >= reviewsSection.offsetTop - 10) {
    document.querySelector(".reviews-ground").classList.add("show");
  } else {
    document.querySelector(".reviews-ground").classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= reviewsSection.offsetTop - 10) {
    document.querySelector(".rev-number").classList.add("show");
  } else {
    document.querySelector(".rev-number").classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= reviewsSection.offsetTop - 10) {
    document.querySelector(".cus-reviews").classList.add("show-rev");
  } else {
    document.querySelector(".cus-reviews").classList.remove("show-rev");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= reviewsSection.offsetTop - 10) {
    document.querySelector(".controals").classList.add("show-cont");
  } else {
    document.querySelector(".controals").classList.remove("show-cont");
  }
});

// contact section revel action
let contactSection = document.querySelector("#contact");
window.addEventListener("scroll", () => {
  if (this.scrollY >= contactSection.offsetTop - 10) {
    document.querySelector(".contact-content").classList.add("normal");
  } else {
    document.querySelector(".contact-content").classList.remove("normal");
  }
});

window.addEventListener("scroll", () => {
  if (this.scrollY >= contactSection.offsetTop - 10) {
    document.querySelector("form .left").classList.add("show");
    document.querySelector("form .right").classList.add("show");
  } else {
    document.querySelector("form .left").classList.remove("show");
    document.querySelector("form .right").classList.remove("show");
  }
});
// end reveal on scroll

// popup box images at gallery section
let allImages = document.querySelectorAll("img");
allImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    let popupImg = document.createElement("div");
    popupImg.classList.add("popup-overlay");

    let containerImages = document.createElement("div");
    containerImages.classList.toggle("container");

    let viweImages = document.createElement("div");
    viweImages.classList.toggle("viwe-img");

    let theImage = document.createElement("img");
    theImage.className = "img-popup";
    theImage.src = img.src;

    document.body.prepend(popupImg);
    popupImg.prepend(containerImages);
    containerImages.prepend(viweImages);
    viweImages.appendChild(theImage);

    if (theImage.alt !== null) {
      let titleOfImage = document.createElement("h3");
      titleOfImage.classList.add("image-title");
      let textTitle = document.createTextNode(img.alt);

      theImage.before(titleOfImage);
      titleOfImage.prepend(textTitle);
    }

    // close button
    let closeButton = document.createElement("button");
    closeButton.className = "close-image";

    popupImg.prepend(closeButton);

    closeButton.addEventListener("click", () => {
      closeButton.parentElement.remove();
    });

    popupImg.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup-overlay") ||
        e.target.classList.contains("container") ||
        e.target.classList.contains("viwe-img")
      ) {
        popupImg.remove();
      }
    });
  });
});

// start slider reviews
let allReviews = document.querySelectorAll(".cus-reviews div");

// count of Element
let number0fReviews = allReviews.length;

// set current slid
let currentSlid = 1;

// number 0f Reviews Element
let slidNumberElement = document.querySelector(".rev-number");

// next button
let nextButton = document.querySelector(".next");

// on click next Button make a function
nextButton.addEventListener("click", () => {
  if (nextButton.classList.contains("disabled")) {
  } else {
    currentSlid++;
    checker();
  }
});

// the ul
let indicatorsUl = document.querySelector(".indicators");

// the slider li option from ul
let indicatorsLi = document.querySelectorAll(".indicators li");

indicatorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    currentSlid = parseInt(e.target.dataset.index);
    checker();
  });
});

// Previous button
let previousButton = document.querySelector(".prev");

// on click previous Button make a function
previousButton.addEventListener("click", () => {
  if (previousButton.classList.contains("disabled")) {
  } else {
    currentSlid--;
    checker();
  }
});

// trigger the checker function
checker();

// create checker function
function checker() {
  // set number of image slider
  slidNumberElement.textContent =
    `Slid : ` + currentSlid + ` of ` + number0fReviews;

  // remove active class from all reviews
  allReviews.forEach((ele) => {
    ele.classList.remove("active");
  });

  // remove active class from all bolit
  indicatorsLi.forEach((ele) => {
    ele.classList.remove("active");
  });

  // set active class on current slid
  allReviews[currentSlid - 1].classList.add("active");

  // set active class on current
  indicatorsUl.children[currentSlid - 1].classList.add("active");

  // check if current slid is the first
  if (currentSlid === 1) {
    previousButton.classList.add("disabled");
  } else {
    previousButton.classList.remove("disabled");
  }

  // check if current slid is the last
  if (currentSlid === number0fReviews) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
// end slider reviews

function handlerActive(event, addActive) {
  event.forEach((li) => {
    li.classList.remove("active");
  });
  addActive.target.classList.add("active");
}

// start validation form
let form = document.querySelector("form");
// all input filed
const username = document.querySelector("#name-inp");
const phoneNumber = document.querySelector("#phone-inp");
const email = document.querySelector("#email-inp");
const subject = document.querySelector("#subject-inp");
const textArea = document.querySelector("#text-massage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const phoneNumberValue = phoneNumber.value;
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const textAreaValue = textArea.value.trim();

  // username validation
  if (
    usernameValue === " " ||
    usernameValue.length < 3 ||
    usernameValue.length > 25
  ) {
    setError(username, "Username Must Between 3 And 25 Characters.");
  } else {
    setSuccess(username);
  }
  // phone number validation
  if (phoneNumberValue === " ") {
    setError(phoneNumber, "phone number cannot be blank");
  } else if (!rgPatterPhone(phoneNumberValue)) {
    setError(phoneNumber, "phone number must be like  0132 111 3945");
  } else {
    setSuccess(phoneNumber);
  }
  // email validation
  if (emailValue === " ") {
    setError(email, "email cannot blank");
  } else if (!rgxPatterEmail(emailValue)) {
    setError(
      email,
      "email must be like hello@example.com also can contain any of (., -, _) or number"
    );
  } else {
    setSuccess(email);
  }

  // subject validation
  if (subjectValue === "") {
    setError(subject, "subject cannot blank");
  } else if (subjectValue.length < 90) {
    setError(subject, "subject must be less than 90 character");
  } else {
    setSuccess(subject);
  }

  // issue validation
  if (textAreaValue === "") {
    setError(textArea, "issue cannot blank");
  } else {
    setSuccess(textArea);
  }
}

function setError(target, massage) {
  let inputControl = target.parentElement;
  let small = inputControl.querySelector("small");

  // add the error massage
  small.textContent = massage;

  // add error class to inputControl
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
}

function setSuccess(target) {
  let inputControl = target.parentElement;

  // add success class to inputControl
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}

// phone pattern rg
function rgPatterPhone(phoneValue) {
  return /\d{4}\s\d{3}\s\d{4}/.test(phoneValue);
}
// email pattern rg
function rgxPatterEmail(emailValue) {
  return /\w+(.|-|_|\d+)?(\w+)?@\w+.\w+/gi.test(emailValue);
}

// end validation form
