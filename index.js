const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];

const arr1 = temperatures.filter(temp=>temp >= 25)
const arr2 = temperatures.filter(temp=>temp < 19)

const fahrenheitTemps = temperatures.map(temp=>((temp * (9/5)) + 32).toFixed(1))

const tempLabels = temperatures.map(temp=>{
   return temp >= 25 ? "Warm" :
    temp >= 20 ? "Mild" : "Cool"
})

const highestTemp = ()=>{
    let max = temperatures[0] // any index
    temperatures.forEach(temp=> max < temp ? max = temp : max)
    return max
}
// console.log(highestTemp())
const lowestTemp = ()=>{
    let min = temperatures[0] // any index
    temperatures.forEach(temp=> min > temp ? min = temp : min)
    return min
}
console.log(lowestTemp())

