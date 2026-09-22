const ItemContainer = document.querySelector(".item-container");
const ItemList = document.querySelector(".item-list");

const Details = document.querySelector(".details");
const details = document.querySelectorAll(".details-list");


const SectionContainer = document.querySelector(".section-container");
const SectionList = document.querySelector(".section-list");
const Slides = document.querySelectorAll(".slide");


// Create Side Navbar sections

const sections = [

  {icon1: "Icons/dashboard1.svg", icon2: "Icons/dashboard2.svg", title: "Dashboard"},
  {icon1: "Icons/notifications1.svg", icon2: "Icons/notifications2.svg", title: "Notifications"},
  {icon1: "Icons/updates1.svg", icon2: "Icons/updates2.svg", title: "Updates"},
  {icon1: "Icons/settings1.svg", icon2: "Icons/settings2.svg", title: "Settings"},
  {icon1: "Icons/support1.svg", icon2: "Icons/support2.svg", title: "Support"},
  {icon1: "Icons/account1.svg", icon2: "Icons/account2.svg", title: "Account"}

];

sections.forEach(section => {

    SectionList.innerHTML += `

     <li class="Section">

      <img class="icon1" src="${section.icon1}">
      <img class="icon2" src="${section.icon2}">

      <span>${section.title}</span>

    </li>

    `;

});

const Sections = document.querySelectorAll(".Section");


// Create Items

const items = [

  {room: "Living Room", img: "Media/livingroom.jpg", temperature: "22°c", device: "Smart TV", state: "Off"},
  {room: "Bedroom", img: "Media/bedroom.jpg", temperature: "20°c", device: "Air conditioner", state: "On"},
  {room: "Kids Room", img: "Media/kids-room.jpg", temperature: "25°c", device: "Lights", state: "On"},
  {room: "Desk Room", img: "Media/desk-room.jpg", temperature: "22°c", device: "Lights", state: "Off"},
  {room: "Kitchen", img: "Media/kitchen.jpg", temperature: "26°c", device: "Microwave", state: "On"},
  {room: "Bathroom", img: "Media/bathroom.jpg", temperature: "25°c", device: "Water Heater", state: "Off"}

];


items.forEach(item => {

    ItemList.innerHTML += `

   <li class="item">

    <div class="content">

     <img src="${item.img}">
     <span class="room">${item.room}</span>

     <div class="Info">

      <section>
       <span>Temperature</span>
       <span>${item.temperature}</span>
      </section>

      <section>
       <span>${item.device}</span>
       <span>${item.state}</span>
      </section>

     </div>

     <svg width="133%" height="133%" viewBox="0 0 100 100">
      <rect x="12.5" y="12.5" width="75" height="75" fill="none" stroke="url(#grad-stroke)" stroke-width="1" rx="10" ry="10" filter="url(#stroke-shadow)"/>
     </svg>

     </li>

    `;

});


const Items = document.querySelectorAll(".item");
const Rects = document.querySelectorAll("svg rect");


const rooms = [

  ["lighting", "air-conditioner", "air-conditioner", "tv"],
  ["lighting", "air-conditioner", "tv"],
  ["lighting", "air-conditioner"],
  ["lighting", "air-conditioner"],
  ["lighting", "microwave", "kettle", "fan"],
  ["lighting", "heater"]

];

details.forEach((detail, i) => {

    rooms[i].forEach(item => {

        const li = document.createElement("li");

        li.className = `section ${item}`;

        detail.appendChild(li);

    });

});


const Lightings = document.querySelectorAll(".lighting");
const AirConditioners = document.querySelectorAll(".air-conditioner");
const TVs = document.querySelectorAll(".tv");
const Microwave = document.querySelector(".microwave");
const Kettle = document.querySelector(".kettle");
const Fan = document.querySelector(".fan");
const Heater = document.querySelector(".heater");


// Create Lighting sections

const numberOfLamps = [6, 4, 4, 2, 4, 2];

