let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let tbody = document.querySelector('#table_body');
let carnet_regex= new RegExp('[0-9]{8}');

let addStudent = (carnet, schedule_dropdown, late_switch)=>{
    let new_row = document.createElement('tr')
    let datetime = new Date();

    new_row.className= 'table-active'
    new_row.innerHTML =
    `<th scope = row> ${carnet} </th>
        <td> ${schedule_dropdown}</td>
        <td> ${datetime.toLocaleString()}</td>
        <td> ${late_switch}</td>`

        tbody.appendChild(new_row)
}

let  parseLateSwitch = (value)=> {
    if (value){
        return '送れました'
    }
    return '時間！'
}

submit_btn.addEventListener('click',()=>{6
    let carnet = carnet_field.value
    let schedule= schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late= parseLateSwitch(late_switch.checked)

    if (carnet_regex.test(carnet)){
        addStudent(carnet,schedule,late)
    } else {
        alert('カルネとは違う！！！！！！')
    }
})

carnet_field.addEventListener('keyup', (event)=>{
    let keyCode = event.keycode
    let carnet = carnet_field.value

    if (keyCode=13){
        submit_btn.click()
    }

    if (carnet_regex.test(carnet)){
        submit_btn.disabled= false
    } else {
        submit_btn.disabled= true
    }
})