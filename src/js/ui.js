document.addEventListener("DOMContentLoaded", () => {
  hi.focus();
});

// Inputs
const hi = document.getElementById("hours");
const mi = document.getElementById("minutes");
const si = document.getElementById("seconds");

si.addEventListener("keydown", function(e){
  if (e.key === "Tab") {
    e.preventDefault();
    hi.focus();
    hi.select();
  }
});

// Outputs
var ho = document.getElementById("out-h");
var mo = document.getElementById("out-m");
var so = document.getElementById("out-s");

// Calculate
function calculateAll() {
  ho.innerHTML = calculateHours(parseInt(hi.value), parseInt(mi.value), parseInt(si.value));
  mo.innerHTML = calculateMinutes(parseInt(hi.value), parseInt(mi.value), parseInt(si.value));
  so.innerHTML = calculateSeconds(parseInt(hi.value), parseInt(mi.value), parseInt(si.value));
}

// Change
hi.addEventListener("input", function(){
  let thisval = this.value;
  if (/^[0-9]*$/.test(thisval)) {
    calculateAll();
  } else {
    this.value = "0";
  }
});
mi.addEventListener("input", function(){
  let thisval = this.value;
  if (/^[0-9]*$/.test(thisval)) {
    calculateAll();
  } else {
    this.value = "0";
  }
});
si.addEventListener("input", function(){
  let thisval = this.value;
  if (/^[0-9]*$/.test(thisval)) {
    calculateAll();
  } else {
    this.value = "0";
  }
});

[hi, mi, si].forEach(el => {
  el.addEventListener('blur', () => {
    if (el.value === '') {
      el.value = '0';
      calculateAll();
    }
  });
});

// Init
calculateAll();
