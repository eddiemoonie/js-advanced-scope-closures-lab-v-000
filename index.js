function produceDrivingRange(blockRange) {
  return function(start, end) {
    let startPoint = parseInt(start)
    let endPoint = parseInt(end)
    let blocks = Math.abs(endPoint - startPoint)
    let difference = blockRange - blocks

    if (difference < 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
