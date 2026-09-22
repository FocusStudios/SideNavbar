const Body = document.querySelector(".Body");
const Power = document.querySelector(".power button");
const ControlPanel = document.querySelector(".control-panel");
const Temp = document.querySelector(".screen .temp");
const Plus = document.querySelector(".plus");
const Minus = document.querySelector(".minus");
const Reset = document.querySelector(".reset");
const Toggle = document.querySelector(".Toggle");
const Modes = document.querySelector(".Modes");
const Beeps = document.querySelectorAll('.beep');
const speedButton = document.querySelector(".speed-button");
const Audio = document.querySelector(".Audio");
const Theme = document.querySelector(".theme");

const modes = [

 {color: "var(--color1)", title: "Eco", svg: "M4.25726 15.7402C3.55187 15.034 2.99915 14.2179 2.59912 13.292C2.19908 12.3661 1.99937 11.4088 2 10.4201C2.00063 9.4314 2.18873 8.4547 2.56432 7.48987C2.9399 6.52504 3.55124 5.61859 4.39834 4.77052C5.33886 3.82893 6.66751 3.11488 8.38428 2.62838C10.101 2.1419 12.3229 1.93789 15.0498 2.01634C15.4573 2.03204 15.8335 2.11835 16.1784 2.27529C16.5233 2.43222 16.8289 2.64408 17.0954 2.91087C17.3619 3.17765 17.5735 3.48776 17.7303 3.84117C17.887 4.19458 17.9732 4.57499 17.9889 4.98239C18.0203 6.26925 17.9851 7.45817 17.8836 8.54917C17.782 9.64014 17.6171 10.6248 17.3889 11.503C17.1606 12.3812 16.8709 13.1621 16.5198 13.8456C16.1687 14.5292 15.7492 15.1137 15.2614 15.599C14.4306 16.4307 13.549 17.039 12.6166 17.4237C11.6843 17.8086 10.7318 18.0006 9.7593 18C8.74042 18 7.74504 17.7998 6.77316 17.3993C5.80129 16.9988 4.96265 16.4457 4.25726 15.7402ZM6.89073 15.3636C7.34531 15.6303 7.81181 15.8227 8.29023 15.9407C8.76864 16.0588 9.2583 16.1174 9.7593 16.1168C10.4804 16.1168 11.1936 15.9718 11.899 15.6817C12.6044 15.3918 13.2785 14.9248 13.9211 14.2806C14.2033 13.9982 14.4895 13.6018 14.7798 13.0915C15.0702 12.5811 15.321 11.9144 15.5323 11.0915C15.7436 10.2686 15.9041 9.27202 16.0138 8.10191C16.1235 6.93181 16.1392 5.53887 16.0608 3.92308C15.2927 3.8917 14.4268 3.88009 13.4631 3.88825C12.4994 3.89641 11.5391 3.9708 10.5823 4.11141C9.6255 4.25202 8.71628 4.47957 7.85476 4.79407C6.99324 5.10856 6.28785 5.54013 5.73858 6.08877C5.03319 6.79497 4.54725 7.49333 4.28077 8.18383C4.01429 8.87433 3.88105 9.54133 3.88105 10.1848C3.88105 11.1106 4.05755 11.923 4.41056 12.6215C4.76357 13.3202 5.07301 13.8105 5.33886 14.0923C5.99723 12.8369 6.86721 11.6323 7.94882 10.4785C9.0304 9.32478 10.2923 8.37937 11.7344 7.64241C10.6058 8.63109 9.6223 9.74937 8.784 10.9973C7.94568 12.2452 7.31459 13.7007 6.89073 15.3636Z"},
 {color: "var(--color2)", title: "Cool", svg: "M9.2381 18.5084V16.1301L7.95923 16.8771L7.33333 16.4894V15.6535L9.2381 14.5337V12.9708L7.71428 13.8899V12.2339L6.19047 13.0192V15.2654L5.56076 15.7267L5.04762 15.31V13.8056L2.92419 14.9763L2 14.6017V13.6533L4.16571 12.4646L2.7619 11.7813V10.9112L3.57066 10.4887L5.55695 11.6391L6.93295 10.8577L6.90171 10.8333L5.50552 10.0371L6.86476 9.20165L5.50209 8.42051L3.51619 9.56502L2.7619 9.20165V8.33651L4.11123 7.59476L2 6.44988V5.50151L2.88419 5.08375L5.04762 6.28263V4.75413L5.61333 4.33151L6.35352 4.774L6.33219 7.06338L7.73143 7.85913L7.744 6.24251L9.2381 7.02963V5.467L7.33333 4.3465V3.51625L7.95923 3.1225L9.2381 3.8695V1.4965L9.9977 1L10.7619 1.4965V3.8695L12.2499 3.10787L13.0476 3.565V4.312L10.7619 5.467V7.02963L12.2857 6.17951V7.87976L13.8095 7.09825V4.65175L14.3638 4.32701L14.9524 4.65138V6.214L17.1779 5.059L18 5.51576V6.40038L15.9067 7.58913L17.2381 8.32189V9.16718L16.5409 9.54068L14.5116 8.35638L13.1101 9.23611L14.4621 10.0717L13.0682 10.8674L14.5051 11.6144L16.5581 10.4947L17.2381 10.9506V11.7569L15.9733 12.4646L18 13.6533V14.587L17.0392 14.9759L14.9524 13.8554V15.3385L14.3733 15.7319L13.8095 15.3385V13.0878L12.2857 12.2579V13.8209L10.7619 12.9704V14.5334L12.6667 15.6531V16.5378L12.0392 16.8768L10.7619 16.1305V18.5088L9.9977 19L9.2381 18.5084ZM8.67962 10.0346L9.3981 11.125H10.7368L11.3512 10.0346L10.7021 8.87501H9.3634L8.67962 10.0346Z"},
 {color: "var(--color3)", title: "Turbo", svg: "M9.9978 8.13676L10.0003 4.74369C11.2816 4.74369 12.2318 5.56914 12.3614 6.91771L11.1367 8.55314C11.3106 8.69901 11.455 8.87673 11.5623 9.0768L14.617 7.31127C15.2601 8.41989 15.0057 9.6533 13.9019 10.4403L11.75 10.1862C11.7135 10.4214 11.6299 10.6468 11.5041 10.8489L14.617 12.648C13.9739 13.7565 12.7837 14.1598 11.5503 13.5934L10.6751 11.553C10.4611 11.6417 10.2318 11.6876 10.0002 11.6881V15.3068C8.71881 15.3068 7.77822 14.4765 7.6486 13.1232L8.96789 11.3596C8.77669 11.2237 8.6141 11.0516 8.48937 10.8529L5.38339 12.648C4.7403 11.5394 4.99463 10.306 6.09844 9.5189L8.22587 9.7702C8.24522 9.526 8.31516 9.2886 8.43123 9.0729L5.38339 7.31131C6.03123 6.2027 7.22153 5.79952 8.4501 6.36587L9.2751 8.28928C9.5027 8.18847 9.7489 8.13648 9.9978 8.13676ZM18 10.0001C18 16.1356 11.3123 19.9912 5.99098 16.9234C0.669699 13.8556 0.669648 6.14452 5.99098 3.07668C11.3123 0.00883901 18 3.86447 18 10.0001ZM16.1483 10.0001C16.1483 5.28457 11.0085 2.32141 6.91886 4.67918C2.82916 7.0369 2.82916 12.9632 6.91886 15.3209C11.0086 17.6787 16.1483 14.7155 16.1483 10.0001Z"},
 {color: "var(--color4)", title: "Sleep", svg: "M5.33735 14.8948C6.74639 16.0388 8.34509 16.5138 10.1334 16.3198C11.9218 16.1257 13.3833 15.318 14.518 13.8967C15.6526 12.4754 16.1237 10.8636 15.9314 9.06139C15.739 7.25917 14.9378 5.78573 13.528 4.64102L13.1942 4.37006C13.0883 4.28405 12.9792 4.21301 12.8667 4.15696C12.9074 5.3522 12.7471 6.52073 12.3855 7.66257C12.0239 8.80441 11.4634 9.85029 10.704 10.8001C9.94458 11.7499 9.05016 12.525 8.02079 13.1254C6.99142 13.7258 5.89358 14.1328 4.72728 14.3466C4.80557 14.4454 4.89768 14.5378 5.00363 14.6238L5.33735 14.8948ZM4.31352 16.1765C3.94271 15.8754 3.60177 15.537 3.29069 15.1612C2.97961 14.7853 2.71429 14.385 2.49471 13.9603C2.42084 13.8122 2.38948 13.6547 2.40063 13.4877C2.41179 13.3207 2.46857 13.1731 2.57095 13.0449C2.64773 12.9488 2.74145 12.8752 2.85207 12.8241C2.96271 12.7731 3.086 12.7499 3.22195 12.7547C4.4328 12.7693 5.58081 12.5129 6.66594 11.9852C7.75108 11.4576 8.67332 10.7185 9.43266 9.76789C10.192 8.81728 10.707 7.7518 10.9778 6.57146C11.2486 5.39112 11.2517 4.20086 10.9872 3.00069C10.9641 2.8764 10.9656 2.75432 10.9915 2.63446C11.0174 2.51461 11.0687 2.40662 11.1455 2.31049C11.2479 2.18232 11.3763 2.09287 11.5307 2.04214C11.685 1.99141 11.8417 1.98648 12.0005 2.02735C12.4694 2.16167 12.9193 2.34198 13.3498 2.56827C13.7803 2.79456 14.181 3.05824 14.5518 3.3593C15.4311 4.07324 16.1231 4.9125 16.6275 5.87708C17.1319 6.84166 17.4401 7.84437 17.5518 8.88521C17.6635 9.92609 17.5747 10.9721 17.2854 12.0234C16.9962 13.0746 16.4975 14.0431 15.7893 14.9289C15.0811 15.8147 14.2486 16.5122 13.2919 17.0216C12.3352 17.5309 11.3407 17.8415 10.3082 17.9534C9.2757 18.0653 8.23813 17.9758 7.19547 17.6849C6.15282 17.3941 5.19216 16.8913 4.31352 16.1765Z"},

];


