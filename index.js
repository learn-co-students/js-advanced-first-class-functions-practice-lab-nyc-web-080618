// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown)
      console.log(driver.name)

  })
}

const driversByRevenue = function(drivers) {
      return drivers.slice().sort //slice() creates a copy of the original array
      (function (driver1, driver2) { return driver1.revenue  -  driver2.revenue })
  }


const driversByName = function(drivers) {
    return drivers.slice().sort(function (driver1, driver2) {
      if(driver1.name < driver2.name) {
        return -1;
    }
      else if (driver1.name > driver2.name) {
        return 1;
      }
      else { //names must be equal
        return 0;
      }
    })
}

//uses the reduce() method to sum the revenue of every driver and return the total
const totalRevenue = function(drivers) {
  let initialValue = 0;

  let sum = drivers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.revenue
  }, initialValue)

    return sum;
}

// Receives an array of driver objects and returns the average revenue earned by each driver.
const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length

};
