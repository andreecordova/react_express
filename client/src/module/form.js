import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class Form extends React.Component{

  constructor(props){
     super(props);
     this.state = {
       fieldName: "",
       fieldFatherLastName: "",
       fieldMotherLastName: "",
       fieldEmail:"",
       fieldPhone:"",
       fieldAddress:""
     }
   }

  render(){
   return (
     <div>
       <div class="form-row justify-content-center">
         <div class="form-group col-md-6">
           <label for="name">Nombre</label>
           <input type="text" name="name" class="form-control"  placeholder="Ingrese Nombre" value={this.state.fieldName} onChange={(value)=> this.setState({fieldName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="father_lastname">Apellido Paterno</label>
           <input type="text" name="father_lastname" class="form-control"  placeholder="Ingrese Apellido Paterno"
             value={this.state.fieldFatherLastName} onChange={(value)=> this.setState({fieldFatherLastName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="mother_lastname">Apellido Materno</label>
           <input type="text" name="mother_lastname" class="form-control"  placeholder="Ingrese Apellido Materno"
             value={this.state.fieldMotherLastName} onChange={(value)=> this.setState({fieldMotherLastName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
         <label for="email">Email</label>
         <input type="email" name="email" class="form-control"  placeholder="Ingrese Email" value={this.state.fieldEmail} onChange={(value)=> this.setState({fieldEmail:value.target.value})}/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
         <label for="phone">Teléfono</label>
         <input type="number" name="phone" class="form-control"  placeholder="IngreseTeléfono"  value={this.state.fieldPhone} onChange={(value)=> this.setState({fieldPhone:value.target.value})}/>
         </div>
       </div>
       <div class="form-group">
       <label for="address">Dirección</label>
       <input type="text" name="address" class="form-control" id="inputAddress" placeholder="Ingrese Dirección" value={this.state.fieldAddress} onChange={(value)=> this.setState({fieldAddress:value.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
     </div>
   );
  }

  sendSave(){
    if (this.state.fieldPhone=="") {
       swal("Digite el campo de telefono")
    }
    else if (this.state.fieldName=="") {
       swal("Digite el campo de Nombre")
    }
    else if (this.state.fieldEmail=="") {
       swal("Digite el campo de email")
    }
    else if (this.state.fieldAddress=="") {
       swal("Digite el campo de Direccion")
    }
    else {
      // url de backend
      const baseUrl = "http://localhost:3000/employee/create"

      // parametros de datos post
      const datapost = {
        name : this.state.fieldName,
        email : this.state.fieldEmail,
        phone : this.state.fieldPhone,
        address : this.state.fieldAddress,
        role  : this.state.selectRole
      }

      axios.post(baseUrl,datapost)
      .then(response=>{
        if (response.data.success===true) {
          swal(response.data.message)
        }
        else {
          swal(response.data.message)
        }
      }).catch(error=>{
        swal("Error 34 "+error)
      });
    }
  }
}

export default Form;