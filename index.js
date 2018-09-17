// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function (driver) {
    console.log(driver.name)})
}

function logDriversByHometown(drivers, location){
  const temp = drivers.filter(function(driver) {return driver.hometown === location})
  temp.forEach(function (driver) { console.log(driver.name)})
}

const numberSorter = function (num1, num2) {
  return num1.revenue - num2.revenue
}

function driversByRevenue(drivers){
  const temp = drivers.slice()
  return temp.sort(numberSorter)
}

const comparator = function (a, b) {
  return a.name.localeCompare(b.name)
};

function driversByName(drivers){
  const temp = drivers.slice()
  return temp.sort(comparator)
}

function totalRevenue(drivers){
  let total = 0
  drivers.forEach(function (driver){
    total += driver.revenue
  })
  return total
}

function averageRevenue(drivers){
  let totalRev = totalRevenue(drivers)
  let totalDrivers = drivers.length
  return totalRev/totalDrivers
}





// function nameToAttributes(drivers){
//   return drivers.map(function (driver){
//     const first = driver.split(' ')[0];
//     const last = driver.split(' ')[1];
//     return { firstName: first, lastName: last };
//   });
// }
//
// function findMatching(drivers, string){
//   return drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase()})
// }
