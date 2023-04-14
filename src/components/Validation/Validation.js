const validation = (userData) => {
  const errors = {};

  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
    errors.email = 'Ingrese un email valido';
  }

  if(!userData.email) errors.email = 'El campo no puede estar vacio';

  if(userData.email.length > 35) errors.email = 'Maximo 35 caracteres';

  if(!/.*\d+.*/.test(userData.password)){
    errors.password ='Debe contener al menos un numero'
  }

  if(userData.password.lenght > 10 || userData.password.lenght <6) errors.password = 'Debe poseer entre 6 y 10 caracteres'

  return errors;
}

export default validation;