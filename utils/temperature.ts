const UNITS = {
  calcius: "°C",
  farahneit: "°F",
};

function convertTemperatureTwo(temperature: number, unitTo: string) {
  if (unitTo === UNITS.calcius) {
    return (temperature - 32) / 1.8;
  } else if (unitTo === UNITS.farahneit) {
    return temperature * 1.8 + 32;
  } else {
    throw new Error("invalid unit");
  }
}

function getOppositeUnit(unit: string) {
  return unit === UNITS.calcius ? UNITS.farahneit : UNITS.calcius;
}

export { convertTemperatureTwo, getOppositeUnit, UNITS };
