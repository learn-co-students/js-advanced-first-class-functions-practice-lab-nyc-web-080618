// Code your solution in this file!

const logDriverNames = function (drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function (drivers, location){
  const newDrivers = drivers.filter(driver => driver.hometown === location)
  logDriverNames(newDrivers)
}

const driversByRevenue = function (drivers){
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.revenue - driverTwo.revenue
  })
}

const driversByName = function (drivers){
  return drivers.slice().sort(function(driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = function (drivers){
  return drivers.reduce(function(total, currentDriver){
    return total + currentDriver.revenue
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
