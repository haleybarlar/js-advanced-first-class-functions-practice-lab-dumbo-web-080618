const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]

function logDriverNames() {
  drivers.map(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, hometown) {
  drivers.filter(driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue() {
  return drivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName() {
  return drivers.sort(function(a, b) {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()

    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    }

    return 0
  })
}

function totalRevenue(drivers) {
  return drivers.map(driver => driver.revenue)
    .reduce(function(a,b) {
      return a + b
    })
}
