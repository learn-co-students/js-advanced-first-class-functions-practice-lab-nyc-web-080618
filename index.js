// Code your solution in this file!
function logDriverNames(array) {
  for (const driver of array) {
    console.log(driver.name);
  }
}

function logDriversByHometown(array,location) {
  array.forEach(function (driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  })
}

function driversByRevenue(array) {

  return array.slice(0).sort(function (a,b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(array) {
  return array.slice(0).sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array) {
  return array.reduce(function (total,driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(array) {
  return (totalRevenue(array) / array.length)
}
