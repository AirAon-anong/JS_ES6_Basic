//Array
const colors =["เขียว","แดง","เหลือง"]
const [green,red,yellow] = colors

const newColors = ["น้ำเงิน","เทา","ดำ"]
const [blue,,black] = newColors

console.log(green)
console.log(red)
console.log(yellow)

console.log(blue)
console.log(black)

//Object
const product = {
    productName : "คอมพิวเตอร์",
    price : 30000,
    stock : 10
}

const {stock:s,productName:n} = product
console.log(n)
console.log(s)

const {price} = product
console.log(price)