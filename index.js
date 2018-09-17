// Code your solution in this file!
function logDriverNames (array){
  array.forEach(function(driver){
    console.log(driver['name'])
  })
}

function logDriversByHometown (array, hometown){
  array.forEach(function(driver){
    if(driver["hometown"]===hometown){
    console.log(driver['name'])
  }})
}

function driversByRevenue(old_array){
  let sorted_array = old_array.slice()
  sorted_array.sort(function(a, b){
    return a.revenue - b.revenue

  })
  return sorted_array
}

function driversByName(old_array){
  let sorted_array = old_array.slice()
  sorted_array.sort(function(a, b){
    return a.name.localeCompare(b.name)

  })
  return sorted_array
}

function totalRevenue(old_array){
  let new_array = old_array.slice()
    return new_array.reduce(function(accumulator, driver){
      return accumulator + driver.revenue
    },0)
}

function averageRevenue(old_array){
  let sum = totalRevenue(old_array)
  return average = sum/old_array.length

}
