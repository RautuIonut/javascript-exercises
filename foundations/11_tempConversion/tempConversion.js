const convertToCelsius = function(temp) {
  const conv = (temp - 32) / (9 / 5)

  return Number.isInteger(conv) ? conv : Number(conv.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  const conv = (temp * (9 / 5) + 32)

  return Number.isInteger(conv) ? conv : Number(conv.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
