import React from 'react';
import './App.css';

class FormApp extends React.Component{
 
  constructor(args){
    super(args)
    this.state={
     student_list:[]
    }
   
  }
  onChange(e){
    this.setState({
    [e.target.name]: e.target.value
     }) } 

   
  save(e){
    let table_body = document.querySelector("#table_body")
    let new_row = document.createElement("tr")
    let datetime = new Date()
    let carnet=this.state.carnet
    let schedule=this.state.schedule
    let late =this.state.tarde
    
    new_row.className= "table_active"
    new_row.innerHTML =` <th scope= 'row'>${carnet}</th>
    <td> ${schedule}</td>
    <td> ${datetime.toLocaleString()}</td>
    <td> ${late}</td>
  `
  let new_cell = document.createElement("td")
  let new_btn= document.createElement("button")

  new_btn.className = "btn btn-danger"
  new_btn.innerText = "DROP"
  new_btn.value = this.state.student_list.length

  new_btn.addEventListener("click", event =>{
 
  let table_body = document.querySelector("#table_body")
 
  let id_actual =new_btn.value
  var x = new_btn.value
  if(id_actual == parseInt(this.state.student_list[x].id)){
    console.log(x);
    console.log(this.state.student_list[x].id)
  delete this.state.student_list[x]
  
  table_body.innerHTML=  ` <th scope= 'row'>${carnet}</th>
  <td> ${schedule}</td>
  <td> ${datetime.toLocaleString()}</td>
  <td> ${late}</td>
  `
    } }
  )
   
 


  new_cell.appendChild(new_btn)
  new_row.appendChild(new_cell)
  table_body.appendChild(new_row)


  this.state.student_list.push(
  {
    "id": this.state.student_list.length,
    "carnet": carnet,
    "horario": schedule,
    "tarde": late,
    "ingreso": datetime.toLocaleString() }
)

    
  }
 
 

  
  render(){
    return(
    <div>
    <div className="container">
      <div className="jumbotron">
        <h1>
            Registro de laboratorio.
        </h1>

          <div className="form-group">
            <label htmlFor="carnet" className="col-sm-2 col-form-label">Ingrese el carnet: </label>
            <input value={this.state.carnet} onChange={this.onChange.bind(this)}  className="form-control" type="text" name="carnet" id="carnet_field" />
          </div>

          <div className="form-group">
            <label for="schedule">Seleccione el horario:</label>
            <select value={this.state.schedule} onChange={this.onChange.bind(this)} name="schedule" className="form-control" id="schedule_field">
                <option>Lunes de 9:00 a 11.00</option>
                <option>Martes de 13:30 a 15:30</option>
                <option>Miércoles de 9:00 a 11.00</option>
                <option>Jueves de 13:30 a 15:30</option>
                <option>Viernes de 9:00 a 11.00</option>
                <option>Viernes de 15:30 a 17:30</option>
            </select>
          </div>
        
          <div className="form-group">
            <div >
                <label >Llegó tarde?</label>
                <input value='SI' onChange={this.onChange.bind(this)} type="radio" name="tarde" /> SI
                <input value='NO' onChange={this.onChange.bind(this)} type="radio" name="tarde" /> NO
            </div>
          </div>
          

        <div className="form-group">
            <button onClick={this.save.bind(this)} type="button" className="btn btn-danger" id="submit_btn" enable>Ingresar</button>
        </div>
    </div>
    </div>
    
    <React.Fragment>
   <table className="table table-hover">
   <thead>
       <tr className="table-dark">
           <th scope="col">Carnet</th>
           <th scope="col">Horario de laboratorio</th>
           <th scope="col">Hora de ingreso</th>
           <th scope="col">Tarde?</th>
           <th scope="col">Eliminar</th>
       </tr>
   </thead>
   <tbody id="table_body">
   </tbody>
</table>
</React.Fragment>
</div>
    )
    }
  

}
 


export default FormApp