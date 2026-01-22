const convertToCelsius = function(temp) {
  let celsius_convert = (temp - 32) / 1.8;
  if (Number.isInteger(celsius_convert)) {
    return celsius_convert;
  } else {
    let rounded_num = celsius_convert.toFixed(1);
    return Number(rounded_num);
  }
};

const convertToFahrenheit = function(temp) {
  let fahrenheit_convert = (temp * 1.8 + 32);
  if (Number.isInteger(fahrenheit_convert)) {
    return fahrenheit_convert;
  } else {
    let rounded_num = fahrenheit_convert.toFixed(1);
    return Number(rounded_num);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
