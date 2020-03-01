// MIT License
// Copyright (c) 2020 Matronator

function calculateHours (h, m = 0, s = 0) {
  return Number((h + m * (1 / 60) + s * 1 / 3600).toFixed(6));
}

function calculateMinutes (h = 0, m, s = 0) {
  return Number((h * (60 / 1) + m + s * 1 / 60).toFixed(6));
}

function calculateSeconds(h = 0, m = 0, s) {
  return Number(((h * (3600 / 1)) + (m * 60 / 1) + s).toFixed(6));
}
