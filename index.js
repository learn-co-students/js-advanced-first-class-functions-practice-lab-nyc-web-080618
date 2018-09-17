const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, entered_hometown){
  drivers.forEach(function (driver) {
    if (driver.hometown == entered_hometown){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (first_driver, second_driver) {
    return first_driver.revenue - second_driver.revenue;
  });
};

const driversByName = function(drivers){
  return drivers.slice().sort(function (first_driver, second_driver){
    return first_driver.name.localeCompare(second_driver.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers){
  return (totalRevenue(drivers) / drivers.length)
}