Lightings.forEach((Lighting, index) => {

    Lighting.innerHTML += `

        <section class="title">
         <img src="Icons/lamp.svg">
         <span>Lighting</span>
        </section>

        <ul>

            ${Array.from({length: numberOfLamps[index]}, (_, i) => `
                  <li class="lamp">
                    <section class="stroke">
                      <div class="circle"></div>
                    </section>
                    <span>Lamp&nbsp;&nbsp;${i + 1}</span>
                  </li>
            `).join("")}

        </ul>

    `;

});


// Create AirConditioner sections

const numberOfACs = ["1", "2", "", "", ""];

AirConditioners.forEach((AirConditioner,index) => {

    AirConditioner.innerHTML += `

    <section class="title">
     <img src="Icons/air-conditioner.svg">
     <span>Air Conditioner&nbsp;&nbsp;${numberOfACs[index]}</span>
    </section>
    
    <div class="main-container">

     <div class="container">

     <section class="power">
    
      <img class="off" src="Icons/Off.svg">
      <img class="on" src="Icons/On.svg">

      <span>Power</span>

     </section>
    
     <section class="swing">
    
      <div class="toggle">
       <div class="background"></div>
       <div class="thumb"></div>
      </div>
    
      <span>Swing</span>

     </section>
    
     </div>
    
     <section class="temperature">
    
      <div class="screen">
       <span class="digital">22</span>
       <span class="degree">°C</span>
      </div>
    
      <div class="Buttons">
       <button class="minus"><img src="Icons/minus-control.svg"></button>
       <button class="plus"><img src="Icons/plus-control.svg"></button>
      </div>
    
     </section>

    </div>

    `;

});


// Create TV sections

TVs.forEach(TV => {

    TV.innerHTML += `

    <section class="title">

     <img src="Icons/tv.svg">
     <span>Smart TV</span>
    
    </section>

    <div class="main-container">
    
    <section class="power">
    
     <img class="off" src="Icons/Off.svg">
     <img class="on" src="Icons/On.svg">

     <span>Power</span>

    </section>
    
    <section class="controls">
    
     <button class="up"><img src="Icons/up-control.svg"></button>
     <button class="down"><img src="Icons/down-control.svg"></button>
     <button class="right"><img src="Icons/plus-control.svg"></button>
     <button class="left"><img src="Icons/minus-control.svg"></button>
     <button class="OK">OK</button>

    </section>

    </div>

  `;

});


// Create Microwave section

Microwave.innerHTML += `

  <section class="title">
   <img src="Icons/microwave.svg">
   <span>Microwave</span>
  </section>

  <div class="main-container">

  <section class="power">
    
     <img class="off" src="Icons/Off.svg">
     <img class="on" src="Icons/On.svg">

     <span>Power</span>

  </section>
    
  <section class="heat">

   <span>Heating</span>

    <img src="Icons/Control.svg">
    <div class="control"><img class="arrow" src="Icons/arrow-control.svg"></div>
  
  </section>

  </div>

`;



// Create Kettle section

Kettle.innerHTML += `

  <section class="title">
   <img src="Icons/kettle.svg">
   <span>Kettle</span>
  </section>

  <div class="main-container">
    
  <section class="power">
    
   <img class="off" src="Icons/Off.svg">
   <img class="on" src="Icons/On.svg">

   <span>Power</span>

  </section>
    
  <ul class="presets">
    
    <li class="lamp">
     <section class="stroke">
     <div class="circle"></div>
     </section>
     <span>40°C ( Warm Water ) </span>
    </li>
    
    <li class="lamp">
     <section class="stroke">
     <div class="circle"></div>
     </section>
     <span>90°C ( Coffee - Tea )</span>
    </li>
    
    <li class="lamp">
     <section class="stroke">
     <div class="circle"></div>
     </section>
     <span>100°C ( Boiling Water )</span>
    </li>
    
  </ul>

  </div>

`;



// Create Fan section

