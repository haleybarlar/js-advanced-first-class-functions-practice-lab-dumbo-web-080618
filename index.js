// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.filter(function (driver) {
    // debugger
    return driver.hometown === location
  }).map(function (driver) {
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.charCodeAt(0) - driver2.name.charCodeAt(0)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (accumulator, currentDriver) {
    return accumulator + currentDriver.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
