const Body = document.querySelector(".Body");


// Create Main Frames & Subframes

const items = ["Home", "Training", "Dashboard", "Email", "Favourites", "Settings"];


items.forEach(item => {

    Body.innerHTML += `

     <div class="frame N">

      <div class="content">

       <div class="slide">
        <h1>${item}</h1>
       </div>

      </div>

     </div>

  `;

});


const Frames = document.querySelectorAll(".frame.N");

Frames[0].classList.add("active");


const SideNavbar = document.querySelector(".side-navbar");


// Create Items


items.forEach((item,index) => {

  SideNavbar.querySelector(".item-list").innerHTML += `

    <li class="item">

     <img class="square" src="Icons/Square.svg">

     <img class="icon" src="Icons/Icon${index + 1}.svg">

     <span class="Text">${item}</span>

   </li>

  `;

});


const Items = document.querySelectorAll(".item");

Items[0].classList.add("active");


const Ham = document.querySelector(".Ham");
const Cross = document.querySelector(".Cross");
const AccountSettings = document.querySelector(".account-settings");


// Create Fields of Account Settings

const fields = [

 {title: "First Name", class: "first-name", type: "text"},
 {title: "Last Name", class: "last-name", type: "text"},
 {title: "Email", class: "email", type: "email"},
 {title: "Phone Number", class: "phone", type: "tel"},
 {title: "Country", class: "country", type: "text"},
 {title: "City", class: "city", type: "text"}

];

const Sections = document.querySelectorAll(".account-settings .fields section");

fields.forEach((field, index) => {

    Sections[index].innerHTML += `

        <span>${field.title}</span>

        <input class="input ${field.class}" type="${field.type}">

    `;

});


const BackAS = document.querySelector(".account-settings .back");
const Settings = document.querySelector(".account");

const BackS = document.querySelector(".Search .back");
const Search = document.querySelector(".Search");
const search = document.querySelector(".side-navbar .search");

const Save = document.querySelector(".account-settings .save");
const CamerInput = document.querySelector("#CamerInput");


//Check if the user uses touchscreen or not

function Resize() {

if ("ontouchstart" in document.documentElement){
  
  Body.classList.replace("mouse","touch");

}else{
  
  Body.classList.replace("touch","mouse");

}

}

Resize();

window.addEventListener("resize", Resize);


//Click on Items
Items.forEach((Item,index) => {

 Item.querySelector(".icon").addEventListener("click",() => {

  Items.forEach(Item => {
  Item.classList.remove("active");});

  Frames.forEach(Frame => {
  Frame.classList.remove("active");});

  Frames[index].classList.add("active");

  Item.classList.add("active");

  setTimeout(() => {deactivate();},400);

 });

});


// Open Account Settings
Settings.addEventListener("click",() => {

setTimeout(() => {

  AccountSettings.classList.add("active");

},400);

setTimeout(() => {Frames.forEach(Frame => {Frame.style.overflowY="hidden";});},800);

});

BackAS.addEventListener("click",() => {

profileEditImg.src = originalImg;
firstInput.value = originalFirst;
lastInput.value = originalLast;
emailInput.value = originalEmail;
phoneInput.value = originalPhone;
countryInput.value = originalCountry;
cityInput.value = originalCity;

AccountSettings.classList.remove("active");
Frames.forEach(Frame => {Frame.style.overflowY="auto";});

setTimeout(() => {AccountSettings.scrollTop = 0;},400);
 
});

Sections.forEach(Section => {

Section.querySelector("input").addEventListener("focus",() => {
Section.querySelector("span").classList.add("active");
});

Section.querySelector("input").addEventListener("blur",() => {
Section.querySelector("span").classList.remove("active");
});

});


// Open Search Field
search.addEventListener("click",() => {

 Search.classList.add("active");

 setTimeout(() => {Frames.forEach(Frame => {Frame.style.overflowY="hidden";});},800);

});


BackS.addEventListener("click",() => {

Search .classList.remove("active");
Frames.forEach(Frame => {Frame.style.overflowY="auto";});
 
});


// Edit Account Details 
let originalImg = document.querySelector(".account-settings img").src;
let originalFirst = "Amanda";
let originalLast = "Steve";
let originalEmail = "amandasteve@gmail.com";
let originalPhone = "+1 225 537 4055";
let originalCountry = "Canada";
let originalCity = "Toronto";

document.querySelector(".account img").src = originalImg;


// Set inputs with current values
const profileEditImg = document.querySelector(".account-settings img");
const firstInput = document.querySelector(".account-settings .first-name");
const lastInput = document.querySelector(".account-settings .last-name");
const emailInput = document.querySelector(".account-settings .email");
const phoneInput = document.querySelector(".account-settings .phone");
const countryInput = document.querySelector(".account-settings .country");
const cityInput = document.querySelector(".account-settings .city");

profileEditImg.src = originalImg;
firstInput.value = originalFirst;
lastInput.value = originalLast;
emailInput.value = originalEmail;
phoneInput.value = originalPhone;
countryInput.value = originalCountry;
cityInput.value = originalCity;

// Check for changes
function checkForChanges() {
  
  const imgChanged = profileEditImg.src !== originalImg;
  const firstChanged = firstInput.value !== originalFirst;
  const lastChanged = lastInput.value !== originalLast;
  const emailChanged = emailInput.value !== originalEmail;
  const phoneChanged = phoneInput.value !== originalPhone;
  const countryChanged = countryInput.value !== originalCountry;
  const cityChanged = cityInput.value !== originalCity;
  
  const allFieldsFilled =
    firstInput.value.trim() !== "" &&
    lastInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    phoneInput.value.trim() !== "" &&
    countryInput.value.trim() !== "" &&
    cityInput.value.trim() !== "";

  if (allFieldsFilled && (imgChanged || firstChanged || lastChanged || emailChanged || phoneChanged || countryChanged || cityChanged)) {
    Save.classList.add("active");
  } else {
    Save.classList.remove("active");
  }
}

// Listen to input changes
firstInput.addEventListener("input", checkForChanges);
lastInput.addEventListener("input", checkForChanges);
emailInput.addEventListener("input", checkForChanges);
phoneInput.addEventListener("input", checkForChanges);
countryInput.addEventListener("input", checkForChanges);
cityInput.addEventListener("input", checkForChanges);
profileEditImg.addEventListener("load", checkForChanges); // triggers when image changes

// Handle camera upload
document.querySelector(".account-settings .camera").addEventListener("click", () => {
  CameraInput.value = "";
  CameraInput.click();
});

CameraInput.addEventListener("change", () => {
  const file = CameraInput.files[0];
  if (file) {
    const currentCamera = URL.createObjectURL(file);
    profileEditImg.src = currentCamera; // triggers 'load' → checkForChanges()
  }
});

// Handle Save
Save.addEventListener("click", () => {

  // Apply updates
  document.querySelector(".account img").src = profileEditImg.src;
  
  // Reset originals
  originalImg = profileEditImg.src;
  originalFirst = firstInput.value;
  originalFirst = lastInput.value;
  originalEmail = emailInput.value;
  originalPhone = phoneInput.value;
  originalCountry = countryInput.value;
  originalCity = cityInput.value;

setTimeout(() => {

 Save.classList.remove("active");
 AccountSettings.classList.remove("active");
 setTimeout(() => {AccountSettings.scrollTop = 0;},400);
 Frames.forEach(Frame => {Frame.style.overflowY="auto";});

},500);

});
