// ข้อมูลภายใน array เป็น ตัวเลข
const numbers = [10,20,30,40]
const result = numbers.map(e=>{
    return e*2
})
console.log(`Array Map = ${result}`)

// ข้อมูลภายใน array เป็น ข้อความ
const data = ["ฝนตก","แดดร้อน","หมอก","หมอก","ฝนตก","ฝนตก","แดดร้อน"]
const result1 = data.map((e,j)=>{
    return `วันที่ ${j+1} , สภาพอากาศ = ${e}`
}) // map (สมาชิก array,index ของ array มีไม่มีก็ได้)
console.log(result1)

// ข้อมูลภายใน array เป็น object
const data1 = [
    {day:"18/10/2564",weather:"ฝนตก",temp:"27"},
    {day:"20/10/2564",weather:"แดดร้อน",temp:"35"},
    {day:"23/10/2564",weather:"หมอก",temp:"21"}
]
const result2 = data1.map(e=>e.weather)
console.log(result2)
