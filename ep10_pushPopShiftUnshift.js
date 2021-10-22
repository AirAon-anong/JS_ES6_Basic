//push , pop
const data = [10,20,30]
console.log(data)

data.push(50)
data.push(60,70)
data.push(...[500,1000])
console.log(data)

data.pop()
data.pop()
console.log(data)

//shift unshift
data.shift()
data.shift()
console.log(data)

data.unshift(9)
data.unshift(998,997)
data.unshift(...[996,995])
console.log(data)
