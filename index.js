// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, location) {
  arr = drivers.filter(driver => driver.hometown === location);
  logDriverNames(arr);
}

function driversByRevenue(drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  const newDrivers = [...drivers]
  return newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
}, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
