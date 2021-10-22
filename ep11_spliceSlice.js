//splice & slice
//splice(indexที่ต้องการที่จะเริ่มลบ,จำนวน index ที่จะลบ)
//splice(indexที่ต้องการที่จะเริ่มลบ,จำนวน index ที่จะลบ,ข้อมูลที่จะแทนเข้าไปในตำแหน่งที่ต้องการลบ)
//slice(index เริ่มต้น,index สุดท้าย +1)

//splice ลบสมาชิกใน array
const data = [10,20,30,40,50,60,70,80,90]
console.log(data)
data.splice(1,3)
console.log(data)
data.splice(1,3,999)
console.log(data)

//slice การดึงสมาชิกมาใช้งาน
const lastData = data.slice(1,3)
console.log(lastData)
console.log(data)
