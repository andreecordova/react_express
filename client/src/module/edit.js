import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl = "http://localhost:3000"

class Edit extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fieldName: "",
      fieldFatherLastName: "",
      fieldMotherLastName: "",
      fieldEmail:"",
      fieldPhone:"",
      fieldAddress:"",
    }
  }

  componentDidMount(){
    // parametro de id del usuario
    let userId = this.props.match.params.id;
    // http://localhost:3000/employee/get/4
    const url = baseUrl+"/employee/get/"+userId
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          fieldName: data.name,
          fieldFatherLastName: data.father_lastname,
          fieldMotherLastName: data.mother_lastname,
          fieldEmail:data.email,
          fieldPhone:data.phone,
          fieldAddress:data.address
        })
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

  }

  render(){
    return (
      <div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="name">Nombre</label>
            <input type="text" name="name" class="form-control"  placeholder="Ingrese Nombre"
              value={this.state.fieldName} onChange={(value)=> this.setState({fieldName:value.target.value})}/>
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
            <input type="email" name="email" class="form-control"  placeholder="Ingrese Email"
              value={this.state.fieldEmail} onChange={(value)=> this.setState({fieldEmail:value.target.value})}/>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="phone">Teléfono</label>
            <input type="number" name="phone" class="form-control"  placeholder="IngreseTeléfono"
              value={this.state.fieldPhone} onChange={(value)=> this.setState({fieldPhone:value.target.value})}/>
          </div>
        </div>
        <div class="form-group">
          <label for="address">Dirección</label>
          <input type="text" name="address" class="form-control" id="inputAddress" placeholder="Ingrese Dirección"
            value={this.state.fieldAddress} onChange={(value)=> this.setState({fieldAddress:value.target.value})}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
      </div>
    );
  }

  sendUpdate(){

    // get parameter id
    let userId = this.props.match.params.id;
    // url de backend
    const baseUrl = "http://localhost:3000/employee/update/"+userId
    // parameter data post
    const datapost = {
      name: this.state.fieldName,
      father_lastname: this.state.fieldFatherLastName,
      mother_lastname: this.state.fieldMotherLastName,
      email: this.state.fieldEmail,
      phone: this.state.fieldPhone,
      address: this.state.fieldAddress,
    }

    axios.post(baseUrl,datapost)
    .then(response => {
      if (response.data.success) {
        alert(response.data.message)
      }
      else {
        alert("Error")
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })

  }
}

export default Edit;