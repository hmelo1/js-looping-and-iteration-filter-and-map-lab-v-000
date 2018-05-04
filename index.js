// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  var test =  drivers.map(function (driver){
    if (driver.revenue > revenue){
      return driver
    }
  })
  return test
}
