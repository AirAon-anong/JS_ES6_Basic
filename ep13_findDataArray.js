//ค้นหาข้อมูลใน array
//indexOf(ข้อมูล) => index ของข้อมูลที่ค้นหา , ถ้าไม่เจอ -1
//find(ข้อมูล) => เจอ แสดงข้อมูลนั้น , ไม่เจอ แสดงคำว่า undefined
//findIndex(ข้อมูล) => index ของข้อมูลที่ค้นหา , ถ้าไม่เจอ -1


//indexOf
const colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
console.log(colors.indexOf("แดง"))
console.log(colors.indexOf("ม่วง"))
console.log(colors.indexOf("เทา"))

//find
const search1 = colors.find(e=>e==="ม่วง")
console.log(search1)
const search2 = colors.find(e=>e==="เหลือง")
console.log(search2)

//findIndex
const search3 = colors.findIndex(e=>e==="ม่วง")
console.log(search3)
const search4 = colors.findIndex(e=>e==="เหลือง")
console.log(search4)
