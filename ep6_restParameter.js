summation=(...numberArr)=>{
    let total = 0
    for(let number of numberArr) total+=number 
    return total
}

console.log(summation(100,200))
console.log(summation(100,200,300))
console.log(summation(100,200,300,10,20))
console.log(summation(100,200,300,10))