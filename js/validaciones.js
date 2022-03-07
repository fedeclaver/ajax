
function validarRegistro(user,pass,mail,users){

  sessionStorage.setItem("user", JSON.stringify(userMatch));
  if (users.some(arrVal => user === arrVal.usuario)){
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: `El usuario ya esta registrado`,
  })
  return false
  }
}


function ingresarCuotas(plazo){
    if (plazo <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: `Has ingresado un número de cuotas inválido. El Plazo debe ser mayor a 0`,
        })
        return false;
    }
    return true;
  }
  function validarRegistro(user,pass,mail,users){
    if ($("#user").val().length == 0 && $("#mail").val().length == 0 && $("#pass").val().length == 0 ){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: `No se a ingresado un campo requerido`,
    })
    } 
    if (users.some(arrVal => user === arrVal.usuario)){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: `El usuario ya esta registrado`,
    })
    return false
    } 
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: `El mail ingresado ya esta registrado`,
    })
    return false
    } 
    if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(pass))){
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: `El password debe tener: 1 minuscula, 1 numero, 1 mayuscula, 1 caracter especial y minimo 8 caracteres`,
    })
    return false
    }
    return true
  }



  function solicitarMonto(monto){
    if (monto <= 1000 || monto > 1500000){
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: `Has ingresado un número de cuotas inválido. El minimo es $1000 y el maximo $1500000`,
        })
        return false;
    }
    return true;
  }


  