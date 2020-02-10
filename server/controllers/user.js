const User = require('../models/User');

async function index(req,res) {
  const data = await User.findAll({
    where: { status: 1 }
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
  const { name, mother_lastname, father_lastname, email, phone, address } = req.body;
  const data = await User.create({
    name: name,
    father_lastname: father_lastname,
    mother_lastname: mother_lastname,
    email:email,
    address:address,
    phone:phone,
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
  const data = await User.findByPk(id)
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
  const { name, mother_lastname, father_lastname, email, phone, address } = req.body;
  const data = await User.update({
    name: name,
    father_lastname: father_lastname,
    mother_lastname: mother_lastname,
    email:email,
    address:address,
    phone:phone
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