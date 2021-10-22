//array normal
const data = [10,20,30,40]
// array.reduce((ตัวแปรที่จะถูกประมวลผลและถูก return ในตอนหลัง,e)=>{},ค่าเริ่มต้น ของ ตัวแปรที่ถูกประมวลผล)
const summation = data.reduce((value,e)=>{
    console.log(value)
    const total = e + value
    return total
},0)
console.log(`ผลรวม = ${summation}`)

//array object
const cart = [
    {nameProduct:"กระเป๋า",price:500},
    {nameProduct:"หนังสือ",price:300},
    {nameProduct:"กล้องถ่ายรูป",price:5000}
]
const summation1 = cart.reduce((value,e)=>e.price+value,0)
console.log(`ต้องชำระเงิน = ${summation1}`)