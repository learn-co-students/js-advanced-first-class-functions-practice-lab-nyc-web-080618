// Code your solution in this file!
const logDriverNames=function(drivers){
   drivers.forEach(x=>console.log(x.name))
}

const logDriversByHometown=function(drivers,town){
   drivers.filter(x=>x.hometown==town).forEach(x=>console.log(x.name))
}

const driversByRevenue=function(drivers){
   return drivers.slice().sort(function(a,b){
     return a.revenue-b.revenue
   }
 )
}

const driversByName=function(drivers){
  return drivers.slice().sort(function (a, b) {
  return a.name.localeCompare(b.name)
})
}

const totalRevenue=function(drivers){
  return drivers.reduce((acc,cur)=>acc+cur.revenue,0)
}

const averageRevenue=function(drivers){
  return drivers.reduce((acc,cur)=>acc+cur.revenue,0)/drivers.length
}
