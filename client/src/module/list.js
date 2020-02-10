import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

import { Link } from "react-router-dom";

//library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const baseUrl = "http://localhost:3000"

class list extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listUsers:[]
    }
  }

  componentDidMount(){
     this.loadEmployee()
  }

  loadEmployee(){
    const url = baseUrl+"/employee/list"
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data
        this.setState({listUsers:data})
      }
      else {
        swal("Error web service")
      }
    })
    .catch(error=>{
      swal("Error server "+error)
    })
  }

  render()
  {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido Paterno</th>
            <th scope="col">Apellido Materno</th>
            <th scope="col">Email</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th colspan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }

  loadFillData(){
    return this.state.listUsers.map((data)=>{
      return(
        <tr>
          <th>{data.id}</th>
          <td>{data.name}</td>
          <td>{data.father_lastname}</td>
          <td>{data.mother_lastname}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <Link class="btn btn-outline-info" to={"/edit/"+data.id}>Edit</Link>
          </td>
          <td>
            <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Delete </button>
          </td>
        </tr>
      )
    });
  }

  onDelete(id){
    Swal.fire({
      title: 'Estás seguro?',
      text: 'No se podrá revertir los cambios realizados!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      }
    })
  }

  sendDelete(userId){
    // url de backend
    const baseUrl = "http://localhost:3000/employee/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:userId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
        this.loadEmployee()
      }
    })
    .catch ( error => {
      swal("Error 325 ")
    })
  }
}

export default list;