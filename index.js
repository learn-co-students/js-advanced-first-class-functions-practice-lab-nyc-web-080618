function logDriverNames (drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  const htownDrivers = drivers.filter(function(driver){
    return driver.hometown === location
  })
  logDriverNames(htownDrivers);
}

function driversByRevenue(drivers){
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a,b){
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers){
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

// uses the reduce() method to sum the revenue of every driver and return the total
function totalRevenue(drivers){
  return drivers.reduce(function(acc, el){
    return acc + el.revenue;
  }, 0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
