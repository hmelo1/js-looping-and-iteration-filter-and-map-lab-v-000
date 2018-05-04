// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return (driver.revenue > revenue)
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let new_drivers = driversWithRevenueOver(drivers, revenue)
}