modes.forEach(mode => {

  Modes.innerHTML += `

   <li class="mode">

    <div class="range">

     <div class="level" style="background:${mode.color};"></div>

    </div>

    <div class="icon">

     <div class="dot" style="background:${mode.color};"></div>

    </div>

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
     <path d="${mode.svg}" fill="var(--text)"/>
    </svg>

    <span>${mode.title}</span>

   </li>

  `;

});

const ranges = document.querySelectorAll('.range');

let count = 22;
let savedRangeValues = Array.from(ranges) // Store each level's bottom value

savedRangeValues[0] = "-100px";
savedRangeValues[1] = "-50px";
savedRangeValues[2] = "-80px";
savedRangeValues[3] = "-100px";

// Play beep sound
Beeps.forEach(Beep => {
  Beep.addEventListener("click", () => {
    Audio.currentTime = 0;
    Audio.play();
  });
});

// Power button toggle
Power.addEventListener("click", () => {
  ControlPanel.classList.remove("Reset");

  if (ControlPanel.classList.contains("active")) {
    ControlPanel.classList.remove("active");
    ranges.forEach(range => {
      range.querySelector(".level").style.bottom = "-140px";
    });
  } else {
    ControlPanel.classList.add("active");

    // Restore saved level values
    ranges.forEach((range, i) => {
      const level = range.querySelector(".level");
      level.style.bottom = savedRangeValues[i] || "-140px";
    });
  }
});

