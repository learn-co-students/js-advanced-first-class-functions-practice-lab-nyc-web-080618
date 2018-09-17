function logDriverNames(drivers){
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, hometown){
  const matched = drivers.filter(driver => driver.hometown === hometown);
  logDriverNames(matched);
}

function driversByRevenue(drivers){
  const newDrivers = [...drivers];
  return newDrivers.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  const newDrivers = [...drivers];
  return newDrivers.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(agg, el){
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