Fan.innerHTML += `

  <section class="title">
   <img src="Icons/roof-fan.svg">
   <span>Fan</span>
  </section>
    
  <div class="main-container">

   <div class="container">

    <section class="power">
    
     <img class="off" src="Icons/Off.svg">
     <img class="on" src="Icons/On.svg">

     <span>Power</span>

    </section>
    
    <section class="swing">
    
     <div class="toggle">
     <div class="background"></div>
     <div class="thumb"></div>
     </div>
    
     <span>Swing</span>

    </section>
    
   </div>

   <section class="heat">

    <span>Speed</span>

    <img src="Icons/Control.svg">
    <div class="control"><img class="arrow" src="Icons/arrow-control.svg"></div>

   </section>
    
  </div>

`;


// Create Heater section

Heater.innerHTML += `

  <section class="title">
   <img src="Icons/heater.svg">
   <span>Water Heater</span>
  </section>

  <div class="main-container">

  <section class="power">
    
   <img class="off" src="Icons/Off.svg">
   <img class="on" src="Icons/On.svg">

   <span>Power</span>

  </section>
    
  <section class="heat">

    <span>Temperature °C</span>

    <img src="Icons/Control.svg">
    <img src="Icons/degrees.svg">
    <div class="control"><img class="arrow" src="Icons/arrow-control.svg"></div>
  
  </section>

  </div>

`;


const Lamps = document.querySelectorAll(".lighting .lamp");
const Presets = document.querySelectorAll(".presets .lamp");
const Powers = document.querySelectorAll(".power");
const Toggles = document.querySelectorAll(".toggle");
const ControlButtons = document.querySelectorAll(".control");
const Back = document.querySelector(".back");
const BACK = document.querySelector(".Back");
const States = document.querySelectorAll(".item .Info section:last-child span:last-child");


function state() {

if(details[0].querySelector(".tv .power").classList.contains("active")){
States[0].innerHTML="On";}else{States[0].innerHTML="Off";};

if(details[1].querySelector(".air-conditioner .power").classList.contains("active")){
States[1].innerHTML="On";}else{States[1].innerHTML="Off";};

let isAnyLampActive1 = false;
details[2].querySelectorAll(".lighting .lamp").forEach(Lamp => {

if(Lamp.classList.contains("active")) {isAnyLampActive1 = true;}

});

States[2].innerHTML = isAnyLampActive1 ? "On" : "Off";

let isAnyLampActive2 = false;
details[3].querySelectorAll(".lighting .lamp").forEach(Lamp => {

if(Lamp.classList.contains("active")) {isAnyLampActive2 = true;}

});

States[3].innerHTML = isAnyLampActive2 ? "On" : "Off";

if(details[4].querySelector(".microwave .power").classList.contains("active")){
States[4].innerHTML="On";}else{States[4].innerHTML="Off";};

if(details[5].querySelector(".heater .power").classList.contains("active")){
States[5].innerHTML="On";}else{States[5].innerHTML="Off";};

}

state();


setTimeout(() => {SectionList.classList.add("active");},5000);

Sections.forEach((Section,index) => {

Section.style.animation=`Show 0.5s forwards ${index*0.1}s`;

Section.addEventListener("click",() => {

Section.classList.add("active");
setTimeout(() => {SectionContainer.classList.remove("active");},300);

setTimeout(() => {

 ItemContainer.classList.add("active");
 if(index === 0){ItemList.classList.add("active");}else{Slides[index-1].classList.add("active");};
 SectionList.classList.remove("active");

},500);

});

});


let N;