// Toggle swing
Toggle.addEventListener("click", () => {
  Toggle.classList.toggle("active");
});

// Temperature controls
Plus.addEventListener("click", () => {
  if (count >= 30) return;
  count++;
  Temp.innerHTML = count;
});

Minus.addEventListener("click", () => {
  if (count <= 16) return;
  count--;
  Temp.innerHTML = count;
});

// Reset all controls
Reset.addEventListener("click", () => {
  ControlPanel.classList.add("Reset");
  Toggle.classList.remove("active");

  count = 22;
  Temp.innerHTML = count;

  const resetValues = ["-100px", "-50px", "-80px", "-100px"];
  ranges.forEach((range, i) => {
    const level = range.querySelector(".level");
    level.style.bottom = resetValues[i];
    savedRangeValues[i] = resetValues[i];
  });

  rotation = 0;
  speedButton.style.transform = `rotate(0deg)`;
});



// Fan speed control
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
  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  lastAngle = getAngle(e, center);
  isDraggingSpeed = true;
  e.preventDefault();
  speedButton.style.cursor="grabbing";
}

function onMove(e) {
  if (!isDraggingSpeed) return;

  const rect = speedButton.getBoundingClientRect();
  const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  const currentAngle = getAngle(e, center);
  let delta = normalizeAngle(currentAngle - lastAngle);
  lastAngle = currentAngle;

  rotation += delta;
  rotation = Math.max(minRotation, Math.min(maxRotation, rotation));
  speedButton.style.transform = `rotate(${rotation}deg)`;
}

