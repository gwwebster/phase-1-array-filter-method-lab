function findMatching(array, string) {
    let antiCaser = string.toLowerCase()
    return array.filter(function (name) {
        let eitherCaseName = name.toLowerCase()
        return (eitherCaseName === antiCaser)
    })
}

function fuzzyMatch(array, string) {
    let stringLen = string.length
    return array.filter(name => (name.slice(0, stringLen) === string))
}

function matchName(driverObjArray, string) {
    return driverObjArray.filter(driver => (driver.name === string))
}
