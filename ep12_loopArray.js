const data = [10,20,30,40,50]

//For loop ใช้ break continue ได้ปกติ
for(let i = 0;i<data.length;i++){
    if(data[i]>=30) break
    console.log(`ลำดับที่ ${i} = ${data[i]}`)
}

//ForEach ไม่สามารถใช้งาน break continue ได้
let sum = 0
data.forEach(e => {
    sum+=e
    console.log(`ผลรวม = ${sum}`)
})

//ForOf ใช้ break continue ได้ปกติ
for(const element of data){
    if(element>=30) break
    console.log(`สมาชิก ใน Array = ${element}`)
}
