exports.calculateHours = function (h, m = 0, s = 0) {
  return Number((h + m * (1 / 60) + s * 1 / 3600).toFixed(6));
}

exports.calculateMinutes = function (h = 0, m, s = 0) {
  return Number((h * (60 / 1) + m + s * 1 / 60).toFixed(6));
}

exports.calculateSeconds = function (h = 0, m = 0, s) {
  return Number(((h * (3600 / 1)) + (m * 60 / 1) + s).toFixed(6));
}
