$(document).ready(function()
	{
        //recupero datos usuario para registrarlo
	$("#Registrar").click(function () {
        if ($("#user").val().length > 0 && $("#mail").val().length > 0 && $("#pass").val().length > 0 ){
            
    let user = new User($("#user").val(), $("#mail").val(), $("#pass").val());
    appendObjectToLocalStorage(user,'user');

      Swal.fire(
        'Registro Exitoso!',
        'You clicked the button!',
        'success'
      )
      $('.swal2-confirm').click(function(){
        window.location.replace("../pages/home.html");
  });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: `No se a ingresado un campo requerido`,
            })
            return false;
        }
        

    });
    //recupero datos del usuario registrado en localstorage
    $("#Login").click(function () {   
        if ($("#usuario").val().length > 0 && $("#password").val().length > 0 ){
            let usuario = $("#usuario").val();
          let user=  loadFromLocalStorage('user');
           let finduser =  user.find(element => element.usuario == usuario );
           if (finduser.usuario.length > 0 ){
            if (finduser.password == $("#password").val()){                
                Swal.fire(
                    'Login Exitoso!',
                    'You clicked the button!',
                    'success'
                  )
                  $('.swal2-confirm').click(function(){
                    window.location.replace("../pages/home.html");
              });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ups...',
                    text: `Pass erroneo o invalido`,
                })  
            } 
           } else {
           Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: `No se encontro el usuario`,
        })
         
        }
         
          
    
        }
    })
    
    
    }
);