details.forEach(detail => {

 detail.querySelectorAll('.section').forEach((el, i) => {

  el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${i * 0.1}s`;

 });

});


function Resize() {

document.querySelectorAll('.item').forEach((el, index) => {

 if(window.innerWidth <= 700){N=2;}else{N=3;}

 const delay = Math.floor(index / N) * 0.1;

 el.style.animation = `Show 1s cubic-bezier(0.5, 0.5, 0, 1) forwards ${delay}s`;
    
});

}

Resize();

window.addEventListener("resize",Resize);

Items.forEach((Item,index) => {

Item.querySelector(".content").addEventListener("click",() => {

Item.classList.add("active");

Items.forEach(Item => {Item.querySelector(".content").style.pointerEvents="none";});

setTimeout(() => {

 ItemContainer.classList.remove("active");
 Item.classList.remove("active");
 Details.classList.add("active");
 details[index].classList.add("active");
 setTimeout(() => {ItemList.classList.remove("active");Items.forEach(Item => {Item.querySelector(".content").style.pointerEvents="auto";});},300);

},1000);

});

});


BACK.addEventListener("click",() => {

 Slides.forEach(Slide => {Slide.classList.remove("active");});

 ItemContainer.classList.remove("active");

 Sections.forEach(Section => {Section.classList.remove("active");});
 SectionContainer.classList.add("active");
 SectionList.classList.add("active");
  
 setTimeout(() => {ItemList.classList.remove("active");},300);

});


Back.addEventListener("click",() => {

state();

setTimeout(() => {

 ItemContainer.classList.add("active");
 ItemList.classList.add("active");
 Details.classList.remove("active");
 details.forEach(detail => {detail.classList.remove("active");});

},300);

});

Lamps.forEach(Lamp => {
Lamp.querySelector(".stroke").addEventListener("click",() => {

if(Lamp.classList.contains("active")){
Lamp.classList.remove("active");}
else{Lamp.classList.add("active");};

});});


Presets.forEach(Preset => {
Preset.addEventListener("click",() => {

Presets.forEach(Preset => {
Preset.classList.remove("active");});

Preset.classList.add("active");

});});

Powers.forEach(Power => {
Power.addEventListener("click",() => {

if(Power.classList.contains("active")){
Power.classList.remove("active");}
else{Power.classList.add("active");};

});});

Toggles.forEach(Toggle => {
Toggle.addEventListener("click",() => {

if(Toggle.classList.contains("active")){
Toggle.classList.remove("active");}
else{Toggle.classList.add("active");};

});});


// Control Button
ControlButtons.forEach(ControlButton => {

let isDraggingSpeed = false;
let rotation = 0;
let lastAngle = 0;

const minRotation = -50;
const maxRotation = 150;


function getAngle(e, center) {
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - center.x;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - center.y;
  return Math.atan2(y, x) * (180 / Math.PI);
}

function normalizeAngle(angle) {
  // Normalize angle between -180 and 180
  while (angle > 180) angle -= 360;
  while (angle < -180) angle += 360;
  return angle;
}

function onStart(e) {
  const rect = ControlButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  lastAngle = getAngle(e, center);
  isDraggingSpeed = true;
  e.preventDefault();
}

function onMove(e) {
  if (!isDraggingSpeed) return;

  const rect = ControlButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  const currentAngle = getAngle(e, center);
  let delta = normalizeAngle(currentAngle - lastAngle);
  lastAngle = currentAngle;

  rotation += delta;
  rotation = Math.max(minRotation, Math.min(maxRotation, rotation));
  ControlButton.style.transform = `rotate(${rotation}deg)`;
}

function onEnd() {
  isDraggingSpeed = false;
}

// Mouse events
ControlButton.addEventListener("mousedown", onStart);
document.addEventListener("mousemove", onMove);
document.addEventListener("mouseup", onEnd);

// Touch events
ControlButton.addEventListener("touchstart", onStart);
document.addEventListener("touchmove", onMove);
document.addEventListener("touchend", onEnd);


});

// Temperature Control
AirConditioners.forEach(AirConditioner => {

let count = 22;

AirConditioner.querySelector(".plus").addEventListener("click", () => {
  if (count >= 30) return;
  count++;
  AirConditioner.querySelector(".digital").innerHTML = count;
});

AirConditioner.querySelector(".minus").addEventListener("click", () => {
  if (count <= 16) return;
  count--;
  AirConditioner.querySelector(".digital").innerHTML = count;
});

});




