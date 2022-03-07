

$(document).ready(function () {
    //obtengo la lista de usuarios
    const users = JSON.parse(localStorage.getItem("users")) || [];
    //recupero datos usuario para registrarlo
    $("#Registrar").click(function () {

        if (validarRegistro($("#user").val(), $("#pass").val(), $("#mail").val(), users) == true) {
            //si paso las validaciones registro nuevo usuario       
            let user = new User($("#user").val(), $("#mail").val(), $("#pass").val());
            users.push(new User($("#user").val(), $("#mail").val(), $("#pass").val()));
            appendObjectToLocalStorage(user, 'user');
            appendObjectToLocalStorage(users, 'users');

            Swal.fire(
                'Registro Exitoso!',
                'You clicked the button!',
                'success'
            )
            $('.swal2-confirm').click(function () {
               window.location.replace("../pages/home.html");
            })
        }
    })





    //recupero datos del usuario registrado en localstorage
    $("#Login").click(function () {
        if ($("#usuario").val().length > 0 && $("#password").val().length > 0) {
            let usuario = $("#usuario").val();         
            let finduser = users.find(element => element.usuario == usuario);
            if (finduser.usuario.length > 0) {
                if (finduser.password == $("#password").val()) {
                    sessionStorage.setItem("user", JSON.stringify(finduser));
                    Swal.fire(
                        'Login Exitoso!',
                        'You clicked the button!',
                        'success'
                    ),
                    $('.swal2-confirm').click(function () {
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

