const data = [10,20,30,40]
const result = data.filter(e=>e>=20)
console.log(result);

const data1 = [
    {namePeople:"ก้อง",salary:25000,department:"การตลาด"},
    {namePeople:"พิม",salary:35000,department:"โปรแกรมเมอร์"},
    {namePeople:"พลอย",salary:25000,department:"ฝึกงาน"},
    {namePeople:"เดียร์",salary:55000,department:"โปรแกรมเมอร์"},
    {namePeople:"ฟ้า",salary:15000,department:"ฝึกงาน"},
]
const result1 = data1.filter(e=>e.salary<40000).filter(e=>e.department==="ฝึกงาน")
console.log(result1);