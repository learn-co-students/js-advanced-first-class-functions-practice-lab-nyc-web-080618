const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];


// Receives an array of driver objects and logs the name attribute
// of each driver to the console.
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};


// Receives an array of driver objects as the first argument and a location
// as the second argument. The function logs to the console the name attribute of
// each driver whose hometown matches the string passed in as the 'location' argument.
const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name);
    };
  });
};


// Receives an array of driver objects and returns a new array of driver objects
// sorted by their revenue attribute from lowest to highest.
const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (highest, lowest) {
    return highest.revenue - lowest.revenue;
  });
  return driversByRevenue(drivers);
};


// Receives an array of driver objects and returns a new array of
// driver objects sorted by their name attribute from A to Z. Here, you may have
// to use the String.prototype.localeCompare() method.
const driversByName = function(drivers){
  return drivers.slice().sort(function (nameA, nameB) {
    return nameA.name.localeCompare(nameB.name);
  });
};

// Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const totalRevenue = function(drivers){
  return drivers.reduce(function(aggregate, driver){
    return (driver.revenue + aggregate);
  }, 0); // the 0 is what the aggregate count starts at
};


// Receives an array of driver objects and returns the average revenue earned by each driver.
const averageRevenue = function (drivers) {
  return (totalRevenue(drivers) / drivers.length);
};
