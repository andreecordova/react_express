import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const baseUrl = "http://localhost:8080"

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
    // http://localhost:8080/employee/get/4
    const url = baseUrl+"/api/employee/get/"+userId
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
        Swal.fire("Error web service")
      }
    })
    .catch(error=>{
      Swal.fire("Error server "+error)
    })

  }

  render(){
    return (
      <div>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" className="form-control"  placeholder="Ingrese Nombre"
              value={this.state.fieldName} onChange={(value)=> this.setState({fieldName:value.target.value})}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="father_lastname">Apellido Paterno</label>
            <input type="text" name="father_lastname" className="form-control"  placeholder="Ingrese Apellido Paterno"
              value={this.state.fieldFatherLastName} onChange={(value)=> this.setState({fieldFatherLastName:value.target.value})}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="mother_lastname">Apellido Materno</label>
            <input type="text" name="mother_lastname" className="form-control"  placeholder="Ingrese Apellido Materno"
              value={this.state.fieldMotherLastName} onChange={(value)=> this.setState({fieldMotherLastName:value.target.value})}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="form-control"  placeholder="Ingrese Email"
              value={this.state.fieldEmail} onChange={(value)=> this.setState({fieldEmail:value.target.value})}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="phone">Teléfono</label>
            <input type="number" name="phone" className="form-control"  placeholder="IngreseTeléfono"
              value={this.state.fieldPhone} onChange={(value)=> this.setState({fieldPhone:value.target.value})}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input type="text" name="address" className="form-control" id="inputAddress" placeholder="Ingrese Dirección"
            value={this.state.fieldAddress} onChange={(value)=> this.setState({fieldAddress:value.target.value})}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
      </div>
    );
  }

  sendUpdate(){

    // get parameter id
    let userId = this.props.match.params.id;
    // url de backend
    const url = baseUrl+"/api/employee/update/"+userId
    // parameter data post
    const datapost = {
      name: this.state.fieldName,
      father_lastname: this.state.fieldFatherLastName,
      mother_lastname: this.state.fieldMotherLastName,
      email: this.state.fieldEmail,
      phone: this.state.fieldPhone,
      address: this.state.fieldAddress
    }

    axios.post(url,datapost)
    .then(response => {
      if (response.data.success) {
        Swal.fire(response.data.message)
      }
      else {
        Swal.fire("Error")
      }
    })
    .catch ( error => {
      Swal.fire("Error 325 ")
    })

  }
}

export default Edit;