function onEnd() {
  isDraggingSpeed = false;
  speedButton.style.cursor="grab";
}

// Mouse events
speedButton.addEventListener("mousedown", onStart);
document.addEventListener("mousemove", onMove);
document.addEventListener("mouseup", onEnd);

// Touch events
speedButton.addEventListener("touchstart", onStart);
document.addEventListener("touchmove", onMove);
document.addEventListener("touchend", onEnd);

// Reset on ControlPanel class change
const observer = new MutationObserver(() => {
  if (ControlPanel.classList.contains("Reset")) {
    rotation = 0;
    speedButton.style.transform = `rotate(0deg)`;
  }
});
observer.observe(ControlPanel, { attributes: true, attributeFilter: ['class'] });




// Range drag behavior
ranges.forEach(range => {
  let isDraggingRange = false;

  range.addEventListener('mousedown', (e) => {
    isDraggingRange = true;
    range.style.cursor="grabbing";
    updateLevel(e, range);
  });

  document.addEventListener('mousemove', (e) => {
    if (isDraggingRange) updateLevel(e, range);
  });

  document.addEventListener('mouseup', () => {
    if (!isDraggingRange) return;
    range.style.cursor="grab";
    isDraggingRange = false;
    const index = Array.from(ranges).indexOf(range);
    const level = range.querySelector(".level");
    savedRangeValues[index] = level.style.bottom;
  });

  range.addEventListener('touchstart', (e) => {
    isDraggingRange = true;
    updateLevel(e.touches[0], range);
  });

  document.addEventListener('touchmove', (e) => {
    if (isDraggingRange) updateLevel(e.touches[0], range);
  });

  document.addEventListener('touchend', () => {
    if (!isDraggingRange) return;
    isDraggingRange = false;
    const index = Array.from(ranges).indexOf(range);
    const level = range.querySelector(".level");
    savedRangeValues[index] = level.style.bottom;
  });

  function updateLevel(e, rangeElement) {
    const rect = rangeElement.getBoundingClientRect();
    const level = rangeElement.querySelector('.level');
    const offset = e.clientY - rect.top;
    let percent = 1 - (offset / rect.height); // Top = 1, Bottom = 0
    percent = Math.max(0, Math.min(1, percent));
    const minBottom = -135;
    const maxBottom = 0;
    const bottomOffset = minBottom + percent * (maxBottom - minBottom);
    level.style.bottom = `${bottomOffset}px`;
  }
});


Theme.addEventListener("click",() => {

if(Body.classList.contains("dark")){Body.classList.replace("dark","light");Theme.querySelector("span").innerHTML="Light";}else{Body.classList.replace("light","dark");Theme.querySelector("span").innerHTML="Dark";}

});
