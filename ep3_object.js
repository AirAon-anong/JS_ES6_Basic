const Name = "Aon-anong"
const age = 20
const address = "ปทุมธานี"

const customer = {
    customerName : Name,
    age,
    address,
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า " + this.customerName)
    }
}
customer.showData()
console.log(customer)
