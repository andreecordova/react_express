const Role = require('../models/Role');
const User = require('../models/User');

async function index(req,res) {
  const data = await User.findAll({
    include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  });
	
  res.json({ 
		success: true, 
		data:data 
	});
}

async function create(req,res) {
  const {name, email, address, phone, role } = req.body;
  const data = await User.create({
    name:name,
    email:email,
    address:address,
    phone:phone,
    roleId:role,
    status: 1
  })
  .then(function(data){
    return data;
  })
  .catch(error => {
    console.log(error)
    return error;
  });

  res.status(200).json({
    success:true,
    message:"Guardo exitosamente",
    data:data
  });
}

async function edit(req, res) {
  const { id } = req.params;
  const data = await User.findByPk(id, {
    include: [ Role ]
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  });
	
  res.json({
		success:true, 
		data:data
	});
}

async function update(req, res) {
  const { id } = req.params;
  const { name, email, phone, address, role } = req.body;
  const data = await User.update({
    name: name,
    email:email,
    address:address,
    phone:phone,
    roleId:role
  },{
    where: { id: id}
  })
  .then( function (data){
    return data;
  })
  .catch(error => {
    return error;
  });

  res.json({ 
		success:true, 
		data: data, 
		message: "Registro Actualizado."
	});
}

async function delete(req,res) {
  const { id } = req.params;
  const user = await User.update({
    status: 0,
  }, {
    where: { id: id }
  });
  
	res.json({
		success:true, 
		message: "Registro Eliminado."
	});
}

module.exports = { index, create, edit, update, delete };