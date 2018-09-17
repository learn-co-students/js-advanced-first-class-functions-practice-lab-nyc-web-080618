const logDriverNames = function(array){
  array.forEach(function(item){
    console.log(item.name)
  })
}

const logDriversByHometown = function(array,location){
  array.forEach(function(item){
    if(item.hometown===location){
      console.log(item.name)
    }
  })
}

const driversByRevenue = function(array){
  return array.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  });
}

const driversByName = function(array){
  return array.slice().sort(function(a,b){
    if(a.name<b.name){
      return -1;
    }
    if(a.name>b.name){
      return 1;
    }
    return 0;
  })
}

const totalRevenue = function(array){
  return array.reduce(function(total,driver){
    return total + driver.revenue
  },0)
}

const averageRevenue = function(array){
  return totalRevenue(array)/array.length
}
