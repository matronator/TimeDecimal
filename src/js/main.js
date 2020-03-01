function calculateHours(h, m = 0, s = 0) {
  return h + (m * (1 / 60)) + (s * 1 / 3600);
}

function calculateMinutes(h = 0, m, s = 0) {
  return (h * (60 / 1)) + m + (s * 1 / 60);
}

function calculateSeconds(h = 0, m = 0, s) {
  return (h * (3600 / 1)) + (m * 60 / 1) + s;
}
