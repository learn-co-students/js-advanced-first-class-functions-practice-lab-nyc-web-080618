// Code your solution in this file!
function logDriverNames(drivers){
  for (const driver of drivers){
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, hometown){
  let matchDriver = drivers.filter(driver => driver.hometown === hometown);
  for (const driver of matchDriver){
    console.log(driver.name);
  }
}

function driversByRevenue(drivers){
  const driversInOrder = [...drivers];
  return driversInOrder.sort( function(obj1, obj2) {
    return obj1.revenue - obj2.revenue;
  })
}

function driversByName(drivers){
  const driversInOrder = [...drivers];
  return driversInOrder.sort( function(obj1, obj2) {
    return obj1.name.localeCompare(obj2.name);
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, currentDriver){
    return total += currentDriver.revenue;
  }, 0);
}
// format of reduce: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//total:	      Required, The initialValue, or the previously returned value of the function
//currentValue:	Required, The value of the current element(the unit of the array)
//currentIndex:	Optional, The array index of the current element
//arr:        	Optional, The array object the current element belongs to


function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
