// Inputs
const hi = document.getElementById("hours");
const mi = document.getElementById("minutes");
const si = document.getElementById("seconds");

si.addEventListener("keydown", function(e){
  if (e.keyCode === 9) {
    hi.focus();
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

// Init
calculateAll();
