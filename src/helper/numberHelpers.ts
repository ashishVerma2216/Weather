interface Number {
  kelvinToCelsius(): string;
}

Number.prototype.kelvinToCelsius = function (): string {
  const kelvin = Number(this);
  const celsius = `${(kelvin - 273.15).toFixed(2)}° C`;
  return celsius;
};
